import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../auth/use-auth";
import { createProposal } from "../services/governance";

type ProposalType = "SET_GENERATOR_STATUS" | "UPDATE_GENERATOR" | "CREATE_GENERATOR";

interface FriendlyType {
  label: string;
  proposalType: ProposalType;
  description: string;
}

const FRIENDLY_TYPES: FriendlyType[] = [
  {
    label: "Reportar un error",
    proposalType: "SET_GENERATOR_STATUS",
    description: "Algo está mal en un ejercicio o en la teoría de un módulo.",
  },
  {
    label: "Proponer un cambio",
    proposalType: "UPDATE_GENERATOR",
    description: "Querés modificar un enunciado, los límites de dificultad o la teoría de un módulo.",
  },
  {
    label: "Proponer algo nuevo",
    proposalType: "CREATE_GENERATOR",
    description: "Querés agregar un ejercicio o contenido que no existe.",
  },
  {
    label: "Desactivar un ejercicio o módulo",
    proposalType: "SET_GENERATOR_STATUS",
    description: "Creés que algo debería desactivarse temporalmente.",
  },
];

export default function GobernanzaNuevaPropuesta() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [proposal, setProposal] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const isStaff =
    user?.role === "ADMIN" || user?.role === "DIRECTIVO" || user?.role === "TEACHER";

  if (!isStaff) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-16 text-center">
        <p className="text-sm text-red-500">No tenés permiso para crear propuestas de gobernanza.</p>
        <Link to="/gobernanza" className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:underline">
          Volver a gobernanza
        </Link>
      </main>
    );
  }

  const selectedType = selectedIndex !== null ? FRIENDLY_TYPES[selectedIndex] : null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedType === null || !user?.id) return;
    setSubmitting(true);
    setSubmitError(null);

    const targetId = subject.trim() || "unknown";

    try {
      const created = await createProposal({
        targetType: "MODULE_GENERATOR",
        targetId,
        proposalType: selectedType.proposalType,
        payload: {
          subject: subject.trim(),
          description: description.trim(),
          proposal: proposal.trim(),
          userFriendlyType: selectedType.label,
        },
        createdBy: user.id,
      });
      navigate(`/gobernanza/propuestas/${created.id}`);
    } catch (err: unknown) {
      setSubmitError(err instanceof Error ? err.message : "Error al crear la propuesta");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-500">
        <Link to="/gobernanza" className="hover:text-blue-600 hover:underline">
          Gobernanza
        </Link>
        <span>/</span>
        <span className="text-slate-700 font-medium">Nueva propuesta</span>
      </nav>

      <header className="space-y-1">
        <h1 className="text-2xl font-bold text-slate-900">Nueva propuesta</h1>
        <p className="text-sm text-slate-600">
          La propuesta quedará abierta para que directivos, docentes y administradores puedan votar.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Type selector */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-slate-700 mb-3">¿Qué querés hacer? *</h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {FRIENDLY_TYPES.map(({ label, description }, index) => (
              <label
                key={index}
                className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3 transition-all ${
                  selectedIndex === index
                    ? "border-blue-400 bg-blue-50 ring-1 ring-blue-300"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <input
                  type="radio"
                  name="proposalType"
                  checked={selectedIndex === index}
                  onChange={() => setSelectedIndex(index)}
                  className="mt-0.5"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-800">{label}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{description}</p>
                </div>
              </label>
            ))}
          </div>
        </section>

        {/* Common form fields */}
        {selectedIndex !== null && (
          <section className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col gap-5">
            {/* Subject */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                ¿A qué materia o módulo se refiere?
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Ej: Física — Cinemática, o el módulo de Contabilidad básica"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Explicá con tus palabras qué querés cambiar o qué encontraste *
              </label>
              <textarea
                rows={6}
                required
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder={
                  "Ej: El ejercicio de genética de Mendel no menciona la proporción 3:1 en el\n" +
                  "caso del cruce Aa × Aa, lo cual es incorrecto según el programa de 4to año..."
                }
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* Concrete proposal */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Si tenés una versión mejorada o una propuesta específica, escribila acá
              </label>
              <textarea
                rows={4}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder={
                  "Ej: El enunciado podría decir: 'En un cruce monohíbrido Aa × Aa,\n" +
                  "¿cuál es la proporción fenotípica esperada en la descendencia?'"
                }
                value={proposal}
                onChange={(e) => setProposal(e.target.value)}
              />
            </div>
          </section>
        )}

        {submitError && (
          <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {submitError}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            disabled={selectedIndex === null || !description.trim() || submitting}
            className="rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? "Enviando..." : "Crear propuesta"}
          </button>
          <Link
            to="/gobernanza"
            className="text-sm font-semibold text-slate-500 hover:text-slate-700 hover:underline"
          >
            Cancelar
          </Link>
        </div>
      </form>
    </main>
  );
}
