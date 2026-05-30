# IA en el editor — roadmap (Fase 5.5, post-expo)

> Opcional, después de la expo. Requiere la API de Anthropic y el system prompt
> de `docs/vblang/llm-system-prompt.md`. **No implementado**: se deja como
> issues etiquetados.

## Features propuestas

| Ref | Feature | Dónde | Notas |
|-----|---------|-------|-------|
| **A5 / DIFF-05** | "Generar con IA": describir el ejercicio en lenguaje natural y obtener un borrador de plantilla VBLang. | Editor VBLang (top bar, junto a "Ejemplos"). | Usa `llm-system-prompt.md` como system prompt; salida = DSL que pasa por el parser real antes de cargarse. |
| **V8** | "Sugerir con IA" en el bloque Variables: proponer variables/rangos a partir del enunciado. | Panel Variables del formulario. | Inserta declaraciones; el usuario revisa antes de aceptar. |
| **V9** | Autocompletado contextual al escribir `{` en el enunciado. | `CodeEditor`. | Sugiere variables existentes y funciones del catálogo. |
| — | UI para tipos especiales: `marcar_mapa`, `analisis_sintactico`, `identificar_palabras`. | Formulario visual (selector de tipo). | Hoy el parser los soporta; falta UI dedicada. |

## Requisitos técnicos

- Backend: endpoint proxy a la API de Anthropic (no exponer la API key al
  cliente); rate-limit y caché de prompts.
- Prompt caching del system prompt (`llm-system-prompt.md`) para abaratar.
- Validación: toda salida de IA se compila con el parser VBLang real antes de
  aplicarse — la IA nunca escribe directo sin validar.

## Aceptación

N/A (roadmap). Convertir cada fila en un issue etiquetado `ia` / `post-expo`.
