/**
 * F6-05 — Plantillas VBLang OFICIALES para Informática.
 *
 * Upgrade del subtipo PARAMETRIZABLE `algebra_booleana` señalado por
 * `docs/AUDITORIA_GENERADORES.md` en
 * `apps/web/src/generadoresV2/informatica/Informatica.ts` (`genAlgebraBooleana`,
 * pool de reglas de simplificación con opciones fijas).
 *
 * Acá se sortean 3 valores booleanos A, B, C y UNA de 6 expresiones
 * booleanas (Y/O/NO/XOR combinadas), y se evalúa la expresión con los
 * operadores lógicos nativos de VBLang (`y`/`o`/`no`, `!=` como XOR). El
 * tipo de inferencia confirma que el array literal `expresiones` (cada
 * elemento `{ texto: string, valor: boolean }`) produce `expr.valor:
 * boolean`, por lo que `tipo: vf` (que exige `respuesta: boolean`) valida
 * sin error.
 */
import type { PlantillaOficial } from "./types.js";

const ALGEBRA_BOOLEANA_DSL = `metadata:
  materia: "informatica"
  nivel: "avanzado"
  tags: ["algebra_booleana", "evaluacion"]

variables:
  a: uno_de([verdadero, falso])
  b: uno_de([verdadero, falso])
  c: uno_de([verdadero, falso])
  expresiones: [{ texto: "(A Y B) O C", valor: (a y b) o c }, { texto: "(A O B) Y (NO C)", valor: (a o b) y (no c) }, { texto: "A Y (B O C)", valor: a y (b o c) }, { texto: "NO (A Y B)", valor: no (a y b) }, { texto: "A distinto de B (XOR)", valor: a != b }, { texto: "(NO A) O (NO B)", valor: (no a) o (no b) }]
  expr: uno_de(expresiones)

enunciado: "Sean A = {a}, B = {b}, C = {c}. ¿Cuál es el resultado de la expresión booleana {expr.texto}?"
tipo: vf
respuesta: expr.valor

pasos:
  - "A={a}, B={b}, C={c}."
  - "{expr.texto} = {expr.valor}"

explicacion: |
  Evaluando {expr.texto} con A={a}, B={b}, C={c} se obtiene {expr.valor}.
`;

export const INFORMATICA_OFICIALES: PlantillaOficial[] = [
  {
    id: "oficial-informatica-algebra-booleana",
    nombre: "Álgebra booleana: evaluación de expresiones lógicas",
    descripcion:
      "Dados valores booleanos para A, B y C, evalúa una expresión lógica (Y/O/NO/XOR combinados) y determina si el resultado es verdadero o falso.",
    materia: "informatica",
    tags: ["algebra_booleana", "evaluacion"],
    subtipoOriginal: "algebra_booleana",
    codigoDsl: ALGEBRA_BOOLEANA_DSL,
  },
];
