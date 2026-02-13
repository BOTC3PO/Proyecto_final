import { ApiError, apiGet } from "../../lib/api";

const limitsPorTema = new Map<string, Record<string, unknown>>();
const pendingPorTema = new Map<string, Promise<void>>();
let temasDisponibles: string[] | null = null;

const getOrCreateTema = (tema: string): Record<string, unknown> => {
  const actual = limitsPorTema.get(tema);
  if (actual) return actual;
  const nuevo: Record<string, unknown> = {};
  limitsPorTema.set(tema, nuevo);
  return nuevo;
};

export const getCatalogoTemaFisicaSync = (tema: string): Record<string, unknown> => getOrCreateTema(tema);

export async function listarTemasFisica(): Promise<string[]> {
  if (temasDisponibles) return temasDisponibles;
  const data = await apiGet<Array<{ id: string } | string>>("/api/consignas/fisica");
  temasDisponibles = data
    .map((item) => (typeof item === "string" ? item : item.id))
    .filter((item): item is string => typeof item === "string" && item.length > 0);
  return temasDisponibles;
}

export async function precargarCatalogoTemaFisica(tema: string): Promise<void> {
  if (pendingPorTema.has(tema)) {
    await pendingPorTema.get(tema);
    return;
  }

  const pending = (async () => {
    let data: unknown;
    try {
      data = await apiGet<unknown>(`/api/consignas/fisica/${tema}`);
    } catch (error) {
      if (error instanceof ApiError && error.status === 404) {
        throw new Error(`No se encontró limits.json para el tema ${tema} (404).`);
      }
      if (error instanceof SyntaxError) {
        throw new Error(`La respuesta de consignas para ${tema} no es JSON válido.`);
      }
      throw error;
    }
    if (!data || typeof data !== "object" || Array.isArray(data)) {
      throw new Error(`El endpoint de consignas devolvió un formato inválido para ${tema}.`);
    }
    const target = getOrCreateTema(tema);
    for (const key of Object.keys(target)) delete target[key];
    Object.assign(target, data as Record<string, unknown>);
  })();

  pendingPorTema.set(tema, pending);

  try {
    await pending;
  } finally {
    pendingPorTema.delete(tema);
  }
}
