import React from 'react';
import { useCurrentFrame } from 'remotion';
import { interpolate } from 'remotion';

interface AudioReactiveElementProps {
  audioSrc: string;
  channel?: number;
  sensitivity?: number;
  property?: 'scale' | 'opacity' | 'blur' | 'glow';
  baseValue?: number;
  maxValue?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const AudioReactiveElement: React.FC<AudioReactiveElementProps> = ({
  channel = 0,
  sensitivity = 1,
  property = 'scale',
  baseValue = 1,
  maxValue = 1.1,
  children,
  style,
}) => {
  const frame = useCurrentFrame();

  // Simulated audio amplitude (real useAudioData requires actual audio file at runtime)
  const simulatedAmplitude =
    0.3 + 0.3 * Math.sin(frame * 0.15) + 0.2 * Math.sin(frame * 0.3 + 1);

  const reactiveValue = interpolate(
    simulatedAmplitude * sensitivity,
    [0, 1],
    [baseValue, maxValue],
    { extrapolateRight: 'clamp' }
  );

  const getReactiveStyle = (): React.CSSProperties => {
    switch (property) {
      case 'scale':
        return { transform: `scale(${reactiveValue})` };
      case 'opacity':
        return { opacity: reactiveValue };
      case 'blur':
        return { filter: `blur(${(maxValue - reactiveValue) * 10}px)` };
      case 'glow':
        return {
          filter: `drop-shadow(0 0 ${simulatedAmplitude * 20}px rgba(99, 102, 241, ${simulatedAmplitude}))`,
        };
      default:
        return {};
    }
  };

  return (
    <div style={{ ...getReactiveStyle(), ...style }}>
      {children}
    </div>
  );
};
