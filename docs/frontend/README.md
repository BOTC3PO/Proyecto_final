# Documentación del frontend

Documentación técnica de la web (`apps/web`, React 19 + Vite 7 + TypeScript), derivada del código
real de `apps/web/src`. Última actualización: 2026-05-30.

| Documento | Contenido |
|---|---|
| [`overview.md`](./overview.md) | App shell, routing (ruta → page → layout), capa `services` (→ endpoints), capa `domain`, auth y estado del usuario. |
| [`editor-bloques.md`](./editor-bloques.md) | Editor de bloques de contenido (texto, LaTeX, tabla, chart, flow, math, shape, image), DSL de tablas, canvas de formas y arquitectura del `bookEditor`. **Extiende** [`../book-editor.md`](../book-editor.md). |
| [`generadores.md`](./generadores.md) | Arquitectura de `generadoresV2` (core/basic/por materia) y adapters VBLang web. Reusa el catálogo de [`../audits/generated/`](../audits/generated/) y enlaza a [`../vblang/`](../vblang/). |
| [`calculador.md`](./calculador.md) | Subsistema calculador (scaffold) y la calculadora de física activa en `generadoresV2/fisica`. |

> Relacionado: contrato de la API en [`../backend/`](../backend/); accesibilidad en
> [`../accesibilidad/`](../accesibilidad/).
