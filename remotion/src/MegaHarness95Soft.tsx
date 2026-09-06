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

// ── PALETTE A — Warm Light — SOFT — tokens chính xác theo spec ──
// --cream:#FFFBF5; --stone:#F8F5F0; --line:#E7E5E4; --ink:#1C1917; --muted:#78716C; --sky:#0EA5E9; --skySoft:#E0F2FE;
// BG #FFFBF5 + mesh gradient mờ, Card radius 24/32 border 1px #E7E5E4 shadow diffused blur 12-16, Rail 1px #E7E5E4
const C = {
  cream: '#FFFBF5',
  stone: '#F8F5F0',
  line: '#E7E5E4',
  ink: '#1C1917',
  ink2: '#1C1917',
  muted: '#78716C',
  sky: '#0EA5E9',
  skySoft: '#E0F2FE',
  // compat aliases (warm-light derived, keeps scenes working without breaking structure)
  bg: '#FFFBF5',
  border: '#E7E5E4',
  borderSoft: 'rgba(231,229,228,0.6)',
  shadow: '0 12px 32px rgba(28,25,23,0.06)',
  steel: '#78716C',
  signal: '#0EA5E9',
  signalSoft: '#E0F2FE',
  hazard: '#F8F5F0',
  hazardStrong: '#E7E5E4',
  hazardLine: '#E7E5E4',
  cam: '#0EA5E9',
  camSoft: '#E0F2FE',
  violet: '#0EA5E9',
  violetSoft: '#E0F2FE',
  green: '#0EA5E9',
  greenSoft: '#E0F2FE',
  yellow: '#F8F5F0',
  cyan: '#0EA5E9',
  cyanSoft: '#E0F2FE',
  pink: '#E0F2FE',
  amber: '#F8F5F0',
  amberSoft: '#FFFBF5',
  lavender: '#E0F2FE',
  rose: '#E0F2FE',
} as const;

const W = 1920;
const H = 1080;
const FPS = 30;

// 26 scenes durations as briefed
export const DURATIONS = [
  150, // S1 Blueprint Ignition
  120, // S2 Kinetic Stagger
  120, // S3 Typewriter Mono
  90,  // S4 Glitch Title
  240, // S5 Bar Race Storm
  150, // S6 Candlestick Pulse
  120, // S7 Gauge Sprint
  195, // S8 Heatmap Matrix
  195, // S9 Radar Web
  150, // S10 Waterfall Ledger
  120, // S11 KPI Counter
  180, // S12 Parallax Depth
  150, // S13 Lens Flare Sweep
  195, // S14 Letterbox Chase
  150, // S15 Bento Grid
  195, // S16 Feature Timeline
  120, // S17 Card Stack 3D
  120, // S18 Split Reveal
  120, // S19 Emblem Spin
  120, // S20 Stroke Minimal
  150, // S21 Phone Mockup
  150, // S22 Media Carousel
  195, // S23 Particle Field
  150, // S24 Gradient Mesh
  90,  // S25 Transition Sampler
  180, // S26 Finale CTA
];
const SPEC_TOTAL = DURATIONS.reduce((a, b) => a + b, 0); // 3915
export const TOTAL_FRAMES = 6300; // spec says 6300f =210s
export const PAD_FRAMES = TOTAL_FRAMES - SPEC_TOTAL; // 2385 pad into finale hold

// Soft accents per 26 scenes — pastel mapping
const ACCENTS = [
  '#0EA5E9', //1 Blueprint — peach soft
  '#0EA5E9', //2 Kinetic — peach
  '#0EA5E9', //3 Typewriter — lavender
  '#0EA5E9', //4 Glitch — mint
  '#0EA5E9', //5 Bar Race — peach
  '#0EA5E9', //6 Candlestick — sky-soft
  '#F8F5F0', //7 Gauge — amber-soft
  '#0EA5E9', //8 Heatmap — rose-soft
  '#0EA5E9', //9 Radar — lavender-soft
  '#0EA5E9', //10 Waterfall — mint
  '#F8F5F0', //11 KPI — amber-soft
  '#0EA5E9', //12 Parallax — peach
  '#0EA5E9', //13 Lens Flare — sky
  '#F8F5F0', //14 Letterbox — cream/amber-soft
  '#E0F2FE', //15 Bento — lavender pale
  '#0EA5E9', //16 Timeline — mint
  '#0EA5E9', //17 Card Stack — peach
  '#0EA5E9', //18 Split Reveal — sky
  '#F8F5F0', //19 Emblem — amber
  '#E7E5E4', //20 Stroke — border soft
  '#0EA5E9', //21 Phone — lavender
  '#0EA5E9', //22 Carousel — peach
  '#0EA5E9', //23 Particle — sky
  '#F8F5F0', //24 Gradient Mesh — amber
  '#0EA5E9', //25 Transition — rose
  '#F8F5F0', //26 Finale — amber-soft
];

// ── TYPOGRAPHY — SOFT ──
// Headline: Instrument Serif Italic 400 / Heading: Outfit 500 tracking +0.02em / Body: Inter 400 15px 1.6 / Mono: JetBrains Mono 400-500
const FONT_DISPLAY = "'Instrument Serif', serif";
const FONT_HEADING = "'Outfit', system-ui, sans-serif";
const FONT_BODY = "'Inter', system-ui, sans-serif";
const FONT_GROTESK = FONT_HEADING; // compat alias for soft (was Space Grotesk)
const FONT_MONO = "'JetBrains Mono', monospace";

const FontStyles: React.FC = () => (
  <style>{`@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Outfit:wght@400;500&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap');`}</style>
);

// ——— Helpers — SOFT MOTION — damping 26 / stiffness 85 / mass 0.8 / bezier(0.25,0.8,0.25,1) — entrance 20f y12->0 scale0.96->1 exit 16f ───
const SOFT_SPRING = { damping: 26, stiffness: 85, mass: 0.8 } as const;
const SOFT_EASING = Easing.bezier(0.25, 0.8, 0.25, 1);
// entrance spec: opacity 0->1 over 20f, y 12->0, scale 0.96->1
const softEntranceOpacity = (f)=> interpolate(f,[0,20],[0,1],{extrapolateRight:'clamp', easing:SOFT_EASING});
const softEntranceY = (f)=> interpolate(f,[0,20],[12,0],{extrapolateRight:'clamp', easing:SOFT_EASING});
const softEntranceScale = (f)=> interpolate(f,[0,20],[0.96,1],{extrapolateRight:'clamp', easing:SOFT_EASING});

const useSpring = (delay = 0) => {
  const frame = useCurrentFrame();
  return spring({ frame: frame - delay, fps: FPS, config: SOFT_SPRING });
};

// Soft entrance helper: opacity 0->1 over 20f, y 12->0, scale 0.96->1 with Easing.bezier(0.25,0.8,0.25,1) + spring damping:26 stiffness:85 mass:0.8
const useSoftEntrance = (delay = 0) => {
  const frame = useCurrentFrame();
  const p = spring({ frame: frame - delay, fps: FPS, config: SOFT_SPRING });
  const opacity = interpolate(p, [0, 1], [0, 1]);
  const y = interpolate(p, [0, 1], [12, 0]);
  const scale = interpolate(p, [0, 1], [0.96, 1]);
  return { p, opacity, y, scale };
};

// SOFT CHASSIS — gradient mesh mờ 3 màu blur 40px (thay dot-grid 24px)
const BlueprintGrid: React.FC<{ opacity?: number }> = ({ opacity = 0.6 }) => (
  <div style={{ position: 'absolute', inset: 0, opacity, pointerEvents: 'none', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', left: '-12%', top: '-18%', width: '68%', height: '68%', background: 'radial-gradient(circle at 30% 30%, rgba(224,242,254,0.85) 0%, rgba(224,242,254,0) 68%)', filter: 'blur(16px)', borderRadius: '50%' }} />
    <div style={{ position: 'absolute', right: '-10%', top: '4%', width: '62%', height: '62%', background: 'radial-gradient(circle at 70% 30%, rgba(254,243,199,0.75) 0%, rgba(254,243,199,0) 68%)', filter: 'blur(16px)', borderRadius: '50%' }} />
    <div style={{ position: 'absolute', left: '18%', bottom: '-14%', width: '72%', height: '72%', background: 'radial-gradient(circle at 50% 50%, rgba(224,231,255,0.70) 0%, rgba(224,231,255,0) 68%)', filter: 'blur(16px)', borderRadius: '50%' }} />
  </div>
);
const SoftGradientMesh = BlueprintGrid;

// SOFT FRAME — 1px #E7E5E4 + shadow diffused, radius 24-32, blur 12-20
const BlueprintFrame: React.FC = () => (
  <>
    <div style={{ position: 'absolute', left: 18, top: 18, right: 18, bottom: 18, border: '1px solid #E7E5E4', pointerEvents: 'none', borderRadius: 24, boxShadow: '0 12px 24px rgba(28,25,23,0.08)', background: 'rgba(255,251,245,0.02)' }} />
    <div style={{ position: 'absolute', left: 28, top: 28, right: 28, bottom: 28, border: '1px solid rgba(231,229,228,0.6)', pointerEvents: 'none', borderRadius: 20, opacity: 0.5 }} />
    {[
      { left: 18, top: 18, borderTop: '1px solid #E7E5E4', borderLeft: '1px solid #E7E5E4', borderTopLeftRadius: 24 },
      { right: 18, top: 18, borderTop: '1px solid #E7E5E4', borderRight: '1px solid #E7E5E4', borderTopRightRadius: 24 },
      { left: 18, bottom: 18, borderBottom: '1px solid #E7E5E4', borderLeft: '1px solid #E7E5E4', borderBottomLeftRadius: 24 },
      { right: 18, bottom: 18, borderBottom: '1px solid #E7E5E4', borderRight: '1px solid #E7E5E4', borderBottomRightRadius: 24 },
    ].map((s: any, i) => (
      <div key={i} style={{ position: 'absolute', width: 28, height: 28, opacity: 0.6, ...s, boxShadow: '0 4px 16px rgba(28,25,23,0.06)' }} />
    ))}
  </>
);
const SoftFrame = BlueprintFrame;

const LeftRail: React.FC<{ active: number }> = ({ active }) => {
  const frame = useCurrentFrame();
  const sweep = spring({ frame, fps: FPS, config: { damping: 26, stiffness: 85, mass: 0.8 } });
  const labels = ['INTRO','KINETIC','DATA','CINE','CONTENT','LOGO','BG','FINALE'];
  const actForScene = (idx:number)=>{
    if(idx===0) return 0;
    if(idx<=3) return 1;
    if(idx<=10) return 2;
    if(idx<=13) return 3;
    if(idx<=17) return 4;
    if(idx<=21) return 5;
    if(idx<=23) return 6;
    return 7;
  };
  const curAct = actForScene(active);
  return (
    <div style={{ position: 'absolute', left: 0, top: 0, width: 72, height: H, background: 'rgba(255,251,245,0.7)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderRight: '1px solid #E7E5E4', borderRightWidth: 1, opacity: 0.98, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 18, zIndex: 10, boxShadow: '0 12px 24px rgba(28,25,23,0.08)' }}>
      <div style={{ position: 'absolute', left: 35, top: 0, width: 1, height: H * sweep, background: 'linear-gradient(180deg, #0EA5E9 0%, #0EA5E9 55%, rgba(231,229,228,0.6) 100%)', opacity: 0.6, transformOrigin: 'top', filter: 'blur(1px)' }} />
      <div style={{ position: 'absolute', left: 72, top: 0, width: 1, height: H, background: '#E7E5E4', opacity: 0.6, filter: 'blur(1px)' }} />
      <div style={{ position: 'absolute', left: 32, top: interpolate(sweep,[0,1],[0,H-18]), width: 8, height: 8, borderRadius: 999, background: '#0EA5E9', boxShadow: '0 0 12px rgba(252,165,165,0.4)', opacity: interpolate(sweep,[0,0.05,1],[0,1,1]) }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginTop: 28, width: '100%' }}>
        {labels.map((lab,i)=>{
          const isActive = i===curAct;
          return (
            <div key={lab} style={{ height: 120, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, opacity: interpolate(sweep,[0,0.12+i*0.04,0.22+i*0.04],[0,0,1]) }}>
              <div style={{ fontFamily: FONT_MONO, fontSize: 11, fontWeight: 500, letterSpacing: '0.06em', color: isActive? '#1C1917': 'rgba(255,251,245,0.6)', background: isActive? '#F8F5F0':'rgba(231,229,228,0.5)', border: '1px solid #E7E5E4', borderRadius: 999, padding: '4px 0', width: 34, textAlign:'center', lineHeight:1.2, boxShadow: isActive? '0 4px 16px rgba(28,25,23,0.08)': undefined }}>{String(i+1).padStart(2,'0')}</div>
              <div style={{ writingMode:'vertical-rl', textOrientation:'mixed', fontFamily: FONT_MONO, fontSize: 11, letterSpacing:'0.18em', color: isActive? '#1C1917': '#78716C', background: isActive?'rgba(254,243,199,0.6)':'transparent', padding:'6px 2px', transform:'rotate(180deg)', fontWeight:500 }}>{lab}</div>
              <div style={{ width:1, flex:1, marginTop:6, background: isActive? '#F8F5F0':'rgba(231,229,228,0.6)', filter: isActive? 'blur(0px)':'blur(0.5px)' }} />
            </div>
          );
        })}
      </div>
      <div style={{ position:'absolute', bottom:18, left:0, width:'100%', display:'flex', justifyContent:'center' }}>
        <div style={{ writingMode:'vertical-rl', fontFamily: FONT_MONO, fontSize:10, letterSpacing:'0.14em', color:'rgba(148,163,184,0.7)', transform:'rotate(180deg)', fontWeight:400 }}>1920×1080 · 30FPS · 6300F</div>
      </div>
    </div>
  );
};

const TopBar: React.FC<{ idx:number; title:string; subtitle?:string }> = ({ idx, title, subtitle }) => {
  const accent = ACCENTS[idx];
  const p = useSpring(0);
  return (
    <div style={{ position:'absolute', left: 72+20, right:20, top:16, height:40, border:'1px solid #E7E5E4', background:'rgba(255,251,245,0.7)', borderRadius:24, backdropFilter:'blur(16px)', WebkitBackdropFilter:'blur(16px)', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 16px', opacity: interpolate(p,[0,1],[0,1]), transform:`translateY(${interpolate(p,[0,1],[12,0])}px) scale(${interpolate(p,[0,1],[0.96,1])})`, boxShadow:'0 12px 24px rgba(28,25,23,0.08)', fontWeight:400 }}>
      <div style={{ display:'flex', gap:12, alignItems:'center' }}>
        <div style={{ fontFamily: FONT_HEADING, fontSize:13, letterSpacing:'0.02em', color:'#1C1917', fontWeight:500, background:accent, padding:'4px 10px', borderRadius:999, boxShadow:'0 2px 8px rgba(28,25,23,0.06)', lineHeight:1.4 }}>{String(idx+1).padStart(2,'0')} — {title}</div>
        {subtitle && <span style={{ fontFamily: FONT_BODY, fontSize:12, letterSpacing:'0.02em', color:'#78716C', fontWeight:400, lineHeight:1.6 }}>{subtitle}</span>}
      </div>
      <div style={{ fontFamily: FONT_MONO, fontSize:11, letterSpacing:'0.02em', color:'#1C1917', fontWeight:400, border:'1px solid #E7E5E4', padding:'4px 10px', background:'rgba(255,255,255,0.6)', borderRadius:999, lineHeight:1.4 }}>{Math.round(DURATIONS[idx]/30*10)/10}s · {DURATIONS[idx]}F · {accent}</div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════
// SCENES
// ═══════════════════════════════════════════════════════════

// S1 Blueprint Ignition 150f
const S1: React.FC = () => {
  const frame = useCurrentFrame();
  const p = useSpring(0);
  const ring = interpolate(frame,[0,60],[0,1],{extrapolateRight:'clamp', easing:Easing.bezier(0.25,0.8,0.25,1)});
  const titleY = interpolate(p,[0,1],[22,0]);
  return (
    <AbsoluteFill style={{ background: '#FFFBF5' }}>
      <BlueprintGrid opacity={0.14} />
      <BlueprintFrame />
      <TopBar idx={0} title="BLUEPRINT IGNITION" subtitle="ACT I · INTRO · CREAM #FFFBF5 / MESH BLUR 40PX" />
      <div style={{ position:'absolute', left:'50%', top:'50%', width:720, height:720, transform:'translate(-50%,-52%)', pointerEvents:'none' }}>
        {[1,2,3].map(i=>(
          <div key={i} style={{ position:'absolute', left:'50%', top:'50%', width: 240*i, height:240*i, border:`1px solid ${i===1? C.signal: `rgba(231,229,228,0.6)`}`, borderRadius:999, transform:'translate(-50%,-50%)', opacity: interpolate(ring,[0,1],[0,1]) * (1 - (i-1)*0.2), boxShadow: i===1? `0 0 30px ${C.signal}40`: undefined }} />
        ))}
        <div style={{ position:'absolute', left:'50%', top:'50%', width:2, height:720, background:'rgba(231,229,228,0.5)', transform:'translate(-50%,-50%)' }} />
        <div style={{ position:'absolute', left:'50%', top:'50%', width:720, height:2, background:'rgba(231,229,228,0.5)', transform:'translate(-50%,-50%)' }} />
        <div style={{ position:'absolute', left:'50%', top:'50%', width:14, height:14, background:C.signal, borderRadius:999, transform:'translate(-50%,-50%)', boxShadow:`0 0 16px ${C.signal}` , opacity: interpolate(p,[0,1],[0,1]) }} />
      </div>
      <div style={{ position:'absolute', left:72+64, top:220, right:64, opacity: interpolate(p,[0,0.2],[0,1]), transform:`translateY(${titleY}px)` }}>
        <div style={{ fontFamily: FONT_MONO, fontSize:14, letterSpacing:'0.32em', color:C.cyan, fontWeight:500, marginBottom:14 }}>— HARNESS 9.5 ULTRA // SOFT CANVAS</div>
        <div style={{ fontFamily: FONT_DISPLAY, fontStyle:'italic', fontSize:118, lineHeight:0.95, letterSpacing:'-0.03em', color:'#1C1917', fontWeight:500 }}>
          MEGA<br/><span style={{ color:C.hazard }}>HARNESS</span> <span style={{ fontFamily:"'Instrument Serif', serif", fontStyle:'italic', fontWeight:400 }}>9.5</span> <span style={{ color:ACCENTS[0] }}>ULTRA</span>
        </div>
        <div style={{ marginTop:16, width:520, height:3, background:C.line, transformOrigin:'left', transform:`scaleX(${interpolate(p,[0.18,0.55],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'})})` }} />
        <div style={{ marginTop:6, width:520, height:1, background:'rgba(231,229,228,0.6)', transform:`scaleX(${interpolate(p,[0.3,0.65],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'})})`, transformOrigin:'left' }} />
        <div style={{ marginTop:18, display:'flex', gap:10 }}>
          {[
            {k:'SCENES',v:'26'},
            {k:'DURATION',v:'210s · 6300F'},
            {k:'CATEGORIES',v:'9/9 COVER'},
          ].map(s=>(
            <div key={s.k} style={{ border:'1px solid rgba(231,229,228,0.6)', background:'rgba(255,251,245,0.7)', padding:'10px 14px', borderRadius:24, backdropFilter:'blur(16px)' }}>
              <div style={{ fontFamily: FONT_MONO, fontSize:10, letterSpacing:'0.14em', color:'#78716C' }}>{s.k}</div>
              <div style={{ fontFamily: FONT_MONO, fontSize:13, letterSpacing:'0.06em', color:'#1C1917', fontWeight:500, marginTop:2 }}>{s.v}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ position:'absolute', left:72+64, bottom:74, display:'flex', gap:10, opacity: interpolate(useSpring(18),[0,1],[0,1]) }}>
        <div style={{ border:'1px solid rgba(231,229,228,0.6)', background:'rgba(255,251,245,0.7)', padding:'10px 14px', borderRadius:24, display:'flex', gap:14, alignItems:'center' }}>
          <span style={{ fontFamily: FONT_MONO, fontSize:12, letterSpacing:'0.1em', color:'#1C1917', fontWeight:500 }}>17 <span style={{ color:'#78716C', fontWeight:400 }}>MCPs</span></span>
          <span style={{ width:4, height:4, background:C.steel, borderRadius:999 }} />
          <span style={{ fontFamily: FONT_MONO, fontSize:12, letterSpacing:'0.1em', color:'#1C1917', fontWeight:500 }}>31 <span style={{ color:'#78716C', fontWeight:400 }}>Skills</span></span>
          <span style={{ width:4, height:4, background:C.steel, borderRadius:999 }} />
          <span style={{ fontFamily: FONT_GROTESK, fontSize:12, letterSpacing:'0.06em', color:C.cyan, fontWeight:500 }}>SOFT CHASSIS</span>
        </div>
      </div>
      <div style={{ position:'absolute', left:72, right:0, bottom:0, height:28, background:`repeating-linear-gradient(135deg, #F8F5F0 0 8px, #FFFFFF 8px 16px)`, opacity:0.4, borderTop:'2px solid #1C1917', display:'flex', alignItems:'center', paddingLeft:18, justifyContent:'space-between', paddingRight:18 }}>
        <div style={{ fontFamily: FONT_MONO, fontSize:10, letterSpacing:'0.14em', color:'#1C1917', fontWeight:500 }}>▓ HARNESS 9.5 ULTRA — 26 SCENES — MESH 40PX / RAIL 1PX BLUR / BORDER 1PX / SPACE GROTESK + JETBRAINS MONO</div>
        <div style={{ fontFamily: FONT_MONO, fontSize:10, letterSpacing:'0.12em', color:'#1C1917', fontWeight:500 }}>S01 · 150F · {C.cam}</div>
      </div>
    </AbsoluteFill>
  );
};

// S2 Kinetic Stagger 120f
const S2: React.FC = () => {
  const frame = useCurrentFrame();
  const words = ['PERSISTENT','PROFILE','SYSTEM','·','17','MCPs','×','31','SKILLS'];
  return (
    <AbsoluteFill style={{ background: '#FFFBF5' }}>
      <BlueprintGrid opacity={0.1} />
      <BlueprintFrame />
      <TopBar idx={1} title="KINETIC STAGGER" subtitle="TEXT KINETIC · SPRING DAMP 26 / STIFF 85" />
      <div style={{ position:'absolute', left:72+48, right:48, top:120, bottom:56, display:'flex', flexDirection:'column', justifyContent:'center', gap:18 }}>
        <div style={{ display:'flex', flexWrap:'wrap', gap:14, alignItems:'center' }}>
          {words.map((w,i)=>{
            const p = spring({ frame: frame - i*6, fps:FPS, config:{damping:26, stiffness:85, mass:0.8} });
            const accent = i>=4 ? C.cam : C.line;
            return (
              <div key={i} style={{ opacity: interpolate(p,[0,1],[0,1]), transform:`translateY(${interpolate(p,[0,1],[12,0])}px) scale(${interpolate(p,[0,1],[0.96,1])})`, background: w==='·'||w==='×'?'transparent': i<3?'rgba(231,229,228,0.4)': `${C.cam}14`, border:`1px solid ${w==='·'||w==='×'?'transparent': i<3?'rgba(231,229,228,0.8)':`${C.cam}40`}`, padding: w==='·'||w==='×'?'0 2px':'14px 18px', borderRadius:24, fontFamily: w==='·'||w==='×'? FONT_MONO: FONT_GROTESK, fontSize: w==='·'||w==='×'? 32: i<3? 52: 34, fontWeight:500, letterSpacing: i<3?'-0.02em':'0.02em', color: accent }}>{w}</div>
            );
          })}
        </div>
        <div style={{ display:'flex', gap:12, alignItems:'center', marginTop:8 }}>
          {['STAGGER 6F','SPRING','EASING BEZIER'].map((t,i)=>{
            const p = useSpring(48+i*6);
            return <div key={t} style={{ fontFamily: FONT_MONO, fontSize:11, letterSpacing:'0.14em', color:'#78716C', border:'1px solid rgba(231,229,228,0.8)', padding:'6px 10px', borderRadius:999, background:'rgba(255,251,245,0.7)', opacity: interpolate(p,[0,1],[0,1]), transform:`translateY(${interpolate(p,[0,1],[8,0])}px)` }}>{t}</div>;
          })}
          <div style={{ width:40, height:1, background:'rgba(231,229,228,0.6)' }} />
          <div style={{ fontFamily: FONT_MONO, fontSize:11, letterSpacing:'0.12em', color:C.cam }}>HARNESS 9.5 ULTRA</div>
        </div>
        <div style={{ height:2, background:`linear-gradient(90deg, ${C.cam} 0%, transparent 100%)`, width: `${interpolate(frame,[0,60],[0,100],{extrapolateLeft:'clamp',extrapolateRight:'clamp'})}%`, opacity:0.9 }} />
      </div>
    </AbsoluteFill>
  );
};

// S3 Typewriter Mono 120f
const S3: React.FC = () => {
  const frame = useCurrentFrame();
  const lines = [
    '$ npx skills add anthropics/skills --skill frontend-design  # 851K',
    '$ npx skills add remotion-dev/skills --skill remotion-best-practices  # 508K',
    '$ npx skills add anthropics/skills --skill pptx  # 214K',
    '> harness --profile persistent  ✓  17 MCPs · 31 Skills · 9/9 categories',
  ];
  const charsPerFrame = 1.2;
  return (
    <AbsoluteFill style={{ background: '#FFFBF5' }}>
      <BlueprintGrid opacity={0.09} />
      <BlueprintFrame />
      <TopBar idx={2} title="TYPEWRITER MONO" subtitle="JETBRAINS MONO · CURSOR BLINK · 1.2 C/F" />
      <div style={{ position:'absolute', left:72+32, right:32, top:88, bottom:56, background:'rgba(255,251,245,0.9)', border:'1px solid #E7E5E4', borderRadius:24, padding:22, display:'flex', flexDirection:'column', gap:14, boxShadow:'0 12px 24px rgba(28,25,23,0.08)' }}>
        <div style={{ display:'flex', gap:8, alignItems:'center' }}>
          <div style={{ width:12, height:12, borderRadius:999, background:'#FF5F56' }} />
          <div style={{ width:12, height:12, borderRadius:999, background:'#FFBD2E' }} />
          <div style={{ width:12, height:12, borderRadius:999, background:'#27C93F' }} />
          <div style={{ marginLeft:12, fontFamily: FONT_MONO, fontSize:12, letterSpacing:'0.12em', color:'#78716C' }}>terminal — zsh — 1920×1080</div>
          <div style={{ marginLeft:'auto', fontFamily: FONT_MONO, fontSize:11, letterSpacing:'0.12em', color:C.violet, background:'rgba(124,58,237,0.12)', border:'1px solid rgba(124,58,237,0.3)', padding:'4px 8px', borderRadius:999 }}>#7C3AED</div>
        </div>
        <div style={{ height:1, background:'rgba(231,229,228,0.5)' }} />
        {lines.map((line,i)=>{
          const start = i*28;
          const len = Math.max(0, Math.min(line.length, Math.round((frame - start) * charsPerFrame)));
          const visible = line.slice(0, Math.max(0,len));
          const showCursor = frame >= start && frame < start + line.length / charsPerFrame && (frame % 12) < 6;
          const done = len >= line.length;
          return (
            <div key={i} style={{ display:'flex', alignItems:'center', gap:10, opacity: frame < start? 0:1 }}>
              <span style={{ fontFamily: FONT_MONO, fontSize:11, color: '#78716C', minWidth:18 }}>{String(i+1).padStart(2,'0')}</span>
              <div style={{ fontFamily: FONT_MONO, fontSize:18, letterSpacing:'0.02em', color: done? C.line: 'rgba(231,229,228,0.6)', lineHeight:1.5 }}>
                {visible}
                {showCursor && <span style={{ display:'inline-block', width:10, height:18, background:C.violet, marginLeft:2, verticalAlign:'middle' }} />}
              </div>
              {done && <span style={{ fontFamily: FONT_MONO, fontSize:11, color:C.green, marginLeft:'auto' }}>✓ {Math.round((i+1)*27)}ms</span>}
            </div>
          );
        })}
        <div style={{ marginTop:'auto', display:'flex', gap:10, alignItems:'center', borderTop:'1px solid rgba(231,229,228,0.5)', paddingTop:14 }}>
          <div style={{ fontFamily: FONT_MONO, fontSize:11, letterSpacing:'0.12em', color:'#78716C' }}>CURSOR BLINK 12F · EASING BEZIER(0.25,0.8,0.25,1)</div>
          <div style={{ flex:1, height:1, background:'rgba(231,229,228,0.5)' }} />
          <div style={{ fontFamily: FONT_MONO, fontSize:11, letterSpacing:'0.12em', color:C.violet }}>MONO 18PX</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// S4 Glitch Title 90f
const S4: React.FC = () => {
  const frame = useCurrentFrame();
  const p = useSpring(0);
  const glitch = frame % 10 < 2 ? (frame%3===0? 6: -6) : 0;
  const chroma = frame % 14 < 3 ? 3 : 0;
  return (
    <AbsoluteFill style={{ background: '#FFFBF5' }}>
      <BlueprintGrid opacity={0.08} />
      <BlueprintFrame />
      <TopBar idx={3} title="GLITCH TITLE" subtitle="CHROMATIC OFFSET · 6PX SLICE" />
      <div style={{ position:'absolute', inset:0, left:72, display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:12 }}>
        <div style={{ position:'relative', fontFamily: FONT_DISPLAY, fontStyle:'italic', fontSize:148, fontWeight:500, letterSpacing:'-0.04em', lineHeight:0.9, color:'#1C1917', transform:`translateX(${glitch}px)` }}>
          <span style={{ position:'absolute', inset:0, color:C.cyan, opacity: chroma?0.7:0, transform:`translateX(${-chroma}px)`, clipPath:'inset(0 0 55% 0)' }}>ULTRA</span>
          <span style={{ position:'absolute', inset:0, color:C.signal, opacity: chroma?0.6:0, transform:`translateX(${chroma}px)`, clipPath:'inset(55% 0 0 0)' }}>ULTRA</span>
          <span style={{ position:'relative' }}>ULTRA</span>
        </div>
        <div style={{ display:'flex', gap:10, alignItems:'center' }}>
          <div style={{ width:18, height:2, background:C.green }} />
          <span style={{ fontFamily: FONT_MONO, fontSize:12, letterSpacing:'0.22em', color:C.green, fontWeight:500 }}>GLITCH · #00FF88 · SLICE {glitch}px</span>
          <div style={{ width:18, height:2, background:C.green }} />
        </div>
        <div style={{ fontFamily: FONT_MONO, fontSize:11, letterSpacing:'0.14em', color:'#78716C', opacity: interpolate(p,[0,1],[0,1]) }}>SPRING DAMP 26 / STIFF 85 · FRAME {frame}/90</div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap:8, marginTop:8, opacity: interpolate(p,[0.2,1],[0,1]) }}>
          {[0,1,2,3,4].map(i=>(
            <div key={i} style={{ width:120, height:6, background: i===2? C.green:'rgba(231,229,228,0.5)', transform:`translateX(${frame%10===i? 4:0}px)` }} />
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Helper for bar race
const BarRow: React.FC<{ label:string; color:string; value:number; delay:number; rank:number }> = ({ label, color, value, delay, rank }) => {
  const p = spring({ frame: useCurrentFrame() - delay, fps:FPS, config:{damping:26, stiffness:85, mass:0.8} });
  return (
    <div style={{ display:'flex', alignItems:'center', gap:12, opacity: interpolate(p,[0,1],[0,1]), transform:`translateX(${interpolate(p,[0,1],[18,0])}px)` }}>
      <div style={{ width:28, textAlign:'center', fontFamily: FONT_MONO, fontSize:12, fontWeight:500, color: rank===1? '#1C1917':'rgba(231,229,228,0.6)', background: rank===1? C.hazard:'rgba(231,229,228,0.5)', borderRadius:6, padding:'4px 0' }}>{rank}</div>
      <div style={{ width:140, fontFamily: FONT_MONO, fontSize:13, fontWeight:500, letterSpacing:'0.04em', color:'#1C1917' }}>{label}</div>
      <div style={{ flex:1, height:18, background:'rgba(231,229,228,0.5)', borderRadius:999, overflow:'hidden', position:'relative' }}>
        <div style={{ width:`${value * p}%`, height:'100%', background: color, borderRadius:999, boxShadow:`0 0 12px ${color}60` }} />
        <div style={{ position:'absolute', right:8, top:1, fontFamily: FONT_MONO, fontSize:11, fontWeight:500, color: value>55? '#1C1917':'rgba(231,229,228,0.6)' }}>{Math.round(value * p)}%</div>
      </div>
    </div>
  );
};

// S5 Bar Race Storm 240f
const S5: React.FC = () => {
  const frame = useCurrentFrame();
  const t = frame/240;
  const base = [72,68,58,62,48,54,42];
  const anim = base.map((b,i)=> {
    const wobble = Math.sin(t*Math.PI*2 + i*0.9)*12 + Math.cos(t*Math.PI*3 + i)*6;
    return Math.max(12, Math.min(92, b + wobble + t*8));
  });
  const sorted = anim.map((v,i)=>({v,i})).sort((a,b)=>b.v-a.v);
  const ranks = new Array(7).fill(0);
  sorted.forEach((s,idx)=> ranks[s.i]=idx+1);
  const labels = ['RESEARCH','VIDEO','OFFICE','DESIGN','CAD','QA','FRONTEND'];
  const colors = [C.cyan, C.violet, C.cam, C.hazard, C.green, C.signal, C.pink];
  return (
    <AbsoluteFill style={{ background: '#FFFBF5' }}>
      <BlueprintGrid opacity={0.09} />
      <BlueprintFrame />
      <TopBar idx={4} title="BAR RACE STORM" subtitle="DATA STORM · 7 CATEGORIES · RACE" />
      <div style={{ position:'absolute', left:72+28, right:28, top:88, bottom:42, background:'rgba(255,251,245,0.7)', border:'1px solid #E7E5E4', borderRadius:24, padding:18, display:'flex', flexDirection:'column', gap:10 }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <span style={{ fontFamily: FONT_MONO, fontSize:11, letterSpacing:'0.16em', color:C.cyan, fontWeight:500 }}>DATA STORM — 7 CHARTS — BAR RACE</span>
          <span style={{ fontFamily: FONT_MONO, fontSize:11, letterSpacing:'0.1em', color:'#78716C' }}>t={t.toFixed(2)} · FRAME {frame}/240</span>
        </div>
        <div style={{ height:1, background:'rgba(231,229,228,0.5)' }} />
        <div style={{ display:'flex', flexDirection:'column', gap:10, flex:1, justifyContent:'center' }}>
          {labels.map((lab,i)=>(
            <BarRow key={lab} label={lab} color={colors[i]} value={anim[i]} delay={i*4} rank={ranks[i]} />
          ))}
        </div>
        <div style={{ display:'flex', gap:8, alignItems:'center' }}>
          <div style={{ width:10, height:10, background:C.cam, borderRadius:999 }} />
          <span style={{ fontFamily: FONT_MONO, fontSize:11, letterSpacing:'0.12em', color:'#1C1917' }}>RACE LEADER: {labels[sorted[0].i]} {Math.round(sorted[0].v)}%</span>
          <span style={{ marginLeft:'auto', fontFamily: FONT_MONO, fontSize:11, color:'#78716C' }}>EASING BEZIER(0.25,0.8,0.25,1) · DAMP 26 / STIFF 85</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// S6 Candlestick Pulse 150f
const S6: React.FC = () => {
  const frame = useCurrentFrame();
  const candles = Array.from({length:14},(_,i)=>{
    const base = 40 + Math.sin(i*0.9)*18 + Math.cos(i*0.4)*10;
    const open = base + Math.sin(frame*0.08 + i*0.7)*10;
    const close = base + Math.cos(frame*0.07 + i*0.6)*14;
    const high = Math.max(open,close)+ 8 + Math.abs(Math.sin(frame*0.05+i))*6;
    const low = Math.min(open,close)- 8 - Math.abs(Math.cos(frame*0.05+i))*6;
    const bullish = close > open;
    return {open, close, high, low, bullish};
  });
  return (
    <AbsoluteFill style={{ background: '#FFFBF5' }}>
      <BlueprintGrid opacity={0.08} />
      <BlueprintFrame />
      <TopBar idx={5} title="CANDLESTICK PULSE" subtitle="DATA STORM · 14 CANDLES · WICK PULSE" />
      <div style={{ position:'absolute', left:72+28, right:28, top:88, bottom:42, background:'rgba(255,251,245,0.7)', border:'1px solid #E7E5E4', borderRadius:24, padding:18, display:'flex', flexDirection:'column', gap:12 }}>
        <svg width="100%" height={340} viewBox="0 0 1100 340" style={{ overflow:'visible' }}>
          <rect x={0} y={0} width={1100} height={340} rx={12} fill="rgba(255,251,245,0.9)" stroke="rgba(231,229,228,0.5)" />
          {[0,1,2,3,4].map(i=>(
            <g key={i}>
              <line x1={60} y1={40+i*60} x2={1040} y2={40+i*60} stroke="rgba(231,229,228,0.4)" strokeWidth={1} />
              <text x={24} y={44+i*60} fontFamily={FONT_MONO} fontSize={11} fill={C.steel}>{340 - i*60}</text>
            </g>
          ))}
          {candles.map((c,i)=>{
            const x = 80 + i*68;
            const bodyY = 40 + (140 - Math.max(c.open,c.close)*1.6);
            const bodyH = Math.abs(c.open - c.close)*1.6 + 4;
            const wickTop = 40 + (140 - c.high*1.6);
            const wickBot = 40 + (140 - c.low*1.6);
            const p = spring({ frame: frame - i*3, fps:FPS, config:{damping:26, stiffness:85, mass:0.8} });
            const pulse = 0.5 + 0.5*Math.sin(frame*0.18 + i);
            return (
              <g key={i} opacity={interpolate(p,[0,1],[0,1])} transform={`translate(${interpolate(p,[0,1],[12,0])},0)`}>
                <line x1={x+14} y1={wickTop} x2={x+14} y2={wickBot} stroke={c.bullish? C.green: C.signal} strokeWidth={2} opacity={0.9} />
                <rect x={x+4} y={bodyY} width={20} height={bodyH} rx={3} fill={c.bullish? C.green: C.signal} stroke="#E7E5E4" opacity={0.95} />
                {i%3===0 && <circle cx={x+14} cy={wickTop} r={3*pulse} fill={C.cyan} opacity={0.9} />}
              </g>
            );
          })}
          <polyline points={`${80},260 ${1040},260`} fill="none" stroke={ACCENTS[5]} strokeWidth={1} opacity={0.18} />
        </svg>
        <div style={{ display:'flex', gap:10, alignItems:'center' }}>
          <div style={{ display:'flex', gap:6, alignItems:'center' }}><div style={{ width:12, height:12, background:C.green, borderRadius:3 }} /><span style={{ fontFamily: FONT_MONO, fontSize:11, color:'#1C1917' }}>BULLISH</span></div>
          <div style={{ display:'flex', gap:6, alignItems:'center' }}><div style={{ width:12, height:12, background:C.signal, borderRadius:3 }} /><span style={{ fontFamily: FONT_MONO, fontSize:11, color:'#1C1917' }}>BEARISH</span></div>
          <span style={{ marginLeft:'auto', fontFamily: FONT_MONO, fontSize:11, color:'#78716C' }}>PULSE · DAMP 26 · {C.cyan}</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// S7 Gauge Sprint 120f
const S7: React.FC = () => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame,[0,90],[0,1],{extrapolateLeft:'clamp', extrapolateRight:'clamp', easing:Easing.bezier(0.25,0.8,0.25,1)});
  const value = Math.round(92 * spring({ frame, fps:FPS, config:{damping:26, stiffness:85, mass:0.8} }));
  const angle = interpolate(progress,[0,1],[-135,135]);
  return (
    <AbsoluteFill style={{ background: '#FFFBF5' }}>
      <BlueprintGrid opacity={0.09} />
      <BlueprintFrame />
      <TopBar idx={6} title="GAUGE SPRINT" subtitle="DATA STORM · ARC 270° · NEEDLE" />
      <div style={{ position:'absolute', left:72+28, right:28, top:88, bottom:42, display:'flex', gap:18 }}>
        <div style={{ flex:1, background:'rgba(255,251,245,0.7)', border:'1px solid #E7E5E4', borderRadius:24, display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:10 }}>
          <svg width={380} height={300} viewBox="0 0 380 300">
            <circle cx={190} cy={190} r={110} fill="none" stroke="rgba(231,229,228,0.5)" strokeWidth={14} strokeLinecap="round" strokeDasharray={`${270*1.92} ${360*1.92}`} transform="rotate(-135 190 190)" />
            <circle cx={190} cy={190} r={110} fill="none" stroke={ACCENTS[6]} strokeWidth={14} strokeLinecap="round" strokeDasharray={`${270*1.92*progress} ${360*1.92}`} transform="rotate(-135 190 190)" style={{ filter:`drop-shadow(0 0 8px ${ACCENTS[6]}80)` }} />
            <g transform={`rotate(${angle} 190 190)`}>
              <line x1={190} y1={190} x2={190} y2={92} stroke={C.line} strokeWidth={3} strokeLinecap="round" />
              <circle cx={190} cy={190} r={10} fill={C.line} stroke={C.ink} strokeWidth={2} />
            </g>
            <text x={190} y={235} textAnchor="middle" fontFamily={FONT_MONO} fontSize={56} fontWeight={800} fill={C.line}>{value}%</text>
            <text x={190} y={256} textAnchor="middle" fontFamily={FONT_MONO} fontSize={11} letterSpacing="0.14em" fill={C.steel}>PERFORMANCE</text>
          </svg>
          <div style={{ fontFamily: FONT_MONO, fontSize:11, letterSpacing:'0.12em', color:'#78716C' }}>EASING BEZIER · SPRINT TO 92%</div>
        </div>
        <div style={{ width:420, display:'flex', flexDirection:'column', gap:12 }}>
          {[
            {k:'FPS', v:92, c:C.yellow},
            {k:'COVERAGE', v:84, c:C.cyan},
            {k:'QUALITY', v:96, c:C.green},
          ].map((m,i)=>{
            const p = spring({ frame: frame - 12 - i*8, fps:FPS, config:{damping:26, stiffness:85, mass:0.8} });
            return (
              <div key={m.k} style={{ flex:1, background:'rgba(255,251,245,0.7)', border:'1px solid rgba(231,229,228,0.8)', borderRadius:24, padding:14, display:'flex', flexDirection:'column', justifyContent:'center', gap:8, opacity: interpolate(p,[0,1],[0,1]) }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}><span style={{ fontFamily: FONT_MONO, fontSize:11, letterSpacing:'0.14em', color:'#78716C' }}>{m.k}</span><span style={{ fontFamily: FONT_MONO, fontSize:12, fontWeight:500, color:m.c }}>{Math.round(m.v * p)}%</span></div>
                <div style={{ height:8, background:'rgba(231,229,228,0.5)', borderRadius:999, overflow:'hidden' }}><div style={{ width:`${m.v*p}%`, height:'100%', background:m.c }} /></div>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// S8 Heatmap Matrix 195f
const S8: React.FC = () => {
  const frame = useCurrentFrame();
  const rows=8, cols=16;
  return (
    <AbsoluteFill style={{ background: '#FFFBF5' }}>
      <BlueprintGrid opacity={0.08} />
      <BlueprintFrame />
      <TopBar idx={7} title="HEATMAP MATRIX" subtitle="DATA STORM · 8×16 · WAVE" />
      <div style={{ position:'absolute', left:72+28, right:28, top:88, bottom:42, background:'rgba(255,251,245,0.7)', border:'1px solid #E7E5E4', borderRadius:24, padding:18, display:'flex', flexDirection:'column', gap:12 }}>
        <div style={{ display:'grid', gridTemplateColumns:`repeat(${cols}, 1fr)`, gap:6, flex:1 }}>
          {Array.from({length: rows*cols},(_,idx)=>{
            const r=Math.floor(idx/cols), c=idx%cols;
            const dist=Math.sqrt((r-3.5)**2 + (c-7.5)**2);
            const wave = Math.sin(frame*0.06 - dist*0.6) *0.5 +0.5;
            const v = (wave*0.7 + Math.sin(c*0.9 + r*0.5 + frame*0.02)*0.3 +0.5) %1;
            const intensity = Math.max(0,Math.min(1, v));
            const col = intensity>0.66? C.signal: intensity>0.33? C.hazard: C.cyan;
            const p = spring({ frame: frame - (r+c)*1.2, fps:FPS, config:{damping:26, stiffness:85, mass:0.8} });
            return <div key={idx} style={{ borderRadius:6, background: col, opacity: 0.18 + intensity*0.82 * p, transform:`scale(${0.85 + intensity*0.15})`, border:'1px solid rgba(231,229,228,0.4)' }} />;
          })}
        </div>
        <div style={{ display:'flex', gap:8, alignItems:'center' }}>
          <span style={{ fontFamily: FONT_MONO, fontSize:11, color:'#78716C' }}>LOW</span>
          <div style={{ flex:1, height:8, borderRadius:999, background:`linear-gradient(90deg, ${C.cyan}, ${C.hazard}, ${C.signal})`, opacity:0.9 }} />
          <span style={{ fontFamily: FONT_MONO, fontSize:11, color:'#78716C' }}>HIGH</span>
          <span style={{ marginLeft:12, fontFamily: FONT_MONO, fontSize:11, color:ACCENTS[7], fontWeight:500 }}>MATRIX 128 CELLS</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// S9 Radar Web 195f
const S9: React.FC = () => {
  const frame = useCurrentFrame();
  const axes=['RESEARCH','VIDEO','OFFICE','DESIGN','CAD','QA'];
  const values = axes.map((_,i)=> 42 + Math.sin(frame*0.03 + i*0.9)*22 + 28);
  const cx=280, cy=210, r=160;
  const points = values.map((v,i)=>{
    const ang = -Math.PI/2 + i*(Math.PI*2/6);
    const rr = (v/90)*r;
    return {x: cx + Math.cos(ang)*rr, y: cy + Math.sin(ang)*rr};
  });
  const poly = points.map(p=>`${p.x},${p.y}`).join(' ');
  return (
    <AbsoluteFill style={{ background: '#FFFBF5' }}>
      <BlueprintGrid opacity={0.09} />
      <BlueprintFrame />
      <TopBar idx={8} title="RADAR WEB" subtitle="DATA STORM · 6 AXES · POLYGON MORPH" />
      <div style={{ position:'absolute', left:72+28, right:28, top:88, bottom:42, display:'flex', gap:18 }}>
        <div style={{ width:560, background:'rgba(255,251,245,0.7)', border:'1px solid #E7E5E4', borderRadius:24, display:'flex', alignItems:'center', justifyContent:'center', padding:12 }}>
          <svg width={560} height={420} viewBox="0 0 560 420">
            {[1,2,3,4].map(l=>(
              <polygon key={l} points={axes.map((_,i)=>{ const ang=-Math.PI/2 + i*Math.PI*2/6; const rr=r*l/4; return `${cx+Math.cos(ang)*rr},${cy+Math.sin(ang)*rr}`; }).join(' ')} fill="none" stroke="rgba(231,229,228,0.5)" strokeWidth={l===4?1.5:1} />
            ))}
            {axes.map((_,i)=>{ const ang=-Math.PI/2 + i*Math.PI*2/6; return <line key={i} x1={cx} y1={cy} x2={cx+Math.cos(ang)*r} y2={cy+Math.sin(ang)*r} stroke="rgba(231,229,228,0.5)" strokeWidth={1} />; })}
            <polygon points={poly} fill={`${C.violet}30`} stroke={C.violet} strokeWidth={2.5} />
            {points.map((p,i)=>(
              <g key={i}>
                <circle cx={p.x} cy={p.y} r={6} fill={C.violet} stroke={C.ink} strokeWidth={2} />
                <text x={p.x + Math.cos(-Math.PI/2 + i*Math.PI*2/6)*22} y={p.y + Math.sin(-Math.PI/2 + i*Math.PI*2/6)*22} textAnchor="middle" fontFamily={FONT_MONO} fontSize={10} fill={C.line} fontWeight={700}>{axes[i]}</text>
              </g>
            ))}
          </svg>
        </div>
        <div style={{ flex:1, display:'flex', flexDirection:'column', gap:10 }}>
          {axes.map((ax,i)=>{
            const p = spring({ frame: frame - i*6, fps:FPS, config:{damping:26, stiffness:85, mass:0.8} });
            return (
              <div key={ax} style={{ flex:1, background:'rgba(255,251,245,0.7)', border:'1px solid rgba(231,229,228,0.8)', borderRadius:24, padding:'10px 14px', display:'flex', flexDirection:'column', justifyContent:'center', gap:6, opacity: interpolate(p,[0,1],[0,1]) }}>
                <div style={{ display:'flex', justifyContent:'space-between' }}><span style={{ fontFamily: FONT_MONO, fontSize:11, letterSpacing:'0.12em', color:'#78716C' }}>{ax}</span><span style={{ fontFamily: FONT_MONO, fontSize:12, fontWeight:500, color:C.violet }}>{Math.round(values[i]*p)}</span></div>
                <div style={{ height:6, background:'rgba(231,229,228,0.5)', borderRadius:999, overflow:'hidden' }}><div style={{ width:`${values[i]*p/90*100}%`, height:'100%', background:C.violet }} /></div>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// S10 Waterfall Ledger 150f
const S10: React.FC = () => {
  const frame = useCurrentFrame();
  const steps = [
    {label:'START', delta: 0, total: 100},
    {label:'MCPs +17', delta: 34, total: 134},
    {label:'Skills +31', delta: 28, total: 162},
    {label:'Cover 9/9', delta: 18, total: 180},
    {label:'Overhead', delta: -22, total: 158},
    {label:'NET', delta: 0, total: 158},
  ];
  return (
    <AbsoluteFill style={{ background: '#FFFBF5' }}>
      <BlueprintGrid opacity={0.08} />
      <BlueprintFrame />
      <TopBar idx={9} title="WATERFALL LEDGER" subtitle="DATA STORM · LEDGER · CONNECTORS" />
      <div style={{ position:'absolute', left:72+28, right:28, top:88, bottom:42, background:'rgba(255,251,245,0.7)', border:'1px solid #E7E5E4', borderRadius:24, padding:18 }}>
        <svg width="100%" height={300} viewBox="0 0 1100 300">
          <rect x={0} y={0} width={1100} height={300} rx={12} fill="rgba(255,251,245,0.9)" stroke="rgba(231,229,228,0.5)" />
          {steps.map((s,i)=>{
            const x = 90 + i*160;
            const h = s.total*1.1;
            const y = 240 - h;
            const isLast = i===steps.length-1;
            const isFirst = i===0;
            const p = spring({ frame: frame - i*8, fps:FPS, config:{damping:26, stiffness:85, mass:0.8} });
            const col = isLast? C.violet: isFirst? 'rgba(231,229,228,0.6)': s.delta>0? C.green: C.signal;
            const connectorY = i>0? 240 - steps[i-1].total*1.1 : y;
            return (
              <g key={i} opacity={interpolate(p,[0,1],[0,1])}>
                {i>0 && <line x1={90+(i-1)*160+86} y1={connectorY} x2={x} y2={y + (s.delta>0? h - Math.abs(s.delta)*1.1:0)} stroke="rgba(231,229,228,0.6)" strokeWidth={1} strokeDasharray="4 4" />}
                <rect x={x} y={y + (1-p)*18} width={86} height={h} rx={8} fill={col} opacity={0.95} />
                <text x={x+43} y={y-10} textAnchor="middle" fontFamily={FONT_MONO} fontSize={12} fontWeight={800} fill={C.line}>{s.total}</text>
                <text x={x+43} y={260} textAnchor="middle" fontFamily={FONT_MONO} fontSize={10} letterSpacing="0.08em" fill={C.steel}>{s.label}</text>
                {!isFirst && !isLast && <text x={x+43} y={y + h/2 +4} textAnchor="middle" fontFamily={FONT_MONO} fontSize={11} fontWeight={800} fill="#1C1917">{s.delta>0?`+${s.delta}`:s.delta}</text>}
              </g>
            );
          })}
        </svg>
        <div style={{ display:'flex', gap:8, marginTop:8 }}>
          <span style={{ fontFamily: FONT_MONO, fontSize:11, color:C.green }}>▲ GAIN</span>
          <span style={{ fontFamily: FONT_MONO, fontSize:11, color:C.signal }}>▼ LOSS</span>
          <span style={{ marginLeft:'auto', fontFamily: FONT_MONO, fontSize:11, color:'#78716C' }}>LEDGER BALANCE 158 · DAMP 26</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// S11 KPI Counter 120f
const S11: React.FC = () => {
  const frame = useCurrentFrame();
  const kpis = [
    {label:'MCP SERVERS', value:17, suffix:'', color:C.cyan},
    {label:'SKILLS', value:31, suffix:'', color:C.violet},
    {label:'SCENES', value:26, suffix:'', color:C.cam},
    {label:'CATEGORIES', value:9, suffix:'/9', color:C.yellow},
  ];
  return (
    <AbsoluteFill style={{ background: '#FFFBF5' }}>
      <BlueprintGrid opacity={0.09} />
      <BlueprintFrame />
      <TopBar idx={10} title="KPI COUNTER" subtitle="DATA STORM · COUNT-UP · PROGRESS" />
      <div style={{ position:'absolute', left:72+28, right:28, top:88, bottom:42, display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:16 }}>
        {kpis.map((k,i)=>{
          const p = spring({ frame: frame - i*7, fps:FPS, config:{damping:26, stiffness:85, mass:0.8} });
          const n = Math.round(k.value * p);
          return (
            <div key={k.label} style={{ background:'rgba(255,251,245,0.7)', border:`1px solid ${k.color}30`, borderTop:`1px solid ${k.color}`, borderRadius:24, padding:22, display:'flex', flexDirection:'column', gap:14, justifyContent:'center', opacity: interpolate(p,[0,1],[0,1]), transform:`translateY(${interpolate(p,[0,1],[12,0])}px)` }}>
              <div style={{ fontFamily: FONT_MONO, fontSize:11, letterSpacing:'0.12em', color:'#78716C' }}>{k.label}</div>
              <div style={{ fontFamily: FONT_DISPLAY, fontStyle:'italic', fontSize:64, fontWeight:500, color:'#1C1917', lineHeight:1 }}>{n}<span style={{ color:k.color, fontSize:32 }}>{k.suffix}</span></div>
              <div style={{ height:6, background:'rgba(231,229,228,0.5)', borderRadius:999, overflow:'hidden' }}><div style={{ width:`${k.value/31*100 * p}%`, height:'100%', background:k.color }} /></div>
              <div style={{ fontFamily: FONT_MONO, fontSize:10, letterSpacing:'0.1em', color:'#78716C' }}>SPRING 18/120 · {k.color}</div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// S12 Parallax Depth 180f
const S12: React.FC = () => {
  const frame = useCurrentFrame();
  const layers = [
    {z: -2, opacity:0.45, scale:0.92, y: interpolate(frame,[0,180],[0,-18]), color:'rgba(124,58,237,0.12)', label:'BACK · RESEARCH'},
    {z: 0, opacity:1, scale:1, y: interpolate(frame,[0,180],[0,-8]), color:'rgba(255,251,245,0.7)', label:'MID · VIDEO PIPELINE'},
    {z: 2, opacity:0.95, scale:1.04, y: interpolate(frame,[0,180],[0,6]), color:'rgba(255,107,53,0.10)', label:'FRONT · DESIGN'},
  ];
  return (
    <AbsoluteFill style={{ background: '#FFFBF5' }}>
      <BlueprintGrid opacity={0.08} />
      <BlueprintFrame />
      <TopBar idx={11} title="PARALLAX DEPTH" subtitle="CINEMATIC · 3 LAYERS · 180F" />
      <div style={{ position:'absolute', left:72+28, right:28, top:88, bottom:42, perspective: 1200, overflow:'hidden', borderRadius:24, border:'1px solid #E7E5E4', background:'rgba(255,251,245,0.5)', display:'flex', alignItems:'center', justifyContent:'center' }}>
        <div style={{ position:'relative', width:900, height:520 }}>
          {layers.map((lay,i)=>{
            const p = spring({ frame: frame - i*8, fps:FPS, config:{damping:26, stiffness:85, mass:0.8} });
            return (
              <div key={i} style={{ position:'absolute', left:'50%', top:'50%', width:720 - i*40, height: 340 - i*20, background: lay.color, border:'1px solid #E7E5E4', borderRadius:18, backdropFilter:'blur(16px)', boxShadow:'0 12px 24px rgba(28,25,23,0.08)', transform:`translate(-50%,-50%) translateY(${lay.y}px) scale(${lay.scale}) translateY(${interpolate(p,[0,1],[12,0])}px)`, opacity: lay.opacity * p, display:'flex', flexDirection:'column', padding:18, gap:12 }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                  <span style={{ fontFamily: FONT_MONO, fontSize:11, letterSpacing:'0.14em', color: lay.z===0? C.cyan: C.steel }}>{lay.label}</span>
                  <span style={{ fontFamily: FONT_MONO, fontSize:11, color:'#78716C' }}>z={lay.z} · scale {lay.scale}</span>
                </div>
                <div style={{ flex:1, background:'rgba(255,251,245,0.6)', borderRadius:24, border:'1px solid rgba(231,229,228,0.4)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily: FONT_GROTESK, fontSize:22, fontWeight:500, color:'rgba(231,229,228,0.6)' }}>{lay.label.split('·')[1]}</div>
                <div style={{ height:6, background:'rgba(231,229,228,0.5)', borderRadius:999, overflow:'hidden' }}><div style={{ width:`${70 + i*12}%`, height:'100%', background: lay.z===0? C.cyan: C.steel }} /></div>
              </div>
            );
          })}
        </div>
        <div style={{ position:'absolute', bottom:14, left:14, fontFamily: FONT_MONO, fontSize:10, letterSpacing:'0.12em', color:'#78716C' }}>PARALLAX translateY · PERSPECTIVE 1200 · DAMP 26</div>
      </div>
    </AbsoluteFill>
  );
};

// S13 Lens Flare Sweep 150f
const S13: React.FC = () => {
  const frame = useCurrentFrame();
  const sweepX = interpolate(frame,[0,150],[ -200, W+200],{easing:Easing.bezier(0.25,0.8,0.25,1)});
  const flareOpacity = interpolate(frame,[10,30,120,140],[0,1,1,0]);
  return (
    <AbsoluteFill style={{ background: '#FFFBF5' }}>
      <BlueprintGrid opacity={0.06} />
      <BlueprintFrame />
      <TopBar idx={12} title="LENS FLARE SWEEP" subtitle="CINEMATIC · SWEEP · BOKEH" />
      <div style={{ position:'absolute', left:72+28, right:28, top:88, bottom:42, borderRadius:24, overflow:'hidden', border:'1px solid #E7E5E4', background:'radial-gradient(900px 500px at 30% 40%, rgba(0,212,255,0.18), transparent 60%), radial-gradient(700px 400px at 78% 68%, rgba(124,58,237,0.14), transparent 60%), #1C1917' }}>
        <div style={{ position:'absolute', left: sweepX, top:0, bottom:0, width:2, background:`linear-gradient(180deg, transparent, ${C.cyan}, transparent)`, opacity: flareOpacity, boxShadow:`0 0 24px ${C.cyan}` }} />
        <div style={{ position:'absolute', left: sweepX - 80, top:'50%', width:160, height:160, borderRadius:999, background:`radial-gradient(circle, ${C.cyan} 0%, transparent 70%)`, opacity: flareOpacity*0.28, transform:'translate(-50%,-50%)', filter:'blur(16px)' }} />
        <div style={{ position:'absolute', left: sweepX + 120, top:'34%', width:90, height:90, borderRadius:999, background:`radial-gradient(circle, ${C.hazard} 0%, transparent 70%)`, opacity: flareOpacity*0.22, transform:'translate(-50%,-50%)' }} />
        <div style={{ position:'absolute', left: sweepX - 160, top:'72%', width:60, height:60, borderRadius:999, background:`radial-gradient(circle, ${C.pink} 0%, transparent 70%)`, opacity: flareOpacity*0.18, transform:'translate(-50%,-50%)' }} />
        {/* hexagonal bokeh */}
        {Array.from({length:6},(_,i)=>{
          const x = 220 + i*210 + Math.sin(frame*0.04+i)*18;
          const y = 180 + (i%2)*220 + Math.cos(frame*0.03+i)*12;
          const s = 34 + i*6;
          return <div key={i} style={{ position:'absolute', left:x, top:y, width:s, height:s, borderRadius:4, background:`rgba(231,229,228,0.4)`, border:'1px solid rgba(231,229,228,0.5)', transform:`rotate(${frame*0.2 + i*12}deg)`, opacity: 0.5 + Math.sin(frame*0.05+i)*0.2 }} />;
        })}
        <div style={{ position:'absolute', left:32, bottom:32, right:32, background:'rgba(255,251,245,0.7)', border:'1px solid #E7E5E4', borderRadius:24, padding:'14px 16px', display:'flex', justifyContent:'space-between', alignItems:'center', backdropFilter:'blur(16px)' }}>
          <span style={{ fontFamily: FONT_MONO, fontSize:11, letterSpacing:'0.14em', color:C.cyan, fontWeight:500 }}>LENS FLARE · SWEEP X={Math.round(sweepX)} · OPACITY {flareOpacity.toFixed(2)}</span>
          <span style={{ fontFamily: FONT_MONO, fontSize:11, letterSpacing:'0.1em', color:'#78716C' }}>#00D4FF · HEXAGON BOKEH · 6</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// S14 Letterbox Chase 195f
const S14: React.FC = () => {
  const frame = useCurrentFrame();
  const panX = interpolate(frame,[0,195],[-40,40],{easing:Easing.bezier(0.25,0.8,0.25,1)});
  return (
    <AbsoluteFill style={{ background: '#FFFBF5' }}>
      <BlueprintGrid opacity={0.07} />
      <BlueprintFrame />
      <TopBar idx={13} title="LETTERBOX CHASE" subtitle="CINEMATIC · 2.39:1 · PAN" />
      <div style={{ position:'absolute', left:72+28, right:28, top:88, bottom:42, borderRadius:24, overflow:'hidden', border:'1px solid #E7E5E4', background:'#000', display:'flex', flexDirection:'column' }}>
        <div style={{ height:42, background:'#FFFBF5', borderBottom:'1px solid rgba(231,229,228,0.5)', display:'flex', alignItems:'center', padding:'0 14px', justifyContent:'space-between' }}>
          <span style={{ fontFamily: FONT_MONO, fontSize:10, letterSpacing:'0.14em', color:'#78716C' }}>LETTERBOX 2.39:1</span>
          <span style={{ fontFamily: FONT_MONO, fontSize:10, letterSpacing:'0.12em', color:C.hazard }}>● REC 195F · PAN {panX.toFixed(1)}px</span>
        </div>
        <div style={{ flex:1, position:'relative', overflow:'hidden', background:'linear-gradient(100deg, #E0F2FE 0%, #F8F5F0 50%, #E0F2FE 100%)' }}>
          <div style={{ position:'absolute', inset:0, transform:`translateX(${panX}px)`, background:`linear-gradient(90deg, transparent 0%, rgba(0,212,255,0.08) 30%, transparent 60%), repeating-linear-gradient(90deg, rgba(231,229,228,0.4) 0 80px, transparent 80px 82px)` }} />
          <div style={{ position:'absolute', left:'50%', top:'50%', width: 980, height: 240, background:'rgba(231,229,228,0.6)', border:'1px solid #E7E5E4', borderRadius:24, transform:`translate(-50%,-50%) translateX(${panX*0.5}px)`, display:'flex', alignItems:'center', justifyContent:'center', gap:18 }}>
            <div style={{ width: 240, height: 160, background:C.hazard, borderRadius:24, display:'flex', alignItems:'center', justifyContent:'center', fontFamily: FONT_GROTESK, fontWeight:500, fontSize:18, color:'#1C1917', transform:`translateX(${interpolate(frame,[0,195],[ -10,10])}px)` }}>CHASE</div>
            <div style={{ width: 14, height: 2, background:C.hazard }} />
            <div style={{ width: 240, height: 160, background:'rgba(231,229,228,0.6)', borderRadius:24, display:'flex', alignItems:'center', justifyContent:'center', fontFamily: FONT_MONO, fontSize:12, color:'#1C1917', fontWeight:500 }}>2.39:1 FRAME</div>
          </div>
          <div style={{ position:'absolute', left:0, right:0, top:0, height:22, background:'#FFFBF5' }} />
          <div style={{ position:'absolute', left:0, right:0, bottom:0, height:22, background:'#FFFBF5' }} />
          <div style={{ position:'absolute', left:20, bottom:28, fontFamily: FONT_MONO, fontSize:10, letterSpacing:'0.12em', color:'rgba(231,229,228,0.6)' }}>HUD · 1920×450 · CINEMATIC BARS 22PX</div>
        </div>
        <div style={{ height:38, background:'rgba(255,251,245,0.7)', borderTop:'1px solid rgba(231,229,228,0.5)', display:'flex', alignItems:'center', padding:'0 14px', gap:10 }}>
          <div style={{ width:8, height:8, background:C.hazard, borderRadius:999 }} />
          <span style={{ fontFamily: FONT_MONO, fontSize:11, letterSpacing:'0.1em', color:'#1C1917' }}>CINEMATIC 3/3 · LETTERBOX CHASE</span>
          <span style={{ marginLeft:'auto', fontFamily: FONT_MONO, fontSize:10, color:'#78716C' }}>BEZIER PAN · 80PX RANGE</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// S15 Bento Grid 150f
const S15: React.FC = () => {
  const frame = useCurrentFrame();
  const cards = [
    {title:'RESEARCH', span:'large', color:C.violet, value:'evidence_*.json'},
    {title:'VIDEO', span:'', color:C.cam, value:'16 scenes'},
    {title:'OFFICE', span:'', color:C.cyan, value:'COM live'},
    {title:'DESIGN', span:'wide', color:C.hazard, value:'drawio + ppt'},
    {title:'CAD', span:'', color:C.green, value:'OpenSCAD'},
    {title:'QA', span:'tall', color:C.pink, value:'vision-qa'},
  ];
  return (
    <AbsoluteFill style={{ background: '#FFFBF5' }}>
      <BlueprintGrid opacity={0.09} />
      <BlueprintFrame />
      <TopBar idx={14} title="BENTO GRID" subtitle="CONTENT · 6 CARDS · MOSAIC" />
      <div style={{ position:'absolute', left:72+28, right:28, top:88, bottom:42, display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr', gridTemplateRows:'1.1fr 1fr', gap:14 }}>
        {cards.map((c,i)=>{
          const p = spring({ frame: frame - i*5, fps:FPS, config:{damping:26, stiffness:85, mass:0.8} });
          const isLarge = c.span==='large';
          const isWide = c.span==='wide';
          const isTall = c.span==='tall';
          return (
            <div key={c.title} style={{ 
              gridColumn: isLarge? 'span 1': isWide? 'span 2': undefined,
              gridRow: isLarge? 'span 2': isTall? 'span 2': undefined,
              background:'rgba(255,251,245,0.7)', border:`1px solid ${c.color}30`, borderRadius:24, padding:16, display:'flex', flexDirection:'column', gap:8, opacity: interpolate(p,[0,1],[0,1]), transform:`translateY(${interpolate(p,[0,1],[12,0])}px) scale(${interpolate(p,[0,1],[0.96,1])})`, overflow:'hidden', position:'relative'
            }}>
              <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:c.color }} />
              <div style={{ fontFamily: FONT_MONO, fontSize:11, letterSpacing:'0.12em', color:c.color, fontWeight:500 }}>{c.title}</div>
              <div style={{ fontFamily: FONT_GROTESK, fontSize: isLarge? 28:18, fontWeight:500, color:'#1C1917', lineHeight:1 }}>{c.value}</div>
              <div style={{ flex:1, background:`linear-gradient(135deg, ${c.color}18, transparent)`, borderRadius:24, border:'1px solid rgba(231,229,228,0.4)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily: FONT_MONO, fontSize:10, color:'#78716C' }}>{c.title} MODULE</div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// S16 Feature Timeline 195f
const S16: React.FC = () => {
  const frame = useCurrentFrame();
  const items = [
    {title:'MCP Harness', desc:'17 servers wired', color:C.cyan},
    {title:'Skill Packs', desc:'31 skills · 851K+508K+214K', color:C.violet},
    {title:'Chassis', desc:'INK #1C1917 · dot 24px · rail 72px', color:C.hazard},
    {title:'Render', desc:'6300f · 210s · 30fps', color:C.cam},
    {title:'Categories', desc:'9/9 cover · distinctive', color:C.green},
  ];
  const progress = interpolate(frame,[0,140],[0,1],{extrapolateRight:'clamp', easing:Easing.bezier(0.25,0.8,0.25,1)});
  return (
    <AbsoluteFill style={{ background: '#FFFBF5' }}>
      <BlueprintGrid opacity={0.08} />
      <BlueprintFrame />
      <TopBar idx={15} title="FEATURE TIMELINE" subtitle="CONTENT · VERTICAL · 5 NODES" />
      <div style={{ position:'absolute', left:72+28, right:28, top:88, bottom:42, display:'flex', gap:18 }}>
        <div style={{ width: 540, background:'rgba(255,251,245,0.7)', border:'1px solid #E7E5E4', borderRadius:24, padding:18, position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', left:32, top:18, bottom:18, width:2, background:'rgba(231,229,228,0.5)' }} />
          <div style={{ position:'absolute', left:32, top:18, width:2, height: `${progress*100}%`, background:`linear-gradient(180deg, ${C.cyan}, ${C.violet})`, transformOrigin:'top' }} />
          <div style={{ position:'absolute', left:29, top: interpolate(progress,[0,1],[18, 18 + (340*progress)]), width:8, height:8, borderRadius:999, background:C.signal, boxShadow:`0 0 10px ${C.signal}`, opacity: progress>0?1:0 }} />
          <div style={{ display:'flex', flexDirection:'column', gap:16, marginLeft:28 }}>
            {items.map((it,i)=>{
              const p = spring({ frame: frame - i*12, fps:FPS, config:{damping:26, stiffness:85, mass:0.8} });
              const active = progress*5 > i;
              return (
                <div key={it.title} style={{ display:'flex', gap:12, alignItems:'center', opacity: interpolate(p,[0,1],[0,1]), transform:`translateX(${interpolate(p,[0,1],[12,0])}px)` }}>
                  <div style={{ width:16, height:16, borderRadius:999, background: active? it.color:'#E7E5E4', border:`2px solid ${active? it.color:'#E7E5E4'}`, flexShrink:0, boxShadow: active? `0 0 8px ${it.color}60`: undefined }} />
                  <div style={{ flex:1, background: active? 'rgba(231,229,228,0.4)':'transparent', border:`1px solid ${active?'rgba(231,229,228,0.5)':'transparent'}`, borderRadius:10, padding:'10px 12px' }}>
                    <div style={{ fontFamily: FONT_MONO, fontSize:11, letterSpacing:'0.1em', color: active? it.color: '#78716C', fontWeight:500 }}>{it.title}</div>
                    <div style={{ fontFamily: FONT_MONO, fontSize:11, color: active? 'rgba(231,229,228,0.6)':'rgba(231,229,228,0.6)', marginTop:2 }}>{it.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ flex:1, display:'flex', flexDirection:'column', gap:12 }}>
          <div style={{ flex:1, background:`linear-gradient(135deg, ${C.violet}18, ${C.cyan}12)`, border:'1px solid #E7E5E4', borderRadius:24, padding:18, display:'flex', flexDirection:'column', justifyContent:'center', gap:10 }}>
            <div style={{ fontFamily: FONT_GROTESK, fontSize:32, fontWeight:500, color:'#1C1917', lineHeight:1 }}>Timeline reveals <span style={{ color:C.violet }}>feature</span> flow</div>
            <div style={{ fontFamily: FONT_MONO, fontSize:11, letterSpacing:'0.1em', color:'#78716C' }}>SPRING DAMP 26 / STIFF 85 · BEZIER(0.25,0.8,0.25,1)</div>
            <div style={{ height:1, background:'rgba(231,229,228,0.5)' }} />
            {['Distinctive aesthetics','30+ Remotion rules','PptxGenJS + QA'].map(t=>(
              <div key={t} style={{ display:'flex', gap:8, alignItems:'center' }}><div style={{ width:6, height:6, background:C.green, borderRadius:999 }} /><span style={{ fontFamily: FONT_MONO, fontSize:11, color:'#1C1917' }}>{t}</span></div>
            ))}
          </div>
          <div style={{ height:90, background:'rgba(255,251,245,0.7)', border:'1px solid rgba(231,229,228,0.8)', borderRadius:24, padding:14, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <span style={{ fontFamily: FONT_MONO, fontSize:11, color:'#78716C' }}>PROGRESS</span>
            <span style={{ fontFamily: FONT_MONO, fontSize:18, fontWeight:500, color:'#1C1917' }}>{Math.round(progress*100)}%</span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// S17 Card Stack 3D 120f
const S17: React.FC = () => {
  const frame = useCurrentFrame();
  const spread = interpolate(frame,[10,60],[0,1],{extrapolateLeft:'clamp', extrapolateRight:'clamp', easing:Easing.bezier(0.25,0.8,0.25,1)});
  return (
    <AbsoluteFill style={{ background: '#FFFBF5' }}>
      <BlueprintGrid opacity={0.09} />
      <BlueprintFrame />
      <TopBar idx={16} title="CARD STACK 3D" subtitle="CONTENT · STACK · PERSPECTIVE" />
      <div style={{ position:'absolute', left:72+28, right:28, top:88, bottom:42, display:'flex', alignItems:'center', justifyContent:'center', perspective: 1000 }}>
        <div style={{ position:'relative', width:720, height:420 }}>
          {[0,1,2,3,4].map(i=>{
            const p = spring({ frame: frame - i*6, fps:FPS, config:{damping:26, stiffness:85, mass:0.8} });
            const offsetX = interpolate(spread,[0,1],[0, (i-2)*86]);
            const offsetY = interpolate(spread,[0,1],[0, (i-2)*12]);
            const rot = interpolate(spread,[0,1],[0, (i-2)*6]);
            return (
              <div key={i} style={{ position:'absolute', left:'50%', top:'50%', width:320, height:200, background: i===2? 'rgba(255,251,245,0.85)':'rgba(255,251,245,0.7)', border:`1px solid ${i===2? C.cam: '#E7E5E4'}`, borderRadius:24, boxShadow:'0 12px 24px rgba(28,25,23,0.08)', display:'flex', flexDirection:'column', padding:14, gap:8, transform:`translate(-50%,-50%) translateX(${offsetX}px) translateY(${offsetY}px) rotate(${rot}deg) scale(${0.92 + i*0.02})`, opacity: interpolate(p,[0,1],[0,1]), zIndex: i===2? 5: i }}>
                <div style={{ height:3, background: i===2? C.cam: C.steel, borderRadius:999, opacity:0.9 }} />
                <div style={{ fontFamily: FONT_MONO, fontSize:11, letterSpacing:'0.1em', color: i===2? C.cam: C.steel, fontWeight:500 }}>CARD 0{i+1} · {i===2?'FOCUS':'STACK'}</div>
                <div style={{ flex:1, background:'rgba(231,229,228,0.4)', borderRadius:10, border:'1px solid rgba(231,229,228,0.4)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily: FONT_GROTESK, fontSize:18, fontWeight:500, color: i===2? C.line:'rgba(231,229,228,0.6)' }}>{i===2?'MEGA ULTRA':'—'}</div>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// S18 Split Reveal 120f
const S18: React.FC = () => {
  const frame = useCurrentFrame();
  const split = interpolate(frame,[0,70],[0,1],{extrapolateLeft:'clamp', extrapolateRight:'clamp', easing:Easing.bezier(0.25,0.8,0.25,1)});
  const x = interpolate(split,[0,1],[12,50]);
  return (
    <AbsoluteFill style={{ background: '#FFFBF5' }}>
      <BlueprintGrid opacity={0.08} />
      <BlueprintFrame />
      <TopBar idx={17} title="SPLIT REVEAL" subtitle="CONTENT · DIVIDER DRAG · 50%" />
      <div style={{ position:'absolute', left:72+28, right:28, top:88, bottom:42, borderRadius:24, overflow:'hidden', border:'1px solid #E7E5E4', display:'flex' } as any}>
        <div style={{ position:'absolute', inset:0, display:'flex' }}>
          <div style={{ width:`${x}%`, background:`linear-gradient(135deg, ${C.cyan}18, rgba(28,25,23,1))`, borderRight:'1px solid rgba(231,229,228,0.5)', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:8 }}>
            <span style={{ fontFamily: FONT_MONO, fontSize:11, letterSpacing:'0.14em', color:C.cyan, fontWeight:500 }}>BEFORE</span>
            <span style={{ fontFamily: FONT_GROTESK, fontSize:28, fontWeight:500, color:'#1C1917' }}>Blueprint</span>
          </div>
          <div style={{ flex:1, background:`linear-gradient(135deg, ${C.cam}14, #1C1917)`, display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:8 }}>
            <span style={{ fontFamily: FONT_MONO, fontSize:11, letterSpacing:'0.14em', color:C.cam, fontWeight:500 }}>AFTER</span>
            <span style={{ fontFamily: FONT_GROTESK, fontSize:28, fontWeight:500, color:'#1C1917' }}>Ultra</span>
          </div>
        </div>
        <div style={{ position:'absolute', left: `calc(${x}% - 1px)`, top:0, bottom:0, width:2, background:C.line, boxShadow:`0 0 12px rgba(231,229,228,0.6)` }} />
        <div style={{ position:'absolute', left: `calc(${x}% - 18px)`, top:'50%', width:36, height:36, background:C.line, borderRadius:999, display:'flex', alignItems:'center', justifyContent:'center', transform:'translateY(-50%)', boxShadow:'0 8px 24px rgba(28,25,23,0.22)', border:'2px solid #1C1917' }}>
          <span style={{ fontFamily: FONT_MONO, fontSize:12, fontWeight:500, color:'#1C1917' }}>↔</span>
        </div>
        <div style={{ position:'absolute', bottom:14, left:14, background:'rgba(28,25,23,0.72)', border:'1px solid #E7E5E4', borderRadius:999, padding:'6px 10px', fontFamily: FONT_MONO, fontSize:11, color:'#78716C' }}>SPLIT {Math.round(x)}% · BEZIER</div>
      </div>
    </AbsoluteFill>
  );
};

// S19 Emblem Spin 120f
const S19: React.FC = () => {
  const frame = useCurrentFrame();
  const rot = interpolate(frame,[0,120],[0,360],{easing:Easing.bezier(0.25,0.8,0.25,1)});
  const scale = spring({ frame, fps:FPS, config:{damping:26, stiffness:85, mass:0.8} });
  return (
    <AbsoluteFill style={{ background: '#FFFBF5' }}>
      <BlueprintGrid opacity={0.09} />
      <BlueprintFrame />
      <TopBar idx={18} title="EMBLEM SPIN" subtitle="LOGO · 360° · SPRING" />
      <div style={{ position:'absolute', left:72+28, right:28, top:88, bottom:42, display:'flex', alignItems:'center', justifyContent:'center', gap:32 }}>
        <div style={{ width:380, height:380, borderRadius:999, border:`2px solid ${C.yellow}`, background:'radial-gradient(circle at 30% 30%, rgba(250,204,21,0.18), rgba(255,251,245,0.9))', display:'flex', alignItems:'center', justifyContent:'center', transform:`rotate(${rot}deg) scale(${interpolate(scale,[0,1],[0.7,1])})`, boxShadow:`0 0 40px ${C.yellow}30`, position:'relative' }}>
          <div style={{ position:'absolute', inset:12, border:'1px dashed rgba(250,204,21,0.3)', borderRadius:999 }} />
          <div style={{ width:180, height:180, borderRadius:999, background:'#FFFBF5', border:`1px solid ${C.yellow}`, display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:4, transform:`rotate(${-rot}deg)` }}>
            <span style={{ fontFamily: FONT_HEADING, fontSize:56, fontWeight:500, color:'#1C1917', lineHeight:1 }}>9.5</span>
            <span style={{ fontFamily: FONT_MONO, fontSize:11, letterSpacing:'0.18em', color:C.yellow, fontWeight:500 }}>ULTRA</span>
          </div>
          <div style={{ position:'absolute', top: -10, left:'50%', transform:'translateX(-50%)', background:C.yellow, color:'#1C1917', fontFamily: FONT_MONO, fontSize:11, fontWeight:500, padding:'4px 8px', borderRadius:999 }}>● 1920×1080</div>
        </div>
        <div style={{ flex:1, display:'flex', flexDirection:'column', gap:12 }}>
          <div style={{ background:'rgba(255,251,245,0.7)', border:`1px solid ${C.yellow}30`, borderRadius:24, padding:18, display:'flex', flexDirection:'column', gap:8 }}>
            <div style={{ fontFamily: FONT_MONO, fontSize:11, letterSpacing:'0.14em', color:C.yellow, fontWeight:500 }}>LOGO · EMBLEM · SPIN</div>
            <div style={{ fontFamily: FONT_GROTESK, fontSize:28, fontWeight:500, color:'#1C1917', lineHeight:1.1 }}>Emblem <span style={{ color:C.yellow }}>spins</span> 360° with spring</div>
            <div style={{ fontFamily: FONT_MONO, fontSize:11, color:'#78716C' }}>ROT {Math.round(rot)}° · DAMP 26 / STIFF 85 · BEZIER</div>
          </div>
          <div style={{ display:'flex', gap:10 }}>
            {['SVG','RING','CENTER'].map(t=>(
              <div key={t} style={{ flex:1, background:'rgba(255,251,245,0.7)', border:'1px solid rgba(231,229,228,0.8)', borderRadius:24, padding:12, textAlign:'center', fontFamily: FONT_MONO, fontSize:11, color:'#78716C' }}>{t}</div>
            ))}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// S20 Stroke Minimal 120f
const S20: React.FC = () => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame,[0,80],[0,1],{extrapolateLeft:'clamp', extrapolateRight:'clamp', easing:Easing.bezier(0.25,0.8,0.25,1)});
  const totalLen = 1200;
  const offset = totalLen * (1 - progress);
  return (
    <AbsoluteFill style={{ background: '#FFFBF5' }}>
      <BlueprintGrid opacity={0.08} />
      <BlueprintFrame />
      <TopBar idx={19} title="STROKE MINIMAL" subtitle="LOGO · STROKE DASH · 1200" />
      <div style={{ position:'absolute', left:72+28, right:28, top:88, bottom:42, background:'rgba(255,251,245,0.7)', border:'1px solid #E7E5E4', borderRadius:24, display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:18 }}>
        <svg width={560} height={200} viewBox="0 0 560 200">
          <path d="M 40 100 L 120 40 L 200 100 L 280 40 L 360 100 L 440 40 L 520 100" fill="none" stroke={C.line} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={totalLen} strokeDashoffset={offset} />
          <circle cx={40} cy={100} r={6} fill={C.line} opacity={progress>0?1:0} />
          <circle cx={520} cy={100} r={6} fill={C.line} opacity={progress>0.9?1:0} />
        </svg>
        <div style={{ display:'flex', gap:10, alignItems:'center' }}>
          <div style={{ width:40, height:2, background:C.line, opacity: progress }} />
          <span style={{ fontFamily: FONT_MONO, fontSize:11, letterSpacing:'0.14em', color:'#1C1917' }}>{Math.round(progress*100)}% · STROKE</span>
          <div style={{ width:40, height:2, background:C.line, opacity: progress }} />
        </div>
        <div style={{ fontFamily: FONT_GROTESK, fontSize:22, fontWeight:500, color:'#1C1917', opacity: interpolate(progress,[0.6,1],[0,1]) }}>Minimal <span style={{ color:'#1C1917', fontWeight:400, fontStyle:'italic' }}>line</span> — 1 path · 1 color</div>
      </div>
    </AbsoluteFill>
  );
};

// S21 Phone Mockup 150f
const S21: React.FC = () => {
  const frame = useCurrentFrame();
  const scrollY = interpolate(frame,[0,150], [0, -120], {easing:Easing.bezier(0.25,0.8,0.25,1)});
  return (
    <AbsoluteFill style={{ background: '#FFFBF5' }}>
      <BlueprintGrid opacity={0.09} />
      <BlueprintFrame />
      <TopBar idx={20} title="PHONE MOCKUP" subtitle="IMAGE · SCROLL · 150F" />
      <div style={{ position:'absolute', left:72+28, right:28, top:88, bottom:42, display:'flex', gap:18, alignItems:'center', justifyContent:'center' }}>
        <div style={{ width:320, height:620, background:'#FFFBF5', border:'1px solid #E7E5E4', borderRadius:32, padding:14, boxShadow:'0 12px 24px rgba(28,25,23,0.28)', display:'flex', flexDirection:'column', gap:10, overflow:'hidden', position:'relative' }}>
          <div style={{ height:22, display:'flex', justifyContent:'space-between', alignItems:'center', padding:'0 6px' }}>
            <span style={{ fontFamily: FONT_MONO, fontSize:10, color:'#78716C' }}>9:41</span>
            <div style={{ width:80, height:14, background:'#E7E5E4', borderRadius:999 }} />
            <span style={{ fontFamily: FONT_MONO, fontSize:10, color:'#78716C' }}>●●●</span>
          </div>
          <div style={{ flex:1, background:'rgba(255,251,245,0.9)', borderRadius:20, overflow:'hidden', border:'1px solid rgba(231,229,228,0.5)', position:'relative' }}>
            <div style={{ position:'absolute', left:0, right:0, top: scrollY, display:'flex', flexDirection:'column', gap:10, padding:12 }}>
              {Array.from({length:6},(_,i)=>(
                <div key={i} style={{ height:86, background: i===0? `${C.violet}18`: 'rgba(231,229,228,0.4)', border:`1px solid ${i===0? `${C.violet}30`:'rgba(231,229,228,0.5)'}`, borderRadius:24, padding:10, display:'flex', gap:10 }}>
                  <div style={{ width:64, height:64, borderRadius:10, background: i===0? C.violet: C.steel, opacity:0.9 }} />
                  <div style={{ flex:1, display:'flex', flexDirection:'column', gap:6, justifyContent:'center' }}>
                    <div style={{ height:8, background:i===0? 'rgba(231,229,228,0.6)':'rgba(231,229,228,0.6)', borderRadius:999, width: `${70+i*4}%` }} />
                    <div style={{ height:6, background:'rgba(231,229,228,0.6)', borderRadius:999, width:'90%' }} />
                    <div style={{ height:6, background:'#E7E5E4', borderRadius:999, width:'60%' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ height:4, background:'rgba(231,229,228,0.6)', borderRadius:999, width:80, alignSelf:'center' }} />
        </div>
        <div style={{ flex:1, display:'flex', flexDirection:'column', gap:12, maxWidth:560 }}>
          <div style={{ background:'rgba(255,251,245,0.7)', border:'1px solid #E7E5E4', borderRadius:24, padding:18, display:'flex', flexDirection:'column', gap:10 }}>
            <div style={{ fontFamily: FONT_MONO, fontSize:11, letterSpacing:'0.14em', color:C.violet, fontWeight:500 }}>PHONE · 320×620 · RADIUS 32</div>
            <div style={{ fontFamily: FONT_GROTESK, fontSize:28, fontWeight:500, color:'#1C1917', lineHeight:1.1 }}>Responsive <span style={{ color:C.violet }}>mockup</span> scrolls with Easing.bezier</div>
            <div style={{ fontFamily: FONT_MONO, fontSize:11, color:'#78716C' }}>SCROLL Y {Math.round(scrollY)}px · FRAME {frame}/150</div>
          </div>
          <div style={{ display:'flex', gap:10 }}>
            {['PORTRAIT','SCROLL','SHADOW'].map(t=>(
              <div key={t} style={{ flex:1, background:'rgba(255,251,245,0.7)', border:'1px solid rgba(231,229,228,0.5)', borderRadius:24, padding:10, textAlign:'center', fontFamily: FONT_MONO, fontSize:11, color:'#78716C' }}>{t}</div>
            ))}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// S22 Media Carousel 150f
const S22: React.FC = () => {
  const frame = useCurrentFrame();
  const offset = interpolate(frame,[0,150], [0, -640], {easing:Easing.bezier(0.25,0.8,0.25,1)});
  const items = [
    {color:C.cam, label:'SAAS DASH'},
    {color:C.violet, label:'CINEMATIC'},
    {color:C.cyan, label:'BENTO'},
    {color:C.hazard, label:'TIMELINE'},
    {color:C.green, label:'PARTICLE'},
    {color:C.cam, label:'GRADIENT'},
  ];
  return (
    <AbsoluteFill style={{ background: '#FFFBF5' }}>
      <BlueprintGrid opacity={0.08} />
      <BlueprintFrame />
      <TopBar idx={21} title="MEDIA CAROUSEL" subtitle="IMAGE · HORIZONTAL · -640PX" />
      <div style={{ position:'absolute', left:72+28, right:28, top:88, bottom:42, background:'rgba(255,251,245,0.7)', border:'1px solid #E7E5E4', borderRadius:24, padding:18, display:'flex', flexDirection:'column', gap:14, overflow:'hidden' }}>
        <div style={{ flex:1, position:'relative', overflow:'hidden', borderRadius:24, border:'1px solid rgba(231,229,228,0.4)', background:'rgba(255,251,245,0.6)', display:'flex', alignItems:'center' }}>
          <div style={{ display:'flex', gap:14, transform:`translateX(${offset}px)`, paddingLeft:14 }}>
            {items.concat(items).map((it,i)=>(
              <div key={i} style={{ width:260, height:180, background: `${it.color}14`, border:`1px solid ${it.color}30`, borderRadius:24, display:'flex', flexDirection:'column', padding:12, gap:8, flexShrink:0 }}>
                <div style={{ flex:1, background: it.color, borderRadius:10, opacity:0.9, display:'flex', alignItems:'center', justifyContent:'center', fontFamily: FONT_MONO, fontSize:12, fontWeight:500, color:'#1C1917' }}>{it.label}</div>
                <div style={{ fontFamily: FONT_MONO, fontSize:11, color:'#78716C' }}>{String(i+1).padStart(2,'0')} · {it.color}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display:'flex', gap:8, justifyContent:'center', alignItems:'center' }}>
          {items.slice(0,5).map((_,i)=>(
            <div key={i} style={{ width: frame%30> (i*6) ? 22:8, height:8, borderRadius:999, background: i=== Math.floor(((frame/150)*5)%5)? C.cam: 'rgba(231,229,228,0.6)', transition:'width 0.2s' } as any} />
          ))}
          <span style={{ marginLeft:12, fontFamily: FONT_MONO, fontSize:11, color:'#78716C' }}>CAROUSEL OFFSET {Math.round(offset)}px</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// S23 Particle Field 195f
const S23: React.FC = () => {
  const frame = useCurrentFrame();
  const particles = Array.from({length:48},(_,i)=>{
    const x = ((i*173 + 53)%100)/100 * 1100;
    const y = ((i*241 + 97)%100)/100 * 360;
    const driftX = Math.sin(frame*0.02 + i*1.3)*18;
    const driftY = Math.cos(frame*0.015 + i*0.9)*14;
    const s = 6 + (i%3)*4;
    const op = 0.5 + Math.sin(frame*0.05 + i)*0.3;
    return {x:x+driftX, y:y+driftY, s, op, i};
  });
  return (
    <AbsoluteFill style={{ background: '#FFFBF5' }}>
      <BlueprintGrid opacity={0.07} />
      <BlueprintFrame />
      <TopBar idx={22} title="PARTICLE FIELD" subtitle="BACKGROUND · 48 DOTS · DRIFT" />
      <div style={{ position:'absolute', left:72+28, right:28, top:88, bottom:42, background:'rgba(255,251,245,0.5)', border:'1px solid #E7E5E4', borderRadius:24, padding:12, overflow:'hidden' }}>
        <svg width="100%" height={360} viewBox="0 0 1100 360" style={{ display:'block' }}>
          <rect x={0} y={0} width={1100} height={360} rx={12} fill="rgba(255,251,245,0.6)" />
          {particles.map(p=>{
            const n1 = particles[(p.i+7)%48];
            const n2 = particles[(p.i+13)%48];
            const d1 = Math.hypot(p.x - n1.x, p.y - n1.y);
            const d2 = Math.hypot(p.x - n2.x, p.y - n2.y);
            return (
              <g key={p.i} opacity={p.op*0.9}>
                {d1<140 && <line x1={p.x} y1={p.y} x2={n1.x} y2={n1.y} stroke={C.cyan} strokeWidth={1} opacity={0.18} />}
                {d2<120 && <line x1={p.x} y1={p.y} x2={n2.x} y2={n2.y} stroke={C.cyan} strokeWidth={1} opacity={0.12} />}
                <circle cx={p.x} cy={p.y} r={p.s/2} fill={p.i%3===0? C.cyan: p.i%3===1? C.violet: C.hazard} stroke="#E7E5E4" />
              </g>
            );
          })}
        </svg>
        <div style={{ display:'flex', gap:8, marginTop:8, alignItems:'center' }}>
          <span style={{ fontFamily: FONT_MONO, fontSize:11, letterSpacing:'0.12em', color:C.cyan, fontWeight:500 }}>48 PARTICLES · LINES &lt;140PX · DRIFT 18PX</span>
          <span style={{ marginLeft:'auto', fontFamily: FONT_MONO, fontSize:11, color:'#78716C' }}>FRAME {frame}/195 · #00D4FF</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// S24 Gradient Mesh 150f
const S24: React.FC = () => {
  const frame = useCurrentFrame();
  const t = frame/150;
  const blobs = [
    {x: 20 + Math.sin(t*Math.PI*2)*10, y: 30 + Math.cos(t*Math.PI*1.6)*8, c: C.yellow, s: 520},
    {x: 78 + Math.cos(t*Math.PI*1.8)*12, y: 68 + Math.sin(t*Math.PI*2)*10, c: C.pink, s: 460},
    {x: 52 + Math.sin(t*Math.PI*1.4)*14, y: 52 + Math.cos(t*Math.PI*2)*12, c: C.violet, s: 600},
    {x: 68 + Math.cos(t*Math.PI*2.2)*8, y: 22 + Math.sin(t*Math.PI*1.5)*10, c: C.cyan, s: 400},
  ];
  return (
    <AbsoluteFill style={{ background: '#FFFBF5' }}>
      <BlueprintGrid opacity={0.06} />
      <BlueprintFrame />
      <TopBar idx={23} title="GRADIENT MESH" subtitle="BACKGROUND · 4 BLOBS · BEZIER" />
      <div style={{ position:'absolute', left:72+28, right:28, top:88, bottom:42, borderRadius:24, overflow:'hidden', border:'1px solid #E7E5E4', background:'#FFFBF5' }}>
        {blobs.map((b,i)=>(
          <div key={i} style={{ position:'absolute', left:`${b.x}%`, top:`${b.y}%`, width:b.s, height:b.s, background:`radial-gradient(circle, ${b.c} 0%, transparent 68%)`, opacity:0.32, transform:'translate(-50%,-50%)', filter:'blur(1px)', mixBlendMode:'screen' as any }} />
        ))}
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(800px 400px at 50% 50%, transparent 40%, rgba(28,25,23,0.55) 100%)' }} />
        <div style={{ position:'absolute', left:18, right:18, bottom:18, background:'rgba(255,251,245,0.7)', border:'1px solid #E7E5E4', borderRadius:24, padding:'12px 14px', display:'flex', justifyContent:'space-between', alignItems:'center', backdropFilter:'blur(16px)' }}>
          <span style={{ fontFamily: FONT_MONO, fontSize:11, letterSpacing:'0.12em', color:C.yellow, fontWeight:500 }}>MESH · 4 RADIAL BLOBS · BLUR · SCREEN</span>
          <span style={{ fontFamily: FONT_MONO, fontSize:11, color:'#78716C' }}>t={t.toFixed(2)} · 150F</span>
        </div>
        <div style={{ position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-50%)', textAlign:'center' }}>
          <div style={{ fontFamily: FONT_DISPLAY, fontStyle:'italic', fontSize:46, fontWeight:500, color:'rgba(231,229,228,0.6)', letterSpacing:'-0.02em', textShadow:'0 4px 24px rgba(28,25,23,0.5)' }}>Gradient <span style={{ color:C.yellow }}>Mesh</span></div>
          <div style={{ fontFamily: FONT_MONO, fontSize:11, letterSpacing:'0.14em', color:'rgba(231,229,228,0.6)', marginTop:6 }}>DAMP 26 / STIFF 85 · MESH GRADIENT</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// S25 Transition Sampler 90f
const S25: React.FC = () => {
  const frame = useCurrentFrame();
  const p = interpolate(frame,[0,70],[0,1],{extrapolateLeft:'clamp', extrapolateRight:'clamp', easing:Easing.bezier(0.25,0.8,0.25,1)});
  const transitions = [
    {name:'WIPE', desc:'→', prog: p},
    {name:'SLIDE', desc:'↗', prog: p},
    {name:'ZOOM', desc:'◎', prog: p},
    {name:'FADE', desc:'◐', prog: p},
  ];
  return (
    <AbsoluteFill style={{ background: '#FFFBF5' }}>
      <BlueprintGrid opacity={0.08} />
      <BlueprintFrame />
      <TopBar idx={24} title="TRANSITION SAMPLER" subtitle="4 WIPES · 90F" />
      <div style={{ position:'absolute', left:72+28, right:28, top:88, bottom:42, display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:12 }}>
        {transitions.map((tr,i)=>{
          const delayP = spring({ frame: frame - i*6, fps:FPS, config:{damping:26, stiffness:85, mass:0.8} });
          return (
            <div key={tr.name} style={{ background:'rgba(255,251,245,0.7)', border:'1px solid #E7E5E4', borderRadius:24, padding:12, display:'flex', flexDirection:'column', gap:8, opacity: interpolate(delayP,[0,1],[0,1]) }}>
              <div style={{ fontFamily: FONT_MONO, fontSize:11, letterSpacing:'0.12em', color: C.signal, fontWeight:500 }}>{String(i+1).padStart(2,'0')} · {tr.name}</div>
              <div style={{ flex:1, borderRadius:10, overflow:'hidden', border:'1px solid rgba(231,229,228,0.5)', position:'relative', background:'#FFFBF5' }}>
                {tr.name==='WIPE' && <div style={{ position:'absolute', left:0, top:0, bottom:0, width:`${tr.prog*100}%`, background:C.signal, opacity:0.9 }} />}
                {tr.name==='SLIDE' && <div style={{ position:'absolute', left: `${(1-tr.prog)*100}%`, top:0, bottom:0, width:'100%', background:C.cyan, opacity:0.9, display:'flex', alignItems:'center', justifyContent:'center', fontFamily: FONT_MONO, fontSize:10, color:'#1C1917' }}>SLIDE</div>}
                {tr.name==='ZOOM' && <div style={{ position:'absolute', left:'50%', top:'50%', width: `${60+tr.prog*60}%`, height: `${60+tr.prog*60}%`, background:C.hazard, borderRadius:24, transform:'translate(-50%,-50%)', opacity: 0.2 + tr.prog*0.7, display:'flex', alignItems:'center', justifyContent:'center', fontFamily: FONT_MONO, fontSize:10, color:'#1C1917' }}>ZOOM</div>}
                {tr.name==='FADE' && <div style={{ position:'absolute', inset:0, background:C.violet, opacity: tr.prog }} />}
                <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', fontFamily: FONT_MONO, fontSize:22, color: tr.prog>0.5?'#1C1917':'rgba(231,229,228,0.6)', fontWeight:500 }}>{tr.desc}</div>
              </div>
              <div style={{ height:4, background:'rgba(231,229,228,0.5)', borderRadius:999, overflow:'hidden' }}><div style={{ width:`${tr.prog*100}%`, height:'100%', background:C.signal }} /></div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// S26 Finale CTA 180f (+ pad)
const S26: React.FC = () => {
  const frame = useCurrentFrame();
  const p = spring({ frame, fps:FPS, config:{damping:26, stiffness:85, mass:0.8} });
  const shimmer = interpolate(frame,[0,60],[0,1],{extrapolateRight:'clamp', easing:Easing.bezier(0.25,0.8,0.25,1)});
  return (
    <AbsoluteFill style={{ background: '#FFFBF5' }}>
      <BlueprintGrid opacity={0.06} />
      <div style={{ position:'absolute', left:72, top:0, right:0, height:10, background:`repeating-linear-gradient(135deg, #F8F5F0 0 8px, #FFFFFF 8px 16px)`, opacity:0.4, borderBottom:'1px solid #E7E5E4' }} />
      <BlueprintFrame />
      <TopBar idx={25} title="FINALE CTA" subtitle="CTA · 180F + 2385F HOLD · HAZARD" />
      <div style={{ position:'absolute', left:'50%', top:'50%', transform:`translate(-50%,-52%) translateY(${interpolate(p,[0,1],[12,0])}px)`, width:1100, background:C.hazard, border:'2px solid #1C1917', borderRadius:24, boxShadow:'0 12px 24px rgba(28,25,23,0.08), 0 0 0 1px rgba(231,229,228,0.6) inset', padding:20, opacity: interpolate(p,[0,1],[0,1]) }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:14 }}>
          <div>
            <div style={{ fontFamily: FONT_MONO, fontSize:11, letterSpacing:'0.18em', color:'#1C1917', fontWeight:500 }}>▓ HARNESS 9.5 ULTRA — SOFT CANVAS</div>
            <div style={{ fontFamily: FONT_DISPLAY, fontStyle:'italic', fontSize:48, lineHeight:1.05, letterSpacing:'-0.03em', color:'#1C1917', marginTop:6, fontWeight:500 }}>Copy. Paste. <span style={{ textDecoration:'underline', textDecorationThickness:3, textUnderlineOffset:6 }}>Ultra.</span></div>
            <div style={{ fontFamily: FONT_MONO, fontSize:11, letterSpacing:'0.1em', color:'rgba(28,25,23,0.65)', marginTop:6 }}>26 SCENES · 6300F · 210s · 9/9 CATEGORIES · DAMP 26 / STIFF 85 · BEZIER(0.25,0.8,0.25,1)</div>
          </div>
          <div style={{ background:'#FFFBF5', color:C.hazard, fontFamily: FONT_MONO, fontSize:11, letterSpacing:'0.12em', fontWeight:500, padding:'8px 10px', textAlign:'right', lineHeight:1.4, borderRadius:8 }}>
            3 NEW SKILLS<br/>851K + 508K + 214K
          </div>
        </div>
        <div style={{ marginTop:14, display:'flex', flexDirection:'column', gap:8 }}>
          {[
            {label:'01 — FRONTEND DESIGN', cmd:'npx skills add anthropics/skills --skill frontend-design', note:'851K · aesthetics'},
            {label:'02 — REMOTION BEST', cmd:'npx skills add remotion-dev/skills --skill remotion-best-practices', note:'508K · 30+ rules'},
            {label:'03 — PPTX', cmd:'npx skills add anthropics/skills --skill pptx', note:'214K · PptxGenJS'},
          ].map((c,i)=>{
            const rp = spring({ frame: frame - 10 - i*7, fps:FPS, config:{damping:26, stiffness:85, mass:0.8} });
            return (
              <div key={c.cmd} style={{ background:'#FFFBF5', border:'1px solid rgba(255,255,255,0.06)', borderRadius:24, padding:'12px 14px', display:'flex', alignItems:'center', gap:12, opacity: interpolate(rp,[0,1],[0,1]), transform:`translateY(${interpolate(rp,[0,1],[8,0])}px)` }}>
                <div style={{ fontFamily: FONT_MONO, fontSize:10, letterSpacing:'0.12em', color:C.hazard, fontWeight:500, background:'rgba(255,214,10,0.12)', padding:'3px 6px', border:'1px solid rgba(255,214,10,0.28)', borderRadius:6, whiteSpace:'nowrap' }}>{c.label}</div>
                <code style={{ fontFamily: FONT_MONO, fontSize:13, letterSpacing:'0.02em', color:'#1C1917', fontWeight:500, whiteSpace:'nowrap' }}>{c.cmd}</code>
                <span style={{ marginLeft:'auto', fontFamily: FONT_MONO, fontSize:11, color:'rgba(231,229,228,0.6)', whiteSpace:'nowrap' }}>{c.note}</span>
                <div style={{ width:24, height:24, background:C.hazard, display:'flex', alignItems:'center', justifyContent:'center', borderRadius:6, flexShrink:0 }}><span style={{ fontFamily: FONT_MONO, fontSize:11, fontWeight:500, color:'#1C1917' }}>↵</span></div>
              </div>
            );
          })}
        </div>
        <div style={{ marginTop:12, display:'flex', gap:8, alignItems:'center' }}>
          <div style={{ flex:1, height:1, background:'rgba(28,25,23,0.18)' }} />
          <span style={{ fontFamily: FONT_MONO, fontSize:10, letterSpacing:'0.12em', color:'#1C1917', fontWeight:500 }}>or npx skills add in any project · restart opencode</span>
          <div style={{ flex:1, height:1, background:'rgba(28,25,23,0.18)' }} />
        </div>
      </div>
      <div style={{ position:'absolute', left:72, right:0, bottom:36, height:28, background:`repeating-linear-gradient(135deg, #F8F5F0 0 8px, #FFFFFF 8px 16px)`, opacity:0.4, borderTop:'1px solid #E7E5E4', display:'flex', alignItems:'center', paddingLeft:14, justifyContent:'space-between', paddingRight:14 }}>
        <div style={{ fontFamily: FONT_MONO, fontSize:10, letterSpacing:'0.14em', color:'#1C1917', fontWeight:500 }}>▓ MEGA HARNESS 9.5 ULTRA — 26 SCENES — MESH 40PX / RAIL 1PX BLUR / BORDER 1PX — SPACE GROTESK + JETBRAINS MONO — SPRING 18/120</div>
        <div style={{ fontFamily: FONT_MONO, fontSize:10, color:'#1C1917', fontWeight:500 }}>{frame}/180 (+{PAD_FRAMES} hold) · {ACCENTS[25]}</div>
      </div>
      <div style={{ position:'absolute', left:72, right:0, bottom:0, height:22, background:'#FFFBF5', borderTop:'1px solid #E7E5E4', display:'flex', alignItems:'center', justifyContent:'center' }}>
        <span style={{ fontFamily: FONT_MONO, fontSize:10, letterSpacing:'0.14em', color:'rgba(231,229,228,0.6)' }}>NO GRADIENT WHITE CARD · NO FLOATING 3D · ONLY INK, LINE, SIGNAL & HAZARD · BUILT WITH REMOTION 4.X · PAD HOLD EXTENDS TO 6300F</span>
      </div>
      {/* shimmer sweep */}
      <div style={{ position:'absolute', left:72, top:0, bottom:0, width: 2, background: C.hazard, opacity: 0.0 + shimmer*0.0 }} />
    </AbsoluteFill>
  );
};

// Scene map
const SCENES: React.FC[] = [S1,S2,S3,S4,S5,S6,S7,S8,S9,S10,S11,S12,S13,S14,S15,S16,S17,S18,S19,S20,S21,S22,S23,S24,S25,S26];

// ——— ROOT ———
export const MegaHarness95Soft: React.FC = () => {
  const frame = useCurrentFrame();
  // active index for rail
  let acc=0;
  let activeIdx=0;
  for(let i=0;i<DURATIONS.length;i++){
    const dur = i===DURATIONS.length-1 ? DURATIONS[i] + PAD_FRAMES : DURATIONS[i];
    if(frame >= acc && frame < acc + dur){ activeIdx=i; break; }
    acc += dur;
  }
  // build accumulated offsets
  let off=0;
  const seqs = SCENES.map((Comp,i)=>{
    const dur = i===SCENES.length-1 ? DURATIONS[i] + PAD_FRAMES : DURATIONS[i];
    const el = <Sequence key={i} from={off} durationInFrames={dur}><Comp /></Sequence>;
    off += dur;
    return el;
  });
  return (
    <AbsoluteFill style={{ background: '#FFFBF5' }}>
      <FontStyles />
      <LeftRail active={activeIdx} />
      <div style={{ position:'absolute', left:72, top:0, right:0, bottom:0 }}>
        {seqs}
      </div>
      <div style={{ position:'absolute', inset:0, left:72, background:'radial-gradient(1200px 700px at 70% 38%, transparent 60%, rgba(0,0,0,0.14) 100%)', pointerEvents:'none' }} />
    </AbsoluteFill>
  );
};

export default MegaHarness95Soft;
