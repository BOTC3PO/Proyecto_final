# FIX-DICT-SELECTOR — Selector de idioma del diccionario con catálogo completo

## Contexto
QA-FIX-10 implementó el BACKEND (`GET /api/dictionary/languages` con los idiomas reales del archivo, vía `SELECT DISTINCT`) y la INFRAESTRUCTURA del front (`fetchLanguages`, `LANG_NAMES`, `displayLangName`, `pickDefaultLang`, y `lang` como prop de `PalabraCombobox`). PERO:
- `LANG_NAMES` tenía solo 15 idiomas hardcodeados.
- El diccionario puede tener cualquiera de las 198 ediciones de Wiktionary.
- Un código presente en el diccionario pero no en los 15 hardcodeados caía al fallback (mostraba el código crudo "oc" en vez de "occitan").

## El modelo correcto (3 capas — respetar la separación)
1. **Qué idiomas EXISTEN en este diccionario** → lo decide el SQL `SELECT DISTINCT lang` (endpoint `/api/dictionary/languages`, ya hecho en QA-FIX-10). El que crea el diccionario tiene poder sobre esto: si sembró fr/la/pt, esos son los activos.
2. **Cómo se MUESTRAN** → el JSON de 198 ediciones da el nombre legible de cada código (`fr` → "français"). Catálogo estático de presentación.
3. **Cuál se USA** → el selector, poblado con (1), mostrando nombres de (2).

El selector ofrece SOLO los idiomas reales del diccionario (1), nunca los 198 — esos son solo para traducir el código a nombre.

## Investigación

### Estado previo
- `apps/web/src/services/diccionario.ts:61-77`: `LANG_NAMES` hardcodeado con 15 idiomas (`es, en, pt, fr, it, de, la, ca, gl, eu, nl, ru, zh, ja, ar`).
- `apps/web/src/components/vblang/LangSelector.tsx`: componente ya creado en QA-FIX-10, renderizado en `PlantillaEditorSchema.tsx:601`.
- `api/src/base/wiktionary-editions.json`: catálogo de 198 ediciones, formato `{ "aa": { "english": "Qafár af", "local": "Afar", "url": "..." }, ... }`.

### Decisión: `english` vs `local`
El JSON tiene dos campos por edición:
- `english`: nombre **nativo/local** del idioma (ej. `fr` → "français")
- `local`: nombre en **inglés** del idioma (ej. `fr` → "French")

El naming es confuso pero los datos son claros. **Decisión**: usar `english` (nombre nativo) porque es lo que el usuario ve en la UI de su propio idioma — ej. un hispanohablante prefiere "français" sobre "French" para el francés. Esto coincide con lo que el usuario pidió: "fr → 'Français'".

## Fix

### 1. Copiar el JSON al front
- `api/src/base/wiktionary-editions.json` → `apps/web/src/data/wiktionary-editions.json` (22.7KB, 198 entradas).

### 2. Reemplazar `LANG_NAMES` hardcodeado
`apps/web/src/services/diccionario.ts`:

```ts
import wiktionaryEditions from "../data/wiktionary-editions.json";

type WiktionaryEdition = {
  english: string;
  local: string;
  url: string;
};

const EDITIONS = wiktionaryEditions as Record<string, WiktionaryEdition>;

export const LANG_NAMES: Record<string, string> = Object.fromEntries(
  Object.entries(EDITIONS).map(([code, edition]) => [code, edition.english])
);
```

`displayLangName` sigue con fallback al código (sin cambios):
```ts
export function displayLangName(code: string): string {
  return LANG_NAMES[code] ?? code;
}
```

### 3. El selector ya estaba renderizado
`PlantillaEditorSchema.tsx:601` ya renderiza `<LangSelector value={lang} onChange={setLang} />`. El `lang` se pasa a `PalabraCombobox` vía `LangContext`. No requirió cambios adicionales.

## Tests (3 nuevos + 1 actualizado)

**`apps/web/src/components/vblang/__tests__/LangSelector.spec.tsx`**:
1. **displayLangName devuelve el nombre nativo** para idiomas del JSON: `fr → "français"`, `la → "latina"`, `es → "español"`, `pt → "português"`.
2. **displayLangName cae al código** para idiomas no en el JSON: `xx → "xx"`, `zz → "zz"`.
3. **LANG_NAMES tiene 198 entradas** (las ediciones de Wiktionary).
4. **Candado crítico del diseño de 3 capas**: el selector ofrece SOLO los idiomas del endpoint (3), NO los 198 del catálogo.

**Test actualizado** (el de "pobla el <select> con los idiomas del endpoint y muestra el nombre legible"):
- Antes esperaba `/Français/` (hardcode con capital). Ahora verifica lowercase `/français/` (valor del JSON).
- El test de fallback cambió de `"oc"` (que SÍ está en el JSON) a `"xx"` (que NO está).

## Aceptación
- `pnpm test:web` → **781/781** (de 777 → +4).
- `pnpm test:api` → 305/305 (sin cambios).
- 0 regresiones.
- El selector ofrece los idiomas reales del diccionario cargado.
- `LANG_NAMES` cubre los 198 idiomas de Wiktionary.
- Un código presente en el diccionario pero no en el JSON → muestra el código (fallback), no rompe.

## Fuera de alcance (anotado para versión posterior)
- **i18n de la página entera**: Javier señala que la UI está solo en español y convendría traducirla vía un archivo de traducción. Es un trabajo aparte (internacionalización de toda la app, no solo el diccionario) — NO entra en esta tarea. Se documenta como mejora futura: estructura de traducción (i18n) que permita cambiar el idioma de la interfaz, no solo del contenido del diccionario.
