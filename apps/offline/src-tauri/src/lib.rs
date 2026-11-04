use vb_nucleo::almacen::{Almacen, Resultado, Sentencia};
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

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(|app| {
            let carpeta = app.path().app_data_dir()?;
            app.manage(Almacen::abrir(&carpeta)?);
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![almacen_consulta, almacen_ejecutar, almacen_lote])
        .run(tauri::generate_context!())
        .expect("no se pudo iniciar la app");
}
