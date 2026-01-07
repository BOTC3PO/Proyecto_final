// src/generators/economia/contab_03_saldoNormal.ts
import type { Dificultad } from "../core/types";
import { makeQuizGenerator,type GeneratorFn } from "./generico";

function randInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const genContabSaldoNormal: GeneratorFn = makeQuizGenerator(
  3,
  "Saldo normal de cuentas y cuentas en T",
  [
    (dificultad: Dificultad) => {
      const cuentasPorNaturaleza = {
        deudora: ["Caja", "Banco c/c", "Clientes", "Mercaderías"],
        acreedora: ["Proveedores", "Deudas Bancarias", "Capital"],
      };
      const esDeudoraPorNaturaleza = Math.random() < 0.5; // para variar el enunciado
      const nombreCuenta = esDeudoraPorNaturaleza
        ? cuentasPorNaturaleza.deudora[
            Math.floor(Math.random() * cuentasPorNaturaleza.deudora.length)
          ]
        : cuentasPorNaturaleza.acreedora[
            Math.floor(Math.random() * cuentasPorNaturaleza.acreedora.length)
          ];

      const rangosPorDificultad: Record<Dificultad, [number, number]> = {
        basico: [5, 10],
        intermedio: [8, 16],
        avanzado: [12, 25],
        Legendario: [15, 30],
        Divino: [18, 35],
      };
      const [min, max] = rangosPorDificultad[dificultad] ?? [5, 20];

      // Débitos y Créditos aleatorios
      const debitos = randInRange(min, max) * 1000;
      const creditos = randInRange(min - 3, max - 5) * 1000;

      const saldo = Math.abs(debitos - creditos);
      const esSaldoDeudor = debitos > creditos;
      const tipoSaldo = esSaldoDeudor ? "Deudor" : "Acreedor";

      const opciones = [
        `${saldo.toLocaleString("es-AR")} Deudor`,
        `${saldo.toLocaleString("es-AR")} Acreedor`,
        `${(saldo + 1000).toLocaleString("es-AR")} Deudor`,
        `${(saldo + 1000).toLocaleString("es-AR")} Acreedor`,
      ];

      const respuestaCorrecta = `${saldo.toLocaleString("es-AR")} ${tipoSaldo}`;
      const indiceCorrecto = opciones.indexOf(respuestaCorrecta);

      const masDetalle =
        dificultad === "avanzado" ||
        dificultad === "Legendario" ||
        dificultad === "Divino"
          ? " El saldo se calcula sumando todos los débitos, restando todos los créditos y verificando el lado con mayor importe en la cuenta T."
          : "";

      return {
        enunciado:
          `En la cuenta "${nombreCuenta}" se registraron Débitos por ` +
          `${debitos.toLocaleString("es-AR")} y Créditos por ` +
          `${creditos.toLocaleString("es-AR")}. ¿Cuál es el saldo final y su tipo?`,
        opciones,
        indiceCorrecto,
        explicacion:
          `Saldo = Débitos – Créditos si predominan los débitos (saldo Deudor) ` +
          `o Créditos – Débitos si predominan los créditos (saldo Acreedor).` +
          masDetalle,
      };
    },
  ]
);
