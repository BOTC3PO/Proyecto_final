import type { ChemTitrationSpec } from "../../visualizadores/types";

type TitrationSpecOptions = {
  title: string;
  description?: string;
  equivalenceVolume: number;
  totalVolume?: number;
  startPH?: number;
  endPH?: number;
  points?: number;
  currentPH?: number;
};

const indicatorRanges = [
  { min: 0, max: 3, color: "#f87171", label: "Ácido fuerte (0-3)" },
  { min: 3, max: 6, color: "#fb923c", label: "Ácido débil (3-6)" },
  { min: 6, max: 8, color: "#34d399", label: "Zona neutra (6-8)" },
  { min: 8, max: 11, color: "#60a5fa", label: "Base débil (8-11)" },
  { min: 11, max: 14, color: "#a78bfa", label: "Base fuerte (11-14)" },
];

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const buildCurvePoints = (
  equivalenceVolume: number,
  {
    totalVolume = equivalenceVolume * 2,
    startPH = 1.2,
    endPH = 12.8,
    points = 24,
  }: {
    totalVolume?: number;
    startPH?: number;
    endPH?: number;
    points?: number;
  }
) => {
  const resolvedPoints = Math.max(points, 8);
  const spread = equivalenceVolume * 0.08 + 0.4;
  const computePH = (volume: number) => {
    const t = (volume - equivalenceVolume) / spread;
    const logistic = 1 / (1 + Math.exp(-t));
    return clamp(startPH + (endPH - startPH) * logistic, 0, 14);
  };
  const curve: Array<{ volume: number; pH: number }> = [];

  for (let i = 0; i <= resolvedPoints; i += 1) {
    const volume = (totalVolume / resolvedPoints) * i;
    const pH = computePH(volume);
    curve.push({ volume: parseFloat(volume.toFixed(2)), pH: parseFloat(pH.toFixed(2)) });
  }

  return { curve, computePH, totalVolume };
};

export const buildTitrationVisualSpec = ({
  title,
  description,
  equivalenceVolume,
  totalVolume,
  startPH,
  endPH,
  points,
  currentPH,
}: TitrationSpecOptions): ChemTitrationSpec => {
  const { curve, computePH, totalVolume: totalVolumeResolved } = buildCurvePoints(
    equivalenceVolume,
    { totalVolume, startPH, endPH, points }
  );
  const equivalencePH = parseFloat(computePH(equivalenceVolume).toFixed(2));

  return {
    kind: "chem-titration",
    title,
    description,
    axes: {
      x: { label: "Volumen añadido", unit: "mL", min: 0, max: totalVolumeResolved },
      y: { label: "pH", min: 0, max: 14 },
    },
    curve: {
      points: curve,
      color: "#38bdf8",
    },
    milestones: [
      { id: "start", label: "Inicio", volume: 0, pH: curve[0]?.pH ?? 1, type: "start" },
      {
        id: "equivalence",
        label: "Punto equivalente",
        volume: equivalenceVolume,
        pH: equivalencePH,
        type: "equivalence",
      },
      {
        id: "end",
        label: "Exceso de base",
        volume: totalVolumeResolved,
        pH: curve[curve.length - 1]?.pH ?? 13,
        type: "end",
      },
    ],
    indicator: {
      title: "Indicador de color",
      ranges: indicatorRanges,
      currentPH,
    },
  };
};
