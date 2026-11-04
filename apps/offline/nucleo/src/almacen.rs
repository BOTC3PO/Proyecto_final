//! Bases SQLite de la app sin conexión.
//!
//! Hay dos bases separadas: `contenido` (módulos, preguntas, libros, diccionario) y `progreso` (perfiles, sesiones,
//! progreso, intentos y la cola de sincronización). El progreso se exporta y se borra sin tocar el contenido.
//!
//! La API local (TypeScript, dentro de la web) arma las consultas; acá solo se ejecutan. Las usan los comandos de
//! Tauri y, en el «modo navegador», el servidor en 127.0.0.1.

use rusqlite::types::{Value as ValorSql, ValueRef};
use rusqlite::{params_from_iter, Connection, OpenFlags};
use serde::{Deserialize, Serialize};
use serde_json::{Map, Number, Value};
use std::collections::HashMap;
use std::path::{Path, PathBuf};
use std::sync::Mutex;

pub struct Almacen {
    pub(crate) carpeta: PathBuf,
    pub(crate) contenido: Mutex<Connection>,
    progreso: Mutex<Connection>,
    /// Diccionarios instalados, abiertos a medida que se consultan (ver `paquetes.rs`).
    pub(crate) diccionarios: Mutex<HashMap<String, Connection>>,
}

#[derive(Debug, Deserialize)]
pub struct Sentencia {
    pub sql: String,
    #[serde(default)]
    pub params: Vec<Value>,
}

#[derive(Debug, Serialize)]
pub struct Resultado {
    pub cambios: usize,
    #[serde(rename = "ultimoId")]
    pub ultimo_id: i64,
}

fn abrir(ruta: &Path) -> Result<Connection, String> {
    let c = Connection::open_with_flags(
        ruta,
        OpenFlags::SQLITE_OPEN_READ_WRITE | OpenFlags::SQLITE_OPEN_CREATE | OpenFlags::SQLITE_OPEN_NO_MUTEX,
    )
    .map_err(|e| format!("no se pudo abrir {}: {e}", ruta.display()))?;
    c.execute_batch("PRAGMA journal_mode = WAL; PRAGMA foreign_keys = ON; PRAGMA busy_timeout = 5000;")
        .map_err(|e| e.to_string())?;
    Ok(c)
}

fn a_sql(v: &Value) -> ValorSql {
    match v {
        Value::Null => ValorSql::Null,
        Value::Bool(b) => ValorSql::Integer(*b as i64),
        Value::Number(n) => match n.as_i64() {
            Some(i) => ValorSql::Integer(i),
            None => ValorSql::Real(n.as_f64().unwrap_or(0.0)),
        },
        Value::String(s) => ValorSql::Text(s.clone()),
        otro => ValorSql::Text(otro.to_string()),
    }
}

fn a_json(v: ValueRef) -> Value {
    match v {
        ValueRef::Null => Value::Null,
        ValueRef::Integer(i) => Value::Number(i.into()),
        ValueRef::Real(f) => Number::from_f64(f).map(Value::Number).unwrap_or(Value::Null),
        ValueRef::Text(t) => Value::String(String::from_utf8_lossy(t).into_owned()),
        ValueRef::Blob(b) => Value::String(String::from_utf8_lossy(b).into_owned()),
    }
}

pub(crate) fn consultar(c: &Connection, sql: &str, params: &[Value]) -> Result<Vec<Map<String, Value>>, String> {
    let mut st = c.prepare_cached(sql).map_err(|e| e.to_string())?;
    let nombres: Vec<String> = st.column_names().iter().map(|n| n.to_string()).collect();
    let mut filas = st.query(params_from_iter(params.iter().map(a_sql))).map_err(|e| e.to_string())?;
    let mut salida = Vec::new();
    while let Some(f) = filas.next().map_err(|e| e.to_string())? {
        let mut obj = Map::new();
        for (i, n) in nombres.iter().enumerate() {
            obj.insert(n.clone(), a_json(f.get_ref(i).map_err(|e| e.to_string())?));
        }
        salida.push(obj);
    }
    Ok(salida)
}

fn ejecutar(c: &Connection, sql: &str, params: &[Value]) -> Result<Resultado, String> {
    let cambios = c
        .prepare_cached(sql)
        .and_then(|mut st| st.execute(params_from_iter(params.iter().map(a_sql))))
        .map_err(|e| e.to_string())?;
    Ok(Resultado { cambios, ultimo_id: c.last_insert_rowid() })
}

impl Almacen {
    pub fn abrir(carpeta: &Path) -> Result<Self, String> {
        std::fs::create_dir_all(carpeta).map_err(|e| e.to_string())?;
        Ok(Self {
            carpeta: carpeta.to_path_buf(),
            contenido: Mutex::new(abrir(&carpeta.join("contenido.sqlite"))?),
            progreso: Mutex::new(abrir(&carpeta.join("progreso.sqlite"))?),
            diccionarios: Mutex::new(HashMap::new()),
        })
    }

    fn base(&self, nombre: &str) -> Result<&Mutex<Connection>, String> {
        match nombre {
            "contenido" => Ok(&self.contenido),
            "progreso" => Ok(&self.progreso),
            otro => Err(format!("base desconocida: {otro}")),
        }
    }

    pub fn consulta(&self, base: &str, sql: &str, params: &[Value]) -> Result<Vec<Map<String, Value>>, String> {
        let c = self.base(base)?.lock().map_err(|_| "base bloqueada".to_string())?;
        consultar(&c, sql, params)
    }

    pub fn ejecutar(&self, base: &str, sql: &str, params: &[Value]) -> Result<Resultado, String> {
        let c = self.base(base)?.lock().map_err(|_| "base bloqueada".to_string())?;
        ejecutar(&c, sql, params)
    }

    /// Varias sentencias en una transacción: o se aplican todas o ninguna.
    pub fn lote(&self, base: &str, sentencias: &[Sentencia]) -> Result<usize, String> {
        let mut c = self.base(base)?.lock().map_err(|_| "base bloqueada".to_string())?;
        let tx = c.transaction().map_err(|e| e.to_string())?;
        let mut total = 0;
        for s in sentencias {
            total += ejecutar(&tx, &s.sql, &s.params)?.cambios;
        }
        tx.commit().map_err(|e| e.to_string())?;
        Ok(total)
    }
}

#[cfg(test)]
mod pruebas {
    use super::*;
    use serde_json::json;

    fn temporal() -> std::path::PathBuf {
        let d = std::env::temp_dir().join(format!("vb-almacen-{}-{}", std::process::id(), rand_sufijo()));
        std::fs::create_dir_all(&d).unwrap();
        d
    }
    fn rand_sufijo() -> u128 {
        std::time::SystemTime::now().duration_since(std::time::UNIX_EPOCH).unwrap().as_nanos()
    }

    #[test]
    fn consulta_y_ejecucion_con_parametros() {
        let a = Almacen::abrir(&temporal()).unwrap();
        a.ejecutar("progreso", "CREATE TABLE t (id TEXT PRIMARY KEY, n INTEGER, x REAL, b INTEGER)", &[]).unwrap();
        let r = a.ejecutar("progreso", "INSERT INTO t VALUES (?, ?, ?, ?)", &[json!("a"), json!(3), json!(1.5), json!(true)]).unwrap();
        assert_eq!(r.cambios, 1);
        let filas = a.consulta("progreso", "SELECT * FROM t WHERE id = ?", &[json!("a")]).unwrap();
        assert_eq!(filas[0]["n"], json!(3));
        assert_eq!(filas[0]["x"], json!(1.5));
        assert_eq!(filas[0]["b"], json!(1));
    }

    #[test]
    fn las_bases_estan_separadas() {
        let a = Almacen::abrir(&temporal()).unwrap();
        a.ejecutar("contenido", "CREATE TABLE solo_contenido (id TEXT)", &[]).unwrap();
        assert!(a.consulta("progreso", "SELECT * FROM solo_contenido", &[]).is_err());
        assert!(a.consulta("otra", "SELECT 1", &[]).is_err());
    }

    #[test]
    fn el_lote_es_todo_o_nada() {
        let a = Almacen::abrir(&temporal()).unwrap();
        a.ejecutar("progreso", "CREATE TABLE t (id TEXT PRIMARY KEY)", &[]).unwrap();
        let lote = vec![
            Sentencia { sql: "INSERT INTO t VALUES ('a')".into(), params: vec![] },
            Sentencia { sql: "INSERT INTO t VALUES ('a')".into(), params: vec![] },
        ];
        assert!(a.lote("progreso", &lote).is_err());
        assert!(a.consulta("progreso", "SELECT * FROM t", &[]).unwrap().is_empty());
    }
}
