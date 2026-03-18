import { Plus } from "lucide-react";
import type { VisualSpec, SocialChoroplethSpec, SocialPopulationPyramidSpec } from "./visualizadores/types";
import {
  TOOL_PARAM_SCHEMAS,
  ToolParamControl,
  getAtPath,
  setAtPath,
} from "../apps/web/src/components/modulos/TheorySlideEditor";

type Props = {
  spec: VisualSpec;
  /** Called with the raw (non-normalized) updated spec after each edit. */
  onChange: (updated: VisualSpec) => void;
};

/**
 * Renders parameter editing controls for any VisualSpec.
 *
 * This component ONLY applies path-based patches via setAtPath + onChange.
 * It never calls normalizeSpec — normalization is ToolPreview's responsibility.
 */
export default function ToolParamEditor({ spec, onChange }: Props) {
  const allParams = TOOL_PARAM_SCHEMAS[spec.kind] ?? [];
  const visibleParams = allParams.filter((param) => {
    if (!param.condition) return true;
    return getAtPath(spec, param.condition.path) === param.condition.value;
  });

  const handleParamChange = (path: string, value: number | boolean | string) => {
    const updated = setAtPath(spec, path, value) as VisualSpec;
    onChange(updated);
  };

  return (
    <div className="flex flex-col gap-3">
      {/* ── Generic parameter controls ── */}
      {visibleParams.length > 0 ? (
        <div className="flex flex-col gap-3">
          {visibleParams.map((param) => (
            <ToolParamControl
              key={param.id}
              param={param}
              value={getAtPath(spec, param.path)}
              onChange={(v) => handleParamChange(param.path, v)}
            />
          ))}
        </div>
      ) : (
        <p className="text-xs text-gray-400 italic">
          Esta herramienta no tiene parámetros configurables en el editor.
        </p>
      )}

      {/* ── Choropleth region array editor ── */}
      {spec.kind === "social-choropleth" && (
        <ChoroplethRegionsEditor spec={spec as SocialChoroplethSpec} onChange={onChange} />
      )}

      {/* ── Population pyramid age groups editor ── */}
      {spec.kind === "social-population-pyramid" && (
        <PopulationPyramidEditor spec={spec as SocialPopulationPyramidSpec} onChange={onChange} />
      )}
    </div>
  );
}

// ─── Choropleth regions table ─────────────────────────────────────────────────

function ChoroplethRegionsEditor({
  spec,
  onChange,
}: {
  spec: SocialChoroplethSpec;
  onChange: (updated: VisualSpec) => void;
}) {
  const regions = spec.regions ?? [];

  const updateRegions = (next: typeof regions) => onChange({ ...spec, regions: next });

  return (
    <div className="mt-1 pt-3 border-t border-gray-100">
      <div className="flex items-center justify-between mb-2">
        <p className="text-xs font-medium text-gray-500">Regiones</p>
        <button
          type="button"
          onClick={() =>
            updateRegions([
              ...regions,
              {
                id: `r${Date.now()}`,
                label: "Nueva región",
                value: 0,
                coordinates: [0, 0] as [number, number],
                isoA3: undefined,
              },
            ])
          }
          className="flex items-center gap-1 text-xs text-blue-600 hover:underline"
        >
          <Plus size={11} /> Agregar
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="text-[10px] text-gray-400 uppercase tracking-wide">
              <th className="text-left py-1 pr-1 font-medium">Nombre</th>
              <th className="text-left py-1 pr-1 font-medium">Valor</th>
              <th className="text-left py-1 pr-1 font-medium">Lat</th>
              <th className="text-left py-1 pr-1 font-medium">Lng</th>
              <th className="text-left py-1 pr-1 font-medium">ISO</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {regions.map((region, i) => (
              <tr key={region.id} className="border-t border-gray-100">
                <td className="py-0.5 pr-1">
                  <input
                    className="w-full border border-gray-200 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-blue-400"
                    value={region.label}
                    onChange={(e) => {
                      const n = [...regions];
                      n[i] = { ...n[i], label: e.target.value };
                      updateRegions(n);
                    }}
                  />
                </td>
                <td className="py-0.5 pr-1">
                  <input
                    type="number"
                    step="any"
                    className="w-16 border border-gray-200 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-blue-400"
                    value={region.value}
                    onChange={(e) => {
                      const n = [...regions];
                      n[i] = { ...n[i], value: Number(e.target.value) };
                      updateRegions(n);
                    }}
                  />
                </td>
                <td className="py-0.5 pr-1">
                  <input
                    type="number"
                    step="any"
                    placeholder="Lat"
                    className="w-14 border border-gray-200 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-blue-400"
                    value={region.coordinates?.[0] ?? ""}
                    onChange={(e) => {
                      const n = [...regions];
                      n[i] = {
                        ...n[i],
                        coordinates: [Number(e.target.value), n[i].coordinates?.[1] ?? 0] as [
                          number,
                          number,
                        ],
                      };
                      updateRegions(n);
                    }}
                  />
                </td>
                <td className="py-0.5 pr-1">
                  <input
                    type="number"
                    step="any"
                    placeholder="Lng"
                    className="w-14 border border-gray-200 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-blue-400"
                    value={region.coordinates?.[1] ?? ""}
                    onChange={(e) => {
                      const n = [...regions];
                      n[i] = {
                        ...n[i],
                        coordinates: [n[i].coordinates?.[0] ?? 0, Number(e.target.value)] as [
                          number,
                          number,
                        ],
                      };
                      updateRegions(n);
                    }}
                  />
                </td>
                <td className="py-0.5 pr-1">
                  <input
                    maxLength={3}
                    placeholder="ARG"
                    className="w-12 border border-gray-200 rounded px-1.5 py-0.5 text-xs uppercase focus:outline-none focus:border-blue-400"
                    value={region.isoA3 ?? ""}
                    onChange={(e) => {
                      const n = [...regions];
                      n[i] = { ...n[i], isoA3: e.target.value.toUpperCase() || undefined };
                      updateRegions(n);
                    }}
                  />
                </td>
                <td className="py-0.5 pl-1">
                  <button
                    type="button"
                    onClick={() => updateRegions(regions.filter((_, j) => j !== i))}
                    className="text-red-400 hover:text-red-600 leading-none px-1 text-sm"
                    title="Quitar región"
                  >
                    ×
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── Population pyramid age groups table ─────────────────────────────────────

function PopulationPyramidEditor({
  spec,
  onChange,
}: {
  spec: SocialPopulationPyramidSpec;
  onChange: (updated: VisualSpec) => void;
}) {
  const groups = spec.ageGroups ?? [];

  const updateGroups = (next: typeof groups) => onChange({ ...spec, ageGroups: next });

  return (
    <div className="mt-1 pt-3 border-t border-gray-100">
      <div className="flex items-center justify-between mb-2">
        <p className="text-xs font-medium text-gray-500">Grupos de edad</p>
        <button
          type="button"
          onClick={() => updateGroups([...groups, { label: "", male: 0, female: 0 }])}
          className="flex items-center gap-1 text-xs text-blue-600 hover:underline"
        >
          <Plus size={11} /> Agregar
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="text-[10px] text-gray-400 uppercase tracking-wide">
              <th className="text-left py-1 pr-1 font-medium">Rango</th>
              <th className="text-left py-1 pr-1 font-medium">Hombres</th>
              <th className="text-left py-1 pr-1 font-medium">Mujeres</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {groups.map((group, i) => (
              <tr key={i} className="border-t border-gray-100">
                <td className="py-0.5 pr-1">
                  <input
                    className="w-full border border-gray-200 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-blue-400"
                    value={group.label}
                    placeholder="0-14"
                    onChange={(e) => {
                      const n = [...groups];
                      n[i] = { ...n[i], label: e.target.value };
                      updateGroups(n);
                    }}
                  />
                </td>
                <td className="py-0.5 pr-1">
                  <input
                    type="number"
                    step="any"
                    className="w-14 border border-gray-200 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-blue-400"
                    value={group.male}
                    onChange={(e) => {
                      const n = [...groups];
                      n[i] = { ...n[i], male: Number(e.target.value) };
                      updateGroups(n);
                    }}
                  />
                </td>
                <td className="py-0.5 pr-1">
                  <input
                    type="number"
                    step="any"
                    className="w-14 border border-gray-200 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-blue-400"
                    value={group.female}
                    onChange={(e) => {
                      const n = [...groups];
                      n[i] = { ...n[i], female: Number(e.target.value) };
                      updateGroups(n);
                    }}
                  />
                </td>
                <td className="py-0.5 pl-1">
                  <button
                    type="button"
                    onClick={() => updateGroups(groups.filter((_, j) => j !== i))}
                    className="text-red-400 hover:text-red-600 leading-none px-1 text-sm"
                    title="Quitar rango"
                  >
                    ×
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
