import React from 'react';
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { useCoordinateSystem } from './CoordinateContext';

export interface TimelinePointProps {
  at: number;
  label?: string;
  sublabel?: string;
  badge?: string;
  color?: string;
  radius?: number;
  pulse?: boolean;
  position?: 'top' | 'bottom';
  offsetY?: number;
  delay?: number;
  icon?: string;
  style?: React.CSSProperties;
}

export const TimelinePoint: React.FC<TimelinePointProps> = ({
  at,
  label,
  sublabel,
  badge,
  color = '#38BDF8',
  radius = 12,
  pulse = false,
  position = 'top',
  offsetY = 16,
  delay = 0,
  icon,
  style,
}) => {
  const { c2p } = useCoordinateSystem();
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pt = c2p(at, 0);

  const scale = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: { damping: 12, mass: 0.5, stiffness: 150 },
  });

  if (scale <= 0.001) return null;

  const isTop = position === 'top';

  return (
    <div
      style={{
        position: 'absolute',
        left: pt.px,
        top: pt.py,
        pointerEvents: 'none',
        transform: `translate(-50%, -50%) scale(${scale})`,
        zIndex: 50,
        ...style,
      }}
    >
      {/* Center Mathematical Dot */}
      <div
        style={{
          width: radius * 2,
          height: radius * 2,
          borderRadius: '50%',
          background: color,
          border: '3px solid #FFFFFF',
          boxShadow: `0 0 24px ${color}, 0 0 10px rgba(0,0,0,0.5)`,
          position: 'relative',
        }}
      >
        {/* Pulsing shockwave ring if enabled */}
        {pulse && (
          <div
            style={{
              position: 'absolute',
              inset: -10,
              borderRadius: '50%',
              border: `2px solid ${color}`,
              opacity: (Math.sin(frame * 0.15) + 1) / 2 * 0.8 + 0.2,
              transform: `scale(${1 + (frame % 30) / 30 * 0.6})`,
            }}
          />
        )}
      </div>

      {/* Label and Badge Container: perfectly anchored so it NEVER overlaps dot or axis */}
      {(label || badge || sublabel) && (
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: isTop ? -(radius + offsetY) : radius + offsetY,
            transform: isTop ? 'translate(-50%, -100%)' : 'translate(-50%, 0)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          {badge && (
            <div
              style={{
                background: color,
                color: '#0F172A',
                padding: '4px 14px',
                borderRadius: 12,
                fontSize: 13,
                fontWeight: 900,
                fontFamily: "'Segoe UI', system-ui, sans-serif",
                boxShadow: `0 4px 14px ${color}88`,
                marginBottom: 4,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                letterSpacing: 0.5,
              }}
            >
              {icon && <span>{icon}</span>}
              <span>{badge}</span>
            </div>
          )}

          {label && (
            <div
              style={{
                fontSize: 16,
                fontWeight: 800,
                color: '#FFFFFF',
                fontFamily: "'Segoe UI', system-ui, sans-serif",
                textShadow: '0 2px 10px rgba(0,0,0,0.9)',
                lineHeight: 1.2,
              }}
            >
              {label}
            </div>
          )}

          {sublabel && (
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: '#94A3B8',
                fontFamily: "'Segoe UI', system-ui, sans-serif",
                marginTop: 2,
              }}
            >
              {sublabel}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
