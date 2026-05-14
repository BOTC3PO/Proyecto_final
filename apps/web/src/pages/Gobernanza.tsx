import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/use-auth";
import {
  fetchProposals,
  fetchApoyos,
  type Proposal,
  type ApoyosInfo,
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
  CLOSED: "bg-[var(--c-bg)] text-[var(--c-muted)]",
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

function ProposalCard({ proposal, apoyos }: { proposal: Proposal; apoyos?: ApoyosInfo }) {
  const typeLabel = PROPOSAL_TYPE_LABELS[proposal.proposalType] ?? proposal.proposalType;
  const statusLabel = STATUS_LABELS[proposal.status] ?? proposal.status;
  const levelLabel = LEVEL_LABELS[proposal.level] ?? proposal.level;

  return (
    <Link
      to={`/gobernanza/propuestas/${proposal.id}`}
      className="block rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] px-5 py-4 hover:border-[var(--c-primary)] transition-all"
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-[var(--c-text)] truncate">{typeLabel}</p>
          <p className="mt-0.5 text-xs text-[var(--c-muted)]">
            {proposal.targetType}
            {proposal.targetId ? ` / ${proposal.targetId}` : ""}
          </p>
          {proposal.rationale && (
            <p className="mt-1 text-xs text-[var(--c-muted)] line-clamp-2">{proposal.rationale}</p>
          )}
        </div>
        <div className="flex flex-col items-end gap-1.5 shrink-0">
          <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${STATUS_COLORS[proposal.status] ?? "bg-[var(--c-bg)] text-[var(--c-muted)]"}`}>
            {statusLabel}
          </span>
          <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${LEVEL_COLORS[proposal.level] ?? "bg-[var(--c-bg)] text-[var(--c-muted)]"}`}>
            {levelLabel}
          </span>
        </div>
      </div>

      {apoyos && proposal.status === "OPEN" && (
        <div className="mt-3 space-y-1">
          <div className="flex items-center justify-between text-xs text-[var(--c-muted)]">
            <span>{apoyos.apoyos} apoyan · {apoyos.noApoyos} no apoyan</span>
            <span>{apoyos.apoyos}/{apoyos.umbral} para elevar</span>
          </div>
          <div className="flex h-1.5 w-full overflow-hidden rounded-full bg-[var(--c-border)]">
            <div
              className={`h-1.5 rounded-full transition-all ${
                apoyos.alcanzado ? "bg-emerald-500" : "bg-blue-400"
              }`}
              style={{
                width: `${Math.min(100,
                  Math.round((apoyos.apoyos / apoyos.umbral) * 100)
                )}%`
              }}
            />
          </div>
        </div>
      )}

      <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-[var(--c-muted)]">
        <span>{formatDate(proposal.createdAt)}</span>
        {proposal.voteSummary && (
          <span className="flex gap-2">
            <span className="text-emerald-600 font-medium">+{proposal.voteSummary.approve}</span>
            <span className="text-red-500 font-medium">-{proposal.voteSummary.reject}</span>
            {proposal.voteSummary.abstain > 0 && (
              <span className="text-[var(--c-muted)]">{proposal.voteSummary.abstain} abs.</span>
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

  const [apoyosPorId, setApoyosPorId] =
    useState<Record<string, ApoyosInfo>>({});

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

  useEffect(() => {
    const abiertas = proposals.filter((p) => p.status === "OPEN");
    if (!abiertas.length) return;
    Promise.allSettled(
      abiertas.map((p) =>
        fetchApoyos(p.id).then((info) => ({ id: p.id, info }))
      )
    ).then((results) => {
      const map: Record<string, ApoyosInfo> = {};
      for (const r of results) {
        if (r.status === "fulfilled") map[r.value.id] = r.value.info;
      }
      setApoyosPorId((prev) => ({ ...prev, ...map }));
    });
  }, [proposals]);

  const tabs: { key: TabKey; label: string }[] = [
    { key: "abiertas", label: "Abiertas" },
    { key: "aprobadas", label: "Aprobadas" },
    { key: "rechazadas", label: "Rechazadas" },
    { key: "todas", label: "Todas" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-5">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-xl font-semibold text-[var(--c-text)]">Gobernanza</h1>
            <p className="text-sm text-[var(--c-muted)] mt-0.5">
              Propuestas de cambio para módulos y configuraciones de la plataforma.
            </p>
          </div>
          {canPropose && (
            <Link
              to="/gobernanza/propuestas/nueva"
              className="rounded-xl bg-[var(--c-primary)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              + Nueva propuesta
            </Link>
          )}
        </div>

        <div className="flex gap-1 border-b border-[var(--c-border)]">
          {tabs.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                tab === key
                  ? "border-[var(--c-primary)] text-[var(--c-primary)]"
                  : "border-transparent text-[var(--c-muted)] hover:text-[var(--c-text)]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <section className="flex flex-col gap-3">
          {loading && (
            <div className="space-y-2">
              {[1,2,3].map(i => <div key={i} className="h-20 rounded-xl animate-pulse bg-[var(--c-border)]" />)}
            </div>
          )}
          {error && (
            <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </p>
          )}
          {!loading && !error && proposals.length === 0 && (
            <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] py-12 text-center">
              <p className="text-sm text-[var(--c-muted)]">No hay propuestas en esta categoría.</p>
              {canPropose && (
                <Link
                  to="/gobernanza/propuestas/nueva"
                  className="mt-3 inline-block text-sm font-semibold text-[var(--c-primary)] hover:underline"
                >
                  Crear la primera propuesta
                </Link>
              )}
            </div>
          )}
          {!loading &&
            !error &&
            proposals.map((p) => <ProposalCard key={p.id} proposal={p} apoyos={apoyosPorId[p.id]} />)}
        </section>

        <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-5">
          <h2 className="text-sm font-semibold text-[var(--c-text)]">¿Cómo funciona la gobernanza?</h2>
          <ul className="mt-2 space-y-1.5 text-sm text-[var(--c-muted)]">
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
              Las propuestas aprobadas son revisadas por el administrador, quien puede aplicar, modificar o rechazar el cambio.
            </li>
          </ul>
        </section>
      </div>
  );
}
