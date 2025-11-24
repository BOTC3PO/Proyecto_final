// electricidad.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./genericoFisica";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class ElectricidadGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/electricidad";
  readonly categorias = [
    "ley_ohm",
    "potencia_electrica",
    "resistencia_serie",
    "resistencia_paralelo",
    "consumo_electrico"
  ];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    switch (params.categoria) {
      case "ley_ohm":
        return this.generarLeyOhm(params, calc);
      case "potencia_electrica":
        return this.generarPotenciaElectrica(params, calc);
      case "resistencia_serie":
        return this.generarResistenciaSerie(params, calc);
      case "resistencia_paralelo":
        return this.generarResistenciaParalelo(params, calc);
      case "consumo_electrico":
        return this.generarConsumoElectrico(params, calc);
      default:
        return this.generarLeyOhm(params, calc);
    }
  }

  private generarLeyOhm(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const tipo = ["calcular_V", "calcular_I", "calcular_R"][this.randomInt(0, 2)];
    let voltaje: number, corriente: number, resistencia: number;
    
    switch (params.nivel) {
      case "basico":
        voltaje = this.randomInt(3, 24);
        resistencia = this.randomInt(10, 100);
        corriente = this.redondear(voltaje / resistencia, 2);
        break;
      case "intermedio":
        voltaje = this.randomInt(12, 120);
        resistencia = this.randomInt(20, 500);
        corriente = this.redondear(voltaje / resistencia, 2);
        break;
      default:
        voltaje = this.randomInt(50, 240);
        resistencia = this.randomInt(50, 1000);
        corriente = this.redondear(voltaje / resistencia, 3);
    }

    let datos: any, enunciado: string, respuesta: string, unidad: string;

    if (tipo === "calcular_V") {
      datos = { corriente, resistencia };
      enunciado = `Por una resistencia de ${resistencia} Ω circula una corriente de ${corriente} A. ¿Cuál es el voltaje?`;
      respuesta = voltaje.toString();
      unidad = "V";
    } else if (tipo === "calcular_I") {
      datos = { voltaje, resistencia };
      enunciado = `Un circuito tiene ${voltaje} V y ${resistencia} Ω. ¿Qué corriente circula?`;
      respuesta = corriente.toString();
      unidad = "A";
    } else {
      datos = { voltaje, corriente };
      enunciado = `Con ${voltaje} V circula ${corriente} A. ¿Cuál es la resistencia?`;
      respuesta = resistencia.toString();
      unidad = "Ω";
    }

    const resultado = calc.calcular({
      tipo: `ley_ohm_${tipo}`,
      payload: datos
    });

    const valorCorrecto = resultado.resultado;
    const opciones = this.mezclar([
      valorCorrecto.toString(),
      ...this.generarOpcionesIncorrectas(valorCorrecto, 3, 0.35).map(String)
    ]);

    return {
      id: this.generateId("ohm"),
      materia: this.materia,
      categoria: "ley_ohm",
      nivel: params.nivel,
      enunciado: ENUNCIADOS_FISICA["ley_ohm"][0] || enunciado,
      tipoRespuesta: "multiple",
      datos,
      opciones: opciones.map(o => `${o} ${unidad}`),
      respuestaCorrecta: `${respuesta} ${unidad}`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["electricidad", "ley-ohm", "circuitos"]
      }
    };
  }

  private generarPotenciaElectrica(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let voltaje: number, corriente: number;
    
    switch (params.nivel) {
      case "basico":
        voltaje = this.randomInt(5, 24);
        corriente = this.randomInt(1, 5);
        break;
      case "intermedio":
        voltaje = this.randomInt(12, 120);
        corriente = this.redondear(Math.random() * 10 + 0.5, 2);
        break;
      default:
        voltaje = this.randomInt(110, 240);
        corriente = this.redondear(Math.random() * 20 + 1, 2);
    }

    const resultado = calc.calcular({
      tipo: "potencia_electrica",
      payload: { voltaje, corriente }
    });

    const potencia = resultado.resultado;
    const opciones = this.mezclar([
      potencia.toString(),
      ...this.generarOpcionesIncorrectas(potencia, 3, 0.35).map(String)
    ]);

    return {
      id: this.generateId("potencia_elec"),
      materia: this.materia,
      categoria: "potencia_electrica",
      nivel: params.nivel,
      enunciado: ENUNCIADOS_FISICA["potencia_electrica"][0] || 
        `Un dispositivo funciona con ${voltaje} V y consume ${corriente} A. ¿Cuál es su potencia?`,
      tipoRespuesta: "multiple",
      datos: { voltaje, corriente },
      opciones: opciones.map(o => `${o} W`),
      respuestaCorrecta: `${potencia} W`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["electricidad", "potencia", "consumo"]
      }
    };
  }

  private generarResistenciaSerie(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const cantidadResistencias = params.nivel === "basico" ? 2 : params.nivel === "intermedio" ? 3 : 4;
    const resistencias: number[] = [];
    
    for (let i = 0; i < cantidadResistencias; i++) {
      resistencias.push(this.randomInt(10, 200));
    }

    const resultado = calc.calcular({
      tipo: "resistencia_serie",
      payload: { resistencias }
    });

    const resistenciaTotal = resultado.resultado;
    const opciones = this.mezclar([
      resistenciaTotal.toString(),
      ...this.generarOpcionesIncorrectas(resistenciaTotal, 3, 0.3).map(String)
    ]);

    return {
      id: this.generateId("serie"),
      materia: this.materia,
      categoria: "resistencia_serie",
      nivel: params.nivel,
      enunciado: ENUNCIADOS_FISICA["resistencia_serie"][0] || 
        `Calcula la resistencia equivalente de estas resistencias en serie: ${resistencias.map(r => `${r} Ω`).join(", ")}`,
      tipoRespuesta: "multiple",
      datos: { resistencias },
      opciones: opciones.map(o => `${o} Ω`),
      respuestaCorrecta: `${resistenciaTotal} Ω`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["electricidad", "resistencias", "serie"]
      }
    };
  }

  private generarResistenciaParalelo(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const cantidadResistencias = params.nivel === "basico" ? 2 : params.nivel === "intermedio" ? 3 : 4;
    const resistencias: number[] = [];
    
    for (let i = 0; i < cantidadResistencias; i++) {
      resistencias.push(this.randomInt(20, 200));
    }

    const resultado = calc.calcular({
      tipo: "resistencia_paralelo",
      payload: { resistencias }
    });

    const resistenciaTotal = resultado.resultado;
    const opciones = this.mezclar([
      resistenciaTotal.toString(),
      ...this.generarOpcionesIncorrectas(resistenciaTotal, 3, 0.35).map(String)
    ]);

    return {
      id: this.generateId("paralelo"),
      materia: this.materia,
      categoria: "resistencia_paralelo",
      nivel: params.nivel,
      enunciado: ENUNCIADOS_FISICA["resistencia_paralelo"][0] || 
        `Calcula la resistencia equivalente de estas resistencias en paralelo: ${resistencias.map(r => `${r} Ω`).join(", ")}`,
      tipoRespuesta: "multiple",
      datos: { resistencias },
      opciones: opciones.map(o => `${o} Ω`),
      respuestaCorrecta: `${resistenciaTotal} Ω`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["electricidad", "resistencias", "paralelo"]
      }
    };
  }

  private generarConsumoElectrico(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let potencia: number, tiempo: number;
    
    switch (params.nivel) {
      case "basico":
        potencia = this.randomInt(100, 1000);
        tiempo = this.randomInt(2, 10);
        break;
      case "intermedio":
        potencia = this.randomInt(500, 3000);
        tiempo = this.randomInt(5, 24);
        break;
      default:
        potencia = this.randomInt(1000, 5000);
        tiempo = this.randomInt(10, 100);
    }

    const resultado = calc.calcular({
      tipo: "consumo_electrico",
      payload: { potencia, tiempo }
    });

    const consumo = resultado.resultado;
    const opciones = this.mezclar([
      consumo.toString(),
      ...this.generarOpcionesIncorrectas(consumo, 3, 0.35).map(String)
    ]);

    return {
      id: this.generateId("consumo"),
      materia: this.materia,
      categoria: "consumo_electrico",
      nivel: params.nivel,
      enunciado: ENUNCIADOS_FISICA["consumo_electrico"][0] || 
        `Un aparato de ${potencia} W funciona ${tiempo} horas. ¿Cuántos kWh consume?`,
      tipoRespuesta: "multiple",
      datos: { potencia, tiempo },
      opciones: opciones.map(o => `${o} kWh`),
      respuestaCorrecta: `${consumo} kWh`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["electricidad", "consumo", "kWh"]
      }
    };
  }
}
