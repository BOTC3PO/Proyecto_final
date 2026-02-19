import assert from "node:assert/strict";
import test from "node:test";

import { createPrng } from "../core/prng";
import { setPrng } from "../matematicas/generic";
import tema71 from "../matematicas/tema71_limites_funciones";
import tema72 from "../matematicas/tema72_continuidad";
import tema73 from "../matematicas/tema73_derivada_definicion";
import tema74 from "../matematicas/tema74_derivadas_basicas";
import tema75 from "../matematicas/tema75_reglas_derivacion";
import tema76 from "../matematicas/tema76_aplicaciones_derivadas";
import tema77 from "../matematicas/tema77_integral_indefinida";
import tema78 from "../matematicas/tema78_integral_definida";
import tema79 from "../matematicas/tema79_aplicaciones_integrales";
import tema80 from "../matematicas/tema80_ecuaciones_diferenciales_basico";

test("smoke 71-80: generadores nativos válidos en todas las dificultades", () => {
  const temas = [
    [71, tema71],
    [72, tema72],
    [73, tema73],
    [74, tema74],
    [75, tema75],
    [76, tema76],
    [77, tema77],
    [78, tema78],
    [79, tema79],
    [80, tema80],
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
