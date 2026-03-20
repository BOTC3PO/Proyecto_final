// src/generators/economia/contab_03_saldoNormal.ts
import type { Dificultad } from "../core/types";
import {
  makeQuizGenerator,
  type GeneratorFn,
  randInt,
  randomBool,
} from "./generico";
import { resolveTemaEnunciado, resolveTemaRange } from "./consignas";

export const genContabSaldoNormal: GeneratorFn = makeQuizGenerator(
  3,
  "Saldo normal de cuentas y cuentas en T",
  [
    (dificultad: Dificultad) => {
      const cuentasPorNaturaleza = {
        deudora: ["Caja", "Banco c/c", "Clientes", "Mercaderías"],
        acreedora: ["Proveedores", "Deudas Bancarias", "Capital"],
      };
      const esDeudoraPorNaturaleza = randomBool(); // para variar el enunciado
      const nombreCuenta = esDeudoraPorNaturaleza
        ? cuentasPorNaturaleza.deudora[
            randInt(0, cuentasPorNaturaleza.deudora.length - 1)
          ]
        : cuentasPorNaturaleza.acreedora[
            randInt(0, cuentasPorNaturaleza.acreedora.length - 1)
          ];

      const [min, max] = resolveTemaRange(
        3,
        dificultad,
        "asientosBase",
        dificultad === "basico"
          ? [5, 10]
          : dificultad === "intermedio"
            ? [8, 16]
            : [12, 25]
      );

      // Débitos y Créditos aleatorios
      const debitos = randInt(min, max) * 1000;
      const creditos = randInt(min - 3, max - 5) * 1000;

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
        dificultad === "avanzado"
          ? " El saldo se calcula sumando todos los débitos, restando todos los créditos y verificando el lado con mayor importe en la cuenta T."
          : "";

      const fallbackEnunciado =
        `En la cuenta "${nombreCuenta}" se registraron Débitos por ` +
        `${debitos.toLocaleString("es-AR")} y Créditos por ` +
        `${creditos.toLocaleString("es-AR")}. ¿Cuál es el saldo final y su tipo?`;

      return {
        enunciado: resolveTemaEnunciado(
          3,
          { nombreCuenta, debitos, creditos },
          fallbackEnunciado
        ),
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
