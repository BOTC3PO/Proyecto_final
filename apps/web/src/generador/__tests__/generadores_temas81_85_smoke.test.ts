import assert from "node:assert/strict";
import test from "node:test";

import { createPrng } from "../core/prng";
import { setPrng } from "../matematicas/generic";
import tema81 from "../matematicas/tema81_probabilidad_avanzada";
import tema82 from "../matematicas/tema82_variables_aleatorias";
import tema83 from "../matematicas/tema83_distribuciones";
import tema84 from "../matematicas/tema84_estadistica_inferencial";
import tema85 from "../matematicas/tema85_regresion_correlacion";

test("smoke 81-85: generadores nativos válidos en todas las dificultades", () => {
  const temas = [
    [81, tema81],
    [82, tema82],
    [83, tema83],
    [84, tema84],
    [85, tema85],
  ] as const;

  const dificultades = ["basico", "intermedio", "avanzado"] as const;

  for (const [idTema, generador] of temas) {
    for (const dificultad of dificultades) {
      for (let i = 0; i < 50; i += 1) {
        setPrng(createPrng(`tema-${idTema}-${dificultad}-${i}`));
        const exercise = generador(dificultad, { modo: "quiz" });

        assert.equal(exercise.tipo, "quiz");
        assert.equal(exercise.idTema, idTema);
        assert.ok(exercise.enunciado.trim().length > 0, `Enunciado vacío en ${idTema}/${dificultad}`);
        assert.ok(!exercise.enunciado.includes("{{"), `Placeholder sin interpolar en ${idTema}/${dificultad}`);

        const quiz = exercise as typeof exercise & { opciones: string[]; indiceCorrecto: number };
        assert.equal(quiz.opciones.length, 4, `Cantidad inválida de opciones en ${idTema}/${dificultad}`);
        assert.equal(new Set(quiz.opciones).size, 4, `Opciones repetidas en ${idTema}/${dificultad}`);
        assert.ok(quiz.indiceCorrecto >= 0 && quiz.indiceCorrecto < 4, `Índice correcto inválido en ${idTema}/${dificultad}`);
      }
    }
  }
});
