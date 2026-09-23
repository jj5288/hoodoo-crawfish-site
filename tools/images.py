"""One-off: turn the Wix originals (~/hoodoo-site-src/img) into web-sized WebP.
Re-run only if a photo is added. Output is committed under public/img."""
import os, sys
from PIL import Image, ImageOps
SRC = os.path.expanduser('~/hoodoo-site-src')
idx = dict(l.split(' ', 1) for l in open(f'{SRC}/imgindex.txt').read().splitlines())
idx = {int(k): v for k, v in idx.items()}
PHOTOS = {  # name: contact-sheet index
  'hero-crawfish-corn': 29, 'team-banner': 43, 'boil-paddle': 1, 'crawfish-pour': 30,
  'boil-steam': 34, 'boil-scoop': 26, 'boil-closeup': 10, 'crawfish-tray': 14,
  'crawfish-macro': 57, 'crawfish-corn-2': 45, 'shrimp-boil': 18, 'shrimp-beer': 35,
  'crab-shrimp-platter': 20, 'corporate-balloons': 38, 'corporate-balloons-2': 53,
  'warehouse-boil': 49, 'warehouse-boil-2': 65, 'warehouse-boil-3': 54, 'warehouse-boil-4': 55,
  'indoor-banquet': 44, 'indoor-banquet-2': 48, 'backyard-crew': 46, 'party-table': 47,
  'party-crowd': 41, 'party-picnic': 27, 'party-table-2': 51, 'festival-tent': 42,
  'festival-tent-2': 62, 'festival-boil': 23, 'venue-boil': 16, 'cooker-veg': 63,
  'boil-outdoor': 58, 'golf-event': 56, 'patio-event': 59, 'hat-lineup': 17, 'hat': 8,
  'shirt': 32, 'shirt-back': 36, 'shirt-back-2': 3, 'balloon-crawfish': 52, 'party-decor': 64,
}
LOGOS = {'procore': 0, 'real-ale': 2, 'red-can': 4, 'southern-heights': 5, 'exxon': 9,
  'whitestone': 12, 'auctane': 13, 'north-lake-travis-chamber': 15, 'docs': 21,
  'oskar-blues': 22, 'independence': 24, 'build-a-sign': 25, 'blue-owl': 28,
  'still-austin': 31, 'tesla': 37, 'crea': 39, 'ut-austin': 40, 'cisco': 60}
HERO_SIZES = {'hero-crawfish-corn', 'crab-shrimp-platter', 'corporate-balloons', 'party-picnic', 'festival-tent', 'boil-steam', 'crawfish-macro', 'shrimp-beer'}
OG = HERO_SIZES | {'team-banner'}
out = os.path.join(os.path.dirname(__file__), '..', 'public', 'img')
dims = {}
def load(i):
    im = ImageOps.exif_transpose(Image.open(f'{SRC}/img/{idx[i]}'))
    return im
for name, i in PHOTOS.items():
    im = load(i).convert('RGB')
    for w in (640, 1280, 1920):
        if w > im.width and w != 640: continue
        if w == 1920 and name not in HERO_SIZES: continue
        c = im.copy(); c.thumbnail((w, w * 2))
        c.save(f'{out}/{name}-{w}.webp', 'WEBP', quality=72, method=6)
    if name in OG: c = im.copy(); c.thumbnail((1200, 1200)); c.save(f'{out}/{name}.jpg', 'JPEG', quality=78, optimize=True, progressive=True)
    dims[name] = [im.width, im.height, 1920 if name in HERO_SIZES else 1280]
for name, i in LOGOS.items():
    im = load(i).convert('RGBA'); im.thumbnail((320, 200))
    im.save(f'{out}/logos/{name}.webp', 'WEBP', quality=85)
    dims['logos/' + name] = [im.width, im.height, 0]
# brand marks
lg = load(7).convert('RGBA'); lg.thumbnail((480, 480)); lg.save(f'{out}/logo.webp', 'WEBP', quality=90); lg.save(f'{out}/logo.png', optimize=True)
dims['logo'] = [lg.width, lg.height, 0]
for s in (32, 180, 192, 512):
    f = lg.copy(); f.thumbnail((s, s)); bg = Image.new('RGBA', (s, s), (9, 8, 8, 255))
    bg.paste(f, ((s - f.width)//2, (s - f.height)//2), f); bg.save(f'{out}/icon-{s}.png')
import json; json.dump(dims, open(f'{out}/dims.json', 'w'), indent=0)
print(len(PHOTOS), 'photos', len(LOGOS), 'logos')
