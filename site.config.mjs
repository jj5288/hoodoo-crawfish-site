// Every business fact the site states lives here, so the owners can check one file.
// Anything null is simply not rendered. Never fill a field with a guess.
export default {
  name: 'Hoodoo Crawfish Catering Co.',
  shortName: 'Hoodoo Crawfish',
  // The canonical domain. Staging builds still point canonicals here so nothing competes with it.
  siteUrl: 'https://www.hoodoocrawfish.com',
  phone: '(512) 552-7191',
  phoneHref: '+15125527191',
  email: 'hoodoocrawfish@gmail.com',
  city: 'Austin',
  region: 'TX',
  calendly: 'https://calendly.com/hoodoocrawfish',
  social: {
    facebook: 'https://www.facebook.com/HooDooCrawfishCatering/',
    instagram: 'https://www.instagram.com/hoodoocrawfish/',
  },
  // Google Business Profile, as read on 2026-09-20. Update when it moves.
  rating: { value: '5.0', count: 274, source: 'Google' },
  // Google Business Profile ids, from the 2026-09-20 audit pull.
  googleMapsUrl: 'https://www.google.com/maps?cid=3990173114121243196',
  googleReviewsUrl: 'https://www.google.com/maps?cid=3990173114121243196',
  googleWriteReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJycyu7VEtW4YRPMqCc07xXzc',

  // ---- Owner decisions. Left null until Hoodoo confirms; the site reads fine without them. ----
  // e.g. '15% off Saturday pricing, Monday-Thursday'
  weekdayOffer: null,
  // e.g. 'Crawfish boils start at $X per person (25-guest minimum)'
  startingPrice: null,
  // Public boils for /events. Each: { name, date: 'YYYY-MM-DD', start: '12:00', end: '16:00', venue, address, url }
  events: [],
};
