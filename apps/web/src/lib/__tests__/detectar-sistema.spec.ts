import { describe, expect, it } from "vitest";
import { detectarSistema } from "../detectar-sistema";

const UA = {
  android: "Mozilla/5.0 (Linux; Android 13; SM-A135M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Mobile Safari/537.36",
  win64: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
  winWow64: "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:115.0) Gecko/20100101 Firefox/115.0",
  win32: "Mozilla/5.0 (Windows NT 10.0; rv:115.0) Gecko/20100101 Firefox/115.0",
  linux: "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0",
  iphone: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
  mac: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15",
  chromebook: "Mozilla/5.0 (X11; CrOS x86_64 15633.69.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0 Safari/537.36",
};

describe("detectarSistema: qué instalador recomendar en /descargas", () => {
  it("Android antes que Linux (el agente de Android también dice Linux)", () => {
    expect(detectarSistema(UA.android)).toEqual({ tipo: "android" });
  });

  it("Windows: 64 bits con Win64, x64 o WOW64; 32 sin marcas; los bits declarados mandan", () => {
    expect(detectarSistema(UA.win64)).toEqual({ tipo: "windows", bits: 64 });
    expect(detectarSistema(UA.winWow64)).toEqual({ tipo: "windows", bits: 64 });
    expect(detectarSistema(UA.win32)).toEqual({ tipo: "windows", bits: 32 });
    expect(detectarSistema(UA.win64, "32")).toEqual({ tipo: "windows", bits: 32 });
    expect(detectarSistema(UA.win32, "64")).toEqual({ tipo: "windows", bits: 64 });
  });

  it("Linux de escritorio; iPhone, iPad y Mac no tienen app; Chromebook y lo desconocido, a elegir", () => {
    expect(detectarSistema(UA.linux)).toEqual({ tipo: "linux" });
    expect(detectarSistema(UA.iphone)).toEqual({ tipo: "no-disponible" });
    expect(detectarSistema(UA.mac)).toEqual({ tipo: "no-disponible" });
    expect(detectarSistema(UA.chromebook)).toEqual({ tipo: "otro" });
    expect(detectarSistema("")).toEqual({ tipo: "otro" });
  });
});
