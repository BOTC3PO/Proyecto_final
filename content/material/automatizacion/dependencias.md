# Automatización — Dependencias entre temas

> Ver también [`../PROCEDIMIENTO.md`](../PROCEDIMIENTO.md) — el
> procedimiento completo (paso a paso, gotchas del DSL) que sigue todo
> tema nuevo, en cualquiera de las materias de `material/`.

Fuente: el Tronco 20 — Sistemas de Control y Automatización en `../../troncos.md` (diagrama mermaid, flechas `A --> B`).

**Mantener esta tabla al día**: cada carpeta de tema nueva agrega su
fila antes de escribir teoría/cuestionario.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `lazo-abierto-vs-lazo-cerrado/` | `../electronica/sensores-y-actuadores/` | `EL5P --> CTRL1`. |
| `realimentacion-feedback/` | `lazo-abierto-vs-lazo-cerrado/` | `CTRL1 --> CTRL2`. |
| `control-pid-proporcional-integral-derivativo/` | `realimentacion-feedback/` | `CTRL2 --> CTRL3a --> CTRL3b --> CTRL3c`: P, I y D en un solo módulo. |
| `plc-logica-de-control-industrial/` | `../informatica/estructuras-de-control-condicionales/`, `../informatica/estructuras-de-control-bucles/` | `IN3P/IN4P --> CTRL4`. |
| `servomecanismos/` | `control-pid-proporcional-integral-derivativo/` | `CTRL3c --> CTRL5`. |
