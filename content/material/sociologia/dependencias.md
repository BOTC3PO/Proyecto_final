# Sociología — Dependencias entre temas

> Ver también [`../PROCEDIMIENTO.md`](../PROCEDIMIENTO.md) — el
> procedimiento completo (paso a paso, gotchas del DSL) que sigue todo
> tema nuevo, en cualquiera de las materias de `material/`.

Materia nueva, creada en esta sesión (confirmado con Javier): los nodos
`SOC1a`/`SOC1b`/`SOC1c` de `troncos.md` no tenían carpeta de materia
propia. Contexto real (nota v2.8 de `troncos.md`, líneas ~1212-1220):
confirmado independientemente por Opus 5 y Z que la Res. CFE 84/09
reconoce diez orientaciones del Ciclo Orientado y el mapa cubría nueve
(Psicología, Derecho, Comunicación, Filosofía entre otras) pero ninguna
materia trataba la sociedad como objeto de estudio propio. Sociología
cuelga de `Población` (`G8` de Geografía, el dato) y de `Multicausalidad`
(`T7` de Historia, la herramienta de pensamiento) porque estudia
exactamente eso — hechos sociales e instituciones — con metodología
propia.

**Decisión propia (no pedida, Paso 2): split en 3 carpetas**
(`hechos-sociales/`, `instituciones/`, `estratificacion/`) en vez de una
sola. El propio MAPA encadena los 3 nodos con sub-IDs `a`/`b`/`c` en
secuencia lineal (`SOC1a --> SOC1b --> SOC1c`), la misma señal de
progresión de sub-temas que ya usó `../geografia/dependencias.md` para
`sig-mapas-digitales/`/`sig-gps/`/`sig-imagenes-satelitales/` (`G12a/b/c`)
— 3 conceptos que se enseñan uno por vez, cada uno construyendo sobre el
anterior, no dos caras de la misma cosa.

**Mantener esta tabla al día**: igual que en las otras materias, cada
carpeta de tema nueva agrega su fila antes de escribir teoría/cuestionario.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `hechos-sociales/` | `../geografia/poblacion-piramides-migraciones/`, `../historia/multicausalidad/` | Nodo `SOC1a` de `troncos.md` (`G8 --> SOC1a`, `T7 --> SOC1a`). Primer nodo de la cadena: qué es un "hecho social" (Durkheim: maneras de actuar/pensar/sentir externas al individuo pero coercitivas sobre él) presupone ya tener el dato poblacional concreto (`G8`) sobre el que se puede observar un patrón colectivo, y la herramienta de multicausalidad (`T7`) para no atribuirle una sola causa. |
| `instituciones/` | `hechos-sociales/` | Nodo `SOC1b` de `troncos.md` (`SOC1a --> SOC1b`). Las instituciones sociales (familia, escuela, Estado, religión como estructuras estables que organizan la vida social) son un tipo particular de hecho social — el más duradero y organizado — no se pueden entender sin ya tener el concepto general de hecho social. |
| `estratificacion/` | `instituciones/` | Nodo `SOC1c` de `troncos.md` (`SOC1b --> SOC1c`), cierre de la cadena. La estratificación social (clases, castas, estamentos — cómo se jerarquiza una sociedad) se explica en gran parte por cómo las instituciones distribuyen desigualmente recursos y oportunidades — presupone ya entender qué es una institución social. |
| `socializacion-y-roles/` | `instituciones/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/academicas.md`, sin ID en `troncos.md`). La socialización es el mecanismo por el cual las instituciones (familia, escuela) transmiten los hechos sociales; presupone el concepto de institución. |
| `normas-valores-y-control-social/` | `socializacion-y-roles/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/academicas.md`). Las normas y su control se aprenden en la socialización; sin ese concepto no se entiende por qué se cumplen. |
| `clasicos-durkheim-weber-marx/` | `hechos-sociales/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/academicas.md`). Durkheim, Weber y Marx se presentan como tres lentes sobre el hecho social. Cruza con `../economia/marxismo/`; el tema `filosofia/marx-y-el-materialismo-historico` todavía no existe, así que el cruce se enlaza solo con Economía por ahora. |
| `cambio-social-y-movimientos/` | `instituciones/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/academicas.md`). Los movimientos sociales son la acción colectiva que transforma o resiste las instituciones; presupone qué es una institución. Cruza con `../civica/` (derechos y participación). |
| `desigualdad-y-clases-hoy/` | `estratificacion/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/academicas.md`). Retoma la estratificación en clave contemporánea (medición, pobreza, movilidad). Cruza con `../geografia/indicadores-sociales-de-argentina/`. No incluye cifras vigentes de pobreza: remite al INDEC. |
| `genero-como-categoria-social/` | `normas-valores-y-control-social/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/academicas.md`). El género se estudia como un conjunto de normas y expectativas aprendidas. ESI es la fuente rectora en educación sexual integral (`../esi/`); acá el enfoque es sociológico. Cruza con `../economia/economia-feminista-y-del-cuidado/`. |
| `metodos-de-investigacion-social/` | `hechos-sociales/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/academicas.md`). Vista general y sociológica de los métodos; el procedimiento de cada técnica está en `../investigacion/tecnicas-de-investigacion-social/` (enlazado, no duplicado). |
