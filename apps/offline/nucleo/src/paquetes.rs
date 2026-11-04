//! Paquetes de contenido y de diccionario.
//!
//! Un paquete es una base SQLite comprimida con gzip. Lleva una tabla `paquete (clave, valor)` con su `id`, su
//! `tipo` (`contenido` o `diccionario`), su `version`, su `titulo` y `formato = 1`.
//!
//! - **contenido:** las mismas tablas que la base `contenido` del dispositivo. Al instalarlo se reemplazan los
//!   módulos que ya tenía ese paquete.
//! - **diccionario:** la tabla `words` del diccionario de la plataforma, con un solo idioma (`idioma` en
//!   `paquete`). Queda como archivo aparte y se consulta en modo de solo lectura.
//!
//! El archivo llega por partes (la API local lo baja del servidor o lo lee de un archivo elegido por la persona) y
//! se instala al final, comprobando el hash si se conoce.

use crate::almacen::{consultar, Almacen};
use flate2::read::GzDecoder;
use rusqlite::{Connection, OpenFlags};
use serde::Serialize;
use serde_json::{Map, Value};
use sha2::{Digest, Sha256};
use std::collections::HashMap;
use std::fs::{self, File, OpenOptions};
use std::io::{self, Read, Write};
use std::path::{Path, PathBuf};

pub const FORMATO: &str = "1";
const TABLAS_DE_CONTENIDO: [&str; 5] = ["modulos", "modulos_contenido", "plantillas", "quizzes", "libros"];

#[derive(Debug, Serialize, PartialEq)]
pub struct Instalado {
    pub id: String,
    pub tipo: String,
    pub version: String,
    pub titulo: String,
    pub idioma: Option<String>,
    pub origen: Option<String>,
    pub sha256: String,
    pub bytes: u64,
    /// Módulos que quedaron en la base (solo contenido).
    pub modulos: Option<i64>,
}

fn id_valido(id: &str) -> Result<(), String> {
    let ok = !id.is_empty()
        && id.len() <= 80
        && id.chars().all(|c| c.is_ascii_lowercase() || c.is_ascii_digit() || matches!(c, '-' | '_' | '.'))
        && !id.starts_with('.');
    if ok { Ok(()) } else { Err(format!("identificador de paquete inválido: {id}")) }
}

fn idioma_valido(idioma: &str) -> Result<(), String> {
    let ok = (2..=10).contains(&idioma.len()) && idioma.chars().all(|c| c.is_ascii_alphanumeric() || c == '-' || c == '_');
    if ok { Ok(()) } else { Err(format!("idioma inválido: {idioma}")) }
}

fn hex(bytes: &[u8]) -> String {
    bytes.iter().map(|b| format!("{b:02x}")).collect()
}

fn sha256_de(ruta: &Path) -> Result<(String, u64), String> {
    let mut f = File::open(ruta).map_err(|e| e.to_string())?;
    let mut h = Sha256::new();
    let mut buf = vec![0u8; 1 << 16];
    let mut total = 0u64;
    loop {
        let n = f.read(&mut buf).map_err(|e| e.to_string())?;
        if n == 0 {
            break;
        }
        h.update(&buf[..n]);
        total += n as u64;
    }
    Ok((hex(&h.finalize()), total))
}

fn columnas(c: &Connection, esquema: &str, tabla: &str) -> Result<Vec<String>, String> {
    let filas = consultar(c, "SELECT name FROM pragma_table_info(?1, ?2)", &[Value::String(tabla.into()), Value::String(esquema.into())])?;
    Ok(filas.into_iter().filter_map(|f| f.get("name").and_then(|v| v.as_str()).map(String::from)).collect())
}

fn meta(c: &Connection) -> Result<HashMap<String, String>, String> {
    let filas = consultar(c, "SELECT clave, valor FROM paquete", &[]).map_err(|_| "el archivo no es un paquete de Virtual Book".to_string())?;
    Ok(filas
        .into_iter()
        .filter_map(|f| Some((f.get("clave")?.as_str()?.to_string(), f.get("valor")?.as_str()?.to_string())))
        .collect())
}

impl Almacen {
    fn carpeta_de(&self, nombre: &str) -> Result<PathBuf, String> {
        let d = self.carpeta.join(nombre);
        fs::create_dir_all(&d).map_err(|e| e.to_string())?;
        Ok(d)
    }

    /// Agrega una parte del archivo comprimido. `primera` empieza de cero. Devuelve los bytes recibidos hasta ahora.
    pub fn recibir_parte(&self, id: &str, datos: &[u8], primera: bool) -> Result<u64, String> {
        id_valido(id)?;
        let ruta = self.carpeta_de("paquetes")?.join(format!("{id}.parcial"));
        let mut f = OpenOptions::new()
            .create(true)
            .write(true)
            .append(!primera)
            .truncate(primera)
            .open(&ruta)
            .map_err(|e| e.to_string())?;
        f.write_all(datos).map_err(|e| e.to_string())?;
        f.flush().map_err(|e| e.to_string())?;
        Ok(f.metadata().map_err(|e| e.to_string())?.len())
    }

    /// Instala lo recibido como `recibido`. Si se espera un paquete (`esperado`), su id tiene que coincidir; un archivo
    /// importado no lo sabe de antemano y se usa el que trae. Si `sha256` viene, el archivo comprimido tiene que
    /// coincidir.
    pub fn instalar_paquete(&self, recibido: &str, esperado: Option<&str>, sha256: Option<&str>) -> Result<Instalado, String> {
        id_valido(recibido)?;
        let carpeta = self.carpeta_de("paquetes")?;
        let parcial = carpeta.join(format!("{recibido}.parcial"));
        let sqlite = carpeta.join(format!("{recibido}.sqlite.tmp"));
        let resultado = self.instalar_desde(esperado, sha256, &parcial, &sqlite);
        let _ = fs::remove_file(&parcial);
        let _ = fs::remove_file(&sqlite);
        resultado
    }

    fn instalar_desde(&self, esperado: Option<&str>, sha256: Option<&str>, parcial: &Path, sqlite: &Path) -> Result<Instalado, String> {
        let (hash, bytes) = sha256_de(parcial).map_err(|_| "no se recibió el paquete".to_string())?;
        if let Some(esperado) = sha256 {
            if !esperado.eq_ignore_ascii_case(&hash) {
                return Err("el paquete llegó dañado (el hash no coincide); volvé a descargarlo".into());
            }
        }
        {
            let mut entrada = GzDecoder::new(File::open(parcial).map_err(|e| e.to_string())?);
            let mut salida = File::create(sqlite).map_err(|e| e.to_string())?;
            io::copy(&mut entrada, &mut salida).map_err(|_| "el archivo no es un paquete comprimido válido".to_string())?;
        }
        let datos = {
            let c = Connection::open_with_flags(sqlite, OpenFlags::SQLITE_OPEN_READ_ONLY).map_err(|e| e.to_string())?;
            meta(&c)?
        };
        let leer = |k: &str| datos.get(k).cloned().ok_or_else(|| format!("al paquete le falta «{k}»"));
        if leer("formato")? != FORMATO {
            return Err("este paquete es de una versión más nueva de la app; actualizá la app".into());
        }
        let id = leer("id")?;
        id_valido(&id)?;
        if esperado.is_some_and(|e| e != id) {
            return Err("el paquete no es el que se pidió".into());
        }
        let mut instalado = Instalado {
            id: id.clone(),
            tipo: leer("tipo")?,
            version: leer("version")?,
            titulo: leer("titulo")?,
            idioma: datos.get("idioma").cloned(),
            origen: datos.get("origen").cloned(),
            sha256: hash,
            bytes,
            modulos: None,
        };
        match instalado.tipo.as_str() {
            "contenido" => instalado.modulos = Some(self.fusionar_contenido(&id, instalado.origen.as_deref().unwrap_or("oficial"), sqlite)?),
            "diccionario" => self.guardar_diccionario(instalado.idioma.as_deref().ok_or("al diccionario le falta «idioma»")?, sqlite)?,
            otro => return Err(format!("tipo de paquete desconocido: {otro}")),
        }
        Ok(instalado)
    }

    fn fusionar_contenido(&self, id: &str, origen: &str, sqlite: &Path) -> Result<i64, String> {
        if !matches!(origen, "oficial" | "escuela") {
            return Err(format!("origen de paquete inválido: {origen}"));
        }
        let mut c = self.contenido.lock().map_err(|_| "base bloqueada".to_string())?;
        c.execute("ATTACH DATABASE ? AS p", [sqlite.to_string_lossy()]).map_err(|e| e.to_string())?;
        let r = (|| -> Result<i64, String> {
            let tx = c.transaction().map_err(|e| e.to_string())?;
            let del_paquete = "SELECT id FROM main.modulos WHERE paquete = ?1";
            for t in ["plantillas", "quizzes"] {
                tx.execute(&format!("DELETE FROM main.{t} WHERE modulo_id IN ({del_paquete})"), [id]).map_err(|e| e.to_string())?;
            }
            tx.execute(&format!("DELETE FROM main.modulos_contenido WHERE id IN ({del_paquete})"), [id]).map_err(|e| e.to_string())?;
            tx.execute("DELETE FROM main.modulos WHERE paquete = ?1", [id]).map_err(|e| e.to_string())?;
            for t in TABLAS_DE_CONTENIDO {
                let destino = columnas(&tx, "main", t)?;
                let origen_cols = columnas(&tx, "p", t)?;
                let comunes: Vec<&String> = destino.iter().filter(|c| origen_cols.contains(c)).collect();
                if comunes.is_empty() {
                    continue;
                }
                let lista = comunes.iter().map(|c| format!("\"{c}\"")).collect::<Vec<_>>().join(", ");
                tx.execute(&format!("INSERT OR REPLACE INTO main.{t} ({lista}) SELECT {lista} FROM p.{t}"), [])
                    .map_err(|e| e.to_string())?;
            }
            // El origen y el paquete los decide quien instala, no el archivo.
            tx.execute(
                "UPDATE main.modulos SET paquete = ?1, origen = ?2 WHERE id IN (SELECT id FROM p.modulos)",
                [id, origen],
            )
            .map_err(|e| e.to_string())?;
            let n: i64 = tx.query_row("SELECT COUNT(*) FROM main.modulos WHERE paquete = ?1", [id], |f| f.get(0)).map_err(|e| e.to_string())?;
            tx.commit().map_err(|e| e.to_string())?;
            Ok(n)
        })();
        c.execute("DETACH DATABASE p", []).map_err(|e| e.to_string())?;
        r
    }

    fn guardar_diccionario(&self, idioma: &str, sqlite: &Path) -> Result<(), String> {
        idioma_valido(idioma)?;
        {
            let c = Connection::open_with_flags(sqlite, OpenFlags::SQLITE_OPEN_READ_ONLY).map_err(|e| e.to_string())?;
            let otros: i64 = c
                .query_row("SELECT COUNT(*) FROM words WHERE lang <> ?1", [idioma], |f| f.get(0))
                .map_err(|_| "el diccionario no tiene la tabla de palabras".to_string())?;
            if otros > 0 {
                return Err("el diccionario trae palabras de otro idioma".into());
            }
        }
        let destino = self.carpeta_de("diccionarios")?.join(format!("{idioma}.sqlite"));
        let mut abiertos = self.diccionarios.lock().map_err(|_| "diccionario bloqueado".to_string())?;
        abiertos.remove(idioma);
        fs::rename(sqlite, &destino).or_else(|_| fs::copy(sqlite, &destino).map(|_| ())).map_err(|e| e.to_string())?;
        Ok(())
    }

    /// Consulta de solo lectura sobre el diccionario de un idioma instalado.
    pub fn consulta_diccionario(&self, idioma: &str, sql: &str, params: &[Value]) -> Result<Vec<Map<String, Value>>, String> {
        idioma_valido(idioma)?;
        let mut abiertos = self.diccionarios.lock().map_err(|_| "diccionario bloqueado".to_string())?;
        if !abiertos.contains_key(idioma) {
            let ruta = self.carpeta.join("diccionarios").join(format!("{idioma}.sqlite"));
            if !ruta.exists() {
                return Err(format!("el diccionario de «{idioma}» no está instalado"));
            }
            let c = Connection::open_with_flags(&ruta, OpenFlags::SQLITE_OPEN_READ_ONLY | OpenFlags::SQLITE_OPEN_NO_MUTEX)
                .map_err(|e| e.to_string())?;
            abiertos.insert(idioma.to_string(), c);
        }
        consultar(&abiertos[idioma], sql, params)
    }

    /// Borra el diccionario de un idioma.
    pub fn borrar_diccionario(&self, idioma: &str) -> Result<(), String> {
        idioma_valido(idioma)?;
        self.diccionarios.lock().map_err(|_| "diccionario bloqueado".to_string())?.remove(idioma);
        let ruta = self.carpeta.join("diccionarios").join(format!("{idioma}.sqlite"));
        if ruta.exists() {
            fs::remove_file(ruta).map_err(|e| e.to_string())?;
        }
        Ok(())
    }
}

#[cfg(test)]
mod pruebas {
    use super::*;
    use flate2::write::GzEncoder;
    use flate2::Compression;
    use serde_json::json;

    fn temporal(nombre: &str) -> PathBuf {
        let n = std::time::SystemTime::now().duration_since(std::time::UNIX_EPOCH).unwrap().as_nanos();
        let d = std::env::temp_dir().join(format!("vb-paquetes-{nombre}-{}-{n}", std::process::id()));
        fs::create_dir_all(&d).unwrap();
        d
    }

    const ESQUEMA: &str = "
        CREATE TABLE modulos (id TEXT PRIMARY KEY, origen TEXT NOT NULL, paquete TEXT, titulo TEXT NOT NULL);
        CREATE TABLE modulos_contenido (id TEXT PRIMARY KEY, theory_items TEXT NOT NULL DEFAULT '[]');
        CREATE TABLE plantillas (id TEXT PRIMARY KEY, modulo_id TEXT NOT NULL, codigo_dsl TEXT NOT NULL);
        CREATE TABLE quizzes (id TEXT PRIMARY KEY, modulo_id TEXT NOT NULL);
        CREATE TABLE libros (id TEXT PRIMARY KEY, json TEXT NOT NULL);";

    /// Arma un paquete comprimido y devuelve sus bytes.
    fn paquete(dir: &Path, sql: &str, meta: &[(&str, &str)]) -> Vec<u8> {
        let ruta = dir.join(format!("p-{}.sqlite", meta.iter().find(|m| m.0 == "id").unwrap().1));
        let _ = fs::remove_file(&ruta);
        let c = Connection::open(&ruta).unwrap();
        c.execute_batch(sql).unwrap();
        c.execute_batch("CREATE TABLE paquete (clave TEXT PRIMARY KEY, valor TEXT NOT NULL)").unwrap();
        for (k, v) in meta {
            c.execute("INSERT INTO paquete VALUES (?, ?)", [k, v]).unwrap();
        }
        drop(c);
        let mut gz = GzEncoder::new(Vec::new(), Compression::default());
        gz.write_all(&fs::read(&ruta).unwrap()).unwrap();
        gz.finish().unwrap()
    }

    fn almacen(nombre: &str) -> Almacen {
        let a = Almacen::abrir(&temporal(nombre)).unwrap();
        a.contenido.lock().unwrap().execute_batch(ESQUEMA).unwrap();
        a
    }

    fn contenido(modulos: &[&str]) -> String {
        let mut s = ESQUEMA.to_string();
        for m in modulos {
            s += &format!(
                "INSERT INTO modulos VALUES ('{m}', 'cualquiera', 'otro', 'Título {m}');
                 INSERT INTO modulos_contenido VALUES ('{m}', '[\"teoría\"]');
                 INSERT INTO plantillas VALUES ('pl-{m}', '{m}', 'dsl');"
            );
        }
        s
    }

    fn meta<'a>(id: &'a str, tipo: &'a str) -> Vec<(&'a str, &'a str)> {
        vec![("id", id), ("tipo", tipo), ("version", "1.0"), ("titulo", "Matemática"), ("formato", FORMATO), ("origen", "oficial")]
    }

    #[test]
    fn instala_contenido_por_partes_y_reemplaza_el_anterior() {
        let a = almacen("contenido");
        let dir = temporal("fuente");
        let bytes = paquete(&dir, &contenido(&["m1", "m2"]), &meta("matematica", "contenido"));
        let (p1, p2) = bytes.split_at(bytes.len() / 2);
        a.recibir_parte("matematica", p1, true).unwrap();
        assert_eq!(a.recibir_parte("matematica", p2, false).unwrap(), bytes.len() as u64);
        let r = a.instalar_paquete("matematica", Some("matematica"), None).unwrap();
        assert_eq!((r.tipo.as_str(), r.modulos), ("contenido", Some(2)));
        let filas = a.consulta("contenido", "SELECT id, origen, paquete FROM modulos ORDER BY id", &[]).unwrap();
        assert_eq!(filas[0]["paquete"], json!("matematica"));
        assert_eq!(filas[0]["origen"], json!("oficial"));

        // Versión nueva sin m2: m2 y sus preguntas desaparecen.
        let nuevo = paquete(&dir, &contenido(&["m1"]), &meta("matematica", "contenido"));
        a.recibir_parte("matematica", &nuevo, true).unwrap();
        a.instalar_paquete("matematica", Some("matematica"), None).unwrap();
        assert_eq!(a.consulta("contenido", "SELECT id FROM modulos", &[]).unwrap().len(), 1);
        assert_eq!(a.consulta("contenido", "SELECT id FROM plantillas", &[]).unwrap().len(), 1);
        assert!(!a.carpeta.join("paquetes/matematica.parcial").exists());
    }

    #[test]
    fn rechaza_hash_distinto_y_archivos_que_no_son_paquetes() {
        let a = almacen("hash");
        let dir = temporal("fuente-hash");
        let bytes = paquete(&dir, &contenido(&["f1"]), &meta("fisica", "contenido"));
        a.recibir_parte("fisica", &bytes, true).unwrap();
        assert!(a.instalar_paquete("fisica", None, Some("00")).unwrap_err().contains("hash"));
        a.recibir_parte("fisica", b"esto no es gzip", true).unwrap();
        assert!(a.instalar_paquete("fisica", None, None).is_err());
        assert!(a.consulta("contenido", "SELECT id FROM modulos", &[]).unwrap().is_empty());

        let mut h = Sha256::new();
        h.update(&bytes);
        a.recibir_parte("fisica", &bytes, true).unwrap();
        assert_eq!(a.instalar_paquete("fisica", None, Some(&hex(&h.finalize()))).unwrap().modulos, Some(1));
    }

    #[test]
    fn el_id_del_paquete_tiene_que_coincidir() {
        let a = almacen("id");
        let dir = temporal("fuente-id");
        let bytes = paquete(&dir, &contenido(&["q1"]), &meta("quimica", "contenido"));
        a.recibir_parte("descarga", &bytes, true).unwrap();
        assert!(a.instalar_paquete("descarga", Some("otro"), None).is_err());
        // Importado desde un archivo: no se sabe el id y se usa el del paquete.
        a.recibir_parte("importado", &bytes, true).unwrap();
        assert_eq!(a.instalar_paquete("importado", None, None).unwrap().id, "quimica");
        assert!(a.recibir_parte("../afuera", b"x", true).is_err());
    }

    #[test]
    fn diccionario_por_idioma() {
        let a = almacen("dic");
        let dir = temporal("fuente-dic");
        let palabras = "CREATE TABLE words (lang TEXT NOT NULL, word TEXT NOT NULL, definitions TEXT, synonyms TEXT, translations TEXT, PRIMARY KEY (lang, word));
                        INSERT INTO words VALUES ('eo', 'hundo', '[\"perro\"]', NULL, NULL);";
        let mut m = meta("diccionario-eo", "diccionario");
        m.push(("idioma", "eo"));
        let bytes = paquete(&dir, palabras, &m);
        a.recibir_parte("diccionario-eo", &bytes, true).unwrap();
        a.instalar_paquete("diccionario-eo", None, None).unwrap();
        let r = a.consulta_diccionario("eo", "SELECT word FROM words WHERE lang = ? AND word = ?", &[json!("eo"), json!("hundo")]).unwrap();
        assert_eq!(r[0]["word"], json!("hundo"));
        assert!(a.consulta_diccionario("eo", "DELETE FROM words", &[]).is_err()); // solo lectura
        a.borrar_diccionario("eo").unwrap();
        assert!(a.consulta_diccionario("eo", "SELECT 1", &[]).is_err());

        let mezclado = format!("{palabras} INSERT INTO words VALUES ('es', 'perro', NULL, NULL, NULL);");
        let bytes = paquete(&dir, &mezclado, &m);
        a.recibir_parte("diccionario-eo", &bytes, true).unwrap();
        assert!(a.instalar_paquete("diccionario-eo", None, None).is_err());
    }
}
