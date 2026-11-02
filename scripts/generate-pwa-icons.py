from pathlib import Path
from PIL import Image, ImageChops, ImageDraw, ImageFilter, ImageOps

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets"
SOURCE = ASSETS / "chancellor-logo-3d.png"
TRANSPARENT = ASSETS / "chancellor-logo-3d-transparent.png"

if not SOURCE.exists():
    raise SystemExit(f"Source logo introuvable : {SOURCE}")

# Keep the exact artwork. Remove only the white canvas connected to the image edges.
original = Image.open(SOURCE).convert("RGBA")
rgb = original.convert("RGB")
red, green, blue = rgb.split()
minimum = ImageChops.darker(ImageChops.darker(red, green), blue)
maximum = ImageChops.lighter(ImageChops.lighter(red, green), blue)
spread = ImageChops.subtract(maximum, minimum)

bright = Image.eval(minimum, lambda value: 255 if value >= 238 else 0)
neutral = Image.eval(spread, lambda value: 255 if value <= 32 else 0)
white_candidates = ImageChops.multiply(bright, neutral)

# Flood-fill only white/near-white regions that touch the outside border.
background = white_candidates.copy()
width, height = background.size
for x in range(width):
    if background.getpixel((x, 0)) == 255:
        ImageDraw.floodfill(background, (x, 0), 128, thresh=0)
    if background.getpixel((x, height - 1)) == 255:
        ImageDraw.floodfill(background, (x, height - 1), 128, thresh=0)
for y in range(height):
    if background.getpixel((0, y)) == 255:
        ImageDraw.floodfill(background, (0, y), 128, thresh=0)
    if background.getpixel((width - 1, y)) == 255:
        ImageDraw.floodfill(background, (width - 1, y), 128, thresh=0)

background_region = Image.eval(background, lambda value: 255 if value == 128 else 0)
edge_region = background_region.filter(ImageFilter.MaxFilter(5))

# Feather the outer antialiased white fringe while preserving bright logo details
# that are not connected to the outside background.
alpha = original.getchannel("A")
edge_alpha = ImageChops.subtract(Image.new("L", rgb.size, 255), minimum)
edge_alpha = ImageChops.darker(alpha, edge_alpha)
alpha_pixels = ImageChops.darker(
    alpha,
    ImageChops.lighter(
        ImageChops.multiply(edge_region, edge_alpha),
        ImageChops.multiply(ImageChops.invert(edge_region), alpha)
    )
)
# Explicitly clear the background-connected white pixels.
alpha_pixels = ImageChops.multiply(alpha_pixels, ImageOps.invert(background_region))
original.putalpha(alpha_pixels)
original.save(TRANSPARENT, "PNG", optimize=True)

# Crop only transparent outer margins for app icons. The website logo remains uncropped.
bbox = original.getchannel("A").getbbox()
if not bbox:
    raise SystemExit("Le détourage n'a conservé aucun pixel du logo.")
icon_source = original.crop(bbox)

def make_icon(size: int) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), (7, 21, 45, 255))
    scaled = ImageOps.contain(
        icon_source,
        (int(size * 0.92), int(size * 0.92)),
        method=Image.Resampling.LANCZOS
    )
    canvas.alpha_composite(
        scaled,
        ((size - scaled.width) // 2, (size - scaled.height) // 2)
    )
    return canvas

for size, filename in [
    (48, "favicon-48.png"),
    (180, "apple-touch-icon.png"),
    (192, "favicon-192.png"),
    (512, "favicon-512.png")
]:
    make_icon(size).save(ASSETS / filename, "PNG", optimize=True)

make_icon(256).save(
    ASSETS / "favicon.ico",
    format="ICO",
    sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
)

print(f"Logo transparent créé : {TRANSPARENT}")
print("Icônes PWA recréées depuis le même logo 3D.")
