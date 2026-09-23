import fs from 'node:fs';
import c from '../site.config.mjs';

const dims = JSON.parse(fs.readFileSync(new URL('../public/img/dims.json', import.meta.url)));

export const esc = (s) => String(s).replace(/[&<>"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));

// Responsive WebP photo. `sizes` defaults to full width.
export function img(name, alt, { sizes = '100vw', cls = '', eager = false } = {}) {
  const d = dims[name];
  if (!d) throw new Error(`unknown image ${name}`);
  const [w, h, max] = d;
  const widths = [640, 1280, 1920].filter((x) => x <= max);
  const srcset = widths.map((x) => `/img/${name}-${x}.webp ${x}w`).join(', ');
  return `<img src="/img/${name}-${widths.at(-1) === 1920 ? 1280 : widths.at(-1)}.webp" srcset="${srcset}" sizes="${sizes}" width="${w}" height="${h}" alt="${esc(alt)}"${cls ? ` class="${cls}"` : ''}${eager ? ' fetchpriority="high"' : ' loading="lazy" decoding="async"'}>`;
}

export const tel = (label = c.phone, cls = 'btn btn-ghost') => `<a class="${cls}" href="tel:${c.phoneHref}">${label}</a>`;
export const bookBtn = (label = 'Book a Boil', cls = 'btn') => `<a class="${cls}" href="/book/">${label}</a>`;

export const ratingLine = () =>
  `<a class="rating" href="${c.googleReviewsUrl}" rel="noopener" target="_blank"><span class="stars" aria-hidden="true">★★★★★</span> <b>${c.rating.value}</b> on ${c.rating.source} &middot; ${c.rating.count} reviews</a>`;

export function hero({ image, alt, eyebrow, h1, lede, ctas = true, short = false }) {
  return `<section class="hero${short ? ' hero-short' : ''}">
  ${img(image, alt, { eager: true, cls: 'hero-bg' })}
  <div class="hero-in wrap">
    ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}
    <h1>${h1}</h1>
    ${lede ? `<p class="lede">${lede}</p>` : ''}
    ${ctas ? `<div class="ctas">${bookBtn()}${tel(`Call ${c.phone}`)}</div>${ratingLine()}` : ''}
  </div>
</section>`;
}

const LOGOS = [
  ['tesla', 'Tesla'], ['exxon', 'ExxonMobil'], ['cisco', 'Cisco'], ['procore', 'Procore'],
  ['ut-austin', 'The University of Texas at Austin'], ['auctane', 'Auctane'], ['build-a-sign', 'BuildASign'],
  ['still-austin', 'Still Austin Whiskey Co.'], ['real-ale', 'Real Ale Brewing Co.'], ['oskar-blues', 'Oskar Blues Brewery'],
  ['independence', 'Independence Brewing Co.'], ['southern-heights', 'Southern Heights Brewing Co.'],
  ['whitestone', 'Whitestone Brewery'], ['blue-owl', 'Blue Owl Brewing'], ['docs', "Doc's Bar & Grill"],
  ['north-lake-travis-chamber', 'North Lake Travis Chamber of Commerce'], ['crea', 'CREA'],
];
export function clients(heading = 'Clients we&rsquo;ve boiled for') {
  return `<section class="band band-light clients">
  <div class="wrap">
    <h2>${heading}</h2>
    <ul class="logos">${LOGOS.map(([f, n]) => `<li><img src="/img/logos/${f}.webp" alt="${esc(n)}" loading="lazy" decoding="async" width="${dims['logos/' + f][0]}" height="${dims['logos/' + f][1]}"></li>`).join('')}</ul>
  </div>
</section>`;
}

export const AUCTANE = {
  quote: 'Every time Hoodoo Crawfish is part of our events, they bring more than just incredible food. They bring an energy that transforms the whole atmosphere. Their crawfish boils, jambalaya, and shrimp are a hit every time&hellip; We&rsquo;ve had the pleasure of working with them multiple times already, and we&rsquo;re lucky enough to have two more events already scheduled.',
  name: 'Mallory S.',
  role: 'Office Experience Manager, Auctane',
};
export function testimonial(t = AUCTANE) {
  return `<figure class="quote"><blockquote><p>&ldquo;${t.quote}&rdquo;</p></blockquote><figcaption><b>${t.name}</b> &middot; ${t.role}</figcaption></figure>`;
}

export function faq(items) {
  return {
    html: `<div class="faq">${items.map(([q, a]) => `<details><summary>${q}</summary><div>${a}</div></details>`).join('')}</div>`,
    schema: {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q.replace(/<[^>]+>/g, ''), acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, '') } })),
    },
  };
}

export function bookBand(title = 'Book a boil', sub = 'Tell us the date, the headcount and where. We&rsquo;ll come back with a quote.') {
  return `<section class="band band-red book-band">
  <div class="wrap split">
    <div><h2>${title}</h2><p>${sub}</p></div>
    <div class="ctas">${bookBtn('Check a date', 'btn btn-dark')}${tel(`Call ${c.phone}`, 'btn btn-ghost-light')}</div>
  </div>
</section>`;
}

export function serviceSchema({ name, description, url, serviceType }) {
  return {
    '@context': 'https://schema.org', '@type': 'Service', name, description, serviceType,
    url: c.siteUrl + url,
    provider: { '@id': c.siteUrl + '/#business' },
    areaServed: { '@type': 'City', name: 'Austin', containedInPlace: { '@type': 'State', name: 'Texas' } },
  };
}

export const crumbs = (trail) => ({
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [['Home', '/'], ...trail].map(([n, u], i) => ({ '@type': 'ListItem', position: i + 1, name: n, item: c.siteUrl + u })),
});
