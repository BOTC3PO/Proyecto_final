// src/generators/economia/contab_02_naturalezaCuentas.ts

import { type Dificultad } from "../core/types";
import { makeQuizGenerator, pickOne,type GeneratorFn } from "./generico";

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
  { nombre: "Documentos a Pagar", naturaleza: "Acreedora" },
  { nombre: "Anticipos de Clientes", naturaleza: "Acreedora" },
  { nombre: "Anticipos a Proveedores", naturaleza: "Deudora" },
  { nombre: "Gastos Pagados por Adelantado", naturaleza: "Deudora" },
];

export const genContabNaturalezaCuentas: GeneratorFn = makeQuizGenerator(
  2,
  "Naturaleza de las cuentas (Deudora / Acreedora)",
  [
    (dificultad: Dificultad) => {
      const cuentasPorDificultad: Record<Dificultad, string[]> = {
        basico: ["Caja", "Banco c/c", "Clientes", "Capital", "Proveedores"],
        intermedio: [
          "Caja",
          "Banco c/c",
          "Clientes",
          "Mercaderías",
          "Muebles y Útiles",
          "Capital",
          "Reservas",
          "Proveedores",
        ],
        avanzado: CUENTAS_NATURALEZA.map((cuenta) => cuenta.nombre),
        Legendario: CUENTAS_NATURALEZA.map((cuenta) => cuenta.nombre),
        Divino: CUENTAS_NATURALEZA.map((cuenta) => cuenta.nombre),
      };
      const nombresPermitidos = cuentasPorDificultad[dificultad] ?? [];
      const pool =
        nombresPermitidos.length > 0
          ? CUENTAS_NATURALEZA.filter((cuenta) =>
              nombresPermitidos.includes(cuenta.nombre)
            )
          : CUENTAS_NATURALEZA;
      const cuenta = pickOne(pool);
      const opciones = ["Deudora", "Acreedora"];
      const indiceCorrecto = opciones.indexOf(cuenta.naturaleza);

      return {
        enunciado: `¿Qué naturaleza tiene la cuenta "${cuenta.nombre}"?`,
        opciones,
        indiceCorrecto,
        explicacion:
          "En general, las cuentas de Activo y gastos tienen naturaleza Deudora; las de Pasivo, Patrimonio Neto e ingresos tienen naturaleza Acreedora." +
          (dificultad === "avanzado" ||
          dificultad === "Legendario" ||
          dificultad === "Divino"
            ? " En niveles altos, verificá si la cuenta representa un recurso (deudora) o una obligación/financiamiento (acreedora)."
            : ""),
      };
    },
  ]
);
