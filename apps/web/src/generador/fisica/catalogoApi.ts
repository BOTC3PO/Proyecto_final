import { ApiError, apiGet } from "../../lib/api";

type CatalogoTemaFisica = {
  enunciado: Record<string, unknown> | null;
  limits: Record<string, unknown> | null;
};

const catalogosPorTema = new Map<string, CatalogoTemaFisica>();
const pendingPorTema = new Map<string, Promise<void>>();
let temasDisponibles: string[] | null = null;

const getOrCreateTema = (tema: string): CatalogoTemaFisica => {
  const actual = catalogosPorTema.get(tema);
  if (actual) return actual;
  const nuevo: CatalogoTemaFisica = { enunciado: null, limits: null };
  catalogosPorTema.set(tema, nuevo);
  return nuevo;
};

export const getCatalogoTemaFisicaSync = (tema: string): CatalogoTemaFisica => getOrCreateTema(tema);

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

    const payload = data as { enunciado?: unknown; limits?: unknown };
    if (payload.limits !== null && payload.limits !== undefined) {
      if (typeof payload.limits !== "object" || Array.isArray(payload.limits)) {
        throw new Error(`El catálogo de límites es inválido para ${tema}.`);
      }
    }
    if (payload.enunciado !== null && payload.enunciado !== undefined) {
      if (typeof payload.enunciado !== "object" || Array.isArray(payload.enunciado)) {
        throw new Error(`El catálogo de enunciados es inválido para ${tema}.`);
      }
    }

    const target = getOrCreateTema(tema);
    target.limits = (payload.limits ?? null) as Record<string, unknown> | null;
    target.enunciado = (payload.enunciado ?? null) as Record<string, unknown> | null;
  })();

  pendingPorTema.set(tema, pending);

  try {
    await pending;
  } finally {
    pendingPorTema.delete(tema);
  }
}
