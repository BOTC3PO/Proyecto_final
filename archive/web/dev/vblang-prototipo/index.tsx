/**
 * Página del prototipo VBLang 2.0.
 *
 * Orquesta el state central con useReducer, monta la grilla de tipos, la
 * tarjeta de la pregunta, el preview, el código generado y el property grid
 * a la derecha. Toda la fidelidad visual viene de los tokens `--c-*` y de
 * los componentes en `components/ui/`.
 *
 * Layout (desktop):
 *   ┌─────────────────────────────────────────────────────────────────┐
 *   │ PrototypeTopBar                                                 │
 *   ├─────────────────────────────────────────────────────────────────┤
 *   │ TypeGrid (12 cards, ribbon superior)                            │
 *   ├──────────────────────────────────────────┬──────────────────────┤
 *   │ QuestionCard (Forms center)              │ PropertyGrid         │
 *   │ PreviewCard                              │ (registro monta)     │
 *   │ GeneratedCodePanel                       │                      │
 *   └──────────────────────────────────────────┴──────────────────────┘
 *
 * Aislamiento: este archivo NO se importa desde producción. Solo el router
 * lo carga bajo `/dev/vblang-prototipo` en DEV.
 */
import { useReducer } from "react";
import { PrototypeTopBar } from "./PrototypeTopBar";
import { TypeGrid } from "./TypeGrid";
import { QuestionCard } from "./QuestionCard";
import { PreviewCard } from "./PreviewCard";
import { GeneratedCodePanel } from "./GeneratedCodePanel";
import { PropertyGrid } from "./property-grid/PropertyGrid";
import { PrototypeContext, reducer, type PrototypeState } from "./state";
import { buildInitialState } from "./data";

export default function VblangPrototypePage() {
  const [state, dispatch] = useReducer(reducer, undefined as unknown as PrototypeState, () =>
    buildInitialState(1),
  );

  return (
    <PrototypeContext.Provider value={{ state, dispatch }}>
      <div className="flex min-h-screen flex-col bg-[var(--c-bg)] text-[var(--c-text)]">
        <PrototypeTopBar
          onBack={() => history.back()}
          onReset={() => window.location.reload()}
        />

        <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-5 p-4 md:p-6">
          <header className="flex flex-col gap-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--c-text-3)]">
              /dev/vblang-prototipo · borrador
            </p>
            <h1 className="font-serif text-2xl font-bold text-[var(--c-text)] md:text-3xl">
              Editor de consignas 2.0 — prototipo navegable
            </h1>
            <p className="max-w-2xl text-sm text-[var(--c-text-3)]">
              Patrón visual &ldquo;Forms + property grid progresivo&rdquo;. El centro es la
              consigna en edición, la derecha un property grid que cambia según
              el elemento clickeado. Los componentes del grid se montan desde
              un registro (<code>property-grid/registry.ts</code>); cada tipo
              nuevo es un archivo y una línea en el mapa — no un switch.
            </p>
          </header>

          <TypeGrid />

          <div className="grid flex-1 gap-5 lg:grid-cols-[1fr_360px]">
            <div className="flex flex-col gap-5">
              <QuestionCard />
              <PreviewCard />
              <GeneratedCodePanel />
            </div>
            <PropertyGrid />
          </div>

          <footer className="border-t border-dashed border-[var(--c-border)] pt-3 text-[10px] text-[var(--c-text-3)]">
            <p>
              dev-only · no persiste datos · no llama al back · no reemplaza al
              editor de producción (<code>/plantillas/:id</code>).
            </p>
          </footer>
        </main>
      </div>
    </PrototypeContext.Provider>
  );
}
