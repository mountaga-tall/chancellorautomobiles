from pathlib import Path
from PIL import Image, ImageChops, ImageOps
import statistics

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets"
SOURCE = ASSETS / "chancellor-logo-3d.png"
if not SOURCE.exists():
    raise SystemExit(f"Source logo introuvable : {SOURCE}")

original = Image.open(SOURCE).convert("RGBA")
im = original.copy()
alpha_bbox = im.getchannel("A").getbbox()
if alpha_bbox and alpha_bbox != (0, 0, im.width, im.height):
    im = im.crop(alpha_bbox)
else:
    rgb = im.convert("RGB")
    w, h = rgb.size
    corners = [rgb.getpixel(p) for p in [(0,0),(w-1,0),(0,h-1),(w-1,h-1)]]
    channels = list(zip(*corners))
    bg = tuple(int(statistics.median(c)) for c in channels)
    spread = max(max(c)-min(c) for c in channels)
    if spread < 24:
        diff = ImageChops.difference(rgb, Image.new("RGB", rgb.size, bg)).convert("L")
        bbox = diff.point(lambda p: 255 if p > 22 else 0).getbbox()
        if bbox:
            pad = max(8, int(min(w,h)*0.025))
            l,t,r,b = bbox
            im = im.crop((max(0,l-pad),max(0,t-pad),min(w,r+pad),min(h,b+pad)))

corner = im.convert("RGB").getpixel((0,0))
background = corner + (255,)
if im.getchannel("A").getextrema()[0] < 255:
    background = (7,21,45,255)

def square(size):
    canvas = Image.new("RGBA",(size,size),background)
    scaled = ImageOps.contain(im,(int(size*.92),int(size*.92)),method=Image.Resampling.LANCZOS)
    canvas.alpha_composite(scaled,((size-scaled.width)//2,(size-scaled.height)//2))
    return canvas

for size,name in [(48,"favicon-48.png"),(180,"apple-touch-icon.png"),(192,"favicon-192.png"),(512,"favicon-512.png")]:
    square(size).save(ASSETS/name,"PNG",optimize=True)
square(256).save(ASSETS/"favicon.ico",format="ICO",sizes=[(16,16),(32,32),(48,48),(64,64),(128,128),(256,256)])
print("PWA icons generated from the official sparkling logo.")
