# Launch checklist: hoodoocrawfish.com rebuild

The new site is built from the Sept 2026 search audit. The old site is Wix; this one is
static HTML on GitHub Pages: free, with no plugins and no page builder slowing it down.

## 1. Hoodoo needs to confirm (before cutover)

The site says nothing it could not source from the old site, the Google profile or the
photos. These are the gaps, and each is one line in `site.config.mjs` or a page file:

- [ ] **Prices.** The old menu was an image widget with no text prices. Set `startingPrice`
      in `site.config.mjs` and/or fill `price` in `src/pages/menu.mjs`. The audit's biggest
      finding is that Google can read zero menu items today.
- [ ] **Weekday rate.** The audit's fastest lever: a Monday-Thursday price below Saturday.
      Set `weekdayOffer` (e.g. `'15% off Saturday pricing, Monday-Thursday'`) and it appears
      on the home and corporate pages.
- [ ] **Copy check.** Read these lines and fix anything that isn't true:
      - "We grew up on crawfish boils in Louisiana" (old site says "Louisiana natives")
      - Crab boils = "crab clusters" (from the delivery platter). Snow crab? King crab?
      - Jambalaya as a side (only source: the Auctane review)
      - "We bring the cookers" / "cooked on site" (true for full boils; delivery platters differ)
      - Client logos: the old site showed them; confirm you're still OK showing Tesla, Exxon, Cisco etc.
      - One logo on the old site (red can with a bird) was left off; nobody could identify it.
- [ ] **More reviews.** Only one written testimonial existed on the old site (Auctane). Paste
      5-10 of the best Google reviews into `src/lib.mjs` (copy them word for word, with the
      reviewer's first name and last initial) and they'll go on the reviews page.
- [ ] **Public boils for 2027.** Add each to `events` in `site.config.mjs`. They render on
      `/events/` with Event markup, which is how they get into Google's event listings.
      Also post every one to Do512's crawfish calendar (it ranks on page one and lists nobody).

## 2. Cutover (about 15 minutes, done together with whoever owns the domain)

1. In the repo: Settings > Secrets and variables > Actions > Variables > add
   `LIVE_DOMAIN` = `www.hoodoocrawfish.com`. Re-run the deploy workflow. This removes the
   staging `noindex` and writes the `CNAME` file.
2. Settings > Pages > Custom domain: `www.hoodoocrawfish.com`, then tick Enforce HTTPS once offered.
3. At the domain registrar (currently pointed at Wix):
   - `www` CNAME -> `jj5288.github.io`
   - apex `hoodoocrawfish.com` A records -> `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
4. Leave the Wix site up for a week, then cancel it.
5. Google Search Console: verify the domain, submit `https://www.hoodoocrawfish.com/sitemap.xml`.
   (Also connect Analytics. Every number in the audit was measured from outside.)

Old URLs are handled: `/corparate-catering` -> `/corporate-catering/`, `/order-online` and
`/online-ordering` -> `/delivery/`. Every other old URL keeps its path, so the 35 existing
rankings carry over.

## 3. Google Business Profile (not the website, but the audit ranks it higher)

- [ ] Add categories **Mobile caterer** and **Seafood restaurant** alongside Caterer.
- [ ] Replace the 24/7 hours with real hours.
- [ ] Website field: `https://www.hoodoocrawfish.com` (it is `http://` non-www today: two redirect hops).
- [ ] Add the booking link `https://www.hoodoocrawfish.com/book/`.
- [ ] Post an October crab boil photo.
- [ ] Fix MapQuest, which lists the address as 78701 downtown.

## 4. Off the website (from the audit, highest return per hour)

- List on ezCater, PartySlate, The Bash and Thumbtack.
- Email past corporate clients an off-season shrimp & crab boil offer before Q4 planning.
- Deadline: everything live by **1 January**. "When is crawfish season" searches triple in
  January, when Austin plans its spring boils.
