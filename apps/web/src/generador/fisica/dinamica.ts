// dinamica.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./genericoFisica";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class DinamicaGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/dinamica";
  readonly categorias = [
    "suma_fuerzas",
    "peso",
    "friccion",
    "plano_inclinado",
    "ley_hooke"
  ];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    switch (params.categoria) {
      case "suma_fuerzas":
        return this.generarSumaFuerzas(params, calc);
      case "peso":
        return this.generarPeso(params, calc);
      case "friccion":
        return this.generarFriccion(params, calc);
      case "plano_inclinado":
        return this.generarPlanoInclinado(params, calc);
      case "ley_hooke":
        return this.generarLeyHooke(params, calc);
      default:
        return this.generarSumaFuerzas(params, calc);
    }
  }

  private generarSumaFuerzas(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const cantidadFuerzas = params.nivel === "basico" ? 2 : params.nivel === "intermedio" ? 3 : 4;
    const fuerzas: number[] = [];
    
    for (let i = 0; i < cantidadFuerzas; i++) {
      const fuerza = this.randomInt(5, 50);
      fuerzas.push(Math.random() > 0.3 ? fuerza : -fuerza);
    }

    const resultado = calc.calcular({
      tipo: "suma_fuerzas",
      payload: { fuerzas }
    });

    const fuerzaResultante = resultado.resultado;
    const opciones = this.mezclar([
      fuerzaResultante.toString(),
      ...this.generarOpcionesIncorrectas(Math.abs(fuerzaResultante), 3, 0.4)
        .map(v => Math.random() > 0.5 ? v : -v)
        .map(String)
    ]);

    return {
      id: this.generateId("fuerzas"),
      materia: this.materia,
      categoria: "suma_fuerzas",
      nivel: params.nivel,
      enunciado: ENUNCIADOS_FISICA["suma_fuerzas"][0] || 
        `Sobre un objeto actúan las siguientes fuerzas: ${fuerzas.map(f => `${f} N`).join(", ")}. ¿Cuál es la fuerza resultante?`,
      tipoRespuesta: "multiple",
      datos: { fuerzas },
      opciones: opciones.map(o => `${o} N`),
      respuestaCorrecta: `${fuerzaResultante} N`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["dinamica", "fuerzas", "fuerza-resultante"]
      }
    };
  }

  private generarPeso(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const g = 9.8;
    let masa: number;
    
    switch (params.nivel) {
      case "basico":
        masa = this.randomInt(5, 50);
        break;
      case "intermedio":
        masa = this.randomInt(20, 150);
        break;
      default:
        masa = this.randomInt(50, 500);
    }

    const resultado = calc.calcular({
      tipo: "peso",
      payload: { masa, g }
    });

    const peso = resultado.resultado;
    const opciones = this.mezclar([
      peso.toString(),
      ...this.generarOpcionesIncorrectas(peso, 3, 0.3).map(String)
    ]);

    return {
      id: this.generateId("peso"),
      materia: this.materia,
      categoria: "peso",
      nivel: params.nivel,
      enunciado: ENUNCIADOS_FISICA["peso"][0] || 
        `Calcula el peso de un objeto de ${masa} kg. (g = 9.8 m/s²)`,
      tipoRespuesta: "multiple",
      datos: { masa, g },
      opciones: opciones.map(o => `${o} N`),
      respuestaCorrecta: `${peso} N`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["dinamica", "peso", "gravedad"]
      }
    };
  }

  private generarFriccion(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let masa: number, coeficiente: number;
    
    switch (params.nivel) {
      case "basico":
        masa = this.randomInt(10, 50);
        coeficiente = this.redondear(Math.random() * 0.3 + 0.1, 2);
        break;
      case "intermedio":
        masa = this.randomInt(30, 100);
        coeficiente = this.redondear(Math.random() * 0.5 + 0.2, 2);
        break;
      default:
        masa = this.randomInt(50, 200);
        coeficiente = this.redondear(Math.random() * 0.8 + 0.3, 2);
    }

    const g = 9.8;
    const resultado = calc.calcular({
      tipo: "friccion",
      payload: { masa, coeficiente, g }
    });

    const fuerzaFriccion = resultado.resultado;
    const opciones = this.mezclar([
      fuerzaFriccion.toString(),
      ...this.generarOpcionesIncorrectas(fuerzaFriccion, 3, 0.35).map(String)
    ]);

    return {
      id: this.generateId("friccion"),
      materia: this.materia,
      categoria: "friccion",
      nivel: params.nivel,
      enunciado: ENUNCIADOS_FISICA["friccion"][0] || 
        `Un objeto de ${masa} kg se desliza sobre una superficie con coeficiente de fricción μ = ${coeficiente}. ¿Cuál es la fuerza de fricción? (g = 9.8 m/s²)`,
      tipoRespuesta: "multiple",
      datos: { masa, coeficiente, g },
      opciones: opciones.map(o => `${o} N`),
      respuestaCorrecta: `${fuerzaFriccion} N`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["dinamica", "friccion", "coeficiente"]
      }
    };
  }

  private generarPlanoInclinado(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let masa: number, angulo: number;
    
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
      payload: { masa, angulo, g }
    });

    const fuerzaParalela = resultado.resultado;
    const opciones = this.mezclar([
      fuerzaParalela.toString(),
      ...this.generarOpcionesIncorrectas(fuerzaParalela, 3, 0.3).map(String)
    ]);

    return {
      id: this.generateId("plano"),
      materia: this.materia,
      categoria: "plano_inclinado",
      nivel: params.nivel,
      enunciado: ENUNCIADOS_FISICA["plano_inclinado"][0] || 
        `Un objeto de ${masa} kg está sobre un plano inclinado de ${angulo}°. ¿Cuál es la componente de su peso paralela al plano? (g = 9.8 m/s²)`,
      tipoRespuesta: "multiple",
      datos: { masa, angulo, g },
      opciones: opciones.map(o => `${o} N`),
      respuestaCorrecta: `${fuerzaParalela} N`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["dinamica", "plano-inclinado", "componentes"]
      }
    };
  }

  private generarLeyHooke(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let constante: number, deformacion: number;
    
    switch (params.nivel) {
      case "basico":
        constante = this.randomInt(50, 200);
        deformacion = this.redondear(Math.random() * 0.3 + 0.05, 2);
        break;
      case "intermedio":
        constante = this.randomInt(150, 500);
        deformacion = this.redondear(Math.random() * 0.5 + 0.1, 2);
        break;
      default:
        constante = this.randomInt(300, 1000);
        deformacion = this.redondear(Math.random() * 1 + 0.2, 2);
    }

    const resultado = calc.calcular({
      tipo: "ley_hooke",
      payload: { constante, deformacion }
    });

    const fuerza = resultado.resultado;
    const opciones = this.mezclar([
      fuerza.toString(),
      ...this.generarOpcionesIncorrectas(fuerza, 3, 0.35).map(String)
    ]);

    return {
      id: this.generateId("hooke"),
      materia: this.materia,
      categoria: "ley_hooke",
      nivel: params.nivel,
      enunciado: ENUNCIADOS_FISICA["ley_hooke"][0] || 
        `Un resorte con constante elástica k = ${constante} N/m se estira ${deformacion} m. ¿Qué fuerza se aplicó?`,
      tipoRespuesta: "multiple",
      datos: { constante, deformacion },
      opciones: opciones.map(o => `${o} N`),
      respuestaCorrecta: `${fuerza} N`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["dinamica", "ley-hooke", "resortes"]
      }
    };
  }
}