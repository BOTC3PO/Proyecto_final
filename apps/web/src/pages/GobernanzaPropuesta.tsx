import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/use-auth";
import {
  fetchProposal,
  castVote,
  closeProposal,
  type Proposal,
  type VoteValue,
  PROPOSAL_TYPE_LABELS,
  STATUS_LABELS,
  LEVEL_LABELS,
} from "../services/governance";

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
    <pre className="overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-700 whitespace-pre-wrap">
      {JSON.stringify(payload, null, 2)}
    </pre>
  );
}

function VoteBar({ summary }: { summary: { approve: number; reject: number; abstain: number } }) {
  const total = summary.approve + summary.reject + summary.abstain;
  if (total === 0) return <p className="text-sm text-slate-500">Aún no hay votos.</p>;

  const approveW = Math.round((summary.approve / total) * 100);
  const rejectW = Math.round((summary.reject / total) * 100);

  return (
    <div className="space-y-2">
      <div className="flex h-3 overflow-hidden rounded-full bg-slate-200">
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
        <span className="text-slate-500">{summary.abstain} abstenciones</span>
        <span className="text-slate-400 ml-auto">{total} votos totales</span>
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

  const [voting, setVoting] = useState(false);
  const [voteError, setVoteError] = useState<string | null>(null);
  const [voteSuccess, setVoteSuccess] = useState<string | null>(null);
  const [myVote, setMyVote] = useState<VoteValue | null>(null);

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

  const handleVote = async (vote: VoteValue) => {
    if (!id || !user?.id) return;
    setVoting(true);
    setVoteError(null);
    setVoteSuccess(null);
    try {
      await castVote(id, user.id, vote);
      setMyVote(vote);
      const voteLabels: Record<VoteValue, string> = {
        APPROVE: "a favor",
        REJECT: "en contra",
        ABSTAIN: "abstención",
      };
      setVoteSuccess(`Voto registrado: ${voteLabels[vote]}`);
      // Refresh proposal to get updated voteSummary if available
      const updated = await fetchProposal(id);
      setProposal(updated);
    } catch (err: unknown) {
      setVoteError(err instanceof Error ? err.message : "Error al votar");
    } finally {
      setVoting(false);
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
      <main className="mx-auto max-w-3xl px-6 py-16 text-center">
        <p className="text-sm text-slate-500">Cargando propuesta...</p>
      </main>
    );
  }

  if (error || !proposal) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16 text-center">
        <p className="text-sm text-red-500">{error ?? "Propuesta no encontrada"}</p>
        <Link to="/gobernanza" className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:underline">
          Volver a gobernanza
        </Link>
      </main>
    );
  }

  const typeLabel = PROPOSAL_TYPE_LABELS[proposal.proposalType] ?? proposal.proposalType;
  const statusLabel = STATUS_LABELS[proposal.status] ?? proposal.status;
  const levelLabel = LEVEL_LABELS[proposal.level] ?? proposal.level;
  const isOpen = proposal.status === "OPEN";

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-500">
        <Link to="/gobernanza" className="hover:text-blue-600 hover:underline">
          Gobernanza
        </Link>
        <span>/</span>
        <span className="text-slate-700 font-medium truncate max-w-xs">{typeLabel}</span>
      </nav>

      {/* Header */}
      <header className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${STATUS_COLORS[proposal.status] ?? "bg-slate-100 text-slate-600"}`}>
            {statusLabel}
          </span>
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${LEVEL_COLORS[proposal.level] ?? "bg-slate-100 text-slate-600"}`}>
            Nivel: {levelLabel}
          </span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900">{typeLabel}</h1>
        <p className="text-sm text-slate-500">
          Objetivo: <span className="font-medium text-slate-700">{proposal.targetType}</span>
          {proposal.targetId && (
            <>
              {" / "}
              <span className="font-mono text-slate-700">{proposal.targetId}</span>
            </>
          )}
        </p>
        <p className="text-xs text-slate-400">
          Creada el {formatDate(proposal.createdAt)}
          {proposal.closedAt && ` · Cerrada el ${formatDate(proposal.closedAt)}`}
        </p>
      </header>

      {/* Rationale */}
      {proposal.rationale && (
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-slate-700 mb-2">Justificación</h2>
          <p className="text-sm text-slate-600 whitespace-pre-wrap">{proposal.rationale}</p>
        </section>
      )}

      {/* Payload */}
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-sm font-semibold text-slate-700 mb-3">Detalles del cambio propuesto</h2>
        <PayloadViewer payload={proposal.payload} />
      </section>

      {/* Vote summary */}
      <section className="rounded-xl border border-slate-200 bg-white p-5 space-y-3">
        <h2 className="text-sm font-semibold text-slate-700">Votos</h2>
        {proposal.voteSummary ? (
          <VoteBar summary={proposal.voteSummary} />
        ) : (
          <p className="text-sm text-slate-500">No hay conteo de votos disponible aún.</p>
        )}
        {proposal.closeRule && (
          <p className="text-xs text-slate-400">Regla aplicada: {proposal.closeRule}</p>
        )}
      </section>

      {/* Apply result */}
      {proposal.applyResult && (
        <section
          className={`rounded-xl border p-4 ${
            proposal.applyResult.applied
              ? "border-emerald-200 bg-emerald-50"
              : "border-slate-200 bg-slate-50"
          }`}
        >
          <p className="text-sm font-semibold text-slate-700">
            {proposal.applyResult.applied
              ? "El cambio fue aplicado correctamente."
              : `No se aplicó el cambio${proposal.applyResult.reason ? `: ${proposal.applyResult.reason}` : "."}`}
          </p>
        </section>
      )}

      {/* Voting actions */}
      {isOpen && isStaff && (
        <section className="rounded-xl border border-blue-200 bg-blue-50 p-5 space-y-4">
          <h2 className="text-sm font-semibold text-blue-900">Tu voto</h2>

          {voteSuccess && (
            <p className="rounded-lg bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              {voteSuccess}
            </p>
          )}
          {voteError && (
            <p className="rounded-lg bg-red-100 px-4 py-2 text-sm text-red-600">{voteError}</p>
          )}

          <div className="flex flex-wrap gap-3">
            <button
              disabled={voting || myVote === "APPROVE"}
              onClick={() => handleVote("APPROVE")}
              className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${
                myVote === "APPROVE"
                  ? "bg-emerald-600 text-white ring-2 ring-emerald-400"
                  : "border border-emerald-300 bg-white text-emerald-700 hover:bg-emerald-50"
              } disabled:opacity-60 disabled:cursor-not-allowed`}
            >
              A favor
            </button>
            <button
              disabled={voting || myVote === "REJECT"}
              onClick={() => handleVote("REJECT")}
              className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${
                myVote === "REJECT"
                  ? "bg-red-600 text-white ring-2 ring-red-400"
                  : "border border-red-300 bg-white text-red-700 hover:bg-red-50"
              } disabled:opacity-60 disabled:cursor-not-allowed`}
            >
              En contra
            </button>
            <button
              disabled={voting || myVote === "ABSTAIN"}
              onClick={() => handleVote("ABSTAIN")}
              className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${
                myVote === "ABSTAIN"
                  ? "bg-slate-600 text-white ring-2 ring-slate-400"
                  : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
              } disabled:opacity-60 disabled:cursor-not-allowed`}
            >
              Abstención
            </button>
          </div>

          {voting && <p className="text-xs text-blue-700">Registrando voto...</p>}
        </section>
      )}

      {/* Close proposal */}
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

      {/* Back */}
      <div>
        <button
          onClick={() => navigate(-1)}
          className="text-sm font-semibold text-slate-500 hover:text-slate-700 hover:underline"
        >
          ← Volver
        </button>
      </div>
    </main>
  );
}
