# Accesibilidad de editores — estado (Fase 5.4)

> 5.4 aplica "solo si la Fase D migró los editores a componentes nuevos".
> Estado al cierre de Fase D + 5.

## Migrados al sistema de diseño D.2

- **Editor VBLang** (`components/vblang/*`, `pages/PlantillaEditor.tsx`) — Fase D.3.1.
  - Tabs Código/Formulario con patrón ARIA (roving tabindex, flechas) vía `Tabs` de D.2.
  - Foco visible (`focus-visible:ring`) en todos los botones (D.2 `Button`).
  - Estado de guardado y "Sin errores · N líneas" con `aria-live`.
  - **Navegación por teclado: completa.** ✓

- **Slides** (`components/modulos/TheorySlideEditor.tsx`) y **HerramientaPicker**
  (`components/modulos/HerramientaPicker.tsx`) — WO10 · sub-sesión A.
  - **HerramientaPicker** reescrito sobre `Input`/`Textarea`/`Button` de D.2:
    - Modal con `role="dialog"` + `aria-modal`, etiquetado por su título
      (`aria-labelledby`), cierre con `Escape` y foco al panel al abrir.
    - **Labels reales** en todos los campos (antes solo `placeholder`; WCAG 3.3.2).
    - La **entrada cruda CSV en `<textarea>`** (puntos del gráfico) se reemplazó
      por una **lista repetible editable** reusando `AccessibleList` (WO06):
      agregar/eliminar/reordenar por teclado + validación numérica inline.
      Vectores y eventos de la línea de tiempo usan el mismo patrón.
    - Confirmar se deshabilita mientras haya valores inválidos.
  - **TheorySlideEditor**: controles de formulario migrados a D.2
    (`Input`/`Textarea`/`Select`); etiquetas asociadas vía `htmlFor`/`id` en los
    campos con diseño propio (título/subtítulo/cuerpo) y en `ToolParamControl`
    (antes eran `<label>` huérfanos); `aria-label` real en las celdas de la
    tabla editable; selector "Tipo de contenido" con `role="radiogroup"`;
    `aria-pressed` ya presente en layout/tema/acento. Foco visible en todos los
    controles. **Navegación por teclado: completa.** ✓

- **Motor gráfico / blocks v2** (`blocks/v2/BlockEditorPage.tsx`,
  `blocks/editors/*`) — WO10 · sub-sesión B.
  - Lista de bloques de la barra lateral: además del drag-and-drop (que ya tenía
    `KeyboardSensor` de dnd-kit), ahora ofrece **reordenado por teclado** con
    botones ↑/↓ por bloque (`aria-label` con nombre y posición), `role="list"`/
    `role="listitem"` y el handle de arrastre visible al recibir foco.
  - Menús "Agregar bloque" con `aria-haspopup="menu"` + `aria-expanded`, y
    `role="menu"`/`role="menuitem"` en las opciones.
  - **Toolbars y toggles** migrados a `aria-pressed`/`role="toolbar"`:
    `InlineChartTypeToolbar` (tipo de gráfico) usa `Button pressed` de D.2; los
    selectores de colección y el toggle "Conectar" del `ShapeBlockEditor`
    exponen `aria-pressed`. Toolbar flotante del lienzo (mover/duplicar/eliminar)
    ya traía `aria-label`.
  - Campos del bloque imagen migrados a `Input`/`Select` de D.2 (label real,
    incluido el alt obligatorio).

## Con a11y propia (no migrados a D.2)

Estos editores no se reescribieron sobre los componentes D.2, pero ya traían
patrones de a11y de fases previas; se mantienen:

- **Editor de mapa** (`MapaEditorFull.tsx`): toolbar con `aria-pressed` por
  herramienta + atajos `kbd`; capas con `aria-pressed` en los toggles de
  visibilidad; inspector con `role="tablist"`; readout lat/lon con `aria-live`.
- **Editor de libro** (`bookEditor/`): controles de Papel/Tipografía/Tamaño/
  Interlineado (accesibilidad de lectura) con labels; navegación por teclado.

## Pendiente

- **Formularios completos del inspector de blocks v2** (`blocks/editors/*`:
  Chart/Flow/Math/Table/Shape): varios campos todavía usan estilos crudos con
  colores fijos (`slate`/`indigo`) en lugar de los tokens `--c-*` y de
  `Input`/`Select` de D.2. Funcionan y tienen nombre accesible, pero falta el
  pase de consistencia visual. Migrarlos campo a campo a D.2.
- **Paleta de formas del `ShapeBlockEditor`**: las formas se colocan en un
  lienzo libre por drag-and-drop; falta una alternativa de colocación por
  teclado (no es una lista reordenable, así que requiere diseño aparte).
