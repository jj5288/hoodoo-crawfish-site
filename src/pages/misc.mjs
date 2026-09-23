import c from '../../site.config.mjs';
import { hero, img, bookBand, crumbs, testimonial, clients, ratingLine, esc } from '../lib.mjs';

// The forms need no server: on submit they open the visitor's mail app with every
// answer filled in, addressed to Hoodoo. A form backend can replace this later.
const mailtoScript = (formId, subject) => `<script>
(function(){var f=document.getElementById('${formId}');f.addEventListener('submit',function(e){e.preventDefault();
var lines=[];f.querySelectorAll('[name]').forEach(function(el){if((el.type==='radio'||el.type==='checkbox')&&!el.checked)return;var v=(el.value||'').trim();if(v)lines.push(el.dataset.label+': '+v);});
var who=(f.querySelector('[name=name]')||{}).value||'';var when=(f.querySelector('[name=date]')||{}).value||'';
location.href='mailto:${c.email}?subject='+encodeURIComponent('${subject}'+(when?' - '+when:'')+(who?' - '+who:''))+'&body='+encodeURIComponent(lines.join('\\n'));
f.querySelector('.sent').hidden=false;});})();
</script>`;

const field = (name, label, type = 'text', extra = '') =>
  `<div class="field"><label for="${name}">${label}</label><input id="${name}" name="${name}" data-label="${esc(label)}" type="${type}" ${extra}></div>`;

// ---------------------------------------------------------------- book
const book = {
  path: '/book/',
  title: 'Book a Crawfish or Seafood Boil in Austin | Hoodoo Crawfish',
  description: 'Check a date for Hoodoo Crawfish catering in Austin. Send your date, headcount and location for a crawfish, shrimp or crab boil quote, or call (512) 552-7191.',
  preload: 'boil-steam', ogImage: 'boil-steam',
  schema: [crumbs([['Book a Boil', '/book/']])],
  body: `
${hero({ image: 'boil-steam', alt: 'Steam rising off a Hoodoo boil', short: true, ctas: false,
  eyebrow: 'Two minutes, then we take it from here',
  h1: 'Book a Boil',
  lede: `Send the basics and we&rsquo;ll confirm the date and come back with a quote. Rather talk? Call <a href="tel:${c.phoneHref}">${c.phone}</a> or <a href="${c.calendly}" rel="noopener">schedule a call</a>.` })}

<section class="band band-light">
  <div class="wrap split top">
    <form class="form" id="bookform">
      <h2>Tell us about your event</h2>
      <div class="row2">${field('name', 'Your name', 'text', 'required autocomplete="name"')}${field('company', 'Company (if any)', 'text', 'autocomplete="organization"')}</div>
      <div class="row2">${field('phone', 'Phone', 'tel', 'required autocomplete="tel"')}${field('email', 'Email', 'email', 'autocomplete="email"')}</div>
      <div class="row2">${field('date', 'Event date', 'date', 'required')}${field('guests', 'Number of guests', 'number', 'min="1" required inputmode="numeric"')}</div>
      <fieldset class="field"><legend>Flexible on the day?</legend><div class="radios">
        <label><input type="radio" name="flex" value="Only this date" data-label="Date flexibility" checked>Only this date</label>
        <label><input type="radio" name="flex" value="A weekday that week works too" data-label="Date flexibility">A weekday that week works</label>
      </div></fieldset>
      ${field('location', 'Where (neighborhood, venue or address)', 'text', 'required')}
      <div class="field"><label for="type">Type of event</label><select id="type" name="type" data-label="Event type">
        <option>Corporate / company event</option><option>Private party</option><option>Festival or brewery event</option><option>Wedding or rehearsal</option><option>Other</option></select></div>
      <div class="field"><label for="boil">What are we boiling?</label><select id="boil" name="boil" data-label="Boil">
        <option>Crawfish (Jan &ndash; Jun)</option><option>Shrimp</option><option>Crab &amp; shrimp</option><option>A mix</option><option>Not sure yet</option></select></div>
      <div class="field"><label for="notes">Anything else?</label><textarea id="notes" name="notes" data-label="Notes" rows="4"></textarea></div>
      <button class="btn" type="submit" style="width:100%">Send to Hoodoo</button>
      <p class="note">This opens your email app with everything filled in, addressed to ${c.email}. Just hit send.</p>
      <p class="note sent" hidden><b>Didn&rsquo;t open?</b> Email <a href="mailto:${c.email}">${c.email}</a> or call <a href="tel:${c.phoneHref}">${c.phone}</a>.</p>
    </form>
    <div class="prose">
      <h2>Good to know</h2>
      <ul>
        <li><b>Spring Saturdays go first.</b> If crawfish season is the plan, book early. Weekdays stay open longer.</li>
        <li><b>Crawfish runs about January to June.</b> The rest of the year we boil <a href="/seafood-boil-catering/">shrimp and crab</a>.</li>
        <li><b>Not sure how much food?</b> The <a href="/how-much-crawfish-per-person/">per person calculator</a> gets you close; we&rsquo;ll size it exactly.</li>
        <li><b>Just want platters?</b> See <a href="/delivery/">delivery</a>.</li>
      </ul>
      ${ratingLine().replace('class="rating"', 'class="rating" style="color:var(--ink)"')}
      <div style="margin-top:28px">${testimonial()}</div>
    </div>
  </div>
</section>
${mailtoScript('bookform', 'Boil booking request')}
`,
};

// ---------------------------------------------------------------- delivery
const delivery = {
  path: '/delivery/',
  title: 'Seafood Boil Delivery in Austin | Crab & Shrimp Platters | Hoodoo',
  description: 'Hot seafood boil platters delivered in Austin: the HooDoo Magic Platter with crab clusters, shrimp, sausage, corn and potato. 3 platter minimum.',
  preload: 'crab-shrimp-platter', ogImage: 'crab-shrimp-platter',
  schema: [crumbs([['Delivery', '/delivery/']])],
  body: `
${hero({ image: 'crab-shrimp-platter', alt: 'HooDoo Magic Platter with crab clusters and shrimp', short: true, ctas: false,
  eyebrow: 'Hot boil platters, delivered',
  h1: 'Seafood Boil Delivery',
  lede: 'Not big enough for a full boil? Get Hoodoo platters delivered hot to your party or office, no-contact if you like. <b>3 platter minimum.</b>' })}

<section class="band band-light">
  <div class="wrap split top">
    <div class="prose">
      <h2>The platters</h2>
      <h3>HooDoo Magic Platter</h3>
      <p>2 crab clusters, shrimp, sausage, corn and potato.</p>
      <h3>Shrimp Plate</h3>
      <p>Shrimp, sausage, corn and potato.</p>
      <p class="small" style="color:var(--ink-2)">All delivery orders have a 3 platter minimum. For bigger groups, a <a href="/book/">full boil on site</a> is usually the better deal.</p>
    </div>
    <form class="form" id="delform">
      <h2>Order platters</h2>
      <div class="row2">${field('name', 'Name', 'text', 'required autocomplete="name"')}${field('phone', 'Phone', 'tel', 'required autocomplete="tel"')}</div>
      ${field('email', 'Email', 'email', 'autocomplete="email"')}
      ${field('address', 'Delivery address', 'text', 'required autocomplete="street-address"')}
      <div class="row2">${field('date', 'Date', 'date', 'required')}${field('time', 'Time', 'time')}</div>
      <div class="row2">${field('magic', 'HooDoo Magic Platters', 'number', 'min="0" value="3" inputmode="numeric"')}${field('shrimp', 'Shrimp Plates', 'number', 'min="0" value="0" inputmode="numeric"')}</div>
      <button class="btn" type="submit" style="width:100%">Send order</button>
      <p class="note">Opens your email app with the order filled in. We&rsquo;ll confirm by phone or email.</p>
      <p class="note sent" hidden><b>Didn&rsquo;t open?</b> Call <a href="tel:${c.phoneHref}">${c.phone}</a>.</p>
    </form>
  </div>
</section>
${mailtoScript('delform', 'Platter delivery order')}
`,
};

// ---------------------------------------------------------------- events
const upcoming = c.events.filter((e) => e.date >= new Date().toISOString().slice(0, 10)).sort((a, b) => a.date.localeCompare(b.date));
const eventSchema = upcoming.map((e) => ({
  '@context': 'https://schema.org', '@type': 'Event', name: e.name,
  startDate: `${e.date}T${e.start || '12:00'}:00-06:00`, ...(e.end ? { endDate: `${e.date}T${e.end}:00-06:00` } : {}),
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode', eventStatus: 'https://schema.org/EventScheduled',
  location: { '@type': 'Place', name: e.venue, address: e.address }, organizer: { '@id': c.siteUrl + '/#business' },
  image: c.siteUrl + '/img/festival-tent.jpg', ...(e.url ? { url: e.url } : {}),
}));
const fmt = (d) => new Date(d + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', weekday: 'short' }).split(', ');
const events = {
  path: '/events/',
  title: 'Public Crawfish Boils in Austin | Where Hoodoo Is Boiling Next',
  description: 'Where to find Hoodoo Crawfish boiling next: public crawfish and seafood boils at Austin breweries, festivals and events.',
  preload: 'festival-tent-2', ogImage: 'festival-tent',
  schema: [crumbs([['Events', '/events/']]), ...eventSchema],
  body: `
${hero({ image: 'festival-tent-2', alt: 'Hoodoo crew at a public boil', short: true, ctas: false,
  eyebrow: 'Come eat with us',
  h1: 'Public Crawfish Boils in Austin',
  lede: 'Where Hoodoo is boiling next: breweries, festivals and community events you can just show up to.' })}
<section class="band">
  <div class="wrap narrow">
    ${upcoming.length ? `<ul class="events">${upcoming.map((e) => { const [wd, md] = fmt(e.date); return `<li><div class="d">${wd}<b>${md.split(' ')[1]}</b>${md.split(' ')[0]}</div><div><h3>${e.name}</h3><p>${e.venue}${e.address ? `, ${e.address}` : ''}${e.start ? ` &middot; ${e.start}${e.end ? `&ndash;${e.end}` : ''}` : ''}</p>${e.url ? `<a href="${e.url}" rel="noopener">Details &rarr;</a>` : ''}</div></li>`; }).join('')}</ul>`
      : `<div class="callout"><p><b>The 2027 boil calendar is coming.</b> Public boils start with crawfish season in the new year. Follow <a href="${c.social.instagram}" rel="noopener">@hoodoocrawfish on Instagram</a> for dates, or <a href="/book/">book a private boil</a> any time of year.</p></div>`}
  </div>
</section>
${clients()}
${bookBand('Want a boil of your own?')}
`,
};

// ---------------------------------------------------------------- reviews
const reviews = {
  path: '/reviews/',
  title: 'Reviews & Clients | Hoodoo Crawfish Catering Austin | 5.0 on Google',
  description: `Hoodoo Crawfish is rated ${c.rating.value} on Google across ${c.rating.count} reviews. Read what Austin companies and hosts say, and see the clients we've boiled for.`,
  preload: 'party-crowd', ogImage: 'team-banner',
  schema: [crumbs([['Reviews', '/reviews/']])],
  body: `
${hero({ image: 'party-crowd', alt: 'Happy guests at a Hoodoo crawfish boil', short: true, ctas: false,
  eyebrow: 'The word around town',
  h1: 'Reviews &amp; Clients',
  lede: `Rated <b>${c.rating.value} stars on Google across ${c.rating.count} reviews</b>. The best thing we can tell you about a Hoodoo boil is what the people who booked one said.` })}
<section class="band band-red"><div class="wrap narrow">${testimonial()}</div></section>
<section class="band">
  <div class="wrap narrow" style="text-align:center">
    <h2>Read all ${c.rating.count} reviews</h2>
    <p class="sub" style="margin-inline:auto">Every one of them is on our Google profile.</p>
    <div class="ctas" style="justify-content:center"><a class="btn" href="${c.googleReviewsUrl}" rel="noopener" target="_blank">Read reviews on Google</a><a class="btn btn-ghost" href="${c.googleWriteReviewUrl}" rel="noopener" target="_blank">Had a Hoodoo boil? Leave a review</a></div>
  </div>
</section>
${clients()}
<section class="band band-coal">
  <div class="wrap">
    <div class="gallery">
      ${img('party-picnic', 'Guests at a boil table', { cls: 'wide', sizes: '(max-width:760px) 100vw, 580px' })}
      ${img('indoor-banquet-2', 'Indoor corporate boil', { sizes: '(max-width:760px) 50vw, 290px' })}
      ${img('boil-paddle', 'Stirring the boil', { cls: 'tall', sizes: '(max-width:760px) 50vw, 290px' })}
      ${img('party-crowd', 'Party guests', { sizes: '(max-width:760px) 50vw, 290px' })}
      ${img('warehouse-boil-2', 'Warehouse company boil', { cls: 'wide', sizes: '(max-width:760px) 100vw, 580px' })}
    </div>
  </div>
</section>
${bookBand()}
`,
};

// ---------------------------------------------------------------- merch
const merch = {
  path: '/merchandise/',
  title: 'Hoodoo Swag | Hats & Shirts | Hoodoo Crawfish Austin',
  description: 'Hoodoo Crawfish hats ($28) and shirts ($25). Grab some Hoodoo gear at your next boil.',
  preload: 'hat-lineup', ogImage: 'team-banner',
  schema: [crumbs([['Hoodoo Swag', '/merchandise/']])],
  body: `
${hero({ image: 'hat-lineup', alt: 'Lineup of Hoodoo Crawfish trucker hats', short: true, ctas: false,
  eyebrow: 'Wear the crawfish',
  h1: 'Hoodoo Swag',
  lede: '<b>$28 hats &amp; $25 shirts.</b> Pick one up at your next boil, or ask about a stack for your crew.' })}
<section class="band">
  <div class="wrap">
    <div class="cards">
      <div class="card">${img('hat', 'Hoodoo Crawfish trucker hat', { sizes: '(max-width:760px) 100vw, 380px' })}<div class="card-b"><h3>Hoodoo Hat</h3><p>$28</p></div></div>
      <div class="card">${img('shirt', 'Black Hoodoo Crawfish shirt', { sizes: '(max-width:760px) 100vw, 380px' })}<div class="card-b"><h3>Hoodoo Shirt</h3><p>$25</p></div></div>
      <div class="card">${img('shirt-back', 'Back of the Hoodoo Crawfish shirt', { sizes: '(max-width:760px) 100vw, 380px' })}<div class="card-b"><h3>Hoodoo Shirt, back</h3><p>The full Hoodoo crest. $25</p></div></div>
    </div>
    <div class="ctas"><a class="btn" href="mailto:${c.email}?subject=Hoodoo%20swag">Ask about swag</a><a class="btn btn-ghost" href="tel:${c.phoneHref}">Call ${c.phone}</a></div>
  </div>
</section>
`,
};

// ---------------------------------------------------------------- privacy
const privacy = {
  path: '/privacy-policy/',
  title: 'Privacy Policy | Hoodoo Crawfish',
  description: 'How Hoodoo Crawfish Catering Co. handles the information you send us.',
  noindex: true,
  body: `
<section class="band band-light">
  <div class="wrap prose">
    <h1>Privacy Policy</h1>
    <p>This site does not use accounts, sell data or run advertising trackers.</p>
    <h2>What we collect</h2>
    <p>If you contact us by email, phone or the booking form, we receive what you send: typically your name, contact details and event details. The booking form does not store anything on this website; it opens your own email app, and the message reaches us like any other email.</p>
    <h2>How we use it</h2>
    <p>Only to respond to you, quote, plan and deliver your event, and keep a record of it. We don&rsquo;t sell or share it with anyone except as needed to run your event or as required by law.</p>
    <h2>Analytics</h2>
    <p>We may use privacy-respecting analytics to count visits to pages. These do not identify you personally.</p>
    <h2>Contact</h2>
    <p>Questions, or want your information deleted? Email <a href="mailto:${c.email}">${c.email}</a> or call ${c.phone}.</p>
  </div>
</section>
`,
};

// ---------------------------------------------------------------- 404
const notFound = {
  path: '/404.html', file: '404.html',
  title: 'Page not found | Hoodoo Crawfish',
  description: 'That page is not here.',
  noindex: true,
  body: `
<section class="band"><div class="wrap narrow" style="text-align:center">
  <h1>That page got boiled.</h1>
  <p class="sub" style="margin-inline:auto">It isn&rsquo;t here anymore. Try one of these.</p>
  <div class="ctas" style="justify-content:center"><a class="btn" href="/">Home</a><a class="btn btn-ghost" href="/menu/">Menu</a><a class="btn btn-ghost" href="/book/">Book a boil</a></div>
</div></section>`,
};

export default [book, delivery, events, reviews, merch, privacy, notFound];
