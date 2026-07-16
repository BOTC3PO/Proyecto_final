/**
 * Etapa 1 (Tiza — preguntas nativas) — Modelo "cuestionario por preguntas".
 *
 * Reemplaza, para los cuestionarios que lo adopten, el par
 * `quiz-composition.ts` (pool simple, sin repetición) por un modelo que
 * distingue preguntas OBLIGATORIAS (entran siempre) de preguntas de
 * RELLENO (pueden repetirse hasta `maxRepeticiones` veces para llenar los
 * slots que sobran cuando `cantidadGlobal` excede la cantidad de
 * preguntas disponibles).
 *
 * Es un schema INDEPENDIENTE de `posiciones.ts` (WO-2/WO-14): ese sigue
 * sirviendo a los cuestionarios que ya lo usan (o no usan — está
 * huérfano de runtime, ver `sorteo.ts`). Este archivo NO lo modifica ni
 * lo reemplaza; conviven. La identidad de "alternativas de redacción" de
 * una misma pregunta ya es nativa del DSL (`enunciados:` + `resorteo`
 * dentro de la plantilla VBLang) — una `PreguntaQuiz` acá es una unidad
 * atómica para el sorteo; sus alternativas internas no cuentan aparte
 * para `maxRepeticiones`.
 *
 * Lógica pura y determinística, SIN imports salvo el PRNG y los tipos que
 * se reusan explícitamente de `sorteo.ts`/`posiciones.ts` (mismo patrón
 * que `sorteo.ts` reusa `posiciones.ts`). Port byte a byte de
 * `api/src/lib/quiz-preguntas.ts` (sólo difieren las líneas de import).
 * Cualquier cambio acá DEBE reflejarse allá.
 */

import { DeterministicPrng } from "../../generadoresV2/core/prng";
import type { Dificultad } from "./posiciones";
import { coerceDificultad } from "./posiciones";
import type { ContextoSorteo, PoliticaSorteo } from "./sorteo";

/** Versión del schema embebido en `settings.preguntas`. Independiente de
 *  `POSICIONES_SCHEMA_VERSION` (son modelos distintos que conviven). */
export const PREGUNTAS_SCHEMA_VERSION = 1 as const;

export type TipoPregunta = "obligatoria" | "relleno";

export const TIPOS_PREGUNTA_VALIDOS: TipoPregunta[] = ["obligatoria", "relleno"];

export interface PreguntaQuiz {
  plantillaId: string;
  plantillaVersion?: number;
  tipo: TipoPregunta;
  /** Sólo aplica si `tipo === "relleno"`. Cuántas veces puede ocupar un
   *  slot del cuestionario. `undefined` = sin límite propio (el único
   *  tope es el límite global del cuestionario, no uno explícito de esta
   *  pregunta). */
  maxRepeticiones?: number;
  /** Sólo aplica si `tipo === "relleno"`. Agrupa preguntas intercambiables;
   *  el sorteo llena cada pool por separado. Preguntas de relleno SIN
   *  `poolId` forman, entre ellas, su propia pool implícita (ver
   *  `agruparPorPool` más abajo). */
  poolId?: string;
  puntaje?: number;
  dificultad?: Dificultad;
}

/** Tamaño explícito de una lista (pool) de relleno — reemplaza, para esa
 *  pool puntual, el reparto proporcional automático de `repartirSlotsPorPool`
 *  por un número que el docente fija a mano. Ver `CuestionarioPreguntas.listas`. */
export interface ListaRelleno {
  /** Coincide con el `poolId` de sus preguntas de relleno miembro, o
   *  `POOL_SIN_ID` para fijarle cantidad a la pool implícita (relleno sin
   *  `poolId`). */
  poolId: string;
  /** Cuántos puestos ocupa esta lista en el cuestionario (sorteados de
   *  entre sus preguntas, con repetición acotada por `maxRepeticiones`
   *  igual que hoy). */
  cantidad: number;
}

export interface CuestionarioPreguntas {
  version: typeof PREGUNTAS_SCHEMA_VERSION;
  /** Si es `false`, el cuestionario NO sortea: el alumno ve TODAS las
   *  preguntas (obligatorias + relleno) una vez cada una, en el orden
   *  declarado, ignorando `cantidadGlobal` y `listas` por completo. Ausente
   *  (quizzes ya persistidos antes de esta feature) equivale a `true` —
   *  ver `parseCuestionarioPreguntas` y los consumidores, que tratan
   *  `undefined` como sorteo activo. */
  sorteoActivo?: boolean;
  /** Cuántas preguntas ve el alumno en total (obligatorias + relleno).
   *  Ignorado si `sorteoActivo === false`. Si `listas` está presente, este
   *  valor es DERIVADO (obligatorias + suma de `listas[].cantidad`) — ver
   *  `parseCuestionarioPreguntas`. */
  cantidadGlobal: number;
  /** Cantidad explícita de puestos por pool de relleno, para reemplazar el
   *  reparto proporcional automático. AUSENTE o vacío = comportamiento
   *  previo a esta feature (reparto proporcional vía
   *  `repartirSlotsPorPool`). Si está presente, DEBE cubrir exactamente las
   *  pools de relleno que existen entre `preguntas` (ver
   *  `validarCuestionarioPreguntas`) — no admite cobertura parcial, para no
   *  tener dos números (`cantidadGlobal` y el reparto) que puedan
   *  desincronizarse. */
  listas?: ListaRelleno[];
  preguntas: PreguntaQuiz[];
}

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

function parseTipoPregunta(v: unknown): TipoPregunta {
  return v === "relleno" ? "relleno" : "obligatoria";
}

/** ¿El objeto crudo ya está en el modelo de preguntas? (tiene `preguntas`,
 *  el schema nuevo — distinto de `composition`/`posiciones`). */
export function tienePreguntas(raw: unknown): boolean {
  return isObject(raw) && Array.isArray((raw as Record<string, unknown>).preguntas);
}

function parsePreguntaQuiz(raw: unknown): PreguntaQuiz {
  const r = isObject(raw) ? raw : {};
  const tipo = parseTipoPregunta(r.tipo);
  const out: PreguntaQuiz = {
    plantillaId: nonEmptyString(r.plantillaId) ?? "",
    tipo,
  };
  const version = finiteNumber(r.plantillaVersion);
  if (version !== undefined) out.plantillaVersion = version;
  if (tipo === "relleno") {
    const maxRep = finiteNumber(r.maxRepeticiones);
    if (maxRep !== undefined && maxRep > 0) out.maxRepeticiones = Math.floor(maxRep);
    const poolId = nonEmptyString(r.poolId);
    if (poolId !== undefined) out.poolId = poolId;
  }
  const puntaje = finiteNumber(r.puntaje);
  if (puntaje !== undefined) out.puntaje = puntaje;
  const dificultad = coerceDificultad(r.dificultad);
  if (dificultad !== undefined) out.dificultad = dificultad;
  return out;
}

function parseListaRelleno(raw: unknown): ListaRelleno | null {
  const r = isObject(raw) ? raw : {};
  const poolId = nonEmptyString(r.poolId);
  const cantidad = finiteNumber(r.cantidad);
  if (poolId === undefined || cantidad === undefined || cantidad < 0) return null;
  return { poolId, cantidad: Math.floor(cantidad) };
}

/**
 * Deserializa/normaliza un cuestionario por preguntas desde JSON crudo.
 * `parseCuestionarioPreguntas(JSON.parse(JSON.stringify(c)))` reconstruye
 * un `CuestionarioPreguntas` canónico equivalente (round-trip), mismo
 * criterio que `parseCuestionario` en `posiciones.ts`.
 */
export function parseCuestionarioPreguntas(raw: unknown): CuestionarioPreguntas {
  const r = isObject(raw) ? raw : {};
  const cantidadGlobalRaw = finiteNumber(r.cantidadGlobal);
  let cantidadGlobal =
    cantidadGlobalRaw !== undefined && cantidadGlobalRaw > 0 ? Math.floor(cantidadGlobalRaw) : 0;
  const sorteoActivo = r.sorteoActivo === false ? false : true;
  const preguntas = asArray(r.preguntas).map(parsePreguntaQuiz);
  const listasParsed = asArray(r.listas)
    .map(parseListaRelleno)
    .filter((l): l is ListaRelleno => l !== null);
  const listas = listasParsed.length > 0 ? listasParsed : undefined;
  // Con `listas` presente, `cantidadGlobal` es DERIVADO (obligatorias + suma
  // de puestos declarados) — evita que quede desincronizado del reparto real.
  if (listas !== undefined) {
    const obligatorias = preguntas.filter((p) => p.tipo === "obligatoria").length;
    cantidadGlobal = obligatorias + listas.reduce((acc, l) => acc + l.cantidad, 0);
  }
  const out: CuestionarioPreguntas = {
    version: PREGUNTAS_SCHEMA_VERSION,
    sorteoActivo,
    cantidadGlobal,
    preguntas,
  };
  if (listas !== undefined) out.listas = listas;
  return out;
}

// ───────────────────────────────────────────────────────────────
// Reparto de slots de relleno entre pools
// ───────────────────────────────────────────────────────────────

/** Agrupa las preguntas de relleno por `poolId`. Las que NO tienen
 *  `poolId` forman su propia pool implícita bajo la clave
 *  `POOL_SIN_ID` — conviven con las pools nombradas y participan del
 *  mismo reparto proporcional si hay más de una pool en total (ver
 *  `repartirSlotsPorPool`). */
export const POOL_SIN_ID = "__sin_pool__";

export function agruparPorPool(relleno: PreguntaQuiz[]): Map<string, PreguntaQuiz[]> {
  const pools = new Map<string, PreguntaQuiz[]>();
  for (const p of relleno) {
    const key = p.poolId ?? POOL_SIN_ID;
    const arr = pools.get(key);
    if (arr) arr.push(p);
    else pools.set(key, [p]);
  }
  return pools;
}

/**
 * Decide cuántos slots de relleno le tocan a cada pool.
 *
 * Regla de producto (documentada, no improvisada — Etapa 1 Tarea 1.2):
 *  - Una sola pool (con o sin `poolId`) → se lleva TODOS los slots de
 *    relleno.
 *  - Varias pools → reparto PROPORCIONAL a la cantidad de preguntas que
 *    tiene cada pool (`preguntas.length` de esa pool sobre el total de
 *    preguntas de relleno), con el método del mayor resto para que la
 *    suma de los repartos dé exacto `slotsTotales` sin fracciones. Los
 *    empates de resto se resuelven por orden de PRIMERA APARICIÓN de la
 *    pool en el array de preguntas (determinista, sin PRNG: el reparto
 *    de CUÁNTOS slots le tocan a cada pool es una decisión estructural,
 *    no aleatoria — el PRNG sólo decide QUÉ pregunta puntual sale
 *    dentro de cada pool, ver `elegirRelleno`).
 */
export function repartirSlotsPorPool(
  relleno: PreguntaQuiz[],
  slotsTotales: number,
): Map<string, number> {
  const pools = agruparPorPool(relleno);
  const poolIds = [...pools.keys()];
  const resultado = new Map<string, number>();
  if (slotsTotales <= 0 || poolIds.length === 0) {
    for (const id of poolIds) resultado.set(id, 0);
    return resultado;
  }
  if (poolIds.length === 1) {
    resultado.set(poolIds[0], slotsTotales);
    return resultado;
  }

  const totalPreguntas = relleno.length;
  const raw = poolIds.map((id) => (pools.get(id)!.length / totalPreguntas) * slotsTotales);
  const base = raw.map((n) => Math.floor(n));
  const asignados = base.reduce((a, b) => a + b, 0);
  const restante = slotsTotales - asignados;

  const fracciones = raw
    .map((n, i) => ({ i, frac: n - base[i] }))
    .sort((a, b) => b.frac - a.frac || a.i - b.i);

  const numConResto = Math.min(restante, fracciones.length);
  for (let k = 0; k < numConResto; k += 1) {
    base[fracciones[k].i] += 1;
  }

  poolIds.forEach((id, i) => resultado.set(id, base[i]));
  return resultado;
}

// ───────────────────────────────────────────────────────────────
// Validación
// ───────────────────────────────────────────────────────────────

export interface ResultadoValidacionPreguntas {
  ok: boolean;
  errores: string[];
}

/**
 * Decide cuántos slots le tocan a cada pool de relleno: si `listas` cubre
 * EXACTAMENTE las pools presentes en `relleno` (mismos poolIds, ni de más
 * ni de menos), usa esos valores tal cual (fijados a mano por el docente,
 * ver `CuestionarioPreguntas.listas`); si no, cae al reparto proporcional
 * automático de siempre (`repartirSlotsPorPool`). Cobertura parcial (algunas
 * pools declaradas, otras no) se trata como "no cubre" — vuelve al reparto
 * proporcional para TODAS, evitando mezclar dos criterios de reparto en el
 * mismo cuestionario.
 */
function resolverSlotsPorPool(
  relleno: PreguntaQuiz[],
  slotsTotales: number,
  listas: ListaRelleno[] | undefined,
): Map<string, number> {
  const pools = agruparPorPool(relleno);
  if (listas && listas.length > 0) {
    const poolsReales = new Set(pools.keys());
    const poolsDeclaradas = new Set(listas.map((l) => l.poolId));
    const cubreExacto =
      poolsReales.size === poolsDeclaradas.size &&
      [...poolsReales].every((id) => poolsDeclaradas.has(id));
    if (cubreExacto) {
      return new Map(listas.map((l) => [l.poolId, l.cantidad]));
    }
  }
  return repartirSlotsPorPool(relleno, slotsTotales);
}

/**
 * Valida que `cuestionario` sea sorteable:
 *  - Si `sorteoActivo === false`, no hay nada que sortear ni validar:
 *    todas las preguntas entran siempre, `cantidadGlobal`/`listas` se
 *    ignoran.
 *  - `cantidadGlobal >= 1`.
 *  - Las obligatorias no exceden `cantidadGlobal`.
 *  - Si sobran slots para relleno, tiene que haber preguntas de relleno.
 *  - Si `listas` está presente, DEBE cubrir exactamente las pools de
 *    relleno existentes (ni faltar ninguna ni sobrar una declarada sin
 *    preguntas) — cobertura parcial es un error explícito, no un fallback
 *    silencioso.
 *  - Para cada pool de relleno, la capacidad (suma de `maxRepeticiones`;
 *    una pregunta SIN `maxRepeticiones` aporta capacidad ilimitada) tiene
 *    que alcanzar los slots que le tocan (fijados en `listas` o repartidos
 *    proporcionalmente).
 *
 * NO lanza — devuelve un resultado con `errores` legibles. El llamador
 * (`sortearCuestionarioPreguntas`) es quien decide qué hacer con un
 * resultado inválido (ver comentario en esa función): esta función sólo
 * diagnostica.
 */
export function validarCuestionarioPreguntas(
  cuestionario: CuestionarioPreguntas,
): ResultadoValidacionPreguntas {
  if (cuestionario.sorteoActivo === false) {
    return { ok: true, errores: [] };
  }

  const errores: string[] = [];
  if (cuestionario.cantidadGlobal < 1) {
    errores.push("cantidadGlobal debe ser al menos 1");
  }

  const obligatorias = cuestionario.preguntas.filter((p) => p.tipo === "obligatoria");
  const relleno = cuestionario.preguntas.filter((p) => p.tipo === "relleno");

  if (obligatorias.length > cuestionario.cantidadGlobal) {
    errores.push(
      `cantidadGlobal (${cuestionario.cantidadGlobal}) es menor a la cantidad de preguntas obligatorias (${obligatorias.length})`,
    );
    return { ok: false, errores };
  }

  const slotsRelleno = cuestionario.cantidadGlobal - obligatorias.length;
  if (slotsRelleno <= 0) {
    return { ok: errores.length === 0, errores };
  }

  if (relleno.length === 0) {
    errores.push(
      `faltan ${slotsRelleno} preguntas de relleno para completar cantidadGlobal (no hay ninguna definida)`,
    );
    return { ok: false, errores };
  }

  const pools = agruparPorPool(relleno);
  if (cuestionario.listas && cuestionario.listas.length > 0) {
    const poolsReales = new Set(pools.keys());
    const poolsDeclaradas = new Set(cuestionario.listas.map((l) => l.poolId));
    for (const id of poolsReales) {
      if (!poolsDeclaradas.has(id)) {
        const nombre = id === POOL_SIN_ID ? "(sin poolId)" : id;
        errores.push(`falta declarar la cantidad de puestos de la lista "${nombre}"`);
      }
    }
    for (const id of poolsDeclaradas) {
      if (!poolsReales.has(id)) {
        errores.push(`la lista "${id}" no tiene preguntas de relleno asociadas`);
      }
    }
    if (errores.length > 0) return { ok: false, errores };
  }

  const slotsPorPool = resolverSlotsPorPool(relleno, slotsRelleno, cuestionario.listas);
  for (const [poolId, preguntasPool] of pools) {
    const slots = slotsPorPool.get(poolId) ?? 0;
    if (slots === 0) continue;
    const capacidad = preguntasPool.reduce(
      (acc, p) => (p.maxRepeticiones === undefined ? Infinity : acc + p.maxRepeticiones),
      0,
    );
    if (capacidad < slots) {
      const nombrePool = poolId === POOL_SIN_ID ? "(sin poolId)" : poolId;
      errores.push(
        `los límites de la pool "${nombrePool}" no alcanzan para llenar ${slots} pregunta(s) (capacidad máxima: ${capacidad})`,
      );
    }
  }

  return { ok: errores.length === 0, errores };
}

// ───────────────────────────────────────────────────────────────
// Sorteo
// ───────────────────────────────────────────────────────────────

/** Slot final del cuestionario ya sorteado para un alumno. */
export interface SlotPreguntaElegida {
  /** 0-based, orden de presentación: primero las obligatorias (en el
   *  orden declarado), después el relleno (en orden de llenado). */
  indice: number;
  tipo: TipoPregunta;
  pregunta: PreguntaQuiz;
  /** Seed determinista de ESTE slot. Doble uso:
   *   (a) content — el consumidor lo pasa como seed de materialización de
   *       la plantilla (`generate(compiled, { seed })`), para que el
   *       contenido concreto (valores, redacción) varíe por alumno/slot
   *       aunque sea la misma `plantillaId` (anticopia). Se genera para
   *       TODOS los slots, obligatorios incluidos.
   *   (b) selection — en relleno, el mismo seed también desempata QUÉ
   *       pregunta de la pool ocupa el slot (`elegirRelleno`). Las
   *       obligatorias no usan esta segunda función (no hay elección),
   *       pero sí necesitan (a). Auditable/reproducible. */
  seed: string;
}

export interface SorteoPreguntasResultado {
  alumnoId: string;
  quizId: string;
  intento: number;
  politica: PoliticaSorteo;
  slots: SlotPreguntaElegida[];
}

/** Seed determinista de un slot (obligatorio o relleno) — ver doc de
 *  `SlotPreguntaElegida.seed`. Mismo criterio que `seedPosicion` de
 *  `sorteo.ts`: el `intento` va al FRENTE del seed (bajo `por_intento`)
 *  porque el hash rodante del PRNG amplifica diferencias tempranas. */
function seedSlot(
  quizId: string,
  alumnoId: string,
  slotIndex: number,
  politica: PoliticaSorteo,
  intento: number,
): string {
  const base = `${quizId}::${alumnoId}::preg-slot${slotIndex}`;
  return politica === "por_intento" ? `i${intento}::${base}` : base;
}

function clavePregunta(p: PreguntaQuiz): string {
  return p.plantillaVersion !== undefined ? `${p.plantillaId}@${p.plantillaVersion}` : p.plantillaId;
}

/**
 * Elige, para UNA pool de relleno, las `slots` preguntas (con
 * repetición permitida hasta `maxRepeticiones`) que la llenan.
 *
 * Regla — generalización directa de `elegirVarianteSinRepeticion` de
 * `sorteo.ts`: en cada slot se filtran las preguntas que NO agotaron su
 * `maxRepeticiones` (sin límite propio = nunca se filtran), se toman las
 * MENOS usadas hasta ahora entre las disponibles, y el empate se
 * desempata por PRNG determinista por seed. Esto reparte las
 * repeticiones lo más parejo posible en vez de agotar siempre la misma
 * pregunta primero, y es reproducible.
 *
 * Asume que `validarCuestionarioPreguntas` ya confirmó que la pool tiene
 * capacidad suficiente — no vuelve a validar acá (evita side-channel de
 * validar dos veces con distinta lógica).
 */
export function elegirRelleno(
  preguntas: PreguntaQuiz[],
  slots: number,
  seedBase: (slotIndex: number) => string,
): PreguntaQuiz[] {
  const usados = new Map<string, number>();
  const elegidas: PreguntaQuiz[] = [];
  for (let i = 0; i < slots; i += 1) {
    const disponibles = preguntas.filter((p) => {
      const cap = p.maxRepeticiones;
      if (cap === undefined) return true;
      return (usados.get(clavePregunta(p)) ?? 0) < cap;
    });
    if (disponibles.length === 0) {
      // No debería pasar si la validación previa fue respetada; se
      // documenta como invariante violado en vez de fallar en silencio.
      throw new Error(
        "elegirRelleno: no quedan preguntas disponibles para llenar el slot — la pool no tenía capacidad suficiente (¿se saltó validarCuestionarioPreguntas?)",
      );
    }
    let min = Infinity;
    for (const p of disponibles) {
      const u = usados.get(clavePregunta(p)) ?? 0;
      if (u < min) min = u;
    }
    const candidatas = disponibles.filter((p) => (usados.get(clavePregunta(p)) ?? 0) === min);
    const elegida =
      candidatas.length === 1
        ? candidatas[0]
        : candidatas[new DeterministicPrng(seedBase(i)).int(0, candidatas.length - 1)];
    usados.set(clavePregunta(elegida), (usados.get(clavePregunta(elegida)) ?? 0) + 1);
    elegidas.push(elegida);
  }
  return elegidas;
}

/**
 * Sortea el cuestionario completo para un alumno: todas las obligatorias
 * (una vez cada una, en el orden declarado) + los slots de relleno
 * repartidos entre pools (proporcional, o fijo por `listas` si está
 * presente) y elegidos con repetición acotada (`elegirRelleno`). Puro y
 * determinista: mismo `(quizId, alumnoId, politica, intento)` → mismo
 * resultado siempre.
 *
 * Si `sorteoActivo === false`, no sortea nada: devuelve TODAS las
 * preguntas (obligatorias + relleno) una vez cada una, en el orden
 * declarado — `cantidadGlobal`/`listas` no se leen en ese caso.
 *
 * Decisión de manejo de error: si `cuestionario` no es sorteable
 * (`validarCuestionarioPreguntas` devuelve `ok: false`), esta función
 * TIRA un `Error` con los mensajes de validación unidos — no completa
 * con menos preguntas de las pedidas ni falla en silencio. El llamador
 * (`quiz-attempts.ts`) debe validar ANTES de intentar crear el intento
 * si quiere devolver un 4xx prolijo al docente/alumno en vez de un 500;
 * `sortearCuestionarioPreguntas` es la última línea de defensa, no el
 * lugar para UX de error.
 */
export function sortearCuestionarioPreguntas(
  cuestionario: CuestionarioPreguntas,
  ctx: ContextoSorteo,
): SorteoPreguntasResultado {
  const politica = ctx.politica ?? "fijo_por_alumno";
  const intento = Math.max(0, ctx.intento ?? 0);

  if (cuestionario.sorteoActivo === false) {
    const slots: SlotPreguntaElegida[] = cuestionario.preguntas.map((pregunta, i) => ({
      indice: i,
      tipo: pregunta.tipo,
      pregunta,
      seed: seedSlot(ctx.quizId, ctx.alumnoId, i, politica, intento),
    }));
    return { alumnoId: ctx.alumnoId, quizId: ctx.quizId, intento, politica, slots };
  }

  const validacion = validarCuestionarioPreguntas(cuestionario);
  if (!validacion.ok) {
    throw new Error(`cuestionario de preguntas inválido: ${validacion.errores.join("; ")}`);
  }

  const obligatorias = cuestionario.preguntas.filter((p) => p.tipo === "obligatoria");
  const relleno = cuestionario.preguntas.filter((p) => p.tipo === "relleno");
  const slotsRelleno = cuestionario.cantidadGlobal - obligatorias.length;

  const slots: SlotPreguntaElegida[] = obligatorias.map((pregunta, i) => ({
    indice: i,
    tipo: "obligatoria" as const,
    pregunta,
    // Las obligatorias no sortean QUÉ pregunta va (no hay elección), pero
    // sí necesitan un seed determinista para materializar su CONTENIDO.
    seed: seedSlot(ctx.quizId, ctx.alumnoId, i, politica, intento),
  }));

  if (slotsRelleno > 0) {
    const slotsPorPool = resolverSlotsPorPool(relleno, slotsRelleno, cuestionario.listas);
    const pools = agruparPorPool(relleno);
    let slotIndexGlobal = obligatorias.length;
    // Orden determinista entre pools: orden de primera aparición (mismo
    // criterio que `repartirSlotsPorPool`/`agruparPorPool`).
    for (const [poolId, preguntasPool] of pools) {
      const slotsPool = slotsPorPool.get(poolId) ?? 0;
      if (slotsPool === 0) continue;
      const elegidas = elegirRelleno(preguntasPool, slotsPool, (i) =>
        seedSlot(ctx.quizId, ctx.alumnoId, slotIndexGlobal + i, politica, intento),
      );
      elegidas.forEach((pregunta, i) => {
        const globalIdx = slotIndexGlobal + i;
        slots.push({
          indice: globalIdx,
          tipo: "relleno",
          pregunta,
          seed: seedSlot(ctx.quizId, ctx.alumnoId, globalIdx, politica, intento),
        });
      });
      slotIndexGlobal += slotsPool;
    }
  }

  return {
    alumnoId: ctx.alumnoId,
    quizId: ctx.quizId,
    intento,
    politica,
    slots,
  };
}
