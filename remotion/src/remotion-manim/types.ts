import React from 'react';

export type Point2D = [number, number];

export interface CoordinateConfig {
  xDomain: [number, number];
  yDomain?: [number, number];
  width: number;
  height: number;
  padding?: {
    left: number;
    right: number;
    top: number;
    bottom: number;
  };
}

export interface CoordinateContextType {
  xDomain: [number, number];
  yDomain: [number, number];
  width: number;
  height: number;
  c2p: (x: number, y?: number) => { px: number; py: number };
  p2c: (px: number, py: number) => { x: number; y: number };
  unitX: number;
  unitY: number;
  originY: number;
}
