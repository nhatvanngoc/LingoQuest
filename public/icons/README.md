# Icons — Checklist 1.5

All icons are **SVG**, same **square** dimension, **black** base stroke.

- Library: `lucide-react` (https://lucide.dev) — 24×24 viewBox, stroke `currentColor`, monochrome.
- Usage: `<Icon className="h-5 w-5" />` — always square (h==w). Tint via Tailwind `text-brand` etc.
- Custom files: MUST be `icon-*` lowercase with dashes, e.g. `icon-sparkles.svg`.
  Place under `public/icons/` or `public/images/icons/`.
- Optimize with SVGO, keep `viewBox="0 0 24 24"` square, `fill="none"` `stroke="currentColor"`.

Do not create PNG icons — SVG only (crisp at any DPI, same stroke weight).
