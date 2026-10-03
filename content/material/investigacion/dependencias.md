# Investigación — Dependencias entre temas

> Ver también [`../PROCEDIMIENTO.md`](../PROCEDIMIENTO.md) — el
> procedimiento completo (paso a paso, gotchas del DSL) que sigue todo
> tema nuevo, en cualquiera de las materias de `material/`.

**Nota**: esta materia ya tenía 9 carpetas de contenido real
(`observacion-y-pregunta-investigable/`, `hipotesis-buena-o-mala/`, ...
hasta `corrientes-filosofia-de-la-ciencia/`) escritas en sesiones
previas, pero nunca había tenido este archivo de seguimiento — se crea
recién ahora (2026-08-13), sin backfillear esas filas históricas. Lo
único que se agrega acá por ahora son los 3 nodos nuevos de esta ronda.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `metodologia-cualitativa-vs-cuantitativa/` | `observacion-y-pregunta-investigable/` | Nodo `INVQ1` de `troncos.md` (`INV1 --> INVQ1`, 2026-08-13). Fuente: *Proyectos de Investigación en Ciencias Sociales 6to* (Maipue). Hermana de `diseno-experimental-variables-y-control/` (rama cuantitativa). |
| `trabajo-de-campo-enfoque-socioantropologico/` | `metodologia-cualitativa-vs-cuantitativa/` | Nodo `INVQ2` (`INVQ1 --> INVQ2`). |
| `tecnicas-de-investigacion-social/` | `trabajo-de-campo-enfoque-socioantropologico/` | Nodo `INVQ3` (`INVQ2 --> INVQ3`). Entrevista, encuesta, historia de vida. |
| `observacion-y-pregunta-investigable/` | `../filosofia/metodo-cientifico-racionalismo/` | Nodo `INV1` de `troncos.md` (`FI3P --> INV1`, "Método científico", que en el MAPA es el nodo `FI3` de Filosofía). Raíz del tronco dentro de Investigación: no depende de ningún otro tema de esta materia. Backfill 2026-10-03 (la fila faltaba). |
| `hipotesis-buena-o-mala/` | `observacion-y-pregunta-investigable/` | Nodo `INV2` (`INV1 --> INV2`). Una hipótesis responde a una pregunta investigable ya formulada. Backfill 2026-10-03. |
| `construir-y-usar-un-modelo-cientifico/` | `hipotesis-buena-o-mala/`, `../quimica/modelos-atomicos/` | Nodo `INV7` (`INV2 --> INV7`, `QCM --> INV7P`). El modelo atómico actual (síntesis Dalton-Bohr) es el caso de estudio de cómo se construye y revisa un modelo. Backfill 2026-10-03. |
| `diseno-experimental-variables-y-control/` | `construir-y-usar-un-modelo-cientifico/` | Nodo `INV3` (`INV7 --> INV3`). Diseñar el experimento presupone tener un modelo/hipótesis que poner a prueba. Backfill 2026-10-03. |
| `recoleccion-de-datos/` | `diseno-experimental-variables-y-control/` | Nodo `INV4` (`INV3 --> INV4`). Backfill 2026-10-03. |
| `analisis-estadistico-de-resultados/` | `recoleccion-de-datos/`, `../matematica/intervalo-de-confianza/`, `../matematica/test-de-hipotesis/` | Nodo `INV5` (`INV4 --> INV5`, `D13P --> INV5`, `D14P --> INV5`). Backfill 2026-10-03. |
| `conclusion-y-comunicacion-de-resultados/` | `analisis-estadistico-de-resultados/`, `../lengua/exposicion-oral/`, `../lengua/contraargumentos/` | Nodo `INV6` (`INV5 --> INV6`, `COM1P --> INV6`, `P12cP --> INV6`). Backfill 2026-10-03. |
| `argumentar-desde-evidencia/` | `conclusion-y-comunicacion-de-resultados/` | Nodo `INV8` (`INV6 --> INV8`). Defender la conclusión ante una objeción presupone tener una conclusión comunicada. Backfill 2026-10-03. |
| `corrientes-filosofia-de-la-ciencia/` | `construir-y-usar-un-modelo-cientifico/`, `../filosofia/epistemologia/` | Nodos `INV9a/b/c` (Popper, Kuhn, Feyerabend; `INV7 --> INV9a/b/c`, `FI9P --> INV9a/b/c`). Consolidado en un solo módulo (3 nodos del MAPA, una carpeta). Backfill 2026-10-03. |
