/**
 * Tests del puente datasets VBLang → mapa (WO11): detección de columnas de
 * coordenadas y conversión de filas a marcadores geolocalizados.
 */
import { describe, expect, it } from "vitest";
import {
  datasetDetailToMapaDataset,
  datasetTieneCoordenadas,
} from "../mapa.datasets";
import type { DatasetDetail } from "../../../../domain/vblang/dataset.types";

function makeDetail(
  columnas: Record<string, "string" | "number" | "boolean">,
  filas: Array<Record<string, unknown>>,
): DatasetDetail {
  return {
    id: "ds1",
    nombre: "Ciudades",
    visibility: "privada" as DatasetDetail["visibility"],
    ownerUserId: "u1",
    columnas,
    createdAt: "",
    updatedAt: "",
    filas: filas.map((datos, i) => ({ id: `f${i}`, datos })),
  };
}

describe("datasetTieneCoordenadas", () => {
  it("detecta lat/lon por nombre (con acentos y mayúsculas)", () => {
    expect(datasetTieneCoordenadas({ Latitud: "number", Longitud: "number" })).toBe(true);
    expect(datasetTieneCoordenadas({ lat: "number", lng: "number" })).toBe(true);
  });

  it("es falso si falta alguna coordenada", () => {
    expect(datasetTieneCoordenadas({ nombre: "string", lat: "number" })).toBe(false);
    expect(datasetTieneCoordenadas({ nombre: "string", poblacion: "number" })).toBe(false);
  });
});

describe("datasetDetailToMapaDataset", () => {
  it("convierte filas con lat/lon en entries y usa columna de etiqueta", () => {
    const detail = makeDetail(
      { ciudad: "string", lat: "number", lon: "number", poblacion: "number" },
      [
        { ciudad: "Madrid", lat: 40.4, lon: -3.7, poblacion: 3200000 },
        { ciudad: "Lima", lat: -12.05, lon: -77.04, poblacion: 9000000 },
      ],
    );
    const ds = datasetDetailToMapaDataset(detail);
    expect(ds).not.toBeNull();
    expect(ds!.entries).toHaveLength(2);
    expect(ds!.entries[0]).toMatchObject({ lat: 40.4, lon: -3.7, etiqueta: "Madrid" });
    // El resto de columnas queda en meta.
    expect(ds!.entries[0].meta).toMatchObject({ poblacion: 3200000 });
  });

  it("descarta filas sin coordenadas numéricas válidas", () => {
    const detail = makeDetail(
      { nombre: "string", latitud: "number", longitud: "number" },
      [
        { nombre: "Ok", latitud: 10, longitud: 20 },
        { nombre: "Malo", latitud: "n/a", longitud: 5 },
      ],
    );
    const ds = datasetDetailToMapaDataset(detail);
    expect(ds!.entries).toHaveLength(1);
    expect(ds!.entries[0].etiqueta).toBe("Ok");
  });

  it("acepta números como strings con coma decimal", () => {
    const detail = makeDetail(
      { lugar: "string", lat: "string", lon: "string" },
      [{ lugar: "X", lat: "1,5", lon: "2,5" }],
    );
    const ds = datasetDetailToMapaDataset(detail);
    expect(ds!.entries[0]).toMatchObject({ lat: 1.5, lon: 2.5 });
  });

  it("devuelve null si no hay columnas de coordenadas", () => {
    const detail = makeDetail({ nombre: "string", valor: "number" }, [
      { nombre: "X", valor: 1 },
    ]);
    expect(datasetDetailToMapaDataset(detail)).toBeNull();
  });
});
