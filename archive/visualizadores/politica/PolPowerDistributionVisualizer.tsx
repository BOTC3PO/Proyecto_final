import type { PolPowerDistributionSpec } from "../types";

type Props = { spec: PolPowerDistributionSpec };

const BRANCH_W = 140;
const BRANCH_H = 80;
const HALF_W = BRANCH_W / 2;
const HALF_H = BRANCH_H / 2;

const RELATION_COLORS: Record<string, string> = {
  check: "#ef4444",
  appoints: "#16a34a",
  "reports-to": "#2563eb",
};

const RELATION_DASH: Record<string, string | undefined> = {
  check: "5 3",
  appoints: undefined,
  "reports-to": undefined,
};

const LEGEND_ITEMS: Array<{ kind: "check" | "appoints" | "reports-to"; label: string }> = [
  { kind: "check", label: "Control / Fiscalización" },
  { kind: "appoints", label: "Nombramiento" },
  { kind: "reports-to", label: "Rendición de cuentas" },
];

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return text.slice(0, max - 1) + "…";
}

function branchCenter(branch: PolPowerDistributionSpec["branches"][number]) {
  return { x: branch.cx, y: branch.cy };
}

function quadraticBezierPath(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
): string {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  // Perpendicular offset to create a slight curve
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const cpx = mx - (dy / len) * 40;
  const cpy = my + (dx / len) * 40;
  return `M ${x1.toFixed(1)} ${y1.toFixed(1)} Q ${cpx.toFixed(1)} ${cpy.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`;
}

function arrowMarkerId(kind: string): string {
  return `arrow-${kind}`;
}

export default function PolPowerDistributionVisualizer({ spec }: Props) {
  const { branches, relations, system } = spec;

  const systemLabel =
    system === "presidential"
      ? "Sistema Presidencial"
      : system === "parliamentary"
      ? "Sistema Parlamentario"
      : "Sistema Federal";

  // Build branch lookup by id
  const branchById = new Map(branches.map((b) => [b.id, b]));

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      {(spec.title || spec.description) && (
        <header className="mb-3">
          {spec.title && (
            <h2 className="text-base font-semibold text-slate-900">
              {spec.title}
            </h2>
          )}
          {spec.description && (
            <p className="text-sm text-slate-500">{spec.description}</p>
          )}
        </header>
      )}

      <svg
        viewBox="0 0 560 360"
        className="w-full"
        role="img"
        aria-label={spec.title ?? "Distribución del poder"}
      >
        <defs>
          {(["check", "appoints", "reports-to"] as const).map((kind) => (
            <marker
              key={kind}
              id={arrowMarkerId(kind)}
              markerWidth={8}
              markerHeight={8}
              refX={6}
              refY={3}
              orient="auto"
            >
              <path d="M0,0 L0,6 L8,3 z" fill={RELATION_COLORS[kind]} />
            </marker>
          ))}
        </defs>

        {/* System label at top center */}
        <text
          x={280}
          y={18}
          textAnchor="middle"
          fontSize={13}
          fontWeight="bold"
          fill="#1e293b"
        >
          {systemLabel}
        </text>

        {/* Relation arrows (drawn before branches so they appear behind) */}
        {relations.map((rel) => {
          const from = branchById.get(rel.fromId);
          const to = branchById.get(rel.toId);
          if (!from || !to) return null;

          const fc = branchCenter(from);
          const tc = branchCenter(to);
          const color = RELATION_COLORS[rel.kind] ?? "#64748b";
          const dash = RELATION_DASH[rel.kind];
          const markerId = arrowMarkerId(rel.kind);

          // Edge points on the rectangle border (simplified: use center-to-center direction)
          const dx = tc.x - fc.x;
          const dy = tc.y - fc.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const ux = dx / dist;
          const uy = dy / dist;

          // Start/end at rectangle edges
          const startX = fc.x + ux * HALF_W;
          const startY = fc.y + uy * HALF_H;
          const endX = tc.x - ux * HALF_W;
          const endY = tc.y - uy * HALF_H;

          const pathD = quadraticBezierPath(startX, startY, endX, endY);

          // Label at curve midpoint (approx)
          const labelX = (startX + endX) / 2;
          const labelY = (startY + endY) / 2 - 6;

          return (
            <g key={rel.id}>
              <path
                d={pathD}
                fill="none"
                stroke={color}
                strokeWidth={1.8}
                strokeDasharray={dash}
                markerEnd={`url(#${markerId})`}
              />
              {rel.label && (
                <text
                  x={labelX}
                  y={labelY}
                  textAnchor="middle"
                  fontSize={8}
                  fill={color}
                  fontWeight="600"
                >
                  {truncate(rel.label, 20)}
                </text>
              )}
            </g>
          );
        })}

        {/* Branch rectangles */}
        {branches.map((branch) => {
          const x = branch.cx - HALF_W;
          const y = branch.cy - HALF_H;
          const fillColor = branch.color ?? "#e0e7ff";
          const powers = branch.powers ?? [];

          return (
            <g key={branch.id}>
              <rect
                x={x}
                y={y}
                width={BRANCH_W}
                height={BRANCH_H}
                rx={8}
                fill={fillColor}
                stroke="#94a3b8"
                strokeWidth={1.5}
              />
              {/* Branch name */}
              <text
                x={branch.cx}
                y={y + 16}
                textAnchor="middle"
                fontSize={11}
                fontWeight="bold"
                fill="#1e293b"
              >
                {truncate(branch.label, 18)}
              </text>
              {/* Role */}
              <text
                x={branch.cx}
                y={y + 29}
                textAnchor="middle"
                fontSize={9}
                fill="#475569"
              >
                {truncate(branch.role, 22)}
              </text>
              {/* Powers (up to 3) */}
              {powers.slice(0, 3).map((power, pi) => (
                <text
                  key={pi}
                  x={branch.cx}
                  y={y + 42 + pi * 12}
                  textAnchor="middle"
                  fontSize={8}
                  fill="#64748b"
                >
                  • {truncate(power, 25)}
                </text>
              ))}
            </g>
          );
        })}

        {/* Legend at bottom */}
        {LEGEND_ITEMS.map((item, i) => {
          const lx = 20;
          const ly = 316 + i * 14;
          const color = RELATION_COLORS[item.kind];
          const dash = RELATION_DASH[item.kind];
          return (
            <g key={item.kind}>
              <line
                x1={lx}
                y1={ly + 4}
                x2={lx + 24}
                y2={ly + 4}
                stroke={color}
                strokeWidth={2}
                strokeDasharray={dash}
              />
              <text x={lx + 30} y={ly + 8} fontSize={9} fill="#475569">
                {item.label}
              </text>
            </g>
          );
        })}
      </svg>
    </section>
  );
}
