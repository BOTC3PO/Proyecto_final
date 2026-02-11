import { apiGet } from "../../lib/api";

const catalogosPorTema = new Map<string, unknown[]>();
const pendingPorTema = new Map<string, Promise<void>>();
let temasDisponibles: string[] | null = null;

const getOrCreateTema = (tema: string): unknown[] => {
  const actual = catalogosPorTema.get(tema);
  if (actual) return actual;
  const nuevo: unknown[] = [];
  catalogosPorTema.set(tema, nuevo);
  return nuevo;
};

export const getCatalogoTemaSync = (tema: string): unknown[] => getOrCreateTema(tema);

export async function listarTemasQuimica(): Promise<string[]> {
  if (temasDisponibles) return temasDisponibles;
  const data = await apiGet<Array<{ id: string } | string>>("/api/consignas/quimica");
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
    const data = await apiGet<unknown>(`/api/consignas/quimica/${tema}`);
    if (!Array.isArray(data)) {
      throw new Error(`El endpoint de consignas devolvió un formato inválido para ${tema}.`);
    }
    const target = getOrCreateTema(tema);
    target.splice(0, target.length, ...data);
  })();

  pendingPorTema.set(tema, pending);

  try {
    await pending;
  } finally {
    pendingPorTema.delete(tema);
  }
}


const resolveTemaById = async (idTema: number): Promise<string> => {
  const prefijo = `${String(idTema).padStart(2, "0")}_`;
  const temas = await listarTemasQuimica();
  const tema = temas.find((item) => item.startsWith(prefijo));
  if (!tema) {
    throw new Error(`No existe carpeta de consignas para tema ${prefijo.slice(0, 2)}.`);
  }
  return tema;
};

export async function precargarCatalogoTemaPorId(idTema: number): Promise<void> {
  const tema = await resolveTemaById(idTema);
  await precargarCatalogoTema(tema);
}
