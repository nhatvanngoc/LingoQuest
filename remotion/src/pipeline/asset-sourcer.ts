import axios from 'axios';
import fs from 'fs/promises';
import path from 'path';
import { Asset, AssetSearchQuery, ProjectAssets, SceneAssetRequirement } from '../core/types';

export class AssetSourcer {
  private pexelsKey: string;
  private outputDir: string;

  constructor(pexelsKey: string, outputDir: string) {
    this.pexelsKey = pexelsKey;
    this.outputDir = outputDir;
  }

  async searchVideos(query: AssetSearchQuery): Promise<Asset[]> {
    const keyword = query.keywords.join(' ');
    const response = await axios.get('https://api.pexels.com/videos/search', {
      headers: { Authorization: this.pexelsKey },
      params: {
        query: keyword,
        orientation: query.orientation,
        per_page: 10,
        min_duration: 5,
        max_duration: 30,
      },
    });

    const videos = response.data.videos || [];
    const scored = videos.map((v: any) => ({
      id: v.id.toString(),
      src: '',
      remoteSrc: this.getBestVideoFile(v.video_files),
      type: 'video' as const,
      duration: v.duration,
      width: v.width,
      height: v.height,
      tags: v.tags || [keyword],
      score: this.scoreAsset(v, query),
      license: 'free' as const,
    }));

    return scored
      .filter((a: Asset) => a.remoteSrc)
      .sort((a: Asset, b: Asset) => b.score - a.score);
  }

  async searchImages(query: AssetSearchQuery): Promise<Asset[]> {
    const keyword = query.keywords.join(' ');
    const response = await axios.get('https://api.pexels.com/v1/search', {
      headers: { Authorization: this.pexelsKey },
      params: {
        query: keyword,
        orientation: query.orientation,
        per_page: 15,
        size: 'large',
      },
    });

    return (response.data.photos || []).map((p: any) => ({
      id: p.id.toString(),
      src: '',
      remoteSrc: p.src?.original || '',
      type: 'image' as const,
      width: p.width,
      height: p.height,
      tags: p.tags || [keyword],
      score: 0.8,
      license: 'free' as const,
    }));
  }

  async downloadAsset(asset: Asset, filename: string): Promise<string> {
    const ext = asset.type === 'video' ? 'mp4' : 'jpg';
    const localPath = path.join(this.outputDir, `${filename}.${ext}`);

    try {
      await fs.access(localPath);
      return localPath;
    } catch {}

    const response = await axios.get(asset.remoteSrc, {
      responseType: 'arraybuffer',
      timeout: 60000,
    });

    await fs.mkdir(path.dirname(localPath), { recursive: true });
    await fs.writeFile(localPath, Buffer.from(response.data));
    return localPath;
  }

  async prepareProjectAssets(
    requirements: SceneAssetRequirement[]
  ): Promise<ProjectAssets> {
    const assets: ProjectAssets = { videos: {}, images: {}, audio: {} };

    for (const req of requirements) {
      if (req.needsVideo) {
        const videos = await this.searchVideos({
          keywords: req.videoKeywords,
          type: 'video',
          orientation: 'landscape',
          mood: req.mood,
        });
        if (videos[0]) {
          const localPath = await this.downloadAsset(
            videos[0],
            `scene-${req.sceneId}-video`
          );
          assets.videos[req.sceneId] = { ...videos[0], src: localPath };
        }
      }

      if (req.needsImage) {
        const images = await this.searchImages({
          keywords: req.imageKeywords,
          type: 'image',
          orientation: 'landscape',
          mood: req.mood,
        });
        if (images[0]) {
          const localPath = await this.downloadAsset(
            images[0],
            `scene-${req.sceneId}-image`
          );
          assets.images[req.sceneId] = { ...images[0], src: localPath };
        }
      }
    }

    return assets;
  }

  private getBestVideoFile(files: any[]): string {
    const hd = files
      ?.filter((f: any) => f.quality === 'hd')
      .sort((a: any, b: any) => b.width - a.width);
    return hd?.[0]?.link || files?.[0]?.link || '';
  }

  private scoreAsset(asset: any, query: AssetSearchQuery): number {
    let score = 0.5;
    if (asset.width >= 1920) score += 0.2;
    if (asset.duration >= 10) score += 0.15;
    if (asset.duration >= 20) score += 0.1;
    return Math.min(score, 1.0);
  }
}
