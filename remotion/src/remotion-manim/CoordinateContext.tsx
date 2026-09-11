import React, { createContext, useContext, useMemo } from 'react';
import { CoordinateConfig, CoordinateContextType } from './types';

const CoordinateContext = createContext<CoordinateContextType | null>(null);

export const CoordinateProvider: React.FC<{
  config: CoordinateConfig;
  children: React.ReactNode;
}> = ({ config, children }) => {
  const {
    xDomain,
    yDomain = [-1, 1],
    width,
    height,
    padding = { left: 80, right: 80, top: 40, bottom: 40 },
  } = config;

  const contextValue = useMemo<CoordinateContextType>(() => {
    const usableWidth = width - padding.left - padding.right;
    const usableHeight = height - padding.top - padding.bottom;

    const xSpan = xDomain[1] - xDomain[0];
    const ySpan = yDomain[1] - yDomain[0];

    const unitX = usableWidth / (xSpan === 0 ? 1 : xSpan);
    const unitY = usableHeight / (ySpan === 0 ? 1 : ySpan);

    // c2p: transforms mathematical coordinate (x, y) into canvas pixel { px, py }
    const c2p = (x: number, y: number = 0) => {
      const px = padding.left + (x - xDomain[0]) * unitX;
      // SVG Y goes downwards, so math Y goes upwards:
      const py = padding.top + (yDomain[1] - y) * unitY;
      return { px, py };
    };

    // p2c: transforms canvas pixel { px, py } back to mathematical coordinate (x, y)
    const p2c = (px: number, py: number) => {
      const x = xDomain[0] + (px - padding.left) / unitX;
      const y = yDomain[1] - (py - padding.top) / unitY;
      return { x, y };
    };

    const originY = c2p(0, 0).py;

    return {
      xDomain,
      yDomain,
      width,
      height,
      c2p,
      p2c,
      unitX,
      unitY,
      originY,
    };
  }, [xDomain, yDomain, width, height, padding]);

  return (
    <CoordinateContext.Provider value={contextValue}>
      {children}
    </CoordinateContext.Provider>
  );
};

export const useCoordinateSystem = (): CoordinateContextType => {
  const ctx = useContext(CoordinateContext);
  if (!ctx) {
    throw new Error('useCoordinateSystem must be used within a CoordinateProvider');
  }
  return ctx;
};
