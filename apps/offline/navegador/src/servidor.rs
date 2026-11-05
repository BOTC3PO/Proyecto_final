//! Servidor en 127.0.0.1: la web de la app (archivos) y su almacén (`/__almacen/...`, lo que en Tauri son comandos).
//!
//! Cualquier página abierta en el navegador puede mandar pedidos a 127.0.0.1, y cualquier programa de la máquina
//! puede conectarse al puerto. Por eso:
//! - solo se aceptan pedidos dirigidos a `127.0.0.1:<puerto>` (otro `Host` puede ser un DNS que apunta acá);
//! - el almacén pide la cookie con la llave del dispositivo (`navegador.llave`, permisos 600 en la carpeta de datos).
//!   El navegador la recibe al entrar con un código de un solo uso que vence a los 2 minutos; es `SameSite=Strict`,
//!   así que otras páginas no la mandan;
//! - además, si el pedido trae `Origin`, tiene que ser el de la app.

use std::fs::{self, File, OpenOptions};
use std::io::{Read, Write};
use std::path::{Component, Path, PathBuf};
use std::sync::atomic::{AtomicU64, Ordering};
use std::sync::{Arc, Mutex};
use std::time::{Duration, Instant};

use serde_json::{json, Value};
use tiny_http::{Header, Method, Request, Response, ResponseBox, Server};
use vb_nucleo::almacen::{Almacen, Sentencia};

use crate::Opciones;

const COOKIE: &str = "vb_sin_conexion";
const VIDA_DEL_CODIGO: Duration = Duration::from_secs(120);
/// Sin pedidos durante este tiempo, el programa se cierra (la web manda un latido cada 2 minutos mientras está abierta).
const INACTIVIDAD: Duration = Duration::from_secs(20 * 60);
/// Lo más grande que se recibe: una parte de un paquete son 2 MB; un lote de sentencias, bastante menos.
const CUERPO_MAXIMO: u64 = 32 << 20;
const HILOS: usize = 4;

pub struct Estado {
    almacen: Almacen,
    web: PathBuf,
    puerto: u16,
    llave: String,
    codigos: Mutex<Vec<(String, Instant)>>,
    inicio: Instant,
    ultimo_pedido: AtomicU64,
}

pub fn es_hex(s: &str, largo: usize) -> bool {
    s.len() == largo && s.bytes().all(|b| b.is_ascii_hexdigit())
}

fn azar_hex(bytes: usize) -> String {
    let mut b = vec![0u8; bytes];
    getrandom::fill(&mut b).expect("el sistema no da números al azar");
    b.iter().map(|x| format!("{x:02x}")).collect()
}

/// Comparación en tiempo constante (la llave no se adivina midiendo cuánto tarda en fallar).
fn iguales(a: &str, b: &str) -> bool {
    a.len() == b.len() && a.bytes().zip(b.bytes()).fold(0u8, |d, (x, y)| d | (x ^ y)) == 0
}

/// La llave del dispositivo: se crea la primera vez y queda en la carpeta de datos, solo para el usuario.
pub fn llave_del_dispositivo(datos: &Path) -> Result<String, String> {
    let ruta = datos.join("navegador.llave");
    if let Ok(s) = fs::read_to_string(&ruta) {
        let s = s.trim().to_string();
        if es_hex(&s, 64) {
            return Ok(s);
        }
    }
    let llave = azar_hex(32);
    let mut o = OpenOptions::new();
    o.write(true).create(true).truncate(true);
    #[cfg(unix)]
    std::os::unix::fs::OpenOptionsExt::mode(&mut o, 0o600);
    let mut f = o.open(&ruta).map_err(|e| format!("no se pudo guardar la llave: {e}"))?;
    f.write_all(llave.as_bytes()).map_err(|e| e.to_string())?;
    Ok(llave)
}

impl Estado {
    pub fn nuevo(o: &Opciones, llave: String) -> Result<Arc<Self>, String> {
        Ok(Arc::new(Self {
            almacen: Almacen::abrir(&o.datos)?,
            web: o.web.canonicalize().map_err(|e| e.to_string())?,
            puerto: o.puerto,
            llave,
            codigos: Mutex::new(Vec::new()),
            inicio: Instant::now(),
            ultimo_pedido: AtomicU64::new(0),
        }))
    }

    /// Un código de un solo uso para que el navegador entre (`/__vb/entrar?codigo=...`).
    pub fn codigo_nuevo(&self) -> String {
        let codigo = azar_hex(16);
        let mut c = self.codigos.lock().unwrap_or_else(|e| e.into_inner());
        c.retain(|(_, t)| t.elapsed() < VIDA_DEL_CODIGO);
        c.truncate(8);
        c.push((codigo.clone(), Instant::now()));
        codigo
    }

    fn usar_codigo(&self, codigo: &str) -> bool {
        let mut c = self.codigos.lock().unwrap_or_else(|e| e.into_inner());
        c.retain(|(_, t)| t.elapsed() < VIDA_DEL_CODIGO);
        match c.iter().position(|(x, _)| iguales(x, codigo)) {
            Some(i) => {
                c.remove(i);
                true
            }
            None => false,
        }
    }

    fn marcar_pedido(&self) {
        self.ultimo_pedido.store(self.inicio.elapsed().as_secs(), Ordering::Relaxed);
    }

    fn inactivo(&self) -> bool {
        self.inicio.elapsed().as_secs().saturating_sub(self.ultimo_pedido.load(Ordering::Relaxed)) > INACTIVIDAD.as_secs()
    }

    fn origen(&self) -> String {
        format!("http://127.0.0.1:{}", self.puerto)
    }
}

pub fn atender(server: Server, estado: Arc<Estado>) {
    let server = Arc::new(server);
    let vigia = Arc::clone(&estado);
    std::thread::spawn(move || loop {
        std::thread::sleep(Duration::from_secs(30));
        if vigia.inactivo() {
            eprintln!("Virtual Book sin conexión: sin uso durante {} minutos, se cierra.", INACTIVIDAD.as_secs() / 60);
            std::process::exit(0);
        }
    });
    let hilos: Vec<_> = (0..HILOS)
        .map(|_| {
            let (server, estado) = (Arc::clone(&server), Arc::clone(&estado));
            std::thread::spawn(move || {
                for mut pedido in server.incoming_requests() {
                    estado.marcar_pedido();
                    let respuesta = responder(&estado, &mut pedido);
                    let _ = pedido.respond(respuesta);
                }
            })
        })
        .collect();
    for h in hilos {
        let _ = h.join();
    }
}

fn cabecera(nombre: &str, valor: &str) -> Header {
    Header::from_bytes(nombre.as_bytes(), valor.as_bytes()).expect("cabecera válida")
}

fn valor_de<'a>(pedido: &'a Request, nombre: &'static str) -> Option<&'a str> {
    pedido.headers().iter().find(|h| h.field.equiv(nombre)).map(|h| h.value.as_str())
}

fn con_seguridad(r: ResponseBox) -> ResponseBox {
    r.with_header(cabecera("X-Content-Type-Options", "nosniff"))
        .with_header(cabecera("X-Frame-Options", "DENY"))
        .with_header(cabecera("Referrer-Policy", "no-referrer"))
}

fn json_resp(estado: u16, v: &Value) -> ResponseBox {
    Response::from_data(v.to_string().into_bytes())
        .with_status_code(estado)
        .with_header(cabecera("Content-Type", "application/json; charset=utf-8"))
        .with_header(cabecera("Cache-Control", "no-store"))
        .boxed()
}

fn texto(estado: u16, tipo: &str, cuerpo: &str) -> ResponseBox {
    Response::from_data(cuerpo.as_bytes().to_vec())
        .with_status_code(estado)
        .with_header(cabecera("Content-Type", tipo))
        .with_header(cabecera("Cache-Control", "no-store"))
        .boxed()
}

fn error(estado: u16, mensaje: &str, codigo: Option<&str>) -> ResponseBox {
    let mut v = json!({ "error": mensaje });
    if let Some(c) = codigo {
        v["code"] = json!(c);
    }
    json_resp(estado, &v)
}

fn redirigir(a: &str) -> ResponseBox {
    Response::empty(303).with_header(cabecera("Location", a)).with_header(cabecera("Cache-Control", "no-store")).boxed()
}

fn pagina_de_aviso(mensaje: &str) -> ResponseBox {
    let html = format!(
        "<!doctype html><html lang=\"es\"><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width\">\
         <title>Virtual Book</title><body style=\"font-family:sans-serif;max-width:32rem;margin:3rem auto;padding:0 1rem\">\
         <h1 style=\"font-size:1.3rem\">Virtual Book sin conexión</h1><p>{mensaje}</p></body></html>"
    );
    texto(403, "text/html; charset=utf-8", &html)
}

fn parametro(consulta: &str, nombre: &str) -> Option<String> {
    consulta.split('&').find_map(|par| {
        let (k, v) = par.split_once('=').unwrap_or((par, ""));
        (k == nombre).then(|| decodificar(v)).flatten()
    })
}

/// Decodifica `%xx` (y `+` en la consulta no hace falta: los valores que se usan son hexadecimales o ids).
fn decodificar(s: &str) -> Option<String> {
    let b = s.as_bytes();
    let mut salida = Vec::with_capacity(b.len());
    let mut i = 0;
    while i < b.len() {
        if b[i] == b'%' {
            let h = std::str::from_utf8(b.get(i + 1..i + 3)?).ok()?;
            salida.push(u8::from_str_radix(h, 16).ok()?);
            i += 3;
        } else {
            salida.push(b[i]);
            i += 1;
        }
    }
    String::from_utf8(salida).ok()
}

fn cookie_de(pedido: &Request) -> Option<String> {
    valor_de(pedido, "Cookie")?.split(';').find_map(|c| {
        let (k, v) = c.trim().split_once('=')?;
        (k == COOKIE).then(|| v.to_string())
    })
}

fn responder(estado: &Estado, pedido: &mut Request) -> ResponseBox {
    con_seguridad(responder_sin_cabeceras(estado, pedido))
}

fn responder_sin_cabeceras(estado: &Estado, pedido: &mut Request) -> ResponseBox {
    let (ruta, consulta) = {
        let url = pedido.url();
        let (r, q) = url.split_once('?').unwrap_or((url, ""));
        (r.to_string(), q.to_string())
    };
    let host = valor_de(pedido, "Host").unwrap_or("");
    if host != format!("127.0.0.1:{}", estado.puerto) {
        // Con «localhost» se pasa a 127.0.0.1: la web guarda su sesión por origen y tiene que ser siempre el mismo.
        if host == format!("localhost:{}", estado.puerto) && *pedido.method() == Method::Get {
            return redirigir(&format!("{}{}", estado.origen(), pedido.url()));
        }
        return texto(421, "text/plain; charset=utf-8", "dirección no permitida");
    }
    let llave_ok = cookie_de(pedido).is_some_and(|c| iguales(&c, &estado.llave));

    match (pedido.method().clone(), ruta.as_str()) {
        (Method::Get, "/__vb/estado") => json_resp(200, &json!({ "app": "virtualbook-sin-conexion", "version": env!("CARGO_PKG_VERSION") })),
        (Method::Get, "/__vb/entrar") => {
            let codigo = parametro(&consulta, "codigo").unwrap_or_default();
            if es_hex(&codigo, 32) && estado.usar_codigo(&codigo) {
                let galleta = format!("{COOKIE}={}; Path=/; HttpOnly; SameSite=Strict; Max-Age=31536000", estado.llave);
                return redirigir("/").with_header(cabecera("Set-Cookie", &galleta));
            }
            if llave_ok {
                return redirigir("/");
            }
            pagina_de_aviso("Este enlace ya se usó o venció. Abrí Virtual Book desde el menú de aplicaciones.")
        }
        // Lo pide otra copia del programa (con la llave del archivo), para abrir otra pestaña.
        (Method::Post, "/__vb/codigo") => {
            let llave = valor_de(pedido, "X-VB-Llave").unwrap_or("");
            if valor_de(pedido, "Origin").is_some() || !iguales(llave, &estado.llave) {
                return error(403, "no autorizado", None);
            }
            texto(200, "text/plain; charset=utf-8", &estado.codigo_nuevo())
        }
        (metodo, r) if r.starts_with("/__almacen/") => {
            if metodo != Method::Post {
                return error(405, "método no permitido", None);
            }
            if let Some(o) = valor_de(pedido, "Origin") {
                if o != estado.origen() {
                    return error(403, "origen no permitido", None);
                }
            }
            if !llave_ok {
                return error(401, "Abrí Virtual Book desde el menú de aplicaciones.", Some("SIN_LLAVE"));
            }
            let operacion = r.trim_start_matches("/__almacen/").to_string();
            match almacen(estado, pedido, &operacion, &consulta) {
                Ok(v) => json_resp(200, &v),
                Err((codigo, mensaje)) => error(codigo, &mensaje, None),
            }
        }
        (Method::Get | Method::Head, r) => archivo(estado, r),
        _ => error(405, "método no permitido", None),
    }
}

fn leer_cuerpo(pedido: &mut Request) -> Result<Vec<u8>, (u16, String)> {
    if pedido.body_length().is_some_and(|n| n as u64 > CUERPO_MAXIMO) {
        return Err((413, "pedido demasiado grande".into()));
    }
    let mut cuerpo = Vec::new();
    pedido.as_reader().take(CUERPO_MAXIMO + 1).read_to_end(&mut cuerpo).map_err(|e| (400, e.to_string()))?;
    if cuerpo.len() as u64 > CUERPO_MAXIMO {
        return Err((413, "pedido demasiado grande".into()));
    }
    Ok(cuerpo)
}

fn a_json<T: serde::Serialize>(r: Result<T, String>) -> Result<Value, (u16, String)> {
    r.map(|x| json!(x)).map_err(|e| (400, e))
}

fn campo<'a>(v: &'a Value, nombre: &str) -> Result<&'a str, (u16, String)> {
    v.get(nombre).and_then(Value::as_str).ok_or_else(|| (400, format!("falta «{nombre}»")))
}

fn parametros(v: &Value) -> Vec<Value> {
    v.get("params").and_then(Value::as_array).cloned().unwrap_or_default()
}

/// Las operaciones del almacén, con los mismos nombres que usa `almacenHttp` en `src/api-local/almacen.ts`.
fn almacen(estado: &Estado, pedido: &mut Request, operacion: &str, consulta: &str) -> Result<Value, (u16, String)> {
    let a = &estado.almacen;
    let cuerpo = leer_cuerpo(pedido)?;
    if operacion == "paquete-parte" {
        let recibido = parametro(consulta, "recibido").ok_or((400, "falta «recibido»".to_string()))?;
        let primera = parametro(consulta, "primera").is_some_and(|v| v == "1");
        return a_json(a.recibir_parte(&recibido, &cuerpo, primera));
    }
    if operacion == "latido" {
        return Ok(Value::Null);
    }
    let v: Value = serde_json::from_slice(&cuerpo).map_err(|_| (400, "el cuerpo no es JSON".to_string()))?;
    match operacion {
        "consulta" => a_json(a.consulta(campo(&v, "base")?, campo(&v, "sql")?, &parametros(&v))),
        "ejecutar" => a_json(a.ejecutar(campo(&v, "base")?, campo(&v, "sql")?, &parametros(&v))),
        "lote" => {
            let sentencias: Vec<Sentencia> =
                serde_json::from_value(v.get("sentencias").cloned().unwrap_or(Value::Null)).map_err(|e| (400, e.to_string()))?;
            a_json(a.lote(campo(&v, "base")?, &sentencias))
        }
        "paquete-instalar" => {
            let opcional = |n: &str| v.get(n).and_then(Value::as_str);
            a_json(a.instalar_paquete(campo(&v, "recibido")?, opcional("esperado"), opcional("sha256")))
        }
        "diccionario-consulta" => a_json(a.consulta_diccionario(campo(&v, "idioma")?, campo(&v, "sql")?, &parametros(&v))),
        "diccionario-borrar" => a_json(a.borrar_diccionario(campo(&v, "idioma")?)),
        _ => Err((404, format!("operación desconocida: {operacion}"))),
    }
}

/// La ruta del archivo dentro de la carpeta de la web, o `None` si intenta salir de ella.
fn ruta_segura(web: &Path, ruta: &str) -> Option<PathBuf> {
    let ruta = decodificar(ruta)?;
    if ruta.contains('\0') || ruta.contains('\\') {
        return None;
    }
    let relativa = Path::new(ruta.trim_start_matches('/'));
    if !relativa.components().all(|c| matches!(c, Component::Normal(_))) {
        return None;
    }
    Some(web.join(relativa))
}

fn tipo_de(ruta: &Path) -> &'static str {
    match ruta.extension().and_then(|e| e.to_str()).unwrap_or("").to_ascii_lowercase().as_str() {
        "html" => "text/html; charset=utf-8",
        "js" | "mjs" => "text/javascript; charset=utf-8",
        "css" => "text/css; charset=utf-8",
        "json" | "map" => "application/json; charset=utf-8",
        "webmanifest" => "application/manifest+json",
        "txt" => "text/plain; charset=utf-8",
        "xml" => "application/xml",
        "svg" => "image/svg+xml",
        "png" => "image/png",
        "jpg" | "jpeg" => "image/jpeg",
        "gif" => "image/gif",
        "webp" => "image/webp",
        "avif" => "image/avif",
        "ico" => "image/x-icon",
        "woff" => "font/woff",
        "woff2" => "font/woff2",
        "ttf" => "font/ttf",
        "otf" => "font/otf",
        "wasm" => "application/wasm",
        "mp3" => "audio/mpeg",
        "ogg" => "audio/ogg",
        "wav" => "audio/wav",
        "mp4" => "video/mp4",
        "webm" => "video/webm",
        "pdf" => "application/pdf",
        "gz" => "application/gzip",
        _ => "application/octet-stream",
    }
}

fn archivo(estado: &Estado, ruta: &str) -> ResponseBox {
    let Some(mut destino) = ruta_segura(&estado.web, ruta) else {
        return texto(404, "text/plain; charset=utf-8", "no encontrado");
    };
    if destino.is_dir() {
        destino = destino.join("index.html");
    }
    if !destino.is_file() {
        // Las rutas de la web (sin extensión) las resuelve la propia web.
        let es_ruta_de_la_web = Path::new(ruta).extension().is_none();
        if !es_ruta_de_la_web {
            return texto(404, "text/plain; charset=utf-8", "no encontrado");
        }
        destino = estado.web.join("index.html");
    }
    let Ok(f) = File::open(&destino) else {
        return texto(404, "text/plain; charset=utf-8", "no encontrado");
    };
    // Los archivos de `assets/` llevan un hash en el nombre: no cambian nunca.
    let cache = if ruta.starts_with("/assets/") { "public, max-age=31536000, immutable" } else { "no-cache" };
    Response::from_file(f)
        .with_header(cabecera("Content-Type", tipo_de(&destino)))
        .with_header(cabecera("Cache-Control", cache))
        .boxed()
}

#[cfg(test)]
mod pruebas {
    use super::*;

    #[test]
    fn la_ruta_no_sale_de_la_web() {
        let web = Path::new("/web");
        assert_eq!(ruta_segura(web, "/assets/a.js"), Some(PathBuf::from("/web/assets/a.js")));
        assert_eq!(ruta_segura(web, "/m%C3%B3dulos"), Some(PathBuf::from("/web/módulos")));
        assert_eq!(ruta_segura(web, "/"), Some(PathBuf::from("/web/")));
        for mala in ["/../etc/passwd", "/a/../../x", "/%2e%2e/x", "/a%5c..%5cx", "/a%00", "/%zz", "/./a"] {
            assert_eq!(ruta_segura(web, mala), None, "{mala}");
        }
    }

    #[test]
    fn parametros_de_la_consulta() {
        assert_eq!(parametro("a=1&codigo=ab%20c", "codigo").as_deref(), Some("ab c"));
        assert_eq!(parametro("primera", "primera").as_deref(), Some(""));
        assert_eq!(parametro("x=1", "codigo"), None);
    }

    #[test]
    fn hex_y_comparacion() {
        assert!(es_hex(&azar_hex(16), 32));
        assert!(!es_hex("zz", 2));
        assert!(iguales("abc", "abc"));
        assert!(!iguales("abc", "abd"));
        assert!(!iguales("abc", "ab"));
    }

    #[test]
    fn la_llave_se_guarda_y_se_reutiliza() {
        let d = std::env::temp_dir().join(format!("vb-llave-{}-{}", std::process::id(), azar_hex(4)));
        fs::create_dir_all(&d).unwrap();
        let a = llave_del_dispositivo(&d).unwrap();
        assert_eq!(llave_del_dispositivo(&d).unwrap(), a);
        #[cfg(unix)]
        {
            use std::os::unix::fs::PermissionsExt;
            assert_eq!(fs::metadata(d.join("navegador.llave")).unwrap().permissions().mode() & 0o777, 0o600);
        }
        fs::remove_dir_all(&d).unwrap();
    }
}
