import assert from "node:assert/strict";
import test from "node:test";

import { __debug } from "../generadores_api";
import { getGeneratorPorTema } from "../matematicas";

test("smoke 66-70: generadores nativos válidos en todas las dificultades", async () => {
  __debug.clear();
  const temas = [66, 67, 68, 69, 70] as const;
  const dificultades = ["basico", "intermedio", "avanzado"] as const;

  for (const tema of temas) {
    const gen = await getGeneratorPorTema(tema);
    assert.ok(gen, `No se encontró generador para tema ${tema}`);

    for (const dificultad of dificultades) {
      for (let i = 0; i < 50; i += 1) {
        const exercise = gen(dificultad, { modo: "quiz" });
        assert.equal(exercise.tipo, "quiz");
        assert.equal(exercise.idTema, tema);
        assert.ok(exercise.enunciado.trim().length > 0, `Enunciado vacío en ${tema}/${dificultad}`);
        assert.ok(!exercise.enunciado.includes("{{"), `Placeholder sin interpolar en ${tema}/${dificultad}`);
        const quiz = exercise as typeof exercise & { opciones: string[]; indiceCorrecto: number };
        assert.equal(quiz.opciones.length, 4, `Cantidad inválida de opciones en ${tema}/${dificultad}`);
        assert.equal(new Set(quiz.opciones).size, 4, `Opciones repetidas en ${tema}/${dificultad}`);
        assert.ok(quiz.indiceCorrecto >= 0 && quiz.indiceCorrecto < 4, `Índice correcto inválido en ${tema}/${dificultad}`);
      }
    }
  }
});
