import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

import {
  CoordinateProvider,
  TimelineAxis,
  TimelinePoint,
  TimelineVector,
  TimelineInterval,
  MathBarrier,
  HUDHeader,
  GlassCard,
  FormulaPill,
} from './remotion-manim';

// Global styling constants
const FONT = `'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif`;

// Ambient dynamic mesh background with animated bokeh orbs
const AmbientBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const t = frame / 30;

  const circles = [
    { x: width * 0.2 + Math.sin(t * 0.25) * 60, y: height * 0.3 + Math.cos(t * 0.3) * 40, r: 350, color: 'rgba(56, 189, 248, 0.15)' },
    { x: width * 0.8 + Math.sin(t * 0.35 + 2) * 50, y: height * 0.4 + Math.cos(t * 0.25) * 50, r: 380, color: 'rgba(16, 185, 129, 0.14)' },
    { x: width * 0.5 + Math.cos(t * 0.2) * 70, y: height * 0.8 + Math.sin(t * 0.3) * 40, r: 400, color: 'rgba(245, 158, 11, 0.10)' },
  ];

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 15%, #0B132B 0%, #060913 80%)',
        }}
      />
      {circles.map((c, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: c.x - c.r,
            top: c.y - c.r,
            width: c.r * 2,
            height: c.r * 2,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${c.color} 0%, transparent 70%)`,
            filter: 'blur(50px)',
          }}
        />
      ))}
      {/* Precision grid pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
};

// ============================================================
// SCENE 1: HOOK & THE TWO PERSPECTIVES (0 - 240 frames, 8s)
// ============================================================
const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const vsSpring = spring({
    frame: Math.max(0, frame - 25),
    fps,
    config: { damping: 12, stiffness: 150 },
  });

  return (
    <AbsoluteFill style={{ padding: '0 80px', boxSizing: 'border-box' }}>
      <HUDHeader
        topicBadge="LINGOQUEST MASTERCLASS • REMOTION-MANIM FRAMEWORK"
        title="Quá Khứ Đơn vs Hiện Tại Hoàn Thành"
        subtitle="Mô hình tọa độ toán học giải mã bản chất thời gian trong tiếng Anh"
        step={1}
        totalSteps={6}
      />

      {/* Core Question Card */}
      <div style={{ position: 'absolute', top: 200, left: 80, right: 80 }}>
        <GlassCard accentColor="#38BDF8">
          <div style={{ textAlign: 'center', padding: '10px 0' }}>
            <span
              style={{
                fontSize: 16,
                fontWeight: 800,
                color: '#38BDF8',
                letterSpacing: 1.5,
                textTransform: 'uppercase',
                fontFamily: FONT,
              }}
            >
              CÙNG NÓI VỀ HÀNH ĐỘNG TRONG QUÁ KHỨ — TẠI SAO PHẢI CHỌN?
            </span>
            <h2
              style={{
                margin: '12px 0 0 0',
                fontSize: 34,
                fontWeight: 900,
                color: '#FFFFFF',
                fontFamily: FONT,
              }}
            >
              Sự khác biệt cốt lõi nằm ở <span style={{ color: '#38BDF8' }}>MỐI LIÊN HỆ VỚI HIỆN TẠI</span>
            </h2>
          </div>
        </GlassCard>
      </div>

      {/* Two Comparison Example Cards with VS badge */}
      <div
        style={{
          position: 'absolute',
          top: 420,
          left: 80,
          right: 80,
          display: 'flex',
          gap: 40,
          alignItems: 'center',
        }}
      >
        {/* Past Simple Card */}
        <div style={{ flex: 1 }}>
          <GlassCard title="Past Simple" badge="PAST ACTION" accentColor="#38BDF8" delay={15}>
            <div style={{ fontSize: 24, fontWeight: 800, color: '#38BDF8', fontFamily: FONT, marginBottom: 8 }}>
              "I lived in London for 3 years."
            </div>
            <div style={{ fontSize: 16, fontWeight: 600, color: '#94A3B8', fontFamily: FONT, lineHeight: 1.5 }}>
              👉 <strong style={{ color: '#F87171' }}>Hiện tại không còn sống ở London nữa.</strong>
              <br />
              Hành động đã hoàn thành 100% trong quá khứ.
            </div>
          </GlassCard>
        </div>

        {/* VS Badge */}
        <div
          style={{
            transform: `scale(${vsSpring})`,
            width: 64,
            height: 64,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #38BDF8, #10B981)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0F172A',
            fontWeight: 900,
            fontSize: 22,
            boxShadow: '0 0 30px rgba(56, 189, 248, 0.6)',
            flexShrink: 0,
            fontFamily: FONT,
          }}
        >
          VS
        </div>

        {/* Present Perfect Card */}
        <div style={{ flex: 1 }}>
          <GlassCard title="Present Perfect" badge="CONNECTED TO NOW" accentColor="#10B981" delay={25}>
            <div style={{ fontSize: 24, fontWeight: 800, color: '#34D399', fontFamily: FONT, marginBottom: 8 }}>
              "I have lived in London for 3 years."
            </div>
            <div style={{ fontSize: 16, fontWeight: 600, color: '#94A3B8', fontFamily: FONT, lineHeight: 1.5 }}>
              👉 <strong style={{ color: '#34D399' }}>Bây giờ vẫn đang sống ở London!</strong>
              <br />
              Bắt đầu quá khứ, kéo dài và tiếp diễn đến Hiện tại.
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Bottom Hint Banner */}
      <div style={{ position: 'absolute', bottom: 50, left: 80, right: 80, textAlign: 'center' }}>
        <span
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: '#64748B',
            fontFamily: FONT,
            letterSpacing: 0.5,
          }}
        >
          ▼ Phân tích trực quan qua hệ tọa độ Manim & trục thời gian bên dưới ▼
        </span>
      </div>
    </AbsoluteFill>
  );
};

// ============================================================
// SCENE 2: MATHEMATICAL GRAMMAR FORMULAS (240 - 540 frames, 10s)
// ============================================================
const Scene2Formulas: React.FC = () => {
  return (
    <AbsoluteFill style={{ padding: '0 80px', boxSizing: 'border-box' }}>
      <HUDHeader
        topicBadge="CẤU TRÚC NGỮ PHÁP CHUẨN XÁC"
        title="Công Thức Toán Học Cho 2 Thì"
        subtitle="Quy tắc phân rã chủ ngữ, trợ động từ và dạng thức động từ (V2 vs V3)"
        step={2}
        totalSteps={6}
      />

      <div
        style={{
          position: 'absolute',
          top: 220,
          left: 80,
          right: 80,
          display: 'flex',
          gap: 40,
        }}
      >
        <FormulaPill
          tense="PAST SIMPLE (QUÁ KHỨ ĐƠN)"
          formula="S + V2 / V-ed + O"
          example="She graduated in 2021."
          meaning="Cô ấy đã tốt nghiệp năm 2021 (xong rồi, năm 2021 đã qua)."
          accentColor="#38BDF8"
          delay={10}
        />

        <FormulaPill
          tense="PRESENT PERFECT (HIỆN TẠI HOÀN THÀNH)"
          formula="S + have / has + V3 / V-ed + O"
          example="She has graduated since 2021."
          meaning="Cô ấy tốt nghiệp từ năm 2021 và hiện đã có bằng đại học."
          accentColor="#10B981"
          delay={25}
        />
      </div>

      {/* Auxiliary Verb Breakdown */}
      <div style={{ position: 'absolute', top: 560, left: 80, right: 80 }}>
        <GlassCard title="Ghi Nhớ Trợ Động Từ (Auxiliary Verbs)" accentColor="#A78BFA" delay={35}>
          <div style={{ display: 'flex', gap: 30, alignItems: 'center' }}>
            <div style={{ flex: 1, padding: 16, background: 'rgba(0,0,0,0.3)', borderRadius: 16 }}>
              <div style={{ color: '#38BDF8', fontWeight: 800, fontSize: 18, marginBottom: 6, fontFamily: FONT }}>
                Quá khứ đơn: Mượn trợ động từ "DID"
              </div>
              <div style={{ color: '#CBD5E1', fontSize: 15, fontFamily: FONT }}>
                Phủ định: <code>S + did not (didn't) + V(nguyên mẫu)</code>
                <br />
                Nghi vấn: <code>Did + S + V(nguyên mẫu)?</code>
              </div>
            </div>

            <div style={{ flex: 1, padding: 16, background: 'rgba(0,0,0,0.3)', borderRadius: 16 }}>
              <div style={{ color: '#34D399', fontWeight: 800, fontSize: 18, marginBottom: 6, fontFamily: FONT }}>
                Hiện tại hoàn thành: Dùng "HAVE / HAS"
              </div>
              <div style={{ color: '#CBD5E1', fontSize: 15, fontFamily: FONT }}>
                I / You / We / They + <strong>HAVE</strong> + V3
                <br />
                He / She / It + <strong>HAS</strong> + V3
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </AbsoluteFill>
  );
};

// ============================================================
// SCENE 3: PAST SIMPLE ON COORDINATE TIMELINE (540 - 900 frames, 12s)
// ============================================================
const Scene3PastTimeline: React.FC = () => {
  return (
    <AbsoluteFill style={{ padding: '0 80px', boxSizing: 'border-box' }}>
      <HUDHeader
        topicBadge="MÔ HÌNH TỌA ĐỘ MANIM • PHÂN TÍCH 1"
        title="Quá Khứ Đơn: Điểm Cô Lập (Isolated Point)"
        subtitle="Hành động tại mốc cố định, bị rào chắn (Barrier) ngăn cách hoàn toàn với Hiện Tại"
        step={3}
        totalSteps={6}
        accentColor="#38BDF8"
      />

      {/* Target Sentence Card */}
      <div style={{ position: 'absolute', top: 190, left: 80, right: 80 }}>
        <GlassCard accentColor="#38BDF8" delay={5}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: 14, fontWeight: 800, color: '#38BDF8', letterSpacing: 1, fontFamily: FONT }}>
                VÍ DỤ ĐIỂN HÌNH (PAST SIMPLE):
              </span>
              <div style={{ fontSize: 32, fontWeight: 900, color: '#FFFFFF', fontFamily: FONT, marginTop: 4 }}>
                "I <span style={{ color: '#38BDF8' }}>bought</span> this car in 2020."
              </div>
              <div style={{ fontSize: 16, color: '#94A3B8', fontFamily: FONT, marginTop: 4 }}>
                (Tôi đã mua chiếc xe này vào năm 2020 — Việc mua đã diễn ra và xong hẳn ở năm 2020)
              </div>
            </div>
            <div
              style={{
                background: 'rgba(56, 189, 248, 0.15)',
                border: '1px solid #38BDF8',
                borderRadius: 16,
                padding: '12px 24px',
                textAlign: 'center',
              }}
            >
              <div style={{ color: '#38BDF8', fontSize: 13, fontWeight: 800, fontFamily: FONT }}>TÍNH CHẤT</div>
              <div style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 900, fontFamily: FONT }}>ĐÃ CHẤM DỨT</div>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Coordinate Canvas System */}
      <div
        style={{
          position: 'absolute',
          top: 380,
          left: 80,
          right: 80,
          height: 380,
          background: 'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(20px)',
          borderRadius: 24,
          border: '1px solid rgba(56, 189, 248, 0.25)',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
        }}
      >
        <CoordinateProvider
          config={{
            xDomain: [2018, 2028],
            width: 1760,
            height: 380,
            padding: { left: 120, right: 120, top: 190, bottom: 90 },
          }}
        >
          {/* Main Axis */}
          <TimelineAxis
            tickStep={2}
            tickFormat={(v) => `${v}`}
            axisColor="#38BDF8"
            pastLabel="◄ QUÁ KHỨ (PAST)"
            futureLabel="TƯƠNG LAI (FUTURE) ►"
          />

          {/* Point at 2020 */}
          <TimelinePoint
            at={2020}
            badge="EVENT (SỰ KIỆN)"
            label="Bought Car (Mua xe)"
            sublabel="Mốc thời gian xác định: in 2020"
            color="#38BDF8"
            radius={14}
            pulse={true}
            position="top"
            offsetY={20}
            delay={20}
          />

          {/* Barrier at NOW (2026.7) */}
          <MathBarrier
            at={2026.7}
            badge="NOW (HIỆN TẠI)"
            label="0% LIÊN HỆ HIỆN TẠI"
            sublabel="Rào chắn thời gian ngăn cách"
            color="#EF4444"
            height={220}
            delay={35}
          />
        </CoordinateProvider>
      </div>

      {/* Bottom Summary Callout */}
      <div style={{ position: 'absolute', bottom: 35, left: 80, right: 80 }}>
        <GlassCard accentColor="#EF4444" delay={45} style={{ padding: '16px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ fontSize: 24 }}>💡</span>
            <span style={{ fontSize: 16, fontWeight: 700, color: '#F1F5F9', fontFamily: FONT }}>
              <strong>KẾT LUẬN TOÁN HỌC:</strong> Past Simple là một <span style={{ color: '#38BDF8' }}>Điểm Tọa Độ Đóng (Closed Point)</span>.
              Hành động xảy ra và kết thúc trong quá khứ, không có đường truyền (Vector) nào chạm tới mốc Hiện Tại (Now).
            </span>
          </div>
        </GlassCard>
      </div>
    </AbsoluteFill>
  );
};

// ============================================================
// SCENE 4: PRESENT PERFECT ON COORDINATE TIMELINE (900 - 1290 frames, 13s)
// ============================================================
const Scene4PresentTimeline: React.FC = () => {
  return (
    <AbsoluteFill style={{ padding: '0 80px', boxSizing: 'border-box' }}>
      <HUDHeader
        topicBadge="MÔ HÌNH TỌA ĐỘ MANIM • PHÂN TÍCH 2"
        title="Hiện Tại Hoàn Thành: Vector Kéo Dài (Continuous Beam)"
        subtitle="Hành động bắt đầu trong quá khứ, vươn thẳng chạm tới Hiện Tại (Now)"
        step={4}
        totalSteps={6}
        accentColor="#10B981"
      />

      {/* Target Sentence Card */}
      <div style={{ position: 'absolute', top: 190, left: 80, right: 80 }}>
        <GlassCard accentColor="#10B981" delay={5}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: 14, fontWeight: 800, color: '#10B981', letterSpacing: 1, fontFamily: FONT }}>
                VÍ DỤ ĐIỂN HÌNH (PRESENT PERFECT):
              </span>
              <div style={{ fontSize: 32, fontWeight: 900, color: '#FFFFFF', fontFamily: FONT, marginTop: 4 }}>
                "I <span style={{ color: '#10B981' }}>have lived</span> in Hanoi since 2022 (for 4 years)."
              </div>
              <div style={{ fontSize: 16, color: '#94A3B8', fontFamily: FONT, marginTop: 4 }}>
                (Tôi đã và đang sống ở Hà Nội từ năm 2022 đến nay — Hiện tại vẫn đang sống tại đây)
              </div>
            </div>
            <div
              style={{
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid #10B981',
                borderRadius: 16,
                padding: '12px 24px',
                textAlign: 'center',
              }}
            >
              <div style={{ color: '#10B981', fontSize: 13, fontWeight: 800, fontFamily: FONT }}>TÍNH CHẤT</div>
              <div style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 900, fontFamily: FONT }}>CHẠM HIỆN TẠI</div>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Coordinate Canvas System */}
      <div
        style={{
          position: 'absolute',
          top: 380,
          left: 80,
          right: 80,
          height: 380,
          background: 'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(20px)',
          borderRadius: 24,
          border: '1px solid rgba(16, 185, 129, 0.25)',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
        }}
      >
        <CoordinateProvider
          config={{
            xDomain: [2018, 2028],
            width: 1760,
            height: 380,
            padding: { left: 120, right: 120, top: 190, bottom: 90 },
          }}
        >
          <TimelineAxis
            tickStep={2}
            tickFormat={(v) => `${v}`}
            axisColor="#10B981"
            pastLabel="◄ QUÁ KHỨ (PAST)"
            futureLabel="TƯƠNG LAI (FUTURE) ►"
          />

          {/* Starting Point at 2022 — positioned top */}
          <TimelinePoint
            at={2022}
            badge="START (BẮT ĐẦU)"
            label="Chuyển đến Hà Nội"
            sublabel="Mốc bắt đầu: since 2022"
            color="#10B981"
            radius={12}
            position="top"
            offsetY={20}
            delay={15}
          />

          {/* Vector Beam from 2022 to 2026.7 — elevated */}
          <TimelineVector
            from={2022}
            to={2026.7}
            yOffset={-70}
            color="#10B981"
            strokeWidth={6}
            badge="TIẾP DIỄN ĐẾN NAY"
            label="Hành động kéo dài"
            delay={25}
            durationFrames={30}
          />

          {/* Interval measuring duration below axis */}
          <TimelineInterval
            from={2022}
            to={2026.7}
            yOffset={45}
            badge="Δt = 4 NĂM (FOR 4 YEARS)"
            label="Khoảng thời gian (Duration)"
            color="#F59E0B"
            delay={35}
          />

          {/* Endpoint at NOW — positioned top */}
          <TimelinePoint
            at={2026.7}
            badge="NOW (HIỆN TẠI)"
            label="VẪN ĐANG Ở HÀ NỘI"
            sublabel="Đang tiếp diễn"
            color="#F59E0B"
            radius={14}
            pulse={true}
            position="top"
            offsetY={20}
            delay={45}
          />
        </CoordinateProvider>
      </div>

      {/* Bottom Summary Callout */}
      <div style={{ position: 'absolute', bottom: 35, left: 80, right: 80 }}>
        <GlassCard accentColor="#10B981" delay={50} style={{ padding: '16px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ fontSize: 24 }}>✨</span>
            <span style={{ fontSize: 16, fontWeight: 700, color: '#F1F5F9', fontFamily: FONT }}>
              <strong>KẾT LUẬN TOÁN HỌC:</strong> Present Perfect là một <span style={{ color: '#10B981' }}>Vector Khoảng (Interval Vector)</span>.
              Nó liên kết quá khứ với hiện tại bằng từ khóa <code style={{ color: '#10B981' }}>SINCE</code> (mốc bắt đầu) và <code style={{ color: '#F59E0B' }}>FOR</code> (độ dài khoảng thời gian Δt).
            </span>
          </div>
        </GlassCard>
      </div>
    </AbsoluteFill>
  );
};

// ============================================================
// SCENE 5: THE CONTRAST SHOWDOWN — DUAL TIMELINES (1290 - 1650 frames, 12s)
// ============================================================
const Scene5Contrast: React.FC = () => {
  return (
    <AbsoluteFill style={{ padding: '0 80px', boxSizing: 'border-box' }}>
      <HUDHeader
        topicBadge="SO SÁNH ĐỐI XỨNG TRỰC QUAN"
        title="Trường Hợp Kết Quả (Result in Present)"
        subtitle="So sánh câu chuyện mất chìa khóa — Khi kết quả quyết định thì ngữ pháp"
        step={5}
        totalSteps={6}
        accentColor="#F59E0B"
      />

      <div
        style={{
          position: 'absolute',
          top: 190,
          left: 80,
          right: 80,
          display: 'flex',
          gap: 30,
        }}
      >
        {/* Past Simple Case */}
        <div style={{ flex: 1 }}>
          <GlassCard title="Past Simple: I lost my keys." badge="CHUYỆN QUÁ KHỨ" accentColor="#38BDF8" delay={5}>
            <div style={{ fontSize: 16, color: '#E2E8F0', fontFamily: FONT, lineHeight: 1.6 }}>
              • Tôi đã làm mất chìa khóa (ví dụ: hôm qua).
              <br />
              • <strong style={{ color: '#38BDF8' }}>Hiện tại:</strong> Có thể tôi đã tìm thấy rồi, hoặc đã làm chìa khóa mới.
              <br />
              👉 Không nhấn mạnh tới hậu quả bây giờ.
            </div>

            <div style={{ height: 180, position: 'relative', marginTop: 16 }}>
              <CoordinateProvider
                config={{
                  xDomain: [0, 10],
                  width: 800,
                  height: 180,
                  padding: { left: 50, right: 50, top: 100, bottom: 50 },
                }}
              >
                <TimelineAxis tickStep={5} pastLabel="HÔM QUA" futureLabel="BÂY GIỜ" axisColor="#38BDF8" />
                <TimelinePoint at={3} badge="MẤT CHÌA" color="#38BDF8" position="top" offsetY={14} delay={15} />
                <MathBarrier at={8} badge="BÂY GIỜ" label="Hết liên hệ" color="#EF4444" height={120} delay={25} />
              </CoordinateProvider>
            </div>
          </GlassCard>
        </div>

        {/* Present Perfect Case */}
        <div style={{ flex: 1 }}>
          <GlassCard title="Present Perfect: I have lost my keys!" badge="HẬU QUẢ HIỆN TẠI" accentColor="#10B981" delay={15}>
            <div style={{ fontSize: 16, color: '#E2E8F0', fontFamily: FONT, lineHeight: 1.6 }}>
              • Tôi đã làm mất chìa khóa!
              <br />
              • <strong style={{ color: '#34D399' }}>Hiện tại:</strong> Tôi vẫn chưa tìm thấy, đang đứng ngoài cửa không vào được nhà!
              <br />
              👉 Kết quả của quá khứ đang ảnh hưởng trực tiếp đến Now.
            </div>

            <div style={{ height: 180, position: 'relative', marginTop: 16 }}>
              <CoordinateProvider
                config={{
                  xDomain: [0, 10],
                  width: 800,
                  height: 180,
                  padding: { left: 50, right: 50, top: 100, bottom: 50 },
                }}
              >
                <TimelineAxis tickStep={5} pastLabel="HÔM QUA" futureLabel="BÂY GIỜ" axisColor="#10B981" />
                <TimelinePoint at={3} badge="MẤT CHÌA" color="#10B981" position="top" offsetY={14} delay={25} />
                <TimelineVector from={3} to={8} yOffset={-40} badge="HẬU QUẢ" color="#10B981" delay={35} />
                <TimelinePoint at={8} badge="KHÔNG VÀO ĐƯỢC NHÀ" color="#F59E0B" position="top" offsetY={14} pulse delay={45} />
              </CoordinateProvider>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Golden Rule banner */}
      <div style={{ position: 'absolute', bottom: 40, left: 80, right: 80 }}>
        <GlassCard accentColor="#F59E0B" delay={50} style={{ textAlign: 'center', padding: '16px' }}>
          <span style={{ fontSize: 18, fontWeight: 800, color: '#FCD34D', fontFamily: FONT }}>
            🌟 QUY TẮC VÀNG: Nếu sự việc quá khứ để lại HẬU QUẢ còn nguyên ở Hiện Tại ➔ ƯU TIÊN DÙNG PRESENT PERFECT!
          </span>
        </GlassCard>
      </div>
    </AbsoluteFill>
  );
};

// ============================================================
// SCENE 6: SIGNAL WORDS CHEAT SHEET (1650 - 1920 frames, 9s)
// ============================================================
const Scene6Signals: React.FC = () => {
  return (
    <AbsoluteFill style={{ padding: '0 80px', boxSizing: 'border-box' }}>
      <HUDHeader
        topicBadge="BÍ KÍP NHẬN DIỆN TRONG BÀI THI"
        title="Dấu Hiệu Nhận Biết Cốt Lõi (Signal Words)"
        subtitle="Nhìn vào trạng từ chỉ thời gian để chọn thì chính xác 100% trong 2 giây"
        step={6}
        totalSteps={6}
      />

      <div
        style={{
          position: 'absolute',
          top: 210,
          left: 80,
          right: 80,
          display: 'flex',
          gap: 40,
        }}
      >
        {/* Past Simple Signals */}
        <div style={{ flex: 1 }}>
          <GlassCard title="Past Simple Signals" badge="MỐC THỜI GIAN ĐÃ QUA" accentColor="#38BDF8" delay={10}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 8 }}>
              {[
                { word: 'yesterday', note: 'ngày hôm qua' },
                { word: 'last week / month / year', note: 'tuần trước, năm ngoái' },
                { word: 'in 1999 / in 2020', note: 'năm xác định trong quá khứ' },
                { word: '2 days ago', note: 'cách đây 2 ngày (có từ ago)' },
                { word: 'when I was a child...', note: 'mệnh đề chỉ thời điểm quá khứ' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'rgba(0, 0, 0, 0.3)',
                    padding: '10px 16px',
                    borderRadius: 12,
                    borderLeft: '4px solid #38BDF8',
                  }}
                >
                  <span style={{ fontSize: 18, fontWeight: 800, color: '#38BDF8', fontFamily: FONT }}>{item.word}</span>
                  <span style={{ fontSize: 14, color: '#94A3B8', fontFamily: FONT }}>{item.note}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Present Perfect Signals */}
        <div style={{ flex: 1 }}>
          <GlassCard title="Present Perfect Signals" badge="KÉO DÀI / TRẢI NGHIỆM" accentColor="#10B981" delay={20}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 8 }}>
              {[
                { word: 'since + mốc thời gian', note: 'since 2020, since yesterday' },
                { word: 'for + khoảng thời gian', note: 'for 5 years, for 2 months' },
                { word: 'already / just / yet', note: 'vừa mới, đã rồi, chưa' },
                { word: 'ever / never', note: 'đã từng / chưa bao giờ (kinh nghiệm)' },
                { word: 'so far / up to now', note: 'cho đến tận thời điểm này' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'rgba(0, 0, 0, 0.3)',
                    padding: '10px 16px',
                    borderRadius: 12,
                    borderLeft: '4px solid #10B981',
                  }}
                >
                  <span style={{ fontSize: 18, fontWeight: 800, color: '#34D399', fontFamily: FONT }}>{item.word}</span>
                  <span style={{ fontSize: 14, color: '#94A3B8', fontFamily: FONT }}>{item.note}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ============================================================
// SCENE 7: INTERACTIVE QUIZ & MASTERY OUTRO (1920 - 2160 frames, 8s)
// ============================================================
const Scene7QuizOutro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Reveal answer at frame 60 (after 2 seconds of thinking)
  const isAnswerRevealed = frame >= 60;
  const answerSpring = spring({
    frame: Math.max(0, frame - 60),
    fps,
    config: { damping: 12, stiffness: 150 },
  });

  return (
    <AbsoluteFill style={{ padding: '0 80px', boxSizing: 'border-box' }}>
      <HUDHeader
        topicBadge="THỬ THÁCH 5 GIÂY • KIỂM TRA ĐỘ HIỂU"
        title="Chọn Đáp Án Đúng Nhất"
        subtitle="Áp dụng ngay mô hình toán học vừa học vào bài tập thực tế"
      />

      {/* Quiz Question Card */}
      <div style={{ position: 'absolute', top: 200, left: 80, right: 80 }}>
        <GlassCard accentColor="#F59E0B" delay={10}>
          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <div style={{ fontSize: 16, fontWeight: 800, color: '#F59E0B', letterSpacing: 1.5, fontFamily: FONT }}>
              CÂU HỎI:
            </div>
            <div style={{ fontSize: 34, fontWeight: 900, color: '#FFFFFF', fontFamily: FONT, margin: '14px 0' }}>
              "She <span style={{ color: '#F59E0B', textDecoration: 'underline' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> in Paris since 2021."
            </div>
            <div style={{ fontSize: 16, color: '#94A3B8', fontFamily: FONT }}>
              Gợi ý: Chú ý từ khóa chỉ thời gian <strong style={{ color: '#10B981' }}>"since 2021"</strong>!
            </div>
          </div>
        </GlassCard>
      </div>

      {/* 2 Options */}
      <div
        style={{
          position: 'absolute',
          top: 420,
          left: 80,
          right: 80,
          display: 'flex',
          gap: 40,
        }}
      >
        {/* Option A */}
        <div
          style={{
            flex: 1,
            background: isAnswerRevealed ? 'rgba(239, 68, 68, 0.15)' : 'rgba(15, 23, 42, 0.85)',
            border: isAnswerRevealed ? '2px solid #EF4444' : '1px solid rgba(255,255,255,0.1)',
            borderRadius: 20,
            padding: 24,
            transition: 'all 0.3s ease',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: isAnswerRevealed ? '#EF4444' : '#334155',
                color: '#FFFFFF',
                fontWeight: 900,
                fontSize: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: FONT,
              }}
            >
              A
            </div>
            <div>
              <div style={{ fontSize: 26, fontWeight: 800, color: '#FFFFFF', fontFamily: FONT }}>lived</div>
              {isAnswerRevealed && (
                <div style={{ fontSize: 15, color: '#FCA5A5', fontWeight: 600, fontFamily: FONT, marginTop: 4 }}>
                  ❌ Sai. Có 'since' kéo dài đến nay, không dùng quá khứ đơn!
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Option B */}
        <div
          style={{
            flex: 1,
            background: isAnswerRevealed ? 'rgba(16, 185, 129, 0.25)' : 'rgba(15, 23, 42, 0.85)',
            border: isAnswerRevealed ? '2px solid #10B981' : '1px solid rgba(255,255,255,0.1)',
            borderRadius: 20,
            padding: 24,
            transform: isAnswerRevealed ? `scale(${1 + 0.03 * answerSpring})` : 'none',
            boxShadow: isAnswerRevealed ? '0 0 30px rgba(16, 185, 129, 0.4)' : 'none',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: isAnswerRevealed ? '#10B981' : '#334155',
                color: '#FFFFFF',
                fontWeight: 900,
                fontSize: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: FONT,
              }}
            >
              B
            </div>
            <div>
              <div style={{ fontSize: 26, fontWeight: 800, color: '#FFFFFF', fontFamily: FONT }}>has lived</div>
              {isAnswerRevealed && (
                <div style={{ fontSize: 15, color: '#A7F3D0', fontWeight: 700, fontFamily: FONT, marginTop: 4 }}>
                  ✅ CHÍNH XÁC! Hành động bắt đầu năm 2021 và vẫn kéo dài đến nay!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Outro Brand Footer */}
      <div
        style={{
          position: 'absolute',
          bottom: 50,
          left: 80,
          right: 80,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: 20,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: 'linear-gradient(135deg, #38BDF8, #10B981)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0F172A',
              fontWeight: 900,
              fontSize: 18,
            }}
          >
            LQ
          </div>
          <span style={{ fontSize: 18, fontWeight: 800, color: '#FFFFFF', fontFamily: FONT }}>
            LingoQuest Educational Video Framework
          </span>
        </div>
        <span style={{ fontSize: 14, color: '#64748B', fontFamily: FONT }}>
          Powered by Remotion React Components & Manim Mathematical Coordinates
        </span>
      </div>
    </AbsoluteFill>
  );
};

// ============================================================
// MASTER COMPOSITION ROOT: 7 SCENES, 72s = 2160 FRAMES @ 30FPS
// ============================================================
export const EnglishGrammarManimHybrid: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#060913', fontFamily: FONT }}>
      <AmbientBackground />

      {/* Scene 1: Hook (0 - 240, 8s) */}
      <Sequence from={0} durationInFrames={240}>
        <Scene1Hook />
      </Sequence>

      {/* Scene 2: Formulas (240 - 540, 10s) */}
      <Sequence from={240} durationInFrames={300}>
        <Scene2Formulas />
      </Sequence>

      {/* Scene 3: Past Simple Timeline (540 - 900, 12s) */}
      <Sequence from={540} durationInFrames={360}>
        <Scene3PastTimeline />
      </Sequence>

      {/* Scene 4: Present Perfect Timeline (900 - 1290, 13s) */}
      <Sequence from={900} durationInFrames={390}>
        <Scene4PresentTimeline />
      </Sequence>

      {/* Scene 5: Contrast Showdown (1290 - 1650, 12s) */}
      <Sequence from={1290} durationInFrames={360}>
        <Scene5Contrast />
      </Sequence>

      {/* Scene 6: Signal Words (1650 - 1920, 9s) */}
      <Sequence from={1650} durationInFrames={270}>
        <Scene6Signals />
      </Sequence>

      {/* Scene 7: Interactive Quiz & Outro (1920 - 2160, 8s) */}
      <Sequence from={1920} durationInFrames={240}>
        <Scene7QuizOutro />
      </Sequence>
    </AbsoluteFill>
  );
};
