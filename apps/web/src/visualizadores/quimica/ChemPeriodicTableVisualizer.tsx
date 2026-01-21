import type {
  ChemPeriodicTableElement,
  ChemPeriodicTablePropertyKey,
  ChemPeriodicTableSpec,
} from "../types";

const DEFAULT_SEQUENTIAL_COLORS = ["#dbeafe", "#1d4ed8"];
const DEFAULT_CATEGORICAL_COLORS = [
  "#f59e0b",
  "#22c55e",
  "#8b5cf6",
  "#0ea5e9",
  "#ef4444",
];
const DEFAULT_CELL_COLOR = "#f8fafc";

const toRgb = (hex: string) => {
  const normalized = hex.replace("#", "");
  const bigint = parseInt(normalized.length === 3
    ? normalized
        .split("")
        .map((char) => `${char}${char}`)
        .join("")
    : normalized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
};

const interpolateColor = (start: string, end: string, ratio: number) => {
  const safeRatio = Math.max(0, Math.min(1, ratio));
  const startRgb = toRgb(start);
  const endRgb = toRgb(end);
  const r = Math.round(startRgb.r + (endRgb.r - startRgb.r) * safeRatio);
  const g = Math.round(startRgb.g + (endRgb.g - startRgb.g) * safeRatio);
  const b = Math.round(startRgb.b + (endRgb.b - startRgb.b) * safeRatio);
  return `rgb(${r}, ${g}, ${b})`;
};

const formatNumeric = (value: number) => (Math.round(value * 100) / 100).toString();

const getElementValue = (
  element: ChemPeriodicTableElement,
  key?: ChemPeriodicTablePropertyKey,
) => {
  if (!key) return undefined;
  if (key === "classification") return element.category;
  return element.properties?.[key];
};

const buildCategoryColors = (
  elements: ChemPeriodicTableElement[],
  colors: string[],
  key?: ChemPeriodicTablePropertyKey,
) => {
  if (key !== "classification") return new Map<string, string>();
  const categories = Array.from(
    new Set(elements.map((element) => element.category).filter(Boolean)),
  ) as string[];
  return new Map(
    categories.map((category, index) => [category, colors[index % colors.length]]),
  );
};

const getSequentialBounds = (
  elements: ChemPeriodicTableElement[],
  key?: ChemPeriodicTablePropertyKey,
) => {
  if (!key || key === "classification") return { min: 0, max: 0 };
  const values = elements
    .map((element) => getElementValue(element, key))
    .filter((value): value is number => typeof value === "number");
  if (values.length === 0) {
    return { min: 0, max: 0 };
  }
  const min = Math.min(...values);
  const max = Math.max(...values);
  return { min, max };
};

export default function ChemPeriodicTableVisualizer({
  spec,
}: {
  spec: ChemPeriodicTableSpec;
}) {
  const highlightKey = spec.highlightProperty?.key;
  const scaleType = spec.scale?.type ?? (highlightKey === "classification" ? "categorical" : "sequential");
  const sequentialColors = spec.scale?.colors ?? DEFAULT_SEQUENTIAL_COLORS;
  const categoricalColors = spec.scale?.colors ?? DEFAULT_CATEGORICAL_COLORS;
  const categoryColors = buildCategoryColors(spec.elements, categoricalColors, highlightKey);
  const computedBounds = getSequentialBounds(spec.elements, highlightKey);
  const min = spec.scale?.min ?? computedBounds.min;
  const max = spec.scale?.max ?? computedBounds.max;
  const focusSet = new Set(spec.focusElements ?? []);
  const elementsByPosition = new Map(
    spec.elements.map((element) => [
      `${element.period}-${element.group}`,
      element,
    ]),
  );

  const getCellColor = (element: ChemPeriodicTableElement) => {
    const value = getElementValue(element, highlightKey);
    if (value === undefined || value === null) return DEFAULT_CELL_COLOR;
    if (scaleType === "categorical") {
      return categoryColors.get(String(value)) ?? DEFAULT_CELL_COLOR;
    }
    if (typeof value !== "number") return DEFAULT_CELL_COLOR;
    const ratio = max === min ? 0.5 : (value - min) / (max - min);
    return interpolateColor(
      sequentialColors[0] ?? DEFAULT_SEQUENTIAL_COLORS[0],
      sequentialColors[sequentialColors.length - 1] ?? DEFAULT_SEQUENTIAL_COLORS[1],
      ratio,
    );
  };

  const renderLegend = () => {
    if (!highlightKey) return null;
    if (scaleType === "categorical") {
      return (
        <div className="flex flex-wrap gap-3 text-xs text-slate-600">
          {Array.from(categoryColors.entries()).map(([category, color]) => (
            <div key={category} className="flex items-center gap-2">
              <span
                className="inline-flex h-3 w-3 rounded-sm"
                style={{ backgroundColor: color }}
              />
              <span className="capitalize">{category}</span>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600">
        <span>{formatNumeric(min)}</span>
        <div
          className="h-2 w-32 rounded-full"
          style={{
            background: `linear-gradient(90deg, ${sequentialColors[0]}, ${
              sequentialColors[sequentialColors.length - 1]
            })`,
          }}
        />
        <span>{formatNumeric(max)}</span>
      </div>
    );
  };

  return (
    <section className="space-y-4">
      <header>
        <h3 className="text-base font-semibold text-slate-800">
          {spec.title ?? "Tabla periódica"}
        </h3>
        {spec.description ? (
          <p className="text-xs text-slate-500">{spec.description}</p>
        ) : null}
      </header>

      {spec.highlightProperty ? (
        <div className="rounded-lg border border-slate-200 bg-white p-3">
          <p className="text-xs font-semibold text-slate-700">
            Resaltado: {spec.highlightProperty.label}
            {spec.highlightProperty.unit ? ` (${spec.highlightProperty.unit})` : ""}
          </p>
          <div className="mt-2">{renderLegend()}</div>
        </div>
      ) : null}

      <div
        className="grid gap-1"
        style={{ gridTemplateColumns: "repeat(18, minmax(0, 1fr))" }}
      >
        {Array.from({ length: 7 }).map((_, periodIndex) =>
          Array.from({ length: 18 }).map((_, groupIndex) => {
            const period = periodIndex + 1;
            const group = groupIndex + 1;
            const element = elementsByPosition.get(`${period}-${group}`);
            if (!element) {
              return (
                <div
                  key={`empty-${period}-${group}`}
                  className="aspect-square rounded border border-dashed border-slate-100"
                />
              );
            }

            const value = getElementValue(element, highlightKey);
            const valueLabel =
              value === undefined || value === null
                ? ""
                : typeof value === "number"
                  ? formatNumeric(value)
                  : String(value);
            const isFocused = focusSet.has(element.symbol);

            return (
              <div
                key={element.symbol}
                className={`flex aspect-square flex-col justify-between rounded border border-slate-200 p-1 text-[10px] text-slate-700 shadow-sm ${
                  isFocused ? "ring-2 ring-sky-500" : ""
                }`}
                style={{ backgroundColor: getCellColor(element) }}
              >
                <span className="text-[9px] text-slate-500">
                  {element.atomicNumber}
                </span>
                <span className="text-sm font-semibold leading-none text-slate-800">
                  {element.symbol}
                </span>
                <span className="truncate text-[9px] text-slate-600">
                  {element.name}
                </span>
                {valueLabel ? (
                  <span className="text-[9px] text-slate-500">{valueLabel}</span>
                ) : null}
              </div>
            );
          }),
        )}
      </div>
    </section>
  );
}
