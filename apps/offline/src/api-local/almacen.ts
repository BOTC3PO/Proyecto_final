/**
 * Acceso a las bases SQLite de la app. La API local arma las consultas y el almacén las ejecuta: en la app (Tauri)
 * por comandos de Rust; en el «modo navegador», por HTTP a 127.0.0.1; en las pruebas, con better-sqlite3.
 *
 * Hay dos bases: `contenido` (módulos, preguntas, libros) y `progreso` (perfiles, sesiones, progreso, intentos). El
 * progreso se exporta y se borra sin tocar el contenido.
 */
export type Base = "contenido" | "progreso";
export type Valor = string | number | boolean | null;
export type Fila = Record<string, Valor>;
export type Sentencia = { sql: string; params?: Valor[] };

export interface Almacen {
  consulta<T extends Fila = Fila>(base: Base, sql: string, params?: Valor[]): Promise<T[]>;
  ejecutar(base: Base, sql: string, params?: Valor[]): Promise<{ cambios: number }>;
  /** Todo o nada: si una sentencia falla, no se aplica ninguna. */
  lote(base: Base, sentencias: Sentencia[]): Promise<number>;
}

type Invocar = (comando: string, args: Record<string, unknown>) => Promise<unknown>;

export function almacenTauri(invocar: Invocar): Almacen {
  return {
    consulta: (base, sql, params = []) => invocar("almacen_consulta", { base, sql, params }) as Promise<never>,
    ejecutar: (base, sql, params = []) => invocar("almacen_ejecutar", { base, sql, params }) as Promise<{ cambios: number }>,
    lote: (base, sentencias) =>
      invocar("almacen_lote", { base, sentencias: sentencias.map((s) => ({ sql: s.sql, params: s.params ?? [] })) }) as Promise<number>,
  };
}

/** «Modo navegador» (Huayra 5 y 6): el mismo programa en Rust atiende el almacén en 127.0.0.1. */
export function almacenHttp(base = "/__almacen", fetchOriginal: typeof fetch = fetch): Almacen {
  const llamar = async (operacion: string, cuerpo: unknown) => {
    const r = await fetchOriginal(`${base}/${operacion}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cuerpo),
    });
    const datos = await r.json();
    if (!r.ok) throw new Error((datos as { error?: string }).error ?? `almacén: ${r.status}`);
    return datos;
  };
  return {
    consulta: (b, sql, params = []) => llamar("consulta", { base: b, sql, params }),
    ejecutar: (b, sql, params = []) => llamar("ejecutar", { base: b, sql, params }),
    lote: (b, sentencias) => llamar("lote", { base: b, sentencias: sentencias.map((s) => ({ sql: s.sql, params: s.params ?? [] })) }),
  };
}
