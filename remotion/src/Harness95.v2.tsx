import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
  Easing,
} from 'remotion';

// ── PALETTE ──
const C = {
  ink: '#0A0F1E',
  line: '#E8F0FE',
  signal: '#FF3B30',
  hazard: '#FFD60A',
  cyan: '#00D4FF',
  steel: '#7C8DA6',
  navy: '#0F1A2E',
  muted: '#4A5A78',
} as const;

const W = 1920;
const H = 1080;
const FPS = 30;
const TOTAL = 1920; // 64s
// scene durations
const S01 = 240; // 0-8s
const S02 = 480; // 8-24s
const S03 = 480; // 24-40s
const S04 = 480; // 40-56s
const S05 = 240; // 56-64s

// ——— Fonts ———
// Instrument Serif + JetBrains Mono + Inter via Google Fonts static
const FontStyles: React.FC = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;600;800;900&display=swap');
  `}</style>
);

// ——— Helpers ———
const useRailSweep = (frameOffset = 0) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  // spec: spring({frame, fps, config:{damping:200}})
  return spring({ frame: frame - frameOffset, fps, config: { damping: 200 } });
};

// blueprint dot grid
const BlueprintGrid: React.FC<{ opacity?: number }> = ({ opacity = 1 }) => (
  <div
    style={{
      position: 'absolute',
      inset: 0,
      opacity,
      backgroundImage:
        'radial-gradient(circle, rgba(232,240,254,0.95) 1.1px, transparent 1.1px)',
      backgroundSize: '24px 24px',
      backgroundPosition: '0 0',
    }}
  />
);

// blueprint border + corner brackets
const BlueprintFrame: React.FC = () => (
  <>
    {/* outer technical border */}
    <div
      style={{
        position: 'absolute',
        left: 14,
        top: 14,
        right: 14,
        bottom: 14,
        border: '1px solid rgba(232,240,254,0.18)',
        pointerEvents: 'none',
      }}
    />
    {/* inner inset */}
    <div
      style={{
        position: 'absolute',
        left: 22,
        top: 22,
        right: 22,
        bottom: 22,
        border: '1px solid rgba(232,240,254,0.07)',
        pointerEvents: 'none',
      }}
    />
    {/* corner brackets 40px */}
    {[
      { left: 14, top: 14, borderTop: '2px solid #E8F0FE', borderLeft: '2px solid #E8F0FE' },
      { right: 14, top: 14, borderTop: '2px solid #E8F0FE', borderRight: '2px solid #E8F0FE' },
      { left: 14, bottom: 14, borderBottom: '2px solid #E8F0FE', borderLeft: '2px solid #E8F0FE' },
      { right: 14, bottom: 14, borderBottom: '2px solid #E8F0FE', borderRight: '2px solid #E8F0FE' },
    ].map((s: any, i) => (
      <div
        key={i}
        style={{
          position: 'absolute',
          width: 36,
          height: 36,
          opacity: 0.9,
          ...s,
        }}
      />
    ))}
    {/* centre crosshair */}
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: 22,
        width: 1,
        height: 18,
        background: 'rgba(232,240,254,0.18)',
        transform: 'translateX(-0.5px)',
      }}
    />
    <div
      style={{
        position: 'absolute',
        left: '50%',
        bottom: 22,
        width: 1,
        height: 18,
        background: 'rgba(232,240,254,0.18)',
        transform: 'translateX(-0.5px)',
      }}
    />
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: 22,
        width: 18,
        height: 1,
        background: 'rgba(232,240,254,0.18)',
        transform: 'translateY(-0.5px)',
      }}
    />
    <div
      style={{
        position: 'absolute',
        top: '50%',
        right: 22,
        width: 18,
        height: 1,
        background: 'rgba(232,240,254,0.18)',
        transform: 'translateY(-0.5px)',
      }}
    />
  </>
);

// Left rail 72px — single orchestrated sweep
const LeftRail: React.FC<{ activeIndex?: number }> = ({ activeIndex = 0 }) => {
  const frame = useCurrentFrame();
  const sweep = spring({ frame, fps: FPS, config: { damping: 200 } });
  // sweep drives vertical highlight position and opacity
  const ticks = ['01', '02', '03', '04'];
  const labels = ['HOOK', 'MCPs', 'SKILLS', 'PROOF'];

  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: 72,
        height: H,
        background: '#0F1A2E',
        borderRight: '1px solid rgba(232,240,254,0.14)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 10,
      }}
    >
      {/* vertical line sweep */}
      <div
        style={{
          position: 'absolute',
          left: 35,
          top: 0,
          width: 2,
          height: H * sweep,
          background: `linear-gradient(180deg, ${C.signal} 0%, ${C.cyan} 55%, rgba(232,240,254,0.18) 100%)`,
          opacity: 0.95,
          transformOrigin: 'top',
        }}
      />
      {/* moving dot */}
      <div
        style={{
          position: 'absolute',
          left: 32,
          top: interpolate(sweep, [0, 1], [0, H - 18]),
          width: 8,
          height: 8,
          borderRadius: 999,
          background: C.signal,
          boxShadow: `0 0 12px ${C.signal}`,
          opacity: interpolate(sweep, [0, 0.05, 1], [0, 1, 1]),
        }}
      />
      {/* ticks */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginTop: 36, width: '100%' }}>
        {ticks.map((t, i) => {
          const isActive = i === activeIndex;
          return (
            <div
              key={t}
              style={{
                height: 220,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: 8,
                opacity: interpolate(sweep, [0, 0.15 + i * 0.08, 0.25 + i * 0.08], [0, 0, 1]),
                transform: `translateY(${interpolate(sweep, [0.12 + i * 0.08, 0.25 + i * 0.08], [12, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })}px)`,
              }}
            >
              {/* number */}
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 18,
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  color: isActive ? C.hazard : 'rgba(232,240,254,0.9)',
                  background: isActive ? C.hazard : 'transparent',
                  border: `1px solid ${isActive ? C.hazard : 'rgba(232,240,254,0.14)'}`,
                  borderRadius: 8,
                  padding: '6px 0',
                  width: 42,
                  textAlign: 'center',
                  lineHeight: 1,
                }}
              >
                {t}
              </div>
              {/* vertical label */}
              <div
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13,
                                    lineHeight: 1.6,
                  letterSpacing: '0.22em',
                  color: isActive ? '#0A0F1E' : C.steel,
                  background: isActive ? 'rgba(232,240,254,0.9)' : 'transparent',
                  padding: '10px 4px',
                  transform: 'rotate(180deg)',
                  fontWeight: 600,
                }}
              >
                {labels[i]}
              </div>
              {/* tick line */}
              <div
                style={{
                  width: 1,
                  flex: 1,
                  marginTop: 8,
                  background: isActive ? C.hazard : 'rgba(232,240,254,0.12)',
                  opacity: 0.8,
                }}
              />
            </div>
          );
        })}
      </div>
      {/* bottom annotation */}
      <div
        style={{
          position: 'absolute',
          bottom: 28,
          left: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            writingMode: 'vertical-rl',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10.5,
                              lineHeight: 1.6,
            letterSpacing: '0.18em',
            color: 'rgba(124,141,166,0.7)',
            transform: 'rotate(180deg)',
          }}
        >
          1920×1080 · 30FPS · 64S
        </div>
      </div>
    </div>
  );
};

const GiantNumber: React.FC<{ value: string; opacity?: number }> = ({ value, opacity = 0.06 }) => {
  const frame = useCurrentFrame();
  const p = spring({ frame, fps: FPS, config: { damping: 200 } });
  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: `translate(-50%, -48%) translateY(${interpolate(p, [0, 1], [18, 0])}px)`,
        fontFamily: "'Instrument Serif', serif",
        fontSize: value.length > 3 ? 680 : 800,
        lineHeight: 1,
        letterSpacing: '-0.06em',
        fontWeight: 400,
        color: `rgba(232,240,254,${opacity})`,
        WebkitTextStroke: '1px rgba(232,240,254,0.18)',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        opacity: interpolate(p, [0, 0.2], [0, 1]),
      }}
    >
      {value}
    </div>
  );
};

// hazard stripe footer
const HazardStripe: React.FC<{ height?: number; top?: number }> = ({ height = 28, top }) => (
  <div
    style={{
      position: 'absolute',
      left: 72,
      right: 0,
      ...(top !== undefined ? { top } : { bottom: 0 }),
      height,
      background: `repeating-linear-gradient(135deg, ${C.hazard} 0 18px, #0A0F1E 18px 36px)`,
      borderTop: '2px solid #0A0F1E',
      borderBottom: '1px solid rgba(232,240,254,0.12)',
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 18,
      paddingRight: 18,
      justifyContent: 'space-between',
      zIndex: 5,
    }}
  >
    <div
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 13,
                          lineHeight: 1.6,
        letterSpacing: '0.18em',
        color: '#0A0F1E',
        fontWeight: 800,
      }}
    >
      ▓ HARNESS 9.5 — BRUTALIST BLUEPRINT — INK #0A0F1E / LINE #E8F0FE / SIGNAL #FF3B30 / HAZARD #FFD60A / CYAN #00D4FF
    </div>
    <div
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 13,
                          lineHeight: 1.6,
        letterSpacing: '0.14em',
        color: '#0A0F1E',
        fontWeight: 700,
      }}
    >
      64S · 1920F · 5 SCENES
    </div>
  </div>
);

// ——— SCENE 1 — HOOK ———
const Scene01: React.FC = () => {
  const frame = useCurrentFrame();
  const p = spring({ frame, fps: FPS, config: { damping: 200 } });
  const titleY = interpolate(p, [0, 1], [28, 0]);
  const titleOpacity = interpolate(p, [0, 0.18], [0, 1], { extrapolateRight: 'clamp' });

  // subtitle stagger
  const subP = spring({ frame: frame - 18, fps: FPS, config: { damping: 200 } });

  return (
    <AbsoluteFill style={{ background: C.ink }}>
      <BlueprintGrid opacity={0.14} />
      <BlueprintFrame />
      <GiantNumber value="9.5" opacity={0.07} />

      {/* technical top bar */}
      <div
        style={{
          position: 'absolute',
          left: 72 + 28,
          right: 28,
          top: 28,
          height: 44,
          border: '1px solid rgba(232,240,254,0.12)',
          background: 'rgba(15,26,46,0.72)',
          borderRadius: 18,
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 18px',
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
        }}
      >
        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <div style={{ width: 10, height: 10, background: C.signal, boxShadow: `0 0 10px ${C.signal}` }} />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14, lineHeight: 1.6, letterSpacing: '0.16em', color: C.line, fontWeight: 700 }}>
            REF: HARNESS — BLUEPRINT_EDITION
          </span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 1.6, letterSpacing: '0.14em', color: C.steel }}>REV 9.5 / 2026-09-04</span>
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, letterSpacing: '0.14em', color: C.cyan, fontWeight: 700, lineHeight: 1.6 }}>
          [ ● REC ] 1920×1080 @30FPS — DOTS 24PX
        </div>
      </div>

      {/* main headline */}
      <div
        style={{
          position: 'absolute',
          left: 72 + 64,
          top: 228,
          right: 64,
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
        }}
      >
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 15,
                              lineHeight: 1.6,
            letterSpacing: '0.32em',
            color: C.cyan,
            marginBottom: 18,
            fontWeight: 700,
          }}
        >
          — HARNESS // PERSISTENT PROFILE SYSTEM
        </div>
        <div
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 126,
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
            color: C.line,
            fontWeight: 400,
          }}
        >
          HARNESS <span style={{ color: C.hazard, fontStyle: 'italic' }}>9.5</span>
        </div>
        {/* underline blueprint */}
        <div
          style={{
            marginTop: 18,
            width: 620,
            height: 2,
            background: C.line,
            opacity: 0.9,
            transformOrigin: 'left',
            transform: `scaleX(${interpolate(p, [0.18, 0.55], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })})`,
          }}
        />
        <div
          style={{
            marginTop: 8,
            width: 620,
            height: 1,
            background: 'rgba(232,240,254,0.22)',
            transform: `scaleX(${interpolate(p, [0.3, 0.65], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })})`,
            transformOrigin: 'left',
          }}
        />
      </div>

      {/* subtitle pill */}
      <div
        style={{
          position: 'absolute',
          left: 72 + 64,
          top: 560,
          display: 'flex',
          gap: 12,
          alignItems: 'center',
          opacity: interpolate(subP, [0, 1], [0, 1]),
          transform: `translateY(${interpolate(subP, [0, 1], [16, 0])}px)`,
        }}
      >
        <div
          style={{
            border: '1px solid rgba(232,240,254,0.18)',
            background: 'rgba(15,26,46,0.9)',
            padding: '16px 22px',
            borderRadius: 18,
            backdropFilter: 'blur(6px)',
            boxShadow: '0 8px 32px rgba(10,15,30,0.25)',
            display: 'flex',
            gap: 18,
            alignItems: 'center',
          }}
        >
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 16.5, lineHeight: 1.6, letterSpacing: '0.12em', color: C.line, fontWeight: 700 }}>
            17 <span style={{ color: C.steel, fontWeight: 400 }}>MCPs</span>
          </span>
          <span style={{ width: 4, height: 4, background: C.steel, borderRadius: 999 }} />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 16.5, lineHeight: 1.6, letterSpacing: '0.12em', color: C.line, fontWeight: 700 }}>
            31 <span style={{ color: C.steel, fontWeight: 400 }}>Skills</span>
          </span>
          <span style={{ width: 4, height: 4, background: C.steel, borderRadius: 999 }} />
          <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 16.5, letterSpacing: '0.08em', color: C.cyan, fontWeight: 700 }}>
            PERSISTENT PROFILE
          </span>
        </div>
        <div
          style={{
            width: 48,
            height: 48,
            background: C.hazard,
            borderRadius: 14,
            boxShadow: '0 8px 32px rgba(10,15,30,0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #0A0F1E',
          }}
        >
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 20, lineHeight: 1.6, fontWeight: 900, color: '#0A0F1E' }}>↗</span>
        </div>
      </div>

      {/* bottom left spec */}
      <div
        style={{
          position: 'absolute',
          left: 72 + 64,
          bottom: 64,
          display: 'flex',
          gap: 28,
          opacity: interpolate(subP, [0.2, 1], [0, 1], { extrapolateLeft: 'clamp' }),
        }}
      >
        {[
          { k: 'PALETTE', v: 'INK #0A0F1E / LINE #E8F0FE' },
          { k: 'TYPE', v: 'INSTRUMENT SERIF 96PX / JETBRAINS MONO 14PX' },
          { k: 'GRID', v: 'DOTS 24PX / RAIL 72PX / 1920×1080' },
        ].map((s) => (
          <div key={s.k} style={{ borderLeft: '2px solid rgba(232,240,254,0.14)', paddingLeft: 12 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, lineHeight: 1.6, letterSpacing: '0.18em', color: C.steel }}>{s.k}</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 1.6, letterSpacing: '0.08em', color: 'rgba(232,240,254,0.72)', marginTop: 4 }}>{s.v}</div>,
                              lineHeight: 1.6,
          </div>
        ))}
      </div>

      {/* right side coordinates */}
      <div
        style={{
          position: 'absolute',
          right: 34,
          top: 120,
          bottom: 64,
          width: 1,
          background: 'rgba(232,240,254,0.08)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: 46,
          top: 220,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 13,
                            lineHeight: 1.6,
          letterSpacing: '0.18em',
          color: 'rgba(124,141,166,0.5)',
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
        }}
      >
        X: 072 — 1920 &nbsp;&nbsp; Y: 014 — 1080 &nbsp;&nbsp; GRID: 24
      </div>

      {/* dimension line bottom */}
      <div
        style={{
          position: 'absolute',
          left: 72 + 64,
          bottom: 34,
          right: 64,
          height: 1,
          background: 'rgba(232,240,254,0.12)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 72 + 64,
          bottom: 28,
          width: 1,
          height: 12,
          background: 'rgba(232,240,254,0.18)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: 64,
          bottom: 28,
          width: 1,
          height: 12,
          background: 'rgba(232,240,254,0.18)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: '50%',
          bottom: 18,
          transform: 'translateX(-50%)',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11.5,
                            lineHeight: 1.6,
          letterSpacing: '0.22em',
          color: 'rgba(124,141,166,0.6)',
        }}
      >
        ◀ 1848 PX ▶
      </div>
    </AbsoluteFill>
  );
};

// ——— SCENE 2 — 17 MCPs kinetic wires ———
const MCP_LIST = [
  'playwright',
  'drawio',
  'excel',
  'word',
  'powerpoint',
  'tikz',
  'openscad',
  'edge-tts',
  'fetch',
  'brave-search',
  'filesystem',
  'git',
  'reactvideoeditor',
  'canva',
  'orange-pi',
  'prisma',
  'office-com',
];

const Scene02: React.FC = () => {
  const frame = useCurrentFrame();
  const p = spring({ frame, fps: FPS, config: { damping: 200 } });

  // trunk pulse progress (0..1) over ~ 280 frames
  const trunkProgress = interpolate(frame, [12, 280], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.quad) });

  return (
    <AbsoluteFill style={{ background: C.ink }}>
      <BlueprintGrid opacity={0.1} />
      <BlueprintFrame />
      <GiantNumber value="17" opacity={0.055} />

      {/* header */}
      <div
        style={{
          position: 'absolute',
          left: 72 + 28,
          right: 28,
          top: 28,
          height: 46,
          border: '1px solid rgba(232,240,254,0.12)',
          background: 'rgba(15,26,46,0.82)',
          borderRadius: 16,
          backdropFilter: 'blur(6px)',
          boxShadow: '0 8px 32px rgba(10,15,30,0.18)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
          opacity: interpolate(p, [0, 0.25], [0, 1]),
          transform: `translateY(${interpolate(p, [0, 0.25], [12, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })}px)`,
        }}
      >
        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14, lineHeight: 1.6, letterSpacing: '0.18em', color: '#0A0F1E', fontWeight: 900, background: C.hazard, padding: '4px 8px' }}>
            02 — MCPs
          </div>
          <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 28, letterSpacing: '-0.02em', color: C.line }}>17 MCP SERVERS</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 1.6, letterSpacing: '0.14em', color: C.steel }}>WIRED · SIGNAL PULSE</span>
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, letterSpacing: '0.12em', color: C.cyan, lineHeight: 1.6 }}>
          STAGGER 60MS · SIGNAL #FF3B30
        </div>
      </div>

      {/* central trunk */}
      <svg
        width={W}
        height={H}
        style={{ position: 'absolute', left: 0, top: 0, pointerEvents: 'none' }}
      >
        {/* vertical trunk */}
        <line x1={960} y1={118} x2={960} y2={980} stroke="rgba(232,240,254,0.14)" strokeWidth={1.5} />
        <line
          x1={960}
          y1={118}
          x2={960}
          y2={interpolate(trunkProgress, [0, 1], [118, 980])}
          stroke={C.cyan}
          strokeWidth={2}
          opacity={0.9}
        />
        {/* trunk pulse dot */}
        <circle
          cx={960}
          cy={interpolate(trunkProgress, [0, 1], [118, 980])}
          r={6}
          fill={C.signal}
          opacity={frame < 12 ? 0 : 1}
          style={{ filter: `drop-shadow(0 0 8px ${C.signal})` }}
        />
        {/* horizontal branches */}
        {MCP_LIST.map((_, i) => {
          const isLeft = i < 8; // first 8 left, rest right
          const y = 156 + i * 48.5; // spread 17 across 156→ 932 approx
          const xEnd = isLeft ? 72 + 84 : W - 84 - 268;
          const xStart = 960;
          // branch reveal stagger 60ms = ~1.8frames ~2f
          const delay = 14 + i * 2;
          const branchProg = interpolate(frame, [delay, delay + 18], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.quad) });
          const pulseX = interpolate(branchProg, [0, 1], [xStart, isLeft ? xEnd + 268 : xEnd]);
          // only show branch line after trunk reaches y
          const trunkAtY = interpolate(trunkProgress, [0, 1], [118, 980]) >= y - 2 ? 1 : 0;
          const visible = trunkAtY * interpolate(frame, [delay - 2, delay], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

          return (
            <g key={i} opacity={visible}>
              {/* branch line */}
              <line
                x1={xStart}
                y1={y}
                x2={isLeft ? xEnd + 268 * branchProg : xStart + (xEnd - xStart) * branchProg}
                y2={y}
                stroke={branchProg < 1 ? C.signal : 'rgba(232,240,254,0.22)'}
                strokeWidth={branchProg < 1 ? 1.5 : 1}
                strokeDasharray={branchProg < 1 ? '0' : '0'}
              />
              {/* pulse dot on branch */}
              {branchProg > 0 && branchProg < 1 && (
                <circle cx={pulseX} cy={y} r={4} fill={C.signal} opacity={0.95} />
              )}
              {/* junction box */}
              <rect x={959} y={y - 5} width={3} height={10} fill={C.line} opacity={0.9} />
            </g>
          );
        })}
      </svg>

      {/* hub label */}
      <div
        style={{
          position: 'absolute',
          left: 960 - 88,
          top: 88,
          width: 176,
          background: C.navy,
          border: '1px solid rgba(232,240,254,0.18)',
          borderRadius: 16,
          backdropFilter: 'blur(6px)',
          boxShadow: '0 8px 24px rgba(10,15,30,0.22)',
          padding: '12px 14px',
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          opacity: interpolate(p, [0.2, 0.45], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
          transform: `translateY(${interpolate(p, [0.2, 0.45], [8, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })}px)`,
        }}
      >
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, lineHeight: 1.6, letterSpacing: '0.18em', color: C.cyan, fontWeight: 700 }}>HARNESS CORE</div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 1.6, letterSpacing: '0.12em', color: C.line, fontWeight: 700 }}>17 SERVERS · WIRED</div>,
                          lineHeight: 1.6,
        <div style={{ height: 2, background: C.signal, marginTop: 4, width: '100%' }} />
      </div>

      {/* nodes */}
      {MCP_LIST.map((name, i) => {
        const isLeft = i < 8;
        const y = 156 + i * 48.5;
        const x = isLeft ? 72 + 84 : W - 84 - 268;
        const delay = 16 + i * 2; // stagger 60ms ~2f
        const appear = spring({ frame: frame - delay, fps: FPS, config: { damping: 18, mass: 0.6 } } as any);
        // but use interpolate for opacity/translate per spec? We'll combine: use interpolate with delay for spec compliance
        const op = interpolate(frame, [delay, delay + 10], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
        const tx = interpolate(frame, [delay, delay + 14], [isLeft ? -14 : 14, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic) });
        const isActivePulse = frame >= delay && frame <= delay + 18;

        return (
          <div
            key={name}
            style={{
              position: 'absolute',
              left: x,
              top: y - 19,
              width: 268,
              height: 38,
              background: isActivePulse ? 'rgba(255,59,48,0.08)' : C.navy,
              border: `1px solid ${isActivePulse ? C.signal : 'rgba(232,240,254,0.14)'}`,
              display: 'flex',
              alignItems: 'center',
              padding: '0 10px',
              gap: 10,
              opacity: op,
              transform: `translateX(${tx}px)`,
              boxShadow: isActivePulse ? `0 0 0 1px ${C.signal} inset` : 'none',
            }}
          >
            {/* index */}
            <div
              style={{
                width: 28,
                height: 22,
                background: isActivePulse ? C.signal : 'rgba(232,240,254,0.08)',
                border: `1px solid ${isActivePulse ? C.signal : 'rgba(232,240,254,0.12)'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 13,
                                  lineHeight: 1.6,
                letterSpacing: '0.08em',
                color: isActivePulse ? '#fff' : C.steel,
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 16,
                                  lineHeight: 1.6,
                letterSpacing: '0.06em',
                color: isActivePulse ? C.line : 'rgba(232,240,254,0.86)',
                fontWeight: 700,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {name}
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6 }}>
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 999,
                  background: isActivePulse ? C.signal : C.cyan,
                  boxShadow: isActivePulse ? `0 0 8px ${C.signal}` : `0 0 6px ${C.cyan}`,
                  opacity: isActivePulse ? 1 : 0.9,
                }}
              />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, lineHeight: 1.6, letterSpacing: '0.12em', color: C.steel }}>●</span>
            </div>
          </div>
        );
      })}

      {/* bottom legend */}
      <div
        style={{
          position: 'absolute',
          left: 72 + 28,
          bottom: 38,
          display: 'flex',
          gap: 14,
          alignItems: 'center',
          opacity: interpolate(p, [0.4, 0.6], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
        }}
      >
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div style={{ width: 14, height: 2, background: C.signal }} />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 1.6, letterSpacing: '0.12em', color: C.line }}>SIGNAL PULSE</span>
        </div>
        <div style={{ width: 1, height: 14, background: 'rgba(232,240,254,0.12)' }} />
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div style={{ width: 14, height: 1, background: 'rgba(232,240,254,0.22)' }} />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 1.6, letterSpacing: '0.12em', color: C.steel }}>BLUEPRINT WIRE</span>
        </div>
        <div style={{ width: 1, height: 14, background: 'rgba(232,240,254,0.12)' }} />
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 1.6, letterSpacing: '0.14em', color: 'rgba(232,240,254,0.5)' }}>
          STAGGER 60MS · 17 NODES · DAMPING 200
        </span>
      </div>
    </AbsoluteFill>
  );
};

// ——— SCENE 3 — 31 SKILLS RAIL ———
const NEW_SKILLS = [
  { id: '01', name: 'frontend-design', size: '851K', desc: 'anthropics/skills — distinctive aesthetics' },
  { id: '02', name: 'remotion-best-practices', size: '508K', desc: 'remotion-dev/skills — 30+ Remotion rules' },
  { id: '03', name: 'pptx', size: '214K', desc: 'anthropics/skills — PptxGenJS + QA' },
];

const OLD_SKILLS = [
  'research-collector',
  'report-builder',
  'doc-ingest',
  'video-render',
  'premiere-pipeline',
  'premiere-assets',
  'motion-graphics-pipeline',
  'voiceover',
  'research-to-video-orchestrator',
  'cobrowse-excel',
  'cobrowse-word',
  'excel-agent',
  'word-agent',
  'drawio-diagram',
  'deck-builder',
  'ml-latex-diagram',
  'cad-model',
  'cad-orchestrator',
  'vision-qa',
  'memory',
  'vercel-react-best-practices',
  'prisma-cli',
  'prisma-client-api',
  'prisma-postgres',
  'ui-animation',
  'better-auth',
  'supabase',
  'supabase-postgres',
];

const Scene03: React.FC = () => {
  const frame = useCurrentFrame();
  const p = spring({ frame, fps: FPS, config: { damping: 200 } });
  // hazard bar position cycles through 3 new skills over ~ 360 frames
  const hazardY = interpolate(frame, [30, 110, 190, 270], [0, 110, 220, 220], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.inOut(Easing.cubic),
  });

  return (
    <AbsoluteFill style={{ background: C.ink }}>
      <BlueprintGrid opacity={0.09} />
      <BlueprintFrame />
      <GiantNumber value="31" opacity={0.05} />

      {/* header */}
      <div
        style={{
          position: 'absolute',
          left: 72 + 28,
          right: 28,
          top: 28,
          height: 46,
          border: '1px solid rgba(232,240,254,0.12)',
          background: 'rgba(15,26,46,0.82)',
          borderRadius: 16,
          backdropFilter: 'blur(6px)',
          boxShadow: '0 8px 32px rgba(10,15,30,0.18)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
          opacity: interpolate(p, [0, 0.2], [0, 1]),
          transform: `translateY(${interpolate(p, [0, 0.2], [10, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })}px)`,
        }}
      >
        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14, lineHeight: 1.6, letterSpacing: '0.18em', color: '#0A0F1E', fontWeight: 900, background: C.hazard, padding: '4px 8px' }}>
            03 — SKILLS
          </div>
          <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 28, letterSpacing: '-0.02em', color: C.line }}>31 SKILLS · 7 GROUPS + 3 NEW</span>
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 1.6, letterSpacing: '0.12em', color: C.hazard, fontWeight: 700, border: '1px solid rgba(255,214,10,0.4)', padding: '5px 10px', background: 'rgba(255,214,10,0.08)' }}>
          HAZARD AMBER · SLIDING BAR
        </div>
      </div>

      {/* left panel — new skills */}
      <div
        style={{
          position: 'absolute',
          left: 72 + 28,
          top: 98,
          width: 640,
          bottom: 56,
          background: C.navy,
          border: '1px solid rgba(232,240,254,0.14)',
          borderRadius: 20,
          backdropFilter: 'blur(8px)',
          boxShadow: '0 8px 32px rgba(10,15,30,0.25)',
          padding: 20,
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          opacity: interpolate(p, [0.15, 0.35], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 1.6, letterSpacing: '0.18em', color: C.cyan, fontWeight: 700 }}>NEW · 2026-09-04</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 1.6, letterSpacing: '0.14em', color: C.steel }}>via npx skills add</span>
        </div>

        <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {/* hazard sliding bar */}
          <div
            style={{
              position: 'absolute',
              left: -6,
              top: hazardY,
              width: 4,
              height: 94,
              background: C.hazard,
              boxShadow: `0 0 12px rgba(255,214,10,0.6)`,
              zIndex: 2,
              opacity: interpolate(frame, [0, 30], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: hazardY,
              right: 0,
              height: 94,
              background: 'rgba(255,214,10,0.06)',
              border: '1px solid rgba(255,214,10,0.18)',
              pointerEvents: 'none',
            }}
          />

          {NEW_SKILLS.map((s, i) => {
            const active = Math.round(hazardY / 110) === i;
            const rowOp = interpolate(frame, [18 + i * 14, 34 + i * 14], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
            return (
              <div
                key={s.name}
                style={{
                  height: 98,
                  border: `1px solid ${active ? C.hazard : 'rgba(232,240,254,0.12)'}`,
                  background: active ? 'rgba(255,214,10,0.07)' : 'rgba(10,15,30,0.9)',
                  borderRadius: 16,
                  boxShadow: active ? '0 6px 20px rgba(10,15,30,0.22)' : '0 4px 12px rgba(10,15,30,0.12)',
                  padding: '16px 18px 16px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: 6,
                  opacity: rowOp,
                  transform: `translateX(${interpolate(frame, [18 + i * 14, 34 + i * 14], [12, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })}px)`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 14,
                                        lineHeight: 1.6,
                      letterSpacing: '0.12em',
                      color: active ? '#0A0F1E' : C.line,
                      background: active ? C.hazard : 'rgba(232,240,254,0.1)',
                      padding: '3px 7px',
                      fontWeight: 800,
                      border: `1px solid ${active ? C.hazard : 'rgba(232,240,254,0.12)'}`,
                    }}
                  >
                    {s.id}
                  </div>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 16.5, lineHeight: 1.6, letterSpacing: '0.04em', color: C.line, fontWeight: 800 }}>{s.name}</span>
                  <span
                    style={{
                      marginLeft: 'auto',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 14,
                                        lineHeight: 1.6,
                      letterSpacing: '0.08em',
                      color: active ? C.hazard : C.steel,
                      fontWeight: 700,
                      border: `1px solid ${active ? 'rgba(255,214,10,0.4)' : 'rgba(124,141,166,0.18)'}`,
                      padding: '3px 8px',
                      background: active ? 'rgba(255,214,10,0.12)' : 'transparent',
                    }}
                  >
                    {s.size}
                  </span>
                </div>
                <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 14.5, letterSpacing: '0.02em', color: 'rgba(232,240,254,0.62)', lineHeight: 1.4 }}>{s.desc}</div>
                <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginTop: 2 }}>
                  <div style={{ width: 6, height: 6, background: active ? C.hazard : C.steel, borderRadius: 999 }} />
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, lineHeight: 1.6, letterSpacing: '0.14em', color: active ? C.hazard : C.steel, fontWeight: 700 }}>
                    {active ? '● ACTIVE' : '○ READY'}
                  </span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, lineHeight: 1.6, letterSpacing: '0.10em', color: 'rgba(124,141,166,0.5)' }}>
                    npx skills add {s.name}
                  </span>
                </div>
              </div>
            );
          })}

          {/* footer count */}
          <div
            style={{
              marginTop: 'auto',
              borderTop: '1px solid rgba(232,240,254,0.08)',
              paddingTop: 12,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 1.6, letterSpacing: '0.14em', color: C.steel }}>TOTAL 31 SKILLS · 28 EXISTING + 3 NEW</span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 1.6, letterSpacing: '0.14em', color: C.cyan, fontWeight: 700 }}>#FFD60A — HAZARD</span>
          </div>
        </div>
      </div>

      {/* right panel — old skills muted */}
      <div
        style={{
          position: 'absolute',
          right: 28,
          top: 98,
          width: 1080,
          bottom: 56,
          border: '1px solid rgba(232,240,254,0.06)',
          background: 'rgba(15,26,46,0.42)',
          borderRadius: 20,
          backdropFilter: 'blur(6px)',
          boxShadow: '0 8px 32px rgba(10,15,30,0.18)',
          padding: 18,
          opacity: interpolate(p, [0.25, 0.45], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 1.6, letterSpacing: '0.18em', color: 'rgba(232,240,254,0.42)', fontWeight: 700 }}>LEGACY SKILLS — 28 — MUTED</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, lineHeight: 1.6, letterSpacing: '0.12em', color: 'rgba(124,141,166,0.5)' }}>GROUPS: 7 · RESEARCH / VIDEO / OFFICE / DESIGN / CAD / QA / FRONTEND</span>
        </div>

        {/* columns */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, opacity: 0.72 }}>
          {OLD_SKILLS.map((name, i) => {
            const colOp = interpolate(frame, [30 + i * 1.2, 46 + i * 1.2], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
            return (
              <div
                key={name}
                style={{
                  height: 36,
                  border: '1px solid rgba(232,240,254,0.07)',
                  background: 'rgba(10,15,30,0.55)',
                  borderRadius: 12,
                  backdropFilter: 'blur(4px)',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 10px',
                  gap: 8,
                  opacity: colOp,
                }}
              >
                <div style={{ width: 4, height: 4, background: 'rgba(124,141,166,0.5)', borderRadius: 999, flexShrink: 0 }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 1.6, letterSpacing: '0.04em', color: 'rgba(232,240,254,0.58)', fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {name}
                </span>
              </div>
            );
          })}
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 12,
            right: 16,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11.5,
                              lineHeight: 1.6,
            letterSpacing: '0.14em',
            color: 'rgba(124,141,166,0.35)',
          }}
        >
          ◐ OPACITY 0.42 — EXISTING SKILLS FADED FOR FOCUS
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ——— SCENE 4 — PROOF — Google Form mock ———
const Scene04: React.FC = () => {
  const frame = useCurrentFrame();
  const p = spring({ frame, fps: FPS, config: { damping: 200 } });

  // typewriter for fields
  const fieldTexts = [
    'nhat.viral@gmail.com',
    'HARNESS 9.5 — Persistent Profile',
    'playwright, drawio, excel, powerpoint, edge-tts',
    'Đã kích hoạt — Lưu trên Google Account',
  ];
  const fieldProgress = fieldTexts.map((t, i) =>
    interpolate(frame, [24 + i * 36, 24 + i * 36 + 24], [0, t.length], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.quad) })
  );

  const checkOpacity = interpolate(frame, [210, 232], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const checkScale = interpolate(frame, [210, 238], [0.72, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.back(1.2)) });

  return (
    <AbsoluteFill style={{ background: C.ink }}>
      <BlueprintGrid opacity={0.08} />
      <BlueprintFrame />
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          fontFamily: "'Instrument Serif', serif",
          fontSize: 620,
          lineHeight: 1,
          color: 'rgba(232,240,254,0.04)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      >
        ✓
      </div>

      {/* header */}
      <div
        style={{
          position: 'absolute',
          left: 72 + 28,
          right: 28,
          top: 28,
          height: 46,
          border: '1px solid rgba(232,240,254,0.12)',
          background: 'rgba(15,26,46,0.82)',
          borderRadius: 16,
          backdropFilter: 'blur(6px)',
          boxShadow: '0 8px 32px rgba(10,15,30,0.18)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
          opacity: interpolate(p, [0, 0.2], [0, 1]),
        }}
      >
        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14, lineHeight: 1.6, letterSpacing: '0.18em', color: '#fff', fontWeight: 900, background: C.signal, padding: '4px 8px' }}>04 — PROOF</div>
          <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 28, letterSpacing: '-0.02em', color: C.line }}>PERSISTENT GOOGLE PROFILE</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 1.6, letterSpacing: '0.14em', color: C.cyan, border: '1px solid rgba(0,212,255,0.28)', padding: '4px 8px', background: 'rgba(0,212,255,0.08)' }}>LIVE DEMO</span>
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, letterSpacing: '0.12em', color: C.steel, display: 'flex', gap: 10, alignItems: 'center', lineHeight: 1.6 }}>
          <span style={{ width: 8, height: 8, background: '#1a73e8', display: 'inline-block' }} /> forms.gle/8CFBumJ4PJxVryge6
        </div>
      </div>

      {/* mock form card */}
      <div
        style={{
          position: 'absolute',
          left: 72 + 48,
          top: 98,
          width: 760,
          bottom: 56,
          background: '#ffffff',
          border: '1px solid rgba(10,15,30,0.12)',
          borderRadius: 20,
          boxShadow: '0 12px 40px rgba(10,15,30,0.18)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          opacity: interpolate(p, [0.15, 0.35], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
          transform: `translateY(${interpolate(p, [0.15, 0.35], [14, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })}px)`,
        }}
      >
        {/* google form header */}
        <div style={{ height: 10, background: '#673ab7' }} />
        <div style={{ padding: '22px 28px 18px', borderBottom: '1px solid #e8eaed' }}>
          <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 30, fontWeight: 400, color: '#202124', lineHeight: 1.2 }}>
            HARNESS 9.5 — Hồ sơ Persistent Profile
          </div>
          <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 16.5, color: '#5f6368', marginTop: 8, lineHeight: 1.5 }}>
            Biểu mẫu đã demo thật · Dữ liệu được lưu trên Google Account và tự động điền lại khi mở lại.
          </div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 1.6, letterSpacing: '0.08em', color: '#1a73e8', marginTop: 10, background: '#e8f0fe', padding: '6px 10px', display: 'inline-block', borderRadius: 16 }}>
            forms.gle/8CFBumJ4PJxVryge6 &nbsp;·&nbsp; ink #0A0F1E / proof render
          </div>
        </div>

        {/* fields */}
        <div style={{ padding: '18px 28px', display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
          {[
            { label: 'Địa chỉ email *', hint: 'Địa chỉ email của bạn' },
            { label: 'Workspace / Project *', hint: 'VD: AI Agent — HARNESS' },
            { label: 'MCPs đã dùng *', hint: 'Liệt kê các MCP đã test' },
            { label: 'Trạng thái lưu trữ *', hint: 'Profile có persistent không?' },
          ].map((f, i) => {
            const txt = fieldTexts[i].slice(0, Math.round(fieldProgress[i]));
            const showCursor = frame >= 24 + i * 36 && frame < 24 + i * 36 + 24 && txt.length < fieldTexts[i].length;
            const filled = txt.length > 0;
            return (
              <div
                key={f.label}
                style={{
                  border: filled ? '1px solid #1a73e8' : '1px solid #dadce0',
                  borderRadius: 14,
                  padding: '14px 16px',
                  background: filled ? '#e8f0fe' : '#fff',
                  position: 'relative',
                }}
              >
                <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 14, fontWeight: 600, letterSpacing: '0.02em', color: filled ? '#1a73e8' : '#5f6368', marginBottom: 8 }}>{f.label}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 16.5, lineHeight: 1.6, color: '#202124', minHeight: 18, display: 'flex', alignItems: 'center', gap: 2 }}>
                  {filled ? (
                    <>
                      <span>{txt}</span>
                      {showCursor && <span style={{ width: 2, height: 16, background: '#1a73e8', opacity: (frame % 12) < 6 ? 1 : 0 }} />}
                    </>
                  ) : (
                    <span style={{ color: '#9aa0a6' }}>{f.hint}</span>
                  )}
                </div>
                {filled && (
                  <div style={{ position: 'absolute', right: 12, top: 14, width: 18, height: 18, borderRadius: 999, background: '#1a73e8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: '#fff', fontSize: 14, fontWeight: 800 }}>✓</span>
                  </div>
                )}
              </div>
            );
          })}
          <div style={{ display: 'flex', gap: 12, marginTop: 6 }}>
            <div style={{ background: '#1a73e8', color: '#fff', fontFamily: "'Inter', system-ui, sans-serif", fontSize: 16.5, fontWeight: 600, padding: '10px 22px', borderRadius: 16 }}>Gửi</div>
            <div style={{ color: '#5f6368', fontFamily: "'Inter', system-ui, sans-serif", fontSize: 15, display: 'flex', alignItems: 'center' }}>Xóa hết câu trả lời</div>
          </div>
        </div>
      </div>

      {/* right — confirmation state */}
      <div
        style={{
          position: 'absolute',
          right: 28,
          top: 98,
          width: 980,
          bottom: 56,
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
        }}
      >
        {/* blueprint info card */}
        <div
          style={{
            background: C.navy,
            border: '1px solid rgba(232,240,254,0.12)',
            borderRadius: 16,
            backdropFilter: 'blur(6px)',
            boxShadow: '0 8px 32px rgba(10,15,30,0.22)',
            padding: 20,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            opacity: interpolate(p, [0.22, 0.42], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
          }}
        >
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <div style={{ width: 8, height: 8, background: C.cyan, boxShadow: `0 0 8px ${C.cyan}` }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 1.6, letterSpacing: '0.18em', color: C.cyan, fontWeight: 700 }}>FIELD VALUES — DEMO THẬT</span>
            <span style={{ marginLeft: 'auto', fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 1.6, letterSpacing: '0.12em', color: C.steel }}>AUTO-FILL · PERSISTENT</span>
          </div>
          <div style={{ height: 1, background: 'rgba(232,240,254,0.08)' }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {[
              { k: 'FORM ID', v: '8CFBumJ4PJxVryge6' },
              { k: 'STATUS', v: 'RECORDED — 200 OK' },
              { k: 'ACCOUNT', v: 'Google Account · Persistent' },
              { k: 'NEXT OPEN', v: 'Tự động điền ✓' },
            ].map((x) => (
              <div key={x.k} style={{ background: 'rgba(10,15,30,0.9)', border: '1px solid rgba(232,240,254,0.08)', padding: '10px 12px' }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, lineHeight: 1.6, letterSpacing: '0.14em', color: C.steel }}>{x.k}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 1.6, letterSpacing: '0.06em', color: C.line, marginTop: 4, fontWeight: 700 }}>{x.v}</div>,
                                  lineHeight: 1.6,
              </div>
            ))}
          </div>
        </div>

        {/* success card */}
        <div
          style={{
            flex: 1,
            background: '#0F1A2E',
            border: '1px solid rgba(124,141,166,0.18)',
            borderRadius: 20,
            backdropFilter: 'blur(6px)',
            boxShadow: '0 12px 36px rgba(10,15,30,0.24)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 32,
            position: 'relative',
            overflow: 'hidden',
            opacity: checkOpacity,
            transform: `scale(${checkScale})`,
          }}
        >
          {/* subtle grid inside */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(circle, rgba(232,240,254,0.6) 0.9px, transparent 0.9px)',
              backgroundSize: '20px 20px',
              opacity: 0.06,
            }}
          />
          <div
            style={{
              width: 86,
              height: 86,
              borderRadius: 999,
              background: '#1e8e3e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(30,142,62,0.35)',
              border: '3px solid #fff',
            }}
          >
            <span style={{ fontSize: 52, color: '#fff', fontWeight: 900 }}>✓</span>
          </div>
          <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 32, fontWeight: 700, color: C.line, marginTop: 18, textAlign: 'center' }}>
            Câu trả lời đã được ghi lại
          </div>
          <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 16.5, color: 'rgba(232,240,254,0.62)', marginTop: 8, textAlign: 'center', lineHeight: 1.5 }}>
            Hồ sơ của bạn sẽ được lưu và tự động điền khi mở lại biểu mẫu.
            <br />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14, lineHeight: 1.6, letterSpacing: '0.08em', color: C.cyan }}>forms.gle/8CFBumJ4PJxVryge6</span> đã xác nhận persistent.
          </div>
          <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 1.6, letterSpacing: '0.12em', color: '#0A0F1E', background: C.hazard, padding: '7px 12px', fontWeight: 800 }}>✓ PERSISTENT</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 1.6, letterSpacing: '0.12em', color: C.line, border: '1px solid rgba(232,240,254,0.14)', padding: '7px 12px', background: 'rgba(232,240,254,0.06)' }}>GOOGLE FORMS · 200 OK</div>,
                              lineHeight: 1.6,
          </div>
          <div style={{ position: 'absolute', bottom: 14, left: 18, right: 18, height: 1, background: 'rgba(232,240,254,0.08)' }} />
          <div style={{ position: 'absolute', bottom: 6, left: 18, fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, lineHeight: 1.6, letterSpacing: '0.16em', color: 'rgba(124,141,166,0.5)' }}>
            MOCK UI · BLUEPRINT ACCURATE — KHÔNG DÙNG ẢNH CHỤP THẬT · TÁI DỰNG CHÍNH XÁC FIELD FLOW
          </div>
        </div>

        {/* bottom note */}
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 1.6, letterSpacing: '0.12em', color: 'rgba(232,240,254,0.42)', textAlign: 'right' }}>
          * Demo đã thực hiện trên profile Google thật — mở lại form sẽ thấy giá trị cũ được điền sẵn.
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ——— SCENE 5 — CTA hazard yellow ———
const Scene05: React.FC = () => {
  const frame = useCurrentFrame();
  const p = spring({ frame, fps: FPS, config: { damping: 200 } });
  const titleOpacity = interpolate(p, [0, 0.22], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ background: C.ink }}>
      <BlueprintGrid opacity={0.07} />
      {/* top hazard bar */}
      <div
        style={{
          position: 'absolute',
          left: 72,
          top: 0,
          right: 0,
          height: 10,
          background: `repeating-linear-gradient(135deg, ${C.hazard} 0 14px, #0A0F1E 14px 28px)`,
          borderBottom: '1px solid rgba(232,240,254,0.12)',
        }}
      />
      <BlueprintFrame />

      <div
        style={{
          position: 'absolute',
          left: 72 + 28,
          right: 28,
          top: 28,
          height: 46,
          border: '1px solid rgba(232,240,254,0.12)',
          background: 'rgba(15,26,46,0.82)',
          borderRadius: 16,
          backdropFilter: 'blur(6px)',
          boxShadow: '0 8px 32px rgba(10,15,30,0.18)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
          opacity: titleOpacity,
        }}
      >
        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14, lineHeight: 1.6, letterSpacing: '0.18em', color: '#0A0F1E', fontWeight: 900, background: C.hazard, padding: '4px 8px' }}>05 — CTA</div>
          <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 28, letterSpacing: '-0.02em', color: C.line }}>INSTALL · 3 COMMANDS</span>
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 1.6, letterSpacing: '0.16em', color: C.hazard, fontWeight: 700 }}>npx skills add — RUN NOW</div>
      </div>

      {/* central hazard panel */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: `translate(-50%, -52%) translateY(${interpolate(p, [0, 0.28], [16, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })}px)`,
          width: 1220,
          background: C.hazard,
          border: '2px solid #0A0F1E',
          borderRadius: 18,
          boxShadow: '0 8px 32px rgba(10,15,30,0.25), 0 0 0 1px rgba(232,240,254,0.14) inset, 0 18px 44px rgba(0,0,0,0.18)',
          padding: 24,
          opacity: interpolate(p, [0.08, 0.28], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
        }}
      >
        {/* header inside yellow */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 18 }}>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 1.6, letterSpacing: '0.22em', color: '#0A0F1E', fontWeight: 800 }}>▓ HARNESS 9.5 — BRUTALIST BLUEPRINT</div>
            <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 52, lineHeight: 0.95, letterSpacing: '-0.03em', color: '#0A0F1E', marginTop: 8 }}>
              Copy. Paste. <span style={{ textDecoration: 'underline', textDecorationThickness: 3, textUnderlineOffset: 6 }}>Ship.</span>
            </div>
          </div>
          <div style={{ background: '#0A0F1E', color: C.hazard, fontFamily: "'JetBrains Mono', monospace", fontSize: 13, letterSpacing: '0.14em', fontWeight: 800, padding: '8px 12px', textAlign: 'right', lineHeight: 1.4 }}>
            3 NEW SKILLS
            <br />
            851K + 508K + 214K
          </div>
        </div>

        {/* commands */}
        <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { label: '01 — FRONTEND DESIGN', cmd: 'npx skills add anthropics/skills --skill frontend-design', note: '851K · distinctive aesthetics' },
            { label: '02 — REMOTION BEST PRACTICES', cmd: 'npx skills add remotion-dev/skills --skill remotion-best-practices', note: '508K · 30+ rules' },
            { label: '03 — PPTX', cmd: 'npx skills add anthropics/skills --skill pptx', note: '214K · PptxGenJS + QA' },
          ].map((c, i) => {
            const rowP = interpolate(frame, [12 + i * 8, 28 + i * 8], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic) });
            return (
              <div
                key={c.cmd}
                style={{
                  background: '#0A0F1E',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 14,
                  boxShadow: '0 4px 16px rgba(10,15,30,0.18)',
                  padding: '16px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  opacity: rowP,
                  transform: `translateY(${interpolate(rowP, [0, 1], [10, 0])}px)`,
                }}
              >
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, lineHeight: 1.6, letterSpacing: '0.16em', color: C.hazard, fontWeight: 800, background: 'rgba(255,214,10,0.12)', padding: '4px 7px', border: '1px solid rgba(255,214,10,0.28)', whiteSpace: 'nowrap' }}>
                  {c.label}
                </div>
                <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 18, lineHeight: 1.6, letterSpacing: '0.02em', color: C.line, fontWeight: 600, whiteSpace: 'nowrap' }}>{c.cmd}</code>
                <span style={{ marginLeft: 'auto', fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 1.6, letterSpacing: '0.08em', color: 'rgba(232,240,254,0.42)', whiteSpace: 'nowrap' }}>{c.note}</span>
                <div style={{ width: 28, height: 28, background: C.hazard, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 16.5, lineHeight: 1.6, fontWeight: 900, color: '#0A0F1E' }}>↵</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* bottom row inside yellow */}
        <div style={{ marginTop: 14, display: 'flex', gap: 10, alignItems: 'center' }}>
          <div style={{ flex: 1, height: 1, background: 'rgba(10,15,30,0.18)' }} />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, lineHeight: 1.6, letterSpacing: '0.16em', color: '#0A0F1E', fontWeight: 800 }}>OR — `npx skills add` IN ANY PROJECT</span>
          <div style={{ flex: 1, height: 1, background: 'rgba(10,15,30,0.18)' }} />
        </div>
        <div style={{ marginTop: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 1.6, letterSpacing: '0.12em', color: '#0A0F1E', fontWeight: 700 }}>RESTART OPENCODE TO LOAD · 1920×1080 · 64S · 5 SCENES</span>
          <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, letterSpacing: '-0.02em', color: '#0A0F1E', lineHeight: 1.6 }}>
            HARNESS <em style={{ fontStyle: 'italic' }}>9.5</em>
          </span>
        </div>
      </div>

      {/* footer hazard stripe */}
      <HazardStripe height={36} />
      <div
        style={{
          position: 'absolute',
          left: 72,
          right: 0,
          bottom: 36,
          height: 22,
          background: '#0A0F1E',
          borderTop: '1px solid rgba(232,240,254,0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, lineHeight: 1.6, letterSpacing: '0.18em', color: 'rgba(232,240,254,0.48)' }}>
          BRUTALIST BLUEPRINT — NO GRADIENT · NO ROUNDED WHITE CARD · NO FLOATING 3D — ONLY INK, LINE, SIGNAL & HAZARD · BUILT WITH REMOTION 4.X · SPRING DAMPING 200
        </span>
      </div>
    </AbsoluteFill>
  );
};

// ——— ROOT — unified brutalist blueprint composition ———
const RailWrapper: React.FC = () => {
  const frame = useCurrentFrame();
  const idx = frame < S01 ? 0 : frame < S01 + S02 ? 1 : frame < S01 + S02 + S03 ? 2 : 3;
  return <LeftRail activeIndex={idx} />;
};

export const Harness95: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: C.ink }}>
      <FontStyles />
      <RailWrapper />
      <div style={{ position: 'absolute', left: 72, top: 0, right: 0, bottom: 0 }}>
        <Sequence from={0} durationInFrames={S01}>
          <Scene01 />
        </Sequence>
        <Sequence from={S01} durationInFrames={S02}>
          <Scene02 />
        </Sequence>
        <Sequence from={S01 + S02} durationInFrames={S03}>
          <Scene03 />
        </Sequence>
        <Sequence from={S01 + S02 + S03} durationInFrames={S04}>
          <Scene04 />
        </Sequence>
        <Sequence from={S01 + S02 + S03 + S04} durationInFrames={S05}>
          <Scene05 />
        </Sequence>
      </div>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          left: 72,
          background: 'radial-gradient(1200px 700px at 70% 38%, transparent 60%, rgba(0,0,0,0.18) 100%)',
          pointerEvents: 'none',
        }}
      />
    </AbsoluteFill>
  );
};

export const Harness95Root = Harness95;
export default Harness95;