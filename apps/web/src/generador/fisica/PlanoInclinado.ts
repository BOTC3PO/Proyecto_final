// src/ejercicios/fisica/temaPlanoInclinado.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class PlanoInclinadoGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/dinamica/plano_inclinado";
  categorias: string[] = ["plano_inclinado"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let masa: number;
    let angulo: number;

    switch (params.nivel) {
      case "basico":
        masa = this.randomInt(5, 30);
        angulo = this.randomInt(15, 30);
        break;
      case "intermedio":
        masa = this.randomInt(20, 80);
        angulo = this.randomInt(25, 45);
        break;
      default:
        masa = this.randomInt(40, 150);
        angulo = this.randomInt(30, 60);
    }

    const g = 9.8;
    const resultado = calc.calcular({
      tipo: "plano_inclinado",
      payload: { masa, angulo, g },
    });

    const fuerzaParalela = resultado.resultado;
    const opciones = this.mezclar([
      fuerzaParalela.toString(),
      ...this.generarOpcionesIncorrectas(fuerzaParalela, 3, 0.3).map(String),
    ]);

    return {
      id: this.generateId("plano"),
      materia: this.materia,
      categoria: "plano_inclinado",
      nivel: params.nivel,
      enunciado:
        ENUNCIADOS_FISICA["plano_inclinado"][0] ||
        `Un objeto de ${masa} kg está sobre un plano inclinado de ${angulo}°. ¿Cuál es la componente de su peso paralela al plano? (g = 9.8 m/s²)`,
      tipoRespuesta: "multiple",
      datos: { masa, angulo, g },
      opciones: opciones.map((o) => `${o} N`),
      respuestaCorrecta: `${fuerzaParalela} N`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["dinamica", "plano-inclinado", "componentes"],
      },
    };
  }
}
