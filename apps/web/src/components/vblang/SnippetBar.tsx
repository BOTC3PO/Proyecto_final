import { useI18n } from "../../i18n/I18nContext";
/**
 * SnippetBar: barra de inserción rápida de bloques del DSL.
 *
 * Pensada para acompañarse de <CodeEditor>: cada botón inserta una plantilla
 * del bloque correspondiente en la posición actual del caret. El componente es
 * "tonto" — sólo dispara `onInsert(text)`. Quien la use la conecta a un
 * `CodeEditorHandle.insertAtCursor` (u otra acción).
 *
 * No se muestra en modo visual (lo monta quien la use, condicionando al modo).
 */

export interface SnippetDef {
  id: string;
  label: string;
  template: string;
  /** Descripción accesible larga (aria-label). */
  aria: string;
}

export const VBLANG_SNIPPETS: readonly SnippetDef[] = [
  {
    id: "variables",
    label: "variables",
    template: 'variables:\n  a: random(1, 10)\n',
    aria: "Insertar bloque variables",
  },
  {
    id: "enunciado",
    label: "enunciado",
    template: 'enunciado: "..."\n',
    aria: "Insertar bloque enunciado",
  },
  {
    id: "enunciados",
    label: "enunciados",
    template: 'enunciados:\n  - "..."\n  - "..."\n',
    aria: "Insertar bloque enunciados con dos variantes",
  },
  {
    id: "tipo",
    label: "tipo",
    template: "tipo: input\n",
    aria: "Insertar bloque tipo",
  },
  {
    id: "respuesta",
    label: "respuesta",
    template: "respuesta: a\n",
    aria: "Insertar bloque respuesta",
  },
  {
    id: "opciones",
    label: "opciones",
    template: "opciones: [a, b, c]\n",
    aria: "Insertar bloque opciones",
  },
  {
    id: "mapa",
    label: "mapa",
    template: "mapa: world_countries\n",
    aria: "Insertar bloque mapa",
  },
] as const;

export interface SnippetBarProps {
  onInsert: (text: string) => void;
  snippets?: readonly SnippetDef[];
}

export default function SnippetBar({
  onInsert,
  snippets = VBLANG_SNIPPETS,
}: SnippetBarProps) {
  const { t } = useI18n();
  return (
    <div
      role="toolbar"
      aria-label={t("snippetBar.insertarBloqueDelDsl")}
      data-testid="vblang-snippet-bar"
      className="flex flex-wrap items-center gap-1 border-b border-[var(--c-border,#cbd5e1)] bg-[var(--c-surface-2,#f8fafc)] px-2 py-1 text-xs"
    >
      <span
        aria-hidden="true"
        className="mr-1 text-[10px] uppercase tracking-wide text-[var(--c-muted,#64748b)]"
      >{t("snippetBar.snippets")}</span>
      {snippets.map((s) => (
        <button
          key={s.id}
          type="button"
          onClick={() => onInsert(s.template)}
          aria-label={s.aria}
          data-testid={`vblang-snippet-${s.id}`}
          className="rounded border border-[var(--c-border,#cbd5e1)] bg-[var(--c-surface,#fff)] px-2 py-0.5 font-mono text-[11px] text-[var(--c-text,#0f172a)] hover:border-[var(--c-primary,#3b82f6)] hover:text-[var(--c-primary,#3b82f6)] focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--c-primary,#3b82f6)]"
        >
          {s.label}
        </button>
      ))}
    </div>
  );
}
