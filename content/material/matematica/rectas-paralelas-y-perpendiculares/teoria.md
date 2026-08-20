# Matemática — Rectas paralelas y perpendiculares (teoría)

> Tema del MAPA: `GA6` (Tronco 3.b — Geometría analítica, trigonometría y
> vectores). Depende de `../ecuacion-de-la-recta/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** — retoma un criterio ya conocido (`m₁=m₂` / `m₁×m₂=−1`) y lo
aplica a problemas geométricos concretos; no es una unidad grande de
contenido nuevo.

---

## El criterio, en una línea

`../funcion-lineal-pendiente/` ya estableció el criterio algebraico: dos
rectas son **paralelas** si tienen la misma pendiente (`m₁ = m₂`), y son
**perpendiculares** si el producto de sus pendientes da `−1`
(`m₁ × m₂ = −1`). Este módulo no repite esa deducción — la **aplica**
sobre el plano ya construido, a problemas geométricos concretos.

## Hallar la recta paralela a otra, por un punto dado

Dada una recta `y = mx + b` y un punto `(x₀, y₀)` que **no** está sobre
ella, la recta paralela que pasa por ese punto:

1. Usa la **misma pendiente** `m` (paralela = misma inclinación).
2. Se reemplaza el punto en `y₀ = mx₀ + b_nueva` para despejar la nueva
   ordenada al origen `b_nueva`.

## Hallar la recta perpendicular a otra, por un punto dado

Mismo procedimiento, pero con la pendiente **recíproca y opuesta**:

1. Si la recta original tiene pendiente `m`, la perpendicular tiene
   pendiente `−1/m`.
2. Se reemplaza el punto dado para despejar la nueva ordenada al origen.

## Paralelas vs. coincidentes

Dos rectas con la misma pendiente pueden ser **paralelas** (nunca se
tocan, `b₁ ≠ b₂`) o, en realidad, **la misma recta** escrita dos veces
(**coincidentes**, `b₁ = b₂`). Antes de decir "son paralelas", conviene
verificar que además tengan distinta ordenada al origen — si coinciden
en las dos, no son dos rectas distintas.

## Aplicación: verificar si un cuadrilátero es un rectángulo

Dadas las coordenadas de los cuatro vértices de un cuadrilátero, se
puede confirmar si es un rectángulo calculando la pendiente de cada
lado: los lados opuestos tienen que ser **paralelos** entre sí, y los
lados consecutivos, **perpendiculares**. Ninguna medición con regla o
transportador hace falta — sólo las pendientes.

## Aplicación: la tangente y el radio

En `../circunferencia-y-circulo/` ya se mencionó que una recta tangente
a una circunferencia es siempre perpendicular al radio en el punto de
contacto. Con pendientes, esa propiedad se puede **verificar**
numéricamente: si el radio tiene pendiente `m`, la tangente en ese punto
tiene que tener pendiente `−1/m`.

## Para qué sirve

Verificar perpendicularidad y paralelismo con números (en vez de "a
ojo") es lo que permite confirmar propiedades geométricas de figuras
dadas por coordenadas — si un terreno es realmente rectangular, si dos
calles trazadas en un plano son paralelas, o si una estructura tiene los
ángulos rectos que se supone que tiene.
