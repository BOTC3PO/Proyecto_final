import type { MusicRhythmGridSpec } from "../types";

type Props = { spec: MusicRhythmGridSpec };

const HEADER_H = 40;
const ROW_H = 36;
const LABEL_W = 80;
const CELL_W = 28;
const CELL_GAP = 2;
const PADDING_LEFT = 10;
const PADDING_RIGHT = 10;
const PADDING_BOTTOM = 32;

const DEFAULT_TRACK_COLORS = [
  "#3b82f6",
  "#ef4444",
  "#10b981",
  "#f59e0b",
  "#8b5cf6",
  "#06b6d4",
  "#f97316",
  "#ec4899",
];

export default function MusicRhythmGridVisualizer({ spec }: Props) {
  const {
    tracks = [],
    timeSignature = { beats: 4, division: 4 },
    tempo = 120,
    measures = 2,
  } = spec;

  const beatsPerMeasure = timeSignature.beats;
  const totalColumns = measures * beatsPerMeasure;

  const trackCount = tracks.length;
  const gridH = HEADER_H + trackCount * ROW_H;
  const gridW = LABEL_W + totalColumns * (CELL_W + CELL_GAP) - CELL_GAP;

  // Dynamic viewBox width capped to 560, but let it scale
  const VIEW_W = Math.min(560, PADDING_LEFT + gridW + PADDING_RIGHT);
  const VIEW_H = gridH + PADDING_BOTTOM;

  // Compute ms per beat
  const msPerBeat = Math.round((60 / tempo) * 1000);

  // Build a beat lookup per track: "measure-beat" -> beat info
  type BeatInfo = { accent?: boolean };
  const beatMap: Map<string, BeatInfo>[] = tracks.map((track) => {
    const map = new Map<string, BeatInfo>();
    for (const b of track.beats ?? []) {
      map.set(`${b.measure}-${b.beat}`, { accent: b.accent });
    }
    return map;
  });

  const startX = PADDING_LEFT + LABEL_W;

  return (
    <svg
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label={spec.title ?? "Rhythm Grid"}
    >
      {/* Title */}
      {spec.title && (
        <text
          x={VIEW_W / 2}
          y="14"
          textAnchor="middle"
          fontSize="12"
          fontWeight="600"
          fill="#374151"
        >
          {spec.title}
        </text>
      )}

      {/* Time signature + tempo header */}
      <text
        x={PADDING_LEFT}
        y={HEADER_H - 12}
        fontSize="10"
        fill="#6b7280"
        fontWeight="500"
      >
        {timeSignature.beats}/{timeSignature.division}
      </text>

      {/* Column headers: beat numbers */}
      {Array.from({ length: totalColumns }, (_, colIdx) => {
        const measureIdx = Math.floor(colIdx / beatsPerMeasure);
        const beatIdx = (colIdx % beatsPerMeasure) + 1;
        const isFirstBeat = beatIdx === 1;
        const cx =
          startX + colIdx * (CELL_W + CELL_GAP) + CELL_W / 2;

        return (
          <g key={`col-${colIdx}`}>
            {/* Measure separator line */}
            {isFirstBeat && (
              <line
                x1={startX + colIdx * (CELL_W + CELL_GAP)}
                y1={HEADER_H - 8}
                x2={startX + colIdx * (CELL_W + CELL_GAP)}
                y2={HEADER_H + trackCount * ROW_H}
                stroke="#d1d5db"
                strokeWidth="1.5"
              />
            )}
            {/* Measure label above beat 1 */}
            {isFirstBeat && (
              <text
                x={cx}
                y={HEADER_H - 20}
                textAnchor="middle"
                fontSize="8"
                fill="#9ca3af"
              >
                M{measureIdx + 1}
              </text>
            )}
            {/* Beat number */}
            <text
              x={cx}
              y={HEADER_H - 6}
              textAnchor="middle"
              fontSize="9"
              fontWeight={isFirstBeat ? "700" : "400"}
              fill={isFirstBeat ? "#374151" : "#9ca3af"}
            >
              {beatIdx}
            </text>
          </g>
        );
      })}

      {/* Track rows */}
      {tracks.map((track, rowIdx) => {
        const rowY = HEADER_H + rowIdx * ROW_H;
        const rowColor =
          track.color ?? DEFAULT_TRACK_COLORS[rowIdx % DEFAULT_TRACK_COLORS.length];
        const isEvenRow = rowIdx % 2 === 0;

        return (
          <g key={track.id}>
            {/* Row background */}
            <rect
              x={PADDING_LEFT}
              y={rowY}
              width={gridW}
              height={ROW_H}
              fill={isEvenRow ? "#f9fafb" : "#f3f4f6"}
              stroke="none"
            />

            {/* Instrument label */}
            <text
              x={PADDING_LEFT + LABEL_W - 6}
              y={rowY + ROW_H / 2}
              textAnchor="end"
              dominantBaseline="middle"
              fontSize="9"
              fontWeight="500"
              fill="#374151"
            >
              {track.instrument.length > 10
                ? track.instrument.slice(0, 9) + "…"
                : track.instrument}
            </text>

            {/* Cells */}
            {Array.from({ length: totalColumns }, (_, colIdx) => {
              const measureNum = Math.floor(colIdx / beatsPerMeasure) + 1;
              const beatNum = (colIdx % beatsPerMeasure) + 1;
              const key = `${measureNum}-${beatNum}`;
              const beatInfo = beatMap[rowIdx].get(key);
              const isActive = beatInfo !== undefined;
              const isAccent = isActive && (beatInfo.accent || beatNum === 1);

              const cellX = startX + colIdx * (CELL_W + CELL_GAP);
              const cellY = rowY + 4;
              const cellH = ROW_H - 8;
              const cellR = 3;

              return (
                <g key={`cell-${rowIdx}-${colIdx}`}>
                  {/* Cell background (inactive) */}
                  <rect
                    x={cellX}
                    y={cellY}
                    width={CELL_W}
                    height={cellH}
                    rx={cellR}
                    fill={isActive ? rowColor : "#e5e7eb"}
                    opacity={isActive ? (isAccent ? 1 : 0.7) : 0.4}
                    stroke={isActive ? rowColor : "none"}
                    strokeWidth={isAccent ? "1.5" : "0"}
                    strokeOpacity="0.5"
                  />
                  {/* Accent indicator: small dot at top */}
                  {isAccent && isActive && (
                    <circle
                      cx={cellX + CELL_W / 2}
                      cy={cellY + 4}
                      r={2}
                      fill="white"
                      opacity="0.9"
                    />
                  )}
                </g>
              );
            })}
          </g>
        );
      })}

      {/* Bottom border */}
      <line
        x1={PADDING_LEFT}
        y1={HEADER_H + trackCount * ROW_H}
        x2={PADDING_LEFT + gridW}
        y2={HEADER_H + trackCount * ROW_H}
        stroke="#d1d5db"
        strokeWidth="1"
      />

      {/* Tempo info */}
      <text
        x={PADDING_LEFT}
        y={HEADER_H + trackCount * ROW_H + 18}
        fontSize="9"
        fill="#6b7280"
      >
        {tempo} BPM = {msPerBeat} ms/beat · {measures} measure{measures !== 1 ? "s" : ""} · {totalColumns} beats
      </text>

      {/* Legend: active vs inactive */}
      <rect
        x={VIEW_W - 110}
        y={HEADER_H + trackCount * ROW_H + 10}
        width={10}
        height={10}
        rx="2"
        fill="#3b82f6"
        opacity="0.8"
      />
      <text
        x={VIEW_W - 97}
        y={HEADER_H + trackCount * ROW_H + 19}
        fontSize="8"
        fill="#6b7280"
      >
        Active
      </text>
      <rect
        x={VIEW_W - 60}
        y={HEADER_H + trackCount * ROW_H + 10}
        width={10}
        height={10}
        rx="2"
        fill="#e5e7eb"
        opacity="0.8"
      />
      <text
        x={VIEW_W - 47}
        y={HEADER_H + trackCount * ROW_H + 19}
        fontSize="8"
        fill="#6b7280"
      >
        Silent
      </text>
    </svg>
  );
}
