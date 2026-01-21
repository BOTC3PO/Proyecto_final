import type {
  ChemReactionParticipant,
  ChemReactionSpec,
} from "../types";

type ChemReactionVisualizerProps = {
  spec: ChemReactionSpec;
};

const formatCoefficient = (coefficient?: number) => {
  if (!coefficient || coefficient === 1) return "";
  return String(coefficient);
};

const formatMoles = (moles?: number) => {
  if (moles === undefined) return null;
  return `${moles} mol`;
};

const MoleculeBadge = ({ participant }: { participant: ChemReactionParticipant }) => {
  const coefficient = formatCoefficient(participant.coefficient);
  const label = participant.label ?? participant.formula;
  return (
    <div className="flex flex-col items-start rounded-md border border-slate-200 bg-white px-3 py-2 text-xs">
      <div className="flex items-baseline gap-1 text-sm font-semibold text-slate-700">
        {coefficient ? <span className="text-slate-500">{coefficient}</span> : null}
        <span>{label}</span>
      </div>
      <div className="mt-1 flex flex-wrap gap-2 text-[11px] text-slate-500">
        {participant.state ? <span>({participant.state})</span> : null}
        {formatMoles(participant.moles) ? <span>{formatMoles(participant.moles)}</span> : null}
      </div>
      {participant.notes ? (
        <p className="mt-1 text-[11px] text-slate-400">{participant.notes}</p>
      ) : null}
    </div>
  );
};

const ReactionLine = ({
  reactants,
  products,
}: {
  reactants: ChemReactionParticipant[];
  products: ChemReactionParticipant[];
}) => (
  <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
    <div className="flex flex-wrap items-center gap-2">
      {reactants.map((participant, index) => (
        <span key={participant.id} className="flex items-center gap-2">
          <span className="font-semibold text-slate-700">
            {formatCoefficient(participant.coefficient)} {participant.formula}
          </span>
          {index < reactants.length - 1 ? (
            <span className="text-slate-400">+</span>
          ) : null}
        </span>
      ))}
    </div>
    <span className="text-slate-400">→</span>
    <div className="flex flex-wrap items-center gap-2">
      {products.map((participant, index) => (
        <span key={participant.id} className="flex items-center gap-2">
          <span className="font-semibold text-slate-700">
            {formatCoefficient(participant.coefficient)} {participant.formula}
          </span>
          {index < products.length - 1 ? (
            <span className="text-slate-400">+</span>
          ) : null}
        </span>
      ))}
    </div>
  </div>
);

const ParticipantsColumn = ({
  title,
  participants,
}: {
  title: string;
  participants: ChemReactionParticipant[];
}) => (
  <div className="space-y-2">
    <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
      {title}
    </h4>
    <div className="space-y-2">
      {participants.map((participant) => (
        <MoleculeBadge key={participant.id} participant={participant} />
      ))}
    </div>
  </div>
);

export default function ChemReactionVisualizer({
  spec,
}: ChemReactionVisualizerProps) {
  return (
    <div className="space-y-4">
      <header className="space-y-1">
        <h3 className="text-base font-semibold text-slate-800">
          {spec.title ?? "Reacción química"}
        </h3>
        {spec.description ? (
          <p className="text-xs text-slate-500">{spec.description}</p>
        ) : null}
      </header>

      <section className="rounded-lg border border-slate-200 bg-slate-50 p-4">
        <ReactionLine reactants={spec.reactants} products={spec.products} />
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <ParticipantsColumn title="Reactivos" participants={spec.reactants} />
          <ParticipantsColumn title="Productos" participants={spec.products} />
        </div>
      </section>

      {spec.steps && spec.steps.length > 0 ? (
        <section className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-700">
            Representación paso a paso
          </h4>
          <div className="space-y-3">
            {spec.steps.map((step, index) => (
              <div
                key={step.id}
                className="rounded-lg border border-slate-200 bg-white p-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-800">
                    {step.title ?? `Paso ${index + 1}`}
                  </p>
                  <span className="text-xs text-slate-400">Paso {index + 1}</span>
                </div>
                {step.description ? (
                  <p className="mt-2 text-xs text-slate-500">{step.description}</p>
                ) : null}
                <div className="mt-3 rounded-md border border-dashed border-slate-200 bg-slate-50 p-3">
                  <ReactionLine reactants={step.reactants} products={step.products} />
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <div className="rounded-lg border border-dashed border-slate-200 p-4 text-xs text-slate-500">
          Añade pasos para visualizar cómo se reordenan las moléculas durante la reacción.
        </div>
      )}
    </div>
  );
}
