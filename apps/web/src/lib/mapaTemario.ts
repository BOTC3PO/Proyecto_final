/**
 * Mapa del temario oficial por caminos (`/mapa-temario`). Los datos salen de `public/temario/mapa.json`, que arma
 * `content/material/_qa_tools/exportar_mapa.py` desde `content/troncos.md`: un archivo estático, así el mapa funciona
 * igual en la web y en la app sin conexión.
 */

/** Un módulo del mapa: título, materia, nivel, prerrequisitos y si es un examen jefe. */
export type ModuloMapa = { t: string; m: string; n?: string; d?: string[]; x?: 1 };
export type SeccionMapa = { id: string; titulo: string | null; modulos: string[] };
/** Un camino es un tronco de troncos.md; los que no tienen tronco van por materia (`materia`, sin `titulo`). */
export type CaminoMapa = { id: string; titulo?: string; materia?: string; secciones: SeccionMapa[] };
export type DatosMapa = { formato: number; caminos: CaminoMapa[]; modulos: Record<string, ModuloMapa> };

export const NODO_ANCHO = 190;
export const NODO_ALTO = 58;
const COLUMNA = 250;
const FILA = 76;
const MARGEN = 24;

export type Posicion = { x: number; y: number };
export type Arista = { desde: string; hasta: string };
export type Dibujo = { posiciones: Map<string, Posicion>; aristas: Arista[]; ancho: number; alto: number };

/**
 * Dibuja una sección de izquierda a derecha: cada módulo va en la columna de su camino más largo desde un módulo
 * sin prerrequisitos (dentro de la sección), y en cada columna se ordenan por el promedio de las filas de sus
 * prerrequisitos (menos cruces). Los prerrequisitos de otras secciones no se dibujan acá: se listan aparte.
 */
export function dibujarSeccion(ids: string[], modulos: Record<string, ModuloMapa>): Dibujo {
  const dentro = new Set(ids);
  const previos = new Map(ids.map((id) => [id, (modulos[id]?.d ?? []).filter((d) => dentro.has(d) && d !== id)]));
  const aristas: Arista[] = [];
  for (const [hasta, ds] of previos) for (const desde of ds) aristas.push({ desde, hasta });

  // Columna = camino más largo (con protección ante ciclos: un módulo en curso no suma).
  const columna = new Map<string, number>();
  const enCurso = new Set<string>();
  const calcular = (id: string): number => {
    const ya = columna.get(id);
    if (ya !== undefined) return ya;
    if (enCurso.has(id)) return 0;
    enCurso.add(id);
    const c = Math.max(-1, ...(previos.get(id) ?? []).map(calcular)) + 1;
    enCurso.delete(id);
    columna.set(id, c);
    return c;
  };
  ids.forEach(calcular);

  const porColumna: string[][] = [];
  for (const id of [...ids].sort((a, b) => (modulos[a]?.t ?? a).localeCompare(modulos[b]?.t ?? b, "es"))) {
    const c = columna.get(id) ?? 0;
    (porColumna[c] ??= []).push(id);
  }
  const fila = new Map<string, number>();
  porColumna.forEach((col, c) => {
    if (c > 0) {
      const peso = (id: string) => {
        const ps = (previos.get(id) ?? []).map((p) => fila.get(p)).filter((f): f is number => f !== undefined);
        return ps.length ? ps.reduce((a, b) => a + b, 0) / ps.length : Number.MAX_SAFE_INTEGER;
      };
      col.sort((a, b) => peso(a) - peso(b));
    }
    col.forEach((id, f) => fila.set(id, f));
  });

  const posiciones = new Map<string, Posicion>();
  porColumna.forEach((col, c) => col.forEach((id, f) => posiciones.set(id, { x: MARGEN + c * COLUMNA, y: MARGEN + f * FILA })));
  const columnas = porColumna.length;
  const filas = Math.max(0, ...porColumna.map((col) => col.length));
  return {
    posiciones,
    aristas,
    ancho: MARGEN * 2 + Math.max(0, columnas - 1) * COLUMNA + NODO_ANCHO,
    alto: MARGEN * 2 + Math.max(0, filas - 1) * FILA + NODO_ALTO,
  };
}

/** Todos los prerrequisitos de un módulo, directos e indirectos (el camino hasta llegar a él). */
export function antecesores(id: string, modulos: Record<string, ModuloMapa>): Set<string> {
  const vistos = new Set<string>();
  const pila = [...(modulos[id]?.d ?? [])];
  while (pila.length) {
    const actual = pila.pop()!;
    if (vistos.has(actual) || actual === id) continue;
    vistos.add(actual);
    pila.push(...(modulos[actual]?.d ?? []));
  }
  return vistos;
}

/** Los módulos que dependen de este, directa o indirectamente (adónde lleva). */
export function sucesores(id: string, modulos: Record<string, ModuloMapa>): Set<string> {
  const hijos = new Map<string, string[]>();
  for (const [mid, m] of Object.entries(modulos)) for (const d of m.d ?? []) (hijos.get(d) ?? hijos.set(d, []).get(d)!).push(mid);
  const vistos = new Set<string>();
  const pila = [...(hijos.get(id) ?? [])];
  while (pila.length) {
    const actual = pila.pop()!;
    if (vistos.has(actual) || actual === id) continue;
    vistos.add(actual);
    pila.push(...(hijos.get(actual) ?? []));
  }
  return vistos;
}

/** Dónde está cada módulo: camino y sección. */
export function ubicaciones(datos: DatosMapa): Map<string, { camino: string; seccion: string }> {
  const r = new Map<string, { camino: string; seccion: string }>();
  for (const c of datos.caminos) for (const s of c.secciones) for (const m of s.modulos) r.set(m, { camino: c.id, seccion: s.id });
  return r;
}

const NIVELES: Record<string, string> = { basico: "Básico", intermedio: "Intermedio", avanzado: "Avanzado" };
/** Nivel para mostrar: «basico» → «Básico»; los de idiomas (A1, B2, HSK2…) quedan igual. */
export const nivelLegible = (n: string) => NIVELES[n.toLowerCase()] ?? n;

export const normalizar = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();

/** Busca módulos por título: primero los que empiezan con lo buscado, después los que lo contienen. */
export function buscar(texto: string, modulos: Record<string, ModuloMapa>, limite = 8): string[] {
  const q = normalizar(texto);
  if (q.length < 2) return [];
  const empiezan: string[] = [];
  const contienen: string[] = [];
  for (const [id, m] of Object.entries(modulos)) {
    const t = normalizar(m.t);
    if (t.startsWith(q)) empiezan.push(id);
    else if (t.includes(q)) contienen.push(id);
  }
  const orden = (a: string, b: string) => modulos[a].t.length - modulos[b].t.length || modulos[a].t.localeCompare(modulos[b].t, "es");
  return [...empiezan.sort(orden), ...contienen.sort(orden)].slice(0, limite);
}
