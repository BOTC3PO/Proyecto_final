// ondasOptica.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./genericoFisica";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class OndasOpticaGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/ondas_optica";
  readonly categorias = [
    "frecuencia_periodo",
    "velocidad_ondas",
    "longitud_onda",
    "optica_geometrica",
    "ecuacion_lentes",
    "indice_refraccion"
  ];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    switch (params.categoria) {
      case "frecuencia_periodo":
        return this.generarFrecuenciaPeriodo(params, calc);
      case "velocidad_ondas":
        return this.generarVelocidadOndas(params, calc);
      case "longitud_onda":
        return this.generarLongitudOnda(params, calc);
      case "indice_refraccion":
        return this.generarIndiceRefraccion(params, calc);
      case "ecuacion_lentes":
        return this.generarEcuacionLentes(params, calc);
      default:
        return this.generarFrecuenciaPeriodo(params, calc);
    }
  }

  private generarFrecuenciaPeriodo(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const calcularFrecuencia = Math.random() > 0.5;
    let frecuencia: number, periodo: number;
    
    switch (params.nivel) {
      case "basico":
        frecuencia = this.randomInt(2, 20);
        periodo = this.redondear(1 / frecuencia, 3);
        break;
      case "intermedio":
        frecuencia = this.randomInt(10, 100);
        periodo = this.redondear(1 / frecuencia, 4);
        break;
      default:
        frecuencia = this.randomInt(50, 1000);
        periodo = this.redondear(1 / frecuencia, 5);
    }

    let datos: any, enunciado: string, respuesta: string, unidad: string;

    if (calcularFrecuencia) {
      datos = { periodo };
      enunciado = `Una onda tiene un período de ${periodo} s. ¿Cuál es su frecuencia?`;
      respuesta = frecuencia.toString();
      unidad = "Hz";
    } else {
      datos = { frecuencia };
      enunciado = `Una onda tiene una frecuencia de ${frecuencia} Hz. ¿Cuál es su período?`;
      respuesta = periodo.toString();
      unidad = "s";
    }

    const resultado = calc.calcular({
      tipo: calcularFrecuencia ? "calcular_frecuencia" : "calcular_periodo",
      payload: datos
    });

    const valorCorrecto = resultado.resultado;
    const opciones = this.mezclar([
      valorCorrecto.toString(),
      ...this.generarOpcionesIncorrectas(valorCorrecto, 3, 0.3).map(String)
    ]);

    return {
      id: this.generateId("freq_per"),
      materia: this.materia,
      categoria: "frecuencia_periodo",
      nivel: params.nivel,
      enunciado: ENUNCIADOS_FISICA["frecuencia_periodo"][0] || enunciado,
      tipoRespuesta: "multiple",
      datos,
      opciones: opciones.map(o => `${o} ${unidad}`),
      respuestaCorrecta: `${respuesta} ${unidad}`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["ondas", "frecuencia", "periodo"]
      }
    };
  }

  private generarVelocidadOndas(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let frecuencia: number, longitud: number;
    
    switch (params.nivel) {
      case "basico":
        frecuencia = this.randomInt(10, 100);
        longitud = this.randomInt(2, 10);
        break;
      case "intermedio":
        frecuencia = this.randomInt(50, 500);
        longitud = this.redondear(Math.random() * 20 + 1, 2);
        break;
      default:
        frecuencia = this.randomInt(100, 10000);
        longitud = this.redondear(Math.random() * 100 + 0.1, 3);
    }

    const resultado = calc.calcular({
      tipo: "velocidad_ondas",
      payload: { frecuencia, longitud }
    });

    const velocidad = resultado.resultado;
    const opciones = this.mezclar([
      velocidad.toString(),
      ...this.generarOpcionesIncorrectas(velocidad, 3, 0.35).map(String)
    ]);

    return {
      id: this.generateId("vel_ondas"),
      materia: this.materia,
      categoria: "velocidad_ondas",
      nivel: params.nivel,
      enunciado: ENUNCIADOS_FISICA["velocidad_ondas"][0] || 
        `Una onda tiene frecuencia ${frecuencia} Hz y longitud de onda ${longitud} m. ¿Cuál es su velocidad de propagación?`,
      tipoRespuesta: "multiple",
      datos: { frecuencia, longitud },
      opciones: opciones.map(o => `${o} m/s`),
      respuestaCorrecta: `${velocidad} m/s`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["ondas", "velocidad", "propagacion"]
      }
    };
  }

  private generarLongitudOnda(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let velocidad: number, frecuencia: number;
    
    switch (params.nivel) {
      case "basico":
        velocidad = 340; // sonido en aire
        frecuencia = this.randomInt(100, 1000);
        break;
      case "intermedio":
        velocidad = Math.random() > 0.5 ? 340 : 1500; // sonido en aire o agua
        frecuencia = this.randomInt(500, 5000);
        break;
      default:
        velocidad = 300000000; // luz
        frecuencia = this.randomInt(100000000, 1000000000);
    }

    const resultado = calc.calcular({
      tipo: "longitud_onda",
      payload: { velocidad, frecuencia }
    });

    const longitud = resultado.resultado;
    const opciones = this.mezclar([
      longitud.toString(),
      ...this.generarOpcionesIncorrectas(longitud, 3, 0.35).map(String)
    ]);

    return {
      id: this.generateId("long_onda"),
      materia: this.materia,
      categoria: "longitud_onda",
      nivel: params.nivel,
      enunciado: ENUNCIADOS_FISICA["longitud_onda"][0] || 
        `Una onda se propaga a ${velocidad} m/s con frecuencia ${frecuencia} Hz. ¿Cuál es su longitud de onda?`,
      tipoRespuesta: "multiple",
      datos: { velocidad, frecuencia },
      opciones: opciones.map(o => `${o} m`),
      respuestaCorrecta: `${longitud} m`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["ondas", "longitud", "frecuencia"]
      }
    };
  }

  private generarIndiceRefraccion(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const c = 300000000; // velocidad luz en vacío
    let velocidadMedio: number, indiceMedio: number;
    
    const medios = [
      { nombre: "agua", indice: 1.33 },
      { nombre: "vidrio", indice: 1.5 },
      { nombre: "diamante", indice: 2.42 }
    ];

    const medio = medios[this.randomInt(0, params.nivel === "basico" ? 0 : params.nivel === "intermedio" ? 1 : 2)];
    indiceMedio = medio.indice;
    velocidadMedio = this.redondear(c / indiceMedio);

    const calcularIndice = Math.random() > 0.5;

    let datos: any, enunciado: string, respuesta: string;

    if (calcularIndice) {
      datos = { c, velocidadMedio };
      enunciado = `La luz viaja a ${velocidadMedio} m/s en un medio. ¿Cuál es el índice de refracción? (c = ${c} m/s)`;
      respuesta = indiceMedio.toString();
    } else {
      datos = { c, indiceMedio };
      enunciado = `¿A qué velocidad viaja la luz en ${medio.nombre}? (n = ${indiceMedio}, c = ${c} m/s)`;
      respuesta = velocidadMedio.toString();
    }

    const resultado = calc.calcular({
      tipo: calcularIndice ? "indice_refraccion" : "velocidad_medio",
      payload: datos
    });

    const valorCorrecto = resultado.resultado;
    const opciones = this.mezclar([
      valorCorrecto.toString(),
      ...this.generarOpcionesIncorrectas(valorCorrecto, 3, 0.2).map(String)
    ]);

    const unidad = calcularIndice ? "" : "m/s";

    return {
      id: this.generateId("refraccion"),
      materia: this.materia,
      categoria: "indice_refraccion",
      nivel: params.nivel,
      enunciado: ENUNCIADOS_FISICA["indice_refraccion"][0] || enunciado,
      tipoRespuesta: "multiple",
      datos,
      opciones: opciones.map(o => `${o} ${unidad}`.trim()),
      respuestaCorrecta: `${respuesta} ${unidad}`.trim(),
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["optica", "refraccion", "indice"]
      }
    };
  }

  private generarEcuacionLentes(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let distanciaObjeto: number, distanciaFocal: number;
    
    switch (params.nivel) {
      case "basico":
        distanciaFocal = this.randomInt(5, 20);
        distanciaObjeto = this.randomInt(25, 60);
        break;
      case "intermedio":
        distanciaFocal = this.randomInt(10, 40);
        distanciaObjeto = this.randomInt(50, 150);
        break;
      default:
        distanciaFocal = this.randomInt(15, 100);
        distanciaObjeto = this.randomInt(100, 500);
    }

    const resultado = calc.calcular({
      tipo: "ecuacion_lentes",
      payload: { distanciaObjeto, distanciaFocal }
    });

    const distanciaImagen = resultado.resultado;
    const opciones = this.mezclar([
      distanciaImagen.toString(),
      ...this.generarOpcionesIncorrectas(distanciaImagen, 3, 0.3).map(String)
    ]);

    return {
      id: this.generateId("lentes"),
      materia: this.materia,
      categoria: "ecuacion_lentes",
      nivel: params.nivel,
      enunciado: ENUNCIADOS_FISICA["ecuacion_lentes"][0] || 
        `Un objeto está a ${distanciaObjeto} cm de una lente convergente con distancia focal ${distanciaFocal} cm. ¿A qué distancia se forma la imagen?`,
      tipoRespuesta: "multiple",
      datos: { distanciaObjeto, distanciaFocal },
      opciones: opciones.map(o => `${o} cm`),
      respuestaCorrecta: `${distanciaImagen} cm`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["optica", "lentes", "imagen"]
      }
    };
  }
}