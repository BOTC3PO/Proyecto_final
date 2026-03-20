import type {
  ChemAtom3D,
  ChemMolecularModel,
  ChemStructureSpec,
  ChemSubshellSpec,
} from "../types";

type ChemStructureVisualizerProps = {
  spec: ChemStructureSpec;
};

const formatCoord = (value: number) => value.toFixed(2);

const SectionTitle = ({ title }: { title: string }) => (
  <h4 className="text-sm font-semibold text-slate-800">{title}</h4>
);

const ShellRow = ({
  shell,
  electrons,
  label,
}: {
  shell: string;
  electrons: number;
  label?: string;
}) => (
  <div className="flex items-center justify-between text-xs text-slate-600">
    <span>{label ?? `Capa ${shell}`}</span>
    <span className="font-medium text-slate-700">{electrons} e⁻</span>
  </div>
);

const SubshellCard = ({ subshell }: { subshell: ChemSubshellSpec }) => (
  <div className="rounded-lg border border-slate-200 bg-white p-3">
    <div className="flex items-center justify-between">
      <span className="text-xs font-semibold text-slate-700">
        n={subshell.energyLevel} · {subshell.type}
      </span>
      <span className="text-xs text-slate-500">
        {subshell.electrons}/{subshell.maxElectrons ?? "?"} e⁻
      </span>
    </div>
    {subshell.notes ? (
      <p className="mt-2 text-xs text-slate-500">{subshell.notes}</p>
    ) : null}
    {subshell.occupancy && subshell.occupancy.length > 0 ? (
      <div className="mt-2 flex flex-wrap gap-2">
        {subshell.occupancy.map((orbital) => (
          <span
            key={`${subshell.id}-${orbital.orbital}`}
            className="rounded-full bg-slate-100 px-2 py-1 text-[11px] text-slate-600"
          >
            {orbital.orbital}: {orbital.electrons} e⁻
          </span>
        ))}
      </div>
    ) : null}
  </div>
);

const AtomRow = ({ atom }: { atom: ChemAtom3D }) => (
  <div className="flex items-start justify-between text-xs text-slate-600">
    <div>
      <span className="font-semibold text-slate-700">{atom.element}</span>
      {atom.charge ? (
        <span className="ml-1 text-[11px] text-slate-500">
          carga {atom.charge > 0 ? `+${atom.charge}` : atom.charge}
        </span>
      ) : null}
    </div>
    <span className="font-mono text-[11px] text-slate-500">
      ({formatCoord(atom.position.x)}, {formatCoord(atom.position.y)}, {formatCoord(atom.position.z)})
    </span>
  </div>
);

const MolecularModelCard = ({ model }: { model: ChemMolecularModel }) => (
  <div className="rounded-lg border border-slate-200 bg-white p-4">
    <div className="flex flex-wrap items-center justify-between gap-2">
      <div>
        <p className="text-sm font-semibold text-slate-800">{model.name}</p>
        <p className="text-xs text-slate-500">
          {model.formula ? `Fórmula: ${model.formula}` : "Modelo molecular"}
        </p>
      </div>
      {model.geometry ? (
        <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600">
          {model.geometry.replace("-", " ")}
        </span>
      ) : null}
    </div>
    {model.notes ? (
      <p className="mt-2 text-xs text-slate-500">{model.notes}</p>
    ) : null}
    <div className="mt-3 space-y-2">
      {model.atoms.map((atom) => (
        <AtomRow key={atom.id} atom={atom} />
      ))}
    </div>
    {model.bonds && model.bonds.length > 0 ? (
      <div className="mt-3 text-xs text-slate-500">
        <p className="font-semibold text-slate-600">Enlaces</p>
        <ul className="mt-1 space-y-1">
          {model.bonds.map((bond) => (
            <li key={bond.id}>
              {bond.fromId} → {bond.toId} ({bond.order ?? 1})
            </li>
          ))}
        </ul>
      </div>
    ) : null}
  </div>
);

export default function ChemStructureVisualizer({
  spec,
}: ChemStructureVisualizerProps) {
  const hasContent =
    spec.electronDistribution || spec.orbitals || spec.molecularModels?.length;

  return (
    <div className="space-y-4">
      <header>
        <h3 className="text-base font-semibold text-slate-800">
          {spec.title ?? "Estructura química"}
        </h3>
        {spec.description ? (
          <p className="text-xs text-slate-500">{spec.description}</p>
        ) : null}
      </header>

      {spec.electronDistribution ? (
        <section className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <SectionTitle title="Distribución electrónica" />
          <p className="mt-1 text-xs text-slate-500">
            {spec.electronDistribution.atom} · modelo{" "}
            {spec.electronDistribution.model.replace("-", " ")}
          </p>
          {spec.electronDistribution.notation ? (
            <p className="mt-2 text-xs text-slate-600">
              Notación: {spec.electronDistribution.notation}
            </p>
          ) : null}
          <div className="mt-3 space-y-2">
            {spec.electronDistribution.shells.map((shell) => (
              <ShellRow
                key={shell.shell}
                shell={shell.shell}
                electrons={shell.electrons}
                label={shell.label}
              />
            ))}
          </div>
          {spec.electronDistribution.notes ? (
            <p className="mt-3 text-xs text-slate-500">
              {spec.electronDistribution.notes}
            </p>
          ) : null}
        </section>
      ) : null}

      {spec.orbitals ? (
        <section className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <SectionTitle title="Orbitales y subniveles" />
          <p className="mt-1 text-xs text-slate-500">
            {spec.orbitals.atom}
            {spec.orbitals.notation ? ` · ${spec.orbitals.notation}` : ""}
          </p>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {spec.orbitals.subshells.map((subshell) => (
              <SubshellCard key={subshell.id} subshell={subshell} />
            ))}
          </div>
        </section>
      ) : null}

      {spec.molecularModels && spec.molecularModels.length > 0 ? (
        <section className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <SectionTitle title="Modelos moleculares 3D" />
          <div className="mt-3 grid gap-4 lg:grid-cols-2">
            {spec.molecularModels.map((model) => (
              <MolecularModelCard key={model.id} model={model} />
            ))}
          </div>
        </section>
      ) : null}

      {!hasContent ? (
        <div className="rounded-lg border border-dashed border-slate-200 p-4 text-xs text-slate-500">
          No hay datos químicos disponibles para este visualizador.
        </div>
      ) : null}
    </div>
  );
}
