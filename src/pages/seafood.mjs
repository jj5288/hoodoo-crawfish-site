import c from '../../site.config.mjs';
import { hero, img, faq, bookBand, serviceSchema, crumbs, testimonial } from '../lib.mjs';

const path = '/seafood-boil-catering/';
const q = faq([
  ['What is in a seafood boil?',
    'Ours is shrimp and crab clusters boiled with corn, potatoes and sausage in our family spice blend, then poured hot down the middle of the table. In crawfish season you can add crawfish to the same boil.'],
  ['Can we have a seafood boil when crawfish is out of season?',
    'Yes, that is the point of it. Crawfish runs roughly January through June. Shrimp and crab are available all year, so a Hoodoo boil works for an October office party, a Thanksgiving-week gathering or a December holiday event.'],
  ['Is a seafood boil good for guests who don&rsquo;t eat crawfish?',
    'It is the easier crowd-pleaser. Shrimp and crab are familiar to everyone, need less technique to eat, and still give you the Louisiana table and the moment the boil hits the paper.'],
  ['How much shrimp and crab per person?',
    'As a main course, a common rule is about half a pound to a pound of shell-on shrimp per adult, or one to two crab clusters, with corn, potatoes and sausage filling out the plate. Tell us your crowd and we&rsquo;ll size it. More on the <a href="/how-much-crawfish-per-person/">per person guide</a>.'],
]);

export default {
  path,
  title: 'Seafood Boil Catering in Austin | Shrimp & Crab Boils Year-Round',
  description: 'Louisiana seafood boil catering in Austin: shrimp and crab boils cooked on site for office parties, tailgates, holidays and backyard parties, year-round.',
  ogImage: 'crab-shrimp-platter',
  preload: 'crab-shrimp-platter',
  schema: [
    serviceSchema({ name: 'Seafood boil catering', serviceType: 'Seafood boil catering', url: path,
      description: 'On-site shrimp and crab boil catering in Austin, Texas, available year-round.' }),
    crumbs([['Seafood Boil Catering', path]]), q.schema,
  ],
  body: `
${hero({
  image: 'crab-shrimp-platter', alt: 'Crab clusters, shrimp and corn from a Hoodoo seafood boil', short: true,
  eyebrow: 'Shrimp &amp; crab boils, twelve months a year',
  h1: 'Seafood Boil Catering in Austin',
  lede: 'Austin wants a seafood boil all year. Most places will only sell you one at a restaurant table. We bring the whole Louisiana boil to your office, backyard or venue, crawfish season or not.',
})}

<section class="band">
  <div class="wrap split">
    <div>
      <h2>A Louisiana boil in October</h2>
      <p>Crawfish is a spring thing. A boil isn&rsquo;t. Same crew, same cookers, same family seasoning. From summer through winter we swap the crawfish for shrimp and crab and keep everything else that makes a boil a boil: the steam, the smell, and the whole thing dumped down the middle of the table.</p>
      <ul class="checks">
        <li><b>Shrimp boils</b>Shell-on shrimp, corn, potatoes and sausage in our spice blend.</li>
        <li><b>Crab boils</b>Crab clusters with shrimp and all the fixings. The one people photograph.</li>
        <li><b>Cooked on site</b>We bring the cookers and serve it hot, not out of a warming tray.</li>
        <li><b>Crawfish on top in season</b>From January to June, add crawfish to the same boil.</li>
      </ul>
      <div class="ctas"><a class="btn" href="/book/">Book a seafood boil</a><a class="btn btn-ghost" href="tel:${c.phoneHref}">Call ${c.phone}</a></div>
    </div>
    ${img('shrimp-beer', 'Boiled shrimp with corn and potatoes and local beer', { sizes: '(max-width:760px) 100vw, 560px' })}
  </div>
</section>

<section class="band band-red">
  <div class="wrap">
    <h2>Made for the off-season calendar</h2>
    <p class="sub">The months when crawfish is out are the months with the most parties.</p>
    <div class="cards four">
      <div class="card"><div class="card-b"><h3>Fall office parties</h3><p>A Thursday team boil beats another catered sandwich tray.</p></div></div>
      <div class="card"><div class="card-b"><h3>Tailgates &amp; watch parties</h3><p>Longhorns Saturdays and Sunday games, boiled in your backyard.</p></div></div>
      <div class="card"><div class="card-b"><h3>Holiday parties</h3><p>Company holiday events and client appreciation in November and December.</p></div></div>
      <div class="card"><div class="card-b"><h3>Summer gatherings</h3><p>Pool parties, reunions and Fourth of July, long after crawfish season ends.</p></div></div>
    </div>
  </div>
</section>

<section class="band">
  <div class="wrap">
    <div class="gallery">
      ${img('crab-shrimp-platter', 'Crab and shrimp seafood boil', { cls: 'tall wide', sizes: '(max-width:760px) 100vw, 580px' })}
      ${img('shrimp-boil', 'Shrimp and sausage in a boil', { sizes: '(max-width:760px) 50vw, 290px' })}
      ${img('cooker-veg', 'Boil cooker loaded with corn and potatoes', { sizes: '(max-width:760px) 50vw, 290px' })}
      ${img('party-table', 'Guests eating a seafood boil at a long table', { sizes: '(max-width:760px) 50vw, 290px' })}
      ${img('boil-steam', 'Steam rising from a Hoodoo boil', { sizes: '(max-width:760px) 50vw, 290px' })}
    </div>
  </div>
</section>

<section class="band band-coal">
  <div class="wrap narrow">
    ${testimonial()}
  </div>
</section>

<section class="band">
  <div class="wrap narrow">
    <h2>Seafood boil questions</h2>
    ${q.html}
  </div>
</section>

${bookBand('Book a seafood boil', 'Any month, any day of the week. Tell us the date and headcount.')}
`,
};
