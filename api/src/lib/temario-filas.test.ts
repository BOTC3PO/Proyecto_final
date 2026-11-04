/**
 * La conversión del temario en filas la comparten el importador del servidor y la app sin conexión: si cambia acá,
 * cambia en los dos. Estas pruebas fijan su forma.
 */
import assert from "node:assert/strict";
import test from "node:test";
import { filasDelTemario, preguntasDeExamen, type Manifiesto } from "./temario-filas";

const dsl = (n: number) => `tipo: multiple-choice\nenunciado: "Pregunta ${n}"\nopciones: ["a", "b"]\nrespuesta: "a"`;

const manifiesto: Manifiesto = {
  temas: [
    { id: "cont-mat--a", materia: "matematica", ruta: "a", titulo: "A", teoria: "Teoría A", nivel: "1", dependencias: [], preguntas: [{ titulo: "p1", dsl: dsl(1) }, { titulo: "p2", dsl: dsl(2) }] },
    { id: "cont-mat--b", materia: "matematica", ruta: "b", titulo: "B", teoria: "Teoría B", nivel: "2", dependencias: ["cont-mat--a", "cont-no-existe"], preguntas: [{ titulo: "p1", dsl: dsl(3) }], herramientas: [{ title: "Imagen", doc: { version: 1, blocks: [] } }] },
    { id: "cont-fis--c", materia: "fisica", ruta: "c", titulo: "C", teoria: "", nivel: null, dependencias: [], preguntas: [] },
  ],
  examenes: [{ id: "cont-examen-jefe--1", logro: 1, materia: "matematica", titulo: "Matemática", descripcion: "Examen", temas: ["cont-mat--a", "cont-mat--b"], preguntas: [] }],
  libros: [{ id: "cont-libro--matematica", materia: "matematica", titulo: "Libro", libro: "{}" }],
};

const opciones = { owner: "admin", now: "2026-11-04T00:00:00.000Z" };

test("un módulo por tema, examen y libro; cuestionario solo si hay preguntas", () => {
  const f = filasDelTemario(manifiesto, opciones);
  assert.deepEqual(f.errores, []);
  assert.deepEqual(f.modulos.map((m) => m.id), ["cont-mat--a", "cont-mat--b", "cont-fis--c", "cont-examen-jefe--1", "cont-libro--matematica"]);
  assert.deepEqual(f.quizzes.map((q) => q.id), ["cont-mat--a.quiz", "cont-mat--b.quiz", "cont-examen-jefe--1.quiz"]);
  assert.equal(f.plantillas.length, 3);
  assert.equal(f.librosFilas.length, 1);
});

test("teoría y herramientas en theoryItems; dependencias solo a temas del manifiesto", () => {
  const b = filasDelTemario(manifiesto, opciones).modulos.find((m) => m.id === "cont-mat--b");
  const items = JSON.parse(b.theoryItems);
  assert.deepEqual(items.map((i: { type: string }) => i.type), ["Texto", "Herramienta"]);
  assert.deepEqual(JSON.parse(b.dependencies), [{ id: "cont-mat--a", type: "required" }]);
  assert.equal(b.ownerUserId, "admin");
  assert.equal(b.createdAt, opciones.now);
});

test("el examen jefe usa las preguntas de sus temas", () => {
  const f = filasDelTemario(manifiesto, opciones);
  const v = f.versiones.find((x) => x.quizId === "cont-examen-jefe--1.quiz");
  const settings = JSON.parse(v.settings);
  assert.equal(settings.type, "formal");
  assert.equal(settings.preguntas.cantidadGlobal, preguntasDeExamen(3));
});

test("filtrar por materia", () => {
  const f = filasDelTemario(manifiesto, { ...opciones, materias: ["fisica"] });
  assert.deepEqual(f.modulos.map((m) => m.id), ["cont-fis--c"]);
});
