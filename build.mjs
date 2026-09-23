// Zero-dependency static build: `node build.mjs` -> dist/
// STAGING=1 adds noindex everywhere (so the preview never competes with the live domain).
// BASE=/repo-name prefixes every root-relative URL, for a GitHub Pages project URL.
import fs from 'node:fs';
import path from 'node:path';
import c from './site.config.mjs';
import { layout } from './src/layout.mjs';

const BASE = (process.env.BASE || '').replace(/\/$/, '');
const out = path.resolve('dist');
fs.rmSync(out, { recursive: true, force: true });
fs.cpSync('public', out, { recursive: true, filter: (p) => !p.endsWith('dims.json') });

const pages = [];
for (const f of fs.readdirSync('src/pages').sort()) {
  const mod = (await import(`./src/pages/${f}`)).default;
  pages.push(...[].concat(mod));
}

const rebase = (html) => BASE ? html
  .replace(/(href|src|action)="\/(?!\/)/g, `$1="${BASE}/`)
  .replace(/(srcset|imagesrcset)="([^"]+)"/g, (m, a, v) => `${a}="${v.replace(/(^|, )\/img\//g, `$1${BASE}/img/`)}"`) : html;

const seen = new Set();
for (const p of pages) {
  if (seen.has(p.path)) throw new Error(`duplicate path ${p.path}`);
  seen.add(p.path);
  const html = rebase(layout(p));
  // Guard against the Wix-era failures the audit found.
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) throw new Error(`${p.path} has ${h1s} <h1>`);
  if (p.title.length > 70) console.warn(`! title ${p.title.length} chars: ${p.path}`);
  if (p.description.length > 165) console.warn(`! description ${p.description.length} chars: ${p.path}`);
  const file = p.file ? path.join(out, p.file) : path.join(out, p.path, 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

// Old Wix URLs -> new homes. GitHub Pages cannot send a 301, so each is an instant
// meta refresh + canonical, which Google treats as a permanent redirect.
const REDIRECTS = {
  '/corparate-catering': '/corporate-catering/',
  '/order-online': '/delivery/',
  '/online-ordering': '/delivery/',
  '/home': '/',
};
for (const [from, to] of Object.entries(REDIRECTS)) {
  const dir = path.join(out, from);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), `<!doctype html><meta charset="utf-8"><title>Moved</title><link rel="canonical" href="${c.siteUrl}${to}"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0; url=${BASE}${to}"><a href="${BASE}${to}">Continue</a>`);
}

const indexable = pages.filter((p) => !p.noindex && !p.file);
const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(out, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable.map((p) => `<url><loc>${c.siteUrl}${p.path}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`);
fs.writeFileSync(path.join(out, 'robots.txt'), process.env.STAGING
  ? 'User-agent: *\nDisallow: /\n'
  : `User-agent: *\nAllow: /\n\nSitemap: ${c.siteUrl}/sitemap.xml\n`);
fs.writeFileSync(path.join(out, 'site.webmanifest'), JSON.stringify({
  name: c.name, short_name: c.shortName, start_url: `${BASE}/`, display: 'browser', background_color: '#0b0a0a', theme_color: '#0b0a0a',
  icons: [192, 512].map((s) => ({ src: `${BASE}/img/icon-${s}.png`, sizes: `${s}x${s}`, type: 'image/png' })),
}));
if (process.env.CNAME) fs.writeFileSync(path.join(out, 'CNAME'), process.env.CNAME + '\n');
fs.writeFileSync(path.join(out, '.nojekyll'), '');
console.log(`built ${pages.length} pages + ${Object.keys(REDIRECTS).length} redirects -> dist/${BASE ? ` (base ${BASE})` : ''}${process.env.STAGING ? ' [STAGING noindex]' : ''}`);
