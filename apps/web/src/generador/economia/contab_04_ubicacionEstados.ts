// src/generators/economia/contab_04_ubicacionEstados.ts

import { type Dificultad} from "../core/types";
import { makeQuizGenerator, pickOne,type GeneratorFn } from "./generico";

type Ubicacion =
  | "Activo Corriente"
  | "Activo No Corriente"
  | "Pasivo Corriente"
  | "Pasivo No Corriente"
  | "Resultados (Ingresos)"
  | "Resultados (Costos/Gastos)";

const CUENTAS_UBICACION: { nombre: string; ubicacion: Ubicacion }[] = [
  { nombre: "Caja", ubicacion: "Activo Corriente" },
  { nombre: "Banco c/c", ubicacion: "Activo Corriente" },
  { nombre: "Clientes", ubicacion: "Activo Corriente" },
  { nombre: "Mercaderías", ubicacion: "Activo Corriente" },
  { nombre: "Muebles y Útiles", ubicacion: "Activo No Corriente" },
  { nombre: "Inmuebles", ubicacion: "Activo No Corriente" },
  { nombre: "Proveedores", ubicacion: "Pasivo Corriente" },
  { nombre: "Sueldos a Pagar", ubicacion: "Pasivo Corriente" },
  { nombre: "Préstamos a Largo Plazo", ubicacion: "Pasivo No Corriente" },
  { nombre: "Capital", ubicacion: "Patrimonio Neto" as any }, // por si después agregás PN aparte
  { nombre: "Ventas", ubicacion: "Resultados (Ingresos)" },
  { nombre: "Intereses Ganados", ubicacion: "Resultados (Ingresos)" },
  { nombre: "Sueldos y Jornales", ubicacion: "Resultados (Costos/Gastos)" },
  { nombre: "Alquileres Perdidos", ubicacion: "Resultados (Costos/Gastos)" },
];

const OPCIONES_ESTADO: Ubicacion[] = [
  "Activo Corriente",
  "Activo No Corriente",
  "Pasivo Corriente",
  "Pasivo No Corriente",
  "Resultados (Ingresos)",
  "Resultados (Costos/Gastos)",
];

export const genContabUbicacionEstados: GeneratorFn = makeQuizGenerator(
  4,
  "Ubicación de cuentas en estados contables",
  [
    (dificultad: Dificultad) => {
      const cuenta = pickOne(CUENTAS_UBICACION);
      const correcta = cuenta.ubicacion;

      let opciones: string[] = [correcta];

      const cantOpciones =
        dificultad === ("alta" as Dificultad) ? 5 : dificultad === ("baja" as Dificultad) ? 3 : 4;

      const distractores = OPCIONES_ESTADO.filter((o) => o !== correcta);
      while (opciones.length < cantOpciones && distractores.length > 0) {
        const idx = Math.floor(Math.random() * distractores.length);
        opciones.push(distractores.splice(idx, 1)[0]);
      }

      const indiceCorrecto = opciones.indexOf(correcta);

      return {
        enunciado: `¿Dónde se ubica la cuenta "${cuenta.nombre}" en los estados contables?`,
        opciones,
        indiceCorrecto,
        explicacion:
          "En el Balance se separan las cuentas según su exigibilidad o realización (Corriente/No Corriente) y en el Estado de Resultados se presentan ingresos y costos/gastos del período.",
      };
    },
  ]
);
