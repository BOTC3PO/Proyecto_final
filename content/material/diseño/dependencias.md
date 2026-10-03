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
