# VBLang 2.0 — Prototipo del editor de consignas

> **Dev-only.** Esta carpeta es un prototipo navegable que ensaya el patrón visual
> de la versión 2.0 del editor de consignas (Forms + property grid progresivo).
> **No es producción**, no reemplaza a `pages/PlantillaEditor.tsx` ni a
> `components/vblang/PlantillaEditorSchema.tsx`. No llama al back, no persiste
> datos y vive aislado bajo `/dev/vblang-prototipo`.

## Qué es

Un prototipo que valida, **con componentes y tokens reales del proyecto**, el
patrón visual siguiente:

- **Centro:** la consigna en edición como tarjeta de Forms (pregunta numérica
  de ejemplo).
- **Grilla de tipos de pregunta (12 tipos):** numérica, opción múltiple, V/F,
  completar, texto libre, ordenar, análisis sintáctico, identificar palabras,
  selección en mapa, emparejar, código/fórmula y visual. Los tipos que el
  editor actual no soporta (emparejar, código/fórmula, visual, con dataset) se
  muestran igual como tarjeta visible pero caen en un editor "próximamente" en
  el property grid.
- **Property grid progresivo a la derecha:** muestra solo lo esencial del
  elemento seleccionado; lo opcional queda detrás de un botón `+ Añadir` que
  crea un bloque plegable con resumen. Cambia según se seleccione la pregunta,
  una variable o un add-on.
- **Panel "Código generado"** colapsable, read-only, secundario — refleja el
  DSL mock en vivo.
- **Preview jugable** al costado, con botón `Regenerar` mock.

## Qué valida (decisiones de arquitectura a confirmar)

1. **Property grid con registro de componentes.** El grid se monta desde un
   mapa `tipo → componente editor` (ver `property-grid/registry.ts`). Cuando
   llega un tipo nuevo, se agrega un archivo y una línea en el registro: **no
   hay un `switch` gigante**. Esto es exactamente el patrón que la versión
   2.0 del editor real va a heredar.
2. **Disclosure progresivo.** El form muestra solo lo esencial y empuja lo
   opcional a bloques plegables con resumen ("Pistas (2)"). El menú
   `+ Añadir` actúa como surface para extensiones futuras.
3. **Property grid context-aware.** Cambia según el elemento clickeado en la
   tarjeta central: pregunta / variable / add-on. El `selectedElement` se
   mantiene en el state central y la grilla se renderiza a partir de él.
4. **Componentes y tokens reales.** Botones, inputs, select, cards, pills y
   panel de propiedades vienen de `components/ui/`. Los colores salen de los
   tokens `--c-*` (tema activo del sistema).

## Cómo se accede

En dev:

```text
http://localhost:5173/dev/vblang-prototipo
```

La ruta se registra solo si `import.meta.env.DEV` (mismo patrón que
`/dev/ui`). No aparece en build de producción.

## Estructura

```text
dev/vblang-prototipo/
├─ README.md                       # este archivo
├─ index.tsx                       # entry: layout 2-col + TopBar
├─ state.ts                        # tipos + reducer del state central
├─ data.ts                         # mock: 12 tipos, plantilla ejemplo, addOns
├─ PrototypeTopBar.tsx             # top bar con eyebrow "prototipo"
├─ TypeGrid.tsx                    # 12 cards de tipos
├─ QuestionCard.tsx                # tarjeta Forms de la pregunta
├─ PreviewCard.tsx                 # preview jugable (mock)
├─ GeneratedCodePanel.tsx          # panel DSL colapsable
├─ AddOnMenu.tsx                   # menú "+ Añadir"
├─ CollapsibleBlock.tsx            # bloque plegable con resumen
├─ property-grid/
│  ├─ PropertyGrid.tsx             # contenedor que monta desde el registro
│  ├─ registry.ts                  # el MAPA tipo→componente (sin switch)
│  └─ editors.tsx                  # numeric, variable, addOn, fallbacks
```

## Aislado de producción

- No se toca `pages/PlantillaEditor.tsx`, `components/vblang/*`, ni los hooks
  de compilación / preview / validación.
- El router solo agrega la ruta `/dev/vblang-prototipo` en una rama
  condicional `import.meta.env.DEV`, idéntica a la de `/dev/ui`.
- Los datos viven en `data.ts` — sin red, sin localStorage, sin Prisma.
- El state es local al componente (useReducer) y se descarta al navegar.
