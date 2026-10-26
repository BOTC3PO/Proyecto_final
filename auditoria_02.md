# Auditoría 02 — Columna central del editor (3 columnas)

**Alcance:** verificación de que la **columna central** (editor de código) del
layout de 3 columnas en `PlantillaEditor` / `EditorShell` tenga
`min-w-0` / `min-width: 0` (o equivalente) en su contenedor flex/grid, para
evitar que el contenido ancho (líneas largas de DSL) rompa el layout en
pantallas chicas.

## Resultado

**✅ Cumple.** La columna central no necesita un `min-w-0` explícito de
Tailwind: el track del grid ya la define con `minmax(0, 1fr)`, que mata el
`min-width: auto` por construcción, y el `.editor-shell__col` además fuerza
`min-width: 0` en sus tres hijos (incluido el central).

## Evidencia

### 1. Componente que arma el layout — `apps/web/src/components/layout/EditorShell.tsx:70-92`

La columna central se renderiza como `<main class="editor-shell__col editor-shell__col--center">`,
hijo directo de un contenedor con clase `editor-shell` (CSS Grid, ver punto 2).

```tsx
<div
  className={`editor-shell${className ? ` ${className}` : ""}`}
  style={style}
  data-testid={dataTestid}
>
  <aside
    aria-label={metaLabel}
    className="editor-shell__col editor-shell__col--meta"
  >
    {meta}
  </aside>
  <main className="editor-shell__col editor-shell__col--center">
    {children}
  </main>
  <aside
    aria-label={auxLabel}
    className="editor-shell__col editor-shell__col--aux"
  >
    {aux}
  </aside>
</div>
```

- className del contenedor flex/grid que envuelve la columna central:
  `editor-shell` (sobre `<div>`).
- className del contenedor **directo** de la columna central:
  `editor-shell__col editor-shell__col--center` (sobre `<main>`).
- No hay utility `min-w-0` de Tailwind en el JSX, pero **no hace falta**:
  la regla CSS de `.editor-shell__col` ya pone `min-width: 0` (ver 2.b)
  y el track del grid es `minmax(0, 1fr)` (ver 2.a).

### 2. Reglas CSS que aplican — `apps/web/src/index.css:1390-1438`

```css
.editor-shell {
  display: grid;
  grid-template-columns: 1fr;                          /* mobile: 1 sola columna */
  grid-template-rows: auto minmax(0, 1fr) auto;
  height: calc(100vh - 3.5rem);
  min-height: 0;
  background: var(--c-bg);
}
@media (min-width: 1024px) {
  .editor-shell {
    grid-template-columns:
      var(--editor-meta, 260px)
      minmax(0, 1fr)                /* (2.a) track central: mata min-width:auto */
      var(--editor-aux, 320px);
    grid-template-rows: 1fr;
  }
}
.editor-shell__col {
  display: flex;
  flex-direction: column;
  min-width: 0;                       /* (2.b) refuerzo: el centro se encoge */
  min-height: 0;                      /* habilita scroll independiente */
  overflow: hidden;
}
```

(2.a) `minmax(0, 1fr)` en el track central = forma idiomática de grid para
neutralizar el `min-width: auto` por defecto. Es el equivalente funcional
del `min-w-0` que pide la consigna, aplicado a nivel del **track** en vez
del **item**.

(2.b) `.editor-shell__col` aplica `min-width: 0` a las tres columnas (meta,
center, aux) — refuerzo explícito en el item por si el track cambiara en
el futuro.

### 3. `PlantillaEditor.tsx` no introduce flex/grid propio en la columna central

La columna central es el slot `children` de `EditorShell`. Su contenido
interno (`<header>`, `<div id="vblang-panel">`, `<div role="status">`,
`<footer>`) va apilado en columna vía `flex-direction: column` heredado de
`.editor-shell__col`, no en un contenedor flex/grid adicional que pudiera
re-introducir el bug. Confirmado leyendo
`apps/web/src/pages/PlantillaEditor.tsx:332-565`.

## Conclusión

- ✅ La columna central se encoge en pantallas chicas; el `CodeEditor` con
  líneas largas no empuja `MetadataPanel` ni `PreviewPanel`.
- ✅ El cuerpo scrollable (`#vblang-panel` con clase `editor-shell__scroll`,
  ver `index.css:1434-1438`) mantiene scroll vertical independiente.
- ❌ No aplica fix — no falta nada.
