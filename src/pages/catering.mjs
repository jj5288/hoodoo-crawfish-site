import c from '../../site.config.mjs';
import { hero, img, faq, bookBand, serviceSchema, crumbs, testimonial, clients, bookBtn } from '../lib.mjs';

const why = (items) => `<ul class="checks">${items.map(([h, p]) => `<li><b>${h}</b>${p}</li>`).join('')}</ul>`;

// ---------------------------------------------------------------- corporate
const corpQ = faq([
  ['Do you cater weekday corporate events?',
    'Yes, and weekdays are the easiest dates to get. Spring Saturdays fill first; Monday through Thursday is usually open, and that is when most team lunches and client-appreciation events happen.'],
  ['Can you cater in an office, warehouse or parking area?',
    'We have boiled inside warehouses, on office patios, under tents and in banquet rooms. Tell us the space and we&rsquo;ll tell you what we need for the cookers.'],
  ['What if it isn&rsquo;t crawfish season?',
    'We boil shrimp and crab all year, so a fall team event or a December holiday party still gets a full Louisiana boil. See <a href="/seafood-boil-catering/">seafood boil catering</a>.'],
  ['Can you handle a large company event?',
    'Yes. We regularly cater company-wide events with long tables and a line of hungry people. Give us the headcount and we&rsquo;ll size the crew and cookers to it.'],
]);
const corporate = {
  path: '/corporate-catering/',
  title: 'Corporate Catering in Austin | Crawfish & Seafood Boils for Teams',
  description: 'Crawfish and seafood boil catering in Austin for team lunches, client events and company parties. Weekday dates open. Trusted by Tesla, Cisco and Procore.',
  ogImage: 'corporate-balloons', preload: 'corporate-balloons',
  schema: [serviceSchema({ name: 'Corporate boil catering', serviceType: 'Corporate catering', url: '/corporate-catering/',
    description: 'On-site crawfish, shrimp and crab boil catering for company events in Austin, Texas.' }),
    crumbs([['Corporate Catering', '/corporate-catering/']]), corpQ.schema],
  body: `
${hero({ image: 'corporate-balloons', alt: 'Company crawfish boil outside an Austin office under a red balloon arch', short: true,
  eyebrow: 'Team lunches, client events, company parties',
  h1: 'Corporate Catering in Austin, Boiled on Site',
  lede: 'Skip the sandwich trays. A Louisiana crawfish or seafood boil gets the whole team to the same table, and it&rsquo;s the company event people still talk about in the next all-hands.' })}

<section class="band">
  <div class="wrap split">
    <div>
      <h2>Why companies book Hoodoo</h2>
      ${why([
        ['It gets people talking', 'A boil is communal by design. Everyone stands at the same table, elbows in, and the ice breaks itself. It&rsquo;s team building that doesn&rsquo;t feel like an exercise.'],
        ['It&rsquo;s different from every other catered lunch', 'Your team has seen the taco bar. They haven&rsquo;t had a Louisiana boil dumped hot down the middle of the table.'],
        ['Weekdays are open', 'Our spring Saturdays go first. Monday through Thursday usually doesn&rsquo;t, which suits a company calendar.'],
        ['Menus built for your crowd', 'Crawfish, shrimp and crab boils, or a mix. We size it to your headcount and your budget.'],
        ['Year-round', 'Out of crawfish season we boil shrimp and crab, so Q4 events work too.'],
      ])}
      ${c.weekdayOffer ? `<p class="callout"><b>Weekday rate:</b> ${c.weekdayOffer}.</p>` : ''}
      <div class="ctas">${bookBtn('Get a corporate quote')}<a class="btn btn-ghost" href="${c.calendly}" rel="noopener">Schedule a call</a></div>
    </div>
    ${img('warehouse-boil-2', 'Employees eating a crawfish boil at long tables inside a warehouse', { sizes: '(max-width:760px) 100vw, 560px' })}
  </div>
</section>

<section class="band band-red">
  <div class="wrap">
    <h2>Corporate events we cater</h2>
    <div class="cards four">
      <div class="card"><div class="card-b"><h3>Team lunches</h3><p>A midweek boil for the whole office or one department.</p></div></div>
      <div class="card"><div class="card-b"><h3>Client &amp; customer appreciation</h3><p>Give your best customers something better than a gift card.</p></div></div>
      <div class="card"><div class="card-b"><h3>Company parties</h3><p>Annual parties, product launches, milestones and holiday events.</p></div></div>
      <div class="card"><div class="card-b"><h3>Site &amp; crew celebrations</h3><p>Warehouse, plant and job-site parties for the people who built it.</p></div></div>
    </div>
  </div>
</section>

<section class="band">
  <div class="wrap">
    <div class="gallery">
      ${img('warehouse-boil', 'Warehouse crawfish boil', { cls: 'tall', sizes: '(max-width:760px) 50vw, 290px' })}
      ${img('corporate-balloons-2', 'Corporate boil with balloon arch', { cls: 'wide', sizes: '(max-width:760px) 100vw, 580px' })}
      ${img('warehouse-boil-3', 'Crew serving crawfish in a warehouse', { sizes: '(max-width:760px) 50vw, 290px' })}
      ${img('indoor-banquet', 'Indoor corporate banquet crawfish boil', { sizes: '(max-width:760px) 50vw, 290px' })}
      ${img('golf-event', 'Hoodoo crew at a golf tournament event', { sizes: '(max-width:760px) 50vw, 290px' })}
      ${img('warehouse-boil-4', 'Crawfish boil set up in a company warehouse', { sizes: '(max-width:760px) 50vw, 290px' })}
    </div>
  </div>
</section>

<section class="band band-coal"><div class="wrap narrow">${testimonial()}</div></section>
${clients('Companies we&rsquo;ve boiled for')}
<section class="band"><div class="wrap narrow"><h2>Corporate catering questions</h2>${corpQ.html}</div></section>
${bookBand('Book your company boil', 'Weekday dates are the easiest to get. Send the date and headcount.')}
`,
};

// ---------------------------------------------------------------- private
const privQ = faq([
  ['What kinds of private parties do you cater?',
    'Birthdays, graduations, engagement parties, rehearsal dinners, reunions, retirements, pool parties and plain old backyard boils.'],
  ['Do you cater at a home?',
    'Yes. We bring the cookers to your backyard; tell us about the space when you book.'],
  ['How far ahead should we book a spring Saturday?',
    'As early as you can. Spring Saturdays are the first dates we lose. If yours is gone, ask about the days around it.'],
]);
const privateParty = {
  path: '/private-party-catering/',
  title: 'Private Party Catering in Austin | Crawfish Boils for Birthdays & More',
  description: 'Backyard crawfish, shrimp and crab boil catering in Austin for birthdays, graduations, rehearsal dinners and reunions. Cooked on site by Louisiana natives.',
  ogImage: 'party-picnic', preload: 'party-picnic',
  schema: [serviceSchema({ name: 'Private party boil catering', serviceType: 'Party catering', url: '/private-party-catering/',
    description: 'Crawfish and seafood boil catering for private parties in Austin, Texas.' }),
    crumbs([['Private Party Catering', '/private-party-catering/']]), privQ.schema],
  body: `
${hero({ image: 'party-picnic', alt: 'Friends at a long table eating a Hoodoo crawfish boil under the trees', short: true,
  eyebrow: 'Birthdays, graduations, reunions, just because',
  h1: 'Private Party Crawfish Boil Catering',
  lede: 'Imagine the smell of our family spice blend drifting across your backyard while we boil. Your guests will be talking about the food for years, and you get to enjoy your own party.' })}

<section class="band">
  <div class="wrap split">
    ${img('backyard-crew', 'Hosts with the Hoodoo crew at a backyard boil', { sizes: '(max-width:760px) 100vw, 560px' })}
    <div>
      <h2>Why hosts book Hoodoo</h2>
      ${why([
        ['Authentic', 'Louisiana natives, a traditional boil and a spice blend that stays in the family.'],
        ['Your menu', 'Crawfish, shrimp, crab or all three, sized to your guest list.'],
        ['You get to be a guest', 'We run the cookers and serve. You host.'],
        ['An experience, not just a meal', 'The boil hitting the table is the moment everyone pulls out their phone.'],
      ])}
      <div class="ctas">${bookBtn('Book your party')}<a class="btn btn-ghost" href="tel:${c.phoneHref}">Call ${c.phone}</a></div>
    </div>
  </div>
</section>

<section class="band band-red">
  <div class="wrap">
    <h2>Parties we cater</h2>
    <div class="cards four">
      <div class="card"><div class="card-b"><h3>Birthdays</h3><p>From the 30th to the 70th.</p></div></div>
      <div class="card"><div class="card-b"><h3>Graduations</h3><p>A May boil for the grad and everyone who got them there.</p></div></div>
      <div class="card"><div class="card-b"><h3>Weddings &amp; rehearsals</h3><p>Rehearsal dinners, engagement parties and the day-after boil.</p></div></div>
      <div class="card"><div class="card-b"><h3>Reunions &amp; holidays</h3><p>Family reunions, Fourth of July and any excuse to gather.</p></div></div>
    </div>
  </div>
</section>

<section class="band">
  <div class="wrap">
    <div class="gallery">
      ${img('party-table', 'Guests digging into a crawfish boil', { cls: 'tall', sizes: '(max-width:760px) 50vw, 290px' })}
      ${img('party-crowd', 'Party guests around a boil table', { cls: 'wide', sizes: '(max-width:760px) 100vw, 580px' })}
      ${img('party-decor', 'Crawfish party table decorations', { sizes: '(max-width:760px) 50vw, 290px' })}
      ${img('balloon-crawfish', 'Crawfish balloon sculpture at a party', { sizes: '(max-width:760px) 50vw, 290px' })}
      ${img('party-table-2', 'Friends at a crawfish boil table', { sizes: '(max-width:760px) 50vw, 290px' })}
      ${img('crawfish-pour', 'Pouring the finished boil', { sizes: '(max-width:760px) 50vw, 290px' })}
    </div>
  </div>
</section>

<section class="band"><div class="wrap narrow"><h2>Private party questions</h2>${privQ.html}</div></section>
${bookBand('Book your party boil')}
`,
};

// ---------------------------------------------------------------- festival
const festQ = faq([
  ['Can you serve a festival-sized crowd?',
    'Yes. We run high-volume boils for festivals, brewery events and fundraisers, with a setup built to serve a line quickly.'],
  ['Do you work with breweries?',
    'Often. We&rsquo;ve boiled for Real Ale, Oskar Blues, Independence, Southern Heights, Whitestone and Blue Owl, among others. Beer and a boil were made for each other.'],
  ['What do you need from the event organizer?',
    'The date, expected attendance, service hours and where we can set up the cookers. We&rsquo;ll work out the rest with you.'],
]);
const festival = {
  path: '/festival-catering/',
  title: 'Festival & Brewery Catering in Austin | Hoodoo Crawfish Boils',
  description: 'High-volume crawfish and seafood boils for Austin festivals, brewery events and fundraisers. Louisiana flavor, served fast to a line.',
  ogImage: 'festival-tent', preload: 'festival-tent',
  schema: [serviceSchema({ name: 'Festival boil catering', serviceType: 'Event catering', url: '/festival-catering/',
    description: 'High-volume crawfish and seafood boil catering for festivals and brewery events in Austin, Texas.' }),
    crumbs([['Festival Catering', '/festival-catering/']]), festQ.schema],
  body: `
${hero({ image: 'festival-tent', alt: 'The Hoodoo Crawfish tent serving a crowd at an outdoor festival', short: true,
  eyebrow: 'Festivals, breweries, fundraisers',
  h1: 'Festival &amp; Brewery Crawfish Catering',
  lede: 'Unforgettable festival catering with a Cajun twist. We bring authentic Louisiana boils to big crowds, and keep the line moving.' })}

<section class="band">
  <div class="wrap split">
    <div>
      <h2>Why festivals book Hoodoo</h2>
      ${why([
        ['Authentic Louisiana roots', 'A real boil with our secret family spice blend. Festival-goers can tell the difference.'],
        ['Built for volume', 'Cookers, crew and a setup that serves a line, not a dinner party.'],
        ['Tailored to your event', 'Crawfish in season, shrimp and crab year-round, sized to your expected crowd.'],
        ['A draw, not just a food stand', 'A steaming boil is the smell that pulls people across the field.'],
      ])}
      <div class="ctas">${bookBtn('Talk about your event')}<a class="btn btn-ghost" href="${c.calendly}" rel="noopener">Schedule a call</a></div>
    </div>
    ${img('festival-tent-2', 'Hoodoo crew in front of their branded festival tent', { sizes: '(max-width:760px) 100vw, 560px' })}
  </div>
</section>

<section class="band">
  <div class="wrap">
    <div class="gallery">
      ${img('festival-boil', 'Festival crawfish boil under a tent', { cls: 'wide', sizes: '(max-width:760px) 100vw, 580px' })}
      ${img('venue-boil', 'Serving crawfish at an outdoor venue', { cls: 'tall', sizes: '(max-width:760px) 50vw, 290px' })}
      ${img('patio-event', 'Crowd at a patio boil event', { sizes: '(max-width:760px) 50vw, 290px' })}
      ${img('boil-outdoor', 'Boiling crawfish outdoors', { sizes: '(max-width:760px) 50vw, 290px' })}
      ${img('crawfish-corn-2', 'Crawfish and corn fresh from the boil', { sizes: '(max-width:760px) 50vw, 290px' })}
    </div>
  </div>
</section>

${clients('Breweries &amp; events we&rsquo;ve worked')}
<section class="band"><div class="wrap narrow"><h2>Festival catering questions</h2>${festQ.html}</div></section>
${bookBand('Bring Hoodoo to your festival')}
`,
};

export default [corporate, privateParty, festival];
