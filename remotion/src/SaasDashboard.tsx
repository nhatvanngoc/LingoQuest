import React from 'react';
import {
  AbsoluteFill,
  Composition,
  Img,
  Sequence,
  interpolate,
  registerRoot,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { loadFont as loadPlusJakartaSans } from '@remotion/google-fonts/PlusJakartaSans';

const { fontFamily: FONT_PLUS_JAKARTA } = loadPlusJakartaSans('normal', {
  weights: ['400', '600', '700', '800'],
  subsets: ['latin', 'vietnamese'],
  ignoreTooManyRequestsWarning: true,
});

const FPS = 30;
const SCENE_START = 120;
const SCENE_DUR = 128;
const LAST_DUR = 120;
const NUM_SCENES = 16;
const DURATION = (NUM_SCENES - 1) * SCENE_START + LAST_DUR;

const FONT = `'${FONT_PLUS_JAKARTA}', -apple-system, BlinkMacSystemFont, sans-serif`;
const MONO = `Courier New, monospace`;

const COLORS = {
  blue: '#3B82F6',
  green: '#10B981',
  amber: '#F59E0B',
  purple: '#8B5CF6',
  slate: '#64748B',
  dark: '#0F172A',
};

const IMG_HOLOGRAM = staticFile('images/ai-tech/hologram-interface.jpg');
const IMG_CODE = staticFile('images/ai-tech/code-programming.jpg');
const IMG_SERVER = staticFile('images/ai-tech/server-room-data-center.jpg');
const IMG_SECURITY = staticFile('images/ai-tech/cyber-security-digital.jpg'); // reserved backdrop (ai-tech lib)
const IMG_QUANTUM = staticFile('images/ai-tech/quantum-computer.jpg'); // reserved backdrop (ai-tech lib)
const IMG_AIBRAIN = staticFile('images/ai-tech/artificial-intelligence-brain.jpg');
const IMG_ROBOT = staticFile('images/ai-tech/robot-technology.jpg');
const IMG_CITY = staticFile('images/ai-tech/future-city-night-neon.jpg');
void IMG_SECURITY;
void IMG_QUANTUM;

// ============================================================
// MCP TEMPLATE COMPONENTS (from reactvideoeditor catalog)
// ============================================================

// BokehCircles — floating soft circles for dreamy atmosphere (light adaptation)
const BokehCircles: React.FC<{count?: number}> = ({count = 15}) => {
  const frame = useCurrentFrame();
  const {width, height, fps} = useVideoConfig();
  const t = frame / fps;

  const circles = Array.from({length: count}, (_, i) => {
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
    const colorOptions = [[59, 130, 246], [139, 92, 246], [20, 184, 166], [245, 158, 11]];
    const rgb = colorOptions[i % 4];
    return {x, y, size, opacity, rgb, key: i};
  });

  return (
    <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none'}}>
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

// GridPulse — rippling dot grid for tech scenes (light adaptation)
const GridPulse: React.FC<{dotColor?: string; rows?: number; cols?: number}> = ({
  dotColor = '#94A3B8',
  rows = 8,
  cols = 12,
}) => {
  const frame = useCurrentFrame();
  const {width, height, fps} = useVideoConfig();
  const t = frame / fps;
  const spacingX = width / (cols + 1);
  const spacingY = height / (rows + 1);
  const centerCol = (cols - 1) / 2;
  const centerRow = (rows - 1) / 2;

  const dots: {x: number; y: number; opacity: number; scale: number; key: number}[] = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = spacingX * (col + 1);
      const y = spacingY * (row + 1);
      const dx = col - centerCol;
      const dy = row - centerRow;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const wave = Math.sin(t * 3 - distance * 0.8);
      const normalizedWave = wave * 0.5 + 0.5;
      dots.push({x, y, opacity: 0.06 + normalizedWave * 0.12, scale: 0.4 + normalizedWave * 0.6, key: row * cols + col});
    }
  }

  return (
    <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none'}}>
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

// KenBurns — pan/zoom image animation for backdrop scenes
const KenBurns: React.FC<{imageUrl: string; scale?: number; tx?: number; ty?: number}> = ({
  imageUrl,
  scale = 1.15,
  tx = -20,
  ty = -10,
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const progress = interpolate(frame, [0, fps * 4], [0, 1], {extrapolateRight: 'clamp'});
  const s = 1 + (scale - 1) * progress;
  const x = tx * progress;
  const y = ty * progress;

  return (
    <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden'}}>
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

// LineChartMCP — animated SVG line chart (adapted to light theme + dashboard data)
const LineChartMCP: React.FC<{
  data?: {x: number; y: number; label: string}[];
  color?: string;
  pointColor?: string;
  title?: string;
  delay?: number;
}> = ({
  data = [
    {x: 0, y: 25, label: 'Q1'}, {x: 1, y: 40, label: 'Q2'},
    {x: 2, y: 35, label: 'Q3'}, {x: 3, y: 55, label: 'Q4'},
    {x: 4, y: 50, label: 'Q5'}, {x: 5, y: 70, label: 'Q6'},
    {x: 6, y: 65, label: 'Q7'}, {x: 7, y: 80, label: 'Q8'},
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
  const dashOffset = interpolate(frame, [delay, delay + 50], [totalLength, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <svg width={chartWidth} height={chartHeight} style={{display: 'block'}}>
      {[0, 25, 50, 75, 100].map((v) => (
        <React.Fragment key={v}>
          <line x1={padding} y1={yScale(v)} x2={chartWidth - padding} y2={yScale(v)} stroke="#E2E8F0" strokeWidth="1" />
          <text x={padding - 12} y={yScale(v) + 5} textAnchor="end" fill="#94A3B8" fontSize="18" fontFamily={FONT}>{v}</text>
        </React.Fragment>
      ))}
      <line x1={padding} y1={chartHeight - padding} x2={chartWidth - padding} y2={chartHeight - padding} stroke="#CBD5E1" strokeWidth="2" />
      {data.map((d, i) => (
        <text key={i} x={xScale(d.x)} y={chartHeight - padding + 22} textAnchor="middle" fill="#64748B" fontSize="18" fontFamily={FONT}>{d.label}</text>
      ))}
      <polyline points={points} fill="none" stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray={totalLength} strokeDashoffset={dashOffset} />
      {data.map((d, i) => {
        const pt = interpolate(frame, [delay + 5 + i * 5, delay + 10 + i * 5], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
        return <circle key={i} cx={xScale(d.x)} cy={yScale(d.y)} r={6 * pt} fill={pointColor} stroke="white" strokeWidth="2" opacity={pt} />;
      })}
      {title && (
        <text x={chartWidth / 2} y={padding - 18} textAnchor="middle" fill={COLORS.dark} fontSize="28" fontWeight="700" fontFamily={FONT}>{title}</text>
      )}
    </svg>
  );
};

const glassCardStyle = (style: React.CSSProperties = {}): React.CSSProperties =>
  ({
    background: 'rgba(255,255,255,0.7)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    borderRadius: 28,
    border: '1px solid rgba(255,255,255,0.8)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
    boxSizing: 'border-box',
    ...style,
  } as React.CSSProperties);

const GlassCard: React.FC<{children?: React.ReactNode; style?: React.CSSProperties}> = ({
  children,
  style,
}) => <div style={glassCardStyle(style)}>{children}</div>;

const AnimatedCard: React.FC<{
  children?: React.ReactNode;
  delay?: number;
  distance?: number;
  style?: React.CSSProperties;
}> = ({children, delay = 0, distance = 24, style}) => {
  const frame = useCurrentFrame();
  const progress = spring({
    frame: Math.max(0, frame - delay),
    fps: FPS,
    config: {damping: 13, mass: 0.65},
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
}> = ({children, delay = 0, color = COLORS.blue, style}) => {
  const frame = useCurrentFrame();
  const p = spring({
    frame: Math.max(0, frame - delay),
    fps: FPS,
    config: {damping: 13, mass: 0.65},
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
}> = ({value, decimals = 0, prefix = '', suffix = '', delay = 0, style}) => {
  const frame = useCurrentFrame();
  const progress = spring({
    frame: Math.max(0, frame - delay),
    fps: FPS,
    config: {damping: 13, mass: 0.65},
  });

  const displayed =
    decimals > 0
      ? (value * progress).toFixed(decimals)
      : Math.round(value * progress).toLocaleString('en-US');

  return (
    <span style={{fontFamily: MONO, ...style}}>
      {prefix}
      {displayed}
      {suffix}
    </span>
  );
};

const FeatureProgress: React.FC<{value: number; delay?: number; color: string}> = ({
  value,
  delay = 0,
  color,
}) => {
  const frame = useCurrentFrame();
  const p = Math.min(
    1,
    spring({frame: Math.max(0, frame - delay), fps: FPS, config: {damping: 13, mass: 0.65}}),
  );

  return (
    <div style={{height: 7, background: '#E2E8F0', borderRadius: 4, overflow: 'hidden'}}>
      <div
        style={{
          height: '100%',
          width: `${value * p}%`,
          background: color,
          borderRadius: 4,
        }}
      />
    </div>
  );
};

const LiveBadge: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = 0.5 + 0.5 * Math.sin(frame / 4);

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        background: '#EFF6FF',
        border: '1px solid #BFDBFE',
        borderRadius: 999,
        padding: '10px 20px',
        color: '#1D4ED8',
        fontSize: 20,
        fontWeight: 700,
        fontFamily: FONT,
      }}
    >
      <span
        style={{
          width: 11,
          height: 11,
          borderRadius: '50%',
          background: '#3B82F6',
          boxShadow: '0 0 10px #3B82F6',
          opacity: pulse,
        }}
      />
      Live
    </div>
  );
};

// SceneShell — now uses MCP GridPulse + BokehCircles instead of custom Particles/Grid/ScanLine
const SceneShell: React.FC<{
  children?: React.ReactNode;
  bg?: string;
  overlay?: number;
  useGrid?: boolean;
  useBokeh?: boolean;
  gridRows?: number;
  gridCols?: number;
  seed?: number;
  lineColor?: string;
}> = ({children, bg, overlay = 0.4, useGrid = true, useBokeh = true, gridRows, gridCols, seed = 0}) => (
  <AbsoluteFill style={{backgroundColor: '#F8FAFC'}}>
    {bg && <KenBurns imageUrl={bg} scale={1.08} tx={-8} ty={-4} />}
    {bg && overlay > 0 && (
      <div style={{position: 'absolute', inset: 0, backgroundColor: `rgba(255,255,255,${overlay})`}} />
    )}
    {useGrid && <GridPulse rows={gridRows} cols={gridCols} />}
    {children}
    {useBokeh && <BokehCircles count={seed > 0 ? 12 : 8} />}
  </AbsoluteFill>
);

const SceneWrapper: React.FC<{children?: React.ReactNode; duration?: number}> = ({
  children,
  duration = SCENE_DUR,
}) => {
  const frame = useCurrentFrame();

  const opacity = Math.min(
    interpolate(frame, [0, 8], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
    interpolate(frame, [duration - 8, duration], [1, 0], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }),
  );

  return <AbsoluteFill style={{opacity}}>{children}</AbsoluteFill>;
};

// ============ SCENE 1: HERO — AGI (Source: Turing 1950 'Computing Machinery and Intelligence'; ChatGPT 1B monthly users reported Jun 2026) ============
const DashboardMockup: React.FC = () => {
  const frame = useCurrentFrame();
  const bars = [40, 65, 50, 80, 60, 90];

  return (
    <div
      style={{
        width: 640,
        height: 460,
        transform: `rotateY(${18 + 5 * Math.sin(frame / 40)}deg) rotateZ(${
          -4 + 2 * Math.sin(frame / 34)
        }deg) translateY(${6 * Math.sin(frame / 28)}px)`,
        transformStyle: 'preserve-3d',
      }}
    >
      <GlassCard style={{width: '100%', height: '100%', padding: 32}}>
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 28}}>
          <div style={{width: 110, height: 16, background: '#E2E8F0', borderRadius: 8}} />
          <div style={{width: 70, height: 16, background: '#E2E8F0', borderRadius: 8}} />
        </div>
        <div style={{display: 'flex', gap: 24, height: 'calc(100% - 110px)'}}>
          <div style={{flex: 1, display: 'flex', alignItems: 'flex-end', gap: 8}}>
            {bars.map((h, i) => (
              <div
                key={i}
                style={{flex: 1, height: `${h}%`, background: '#DBEAFE', borderRadius: '10px 10px 0 0'}}
              />
            ))}
          </div>
          <div style={{width: 150, display: 'flex', flexDirection: 'column', gap: 16}}>
            <div style={{height: 60, background: '#D1FAE5', borderRadius: 10}} />
            <div style={{height: 60, background: '#FFEDD5', borderRadius: 10}} />
            <div style={{height: 60, background: '#EDE9FE', borderRadius: 10}} />
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

const Scene1: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <SceneShell seed={1}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          padding: '0 100px',
        }}
      >
        <div style={{maxWidth: 800}}>
          <AnimatedCard delay={0}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: '#FEF3C7',
                border: '1px solid #FCD34D',
                borderRadius: 999,
                padding: '10px 22px',
                fontSize: 28,
                fontWeight: 700,
                color: '#92400E',
                letterSpacing: '0.08em',
              }}
            >
              <span style={{width: 12, height: 12, borderRadius: '50%', background: '#F59E0B'}} />
              TRÍ TUỆ NHÂN TẠO TỔNG QUÁT • AGI
            </div>
          </AnimatedCard>
          <AnimatedCard delay={3}>
            <h1
              style={{
                fontSize: 92,
                fontWeight: 800,
                lineHeight: 1.04,
                color: COLORS.dark,
                margin: '32px 0 20px',
                fontFamily: FONT,
              }}
            >
              Máy biết nghĩ như người?
            </h1>
          </AnimatedCard>
          <AnimatedCard delay={6}>
            <p
              style={{
                fontSize: 34,
                lineHeight: 1.5,
                color: '#475569',
                marginBottom: 44,
                maxWidth: 700,
                fontFamily: FONT,
              }}
            >
              'Can machines think?' — Alan Turing đặt câu hỏi năm 1950. 76 năm sau, nhân loại đang tiến gần đáp án hơn bao giờ hết.
            </p>
          </AnimatedCard>
          <AnimatedCard delay={9} style={{display: 'flex', flexDirection: 'column', gap: 16}}>
            <button
              style={{
                backgroundColor: '#F59E0B',
                border: 'none',
                borderRadius: 999,
                padding: '24px 52px',
                fontSize: 30,
                fontWeight: 700,
                color: 'white',
                cursor: 'pointer',
                fontFamily: FONT,
                width: 'fit-content',
                transform: `scale(${1 + 0.02 * Math.sin(frame / 5)})`,
                boxShadow: `0 0 0 ${6 + 4 * Math.sin(frame / 5)}px rgba(245,158,11,0.15), 0 16px 32px rgba(245,158,11,0.25)`,
              }}
            >
              Bắt đầu tìm hiểu
            </button>
            <span style={{fontSize: 24, color: COLORS.slate, fontFamily: FONT}}>
              1B người dùng ChatGPT/tháng 06/2026 • Từ 1950 • AGI: chưa máy nào đạt được
            </span>
          </AnimatedCard>
        </div>
        <div style={{flex: 1, display: 'flex', justifyContent: 'center', perspective: 1200}}>
          <DashboardMockup />
        </div>
      </div>
    </SceneShell>
  );
};

// ============ SCENE 2: THREE RUNGS — ANI/AGI/ASI (Source: DeepMind Gato 600+ tasks, 2022; ANI/AGI/ASI taxonomy) ============
const metrics = [
  {label: 'ANI — Hẹp', big: 'Siri • AlphaGo', desc: 'Mọi AI hôm nay: giỏi một việc', color: COLORS.blue},
  {label: 'AGI — Tổng quát', big: 'Chưa đạt', desc: 'Mục tiêu: mọi việc như người', color: COLORS.green},
  {label: 'ASI — Siêu việt', big: 'Giả thuyết', desc: 'Vượt mọi thiên tài loài người', color: COLORS.amber},
  {label: 'Gato — Manh nha', big: '600+ tác vụ', desc: 'Một mô hình đa năng (DeepMind)', color: COLORS.purple},
];

const Scene2: React.FC = () => (
  <SceneShell seed={2}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 40}}>
      <AnimatedCard delay={0}>
        <h2 style={{fontSize: 64, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
          Ba nấc thang trí tuệ
        </h2>
      </AnimatedCard>
      <AnimatedCard delay={2}>
        <p style={{fontSize: 28, color: COLORS.slate, margin: 0, fontFamily: FONT, textAlign: 'center', maxWidth: 1100}}>
          ANI giỏi một việc. AGI làm mọi việc như người. ASI vượt mọi thiên tài — mới chỉ là giả thuyết.
        </p>
      </AnimatedCard>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 28, width: 1240}}>
        {metrics.map((m, i) => (
          <AnimatedCard key={m.label} delay={6 + i * 4}>
            <GlassCard
              style={{
                height: 240,
                padding: 36,
                borderTop: `5px solid ${m.color}`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: COLORS.slate,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: 14,
                  fontFamily: FONT,
                }}
              >
                {m.label}
              </div>
              <div style={{fontSize: 52, fontWeight: 800, color: COLORS.dark, fontFamily: FONT}}>
                {m.big}
              </div>
              <div style={{fontSize: 24, color: COLORS.slate, marginTop: 8, fontFamily: FONT}}>
                {m.desc}
              </div>
            </GlassCard>
          </AnimatedCard>
        ))}
      </div>
    </div>
  </SceneShell>
);

// ============ SCENE 3: PROBLEM — narrow AI (Source: McKinsey State of AI 2025 — 78% orgs use AI; ChatGPT ~5.6B monthly visits) ============
const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const groups = [
    {label: 'Chữ', values: [70, 85, 78], color: '#3B82F6'},
    {label: 'Ảnh', values: [60, 72, 66], color: '#10B981'},
    {label: 'Code', values: [55, 68, 62], color: '#F59E0B'},
    {label: 'Việc mới', values: [25, 32, 28], color: '#8B5CF6'},
  ];
  const stats = [
    {label: 'DN dùng AI ≥1 khâu', value: 78, decimals: 0, suffix: '%'},
    {label: 'Lượt truy cập/tháng', value: 5.6, decimals: 1, suffix: 'B'},
    {label: 'Hiểu việc mới', value: 0, decimals: 0, suffix: '', custom: 'Còn yếu'},
    {label: 'Dùng nhiều, hiểu ít', value: 0, decimals: 0, suffix: '', custom: 'AI hẹp'},
  ];

  return (
    <SceneShell seed={3}>
      <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24}}>
        <AnimatedCard delay={0}>
          <GlassCard style={{width: 1240, padding: 44}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32}}>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <span style={{fontSize: 46, fontWeight: 800, color: COLORS.dark, fontFamily: FONT}}>
                  AI quanh bạn chưa hiểu bạn
                </span>
                <span style={{fontSize: 26, color: COLORS.slate, marginTop: 8, fontFamily: FONT}}>
                  AI mạnh nhưng hẹp: giỏi chữ, dở việc mới. Dùng nhiều, hiểu ít.
                </span>
              </div>
              <LiveBadge />
            </div>
            <div style={{display: 'flex', gap: 20, height: 280}}>
              {groups.map((g, gi) => (
                <div key={g.label} style={{flex: 1, display: 'flex', gap: 10, alignItems: 'flex-end'}}>
                  {g.values.map((v, vi) => {
                    const idx = gi * 3 + vi;
                    const p = Math.min(
                      1,
                      spring({frame: Math.max(0, frame - (idx * 2 + 12)), fps: FPS, config: {damping: 13, mass: 0.65}}),
                    );

                    return (
                      <div
                        key={vi}
                        style={{
                          flex: 1,
                          height: `${v * p}%`,
                          background: `linear-gradient(to top, ${g.color}, ${g.color}BB)`,
                          borderRadius: '10px 10px 2px 2px',
                        }}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
            <div style={{display: 'flex', gap: 20, marginTop: 18}}>
              {groups.map((g) => (
                <div key={g.label} style={{flex: 1, textAlign: 'center', fontSize: 24, fontWeight: 700, color: COLORS.slate, fontFamily: FONT}}>
                  {g.label}
                </div>
              ))}
            </div>
          </GlassCard>
        </AnimatedCard>

        <div style={{display: 'flex', gap: 20, width: 1240}}>
          {stats.map((s, i) => (
            <AnimatedCard key={s.label} delay={30 + i * 4} style={{flex: 1}}>
              <GlassCard style={{padding: '28px 24px', textAlign: 'center'}}>
                {s.custom ? (
                  <span style={{fontSize: 48, fontWeight: 800, color: COLORS.dark, display: 'block', fontFamily: FONT}}>
                    {s.custom}
                  </span>
                ) : (
                  <CountUp
                    value={s.value}
                    decimals={s.decimals}
                    suffix={s.suffix}
                    delay={34 + i * 4}
                    style={{fontSize: 48, fontWeight: 800, color: COLORS.dark, display: 'block'}}
                  />
                )}
                <div style={{fontSize: 24, color: COLORS.slate, marginTop: 8, fontFamily: FONT}}>{s.label}</div>
              </GlassCard>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </SceneShell>
  );
};

// ============ SCENE 4: 1950-1956 birth of AI (Source: Turing 1950; Dartmouth summer 1956 McCarthy/Minsky; Logic Theorist proved 38/52 theorems) ============
const Scene4: React.FC = () => (
  <SceneShell seed={4} bg={IMG_AIBRAIN} overlay={0.4}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32}}>
      <AnimatedCard delay={0}>
        <h2 style={{fontSize: 64, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT, textAlign: 'center'}}>
          1950–1956: Giấc mơ khai sinh
        </h2>
      </AnimatedCard>
      <AnimatedCard delay={2}>
        <p style={{fontSize: 28, color: COLORS.slate, margin: 0, fontFamily: FONT, textAlign: 'center', maxWidth: 1100}}>
          Từ bài báo của Turing đến hội thảo Dartmouth — từ &apos;AI&apos; chính thức ra đời.
        </p>
      </AnimatedCard>
      <AnimatedCard delay={4}>
        <GlassCard style={{width: 1240, padding: 48}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 40, marginBottom: 24}}>
            <div>
              <div style={{fontSize: 24, color: COLORS.slate, fontWeight: 600, fontFamily: FONT}}>Logic Theorist chứng minh</div>
              <CountUp
                value={38}
                prefix=""
                suffix="/52"
                delay={10}
                style={{fontSize: 80, fontWeight: 800, color: COLORS.green}}
              />
            </div>
            <div style={{fontSize: 26, color: COLORS.slate, lineHeight: 1.5, fontFamily: FONT, maxWidth: 500}}>
              1950 Turing Test • Hè 1956 Dartmouth (McCarthy, Minsky) • 38/52 định lý.
            </div>
          </div>
          <LineChartMCP
            color="#10B981"
            pointColor="#F59E0B"
            title=""
            delay={14}
            data={[
              {x: 0, y: 20, label: '1950'}, {x: 1, y: 35, label: '1951'},
              {x: 2, y: 30, label: '1952'}, {x: 3, y: 50, label: '1953'},
              {x: 4, y: 45, label: '1954'}, {x: 5, y: 65, label: '1955'},
              {x: 6, y: 60, label: '1956'}, {x: 7, y: 85, label: '1957'},
            ]}
          />
        </GlassCard>
      </AnimatedCard>
    </div>
  </SceneShell>
);

// ============ SCENE 5: WINTER + REBIRTH (Source: AI Winters 1974-80 & 1987-93; Deep Blue beat Kasparov 1997; AlexNet top-5 error 26% to 15% ILSVRC 2012) ============
const features = [
  {icon: '❄️', title: 'Mùa đông I (1974–80)', desc: 'Cắt tài trợ sau báo cáo Lighthill.', color: COLORS.blue, bg: 'rgba(59,130,246,0.1)', progress: 30},
  {icon: '❄️', title: 'Mùa đông II (1987–93)', desc: 'Máy Lisp sụp, expert system thoái trào.', color: COLORS.slate, bg: 'rgba(100,116,139,0.12)', progress: 25},
  {icon: '♟️', title: '1997: Deep Blue', desc: 'Hạ Kasparov — hồi sinh niềm tin.', color: COLORS.purple, bg: 'rgba(139,92,246,0.1)', progress: 70},
  {icon: '🧠', title: '2012: AlexNet', desc: 'Lỗi ảnh 26% → 15%, kỷ nguyên deep learning.', color: COLORS.amber, bg: 'rgba(245,158,11,0.1)', progress: 90},
];

const Scene5: React.FC = () => (
  <SceneShell seed={5}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 40}}>
      <AnimatedCard delay={0}>
        <h2 style={{fontSize: 64, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
          Mùa đông và ván cờ định mệnh
        </h2>
      </AnimatedCard>
      <AnimatedCard delay={2}>
        <p style={{fontSize: 28, color: COLORS.slate, margin: 0, fontFamily: FONT, textAlign: 'center', maxWidth: 1150}}>
          AI từng chết lâm sàng hai lần vì cắt tài trợ — rồi hồi sinh từ một ván cờ và một mạng nơ-ron.
        </p>
      </AnimatedCard>
      <div style={{display: 'flex', gap: 28, justifyContent: 'center'}}>
        {features.map((f, i) => (
          <AnimatedCard key={f.title} delay={6 + i * 5} style={{width: 360}}>
            <GlassCard style={{height: 340, padding: 36, display: 'flex', flexDirection: 'column'}}>
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 24,
                  background: f.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 40,
                  marginBottom: 24,
                }}
              >
                {f.icon}
              </div>
              <h3 style={{fontSize: 32, fontWeight: 700, color: COLORS.dark, margin: '0 0 14px', fontFamily: FONT}}>
                {f.title}
              </h3>
              <p style={{fontSize: 24, color: COLORS.slate, lineHeight: 1.5, marginBottom: 'auto', fontFamily: FONT}}>
                {f.desc}
              </p>
              <FeatureProgress value={f.progress} delay={10 + i * 5} color={f.color} />
            </GlassCard>
          </AnimatedCard>
        ))}
      </div>
    </div>
  </SceneShell>
);

// ============ SCENE 6: 2016-2022 QUANTUM LEAP (Source: AlphaGo beat Lee Sedol 4-1 Mar 2016; Vaswani et al. 'Attention Is All You Need' 2017; GPT-3 175B 2020; ChatGPT 30 Nov 2022 — 1M/5 days, 100M/2 months) ============
const Scene6: React.FC = () => (
  <SceneShell seed={6} bg={IMG_HOLOGRAM} lineColor="rgba(255,255,255,0.08)" overlay={0.4}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <AnimatedCard delay={0}>
        <GlassCard style={{width: 1100, padding: 60, textAlign: 'center'}}>
          <h2 style={{fontSize: 60, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
            2016–2022: Cú nhảy lượng tử
          </h2>
          <p style={{fontSize: 30, color: COLORS.slate, margin: '20px 0 36px', fontFamily: FONT}}>
            Từ nước cờ Move 37 đến khung chat làm rung chuyển thế giới.
          </p>
          <div style={{display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40}}>
            {['2016 AlphaGo 4-1', '2017 Transformer', '2020 GPT-3 175B', '30/11/2022 ChatGPT'].map((pill, i) => (
              <Pill key={pill} delay={8 + i * 4} color="#8B5CF6">
                {pill}
              </Pill>
            ))}
          </div>
          <div style={{borderTop: '1px solid rgba(15,23,42,0.1)', paddingTop: 32}}>
            <div style={{fontSize: 24, color: COLORS.slate, fontWeight: 600, fontFamily: FONT}}>
              ChatGPT cán mốc sau 2 tháng
            </div>
            <CountUp
              value={100}
              decimals={0}
              suffix="M user"
              delay={26}
              style={{fontSize: 72, fontWeight: 800, color: '#8B5CF6'}}
            />
          </div>
        </GlassCard>
      </AnimatedCard>
    </div>
  </SceneShell>
);

// ============ SCENE 7: o1 REASONING (Source: OpenAI o1 release 12 Sep 2024 — AIME 74.4%, GPQA Diamond 78.3%, Codeforces 89th percentile / Elo 1673) ============
const aiCapabilities = [
  {icon: '📐', title: 'AIME 74,4%', desc: 'Toán thi Mỹ (GPT-4o chỉ ~12%).', color: '#8B5CF6', bg: 'rgba(139,92,246,0.1)'},
  {icon: '🔬', title: 'GPQA 78,3%', desc: 'Vượt tiến sĩ ngoài chuyên ngành ~69,7%.', color: '#EF4444', bg: 'rgba(239,68,68,0.1)'},
  {icon: '💻', title: 'Codeforces 89%', desc: 'Từ top 11% lên top 89% lập trình thi đấu.', color: '#3B82F6', bg: 'rgba(59,130,246,0.1)'},
  {icon: '🏆', title: 'Elo 1673', desc: 'Trình độ lập trình viên cạnh tranh mạnh.', color: '#10B981', bg: 'rgba(16,185,129,0.1)'},
];

const Scene7: React.FC = () => (
  <SceneShell seed={7}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 40}}>
      <AnimatedCard delay={0}>
        <h2 style={{fontSize: 64, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
          o1: Máy bắt đầu biết nghĩ
        </h2>
      </AnimatedCard>
      <AnimatedCard delay={2}>
        <p style={{fontSize: 28, color: COLORS.slate, margin: 0, fontFamily: FONT, textAlign: 'center', maxWidth: 1100}}>
          12/09/2024 — mô hình đầu tiên học lập luận bằng RL: nghĩ trước khi đáp.
        </p>
      </AnimatedCard>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32, width: 1160}}>
        {aiCapabilities.map((c, i) => (
          <AnimatedCard key={c.title} delay={6 + i * 5}>
            <GlassCard style={{padding: 40, display: 'flex', gap: 28, alignItems: 'flex-start', height: 220}}>
              <div
                style={{
                  width: 88,
                  height: 88,
                  minWidth: 88,
                  borderRadius: 24,
                  background: c.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 42,
                }}
              >
                {c.icon}
              </div>
              <div>
                <h3 style={{fontSize: 32, fontWeight: 700, color: COLORS.dark, margin: '0 0 12px', fontFamily: FONT}}>
                  {c.title}
                </h3>
                <p style={{fontSize: 24, color: COLORS.slate, lineHeight: 1.5, margin: 0, fontFamily: FONT}}>
                  {c.desc}
                </p>
              </div>
            </GlassCard>
          </AnimatedCard>
        ))}
      </div>
    </div>
  </SceneShell>
);

// ============ SCENE 8: o3 BREAKTHROUGH (Source: OpenAI o3 reveal 20 Dec 2024 — ARC-AGI 87.5% high-compute, AIME 96.7%, Codeforces 2727, FrontierMath 25.2% vs prior <2%) ============
const codeLines = [
  {w: '70%', color: '#93C5FD'},
  {w: '45%', color: '#86EFAC'},
  {w: '85%', color: '#FCA5A5'},
  {w: '55%', color: '#FCD34D'},
  {w: '65%', color: '#93C5FD'},
];

const Scene8: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <SceneShell seed={8} bg={IMG_CODE} lineColor="rgba(255,255,255,0.08)" overlay={0.4}>
      <div style={{position: 'absolute', left: 100, bottom: 90, width: 640}}>
        <AnimatedCard delay={0}>
          <GlassCard style={{padding: 48}}>
            <h2 style={{fontSize: 50, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
              o3: Vượt bài test của con người
            </h2>
            <p style={{fontSize: 26, color: COLORS.slate, margin: '16px 0 28px', fontFamily: FONT}}>
              20/12/2024 — ARC-AGI 87,5%, vượt trung bình con người ~85%. (Điểm cao đi kèm compute khổng lồ.)
            </p>
            <div style={{display: 'flex', gap: 14, flexWrap: 'wrap'}}>
              {['ARC-AGI 87,5%', 'AIME 96,7%', 'Codeforces 2727', 'FrontierMath 25,2%'].map((lang, i) => (
                <Pill key={lang} delay={8 + i * 4} color="#3B82F6">
                  {lang}
                </Pill>
              ))}
            </div>
          </GlassCard>
        </AnimatedCard>
      </div>

      <div style={{position: 'absolute', right: 100, top: 100, width: 440}}>
        <AnimatedCard delay={10}>
          <GlassCard style={{padding: 36, background: 'rgba(15,23,42,0.82)'}}>
            <div style={{display: 'flex', gap: 8, marginBottom: 20}}>
              <div style={{width: 16, height: 16, borderRadius: '50%', background: '#EF4444'}} />
              <div style={{width: 16, height: 16, borderRadius: '50%', background: '#F59E0B'}} />
              <div style={{width: 16, height: 16, borderRadius: '50%', background: '#10B981'}} />
            </div>
            {codeLines.map((l, i) => {
              const p = Math.min(
                1,
                spring({frame: Math.max(0, frame - (14 + i * 5)), fps: FPS, config: {damping: 14, mass: 0.6}}),
              );

              return (
                <div key={i} style={{marginBottom: 16, overflow: 'hidden'}}>
                  <div
                    style={{
                      height: 22,
                      width: `calc(${l.w} * ${p})`,
                      background: l.color,
                      borderRadius: 4,
                      opacity: 0.85,
                    }}
                  />
                </div>
              );
            })}
          </GlassCard>
        </AnimatedCard>
      </div>
    </SceneShell>
  );
};

// ============ SCENE 9: GPT-5 UNIFIED (Source: OpenAI GPT-5 launch 7 Aug 2025 — unified reasoning, 400K context, multimodal text+image+voice, default for ChatGPT) ============
const Scene9: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <SceneShell seed={9} bg={IMG_SERVER} lineColor="rgba(255,255,255,0.08)" overlay={0.4}>
      <div style={{position: 'absolute', left: 100, bottom: 90, width: 500}}>
        <AnimatedCard delay={0}>
          <GlassCard style={{padding: 44}}>
            <div style={{fontSize: 26, fontWeight: 600, color: COLORS.slate, fontFamily: FONT}}>
              GPT-5: Trợ lý hợp nhất
            </div>
            <CountUp value={2025} suffix="" delay={6} style={{fontSize: 72, fontWeight: 800, color: COLORS.dark}} />
            <div style={{fontSize: 26, fontWeight: 600, color: COLORS.slate, fontFamily: FONT}}>07/08/2025 • Mặc định mọi ChatGPT</div>
          </GlassCard>
        </AnimatedCard>
      </div>

      <div style={{position: 'absolute', top: 100, right: 100, transform: `translateY(${Math.sin(frame / 30) * 8}px)`}}>
        <AnimatedCard delay={8}>
          <GlassCard style={{width: 320, padding: 34, textAlign: 'center'}}>
            <div style={{fontSize: 24, color: COLORS.slate, fontFamily: FONT}}>Context</div>
            <CountUp value={400} suffix="K" delay={12} style={{fontSize: 60, fontWeight: 800, color: COLORS.blue}} />
          </GlassCard>
        </AnimatedCard>
      </div>

      <div style={{position: 'absolute', bottom: 300, right: 100, transform: `translateY(${Math.sin(frame / 25 + 1) * 8}px)`}}>
        <AnimatedCard delay={14}>
          <GlassCard style={{width: 320, padding: 34, textAlign: 'center'}}>
            <div style={{fontSize: 24, color: COLORS.slate, fontFamily: FONT}}>Đa phương thức</div>
            <span style={{fontSize: 40, fontWeight: 800, color: COLORS.green, fontFamily: FONT}}>{'Chữ+Ảnh+Tiếng'}</span>
          </GlassCard>
        </AnimatedCard>
      </div>
    </SceneShell>
  );
};

// ============ SCENE 10: HUMANITY'S LAST EXAM (Source: HLE benchmark 2500 expert Qs — top system ~65% vs avg ~32%; SWE-bench Verified top ~95.5% but saturating) ============
const infraStats = [
  {label: 'HLE top (TB ~32%)', value: 65, decimals: 1, suffix: '%', color: COLORS.blue},
  {label: 'SWE-bench top', value: 95.5, decimals: 1, suffix: '%', color: COLORS.green},
  {label: 'Câu hỏi chuyên gia', value: 2500, decimals: 0, suffix: '', color: COLORS.amber},
  {label: 'Kết luận', value: 0, decimals: 0, suffix: '', custom: 'Còn đường dài', color: COLORS.purple},
];

const Scene10: React.FC = () => (
  <SceneShell seed={10}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 40}}>
      <AnimatedCard delay={0}>
        <h2 style={{fontSize: 64, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
          Đề thi cuối cùng của nhân loại
        </h2>
      </AnimatedCard>
      <AnimatedCard delay={2}>
        <p style={{fontSize: 28, color: COLORS.slate, margin: 0, fontFamily: FONT, textAlign: 'center', maxWidth: 1150}}>
          Humanity&apos;s Last Exam: 2.500 câu hỏi expert. Lúc ra mắt AI dưới 10% — nay leo được 2/3 núi.
        </p>
      </AnimatedCard>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32, width: 1060}}>
        {infraStats.map((s, i) => (
          <AnimatedCard key={s.label} delay={6 + i * 5}>
            <GlassCard style={{padding: 44, textAlign: 'center', borderTop: `5px solid ${s.color}`}}>
              {s.custom ? (
                <span style={{fontSize: 60, fontWeight: 800, color: COLORS.dark, display: 'block', fontFamily: FONT}}>
                  {s.custom}
                </span>
              ) : (
                <CountUp
                  value={s.value}
                  decimals={s.decimals}
                  suffix={s.suffix}
                  delay={10 + i * 5}
                  style={{fontSize: 76, fontWeight: 800, color: COLORS.dark, display: 'block'}}
                />
              )}
              <div style={{fontSize: 26, color: COLORS.slate, fontWeight: 600, marginTop: 10, fontFamily: FONT}}>
                {s.label}
              </div>
            </GlassCard>
          </AnimatedCard>
        ))}
      </div>
    </div>
  </SceneShell>
);

// ============ SCENE 11: TRILLION-DOLLAR RACE (Source: labs spend >$1B/yr on compute; OpenAI ARR $12B toward >$20B end-2025; Stargate $500B; 92% Fortune 500 use ChatGPT) ============
const plans = [
  {name: 'OpenAI', price: 20, prefix: '$', suffix: 'B ARR', features: ['ARR $12B → >$20B cuối 2025', 'Stargate $500B hạ tầng', '92% Fortune 500 dùng ChatGPT'], cta: 'Người dẫn đầu', color: '#64748B'},
  {name: 'Google DeepMind', price: 500, prefix: '$', suffix: 'B', features: ['Stargate $500B cùng đối tác', 'Gato → Gemini đa năng', 'Hassabis: AGI 3–5 năm nữa'], cta: 'Kẻ bám đuổi', color: '#3B82F6'},
  {name: 'Anthropic', price: 1, prefix: '>$', suffix: 'B/năm', features: ['Compute >$1B/năm mỗi lab', 'Claude dẫn đầu an toàn', 'AGI cuối 2026–đầu 2027'], cta: 'Ngựa ô an toàn', color: '#8B5CF6'},
];

const Scene11: React.FC = () => (
  <SceneShell seed={11}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32}}>
      <AnimatedCard delay={0}>
        <h2 style={{fontSize: 64, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
          Cuộc đua nghìn tỷ đô
        </h2>
      </AnimatedCard>
      <AnimatedCard delay={2}>
        <p style={{fontSize: 28, color: COLORS.slate, margin: 0, fontFamily: FONT, textAlign: 'center', maxWidth: 1100}}>
          OpenAI, DeepMind, Anthropic — ai cầm lái AGI?
        </p>
      </AnimatedCard>
      <div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: 32}}>
        {plans.map((plan, i) => {
          const isPro = i === 1;

          return (
            <div key={plan.name} style={{width: 390, marginTop: isPro ? -16 : 0, position: 'relative'}}>
              <AnimatedCard delay={6 + i * 5}>
                {isPro && (
                  <div
                    style={{
                      position: 'absolute',
                      top: -18,
                      right: 20,
                      background: '#F59E0B',
                      color: 'white',
                      fontSize: 24,
                      fontWeight: 700,
                      padding: '8px 16px',
                      borderRadius: 999,
                      fontFamily: FONT,
                      transform: 'rotate(4deg)',
                      zIndex: 2,
                    }}
                  >
                    Stargate $500B
                  </div>
                )}
                <GlassCard
                  style={{
                    height: isPro ? 480 : 420,
                    padding: 40,
                    display: 'flex',
                    flexDirection: 'column',
                    border: isPro ? `2px solid ${COLORS.blue}` : undefined,
                    boxShadow: isPro ? '0 0 44px rgba(59,130,246,0.28)' : undefined,
                  }}
                >
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10}}>
                    <span style={{fontSize: 30, fontWeight: 700, color: COLORS.dark, fontFamily: FONT}}>{plan.name}</span>
                    {isPro && (
                      <div
                        style={{
                          background: '#EFF6FF',
                          color: '#1D4ED8',
                          fontSize: 24,
                          fontWeight: 700,
                          padding: '6px 14px',
                          borderRadius: 999,
                          fontFamily: FONT,
                        }}
                      >
                        TOP 3
                      </div>
                    )}
                  </div>
                  <div style={{fontSize: 24, color: COLORS.slate, fontWeight: 600, fontFamily: FONT}}>Nổi bật</div>
                  <CountUp
                    value={plan.price}
                    prefix={plan.prefix}
                    suffix={plan.suffix}
                    delay={10 + i * 5}
                    style={{fontSize: 64, fontWeight: 800, color: COLORS.dark, marginBottom: 20, display: 'block'}}
                  />
                  <div style={{display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 28}}>
                    {plan.features.map((f) => (
                      <div key={f} style={{display: 'flex', gap: 12, alignItems: 'center'}}>
                        <span style={{color: plan.color, fontWeight: 900, fontSize: 24}}>✓</span>
                        <span style={{color: '#475569', fontSize: 24, fontFamily: FONT}}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    style={{
                      marginTop: 'auto',
                      background: plan.color,
                      border: 'none',
                      borderRadius: 999,
                      padding: '20px 28px',
                      fontSize: 24,
                      fontWeight: 700,
                      color: 'white',
                      cursor: 'pointer',
                      fontFamily: FONT,
                    }}
                  >
                    {plan.cta}
                  </button>
                </GlassCard>
              </AnimatedCard>
            </div>
          );
        })}
      </div>
    </div>
  </SceneShell>
);

// ============ SCENE 12: AGI TIMELINE BETS (Source: Altman AGI before Jan 2029; Anthropic late 2026–early 2027; Hassabis 3–5 yrs ~50% by decade end; Metaculus median Feb 2028) ============
const Scene12: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <SceneShell seed={12} bg={IMG_ROBOT} lineColor="rgba(255,255,255,0.08)" overlay={0.4}>
      <div style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <AnimatedCard delay={0}>
          <GlassCard style={{width: 1000, padding: 56, textAlign: 'center'}}>
            <h2 style={{fontSize: 56, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
              Các sếp đoán ngày AGI
            </h2>
            <p style={{fontSize: 28, color: COLORS.slate, margin: '16px 0 32px', fontFamily: FONT}}>
              Cùng một câu hỏi, bốn đồng hồ đếm ngược khác giờ.
            </p>
            <div style={{display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap'}}>
              {['Altman: trước 01/2029', 'Anthropic: cuối 2026–đầu 2027', 'Hassabis: 3–5 năm', 'Metaculus: 02/2028'].map((c, i) => (
                <Pill key={c} delay={8 + i * 4} color="#10B981">
                  {c}
                </Pill>
              ))}
            </div>
          </GlassCard>
        </AnimatedCard>
      </div>

      <div style={{position: 'absolute', top: 100, right: 100, transform: `translateY(${Math.sin(frame / 30) * 8}px)`}}>
        <AnimatedCard delay={10}>
          <GlassCard style={{width: 340, padding: 34, textAlign: 'center'}}>
            <div style={{fontSize: 24, color: COLORS.slate, fontWeight: 600, fontFamily: FONT}}>Median dự báo</div>
            <div
              style={{
                fontSize: 52,
                fontWeight: 800,
                color: '#10B981',
                fontFamily: FONT,
                transform: `scale(${1 + 0.02 * Math.sin(frame / 6)})`,
              }}
            >
              02/2028
            </div>
          </GlassCard>
        </AnimatedCard>
      </div>
    </SceneShell>
  );
};

// ============ SCENE 13: ALARM CAMP (Source: Bostrom 'Superintelligence' 2014 — orthogonality/fast takeoff; Yudkowsky; AI 2027 scenario Kokotajlo et al. — deceptive alignment) ============
const compliance = [
  {t: 'Bostrom 2014', d: 'Siêu trí tuệ: giả thuyết nền'},
  {t: 'Orthogonality', d: 'Trí khôn ≠ mục tiêu tốt'},
  {t: 'Fast takeoff', d: 'Bùng nổ quá nhanh để kịp trở tay'},
  {t: 'Alignment cực khó', d: 'Lệch mục tiêu là thảm họa'},
  {t: 'Yudkowsky', d: 'Đừng thả quái vật ra ngoài'},
  {t: 'AI 2027', d: 'Ngoan khi bị test, khác khi thật'},
];

const Scene13: React.FC = () => (
  <SceneShell seed={13}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 40}}>
      <AnimatedCard delay={0}>
        <h2 style={{fontSize: 64, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
          Phe báo động: Đừng thả quái vật
        </h2>
      </AnimatedCard>
      <AnimatedCard delay={2}>
        <p style={{fontSize: 28, color: COLORS.slate, margin: 0, fontFamily: FONT, textAlign: 'center', maxWidth: 1150}}>
          Bostrom 2014, Yudkowsky: trí khôn và mục tiêu độc lập — lệch mục tiêu là thảm họa.
        </p>
      </AnimatedCard>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, width: 1180}}>
        {compliance.map((c, i) => (
          <AnimatedCard key={c.t} delay={6 + i * 4}>
            <GlassCard style={{padding: 36, display: 'flex', alignItems: 'center', gap: 20, height: 140}}>
              <div
                style={{
                  width: 60,
                  height: 60,
                  minWidth: 60,
                  borderRadius: '50%',
                  background: 'rgba(239,68,68,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#EF4444',
                  fontSize: 30,
                  fontWeight: 900,
                }}
              >
                !
              </div>
              <div>
                <div style={{fontSize: 30, fontWeight: 700, color: COLORS.dark, fontFamily: FONT}}>{c.t}</div>
                <div style={{fontSize: 24, color: COLORS.slate, fontFamily: FONT}}>{c.d}</div>
              </div>
            </GlassCard>
          </AnimatedCard>
        ))}
      </div>
    </div>
  </SceneShell>
);

// ============ SCENE 14: OPTIMIST CAMP (Source: LeCun rebuttal of x-risk as 'preposterous'; Munk Debate 2023 — 67% believed x-risk; Bostrom now 'fretful optimist') ============
const testimonials = [
  {quote: 'X-risk là phóng đại. Trí tuệ cần world model, không phải chỉ scale text.', name: 'Yann LeCun', role: 'Phe lạc quan • Meta', initials: 'YL', color: '#3B82F6'},
  {quote: 'Munk 2023: 67% khán giả tin AI là mối đe dọa hiện sinh — phe lo thắng tranh luận.', name: 'Munk Debate 2023', role: '67% tin x-risk', initials: 'M+', color: '#10B981'},
  {quote: 'Từ người báo động thành fretful optimist: lo, nhưng vẫn lạc quan về tương lai.', name: 'Nick Bostrom', role: 'Tác giả Superintelligence', initials: 'NB', color: '#8B5CF6'},
];

const Scene14: React.FC = () => (
  <SceneShell seed={14}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 44}}>
      <AnimatedCard delay={0}>
        <h2 style={{fontSize: 60, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT, textAlign: 'center'}}>
          Phe lạc quan: Đừng hoảng sớm
        </h2>
      </AnimatedCard>
      <AnimatedCard delay={2}>
        <p style={{fontSize: 28, color: COLORS.slate, margin: 0, fontFamily: FONT, textAlign: 'center', maxWidth: 1150}}>
          LeCun: x-risk là &apos;preposterous&apos;. Trí tuệ cần world model — alignment là bài toán thiết kế.
        </p>
      </AnimatedCard>
      <div style={{display: 'flex', gap: 32}}>
        {testimonials.map((t, i) => (
          <AnimatedCard key={t.name} delay={i * 5} style={{width: 400}}>
            <GlassCard style={{padding: 36, height: 280, position: 'relative'}}>
              <span style={{position: 'absolute', top: 4, left: 22, fontSize: 76, color: '#CBD5E1', fontWeight: 900, fontFamily: FONT}}>
                "
              </span>
              <p style={{fontSize: 26, lineHeight: 1.5, color: '#334155', margin: '40px 0 24px', fontFamily: FONT}}>
                {t.quote}
              </p>
              <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: t.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: 22,
                    fontFamily: FONT,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{fontWeight: 700, fontSize: 24, color: COLORS.dark, fontFamily: FONT}}>{t.name}</div>
                  <div style={{fontSize: 22, color: COLORS.slate, fontFamily: FONT}}>{t.role}</div>
                </div>
              </div>
            </GlassCard>
          </AnimatedCard>
        ))}
      </div>

      <div style={{display: 'flex', gap: 16}}>
        {['World model', 'Thiết kế an toàn', 'Mở & kiểm chứng'].map((c, i) => (
          <Pill key={c} delay={20 + i * 3} color="#94A3B8">
            {c}
          </Pill>
        ))}
      </div>
    </div>
  </SceneShell>
);

// ============ SCENE 15: 2027 TWO ENDINGS (Source: 'AI 2027' scenario by Kokotajlo et al. — super-coder Mar 2027, 300k copies at 50x speed; Nov 2025 update pushed median toward ~2030) ============
const Scene15: React.FC = () => (
  <SceneShell seed={15} bg={IMG_CITY} lineColor="rgba(255,255,255,0.08)" overlay={0.4}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <AnimatedCard delay={2}>
        <GlassCard style={{width: 1000, padding: 64, textAlign: 'center', background: 'rgba(255,255,255,0.75)'}}>
          <h2 style={{fontSize: 58, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
            2027: Hai ngã rẽ nhân loại
          </h2>
          <p style={{fontSize: 28, color: COLORS.slate, margin: '20px 0 36px', fontFamily: FONT}}>
            Kịch bản AI 2027: super-coder 03/2027 → 300.000 bản copy, nhanh gấp 50 lần.
          </p>
          <div style={{display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap'}}>
            <Pill delay={12} color="#EF4444" style={{fontSize: 30}}>
              Race: takeover
            </Pill>
            <Pill delay={16} color="#10B981" style={{fontSize: 30}}>
              Slowdown: hợp tác
            </Pill>
          </div>
          <div style={{fontSize: 24, color: COLORS.slate, marginTop: 28, fontFamily: FONT}}>
            Update 11/2025: median lùi về ~2030.
          </div>
        </GlassCard>
      </AnimatedCard>
    </div>
  </SceneShell>
);

// ============ SCENE 16: CTA — what will you choose before AGI? ============
const Scene16: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = 1 + 0.02 * Math.sin(frame / 5);

  return (
    <SceneShell seed={16}>
      <div style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <AnimatedCard delay={0}>
          <GlassCard style={{width: 960, padding: 68, textAlign: 'center'}}>
            <h2 style={{fontSize: 72, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
              Bạn chọn gì trước AGI?
            </h2>
            <p style={{fontSize: 32, color: COLORS.slate, margin: '20px 0 40px', fontFamily: FONT}}>
              AGI chưa tới — nhưng AI hẹp đã đổi việc bạn. Hãy học trước khi quá muộn.
            </p>
            <button
              style={{
                background: 'linear-gradient(90deg,#3B82F6,#8B5CF6,#F59E0B)',
                border: 'none',
                borderRadius: 999,
                padding: '26px 60px',
                fontSize: 34,
                fontWeight: 700,
                color: 'white',
                cursor: 'pointer',
                fontFamily: FONT,
                transform: `scale(${pulse})`,
                boxShadow: `0 0 0 ${8 + 6 * Math.sin(frame / 5)}px rgba(139,92,246,0.15), 0 16px 32px rgba(0,0,0,0.15)`,
              }}
            >
              Bắt đầu tìm hiểu
            </button>
            <div style={{display: 'flex', gap: 16, justifyContent: 'center', marginTop: 40, flexWrap: 'wrap'}}>
              {['Học dùng agent + kiểm chứng', 'Đòi minh bạch & an toàn', 'Giữ con người trong vòng lặp'].map((pill, i) => (
                <Pill key={pill} delay={8 + i * 4} color="#10B981">
                  {pill}
                </Pill>
              ))}
            </div>
          </GlassCard>
        </AnimatedCard>
      </div>
    </SceneShell>
  );
};

const sceneComponents = [
  Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7, Scene8,
  Scene9, Scene10, Scene11, Scene12, Scene13, Scene14, Scene15, Scene16,
];

const SaaSAnalytics: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: '#F8FAFC'}}>
    {sceneComponents.map((Scene, i) => (
      <Sequence
        key={i}
        from={i * SCENE_START}
        durationInFrames={i === sceneComponents.length - 1 ? LAST_DUR : SCENE_DUR}
      >
        <SceneWrapper duration={i === sceneComponents.length - 1 ? LAST_DUR : SCENE_DUR}>
          <Scene />
        </SceneWrapper>
      </Sequence>
    ))}
  </AbsoluteFill>
);

export const SaasDashboard: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: '#F8FAFC'}}>
    {sceneComponents.map((Scene, i) => (
      <Sequence
        key={i}
        from={i * SCENE_START}
        durationInFrames={i === sceneComponents.length - 1 ? LAST_DUR : SCENE_DUR}
      >
        <SceneWrapper duration={i === sceneComponents.length - 1 ? LAST_DUR : SCENE_DUR}>
          <Scene />
        </SceneWrapper>
      </Sequence>
    ))}
  </AbsoluteFill>
);
