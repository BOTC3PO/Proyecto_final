// seed.ts
// ============================================================
// RNG SEEDED + GENERADOR DE SEEDS
// ============================================================

export class SeededRandom {
  private seed: number;

  constructor(seed: string) {
    this.seed = this.hashCode(seed);
  }

  private hashCode(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // fuerza 32-bit
    }
    return Math.abs(hash);
  }

  next(): number {
    // LCG clásico (determinístico)
    this.seed = (this.seed * 9301 + 49297) % 233280;
    return this.seed / 233280;
  }

  shuffle<T>(array: readonly T[]): T[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(this.next() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  sample<T>(array: readonly T[], count: number): T[] {
    const shuffled = this.shuffle(array);
    return shuffled.slice(0, count);
  }
}

/**
 * Genera un seed "único" (no criptográfico).
 * Para reproducibilidad: guardás este seed y recreás el quiz.
 */
export function generateSeed(now: number = Date.now()): string {
  return `${now}_${Math.random().toString(36).slice(2, 11)}`;
}
