# F5-06 — Touch / mobile de los renderers interactivos

Plan L1 (crear=desktop, responder=ambos). El alumno responde desde el
teléfono. Los tipos interactivos deben funcionar táctil.

## Alcance

| Renderer | Estado pre-F5-06 | Trabajo F5-06 |
|---|---|---|
| `OrdenarRenderer` | dnd-kit PointerSensor (touch OK) + KeyboardSensor (a11y OK). Sin tap target explícito. | **Botones ↑/↓ visibles** como fallback accesible (siempre visibles, ocultos post-submit). `min-h-[44px]` en cards y botones. Helper `moveItemBy` extraído a `domain/quiz/reorder.ts`. |
| `MarcarMapaRenderer` | M7: pointer events + `touch-action: none` + `overscroll-behavior: contain`. Tap target implícito por tamaño del SVG. | **Sin cambios de código.** Regression test del touch-action (candado contra refactors). |
| `mc` / `vf` inline en `QuizAttempt.tsx` | Native inputs (`<input type="radio/checkbox">` → touch OK). Label sin `min-h-*` (~24px). | `min-h-[44px]` en los `<label>` de mc y vf. |
| `AnalisisSintacticoRenderer` | Native `<select>` → touch OK. | Sin cambios (ya cumplía). |
| `IdentificarPalabrasRenderer` | Native `<button>` → touch OK. | Sin cambios (ya cumplía). |

## Lo que F5-06 **no** cubre

- **Selección de imagen como tipo de pregunta**: no existe en el data
  model (`options: string[]` admite sólo strings; `VisualSpec` es sólo
  decorativo, no-choice). Crear ese tipo es feature nueva, no fix de
  touch. Queda para F5-07+ si surge la necesidad.
- **Pinch-zoom en marcar_mapa**: M7 implementó pan + wheel-zoom, pero no
  pinch (el hook `useViewBoxZoom` no maneja multi-touch). Es un gap
  conocido del M7; abordarlo requiere un `gesturechange` o el listener
  multi-touch en `pointerdown`/`pointermove`. Pendiente.
- **Keyboard navigation de países en el SVG `<path>`**: el path no es
  focusable. Un usuario de teclado puro no puede marcar un país. Es un
  gap de a11y ortogonal a F5-06 (el alcance de F5-06 es touch/mobile).
  Posible solución: renderizar un `<select>` o una lista paralela de
  botones que mapee a los ISO del mapa. Pendiente.

## Cambios por archivo

### `apps/web/src/domain/quiz/reorder.ts` (NEW, 40 líneas)

Helper puro con tres funciones:

- `moveItemBy(arr, from, to)`: reordena un array, devuelve uno nuevo
  (o el mismo si la operación es no-op). Misma forma que `intentos.ts`
  / `puntaje.ts` / `gradeRange.ts`: sin imports, testeable aislado.
- `canMoveUp(arr, idx)`: false en el primer item / fuera de rango / no
  entero.
- `canMoveDown(arr, idx)`: false en el último item / fuera de rango / no
  entero.

Usos:
- `OrdenarRenderer.handleDragEnd`: invoca `moveItemBy(prev, oldIndex, newIndex)`.
- `OrdenarRenderer.handleMove(from, to)`: invoca `moveItemBy(prev, from, to)`.
- `OrdenarRenderer` decide `disabled` de los botones ↑/↓ con
  `canMoveUp(order, idx)` / `canMoveDown(order, idx)`.

### `apps/web/src/components/quiz-renderers/OrdenarRenderer.tsx` (modify)

- SortableCard ahora renderiza dos `<button>` (↑ y ↓) antes del handle
  (⋮⋮). Cada botón es de **44×44px mínimo** (Apple HIG) con clase
  Tailwind `min-w-[44px] min-h-[44px]`.
- `disabled` cuando `!canUp` / `!canDown` (extremos de la lista).
- `aria-label` explícito: `"Subir <label>"` / `"Bajar <label>"`.
- Los botones **no se muestran** cuando `disabled` (post-submit).
- El handle (⋮⋮) ya no recibe `{...listeners}` en el `<li>`, sino sólo
  en el `<span>` del handle. Esto evita que dnd-kit capture pointers
  sobre los botones (que sí dispararían drag sin querer).
- `onPointerDown` y `onMouseDown` en los botones llaman `stopPropagation`
  para que el click llegue al botón y no sea "robado" por dnd-kit vía
  `setPointerCapture` (en happy-dom no se nota, pero en navegadores
  reales sí).
- La card tiene `min-h-[44px]` (tap target).
- `handleDragEnd` simplificado: usa `moveItemBy` en vez de splice
  manual.
- Nuevo `handleMove(from, to)` para los botones.

### `apps/web/src/components/quiz-renderers/MarcarMapaRenderer.tsx` (sin cambios)

El renderer ya implementa el patrón M7. El regression test
asegura que no se rompa en refactors futuros.

### `apps/web/src/components/quiz-renderers/__tests__/MarcarMapaRenderer.spec.tsx` (modify, +1 test)

Regression test: mockea `globalThis.fetch` con una topología vacía,
espera a que el `<svg>` se monte, y verifica que su `style` inline
contenga `touch-action: none` y `overscroll-behavior: contain`. Si
alguien borra esas líneas en un refactor, el test tira.

### `apps/web/src/components/quiz-renderers/__tests__/OrdenarRenderer.spec.tsx` (modify, +10 tests)

- Botones ↑/↓ visibles con `aria-label` correcto.
- Primer item: ↑ `disabled`.
- Último item: ↓ `disabled`.
- Items intermedios: ↑ y ↓ habilitados.
- Click en ↓ del primer → onChange con `["b", "a", "c"]`.
- Click en ↑ del segundo → onChange con `["b", "a", "c"]`.
- Click en ↑ del último → onChange con `["a", "c", "b"]`.
- Cuando `disabled=true`, no hay botones ↑/↓ en el DOM.
- Card tiene `min-h-[44px]`.
- Botones ↑/↓ tienen `min-w-[44px] min-h-[44px]`.

### `apps/web/src/domain/quiz/__tests__/reorder.spec.ts` (NEW, 20 tests)

Cubre `moveItemBy`, `canMoveUp`, `canMoveDown` con casos normales,
extremos (fuera de rango, no enteros, vacío, un solo elemento) y
genéricos (objetos, no sólo strings).

### `apps/web/src/pages/quizzes/QuizAttempt.tsx` (modify, mc/vf)

- Label de vf: `min-h-[44px] flex items-center gap-2 px-2 rounded ...`.
- Label de mc: `min-h-[44px] flex items-center gap-2 px-2 py-1 rounded ...`.
- Ambos ganan `cursor-pointer hover:bg-slate-50` para feedback visual.
- El `<input>` adentro sigue siendo el control real; el `<label>`
  envuelve la fila entera para que el área clickeable sea toda la fila.

## Decisiones de diseño

### 1) Botones ↑/↓ SIEMPRE visibles (no toggle "modo accesible")

Hay dos modelos:
- a) Modo dual: drag por defecto, ↑/↓ ocultos, un toggle "usar botones".
- b) Modo único: drag + ↑/↓ siempre disponibles. El usuario elige.

Elegí (b). Razones:
- En touch, el drag de dnd-kit funciona pero descubribilidad es baja
  (no hay pista visual de "se puede arrastrar" más allá del cursor
  grab). Los botones ↑/↓ son una pista explícita de que el orden
  importa.
- En teclado, dnd-kit ya cubre el patrón WAI-ARIA; los ↑/↓ son
  redundantes pero no molestan (un usuario de teclado no los usará,
  pero no se interponen).
- El costo es ~2 botones extra por item, ~80px de ancho. Aceptable.

### 2) `min-h-[44px]` en mc/vf (no en input)

El `<input>` mide ~20-24px; el área clickeable real es el `<label>`
que lo envuelve. Aplicar `min-h-[44px]` al `<label>` (con
`flex items-center`) garantiza que toda la fila sea tocable, no sólo
el cuadradito del radio/checkbox.

### 3) `stopPropagation` en pointerdown de los botones ↑/↓

dnd-kit usa `setPointerCapture` en el `<li>` cuando recibe
`pointerdown`. Si el usuario toca un botón ↑/↓, el pointerdown
burbujea al `<li>`, dnd-kit captura el puntero, y el `pointerup`
resultante va al `<li>` (no al botón), lo que genera un `click` en el
`<li>` (no en el botón). El botón no recibe onClick.

Solución: `onPointerDown={(e) => e.stopPropagation()}` en los botones
impide que el evento burbujee al `<li>`. dnd-kit no ve el pointerdown,
no captura el puntero, y el botón recibe el click normalmente.

happy-dom no implementa `setPointerCapture`, así que el test pasa
incluso sin stopPropagation. Pero en un navegador real (Safari
especialmente) el stopPropagation es esencial.

### 4) `moveItemBy` como helper puro (no inline en el renderer)

El renderer no testea drag táctil real (jsdom + dnd-kit no cooperan).
Pero la lógica de reordenamiento (mover un item de una posición a
otra) es testeable sin DOM. Extraerla a `domain/quiz/reorder.ts`:
- 20 tests cubren casos normales y extremos sin jsdom.
- El renderer la usa desde un solo lugar (sin lógica duplicada entre
  el drag y los botones).
- Si en el futuro otro renderer necesita reordenar (ej. un editor
  de matching), el helper está disponible.

### 5) Regression test del touch-action en MarcarMapaRenderer

El test de "el <svg> tiene touch-action: none" no prueba que el mapa
funcione en touch (eso sólo se verifica en un teléfono real). Lo que
prueba es: **si alguien borra `touchAction: "none"` del style del
`<svg>`, este test tira**. Es un candado contra refactors que rompen
el patrón M7 silenciosamente (porque en desktop no se nota).

### 6) Sin mirror byte-a-byte en el backend

`reorder.ts` es UI-only (lo consume el renderer en el front). El
backend no necesita la lógica de reordenar: la respuesta correcta
viene de `answerKey: string[]` (en `ModuleQuizQuestion`), y la
comparación es `arraysIguales` (`checkAnswerSpecial.ts:27-36`). No
hay un mirror a `api/src/lib/`. El patrón "mirror" de F4-04/F5-04
no aplica aquí.

## Aceptación

- `pnpm test:web` → **617/617** (era 586; +20 reorder + 10 ordenar
  + 1 marcar = +31).
- 0 fallidos, 0 regresiones.
- Typecheck web: sin errores introducidos por F5-06 (los 22 errores
  pre-existentes siguen ahí, ortogonales).

## Limitaciones

- **Pinch-zoom en marcar_mapa** (gap conocido de M7). El hook
  `useViewBoxZoom` no maneja multi-touch; sólo `wheel` + botones
  +/−. En un teléfono, hacer zoom requiere tap en los botones. Si
  esto resulta problemático, se puede agregar un listener
  `pointerdown`/`pointermove` con `e.isPrimary` o usar el evento
  `gesturechange` (WebKit, no estándar).
- **Keyboard navigation de países**: el `<path>` no es focusable.
  Un usuario de teclado puro no puede marcar un país en el mapa. Es
  un gap a11y ortogonal a F5-06; un fix razonable sería un `<select>`
  o una `<ul>` paralela que mapee a los ISO. Pendiente.
- **No se testea el gesto real de drag**. Los tests de
  OrdenarRenderer cubren el fallback (botones ↑/↓) y el regression
  de touch-action; el drag en sí queda a verificación manual de
  Javier en un teléfono (per spec de F5-06).
- **mc/vf: el checkbox/radio nativo mide ~13×13px**. El `<label>` que
  lo envuelve tiene `min-h-[44px]`, así que el área tocable es la fila
  entera, pero el cuadradito mismo sigue siendo pequeño. Es el trade-off
  de usar inputs nativos. Si se necesita un checkbox más grande, se
  puede estilizar con `[&>input]:w-5 [&>input]:h-5`, pero eso no
  estaba en el scope F5-06.
