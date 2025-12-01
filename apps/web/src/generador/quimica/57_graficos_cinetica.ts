// src/generators/quimica/57_graficos_cinetica.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
} from "./generico";

export const generarGraficosCinetica: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  // Reacción de primer orden: A → productos
  const A0 = dificultad === "facil"
    ? randFloat(0.10, 0.80, 2)    // mol/L
    : randFloat(0.20, 1.50, 2);

  const k = dificultad === "facil"
    ? randFloat(0.01, 0.10, 3)    // s⁻¹
    : randFloat(0.005, 0.08, 3);

  const t = dificultad === "facil"
    ? randFloat(20, 200, 0)       // s
    : randFloat(50, 400, 0);

  const A0R = parseFloat(A0.toFixed(2));
  const kR = parseFloat(k.toFixed(3));
  const tR = parseFloat(t.toFixed(0));

  // ln[A]t = ln[A0] - k·t → [A]t = [A0]·e^(-k·t)
  const At = A0R * Math.exp(-kR * tR);
  const AtR = parseFloat(At.toFixed(3));

  const lnA0 = Math.log(A0R);
  const lnAt = Math.log(AtR);
  const lnA0R = parseFloat(lnA0.toFixed(3));
  const lnAtR = parseFloat(lnAt.toFixed(3));

  const enunciado =
    "La descomposición de una sustancia A sigue una cinética de primer orden:\n" +
    "A → productos\n\n" +
    `La concentración inicial es [A]₀ = ${A0R} mol/L,\n` +
    `la constante de velocidad es k = ${kR} s⁻¹\n` +
    `y transcurre un tiempo t = ${tR} s.\n\n` +
    "a) Calcula la concentración [A]ₜ tras ese tiempo.\n" +
    "b) Calcula ln[A]₀ y ln[A]ₜ (valores que se usarían para un gráfico ln[A] vs t).";

  return {
    idTema: 57,
    tituloTema: "Gráficos numéricos (ln[A], 1/[A])",
    dificultad,
    tipo: "numeric",
    enunciado,
    datos: {
      A0: A0R,
      k: kR,
      t: tR,
      At: AtR,
      lnA0: lnA0R,
      lnAt: lnAtR,
    },
    unidades: {
      A0: "mol/L",
      At: "mol/L",
      k: "s⁻¹",
      t: "s",
      resultado: "mol/L",
    },
    resultado: {
      At: AtR,
      lnA0: lnA0R,
      lnAt: lnAtR,
    },
    toleranciaRelativa: 0.03,
    pasos: [
      "Usa la ley integrada de primer orden: ln[A]ₜ = ln[A]₀ − k·t.",
      "Calcula primero el producto k·t.",
      "Obtén ln[A]ₜ y luego [A]ₜ = [A]₀·e^(−k·t).",
      "Calcula ln[A]₀ y ln[A]ₜ: estos puntos se usarían para trazar la recta ln[A] vs t.",
    ],
  };
};
