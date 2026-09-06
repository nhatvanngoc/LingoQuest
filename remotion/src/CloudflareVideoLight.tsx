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
  orange: '#E8751A',
  blue: '#2563EB',
  green: '#059669',
  amber: '#D97706',
  purple: '#7C3AED',
  slate: '#475569',
  dark: '#1E293B',
  white: '#FFFFFF',
  lightBg: '#FAFAFA',
  cardBg: '#FFFFFF',
  border: '#E2E8F0',
};

const IMG_CF_HOME = staticFile('images/ai-tech/cloudflare-homepage.png');
const IMG_CF_CDN = staticFile('images/ai-tech/cloudflare-cdn.png');
const IMG_CF_DDOS = staticFile('images/ai-tech/cloudflare-ddos.png');
const IMG_CF_1111 = staticFile('images/ai-tech/cloudflare-1-1-1-1.png');

const glassCardStyle = (style: React.CSSProperties = {}): React.CSSProperties =>
  ({
    background: 'rgba(255,255,255,0.95)',
    borderRadius: 20,
    border: `1px solid ${COLORS.border}`,
    boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
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
}> = ({children, delay = 0, distance = 15, style}) => {
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
        transform: `translateY(${(1 - progress) * distance}px)`,
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
        transform: `scale(${0.9 + 0.1 * p})`,
        background: `${color}10`,
        border: `1px solid ${color}30`,
        borderRadius: 999,
        padding: '8px 18px',
        fontSize: 18,
        fontWeight: 600,
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
    <div style={{height: 4, background: '#F1F5F9', borderRadius: 2, overflow: 'hidden', width: '100%'}}>
      <div
        style={{
          height: '100%',
          width: `${value * p}%`,
          background: color,
          borderRadius: 2,
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
        gap: 6,
        background: '#F0F9FF',
        border: '1px solid #BAE6FD',
        borderRadius: 999,
        padding: '6px 14px',
        color: '#0369A1',
        fontSize: 16,
        fontWeight: 600,
        fontFamily: FONT,
      }}
    >
      <span
        style={{
          width: 7,
          height: 7,
          borderRadius: '50%',
          background: '#0EA5E9',
          boxShadow: '0 0 6px #0EA5E9',
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
  seed?: number;
}> = ({children, bg, overlay = 0.3, seed = 0}) => (
  <AbsoluteFill style={{backgroundColor: COLORS.lightBg}}>
    {bg && <KenBurns imageUrl={bg} scale={1.05} tx={-5} ty={-3} />}
    {bg && overlay > 0 && (
      <div style={{position: 'absolute', inset: 0, backgroundColor: `rgba(255,255,255,${overlay})`}} />
    )}
    {children}
  </AbsoluteFill>
);

const KenBurns: React.FC<{imageUrl: string; scale?: number; tx?: number; ty?: number}> = ({
  imageUrl,
  scale = 1.1,
  tx = -15,
  ty = -8,
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

const SplitLayout: React.FC<{
  children?: React.ReactNode;
  imageUrl?: string;
  imageSide?: 'left' | 'right';
  imageWidth?: number;
  overlay?: number;
}> = ({children, imageUrl, imageSide = 'right', imageWidth = 580, overlay = 0.4}) => (
  <AbsoluteFill style={{backgroundColor: COLORS.lightBg}}>
    {imageUrl && (
      <>
        <div style={{
          position: 'absolute',
          [imageSide]: 0,
          width: imageWidth,
          height: '100%',
          overflow: 'hidden',
        }}>
          <KenBurns imageUrl={imageUrl} scale={1.08} tx={imageSide === 'left' ? -8 : 8} ty={-4} />
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
      [imageSide === 'left' ? 'right' : 'left']: imageWidth + 30,
      [imageSide === 'left' ? 'left' : 'right']: 30,
      top: 0,
      bottom: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: imageSide === 'left' ? 'flex-start' : 'flex-end',
      justifyContent: 'center',
      padding: '0 50px',
    }}>
      {children}
    </div>
  </AbsoluteFill>
);

// Scene 1: Hero
const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <SplitLayout imageUrl={IMG_CF_HOME} imageSide="right" imageWidth={620} overlay={0.45}>
      <div style={{maxWidth: 560}}>
        <AnimatedCard delay={0}>
          <div style={{display: 'inline-flex', alignItems: 'center', gap: 6, background: '#FFF7ED', border: '1px solid #FED7AA', borderRadius: 999, padding: '6px 16px', fontSize: 22, fontWeight: 700, color: '#9A3412', letterSpacing: '0.05em', maxWidth: 'fit-content'}}>
            <span style={{width: 8, height: 8, borderRadius: '50%', background: '#F38020'}} />
            CLOUDFLARE
          </div>
        </AnimatedCard>
        <AnimatedCard delay={3}>
          <h1 style={{fontSize: 64, fontWeight: 800, lineHeight: 1.1, color: COLORS.dark, margin: '20px 0 14px', fontFamily: FONT, maxWidth: '100%'}}>
            Internet<br />
            <span style={{color: COLORS.orange}}>Nhanh Hơn</span><br />
            An Toàn Hơn
          </h1>
        </AnimatedCard>
        <AnimatedCard delay={6}>
          <p style={{fontSize: 24, lineHeight: 1.5, color: COLORS.slate, marginBottom: 28, maxWidth: 480, fontFamily: FONT}}>
            CDN, bảo mật DDoS, điện toán biên — tất cả trong một nền tảng.
          </p>
        </AnimatedCard>
        <AnimatedCard delay={9} style={{display: 'flex', flexDirection: 'column', gap: 10}}>
          <button style={{backgroundColor: '#F38020', border: 'none', borderRadius: 999, padding: '18px 40px', fontSize: 24, fontWeight: 700, color: 'white', cursor: 'pointer', fontFamily: FONT, width: 'fit-content', transform: `scale(${1 + 0.02 * Math.sin(frame / 5)})`, boxShadow: `0 0 0 5px rgba(243,128,32,0.12), 0 10px 20px rgba(243,128,32,0.2)`}}>
            Bắt đầu miễn phí
          </button>
          <span style={{fontSize: 18, color: COLORS.slate, fontFamily: FONT}}>Không cần thẻ tín dụng · Thiết lập trong 5 phút</span>
        </AnimatedCard>
      </div>
    </SplitLayout>
  );
};

// Scene 2: What is Cloudflare
const Scene2: React.FC = () => (
  <SceneShell seed={2}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 28}}>
      <AnimatedCard delay={0}>
        <h2 style={{fontSize: 52, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT, textAlign: 'center'}}>
          Cloudflare Là Gì?
        </h2>
      </AnimatedCard>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, width: 1100, padding: '0 40px'}}>
        {[
          {icon: '🌐', title: 'Mạng CDN Toàn Cầu', desc: '200+ data center trên khắp thế giới.', color: COLORS.orange},
          {icon: '🛡️', title: 'Bảo Mật DDoS', desc: 'Chống lại các cuộc tấn công DDoS lớn nhất.', color: COLORS.blue},
          {icon: '⚡', title: 'Edge Computing', desc: 'Chạy JavaScript/WASM tại biên mạng.', color: COLORS.green},
          {icon: '🔍', title: 'DNS Thông Minh', desc: '1.1.1.1 — DNS resolver nhanh nhất.', color: COLORS.purple},
        ].map((f, i) => (
          <AnimatedCard key={f.title} delay={6 + i * 4}>
            <GlassCard style={{height: 180, padding: 24, borderTop: `3px solid ${f.color}`, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <div style={{fontSize: 32, marginBottom: 6}}>{f.icon}</div>
              <div style={{fontSize: 22, fontWeight: 700, color: COLORS.dark, marginBottom: 6, fontFamily: FONT}}>{f.title}</div>
              <div style={{fontSize: 18, color: COLORS.slate, lineHeight: 1.4, fontFamily: FONT}}>{f.desc}</div>
            </GlassCard>
          </AnimatedCard>
        ))}
      </div>
    </div>
  </SceneShell>
);

// Scene 3: How it works
const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <SplitLayout imageUrl={IMG_CF_CDN} imageSide="right" imageWidth={550} overlay={0.4}>
      <div style={{display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 560}}>
        <AnimatedCard delay={0}>
          <GlassCard style={{width: '100%', padding: 32}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
              <span style={{fontSize: 36, fontWeight: 800, color: COLORS.dark, fontFamily: FONT}}>Cách Hoạt Động</span>
              <LiveBadge />
            </div>
            <div style={{display: 'flex', gap: 12, alignItems: 'center', justifyContent: 'center'}}>
              <div style={{textAlign: 'center'}}>
                <div style={{width: 70, height: 70, borderRadius: '50%', background: '#EFF6FF', border: '3px solid #3B82F6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, margin: '0 auto'}}>🌐</div>
                <div style={{fontSize: 16, fontWeight: 700, color: COLORS.dark, marginTop: 4, fontFamily: FONT}}>Người Dùng</div>
              </div>
              <div style={{fontSize: 24, color: COLORS.orange, fontWeight: 800}}>→</div>
              <div style={{textAlign: 'center'}}>
                <div style={{width: 100, height: 100, borderRadius: 20, background: '#FFF7ED', border: '3px solid #F38020', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 40, margin: '0 auto', boxShadow: '0 6px 24px rgba(243,128,32,0.25)'}}>☁️</div>
                <div style={{fontSize: 16, fontWeight: 700, color: COLORS.dark, marginTop: 4, fontFamily: FONT}}>Cloudflare</div>
                <div style={{fontSize: 12, color: COLORS.slate, fontFamily: FONT}}>Reverse Proxy + CDN</div>
              </div>
              <div style={{fontSize: 24, color: COLORS.green, fontWeight: 800}}>→</div>
              <div style={{textAlign: 'center'}}>
                <div style={{width: 70, height: 70, borderRadius: '50%', background: '#F0FDF4', border: '3px solid #10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, margin: '0 auto'}}>🖥️</div>
                <div style={{fontSize: 16, fontWeight: 700, color: COLORS.dark, marginTop: 4, fontFamily: FONT}}>Máy Chủ</div>
              </div>
            </div>
            <div style={{display: 'flex', gap: 8, marginTop: 16, justifyContent: 'center', flexWrap: 'wrap'}}>
              {['Yêu cầu HTTP', 'Phân tích & lọc', 'Phục vụ cache', 'Chống DDoS'].map((s, i) => (
                <Pill key={s} delay={10 + i * 3} color={[COLORS.blue, COLORS.orange, COLORS.green, COLORS.purple][i]}>{s}</Pill>
              ))}
            </div>
          </GlassCard>
        </AnimatedCard>
      </div>
    </SplitLayout>
  );
};

// Scene 4: DDoS
const Scene4: React.FC = () => (
  <SplitLayout imageUrl={IMG_CF_DDOS} imageSide="right" imageWidth={580} overlay={0.45}>
    <div style={{display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 540}}>
      <AnimatedCard delay={0}>
        <GlassCard style={{width: '100%', padding: 40, textAlign: 'left'}}>
          <h2 style={{fontSize: 48, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
            Chống Tấn Công DDoS
          </h2>
          <p style={{fontSize: 22, color: COLORS.slate, margin: '12px 0 20px', fontFamily: FONT}}>
            Hàng terabit bảo mật mỗi ngày, tự động phát hiện và vô hiệu hóa tấn công.
          </p>
          <div style={{display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24}}>
            {['L7 Application', 'L3/L4 Network', 'Bot Management', 'WAF Firewall'].map((pill, i) => (
              <Pill key={pill} delay={8 + i * 4} color="#F38020">{pill}</Pill>
            ))}
          </div>
          <div style={{borderTop: '1px solid rgba(15,23,42,0.08)', paddingTop: 20}}>
            <div style={{fontSize: 18, color: COLORS.slate, fontWeight: 600, fontFamily: FONT}}>Tấn công bị chặn mỗi ngày</div>
            <CountUp value={10000000000} suffix="" delay={24} style={{fontSize: 56, fontWeight: 800, color: '#EF4444'}} />
          </div>
        </GlassCard>
      </AnimatedCard>
    </div>
  </SplitLayout>
);

// Scene 5: Edge Computing
const Scene5: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <SplitLayout imageUrl={IMG_CF_CDN} imageSide="right" imageWidth={560} overlay={0.45}>
      <div style={{display: 'flex', flexDirection: 'column', gap: 22, maxWidth: 560}}>
        <AnimatedCard delay={0}>
          <h2 style={{fontSize: 50, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT, textAlign: 'left'}}>
            Edge Computing với Workers
          </h2>
        </AnimatedCard>
        <div style={{display: 'flex', flexDirection: 'column', gap: 14}}>
          {[
            {icon: '⚡', title: 'Không cần Server', desc: 'Chạy JavaScript/WASM tại biên mạng.', color: COLORS.amber, progress: 95},
            {icon: '🌍', title: '200+ Vùng', desc: 'Deploy code đến mọi data center.', color: COLORS.blue, progress: 90},
            {icon: '🔗', title: 'Kết nối API', desc: 'Tích hợp AI, database tại edge.', color: COLORS.purple, progress: 88},
          ].map((f, i) => (
            <AnimatedCard key={f.title} delay={6 + i * 5}>
              <GlassCard style={{padding: 20, display: 'flex', flexDirection: 'column'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8}}>
                  <span style={{fontSize: 32}}>{f.icon}</span>
                  <h3 style={{fontSize: 22, fontWeight: 700, color: COLORS.dark, margin: 0, fontFamily: FONT}}>{f.title}</h3>
                </div>
                <p style={{fontSize: 17, color: COLORS.slate, lineHeight: 1.4, margin: '0 0 8px', fontFamily: FONT}}>{f.desc}</p>
                <FeatureProgress value={f.progress} delay={10 + i * 5} color={f.color} />
              </GlassCard>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </SplitLayout>
  );
};

// Scene 6: 1.1.1.1 DNS
const Scene6: React.FC = () => (
  <SplitLayout imageUrl={IMG_CF_1111} imageSide="right" imageWidth={550} overlay={0.45}>
    <div style={{display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 540}}>
      <AnimatedCard delay={0}>
        <GlassCard style={{width: '100%', padding: 40, textAlign: 'left'}}>
          <h2 style={{fontSize: 48, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
            1.1.1.1 — DNS Nhanh Nhất
          </h2>
          <p style={{fontSize: 22, color: COLORS.slate, margin: '12px 0 20px', fontFamily: FONT}}>
            DNS resolver miễn phí, mã nguồn mở, bảo vệ quyền riêng tư.
          </p>
          <div style={{display: 'flex', gap: 28, marginBottom: 24}}>
            <div>
              <CountUp value={1.1} decimals={1} suffix="ms" delay={10} style={{fontSize: 54, fontWeight: 800, color: COLORS.orange}} />
              <div style={{fontSize: 17, color: COLORS.slate, marginTop: 4, fontFamily: FONT}}>Độ trễ trung bình</div>
            </div>
            <div>
              <CountUp value={10000000000} suffix="" delay={14} style={{fontSize: 54, fontWeight: 800, color: COLORS.green}} />
              <div style={{fontSize: 17, color: COLORS.slate, marginTop: 4, fontFamily: FONT}}>Lượt truy cập/tháng</div>
            </div>
          </div>
          <Pill delay={20} color="#3B82F6" style={{fontSize: 20}}>
            🔒 Không ghi nhật ký hoạt động
          </Pill>
        </GlassCard>
      </AnimatedCard>
    </div>
  </SplitLayout>
);

// Scene 7: Global Network
const Scene7: React.FC = () => (
  <SplitLayout imageUrl={IMG_CF_HOME} imageSide="right" imageWidth={550} overlay={0.45}>
    <div style={{display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 540}}>
      <AnimatedCard delay={0}>
        <GlassCard style={{width: '100%', padding: 40, textAlign: 'left'}}>
          <h2 style={{fontSize: 48, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
            Mạng Lưới Toàn Cầu
          </h2>
          <p style={{fontSize: 22, color: COLORS.slate, margin: '12px 0 20px', fontFamily: FONT}}>
            Hạ tầng kết nối mọi quốc gia, mọi châu lục.
          </p>
          <div style={{display: 'flex', gap: 20, flexWrap: 'wrap'}}>
            {[
              {v: 300, s: '+', label: 'Data Center', c: COLORS.orange},
              {v: 200, s: '+', label: 'Thành phố', c: COLORS.blue},
              {v: 100, s: 'T+', label: 'Tỷ yêu cầu/ngày', c: COLORS.green},
              {v: 21.3, d: 1, s: '%', label: 'Websites sử dụng', c: COLORS.purple},
            ].map((s, i) => (
              <div key={s.label} style={{textAlign: 'left'}}>
                <CountUp value={s.v} decimals={s.d || 0} suffix={s.s} delay={8 + i * 4} style={{fontSize: 50, fontWeight: 800, color: s.c}} />
                <div style={{fontSize: 17, color: COLORS.slate, marginTop: 4, fontFamily: FONT}}>{s.label}</div>
              </div>
            ))}
          </div>
        </GlassCard>
      </AnimatedCard>
    </div>
  </SplitLayout>
);

// Scene 8: Security
const Scene8: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <SplitLayout imageUrl={IMG_CF_DDOS} imageSide="right" imageWidth={560} overlay={0.45}>
      <div style={{display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 540}}>
        <AnimatedCard delay={0}>
          <GlassCard style={{width: '100%', padding: 36, textAlign: 'left'}}>
            <h2 style={{fontSize: 48, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
              Bảo Mật Đa Tầng
            </h2>
            <p style={{fontSize: 22, color: COLORS.slate, margin: '10px 0 18px', fontFamily: FONT}}>
              Từ DNS đến ứng dụng — bảo vệ toàn diện.
            </p>
            <div style={{display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16}}>
              {['SSL/TLS', 'WAF', 'Bot Fight', 'Rate Limiting', 'Zero Trust', 'Schema Shield'].map((c, i) => (
                <Pill key={c} delay={8 + i * 4} color="#10B981">{c}</Pill>
              ))}
            </div>
            <div style={{position: 'absolute', top: 50, right: 50}}>
              <AnimatedCard delay={10}>
                <GlassCard style={{width: 220, padding: 20, textAlign: 'center'}}>
                  <div style={{fontSize: 16, color: COLORS.slate, fontWeight: 600, fontFamily: FONT}}>Security Score</div>
                  <div style={{fontSize: 44, fontWeight: 800, color: '#10B981', fontFamily: MONO, transform: `scale(${1 + 0.02 * Math.sin(frame / 6)})`}}>A+</div>
                </GlassCard>
              </AnimatedCard>
            </div>
          </GlassCard>
        </AnimatedCard>
      </div>
    </SplitLayout>
  );
};

// Scene 9: Performance
const Scene9: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <SceneShell seed={9}>
      <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24}}>
        <AnimatedCard delay={0}>
          <h2 style={{fontSize: 52, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT, textAlign: 'center'}}>
            Hiệu Suất Vượt Trội
          </h2>
        </AnimatedCard>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, width: 1000, padding: '0 40px'}}>
          {[
            {label: 'Giảm độ trễ', value: 50, suffix: '%', color: COLORS.blue},
            {label: 'Tăng tốc tải', value: 3, suffix: 'x', color: COLORS.green},
            {label: 'Uptime', value: 99.99, decimals: 2, suffix: '%', color: COLORS.amber},
            {label: 'Requests/giây', value: 47, suffix: 'T+', color: COLORS.purple},
          ].map((s, i) => (
            <AnimatedCard key={s.label} delay={6 + i * 5}>
              <GlassCard style={{padding: 28, textAlign: 'center', borderTop: `3px solid ${s.color}`}}>
                <CountUp value={s.value} decimals={s.decimals} suffix={s.suffix} delay={10 + i * 5} style={{fontSize: 56, fontWeight: 800, color: COLORS.dark, display: 'block'}} />
                <div style={{fontSize: 18, color: COLORS.slate, fontWeight: 600, marginTop: 6, fontFamily: FONT}}>{s.label}</div>
              </GlassCard>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </SceneShell>
  );
};

// Scene 10: AI Integration
const Scene10: React.FC = () => (
  <SplitLayout imageUrl={IMG_CF_HOME} imageSide="right" imageWidth={560} overlay={0.5}>
    <div style={{display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 540}}>
      <AnimatedCard delay={0}>
        <GlassCard style={{width: '100%', padding: 40, textAlign: 'left'}}>
          <h2 style={{fontSize: 48, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
            AI Tích Hợp Trên Hạ Tầng
          </h2>
          <p style={{fontSize: 22, color: COLORS.slate, margin: '12px 0 20px', fontFamily: FONT}}>
            Cloudflare đang tích hợp AI vào mọi dịch vụ.
          </p>
          <div style={{display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24}}>
            {['AI Bot Detection', 'Predictive Scaling', 'Smart Routing', 'ML WAF Rules'].map((pill, i) => (
              <Pill key={pill} delay={8 + i * 4} color="#8B5CF6">{pill}</Pill>
            ))}
          </div>
          <div style={{borderTop: '1px solid rgba(15,23,42,0.08)', paddingTop: 20}}>
            <div style={{fontSize: 18, color: COLORS.slate, fontWeight: 600, fontFamily: FONT}}>Mua lại Replicate — AI inference</div>
            <div style={{fontSize: 38, fontWeight: 800, color: COLORS.purple, fontFamily: MONO, marginTop: 4}}>Replicate ✓</div>
          </div>
        </GlassCard>
      </AnimatedCard>
    </div>
  </SplitLayout>
);

// Scene 11: Use Cases
const useCases = [
  {icon: '🛒', title: 'E-commerce', desc: 'Tăng tốc website bán hàng.', color: COLORS.blue},
  {icon: '📰', title: 'Media', desc: 'Phân phối nội dung nhanh chóng.', color: COLORS.green},
  {icon: '🎮', title: 'Gaming', desc: 'Giảm latency cho game online.', color: COLORS.amber},
  {icon: '🏦', title: 'Financial', desc: 'Bảo mật giao dịch tài chính.', color: COLORS.purple},
];

const Scene11: React.FC = () => (
  <SceneShell seed={11}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24}}>
      <AnimatedCard delay={0}>
        <h2 style={{fontSize: 52, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT, textAlign: 'center'}}>
          Ứng Dụng Thực Tế
        </h2>
      </AnimatedCard>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18, width: 1000, padding: '0 40px'}}>
        {useCases.map((u, i) => (
          <AnimatedCard key={u.title} delay={6 + i * 5}>
            <GlassCard style={{padding: 24, display: 'flex', gap: 14, alignItems: 'flex-start', height: 140}}>
              <div style={{width: 56, height: 56, minWidth: 56, borderRadius: 14, background: `${u.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28}}>{u.icon}</div>
              <div>
                <h3 style={{fontSize: 22, fontWeight: 700, color: COLORS.dark, margin: '0 0 4px', fontFamily: FONT}}>{u.title}</h3>
                <p style={{fontSize: 17, color: COLORS.slate, lineHeight: 1.4, margin: 0, fontFamily: FONT}}>{u.desc}</p>
              </div>
            </GlassCard>
          </AnimatedCard>
        ))}
      </div>
    </div>
  </SceneShell>
);

// Scene 12: Trust
const testimonials = [
  {quote: 'Cloudflare giúp website tăng tốc 3x.', name: 'Nguyễn Văn A', role: 'CTO, TechCorp VN', initials: 'NV', color: '#F38020'},
  {quote: '1.1.1.1 là DNS resolver chúng tôi dùng.', name: 'Trần Thị B', role: 'Lead Engineer', initials: 'TT', color: '#3B82F6'},
  {quote: 'Workers cho phép deploy tại edge.', name: 'Lê Văn C', role: 'Founder, StartupX', initials: 'LV', color: '#8B5CF6'},
];

const Scene12: React.FC = () => (
  <SceneShell seed={12}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 30}}>
      <div style={{display: 'flex', gap: 18}}>
        {testimonials.map((t, i) => (
          <AnimatedCard key={t.name} delay={i * 5} style={{width: 320}}>
            <GlassCard style={{padding: 22, height: 200, position: 'relative'}}>
              <span style={{position: 'absolute', top: 2, left: 12, fontSize: 50, color: '#CBD5E1', fontWeight: 900, fontFamily: FONT}}>"</span>
              <p style={{fontSize: 18, lineHeight: 1.4, color: '#334155', margin: '26px 0 10px', fontFamily: FONT}}>{t.quote}</p>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <div style={{width: 40, height: 40, borderRadius: '50%', background: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: 15, fontFamily: FONT}}>{t.initials}</div>
                <div>
                  <div style={{fontWeight: 700, fontSize: 17, color: COLORS.dark, fontFamily: FONT}}>{t.name}</div>
                  <div style={{fontSize: 16, color: COLORS.slate, fontFamily: FONT}}>{t.role}</div>
                </div>
              </div>
            </GlassCard>
          </AnimatedCard>
        ))}
      </div>
      <div style={{display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center'}}>
        {['Shopify', 'Discord', 'Uber', 'Lyft', 'Notion'].map((c, i) => (
          <Pill key={c} delay={20 + i * 3} color="#94A3B8">{c}</Pill>
        ))}
      </div>
    </div>
  </SceneShell>
);

// Scene 13: Pricing
const plans = [
  {name: 'Free', price: 0, features: ['Unmetered bandwidth', 'Basic DDoS', 'Global CDN', 'SSL'], cta: 'Bắt đầu', color: '#64748B'},
  {name: 'Pro', price: 20, features: ['Advanced DDoS', 'WAF rules', 'Image optimization'], cta: 'Dùng thử', color: '#3B82F6'},
  {name: 'Business', price: 200, features: ['Custom SSL', 'Dedicated support', 'SLA guarantee'], cta: 'Liên hệ', color: '#8B5CF6'},
];

const Scene13: React.FC = () => (
  <SceneShell seed={13}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 22}}>
      <AnimatedCard delay={0}>
        <h2 style={{fontSize: 52, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT, textAlign: 'center'}}>
          Gói Dịch Vụ
        </h2>
      </AnimatedCard>
      <div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: 20}}>
        {plans.map((plan, i) => {
          const isPro = i === 1;
          return (
            <div key={plan.name} style={{width: 290, marginTop: isPro ? -12 : 0, position: 'relative'}}>
              <AnimatedCard delay={6 + i * 5}>
                {isPro && (
                  <div style={{position: 'absolute', top: -14, right: 12, background: '#F38020', color: 'white', fontSize: 13, fontWeight: 700, padding: '4px 10px', borderRadius: 999, fontFamily: FONT, transform: 'rotate(4deg)', zIndex: 2}}>
                    Phổ biến nhất
                  </div>
                )}
                <GlassCard style={{height: isPro ? 400 : 350, padding: 26, display: 'flex', flexDirection: 'column', border: isPro ? `2px solid ${COLORS.blue}` : undefined, boxShadow: isPro ? '0 0 28px rgba(59,130,246,0.22)' : undefined}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6}}>
                    <span style={{fontSize: 22, fontWeight: 700, color: COLORS.dark, fontFamily: FONT}}>{plan.name}</span>
                    {isPro && (
                      <div style={{background: '#FFF7ED', color: '#9A3412', fontSize: 12, fontWeight: 700, padding: '3px 8px', borderRadius: 999, fontFamily: FONT}}>HOT</div>
                    )}
                  </div>
                  <div style={{fontSize: 17, color: COLORS.slate, fontWeight: 600, fontFamily: FONT}}>Từ</div>
                  <CountUp value={plan.price} prefix="$" delay={10 + i * 5} style={{fontSize: 48, fontWeight: 800, color: COLORS.dark, marginBottom: 12, display: 'block'}} />
                  <div style={{display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 14}}>
                    {plan.features.map((f) => (
                      <div key={f} style={{display: 'flex', gap: 6, alignItems: 'center'}}>
                        <span style={{color: plan.color, fontWeight: 900, fontSize: 17}}>✓</span>
                        <span style={{color: '#475569', fontSize: 17, fontFamily: FONT}}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <button style={{marginTop: 'auto', background: plan.color, border: 'none', borderRadius: 999, padding: '12px 18px', fontSize: 19, fontWeight: 700, color: 'white', cursor: 'pointer', fontFamily: FONT}}>
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
    <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 26}}>
      <AnimatedCard delay={0}>
        <h2 style={{fontSize: 52, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT, textAlign: 'center'}}>
          Tuân Thủ & Chứng Nhận
        </h2>
      </AnimatedCard>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, width: 1000, padding: '0 40px'}}>
        {compliance.map((c, i) => (
          <AnimatedCard key={c} delay={6 + i * 4}>
            <GlassCard style={{padding: 22, display: 'flex', alignItems: 'center', gap: 12, height: 105}}>
              <div style={{width: 42, height: 42, minWidth: 42, borderRadius: '50%', background: 'rgba(243,128,32,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F38020', fontSize: 20, fontWeight: 900}}>✓</div>
              <div>
                <div style={{fontSize: 22, fontWeight: 700, color: COLORS.dark, fontFamily: FONT}}>{c}</div>
                <div style={{fontSize: 17, color: COLORS.slate, fontFamily: FONT}}>Đã chứng nhận</div>
              </div>
            </GlassCard>
          </AnimatedCard>
        ))}
      </div>
    </div>
  </SceneShell>
);

// Scene 15: Next-gen
const Scene15: React.FC = () => (
  <SplitLayout imageUrl={IMG_CF_CDN} imageSide="right" imageWidth={560} overlay={0.5}>
    <div style={{display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 540}}>
      <AnimatedCard delay={2}>
        <GlassCard style={{width: '100%', padding: 40, textAlign: 'left', background: 'rgba(255,255,255,0.9)'}}>
          <h2 style={{fontSize: 48, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
            Tương Lai Của Internet
          </h2>
          <p style={{fontSize: 22, color: COLORS.slate, margin: '12px 0 20px', fontFamily: FONT}}>
            AI + Edge + Security — tất cả trên một nền tảng.
          </p>
          <Pill delay={12} color="#F38020" style={{fontSize: 22}}>
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
          <GlassCard style={{width: 800, padding: 48, textAlign: 'center'}}>
            <h2 style={{fontSize: 60, fontWeight: 800, color: COLORS.dark, margin: 0, fontFamily: FONT}}>
              Bắt Đầu Ngay Hôm Nay
            </h2>
            <p style={{fontSize: 24, color: COLORS.slate, margin: '12px 0 28px', fontFamily: FONT}}>
              Tăng tốc và bảo vệ website với Cloudflare — miễn phí từ ngày đầu.
            </p>
            <button style={{
              background: 'linear-gradient(90deg,#F38020,#FB923C,#FCD34D)',
              border: 'none',
              borderRadius: 999,
              padding: '18px 44px',
              fontSize: 26,
              fontWeight: 700,
              color: 'white',
              cursor: 'pointer',
              fontFamily: FONT,
              transform: `scale(${pulse})`,
              boxShadow: '0 0 0 5px rgba(243,128,32,0.12), 0 10px 20px rgba(0,0,0,0.12)',
            }}>
              Đăng Ký Miễn Phí
            </button>
            <div style={{display: 'flex', gap: 8, justifyContent: 'center', marginTop: 24, flexWrap: 'wrap'}}>
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

const CloudflareLight: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: COLORS.lightBg}}>
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

export { CloudflareLight };