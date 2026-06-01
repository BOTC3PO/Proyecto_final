/**
 * Banco de preguntas hand-authored como fuente del pool (WO08).
 *
 * Habilita `basic/QuizGenerator` como ORIGEN de preguntas escritas a mano que
 * alimentan la política de pool de WO05 (`domain/quiz/composition`). Resuelve
 * las dos piezas que faltaban (ver `docs/vblang/roadmap-basic-generators.md`):
 *
 *  1. Origen de templates: `buildQuizTemplate` arma un `QuizTemplate` a partir
 *     de preguntas hand-authored. La fuente de esas preguntas es el modelo ya
 *     existente (`QuizQuestionSet` / `QuizVersion.questions`); este módulo solo
 *     necesita el `Question[]` del pool.
 *  2. Adapter multi→single: `mapBancoQuestion` expone CADA pregunta del banco
 *     como un `ModuleQuizQuestion` individual, compatible con el resto del
 *     pipeline (el mismo shape que consume el reproductor).
 *
 * `runBanco` cierra el círculo: genera todo el banco (barajado determinista de
 * opciones), adapta cada pregunta y delega la selección "todas | K
 * (fijo/azar/elige_alumno)" en la política de pool de WO05.
 *
 * Todo acá es lógica pura y determinística (seed → resultado) para que sea
 * testeable sin red ni UI, igual que `domain/quiz/composition`.
 */

import type { ModuleQuizQuestion } from "../../domain/module/module.types";
import {
  DEFAULT_COMPOSITION,
  selectPoolIndices,
  type QuizComposition,
} from "../../domain/quiz/composition";
import { DeterministicPrng, type PRNG } from "../core/prng";
import type {
  EjercicioCompletar,
  EjercicioQuiz,
  GeneratorDescriptor,
} from "../core/types";
import { QuizGenerator } from "./basicGenerador";
import type {
  FillBlankQuestion,
  GeneratedQuestion,
  MCQuestion,
  Question,
  QuizTemplate,
  TFQuestion,
} from "./types";

/** Etiquetas que el reproductor usa para las opciones de verdadero/falso. */
export const VF_TRUE = "Verdadero";
export const VF_FALSE = "Falso";

export interface BancoMetadata {
  id: string;
  materia?: string;
  titulo?: string;
  idioma?: string;
  tags?: string[];
}

/**
 * Origen de templates (tarea 1). Envuelve un pool de preguntas hand-authored en
 * un `QuizTemplate` listo para `QuizGenerator`. El pool sale del modelo
 * existente (`QuizQuestionSet.questions` / `QuizVersion.questions`).
 *
 * Por defecto la selección del template es "todas en orden": la política de
 * pool (WO05) es la que decide cuántas y cómo, no el template.
 */
export function buildQuizTemplate(
  questions: Question[],
  metadata: BancoMetadata,
): QuizTemplate {
  return {
    schema: "vb.quiz/banco-1",
    metadata: {
      id: metadata.id,
      materia: metadata.materia ?? "general",
      titulo: metadata.titulo ?? metadata.id,
      idioma: metadata.idioma ?? "es",
      tags: metadata.tags ?? [],
    },
    settings: {
      poolSize: questions.length,
      displayCount: questions.length,
      displayCountDefault: questions.length,
      feedbackPolicyDefault: "onSubmit",
      selectionDefault: { mode: "fixed" },
    },
    pool: questions,
  };
}

/**
 * Adapter multi→single (tarea 2). Convierte UNA pregunta del banco en un
 * `ModuleQuizQuestion`, usando la pregunta original (para la clave de respuesta)
 * y la generada (para el orden barajado de opciones).
 *
 * Mapeo de tipos:
 *  - `mc`         → `mc`  (opciones barajadas; `answerKey` = texto correcto).
 *  - `tf`         → `vf`  (`answerKey` = "Verdadero"/"Falso").
 *  - `fill-blank` → `completar` SOLO si hay un único blank.
 *  - `match`      → null  (sin equivalente renderizable en el reproductor).
 *
 * Devuelve `null` para preguntas que no se pueden representar (match,
 * fill-blank multi-blank, mc sin opción correcta): el caller las descarta.
 */
export function mapBancoQuestion(
  original: Question,
  generated: GeneratedQuestion,
  opts: { points?: number; focus?: string } = {},
): ModuleQuizQuestion | null {
  const base = {
    id: generated.id,
    prompt: generated.prompt,
    ...(opts.focus !== undefined ? { focus: opts.focus } : {}),
    ...(opts.points !== undefined ? { points: opts.points } : {}),
  };

  switch (original.type) {
    case "mc": {
      const mc = original as MCQuestion;
      const correctText = mc.options.find((o) => o.correct)?.text;
      if (!correctText) return null; // sin respuesta correcta → descartar
      return {
        ...base,
        questionType: "mc",
        options: (generated.options ?? []).map((o) => o.text),
        answerKey: correctText,
        ...(mc.explanation ? { explanation: mc.explanation } : {}),
      };
    }
    case "tf": {
      const tf = original as TFQuestion;
      const explanation = tf.answer ? tf.becauseTrue : tf.becauseFalse;
      return {
        ...base,
        questionType: "vf",
        answerKey: tf.answer ? VF_TRUE : VF_FALSE,
        ...(explanation ? { explanation } : {}),
      };
    }
    case "fill-blank": {
      const fb = original as FillBlankQuestion;
      // El reproductor usa `completar` (una sola respuesta): solo mapeamos los
      // de un único blank.
      if (fb.blanks.length !== 1) return null;
      const blank = fb.blanks[0];
      if (blank.correctAnswers.length === 0) return null;
      return {
        ...base,
        questionType: "completar",
        answerKey:
          blank.correctAnswers.length > 1
            ? blank.correctAnswers
            : blank.correctAnswers[0],
        ...(fb.explanation ? { explanation: fb.explanation } : {}),
      };
    }
    case "match":
      // Sin equivalente en el reproductor actual: se omite.
      return null;
    default:
      return null;
  }
}

export interface RunBancoOptions {
  seed: string;
  /** Política de pool de WO05. Default: todas, orden fijo. */
  composition?: QuizComposition;
  /** Barajar las opciones de cada pregunta (default true). */
  shuffleOptions?: boolean;
}

/**
 * Usa un banco como fuente de un quiz (tareas 2 + 4). Devuelve las preguntas
 * que el reproductor debe PRESENTAR, ya adaptadas a `ModuleQuizQuestion` y con
 * la política de pool aplicada.
 *
 * Flujo:
 *  1. `QuizGenerator` genera TODAS las preguntas del banco (shapes + barajado de
 *     opciones determinista por seed). La selección queda en "todas": la
 *     decisión de cuántas/ cómo es de la política de pool, no del template.
 *  2. Se adapta cada pregunta (multi→single); las no soportadas se descartan.
 *  3. `selectPoolIndices` (WO05) elige K de N según `tomar` +
 *     `seleccion` (fijo | azar | elige_alumno).
 */
export function runBanco(
  template: QuizTemplate,
  options: RunBancoOptions,
): ModuleQuizQuestion[] {
  if (template.pool.length === 0) return [];

  const comp = options.composition ?? DEFAULT_COMPOSITION;
  const shuffleOptions = options.shuffleOptions ?? true;

  // 1) Generar TODO el banco (la política decide la selección, no el template).
  const generator = new QuizGenerator(template);
  const instance = generator.generate({
    seed: options.seed,
    displayCount: template.pool.length,
    selection: { mode: "fixed" },
    shuffleOptions,
  });

  // 2) Adaptar cada pregunta (multi→single). Descartar las no representables.
  const byId = new Map(template.pool.map((q) => [q.id, q]));
  const focus = `banco:${template.metadata.id}`;
  const mapped: ModuleQuizQuestion[] = [];
  for (const gen of instance.questions) {
    const original = byId.get(gen.id);
    if (!original) continue;
    const mq = mapBancoQuestion(original, gen, {
      focus,
      points: comp.pesoPorDefecto,
    });
    if (mq) mapped.push(mq);
  }

  // 3) Política de pool de WO05: elegir K de N (fijo/azar/elige_alumno).
  const indices = selectPoolIndices(mapped.length, comp, options.seed);
  return indices.map((i) => mapped[i]);
}

// ── Registro + descriptores para el provider (tarea 3) ─────────────────────
//
// El provider de VBLang resuelve `generador:<id>` contra descriptores
// (paramétricos, un ejercicio por llamada). Para que `basic/QuizGenerator` deje
// de estar EXCLUIDO del provider, exponemos cada banco registrado como un
// `GeneratorDescriptor` cuyo `generate` elige UNA pregunta del banco (la
// variante single-exercise del adapter). Los bancos viven en la DB
// (`QuizQuestionSet`), así que el caller los registra acá tras cargarlos.

const TEMPLATE_REGISTRY = new Map<string, QuizTemplate>();

/** Registra (o reemplaza) un banco para que el provider/catálogo lo expongan. */
export function registerBancoTemplate(template: QuizTemplate): void {
  TEMPLATE_REGISTRY.set(template.metadata.id, template);
}

/** Limpia el registro de bancos (útil para tests). */
export function clearBancoTemplates(): void {
  TEMPLATE_REGISTRY.clear();
}

/** Bancos actualmente registrados. */
export function listBancoTemplates(): QuizTemplate[] {
  return [...TEMPLATE_REGISTRY.values()];
}

/**
 * Variante single-exercise del adapter: una pregunta del banco → `Ejercicio`
 * del core (lo que el provider sabe convertir a `GeneradorAsistidoEjercicio`).
 * Devuelve null para tipos sin equivalente (match, fill-blank multi-blank).
 */
function mapBancoQuestionToEjercicio(
  original: Question,
  generated: GeneratedQuestion,
  template: QuizTemplate,
): EjercicioQuiz | EjercicioCompletar | null {
  const base = {
    id: generated.id,
    materia: template.metadata.materia,
    subtipo: "banco",
    dificultad: "intermedio" as const,
    generatorId: `basic/${template.metadata.id}`,
    generatorVersion: 1,
  };

  switch (original.type) {
    case "mc": {
      const mc = original as MCQuestion;
      const opciones = (generated.options ?? []).map((o) => o.text);
      const correctText = mc.options.find((o) => o.correct)?.text;
      const indiceCorrecto = correctText ? opciones.indexOf(correctText) : -1;
      if (indiceCorrecto < 0) return null;
      return {
        ...base,
        tipo: "quiz",
        enunciado: generated.prompt,
        opciones,
        indiceCorrecto,
        ...(mc.explanation ? { explicacion: mc.explanation } : {}),
      };
    }
    case "tf": {
      const tf = original as TFQuestion;
      const opciones = [VF_TRUE, VF_FALSE];
      const explicacion = tf.answer ? tf.becauseTrue : tf.becauseFalse;
      return {
        ...base,
        tipo: "quiz",
        enunciado: generated.prompt,
        opciones,
        indiceCorrecto: tf.answer ? 0 : 1,
        ...(explicacion ? { explicacion } : {}),
      };
    }
    case "fill-blank": {
      const fb = original as FillBlankQuestion;
      if (fb.blanks.length !== 1) return null;
      const blank = fb.blanks[0];
      if (blank.correctAnswers.length === 0) return null;
      return {
        ...base,
        tipo: "completar",
        enunciado: generated.prompt,
        respuestaCorrecta: blank.correctAnswers[0],
        ...(fb.explanation ? { explicacion: fb.explanation } : {}),
      };
    }
    default:
      return null;
  }
}

/** Elige UNA pregunta representable del banco (determinista por prng/seed). */
function pickOneEjercicio(
  template: QuizTemplate,
  prng?: PRNG,
): EjercicioQuiz | EjercicioCompletar {
  const seed = prng ? String(prng.int(0, 2_000_000_000)) : "0";
  const generator = new QuizGenerator(template);
  const instance = generator.generate({
    seed,
    displayCount: template.pool.length,
    selection: { mode: "fixed" },
    shuffleOptions: true,
  });
  const byId = new Map(template.pool.map((q) => [q.id, q]));
  // Recorremos en orden barajado para variar qué pregunta sale por seed.
  const order = new DeterministicPrng(`${template.metadata.id}:${seed}`).shuffle(
    instance.questions,
  );
  for (const gen of order) {
    const original = byId.get(gen.id);
    if (!original) continue;
    const ej = mapBancoQuestionToEjercicio(original, gen, template);
    if (ej) return ej;
  }
  throw new Error(
    `Banco "${template.metadata.id}": sin preguntas representables`,
  );
}

function bancoDescriptor(template: QuizTemplate): GeneratorDescriptor {
  return {
    id: `basic/${template.metadata.id}`,
    version: 1,
    materia: template.metadata.materia,
    subtipos: [],
    generate: (_dificultad, prng) => pickOneEjercicio(template, prng),
  };
}

/**
 * Descriptores de los bancos registrados, para sumarlos al provider/catálogo
 * (tarea 3). Con el registro vacío devuelve `[]` (no rompe nada).
 */
export function getDescriptoresBasic(_prng: PRNG): GeneratorDescriptor[] {
  return listBancoTemplates().map(bancoDescriptor);
}
