import { BaseGenerator } from "../core/basegenerador";
import type {
    Materia,
    GeneradorParametros,
    Ejercicio,
    Calculator,
    CalculoRequest,
} from "../core/types";

type TipoOperacion = "suma" | "resta" | "multiplicacion" | "division";

export class generador_basico extends BaseGenerator {
  readonly id = "matematica/basicas";
  readonly materia: Materia = "matematica";
  readonly categorias = ["operaciones_basicas"];
    
  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const { nivel } = params;
    let defaultMax = 10;
    if (nivel === "intermedio") {
      defaultMax = 100;
    }
    if (nivel === "avanzado") {
      defaultMax = 1000;
    }
    if (nivel === "Legendario") {
      defaultMax = 10000;
    }
    if (nivel === "Divino") {
      defaultMax = 100000;
    }

    const rangoMin = this.getOpcion<number>(params, "rangoMin", 0);
    const rangoMax = this.getOpcion<number>(params, "rangoMax", defaultMax);

    // Nueva opción: cantidad de términos (2 a 5 por defecto)
    const cantidadTerminos = this.getOpcion<number>(params, "cantidadTerminos", 2);
    
    // Nueva opción: array de operaciones específicas o "aleatorio"
    const operacionesConfig = this.getOpcion<TipoOperacion[] | "aleatorio">(
      params, 
      "operaciones", 
      "aleatorio"
    );

    const operacionesDisponibles: TipoOperacion[] = [
      "suma",
      "resta",
      "multiplicacion",
      "division",
    ];

    // Determinar qué operaciones usar
    const operacionesAUsar: TipoOperacion[] = 
      operacionesConfig === "aleatorio" 
        ? operacionesDisponibles 
        : operacionesConfig;

    // Generar los términos
    const terminos: number[] = [];
    for (let i = 0; i < cantidadTerminos; i++) {
      terminos.push(this.randomInt(rangoMin, rangoMax));
    }

    // Generar las operaciones entre términos
    const operaciones: TipoOperacion[] = [];
    for (let i = 0; i < cantidadTerminos - 1; i++) {
      const opIndex = this.randomInt(0, operacionesAUsar.length - 1);
      operaciones.push(operacionesAUsar[opIndex]);
    }

    // Evitar división por cero
    for (let i = 0; i < operaciones.length; i++) {
      if (operaciones[i] === "division" && terminos[i + 1] === 0) {
        terminos[i + 1] = 1;
      }
    }

    // Armar el request para el módulo de cálculo
    const calcReq: CalculoRequest = {
      tipo: "operacion_multiple",
      payload: { terminos, operaciones },
    };

    const { resultado, pasos } = calc.calcular(calcReq);

    // Construir el enunciado
    const enunciado = this.construirEnunciado(terminos, operaciones);

    const ejercicio: Ejercicio = {
      id: this.generateId("mat_basicas"),
      materia: this.materia,
      categoria: "operaciones_basicas",
      nivel,
      enunciado,
      tipoRespuesta: "abierta",
      datos: { terminos, operaciones },
      respuestaCorrecta: resultado,
      explicacionPasoAPaso: pasos,
      metadatos: {
        curriculum: "Primaria - Operaciones básicas",
        tags: ["basicas", ...operaciones],
      },
    };

    return ejercicio;
  }

  private construirEnunciado(terminos: number[], operaciones: TipoOperacion[]): string {
    let enunciado = `Calcula: ${terminos[0]}`;
    for (let i = 0; i < operaciones.length; i++) {
      const simbolo = this.getSimbolo(operaciones[i]);
      enunciado += ` ${simbolo} ${terminos[i + 1]}`;
    }
    return enunciado;
  }

  private getSimbolo(tipo: TipoOperacion): string {
    switch (tipo) {
      case "suma":
        return "+";
      case "resta":
        return "-";
      case "multiplicacion":
        return "×";
      case "division":
        return "÷";
    }
  }
}