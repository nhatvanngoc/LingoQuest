import { registerRoot, Composition } from 'remotion';
import React, { useMemo } from 'react';
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Img,
  staticFile,
} from 'remotion';

/* ═══════════════════════════════════════════════════════════════════
   CINEMATIC SHOWCASE — Advanced Remotion Effects Demo
   Glassmorphism, Particles, Glitch, Morphing, CountUp, Parallax
   ═══════════════════════════════════════════════════════════════════ */

const P = {
  bg: '#0a0a0f',
  surface: 'rgba(255,255,255,0.03)',
  glass: 'rgba(255,255,255,0.06)',
  glassBorder: 'rgba(255,255,255,0.08)',
  blue: '#5AB0FF',
  purple: '#A78BFA',
  cyan: '#22D3EE',
  pink: '#EC4899',
  green: '#22C55E',
  amber: '#F59E0B',
  text: '#F8FAFC',
  muted: '#64748B',
};

/* ─── PARTICLES ─────────────────────────────────────────────── */
const Particles: React.FC<{
  count?: number;
  color?: string;
  speed?: number;
  maxSize?: number;
}> = ({ count = 60, color = P.blue, speed = 0.3, maxSize = 4 }) => {
  const frame = useCurrentFrame();
  const particles = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      x: (Math.sin(i * 137.508) * 0.5 + 0.5) * 100,
      baseY: (Math.cos(i * 97.3) * 0.5 + 0.5) * 100,
      size: 1 + (i % 5) * (maxSize / 5),
      speed: speed * (0.5 + (i % 7) * 0.1),
      phase: i * 0.8,
    })), [count, speed, maxSize]);

  return (
    <AbsoluteFill style={{ pointerEvents: 'none' }}>
      {particles.map((p, i) => {
        const y = (p.baseY + (frame + p.phase) * p.speed * 0.5) % 110 - 5;
        const opacity = 0.15 + 0.2 * Math.sin(frame * 0.03 + p.phase);
        return (
          <div key={i} style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${y}%`,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            backgroundColor: color,
            opacity,
            boxShadow: `0 0 ${p.size * 3}px ${color}40`,
          }} />
        );
      })}
    </AbsoluteFill>
  );
};

/* ─── GLITCH TEXT ───────────────────────────────────────────── */
const GlitchText: React.FC<{
  text: string;
  fontSize?: number;
  color?: string;
  delay?: number;
}> = ({ text, fontSize = 80, color = P.text, delay = 0 }) => {
  const frame = useCurrentFrame();
  const f = Math.max(0, frame - delay);
  const isGlitching = f > 20 && f < 25;
  const glitchX = isGlitching ? Math.sin(f * 50) * 8 : 0;
  const glitchY = isGlitching ? Math.cos(f * 37) * 4 : 0;
  const skew = isGlitching ? Math.sin(f * 73) * 3 : 0;

  const p = spring({ frame: f, fps: 30, config: { damping: 12, mass: 0.8 } });
  const opacity = interpolate(p, [0, 1], [0, 1]);
  const clipPct = interpolate(p, [0, 1], [100, 0]);

  return (
    <div style={{ position: 'relative', opacity }}>
      {/* RGB split layers */}
      {isGlitching && (
        <>
          <div style={{
            position: 'absolute', left: -3, top: 0,
            fontSize, fontFamily: 'system-ui', fontWeight: 900, color: '#ff0040',
            clipPath: `inset(${clipPct}% 0 0 0)`, transform: `translateX(${glitchX + 3}px)`, opacity: 0.7,
          }}>{text}</div>
          <div style={{
            position: 'absolute', left: 3, top: 0,
            fontSize, fontFamily: 'system-ui', fontWeight: 900, color: '#00ff88',
            clipPath: `inset(${clipPct}% 0 0 0)`, transform: `translateX(${glitchX - 3}px)`, opacity: 0.7,
          }}>{text}</div>
        </>
      )}
      <div style={{
        fontSize, fontFamily: 'system-ui', fontWeight: 900, color,
        clipPath: `inset(${clipPct}% 0 0 0)`,
        transform: `translate(${glitchX}px, ${glitchY}px) skewX(${skew}deg)`,
        textShadow: isGlitching ? `0 0 20px ${color}80` : 'none',
      }}>{text}</div>
    </div>
  );
};

/* ─── COUNTER ───────────────────────────────────────────────── */
const CountUp: React.FC<{
  from?: number;
  to: number;
  suffix?: string;
  prefix?: string;
  delay?: number;
  fontSize?: number;
  color?: string;
}> = ({ from = 0, to, suffix = '', prefix = '', delay = 0, fontSize = 64, color = P.text }) => {
  const frame = useCurrentFrame();
  const f = Math.max(0, frame - delay);
  const progress = spring({ frame: f, fps: 30, config: { damping: 18, mass: 0.5 } });
  const value = Math.round(from + (to - from) * progress);
  const p = spring({ frame: f, fps: 30, config: { damping: 10, mass: 0.6 } });

  return (
    <div style={{
      fontSize, fontFamily: 'system-ui', fontWeight: 900, color,
      opacity: interpolate(p, [0, 1], [0, 1]),
      transform: `scale(${interpolate(p, [0, 1], [0.5, 1])})`,
    }}>
      {prefix}{value.toLocaleString()}{suffix}
    </div>
  );
};

/* ─── MORPHING ORB ─────────────────────────────────────────── */
const MorphOrb: React.FC<{
  size?: number;
  color1?: string;
  color2?: string;
  speed?: number;
}> = ({ size = 300, color1 = P.blue, color2 = P.purple, speed = 1 }) => {
  const frame = useCurrentFrame();
  const r1 = 40 + 15 * Math.sin(frame * 0.02 * speed);
  const r2 = 45 + 10 * Math.cos(frame * 0.03 * speed);
  const r3 = 38 + 12 * Math.sin(frame * 0.025 * speed + 1);
  const r4 = 42 + 8 * Math.cos(frame * 0.018 * speed + 2);
  const r5 = 44 + 14 * Math.sin(frame * 0.022 * speed + 3);

  return (
    <div style={{
      width: size, height: size,
      borderRadius: `${r1}% ${100 - r1}% ${r2}% ${100 - r2}% / ${r3}% ${r4}% ${100 - r4}% ${100 - r3}%`,
      background: `linear-gradient(135deg, ${color1}, ${color2})`,
      filter: 'blur(1px)',
      boxShadow: `0 0 60px ${color1}40, 0 0 120px ${color2}20`,
      animation: 'none',
    }} />
  );
};

/* ─── GLASS CARD ────────────────────────────────────────────── */
const GlassCard: React.FC<{
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}> = ({ children, delay = 0, style }) => {
  const frame = useCurrentFrame();
  const p = spring({ frame: frame - delay, fps: 30, config: { damping: 12, mass: 0.6 } });
  return (
    <div style={{
      background: P.glass,
      backdropFilter: 'blur(20px)',
      border: `1px solid ${P.glassBorder}`,
      borderRadius: 24,
      padding: '32px 28px',
      opacity: interpolate(p, [0, 1], [0, 1]),
      transform: `translateY(${interpolate(p, [0, 1], [40, 0])}px) scale(${interpolate(p, [0, 1], [0.95, 1])})`,
      boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
      ...style,
    }}>
      {children}
    </div>
  );
};

/* ─── PARALLAX LAYER ────────────────────────────────────────── */
const ParallaxLayer: React.FC<{
  children: React.ReactNode;
  speed?: number;
  style?: React.CSSProperties;
}> = ({ children, speed = 0.5, style }) => {
  const frame = useCurrentFrame();
  const y = frame * speed;
  return (
    <div style={{ transform: `translateY(${-y}px)`, ...style }}>
      {children}
    </div>
  );
};

/* ─── GRADIENT BORDER ───────────────────────────────────────── */
const GradientBorder: React.FC<{
  children: React.ReactNode;
  delay?: number;
  gradient?: string;
}> = ({ children, delay = 0, gradient = `linear-gradient(135deg, ${P.blue}, ${P.purple}, ${P.pink})` }) => {
  const frame = useCurrentFrame();
  const p = spring({ frame: frame - delay, fps: 30, config: { damping: 14, mass: 0.5 } });
  const rotate = frame * 0.5;
  return (
    <div style={{
      position: 'relative',
      padding: 2,
      borderRadius: 28,
      background: gradient,
      transform: `rotate(${rotate}deg) scale(${interpolate(p, [0, 1], [0.8, 1])})`,
      opacity: interpolate(p, [0, 1], [0, 1]),
    }}>
      <div style={{
        background: P.bg,
        borderRadius: 26,
        padding: '40px 36px',
      }}>
        {children}
      </div>
    </div>
  );
};

/* ─── TYPEWRITER ────────────────────────────────────────────── */
const Typewriter: React.FC<{
  text: string;
  delay?: number;
  speed?: number;
  fontSize?: number;
  color?: string;
}> = ({ text, delay = 0, speed = 2, fontSize = 28, color = P.muted }) => {
  const frame = useCurrentFrame();
  const f = Math.max(0, frame - delay);
  const chars = Math.floor(f * speed / 30);
  const display = text.slice(0, Math.min(chars, text.length));
  const showCursor = f > 0 && chars < text.length;

  return (
    <div style={{ fontSize, fontFamily: 'monospace', color, letterSpacing: 1 }}>
      {display}
      {showCursor && <span style={{ color: P.blue, opacity: Math.sin(frame * 0.2) > 0 ? 1 : 0 }}>▌</span>}
    </div>
  );
};

/* ─── WAVE BARS ─────────────────────────────────────────────── */
const WaveBars: React.FC<{
  count?: number;
  color?: string;
  delay?: number;
}> = ({ count = 5, color = P.blue, delay = 0 }) => {
  const frame = useCurrentFrame();
  return (
    <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end', height: 40 }}>
      {Array.from({ length: count }, (_, i) => {
        const h = 10 + 30 * Math.abs(Math.sin((frame - delay) * 0.08 + i * 0.7));
        return (
          <div key={i} style={{
            width: 6, height: h, borderRadius: 3,
            background: color,
            transition: 'height 0.1s',
          }} />
        );
      })}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   SCENE 1 — CINEMATIC INTRO
   Morphing orbs + particles + glitch text reveal
   ═══════════════════════════════════════════════════════════════════ */
const Scene1_CinematicIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const zoom = interpolate(frame, [0, 360], [1.2, 1.0]);

  return (
    <AbsoluteFill style={{ background: P.bg, overflow: 'hidden' }}>
      <Particles count={80} color={P.blue} speed={0.2} maxSize={3} />
      {/* Floating orbs */}
      <div style={{ position: 'absolute', left: '15%', top: '20%', opacity: 0.4, transform: `scale(${zoom})` }}>
        <MorphOrb size={400} color1={P.blue} color2={P.purple} speed={0.8} />
      </div>
      <div style={{ position: 'absolute', right: '10%', bottom: '15%', opacity: 0.3, transform: `scale(${zoom * 0.8})` }}>
        <MorphOrb size={300} color1={P.pink} color2={P.cyan} speed={1.2} />
      </div>
      {/* Central content */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
        <GlitchText text="NEXUS" fontSize={120} color={P.text} delay={10} />
        <div style={{ marginTop: 16 }}>
          <GlitchText text="AI PLATFORM" fontSize={48} color={P.blue} delay={20} />
        </div>
        <div style={{ marginTop: 40 }}>
          <Typewriter text="> initializing neural_interface.connect()" delay={40} speed={3} fontSize={22} color={P.cyan} />
        </div>
        <div style={{ marginTop: 20, display: 'flex', gap: 16, opacity: interpolate(frame, [80, 100], [0, 1], { extrapolateRight: 'clamp' }) }}>
          <div style={{ padding: '16px 40px', background: `linear-gradient(135deg, ${P.blue}, ${P.purple})`, borderRadius: 14, fontSize: 22, fontWeight: 700, color: '#fff', fontFamily: 'system-ui' }}>
            Launch Platform
          </div>
          <div style={{ padding: '16px 40px', border: `1px solid ${P.glassBorder}`, borderRadius: 14, fontSize: 22, fontWeight: 500, color: P.text, fontFamily: 'system-ui', background: P.glass, backdropFilter: 'blur(10px)' }}>
            View Docs
          </div>
        </div>
      </div>
      {/* Scan line effect */}
      <div style={{
        position: 'absolute', left: 0, right: 0, height: 2,
        top: `${(frame * 0.8) % 110 - 5}%`,
        background: `linear-gradient(90deg, transparent, ${P.cyan}40, transparent)`,
        opacity: 0.6,
      }} />
    </AbsoluteFill>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   SCENE 2 — BENTO GRID
   Animated bento layout with glassmorphism cards
   ═══════════════════════════════════════════════════════════════════ */
const Scene2_BentoGrid: React.FC = () => (
  <AbsoluteFill style={{ background: P.bg }}>
    <Particles count={30} color={P.purple} speed={0.15} maxSize={2} />
    <div style={{ position: 'absolute', top: 50, left: 80, right: 80 }}>
      <GlitchText text="CAPABILITIES" fontSize={42} color={P.text} delay={0} />
    </div>
    {/* Bento grid */}
    <div style={{
      position: 'absolute', top: 130, left: 80, right: 80, bottom: 60,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridTemplateRows: '1fr 1fr',
      gap: 16,
    }}>
      {/* Large card - top left */}
      <GlassCard delay={5} style={{ gridColumn: '1 / 3', display: 'flex', alignItems: 'center', gap: 32 }}>
        <MorphOrb size={120} color1={P.blue} color2={P.cyan} />
        <div>
          <div style={{ fontSize: 20, color: P.blue, fontFamily: 'system-ui', fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase' }}>Neural Engine</div>
          <div style={{ fontSize: 36, fontWeight: 800, color: P.text, fontFamily: 'system-ui', marginTop: 8 }}>Quantum Processing</div>
          <div style={{ fontSize: 18, color: P.muted, fontFamily: 'system-ui', marginTop: 8 }}>175B parameters, 100T tokens, sub-10ms inference</div>
        </div>
      </GlassCard>
      {/* Stats card - top right */}
      <GlassCard delay={15} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <CountUp to={2000000} suffix="+" delay={20} fontSize={42} color={P.blue} />
        <div style={{ fontSize: 16, color: P.muted, fontFamily: 'system-ui', marginTop: 8 }}>Active Users</div>
        <WaveBars count={7} color={P.blue} delay={30} />
      </GlassCard>
      {/* Code card - bottom left */}
      <GlassCard delay={25} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontSize: 16, color: P.green, fontFamily: 'monospace', marginBottom: 12 }}>// AI Model</div>
        <Typewriter text="model.train(data, epochs=100)" delay={30} speed={4} fontSize={18} color={P.green} />
        <Typewriter text="accuracy: 99.7%" delay={60} speed={4} fontSize={18} color={P.cyan} />
        <Typewriter text="latency: <10ms" delay={90} speed={4} fontSize={18} color={P.amber} />
      </GlassCard>
      {/* Feature cards - bottom middle & right */}
      <GlassCard delay={35} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ fontSize: 48, marginBottom: 8 }}>🔬</div>
        <div style={{ fontSize: 22, fontWeight: 700, color: P.text, fontFamily: 'system-ui' }}>Research</div>
        <div style={{ fontSize: 16, color: P.muted, fontFamily: 'system-ui', marginTop: 4 }}>450+ papers</div>
      </GlassCard>
      <GlassCard delay={45} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ fontSize: 48, marginBottom: 8 }}>⚡</div>
        <div style={{ fontSize: 22, fontWeight: 700, color: P.text, fontFamily: 'system-ui' }}>Speed</div>
        <div style={{ fontSize: 16, color: P.muted, fontFamily: 'system-ui', marginTop: 4 }}>10x faster</div>
      </GlassCard>
    </div>
  </AbsoluteFill>
);

/* ═══════════════════════════════════════════════════════════════════
   SCENE 3 — SPLIT COMPARISON
   Left: dark mode, Right: light mode, with animated divider
   ═══════════════════════════════════════════════════════════════════ */
const Scene3_SplitCompare: React.FC = () => {
  const frame = useCurrentFrame();
  const dividerX = interpolate(frame, [0, 60], [0, 50], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ background: P.bg }}>
      {/* Left side - Dark */}
      <div style={{ position: 'absolute', left: 0, top: 0, width: '50%', height: '100%', background: '#0a0a0f', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 60px' }}>
          <div style={{ fontSize: 18, color: P.blue, fontFamily: 'system-ui', fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 12 }}>DARK MODE</div>
          <div style={{ fontSize: 44, fontWeight: 800, color: P.text, fontFamily: 'system-ui', lineHeight: 1.1 }}>
            Midnight<br /><span style={{ color: P.blue }}>Interface</span>
          </div>
          <div style={{ fontSize: 18, color: P.muted, fontFamily: 'system-ui', marginTop: 16, lineHeight: 1.6 }}>
            Deep blacks with vibrant accent colors. Zero eye strain for extended sessions.
          </div>
          <div style={{ marginTop: 24 }}>
            <WaveBars count={12} color={P.blue} />
          </div>
        </div>
      </div>
      {/* Right side - Light */}
      <div style={{ position: 'absolute', right: 0, top: 0, width: '50%', height: '100%', background: '#f8fafc', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 60px' }}>
          <div style={{ fontSize: 18, color: '#6366f1', fontFamily: 'system-ui', fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 12 }}>LIGHT MODE</div>
          <div style={{ fontSize: 44, fontWeight: 800, color: '#0f172a', fontFamily: 'system-ui', lineHeight: 1.1 }}>
            Clean<br /><span style={{ color: '#6366f1' }}>Clarity</span>
          </div>
          <div style={{ fontSize: 18, color: '#64748b', fontFamily: 'system-ui', marginTop: 16, lineHeight: 1.6 }}>
            Crisp whites with deep indigo accents. Maximum readability in bright environments.
          </div>
          <div style={{ marginTop: 24 }}>
            <WaveBars count={12} color="#6366f1" />
          </div>
        </div>
      </div>
      {/* Animated divider */}
      <div style={{
        position: 'absolute',
        left: `${dividerX}%`,
        top: 0,
        bottom: 0,
        width: 4,
        background: `linear-gradient(180deg, ${P.blue}, ${P.purple}, ${P.pink})`,
        boxShadow: `0 0 20px ${P.blue}60`,
        transform: 'translateX(-50%)',
        zIndex: 10,
      }} />
      {/* VS badge */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: 64, height: 64,
        borderRadius: '50%',
        background: P.bg,
        border: `2px solid ${P.blue}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 20, fontWeight: 800, color: P.blue, fontFamily: 'system-ui',
        zIndex: 11,
        boxShadow: `0 0 30px ${P.blue}40`,
      }}>VS</div>
    </AbsoluteFill>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   SCENE 4 — 3D PERSPECTIVE CARDS
   Floating cards with 3D rotation
   ═══════════════════════════════════════════════════════════════════ */
const Scene4_3DCards: React.FC = () => {
  const frame = useCurrentFrame();
  const cards = [
    { title: 'Analytics', color: P.blue, icon: '📊', x: -380, y: -60, rot: -8 },
    { title: 'Security', color: P.green, icon: '🛡️', x: 0, y: -80, rot: 0 },
    { title: 'Deploy', color: P.purple, icon: '🚀', x: 380, y: -60, rot: 8 },
  ];

  return (
    <AbsoluteFill style={{ background: P.bg, perspective: 1200 }}>
      <Particles count={40} color={P.cyan} speed={0.1} maxSize={2} />
      <div style={{ position: 'absolute', top: 50, left: 0, right: 0, textAlign: 'center' }}>
        <GlitchText text="ECOSYSTEM" fontSize={42} color={P.text} delay={0} />
      </div>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', transformStyle: 'preserve-3d' }}>
        {cards.map((c, i) => {
          const p = spring({ frame: frame - 15 - i * 10, fps: 30, config: { damping: 12, mass: 0.6 } });
          const hover = Math.sin(frame * 0.03 + i) * 5;
          return (
            <div key={i} style={{
              position: 'absolute',
              left: `calc(50% + ${c.x}px)`,
              top: `calc(50% + ${c.y + hover}px)`,
              width: 280, height: 340,
              transform: `translate(-50%, -50%) rotateY(${c.rot}deg) rotateX(${hover}deg) scale(${interpolate(p, [0, 1], [0.5, 1])})`,
              opacity: interpolate(p, [0, 1], [0, 1]),
              transformStyle: 'preserve-3d',
            }}>
              <div style={{
                width: '100%', height: '100%',
                background: P.glass,
                backdropFilter: 'blur(20px)',
                border: `1px solid ${c.color}30`,
                borderRadius: 24,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                boxShadow: `0 20px 60px rgba(0,0,0,0.4), 0 0 40px ${c.color}15`,
              }}>
                <div style={{ fontSize: 56, marginBottom: 16 }}>{c.icon}</div>
                <div style={{ fontSize: 26, fontWeight: 800, color: P.text, fontFamily: 'system-ui' }}>{c.title}</div>
                <div style={{ fontSize: 16, color: P.muted, fontFamily: 'system-ui', marginTop: 8 }}>Enterprise-grade</div>
                <div style={{ marginTop: 20, padding: '10px 28px', background: `${c.color}20`, border: `1px solid ${c.color}40`, borderRadius: 10, fontSize: 16, fontWeight: 600, color: c.color, fontFamily: 'system-ui' }}>
                  Explore →
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   SCENE 5 — ANIMATED STATS DASHBOARD
   Count-up numbers + animated charts
   ═══════════════════════════════════════════════════════════════════ */
const Scene5_Dashboard: React.FC = () => {
  const frame = useCurrentFrame();
  const barHeights = [65, 80, 45, 90, 70, 55, 85, 60, 75, 95, 50, 88];

  return (
    <AbsoluteFill style={{ background: P.bg }}>
      <Particles count={20} color={P.green} speed={0.1} maxSize={2} />
      <div style={{ position: 'absolute', top: 50, left: 80, right: 80 }}>
        <GlitchText text="ANALYTICS" fontSize={42} color={P.text} delay={0} />
      </div>
      {/* Stats row */}
      <div style={{ position: 'absolute', top: 130, left: 80, right: 80, display: 'flex', gap: 20 }}>
        {[
          { label: 'Revenue', value: 4200000, prefix: '$', suffix: '', color: P.green },
          { label: 'Users', value: 2000000, suffix: '+', color: P.blue },
          { label: 'Growth', value: 340, suffix: '%', color: P.purple },
          { label: 'Uptime', value: 99, suffix: '.99%', color: P.cyan },
        ].map((s, i) => (
          <GlassCard key={i} delay={10 + i * 8} style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ fontSize: 14, color: P.muted, fontFamily: 'system-ui', textTransform: 'uppercase', letterSpacing: 2 }}>{s.label}</div>
            <CountUp to={s.value} prefix={s.prefix} suffix={s.suffix} delay={20 + i * 8} fontSize={36} color={s.color} />
          </GlassCard>
        ))}
      </div>
      {/* Bar chart */}
      <div style={{ position: 'absolute', bottom: 80, left: 80, right: 80, height: 320 }}>
        <GlassCard delay={50} style={{ height: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', padding: '30px 40px' }}>
          {barHeights.map((h, i) => {
            const p = spring({ frame: frame - 60 - i * 3, fps: 30, config: { damping: 14, mass: 0.5 } });
            const barH = h * 2.2 * p;
            return (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <div style={{
                  width: 36, height: barH, borderRadius: 8,
                  background: `linear-gradient(180deg, ${P.blue}, ${P.purple})`,
                  boxShadow: `0 0 20px ${P.blue}30`,
                }} />
                <div style={{ fontSize: 12, color: P.muted, fontFamily: 'system-ui' }}>M{i + 1}</div>
              </div>
            );
          })}
        </GlassCard>
      </div>
    </AbsoluteFill>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   SCENE 6 — GRADIENT MESH BACKGROUND
   Animated gradient with floating elements
   ═══════════════════════════════════════════════════════════════════ */
const Scene6_GradientMesh: React.FC = () => {
  const frame = useCurrentFrame();
  const r1 = 30 + 20 * Math.sin(frame * 0.015);
  const r2 = 40 + 15 * Math.cos(frame * 0.02);

  return (
    <AbsoluteFill style={{ background: P.bg, overflow: 'hidden' }}>
      {/* Animated gradient blobs */}
      <div style={{
        position: 'absolute', width: 800, height: 800, borderRadius: '50%',
        background: `radial-gradient(circle, ${P.blue}30, transparent 70%)`,
        left: `${20 + Math.sin(frame * 0.01) * 10}%`,
        top: `${10 + Math.cos(frame * 0.012) * 10}%`,
        filter: 'blur(60px)',
      }} />
      <div style={{
        position: 'absolute', width: 600, height: 600, borderRadius: '50%',
        background: `radial-gradient(circle, ${P.pink}25, transparent 70%)`,
        right: `${15 + Math.cos(frame * 0.008) * 10}%`,
        bottom: `${15 + Math.sin(frame * 0.01) * 10}%`,
        filter: 'blur(50px)',
      }} />
      <div style={{
        position: 'absolute', width: 500, height: 500, borderRadius: '50%',
        background: `radial-gradient(circle, ${P.purple}20, transparent 70%)`,
        left: `${50 + Math.sin(frame * 0.013) * 8}%`,
        top: `${50 + Math.cos(frame * 0.009) * 8}%`,
        filter: 'blur(40px)',
      }} />
      {/* Content */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
        <GradientBorder delay={10}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 18, color: P.purple, fontFamily: 'system-ui', fontWeight: 700, letterSpacing: 5, textTransform: 'uppercase' }}>Premium Design</div>
            <div style={{ fontSize: 48, fontWeight: 800, color: P.text, fontFamily: 'system-ui', marginTop: 12 }}>Gradient Mesh</div>
            <div style={{ fontSize: 18, color: P.muted, fontFamily: 'system-ui', marginTop: 12, maxWidth: 400, lineHeight: 1.6 }}>
              Dynamic color surfaces that respond to user interaction and data flow.
            </div>
          </div>
        </GradientBorder>
        <div style={{ marginTop: 40, display: 'flex', gap: 16 }}>
          {['Glassmorphism', 'Neumorphism', 'Aurora'].map((style, i) => (
            <div key={i} style={{
              padding: '12px 24px', background: P.glass, backdropFilter: 'blur(10px)',
              border: `1px solid ${P.glassBorder}`, borderRadius: 12,
              fontSize: 16, fontWeight: 600, color: P.text, fontFamily: 'system-ui',
            }}>{style}</div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   SCENE 7 — CINEMATIC CTA
   Full screen with morphing background + big CTA
   ═══════════════════════════════════════════════════════════════════ */
const Scene7_CinematicCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = 0.97 + 0.03 * Math.sin(frame * 0.1);
  const glowIntensity = 20 + 15 * Math.sin(frame * 0.05);

  return (
    <AbsoluteFill style={{ background: P.bg, overflow: 'hidden' }}>
      <Particles count={100} color={P.blue} speed={0.3} maxSize={3} />
      {/* Large morphing orb in background */}
      <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', opacity: 0.2 }}>
        <MorphOrb size={800} color1={P.blue} color2={P.purple} speed={0.5} />
      </div>
      {/* Content */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
        <GlitchText text="THE FUTURE" fontSize={96} color={P.text} delay={5} />
        <div style={{ marginTop: 8 }}>
          <GlitchText text="IS HERE" fontSize={96} color={P.blue} delay={15} />
        </div>
        <div style={{ marginTop: 32, opacity: interpolate(frame, [40, 60], [0, 1], { extrapolateRight: 'clamp' }) }}>
          <div style={{ fontSize: 24, color: P.muted, fontFamily: 'system-ui', textAlign: 'center', maxWidth: 600, lineHeight: 1.6 }}>
            Join the next generation of builders. Ship faster, scale infinitely, innovate fearlessly.
          </div>
        </div>
        <div style={{ marginTop: 48, display: 'flex', gap: 20, opacity: interpolate(frame, [60, 80], [0, 1], { extrapolateRight: 'clamp' }) }}>
          <div style={{
            padding: '20px 56px',
            background: `linear-gradient(135deg, ${P.blue}, ${P.purple})`,
            borderRadius: 16, fontSize: 24, fontWeight: 700, color: '#fff', fontFamily: 'system-ui',
            transform: `scale(${pulse})`,
            boxShadow: `0 0 ${glowIntensity}px ${P.blue}60, 0 10px 40px rgba(0,0,0,0.3)`,
          }}>
            Start Building →
          </div>
        </div>
        <div style={{ marginTop: 24, display: 'flex', gap: 32, opacity: interpolate(frame, [80, 100], [0, 1], { extrapolateRight: 'clamp' }) }}>
          {['No credit card', 'Free tier', 'Cancel anytime'].map((t, i) => (
            <div key={i} style={{ fontSize: 16, color: P.muted, fontFamily: 'system-ui', display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 6, height: 6, borderRadius: 3, background: P.green }} />{t}
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   CINEMATIC SHOWCASE — 7 scenes × 12s = 84s
   Advanced effects: glitch, particles, morphing, glass, 3D, charts
   ═══════════════════════════════════════════════════════════════════ */
const CinematicShowcase: React.FC = () => {
  const S = 360;
  const scenes = [
    Scene1_CinematicIntro,
    Scene2_BentoGrid,
    Scene3_SplitCompare,
    Scene4_3DCards,
    Scene5_Dashboard,
    Scene6_GradientMesh,
    Scene7_CinematicCTA,
  ];
  return (
    <AbsoluteFill style={{ background: P.bg }}>
      {scenes.map((Scene, i) => (
        <Sequence key={i} from={i * S} durationInFrames={S}>
          <Scene />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export { CinematicShowcase };
