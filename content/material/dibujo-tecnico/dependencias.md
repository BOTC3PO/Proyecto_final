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
| `instrumentos-de-dibujo-y-trazos-basicos/` | `sistemas-de-proyeccion/` | Base práctica de todo el dibujo técnico; no depende de otro tema pero se ubica después de las proyecciones del tronco. Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). |
| `tipos-de-linea-formatos-y-rotulo/` | `instrumentos-de-dibujo-y-trazos-basicos/` | Las convenciones de línea, formato y rótulo se aprenden después de manejar los instrumentos. Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). |
| `geometria-constructiva-tangencias-y-enlaces/` | `instrumentos-de-dibujo-y-trazos-basicos/`, `../matematica/angulos/` | Las construcciones geométricas se hacen con los instrumentos y usan los conceptos de ángulos y rectas. Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). |
| `cortes-y-secciones/` | `vistas-frontal-superior-lateral/` | Los cortes se aplican sobre las vistas cuando el interior es complejo. Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). |
| `vistas-auxiliares-y-detalles/` | `cortes-y-secciones/` | Complementa las vistas y los cortes para caras inclinadas y detalles. Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). |
| `interpretar-planos-de-piezas-y-conjuntos/` | `acotacion-normalizada/`, `cortes-y-secciones/` | Leer un plano integra cotas, vistas, cortes y convenciones. Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). |
| `tolerancias-y-ajustes/` | `acotacion-normalizada/` | La acotación indica la medida; la tolerancia indica cuánto error se admite en ella. Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). |
| `rugosidad-y-acabado-superficial/` | `tolerancias-y-ajustes/` | El acabado superficial es otra característica que se especifica junto a la tolerancia dimensional. Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). |
| `representacion-de-roscas-tornillos-y-uniones/` | `cortes-y-secciones/` | Las roscas se representan convencionalmente y aparecen en cortes de conjuntos. Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). |
| `simbolos-de-soldadura-y-uniones/` | `interpretar-planos-de-piezas-y-conjuntos/`, `../oficios/soldador/` (referencia cruzada) | Leer un plano soldado exige primero saber leer un plano de conjunto. Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). |
