# Filosofía — Dependencias entre temas

> Ver también [`../PROCEDIMIENTO.md`](../PROCEDIMIENTO.md) — el
> procedimiento completo (paso a paso, gotchas del DSL) que sigue todo
> tema nuevo, en cualquiera de las materias de `material/`.

Primera carpeta de Filosofía, creada en esta sesión (2026-08-05):
`FI1`/`FI2` de `troncos.md` están tageados explícitamente `(Filosofía)`,
mismo criterio ya aplicado a `informatica/`, `geografia/`,
`economia/`, `vida-cotidiana/` cuando aparecieron por primera vez —
confirmado con Javier antes de crear la carpeta (`AskUserQuestion`,
2026-08-05).

**Mantener esta tabla al día**: cada carpeta de tema nueva agrega su
fila antes de escribir teoría/cuestionario.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `logica-proposicional/` | `../lengua/detectar-falacias/` | Nodo `FI1` de `troncos.md` (`P13 → FI1`, cruza de Lengua a Filosofía). Es el "cruce inesperado" que señala `troncos.md` (v2.6): la misma estructura lógica se ve en 3 materias — Lengua la ve en lenguaje natural (falacias), Filosofía la formaliza (proposiciones, conectores lógicos), Informática la implementa (álgebra booleana). Depende de `detectar-falacias/` porque formalizar un razonamiento presupone ya poder reconocer, en lenguaje cotidiano, cuándo un argumento falla. |
| `validez-de-un-razonamiento/` | `logica-proposicional/` | Nodo `FI2` de `troncos.md` (`FI1 → FI2`). Evaluar si un razonamiento es válido (la conclusión se sigue necesariamente de las premisas) presupone ya conocer las herramientas formales de la lógica proposicional (conectores, tablas de verdad) que analizan esa validez. Nodo con doble uso confirmado en el MAPA: además de esta cadena de Filosofía, `FI2` es el mismo nodo que alimenta `Deducción`/`Contraejemplo`/`Reducción al absurdo`/`Inducción matemática` en Matemática (`troncos.md:277-280`) — no se reconstruye acá, sólo se deja la base que esos temas van a reusar. |
| `logica-de-predicados/` | `validez-de-un-razonamiento/` | Nodo `FI2B` de `troncos.md` (`FI2 → FI2B`, agregado v2.6). Extiende la lógica proposicional (afirmaciones completas fijas) a proposiciones que dependen de una variable, cuantificadas con `∀`/`∃`, más deducción formal — un nivel de abstracción más que presupone ya dominar qué es un razonamiento válido. Cierra del lado de Filosofía el mismo hueco que `Álgebra booleana` (`I2`) cierra del lado de Informática. |
| `epistemologia/` | `logica-proposicional/` | Nodo `FI9` de `troncos.md` (`FI1 → FI9`, agregado v2.7). Rama clásica de Filosofía que faltaba pese a que el propio mapa ya nombraba las "5 ramas clásicas" (metafísica, epistemología, ética, lógica, estética). Depende de `logica-proposicional/` (no de `detectar-falacias/` ni de `validez-de-un-razonamiento/`) porque el MAPA la cuelga directo de `FI1`, como hermana de `FI2`, no como continuación de la cadena de razonamiento. |
| `ser-ontologia/` | `logica-proposicional/` | Nodo `FI4a` de `troncos.md` (`FI1 → FI4a`), primero de 3 nodos hermanos (`FI4a`/`FI4b`/`FI4c`) agrupados por Javier bajo "Metafísica" — split real del MAPA (agregado v2.4, cierra la rama clásica de metafísica que faltaba). |
| `existencia/` | `logica-proposicional/` | Nodo `FI4b` de `troncos.md` (`FI1 → FI4b`), hermano de `FI4a`/`FI4c` (no depende de ellos). Split real del MAPA — ver `ser-ontologia/`. |
| `realidad/` | `logica-proposicional/` | Nodo `FI4c` de `troncos.md` (`FI1 → FI4c`), hermano de `FI4a`/`FI4b` (no depende de ellos). Split real del MAPA — ver `ser-ontologia/`. |
| `etica-como-rama-propia/` | `logica-proposicional/` | Nodo `FI5` de `troncos.md` (`FI1 → FI5`, agregado v2.4). Rama clásica de ética como corrientes normativas generales (qué hace que una acción sea correcta), antes de bajar a las corrientes específicas de `Dilemas éticos` que dependen de este nodo. |
| `que-es-el-arte/` | `logica-proposicional/` | Nodo `FI6a` de `troncos.md` (`FI1 → FI6a`), primero de 3 nodos hermanos (`FI6a`/`FI6b`/`FI6c`) agrupados por Javier bajo "Estética" — split real del MAPA (agregado v2.4, cierra la rama clásica de estética). |
| `el-gusto-estetico/` | `logica-proposicional/` | Nodo `FI6b` de `troncos.md` (`FI1 → FI6b`), hermano de `FI6a`/`FI6c` (no depende de ellos). Split real del MAPA — ver `que-es-el-arte/`. |
| `lo-bello/` | `logica-proposicional/` | Nodo `FI6c` de `troncos.md` (`FI1 → FI6c`), hermano de `FI6a`/`FI6b` (no depende de ellos). Split real del MAPA — ver `que-es-el-arte/`. |
| `historia-de-la-filosofia-y-corrientes/` | `logica-proposicional/` | Nodo `FI7` de `troncos.md` (`FI1 → FI7`, agregado v2.4). Incluye explícitamente corrientes político-económicas (marxismo, liberalismo, socialismo, conservadurismo, anarquismo) con el mismo principio de neutralidad ya aplicado en `../economia/` (ver memoria `feedback-neutralidad-corrientes-pensamiento`): identificar qué sostiene cada corriente, nunca evaluar cuál tiene razón. |
| `utilitarismo/` | `etica-como-rama-propia/` | Nodo `FI8a` de `troncos.md` (`FI5 → FI8a`), primero de 4 nodos hermanos (`FI8a`/`FI8b`/`FI8c`/`FI8d`) agrupados por Javier bajo "Dilemas éticos" — split real del MAPA. Depende de `etica-como-rama-propia/` porque cada corriente normativa específica presupone ya conocer el marco general de "ética como rama". Neutralidad: se describe qué sostiene cada corriente (consecuencias, deber, carácter, contrato), nunca cuál es correcta. |
| `deontologia/` | `etica-como-rama-propia/` | Nodo `FI8b` de `troncos.md` (`FI5 → FI8b`), hermano de `FI8a`/`FI8c`/`FI8d`. Split real del MAPA — ver `utilitarismo/`. |
| `etica-de-la-virtud/` | `etica-como-rama-propia/` | Nodo `FI8c` de `troncos.md` (`FI5 → FI8c`), hermano de `FI8a`/`FI8b`/`FI8d`. Split real del MAPA — ver `utilitarismo/`. |
| `contractualismo/` | `etica-como-rama-propia/` | Nodo `FI8d` de `troncos.md` (`FI5 → FI8d`), hermano de `FI8a`/`FI8b`/`FI8c`. Split real del MAPA — ver `utilitarismo/`. |
| `bioetica-general/` | `utilitarismo/`, `deontologia/`, `etica-de-la-virtud/`, `contractualismo/` | Nodo `FIB1` de `troncos.md` (2026-08-13, 4 padres: `FI8a/b/c/d --> FIB1`). Eutanasia, experimentación animal, ingeniería genética humana — terreno donde las 4 corrientes éticas normativas se ponen a prueba con casos concretos. `../biologia/biotecnologia-.../organismos-transgenicos-bioetica/` pasa a ser instancia particular de este marco más general. `teoria.md` con qwen, "revisión pendiente". |
