export interface AssetSearchQuery {
  keywords: string[];
  type: 'video' | 'image';
  orientation: 'landscape' | 'portrait' | 'square';
  mood: string;
  colorHint?: string;
}

export interface Asset {
  id: string;
  src: string;
  remoteSrc: string;
  type: 'video' | 'image';
  duration?: number;
  width: number;
  height: number;
  tags: string[];
  score: number;
  license: 'free' | 'cc0' | 'commercial';
}

export interface SceneAssetRequirement {
  sceneId: string;
  needsVideo: boolean;
  needsImage: boolean;
  videoKeywords: string[];
  imageKeywords: string[];
  mood: string;
}

export interface ProjectAssets {
  videos: Record<string, Asset>;
  images: Record<string, Asset>;
  audio: Record<string, Asset>;
}

export interface SoundAsset {
  type: 'bgm' | 'sfx' | 'transition' | 'ambient';
  src: string;
  duration: number;
  bpm?: number;
  key?: string;
  mood: string;
  energy: 'low' | 'medium' | 'high';
}

export interface AudioCue {
  frame: number;
  sfxKey: string;
  volume: number;
  fadeIn: number;
  fadeOut: number;
}

export interface StoryboardScene {
  id: string;
  title: string;
  durationFrames: number;
  startFrame: number;
  emotion: string;
  camera: 'wide' | 'medium' | 'closeup' | 'pov' | 'aerial';
  visualMetaphor: string;
  bgmEnergy: 'low' | 'medium' | 'high';
  elements: StoryboardElement[];
  assetRequirements: SceneAssetRequirement;
}

export interface StoryboardElement {
  type: 'text' | 'image' | 'video' | 'chart' | 'icon' | 'logo';
  content: string;
  enterFrame: number;
  exitFrame: number;
  animationType: string;
  emphasis: 'low' | 'medium' | 'high';
  position: { x: number; y: number; width: number; height: number };
}

export interface Storyboard {
  title: string;
  totalFrames: number;
  fps: number;
  resolution: { width: number; height: number };
  visualMetaphor: string;
  colorGrade: ColorGradePreset;
  scenes: StoryboardScene[];
}

export type ColorGradePreset =
  | 'neutral'
  | 'cinematic_teal_orange'
  | 'corporate_clean'
  | 'warm_film'
  | 'cold_tech'
  | 'vintage'
  | 'high_contrast';

export interface PostProcessConfig {
  inputPath: string;
  outputPath: string;
  colorGrade: ColorGradePreset;
  audioMix: AudioMixConfig;
  sharpening: boolean;
  grain: boolean;
  letterbox: boolean;
  targetLoudness: number;
}

export interface AudioMixConfig {
  bgmPath?: string;
  bgmVolume: number;
  sfxVolume: number;
  masterVolume: number;
  fadeInFrames: number;
  fadeOutFrames: number;
}

export interface QualityScore {
  overall: number;
  visualHierarchy: number;
  motionQuality: number;
  colorConsistency: number;
  typographyQuality: number;
  pacing: number;
  issues: QualityIssue[];
  passesGate: boolean;
}

export interface QualityIssue {
  severity: 'critical' | 'warning' | 'suggestion';
  scene: string;
  frame: number;
  issue: string;
  fix: string;
}

export interface PipelineConfig {
  pexelsKey: string;
  groqKey: string;
  outputDir: string;
  assetsDir: string;
}

export interface PipelineResult {
  videoPath: string;
  score: number;
  productionLog: string[];
  storyboard: Storyboard;
}
