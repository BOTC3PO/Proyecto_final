import type { LifeTimeMatrixSpec } from "../types";

type Props = { spec: LifeTimeMatrixSpec };

const VIEW_W = 560;
const VIEW_H = 380;

// Quadrant layout constants
const AXIS_LABEL_W = 60;  // left axis label area
const AXIS_LABEL_H = 30;  // top axis label area
const GRID_X = AXIS_LABEL_W;
const GRID_Y = AXIS_LABEL_H;
const GRID_W = VIEW_W - AXIS_LABEL_W - 10;
const GRID_H = VIEW_H - AXIS_LABEL_H - 40; // bottom space for legend

const Q_W = GRID_W / 2;
const Q_H = GRID_H / 2;

const QUADRANT_CONFIG = [
  {
    key: "I" as const,
    row: 0,
    col: 0,
    fill: "#fef2f2",
    stroke: "#fca5a5",
    urgent: true,
    important: true,
    defaultLabel: "Urgent + Important",
    actionLabel: "Do First",
    actionColor: "#dc2626",
  },
  {
    key: "II" as const,
    row: 0,
    col: 1,
    fill: "#eff6ff",
    stroke: "#93c5fd",
    urgent: false,
    important: true,
    defaultLabel: "Not Urgent + Important",
    actionLabel: "Schedule",
    actionColor: "#2563eb",
  },
  {
    key: "III" as const,
    row: 1,
    col: 0,
    fill: "#fffbeb",
    stroke: "#fcd34d",
    urgent: true,
    important: false,
    defaultLabel: "Urgent + Not Important",
    actionLabel: "Delegate",
    actionColor: "#d97706",
  },
  {
    key: "IV" as const,
    row: 1,
    col: 1,
    fill: "#f8fafc",
    stroke: "#cbd5e1",
    urgent: false,
    important: false,
    defaultLabel: "Not Urgent + Not Important",
    actionLabel: "Eliminate",
    actionColor: "#64748b",
  },
];

function getQuadrantKey(
  urgent: boolean,
  important: boolean,
  explicitQuadrant?: "I" | "II" | "III" | "IV",
): "I" | "II" | "III" | "IV" {
  if (explicitQuadrant) return explicitQuadrant;
  if (urgent && important) return "I";
  if (!urgent && important) return "II";
  if (urgent && !important) return "III";
  return "IV";
}

export default function LifeTimeMatrixVisualizer({ spec }: Props) {
  const { tasks = [], totalHoursPerWeek = 168, quadrantLabels = {} } = spec;

  // Group tasks by quadrant
  const quadrantTasks: Record<"I" | "II" | "III" | "IV", typeof tasks> = {
    I: [],
    II: [],
    III: [],
    IV: [],
  };

  for (const task of tasks) {
    const qKey = getQuadrantKey(task.urgent, task.important, task.quadrant);
    quadrantTasks[qKey].push(task);
  }

  return (
    <svg
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label={spec.title ?? "Eisenhower Time Matrix"}
    >
      {/* Title */}
      {spec.title && (
        <text
          x={VIEW_W / 2}
          y="18"
          textAnchor="middle"
          fontSize="13"
          fontWeight="600"
          fill="#374151"
        >
          {spec.title}
        </text>
      )}

      {/* Axis labels */}
      {/* Top: IMPORTANT */}
      <text
        x={GRID_X + Q_W / 2}
        y={GRID_Y - 8}
        textAnchor="middle"
        fontSize="9"
        fontWeight="600"
        fill="#6b7280"
        textDecoration="underline"
      >
        IMPORTANT
      </text>
      {/* Top: NOT IMPORTANT */}
      <text
        x={GRID_X + Q_W + Q_W / 2}
        y={GRID_Y - 8}
        textAnchor="middle"
        fontSize="9"
        fontWeight="600"
        fill="#6b7280"
      >
        NOT IMPORTANT
      </text>
      {/* Left: URGENT (rotated) */}
      <text
        x={AXIS_LABEL_W - 4}
        y={GRID_Y + Q_H / 2}
        textAnchor="middle"
        fontSize="9"
        fontWeight="600"
        fill="#6b7280"
        transform={`rotate(-90, ${AXIS_LABEL_W - 4}, ${GRID_Y + Q_H / 2})`}
        textDecoration="underline"
      >
        URGENT
      </text>
      {/* Left: NOT URGENT (rotated) */}
      <text
        x={AXIS_LABEL_W - 4}
        y={GRID_Y + Q_H + Q_H / 2}
        textAnchor="middle"
        fontSize="9"
        fontWeight="600"
        fill="#6b7280"
        transform={`rotate(-90, ${AXIS_LABEL_W - 4}, ${GRID_Y + Q_H + Q_H / 2})`}
      >
        NOT URGENT
      </text>

      {/* Quadrants */}
      {QUADRANT_CONFIG.map((q) => {
        const qx = GRID_X + q.col * Q_W;
        const qy = GRID_Y + q.row * Q_H;
        const label =
          quadrantLabels[q.key] ?? q.defaultLabel;
        const qTasks = quadrantTasks[q.key];

        // Layout tasks in a grid within the quadrant
        const PADDING_INNER = 10;
        const LABEL_AREA_H = 28;
        const innerW = Q_W - PADDING_INNER * 2;
        const innerH = Q_H - PADDING_INNER * 2 - LABEL_AREA_H;

        // Place tasks in rows of up to 4
        const COLS = 4;
        const cellW = innerW / COLS;
        const cellH = innerH / Math.max(1, Math.ceil(qTasks.length / COLS));

        return (
          <g key={q.key}>
            {/* Quadrant background */}
            <rect
              x={qx}
              y={qy}
              width={Q_W}
              height={Q_H}
              fill={q.fill}
              stroke={q.stroke}
              strokeWidth="1.5"
            />

            {/* Quadrant header */}
            <rect
              x={qx}
              y={qy}
              width={Q_W}
              height={LABEL_AREA_H}
              fill={q.stroke}
              opacity="0.4"
            />
            <text
              x={qx + Q_W / 2}
              y={qy + 10}
              textAnchor="middle"
              fontSize="9"
              fontWeight="700"
              fill={q.actionColor}
            >
              {`Q${q.key}: ${label}`}
            </text>
            <text
              x={qx + Q_W / 2}
              y={qy + 22}
              textAnchor="middle"
              fontSize="8"
              fill={q.actionColor}
              opacity="0.8"
            >
              → {q.actionLabel}
            </text>

            {/* Task circles */}
            {qTasks.map((task, idx) => {
              const col = idx % COLS;
              const row = Math.floor(idx / COLS);
              const cx =
                qx + PADDING_INNER + cellW * col + cellW / 2;
              const cy =
                qy +
                PADDING_INNER +
                LABEL_AREA_H +
                cellH * row +
                cellH / 2;

              const hours = task.hours ?? 0;
              const r = Math.min(
                30,
                Math.max(8, 8 + (hours / Math.max(1, totalHoursPerWeek)) * 24),
              );
              const fillColor = task.color ?? q.actionColor;
              // Truncate label to fit
              const maxLabelLen = r < 14 ? 3 : r < 22 ? 5 : 8;
              const displayLabel =
                task.label.length > maxLabelLen
                  ? task.label.slice(0, maxLabelLen - 1) + "…"
                  : task.label;

              return (
                <g key={task.id}>
                  <circle
                    cx={cx}
                    cy={cy}
                    r={r}
                    fill={fillColor}
                    fillOpacity="0.75"
                    stroke={fillColor}
                    strokeWidth="1.5"
                  />
                  <text
                    x={cx}
                    y={cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={Math.max(6, Math.min(9, r * 0.6))}
                    fill="white"
                    fontWeight="600"
                  >
                    {displayLabel}
                  </text>
                  {/* Hours label below circle */}
                  {hours > 0 && (
                    <text
                      x={cx}
                      y={cy + r + 8}
                      textAnchor="middle"
                      fontSize="7"
                      fill="#6b7280"
                    >
                      {hours}h
                    </text>
                  )}
                </g>
              );
            })}

            {/* Empty state */}
            {qTasks.length === 0 && (
              <text
                x={qx + Q_W / 2}
                y={qy + LABEL_AREA_H + (Q_H - LABEL_AREA_H) / 2}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="9"
                fill="#d1d5db"
                fontStyle="italic"
              >
                No tasks
              </text>
            )}
          </g>
        );
      })}

      {/* Center axis lines */}
      <line
        x1={GRID_X + Q_W}
        y1={GRID_Y}
        x2={GRID_X + Q_W}
        y2={GRID_Y + Q_H * 2}
        stroke="#6b7280"
        strokeWidth="2"
        strokeDasharray="4 2"
        opacity="0.4"
      />
      <line
        x1={GRID_X}
        y1={GRID_Y + Q_H}
        x2={GRID_X + Q_W * 2}
        y2={GRID_Y + Q_H}
        stroke="#6b7280"
        strokeWidth="2"
        strokeDasharray="4 2"
        opacity="0.4"
      />

      {/* Legend: circle size explanation */}
      <text
        x={GRID_X}
        y={VIEW_H - 18}
        fontSize="8"
        fill="#9ca3af"
      >
        Circle size ∝ hours/week · Total: {totalHoursPerWeek}h/week
      </text>

      {/* Total tasks */}
      <text
        x={VIEW_W - 10}
        y={VIEW_H - 18}
        textAnchor="end"
        fontSize="8"
        fill="#9ca3af"
      >
        {tasks.length} task{tasks.length !== 1 ? "s" : ""}
      </text>
    </svg>
  );
}
