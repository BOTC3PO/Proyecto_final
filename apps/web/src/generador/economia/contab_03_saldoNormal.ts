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
      const esDeudoraPorNaturaleza = Math.random() < 0.5; // para variar el enunciado
      const nombreCuenta = esDeudoraPorNaturaleza ? "Caja" : "Proveedores";

      // Débitos y Créditos aleatorios
      const debitos = randInRange(5, 20) * 1000; // 5.000 a 20.000
      const creditos = randInRange(2, 15) * 1000;

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
        dificultad === ("alta" as Dificultad)
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
