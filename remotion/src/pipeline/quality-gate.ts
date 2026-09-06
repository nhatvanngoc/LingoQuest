import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';
import { QualityScore, QualityIssue } from '../core/types';

const execAsync = promisify(exec);

// Use Groq vision (same as research/vision_client.py)
async function callVisionAPI(
  imageBase64: string,
  prompt: string,
  apiKey: string
): Promise<string> {
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'qwen/qwen3.6-27b',
      messages: [
        { role: 'system', content: prompt },
        {
          role: 'user',
          content: [
            { type: 'image_url', image_url: { url: `data:image/jpeg;base64,${imageBase64}` } },
            { type: 'text', text: 'Analyze this video frame.' },
          ],
        },
      ],
      max_tokens: 2000,
    }),
  });

  const data = await response.json();
  return data.choices?.[0]?.message?.content || '';
}

export class QualityGate {
  private apiKey: string;
  private threshold: number;

  constructor(apiKey: string, threshold = 7.0) {
    this.apiKey = apiKey;
    this.threshold = threshold;
  }

  async extractKeyFrames(
    videoPath: string,
    outputDir: string,
    count: number = 12
  ): Promise<string[]> {
    await fs.mkdir(outputDir, { recursive: true });

    const { stdout } = await execAsync(
      `ffprobe -v quiet -print_format json -show_streams "${videoPath}"`
    );
    const info = JSON.parse(stdout);
    const stream = info.streams.find((s: any) => s.codec_type === 'video');
    const duration = parseFloat(stream.duration);

    const framePaths: string[] = [];
    for (let i = 0; i < count; i++) {
      const time = (duration / count) * i + duration / count / 2;
      const framePath = path.join(outputDir, `frame-${i.toString().padStart(3, '0')}.jpg`);
      await execAsync(
        `ffmpeg -ss ${time} -i "${videoPath}" -vframes 1 -q:v 2 -y "${framePath}"`
      );
      framePaths.push(framePath);
    }

    return framePaths;
  }

  async reviewFrames(framePaths: string[], projectBrief: string): Promise<QualityScore> {
    const frameImages = await Promise.all(
      framePaths.map(async (p) => {
        const data = await fs.readFile(p);
        return data.toString('base64');
      })
    );

    const REVIEW_PROMPT = `You are a Senior Motion Graphics Director reviewing a video.
Analyze these frames from a motion graphics video and score it.

Score each dimension 0-10:
- visualHierarchy: Is there clear primary/secondary/tertiary elements?
- motionQuality: Do animations look smooth and intentional?
- colorConsistency: Is the color palette consistent and professional?
- typographyQuality: Is text readable, properly sized, well-spaced?
- pacing: Does the video breathe well? Not too fast/slow?

Critical issues that fail the gate:
- Text smaller than readable at 1920x1080
- More than 3 font sizes in one scene
- Colors not from the defined palette
- Text and background insufficient contrast
- Scene with no background motion (dead/static)

Return valid JSON only:
{
  "overall": 8.2,
  "visualHierarchy": 8,
  "motionQuality": 7,
  "colorConsistency": 9,
  "typographyQuality": 8,
  "pacing": 8,
  "issues": [
    {
      "severity": "warning",
      "scene": "Scene 3",
      "frame": 45,
      "issue": "Description",
      "fix": "Suggested fix"
    }
  ],
  "passesGate": true,
  "summary": "Brief summary."
}`;

    const text = await callVisionAPI(
      frameImages[0],
      `${REVIEW_PROMPT}\n\nProject brief: ${projectBrief}\n\nReview these ${framePaths.length} frames.`,
      this.apiKey
    );

    try {
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (!jsonMatch) throw new Error('No JSON found');
      const result = JSON.parse(jsonMatch[0]);
      return {
        ...result,
        passesGate: result.overall >= this.threshold,
      };
    } catch {
      return {
        overall: 5,
        visualHierarchy: 5,
        motionQuality: 5,
        colorConsistency: 5,
        typographyQuality: 5,
        pacing: 5,
        issues: [],
        passesGate: false,
      };
    }
  }

  async technicalCheck(videoPath: string) {
    const { stdout } = await execAsync(
      `ffprobe -v quiet -print_format json -show_streams -show_format "${videoPath}"`
    );

    const info = JSON.parse(stdout);
    const video = info.streams.find((s: any) => s.codec_type === 'video');
    const audio = info.streams.find((s: any) => s.codec_type === 'audio');

    const resolution = `${video.width}x${video.height}`;
    const fps = eval(video.r_frame_rate);
    const bitrate = parseInt(info.format.bit_rate) / 1000;
    const duration = parseFloat(info.format.duration);

    const issues: string[] = [];
    if (video.width < 1920) issues.push(`Resolution too low: ${resolution}`);
    if (fps < 29) issues.push(`FPS too low: ${fps}`);
    if (bitrate < 8000) issues.push(`Bitrate too low: ${bitrate}kbps`);
    if (!audio) issues.push('No audio track');

    return { resolution, fps, bitrate, duration, hasAudio: !!audio, passes: issues.length === 0, issues };
  }

  async runGate(videoPath: string, projectBrief: string, framesDir: string) {
    const frames = await this.extractKeyFrames(videoPath, framesDir, 12);

    const [score, technical] = await Promise.all([
      this.reviewFrames(frames, projectBrief),
      this.technicalCheck(videoPath),
    ]);

    const passes = score.passesGate && technical.passes;

    const recommendation = passes
      ? 'Video passes quality gate. Ready for delivery.'
      : `Issues found:\n${[
          ...score.issues.filter((i) => i.severity === 'critical').map((i) => `  - ${i.issue} -> ${i.fix}`),
          ...technical.issues.map((i) => `  - ${i}`),
        ].join('\n')}`;

    return { passes, score, technical, recommendation };
  }
}
