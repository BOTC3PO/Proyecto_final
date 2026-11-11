//! Virtual Book sin conexión, «modo navegador» (Huayra 5 y 6).
//!
//! Esas versiones no tienen la `libwebkit2gtk-4.1` que pide Tauri 2. Este programa se compila estático (musl), atiende
//! la misma web de la app y su almacén en `127.0.0.1` y la abre en el navegador del sistema. Los datos quedan en la
//! misma carpeta que usa la app de escritorio.
//!
//! El almacén solo atiende al navegador que entró con un código de un solo uso: el programa lo pasa al abrirlo y se
//! cambia por una cookie (ver `servidor.rs`).

mod servidor;

use std::net::{SocketAddr, TcpStream};
use std::io::{Read, Write};
use std::path::{Path, PathBuf};
use std::process::{Command, Stdio};
use std::time::Duration;

/// El mismo identificador que la app de Tauri: así las dos usan la misma carpeta de datos.
const IDENTIFICADOR: &str = "ar.virtualbook.offline";
/// Puerto fijo: el origen (`http://127.0.0.1:47811`) tiene que ser siempre el mismo, porque la web guarda su sesión
/// por origen y la plataforma lo tiene que aceptar en `CORS_ORIGIN`.
const PUERTO: u16 = 47811;

const AYUDA: &str = "Virtual Book sin conexión (modo navegador)

Uso: virtualbook-sin-conexion [opciones]

  --puerto N    puerto en 127.0.0.1 (por omisión 47811)
  --web DIR     carpeta de la web (por omisión, «web» al lado del programa)
  --datos DIR   carpeta de los datos (por omisión, la misma de la app de escritorio)
  --no-abrir    no abrir el navegador
  --version     muestra la versión

El navegador se elige con la variable VB_NAVEGADOR; si no está, se usa el del sistema.";

pub struct Opciones {
    pub puerto: u16,
    pub web: PathBuf,
    pub datos: PathBuf,
    pub abrir: bool,
}

fn carpeta_de_datos() -> Result<PathBuf, String> {
    let absoluta = |v: Option<std::ffi::OsString>| v.map(PathBuf::from).filter(|p| p.is_absolute());
    #[cfg(windows)]
    let base = absoluta(std::env::var_os("APPDATA"));
    #[cfg(not(windows))]
    let base = absoluta(std::env::var_os("XDG_DATA_HOME"))
        .or_else(|| absoluta(std::env::var_os("HOME")).map(|h| h.join(".local").join("share")));
    base.map(|b| b.join(IDENTIFICADOR)).ok_or_else(|| "no se encontró la carpeta personal (HOME)".to_string())
}

fn leer_opciones() -> Result<Option<Opciones>, String> {
    let exe = std::env::current_exe().map_err(|e| e.to_string())?;
    let mut o = Opciones {
        puerto: PUERTO,
        web: exe.parent().unwrap_or(Path::new(".")).join("web"),
        datos: PathBuf::new(),
        abrir: true,
    };
    let mut datos = None;
    let mut args = std::env::args().skip(1);
    while let Some(a) = args.next() {
        let mut valor = || args.next().ok_or_else(|| format!("falta el valor de {a}"));
        match a.as_str() {
            "--puerto" => o.puerto = valor()?.parse().map_err(|_| "puerto inválido".to_string())?,
            "--web" => o.web = PathBuf::from(valor()?),
            "--datos" => datos = Some(PathBuf::from(valor()?)),
            "--no-abrir" => o.abrir = false,
            "--version" => {
                println!("virtualbook-sin-conexion {}", env!("CARGO_PKG_VERSION"));
                return Ok(None);
            }
            "-h" | "--ayuda" | "--help" => {
                println!("{AYUDA}");
                return Ok(None);
            }
            otro => return Err(format!("opción desconocida: {otro} (ver --ayuda)")),
        }
    }
    o.datos = match datos {
        Some(d) => d,
        None => carpeta_de_datos()?,
    };
    if !o.web.join("index.html").is_file() {
        return Err(format!("no está la web de la app en {}", o.web.display()));
    }
    Ok(Some(o))
}

/// Abre la dirección en el navegador: el de `VB_NAVEGADOR` o el del sistema.
fn abrir_navegador(url: &str) {
    let mut candidatos: Vec<String> = std::env::var("VB_NAVEGADOR").ok().filter(|v| !v.trim().is_empty()).into_iter().collect();
    #[cfg(target_os = "linux")]
    candidatos.extend(["xdg-open", "x-www-browser", "firefox-esr", "firefox", "chromium", "chromium-browser"].map(String::from));
    #[cfg(target_os = "macos")]
    candidatos.push("open".into());
    #[cfg(windows)]
    candidatos.push("explorer".into());
    for programa in candidatos {
        let lanzado = Command::new(&programa).arg(url).stdin(Stdio::null()).stdout(Stdio::null()).stderr(Stdio::null()).spawn();
        if lanzado.is_ok() {
            return;
        }
    }
    eprintln!("No se pudo abrir el navegador. Abrí esta dirección: {url}");
}

/// Si ya hay una copia atendiendo en el puerto, le pide un código para abrir otra pestaña.
fn pedir_codigo_a_la_copia_abierta(puerto: u16, llave: &str) -> Option<String> {
    let mut s = TcpStream::connect_timeout(&SocketAddr::from(([127, 0, 0, 1], puerto)), Duration::from_secs(2)).ok()?;
    s.set_read_timeout(Some(Duration::from_secs(5))).ok()?;
    write!(
        s,
        "POST /__vb/codigo HTTP/1.1\r\nHost: 127.0.0.1:{puerto}\r\nX-VB-Llave: {llave}\r\nContent-Length: 0\r\nConnection: close\r\n\r\n"
    )
    .ok()?;
    let mut respuesta = String::new();
    s.read_to_string(&mut respuesta).ok()?;
    let (cabecera, cuerpo) = respuesta.split_once("\r\n\r\n")?;
    let codigo = cuerpo.trim();
    (cabecera.starts_with("HTTP/1.1 200") && servidor::es_hex(codigo, 32)).then(|| codigo.to_string())
}

fn ejecutar() -> Result<(), String> {
    let Some(o) = leer_opciones()? else { return Ok(()) };
    std::fs::create_dir_all(&o.datos).map_err(|e| format!("no se pudo crear {}: {e}", o.datos.display()))?;
    let llave = servidor::llave_del_dispositivo(&o.datos)?;
    let direccion = format!("http://127.0.0.1:{}", o.puerto);

    let server = match tiny_http::Server::http(SocketAddr::from(([127, 0, 0, 1], o.puerto))) {
        Ok(s) => s,
        Err(e) => {
            // Lo más común: la app ya está abierta. Se abre otra pestaña en la misma.
            if let Some(codigo) = pedir_codigo_a_la_copia_abierta(o.puerto, &llave) {
                if o.abrir {
                    abrir_navegador(&format!("{direccion}/__vb/entrar?codigo={codigo}"));
                }
                return Ok(());
            }
            return Err(format!("no se pudo usar el puerto {} ({e}); ¿otro programa lo está usando?", o.puerto));
        }
    };
    let estado = servidor::Estado::nuevo(&o, llave)?;
    eprintln!("Virtual Book sin conexión atiende en {direccion} (datos en {}).", o.datos.display());
    if o.abrir {
        abrir_navegador(&format!("{direccion}/__vb/entrar?codigo={}", estado.codigo_nuevo()));
    }
    servidor::atender(server, estado);
    Ok(())
}

fn main() {
    if let Err(e) = ejecutar() {
        eprintln!("virtualbook-sin-conexion: {e}");
        std::process::exit(1);
    }
}
