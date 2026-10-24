import * as fs from "fs";
import * as path from "path";

export type TipoEconomico =
  | "normal" | "inflacion" | "deflacion" | "hiperinflacion";

export type CicloEconomico = {
  id: number;
  tipo: TipoEconomico;
  intensidad: number;
  tasa: number;
  duracion: number;
  inicio: string;
  fin: string;
};

type CalendarioEconomico = {
  version: number;
  generado: string;
  seed: number;
  totalCiclos: number;
  rango: { inicio: string; fin: string };
  ciclos: CicloEconomico[];
};

let _cache: CalendarioEconomico | null = null;

function loadCalendario(): CalendarioEconomico {
  if (_cache) return _cache;
  const filePath = path.resolve(
    __dirname, "../base/calendario_economico.json"
  );
  const raw = fs.readFileSync(filePath, "utf-8");
  _cache = JSON.parse(raw) as CalendarioEconomico;
  return _cache;
}

// Obtener el ciclo activo para una fecha dada (default: hoy)
export function getCicloActivo(fecha?: Date): CicloEconomico | null {
  const cal = loadCalendario();
  const target = (fecha ?? new Date()).toISOString().slice(0, 10);
  return cal.ciclos.find(
    (c) => c.inicio <= target && c.fin >= target
  ) ?? null;
}

// Obtener los próximos N ciclos desde hoy
export function getProximosCiclos(n = 5, fecha?: Date): CicloEconomico[] {
  const cal = loadCalendario();
  const target = (fecha ?? new Date()).toISOString().slice(0, 10);
  return cal.ciclos
    .filter((c) => c.fin >= target)
    .slice(0, n);
}

// FIX-TEST4-ADMIN-01 — antes `getAjusteEconomico` solo leía
// del JSON hardcodeado (`calendario_economico.json`), ignorando
// los overrides del panel de admin (`inflacion.activa`,
// `deflacion.activa`, `hiperinflacion.activa` en `economia_config`).
// Ahora se acepta un `override` opcional: si está presente y es
// distinto a `normal`, gana sobre el JSON. Si es `null` o
// `normal`, cae al comportamiento histórico (JSON). Esto
// preserva el default automático del calendario económico pero
// permite que el admin fuerce una configuración manual.
export type AjusteOverride = {
  modo: "normal" | "inflacion" | "deflacion" | "hiperinflacion";
  precioFactor: number;
  recompensaFactor: number;
  tasa: number;
  aceleracion?: number;
};

export function getAjusteEconomico(
  fecha?: Date,
  override?: AjusteOverride | null
): {
  tipo: TipoEconomico;
  precioFactor: number;
  recompensaFactor: number;
  tasa: number;
  intensidad: number;
} {
  // Override del panel: si está activo y no es "normal", gana.
  if (override && override.modo !== "normal") {
    return {
      tipo: override.modo,
      precioFactor: override.precioFactor,
      recompensaFactor: override.recompensaFactor,
      tasa: override.tasa,
      intensidad: 5,
    };
  }

  const ciclo = getCicloActivo(fecha);

  if (!ciclo || ciclo.tipo === "normal") {
    return {
      tipo: "normal",
      precioFactor: 1,
      recompensaFactor: 1,
      tasa: 0,
      intensidad: ciclo?.intensidad ?? 5,
    };
  }

  const tasa = ciclo.tasa;

  switch (ciclo.tipo) {
    case "inflacion":
      return {
        tipo: "inflacion",
        precioFactor: 1 + tasa,
        recompensaFactor: Math.max(0.5, 1 - tasa),
        tasa,
        intensidad: ciclo.intensidad,
      };
    case "deflacion":
      return {
        tipo: "deflacion",
        precioFactor: Math.max(0.5, 1 - tasa),
        recompensaFactor: 1 + tasa,
        tasa,
        intensidad: ciclo.intensidad,
      };
    case "hiperinflacion":
      return {
        tipo: "hiperinflacion",
        precioFactor: 1 + tasa * 2,
        recompensaFactor: Math.max(0.1, 1 - tasa),
        tasa,
        intensidad: ciclo.intensidad,
      };
    default:
      return {
        tipo: "normal",
        precioFactor: 1,
        recompensaFactor: 1,
        tasa: 0,
        intensidad: 5,
      };
  }
}
