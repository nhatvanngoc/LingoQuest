import { registerRoot, Composition } from 'remotion';
import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  interpolate,
  Video,
  staticFile,
  spring,
} from 'remotion';

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

/* ─── REAL FOOTAGE (all from Pexels, AI/Tech themed) ─────────── */
const footage = {
  server: staticFile('footage/ai-tech/s1-server.mp4'),       // data center / server room
  hologram: staticFile('footage/ai-tech/s2-hologram.mp4'),   // hologram tech
  coding: staticFile('footage/ai-tech/s3-coding.mp4'),       // coding screen
  city: staticFile('footage/ai-tech/s4-city.mp4'),           // smart city night
  robot: staticFile('footage/ai-tech/s5-robot.mp4'),         // robot hand + human
  abstract: staticFile('footage/ai-tech/s6-abstract.mp4'),   // futuristic tech bg
  ml: staticFile('footage/ai-tech/s7-ml.mp4'),               // machine learning
};

/* ─── VIDEO (no loop — footage must be longer than scene) ─────── */
const Vid: React.FC<{ src: any; style?: React.CSSProperties; opacity?: number }> = ({ src, style, opacity = 1 }) => (
  <Video src={src} muted style={{ width: '100%', height: '100%', objectFit: 'cover', ...style, opacity }} />
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
   SCENE 1 — FULL BLEED: Server Room (data center)
   Real footage: server racks, blinking lights
   ═══════════════════════════════════════════════════════════════════ */
const Scene1_ServerIntro: React.FC = () => (
  <AbsoluteFill>
    <Vid src={footage.server} />
    <div style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(135deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.2) 100%)',
    }} />
    <div style={{ position: 'absolute', left: 80, bottom: 120, width: '55%' }}>
      <FadeUp delay={5}>
        <div style={{ fontSize: 28, color: P.blue, fontFamily: 'system-ui', fontWeight: 700, letterSpacing: 6, textTransform: 'uppercase' }}>
          AI Infrastructure
        </div>
      </FadeUp>
      <FadeUp delay={15} style={{ marginTop: 12 }}>
        <div style={{ fontSize: 72, fontWeight: 800, color: P.text, fontFamily: 'system-ui', lineHeight: 1.1 }}>
          The Backbone of<br />
          <span style={{ color: P.blue }}>Modern AI</span>
        </div>
      </FadeUp>
      <FadeUp delay={25} style={{ marginTop: 20 }}>
        <div style={{ fontSize: 32, color: '#ccc', fontFamily: 'system-ui', maxWidth: 600, lineHeight: 1.5 }}>
          Thousands of GPU servers powering the next generation of intelligent applications.
        </div>
      </FadeUp>
      <FadeUp delay={35} style={{ marginTop: 32 }}>
        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ padding: '18px 48px', background: P.blue, borderRadius: 30, fontSize: 28, fontWeight: 700, color: '#fff', fontFamily: 'system-ui' }}>
            Explore Now
          </div>
          <div style={{ padding: '18px 40px', border: `2px solid ${P.border}`, borderRadius: 30, fontSize: 28, fontWeight: 500, color: P.text, fontFamily: 'system-ui' }}>
            Learn More
          </div>
        </div>
      </FadeUp>
    </div>
  </AbsoluteFill>
);

/* ═══════════════════════════════════════════════════════════════════
   SCENE 2 — SPLIT LAYOUT: Left text + Right Hologram video
   Real footage: holographic technology display
   ═══════════════════════════════════════════════════════════════════ */
const Scene2_HologramSplit: React.FC = () => (
  <AbsoluteFill style={{ background: P.bg }}>
    {/* Right video panel */}
    <div style={{ position: 'absolute', right: 0, top: 0, width: '55%', height: '100%', overflow: 'hidden' }}>
      <Vid src={footage.hologram} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(7,11,20,1) 0%, rgba(7,11,20,0.3) 30%, transparent 100%)' }} />
    </div>
    {/* Left text panel */}
    <div style={{ position: 'absolute', left: 80, top: '50%', transform: 'translateY(-50%)', width: '40%' }}>
      <FadeUp delay={5}>
        <div style={{ fontSize: 28, color: P.cyan, fontFamily: 'system-ui', fontWeight: 700, letterSpacing: 5, textTransform: 'uppercase' }}>Visualization</div>
      </FadeUp>
      <FadeUp delay={15} style={{ marginTop: 12 }}>
        <div style={{ fontSize: 56, fontWeight: 800, color: P.text, fontFamily: 'system-ui', lineHeight: 1.1 }}>
          See Your Data<br /><span style={{ color: P.cyan }}>Come Alive</span>
        </div>
      </FadeUp>
      <FadeUp delay={25} style={{ marginTop: 24 }}>
        <div style={{ fontSize: 28, color: P.muted, fontFamily: 'system-ui', lineHeight: 1.6 }}>
          Real-time 3D holographic rendering of complex neural networks and data flows.
        </div>
      </FadeUp>
      <FadeUp delay={35} style={{ marginTop: 32 }}>
        <div style={{ padding: '16px 40px', background: P.cyan, borderRadius: 28, fontSize: 26, fontWeight: 700, color: '#000', fontFamily: 'system-ui', display: 'inline-block' }}>
          Try Demo
        </div>
      </FadeUp>
    </div>
  </AbsoluteFill>
);

/* ═══════════════════════════════════════════════════════════════════
   SCENE 3 — CENTER CARD: Coding screen footage + floating stats
   Real footage: developer typing code
   ═══════════════════════════════════════════════════════════════════ */
const Scene3_CodeCenter: React.FC = () => {
  const stats = [
    { label: 'Languages', value: '50+', color: P.blue, x: -340, y: -140 },
    { label: 'Developers', value: '2M+', color: P.green, x: 340, y: -140 },
    { label: 'Commits/day', value: '1.2B', color: P.purple, x: -340, y: 160 },
    { label: 'Uptime', value: '99.99%', color: P.amber, x: 340, y: 160 },
  ];
  return (
    <AbsoluteFill style={{ background: P.bg }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      {/* Center video card */}
      <PopIn delay={0} style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: 520, height: 320, borderRadius: 20, overflow: 'hidden', border: `3px solid ${P.green}50`, boxShadow: '0 20px 80px rgba(34,197,94,0.15)' }}>
        <Vid src={footage.coding} />
      </PopIn>
      <FadeUp delay={5} style={{ position: 'absolute', left: '50%', top: 120, transform: 'translateX(-50%)', textAlign: 'center' }}>
        <div style={{ fontSize: 28, color: P.green, fontFamily: 'system-ui', fontWeight: 700, letterSpacing: 5, textTransform: 'uppercase' }}>Development</div>
        <div style={{ fontSize: 44, fontWeight: 800, color: P.text, fontFamily: 'system-ui', marginTop: 8 }}>Code Smarter, Ship Faster</div>
      </FadeUp>
      {stats.map((s, i) => (
        <PopIn key={i} delay={15 + i * 8} style={{
          position: 'absolute', left: `calc(50% + ${s.x}px)`, top: `calc(50% + ${s.y}px)`,
          transform: 'translate(-50%, -50%)', width: 200, padding: '24px 20px', textAlign: 'center',
          background: P.card, borderRadius: 16, border: `2px solid ${s.color}40`,
        }}>
          <div style={{ fontSize: 44, fontWeight: 800, color: s.color, fontFamily: 'system-ui' }}>{s.value}</div>
          <div style={{ fontSize: 24, color: P.muted, fontFamily: 'system-ui', marginTop: 6 }}>{s.label}</div>
        </PopIn>
      ))}
    </AbsoluteFill>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   SCENE 4 — DIAGONAL: Robot hand + human hand
   Real footage: collaborative robotics
   ═══════════════════════════════════════════════════════════════════ */
const Scene4_RobotDiagonal: React.FC = () => (
  <AbsoluteFill style={{ background: P.bg }}>
    <div style={{
      position: 'absolute', top: 0, left: 0, width: '60%', height: '100%',
      clipPath: 'polygon(0 0, 100% 0, 50% 100%, 0 100%)', overflow: 'hidden',
    }}>
      <Vid src={footage.robot} />
    </div>
    <div style={{ position: 'absolute', right: 80, top: '50%', transform: 'translateY(-50%)', width: '42%' }}>
      <FadeUp delay={10}>
        <div style={{ fontSize: 28, color: P.purple, fontFamily: 'system-ui', fontWeight: 700, letterSpacing: 5, textTransform: 'uppercase' }}>Collaboration</div>
      </FadeUp>
      <FadeUp delay={18} style={{ marginTop: 12 }}>
        <div style={{ fontSize: 56, fontWeight: 800, color: P.text, fontFamily: 'system-ui', lineHeight: 1.1 }}>
          Human Meets<br /><span style={{ color: P.purple }}>Machine</span>
        </div>
      </FadeUp>
      <FadeUp delay={28} style={{ marginTop: 24 }}>
        <div style={{ fontSize: 28, color: P.muted, fontFamily: 'system-ui', lineHeight: 1.6 }}>
          AI-powered cobots working alongside humans to achieve 10x productivity gains.
        </div>
        <div style={{ fontSize: 24, color: P.purple, fontFamily: 'system-ui', marginTop: 12 }}>— Industry 5.0 Report</div>
      </FadeUp>
    </div>
    <div style={{
      position: 'absolute', top: 0, left: '35%', width: 3, height: '100%',
      background: `linear-gradient(180deg, transparent, ${P.purple}, transparent)`,
      transform: 'skewX(-20deg)', opacity: 0.3,
    }} />
  </AbsoluteFill>
);

/* ═══════════════════════════════════════════════════════════════════
   SCENE 5 — GLASS OVERLAY: Smart city + glass card with stats
   Real footage: futuristic smart city at night
   ═══════════════════════════════════════════════════════════════════ */
const Scene5_CityStats: React.FC = () => (
  <AbsoluteFill>
    <Vid src={footage.city} />
    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)' }} />
    <PopIn delay={5} style={{
      position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
      width: 720, padding: '50px 60px', background: 'rgba(18,32,58,0.85)',
      backdropFilter: 'blur(20px)', borderRadius: 32, border: `1px solid ${P.border}`,
      boxShadow: '0 30px 80px rgba(0,0,0,0.4)',
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 28, color: P.amber, fontFamily: 'system-ui', fontWeight: 700, letterSpacing: 5, textTransform: 'uppercase' }}>Smart Cities</div>
        <div style={{ fontSize: 48, fontWeight: 800, color: P.text, fontFamily: 'system-ui', marginTop: 12 }}>
          AI at Urban Scale
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 48, marginTop: 40 }}>
          {[
            { v: '40%', l: 'Less Traffic', c: P.cyan },
            { v: '24/7', l: 'Monitoring', c: P.green },
            { v: '60%', l: 'Energy Saved', c: P.amber },
          ].map((s, i) => (
            <PopIn key={i} delay={20 + i * 8}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 48, fontWeight: 800, color: s.c, fontFamily: 'system-ui' }}>{s.v}</div>
                <div style={{ fontSize: 24, color: P.muted, fontFamily: 'system-ui', marginTop: 4 }}>{s.l}</div>
              </div>
            </PopIn>
          ))}
        </div>
        <div style={{ marginTop: 36 }}>
          <ScaleBar target={92} delay={40} color={P.amber} />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
            <span style={{ fontSize: 22, color: P.muted, fontFamily: 'system-ui' }}>Efficiency Score</span>
            <span style={{ fontSize: 22, color: P.amber, fontFamily: 'system-ui' }}>92/100</span>
          </div>
        </div>
      </div>
    </PopIn>
  </AbsoluteFill>
);

/* ═══════════════════════════════════════════════════════════════════
   SCENE 6 — SIDE BY SIDE: Abstract + ML footage, 2-column
   Real footage: abstract tech + machine learning visualization
   ═══════════════════════════════════════════════════════════════════ */
const Scene6_SideBySide: React.FC = () => (
  <AbsoluteFill style={{ background: P.bg }}>
    <FadeUp delay={0} style={{ position: 'absolute', top: 60, left: '50%', transform: 'translateX(-50%)', textAlign: 'center', zIndex: 10 }}>
      <div style={{ fontSize: 28, color: P.pink, fontFamily: 'system-ui', fontWeight: 700, letterSpacing: 5, textTransform: 'uppercase' }}>Powering Innovation</div>
      <div style={{ fontSize: 48, fontWeight: 800, color: P.text, fontFamily: 'system-ui', marginTop: 8 }}>Two Worlds, One Platform</div>
    </FadeUp>
    {/* Left video */}
    <PopIn delay={10} style={{ position: 'absolute', left: 60, top: 180, width: 860, height: 440, borderRadius: 20, overflow: 'hidden', border: `2px solid ${P.pink}40` }}>
      <Vid src={footage.abstract} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '30px 24px 20px', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
        <div style={{ fontSize: 28, fontWeight: 700, color: P.pink, fontFamily: 'system-ui' }}>Quantum Computing</div>
        <div style={{ fontSize: 22, color: P.muted, fontFamily: 'system-ui', marginTop: 4 }}>Processing at subatomic scale</div>
      </div>
    </PopIn>
    {/* Right video */}
    <PopIn delay={20} style={{ position: 'absolute', right: 60, top: 180, width: 860, height: 440, borderRadius: 20, overflow: 'hidden', border: `2px solid ${P.cyan}40` }}>
      <Vid src={footage.ml} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '30px 24px 20px', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
        <div style={{ fontSize: 28, fontWeight: 700, color: P.cyan, fontFamily: 'system-ui' }}>Machine Learning</div>
        <div style={{ fontSize: 22, color: P.muted, fontFamily: 'system-ui', marginTop: 4 }}>Self-improving algorithms</div>
      </div>
    </PopIn>
    {/* Bottom labels */}
    <div style={{ position: 'absolute', bottom: 50, left: 60, right: 60, display: 'flex', justifyContent: 'center', gap: 40 }}>
      {['Quantum + AI = Future', 'Open Source', 'Edge Computing'].map((f, i) => (
        <PopIn key={i} delay={35 + i * 6} style={{
          padding: '14px 28px', background: P.card, borderRadius: 12,
          border: `1px solid ${P.border}`, fontSize: 24, fontWeight: 600,
          color: P.text, fontFamily: 'system-ui', textAlign: 'center',
        }}>
          {f}
        </PopIn>
      ))}
    </div>
  </AbsoluteFill>
);

/* ═══════════════════════════════════════════════════════════════════
   SCENE 7 — HERO CTA: Full bleed server + big CTA
   Real footage: server room (reprise with different treatment)
   ═══════════════════════════════════════════════════════════════════ */
const Scene7_CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = 0.95 + 0.05 * Math.sin(frame * 0.08);
  return (
    <AbsoluteFill>
      <Vid src={footage.server} style={{ filter: 'brightness(0.4) saturate(1.3)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <FadeUp delay={0}>
          <div style={{ fontSize: 28, color: P.blue, fontFamily: 'system-ui', fontWeight: 700, letterSpacing: 8, textTransform: 'uppercase' }}>Ready to Transform?</div>
        </FadeUp>
        <FadeUp delay={12} style={{ marginTop: 16 }}>
          <div style={{ fontSize: 80, fontWeight: 900, color: P.text, fontFamily: 'system-ui', textAlign: 'center', lineHeight: 1.1 }}>
            Start Building<br />with <span style={{ color: P.blue }}>AI Today</span>
          </div>
        </FadeUp>
        <FadeUp delay={24} style={{ marginTop: 28 }}>
          <div style={{ fontSize: 30, color: P.muted, fontFamily: 'system-ui', textAlign: 'center', maxWidth: 600, lineHeight: 1.5 }}>
            Join 2 million developers building the future with our platform.
          </div>
        </FadeUp>
        <FadeUp delay={36} style={{ marginTop: 40 }}>
          <div style={{ display: 'flex', gap: 20, transform: `scale(${pulse})` }}>
            <div style={{ padding: '22px 64px', background: P.blue, borderRadius: 32, fontSize: 32, fontWeight: 700, color: '#fff', fontFamily: 'system-ui', boxShadow: `0 0 40px ${P.blue}40` }}>
              Get Started Free
            </div>
          </div>
        </FadeUp>
        <FadeUp delay={48} style={{ marginTop: 24 }}>
          <div style={{ fontSize: 24, color: P.muted, fontFamily: 'system-ui' }}>No credit card required</div>
        </FadeUp>
      </div>
    </AbsoluteFill>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   AI TECH SHOWCASE — 7 scenes × 12s = 84s
   Every scene has real Pexels footage matching the AI/Tech topic
   ═══════════════════════════════════════════════════════════════════ */
const AITechShowcase: React.FC = () => {
  const S = 360; // 12s per scene
  const scenes = [
    Scene1_ServerIntro,
    Scene2_HologramSplit,
    Scene3_CodeCenter,
    Scene4_RobotDiagonal,
    Scene5_CityStats,
    Scene6_SideBySide,
    Scene7_CTA,
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

export { AITechShowcase };
