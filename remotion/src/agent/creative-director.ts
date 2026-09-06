import { Storyboard, StoryboardScene, SceneAssetRequirement, ColorGradePreset } from '../core/types';

const CREATIVE_DIRECTOR_SYSTEM = `You are a Creative Director at a top motion graphics studio.
You've worked with Apple, Nike, Spotify, Stripe.

When given a brief, think in 5 layers:

LAYER 1: EMOTIONAL JOURNEY
Map emotions over time:
- 0:00-0:05: CURIOSITY (hook)
- 0:05-0:15: RECOGNITION (problem)
- 0:15-0:30: RELIEF (solution)
- 0:30-1:00: DESIRE (want it)
- 1:00-1:20: TRUST (believe it)
- 1:20-1:30: ACTION (do it)

LAYER 2: VISUAL LANGUAGE
Choose 1 metaphor: Light, Speed, Map/Scale, Water, Architecture, Organic.
Apply consistently.

LAYER 3: PACING SCORE
Slow -> Build -> PEAK -> Slow -> Build -> PEAK -> resolve
Never 3 slow or 3 fast in a row.

LAYER 4: CAMERA LANGUAGE
WIDE (establish), MEDIUM (explain), CLOSE-UP (emphasize), POV (demo), AERIAL (overview).

LAYER 5: ASSET DIRECTION
For each scene specify: footage type, Pexels keywords, overlay method, SFX needed.

Output MUST be valid JSON matching the Storyboard interface.`;

export function buildCreativeDirectorPrompt(userPrompt: string): string {
  return `${CREATIVE_DIRECTOR_SYSTEM}

USER BRIEF: "${userPrompt}"

Generate a complete storyboard as JSON:
{
  "title": "string",
  "totalFrames": number,
  "fps": 30,
  "resolution": { "width": 1920, "height": 1080 },
  "visualMetaphor": "string",
  "colorGrade": "cinematic_teal_orange" | "corporate_clean" | "warm_film" | "cold_tech" | "high_contrast" | "vintage" | "neutral",
  "scenes": [
    {
      "id": "scene-1",
      "title": "string",
      "durationFrames": number,
      "startFrame": number,
      "emotion": "string",
      "camera": "wide" | "medium" | "closeup" | "pov" | "aerial",
      "visualMetaphor": "string",
      "bgmEnergy": "low" | "medium" | "high",
      "elements": [
        {
          "type": "text" | "image" | "video" | "chart" | "icon" | "logo",
          "content": "string",
          "enterFrame": number,
          "exitFrame": number,
          "animationType": "string",
          "emphasis": "low" | "medium" | "high",
          "position": { "x": number, "y": number, "width": number, "height": number }
        }
      ],
      "assetRequirements": {
        "sceneId": "string",
        "needsVideo": boolean,
        "needsImage": boolean,
        "videoKeywords": ["string"],
        "imageKeywords": ["string"],
        "mood": "string"
      }
    }
  ]
}

Rules:
- 6-10 scenes for a 60-90 second video
- Each scene 150-300 frames (5-10 seconds at 30fps)
- Total frames should be 1800-2700
- Alternate pacing: never 3 slow scenes or 3 fast scenes in a row
- Include at least 1 chart/data scene and 1 close-up emphasis scene
- All asset requirements must have real Pexels search keywords
- Output ONLY valid JSON, no markdown`;
}

export function parseStoryboardFromLLM(jsonStr: string): Storyboard | null {
  try {
    const cleaned = jsonStr.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const match = cleaned.match(/\{[\s\S]*\}/);
    if (!match) return null;
    const parsed = JSON.parse(match[0]);
    if (parsed.scenes && parsed.totalFrames) return parsed as Storyboard;
    return null;
  } catch {
    return null;
  }
}

export function createDemoStoryboard(): Storyboard {
  return {
    title: 'Demo Product Launch',
    totalFrames: 2100,
    fps: 30,
    resolution: { width: 1920, height: 1080 },
    visualMetaphor: 'Light',
    colorGrade: 'cinematic_teal_orange',
    scenes: [
      {
        id: 'scene-1',
        title: 'Hook',
        durationFrames: 180,
        startFrame: 0,
        emotion: 'CURIOSITY',
        camera: 'closeup',
        visualMetaphor: 'Light beam in darkness',
        bgmEnergy: 'low',
        elements: [
          {
            type: 'text',
            content: 'Something is coming',
            enterFrame: 30,
            exitFrame: 150,
            animationType: 'title-appear',
            emphasis: 'high',
            position: { x: 200, y: 400, width: 1520, height: 200 },
          },
        ],
        assetRequirements: {
          sceneId: 'scene-1',
          needsVideo: true,
          needsImage: false,
          videoKeywords: ['abstract light', 'dark background', 'particles'],
          imageKeywords: [],
          mood: 'mysterious',
        },
      },
      {
        id: 'scene-2',
        title: 'Problem',
        durationFrames: 300,
        startFrame: 180,
        emotion: 'RECOGNITION',
        camera: 'medium',
        visualMetaphor: 'Overwhelming data',
        bgmEnergy: 'medium',
        elements: [
          {
            type: 'text',
            content: 'Your workflow is broken',
            enterFrame: 30,
            exitFrame: 240,
            animationType: 'title-appear',
            emphasis: 'high',
            position: { x: 200, y: 350, width: 1520, height: 200 },
          },
          {
            type: 'text',
            content: 'Too many tools. Too much friction.',
            enterFrame: 90,
            exitFrame: 240,
            animationType: 'card-entrance',
            emphasis: 'medium',
            position: { x: 200, y: 550, width: 1520, height: 100 },
          },
        ],
        assetRequirements: {
          sceneId: 'scene-2',
          needsVideo: true,
          needsImage: false,
          videoKeywords: ['busy office', 'frustrated person', 'computer screens'],
          imageKeywords: [],
          mood: 'frustrated',
        },
      },
      {
        id: 'scene-3',
        title: 'Solution Reveal',
        durationFrames: 300,
        startFrame: 480,
        emotion: 'RELIEF',
        camera: 'wide',
        visualMetaphor: 'Light breaking through',
        bgmEnergy: 'medium',
        elements: [
          {
            type: 'logo',
            content: 'Product Logo',
            enterFrame: 0,
            exitFrame: 270,
            animationType: 'logo-reveal',
            emphasis: 'high',
            position: { x: 760, y: 200, width: 400, height: 400 },
          },
          {
            type: 'text',
            content: 'Meet the future',
            enterFrame: 60,
            exitFrame: 270,
            animationType: 'title-appear',
            emphasis: 'high',
            position: { x: 200, y: 650, width: 1520, height: 150 },
          },
        ],
        assetRequirements: {
          sceneId: 'scene-3',
          needsVideo: true,
          needsImage: true,
          videoKeywords: ['sunrise', 'light rays', 'hope'],
          imageKeywords: ['product mockup', 'clean design'],
          mood: 'hopeful',
        },
      },
      {
        id: 'scene-4',
        title: 'Feature 1',
        durationFrames: 300,
        startFrame: 780,
        emotion: 'DESIRE',
        camera: 'pov',
        visualMetaphor: 'Speed and efficiency',
        bgmEnergy: 'high',
        elements: [
          {
            type: 'text',
            content: '10x faster workflow',
            enterFrame: 30,
            exitFrame: 240,
            animationType: 'counter-up',
            emphasis: 'high',
            position: { x: 200, y: 300, width: 1520, height: 200 },
          },
          {
            type: 'chart',
            content: 'Performance comparison',
            enterFrame: 90,
            exitFrame: 240,
            animationType: 'chart-draw',
            emphasis: 'medium',
            position: { x: 400, y: 550, width: 1120, height: 400 },
          },
        ],
        assetRequirements: {
          sceneId: 'scene-4',
          needsVideo: false,
          needsImage: true,
          videoKeywords: [],
          imageKeywords: ['technology dashboard', 'analytics', 'speed'],
          mood: 'energetic',
        },
      },
      {
        id: 'scene-5',
        title: 'Social Proof',
        durationFrames: 300,
        startFrame: 1080,
        emotion: 'TRUST',
        camera: 'medium',
        visualMetaphor: 'Connection and community',
        bgmEnergy: 'medium',
        elements: [
          {
            type: 'text',
            content: '"Best tool we have ever used"',
            enterFrame: 30,
            exitFrame: 240,
            animationType: 'title-appear',
            emphasis: 'high',
            position: { x: 300, y: 350, width: 1320, height: 200 },
          },
          {
            type: 'text',
            content: '- CEO, TechCorp',
            enterFrame: 90,
            exitFrame: 240,
            animationType: 'card-entrance',
            emphasis: 'low',
            position: { x: 300, y: 550, width: 1320, height: 100 },
          },
        ],
        assetRequirements: {
          sceneId: 'scene-5',
          needsVideo: true,
          needsImage: false,
          videoKeywords: ['team collaboration', 'happy people', 'office celebration'],
          imageKeywords: [],
          mood: 'trustworthy',
        },
      },
      {
        id: 'scene-6',
        title: 'CTA',
        durationFrames: 240,
        startFrame: 1380,
        emotion: 'ACTION',
        camera: 'closeup',
        visualMetaphor: 'Light converging',
        bgmEnergy: 'high',
        elements: [
          {
            type: 'text',
            content: 'Start free today',
            enterFrame: 30,
            exitFrame: 210,
            animationType: 'title-appear',
            emphasis: 'high',
            position: { x: 200, y: 350, width: 1520, height: 200 },
          },
          {
            type: 'text',
            content: 'No credit card required',
            enterFrame: 60,
            exitFrame: 210,
            animationType: 'card-entrance',
            emphasis: 'medium',
            position: { x: 200, y: 550, width: 1520, height: 100 },
          },
        ],
        assetRequirements: {
          sceneId: 'scene-6',
          needsVideo: false,
          needsImage: false,
          videoKeywords: [],
          imageKeywords: [],
          mood: 'action',
        },
      },
    ],
  };
}
