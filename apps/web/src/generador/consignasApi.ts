import { ApiError, apiGet } from "../lib/api";

export type Subject = "matematicas" | "fisica" | "quimica" | "economia" | "geografia" | "lengua_espanola" | "lengua_inglesa";

export type Consigna = {
  limits: Record<string, unknown> | null;
  enunciado: unknown | null;
  meta: Record<string, unknown> | null;
};

type ConsignaApiPayload = {
  topic: string;
  subject: Subject;
  limits: unknown | null;
  enunciado: unknown | null;
  meta: unknown | null;
};

const consignaBySubjectByTopic = new Map<Subject, Map<string, Consigna>>();
const topicsBySubject = new Map<Subject, string[]>();
const pendingBySubjectByTopic = new Map<Subject, Map<string, Promise<void>>>();

const getSubjectTopicMap = (subject: Subject): Map<string, Consigna> => {
  const current = consignaBySubjectByTopic.get(subject);
  if (current) return current;
  const created = new Map<string, Consigna>();
  consignaBySubjectByTopic.set(subject, created);
  return created;
};

const getPendingMap = (subject: Subject): Map<string, Promise<void>> => {
  const current = pendingBySubjectByTopic.get(subject);
  if (current) return current;
  const created = new Map<string, Promise<void>>();
  pendingBySubjectByTopic.set(subject, created);
  return created;
};

const normalizeObjectOrNull = (value: unknown): Record<string, unknown> | null => {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  return value as Record<string, unknown>;
};

const normalizeConsigna = (payload: ConsignaApiPayload): Consigna => ({
  limits: normalizeObjectOrNull(payload.limits),
  enunciado: payload.enunciado ?? null,
  meta: normalizeObjectOrNull(payload.meta),
});

const getOrCreateConsigna = (subject: Subject, topic: string): Consigna => {
  const byTopic = getSubjectTopicMap(subject);
  const current = byTopic.get(topic);
  if (current) return current;
  const created: Consigna = { limits: null, enunciado: null, meta: null };
  byTopic.set(topic, created);
  return created;
};

export const getConsignaSync = (subject: Subject, topic: string): Consigna => getOrCreateConsigna(subject, topic);

export async function listarTemas(subject: Subject): Promise<string[]> {
  const cached = topicsBySubject.get(subject);
  if (cached) return cached;

  const data = await apiGet<unknown>(`/api/consignas/${subject}`);
  if (!Array.isArray(data)) {
    throw new Error(`El listado de temas para ${subject} devolvió un formato inválido.`);
  }

  const temas = data.filter((item): item is string => typeof item === "string" && item.length > 0);
  topicsBySubject.set(subject, temas);
  return temas;
}

export async function precargarConsigna(subject: Subject, topic: string): Promise<void> {
  const pendingByTopic = getPendingMap(subject);
  const pending = pendingByTopic.get(topic);
  if (pending) {
    await pending;
    return;
  }

  const promise = (async () => {
    let data: ConsignaApiPayload;
    try {
      data = await apiGet<ConsignaApiPayload>(`/api/consignas/${subject}/${topic}/v2`);
    } catch (error) {
      if (error instanceof ApiError && error.status === 404) {
        throw new Error(`No se encontró consigna para el tema ${topic} (404).`);
      }
      if (error instanceof SyntaxError) {
        throw new Error(`La respuesta de consignas para ${topic} no es JSON válido.`);
      }
      throw error;
    }

    if (!data || typeof data !== "object" || Array.isArray(data)) {
      throw new Error(`El endpoint de consignas devolvió un formato inválido para ${topic}.`);
    }

    const consigna = normalizeConsigna(data);
    const target = getOrCreateConsigna(subject, topic);
    target.limits = consigna.limits;
    target.enunciado = consigna.enunciado;
    target.meta = consigna.meta;
  })();

  pendingByTopic.set(topic, promise);
  try {
    await promise;
  } finally {
    pendingByTopic.delete(topic);
  }
}
