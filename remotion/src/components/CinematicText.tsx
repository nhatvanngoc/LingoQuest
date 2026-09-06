import React from 'react';
import { useCurrentFrame } from 'remotion';

interface CinematicTextProps {
  text: string;
  preset:
    | 'aerial-drop'
    | 'depth-push'
    | 'ink-reveal'
    | 'light-sweep'
    | 'fragment-assemble'
    | 'pressure-reveal'
    | 'slice-in';
  startFrame: number;
  fontSize: number;
  fontWeight?: number;
  color?: string;
  letterSpacing?: string;
  style?: React.CSSProperties;
}

const easeOutExpo = (t: number): number =>
  t >= 1 ? 1 : 1 - Math.pow(2, -10 * t);

const easeOutQuart = (t: number): number =>
  t >= 1 ? 1 : 1 - Math.pow(1 - t, 4);

const easeOutBack = (t: number): number => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

const seededRandom = (seed: number): number => {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
};

export const CinematicText: React.FC<CinematicTextProps> = ({
  text,
  preset,
  startFrame,
  fontSize,
  fontWeight = 800,
  color = '#FFFFFF',
  letterSpacing = '-0.03em',
  style,
}) => {
  const frame = useCurrentFrame();
  const chars = text.split('');

  const getCharStyle = (index: number): React.CSSProperties => {
    const delay = startFrame + index * 3;
    const elapsed = Math.max(0, frame - delay);

    switch (preset) {
      case 'aerial-drop': {
        const progress = elapsed <= 0 ? 0 : elapsed > 30 ? 1 : easeOutExpo(elapsed / 30);
        return {
          display: 'inline-block',
          opacity: Math.min(elapsed / 10, 1),
          transform: `translateY(${(1 - progress) * -200}px) scale(${0.6 + progress * 0.4})`,
          filter: `blur(${(1 - progress) * 4}px)`,
        };
      }

      case 'depth-push': {
        const progress = elapsed <= 0 ? 0 : elapsed > 35 ? 1 : easeOutQuart(elapsed / 35);
        return {
          display: 'inline-block',
          opacity: Math.min(elapsed / 15, 1),
          transform: `translateZ(${(1 - progress) * -500}px) scale(${2 - progress})`,
          filter: `blur(${(1 - progress) * 8}px)`,
        };
      }

      case 'light-sweep': {
        const globalProgress = Math.max(0, frame - startFrame);
        const sweepX = globalProgress * 40;
        const charX = index * fontSize * 0.6;
        const revealProgress = sweepX > charX ? Math.min((sweepX - charX) / 80, 1) : 0;
        return {
          display: 'inline-block',
          opacity: easeOutQuart(revealProgress),
          filter:
            revealProgress < 1
              ? `brightness(${1 + (1 - revealProgress) * 2})`
              : 'none',
        };
      }

      case 'fragment-assemble': {
        const progress = elapsed <= 0 ? 0 : elapsed > 40 ? 1 : easeOutExpo(elapsed / 40);
        const fromX = (seededRandom(index) - 0.5) * 800;
        const fromY = (seededRandom(index + 100) - 0.5) * 400;
        const fromRot = (seededRandom(index + 200) - 0.5) * 180;
        return {
          display: 'inline-block',
          opacity: Math.min(elapsed / 15, 1),
          transform: `translate(${fromX * (1 - progress)}px, ${fromY * (1 - progress)}px) rotate(${fromRot * (1 - progress)}deg) scale(${0.5 + progress * 0.5})`,
          filter: `blur(${(1 - progress) * 3}px)`,
        };
      }

      case 'slice-in': {
        const progress = elapsed <= 0 ? 0 : elapsed > 20 ? 1 : easeOutExpo(elapsed / 20);
        return {
          display: 'inline-block',
          clipPath: `inset(${(1 - progress) * 50}% 0 ${(1 - progress) * 50}% 0)`,
          opacity: progress > 0 ? 1 : 0,
          transform: `scaleY(${0.3 + progress * 0.7})`,
        };
      }

      case 'ink-reveal': {
        const progress = elapsed <= 0 ? 0 : elapsed > 45 ? 1 : easeOutQuart(elapsed / 45);
        return {
          display: 'inline-block',
          opacity: progress,
          filter: `blur(${(1 - progress) * 6}px) brightness(${1 + (1 - progress) * 0.5})`,
          transform: `scale(${0.95 + progress * 0.05})`,
        };
      }

      case 'pressure-reveal': {
        const progress = elapsed <= 0 ? 0 : elapsed > 25 ? 1 : easeOutExpo(elapsed / 25);
        return {
          display: 'inline-block',
          opacity: progress,
          transform: `scaleY(${0.1 + progress * 0.9}) scaleX(${1 + (1 - progress) * 0.1})`,
        };
      }

      default:
        return { display: 'inline-block' };
    }
  };

  return (
    <div
      style={{
        fontSize,
        fontWeight,
        color,
        letterSpacing,
        lineHeight: 1,
        ...style,
      }}
    >
      {chars.map((char, i) => (
        <span
          key={i}
          style={{
            ...getCharStyle(i),
            ...(char === ' '
              ? { display: 'inline-block', width: fontSize * 0.3 }
              : {}),
          }}
        >
          {char !== ' ' ? char : null}
        </span>
      ))}
    </div>
  );
};
