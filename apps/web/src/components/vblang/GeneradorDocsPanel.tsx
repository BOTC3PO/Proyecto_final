/**
 * Panel de documentación contextual del generador asistido, para el editor
 * VBLang. Al elegir un `generador: <id>`, muestra:
 *
 *  - La descripción de cada subtipo y las variables que expone (con ejemplo).
 *  - Una "receta de cableado" mínima: cómo se escribe el bloque, cómo se
 *    interpola una variable en el enunciado y cuándo conviene fijar subtipo.
 *
 * La doc se sirve desde `/api/generators/:cat/:name/docs` (la misma que ya
 * consume GeneradorSelector). Si el generador no tiene entrada, degrada
 * elegante: solo el id + recordatorio de enunciado libre, sin romper.
 */

import { useEffect, useState } from "react";
import { apiGet } from "../../lib/api";

type VariableDoc = { descripcion: string; ejemplo: string };
type SubtipoDoc = {
  descripcion: string;
  variables: Record<string, VariableDoc>;
};
type GeneratorDocs = { subtipos: Record<string, SubtipoDoc> };

interface Props {
  /** Id del generador tal como va en `generador:` (ej. `fisica/cinematica` o
   *  `fisica/cinematica/MRU`). */
  generadorId: string;
}

type FetchState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "ok"; docs: GeneratorDocs }
  | { status: "missing" };

/** Parte un id de generador en categoría, nombre y subtipo fijo (opcional). */
function parseGeneradorId(id: string): {
  cat?: string;
  name?: string;
  subtipo?: string;
} {
  const parts = id.split("/").filter(Boolean);
  return { cat: parts[0], name: parts[1], subtipo: parts[2] };
}

export default function GeneradorDocsPanel({ generadorId }: Props) {
  const { cat, name, subtipo } = parseGeneradorId(generadorId);
  const [state, setState] = useState<FetchState>({ status: "idle" });

  useEffect(() => {
    if (!cat || !name) {
      setState({ status: "idle" });
      return;
    }
    let cancelled = false;
    setState({ status: "loading" });
    apiGet<GeneratorDocs>(`/api/generators/${cat}/${name}/docs`)
      .then((docs) => {
        if (cancelled) return;
        if (docs && docs.subtipos && Object.keys(docs.subtipos).length > 0) {
          setState({ status: "ok", docs });
        } else {
          setState({ status: "missing" });
        }
      })
      .catch(() => {
        if (!cancelled) setState({ status: "missing" });
      });
    return () => {
      cancelled = true;
    };
  }, [cat, name]);

  if (!cat || !name) return null;

  return (
    <section
      aria-label="Documentación del generador"
      className="mt-2 rounded-lg border border-[var(--c-border,#e2e8f0)] bg-[var(--c-surface,white)] p-3 text-xs"
    >
      {state.status === "loading" && (
        <p className="text-[var(--c-hint)]">Cargando documentación…</p>
      )}

      {state.status === "missing" && (
        <DegradedHelp generadorId={generadorId} />
      )}

      {state.status === "ok" && (
        <VariablesDoc
          docs={state.docs}
          generadorId={generadorId}
          subtipoFijo={subtipo}
        />
      )}
    </section>
  );
}

/** Degradación elegante: el generador no tiene doc de variables. */
function DegradedHelp({ generadorId }: { generadorId: string }) {
  return (
    <div className="space-y-2">
      <p className="text-[var(--c-text)]">
        Este generador no tiene documentación de variables. Igual podés usarlo:
      </p>
      <WiringRecipe generadorId={generadorId} variables={[]} />
    </div>
  );
}

function VariablesDoc({
  docs,
  generadorId,
  subtipoFijo,
}: {
  docs: GeneratorDocs;
  generadorId: string;
  subtipoFijo?: string;
}) {
  const entries = Object.entries(docs.subtipos);
  // Si el id fija un subtipo y existe en la doc, mostramos solo ese; si no,
  // mostramos todos (la forma "subtipo aleatorio" puede producir cualquiera).
  const visibles =
    subtipoFijo && docs.subtipos[subtipoFijo]
      ? entries.filter(([k]) => k === subtipoFijo)
      : entries;

  // Para la receta: variables del subtipo fijo, o la unión del primero como ejemplo.
  const recetaVars = Object.keys(
    (subtipoFijo && docs.subtipos[subtipoFijo]?.variables) ||
      visibles[0]?.[1].variables ||
      {},
  );

  return (
    <div className="space-y-3">
      <div className="space-y-3">
        {visibles.map(([subId, sub]) => {
          const vars = Object.entries(sub.variables);
          return (
            <div key={subId}>
              <h4 className="font-semibold text-[var(--c-text)]">
                <code className="font-mono text-[var(--c-primary,#3b82f6)]">{subId}</code>
              </h4>
              <p className="mt-0.5 text-[var(--c-hint)]">{sub.descripcion}</p>
              {vars.length > 0 ? (
                <table className="mt-1.5 w-full border-collapse">
                  <caption className="sr-only">
                    Variables que expone el subtipo {subId}
                  </caption>
                  <thead>
                    <tr className="text-left text-[var(--c-hint)]">
                      <th scope="col" className="py-0.5 pr-2 font-medium">Variable</th>
                      <th scope="col" className="py-0.5 pr-2 font-medium">Qué representa</th>
                      <th scope="col" className="py-0.5 font-medium">Ejemplo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vars.map(([key, info]) => (
                      <tr key={key} className="align-top">
                        <td className="py-0.5 pr-2">
                          <code className="font-mono text-[var(--c-text)]">{`{${key}}`}</code>
                        </td>
                        <td className="py-0.5 pr-2 text-[var(--c-text)]">{info.descripcion}</td>
                        <td className="py-0.5">
                          <code className="font-mono text-[var(--c-hint)]">{info.ejemplo}</code>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="mt-1 text-[var(--c-hint)]">
                  Este subtipo no declara variables interpolables.
                </p>
              )}
            </div>
          );
        })}
      </div>

      <WiringRecipe generadorId={generadorId} variables={recetaVars} />
    </div>
  );
}

/** Receta de cableado: cómo escribir el bloque e interpolar variables. */
function WiringRecipe({
  generadorId,
  variables,
}: {
  generadorId: string;
  variables: string[];
}) {
  const { cat, name } = parseGeneradorId(generadorId);
  const baseId = cat && name ? `${cat}/${name}` : generadorId;
  const ejemploVar = variables[0];

  return (
    <details className="rounded border border-dashed border-[var(--c-border,#cbd5e1)] bg-[var(--c-bg,#f8fafc)] p-2">
      <summary className="cursor-pointer font-semibold text-[var(--c-text)]">
        Cómo cablearlo en VBLang
      </summary>
      <ol className="mt-2 list-decimal space-y-1.5 pl-4 text-[var(--c-text)]">
        <li>
          Declará el generador:{" "}
          <code className="font-mono text-[var(--c-primary,#3b82f6)]">{`generador: ${generadorId}`}</code>
        </li>
        <li>
          Interpolá una variable en el enunciado con llaves:{" "}
          <code className="font-mono text-[var(--c-primary,#3b82f6)]">
            {ejemploVar ? `{${ejemploVar}}` : "{variable}"}
          </code>
          {ejemploVar && (
            <>
              {" "}— ej.:{" "}
              <code className="font-mono text-[var(--c-hint)]">
                {`enunciado: "... ${`{${ejemploVar}}`} ..."`}
              </code>
            </>
          )}
        </li>
        <li>
          Con el generador activo, <strong>no</strong> declares{" "}
          <code className="font-mono">variables</code> ni{" "}
          <code className="font-mono">respuesta</code>: los provee el generador.
        </li>
        <li>
          Para fijar un subtipo concreto, usá{" "}
          <code className="font-mono text-[var(--c-primary,#3b82f6)]">{`generador: ${baseId}/<subtipo>`}</code>
          ; si dejás{" "}
          <code className="font-mono">{`generador: ${baseId}`}</code> sale un
          subtipo al azar.
        </li>
        <li>
          La dificultad se ajusta con{" "}
          <code className="font-mono">metadata</code>:{" "}
          <code className="font-mono text-[var(--c-hint)]">dificultad: "intermedio"</code>.
        </li>
      </ol>
    </details>
  );
}
