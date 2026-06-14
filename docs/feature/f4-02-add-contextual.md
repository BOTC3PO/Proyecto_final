# F4-02 — "+ Añadir" contextual sobre el lienzo de posiciones

> Estado: implementado. Cubre el plan ronda 2/3 (botón "+ Añadir" que
> resuelve la fricción de armar el cuestionario) y la parte del plan B6
> que tiene sentido acá: la inserción contextual de contenido.

## 1. Contexto y motivación

F4-01 introdujo el `PosicionesCanvas` (vista presentacional del modelo
F3-01) con sólo `onReorder` y `onEditVariante`. Faltaba TODO el camino
de alta: no había forma de agregar una posición o una variante desde el
lienzo. El docente tenía que volver a algún otro editor (no había) o
manipular el JSON a mano.

Además, el patrón "insertar donde está el cursor" ya existía en la
`SnippetBar` VBLang (`apps/web/src/components/vblang/SnippetBar.tsx`):
un botón por bloque, callback `onInsert(text)`. F4-02 lo generaliza al
lienzo de posiciones: un menú contextual con las inserciones
disponibles, relativas al elemento activo.

## 2. Diseño

### 2.1 Callbacks nuevos en `PosicionesCanvas`

```ts
type AddPosicionArgs = {
  /** `numero` de la posición activa tras la cual insertar. */
  despuesDe?: number;
  /** Tipo de slot que eligió el docente en el menú. */
  tipo: PosicionTipo; // "fijo" | "obligatorio" | "relleno"
};

interface Props {
  // F4-01:
  cuestionario: CuestionarioPosiciones;
  onReorder?: (numero, direccion) => void;
  onEditVariante?: (numero, letra) => void;
  renderVarianteEditor?: (posicion, variante) => ReactNode;

  // F4-02 (todos opcionales):
  onAddPosicion?: (args: AddPosicionArgs) => void;
  onAddVariante?: (numero: number) => void;
  onRemovePosicion?: (numero: number) => void;
  onRemoveVariante?: (numero: number, letra: string) => void;
}
```

**El componente sigue siendo presentacional puro.** No muta el
cuestionario: dispara callbacks con la info necesaria (qué tipo, dónde)
y el host (futuro ModuloEditor) decide cómo aplicarlo al modelo.

### 2.2 Elemento activo

Estado local `activa: number | null` (1-based: el `numero` de la posición
sobre la que el menú contextual operará).

- Se setea al click en la cabecera de una posición (el mismo handler
  que toggle expand/collapse).
- Se limpia con `Escape` o haciendo click en el `×` del menú.
- Si el host elimina la posición activa (cuestionario se reduce),
  `useEffect` la limpia automáticamente.

No se persiste en el state del host: la "sesión de inserción" es
transitoria. Si el docente quiere insertar 5 posiciones, hace 5 clicks
seguidos (el menú se mantiene abierto después de cada inserción si el
host no cierra la activa; hoy, el menú NO se cierra — eso lo decide el
host cuando reciba el callback).

### 2.3 Menú contextual

Cuando una posición está activa, aparece un panel ENTRE esa posición y
la siguiente (no la última, salvo que la activa sea la última). El panel
lista:

| Botón                          | Callback                                  |
|--------------------------------|-------------------------------------------|
| + Posición fija                | `onAddPosicion({ despuesDe: N, tipo: "fijo" })` |
| + Posición de pool             | `onAddPosicion({ despuesDe: N, tipo: "obligatorio" })` |
| + Posición de relleno          | `onAddPosicion({ despuesDe: N, tipo: "relleno" })` |
| + Variante aquí                | `onAddVariante(N)`                        |
| Quitar posición (si callback)  | `onRemovePosicion(N)`                     |

El aria-label del panel incluye el número de la posición activa y la
descripción del ancla ("entre la posición N y la N+1" o "al final
(después de la posición N)").

### 2.4 Inserción relativa al activo

- **Con activo N**: `onAddPosicion({ despuesDe: N, tipo })`. El host
  inserta una nueva posición entre N y N+1 y re-numera (la nueva pasa a
  ser N+1, las siguientes incrementan en 1). El plan ronda 7 listó
  renumeración como responsabilidad del host; `parseCuestionario` ya
  hace renumeración al re-parsear el JSON.
- **Sin activo (botón global)**: `onAddPosicion({ tipo: "fijo" })` (sin
  `despuesDe`). El host inserta al final.
- **Empty state**: si `posiciones.length === 0`, no hay menú contextual
  posible, pero sí un botón "+ Añadir posición" que invoca el callback
  sin args (host lo inserta como primera).

### 2.5 Decisión de UX: "+ Variante" sólo en el menú contextual

Considerado tener un botón "+ Variante" en cada fila de variante
expandida (paralelo al "Editar" / "Quitar"). Decisión: NO.

Razones:
1. **Una sola entrada de alta por nivel de anidación**: las acciones
   sobre una variante existente (editar, quitar) viven en la fila de la
   variante; la acción de AGREGAR una nueva vive en el menú de la
   posición. Coherente con el patrón "agregar contenido va en el menú
   contextual".
2. **Elimina ambigüedad de aria-label**: si cada variante tuviera su
   propio "+ Variante", habría N botones con el mismo
   `aria-label="Añadir variante a la posición N"` en el panel expandido,
   rompiendo la búsqueda por nombre accesible.
3. **El menú contextual es visible siempre que hay activo** — no se
   pierde UX. El docente que quiere agregar una variante siempre ve el
   botón (después de activar la posición).

Si en el futuro hace falta un atajo, se puede agregar como un quick-add
junto al caret del CodeEditor, no en la lista.

## 3. Cadena de propagación

| Capa | Archivo | Qué hace |
|------|---------|----------|
| Componente | `apps/web/src/components/modulos/PosicionesCanvas.tsx` (refactor) | Agrega 4 callbacks opcionales a `Props` y un menú contextual. Estado local `activa`. Sin mutación del cuestionario. |
| Spec | `apps/web/src/components/modulos/__tests__/PosicionesCanvas.spec.tsx` (refactor) | 11 tests nuevos (en el segundo `describe` del archivo) cubriendo empty state, menú, variantes, tipos de posición, Escape, cerrar, callbacks de quitar, ausencia cuando no hay callbacks. |
| Host (futuro) | `apps/web/src/components/modulos/ModuloEditor.tsx` (F4-03) | Wireado: traducir `onAddPosicion` a `setQuizzes(...insertarPosicionEn(despuesDe, tipo))` y `onAddVariante` a `setQuizzes(...insertarVarianteEn(numero))`. Renumerar `pos.numero` post-inserción (el modelo F3-01 ya lo hace en `parseCuestionario`). |

## 4. Tabla de casos canónicos

| Estado inicial (posiciones) | Activo | Acción del usuario | Callback invocado | Modelo resultante (host) |
|---|---|---|---|---|
| `[]` | — | Click "+ Añadir posición" (empty state) | `onAddPosicion({ tipo: "fijo" })` | `[{tipo:"fijo", numero:1, ...}]` |
| `[1, 2, 3]` | — | Click "+ Añadir posición" (global) | `onAddPosicion({ tipo: "fijo" })` | `[1, 2, 3, 4-fijo]` |
| `[1, 2, 3]` | 2 | Click "+ Posición fija" del menú | `onAddPosicion({ despuesDe: 2, tipo: "fijo" })` | `[1, 2, 4-fijo, 3→4, 4→5]` |
| `[1, 2, 3]` | 2 | Click "+ Posición de pool" del menú | `onAddPosicion({ despuesDe: 2, tipo: "obligatorio" })` | `[1, 2, 4-pool, 3→4, 4→5]` |
| `[1, 2, 3]` | 2 | Click "+ Posición de relleno" del menú | `onAddPosicion({ despuesDe: 2, tipo: "relleno" })` | `[1, 2, 4-relleno, 3→4, 4→5]` |
| `[1, 2, 3]` | 2 | Click "+ Variante aquí" del menú | `onAddVariante(2)` | `posicion[2].variantes.push(nuevaVariante)` |
| `[1, 2, 3]` | 2 | Click "Quitar posición" del menú | `onRemovePosicion(2)` | `[1, 3→2, 3→3]` |
| `[1, 2, 3]` | 2 | Click "Quitar variante b" de pos 2 | `onRemoveVariante(2, "b")` | `posicion[2].variantes = [a, c]` (letras no se renumeran) |
| `[1, 2, 3]` | 2 | `Escape` | (ninguno) | sin cambios; `activa = null` |
| `[1, 2, 3]` | 2 | Click × del menú | (ninguno) | sin cambios; `activa = null` |
| cualquier | (cambia) | Host elimina la posición activa | (de `useEffect`) | `activa = null` automáticamente |

Casos cubiertos por `PosicionesCanvas.spec.tsx` (segundo `describe`,
11 tests). El test "(b) la primera posición..." verifica el activo, los
11 tests verifican los callbacks.

## 5. Compatibilidad hacia atrás

- **Cero regresiones**: los 5 tests de F4-01 siguen pasando sin
  cambios. Las props nuevas son todas opcionales, y si ninguna se pasa,
  el menú contextual NO se renderiza (test "no renderiza ningún botón
  de alta si no se pasan callbacks").
- **Cero cambios al modelo F3-01**: la inserción la hace el host
  re-parseando con `parseCuestionario` (que renumera). El componente
  no toca `pos.numero` ni `pos.temaPrincipal`.
- **Cero cambios al storage**: el cuestionario se sigue guardando
  como `QuizVersion.settings.posiciones` (JSON), patrón F3-01.

## 6. Limitaciones conocidas

- **No wireado en ModuloEditor todavía**: el scope de F4-02 es el
  componente y la API. F4-03 (siguiente tarea) lo conecta al editor
  real. Mientras tanto, los callbacks no tienen destinatario en la
  página.
- **El menú no se cierra después de una inserción**. Decisión: lo cierra
  el host cuando quiera (típicamente, sí — el docente no quiere un menú
  abierto después de cada click). Pero como hoy no hay host, se queda
  abierto. Ver F4-03.
- **No hay "mover a" / drag-and-drop de reorden entre posiciones no
  adyacentes**: la única forma de mover entremedio sigue siendo
  ↑/↓ repetidos. El plan ronda 7 listó drag-and-drop como mejora
  posterior.
- **"B6" (variables estructuradas)**: la tarea menciona que el añadir
  podría listar funciones/tipos insertables. En el repo NO hay un
  "plan B6" documentado, y agregar funciones/tipos al menú requiere
  mucho trabajo (autocompletado, snippet templates por tipo, etc.). Lo
  dejamos fuera del scope F4-02. Si F4-03 o F4-04 lo pide, el menú
  contextual es el lugar natural para sumar un segundo `<details>` con
  el catálogo de `BUILTIN_NAMES` y `ALL_QUESTION_TYPES` de `@vb/vblang`.
- **No hay persistencia del activo en sessionStorage**: si el docente
  navega y vuelve, el menú se cierra. Es intencional: la "sesión de
  inserción" es transitoria.

## 7. Aceptación

- `pnpm test:web`: **456/456** (445 anteriores + 11 nuevos F4-02). 0
  fallidos. El `ECONNREFUSED` en el log de la suite es ruido de
  `MapaEditorFull.geojson.spec.tsx` (intenta fetch a `localhost:3000`
  que no existe en CI), no un test failure.
- Tests nuevos en `PosicionesCanvas.spec.tsx` (segundo `describe`,
  11 tests):
  - Empty state muestra "+ Añadir posición".
  - Click en empty state invoca `onAddPosicion({ tipo })` sin
    `despuesDe`.
  - Menú contextual aparece al activar y lista las 3 inserciones de
    posición + la de variante.
  - Click en "+ Variante aquí" del menú invoca `onAddVariante(N)`.
  - La posición del callback es la del activo, no otra.
  - `Escape` y el botón `×` cierran el menú.
  - Botón global "+ Añadir posición" al final se invoca sin
    `despuesDe`.
  - `Quitar posición` y `Quitar variante` invocan sus callbacks con
    los argumentos correctos.
  - Sin callbacks, ningún botón de alta se renderiza (no-regresión).
