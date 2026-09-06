# LingoQuest Design System v3 — "Studio"

> Hoàn toàn mới, xóa bỏ mọi dấu vết AI template (blue-violet gradient, glassmorphism overload, shimmer animation).

---

## Philosophía

**Ít hơn = Tốt hơn.** Ít hiệu ứng, ít gradient, nhiều khoảng trắng, nhiều chữ hơn.  
Thiết kế này cảm giác như một studio thật, không phải AI.

---

## Color Palette

### Primary: Teal (#0F766E)
Vì teal là màu giáo dục phổ biến nhất thế giới (Duolingo, Quizlet đều dùng tông xanh lá cây).  
Khác biệt hoàn toàn với blue-violet template.

| Token | Value | Usage |
|-------|-------|-------|
| `--color-brand` | `#0F766E` | Primary buttons, links, active states |
| `--color-brand-50` | `#F0FDFA` | Light backgrounds |
| `--color-brand-100` | `#CCFBF1` | Subtle highlights |
| `--color-brand-200` | `#99F6E4` | Badges, indicators |
| `--color-brand-300` | `#5EEAD4` | Hover states |
| `--color-brand-400` | `#2DD4BF` | Accent elements |
| `--color-brand-500` | `#14B8A6` | Alternative primary |
| `--color-brand-600` | `#0D9488` | Hover states for buttons |
| `--color-brand-700` | `#0F766E` | Active states, dark text |
| `--color-brand-800` | `#115E59` | Deep brand |

### Accent: Amber (#D97706)
Warmth, energy, CTAs — thay vì violet.

| Token | Value | Usage |
|-------|-------|-------|
| `--color-accent` | `#D97706` | CTA buttons, highlights |
| `--color-accent-50` | `#FFFBEB` | Light backgrounds |
| `--color-accent-100` | `#FEF3C7` | Badges, badges |
| `--color-accent-200` | `#FDE68A` | Hover states |

### Background & Surface

| Token | Value | Usage |
|-------|-------|-------|
| `--color-cream` | `#FAF9F7` | Page background (warm white) |
| `--color-surface` | `#FFFFFF` | Cards, modals |
| `--color-ink` | `#1C1917` | Primary text |
| `--color-text-secondary` | `#57534E` | Secondary text |
| `--color-text-muted` | `#78716C` | Muted text, placeholders |
| `--color-border` | `#E7E5E4` | Borders, dividers |
| `--color-border-light` | `#F5F5F4` | Light borders |

### Semantic

| Token | Value | Usage |
|-------|-------|-------|
| `--color-success` | `#047857` | Success states |
| `--color-success-50` | `#ECFDF5` | Success backgrounds |
| `--color-danger` | `#DC2626` | Error, danger |
| `--color-danger-50` | `#FEF2F2` | Error backgrounds |
| `--color-violet` | `#7C3AED` | Reserved for special cases only |

---

## Typography

Font: **Be Vietnam Pro** (keep - excellent for Vietnamese)

| Level | Size | Weight | Line Height | Letter Spacing |
|-------|------|--------|-------------|----------------|
| `h1` | 40px / 52px (lg) | 800 | 1.15 | -0.02em |
| `h2` | 28px / 36px (lg) | 700 | 1.2 | -0.01em |
| `h3` | 20px / 24px | 700 | 1.3 | 0 |
| `body-lg` | 18px | 400 | 1.6 | 0 |
| `body` | 16px | 400 | 1.6 | 0 |
| `small` | 14px | 500 | 1.5 | 0 |
| `caption` | 12px | 600 | 1.4 | 0.02em |
| `label` | 11px | 700 | 1.3 | 0.04em |

**Rules:**
- Không dùng `font-extrabold` cho text lớn — dùng `font-bold` (700) thay vì `font-extrabold` (800) cho heading
- Heading: `tracking-tight` (-0.02em)
- Body: `tracking-normal`
- Không có `animate-gradient-x` trên text trừ khi thực sự cần

---

## Spacing

Base unit: **8px**

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Tight gaps |
| `space-2` | 8px | Small gaps |
| `space-3` | 12px | Default gaps |
| `space-4` | 16px | Section padding |
| `space-5` | 20px | Card padding |
| `space-6` | 24px | Grid gutter |
| `space-8` | 32px | Section spacing |
| `space-10` | 40px | Large sections |
| `space-12` | 48px | Page sections |
| `space-16` | 64px | Hero sections |
| `space-20` | 80px | Large page sections |

**Container:** max-w-5xl (896px) — nhỏ hơn max-w-7xl, đọc chữ đẹp hơn trên desktop  
**Margin:** px-4 sm:px-6 lg:px-8 cho nội dung, nhưng max-w-5xl để giới hạn chiều rộng dòng

---

## Radii

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 8px | Small elements |
| `radius-md` | 12px | Default |
| `radius-lg` | 16px | Cards, buttons |
| `radius-xl` | 20px | Large cards |
| `radius-2xl` | 24px | Hero cards, modals |

**Quy tắc:** Không dùng `rounded-3xl` hay `rounded-[2.5rem]` nữa. Giới hạn ở `rounded-2xl`.

---

## Shadows

Chỉ 3 loại shadow:

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 12px 24px rgba(0, 0, 0, 0.08);
```

Không có `shadow-glow-*`, `shadow-soft`, `shadow-card`, `shadow-lift` riêng lẻ.  
Các phần tử nổi: chỉ dùng `shadow-lg`.

---

## Effects — CẤM/KHÔNG

### ❌ CẤM (xóa bỏ hoàn toàn)
- Shimmer animation (trên button, card, badge)
- Floating animations (y: [0, -8, 0], x: [0, -20])
- SpotlightCard tilt (tilt, spotlight, radial gradient hover)
- BackgroundBeams (beam animations, grid dots, mesh)
- Noise texture overlay
- Shine sweep animation
- Progress bar shimmer
- Emoji lớn làm hình ảnh (🔥, 🎉, 🎮)
- Gradient text animation (animate-gradient-x)
- Glassmorphism (backdrop-blur, bg-white/70)
- Floating mockups trên hero

### ✅ CHO PHÉP (giữ lại)
- Fade up (opacity + translateY) — chỉ cho appear animation
- Spring hover (scale 1.02-1.05) — tối đa 1 lần
- Active press (scale 0.97) — cho button
- Gentle float trên icon nhỏ (y: [0, -4, 0])
- Color transitions (background-color, border-color)
- Simple entrance: slideInLeft/Right/Up

---

## Component Specs

### Button
- Default: `bg-brand text-white rounded-xl px-5 h-11 font-semibold`
- Hover: `bg-brand-700`
- Outline: `border-2 border-brand-200 bg-white text-brand`
- No shimmer, no gradient sweep
- Size: sm/h-9, default/h-11, lg/h-13

### Card
- `bg-white rounded-2xl border border-gray-200 shadow-md`
- No tilt, no spotlight, no gradient overlay
- Simple hover: `shadow-lg -translate-y-0.5`
- Padding: p-5 (20px)

### Sidebar
- `bg-white border-r border-gray-200`
- Active item: `bg-brand-50 text-brand border-r-2 border-brand`
- No floating pill, no gradient pill
- Clean icon + text layout

### Header
- `bg-white border-b border-gray-200`
- No backdrop-blur, no glass
- Clean, solid background

### Badge
- `rounded-full px-2.5 py-1 text-xs font-bold`
- Brand: `bg-brand-50 text-brand`
- Success: `bg-green-50 text-green-700`
- Accent: `bg-amber-50 text-amber-700`

### Progress Bar
- Track: `bg-gray-100 rounded-full`
- Fill: `bg-brand rounded-full`
- Height: h-2.5 mặc định
- No shimmer, no glow

---

## Layout

### Container
```
max-w-5xl mx-auto px-4 sm:px-6 lg:px-8
```

### Grid
```
1 col (mobile) → 2 col (sm) → 3 col (lg)
Gap: gap-6 (24px)
```

### Sections
```
py-16 (64px) cho section chính
py-12 (48px) cho section nhỏ
```

### Sidebar + Main
```
Desktop: sidebar w-64 + main flex-1
Mobile: bottom nav + full width main
```

---

## Icon Guidelines

- Lucide React (keep)
- Size: h-4/h-5/h-6 — nhất quán
- Color: `text-brand` hoặc `text-gray-500` — không hỗn hợp
- Không có emoji inline làm icon chính
- Badge, avatar, avatar initials

---

## Responsive Breakpoints

| Breakpoint | Width |
|------------|-------|
| sm | 640px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |

**Mobile:** 
- Bottom nav thay vì sidebar
- ẩn streak/XP count, chỉ giữ avatar
- Simplified cards

---

## Migration Checklist

- [ ] globals.css: đổi `--color-brand` từ `#2563eb` sang `#0F766E`
- [ ] globals.css: đổi `--color-accent` từ `#fbbf24` sang `#D97706`
- [ ] globals.css: xóa các animation shimmer, float, spotlight, shine-sweep, border-spin
- [ ] globals.css: đổi shadow definitions
- [ ] globals.css: thêm `--color-text-secondary`, `--color-text-muted`, `--color-border`
- [ ] globals.css: đơn giản hóa `.glass`, `.glass-strong` (hoặc xóa)
- [ ] globals.css: xóa `.noise`, `.shimmer-effect`, `.shine-sweep`, `.spotlight-card`
- [ ] globals.css: cập nhật `bg-grid` cho đơn giản hơn
- [ ] page.tsx: xóa floating mockups, simplify hero
- [ ] AppShell.tsx: simplify sidebar, header
- [ ] dashboard/page.tsx: simplify cards, remove over-decorated
- [ ] game/page.tsx: cleaner card design
- [ ] magic/SpotlightCard.tsx: simplify or remove tilt
- [ ] magic/ShimmerButton.tsx: remove shimmer effect
- [ ] magic/BackgroundBeams.tsx: simplify or remove beams
- [ ] components/Button.tsx: remove shimmer, simplify
- [ ] components/Card.tsx: simplify shadow
- [ ] components/StreakBadge.tsx: remove emoji
- [ ] components/ProgressBar.tsx: remove shimmer
- [ ] Update all pages to use new simplified components
