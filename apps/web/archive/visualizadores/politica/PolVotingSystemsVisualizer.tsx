import type { PolVotingSystemsSpec } from "../types";

type Props = { spec: PolVotingSystemsSpec };

const AUTO_PALETTE = ["#2563eb", "#dc2626", "#16a34a", "#ca8a04", "#7c3aed"];

const COL_X = [20, 200, 380] as const;
const COL_WIDTH = 160;
const BAR_MAX_WIDTH = 120;
const BAR_HEIGHT = 16;
const BAR_SPACING = 28;
const HEADER_Y = 30;
const ROWS_START_Y = 52;

function getCandidateColor(
  candidates: PolVotingSystemsSpec["candidates"],
  candidateId: string,
  index: number,
): string {
  const candidate = candidates.find((c) => c.id === candidateId);
  return candidate?.color ?? AUTO_PALETTE[index % AUTO_PALETTE.length];
}

function getCandidateName(
  candidates: PolVotingSystemsSpec["candidates"],
  candidateId: string,
): string {
  return candidates.find((c) => c.id === candidateId)?.name ?? candidateId;
}

interface ColumnBarProps {
  colX: number;
  results: Array<{ candidateId: string; value: number }>;
  maxValue: number;
  winnerId: string | undefined;
  candidates: PolVotingSystemsSpec["candidates"];
  valueLabel?: (v: number) => string;
}

function ColumnBars({
  colX,
  results,
  maxValue,
  winnerId,
  candidates,
  valueLabel,
}: ColumnBarProps) {
  return (
    <>
      {results.map((item, i) => {
        const barWidth =
          maxValue > 0 ? (item.value / maxValue) * BAR_MAX_WIDTH : 0;
        const y = ROWS_START_Y + i * BAR_SPACING;
        const isWinner = item.candidateId === winnerId;
        const color = getCandidateColor(candidates, item.candidateId, i);
        const name = getCandidateName(candidates, item.candidateId);
        const displayValue = valueLabel ? valueLabel(item.value) : String(item.value);

        return (
          <g key={item.candidateId}>
            {/* Candidate name */}
            <text
              x={colX}
              y={y - 2}
              fontSize={9}
              fill={isWinner ? "#1e3a8a" : "#475569"}
              fontWeight={isWinner ? "bold" : "normal"}
            >
              {isWinner ? `★ ${name}` : name}
            </text>
            {/* Bar background */}
            <rect
              x={colX}
              y={y + 2}
              width={BAR_MAX_WIDTH}
              height={BAR_HEIGHT}
              fill="#f1f5f9"
              rx={3}
            />
            {/* Bar fill */}
            {barWidth > 0 && (
              <rect
                x={colX}
                y={y + 2}
                width={barWidth}
                height={BAR_HEIGHT}
                fill={color}
                rx={3}
                opacity={0.85}
              />
            )}
            {/* Value label to the right of bar */}
            <text
              x={colX + BAR_MAX_WIDTH + 4}
              y={y + BAR_HEIGHT / 2 + 5}
              fontSize={9}
              fill="#334155"
            >
              {displayValue}
            </text>
          </g>
        );
      })}
    </>
  );
}

export default function PolVotingSystemsVisualizer({ spec }: Props) {
  const { candidates, results, winnerBySystem } = spec;

  // Plurality column data
  const pluralityData = (results.plurality ?? []).map((r) => ({
    candidateId: r.candidateId,
    value: r.votes,
  }));
  const pluralityMax = pluralityData.length > 0
    ? Math.max(...pluralityData.map((d) => d.value))
    : 1;

  // Ballotage column: prefer round 2, fall back to round 1
  const runoff = results.runoff ?? [];
  const hasRunoff = runoff.length > 0;
  const round2 = runoff.filter((r) => r.round === 2);
  const runoffData = (round2.length > 0 ? round2 : runoff).map((r) => ({
    candidateId: r.candidateId,
    value: r.votes,
  }));
  const runoffMax = runoffData.length > 0
    ? Math.max(...runoffData.map((d) => d.value))
    : 1;

  // Borda column data
  const bordaRaw = results.borda ?? [];
  const hasBorda = bordaRaw.length > 0;
  const bordaData = bordaRaw.map((r) => ({
    candidateId: r.candidateId,
    value: r.points,
  }));
  const bordaMax = bordaData.length > 0
    ? Math.max(...bordaData.map((d) => d.value))
    : 1;

  const numCandidates = Math.max(
    pluralityData.length,
    runoffData.length,
    bordaData.length,
    candidates.length,
    1,
  );
  const viewHeight = Math.max(
    320,
    ROWS_START_Y + numCandidates * BAR_SPACING + 30,
  );

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
        viewBox={`0 0 560 ${viewHeight}`}
        className="w-full"
        role="img"
        aria-label={spec.title ?? "Comparación de sistemas de votación"}
      >
        {/* Column dividers */}
        <line x1={190} y1={10} x2={190} y2={viewHeight - 10} stroke="#e2e8f0" strokeWidth={1} />
        <line x1={370} y1={10} x2={370} y2={viewHeight - 10} stroke="#e2e8f0" strokeWidth={1} />

        {/* Column 1: Pluralidad */}
        <text
          x={COL_X[0] + COL_WIDTH / 2}
          y={HEADER_Y}
          textAnchor="middle"
          fontSize={12}
          fontWeight="bold"
          fill="#1e293b"
        >
          Pluralidad
        </text>
        {pluralityData.length > 0 ? (
          <ColumnBars
            colX={COL_X[0]}
            results={pluralityData}
            maxValue={pluralityMax}
            winnerId={winnerBySystem.plurality}
            candidates={candidates}
          />
        ) : (
          <text x={COL_X[0]} y={ROWS_START_Y + 10} fontSize={10} fill="#94a3b8">
            Sin datos
          </text>
        )}

        {/* Column 2: Ballotage */}
        <text
          x={COL_X[1] + COL_WIDTH / 2}
          y={HEADER_Y}
          textAnchor="middle"
          fontSize={12}
          fontWeight="bold"
          fill="#1e293b"
        >
          Ballotage
        </text>
        {hasRunoff ? (
          <ColumnBars
            colX={COL_X[1]}
            results={runoffData}
            maxValue={runoffMax}
            winnerId={winnerBySystem.runoff}
            candidates={candidates}
          />
        ) : (
          <text
            x={COL_X[1] + COL_WIDTH / 2}
            y={ROWS_START_Y + 20}
            textAnchor="middle"
            fontSize={11}
            fill="#94a3b8"
            fontStyle="italic"
          >
            No aplicado
          </text>
        )}

        {/* Column 3: Borda */}
        <text
          x={COL_X[2] + COL_WIDTH / 2}
          y={HEADER_Y}
          textAnchor="middle"
          fontSize={12}
          fontWeight="bold"
          fill="#1e293b"
        >
          Borda
        </text>
        {hasBorda ? (
          <ColumnBars
            colX={COL_X[2]}
            results={bordaData}
            maxValue={bordaMax}
            winnerId={winnerBySystem.borda}
            candidates={candidates}
            valueLabel={(v) => `${v}pts`}
          />
        ) : (
          <text
            x={COL_X[2] + COL_WIDTH / 2}
            y={ROWS_START_Y + 20}
            textAnchor="middle"
            fontSize={11}
            fill="#94a3b8"
            fontStyle="italic"
          >
            No disponible
          </text>
        )}
      </svg>
    </section>
  );
}
