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

**Nota sobre la dependencia con `H10`**: `troncos.md` dibuja `H10P --> ANTRO1a`. Ya existe la carpeta `../historia-profunda/hominizacion/`, así que `cultura/` y `subcampos-de-la-antropologia/` la listan como prerrequisito.

**Decisión propia (no pedida, Paso 2): split en 3 carpetas**
(`cultura/`, `diversidad-cultural/`, `etnocentrismo/`), mismo criterio
que `../sociologia/dependencias.md`: el MAPA encadena los 3 nodos con
sub-IDs `a`/`b`/`c` en secuencia lineal (`ANTRO1a --> ANTRO1b -->
ANTRO1c`), señal de progresión de sub-temas, no una sola habilidad.

**Mantener esta tabla al día**: igual que en las otras materias, cada
carpeta de tema nueva agrega su fila antes de escribir teoría/cuestionario.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `cultura/` | `../historia-profunda/hominizacion/` (Hominización) | Nodo `ANTRO1a` de `troncos.md` (`H10P --> ANTRO1a`). Primer nodo: qué es "cultura" en sentido antropológico (todo lo aprendido y transmitido socialmente — no sólo "cultura" en sentido de bellas artes) es el concepto base de toda la materia. |
| `diversidad-cultural/` | `cultura/` | Nodo `ANTRO1b` de `troncos.md` (`ANTRO1a --> ANTRO1b`). Que existan culturas distintas con costumbres, valores y normas propias presupone ya tener el concepto general de cultura — sin él, "diversidad cultural" es sólo "hay países distintos", no una idea antropológica. |
| `etnocentrismo/` | `diversidad-cultural/` | Nodo `ANTRO1c` de `troncos.md` (`ANTRO1b --> ANTRO1c`), cierre de la cadena. El etnocentrismo (juzgar otras culturas con la vara de la propia, como si la propia fuera la norma universal) sólo se entiende como error una vez que ya se aceptó que existe diversidad cultural real y legítima. |
| `subcampos-de-la-antropologia/` | `../historia-profunda/hominizacion/` (Hominización) | Nodo `ANTRO2` de `troncos.md` (`H10P --> ANTRO2`, agregado 2026-08-13). Clasificación de la disciplina (física, arqueológica, lingüística, social) — cuelga directo del mismo punto de entrada que `cultura/`, no de la cadena `ANTRO1a-c`. |
| `relaciones-de-parentesco/` | `diversidad-cultural/` | Nodo `ANTRO3` de `troncos.md` (`ANTRO1b --> ANTRO3`, agregado 2026-08-13). Los sistemas de parentesco son uno de los ejes clásicos donde se estudia la diversidad cultural ya vista. |
| `etnografia-y-observacion-participante/` | `cultura/`, `diversidad-cultural/` | Tema nuevo de `_plan-faltantes/academicas.md`, sin ID en `troncos.md`. Método de la disciplina; presupone el concepto de cultura y de diversidad. Cruza con `../investigacion/trabajo-de-campo-enfoque-socioantropologico/` y `../investigacion/metodologia-cualitativa-vs-cuantitativa/` (enlazados, no duplicados). Decisión de Claude, no pedida. |
| `identidad-y-etnicidad/` | `diversidad-cultural/` | Tema nuevo de `_plan-faltantes/academicas.md`. Identidad colectiva y grupos étnicos (Barth, Anderson); presupone la diversidad cultural. Decisión de Claude, no pedida. |
| `mito-ritual-y-religion/` | `cultura/` | Tema nuevo de `_plan-faltantes/academicas.md`. Dimensión simbólica de la cultura (mito, ritual, religión), sin juzgar verdad de las creencias. Decisión de Claude, no pedida. |
| `pueblos-originarios-de-argentina/` | `diversidad-cultural/`, `identidad-y-etnicidad/` | Tema nuevo de `_plan-faltantes/academicas.md`. Panorama contemporáneo (Censo 2022) y resumen de derechos; el análisis jurídico vive en `../civica/derechos-indigenas/` (se enlaza, no se duplica). Diccionarios de lenguas indígenas siguen como decisión de producto pendiente. Decisión de Claude, no pedida. |
| `economia-y-poder-en-las-sociedades/` | `relaciones-de-parentesco/` | Tema nuevo de `_plan-faltantes/academicas.md`. Reciprocidad, redistribución, mercado y tipos de organización política; cruza con `../economia/origen-excedente-moneda-mercado/` y `../civica/teoria-del-poder/`. Decisión de Claude, no pedida. |
