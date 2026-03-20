import type { PRNG } from "./prng";
import type { Dificultad, Ejercicio, Calculator, GeneratorDescriptor, Materia } from "./types";
import * as S from "./shared";

export abstract class BaseGenerador {
  abstract readonly id: string;
  abstract readonly materia: Materia;
  abstract readonly subtipos: string[];
  readonly version = 1;

  protected readonly prng: PRNG;
  constructor(prng: PRNG) { this.prng = prng; }

  abstract generarEjercicio(
    subtipo: string,
    dificultad: Dificultad,
    calc: Calculator
  ): Ejercicio;

  generate(subtipo: string, dificultad: Dificultad, calc: Calculator): Ejercicio {
    const ejercicio = this.generarEjercicio(subtipo, dificultad, calc);
    return { ...ejercicio, generatorId: this.id, generatorVersion: this.version };
  }

  toDescriptor(): GeneratorDescriptor {
    return {
      id: this.id,
      version: this.version,
      materia: this.materia,
      subtipos: this.subtipos,
      generate: (dificultad = "basico", prng) => {
        const subtipo = S.pickOne(prng ?? this.prng, this.subtipos);
        return this.generarEjercicio(
          subtipo,
          dificultad,
          { calcular: () => ({ resultado: 0, pasos: [] }) }
        );
      },
    };
  }

  protected randInt(min: number, max: number) { return S.randInt(this.prng, min, max); }
  protected randFloat(min: number, max: number, d = 2) { return S.randFloat(this.prng, min, max, d); }
  protected pickOne<T>(items: T[]) { return S.pickOne(this.prng, items); }
  protected shuffle<T>(arr: T[]) { return S.shuffle(this.prng, arr); }
  protected redondear(v: number, d = 2) { return S.redondear(v, d); }
  protected generarOpcionesIncorrectas(correcta: number, cantidad = 3, variacion = 0.3) {
    return S.generarOpcionesIncorrectas(this.prng, correcta, cantidad, variacion);
  }
  protected crearQuiz(params: Parameters<typeof S.crearQuiz>[1]) {
    return S.crearQuiz(this.prng, params);
  }
  protected renderTemplate(template: string, data: Record<string, unknown>) {
    return S.renderTemplate(template, data);
  }
}
