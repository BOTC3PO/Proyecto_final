# editor/ — Editor de plantillas reconstruido (D2 + D3 + D4 + D5 · paridad)

Reconstrucción *strangler* del editor de plantillas VBLang sobre los
primitivos de `ui/`. **Misma interfaz** que el editor viejo
(`components/vblang/PlantillaEditorSchema`). Con **D5 se alcanzó paridad** y el
editor nuevo pasó a ser el **default**; el viejo queda accesible por flag
inverso (`?editorClasico=1`) hasta su retiro.

```tsx
import EditorPlantilla from "@/editor/EditorPlantilla";

<EditorPlantilla plantilla={ast} onChange={handleChange} />
```

## Por qué carpeta nueva

El editor viejo (`PlantillaEditorSchema.tsx`, ~2332 líneas, ~30 fields) es lo
que peor se ve y lo más caro de tocar in-place. Acá se reconstruye la UI
**reutilizando la capa de datos** (`plantillaAst.ts` / `plantillaFields.ts` /
`exprParse.ts` — lógica pura, sin React) y montándola sobre los átomos del
rediseño (`Field`, `Input`, `Textarea`, `Select`, `Switch`, `Button`, `Card`,
`Badge`, `Alert`, `Checkbox`). No se reescribe el DSL ni se tocan las entrañas
del viejo.

## Qué cubre D2 (shell + campos core)

**Shell + campos core**, suficientes para autorar una pregunta básica y
persistirla:

- **Tipo de pregunta** — `Select` sobre `ALL_QUESTION_TYPES`; reusa `applyTipo`
  para rearma el esqueleto al cambiar de tipo.
- **Enunciado** — `Textarea` con interpolación `{var}` (reusa
  `readTextField`/`writeTextField` + `textToPartes`); variantes (`enunciados:`
  plural) con add/remove/convertir; chips de variables declaradas que insertan
  `{nombre}` en la posición del caret.
- **Respuesta según tipo** — renderer genérico (`FieldControl`) para
  text/number/bool/enum sobre `BufferedText`/`Select`/`Switch`; reusa los
  `read*`/`write*` de `plantillaFields`.
- **Opciones / ítems (MC, completar, ordenar)** — `OpcionesField` para listas
  de strings (`readListStrings`/`writeListStrings`).
- **Puntaje + pista (metadata)** — `BufferedText` numérico + texto; reusa
  `readPuntaje`/`writePuntaje`/`readPista`/`writePista`.

## Qué cubre D3 (campos ricos)

- **Variables** — `VariablesField`: declaración de variables (nombre, tipo,
  rango/valores). Cada variable en un `Card` flat con `Input`/`Select`/`Badge`.
  Reusa `addVariable`/`updateVariable`/`removeVariable`/`classifyVariable` de
  `plantillaFields` y `inferTipoVar`/`formatValor` del editor viejo.
- **Visual** — `VisualField`: selector de kind + editores:
  - `static-image` (PNG) con `uploadPng` (subida + preview).
  - `line-chart`, `timeline`, `latex`, `vector-diagram`, `circuit`.
  Reusa `readVisualRaw`/`writeVisualRaw`/`readVisualKind` de `plantillaAst` y
  `readStaticImage`/`writeStaticImage`/`removeVisual` de `plantillaFields`.
- **Explicación** — `ExplicacionField`: texto interpolable, reusa
  `readExplicacion`/`writeExplicacion`.
- **Restricciones** — `RestriccionesField`: lista de fórmulas, reusa
  `readRestricciones`/`writeRestricciones`.
- **Pistas escalonadas** — `PistasField`: lista ordenada interpolable, reusa
  `readPistas`/`writePistas`.

## Qué cubre D4 (subsistemas)

Reconstruye el **chrome** de tres subsistemas sobre primitivos, **reusando la
lógica y los componentes existentes** (no se reescriben):

- **Base generador** — `GeneradorField`: monta el `GeneradorPicker` viejo (tal
  cual) + control de **dificultad** (`readDificultad`/`writeDificultad`,
  `metadata: dificultad`). Reusa `applyGenerador` para mutar el AST (barre
  variables/respuesta que el generador provee). Un toggle "Base de la pregunta"
  alterna entre `tipo` (`applyTipo`) y `generador`. Las variables provistas por
  el generador se insertan en el enunciado vía el handle imperativo de
  `EnunciadoField` (`insert`). Reemplaza el Alert "usá el editor clásico".
- **Mapa avanzado** — `MapaField`: mapa (enum) escrito **preservando el
  encuadre**, respuesta por `modoRespuesta` (iso/nombre — el modo se deriva de
  qué clave existe; el toggle intercambia `respuesta_iso` ↔ `respuesta_nombre`)
  y **encuadre** (WO-10, `readEncuadre`/`writeEncuadre`, vista bloqueada). Sólo
  para `tipo: marcar_mapa`; reemplaza el render genérico de `mapa`/`respuesta_iso`.
- **Dataset** — `DatasetField`: autorea el bloque `dataset:` (input + bloque
  vía `withBlock`/`withoutBlock`) y reusa el `DatasetExplorer` (sin tocar) como
  popover de browse de los nombres disponibles (vía `datasetApi.listDatasets`).

`generador` y `dataset` salen de "preservados" (`V2_EDITS`); round-trip
idempotente verificado en `__tests__/d4-roundtrip.spec.ts`.

## Qué cubre D5 (etiquetas + diccionario, lint inline · paridad)

- **Etiquetas + diccionario** — `EtiquetasField`: lista de pares
  `{palabra, etiqueta}` (análisis sintáctico) **reusando** `AccessibleList`,
  `PalabraCombobox` (autocompletado + validación contra el diccionario),
  `CATEGORIAS_GRAMATICALES`/`sugerirCategoriaGramatical` y
  `readEtiquetas`/`writeEtiquetas`. El idioma sale del `LangSelector` reusado vía
  `LangContext` (compartido también con las respuestas-palabra de
  `identificar_palabras` en `OpcionesField`). `etiquetas_pedidas` sale de
  preservados (`V2_EDITS`).
- **Lint inline (transversal)** — el editor corre el validador (`lint`,
  generador-aware) y mapea cada issue al campo culpable con `lintFieldMap`/
  `buildFieldErrors` (reusados). El mapa viaja por `LintContext`; cada campo lee
  su error y lo pasa a `Field.error` (controles únicos) o lo muestra por índice
  en listas (`enunciados.<i>`, `pistas.<i>`). `BufferedText` aceptó un
  `externalError` para el lint sin pisar el error de parseo local. `LintPanel`
  muestra el resumen (≈ `ErrorPanel`, sin quick-fixes/ir-a-línea, que viven en
  el modo código). Verificado en `__tests__/d5-paridad.spec.tsx`.

**Paridad alcanzada**: el editor nuevo cubre todos los tipos + generador + mapa
+ dataset + etiquetas + lint. Pendiente sólo el modo código (no es del form):
los quick-fixes/ir-a-línea del `ErrorPanel` siguen en la página de código.

## Archivos

| Archivo                          | Rol                                                       |
| -------------------------------- | --------------------------------------------------------- |
| `EditorPlantilla.tsx`            | Raíz drop-in `{ plantilla, onChange }`. Shell + secciones. |
| `Section.tsx`                    | Composite de shell (Card + título + cuerpo).              |
| `FieldGroup.tsx`                 | Grupo etiquetado para multi-control (listas, chips).      |
| `BufferedText.tsx`               | Input/Textarea con buffer (no clobber durante round-trip).|
| `fields/TipoSelector.tsx`        | Selector de tipo.                                         |
| `fields/EnunciadoField.tsx`      | Enunciado simple + variantes + chips de variables.        |
| `fields/FieldControl.tsx`        | Renderer genérico text/number/bool/enum.                  |
| `fields/OpcionesField.tsx`       | Lista de strings (opciones/ítems/respuestas válidas).     |
| `fields/PuntajePistaField.tsx`   | Puntaje + pista (metadata).                               |
| `fields/VariablesField.tsx`      | D3: editor de variables (cards editables).                |
| `fields/VisualField.tsx`         | D3: visual dispatcher + sub-editores por kind.            |
| `fields/ExplicacionField.tsx`    | D3: explicación (texto interpolable).                     |
| `fields/RestriccionesField.tsx`  | D3: restricciones (lista de fórmulas).                    |
| `fields/PistasField.tsx`         | D3: pistas escalonadas (lista ordenada).                  |
| `fields/GeneradorField.tsx`      | D4: base generador (picker reusado + dificultad).         |
| `fields/MapaField.tsx`           | D4: mapa + respuesta (iso/nombre) + encuadre.             |
| `fields/DatasetField.tsx`        | D4: bloque `dataset:` + DatasetExplorer reusado.          |
| `fields/EtiquetasField.tsx`      | D5: pares palabra→etiqueta + PalabraCombobox/diccionario. |
| `LangContext.ts`                 | D5: idioma del diccionario (compartido por comboboxes).   |
| `LintContext.ts`                 | D5: mapa `fieldId → issues` (lint por campo).             |
| `LintPanel.tsx`                  | D5: resumen de validación (≈ ErrorPanel del form).        |
| `useEditorClasico.ts`            | Flag de convivencia (nuevo = default; viejo por flag).    |

## Flag de swap (convivencia) — D5: volteado

El editor nuevo es el **default**; el viejo queda accesible por flag inverso.
La lógica vive en `editor/useEditorClasico.ts` y la consumen los dos montajes
(`components/modulos/VarianteEditor.tsx` y `pages/PlantillaEditor.tsx`):

- **Default (sin flag):** editor nuevo (`EditorPlantilla`).
- **`?editorClasico=1` (o `?editorV2=0`):** editor viejo (`PlantillaEditorSchema`).

```ts
export function useEditorClasico(): boolean {
  if (typeof window === "undefined") return false;
  const p = new URLSearchParams(window.location.search);
  return p.get("editorClasico") === "1" || p.get("editorV2") === "0";
}
```

Aditivo y reversible: el viejo no se modifica ni se elimina todavía; el flag
inverso permite desbloquear una regresión sin redeploy.

## Retiro del editor viejo (siguiente paso, fuera de D5)

1. Ventana de convivencia con el flag inverso disponible (monitorear regresiones).
2. Migrar el último montaje pendiente si aplica (`NuevaPlantillaWizard` arranca
   plantillas nuevas; hoy no monta el form inline).
3. Eliminar `PlantillaEditorSchema` y el flag inverso; mover a `editor/` los
   helpers aún importados del viejo (`inferTipoVar`/`formatValor`).

## Átomos usados

Usados de `ui/`: `Field`, `Input`, `Textarea`, `Select`, `Switch`, `Button`,
`Card`, `Badge`, `Alert`, `Checkbox`, `RadioGroup`/`Radio`. D4/D5 no necesitaron
átomos nuevos: los componentes reusados (`GeneradorPicker`, `DatasetExplorer`,
`PalabraCombobox`, `LangSelector`, `AccessibleList`) traen su propio markup.

## Verificación

- `tsc -b` sin errores nuevos en `editor/` ni `ui/`.
- `eslint src/editor src/ui` → 0 errores.
- El editor viejo no se modifica; `PlantillaEditorSchema` sigue intacto y
  accesible por `?editorClasico=1`.
- Round-trip idempotente (D4: `d4-roundtrip.spec.ts`; D5: `d5-paridad.spec.tsx`).
- Todo en `editor/` consume primitivos/tokens; cero hardcodeo; multi-tema intacto.
