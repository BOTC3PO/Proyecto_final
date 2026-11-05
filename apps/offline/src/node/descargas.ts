/**
 * Descargas de la app: junta los instaladores que salen de la compilación (Android, Windows, Linux), les pone nombres
 * claros, arma el paquete completo para el modo autónomo y escribe `descargas.json`, que la API sirve en
 * `GET /api/offline/descargas` (página pública `/descargas`). Lo usa `scripts/armar-descargas.ts`.
 */
import { execFileSync } from "node:child_process";
import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

export type Plataforma = "android" | "windows" | "linux-escritorio" | "linux-navegador" | "completo";

export type Descarga = {
  archivo: string;
  plataforma: Plataforma;
  arquitectura: string | null;
  bytes: number;
  sha256: string;
};

export type IndiceDeDescargas = { formato: 1; version: string; generado: string; archivos: Descarga[] };

type Clasificado = { plataforma: Exclude<Plataforma, "completo">; arquitectura: string | null; nombre: string };

/**
 * Qué es cada archivo de la compilación, por su nombre, y con qué nombre se publica. `null`: no se publica.
 *
 * - Tauri: `Virtual Book_0.1.0_x64-setup.exe` (NSIS), `Virtual Book_0.1.0_amd64.deb`, `app-universal-release.apk`.
 * - Modo navegador (`scripts/empaquetar-navegador.sh`): `virtualbook-sin-conexion_0.1.0_amd64.deb` y
 *   `virtualbook-sin-conexion-0.1.0-linux-amd64.tar.gz`.
 */
export function clasificar(archivo: string, version: string): Clasificado | null {
  const n = path.basename(archivo);
  const v = `virtualbook-${version}`;
  // Un APK de prueba (sin firmar con la clave propia) no se publica.
  if (/\.apk$/i.test(n)) return /debug/i.test(n) ? null : { plataforma: "android", arquitectura: "arm", nombre: `${v}-android.apk` };
  let m = /_(x64|x86|arm64)-setup\.exe$/i.exec(n);
  if (m) return { plataforma: "windows", arquitectura: m[1].toLowerCase(), nombre: `${v}-windows-${m[1].toLowerCase()}.exe` };
  m = /^virtualbook-sin-conexion_.+_(amd64|i386)\.deb$/.exec(n);
  if (m) return { plataforma: "linux-navegador", arquitectura: m[1], nombre: `${v}-linux-navegador-${m[1]}.deb` };
  m = /^virtualbook-sin-conexion-.+-linux-(amd64|i386)\.tar\.gz$/.exec(n);
  if (m) return { plataforma: "linux-navegador", arquitectura: m[1], nombre: `${v}-linux-navegador-${m[1]}.tar.gz` };
  m = /_(amd64|arm64)\.deb$/.exec(n);
  if (m) return { plataforma: "linux-escritorio", arquitectura: m[1], nombre: `${v}-linux-escritorio-${m[1]}.deb` };
  return null;
}

export function sha256De(ruta: string): string {
  const h = crypto.createHash("sha256");
  const fd = fs.openSync(ruta, "r");
  try {
    const buf = Buffer.alloc(1 << 20);
    let n: number;
    while ((n = fs.readSync(fd, buf, 0, buf.length, null)) > 0) h.update(buf.subarray(0, n));
  } finally {
    fs.closeSync(fd);
  }
  return h.digest("hex");
}

const CARPETA: Record<Exclude<Plataforma, "completo">, string> = {
  android: "Android",
  windows: "Windows",
  "linux-escritorio": "Linux",
  "linux-navegador": "Linux",
};

export function leemeDelCompleto(version: string, archivos: string[]): string {
  return `Virtual Book sin conexión ${version} — paquete completo
=========================================================

Todo lo necesario para usar Virtual Book sin internet: los instaladores y los paquetes
de contenido (materias y diccionarios). Se puede copiar a un pendrive.

1. Instalar la app
------------------
- Android 8 o posterior: Android/ (el teléfono pide permiso para instalar apps de
  esta fuente).
- Windows 10 y 11: Windows/ (x64 para 64 bits, x86 para 32 bits). Trae WebView2: no
  hace falta internet.
- Huayra 6.5 y Debian 12: Linux/*-linux-escritorio-*.deb.
- Huayra 5 y 6, y otros Linux: Linux/*-linux-navegador-* (se abre en el navegador del
  equipo). El .tar.gz se instala sin contraseña de administrador (ver su LEEME.txt);
  el .deb, para todo el equipo. amd64 es 64 bits; i386, 32 bits.

2. Cargar el contenido
----------------------
En la app: «Mi perfil → Contenido sin conexión → Importar desde un archivo», y elegir
los archivos de Paquetes/ (cada materia y cada diccionario es un archivo). Las materias
que una necesita se importan aparte.

3. Comprobar los archivos
-------------------------
SHA256SUMS.txt tiene el hash de cada archivo (en Linux: sha256sum -c SHA256SUMS.txt).

Archivos:
${archivos.map((a) => `- ${a}`).join("\n")}
`;
}

function zip(carpeta: string, destino: string) {
  // El zip de la biblioteca estándar de Python: está en cualquier servidor con Linux y no suma dependencias.
  execFileSync("python3", ["-m", "zipfile", "-c", destino, path.basename(carpeta)], { cwd: path.dirname(carpeta), stdio: "inherit" });
}

export type Opciones = {
  instaladores: string;
  salida: string;
  version: string;
  /** Carpeta de los paquetes (con `indice.json`): si viene, se arma el paquete completo. */
  paquetes?: string | null;
  ahora?: Date;
};

export function armarDescargas(o: Opciones): { indice: IndiceDeDescargas; ignorados: string[] } {
  const ignorados: string[] = [];
  const elegidos = new Map<string, { origen: string; c: Clasificado }>();
  for (const f of fs.readdirSync(o.instaladores).sort()) {
    const origen = path.join(o.instaladores, f);
    if (!fs.statSync(origen).isFile()) continue;
    const c = clasificar(f, o.version);
    if (!c) {
      ignorados.push(f);
      continue;
    }
    if (elegidos.has(c.nombre)) throw new Error(`hay dos archivos para ${c.nombre}: ${elegidos.get(c.nombre)!.origen} y ${origen}`);
    elegidos.set(c.nombre, { origen, c });
  }
  if (elegidos.size === 0) throw new Error(`no hay instaladores en ${o.instaladores}`);

  fs.mkdirSync(o.salida, { recursive: true });
  const archivos: Descarga[] = [];
  for (const [nombre, { origen, c }] of elegidos) {
    const destino = path.join(o.salida, nombre);
    fs.copyFileSync(origen, `${destino}.tmp`);
    fs.renameSync(`${destino}.tmp`, destino);
    archivos.push({ archivo: nombre, plataforma: c.plataforma, arquitectura: c.arquitectura, bytes: fs.statSync(destino).size, sha256: sha256De(destino) });
  }

  if (o.paquetes) {
    const indicePaquetes = JSON.parse(fs.readFileSync(path.join(o.paquetes, "indice.json"), "utf8")) as { paquetes: { archivo: string }[] };
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "vb-completo-"));
    try {
      const raiz = path.join(tmp, `VirtualBook-sin-conexion-${o.version}`);
      const listado: string[] = [];
      for (const [nombre, { c }] of elegidos) {
        const d = path.join(raiz, CARPETA[c.plataforma]);
        fs.mkdirSync(d, { recursive: true });
        fs.copyFileSync(path.join(o.salida, nombre), path.join(d, nombre));
        listado.push(`${CARPETA[c.plataforma]}/${nombre}`);
      }
      fs.mkdirSync(path.join(raiz, "Paquetes"));
      for (const p of indicePaquetes.paquetes) {
        const n = path.basename(p.archivo);
        fs.copyFileSync(path.join(o.paquetes, n), path.join(raiz, "Paquetes", n));
        listado.push(`Paquetes/${n}`);
      }
      fs.copyFileSync(path.join(o.paquetes, "indice.json"), path.join(raiz, "Paquetes", "indice.json"));
      fs.writeFileSync(path.join(raiz, "LEEME.txt"), leemeDelCompleto(o.version, listado));
      const sumas = listado.map((r) => `${sha256De(path.join(raiz, r))}  ${r}`).join("\n");
      fs.writeFileSync(path.join(raiz, "SHA256SUMS.txt"), `${sumas}\n`);
      const nombre = `virtualbook-${o.version}-completo.zip`;
      const destino = path.join(o.salida, nombre);
      zip(raiz, `${destino}.tmp`);
      fs.renameSync(`${destino}.tmp`, destino);
      archivos.push({ archivo: nombre, plataforma: "completo", arquitectura: null, bytes: fs.statSync(destino).size, sha256: sha256De(destino) });
    } finally {
      fs.rmSync(tmp, { recursive: true, force: true });
    }
  }

  // Lo que publicaba el índice anterior y ya no está, se borra (después de escribir el nuevo).
  const rutaIndice = path.join(o.salida, "descargas.json");
  let anteriores: string[] = [];
  try {
    anteriores = (JSON.parse(fs.readFileSync(rutaIndice, "utf8")) as IndiceDeDescargas).archivos.map((a) => a.archivo);
  } catch {
    // primera vez
  }
  const indice: IndiceDeDescargas = { formato: 1, version: o.version, generado: (o.ahora ?? new Date()).toISOString(), archivos };
  fs.writeFileSync(`${rutaIndice}.tmp`, `${JSON.stringify(indice, null, 2)}\n`);
  fs.renameSync(`${rutaIndice}.tmp`, rutaIndice);
  const actuales = new Set(archivos.map((a) => a.archivo));
  for (const a of anteriores) if (!actuales.has(a) && a === path.basename(a)) fs.rmSync(path.join(o.salida, a), { force: true });
  return { indice, ignorados };
}
