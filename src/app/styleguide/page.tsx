/**
 * LingoQuest — Living Style Guide (Checklist 1.8)
 * ============================================================
 * ATOMIC DESIGN — cách hệ thống được tổ chức
 * ------------------------------------------------------------
 * Atoms      → đơn vị nhỏ nhất, không phụ thuộc: Button, Input,
 *              Badge, Label, Icon (lucide-react), token màu / font
 *              Định nghĩa tại: src/components/ui/* + globals.css @theme
 *
 * Molecules  → kết hợp atoms: Input + Label + errorText, CardHeader
 *              + CardTitle + Badge, StreakBadge (Flame + NumberTicker),
 *              spotlight hover, glass effect. Ví dụ: SpotlightCard,
 *              Toaster item, AssignmentCard header.
 *
 * Organisms  → khối phức hợp: AppShell (header + sidebar + bottomNav),
 *              LessonLibrary (filters + grid + pagination),
 *              VideoTimestampList, FlashCard (3D flip), BentoGrid.
 *
 * Templates  → khung layout: dashboard 12-col (max-w-7xl, gap-6/8/12),
 *              exercise 2-col, teacher grading layout. Dùng chung
 *              container `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`.
 *
 * Pages      → template + dữ liệu thật: /, /dashboard, /learn,
 *              /teacher/* ... Landing đã dùng BackgroundBeams + hero.
 *
 * Quy ước delivery: mọi màu phải qua --color-* token (không hard-hex),
 * font duy nhất Be Vietnam Pro (400/600/700, WOFF2 ~80-120KB), icon
 * lucide SVG 24x24 square, ảnh qua SmartImage với gradient fallback.
 * Popins: Toaster toàn cục (src/components/Toaster.tsx) mount trong
 * layout.tsx — chi tiết ở section ♯feedback cuối trang.
 * ============================================================
 * Grid: 1280px (max-w-7xl) • 12 cols • gutter 24px (gap-6) •
 *       outer margin 24/80 (px-4 sm:px-6 lg:px-8)
 * Colors / fonts / forms / images: xem chi tiết từng section.
 */

import Link from "next/link";
import {
  Sparkles,
  Palette,
  Type,
  MousePointer2,
  FormInput,
  Layers,
  Grid3X3,
  Bell,
  Check,
  AlertTriangle,
  Search,
  Mail,
  Lock,
  Eye,
  ArrowLeft,
  Copy,
  Info,
  Zap,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Textarea, Label } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SpotlightCard, BentoGrid } from "@/components/magic/SpotlightCard";
import { BackgroundBeams, AnimatedShinyText } from "@/components/magic/BackgroundBeams";

// ---- Token data — 1:1 với globals.css @theme ----
const PALETTES = [
  {
    name: "Brand — Xanh chủ đạo",
    desc: "CTA, link, focus ring. Hover #1d4ed8, active #1e40af.",
    tokens: [
      { token: "--color-brand", hex: "#2563eb", cls: "bg-brand", text: "text-white" },
      { token: "--color-brand-50", hex: "#eff6ff", cls: "bg-brand-50", text: "text-brand-700" },
      { token: "--color-brand-100", hex: "#dbeafe", cls: "bg-brand-100", text: "text-brand-700" },
      { token: "--color-brand-200", hex: "#bfdbfe", cls: "bg-brand-200", text: "text-brand-800" },
      { token: "--color-brand-300", hex: "#93c5fd", cls: "bg-brand-300", text: "text-brand-800" },
      { token: "--color-brand-400", hex: "#60a5fa", cls: "bg-brand-400", text: "text-white" },
      { token: "--color-brand-500", hex: "#3b82f6", cls: "bg-brand-500", text: "text-white" },
      { token: "--color-brand-600", hex: "#2563eb", cls: "bg-brand-600", text: "text-white" },
      { token: "--color-brand-700", hex: "#1d4ed8", cls: "bg-brand-700", text: "text-white" },
      { token: "--color-brand-800", hex: "#1e40af", cls: "bg-brand-800", text: "text-white" },
    ],
  },
  {
    name: "Success — Xanh lá (hoàn thành, SRS)",
    tokens: [
      { token: "--color-success", hex: "#10b981", cls: "bg-success", text: "text-white" },
      { token: "--color-success-50", hex: "#ecfdf5", cls: "bg-success-50", text: "text-emerald-700" },
      { token: "--color-success-100", hex: "#d1fae5", cls: "bg-success-100", text: "text-emerald-700" },
      { token: "--color-success-200", hex: "#a7f3d0", cls: "bg-success-200", text: "text-emerald-800" },
      { token: "--color-success-500", hex: "#10b981", cls: "bg-success-500", text: "text-white" },
    ],
  },
  {
    name: "Accent — Vàng hổ phách (XP, streak, highlight)",
    tokens: [
      { token: "--color-accent", hex: "#fbbf24", cls: "bg-accent", text: "text-slate-900" },
      { token: "--color-accent-50", hex: "#fffbeb", cls: "bg-accent-50", text: "text-amber-700" },
      { token: "--color-accent-100", hex: "#fef3c7", cls: "bg-accent-100", text: "text-amber-700" },
      { token: "--color-accent-200", hex: "#fde68a", cls: "bg-accent-200", text: "text-amber-800" },
      { token: "--color-accent-300", hex: "#fcd34d", cls: "bg-accent-300", text: "text-amber-800" },
      { token: "--color-accent-400", hex: "#fbbf24", cls: "bg-accent-400", text: "text-slate-900" },
    ],
  },
  {
    name: "Danger & Violet — Trạng thái & nhấn nhá",
    tokens: [
      { token: "--color-danger", hex: "#ef4444", cls: "bg-danger", text: "text-white" },
      { token: "--color-danger-50", hex: "#fef2f2", cls: "bg-danger-50", text: "text-red-700" },
      { token: "--color-danger-100", hex: "#fee2e2", cls: "bg-danger-100", text: "text-red-700" },
      { token: "--color-violet", hex: "#8b5cf6", cls: "bg-violet", text: "text-white" },
      { token: "--color-violet-50", hex: "#f5f3ff", cls: "bg-violet-50", text: "text-violet-700" },
      { token: "--color-violet-100", hex: "#ede9fe", cls: "bg-violet-100", text: "text-violet-700" },
    ],
  },
  {
    name: "Neutrals — Nền & chữ",
    tokens: [
      { token: "--color-cream", hex: "#f8fafc", cls: "bg-cream border border-slate-200", text: "text-ink" },
      { token: "--color-ink", hex: "#0f172a", cls: "bg-ink", text: "text-white" },
    ],
  },
];

export const metadata = {
  title: "Style Guide — LingoQuest Design System v2",
  description: "Living style guide: colors, typography, buttons, inputs, cards, grid & feedback.",
};

export default function StyleGuidePage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-violet-600 text-white shadow-glow-brand">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="text-base font-extrabold tracking-tight text-slate-900">
              Lingo<span className="bg-gradient-to-r from-brand to-violet-600 bg-clip-text text-transparent">Quest</span>
              <span className="ml-2 rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-black tracking-widest text-white">STYLE GUIDE</span>
            </span>
          </Link>
          <div className="hidden items-center gap-2 sm:flex">
            <Badge variant="brand" className="rounded-full px-2.5 py-1 text-[11px]">
              v2 · Be Vietnam Pro
            </Badge>
            <Badge variant="neutral" className="rounded-full px-2.5 py-1 text-[11px]">
              1280px · 12 cols · 24px gutter
            </Badge>
            <Button asChild size="sm" variant="ghost" className="rounded-xl">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" /> Về trang chủ
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero intro — mesh + grid */}
      <div className="relative overflow-hidden border-b border-slate-100 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-mesh-brand opacity-40" />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-black text-violet-700">
              <Palette className="h-3.5 w-3.5" /> Living Style Guide · Checklist 1.8 & 1.9
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">
              LingoQuest Design System <AnimatedShinyText>v2</AnimatedShinyText>
            </h1>
            <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-slate-600">
              Hệ thống thiết kế <span className="font-bold text-slate-900">Duolingo 2026</span> — Be Vietnam Pro,
              gradient mesh, glass, spotlight & shimmer. Trang này là nguồn chân lý duy nhất cho
              màu sắc, chữ, nút, form, thẻ và lưới. Mọi token đều map 1:1 với <code className="rounded bg-slate-900 px-1.5 py-0.5 text-xs font-bold text-white">globals.css @theme</code>.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold">
              <span className="rounded-full bg-slate-900 px-3 py-1.5 text-white">Atomic Design</span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-slate-600">Atoms → Molecules → Organisms → Templates → Pages</span>
            </div>
          </div>

          {/* Quick nav */}
          <nav className="mt-8 flex flex-wrap gap-2">
            {[
              { id: "colors", label: "Màu sắc", icon: Palette },
              { id: "typography", label: "Chữ viết", icon: Type },
              { id: "buttons", label: "Nút bấm", icon: MousePointer2 },
              { id: "inputs", label: "Biểu mẫu", icon: FormInput },
              { id: "cards", label: "Thẻ", icon: Layers },
              { id: "grid", label: "Lưới 12 cột", icon: Grid3X3 },
              { id: "feedback", label: "Phản hồi", icon: Bell },
            ].map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm font-bold text-slate-700 shadow-soft transition hover:border-brand-200 hover:bg-brand-50 hover:text-brand"
              >
                <n.icon className="h-4 w-4" /> {n.label}
              </a>
            ))}
          </nav>

          {/* Delivery note */}
          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-800">
            <span className="font-black">Ghi chú bàn giao (1.9):</span> 404 tại <code className="rounded bg-white px-1 py-0.5 font-mono text-xs">src/app/not-found.tsx</code>, 500 tại{" "}
            <code className="rounded bg-white px-1 py-0.5 font-mono text-xs">src/app/error.tsx</code>, popin duy nhất là{" "}
            <code className="rounded bg-white px-1 py-0.5 font-mono text-xs">Toaster</code> (4 tones, auto-dismiss 4s) — xem ♯feedback.
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* ========== 1. COLORS ========== */}
        <section id="colors" className="scroll-mt-24">
          <SectionHeader
            icon={Palette}
            kicker="01 · Tokens"
            title="Màu sắc"
            desc="Tất cả màu đều qua --color-* token trong globals.css @theme. Không dùng hex rời. Contrast đã kiểm: text-slate-600 trên cream ~7.5:1, chữ trắng trên brand-700 ~5.8:1 (WCAG AA)."
          />
          <div className="mt-6 grid gap-6">
            {PALETTES.map((p) => (
              <Card key={p.name} className="overflow-hidden">
                <CardHeader className="border-b border-slate-100 bg-slate-50/50">
                  <CardTitle className="text-base">{p.name}</CardTitle>
                  {p.desc && <CardDescription className="text-sm font-medium">{p.desc}</CardDescription>}
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                    {p.tokens.map((t) => (
                      <div key={t.token} className="group rounded-2xl border border-slate-100 bg-white p-3 shadow-soft transition hover:-translate-y-0.5 hover:shadow-card">
                        <div className={`flex h-16 items-center justify-center rounded-xl text-xs font-black shadow-inner ${t.cls} ${t.text}`}>
                          Aa
                        </div>
                        <p className="mt-2 truncate font-mono text-[11px] font-bold text-slate-900">{t.token}</p>
                        <p className="flex items-center justify-between gap-1 text-[11px] font-semibold text-slate-500">
                          <span>{t.hex}</span>
                          <span className="rounded bg-slate-100 px-1 py-0.5 font-mono text-[10px]">{t.cls}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Shadows & Radius */}
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Shadows — Bóng đổ</CardTitle>
                  <CardDescription>shadow-soft / card / lift / glow-brand|accent|success</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-3">
                  {[
                    { name: "soft", cls: "shadow-soft", desc: "Card nhẹ" },
                    { name: "card", cls: "shadow-card", desc: "Thẻ nổi" },
                    { name: "lift", cls: "shadow-lift", desc: "Modal / hero image" },
                    { name: "glow-brand", cls: "shadow-glow-brand", desc: "CTA chính" },
                    { name: "glow-accent", cls: "shadow-glow-accent", desc: "Streak / XP" },
                    { name: "glow-success", cls: "shadow-glow-success", desc: "Thành công" },
                  ].map((s) => (
                    <div key={s.name} className={`rounded-2xl border border-slate-100 bg-white p-4 ${s.cls}`}>
                      <p className="font-mono text-xs font-bold text-slate-900">{s.cls}</p>
                      <p className="text-xs font-semibold text-slate-500">{s.desc}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Radius — Bo góc</CardTitle>
                  <CardDescription>xl / 2xl / 3xl / 4xl — mặc định thẻ là 3xl (1.75rem)</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-3">
                  {[
                    { name: "rounded-xl", value: "1rem" },
                    { name: "rounded-2xl", value: "1.25rem" },
                    { name: "rounded-3xl", value: "1.75rem" },
                    { name: "rounded-4xl", value: "2.5rem" },
                  ].map((r) => (
                    <div key={r.name} className={`flex h-20 items-center justify-center border border-slate-200 bg-white font-mono text-xs font-bold text-slate-700 ${r.name}`}>
                      {r.name}
                      <span className="ml-1 font-normal text-slate-400">{r.value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ========== 2. TYPOGRAPHY ========== */}
        <section id="typography" className="mt-16 scroll-mt-24">
          <SectionHeader
            icon={Type}
            kicker="02 · Be Vietnam Pro"
            title="Chữ viết (Typography)"
            desc="Font duy nhất Be Vietnam Pro — 400/600/700 self-host qua @fontsource (WOFF2 ~80-120KB, display:swap). Fallback: ui-sans-serif, system-ui, -apple-system, Segoe UI. html { font-size:112.5% ≈18px; line-height:1.6 } để dấu tiếng Việt không vỡ."
          />
          <Card className="mt-6 overflow-hidden">
            <CardContent className="p-0">
              <div className="divide-y divide-slate-100">
                <TypeRow
                  label="H1 · 700 · 40–72px"
                  className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.5rem]"
                  sample="Chinh phục tiếng Anh cùng LingoQuest"
                  sub="Landing hero · Dùng cho tiêu đề trang duy nhất. Tiếng Việt: ắ â ê ô ư đ — HỌC, học nữa, học mãi."
                />
                <TypeRow
                  label="H2 · 700 · 30–36px"
                  className="text-3xl font-extrabold tracking-tight sm:text-4xl"
                  sample="Mọi thứ bạn cần để giỏi tiếng Anh"
                  sub="Section heading · Trước mỗi khối features / steps. Ví dụ: Hoạt động đơn giản, hiệu quả rõ ràng."
                />
                <TypeRow
                  label="H3 · 700 · 18–20px"
                  className="text-lg font-extrabold tracking-tight"
                  sample="Học qua Video · Flashcard 3D · Game 2D Pro"
                  sub="Card title · Dùng trong Feature, Assignment, Lesson. Luôn kèm icon lucide 20×20."
                />
                <TypeRow
                  label="Body · 400/600 · 18px · leading 1.6"
                  className="text-[17px] font-medium leading-relaxed text-slate-600"
                  sample="Video tương tác 3D, thẻ lật tilt, bài tập kiểu game và mini-game Phaser Pro — tất cả trong một nền tảng được giáo viên quản lý trực tiếp."
                  sub="Đoạn văn thường · 600 cho nhấn mạnh (font-bold text-slate-900). Xử lý dấu dài & wrap: word-break giữ nguyên."
                />
                <TypeRow
                  label="Small · 600 · 13–15px"
                  className="text-sm font-semibold leading-relaxed text-slate-500"
                  sample="Miễn phí · Lớp 10–12 · 500+ video · SRS thông minh · Mỗi ngày một chút, tích tiểu thành đại."
                  sub="Meta, badge, caption · Dùng trong pill, footer, helper text. 11–12px chỉ cho nhãn phụ."
                />
                <div className="grid gap-4 bg-slate-50/70 p-6 sm:grid-cols-3">
                  <div className="rounded-2xl bg-white p-4 shadow-soft">
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400">Tiếng Việt pangram</p>
                    <p className="mt-2 text-sm font-bold leading-relaxed text-slate-700">
                      “Kiên trì hôm nay, rạng ngời mai sau — Học một ngôn ngữ, mở một thế giới.”
                    </p>
                    <p className="mt-1 text-xs text-slate-500">Dấu: á à ả ã ạ · ắ ằ ẳ ẵ ặ · ấ ầ ẩ ẫ ậ · é è ẻ ẽ ẹ · í ì ỉ ĩ ị · ó ò ỏ õ ọ · ú ù ủ ũ ụ · ứ ừ ử ữ ự · đ Đ</p>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-soft">
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400">Gradient text</p>
                    <p className="mt-2 bg-gradient-to-r from-brand via-violet-600 to-brand bg-clip-text text-xl font-extrabold text-transparent">LingoQuest Pro v2</p>
                    <p className="mt-1 font-mono text-xs text-slate-500">.text-gradient-brand · bg-[length:200%] animate-gradient-x</p>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-soft">
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400">Font stack</p>
                    <p className="mt-2 font-mono text-xs leading-relaxed text-slate-600">
                      --font-sans: &quot;Be Vietnam Pro&quot;, ui-sans-serif, system-ui, -apple-system, &quot;Segoe UI&quot;, sans-serif
                    </p>
                    <p className="mt-1 text-xs text-slate-500">Weights: 400 regular · 600 semibold · 700 extrabold</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ========== 3. BUTTONS ========== */}
        <section id="buttons" className="mt-16 scroll-mt-24">
          <SectionHeader
            icon={MousePointer2}
            kicker="03 · Atoms"
            title="Nút bấm (Buttons)"
            desc="Mọi trạng thái đã chuẩn: default #2563EB → hover #1d4ed8 → active #1e40af → focus ring brand/50 → disabled opacity-50. Dùng Button từ src/components/ui/button.tsx (+ ShimmerButton)."
          />
          <div className="mt-6 grid gap-6">
            {/* Variants */}
            <Card>
              <CardHeader className="border-b border-slate-100">
                <CardTitle className="text-base">Variants — Biến thể</CardTitle>
                <CardDescription>Mặc định dùng default (brand) cho CTA chính; outline/ghost cho hành động phụ. Shimmer chỉ cho hero CTA.</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <ButtonShowcase label="default · Primary" note="bg-brand → hover brand-700">
                    <Button>Bắt đầu ngay</Button>
                    <Button disabled>Bắt đầu ngay</Button>
                  </ButtonShowcase>
                  <ButtonShowcase label="success · Emerald" note="from-emerald-400 to-success">
                    <Button variant="success">
                      <Check className="h-4 w-4" /> Hoàn thành
                    </Button>
                    <Button variant="success" disabled>
                      Hoàn thành
                    </Button>
                  </ButtonShowcase>
                  <ButtonShowcase label="accent · Amber" note="from-amber-300 to-accent">
                    <Button variant="accent">
                      <Zap className="h-4 w-4" /> +30 XP
                    </Button>
                    <Button variant="accent" disabled>
                      +30 XP
                    </Button>
                  </ButtonShowcase>
                  <ButtonShowcase label="danger · Red" note="from-red-400 to-danger">
                    <Button variant="danger">Xóa bài</Button>
                    <Button variant="danger" disabled>
                      Xóa bài
                    </Button>
                  </ButtonShowcase>
                  <ButtonShowcase label="outline · Secondary" note="border slate-200 bg-white">
                    <Button variant="outline">
                      <Eye className="h-4 w-4" /> Xem demo
                    </Button>
                    <Button variant="outline" disabled>
                      Xem demo
                    </Button>
                  </ButtonShowcase>
                  <ButtonShowcase label="ghost · Tertiary" note="hover:underline visited:violet">
                    <Button variant="ghost">Khám phá</Button>
                    <Button variant="ghost" disabled>
                      Khám phá
                    </Button>
                  </ButtonShowcase>
                  <ButtonShowcase label="glass · Blur" note="backdrop-blur + white/40">
                    <Button variant="glass">
                      <Sparkles className="h-4 w-4" /> Glass CTA
                    </Button>
                    <Button variant="glass" disabled>
                      Glass CTA
                    </Button>
                  </ButtonShowcase>
                  <ButtonShowcase label="shimmer · Gradient" note="Duolingo 2026 hero">
                    <Button variant="default">
                      <Sparkles className="h-4 w-4" /> Shimmer Pro
                    </Button>
                    <Button variant="default" disabled>
                      Shimmer Pro
                    </Button>
                  </ButtonShowcase>
                </div>

                <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <p className="text-xs font-black uppercase tracking-widest text-slate-500">States — Trạng thái</p>
                  <div className="mt-3 grid gap-3 text-xs leading-relaxed sm:grid-cols-5">
                    <StateCell label="Default" value="#2563EB · shadow-soft" />
                    <StateCell label="Hover" value="#1d4ed8 · shadow-glow-brand · before:from-white/15" />
                    <StateCell label="Focus" value="ring-2 ring-brand/50 ring-offset-2 · outline-none" />
                    <StateCell label="Active" value="#1e40af · scale-[0.97] · translate-y-px" />
                    <StateCell label="Disabled" value="opacity-50 · pointer-events-none · cursor-not-allowed" />
                  </div>
                  <p className="mt-3 text-xs font-semibold text-slate-500">
                    Link states: <span className="font-bold text-brand">hover:underline underline-offset-4</span> · visited:text-violet-700 · active:text-brand-700
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Sizes */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Sizes — Kích thước</CardTitle>
                <CardDescription>default h-11 · sm h-9 · lg h-13 · xl h-14 (hero) · icon h-11 w-11</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap items-center gap-3 p-6">
                <Button size="sm">Small (sm)</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large (lg)</Button>
                <Button size="xl">XL — Hero</Button>
                <Button size="icon" aria-label="Tìm kiếm">
                  <Search className="h-4 w-4" />
                </Button>
                <span className="ml-2 text-xs font-semibold text-slate-500">+ asChild để bọc &lt;Link&gt; — giữ nguyên size/variant</span>
              </CardContent>
            </Card>

            {/* ShimmerButton hero */}
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-base">ShimmerButton — Hero CTA (magic)</CardTitle>
                <CardDescription>src/components/magic/ShimmerButton.tsx — dùng cho landing primary. Có motion scale 1.02 hover.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3 bg-slate-50 p-6">
                {/* Imported as regular Button shimmer to avoid extra wrapper; ShimmerButton demo */}
                <Button variant="default" size="xl" className="min-w-[220px]">
                  <Sparkles className="h-4 w-4" /> Đăng nhập bằng Google
                </Button>
                <Button variant="outline" size="xl">
                  <Eye className="h-4 w-4" /> Xem demo
                </Button>
                <span className="flex items-center text-xs font-semibold text-slate-500">Shimmer sweep: absolute inset-0 bg-gradient-to-r via-white/20 animate-[shimmer_2.5s]</span>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ========== 4. INPUTS ========== */}
        <section id="inputs" className="mt-16 scroll-mt-24">
          <SectionHeader
            icon={FormInput}
            kicker="04 · Forms"
            title="Biểu mẫu (Inputs)"
            desc="Input/Textarea/Label từ src/components/ui/input.tsx. Border-2 slate-200 → focus:border-brand + ring-brand/20. Lỗi dùng aria-invalid (border-danger). Đã chuẩn placeholder, disabled bg-slate-50."
          />
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Trạng thái Input</CardTitle>
                <CardDescription>4 trạng thái chính — copy nguyên class để không lệch token.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5 p-6">
                <div>
                  <Label htmlFor="sg-input-default">Mặc định (default)</Label>
                  <Input id="sg-input-default" placeholder="Nhập email của bạn — vd. minh@lingoquest.app" className="mt-1.5" />
                  <p className="mt-1.5 text-xs font-medium text-slate-400">border-2 border-slate-200 · rounded-2xl · h-11 · px-4</p>
                </div>
                <div>
                  <Label htmlFor="sg-input-focus">Focus — Đang nhập</Label>
                  <Input
                    id="sg-input-focus"
                    defaultValue="minh.nguyen@lingoquest.app"
                    autoFocus
                    className="mt-1.5 border-brand ring-2 ring-brand-500/20"
                  />
                  <p className="mt-1.5 text-xs font-medium text-brand">focus:border-brand · focus:ring-2 focus:ring-brand-500/20</p>
                </div>
                <div>
                  <Label htmlFor="sg-input-error" className="text-danger">
                    Lỗi (aria-invalid)
                  </Label>
                  <Input
                    id="sg-input-error"
                    defaultValue="sai-email"
                    aria-invalid="true"
                    className="mt-1.5"
                  />
                  <p className="mt-1.5 flex items-center gap-1 text-xs font-bold text-danger">
                    <AlertTriangle className="h-3.5 w-3.5" /> Email không hợp lệ — vui lòng kiểm tra lại
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-400">aria-[invalid=true]:border-danger · focus:ring-danger/20</p>
                </div>
                <div>
                  <Label htmlFor="sg-input-disabled" className="text-slate-400">
                    Vô hiệu (disabled)
                  </Label>
                  <Input id="sg-input-disabled" placeholder="Không thể nhập khi đang gửi..." disabled className="mt-1.5" />
                  <p className="mt-1.5 text-xs font-medium text-slate-400">disabled:opacity-50 · disabled:bg-slate-50 · cursor-not-allowed</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Textarea, Label & ví dụ form</CardTitle>
                <CardDescription>Form đăng bài — tiêu đề + mô tả + hạn nộp.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5 p-6">
                <div>
                  <Label htmlFor="sg-textarea">Mô tả bài học</Label>
                  <Textarea
                    id="sg-textarea"
                    placeholder="Mô tả ngắn cho học sinh — ví dụ: Luyện nghe qua video 8 phút, trả lời 5 câu hỏi để nhận 30 XP..."
                    className="mt-1.5"
                    defaultValue="Video tương tác 8 phút — bấm từ vựng để tua đúng đoạn, học tức thì với phụ đề thông minh."
                  />
                  <p className="mt-1.5 text-xs font-medium text-slate-400">min-h-[160px] · resize-y · p-4 · rounded-2xl</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="sg-email-icon">Email (có icon)</Label>
                    <div className="relative mt-1.5">
                      <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <Input id="sg-email-icon" placeholder="you@lingoquest.app" className="pl-10" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="sg-pass-icon">Mật khẩu</Label>
                    <div className="relative mt-1.5">
                      <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <Input id="sg-pass-icon" type="password" placeholder="••••••••" className="pl-10" />
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <Button>Lưu bài</Button>
                  <Button variant="outline">Hủy</Button>
                  <span className="ml-auto flex items-center gap-1 text-xs font-semibold text-slate-400">
                    <Check className="h-3.5 w-3.5 text-success" /> Tự lưu nháp
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Badges as form meta */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-base">Badge — Nhãn trạng thái (kết hợp form)</CardTitle>
              <CardDescription>src/components/ui/badge.tsx — neutral / brand / success / accent / danger</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2 p-6">
              <Badge variant="neutral">Nháp</Badge>
              <Badge variant="brand">Đã giao</Badge>
              <Badge variant="success">Hoàn thành</Badge>
              <Badge variant="accent">Sắp hết hạn</Badge>
              <Badge variant="danger">Quá hạn</Badge>
              <span className="ml-2 text-xs font-semibold text-slate-500">Dùng trong AssignmentCard, lesson meta, hạn nộp.</span>
            </CardContent>
          </Card>
        </section>

        {/* ========== 5. CARDS ========== */}
        <section id="cards" className="mt-16 scroll-mt-24">
          <SectionHeader
            icon={Layers}
            kicker="05 · Molecules → Organisms"
            title="Thẻ (Cards)"
            desc="Card thường (rounded-3xl border-slate-100 shadow-soft), SpotlightCard (radial gradient theo chuột + tilt 3D), glass (backdrop-blur 16px), BentoGrid. Ảnh luôn qua SmartImage với gradient fallback."
          />
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Card thường</CardTitle>
                <CardDescription>src/components/ui/card.tsx — nền trắng, bo 3xl</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm leading-relaxed text-slate-600">
                  Dùng cho mọi khối nội dung: bài học, thống kê, form. Kết hợp CardHeader + CardContent + CardFooter.
                </p>
                <div className="flex gap-2">
                  <Badge variant="brand">Video</Badge>
                  <Badge variant="neutral">8 phút</Badge>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button size="sm">Học ngay</Button>
                  <Button size="sm" variant="outline">
                    Chi tiết
                  </Button>
                </div>
              </CardContent>
            </Card>

            <SpotlightCard spotlightColor="rgba(37,99,235,0.12)">
              <div className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-violet-600 text-white shadow-glow-brand">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-extrabold text-slate-900">SpotlightCard</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  Hover để thấy radial gradient chạy theo chuột + tilt 3D nhẹ. Dùng cho Features Bento trên landing.
                </p>
                <p className="mt-3 font-mono text-xs text-slate-400">spotlightColor=&quot;rgba(37,99,235,0.12)&quot;</p>
                <div className="mt-4 flex items-center gap-2 text-xs font-bold text-brand">
                  Khám phá ngay <Copy className="h-3.5 w-3.5" />
                </div>
              </div>
            </SpotlightCard>

            <div className="relative overflow-hidden rounded-3xl border border-white/40 p-6 shadow-card">
              <div className="absolute inset-0 bg-mesh-brand opacity-60" />
              <div className="absolute inset-0 bg-grid opacity-20" />
              <div className="glass relative rounded-2xl border border-white/50 p-5 shadow-soft">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-brand shadow-soft">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="mt-3 text-base font-extrabold text-slate-900">Glass card</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  <code className="rounded bg-slate-900 px-1 py-0.5 text-xs text-white">.glass</code> — rgba(255,255,255,0.72) + blur 16px. Dùng trong hero floating mocks, nav.
                </p>
                <div className="mt-3 flex gap-2">
                  <span className="rounded-full bg-slate-900 px-2.5 py-1 text-xs font-bold text-white">.glass</span>
                  <span className="rounded-full bg-white px-2.5 py-1 text-xs font-bold text-slate-700 shadow-soft">.glass-strong</span>
                </div>
              </div>
              <p className="relative mt-3 text-center font-mono text-xs font-semibold text-slate-500">Nền mesh + grid phía sau để thấy blur</p>
            </div>
          </div>

          {/* Bento demo */}
          <Card className="mt-6 overflow-hidden">
            <CardHeader className="border-b border-slate-100">
              <CardTitle className="text-base">BentoGrid — Lưới thẻ (landing Features)</CardTitle>
              <CardDescription>grid gap-6 sm:grid-cols-3 · mỗi ô là SpotlightCard với ảnh + gradient border</CardDescription>
            </CardHeader>
            <CardContent className="bg-slate-50 p-6">
              <BentoGrid>
                {[
                  { title: "Học qua Video", desc: "Bấm từ để tua đúng đoạn.", color: "from-brand-500 to-violet-500" },
                  { title: "Flashcard 3D", desc: "Lật tilt + SRS thông minh.", color: "from-emerald-400 to-teal-500" },
                  { title: "Game 2D Pro", desc: "Word Defender & Sentence Builder.", color: "from-amber-400 to-orange-500" },
                ].map((f) => (
                  <SpotlightCard key={f.title} className="p-5">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br ${f.color} text-white`}>
                      <Zap className="h-5 w-5" />
                    </div>
                    <h4 className="mt-3 font-extrabold text-slate-900">{f.title}</h4>
                    <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
                  </SpotlightCard>
                ))}
              </BentoGrid>
            </CardContent>
          </Card>

          {/* Extra card patterns */}
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <Card className="overflow-hidden p-0">
              <div className="h-2 bg-gradient-to-r from-brand to-violet-500" />
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-brand-50 text-brand">
                    <Trophy className="h-4 w-4" />
                  </span>
                  AssignmentCard pattern
                </CardTitle>
                <CardDescription>Header có progress bar 65% + XP</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-brand to-violet-500" />
                </div>
                <p className="mt-2 flex justify-between text-xs font-bold text-slate-500">
                  <span>65% hoàn thành</span>
                  <span className="text-brand">+30 XP</span>
                </p>
              </CardContent>
            </Card>
            <Card className="border-violet-200 bg-gradient-to-br from-violet-50 to-brand-50">
              <CardHeader>
                <CardTitle className="text-base text-violet-900">Violet tint card</CardTitle>
                <CardDescription className="text-violet-700">Dùng cho tip, empty-state, callout</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-violet-700">Mỗi ngày một chút, tích tiểu thành đại — streak 🔥</CardContent>
            </Card>
            <Card className="border-amber-200 bg-gradient-to-br from-accent-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-base text-amber-800">Accent tint card</CardTitle>
                <CardDescription className="text-amber-700">Dùng cho XP, streak hot</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center gap-2 text-sm font-bold text-amber-700">
                <Zap className="h-4 w-4" /> 2,480 XP · Chuỗi 12 ngày
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ========== 6. GRID ========== */}
        <section id="grid" className="mt-16 scroll-mt-24">
          <SectionHeader
            icon={Grid3X3}
            kicker="06 · Layout"
            title="Lưới 12 cột (Grid)"
            desc="Container duy nhất: mx-auto max-w-7xl (1280px) • outer margin px-4 sm:px-6 lg:px-8 (24/80) • gutter gap-6/8/12. Hero lg:gap-12, Features gap-6, Steps gap-12."
          />
          <Card className="mt-6 overflow-hidden">
            <CardHeader className="border-b border-slate-100">
              <CardTitle className="text-base">Demo 12 cột — kéo co giãn để kiểm tra gutters</CardTitle>
              <CardDescription>
                Mỗi cột là 1/12; gap-6 = 24px. Trên mobile tự wrap (grid-cols-12). Class container luôn đi kèm mọi section.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
              {/* Visual 12 cols */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <div className="bg-slate-900 px-3 py-2 font-mono text-xs font-bold text-white">mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 · grid grid-cols-12 gap-6</div>
                <div className="grid grid-cols-12 gap-6 p-4">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="flex h-20 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-violet-50 font-mono text-xs font-black text-brand ring-1 ring-brand-100 sm:h-24">
                      {i + 1}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-12 gap-6 bg-slate-50 p-4">
                  <div className="col-span-12 rounded-xl bg-slate-900 p-3 text-center text-xs font-bold text-white sm:col-span-8">col-span-8 — Nội dung chính (hero text, danh sách bài)</div>
                  <div className="col-span-12 rounded-xl bg-white p-3 text-center text-xs font-bold text-slate-700 ring-1 ring-slate-200 sm:col-span-4">col-span-4 — Ảnh / sidebar</div>
                </div>
                <div className="grid grid-cols-12 gap-6 p-4">
                  <div className="col-span-12 rounded-xl bg-brand p-3 text-center text-xs font-bold text-white sm:col-span-4">col-span-4</div>
                  <div className="col-span-12 rounded-xl bg-brand p-3 text-center text-xs font-bold text-white sm:col-span-4">col-span-4</div>
                  <div className="col-span-12 rounded-xl bg-brand p-3 text-center text-xs font-bold text-white sm:col-span-4">col-span-4</div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-mono text-xs font-bold text-slate-900">Container</p>
                  <code className="mt-1 block rounded bg-slate-900 px-2 py-1.5 font-mono text-xs text-white">mx-auto max-w-7xl px-4 sm:px-6 lg:px-8</code>
                  <p className="mt-2 text-xs font-semibold text-slate-500">1280px tối đa, canh giữa, lề 24px mobile → 32px desktop</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-mono text-xs font-bold text-slate-900">Gutters</p>
                  <code className="mt-1 block rounded bg-slate-900 px-2 py-1.5 font-mono text-xs text-white">gap-6 → 24px · gap-8 → 32px · gap-12 → 48px</code>
                  <p className="mt-2 text-xs font-semibold text-slate-500">Hero gap-8 lg:gap-12 · Features gap-6 · Steps gap-12</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-mono text-xs font-bold text-slate-900">Ảnh responsive</p>
                  <code className="mt-1 block rounded bg-slate-900 px-2 py-1.5 font-mono text-xs text-white">aspect-[4/3] → sm:aspect-square → lg:h-[640px]</code>
                  <p className="mt-2 text-xs font-semibold text-slate-500">Không dùng h-[560px] cố định ở 1024–1280 (tránh tràn)</p>
                </div>
              </div>

              <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-4">
                <p className="text-xs font-black uppercase tracking-widest text-slate-500">Snippet — section chuẩn</p>
                <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-xs leading-relaxed text-slate-100">
{`<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  <div className="grid gap-6 sm:grid-cols-3">
    {/* 3 cards — Features */}
  </div>
</section>

<section className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
  {/* Steps: text + image */}
</section>`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ========== 7. FEEDBACK / POPINS ========== */}
        <section id="feedback" className="mt-16 scroll-mt-24">
          <SectionHeader
            icon={Bell}
            kicker="07 · Popins"
            title="Phản hồi & Popins"
            desc="Hệ thống chỉ có 1 popin toàn cục: Toaster (src/components/Toaster.tsx) mount trong layout.tsx. Không dùng modal/dialog rời rạc — giữ trải nghiệm sạch."
          />
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Bell className="h-4 w-4 text-brand" /> Toaster — Toast duy nhất
                </CardTitle>
                <CardDescription>4 tones · fixed right-3 top-16 · w-[min(92vw,360px)] · auto-dismiss 4s · layout spring</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 p-6">
                {/* Static preview of 4 tones */}
                {[
                  { tone: "xp", title: "+30 XP — Hoàn thành bài!", desc: "Bạn vừa nhận 30 XP từ Video tương tác.", bg: "from-brand-50 to-violet-50", border: "border-brand-200", iconBg: "bg-brand text-white", icon: Zap },
                  { tone: "badge", title: "Huy hiệu mới: Kiên trì", desc: "Chuỗi 7 ngày — giữ phong độ nhé!", bg: "from-accent-50 to-orange-50", border: "border-accent-200", iconBg: "bg-accent text-slate-900", icon: Trophy },
                  { tone: "info", title: "Đã lưu nháp", desc: "Bài học đã được lưu tự động.", bg: "from-white to-slate-50", border: "border-slate-200", iconBg: "bg-slate-100 text-slate-600", icon: Sparkles },
                  { tone: "warn", title: "Sắp hết hạn", desc: "Bài tập hết hạn sau 2 giờ nữa.", bg: "from-danger-50 to-red-50", border: "border-danger-200", iconBg: "bg-danger text-white", icon: AlertTriangle },
                ].map((t) => (
                  <div key={t.tone} className={`group relative overflow-hidden rounded-3xl border bg-gradient-to-br p-4 shadow-soft ${t.bg} ${t.border}`}>
                    <div className="flex items-start gap-3">
                      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-lg ${t.iconBg}`}>
                        <t.icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-extrabold text-slate-900">{t.title}</p>
                        <p className="mt-1 text-xs font-semibold text-slate-500">{t.desc}</p>
                        <div className="mt-2 h-1 w-full rounded-full bg-slate-900/10">
                          <div className="h-full w-[60%] rounded-full bg-slate-900/20" />
                        </div>
                      </div>
                      <span className="rounded-xl bg-white/60 p-1.5 text-slate-400">
                        <span className="block h-4 w-4 rounded-full bg-slate-200" />
                      </span>
                    </div>
                    <span className="absolute right-2 top-2 rounded-full bg-white px-2 py-0.5 font-mono text-[10px] font-bold text-slate-600 shadow-soft">{t.tone}</span>
                  </div>
                ))}
                <div className="rounded-2xl bg-slate-900 p-4 font-mono text-xs leading-relaxed text-slate-100">
                  <p className="font-bold text-white">Sử dụng:</p>
                  <pre className="mt-1 whitespace-pre-wrap break-words">{`const { showToast } = useApp()
showToast({ title: "+30 XP", desc: "Hoàn thành bài!", tone: "xp" })
showToast({ title: "Huy hiệu mới", tone: "badge" })
// tones: "xp" | "badge" | "info" | "warn"
// Toaster đã mount sẵn trong src/app/layout.tsx — không cần import`}</pre>
                </div>
                <p className="text-xs font-semibold text-slate-500">
                  Vị trí: <code className="rounded bg-slate-100 px-1 py-0.5">fixed right-3 top-16 z-[70] w-[min(92vw,360px)]</code> · AnimatePresence + spring (stiffness 380) · Có progress bar 4s + nút đóng.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Info className="h-4 w-4 text-violet-600" /> Quy ước không dùng modal rời
                  </CardTitle>
                  <CardDescription>Giữ UI sạch — mọi xác nhận dùng inline hoặc Toaster</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 p-6 text-sm leading-relaxed text-slate-600">
                  <p>
                    LingoQuest <strong className="text-slate-900">không dùng dialog/popover tách rời</strong> cho luồng chính. Thay vào đó:
                  </p>
                  <ul className="list-disc space-y-1 pl-5 text-sm">
                    <li>Xác nhận xóa → inline confirm trong card (Button danger + outline Hủy).</li>
                    <li>Thông báo → Toaster (xp/badge/info/warn).</li>
                    <li>Chọn vai trò demo (nếu bật) → chỉ render trong AppShell, không phủ landing/login.</li>
                    <li>Nếu cần dialog thật, dùng <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs">@base-ui/react Dialog</code> với cùng token (rounded-3xl, shadow-lift, border-slate-100).</li>
                  </ul>
                  <div className="rounded-2xl bg-violet-50 p-3 text-xs font-semibold text-violet-700">
                    Tài liệu popins nằm trong file này — không có file riêng. Toaster là popin duy nhất được phép toàn cục.
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-base">Delivery checklist — 1.9</CardTitle>
                  <CardDescription>404 & 500 đã có sẵn, đúng design language</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 p-6">
                  <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                    <div>
                      <p className="text-sm font-extrabold text-emerald-800">src/app/not-found.tsx — 404</p>
                      <p className="text-xs font-semibold text-emerald-700">Gradient mesh + Sparkles + “Trang không tồn tại” · nút Về trang chủ (/) · secondary: /learn</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                    <div>
                      <p className="text-sm font-extrabold text-emerald-800">src/app/error.tsx — 500</p>
                      <p className="text-xs font-semibold text-emerald-700">Client boundary · “Có lỗi xảy ra” · nút Thử lại (reset) + Về trang chủ · hiện digest nếu có</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-3">
                    <Info className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" />
                    <div>
                      <p className="text-sm font-bold text-slate-700">Toaster</p>
                      <p className="text-xs font-semibold text-slate-500">src/components/Toaster.tsx — đã mount trong layout.tsx, không cần thêm provider.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-16 rounded-3xl border border-slate-200 bg-slate-900 p-8 text-slate-300">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="flex items-center gap-2 text-sm font-black tracking-widest text-white">
                <Sparkles className="h-4 w-4 text-violet-400" /> LINGOQUEST DESIGN SYSTEM v2
              </p>
              <p className="mt-1 text-sm leading-relaxed text-slate-400">
                Be Vietnam Pro · Tailwind v4 · shadcn · Framer Motion · Lucide · Duolingo 2026
                <br />
                Tokens trong <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-xs text-white">globals.css @theme</code> · Grid 1280/12/24 · Ảnh SmartImage w=800/1200
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-extrabold text-slate-900 transition hover:bg-slate-100">
                <ArrowLeft className="h-4 w-4" /> Về trang chủ
              </Link>
              <a href="#colors" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20">
                Lên đầu trang
              </a>
            </div>
          </div>
          <p className="mt-6 border-t border-white/10 pt-4 text-center text-xs font-semibold text-slate-500">
            Living style guide — cập nhật cùng code. Mọi thay đổi token phải sửa đồng thời ở globals.css và trang này. © 2026 LingoQuest
          </p>
        </div>
      </main>
    </div>
  );
}

function SectionHeader({
  icon: Icon,
  kicker,
  title,
  desc,
}: {
  icon: typeof Palette;
  kicker: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-soft">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-black uppercase tracking-widest text-brand">{kicker}</p>
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
        <p className="mt-1 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-[15px]">{desc}</p>
      </div>
    </div>
  );
}

function TypeRow({
  label,
  className,
  sample,
  sub,
}: {
  label: string;
  className: string;
  sample: string;
  sub: string;
}) {
  return (
    <div className="grid gap-3 p-6 lg:grid-cols-[200px_1fr]">
      <div>
        <p className="font-mono text-xs font-bold text-brand">{label}</p>
        <p className="mt-1 text-xs font-semibold leading-relaxed text-slate-500">{sub}</p>
      </div>
      <p className={className}>{sample}</p>
    </div>
  );
}

function ButtonShowcase({
  label,
  note,
  children,
}: {
  label: string;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
      <p className="text-xs font-black text-slate-900">{label}</p>
      <p className="font-mono text-[11px] text-slate-500">{note}</p>
      <div className="mt-3 flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function StateCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white p-2.5 ring-1 ring-slate-200">
      <p className="text-xs font-black text-slate-900">{label}</p>
      <p className="font-mono text-[11px] leading-snug text-slate-500">{value}</p>
    </div>
  );
}
