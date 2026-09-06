import { SoundAsset, AudioCue, StoryboardScene } from '../core/types';

const SFX_LIBRARY: Record<string, string> = {
  whoosh_soft: 'sfx/whoosh-soft.mp3',
  whoosh_hard: 'sfx/whoosh-hard.mp3',
  pop_in: 'sfx/pop-in.mp3',
  scale_up: 'sfx/scale-up.mp3',
  swipe: 'sfx/swipe.mp3',
  glitch: 'sfx/glitch.mp3',
  morph: 'sfx/morph.mp3',
  wipe: 'sfx/wipe.mp3',
  data_tick: 'sfx/data-tick.mp3',
  notification: 'sfx/notification.mp3',
  success: 'sfx/success.mp3',
  typing: 'sfx/typing.mp3',
  bleep: 'sfx/bleep.mp3',
  hit_soft: 'sfx/hit-soft.mp3',
  hit_hard: 'sfx/hit-hard.mp3',
  boom: 'sfx/boom.mp3',
  riser: 'sfx/riser.mp3',
  click: 'sfx/click.mp3',
  hover: 'sfx/hover.mp3',
  toggle: 'sfx/toggle.mp3',
};

const ANIMATION_TO_SFX: Record<string, string> = {
  'logo-reveal': 'riser',
  'title-appear': 'whoosh_soft',
  'chart-draw': 'data_tick',
  'counter-up': 'bleep',
  'card-entrance': 'pop_in',
  'scene-transition-wipe': 'swipe',
  'scene-transition-glitch': 'glitch',
  notification: 'notification',
  'cta-button': 'success',
  typing: 'typing',
};

export class SoundDesigner {
  static getSfxPath(sfxKey: string): string | null {
    return SFX_LIBRARY[sfxKey] || null;
  }

  static mapAnimationToSFX(animationType: string): string | null {
    return ANIMATION_TO_SFX[animationType] || null;
  }

  generateAudioCues(storyboard: StoryboardScene[]): AudioCue[] {
    const cues: AudioCue[] = [];

    for (const scene of storyboard) {
      for (const element of scene.elements) {
        const sfx = SoundDesigner.mapAnimationToSFX(element.animationType);
        if (sfx) {
          cues.push({
            frame: scene.startFrame + element.enterFrame,
            sfxKey: sfx,
            volume: this.getVolume(element.emphasis),
            fadeIn: 2,
            fadeOut: 5,
          });
        }
      }
    }

    return cues;
  }

  getVolumeMap(cues: AudioCue[]): Record<number, number> {
    const map: Record<number, number> = {};
    for (const cue of cues) {
      map[cue.frame] = cue.volume;
    }
    return map;
  }

  private getVolume(emphasis: string): number {
    return ({ high: 0.8, medium: 0.5, low: 0.3 } as Record<string, number>)[emphasis] || 0.5;
  }
}

export { SFX_LIBRARY, ANIMATION_TO_SFX };
