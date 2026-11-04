// Evita la consola extra en Windows al compilar en modo release.
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    virtualbook_offline_lib::run()
}
