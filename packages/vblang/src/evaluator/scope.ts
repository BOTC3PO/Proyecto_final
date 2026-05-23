import { EvalError } from "./errors.js";

export class Scope {
  private vars = new Map<string, unknown>();

  constructor(initial?: Record<string, unknown>) {
    if (initial) {
      for (const [k, v] of Object.entries(initial)) this.vars.set(k, v);
    }
  }

  get(name: string): unknown {
    if (!this.vars.has(name)) {
      throw new EvalError(`variable indefinida: ${name}`);
    }
    return this.vars.get(name);
  }

  has(name: string): boolean {
    return this.vars.has(name);
  }

  set(name: string, value: unknown): void {
    this.vars.set(name, value);
  }

  extend(extras: Record<string, unknown>): Scope {
    const child = new Scope();
    for (const [k, v] of this.vars) child.vars.set(k, v);
    for (const [k, v] of Object.entries(extras)) child.vars.set(k, v);
    return child;
  }

  toRecord(): Record<string, unknown> {
    return Object.fromEntries(this.vars);
  }
}
