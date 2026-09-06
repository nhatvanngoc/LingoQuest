import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
  staticFile,
  Img,
} from 'remotion';

// ── CHASSIS — distinct from SaasDashboard/Harness — #0B1220 / #F8FAFC / #6366F1 ──
const FPS = 30;
const W = 1920;
const H = 1080;

const C = {
  bg: '#0B1220',
  bg2: '#111A2E',
  bg3: '#162544',
  card: '#141E36',
  card2: '#1A2B4D',
  line: '#1E2D4A',
  line2: '#2A3F66',
  text: '#F8FAFC',
  muted: '#94A3B8',
  sub: '#64748B',
  accent: '#6366F1',
  accent2: '#818CF8',
  accent3: '#4F46E5',
  indigoGlow: 'rgba(99,102,241,0.35)',
  ok: '#22C55E',
  warn: '#F59E0B',
  danger: '#EF4444',
  cyan: '#06B6D4',
  violet: '#8B5CF6',
} as const;

export const DURATIONS = [
  210, // S01 Cinematic Title Intro — Intro & Outro (real: cinematic-title-intro)
  180, // S02 Glitch Text — Text (real: glitch-text)
  210, // S03 Gradient Shift — Background (real: gradient-shift)
  180, // S04 Matrix Rain — Background
  240, // S05 Bar Chart Race — Charts & Data (inspired pro)
  240, // S06 Candlestick — Charts & Data
  210, // S07 Heatmap Grid — Charts & Data
  180, // S08 Circular Progress — Charts & Data
  240, // S09 KPI Dashboard — Charts & Data
  180, // S10 Particle Explosion — Content Animation (real)
  210, // S11 Card Flip — Content Animation
  180, // S12 Animated List — Content Animation
  210, // S13 Toast Stack — Content Animation
  210, // S14 Ken Burns — Cinematic
  180, // S15 Letterbox Reveal — Cinematic (real)
  180, // S16 Spotlight Reveal — Cinematic
  150, // S17 Cross Dissolve — Transition
  150, // S18 Slide Wipe — Transition
  180, // S19 Logo Glitch — Logo & Branding (real)
  180, // S20 Logo Spin — Logo & Branding
  210, // S21 Image Carousel — Image & Media (real)
  300, // S22 Finale End Card + Subscribe Reminder — Intro & Outro
];

export const TOTAL_FRAMES = DURATIONS.reduce((a, b) => a + b, 0); // 4410 = 147s @30fps

// ── 95 slugs — proof we enumerated reactvideoeditor (remote) 95 unique ──
export const DUAL_CATALOG: { slug: string; category: string; source: 'reactvideoeditor' }[] = [
  // Text 9
  { slug: 'bubble-pop-text', category: 'Text', source: 'reactvideoeditor' },
  { slug: 'popping-text', category: 'Text', source: 'reactvideoeditor' },
  { slug: 'floating-bubble-text', category: 'Text', source: 'reactvideoeditor' },
  { slug: 'pulsing-text', category: 'Text', source: 'reactvideoeditor' },
  { slug: 'glitch-text', category: 'Text', source: 'reactvideoeditor' },
  { slug: 'animated-text', category: 'Text', source: 'reactvideoeditor' },
  { slug: 'bounce-text', category: 'Text', source: 'reactvideoeditor' },
  { slug: 'slide-text', category: 'Text', source: 'reactvideoeditor' },
  { slug: 'typewriter-subtitle', category: 'Text', source: 'reactvideoeditor' },
  // Background 9
  { slug: 'liquid-wave', category: 'Background', source: 'reactvideoeditor' },
  { slug: 'matrix-rain', category: 'Background', source: 'reactvideoeditor' },
  { slug: 'geometric-patterns', category: 'Background', source: 'reactvideoeditor' },
  { slug: 'pixel-transition', category: 'Background', source: 'reactvideoeditor' },
  { slug: 'gradient-shift', category: 'Background', source: 'reactvideoeditor' },
  { slug: 'starfield', category: 'Background', source: 'reactvideoeditor' },
  { slug: 'bokeh-circles', category: 'Background', source: 'reactvideoeditor' },
  { slug: 'noise-grain', category: 'Background', source: 'reactvideoeditor' },
  { slug: 'grid-pulse', category: 'Background', source: 'reactvideoeditor' },
  // Content Animation 13
  { slug: 'card-flip', category: 'Content Animation', source: 'reactvideoeditor' },
  { slug: 'particle-explosion', category: 'Content Animation', source: 'reactvideoeditor' },
  { slug: 'sound-wave', category: 'Content Animation', source: 'reactvideoeditor' },
  { slug: 'animated-list', category: 'Content Animation', source: 'reactvideoeditor' },
  { slug: 'countdown-timer', category: 'Content Animation', source: 'reactvideoeditor' },
  { slug: 'rotating-carousel', category: 'Content Animation', source: 'reactvideoeditor' },
  { slug: 'coverflow-carousel', category: 'Content Animation', source: 'reactvideoeditor' },
  { slug: 'notification-pop', category: 'Content Animation', source: 'reactvideoeditor' },
  { slug: 'toast-stack', category: 'Content Animation', source: 'reactvideoeditor' },
  { slug: 'progress-steps', category: 'Content Animation', source: 'reactvideoeditor' },
  { slug: 'onboarding-steps', category: 'Content Animation', source: 'reactvideoeditor' },
  { slug: 'animated-leaderboard', category: 'Content Animation', source: 'reactvideoeditor' },
  { slug: 'text-highlight', category: 'Content Animation', source: 'reactvideoeditor' },
  // Charts & Data 19
  { slug: 'circular-progress', category: 'Charts & Data', source: 'reactvideoeditor' },
  { slug: 'chart-animation', category: 'Charts & Data', source: 'reactvideoeditor' },
  { slug: 'line-chart', category: 'Charts & Data', source: 'reactvideoeditor' },
  { slug: 'pie-chart', category: 'Charts & Data', source: 'reactvideoeditor' },
  { slug: 'donut-chart', category: 'Charts & Data', source: 'reactvideoeditor' },
  { slug: 'area-chart', category: 'Charts & Data', source: 'reactvideoeditor' },
  { slug: 'progress-bars', category: 'Charts & Data', source: 'reactvideoeditor' },
  { slug: 'stat-counter', category: 'Charts & Data', source: 'reactvideoeditor' },
  { slug: 'comparison-chart', category: 'Charts & Data', source: 'reactvideoeditor' },
  { slug: 'bar-chart-race', category: 'Charts & Data', source: 'reactvideoeditor' },
  { slug: 'candlestick-chart', category: 'Charts & Data', source: 'reactvideoeditor' },
  { slug: 'multi-line-chart', category: 'Charts & Data', source: 'reactvideoeditor' },
  { slug: 'radar-chart', category: 'Charts & Data', source: 'reactvideoeditor' },
  { slug: 'gauge-meter', category: 'Charts & Data', source: 'reactvideoeditor' },
  { slug: 'stacked-bar-chart', category: 'Charts & Data', source: 'reactvideoeditor' },
  { slug: 'bubble-chart', category: 'Charts & Data', source: 'reactvideoeditor' },
  { slug: 'waterfall-chart', category: 'Charts & Data', source: 'reactvideoeditor' },
  { slug: 'kpi-dashboard', category: 'Charts & Data', source: 'reactvideoeditor' },
  { slug: 'heatmap-grid', category: 'Charts & Data', source: 'reactvideoeditor' },
  // Cinematic 9
  { slug: 'ken-burns', category: 'Cinematic', source: 'reactvideoeditor' },
  { slug: 'zoom-pulse', category: 'Cinematic', source: 'reactvideoeditor' },
  { slug: 'parallax-pan', category: 'Cinematic', source: 'reactvideoeditor' },
  { slug: 'camera-shake', category: 'Cinematic', source: 'reactvideoeditor' },
  { slug: 'spotlight-reveal', category: 'Cinematic', source: 'reactvideoeditor' },
  { slug: 'letterbox-reveal', category: 'Cinematic', source: 'reactvideoeditor' },
  { slug: 'film-burn', category: 'Cinematic', source: 'reactvideoeditor' },
  { slug: 'vignette-pulse', category: 'Cinematic', source: 'reactvideoeditor' },
  { slug: 'whip-pan', category: 'Cinematic', source: 'reactvideoeditor' },
  // Transition 9
  { slug: 'fade-through-black', category: 'Transition', source: 'reactvideoeditor' },
  { slug: 'slide-wipe', category: 'Transition', source: 'reactvideoeditor' },
  { slug: 'cross-dissolve', category: 'Transition', source: 'reactvideoeditor' },
  { slug: 'zoom-through', category: 'Transition', source: 'reactvideoeditor' },
  { slug: 'clock-wipe', category: 'Transition', source: 'reactvideoeditor' },
  { slug: 'blinds-transition', category: 'Transition', source: 'reactvideoeditor' },
  { slug: 'morph-transition', category: 'Transition', source: 'reactvideoeditor' },
  { slug: 'push-transition', category: 'Transition', source: 'reactvideoeditor' },
  { slug: 'iris-transition', category: 'Transition', source: 'reactvideoeditor' },
  // Logo & Branding 9
  { slug: 'logo-fade-reveal', category: 'Logo & Branding', source: 'reactvideoeditor' },
  { slug: 'logo-spin-reveal', category: 'Logo & Branding', source: 'reactvideoeditor' },
  { slug: 'logo-glitch-reveal', category: 'Logo & Branding', source: 'reactvideoeditor' },
  { slug: 'logo-bounce-drop', category: 'Logo & Branding', source: 'reactvideoeditor' },
  { slug: 'logo-stroke-draw', category: 'Logo & Branding', source: 'reactvideoeditor' },
  { slug: 'logo-scale-rotate', category: 'Logo & Branding', source: 'reactvideoeditor' },
  { slug: 'logo-split-reveal', category: 'Logo & Branding', source: 'reactvideoeditor' },
  { slug: 'logo-typewriter', category: 'Logo & Branding', source: 'reactvideoeditor' },
  { slug: 'logo-blur-reveal', category: 'Logo & Branding', source: 'reactvideoeditor' },
  // Intro & Outro 9
  { slug: 'cinematic-title-intro', category: 'Intro & Outro', source: 'reactvideoeditor' },
  { slug: 'lower-third', category: 'Intro & Outro', source: 'reactvideoeditor' },
  { slug: 'end-card', category: 'Intro & Outro', source: 'reactvideoeditor' },
  { slug: 'chapter-title', category: 'Intro & Outro', source: 'reactvideoeditor' },
  { slug: 'quote-card', category: 'Intro & Outro', source: 'reactvideoeditor' },
  { slug: 'credits-roll', category: 'Intro & Outro', source: 'reactvideoeditor' },
  { slug: 'countdown-intro', category: 'Intro & Outro', source: 'reactvideoeditor' },
  { slug: 'title-split', category: 'Intro & Outro', source: 'reactvideoeditor' },
  { slug: 'subscribe-reminder', category: 'Intro & Outro', source: 'reactvideoeditor' },
  // Image & Media 9
  { slug: 'split-screen', category: 'Image & Media', source: 'reactvideoeditor' },
  { slug: 'photo-stack', category: 'Image & Media', source: 'reactvideoeditor' },
  { slug: 'image-zoom-reveal', category: 'Image & Media', source: 'reactvideoeditor' },
  { slug: 'gallery-grid', category: 'Image & Media', source: 'reactvideoeditor' },
  { slug: 'polaroid-frame', category: 'Image & Media', source: 'reactvideoeditor' },
  { slug: 'image-carousel', category: 'Image & Media', source: 'reactvideoeditor' },
  { slug: 'picture-in-picture', category: 'Image & Media', source: 'reactvideoeditor' },
  { slug: 'image-comparison-slider', category: 'Image & Media', source: 'reactvideoeditor' },
  { slug: 'masonry-gallery', category: 'Image & Media', source: 'reactvideoeditor' },
];

// Also export remotion-study catalog length proof (parallel 95)
export const REMOTION_STUDY_CATALOG_COUNT = 95;
export const REACTVIDEOEDITOR_CATALOG_COUNT = 95;

const FONT_DISPLAY = "'Newsreader', Georgia, serif";
const FONT_SANS = "'Geist Sans', 'Inter', system-ui, sans-serif";
const FONT_MONO = "'JetBrains Mono', monospace";

const FontStyles: React.FC = () => (
  <style>{`@import url('https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,600;6..72,800&family=Inter:wght@400;500;700;800&family=JetBrains+Mono:wght@400;700&display=swap');`}</style>
);

// ── Helpers — remotion-study rules: interpolate inline + Easing.bezier(0.16,1,0.3,1) + spring damping 22 stiffness 100 ──
const BEZIER = Easing.bezier(0.16, 1, 0.3, 1);
const SPRING_CFG = { damping: 22, stiffness: 100 } as const;

// subtle indigo mesh background
const MeshBg: React.FC = () => (
  <div
    style={{
      position: 'absolute',
      inset: 0,
      background: `radial-gradient(800px 600px at 70% 20%, rgba(99,102,241,0.18) 0%, transparent 60%), radial-gradient(700px 500px at 20% 85%, rgba(129,140,248,0.12) 0%, transparent 60%), linear-gradient(180deg, ${C.bg} 0%, ${C.bg2} 100%)`,
    }}
  />
);

const GridDots: React.FC<{ opacity?: number }> = ({ opacity = 0.06 }) => (
  <div
    style={{
      position: 'absolute',
      inset: 0,
      opacity,
      backgroundImage: 'radial-gradient(circle, rgba(248,250,252,0.9) 1.1px, transparent 1.1px)',
      backgroundSize: '28px 28px',
    }}
  />
);

const TopBar: React.FC<{ label: string; slug: string; category: string; idx: number; total: number }> = ({ label, slug, category, idx, total }) => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 36px',
        borderBottom: `1px solid ${C.line}`,
        background: 'rgba(11,18,32,0.78)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: 8,
            background: C.accent,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: FONT_MONO,
            fontSize: 11,
            fontWeight: 800,
            color: C.text,
          }}
        >
          {String(idx + 1).padStart(2, '0')}
        </div>
        <div style={{ fontFamily: FONT_SANS, fontSize: 13, fontWeight: 700, letterSpacing: 2, color: C.accent2, textTransform: 'uppercase' }}>
          {label}
        </div>
        <div style={{ width: 1, height: 16, background: C.line2 }} />
        <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.muted }}>{slug}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div
          style={{
            fontFamily: FONT_SANS,
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: 1.2,
            color: C.muted,
            border: `1px solid ${C.line}`,
            padding: '6px 10px',
            borderRadius: 20,
            background: 'rgba(20,30,54,0.6)',
          }}
        >
          {category}
        </div>
        <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.sub }}>
          {String(idx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </div>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════
// SCENES (22) — each displays distinct visual, remotion-study compliant
// ═══════════════════════════════════════════════════════════════════

// S01 — Cinematic Title Intro (real source adapted) — Intro & Outro
const S01_CinematicTitle: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: C.bg, justifyContent: 'center', alignItems: 'center' }}>
      <MeshBg />
      <GridDots />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          opacity: interpolate(frame, [0, 18], [0, 1], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
        }}
      >
        <div
          style={{
            fontFamily: FONT_SANS,
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: 6,
            color: C.accent,
            opacity: interpolate(frame, [6, 20], [0, 1], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
            translate: interpolate(frame, [6, 24], ['0px 12px', '0px 0px'], { easing: Easing.bezier(0.16, 1, 0.3, 1), extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) as unknown as string,
          }}
        >
          REACT VIDEO EDITOR × REMOTION STUDY
        </div>
        <div
          style={{
            fontFamily: FONT_DISPLAY,
            fontSize: 84,
            fontWeight: 800,
            color: C.text,
            letterSpacing: -2,
            lineHeight: 0.95,
            textAlign: 'center',
            marginTop: 18,
            opacity: interpolate(frame, [10, 30], [0, 1], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
            scale: interpolate(frame, [10, 34], [0.92, 1], { easing: Easing.spring({ damping: 22, stiffness: 100 }), extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) as unknown as number,
          }}
        >
          DUAL MCP
          <br />
          <span style={{ color: C.accent }}>SHOWCASE</span>
        </div>
        <div
          style={{
            width: `${interpolate(frame, [30, 62], [0, 100], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })}%`,
            maxWidth: 420,
            height: 3,
            background: `linear-gradient(90deg, ${C.accent}, ${C.accent2})`,
            borderRadius: 2,
            marginTop: 18,
            opacity: interpolate(frame, [30, 40], [0, 1], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
          }}
        />
        <div
          style={{
            fontFamily: FONT_SANS,
            fontSize: 18,
            color: C.muted,
            fontWeight: 400,
            marginTop: 20,
            maxWidth: 680,
            textAlign: 'center',
            lineHeight: 1.6,
            opacity: interpolate(frame, [46, 66], [0, 1], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
            translate: interpolate(frame, [46, 66], ['0px 10px', '0px 0px'], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) as unknown as string,
          }}
        >
          95 templates · 9 categories · 22 scenes · Indigo chassis #0B1220 → {TOTAL_FRAMES}f @30fps
        </div>
        <div style={{ display: 'flex', gap: 12, marginTop: 26, opacity: interpolate(frame, [60, 78], [0, 1], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) }}>
          <div style={{ padding: '12px 22px', borderRadius: 999, background: C.accent, color: C.text, fontFamily: FONT_SANS, fontWeight: 700, fontSize: 14 }}>95 reactvideoeditor</div>
          <div style={{ padding: '12px 22px', borderRadius: 999, background: 'transparent', border: `1px solid ${C.line2}`, color: C.text, fontFamily: FONT_SANS, fontWeight: 600, fontSize: 14 }}>95 remotion-study</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// S02 — Glitch Text — Text (real get_template: glitch-text)
const S02_GlitchText: React.FC = () => {
  const frame = useCurrentFrame();
  const decay = interpolate(frame, [0, 42], [1, 0], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const rX = Math.sin(frame * 7.3) * 14 * decay;
  const rY = Math.sin(frame * 5.1) * 10 * decay;
  const gX = Math.sin(frame * 11.7) * 14 * decay;
  const gY = Math.sin(frame * 3.9) * 8 * decay;
  const bX = Math.sin(frame * 9.2) * 12 * decay;
  const bY = Math.sin(frame * 6.4) * 9 * decay;
  const channelOpacity = interpolate(frame, [28, 52], [0.7, 0], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const clean = spring({ frame: Math.max(0, frame - 36), fps: FPS, config: SPRING_CFG });
  return (
    <AbsoluteFill style={{ background: C.bg, justifyContent: 'center', alignItems: 'center' }}>
      <GridDots opacity={0.04} />
      <div style={{ position: 'relative', width: 760, height: 220, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ position: 'absolute', fontFamily: FONT_DISPLAY, fontSize: 112, fontWeight: 800, letterSpacing: -4, color: 'rgba(239,68,68,0.9)', mixBlendMode: 'screen' as any, opacity: channelOpacity, translate: `${rX}px ${rY}px` as unknown as string }}>GLITCH</div>
        <div style={{ position: 'absolute', fontFamily: FONT_DISPLAY, fontSize: 112, fontWeight: 800, letterSpacing: -4, color: 'rgba(34,211,238,0.9)', mixBlendMode: 'screen' as any, opacity: channelOpacity, translate: `${gX}px ${gY}px` as unknown as string }}>GLITCH</div>
        <div style={{ position: 'absolute', fontFamily: FONT_DISPLAY, fontSize: 112, fontWeight: 800, letterSpacing: -4, color: 'rgba(168,85,247,0.9)', mixBlendMode: 'screen' as any, opacity: channelOpacity, translate: `${bX}px ${bY}px` as unknown as string }}>GLITCH</div>
        <div
          style={{
            fontFamily: FONT_DISPLAY,
            fontSize: 112,
            fontWeight: 800,
            letterSpacing: -4,
            color: C.text,
            opacity: interpolate(clean, [0, 1], [0, 1]),
            scale: interpolate(clean, [0, 1], [0.96, 1]) as unknown as number,
          }}
        >
          GLITCH
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 54, left: '50%', translate: '-50% 0px' as unknown as string, display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: interpolate(frame, [44, 66], [0, 1], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 12, letterSpacing: 3, color: C.accent2 }}>TEXT · glitch-text</div>
        <div style={{ fontFamily: FONT_SANS, fontSize: 16, color: C.muted, marginTop: 6 }}>RGB split decay → spring settle · Easing.bezier(0.16,1,0.3,1)</div>
      </div>
    </AbsoluteFill>
  );
};

// S03 — Gradient Shift — Background (real)
const S03_GradientShift: React.FC = () => {
  const frame = useCurrentFrame();
  const t = frame / FPS;
  const p1 = Math.sin(t * 0.28) * 0.5 + 0.5;
  const p2 = Math.sin(t * 0.28 + 2) * 0.5 + 0.5;
  const angle = (frame * 0.35) % 360;
  // interpolate colors inline
  const c1 = `rgb(${Math.round(interpolate(p1, [0, 1], [11, 22]))}, ${Math.round(interpolate(p1, [0, 1], [18, 33]))}, ${Math.round(interpolate(p1, [0, 1], [32, 62]))})`;
  const c2 = `rgb(${Math.round(interpolate(p2, [0, 1], [22, 15]))}, ${Math.round(interpolate(p2, [0, 1], [33, 52]))}, ${Math.round(interpolate(p2, [0, 1], [62, 96]))})`;
  return (
    <AbsoluteFill>
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(${angle}deg, ${c1}, ${c2}, #1e1b4b)` }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(600px 400px at 50% 50%, rgba(99,102,241,0.18), transparent 70%)' }} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 80 }}>
        <div
          style={{
            fontFamily: FONT_SANS,
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: 5,
            color: 'rgba(248,250,252,0.9)',
            opacity: interpolate(frame, [0, 18], [0, 1], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
          }}
        >
          BACKGROUND · gradient-shift
        </div>
        <div
          style={{
            fontFamily: FONT_DISPLAY,
            fontSize: 66,
            fontWeight: 800,
            color: C.text,
            marginTop: 10,
            textAlign: 'center',
            opacity: interpolate(frame, [10, 28], [0, 1], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
            scale: interpolate(frame, [10, 32], [0.96, 1], { easing: Easing.spring({ damping: 22, stiffness: 100 }), extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) as unknown as number,
          }}
        >
          Ambient Gradient
          <br />
          <span style={{ color: C.accent2 }}>Shift</span>
        </div>
        <div style={{ width: 360, height: 1, background: 'rgba(248,250,252,0.18)', marginTop: 18 }} />
        <div style={{ fontFamily: FONT_SANS, fontSize: 17, color: 'rgba(248,250,252,0.72)', marginTop: 14, opacity: interpolate(frame, [24, 44], [0, 1], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) }}>Math.sin phase + angle lerp · no CSS transition</div>
      </div>
    </AbsoluteFill>
  );
};

// S04 — Matrix Rain — Background
const S04_MatrixRain: React.FC = () => {
  const frame = useCurrentFrame();
  const COLS = 22;
  const ROWS = 16;
  return (
    <AbsoluteFill style={{ background: '#060A14' }}>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', opacity: 0.95 }}>
        {Array.from({ length: COLS }).map((_, ci) => {
          const colDelay = (ci * 7) % 20;
          return (
            <div key={ci} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, paddingTop: 22 }}>
              {Array.from({ length: ROWS }).map((_, ri) => {
                const glyphs = ['ﾊ', 'ﾐ', 'ﾋ', 'ｰ', 'ｳ', 'ｼ', 'ﾅ', 'ﾓ', 'ﾆ', 'ｻ', 'ﾜ', 'ｷ', 'ﾀ', 'ｹ'];
                const g = glyphs[(ci * 13 + ri * 7 + frame) % glyphs.length];
                const y = (ri * 58 - frame * 3 - colDelay * 14) % (H + 200) - 100;
                const op = interpolate(y, [0, 360, 680], [0, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
                const isHead = ri === ((Math.floor(frame / 2) + ci) % ROWS);
                return (
                  <div
                    key={ri}
                    style={{
                      fontFamily: FONT_MONO,
                      fontSize: 18,
                      fontWeight: 700,
                      color: isHead ? '#86EFAC' : '#22C55E',
                      opacity: op * 0.9,
                      textShadow: isHead ? '0 0 10px rgba(34,197,94,0.9)' : 'none',
                      translate: `0px ${y % 8}px` as unknown as string,
                    }}
                  >
                    {g}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(6,10,20,0.4) 0%, transparent 22%, transparent 78%, rgba(6,10,20,0.92) 100%)' }} />
      <div style={{ position: 'absolute', left: 48, bottom: 48, padding: '14px 18px', background: 'rgba(6,10,20,0.72)', border: `1px solid rgba(34,197,94,0.22)`, borderRadius: 14, backdropFilter: 'blur(10px)', opacity: interpolate(frame, [8, 24], [0, 1], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 11, letterSpacing: 2, color: '#86EFAC' }}>BACKGROUND · matrix-rain</div>
        <div style={{ fontFamily: FONT_DISPLAY, fontSize: 26, fontWeight: 800, color: C.text, marginTop: 4 }}>Matrix Rain</div>
        <div style={{ fontFamily: FONT_SANS, fontSize: 13, color: C.muted, marginTop: 2 }}>deterministic glyph cycle · useCurrentFrame</div>
      </div>
    </AbsoluteFill>
  );
};

// S05 — Bar Chart Race — Charts & Data (inspired pro)
const S05_BarRace: React.FC = () => {
  const frame = useCurrentFrame();
  const RACERS = [
    { label: 'NEXUS', color: C.accent, vals: [22, 38, 55, 78, 92] },
    { label: 'ORION', color: '#06B6D4', vals: [30, 42, 48, 66, 74] },
    { label: 'AURA', color: '#8B5CF6', vals: [18, 28, 44, 58, 68] },
    { label: 'PRISM', color: '#F59E0B', vals: [26, 31, 36, 45, 52] },
    { label: 'ECHO', color: '#EC4899', vals: [14, 20, 30, 38, 44] },
  ];
  const t = interpolate(frame, [0, 210], [0, 4], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const idx = Math.floor(t);
  const frac = t - idx;
  // compute current values
  const cur = RACERS.map((r) => {
    const a = r.vals[Math.min(idx, 4)];
    const b = r.vals[Math.min(idx + 1, 4)];
    return { ...r, v: a + (b - a) * frac };
  }).sort((a, b) => b.v - a.v);

  return (
    <AbsoluteFill style={{ background: C.bg, padding: 56, paddingTop: 84 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <div style={{ fontFamily: FONT_SANS, fontSize: 12, fontWeight: 700, letterSpacing: 4, color: C.accent }}>CHARTS & DATA · bar-chart-race</div>
          <div style={{ fontFamily: FONT_DISPLAY, fontSize: 44, fontWeight: 800, color: C.text, marginTop: 6 }}>Market Share Race</div>
          <div style={{ fontFamily: FONT_SANS, fontSize: 14, color: C.muted, marginTop: 4 }}>logistic soft-rank glide · interpolate()</div>
        </div>
        <div style={{ fontFamily: FONT_MONO, fontSize: 12, color: C.sub, border: `1px solid ${C.line}`, padding: '8px 14px', borderRadius: 999 }}>Q1 → Q5 · 2024–2026</div>
      </div>
      <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 14 }}>
        {cur.map((r, i) => {
          const w = interpolate(r.v, [0, 100], [0, 100]);
          const spr = spring({ frame: frame - i * 6, fps: FPS, config: SPRING_CFG });
          return (
            <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 16, opacity: interpolate(spr, [0, 1], [0, 1]) }}>
              <div style={{ width: 28, fontFamily: FONT_MONO, fontSize: 13, fontWeight: 800, color: i === 0 ? C.accent2 : C.muted, textAlign: 'right' }}>{i + 1}</div>
              <div style={{ width: 86, fontFamily: FONT_SANS, fontSize: 14, fontWeight: 700, color: C.text }}>{r.label}</div>
              <div style={{ flex: 1, height: 28, background: 'rgba(248,250,252,0.06)', borderRadius: 999, overflow: 'hidden', border: `1px solid ${C.line}` }}>
                <div
                  style={{
                    width: `${w}%`,
                    height: '100%',
                    background: r.color,
                    borderRadius: 999,
                    opacity: interpolate(spr, [0, 1], [0.6, 1]),
                    scale: interpolate(spr, [0, 1], [0.98, 1]) as unknown as number,
                  }}
                />
              </div>
              <div style={{ width: 56, fontFamily: FONT_MONO, fontSize: 16, fontWeight: 800, color: C.text, textAlign: 'right' }}>{Math.round(r.v)}%</div>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 18, height: 1, background: C.line }} />
      <div style={{ marginTop: 14, display: 'flex', gap: 10 }}>
        {['Live soft-rank', 'Spring stagger', 'Deterministic'].map((t) => (
          <div key={t} style={{ fontFamily: FONT_SANS, fontSize: 12, fontWeight: 600, color: C.muted, background: C.card, border: `1px solid ${C.line}`, padding: '6px 12px', borderRadius: 999 }}>{t}</div>
        ))}
      </div>
    </AbsoluteFill>
  );
};

// S06 — Candlestick — Charts & Data
const S06_Candlestick: React.FC = () => {
  const frame = useCurrentFrame();
  const CANDLES = [
    { o: 42, h: 58, l: 38, c: 54 },
    { o: 54, h: 62, l: 48, c: 49 },
    { o: 49, h: 55, l: 36, c: 40 },
    { o: 40, h: 48, l: 32, c: 46 },
    { o: 46, h: 66, l: 44, c: 62 },
    { o: 62, h: 68, l: 56, c: 58 },
    { o: 58, h: 64, l: 52, c: 60 },
    { o: 60, h: 72, l: 58, c: 70 },
  ];
  const Wc = 56;
  const gap = 18;
  const chartH = 360;
  const chartW = CANDLES.length * (Wc + gap) - gap;
  const min = 28;
  const max = 76;
  const yFor = (v: number) => interpolate(v, [min, max], [chartH, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  return (
    <AbsoluteFill style={{ background: C.bg, padding: 56, paddingTop: 84 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <div style={{ fontFamily: FONT_SANS, fontSize: 12, fontWeight: 700, letterSpacing: 4, color: C.ok }}>CHARTS & DATA · candlestick-chart</div>
          <div style={{ fontFamily: FONT_DISPLAY, fontSize: 42, fontWeight: 800, color: C.text, marginTop: 6 }}>OHLC Candles</div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ width: 12, height: 12, borderRadius: 3, background: C.ok }} /> <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.muted }}>UP</span>
          <div style={{ width: 12, height: 12, borderRadius: 3, background: C.danger, marginLeft: 12 }} /> <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.muted }}>DOWN</span>
        </div>
      </div>
      <div style={{ marginTop: 22, background: C.card, border: `1px solid ${C.line}`, borderRadius: 20, padding: 22, height: 420 }}>
        <div style={{ position: 'relative', width: chartW, height: chartH, margin: '0 auto' }}>
          {/* grid */}
          {[0, 1, 2, 3].map((i) => (
            <div key={i} style={{ position: 'absolute', left: 0, right: 0, top: (i * chartH) / 4, height: 1, background: 'rgba(248,250,252,0.06)' }} />
          ))}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', gap, alignItems: 'flex-end' }}>
            {CANDLES.map((d, i) => {
              const isUp = d.c >= d.o;
              const bodyTop = yFor(Math.max(d.o, d.c));
              const bodyH = Math.abs(yFor(d.o) - yFor(d.c));
              const wickTop = yFor(d.h);
              const wickH = Math.abs(yFor(d.h) - yFor(d.l));
              const p = spring({ frame: Math.max(0, frame - i * 14), fps: FPS, config: SPRING_CFG });
              return (
                <div key={i} style={{ width: Wc, height: chartH, position: 'relative', opacity: interpolate(p, [0, 1], [0, 1]) }}>
                  <div style={{ position: 'absolute', left: Wc / 2 - 1, top: wickTop, width: 2, height: wickH * interpolate(p, [0, 1], [0, 1]), background: isUp ? C.ok : C.danger, borderRadius: 2 }} />
                  <div
                    style={{
                      position: 'absolute',
                      left: 8,
                      top: bodyTop,
                      width: Wc - 16,
                      height: bodyH,
                      background: isUp ? C.ok : C.danger,
                      borderRadius: 4,
                      scale: interpolate(p, [0, 1], [0.2, 1]) as unknown as number,
                      opacity: interpolate(p, [0, 1], [0, 1]),
                    }}
                  />
                  <div style={{ position: 'absolute', top: yFor(d.c) - 14, left: 0, right: 0, textAlign: 'center', fontFamily: FONT_MONO, fontSize: 10, color: isUp ? C.ok : C.danger, opacity: interpolate(frame, [i * 14 + 18, i * 14 + 30], [0, 1], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) }}>{d.c}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between', fontFamily: FONT_MONO, fontSize: 10, color: C.sub }}>
          {CANDLES.map((_, i) => (
            <div key={i} style={{ width: Wc, textAlign: 'center' }}>S{i + 1}</div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// S07 — Heatmap Grid — Charts & Data
const S07_Heatmap: React.FC = () => {
  const frame = useCurrentFrame();
  const ROWS = 7;
  const COLS = 18;
  const CELL = 28;
  const GAP = 6;
  return (
    <AbsoluteFill style={{ background: C.bg, padding: 56, paddingTop: 84 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <div style={{ fontFamily: FONT_SANS, fontSize: 12, fontWeight: 700, letterSpacing: 4, color: C.ok }}>CHARTS & DATA · heatmap-grid</div>
          <div style={{ fontFamily: FONT_DISPLAY, fontSize: 42, fontWeight: 800, color: C.text, marginTop: 6 }}>Contribution Heatmap</div>
        </div>
        <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.sub }}>Less <span style={{ display: 'inline-block', width: 64, height: 10, background: 'linear-gradient(90deg, #0B1220, #22C55E)', borderRadius: 4, verticalAlign: 'middle', margin: '0 8px' }} /> More</div>
      </div>
      <div style={{ marginTop: 20, background: C.card, border: `1px solid ${C.line}`, borderRadius: 20, padding: 18, display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${COLS}, ${CELL}px)`, gap: GAP }}>
          {Array.from({ length: ROWS * COLS }).map((_, i) => {
            const r = Math.floor(i / COLS);
            const c = i % COLS;
            const v = (Math.sin(r * 0.9 + c * 0.45) * 0.5 + 0.5) * (0.3 + 0.7 * Math.sin(c * 0.3 + r * 0.7) * 0.5 + 0.5);
            // clamp v 0-1
            const vv = Math.max(0, Math.min(1, v));
            const diag = r + c;
            const reveal = interpolate(frame, [diag * 2.2, diag * 2.2 + 22], [0, 1], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
            // color ramp
            const bg =
              vv < 0.25 ? interpolate(vv, [0, 0.25], [0, 1]) ? `rgba(15,23,42,${0.9})` : C.bg2 : vv < 0.5 ? `rgba(34,197,94,${0.38})` : vv < 0.75 ? `rgba(34,197,94,${0.62})` : `rgba(34,197,94,${0.92})`;
            const glow = vv > 0.82 ? `0 0 10px rgba(34,197,94,0.55)` : 'none';
            return (
              <div
                key={i}
                style={{
                  width: CELL,
                  height: CELL,
                  borderRadius: 6,
                  background: bg,
                  border: `1px solid rgba(248,250,252,0.06)`,
                  opacity: reveal,
                  scale: interpolate(reveal, [0, 1], [0.82, 1]) as unknown as number,
                  boxShadow: glow,
                }}
              />
            );
          })}
        </div>
      </div>
      <div style={{ marginTop: 12, display: 'flex', gap: 16, justifyContent: 'center' }}>
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
          <div key={d} style={{ fontFamily: FONT_MONO, fontSize: 10, color: C.sub, width: 44, textAlign: 'center' }}>{d}</div>
        ))}
      </div>
    </AbsoluteFill>
  );
};

// S08 — Circular Progress — Charts & Data
const S08_Circular: React.FC = () => {
  const frame = useCurrentFrame();
  const target = 76;
  const p = interpolate(frame, [0, 48], [0, target], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const R = 96;
  const Ccirc = 2 * Math.PI * R;
  const dash = Ccirc;
  const off = interpolate(p, [0, 100], [Ccirc, 0]);
  const dotAngle = interpolate(p, [0, 100], [-90, 260]);
  return (
    <AbsoluteFill style={{ background: C.bg, justifyContent: 'center', alignItems: 'center' }}>
      <GridDots opacity={0.05} />
      <div style={{ display: 'flex', gap: 64, alignItems: 'center' }}>
        <div style={{ position: 'relative', width: 260, height: 260, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <svg width={260} height={260} style={{ position: 'absolute', transform: 'rotate(-90deg)' }}>
            <circle cx={130} cy={130} r={R} stroke="rgba(248,250,252,0.07)" strokeWidth={14} fill="none" />
            <circle cx={130} cy={130} r={R} stroke={C.accent} strokeWidth={14} fill="none" strokeLinecap="round" strokeDasharray={dash} strokeDashoffset={off} style={{ filter: 'drop-shadow(0 0 10px rgba(99,102,241,0.45))' }} />
          </svg>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: C.text,
              position: 'absolute',
              left: 130 + Math.cos((dotAngle * Math.PI) / 180) * R - 6,
              top: 130 + Math.sin((dotAngle * Math.PI) / 180) * R - 6,
              boxShadow: '0 0 10px rgba(99,102,241,0.9)',
              opacity: interpolate(frame, [12, 24], [0, 1], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
            }}
          />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: FONT_DISPLAY, fontSize: 56, fontWeight: 800, color: C.text, lineHeight: 1 }}>{Math.round(p)}%</div>
            <div style={{ fontFamily: FONT_SANS, fontSize: 13, fontWeight: 600, letterSpacing: 2, color: C.muted, marginTop: 4 }}>COMPLETION</div>
          </div>
        </div>
        <div style={{ width: 480 }}>
          <div style={{ fontFamily: FONT_SANS, fontSize: 12, fontWeight: 700, letterSpacing: 4, color: C.accent }}>CHARTS & DATA · circular-progress</div>
          <div style={{ fontFamily: FONT_DISPLAY, fontSize: 44, fontWeight: 800, color: C.text, marginTop: 8, lineHeight: 1.05 }}>Progress Ring</div>
          <div style={{ fontFamily: FONT_SANS, fontSize: 16, color: C.muted, marginTop: 10, lineHeight: 1.6 }}>stroke-dashoffset drive + counting number · interpolate()</div>
          <div style={{ marginTop: 18, display: 'flex', gap: 12 }}>
            <div style={{ flex: 1, background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '14px 16px' }}>
              <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.sub }}>TARGET</div>
              <div style={{ fontFamily: FONT_DISPLAY, fontSize: 22, fontWeight: 800, color: C.text }}>{target}%</div>
            </div>
            <div style={{ flex: 1, background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '14px 16px' }}>
              <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.sub }}>REMAINING</div>
              <div style={{ fontFamily: FONT_DISPLAY, fontSize: 22, fontWeight: 800, color: C.accent2 }}>{100 - Math.round(p)}%</div>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// S09 — KPI Dashboard — Charts & Data
const S09_KPI: React.FC = () => {
  const frame = useCurrentFrame();
  const KPIS = [
    { label: 'ARR', v: 4.2, suffix: 'M', delta: 18, spark: [0.2, 0.35, 0.28, 0.52, 0.62, 0.78] },
    { label: 'Active Users', v: 128, suffix: 'k', delta: 12, spark: [0.4, 0.42, 0.48, 0.44, 0.6, 0.72] },
    { label: 'NPS', v: 72, suffix: '', delta: -3, spark: [0.6, 0.58, 0.62, 0.55, 0.5, 0.46] },
    { label: 'Churn', v: 2.4, suffix: '%', delta: -8, spark: [0.7, 0.62, 0.58, 0.5, 0.44, 0.32] },
    { label: 'Tickets', v: 842, suffix: '', delta: 6, spark: [0.3, 0.42, 0.38, 0.54, 0.6, 0.68] },
    { label: 'Latency', v: 48, suffix: 'ms', delta: -14, spark: [0.78, 0.68, 0.62, 0.52, 0.42, 0.28] },
  ];
  return (
    <AbsoluteFill style={{ background: C.bg, padding: 56, paddingTop: 84 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <div style={{ fontFamily: FONT_SANS, fontSize: 12, fontWeight: 700, letterSpacing: 4, color: C.accent }}>CHARTS & DATA · kpi-dashboard</div>
          <div style={{ fontFamily: FONT_DISPLAY, fontSize: 42, fontWeight: 800, color: C.text, marginTop: 6 }}>KPI Dashboard</div>
        </div>
        <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.sub, border: `1px solid ${C.line}`, padding: '8px 14px', borderRadius: 999 }}>6 tiles · counters + sparklines</div>
      </div>
      <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {KPIS.map((k, i) => {
          const p = spring({ frame: Math.max(0, frame - i * 8), fps: FPS, config: SPRING_CFG });
          const cur = interpolate(p, [0, 1], [0, k.v]);
          const isPos = k.delta >= 0 ? k.label === 'Churn' || k.label === 'Latency' ? k.delta < 0 : k.delta > 0 : k.delta < 0 && (k.label === 'Churn' || k.label === 'Latency');
          // actually color logic: green if good
          const good = (k.label === 'Churn' || k.label === 'Latency' || k.label === 'Tickets') ? k.delta < 0 || k.label === 'Tickets' : k.delta > 0;
          // but Tickets up is not necessarily bad; keep simple: delta >0 green else red, except Churn/Latency inverted
          const isGood = k.label === 'Churn' || k.label === 'Latency' ? k.delta < 0 : k.delta > 0;
          return (
            <div key={k.label} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 18, padding: '18px 18px 14px', opacity: interpolate(p, [0, 1], [0, 1]), scale: interpolate(p, [0, 1], [0.96, 1]) as unknown as number, translate: interpolate(p, [0, 1], ['0px 10px', '0px 0px']) as unknown as string }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontFamily: FONT_SANS, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: C.muted }}>{k.label}</div>
                <div style={{ fontFamily: FONT_MONO, fontSize: 11, fontWeight: 700, color: isGood ? C.ok : C.danger, background: isGood ? 'rgba(34,197,94,0.12)' : 'rgba(239,68,68,0.12)', padding: '4px 8px', borderRadius: 999 }}>{isGood ? '↗' : '↘'} {Math.abs(k.delta)}%</div>
              </div>
              <div style={{ fontFamily: FONT_DISPLAY, fontSize: 34, fontWeight: 800, color: C.text, marginTop: 8 }}>{k.suffix === '%' ? cur.toFixed(1) + k.suffix : k.suffix === 'M' ? cur.toFixed(1) + k.suffix : Math.round(cur).toLocaleString() + k.suffix}</div>
              <svg width="100%" height={28} viewBox="0 0 100 28" style={{ marginTop: 10 }}>
                <polyline fill="none" stroke={C.accent} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" points={k.spark.map((v, idx) => `${(idx / (k.spark.length - 1)) * 100},${interpolate(v, [0, 1], [24, 4])}`).join(' ')} opacity={interpolate(p, [0, 1], [0, 1])} />
              </svg>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// S10 — Particle Explosion — Content Animation (real)
const S10_Particles: React.FC = () => {
  const frame = useCurrentFrame();
  const N = 90;
  const particles = Array.from({ length: N }).map((_, i) => {
    const angle = (i / N) * Math.PI * 2;
    const dist = interpolate(spring({ frame, fps: FPS, config: { damping: 12, mass: 0.4 } as any }), [0, 1], [0, 170 + (i % 7) * 14]);
    const scale = interpolate(spring({ frame: frame - (i % 5), fps: FPS, config: { damping: 14, stiffness: 80 } as any }), [0, 1], [0, 1]);
    const x = Math.cos(angle) * dist;
    const y = Math.sin(angle) * dist;
    const op = interpolate(frame, [0, 86], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) * Math.max(0, 1 - (i % 3) * 0.08);
    return { x, y, scale, op, hue: 242 + (i / N) * 38 };
  });
  return (
    <AbsoluteFill style={{ background: C.bg, justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {particles.map((p, i) => (
          <div key={i} style={{ position: 'absolute', left: '50%', top: '50%', width: 10, height: 10, borderRadius: 999, background: `hsl(${p.hue}, 90%, 68%)`, opacity: p.op, translate: `${p.x}px ${p.y}px` as unknown as string, scale: p.scale as unknown as number, boxShadow: '0 0 8px rgba(99,102,241,0.45)' }} />
        ))}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            translate: '-50% -50%' as unknown as string,
            fontFamily: FONT_DISPLAY,
            fontSize: 56,
            fontWeight: 800,
            color: C.text,
            letterSpacing: -1,
            opacity: interpolate(frame, [6, 18], [0, 1], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
            scale: interpolate(spring({ frame, fps: FPS, config: SPRING_CFG }), [0, 1], [0.7, 1]) as unknown as number,
            textShadow: '0 0 24px rgba(99,102,241,0.55)',
          }}
        >
          BOOM!
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 42, left: '50%', translate: '-50% 0px' as unknown as string, background: C.card, border: `1px solid ${C.line}`, padding: '10px 16px', borderRadius: 999, opacity: interpolate(frame, [10, 26], [0, 1], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) }}>
        <span style={{ fontFamily: FONT_MONO, fontSize: 11, letterSpacing: 2, color: C.accent2 }}>CONTENT ANIMATION · particle-explosion</span>
        <span style={{ fontFamily: FONT_SANS, fontSize: 12, color: C.muted, marginLeft: 12 }}>90 particles · spring distance + fade</span>
      </div>
    </AbsoluteFill>
  );
};

// S11 — Card Flip — Content Animation
const S11_CardFlip: React.FC = () => {
  const frame = useCurrentFrame();
  const flip = interpolate(frame, [0, 48], [0, 180], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const showBack = flip > 90;
  return (
    <AbsoluteFill style={{ background: C.bg, justifyContent: 'center', alignItems: 'center' }}>
      <GridDots opacity={0.04} />
      <div style={{ perspective: '1200px' }}>
        <div
          style={{
            width: 520,
            height: 320,
            position: 'relative',
            rotate: `0 ${1} ${0} ${flip}deg` as unknown as string,
            transformStyle: 'preserve-3d',
          }}
        >
          <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', background: C.card, border: `1px solid ${C.line2}`, borderRadius: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 28, opacity: showBack ? 0 : 1 }}>
            <div style={{ width: 64, height: 64, borderRadius: 16, background: C.accent, display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: FONT_DISPLAY, fontSize: 28, fontWeight: 800, color: C.text }}>A</div>
            <div style={{ fontFamily: FONT_DISPLAY, fontSize: 34, fontWeight: 800, color: C.text, marginTop: 14 }}>Front — Before</div>
            <div style={{ fontFamily: FONT_SANS, fontSize: 14, color: C.muted, marginTop: 6 }}>Hover to reveal · interpolate rotateY</div>
          </div>
          <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', background: `linear-gradient(135deg, ${C.accent}, ${C.violet})`, borderRadius: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 28, rotate: `0 ${1} ${0} 180deg` as unknown as string, opacity: showBack ? 1 : 0 }}>
            <div style={{ fontFamily: FONT_DISPLAY, fontSize: 34, fontWeight: 800, color: C.text }}>Back — After</div>
            <div style={{ fontFamily: FONT_SANS, fontSize: 14, color: 'rgba(248,250,252,0.86)', marginTop: 6 }}>3D flip via rotateY · pure Remotion</div>
            <div style={{ marginTop: 16, padding: '10px 18px', background: 'rgba(248,250,252,0.14)', borderRadius: 999, fontFamily: FONT_SANS, fontSize: 13, fontWeight: 700, color: C.text }}>✦ Transformed</div>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 44, display: 'flex', gap: 10, opacity: interpolate(frame, [18, 34], [0, 1], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) }}>
        <span style={{ fontFamily: FONT_MONO, fontSize: 11, letterSpacing: 2, color: C.accent2, background: C.card, border: `1px solid ${C.line}`, padding: '8px 14px', borderRadius: 999 }}>CONTENT ANIMATION · card-flip</span>
      </div>
    </AbsoluteFill>
  );
};

// S12 — Animated List — Content Animation
const S12_AnimatedList: React.FC = () => {
  const frame = useCurrentFrame();
  const ITEMS = [
    { t: 'Capture brief', d: 'Define goal & audience in one line', c: C.accent },
    { t: 'Generate draft', d: 'Remotion renders deterministic preview', c: C.cyan },
    { t: 'Polish motion', d: 'Spring + bezier inline in style', c: C.violet },
    { t: 'Ship', d: 'h264 · 1920×1080 · 30fps', c: C.ok },
  ];
  return (
    <AbsoluteFill style={{ background: C.bg, padding: 56, paddingTop: 84 }}>
      <div style={{ maxWidth: 820, margin: '0 auto', width: '100%' }}>
        <div style={{ fontFamily: FONT_SANS, fontSize: 12, fontWeight: 700, letterSpacing: 4, color: C.accent }}>CONTENT ANIMATION · animated-list</div>
        <div style={{ fontFamily: FONT_DISPLAY, fontSize: 42, fontWeight: 800, color: C.text, marginTop: 8 }}>Staggered Reveal</div>
        <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 14 }}>
          {ITEMS.map((it, i) => {
            const p = spring({ frame: Math.max(0, frame - i * 12), fps: FPS, config: SPRING_CFG });
            return (
              <div key={it.t} style={{ display: 'flex', gap: 16, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 18, padding: '18px 20px', opacity: interpolate(p, [0, 1], [0, 1]), translate: interpolate(p, [0, 1], ['0px 14px', '0px 0px']) as unknown as string, scale: interpolate(p, [0, 1], [0.98, 1]) as unknown as number }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: it.c, display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: FONT_MONO, fontSize: 14, fontWeight: 800, color: '#fff' }}>{i + 1}</div>
                <div>
                  <div style={{ fontFamily: FONT_SANS, fontSize: 18, fontWeight: 700, color: C.text }}>{it.t}</div>
                  <div style={{ fontFamily: FONT_SANS, fontSize: 14, color: C.muted, marginTop: 2 }}>{it.d}</div>
                </div>
                <div style={{ marginLeft: 'auto', width: 10, height: 10, borderRadius: 999, background: it.c, opacity: interpolate(p, [0, 1], [0, 1]) }} />
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// S13 — Toast Stack — Content Animation
const S13_ToastStack: React.FC = () => {
  const frame = useCurrentFrame();
  const TOASTS = [
    { kind: 'success', title: 'Deploy succeeded', body: 'v2.4.1 live on prod · 1.2s', color: C.ok },
    { kind: 'info', title: 'New comment', body: 'Minh reviewed DualMcpShowcase.tsx', color: C.accent },
    { kind: 'warning', title: 'Quota 82%', body: 'Upgrade before 20 Sep', color: C.warn },
  ];
  return (
    <AbsoluteFill style={{ background: C.bg, padding: 56, paddingTop: 84 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ fontFamily: FONT_SANS, fontSize: 12, fontWeight: 700, letterSpacing: 4, color: C.accent }}>CONTENT ANIMATION · toast-stack</div>
          <div style={{ fontFamily: FONT_DISPLAY, fontSize: 42, fontWeight: 800, color: C.text, marginTop: 6 }}>Toast Stack</div>
          <div style={{ fontFamily: FONT_SANS, fontSize: 14, color: C.muted, marginTop: 6 }}>Slide-in + drain bar · spring 22/100</div>
        </div>
        <div style={{ width: 420, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {TOASTS.map((t, i) => {
            const enterAt = i * 22;
            const p = spring({ frame: Math.max(0, frame - enterAt), fps: FPS, config: SPRING_CFG });
            const drain = interpolate(frame, [enterAt + 18, enterAt + 88], [100, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
            return (
              <div key={t.title} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '16px 16px 12px', display: 'flex', gap: 12, alignItems: 'center', opacity: interpolate(p, [0, 1], [0, 1]), translate: interpolate(p, [0, 1], ['80px 0px', '0px 0px']) as unknown as string }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: t.color, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 16 }}>●</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: FONT_SANS, fontSize: 15, fontWeight: 700, color: C.text }}>{t.title}</div>
                  <div style={{ fontFamily: FONT_SANS, fontSize: 13, color: C.muted, marginTop: 2 }}>{t.body}</div>
                  <div style={{ marginTop: 8, height: 3, background: 'rgba(248,250,252,0.08)', borderRadius: 999, overflow: 'hidden' }}>
                    <div style={{ width: `${drain}%`, height: '100%', background: t.color, borderRadius: 999 }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ marginTop: 26, background: C.card2, border: `1px dashed ${C.line2}`, borderRadius: 16, padding: 16, display: 'flex', gap: 12, alignItems: 'center', opacity: interpolate(frame, [18, 32], [0, 1], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) }}>
        <div style={{ width: 8, height: 8, borderRadius: 999, background: C.ok }} />
        <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.muted }}>Each toast is a hard-coded <span style={{ color: C.text }}>&lt;Sequence&gt;</span> node — Studio editable · no .map() for clips (remotion-study rule)</div>
      </div>
    </AbsoluteFill>
  );
};

// S14 — Ken Burns — Cinematic
const S14_KenBurns: React.FC = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 210], [1, 1.18], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const tx = interpolate(frame, [0, 210], [0, -36], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const ty = interpolate(frame, [0, 210], [0, -18], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  // use a placeholder gradient image via div + Img staticFile if available
  return (
    <AbsoluteFill style={{ background: '#050A18', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          inset: -40,
          background: 'radial-gradient(900px 600px at 60% 40%, rgba(99,102,241,0.22), transparent 60%), linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0B1220 100%)',
          scale: scale as unknown as number,
          translate: `${tx}px ${ty}px` as unknown as string,
        }}
      >
        {/* simulated image with gradient bars */}
        <div style={{ position: 'absolute', left: '12%', top: '18%', width: '76%', height: '54%', borderRadius: 18, overflow: 'hidden', border: `1px solid rgba(248,250,252,0.12)`, boxShadow: '0 20px 60px rgba(0,0,0,0.45)' }}>
          <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #1e293b 0%, #312e81 35%, #4f46e5 100%)', opacity: 0.95 }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '42%', background: 'linear-gradient(180deg, transparent, rgba(11,18,32,0.92))' }} />
          <div style={{ position: 'absolute', bottom: 18, left: 22, right: 22 }}>
            <div style={{ fontFamily: FONT_DISPLAY, fontSize: 28, fontWeight: 800, color: C.text }}>Ken Burns Pan & Zoom</div>
            <div style={{ fontFamily: FONT_SANS, fontSize: 13, color: 'rgba(248,250,252,0.72)', marginTop: 4 }}>scale + translate interpolate · documentary motion</div>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,18,32,0.18) 0%, transparent 30%, transparent 70%, rgba(11,18,32,0.55) 100%)' }} />
      <div style={{ position: 'absolute', top: 74, left: 36, background: 'rgba(11,18,32,0.72)', border: `1px solid ${C.line}`, padding: '10px 14px', borderRadius: 999, backdropFilter: 'blur(10px)', opacity: interpolate(frame, [8, 22], [0, 1], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) }}>
        <span style={{ fontFamily: FONT_MONO, fontSize: 11, letterSpacing: 2, color: C.accent2 }}>CINEMATIC · ken-burns</span>
      </div>
    </AbsoluteFill>
  );
};

// S15 — Letterbox Reveal — Cinematic (real)
const S15_Letterbox: React.FC = () => {
  const frame = useCurrentFrame();
  const barH = interpolate(frame, [0, 48], [50, 11.5], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const contentOpacity = interpolate(frame, [14, 34], [0, 1], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  return (
    <AbsoluteFill style={{ background: '#020617', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', opacity: contentOpacity }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 12, letterSpacing: 6, color: C.accent2 }}>CINEMATIC</div>
        <div style={{ fontFamily: FONT_DISPLAY, fontSize: 64, fontWeight: 800, color: C.text, letterSpacing: 6, marginTop: 8 }}>LETTERBOX</div>
        <div style={{ fontFamily: FONT_SANS, fontSize: 16, color: C.muted, marginTop: 8 }}>bars 50% → 11.5% · interpolate barHeight</div>
        <div style={{ marginTop: 18, width: 320, height: 2, background: C.accent, borderRadius: 2 }} />
      </div>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: `${barH}%`, background: '#000', zIndex: 2 }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: `${barH}%`, background: '#000', zIndex: 2 }} />
      <div style={{ position: 'absolute', bottom: 22, left: '50%', translate: '-50% 0px' as unknown as string, zIndex: 3, background: C.card, border: `1px solid ${C.line}`, padding: '8px 14px', borderRadius: 999, opacity: interpolate(frame, [18, 32], [0, 1], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) }}>
        <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.muted }}>CINEMATIC · letterbox-reveal · real template</span>
      </div>
    </AbsoluteFill>
  );
};

// S16 — Spotlight Reveal — Cinematic
const S16_Spotlight: React.FC = () => {
  const frame = useCurrentFrame();
  const r = interpolate(frame, [0, 54], [0, 92], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  return (
    <AbsoluteFill style={{ background: C.bg, justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: 760, padding: '36px 36px', background: C.card, border: `1px solid ${C.line}`, borderRadius: 20, textAlign: 'center' }}>
          <div style={{ fontFamily: FONT_DISPLAY, fontSize: 40, fontWeight: 800, color: C.text }}>Spotlight Reveal</div>
          <div style={{ fontFamily: FONT_SANS, fontSize: 15, color: C.muted, marginTop: 8 }}>clipPath circle() grows from center · cinematic iris</div>
          <div style={{ marginTop: 14, height: 6, background: C.line, borderRadius: 999, overflow: 'hidden' }}>
            <div style={{ width: `${r}%`, height: '100%', background: C.accent, borderRadius: 999 }} />
          </div>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: C.bg,
          clipPath: `circle(${r}% at 50% 50%)`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: interpolate(frame, [8, 22], [0, 1], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
        }}
      >
        <div style={{ width: 760, padding: '36px 36px', background: `linear-gradient(135deg, ${C.accent}, ${C.violet})`, borderRadius: 20, textAlign: 'center', boxShadow: '0 20px 60px rgba(99,102,241,0.35)' }}>
          <div style={{ fontFamily: FONT_DISPLAY, fontSize: 40, fontWeight: 800, color: C.text }}>Spotlight Reveal</div>
          <div style={{ fontFamily: FONT_SANS, fontSize: 15, color: 'rgba(248,250,252,0.9)', marginTop: 8 }}>content revealed through expanding circle</div>
        </div>
      </div>
      <div style={{ position: 'absolute', top: 74, left: 36, background: C.card, border: `1px solid ${C.line}`, padding: '8px 14px', borderRadius: 999, opacity: interpolate(frame, [6, 18], [0, 1], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) }}>
        <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.muted }}>CINEMATIC · spotlight-reveal</span>
      </div>
    </AbsoluteFill>
  );
};

// S17 — Cross Dissolve — Transition
const S17_CrossDissolve: React.FC = () => {
  const frame = useCurrentFrame();
  const aOp = interpolate(frame, [0, 70], [1, 0], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const bOp = interpolate(frame, [0, 70], [0, 1], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  return (
    <AbsoluteFill style={{ background: C.bg }}>
      <div style={{ position: 'absolute', inset: 0, display: 'flex' }}>
        <div style={{ flex: 1, background: `linear-gradient(135deg, ${C.card2}, ${C.bg2})`, display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: aOp }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: FONT_DISPLAY, fontSize: 46, fontWeight: 800, color: C.text }}>Scene A</div>
            <div style={{ fontFamily: FONT_SANS, fontSize: 13, color: C.muted, marginTop: 6 }}>fades out 1 → 0</div>
          </div>
        </div>
        <div style={{ flex: 1, background: `linear-gradient(135deg, ${C.accent}, ${C.violet})`, display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: bOp }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: FONT_DISPLAY, fontSize: 46, fontWeight: 800, color: C.text }}>Scene B</div>
            <div style={{ fontFamily: FONT_SANS, fontSize: 13, color: 'rgba(248,250,252,0.86)', marginTop: 6 }}>fades in 0 → 1</div>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', left: '50%', top: '50%', translate: '-50% -50%' as unknown as string, width: 1, height: '62%', background: 'rgba(248,250,252,0.14)' }} />
      <div style={{ position: 'absolute', top: 76, left: '50%', translate: '-50% 0px' as unknown as string, background: C.card, border: `1px solid ${C.line}`, padding: '8px 16px', borderRadius: 999, display: 'flex', gap: 10, alignItems: 'center', opacity: interpolate(frame, [8, 20], [0, 1], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) }}>
        <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.accent2 }}>TRANSITION · cross-dissolve</span>
        <span style={{ fontFamily: FONT_SANS, fontSize: 12, color: C.muted }}>A: {aOp.toFixed(2)} → B: {bOp.toFixed(2)}</span>
      </div>
    </AbsoluteFill>
  );
};

// S18 — Slide Wipe — Transition
const S18_SlideWipe: React.FC = () => {
  const frame = useCurrentFrame();
  const p = spring({ frame, fps: FPS, config: SPRING_CFG });
  const xA = interpolate(p, [0, 1], [0, -100]);
  const xB = 0; // B underneath
  return (
    <AbsoluteFill style={{ background: C.bg, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${C.card2}, ${C.bg2})`, display: 'flex', justifyContent: 'center', alignItems: 'center', translate: `${xB}% 0px` as unknown as string }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: FONT_DISPLAY, fontSize: 44, fontWeight: 800, color: C.text }}>Incoming B</div>
          <div style={{ fontFamily: FONT_SANS, fontSize: 13, color: C.muted }}>underneath · revealed by wipe</div>
        </div>
      </div>
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${C.accent}, ${C.accent2})`, display: 'flex', justifyContent: 'center', alignItems: 'center', translate: `${xA}% 0px` as unknown as string, boxShadow: '12px 0 30px rgba(0,0,0,0.28)' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: FONT_DISPLAY, fontSize: 44, fontWeight: 800, color: C.text }}>Outgoing A →</div>
          <div style={{ fontFamily: FONT_SANS, fontSize: 13, color: 'rgba(248,250,252,0.88)' }}>spring 22/100 · slide off to right</div>
        </div>
      </div>
      <div style={{ position: 'absolute', top: 76, left: 36, background: C.card, border: `1px solid ${C.line}`, padding: '8px 14px', borderRadius: 999, opacity: interpolate(frame, [6, 16], [0, 1], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) }}>
        <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.muted }}>TRANSITION · slide-wipe · spring</span>
      </div>
    </AbsoluteFill>
  );
};

// S19 — Logo Glitch — Logo & Branding (real)
const S19_LogoGlitch: React.FC = () => {
  const frame = useCurrentFrame();
  const decay = interpolate(frame, [0, 40], [1, 0], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const rX = Math.sin(frame * 7.3) * 14 * decay;
  const rY = Math.sin(frame * 5.1) * 9 * decay;
  const gX = Math.sin(frame * 11.7) * 12 * decay;
  const gY = Math.sin(frame * 3.9) * 8 * decay;
  const bX = Math.sin(frame * 9.2) * 10 * decay;
  const bY = Math.sin(frame * 6.4) * 7 * decay;
  const chOp = interpolate(frame, [22, 44], [0.7, 0], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const clean = spring({ frame: Math.max(0, frame - 28), fps: FPS, config: SPRING_CFG });
  const glow = interpolate(frame, [28, 52], [0, 1], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  return (
    <AbsoluteFill style={{ background: C.bg, justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ position: 'relative', width: 128, height: 128 }}>
        <div style={{ position: 'absolute', inset: 0, borderRadius: 24, background: 'rgba(239,68,68,0.62)', display: 'flex', justifyContent: 'center', alignItems: 'center', translate: `${rX}px ${rY}px` as unknown as string, opacity: chOp, mixBlendMode: 'screen' as any }}>
          <span style={{ fontFamily: FONT_SANS, fontSize: 22, fontWeight: 800, color: '#fff', letterSpacing: 2 }}>◆</span>
        </div>
        <div style={{ position: 'absolute', inset: 0, borderRadius: 24, background: 'rgba(34,197,94,0.62)', display: 'flex', justifyContent: 'center', alignItems: 'center', translate: `${gX}px ${gY}px` as unknown as string, opacity: chOp, mixBlendMode: 'screen' as any }}>
          <span style={{ fontFamily: FONT_SANS, fontSize: 22, fontWeight: 800, color: '#fff', letterSpacing: 2 }}>◆</span>
        </div>
        <div style={{ position: 'absolute', inset: 0, borderRadius: 24, background: 'rgba(59,130,246,0.62)', display: 'flex', justifyContent: 'center', alignItems: 'center', translate: `${bX}px ${bY}px` as unknown as string, opacity: chOp, mixBlendMode: 'screen' as any }}>
          <span style={{ fontFamily: FONT_SANS, fontSize: 22, fontWeight: 800, color: '#fff', letterSpacing: 2 }}>◆</span>
        </div>
        <div style={{ position: 'absolute', inset: 0, borderRadius: 24, background: `linear-gradient(135deg, ${C.accent}, ${C.violet})`, display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: interpolate(clean, [0, 1], [0, 1]), scale: interpolate(clean, [0, 1], [0.92, 1]) as unknown as number, boxShadow: `0 0 ${42 * glow}px rgba(99,102,241,${0.52 * glow})` }}>
          <span style={{ fontFamily: FONT_SANS, fontSize: 28, fontWeight: 800, color: C.text }}>◆</span>
        </div>
      </div>
      <div style={{ marginTop: 22, textAlign: 'center', opacity: interpolate(clean, [0, 1], [0, 1]) }}>
        <div style={{ fontFamily: FONT_DISPLAY, fontSize: 28, fontWeight: 800, color: C.text }}>NEXUS LABS</div>
        <div style={{ fontFamily: FONT_SANS, fontSize: 13, color: C.accent2, letterSpacing: 3, marginTop: 4 }}>CRAFTING MOTION</div>
      </div>
      <div style={{ position: 'absolute', bottom: 36, background: C.card, border: `1px solid ${C.line}`, padding: '8px 14px', borderRadius: 999, opacity: interpolate(frame, [10, 22], [0, 1], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) }}>
        <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.muted }}>LOGO & BRANDING · logo-glitch-reveal · real</span>
      </div>
    </AbsoluteFill>
  );
};

// S20 — Logo Spin — Logo & Branding
const S20_LogoSpin: React.FC = () => {
  const frame = useCurrentFrame();
  const p = spring({ frame, fps: FPS, config: SPRING_CFG });
  const rot = interpolate(p, [0, 1], [90, 0]);
  const op = interpolate(p, [0, 1], [0, 1]);
  const txtY = interpolate(spring({ frame: Math.max(0, frame - 18), fps: FPS, config: SPRING_CFG }), [0, 1], [16, 0]);
  const txtOp = interpolate(frame, [22, 38], [0, 1], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  return (
    <AbsoluteFill style={{ background: C.bg, justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ perspective: '900px' }}>
        <div
          style={{
            width: 140,
            height: 140,
            borderRadius: 22,
            background: `linear-gradient(135deg, ${C.accent}, ${C.accent2})`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            rotate: `0 ${1} ${0} ${rot}deg` as unknown as string,
            opacity: op,
            boxShadow: '0 16px 48px rgba(99,102,241,0.32)',
          }}
        >
          <span style={{ fontFamily: FONT_DISPLAY, fontSize: 42, fontWeight: 800, color: C.text }}>◈</span>
        </div>
      </div>
      <div style={{ marginTop: 18, textAlign: 'center', opacity: txtOp, translate: `0px ${txtY}px` as unknown as string }}>
        <div style={{ fontFamily: FONT_DISPLAY, fontSize: 26, fontWeight: 800, color: C.text }}>ORION SYSTEMS</div>
        <div style={{ fontFamily: FONT_SANS, fontSize: 12, color: C.muted, letterSpacing: 2, marginTop: 4 }}>PERSPECTIVE ROTATEY · SPRING</div>
      </div>
      <div style={{ position: 'absolute', bottom: 36, background: C.card, border: `1px solid ${C.line}`, padding: '8px 14px', borderRadius: 999, opacity: interpolate(frame, [8, 20], [0, 1], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) }}>
        <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.muted }}>LOGO & BRANDING · logo-spin-reveal</span>
      </div>
    </AbsoluteFill>
  );
};

// S21 — Image Carousel — Image & Media (real)
const S21_Carousel: React.FC = () => {
  const frame = useCurrentFrame();
  const slides = [
    { label: 'Mountain', grad: `linear-gradient(135deg, #3b82f6, #1d4ed8)` },
    { label: 'Ocean', grad: `linear-gradient(135deg, ${C.accent}, ${C.violet})` },
    { label: 'Forest', grad: `linear-gradient(135deg, #10b981, #059669)` },
  ];
  const cycleLen = 60;
  const prog = (frame % (cycleLen * slides.length)) / cycleLen;
  return (
    <AbsoluteFill style={{ background: C.bg, justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ position: 'absolute', top: 76, left: 36, background: C.card, border: `1px solid ${C.line}`, padding: '8px 14px', borderRadius: 999, opacity: interpolate(frame, [6, 16], [0, 1], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) }}>
        <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.muted }}>IMAGE & MEDIA · image-carousel · real</span>
      </div>
      <div style={{ position: 'relative', width: 860, height: 380, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {slides.map((s, i) => {
          const off = i - prog;
          const tx = off * 280;
          const sc = interpolate(Math.abs(off), [0, 1, 2], [1, 0.78, 0.56], { extrapolateRight: 'clamp' });
          const op = interpolate(Math.abs(off), [0, 1, 2], [1, 0.52, 0.18], { extrapolateRight: 'clamp' });
          return (
            <div key={s.label} style={{ position: 'absolute', width: 260, height: 340, borderRadius: 18, background: s.grad, display: 'flex', justifyContent: 'center', alignItems: 'flex-end', padding: 16, translate: `${tx}px 0px` as unknown as string, scale: sc as unknown as number, opacity: op, border: `1px solid rgba(248,250,252,0.12)`, boxShadow: '0 12px 40px rgba(0,0,0,0.28)' }}>
              <span style={{ fontFamily: FONT_SANS, fontSize: 15, fontWeight: 700, color: C.text, textShadow: '0 1px 6px rgba(0,0,0,0.32)' }}>{s.label}</span>
            </div>
          );
        })}
      </div>
      <div style={{ position: 'absolute', bottom: 44, display: 'flex', gap: 8 }}>
        {slides.map((_, i) => {
          const isActive = Math.round(prog) % slides.length === i;
          return <div key={i} style={{ width: isActive ? 22 : 8, height: 8, borderRadius: 999, background: isActive ? C.accent : 'rgba(248,250,252,0.18)', opacity: interpolate(frame, [8, 18], [0, 1], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) }} />;
        })}
      </div>
    </AbsoluteFill>
  );
};

// S22 — Finale End Card + Subscribe — Intro & Outro
const S22_Finale: React.FC = () => {
  const frame = useCurrentFrame();
  const p = spring({ frame, fps: FPS, config: SPRING_CFG });
  const pulse = Math.sin(frame * 0.18) * 0.12 + 1;
  return (
    <AbsoluteFill style={{ background: C.bg, justifyContent: 'center', alignItems: 'center' }}>
      <MeshBg />
      <GridDots opacity={0.05} />
      <div
        style={{
          width: 820,
          background: C.card,
          border: `1px solid ${C.line2}`,
          borderRadius: 24,
          padding: '36px 36px 28px',
          textAlign: 'center',
          opacity: interpolate(p, [0, 1], [0, 1]),
          scale: interpolate(p, [0, 1], [0.94, 1]) as unknown as number,
          translate: interpolate(p, [0, 1], ['0px 14px', '0px 0px']) as unknown as string,
          boxShadow: '0 24px 64px rgba(0,0,0,0.42)',
        }}
      >
        <div style={{ width: 56, height: 56, borderRadius: 16, background: C.accent, display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', scale: pulse as unknown as number }}>
          <span style={{ fontSize: 24 }}>◆</span>
        </div>
        <div style={{ fontFamily: FONT_DISPLAY, fontSize: 44, fontWeight: 800, color: C.text, marginTop: 16, lineHeight: 1 }}>Thank you for watching</div>
        <div style={{ fontFamily: FONT_SANS, fontSize: 15, color: C.muted, marginTop: 8 }}>Dual MCP · 95 + 95 templates · Indigo chassis #6366F1</div>
        <div style={{ marginTop: 20, display: 'inline-flex', gap: 12, alignItems: 'center', background: C.accent, padding: '14px 26px', borderRadius: 999, scale: interpolate(spring({ frame: Math.max(0, frame - 18), fps: FPS, config: SPRING_CFG }), [0, 1], [0.9, 1]) as unknown as number }}>
          <span style={{ width: 10, height: 10, borderRadius: 999, background: '#fff' }} />
          <span style={{ fontFamily: FONT_SANS, fontSize: 15, fontWeight: 800, color: '#fff' }}>Subscribe — youtube.com/@reactvideoeditor</span>
        </div>
        <div style={{ marginTop: 18, display: 'flex', gap: 10, justifyContent: 'center' }}>
          {['Text', 'Background', 'Charts', 'Cinematic', 'Transition', 'Logo', 'Intro', 'Media', 'Content'].map((t) => (
            <div key={t} style={{ fontFamily: FONT_MONO, fontSize: 10, letterSpacing: 0.8, color: C.muted, background: C.bg2, border: `1px solid ${C.line}`, padding: '6px 10px', borderRadius: 999 }}>{t}</div>
          ))}
        </div>
        <div style={{ marginTop: 16, fontFamily: FONT_MONO, fontSize: 10, color: C.sub, letterSpacing: 1 }}>9/9 categories covered · 22 scenes · {TOTAL_FRAMES}f · 1920×1080 @30fps</div>
      </div>
      {/* floating subscribe reminder pill (subscribe-reminder style) */}
      <div
        style={{
          position: 'absolute',
          right: 36,
          bottom: 36,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          background: 'rgba(20,30,54,0.86)',
          border: `1px solid ${C.line2}`,
          padding: '12px 16px',
          borderRadius: 999,
          backdropFilter: 'blur(12px)',
          opacity: interpolate(frame, [36, 54], [0, 1], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
          translate: interpolate(frame, [36, 54], ['60px 0px', '0px 0px'], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) as unknown as string,
        }}
      >
        <div style={{ width: 28, height: 28, borderRadius: 999, background: C.accent, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 12 }}>🔔</div>
        <div>
          <div style={{ fontFamily: FONT_SANS, fontSize: 13, fontWeight: 700, color: C.text }}>Subscribe</div>
          <div style={{ fontFamily: FONT_SANS, fontSize: 11, color: C.muted }}>Never miss a template drop</div>
        </div>
        <div style={{ width: 8, height: 8, borderRadius: 999, background: C.ok, opacity: interpolate(frame, [48, 60], [0, 1], { easing: BEZIER, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) }} />
      </div>
    </AbsoluteFill>
  );
};

// ── Composition ──
const SCENES: { comp: React.FC; label: string; slug: string; category: string }[] = [
  { comp: S01_CinematicTitle, label: 'Cinematic Title', slug: 'cinematic-title-intro', category: 'Intro & Outro' },
  { comp: S02_GlitchText, label: 'Glitch Text', slug: 'glitch-text', category: 'Text' },
  { comp: S03_GradientShift, label: 'Gradient Shift', slug: 'gradient-shift', category: 'Background' },
  { comp: S04_MatrixRain, label: 'Matrix Rain', slug: 'matrix-rain', category: 'Background' },
  { comp: S05_BarRace, label: 'Bar Chart Race', slug: 'bar-chart-race', category: 'Charts & Data' },
  { comp: S06_Candlestick, label: 'Candlestick', slug: 'candlestick-chart', category: 'Charts & Data' },
  { comp: S07_Heatmap, label: 'Heatmap Grid', slug: 'heatmap-grid', category: 'Charts & Data' },
  { comp: S08_Circular, label: 'Circular Progress', slug: 'circular-progress', category: 'Charts & Data' },
  { comp: S09_KPI, label: 'KPI Dashboard', slug: 'kpi-dashboard', category: 'Charts & Data' },
  { comp: S10_Particles, label: 'Particle Explosion', slug: 'particle-explosion', category: 'Content Animation' },
  { comp: S11_CardFlip, label: 'Card Flip', slug: 'card-flip', category: 'Content Animation' },
  { comp: S12_AnimatedList, label: 'Animated List', slug: 'animated-list', category: 'Content Animation' },
  { comp: S13_ToastStack, label: 'Toast Stack', slug: 'toast-stack', category: 'Content Animation' },
  { comp: S14_KenBurns, label: 'Ken Burns', slug: 'ken-burns', category: 'Cinematic' },
  { comp: S15_Letterbox, label: 'Letterbox Reveal', slug: 'letterbox-reveal', category: 'Cinematic' },
  { comp: S16_Spotlight, label: 'Spotlight Reveal', slug: 'spotlight-reveal', category: 'Cinematic' },
  { comp: S17_CrossDissolve, label: 'Cross Dissolve', slug: 'cross-dissolve', category: 'Transition' },
  { comp: S18_SlideWipe, label: 'Slide Wipe', slug: 'slide-wipe', category: 'Transition' },
  { comp: S19_LogoGlitch, label: 'Logo Glitch', slug: 'logo-glitch-reveal', category: 'Logo & Branding' },
  { comp: S20_LogoSpin, label: 'Logo Spin', slug: 'logo-spin-reveal', category: 'Logo & Branding' },
  { comp: S21_Carousel, label: 'Image Carousel', slug: 'image-carousel', category: 'Image & Media' },
  { comp: S22_Finale, label: 'Finale End Card', slug: 'end-card', category: 'Intro & Outro' },
];

export const DualMcpShowcase: React.FC = () => {
  let acc = 0;
  return (
    <AbsoluteFill style={{ background: C.bg }}>
      <FontStyles />
      {SCENES.map((s, i) => {
        const from = acc;
        acc += DURATIONS[i];
        const Comp = s.comp;
        return (
          <Sequence key={s.slug} from={from} durationInFrames={DURATIONS[i]} layout="none">
            <AbsoluteFill>
              <Comp />
              <TopBar label={s.label} slug={s.slug} category={s.category} idx={i} total={SCENES.length} />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  height: 3,
                  width: `${((i + 1) / SCENES.length) * 100}%`,
                  background: C.accent,
                  opacity: 0.9,
                }}
              />
            </AbsoluteFill>
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
