# VBLang — Sugerencia de variables con IA (estado y reactivación)

## Estado actual: **desactivada**

La función "Sugerir con IA" del editor de plantillas (`PlantillaEditorSchema`)
se **quitó** porque dependía de una **API key central del servidor** (una key de
Anthropic compartida en el env del backend, vía `ANTHROPIC_API_KEY` /
`VBLANG_AI_MODEL`). Eso viola la regla del proyecto:

> La IA solo se permite si **(1)** es local sin depender del servidor, o
> **(2)** usa la **API key del propio usuario**, cargada en su perfil y
> guardada del lado del usuario. Nunca una key central/compartida.

Qué se removió:
- Endpoint `POST /api/vblang/suggest-variables` (`api/src/routes/vblang.ts`).
- Cliente `apps/web/src/domain/vblang/aiSuggest.ts`.
- El botón "✨ Sugerir con IA" y su sección en `PlantillaEditorSchema`.
- Helpers `readVariableNames` / `addVariablesFromSuggestions` de `plantillaFields`.

El editor **sigue funcionando sin IA**: las variables se declaran a mano (modo
Código, o los controles del formulario). No queda ningún camino de IA que use
una key central del servidor.

## Reactivación (post-expo): dos modos aceptables

Cualquiera de los dos debe cumplir: **el botón solo aparece si el usuario tiene
un modo configurado**; sin configuración → sin botón.

### Modo A — Local, sin servidor (Ollama)
- El cliente le pega directo a un LLM local (ej. Ollama en `http://localhost:11434`),
  sin backend ni key.
- **Limitación**: requiere que **cada usuario** corra Ollama. Realista solo como
  modo "dev/avanzado", no para profes/alumnos.
- **Cuidados**: CORS y *mixed-content* al pegarle a `localhost` desde el browser
  (la app suele servirse por HTTPS). Detectar disponibilidad y degradar si no responde.

### Modo B — API key del usuario (bring-your-own-key)
- Cada usuario carga **su propia** key de proveedor en **configuración de perfil**.
  Nunca una key central/hardcodeada/compartida.
- **Seguridad (la key es crítica):**
  - **Recomendado (seguro):** guardarla **server-side cifrada por-usuario** y
    proxear la llamada; la key **no toca el browser**.
  - **Si se guarda client-side** ("local") como variante pedida: asumir la
    exposición (devtools, red, XSS). Mitigaciones obligatorias: enmascarar en UI,
    **nunca** loguearla, **nunca** mandarla en URL/query, permitir rotar/borrar,
    y advertir al usuario del riesgo.
- En ambos casos: el feature solo se muestra si el usuario configuró su key.

## Si se reactiva
La forma de la salida estructurada que ya teníamos (tool use →
`{ variables: [{ nombre, expr, descripcion }] }`) y la validación de cada `expr`
con el parser real antes de insertarla siguen siendo el patrón correcto. Lo
único que cambia es **de dónde sale la credencial** (local / del usuario), nunca
una key central del servidor.
