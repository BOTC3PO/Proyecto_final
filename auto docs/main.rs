use chrono::Local;
use clap::Parser;
use indicatif::{ProgressBar, ProgressStyle};
use reqwest::blocking::Client;
use rusqlite::Connection;
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::fs;
use std::path::{Path, PathBuf};
use std::time::Duration;
use walkdir::WalkDir;

// ═══════════════════════════════════════════════
// CLI Arguments
// ═══════════════════════════════════════════════
#[derive(Parser, Debug)]
#[command(name = "auto-docs-ollama")]
#[command(about = "Documenta un proyecto completo usando Ollama y guarda en auto_docs/<modelo>")]
struct Cli {
    /// Ruta raíz del proyecto a documentar
    #[arg(short, long, default_value = ".")]
    proyecto: String,

    /// Modelo de Ollama a usar (ej: llama3, mistral, codellama, deepseek-coder)
    #[arg(short, long, default_value = "llama3")]
    modelo: String,

    /// URL base de Ollama
    #[arg(short, long, default_value = "http://localhost:11434")]
    ollama_url: String,

    /// Carpeta de salida base (se crea subcarpeta con nombre del modelo)
    #[arg(short, long, default_value = "auto_docs")]
    salida: String,

    /// Máximo de tokens por respuesta
    #[arg(long, default_value_t = 4096)]
    max_tokens: u32,

    /// Temperatura para generación
    #[arg(long, default_value_t = 0.3)]
    temperatura: f64,
}

// ═══════════════════════════════════════════════
// Carpetas y extensiones
// ═══════════════════════════════════════════════
const CARPETAS_IGNORADAS: &[&str] = &[
    ".claude",
    "node_modules",
    "audits",
    "server",
    "docs",
    "archive",
    "tools",
    ".git",
    ".expo",
    "dist",
    ".next",
    "build",
    "coverage",
    "__pycache__",
    "target",
    "auto_docs",
    "auto docs",
    "logs",
];

const EXTENSIONES_CODIGO: &[&str] = &[
    "ts", "tsx", "js", "jsx", "rs", "py", "sql", "json", "toml",
    "yaml", "yml", "md", "html", "css", "scss", "vue", "svelte",
];

// ═══════════════════════════════════════════════
// Ollama API types
// ═══════════════════════════════════════════════
#[derive(Serialize)]
struct OllamaRequest {
    model: String,
    prompt: String,
    stream: bool,
    options: OllamaOptions,
}

#[derive(Serialize)]
struct OllamaOptions {
    temperature: f64,
    num_predict: u32,
}

#[derive(Deserialize)]
struct OllamaResponse {
    response: String,
}

#[derive(Deserialize)]
struct OllamaTagsResponse {
    models: Vec<OllamaModel>,
}

#[derive(Deserialize)]
struct OllamaModel {
    name: String,
}

// ═══════════════════════════════════════════════
// Structs internos
// ═══════════════════════════════════════════════
#[derive(Debug, Clone)]
struct ArchivoProyecto {
    ruta_relativa: String,
    contenido: String,
    extension: String,
    tamano: u64,
}

#[derive(Debug, Clone)]
struct TablaInfo {
    nombre: String,
    sql_creacion: String,
    columnas: Vec<ColumnaInfo>,
}

#[derive(Debug, Clone)]
struct ColumnaInfo {
    nombre: String,
    tipo: String,
    not_null: bool,
    pk: bool,
    default_val: Option<String>,
}

// ═══════════════════════════════════════════════
// Motor principal
// ═══════════════════════════════════════════════
struct Documentador {
    cli: Cli,
    client: Client,
    carpeta_salida: PathBuf,
}

impl Documentador {
    fn new(cli: Cli) -> Self {
        let client = Client::builder()
            .timeout(Duration::from_secs(300))
            .build()
            .expect("Error creando cliente HTTP");

        let carpeta_salida = PathBuf::from(&cli.salida).join(&cli.modelo);

        Documentador { cli, client, carpeta_salida }
    }

    // ── Verificar conexión con Ollama ─────────────────
    fn verificar_ollama(&self) -> Result<(), String> {
        println!("  Verificando conexion con Ollama en {}...", self.cli.ollama_url);

        let url = format!("{}/api/tags", self.cli.ollama_url);
        let resp = self.client.get(&url).send()
            .map_err(|e| format!("No se pudo conectar a Ollama: {e}"))?;

        let tags: OllamaTagsResponse = resp.json()
            .map_err(|e| format!("Respuesta invalida de Ollama: {e}"))?;

        let disponibles: Vec<&str> = tags.models.iter().map(|m| m.name.as_str()).collect();

        let existe = disponibles.iter().any(|m| {
            *m == self.cli.modelo
                || *m == format!("{}:latest", self.cli.modelo)
                || m.starts_with(&format!("{}:", self.cli.modelo))
        });

        if !existe {
            return Err(format!(
                "Modelo '{}' no encontrado.\nDisponibles: {:?}\nEjecuta: ollama pull {}",
                self.cli.modelo, disponibles, self.cli.modelo
            ));
        }

        println!("  [OK] Ollama conectado. Modelo '{}' disponible.\n", self.cli.modelo);
        Ok(())
    }

    // ── Llamar a Ollama ──────────────────────────────
    fn llamar_ollama(&self, prompt: &str) -> Result<String, String> {
        let url = format!("{}/api/generate", self.cli.ollama_url);

        let body = OllamaRequest {
            model: self.cli.modelo.clone(),
            prompt: prompt.to_string(),
            stream: false,
            options: OllamaOptions {
                temperature: self.cli.temperatura,
                num_predict: self.cli.max_tokens,
            },
        };

        let resp = self.client.post(&url).json(&body).send()
            .map_err(|e| format!("Error en peticion a Ollama: {e}"))?;

        if !resp.status().is_success() {
            let status = resp.status();
            let text = resp.text().unwrap_or_default();
            return Err(format!("Ollama error {status}: {text}"));
        }

        let parsed: OllamaResponse = resp.json()
            .map_err(|e| format!("Error parseando respuesta: {e}"))?;

        Ok(parsed.response)
    }

    // ── Descubrir archivos ───────────────────────────
    fn descubrir_archivos(&self) -> Vec<ArchivoProyecto> {
        println!("  Escaneando proyecto en: {}", self.cli.proyecto);
        let mut archivos = Vec::new();

        for entry in WalkDir::new(&self.cli.proyecto)
            .into_iter()
            .filter_entry(|e| !Self::debe_ignorar(e))
        {
            let entry = match entry {
                Ok(e) => e,
                Err(_) => continue,
            };

            if !entry.file_type().is_file() {
                continue;
            }

            let path = entry.path();
            let ext = path.extension()
                .and_then(|e| e.to_str())
                .unwrap_or("")
                .to_lowercase();

            if !EXTENSIONES_CODIGO.contains(&ext.as_str()) {
                continue;
            }

            let meta = match fs::metadata(path) {
                Ok(m) => m,
                Err(_) => continue,
            };

            // Ignorar vacios y >100KB
            if meta.len() == 0 || meta.len() > 100_000 {
                continue;
            }

            let contenido = match fs::read_to_string(path) {
                Ok(c) => c,
                Err(_) => continue,
            };

            let ruta_relativa = path
                .strip_prefix(&self.cli.proyecto)
                .unwrap_or(path)
                .to_string_lossy()
                .to_string()
                .replace('\\', "/");

            archivos.push(ArchivoProyecto {
                ruta_relativa,
                contenido,
                extension: ext,
                tamano: meta.len(),
            });
        }

        println!("  Encontrados {} archivos para documentar\n", archivos.len());
        archivos
    }

    fn debe_ignorar(entry: &walkdir::DirEntry) -> bool {
        let nombre = entry.file_name().to_string_lossy().to_lowercase();

        if entry.file_type().is_dir() {
            return CARPETAS_IGNORADAS.iter()
                .any(|ign| nombre == ign.to_lowercase());
        }

        // Archivos a ignorar siempre
        matches!(
            nombre.as_str(),
            "package-lock.json" | ".package-lock.json" | "tsconfig.tsbuildinfo"
        )
    }

    // ── Extraer esquema SQLite ───────────────────────
    fn extraer_esquema_sqlite(&self) -> Vec<(String, Vec<TablaInfo>)> {
        println!("  Buscando bases de datos SQLite...");
        let mut resultados = Vec::new();

        for entry in WalkDir::new(&self.cli.proyecto)
            .into_iter()
            .filter_entry(|e| !Self::debe_ignorar(e))
        {
            let entry = match entry {
                Ok(e) => e,
                Err(_) => continue,
            };

            let path = entry.path();
            let nombre = path.file_name()
                .and_then(|n| n.to_str())
                .unwrap_or("");

            // Solo archivos .sqlite, .db, .sqlite3
            let es_sqlite = nombre.ends_with(".sqlite")
                || nombre.ends_with(".db")
                || nombre.ends_with(".sqlite3");

            if !es_sqlite || nombre.ends_with("-shm") || nombre.ends_with("-wal") {
                continue;
            }

            let ruta_rel = path
                .strip_prefix(&self.cli.proyecto)
                .unwrap_or(path)
                .to_string_lossy()
                .to_string();

            println!("    Encontrada DB: {}", ruta_rel);

            match self.leer_esquema_db(path) {
                Ok(tablas) => resultados.push((ruta_rel, tablas)),
                Err(e) => eprintln!("    [WARN] Error leyendo {}: {}", nombre, e),
            }
        }

        println!();
        resultados
    }

    fn leer_esquema_db(&self, path: &Path) -> Result<Vec<TablaInfo>, String> {
        let conn = Connection::open_with_flags(
            path,
            rusqlite::OpenFlags::SQLITE_OPEN_READ_ONLY
                | rusqlite::OpenFlags::SQLITE_OPEN_NO_MUTEX,
        )
        .map_err(|e| format!("Error abriendo DB: {e}"))?;

        let mut stmt = conn.prepare(
            "SELECT name, sql FROM sqlite_master \
             WHERE type='table' AND name NOT LIKE 'sqlite_%' \
             ORDER BY name",
        )
        .map_err(|e| format!("Error en query: {e}"))?;

        let filas: Vec<(String, String)> = stmt
            .query_map([], |row| {
                let nombre: String = row.get(0)?;
                let sql: String = row.get::<_, Option<String>>(1)?.unwrap_or_default();
                Ok((nombre, sql))
            })
            .map_err(|e| format!("Error iterando: {e}"))?
            .filter_map(|r| r.ok())
            .collect();

        let mut tablas = Vec::new();
        for (nombre, sql) in filas {
            let columnas = self.obtener_columnas(&conn, &nombre);
            tablas.push(TablaInfo { nombre, sql_creacion: sql, columnas });
        }

        Ok(tablas)
    }

    fn obtener_columnas(&self, conn: &Connection, tabla: &str) -> Vec<ColumnaInfo> {
        let query = format!("PRAGMA table_info(\"{}\")", tabla);
        let mut stmt = match conn.prepare(&query) {
            Ok(s) => s,
            Err(_) => return Vec::new(),
        };

        let rows = stmt.query_map([], |row| {
            Ok(ColumnaInfo {
                nombre: row.get(1)?,
                tipo: row.get(2)?,
                not_null: row.get::<_, i32>(3)? != 0,
                pk: row.get::<_, i32>(5)? != 0,
                default_val: row.get(4)?,
            })
        });

        match rows {
            Ok(mapped) => mapped.filter_map(|r| r.ok()).collect(),
            Err(_) => Vec::new(),
        }
    }

    // ── Agrupar archivos por módulo ──────────────────
    fn agrupar_por_modulo<'a>(
        &self,
        archivos: &'a [ArchivoProyecto],
    ) -> HashMap<String, Vec<&'a ArchivoProyecto>> {
        let mut grupos: HashMap<String, Vec<&ArchivoProyecto>> = HashMap::new();

        for archivo in archivos {
            let partes: Vec<&str> = archivo.ruta_relativa.split('/').collect();
            let modulo = if partes.len() >= 2 {
                format!("{}/{}", partes[0], partes[1])
            } else {
                partes[0].to_string()
            };
            grupos.entry(modulo).or_default().push(archivo);
        }

        grupos
    }

    // ── Formatear esquema para prompts ───────────────
    fn formatear_esquema(&self, esquemas: &[(String, Vec<TablaInfo>)]) -> String {
        if esquemas.is_empty() {
            return String::from("(No se encontraron bases de datos SQLite)\n");
        }

        let mut s = String::from("## Estructura de Bases de Datos SQLite\n\n");

        for (db_path, tablas) in esquemas {
            s.push_str(&format!("### Base de datos: `{}`\n\n", db_path));

            for tabla in tablas {
                s.push_str(&format!("#### Tabla: `{}`\n", tabla.nombre));
                s.push_str("```sql\n");
                s.push_str(&tabla.sql_creacion);
                s.push_str("\n```\n\n");

                s.push_str("| Columna | Tipo | NOT NULL | PK | Default |\n");
                s.push_str("|---------|------|----------|----|---------|\n");
                for col in &tabla.columnas {
                    s.push_str(&format!(
                        "| {} | {} | {} | {} | {} |\n",
                        col.nombre,
                        col.tipo,
                        if col.not_null { "SI" } else { "NO" },
                        if col.pk { "PK" } else { "" },
                        col.default_val.as_deref().unwrap_or("-")
                    ));
                }
                s.push('\n');
            }
        }

        s
    }

    // ── Documentar un módulo ─────────────────────────
    fn documentar_modulo(
        &self,
        nombre_modulo: &str,
        archivos: &[&ArchivoProyecto],
        esquema_db: &str,
    ) -> Result<String, String> {
        let mut contenido = String::new();

        for a in archivos {
            contenido.push_str(&format!(
                "\n### Archivo: `{}` ({} bytes, .{})\n```{}\n",
                a.ruta_relativa, a.tamano, a.extension, a.extension
            ));

            // Truncar archivos grandes para no exceder contexto
            let texto = if a.contenido.len() > 3000 {
                format!(
                    "{}\n\n// ... [truncado, {} bytes total] ...\n\n{}",
                    &a.contenido[..1500],
                    a.contenido.len(),
                    &a.contenido[a.contenido.len().saturating_sub(1000)..]
                )
            } else {
                a.contenido.clone()
            };

            contenido.push_str(&texto);
            contenido.push_str("\n```\n");
        }

        let prompt = format!(
            r#"Sos un documentador tecnico senior. Documenta el siguiente modulo de un proyecto educativo.

## Modulo: `{nombre_modulo}`

{contenido}

{esquema_db}

## Instrucciones:
1. Escribi la documentacion en espanol
2. Describi el PROPOSITO general del modulo
3. Lista cada archivo y su RESPONSABILIDAD
4. Identifica las DEPENDENCIAS entre archivos
5. Documenta las FUNCIONES/ENDPOINTS principales
6. Si hay schemas de DB relacionados, explica las RELACIONES entre tablas
7. Menciona patrones de diseno utilizados
8. Senala posibles mejoras o deuda tecnica si la ves

Formato: Markdown bien estructurado con headers, listas y bloques de codigo."#
        );

        self.llamar_ollama(&prompt)
    }

    // ── Documentación final consolidada ──────────────
    fn generar_doc_final(
        &self,
        docs: &HashMap<String, String>,
        esquema_db: &str,
    ) -> Result<String, String> {
        let lista: String = docs.keys()
            .map(|k| format!("- `{}`", k))
            .collect::<Vec<_>>()
            .join("\n");

        let resumen: String = docs.iter()
            .map(|(nombre, doc)| {
                let preview: String = doc.lines().take(15).collect::<Vec<_>>().join("\n");
                format!("### {}\n{}\n", nombre, preview)
            })
            .collect::<Vec<_>>()
            .join("\n---\n");

        let prompt = format!(
            r#"Sos un arquitecto de software senior. Basandote en la documentacion de los modulos de este proyecto educativo, genera un README completo y profesional.

## Modulos documentados:
{lista}

## Resumen de cada modulo:
{resumen}

## Esquema de base de datos:
{esquema_db}

## Genera:
1. **Titulo y descripcion** del proyecto
2. **Arquitectura general** (monorepo, API + Web + Mobile)
3. **Stack tecnologico** completo
4. **Estructura de carpetas** explicada
5. **Modulos principales** y sus responsabilidades
6. **Modelo de datos** (basandote en el esquema SQLite)
7. **Flujos principales** del sistema
8. **Instrucciones de instalacion** basicas
9. **Variables de entorno** necesarias

Escribi todo en espanol. Formato: Markdown profesional."#
        );

        self.llamar_ollama(&prompt)
    }

    // ── Diagramas de flujo con Mermaid ──────────────
    fn generar_diagrama_flujo(
        &self,
        docs: &HashMap<String, String>,
        esquema_db: &str,
    ) -> Result<String, String> {
        let lista: String = docs.keys()
            .map(|k| format!("- `{}`", k))
            .collect::<Vec<_>>()
            .join("\n");

        let prompt = format!(
            r#"Sos un arquitecto de software. Basandote en los modulos de este proyecto educativo, necesito que generes un documento .md con diagramas del flujo del proyecto.

## Modulos del proyecto:
{lista}

## Esquema de base de datos:
{esquema_db}

## Genera estos diagramas usando sintaxis Mermaid (```mermaid):

1. **Diagrama de arquitectura general**: Mostra como se conectan API, Web, Mobile, y la base de datos

2. **Flujo de autenticacion**: Login -> Token -> Autorizacion -> Roles

3. **Flujo de un alumno**: Landing -> Login -> Menu -> Explorar modulos -> Jugar modulo -> Progreso

4. **Flujo de un profesor**: Login -> Menu -> Crear aula -> Asignar modulos -> Ver reportes

5. **Flujo de administracion**: Admin -> Usuarios -> Moderacion -> Reportes -> Configuracion

6. **Modelo de datos (ER simplificado)**: Relaciones entre las tablas principales

7. **Flujo de la economia virtual**: Si existe un sistema de economia/beneficios, diagramalo

8. **Arquitectura de modulos educativos**: Como se crean, editan y consumen los modulos con sus generadores y visualizadores

Para cada diagrama:
- Usa sintaxis Mermaid valida (flowchart TD, sequenceDiagram, erDiagram, etc.)
- Agrega una breve explicacion antes de cada diagrama
- Escribi todo en espanol
- Se especifico con los nombres de componentes reales del proyecto

Formato: Markdown con bloques ```mermaid"#
        );

        self.llamar_ollama(&prompt)
    }

    // ── Generar índice ───────────────────────────────
    fn generar_indice(&self, docs: &HashMap<String, String>) -> Result<(), String> {
        let mut idx = String::from("# Indice de Documentacion Auto-Generada\n\n");
        idx.push_str(&format!(
            "> Generado el {} con modelo `{}`\n\n",
            Local::now().format("%Y-%m-%d %H:%M:%S"),
            self.cli.modelo
        ));

        idx.push_str("## Documentos generados\n\n");
        idx.push_str("| # | Archivo | Modulo |\n");
        idx.push_str("|---|---------|--------|\n");
        idx.push_str("| 0 | [Esquema DB](00_esquema_db.md) | Base de datos |\n");

        for (i, nombre) in docs.keys().enumerate() {
            let safe = nombre.replace('/', "_").replace(' ', "_");
            idx.push_str(&format!(
                "| {} | [{safe}]({:02}_{safe}.md) | `{nombre}` |\n",
                i + 1, i + 1
            ));
        }

        idx.push_str("| - | [README Proyecto](README_PROYECTO.md) | Documentacion consolidada |\n");
        idx.push_str("| - | [Flujo del Proyecto](FLUJO_PROYECTO.md) | Diagramas Mermaid |\n");

        let path = self.carpeta_salida.join("INDICE.md");
        fs::write(&path, &idx)
            .map_err(|e| format!("Error guardando indice: {e}"))?;

        println!("  Indice guardado en: {}\n", path.display());
        Ok(())
    }

    // ═══════════════════════════════════════════════
    // Pipeline principal
    // ═══════════════════════════════════════════════
    fn ejecutar(&self) -> Result<(), String> {
        let ts = Local::now().format("%Y-%m-%d %H:%M:%S").to_string();

        println!();
        println!("  =============================================");
        println!("     Auto-Docs Ollama  —  Documentador v0.1   ");
        println!("  =============================================");
        println!("   Modelo:   {}", self.cli.modelo);
        println!("   Proyecto: {}", self.cli.proyecto);
        println!("   Salida:   {}", self.carpeta_salida.display());
        println!("   Fecha:    {}", ts);
        println!("  =============================================");
        println!();

        // 1) Verificar Ollama
        self.verificar_ollama()?;

        // 2) Crear carpeta de salida
        fs::create_dir_all(&self.carpeta_salida)
            .map_err(|e| format!("Error creando carpeta: {e}"))?;

        // 3) Descubrir archivos
        let archivos = self.descubrir_archivos();
        if archivos.is_empty() {
            return Err("No se encontraron archivos para documentar".into());
        }

        // 4) Extraer esquemas SQLite (solo estructura, no datos)
        let esquemas = self.extraer_esquema_sqlite();
        let esquema_fmt = self.formatear_esquema(&esquemas);

        let schema_path = self.carpeta_salida.join("00_esquema_db.md");
        fs::write(&schema_path, &esquema_fmt)
            .map_err(|e| format!("Error guardando esquema: {e}"))?;
        println!("  Esquema DB guardado: {}\n", schema_path.display());

        // 5) Agrupar por modulo
        let modulos = self.agrupar_por_modulo(&archivos);
        let total = modulos.len();
        println!("  {} modulos identificados para documentar\n", total);

        // 6) Documentar cada modulo
        let pb = ProgressBar::new(total as u64);
        pb.set_style(
            ProgressStyle::default_bar()
                .template("  [{bar:40.cyan/blue}] {pos}/{len} {msg}")
                .unwrap()
                .progress_chars("##-"),
        );

        let mut docs_modulos: HashMap<String, String> = HashMap::new();

        for (i, (nombre, archivos_mod)) in modulos.iter().enumerate() {
            pb.set_message(format!("-> {}", nombre));

            match self.documentar_modulo(nombre, archivos_mod, &esquema_fmt) {
                Ok(doc) => {
                    let safe = nombre.replace('/', "_").replace(' ', "_");
                    let p = self.carpeta_salida.join(format!("{:02}_{}.md", i + 1, safe));
                    if let Err(e) = fs::write(&p, &doc) {
                        eprintln!("  [WARN] Error guardando {}: {}", p.display(), e);
                    }
                    docs_modulos.insert(nombre.clone(), doc);
                }
                Err(e) => {
                    eprintln!("  [WARN] Error documentando '{}': {}", nombre, e);
                }
            }

            pb.inc(1);
        }
        pb.finish_with_message("[OK] Modulos documentados");
        println!();

        // 7) README final consolidado
        println!("  Generando documentacion final consolidada...");
        match self.generar_doc_final(&docs_modulos, &esquema_fmt) {
            Ok(readme) => {
                let p = self.carpeta_salida.join("README_PROYECTO.md");
                fs::write(&p, &readme).map_err(|e| format!("Error: {e}"))?;
                println!("  [OK] README: {}", p.display());
            }
            Err(e) => eprintln!("  [WARN] Error generando README: {}", e),
        }

        // 8) Diagramas de flujo
        println!("  Generando diagramas de flujo...");
        match self.generar_diagrama_flujo(&docs_modulos, &esquema_fmt) {
            Ok(flujo) => {
                let p = self.carpeta_salida.join("FLUJO_PROYECTO.md");
                fs::write(&p, &flujo).map_err(|e| format!("Error: {e}"))?;
                println!("  [OK] Flujos: {}", p.display());
            }
            Err(e) => eprintln!("  [WARN] Error generando flujo: {}", e),
        }

        // 9) Indice
        self.generar_indice(&docs_modulos)?;

        println!("  =============================================");
        println!("     Documentacion completa!");
        println!("     Archivos en: {}", self.carpeta_salida.display());
        println!("     Modulos documentados: {}", docs_modulos.len());
        println!("  =============================================");
        println!();

        Ok(())
    }
}

// ═══════════════════════════════════════════════
// Main
// ═══════════════════════════════════════════════
fn main() {
    let cli = Cli::parse();
    let documentador = Documentador::new(cli);

    if let Err(e) = documentador.ejecutar() {
        eprintln!("\n  [ERROR] {e}");
        std::process::exit(1);
    }
}
