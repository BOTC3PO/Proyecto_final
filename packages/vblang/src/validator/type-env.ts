import type { VBType } from "./types.js";

export class TypeEnv {
  private vars = new Map<string, VBType>();

  constructor(initial?: Record<string, VBType>) {
    if (initial) {
      for (const [k, v] of Object.entries(initial)) this.vars.set(k, v);
    }
  }

  get(name: string): VBType | undefined {
    return this.vars.get(name);
  }

  has(name: string): boolean {
    return this.vars.has(name);
  }

  set(name: string, t: VBType): void {
    this.vars.set(name, t);
  }

  extend(extras: Record<string, VBType>): TypeEnv {
    const child = new TypeEnv();
    for (const [k, v] of this.vars) child.vars.set(k, v);
    for (const [k, v] of Object.entries(extras)) child.vars.set(k, v);
    return child;
  }

  toRecord(): Record<string, VBType> {
    return Object.fromEntries(this.vars);
  }

  names(): string[] {
    return [...this.vars.keys()];
  }
}
