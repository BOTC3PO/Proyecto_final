# EditorShell — patrón de layout reusable para editores

`apps/web/src/components/layout/EditorShell.tsx` + estilos `.editor-shell*` en
`apps/web/src/index.css`.

Es el **shell de 3 columnas** del prototipo "VB editores", portado para que el
resto de las pantallas del rediseño de módulos lo reusen en vez de reinventar el
layout cada una.

## Por qué existe (el bug que resuelve)

El layout viejo del editor usaba `flex` con `flex-1` **sin `min-width: 0`**. Por
la regla `min-width: auto` de flex/grid, la columna central no podía encogerse
por debajo del ancho de su contenido, así que con contenido ancho (líneas largas
de DSL, page-bar llena) **empujaba** las columnas laterales y rompía el layout
horizontalmente.

`EditorShell` compone con **CSS Grid + tracks explícitos**:

```css
grid-template-columns: <meta> minmax(0, 1fr) <aux>;
```

Las laterales son anchos fijos y el centro es `minmax(0, 1fr)`: el `0` mata el
`min-width: auto`, así el centro **se encoge y nunca empuja**. El bug desaparece
por construcción, no con band-aids.

## Qué encapsula

- Tracks `<meta> 1fr <aux>` configurables (`metaWidth` / `auxWidth`, default
  260px / 320px como el prototipo).
- Cada columna scrollea sola: `min-height: 0` + el cuerpo scrollable usa la clase
  `editor-shell__scroll` (≡ `.panel-section .body { overflow-y:auto; min-height:0; flex:1 }`
  del prototipo).
- Colapso responsive: en `<lg` el grid pasa a una sola columna (`grid-template-columns: 1fr`).
- Tokens `--c-*` para superficies/bordes; cero hardcode.
- La page-bar (`.vb-page-bar`) ya es sticky por CSS (`position: sticky; top: 0`).

## Cómo usarlo

```tsx
import EditorShell from "../components/layout/EditorShell";

<EditorShell
  dataTestid="mi-editor"
  metaWidth="260px"   // opcional
  auxWidth="320px"    // opcional
  meta={<MetadataPanel … />}
  aux={
    <>
      <div className="flex-1 min-h-0"><PreviewPanel … /></div>
      <ValidationReport … />
    </>
  }
>
  {/* columna central */}
  <header className="vb-page-bar">…</header>
  <div className="editor-shell__scroll">{/* el cuerpo que scrollea */}</div>
  <footer>…</footer>
</EditorShell>
```

### Reglas para el contenido de cada slot

- **El scroll lo maneja el cuerpo de cada columna**, no la columna entera (la
  columna es `overflow: hidden`). Poné `editor-shell__scroll` (o un hijo con
  `h-full overflow-auto`, como `MetadataPanel`/`PreviewPanel`) en la región que
  debe scrollear; lo que va fijo (page-bar, footers) queda como hermano sin esa
  clase.
- La page-bar y los footers van como hijos directos del centro (flex-none); el
  cuerpo scrollable lleva `editor-shell__scroll` (flex:1).

## Secciones de panel (`.panel-section`)

Dentro de cada columna, el contenido se agrupa en **secciones** con el mismo
chrome que el prototipo: borde inferior entre secciones, título en versalitas y
padding de cuerpo consistente (`4px 12px 14px`). Clases reusables en `index.css`:

```html
<div class="panel-section flex">          <!-- `flex` → el cuerpo scrollea -->
  <div class="panel-section__head">         <!-- título + acción opcional -->
    <h2 class="panel-section__title">Vista previa</h2>
    <button>Regenerar</button>
  </div>
  <div class="panel-section__body">…</div>   <!-- padding 4px 12px 14px -->
</div>
```

- `.panel-section` → `border-bottom` (separador entre secciones).
- `.panel-section--last` → sin borde inferior (última sección de la columna).
- `.panel-section--top` → borde superior en vez de inferior.
- `.panel-section.flex .panel-section__body` → `overflow-y:auto; min-height:0; flex:1`
  (header fijo, cuerpo scrollea).
- `.panel-section__title` → título en versalitas (`--c-text-3`); sin acción usá un
  `<h2 class="panel-section__title">` directo, con acción usá `.panel-section__head`.

Consumidores actuales: `MetadataPanel`, `PreviewPanel`, `ValidationReport`.

## Primer consumidor

`apps/web/src/pages/PlantillaEditor.tsx` (editor de plantillas VBLang). Las
próximas pantallas del rediseño de módulos deberían consumir este shell en lugar
de armar su propio `flex`/grid.
