import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/use-auth";
import {
  fetchProposal,
  closeProposal,
  fetchApoyos,
  apoyarPropuesta,
  type Proposal,
  type ApoyosInfo,
  PROPOSAL_TYPE_LABELS,
  STATUS_LABELS,
  LEVEL_LABELS,
} from "../services/governance";

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
    return new Date(iso).toLocaleString("es-AR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

function PayloadViewer({ payload }: { payload: Record<string, unknown> }) {
  return (
    <pre className="overflow-x-auto rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] p-4 text-xs text-[var(--c-text)] whitespace-pre-wrap">
      {JSON.stringify(payload, null, 2)}
    </pre>
  );
}

function VoteBar({ summary }: { summary: { approve: number; reject: number; abstain: number } }) {
  const total = summary.approve + summary.reject + summary.abstain;
  if (total === 0) return <p className="text-sm text-[var(--c-muted)]">Aún no hay votos.</p>;

  const approveW = Math.round((summary.approve / total) * 100);
  const rejectW = Math.round((summary.reject / total) * 100);

  return (
    <div className="space-y-2">
      <div className="flex h-3 overflow-hidden rounded-full bg-[var(--c-border)]">
        {approveW > 0 && (
          <div
            className="bg-emerald-500 transition-all"
            style={{ width: `${approveW}%` }}
          />
        )}
        {rejectW > 0 && (
          <div
            className="bg-red-400 transition-all"
            style={{ width: `${rejectW}%` }}
          />
        )}
      </div>
      <div className="flex gap-4 text-xs">
        <span className="font-semibold text-emerald-600">{summary.approve} a favor</span>
        <span className="font-semibold text-red-500">{summary.reject} en contra</span>
        <span className="text-[var(--c-muted)]">{summary.abstain} abstenciones</span>
        <span className="text-[var(--c-muted)] ml-auto">{total} votos totales</span>
      </div>
    </div>
  );
}

export default function GobernanzaPropuesta() {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [proposal, setProposal] = useState<Proposal | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [apoyos, setApoyos] = useState<ApoyosInfo | null>(null);
  const [votando, setVotando] = useState(false);

  const [closing, setClosing] = useState(false);
  const [closeError, setCloseError] = useState<string | null>(null);

  const isStaff =
    user?.role === "ADMIN" || user?.role === "DIRECTIVO" || user?.role === "TEACHER";

  useEffect(() => {
    if (!id) return;
    let active = true;
    setLoading(true);
    setError(null);
    fetchProposal(id)
      .then((data) => {
        if (!active) return;
        setProposal(data);
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
  }, [id]);

  useEffect(() => {
    if (!proposal || proposal.status !== "OPEN") return;
    fetchApoyos(proposal.id).then(setApoyos).catch(() => {});
  }, [proposal?.id]);

  const handleVoto = async (voto: "APPROVE" | "REJECT") => {
    if (!user?.id || !proposal) return;
    setVotando(true);
    try {
      await apoyarPropuesta(proposal.id, user.id, voto);
      const updated = await fetchApoyos(proposal.id);
      setApoyos(updated);
    } finally {
      setVotando(false);
    }
  };

  const handleClose = async () => {
    if (!id || !user?.id) return;
    setClosing(true);
    setCloseError(null);
    try {
      await closeProposal(id, user.id);
      const updated = await fetchProposal(id);
      setProposal(updated);
    } catch (err: unknown) {
      setCloseError(err instanceof Error ? err.message : "Error al cerrar la propuesta");
    } finally {
      setClosing(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--c-bg)]">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <p className="text-sm text-[var(--c-muted)]">Cargando propuesta...</p>
        </div>
      </div>
    );
  }

  if (error || !proposal) {
    return (
      <div className="min-h-screen bg-[var(--c-bg)]">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <p className="text-sm text-[var(--c-danger)]">{error ?? "Propuesta no encontrada"}</p>
          <Link to="/gobernanza" className="mt-4 inline-block text-sm font-semibold text-[var(--c-primary)] hover:underline">
            Volver a gobernanza
          </Link>
        </div>
      </div>
    );
  }

  const typeLabel = PROPOSAL_TYPE_LABELS[proposal.proposalType] ?? proposal.proposalType;
  const statusLabel = STATUS_LABELS[proposal.status] ?? proposal.status;
  const levelLabel = LEVEL_LABELS[proposal.level] ?? proposal.level;
  const isOpen = proposal.status === "OPEN";

  return (
    <div className="min-h-screen bg-[var(--c-bg)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-5">
        <nav className="flex items-center gap-2 text-sm text-[var(--c-muted)]">
          <Link to="/gobernanza" className="hover:text-[var(--c-primary)] hover:underline">
            Gobernanza
          </Link>
          <span>/</span>
          <span className="text-[var(--c-text)] font-medium truncate max-w-xs">{typeLabel}</span>
        </nav>

        <header className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${STATUS_COLORS[proposal.status] ?? "bg-[var(--c-bg)] text-[var(--c-muted)]"}`}>
              {statusLabel}
            </span>
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${LEVEL_COLORS[proposal.level] ?? "bg-[var(--c-bg)] text-[var(--c-muted)]"}`}>
              Nivel: {levelLabel}
            </span>
          </div>
          <h1 className="text-2xl font-bold text-[var(--c-text)]">{typeLabel}</h1>
          <p className="text-sm text-[var(--c-muted)]">
            Objetivo: <span className="font-medium text-[var(--c-text)]">{proposal.targetType}</span>
            {proposal.targetId && (
              <>
                {" / "}
                <span className="font-mono text-[var(--c-text)]">{proposal.targetId}</span>
              </>
            )}
          </p>
          <p className="text-xs text-[var(--c-muted)]">
            Creada el {formatDate(proposal.createdAt)}
            {proposal.closedAt && ` · Cerrada el ${formatDate(proposal.closedAt)}`}
          </p>
        </header>

        {proposal.rationale && (
          <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-5">
            <h2 className="text-sm font-semibold text-[var(--c-text)] mb-2">Justificación</h2>
            <p className="text-sm text-[var(--c-muted)] whitespace-pre-wrap">{proposal.rationale}</p>
          </section>
        )}

        <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-5">
          <h2 className="text-sm font-semibold text-[var(--c-text)] mb-3">Detalles del cambio propuesto</h2>
          <PayloadViewer payload={proposal.payload} />
        </section>

        <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-5 space-y-3">
          <h2 className="text-sm font-semibold text-[var(--c-text)]">Votos</h2>
          {proposal.voteSummary ? (
            <VoteBar summary={proposal.voteSummary} />
          ) : (
            <p className="text-sm text-[var(--c-muted)]">No hay conteo de votos disponible aún.</p>
          )}
          {proposal.closeRule && (
            <p className="text-xs text-[var(--c-muted)]">Regla aplicada: {proposal.closeRule}</p>
          )}
        </section>

        {proposal.applyResult && (
          <section
            className={`rounded-xl border p-4 ${
              proposal.applyResult.applied
                ? "border-emerald-200 bg-emerald-50"
                : "border-[var(--c-border)] bg-[var(--c-bg)]"
            }`}
          >
            <p className="text-sm font-semibold text-[var(--c-muted)]">
              {proposal.applyResult.applied
                ? "El cambio fue aplicado correctamente."
                : `No se aplicó el cambio${proposal.applyResult.reason ? `: ${proposal.applyResult.reason}` : "."}`}
            </p>
          </section>
        )}

        {proposal.status === "OPEN" && user && (
          <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-6 shadow-sm space-y-4">
            <h2 className="text-lg font-semibold text-[var(--c-text)]">
              ¿Apoyás esta propuesta?
            </h2>

            {apoyos ? (
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--c-muted)]">
                      {apoyos.apoyos} de {apoyos.umbral} apoyos necesarios
                    </span>
                    {apoyos.alcanzado && (
                      <span className="text-xs font-semibold text-emerald-600">
                        ✓ Elevada al admin
                      </span>
                    )}
                  </div>
                  <div className="h-2 w-full rounded-full bg-[var(--c-border)]">
                    <div
                      className={`h-2 rounded-full transition-all ${
                        apoyos.alcanzado ? "bg-emerald-500" : "bg-blue-500"
                      }`}
                      style={{
                        width: `${Math.min(100,
                          Math.round((apoyos.apoyos / apoyos.umbral) * 100)
                        )}%`
                      }}
                    />
                  </div>
                  <div className="flex gap-4 text-xs text-[var(--c-muted)]">
                    <span className="text-emerald-600 font-medium">
                      👍 {apoyos.apoyos} apoyan
                    </span>
                    <span className="text-rose-500 font-medium">
                      👎 {apoyos.noApoyos} no apoyan
                    </span>
                  </div>
                  {apoyos.alcanzado && (
                    <p className="text-xs text-emerald-600">
                      Esta propuesta fue elevada al panel de administración.
                    </p>
                  )}
                </div>

                {!apoyos.miVoto ? (
                  <div className="flex gap-3">
                    <button
                      type="button"
                      disabled={votando}
                      onClick={() => handleVoto("APPROVE")}
                      className="flex-1 rounded-xl bg-[var(--c-primary)] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-colors"
                    >
                      👍 Apoyar
                    </button>
                    <button
                      type="button"
                      disabled={votando}
                      onClick={() => handleVoto("REJECT")}
                      className="flex-1 rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] px-4 py-2.5 text-sm font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)] disabled:opacity-50 transition-colors"
                    >
                      👎 No apoyar
                    </button>
                  </div>
                ) : (
                  <p className={`text-sm font-medium ${
                    apoyos.miVoto === "APPROVE"
                      ? "text-[var(--c-primary)]"
                      : "text-[var(--c-muted)]"
                  }`}>
                    {apoyos.miVoto === "APPROVE"
                      ? "✓ Apoyaste esta propuesta."
                      : "✓ Marcaste que no apoyás esta propuesta."}
                  </p>
                )}
              </div>
            ) : (
              <p className="text-sm text-[var(--c-muted)] animate-pulse">
                Cargando apoyos...
              </p>
            )}
          </section>
        )}

        {isOpen && isStaff && (
          <section className="rounded-xl border border-amber-200 bg-amber-50 p-5 space-y-3">
            <h2 className="text-sm font-semibold text-amber-900">Cerrar propuesta</h2>
            <p className="text-xs text-amber-700">
              Al cerrar, se contabilizan los votos y si la propuesta es aprobada se aplica el cambio
              automáticamente.
            </p>
            {closeError && (
              <p className="rounded-lg bg-red-100 px-4 py-2 text-sm text-red-600">{closeError}</p>
            )}
            <button
              disabled={closing}
              onClick={handleClose}
              className="rounded-xl bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {closing ? "Cerrando..." : "Cerrar y evaluar propuesta"}
            </button>
          </section>
        )}

        <div>
          <button
            onClick={() => navigate(-1)}
            className="text-sm font-semibold text-[var(--c-muted)] hover:text-[var(--c-text)] hover:underline"
          >
            ← Volver
          </button>
        </div>
      </div>
    </div>
  );
}
