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
// CONSTANTS
// ============================================================
const FPS = 30;
const SCENE_DUR = 750; // 25 giây mỗi cảnh
const LAST_DUR = 900; // cảnh cuối 30 giây

const FONT = `'Segoe UI', system-ui, -apple-system, Arial, sans-serif`;
const MONO = `'Courier New', 'Consolas', monospace`;

const C = {
  bg: '#F0F4FF',
  dark: '#0F172A',
  slate: '#475569',
  muted: '#94A3B8',
  noun: '#2563EB',
  verb: '#7C3AED',
  adj: '#059669',
  adv: '#D97706',
  error: '#DC2626',
  success: '#16A34A',
  warning: '#D97706',
  info: '#0891B2',
};

const wordColors: Record<string, string> = { noun: C.noun, verb: C.verb, adj: C.adj, adv: C.adv };

// ============================================================
// SHARED COMPONENTS
// ============================================================

const BokehCircles: React.FC<{ count?: number }> = ({ count = 10 }) => {
  const frame = useCurrentFrame();
  const { width, height, fps } = useVideoConfig();
  const t = frame / fps;
  const circles = Array.from({ length: count }, (_, i) => ({
    x: ((i * 173 + 53) % 100) / 100 * width + Math.sin(t * 0.18 + i * 1.3) * 28,
    y: ((i * 241 + 97) % 100) / 100 * height + Math.cos(t * 0.13 + i * 0.9) * 22,
    size: (50 + ((i * 37 + 11) % 90)) * (Math.sin(t * 0.35 + i * 0.7) * 0.2 + 1),
    opacity: 0.06 + ((i * 19 + 7) % 20) / 300,
    rgb: [[37, 99, 235], [124, 58, 237], [5, 150, 105], [217, 119, 6]][i % 4],
    key: i,
  }));
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {circles.map((c) => (
        <div key={c.key} style={{
          position: 'absolute', left: c.x, top: c.y,
          width: c.size, height: c.size, borderRadius: '50%',
          background: `radial-gradient(circle, rgba(${c.rgb[0]},${c.rgb[1]},${c.rgb[2]},${c.opacity}) 0%, transparent 70%)`,
          transform: 'translate(-50%, -50%)',
        }} />
      ))}
    </div>
  );
};

const glassStyle = (extra: React.CSSProperties = {}): React.CSSProperties => ({
  background: 'rgba(255,255,255,0.82)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  borderRadius: 24,
  border: '1px solid rgba(255,255,255,0.9)',
  boxShadow: '0 8px 32px rgba(15,23,42,0.08)',
  boxSizing: 'border-box' as const,
  ...extra,
});

const Card: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({ children, style }) =>
  <div style={glassStyle(style)}>{children}</div>;

const Appear: React.FC<{ children: React.ReactNode; delay?: number; y?: number; style?: React.CSSProperties }> = ({ children, delay = 0, y = 30, style }) => {
  const frame = useCurrentFrame();
  const p = spring({ frame: Math.max(0, frame - delay), fps: FPS, config: { damping: 14, mass: 0.6 } });
  return <div style={{ opacity: p, transform: `translateY(${(1 - p) * y}px)`, ...style }}>{children}</div>;
};

const Badge: React.FC<{ children: React.ReactNode; color?: string; delay?: number; style?: React.CSSProperties }> = ({ children, color = C.noun, delay = 0, style }) => {
  const frame = useCurrentFrame();
  const p = spring({ frame: Math.max(0, frame - delay), fps: FPS, config: { damping: 12, mass: 0.5 } });
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      background: `${color}18`, border: `1.5px solid ${color}50`,
      borderRadius: 999, padding: '10px 24px', fontSize: 26, fontWeight: 700,
      color, fontFamily: FONT, opacity: p, transform: `scale(${0.88 + 0.12 * p})`, ...style,
    }}>{children}</span>
  );
};

const SceneShell: React.FC<{ children: React.ReactNode; accentColor?: string; title?: string }> = ({ children, accentColor = C.noun, title }) => (
  <AbsoluteFill style={{ background: 'linear-gradient(135deg, #F0F4FF 0%, #EEF2FF 50%, #F5F3FF 100%)' }}>
    <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle, ${accentColor}18 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
    <BokehCircles count={10} />
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: `linear-gradient(90deg, ${accentColor}, ${accentColor}88, transparent)` }} />
    {title && <div style={{ position: 'absolute', top: 24, left: 60, fontSize: 22, fontWeight: 700, color: accentColor, fontFamily: FONT, letterSpacing: '0.06em', textTransform: 'uppercase' as const }}>{title}</div>}
    {children}
  </AbsoluteFill>
);

const FadeWrap: React.FC<{ children: React.ReactNode; duration?: number }> = ({ children, duration = SCENE_DUR }) => {
  const frame = useCurrentFrame();
  const fadeIn = interpolate(frame, [0, 12], [0, 1], { extrapolateRight: 'clamp' });
  const fadeOut = interpolate(frame, [duration - 12, duration], [1, 0], { extrapolateLeft: 'clamp' });
  return <AbsoluteFill style={{ opacity: Math.min(fadeIn, fadeOut) }}>{children}</AbsoluteFill>;
};

const WordTypeChip: React.FC<{ type: 'noun' | 'verb' | 'adj' | 'adv'; delay?: number }> = ({ type, delay = 0 }) => {
  const labels = { noun: 'Danh từ (N)', verb: 'Động từ (V)', adj: 'Tính từ (Adj)', adv: 'Trạng từ (Adv)' };
  return <Badge color={wordColors[type]} delay={delay}>{labels[type]}</Badge>;
};

// ============================================================
// SCENE 1 — INTRO
// ============================================================
const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = 1 + 0.015 * Math.sin(frame / 6);
  const wordList: Array<{ w: string; ci: number }> = [
    { w: 'inform', ci: 1 }, { w: 'information', ci: 0 },
    { w: 'informative', ci: 2 }, { w: 'informed', ci: 2 },
    { w: 'informer', ci: 0 }, { w: 'informally', ci: 3 },
  ];
  const wordColorsArr = [C.noun, C.verb, C.adj, C.adv];
  return (
    <SceneShell accentColor={C.noun} title="Tiếng Anh Lớp 11 — THPT Quốc Gia">
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 28 }}>
        <Appear delay={0}>
          <div style={{ fontSize: 28, fontWeight: 700, color: C.noun, fontFamily: FONT, letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>Tiếng Anh Lớp 11 — THPT Quốc Gia</div>
        </Appear>
        <Appear delay={6}>
          <h1 style={{ fontSize: 96, fontWeight: 900, color: C.dark, margin: 0, fontFamily: FONT, lineHeight: 1.05, textAlign: 'center' }}>Word Formation</h1>
        </Appear>
        <Appear delay={12}>
          <div style={{ fontSize: 52, fontWeight: 800, color: C.noun, fontFamily: FONT, transform: `scale(${pulse})` }}>INFORMATION</div>
        </Appear>
        <Appear delay={18}>
          <p style={{ fontSize: 30, color: C.slate, fontFamily: FONT, textAlign: 'center', maxWidth: 900, lineHeight: 1.5, margin: 0 }}>
            Học gia đình từ, nhận biết từ loại và chinh phục đề thi trong <strong style={{ color: C.noun }}>10 phút</strong>
          </p>
        </Appear>
        <Appear delay={25} style={{ display: 'flex', gap: 16, flexWrap: 'wrap' as const, justifyContent: 'center' }}>
          {wordList.map((item, i) => (
            <Badge key={item.w} color={wordColorsArr[item.ci]} delay={25 + i * 3}>{item.w}</Badge>
          ))}
        </Appear>
      </div>
    </SceneShell>
  );
};

// ============================================================
// SCENE 2 — WHY WORD FORMATION
// ============================================================
const Scene2: React.FC = () => (
  <SceneShell accentColor={C.info} title="Tại sao Word Formation quan trọng?">
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 36 }}>
      <Appear delay={0}>
        <h2 style={{ fontSize: 58, fontWeight: 800, color: C.dark, margin: 0, fontFamily: FONT, textAlign: 'center' }}>Dạng bài xuất hiện trong mọi đề thi</h2>
      </Appear>
      <Appear delay={4}>
        <p style={{ fontSize: 28, color: C.slate, fontFamily: FONT, textAlign: 'center', maxWidth: 1100, lineHeight: 1.5, margin: 0 }}>
          Word Formation là dạng bài điền vào chỗ trống theo dạng từ đúng.<br />
          Xuất hiện trong phần Lexico-Grammar đề thi THPT Quốc Gia.
        </p>
      </Appear>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, width: 1200 }}>
        {[
          { icon: '📊', title: '10–15% điểm', desc: 'Ngữ pháp trong đề thi THPT', color: C.noun },
          { icon: '🎯', title: '4 dạng từ loại', desc: 'Noun / Verb / Adjective / Adverb', color: C.verb },
          { icon: '⚡', title: 'Mẹo làm bài', desc: 'Nhận biết vị trí → xác định loại từ', color: C.success },
        ].map((item, i) => (
          <Appear key={item.title} delay={12 + i * 6}>
            <Card style={{ padding: 40, textAlign: 'center', borderTop: `5px solid ${item.color}` }}>
              <div style={{ fontSize: 52, marginBottom: 16 }}>{item.icon}</div>
              <div style={{ fontSize: 34, fontWeight: 800, color: C.dark, fontFamily: FONT, marginBottom: 12 }}>{item.title}</div>
              <div style={{ fontSize: 24, color: C.slate, fontFamily: FONT }}>{item.desc}</div>
            </Card>
          </Appear>
        ))}
      </div>
      <Appear delay={32}>
        <Card style={{ padding: '22px 48px', background: `${C.noun}10`, border: `1.5px solid ${C.noun}40` }}>
          <span style={{ fontSize: 28, fontWeight: 700, color: C.noun, fontFamily: FONT }}>Từ gốc cho sẵn: INFORM → Bạn phải tìm đúng dạng từ loại cần điền</span>
        </Card>
      </Appear>
    </div>
  </SceneShell>
);

// ============================================================
// SCENE 3 — WORD FAMILY TREE
// ============================================================
const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const branches = [
    { word: 'inform', label: 'V', color: C.verb, typeStr: 'Động từ' },
    { word: 'information', label: 'N', color: C.noun, typeStr: 'Danh từ' },
    { word: 'informative', label: 'Adj', color: C.adj, typeStr: 'Tính từ' },
    { word: 'informed', label: 'Adj', color: C.adj, typeStr: 'Tính từ' },
    { word: 'informer', label: 'N', color: C.noun, typeStr: 'Danh từ' },
    { word: 'informally', label: 'Adv', color: C.adv, typeStr: 'Trạng từ' },
  ];
  return (
    <SceneShell accentColor={C.verb} title="Gia đình từ — Word Family">
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Appear delay={0}>
          <h2 style={{ fontSize: 56, fontWeight: 800, color: C.dark, margin: '0 0 12px', fontFamily: FONT, textAlign: 'center' }}>Gia đình từ của INFORM</h2>
        </Appear>
        <Appear delay={4}>
          <p style={{ fontSize: 26, color: C.slate, fontFamily: FONT, margin: '0 0 36px', textAlign: 'center' }}>6 thành viên — mỗi người đóng vai khác nhau trong câu</p>
        </Appear>
        <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 24, justifyContent: 'center', maxWidth: 1400 }}>
          {branches.map((b, i) => {
            const p = spring({ frame: Math.max(0, frame - (8 + i * 8)), fps: FPS, config: { damping: 12, mass: 0.6 } });
            return (
              <div key={b.word} style={{ opacity: p, transform: `scale(${0.85 + 0.15 * p}) translateY(${(1 - p) * 30}px)` }}>
                <Card style={{ padding: '28px 40px', borderLeft: `6px solid ${b.color}`, display: 'flex', flexDirection: 'column', gap: 8, minWidth: 280 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ background: b.color, color: '#fff', borderRadius: 8, padding: '4px 14px', fontSize: 22, fontWeight: 700, fontFamily: FONT }}>{b.label}</span>
                    <span style={{ fontSize: 20, color: C.muted, fontFamily: FONT }}>{b.typeStr}</span>
                  </div>
                  <div style={{ fontSize: 38, fontWeight: 800, color: b.color, fontFamily: FONT }}>{b.word}</div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </SceneShell>
  );
};

// ============================================================
// SCENE 4 — INFORM (VERB)
// ============================================================
const Scene4: React.FC = () => (
  <SceneShell accentColor={C.verb} title="INFORM — Động từ (Verb)">
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
      <Appear delay={0}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <h2 style={{ fontSize: 80, fontWeight: 900, color: C.verb, margin: 0, fontFamily: FONT }}>inform</h2>
          <WordTypeChip type="verb" delay={4} />
        </div>
      </Appear>
      <Appear delay={4}>
        <Card style={{ width: 1200, padding: 40 }}>
          <div style={{ fontSize: 28, color: C.muted, fontFamily: MONO, marginBottom: 12 }}>/ɪnˈfɔːm/</div>
          <div style={{ fontSize: 34, color: C.dark, fontFamily: FONT, fontWeight: 600 }}>inform (v) = thông báo, cho biết</div>
          <div style={{ marginTop: 14, fontSize: 27, color: C.slate, fontFamily: FONT }}>Cấu trúc: inform + sb + of/about + sth | inform + sb + (that)...</div>
        </Card>
      </Appear>
      {[
        { delay: 10, note: 'Ví dụ 1 — Sau Please cần V nguyên thể', text: 'Please inform the teacher if you are going to be absent.' },
        { delay: 18, note: 'Ví dụ 2 — Sau modal verb could', text: 'Could you please inform me of any schedule changes?' },
      ].map((ex) => (
        <Appear key={ex.delay} delay={ex.delay}>
          <Card style={{ width: 1200, padding: '26px 40px', borderLeft: `6px solid ${C.verb}` }}>
            <div style={{ fontSize: 21, color: C.muted, fontFamily: FONT, marginBottom: 8 }}>📌 {ex.note}</div>
            <div style={{ fontSize: 32, color: C.dark, fontFamily: FONT, lineHeight: 1.6 }}>{ex.text}</div>
          </Card>
        </Appear>
      ))}
    </div>
  </SceneShell>
);

// ============================================================
// SCENE 5 — INFORMATION (NOUN)
// ============================================================
const Scene5: React.FC = () => {
  const frame = useCurrentFrame();
  const warningPulse = 0.85 + 0.15 * Math.sin(frame / 8);
  const examples = [
    { delay: 14, note: 'Sau further/some/any', text: 'For further information, please visit our website.' },
    { delay: 20, note: 'Làm chủ ngữ câu', text: 'The information provided was very useful for the project.' },
    { delay: 26, note: 'Sau giới từ', text: 'I need more information about the graduation ceremony.' },
  ];
  return (
    <SceneShell accentColor={C.noun} title="INFORMATION — Danh từ (Noun)">
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
        <Appear delay={0}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <h2 style={{ fontSize: 72, fontWeight: 900, color: C.noun, margin: 0, fontFamily: FONT }}>information</h2>
            <WordTypeChip type="noun" delay={4} />
          </div>
        </Appear>
        <Appear delay={4}>
          <Card style={{ width: 1200, padding: 32, background: '#FEF2F2', border: `2px solid ${C.error}50` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
              <span style={{ fontSize: 34, transform: `scale(${warningPulse})`, display: 'inline-block' }}>⚠️</span>
              <span style={{ fontSize: 26, fontWeight: 800, color: C.error, fontFamily: FONT }}>DANH TỪ KHÔNG ĐẾM ĐƯỢC — Uncountable Noun!</span>
            </div>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' as const }}>
              {[
                { t: 'informations ❌', ok: false },
                { t: 'an information ❌', ok: false },
                { t: 'some information ✅', ok: true },
                { t: 'a piece of information ✅', ok: true },
              ].map((item) => (
                <Card key={item.t} style={{ padding: '10px 20px', background: item.ok ? '#F0FDF4' : '#FEE2E2', border: `1.5px solid ${item.ok ? C.success : C.error}` }}>
                  <span style={{ fontSize: 22, color: item.ok ? C.success : C.error, fontWeight: 700, fontFamily: MONO, textDecoration: item.ok ? 'none' : 'line-through' as const }}>{item.t}</span>
                </Card>
              ))}
            </div>
          </Card>
        </Appear>
        {examples.map((ex) => (
          <Appear key={ex.delay} delay={ex.delay}>
            <Card style={{ width: 1200, padding: '18px 34px', borderLeft: `6px solid ${C.noun}` }}>
              <div style={{ fontSize: 20, color: C.muted, marginBottom: 6, fontFamily: FONT }}>📌 {ex.note}</div>
              <div style={{ fontSize: 29, color: C.dark, fontFamily: FONT, lineHeight: 1.6 }}>{ex.text}</div>
            </Card>
          </Appear>
        ))}
      </div>
    </SceneShell>
  );
};

// ============================================================
// SCENE 6 — INFORMATIVE (ADJ)
// ============================================================
const Scene6: React.FC = () => (
  <SceneShell accentColor={C.adj} title="INFORMATIVE — Tính từ (Adjective)">
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
      <Appear delay={0}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <h2 style={{ fontSize: 72, fontWeight: 900, color: C.adj, margin: 0, fontFamily: FONT }}>informative</h2>
          <WordTypeChip type="adj" delay={4} />
        </div>
      </Appear>
      <Appear delay={4}>
        <Card style={{ width: 1200, padding: 36 }}>
          <div style={{ fontSize: 32, color: C.dark, fontFamily: FONT, fontWeight: 600 }}>✨ informative (adj) = cung cấp nhiều thông tin hữu ích</div>
          <div style={{ marginTop: 10, fontSize: 26, color: C.slate, fontFamily: FONT }}>Dùng trước danh từ | sau be/look/seem/become | dấu hiệu: đuôi -ive</div>
        </Card>
      </Appear>
      <div style={{ display: 'flex', gap: 24, width: 1200 }}>
        {[
          { delay: 10, note: 'Sau be-verb + very', text: 'The documentary was very informative.' },
          { delay: 16, note: 'Trước danh từ', text: 'The brochure contained many informative details.' },
        ].map((ex) => (
          <Appear key={ex.delay} delay={ex.delay} style={{ flex: 1 }}>
            <Card style={{ padding: 30, borderTop: `5px solid ${C.adj}` }}>
              <div style={{ fontSize: 20, color: C.muted, marginBottom: 10, fontFamily: FONT }}>📌 {ex.note}</div>
              <div style={{ fontSize: 28, color: C.dark, fontFamily: FONT, lineHeight: 1.6 }}>{ex.text}</div>
            </Card>
          </Appear>
        ))}
      </div>
      <Appear delay={24}>
        <Card style={{ width: 1200, padding: '22px 36px', background: `${C.adj}10`, border: `1.5px solid ${C.adj}40` }}>
          <span style={{ fontSize: 26, color: C.adj, fontWeight: 700, fontFamily: FONT }}>Mẹo nhớ: -ive là đuôi tính từ phổ biến (creative, attractive, informative)</span>
        </Card>
      </Appear>
    </div>
  </SceneShell>
);

// ============================================================
// SCENE 7 — INFORMED (ADJ)
// ============================================================
const Scene7: React.FC = () => (
  <SceneShell accentColor={C.adj} title="INFORMED — Tính từ (Adjective)">
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
      <Appear delay={0}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <h2 style={{ fontSize: 76, fontWeight: 900, color: C.adj, margin: 0, fontFamily: FONT }}>informed</h2>
          <WordTypeChip type="adj" delay={4} />
        </div>
      </Appear>
      <Appear delay={4}>
        <Card style={{ width: 1200, padding: 34 }}>
          <div style={{ fontSize: 32, color: C.dark, fontFamily: FONT, fontWeight: 600 }}>🎓 informed (adj) = có thông tin đầy đủ, hiểu biết</div>
        </Card>
      </Appear>
      <div style={{ display: 'flex', gap: 24, width: 1200 }}>
        <Appear delay={10} style={{ flex: 1 }}>
          <Card style={{ padding: 30, borderLeft: `6px solid ${C.adj}` }}>
            <div style={{ fontSize: 20, color: C.muted, marginBottom: 10, fontFamily: FONT }}>📌 Collocations hay gặp thi</div>
            {['an informed decision = quyết định có cơ sở', 'well-informed = có nhiều thông tin', 'keep sb informed = cập nhật thông tin'].map((item) => (
              <div key={item} style={{ fontSize: 24, color: C.dark, fontFamily: FONT, marginBottom: 8 }}>• {item}</div>
            ))}
          </Card>
        </Appear>
        <Appear delay={16} style={{ flex: 1 }}>
          <Card style={{ padding: 30, borderLeft: `6px solid ${C.adj}` }}>
            <div style={{ fontSize: 20, color: C.muted, marginBottom: 10, fontFamily: FONT }}>📌 Ví dụ thi</div>
            <div style={{ fontSize: 27, color: C.dark, fontFamily: FONT, lineHeight: 1.7 }}>
              We need to make an <strong style={{ color: C.adj }}>informed</strong> decision before the deadline.<br />
              It is vital to stay well-<strong style={{ color: C.adj }}>informed</strong> about global issues.
            </div>
          </Card>
        </Appear>
      </div>
      <Appear delay={24}>
        <Card style={{ width: 1200, padding: '22px 36px', background: `${C.adj}10`, border: `1.5px solid ${C.adj}40` }}>
          <span style={{ fontSize: 25, color: C.dark, fontFamily: FONT }}>So sánh: <strong style={{ color: C.adj }}>informative</strong> = cái gì đó cung cấp thông tin | <strong style={{ color: C.adj }}>informed</strong> = ai đó có thông tin</span>
        </Card>
      </Appear>
    </div>
  </SceneShell>
);

// ============================================================
// SCENE 8 — INFORMER (NOUN)
// ============================================================
const Scene8: React.FC = () => (
  <SceneShell accentColor={C.warning} title="INFORMER — Danh từ (Noun)">
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
      <Appear delay={0}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <h2 style={{ fontSize: 76, fontWeight: 900, color: C.warning, margin: 0, fontFamily: FONT }}>informer</h2>
          <WordTypeChip type="noun" delay={4} />
        </div>
      </Appear>
      <Appear delay={4}>
        <Card style={{ width: 1100, padding: 36, background: '#FFFBEB', border: `1.5px solid ${C.warning}50` }}>
          <div style={{ fontSize: 32, color: C.dark, fontFamily: FONT, fontWeight: 600 }}>🕵️ informer (n) = người mật báo, người cung cấp thông tin bí mật</div>
          <div style={{ marginTop: 10, fontSize: 24, color: C.slate, fontFamily: FONT }}>(chủ yếu dùng trong bối cảnh cảnh sát / tình báo)</div>
        </Card>
      </Appear>
      <Appear delay={10}>
        <Card style={{ width: 1100, padding: 32, borderLeft: `6px solid ${C.warning}` }}>
          <div style={{ fontSize: 20, color: C.muted, marginBottom: 10, fontFamily: FONT }}>📌 Ví dụ thi</div>
          <div style={{ fontSize: 30, color: C.dark, fontFamily: FONT, lineHeight: 1.6 }}>She acted as an <strong style={{ color: C.warning }}>informer</strong> for the local police department.</div>
          <div style={{ fontSize: 22, color: C.slate, marginTop: 8, fontFamily: FONT }}>→ Sau "an" cần danh từ</div>
        </Card>
      </Appear>
      <Appear delay={18}>
        <div style={{ display: 'flex', gap: 20, width: 1100 }}>
          <Card style={{ flex: 1, padding: 26, background: '#F0FDF4', border: `1.5px solid ${C.success}` }}>
            <div style={{ fontSize: 24, fontWeight: 700, color: C.success, fontFamily: FONT, marginBottom: 6 }}>✅ informer = Người báo tin (bí mật)</div>
          </Card>
          <Card style={{ flex: 1, padding: 26, background: '#EFF6FF', border: `1.5px solid ${C.noun}` }}>
            <div style={{ fontSize: 24, fontWeight: 700, color: C.noun, fontFamily: FONT, marginBottom: 6 }}>ℹ️ informant = Người cung cấp thông tin (học thuật)</div>
          </Card>
        </div>
      </Appear>
    </div>
  </SceneShell>
);

// ============================================================
// SCENE 9 — INFORMALLY (ADV)
// ============================================================
const Scene9: React.FC = () => (
  <SceneShell accentColor={C.adv} title="INFORMALLY — Trạng từ (Adverb)">
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
      <Appear delay={0}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <h2 style={{ fontSize: 68, fontWeight: 900, color: C.adv, margin: 0, fontFamily: FONT }}>informally</h2>
          <WordTypeChip type="adv" delay={4} />
        </div>
      </Appear>
      <Appear delay={4}>
        <Card style={{ width: 1100, padding: 34 }}>
          <div style={{ fontSize: 32, color: C.dark, fontFamily: FONT, fontWeight: 600 }}>🗣️ informally (adv) = một cách không trang trọng, thân mật</div>
          <div style={{ marginTop: 10, fontSize: 24, color: C.slate, fontFamily: FONT }}>= informal + -ly | Trái nghĩa: formally</div>
        </Card>
      </Appear>
      {[
        { delay: 10, note: 'Bổ nghĩa cho động từ (sau V)', text: 'The students dressed informally for the school picnic.' },
        { delay: 18, note: 'Bổ nghĩa cho cả câu', text: 'He spoke to his students informally to make them feel at ease.' },
      ].map((ex) => (
        <Appear key={ex.delay} delay={ex.delay}>
          <Card style={{ width: 1100, padding: '24px 34px', borderLeft: `6px solid ${C.adv}` }}>
            <div style={{ fontSize: 20, color: C.muted, marginBottom: 8, fontFamily: FONT }}>📌 {ex.note}</div>
            <div style={{ fontSize: 29, color: C.dark, fontFamily: FONT, lineHeight: 1.6 }}>{ex.text}</div>
          </Card>
        </Appear>
      ))}
      <Appear delay={26}>
        <Card style={{ width: 1100, padding: '22px 36px', background: `${C.adv}10`, border: `1.5px solid ${C.adv}40` }}>
          <span style={{ fontSize: 26, color: C.adv, fontWeight: 700, fontFamily: FONT }}>Nhận biết: Trạng từ thường có đuôi -ly và dùng sau động từ hoặc cuối câu</span>
        </Card>
      </Appear>
    </div>
  </SceneShell>
);

// ============================================================
// SCENE 10 — GRAMMAR RULES OVERVIEW
// ============================================================
const Scene10: React.FC = () => {
  const rules = [
    { type: 'noun' as const, emoji: '📖', label: 'Danh từ (Noun)', cues: ['sau: a/an/the', 'sau: some/any/much', 'sau giới từ (of, about)', 'làm chủ ngữ câu'] },
    { type: 'adj' as const, emoji: '✨', label: 'Tính từ (Adj)', cues: ['trước danh từ', 'sau be/look/seem', 'sau too/enough'] },
    { type: 'adv' as const, emoji: '🚀', label: 'Trạng từ (Adv)', cues: ['sau động từ', 'trước/sau tính từ', 'đầu câu', 'đuôi -ly'] },
    { type: 'verb' as const, emoji: '⚡', label: 'Động từ (Verb)', cues: ['sau modal (can/will/must)', 'sau to (infinitive)', 'làm V chính câu'] },
  ];
  return (
    <SceneShell accentColor={C.info} title="Quy tắc nhận biết từ loại — 4 Rules">
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
        <Appear delay={0}><h2 style={{ fontSize: 54, fontWeight: 800, color: C.dark, margin: 0, fontFamily: FONT, textAlign: 'center' }}>Nhìn vị trí → Xác định từ loại</h2></Appear>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 22, width: 1300 }}>
          {rules.map((r, i) => (
            <Appear key={r.type} delay={8 + i * 8}>
              <Card style={{ padding: 30, borderTop: `6px solid ${wordColors[r.type]}`, height: 270 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <span style={{ fontSize: 32 }}>{r.emoji}</span>
                  <span style={{ fontSize: 30, fontWeight: 800, color: wordColors[r.type], fontFamily: FONT }}>{r.label}</span>
                </div>
                {r.cues.map((cue) => (
                  <div key={cue} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: wordColors[r.type], flexShrink: 0 }} />
                    <span style={{ fontSize: 24, color: C.dark, fontFamily: FONT }}>{cue}</span>
                  </div>
                ))}
              </Card>
            </Appear>
          ))}
        </div>
      </div>
    </SceneShell>
  );
};

// ============================================================
// HELPER: ExerciseScene
// ============================================================
interface ExerciseItem {
  q: string;
  ans: string;
  type: 'noun' | 'verb' | 'adj' | 'adv';
}

const ExerciseScene: React.FC<{
  title: string;
  questions: ExerciseItem[];
  accentColor?: string;
  label?: string;
}> = ({ title, questions, accentColor = C.info, label }) => {
  const frame = useCurrentFrame();
  const showAnswerAt = 450;
  return (
    <SceneShell accentColor={accentColor} title={title}>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 18 }}>
        <Appear delay={0}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <h2 style={{ fontSize: 48, fontWeight: 800, color: C.dark, margin: 0, fontFamily: FONT }}>{title}</h2>
            {label && <Badge color={accentColor} style={{ fontSize: 20 }}>{label}</Badge>}
          </div>
        </Appear>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 13, width: 1340 }}>
          {questions.map((q, i) => {
            const revealed = frame >= showAnswerAt + i * 20;
            return (
              <Appear key={i} delay={6 + i * 7}>
                <Card style={{ padding: '16px 30px', borderLeft: `6px solid ${revealed ? wordColors[q.type] : accentColor}`, display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{ width: 38, height: 38, minWidth: 38, borderRadius: '50%', background: revealed ? wordColors[q.type] : accentColor, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 700, fontFamily: FONT }}>{i + 1}</span>
                  <div style={{ flex: 1, fontSize: 25, color: C.dark, fontFamily: FONT }}>{q.q.replace('___', revealed ? q.ans : '______')}</div>
                  {revealed && <Badge color={wordColors[q.type]} style={{ fontSize: 18, padding: '5px 12px' }}>{q.type}</Badge>}
                </Card>
              </Appear>
            );
          })}
        </div>
        {frame < showAnswerAt && (
          <Appear delay={45}>
            <div style={{ fontSize: 24, color: C.slate, fontFamily: FONT }}>Đáp án xuất hiện sau {Math.max(0, Math.ceil((showAnswerAt - frame) / FPS))}s</div>
          </Appear>
        )}
      </div>
    </SceneShell>
  );
};

const AnswersScene: React.FC<{
  title: string;
  answers: Array<{ num: number; word: string; type: 'noun' | 'verb' | 'adj' | 'adv'; reason: string }>;
}> = ({ title, answers }) => (
  <SceneShell accentColor={C.success} title={title}>
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
      <Appear delay={0}><h2 style={{ fontSize: 50, fontWeight: 800, color: C.success, margin: 0, fontFamily: FONT }}>✅ {title}</h2></Appear>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 1350 }}>
        {answers.map((a, i) => (
          <Appear key={a.num} delay={6 + i * 8}>
            <Card style={{ padding: '14px 30px', display: 'flex', alignItems: 'flex-start', gap: 14, borderLeft: `6px solid ${wordColors[a.type]}` }}>
              <span style={{ width: 38, height: 38, minWidth: 38, borderRadius: '50%', background: C.success, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 800, fontFamily: FONT, marginTop: 4 }}>✓</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 19, color: C.muted, fontFamily: FONT }}>Câu {a.num}:</span>
                  <span style={{ fontSize: 28, fontWeight: 800, color: wordColors[a.type], fontFamily: FONT }}>{a.word}</span>
                  <Badge color={wordColors[a.type]} style={{ fontSize: 17, padding: '4px 12px' }}>{a.type}</Badge>
                </div>
                <div style={{ fontSize: 22, color: C.slate, fontFamily: FONT, marginTop: 3 }}>💡 {a.reason}</div>
              </div>
            </Card>
          </Appear>
        ))}
      </div>
    </div>
  </SceneShell>
);

// ============================================================
// SCENES 11–14 — IDENTIFY EACH TYPE
// ============================================================
const Scene11: React.FC = () => (
  <SceneShell accentColor={C.noun} title="Nhận biết DANH TỪ (Noun)">
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 22 }}>
      <Appear delay={0}><h2 style={{ fontSize: 54, fontWeight: 800, color: C.noun, margin: 0, fontFamily: FONT }}>📖 Khi nào điền Danh từ?</h2></Appear>
      {[
        { delay: 6, trigger: 'Sau lượng từ (further/some/much/any)', note: 'Sau further cần NOUN → information', text: 'For further ___ (INFORM), visit our website.' },
        { delay: 16, trigger: 'Sau some/any/much', note: 'Sau some cần NOUN → information', text: 'I need some ___ (INFORM) about the event.' },
        { delay: 26, trigger: 'Sau giới từ (of, about, with)', note: 'Sau giới từ of cần NOUN → information', text: 'This website is a good source of ___ (INFORM).' },
      ].map((ex) => (
        <Appear key={ex.delay} delay={ex.delay}>
          <Card style={{ width: 1200, padding: '20px 34px', borderLeft: `6px solid ${C.noun}` }}>
            <Badge color={C.noun} style={{ fontSize: 20, marginBottom: 10 }}>{ex.trigger}</Badge>
            <div style={{ fontSize: 28, color: C.dark, fontFamily: FONT, lineHeight: 1.6, marginTop: 8 }}>{ex.text}</div>
            <div style={{ fontSize: 23, color: C.noun, fontWeight: 700, fontFamily: FONT, marginTop: 6 }}>→ {ex.note}</div>
          </Card>
        </Appear>
      ))}
    </div>
  </SceneShell>
);

const Scene12: React.FC = () => (
  <SceneShell accentColor={C.adj} title="Nhận biết TÍNH TỪ (Adjective)">
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 22 }}>
      <Appear delay={0}><h2 style={{ fontSize: 54, fontWeight: 800, color: C.adj, margin: 0, fontFamily: FONT }}>✨ Khi nào điền Tính từ?</h2></Appear>
      {[
        { delay: 6, trigger: 'Sau be/look/seem/become/feel', note: 'Sau was very cần ADJ → informative', text: 'The documentary was very ___ (INFORM).' },
        { delay: 16, trigger: 'Trước danh từ', note: 'Trước choice (noun) cần ADJ → informed', text: 'We need to make an ___ (INFORM) choice.' },
        { delay: 26, trigger: 'Sau too / trước enough', note: 'Trước enough cần ADJ → informative', text: 'The lesson was ___ (INFORM) enough to understand.' },
      ].map((ex) => (
        <Appear key={ex.delay} delay={ex.delay}>
          <Card style={{ width: 1200, padding: '20px 34px', borderLeft: `6px solid ${C.adj}` }}>
            <Badge color={C.adj} style={{ fontSize: 20, marginBottom: 10 }}>{ex.trigger}</Badge>
            <div style={{ fontSize: 28, color: C.dark, fontFamily: FONT, lineHeight: 1.6, marginTop: 8 }}>{ex.text}</div>
            <div style={{ fontSize: 23, color: C.adj, fontWeight: 700, fontFamily: FONT, marginTop: 6 }}>→ {ex.note}</div>
          </Card>
        </Appear>
      ))}
    </div>
  </SceneShell>
);

const Scene13: React.FC = () => (
  <SceneShell accentColor={C.adv} title="Nhận biết TRẠNG TỪ (Adverb)">
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 22 }}>
      <Appear delay={0}><h2 style={{ fontSize: 54, fontWeight: 800, color: C.adv, margin: 0, fontFamily: FONT }}>🚀 Khi nào điền Trạng từ?</h2></Appear>
      {[
        { delay: 6, trigger: 'Bổ nghĩa cho động từ (sau V)', note: 'Bổ nghĩa dressed (V) cần ADV → informally', text: 'The students dressed ___ (INFORM) for the picnic.' },
        { delay: 18, trigger: 'Bổ nghĩa cho cả câu', note: 'Bổ nghĩa spoke (V) cần ADV → informally', text: 'He spoke ___ (INFORM) to help them relax.' },
      ].map((ex) => (
        <Appear key={ex.delay} delay={ex.delay}>
          <Card style={{ width: 1200, padding: '24px 36px', borderLeft: `6px solid ${C.adv}` }}>
            <Badge color={C.adv} style={{ fontSize: 20, marginBottom: 10 }}>{ex.trigger}</Badge>
            <div style={{ fontSize: 28, color: C.dark, fontFamily: FONT, lineHeight: 1.6, marginTop: 8 }}>{ex.text}</div>
            <div style={{ fontSize: 23, color: C.adv, fontWeight: 700, fontFamily: FONT, marginTop: 6 }}>→ {ex.note}</div>
          </Card>
        </Appear>
      ))}
      <Appear delay={30}>
        <Card style={{ width: 1200, padding: '22px 36px', background: `${C.adv}10`, border: `1.5px solid ${C.adv}40` }}>
          <span style={{ fontSize: 26, color: C.dark, fontFamily: FONT }}>Dấu hiệu nhận biết: Trạng từ thường kết thúc bằng <strong style={{ color: C.adv }}>-ly</strong> và dùng sau động từ hoặc cuối câu</span>
        </Card>
      </Appear>
    </div>
  </SceneShell>
);

const Scene14: React.FC = () => (
  <SceneShell accentColor={C.verb} title="Nhận biết ĐỘNG TỪ (Verb)">
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 22 }}>
      <Appear delay={0}><h2 style={{ fontSize: 54, fontWeight: 800, color: C.verb, margin: 0, fontFamily: FONT }}>⚡ Khi nào điền Động từ?</h2></Appear>
      {[
        { delay: 6, trigger: 'Sau modal verb (can/will/must/should/please)', note: 'Sau Please cần V nguyên thể → inform', text: 'Please ___ (INFORM) me of the results.' },
        { delay: 16, trigger: 'Sau to (to-infinitive)', note: 'Sau to cần V nguyên thể → inform', text: 'They asked her to ___ (INFORM) the manager.' },
        { delay: 26, trigger: 'Làm V chính của câu (sau chủ ngữ)', note: 'V chính câu → informed (quá khứ đơn)', text: 'The secretary ___ (INFORM) everyone about the meeting.' },
      ].map((ex) => (
        <Appear key={ex.delay} delay={ex.delay}>
          <Card style={{ width: 1200, padding: '20px 34px', borderLeft: `6px solid ${C.verb}` }}>
            <Badge color={C.verb} style={{ fontSize: 20, marginBottom: 10 }}>{ex.trigger}</Badge>
            <div style={{ fontSize: 28, color: C.dark, fontFamily: FONT, lineHeight: 1.6, marginTop: 8 }}>{ex.text}</div>
            <div style={{ fontSize: 23, color: C.verb, fontWeight: 700, fontFamily: FONT, marginTop: 6 }}>→ {ex.note}</div>
          </Card>
        </Appear>
      ))}
    </div>
  </SceneShell>
);

// ============================================================
// SCENE 15 — NEGATIVE PREFIXES
// ============================================================
const Scene15: React.FC = () => (
  <SceneShell accentColor={C.error} title="Cạm bẫy thi — Prefix phủ định">
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
      <Appear delay={0}><h2 style={{ fontSize: 54, fontWeight: 800, color: C.error, margin: 0, fontFamily: FONT, textAlign: 'center' }}>Đừng quên prefix phủ định!</h2></Appear>
      <Appear delay={4}><p style={{ fontSize: 25, color: C.slate, fontFamily: FONT, textAlign: 'center', margin: 0 }}>Khi nghĩa câu cần từ phủ định → thêm prefix vào trước từ gốc</p></Appear>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, width: 1200 }}>
        {[
          { prefix: 'un-', examples: ['unhappy', 'uninformed', 'unclear'], color: C.error, rule: 'Phổ biến nhất với adj' },
          { prefix: 'mis-', examples: ['misinform', 'misunderstand', 'mistake'], color: C.warning, rule: 'Nghĩa sai/nhầm' },
          { prefix: 'dis-', examples: ['dishonest', 'disinformation', 'disagree'], color: C.verb, rule: 'Verb & Noun' },
        ].map((item, i) => (
          <Appear key={item.prefix} delay={8 + i * 6}>
            <Card style={{ padding: 30, borderTop: `6px solid ${item.color}`, textAlign: 'center' }}>
              <div style={{ fontSize: 40, fontWeight: 900, color: item.color, fontFamily: MONO, marginBottom: 8 }}>{item.prefix}</div>
              <div style={{ fontSize: 18, color: C.muted, fontFamily: FONT, marginBottom: 10 }}>{item.rule}</div>
              {item.examples.map((ex) => <div key={ex} style={{ fontSize: 22, color: C.dark, fontFamily: FONT, marginBottom: 5 }}>• {ex}</div>)}
            </Card>
          </Appear>
        ))}
      </div>
      <Appear delay={26}>
        <Card style={{ width: 1200, padding: '26px 36px', borderLeft: `6px solid ${C.error}` }}>
          <div style={{ fontSize: 20, color: C.muted, marginBottom: 10, fontFamily: FONT }}>📌 Ví dụ thường gặp trong đề thi</div>
          <div style={{ fontSize: 28, color: C.dark, fontFamily: FONT, lineHeight: 1.6 }}>
            Many people were <strong style={{ color: C.error }}>misinformed</strong> about the health risks.
            <br /><span style={{ fontSize: 22, color: C.slate }}>→ Câu cần nghĩa phủ định!</span>
          </div>
        </Card>
      </Appear>
    </div>
  </SceneShell>
);

// ============================================================
// SCENES 16–19 — EXERCISES
// ============================================================
const ex1Questions: ExerciseItem[] = [
  { q: 'The documentary was very ___ (INFORM) — I learned so much.', ans: 'informative', type: 'adj' },
  { q: 'For further ___ (INFORM), please check our website.', ans: 'information', type: 'noun' },
  { q: 'Please ___ (INFORM) the teacher if you are absent.', ans: 'inform', type: 'verb' },
  { q: 'We need to make an ___ (INFORM) decision.', ans: 'informed', type: 'adj' },
  { q: 'The students dressed ___ (INFORM) for the school picnic.', ans: 'informally', type: 'adv' },
];

const ex1Answers = [
  { num: 1, word: 'informative', type: 'adj' as const, reason: 'Sau was very → cần Tính từ (Adjective)' },
  { num: 2, word: 'information', type: 'noun' as const, reason: 'Sau further → cần Danh từ (Noun) không đếm được' },
  { num: 3, word: 'inform', type: 'verb' as const, reason: 'Sau Please → cần Động từ nguyên thể' },
  { num: 4, word: 'informed', type: 'adj' as const, reason: 'Sau an trước decision → Adj (an informed decision)' },
  { num: 5, word: 'informally', type: 'adv' as const, reason: 'Bổ nghĩa dressed (Verb) → Trạng từ' },
];

const ex2Questions: ExerciseItem[] = [
  { q: 'The brochure provides useful ___ (INFORM) about tourist attractions.', ans: 'information', type: 'noun' },
  { q: 'It is vital to stay well-___ (INFORM) about global issues.', ans: 'informed', type: 'adj' },
  { q: 'Can you please ___ (INFORM) me of any schedule changes?', ans: 'inform', type: 'verb' },
  { q: 'The lecture was highly ___ (INFORM) and easy to follow.', ans: 'informative', type: 'adj' },
  { q: 'She acted as an ___ (INFORM) for the local police department.', ans: 'informer', type: 'noun' },
];

const ex2Answers = [
  { num: 1, word: 'information', type: 'noun' as const, reason: 'Sau useful (adj) trước about → Danh từ | provides useful [N]' },
  { num: 2, word: 'informed', type: 'adj' as const, reason: 'well-___ là cụm Adj | stay + well-informed' },
  { num: 3, word: 'inform', type: 'verb' as const, reason: 'Sau please & can you → Động từ nguyên thể' },
  { num: 4, word: 'informative', type: 'adj' as const, reason: 'Sau highly (adv) → Tính từ | highly informative' },
  { num: 5, word: 'informer', type: 'noun' as const, reason: 'Sau an → Danh từ | acted as an [N]' },
];

const Scene16: React.FC = () => <ExerciseScene title="Bài tập 1 — Fill in the blank" questions={ex1Questions} accentColor={C.info} />;
const Scene17: React.FC = () => <AnswersScene title="Đáp án & Giải thích Bài 1" answers={ex1Answers} />;
const Scene18: React.FC = () => <ExerciseScene title="Bài tập 2 — Đề thi THPT Style" questions={ex2Questions} accentColor={C.warning} label="Exam Style" />;
const Scene19: React.FC = () => <AnswersScene title="Phân tích chi tiết Bài 2" answers={ex2Answers} />;

// ============================================================
// SCENE 20 — EXAM STRATEGY
// ============================================================
const Scene20: React.FC = () => (
  <SceneShell accentColor={C.info} title="Chiến lược làm bài thi — 4 Bước">
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
      <Appear delay={0}><h2 style={{ fontSize: 54, fontWeight: 800, color: C.dark, margin: 0, fontFamily: FONT }}>4 Bước Vàng Làm Bài Word Formation</h2></Appear>
      <div style={{ display: 'flex', gap: 20, width: 1340 }}>
        {[
          { step: '01', title: 'Đọc toàn câu', desc: 'Hiểu nghĩa tổng thể trước khi quyết định', icon: '📖', color: C.noun },
          { step: '02', title: 'Xác định vị trí', desc: 'Chỗ trống đứng ở đâu? Sau từ gì?', icon: '🔍', color: C.verb },
          { step: '03', title: 'Xác định từ loại', desc: 'Noun? Verb? Adj? Adv? Dùng 4 quy tắc đã học', icon: '✨', color: C.adj },
          { step: '04', title: 'Biến đổi & kiểm tra', desc: 'Điền dạng từ đúng → đọc lại câu kiểm tra nghĩa', icon: '✅', color: C.success },
        ].map((s, i) => (
          <Appear key={s.step} delay={8 + i * 9} style={{ flex: 1 }}>
            <Card style={{ padding: 30, height: 340, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderTop: `6px solid ${s.color}` }}>
              <div style={{ width: 60, height: 60, borderRadius: '50%', background: `${s.color}20`, border: `3px solid ${s.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, marginBottom: 12 }}>{s.icon}</div>
              <div style={{ fontSize: 40, fontWeight: 900, color: s.color, fontFamily: MONO, marginBottom: 8 }}>{s.step}</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: C.dark, fontFamily: FONT, marginBottom: 10 }}>{s.title}</div>
              <div style={{ fontSize: 22, color: C.slate, fontFamily: FONT, lineHeight: 1.4 }}>{s.desc}</div>
            </Card>
          </Appear>
        ))}
      </div>
      <Appear delay={44}>
        <Card style={{ width: 1340, padding: '20px 44px', background: `${C.info}10`, border: `1.5px solid ${C.info}40` }}>
          <div style={{ fontSize: 26, color: C.dark, fontFamily: FONT, textAlign: 'center' }}>Bonus tip: Luôn đọc lại câu sau khi điền để kiểm tra nghĩa hợp lý và grammar đúng</div>
        </Card>
      </Appear>
    </div>
  </SceneShell>
);

// ============================================================
// SCENE 21 — PREFIX MASTER
// ============================================================
const Scene21: React.FC = () => (
  <SceneShell accentColor={C.error} title="Bảng Prefix Phủ định — Master">
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 22 }}>
      <Appear delay={0}><h2 style={{ fontSize: 52, fontWeight: 800, color: C.dark, margin: 0, fontFamily: FONT }}>Prefix Phủ định — Dễ bị bẫy nhất</h2></Appear>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, width: 1280 }}>
        {[
          { prefix: 'un-', examples: ['unhappy', 'uninformed', 'unclear'], color: C.error, rule: 'Phổ biến nhất với adj' },
          { prefix: 'in-', examples: ['incomplete', 'incorrect', 'informal'], color: C.verb, rule: 'Trước b/m/p dùng im-' },
          { prefix: 'im-', examples: ['impossible', 'impolite', 'improper'], color: C.info, rule: 'Trước b/p/m' },
          { prefix: 'dis-', examples: ['dishonest', 'disinformation', 'disagree'], color: C.info, rule: 'Verb & Noun' },
          { prefix: 'mis-', examples: ['misinform', 'misunderstand', 'mistake'], color: C.warning, rule: 'Nghĩa sai/nhầm' },
          { prefix: 'il-', examples: ['illegal', 'illogical', 'illiterate'], color: C.success, rule: 'Trước l' },
        ].map((item, i) => (
          <Appear key={item.prefix} delay={6 + i * 5}>
            <Card style={{ padding: 24, borderLeft: `5px solid ${item.color}` }}>
              <div style={{ fontSize: 34, fontWeight: 900, color: item.color, fontFamily: MONO, marginBottom: 5 }}>{item.prefix}</div>
              <div style={{ fontSize: 17, color: C.muted, fontFamily: FONT, marginBottom: 8 }}>{item.rule}</div>
              {item.examples.map((ex) => <div key={ex} style={{ fontSize: 21, color: C.dark, fontFamily: FONT, marginBottom: 4 }}>• {ex}</div>)}
            </Card>
          </Appear>
        ))}
      </div>
    </div>
  </SceneShell>
);

// ============================================================
// SCENE 22 — SUFFIX MASTER
// ============================================================
const Scene22: React.FC = () => (
  <SceneShell accentColor={C.info} title="Suffix Master — Đuôi từ loại">
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 22 }}>
      <Appear delay={0}><h2 style={{ fontSize: 52, fontWeight: 800, color: C.dark, margin: 0, fontFamily: FONT }}>Hậu tố (Suffix) theo từng từ loại</h2></Appear>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 22, width: 1300 }}>
        {[
          { type: 'noun' as const, label: 'Danh từ (Noun)', suffixes: ['-tion/-sion (information, decision)', '-ment (improvement, government)', '-ness (happiness, kindness)', '-ity (ability, creativity)', '-er/-or (informer, actor)', '-ance/-ence (importance, difference)'] },
          { type: 'verb' as const, label: 'Động từ (Verb)', suffixes: ['-ize/-ise (organize, realize)', '-ate (communicate, educate)', '-ify (simplify, clarify)', '-en (widen, strengthen)'] },
          { type: 'adj' as const, label: 'Tính từ (Adjective)', suffixes: ['-ive (informative, creative)', '-al (national, educational)', '-ful (useful, helpful)', '-less (useless, careless)', '-able/-ible (comfortable, responsible)', '-ous (famous, dangerous)'] },
          { type: 'adv' as const, label: 'Trạng từ (Adverb)', suffixes: ['-ly thêm vào ADJ (informally, carefully)', 'quickly = quick + ly', 'happily = happy → happi + ly', 'easily = easy → easi + ly'] },
        ].map((cat, i) => (
          <Appear key={cat.type} delay={6 + i * 8}>
            <Card style={{ padding: 26, borderTop: `6px solid ${wordColors[cat.type]}` }}>
              <div style={{ fontSize: 27, fontWeight: 800, color: wordColors[cat.type], fontFamily: FONT, marginBottom: 12 }}>{cat.label}</div>
              {cat.suffixes.map((s) => (
                <div key={s} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 7 }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: wordColors[cat.type], marginTop: 9, flexShrink: 0 }} />
                  <span style={{ fontSize: 20, color: C.dark, fontFamily: FONT }}>{s}</span>
                </div>
              ))}
            </Card>
          </Appear>
        ))}
      </div>
    </div>
  </SceneShell>
);

// ============================================================
// SCENE 23 — FLASH CARD REVIEW
// ============================================================
const Scene23: React.FC = () => {
  const frame = useCurrentFrame();
  const cardData = [
    { word: 'inform', type: 'verb' as const, translation: 'thông báo' },
    { word: 'information', type: 'noun' as const, translation: 'thông tin (không đếm được)' },
    { word: 'informative', type: 'adj' as const, translation: 'cung cấp thông tin' },
    { word: 'informed', type: 'adj' as const, translation: 'có thông tin đầy đủ' },
    { word: 'informer', type: 'noun' as const, translation: 'người mật báo' },
    { word: 'informally', type: 'adv' as const, translation: 'một cách không trang trọng' },
  ];
  const typeLabels: Record<string, string> = { noun: 'N', verb: 'V', adj: 'Adj', adv: 'Adv' };
  const activeIdx = Math.min(Math.floor(frame / 120), cardData.length - 1);
  return (
    <SceneShell accentColor={C.verb} title="Ôn tập nhanh — Flash Cards">
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 28 }}>
        <Appear delay={0}><h2 style={{ fontSize: 50, fontWeight: 800, color: C.dark, margin: 0, fontFamily: FONT }}>🔄 Flash Card — 6 từ trong 6 thẻ</h2></Appear>
        <div style={{ width: 680, height: 230 }}>
          {cardData.map((card, i) => {
            if (i !== activeIdx) return null;
            const p = spring({ frame: Math.max(0, frame - i * 120), fps: FPS, config: { damping: 12, mass: 0.5 } });
            return (
              <div key={card.word} style={{ opacity: p, transform: `scale(${0.9 + 0.1 * p})` }}>
                <Card style={{ padding: 40, textAlign: 'center', borderTop: `8px solid ${wordColors[card.type]}` }}>
                  <div style={{ fontSize: 60, fontWeight: 900, color: wordColors[card.type], fontFamily: FONT }}>{card.word}</div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: 14, marginTop: 12 }}>
                    <Badge color={wordColors[card.type]}>{typeLabels[card.type]}</Badge>
                    <span style={{ fontSize: 27, color: C.slate, fontFamily: FONT }}>= {card.translation}</span>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' as const, justifyContent: 'center' }}>
          {cardData.map((card, i) => (
            <Appear key={card.word} delay={6 + i * 4}>
              <Card style={{ padding: '12px 22px', borderTop: `4px solid ${wordColors[card.type]}`, opacity: i <= activeIdx ? 1 : 0.35, background: i === activeIdx ? `${wordColors[card.type]}15` : undefined }}>
                <div style={{ fontSize: 24, fontWeight: 700, color: wordColors[card.type], fontFamily: FONT }}>{card.word}</div>
                <div style={{ fontSize: 18, color: C.muted, fontFamily: FONT, textAlign: 'center' }}>{typeLabels[card.type]}</div>
              </Card>
            </Appear>
          ))}
        </div>
        <Appear delay={40}><div style={{ fontSize: 24, color: C.slate, fontFamily: FONT }}>Tiến độ: {Math.min(activeIdx + 1, 6)}/6 từ</div></Appear>
      </div>
    </SceneShell>
  );
};

// ============================================================
// SCENE 24 — OUTRO
// ============================================================
const Scene24: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = 1 + 0.02 * Math.sin(frame / 5);
  const outroWords: Array<{ word: string; type: 'noun' | 'verb' | 'adj' | 'adv' }> = [
    { word: 'inform', type: 'verb' },
    { word: 'information', type: 'noun' },
    { word: 'informative', type: 'adj' },
    { word: 'informed', type: 'adj' },
    { word: 'informer', type: 'noun' },
    { word: 'informally', type: 'adv' },
  ];
  return (
    <SceneShell accentColor={C.noun} title="">
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 26 }}>
        <Appear delay={0}><div style={{ fontSize: 60, textAlign: 'center' }}>🎉</div></Appear>
        <Appear delay={4}><h2 style={{ fontSize: 64, fontWeight: 900, color: C.dark, margin: 0, fontFamily: FONT, textAlign: 'center' }}>Tổng kết — Word Formation</h2></Appear>
        <Appear delay={8}><p style={{ fontSize: 27, color: C.slate, fontFamily: FONT, textAlign: 'center', maxWidth: 1000, margin: 0 }}>Bạn đã học xong gia đình từ INFORMATION và 4 quy tắc nhận biết từ loại!</p></Appear>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' as const, justifyContent: 'center' }}>
          {outroWords.map((item, i) => (
            <Appear key={item.word} delay={14 + i * 4}>
              <Badge color={wordColors[item.type]} style={{ fontSize: 28, padding: '16px 30px' }}>{item.word}</Badge>
            </Appear>
          ))}
        </div>
        <Appear delay={36}>
          <Card style={{ width: 1000, padding: '30px 52px', textAlign: 'center' }}>
            <div style={{ fontSize: 27, fontWeight: 700, color: C.dark, fontFamily: FONT, marginBottom: 16 }}>4 bước vàng:</div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 18, flexWrap: 'wrap' as const }}>
              {['📖 Đọc câu', '🔍 Vị trí', '✨ Từ loại', '✅ Điền & kiểm tra'].map((step, i) => (
                <Badge key={step} color={[C.noun, C.verb, C.adj, C.success][i]} style={{ fontSize: 24, padding: '12px 26px' }}>{step}</Badge>
              ))}
            </div>
          </Card>
        </Appear>
        <Appear delay={48}>
          <div style={{
            background: `linear-gradient(90deg, ${C.noun}, ${C.verb}, ${C.adj})`,
            borderRadius: 999, padding: '22px 56px', fontSize: 32, fontWeight: 800, color: '#fff', fontFamily: FONT,
            transform: `scale(${pulse})`, boxShadow: `0 0 0 ${8 + 6 * Math.sin(frame / 5)}px rgba(37,99,235,0.12), 0 16px 32px rgba(37,99,235,0.25)`,
          }}>Luyện tập thêm để đạt điểm cao!</div>
        </Appear>
      </div>
    </SceneShell>
  );
};

// ============================================================
// MAIN EXPORT
// ============================================================
const sceneComponents: React.FC[] = [
  Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7, Scene8,
  Scene9, Scene10, Scene11, Scene12, Scene13, Scene14, Scene15, Scene16,
  Scene17, Scene18, Scene19, Scene20, Scene21, Scene22, Scene23, Scene24,
];

export const EnglishWordInfo: React.FC = () => (
  <AbsoluteFill style={{ background: '#F0F4FF' }}>
    {sceneComponents.map((Scene, i) => {
      const isLast = i === sceneComponents.length - 1;
      const dur = isLast ? LAST_DUR : SCENE_DUR;
      return (
        <Sequence key={i} from={i * SCENE_DUR} durationInFrames={dur}>
          <FadeWrap duration={dur}>
            <Scene />
          </FadeWrap>
        </Sequence>
      );
    })}
  </AbsoluteFill>
);
