# UX y Diseño de Interfaces — Dependencias entre temas

> Ver también [`../PROCEDIMIENTO.md`](../PROCEDIMIENTO.md) — el
> procedimiento completo (paso a paso, gotchas del DSL) que sigue todo
> tema nuevo, en cualquiera de las materias de `material/`.

Fuente: el Tronco 21 — UX y Diseño de Interfaces en `../../troncos.md` (diagrama mermaid, flechas `A --> B`).

**Mantener esta tabla al día**: cada carpeta de tema nueva agrega su
fila antes de escribir teoría/cuestionario.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `usabilidad-heuristicas-de-nielsen/` | `../arte/principios-de-diseno/` | `AR6a..j (Arte) --> UX1`. |
| `accesibilidad-wcag-contraste-lectores-de-pantalla/` | `usabilidad-heuristicas-de-nielsen/` | `UX1 --> UX2a --> UX2b/UX2c`. |
| `jerarquia-visual-e-informacion/` | `usabilidad-heuristicas-de-nielsen/`, `../comunicacion/teoria-de-la-comunicacion-emisor-receptor-canal-ruido/` | `UX1 --> UX3` y `CS1P --> UX3`. |
| `prototipado-wireframe-mockup-prototipo-interactivo/` | `jerarquia-visual-e-informacion/` | `UX3 --> UX4a --> UX4b --> UX4c`; además `ISW1P` (Requisitos, sin carpeta). |
| `pruebas-de-usuario/` | `prototipado-wireframe-mockup-prototipo-interactivo/` | `UX4c --> UX5`. |
| `heuristicas-de-nielsen-las-diez-completas/` | `usabilidad-heuristicas-de-nielsen/` | Completa las diez heurísticas de Nielsen (el tema existente presenta cuatro). Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). |
| `investigacion-de-usuarios-entrevistas-y-personas/` | `usabilidad-heuristicas-de-nielsen/`, `../investigacion/tecnicas-de-investigacion-social/` | Antes de diseñar hay que conocer a quién se diseña; usa las técnicas de investigación social ya vistas. Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). |
| `arquitectura-de-informacion-y-navegacion/` | `jerarquia-visual-e-informacion/` | Antes del aspecto visual hay que decidir qué hay, cómo se agrupa y cómo se nombra. Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). |
| `tipografia-en-interfaces/` | `jerarquia-visual-e-informacion/` | El tamaño y estilo de las fuentes es una de las herramientas de la jerarquía; ese tema anuncia este. Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). |
| `color-en-interfaces/` | `jerarquia-visual-e-informacion/`, `../arte/principios-de-diseno/` | Aplica los principios de color del arte y el contraste de la jerarquía visual con restricciones de accesibilidad. Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). |
| `niveles-wcag-a-aa-aaa-y-navegacion-por-teclado/` | `accesibilidad-wcag-contraste-lectores-de-pantalla/` | Completa la estructura del estándar y los requisitos de teclado que el tema base solo anuncia. Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). |
| `diseno-responsive-y-mobile-first/` | `prototipado-wireframe-mockup-prototipo-interactivo/` | Los wireframes y prototipos deben pensarse para varios tamaños de pantalla. Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). |
| `formularios-y-microinteracciones/` | `usabilidad-heuristicas-de-nielsen/` | Aplica prevención de errores, ayuda para recuperarse y visibilidad del estado a formularios. Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). |
| `sistemas-de-diseno-y-componentes/` | `prototipado-wireframe-mockup-prototipo-interactivo/`, `color-en-interfaces/`, `tipografia-en-interfaces/` | Reúne las decisiones de color y tipografía y los prototipos en una biblioteca compartida. Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). |
| `evaluacion-heuristica-y-metodos-sin-usuarios/` | `heuristicas-de-nielsen-las-diez-completas/` | Las diez heurísticas se usan como lista de verificación en una inspección. Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). |
| `analisis-de-datos-de-uso-y-metricas-ux/` | `pruebas-de-usuario/`, `../matematica/media-mediana-y-moda/` | Los datos de las pruebas se analizan con estadística básica; el tema base anuncia este análisis. Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). |
