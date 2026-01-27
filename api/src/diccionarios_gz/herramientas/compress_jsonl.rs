use std::collections::HashSet;
use std::fs::{self, File};
use std::io::{self, BufReader, BufWriter};
use std::path::{Path, PathBuf};
use std::sync::atomic::{AtomicUsize, Ordering};
use std::sync::Arc;
use flate2::write::GzEncoder;
use flate2::Compression;
use rayon::prelude::*;
use walkdir::WalkDir;

const LANGS: &[&str] = &["ar", "en", "es", "fr", "hi", "ja", "pt", "ru", "zh"];

fn compress_one(
    jsonl_path: &Path,
    src_root: &Path,
    dst_root: &Path,
    level: u32,
) -> io::Result<bool> {
    let rel = jsonl_path.strip_prefix(src_root)
        .map_err(|e| io::Error::new(io::ErrorKind::Other, e))?;
    
    let mut gz_path = dst_root.join(rel);
    let new_name = format!("{}.gz", gz_path.file_name().unwrap().to_string_lossy());
    gz_path.set_file_name(new_name);

    // Si ya existe, skip
    if gz_path.exists() {
        return Ok(false);
    }

    // Crear directorio padre si no existe
    if let Some(parent) = gz_path.parent() {
        fs::create_dir_all(parent)?;
    }

    // Comprimir
    let input = File::open(jsonl_path)?;
    let output = File::create(&gz_path)?;
    
    let mut reader = BufReader::new(input);
    let encoder = GzEncoder::new(BufWriter::new(output), Compression::new(level));
    let mut writer = BufWriter::new(encoder);
    
    io::copy(&mut reader, &mut writer)?;
    
    Ok(true)
}

fn main() -> io::Result<()> {
    let args: Vec<String> = std::env::args().collect();
    
    // Parse argumentos simples
    let workers = args.iter()
        .position(|a| a == "--workers")
        .and_then(|i| args.get(i + 1))
        .and_then(|s| s.parse().ok())
        .unwrap_or_else(|| num_cpus::get().min(12));
    
    let level = args.iter()
        .position(|a| a == "--level")
        .and_then(|i| args.get(i + 1))
        .and_then(|s| s.parse().ok())
        .unwrap_or(6);

    let src_root = Path::new(r"C:\Users\javie\tesis final\Nueva carpeta\diccionario\diccionarios");
    let dst_root = Path::new(r"C:\Users\javie\tesis final\Nueva carpeta\diccionario\diccionarios_gz");

    if !src_root.exists() {
        eprintln!("No existe SRC_ROOT: {}", src_root.display());
        std::process::exit(1);
    }

    // Recolectar archivos
    let langs: HashSet<&str> = LANGS.iter().copied().collect();
    let mut files = Vec::new();

    for entry in fs::read_dir(src_root)? {
        let entry = entry?;
        let path = entry.path();
        
        if !path.is_dir() {
            continue;
        }
        
        if let Some(name) = path.file_name().and_then(|n| n.to_str()) {
            if !langs.contains(name) {
                continue;
            }
        } else {
            continue;
        }

        for entry in WalkDir::new(&path)
            .into_iter()
            .filter_map(|e| e.ok())
        {
            let file_path = entry.path();
            if file_path.extension().and_then(|s| s.to_str()) == Some("jsonl") {
                files.push(file_path.to_path_buf());
            }
        }
    }

    let total = files.len();
    println!("Archivos .jsonl: {}", total);
    println!("Workers: {} | gzip level: {}", workers, level);
    println!("Destino: {}", dst_root.display());

    // Contadores atómicos
    let ok = Arc::new(AtomicUsize::new(0));
    let skip = Arc::new(AtomicUsize::new(0));
    let done = Arc::new(AtomicUsize::new(0));

    // Configurar threadpool
    rayon::ThreadPoolBuilder::new()
        .num_threads(workers)
        .build_global()
        .unwrap();

    // Procesar en paralelo
    files.par_iter().for_each(|file| {
        match compress_one(file, src_root, dst_root, level) {
            Ok(true) => {
                ok.fetch_add(1, Ordering::Relaxed);
            }
            Ok(false) => {
                skip.fetch_add(1, Ordering::Relaxed);
            }
            Err(e) => {
                eprintln!("Error procesando {}: {}", file.display(), e);
            }
        }

        let d = done.fetch_add(1, Ordering::Relaxed) + 1;
        if d % 500 == 0 || d == total {
            println!(
                "Progreso: {}/{} | OK={} SKIP={}",
                d,
                total,
                ok.load(Ordering::Relaxed),
                skip.load(Ordering::Relaxed)
            );
        }
    });

    println!("Listo.");
    Ok(())
}