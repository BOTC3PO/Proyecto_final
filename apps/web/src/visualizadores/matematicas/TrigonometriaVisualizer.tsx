import type { TrigonometriaSpec } from "../types";

type TrigonometriaVisualizerProps = {
  spec: TrigonometriaSpec;
};

export default function TrigonometriaVisualizer({ spec }: TrigonometriaVisualizerProps) {
  return (
    <section className="space-y-4 rounded-lg border border-slate-200 bg-white p-5">
      <header className="space-y-1">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Trigonometría</p>
        <h3 className="text-lg font-semibold text-slate-900">{spec.title ?? "Relaciones trigonométricas"}</h3>
        {spec.description && <p className="text-sm text-slate-600">{spec.description}</p>}
      </header>
      <div className="space-y-3">
        {spec.identities.map((identity) => (
          <div key={identity.id} className="rounded-md border border-slate-100 bg-slate-50 px-4 py-3">
            <p className="text-sm font-semibold text-slate-800">{identity.expression}</p>
            {identity.notes && <p className="text-xs text-slate-500">{identity.notes}</p>}
          </div>
        ))}
      </div>
      {spec.angles && spec.angles.length > 0 && (
        <div className="rounded-md border border-dashed border-slate-200 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Ángulos clave</p>
          <ul className="mt-2 grid gap-2 text-sm text-slate-700 md:grid-cols-2">
            {spec.angles.map((angle) => (
              <li key={angle.id} className="rounded-md bg-white px-3 py-2 shadow-sm">
                <span className="font-semibold text-slate-900">{angle.label}</span>: {angle.value}
                {angle.ratio && <span className="text-slate-500"> · {angle.ratio}</span>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
