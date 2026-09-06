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
  orange: '#F38020',
  blue: '#3B82F6',
  green: '#10B981',
  amber: '#F59E0B',
  purple: '#8B5CF6',
  slate: '#64748B',
  dark: '#0F172A',
  white: '#FFFFFF',
};

const IMG_CF_HOME = staticFile('images/ai-tech/cloudflare-homepage.png');
const IMG_CF_CDN = staticFile('images/ai-tech/cloudflare-cdn.png');
const IMG_CF_DDOS = staticFile('images/ai-tech/cloudflare-ddos.png');
const IMG_CF_1111 = staticFile('images/ai-tech/cloudflare-1-1-1-1.png');

const glassCardStyle = (style: React.CSSProperties = {}): React.CSSProperties =>
  ({
    background: 'rgba(255,255,255,0.85)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    borderRadius: 24,
    border: '1px solid rgba(255,255,255,0.9)',
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
}> = ({children, delay = 0, distance = 20, style}) => {
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
        transform: `scale(${0.85 + 0.15 * p}) translateY(${(1 - p) * 8}px)`,
        background: `${color}14`,
        border: `1px solid ${color}45`,
        borderRadius: 999,
        padding: '10px 20px',
        fontSize: 20,
        fontWeight: 700,
        color: COLORS.dark,
        fontFamily: FONT,
        whiteSpace: 'nowrap',
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
    <div style={{height: 6, background: '#E2E8F0', borderRadius: 3, overflow: 'hidden', width: '100%'}}>
      <div
        style={{
          height: '100%',
          width: `${value * p}%`,
          background: color,
          borderRadius: 3,
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
        gap: 8,
        background: '#EFF6FF',
        border: '1px solid #BFDBFE',
        borderRadius: 999,
        padding: '8px 16px',
        color: '#1D4ED8',
        fontSize: 18,
        fontWeight: 700,
        fontFamily: FONT,
      }}
    >
      <span
        style={{
          width: 9,
          height: 9,
          borderRadius: '50%',
          background: '#3B82F6',
          boxShadow: '0 0 8px #3B82F6',
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
    {useBokeh && <BokehCircles count={seed > 0 ? 10 : 6} />}
  </AbsoluteFill>
);

const BokehCircles: React.FC<{count?: number}> = ({count = 10}) => {
  const frame = useCurrentFrame();
  const {width, height, fps} = useVideoConfig();
  const t = frame / fps;
  const circles = Array.from({length: count}, (_, i) => {
    const baseX = ((i * 173 + 53) % 100) / 100;
    const baseY = ((i * 241 + 97) % 100) / 100;
    const driftX = Math.sin(t * 0.2 + i * 1.3) * 25;
    const driftY = Math.cos(t * 0.15 + i * 0.9) * 20;
    const x = baseX * width + driftX;
    const y = baseY * height + driftY;
    const baseSize = 30 + ((i * 37 + 11) % 60);
    const pulse = Math.sin(t * 0.4 + i * 0.7) * 0.15 + 1;
    const size = baseSize * pulse;
    const opacity = 0.06 + ((i * 19 + 7) % 15) / 200;
    const colorOptions = [[243, 128, 32], [59, 130, 246], [16, 185, 129], [139, 92, 246]];
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
      dots.push({x, y, opacity: 0.04 + normalizedWave * 0.08, scale: 0.3 + normalizedWave * 0.4, key: row * cols + col});
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
            width: 8,
            height: 8,
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

// Split layout helper: image on left, content on right
const SplitLayout: React.FC<{
  children?: React.ReactNode;
  imageUrl?: string;
  imageSide?: 'left' | 'right';
  imageWidth?: number;
  overlay?: number;
  bgColor?: string;
}> = ({children, imageUrl, imageSide = 'right', imageWidth = 600, overlay = 0.5, bgColor = '#F8FAFC'}) => (
  <AbsoluteFill style={{backgroundColor: bgColor}}>
    {imageUrl && (
      <>
        <div style={{
          position: 'absolute',
          [imageSide]: 0,
          width: imageWidth,
          height: '100%',
          overflow: 'hidden',
        }}>
          <KenBurns imageUrl={imageUrl} scale={1.1} tx={imageSide === 'left' ? -10 : 10} ty={-5} />
          <div style={{position: 'absolute', inset: 0, backgroundColor: `rgba(255,255,255,${overlay})`}} />
        </div>
        <div style={{
          position: 'absolute',
          [imageSide === 'left' ? 'left' : 'right']: imageWidth,
          [imageSide === 'left' ? 'right' : 'left']: 0,
          height: '100%',
        }} />
      </>
    )}
    <div style={{
      position: 'absolute',
      [imageSide === 'left' ? 'right' : 'left']: imageWidth + 40,
      [imageSide === 'left' ? 'left' : 'right']: 40,
      top: 0,
      bottom: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: imageSide === 'left' ? 'flex-start' : 'flex-end',
      justifyContent: 'center',
      padding: '0 60px',
    }}>
      {children}
    </div>
  </AbsoluteFill>
);

// Scene 1: Hero - Split layout with Cloudflare homepage
const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <SplitLayout imageUrl={IMG_CF_HOME} imageSide="right" imageWidth={650} overlay={0.5}>
      <div style={{maxWidth: 600}}>
        <AnimatedCard delay={0}>
          <div style={{display: 'inline-flex', alignItems: 'center', gap: 8, background: '#FFF7ED', border: '1px solid #FED7AA', borderRadius: 999, padding: '8px 18px', fontSize: 24, fontWeight: 700, color: '#9A3412', letterSpacing: '0.06em', maxWidth: 'fit-content'}}>
            <span style={{width: 10, height: 10, borderRadius: '50%', background: '#F38020'}} />
            CLOUDFLARE
          </div>
        </AnimatedCard>
        <AnimatedCard delay={3}>
          <h1 style={{fontSize: 68, fontWeight: 800, lineHeight: 1.1, color: COLORS.dark, margin: '24px 0 16px', fontFamily: FONT, maxWidth: '100%'}}>
            Internet<br />
            <span style={{color: COLORS.orange}}>Nhanh Hơn</span><br />
            An Toàn Hơn
          </h1>
        </AnimatedCard>
        <AnimatedCard delay={6}>
          <p style={{fontSize: 26, lineHeight: 1.5, color: '#475569', marginBottom: 32, maxWidth: 520, fontFamily: FONT}}>
            CDN, bảo mật DDoS, điện toán biên — tất cả trong một nền tảng.
          </p>
        </AnimatedCard>
        <AnimatedCard delay={9} style={{display: 'flex', flexDirection: 'column', gap: 12}}>
          <button style={{backgroundColor: '#F38020', border: 'none', borderRadius: 999, padding: '20px 44px', fontSize: 26, fontWeight: 700, color: 'white', cursor: 'pointer', fontFamily: FONT, width: 'fit-content', transform: `scale(${1 + 0.02 * Math.sin(frame / 5)})`, boxShadow: `0 0 0 6px rgba(243,128,32,0.15), 0 12px 24px rgba(243,128,32,0.25)`}}>
            Bắt đầu miễn phí
          </button>
          <span style={{fontSize: 20, color: COLORS.slate, fontFamily: FONT}}>Không cần thẻ tín dụng · Thiết lập trong 5 phút</span>
        </AnimatedCard>
      </div>
    </SplitLayout>
  );
};

// Scene 2: What is Cloudflare - Cards layout
const Scene2: React.FC = () => (
  <SceneShell seed={2}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32}}>
      <AnimatedCard delay={0}>
        <h2 style={{fontSize: 56, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT, textAlign: 'center'}}>
          Cloudflare Là Gì?
        </h2>
      </AnimatedCard>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, width: 1200, padding: '0 40px'}}>
        {[
          {icon: '🌐', title: 'Mạng CDN Toàn Cầu', desc: '200+ data center trên khắp thế giới, đưa nội dung đến người dùng gần nhất.', color: COLORS.orange},
          {icon: '🛡️', title: 'Bảo Mật DDoS', desc: 'Chống lại các cuộc tấn công DDoS lớn nhất thế giới, bảo vệ mọi quy mô website.', color: COLORS.blue},
          {icon: '⚡', title: 'Edge Computing', desc: 'Chạy JavaScript/WASM tại biên mạng với Cloudflare Workers, giảm độ trễ tối thiểu.', color: COLORS.green},
          {icon: '🔍', title: 'DNS Thông Minh', desc: '1.1.1.1 — DNS resolver nhanh nhất thế giới, mã nguồn mở, bảo mật riêng tư.', color: COLORS.purple},
        ].map((f, i) => (
          <AnimatedCard key={f.title} delay={6 + i * 4}>
            <GlassCard style={{height: 200, padding: 28, borderTop: `4px solid ${f.color}`, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <div style={{fontSize: 36, marginBottom: 8}}>{f.icon}</div>
              <div style={{fontSize: 24, fontWeight: 700, color: COLORS.dark, marginBottom: 8, fontFamily: FONT}}>{f.title}</div>
              <div style={{fontSize: 20, color: COLORS.slate, lineHeight: 1.4, fontFamily: FONT}}>{f.desc}</div>
            </GlassCard>
          </AnimatedCard>
        ))}
      </div>
    </div>
  </SceneShell>
);

// Scene 3: How it works - Split layout with CDN screenshot
const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <SplitLayout imageUrl={IMG_CF_CDN} imageSide="right" imageWidth={580} overlay={0.45}>
      <div style={{display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 600}}>
        <AnimatedCard delay={0}>
          <GlassCard style={{width: '100%', padding: 36}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24}}>
              <span style={{fontSize: 38, fontWeight: 800, color: COLORS.dark, fontFamily: FONT}}>Cách Hoạt Động</span>
              <LiveBadge />
            </div>
            <div style={{display: 'flex', gap: 16, alignItems: 'center', justifyContent: 'center'}}>
              <div style={{textAlign: 'center'}}>
                <div style={{width: 80, height: 80, borderRadius: '50%', background: '#EFF6FF', border: '3px solid #3B82F6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, margin: '0 auto'}}>🌐</div>
                <div style={{fontSize: 18, fontWeight: 700, color: COLORS.dark, marginTop: 6, fontFamily: FONT}}>Người Dùng</div>
              </div>
              <div style={{fontSize: 26, color: COLORS.orange, fontWeight: 800}}>→</div>
              <div style={{textAlign: 'center'}}>
                <div style={{width: 110, height: 110, borderRadius: 24, background: '#FFF7ED', border: '3px solid #F38020', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 44, margin: '0 auto', boxShadow: '0 8px 32px rgba(243,128,32,0.3)'}}>☁️</div>
                <div style={{fontSize: 18, fontWeight: 700, color: COLORS.dark, marginTop: 6, fontFamily: FONT}}>Cloudflare</div>
                <div style={{fontSize: 14, color: COLORS.slate, fontFamily: FONT}}>Reverse Proxy + CDN</div>
              </div>
              <div style={{fontSize: 26, color: COLORS.green, fontWeight: 800}}>→</div>
              <div style={{textAlign: 'center'}}>
                <div style={{width: 80, height: 80, borderRadius: '50%', background: '#F0FDF4', border: '3px solid #10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, margin: '0 auto'}}>🖥️</div>
                <div style={{fontSize: 18, fontWeight: 700, color: COLORS.dark, marginTop: 6, fontFamily: FONT}}>Máy Chủ</div>
              </div>
            </div>
            <div style={{display: 'flex', gap: 10, marginTop: 20, justifyContent: 'center', flexWrap: 'wrap'}}>
              {['Yêu cầu HTTP', 'Phân tích & lọc', 'Phục vụ từ cache', 'Chống DDoS'].map((s, i) => (
                <Pill key={s} delay={10 + i * 3} color={[COLORS.blue, COLORS.orange, COLORS.green, COLORS.purple][i]}>{s}</Pill>
              ))}
            </div>
          </GlassCard>
        </AnimatedCard>
      </div>
    </SplitLayout>
  );
};

// Scene 4: DDoS Protection - Split layout with DDoS screenshot
const Scene4: React.FC = () => (
  <SplitLayout imageUrl={IMG_CF_DDOS} imageSide="right" imageWidth={620} overlay={0.5}>
    <div style={{display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 580}}>
      <AnimatedCard delay={0}>
        <GlassCard style={{width: '100%', padding: 48, textAlign: 'left'}}>
          <h2 style={{fontSize: 50, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
            Chống Tấn Công DDoS
          </h2>
          <p style={{fontSize: 24, color: COLORS.slate, margin: '14px 0 24px', fontFamily: FONT}}>
            Hàng terabit bảo mật mỗi ngày, tự động phát hiện và vô hiệu hóa tấn công.
          </p>
          <div style={{display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 28}}>
            {['L7 Application', 'L3/L4 Network', 'Bot Management', 'WAF Firewall'].map((pill, i) => (
              <Pill key={pill} delay={8 + i * 4} color="#F38020">{pill}</Pill>
            ))}
          </div>
          <div style={{borderTop: '1px solid rgba(15,23,42,0.1)', paddingTop: 24}}>
            <div style={{fontSize: 20, color: COLORS.slate, fontWeight: 600, fontFamily: FONT}}>Tấn công bị chặn mỗi ngày</div>
            <CountUp value={10000000000} suffix="" delay={24} style={{fontSize: 60, fontWeight: 800, color: '#EF4444'}} />
          </div>
        </GlassCard>
      </AnimatedCard>
    </div>
  </SplitLayout>
);

// Scene 5: Edge Computing / Workers - Split layout with CDN screenshot
const Scene5: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <SplitLayout imageUrl={IMG_CF_CDN} imageSide="right" imageWidth={600} overlay={0.5}>
      <div style={{display: 'flex', flexDirection: 'column', gap: 28, maxWidth: 600}}>
        <AnimatedCard delay={0}>
          <h2 style={{fontSize: 54, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT, textAlign: 'left'}}>
            Edge Computing với Workers
          </h2>
        </AnimatedCard>
        <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
          {[
            {icon: '⚡', title: 'Không cần Server', desc: 'Chạy JavaScript/WASM tại biên mạng, không cần quản lý hạ tầng.', color: COLORS.amber, progress: 95},
            {icon: '🌍', title: '200+ Vùng', desc: 'Deploy code đến mọi data center trên thế giới, chỉ vài mili giây.', color: COLORS.blue, progress: 90},
            {icon: '🔗', title: 'Kết nối API', desc: 'Tích hợp với AI, database, và mọi dịch vụ bên ngoài ngay tại edge.', color: COLORS.purple, progress: 88},
          ].map((f, i) => (
            <AnimatedCard key={f.title} delay={6 + i * 5}>
              <GlassCard style={{padding: 24, display: 'flex', flexDirection: 'column'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 14, marginBottom: 10}}>
                  <span style={{fontSize: 36}}>{f.icon}</span>
                  <h3 style={{fontSize: 24, fontWeight: 700, color: COLORS.dark, margin: 0, fontFamily: FONT}}>{f.title}</h3>
                </div>
                <p style={{fontSize: 19, color: COLORS.slate, lineHeight: 1.4, margin: '0 0 10px', fontFamily: FONT}}>{f.desc}</p>
                <FeatureProgress value={f.progress} delay={10 + i * 5} color={f.color} />
              </GlassCard>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </SplitLayout>
  );
};

// Scene 6: 1.1.1.1 DNS - Split layout with DNS screenshot
const Scene6: React.FC = () => (
  <SplitLayout imageUrl={IMG_CF_1111} imageSide="right" imageWidth={580} overlay={0.5}>
    <div style={{display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 580}}>
      <AnimatedCard delay={0}>
        <GlassCard style={{width: '100%', padding: 48, textAlign: 'left'}}>
          <h2 style={{fontSize: 50, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
            1.1.1.1 — DNS Nhanh Nhất
          </h2>
          <p style={{fontSize: 24, color: COLORS.slate, margin: '14px 0 24px', fontFamily: FONT}}>
            DNS resolver miễn phí, mã nguồn mở, bảo vệ quyền riêng tư.
          </p>
          <div style={{display: 'flex', gap: 32, marginBottom: 28}}>
            <div>
              <CountUp value={1.1} decimals={1} suffix="ms" delay={10} style={{fontSize: 58, fontWeight: 800, color: COLORS.orange}} />
              <div style={{fontSize: 19, color: COLORS.slate, marginTop: 4, fontFamily: FONT}}>Độ trễ trung bình</div>
            </div>
            <div>
              <CountUp value={10000000000} suffix="" delay={14} style={{fontSize: 58, fontWeight: 800, color: COLORS.green}} />
              <div style={{fontSize: 19, color: COLORS.slate, marginTop: 4, fontFamily: FONT}}>Lượt truy cập/tháng</div>
            </div>
          </div>
          <Pill delay={20} color="#3B82F6" style={{fontSize: 22}}>
            🔒 Không ghi nhật ký hoạt động
          </Pill>
        </GlassCard>
      </AnimatedCard>
    </div>
  </SplitLayout>
);

// Scene 7: Global Network - Split layout with homepage
const Scene7: React.FC = () => (
  <SplitLayout imageUrl={IMG_CF_HOME} imageSide="right" imageWidth={580} overlay={0.5}>
    <div style={{display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 580}}>
      <AnimatedCard delay={0}>
        <GlassCard style={{width: '100%', padding: 48, textAlign: 'left'}}>
          <h2 style={{fontSize: 50, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
            Mạng Lưới Toàn Cầu
          </h2>
          <p style={{fontSize: 24, color: COLORS.slate, margin: '14px 0 24px', fontFamily: FONT}}>
            Hạ tầng kết nối mọi quốc gia, mọi châu lục.
          </p>
          <div style={{display: 'flex', gap: 24, flexWrap: 'wrap'}}>
            {[
              {v: 300, s: '+', label: 'Data Center', c: COLORS.orange},
              {v: 200, s: '+', label: 'Thành phố', c: COLORS.blue},
              {v: 100, s: 'T+', label: 'Tỷ yêu cầu/ngày', c: COLORS.green},
              {v: 21.3, d: 1, s: '%', label: 'Websites sử dụng', c: COLORS.purple},
            ].map((s, i) => (
              <div key={s.label} style={{textAlign: 'left'}}>
                <CountUp value={s.v} decimals={s.d || 0} suffix={s.s} delay={8 + i * 4} style={{fontSize: 52, fontWeight: 800, color: s.c}} />
                <div style={{fontSize: 19, color: COLORS.slate, marginTop: 4, fontFamily: FONT}}>{s.label}</div>
              </div>
            ))}
          </div>
        </GlassCard>
      </AnimatedCard>
    </div>
  </SplitLayout>
);

// Scene 8: Security Features - Split layout with DDoS screenshot
const Scene8: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <SplitLayout imageUrl={IMG_CF_DDOS} imageSide="right" imageWidth={600} overlay={0.5}>
      <div style={{display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 580}}>
        <AnimatedCard delay={0}>
          <GlassCard style={{width: '100%', padding: 44, textAlign: 'left'}}>
            <h2 style={{fontSize: 50, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
              Bảo Mật Đa Tầng
            </h2>
            <p style={{fontSize: 24, color: COLORS.slate, margin: '12px 0 20px', fontFamily: FONT}}>
              Từ DNS đến ứng dụng — bảo vệ toàn diện.
            </p>
            <div style={{display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20}}>
              {['SSL/TLS', 'WAF', 'Bot Fight', 'Rate Limiting', 'Zero Trust', 'Schema Shield'].map((c, i) => (
                <Pill key={c} delay={8 + i * 4} color="#10B981">{c}</Pill>
              ))}
            </div>
            <div style={{position: 'absolute', top: 60, right: 60}}>
              <AnimatedCard delay={10}>
                <GlassCard style={{width: 240, padding: 24, textAlign: 'center'}}>
                  <div style={{fontSize: 18, color: COLORS.slate, fontWeight: 600, fontFamily: FONT}}>Security Score</div>
                  <div style={{fontSize: 48, fontWeight: 800, color: '#10B981', fontFamily: MONO, transform: `scale(${1 + 0.02 * Math.sin(frame / 6)})`}}>A+</div>
                </GlassCard>
              </AnimatedCard>
            </div>
          </GlassCard>
        </AnimatedCard>
      </div>
    </SplitLayout>
  );
};

// Scene 9: Performance - Cards layout
const Scene9: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <SceneShell seed={9}>
      <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 28}}>
        <AnimatedCard delay={0}>
          <h2 style={{fontSize: 54, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT, textAlign: 'center'}}>
            Hiệu Suất Vượt Trội
          </h2>
        </AnimatedCard>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, width: 1050, padding: '0 40px'}}>
          {[
            {label: 'Giảm độ trễ', value: 50, suffix: '%', color: COLORS.blue},
            {label: 'Tăng tốc tải', value: 3, suffix: 'x', color: COLORS.green},
            {label: 'Uptime', value: 99.99, decimals: 2, suffix: '%', color: COLORS.amber},
            {label: 'Requests/giây', value: 47, suffix: 'T+', color: COLORS.purple},
          ].map((s, i) => (
            <AnimatedCard key={s.label} delay={6 + i * 5}>
              <GlassCard style={{padding: 32, textAlign: 'center', borderTop: `4px solid ${s.color}`}}>
                <CountUp value={s.value} decimals={s.decimals} suffix={s.suffix} delay={10 + i * 5} style={{fontSize: 60, fontWeight: 800, color: COLORS.dark, display: 'block'}} />
                <div style={{fontSize: 20, color: COLORS.slate, fontWeight: 600, marginTop: 6, fontFamily: FONT}}>{s.label}</div>
              </GlassCard>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </SceneShell>
  );
};

// Scene 10: AI Integration - Split layout with homepage
const Scene10: React.FC = () => (
  <SplitLayout imageUrl={IMG_CF_HOME} imageSide="right" imageWidth={600} overlay={0.55}>
    <div style={{display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 580}}>
      <AnimatedCard delay={0}>
        <GlassCard style={{width: '100%', padding: 48, textAlign: 'left'}}>
          <h2 style={{fontSize: 50, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
            AI Tích Hợp Trên Hạ Tầng
          </h2>
          <p style={{fontSize: 24, color: COLORS.slate, margin: '14px 0 24px', fontFamily: FONT}}>
            Cloudflare đang tích hợp AI vào mọi dịch vụ — từ bot management đến predictive scaling.
          </p>
          <div style={{display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 28}}>
            {['AI Bot Detection', 'Predictive Scaling', 'Smart Routing', 'ML WAF Rules'].map((pill, i) => (
              <Pill key={pill} delay={8 + i * 4} color="#8B5CF6">{pill}</Pill>
            ))}
          </div>
          <div style={{borderTop: '1px solid rgba(15,23,42,0.1)', paddingTop: 24}}>
            <div style={{fontSize: 20, color: COLORS.slate, fontWeight: 600, fontFamily: FONT}}>Mua lại Replicate — nền tảng AI inference</div>
            <div style={{fontSize: 40, fontWeight: 800, color: COLORS.purple, fontFamily: MONO, marginTop: 4}}>Replicate ✓</div>
          </div>
        </GlassCard>
      </AnimatedCard>
    </div>
  </SplitLayout>
);

// Scene 11: Use Cases - Cards layout
const useCases = [
  {icon: '🛒', title: 'E-commerce', desc: 'Tăng tốc website bán hàng, bảo vệ thanh toán.', color: COLORS.blue},
  {icon: '📰', title: 'Media & Publishing', desc: 'Phân phối nội dung nhanh chóng đến hàng triệu người.', color: COLORS.green},
  {icon: '🎮', title: 'Gaming', desc: 'Giảm latency cho game online, chống DDoS cho máy chủ.', color: COLORS.amber},
  {icon: '🏦', title: 'Financial', desc: 'Bảo mật giao dịch tài chính, tuân thủ PCI-DSS.', color: COLORS.purple},
];

const Scene11: React.FC = () => (
  <SceneShell seed={11}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 28}}>
      <AnimatedCard delay={0}>
        <h2 style={{fontSize: 54, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT, textAlign: 'center'}}>
          Ứng Dụng Thực Tế
        </h2>
      </AnimatedCard>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, width: 1050, padding: '0 40px'}}>
        {useCases.map((u, i) => (
          <AnimatedCard key={u.title} delay={6 + i * 5}>
            <GlassCard style={{padding: 28, display: 'flex', gap: 16, alignItems: 'flex-start', height: 150}}>
              <div style={{width: 60, height: 60, minWidth: 60, borderRadius: 16, background: `${u.color}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32}}>{u.icon}</div>
              <div>
                <h3 style={{fontSize: 24, fontWeight: 700, color: COLORS.dark, margin: '0 0 6px', fontFamily: FONT}}>{u.title}</h3>
                <p style={{fontSize: 19, color: COLORS.slate, lineHeight: 1.4, margin: 0, fontFamily: FONT}}>{u.desc}</p>
              </div>
            </GlassCard>
          </AnimatedCard>
        ))}
      </div>
    </div>
  </SceneShell>
);

// Scene 12: Trust - Testimonials
const testimonials = [
  {quote: 'Cloudflare giúp website tăng tốc 3x và không lo tấn công DDoS.', name: 'Nguyễn Văn A', role: 'CTO, TechCorp VN', initials: 'NV', color: '#F38020'},
  {quote: '1.1.1.1 là DNS resolver chúng tôi dùng cho toàn bộ hạ tầng.', name: 'Trần Thị B', role: 'Lead Engineer, CloudFirst', initials: 'TT', color: '#3B82F6'},
  {quote: 'Workers cho phép deploy logic tại edge không cần quản lý server.', name: 'Lê Văn C', role: 'Founder, StartupX', initials: 'LV', color: '#8B5CF6'},
];

const Scene12: React.FC = () => (
  <SceneShell seed={12}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32}}>
      <div style={{display: 'flex', gap: 20}}>
        {testimonials.map((t, i) => (
          <AnimatedCard key={t.name} delay={i * 5} style={{width: 340}}>
            <GlassCard style={{padding: 24, height: 220, position: 'relative'}}>
              <span style={{position: 'absolute', top: 2, left: 14, fontSize: 56, color: '#CBD5E1', fontWeight: 900, fontFamily: FONT}}>"</span>
              <p style={{fontSize: 20, lineHeight: 1.4, color: '#334155', margin: '28px 0 12px', fontFamily: FONT}}>{t.quote}</p>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <div style={{width: 44, height: 44, borderRadius: '50%', background: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: 16, fontFamily: FONT}}>{t.initials}</div>
                <div>
                  <div style={{fontWeight: 700, fontSize: 18, color: COLORS.dark, fontFamily: FONT}}>{t.name}</div>
                  <div style={{fontSize: 17, color: COLORS.slate, fontFamily: FONT}}>{t.role}</div>
                </div>
              </div>
            </GlassCard>
          </AnimatedCard>
        ))}
      </div>
      <div style={{display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center'}}>
        {['Shopify', 'Discord', 'Uber', 'Lyft', 'Notion'].map((c, i) => (
          <Pill key={c} delay={20 + i * 3} color="#94A3B8">{c}</Pill>
        ))}
      </div>
    </div>
  </SceneShell>
);

// Scene 13: Pricing - Split layout
const plans = [
  {name: 'Free', price: 0, features: ['Unmetered bandwidth', 'Basic DDoS protection', 'Global CDN', 'SSL'], cta: 'Bắt đầu', color: '#64748B'},
  {name: 'Pro', price: 20, features: ['Everything in Free', 'Advanced DDoS', 'WAF custom rules', 'Image optimization'], cta: 'Dùng thử', color: '#3B82F6'},
  {name: 'Business', price: 200, features: ['Everything in Pro', 'Custom SSL', 'Dedicated support', 'SLA guarantee'], cta: 'Liên hệ', color: '#8B5CF6'},
];

const Scene13: React.FC = () => (
  <SceneShell seed={13}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24}}>
      <AnimatedCard delay={0}>
        <h2 style={{fontSize: 54, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT, textAlign: 'center'}}>
          Gói Dịch Vụ
        </h2>
      </AnimatedCard>
      <div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: 24}}>
        {plans.map((plan, i) => {
          const isPro = i === 1;
          return (
            <div key={plan.name} style={{width: 310, marginTop: isPro ? -14 : 0, position: 'relative'}}>
              <AnimatedCard delay={6 + i * 5}>
                {isPro && (
                  <div style={{position: 'absolute', top: -16, right: 14, background: '#F38020', color: 'white', fontSize: 14, fontWeight: 700, padding: '5px 10px', borderRadius: 999, fontFamily: FONT, transform: 'rotate(4deg)', zIndex: 2}}>
                    Phổ biến nhất
                  </div>
                )}
                <GlassCard style={{height: isPro ? 420 : 370, padding: 28, display: 'flex', flexDirection: 'column', border: isPro ? `2px solid ${COLORS.blue}` : undefined, boxShadow: isPro ? '0 0 32px rgba(59,130,246,0.28)' : undefined}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6}}>
                    <span style={{fontSize: 24, fontWeight: 700, color: COLORS.dark, fontFamily: FONT}}>{plan.name}</span>
                    {isPro && (
                      <div style={{background: '#FFF7ED', color: '#9A3412', fontSize: 13, fontWeight: 700, padding: '3px 8px', borderRadius: 999, fontFamily: FONT}}>HOT</div>
                    )}
                  </div>
                  <div style={{fontSize: 18, color: COLORS.slate, fontWeight: 600, fontFamily: FONT}}>Từ</div>
                  <CountUp value={plan.price} prefix="$" delay={10 + i * 5} style={{fontSize: 52, fontWeight: 800, color: COLORS.dark, marginBottom: 14, display: 'block'}} />
                  <div style={{display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16}}>
                    {plan.features.map((f) => (
                      <div key={f} style={{display: 'flex', gap: 8, alignItems: 'center'}}>
                        <span style={{color: plan.color, fontWeight: 900, fontSize: 18}}>✓</span>
                        <span style={{color: '#475569', fontSize: 18, fontFamily: FONT}}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <button style={{marginTop: 'auto', background: plan.color, border: 'none', borderRadius: 999, padding: '14px 20px', fontSize: 20, fontWeight: 700, color: 'white', cursor: 'pointer', fontFamily: FONT}}>
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

// Scene 14: Compliance
const compliance = ['SOC 2', 'ISO 27001', 'HIPAA', 'GDPR', 'PCI-DSS', 'CCPA'];

const Scene14: React.FC = () => (
  <SceneShell seed={14}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 28}}>
      <AnimatedCard delay={0}>
        <h2 style={{fontSize: 54, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT, textAlign: 'center'}}>
          Tuân Thủ & Chứng Nhận
        </h2>
      </AnimatedCard>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, width: 1050, padding: '0 40px'}}>
        {compliance.map((c, i) => (
          <AnimatedCard key={c} delay={6 + i * 4}>
            <GlassCard style={{padding: 24, display: 'flex', alignItems: 'center', gap: 14, height: 110}}>
              <div style={{width: 44, height: 44, minWidth: 44, borderRadius: '50%', background: 'rgba(243,128,32,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F38020', fontSize: 22, fontWeight: 900}}>✓</div>
              <div>
                <div style={{fontSize: 24, fontWeight: 700, color: COLORS.dark, fontFamily: FONT}}>{c}</div>
                <div style={{fontSize: 18, color: COLORS.slate, fontFamily: FONT}}>Đã chứng nhận</div>
              </div>
            </GlassCard>
          </AnimatedCard>
        ))}
      </div>
    </div>
  </SceneShell>
);

// Scene 15: Next-gen - Split layout with CDN screenshot
const Scene15: React.FC = () => (
  <SplitLayout imageUrl={IMG_CF_CDN} imageSide="right" imageWidth={600} overlay={0.55}>
    <div style={{display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 580}}>
      <AnimatedCard delay={2}>
        <GlassCard style={{width: '100%', padding: 48, textAlign: 'left', background: 'rgba(255,255,255,0.85)'}}>
          <h2 style={{fontSize: 50, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
            Tương Lai Của Internet
          </h2>
          <p style={{fontSize: 24, color: COLORS.slate, margin: '14px 0 24px', fontFamily: FONT}}>
            AI + Edge + Security — tất cả trên một nền tảng.
          </p>
          <Pill delay={12} color="#F38020" style={{fontSize: 24}}>
            AI · Edge · Security · Speed
          </Pill>
        </GlassCard>
      </AnimatedCard>
    </div>
  </SplitLayout>
);

// Scene 16: CTA
const Scene16: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = 1 + 0.02 * Math.sin(frame / 5);
  return (
    <SceneShell seed={16}>
      <div style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <AnimatedCard delay={0}>
          <GlassCard style={{width: 850, padding: 52, textAlign: 'center'}}>
            <h2 style={{fontSize: 62, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
              Bắt Đầu Ngay Hôm Nay
            </h2>
            <p style={{fontSize: 26, color: COLORS.slate, margin: '14px 0 30px', fontFamily: FONT}}>
              Tăng tốc và bảo vệ website với Cloudflare — miễn phí từ ngày đầu.
            </p>
            <button style={{
              background: 'linear-gradient(90deg,#F38020,#FB923C,#FCD34D)',
              border: 'none',
              borderRadius: 999,
              padding: '20px 48px',
              fontSize: 28,
              fontWeight: 700,
              color: 'white',
              cursor: 'pointer',
              fontFamily: FONT,
              transform: `scale(${pulse})`,
              boxShadow: '0 0 0 6px rgba(243,128,32,0.15), 0 12px 24px rgba(0,0,0,0.15)',
            }}>
              Đăng Ký Miễn Phí
            </button>
            <div style={{display: 'flex', gap: 10, justifyContent: 'center', marginTop: 28, flexWrap: 'wrap'}}>
              {['200+ Data Center', 'Không cần thẻ', 'Setup 5 phút'].map((pill, i) => (
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

const CloudflareShowcase: React.FC = () => (
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

export { CloudflareShowcase };