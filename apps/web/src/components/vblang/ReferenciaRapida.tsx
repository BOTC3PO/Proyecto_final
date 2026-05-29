/**
 * Drawer de referencia rápida del DSL VBLang: bloques, funciones, tipos de
 * pregunta y reglas críticas. Contenido estático espejado de
 * docs/vblang/llm-system-prompt.md. Se abre/cierra desde el botón "Referencia"
 * de la barra del editor; como drawer lateral no tapa el editor.
 */

interface ReferenciaRapidaProps {
  open: boolean;
  onClose: () => void;
}

const REGLAS: string[] = [
  "Strings siempre entre comillas dobles, nunca simples.",
  "Booleans: verdadero / falso (no true/false).",
  "Lógicos: y / o / no (no and/or/not).",
  "Variables se declaran con : (no con =).",
  "Indentación: exactamente 2 espacios. Nunca tabs.",
  "El bloque respuesta: contiene una fórmula, no un string.",
  "tipo: mc requiere opciones: o opciones_explicitas:",
];

const BLOQUES: { nombre: string; desc: string }[] = [
  { nombre: "variables", desc: "Declara los valores paramétricos del ejercicio." },
  { nombre: "restricciones", desc: "Condiciones que deben cumplir las variables (ej. a != 0)." },
  { nombre: "enunciado", desc: "Texto de la pregunta; interpola {variable}." },
  { nombre: "respuesta", desc: "Fórmula con la respuesta correcta." },
  { nombre: "respuestas_validas", desc: "Lista de respuestas aceptadas (varias correctas)." },
  { nombre: "unidad", desc: "Unidad de la respuesta numérica (ej. \"m/s\")." },
  { nombre: "tolerancia", desc: "Margen de error aceptado (absoluto o %)." },
  { nombre: "opciones", desc: "Cantidad de opciones a generar (multiple choice)." },
  { nombre: "opciones_explicitas", desc: "Lista explícita de opciones." },
  { nombre: "tipo", desc: "Tipo de pregunta (ver lista abajo)." },
  { nombre: "pasos", desc: "Pasos de la resolución, con interpolación." },
  { nombre: "generador", desc: "Usa un generador hardcoded de generadoresV2." },
  { nombre: "dataset", desc: "Carga filas de un dataset precargado." },
  { nombre: "metadata", desc: "Datos extra de la plantilla (clave: valor)." },
  { nombre: "visual", desc: "Especifica un visual (gráfico, diagrama, etc.)." },
  { nombre: "mapa", desc: "Mapa a usar en marcar_mapa (entre comillas)." },
  { nombre: "respuesta_iso / respuesta_nombre", desc: "Respuesta correcta de marcar_mapa." },
  { nombre: "respuesta_orden", desc: "Orden correcto para tipo ordenar." },
  { nombre: "texto_analizar / etiquetas_pedidas", desc: "Para análisis sintáctico / identificar palabras." },
];

const FUNCIONES: string[] = [
  "random(min, max)", "random_float(min, max, dec)", "uno_de(array)",
  "n_de(array, n)", "mezclar(array)", "filtrar(array, cond)", "sqrt", "abs",
  "floor", "ceil", "round", "redondear(x, n)", "min", "max", "sumar",
  "promedio", "largo", "ordenar", "ordenar_por(arr, campo)", "capitalizar",
  "mayusculas", "minusculas", "concatenar",
];

const CONSTANTES = ["pi", "e", "g", "c", "G", "h_planck", "k_B", "N_A", "R"];

const TIPOS: { nombre: string; desc: string }[] = [
  { nombre: "input", desc: "Respuesta numérica o de texto libre." },
  { nombre: "mc", desc: "Multiple choice (una correcta)." },
  { nombre: "vf", desc: "Verdadero / Falso." },
  { nombre: "completar", desc: "Completar un valor faltante." },
  { nombre: "ordenar", desc: "Reordenar una lista de ítems." },
  { nombre: "marcar_mapa", desc: "Hacer click en un país/región del mapa." },
  { nombre: "analisis_sintactico", desc: "Etiquetar gramaticalmente cada palabra." },
  { nombre: "identificar_palabras", desc: "Marcar palabras que cumplen un criterio." },
];

export default function ReferenciaRapida({ open, onClose }: ReferenciaRapidaProps) {
  if (!open) return null;

  return (
    <>
      {/* backdrop translúcido — click cierra */}
      <div
        className="fixed inset-0 z-40 bg-black/20"
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        role="dialog"
        aria-label="Referencia rápida de VBLang"
        className="fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col border-l border-[var(--c-border,#e2e8f0)] bg-[var(--c-surface,white)] shadow-xl"
      >
        <header className="flex items-center justify-between border-b border-[var(--c-border,#e2e8f0)] px-4 py-3">
          <h2 className="text-sm font-bold text-[var(--c-text)]">Referencia VBLang</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar referencia"
            className="rounded px-2 py-0.5 text-sm text-[var(--c-muted,#64748b)] hover:bg-[var(--c-bg,#f1f5f9)]"
          >
            ✕
          </button>
        </header>

        <div className="flex-1 overflow-auto px-4 py-3 text-xs space-y-5">
          <section>
            <h3 className="mb-1.5 font-bold uppercase tracking-wide text-[var(--c-muted,#64748b)]">
              Reglas críticas
            </h3>
            <ul className="list-disc space-y-1 pl-4 text-[var(--c-text)]">
              {REGLAS.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="mb-1.5 font-bold uppercase tracking-wide text-[var(--c-muted,#64748b)]">
              Bloques
            </h3>
            <dl className="space-y-1.5">
              {BLOQUES.map((b) => (
                <div key={b.nombre}>
                  <dt className="font-mono font-semibold text-[var(--c-primary,#3b82f6)]">
                    {b.nombre}
                  </dt>
                  <dd className="text-[var(--c-muted,#64748b)]">{b.desc}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section>
            <h3 className="mb-1.5 font-bold uppercase tracking-wide text-[var(--c-muted,#64748b)]">
              Tipos de pregunta
            </h3>
            <dl className="space-y-1.5">
              {TIPOS.map((t) => (
                <div key={t.nombre}>
                  <dt className="font-mono font-semibold text-[var(--c-primary,#3b82f6)]">
                    {t.nombre}
                  </dt>
                  <dd className="text-[var(--c-muted,#64748b)]">{t.desc}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section>
            <h3 className="mb-1.5 font-bold uppercase tracking-wide text-[var(--c-muted,#64748b)]">
              Funciones
            </h3>
            <div className="flex flex-wrap gap-1">
              {FUNCIONES.map((f) => (
                <code
                  key={f}
                  className="rounded bg-[var(--c-bg,#f1f5f9)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--c-text)]"
                >
                  {f}
                </code>
              ))}
            </div>
          </section>

          <section>
            <h3 className="mb-1.5 font-bold uppercase tracking-wide text-[var(--c-muted,#64748b)]">
              Constantes
            </h3>
            <div className="flex flex-wrap gap-1">
              {CONSTANTES.map((c) => (
                <code
                  key={c}
                  className="rounded bg-[var(--c-bg,#f1f5f9)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--c-text)]"
                >
                  {c}
                </code>
              ))}
            </div>
          </section>
        </div>
      </aside>
    </>
  );
}
