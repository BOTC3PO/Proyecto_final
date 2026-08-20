# Matemática — Desarrollo plano: la figura 2D que arma el cuerpo 3D (teoría)

> Tema del MAPA: `M4Bf` (Tronco 3.a — Geometría: de la forma a la medida,
> dentro de "Cuerpos redondos y poliedros"). Depende de `../prismas/`,
> `../piramides/`, `../cilindros/`, `../conos/` y `../esferas/` — el MAPA
> marca las 5 flechas entrantes explícitamente (ver `../../dependencias.md`).
> Este módulo usa esos 5 cuerpos como ejemplos, sin introducir ninguno
> nuevo.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — un desarrollo distinto por cada uno de los 5 cuerpos,
mejor separados en diapositivas.

---

## Qué es un desarrollo plano

El **desarrollo plano** (o "red") de un cuerpo 3D es la figura plana (2D)
que, al doblarse por sus líneas de unión, arma exactamente ese cuerpo —
como desarmar una caja de cartón por sus pliegues hasta que queda
completamente plana, o al revés. Sirve para dos cosas prácticas: calcular
la superficie total del cuerpo (sumando el área de cada pieza del
desarrollo, ya que un área 2D es más fácil de calcular que una superficie
3D directamente) y para construir el cuerpo físicamente con papel o
cartón.

## Desarrollo del prisma

El desarrollo de un prisma (ver `../prismas/`) tiene: las **dos bases**
(el polígono, tal cual) más **un rectángulo por cada cara lateral** — un
prisma con base de n lados tiene n rectángulos laterales. Todos esos
rectángulos comparten el mismo ancho (la altura del prisma) y se pueden
"desenrollar" en fila.

## Desarrollo de la pirámide

El desarrollo de una pirámide (ver `../piramides/`) tiene: **una base**
(el polígono) más **un triángulo por cada cara lateral**, todos esos
triángulos con un vértice en común (el que después se convierte en el
ápice al doblar).

## Desarrollo del cilindro

El desarrollo de un cilindro (ver `../cilindros/`) tiene: **dos círculos**
(las bases) más **un rectángulo** para la superficie lateral. Ese
rectángulo tiene ancho igual a la **altura** del cilindro, y largo igual a
la **circunferencia de la base** (2 × π × r) — porque al enrollar el
rectángulo, ese lado largo es justo lo que "le da la vuelta" al círculo.

## Desarrollo del cono

El desarrollo de un cono (ver `../conos/`) tiene: **un círculo** (la base)
más **un sector circular** (una "porción de pizza") para la superficie
lateral. Ese sector tiene radio igual a la **generatriz** del cono, y la
longitud de su arco coincide exactamente con la circunferencia de la base
del cono — así, al enrollar el sector, cierra perfecto sobre el círculo de
la base.

## La esfera NO tiene desarrollo plano exacto

A diferencia de los otros cuatro cuerpos, la **esfera no se puede
"desenrollar" en una figura plana sin deformarla**. Es un hecho
matemático real (no una limitación de este módulo): una superficie
curvada en dos direcciones a la vez (como la esfera) no puede aplanarse
sin estirar o cortar algo. Es la misma razón por la que todo mapa plano
del mundo (que intenta "desenrollar" la superficie esférica de la Tierra)
tiene que deformar algo — países cerca de los polos se ven más grandes de
lo que son en la proyección más usada, por ejemplo. Para representar una
esfera con material plano, hace falta cortarla en gajos (como una pelota
de fútbol, hecha de muchos parches curvos, no de un desarrollo plano
único).

## Para qué sirve calcular la superficie con el desarrollo

Sumar el área de cada pieza del desarrollo da directamente la fórmula de
la superficie total, ya vista para cada cuerpo:

- Prisma: 2 × área de la base + (perímetro de la base × altura).
- Pirámide: área de la base + suma de las áreas de los triángulos
  laterales.
- Cilindro: 2 × π × r² + 2 × π × r × h.
- Cono: π × r² + π × r × g.
