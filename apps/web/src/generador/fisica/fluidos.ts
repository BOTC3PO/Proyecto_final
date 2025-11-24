// fluidos.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./genericoFisica";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class FluidosGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/fluidos";
  readonly categorias = [
    "densidad",
    "presion",
    "presion_hidrostatica",
    "caudal"
  ];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    switch (params.categoria) {
      case "densidad":
        return this.generarDensidad(params, calc);
      case "presion":
        return this.generarPresion(params, calc);
      case "presion_hidrostatica":
        return this.generarPresionHidrostatica(params, calc);
      case "caudal":
        return this.generarCaudal(params, calc);
      default:
        return this.generarDensidad(params, calc);
    }
  }

  private generarDensidad(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const calcularDensidad = Math.random() > 0.3;
    let masa: number, volumen: number, densidad: number;
    
    switch (params.nivel) {
      case "basico":
        masa = this.randomInt(100, 1000);
        volumen = this.randomInt(50, 500);
        densidad = this.redondear(masa / volumen, 2);
        break;
      case "intermedio":
        masa = this.randomInt(500, 5000);
        volumen = this.randomInt(100, 2000);
        densidad = this.redondear(masa / volumen, 3);
        break;
      default:
        masa = this.randomInt(1000, 10000);
        volumen = this.randomInt(500, 5000);
        densidad = this.redondear(masa / volumen, 3);
    }

    let datos: any, enunciado: string, respuesta: string, unidad: string;

    if (calcularDensidad) {
      datos = { masa, volumen };
      enunciado = `Un objeto tiene masa ${masa} g y volumen ${volumen} cm³. ¿Cuál es su densidad?`;
      respuesta = densidad.toString();
      unidad = "g/cm³";
    } else {
      datos = { densidad, volumen };
      masa = this.redondear(densidad * volumen);
      enunciado = `Un material con densidad ${densidad} g/cm³ ocupa ${volumen} cm³. ¿Cuál es su masa?`;
      respuesta = masa.toString();
      unidad = "g";
    }

    const resultado = calc.calcular({
      tipo: calcularDensidad ? "densidad" : "masa_desde_densidad",
      payload: datos
    });

    const valorCorrecto = resultado.resultado;
    const opciones = this.mezclar([
      valorCorrecto.toString(),
      ...this.generarOpcionesIncorrectas(valorCorrecto, 3, 0.35).map(String)
    ]);

    return {
      id: this.generateId("densidad"),
      materia: this.materia,
      categoria: "densidad",
      nivel: params.nivel,
      enunciado: ENUNCIADOS_FISICA["densidad"][0] || enunciado,
      tipoRespuesta: "multiple",
      datos,
      opciones: opciones.map(o => `${o} ${unidad}`),
      respuestaCorrecta: `${respuesta} ${unidad}`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["fluidos", "densidad", "masa-volumen"]
      }
    };
  }

  private generarPresion(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let fuerza: number, area: number;
    
    switch (params.nivel) {
      case "basico":
        fuerza = this.randomInt(100, 500);
        area = this.randomInt(5, 20);
        break;
      case "intermedio":
        fuerza = this.randomInt(500, 3000);
        area = this.redondear(Math.random() * 50 + 5, 2);
        break;
      default:
        fuerza = this.randomInt(2000, 10000);
        area = this.redondear(Math.random() * 100 + 10, 2);
    }

    const resultado = calc.calcular({
      tipo: "presion",
      payload: { fuerza, area: area / 10000 } // convertir cm² a m²
    });

    const presion = resultado.resultado;
    const opciones = this.mezclar([
      presion.toString(),
      ...this.generarOpcionesIncorrectas(presion, 3, 0.35).map(String)
    ]);

    return {
      id: this.generateId("presion"),
      materia: this.materia,
      categoria: "presion",
      nivel: params.nivel,
      enunciado: ENUNCIADOS_FISICA["presion"][0] || 
        `Se aplica una fuerza de ${fuerza} N sobre un área de ${area} cm². ¿Cuál es la presión?`,
      tipoRespuesta: "multiple",
      datos: { fuerza, area },
      opciones: opciones.map(o => `${o} Pa`),
      respuestaCorrecta: `${presion} Pa`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["fluidos", "presion", "fuerza-area"]
      }
    };
  }

  private generarPresionHidrostatica(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const g = 9.8;
    let densidad: number, profundidad: number;
    
    const fluidos = [
      { nombre: "agua", densidad: 1000 },
      { nombre: "aceite", densidad: 920 },
      { nombre: "mercurio", densidad: 13600 }
    ];

    const fluido = fluidos[params.nivel === "basico" ? 0 : params.nivel === "intermedio" ? this.randomInt(0, 1) : this.randomInt(0, 2)];
    densidad = fluido.densidad;

    switch (params.nivel) {
      case "basico":
        profundidad = this.randomInt(2, 10);
        break;
      case "intermedio":
        profundidad = this.randomInt(5, 30);
        break;
      default:
        profundidad = this.randomInt(10, 100);
    }

    const resultado = calc.calcular({
      tipo: "presion_hidrostatica",
      payload: { densidad, g, profundidad }
    });

    const presion = resultado.resultado;
    const opciones = this.mezclar([
      presion.toString(),
      ...this.generarOpcionesIncorrectas(presion, 3, 0.35).map(String)
    ]);

    return {
      id: this.generateId("presion_hidro"),
      materia: this.materia,
      categoria: "presion_hidrostatica",
      nivel: params.nivel,
      enunciado: ENUNCIADOS_FISICA["presion_hidrostatica"][0] || 
        `¿Cuál es la presión hidrostática en ${fluido.nombre} a ${profundidad} m de profundidad? (ρ = ${densidad} kg/m³, g = 9.8 m/s²)`,
      tipoRespuesta: "multiple",
      datos: { densidad, g, profundidad },
      opciones: opciones.map(o => `${o} Pa`),
      respuestaCorrecta: `${presion} Pa`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["fluidos", "presion-hidrostatica", "profundidad"]
      }
    };
  }

  private generarCaudal(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let volumen: number, tiempo: number;
    
    switch (params.nivel) {
      case "basico":
        volumen = this.randomInt(100, 1000);
        tiempo = this.randomInt(10, 60);
        break;
      case "intermedio":
        volumen = this.randomInt(500, 5000);
        tiempo = this.randomInt(30, 300);
        break;
      default:
        volumen = this.randomInt(1000, 20000);
        tiempo = this.randomInt(60, 600);
    }

    const resultado = calc.calcular({
      tipo: "caudal",
      payload: { volumen: volumen / 1000, tiempo } // L a m³
    });

    const caudal = resultado.resultado;
    const opciones = this.mezclar([
      caudal.toString(),
      ...this.generarOpcionesIncorrectas(caudal, 3, 0.35).map(String)
    ]);

    return {
      id: this.generateId("caudal"),
      materia: this.materia,
      categoria: "caudal",
      nivel: params.nivel,
      enunciado: ENUNCIADOS_FISICA["caudal"][0] || 
        `Por una tubería circulan ${volumen} litros en ${tiempo} segundos. ¿Cuál es el caudal?`,
      tipoRespuesta: "multiple",
      datos: { volumen, tiempo },
      opciones: opciones.map(o => `${o} m³/s`),
      respuestaCorrecta: `${caudal} m³/s`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["fluidos", "caudal", "flujo"]
      }
    };
  }
}