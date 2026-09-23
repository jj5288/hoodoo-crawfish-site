import c from '../../site.config.mjs';
import { hero, img, bookBand, crumbs } from '../lib.mjs';

// Items come from the old site's own words (home, catering pages, delivery form and the Auctane review).
// Prices are deliberately absent until Hoodoo supplies them; `price: null` renders nothing.
const SECTIONS = [
  { id: 'crawfish', name: 'Crawfish Boils', note: 'In season, roughly January through June', items: [
    ['Louisiana Crawfish Boil', 'Crawfish boiled on site in our secret family spice blend, with corn, potatoes and sausage.', null],
  ] },
  { id: 'seafood', name: 'Seafood Boils', note: 'Year-round', items: [
    ['Shrimp Boil', 'Shrimp boiled with corn, potatoes and sausage.', null],
    ['Crab Boil', 'Crab clusters and shrimp with corn, potatoes and sausage.', null],
    ['Combination Boil', 'Crawfish, shrimp and crab in one boil, when crawfish is in season.', null],
  ] },
  { id: 'sides', name: 'On the Side', note: 'Ask when you book', items: [
    ['Jambalaya', 'Louisiana-style jambalaya alongside the boil.', null],
  ] },
  { id: 'platters', name: 'Delivery Platters', note: '3 platter minimum', items: [
    ['HooDoo Magic Platter', '2 crab clusters, shrimp, sausage, corn and potato.', null],
    ['Shrimp Plate', 'Shrimp, sausage, corn and potato.', null],
  ] },
];

const menuSchema = {
  '@context': 'https://schema.org', '@type': 'Menu', name: 'Hoodoo Crawfish Catering Menu', url: c.siteUrl + '/menu/',
  hasMenuSection: SECTIONS.map((s) => ({ '@type': 'MenuSection', name: s.name,
    hasMenuItem: s.items.map(([n, d, p]) => ({ '@type': 'MenuItem', name: n, description: d,
      ...(p ? { offers: { '@type': 'Offer', price: p.replace(/[^0-9.]/g, ''), priceCurrency: 'USD' } } : {}) })) })),
};

export default {
  path: '/menu/',
  title: 'Catering Menu | Crawfish, Shrimp & Crab Boils | Hoodoo Crawfish Austin',
  description: 'The Hoodoo Crawfish catering menu: Louisiana crawfish boils in season, shrimp and crab boils year-round, jambalaya, and delivery platters in Austin.',
  ogImage: 'crawfish-macro', preload: 'crawfish-macro',
  schema: [menuSchema, crumbs([['Menu', '/menu/']])],
  body: `
${hero({ image: 'crawfish-macro', alt: 'Close-up of bright red boiled crawfish', short: true, ctas: false,
  eyebrow: 'Boiled on site, served hot',
  h1: 'Catering Menu',
  lede: 'Every boil is seasoned with our secret family spice blend and cooked at your event. Pricing depends on headcount, date and what goes in the pot, so tell us about your event and we&rsquo;ll send a quote.' })}

<section class="band">
  <div class="wrap">
    ${c.startingPrice ? `<p class="callout">${c.startingPrice}</p>` : ''}
    <div class="menu-grid">
      ${SECTIONS.map((s) => `<div class="menu-sec" id="${s.id}"><h2>${s.name}</h2><p class="small">${s.note}</p><dl>${s.items.map(([n, d, p]) => `<dt>${n}${p ? `<span class="price">${p}</span>` : ''}</dt><dd>${d}</dd>`).join('')}</dl></div>`).join('')}
    </div>
    <p class="small" style="margin-top:24px">Not sure how much to order? Use the <a href="/how-much-crawfish-per-person/">crawfish per person calculator</a>. Want platters dropped off instead of a full boil? See <a href="/delivery/">delivery</a>.</p>
    <div class="ctas"><a class="btn" href="/book/">Get a quote</a><a class="btn btn-ghost" href="tel:${c.phoneHref}">Call ${c.phone}</a></div>
  </div>
</section>

<section class="band band-coal">
  <div class="wrap">
    <div class="gallery">
      ${img('crawfish-tray', 'Crawfish boil tray', { cls: 'tall', sizes: '(max-width:760px) 50vw, 290px' })}
      ${img('boil-scoop', 'Scooping crawfish, sausage and potatoes out of the boil', { cls: 'wide', sizes: '(max-width:760px) 100vw, 580px' })}
      ${img('shrimp-boil', 'Shrimp boil', { sizes: '(max-width:760px) 50vw, 290px' })}
      ${img('crab-shrimp-platter', 'Crab and shrimp platter', { sizes: '(max-width:760px) 50vw, 290px' })}
    </div>
  </div>
</section>

${bookBand()}
`,
};
