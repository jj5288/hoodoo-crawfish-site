import c from '../../site.config.mjs';
import { hero, img, clients, testimonial, faq, bookBand, bookBtn } from '../lib.mjs';

const q = faq([
  ['Do you cater crawfish boils outside crawfish season?',
    'Yes. Crawfish are a spring product, usually January through June, but shrimp and crab boils run all year. Same crew, same cookers, same family seasoning. In the fall and winter we boil shrimp and crab for office parties, tailgates and holiday events. See <a href="/seafood-boil-catering/">seafood &amp; crab boil catering</a>.'],
  ['How far ahead should we book?',
    'Spring Saturdays book out first, often months ahead. Monday through Thursday dates are much easier to get, and that is when most corporate boils happen anyway. If your Saturday is taken, ask about the weekday before it.'],
  ['How much crawfish do we need per person?',
    'Plan on about 3 pounds of live crawfish per adult when crawfish is the main event, and closer to 5 for a crowd of serious eaters. Our <a href="/how-much-crawfish-per-person/">crawfish per person calculator</a> does the math for your headcount.'],
  ['Where do you cater?',
    'We are based in Austin and cater across the metro and out into the Hill Country. Our clients run from Austin tech offices to Hill Country breweries.'],
  ['Do you cook on site?',
    'Yes. We bring the cookers, boil on site and serve hot, so your guests get the smell, the steam and the dump onto the table, not a tray that sat in a van.'],
]);

export default {
  path: '/',
  title: 'Crawfish & Seafood Boil Catering in Austin, TX | Hoodoo Crawfish',
  description: 'Louisiana-born Cajun catering in Austin: crawfish, shrimp and crab boils cooked on site for corporate events, private parties and festivals. 5.0 on Google.',
  preload: 'hero-crawfish-corn',
  schema: [q.schema],
  body: `
${hero({
  image: 'hero-crawfish-corn',
  alt: 'Boiled crawfish with corn and potatoes from a Hoodoo Crawfish boil',
  eyebrow: 'Based in Austin, born in Louisiana',
  h1: 'Crawfish &amp; Seafood Boil Catering in Austin',
  lede: 'We bring the cookers, boil crawfish, shrimp and crab on site with our family&rsquo;s secret seasoning, and dump it hot on the table. Corporate events, backyard parties, festivals. Crawfish in spring, seafood boils all year.',
})}

<section class="band">
  <div class="wrap">
    <h2>What we boil</h2>
    <p class="sub">Three boils, one crew. Crawfish follows the season; shrimp and crab don&rsquo;t, so you can book a Hoodoo boil any month of the year.</p>
    <div class="cards">
      <a class="card" href="/menu/#crawfish">${img('crawfish-tray', 'Tray of boiled Louisiana crawfish', { sizes: '(max-width:760px) 100vw, 380px' })}
        <div class="card-b"><span class="tag">January &ndash; June</span><h3>Crawfish Boils</h3><p>Louisiana crawfish boiled with corn, potatoes and sausage in our secret family spice blend.</p><span class="more">See the menu &rarr;</span></div></a>
      <a class="card" href="/seafood-boil-catering/">${img('shrimp-beer', 'Boiled shrimp, corn and potatoes next to local beer', { sizes: '(max-width:760px) 100vw, 380px' })}
        <div class="card-b"><span class="tag">Year-round</span><h3>Shrimp Boils</h3><p>Shrimp boiled the same way. The easy yes for fall office parties and anyone who doesn&rsquo;t want to peel tails.</p><span class="more">Seafood boil catering &rarr;</span></div></a>
      <a class="card" href="/seafood-boil-catering/">${img('crab-shrimp-platter', 'Snow crab legs and shrimp from a seafood boil', { sizes: '(max-width:760px) 100vw, 380px' })}
        <div class="card-b"><span class="tag">Year-round</span><h3>Crab Boils</h3><p>Crab clusters with shrimp, corn and potatoes. A Louisiana seafood boil in October, in your backyard.</p><span class="more">Seafood boil catering &rarr;</span></div></a>
    </div>
  </div>
</section>

<section class="band band-red">
  <div class="wrap split">
    <div>
      <h2>Weekends go fast. Weekdays don&rsquo;t.</h2>
      <p>Spring Saturdays are the first dates on our calendar to disappear. Monday through Thursday usually isn&rsquo;t, and that is when most company boils happen anyway: a Thursday team lunch, a customer-appreciation afternoon, a Tuesday site party.</p>
      ${c.weekdayOffer ? `<p><b>Weekday rate:</b> ${c.weekdayOffer}.</p>` : ''}
      <div class="ctas">${bookBtn('Check a weekday', 'btn btn-dark')}<a class="btn btn-ghost-light" href="/corporate-catering/">Corporate boils</a></div>
    </div>
    ${img('warehouse-boil', 'Company crawfish boil laid out on long tables inside a warehouse', { sizes: '(max-width:760px) 100vw, 560px' })}
  </div>
</section>

<section class="band">
  <div class="wrap">
    <h2>Events we cater</h2>
    <p class="sub">From a backyard birthday to a company-wide boil under a tent.</p>
    <div class="cards">
      <a class="card" href="/corporate-catering/">${img('corporate-balloons', 'Corporate crawfish boil outside an Austin office with red balloon arch', { sizes: '(max-width:760px) 100vw, 380px' })}
        <div class="card-b"><h3>Corporate Events</h3><p>Team lunches, client appreciation, office parties and site celebrations. We&rsquo;ve boiled for Tesla, Cisco, ExxonMobil and Procore.</p><span class="more">Corporate catering &rarr;</span></div></a>
      <a class="card" href="/private-party-catering/">${img('backyard-crew', 'Hosts and the Hoodoo crew at a backyard crawfish boil', { sizes: '(max-width:760px) 100vw, 380px' })}
        <div class="card-b"><h3>Private Parties</h3><p>Birthdays, graduations, rehearsal dinners, reunions and the neighborhood boil you keep promising to throw.</p><span class="more">Private party catering &rarr;</span></div></a>
      <a class="card" href="/festival-catering/">${img('festival-tent', 'Hoodoo Crawfish tent serving a crowd at a festival', { sizes: '(max-width:760px) 100vw, 380px' })}
        <div class="card-b"><h3>Festivals &amp; Breweries</h3><p>High-volume boils for festivals, brewery events and fundraisers, served fast to a line.</p><span class="more">Festival catering &rarr;</span></div></a>
    </div>
  </div>
</section>

<section class="band band-coal">
  <div class="wrap split">
    ${img('team-banner', 'The Hoodoo Crawfish Catering Co. crew behind their banner', { sizes: '(max-width:760px) 100vw, 560px' })}
    <div>
      <p class="eyebrow">About Hoodoo</p>
      <h2>Louisiana natives, boiling mudbugs in Austin</h2>
      <p>We grew up on crawfish boils in Louisiana and brought the whole thing with us: the cookers, the patience, and a spice blend that stays in the family. Whether it&rsquo;s a company party or the event of the century, you get a boil that looks and tastes the way it does back home, with real Cajun seasoning.</p>
      <p>We cook on site and serve it hot, so the host gets to eat too.</p>
      ${testimonial()}
    </div>
  </div>
</section>

<section class="band">
  <div class="wrap">
    <h2>How booking works</h2>
    <ol class="steps">
      <li><h3>Send the date</h3><p>Date, headcount, location, and crawfish or seafood. Two minutes on the <a href="/book/">booking form</a> or a call to ${c.phone}.</p></li>
      <li><h3>Get a quote</h3><p>We confirm the date, size the boil to your crowd and send a quote.</p></li>
      <li><h3>We boil, you eat</h3><p>We arrive, set up, boil on site and serve. You host.</p></li>
    </ol>
  </div>
</section>

${clients()}

<section class="band">
  <div class="wrap split top">
    <div>
      <h2>Planning a boil?</h2>
      <p class="sub">Two questions every host asks. We answered them properly.</p>
      <div class="cards" style="grid-template-columns:1fr">
        <a class="card" href="/how-much-crawfish-per-person/"><div class="card-b"><h3>How much crawfish per person?</h3><p>A calculator for your headcount, plus how to size shrimp, crab, corn and potatoes.</p><span class="more">Do the math &rarr;</span></div></a>
        <a class="card" href="/crawfish-season-texas/"><div class="card-b"><h3>When is crawfish season in Texas?</h3><p>Month by month: when crawfish are available in Austin, when they&rsquo;re best, and what to boil the rest of the year.</p><span class="more">See the season &rarr;</span></div></a>
      </div>
    </div>
    <div>
      <h2>Questions</h2>
      ${q.html}
    </div>
  </div>
</section>

${bookBand()}
`,
};
