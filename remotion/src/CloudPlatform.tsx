import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  interpolate,
  registerRoot,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const FPS = 30;
const SCENE_START = 120;
const SCENE_DUR = 128;
const LAST_DUR = 120;
const NUM_SCENES = 16;
const DURATION = (NUM_SCENES - 1) * SCENE_START + LAST_DUR;

const FONT = `system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif`;
const MONO = `Courier New, monospace`;

const COLORS = {
  blue: '#3B82F6',
  green: '#10B981',
  amber: '#F59E0B',
  purple: '#8B5CF6',
  slate: '#64748B',
  dark: '#0F172A',
};

const IMG_CLOUD = staticFile('images/ai-tech/cloud-server.jpg');
const IMG_NETWORK = staticFile('images/ai-tech/network-cloud.jpg');
const IMG_DEVOPS = staticFile('images/ai-tech/devops-tools.jpg');
const IMG_SECURITY = staticFile('images/ai-tech/cyber-security-digital.jpg');
const IMG_ROBOT = staticFile('images/ai-tech/robot-technology.jpg');

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
      <img
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

// Scene 1: Hero
const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <SceneShell seed={1}>
      <div style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: '0 100px'}}>
        <div style={{maxWidth: 800}}>
          <AnimatedCard delay={0}>
            <div style={{display: 'inline-flex', alignItems: 'center', gap: 10, background: '#FEF3C7', border: '1px solid #FCD34D', borderRadius: 999, padding: '10px 22px', fontSize: 28, fontWeight: 700, color: '#92400E', letterSpacing: '0.08em'}}>
              <span style={{width: 12, height: 12, borderRadius: '50%', background: '#F59E0B'}} />
              CLOUD OPS
            </div>
          </AnimatedCard>
          <AnimatedCard delay={3}>
            <h1 style={{fontSize: 88, fontWeight: 800, lineHeight: 1.04, color: COLORS.dark, margin: '32px 0 20px', fontFamily: FONT}}>
              Deploy at<br />
              <span style={{color: COLORS.blue}}>Cloud Speed</span>
            </h1>
          </AnimatedCard>
          <AnimatedCard delay={6}>
            <p style={{fontSize: 34, lineHeight: 1.5, color: '#475569', marginBottom: 44, maxWidth: 700, fontFamily: FONT}}>
              CI/CD pipelines, Kubernetes orchestration, zero-downtime deployments.
            </p>
          </AnimatedCard>
          <AnimatedCard delay={9} style={{display: 'flex', flexDirection: 'column', gap: 16}}>
            <button style={{backgroundColor: '#F59E0B', border: 'none', borderRadius: 999, padding: '24px 52px', fontSize: 30, fontWeight: 700, color: 'white', cursor: 'pointer', fontFamily: FONT, width: 'fit-content', transform: `scale(${1 + 0.02 * Math.sin(frame / 5)})`, boxShadow: `0 0 0 ${6 + 4 * Math.sin(frame / 5)}px rgba(245,158,11,0.15), 0 16px 32px rgba(245,158,11,0.25)`}}>
              Start free trial
            </button>
            <span style={{fontSize: 22, color: COLORS.slate, fontFamily: FONT}}>No credit card required · Setup in 5 minutes</span>
          </AnimatedCard>
        </div>
        <div style={{flex: 1, display: 'flex', justifyContent: 'center', perspective: 1200}}>
          <GlassCard style={{width: 640, height: 460, padding: 32, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: 64, fontWeight: 800, color: COLORS.blue, fontFamily: MONO}}>K8s</div>
              <div style={{fontSize: 28, color: COLORS.slate, fontFamily: FONT, marginTop: 12}}>Container Orchestration</div>
              <div style={{display: 'flex', gap: 16, justifyContent: 'center', marginTop: 24}}>
                {['Docker', 'Terraform', 'Helm'].map((tag, i) => (
                  <span key={tag} style={{padding: '8px 20px', background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 999, fontSize: 20, color: '#1D4ED8', fontFamily: FONT}}>{tag}</span>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </SceneShell>
  );
};

// Scene 2: Metrics
const metrics = [
  {label: 'Deployments', value: 12400, suffix: '', color: COLORS.blue},
  {label: 'Uptime', value: 99.99, decimals: 2, prefix: '', suffix: '%', color: COLORS.green},
  {label: 'Avg Deploy Time', value: 4.2, decimals: 1, prefix: '', suffix: 'min', color: COLORS.amber},
  {label: 'Containers', value: 8500, suffix: '+', color: COLORS.purple},
  {label: 'Regions', value: 24, suffix: '', color: '#0EA5E9'},
  {label: 'Incidents', value: 3, suffix: '', color: '#EC4899'},
];

const Scene2: React.FC = () => (
  <SceneShell seed={2}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 40}}>
      <AnimatedCard delay={0}>
        <h2 style={{fontSize: 64, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
          Infrastructure at a Glance
        </h2>
      </AnimatedCard>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, width: 1240}}>
        {metrics.map((m, i) => (
          <AnimatedCard key={m.label} delay={6 + i * 4}>
            <GlassCard style={{height: 240, padding: 36, borderTop: `5px solid ${m.color}`, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <div style={{fontSize: 24, fontWeight: 700, color: COLORS.slate, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 14, fontFamily: FONT}}>{m.label}</div>
              <CountUp value={m.value} decimals={m.decimals} prefix={m.prefix} suffix={m.suffix} delay={10 + i * 4} style={{fontSize: 72, fontWeight: 800, color: COLORS.dark}} />
            </GlassCard>
          </AnimatedCard>
        ))}
      </div>
    </div>
  </SceneShell>
);

// Scene 3: Live Pipeline
const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const pipelines = [
    {label: 'Build', values: [80, 95, 70], color: '#3B82F6'},
    {label: 'Test', values: [60, 85, 90], color: '#10B981'},
    {label: 'Staging', values: [40, 75, 80], color: '#F59E0B'},
    {label: 'Production', values: [90, 95, 98], color: '#8B5CF6'},
  ];
  const stats = [
    {label: 'Builds Today', value: 342, suffix: ''},
    {label: 'Pass Rate', value: 98.7, decimals: 1, suffix: '%'},
    {label: 'Rollbacks', value: 0, suffix: ''},
    {label: 'Avg Time', value: 4.2, decimals: 1, suffix: 'min'},
  ];
  return (
    <SceneShell seed={3}>
      <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24}}>
        <AnimatedCard delay={0}>
          <GlassCard style={{width: 1240, padding: 44}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32}}>
              <span style={{fontSize: 46, fontWeight: 800, color: COLORS.dark, fontFamily: FONT}}>CI/CD Pipeline Monitor</span>
              <LiveBadge />
            </div>
            <div style={{display: 'flex', gap: 20, height: 280}}>
              {pipelines.map((g, gi) => (
                <div key={g.label} style={{flex: 1, display: 'flex', gap: 10, alignItems: 'flex-end'}}>
                  {g.values.map((v, vi) => {
                    const idx = gi * 3 + vi;
                    const p = Math.min(1, spring({frame: Math.max(0, frame - (idx * 2 + 12)), fps: FPS, config: {damping: 13, mass: 0.65}}));
                    return (
                      <div key={vi} style={{flex: 1, height: `${v * p}%`, background: `linear-gradient(to top, ${g.color}, ${g.color}BB)`, borderRadius: '10px 10px 2px 2px'}} />
                    );
                  })}
                </div>
              ))}
            </div>
            <div style={{display: 'flex', gap: 20, marginTop: 18}}>
              {pipelines.map((g) => (
                <div key={g.label} style={{flex: 1, textAlign: 'center', fontSize: 24, fontWeight: 700, color: COLORS.slate, fontFamily: FONT}}>{g.label}</div>
              ))}
            </div>
          </GlassCard>
        </AnimatedCard>
        <div style={{display: 'flex', gap: 20, width: 1240}}>
          {stats.map((s, i) => (
            <AnimatedCard key={s.label} delay={30 + i * 4} style={{flex: 1}}>
              <GlassCard style={{padding: '28px 24px', textAlign: 'center'}}>
                <CountUp value={s.value} decimals={s.decimals} suffix={s.suffix} delay={34 + i * 4} style={{fontSize: 48, fontWeight: 800, color: COLORS.dark, display: 'block'}} />
                <div style={{fontSize: 22, color: COLORS.slate, marginTop: 8, fontFamily: FONT}}>{s.label}</div>
              </GlassCard>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </SceneShell>
  );
};

// Scene 4: Growth Trend
const Scene4: React.FC = () => (
  <SceneShell seed={4}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32}}>
      <AnimatedCard delay={0}>
        <h2 style={{fontSize: 64, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT, textAlign: 'center'}}>
          Deployment Velocity
        </h2>
      </AnimatedCard>
      <AnimatedCard delay={4}>
        <GlassCard style={{width: 1240, padding: 48}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 40, marginBottom: 24}}>
            <div>
              <div style={{fontSize: 24, color: COLORS.slate, fontWeight: 600, fontFamily: FONT}}>Deployments per Day</div>
              <CountUp value={85} prefix="" suffix="" delay={10} style={{fontSize: 80, fontWeight: 800, color: COLORS.green}} />
            </div>
            <div style={{fontSize: 26, color: COLORS.slate, lineHeight: 1.5, fontFamily: FONT, maxWidth: 500}}>
              3x increase in deployment frequency since adopting CloudOps.
            </div>
          </div>
          <svg width={1160} height={380} style={{display: 'block'}}>
            {[0, 25, 50, 75, 100].map((v) => (
              <React.Fragment key={v}>
                <line x1={60} y1={380 - 60 - (v / 100) * 280} x2={1160 - 60} y2={380 - 60 - (v / 100) * 280} stroke="#E2E8F0" strokeWidth="1" />
                <text x={48} y={380 - 60 - (v / 100) * 280 + 5} textAnchor="end" fill="#94A3B8" fontSize="18" fontFamily={FONT}>{v}</text>
              </React.Fragment>
            ))}
            <line x1={60} y1={320} x2={1100} y2={320} stroke="#CBD5E1" strokeWidth="2" />
            <polyline points="60,200 250,160 440,180 630,100 820,120 1010,60 1100,40" fill="none" stroke="#10B981" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <text key={i} x={60 + i * 190} y={350} textAnchor="middle" fill="#64748B" fontSize="18" fontFamily={FONT}>W{i + 1}</text>
            ))}
          </svg>
        </GlassCard>
      </AnimatedCard>
    </div>
  </SceneShell>
);

// Scene 5: Features
const features = [
  {icon: '🐳', title: 'Docker Native', desc: 'Build, ship, and run containers everywhere.', color: COLORS.blue, bg: 'rgba(59,130,246,0.1)', progress: 96},
  {icon: '☸️', title: 'Kubernetes', desc: 'Auto-scaling, self-healing clusters.', color: COLORS.green, bg: 'rgba(16,185,129,0.1)', progress: 92},
  {icon: '🏗️', title: 'Terraform', desc: 'Infrastructure as code, repeatable deploys.', color: COLORS.purple, bg: 'rgba(139,92,246,0.1)', progress: 88},
  {icon: '🔒', title: 'Secrets Vault', desc: 'Encrypted credentials, auto-rotation.', color: COLORS.amber, bg: 'rgba(245,158,11,0.1)', progress: 94},
];

const Scene5: React.FC = () => (
  <SceneShell seed={5}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 40}}>
      <AnimatedCard delay={0}>
        <h2 style={{fontSize: 64, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
          Everything DevOps Needs
        </h2>
      </AnimatedCard>
      <div style={{display: 'flex', gap: 28, justifyContent: 'center'}}>
        {features.map((f, i) => (
          <AnimatedCard key={f.title} delay={6 + i * 5} style={{width: 360}}>
            <GlassCard style={{height: 340, padding: 36, display: 'flex', flexDirection: 'column'}}>
              <div style={{width: 80, height: 80, borderRadius: 24, background: f.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 40, marginBottom: 24}}>{f.icon}</div>
              <h3 style={{fontSize: 32, fontWeight: 700, color: COLORS.dark, margin: '0 0 14px', fontFamily: FONT}}>{f.title}</h3>
              <p style={{fontSize: 24, color: COLORS.slate, lineHeight: 1.5, marginBottom: 'auto', fontFamily: FONT}}>{f.desc}</p>
              <FeatureProgress value={f.progress} delay={10 + i * 5} color={f.color} />
            </GlassCard>
          </AnimatedCard>
        ))}
      </div>
    </div>
  </SceneShell>
);

// Scene 6: AI Insights
const Scene6: React.FC = () => (
  <SceneShell seed={6} bg={IMG_CLOUD} overlay={0.4}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <AnimatedCard delay={0}>
        <GlassCard style={{width: 900, padding: 60, textAlign: 'center'}}>
          <h2 style={{fontSize: 60, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>Smart Deploy AI</h2>
          <p style={{fontSize: 30, color: COLORS.slate, margin: '20px 0 36px', fontFamily: FONT}}>Predicts failures before they happen and auto-rolls back.</p>
          <div style={{display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40}}>
            {['Predictive', 'Auto-Rollback', 'Anomaly Detection'].map((pill, i) => (
              <Pill key={pill} delay={8 + i * 4} color="#8B5CF6">{pill}</Pill>
            ))}
          </div>
          <div style={{borderTop: '1px solid rgba(15,23,42,0.1)', paddingTop: 32}}>
            <div style={{fontSize: 24, color: COLORS.slate, fontWeight: 600, fontFamily: FONT}}>Failure Prediction Accuracy</div>
            <CountUp value={97.8} decimals={1} suffix="%" delay={26} style={{fontSize: 72, fontWeight: 800, color: '#8B5CF6'}} />
          </div>
        </GlassCard>
      </AnimatedCard>
    </div>
  </SceneShell>
);

// Scene 7: AI Capabilities
const aiCaps = [
  {icon: '🤖', title: 'Auto-Scaling AI', desc: 'Scales resources based on traffic predictions.', color: '#8B5CF6', bg: 'rgba(139,92,246,0.1)'},
  {icon: '🔍', title: 'Log Analysis', desc: 'AI-powered log correlation and root cause.', color: '#EF4444', bg: 'rgba(239,68,68,0.1)'},
  {icon: '💬', title: 'Natural Language Queries', desc: 'Ask infrastructure questions in plain English.', color: '#3B82F6', bg: 'rgba(59,130,246,0.1)'},
  {icon: '⚙️', title: 'Auto-Remediation', desc: 'AI fixes common issues without human intervention.', color: '#10B981', bg: 'rgba(16,185,129,0.1)'},
];

const Scene7: React.FC = () => (
  <SceneShell seed={7}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 40}}>
      <AnimatedCard delay={0}>
        <h2 style={{fontSize: 64, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
          AI That Manages Your Infra
        </h2>
      </AnimatedCard>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32, width: 1160}}>
        {aiCaps.map((c, i) => (
          <AnimatedCard key={c.title} delay={6 + i * 5}>
            <GlassCard style={{padding: 40, display: 'flex', gap: 28, alignItems: 'flex-start', height: 220}}>
              <div style={{width: 88, height: 88, minWidth: 88, borderRadius: 24, background: c.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 42}}>{c.icon}</div>
              <div>
                <h3 style={{fontSize: 32, fontWeight: 700, color: COLORS.dark, margin: '0 0 12px', fontFamily: FONT}}>{c.title}</h3>
                <p style={{fontSize: 24, color: COLORS.slate, lineHeight: 1.5, margin: 0, fontFamily: FONT}}>{c.desc}</p>
              </div>
            </GlassCard>
          </AnimatedCard>
        ))}
      </div>
    </div>
  </SceneShell>
);

// Scene 8: Code/Integration
const Scene8: React.FC = () => {
  const frame = useCurrentFrame();
  const codeLines = [{w: '65%', color: '#93C5FD'}, {w: '40%', color: '#86EFAC'}, {w: '75%', color: '#FCA5A5'}, {w: '50%', color: '#FCD34D'}, {w: '60%', color: '#93C5FD'}];
  return (
    <SceneShell seed={8} bg={IMG_DEVOPS} overlay={0.4}>
      <div style={{position: 'absolute', left: 100, bottom: 90, width: 640}}>
        <AnimatedCard delay={0}>
          <GlassCard style={{padding: 48}}>
            <h2 style={{fontSize: 50, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>Ship 10x Faster</h2>
            <p style={{fontSize: 26, color: COLORS.slate, margin: '16px 0 28px', fontFamily: FONT}}>Drop-in SDKs for any stack. Start deploying in minutes.</p>
            <div style={{display: 'flex', gap: 14, flexWrap: 'wrap'}}>
              {['Go', 'Rust', 'Python', 'Node.js'].map((lang, i) => (
                <Pill key={lang} delay={8 + i * 4} color="#3B82F6">{lang}</Pill>
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
              const p = Math.min(1, spring({frame: Math.max(0, frame - (14 + i * 5)), fps: FPS, config: {damping: 14, mass: 0.6}}));
              return (
                <div key={i} style={{marginBottom: 16, overflow: 'hidden'}}>
                  <div style={{height: 22, width: `calc(${l.w} * ${p})`, background: l.color, borderRadius: 4, opacity: 0.85}} />
                </div>
              );
            })}
          </GlassCard>
        </AnimatedCard>
      </div>
    </SceneShell>
  );
};

// Scene 9: Server/Scale
const Scene9: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <SceneShell seed={9} bg={IMG_NETWORK} overlay={0.4}>
      <div style={{position: 'absolute', left: 100, bottom: 90, width: 500}}>
        <AnimatedCard delay={0}>
          <GlassCard style={{padding: 44}}>
            <div style={{fontSize: 26, fontWeight: 600, color: COLORS.slate, fontFamily: FONT}}>Compute power</div>
            <CountUp value={50000} suffix="+" delay={6} style={{fontSize: 72, fontWeight: 800, color: COLORS.dark}} />
            <div style={{fontSize: 26, fontWeight: 600, color: COLORS.slate, fontFamily: FONT}}>GPU Nodes</div>
          </GlassCard>
        </AnimatedCard>
      </div>
      <div style={{position: 'absolute', top: 100, right: 100, transform: `translateY(${Math.sin(frame / 30) * 8}px)`}}>
        <AnimatedCard delay={8}>
          <GlassCard style={{width: 320, padding: 34, textAlign: 'center'}}>
            <div style={{fontSize: 24, color: COLORS.slate, fontFamily: FONT}}>Global regions</div>
            <CountUp value={36} delay={12} style={{fontSize: 60, fontWeight: 800, color: COLORS.blue}} />
          </GlassCard>
        </AnimatedCard>
      </div>
      <div style={{position: 'absolute', bottom: 300, right: 100, transform: `translateY(${Math.sin(frame / 25 + 1) * 8}px)`}}>
        <AnimatedCard delay={14}>
          <GlassCard style={{width: 320, padding: 34, textAlign: 'center'}}>
            <div style={{fontSize: 24, color: COLORS.slate, fontFamily: FONT}}>Latency</div>
            <span style={{fontSize: 60, fontWeight: 800, color: COLORS.green, fontFamily: MONO}}>{'<30ms'}</span>
          </GlassCard>
        </AnimatedCard>
      </div>
    </SceneShell>
  );
};

// Scene 10: Global Infrastructure
const infraStats = [
  {label: 'Data Centers', value: 60, suffix: '+', color: COLORS.blue},
  {label: 'Regions', value: 36, suffix: '', color: COLORS.green},
  {label: 'Uptime SLA', value: 99.99, decimals: 2, suffix: '%', color: COLORS.amber},
  {label: 'TB Processed', value: 85, suffix: 'TB+', color: COLORS.purple},
];

const Scene10: React.FC = () => (
  <SceneShell seed={10}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 40}}>
      <AnimatedCard delay={0}>
        <h2 style={{fontSize: 64, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
          Global Infrastructure at Scale
        </h2>
      </AnimatedCard>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32, width: 1060}}>
        {infraStats.map((s, i) => (
          <AnimatedCard key={s.label} delay={6 + i * 5}>
            <GlassCard style={{padding: 44, textAlign: 'center', borderTop: `5px solid ${s.color}`}}>
              <CountUp value={s.value} decimals={s.decimals} suffix={s.suffix} delay={10 + i * 5} style={{fontSize: 76, fontWeight: 800, color: COLORS.dark, display: 'block'}} />
              <div style={{fontSize: 26, color: COLORS.slate, fontWeight: 600, marginTop: 10, fontFamily: FONT}}>{s.label}</div>
            </GlassCard>
          </AnimatedCard>
        ))}
      </div>
    </div>
  </SceneShell>
);

// Scene 11: Pricing
const plans = [
  {name: 'Starter', price: 29, features: ['5 projects', '100K events/mo', 'Community support'], cta: 'Get Started', color: '#64748B'},
  {name: 'Pro', price: 99, features: ['Unlimited projects', '1M events/mo', 'Priority support', 'AI insights'], cta: 'Start Trial', color: '#3B82F6'},
  {name: 'Enterprise', price: 499, features: ['Dedicated infra', 'SSO/SAML', 'Custom SLAs'], cta: 'Contact Sales', color: '#8B5CF6'},
];

const Scene11: React.FC = () => (
  <SceneShell seed={11}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32}}>
      <AnimatedCard delay={0}>
        <h2 style={{fontSize: 64, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
          Simple, Transparent Pricing
        </h2>
      </AnimatedCard>
      <div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: 32}}>
        {plans.map((plan, i) => {
          const isPro = i === 1;
          return (
            <div key={plan.name} style={{width: 390, marginTop: isPro ? -16 : 0, position: 'relative'}}>
              <AnimatedCard delay={6 + i * 5}>
                {isPro && (
                  <div style={{position: 'absolute', top: -18, right: 20, background: '#F59E0B', color: 'white', fontSize: 17, fontWeight: 700, padding: '8px 16px', borderRadius: 999, fontFamily: FONT, transform: 'rotate(4deg)', zIndex: 2}}>
                    Save 20% annually
                  </div>
                )}
                <GlassCard style={{height: isPro ? 480 : 420, padding: 40, display: 'flex', flexDirection: 'column', border: isPro ? `2px solid ${COLORS.blue}` : undefined, boxShadow: isPro ? '0 0 44px rgba(59,130,246,0.28)' : undefined}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10}}>
                    <span style={{fontSize: 30, fontWeight: 700, color: COLORS.dark, fontFamily: FONT}}>{plan.name}</span>
                    {isPro && (
                      <div style={{background: '#EFF6FF', color: '#1D4ED8', fontSize: 16, fontWeight: 700, padding: '6px 14px', borderRadius: 999, fontFamily: FONT}}>POPULAR</div>
                    )}
                  </div>
                  <div style={{fontSize: 22, color: COLORS.slate, fontWeight: 600, fontFamily: FONT}}>Starting at</div>
                  <CountUp value={plan.price} prefix="$" delay={10 + i * 5} style={{fontSize: 64, fontWeight: 800, color: COLORS.dark, marginBottom: 20, display: 'block'}} />
                  <div style={{display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 28}}>
                    {plan.features.map((f) => (
                      <div key={f} style={{display: 'flex', gap: 12, alignItems: 'center'}}>
                        <span style={{color: plan.color, fontWeight: 900, fontSize: 24}}>✓</span>
                        <span style={{color: '#475569', fontSize: 23, fontFamily: FONT}}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <button style={{marginTop: 'auto', background: plan.color, border: 'none', borderRadius: 999, padding: '20px 28px', fontSize: 24, fontWeight: 700, color: 'white', cursor: 'pointer', fontFamily: FONT}}>
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

// Scene 12: Security
const Scene12: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <SceneShell seed={12} bg={IMG_SECURITY} overlay={0.4}>
      <div style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <AnimatedCard delay={0}>
          <GlassCard style={{width: 820, padding: 56, textAlign: 'center'}}>
            <h2 style={{fontSize: 56, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
              Enterprise Grade Security
            </h2>
            <p style={{fontSize: 28, color: COLORS.slate, margin: '16px 0 32px', fontFamily: FONT}}>
              Zero-trust architecture, encrypted at rest and in transit.
            </p>
            <div style={{display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap'}}>
              {['SOC 2', 'ISO 27001', 'HIPAA', 'GDPR', 'PCI-DSS'].map((c, i) => (
                <Pill key={c} delay={8 + i * 4} color="#10B981">{c}</Pill>
              ))}
            </div>
          </GlassCard>
        </AnimatedCard>
      </div>
      <div style={{position: 'absolute', top: 100, right: 100, transform: `translateY(${Math.sin(frame / 30) * 8}px)`}}>
        <AnimatedCard delay={10}>
          <GlassCard style={{width: 320, padding: 34, textAlign: 'center'}}>
            <div style={{fontSize: 24, color: COLORS.slate, fontWeight: 600, fontFamily: FONT}}>Security score</div>
            <div style={{fontSize: 60, fontWeight: 800, color: '#10B981', fontFamily: MONO, transform: `scale(${1 + 0.02 * Math.sin(frame / 6)})`}}>A+</div>
          </GlassCard>
        </AnimatedCard>
      </div>
    </SceneShell>
  );
};

// Scene 13: Compliance
const compliance = ['SOC 2', 'ISO 27001', 'HIPAA', 'GDPR', 'PCI-DSS', 'CCPA'];

const Scene13: React.FC = () => (
  <SceneShell seed={13}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 40}}>
      <AnimatedCard delay={0}>
        <h2 style={{fontSize: 64, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
          Fully Certified & Compliant
        </h2>
      </AnimatedCard>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, width: 1180}}>
        {compliance.map((c, i) => (
          <AnimatedCard key={c} delay={6 + i * 4}>
            <GlassCard style={{padding: 36, display: 'flex', alignItems: 'center', gap: 20, height: 140}}>
              <div style={{width: 60, height: 60, minWidth: 60, borderRadius: '50%', background: 'rgba(16,185,129,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981', fontSize: 30, fontWeight: 900}}>✓</div>
              <div>
                <div style={{fontSize: 30, fontWeight: 700, color: COLORS.dark, fontFamily: FONT}}>{c}</div>
                <div style={{fontSize: 22, color: COLORS.slate, fontFamily: FONT}}>Certified</div>
              </div>
            </GlassCard>
          </AnimatedCard>
        ))}
      </div>
    </div>
  </SceneShell>
);

// Scene 14: Trust
const testimonials = [
  {quote: 'Deployments went from hourly to every 15 minutes.', name: 'David Kim', role: 'CTO, ScaleUp', initials: 'DK', color: '#3B82F6'},
  {quote: 'The AI predictions saved us from 3 major outages.', name: 'Lisa Wang', role: 'VP Eng, CloudNet', initials: 'LW', color: '#10B981'},
  {quote: 'Onboarded 50 engineers in a single week.', name: 'Raj Patel', role: 'Head of DevOps, DataFlow', initials: 'RP', color: '#8B5CF6'},
];

const Scene14: React.FC = () => (
  <SceneShell seed={14}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 44}}>
      <div style={{display: 'flex', gap: 32}}>
        {testimonials.map((t, i) => (
          <AnimatedCard key={t.name} delay={i * 5} style={{width: 400}}>
            <GlassCard style={{padding: 36, height: 280, position: 'relative'}}>
              <span style={{position: 'absolute', top: 4, left: 22, fontSize: 76, color: '#CBD5E1', fontWeight: 900, fontFamily: FONT}}>"</span>
              <p style={{fontSize: 26, lineHeight: 1.5, color: '#334155', margin: '40px 0 24px', fontFamily: FONT}}>{t.quote}</p>
              <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
                <div style={{width: 56, height: 56, borderRadius: '50%', background: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: 22, fontFamily: FONT}}>{t.initials}</div>
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
        {['Google', 'AWS', 'Azure', 'GCP', 'DigitalOcean'].map((c, i) => (
          <Pill key={c} delay={20 + i * 3} color="#94A3B8">{c}</Pill>
        ))}
      </div>
    </div>
  </SceneShell>
);

// Scene 15: Next-gen
const Scene15: React.FC = () => (
  <SceneShell seed={15} bg={IMG_ROBOT} overlay={0.4}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <AnimatedCard delay={2}>
        <GlassCard style={{width: 840, padding: 64, textAlign: 'center', background: 'rgba(255,255,255,0.75)'}}>
          <h2 style={{fontSize: 58, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
            Next-Gen Infrastructure
          </h2>
          <p style={{fontSize: 30, color: COLORS.slate, margin: '20px 0 36px', fontFamily: FONT}}>
            Built for the multi-cloud, edge-computing era.
          </p>
          <Pill delay={12} color="#8B5CF6" style={{fontSize: 30}}>
            Multi-Cloud · Edge · Serverless
          </Pill>
        </GlassCard>
      </AnimatedCard>
    </div>
  </SceneShell>
);

// Scene 16: CTA
const Scene16: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = 1 + 0.02 * Math.sin(frame / 5);
  return (
    <SceneShell seed={16}>
      <div style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <AnimatedCard delay={0}>
          <GlassCard style={{width: 960, padding: 68, textAlign: 'center'}}>
            <h2 style={{fontSize: 72, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
              Start Deploying Smarter
            </h2>
            <p style={{fontSize: 32, color: COLORS.slate, margin: '20px 0 40px', fontFamily: FONT}}>
              Get CI/CD, K8s orchestration, and AI insights in one platform.
            </p>
            <button style={{
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
              boxShadow: '0 0 0 8px rgba(139,92,246,0.15), 0 16px 32px rgba(0,0,0,0.15)',
            }}>
              Start Free
            </button>
            <div style={{display: 'flex', gap: 16, justifyContent: 'center', marginTop: 40, flexWrap: 'wrap'}}>
              {['1-click setup', 'AI forecasts', 'Team-ready'].map((pill, i) => (
                <Pill key={pill} delay={8 + i * 4} color="#10B981">{pill}</Pill>
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

const CloudPlatform: React.FC = () => (
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

export { CloudPlatform };