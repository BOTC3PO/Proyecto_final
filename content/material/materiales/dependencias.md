# Ciencia de Materiales — Dependencias entre temas

> Ver también [`../PROCEDIMIENTO.md`](../PROCEDIMIENTO.md) — el
> procedimiento completo (paso a paso, gotchas del DSL) que sigue todo
> tema nuevo, en cualquiera de las materias de `material/`.

Fuente: el Tronco 19 — Ciencia de Materiales en `../../troncos.md` (diagrama mermaid, flechas `A --> B`).

**Mantener esta tabla al día**: cada carpeta de tema nueva agrega su
fila antes de escribir teoría/cuestionario.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `propiedades-mecanicas-dureza-tenacidad-ductilidad/` | `../ingenieria/resistencia-de-materiales/` | `ING8a/ING8b (Tensión, Compresión) --> CM1a..c --> CM1`. |
| `elasticidad-ley-de-hooke-modulo-de-young/` | `../fisica/trabajo-de-una-fuerza/` | `F7P --> CM2`. |
| `plasticidad-y-punto-de-fluencia/` | `elasticidad-ley-de-hooke-modulo-de-young/` | `CM2 --> CM3`. |
| `fatiga-y-fractura/` | `plasticidad-y-punto-de-fluencia/` | `CM3 --> CM4`. |
| `corrosion/` | `../quimica/oxidacion-reduccion/` | `QWP --> CM5`. |
| `familias-de-materiales-metales-ceramicos-polimeros-compuestos/` | `propiedades-mecanicas-dureza-tenacidad-ductilidad/` | `CM1 --> CM6a..d` (metales, cerámicos, polímeros, compuestos). |
