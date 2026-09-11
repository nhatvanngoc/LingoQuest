import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { useCoordinateSystem } from './CoordinateContext';

export interface TimelineIntervalProps {
  from: number;
  to: number;
  yOffset?: number;
  height?: number;
  bracketHeight?: number;
  color?: string;
  fillColor?: string;
  label?: string;
  sublabel?: string;
  badge?: string;
  delay?: number;
  durationFrames?: number;
  style?: React.CSSProperties;
}

export const TimelineInterval: React.FC<TimelineIntervalProps> = ({
  from,
  to,
  yOffset = 30,
  height = 50,
  bracketHeight = 12,
  color = '#10B981',
  fillColor = 'rgba(16, 185, 129, 0.12)',
  label,
  sublabel,
  badge,
  delay = 0,
  durationFrames = 20,
  style,
}) => {
  const { c2p, width } = useCoordinateSystem();
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const animFrame = Math.max(0, frame - delay);
  const progress = interpolate(animFrame, [0, durationFrames], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const badgeSpring = spring({
    frame: Math.max(0, animFrame - 10),
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  if (progress <= 0.001) return null;

  const startPt = c2p(from, 0);
  const endPt = c2p(to, 0);

  const topY = startPt.py + yOffset;
  const currentEndX = startPt.px + (endPt.px - startPt.px) * progress;
  const intervalWidth = currentEndX - startPt.px;

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width,
        pointerEvents: 'none',
        ...style,
      }}
    >
      <svg
        width={width}
        height={height + Math.abs(yOffset) + 100}
        style={{ position: 'absolute', top: 0, left: 0, overflow: 'visible' }}
      >
        {/* Shaded highlight band */}
        {intervalWidth > 0 && (
          <rect
            x={startPt.px}
            y={startPt.py - 24}
            width={intervalWidth}
            height={48}
            fill={fillColor}
            rx={6}
          />
        )}

        {/* Mathematical Bracket path */}
        {/* Left end hook, horizontal bar, right end hook */}
        <path
          d={`
            M ${startPt.px} ${topY - bracketHeight}
            L ${startPt.px} ${topY}
            L ${currentEndX} ${topY}
            ${progress >= 0.95 ? `L ${currentEndX} ${topY - bracketHeight}` : ''}
          `}
          stroke={color}
          strokeWidth={3}
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* Label and Badge container positioned below or above the bracket */}
      {(label || badge || sublabel) && (
        <div
          style={{
            position: 'absolute',
            left: (startPt.px + endPt.px) / 2,
            top: topY + 14,
            transform: `translateX(-50%) scale(${badgeSpring})`,
            opacity: badgeSpring,
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
                color: '#042F2E',
                fontWeight: 900,
                fontSize: 14,
                padding: '4px 14px',
                borderRadius: 20,
                boxShadow: `0 4px 16px ${color}66`,
                marginBottom: 4,
                fontFamily: "'Segoe UI', system-ui, sans-serif",
                letterSpacing: 0.5,
              }}
            >
              {badge}
            </div>
          )}
          {label && (
            <div
              style={{
                fontSize: 15,
                fontWeight: 800,
                color: '#FFFFFF',
                fontFamily: "'Segoe UI', system-ui, sans-serif",
                textShadow: '0 2px 8px rgba(0,0,0,0.8)',
              }}
            >
              {label}
            </div>
          )}
          {sublabel && (
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: '#94A3B8',
                fontFamily: "'Segoe UI', system-ui, sans-serif",
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
