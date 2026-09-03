// Seed-based random number generator for deterministic results
let seed = 12345;

export function setSeed(newSeed: number) {
  seed = newSeed;
}

export function random() {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

export function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
