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
const IMG_SECURITY = staticFile('images/ai-tech/cyber-security-digital.jpg');
const IMG_QUANTUM = staticFile('images/ai-tech/quantum-computer.jpg');

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

// ============ SCENE 1: HERO ============
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
              HỆ THỐNG VSL
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
              Hiểu Ngôn ngữ Ký hiệu Thời gian thực
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
              Trích xuất 76 điểm khung hình từ video bằng GPU + MediaPipe.
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
              Dùng thử miễn phí
            </button>
            <span style={{fontSize: 22, color: COLORS.slate, fontFamily: FONT}}>
              Không cần thẻ · Cài đặt 5 phút
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

// ============ SCENE 2: METRICS OVERVIEW ============
const metrics = [
  {label: 'Điểm landmark/khung', value: 76, decimals: 0, prefix: '', suffix: '', color: COLORS.blue},
  {label: 'Độ chính xác', value: 98.5, decimals: 1, prefix: '', suffix: '%', color: COLORS.green},
  {label: 'Tốc độ thực thi', value: 30, decimals: 0, prefix: '', suffix: ' FPS', color: COLORS.amber},
  {label: 'Tỷ lệ uptime', value: 99.99, decimals: 2, prefix: '', suffix: '%', color: COLORS.purple},
  {label: 'Video xử lý/ngày', value: 500, decimals: 0, prefix: '', suffix: 'K+', color: '#0EA5E9'},
  {label: 'Ngôn ngữ hỗ trợ', value: 12, decimals: 0, prefix: '', suffix: '+', color: '#EC4899'},
];

const Scene2: React.FC = () => (
  <SceneShell seed={2}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 40}}>
      <AnimatedCard delay={0}>
        <h2 style={{fontSize: 64, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
          Con số biết nói
        </h2>
      </AnimatedCard>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, width: 1240}}>
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
              <CountUp
                value={m.value}
                decimals={m.decimals}
                prefix={m.prefix}
                suffix={m.suffix}
                delay={10 + i * 4}
                style={{fontSize: 72, fontWeight: 800, color: COLORS.dark}}
              />
            </GlassCard>
          </AnimatedCard>
        ))}
      </div>
    </div>
  </SceneShell>
);

// ============ SCENE 3: LIVE DASHBOARD ============
const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const groups = [
    {label: 'Tay trái', values: [55, 72, 64], color: '#3B82F6'},
    {label: 'Tay phải', values: [62, 80, 70], color: '#10B981'},
    {label: 'Khuôn mặt', values: [70, 85, 78], color: '#F59E0B'},
    {label: 'Tư thế', values: [48, 66, 58], color: '#8B5CF6'},
  ];
  const stats = [
    {label: 'Khung hình / giây', value: 30, suffix: ''},
    {label: 'Độ trễ trung bình', value: 0.8, decimals: 1, suffix: 's'},
    {label: 'Tỷ lệ lỗi', value: 0.02, decimals: 2, suffix: '%'},
    {label: 'Cuộc gọi API', value: 12.4, decimals: 1, suffix: 'M'},
  ];

  return (
    <SceneShell seed={3}>
      <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24}}>
        <AnimatedCard delay={0}>
          <GlassCard style={{width: 1240, padding: 44}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32}}>
              <span style={{fontSize: 46, fontWeight: 800, color: COLORS.dark, fontFamily: FONT}}>
                Bảng điều khiển Ký hiệu trực tiếp
              </span>
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
                <CountUp
                  value={s.value}
                  decimals={s.decimals}
                  suffix={s.suffix}
                  delay={34 + i * 4}
                  style={{fontSize: 48, fontWeight: 800, color: COLORS.dark, display: 'block'}}
                />
                <div style={{fontSize: 22, color: COLORS.slate, marginTop: 8, fontFamily: FONT}}>{s.label}</div>
              </GlassCard>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </SceneShell>
  );
};

// ============ SCENE 4: GROWTH TREND (MCP LineChart) ============
const Scene4: React.FC = () => (
  <SceneShell seed={4}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32}}>
      <AnimatedCard delay={0}>
        <h2 style={{fontSize: 64, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT, textAlign: 'center'}}>
          Tăng tốc độ nhận diện
        </h2>
      </AnimatedCard>
      <AnimatedCard delay={4}>
        <GlassCard style={{width: 1240, padding: 48}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 40, marginBottom: 24}}>
            <div>
              <div style={{fontSize: 24, color: COLORS.slate, fontWeight: 600, fontFamily: FONT}}>Từ khi ra mắt</div>
              <CountUp
                value={300}
                prefix="+"
                suffix="%"
                delay={10}
                style={{fontSize: 80, fontWeight: 800, color: COLORS.green}}
              />
            </div>
            <div style={{fontSize: 26, color: COLORS.slate, lineHeight: 1.5, fontFamily: FONT, maxWidth: 500}}>
              Tốc độ suy luận tăng vọt mỗi quý kể từ khi ra mắt.
            </div>
          </div>
          <LineChartMCP
            color="#10B981"
            pointColor="#F59E0B"
            title=""
            delay={14}
            data={[
              {x: 0, y: 20, label: 'Q1'}, {x: 1, y: 35, label: 'Q2'},
              {x: 2, y: 30, label: 'Q3'}, {x: 3, y: 50, label: 'Q4'},
              {x: 4, y: 45, label: 'Q5'}, {x: 5, y: 65, label: 'Q6'},
              {x: 6, y: 60, label: 'Q7'}, {x: 7, y: 85, label: 'Q8'},
            ]}
          />
        </GlassCard>
      </AnimatedCard>
    </div>
  </SceneShell>
);

// ============ SCENE 5: FEATURES ============
const features = [
  {icon: '⚡', title: 'Trích xuất thời gian thực', desc: 'Streaming độ trễ thấp, 30 FPS trên GPU.', color: COLORS.blue, bg: 'rgba(59,130,246,0.1)', progress: 95},
  {icon: '📊', title: 'Đa luồng video', desc: 'Xử lý nhiều nguồn camera cùng lúc.', color: COLORS.green, bg: 'rgba(16,185,129,0.1)', progress: 86},
  {icon: '🤖', title: 'Dự đoán ý định', desc: 'AI dự báo câu ký hiệu tiếp theo.', color: COLORS.purple, bg: 'rgba(139,92,246,0.1)', progress: 78},
  {icon: '🔔', title: 'Cảnh báo tùy chỉnh', desc: 'Nhận thông báo khi phát hiện ký hiệu.', color: COLORS.amber, bg: 'rgba(245,158,11,0.1)', progress: 90},
];

const Scene5: React.FC = () => (
  <SceneShell seed={5}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 40}}>
      <AnimatedCard delay={0}>
        <h2 style={{fontSize: 64, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
          Mọi thứ bạn cần, có sẵn
        </h2>
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

// ============ SCENE 6: AI ENGINE ============
const Scene6: React.FC = () => (
  <SceneShell seed={6} bg={IMG_HOLOGRAM} lineColor="rgba(255,255,255,0.08)" overlay={0.4}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <AnimatedCard delay={0}>
        <GlassCard style={{width: 900, padding: 60, textAlign: 'center'}}>
          <h2 style={{fontSize: 60, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
            Trí tuệ Ký hiệu AI
          </h2>
          <p style={{fontSize: 30, color: COLORS.slate, margin: '20px 0 36px', fontFamily: FONT}}>
            Tự động nhận diện các ký hiệu quan trọng nhất.
          </p>
          <div style={{display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40}}>
            {['Nhận diện', 'Dự đoán câu', 'Dịch tự động'].map((pill, i) => (
              <Pill key={pill} delay={8 + i * 4} color="#8B5CF6">
                {pill}
              </Pill>
            ))}
          </div>
          <div style={{borderTop: '1px solid rgba(15,23,42,0.1)', paddingTop: 32}}>
            <div style={{fontSize: 24, color: COLORS.slate, fontWeight: 600, fontFamily: FONT}}>
              Độ chính xác nhận diện
            </div>
            <CountUp
              value={97.2}
              decimals={1}
              suffix="%"
              delay={26}
              style={{fontSize: 72, fontWeight: 800, color: '#8B5CF6'}}
            />
          </div>
        </GlassCard>
      </AnimatedCard>
    </div>
  </SceneShell>
);

// ============ SCENE 7: AI CAPABILITIES ============
const aiCapabilities = [
  {icon: '🔮', title: 'Ước lượng tư thế', desc: 'Dự đoán điểm khớp từ chuỗi khung hình.', color: '#8B5CF6', bg: 'rgba(139,92,246,0.1)'},
  {icon: '🚨', title: 'Nhận diện bàn tay', desc: 'Track 21 điểm mỗi bàn tay theo thời gian thực.', color: '#EF4444', bg: 'rgba(239,68,68,0.1)'},
  {icon: '💬', title: 'Truy vấn ngôn ngữ', desc: 'Hỏi bằng tiếng Việt, nhận biểu đồ ngay.', color: '#3B82F6', bg: 'rgba(59,130,246,0.1)'},
  {icon: '⚙️', title: 'Tự động tối ưu', desc: 'AI tự tinh chỉnh mô hình cho độ chính xác cao.', color: '#10B981', bg: 'rgba(16,185,129,0.1)'},
];

const Scene7: React.FC = () => (
  <SceneShell seed={7}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 40}}>
      <AnimatedCard delay={0}>
        <h2 style={{fontSize: 64, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
          AI làm việc khi bạn nghỉ
        </h2>
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

// ============ SCENE 8: CODE/INTEGRATION ============
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
              Tích hợp nhanh gấp 10
            </h2>
            <p style={{fontSize: 26, color: COLORS.slate, margin: '16px 0 28px', fontFamily: FONT}}>
              SDK gắn liền mọi nền tảng. Bắt đầu stream trong vài phút.
            </p>
            <div style={{display: 'flex', gap: 14, flexWrap: 'wrap'}}>
              {['Python', 'TypeScript', 'C++', 'Rust'].map((lang, i) => (
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

// ============ SCENE 9: SERVER/SCALE ============
const Scene9: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <SceneShell seed={9} bg={IMG_SERVER} lineColor="rgba(255,255,255,0.08)" overlay={0.4}>
      <div style={{position: 'absolute', left: 100, bottom: 90, width: 500}}>
        <AnimatedCard delay={0}>
          <GlassCard style={{padding: 44}}>
            <div style={{fontSize: 26, fontWeight: 600, color: COLORS.slate, fontFamily: FONT}}>
              Năng lực tính toán
            </div>
            <CountUp value={10000} suffix="+" delay={6} style={{fontSize: 72, fontWeight: 800, color: COLORS.dark}} />
            <div style={{fontSize: 26, fontWeight: 600, color: COLORS.slate, fontFamily: FONT}}>GPU Nodes</div>
          </GlassCard>
        </AnimatedCard>
      </div>

      <div style={{position: 'absolute', top: 100, right: 100, transform: `translateY(${Math.sin(frame / 30) * 8}px)`}}>
        <AnimatedCard delay={8}>
          <GlassCard style={{width: 320, padding: 34, textAlign: 'center'}}>
            <div style={{fontSize: 24, color: COLORS.slate, fontFamily: FONT}}>Vùng toàn cầu</div>
            <CountUp value={42} delay={12} style={{fontSize: 60, fontWeight: 800, color: COLORS.blue}} />
          </GlassCard>
        </AnimatedCard>
      </div>

      <div style={{position: 'absolute', bottom: 300, right: 100, transform: `translateY(${Math.sin(frame / 25 + 1) * 8}px)`}}>
        <AnimatedCard delay={14}>
          <GlassCard style={{width: 320, padding: 34, textAlign: 'center'}}>
            <div style={{fontSize: 24, color: COLORS.slate, fontFamily: FONT}}>Độ trễ</div>
            <span style={{fontSize: 60, fontWeight: 800, color: COLORS.green, fontFamily: MONO}}>{'<50ms'}</span>
          </GlassCard>
        </AnimatedCard>
      </div>
    </SceneShell>
  );
};

// ============ SCENE 10: GLOBAL INFRASTRUCTURE ============
const infraStats = [
  {label: 'Trung tâm dữ liệu', value: 85, suffix: '+', color: COLORS.blue},
  {label: 'Vùng', value: 42, suffix: '', color: COLORS.green},
  {label: 'Uptime SLA', value: 99.99, decimals: 2, suffix: '%', color: COLORS.amber},
  {label: 'Petabyte đã xử lý', value: 12, suffix: 'PB+', color: COLORS.purple},
];

const Scene10: React.FC = () => (
  <SceneShell seed={10}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 40}}>
      <AnimatedCard delay={0}>
        <h2 style={{fontSize: 64, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
          Hạ tầng toàn cầu quy mô lớn
        </h2>
      </AnimatedCard>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32, width: 1060}}>
        {infraStats.map((s, i) => (
          <AnimatedCard key={s.label} delay={6 + i * 5}>
            <GlassCard style={{padding: 44, textAlign: 'center', borderTop: `5px solid ${s.color}`}}>
              <CountUp
                value={s.value}
                decimals={s.decimals}
                suffix={s.suffix}
                delay={10 + i * 5}
                style={{fontSize: 76, fontWeight: 800, color: COLORS.dark, display: 'block'}}
              />
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

// ============ SCENE 11: PRICING ============
const plans = [
  {name: 'Cá nhân', price: 49, features: ['1 dự án', '100K sự kiện/tháng', 'Hỗ trợ cộng đồng'], cta: 'Bắt đầu', color: '#64748B'},
  {name: 'Chuyên nghiệp', price: 199, features: ['Dự án không giới hạn', '10M sự kiện/tháng', 'Hỗ trợ ưu tiên', 'AI insights'], cta: 'Dùng thử', color: '#3B82F6'},
  {name: 'Doanh nghiệp', price: 799, features: ['Hạ tầng riêng', 'SSO/SAML', 'SLA tùy chỉnh'], cta: 'Liên hệ', color: '#8B5CF6'},
];

const Scene11: React.FC = () => (
  <SceneShell seed={11}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32}}>
      <AnimatedCard delay={0}>
        <h2 style={{fontSize: 64, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
          Bảng giá đơn giản, minh bạch
        </h2>
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
                      fontSize: 17,
                      fontWeight: 700,
                      padding: '8px 16px',
                      borderRadius: 999,
                      fontFamily: FONT,
                      transform: 'rotate(4deg)',
                      zIndex: 2,
                    }}
                  >
                    Tiết kiệm 20%/năm
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
                          fontSize: 16,
                          fontWeight: 700,
                          padding: '6px 14px',
                          borderRadius: 999,
                          fontFamily: FONT,
                        }}
                      >
                        PHỔ BIẾN
                      </div>
                    )}
                  </div>
                  <div style={{fontSize: 22, color: COLORS.slate, fontWeight: 600, fontFamily: FONT}}>Bắt đầu từ</div>
                  <CountUp
                    value={plan.price}
                    prefix="$"
                    delay={10 + i * 5}
                    style={{fontSize: 64, fontWeight: 800, color: COLORS.dark, marginBottom: 20, display: 'block'}}
                  />
                  <div style={{display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 28}}>
                    {plan.features.map((f) => (
                      <div key={f} style={{display: 'flex', gap: 12, alignItems: 'center'}}>
                        <span style={{color: plan.color, fontWeight: 900, fontSize: 24}}>✓</span>
                        <span style={{color: '#475569', fontSize: 23, fontFamily: FONT}}>{f}</span>
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

// ============ SCENE 12: SECURITY ============
const Scene12: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <SceneShell seed={12} bg={IMG_SECURITY} lineColor="rgba(255,255,255,0.08)" overlay={0.4}>
      <div style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <AnimatedCard delay={0}>
          <GlassCard style={{width: 820, padding: 56, textAlign: 'center'}}>
            <h2 style={{fontSize: 56, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
              Bảo mật cấp doanh nghiệp
            </h2>
            <p style={{fontSize: 28, color: COLORS.slate, margin: '16px 0 32px', fontFamily: FONT}}>
              Dữ liệu được mã hóa, cách ly và sẵn sàng kiểm toán.
            </p>
            <div style={{display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap'}}>
              {['SOC 2', 'ISO 27001', 'HIPAA', 'GDPR'].map((c, i) => (
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
          <GlassCard style={{width: 320, padding: 34, textAlign: 'center'}}>
            <div style={{fontSize: 24, color: COLORS.slate, fontWeight: 600, fontFamily: FONT}}>Mức độ bảo mật</div>
            <div
              style={{
                fontSize: 60,
                fontWeight: 800,
                color: '#10B981',
                fontFamily: MONO,
                transform: `scale(${1 + 0.02 * Math.sin(frame / 6)})`,
              }}
            >
              A+
            </div>
          </GlassCard>
        </AnimatedCard>
      </div>
    </SceneShell>
  );
};

// ============ SCENE 13: COMPLIANCE GRID ============
const compliance = ['SOC 2', 'ISO 27001', 'HIPAA', 'GDPR', 'PCI-DSS', 'CCPA'];

const Scene13: React.FC = () => (
  <SceneShell seed={13}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 40}}>
      <AnimatedCard delay={0}>
        <h2 style={{fontSize: 64, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
          Đạt chứng nhận & tuân thủ đầy đủ
        </h2>
      </AnimatedCard>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, width: 1180}}>
        {compliance.map((c, i) => (
          <AnimatedCard key={c} delay={6 + i * 4}>
            <GlassCard style={{padding: 36, display: 'flex', alignItems: 'center', gap: 20, height: 140}}>
              <div
                style={{
                  width: 60,
                  height: 60,
                  minWidth: 60,
                  borderRadius: '50%',
                  background: 'rgba(16,185,129,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#10B981',
                  fontSize: 30,
                  fontWeight: 900,
                }}
              >
                ✓
              </div>
              <div>
                <div style={{fontSize: 30, fontWeight: 700, color: COLORS.dark, fontFamily: FONT}}>{c}</div>
                <div style={{fontSize: 22, color: COLORS.slate, fontFamily: FONT}}>Đã chứng nhận</div>
              </div>
            </GlassCard>
          </AnimatedCard>
        ))}
      </div>
    </div>
  </SceneShell>
);

// ============ SCENE 14: TRUST ============
const testimonials = [
  {quote: 'Trích xuất ký hiệu nhanh và mượt đến bất ngờ.', name: 'Nguyễn Anh', role: 'Trưởng nhóm Product, FPT', initials: 'NA', color: '#3B82F6'},
  {quote: 'AI dự đoán câu ký hiệu cực kỳ chuẩn xác.', name: 'Trần Minh', role: 'CTO, Viettel', initials: 'TM', color: '#10B981'},
  {quote: 'Đội ngũ áp dụng chỉ trong một tuần.', name: 'Lê Mai', role: 'Trưởng nhóm Data, VNG', initials: 'LM', color: '#8B5CF6'},
];

const Scene14: React.FC = () => (
  <SceneShell seed={14}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 44}}>
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
        {['FPT', 'Viettel', 'VNG', 'Bộ Y tế', 'ĐHQG'].map((c, i) => (
          <Pill key={c} delay={20 + i * 3} color="#94A3B8">
            {c}
          </Pill>
        ))}
      </div>
    </div>
  </SceneShell>
);

// ============ SCENE 15: QUANTUM ============
const Scene15: React.FC = () => (
  <SceneShell seed={15} bg={IMG_QUANTUM} lineColor="rgba(255,255,255,0.08)" overlay={0.4}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <AnimatedCard delay={2}>
        <GlassCard style={{width: 840, padding: 64, textAlign: 'center', background: 'rgba(255,255,255,0.75)'}}>
          <h2 style={{fontSize: 58, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
            Sẵn sàng Edge & Mobile
          </h2>
          <p style={{fontSize: 30, color: COLORS.slate, margin: '20px 0 36px', fontFamily: FONT}}>
            Chạy mượt trên thiết bị biên và di động ngay hôm nay.
          </p>
          <Pill delay={12} color="#8B5CF6" style={{fontSize: 30}}>
            Edge · Mobile · Cloud
          </Pill>
        </GlassCard>
      </AnimatedCard>
    </div>
  </SceneShell>
);

// ============ SCENE 16: CTA ============
const Scene16: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = 1 + 0.02 * Math.sin(frame / 5);

  return (
    <SceneShell seed={16}>
      <div style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <AnimatedCard delay={0}>
          <GlassCard style={{width: 960, padding: 68, textAlign: 'center'}}>
            <h2 style={{fontSize: 72, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
              Bắt đầu trích xuất thông minh
            </h2>
            <p style={{fontSize: 32, color: COLORS.slate, margin: '20px 0 40px', fontFamily: FONT}}>
              Nhận phân tích ký hiệu và AI trong một nền tảng.
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
              Dùng thử ngay
            </button>
            <div style={{display: 'flex', gap: 16, justifyContent: 'center', marginTop: 40, flexWrap: 'wrap'}}>
              {['Cài đặt 1 click', 'Dự đoán AI', 'Sẵn sàng cho đội'].map((pill, i) => (
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
