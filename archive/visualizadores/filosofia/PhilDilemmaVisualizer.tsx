import type { PhilDilemmaSpec } from "../types";

type Framework = "utilitarianism" | "deontology" | "virtue" | "contractualism";

const FRAMEWORK_BADGE: Record<Framework, { label: string; className: string }> =
  {
    utilitarianism: {
      label: "Utilitarismo",
      className: "bg-orange-100 text-orange-700 border border-orange-300",
    },
    deontology: {
      label: "Deontología",
      className: "bg-blue-100 text-blue-700 border border-blue-300",
    },
    virtue: {
      label: "Virtud",
      className: "bg-green-100 text-green-700 border border-green-300",
    },
    contractualism: {
      label: "Contractualismo",
      className: "bg-purple-100 text-purple-700 border border-purple-300",
    },
  };

export default function PhilDilemmaVisualizer({
  spec,
}: {
  spec: PhilDilemmaSpec;
}) {
  if (!spec) return null;

  const options = spec.options ?? [];

  return (
    <div className="p-4 space-y-4 font-sans">
      {/* Scenario */}
      {spec.scenario && (
        <p className="italic text-slate-600 border-l-4 border-slate-300 pl-3 text-sm leading-relaxed">
          {spec.scenario}
        </p>
      )}

      {/* Options grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((option) => {
          const badge =
            FRAMEWORK_BADGE[option.framework] ??
            FRAMEWORK_BADGE.utilitarianism;
          const isActive = option.id === spec.activeOptionId;
          const consequences = option.consequences?.slice(0, 2) ?? [];

          return (
            <div
              key={option.id}
              className={[
                "relative rounded-lg border p-4 space-y-2 bg-white",
                isActive
                  ? "ring-2 ring-blue-500 bg-blue-50 border-blue-200"
                  : "border-slate-200",
              ].join(" ")}
            >
              {/* Framework badge */}
              <span
                className={[
                  "absolute top-3 right-3 text-xs font-medium px-2 py-0.5 rounded-full",
                  badge.className,
                ].join(" ")}
              >
                {badge.label}
              </span>

              {/* Option label */}
              <h3 className="text-sm font-semibold text-slate-800 pr-24 leading-snug">
                {option.label}
              </h3>

              {/* Analysis */}
              {option.analysis && (
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {option.analysis}
                </p>
              )}

              {/* Consequences */}
              {consequences.length > 0 && (
                <ul className="space-y-1 mt-1">
                  {consequences.map((c, i) => (
                    <li
                      key={i}
                      className="text-xs text-slate-500 flex items-start gap-1"
                    >
                      <span className="mt-0.5 shrink-0 text-slate-400">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
