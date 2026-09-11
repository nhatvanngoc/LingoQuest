import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

// ============================================================
// DESIGN TOKENS & TYPOGRAPHY
// ============================================================
const FONT = `'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif`;
const MONO = `'Consolas', 'Courier New', monospace`;

const C = {
  bg: '#080E1E',
  bgMesh: 'radial-gradient(ellipse at 50% 10%, rgba(37,99,235,0.18) 0%, rgba(8,14,30,0.98) 75%)',
  card: 'rgba(15, 23, 42, 0.78)',
  cardBorder: 'rgba(56, 189, 248, 0.25)',
  blue: '#38BDF8',
  indigo: '#6366F1',
  green: '#10B981',
  greenLight: '#A7F3D0',
  amber: '#F59E0B',
  amberLight: '#FDE68A',
  rose: '#F43F5E',
  roseLight: '#FECDD3',
  text: '#FFFFFF',
  muted: '#94A3B8',
};

const glass = (extra: React.CSSProperties = {}): React.CSSProperties => ({
  background: C.card,
  backdropFilter: 'blur(24px)',
  WebkitBackdropFilter: 'blur(24px)',
  borderRadius: 24,
  border: `1.5px solid ${C.cardBorder}`,
  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.45)',
  boxSizing: 'border-box',
  ...extra,
});

// ============================================================
// ANIMATION HELPERS
// ============================================================
const FadeSlide: React.FC<{
  children: React.ReactNode;
  delay?: number;
  y?: number;
  scale?: boolean;
  style?: React.CSSProperties;
}> = ({ children, delay = 0, y = 30, scale = false, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: { damping: 14, mass: 0.6, stiffness: 120 },
  });
  return (
    <div
      style={{
        opacity: p,
        transform: `translateY(${(1 - p) * y}px) ${scale ? `scale(${0.9 + 0.1 * p})` : ''}`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

// Ambient Bokeh background for high production value
const AmbientBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const t = frame / 30;

  const circles = [
    { x: width * 0.2 + Math.sin(t * 0.3) * 60, y: height * 0.3 + Math.cos(t * 0.4) * 40, r: 280, color: 'rgba(37,99,235,0.14)' },
    { x: width * 0.8 + Math.sin(t * 0.4 + 2) * 50, y: height * 0.4 + Math.cos(t * 0.3) * 50, r: 320, color: 'rgba(16,185,129,0.12)' },
    { x: width * 0.5 + Math.cos(t * 0.2) * 70, y: height * 0.75 + Math.sin(t * 0.3) * 40, r: 360, color: 'rgba(245,158,11,0.10)' },
  ];

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      <div style={{ position: 'absolute', inset: 0, background: C.bgMesh }} />
      {circles.map((c, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: c.x,
            top: c.y,
            width: c.r * 2,
            height: c.r * 2,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${c.color} 0%, transparent 70%)`,
            transform: 'translate(-50%, -50%)',
            filter: 'blur(50px)',
          }}
        />
      ))}
    </div>
  );
};

// Top Persistent HUD Navigation Header
const TopHeader: React.FC<{ sceneTitle: string; progress: number }> = ({ sceneTitle, progress }) => {
  return (
    <div style={{ position: 'absolute', top: 40, left: 80, right: 80, zIndex: 50 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div
            style={{
              padding: '6px 16px',
              borderRadius: 999,
              background: 'rgba(56,189,248,0.15)',
              border: '1.5px solid rgba(56,189,248,0.4)',
              color: C.blue,
              fontSize: 16,
              fontWeight: 800,
              fontFamily: FONT,
              letterSpacing: 1.2,
            }}
          >
            LINGOQUEST • GRAMMAR LAB
          </div>
          <div style={{ color: C.muted, fontSize: 16, fontWeight: 600, fontFamily: FONT }}>
            Unit 1: Tenses Mastery
          </div>
        </div>
        <div style={{ color: C.text, fontSize: 18, fontWeight: 700, fontFamily: FONT }}>
          {sceneTitle}
        </div>
      </div>
      {/* Animated continuous progress bar */}
      <div style={{ height: 5, width: '100%', background: 'rgba(255,255,255,0.1)', borderRadius: 999, overflow: 'hidden' }}>
        <div
          style={{
            height: '100%',
            width: `${Math.min(100, Math.max(0, progress * 100))}%`,
            background: 'linear-gradient(90deg, #38BDF8, #10B981)',
            borderRadius: 999,
            transition: 'width 0.1s linear',
          }}
        />
      </div>
    </div>
  );
};

// ============================================================
// SCENE 1: HOOK & THE TIMELINE PARADIGM (0 - 300f / 10s)
// ============================================================
const Scene1Hook: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 120px' }}>
      <FadeSlide delay={5}>
        <div
          style={{
            padding: '8px 24px',
            borderRadius: 999,
            background: 'rgba(245,158,11,0.15)',
            border: '1.5px solid rgba(245,158,11,0.5)',
            color: C.amber,
            fontSize: 20,
            fontWeight: 800,
            fontFamily: FONT,
            letterSpacing: 1.5,
            marginBottom: 24,
            textAlign: 'center',
          }}
        >
          CORE INTUITION MASTERCLASS
        </div>
      </FadeSlide>

      <FadeSlide delay={15} scale>
        <h1
          style={{
            fontSize: 72,
            fontWeight: 900,
            fontFamily: FONT,
            color: C.text,
            textAlign: 'center',
            margin: '0 0 20px 0',
            lineHeight: 1.15,
          }}
        >
          <span style={{ color: C.rose }}>PAST SIMPLE</span>
          <span style={{ color: C.muted, margin: '0 24px', fontWeight: 600 }}>vs</span>
          <span style={{ color: C.green }}>PRESENT PERFECT</span>
        </h1>
      </FadeSlide>

      <FadeSlide delay={30}>
        <p style={{ fontSize: 28, color: C.muted, fontFamily: FONT, textAlign: 'center', margin: '0 0 45px 0', maxWidth: 1000, lineHeight: 1.4 }}>
          Forget rote memorization. Master English tenses by seeing <strong style={{ color: C.blue }}>where actions live on the Timeline</strong>.
        </p>
      </FadeSlide>

      <FadeSlide delay={45}>
        <div style={glass({ padding: '24px 44px', display: 'flex', alignItems: 'center', gap: 32, maxWidth: 960 })}>
          <div style={{ fontSize: 44 }}>💡</div>
          <div style={{ fontSize: 24, color: C.amberLight, fontFamily: FONT, lineHeight: 1.4, fontWeight: 600 }}>
            "When does an action stay <strong>completely locked in history</strong>, and when does it <strong>actively touch right now</strong>?"
          </div>
        </div>
      </FadeSlide>
    </AbsoluteFill>
  );
};

// ============================================================
// SCENE 2: GRAMMAR FORMULAS & ANATOMY (300 - 660f / 12s)
// ============================================================
const Scene2Formulas: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '120px 100px 60px' }}>
      <FadeSlide delay={5}>
        <h2 style={{ fontSize: 44, fontWeight: 800, fontFamily: FONT, color: C.text, margin: '0 0 36px 0', textAlign: 'center' }}>
          Sentence Anatomy: <span style={{ color: C.blue }}>The Hidden Mechanism</span>
        </h2>
      </FadeSlide>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, width: '100%', maxWidth: 1500 }}>
        {/* Past Simple Card */}
        <FadeSlide delay={15} y={40}>
          <div style={glass({ border: `2px solid ${C.rose}60`, padding: 36 })}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <span style={{ fontSize: 22, fontWeight: 900, color: C.rose, fontFamily: FONT, textTransform: 'uppercase' }}>
                Past Simple
              </span>
              <span style={{ fontSize: 16, fontWeight: 700, color: C.roseLight, background: `${C.rose}25`, padding: '6px 14px', borderRadius: 12 }}>
                Standalone Past Verb
              </span>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: 16, padding: '18px 24px', marginBottom: 20, fontFamily: MONO, fontSize: 26, fontWeight: 700, color: C.text }}>
              (+) S + <span style={{ color: C.rose }}>V2 / V-ed</span>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: 16, padding: '18px 24px', marginBottom: 24, fontFamily: MONO, fontSize: 22, fontWeight: 600, color: C.roseLight }}>
              (-) S + <span style={{ color: C.rose }}>didn't</span> + V-inf
            </div>

            <div style={{ fontSize: 19, color: C.muted, fontFamily: FONT, lineHeight: 1.5 }}>
              • One-word past verb (<span style={{ color: C.text, fontWeight: 700 }}>visited, lived, bought</span>).<br />
              • Action is cut off from the present moment.
            </div>
          </div>
        </FadeSlide>

        {/* Present Perfect Card */}
        <FadeSlide delay={30} y={40}>
          <div style={glass({ border: `2px solid ${C.green}60`, padding: 36 })}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <span style={{ fontSize: 22, fontWeight: 900, color: C.green, fontFamily: FONT, textTransform: 'uppercase' }}>
                Present Perfect
              </span>
              <span style={{ fontSize: 16, fontWeight: 700, color: C.greenLight, background: `${C.green}25`, padding: '6px 14px', borderRadius: 12 }}>
                Auxiliary + Participle
              </span>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: 16, padding: '18px 24px', marginBottom: 20, fontFamily: MONO, fontSize: 26, fontWeight: 700, color: C.text }}>
              (+) S + <span style={{ color: C.green }}>have / has</span> + <span style={{ color: C.amber }}>V3 (pp)</span>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: 16, padding: '18px 24px', marginBottom: 24, fontFamily: MONO, fontSize: 22, fontWeight: 600, color: C.greenLight }}>
              (-) S + <span style={{ color: C.green }}>haven't / hasn't</span> + V3
            </div>

            <div style={{ fontSize: 19, color: C.muted, fontFamily: FONT, lineHeight: 1.5 }}>
              • <strong style={{ color: C.amber }}>"HAVE / HAS"</strong> belongs to the present tense family!<br />
              • It acts as a <strong style={{ color: C.text }}>magnetic anchor</strong> pulling the action into NOW.
            </div>
          </div>
        </FadeSlide>
      </div>
    </AbsoluteFill>
  );
};

// ============================================================
// SCENE 3: PAST SIMPLE TIMELINE (660 - 1020f / 12s)
// ============================================================
const Scene3PastTimeline: React.FC = () => {
  const frame = useCurrentFrame();
  const lockProgress = spring({ frame: Math.max(0, frame - 40), fps: 30, config: { damping: 12 } });

  return (
    <AbsoluteFill style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '120px 100px 60px' }}>
      <FadeSlide delay={5}>
        <div style={glass({ padding: '18px 40px', border: `2px solid ${C.rose}70`, marginBottom: 50, textAlign: 'center' })}>
          <span style={{ fontSize: 34, fontWeight: 800, fontFamily: FONT, color: C.text }}>
            "She <span style={{ color: C.rose, textDecoration: 'underline' }}>visited</span> Tokyo <span style={{ color: C.amber }}>in 2019</span>."
          </span>
        </div>
      </FadeSlide>

      {/* SVG Interactive Timeline */}
      <div style={{ width: '100%', maxWidth: 1400, position: 'relative', height: 260 }}>
        {/* Main Axis Line */}
        <div style={{ position: 'absolute', top: 120, left: 40, right: 40, height: 6, background: '#1E293B', borderRadius: 999 }}>
          {/* Active past segment */}
          <div style={{ position: 'absolute', left: 0, width: '38%', height: '100%', background: C.rose, borderRadius: 999 }} />
        </div>

        {/* PAST Label */}
        <div style={{ position: 'absolute', top: 145, left: 40, fontSize: 20, fontWeight: 800, color: C.muted, fontFamily: FONT }}>
          PAST (Quá khứ)
        </div>

        {/* 2019 Marker */}
        <FadeSlide delay={20} y={-20} style={{ position: 'absolute', left: '32%', top: 30, transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ background: C.rose, color: '#FFF', padding: '8px 20px', borderRadius: 14, fontWeight: 800, fontSize: 20, fontFamily: FONT, marginBottom: 12 }}>
            📍 2019
          </div>
          <div style={{ width: 24, height: 24, borderRadius: '50%', background: C.rose, border: '4px solid #FFF', boxShadow: `0 0 20px ${C.rose}` }} />
          <div style={{ marginTop: 24, ...glass({ padding: '10px 20px', border: `1.5px solid ${C.rose}` }) }}>
            <span style={{ fontSize: 16, fontWeight: 800, color: C.roseLight, fontFamily: FONT }}>
              🔒 Action Complete & Finished
            </span>
          </div>
        </FadeSlide>

        {/* Red Barrier Line */}
        <FadeSlide delay={45} style={{ position: 'absolute', left: '55%', top: 40, bottom: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: 4, height: 160, borderLeft: `3px dashed ${C.rose}` }} />
          <div style={{ position: 'absolute', top: 60, left: 16, whiteSpace: 'nowrap', ...glass({ padding: '8px 18px', border: `1.5px solid ${C.rose}` }) }}>
            <span style={{ fontSize: 16, fontWeight: 800, color: C.rose, fontFamily: FONT }}>
              🚫 ZERO LINK TO NOW
            </span>
          </div>
        </FadeSlide>

        {/* NOW Marker */}
        <FadeSlide delay={15} style={{ position: 'absolute', left: '75%', top: 30, transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ background: '#451A03', color: C.amber, border: `1.5px solid ${C.amber}`, padding: '8px 20px', borderRadius: 14, fontWeight: 800, fontSize: 20, fontFamily: FONT, marginBottom: 12 }}>
            NOW (Hiện tại)
          </div>
          <div style={{ width: 24, height: 24, borderRadius: '50%', background: C.amber, border: '4px solid #FFF', boxShadow: `0 0 24px ${C.amber}` }} />
        </FadeSlide>

        {/* FUTURE Label */}
        <div style={{ position: 'absolute', top: 145, right: 40, fontSize: 20, fontWeight: 800, color: '#475569', fontFamily: FONT }}>
          FUTURE
        </div>
      </div>

      {/* Signal words chips */}
      <FadeSlide delay={55} y={20}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 40 }}>
          <span style={{ fontSize: 18, fontWeight: 700, color: C.muted, fontFamily: FONT }}>Specific Past Signals:</span>
          {['yesterday', 'in 2019', 'last year', '3 days ago', 'when I was a child'].map((sig, i) => (
            <div key={i} style={{ padding: '6px 16px', borderRadius: 999, background: 'rgba(244,63,94,0.15)', border: '1px solid rgba(244,63,94,0.4)', color: C.roseLight, fontSize: 16, fontWeight: 700, fontFamily: FONT }}>
              {sig}
            </div>
          ))}
        </div>
      </FadeSlide>
    </AbsoluteFill>
  );
};

// ============================================================
// SCENE 4: PRESENT PERFECT TIMELINE (1020 - 1380f / 12s)
// ============================================================
const Scene4PresentTimeline: React.FC = () => {
  const frame = useCurrentFrame();
  const beamLength = spring({ frame: Math.max(0, frame - 25), fps: 30, config: { damping: 14, mass: 0.8 } });

  return (
    <AbsoluteFill style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '120px 100px 60px' }}>
      <FadeSlide delay={5}>
        <div style={glass({ padding: '18px 40px', border: `2px solid ${C.green}70`, marginBottom: 50, textAlign: 'center' })}>
          <span style={{ fontSize: 34, fontWeight: 800, fontFamily: FONT, color: C.text }}>
            "She <span style={{ color: C.green, textDecoration: 'underline' }}>has lived</span> in Tokyo <span style={{ color: C.amber }}>for 4 years</span>."
          </span>
        </div>
      </FadeSlide>

      {/* SVG Interactive Timeline with Dynamic Laser Beam */}
      <div style={{ width: '100%', maxWidth: 1400, position: 'relative', height: 260 }}>
        {/* Base Axis Line */}
        <div style={{ position: 'absolute', top: 120, left: 40, right: 40, height: 6, background: '#1E293B', borderRadius: 999 }} />

        {/* Dynamic Vector Beam starting from 32% to 75% */}
        <div
          style={{
            position: 'absolute',
            top: 118,
            left: '32%',
            width: `${beamLength * 43}%`,
            height: 10,
            background: 'linear-gradient(90deg, #10B981, #38BDF8, #F59E0B)',
            borderRadius: 999,
            boxShadow: '0 0 25px rgba(16,185,129,0.8)',
          }}
        />

        {/* Start Marker: 4 years ago */}
        <FadeSlide delay={15} y={-20} style={{ position: 'absolute', left: '32%', top: 30, transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ background: C.green, color: '#FFF', padding: '8px 20px', borderRadius: 14, fontWeight: 800, fontSize: 20, fontFamily: FONT, marginBottom: 12 }}>
            ⏱ 4 years ago
          </div>
          <div style={{ width: 24, height: 24, borderRadius: '50%', background: C.green, border: '4px solid #FFF', boxShadow: `0 0 20px ${C.green}` }} />
          <div style={{ marginTop: 24, color: C.greenLight, fontSize: 16, fontWeight: 700, fontFamily: FONT }}>
            Action Began
          </div>
        </FadeSlide>

        {/* Impact Message above Beam */}
        <FadeSlide delay={45} y={15} style={{ position: 'absolute', left: '53.5%', top: -20, transform: 'translateX(-50%)' }}>
          <div style={glass({ padding: '8px 20px', border: `1.5px solid ${C.green}`, borderRadius: 999 })}>
            <span style={{ fontSize: 16, fontWeight: 800, color: C.greenLight, fontFamily: FONT, letterSpacing: 0.5 }}>
              ⚡ CONTINUOUS BRIDGE TO THE PRESENT
            </span>
          </div>
        </FadeSlide>

        {/* NOW Marker with Pulsing Ring */}
        <FadeSlide delay={15} style={{ position: 'absolute', left: '75%', top: 30, transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ background: '#064E3B', color: C.greenLight, border: `1.5px solid ${C.green}`, padding: '8px 20px', borderRadius: 14, fontWeight: 800, fontSize: 20, fontFamily: FONT, marginBottom: 12 }}>
            NOW (Hiện tại)
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ width: 26, height: 26, borderRadius: '50%', background: C.green, border: '4px solid #FFF', boxShadow: `0 0 30px ${C.green}` }} />
            {beamLength > 0.8 && (
              <div
                style={{
                  position: 'absolute',
                  inset: -14,
                  borderRadius: '50%',
                  border: `3px solid ${C.green}`,
                  animation: 'pulse 1s infinite',
                }}
              />
            )}
          </div>
          <div style={{ marginTop: 24, ...glass({ padding: '8px 20px', border: `1.5px solid ${C.green}` }) }}>
            <span style={{ fontSize: 16, fontWeight: 800, color: C.greenLight, fontFamily: FONT }}>
              ✨ Still living in Tokyo TODAY!
            </span>
          </div>
        </FadeSlide>
      </div>

      {/* Signal words chips */}
      <FadeSlide delay={55} y={20}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 40 }}>
          <span style={{ fontSize: 18, fontWeight: 700, color: C.muted, fontFamily: FONT }}>Present Perfect Signals:</span>
          {['for 4 years', 'since 2020', 'already', 'just', 'so far', 'up to now'].map((sig, i) => (
            <div key={i} style={{ padding: '6px 16px', borderRadius: 999, background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.4)', color: C.greenLight, fontSize: 16, fontWeight: 700, fontFamily: FONT }}>
              {sig}
            </div>
          ))}
        </div>
      </FadeSlide>
    </AbsoluteFill>
  );
};

// ============================================================
// SCENE 5: THE PRESENT RESULT DILEMMA (1380 - 1680f / 10s)
// ============================================================
const Scene5PresentResult: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '120px 100px 60px' }}>
      <FadeSlide delay={5}>
        <h2 style={{ fontSize: 44, fontWeight: 800, fontFamily: FONT, color: C.text, margin: '0 0 10px 0', textAlign: 'center' }}>
          The Crucial Distinction: <span style={{ color: C.amber }}>The Present Result</span>
        </h2>
      </FadeSlide>

      <FadeSlide delay={15}>
        <p style={{ fontSize: 22, color: C.muted, fontFamily: FONT, margin: '0 0 40px 0', textAlign: 'center' }}>
          When there is no specific time marker, look at <strong>what is happening right now</strong>!
        </p>
      </FadeSlide>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, width: '100%', maxWidth: 1450 }}>
        {/* Past Simple: Lost key */}
        <FadeSlide delay={20} y={30}>
          <div style={glass({ border: `2px solid ${C.rose}70`, padding: 36, height: '100%' })}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
              <span style={{ fontSize: 32 }}>🔑</span>
              <span style={{ fontSize: 26, fontWeight: 800, color: C.rose, fontFamily: FONT }}>
                "He lost his keys."
              </span>
            </div>
            <div style={{ height: 2, background: 'rgba(255,255,255,0.1)', margin: '16px 0 24px' }} />

            <div style={{ fontSize: 20, color: C.text, fontFamily: FONT, lineHeight: 1.6, marginBottom: 20 }}>
              • He lost them at some point in the past.<br />
              • <strong style={{ color: C.roseLight }}>Present Status is UNKNOWN:</strong><br />
              &nbsp;&nbsp;➔ Maybe he found them already!<br />
              &nbsp;&nbsp;➔ Maybe he got a replacement key!
            </div>
            <div style={{ padding: '12px 20px', borderRadius: 14, background: 'rgba(244,63,94,0.15)', color: C.roseLight, fontSize: 17, fontWeight: 700, fontFamily: FONT }}>
              Focus = The event that happened in the past.
            </div>
          </div>
        </FadeSlide>

        {/* Present Perfect: Has lost key */}
        <FadeSlide delay={35} y={30}>
          <div style={glass({ border: `2px solid ${C.green}70`, padding: 36, height: '100%' })}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
              <span style={{ fontSize: 32 }}>🚪</span>
              <span style={{ fontSize: 26, fontWeight: 800, color: C.green, fontFamily: FONT }}>
                "He has lost his keys."
              </span>
            </div>
            <div style={{ height: 2, background: 'rgba(255,255,255,0.1)', margin: '16px 0 24px' }} />

            <div style={{ fontSize: 20, color: C.text, fontFamily: FONT, lineHeight: 1.6, marginBottom: 20 }}>
              • He lost them in the past, BUT...<br />
              • <strong style={{ color: C.amberLight }}>Result is 100% ACTIVE RIGHT NOW:</strong><br />
              &nbsp;&nbsp;➔ He STILL does not have his keys!<br />
              &nbsp;&nbsp;➔ He is locked outside his house right now!
            </div>
            <div style={{ padding: '12px 20px', borderRadius: 14, background: 'rgba(16,185,129,0.15)', color: C.greenLight, fontSize: 17, fontWeight: 700, fontFamily: FONT }}>
              Focus = The consequence active at this exact second.
            </div>
          </div>
        </FadeSlide>
      </div>
    </AbsoluteFill>
  );
};

// ============================================================
// SCENE 6: SINCE VS FOR & INSTANT QUIZ (1680 - 1980f / 10s)
// ============================================================
const Scene6Quiz: React.FC = () => {
  const frame = useCurrentFrame();
  const isSolved = frame > 45;

  return (
    <AbsoluteFill style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '120px 100px 60px' }}>
      <FadeSlide delay={5}>
        <div style={{ display: 'flex', gap: 32, marginBottom: 40 }}>
          <div style={glass({ padding: '14px 30px', border: `1.5px solid ${C.blue}` })}>
            <span style={{ fontSize: 20, fontWeight: 800, color: C.blue, fontFamily: FONT }}>
              📍 SINCE + Point in Time (since 2018, since Monday)
            </span>
          </div>
          <div style={glass({ padding: '14px 30px', border: `1.5px solid ${C.amber}` })}>
            <span style={{ fontSize: 20, fontWeight: 800, color: C.amber, fontFamily: FONT }}>
              📏 FOR + Period / Duration (for 5 years, for 2 hours)
            </span>
          </div>
        </div>
      </FadeSlide>

      {/* Interactive Quiz Box */}
      <FadeSlide delay={15} scale>
        <div style={glass({ padding: '40px 60px', width: '100%', maxWidth: 1100, textAlign: 'center', border: `2px solid ${C.blue}` })}>
          <div style={{ fontSize: 18, fontWeight: 800, color: C.blue, fontFamily: FONT, letterSpacing: 1.5, marginBottom: 20 }}>
            QUICK MASTERY CHALLENGE
          </div>

          <div style={{ fontSize: 40, fontWeight: 800, fontFamily: FONT, color: C.text, margin: '20px 0 30px' }}>
            David{' '}
            <span
              style={{
                display: 'inline-block',
                padding: '4px 24px',
                borderRadius: 16,
                background: isSolved ? `${C.green}30` : 'rgba(255,255,255,0.1)',
                border: `2px solid ${isSolved ? C.green : C.amber}`,
                color: isSolved ? C.greenLight : C.amber,
                fontWeight: 900,
                transform: `scale(${isSolved ? 1.05 : 1})`,
                transition: 'all 0.3s ease',
              }}
            >
              {isSolved ? 'has taught' : '[ teach ]'}
            </span>{' '}
            English{' '}
            <span style={{ color: C.blue, textDecoration: 'underline' }}>since 2018</span>.
          </div>

          {isSolved && (
            <FadeSlide delay={0} y={15}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '10px 24px', borderRadius: 999, background: `${C.green}20`, border: `1.5px solid ${C.green}` }}>
                <span style={{ fontSize: 24 }}>🎉</span>
                <span style={{ fontSize: 20, fontWeight: 800, color: C.greenLight, fontFamily: FONT }}>
                  Correct! "since 2018" signals an ongoing action ➔ has taught!
                </span>
              </div>
            </FadeSlide>
          )}
        </div>
      </FadeSlide>
    </AbsoluteFill>
  );
};

// ============================================================
// SCENE 7: SUMMARY & OUTRO (1980 - 2160f / 6s)
// ============================================================
const Scene7Outro: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 120px' }}>
      <FadeSlide delay={5}>
        <div style={glass({ padding: '40px 60px', maxWidth: 1100, textAlign: 'center', border: `2px solid ${C.blue}` })}>
          <h2 style={{ fontSize: 36, fontWeight: 900, color: C.amber, fontFamily: FONT, margin: '0 0 24px 0' }}>
            GOLDEN RULES TO ALWAYS REMEMBER
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, textAlign: 'left', marginBottom: 36 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ fontSize: 24 }}>1️⃣</span>
              <span style={{ fontSize: 24, fontWeight: 700, color: C.roseLight, fontFamily: FONT }}>
                <strong>PAST SIMPLE:</strong> Specific time in past • 100% finished • No link to NOW.
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ fontSize: 24 }}>2️⃣</span>
              <span style={{ fontSize: 24, fontWeight: 700, color: C.greenLight, fontFamily: FONT }}>
                <strong>PRESENT PERFECT:</strong> Continuous journey • OR active result right at this moment.
              </span>
            </div>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 16,
              padding: '16px 36px',
              borderRadius: 999,
              background: 'linear-gradient(135deg, #2563EB, #10B981)',
              color: '#FFF',
              fontSize: 22,
              fontWeight: 800,
              fontFamily: FONT,
              boxShadow: '0 10px 30px rgba(37,99,235,0.4)',
            }}
          >
            🚀 Continue your Grammar Quest on LingoQuest!
          </div>
        </div>
      </FadeSlide>
    </AbsoluteFill>
  );
};

// ============================================================
// ROOT COMPONENT: SEAMLESS MULTI-SCENE SEQUENCE
// ============================================================
export const EnglishGrammarMotion: React.FC = () => {
  const frame = useCurrentFrame();
  const totalFrames = 2160;
  const progress = frame / totalFrames;

  // Determine current active section title for the top HUD
  let activeTitle = '1. The Core Timeline Concept';
  if (frame >= 300 && frame < 660) activeTitle = '2. Grammar Structure & Anatomy';
  else if (frame >= 660 && frame < 1020) activeTitle = '3. Past Simple: Locked in History';
  else if (frame >= 1020 && frame < 1380) activeTitle = '4. Present Perfect: The Living Bridge';
  else if (frame >= 1380 && frame < 1680) activeTitle = '5. The Present Result Distinction';
  else if (frame >= 1680 && frame < 1980) activeTitle = '6. Since vs For & Instant Challenge';
  else if (frame >= 1980) activeTitle = '7. Golden Rules Mastery';

  return (
    <AbsoluteFill style={{ background: C.bg }}>
      <AmbientBackground />
      <TopHeader sceneTitle={activeTitle} progress={progress} />

      <Sequence from={0} durationInFrames={300}>
        <Scene1Hook />
      </Sequence>

      <Sequence from={300} durationInFrames={360}>
        <Scene2Formulas />
      </Sequence>

      <Sequence from={660} durationInFrames={360}>
        <Scene3PastTimeline />
      </Sequence>

      <Sequence from={1020} durationInFrames={360}>
        <Scene4PresentTimeline />
      </Sequence>

      <Sequence from={1380} durationInFrames={300}>
        <Scene5PresentResult />
      </Sequence>

      <Sequence from={1680} durationInFrames={300}>
        <Scene6Quiz />
      </Sequence>

      <Sequence from={1980} durationInFrames={180}>
        <Scene7Outro />
      </Sequence>
    </AbsoluteFill>
  );
};
