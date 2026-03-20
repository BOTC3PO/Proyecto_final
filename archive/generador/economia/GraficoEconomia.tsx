import React from "react";

type Curva = {
  id: string;
  etiqueta?: string;
  forma?: string;
  params?: Record<string, number>;
  puntos?: Array<{ x: number; y: number }>;
  valores?: number[];
};

type Punto = {
  id: string;
  etiqueta?: string;
  x?: number;
  y?: number;
  derivado?: string;
  curvas?: string[];
};

export type GraficoEconomiaData = {
  tipo?: string;
  ejes?: { x?: string; y?: string };
  curvas?: Curva[];
  puntos?: Punto[];
  series?: Array<{ id: string; etiqueta?: string; valores: number[] }>;
};

type Props = { grafico?: GraficoEconomiaData | null };

const WIDTH = 520;
const HEIGHT = 300;
const PADDING = 36;

const toXY = (x: number, y: number) => ({
  x: PADDING + x * (WIDTH - PADDING * 2),
  y: HEIGHT - PADDING - y * (HEIGHT - PADDING * 2),
});

const lineFromParams = (curva: Curva, kind: "oferta_demanda" | "costo_ingreso") => {
  const p = curva.params ?? {};
  const x0 = 0;
  const x1 = 1;

  if (kind === "oferta_demanda") {
    if (curva.id === "D") {
      const a = Number(p.a ?? 100);
      const b = Number(p.b ?? 2);
      const y0 = a;
      const y1 = Math.max(0, a - b * 100);
      return [toXY(x0, Math.min(1, y0 / 120)), toXY(x1, Math.min(1, y1 / 120))] as const;
    }
    const c = Number(p.c ?? 10);
    const d = Number(p.d ?? 1);
    const y0 = c;
    const y1 = c + d * 100;
    return [toXY(x0, Math.min(1, y0 / 120)), toXY(x1, Math.min(1, y1 / 120))] as const;
  }

  const m = Number(p.m ?? (curva.id === "R" ? 22 : 14));
  const n = Number(p.n ?? (curva.id === "R" ? 0 : 90));
  const yA = n;
  const yB = m * 100 + n;
  return [toXY(x0, Math.min(1, yA / 2400)), toXY(x1, Math.min(1, yB / 2400))] as const;
};

const intersection = (a: Curva, b: Curva) => {
  const pa = a.params ?? {};
  const pb = b.params ?? {};

  if (a.id === "D" && b.id === "S") {
    const aa = Number(pa.a ?? 100);
    const bb = Number(pa.b ?? 2);
    const cc = Number(pb.c ?? 10);
    const dd = Number(pb.d ?? 1);
    const q = (aa - cc) / Math.max(0.0001, bb + dd);
    const p = aa - bb * q;
    return toXY(Math.max(0, Math.min(1, q / 100)), Math.max(0, Math.min(1, p / 120)));
  }

  const ma = Number(pa.m ?? 22);
  const na = Number(pa.n ?? 0);
  const mb = Number(pb.m ?? 14);
  const nb = Number(pb.n ?? 90);
  const x = (nb - na) / Math.max(0.0001, ma - mb);
  const y = ma * x + na;
  return toXY(Math.max(0, Math.min(1, x / 100)), Math.max(0, Math.min(1, y / 2400)));
};

const renderAxes = (xLabel = "X", yLabel = "Y") => (
  <>
    <line x1={PADDING} y1={HEIGHT - PADDING} x2={WIDTH - PADDING} y2={HEIGHT - PADDING} stroke="#334155" />
    <line x1={PADDING} y1={HEIGHT - PADDING} x2={PADDING} y2={PADDING} stroke="#334155" />
    <text x={WIDTH - PADDING} y={HEIGHT - PADDING + 24} textAnchor="end" fontSize="12" fill="#475569">
      {xLabel}
    </text>
    <text x={PADDING - 8} y={PADDING - 8} textAnchor="start" fontSize="12" fill="#475569">
      {yLabel}
    </text>
  </>
);

export const GraficoEconomia: React.FC<Props> = ({ grafico }) => {
  if (!grafico?.tipo) return null;

  const curves = grafico.curvas ?? [];
  const points = grafico.puntos ?? [];

  const colorById = (id: string) => {
    if (id === "D" || id === "R") return "#2563eb";
    if (id === "S" || id === "C") return "#dc2626";
    return "#16a34a";
  };

  const xLabel = grafico.ejes?.x ?? "Cantidad";
  const yLabel = grafico.ejes?.y ?? "Precio";

  const seriesFromCurves = (curves[0]?.valores ?? grafico.series?.[0]?.valores ?? [15, 20, 18, 24, 28]).map(
    (v, i, arr) => toXY(arr.length <= 1 ? 0 : i / (arr.length - 1), Math.max(0, Math.min(1, v / Math.max(...arr, 1))))
  );

  return (
    <div style={{ border: "1px solid #e2e8f0", borderRadius: 8, padding: 12, background: "#fff" }}>
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} width="100%" role="img" aria-label={`Gráfico ${grafico.tipo}`}>
        {renderAxes(xLabel, yLabel)}

        {(grafico.tipo === "oferta_demanda" || grafico.tipo === "costo_ingreso") &&
          curves.map((curva) => {
            const [p1, p2] = lineFromParams(curva, grafico.tipo as "oferta_demanda" | "costo_ingreso");
            return (
              <g key={curva.id}>
                <line x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke={colorById(curva.id)} strokeWidth="2" />
                <text x={p2.x - 6} y={p2.y - 6} fontSize="11" fill={colorById(curva.id)} textAnchor="end">
                  {curva.etiqueta ?? curva.id}
                </text>
              </g>
            );
          })}

        {(grafico.tipo === "oferta_demanda" || grafico.tipo === "costo_ingreso") &&
          points.map((p) => {
            const cA = curves.find((c) => c.id === p.curvas?.[0]);
            const cB = curves.find((c) => c.id === p.curvas?.[1]);
            const pos = cA && cB ? intersection(cA, cB) : toXY(0.5, 0.5);
            return (
              <g key={p.id}>
                <circle cx={pos.x} cy={pos.y} r="4" fill="#111827" />
                <text x={pos.x + 6} y={pos.y - 6} fontSize="11" fill="#111827">
                  {p.etiqueta ?? p.id}
                </text>
              </g>
            );
          })}

        {grafico.tipo === "ppf" && (
          <path d={`M ${toXY(0.05, 0.92).x} ${toXY(0.05, 0.92).y} Q ${toXY(0.45, 0.6).x} ${toXY(0.45, 0.6).y} ${toXY(0.95, 0.08).x} ${toXY(0.95, 0.08).y}`} stroke="#7c3aed" strokeWidth="2" fill="none" />
        )}

        {grafico.tipo === "serie_tiempo" && (
          <polyline
            fill="none"
            stroke="#0f766e"
            strokeWidth="2"
            points={seriesFromCurves.map((p) => `${p.x},${p.y}`).join(" ")}
          />
        )}
      </svg>
    </div>
  );
};

export default GraficoEconomia;
