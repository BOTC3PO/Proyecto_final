# Arte — Rosetones y simetría (teoría)

> Tema del MAPA: `AR3` (Tronco 3.a — Geometría: de la forma a la medida,
> cruce con Arte). Depende de
> `../../matematica/circunferencia-y-circulo/`,
> `../../matematica/transformaciones-geometricas/rotacion/` y
> `../../matematica/transformaciones-geometricas/reflexion/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — varias ideas encadenadas (qué es un rosetón,
simetría rotacional, simetría axial, cómo se diseña uno) mejor separadas
en diapositivas.

---

## Qué es un rosetón

Un **rosetón** es una ventana circular ornamentada con un patrón
geométrico repetido alrededor de un centro, típica de la arquitectura
gótica (las grandes catedrales, como Notre Dame). No es sólo decoración
al azar: es geometría aplicada — la misma que se vio en
`../../matematica/circunferencia-y-circulo/` y en las transformaciones
geométricas.

## Simetría rotacional: dividir el círculo en partes iguales

La base de cualquier rosetón es dividir la circunferencia en `n` **arcos
iguales** — cada uno de `360°/n` (la misma fórmula de
`../../matematica/circunferencia-y-circulo/`) — y repetir el mismo motivo
en cada uno, rotándolo ese ángulo cada vez (ver
`../../matematica/transformaciones-geometricas/rotacion/`). El resultado
tiene **simetría rotacional de orden n**: se ve exactamente igual
después de rotarlo `360°/n`. Cuanto mayor `n`, más "pétalos" o
secciones tiene el rosetón, y más chico es el ángulo mínimo de simetría.

## Simetría axial: los ejes de reflexión

Muchos rosetones también tienen **simetría axial**: además de repetirse
por rotación, cada sector es el reflejo especular de su vecino respecto
de una línea que pasa por el centro (ver
`../../matematica/transformaciones-geometricas/reflexion/`). Un rosetón
con `n` secciones y simetría axial completa tiene `n` ejes de simetría,
todos pasando por el centro.

## Combinar ambas simetrías

Cuando un patrón tiene tanto simetría rotacional de orden `n` como `n`
ejes de simetría axial, se dice que tiene **simetría diédrica** — el
tipo de simetría más completo posible en un patrón plano centrado
(salvo el caso límite del círculo, con infinitos ejes y cualquier
ángulo de rotación). No hace falta memorizar el nombre técnico: lo
importante es reconocer que un rosetón bien diseñado suele combinar las
dos transformaciones, no usar sólo una.

## Cómo se diseña un rosetón, paso a paso

1. Elegir `n` (la cantidad de secciones o "pétalos" — 6, 8, 12 son
   valores clásicos).
2. Dividir la circunferencia en `n` arcos de `360°/n` cada uno.
3. Diseñar el motivo dentro de un solo sector.
4. Repetir ese motivo rotándolo `360°/n` grados, `n − 1` veces más, hasta
   completar la vuelta.
5. Opcional: reflejar el motivo dentro de cada sector, para sumar
   simetría axial además de la rotacional.

## Para qué sirve

Entender esta construcción explica por qué los rosetones (y, en general,
cualquier mandala o patrón radial) se ven ordenados y armónicos a pesar
de su complejidad visual: no son dibujos libres, son la aplicación
sistemática de un ángulo de repetición fijo sobre una sola unidad de
diseño.
