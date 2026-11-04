use vb_nucleo::almacen::{Almacen, Resultado, Sentencia};
use vb_nucleo::paquetes::Instalado;
use serde_json::{Map, Value};
use tauri::Manager;

#[tauri::command]
fn almacen_consulta(estado: tauri::State<Almacen>, base: String, sql: String, params: Vec<Value>) -> Result<Vec<Map<String, Value>>, String> {
    estado.consulta(&base, &sql, &params)
}

#[tauri::command]
fn almacen_ejecutar(estado: tauri::State<Almacen>, base: String, sql: String, params: Vec<Value>) -> Result<Resultado, String> {
    estado.ejecutar(&base, &sql, &params)
}

#[tauri::command]
fn almacen_lote(estado: tauri::State<Almacen>, base: String, sentencias: Vec<Sentencia>) -> Result<usize, String> {
    estado.lote(&base, &sentencias)
}

/// Una parte de un paquete, en base64. En Android la IPC de Tauri pasa los bytes crudos como JSON (un objeto con un
/// número por byte), así que se usa base64 en todas las plataformas: un solo camino.
#[tauri::command]
fn paquete_parte(estado: tauri::State<Almacen>, recibido: String, datos: String, primera: bool) -> Result<u64, String> {
    use base64::Engine;
    let bytes = base64::engine::general_purpose::STANDARD.decode(datos).map_err(|_| "parte mal codificada".to_string())?;
    estado.recibir_parte(&recibido, &bytes, primera)
}

#[tauri::command]
fn paquete_instalar(
    estado: tauri::State<Almacen>,
    recibido: String,
    esperado: Option<String>,
    sha256: Option<String>,
) -> Result<Instalado, String> {
    estado.instalar_paquete(&recibido, esperado.as_deref(), sha256.as_deref())
}

#[tauri::command]
fn diccionario_consulta(estado: tauri::State<Almacen>, idioma: String, sql: String, params: Vec<Value>) -> Result<Vec<Map<String, Value>>, String> {
    estado.consulta_diccionario(&idioma, &sql, &params)
}

#[tauri::command]
fn diccionario_borrar(estado: tauri::State<Almacen>, idioma: String) -> Result<(), String> {
    estado.borrar_diccionario(&idioma)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(|app| {
            let carpeta = app.path().app_data_dir()?;
            app.manage(Almacen::abrir(&carpeta)?);
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            almacen_consulta,
            almacen_ejecutar,
            almacen_lote,
            paquete_parte,
            paquete_instalar,
            diccionario_consulta,
            diccionario_borrar
        ])
        .run(tauri::generate_context!())
        .expect("no se pudo iniciar la app");
}
