# editor/ — Editor de plantillas reconstruido (D2 + D3 + D4)

Reconstrucción *strangler* del editor de plantillas VBLang sobre los
primitivos de `ui/`. **Misma interfaz** que el editor viejo
(`components/vblang/PlantillaEditorSchema`), montada detrás de un flag —
convive en paralelo, el viejo sigue siendo el default.

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

## Qué falta (D5)

Los fields que siguen preservados read-only, pendientes para la última división:

- **Etiquetas** — lista `{palabra, etiqueta}` con diccionario (`PalabraCombobox`,
  `LangSelector`).
- **Errores de lint inline** (`FieldErrorBadge`), **validación**.

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

## Flag de swap (convivencia)

El montaje está en `components/modulos/VarianteEditor.tsx` (`PlantillaInlineEditor`):

- **Default (sin flag):** editor viejo (`PlantillaEditorSchema`).
- **`?editorV2=1` en la URL:** editor nuevo (`EditorPlantilla`).

```ts
function useEditorV2Flag(): boolean {
  return new URLSearchParams(window.location.search).get("editorV2") === "1";
}
```

Aditivo y reversible: el editor viejo no se modifica ni se elimina; cambia el
default cuando el nuevo madure (D5 cubra etiquetas + diccionario y el lint).

## Swap final (cuando toque)

1. Completar lo que falta en `editor/` (D5: etiquetas + lint inline).
2. Validar paridad feature-a-feature con el viejo (incluye los specs de
   `components/vblang/__tests__/`).
3. Cambiar el default del flag (o eliminar el viejo del montaje).
4. Migrar los demás puntos de montaje del editor (ej. `NuevaPlantillaWizard`).

## Átomos usados / faltantes

Usados de `ui/`: `Field`, `Input`, `Textarea`, `Select`, `Switch`, `Button`,
`Card`, `Badge`, `Alert`, `Checkbox`, `RadioGroup`/`Radio`. D4 no necesitó
átomos nuevos (el `GeneradorPicker`/`DatasetExplorer` reusados traen su propio
markup). Si D5 necesita uno (ej. un `Popover`/`Menu` para el diccionario de
etiquetas, o `Tabs` para la navegación rica), se agregará a `ui/` siguiendo el
molde de `primitivos.md`.

## Verificación

- `tsc -b` sin errores nuevos en `editor/` ni `ui/`.
- `eslint src/editor src/ui` → 0 errores.
- El editor viejo no se modifica; `PlantillaEditorSchema` sigue intacto.
- Todo en `editor/` consume primitivos/tokens; cero hardcodeo; multi-tema intacto.
