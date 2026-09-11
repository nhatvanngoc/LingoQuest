import React from 'react';
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { useCoordinateSystem } from './CoordinateContext';

export interface MathBarrierProps {
  at: number;
  height?: number;
  color?: string;
  label?: string;
  sublabel?: string;
  badge?: string;
  icon?: string;
  delay?: number;
  style?: React.CSSProperties;
}

export const MathBarrier: React.FC<MathBarrierProps> = ({
  at,
  height = 200,
  color = '#EF4444',
  label,
  sublabel,
  badge = 'CUTOFF',
  icon = '⛔',
  delay = 0,
  style,
}) => {
  const { c2p } = useCoordinateSystem();
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pt = c2p(at, 0);

  const scale = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: { damping: 12, stiffness: 140 },
  });

  if (scale <= 0.001) return null;

  return (
    <div
      style={{
        position: 'absolute',
        left: pt.px,
        top: pt.py,
        pointerEvents: 'none',
        zIndex: 40,
        ...style,
      }}
    >
      {/* Vertical Barrier Laser Line */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: -height / 2,
          width: 3,
          height: height * scale,
          background: `linear-gradient(180deg, transparent 0%, ${color} 20%, ${color} 80%, transparent 100%)`,
          boxShadow: `0 0 20px ${color}, 0 0 8px ${color}`,
          transform: 'translateX(-50%)',
        }}
      />

      {/* Barrier Floating Badge Container — positioned cleanly above */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: -65,
          transform: `translate(-50%, -50%) scale(${scale})`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          whiteSpace: 'nowrap',
        }}
      >
        <div
          style={{
            background: color,
            color: '#FFFFFF',
            fontWeight: 900,
            fontSize: 13,
            padding: '4px 14px',
            borderRadius: 10,
            boxShadow: `0 4px 16px ${color}99`,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            fontFamily: "'Segoe UI', system-ui, sans-serif",
            letterSpacing: 0.5,
          }}
        >
          <span>{icon}</span>
          <span>{badge}</span>
        </div>

        {label && (
          <div
            style={{
              marginTop: 4,
              fontSize: 15,
              fontWeight: 800,
              color: '#FECDD3',
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
    </div>
  );
};
