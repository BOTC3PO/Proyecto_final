import type { CivicRightsTreeSpec } from "../types";

// Auto-palette for categories without a color
const AUTO_PALETTE = [
  "#3b82f6",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#06b6d4",
  "#ec4899",
  "#84cc16",
];

function lightenHex(hex: string): string {
  // Simple lightening: blend with white at 70%
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const lr = Math.round(r + (255 - r) * 0.6);
  const lg = Math.round(g + (255 - g) * 0.6);
  const lb = Math.round(b + (255 - b) * 0.6);
  return `rgb(${lr},${lg},${lb})`;
}

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return text.slice(0, max - 1) + "…";
}

export default function CivicRightsTreeVisualizer({
  spec,
}: {
  spec: CivicRightsTreeSpec;
}) {
  if (!spec) return null;

  const categories = spec.categories ?? [];
  const cx = 280;
  const cy = 200;
  const catRadius = 110;
  const rightRadius = 210;

  // Highlighted right lookup
  let highlightedRight: {
    label: string;
    description?: string;
    article?: string;
  } | null = null;

  // Build category positions
  const catCount = categories.length;

  const catPositions = categories.map((cat, i) => {
    const angle = i * ((2 * Math.PI) / Math.max(catCount, 1)) - Math.PI / 2;
    const color = cat.color ?? AUTO_PALETTE[i % AUTO_PALETTE.length];
    return {
      cat,
      angle,
      color,
      x: cx + catRadius * Math.cos(angle),
      y: cy + catRadius * Math.sin(angle),
    };
  });

  // Build right positions
  type RightPos = {
    right: { id: string; label: string; description?: string; article?: string };
    x: number;
    y: number;
    color: string;
    catColor: string;
  };

  const rightPositions: RightPos[] = [];

  for (const catPos of catPositions) {
    const rights = catPos.cat.rights ?? [];
    const count = rights.length;
    if (count === 0) continue;

    // Spread rights around the category angle
    const spread = Math.min(Math.PI / 3, (count - 1) * 0.3);
    rights.forEach((right, j) => {
      const offset =
        count === 1 ? 0 : -spread / 2 + (spread / (count - 1)) * j;
      const angle = catPos.angle + offset;
      const lightColor = lightenHex(catPos.color);
      rightPositions.push({
        right,
        x: cx + rightRadius * Math.cos(angle),
        y: cy + rightRadius * Math.sin(angle),
        color: lightColor,
        catColor: catPos.color,
      });

      if (right.id === spec.highlightedRightId) {
        highlightedRight = right;
      }
    });
  }

  return (
    <div>
      <svg
        viewBox="0 0 560 420"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        {/* Lines from root to categories */}
        {catPositions.map(({ cat, x, y }) => (
          <line
            key={`line-root-${cat.id}`}
            x1={cx}
            y1={cy}
            x2={x}
            y2={y}
            stroke="#94a3b8"
            strokeWidth={1.5}
          />
        ))}

        {/* Lines from categories to rights */}
        {catPositions.map((catPos) => {
          const rights = catPos.cat.rights ?? [];
          return rights.map((right) => {
            const rp = rightPositions.find((r) => r.right.id === right.id);
            if (!rp) return null;
            return (
              <line
                key={`line-cat-right-${right.id}`}
                x1={catPos.x}
                y1={catPos.y}
                x2={rp.x}
                y2={rp.y}
                stroke="#cbd5e1"
                strokeWidth={1}
              />
            );
          });
        })}

        {/* Right nodes */}
        {rightPositions.map(({ right, x, y, color, catColor }) => {
          const isHighlighted = right.id === spec.highlightedRightId;
          return (
            <g key={right.id}>
              <circle
                cx={x}
                cy={y}
                r={14}
                fill={isHighlighted ? "#eff6ff" : color}
                stroke={isHighlighted ? "#2563eb" : catColor}
                strokeWidth={isHighlighted ? 3 : 1}
              />
              <text
                x={x}
                y={y + 22}
                textAnchor="middle"
                fill="#334155"
                fontSize={8}
              >
                {truncate(right.label, 12)}
              </text>
            </g>
          );
        })}

        {/* Category nodes */}
        {catPositions.map(({ cat, x, y, color }) => (
          <g key={cat.id}>
            <circle cx={x} cy={y} r={24} fill={color} />
            <text
              x={x}
              y={y + 4}
              textAnchor="middle"
              fill="white"
              fontSize={9}
              fontWeight="600"
            >
              {truncate(cat.label, 10)}
            </text>
          </g>
        ))}

        {/* Root node */}
        <circle cx={cx} cy={cy} r={30} fill="#1e293b" />
        <text
          x={cx}
          y={cy + 4}
          textAnchor="middle"
          fill="white"
          fontSize={10}
          fontWeight="700"
        >
          {truncate(spec.root?.label ?? "", 10)}
        </text>
      </svg>

      {/* Info panel */}
      {highlightedRight && (
        <div className="mt-2 mx-4 p-3 rounded-lg border border-blue-200 bg-blue-50">
          <p className="text-sm font-semibold text-blue-800">
            {highlightedRight.label}
            {highlightedRight.article && (
              <span className="ml-2 text-xs font-normal text-blue-500">
                {highlightedRight.article}
              </span>
            )}
          </p>
          {highlightedRight.description && (
            <p className="text-xs text-blue-700 mt-1">
              {highlightedRight.description}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
