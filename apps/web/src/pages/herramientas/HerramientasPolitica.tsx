import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import VisualizerRenderer from "../../visualizadores/graficos/VisualizerRenderer";
import type {
  PolVotingSystemsSpec,
  PolPowerDistributionSpec,
} from "../../visualizadores/types";

type Tool = "voting" | "power";

// ── Voting Systems ────────────────────────────────────────────────────────────

const CANDIDATE_COLORS = ["#2563eb", "#16a34a", "#dc2626", "#d97706"];

function computePlurality(
  candidates: Array<{ id: string; name: string }>,
  votes: number[],
): Array<{ candidateId: string; votes: number }> {
  return candidates.map((c, i) => ({ candidateId: c.id, votes: votes[i] }));
}

function computeBorda(
  candidates: Array<{ id: string; name: string }>,
  votes: number[],
): Array<{ candidateId: string; points: number }> {
  const n = candidates.length;
  // Borda: rank candidates by vote count descending, assign n-1, n-2, ... points
  const sorted = [...candidates.map((c, i) => ({ id: c.id, votes: votes[i] }))]
    .sort((a, b) => b.votes - a.votes);
  const points: Record<string, number> = {};
  sorted.forEach((c, rank) => {
    points[c.id] = (points[c.id] ?? 0) + (n - 1 - rank);
  });
  return candidates.map((c) => ({ candidateId: c.id, points: points[c.id] ?? 0 }));
}

function computeRunoff(
  candidates: Array<{ id: string; name: string }>,
  votes: number[],
): Array<{ candidateId: string; votes: number; round: number }> {
  // Round 1: all candidates
  const round1 = candidates.map((c, i) => ({
    candidateId: c.id,
    votes: votes[i],
    round: 1,
  }));
  // Round 2: top 2 by votes
  const sorted = [...round1].sort((a, b) => b.votes - a.votes);
  const top2 = sorted.slice(0, 2);
  const totalTop2 = top2.reduce((s, c) => s + c.votes, 0) || 1;
  const round2 = top2.map((c) => ({
    candidateId: c.candidateId,
    votes: Math.round((c.votes / totalTop2) * 100),
    round: 2,
  }));
  return [...round1, ...round2];
}

function pluralityWinner(
  candidates: Array<{ id: string; name: string }>,
  votes: number[],
): string {
  let maxVotes = -1;
  let winner = candidates[0]?.name ?? "";
  candidates.forEach((c, i) => {
    if (votes[i] > maxVotes) {
      maxVotes = votes[i];
      winner = c.name;
    }
  });
  return winner;
}

function bordaWinner(
  candidates: Array<{ id: string; name: string }>,
  votes: number[],
): string {
  const borda = computeBorda(candidates, votes);
  const best = borda.reduce((prev, cur) =>
    cur.points > prev.points ? cur : prev,
  );
  return candidates.find((c) => c.id === best.candidateId)?.name ?? "";
}

function runoffWinner(
  candidates: Array<{ id: string; name: string }>,
  votes: number[],
): string {
  const sorted = candidates
    .map((c, i) => ({ id: c.id, name: c.name, votes: votes[i] }))
    .sort((a, b) => b.votes - a.votes);
  return sorted[0]?.name ?? "";
}

// ── Power Distribution ────────────────────────────────────────────────────────

type GovType = "presidential" | "parliamentary" | "semi-presidential";
type CountryExample = "US" | "France" | "UK" | "Argentina";

interface BranchDef {
  id: string;
  label: string;
  role: string;
  powers: string[];
  checksOn: string[];
  color: string;
  cx: number;
  cy: number;
}

interface RelationDef {
  id: string;
  fromId: string;
  toId: string;
  label: string;
  kind: "check" | "appoints" | "reports-to";
}

const POWER_CONFIGS: Record<
  GovType,
  { branches: BranchDef[]; relations: RelationDef[] }
> = {
  presidential: {
    branches: [
      {
        id: "exec",
        label: "Ejecutivo",
        role: "Presidente",
        powers: ["Veto legislativo", "Comandante en jefe", "Política exterior"],
        checksOn: ["judic"],
        color: "#2563eb",
        cx: 50,
        cy: 20,
      },
      {
        id: "legis",
        label: "Legislativo",
        role: "Congreso / Parlamento",
        powers: ["Legislar", "Aprobar presupuesto", "Declarar guerra"],
        checksOn: ["exec"],
        color: "#16a34a",
        cx: 20,
        cy: 70,
      },
      {
        id: "judic",
        label: "Judicial",
        role: "Corte Suprema",
        powers: ["Control de constitucionalidad", "Interpretar leyes"],
        checksOn: ["legis"],
        color: "#dc2626",
        cx: 80,
        cy: 70,
      },
    ],
    relations: [
      { id: "r1", fromId: "legis", toId: "exec", label: "Controla", kind: "check" },
      { id: "r2", fromId: "exec", toId: "judic", label: "Nombra", kind: "appoints" },
      { id: "r3", fromId: "judic", toId: "legis", label: "Controla", kind: "check" },
    ],
  },
  parliamentary: {
    branches: [
      {
        id: "parliament",
        label: "Parlamento",
        role: "Cámara legislativa",
        powers: ["Legislar", "Investidura", "Moción de censura"],
        checksOn: ["cabinet"],
        color: "#16a34a",
        cx: 50,
        cy: 20,
      },
      {
        id: "cabinet",
        label: "Gabinete",
        role: "Primer Ministro + Ministros",
        powers: ["Ejecutar leyes", "Dirigir administración"],
        checksOn: ["parliament"],
        color: "#2563eb",
        cx: 20,
        cy: 70,
      },
      {
        id: "jefestado",
        label: "Jefe de Estado",
        role: "Monarca / Presidente ceremonial",
        powers: ["Representación simbólica", "Disolución del parlamento"],
        checksOn: [],
        color: "#d97706",
        cx: 80,
        cy: 70,
      },
    ],
    relations: [
      { id: "r1", fromId: "parliament", toId: "cabinet", label: "Inviste", kind: "appoints" },
      { id: "r2", fromId: "cabinet", toId: "parliament", label: "Rinde cuentas", kind: "reports-to" },
      { id: "r3", fromId: "jefestado", toId: "parliament", label: "Disuelve", kind: "check" },
    ],
  },
  "semi-presidential": {
    branches: [
      {
        id: "presidente",
        label: "Presidente",
        role: "Jefe de Estado ejecutivo",
        powers: ["Política exterior", "Defensa", "Disolver Asamblea"],
        checksOn: ["pm"],
        color: "#2563eb",
        cx: 50,
        cy: 15,
      },
      {
        id: "pm",
        label: "Primer Ministro",
        role: "Jefe de Gobierno",
        powers: ["Política interior", "Coordinar gabinete"],
        checksOn: ["asamblea"],
        color: "#7c3aed",
        cx: 20,
        cy: 55,
      },
      {
        id: "asamblea",
        label: "Asamblea",
        role: "Poder Legislativo",
        powers: ["Legislar", "Votar presupuesto", "Censura al PM"],
        checksOn: ["pm"],
        color: "#16a34a",
        cx: 80,
        cy: 55,
      },
      {
        id: "judic",
        label: "Judicial",
        role: "Consejo Constitucional",
        powers: ["Constitucionalidad de leyes"],
        checksOn: ["asamblea"],
        color: "#dc2626",
        cx: 50,
        cy: 85,
      },
    ],
    relations: [
      { id: "r1", fromId: "presidente", toId: "pm", label: "Nombra", kind: "appoints" },
      { id: "r2", fromId: "asamblea", toId: "pm", label: "Censura", kind: "check" },
      { id: "r3", fromId: "presidente", toId: "asamblea", label: "Disuelve", kind: "check" },
      { id: "r4", fromId: "judic", toId: "asamblea", label: "Control", kind: "check" },
    ],
  },
};

const COUNTRY_GOV: Record<CountryExample, GovType> = {
  US: "presidential",
  Argentina: "presidential",
  France: "semi-presidential",
  UK: "parliamentary",
};

const COUNTRY_NAMES: Record<CountryExample, string> = {
  US: "Estados Unidos",
  France: "Francia",
  UK: "Reino Unido",
  Argentina: "Argentina",
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function HerramientasPolitica() {
  const [activeTool, setActiveTool] = useState<Tool>("voting");

  // Voting state
  const [candidateNames, setCandidateNames] = useState([
    "Candidato A",
    "Candidato B",
    "Candidato C",
    "Candidato D",
  ]);
  const [votesCounts, setVotesCounts] = useState([600, 400, 300, 200]);

  // Power distribution state
  const [govType, setGovType] = useState<GovType>("presidential");
  const [country, setCountry] = useState<CountryExample>("US");

  const candidates = useMemo(
    () =>
      candidateNames.map((name, i) => ({
        id: `c${i}`,
        name: name.trim() || `Candidato ${i + 1}`,
        color: CANDIDATE_COLORS[i],
      })),
    [candidateNames],
  );

  const ballots = useMemo(() => {
    // Generate synthetic ballots from vote counts: each ballot is one voter preference list
    // For simplicity, create ranked ballots by splitting votes equally across all orderings
    const sorted = [...candidates]
      .map((c, i) => ({ ...c, votes: votesCounts[i] }))
      .sort((a, b) => b.votes - a.votes);
    return sorted.map((c, rank) => ({
      id: `b${rank}`,
      preferences: [
        c.id,
        ...sorted.filter((x) => x.id !== c.id).map((x) => x.id),
      ],
    }));
  }, [candidates, votesCounts]);

  const votingSpec = useMemo<PolVotingSystemsSpec>(
    () => ({
      kind: "pol-voting-systems",
      title: "Comparador de sistemas de votación",
      description:
        "Compara cómo cada sistema electoral puede producir diferentes ganadores con los mismos votos.",
      candidates,
      ballots,
      results: {
        plurality: computePlurality(candidates, votesCounts),
        runoff: computeRunoff(candidates, votesCounts),
        borda: computeBorda(candidates, votesCounts),
      },
      winnerBySystem: {
        plurality: pluralityWinner(candidates, votesCounts),
        runoff: runoffWinner(candidates, votesCounts),
        borda: bordaWinner(candidates, votesCounts),
      },
    }),
    [candidates, ballots, votesCounts],
  );

  const effectiveGovType = activeTool === "power" ? govType : "presidential";

  const powerSpec = useMemo<PolPowerDistributionSpec>(() => {
    const config = POWER_CONFIGS[effectiveGovType];
    return {
      kind: "pol-power-distribution",
      title: `Distribución de poder: sistema ${effectiveGovType === "presidential" ? "presidencial" : effectiveGovType === "parliamentary" ? "parlamentario" : "semipresidencial"}`,
      description: `Estructura de poderes en un sistema ${effectiveGovType}. Ejemplo: ${COUNTRY_NAMES[country]}.`,
      system: effectiveGovType === "semi-presidential" ? "federal" : effectiveGovType,
      branches: config.branches,
      relations: config.relations,
    };
  }, [effectiveGovType, country]);

  return (
    <div className="space-y-6 px-6 py-8">
      <div className="flex items-center gap-3">
        <Link
          to="/herramientas"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          &larr; Volver a herramientas
        </Link>
      </div>

      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-slate-900">
          Herramientas de Politica
        </h1>
        <p className="text-sm text-slate-600">
          Explora sistemas electorales y distribución del poder en distintos regímenes.
        </p>
      </header>

      {/* Tool selector */}
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setActiveTool("voting")}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            activeTool === "voting"
              ? "bg-blue-600 text-white"
              : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
          }`}
        >
          Sistemas de votación
        </button>
        <button
          type="button"
          onClick={() => setActiveTool("power")}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            activeTool === "power"
              ? "bg-blue-600 text-white"
              : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
          }`}
        >
          Distribución de poder
        </button>
      </div>

      {/* ── Voting Systems tool ── */}
      {activeTool === "voting" && (
        <>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">
              Candidatos y votos
            </h2>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              {candidateNames.map((name, i) => (
                <div key={i} className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">
                    Candidato {i + 1}
                  </label>
                  <input
                    type="text"
                    value={name}
                    maxLength={32}
                    onChange={(e) => {
                      const next = [...candidateNames];
                      next[i] = e.target.value;
                      setCandidateNames(next);
                    }}
                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={`Candidato ${i + 1}`}
                  />
                  <label className="flex items-center justify-between text-sm text-slate-600">
                    <span>Votos: {votesCounts[i]}</span>
                    <span
                      className="inline-block h-3 w-3 rounded-full"
                      style={{ backgroundColor: CANDIDATE_COLORS[i] }}
                    />
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={1000}
                    step={10}
                    value={votesCounts[i]}
                    onChange={(e) => {
                      const next = [...votesCounts];
                      next[i] = Number(e.target.value);
                      setVotesCounts(next);
                    }}
                    className="w-full accent-blue-600"
                  />
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-1 text-lg font-semibold text-slate-800">
              Resumen de ganadores por sistema
            </h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Pluralidad", winner: pluralityWinner(candidates, votesCounts) },
                { label: "Segunda vuelta", winner: runoffWinner(candidates, votesCounts) },
                { label: "Borda", winner: bordaWinner(candidates, votesCounts) },
              ].map(({ label, winner }) => (
                <div
                  key={label}
                  className="rounded-xl border border-slate-100 bg-slate-50 p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {label}
                  </p>
                  <p className="mt-1 text-base font-semibold text-slate-800">
                    {winner}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <VisualizerRenderer spec={votingSpec} />
          </div>
        </>
      )}

      {/* ── Power Distribution tool ── */}
      {activeTool === "power" && (
        <>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">
              Configuración del sistema
            </h2>
            <div className="mt-4 grid gap-5 md:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-600">
                <span className="font-medium text-slate-700">
                  Tipo de gobierno
                </span>
                <select
                  value={govType}
                  onChange={(e) => {
                    const v = e.target.value as GovType;
                    setGovType(v);
                    // Sync country to a matching example
                    if (v === "presidential") setCountry("US");
                    else if (v === "parliamentary") setCountry("UK");
                    else setCountry("France");
                  }}
                  className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="presidential">Presidencial</option>
                  <option value="parliamentary">Parlamentario</option>
                  <option value="semi-presidential">Semipresidencial</option>
                </select>
              </label>

              <label className="space-y-2 text-sm text-slate-600">
                <span className="font-medium text-slate-700">
                  Ejemplo de pais
                </span>
                <select
                  value={country}
                  onChange={(e) => {
                    const c = e.target.value as CountryExample;
                    setCountry(c);
                    setGovType(COUNTRY_GOV[c]);
                  }}
                  className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="US">Estados Unidos (presidencial)</option>
                  <option value="Argentina">Argentina (presidencial)</option>
                  <option value="France">Francia (semipresidencial)</option>
                  <option value="UK">Reino Unido (parlamentario)</option>
                </select>
              </label>
            </div>
          </section>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <VisualizerRenderer spec={powerSpec} />
          </div>
        </>
      )}
    </div>
  );
}
