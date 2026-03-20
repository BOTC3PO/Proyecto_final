export interface PRNG {
  next(): number;
  int(min: number, max: number): number;
  shuffle<T>(array: readonly T[]): T[];
  sample<T>(array: readonly T[], count: number): T[];
}

export class DeterministicPrng implements PRNG {
  private state: number;

  constructor(seed: string | number) {
    this.state = this.hashSeed(seed);
  }

  private hashSeed(seed: string | number): number {
    if (typeof seed === "number") {
      return seed >>> 0;
    }

    let hash = 0;
    for (let i = 0; i < seed.length; i += 1) {
      hash = (hash << 5) - hash + seed.charCodeAt(i);
      hash |= 0;
    }
    return hash >>> 0;
  }

  next(): number {
    this.state = (this.state * 1664525 + 1013904223) >>> 0;
    return this.state / 0x100000000;
  }

  int(min: number, max: number): number {
    const from = Math.ceil(min);
    const to = Math.floor(max);
    return Math.floor(this.next() * (to - from + 1)) + from;
  }

  shuffle<T>(array: readonly T[]): T[] {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i -= 1) {
      const j = this.int(0, i);
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  sample<T>(array: readonly T[], count: number): T[] {
    return this.shuffle(array).slice(0, count);
  }
}

export const createPrng = (seed: string | number): PRNG => new DeterministicPrng(seed);
