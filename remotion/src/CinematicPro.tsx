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
   CINEMATIC PRO — Design System from ui-ux-pro-max-skill
   Style: HUD/Sci-Fi FUI + AI-Native
   Colors: Purple #7C3AED, Cyan #00FFFF, Pink #EC4899
   Typography: Orbitron (headings) + Exo 2 (body)
   Pacing: 4s/scene, 12 scenes = 48s
   ═══════════════════════════════════════════════════════════════════ */

/* ─── DESIGN TOKENS (from skill) ─────────────────────────────── */
const T = {
  bg: '#050510',
  surface: 'rgba(124,58,237,0.05)',
  glass: 'rgba(255,255,255,0.04)',
  glassBorder: 'rgba(0,255,255,0.12)',
  primary: '#7C3AED',
  secondary: '#A78BFA',
  accent: '#00FFFF',
  pink: '#EC4899',
  green: '#10B981',
  amber: '#F59E0B',
  red: '#EF4444',
  text: '#F8FAFC',
  muted: '#64748B',
  heading: 'Orbitron, sans-serif',
  body: 'Exo 2, sans-serif',
};

/* ─── IMAGES ──────────────────────────────────────────────────── */
const img = {
  ai: staticFile('images/ai-tech/artificial-intelligence-brain.jpg'),
  robot: staticFile('images/ai-tech/robot-technology.jpg'),
  server: staticFile('images/ai-tech/server-room-data-center.jpg'),
  code: staticFile('images/ai-tech/code-programming.jpg'),
  neural: staticFile('images/ai-tech/neural-network-abstract.jpg'),
  cyber: staticFile('images/ai-tech/cyber-security-digital.jpg'),
  quantum: staticFile('images/ai-tech/quantum-computer.jpg'),
  space: staticFile('images/ai-tech/space-technology-satellite.jpg'),
  hologram: staticFile('images/ai-tech/hologram-interface.jpg'),
  city: staticFile('images/ai-tech/future-city-night-neon.jpg'),
  cyberpunk: staticFile('images/ai-tech/cyberpunk-technology.jpg'),
  chip: staticFile('images/ai-tech/machine-learning-chip.jpg'),
};

/* ─── KEN BURNS ───────────────────────────────────────────────── */
const KB: React.FC<{
  src: string;
  fromScale?: number;
  toScale?: number;
  fromX?: number;
  toX?: number;
  fromY?: number;
  toY?: number;
}> = ({ src, fromScale = 1.0, toScale = 1.12, fromX = 0, toX = -15, fromY = 0, toY = -8 }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const scale = interpolate(frame, [0, durationInFrames], [fromScale, toScale]);
  const x = interpolate(frame, [0, durationInFrames], [fromX, toX]);
  const y = interpolate(frame, [0, durationInFrames], [fromY, toY]);
  return (
    <div style={{ position: 'absolute', inset: -50, overflow: 'hidden' }}>
      <Img src={src} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${scale}) translate(${x}px, ${y}px)` }} />
    </div>
  );
};

/* ─── PARTICLES ─────────────────────────────────────────────── */
const Particles: React.FC<{ count?: number; color?: string }> = ({ count = 50, color = T.accent }) => {
  const frame = useCurrentFrame();
  const dots = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      x: (Math.sin(i * 137.508) * 0.5 + 0.5) * 100,
      baseY: (Math.cos(i * 97.3) * 0.5 + 0.5) * 100,
      size: 1 + (i % 4),
      speed: 0.2 + (i % 5) * 0.05,
      phase: i * 0.8,
    })), [count]);

  return (
    <AbsoluteFill style={{ pointerEvents: 'none' }}>
      {dots.map((d, i) => {
        const y = (d.baseY + (frame + d.phase) * d.speed * 0.5) % 110 - 5;
        return (
          <div key={i} style={{
            position: 'absolute', left: `${d.x}%`, top: `${y}%`,
            width: d.size, height: d.size, borderRadius: '50%',
            backgroundColor: color, opacity: 0.2 + 0.15 * Math.sin(frame * 0.04 + d.phase),
            boxShadow: `0 0 ${d.size * 4}px ${color}50`,
          }} />
        );
      })}
    </AbsoluteFill>
  );
};

/* ─── GLITCH TEXT ───────────────────────────────────────────── */
const Glitch: React.FC<{
  text: string;
  fontSize?: number;
  color?: string;
  delay?: number;
  font?: string;
}> = ({ text, fontSize = 80, color = T.text, delay = 0, font = T.heading }) => {
  const frame = useCurrentFrame();
  const f = Math.max(0, frame - delay);
  const glitch = f > 15 && f < 20;
  const gx = glitch ? Math.sin(f * 50) * 6 : 0;
  const p = spring({ frame: f, fps: 30, config: { damping: 14, mass: 0.6 } });
  const clip = interpolate(p, [0, 1], [100, 0]);

  return (
    <div style={{ position: 'relative', opacity: interpolate(p, [0, 1], [0, 1]) }}>
      {glitch && (
        <>
          <div style={{ position: 'absolute', left: -2, fontSize, fontFamily: font, fontWeight: 900, color: '#ff0040', clipPath: `inset(${clip}% 0 0 0)`, transform: `translateX(${gx + 2}px)`, opacity: 0.7 }}>{text}</div>
          <div style={{ position: 'absolute', left: 2, fontSize, fontFamily: font, fontWeight: 900, color: '#00ff88', clipPath: `inset(${clip}% 0 0 0)`, transform: `translateX(${gx - 2}px)`, opacity: 0.7 }}>{text}</div>
        </>
      )}
      <div style={{
        fontSize, fontFamily: font, fontWeight: 900, color,
        clipPath: `inset(${clip}% 0 0 0)`,
        transform: `translateX(${gx}px)`,
        textShadow: glitch ? `0 0 20px ${color}80` : `0 0 40px ${color}30`,
        letterSpacing: font === T.heading ? '0.05em' : 'normal',
      }}>{text}</div>
    </div>
  );
};

/* ─── NEON TEXT ─────────────────────────────────────────────── */
const Neon: React.FC<{
  text: string;
  fontSize?: number;
  color?: string;
  delay?: number;
}> = ({ text, fontSize = 28, color = T.accent, delay = 0 }) => {
  const frame = useCurrentFrame();
  const f = Math.max(0, frame - delay);
  const p = spring({ frame: f, fps: 30, config: { damping: 12, mass: 0.5 } });
  const glow = 8 + 4 * Math.sin(frame * 0.1);

  return (
    <div style={{
      fontSize, fontFamily: T.body, fontWeight: 600, color,
      opacity: interpolate(p, [0, 1], [0, 1]),
      transform: `translateY(${interpolate(p, [0, 1], [20, 0])}px)`,
      textShadow: `0 0 ${glow}px ${color}80, 0 0 ${glow * 2}px ${color}40`,
      letterSpacing: 3,
      textTransform: 'uppercase' as const,
    }}>{text}</div>
  );
};

/* ─── COUNT UP ──────────────────────────────────────────────── */
const Count: React.FC<{
  to: number;
  suffix?: string;
  prefix?: string;
  delay?: number;
  fontSize?: number;
  color?: string;
}> = ({ to, suffix = '', prefix = '', delay = 0, fontSize = 56, color = T.accent }) => {
  const frame = useCurrentFrame();
  const f = Math.max(0, frame - delay);
  const p = spring({ frame: f, fps: 30, config: { damping: 18, mass: 0.5 } });
  const val = Math.round(to * p);
  const ap = spring({ frame: f, fps: 30, config: { damping: 10, mass: 0.6 } });

  return (
    <div style={{
      fontSize, fontFamily: T.heading, fontWeight: 900, color,
      opacity: interpolate(ap, [0, 1], [0, 1]),
      transform: `scale(${interpolate(ap, [0, 1], [0.5, 1])})`,
      textShadow: `0 0 20px ${color}60`,
    }}>{prefix}{val.toLocaleString()}{suffix}</div>
  );
};

/* ─── GLASS CARD ────────────────────────────────────────────── */
const Card: React.FC<{
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}> = ({ children, delay = 0, style }) => {
  const frame = useCurrentFrame();
  const p = spring({ frame: frame - delay, fps: 30, config: { damping: 14, mass: 0.5 } });
  return (
    <div style={{
      background: T.glass, backdropFilter: 'blur(20px)',
      border: `1px solid ${T.glassBorder}`, borderRadius: 20,
      padding: '28px 24px',
      opacity: interpolate(p, [0, 1], [0, 1]),
      transform: `translateY(${interpolate(p, [0, 1], [30, 0])}px) scale(${interpolate(p, [0, 1], [0.95, 1])})`,
      boxShadow: `0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03), 0 0 1px ${T.accent}30`,
      ...style,
    }}>{children}</div>
  );
};

/* ─── SCAN LINE ─────────────────────────────────────────────── */
const ScanLine: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <div style={{
      position: 'absolute', left: 0, right: 0, height: 1,
      top: `${(frame * 1.2) % 110 - 5}%`,
      background: `linear-gradient(90deg, transparent, ${T.accent}50, transparent)`,
      opacity: 0.4, pointerEvents: 'none',
    }} />
  );
};

/* ─── HUD BRACKET ───────────────────────────────────────────── */
const HudBracket: React.FC<{
  children: React.ReactNode;
  delay?: number;
  color?: string;
}> = ({ children, delay = 0, color = T.accent }) => {
  const frame = useCurrentFrame();
  const f = Math.max(0, frame - delay);
  const p = spring({ frame: f, fps: 30, config: { damping: 14, mass: 0.5 } });
  return (
    <div style={{
      position: 'relative',
      padding: '20px 24px',
      opacity: interpolate(p, [0, 1], [0, 1]),
      transform: `scale(${interpolate(p, [0, 1], [0.9, 1])})`,
    }}>
      {/* Corner brackets */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: 20, height: 20, borderTop: `2px solid ${color}`, borderLeft: `2px solid ${color}`, opacity: 0.6 }} />
      <div style={{ position: 'absolute', top: 0, right: 0, width: 20, height: 20, borderTop: `2px solid ${color}`, borderRight: `2px solid ${color}`, opacity: 0.6 }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: 20, height: 20, borderBottom: `2px solid ${color}`, borderLeft: `2px solid ${color}`, opacity: 0.6 }} />
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: 20, height: 20, borderBottom: `2px solid ${color}`, borderRight: `2px solid ${color}`, opacity: 0.6 }} />
      {children}
    </div>
  );
};

/* ─── WAVE BARS ─────────────────────────────────────────────── */
const Bars: React.FC<{ count?: number; color?: string; delay?: number }> = ({ count = 8, color = T.accent, delay = 0 }) => {
  const frame = useCurrentFrame();
  return (
    <div style={{ display: 'flex', gap: 3, alignItems: 'flex-end', height: 32 }}>
      {Array.from({ length: count }, (_, i) => (
        <div key={i} style={{
          width: 4, borderRadius: 2,
          height: 6 + 26 * Math.abs(Math.sin((frame - delay) * 0.1 + i * 0.6)),
          background: color, opacity: 0.7,
        }} />
      ))}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   12 SCENES × 4s = 48s — FAST PACED
   ═══════════════════════════════════════════════════════════════════ */

/* Scene 1 — GLITCH INTRO (4s) */
const S1: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: T.bg }}>
      <Particles count={80} color={T.accent} />
      <div style={{ position: 'absolute', left: '10%', top: '25%', opacity: 0.15 }}>
        <div style={{ width: 500, height: 500, borderRadius: '50%', background: `radial-gradient(circle, ${T.primary}60, transparent 70%)`, filter: 'blur(40px)' }} />
      </div>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
        <Glitch text="NEXUS" fontSize={140} delay={5} />
        <div style={{ marginTop: 8 }}>
          <Glitch text="AI PLATFORM" fontSize={48} color={T.accent} delay={15} />
        </div>
        <div style={{ marginTop: 32, opacity: interpolate(frame, [50, 70], [0, 1], { extrapolateRight: 'clamp' }) }}>
          <Neon text=">> Initialize System" fontSize={20} color={T.accent} delay={50} />
        </div>
      </div>
      <ScanLine />
    </AbsoluteFill>
  );
};

/* Scene 2 — HERO IMAGE: AI Brain (4s) */
const S2: React.FC = () => (
  <AbsoluteFill>
    <KB src={img.ai} fromScale={1.05} toScale={1.2} />
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(5,5,16,0.9) 0%, rgba(5,5,16,0.4) 60%, transparent 100%)' }} />
    <div style={{ position: 'absolute', left: 80, bottom: 100, zIndex: 10 }}>
      <Neon text="NEURAL ENGINE" delay={5} />
      <div style={{ marginTop: 12 }}>
        <Glitch text="THINK" fontSize={100} delay={10} />
        <Glitch text="BEYOND" fontSize={100} color={T.accent} delay={15} />
      </div>
      <div style={{ marginTop: 16, fontSize: 24, fontFamily: T.body, color: T.muted, maxWidth: 500, lineHeight: 1.5, opacity: interpolate(useCurrentFrame(), [30, 45], [0, 1], { extrapolateRight: 'clamp' }) }}>
        175B parameters. Sub-10ms inference. The most powerful AI engine ever built.
      </div>
    </div>
    <ScanLine />
  </AbsoluteFill>
);

/* Scene 3 — BENTO GRID (4s) */
const S3: React.FC = () => (
  <AbsoluteFill style={{ background: T.bg }}>
    <Particles count={20} color={T.primary} />
    <div style={{ position: 'absolute', top: 40, left: 80 }}>
      <Neon text="CAPABILITIES" delay={0} />
    </div>
    <div style={{ position: 'absolute', top: 100, left: 60, right: 60, bottom: 40, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 12 }}>
      <Card delay={5} style={{ gridColumn: '1 / 3', display: 'flex', alignItems: 'center', gap: 24 }}>
        <div style={{ width: 80, height: 80, borderRadius: '50%', background: `linear-gradient(135deg, ${T.primary}, ${T.accent})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, flexShrink: 0 }}>🧠</div>
        <div>
          <div style={{ fontSize: 28, fontWeight: 800, fontFamily: T.heading, color: T.text }}>Quantum Processing</div>
          <div style={{ fontSize: 16, fontFamily: T.body, color: T.muted, marginTop: 4 }}>Neural networks at lightspeed</div>
        </div>
      </Card>
      <Card delay={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Count to={2000000} suffix="+" delay={15} fontSize={36} color={T.accent} />
        <div style={{ fontSize: 14, color: T.muted, fontFamily: T.body, marginTop: 6 }}>Users</div>
        <Bars count={6} color={T.accent} delay={20} />
      </Card>
      <Card delay={18} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontSize: 12, color: T.green, fontFamily: 'monospace', marginBottom: 8 }}>function deploy() {'{'}</div>
        <div style={{ fontSize: 12, color: T.accent, fontFamily: 'monospace' }}>  model.train(data)</div>
        <div style={{ fontSize: 12, color: T.amber, fontFamily: 'monospace' }}>  accuracy: 99.7%</div>
        <div style={{ fontSize: 12, color: T.green, fontFamily: 'monospace' }}>{'}'} // ✓</div>
      </Card>
      <Card delay={24} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: 36, marginBottom: 4 }}>🔬</div>
        <div style={{ fontSize: 18, fontWeight: 700, fontFamily: T.heading, color: T.text }}>Research</div>
        <div style={{ fontSize: 14, color: T.muted, fontFamily: T.body }}>450+ papers</div>
      </Card>
      <Card delay={30} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: 36, marginBottom: 4 }}>⚡</div>
        <div style={{ fontSize: 18, fontWeight: 700, fontFamily: T.heading, color: T.text }}>Speed</div>
        <div style={{ fontSize: 14, color: T.muted, fontFamily: T.body }}>10x faster</div>
      </Card>
    </div>
  </AbsoluteFill>
);

/* Scene 4 — IMAGE: Server Room (4s) */
const S4: React.FC = () => (
  <AbsoluteFill>
    <KB src={img.server} fromScale={1.0} toScale={1.15} fromX={10} toX={-10} />
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(5,5,16,0.95) 0%, rgba(5,5,16,0.5) 40%, transparent 100%)' }} />
    <div style={{ position: 'absolute', left: 60, top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}>
      <HudBracket delay={5}>
        <Neon text="INFRASTRUCTURE" delay={5} color={T.accent} />
        <div style={{ marginTop: 12 }}>
          <Glitch text="10,000" fontSize={72} delay={10} />
          <Glitch text="GPU NODES" fontSize={48} color={T.accent} delay={15} />
        </div>
        <div style={{ marginTop: 12, fontSize: 18, fontFamily: T.body, color: T.muted, lineHeight: 1.5 }}>
          Enterprise-grade infrastructure powering the future of AI.
        </div>
      </HudBracket>
    </div>
    <ScanLine />
  </AbsoluteFill>
);

/* Scene 5 — 3D CARDS (4s) */
const S5: React.FC = () => {
  const frame = useCurrentFrame();
  const cards = [
    { title: 'Analytics', icon: '📊', color: T.accent, x: -350, rot: -10 },
    { title: 'Security', icon: '🛡️', color: T.green, x: 0, rot: 0 },
    { title: 'Deploy', icon: '🚀', color: T.pink, x: 350, rot: 10 },
  ];
  return (
    <AbsoluteFill style={{ background: T.bg, perspective: 1000 }}>
      <Particles count={30} color={T.accent} />
      <div style={{ position: 'absolute', top: 40, left: 0, right: 0, textAlign: 'center' }}>
        <Neon text="ECOSYSTEM" delay={0} />
      </div>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {cards.map((c, i) => {
          const p = spring({ frame: frame - 10 - i * 8, fps: 30, config: { damping: 12, mass: 0.5 } });
          const hover = Math.sin(frame * 0.04 + i) * 4;
          return (
            <div key={i} style={{
              position: 'absolute', left: `calc(50% + ${c.x}px)`,
              width: 240, height: 300,
              transform: `translate(-50%, ${hover}px) rotateY(${c.rot}deg) scale(${interpolate(p, [0, 1], [0.4, 1])})`,
              opacity: interpolate(p, [0, 1], [0, 1]),
            }}>
              <div style={{
                width: '100%', height: '100%', background: T.glass, backdropFilter: 'blur(16px)',
                border: `1px solid ${c.color}30`, borderRadius: 20,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                boxShadow: `0 16px 48px rgba(0,0,0,0.4), 0 0 20px ${c.color}15`,
              }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>{c.icon}</div>
                <div style={{ fontSize: 22, fontWeight: 800, fontFamily: T.heading, color: T.text }}>{c.title}</div>
                <div style={{ marginTop: 16, padding: '8px 20px', background: `${c.color}15`, border: `1px solid ${c.color}30`, borderRadius: 8, fontSize: 14, fontWeight: 600, color: c.color, fontFamily: T.body }}>Explore →</div>
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

/* Scene 6 — IMAGE: Robot (4s) */
const S6: React.FC = () => (
  <AbsoluteFill>
    <KB src={img.robot} fromScale={1.0} toScale={1.1} />
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(5,5,16,0.8) 0%, rgba(5,5,16,0.3) 40%, rgba(5,5,16,0.8) 100%)' }} />
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
      <Neon text="COLLABORATIVE ROBOTICS" delay={5} />
      <div style={{ marginTop: 12 }}>
        <Glitch text="HUMAN × MACHINE" fontSize={64} delay={10} />
      </div>
      <div style={{ marginTop: 20, display: 'flex', gap: 24 }}>
        {[
          { v: '10x', l: 'Productivity', c: T.accent },
          { v: '99.9%', l: 'Precision', c: T.green },
          { v: '<1ms', l: 'Response', c: T.pink },
        ].map((s, i) => (
          <Card key={i} delay={20 + i * 6} style={{ textAlign: 'center', minWidth: 140 }}>
            <Count to={parseInt(s.v) || 99} suffix={s.v.includes('.') ? '.9%' : s.v.includes('x') ? 'x' : 'ms'} delay={25 + i * 6} fontSize={32} color={s.c} />
            <div style={{ fontSize: 13, color: T.muted, fontFamily: T.body, marginTop: 4 }}>{s.l}</div>
          </Card>
        ))}
      </div>
    </div>
    <ScanLine />
  </AbsoluteFill>
);

/* Scene 7 — IMAGE: Cybersecurity (4s) */
const S7: React.FC = () => (
  <AbsoluteFill>
    <KB src={img.cyber} fromScale={1.05} toScale={1.15} fromX={-10} toX={10} />
    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, transparent 30%, rgba(5,5,16,0.7) 100%)' }} />
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
      <HudBracket delay={5} color={T.green}>
        <div style={{ textAlign: 'center' }}>
          <Neon text="ZERO TRUST SECURITY" delay={5} color={T.green} />
          <div style={{ marginTop: 16 }}>
            <Glitch text="MILITARY GRADE" fontSize={52} delay={10} />
          </div>
          <div style={{ marginTop: 12, fontSize: 18, fontFamily: T.body, color: T.muted }}>
            End-to-end encryption. SOC2 compliant. ISO 27001 certified.
          </div>
          <div style={{ marginTop: 20, display: 'flex', gap: 16, justifyContent: 'center' }}>
            {['AES-256', 'TLS 1.3', 'HIPAA'].map((t, i) => (
              <div key={i} style={{ padding: '6px 16px', background: `${T.green}15`, border: `1px solid ${T.green}30`, borderRadius: 6, fontSize: 14, fontWeight: 600, color: T.green, fontFamily: T.body }}>{t}</div>
            ))}
          </div>
        </div>
      </HudBracket>
    </div>
  </AbsoluteFill>
);

/* Scene 8 — IMAGE: Code (4s) */
const S8: React.FC = () => (
  <AbsoluteFill>
    <KB src={img.code} fromScale={1.0} toScale={1.12} />
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(5,5,16,0.85) 0%, rgba(5,5,16,0.4) 50%, transparent 100%)' }} />
    <div style={{ position: 'absolute', left: 60, bottom: 80, zIndex: 10 }}>
      <Neon text="DEVELOPER EXPERIENCE" delay={5} color={T.pink} />
      <div style={{ marginTop: 12 }}>
        <Glitch text="SHIP 10x FASTER" fontSize={56} delay={10} />
      </div>
      <div style={{ marginTop: 12, display: 'flex', gap: 16 }}>
        {['TypeScript', 'Python', 'Rust', 'Go'].map((l, i) => (
          <div key={i} style={{ padding: '8px 16px', background: T.glass, border: `1px solid ${T.glassBorder}`, borderRadius: 8, fontSize: 16, fontWeight: 600, color: T.text, fontFamily: T.body }}>{l}</div>
        ))}
      </div>
    </div>
    <ScanLine />
  </AbsoluteFill>
);

/* Scene 9 — DASHBOARD (4s) */
const S9: React.FC = () => {
  const frame = useCurrentFrame();
  const bars = [70, 85, 50, 95, 75, 60, 88, 55, 80, 92, 65, 78];
  return (
    <AbsoluteFill style={{ background: T.bg }}>
      <Particles count={15} color={T.primary} />
      <div style={{ position: 'absolute', top: 40, left: 80 }}>
        <Neon text="ANALYTICS" delay={0} />
      </div>
      <div style={{ position: 'absolute', top: 100, left: 60, right: 60, display: 'flex', gap: 12 }}>
        {[
          { l: 'Revenue', v: 4200000, p: '$', s: '', c: T.green },
          { l: 'Users', v: 2000000, s: '+', c: T.accent },
          { l: 'Growth', v: 340, s: '%', c: T.pink },
        ].map((s, i) => (
          <Card key={i} delay={5 + i * 6} style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ fontSize: 12, color: T.muted, fontFamily: T.body, textTransform: 'uppercase', letterSpacing: 2 }}>{s.l}</div>
            <Count to={s.v} prefix={s.p} suffix={s.s} delay={10 + i * 6} fontSize={32} color={s.c} />
          </Card>
        ))}
      </div>
      <div style={{ position: 'absolute', bottom: 50, left: 60, right: 60, height: 280 }}>
        <Card delay={25} style={{ height: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', padding: '24px 30px' }}>
          {bars.map((h, i) => {
            const p = spring({ frame: frame - 30 - i * 2, fps: 30, config: { damping: 14, mass: 0.4 } });
            return (
              <div key={i} style={{
                width: 28, height: h * 2 * p, borderRadius: 6,
                background: `linear-gradient(180deg, ${T.accent}, ${T.primary})`,
                boxShadow: `0 0 12px ${T.accent}30`,
              }} />
            );
          })}
        </Card>
      </div>
    </AbsoluteFill>
  );
};

/* Scene 10 — IMAGE: Quantum (4s) */
const S10: React.FC = () => (
  <AbsoluteFill>
    <KB src={img.quantum} fromScale={1.0} toScale={1.15} fromX={0} toX={-20} />
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(5,5,16,0.7) 0%, rgba(5,5,16,0.3) 50%, rgba(5,5,16,0.8) 100%)' }} />
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
      <Neon text="QUANTUM COMPUTING" delay={5} />
      <div style={{ marginTop: 12 }}>
        <Glitch text="BEYOND" fontSize={80} delay={10} />
        <Glitch text="CLASSICAL" fontSize={80} color={T.pink} delay={15} />
      </div>
      <div style={{ marginTop: 16, fontSize: 20, fontFamily: T.body, color: T.muted, textAlign: 'center', maxWidth: 500 }}>
        1000+ qubits. Solving problems that would take classical computers millennia.
      </div>
    </div>
    <ScanLine />
  </AbsoluteFill>
);

/* Scene 11 — IMAGE: Neon City (4s) */
const S11: React.FC = () => (
  <AbsoluteFill>
    <KB src={img.city} fromScale={1.0} toScale={1.1} fromX={10} toX={-10} />
    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, transparent 20%, rgba(5,5,16,0.6) 100%)' }} />
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, maxWidth: 900 }}>
        {[
          { icon: '🏙️', title: 'Smart Cities', desc: 'AI-optimized infrastructure', color: T.accent },
          { icon: '🌐', title: 'Global Scale', desc: '190+ countries deployed', color: T.pink },
          { icon: '📡', title: 'Real-Time', desc: '<10ms edge latency', color: T.green },
          { icon: '🔋', title: 'Green AI', desc: '60% energy reduction', color: T.amber },
        ].map((c, i) => (
          <Card key={i} delay={5 + i * 6} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: `${c.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0 }}>{c.icon}</div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 700, fontFamily: T.heading, color: T.text }}>{c.title}</div>
              <div style={{ fontSize: 14, color: T.muted, fontFamily: T.body }}>{c.desc}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </AbsoluteFill>
);

/* Scene 12 — CINEMATIC CTA (4s) */
const S12: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = 0.97 + 0.03 * Math.sin(frame * 0.12);
  const glow = 20 + 10 * Math.sin(frame * 0.06);
  return (
    <AbsoluteFill style={{ background: T.bg }}>
      <Particles count={100} color={T.accent} />
      <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', opacity: 0.12 }}>
        <div style={{ width: 700, height: 700, borderRadius: '50%', background: `radial-gradient(circle, ${T.primary}, ${T.accent}, transparent 70%)`, filter: 'blur(60px)' }} />
      </div>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
        <Glitch text="THE FUTURE" fontSize={100} delay={5} />
        <Glitch text="IS NOW" fontSize={100} color={T.accent} delay={12} />
        <div style={{ marginTop: 32, opacity: interpolate(frame, [35, 50], [0, 1], { extrapolateRight: 'clamp' }) }}>
          <div style={{ fontSize: 22, fontFamily: T.body, color: T.muted, textAlign: 'center', maxWidth: 500, lineHeight: 1.6 }}>
            Join 2M+ builders. Ship faster. Scale infinitely.
          </div>
        </div>
        <div style={{ marginTop: 40, opacity: interpolate(frame, [50, 65], [0, 1], { extrapolateRight: 'clamp' }) }}>
          <div style={{
            padding: '18px 52px',
            background: `linear-gradient(135deg, ${T.primary}, ${T.accent})`,
            borderRadius: 14, fontSize: 22, fontWeight: 700, color: '#fff', fontFamily: T.heading,
            transform: `scale(${pulse})`,
            boxShadow: `0 0 ${glow}px ${T.accent}50, 0 8px 32px rgba(0,0,0,0.3)`,
            letterSpacing: 2,
          }}>START BUILDING →</div>
        </div>
      </div>
      <ScanLine />
    </AbsoluteFill>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   CINEMATIC PRO — 12 scenes × 4s = 48s
   Design: HUD/Sci-Fi + AI-Native (ui-ux-pro-max-skill)
   ═══════════════════════════════════════════════════════════════════ */
const CinematicPro: React.FC = () => {
  const S = 120; // 4s per scene
  const scenes = [S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12];
  return (
    <AbsoluteFill style={{ background: T.bg }}>
      {scenes.map((Scene, i) => (
        <Sequence key={i} from={i * S} durationInFrames={S}>
          <Scene />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export { CinematicPro };
