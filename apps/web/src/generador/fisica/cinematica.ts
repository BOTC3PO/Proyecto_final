// cinematica.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./genericoFisica";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class CinematicaGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/cinematica";
  readonly categorias = [
    "MRU",
    "relacion_distancia_tiempo",
    "conversion_unidades_cinematica",
    "aceleracion_MRUV",
    "caida_libre",
    "movimiento_vertical",
    "movimiento_horizontal"
  ];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    switch (params.categoria) {
      case "MRU":
        return this.generarMRU(params, calc);
      case "aceleracion_MRUV":
        return this.generarMRUV(params, calc);
      case "caida_libre":
        return this.generarCaidaLibre(params, calc);
      case "conversion_unidades_cinematica":
        return this.generarConversionUnidades(params, calc);
      default:
        return this.generarMRU(params, calc);
    }
  }

  private generarMRU(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const nivel = params.nivel;
    let velocidad: number, tiempo: number;
    
    switch (nivel) {
      case "basico":
        velocidad = this.randomInt(10, 60);
        tiempo = this.randomInt(1, 5);
        break;
      case "intermedio":
        velocidad = this.randomInt(20, 120);
        tiempo = this.randomInt(2, 10);
        break;
      default:
        velocidad = this.randomInt(50, 200);
        tiempo = this.randomInt(5, 20);
    }

    const resultado = calc.calcular({
      tipo: "MRU_distancia",
      payload: { velocidad, tiempo }
    });

    const distancia = resultado.resultado;
    const opciones = this.mezclar([
      distancia.toString(),
      ...this.generarOpcionesIncorrectas(distancia, 3, 0.4).map(String)
    ]);

    return {
      id: this.generateId("MRU"),
      materia: this.materia,
      categoria: "MRU",
      nivel: params.nivel,
      enunciado: ENUNCIADOS_FISICA["MRU"][0] || 
        `Un vehículo se desplaza con velocidad constante de ${velocidad} m/s durante ${tiempo} segundos. ¿Qué distancia recorre?`,
      tipoRespuesta: "multiple",
      datos: { velocidad, tiempo },
      opciones: opciones.map(o => `${o} m`),
      respuestaCorrecta: `${distancia} m`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["cinematica", "MRU", "velocidad-constante"]
      }
    };
  }

  private generarMRUV(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const nivel = params.nivel;
    let v0: number, aceleracion: number, tiempo: number;
    
    switch (nivel) {
      case "basico":
        v0 = this.randomInt(0, 20);
        aceleracion = this.randomInt(1, 5);
        tiempo = this.randomInt(2, 5);
        break;
      case "intermedio":
        v0 = this.randomInt(5, 40);
        aceleracion = this.randomInt(2, 10);
        tiempo = this.randomInt(3, 8);
        break;
      default:
        v0 = this.randomInt(10, 60);
        aceleracion = this.randomInt(5, 15);
        tiempo = this.randomInt(4, 12);
    }

    const resultado = calc.calcular({
      tipo: "MRUV_velocidad_final",
      payload: { v0, aceleracion, tiempo }
    });

    const vf = resultado.resultado;
    const opciones = this.mezclar([
      vf.toString(),
      ...this.generarOpcionesIncorrectas(vf, 3, 0.35).map(String)
    ]);

    return {
      id: this.generateId("MRUV"),
      materia: this.materia,
      categoria: "aceleracion_MRUV",
      nivel: params.nivel,
      enunciado: ENUNCIADOS_FISICA["aceleracion_MRUV"][0] || 
        `Un móvil parte con velocidad inicial de ${v0} m/s y acelera a ${aceleracion} m/s². ¿Cuál es su velocidad final después de ${tiempo} segundos?`,
      tipoRespuesta: "multiple",
      datos: { v0, aceleracion, tiempo },
      opciones: opciones.map(o => `${o} m/s`),
      respuestaCorrecta: `${vf} m/s`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["cinematica", "MRUV", "aceleracion"]
      }
    };
  }

  private generarCaidaLibre(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const g = 9.8;
    let tiempo: number;
    
    switch (params.nivel) {
      case "basico":
        tiempo = this.randomInt(1, 3);
        break;
      case "intermedio":
        tiempo = this.randomInt(2, 5);
        break;
      default:
        tiempo = this.randomInt(3, 8);
    }

    const resultado = calc.calcular({
      tipo: "caida_libre",
      payload: { g, tiempo }
    });

    const velocidad = resultado.resultado;
    const opciones = this.mezclar([
      velocidad.toString(),
      ...this.generarOpcionesIncorrectas(velocidad, 3, 0.3).map(String)
    ]);

    return {
      id: this.generateId("caida_libre"),
      materia: this.materia,
      categoria: "caida_libre",
      nivel: params.nivel,
      enunciado: ENUNCIADOS_FISICA["caida_libre"][0] || 
        `Un objeto se deja caer libremente desde el reposo. ¿Con qué velocidad llega al suelo después de ${tiempo} segundos? (g = 9.8 m/s²)`,
      tipoRespuesta: "multiple",
      datos: { g, tiempo },
      opciones: opciones.map(o => `${o} m/s`),
      respuestaCorrecta: `${velocidad} m/s`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["cinematica", "caida-libre", "gravedad"]
      }
    };
  }

  private generarConversionUnidades(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const conversiones = [
      { de: "km/h", a: "m/s", factor: 1/3.6 },
      { de: "m/s", a: "km/h", factor: 3.6 },
      { de: "cm", a: "m", factor: 0.01 },
      { de: "m", a: "km", factor: 0.001 }
    ];

    const conversion = conversiones[this.randomInt(0, conversiones.length - 1)];
    const valorInicial = this.randomInt(10, 200);
    
    const resultado = calc.calcular({
      tipo: "conversion_unidades",
      payload: { valor: valorInicial, factor: conversion.factor }
    });

    const valorFinal = resultado.resultado;
    const opciones = this.mezclar([
      valorFinal.toString(),
      ...this.generarOpcionesIncorrectas(valorFinal, 3, 0.4).map(String)
    ]);

    return {
      id: this.generateId("conversion"),
      materia: this.materia,
      categoria: "conversion_unidades_cinematica",
      nivel: params.nivel,
      enunciado: ENUNCIADOS_FISICA["conversion_unidades_cinematica"][0] || 
        `Convierte ${valorInicial} ${conversion.de} a ${conversion.a}`,
      tipoRespuesta: "multiple",
      datos: { valorInicial, unidadInicial: conversion.de, unidadFinal: conversion.a },
      opciones: opciones.map(o => `${o} ${conversion.a}`),
      respuestaCorrecta: `${valorFinal} ${conversion.a}`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["conversion", "unidades", "cinematica"]
      }
    };
  }
}
