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

/** Lo que devuelve la instalación de un paquete (ver `nucleo/src/paquetes.rs`). */
export type Instalado = {
  id: string;
  tipo: "contenido" | "diccionario";
  version: string;
  titulo: string;
  idioma: string | null;
  origen: string | null;
  sha256: string;
  bytes: number;
  modulos: number | null;
};

export interface Almacen {
  consulta<T extends Fila = Fila>(base: Base, sql: string, params?: Valor[]): Promise<T[]>;
  ejecutar(base: Base, sql: string, params?: Valor[]): Promise<{ cambios: number }>;
  /** Todo o nada: si una sentencia falla, no se aplica ninguna. */
  lote(base: Base, sentencias: Sentencia[]): Promise<number>;
  /** Agrega una parte de un paquete que se está recibiendo como `recibido`; `primera` empieza de cero. */
  recibirParte(recibido: string, datos: Uint8Array, primera: boolean): Promise<number>;
  /** Instala lo recibido. `esperado`: el id que tiene que traer; `sha256`: el hash del archivo comprimido. */
  instalarPaquete(recibido: string, opciones?: { esperado?: string; sha256?: string }): Promise<Instalado>;
  /** Consulta de solo lectura sobre el diccionario instalado de un idioma. */
  consultaDiccionario<T extends Fila = Fila>(idioma: string, sql: string, params?: Valor[]): Promise<T[]>;
  borrarDiccionario(idioma: string): Promise<void>;
}

type Invocar = (comando: string, args: Record<string, unknown>) => Promise<unknown>;

export function aBase64(datos: Uint8Array): string {
  let texto = "";
  // De a pedazos: `String.fromCharCode(...)` con millones de argumentos desborda la pila.
  for (let i = 0; i < datos.length; i += 0x8000) texto += String.fromCharCode(...datos.subarray(i, i + 0x8000));
  return btoa(texto);
}

export function almacenTauri(invocar: Invocar): Almacen {
  return {
    consulta: (base, sql, params = []) => invocar("almacen_consulta", { base, sql, params }) as Promise<never>,
    ejecutar: (base, sql, params = []) => invocar("almacen_ejecutar", { base, sql, params }) as Promise<{ cambios: number }>,
    lote: (base, sentencias) =>
      invocar("almacen_lote", { base, sentencias: sentencias.map((s) => ({ sql: s.sql, params: s.params ?? [] })) }) as Promise<number>,
    // En base64: en Android la IPC de Tauri no pasa bytes crudos (ver `paquete_parte` en src-tauri).
    recibirParte: (recibido, datos, primera) => invocar("paquete_parte", { recibido, datos: aBase64(datos), primera }) as Promise<number>,
    instalarPaquete: (recibido, o = {}) =>
      invocar("paquete_instalar", { recibido, esperado: o.esperado ?? null, sha256: o.sha256 ?? null }) as Promise<Instalado>,
    consultaDiccionario: (idioma, sql, params = []) => invocar("diccionario_consulta", { idioma, sql, params }) as Promise<never>,
    borrarDiccionario: (idioma) => invocar("diccionario_borrar", { idioma }) as Promise<void>,
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
    recibirParte: async (recibido, datos, primera) => {
      const r = await fetchOriginal(`${base}/paquete-parte?recibido=${encodeURIComponent(recibido)}${primera ? "&primera=1" : ""}`, {
        method: "POST",
        headers: { "Content-Type": "application/octet-stream" },
        body: datos as BodyInit,
      });
      const d = await r.json();
      if (!r.ok) throw new Error((d as { error?: string }).error ?? `almacén: ${r.status}`);
      return d as number;
    },
    instalarPaquete: (recibido, o = {}) => llamar("paquete-instalar", { recibido, esperado: o.esperado ?? null, sha256: o.sha256 ?? null }),
    consultaDiccionario: (idioma, sql, params = []) => llamar("diccionario-consulta", { idioma, sql, params }),
    borrarDiccionario: (idioma) => llamar("diccionario-borrar", { idioma }),
  };
}
