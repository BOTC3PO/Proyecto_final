// ajustá la ruta según tu proyecto real
import { BaseGenerator } from "../core/basegenerador";
import type {
    Materia,
    GeneradorParametros,
    Ejercicio,
    Calculator,
    CalculoRequest,
} from "../core/types";

type TipoOperacion = "suma" | "resta" | "multiplicacion" | "division";

export class generador_basico extends  BaseGenerator {
  readonly id = "matematica/basicas";
  readonly materia: Materia = "matematica";
  readonly categorias = ["operaciones_basicas"];
    
generarEjercicio(params:GeneradorParametros,calc:Calculator):Ejercicio{
    const {nivel} =params;
    let defaultMax=10;
    if (nivel==="intermedio") {
        defaultMax=100;
    }
    if (nivel==="avanzado") {
        defaultMax=1000;
    }
    if (nivel==="Legendario") {
        defaultMax=10000;
    }
    if (nivel==="Divino") {
        defaultMax=100000;
    }

    const rangoMin = this.getOpcion<number>(params, "rangoMin", 0);
    const rangoMax = this.getOpcion<number>(params, "rangoMax", defaultMax);

    const tipoOperacionConfig = this.getOpcion<TipoOperacion | "aleatorio">(params, "tipoOperacion", "aleatorio");

    const operaciones: TipoOperacion[] = [
      "suma",
      "resta",
      "multiplicacion",
      "division",
    ];

    const tipoOperacion: TipoOperacion =tipoOperacionConfig === "aleatorio"? operaciones[this.randomInt(0, operaciones.length - 1)]: tipoOperacionConfig;

     // Generamos operandos
    let a = this.randomInt(rangoMin, rangoMax);
    let b = this.randomInt(rangoMin, rangoMax);

    // Evitar división por cero
    if (tipoOperacion === "division" && b === 0) {
      b = 1;
    }

    // Armamos request para el módulo de cálculo
    const calcReq: CalculoRequest = {
      tipo: "operacion_basica",
      payload: { tipoOperacion, a, b },
    };

    const { resultado, pasos } = calc.calcular(calcReq);

    const simbolo = this.getSimbolo(tipoOperacion);
    const enunciado = `Calcula: ${a} ${simbolo} ${b}`;

    const ejercicio: Ejercicio = {
      id: this.generateId("mat_basicas"),
      materia: this.materia,
      categoria: "operaciones_basicas",
      nivel,
      enunciado,
      tipoRespuesta: "abierta",
      datos: { a, b, tipoOperacion },
      respuestaCorrecta: resultado,
      explicacionPasoAPaso: pasos,
      metadatos: {
        curriculum: "Primaria - Operaciones básicas",
        tags: ["basicas", tipoOperacion],
      },
    };


   return ejercicio;
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
  
