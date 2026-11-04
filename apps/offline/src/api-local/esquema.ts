import type { Almacen, Base } from "./almacen";

/**
 * Esquema de las dos bases. Cada migración se aplica una sola vez y en orden; la versión aplicada queda en `meta`.
 * Nunca se edita una migración ya publicada: se agrega otra.
 */
const MIGRACIONES: Record<Base, string[][]> = {
  contenido: [
    [
      `CREATE TABLE modulos (
        id TEXT PRIMARY KEY,
        origen TEXT NOT NULL,            -- oficial | escuela | propio | importado
        paquete TEXT,
        titulo TEXT NOT NULL,
        subject TEXT, level TEXT, category TEXT, slug TEXT, libro_id TEXT,
        dependencies TEXT NOT NULL DEFAULT '[]',
        owner_user_id TEXT, school_id TEXT, visibility TEXT NOT NULL DEFAULT 'publico',
        created_at TEXT NOT NULL, updated_at TEXT NOT NULL
      )`,
      // El contenido va aparte del índice: solo se lee el de los módulos desbloqueados.
      `CREATE TABLE modulos_contenido (
        id TEXT PRIMARY KEY REFERENCES modulos(id) ON DELETE CASCADE,
        descripcion TEXT,
        theory_items TEXT NOT NULL DEFAULT '[]',
        scoring_config TEXT
      )`,
      `CREATE TABLE plantillas (
        id TEXT PRIMARY KEY, modulo_id TEXT NOT NULL, nombre TEXT NOT NULL, materia TEXT, tags TEXT NOT NULL DEFAULT '[]',
        codigo_dsl TEXT NOT NULL
      )`,
      `CREATE INDEX plantillas_modulo ON plantillas(modulo_id)`,
      `CREATE TABLE quizzes (
        id TEXT PRIMARY KEY, modulo_id TEXT NOT NULL, titulo TEXT NOT NULL, version_id TEXT NOT NULL,
        settings TEXT NOT NULL DEFAULT '{}', questions TEXT NOT NULL DEFAULT '[]', seed_policy INTEGER
      )`,
      `CREATE INDEX quizzes_modulo ON quizzes(modulo_id)`,
      `CREATE TABLE libros (id TEXT PRIMARY KEY, json TEXT NOT NULL, updated_at TEXT NOT NULL)`,
    ],
  ],
  progreso: [
    [
      `CREATE TABLE perfiles (
        id TEXT PRIMARY KEY,
        tipo TEXT NOT NULL,              -- local | plataforma
        rol TEXT NOT NULL,               -- USER | TEACHER | PARENT
        roles TEXT NOT NULL,             -- JSON: roles de la cuenta que la app usa
        username TEXT NOT NULL UNIQUE COLLATE NOCASE,
        nombre TEXT NOT NULL,
        email TEXT, school_id TEXT,
        hash TEXT NOT NULL, sal TEXT NOT NULL, iteraciones INTEGER NOT NULL,
        menor INTEGER NOT NULL DEFAULT 0,
        mostrar_a_padres INTEGER NOT NULL DEFAULT 1,
        creado TEXT NOT NULL
      )`,
      `CREATE TABLE sesiones (
        token TEXT PRIMARY KEY, perfil_id TEXT NOT NULL REFERENCES perfiles(id) ON DELETE CASCADE,
        creada TEXT NOT NULL, vence TEXT NOT NULL
      )`,
      `CREATE TABLE progreso_modulos (
        perfil_id TEXT NOT NULL REFERENCES perfiles(id) ON DELETE CASCADE,
        modulo_id TEXT NOT NULL,
        estado TEXT NOT NULL,            -- en_progreso | completado
        progreso INTEGER NOT NULL DEFAULT 0,
        actualizado TEXT NOT NULL,
        PRIMARY KEY (perfil_id, modulo_id)
      )`,
      // Desbloqueos a mano (los que hace un docente); los de prerrequisitos se calculan.
      `CREATE TABLE desbloqueos (
        perfil_id TEXT NOT NULL REFERENCES perfiles(id) ON DELETE CASCADE,
        modulo_id TEXT NOT NULL, origen TEXT NOT NULL, creado TEXT NOT NULL,
        PRIMARY KEY (perfil_id, modulo_id)
      )`,
      `CREATE TABLE intentos (
        id TEXT PRIMARY KEY, perfil_id TEXT NOT NULL REFERENCES perfiles(id) ON DELETE CASCADE,
        quiz_id TEXT NOT NULL, version_id TEXT NOT NULL, semilla TEXT NOT NULL,
        respuestas TEXT NOT NULL DEFAULT '{}', nota REAL, inicio TEXT NOT NULL, fin TEXT,
        sincronizado INTEGER NOT NULL DEFAULT 0
      )`,
      // Cola de sincronización: cada cambio local es un evento con identificador único.
      `CREATE TABLE eventos (
        id TEXT PRIMARY KEY, perfil_id TEXT, tipo TEXT NOT NULL, datos TEXT NOT NULL,
        creado TEXT NOT NULL, enviado INTEGER NOT NULL DEFAULT 0
      )`,
    ],
  ],
};

export async function prepararBases(almacen: Almacen): Promise<void> {
  for (const base of ["contenido", "progreso"] as const) {
    await almacen.ejecutar(base, "CREATE TABLE IF NOT EXISTS meta (clave TEXT PRIMARY KEY, valor TEXT NOT NULL)");
    const [fila] = await almacen.consulta<{ valor: string }>(base, "SELECT valor FROM meta WHERE clave = 'version'");
    const actual = fila ? Number(fila.valor) : 0;
    const pendientes = MIGRACIONES[base].slice(actual);
    for (const [i, sentencias] of pendientes.entries()) {
      await almacen.lote(base, [
        ...sentencias.map((sql) => ({ sql })),
        { sql: "INSERT INTO meta (clave, valor) VALUES ('version', ?) ON CONFLICT(clave) DO UPDATE SET valor = excluded.valor", params: [String(actual + i + 1)] },
      ]);
    }
  }
}
