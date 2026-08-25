# Images — Checklist 1.5

> Folder structure + naming for LingoQuest. All paths under `public/`.

## Expected structure

```
public/
  favicon.ico              # 32×32+16×16 ICO (multi-size) — generated via scripts/generate_favicon.py
  favicon.svg              # 512×512 vector (gradient + Sparkles)
  icon-512.png             # 512×512 PNG (PWA, high-res favicon)
  icon-192.png             # 192×192 PNG
  apple-touch-icon.png     # 180×180 Apple
  icons/                   # generic UI icons (icon-*)
  images/
    background/            # bg-* (e.g. bg-hero-gradient.svg, bg-mesh-violet.jpg)
    banners/               # banner-* (e.g. banner-welcome-1200x400.jpg)
    icons/                 # icon-* (e.g. icon-flame-24.svg, icon-sparkles.svg)
    layout/                # hero-*, banner-*, layout-* (e.g. hero-student-1200x900.jpg)
```

## Prefix rules (must follow)

- `bg-`       → backgrounds (public/images/background/bg-*.jpg|svg)
- `icon-`     → icons, always SVG, square, black base stroke, lower-case with dashes
              e.g. `icon-sparkles.svg`, `icon-flame.svg`, `icon-book-open.svg`
- `hero-`     → hero/large imagery (above-fold)
- `banner-`   → wide banners (marketing, teacher dashboard)
- `layout-`   → layout-specific (optional)

All custom icons **MUST** be `icon-*` lowercase-with-dashes. No `IconFoo.svg` or `icon Foo.svg`.

## Icons — SVG consistency

- All UI icons via `lucide-react` — SVG, same square dimension, `stroke="currentColor"`,
  viewBox `0 0 24 24`. Rendered as `<Icon className="h-5 w-5" />` (square, h==w),
  tinted via Tailwind `text-brand` etc. Do NOT hardcode hex inside SVG; keep monochrome black → color via CSS.
- If adding custom SVG: save as `public/icons/icon-*.svg` or `public/images/icons/icon-*.svg`,
  optimize with SVGO, set `viewBox="0 0 24 24"` square, `fill="none"` `stroke="currentColor"`.

## Image optimization

- Pexels URLs **MUST** include `?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900` for hero/showcase
  and `w=800&h=600` for cards. Example:
  `https://images.pexels.com/photos/6503100/…?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200`
- Every `<SmartImage>` needs meaningful `alt` (never empty unless decorative).
- Above-fold hero → `priority` (loading="eager", fetchPriority="high", decoding="sync").
  Below-fold → default `loading="lazy"` `decoding="async"` (via SmartImage).
- Always set `sizes`: hero `"(max-width:1024px) 100vw, 50vw"`, cards `"(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"`.
- SmartImage uses `<img>` (not next/image) to keep instant gradient fallback onError;
  `next.config.ts` already whitelists `images.pexels.com` for future migration.

## Favicon workflow

```bash
python scripts/generate_favicon.py   # regenerates 512/192/180 + favicon.ico from Pillow
# or upload public/icon-512.png to https://realfavicongenerator.net for full pack
```

Source logo: `public/favicon.svg` (Sparkles gradient #2563EB→#8B5CF6, rx 112).
