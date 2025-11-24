// termodinamica.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./genericoFisica";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class TermodinamicaGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/termodinamica";
  readonly categorias = [
    "calor",
    "dilatacion_termica",
    "cambios_estado",
    "conversion_temperatura"
  ];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    switch (params.categoria) {
      case "calor":
        return this.generarCalor(params, calc);
      case "conversion_temperatura":
        return this.generarConversionTemperatura(params, calc);
      case "cambios_estado":
        return this.generarCambioEstado(params, calc);
      case "dilatacion_termica":
        return this.generarDilatacion(params, calc);
      default:
        return this.generarCalor(params, calc);
    }
  }

  private generarCalor(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let masa: number, calorEspecifico: number, deltaT: number;
    
    switch (params.nivel) {
      case "basico":
        masa = this.randomInt(100, 500);
        calorEspecifico = 4.18; // agua
        deltaT = this.randomInt(10, 50);
        break;
      case "intermedio":
        masa = this.randomInt(200, 1000);
        calorEspecifico = [4.18, 0.385, 0.9][this.randomInt(0, 2)]; // agua, cobre, aluminio
        deltaT = this.randomInt(20, 80);
        break;
      default:
        masa = this.randomInt(500, 3000);
        calorEspecifico = this.redondear(Math.random() * 4 + 0.3, 2);
        deltaT = this.randomInt(30, 150);
    }

    const resultado = calc.calcular({
      tipo: "calor",
      payload: { masa: masa / 1000, calorEspecifico, deltaT }
    });

    const calor = resultado.resultado;
    const opciones = this.mezclar([
      calor.toString(),
      ...this.generarOpcionesIncorrectas(calor, 3, 0.35).map(String)
    ]);

    return {
      id: this.generateId("calor"),
      materia: this.materia,
      categoria: "calor",
      nivel: params.nivel,
      enunciado: ENUNCIADOS_FISICA["calor"][0] || 
        `¿Cuánto calor se necesita para elevar la temperatura de ${masa} g de una sustancia (c = ${calorEspecifico} J/g°C) en ${deltaT}°C?`,
      tipoRespuesta: "multiple",
      datos: { masa, calorEspecifico, deltaT },
      opciones: opciones.map(o => `${o} J`),
      respuestaCorrecta: `${calor} J`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["termodinamica", "calor", "temperatura"]
      }
    };
  }

  private generarConversionTemperatura(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const conversion = Math.random() > 0.5 ? "C_a_F" : "F_a_C";
    let temperatura: number;
    
    switch (params.nivel) {
      case "basico":
        temperatura = conversion === "C_a_F" 
          ? this.randomInt(0, 50) 
          : this.randomInt(32, 122);
        break;
      case "intermedio":
        temperatura = conversion === "C_a_F" 
          ? this.randomInt(-20, 100) 
          : this.randomInt(-4, 212);
        break;
      default:
        temperatura = conversion === "C_a_F" 
          ? this.randomInt(-50, 200) 
          : this.randomInt(-58, 392);
    }

    const resultado = calc.calcular({
      tipo: `conversion_${conversion}`,
      payload: { temperatura }
    });

    const tempConvertida = resultado.resultado;
    const opciones = this.mezclar([
      tempConvertida.toString(),
      ...this.generarOpcionesIncorrectas(tempConvertida, 3, 0.2).map(String)
    ]);

    const unidadOrigen = conversion === "C_a_F" ? "°C" : "°F";
    const unidadDestino = conversion === "C_a_F" ? "°F" : "°C";

    return {
      id: this.generateId("temp"),
      materia: this.materia,
      categoria: "conversion_temperatura",
      nivel: params.nivel,
      enunciado: ENUNCIADOS_FISICA["conversion_temperatura"][0] || 
        `Convierte ${temperatura}${unidadOrigen} a ${unidadDestino}`,
      tipoRespuesta: "multiple",
      datos: { temperatura, tipo: conversion },
      opciones: opciones.map(o => `${o}${unidadDestino}`),
      respuestaCorrecta: `${tempConvertida}${unidadDestino}`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["termodinamica", "conversion", "temperatura"]
      }
    };
  }

  private generarCambioEstado(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let masa: number, calorLatente: number;
    const sustancia = Math.random() > 0.5 ? "agua" : "hielo";
    
    switch (params.nivel) {
      case "basico":
        masa = this.randomInt(100, 500);
        calorLatente = sustancia === "agua" ? 2260 : 334; // kJ/kg
        break;
      case "intermedio":
        masa = this.randomInt(200, 1000);
        calorLatente = sustancia === "agua" ? 2260 : 334;
        break;
      default:
        masa = this.randomInt(500, 3000);
        calorLatente = sustancia === "agua" ? 2260 : 334;
    }

    const resultado = calc.calcular({
      tipo: "cambio_estado",
      payload: { masa: masa / 1000, calorLatente }
    });

    const calor = resultado.resultado;
    const opciones = this.mezclar([
      calor.toString(),
      ...this.generarOpcionesIncorrectas(calor, 3, 0.35).map(String)
    ]);

    const proceso = sustancia === "agua" ? "evaporar" : "fundir";

    return {
      id: this.generateId("cambio_estado"),
      materia: this.materia,
      categoria: "cambios_estado",
      nivel: params.nivel,
      enunciado: ENUNCIADOS_FISICA["cambios_estado"][0] || 
        `¿Cuánto calor se necesita para ${proceso} ${masa} g de ${sustancia}? (L = ${calorLatente} kJ/kg)`,
      tipoRespuesta: "multiple",
      datos: { masa, calorLatente, sustancia },
      opciones: opciones.map(o => `${o} kJ`),
      respuestaCorrecta: `${calor} kJ`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["termodinamica", "cambio-estado", "calor-latente"]
      }
    };
  }

  private generarDilatacion(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let longitud: number, coeficiente: number, deltaT: number;
    
    switch (params.nivel) {
      case "basico":
        longitud = this.randomInt(100, 500);
        coeficiente = 0.000012; // acero típico
        deltaT = this.randomInt(20, 60);
        break;
      case "intermedio":
        longitud = this.randomInt(200, 1000);
        coeficiente = [0.000012, 0.000017, 0.000024][this.randomInt(0, 2)];
        deltaT = this.randomInt(30, 100);
        break;
      default:
        longitud = this.randomInt(500, 3000);
        coeficiente = this.redondear(Math.random() * 0.00003 + 0.00001, 6);
        deltaT = this.randomInt(50, 200);
    }

    const resultado = calc.calcular({
      tipo: "dilatacion_lineal",
      payload: { longitud: longitud / 100, coeficiente, deltaT }
    });

    const dilatacion = resultado.resultado;
    const opciones = this.mezclar([
      dilatacion.toString(),
      ...this.generarOpcionesIncorrectas(dilatacion, 3, 0.4).map(String)
    ]);

    return {
      id: this.generateId("dilatacion"),
      materia: this.materia,
      categoria: "dilatacion_termica",
      nivel: params.nivel,
      enunciado: ENUNCIADOS_FISICA["dilatacion_termica"][0] || 
        `Una barra de ${longitud} cm se calienta ${deltaT}°C. Si α = ${coeficiente} °C⁻¹, ¿cuánto se dilata?`,
      tipoRespuesta: "multiple",
      datos: { longitud, coeficiente, deltaT },
      opciones: opciones.map(o => `${o} cm`),
      respuestaCorrecta: `${dilatacion} cm`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["termodinamica", "dilatacion", "temperatura"]
      }
    };
  }
}