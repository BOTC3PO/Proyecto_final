# QA-FIX-10 — Selector de idioma del diccionario (idiomas reales del archivo)

## Contexto

QA-FIX-09 cerró el síntoma "500 opaco": un `SQLITE_PATH` apuntando al
RAW de Wiktionary ahora devuelve 503 con la causa accionable. Faltaba
lo último: el `lang` estaba **hardcodeado a `"es"`** en el front, así
que aunque el diccionario tuviera fr/la/pt/en/it, sólo se buscaba en
uno. El usuario no tenía cómo elegir.

## Decisión de diseño (ya tomada — implementar así)

- El selector se puebla desde un endpoint que devuelve los idiomas
  **REALES** del diccionario (`SELECT DISTINCT lang`), NO una lista
  fija de 127.
  - Razón: una lista fija ofrecería idiomas que el archivo no tiene →
    el usuario elige uno y no encuentra nada (el mismo bug, disfrazado).
  - Con los idiomas reales, el selector **nunca miente**.
- Los nombres legibles (fr → "Français", la → "Latín") SÍ salen de una
  tabla estática de códigos→nombre — eso es solo presentación, es
  seguro hardcodearlo. Para códigos no en la tabla: fallback al código
  tal cual, **nunca romper**.

## Investigación

### Estado previo

- `apps/web/src/services/diccionario.ts:19-46`: `lookupPalabra` y
  `prefixPalabra` con `lang = "es"` hardcodeado como default.
- `apps/web/src/components/vblang/PalabraCombobox.tsx`: invoca
  `fetchPrefix(q)` y `fetchLookup(q)` sin lang → caen al default "es".
- `apps/web/src/components/vblang/PlantillaEditorSchema.tsx:302, 369`:
  dos usos de `PalabraCombobox` (identificar_palabras directo, y
  analisis_sintactico vía `EtiquetaRowEditor`). Ninguno propaga lang.
- Back: `api/src/db/sqliteDictionary.ts:108-215` (detectSchema con
  `langCol`), `api/src/routes/dictionary.ts` (3 endpoints:
  health/lookup/prefix). Ninguno expone idiomas.

### Criterio canónico reusado

QA-FIX-09 ya validó el path "schema inválido → 503 con causa". El
nuevo endpoint `/api/dictionary/languages` reusa ese mismo trato:
- DB_KIND !== "sqlite" → 503 `{ error: "dictionary disabled" }`.
- Schema inválido (RAW/UNKNOWN/NO_TABLES/FILE_MISSING) → 503
  `{ code, error, languages: [] }`.
- Cualquier otro error → 500 con causa.

## Implementación

### Backend

**`api/src/db/sqliteDictionary.ts`** — método `languages()`:

```ts
private languagesStmt;
private languagesCache: string[] | null = null;

private prepareLanguages() {
  const { table, langCol } = this.schema;
  return this.db.prepare(
    `SELECT DISTINCT ${quoteIdent(langCol)} AS lang FROM ${quoteIdent(table)} ORDER BY ${quoteIdent(langCol)} ASC`
  );
}

languages(): string[] {
  if (this.languagesCache) return this.languagesCache;
  const rows = this.languagesStmt.all() as Array<{ lang: string | null }>;
  this.languagesCache = rows
    .map((r) => r.lang)
    .filter((c): c is string => typeof c === "string" && c.length > 0);
  return this.languagesCache;
}
```

- Statement preparado en el constructor (mismo patrón que lookup/prefix).
- Cache en memoria: los idiomas no cambian en runtime (sqlite readonly).
  Se invalida sólo si el singleton se reinstancia (test).
- `quoteIdent` defensivo (los nombres de tabla/columna pueden tener
  caracteres no estándar en builds custom).

**`api/src/routes/dictionary.ts`** — endpoint `GET /api/dictionary/languages`:

```ts
dictionary.get("/api/dictionary/languages", async (_req, res) => {
  const result = await getSqliteServiceIfEnabled();
  if ("disabled" in result) return res.status(503).json({ languages: [], error: "dictionary disabled" });
  if ("schemaError" in result) {
    const se = result.schemaError;
    return res.status(503).json({ languages: [], code: se.code, error: se.message });
  }
  if ("error" in result) return res.status(500).json({ languages: [], error: result.error });
  const service = result.service;

  const looked = safeOperation(() => service.languages());
  if (!looked.ok) {
    return res.status(500).json({ languages: [], error: looked.error });
  }
  return res.json({ languages: looked.value });
});
```

### Front

**`apps/web/src/services/diccionario.ts`** — fetch + tabla + helpers:

```ts
export const LANG_NAMES: Record<string, string> = {
  es: "Español", en: "English", pt: "Português", fr: "Français",
  it: "Italiano", de: "Deutsch", la: "Latín", ca: "Català",
  gl: "Galego", eu: "Euskara", nl: "Nederlands", ru: "Русский",
  zh: "中文", ja: "日本語", ar: "العربية"
};

export function displayLangName(code: string): string {
  return LANG_NAMES[code] ?? code;
}

export async function fetchLanguages(): Promise<string[] | null> {
  try {
    const data = await apiGet<{ languages: string[] }>(`/api/dictionary/languages`);
    return Array.isArray(data.languages) ? data.languages : null;
  } catch { return null; }
}

export function pickDefaultLang(languages: string[]): string {
  if (languages.length === 0) return "es";
  if (languages.includes("es")) return "es";
  return languages[0];
}
```

- `fetchLanguages` devuelve `null` ante error (503, 500, network).
  `[]` si la respuesta es válida pero vacía.
- `pickDefaultLang`: prefiere "es" si está, si no el primero. Si la
  lista está vacía, "es" como último recurso (compatibilidad con
  consumidores que ya asumían ese default).

**`apps/web/src/components/vblang/LangSelector.tsx`** — nuevo componente:

- Estados: `loading` (mientras fetchLanguages está en curso),
  `unavailable` (devolvió null o `[]`), `ready` (con el `<select>`).
- En `ready`: `<select>` poblado con `displayLangName(code) (code)`
  (ej. "Français (fr)"). Default: `pickDefaultLang` en la primera
  carga — pero **NO pisa** la elección del usuario si ya cambió el
  valor (track vía `userChanged`).
- En `unavailable`: muestra un mensaje claro con `role="status"`
  (anuncia a screen readers): "Diccionario no disponible. El
  autocompletado y la validación de palabras quedan deshabilitados."
- En `loading`: "Cargando idiomas…" con `aria-live="polite"`.
- `data-testid="lang-selector"` para tests.
- `aria-label` por defecto "Idioma del diccionario".
- `fetchLanguagesFn` inyectable para tests.

**`apps/web/src/components/vblang/PalabraCombobox.tsx`** — prop `lang`:

- Nueva prop `lang?: string` con default `"es"`.
- `fetchPrefix` y `fetchLookup` ahora reciben `(q, lang)`. El efecto
  debounced los llama con el lang actual; el efecto depende de `lang`
  para re-dispararse al cambiar de idioma.
- Type de las props `fetchPrefix/fetchLookup` actualizado a
  `(q|string, lang: string) => ...`. Las funciones inyectadas que
  ignoren el segundo arg siguen siendo válidas (subtipo de TypeScript).
- `LookupResult` re-exportado para los tests.

**`apps/web/src/components/vblang/PlantillaEditorSchema.tsx`** — wiring:

- `LangContext = createContext<string>("es")` a nivel módulo.
- `PlantillaEditorSchema` mantiene `const [lang, setLang] = useState("es")`.
- El JSX raíz se envuelve en `<LangContext.Provider value={lang}>`.
- `<LangSelector value={lang} onChange={setLang} />` se renderiza al
  tope del editor (antes de "Base de la pregunta"). El lang es
  transversal a todos los campos del template.
- `FieldControl` lee `useContext(LangContext)` y pasa `lang` al
  `PalabraCombobox` directo (identificar_palabras).
- `EtiquetaRowEditor` lee `useContext(LangContext)` y pasa `lang` a
  su `PalabraCombobox`.

Razón del Context (vs threading de prop): son 4 niveles
(PlantillaEditorSchema → FieldControl → EtiquetaRowEditor →
PalabraCombobox). El Context evita el prop drilling y mantiene
`FieldControl` con la misma firma actual.

## Tests

### Backend (3 archivos, 5 tests)

**`api/tests/integracion/dictionary-languages-words.test.ts` (3)**:
- words con fr/la/pt → 200 con `{ languages: ["fr","la","pt"] }`
  (orden alfabético, no orden de inserción).
- **Candado crítico**: por cada idioma devuelto, lookup debe
  encontrar la palabra esperada. Si `/languages` ofreciera un
  idioma sin entradas, este test lo detecta (selector nunca miente).
- 2 requests consecutivos son consistentes (cache funciona).

**`api/tests/integracion/dictionary-languages-raw.test.ts` (1)**:
- entries (RAW) → 503 con `code: "RAW_WIKTIONARY"` y mensaje
  accionable mencionando `build_dictionary_final`.

**`api/tests/integracion/dictionary-languages-unknown.test.ts` (1)**:
- tabla widgets (UNKNOWN_SCHEMA) → 503 con `code: "UNKNOWN_SCHEMA"`
  y mensaje listando `widgets`.

### Front (2 archivos, 10 tests)

**`apps/web/src/components/vblang/__tests__/LangSelector.spec.tsx` (8)**:
- "Cargando idiomas…" mientras el fetch está en curso.
- Pobla el `<select>` con los idiomas del endpoint + nombres
  legibles (Français, Latín).
- Fallback: código sin entrada en LANG_NAMES muestra el código tal
  cual (nunca rompe).
- Cambiar el `<select>` notifica onChange.
- Default automático: si `value` no es válido y la lista incluye
  "es", aplica "es". Si no, el primero.
- fetchLanguages devuelve `null` → "Diccionario no disponible".
- fetchLanguages devuelve `[]` → "Diccionario no disponible".

**`apps/web/src/components/vblang/__tests__/PalabraCombobox.spec.tsx` (+2)**:
- Pasa el `lang` a fetchPrefix/fetchLookup.
- Cambiar el `lang` re-dispara la consulta con el nuevo idioma.

## Aceptación

- `pnpm test:api` → **300/300** (de 295 → +5).
- `pnpm test:web` → **775/775** (de 765 → +10).
- 0 regresiones.
- Con un diccionario fr/la/pt, el selector ofrece esos tres y la
  búsqueda funciona en cada uno; ninguno ofrecido queda vacío.

## Cierre del tema diccionario

Con QA-FIX-09 + QA-FIX-10, el diccionario queda completo:

1. **Si el archivo es RAW o desconocido**: 503 con causa accionable
   (QA-FIX-09) — el operador sabe qué archivo es y qué correr.
2. **Si el archivo es válido**: el usuario elige entre los idiomas
   REALES del archivo (QA-FIX-10), no una lista hardcodeada.
3. **Búsqueda en cada idioma**: lookup/prefix funcionan para todos
   los idiomas servidos.

## Recordatorio operativo (no es código)

El `SQLITE_PATH` debe apuntar a un sqlite con tabla `words` (no al
RAW `entries`). El `Diccionario.sqlite` commiteado en el repo es el
RAW y NO sirve como diccionario servible — habría que correr
`install/build_dictionary_final.py` o cambiar el `SQLITE_PATH`.

## Notas

- **3 archivos de test separados** en lugar de 1 con 3 fixtures:
  Node's `import()` usa el ESM loader, cuyo cache interno no se
  puede limpiar con `delete Module._cache[key]` (eso sólo
  funciona para CJS). Cada archivo corre en su propio proceso
  (test runner aísla módulos), así el singleton del service se
  instancia una sola vez con el fixture correcto.
- **Cache de idiomas**: `languagesCache` se inicializa en el primer
  `languages()`. Como el sqlite es readonly, los idiomas no pueden
  cambiar en runtime. La invalidación se hace reinstanciando el
  singleton (`resetSqliteDictionaryService` exportado en QA-FIX-09).
- **`displayLangName` con fallback**: claves en `LANG_NAMES`
  cubiertas para el modelo real (es, en, pt, fr, it, la) más
  algunos comunes. Un código desconocido cae al código tal cual
  (ej. "oc (oc)"). Es seguro porque sólo es presentación; el
  endpoint real garantiza que el código existe en el archivo.
- **Context en vez de threading**: 4 niveles de componentes entre
  el state y el consumidor final. Context evita prop drilling y
  mantiene `FieldControl` con la misma firma externa.
