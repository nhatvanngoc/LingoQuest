import React from 'react';
import { useCoordinateSystem } from './CoordinateContext';

export interface TimelineAxisProps {
  tickStep?: number;
  tickFormat?: (val: number) => string;
  axisColor?: string;
  axisWidth?: number;
  tickHeight?: number;
  showArrow?: boolean;
  pastLabel?: string;
  futureLabel?: string;
  style?: React.CSSProperties;
}

export const TimelineAxis: React.FC<TimelineAxisProps> = ({
  tickStep = 1,
  tickFormat = (v) => `${Math.round(v)}`,
  axisColor = '#38BDF8',
  axisWidth = 4,
  tickHeight = 12,
  showArrow = true,
  pastLabel = 'PAST (Quá khứ)',
  futureLabel = 'FUTURE',
  style,
}) => {
  const { xDomain, width, height, c2p } = useCoordinateSystem();
  const [xMin, xMax] = xDomain;

  const startPt = c2p(xMin, 0);
  const endPt = c2p(xMax, 0);

  // Generate ticks
  const ticks: number[] = [];
  const firstTick = Math.ceil(xMin / tickStep) * tickStep;
  for (let t = firstTick; t <= xMax; t += tickStep) {
    ticks.push(t);
  }

  const arrowId = `axis-arrow-${axisColor.replace('#', '')}`;

  return (
    <svg
      width={width}
      height={height}
      style={{ position: 'absolute', top: 0, left: 0, overflow: 'visible', pointerEvents: 'none', ...style }}
    >
      <defs>
        <marker
          id={arrowId}
          viewBox="0 0 10 10"
          refX="6"
          refY="5"
          markerWidth="8"
          markerHeight="8"
          orient="auto-start-reverse"
        >
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill={axisColor} />
        </marker>
      </defs>

      {/* Main Axis Line */}
      <line
        x1={startPt.px}
        y1={startPt.py}
        x2={endPt.px}
        y2={endPt.py}
        stroke={axisColor}
        strokeWidth={axisWidth}
        strokeLinecap="round"
        markerEnd={showArrow ? `url(#${arrowId})` : undefined}
      />

      {/* Ticks and Year Numbers */}
      {ticks.map((t) => {
        const pt = c2p(t, 0);
        return (
          <g key={t}>
            <line
              x1={pt.px}
              y1={pt.py - tickHeight / 2}
              x2={pt.px}
              y2={pt.py + tickHeight / 2}
              stroke={axisColor}
              strokeWidth={2.5}
              opacity={0.7}
            />
            <text
              x={pt.px}
              y={pt.py + 28}
              textAnchor="middle"
              fill="#94A3B8"
              fontSize={16}
              fontWeight={700}
              fontFamily="'Segoe UI', system-ui, sans-serif"
            >
              {tickFormat(t)}
            </text>
          </g>
        );
      })}

      {/* Past & Future Labels */}
      {pastLabel && (
        <text
          x={startPt.px}
          y={startPt.py + 62}
          textAnchor="start"
          fill="#64748B"
          fontSize={15}
          fontWeight={800}
          fontFamily="'Segoe UI', system-ui, sans-serif"
          letterSpacing="1"
        >
          {pastLabel}
        </text>
      )}

      {futureLabel && (
        <text
          x={endPt.px - 10}
          y={endPt.py + 62}
          textAnchor="end"
          fill="#475569"
          fontSize={15}
          fontWeight={800}
          fontFamily="'Segoe UI', system-ui, sans-serif"
          letterSpacing="1"
        >
          {futureLabel}
        </text>
      )}
    </svg>
  );
};
