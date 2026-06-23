# editor/ — Editor de plantillas reconstruido (División 2)

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
`Badge`, `Alert`). No se reescribe el DSL ni se tocan las entrañas del viejo.

## Qué cubre este slice (D2)

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

## Qué falta (D3+)

Los fields ricos se preservan read-only (se listan en "Bloques preservados")
para no romper el round-trip. Pendientes para divisiones siguientes:

- **Base generador** — `GeneradorPicker`, variables provistas, dificultad.
- **Variables** — editor de variables (`VariablesEditor`).
- **Visual** — imagen PNG, gráficos, latex, timeline.
- **Mapa avanzado** — encuadre, respuesta_nombre (el `mapa` enum básico sí
  está en D2).
- **Pistas escalonadas** (`pistas:` plural), **restricciones**, **explicación**.
- **Etiquetas** (lista `{palabra, etiqueta}` con diccionario), **dataset**.
- **Errores de lint inline** (`FieldErrorBadge`), **validación**.
- **Subida de media** (`uploadPng`).

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
default cuando el nuevo madure (D3+ cubra los fields ricos).

## Swap final (cuando toque)

1. Completar los fields ricos en `editor/` (D3+).
2. Validar paridad feature-a-feature con el viejo (incluye los specs de
   `components/vblang/__tests__/`).
3. Cambiar el default del flag (o eliminar el viejo del montaje).
4. Migrar los demás puntos de montaje del editor (ej. `NuevaPlantillaWizard`).

## Átomos usados / faltantes

Usados de `ui/`: `Field`, `Input`, `Textarea`, `Select`, `Switch`, `Button`,
`Card`, `Badge`, `Alert`. No hizo falta inventar átomos nuevos para este
slice. Si D3+ necesita uno (ej. un `Popover`/`Menu` para el diccionario de
etiquetas, o `Tabs` para la navegación rica), se agregará a `ui/` siguiendo el
molde de `primitivos.md`.

## Verificación

- `tsc -b` sin errores nuevos en `editor/` ni `ui/`.
- `eslint src/editor src/ui` → 0 errores.
- El editor viejo no se modifica; `PlantillaEditorSchema` sigue intacto.
- Todo en `editor/` consume primitivos/tokens; cero hardcodeo; multi-tema intacto.
