import React from 'react';
import { AbsoluteFill, Video, Img, useCurrentFrame, useVideoConfig, interpolate } from 'remotion';
import { ColorGradePreset } from '../core/types';

interface RealFootageSceneProps {
  videoSrc?: string;
  imageSrc?: string;
  overlayType: 'darken' | 'color' | 'gradient' | 'vignette';
  overlayColor?: string;
  overlayOpacity?: number;
  kenBurns?: {
    fromScale: number;
    toScale: number;
    fromX: number;
    toX: number;
    fromY: number;
    toY: number;
  };
  colorGrade?: ColorGradePreset | 'none';
  startFrame?: number;
  duration: number;
  children?: React.ReactNode;
}

const COLOR_GRADES: Record<string, string> = {
  cinematic_teal_orange:
    'contrast(1.08) saturate(0.88) brightness(0.96) hue-rotate(-5deg)',
  corporate_clean:
    'contrast(1.08) saturate(0.92) brightness(1.03)',
  warm_film:
    'contrast(1.05) saturate(1.1) brightness(1.02) sepia(0.08)',
  cold_tech:
    'contrast(1.1) saturate(0.8) brightness(1.0) hue-rotate(8deg)',
  high_contrast:
    'contrast(1.25) saturate(0.8) brightness(0.95)',
  vintage:
    'contrast(0.95) saturate(0.7) sepia(0.15)',
  neutral:
    'contrast(1.05) saturate(0.95) brightness(1.02)',
};

export const RealFootageScene: React.FC<RealFootageSceneProps> = ({
  videoSrc,
  imageSrc,
  overlayType = 'darken',
  overlayColor = '#000000',
  overlayOpacity = 0.5,
  kenBurns,
  colorGrade = 'cinematic_teal_orange',
  duration,
  children,
}) => {
  const frame = useCurrentFrame();

  const kbScale = kenBurns
    ? interpolate(frame, [0, duration], [kenBurns.fromScale, kenBurns.toScale])
    : 1;
  const kbX = kenBurns
    ? interpolate(frame, [0, duration], [kenBurns.fromX, kenBurns.toX])
    : 0;
  const kbY = kenBurns
    ? interpolate(frame, [0, duration], [kenBurns.fromY, kenBurns.toY])
    : 0;

  const renderOverlay = () => {
    switch (overlayType) {
      case 'darken':
        return (
          <AbsoluteFill
            style={{ backgroundColor: overlayColor, opacity: overlayOpacity }}
          />
        );
      case 'gradient':
        return (
          <AbsoluteFill
            style={{
              background: `linear-gradient(135deg, ${overlayColor}CC 0%, ${overlayColor}80 50%, transparent 100%)`,
            }}
          />
        );
      case 'vignette':
        return (
          <AbsoluteFill
            style={{
              background: `radial-gradient(ellipse at center, transparent 40%, ${overlayColor}99 100%)`,
            }}
          />
        );
      case 'color':
        return (
          <AbsoluteFill
            style={{
              backgroundColor: overlayColor,
              opacity: overlayOpacity,
              mixBlendMode: 'color',
            }}
          />
        );
    }
  };

  const filterStr =
    colorGrade !== 'none' ? COLOR_GRADES[colorGrade] || 'none' : 'none';

  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          inset: -50,
          transform: `scale(${kbScale}) translate(${kbX}px, ${kbY}px)`,
          filter: filterStr,
        }}
      >
        {videoSrc ? (
          <Video
            src={videoSrc}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            volume={0}
            startFrom={0}
          />
        ) : imageSrc ? (
          <Img
            src={imageSrc}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : null}
      </div>

      {renderOverlay()}

      <AbsoluteFill>
        <svg width="100%" height="100%">
          <defs>
            <radialGradient id="vig" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.4)" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#vig)" />
        </svg>
      </AbsoluteFill>

      <AbsoluteFill>{children}</AbsoluteFill>
    </AbsoluteFill>
  );
};
