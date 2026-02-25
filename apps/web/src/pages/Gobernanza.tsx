import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/use-auth";
import {
  fetchProposals,
  type Proposal,
  PROPOSAL_TYPE_LABELS,
  STATUS_LABELS,
  LEVEL_LABELS,
} from "../services/governance";

type TabKey = "todas" | "abiertas" | "aprobadas" | "rechazadas";

const TAB_STATUS: Record<TabKey, string | undefined> = {
  todas: undefined,
  abiertas: "OPEN",
  aprobadas: "APPROVED",
  rechazadas: "REJECTED",
};

const STATUS_COLORS: Record<string, string> = {
  OPEN: "bg-blue-100 text-blue-700",
  APPROVED: "bg-emerald-100 text-emerald-700",
  REJECTED: "bg-red-100 text-red-700",
  CLOSED: "bg-slate-100 text-slate-600",
};

const LEVEL_COLORS: Record<string, string> = {
  CONTENT: "bg-violet-100 text-violet-700",
  GOVERNANCE: "bg-amber-100 text-amber-700",
};

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("es-AR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

function ProposalCard({ proposal }: { proposal: Proposal }) {
  const typeLabel = PROPOSAL_TYPE_LABELS[proposal.proposalType] ?? proposal.proposalType;
  const statusLabel = STATUS_LABELS[proposal.status] ?? proposal.status;
  const levelLabel = LEVEL_LABELS[proposal.level] ?? proposal.level;

  return (
    <Link
      to={`/gobernanza/propuestas/${proposal.id}`}
      className="block rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm hover:border-blue-300 hover:shadow-md transition-all"
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-slate-900 truncate">{typeLabel}</p>
          <p className="mt-0.5 text-xs text-slate-500">
            {proposal.targetType}
            {proposal.targetId ? ` / ${proposal.targetId}` : ""}
          </p>
          {proposal.rationale && (
            <p className="mt-1 text-xs text-slate-600 line-clamp-2">{proposal.rationale}</p>
          )}
        </div>
        <div className="flex flex-col items-end gap-1.5 shrink-0">
          <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${STATUS_COLORS[proposal.status] ?? "bg-slate-100 text-slate-600"}`}>
            {statusLabel}
          </span>
          <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${LEVEL_COLORS[proposal.level] ?? "bg-slate-100 text-slate-600"}`}>
            {levelLabel}
          </span>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-500">
        <span>{formatDate(proposal.createdAt)}</span>
        {proposal.voteSummary && (
          <span className="flex gap-2">
            <span className="text-emerald-600 font-medium">+{proposal.voteSummary.approve}</span>
            <span className="text-red-500 font-medium">-{proposal.voteSummary.reject}</span>
            {proposal.voteSummary.abstain > 0 && (
              <span className="text-slate-400">{proposal.voteSummary.abstain} abs.</span>
            )}
          </span>
        )}
      </div>
    </Link>
  );
}

export default function Gobernanza() {
  const { user } = useAuth();
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tab, setTab] = useState<TabKey>("abiertas");

  const canPropose =
    user?.role === "ADMIN" || user?.role === "DIRECTIVO" || user?.role === "TEACHER";

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(null);
    fetchProposals(TAB_STATUS[tab] ? { status: TAB_STATUS[tab] } : undefined)
      .then((data) => {
        if (!active) return;
        setProposals(data.items);
      })
      .catch((err: Error) => {
        if (!active) return;
        setError(err.message);
      })
      .finally(() => {
        if (!active) return;
        setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [tab]);

  const tabs: { key: TabKey; label: string }[] = [
    { key: "abiertas", label: "Abiertas" },
    { key: "aprobadas", label: "Aprobadas" },
    { key: "rechazadas", label: "Rechazadas" },
    { key: "todas", label: "Todas" },
  ];

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-10">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-1">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">Sistema</p>
          <h1 className="text-3xl font-bold text-slate-900">Gobernanza</h1>
          <p className="max-w-2xl text-sm text-slate-600">
            Propuestas de cambio para módulos, generadores de ejercicios y configuraciones de la
            plataforma. Solo directivos, docentes y administradores pueden participar.
          </p>
        </div>
        {canPropose && (
          <Link
            to="/gobernanza/propuestas/nueva"
            className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            + Nueva propuesta
          </Link>
        )}
      </header>

      {/* Tabs */}
      <div className="flex gap-1 rounded-xl border border-slate-200 bg-slate-50 p-1">
        {tabs.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`flex-1 rounded-lg px-3 py-1.5 text-sm font-semibold transition-colors ${
              tab === key
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Proposal list */}
      <section className="flex flex-col gap-3">
        {loading && (
          <p className="text-sm text-slate-500 py-6 text-center">Cargando propuestas...</p>
        )}
        {error && (
          <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </p>
        )}
        {!loading && !error && proposals.length === 0 && (
          <div className="rounded-xl border border-slate-200 bg-slate-50 py-12 text-center">
            <p className="text-sm text-slate-500">No hay propuestas en esta categoría.</p>
            {canPropose && (
              <Link
                to="/gobernanza/propuestas/nueva"
                className="mt-3 inline-block text-sm font-semibold text-blue-600 hover:underline"
              >
                Crear la primera propuesta
              </Link>
            )}
          </div>
        )}
        {!loading &&
          !error &&
          proposals.map((p) => <ProposalCard key={p.id} proposal={p} />)}
      </section>

      {/* Info box */}
      <section className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
        <h2 className="text-base font-semibold text-blue-900">¿Cómo funciona la gobernanza?</h2>
        <ul className="mt-2 space-y-1.5 text-sm text-blue-800">
          <li>
            <span className="font-medium">Propuestas de contenido</span> — requieren mayoría simple
            de votos positivos. Pueden modificar generadores, enunciados y configuraciones de módulos.
          </li>
          <li>
            <span className="font-medium">Propuestas de gobernanza</span> — se aplican a cambios de
            sistema y requieren una regla más estricta (mayoría, supermayoría o unanimidad).
          </li>
          <li>Solo directivos, docentes y administradores pueden crear propuestas y votar.</li>
          <li>
            Una propuesta aprobada aplica el cambio automáticamente al cerrarse.
          </li>
        </ul>
      </section>
    </main>
  );
}
