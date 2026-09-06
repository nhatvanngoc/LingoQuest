import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate } from 'remotion';
import { StoryboardScene } from '../core/types';

interface SceneTransitionProps {
  type: 'wipe' | 'fade' | 'zoom' | 'slide' | 'glitch';
  durationFrames: number;
  children: React.ReactNode;
}

export const SceneTransition: React.FC<SceneTransitionProps> = ({
  type,
  durationFrames,
  children,
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [0, durationFrames], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const getClipPath = (): string => {
    switch (type) {
      case 'wipe':
        return `inset(0 ${(1 - progress) * 100}% 0 0)`;
      case 'fade':
        return 'none';
      case 'zoom':
        return 'none';
      case 'slide':
        return 'none';
      case 'glitch':
        return progress > 0.5 ? 'none' : `inset(0 0 ${progress * 100}% 0)`;
      default:
        return 'none';
    }
  };

  const getTransform = (): string => {
    switch (type) {
      case 'zoom':
        return `scale(${0.8 + progress * 0.2})`;
      case 'slide':
        return `translateX(${(1 - progress) * 100}%)`;
      default:
        return 'none';
    }
  };

  const getOpacity = (): number => {
    if (type === 'fade') return progress;
    return 1;
  };

  return (
    <AbsoluteFill
      style={{
        clipPath: getClipPath(),
        transform: getTransform(),
        opacity: getOpacity(),
      }}
    >
      {children}
    </AbsoluteFill>
  );
};

interface KenBurnsImageProps {
  src: string;
  fromScale?: number;
  toScale?: number;
  fromX?: number;
  toX?: number;
  fromY?: number;
  toY?: number;
  duration: number;
  style?: React.CSSProperties;
}

export const KenBurnsImage: React.FC<KenBurnsImageProps> = ({
  src,
  fromScale = 1.0,
  toScale = 1.15,
  fromX = 0,
  toX = -20,
  fromY = 0,
  toY = -10,
  duration,
  style,
}) => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, duration], [fromScale, toScale]);
  const x = interpolate(frame, [0, duration], [fromX, toX]);
  const y = interpolate(frame, [0, duration], [fromY, toY]);

  return (
    <div
      style={{
        position: 'absolute',
        inset: -50,
        overflow: 'hidden',
        ...style,
      }}
    >
      <img
        src={src}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: `scale(${scale}) translate(${x}px, ${y}px)`,
        }}
      />
    </div>
  );
};

interface ParticleFieldProps {
  count?: number;
  color?: string;
  speed?: number;
  style?: React.CSSProperties;
}

export const ParticleField: React.FC<ParticleFieldProps> = ({
  count = 50,
  color = 'rgba(99, 102, 241, 0.6)',
  speed = 1,
  style,
}) => {
  const frame = useCurrentFrame();

  const particles = Array.from({ length: count }, (_, i) => {
    const seed = i * 137.508;
    const x = (Math.sin(seed) * 0.5 + 0.5) * 100;
    const baseY = (Math.cos(seed * 0.7) * 0.5 + 0.5) * 100;
    const y = (baseY + frame * speed * (0.1 + (i % 5) * 0.05)) % 120 - 10;
    const size = 2 + (i % 4) * 1.5;
    const opacity = 0.2 + 0.3 * Math.sin(frame * 0.05 + i);

    return (
      <div
        key={i}
        style={{
          position: 'absolute',
          left: `${x}%`,
          top: `${y}%`,
          width: size,
          height: size,
          borderRadius: '50%',
          backgroundColor: color,
          opacity,
        }}
      />
    );
  });

  return (
    <AbsoluteFill style={{ pointerEvents: 'none', ...style }}>
      {particles}
    </AbsoluteFill>
  );
};
