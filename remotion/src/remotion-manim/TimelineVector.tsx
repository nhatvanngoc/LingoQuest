import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { useCoordinateSystem } from './CoordinateContext';

export interface TimelineVectorProps {
  from: number;
  to: number;
  yOffset?: number;
  color?: string;
  strokeWidth?: number;
  delay?: number;
  durationFrames?: number;
  label?: string;
  sublabel?: string;
  badge?: string;
  dashed?: boolean;
  glow?: boolean;
  arrowHead?: boolean;
  style?: React.CSSProperties;
}

export const TimelineVector: React.FC<TimelineVectorProps> = ({
  from,
  to,
  yOffset = -40,
  color = '#10B981',
  strokeWidth = 5,
  delay = 0,
  durationFrames = 25,
  label,
  sublabel,
  badge,
  dashed = false,
  glow = true,
  arrowHead = true,
  style,
}) => {
  const { c2p, width, height } = useCoordinateSystem();
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const animFrame = Math.max(0, frame - delay);
  const progress = interpolate(animFrame, [0, durationFrames], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const labelSpring = spring({
    frame: Math.max(0, animFrame - 10),
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  if (progress <= 0.001) return null;

  const startPt = c2p(from, 0);
  const endPt = c2p(to, 0);

  // Vector line runs at y = startPt.py + yOffset
  const yPos = startPt.py + yOffset;
  const currentX = startPt.px + (endPt.px - startPt.px) * progress;

  const arrowId = `vec-arrow-${from}-${to}-${color.replace('#', '')}`;

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width,
        height,
        pointerEvents: 'none',
        ...style,
      }}
    >
      <svg
        width={width}
        height={height}
        style={{ position: 'absolute', top: 0, left: 0, overflow: 'visible' }}
      >
        <defs>
          <filter id={`glow-${arrowId}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <marker
            id={arrowId}
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="8"
            markerHeight="8"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill={color} />
          </marker>
        </defs>

        {/* Stem down to axis if offset */}
        {yOffset !== 0 && (
          <>
            <line
              x1={startPt.px}
              y1={startPt.py}
              x2={startPt.px}
              y2={yPos}
              stroke={color}
              strokeWidth={2}
              strokeDasharray="4 4"
              opacity={0.6 * progress}
            />
            {progress >= 0.99 && (
              <line
                x1={endPt.px}
                y1={startPt.py}
                x2={endPt.px}
                y2={yPos}
                stroke={color}
                strokeWidth={2}
                strokeDasharray="4 4"
                opacity={0.6}
              />
            )}
          </>
        )}

        {/* The Vector Beam */}
        <line
          x1={startPt.px}
          y1={yPos}
          x2={currentX}
          y2={yPos}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={dashed ? '8 6' : undefined}
          filter={glow ? `url(#glow-${arrowId})` : undefined}
          markerEnd={arrowHead && progress > 0.1 ? `url(#${arrowId})` : undefined}
        />
      </svg>

      {/* Floating Badge & Labels above the center of the vector */}
      {(label || badge || sublabel) && (
        <div
          style={{
            position: 'absolute',
            left: (startPt.px + endPt.px) / 2,
            top: yPos - 12,
            transform: `translate(-50%, -100%) scale(${labelSpring})`,
            opacity: labelSpring,
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
                fontWeight: 900,
                fontSize: 14,
                padding: '4px 12px',
                borderRadius: 9999,
                boxShadow: `0 4px 14px ${color}88`,
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
                fontSize: 16,
                fontWeight: 800,
                color: '#FFFFFF',
                textShadow: '0 2px 10px rgba(0,0,0,0.9)',
                fontFamily: "'Segoe UI', system-ui, sans-serif",
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
