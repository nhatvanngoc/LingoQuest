import { VideoProductionPipeline } from '../src/pipeline/orchestrator';
import { createDemoStoryboard, buildCreativeDirectorPrompt } from '../src/agent/creative-director';
import { PipelineConfig } from '../src/core/types';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Load .env from project root
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(__dirname, '..', '.env');
try {
  const envContent = await fs.readFile(envPath, 'utf-8');
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx > 0) {
      const key = trimmed.slice(0, eqIdx).trim();
      const val = trimmed.slice(eqIdx + 1).trim();
      if (!process.env[key]) process.env[key] = val;
    }
  }
} catch {}

async function main() {
  const args = process.argv.slice(2);
  const useDemo = args.includes('--demo');
  const userPrompt = args.find((a) => !a.startsWith('--')) || 'Create a product launch video';

  // Load config from env
  const config: PipelineConfig = {
    pexelsKey: process.env.PEXELS_API_KEY || '',
    groqKey: process.env.GROQ_API_KEY || '',
    outputDir: path.resolve(__dirname, '..', 'output'),
    assetsDir: path.resolve(__dirname, '..', 'output', 'assets'),
  };

  if (!config.pexelsKey) {
    console.error('Set PEXELS_API_KEY environment variable');
    console.error('Get free key at: https://www.pexels.com/api/');
    process.exit(1);
  }

  if (!config.groqKey) {
    console.error('Set GROQ_API_KEY environment variable');
    process.exit(1);
  }

  console.log('=== Premiere Pipeline ===');
  console.log(`Prompt: ${userPrompt}`);
  console.log(`Mode: ${useDemo ? 'demo (no LLM)' : 'full (LLM planned)'}`);

  let storyboard;

  if (useDemo) {
    console.log('Using demo storyboard...');
    storyboard = createDemoStoryboard();
  } else {
    console.log('Creative Director prompt:');
    console.log(buildCreativeDirectorPrompt(userPrompt));
    console.log('\nPaste the LLM JSON response or use --demo flag');
    process.exit(0);
  }

  console.log(`\nStoryboard: ${storyboard.title}`);
  console.log(`Scenes: ${storyboard.scenes.length}`);
  console.log(`Duration: ${storyboard.totalFrames / storyboard.fps}s`);

  const pipeline = new VideoProductionPipeline(config);
  const result = await pipeline.produce(storyboard, userPrompt);

  console.log('\n=== Production Log ===');
  result.productionLog.forEach((line) => console.log(line));
  console.log(`\nFinal video: ${result.videoPath}`);
  console.log(`Quality score: ${result.score}/10`);
}

main().catch(console.error);
