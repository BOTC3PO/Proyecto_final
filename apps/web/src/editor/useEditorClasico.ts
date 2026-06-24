/**
 * editor/useEditorClasico.ts — flag de convivencia editor nuevo ↔ viejo.
 *
 * D5 cerró la paridad: el editor nuevo (`EditorPlantilla`) es el **default**.
 * El viejo (`PlantillaEditorSchema`) queda accesible por flag inverso, para
 * desbloquear una regresión sin redeploy, hasta que se lo retire:
 *
 *   • Sin flag → editor nuevo (default).
 *   • `?editorClasico=1` o `?editorV2=0` → editor viejo.
 *
 * SSR-safe: sin `window` devuelve `false` (nuevo).
 */
export function useEditorClasico(): boolean {
  if (typeof window === "undefined") return false;
  const p = new URLSearchParams(window.location.search);
  return p.get("editorClasico") === "1" || p.get("editorV2") === "0";
}
