// src/generators/economia/contab_02_naturalezaCuentas.ts

import { Dificultad, GeneratorFn } from "../core/types";
import { makeQuizGenerator, pickOne } from "./generico";

type Naturaleza = "Deudora" | "Acreedora";

const CUENTAS_NATURALEZA: { nombre: string; naturaleza: Naturaleza }[] = [
  // Naturaleza Deudora
  { nombre: "Caja", naturaleza: "Deudora" },
  { nombre: "Banco c/c", naturaleza: "Deudora" },
  { nombre: "Clientes", naturaleza: "Deudora" },
  { nombre: "Mercaderías", naturaleza: "Deudora" },
  { nombre: "Muebles y Útiles", naturaleza: "Deudora" },
  // Naturaleza Acreedora
  { nombre: "Capital", naturaleza: "Acreedora" },
  { nombre: "Reservas", naturaleza: "Acreedora" },
  { nombre: "Proveedores", naturaleza: "Acreedora" },
  { nombre: "Deudas Bancarias", naturaleza: "Acreedora" },
  { nombre: "Resultados Acumulados", naturaleza: "Acreedora" },
];

export const genContabNaturalezaCuentas: GeneratorFn = makeQuizGenerator(
  2,
  "Naturaleza de las cuentas (Deudora / Acreedora)",
  [
    (_dificultad: Dificultad) => {
      const cuenta = pickOne(CUENTAS_NATURALEZA);
      const opciones = ["Deudora", "Acreedora"];
      const indiceCorrecto = opciones.indexOf(cuenta.naturaleza);

      return {
        enunciado: `¿Qué naturaleza tiene la cuenta "${cuenta.nombre}"?`,
        opciones,
        indiceCorrecto,
        explicacion:
          "En general, las cuentas de Activo y gastos tienen naturaleza Deudora; las de Pasivo, Patrimonio Neto e ingresos tienen naturaleza Acreedora.",
      };
    },
  ]
);
