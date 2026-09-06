import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Img,
  staticFile,
} from 'remotion';

/* ─── PALETTE (dark-tech) ───────────────────────────────────── */
const P = {
  bg: '#070B14',
  card: '#0D1829',
  cardLight: '#132035',
  border: '#1E3A5F',
  blue: '#60A5FA',
  blueBright: '#3B82F6',
  purple: '#A78BFA',
  cyan: '#22D3EE',
  green: '#34D399',
  red: '#F87171',
  amber: '#FBBF24',
  text: '#F8FAFC',
  muted: '#94A3B8',
  gradient1: '#1E3A8A',
  gradient2: '#7C3AED',
};

/* ─── HELPERS ───────────────────────────────────────────────── */
const FadeUp: React.FC<{
  children: React.ReactNode; delay?: number; y?: number; style?: React.CSSProperties;
}> = ({ children, delay = 0, y = 50, style }) => {
  const frame = useCurrentFrame();
  const p = spring({ frame: frame - delay, fps: 30, config: { damping: 14, mass: 0.8 } });
  return (
    <div style={{
      opacity: interpolate(p, [0, 1], [0, 1]),
      transform: `translateY(${interpolate(p, [0, 1], [y, 0])}px)`,
      ...style
    }}>
      {children}
    </div>
  );
};

const PopIn: React.FC<{
  children: React.ReactNode; delay?: number; scale?: number; style?: React.CSSProperties;
}> = ({ children, delay = 0, scale = 0.8, style }) => {
  const frame = useCurrentFrame();
  const p = spring({ frame: frame - delay, fps: 30, config: { damping: 12, mass: 0.5 } });
  return (
    <div style={{
      opacity: interpolate(p, [0, 1], [0, 1]),
      transform: `scale(${interpolate(p, [0, 1], [scale, 1])})`,
      ...style
    }}>
      {children}
    </div>
  );
};

const SlideInLeft: React.FC<{
  children: React.ReactNode; delay?: number; style?: React.CSSProperties;
}> = ({ children, delay = 0, style }) => {
  const frame = useCurrentFrame();
  const p = spring({ frame: frame - delay, fps: 30, config: { damping: 14, mass: 0.8 } });
  return (
    <div style={{
      opacity: interpolate(p, [0, 1], [0, 1]),
      transform: `translateX(${interpolate(p, [0, 1], [-80, 0])}px)`,
      ...style
    }}>
      {children}
    </div>
  );
};

const SlideInRight: React.FC<{
  children: React.ReactNode; delay?: number; style?: React.CSSProperties;
}> = ({ children, delay = 0, style }) => {
  const frame = useCurrentFrame();
  const p = spring({ frame: frame - delay, fps: 30, config: { damping: 14, mass: 0.8 } });
  return (
    <div style={{
      opacity: interpolate(p, [0, 1], [0, 1]),
      transform: `translateX(${interpolate(p, [0, 1], [80, 0])}px)`,
      ...style
    }}>
      {children}
    </div>
  );
};

/* ─── SHARED: Animated orbs ──────────────────────────────────── */
const OrbField: React.FC<{count?: number; color?: string}> = ({ count = 8, color = P.blue }) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const t = frame / 30;
  
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {Array.from({ length: count }, (_, i) => {
        const baseX = ((i * 197 + 41) % 100) / 100;
        const baseY = ((i * 283 + 137) % 100) / 100;
        const driftX = Math.sin(t * 0.3 + i * 1.5) * 60;
        const driftY = Math.cos(t * 0.25 + i * 1.1) * 50;
        const x = baseX * width + driftX;
        const y = baseY * height + driftY;
        const size = 80 + ((i * 53 + 23) % 120);
        const pulse = Math.sin(t * 0.5 + i * 0.8) * 0.3 + 1;
        
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: x,
              top: y,
              width: size * pulse,
              height: size * pulse,
              borderRadius: '50%',
              background: `radial-gradient(circle, ${color}15 0%, transparent 70%)`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        );
      })}
    </div>
  );
};

/* ─── SHARED: Grid dots ──────────────────────────────────────── */
const GridDots: React.FC = () => (
  <div style={{
    position: 'absolute', inset: 0, opacity: 0.04,
    backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)',
    backgroundSize: '50px 50px',
  }} />
);

/* ═══════════════════════════════════════════════════════════════════
   SLIDE 1 — HERO / TITLE
   Large animated title with glowing effect
   ═══════════════════════════════════════════════════════════════════ */
const Slide1_Hero: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const cx = width / 2;
  const cy = height / 2;
  
  return (
    <AbsoluteFill style={{ background: P.bg }}>
      <OrbField count={12} color={P.blue} />
      <GridDots />
      
      {/* Central glow */}
      <div style={{
        position: 'absolute', left: cx, top: cy,
        width: 600, height: 400, transform: 'translate(-50%, -50%)',
        background: `radial-gradient(ellipse, ${P.blueBright}20 0%, transparent 70%)`,
      }} />
      
      {/* Category label */}
      <FadeUp delay={10}>
        <div style={{
          position: 'absolute', top: 140, left: '50%', transform: 'translateX(-50%)',
          padding: '12px 32px', borderRadius: 50,
          border: `2px solid ${P.purple}50`,
          fontSize: 20, fontWeight: 600, color: P.purple,
          letterSpacing: 4, textTransform: 'uppercase',
          fontFamily: 'system-ui',
        }}>
          OpenCode AI Agent
        </div>
      </FadeUp>
      
      {/* Main title */}
      <FadeUp delay={20}>
        <div style={{
          position: 'absolute', left: '50%', top: 280,
          transform: 'translateX(-50%)',
          fontSize: 100, fontWeight: 800, color: P.text,
          fontFamily: 'system-ui', lineHeight: 1.1, textAlign: 'center',
        }}>
          <span style={{ color: P.blue }}>Smart</span> Automation
          <br />Powered by AI
        </div>
      </FadeUp>
      
      {/* Subtitle */}
      <FadeUp delay={35}>
        <div style={{
          position: 'absolute', left: '50%', top: 520,
          transform: 'translateX(-50%)',
          fontSize: 28, color: P.muted, fontFamily: 'system-ui',
          maxWidth: 700, textAlign: 'center', lineHeight: 1.6,
        }}>
          Xây dựng AI Agent thông minh với khả năng tự học,
          <br />tự cải thiện và tích hợp seamless vào workflow.
        </div>
      </FadeUp>
      
      {/* Bottom badges */}
      <FadeUp delay={50}>
        <div style={{
          position: 'absolute', bottom: 100, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', gap: 20,
        }}>
          {[
            { label: 'OpenCode', color: P.green },
            { label: 'Claude Powered', color: P.purple },
            { label: 'Multi-Agent', color: P.cyan },
          ].map((b, i) => (
            <div key={i} style={{
              padding: '12px 28px', borderRadius: 25,
              background: `${b.color}15`, border: `2px solid ${b.color}40`,
              fontSize: 20, fontWeight: 600, color: b.color,
              fontFamily: 'system-ui',
            }}>
              {b.label}
            </div>
          ))}
        </div>
      </FadeUp>
    </AbsoluteFill>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   SLIDE 2 — WHAT IS AI AGENT
   Definition with visual diagram
   ═══════════════════════════════════════════════════════════════════ */
const Slide2_WhatIs: React.FC = () => {
  const components = [
    { icon: '🧠', label: 'AI Brain', desc: 'LLM + Tools', color: P.purple, x: 200, y: 300 },
    { icon: '🔧', label: 'Tools', desc: 'MCP Servers', color: P.blue, x: 500, y: 200 },
    { icon: '📚', label: 'Memory', desc: 'Context + History', color: P.green, x: 800, y: 300 },
    { icon: '🎯', label: 'Actions', desc: 'Execute Tasks', color: P.amber, x: 650, y: 500 },
  ];
  
  return (
    <AbsoluteFill style={{ background: P.bg }}>
      <GridDots />
      <OrbField count={6} color={P.purple} />
      
      {/* Header */}
      <FadeUp delay={0}>
        <div style={{
          position: 'absolute', top: 60, left: 80,
          fontSize: 22, color: P.purple, fontWeight: 700,
          letterSpacing: 4, textTransform: 'uppercase', fontFamily: 'system-ui',
        }}>
          Khái niệm
        </div>
      </FadeUp>
      <FadeUp delay={10}>
        <div style={{
          position: 'absolute', top: 100, left: 80,
          fontSize: 64, fontWeight: 800, color: P.text, fontFamily: 'system-ui',
        }}>
          AI Agent là gì?
        </div>
      </FadeUp>
      
      {/* Definition card */}
      <FadeUp delay={20}>
        <div style={{
          position: 'absolute', left: 80, top: 280,
          width: 480, padding: '32px 36px',
          background: P.card, borderRadius: 24,
          border: `2px solid ${P.border}`,
          boxShadow: `0 20px 60px rgba(0,0,0,0.4)`,
        }}>
          <div style={{ fontSize: 24, color: P.muted, fontFamily: 'system-ui', lineHeight: 1.7 }}>
            <span style={{ color: P.blue, fontWeight: 700 }}>AI Agent</span> là hệ thống AI
            có khả năng <span style={{ color: P.green }}>tự hành động</span>, 
            sử dụng công cụ, và <span style={{ color: P.amber }}>hoàn thành mục tiêu</span>
            mà không cần human-in-the-loop.
          </div>
        </div>
      </FadeUp>
      
      {/* Visual diagram - nodes */}
      {components.map((c, i) => (
        <PopIn key={i} delay={30 + i * 12}>
          <div style={{
            position: 'absolute', left: c.x, top: c.y,
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}>
            <div style={{
              width: 140, height: 140, borderRadius: 24,
              background: `${c.color}15`, border: `3px solid ${c.color}`,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              boxShadow: `0 0 40px ${c.color}30`,
            }}>
              <div style={{ fontSize: 42 }}>{c.icon}</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: c.color, marginTop: 6, fontFamily: 'system-ui' }}>{c.label}</div>
            </div>
            <div style={{ fontSize: 16, color: P.muted, marginTop: 8, fontFamily: 'system-ui' }}>{c.desc}</div>
          </div>
        </PopIn>
      ))}
      
      {/* Connecting lines (SVG-like) */}
      <div style={{
        position: 'absolute', left: 270, top: 340,
        width: 530, height: 200, opacity: 0.3,
      }}>
        <svg width="530" height="200" viewBox="0 0 530 200">
          <line x1="0" y1="40" x2="300" y2="-60" stroke={P.purple} strokeWidth="2" strokeDasharray="5,5" />
          <line x1="300" y1="-60" x2="530" y2="40" stroke={P.blue} strokeWidth="2" strokeDasharray="5,5" />
          <line x1="530" y1="40" x2="380" y2="200" stroke={P.amber} strokeWidth="2" strokeDasharray="5,5" />
        </svg>
      </div>
    </AbsoluteFill>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   SLIDE 3 — KEY CAPABILITIES
   4-column feature grid
   ═══════════════════════════════════════════════════════════════════ */
const Slide3_Capabilities: React.FC = () => {
  const features = [
    { icon: '🔍', title: 'Research', desc: 'Tìm kiếm, thu thập và xử lý thông tin từ nhiều nguồn', color: P.blue },
    { icon: '💻', title: 'Code', desc: 'Viết, sửa lỗi và tối ưu code tự động', color: P.green },
    { icon: '📊', title: 'Analyze', desc: 'Phân tích dữ liệu, tạo báo cáo và insights', color: P.purple },
    { icon: '🎨', title: 'Create', desc: 'Tạo nội dung: document, diagram, video', color: P.amber },
    { icon: '🔗', title: 'Integrate', desc: 'Kết nối với MCP servers và external tools', color: P.cyan },
    { icon: '🧠', title: 'Learn', desc: 'Ghi nhớ preferences và cải thiện theo thời gian', color: P.red },
  ];
  
  return (
    <AbsoluteFill style={{ background: P.bg }}>
      <GridDots />
      <OrbField count={8} color={P.green} />
      
      {/* Header */}
      <FadeUp delay={0}>
        <div style={{
          position: 'absolute', top: 60, left: '50%', transform: 'translateX(-50%)',
          fontSize: 22, color: P.green, fontWeight: 700,
          letterSpacing: 4, textTransform: 'uppercase', fontFamily: 'system-ui',
        }}>
          Capabilities
        </div>
      </FadeUp>
      <FadeUp delay={10}>
        <div style={{
          position: 'absolute', top: 100, left: '50%', transform: 'translateX(-50%)',
          fontSize: 56, fontWeight: 800, color: P.text, fontFamily: 'system-ui',
        }}>
          Khả năng chính
        </div>
      </FadeUp>
      
      {/* Feature grid 3x2 */}
      <div style={{
        position: 'absolute', top: 240, left: 80, right: 80,
        display: 'flex', flexWrap: 'wrap', gap: 24,
      }}>
        {features.map((f, i) => (
          <PopIn key={i} delay={20 + i * 10}>
            <div style={{
              width: 'calc(33.33% - 16px)', padding: '28px 24px',
              background: P.card, borderRadius: 20,
              border: `2px solid ${f.color}30`,
              boxShadow: `0 8px 32px rgba(0,0,0,0.3)`,
            }}>
              <div style={{
                width: 72, height: 72, borderRadius: 18,
                background: `${f.color}15`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 36, marginBottom: 16,
              }}>
                {f.icon}
              </div>
              <div style={{ fontSize: 28, fontWeight: 700, color: f.color, fontFamily: 'system-ui' }}>
                {f.title}
              </div>
              <div style={{ fontSize: 20, color: P.muted, fontFamily: 'system-ui', marginTop: 8, lineHeight: 1.5 }}>
                {f.desc}
              </div>
            </div>
          </PopIn>
        ))}
      </div>
    </AbsoluteFill>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   SLIDE 4 — ARCHITECTURE
   System architecture diagram
   ═══════════════════════════════════════════════════════════════════ */
const Slide4_Architecture: React.FC = () => {
  const layers = [
    { label: 'Presentation', items: ['Web UI', 'CLI', 'API'], color: P.blue, y: 100 },
    { label: 'Agent Layer', items: ['Orchestrator', 'Specialists'], color: P.purple, y: 280 },
    { label: 'Tool Layer', items: ['MCP Servers', 'Skills'], color: P.green, y: 460 },
    { label: 'Memory', items: ['Patterns', 'Preferences', 'History'], color: P.amber, y: 640 },
  ];
  
  return (
    <AbsoluteFill style={{ background: P.bg }}>
      <GridDots />
      <OrbField count={10} color={P.purple} />
      
      {/* Header */}
      <FadeUp delay={0}>
        <div style={{
          position: 'absolute', top: 30, left: 80,
          fontSize: 22, color: P.purple, fontWeight: 700,
          letterSpacing: 4, textTransform: 'uppercase', fontFamily: 'system-ui',
        }}>
          System Design
        </div>
      </FadeUp>
      <FadeUp delay={10}>
        <div style={{
          position: 'absolute', top: 70, left: 80,
          fontSize: 52, fontWeight: 800, color: P.text, fontFamily: 'system-ui',
        }}>
          Kiến trúc hệ thống
        </div>
      </FadeUp>
      
      {/* Architecture layers */}
      {layers.map((layer, li) => (
        <PopIn key={li} delay={15 + li * 12}>
          <div style={{
            position: 'absolute', left: 80, top: layer.y,
            width: 500, padding: '24px 32px',
            background: P.card, borderRadius: 16,
            border: `2px solid ${layer.color}40`,
            boxShadow: `0 8px 40px ${layer.color}10`,
          }}>
            <div style={{
              position: 'absolute', left: -16, top: '50%', transform: 'translateY(-50%)',
              width: 8, height: 60, background: layer.color, borderRadius: 4,
            }} />
            <div style={{ fontSize: 22, fontWeight: 700, color: layer.color, marginBottom: 12, fontFamily: 'system-ui' }}>
              {layer.label}
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {layer.items.map((item, ii) => (
                <div key={ii} style={{
                  padding: '8px 18px', borderRadius: 8,
                  background: `${layer.color}10`, border: `1px solid ${layer.color}30`,
                  fontSize: 18, fontWeight: 600, color: P.text, fontFamily: 'system-ui',
                }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </PopIn>
      ))}
      
      {/* Right side - flow diagram */}
      <SlideInRight delay={40}>
        <div style={{
          position: 'absolute', right: 80, top: 120,
          width: 480,
        }}>
          <div style={{ fontSize: 24, fontWeight: 700, color: P.muted, marginBottom: 24, fontFamily: 'system-ui' }}>
            Data Flow
          </div>
          {[
            { step: '1', text: 'User Input → Task Decomposition', color: P.blue },
            { step: '2', text: 'Agent selects Tools/Skills', color: P.purple },
            { step: '3', text: 'Execute with Memory context', color: P.green },
            { step: '4', text: 'Quality Gate → Output', color: P.amber },
          ].map((s, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20,
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: `${s.color}20`, border: `2px solid ${s.color}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22, fontWeight: 800, color: s.color, fontFamily: 'system-ui',
              }}>
                {s.step}
              </div>
              <div style={{ fontSize: 20, color: P.text, fontFamily: 'system-ui' }}>
                {s.text}
              </div>
            </div>
          ))}
        </div>
      </SlideInRight>
    </AbsoluteFill>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   SLIDE 5 — USE CASES
   Real-world applications
   ═══════════════════════════════════════════════════════════════════ */
const Slide5_UseCases: React.FC = () => {
  const cases = [
    { icon: '📝', title: 'Research Assistant', desc: 'Thu thập, tổng hợp và viết báo cáo tự động', stats: '10x Faster', color: P.blue },
    { icon: '🎬', title: 'Video Producer', desc: 'Script → Video hoàn chỉnh với TTS & subtitles', stats: '64s in 5min', color: P.purple },
    { icon: '📊', title: 'Data Analyst', desc: 'Phân tích Excel, tạo dashboard và insights', stats: 'Auto Charts', color: P.green },
    { icon: '🔧', title: 'Code Assistant', desc: 'Viết code, fix bugs, review pull requests', stats: 'CI/CD Ready', color: P.amber },
  ];
  
  return (
    <AbsoluteFill style={{ background: P.bg }}>
      <GridDots />
      <OrbField count={8} color={P.cyan} />
      
      {/* Header */}
      <FadeUp delay={0}>
        <div style={{
          position: 'absolute', top: 60, left: '50%', transform: 'translateX(-50%)',
          fontSize: 22, color: P.cyan, fontWeight: 700,
          letterSpacing: 4, textTransform: 'uppercase', fontFamily: 'system-ui',
        }}>
          Applications
        </div>
      </FadeUp>
      <FadeUp delay={10}>
        <div style={{
          position: 'absolute', top: 100, left: '50%', transform: 'translateX(-50%)',
          fontSize: 52, fontWeight: 800, color: P.text, fontFamily: 'system-ui',
        }}>
          Ứng dụng thực tế
        </div>
      </FadeUp>
      
      {/* Use case cards - 2x2 grid */}
      <div style={{
        position: 'absolute', top: 240, left: 80, right: 80,
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32,
      }}>
        {cases.map((c, i) => (
          <PopIn key={i} delay={20 + i * 12}>
            <div style={{
              padding: '32px 36px',
              background: P.card, borderRadius: 24,
              border: `2px solid ${c.color}30`,
              display: 'flex', gap: 24,
            }}>
              <div style={{
                width: 80, height: 80, borderRadius: 20,
                background: `${c.color}15`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 40, flexShrink: 0,
              }}>
                {c.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: c.color, fontFamily: 'system-ui' }}>
                  {c.title}
                </div>
                <div style={{ fontSize: 20, color: P.muted, marginTop: 6, fontFamily: 'system-ui', lineHeight: 1.5 }}>
                  {c.desc}
                </div>
                <div style={{
                  marginTop: 12, padding: '6px 16px', borderRadius: 8,
                  background: `${c.color}15`, display: 'inline-block',
                  fontSize: 16, fontWeight: 700, color: c.color, fontFamily: 'system-ui',
                }}>
                  {c.stats}
                </div>
              </div>
            </div>
          </PopIn>
        ))}
      </div>
    </AbsoluteFill>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   SLIDE 6 — METRICS & STATS
   Impressive numbers
   ═══════════════════════════════════════════════════════════════════ */
const Slide6_Metrics: React.FC = () => {
  const metrics = [
    { value: '100+', label: 'Scripts có sẵn', color: P.blue },
    { value: '8', label: 'Specialist Agents', color: P.purple },
    { value: '7', label: 'MCP Servers', color: P.green },
    { value: '95%', label: 'Quality Score', color: P.amber },
  ];
  
  const frame = useCurrentFrame();
  const t = frame / 30;
  
  return (
    <AbsoluteFill style={{ background: P.bg }}>
      <GridDots />
      <OrbField count={12} color={P.blue} />
      
      {/* Animated gradient orbs */}
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        width: 800, height: 600, transform: 'translate(-50%, -50%)',
        background: `radial-gradient(ellipse, ${P.blueBright}10 0%, transparent 60%)`,
        animation: `pulse ${3 + Math.sin(t) * 0.5}s ease-in-out infinite alternate`,
      }} />
      
      {/* Header */}
      <FadeUp delay={0}>
        <div style={{
          position: 'absolute', top: 80, left: '50%', transform: 'translateX(-50%)',
          fontSize: 22, color: P.blue, fontWeight: 700,
          letterSpacing: 4, textTransform: 'uppercase', fontFamily: 'system-ui',
        }}>
          By the Numbers
        </div>
      </FadeUp>
      <FadeUp delay={10}>
        <div style={{
          position: 'absolute', top: 120, left: '50%', transform: 'translateX(-50%)',
          fontSize: 56, fontWeight: 800, color: P.text, fontFamily: 'system-ui',
        }}>
          Thông số ấn tượng
        </div>
      </FadeUp>
      
      {/* Metric cards */}
      <div style={{
        position: 'absolute', top: 300, left: 80, right: 80,
        display: 'flex', justifyContent: 'space-around', gap: 32,
      }}>
        {metrics.map((m, i) => (
          <PopIn key={i} delay={20 + i * 10}>
            <div style={{
              flex: 1, padding: '48px 32px', textAlign: 'center',
              background: P.card, borderRadius: 24,
              border: `2px solid ${m.color}30`,
              boxShadow: `0 20px 60px rgba(0,0,0,0.3), 0 0 80px ${m.color}10`,
            }}>
              <div style={{
                fontSize: 80, fontWeight: 800, color: m.color,
                fontFamily: 'system-ui', lineHeight: 1,
              }}>
                {m.value}
              </div>
              <div style={{
                fontSize: 22, color: P.muted, marginTop: 12,
                fontFamily: 'system-ui',
              }}>
                {m.label}
              </div>
            </div>
          </PopIn>
        ))}
      </div>
    </AbsoluteFill>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   SLIDE 7 — TOOLS & INTEGRATIONS
   Tech stack / ecosystem
   ═══════════════════════════════════════════════════════════════════ */
const Slide7_Tools: React.FC = () => {
  const tools = [
    { name: 'Remotion', desc: 'Video rendering', cat: 'Video' },
    { name: 'draw.io', desc: 'Diagrams', cat: 'Design' },
    { name: 'Excel MCP', desc: 'Spreadsheets', cat: 'Office' },
    { name: 'Word MCP', desc: 'Documents', cat: 'Office' },
    { name: 'KiCad MCP', desc: 'PCB Design', cat: 'EDA' },
    { name: 'OpenSCAD', desc: '3D Modeling', cat: 'CAD' },
    { name: 'LaTeX', desc: 'Reports', cat: 'Docs' },
    { name: 'Playwright', desc: 'Browser automation', cat: 'Web' },
  ];
  
  const categories = [...new Set(tools.map(t => t.cat))];
  
  return (
    <AbsoluteFill style={{ background: P.bg }}>
      <GridDots />
      <OrbField count={8} color={P.green} />
      
      {/* Header */}
      <FadeUp delay={0}>
        <div style={{
          position: 'absolute', top: 60, left: '50%', transform: 'translateX(-50%)',
          fontSize: 22, color: P.green, fontWeight: 700,
          letterSpacing: 4, textTransform: 'uppercase', fontFamily: 'system-ui',
        }}>
          Ecosystem
        </div>
      </FadeUp>
      <FadeUp delay={10}>
        <div style={{
          position: 'absolute', top: 100, left: '50%', transform: 'translateX(-50%)',
          fontSize: 52, fontWeight: 800, color: P.text, fontFamily: 'system-ui',
        }}>
          Công cụ & Tích hợp
        </div>
      </FadeUp>
      
      {/* Tool grid */}
      <div style={{
        position: 'absolute', top: 240, left: 80, right: 80,
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20,
      }}>
        {tools.map((tool, i) => (
          <PopIn key={i} delay={20 + i * 8}>
            <div style={{
              padding: '24px 20px', textAlign: 'center',
              background: P.card, borderRadius: 16,
              border: `1px solid ${P.border}`,
              transition: 'all 0.3s',
            }}>
              <div style={{
                fontSize: 32, fontWeight: 700, color: P.text, marginBottom: 6, fontFamily: 'system-ui',
              }}>
                {tool.name}
              </div>
              <div style={{ fontSize: 16, color: P.muted, marginBottom: 10, fontFamily: 'system-ui' }}>
                {tool.desc}
              </div>
              <div style={{
                padding: '4px 12px', borderRadius: 6,
                background: `${P.green}10`, display: 'inline-block',
                fontSize: 14, fontWeight: 600, color: P.green, fontFamily: 'system-ui',
              }}>
                {tool.cat}
              </div>
            </div>
          </PopIn>
        ))}
      </div>
    </AbsoluteFill>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   SLIDE 8 — CTA / CLOSING
   Call to action with contact
   ═══════════════════════════════════════════════════════════════════ */
const Slide8_CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const cx = width / 2;
  const cy = height / 2;
  const t = frame / 30;
  
  return (
    <AbsoluteFill style={{ background: P.bg }}>
      <OrbField count={15} color={P.purple} />
      <GridDots />
      
      {/* Central glow */}
      <div style={{
        position: 'absolute', left: cx, top: cy,
        width: 700, height: 500, transform: 'translate(-50%, -50%)',
        background: `radial-gradient(ellipse, ${P.purple}15 0%, transparent 70%)`,
      }} />
      
      {/* Main CTA */}
      <FadeUp delay={0}>
        <div style={{
          position: 'absolute', left: '50%', top: 200,
          transform: 'translateX(-50%)',
          fontSize: 80, fontWeight: 800, color: P.text, fontFamily: 'system-ui',
          textAlign: 'center', lineHeight: 1.1,
        }}>
          Sẵn sàng
          <br /><span style={{ color: P.purple }}>bắt đầu?</span>
        </div>
      </FadeUp>
      
      <FadeUp delay={20}>
        <div style={{
          position: 'absolute', left: '50%', top: 440,
          transform: 'translateX(-50%)',
          fontSize: 28, color: P.muted, fontFamily: 'system-ui',
          textAlign: 'center', lineHeight: 1.6,
        }}>
          OpenCode AI Agent — Smart Automation for Everyone
        </div>
      </FadeUp>
      
      {/* CTA Button */}
      <FadeUp delay={35}>
        <div style={{
          position: 'absolute', left: '50%', top: 560,
          transform: 'translateX(-50%)',
          padding: '22px 64px',
          background: `linear-gradient(135deg, ${P.blueBright}, ${P.purple})`,
          borderRadius: 50, fontSize: 28, fontWeight: 700, color: '#fff',
          fontFamily: 'system-ui', cursor: 'pointer',
          boxShadow: `0 10px 40px ${P.purple}40`,
        }}>
          Get Started Now
        </div>
      </FadeUp>
      
      {/* Bottom tagline */}
      <FadeUp delay={50}>
        <div style={{
          position: 'absolute', bottom: 80, left: '50%', transform: 'translateX(-50%)',
          fontSize: 18, color: P.muted, fontFamily: 'system-ui',
          letterSpacing: 2,
        }}>
          opencode.ai • GitHub • Discord
        </div>
      </FadeUp>
    </AbsoluteFill>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   COMPOSITION: AI Agent Presentation
   8 slides × 8s = 64s total (1920 frames)
   ═══════════════════════════════════════════════════════════════════ */
const SCENE_DUR = 240; // 8 seconds per slide
const NUM_SCENES = 8;
export const AIAgentPresentation_TOTAL_FRAMES = SCENE_DUR * NUM_SCENES;

export const AIAgentPresentation: React.FC = () => {
  
  const slides = [
    Slide1_Hero,
    Slide2_WhatIs,
    Slide3_Capabilities,
    Slide4_Architecture,
    Slide5_UseCases,
    Slide6_Metrics,
    Slide7_Tools,
    Slide8_CTA,
  ];
  
  return (
    <AbsoluteFill style={{ background: P.bg }}>
      {slides.map((Slide, i) => (
        <Sequence key={i} from={i * SCENE_DUR} durationInFrames={SCENE_DUR}>
          <Slide />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
