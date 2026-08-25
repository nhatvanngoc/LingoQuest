"""
Generate LingoQuest favicons — checklist 1.5
- Creates public/icon-512.png (512x512 PNG, square, rounded, gradient bg + sparkle)
- Creates public/favicon.ico (multi-size ICO: 32x32, 16x16)
- Also creates public/apple-touch-icon.png (180x180) and public/icon-192.png
- Source design matches favicon.svg: gradient #2563EB -> #8B5CF6, white sparkle
Usage: python scripts/generate_favicon.py
Requires: Pillow (pip install Pillow)
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter
import math

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"

def lerp(a,b,t): return int(a + (b-a)*t)

def create_gradient(size):
    w,h = size, size
    # diagonal gradient from top-left #2563EB (37,99,235) to bottom-right #8B5CF6 (139,92,246)
    img = Image.new("RGBA", (w,h), (0,0,0,0))
    px = img.load()
    for y in range(h):
        for x in range(w):
            t = (x + y) / (2*(size-1))  # diagonal 0..1
            r = lerp(37, 139, t)
            g = lerp(99, 92, t)
            b = lerp(235, 246, t)
            px[x,y] = (r,g,b,255)
    return img

def rounded_mask(size, radius):
    # create L mask with rounded rect
    mask = Image.new("L", (size,size), 0)
    draw = ImageDraw.Draw(mask)
    # rounded rectangle: use rounded_rectangle (Pillow 8+)
    draw.rounded_rectangle([0,0,size-1,size-1], radius=radius, fill=255)
    return mask

def draw_sparkle(draw, cx, cy, scale=1.0, color=(255,255,255,255), stroke=14):
    # Draw 3 sparkle stars similar to lucide Sparkles, centered at cx,cy
    # Main 8-point star (large) at center
    # Using polygon star approach + cross sparkles
    # Main star: 4-point diamond sparkle approximated with bezier-ish using polygon
    # We'll draw a classic 4-point sparkle: centered diamond with concave curves
    # Simplified: draw 8-point star via polygon with alternating radii
    def star_points(cx, cy, outer, inner, points=4):
        pts=[]
        for i in range(points*2):
            angle = math.radians(-90 + i*360/(points*2))
            r = outer if i%2==0 else inner
            x = cx + math.cos(angle)*r*scale
            y = cy + math.sin(angle)*r*scale
            pts.append((x,y))
        return pts

    # Large center sparkle (outer ~85, inner ~28)
    pts = star_points(cx, cy, 92, 28, points=4)
    draw.polygon(pts, fill=color, outline=None)
    # Add subtle inner highlight (smaller white with opacity if needed)
    # Cross sparkles: top-right and bottom-right small crosses
    # Small star 1: near top-right of main (offset 58, -58)
    # We'll place two small 4-point stars
    small_scale = scale * 0.38
    # Use simple plus shape: two rectangles crossing
    # Instead draw small 4-point star polygons
    for (ox, oy) in [(68*scale, -62*scale), (78*scale, 42*scale)]:
        sx, sy = cx+ox, cy+oy
        pts2 = star_points(sx, sy, 22, 6, points=4)
        draw.polygon(pts2, fill=color)

    # Also add little dots at sparkle tips like lucide has small particles
    # Tiny star at ( -55, 55 ) very small
    pts3 = star_points(cx-58*scale, cy+62*scale, 14, 4, points=4)
    draw.polygon(pts3, fill=color)

def main():
    size = 512
    radius = 112  # matches svg rx
    # 1. gradient bg
    bg = create_gradient(size)
    # 2. apply rounded mask
    mask = rounded_mask(size, radius)
    bg.putalpha(mask)

    # 3. subtle highlight overlay (white 22% at top)
    highlight = Image.new("RGBA", (size,size), (255,255,255,0))
    h_draw = ImageDraw.Draw(highlight)
    # gradient highlight: white alpha decreasing downwards
    for y in range(size):
        alpha = int(58 * (1 - y/size) * 0.9)  # max ~58 (~22%)
        if alpha>0:
            h_draw.line([(0,y),(size,y)], fill=(255,255,255,alpha))
    # combine highlight with rounded mask as well
    # we need to mask highlight too
    highlight.putalpha(mask)
    # composite
    img = Image.alpha_composite(bg, highlight)

    # 4. draw sparkle white centered
    draw = ImageDraw.Draw(img)
    draw_sparkle(draw, size//2, size//2, scale=1.0, color=(255,255,255,255))

    # 5. add subtle inner shadow / border (1px white 15% border already via highlight, skip)

    # ensure directory
    PUBLIC.mkdir(parents=True, exist_ok=True)

    # Save 512
    p512 = PUBLIC / "icon-512.png"
    img.save(p512, "PNG", optimize=True)
    print(f"Wrote {p512} {img.size}")

    # Also save favicon.svg copy already exists, ensure 512 PNG is referenced
    # Save 192
    p192 = PUBLIC / "icon-192.png"
    img.resize((192,192), Image.LANCZOS).save(p192, "PNG", optimize=True)
    print(f"Wrote {p192}")

    # Save apple 180
    p180 = PUBLIC / "apple-touch-icon.png"
    img.resize((180,180), Image.LANCZOS).save(p180, "PNG", optimize=True)
    print(f"Wrote {p180}")

    # Save favicon.ico (32 + 16)
    ico_path = PUBLIC / "favicon.ico"
    # ICO wants RGBA -> convert to RGB with white bg? Keep transparency but Windows handles.
    # Resize to 32 and 16
    img32 = img.resize((32,32), Image.LANCZOS)
    img16 = img.resize((16,16), Image.LANCZOS)
    # Pillow can save multi-size ICO by passing sizes list
    # Need to save from largest with append
    img32.save(ico_path, format="ICO", sizes=[(32,32),(16,16)])
    print(f"Wrote {ico_path}")

    # Also ensure public/favicon.ico exists note: already written
    # Verify
    for p in [p512, p192, p180, ico_path]:
        print(f"OK {p.name}: {p.stat().st_size} bytes, exists={p.exists()}")

if __name__ == "__main__":
    main()
