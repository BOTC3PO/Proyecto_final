import type { TimelineSpec } from "../types";

type TimelineVisualizerProps = {
  spec: TimelineSpec;
};

export default function TimelineVisualizer({ spec }: TimelineVisualizerProps) {
  const hasRange = Boolean(spec.range?.start || spec.range?.end);
  const hasMarkers = Boolean(spec.markers?.length);

  return (
    <section className="space-y-4">
      {spec.title && <h3 className="text-lg font-semibold">{spec.title}</h3>}

      {(hasRange || hasMarkers) && (
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-600">
          {hasRange && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-medium text-slate-700">Rango:</span>
              <span>
                {spec.range?.start ?? "Sin inicio"} — {spec.range?.end ?? "Sin fin"}
              </span>
            </div>
          )}

          {hasMarkers && (
            <div className="mt-2 flex flex-wrap gap-2">
              {spec.markers?.map((marker) => (
                <div
                  key={marker.id}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1"
                >
                  <span className="font-medium text-slate-700">{marker.label}</span>
                  <span className="ml-2 text-xs text-slate-500">{marker.date}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <ul className="space-y-3">
        {spec.events.map((event) => (
          <li key={event.id} className="rounded-lg border border-slate-200 p-3">
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="font-semibold text-slate-900">{event.title}</span>
              <span className="text-sm text-slate-500">{event.date}</span>
            </div>
            {event.description && <p className="text-sm text-slate-600">{event.description}</p>}
            {event.tags?.length ? (
              <div className="mt-2 flex flex-wrap gap-2">
                {event.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
