import type { CookRecipeScalerSpec } from "../types";

type CookRecipeScalerVisualizerProps = {
  spec: CookRecipeScalerSpec;
};

const CATEGORY_COLORS: Record<string, string> = {
  dry: "#F59E0B",
  liquid: "#3B82F6",
  fresh: "#22C55E",
  spice: "#EF4444",
};

const CATEGORY_LABEL: Record<string, string> = {
  dry: "seco",
  liquid: "líquido",
  fresh: "fresco",
  spice: "especia",
};

const NUTRITION_CONFIG = [
  { key: "calories" as const, label: "Calorías", unit: "kcal", color: "#F97316" },
  { key: "protein" as const, label: "Proteína", unit: "g", color: "#8B5CF6" },
  { key: "carbs" as const, label: "Carbohidratos", unit: "g", color: "#EAB308" },
  { key: "fat" as const, label: "Grasa", unit: "g", color: "#EC4899" },
];

const ROW_H = 24;
const HEADER_H = 80;
const NUTRITION_H = 100;
const VIEW_W = 560;
const MARGIN_X = 16;
const BAR_START = 200;
const BAR_END = 420;
const AMOUNT_COL = 440;
const UNIT_COL = 510;

export default function CookRecipeScalerVisualizer({
  spec,
}: CookRecipeScalerVisualizerProps) {
  const {
    title,
    description,
    servingsBase,
    servingsCurrent,
    ingredients,
    nutritionPerServing,
    steps,
  } = spec;

  const maxScaled =
    ingredients.length > 0
      ? Math.max(...ingredients.map((ing) => ing.amountCurrent))
      : 1;
  const safeMax = maxScaled > 0 ? maxScaled : 1;

  const scaleFactor = servingsBase > 0 ? servingsCurrent / servingsBase : 1;

  const rowsHeight = ingredients.length * ROW_H;
  const viewHeight = HEADER_H + rowsHeight + NUTRITION_H;

  const tableTop = HEADER_H;
  const nutritionTop = tableTop + rowsHeight + 16;

  const formatAmount = (val: number): string => {
    if (val === 0) return "0";
    if (Number.isInteger(val)) return val.toString();
    return val % 1 === 0 ? val.toFixed(0) : val.toFixed(2);
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      {(title || description) && (
        <header className="mb-3">
          {title && (
            <h2 className="text-base font-semibold text-slate-900">{title}</h2>
          )}
          {description && (
            <p className="text-sm text-slate-500">{description}</p>
          )}
        </header>
      )}

      <svg
        viewBox={`0 0 ${VIEW_W} ${viewHeight}`}
        className="w-full"
        role="img"
        aria-label={title ?? "Escalador de receta"}
      >
        {/* Header panel */}
        <rect
          x={MARGIN_X}
          y={8}
          width={VIEW_W - MARGIN_X * 2}
          height={HEADER_H - 16}
          rx={6}
          fill="#F8FAFC"
          stroke="#E2E8F0"
          strokeWidth={1}
        />
        <text
          x={MARGIN_X + 12}
          y={28}
          fontSize={13}
          fontWeight="600"
          fill="#0F172A"
        >
          {title ?? "Receta"}
        </text>
        <text x={MARGIN_X + 12} y={44} fontSize={10} fill="#64748B">
          Porciones base: {servingsBase}
        </text>
        <text x={MARGIN_X + 12} y={57} fontSize={10} fill="#64748B">
          Porciones actuales:{" "}
          <tspan fontWeight="600" fill="#0F172A">
            {servingsCurrent}
          </tspan>
        </text>
        <text x={MARGIN_X + 12} y={70} fontSize={10} fill="#64748B">
          Factor de escala:{" "}
          <tspan fontWeight="600" fill="#2563EB">
            ×{scaleFactor.toFixed(2)}
          </tspan>
        </text>

        {/* Column headers */}
        <text
          x={MARGIN_X + 12}
          y={tableTop + 14}
          fontSize={9}
          fontWeight="600"
          fill="#94A3B8"
          textAnchor="start"
        >
          INGREDIENTE
        </text>
        <text
          x={BAR_START + (BAR_END - BAR_START) / 2}
          y={tableTop + 14}
          fontSize={9}
          fontWeight="600"
          fill="#94A3B8"
          textAnchor="middle"
        >
          CANTIDAD ESCALADA
        </text>
        <text
          x={UNIT_COL}
          y={tableTop + 14}
          fontSize={9}
          fontWeight="600"
          fill="#94A3B8"
          textAnchor="end"
        >
          UNIDAD
        </text>

        {/* Separator under headers */}
        <line
          x1={MARGIN_X}
          y1={tableTop + 18}
          x2={VIEW_W - MARGIN_X}
          y2={tableTop + 18}
          stroke="#E2E8F0"
          strokeWidth={1}
        />

        {/* Ingredient rows */}
        {ingredients.map((ing, idx) => {
          const rowY = tableTop + 18 + idx * ROW_H;
          const barRatio = ing.amountCurrent / safeMax;
          const barW = Math.max(0, barRatio * (BAR_END - BAR_START - 4));
          const catColor =
            ing.category !== undefined
              ? (CATEGORY_COLORS[ing.category] ?? "#64748B")
              : "#64748B";
          const isEven = idx % 2 === 0;

          return (
            <g key={ing.id}>
              {/* Row background */}
              {isEven && (
                <rect
                  x={MARGIN_X}
                  y={rowY}
                  width={VIEW_W - MARGIN_X * 2}
                  height={ROW_H}
                  fill="#F8FAFC"
                />
              )}

              {/* Category dot */}
              <circle
                cx={MARGIN_X + 8}
                cy={rowY + ROW_H / 2}
                r={4}
                fill={catColor}
                opacity={0.8}
              />

              {/* Ingredient name */}
              <text
                x={MARGIN_X + 18}
                y={rowY + ROW_H / 2 + 4}
                fontSize={10}
                fill="#1E293B"
                textAnchor="start"
              >
                {ing.name}
              </text>

              {/* Category label */}
              {ing.category !== undefined && (
                <text
                  x={BAR_START - 4}
                  y={rowY + ROW_H / 2 + 4}
                  fontSize={8}
                  fill={catColor}
                  textAnchor="end"
                  opacity={0.8}
                >
                  {CATEGORY_LABEL[ing.category] ?? ing.category}
                </text>
              )}

              {/* Bar background */}
              <rect
                x={BAR_START}
                y={rowY + ROW_H / 2 - 5}
                width={BAR_END - BAR_START}
                height={10}
                rx={5}
                fill="#E2E8F0"
              />

              {/* Bar fill */}
              <rect
                x={BAR_START}
                y={rowY + ROW_H / 2 - 5}
                width={barW}
                height={10}
                rx={5}
                fill={catColor}
                opacity={0.7}
              />

              {/* Scaled amount */}
              <text
                x={AMOUNT_COL}
                y={rowY + ROW_H / 2 + 4}
                fontSize={10}
                fontWeight="600"
                fill="#1E293B"
                textAnchor="end"
              >
                {formatAmount(ing.amountCurrent)}
              </text>

              {/* Unit */}
              <text
                x={UNIT_COL + 8}
                y={rowY + ROW_H / 2 + 4}
                fontSize={9}
                fill="#64748B"
                textAnchor="start"
              >
                {ing.unit}
              </text>

              {/* Row separator */}
              <line
                x1={MARGIN_X}
                y1={rowY + ROW_H}
                x2={VIEW_W - MARGIN_X}
                y2={rowY + ROW_H}
                stroke="#E2E8F0"
                strokeWidth={0.5}
              />
            </g>
          );
        })}

        {/* Nutrition panel */}
        {nutritionPerServing && (
          <>
            <text
              x={MARGIN_X + 4}
              y={nutritionTop + 12}
              fontSize={10}
              fontWeight="600"
              fill="#64748B"
            >
              Nutrición por porción (×{servingsCurrent})
            </text>
            {NUTRITION_CONFIG.map((nc, idx) => {
              const baseValue =
                nutritionPerServing[nc.key as keyof typeof nutritionPerServing];
              const scaledValue =
                typeof baseValue === "number"
                  ? baseValue * scaleFactor
                  : 0;
              const boxX = MARGIN_X + idx * 130;
              const boxY = nutritionTop + 20;

              return (
                <g key={nc.key}>
                  <rect
                    x={boxX}
                    y={boxY}
                    width={120}
                    height={52}
                    rx={6}
                    fill={nc.color}
                    opacity={0.12}
                    stroke={nc.color}
                    strokeWidth={1}
                    strokeOpacity={0.4}
                  />
                  <rect
                    x={boxX + 8}
                    y={boxY + 10}
                    width={14}
                    height={14}
                    rx={3}
                    fill={nc.color}
                    opacity={0.85}
                  />
                  <text
                    x={boxX + 28}
                    y={boxY + 21}
                    fontSize={10}
                    fontWeight="600"
                    fill={nc.color}
                  >
                    {nc.label}
                  </text>
                  <text
                    x={boxX + 8}
                    y={boxY + 40}
                    fontSize={13}
                    fontWeight="700"
                    fill="#1E293B"
                  >
                    {scaledValue % 1 === 0
                      ? scaledValue.toFixed(0)
                      : scaledValue.toFixed(1)}
                    <tspan fontSize={9} fill="#64748B">
                      {" "}
                      {nc.unit}
                    </tspan>
                  </text>
                </g>
              );
            })}
          </>
        )}
      </svg>

      {/* Category legend */}
      <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-600">
        {Object.entries(CATEGORY_COLORS).map(([cat, color]) => (
          <div key={cat} className="flex items-center gap-1.5">
            <span
              className="inline-block h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: color }}
            />
            <span className="capitalize">{CATEGORY_LABEL[cat] ?? cat}</span>
          </div>
        ))}
      </div>

      {/* Steps */}
      {steps && steps.length > 0 && (
        <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50 p-3">
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Pasos
          </h3>
          <ol className="list-decimal space-y-1 pl-5 text-sm text-slate-600">
            {steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>
      )}
    </section>
  );
}
