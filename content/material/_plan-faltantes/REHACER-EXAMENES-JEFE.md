# Cómo rehacer los exámenes jefe si cambia el árbol general

**Criterio (Javier, 2026-10-20):** si se cambia el árbol general (`troncos.md` y los `dependencias.md`), los exámenes jefe se rehacen, **ignorando Oficios e Idiomas**, como en el plan original, salvo que sea necesario.

## Qué se ignora y por qué
- **Oficios:** no tiene exámenes jefe ni libros (confirmado). Los 160 temas nuevos de `oficios/` no entran en ningún pool.
- **Idiomas:** su «examen B2/C1» funciona como el examen jefe propio de los idiomas: `content/material/examen-jefe-idiomas/<idioma>.md`, pools de 500 preguntas con cuotas por destreza (gramática 150, lectura 125, escucha 100, escritura 75, expresión oral 50), generados con `gen_examen_jefe_idiomas.py` desde `examen_jefe_idiomas/<idioma>.txt`. No dependen del árbol por temas, así que **no hace falta rehacerlos** cuando cambia el árbol.
  - *Único caso en que lo vería necesario:* los 20 temas nuevos de chino y los 15 de esperanto no alimentan sus pools (que ya tienen 500 preguntas). Solo habría que regenerarlos si querés que esos temas cuenten para el examen B2/C1; es opcional y se hace con el script de idiomas, no con el del árbol.

## Qué hay que rehacer
`verificar_examen_jefe.py` hoy da **173 errores**: el tema «existe pero no está en ningún examen jefe». Materias afectadas (cantidad de temas fuera): Electrónica 15, Dibujo Técnico 15, Ciencia de Materiales 15, UX/Diseño 14, Automatización 14, Geografía 11, Biología 10, Filosofía 9, Ed. Física 9, Arte 9, Sociología 7, Psicología 6, Comunicación 6, Ciudadanía Digital 6, Aprendizaje 6, Química 5, Antropología 5, Lengua 4, Física 4, Informática 3. Más Economía (IPC) y los temas de Salud, que no tienen examen (Salud queda fuera a propósito, como ESI, Vida cotidiana y Turismo).

Materias con examen que **no** tienen temas fuera: Matemática, Historia profunda, Historia, Cívica, Derecho, Investigación, Ingeniería, Resolución de Problemas.

## Procedimiento por materia
1. Cambiar el árbol: `troncos.md` y `<materia>/dependencias.md` (cada tema nuevo ya tiene su fila; el verificador lee solo `dependencias.md`).
2. `python3 content/material/_qa_tools/gen_examen_jefe_prereq_clusters.py <materia> <id_inicial>` recalcula los clusters por orden de prerrequisitos, regenera los pools `examen-jefe/<materia>/cluster-N.md` con los `cuestionario.md` reales, actualiza `examen-jefe-clusters.md` y `examen-jefe/_resumen.json`, y deja `_qa_tools/_rediseno/<materia>-clusters-nuevos.json`. **No escribe los logros.**
3. Escribir nombre, descripción e ícono de cada logro nuevo en `logros-examen-jefe.json` y sus 11 traducciones (`.de .en .eo .es-AR .fr .it .ja .ko .pt-BR .pt-PT .zh`). Las traducciones de las rondas anteriores no las revisó una persona nativa.
4. `python3 content/material/_qa_tools/verificar_examen_jefe.py` debe dar **0 errores** (los avisos de `H10` en Antropología son un nodo del MAPA, no una carpeta) y `python3 content/material/_qa_tools/test_examen_jefe_topo_clusters.py` debe pasar.

## Plan de ids (el bloque reservado de cada materia tiene que alcanzar)
Hoy cada cluster tiene unos 5 temas (Matemática: 161 temas en 32 clusters). Con ese tamaño, el número de clusters por materia sería:

| Materia | Temas hoy | Clusters a ~5 temas | Bloque reservado | ¿Entra? |
|---|---:|---:|---|---|
| Matemática | 161 | 33 | 601-650 | sí |
| Lengua | 79 | 16 | 651-680 | sí |
| Historia profunda | 109 | 22 | 681-720 | sí |
| Historia | 28 | 6 | 721-735 | sí |
| Física | 81 | 17 | 736-765 | sí |
| Economía | 86 | 18 | 766-795 | sí |
| Geografía | 51 | 11 | 796-815 | sí |
| Informática | 65 | 13 | 816-840 | sí |
| Química | 47 | 10 | 841-860 | sí |
| Biología | 47 | 10 | 861-878 | sí |
| Cívica | 31 | 7 | 879-893 | sí |
| Derecho | 21 | 5 | 894-903 | sí |
| Arte | 24 | 5 | 904-911 | sí |
| Investigación | 12 | 3 | 912-917 | sí |
| Ingeniería | 11 | 3 | 918-923 | sí |
| Psicología | 16 | 4 | 924-929 | sí |
| **Ciencia de Materiales** | 21 | 5 | 930-933 (4) | **no** |
| Dibujo Técnico | 20 | 4 | 934-937 (4) | justo |
| Comunicación | 11 | 3 | 938-941 | sí |
| Electrónica | 20 | 4 | 942-945 (4) | justo |
| Automatización | 19 | 4 | 946-949 (4) | justo |
| **UX/Diseño** | 19 | 4 | 950 (el bloque 950-953 lo pisa Filosofía 951-953) | **no** |
| Filosofía | 27 | 6 | 951-953 (3) | **no** |
| **Antropología** | 10 | 2 | 954 (1) | **no** |
| **Sociología** | 10 | 2 | 955 (1) | **no** |
| **Aprendizaje** | 8 | 2 | 956 (1) | **no** |
| **Ciudadanía Digital** | 13 | 3 | 957 (1) | **no** |
| Resolución de Problemas | 15 | 3 | 958-960 | sí |
| Ed. Física | 25 | 5 | 961-963 (3) | **no** |

Los ids libres son 964 en adelante (el máximo usado hoy en `logros-examen-jefe.json` es 963; Oficios usa 1-25 e Idiomas 41-219). **Propuesta:** reservar los siguientes bloques antes de correr el script: Ciencia de Materiales 970-974, UX/Diseño 975-979, Filosofía 980-985, Antropología 986-988, Sociología 989-991, Aprendizaje 992-994, Ciudadanía Digital 995-998, Ed. Física 999-1004. Si el cluster ideal es mayor que 5 temas, menos ids; ajustar. Los ids viejos de esas materias (930, 950, 951-953, 954-957, 961-963) quedan libres o se reemplazan.

## Antes de empezar
- Decidir qué temas nuevos entran (todo el árbol o solo los de prioridad alta).
- Comprobar que las dependencias nuevas, deducidas por Claude, son las que querés: cada fila nueva dice «decisión de Claude, no pedida».
- Correr `auditar_preguntas.ts` sobre los `cuestionario.md` que alimentan los pools: los pools los reutilizan tal cual.
