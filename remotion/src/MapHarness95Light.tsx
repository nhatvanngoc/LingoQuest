import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
} from 'remotion';
import { loadFont as loadOutfit } from '@remotion/google-fonts/Outfit';
import { loadFont as loadInter } from '@remotion/google-fonts/Inter';
import { loadFont as loadInstrumentSerif } from '@remotion/google-fonts/InstrumentSerif';

/**
 * MapHarness95Light — 7 cảnh maps, palette SÁNG, 1540f @30fps (~51s)
 * Spec: bg #FFFBF5 / #F8FAFC, card #FFFFFF, line #E7E5E4, ink #1C1917,
 * sky #0EA5E9, amber #F59E0B, mint #10B981 — CẤM màu tối cũ (không dùng)
 * Durations: [220,210,210,240,220,220,220]=1540f, 1920×1080@30fps
 * Typography: Outfit500 + Inter400 + Instrument Serif italic via loadFont
 * Motion: spring damping26 stiffness85 mass0.8 + bezier(0.25,0.8,0.25,1) scale 0.96->1 opacity 0->1 translateY16->0
 * GIẢ LẬP MAP: không gọi API MapLibre/Cesium thật — simulate bằng Canvas/SVG + AbsoluteFill + Sequence
 * TODO comments giữ chỗ gắn maplibregl / CesiumFlythrough thật sau này.
 */

// ── Typography — loadFont @remotion/google-fonts ──
loadOutfit('normal', { weights: ['500'], subsets: ['latin'] });
loadInter('normal', { weights: ['400'], subsets: ['latin'] });
loadInstrumentSerif('italic', { weights: ['400'], subsets: ['latin'] });

const FONT_OUTFIT = "'Outfit', system-ui, sans-serif";
const FONT_INTER = "'Inter', system-ui, sans-serif";
const FONT_DISPLAY = "'Instrument Serif', Georgia, serif";

// ── Palette SÁNG — chỉ dùng cream/slate/card/line/ink/sky/amber/mint ──
const C = {
  cream: '#FFFBF5',
  slate: '#F8FAFC',
  card: '#FFFFFF',
  line: '#E7E5E4',
  ink: '#1C1917',
  muted: '#78716C',
  sky: '#0EA5E9',
  skySoft: '#E0F2FE',
  amber: '#F59E0B',
  amberSoft: '#FEF3C7',
  mint: '#10B981',
  mintSoft: '#D1FAE5',
  skyRing: 'rgba(14,165,233,0.18)',
} as const;

// ── Layout & timing ──
const W = 1920;
const H = 1080;
const FPS = 30;
export const DURATIONS = [220, 210, 210, 240, 220, 220, 220] as const;
export const TOTAL_FRAMES = DURATIONS.reduce((a, b) => a + b, 0); // 1540
const OFFSETS = DURATIONS.reduce<number[]>((acc, d, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + DURATIONS[i - 1]);
  return acc;
}, []);

// ── Motion — spring damping26 stiffness85 mass0.8 + bezier(0.25,0.8,0.25,1) ──
const SPRING_CFG = { damping: 26, stiffness: 85, mass: 0.8 } as const;
const BEZIER = Easing.bezier(0.25, 0.8, 0.25, 1);

// ── Chassis — card radius 24-32 border 1px #E7E5E4 shadow diffused ──
const CARD_SHADOW = '0 8px 32px rgba(28,25,23,0.06)';
const CARD_BORDER = '1px solid #E7E5E4';

// Light mesh — blur 32px, 3 blobs like MegaHarness Soft but light only
const LightMesh: React.FC<{ variant?: number }> = ({ variant = 0 }) => (
  <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
    <div
      style={{
        position: 'absolute',
        left: variant % 2 === 0 ? '-10%' : '42%',
        top: variant % 2 === 0 ? '-14%' : '-18%',
        width: '66%',
        height: '66%',
        background:
          variant % 3 === 0
            ? 'radial-gradient(circle at 30% 30%, rgba(224,242,254,0.85) 0%, rgba(224,242,254,0) 68%)'
            : 'radial-gradient(circle at 40% 40%, rgba(254,243,199,0.7) 0%, rgba(254,243,199,0) 68%)',
        filter: 'blur(32px)',
        borderRadius: '50%',
      }}
    />
    <div
      style={{
        position: 'absolute',
        right: '-12%',
        top: '8%',
        width: '58%',
        height: '58%',
        background: 'radial-gradient(circle at 70% 30%, rgba(209,250,229,0.65) 0%, rgba(209,250,229,0) 68%)',
        filter: 'blur(32px)',
        borderRadius: '50%',
      }}
    />
    <div
      style={{
        position: 'absolute',
        left: '18%',
        bottom: '-16%',
        width: '70%',
        height: '70%',
        background: 'radial-gradient(circle at 50% 50%, rgba(224,242,254,0.5) 0%, rgba(224,242,254,0) 68%)',
        filter: 'blur(32px)',
        borderRadius: '50%',
      }}
    />
  </div>
);

const LightGrid: React.FC<{ opacity?: number }> = ({ opacity = 0.06 }) => (
  <div
    style={{
      position: 'absolute',
      inset: 0,
      opacity,
      backgroundImage: 'radial-gradient(circle, rgba(28,25,23,0.35) 1px, transparent 1px)',
      backgroundSize: '28px 28px',
      pointerEvents: 'none',
    }}
  />
);

const LightFrame: React.FC = () => (
  <>
    <div
      style={{
        position: 'absolute',
        left: 18,
        top: 18,
        right: 18,
        bottom: 18,
        border: CARD_BORDER,
        borderRadius: 28,
        pointerEvents: 'none',
        boxShadow: CARD_SHADOW,
        background: 'rgba(255,251,245,0.02)',
      }}
    />
    <div
      style={{
        position: 'absolute',
        left: 28,
        top: 28,
        right: 28,
        bottom: 28,
        border: '1px solid rgba(231,229,228,0.6)',
        borderRadius: 22,
        pointerEvents: 'none',
        opacity: 0.5,
      }}
    />
  </>
);

// Top bar light — Outfit500
const TopBar: React.FC<{ idx: number; title: string; subtitle?: string }> = ({ idx, title, subtitle }) => {
  const frame = useCurrentFrame();
  const p = spring({ frame, fps: FPS, config: SPRING_CFG });
  return (
    <div
      style={{
        position: 'absolute',
        left: 36,
        right: 36,
        top: 20,
        height: 44,
        border: CARD_BORDER,
        background: 'rgba(255,255,255,0.88)',
        borderRadius: 999,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 18px',
        boxShadow: CARD_SHADOW,
        opacity: interpolate(p, [0, 1], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }),
        translate: interpolate(p, [0, 1], ['0px 16px', '0px 0px'], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }) as unknown as string,
        scale: interpolate(p, [0, 1], [0.96, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }) as unknown as number,
      }}
    >
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <div
          style={{
            fontFamily: FONT_OUTFIT,
            fontWeight: 500,
            fontSize: 13,
            letterSpacing: '0.06em',
            color: C.ink,
            background: idx % 2 === 0 ? C.skySoft : C.amberSoft,
            padding: '5px 12px',
            borderRadius: 999,
            border: CARD_BORDER,
            lineHeight: 1,
          }}
        >
          {String(idx + 1).padStart(2, '0')} — {title}
        </div>
        {subtitle && (
          <span style={{ fontFamily: FONT_INTER, fontWeight: 400, fontSize: 12, letterSpacing: '0.04em', color: C.muted }}>{subtitle}</span>
        )}
      </div>
      <div
        style={{
          fontFamily: FONT_INTER,
          fontSize: 11,
          letterSpacing: '0.06em',
          color: C.muted,
          border: CARD_BORDER,
          padding: '5px 10px',
          background: 'rgba(255,255,255,0.7)',
          borderRadius: 999,
        }}
      >
        {DURATIONS[idx]}F · {(DURATIONS[idx] / 30).toFixed(1)}s · {idx === 4 || idx === 5 ? 'CESIUM SIM' : 'MAPLIBRE SIM'}
      </div>
    </div>
  );
};

// Simulated light map tiles — SVG grid + roads light, no dark
const SimulatedLightTiles: React.FC<{ seed?: number }> = ({ seed = 0 }) => {
  const frame = useCurrentFrame();
  // subtle pan for liveness
  const panX = interpolate(frame, [0, 220], [0, -18], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER });
  const panY = interpolate(frame, [0, 220], [0, -10], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER });
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: C.cream,
        overflow: 'hidden',
      }}
    >
      {/* TODO: Replace SimulatedLightTiles with real Carto Light tiles:
          <CanvasImage src={staticFile('maps/carto-light-z12.png')} style={{width:'100%',height:'100%',objectFit:'cover'}} />
          style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json'
          + preserveDrawingBuffer:true, interactive:false
       */}
      <svg width="100%" height="100%" viewBox="0 0 1920 1080" style={{ position: 'absolute', inset: 0, translate: `${panX}px ${panY}px` as unknown as string }}>
        {/* base roads light */}
        <rect x="0" y="0" width="1920" height="1080" fill={C.cream} />
        {/* horizontal arterials */}
        {[180, 320, 480, 620, 780, 920].map((y) => (
          <line key={`h-${y}`} x1="0" y1={y} x2="1920" y2={y + (seed % 3) * 2} stroke={C.line} strokeWidth={y % 2 === 0 ? 10 : 6} opacity={0.9} />
        ))}
        {/* vertical */}
        {[260, 540, 880, 1240, 1560].map((x) => (
          <line key={`v-${x}`} x1={x} y1="0" x2={x + 4} y2="1080" stroke={C.line} strokeWidth={8} opacity={0.9} />
        ))}
        {/* minor grid */}
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i} opacity={0.35}>
            <line x1={120 + i * 340} y1={0} x2={120 + i * 340} y2={1080} stroke="#F5F5F4" strokeWidth={1} />
            <line x1={0} y1={100 + i * 200} x2={1920} y2={100 + i * 200} stroke="#F5F5F4" strokeWidth={1} />
          </g>
        ))}
        {/* parks light */}
        <rect x={420} y={220} width={260} height={180} rx={16} fill="#ECFDF5" stroke="#A7F3D0" strokeWidth={1} opacity={0.9} />
        <rect x={1180} y={640} width={320} height={200} rx={16} fill="#EFF6FF" stroke="#BFDBFE" strokeWidth={1} opacity={0.9} />
        {/* water light */}
        <path d="M 0 860 Q 520 820 960 880 T 1920 860 L 1920 1080 L 0 1080 Z" fill="#E0F2FE" opacity={0.85} />
        {/* blocks */}
        {Array.from({ length: 18 }).map((_, i) => {
          const x = 80 + (i % 6) * 300 + (i % 2) * 20;
          const y = 90 + Math.floor(i / 6) * 240 + (seed % 7);
          return <rect key={i} x={x} y={y} width={220} height={120} rx={8} fill="white" stroke={C.line} strokeWidth={1} opacity={0.95} />;
        })}
      </svg>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 120, background: 'linear-gradient(180deg, transparent 0%, rgba(255,251,245,0.9) 100%)', pointerEvents: 'none' }} />
      {/* attribution light */}
      <div style={{ position: 'absolute', right: 14, bottom: 14, fontFamily: FONT_INTER, fontSize: 10, letterSpacing: '0.06em', color: C.muted, background: 'rgba(255,255,255,0.92)', border: CARD_BORDER, padding: '4px 8px', borderRadius: 8 }}>
        © CARTO Light · Simulated · 1920×1080
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════
// S01 — Static Light (Carto Light tiles via CanvasImage + card cream)
// ═══════════════════════════════════════════════════════════
const S01_StaticLight: React.FC = () => {
  const frame = useCurrentFrame();
  const s = spring({ frame, fps: FPS, config: SPRING_CFG });
  const bg = C.cream;
  return (
    <AbsoluteFill style={{ background: bg }}>
      <SimulatedLightTiles seed={1} />
      <LightMesh variant={0} />
      <LightGrid opacity={0.05} />
      <LightFrame />
      <TopBar idx={0} title="STATIC LIGHT" subtitle="CARTO Light · Simulated CanvasImage · card cream" />
      {/* hero copy */}
      <div
        style={{
          position: 'absolute',
          left: 56,
          top: 118,
          width: 560,
          background: 'rgba(255,255,255,0.96)',
          border: CARD_BORDER,
          borderRadius: 32,
          padding: '28px 26px',
          boxShadow: CARD_SHADOW,
          opacity: interpolate(s, [0, 1], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }),
          scale: interpolate(s, [0, 1], [0.96, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }) as unknown as number,
          translate: interpolate(s, [0, 1], ['0px 16px', '0px 0px'], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }) as unknown as string,
        }}
      >
        <div style={{ fontFamily: FONT_INTER, fontSize: 11, letterSpacing: '0.18em', color: C.sky, fontWeight: 700 }}>01 · STATIC · LIGHT MAP</div>
        <div style={{ fontFamily: FONT_DISPLAY, fontStyle: 'italic', fontSize: 52, lineHeight: 0.95, color: C.ink, marginTop: 8, fontWeight: 400 }}>
          Carto Light <span style={{ color: C.sky }}>static</span>
        </div>
        <div style={{ fontFamily: FONT_INTER, fontSize: 15, lineHeight: 1.6, color: C.muted, marginTop: 10 }}>
          Nền sáng cream #FFFBF5 · card #FFFFFF · line #E7E5E4 · giả lập tiles Carto Light bằng SVG grid + CanvasImage pattern, không gọi API.
        </div>
        <div style={{ marginTop: 16, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {['positron-gl-style', 'CanvasImage', 'staticFile'].map((k) => (
            <span key={k} style={{ fontFamily: FONT_OUTFIT, fontWeight: 500, fontSize: 11, letterSpacing: '0.06em', color: C.ink, background: C.slate, border: CARD_BORDER, padding: '6px 10px', borderRadius: 999 }}>
              {k}
            </span>
          ))}
        </div>
        <div style={{ marginTop: 14, height: 1, background: C.line }} />
        <div style={{ marginTop: 12, display: 'flex', gap: 12, alignItems: 'center' }}>
          <div style={{ width: 8, height: 8, borderRadius: 999, background: C.sky, boxShadow: `0 0 10px ${C.sky}` }} />
          <span style={{ fontFamily: FONT_OUTFIT, fontWeight: 500, fontSize: 12, letterSpacing: '0.06em', color: C.ink }}>SIMULATED · TODO maplibregl style: carto-light</span>
        </div>
      </div>
      {/* bottom stats */}
      <div
        style={{
          position: 'absolute',
          left: 56,
          bottom: 42,
          display: 'flex',
          gap: 12,
          opacity: interpolate(spring({ frame: frame - 14, fps: FPS, config: SPRING_CFG }), [0, 1], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }),
          translate: interpolate(spring({ frame: frame - 14, fps: FPS, config: SPRING_CFG }), [0, 1], ['0px 16px', '0px 0px'], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }) as unknown as string,
        }}
      >
        {[
          { k: 'TILES', v: 'Carto Light' },
          { k: 'RENDER', v: 'CanvasImage' },
          { k: 'PALETTE', v: 'cream · slate' },
        ].map((b) => (
          <div key={b.k} style={{ background: 'rgba(255,255,255,0.94)', border: CARD_BORDER, borderRadius: 16, padding: '10px 14px', boxShadow: CARD_SHADOW }}>
            <div style={{ fontFamily: FONT_INTER, fontSize: 10, letterSpacing: '0.14em', color: C.muted }}>{b.k}</div>
            <div style={{ fontFamily: FONT_OUTFIT, fontWeight: 500, fontSize: 13, color: C.ink, marginTop: 2 }}>{b.v}</div>
          </div>
        ))}
      </div>
      {/* right lens card */}
      <div
        style={{
          position: 'absolute',
          right: 56,
          top: 128,
          width: 420,
          background: 'rgba(255,255,255,0.92)',
          border: CARD_BORDER,
          borderRadius: 24,
          padding: 18,
          boxShadow: CARD_SHADOW,
          opacity: interpolate(spring({ frame: frame - 8, fps: FPS, config: SPRING_CFG }), [0, 1], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }),
          scale: interpolate(spring({ frame: frame - 8, fps: FPS, config: SPRING_CFG }), [0, 1], [0.96, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }) as unknown as number,
        }}
      >
        <div style={{ fontFamily: FONT_OUTFIT, fontWeight: 500, fontSize: 12, letterSpacing: '0.08em', color: C.ink }}>LENS · 21.0285°N 105.8342°E · Z12</div>
        <div style={{ marginTop: 12, height: 160, borderRadius: 16, overflow: 'hidden', border: CARD_BORDER, background: C.slate, position: 'relative' }}>
          <svg width="100%" height="100%" viewBox="0 0 420 160">
            <rect x="0" y="0" width="420" height="160" fill={C.slate} />
            <line x1="0" y1="80" x2="420" y2="80" stroke={C.line} strokeWidth={6} />
            <line x1="210" y1="0" x2="210" y2="160" stroke={C.line} strokeWidth={6} />
            <circle cx="210" cy="80" r={18} fill="white" stroke={C.sky} strokeWidth={3} />
            <circle cx="210" cy="80" r={6} fill={C.sky} />
          </svg>
          <div style={{ position: 'absolute', left: 12, bottom: 12, fontFamily: FONT_INTER, fontSize: 10, color: C.muted, background: 'white', border: CARD_BORDER, padding: '4px 8px', borderRadius: 999 }}>Hà Nội · 500 m</div>
        </div>
        <div style={{ marginTop: 12, fontFamily: FONT_INTER, fontSize: 11, color: C.muted, lineHeight: 1.6 }}>
          TODO: thay SimulatedLightTiles bằng{' '}
          <span style={{ color: C.ink, fontWeight: 700 }}>&lt;CanvasImage src=&#123;staticFile('tiles/carto-light.jpg')&#125; /&gt;</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── VN pins for S02 ──
const VN_PINS: { name: string; lng: number; lat: number; color: string }[] = [
  { name: 'Hà Nội', lng: 105.8342, lat: 21.0285, color: C.sky },
  { name: 'Hải Phòng', lng: 106.6881, lat: 20.8449, color: C.amber },
  { name: 'Huế', lng: 107.585, lat: 16.4637, color: C.mint },
  { name: 'Đà Nẵng', lng: 108.2092, lat: 16.0544, color: C.sky },
  { name: 'Nha Trang', lng: 109.1896, lat: 12.2388, color: C.amber },
  { name: 'TP.HCM', lng: 106.6297, lat: 10.8231, color: C.mint },
];

// project lng/lat to svg x/y in Vietnam bbox approx
const projectVN = (lng: number, lat: number, w = 680, h = 520) => {
  // bbox: lng 102-110, lat 8-23
  const x = ((lng - 102) / (110 - 102)) * w;
  const y = ((23 - lat) / (23 - 8)) * h;
  return { x, y };
};

// ═══════════════════════════════════════════════════════════
// S02 — MapLibre Marker Cluster (6 pins VN)
// ═══════════════════════════════════════════════════════════
const S02_MarkerCluster: React.FC = () => {
  const frame = useCurrentFrame();
  const s = spring({ frame, fps: FPS, config: SPRING_CFG });
  return (
    <AbsoluteFill style={{ background: C.slate }}>
      <SimulatedLightTiles seed={2} />
      <LightMesh variant={1} />
      <LightGrid opacity={0.05} />
      <LightFrame />
      <TopBar idx={1} title="MARKER CLUSTER" subtitle="MapLibre · 6 pins VN · cluster radius 40 · simulated" />
      <div
        style={{
          position: 'absolute',
          left: 56,
          top: 110,
          width: 520,
          background: 'rgba(255,255,255,0.96)',
          border: CARD_BORDER,
          borderRadius: 32,
          padding: '26px 24px',
          boxShadow: CARD_SHADOW,
          opacity: interpolate(s, [0, 1], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }),
          scale: interpolate(s, [0, 1], [0.96, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }) as unknown as number,
          translate: interpolate(s, [0, 1], ['0px 16px', '0px 0px'], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }) as unknown as string,
        }}
      >
        <div style={{ fontFamily: FONT_INTER, fontSize: 11, letterSpacing: '0.18em', color: C.sky, fontWeight: 700 }}>02 · MARKERS · MAPLIBRE SIM</div>
        <div style={{ fontFamily: FONT_DISPLAY, fontStyle: 'italic', fontSize: 48, lineHeight: 0.95, color: C.ink, marginTop: 6, fontWeight: 400 }}>
          Marker <span style={{ color: C.sky }}>Cluster</span>
        </div>
        <div style={{ fontFamily: FONT_INTER, fontSize: 15, lineHeight: 1.6, color: C.muted, marginTop: 8 }}>
          6 pins Việt Nam — Hà Nội → TP.HCM. Giả lập MapLibre GeoJSON +{' '}
          <span style={{ color: C.ink, fontWeight: 700 }}>circle + symbol</span> layers, cluster radius 40.
        </div>
        <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {VN_PINS.map((p) => (
            <span
              key={p.name}
              style={{
                fontFamily: FONT_OUTFIT,
                fontWeight: 500,
                fontSize: 11,
                color: C.ink,
                background: 'white',
                border: CARD_BORDER,
                padding: '6px 10px',
                borderRadius: 999,
                boxShadow: '0 2px 8px rgba(28,25,23,0.04)',
              }}
            >
              <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: 999, background: p.color, marginRight: 6, verticalAlign: 'middle' }} />
              {p.name}
            </span>
          ))}
        </div>
        <div style={{ marginTop: 14, fontFamily: FONT_INTER, fontSize: 11, color: C.muted, lineHeight: 1.6, background: C.slate, border: CARD_BORDER, padding: '8px 10px', borderRadius: 12 }}>
          TODO MapLibre thật: <span style={{ color: C.ink, fontWeight: 700 }}>map.addSource('vn-pins', &#123; type:'geojson', data: featureCollection &#125;)</span> + cluster:true
        </div>
      </div>
      {/* map card */}
      <div
        style={{
          position: 'absolute',
          right: 56,
          top: 110,
          width: 760,
          height: 560,
          background: 'white',
          border: CARD_BORDER,
          borderRadius: 32,
          overflow: 'hidden',
          boxShadow: CARD_SHADOW,
          opacity: interpolate(spring({ frame: frame - 6, fps: FPS, config: SPRING_CFG }), [0, 1], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }),
          scale: interpolate(spring({ frame: frame - 6, fps: FPS, config: SPRING_CFG }), [0, 1], [0.96, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }) as unknown as number,
        }}
      >
        <svg width="760" height="560" viewBox="0 0 760 560" style={{ display: 'block' }}>
          <rect x="0" y="0" width="760" height="560" fill={C.slate} />
          {/* VN shape simplified */}
          <path
            d="M 280 40 Q 420 60 480 120 Q 540 220 520 340 Q 500 440 420 500 Q 320 540 220 480 Q 160 380 180 240 Q 200 120 280 40 Z"
            fill="white"
            stroke={C.line}
            strokeWidth={2}
          />
          <path
            d="M 380 120 Q 400 200 380 320 Q 360 400 340 460"
            fill="none"
            stroke={C.line}
            strokeWidth={6}
            opacity={0.8}
          />
          {/* pins */}
          {VN_PINS.map((pin, i) => {
            const { x, y } = projectVN(pin.lng, pin.lat, 760, 560);
            // map to VN shape center-ish
            const sx = 220 + (pin.lng - 102) * 62;
            const sy = 40 + (23 - pin.lat) * 32;
            const p = spring({ frame: frame - 16 - i * 6, fps: FPS, config: SPRING_CFG });
            const pulse = 0.85 + 0.15 * Math.sin(frame / 8 + i);
            return (
              <g
                key={pin.name}
                opacity={interpolate(p, [0, 1], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER })}
                style={{
                  translate: interpolate(p, [0, 1], ['0px 16px', '0px 0px'], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }) as unknown as string,
                }}
              >
                {/* halo */}
                <circle cx={sx} cy={sy} r={28 * pulse} fill={pin.color} opacity={0.12} />
                <circle cx={sx} cy={sy} r={16} fill="white" stroke={pin.color} strokeWidth={3} />
                <circle cx={sx} cy={sy} r={7} fill={pin.color} />
                {/* label */}
                <g transform={`translate(${sx + 18}, ${sy - 14})`}>
                  <rect x={0} y={0} width={92} height={22} rx={8} fill="white" stroke={C.line} />
                  <text x={46} y={15} textAnchor="middle" fontFamily={FONT_OUTFIT} fontWeight={500} fontSize={11} fill={C.ink}>
                    {pin.name}
                  </text>
                </g>
              </g>
            );
          })}
          {/* cluster badge */}
          <g opacity={interpolate(spring({ frame: frame - 44, fps: FPS, config: SPRING_CFG }), [0, 1], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER })}>
            <circle cx={400} cy={180} r={22} fill={C.amber} stroke="white" strokeWidth={3} />
            <text x={400} y={186} textAnchor="middle" fontFamily={FONT_OUTFIT} fontWeight={500} fontSize={16} fill="white">
              6
            </text>
            <text x={400} y={208} textAnchor="middle" fontFamily={FONT_INTER} fontSize={10} fill={C.muted}>
              cluster
            </text>
          </g>
        </svg>
        <div style={{ position: 'absolute', left: 14, bottom: 14, display: 'flex', gap: 8 }}>
          <span style={{ fontFamily: FONT_INTER, fontSize: 10, letterSpacing: '0.08em', color: C.muted, background: C.slate, border: CARD_BORDER, padding: '6px 10px', borderRadius: 999 }}>interactive: false · fadeDuration: 0</span>
          <span style={{ fontFamily: FONT_INTER, fontSize: 10, color: C.sky, background: C.skySoft, border: `1px solid ${C.sky}30`, padding: '6px 10px', borderRadius: 999 }}>6 markers · circle+symbol</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ═══════════════════════════════════════════════════════════
// S03 — MapLibre Heatmap (180 points)
// ═══════════════════════════════════════════════════════════
const S03_Heatmap: React.FC = () => {
  const frame = useCurrentFrame();
  const s = spring({ frame, fps: FPS, config: SPRING_CFG });
  // 180 deterministic points
  const points = React.useMemo(() => {
    const pts: { x: number; y: number; v: number; r: number }[] = [];
    const seeds = [
      { cx: 360, cy: 180, spread: 90, n: 70 },
      { cx: 520, cy: 360, spread: 110, n: 60 },
      { cx: 400, cy: 460, spread: 80, n: 50 },
    ];
    let idx = 0;
    seeds.forEach((s) => {
      for (let i = 0; i < s.n; i++) {
        const a = (idx * 137.5 * Math.PI) / 180;
        const r = (idx % 19) * 0.17 * s.spread + 8;
        const x = s.cx + Math.cos(a) * r + ((idx * 13) % 18) - 9;
        const y = s.cy + Math.sin(a) * r * 0.7 + ((idx * 7) % 14) - 7;
        const v = 0.35 + ((idx * 31) % 65) / 100;
        const rad = 8 + v * 18;
        pts.push({ x: Math.max(40, Math.min(720, x)), y: Math.max(40, Math.min(520, y)), v, r: rad });
        idx++;
      }
    });
    return pts.slice(0, 180);
  }, []);
  return (
    <AbsoluteFill style={{ background: C.cream }}>
      <SimulatedLightTiles seed={3} />
      <LightMesh variant={2} />
      <LightGrid opacity={0.05} />
      <LightFrame />
      <TopBar idx={2} title="HEATMAP" subtitle="MapLibre · 180 points · heatmap layer · weight interpolate" />
      <div
        style={{
          position: 'absolute',
          left: 56,
          top: 110,
          width: 520,
          background: 'rgba(255,255,255,0.96)',
          border: CARD_BORDER,
          borderRadius: 32,
          padding: '26px 24px',
          boxShadow: CARD_SHADOW,
          opacity: interpolate(s, [0, 1], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }),
          scale: interpolate(s, [0, 1], [0.96, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }) as unknown as number,
          translate: interpolate(s, [0, 1], ['0px 16px', '0px 0px'], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }) as unknown as string,
        }}
      >
        <div style={{ fontFamily: FONT_INTER, fontSize: 11, letterSpacing: '0.18em', color: C.amber, fontWeight: 700 }}>03 · HEATMAP · 180 PTS</div>
        <div style={{ fontFamily: FONT_DISPLAY, fontStyle: 'italic', fontSize: 48, lineHeight: 0.95, color: C.ink, marginTop: 6, fontWeight: 400 }}>
          Density <span style={{ color: C.amber }}>heatmap</span>
        </div>
        <div style={{ fontFamily: FONT_INTER, fontSize: 15, lineHeight: 1.6, color: C.muted, marginTop: 8 }}>
          Giả lập MapLibre <span style={{ color: C.ink, fontWeight: 700 }}>heatmap</span> — 180 điểm HN–ĐN–HCM, weight theo mật độ, radius 22 → 40 interploate theo zoom.
        </div>
        <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[
            { k: 'POINTS', v: '180' },
            { k: 'RADIUS', v: '22 → 40' },
            { k: 'WEIGHT', v: '0.3 → 1.0' },
            { k: 'OPACITY', v: '0.85' },
          ].map((b) => (
            <div key={b.k} style={{ background: C.slate, border: CARD_BORDER, borderRadius: 16, padding: '10px 12px', textAlign: 'center' }}>
              <div style={{ fontFamily: FONT_INTER, fontSize: 10, letterSpacing: '0.14em', color: C.muted }}>{b.k}</div>
              <div style={{ fontFamily: FONT_OUTFIT, fontWeight: 500, fontSize: 14, color: C.ink, marginTop: 2 }}>{b.v}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 12, fontFamily: FONT_INTER, fontSize: 11, color: C.muted, background: 'white', border: CARD_BORDER, padding: '8px 10px', borderRadius: 12, lineHeight: 1.6 }}>
          TODO thật: <span style={{ color: C.ink, fontWeight: 700 }}>map.addLayer(&#123; type:'heatmap', paint: &#123; 'heatmap-weight': ['interpolate' …] &#125; &#125;)</span>
        </div>
      </div>
      {/* heatmap card */}
      <div
        style={{
          position: 'absolute',
          right: 56,
          top: 110,
          width: 760,
          height: 560,
          background: 'white',
          border: CARD_BORDER,
          borderRadius: 32,
          overflow: 'hidden',
          boxShadow: CARD_SHADOW,
          opacity: interpolate(spring({ frame: frame - 6, fps: FPS, config: SPRING_CFG }), [0, 1], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }),
          scale: interpolate(spring({ frame: frame - 6, fps: FPS, config: SPRING_CFG }), [0, 1], [0.96, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }) as unknown as number,
        }}
      >
        <svg width="760" height="560" viewBox="0 0 760 560" style={{ display: 'block' }}>
          <rect x="0" y="0" width="760" height="560" fill={C.cream} />
          {/* base vn shape */}
          <path d="M 260 40 Q 420 55 520 120 Q 560 240 520 360 Q 500 460 400 520 Q 300 550 200 480 Q 150 380 170 220 Q 190 110 260 40 Z" fill="white" stroke={C.line} strokeWidth={1.5} />
          {/* heat blobs — render back to front */}
          {points
            .slice()
            .sort((a, b) => a.v - b.v)
            .map((p, i) => {
              const appear = interpolate(frame, [16 + i * 0.55, 16 + i * 0.55 + 18], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER });
              const alpha = p.v * 0.55 * appear;
              // color ramp cream -> amber -> sky -> mint intensity
              const col = p.v > 0.7 ? C.sky : p.v > 0.5 ? C.amber : '#FDBA74';
              return <circle key={i} cx={p.x} cy={p.y} r={p.r * (0.7 + 0.3 * appear)} fill={col} opacity={alpha} style={{ filter: 'blur(10px)' }} />;
            })}
          {/* center cores */}
          {[
            { x: 360, y: 180, label: 'Hà Nội' },
            { x: 520, y: 360, label: 'Đà Nẵng' },
            { x: 400, y: 460, label: 'TP.HCM' },
          ].map((c) => (
            <g key={c.label} opacity={interpolate(spring({ frame: frame - 30, fps: FPS, config: SPRING_CFG }), [0, 1], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER })}>
              <circle cx={c.x} cy={c.y} r={10} fill="white" stroke={C.amber} strokeWidth={2.5} />
              <circle cx={c.x} cy={c.y} r={4} fill={C.amber} />
            </g>
          ))}
        </svg>
        {/* legend */}
        <div style={{ position: 'absolute', left: 16, bottom: 16, display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.96)', border: CARD_BORDER, padding: '8px 12px', borderRadius: 999, boxShadow: '0 4px 16px rgba(28,25,23,0.06)' }}>
          <span style={{ fontFamily: FONT_INTER, fontSize: 10, letterSpacing: '0.08em', color: C.muted }}>LOW</span>
          <div style={{ width: 120, height: 8, borderRadius: 999, background: `linear-gradient(90deg, ${C.cream}, #FDBA74, ${C.amber}, ${C.sky})`, border: CARD_BORDER }} />
          <span style={{ fontFamily: FONT_INTER, fontSize: 10, letterSpacing: '0.08em', color: C.muted }}>HIGH</span>
          <span style={{ fontFamily: FONT_OUTFIT, fontWeight: 500, fontSize: 11, color: C.ink, marginLeft: 6 }}>180 pts</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ═══════════════════════════════════════════════════════════
// S04 — MapLibre Line Route HN→HCM Turf greatCircle
// ═══════════════════════════════════════════════════════════
const S04_LineRoute: React.FC = () => {
  const frame = useCurrentFrame();
  const s = spring({ frame, fps: FPS, config: SPRING_CFG });
  const progress = interpolate(frame, [30, 200], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER });
  // greatCircle simulated via quadratic bezier — TODO use turf.greatCircle([lng,lat])
  const totalDash = 980;
  const dashOffset = interpolate(progress, [0, 1], [totalDash, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER });
  const planeX = interpolate(progress, [0, 1], [220, 540], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER });
  const planeY = interpolate(progress, [0, 1], [140, 420], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER });
  const planeAngle = interpolate(progress, [0, 1], [-28, 32], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER });
  return (
    <AbsoluteFill style={{ background: C.slate }}>
      <SimulatedLightTiles seed={4} />
      <LightMesh variant={3} />
      <LightGrid opacity={0.05} />
      <LightFrame />
      <TopBar idx={3} title="LINE ROUTE" subtitle="Turf greatCircle HN→HCM · lineSliceAlong · dash reveal" />
      <div
        style={{
          position: 'absolute',
          left: 56,
          top: 110,
          width: 520,
          background: 'rgba(255,255,255,0.96)',
          border: CARD_BORDER,
          borderRadius: 32,
          padding: '26px 24px',
          boxShadow: CARD_SHADOW,
          opacity: interpolate(s, [0, 1], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }),
          scale: interpolate(s, [0, 1], [0.96, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }) as unknown as number,
          translate: interpolate(s, [0, 1], ['0px 16px', '0px 0px'], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }) as unknown as string,
        }}
      >
        <div style={{ fontFamily: FONT_INTER, fontSize: 11, letterSpacing: '0.18em', color: C.sky, fontWeight: 700 }}>04 · LINE · TURF SIM</div>
        <div style={{ fontFamily: FONT_DISPLAY, fontStyle: 'italic', fontSize: 46, lineHeight: 0.95, color: C.ink, marginTop: 6, fontWeight: 400 }}>
          HN <span style={{ fontFamily: FONT_INTER, fontStyle: 'normal', fontSize: 18, color: C.muted, fontWeight: 400 }}>→</span> HCM <span style={{ color: C.sky }}>greatCircle</span>
        </div>
        <div style={{ fontFamily: FONT_INTER, fontSize: 15, lineHeight: 1.6, color: C.muted, marginTop: 8 }}>
          Giả lập <span style={{ color: C.ink, fontWeight: 700 }}>turf.greatCircle</span> + <span style={{ color: C.ink, fontWeight: 700 }}>lineSliceAlong</span> · progress slice 0→100, npoints 100 · camera static (render stability).
        </div>
        <div style={{ marginTop: 14, height: 1, background: C.line }} />
        <div style={{ marginTop: 14, display: 'flex', gap: 10 }}>
          <div style={{ flex: 1, background: C.slate, border: CARD_BORDER, borderRadius: 16, padding: '12px 14px', textAlign: 'center' }}>
            <div style={{ fontFamily: FONT_INTER, fontSize: 10, letterSpacing: '0.12em', color: C.muted }}>DISTANCE</div>
            <div style={{ fontFamily: FONT_OUTFIT, fontWeight: 500, fontSize: 18, color: C.ink, marginTop: 2 }}>{Math.round(1138 * progress)} km</div>
            <div style={{ fontFamily: FONT_INTER, fontSize: 11, color: C.muted }}>/ 1 138 km</div>
          </div>
          <div style={{ flex: 1, background: 'white', border: CARD_BORDER, borderRadius: 16, padding: '12px 14px', textAlign: 'center' }}>
            <div style={{ fontFamily: FONT_INTER, fontSize: 10, letterSpacing: '0.12em', color: C.muted }}>PROGRESS</div>
            <div style={{ fontFamily: FONT_OUTFIT, fontWeight: 500, fontSize: 18, color: C.sky, marginTop: 2 }}>{Math.round(progress * 100)}%</div>
            <div style={{ height: 4, background: C.line, borderRadius: 999, marginTop: 6, overflow: 'hidden' }}>
              <div style={{ width: `${progress * 100}%`, height: '100%', background: C.sky }} />
            </div>
          </div>
        </div>
        <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {['greatCircle n=100', 'lineString', 'lineSliceAlong'].map((k) => (
            <span key={k} style={{ fontFamily: FONT_INTER, fontSize: 11, color: C.muted, background: C.slate, border: CARD_BORDER, padding: '5px 10px', borderRadius: 999 }}>{k}</span>
          ))}
        </div>
        <div style={{ marginTop: 12, fontFamily: FONT_INTER, fontSize: 11, color: C.muted, lineHeight: 1.6, background: 'white', border: CARD_BORDER, padding: '8px 10px', borderRadius: 12 }}>
          TODO thật:{' '}
          <span style={{ color: C.ink, fontWeight: 700 }}>const route = turf.greatCircle(hn, hcm, &#123;npoints:100&#125;)</span> · turf.length + lineSliceAlong(0, distance*progress)
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          right: 56,
          top: 110,
          width: 760,
          height: 560,
          background: 'white',
          border: CARD_BORDER,
          borderRadius: 32,
          overflow: 'hidden',
          boxShadow: CARD_SHADOW,
          opacity: interpolate(spring({ frame: frame - 6, fps: FPS, config: SPRING_CFG }), [0, 1], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }),
          scale: interpolate(spring({ frame: frame - 6, fps: FPS, config: SPRING_CFG }), [0, 1], [0.96, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }) as unknown as number,
        }}
      >
        <svg width="760" height="560" viewBox="0 0 760 560" style={{ display: 'block' }}>
          <rect x="0" y="0" width="760" height="560" fill={C.slate} />
          {/* VN outline light */}
          <path d="M 300 40 Q 460 60 540 130 Q 600 250 560 380 Q 520 480 420 520 Q 300 560 200 480 Q 140 380 160 200 Q 180 90 300 40 Z" fill="white" stroke={C.line} strokeWidth={1.5} />
          {/* dashed greatCircle */}
          <path
            d="M 220 140 Q 420 180 540 420"
            fill="none"
            stroke={C.sky}
            strokeWidth={6}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={totalDash}
            strokeDashoffset={dashOffset}
            opacity={0.95}
          />
          <path d="M 220 140 Q 420 180 540 420" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" opacity={0.9} strokeDasharray="8 10" />
          {/* endpoints */}
          <g opacity={interpolate(s, [0, 1], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER })}>
            <circle cx={220} cy={140} r={18} fill="white" stroke={C.ink} strokeWidth={2} />
            <circle cx={220} cy={140} r={8} fill={C.ink} />
            <rect x={154} y={108} width={72} height={20} rx={8} fill={C.ink} />
            <text x={190} y={122} textAnchor="middle" fontFamily={FONT_OUTFIT} fontWeight={500} fontSize={11} fill="white">
              HN
            </text>
          </g>
          <g opacity={interpolate(s, [0, 1], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER })}>
            <circle cx={540} cy={420} r={18} fill="white" stroke={C.mint} strokeWidth={2} />
            <circle cx={540} cy={420} r={8} fill={C.mint} />
            <rect x={502} y={444} width={76} height={20} rx={8} fill={C.mint} />
            <text x={540} y={458} textAnchor="middle" fontFamily={FONT_OUTFIT} fontWeight={500} fontSize={11} fill="white">
              HCM
            </text>
          </g>
          {/* plane */}
          <g transform={`translate(${planeX}, ${planeY}) rotate(${planeAngle})`} opacity={progress > 0.02 ? 1 : 0}>
            <path d="M -14 0 L 14 0 L 8 -5 L 14 0 L 8 5 Z" fill={C.ink} stroke="white" strokeWidth={1.2} />
            <circle cx={0} cy={0} r={3} fill={C.sky} />
          </g>
          {/* distance badge */}
          <g transform="translate(360, 280)" opacity={interpolate(progress, [0.15, 0.3], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER })}>
            <rect x={-62} y={-14} width={124} height={28} rx={14} fill="white" stroke={C.line} />
            <text x={0} y={5} textAnchor="middle" fontFamily={FONT_OUTFIT} fontWeight={500} fontSize={12} fill={C.ink}>
              ✈ {Math.round(progress * 1138)} km
            </text>
          </g>
        </svg>
        <div style={{ position: 'absolute', left: 14, bottom: 14, fontFamily: FONT_INTER, fontSize: 10, letterSpacing: '0.06em', color: C.muted, background: 'rgba(255,255,255,0.96)', border: CARD_BORDER, padding: '6px 10px', borderRadius: 999 }}>Turf greatCircle sim · preserveDrawingBuffer:true</div>
      </div>
    </AbsoluteFill>
  );
};

// ═══════════════════════════════════════════════════════════
// S05 — Cesium Globe Flythrough landscape alt 4600→4300m
// ═══════════════════════════════════════════════════════════
const S05_GlobeFly: React.FC = () => {
  const frame = useCurrentFrame();
  const s = spring({ frame, fps: FPS, config: SPRING_CFG });
  const alt = interpolate(frame, [0, 219], [4600, 4300], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER });
  const pitch = interpolate(frame, [0, 219], [-18, -12], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER });
  const drift = interpolate(frame, [0, 219], [0, 72], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER });
  return (
    <AbsoluteFill style={{ background: '#F0F9FF' }}>
      {/* sky gradient — light, no dark */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #E0F2FE 0%, #F0F9FF 42%, #FFFBF5 100%)' }} />
      <LightGrid opacity={0.04} />
      <LightFrame />
      <TopBar idx={4} title="GLOBE FLYTHROUGH" subtitle="Cesium landscape · alt 4600→4300 m · simulated · lookAhead" />
      {/* horizon terrain — simulated quant mesh + satellite */}
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" style={{ position: 'absolute', inset: 0 }}>
        {/* distant mountains */}
        <path d={`M 0 520 Q 320 ${480 - drift * 0.1} 640 510 Q 920 540 1160 ${500 - drift * 0.08} Q 1440 470 1920 500 L 1920 1080 L 0 1080 Z`} fill="#FEF3C7" stroke="#FDE68A" strokeWidth={1} opacity={0.9} />
        <path d={`M 0 560 Q 400 ${520 - drift * 0.12} 760 560 Q 1080 600 1380 ${560 - drift * 0.06} Q 1640 530 1920 560 L 1920 1080 L 0 1080 Z`} fill="#D1FAE5" stroke="#A7F3D0" strokeWidth={1} opacity={0.95} />
        <path d={`M 0 640 Q 500 ${600 - drift * 0.08} 960 640 Q 1320 680 1920 640 L 1920 1080 L 0 1080 Z`} fill="#FFFBF5" stroke={C.line} strokeWidth={1} />
        {/* terrain lines */}
        {[0, 1, 2].map((i) => (
          <path
            key={i}
            d={`M 0 ${620 + i * 40} Q 480 ${600 + i * 30 - drift * 0.05} 960 ${620 + i * 40} T 1920 ${620 + i * 40}`}
            fill="none"
            stroke={C.line}
            strokeWidth={1}
            opacity={0.6 - i * 0.15}
          />
        ))}
        {/* flight path */}
        <path d="M 240 720 Q 960 560 1680 720" fill="none" stroke={C.sky} strokeWidth={3} strokeDasharray="12 10" opacity={0.9} />
        {/* camera frustum */}
        <path d={`M 960 360 L ${760 - drift * 0.3} 720 L ${1160 - drift * 0.3} 720 Z`} fill="rgba(14,165,233,0.08)" stroke={C.sky} strokeWidth={1} strokeDasharray="6 6" />
        {/* TODO Cesium: <CesiumFlythrough mode="landscape" path={cameraPath} altitudeStart={4600} altitudeEnd={4300} lookAheadKm={1.2} travelKm={18} pathSmoothingPasses={3} /> + MapTiler terrain-quantized-mesh-v2 */}
      </svg>
      {/* globe hint */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: 140,
          width: 420,
          height: 420,
          transform: 'translateX(-50%)',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 32% 28%, white 0%, #E0F2FE 38%, #BAE6FD 68%, #7DD3FC 100%)',
          border: '1px solid rgba(14,165,233,0.2)',
          boxShadow: '0 24px 64px rgba(14,165,233,0.18)',
          overflow: 'hidden',
          opacity: interpolate(s, [0, 1], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }),
          scale: interpolate(s, [0, 1], [0.96, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }) as unknown as number,
        }}
      >
        <div style={{ position: 'absolute', left: 42, top: 88, width: 180, height: 90, background: '#FEF3C7', borderRadius: 24, opacity: 0.9, transform: `translateX(${drift * 0.18}px)`, border: '1px solid #FDE68A' }} />
        <div style={{ position: 'absolute', right: 48, bottom: 92, width: 140, height: 80, background: '#D1FAE5', borderRadius: 18, opacity: 0.9, border: '1px solid #A7F3D0' }} />
        <div style={{ position: 'absolute', left: '50%', top: '50%', width: 8, height: 8, background: C.sky, borderRadius: 999, transform: 'translate(-50%,-50%)', boxShadow: `0 0 12px ${C.sky}` }} />
        <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', boxShadow: 'inset 0 0 40px rgba(14,165,233,0.18)' }} />
      </div>
      <div
        style={{
          position: 'absolute',
          left: 56,
          top: 118,
          width: 520,
          background: 'rgba(255,255,255,0.96)',
          border: CARD_BORDER,
          borderRadius: 32,
          padding: '22px 22px',
          boxShadow: CARD_SHADOW,
          opacity: interpolate(s, [0, 1], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }),
          translate: interpolate(s, [0, 1], ['0px 16px', '0px 0px'], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }) as unknown as string,
        }}
      >
        <div style={{ fontFamily: FONT_INTER, fontSize: 11, letterSpacing: '0.18em', color: C.sky, fontWeight: 700 }}>05 · CESIUM · LANDSCAPE SIM</div>
        <div style={{ fontFamily: FONT_DISPLAY, fontStyle: 'italic', fontSize: 44, lineHeight: 0.95, color: C.ink, marginTop: 6, fontWeight: 400 }}>
          Globe <span style={{ color: C.sky }}>flythrough</span>
        </div>
        <div style={{ marginTop: 12, display: 'flex', gap: 10 }}>
          <div style={{ flex: 1, background: C.slate, border: CARD_BORDER, borderRadius: 16, padding: '10px 12px', textAlign: 'center' }}>
            <div style={{ fontFamily: FONT_INTER, fontSize: 10, letterSpacing: '0.12em', color: C.muted }}>ALTITUDE</div>
            <div style={{ fontFamily: FONT_OUTFIT, fontWeight: 500, fontSize: 16, color: C.ink, marginTop: 2 }}>{Math.round(alt)} m</div>
            <div style={{ fontFamily: FONT_INTER, fontSize: 11, color: C.muted }}>4600 → 4300</div>
          </div>
          <div style={{ flex: 1, background: 'white', border: CARD_BORDER, borderRadius: 16, padding: '10px 12px', textAlign: 'center' }}>
            <div style={{ fontFamily: FONT_INTER, fontSize: 10, letterSpacing: '0.12em', color: C.muted }}>PITCH</div>
            <div style={{ fontFamily: FONT_OUTFIT, fontWeight: 500, fontSize: 16, color: C.ink, marginTop: 2 }}>{pitch.toFixed(1)}°</div>
            <div style={{ fontFamily: FONT_INTER, fontSize: 11, color: C.muted }}>landscape</div>
          </div>
        </div>
        <div style={{ marginTop: 12, fontFamily: FONT_INTER, fontSize: 11, lineHeight: 1.6, color: C.muted, background: C.cream, border: CARD_BORDER, padding: '8px 10px', borderRadius: 12 }}>
          TODO Cesium thật: MapTiler <span style={{ color: C.ink, fontWeight: 700 }}>terrain-quantized-mesh-v2 + satellite-v2</span> · preserveDrawingBuffer + delayRender + globe.tilesLoaded
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          right: 56,
          bottom: 42,
          background: 'rgba(255,255,255,0.96)',
          border: CARD_BORDER,
          borderRadius: 16,
          padding: '10px 14px',
          boxShadow: CARD_SHADOW,
          display: 'flex',
          gap: 12,
          alignItems: 'center',
          opacity: interpolate(spring({ frame: frame - 10, fps: FPS, config: SPRING_CFG }), [0, 1], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }),
        }}
      >
        <span style={{ width: 10, height: 10, borderRadius: 999, background: C.sky, boxShadow: `0 0 10px ${C.sky}` }} />
        <span style={{ fontFamily: FONT_OUTFIT, fontWeight: 500, fontSize: 12, color: C.ink }}>lookAhead 1.2 km · travel 18 km · smoothing 3</span>
      </div>
    </AbsoluteFill>
  );
};

// ═══════════════════════════════════════════════════════════
// S06 — Cesium Terrain Canyon alt3200→2800 exaggeration1.25
// ═══════════════════════════════════════════════════════════
const S06_Canyon: React.FC = () => {
  const frame = useCurrentFrame();
  const s = spring({ frame, fps: FPS, config: SPRING_CFG });
  const alt = interpolate(frame, [0, 219], [3200, 2800], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER });
  const exagger = 1.25;
  return (
    <AbsoluteFill style={{ background: C.cream }}>
      <LightMesh variant={4} />
      <LightGrid opacity={0.05} />
      <LightFrame />
      <TopBar idx={5} title="TERRAIN CANYON" subtitle={`Cesium terrain · alt 3200→2800 m · exaggeration ${exagger} · simulated`} />
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" style={{ position: 'absolute', inset: 0 }}>
        {/* canyon walls — light */}
        <path
          d={`M 0 420 Q 360 ${340 - alt / 200} 720 380 Q 960 420 1200 360 Q 1520 300 1920 380 L 1920 680 Q 1520 620 1200 660 Q 960 700 720 680 Q 360 640 0 680 Z`}
          fill="white"
          stroke={C.line}
          strokeWidth={1.5}
        />
        <path d="M 0 680 Q 480 620 960 660 T 1920 680 L 1920 1080 L 0 1080 Z" fill="#FEF3C7" opacity={0.9} />
        <path d="M 0 420 Q 480 360 960 420 T 1920 380 L 1920 0 L 0 0 Z" fill="#E0F2FE" opacity={0.7} />
        {/* exaggerated relief lines */}
        {[0, 1, 2, 3].map((i) => (
          <path
            key={i}
            d={`M 0 ${480 + i * 28} Q 480 ${460 + i * 28 - (exagger - 1) * 18} 960 ${480 + i * 28} T 1920 ${480 + i * 28}`}
            fill="none"
            stroke={i === 1 ? C.amber : C.line}
            strokeWidth={i === 1 ? 2 : 1}
            opacity={0.7 - i * 0.12}
          />
        ))}
        {/* river */}
        <path d="M 0 620 Q 640 600 960 620 T 1920 620" fill="none" stroke={C.sky} strokeWidth={4} opacity={0.9} />
        <path d="M 0 620 Q 640 600 960 620 T 1920 620" fill="none" stroke="white" strokeWidth={1.2} opacity={0.8} strokeDasharray="10 12" />
        {/* camera path */}
        <path d="M 180 560 Q 960 480 1740 560" fill="none" stroke={C.ink} strokeWidth={2} strokeDasharray="14 10" opacity={0.85} />
        {/* TODO Cesium canyon: <CesiumFlythrough mode="landscape" altitudeStart={3200} altitudeEnd={2800} exaggeration={1.25} /> */}
      </svg>
      <div
        style={{
          position: 'absolute',
          left: 56,
          top: 118,
          width: 520,
          background: 'rgba(255,255,255,0.96)',
          border: CARD_BORDER,
          borderRadius: 32,
          padding: '22px 22px',
          boxShadow: CARD_SHADOW,
          opacity: interpolate(s, [0, 1], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }),
          scale: interpolate(s, [0, 1], [0.96, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }) as unknown as number,
          translate: interpolate(s, [0, 1], ['0px 16px', '0px 0px'], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }) as unknown as string,
        }}
      >
        <div style={{ fontFamily: FONT_INTER, fontSize: 11, letterSpacing: '0.18em', color: C.amber, fontWeight: 700 }}>06 · CESIUM · CANYON SIM</div>
        <div style={{ fontFamily: FONT_DISPLAY, fontStyle: 'italic', fontSize: 44, lineHeight: 0.95, color: C.ink, marginTop: 6, fontWeight: 400 }}>
          Terrain <span style={{ color: C.amber }}>canyon</span>
        </div>
        <div style={{ marginTop: 12, display: 'flex', gap: 10 }}>
          <div style={{ flex: 1, background: C.slate, border: CARD_BORDER, borderRadius: 16, padding: '10px 12px', textAlign: 'center' }}>
            <div style={{ fontFamily: FONT_INTER, fontSize: 10, letterSpacing: '0.12em', color: C.muted }}>ALTITUDE</div>
            <div style={{ fontFamily: FONT_OUTFIT, fontWeight: 500, fontSize: 16, color: C.ink, marginTop: 2 }}>{Math.round(alt)} m</div>
            <div style={{ fontFamily: FONT_INTER, fontSize: 11, color: C.muted }}>3200 → 2800</div>
          </div>
          <div style={{ flex: 1, background: C.amberSoft, border: `1px solid ${C.amber}30`, borderRadius: 16, padding: '10px 12px', textAlign: 'center' }}>
            <div style={{ fontFamily: FONT_INTER, fontSize: 10, letterSpacing: '0.12em', color: C.muted }}>EXAGGERATION</div>
            <div style={{ fontFamily: FONT_OUTFIT, fontWeight: 500, fontSize: 16, color: C.ink, marginTop: 2 }}>{exagger.toFixed(2)}×</div>
            <div style={{ fontFamily: FONT_INTER, fontSize: 11, color: C.amber, fontWeight: 700 }}>terrain ×1.25</div>
          </div>
        </div>
        <div style={{ marginTop: 12, fontFamily: FONT_INTER, fontSize: 11, lineHeight: 1.6, color: C.muted, background: 'white', border: CARD_BORDER, padding: '8px 10px', borderRadius: 12 }}>
          TODO Cesium thật: <span style={{ color: C.ink, fontWeight: 700 }}>viewer.scene.globe.terrainExaggeration = 1.25</span> · tilesLoaded settle + delayRender
        </div>
      </div>
      {/* cross-section card */}
      <div
        style={{
          position: 'absolute',
          right: 56,
          top: 140,
          width: 460,
          background: 'white',
          border: CARD_BORDER,
          borderRadius: 24,
          padding: 16,
          boxShadow: CARD_SHADOW,
          opacity: interpolate(spring({ frame: frame - 8, fps: FPS, config: SPRING_CFG }), [0, 1], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }),
          scale: interpolate(spring({ frame: frame - 8, fps: FPS, config: SPRING_CFG }), [0, 1], [0.96, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }) as unknown as number,
        }}
      >
        <div style={{ fontFamily: FONT_OUTFIT, fontWeight: 500, fontSize: 12, letterSpacing: '0.08em', color: C.ink }}>CROSS-SECTION · EXAGGERATION</div>
        <svg width="100%" height="120" viewBox="0 0 420 120" style={{ marginTop: 10 }}>
          <rect x="0" y="0" width="420" height="120" rx={12} fill={C.slate} stroke={C.line} />
          <path d="M 20 90 Q 120 30 210 70 Q 300 100 400 60" fill="none" stroke={C.amber} strokeWidth={3} />
          <path d="M 20 90 Q 120 50 210 70 Q 300 90 400 60" fill="none" stroke={C.line} strokeWidth={1.5} strokeDasharray="6 6" opacity={0.7} />
          <text x={210} y={18} textAnchor="middle" fontFamily={FONT_INTER} fontSize={10} fill={C.muted}>
            1.0× dashed vs 1.25× solid
          </text>
          <circle cx={210} cy={70} r={5} fill={C.sky} stroke="white" strokeWidth={2} />
        </svg>
      </div>
    </AbsoluteFill>
  );
};

// ═══════════════════════════════════════════════════════════
// S07 — Outro CTA hybrid (2 thumb cards MapLibre free vs Cesium 3D)
// ═══════════════════════════════════════════════════════════
const S07_Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const s = spring({ frame, fps: FPS, config: SPRING_CFG });
  const btnPulse = 1 + 0.015 * Math.sin(frame / 6);
  return (
    <AbsoluteFill style={{ background: C.slate }}>
      <LightMesh variant={5} />
      <LightGrid opacity={0.05} />
      <LightFrame />
      <TopBar idx={6} title="OUTRO · HYBRID CTA" subtitle="2 thumb cards · MapLibre free vs Cesium 3D · light" />
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: 116,
          width: 1200,
          transform: 'translateX(-50%)',
          textAlign: 'center',
          opacity: interpolate(s, [0, 1], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }),
          translate: interpolate(s, [0, 1], ['0px 16px', '0px 0px'], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }) as unknown as string,
          scale: interpolate(s, [0, 1], [0.96, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }) as unknown as number,
        }}
      >
        <div style={{ fontFamily: FONT_INTER, fontSize: 11, letterSpacing: '0.22em', color: C.sky, fontWeight: 700 }}>07 · OUTRO · HYBRID</div>
        <div style={{ fontFamily: FONT_DISPLAY, fontStyle: 'italic', fontSize: 64, lineHeight: 0.95, color: C.ink, marginTop: 8, fontWeight: 400 }}>
          Chọn <span style={{ color: C.sky }}>bản đồ</span> cho dự án của bạn
        </div>
        <div style={{ fontFamily: FONT_INTER, fontSize: 16, lineHeight: 1.6, color: C.muted, marginTop: 10, maxWidth: 760, marginLeft: 'auto', marginRight: 'auto' }}>
          So sánh trực quan · cùng chassis sáng · MapLibre miễn phí cho 2D · Cesium cho 3D flythrough · cùng motion spring 26/85
        </div>
      </div>
      <div style={{ position: 'absolute', left: 56, right: 56, top: 320, display: 'flex', gap: 24, justifyContent: 'center' }}>
        {/* Card MapLibre */}
        <div
          style={{
            flex: 1,
            maxWidth: 640,
            background: 'white',
            border: CARD_BORDER,
            borderRadius: 32,
            overflow: 'hidden',
            boxShadow: CARD_SHADOW,
            opacity: interpolate(spring({ frame: frame - 8, fps: FPS, config: SPRING_CFG }), [0, 1], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }),
            scale: interpolate(spring({ frame: frame - 8, fps: FPS, config: SPRING_CFG }), [0, 1], [0.96, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }) as unknown as number,
            translate: interpolate(spring({ frame: frame - 8, fps: FPS, config: SPRING_CFG }), [0, 1], ['0px 16px', '0px 0px'], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }) as unknown as string,
          }}
        >
          <div style={{ height: 260, background: C.slate, position: 'relative', overflow: 'hidden', borderBottom: CARD_BORDER }}>
            {/* TODO thumb MapLibre: <CanvasImage src={staticFile('thumbs/maplibre-light.jpg')} /> */}
            <svg width="100%" height="100%" viewBox="0 0 640 260">
              <rect x="0" y="0" width="640" height="260" fill={C.slate} />
              <line x1="0" y1="130" x2="640" y2="130" stroke={C.line} strokeWidth={8} />
              <line x1="320" y1="0" x2="320" y2="260" stroke={C.line} strokeWidth={8} />
              <circle cx="320" cy="130" r={54} fill="white" stroke={C.sky} strokeWidth={3} />
              <circle cx="320" cy="130" r={10} fill={C.sky} />
              <g opacity={0.9}>
                <circle cx={240} cy={90} r={8} fill={C.sky} stroke="white" strokeWidth={2} />
                <circle cx={400} cy={170} r={8} fill={C.mint} stroke="white" strokeWidth={2} />
                <line x1="240" y1="90" x2="400" y2="170" stroke={C.sky} strokeWidth={2} strokeDasharray="8 6" />
              </g>
            </svg>
            <div style={{ position: 'absolute', left: 14, top: 14, fontFamily: FONT_OUTFIT, fontWeight: 500, fontSize: 11, letterSpacing: '0.08em', color: C.ink, background: 'white', border: CARD_BORDER, padding: '6px 10px', borderRadius: 999, boxShadow: '0 2px 12px rgba(28,25,23,0.06)' }}>
              ● MAPLIBRE · FREE · NO KEY
            </div>
            <div style={{ position: 'absolute', right: 14, bottom: 14, fontFamily: FONT_INTER, fontSize: 10, color: C.muted, background: 'rgba(255,255,255,0.92)', border: CARD_BORDER, padding: '4px 8px', borderRadius: 8 }}>demotiles · 6 markers</div>
          </div>
          <div style={{ padding: '22px 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 12, background: C.skySoft, border: `1px solid ${C.sky}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🗺️</div>
              <div>
                <div style={{ fontFamily: FONT_OUTFIT, fontWeight: 500, fontSize: 18, color: C.ink, lineHeight: 1 }}>MapLibre Free</div>
                <div style={{ fontFamily: FONT_INTER, fontSize: 12, color: C.muted }}>2D · markers · heatmap · line greatCircle</div>
              </div>
              <span style={{ marginLeft: 'auto', fontFamily: FONT_OUTFIT, fontWeight: 500, fontSize: 12, color: C.mint, background: C.mintSoft, border: `1px solid ${C.mint}30`, padding: '6px 10px', borderRadius: 999 }}>FREE</span>
            </div>
            <div style={{ marginTop: 14, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['cluster 6 pins', 'heatmap 180', 'greatCircle 1138 km'].map((k) => (
                <span key={k} style={{ fontFamily: FONT_INTER, fontSize: 11, color: C.muted, background: C.slate, border: CARD_BORDER, padding: '6px 10px', borderRadius: 999 }}>{k}</span>
              ))}
            </div>
            <div style={{ marginTop: 16, display: 'flex', gap: 10 }}>
              <div style={{ flex: 1, height: 44, borderRadius: 999, background: C.ink, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_OUTFIT, fontWeight: 500, fontSize: 13, color: 'white', letterSpacing: '0.04em', transform: `scale(${btnPulse})`, boxShadow: '0 8px 20px rgba(28,25,23,0.12)' }}>Dùng MapLibre →</div>
              <div style={{ width: 44, height: 44, borderRadius: 999, background: 'white', border: CARD_BORDER, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>↗</div>
            </div>
          </div>
        </div>
        {/* Card Cesium */}
        <div
          style={{
            flex: 1,
            maxWidth: 640,
            background: 'white',
            border: `1px solid ${C.sky}30`,
            borderRadius: 32,
            overflow: 'hidden',
            boxShadow: `0 8px 32px rgba(14,165,233,0.12), ${CARD_SHADOW}`,
            opacity: interpolate(spring({ frame: frame - 14, fps: FPS, config: SPRING_CFG }), [0, 1], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }),
            scale: interpolate(spring({ frame: frame - 14, fps: FPS, config: SPRING_CFG }), [0, 1], [0.96, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }) as unknown as number,
            translate: interpolate(spring({ frame: frame - 14, fps: FPS, config: SPRING_CFG }), [0, 1], ['0px 16px', '0px 0px'], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }) as unknown as string,
          }}
        >
          <div style={{ height: 260, background: '#F0F9FF', position: 'relative', overflow: 'hidden', borderBottom: `1px solid ${C.sky}20` }}>
            {/* TODO thumb Cesium: <CanvasImage src={staticFile('thumbs/cesium-terrain.jpg')} /> + CesiumFlythrough */}
            <svg width="100%" height="100%" viewBox="0 0 640 260">
              <rect x="0" y="0" width="640" height="260" fill="#E0F2FE" />
              <path d="M 0 180 Q 200 120 320 150 Q 460 180 640 140 L 640 260 L 0 260 Z" fill="white" stroke={C.line} strokeWidth={1} />
              <path d="M 0 200 Q 200 160 320 180 Q 460 200 640 170 L 640 260 L 0 260 Z" fill="#FEF3C7" opacity={0.95} />
              <path d="M 80 160 Q 320 90 560 160" fill="none" stroke={C.ink} strokeWidth={2} strokeDasharray="10 8" />
              <circle cx="320" cy="130" r={10} fill={C.amber} stroke="white" strokeWidth={2} />
              <path d="M 320 130 L 360 100" stroke={C.amber} strokeWidth={2} />
            </svg>
            <div style={{ position: 'absolute', left: 14, top: 14, fontFamily: FONT_OUTFIT, fontWeight: 500, fontSize: 11, letterSpacing: '0.08em', color: 'white', background: C.sky, padding: '6px 10px', borderRadius: 999, boxShadow: '0 4px 16px rgba(14,165,233,0.3)' }}>● CESIUM · 3D · TERRAIN</div>
            <div style={{ position: 'absolute', right: 14, bottom: 14, fontFamily: FONT_INTER, fontSize: 10, color: C.muted, background: 'rgba(255,255,255,0.92)', border: CARD_BORDER, padding: '4px 8px', borderRadius: 8 }}>4600→2800 m · ×1.25</div>
          </div>
          <div style={{ padding: '22px 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 12, background: C.amberSoft, border: `1px solid ${C.amber}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🏔️</div>
              <div>
                <div style={{ fontFamily: FONT_OUTFIT, fontWeight: 500, fontSize: 18, color: C.ink, lineHeight: 1 }}>Cesium 3D</div>
                <div style={{ fontFamily: FONT_INTER, fontSize: 12, color: C.muted }}>globe · flythrough · canyon exaggeration</div>
              </div>
              <span style={{ marginLeft: 'auto', fontFamily: FONT_OUTFIT, fontWeight: 500, fontSize: 12, color: C.sky, background: C.skySoft, border: `1px solid ${C.sky}30`, padding: '6px 10px', borderRadius: 999 }}>3D</span>
            </div>
            <div style={{ marginTop: 14, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['globe 4600→4300', 'canyon 3200→2800', '×1.25 exaggeration'].map((k) => (
                <span key={k} style={{ fontFamily: FONT_INTER, fontSize: 11, color: C.muted, background: C.cream, border: CARD_BORDER, padding: '6px 10px', borderRadius: 999 }}>{k}</span>
              ))}
            </div>
            <div style={{ marginTop: 16, display: 'flex', gap: 10 }}>
              <div style={{ flex: 1, height: 44, borderRadius: 999, background: C.sky, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_OUTFIT, fontWeight: 500, fontSize: 13, color: 'white', letterSpacing: '0.04em', boxShadow: '0 8px 20px rgba(14,165,233,0.25)', transform: `scale(${btnPulse})` }}>Dùng Cesium 3D →</div>
              <div style={{ width: 44, height: 44, borderRadius: 999, background: 'white', border: `1px solid ${C.sky}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, color: C.sky }}>↗</div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          left: '50%',
          bottom: 28,
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 10,
          alignItems: 'center',
          background: 'rgba(255,255,255,0.92)',
          border: CARD_BORDER,
          padding: '10px 16px',
          borderRadius: 999,
          boxShadow: CARD_SHADOW,
          opacity: interpolate(spring({ frame: frame - 20, fps: FPS, config: SPRING_CFG }), [0, 1], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: BEZIER }),
        }}
      >
        <span style={{ fontFamily: FONT_INTER, fontSize: 11, letterSpacing: '0.08em', color: C.muted }}>1920×1080 · 30FPS · 1540F · HARNESS LIGHT</span>
        <span style={{ width: 4, height: 4, borderRadius: 999, background: C.sky }} />
        <span style={{ fontFamily: FONT_OUTFIT, fontWeight: 500, fontSize: 11, color: C.ink }}>MapHarness95Light</span>
      </div>
    </AbsoluteFill>
  );
};

// ── Main composition — AbsoluteFill + Sequence accumulated from ──
export const MapHarness95Light: React.FC = () => {
  const scenes = [S01_StaticLight, S02_MarkerCluster, S03_Heatmap, S04_LineRoute, S05_GlobeFly, S06_Canyon, S07_Outro] as const;
  return (
    <AbsoluteFill style={{ background: C.cream }}>
      {scenes.map((Scene, i) => (
        <Sequence key={i} from={OFFSETS[i]} durationInFrames={DURATIONS[i]} layout="absolute-fill">
          {/* chassis bg alternating */}
          <AbsoluteFill style={{ background: i % 2 === 0 ? C.cream : C.slate }}>
            <Scene />
          </AbsoluteFill>
        </Sequence>
      ))}
      {/* global frame */}
      <div style={{ position: 'absolute', left: 10, top: 10, right: 10, bottom: 10, border: '1px solid rgba(231,229,228,0.9)', borderRadius: 32, pointerEvents: 'none', opacity: 0.5 }} />
    </AbsoluteFill>
  );
};
