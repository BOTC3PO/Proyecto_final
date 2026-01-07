// src/generators/economia/economia_35_margenBruto.ts

import {
  type Dificultad,
  type GeneratorFn,
  ajustarRango,
  dificultadFactor,
  esDificultadMinima,
  makeQuizGenerator,
} from "./generico";

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const genMargenBruto: GeneratorFn = makeQuizGenerator(
  35,
  "Margen bruto: Ganancia Bruta / Ventas",
  [
    (dificultad: Dificultad) => {
      const [ventasMin, ventasMax] = ajustarRango(100, 300, dificultad);
      const [costoMin, costoMax] = ajustarRango(50, 250, dificultad);
      const ventas = randInt(ventasMin, ventasMax) * 1000;
      const costoVentas = randInt(costoMin, costoMax) * 1000;

      const gananciaBruta = ventas - costoVentas;
      const margen = (gananciaBruta / ventas) * 100;
      const usarDecimales = esDificultadMinima(dificultad, "avanzado");
      const margenRedondeado = usarDecimales
        ? Math.round(margen * 10) / 10
        : Math.round(margen);

      const formatear = (valor: number) =>
        valor.toLocaleString("es-AR", {
          minimumFractionDigits: usarDecimales ? 1 : 0,
          maximumFractionDigits: usarDecimales ? 1 : 0,
        });

      const opcionCorrecta = formatear(margenRedondeado) + " %";

      const opcionesSet = new Set<string>();
      opcionesSet.add(opcionCorrecta);

      while (opcionesSet.size < 4) {
        const desvioMax = Math.round(15 * dificultadFactor(dificultad));
        const desvio = usarDecimales
          ? randInt(-desvioMax * 2, desvioMax * 2) / 2
          : randInt(-desvioMax, desvioMax);
        const candidato = margenRedondeado + desvio;
        if (candidato > 0 && candidato < 100) {
          opcionesSet.add(formatear(candidato) + " %");
        }
      }

      const opciones = Array.from(opcionesSet);
      const indiceCorrecto = opciones.indexOf(opcionCorrecta);

      return {
        enunciado:
          `Una empresa tiene Ventas por $ ${ventas.toLocaleString(
            "es-AR"
          )} y Costo de ventas por $ ${costoVentas.toLocaleString(
            "es-AR"
          )}.\n` +
          `La Ganancia Bruta es Ventas – Costo de ventas.\n` +
          `¿Cuál es el margen bruto aproximado (Ganancia Bruta / Ventas × 100)?`,
        opciones,
        indiceCorrecto,
        explicacion:
          "El margen bruto se calcula como (Ganancia Bruta / Ventas) × 100. Indica qué porcentaje de cada peso vendido queda para cubrir otros gastos y generar beneficio.",
      };
    },
  ]
);
