import { AssetSourcer } from './asset-sourcer';
import { SoundDesigner } from './sound-sourcer';
import { PostProcessor } from './post-processor';
import { QualityGate } from './quality-gate';
import {
  PipelineConfig,
  PipelineResult,
  Storyboard,
  PostProcessConfig,
  ColorGradePreset,
} from '../core/types';
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';

const execAsync = promisify(exec);

export class VideoProductionPipeline {
  private assetSourcer: AssetSourcer;
  private soundDesigner: SoundDesigner;
  private postProcessor: PostProcessor;
  private qualityGate: QualityGate;
  private config: PipelineConfig;

  constructor(config: PipelineConfig) {
    this.config = config;
    this.assetSourcer = new AssetSourcer(config.pexelsKey, config.assetsDir);
    this.soundDesigner = new SoundDesigner();
    this.postProcessor = new PostProcessor();
    this.qualityGate = new QualityGate(config.groqKey, 7.0);
  }

  async produce(
    storyboard: Storyboard,
    userPrompt: string
  ): Promise<PipelineResult> {
    const log: string[] = [];
    const timestamp = Date.now();
    const projectDir = path.join(this.config.outputDir, `project-${timestamp}`);
    await fs.mkdir(projectDir, { recursive: true });

    // Phase 1: Asset gathering
    log.push('Phase 1: Gathering real assets...');
    const assetReqs = storyboard.scenes.map((s) => s.assetRequirements);
    const assets = await this.assetSourcer.prepareProjectAssets(assetReqs);
    log.push(`  Videos: ${Object.keys(assets.videos).length}`);
    log.push(`  Images: ${Object.keys(assets.images).length}`);

    // Phase 2: Generate audio cues
    log.push('Phase 2: Generating audio cues...');
    const audioCues = this.soundDesigner.generateAudioCues(storyboard.scenes);
    log.push(`  Cues: ${audioCues.length}`);

    // Phase 3: Generate Remotion code
    log.push('Phase 3: Generating Remotion project...');
    const remotionDir = path.join(projectDir, 'remotion');
    await this.generateRemotionProject(storyboard, assets, remotionDir);
    log.push('  Remotion project written');

    // Phase 4: Render
    log.push('Phase 4: Rendering with Remotion...');
    const rawRenderPath = path.join(projectDir, 'raw-render.mp4');
    await this.renderVideo(remotionDir, rawRenderPath);
    log.push('  Raw render complete');

    // Phase 5: Post-processing
    log.push('Phase 5: Post-processing...');
    const processedPath = path.join(projectDir, 'processed.mp4');
    await this.postProcessor.process({
      inputPath: rawRenderPath,
      outputPath: processedPath,
      colorGrade: storyboard.colorGrade || 'cinematic_teal_orange',
      audioMix: {
        bgmVolume: 0.35,
        sfxVolume: 0.7,
        masterVolume: 1.0,
        fadeInFrames: 30,
        fadeOutFrames: 60,
      },
      sharpening: true,
      grain: true,
      letterbox: false,
      targetLoudness: -16,
    });
    log.push('  Color graded + audio mixed');

    // Phase 6: Quality gate
    log.push('Phase 6: Quality gate...');
    const gateResult = await this.qualityGate.runGate(
      processedPath,
      userPrompt,
      path.join(projectDir, 'frames')
    );
    log.push(`  Score: ${gateResult.score.overall}/10`);
    log.push(`  Passes: ${gateResult.passes}`);

    // Final deliverable
    const finalPath = path.join(projectDir, `final-${timestamp}.mp4`);
    await execAsync(`copy "${processedPath}" "${finalPath}"`);
    log.push(`Final: ${finalPath}`);

    return {
      videoPath: finalPath,
      score: gateResult.score.overall,
      productionLog: log,
      storyboard,
    };
  }

  private async generateRemotionProject(
    storyboard: Storyboard,
    assets: any,
    outputDir: string
  ): Promise<void> {
    await fs.mkdir(path.join(outputDir, 'src'), { recursive: true });
    await fs.mkdir(path.join(outputDir, 'public'), { recursive: true });

    // Copy downloaded assets to public/
    for (const [sceneId, asset] of Object.entries(assets.videos)) {
      if (asset.src) {
        const ext = path.extname(asset.src);
        await execAsync(
          `copy "${asset.src}" "${path.join(outputDir, 'public', `scene-${sceneId}${ext}`)}"`
        );
      }
    }
    for (const [sceneId, asset] of Object.entries(assets.images)) {
      if (asset.src) {
        const ext = path.extname(asset.src);
        await execAsync(
          `copy "${asset.src}" "${path.join(outputDir, 'public', `scene-${sceneId}${ext}`)}"`
        );
      }
    }

    // Write index.tsx
    const indexTsx = this.generateIndexTsx(storyboard);
    await fs.writeFile(path.join(outputDir, 'src', 'index.tsx'), indexTsx);

    // Write Main.tsx
    const mainTsx = this.generateMainTsx(storyboard);
    await fs.writeFile(path.join(outputDir, 'src', 'Main.tsx'), mainTsx);

    // Write package.json (link to parent node_modules)
    const pkgJson = {
      name: 'premiere-pipeline-project',
      version: '1.0.0',
      scripts: {
        render: `npx remotion render src/index.ts PremiereVideo output.mp4 --codec h264 --concurrency=4`,
      },
    };
    await fs.writeFile(
      path.join(outputDir, 'package.json'),
      JSON.stringify(pkgJson, null, 2)
    );
  }

  private generateIndexTsx(storyboard: Storyboard): string {
    return `import { registerRoot } from 'remotion';
import { Main } from './Main';
registerRoot(Main);
`;
  }

  private generateMainTsx(storyboard: Storyboard): string {
    const sceneComponents = storyboard.scenes
      .map(
        (scene, i) => `
        { id: 'Scene${i + 1}', component: <Scene${i + 1} />, durationInFrames: ${scene.durationFrames} }`
      )
      .join(',\n');

    const sceneImports = storyboard.scenes
      .map((_, i) => `import { Scene${i + 1} } from './Scene${i + 1}';`)
      .join('\n');

    const sceneFiles = storyboard.scenes.map((scene, i) => this.generateSceneFile(scene, i));

    return `import React from 'react';
import { Composition, Sequence } from 'remotion';
${sceneImports}

export const Main: React.FC = () => {
  return (
    <>
      <Composition
        id="PremiereVideo"
        component={() => (
          <>
${storyboard.scenes
  .map(
    (_, i) =>
      `<Sequence from={${storyboard.scenes.slice(0, i).reduce((sum, s) => sum + s.durationFrames, 0)}} durationInFrames={${storyboard.scenes[i].durationFrames}}>
            <Scene${i + 1} />
          </Sequence>`
  )
  .join('\n')}
          </>
        )}
        durationInFrames={${storyboard.totalFrames}}
        fps={${storyboard.fps}}
        width={${storyboard.resolution.width}}
        height={${storyboard.resolution.height}}
      />
    </>
  );
};
`;
  }

  private generateSceneFile(scene: any, index: number): string {
    // This generates a placeholder scene - in production, the code generator
    // would create rich components from the storyboard
    return `// Scene ${index + 1}: ${scene.title}
// Generated by premiere-pipeline`;
  }

  private async renderVideo(projectDir: string, outputPath: string): Promise<void> {
    const remotionBin = path.resolve(
      __dirname,
      '..',
      '..',
      'node_modules',
      '.bin',
      'remotion'
    );

    // Try parent node_modules first, then local
    try {
      await execAsync(
        `"${remotionBin}" render src/index.ts PremiereVideo "${outputPath}" --codec h264 --concurrency=4`,
        { cwd: projectDir }
      );
    } catch {
      // Fallback: use npx
      await execAsync(
        `npx remotion render src/index.ts PremiereVideo "${outputPath}" --codec h264 --concurrency=4`,
        { cwd: projectDir }
      );
    }
  }
}
