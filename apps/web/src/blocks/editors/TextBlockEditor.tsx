import type { TextBlock } from "../types"

export function TextBlockEditor({
  block: _block,
  onUpdate: _onUpdate,
}: {
  block: TextBlock
  onUpdate: (patch: Record<string, unknown>) => void
}) {
  return (
    <div className="text-xs text-slate-400 italic px-1 py-2">
      Editá el texto directamente en el bloque del canvas. Aquí aparecerán opciones de formato en futuras versiones.
    </div>
  )
}
