import fs from 'node:fs';
import c from '../site.config.mjs';
import { esc, tel, imgSources } from './lib.mjs';

const preloadTag = (name) => { const { srcset, fallback } = imgSources(name); return `<link rel="preload" as="image" href="/img/${name}-${fallback}.webp" imagesrcset="${srcset}" imagesizes="100vw" fetchpriority="high">`; };

const css = fs.readFileSync(new URL('./style.css', import.meta.url), 'utf8')
  .replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s*\n\s*/g, '').replace(/\s*([{}:;,>])\s*/g, '$1');

export const NAV = [
  ['Catering', null, [
    ['Seafood &amp; Crab Boils', '/seafood-boil-catering/'],
    ['Corporate &amp; Weekday', '/corporate-catering/'],
    ['Private Parties', '/private-party-catering/'],
    ['Festivals', '/festival-catering/'],
    ['Delivery Platters', '/delivery/'],
  ]],
  ['Menu', '/menu/'],
  ['Plan a Boil', null, [
    ['How Much Crawfish Per Person', '/how-much-crawfish-per-person/'],
    ['When Is Crawfish Season?', '/crawfish-season-texas/'],
  ]],
  ['Events', '/events/'],
  ['Reviews', '/reviews/'],
  ['Swag', '/merchandise/'],
];

const business = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  '@id': c.siteUrl + '/#business',
  name: c.name,
  alternateName: 'HooDoo Crawfish',
  url: c.siteUrl + '/',
  logo: c.siteUrl + '/img/logo.png',
  image: c.siteUrl + '/img/hero-crawfish-corn.jpg',
  telephone: '+1-512-552-7191',
  email: c.email,
  servesCuisine: ['Cajun', 'Seafood', 'Louisiana'],
  description: 'Louisiana-born mobile catering company in Austin, Texas, boiling crawfish, shrimp and crab on site for corporate events, private parties and festivals.',
  address: { '@type': 'PostalAddress', addressLocality: 'Austin', addressRegion: 'TX', addressCountry: 'US' },
  areaServed: [{ '@type': 'City', name: 'Austin' }, { '@type': 'AdministrativeArea', name: 'Austin metropolitan area, Texas' }],
  sameAs: Object.values(c.social),
  hasMenu: c.siteUrl + '/menu/',
  potentialAction: { '@type': 'ReserveAction', target: c.siteUrl + '/book/', name: 'Book a boil' },
};

function navHtml(path) {
  return NAV.map(([label, href, kids]) => {
    if (!kids) return `<li><a href="${href}"${path === href ? ' aria-current="page"' : ''}>${label}</a></li>`;
    const open = kids.some(([, h]) => h === path);
    return `<li class="has-sub"><details${open ? ' data-current' : ''}><summary>${label}</summary><ul>${kids.map(([l, h]) => `<li><a href="${h}"${path === h ? ' aria-current="page"' : ''}>${l}</a></li>`).join('')}</ul></details></li>`;
  }).join('');
}

export function layout({ path, title, description, body, schema = [], ogImage = 'hero-crawfish-corn', noindex = false, preload }) {
  const url = c.siteUrl + path;
  const ld = [path === '/' ? business : null, ...schema].filter(Boolean);
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
${noindex || process.env.STAGING ? '<meta name="robots" content="noindex,nofollow">' : ''}
<meta property="og:type" content="website">
<meta property="og:site_name" content="${c.shortName}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${c.siteUrl}/img/${ogImage}.jpg">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#0b0a0a">
<link rel="icon" href="/img/icon-32.png" sizes="32x32">
<link rel="apple-touch-icon" href="/img/icon-180.png">
<link rel="manifest" href="/site.webmanifest">
${preload ? preloadTag(preload) : ''}
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" media="print" onload="this.media='all'">
<style>${css}</style>
${ld.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n')}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site-head">
  <div class="wrap head-in">
    <a class="brand" href="/" aria-label="Hoodoo Crawfish home"><img src="/img/logo.webp" width="96" height="94" alt="Hoodoo Crawfish Catering Co."></a>
    <details class="menu-toggle"><summary aria-label="Menu"><span></span><span></span><span></span></summary></details>
    <nav aria-label="Main"><ul>${navHtml(path)}</ul></nav>
    <div class="head-cta">${tel(c.phone, 'head-tel')}<a class="btn btn-sm" href="/book/">Book a Boil</a></div>
  </div>
</header>
<main id="main">
${body}
</main>
<footer class="site-foot">
  <div class="wrap foot-grid">
    <div>
      <img src="/img/logo.webp" width="120" height="118" alt="" loading="lazy">
      <p><b>${c.name}</b><br>Based in Austin, born in Louisiana.<br>Crawfish, shrimp &amp; crab boils catered on site.</p>
    </div>
    <div>
      <h2>Catering</h2>
      <ul>${NAV[0][2].map(([l, h]) => `<li><a href="${h}">${l}</a></li>`).join('')}<li><a href="/menu/">Menu</a></li></ul>
    </div>
    <div>
      <h2>Plan</h2>
      <ul>${NAV[2][2].map(([l, h]) => `<li><a href="${h}">${l}</a></li>`).join('')}<li><a href="/events/">Public Boils</a></li><li><a href="/reviews/">Reviews &amp; Clients</a></li><li><a href="/merchandise/">Hoodoo Swag</a></li></ul>
    </div>
    <div>
      <h2>Contact</h2>
      <ul>
        <li><a href="tel:${c.phoneHref}">${c.phone}</a></li>
        <li><a href="mailto:${c.email}">${c.email}</a></li>
        <li><a href="${c.calendly}" rel="noopener">Schedule a call</a></li>
        <li><a href="${c.social.instagram}" rel="noopener">Instagram</a> &middot; <a href="${c.social.facebook}" rel="noopener">Facebook</a></li>
      </ul>
      <p class="small">Serving Austin and the Hill Country.</p>
    </div>
  </div>
  <div class="wrap foot-base"><span>&copy; ${new Date().getFullYear()} ${c.name}</span><a href="/privacy-policy/">Privacy Policy</a></div>
</footer>
<a class="sticky-call" href="tel:${c.phoneHref}">Call</a><a class="sticky-book" href="/book/">Book a Boil</a>
<script>document.querySelector('.menu-toggle').addEventListener('toggle',e=>document.body.classList.toggle('nav-open',e.target.open));document.querySelectorAll('.has-sub details').forEach(d=>d.addEventListener('toggle',()=>{if(d.open)document.querySelectorAll('.has-sub details').forEach(o=>{if(o!==d)o.open=false})}));</script>
</body>
</html>`;
}
