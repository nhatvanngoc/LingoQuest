import { registerRoot, Composition } from 'remotion';
import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Img,
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

/* ─── IMAGES (all from Pexels, AI/Tech themed) ────────────────── */
const images = {
  ai: staticFile('images/ai-tech/artificial-intelligence-brain.jpg'),
  robot: staticFile('images/ai-tech/robot-technology.jpg'),
  server: staticFile('images/ai-tech/server-room-data-center.jpg'),
  code: staticFile('images/ai-tech/code-programming.jpg'),
  neural: staticFile('images/ai-tech/neural-network-abstract.jpg'),
  city: staticFile('images/ai-tech/smart-city-futuristic.jpg'),
  chip: staticFile('images/ai-tech/machine-learning-chip.jpg'),
};

/* ─── KEN BURNS IMAGE ─────────────────────────────────────────── */
const KenBurns: React.FC<{
  src: string;
  fromScale?: number;
  toScale?: number;
  fromX?: number;
  toX?: number;
  fromY?: number;
  toY?: number;
  style?: React.CSSProperties;
}> = ({ src, fromScale = 1.0, toScale = 1.15, fromX = 0, toX = -20, fromY = 0, toY = -10, style }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const scale = interpolate(frame, [0, durationInFrames], [fromScale, toScale]);
  const x = interpolate(frame, [0, durationInFrames], [fromX, toX]);
  const y = interpolate(frame, [0, durationInFrames], [fromY, toY]);
  return (
    <div style={{ position: 'absolute', inset: -60, overflow: 'hidden', ...style }}>
      <Img src={src} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${scale}) translate(${x}px, ${y}px)` }} />
    </div>
  );
};

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
   SCENE 1 — FULL BLEED: AI Brain image with Ken Burns zoom-in
   ═══════════════════════════════════════════════════════════════════ */
const Scene1_AIBrain: React.FC = () => (
  <AbsoluteFill>
    <KenBurns src={images.ai} fromScale={1.0} toScale={1.2} fromX={0} toX={-30} fromY={0} toY={-15} />
    <div style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
    }} />
    <div style={{ position: 'absolute', left: 80, bottom: 120, width: '55%' }}>
      <FadeUp delay={5}>
        <div style={{ fontSize: 28, color: P.blue, fontFamily: 'system-ui', fontWeight: 700, letterSpacing: 6, textTransform: 'uppercase' }}>
          Artificial Intelligence
        </div>
      </FadeUp>
      <FadeUp delay={15} style={{ marginTop: 12 }}>
        <div style={{ fontSize: 72, fontWeight: 800, color: P.text, fontFamily: 'system-ui', lineHeight: 1.1 }}>
          The Power of<br />
          <span style={{ color: P.blue }}>Machine Learning</span>
        </div>
      </FadeUp>
      <FadeUp delay={25} style={{ marginTop: 20 }}>
        <div style={{ fontSize: 32, color: '#ccc', fontFamily: 'system-ui', maxWidth: 600, lineHeight: 1.5 }}>
          Neural networks that learn, adapt, and solve problems beyond human capability.
        </div>
      </FadeUp>
      <FadeUp delay={35} style={{ marginTop: 32 }}>
        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ padding: '18px 48px', background: P.blue, borderRadius: 30, fontSize: 28, fontWeight: 700, color: '#fff', fontFamily: 'system-ui' }}>
            Explore AI
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
   SCENE 2 — SPLIT: Robot image right, text left
   ═══════════════════════════════════════════════════════════════════ */
const Scene2_RobotSplit: React.FC = () => (
  <AbsoluteFill style={{ background: P.bg }}>
    <div style={{ position: 'absolute', right: 0, top: 0, width: '55%', height: '100%', overflow: 'hidden' }}>
      <KenBurns src={images.robot} fromScale={1.0} toScale={1.1} fromX={10} toX={-10} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(7,11,20,1) 0%, rgba(7,11,20,0.2) 40%, transparent 100%)' }} />
    </div>
    <div style={{ position: 'absolute', left: 80, top: '50%', transform: 'translateY(-50%)', width: '40%' }}>
      <FadeUp delay={5}>
        <div style={{ fontSize: 28, color: P.cyan, fontFamily: 'system-ui', fontWeight: 700, letterSpacing: 5, textTransform: 'uppercase' }}>Robotics</div>
      </FadeUp>
      <FadeUp delay={15} style={{ marginTop: 12 }}>
        <div style={{ fontSize: 56, fontWeight: 800, color: P.text, fontFamily: 'system-ui', lineHeight: 1.1 }}>
          Humanoid<br /><span style={{ color: P.cyan }}>Robots</span>
        </div>
      </FadeUp>
      <FadeUp delay={25} style={{ marginTop: 24 }}>
        <div style={{ fontSize: 28, color: P.muted, fontFamily: 'system-ui', lineHeight: 1.6 }}>
          Next-gen robotics powered by deep reinforcement learning and computer vision.
        </div>
      </FadeUp>
      <FadeUp delay={35} style={{ marginTop: 32 }}>
        <div style={{ padding: '16px 40px', background: P.cyan, borderRadius: 28, fontSize: 26, fontWeight: 700, color: '#000', fontFamily: 'system-ui', display: 'inline-block' }}>
          See Demo
        </div>
      </FadeUp>
    </div>
  </AbsoluteFill>
);

/* ═══════════════════════════════════════════════════════════════════
   SCENE 3 — CENTER CARD: Server room + floating stats
   ═══════════════════════════════════════════════════════════════════ */
const Scene3_ServerStats: React.FC = () => {
  const stats = [
    { label: 'GPU Nodes', value: '10K+', color: P.blue, x: -340, y: -140 },
    { label: 'Models', value: '500+', color: P.green, x: 340, y: -140 },
    { label: 'Inference', value: '<10ms', color: P.purple, x: -340, y: 160 },
    { label: 'Uptime', value: '99.99%', color: P.amber, x: 340, y: 160 },
  ];
  return (
    <AbsoluteFill style={{ background: P.bg }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <PopIn delay={0} style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: 520, height: 320, borderRadius: 20, overflow: 'hidden', border: `3px solid ${P.green}50`, boxShadow: '0 20px 80px rgba(34,197,94,0.15)' }}>
        <KenBurns src={images.server} fromScale={1.05} toScale={1.15} />
      </PopIn>
      <FadeUp delay={5} style={{ position: 'absolute', left: '50%', top: 120, transform: 'translateX(-50%)', textAlign: 'center' }}>
        <div style={{ fontSize: 28, color: P.green, fontFamily: 'system-ui', fontWeight: 700, letterSpacing: 5, textTransform: 'uppercase' }}>Infrastructure</div>
        <div style={{ fontSize: 44, fontWeight: 800, color: P.text, fontFamily: 'system-ui', marginTop: 8 }}>Built for Scale</div>
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
   SCENE 4 — DIAGONAL: Code image
   ═══════════════════════════════════════════════════════════════════ */
const Scene4_CodeDiagonal: React.FC = () => (
  <AbsoluteFill style={{ background: P.bg }}>
    <div style={{
      position: 'absolute', top: 0, left: 0, width: '60%', height: '100%',
      clipPath: 'polygon(0 0, 100% 0, 50% 100%, 0 100%)', overflow: 'hidden',
    }}>
      <KenBurns src={images.code} fromScale={1.0} toScale={1.12} fromX={0} toX={-15} />
    </div>
    <div style={{ position: 'absolute', right: 80, top: '50%', transform: 'translateY(-50%)', width: '42%' }}>
      <FadeUp delay={10}>
        <div style={{ fontSize: 28, color: P.purple, fontFamily: 'system-ui', fontWeight: 700, letterSpacing: 5, textTransform: 'uppercase' }}>Development</div>
      </FadeUp>
      <FadeUp delay={18} style={{ marginTop: 12 }}>
        <div style={{ fontSize: 56, fontWeight: 800, color: P.text, fontFamily: 'system-ui', lineHeight: 1.1 }}>
          Code the<br /><span style={{ color: P.purple }}>Future</span>
        </div>
      </FadeUp>
      <FadeUp delay={28} style={{ marginTop: 24 }}>
        <div style={{ fontSize: 28, color: P.muted, fontFamily: 'system-ui', lineHeight: 1.6 }}>
          AI-assisted development tools that multiply developer productivity by 10x.
        </div>
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
   SCENE 5 — GLASS OVERLAY: Neural network + stats
   ═══════════════════════════════════════════════════════════════════ */
const Scene5_NeuralGlass: React.FC = () => (
  <AbsoluteFill>
    <KenBurns src={images.neural} fromScale={1.0} toScale={1.1} fromX={-10} toX={10} />
    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)' }} />
    <PopIn delay={5} style={{
      position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
      width: 720, padding: '50px 60px', background: 'rgba(18,32,58,0.85)',
      backdropFilter: 'blur(20px)', borderRadius: 32, border: `1px solid ${P.border}`,
      boxShadow: '0 30px 80px rgba(0,0,0,0.4)',
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 28, color: P.amber, fontFamily: 'system-ui', fontWeight: 700, letterSpacing: 5, textTransform: 'uppercase' }}>Deep Learning</div>
        <div style={{ fontSize: 48, fontWeight: 800, color: P.text, fontFamily: 'system-ui', marginTop: 12 }}>
          Neural Networks
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 48, marginTop: 40 }}>
          {[
            { v: '175B', l: 'Parameters', c: P.cyan },
            { v: '100T', l: 'Tokens', c: P.green },
            { v: '95%', l: 'Accuracy', c: P.amber },
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
          <ScaleBar target={95} delay={40} color={P.amber} />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
            <span style={{ fontSize: 22, color: P.muted, fontFamily: 'system-ui' }}>Model Performance</span>
            <span style={{ fontSize: 22, color: P.amber, fontFamily: 'system-ui' }}>95/100</span>
          </div>
        </div>
      </div>
    </PopIn>
  </AbsoluteFill>
);

/* ═══════════════════════════════════════════════════════════════════
   SCENE 6 — SIDE BY SIDE: City + Chip
   ═══════════════════════════════════════════════════════════════════ */
const Scene6_SideBySide: React.FC = () => (
  <AbsoluteFill style={{ background: P.bg }}>
    <FadeUp delay={0} style={{ position: 'absolute', top: 60, left: '50%', transform: 'translateX(-50%)', textAlign: 'center', zIndex: 10 }}>
      <div style={{ fontSize: 28, color: P.pink, fontFamily: 'system-ui', fontWeight: 700, letterSpacing: 5, textTransform: 'uppercase' }}>Applications</div>
      <div style={{ fontSize: 48, fontWeight: 800, color: P.text, fontFamily: 'system-ui', marginTop: 8 }}>AI Everywhere</div>
    </FadeUp>
    <PopIn delay={10} style={{ position: 'absolute', left: 60, top: 180, width: 860, height: 440, borderRadius: 20, overflow: 'hidden', border: `2px solid ${P.pink}40` }}>
      <KenBurns src={images.city} fromScale={1.0} toScale={1.08} fromX={-10} toX={10} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '30px 24px 20px', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
        <div style={{ fontSize: 28, fontWeight: 700, color: P.pink, fontFamily: 'system-ui' }}>Smart Cities</div>
        <div style={{ fontSize: 22, color: P.muted, fontFamily: 'system-ui', marginTop: 4 }}>AI-optimized urban infrastructure</div>
      </div>
    </PopIn>
    <PopIn delay={20} style={{ position: 'absolute', right: 60, top: 180, width: 860, height: 440, borderRadius: 20, overflow: 'hidden', border: `2px solid ${P.cyan}40` }}>
      <KenBurns src={images.chip} fromScale={1.05} toScale={1.15} fromX={10} toX={-10} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '30px 24px 20px', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
        <div style={{ fontSize: 28, fontWeight: 700, color: P.cyan, fontFamily: 'system-ui' }}>AI Chips</div>
        <div style={{ fontSize: 22, color: P.muted, fontFamily: 'system-ui', marginTop: 4 }}>Custom silicon for ML inference</div>
      </div>
    </PopIn>
    <div style={{ position: 'absolute', bottom: 50, left: 60, right: 60, display: 'flex', justifyContent: 'center', gap: 40 }}>
      {['Edge AI', 'Cloud ML', 'On-Device'].map((f, i) => (
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
   SCENE 7 — HERO CTA: AI Brain image + big CTA
   ═══════════════════════════════════════════════════════════════════ */
const Scene7_CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = 0.95 + 0.05 * Math.sin(frame * 0.08);
  return (
    <AbsoluteFill>
      <KenBurns src={images.ai} fromScale={1.1} toScale={1.0} fromX={0} toX={0} fromY={0} toY={0} />
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
   IMAGE SHOWCASE — 7 scenes × 12s = 84s
   All images with Ken Burns effect, no video
   ═══════════════════════════════════════════════════════════════════ */
const ImageShowcase: React.FC = () => {
  const S = 360;
  const scenes = [
    Scene1_AIBrain,
    Scene2_RobotSplit,
    Scene3_ServerStats,
    Scene4_CodeDiagonal,
    Scene5_NeuralGlass,
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

export { ImageShowcase };
