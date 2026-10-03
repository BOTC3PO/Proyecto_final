# Dibujo Técnico — Dependencias entre temas

> Ver también [`../PROCEDIMIENTO.md`](../PROCEDIMIENTO.md) — el
> procedimiento completo (paso a paso, gotchas del DSL) que sigue todo
> tema nuevo, en cualquiera de las materias de `material/`.

Fuente: el Tronco 14 (Dibujo Técnico y Arquitectura) en `../../troncos.md` (diagrama mermaid, flechas `A --> B`).
Las dependencias con `../` apuntan a otra materia (documentación; el
script de `examen-jefe` las ignora). Se usa para ordenar los temas por
conocimientos previos al armar los clusters de examen-jefe.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `sistemas-de-proyeccion/` | `../matematica/rectas-paralelas-y-perpendiculares/` | Nodos `DT1a`/`DT1b`/`DT1c` (ortogonal, axonométrica, oblicua), fusionados en una carpeta: `GA6 --> DT1x`. Raíz dentro de Dibujo Técnico. |
| `vistas-frontal-superior-lateral/` | `sistemas-de-proyeccion/` | Nodos `DT2a`/`DT2b`/`DT2c` (`DT1a --> DT2x`). |
| `perspectivas-isometrica-y-caballera/` | `vistas-frontal-superior-lateral/`, `../matematica/teorema-de-pitagoras/` | Nodo `DT3` (`DT2a/b/c --> DT3`, `M6 --> DT3`). |
| `escalas-numericas-y-graficas/` | `perspectivas-isometrica-y-caballera/` | Nodo `DT4` (`DT3 --> DT4`). |
| `acotacion-normalizada/` | `escalas-numericas-y-graficas/` | Nodo `DT5` (`DT4 --> DT5`). |
