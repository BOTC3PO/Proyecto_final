import { useMemo, useState } from "react";
import type { ChemVSEPRSpec } from "../types";

type ChemVSEPRVisualizerProps = {
  spec: ChemVSEPRSpec;
};

type Bounds = {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
};

const fallbackBounds: Bounds = { minX: -1, maxX: 1, minY: -1, maxY: 1 };

const getBounds = (spec: ChemVSEPRSpec): Bounds => {
  const allAtoms = spec.molecules.flatMap((molecule) => molecule.atoms);
  if (allAtoms.length === 0) {
    return fallbackBounds;
  }
  return allAtoms.reduce<Bounds>(
    (acc, atom) => ({
      minX: Math.min(acc.minX, atom.position.x),
      maxX: Math.max(acc.maxX, atom.position.x),
      minY: Math.min(acc.minY, atom.position.y),
      maxY: Math.max(acc.maxY, atom.position.y),
    }),
    {
      minX: allAtoms[0].position.x,
      maxX: allAtoms[0].position.x,
      minY: allAtoms[0].position.y,
      maxY: allAtoms[0].position.y,
    }
  );
};

const formatAngle = (value: number) => `${value.toFixed(1)}°`;

export default function ChemVSEPRVisualizer({ spec }: ChemVSEPRVisualizerProps) {
  const defaultMoleculeId = spec.defaultMoleculeId ?? spec.molecules[0]?.id ?? "";
  const [selectedMoleculeId, setSelectedMoleculeId] =
    useState<string>(defaultMoleculeId);
  const [measurements, setMeasurements] = useState<Record<string, string>>({});

  const selectedMolecule =
    spec.molecules.find((molecule) => molecule.id === selectedMoleculeId) ??
    spec.molecules[0];

  const bounds = useMemo(() => getBounds(spec), [spec]);
  const width = 320;
  const height = 240;
  const padding = 32;
  const rangeX = bounds.maxX - bounds.minX || 1;
  const rangeY = bounds.maxY - bounds.minY || 1;

  const mapX = (x: number) =>
    padding + ((x - bounds.minX) / rangeX) * (width - padding * 2);
  const mapY = (y: number) =>
    height - (padding + ((y - bounds.minY) / rangeY) * (height - padding * 2));

  const handleMeasurementChange = (id: string, value: string) => {
    setMeasurements((prev) => ({ ...prev, [id]: value }));
  };

  if (!spec.geometries.length && !spec.molecules.length) {
    return (
      <div className="rounded-lg border border-dashed border-slate-200 p-4 text-xs text-slate-500">
        No hay datos disponibles para el visualizador VSEPR.
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <header>
        <h3 className="text-base font-semibold text-slate-800">
          {spec.title ?? "Geometría molecular (VSEPR)"}
        </h3>
        {spec.description ? (
          <p className="text-xs text-slate-500">{spec.description}</p>
        ) : null}
      </header>

      {spec.geometries.length ? (
        <section className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {spec.geometries.map((geometry) => (
            <div
              key={geometry.id}
              className="rounded-lg border border-slate-200 bg-white p-3"
            >
              <p className="text-sm font-semibold text-slate-700">
                {geometry.label}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Ángulos esperados:{" "}
                {geometry.expectedAngles.map(formatAngle).join(", ")}
              </p>
              {geometry.description ? (
                <p className="mt-2 text-xs text-slate-500">
                  {geometry.description}
                </p>
              ) : null}
            </div>
          ))}
        </section>
      ) : null}

      {selectedMolecule ? (
        <section className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  {selectedMolecule.name}
                </p>
                <p className="text-xs text-slate-500">
                  {selectedMolecule.formula
                    ? `Fórmula: ${selectedMolecule.formula}`
                    : "Modelo molecular"}
                </p>
              </div>
              <select
                className="rounded-md border border-slate-200 bg-white px-2 py-1 text-xs text-slate-600"
                value={selectedMolecule.id}
                onChange={(event) => setSelectedMoleculeId(event.target.value)}
              >
                {spec.molecules.map((molecule) => (
                  <option key={molecule.id} value={molecule.id}>
                    {molecule.name}
                  </option>
                ))}
              </select>
            </div>
            {selectedMolecule.notes ? (
              <p className="mt-2 text-xs text-slate-500">
                {selectedMolecule.notes}
              </p>
            ) : null}
            <div className="mt-4 flex justify-center">
              <svg
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
                className="rounded-md border border-slate-100 bg-slate-50"
              >
                {selectedMolecule.bonds.map((bond) => {
                  const from = selectedMolecule.atoms.find(
                    (atom) => atom.id === bond.fromId
                  );
                  const to = selectedMolecule.atoms.find(
                    (atom) => atom.id === bond.toId
                  );
                  if (!from || !to) return null;
                  return (
                    <line
                      key={bond.id}
                      x1={mapX(from.position.x)}
                      y1={mapY(from.position.y)}
                      x2={mapX(to.position.x)}
                      y2={mapY(to.position.y)}
                      stroke="#94a3b8"
                      strokeWidth={bond.order === 2 ? 3 : 2}
                    />
                  );
                })}
                {selectedMolecule.atoms.map((atom) => (
                  <g key={atom.id}>
                    <circle
                      cx={mapX(atom.position.x)}
                      cy={mapY(atom.position.y)}
                      r={atom.role === "central" ? 12 : 9}
                      fill={atom.color ?? (atom.role === "central" ? "#38bdf8" : "#f8fafc")}
                      stroke="#1e293b"
                      strokeWidth={1}
                    />
                    <text
                      x={mapX(atom.position.x)}
                      y={mapY(atom.position.y) + 4}
                      textAnchor="middle"
                      fontSize="10"
                      fill="#0f172a"
                      fontWeight={600}
                    >
                      {atom.element}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h4 className="text-sm font-semibold text-slate-700">
              Medición de ángulos
            </h4>
            <p className="mt-1 text-xs text-slate-500">
              Ingresa el ángulo medido y compáralo con el valor esperado.
            </p>
            <div className="mt-3 space-y-3">
              {selectedMolecule.angles.map((angle) => {
                const rawValue = measurements[angle.id];
                const parsed = rawValue ? Number.parseFloat(rawValue) : NaN;
                const delta =
                  Number.isNaN(parsed) ? null : Math.abs(parsed - angle.expectedAngle);
                return (
                  <div
                    key={angle.id}
                    className="rounded-md border border-slate-100 bg-slate-50 p-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <p className="text-xs font-semibold text-slate-700">
                          {angle.label}
                        </p>
                        <p className="text-xs text-slate-500">
                          Esperado: {formatAngle(angle.expectedAngle)}
                        </p>
                      </div>
                      <input
                        type="number"
                        value={rawValue ?? ""}
                        onChange={(event) =>
                          handleMeasurementChange(angle.id, event.target.value)
                        }
                        placeholder="°"
                        className="w-20 rounded-md border border-slate-200 bg-white px-2 py-1 text-xs text-slate-700"
                      />
                    </div>
                    {angle.description ? (
                      <p className="mt-2 text-xs text-slate-500">
                        {angle.description}
                      </p>
                    ) : null}
                    {delta !== null ? (
                      <p className="mt-2 text-xs text-slate-600">
                        Diferencia: {formatAngle(delta)}
                      </p>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
