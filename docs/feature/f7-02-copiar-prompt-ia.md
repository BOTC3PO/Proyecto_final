# F7-02 — Botón "Copiar prompt para IA"

Reemplazo del asistente IA eliminado (plan E3): un botón en el editor de
plantillas que arma un prompt portable (referencia DSL de F7-01 +
descripción del docente en lenguaje natural + contrato de salida estricto)
para pegar en cualquier IA externa. Sin servidor, sin keys. El validador del
editor es el guardián: lo que se pega de vuelta se compila al instante.

## 1. Investigación

### 1.1 "Sugerir con IA" eliminado (WO17)

No existe un commit de eliminación: la feature **nunca se implementó**.
`docs/vblang/ia-editor-roadmap.md` (Fase 5.5, post-expo) la documenta como
"No implementado" — un roadmap de issues (A5/DIFF-05 "Generar con IA", V8
"Sugerir con IA") que requerían un proxy de backend a la API de Anthropic.

No quedan remanentes server-dependientes: sin rutas `/api/.../asistente` o
`/api/.../sugerir`, sin env vars de `ANTHROPIC_API_KEY`/`OPENAI_API_KEY`.
(`GeneradorAsistidoProvider`/`GeneradorAsistidoEjercicio` en
`packages/vblang` son de un feature no relacionado: el provider de datasets
para generadores procedurales.)

El único antecedente client-side era `apps/web/src/vblang/llmPrompt.ts`,
que exportaba `VBLANG_LLM_SYSTEM_PROMPT` — un cheat-sheet de DSL escrito a
mano, **no usado en ningún lado** (confirmado por grep) y con datos
desactualizados (ej.: builtins `filtrar`/`abs`/`floor`/`ceil`/`round`/`min`/
`max` que no son los reales de `createBuiltins`, constantes `G`/`h_planck`/
`k_B` que no existen en `CONSTANTES_GLOBALES`). F7-02 reescribe este archivo
usando `generarReferenciaDsl()` (F7-01), que nunca queda obsoleta.

### 1.2 Editor de plantillas actual

`apps/web/src/pages/PlantillaEditor.tsx` (Editor V3): layout de 3 columnas
(metadata · código+errores · preview+validación). La barra superior
(`<header className="vb-page-bar">`) ya tiene botones `Importar JSON`,
`EjemplosMenu`, `Referencia` (abre `ReferenciaRapida`, un drawer lateral) —
mismo lugar natural para el nuevo botón.

`MetadataPanel` ya tiene un campo `descripcion` (`PlantillaMetadata`), pero
es la descripción **del catálogo** (persistida, visible a otros docentes si
es pública) — semánticamente distinta del "pedido a la IA". F7-02 usa un
campo de descripción propio, en estado local del nuevo drawer, no
persistido.

Patrón de copiar al portapapeles (precedente en
`EditorCuestionariosV2.tsx`/`EditorCuestionarios.tsx`): `navigator.clipboard
.writeText(...)` + estado `"copied"` con reset a los 2s, label `"✓
Copiado"`.

## 2. Implementación

### 2.1 `apps/web/src/vblang/llmPrompt.ts` (reescrito)

- `CONTRATO_SALIDA_IA`: contrato de salida fijo — "respondé SOLO con código
  VBLang válido... sin bloques de markdown... usá comentarios `#` si
  necesitás aclarar algo" (VBLang soporta comentarios `#`, ver
  `lexer/lexer.ts`).
- `buildPromptIA(descripcion: string): string` = `generarReferenciaDsl()`
  (F7-01) + sección "Pedido del docente" (la descripción, o
  `"(sin descripción)"` si está vacía) + sección "Formato de respuesta"
  (`CONTRATO_SALIDA_IA`).
- `limpiarRespuestaIA(respuesta: string): string`: si el texto está envuelto
  en ` ```...``` ` (con o sin lenguaje tras el fence de apertura), devuelve
  solo el contenido interno recortado; si no, devuelve el texto recortado
  tal cual.

### 2.2 `apps/web/src/components/vblang/PromptIAPanel.tsx` (nuevo)

Drawer lateral (mismo patrón visual que `ReferenciaRapida`: backdrop +
`<aside role="dialog">` a la derecha), con tres secciones:

1. **Describí el ejercicio**: `Textarea` (estado local `descripcion`).
2. **Copiá el prompt**: botón "Copiar prompt para IA" →
   `navigator.clipboard.writeText(buildPromptIA(descripcion))`, feedback
   "✓ Copiado" (2s) / "No se pudo copiar" en error.
3. **Pegá la respuesta**: `Textarea` (estado local `respuesta`) + botón
   "Insertar en el editor" (deshabilitado si está vacío) → llama
   `onInsert(limpiarRespuestaIA(respuesta))`.

### 2.3 `apps/web/src/pages/PlantillaEditor.tsx`

- Nuevo botón `Button variant="ghost" size="sm"` "Copiar prompt para IA",
  junto a "Referencia" en `vb-page-bar`.
- Nuevo estado `promptIAOpen`. `onInsert` despacha
  `dispatchCodigo({type: "set", value: codigo})` (mismo reducer de
  historial que el resto del editor — queda en el undo/redo) y cierra el
  drawer.

## 3. Tests

- `apps/web/src/vblang/__tests__/llmPrompt.spec.ts` (7 tests):
  `buildPromptIA` incluye la referencia DSL completa (`generarReferenciaDsl()`),
  la descripción del docente, el contrato de salida (`/SOLO con código
  VBLang válido/`), y maneja descripción vacía. `limpiarRespuestaIA` quita
  fences con y sin lenguaje, y deja texto sin fences tal cual (recortado).
- `apps/web/src/components/vblang/__tests__/PromptIAPanel.spec.tsx`
  (5 tests): no renderiza si `open=false`; copiar produce un string que
  contiene la referencia + descripción + contrato y muestra "✓ Copiado";
  insertar limpia fences y llama `onInsert`; botón insertar deshabilitado
  sin respuesta; cerrar invoca `onClose`.
- `apps/web/src/pages/__tests__/PlantillaEditor.spec.tsx` (+1 test): el
  botón "Copiar prompt para IA" abre el drawer (`role="dialog"`).

## 4. Resultados

- `pnpm test:web` → **737/737** (era 724; +13). 0 regresiones.
- `tsc --noEmit` en `apps/web`: sin errores nuevos.

## 5. Lo que F7-02 no cubre

- **v1 es solo CREACIÓN**: el prompt no incluye el código actual del editor
  como contexto (no hay "modificá esto"); el pedido es siempre "generá una
  plantilla nueva a partir de esta descripción". Pegar la respuesta
  reemplaza el código completo (vía el mismo historial undo/redo, así que es
  reversible).
- **No se eliminó `docs/vblang/ia-editor-roadmap.md`**: sigue describiendo
  el roadmap completo de Fase 5.5 (incluye ítems más allá de F7-02, como
  V8 "Sugerir con IA" en el bloque `variables`).
- **`ReferenciaRapida`** (drawer "Referencia") sigue con su propio contenido
  hardcodeado/desactualizado (bloques/funciones/constantes) — no se
  reemplazó por `generarReferenciaDsl()`; queda fuera de alcance de F7-02.
