# Derecho — Dependencias entre temas

> Ver también [`../PROCEDIMIENTO.md`](../PROCEDIMIENTO.md) — el
> procedimiento completo (paso a paso, gotchas del DSL) que sigue todo
> tema nuevo, en cualquiera de las materias de `material/`.

**Nota**: esta materia ya tenía 19 carpetas de contenido real
(`ramas-del-derecho/`, `derecho-civil/`, ... hasta `politica-criminal-
garantismo-mano-dura/`) escritas en sesiones previas, pero nunca había
tenido este archivo de seguimiento — se crea recién ahora (2026-08-13),
sin backfillear las 19 filas históricas (quedaría como trabajo aparte
si hace falta reconstruir esa trazabilidad). Lo único que se agrega acá
por ahora es el nodo nuevo de esta ronda. Derecho Procesal/profundidad
laboral-comercial quedan pendientes de decisión de alcance, sin carpeta
todavía.

**Mantener esta tabla al día**: cada carpeta de tema nueva agrega su
fila antes de escribir teoría/cuestionario.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `fuentes-del-derecho/` | `hecho-juridicamente-relevante/` | Nodo `DER1B` de `troncos.md` (`DER1 --> DER1B`; `DER1` ya tiene carpeta propia: `hecho-juridicamente-relevante/`, dependencia corregida 2026-10-03). Ley, costumbre, jurisprudencia, doctrina — estándar de cualquier intro al derecho, junto a `DER0` (ramas). Fuente: Zajac, *Derecho 5*. `teoria.md` generado con qwen, "revisión pendiente". |
| `ramas-del-derecho/` | *(ninguna — nodo raíz)* | Nodo `DER0` de `troncos.md` (v2.4: introducción estándar a "Introducción al Derecho", antes de `DER1`). Raíz de la materia. Backfill 2026-10-03. |
| `derecho-civil/` | `ramas-del-derecho/` | Nodo `DER0a`. *Deducido acá, no está en el MAPA*: el MAPA no dibuja flecha hacia las ramas, pero `DER0` (ramas) es la introducción general y cada rama es su desarrollo. Backfill 2026-10-03. |
| `derecho-penal/` | `ramas-del-derecho/` | Nodo `DER0b`. *Deducido acá, no está en el MAPA* (mismo criterio que `derecho-civil/`). Backfill 2026-10-03. |
| `derecho-laboral/` | `ramas-del-derecho/` | Nodo `DER0c`. *Deducido acá, no está en el MAPA* (mismo criterio que `derecho-civil/`). Backfill 2026-10-03. |
| `derecho-comercial/` | `ramas-del-derecho/` | Nodo `DER0d`. *Deducido acá, no está en el MAPA* (mismo criterio que `derecho-civil/`). Backfill 2026-10-03. |
| `derecho-administrativo/` | `ramas-del-derecho/` | Nodo `DER0e`. *Deducido acá, no está en el MAPA* (mismo criterio que `derecho-civil/`). Backfill 2026-10-03. |
| `derecho-constitucional/` | `ramas-del-derecho/` | Nodo `DER0f`. *Deducido acá, no está en el MAPA* (mismo criterio que `derecho-civil/`). Backfill 2026-10-03. |
| `derecho-internacional/` | `ramas-del-derecho/` | Nodo `DER0g`. *Deducido acá, no está en el MAPA* (mismo criterio que `derecho-civil/`). Backfill 2026-10-03. |
| `hecho-juridicamente-relevante/` | `derecho-civil/`, `derecho-penal/`, `derecho-laboral/`, `derecho-comercial/`, `derecho-administrativo/`, `derecho-constitucional/`, `derecho-internacional/`, `../civica/origen-estado-derecho/` | Nodo `DER1` (`DER0a...DER0g --> DER1`, `C10P --> DER1`). `C10P` = Origen del Estado y del derecho (`C10`, carpeta `../civica/origen-estado-derecho/`; el MAPA lo rotula "Historia profunda" pero el nodo real es de Cívica). Backfill 2026-10-03. |
| `norma-jerarquia-y-vigencia/` | `hecho-juridicamente-relevante/`, `../civica/division-de-poderes/`, `../civica/tratados-internacionales/`, `../civica/constitucion-nacional-jerarquia-normativa/` | Nodo `DER2` (`DER1 --> DER2`, `C6P --> DER2`, `C17P --> DER2`). La `teoria.md` cita además `../civica/constitucion-nacional-jerarquia-normativa/` (art. 31 CN, pirámide de Kelsen): *deducido acá, no está en el MAPA como flecha*. Backfill 2026-10-03. |
| `corrientes-interpretacion-juridica/` | `norma-jerarquia-y-vigencia/` | Nodos `DER6a`/`DER6b`/`DER6c` (iuspositivismo, iusnaturalismo, realismo; `DER2 --> DER6a/b/c`), consolidados en un solo módulo. Backfill 2026-10-03. |
| `politica-criminal-garantismo-mano-dura/` | `corrientes-interpretacion-juridica/` | Nodo `DER7` (`DER6a/b/c --> DER7`). Backfill 2026-10-03. |
| `interpretacion-normativa/` | `norma-jerarquia-y-vigencia/` | Nodo `DER3` (`DER2 --> DER3`). Backfill 2026-10-03. |
| `argumentacion-juridica/` | `interpretacion-normativa/`, `../lengua/detectar-falacias/`, `../lengua/debate-refutar-en-vivo/` | Nodo `DER4` (`DER3 --> DER4`, `P13P --> DER4`, `COM2P --> DER4`). `COM2` (Debate) = `debate-refutar-en-vivo/` de Lengua, mapeo *deducido acá*. Backfill 2026-10-03. |
| `resolucion-de-conflictos-y-sentencia/` | `argumentacion-juridica/`, `../civica/division-de-poderes/` | Nodo `DER5` (`DER4 --> DER5`). La `teoria.md` (estructura del Poder Judicial) cita `../civica/division-de-poderes/`. Backfill 2026-10-03. |
| `denuncia-y-etapa-de-instruccion/` | `derecho-penal/` | Nodo `DPR1` (`DER0bP --> DPR1`, rama penal). Backfill 2026-10-03. |
| `investigacion-prueba-y-fiscalia/` | `denuncia-y-etapa-de-instruccion/` | Nodo `DPR2` (`DPR1 --> DPR2`). Backfill 2026-10-03. |
| `juicio-oral/` | `investigacion-prueba-y-fiscalia/`, `resolucion-de-conflictos-y-sentencia/` | Nodo `DPR3` (`DPR2 --> DPR3`, `DER5P --> DPR3`). Backfill 2026-10-03. |
| `apelacion-e-instancias/` | `juicio-oral/` | Nodo `DPR4` (`DPR3 --> DPR4`). Backfill 2026-10-03. |
| `ejecucion-de-la-sentencia/` | `apelacion-e-instancias/` | Nodo `DPR5` (`DPR4 --> DPR5`). Backfill 2026-10-03. |
