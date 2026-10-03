# Electrónica — Dependencias entre temas

> Ver también [`../PROCEDIMIENTO.md`](../PROCEDIMIENTO.md) — el
> procedimiento completo (paso a paso, gotchas del DSL) que sigue todo
> tema nuevo, en cualquiera de las materias de `material/`.

Fuente: el Tronco 17 (Electrónica) en `../../troncos.md` (diagrama mermaid, flechas `A --> B`).
Las dependencias con `../` apuntan a otra materia (documentación; el
script de `examen-jefe` las ignora). Se usa para ordenar los temas por
conocimientos previos al armar los clusters de examen-jefe.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `componentes-resistencia-capacitor-diodo-transistor/` | `../fisica/circuitos-mixtos/` | Nodos `EL1a`-`EL1d` (resistencia, capacitor, diodo, transistor), fusionados en una carpeta: `FIS9 --> EL1x`. Raíz dentro de Electrónica. |
| `circuitos-y-leyes-de-kirchhoff/` | `componentes-resistencia-capacitor-diodo-transistor/` | Nodo `EL2` (`EL1a-d --> EL2`). |
| `logica-digital-puertas-and-or-not/` | `circuitos-y-leyes-de-kirchhoff/`, `../informatica/algebra-booleana/` | Nodo `EL3` (`EL2 --> EL3`, `I2 --> EL3`). |
| `microcontroladores-y-microprocesadores/` | `logica-digital-puertas-and-or-not/`, `../informatica/estructuras-de-control-bucles/` | Nodo `EL4` (`EL3 --> EL4`, `IN4 --> EL4`). |
| `sensores-y-actuadores/` | `microcontroladores-y-microprocesadores/` | Nodo `EL5` (`EL4 --> EL5`). |
