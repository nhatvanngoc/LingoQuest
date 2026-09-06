import { registerRoot, Composition } from 'remotion';
import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Video,
  Img,
  staticFile,
  spring,
} from 'remotion';
import { loadFont as loadPlusJakartaSans } from '@remotion/google-fonts/PlusJakartaSans';

const { fontFamily: FONT_PLUS_JAKARTA } = loadPlusJakartaSans('normal', {
  weights: ['400', '600', '700', '800'],
  subsets: ['latin', 'vietnamese'],
  ignoreTooManyRequestsWarning: true,
});

const FONT = `'${FONT_PLUS_JAKARTA}', -apple-system, BlinkMacSystemFont, sans-serif`;

/* ─── PALETTE ──────────────────────────────────────────────────── */
const P = {
  bg: '#070B14',
  card: '#12203A',
  border: '#27457A',
  blue: '#5AB0FF',
  purple: '#A78BFA',
  cyan: '#22D3EE',
  green: '#22C55E',
  red: '#EF4444',
  amber: '#F59E0B',
  pink: '#EC4899',
  text: '#F8FAFC',
  muted: '#94A3B8',
};

const footage = [
  staticFile('footage/s1-abstract.mp4'),
  staticFile('footage/s2-office.mp4'),
  staticFile('footage/s3-sunrise.mp4'),
  staticFile('footage/s4-dashboard.mp4'),
  staticFile('footage/s5-team.mp4'),
  staticFile('footage/s6-speed.mp4'),
];

/* ─── VIDEO (smooth loop) ───────────────────────────────────── */
const Vid: React.FC<{ src: any; style?: React.CSSProperties; opacity?: number }> = ({ src, style, opacity = 1 }) => (
  <Video src={src} loop muted startFrom={0} style={{ width: '100%', height: '100%', objectFit: 'cover', ...style, opacity }} />
);

/* ─── ANIMATE HELPERS ────────────────────────────────────────── */
const FadeUp: React.FC<{
  children: React.ReactNode; delay?: number; y?: number; style?: React.CSSProperties;
}> = ({ children, delay = 0, y = 40, style }) => {
  const frame = useCurrentFrame();
  const p = spring({ frame: frame - delay, fps: 30, config: { damping: 12, mass: 0.8 } });
  return (
    <div style={{ opacity: interpolate(p, [0, 1], [0, 1]), transform: `translateY(${interpolate(p, [0, 1], [y, 0])}px)`, ...style }}>
      {children}
    </div>
  );
};

const PopIn: React.FC<{
  children: React.ReactNode; delay?: number; style?: React.CSSProperties;
}> = ({ children, delay = 0, style }) => {
  const frame = useCurrentFrame();
  const p = spring({ frame: frame - delay, fps: 30, config: { damping: 10, mass: 0.5 } });
  return (
    <div style={{ opacity: interpolate(p, [0, 1], [0, 1]), transform: `scale(${interpolate(p, [0, 1], [0.6, 1])})`, ...style }}>
      {children}
    </div>
  );
};

const SlideInLeft: React.FC<{
  children: React.ReactNode; delay?: number; style?: React.CSSProperties;
}> = ({ children, delay = 0, style }) => {
  const frame = useCurrentFrame();
  const p = spring({ frame: frame - delay, fps: 30, config: { damping: 12, mass: 0.8 } });
  return (
    <div style={{ opacity: interpolate(p, [0, 1], [0, 1]), transform: `translateX(${interpolate(p, [0, 1], [-60, 0])}px)`, ...style }}>
      {children}
    </div>
  );
};

const SlideInRight: React.FC<{
  children: React.ReactNode; delay?: number; style?: React.CSSProperties;
}> = ({ children, delay = 0, style }) => {
  const frame = useCurrentFrame();
  const p = spring({ frame: frame - delay, fps: 30, config: { damping: 12, mass: 0.8 } });
  return (
    <div style={{ opacity: interpolate(p, [0, 1], [0, 1]), transform: `translateX(${interpolate(p, [0, 1], [60, 0])}px)`, ...style }}>
      {children}
    </div>
  );
};

const ScaleBar: React.FC<{
  target: number; delay?: number; color?: string; height?: number;
}> = ({ target, delay = 0, color = P.blue, height = 8 }) => {
  const frame = useCurrentFrame();
  const p = spring({ frame: frame - delay, fps: 30, config: { damping: 14, mass: 0.6 } });
  return (
    <div style={{ width: '100%', height, background: `${color}20`, borderRadius: height / 2, overflow: 'hidden' }}>
      <div style={{ width: `${target * p}%`, height: '100%', background: color, borderRadius: height / 2 }} />
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   SLIDE 1 — FULL BLEED VIDEO + OVERLAY TEXT
   Video covers entire background, text in bottom-left with gradient
   ═══════════════════════════════════════════════════════════════════ */
const Slide1_FullBleed: React.FC = () => (
  <AbsoluteFill>
    <Vid src={footage[0]} />
    {/* Dark gradient overlay bottom-left */}
    <div style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
    }} />
    <div style={{ position: 'absolute', left: 80, bottom: 120, width: '55%' }}>
      <FadeUp delay={5}>
        <div style={{ fontSize: 28, color: P.blue, fontFamily: FONT, fontWeight: 700, letterSpacing: 6, textTransform: 'uppercase' }}>
          Introducing Aurora
        </div>
      </FadeUp>
      <FadeUp delay={15} style={{ marginTop: 12 }}>
        <div style={{ fontSize: 72, fontWeight: 800, color: P.text, fontFamily: FONT, lineHeight: 1.1 }}>
          The Future of<br />
          <span style={{ color: P.blue }}>Digital Design</span>
        </div>
      </FadeUp>
      <FadeUp delay={25} style={{ marginTop: 20 }}>
        <div style={{ fontSize: 32, color: '#ccc', fontFamily: FONT, maxWidth: 600, lineHeight: 1.5 }}>
          Create stunning experiences 10x faster with AI-powered tools.
        </div>
      </FadeUp>
      <FadeUp delay={35} style={{ marginTop: 32 }}>
        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ padding: '18px 48px', background: P.blue, borderRadius: 30, fontSize: 28, fontWeight: 700, color: '#fff', fontFamily: FONT }}>
            Get Started
          </div>
          <div style={{ padding: '18px 40px', border: `2px solid ${P.border}`, borderRadius: 30, fontSize: 28, fontWeight: 500, color: P.text, fontFamily: FONT }}>
            Watch Demo
          </div>
        </div>
      </FadeUp>
    </div>
  </AbsoluteFill>
);

/* ═══════════════════════════════════════════════════════════════════
   SLIDE 2 — CENTER CARD + FLOATING ELEMENTS
   Video in center card, stat cards float around it
   ═══════════════════════════════════════════════════════════════════ */
const Slide2_CenterCard: React.FC = () => {
  const stats = [
    { label: 'Teams', value: '10K+', color: P.blue, x: -320, y: -120 },
    { label: 'Projects', value: '50K+', color: P.green, x: 320, y: -120 },
    { label: 'Uptime', value: '99.9%', color: P.purple, x: -320, y: 180 },
    { label: 'Rating', value: '4.9★', color: P.amber, x: 320, y: 180 },
  ];
  return (
    <AbsoluteFill style={{ background: P.bg }}>
      {/* Background grid dots */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      {/* Center video */}
      <PopIn delay={0} style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: 500, height: 300, borderRadius: 20, overflow: 'hidden', border: `3px solid ${P.blue}50`, boxShadow: '0 20px 80px rgba(90,176,255,0.2)' }}>
        <Vid src={footage[2]} />
      </PopIn>
      {/* Title above video */}
      <FadeUp delay={5} style={{ position: 'absolute', left: '50%', top: 140, transform: 'translateX(-50%)', textAlign: 'center' }}>
        <div style={{ fontSize: 28, color: P.blue, fontFamily: FONT, fontWeight: 700, letterSpacing: 5, textTransform: 'uppercase' }}>Why Aurora</div>
      </FadeUp>
      {/* Stat cards */}
      {stats.map((s, i) => (
        <PopIn key={i} delay={15 + i * 8} style={{
          position: 'absolute', left: `calc(50% + ${s.x}px)`, top: `calc(50% + ${s.y}px)`,
          transform: 'translate(-50%, -50%)', width: 200, padding: '24px 20px', textAlign: 'center',
          background: P.card, borderRadius: 16, border: `2px solid ${s.color}40`,
        }}>
          <div style={{ fontSize: 44, fontWeight: 800, color: s.color, fontFamily: FONT }}>{s.value}</div>
          <div style={{ fontSize: 24, color: P.muted, fontFamily: FONT, marginTop: 6 }}>{s.label}</div>
        </PopIn>
      ))}
    </AbsoluteFill>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   SLIDE 3 — DIAGONAL SPLIT (top-left video, bottom-right text)
   ═══════════════════════════════════════════════════════════════════ */
const Slide3_Diagonal: React.FC = () => (
  <AbsoluteFill style={{ background: P.bg }}>
    {/* Diagonal clip: video in top-left triangle */}
    <div style={{
      position: 'absolute', top: 0, left: 0, width: '60%', height: '100%',
      clipPath: 'polygon(0 0, 100% 0, 50% 100%, 0 100%)', overflow: 'hidden',
    }}>
      <Vid src={footage[4]} />
    </div>
    {/* Text in bottom-right */}
    <div style={{ position: 'absolute', right: 80, top: '50%', transform: 'translateY(-50%)', width: '42%' }}>
      <FadeUp delay={10}>
        <div style={{ fontSize: 28, color: P.green, fontFamily: FONT, fontWeight: 700, letterSpacing: 5, textTransform: 'uppercase' }}>Social Proof</div>
      </FadeUp>
      <FadeUp delay={18} style={{ marginTop: 12 }}>
        <div style={{ fontSize: 56, fontWeight: 800, color: P.text, fontFamily: FONT, lineHeight: 1.1 }}>
          Loved by<br /><span style={{ color: P.green }}>10,000+ Teams</span>
        </div>
      </FadeUp>
      <FadeUp delay={28} style={{ marginTop: 24 }}>
        <div style={{ fontSize: 28, color: P.muted, fontFamily: FONT, lineHeight: 1.6 }}>
          "The best design tool we've ever used. Period."
        </div>
        <div style={{ fontSize: 24, color: P.blue, fontFamily: FONT, marginTop: 8 }}>— Sarah Chen, Design Lead @ TechCorp</div>
      </FadeUp>
    </div>
    {/* Decorative diagonal line */}
    <div style={{
      position: 'absolute', top: 0, left: '35%', width: 3, height: '100%',
      background: `linear-gradient(180deg, transparent, ${P.green}, transparent)`,
      transform: 'skewX(-20deg)', opacity: 0.3,
    }} />
  </AbsoluteFill>
);

/* ═══════════════════════════════════════════════════════════════════
   SLIDE 4 — SIDE PANEL (narrow left panel, rest is video)
   ═══════════════════════════════════════════════════════════════════ */
const Slide4_SidePanel: React.FC = () => (
  <AbsoluteFill style={{ background: P.bg }}>
    {/* Full video background */}
    <div style={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
      <Vid src={footage[1]} />
    </div>
    {/* Dark overlay */}
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(7,11,20,0.95) 0%, rgba(7,11,20,0.7) 35%, rgba(7,11,20,0.3) 100%)' }} />
    {/* Left panel */}
    <SlideInLeft delay={0} style={{
      position: 'absolute', left: 0, top: 0, width: 420, height: '100%',
      background: P.card, borderRight: `2px solid ${P.border}`, display: 'flex',
      flexDirection: 'column', justifyContent: 'center', padding: '60px 40px',
    }}>
      <div style={{ fontSize: 28, color: P.red, fontFamily: FONT, fontWeight: 700, letterSpacing: 5, textTransform: 'uppercase' }}>The Problem</div>
      <div style={{ fontSize: 44, fontWeight: 800, color: P.text, fontFamily: FONT, marginTop: 12, lineHeight: 1.15 }}>
        Teams Waste <span style={{ color: P.red }}>4.2 Hours</span> Daily
      </div>
      <div style={{ fontSize: 26, color: P.muted, fontFamily: FONT, marginTop: 20, lineHeight: 1.6 }}>
        Switching between tools kills productivity. Your team deserves better.
      </div>
      {/* Stats */}
      <div style={{ display: 'flex', gap: 24, marginTop: 36 }}>
        {[
          { v: '73%', l: 'Delayed', c: P.red },
          { v: '$28k', l: 'Lost/mo', c: P.amber },
        ].map((s, i) => (
          <PopIn key={i} delay={20 + i * 10}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 40, fontWeight: 800, color: s.c, fontFamily: FONT }}>{s.v}</div>
              <div style={{ fontSize: 22, color: P.muted, fontFamily: FONT, marginTop: 2 }}>{s.l}</div>
            </div>
          </PopIn>
        ))}
      </div>
    </SlideInLeft>
  </AbsoluteFill>
);

/* ═══════════════════════════════════════════════════════════════════
   SLIDE 5 — FEATURE CARDS (3-column grid)
   ═══════════════════════════════════════════════════════════════════ */
const Slide5_CardGrid: React.FC = () => {
  const cards = [
    { icon: '⚡', title: 'Lightning Fast', desc: '10x faster workflows', footage: footage[2], color: P.amber },
    { icon: '🎯', title: 'Precision', desc: 'Pixel-perfect every time', footage: footage[3], color: P.blue },
    { icon: '🚀', title: 'Scale', desc: 'From startup to enterprise', footage: footage[5], color: P.green },
  ];
  return (
    <AbsoluteFill style={{ background: P.bg }}>
      <FadeUp delay={0} style={{ position: 'absolute', top: 80, left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
        <div style={{ fontSize: 28, color: P.purple, fontFamily: FONT, fontWeight: 700, letterSpacing: 5, textTransform: 'uppercase' }}>Features</div>
        <div style={{ fontSize: 52, fontWeight: 800, color: P.text, fontFamily: FONT, marginTop: 8 }}>Built for Speed</div>
      </FadeUp>
      <div style={{ position: 'absolute', bottom: 80, left: 80, right: 80, display: 'flex', gap: 32, height: 480 }}>
        {cards.map((c, i) => (
          <PopIn key={i} delay={15 + i * 10} style={{ flex: 1, borderRadius: 24, overflow: 'hidden', position: 'relative', border: `2px solid ${c.color}30`, background: P.card }}>
            <div style={{ height: 260, overflow: 'hidden' }}>
              <Vid src={c.footage} />
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 260, background: `linear-gradient(180deg, transparent 40%, ${P.card} 100%)` }} />
            </div>
            <div style={{ padding: '20px 28px', position: 'relative', top: -40 }}>
              <div style={{ fontSize: 40 }}>{c.icon}</div>
              <div style={{ fontSize: 32, fontWeight: 700, color: P.text, fontFamily: FONT, marginTop: 8 }}>{c.title}</div>
              <div style={{ fontSize: 24, color: P.muted, fontFamily: FONT, marginTop: 6 }}>{c.desc}</div>
            </div>
          </PopIn>
        ))}
      </div>
    </AbsoluteFill>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   SLIDE 6 — STACKED OVERLAY (video behind, glass card over)
   ═══════════════════════════════════════════════════════════════════ */
const Slide6_GlassCard: React.FC = () => (
  <AbsoluteFill>
    <Vid src={footage[3]} />
    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)' }} />
    <PopIn delay={5} style={{
      position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
      width: 700, padding: '50px 60px', background: 'rgba(18,32,58,0.85)',
      backdropFilter: 'blur(20px)', borderRadius: 32, border: `1px solid ${P.border}`,
      boxShadow: '0 30px 80px rgba(0,0,0,0.4)',
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 28, color: P.cyan, fontFamily: FONT, fontWeight: 700, letterSpacing: 5, textTransform: 'uppercase' }}>Performance</div>
        <div style={{ fontSize: 48, fontWeight: 800, color: P.text, fontFamily: FONT, marginTop: 12 }}>
          Numbers Don't Lie
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 48, marginTop: 40 }}>
          {[
            { v: '3.2x', l: 'Faster Renders', c: P.cyan },
            { v: '99.9%', l: 'Uptime SLA', c: P.green },
            { v: '<50ms', l: 'API Latency', c: P.amber },
          ].map((s, i) => (
            <PopIn key={i} delay={20 + i * 8}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 48, fontWeight: 800, color: s.c, fontFamily: FONT }}>{s.v}</div>
                <div style={{ fontSize: 24, color: P.muted, fontFamily: FONT, marginTop: 4 }}>{s.l}</div>
              </div>
            </PopIn>
          ))}
        </div>
        <div style={{ marginTop: 36 }}>
          <ScaleBar target={95} delay={40} color={P.cyan} />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
            <span style={{ fontSize: 22, color: P.muted, fontFamily: FONT }}>Performance Score</span>
            <span style={{ fontSize: 22, color: P.cyan, fontFamily: FONT }}>95/100</span>
          </div>
        </div>
      </div>
    </PopIn>
  </AbsoluteFill>
);

/* ═══════════════════════════════════════════════════════════════════
   SLIDE 7 — HORIZONTAL STRIP (video in horizontal band, text above/below)
   ═══════════════════════════════════════════════════════════════════ */
const Slide7_HorizontalStrip: React.FC = () => (
  <AbsoluteFill style={{ background: P.bg }}>
    {/* Top text area */}
    <div style={{ position: 'absolute', top: 80, left: 80, right: 80, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
      <SlideInLeft delay={0}>
        <div style={{ fontSize: 28, color: P.pink, fontFamily: FONT, fontWeight: 700, letterSpacing: 5, textTransform: 'uppercase' }}>Experience</div>
        <div style={{ fontSize: 48, fontWeight: 800, color: P.text, fontFamily: FONT, marginTop: 8 }}>Cinematic Quality</div>
      </SlideInLeft>
      <SlideInRight delay={10}>
        <div style={{ fontSize: 26, color: P.muted, fontFamily: FONT, maxWidth: 400, lineHeight: 1.5 }}>
          Every frame rendered in stunning 4K resolution.
        </div>
      </SlideInRight>
    </div>
    {/* Video strip — full width band in the middle */}
    <div style={{ position: 'absolute', top: 240, left: 0, right: 0, height: 440 }}>
      <Vid src={footage[5]} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(7,11,20,0.6) 0%, transparent 20%, transparent 80%, rgba(7,11,20,0.6) 100%)' }} />
    </div>
    {/* Bottom features */}
    <div style={{ position: 'absolute', bottom: 60, left: 80, right: 80, display: 'flex', gap: 40 }}>
      {['Color Grading', 'Motion Blur', '4K Export', 'HDR Support'].map((f, i) => (
        <PopIn key={i} delay={30 + i * 6} style={{
          padding: '18px 32px', background: P.card, borderRadius: 12,
          border: `1px solid ${P.border}`, fontSize: 26, fontWeight: 600,
          color: P.text, fontFamily: FONT, textAlign: 'center', flex: 1,
        }}>
          {f}
        </PopIn>
      ))}
    </div>
  </AbsoluteFill>
);

/* ═══════════════════════════════════════════════════════════════════
   SLIDE 8 — MASONRY / STAGGERED (overlapping elements at angles)
   ═══════════════════════════════════════════════════════════════════ */
const Slide8_Masonry: React.FC = () => {
  const items = [
    { type: 'video', src: footage[0], x: 60, y: 80, w: 360, h: 240, rot: -3 },
    { type: 'video', src: footage[2], x: 460, y: 60, w: 320, h: 220, rot: 2 },
    { type: 'video', src: footage[5], x: 820, y: 100, w: 380, h: 260, rot: -1 },
    { type: 'text', x: 200, y: 360, w: 300, rot: 1 },
    { type: 'video', src: footage[3], x: 540, y: 320, w: 340, h: 230, rot: -2 },
    { type: 'video', src: footage[4], x: 920, y: 400, w: 320, h: 210, rot: 3 },
  ];
  return (
    <AbsoluteFill style={{ background: P.bg }}>
      {/* Background texture */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      {/* Title */}
      <FadeUp delay={0} style={{ position: 'absolute', left: '50%', top: 20, transform: 'translateX(-50%)', textAlign: 'center', zIndex: 10 }}>
        <div style={{ fontSize: 28, color: P.purple, fontFamily: FONT, fontWeight: 700, letterSpacing: 5, textTransform: 'uppercase' }}>Showcase</div>
        <div style={{ fontSize: 40, fontWeight: 800, color: P.text, fontFamily: FONT, marginTop: 4 }}>Creative Works</div>
      </FadeUp>
      {/* Staggered items */}
      {items.map((item, i) => (
        <PopIn key={i} delay={10 + i * 6} style={{
          position: 'absolute', left: item.x, top: item.y, transform: `rotate(${item.rot}deg)`,
        }}>
          {item.type === 'video' ? (
            <div style={{ width: item.w, height: item.h, borderRadius: 16, overflow: 'hidden', border: `2px solid ${P.border}`, boxShadow: '0 10px 40px rgba(0,0,0,0.3)' }}>
              <Vid src={item.src} />
            </div>
          ) : (
            <div style={{ width: item.w, padding: '20px 24px', background: P.card, borderRadius: 16, border: `2px solid ${P.purple}30` }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: P.purple, fontFamily: FONT }}>Aurora v2.0</div>
              <div style={{ fontSize: 22, color: P.muted, fontFamily: FONT, marginTop: 4 }}>Now with AI features</div>
            </div>
          )}
        </PopIn>
      ))}
    </AbsoluteFill>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   SHOWCASE — 8 slides × 12s each = 96s
   ═══════════════════════════════════════════════════════════════════ */
const Showcase: React.FC = () => {
  const S = 360; // 12s per slide
  const slides = [
    Slide1_FullBleed,
    Slide2_CenterCard,
    Slide3_Diagonal,
    Slide4_SidePanel,
    Slide5_CardGrid,
    Slide6_GlassCard,
    Slide7_HorizontalStrip,
    Slide8_Masonry,
  ];
  return (
    <AbsoluteFill style={{ background: P.bg }}>
      {slides.map((Slide, i) => (
        <Sequence key={i} from={i * S} durationInFrames={S}>
          <Slide />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

/* ─── AI TECH SHOWCASE (real Pexels footage) ─────────────────────── */
import { AITechShowcase } from './AITechShowcase';

/* ─── IMAGE SHOWCASE (no video, Ken Burns images) ──────────────── */
import { ImageShowcase } from './ImageShowcase';

/* ─── CINEMATIC SHOWCASE (advanced effects) ────────────────────── */
import { CinematicShowcase } from './CinematicShowcase';

/* ─── CINEMATIC PRO (fast pacing, real images, HUD/Sci-Fi) ─────── */
import { CinematicPro } from './CinematicPro';

/* ─── SAAS DASHBOARD (glassmorphism, big text, fast pacing) ─────
   ★ MAIN / PRINCIPAL VIDEO TEMPLATE ★
   Light glassmorphism, 1920×1080@30fps, 64s (1920 frames), 16 scenes.
   Khi làm video mới: ADAPT template này thay vì viết composition từ đầu. ───── */
import { SaasDashboard } from './SaasDashboard';
import { SaasDashboard as VslLandmarkExtractor } from './VslLandmarkExtractor';

/* ─── CLOUD PLATFORM (DevOps / K8s / CI-CD) ────────────────── */
import { CloudPlatform } from './CloudPlatform';

/* ─── CLOUD FLARE (Vietnamese CDN/Security video) ────────── */
import { CloudflareShowcase } from './CloudflareVideo';
import { CloudflareLight } from './CloudflareVideoLight';

/* ─── ML PRESENTATION (12 scenes, large text, full-bleed, many images) ────── */
import { MLPresentation, ML_TOTAL_FRAMES } from './MLPresentation';

/* ─── AI AGENT PRESENTATION (8 scenes, dark-tech, Vietnamese) ────────────── */
import { AIAgentPresentation, AIAgentPresentation_TOTAL_FRAMES as AI_AGENT_TOTAL } from './AIAgentPresentation';

/* ─── HARNESS 9.5 — BRUTALIST BLUEPRINT (1920×1080@30fps, 64s, 5 scenes) ─── */
import { Harness95 } from './Harness95';

/* ─── MEGA HARNESS 9.5 ULTRA — 26 SCENES · 6300F · 210s · BRUTALIST BLUEPRINT ─── */
import { MegaHarness95Ultra } from './MegaHarness95Ultra';

/* ─── MEGA HARNESS 95 SOFT — 26 SCENES · 6300F · 210s · SOFT GLASS — slate #0F172A / cream #FFFBF5 / blur 16 / radius 24 / spring 26/85 ─── */
import { MegaHarness95Soft } from './MegaHarness95Soft';

/* ─── DUAL MCP SHOWCASE — 22 SCENES · 4410F · 147s · INDIGO #0B1220 / #F8FAFC / #6366F1 · Newsreader/Geist Sans · 95+95 dual-MCP ─── */
import { DualMcpShowcase, TOTAL_FRAMES as DUAL_TOTAL } from './DualMcpShowcase';

/* ─── MAP HARNESS 95 LIGHT — 7 SCENES · 1540F · 51s · LIGHT #FFFBF5/#F8FAFC · Outfit/Inter/Instrument Serif · MapLibre+Cesium SIM ─── */
import { MapHarness95Light, TOTAL_FRAMES as MAP_LIGHT_TOTAL } from './MapHarness95Light';

/* ─── ENGLISH WORD FORMATION (Grade 11 educational, 24 scenes, 10min) ── */
import { EnglishWordInfo } from './EnglishWordInfo';

/* ─── ROOT ───────────────────────────────────────────────── */
export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="Showcase"
      component={Showcase}
      durationInFrames={2880}
      fps={30}
      width={1920}
      height={1080}
    />
    <Composition
      id="AITechShowcase"
      component={AITechShowcase}
      durationInFrames={2520}
      fps={30}
      width={1920}
      height={1080}
    />
    <Composition
      id="ImageShowcase"
      component={ImageShowcase}
      durationInFrames={2520}
      fps={30}
      width={1920}
      height={1080}
    />
    <Composition
      id="CinematicShowcase"
      component={CinematicShowcase}
      durationInFrames={2520}
      fps={30}
      width={1920}
      height={1080}
    />
    <Composition
      id="CinematicPro"
      component={CinematicPro}
      durationInFrames={1440}
      fps={30}
      width={1920}
      height={1080}
    />
    {/* ★ MAIN TEMPLATE — xem ghi chú phía trên (glassmorphism, light) ★ */}
    <Composition
      id="SaasDashboard"
      component={SaasDashboard}
      durationInFrames={1920}
      fps={30}
      width={1920}
      height={1080}
    />
    {/* ★ ADAPTED from MAIN TEMPLATE (SaasDashboard) — VSL Landmark Extractor ★ */}
    <Composition
      id="VslLandmarkExtractor"
      component={VslLandmarkExtractor}
      durationInFrames={1920}
      fps={30}
      width={1920}
      height={1080}
    />
    <Composition
      id="CloudPlatform"
      component={CloudPlatform}
      durationInFrames={1920}
      fps={30}
      width={1920}
      height={1080}
    />
    <Composition
      id="CloudflareShowcase"
      component={CloudflareShowcase}
      durationInFrames={1920}
      fps={30}
      width={1920}
      height={1080}
    />
    <Composition
      id="CloudflareLight"
      component={CloudflareLight}
      durationInFrames={1920}
      fps={30}
      width={1920}
      height={1080}
    />
    <Composition
      id="MLPresentation"
      component={MLPresentation}
      durationInFrames={6999}
      fps={30}
      width={1920}
      height={1080}
    />
    {/* AI Agent Presentation — dark-tech, Vietnamese, 8 scenes × 8s = 64s */}
    <Composition
      id="AIAgentPresentation"
      component={AIAgentPresentation}
      durationInFrames={AI_AGENT_TOTAL}
      fps={30}
      width={1920}
      height={1080}
    />
    {/* HARNESS 9.5 — BRUTALIST BLUEPRINT — 64s @30fps = 1920 frames, 1920×1080, 5 scenes */}
    <Composition
      id="Harness95"
      component={Harness95}
      durationInFrames={1920}
      fps={30}
      width={1920}
      height={1080}
    />
    {/* MEGA HARNESS 9.5 ULTRA — 26 SCENES · 6300F =210s @30fps · 1920×1080 · Brutalist Blueprint chassis INK #0A0F1E / dot 24px / rail 72px / border 3px · 8 acts covering 9/9 categories */}
    <Composition
      id="MegaHarness95Ultra"
      component={MegaHarness95Ultra}
      durationInFrames={6300}
      fps={30}
      width={1920}
      height={1080}
    />
    {/* MEGA HARNESS 95 SOFT — 26 SCENES · 6300F =210s @30fps · 1920×1080 · Soft Glass chassis CREAM #FFFBF5 / mesh blur 40px / rail 1px #E2E8F0 blur 1px / border 1px / radius 24 / shadow diffuse · same 26 scenes, soft tokens */}
    <Composition
      id="MegaHarness95Soft"
      component={MegaHarness95Soft}
      durationInFrames={6300}
      fps={30}
      width={1920}
      height={1080}
    />
    {/* DUAL MCP SHOWCASE — 22 SCENES · 4410F =147s @30fps · 1920×1080 · Indigo chassis #0B1220/#F8FAFC/#6366F1 · Newsreader/Geist Sans · 95+95 dual-MCP 9/9 categories */}
    <Composition
      id="DualMcpShowcase"
      component={DualMcpShowcase}
      durationInFrames={DUAL_TOTAL}
      fps={30}
      width={1920}
      height={1080}
    />
    {/* MAP HARNESS 95 LIGHT — 7 SCENES · 1540F =51s @30fps · 1920×1080 · Light #FFFBF5/#F8FAFC/#E7E5E4 — Outfit500/Inter400/InstrumentSerif italic · Simulated MapLibre+Cesium */}
    <Composition
      id="MapHarness95Light"
      component={MapHarness95Light}
      durationInFrames={1540}
      fps={30}
      width={1920}
      height={1080}
    />
    {/* ENGLISH WORD FORMATION — Grade 11 · 24 SCENES · 18300F =610s ≈10min @30fps · 1920×1080 · Light glassmorphism · informative lesson on INFORM word family */}
    <Composition
      id="EnglishWordInfo"
      component={EnglishWordInfo}
      durationInFrames={18300}
      fps={30}
      width={1920}
      height={1080}
    />
  </>
);

registerRoot(RemotionRoot);
