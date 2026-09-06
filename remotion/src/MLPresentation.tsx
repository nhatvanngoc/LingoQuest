import React from 'react';
import {
  AbsoluteFill,
  Img,
  Sequence,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

// ============================================================
// MLPresentation — ADAPTED FROM SaasDashboard (1920x1080@30fps)
// Fixes: chữ LỚN (title 80-92, body 26-32), ít trống (full-bleed 1400-1480),
// nhiều hình (≥8 distinct images + arch_diagram)
// 12 scenes synced to slide_durations_ms.json total 233.28s => ~6999 frames
// ============================================================

const FPS = 30;
const SLIDE_MS = [12320, 17360, 17200, 19360, 19520, 20400, 20480, 21920, 21600, 21280, 19840, 22000];
const SLIDE_FRAMES = SLIDE_MS.map((m) => Math.round((m / 1000) * FPS));
const SLIDE_STARTS = SLIDE_FRAMES.reduce((arr, dur, i) => {
  if (i === 0) arr.push(0);
  else arr.push(arr[i - 1] + SLIDE_FRAMES[i - 1]);
  return arr;
}, [] as number[]);
const TOTAL_FRAMES = SLIDE_FRAMES.reduce((a, b) => a + b, 0); // ~6999

const FONT = `system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif`;
const MONO = `Courier New, monospace`;

const COLORS = {
  blue: '#3B82F6',
  green: '#10B981',
  amber: '#F59E0B',
  purple: '#8B5CF6',
  slate: '#64748B',
  dark: '#0F172A',
  navy: '#0F172A',
};

// ---- IMAGES (distinct ≥10) ----
const IMG_HOLOGRAM = staticFile('images/ai-tech/hologram-interface.jpg');
const IMG_CODE = staticFile('images/ai-tech/code-programming.jpg');
const IMG_SERVER = staticFile('images/ai-tech/server-room-data-center.jpg');
const IMG_SECURITY = staticFile('images/ai-tech/cyber-security-digital.jpg');
const IMG_QUANTUM = staticFile('images/ai-tech/quantum-computer.jpg');
const IMG_BRAIN = staticFile('images/ai-tech/brain-neural-network-digital.jpg');
const IMG_BRAIN2 = staticFile('images/ai-tech/artificial-intelligence-brain.jpg');
const IMG_NEURAL = staticFile('images/ai-tech/neural-network-abstract.jpg');
const IMG_MLCHIP = staticFile('images/ai-tech/machine-learning-chip.jpg');
const IMG_ROBOT = staticFile('images/ai-tech/robot-technology.jpg');
const IMG_SMARTCITY = staticFile('images/ai-tech/smart-city-futuristic.jpg');
const IMG_FUTURECITY = staticFile('images/ai-tech/future-city-night-neon.jpg');
const IMG_SPACE = staticFile('images/ai-tech/space-technology-satellite.jpg');
const IMG_CYBERPUNK = staticFile('images/ai-tech/cyberpunk-technology.jpg');
const IMG_ARCH = staticFile('images/arch_diagram.png');
const IMG_ARCH2 = staticFile('images/ai-tech/arch_diagram.png');
const IMG_CNN = staticFile('images/ai-tech/cnn-example.png');
const IMG_ANN = staticFile('images/ai-tech/ann-example.png');
const IMG_MLCHIP_EVD = staticFile('images/ai-tech/ml-chip-evidence.png');

// ============================================================
// REUSED MCP COMPONENTS FROM SaasDashboard (unchanged)
// ============================================================

const BokehCircles: React.FC<{ count?: number }> = ({ count = 15 }) => {
  const frame = useCurrentFrame();
  const { width, height, fps } = useVideoConfig();
  const t = frame / fps;
  const circles = Array.from({ length: count }, (_, i) => {
    const baseX = ((i * 173 + 53) % 100) / 100;
    const baseY = ((i * 241 + 97) % 100) / 100;
    const driftX = Math.sin(t * 0.2 + i * 1.3) * 30;
    const driftY = Math.cos(t * 0.15 + i * 0.9) * 25;
    const x = baseX * width + driftX;
    const y = baseY * height + driftY;
    const baseSize = 40 + ((i * 37 + 11) % 80);
    const pulse = Math.sin(t * 0.4 + i * 0.7) * 0.2 + 1;
    const size = baseSize * pulse;
    const opacity = 0.08 + ((i * 19 + 7) % 20) / 200;
    const colorOptions = [
      [59, 130, 246],
      [139, 92, 246],
      [20, 184, 166],
      [245, 158, 11],
    ];
    const rgb = colorOptions[i % 4];
    return { x, y, size, opacity, rgb, key: i };
  });
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {circles.map((c) => (
        <div
          key={c.key}
          style={{
            position: 'absolute',
            left: c.x,
            top: c.y,
            width: c.size,
            height: c.size,
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(${c.rgb[0]},${c.rgb[1]},${c.rgb[2]},${c.opacity}) 0%, rgba(${c.rgb[0]},${c.rgb[1]},${c.rgb[2]},0) 100%)`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
};

const GridPulse: React.FC<{ dotColor?: string; rows?: number; cols?: number }> = ({
  dotColor = '#94A3B8',
  rows = 8,
  cols = 12,
}) => {
  const frame = useCurrentFrame();
  const { width, height, fps } = useVideoConfig();
  const t = frame / fps;
  const spacingX = width / (cols + 1);
  const spacingY = height / (rows + 1);
  const centerCol = (cols - 1) / 2;
  const centerRow = (rows - 1) / 2;
  const dots: { x: number; y: number; opacity: number; scale: number; key: number }[] = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = spacingX * (col + 1);
      const y = spacingY * (row + 1);
      const dx = col - centerCol;
      const dy = row - centerRow;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const wave = Math.sin(t * 3 - distance * 0.8);
      const normalizedWave = wave * 0.5 + 0.5;
      dots.push({ x, y, opacity: 0.06 + normalizedWave * 0.12, scale: 0.4 + normalizedWave * 0.6, key: row * cols + col });
    }
  }
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {dots.map((d) => (
        <div
          key={d.key}
          style={{
            position: 'absolute',
            left: d.x,
            top: d.y,
            width: 10,
            height: 10,
            borderRadius: '50%',
            backgroundColor: dotColor,
            opacity: d.opacity,
            transform: `translate(-50%, -50%) scale(${d.scale})`,
          }}
        />
      ))}
    </div>
  );
};

const KenBurns: React.FC<{ imageUrl: string; scale?: number; tx?: number; ty?: number }> = ({
  imageUrl,
  scale = 1.15,
  tx = -20,
  ty = -10,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = interpolate(frame, [0, fps * 4], [0, 1], { extrapolateRight: 'clamp' });
  const s = 1 + (scale - 1) * progress;
  const x = tx * progress;
  const y = ty * progress;
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden' }}>
      <Img
        src={imageUrl}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: `scale(${s}) translate(${x}px, ${y}px)`,
        }}
      />
    </div>
  );
};

const LineChartMCP: React.FC<{
  data?: { x: number; y: number; label: string }[];
  color?: string;
  pointColor?: string;
  title?: string;
  delay?: number;
}> = ({
  data = [
    { x: 0, y: 25, label: 'Q1' },
    { x: 1, y: 40, label: 'Q2' },
    { x: 2, y: 35, label: 'Q3' },
    { x: 3, y: 55, label: 'Q4' },
    { x: 4, y: 50, label: 'Q5' },
    { x: 5, y: 70, label: 'Q6' },
    { x: 6, y: 65, label: 'Q7' },
    { x: 7, y: 80, label: 'Q8' },
  ],
  color = '#3B82F6',
  pointColor = '#F59E0B',
  title = '',
  delay = 10,
}) => {
  const frame = useCurrentFrame();
  const chartWidth = 1160;
  const chartHeight = 380;
  const padding = 60;
  const xScale = (x: number) => (x / (data.length - 1)) * (chartWidth - padding * 2) + padding;
  const yScale = (y: number) => chartHeight - padding - (y / 100) * (chartHeight - padding * 2);
  const points = data.map((d) => `${xScale(d.x)},${yScale(d.y)}`).join(' ');
  let totalLength = 0;
  for (let i = 1; i < data.length; i++) {
    const dx = xScale(data[i].x) - xScale(data[i - 1].x);
    const dy = yScale(data[i].y) - yScale(data[i - 1].y);
    totalLength += Math.sqrt(dx * dx + dy * dy);
  }
  const dashOffset = interpolate(frame, [delay, delay + 50], [totalLength, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <svg width={chartWidth} height={chartHeight} style={{ display: 'block' }}>
      {[0, 25, 50, 75, 100].map((v) => (
        <React.Fragment key={v}>
          <line x1={padding} y1={yScale(v)} x2={chartWidth - padding} y2={yScale(v)} stroke="#E2E8F0" strokeWidth="1" />
          <text x={padding - 12} y={yScale(v) + 5} textAnchor="end" fill="#94A3B8" fontSize="18" fontFamily={FONT}>
            {v}
          </text>
        </React.Fragment>
      ))}
      <line x1={padding} y1={chartHeight - padding} x2={chartWidth - padding} y2={chartHeight - padding} stroke="#CBD5E1" strokeWidth="2" />
      {data.map((d, i) => (
        <text key={i} x={xScale(d.x)} y={chartHeight - padding + 22} textAnchor="middle" fill="#64748B" fontSize="18" fontFamily={FONT}>
          {d.label}
        </text>
      ))}
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={totalLength}
        strokeDashoffset={dashOffset}
      />
      {data.map((d, i) => {
        const pt = interpolate(frame, [delay + 5 + i * 5, delay + 10 + i * 5], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        });
        return <circle key={i} cx={xScale(d.x)} cy={yScale(d.y)} r={6 * pt} fill={pointColor} stroke="white" strokeWidth="2" opacity={pt} />;
      })}
      {title && (
        <text x={chartWidth / 2} y={padding - 18} textAnchor="middle" fill={COLORS.dark} fontSize="28" fontWeight="700" fontFamily={FONT}>
          {title}
        </text>
      )}
    </svg>
  );
};

const glassCardStyle = (style: React.CSSProperties = {}): React.CSSProperties =>
  ({
    background: 'rgba(255,255,255,0.78)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    borderRadius: 28,
    border: '1px solid rgba(255,255,255,0.85)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
    boxSizing: 'border-box',
    ...style,
  } as React.CSSProperties);

const GlassCard: React.FC<{ children?: React.ReactNode; style?: React.CSSProperties }> = ({ children, style }) => (
  <div style={glassCardStyle(style)}>{children}</div>
);

const AnimatedCard: React.FC<{
  children?: React.ReactNode;
  delay?: number;
  distance?: number;
  style?: React.CSSProperties;
}> = ({ children, delay = 0, distance = 24, style }) => {
  const frame = useCurrentFrame();
  const progress = spring({
    frame: Math.max(0, frame - delay),
    fps: FPS,
    config: { damping: 13, mass: 0.65 },
  });
  return (
    <div
      style={{
        opacity: progress,
        transform: `translateY(${(1 - progress) * distance}px) scale(${0.96 + 0.04 * progress})`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

const Pill: React.FC<{
  children: React.ReactNode;
  delay?: number;
  color?: string;
  style?: React.CSSProperties;
}> = ({ children, delay = 0, color = COLORS.blue, style }) => {
  const frame = useCurrentFrame();
  const p = spring({
    frame: Math.max(0, frame - delay),
    fps: FPS,
    config: { damping: 13, mass: 0.65 },
  });
  return (
    <div
      style={{
        opacity: p,
        transform: `scale(${0.85 + 0.15 * p}) translateY(${(1 - p) * 10}px)`,
        background: `${color}14`,
        border: `1px solid ${color}45`,
        borderRadius: 999,
        padding: '14px 28px',
        fontSize: 24,
        fontWeight: 700,
        color: COLORS.dark,
        fontFamily: FONT,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

const CountUp: React.FC<{
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  delay?: number;
  style?: React.CSSProperties;
}> = ({ value, decimals = 0, prefix = '', suffix = '', delay = 0, style }) => {
  const frame = useCurrentFrame();
  const progress = spring({
    frame: Math.max(0, frame - delay),
    fps: FPS,
    config: { damping: 13, mass: 0.65 },
  });
  const displayed =
    decimals > 0 ? (value * progress).toFixed(decimals) : Math.round(value * progress).toLocaleString('en-US');
  return (
    <span style={{ fontFamily: MONO, ...style }}>
      {prefix}
      {displayed}
      {suffix}
    </span>
  );
};

const FeatureProgress: React.FC<{ value: number; delay?: number; color: string }> = ({ value, delay = 0, color }) => {
  const frame = useCurrentFrame();
  const p = Math.min(1, spring({ frame: Math.max(0, frame - delay), fps: FPS, config: { damping: 13, mass: 0.65 } }));
  return (
    <div style={{ height: 7, background: '#E2E8F0', borderRadius: 4, overflow: 'hidden' }}>
      <div style={{ height: '100%', width: `${value * p}%`, background: color, borderRadius: 4 }} />
    </div>
  );
};

// SceneShell — full-bleed with KenBurns + overlay + Grid + Bokeh
const SceneShell: React.FC<{
  children?: React.ReactNode;
  bg?: string;
  overlay?: number;
  useGrid?: boolean;
  useBokeh?: boolean;
  gridRows?: number;
  gridCols?: number;
  seed?: number;
}> = ({ children, bg, overlay = 0.38, useGrid = true, useBokeh = true, gridRows, gridCols, seed = 0 }) => (
  <AbsoluteFill style={{ backgroundColor: '#F8FAFC' }}>
    {bg && <KenBurns imageUrl={bg} scale={1.08} tx={-8} ty={-4} />}
    {bg && overlay > 0 && <div style={{ position: 'absolute', inset: 0, backgroundColor: `rgba(255,255,255,${overlay})` }} />}
    {useGrid && <GridPulse rows={gridRows} cols={gridCols} />}
    {children}
    {useBokeh && <BokehCircles count={seed > 0 ? 12 : 8} />}
  </AbsoluteFill>
);

const SceneWrapper: React.FC<{ children?: React.ReactNode; duration?: number }> = ({ children, duration = 500 }) => {
  const frame = useCurrentFrame();
  const opacity = Math.min(
    interpolate(frame, [0, 8], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
    interpolate(frame, [duration - 8, duration], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
  );
  return <AbsoluteFill style={{ opacity }}>{children}</AbsoluteFill>;
};

// ============================================================
// SCENE 1 — HERO: Machine Learning Cơ bản → Tương lai (bg neural)
// ============================================================
const Scene1_Hero: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <SceneShell bg={IMG_NEURAL} overlay={0.38} seed={1} gridCols={14} gridRows={9}>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: '0 70px', gap: 36 }}>
        {/* LEFT TEXT 62% */}
        <div style={{ flex: '1.15', maxWidth: 980 }}>
          <AnimatedCard delay={0}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: 'rgba(245,158,11,0.16)',
                border: '1px solid rgba(245,158,11,0.35)',
                borderRadius: 999,
                padding: '12px 26px',
                fontSize: 22,
                fontWeight: 800,
                color: '#92400E',
                letterSpacing: '0.08em',
                fontFamily: FONT,
              }}
            >
              <span style={{ width: 13, height: 13, borderRadius: '50%', background: '#F59E0B', boxShadow: '0 0 10px rgba(245,158,11,0.6)' }} />
              MACHINE LEARNING • 24/08/2026 • NHÓM NGHIÊN CỨU ML
            </div>
          </AnimatedCard>
          <AnimatedCard delay={4}>
            <h1
              style={{
                fontSize: 88,
                fontWeight: 900,
                lineHeight: 1.04,
                color: COLORS.dark,
                margin: '22px 0 16px',
                fontFamily: FONT,
                textShadow: '0 2px 18px rgba(255,255,255,0.9), 0 4px 36px rgba(0,0,0,0.12)',
                letterSpacing: '-0.02em',
              }}
            >
              Machine Learning
              <br />
              <span style={{ color: COLORS.blue, textShadow: '0 2px 18px rgba(59,130,246,0.35)' }}>Cơ bản đến Tương lai</span>
            </h1>
          </AnimatedCard>
          <AnimatedCard delay={8}>
            <p
              style={{
                fontSize: 30,
                lineHeight: 1.45,
                color: '#334155',
                marginBottom: 18,
                maxWidth: 920,
                fontFamily: FONT,
                fontWeight: 600,
                textShadow: '0 1px 10px rgba(255,255,255,0.8)',
              }}
            >
              Tổng hợp Wikipedia, arXiv & docs <b>scikit-learn • TensorFlow • PyTorch</b> — từ cơ bản đến TinyML & đạo đức AI
            </p>
          </AnimatedCard>
          <AnimatedCard delay={12}>
            <p style={{ fontSize: 26, lineHeight: 1.5, color: '#475569', marginBottom: 28, maxWidth: 880, fontFamily: FONT }}>
              Pipeline trực quan qua <b>arch_diagram.png</b> — cái nhìn toàn cảnh cho sinh viên & kỹ sư
            </p>
          </AnimatedCard>
          <AnimatedCard delay={16} style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <div
              style={{
                background: `linear-gradient(90deg, ${COLORS.blue}, ${COLORS.purple})`,
                borderRadius: 999,
                padding: '18px 40px',
                fontSize: 26,
                fontWeight: 800,
                color: 'white',
                fontFamily: FONT,
                transform: `scale(${1 + 0.015 * Math.sin(frame / 6)})`,
                boxShadow: '0 10px 30px rgba(59,130,246,0.35)',
              }}
            >
              Bắt đầu khám phá →
            </div>
            <div
              style={{
                background: 'rgba(255,255,255,0.85)',
                border: '1px solid rgba(15,23,42,0.12)',
                borderRadius: 999,
                padding: '18px 32px',
                fontSize: 22,
                fontWeight: 700,
                color: COLORS.dark,
                fontFamily: FONT,
              }}
            >
              12 chương • 233s • Full HD
            </div>
          </AnimatedCard>
          <AnimatedCard delay={20} style={{ marginTop: 18, display: 'flex', gap: 12 }}>
            {['Scikit-learn', 'TensorFlow', 'PyTorch', 'TinyML'].map((t, i) => (
              <Pill key={t} delay={24 + i * 3} color={i === 0 ? COLORS.blue : i === 1 ? COLORS.amber : i === 2 ? COLORS.purple : COLORS.green} style={{ fontSize: 20, padding: '10px 20px' }}>
                {t}
              </Pill>
            ))}
          </AnimatedCard>
        </div>

        {/* RIGHT VISUAL 38% — stacked GlassCards with image */}
        <div style={{ width: 640, display: 'flex', flexDirection: 'column', gap: 18, perspective: 1000 }}>
          <AnimatedCard delay={10}>
            <GlassCard style={{ padding: 18, display: 'flex', gap: 16, alignItems: 'center', height: 220 }}>
              <div style={{ width: 280, height: 184, borderRadius: 18, overflow: 'hidden', flexShrink: 0, border: '1px solid rgba(255,255,255,0.9)' }}>
                <Img src={IMG_MLCHIP} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 30, fontWeight: 800, color: COLORS.dark, fontFamily: FONT, lineHeight: 1.1 }}>AI Chip + Neural Net</div>
                <div style={{ fontSize: 22, color: COLORS.slate, fontFamily: FONT, marginTop: 8, lineHeight: 1.4 }}>Minh họa mạng nơ-ron trên chip — nền tảng học sâu</div>
                <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
                  <span style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 999, padding: '6px 14px', fontSize: 18, fontWeight: 700, color: '#1D4ED8', fontFamily: FONT }}>CNN</span>
                  <span style={{ background: '#F5F3FF', border: '1px solid #DDD6FE', borderRadius: 999, padding: '6px 14px', fontSize: 18, fontWeight: 700, color: '#6D28D9', fontFamily: FONT }}>Transformer</span>
                </div>
              </div>
            </GlassCard>
          </AnimatedCard>
          <div style={{ display: 'flex', gap: 18 }}>
            <AnimatedCard delay={16} style={{ flex: 1 }}>
              <GlassCard style={{ padding: 22, textAlign: 'center', height: 200 }}>
                <div style={{ fontSize: 20, color: COLORS.slate, fontWeight: 700, fontFamily: FONT, letterSpacing: 0.06 + 'em' }}>Nguồn</div>
                <div style={{ fontSize: 42, fontWeight: 900, color: COLORS.dark, fontFamily: FONT, marginTop: 6 }}>12</div>
                <div style={{ fontSize: 20, color: COLORS.slate, fontFamily: FONT }}>Wikipedia + arXiv</div>
                <div style={{ fontSize: 18, color: '#64748B', fontFamily: FONT, marginTop: 6 }}>7 arXiv • 7 Wiki • 8 web</div>
              </GlassCard>
            </AnimatedCard>
            <AnimatedCard delay={18} style={{ flex: 1 }}>
              <GlassCard style={{ padding: 22, textAlign: 'center', height: 200 }}>
                <div style={{ fontSize: 20, color: COLORS.slate, fontWeight: 700, fontFamily: FONT }}>Pipeline</div>
                <div style={{ fontSize: 40, fontWeight: 900, color: COLORS.purple, fontFamily: FONT, marginTop: 6 }}>5 bước</div>
                <div style={{ fontSize: 20, color: COLORS.slate, fontFamily: FONT }}>Data → Deploy</div>
                <FeatureProgress value={100} delay={22} color={COLORS.purple} />
              </GlassCard>
            </AnimatedCard>
          </div>
          <AnimatedCard delay={20}>
            <GlassCard style={{ padding: '16px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 20, fontWeight: 700, color: COLORS.dark, fontFamily: FONT }}>evidence_ml.json • 2026</span>
              <span style={{ fontSize: 18, color: COLORS.slate, fontFamily: FONT }}>Anomaly • TinyML • Ethics</span>
            </GlassCard>
          </AnimatedCard>
        </div>
      </div>
    </SceneShell>
  );
};

// ============================================================
// SCENE 2 — What is ML (2 columns, brain image left)
// ============================================================
const Scene2_WhatIsML: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: '#F8FAFC' }}>
    <div style={{ position: 'absolute', inset: 0, display: 'flex' }}>
      {/* LEFT IMAGE 46% */}
      <div style={{ width: '46%', position: 'relative', overflow: 'hidden' }}>
        <KenBurns imageUrl={IMG_BRAIN} scale={1.12} tx={-12} ty={-6} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(15,23,42,0.08) 0%, rgba(248,250,252,0.0) 55%, rgba(248,250,252,1) 100%)' }} />
        {/* floating label */}
        <div style={{ position: 'absolute', bottom: 36, left: 36, right: 36 }}>
          <GlassCard style={{ padding: '18px 22px', display: 'flex', gap: 16, alignItems: 'center' }}>
            <div style={{ width: 92, height: 92, borderRadius: 16, overflow: 'hidden', flexShrink: 0 }}>
              <Img src={IMG_BRAIN2} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <div style={{ fontSize: 22, fontWeight: 800, color: COLORS.dark, fontFamily: FONT }}>Lê Viết Quốc & Google Brain</div>
              <div style={{ fontSize: 18, color: COLORS.slate, fontFamily: FONT, lineHeight: 1.4 }}>Học không giám sát quy mô lớn → Seq2Seq → AutoML</div>
            </div>
          </GlassCard>
        </div>
      </div>
      {/* RIGHT TEXT 54% */}
      <div style={{ flex: 1, padding: '48px 60px 48px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#F8FAFC' }}>
        <AnimatedCard delay={0}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 999, padding: '10px 20px', fontSize: 20, fontWeight: 800, color: '#1D4ED8', fontFamily: FONT, letterSpacing: 0.06 + 'em' }}>
            ● ĐỊNH NGHĨA
          </div>
        </AnimatedCard>
        <AnimatedCard delay={4}>
          <h2 style={{ fontSize: 80, fontWeight: 900, color: COLORS.dark, margin: '18px 0 12px', fontFamily: FONT, lineHeight: 1.02, textShadow: '0 2px 18px rgba(0,0,0,0.06)' }}>
            Máy học là gì?
          </h2>
        </AnimatedCard>
        <AnimatedCard delay={8}>
          <p style={{ fontSize: 30, fontWeight: 700, color: '#334155', lineHeight: 1.4, fontFamily: FONT, margin: 0, textShadow: '0 1px 8px rgba(255,255,255,0.6)' }}>
            Thuật toán <span style={{ color: COLORS.blue }}>học từ dữ liệu</span> để dự đoán, không lập trình tường minh từng quy tắc
          </p>
        </AnimatedCard>
        <AnimatedCard delay={12}>
          <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              { title: 'Nền tảng: Thống kê + Tối ưu', desc: 'Hồi quy • Phân loại • Tối ưu lồi • Xác suất — nền móng toán học', color: COLORS.blue, bg: 'rgba(59,130,246,0.11)' },
              { title: 'Học sâu: mạng nơ-ron nhiều lớp', desc: 'Perceptron → MLP → CNN/RNN/Transformer — tự học đặc trưng thô', color: COLORS.purple, bg: 'rgba(139,92,246,0.11)' },
              { title: 'Ứng dụng phổ biến', desc: 'Tìm kiếm • Đề xuất • Trợ lý ảo • Xe tự lái Waymo — vượt trội vs ML cổ điển', color: COLORS.green, bg: 'rgba(16,185,129,0.11)' },
            ].map((r, i) => (
              <div key={r.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: r.bg, border: `1px solid ${r.color}22`, borderRadius: 18, padding: '16px 20px' }}>
                <div style={{ width: 14, height: 14, borderRadius: '50%', background: r.color, marginTop: 8, flexShrink: 0, boxShadow: `0 0 10px ${r.color}66` }} />
                <div>
                  <div style={{ fontSize: 26, fontWeight: 800, color: COLORS.dark, fontFamily: FONT }}>{r.title}</div>
                  <div style={{ fontSize: 22, color: '#475569', fontFamily: FONT, lineHeight: 1.4, marginTop: 4 }}>{r.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedCard>
        <AnimatedCard delay={20} style={{ marginTop: 18, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Pill delay={22} color={COLORS.blue} style={{ fontSize: 18 }}>Wikipedia Học máy</Pill>
          <Pill delay={24} color={COLORS.purple} style={{ fontSize: 18 }}>Machine Learning (EN)</Pill>
          <Pill delay={26} color={COLORS.amber} style={{ fontSize: 18 }}>Trí tuệ nhân tạo</Pill>
        </AnimatedCard>
      </div>
    </div>
    <GridPulse rows={7} cols={16} />
    <BokehCircles count={10} />
  </AbsoluteFill>
);

// ============================================================
// SCENE 3 — Three pillars (3 cards dense, hologram bg)
// ============================================================
const Scene3_Pillars: React.FC = () => {
  const pillars = [
    {
      icon: '🎯',
      title: 'Học có giám sát',
      eng: 'Supervised',
      desc: 'Có nhãn (X,y), học ánh xạ f: X→y — hồi quy & phân loại',
      ex: 'Linear • SVM • Random Forest • XGBoost',
      color: COLORS.blue,
      bg: 'rgba(59,130,246,0.11)',
      img: IMG_CODE,
    },
    {
      icon: '🔍',
      title: 'Học không giám sát',
      eng: 'Unsupervised',
      desc: 'Không nhãn, khám phá cấu trúc — cụm, giảm chiều',
      ex: 'K-Means • GMM • PCA • Autoencoder',
      color: COLORS.green,
      bg: 'rgba(16,185,129,0.11)',
      img: IMG_BRAIN,
    },
    {
      icon: '🎮',
      title: 'Học tăng cường',
      eng: 'Reinforcement',
      desc: 'Agent ↔ môi trường, tối ưu phần thưởng tích lũy',
      ex: 'Q-Learning • PPO • AlphaGo/Zero',
      color: COLORS.purple,
      bg: 'rgba(139,92,246,0.11)',
      img: IMG_ROBOT,
    },
  ];
  return (
    <SceneShell bg={IMG_HOLOGRAM} overlay={0.44} seed={3} gridRows={8} gridCols={14}>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 70px' }}>
        <AnimatedCard delay={0}>
          <h2
            style={{
              fontSize: 78,
              fontWeight: 900,
              color: COLORS.dark,
              margin: 0,
              fontFamily: FONT,
              textAlign: 'center',
              textShadow: '0 2px 20px rgba(255,255,255,0.95), 0 4px 30px rgba(0,0,0,0.08)',
              lineHeight: 1.05,
            }}
          >
            Ba trụ cột của Machine Learning
          </h2>
        </AnimatedCard>
        <AnimatedCard delay={4}>
          <p style={{ fontSize: 28, color: '#334155', fontWeight: 600, fontFamily: FONT, margin: '14px 0 0', textAlign: 'center', textShadow: '0 1px 12px rgba(255,255,255,0.8)' }}>
            Phân loại nền tảng — mọi thuật toán đều thuộc một trong ba nhóm này
          </p>
        </AnimatedCard>

        <div style={{ display: 'flex', gap: 26, width: 1480, marginTop: 32, justifyContent: 'center' }}>
          {pillars.map((p, i) => (
            <AnimatedCard key={p.title} delay={8 + i * 6} style={{ flex: 1 }}>
              <GlassCard style={{ height: 540, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: 220, position: 'relative', overflow: 'hidden' }}>
                  <Img src={p.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, transparent 30%, rgba(15,23,42,0.45) 100%)` }} />
                  <div
                    style={{
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      background: 'rgba(255,255,255,0.92)',
                      borderRadius: 999,
                      padding: '10px 18px',
                      fontSize: 20,
                      fontWeight: 800,
                      color: p.color,
                      fontFamily: FONT,
                      boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                    }}
                  >
                    {p.icon} {p.eng}
                  </div>
                </div>
                <div style={{ padding: '22px 26px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: 32, fontWeight: 800, color: COLORS.dark, margin: '0 0 10px', fontFamily: FONT, lineHeight: 1.15 }}>{p.title}</h3>
                  <p style={{ fontSize: 23, color: '#475569', lineHeight: 1.45, fontFamily: FONT, margin: '0 0 14px', minHeight: 68 }}>{p.desc}</p>
                  <div style={{ background: p.bg, border: `1px solid ${p.color}22`, borderRadius: 14, padding: '14px 16px', marginTop: 'auto' }}>
                    <div style={{ fontSize: 16, fontWeight: 800, color: p.color, fontFamily: FONT, letterSpacing: 0.05 + 'em' }}>TIÊU BIỂU</div>
                    <div style={{ fontSize: 20, color: COLORS.dark, fontFamily: FONT, fontWeight: 600, marginTop: 4, lineHeight: 1.4 }}>{p.ex}</div>
                  </div>
                </div>
              </GlassCard>
            </AnimatedCard>
          ))}
        </div>
        <AnimatedCard delay={24} style={{ marginTop: 22, display: 'flex', gap: 12 }}>
          <Pill color={COLORS.blue}>scikit-learn</Pill>
          <Pill color={COLORS.slate}>Nguồn: Outline of ML</Pill>
          <Pill color={COLORS.green}>3 paradigms</Pill>
        </AnimatedCard>
      </div>
    </SceneShell>
  );
};

// ============================================================
// SCENE 4 — Supervised (chart + code image, dense)
// ============================================================
const Scene4_Supervised: React.FC = () => (
  <SceneShell seed={4} gridRows={8} gridCols={14}>
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '36px 70px', gap: 18 }}>
      <AnimatedCard delay={0}>
        <h2
          style={{
            fontSize: 76,
            fontWeight: 900,
            color: COLORS.dark,
            margin: 0,
            fontFamily: FONT,
            textAlign: 'center',
            textShadow: '0 2px 16px rgba(0,0,0,0.06)',
            lineHeight: 1.05,
          }}
        >
          Học có giám sát — <span style={{ color: COLORS.blue }}>Supervised</span>
        </h2>
      </AnimatedCard>
      <AnimatedCard delay={4}>
        <p style={{ fontSize: 28, color: '#334155', fontFamily: FONT, fontWeight: 600, textAlign: 'center', margin: 0, maxWidth: 1200, lineHeight: 1.45 }}>
          Mô hình ŷ = w<sup>T</sup>x + b • Loss MSE + L2 regularization chống overfitting • Accuracy / F1 / ROC-AUC
        </p>
      </AnimatedCard>

      <AnimatedCard delay={8} style={{ width: 1480 }}>
        <GlassCard style={{ padding: 28, display: 'flex', gap: 28, alignItems: 'stretch' }}>
          {/* Chart left 62% */}
          <div style={{ flex: '1.35' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <span style={{ fontSize: 28, fontWeight: 800, color: COLORS.dark, fontFamily: FONT }}>Pipeline sklearn + CV 5-fold</span>
              <div style={{ display: 'flex', gap: 8 }}>
                <span style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 999, padding: '8px 16px', fontSize: 18, fontWeight: 700, color: '#1D4ED8', fontFamily: FONT }}>Linear</span>
                <span style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 999, padding: '8px 16px', fontSize: 18, fontWeight: 700, color: '#15803D', fontFamily: FONT }}>XGBoost 95%</span>
              </div>
            </div>
            <div style={{ background: 'white', borderRadius: 18, border: '1px solid #E2E8F0', padding: '16px 8px', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
              <LineChartMCP
                color={COLORS.blue}
                pointColor={COLORS.amber}
                delay={12}
                data={[
                  { x: 0, y: 28, label: 'LogReg' },
                  { x: 1, y: 42, label: 'SVM' },
                  { x: 2, y: 48, label: 'RF' },
                  { x: 3, y: 62, label: 'GBT' },
                  { x: 4, y: 71, label: 'XGB' },
                  { x: 5, y: 78, label: 'LGBM' },
                  { x: 6, y: 84, label: 'Ensemble' },
                ]}
              />
            </div>
            <div style={{ display: 'flex', gap: 14, marginTop: 16 }}>
              {[
                { k: 'Accuracy', v: '92.4%', c: COLORS.blue },
                { k: 'F1-score', v: '0.91', c: COLORS.green },
                { k: 'ROC-AUC', v: '0.96', c: COLORS.purple },
              ].map((m, idx) => (
                <div key={m.k} style={{ flex: 1, background: 'rgba(255,255,255,0.9)', border: '1px solid #E2E8F0', borderRadius: 14, padding: '14px 16px', textAlign: 'center' }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: COLORS.slate, fontFamily: FONT, letterSpacing: 0.05 + 'em' }}>{m.k}</div>
                  <div style={{ fontSize: 30, fontWeight: 900, color: m.c, fontFamily: MONO }}>{m.v}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Right image + details 38% */}
          <div style={{ width: 520, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ height: 260, borderRadius: 18, overflow: 'hidden', border: '1px solid #E2E8F0' }}>
              <Img src={IMG_CODE} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <GlassCard style={{ padding: 20, background: 'rgba(248,250,252,0.95)' }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: COLORS.dark, fontFamily: FONT, marginBottom: 10 }}>Hồi quy vs Phân loại</div>
              {[
                { l: 'Hồi quy: MSE/RMSE/MAE', col: COLORS.blue },
                { l: 'Phân loại: Acc/Prec/Recall', col: COLORS.green },
                { l: 'CV 5-fold + GridSearch', col: COLORS.amber },
              ].map((it) => (
                <div key={it.l} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: it.col, flexShrink: 0 }} />
                  <span style={{ fontSize: 20, color: '#334155', fontFamily: FONT, fontWeight: 600 }}>{it.l}</span>
                </div>
              ))}
              <div style={{ marginTop: 12, height: 1, background: '#E2E8F0' }} />
              <div style={{ fontSize: 18, color: COLORS.slate, fontFamily: FONT, marginTop: 10, lineHeight: 1.4 }}>Nguồn: Google ML Crash Course • arXiv:2201.12150</div>
            </GlassCard>
          </div>
        </GlassCard>
      </AnimatedCard>
    </div>
  </SceneShell>
);

// ============================================================
// SCENE 5 — Unsupervised & RL (2 large cards, each with image)
// ============================================================
const Scene5_UnsupervisedRL: React.FC = () => (
  <SceneShell bg={IMG_SERVER} overlay={0.42} seed={5}>
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '36px 70px', gap: 16 }}>
      <AnimatedCard delay={0}>
        <h2 style={{ fontSize: 74, fontWeight: 900, color: COLORS.dark, margin: 0, fontFamily: FONT, textAlign: 'center', textShadow: '0 2px 20px rgba(255,255,255,0.9)', lineHeight: 1.05 }}>
          Học không giám sát & <span style={{ color: COLORS.purple }}>Tăng cường</span>
        </h2>
      </AnimatedCard>
      <div style={{ display: 'flex', gap: 28, width: 1480, marginTop: 8 }}>
        {/* Left: Unsupervised */}
        <AnimatedCard delay={6} style={{ flex: 1 }}>
          <GlassCard style={{ height: 640, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: 260, position: 'relative', overflow: 'hidden' }}>
              <Img src={IMG_ANN} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(15,23,42,0.55) 100%)' }} />
              <div style={{ position: 'absolute', bottom: 14, left: 16, background: 'rgba(255,255,255,0.94)', borderRadius: 999, padding: '8px 16px', fontSize: 18, fontWeight: 800, color: COLORS.green, fontFamily: FONT }}>K-Means • GMM • PCA • Autoencoder</div>
            </div>
            <div style={{ padding: '22px 26px', flex: 1 }}>
              <h3 style={{ fontSize: 32, fontWeight: 800, color: COLORS.dark, margin: '0 0 8px', fontFamily: FONT }}>Unsupervised</h3>
              <p style={{ fontSize: 22, color: '#475569', fontFamily: FONT, lineHeight: 1.45, margin: 0 }}>Không nhãn — khám phá cụm & giảm chiều. Đánh giá: <b>silhouette, reconstruction loss</b></p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 18 }}>
                {[
                  { t: 'K-Means', d: 'Cụm centroid', c: COLORS.green },
                  { t: 'PCA', d: 'Giảm chiều', c: COLORS.blue },
                  { t: 'GMM', d: 'Hỗn hợp Gaussian', c: COLORS.amber },
                  { t: 'Autoenc.', d: 'Nén tái tạo', c: COLORS.purple },
                ].map((x) => (
                  <div key={x.t} style={{ background: `${x.c}10`, border: `1px solid ${x.c}22`, borderRadius: 12, padding: '12px 14px' }}>
                    <div style={{ fontSize: 20, fontWeight: 800, color: COLORS.dark, fontFamily: FONT }}>{x.t}</div>
                    <div style={{ fontSize: 17, color: COLORS.slate, fontFamily: FONT }}>{x.d}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 16, background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 12, padding: '12px 16px', fontSize: 18, color: '#334155', fontFamily: FONT }}>
                <b>Tự giám sát → Foundation Models</b> — tiền thân LLM
              </div>
            </div>
          </GlassCard>
        </AnimatedCard>
        {/* Right: RL */}
        <AnimatedCard delay={10} style={{ flex: 1 }}>
          <GlassCard style={{ height: 640, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: 260, position: 'relative', overflow: 'hidden' }}>
              <Img src={IMG_ROBOT} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(15,23,42,0.55) 100%)' }} />
              <div style={{ position: 'absolute', bottom: 14, left: 16, background: 'rgba(255,255,255,0.94)', borderRadius: 999, padding: '8px 16px', fontSize: 18, fontWeight: 800, color: COLORS.purple, fontFamily: FONT }}>MDP (s,a,r) • π(a|s) • Reward</div>
            </div>
            <div style={{ padding: '22px 26px', flex: 1 }}>
              <h3 style={{ fontSize: 32, fontWeight: 800, color: COLORS.dark, margin: '0 0 8px', fontFamily: FONT }}>Reinforcement Learning</h3>
              <p style={{ fontSize: 22, color: '#475569', fontFamily: FONT, lineHeight: 1.45, margin: 0 }}>Agent tương tác môi trường, tối ưu phần thưởng — <b>AlphaGo • PPO</b></p>
              <div style={{ display: 'flex', gap: 12, marginTop: 18 }}>
                {[
                  { t: 'Q-Learning', c: COLORS.blue },
                  { t: 'PPO', c: COLORS.purple },
                  { t: 'AlphaZero', c: COLORS.amber },
                ].map((x) => (
                  <div key={x.t} style={{ flex: 1, background: `${x.c}10`, border: `1px solid ${x.c}22`, borderRadius: 12, padding: '14px 10px', textAlign: 'center' }}>
                    <div style={{ fontSize: 22, fontWeight: 800, color: x.c, fontFamily: FONT }}>{x.t}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 18, display: 'flex', gap: 12 }}>
                <div style={{ flex: 1, background: 'rgba(139,92,246,0.08)', borderRadius: 12, padding: '14px 16px', textAlign: 'center', border: '1px solid rgba(139,92,246,0.15)' }}>
                  <div style={{ fontSize: 18, color: COLORS.slate, fontFamily: FONT }}>Active Learning luồng</div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: COLORS.dark, fontFamily: FONT, marginTop: 4 }}>Giảm 70% chi phí gán nhãn</div>
                  <FeatureProgress value={70} delay={22} color={COLORS.purple} />
                </div>
              </div>
            </div>
          </GlassCard>
        </AnimatedCard>
      </div>
    </div>
  </SceneShell>
);

// ============================================================
// SCENE 6 — Deep Learning CNN/RNN/Transformer (3 cards dense)
// ============================================================
const Scene6_DeepLearning: React.FC = () => (
  <SceneShell bg={IMG_CYBERPUNK} overlay={0.40} seed={6}>
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '36px 70px', gap: 16 }}>
      <AnimatedCard delay={0}>
        <h2 style={{ fontSize: 78, fontWeight: 900, color: COLORS.dark, margin: 0, fontFamily: FONT, textAlign: 'center', textShadow: '0 2px 20px rgba(255,255,255,0.9)', lineHeight: 1.05 }}>
          Học sâu: <span style={{ color: COLORS.purple }}>CNN, RNN & Transformer</span>
        </h2>
      </AnimatedCard>
      <AnimatedCard delay={4}>
        <p style={{ fontSize: 26, color: '#334155', fontWeight: 600, fontFamily: FONT, textAlign: 'center', margin: 0, maxWidth: 1200 }}>Perceptron + backprop • Chú ý Attention(Q,K,V) • ALERT & Fourier ML cho PDE</p>
      </AnimatedCard>
      <div style={{ display: 'flex', gap: 24, width: 1480, marginTop: 8 }}>
        {[
          {
            title: 'CNN',
            sub: 'Tích chập • Chia sẻ trọng số',
            img: IMG_CNN,
            bullets: ['Kernel 3×3, stride 1', 'Bất biến dịch • Pooling', 'ResNet / EfficientNet / ViT'],
            color: COLORS.blue,
          },
          {
            title: 'RNN / LSTM',
            sub: 'Chuỗi thời gian • Ghi nhớ',
            img: IMG_MLCHIP_EVD,
            bullets: ['Khắc phục gradient biến mất', 'LSTM / GRU • Seq2Seq', 'BERT → GPT evolution'],
            color: COLORS.green,
          },
          {
            title: 'Transformer',
            sub: 'Attention is All You Need',
            img: IMG_FUTURECITY,
            bullets: ['Attention(Q,K,V) song song', 'ViT • ALERT-Transformer', 'Fourier ML cos-basis'],
            color: COLORS.purple,
          },
        ].map((c, i) => (
          <AnimatedCard key={c.title} delay={8 + i * 5} style={{ flex: 1 }}>
            <GlassCard style={{ height: 560, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: 210, overflow: 'hidden', position: 'relative' }}>
                <Img src={c.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, transparent 40%, ${c.color}18 100%)` }} />
                <div style={{ position: 'absolute', top: 14, left: 14, background: c.color, color: 'white', borderRadius: 999, padding: '8px 16px', fontSize: 20, fontWeight: 800, fontFamily: FONT }}>{c.title}</div>
              </div>
              <div style={{ padding: '20px 24px', flex: 1 }}>
                <div style={{ fontSize: 24, fontWeight: 800, color: COLORS.dark, fontFamily: FONT }}>{c.sub}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 14 }}>
                  {c.bullets.map((b) => (
                    <div key={b} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: c.color, flexShrink: 0 }} />
                      <span style={{ fontSize: 20, color: '#334155', fontFamily: FONT, fontWeight: 600 }}>{b}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 18, background: `${c.color}0E`, border: `1px solid ${c.color}22`, borderRadius: 12, padding: '12px 14px', fontSize: 18, color: '#475569', fontFamily: FONT, lineHeight: 1.4 }}>
                  {i === 0 ? 'Thị giác máy tính • ImageNet SOTA' : i === 1 ? 'Ngôn ngữ • Dịch máy Seq2Seq' : 'Thị giác + NLP • độ trễ thấp'}
                </div>
              </div>
            </GlassCard>
          </AnimatedCard>
        ))}
      </div>
      <AnimatedCard delay={24} style={{ display: 'flex', gap: 10 }}>
        <Pill color={COLORS.purple}>arXiv:2105.04026</Pill>
        <Pill color={COLORS.blue}>Attention(Q,K,V)</Pill>
        <Pill color={COLORS.green}>ReLU • Backprop • Adam</Pill>
      </AnimatedCard>
    </div>
  </SceneShell>
);

// ============================================================
// SCENE 7 — Pipeline: arch_diagram.png FULL (hero image)
// ============================================================
const Scene7_Pipeline: React.FC = () => (
  <SceneShell seed={7} gridRows={7} gridCols={14} useBokeh={false}>
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '32px 50px 34px', gap: 14 }}>
      <AnimatedCard delay={0}>
        <h2 style={{ fontSize: 68, fontWeight: 900, color: COLORS.dark, margin: 0, fontFamily: FONT, textAlign: 'center', lineHeight: 1.05, textShadow: '0 2px 16px rgba(0,0,0,0.06)' }}>
          Quy trình ML Pipeline <span style={{ color: COLORS.blue }}>5 bước</span> — From Data to Deployment
        </h2>
      </AnimatedCard>
      <AnimatedCard delay={4} style={{ display: 'flex', gap: 12 }}>
        <Pill color={COLORS.blue} style={{ fontSize: 20 }}>Data → Preprocess → Feature</Pill>
        <Pill color={COLORS.purple} style={{ fontSize: 20 }}>Model Hub [3 Branches]</Pill>
        <Pill color={COLORS.green} style={{ fontSize: 20 }}>Training → Evaluation → MLOps</Pill>
      </AnimatedCard>

      <AnimatedCard delay={8} style={{ width: 1520, flex: 1, maxHeight: 740, display: 'flex' }}>
        <GlassCard style={{ flex: 1, padding: 14, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: 'rgba(255,255,255,0.88)' }}>
          <div style={{ flex: 1, background: 'white', borderRadius: 18, overflow: 'hidden', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 8 }}>
            <Img src={IMG_ARCH} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div style={{ display: 'flex', gap: 10, marginTop: 12, justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', maxWidth: 1000 }}>
              <span style={{ background: '#F9731622', border: '1px solid #F9731633', borderRadius: 999, padding: '6px 12px', fontSize: 16, fontWeight: 700, color: '#9A3412', fontFamily: FONT }}>Data/ Eval • Orange</span>
              <span style={{ background: '#3B82F622', border: '1px solid #3B82F633', borderRadius: 999, padding: '6px 12px', fontSize: 16, fontWeight: 700, color: '#1D4ED8', fontFamily: FONT }}>Classical • Blue</span>
              <span style={{ background: '#8B5CF622', border: '1px solid #8B5CF633', borderRadius: 999, padding: '6px 12px', fontSize: 16, fontWeight: 700, color: '#6D28D9', fontFamily: FONT }}>Deep Learning • Purple</span>
              <span style={{ background: '#10B98122', border: '1px solid #10B98133', borderRadius: 999, padding: '6px 12px', fontSize: 16, fontWeight: 700, color: '#047857', fontFamily: FONT }}>TinyML/Edge • Green</span>
            </div>
            <span style={{ fontSize: 16, color: COLORS.slate, fontFamily: FONT, whiteSpace: 'nowrap' }}>Nguồn: Evidence ML • arch_diagram.png • 2026-08-24</span>
          </div>
        </GlassCard>
      </AnimatedCard>

      <AnimatedCard delay={14} style={{ display: 'flex', gap: 14, width: 1480 }}>
        {[
          { k: 'Train/Val/Test', v: '70/15/15', c: COLORS.blue },
          { k: 'Learning rate', v: '1e-5–1e-1', c: COLORS.purple },
          { k: 'Batch / Epochs', v: '16–512 / 10–500', c: COLORS.green },
          { k: 'Cloud vs Edge', v: 'Train nặng → infer nhẹ', c: COLORS.amber },
        ].map((s) => (
          <div key={s.k} style={{ flex: 1, background: 'rgba(255,255,255,0.85)', border: '1px solid #E2E8F0', borderRadius: 14, padding: '12px 14px', textAlign: 'center' }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: COLORS.slate, fontFamily: FONT, letterSpacing: 0.04 + 'em' }}>{s.k}</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: s.c, fontFamily: FONT, marginTop: 2 }}>{s.v}</div>
          </div>
        ))}
      </AnimatedCard>
    </div>
  </SceneShell>
);

// ============================================================
// SCENE 8 — Frameworks 3 cards (scikit/TF/PyTorch)
// ============================================================
const Scene8_Frameworks: React.FC = () => (
  <SceneShell bg={IMG_CODE} overlay={0.44} seed={8}>
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 70px', gap: 18 }}>
      <AnimatedCard delay={0}>
        <h2 style={{ fontSize: 76, fontWeight: 900, color: COLORS.dark, margin: 0, fontFamily: FONT, textAlign: 'center', textShadow: '0 2px 20px rgba(255,255,255,0.9)', lineHeight: 1.05 }}>
          So sánh <span style={{ color: COLORS.blue }}>Frameworks ML</span>
        </h2>
      </AnimatedCard>
      <div style={{ display: 'flex', gap: 26, width: 1480 }}>
        {[
          {
            name: 'scikit-learn',
            subtitle: 'ML cổ điển • CPU nhẹ',
            img: IMG_CODE,
            color: COLORS.blue,
            accent: '#3B82F6',
            bullets: ['API thống nhất • Pipeline', 'RandomForest • SVM • KMeans', 'CPU, dữ liệu vừa & nhỏ'],
            tag: 'ỔN ĐỊNH • Dễ học',
          },
          {
            name: 'TensorFlow / Keras',
            subtitle: 'Production • Edge • TPU',
            img: IMG_SERVER,
            color: COLORS.amber,
            accent: '#F59E0B',
            bullets: ['Keras API thân thiện', 'TFLite Micro cho MCU', 'TF Serving • TF Lite'],
            tag: 'PRODUCTION • Scale',
          },
          {
            name: 'PyTorch',
            subtitle: 'Nghiên cứu • Dynamic graph',
            img: IMG_HOLOGRAM,
            color: COLORS.purple,
            accent: '#8B5CF6',
            bullets: ['Autograd linh hoạt', 'Thử nghiệm kiến trúc mới', 'Cộng đồng nghiên cứu'],
            tag: 'RESEARCH • Linh hoạt',
          },
        ].map((f, i) => (
          <AnimatedCard key={f.name} delay={6 + i * 6} style={{ flex: 1 }}>
            <GlassCard style={{ height: 560, overflow: 'hidden', display: 'flex', flexDirection: 'column', borderTop: `4px solid ${f.accent}` }}>
              <div style={{ height: 200, position: 'relative', overflow: 'hidden' }}>
                <Img src={f.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, transparent 30%, ${f.accent}22 100%)` }} />
                <div style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(255,255,255,0.95)', borderRadius: 999, padding: '7px 14px', fontSize: 16, fontWeight: 800, color: f.accent, fontFamily: FONT, boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>{f.tag}</div>
              </div>
              <div style={{ padding: '22px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: COLORS.dark, fontFamily: FONT, lineHeight: 1.1 }}>{f.name}</div>
                <div style={{ fontSize: 20, color: COLORS.slate, fontWeight: 700, fontFamily: FONT, marginTop: 4 }}>{f.subtitle}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 16 }}>
                  {f.bullets.map((b) => (
                    <div key={b} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                      <span style={{ color: f.accent, fontWeight: 900, fontSize: 18 }}>✓</span>
                      <span style={{ fontSize: 20, color: '#334155', fontFamily: FONT, fontWeight: 600 }}>{b}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 'auto', paddingTop: 16, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <span style={{ background: `${f.accent}14`, border: `1px solid ${f.accent}33`, borderRadius: 999, padding: '6px 12px', fontSize: 16, fontWeight: 700, color: f.accent, fontFamily: FONT }}>Docs chính thức</span>
                </div>
              </div>
            </GlassCard>
          </AnimatedCard>
        ))}
      </div>
      <AnimatedCard delay={22} style={{ display: 'flex', gap: 10 }}>
        <Pill color={COLORS.blue}>scikit-learn.org</Pill>
        <Pill color={COLORS.amber}>tensorflow.org</Pill>
        <Pill color={COLORS.purple}>pytorch.org • Colab/Jupyter</Pill>
      </AnimatedCard>
    </div>
  </SceneShell>
);

// ============================================================
// SCENE 9 — TinyML & Edge AI (side image dense)
// ============================================================
const Scene9_TinyML: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: '#F8FAFC' }}>
    <div style={{ position: 'absolute', inset: 0, display: 'flex' }}>
      {/* LEFT TEXT 52% */}
      <div style={{ width: '54%', padding: '48px 44px 48px 70px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <AnimatedCard delay={0}>
          <div style={{ display: 'inline-flex', gap: 8, alignItems: 'center', background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.28)', borderRadius: 999, padding: '10px 20px', fontSize: 20, fontWeight: 800, color: '#047857', fontFamily: FONT }}>⚡ TINYML • EDGE AI • MCU</div>
        </AnimatedCard>
        <AnimatedCard delay={4}>
          <h2 style={{ fontSize: 76, fontWeight: 900, color: COLORS.dark, margin: '16px 0 10px', fontFamily: FONT, lineHeight: 1.02, textShadow: '0 2px 16px rgba(0,0,0,0.05)' }}>
            TinyML & <span style={{ color: COLORS.green }}>Edge AI</span>
          </h2>
        </AnimatedCard>
        <AnimatedCard delay={8}>
          <p style={{ fontSize: 28, fontWeight: 700, color: '#334155', lineHeight: 1.4, fontFamily: FONT, margin: 0 }}>ML trên vi điều khiển công suất thấp — suy luận trực tiếp <b>không cần cloud</b></p>
        </AnimatedCard>
        <AnimatedCard delay={12}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 22 }}>
            {[
              { k: 'Phần cứng', v: 'STM32 / ESP32', d: 'KB RAM • mW power', c: COLORS.green },
              { k: 'Nén mô hình', v: 'Quantization INT8', d: 'Pruning • Distillation', c: COLORS.blue },
              { k: 'Ưu điểm', v: 'Trễ thấp • Offline', d: 'Riêng tư • Không cloud', c: COLORS.amber },
              { k: 'Ứng dụng', v: 'Keyword spotting', d: 'Y tế • IoT', c: COLORS.purple },
            ].map((x) => (
              <div key={x.k} style={{ background: 'white', border: `1px solid ${x.c}22`, borderLeft: `4px solid ${x.c}`, borderRadius: 14, padding: '16px 16px', boxShadow: '0 4px 16px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: x.c, fontFamily: FONT, letterSpacing: 0.05 + 'em' }}>{x.k}</div>
                <div style={{ fontSize: 22, fontWeight: 800, color: COLORS.dark, fontFamily: FONT, marginTop: 4 }}>{x.v}</div>
                <div style={{ fontSize: 18, color: COLORS.slate, fontFamily: FONT }}>{x.d}</div>
              </div>
            ))}
          </div>
        </AnimatedCard>
        <AnimatedCard delay={18} style={{ marginTop: 18, display: 'flex', gap: 10 }}>
          <Pill color={COLORS.green}>TFLite Micro</Pill>
          <Pill color={COLORS.blue}>ESP-IDF • STM32Cube.AI</Pill>
          <Pill color={COLORS.amber}>Cloud train → Edge infer</Pill>
        </AnimatedCard>
      </div>
      {/* RIGHT IMAGE STACK 46% */}
      <div style={{ flex: 1, position: 'relative', padding: '36px 70px 36px 20px', display: 'flex', flexDirection: 'column', gap: 16, justifyContent: 'center', background: '#F1F5F9' }}>
        <AnimatedCard delay={6} style={{ flex: 1, minHeight: 420 }}>
          <div style={{ height: 420, borderRadius: 24, overflow: 'hidden', border: '1px solid #E2E8F0', boxShadow: '0 16px 40px rgba(0,0,0,0.10)', position: 'relative' }}>
            <Img src={IMG_MLCHIP} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(15,23,42,0.45) 100%)' }} />
            <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16, display: 'flex', gap: 12 }}>
              <GlassCard style={{ flex: 1, padding: '14px 16px', textAlign: 'center' }}>
                <div style={{ fontSize: 16, color: COLORS.slate, fontWeight: 700, fontFamily: FONT }}>Công suất</div>
                <div style={{ fontSize: 26, fontWeight: 900, color: COLORS.green, fontFamily: MONO }}>mW</div>
              </GlassCard>
              <GlassCard style={{ flex: 1, padding: '14px 16px', textAlign: 'center' }}>
                <div style={{ fontSize: 16, color: COLORS.slate, fontWeight: 700, fontFamily: FONT }}>RAM</div>
                <div style={{ fontSize: 26, fontWeight: 900, color: COLORS.blue, fontFamily: MONO }}>KB</div>
              </GlassCard>
              <GlassCard style={{ flex: 1, padding: '14px 16px', textAlign: 'center' }}>
                <div style={{ fontSize: 16, color: COLORS.slate, fontWeight: 700, fontFamily: FONT }}>Độ chính xác</div>
                <div style={{ fontSize: 26, fontWeight: 900, color: COLORS.purple, fontFamily: MONO }}>INT8</div>
              </GlassCard>
            </div>
          </div>
        </AnimatedCard>
        <AnimatedCard delay={14}>
          <GlassCard style={{ padding: 16, display: 'flex', gap: 14, alignItems: 'center' }}>
            <div style={{ width: 90, height: 90, borderRadius: 14, overflow: 'hidden', flexShrink: 0 }}>
              <Img src={IMG_ROBOT} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <div style={{ fontSize: 20, fontWeight: 800, color: COLORS.dark, fontFamily: FONT }}>STM32 + ESP32 • Edge inference thấp & riêng tư</div>
              <div style={{ fontSize: 18, color: COLORS.slate, fontFamily: FONT, marginTop: 4 }}>Nguồn: TinyML • STMicro • Espressif • TFLite Micro</div>
            </div>
          </GlassCard>
        </AnimatedCard>
      </div>
    </div>
    <GridPulse rows={6} cols={14} />
  </AbsoluteFill>
);

// ============================================================
// SCENE 10 — Applications grid 4 (dense 2x2 with images)
// ============================================================
const Scene10_Applications: React.FC = () => (
  <SceneShell seed={10} gridRows={8} gridCols={14}>
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '36px 70px', gap: 16 }}>
      <AnimatedCard delay={0}>
        <h2 style={{ fontSize: 76, fontWeight: 900, color: COLORS.dark, margin: 0, fontFamily: FONT, textAlign: 'center', lineHeight: 1.05, textShadow: '0 2px 16px rgba(0,0,0,0.06)' }}>
          Ứng dụng thực tế của <span style={{ color: COLORS.blue }}>ML</span>
        </h2>
      </AnimatedCard>
      <AnimatedCard delay={4}>
        <p style={{ fontSize: 26, color: '#334155', fontWeight: 600, fontFamily: FONT, textAlign: 'center', margin: 0, maxWidth: 1100 }}>Học sâu vượt trội trong tìm kiếm, đề xuất, xe tự lái & y tế</p>
      </AnimatedCard>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, width: 1480, marginTop: 8 }}>
        {[
          { title: 'Tìm kiếm & Đề xuất', desc: 'Google Search, YouTube/Netflix — ranking bằng deep learning & LLM', img: IMG_SMARTCITY, color: COLORS.blue, icon: '🔍' },
          { title: 'Xe tự lái & Trợ lý ảo', desc: 'Waymo • Siri/Alexa • Seq2Seq → LLM hội thoại tự nhiên', img: IMG_FUTURECITY, color: COLORS.purple, icon: '🚗' },
          { title: 'Y tế & Tài chính', desc: 'Chẩn đoán ảnh • Phát hiện gian lận • Scoring tín dụng', img: IMG_BRAIN2, color: COLORS.green, icon: '🏥' },
          { title: 'Sáng tạo nội dung', desc: 'Sinh ảnh/văn bản/nhạc • Generative AI • Foundation Models', img: IMG_SPACE, color: COLORS.amber, icon: '🎨' },
        ].map((a, i) => (
          <AnimatedCard key={a.title} delay={8 + i * 5} style={{}}>
            <GlassCard style={{ padding: 0, overflow: 'hidden', display: 'flex', height: 250 }}>
              <div style={{ width: 320, position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
                <Img src={a.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(90deg, transparent 60%, rgba(255,255,255,0.25) 100%)` }} />
                <div style={{ position: 'absolute', top: 14, left: 14, background: 'rgba(255,255,255,0.94)', borderRadius: 999, padding: '8px 14px', fontSize: 18, fontWeight: 800, color: a.color, fontFamily: FONT }}>{a.icon}</div>
              </div>
              <div style={{ flex: 1, padding: '22px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: 28, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT, lineHeight: 1.15 }}>{a.title}</h3>
                <p style={{ fontSize: 20, color: '#475569', fontFamily: FONT, lineHeight: 1.45, margin: '8px 0 0' }}>{a.desc}</p>
                <div style={{ marginTop: 14, height: 4, background: '#E2E8F0', borderRadius: 999, overflow: 'hidden' }}>
                  <div style={{ width: `${78 + i * 6}%`, height: '100%', background: a.color, borderRadius: 999 }} />
                </div>
              </div>
            </GlassCard>
          </AnimatedCard>
        ))}
      </div>
      <AnimatedCard delay={28} style={{ display: 'flex', gap: 10 }}>
        <Pill color={COLORS.blue}>Wikipedia AI</Pill>
        <Pill color={COLORS.purple}>arXiv SOTA 2024-25</Pill>
        <Pill color={COLORS.green}>Hiệu suất vượt trội</Pill>
      </AnimatedCard>
    </div>
  </SceneShell>
);

// ============================================================
// SCENE 11 — Challenges & Ethics (bg cyber-security, 3 cards)
// ============================================================
const Scene11_Challenges: React.FC = () => (
  <SceneShell bg={IMG_SECURITY} overlay={0.42} seed={11}>
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '36px 70px', gap: 16 }}>
      <AnimatedCard delay={0}>
        <h2 style={{ fontSize: 76, fontWeight: 900, color: COLORS.dark, margin: 0, fontFamily: FONT, textAlign: 'center', textShadow: '0 2px 20px rgba(255,255,255,0.92)', lineHeight: 1.05 }}>
          Thách thức & <span style={{ color: '#DC2626' }}>Đạo đức AI</span>
        </h2>
      </AnimatedCard>
      <AnimatedCard delay={4}>
        <p style={{ fontSize: 26, color: '#334155', fontWeight: 600, fontFamily: FONT, textAlign: 'center', margin: 0, maxWidth: 1200, textShadow: '0 1px 10px rgba(255,255,255,0.8)' }}>
          Overfitting • Concept drift • Bias — cần checklist kỹ thuật + pháp lý & AI giải thích được
        </p>
      </AnimatedCard>
      <div style={{ display: 'flex', gap: 24, width: 1480, marginTop: 8 }}>
        {[
          {
            title: 'Over / Underfitting',
            icon: '⚖️',
            color: '#F59E0B',
            points: ['L1/L2 • Dropout 0.1–0.5', 'Early stopping • Thêm dữ liệu', 'λ 1e-6–1e-1 • k-fold CV'],
            metric: 'Generalization',
            img: IMG_ANN,
          },
          {
            title: 'Concept Drift & Bias',
            icon: '🌊',
            color: '#EF4444',
            points: ['Dữ liệu thay đổi theo thời gian', 'Checklist kỹ thuật & pháp lý', 'Giám sát drift → retrain'],
            metric: 'Bias check',
            img: IMG_SECURITY,
          },
          {
            title: 'AI Giải thích được',
            icon: '🔍',
            color: '#10B981',
            points: ['Minh bạch cho y tế/tài chính', 'Shannon Entropy + Rough Set', 'Đánh giá đa chiều'],
            metric: 'Explainability',
            img: IMG_HOLOGRAM,
          },
        ].map((c, i) => (
          <AnimatedCard key={c.title} delay={8 + i * 6} style={{ flex: 1 }}>
            <GlassCard style={{ height: 560, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: 180, position: 'relative', overflow: 'hidden' }}>
                <Img src={c.img} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} />
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, transparent 35%, ${c.color}28 100%)` }} />
                <div style={{ position: 'absolute', top: 14, left: 14, width: 56, height: 56, borderRadius: 14, background: `${c.color}18`, border: `1px solid ${c.color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28 }}>{c.icon}</div>
                <div style={{ position: 'absolute', bottom: 12, left: 14, background: 'rgba(255,255,255,0.93)', borderRadius: 999, padding: '6px 12px', fontSize: 16, fontWeight: 800, color: c.color, fontFamily: FONT }}>{c.metric}</div>
              </div>
              <div style={{ padding: '20px 24px', flex: 1 }}>
                <h3 style={{ fontSize: 28, fontWeight: 800, color: COLORS.dark, margin: '0 0 14px', fontFamily: FONT, lineHeight: 1.15 }}>{c.title}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {c.points.map((p) => (
                    <div key={p} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: c.color, marginTop: 8, flexShrink: 0 }} />
                      <span style={{ fontSize: 20, color: '#334155', fontFamily: FONT, fontWeight: 600, lineHeight: 1.4 }}>{p}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 16, background: `${c.color}0D`, border: `1px solid ${c.color}22`, borderRadius: 12, padding: '12px 14px', textAlign: 'center' }}>
                  <FeatureProgress value={i === 0 ? 85 : i === 1 ? 68 : 92} delay={16 + i * 4} color={c.color} />
                  <div style={{ fontSize: 16, color: COLORS.slate, fontFamily: FONT, marginTop: 8 }}>{i === 0 ? 'Dropout & Regularization' : i === 1 ? 'Cần theo dõi liên tục' : 'Minh bạch & Tin cậy'}</div>
                </div>
              </div>
            </GlassCard>
          </AnimatedCard>
        ))}
      </div>
      <AnimatedCard delay={26} style={{ display: 'flex', gap: 10 }}>
        <Pill color="#EF4444">arXiv:2306.04338</Pill>
        <Pill color="#10B981">arXiv:2404.12511</Pill>
        <Pill color={COLORS.amber}>Responsible AI</Pill>
      </AnimatedCard>
    </div>
  </SceneShell>
);

// ============================================================
// SCENE 12 — Conclusion CTA (quantum bg, center card dense)
// ============================================================
const Scene12_Conclusion: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = 1 + 0.015 * Math.sin(frame / 6);
  return (
    <SceneShell bg={IMG_QUANTUM} overlay={0.40} seed={12}>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 70px' }}>
        <AnimatedCard delay={0} style={{ width: 1540 }}>
          <GlassCard style={{ padding: 42, background: 'rgba(255,255,255,0.82)', display: 'flex', gap: 28, alignItems: 'stretch' }}>
            {/* Left image collage 38% */}
            <div style={{ width: 560, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ flex: 1, borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.9)', minHeight: 380, position: 'relative' }}>
                <Img src={IMG_NEURAL} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 45%, rgba(59,130,246,0.35) 100%)' }} />
                <div style={{ position: 'absolute', bottom: 14, left: 14, right: 14 }}>
                  <GlassCard style={{ padding: '14px 16px', display: 'flex', gap: 10 }}>
                    <div style={{ width: 56, height: 56, borderRadius: 12, overflow: 'hidden', flexShrink: 0 }}>
                      <Img src={IMG_MLCHIP} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: 18, fontWeight: 800, color: COLORS.dark, fontFamily: FONT }}>ML = Thống kê + Tối ưu + Dữ liệu</div>
                      <div style={{ fontSize: 16, color: COLORS.slate, fontFamily: FONT }}>3 trụ cột + Học sâu vượt trội • Cloud-Edge hội tụ</div>
                    </div>
                  </GlassCard>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 14 }}>
                <GlassCard style={{ flex: 1, padding: 16, textAlign: 'center' }}>
                  <div style={{ fontSize: 32, fontWeight: 900, color: COLORS.blue, fontFamily: FONT }}>3</div>
                  <div style={{ fontSize: 16, color: COLORS.slate, fontFamily: FONT, fontWeight: 700 }}>Trụ cột</div>
                </GlassCard>
                <GlassCard style={{ flex: 1, padding: 16, textAlign: 'center' }}>
                  <div style={{ fontSize: 32, fontWeight: 900, color: COLORS.purple, fontFamily: FONT }}>5</div>
                  <div style={{ fontSize: 16, color: COLORS.slate, fontFamily: FONT, fontWeight: 700 }}>Bước Pipeline</div>
                </GlassCard>
                <GlassCard style={{ flex: 1, padding: 16, textAlign: 'center' }}>
                  <div style={{ fontSize: 32, fontWeight: 900, color: COLORS.green, fontFamily: FONT }}>3</div>
                  <div style={{ fontSize: 16, color: COLORS.slate, fontFamily: FONT, fontWeight: 700 }}>Frameworks</div>
                </GlassCard>
              </div>
            </div>

            {/* Right CTA 62% */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2 style={{ fontSize: 82, fontWeight: 900, color: COLORS.dark, margin: 0, fontFamily: FONT, lineHeight: 1.04, textShadow: '0 2px 18px rgba(0,0,0,0.06)', letterSpacing: '-0.02em' }}>
                Kết luận &
                <br />
                <span style={{ color: COLORS.blue }}>Hướng tương lai</span>
              </h2>
              <p style={{ fontSize: 26, color: '#334155', fontFamily: FONT, lineHeight: 1.5, margin: '14px 0 18px', fontWeight: 600 }}>
                Pipeline 5 bước + 3 frameworks + TinyML hội tụ <b>Cloud-Edge</b> — nền tảng cho mọi ứng dụng ML
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 18 }}>
                {[
                  { t: 'Foundation Models / LLM', c: COLORS.blue },
                  { t: 'Fourier ML', c: COLORS.purple },
                  { t: 'ALERT-Transformer', c: COLORS.green },
                  { t: 'AI có trách nhiệm', c: COLORS.amber },
                ].map((p, i) => (
                  <Pill key={p.t} delay={10 + i * 4} color={p.c} style={{ fontSize: 20, padding: '10px 18px' }}>
                    {p.t}
                  </Pill>
                ))}
              </div>
              <div
                style={{
                  background: 'linear-gradient(90deg,#3B82F6,#8B5CF6,#F59E0B)',
                  borderRadius: 999,
                  padding: '22px 44px',
                  fontSize: 30,
                  fontWeight: 800,
                  color: 'white',
                  fontFamily: FONT,
                  textAlign: 'center',
                  transform: `scale(${pulse})`,
                  boxShadow: '0 10px 30px rgba(139,92,246,0.35)',
                  cursor: 'pointer',
                }}
              >
                Q&A — Khám phá Evidence ML →
              </div>
              <div style={{ display: 'flex', gap: 10, marginTop: 14, flexWrap: 'wrap', alignItems: 'center' }}>
                <span style={{ fontSize: 18, color: COLORS.slate, fontFamily: FONT, fontWeight: 700 }}>Báo cáo ML • evidence_ml.json • 2026</span>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: COLORS.slate }} />
                <span style={{ fontSize: 18, color: COLORS.slate, fontFamily: FONT }}>arch_diagram.png • scikit-learn • TF • PyTorch</span>
              </div>
              <div style={{ marginTop: 16, display: 'flex', gap: 10 }}>
                <div style={{ flex: 1, height: 6, background: '#E2E8F0', borderRadius: 999, overflow: 'hidden' }}>
                  <div style={{ width: '100%', height: '100%', background: `linear-gradient(90deg, ${COLORS.blue}, ${COLORS.purple})`, borderRadius: 999 }} />
                </div>
              </div>
            </div>
          </GlassCard>
        </AnimatedCard>
      </div>
      {/* floating edge badge */}
      <div style={{ position: 'absolute', bottom: 28, right: 70, display: 'flex', gap: 10 }}>
        <div style={{ background: 'rgba(255,255,255,0.88)', borderRadius: 999, padding: '10px 18px', fontSize: 18, fontWeight: 700, color: COLORS.dark, fontFamily: FONT, border: '1px solid rgba(0,0,0,0.06)' }}>Nhóm Nghiên cứu ML • 2026</div>
      </div>
    </SceneShell>
  );
};

// ============================================================
// TIMELINE — 12 scenes with variable durations from slide_durations_ms.json
// ============================================================
const sceneComponents = [
  Scene1_Hero,
  Scene2_WhatIsML,
  Scene3_Pillars,
  Scene4_Supervised,
  Scene5_UnsupervisedRL,
  Scene6_DeepLearning,
  Scene7_Pipeline,
  Scene8_Frameworks,
  Scene9_TinyML,
  Scene10_Applications,
  Scene11_Challenges,
  Scene12_Conclusion,
];

export const MLPresentation: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#F8FAFC' }}>
      {sceneComponents.map((Scene, i) => (
        <Sequence key={i} from={SLIDE_STARTS[i]} durationInFrames={SLIDE_FRAMES[i]}>
          <SceneWrapper duration={SLIDE_FRAMES[i]}>
            <Scene />
          </SceneWrapper>
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

// Export durations for debugging / external sync
export const ML_DURATIONS_MS = SLIDE_MS;
export const ML_DURATIONS_FRAMES = SLIDE_FRAMES;
export const ML_TOTAL_FRAMES = TOTAL_FRAMES;
export const ML_TOTAL_MS = SLIDE_MS.reduce((a, b) => a + b, 0);

