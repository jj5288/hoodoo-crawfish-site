import c from '../../site.config.mjs';
import { hero, img, faq, bookBand, crumbs } from '../lib.mjs';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const seasonStrip = () => `<div class="season" role="img" aria-label="Crawfish season: in season January through June, peak March through May; shrimp and crab boils the rest of the year">${MONTHS.map((m, i) => `<div class="${i >= 2 && i <= 4 ? 'pk' : i <= 5 ? 'on' : ''}">${m}</div>`).join('')}</div>
<p class="legend"><span><i style="background:var(--red)"></i>Crawfish in season</span><span><i style="background:var(--red-deep);box-shadow:inset 0 -3px 0 var(--corn)"></i>Peak: biggest and most plentiful</span><span><i style="background:#e8e0cf"></i>Shrimp &amp; crab boils</span></p>`;

const article = (who, headline, description, path, image) => ({
  '@context': 'https://schema.org', '@type': 'Article', headline, description,
  image: `${c.siteUrl}/img/${image}.jpg`, dateModified: '2026-09-23', datePublished: '2026-09-23',
  author: { '@type': 'Organization', name: who, url: c.siteUrl }, publisher: { '@id': c.siteUrl + '/#business' },
  mainEntityOfPage: c.siteUrl + path,
});

// ---------------------------------------------------------------- per person
const ppPath = '/how-much-crawfish-per-person/';
const ppQ = faq([
  ['How many pounds of crawfish per person?',
    'About 3 pounds of live crawfish per adult when crawfish is the main course. Go to 4 to 5 pounds for experienced eaters or a long afternoon party, and about 2 pounds if there is plenty of other food. Children usually eat 1 to 1.5 pounds.'],
  ['How many people does a sack of crawfish feed?',
    'A sack of live crawfish usually weighs roughly 30 to 35 pounds, which feeds about 10 adults at 3 pounds each, or 6 to 7 heavy eaters.'],
  ['How much crawfish meat is in a pound?',
    'Only a small share of a boiled crawfish&rsquo;s weight is tail meat, which is why the per-person numbers look big. Most of what you buy is shell.'],
  ['How much shrimp per person for a boil?',
    'About half a pound to a pound of shell-on shrimp per adult as a main course, less if crawfish or crab is also on the table.'],
  ['How much corn and potatoes per person?',
    'One to two pieces of corn and two or three small potatoes per person, plus about a quarter pound of sausage.'],
]);
const perPerson = {
  path: ppPath,
  title: 'How Much Crawfish Per Person? Calculator & Party Guide | Hoodoo',
  description: 'How many pounds of crawfish per person for a boil: about 3 lbs per adult, up to 5 for big eaters. Free calculator for your headcount, plus shrimp, corn and potatoes.',
  ogImage: 'crawfish-macro', preload: 'crawfish-macro',
  schema: [article('Hoodoo Crawfish', 'How Much Crawfish Per Person?', 'Pounds of crawfish per person for a boil, with a calculator.', ppPath, 'crawfish-macro'),
    crumbs([['How Much Crawfish Per Person', ppPath]]), ppQ.schema],
  body: `
${hero({ image: 'crawfish-macro', alt: 'A pile of boiled red crawfish', short: true, ctas: false,
  eyebrow: 'The boil planner&rsquo;s first question',
  h1: 'How Much Crawfish Per Person?',
  lede: '<b>Plan on 3 pounds of live crawfish per adult</b> when crawfish is the main event, 4 to 5 pounds for serious eaters, and about 2 if there&rsquo;s plenty of other food. Here&rsquo;s the calculator, and the reasoning behind it.' })}

<section class="band band-light">
  <div class="wrap split top">
    <form class="calc" id="calc" onsubmit="return false">
      <h2>Crawfish calculator</h2>
      <div class="row2">
        <div class="field"><label for="adults">Adults</label><input id="adults" type="number" min="0" max="5000" value="40" inputmode="numeric"></div>
        <div class="field"><label for="kids">Kids</label><input id="kids" type="number" min="0" max="5000" value="0" inputmode="numeric"></div>
      </div>
      <fieldset class="field"><legend>How hungry is this crowd?</legend>
        <div class="radios">
          <label><input type="radio" name="app" value="2">Light, lots of other food</label>
          <label><input type="radio" name="app" value="3" checked>Average</label>
          <label><input type="radio" name="app" value="5">Serious crawfish eaters</label>
        </div>
      </fieldset>
      <div class="result" aria-live="polite">
        <span class="big" id="lbs">120 lbs</span>
        <span id="detail">of live crawfish &middot; about 4 sacks</span>
        <p class="small" style="margin:8px 0 0;color:var(--ink-2)" id="sides"></p>
      </div>
      <p class="note">Rules of thumb, not a quote. Sack weights vary. <a href="/book/">Send us your headcount</a> and we&rsquo;ll size the boil for you.</p>
    </form>
    <div class="prose">
      <h2>The short version</h2>
      <table>
        <thead><tr><th>Crowd</th><th>Per adult</th><th>50 guests</th></tr></thead>
        <tbody>
          <tr><td>Plenty of other food</td><td>2 lbs</td><td>100 lbs</td></tr>
          <tr><td>Crawfish is the meal</td><td>3 lbs</td><td>150 lbs</td></tr>
          <tr><td>Serious crawfish eaters</td><td>4&ndash;5 lbs</td><td>200&ndash;250 lbs</td></tr>
          <tr><td>Kids</td><td>1&ndash;1.5 lbs</td><td>&mdash;</td></tr>
        </tbody>
      </table>
      <h2>Why the number is so big</h2>
      <p>Most of a boiled crawfish is shell and head. The tail meat is a small share of the weight, so three pounds on the table is a satisfying plate, not a mountain. Peeling also slows everyone down, which is half the fun.</p>
      <h2>What moves the number up or down</h2>
      <ul>
        <li><b>How long the party runs.</b> A four-hour afternoon eats more than a one-hour lunch.</li>
        <li><b>Who&rsquo;s coming.</b> A crowd from Louisiana eats more than first-timers.</li>
        <li><b>What else is served.</b> Jambalaya, shrimp or crab on the table cut the crawfish you need.</li>
        <li><b>Time of season.</b> Early-season crawfish run smaller, so a pound goes less far.</li>
      </ul>
    </div>
  </div>
</section>

<section class="band">
  <div class="wrap split">
    <div class="prose">
      <h2>Sizing the rest of the boil</h2>
      <p>Per adult, as a starting point:</p>
      <ul>
        <li><b>Shrimp:</b> &frac12; to 1 lb shell-on as a main, less alongside crawfish</li>
        <li><b>Crab:</b> 1 to 2 clusters</li>
        <li><b>Corn:</b> 1 to 2 pieces</li>
        <li><b>Potatoes:</b> 2 to 3 small</li>
        <li><b>Sausage:</b> about &frac14; lb</li>
      </ul>
      <p>Or skip the math: when Hoodoo caters, we size the boil to your crowd. <a href="/book/">Get a quote</a>.</p>
    </div>
    ${img('boil-scoop', 'Crawfish, sausage and potatoes being scooped from the boil', { sizes: '(max-width:760px) 100vw, 560px' })}
  </div>
</section>

<section class="band band-light"><div class="wrap narrow"><h2>Crawfish per person FAQ</h2>${ppQ.html}<p style="margin-top:24px">Planning around the calendar too? See <a href="/crawfish-season-texas/">when crawfish season is in Texas</a>.</p></div></section>
${bookBand('Let us do the math', 'Tell us the headcount and we&rsquo;ll size, cook and serve the whole boil.')}
<script>
(function(){var f=document.getElementById('calc');function n(id){return Math.max(0,Math.min(5000,parseInt(document.getElementById(id).value,10)||0))}
function r(){var a=n('adults'),k=n('kids'),p=+f.querySelector('input[name=app]:checked').value,lbs=Math.ceil(a*p+k*1.25),sacks=lbs/32;
document.getElementById('lbs').textContent=lbs.toLocaleString()+' lbs';
document.getElementById('detail').innerHTML='of live crawfish &middot; about '+(sacks<1?'1 sack or less':Math.ceil(sacks)+' sacks')+' (at ~32 lbs a sack)';
var ppl=a+k;document.getElementById('sides').textContent=ppl?('Plus roughly '+Math.ceil(ppl*1.5)+' pieces of corn, '+Math.ceil(ppl*2.5)+' small potatoes and '+Math.ceil(ppl/4)+' lbs of sausage.'):'';}
f.addEventListener('input',r);r();})();
</script>
`,
};

// ---------------------------------------------------------------- season
const sPath = '/crawfish-season-texas/';
const sQ = faq([
  ['When is crawfish season in Texas?',
    'Crawfish season in Texas, including Austin, generally runs from about January through June, with the best crawfish from March through May. Most of what Austin eats comes from Louisiana and Southeast Texas farms, so it follows their harvest.'],
  ['What is the best month for crawfish?',
    'March through May. That is when crawfish are usually biggest, most plentiful and cheapest.'],
  ['Can you get crawfish in the fall?',
    'Rarely, and not reliably. From about July to December crawfish are out of season. That is when a shrimp or crab boil takes over.'],
  ['Why does crawfish season start late some years?',
    'Crawfish depend on the weather. Hard freezes slow the harvest and droughts cut the supply, which can push the start back and the prices up.'],
  ['When should I book a crawfish caterer?',
    'Before the season starts. Spring Saturdays are the first dates to go, so January is the time to lock in a date in March, April or May.'],
]);
const season = {
  path: sPath,
  title: 'When Is Crawfish Season in Texas? Austin Month-by-Month Guide',
  description: 'Crawfish season in Texas runs about January through June, peaking March to May. An Austin month-by-month guide: when crawfish are best and when to book.',
  ogImage: 'crawfish-corn-2', preload: 'crawfish-corn-2',
  schema: [article('Hoodoo Crawfish', 'When Is Crawfish Season in Texas?', 'Crawfish season in Texas and Austin, month by month.', sPath, 'crawfish-corn-2'),
    crumbs([['Crawfish Season in Texas', sPath]]), sQ.schema],
  body: `
${hero({ image: 'crawfish-corn-2', alt: 'Boiled crawfish and corn at the height of the season', short: true, ctas: false,
  eyebrow: 'Updated for the 2027 season',
  h1: 'When Is Crawfish Season in Texas?',
  lede: '<b>Crawfish season in Texas runs from about January through June, and peaks March through May.</b> Here&rsquo;s what each month looks like in Austin, and when to book if you want a boil.' })}

<section class="band band-light">
  <div class="wrap">
    <h2>Crawfish season at a glance</h2>
    ${seasonStrip()}
  </div>
  <div class="wrap prose" style="margin-top:36px">
    <h2>Month by month in Austin</h2>
    <h3>January &ndash; February: the early season</h3>
    <p>The first crawfish show up, usually smaller and pricier, and supply swings with the weather. A cold snap can slow things down for a week or two. <b>This is also when Austin plans its spring boils</b>, so it&rsquo;s the best time to lock in a caterer for a March, April or May Saturday.</p>
    <h3>March &ndash; May: peak season</h3>
    <p>The crawfish are bigger, the supply is steady and prices are usually at their lowest. This is the heart of boil season in Austin: Easter, graduations, company spring parties, every backyard with a cooker. It&rsquo;s also when caterers&rsquo; weekends disappear, so if your Saturday is gone, look at a weekday.</p>
    <h3>June: the late season</h3>
    <p>Crawfish are still around and often large, but the supply starts to taper as the Texas heat sets in. Book early in the month if crawfish is the plan.</p>
    <h3>July &ndash; December: the off season</h3>
    <p>Crawfish are out of season. The boil isn&rsquo;t. From summer through the holidays we boil <a href="/seafood-boil-catering/">shrimp and crab</a> with the same seasoning, corn, potatoes and sausage, for fall office parties, tailgates and holiday events.</p>
    <div class="callout"><p><b>Planning a spring boil?</b> Book in January or February. Spring Saturdays are the first dates on our calendar to go; weekdays stay open longer. <a href="/book/">Check a date</a>.</p></div>
    <h2>Where Austin&rsquo;s crawfish come from</h2>
    <p>Most crawfish sold in Austin are farm-raised in Louisiana and Southeast Texas, often in rotation with rice fields. That&rsquo;s why the season here tracks the Louisiana harvest closely, and why a hard freeze or a dry year back east shows up in Austin prices a few weeks later.</p>
    <h2>How to tell a good crawfish season from a bad one</h2>
    <ul>
      <li><b>A mild winter</b> usually means an earlier, fuller season.</li>
      <li><b>Hard freezes</b> slow the harvest and can push the start back.</li>
      <li><b>Drought</b> the summer before can cut supply sharply and raise prices across the whole season.</li>
    </ul>
    <p class="upd">Last updated September 2026. We&rsquo;ll update this page as the 2027 season takes shape.</p>
  </div>
</section>

<section class="band"><div class="wrap narrow"><h2>Crawfish season FAQ</h2>${sQ.html}<p style="margin-top:24px">Sizing your boil? Use the <a href="/how-much-crawfish-per-person/">crawfish per person calculator</a>.</p></div></section>
${bookBand('Get your spring date on the calendar', 'Weekends in March, April and May go first. Tell us your date.')}
`,
};

export default [perPerson, season];
