/**
 * F5-01 — Cola offline de respuestas del intento (outbox).
 *
 * Regla del plan (ronda 6 K4): "es problema de la conexión de la escuela, no del
 * alumno". Cada respuesta se registra en esta cola (persistida en localStorage) y
 * se intenta sincronizar contra `POST /api/quiz-attempts/:id/answer`. Si la red
 * está caída, la respuesta queda encolada y la UI sigue; al reconectar (evento
 * `online`) o al "Entregar" se drena la cola.
 *
 * Idempotencia en DOS niveles:
 *  1. En la cola: las entradas se deduplican por (attemptId, questionId) — volver
 *     a responder la misma posición reemplaza la entrada pendiente, no acumula.
 *  2. En el backend: el endpoint hace upsert de `answers[questionId]`, así que
 *     reenviar la misma entrada (reintento) no duplica.
 *
 * El módulo es agnóstico del transporte: `flush(send)` recibe la función que
 * realmente envía (en producción, un wrapper de `apiPost`), lo que lo hace
 * testeable sin red. Las entradas que fallan al enviar se conservan para el
 * próximo intento; las que el backend rechaza de forma TERMINAL (409: intento ya
 * entregado) se descartan para no reintentar para siempre.
 */

const STORAGE_KEY = "vb:attempt-outbox:v1";

export interface OutboxItem {
  attemptId: string;
  questionId: string;
  response: string | string[];
  /** Marca de tiempo del cliente (ms). Para depurar/ordenar; no afecta idempotencia. */
  clientTs: number;
}

/** Resultado de un envío: `ok` quita el ítem; `terminal` también lo quita (no reintentar). */
export interface SendResult {
  ok: boolean;
  /** El backend rechazó de forma definitiva (p. ej. 409): descartar sin reintentar. */
  terminal?: boolean;
}

export type SendFn = (item: OutboxItem) => Promise<SendResult>;

function readStorage(): OutboxItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as OutboxItem[]) : [];
  } catch {
    return [];
  }
}

function writeStorage(items: OutboxItem[]): void {
  try {
    if (items.length === 0) localStorage.removeItem(STORAGE_KEY);
    else localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    /* almacenamiento lleno / no disponible: la cola vive en memoria de la sesión */
  }
}

/** Clave de idempotencia de la cola: identifica unívocamente una respuesta. */
function sameSlot(a: OutboxItem, attemptId: string, questionId: string): boolean {
  return a.attemptId === attemptId && a.questionId === questionId;
}

/**
 * Registra (o reemplaza) la respuesta de una posición. Dedup por
 * (attemptId, questionId): si ya había una pendiente para esa posición, se
 * sustituye por la más reciente.
 */
export function recordAnswer(
  attemptId: string,
  questionId: string,
  response: string | string[],
  clientTs: number = Date.now(),
): void {
  const items = readStorage().filter((it) => !sameSlot(it, attemptId, questionId));
  items.push({ attemptId, questionId, response, clientTs });
  writeStorage(items);
}

/** Respuestas pendientes (todas, o sólo las de un intento). */
export function pending(attemptId?: string): OutboxItem[] {
  const items = readStorage();
  return attemptId ? items.filter((it) => it.attemptId === attemptId) : items;
}

/** ¿Hay respuestas pendientes de sincronizar? */
export function hasPending(attemptId?: string): boolean {
  return pending(attemptId).length > 0;
}

/** Descarta todas las pendientes de un intento (p. ej. tras entregar). */
export function clearAttempt(attemptId: string): void {
  writeStorage(readStorage().filter((it) => it.attemptId !== attemptId));
}

/**
 * Drena la cola enviando cada pendiente con `send`. Las que envían bien (o son
 * rechazadas de forma terminal) se quitan; las que fallan se conservan. Devuelve
 * el conteo de enviadas / falladas. Procesa secuencialmente para no martillar la
 * red de la escuela y mantener el orden.
 */
export async function flush(
  send: SendFn,
  attemptId?: string,
): Promise<{ sent: number; failed: number; remaining: number }> {
  const all = readStorage();
  const target = attemptId ? all.filter((it) => it.attemptId === attemptId) : all;
  let sent = 0;
  let failed = 0;
  const enviadasOk = new Set<OutboxItem>();

  for (const item of target) {
    try {
      const result = await send(item);
      if (result.ok || result.terminal) {
        enviadasOk.add(item);
        if (result.ok) sent += 1;
      } else {
        failed += 1;
      }
    } catch {
      failed += 1;
    }
  }

  // Releemos del storage (pudo cambiar durante el flush) y quitamos las resueltas
  // por identidad de slot.
  const resueltas = new Set(
    [...enviadasOk].map((it) => `${it.attemptId}::${it.questionId}`),
  );
  const restantes = readStorage().filter(
    (it) => !resueltas.has(`${it.attemptId}::${it.questionId}`),
  );
  writeStorage(restantes);

  return {
    sent,
    failed,
    remaining: attemptId
      ? restantes.filter((it) => it.attemptId === attemptId).length
      : restantes.length,
  };
}
