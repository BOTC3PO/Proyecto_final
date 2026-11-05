import { execFileSync } from "node:child_process";
import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { armarDescargas, clasificar } from "../descargas";

const temporales: string[] = [];
const temporal = () => {
  const d = fs.mkdtempSync(path.join(os.tmpdir(), "vb-descargas-"));
  temporales.push(d);
  return d;
};
afterEach(() => {
  for (const d of temporales.splice(0)) fs.rmSync(d, { recursive: true, force: true });
});

describe("clasificar", () => {
  it("reconoce lo que sale de Tauri y del modo navegador", () => {
    const v = "1.2.3";
    expect(clasificar("app-universal-release.apk", v)).toEqual({ plataforma: "android", arquitectura: "arm", nombre: "virtualbook-1.2.3-android.apk" });
    expect(clasificar("app-x86_64-debug.apk", v)).toBeNull();
    expect(clasificar("Virtual Book_1.2.3_x64-setup.exe", v)?.nombre).toBe("virtualbook-1.2.3-windows-x64.exe");
    expect(clasificar("Virtual Book_1.2.3_x86-setup.exe", v)?.arquitectura).toBe("x86");
    expect(clasificar("Virtual Book_1.2.3_amd64.deb", v)).toEqual({
      plataforma: "linux-escritorio", arquitectura: "amd64", nombre: "virtualbook-1.2.3-linux-escritorio-amd64.deb",
    });
    expect(clasificar("virtualbook-sin-conexion_1.2.3_i386.deb", v)?.nombre).toBe("virtualbook-1.2.3-linux-navegador-i386.deb");
    expect(clasificar("virtualbook-sin-conexion-1.2.3-linux-amd64.tar.gz", v)?.plataforma).toBe("linux-navegador");
    expect(clasificar("Virtual Book_1.2.3_x64_es-ES.msi", v)).toBeNull();
    expect(clasificar("notas.txt", v)).toBeNull();
  });
});

describe("armarDescargas", () => {
  const preparar = () => {
    const inst = temporal();
    fs.writeFileSync(path.join(inst, "app-universal-release.apk"), "apk");
    fs.writeFileSync(path.join(inst, "Virtual Book_0.1.0_x64-setup.exe"), "exe");
    fs.writeFileSync(path.join(inst, "virtualbook-sin-conexion-0.1.0-linux-i386.tar.gz"), "tar");
    fs.writeFileSync(path.join(inst, "LEEME.md"), "no es un instalador");
    const paq = temporal();
    fs.writeFileSync(path.join(paq, "temario-fisica-1.0.sqlite.gz"), "fisica");
    fs.writeFileSync(path.join(paq, "indice.json"), JSON.stringify({ formato: 1, paquetes: [{ id: "temario-fisica", archivo: "temario-fisica-1.0.sqlite.gz" }] }));
    return { inst, paq };
  };

  it("copia con nombres claros, calcula los hashes y escribe el índice", () => {
    const { inst } = preparar();
    const salida = temporal();
    const { indice, ignorados } = armarDescargas({ instaladores: inst, salida, version: "0.1.0", ahora: new Date("2026-11-05T00:00:00Z") });
    expect(ignorados).toEqual(["LEEME.md"]);
    expect(indice.archivos.map((a) => a.archivo).sort()).toEqual([
      "virtualbook-0.1.0-android.apk", "virtualbook-0.1.0-linux-navegador-i386.tar.gz", "virtualbook-0.1.0-windows-x64.exe",
    ]);
    const apk = indice.archivos.find((a) => a.plataforma === "android")!;
    expect(apk.bytes).toBe(3);
    expect(apk.sha256).toBe(crypto.createHash("sha256").update("apk").digest("hex"));
    expect(JSON.parse(fs.readFileSync(path.join(salida, "descargas.json"), "utf8"))).toEqual(indice);
    expect(fs.readdirSync(salida).sort()).toEqual([...indice.archivos.map((a) => a.archivo), "descargas.json"].sort());
  });

  it("arma el paquete completo con los instaladores, los paquetes, el LEEME y las sumas", () => {
    const { inst, paq } = preparar();
    const salida = temporal();
    const { indice } = armarDescargas({ instaladores: inst, salida, version: "0.1.0", paquetes: paq });
    const completo = indice.archivos.find((a) => a.plataforma === "completo")!;
    expect(completo.archivo).toBe("virtualbook-0.1.0-completo.zip");
    const listado = execFileSync("python3", ["-m", "zipfile", "-l", path.join(salida, completo.archivo)], { encoding: "utf8" });
    for (const r of [
      "VirtualBook-sin-conexion-0.1.0/Android/virtualbook-0.1.0-android.apk",
      "VirtualBook-sin-conexion-0.1.0/Windows/virtualbook-0.1.0-windows-x64.exe",
      "VirtualBook-sin-conexion-0.1.0/Linux/virtualbook-0.1.0-linux-navegador-i386.tar.gz",
      "VirtualBook-sin-conexion-0.1.0/Paquetes/temario-fisica-1.0.sqlite.gz",
      "VirtualBook-sin-conexion-0.1.0/Paquetes/indice.json",
      "VirtualBook-sin-conexion-0.1.0/LEEME.txt",
      "VirtualBook-sin-conexion-0.1.0/SHA256SUMS.txt",
    ]) expect(listado).toContain(r);
  });

  it("al volver a armar, borra lo que el índice anterior publicaba y ya no está", () => {
    const { inst } = preparar();
    const salida = temporal();
    armarDescargas({ instaladores: inst, salida, version: "0.1.0" });
    fs.writeFileSync(path.join(salida, "otro-archivo.txt"), "no lo publicó el índice");
    for (const f of fs.readdirSync(inst)) fs.renameSync(path.join(inst, f), path.join(inst, f.replace("0.1.0", "0.2.0")));
    const { indice } = armarDescargas({ instaladores: inst, salida, version: "0.2.0" });
    expect(indice.archivos.every((a) => a.archivo.includes("0.2.0"))).toBe(true);
    expect(fs.readdirSync(salida).filter((f) => f.includes("0.1.0"))).toEqual([]);
    expect(fs.existsSync(path.join(salida, "otro-archivo.txt"))).toBe(true);
  });

  it("no acepta dos archivos que se publicarían con el mismo nombre", () => {
    const { inst } = preparar();
    fs.writeFileSync(path.join(inst, "app-arm64-release.apk"), "otro apk");
    expect(() => armarDescargas({ instaladores: inst, salida: temporal(), version: "0.1.0" })).toThrow(/dos archivos/);
  });
});
