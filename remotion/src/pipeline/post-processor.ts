import { exec } from 'child_process';
import { promisify } from 'util';
import { PostProcessConfig, AudioMixConfig, ColorGradePreset } from '../core/types';

const execAsync = promisify(exec);

const GRADE_FILTERS: Record<ColorGradePreset, string> = {
  neutral: 'eq=contrast=1.05:brightness=0.02:saturation=0.95,unsharp=3:3:0.5',
  cinematic_teal_orange:
    'colorchannelmixer=rr=1.0:rg=0.1:rb=0.0:gr=0.0:gg=0.9:gb=0.1:br=0.0:bg=0.2:bb=0.8,curves=r=\'0/0 0.3/0.25 0.7/0.72 1/1\':g=\'0/0 0.5/0.48 1/0.95\':b=\'0/0.04 0.4/0.38 1/0.85\',eq=contrast=1.1:brightness=-0.02:saturation=0.85,vignette=PI/4',
  corporate_clean:
    'eq=contrast=1.08:brightness=0.03:saturation=0.92:gamma=0.98,unsharp=5:5:0.8:5:5:0.0,colorbalance=rs=0.05:gs=0.0:bs=-0.05',
  warm_film:
    'curves=r=\'0/0.05 0.5/0.55 1/0.97\':b=\'0/0 0.5/0.45 1/0.88\',eq=contrast=1.05:saturation=1.1:brightness=0.02,noise=alls=8:allf=t+u',
  cold_tech:
    'curves=r=\'0/0 0.5/0.48 1/0.95\':b=\'0/0.03 0.5/0.53 1/1\',eq=contrast=1.12:saturation=0.82:brightness=0.0,unsharp=3:3:1.0',
  high_contrast:
    'eq=contrast=1.25:brightness=-0.05:saturation=0.8:gamma=0.9,curves=all=\'0/0 0.5/0.5 0.8/0.85 1/1\'',
  vintage:
    'curves=r=\'0/0.07 1/0.9\':g=\'0/0.03 1/0.88\':b=\'0/0 1/0.75\',eq=saturation=0.7:contrast=0.95,noise=alls=15:allf=t+u,vignette=PI/3.5',
};

export class PostProcessor {
  async applyColorGrade(config: PostProcessConfig): Promise<string> {
    const filter = GRADE_FILTERS[config.colorGrade] || GRADE_FILTERS.neutral;
    const gradedPath = config.inputPath.replace('.mp4', '-graded.mp4');

    await execAsync(
      `ffmpeg -i "${config.inputPath}" -vf "${filter}" -c:v libx264 -preset slow -crf 18 -c:a copy -y "${gradedPath}"`
    );

    return gradedPath;
  }

  async mixAudio(
    videoPath: string,
    config: AudioMixConfig,
    outputPath: string,
    totalFrames: number
  ): Promise<void> {
    const totalSeconds = totalFrames / 30;
    const fadeOutStart = totalSeconds - config.fadeOutFrames / 30;

    if (!config.bgmPath) {
      await execAsync(
        `ffmpeg -i "${videoPath}" -af "loudnorm=I=-16:LRA=11:TP=-1.5" -c:v copy -y "${outputPath}"`
      );
      return;
    }

    await execAsync(
      `ffmpeg -i "${videoPath}" -stream_loop -1 -i "${config.bgmPath}" ` +
        `-filter_complex "[0:a]volume=${config.sfxVolume}[sfx];` +
        `[1:a]volume=${config.bgmVolume},` +
        `afade=t=in:st=0:d=${config.fadeInFrames / 30},` +
        `afade=t=out:st=${fadeOutStart}:d=${config.fadeOutFrames / 30},` +
        `atrim=0:${totalSeconds}[bgm];` +
        `[sfx][bgm]amix=inputs=2:duration=first,loudnorm=I=-16:LRA=11:TP=-1.5[audio]" ` +
        `-map 0:v -map "[audio]" -c:v copy -c:a aac -b:a 192k -shortest -y "${outputPath}"`
    );
  }

  async addFilmGrain(
    inputPath: string,
    outputPath: string,
    intensity: number = 8
  ): Promise<void> {
    await execAsync(
      `ffmpeg -i "${inputPath}" -vf "noise=alls=${intensity}:allf=t+u" -c:v libx264 -preset slow -crf 18 -c:a copy -y "${outputPath}"`
    );
  }

  async sharpen(
    inputPath: string,
    outputPath: string,
    amount: number = 0.5
  ): Promise<void> {
    await execAsync(
      `ffmpeg -i "${inputPath}" -vf "unsharp=5:5:${amount}:5:5:0.0" -c:v libx264 -preset slow -crf 17 -c:a copy -y "${outputPath}"`
    );
  }

  async process(config: PostProcessConfig): Promise<string> {
    let currentPath = config.inputPath;

    // Color grade
    currentPath = await this.applyColorGrade({ ...config, inputPath: currentPath });

    // Sharpen
    if (config.sharpening) {
      const sharpenedPath = currentPath.replace('.mp4', '-sharp.mp4');
      await this.sharpen(currentPath, sharpenedPath, 0.4);
      currentPath = sharpenedPath;
    }

    // Film grain
    if (config.grain) {
      const grainPath = currentPath.replace('.mp4', '-grain.mp4');
      await this.addFilmGrain(currentPath, grainPath, 6);
      currentPath = grainPath;
    }

    // Audio mix
    await this.mixAudio(currentPath, config.audioMix, config.outputPath, 1800);

    return config.outputPath;
  }
}
