// src/generators/quimica/60_precipitacion.ts
import {
  GeneratorFn,
  NumericExercise,
  randFloat,
} from "./generico";

export const generarPrecipitacion: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  // Producto de solubilidad típico pequeño
  const Ksp = dificultad === "facil"
    ? 1.0e-8
    : 5.0e-9;

  // Concentraciones iniciales (después de mezclar, simplificado)
  const Ag = dificultad === "facil"
    ? randFloat(1e-5, 1e-3, 5)
    : randFloat(5e-6, 5e-3, 5);

  const Cl = dificultad === "facil"
    ? randFloat(1e-5, 1e-3, 5)
    : randFloat(5e-6, 5e-3, 5);

  const AgR = parseFloat(Ag.toFixed(5));
  const ClR = parseFloat(Cl.toFixed(5));

  const Q = AgR * ClR;
  const QR = Number(Q.toExponential(2));
  const KspR = Number(Ksp.toExponential(2));

  let resultadoTexto: "precipita" | "no precipita" | "en equilibrio";
  if (Q > Ksp) {
    resultadoTexto = "precipita";
  } else if (Q < Ksp) {
    resultadoTexto = "no precipita";
  } else {
    resultadoTexto = "en equilibrio";
  }

  const enunciado =
    "Considera la sal poco soluble AgCl(s):\n" +
    "AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)\n\n" +
    `Su producto de solubilidad es Ksp = ${KspR}.\n` +
    `Tras mezclar dos disoluciones se obtiene en el medio [Ag⁺] = ${AgR} mol/L y [Cl⁻] = ${ClR} mol/L.\n\n` +
    "a) Calcula el cociente de reacción para la disolución Q = [Ag⁺]·[Cl⁻].\n" +
    "b) Decide si se producirá precipitación de AgCl (compara Q con Ksp).";

  return {
    idTema: 60,
    tituloTema: "Precipitación (Q vs Ksp)",
    dificultad,
    tipo: "numeric",
    enunciado,
    datos: {
      Ksp,
      Ag: AgR,
      Cl: ClR,
      Q,
    },
    unidades: {
      Ag: "mol/L",
      Cl: "mol/L",
      Ksp: "(mol/L)²",
      resultado_Q: "(mol/L)²",
    },
    resultado: {
      Q: QR,
      estado: resultadoTexto,
    },
    toleranciaRelativa: 0.05,
    pasos: [
      "Calcula Q usando la misma expresión que Ksp: Q = [Ag⁺]·[Cl⁻].",
      "Compara Q con Ksp: si Q > Ksp, la disolución está sobresaturada y precipita; si Q < Ksp, no precipita; si Q ≈ Ksp, está en equilibrio.",
      "Indica la conclusión sobre la formación de precipitado.",
    ],
  };
};
