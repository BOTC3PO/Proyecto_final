# Antropología — Dependencias entre temas

> Ver también [`../PROCEDIMIENTO.md`](../PROCEDIMIENTO.md) — el
> procedimiento completo (paso a paso, gotchas del DSL) que sigue todo
> tema nuevo, en cualquiera de las materias de `material/`.

Materia nueva, creada en esta sesión (confirmado con Javier), mismo
contexto que `../sociologia/dependencias.md` (nota v2.8 de `troncos.md`):
Antropología (cultura, diversidad, etnocentrismo) cuelga de
`Hominización` (`H10`, Tronco 8.b), que hoy narra el paso de primate a
Homo sin la herramienta conceptual de "cultura" que explica por qué ese
paso importa.

**Nota sobre la dependencia con `H10`**: `troncos.md` dibuja
`H10P --> ANTRO1a` (variante "Historia profunda" del nodo), pero
`material/historia/` todavía **no tiene una carpeta `hominizacion/`**
creada (no aparece en `../historia/dependencias.md`). Siguiendo el Paso 4
de `../PROCEDIMIENTO.md` ("Depende de: qué otras carpetas YA CREADAS
hacen falta antes"), no se linkea un path que no existe — se deja
constancia acá de la dependencia conceptual con el nodo `H10` del MAPA
para cuando esa carpeta se cree, y por ahora `cultura/` no lista
dependencia de carpeta previa.

**Decisión propia (no pedida, Paso 2): split en 3 carpetas**
(`cultura/`, `diversidad-cultural/`, `etnocentrismo/`), mismo criterio
que `../sociologia/dependencias.md`: el MAPA encadena los 3 nodos con
sub-IDs `a`/`b`/`c` en secuencia lineal (`ANTRO1a --> ANTRO1b -->
ANTRO1c`), señal de progresión de sub-temas, no una sola habilidad.

**Mantener esta tabla al día**: igual que en las otras materias, cada
carpeta de tema nueva agrega su fila antes de escribir teoría/cuestionario.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `cultura/` | *(ninguna carpeta creada — nodo `H10`/Hominización de Historia aún sin carpeta propia, ver nota arriba)* | Nodo `ANTRO1a` de `troncos.md` (`H10P --> ANTRO1a`). Primer nodo: qué es "cultura" en sentido antropológico (todo lo aprendido y transmitido socialmente — no sólo "cultura" en sentido de bellas artes) es el concepto base de toda la materia. |
| `diversidad-cultural/` | `cultura/` | Nodo `ANTRO1b` de `troncos.md` (`ANTRO1a --> ANTRO1b`). Que existan culturas distintas con costumbres, valores y normas propias presupone ya tener el concepto general de cultura — sin él, "diversidad cultural" es sólo "hay países distintos", no una idea antropológica. |
| `etnocentrismo/` | `diversidad-cultural/` | Nodo `ANTRO1c` de `troncos.md` (`ANTRO1b --> ANTRO1c`), cierre de la cadena. El etnocentrismo (juzgar otras culturas con la vara de la propia, como si la propia fuera la norma universal) sólo se entiende como error una vez que ya se aceptó que existe diversidad cultural real y legítima. |
| `subcampos-de-la-antropologia/` | *(ninguna — cuelga de `H10`, igual que `cultura/`)* | Nodo `ANTRO2` de `troncos.md` (`H10P --> ANTRO2`, agregado 2026-08-13). Clasificación de la disciplina (física, arqueológica, lingüística, social) — cuelga directo del mismo punto de entrada que `cultura/`, no de la cadena `ANTRO1a-c`. |
| `relaciones-de-parentesco/` | `diversidad-cultural/` | Nodo `ANTRO3` de `troncos.md` (`ANTRO1b --> ANTRO3`, agregado 2026-08-13). Los sistemas de parentesco son uno de los ejes clásicos donde se estudia la diversidad cultural ya vista. |
