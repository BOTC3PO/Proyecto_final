// src/generators/economia/contab_01_clasificacionCuentas.ts

import { type Dificultad } from "../core/types";
import { makeQuizGenerator, pickOne, randInt, type GeneratorFn } from "./generico";

type Clasificacion = "Activo" | "Pasivo" | "Patrimonio Neto" | "R+" | "R-";

const CUENTAS: { nombre: string; clasificacion: Clasificacion }[] = [
  { nombre: "Caja", clasificacion: "Activo" },
  { nombre: "Banco c/c", clasificacion: "Activo" },
  { nombre: "Clientes", clasificacion: "Activo" },
  { nombre: "Muebles y Útiles", clasificacion: "Activo" },
  { nombre: "Deudas Bancarias", clasificacion: "Pasivo" },
  { nombre: "Proveedores", clasificacion: "Pasivo" },
  { nombre: "Sueldos a Pagar", clasificacion: "Pasivo" },
  { nombre: "Capital", clasificacion: "Patrimonio Neto" },
  { nombre: "Reservas", clasificacion: "Patrimonio Neto" },
  { nombre: "Resultados Acumulados", clasificacion: "Patrimonio Neto" },
  { nombre: "Ventas", clasificacion: "R+" },
  { nombre: "Intereses Ganados", clasificacion: "R+" },
  { nombre: "Sueldos y Jornales", clasificacion: "R-" },
  { nombre: "Alquileres Perdidos", clasificacion: "R-" },
];

const OPCIONES_BASE: Clasificacion[] = [
  "Activo",
  "Pasivo",
  "Patrimonio Neto",
  "R+",
  "R-",
];

export const genContabClasificacionCuentas: GeneratorFn = makeQuizGenerator(
  1,
  "Clasificación de cuentas",
  [
    (dificultad: Dificultad) => {
      const cuenta = pickOne(CUENTAS);

      const correct = cuenta.clasificacion;
      let opciones: string[] = [correct];

      // Ajusta cantidad de opciones según dificultad
      const opcionesPorDificultad: Record<Dificultad, number> = {
        basico: 3,
        intermedio: 4,
        avanzado: 5,
      };
      const cantOpciones = opcionesPorDificultad[dificultad] ?? 4;

      const distractores = OPCIONES_BASE.filter((c) => c !== correct);
      while (opciones.length < cantOpciones && distractores.length > 0) {
        const idx = randInt(0, distractores.length - 1);
        opciones.push(distractores.splice(idx, 1)[0]);
      }

      const indiceCorrecto = opciones.indexOf(correct);

      return {
        enunciado: `La cuenta "${cuenta.nombre}" se clasifica como:`,
        opciones,
        indiceCorrecto,
        explicacion:
          "Se clasifican las cuentas según si representan bienes/derechos (Activo), deudas (Pasivo), aportes y resultados acumulados (Patrimonio Neto) o resultados del ejercicio (R+ ingresos, R- costos/gastos)." +
          (dificultad === "avanzado"
            ? " En niveles altos, revisá si la cuenta refleja una fuente de financiamiento (Pasivo/PN) o un resultado del período (R+/R-)."
            : ""),
      };
    },
  ]
);
