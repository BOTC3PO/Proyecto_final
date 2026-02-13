import { ApiError, apiGet } from "../../lib/api";

const limitsPorTema = new Map<string, Record<string, unknown>>();
const pendingPorTema = new Map<string, Promise<void>>();
let temasDisponibles: string[] | null = null;
const temaPorId = new Map<number, string>();

const getOrCreateTema = (tema: string): Record<string, unknown> => {
  const actual = limitsPorTema.get(tema);
  if (actual) return actual;
  const nuevo: Record<string, unknown> = {};
  limitsPorTema.set(tema, nuevo);
  return nuevo;
};

export const getCatalogoTemaSync = (tema: string): Record<string, unknown> => getOrCreateTema(tema);

export async function listarTemasMatematicas(): Promise<string[]> {
  if (temasDisponibles) return temasDisponibles;
  const data = await apiGet<Array<{ id: string } | string>>("/api/consignas/matematicas");
  temasDisponibles = data
    .map((item) => (typeof item === "string" ? item : item.id))
    .filter((item): item is string => typeof item === "string" && item.length > 0);
  return temasDisponibles;
}

export async function precargarCatalogoTema(tema: string): Promise<void> {
  if (pendingPorTema.has(tema)) {
    await pendingPorTema.get(tema);
    return;
  }

  const pending = (async () => {
    let data: unknown;
    try {
      data = await apiGet<unknown>(`/api/consignas/matematicas/${tema}`);
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

const resolveTemaById = async (idTema: number): Promise<string> => {
  const cached = temaPorId.get(idTema);
  if (cached) return cached;
  const prefijo = `${String(idTema).padStart(2, "0")}_`;
  const temas = await listarTemasMatematicas();
  const tema = temas.find((item) => item.startsWith(prefijo));
  if (!tema) {
    throw new Error(`No existe carpeta de consignas para tema ${prefijo.slice(0, 2)}.`);
  }
  temaPorId.set(idTema, tema);
  return tema;
};

export async function precargarCatalogoTemaPorId(idTema: number): Promise<void> {
  const tema = await resolveTemaById(idTema);
  await precargarCatalogoTema(tema);
}

export function getTemaByIdSync(idTema: number): string | null {
  return temaPorId.get(idTema) ?? null;
}
