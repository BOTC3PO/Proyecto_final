/**
 * F3-01 — Modelo "cuestionario por posiciones" (plan rondas 5-7).
 *
 * Un cuestionario es N posiciones numeradas. Cada posición es una pregunta fija
 * o un pool de variantes (a/b/c…); cada posición lleva un tema (principal +
 * secundario opcional) y un PUNTAJE a nivel posición (todas las variantes de una
 * posición comparten puntaje y tema — regla del plan).
 *
 * Esto GENERALIZA la composición de pool existente (`quiz-composition.ts`): en
 * vez de un único pool a nivel quiz, hay un pool por posición. Se serializa
 * dentro de `QuizVersion.settings` (junto a `composition`), sin tabla nueva ni
 * cambio de schema Prisma. El sorteo (F3-02), el puntaje (F3-03) y la UI (F4)
 * NO son parte de esta tarea: acá sólo viven el modelo, los tipos, la
 * normalización/validación y la migración del modelo viejo.
 *
 * Lógica pura y determinística, SIN imports, para poder portarla byte a byte a
 * `apps/web/src/domain/quiz/posiciones.ts` (misma convención que
 * quiz-composition.ts ↔ domain/quiz/composition.ts). Cualquier cambio acá DEBE
 * reflejarse allá o los tipos compartidos se desincronizan.
 */

/** Versión del schema embebido en `settings.posiciones`. */
export const POSICIONES_SCHEMA_VERSION = 2 as const;

/** Tema para agrupar/colorear posiciones. `color` es opcional (UI, F4). */
export interface Tema {
  id: string;
  nombre: string;
  color?: string;
}

/**
 * De dónde sale la pregunta concreta de una variante. Las tres se pueden
 * mezclar dentro de una misma posición:
 *  - `banco`: pregunta estática ya materializada en `QuizVersion.questions`
 *    (referenciada por su `id`). Es lo que produce la migración del modelo viejo.
 *  - `plantilla`: plantilla VBLang (se materializa al crear la versión / sortear).
 *  - `generador`: generador nativo paramétrico.
 */
export type VarianteOrigen =
  | { origen: "banco"; questionId: string }
  | {
      origen: "plantilla";
      plantillaId: string;
      plantillaVersion?: number;
      params?: Record<string, unknown>;
    }
  | {
      origen: "generador";
      generatorId: string;
      generatorVersion?: string;
      params?: Record<string, unknown>;
    };

/** Una variante de una posición: su letra (a/b/c…) y de dónde sale la pregunta. */
export interface Variante {
  letra: string;
  origen: VarianteOrigen;
}

/**
 * Tipo de slot del plan:
 *  - `fijo`: una sola pregunta (exactamente una variante).
 *  - `obligatorio`: pool de variantes; siempre entra una (se sortea en F3-02).
 *  - `relleno`: slot que se completa por sección/tema (sorteo F3-02).
 * El sorteo NO se implementa acá; el tipo sólo describe la intención del slot.
 */
export type PosicionTipo = "fijo" | "obligatorio" | "relleno";

export interface Posicion {
  /** 1-based, consecutivo dentro del cuestionario. */
  numero: number;
  tipo: PosicionTipo;
  /** id de un Tema del cuestionario. */
  temaPrincipal: string;
  /** id de otro Tema, opcional. */
  temaSecundario?: string;
  /** Puntaje a nivel posición; compartido por todas las variantes. */
  puntaje: number;
  /** 1 (fijo) o N (pool). Letras únicas dentro de la posición. */
  variantes: Variante[];
}

export interface CuestionarioPosiciones {
  version: typeof POSICIONES_SCHEMA_VERSION;
  temas: Tema[];
  posiciones: Posicion[];
}

/** Tema por defecto para quizzes migrados (sin temas asignados todavía). */
export const TEMA_GENERAL: Tema = { id: "general", nombre: "General" };

// ───────────────────────────────────────────────────────────────
// Helpers internos (puros)
// ───────────────────────────────────────────────────────────────

function isObject(v: unknown): v is Record<string, unknown> {
  return !!v && typeof v === "object" && !Array.isArray(v);
}

function asArray(v: unknown): unknown[] {
  return Array.isArray(v) ? v : [];
}

function finiteNumber(v: unknown): number | undefined {
  return typeof v === "number" && Number.isFinite(v) ? v : undefined;
}

function nonEmptyString(v: unknown): string | undefined {
  return typeof v === "string" && v.trim().length > 0 ? v : undefined;
}

/** ¿El objeto crudo ya está en el modelo de posiciones? (tiene `posiciones`). */
export function tienePosiciones(raw: unknown): boolean {
  return isObject(raw) && Array.isArray((raw as Record<string, unknown>).posiciones);
}

// ───────────────────────────────────────────────────────────────
// Parse / normalización (deserializador canónico)
// ───────────────────────────────────────────────────────────────

function parseVarianteOrigen(raw: unknown, fallbackQuestionId?: string): VarianteOrigen {
  const r = isObject(raw) ? raw : {};
  const origen = r.origen;

  if (origen === "plantilla") {
    const plantillaId = nonEmptyString(r.plantillaId) ?? "";
    const out: VarianteOrigen = { origen: "plantilla", plantillaId };
    const pv = finiteNumber(r.plantillaVersion);
    if (pv !== undefined) out.plantillaVersion = pv;
    if (isObject(r.params)) out.params = r.params as Record<string, unknown>;
    return out;
  }
  if (origen === "generador") {
    const generatorId = nonEmptyString(r.generatorId) ?? "";
    const out: VarianteOrigen = { origen: "generador", generatorId };
    const gv = nonEmptyString(r.generatorVersion);
    if (gv !== undefined) out.generatorVersion = gv;
    if (isObject(r.params)) out.params = r.params as Record<string, unknown>;
    return out;
  }
  // Default / "banco": referencia a una pregunta materializada por id.
  return { origen: "banco", questionId: nonEmptyString(r.questionId) ?? fallbackQuestionId ?? "" };
}

function parseVariante(raw: unknown, indice: number): Variante {
  const r = isObject(raw) ? raw : {};
  const letra = nonEmptyString(r.letra) ?? letraPorIndice(indice);
  return { letra, origen: parseVarianteOrigen(r.origen) };
}

/** a, b, c … z, aa, ab … (suficiente para cualquier pool razonable). */
export function letraPorIndice(i: number): string {
  let n = i;
  let s = "";
  do {
    s = String.fromCharCode(97 + (n % 26)) + s;
    n = Math.floor(n / 26) - 1;
  } while (n >= 0);
  return s;
}

function parseTipo(v: unknown): PosicionTipo {
  return v === "obligatorio" || v === "relleno" ? v : "fijo";
}

/**
 * Normaliza una posición. El modelo canónico lleva tema y puntaje A NIVEL
 * POSICIÓN. Si la entrada cruda no los trae en la posición pero sí en las
 * variantes (de forma uniforme), se HOISTEAN; los valores a nivel variante se
 * descartan del modelo canónico. Si la posición los trae, esos ganan.
 */
function parsePosicion(raw: unknown, numero: number): Posicion {
  const r = isObject(raw) ? raw : {};
  const variantesRaw = asArray(r.variantes);
  const variantes = (variantesRaw.length > 0 ? variantesRaw : [{}]).map((v, i) =>
    parseVariante(v, i),
  );

  // Puntaje: posición gana; si no, hoist de variantes uniforme; si no, 1.
  let puntaje = finiteNumber(r.puntaje);
  if (puntaje === undefined) puntaje = hoistNumberUniforme(variantesRaw, "puntaje");
  if (puntaje === undefined) puntaje = 1;

  // Tema principal: posición gana; si no, hoist de variantes uniforme; si no, general.
  let temaPrincipal = nonEmptyString(r.temaPrincipal);
  if (temaPrincipal === undefined) temaPrincipal = hoistStringUniforme(variantesRaw, "tema");
  if (temaPrincipal === undefined) temaPrincipal = TEMA_GENERAL.id;

  const out: Posicion = {
    numero,
    tipo: parseTipo(r.tipo),
    temaPrincipal,
    puntaje,
    variantes,
  };
  const temaSecundario = nonEmptyString(r.temaSecundario);
  if (temaSecundario !== undefined) out.temaSecundario = temaSecundario;
  return out;
}

function hoistNumberUniforme(variantesRaw: unknown[], campo: string): number | undefined {
  const vals = variantesRaw
    .map((v) => (isObject(v) ? finiteNumber(v[campo]) : undefined))
    .filter((v): v is number => v !== undefined);
  if (vals.length === 0) return undefined;
  return vals.every((v) => v === vals[0]) ? vals[0] : undefined;
}

function hoistStringUniforme(variantesRaw: unknown[], campo: string): string | undefined {
  const vals = variantesRaw
    .map((v) => (isObject(v) ? nonEmptyString(v[campo]) : undefined))
    .filter((v): v is string => v !== undefined);
  if (vals.length === 0) return undefined;
  return vals.every((v) => v === vals[0]) ? vals[0] : undefined;
}

function parseTema(raw: unknown): Tema {
  const r = isObject(raw) ? raw : {};
  const out: Tema = {
    id: nonEmptyString(r.id) ?? TEMA_GENERAL.id,
    nombre: nonEmptyString(r.nombre) ?? TEMA_GENERAL.nombre,
  };
  const color = nonEmptyString(r.color);
  if (color !== undefined) out.color = color;
  return out;
}

/**
 * Deserializa/normaliza un cuestionario por posiciones desde JSON crudo. Es el
 * inverso canónico de `JSON.stringify`: `parseCuestionario(JSON.parse(s))`
 * reconstruye exactamente un `CuestionarioPosiciones` ya canónico (round-trip).
 * Renumera las posiciones 1..N por orden de aparición.
 */
export function parseCuestionario(raw: unknown): CuestionarioPosiciones {
  const r = isObject(raw) ? raw : {};
  const posiciones = asArray(r.posiciones).map((p, i) => parsePosicion(p, i + 1));

  // Temas: los declarados, más cualquiera referenciado que falte (incluye general).
  const temas = asArray(r.temas).map(parseTema);
  const temaIds = new Set(temas.map((t) => t.id));
  for (const pos of posiciones) {
    for (const id of [pos.temaPrincipal, pos.temaSecundario]) {
      if (id && !temaIds.has(id)) {
        temas.push(id === TEMA_GENERAL.id ? { ...TEMA_GENERAL } : { id, nombre: id });
        temaIds.add(id);
      }
    }
  }

  return { version: POSICIONES_SCHEMA_VERSION, temas, posiciones };
}

// ───────────────────────────────────────────────────────────────
// Migración modelo viejo → posiciones (idempotente)
// ───────────────────────────────────────────────────────────────

interface LegacyQuestionLike {
  id?: string;
  points?: number;
}
interface LegacyCompositionLike {
  pesoPorDefecto?: number;
}
interface LegacyQuizLike {
  questions?: LegacyQuestionLike[];
  composition?: LegacyCompositionLike | null;
}

/**
 * Convierte un quiz viejo (preguntas planas + composición de pool) al modelo de
 * posiciones: N posiciones FIJAS, cada una con una sola variante que referencia
 * la pregunta del banco por id. El puntaje de la posición es el `points` de la
 * pregunta, o el `pesoPorDefecto` de la composición, o 1.
 *
 * IDEMPOTENTE: si la entrada ya está en el modelo de posiciones, sólo la
 * normaliza (no re-migra). Por eso `migrar(migrar(x)) === migrar(x)`.
 */
export function migrarCuestionario(raw: unknown): CuestionarioPosiciones {
  if (tienePosiciones(raw)) return parseCuestionario(raw);

  const legacy = (isObject(raw) ? raw : {}) as LegacyQuizLike;
  const pesoDefecto =
    finiteNumber(legacy.composition?.pesoPorDefecto) !== undefined &&
    (legacy.composition!.pesoPorDefecto as number) > 0
      ? (legacy.composition!.pesoPorDefecto as number)
      : 1;
  const questions = Array.isArray(legacy.questions) ? legacy.questions : [];

  const posiciones: Posicion[] = questions.map((q, i) => {
    const points = finiteNumber(q?.points);
    return {
      numero: i + 1,
      tipo: "fijo",
      temaPrincipal: TEMA_GENERAL.id,
      puntaje: points !== undefined && points > 0 ? points : pesoDefecto,
      variantes: [{ letra: "a", origen: { origen: "banco", questionId: q?.id ?? "" } }],
    };
  });

  return { version: POSICIONES_SCHEMA_VERSION, temas: [{ ...TEMA_GENERAL }], posiciones };
}

// ───────────────────────────────────────────────────────────────
// Validación
// ───────────────────────────────────────────────────────────────

export interface ResultadoValidacion {
  ok: boolean;
  errores: string[];
}

/**
 * Valida un cuestionario CRUDO (pre-normalización), reportando violaciones del
 * modelo del plan. En particular rechaza variantes de una misma posición que NO
 * comparten tema/puntaje (la regla del plan: el puntaje y el tema son de la
 * posición). `parseCuestionario` en cambio NORMALIZA (hoist) los casos
 * uniformes; usar esta función para decidir si aceptar o rechazar la entrada.
 */
export function validarCuestionario(raw: unknown): ResultadoValidacion {
  const errores: string[] = [];
  if (!isObject(raw)) {
    return { ok: false, errores: ["cuestionario no es un objeto"] };
  }

  const temasRaw = asArray(raw.temas).map(parseTema);
  const temaIds = new Set<string>([TEMA_GENERAL.id]);
  for (const t of temasRaw) {
    if (temaIds.has(t.id) && t.id !== TEMA_GENERAL.id) {
      errores.push(`tema duplicado: ${t.id}`);
    }
    temaIds.add(t.id);
  }

  const posicionesRaw = asArray(raw.posiciones);
  if (posicionesRaw.length === 0) {
    errores.push("el cuestionario no tiene posiciones");
  }

  posicionesRaw.forEach((pRaw, idx) => {
    const numero = idx + 1;
    const p = isObject(pRaw) ? pRaw : {};
    const variantesRaw = asArray(p.variantes);

    if (variantesRaw.length === 0) {
      errores.push(`posición ${numero}: sin variantes`);
    }

    const tipo = parseTipo(p.tipo);
    if (tipo === "fijo" && variantesRaw.length > 1) {
      errores.push(`posición ${numero}: tipo "fijo" debe tener exactamente una variante`);
    }

    // Letras únicas y no vacías.
    const letras = new Set<string>();
    variantesRaw.forEach((v, i) => {
      const letra = nonEmptyString(isObject(v) ? v.letra : undefined) ?? letraPorIndice(i);
      if (letras.has(letra)) errores.push(`posición ${numero}: letra de variante duplicada "${letra}"`);
      letras.add(letra);
    });

    // Puntaje compartido por todas las variantes (regla del plan).
    const puntajesVariante = variantesRaw
      .map((v) => (isObject(v) ? finiteNumber(v.puntaje) : undefined))
      .filter((v): v is number => v !== undefined);
    if (puntajesVariante.length > 0 && !puntajesVariante.every((x) => x === puntajesVariante[0])) {
      errores.push(`posición ${numero}: las variantes no comparten puntaje`);
    }
    const puntajePos = finiteNumber(p.puntaje);
    if (
      puntajePos !== undefined &&
      puntajesVariante.length > 0 &&
      puntajesVariante.some((x) => x !== puntajePos)
    ) {
      errores.push(`posición ${numero}: el puntaje de una variante no coincide con el de la posición`);
    }
    const puntajeEfectivo = puntajePos ?? puntajesVariante[0];
    if (puntajeEfectivo !== undefined && puntajeEfectivo < 0) {
      errores.push(`posición ${numero}: puntaje negativo`);
    }

    // Tema compartido por todas las variantes (regla del plan).
    const temasVariante = variantesRaw
      .map((v) => (isObject(v) ? nonEmptyString(v.tema) : undefined))
      .filter((v): v is string => v !== undefined);
    if (temasVariante.length > 0 && !temasVariante.every((x) => x === temasVariante[0])) {
      errores.push(`posición ${numero}: las variantes no comparten tema`);
    }
    const temaPrincipal =
      nonEmptyString(p.temaPrincipal) ?? temasVariante[0] ?? TEMA_GENERAL.id;
    if (nonEmptyString(p.temaPrincipal) && temasVariante.some((x) => x !== nonEmptyString(p.temaPrincipal))) {
      errores.push(`posición ${numero}: el tema de una variante no coincide con el de la posición`);
    }
    if (!temaIds.has(temaPrincipal)) {
      errores.push(`posición ${numero}: temaPrincipal "${temaPrincipal}" no está declarado`);
    }
    const temaSecundario = nonEmptyString(p.temaSecundario);
    if (temaSecundario !== undefined) {
      if (!temaIds.has(temaSecundario)) {
        errores.push(`posición ${numero}: temaSecundario "${temaSecundario}" no está declarado`);
      }
      if (temaSecundario === temaPrincipal) {
        errores.push(`posición ${numero}: temaSecundario igual a temaPrincipal`);
      }
    }
  });

  return { ok: errores.length === 0, errores };
}
