// energia.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./genericoFisica";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class EnergiaGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/energia";
  readonly categorias = [
    "trabajo_mecanico",
    "energia_cinetica",
    "energia_potencial",
    "conservacion_energia",
    "potencia_mecanica"
  ];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    switch (params.categoria) {
      case "trabajo_mecanico":
        return this.generarTrabajo(params, calc);
      case "energia_cinetica":
        return this.generarEnergiaCinetica(params, calc);
      case "energia_potencial":
        return this.generarEnergiaPotencial(params, calc);
      case "conservacion_energia":
        return this.generarConservacion(params, calc);
      case "potencia_mecanica":
        return this.generarPotencia(params, calc);
      default:
        return this.generarTrabajo(params, calc);
    }
  }

  private generarTrabajo(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let fuerza: number, distancia: number;
    
    switch (params.nivel) {
      case "basico":
        fuerza = this.randomInt(10, 50);
        distancia = this.randomInt(2, 10);
        break;
      case "intermedio":
        fuerza = this.randomInt(30, 150);
        distancia = this.randomInt(5, 30);
        break;
      default:
        fuerza = this.randomInt(100, 500);
        distancia = this.randomInt(10, 100);
    }

    const resultado = calc.calcular({
      tipo: "trabajo_mecanico",
      payload: { fuerza, distancia }
    });

    const trabajo = resultado.resultado;
    const opciones = this.mezclar([
      trabajo.toString(),
      ...this.generarOpcionesIncorrectas(trabajo, 3, 0.4).map(String)
    ]);

    return {
      id: this.generateId("trabajo"),
      materia: this.materia,
      categoria: "trabajo_mecanico",
      nivel: params.nivel,
      enunciado: ENUNCIADOS_FISICA["trabajo_mecanico"][0] || 
        `Se aplica una fuerza de ${fuerza} N para mover un objeto ${distancia} m en la misma dirección. ¿Cuánto trabajo se realiza?`,
      tipoRespuesta: "multiple",
      datos: { fuerza, distancia },
      opciones: opciones.map(o => `${o} J`),
      respuestaCorrecta: `${trabajo} J`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["energia", "trabajo", "fuerza"]
      }
    };
  }

  private generarEnergiaCinetica(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let masa: number, velocidad: number;
    
    switch (params.nivel) {
      case "basico":
        masa = this.randomInt(5, 30);
        velocidad = this.randomInt(2, 10);
        break;
      case "intermedio":
        masa = this.randomInt(20, 100);
        velocidad = this.randomInt(5, 25);
        break;
      default:
        masa = this.randomInt(50, 300);
        velocidad = this.randomInt(10, 50);
    }

    const resultado = calc.calcular({
      tipo: "energia_cinetica",
      payload: { masa, velocidad }
    });

    const energia = resultado.resultado;
    const opciones = this.mezclar([
      energia.toString(),
      ...this.generarOpcionesIncorrectas(energia, 3, 0.35).map(String)
    ]);

    return {
      id: this.generateId("ec"),
      materia: this.materia,
      categoria: "energia_cinetica",
      nivel: params.nivel,
      enunciado: ENUNCIADOS_FISICA["energia_cinetica"][0] || 
        `Un objeto de ${masa} kg se mueve a ${velocidad} m/s. ¿Cuál es su energía cinética?`,
      tipoRespuesta: "multiple",
      datos: { masa, velocidad },
      opciones: opciones.map(o => `${o} J`),
      respuestaCorrecta: `${energia} J`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["energia", "cinetica", "movimiento"]
      }
    };
  }

  private generarEnergiaPotencial(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const g = 9.8;
    let masa: number, altura: number;
    
    switch (params.nivel) {
      case "basico":
        masa = this.randomInt(5, 30);
        altura = this.randomInt(2, 10);
        break;
      case "intermedio":
        masa = this.randomInt(20, 100);
        altura = this.randomInt(5, 30);
        break;
      default:
        masa = this.randomInt(50, 300);
        altura = this.randomInt(10, 100);
    }

    const resultado = calc.calcular({
      tipo: "energia_potencial",
      payload: { masa, g, altura }
    });

    const energia = resultado.resultado;
    const opciones = this.mezclar([
      energia.toString(),
      ...this.generarOpcionesIncorrectas(energia, 3, 0.35).map(String)
    ]);

    return {
      id: this.generateId("ep"),
      materia: this.materia,
      categoria: "energia_potencial",
      nivel: params.nivel,
      enunciado: ENUNCIADOS_FISICA["energia_potencial"][0] || 
        `Un objeto de ${masa} kg está a ${altura} m de altura. ¿Cuál es su energía potencial gravitatoria? (g = 9.8 m/s²)`,
      tipoRespuesta: "multiple",
      datos: { masa, g, altura },
      opciones: opciones.map(o => `${o} J`),
      respuestaCorrecta: `${energia} J`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["energia", "potencial", "gravedad"]
      }
    };
  }

  private generarConservacion(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const g = 9.8;
    let masa: number, altura: number;
    
    switch (params.nivel) {
      case "basico":
        masa = this.randomInt(2, 10);
        altura = this.randomInt(5, 15);
        break;
      case "intermedio":
        masa = this.randomInt(5, 30);
        altura = this.randomInt(10, 40);
        break;
      default:
        masa = this.randomInt(10, 50);
        altura = this.randomInt(20, 100);
    }

    const resultado = calc.calcular({
      tipo: "conservacion_energia",
      payload: { masa, g, altura }
    });

    const velocidad = resultado.resultado;
    const opciones = this.mezclar([
      velocidad.toString(),
      ...this.generarOpcionesIncorrectas(velocidad, 3, 0.3).map(String)
    ]);

    return {
      id: this.generateId("conservacion"),
      materia: this.materia,
      categoria: "conservacion_energia",
      nivel: params.nivel,
      enunciado: ENUNCIADOS_FISICA["conservacion_energia"][0] || 
        `Un objeto de ${masa} kg se suelta desde ${altura} m de altura. ¿Con qué velocidad llega al suelo? (Desprecia la fricción, g = 9.8 m/s²)`,
      tipoRespuesta: "multiple",
      datos: { masa, g, altura },
      opciones: opciones.map(o => `${o} m/s`),
      respuestaCorrecta: `${velocidad} m/s`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["energia", "conservacion", "transformacion"]
      }
    };
  }

  private generarPotencia(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let trabajo: number, tiempo: number;
    
    switch (params.nivel) {
      case "basico":
        trabajo = this.randomInt(100, 500);
        tiempo = this.randomInt(5, 20);
        break;
      case "intermedio":
        trabajo = this.randomInt(500, 3000);
        tiempo = this.randomInt(10, 60);
        break;
      default:
        trabajo = this.randomInt(2000, 10000);
        tiempo = this.randomInt(30, 180);
    }

    const resultado = calc.calcular({
      tipo: "potencia_mecanica",
      payload: { trabajo, tiempo }
    });

    const potencia = resultado.resultado;
    const opciones = this.mezclar([
      potencia.toString(),
      ...this.generarOpcionesIncorrectas(potencia, 3, 0.4).map(String)
    ]);

    return {
      id: this.generateId("potencia"),
      materia: this.materia,
      categoria: "potencia_mecanica",
      nivel: params.nivel,
      enunciado: ENUNCIADOS_FISICA["potencia_mecanica"][0] || 
        `Se realiza un trabajo de ${trabajo} J en ${tiempo} segundos. ¿Cuál es la potencia desarrollada?`,
      tipoRespuesta: "multiple",
      datos: { trabajo, tiempo },
      opciones: opciones.map(o => `${o} W`),
      respuestaCorrecta: `${potencia} W`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["energia", "potencia", "trabajo"]
      }
    };
  }
}