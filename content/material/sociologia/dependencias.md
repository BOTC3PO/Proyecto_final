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
