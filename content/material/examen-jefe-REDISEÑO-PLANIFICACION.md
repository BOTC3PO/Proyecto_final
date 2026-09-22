# Rediseño del agrupamiento de `examen-jefe/`: plan, no ejecutar todavía

> Documento de planificación. **No toca ningún archivo de
> `content/material/examen-jefe/`, `examen-jefe-clusters.md`,
> `examen-jefe/_resumen.json` ni `logros-examen-jefe*.json`** — sólo
> describe cómo se arreglaría el problema documentado en
> `examen-jefe-clustering-no-cumple-requisito` (memoria 2026-09-15),
> pausado explícitamente por Javier hasta que hubiera un rediseño real
> en vez de un parche. Este documento es ese rediseño, para revisar y
> confirmar antes de generar nada.

## El problema, en una frase

`examen-jefe-clusters.md` dice que agrupa por "cortes naturales del
tronco" (conocimientos previos), pero en los hechos corta por **orden
alfabético puro** de nombre de carpeta, letra por letra — verificado
contra los 165 clusters reales, no sólo contra el `.md` auxiliar.

**Ejemplo real** (Matemática, cadena de Análisis en
`matematica/dependencias.md`): `familias-exponencial-logaritmica` →
`limite` → `continuidad` → `derivada` es una cadena de prerrequisito
directo de 4 pasos (cada uno depende del anterior, documentado fila por
fila). Con el corte alfabético actual quedan repartidos en tres
clusters distintos y lejanos: `familias-exponencial-logaritmica` en el
cluster 13, `limite` en el cluster 18 (junto a `leer-grafico/torta`,
`lenguaje-algebraico`, `logaritmos` — pura letra L), `continuidad` en
el cluster 4, y `derivada` en el cluster 7. Un alumno puede sortear el
examen de `derivada` sin haber rendido nunca el de `limite`, que es su
prerrequisito directo.

## Criterio nuevo: partición topológica sobre `dependencias.md`

Cada materia con contenido en `examen-jefe-clusters.md` ya tiene su
`<materia>/dependencias.md` con una tabla `Tema | Nodo MAPA | Depende de
| Por qué` — es una fuente real y ya mantenida, no hay que inventar
nada nuevo, sólo usarla como la fuente correcta en lugar del nombre de
carpeta.

**Algoritmo, por materia**:

1. Parsear `dependencias.md` a un grafo dirigido: un nodo por tema
   (carpeta), una arista `A → B` cuando la fila de `B` dice "Depende
   de: A". Los ítems de la columna "Depende de" que apuntan a otra
   materia (`../fisica/...`, `../quimica/...`) se descartan para este
   grafo — la ordenación es **intra-materia**, ver limitación más abajo.
2. Orden topológico (Kahn) sobre ese grafo. Si hay temas sin
   dependencias documentadas entre sí (ciclos de la misma "familia",
   ej. las 8 reglas de divisibilidad), se ordenan por nombre entre
   ellos — el alfabético no desaparece, pasa a ser sólo el criterio de
   *desempate*, no el criterio principal.
3. Particionar la lista topológica en clusters de 5-15 temas, con la
   restricción real que hoy falta: **ningún tema entra a un cluster
   antes que todos sus prerrequisitos ya estén en ese cluster o en uno
   anterior**. Esto ya lo garantiza el propio orden topológico del paso
   2 — particionar en tramos consecutivos de una lista topológicamente
   ordenada preserva la propiedad automáticamente, no hace falta
   backtracking.
4. Ajuste manual (igual que hoy se supone que había que hacer y nunca
   se hizo): revisar los cortes resultantes contra "cortes naturales"
   reales — por ejemplo, si un sub-tronco tiene nombre propio en
   `troncos.md` (`8.a`/`8.b`/`8.c` en Historia profunda, ya mencionado
   en `examen-jefe-gamificacion-PLANIFICACION.md`), el corte de cluster
   debería coincidir con el corte de sub-tronco cuando el tamaño lo
   permite, no partirlo a la mitad.

**Con este criterio, la cadena de Análisis de arriba queda en un solo
cluster** (o en dos consecutivos si el tamaño de 5-15 no alcanza),
nunca separada por accidente de letra inicial.

### Limitación reconocida: dependencias cruzadas entre materias

Varios temas dependen de otra materia (`gasista/fundamentos-gasista`
depende de Química y Física, pero eso es un oficio, fuera de alcance;
dentro de las materias de `examen-jefe/`, ej. `Química` tiene temas que
dependen de `Física`). Este rediseño **no** ordena clusters entre
materias distintas — cada materia sigue teniendo su propio examen-jefe
independiente, como hoy. Las dependencias cruzadas quedan como
información en `dependencias.md` pero no afectan el corte de clusters,
porque el sistema no obliga a rendir Física antes que Química de todos
modos (son pools separadas, no una progresión única). Si se quisiera
resolver esto también, sería un alcance más grande (orden global entre
materias) — no está pedido y no lo propongo acá.

## Numeración estable, para que "tenga sentido con los logros"

**El problema real de fondo**: hoy el `id` de cada logro es global y
secuencial (52-216, sin reinicio por materia) — Economía ocupa 187-201,
Derecho arranca en 202 sin margen. Cualquier cambio en la cantidad de
clusters de una materia (que este rediseño casi seguro produce, porque
la partición topológica no da los mismos tamaños de 5 parejos que el
corte alfabético mecánico) obliga a renumerar el `id` de **todas** las
materias siguientes en el archivo, y con eso los 11 archivos de
traducción (`logros-examen-jefe.{de,en,eo,es-AR,fr,it,ja,ko,pt-BR,pt-
PT,zh}.json`).

**Propuesta**: reservar un **bloque de ids fijo por materia**, con
margen, en vez de numeración contigua. Ejemplo con margen ~50% sobre el
conteo actual de clusters (redondeado a la decena):

| Materia | Clusters hoy | Bloque propuesto | Ids reservados |
|---|---:|---|---:|
| Matemática | 32 | 601-650 | 50 |
| Lengua | 15 | 651-680 | 30 |
| Historia profunda | 22 | 681-720 | 40 |
| Historia | 6 | 721-735 | 15 |
| Física | 15 | 736-765 | 30 |
| Economía | 15 | 766-795 | 30 |
| Geografía | 8 | 796-815 | 20 |
| Informática | 12 | 816-840 | 25 |
| Química | 8 | 841-860 | 20 |
| Biología | 7 | 861-878 | 18 |
| Cívica | 6 | 879-893 | 15 |
| Derecho | 4 | 894-903 | 10 |
| Arte | 3 | 904-911 | 8 |
| Investigación | 2 | 912-917 | 6 |
| Ingeniería | 2 | 918-923 | 6 |
| Psicología | 2 | 924-929 | 6 |
| Ciencia de Materiales | 1 | 930-933 | 4 |
| Dibujo Técnico | 1 | 934-937 | 4 |
| Comunicación | 1 | 938-941 | 4 |
| Electrónica | 1 | 942-945 | 4 |
| Automatización | 1 | 946-949 | 4 |
| UX/Diseño | 1 | 950-953 | 4 |

Se arranca en 601 (no en 217, el siguiente libre hoy) a propósito: dejar
217-600 como colchón para lo que ya está entre manos (idiomas usa
217-219 + margen, y cualquier materia nueva de la lista "fuera de
alcance original" de `examen-jefe-clusters.md` si algún día se decide
sumarla) sin invadir el bloque de examen-jefe. Los números exactos del
bloque no son la decisión importante — la decisión importante es
**dejar de usar contiguo estricto**, algo que no vuelva a romperse cada
vez que crece una materia.

**Costo de la migración de traducciones**: sólo los clusters cuyo
*conjunto de temas* cambió necesitan `nombre`/`descripcion` nuevos (y
re-traducidos a los 11 idiomas) — los clusters cuyo contenido no se
movió pueden conservar el texto ya escrito, sólo con `id` actualizado
al nuevo bloque. Calcular ese diff (clusters idénticos vs. clusters
que cambiaron) es el primer paso real al ejecutar esto, antes de
escribir una sola traducción nueva.

## Qué NO cambia

- **Idiomas** sigue con su sistema propio (pools de 500 por idioma,
  logros 41-51/217-219) — nunca usó `examen-jefe-clusters.md`, no hay
  nada que migrar ahí.
- **Oficios** (incluido `OF19` Cocina/Gastronomía) sigue **fuera** del
  alcance de examen-jefe, decisión ya confirmada en
  `examen-jefe-gamificacion-PLANIFICACION.md`: el sistema no certifica
  profesionalmente, un tier "Platino" en un oficio sonaría a
  habilitación real que el proyecto no otorga. El diagnóstico-por-casos
  de cierre de cada oficio (incluido Cocina) ya cumple el rol de
  evaluación final sin necesitar un cluster de examen-jefe aparte.
- La mecánica de sorteo/tiers/monedas (`examen-jefe-gamificacion-
  PLANIFICACION.md`) no cambia — este documento sólo toca el criterio
  de agrupamiento y la numeración, no la economía ni el sorteo.

## Pasos para ejecutar esto (cuando se confirme, no ahora)

1. Escribir el parser de `dependencias.md` → grafo → orden topológico
   → partición 5-15 (script chico, una materia por vez para poder
   revisar el resultado antes de aplicarlo a todas).
2. Para cada materia, generar el nuevo `examen-jefe-clusters.md` y
   diffearlo contra el actual: qué clusters quedaron idénticos (mismo
   conjunto de temas, sólo id nuevo) vs. cuáles cambiaron de verdad.
3. Regenerar los `.md` de pool por cluster (agregando los
   `cuestionario.md` ya validados de los temas de cada cluster nuevo —
   mismo mecanismo de agregación que ya usa el sistema hoy, no hace
   falta reescribir preguntas).
4. Actualizar `logros-examen-jefe.json` con los nuevos `id`/`temas`,
   conservando `nombre`/`descripcion`/`icono` de los clusters
   idénticos y escribiendo sólo los que cambiaron — igual en los 11
   archivos de traducción.
5. Regenerar `examen-jefe/_resumen.json`.
6. Revisar si algo en la app (schema/código) asume ids contiguos o un
   rango específico para examen-jefe — `EconomiaRecompensa.referenciaId`
   u otro lugar que hoy dependa del `id` numérico — antes de aplicar la
   renumeración, para no romper referencias existentes en producción.

---

*(2026-09-22, Claude — plan escrito a pedido de Javier, sin ejecutar
ningún paso de la sección anterior.)*
