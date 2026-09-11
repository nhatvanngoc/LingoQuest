import React from 'react';
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';

// Top HUD Header with lesson meta, title, and scene step counter
export interface HUDHeaderProps {
  topicBadge?: string;
  title: string;
  subtitle?: string;
  step?: number;
  totalSteps?: number;
  accentColor?: string;
}

export const HUDHeader: React.FC<HUDHeaderProps> = ({
  topicBadge = 'LINGOQUEST • MATHEMATICAL GRAMMAR FRAMEWORK',
  title,
  subtitle,
  step,
  totalSteps = 6,
  accentColor = '#38BDF8',
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  return (
    <div
      style={{
        position: 'absolute',
        top: 40,
        left: 80,
        right: 80,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        transform: `translateY(${(1 - entrance) * -30}px)`,
        opacity: entrance,
        zIndex: 100,
      }}
    >
      <div>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '6px 14px',
            borderRadius: 9999,
            background: 'rgba(56, 189, 248, 0.12)',
            border: `1px solid ${accentColor}44`,
            color: accentColor,
            fontSize: 13,
            fontWeight: 800,
            letterSpacing: 1.2,
            fontFamily: "'Segoe UI', system-ui, sans-serif",
            textTransform: 'uppercase',
            marginBottom: 10,
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: accentColor }} />
          <span>{topicBadge}</span>
        </div>

        <h1
          style={{
            margin: 0,
            fontSize: 42,
            fontWeight: 900,
            color: '#FFFFFF',
            fontFamily: "'Segoe UI', system-ui, sans-serif",
            letterSpacing: -0.5,
            textShadow: '0 4px 20px rgba(0,0,0,0.6)',
            lineHeight: 1.15,
          }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            style={{
              margin: '6px 0 0 0',
              fontSize: 20,
              fontWeight: 500,
              color: '#94A3B8',
              fontFamily: "'Segoe UI', system-ui, sans-serif",
            }}
          >
            {subtitle}
          </p>
        )}
      </div>

      {step && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 18px',
            borderRadius: 14,
            background: 'rgba(15, 23, 42, 0.75)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
          }}
        >
          <span
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: '#64748B',
              fontFamily: "'Segoe UI', system-ui, sans-serif",
            }}
          >
            PHẦN
          </span>
          <span
            style={{
              fontSize: 20,
              fontWeight: 900,
              color: accentColor,
              fontFamily: "'Segoe UI', system-ui, sans-serif",
            }}
          >
            {step}
          </span>
          <span
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: '#64748B',
              fontFamily: "'Segoe UI', system-ui, sans-serif",
            }}
          >
            / {totalSteps}
          </span>
        </div>
      )}
    </div>
  );
};

// High clarity frosted glass container
export interface GlassCardProps {
  title?: string;
  badge?: string;
  accentColor?: string;
  children: React.ReactNode;
  delay?: number;
  width?: number | string;
  style?: React.CSSProperties;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  title,
  badge,
  accentColor = '#38BDF8',
  children,
  delay = 0,
  width,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  if (scale <= 0.001) return null;

  return (
    <div
      style={{
        width,
        background: 'rgba(15, 23, 42, 0.82)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: 24,
        padding: '24px 30px',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255,255,255,0.1)',
        transform: `scale(${scale})`,
        opacity: scale,
        ...style,
      }}
    >
      {(title || badge) && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 16,
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: 12,
          }}
        >
          {title && (
            <h3
              style={{
                margin: 0,
                fontSize: 22,
                fontWeight: 800,
                color: '#FFFFFF',
                fontFamily: "'Segoe UI', system-ui, sans-serif",
              }}
            >
              {title}
            </h3>
          )}
          {badge && (
            <span
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: 0.8,
                padding: '4px 10px',
                borderRadius: 8,
                background: `${accentColor}22`,
                color: accentColor,
                border: `1px solid ${accentColor}55`,
                fontFamily: "'Segoe UI', system-ui, sans-serif",
              }}
            >
              {badge}
            </span>
          )}
        </div>
      )}
      {children}
    </div>
  );
};

// Grammatical Formula Pill breakdown
export interface FormulaPillProps {
  formula: string;
  example: string;
  meaning: string;
  tense: string;
  accentColor: string;
  delay?: number;
}

export const FormulaPill: React.FC<FormulaPillProps> = ({
  formula,
  example,
  meaning,
  tense,
  accentColor,
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  return (
    <div
      style={{
        flex: 1,
        background: 'rgba(15, 23, 42, 0.85)',
        backdropFilter: 'blur(16px)',
        borderRadius: 24,
        padding: '28px',
        border: `2px solid ${accentColor}44`,
        boxShadow: `0 16px 40px rgba(0,0,0,0.4), 0 0 30px ${accentColor}18`,
        transform: `translateY(${(1 - enter) * 30}px) scale(${enter})`,
        opacity: enter,
      }}
    >
      <div
        style={{
          display: 'inline-block',
          fontSize: 13,
          fontWeight: 900,
          color: accentColor,
          letterSpacing: 1,
          textTransform: 'uppercase',
          padding: '4px 12px',
          borderRadius: 8,
          background: `${accentColor}18`,
          marginBottom: 12,
        }}
      >
        {tense}
      </div>

      <div
        style={{
          fontSize: 26,
          fontWeight: 800,
          color: '#F8FAFC',
          fontFamily: "'Consolas', 'Fira Code', monospace",
          background: 'rgba(0, 0, 0, 0.4)',
          padding: '12px 18px',
          borderRadius: 12,
          border: '1px solid rgba(255, 255, 255, 0.08)',
          marginBottom: 16,
          display: 'inline-block',
        }}
      >
        {formula}
      </div>

      <div style={{ marginTop: 12 }}>
        <div
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: '#FFFFFF',
            fontFamily: "'Segoe UI', system-ui, sans-serif",
            marginBottom: 6,
          }}
        >
          {example}
        </div>
        <div
          style={{
            fontSize: 17,
            fontWeight: 500,
            color: '#94A3B8',
            fontFamily: "'Segoe UI', system-ui, sans-serif",
          }}
        >
          {meaning}
        </div>
      </div>
    </div>
  );
};
