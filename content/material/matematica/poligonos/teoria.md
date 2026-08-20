# Matemática — Polígonos: diagonales y ángulos internos (teoría)

> Tema del MAPA: `GO5` (Tronco 3.a — Geometría: de la forma a la medida).
> Depende de `../angulos/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — varias ideas encadenadas (clasificación, diagonales,
ángulos internos, ángulos externos) mejor separadas en diapositivas.

---

## Qué es un polígono

Un **polígono** es una figura plana cerrada formada por segmentos de recta
(los **lados**) unidos por sus extremos (los **vértices**), sin que ningún
lado se cruce con otro. El número de lados le da su nombre: triángulo (3),
cuadrilátero (4), pentágono (5), hexágono (6), heptágono (7), octógono
(8), eneágono (9), decágono (10), y así.

## Convexo vs. cóncavo

Un polígono es **convexo** si todos sus ángulos internos miden menos de
180° (ningún "vértice hundido hacia adentro") — cualquier segmento que une
dos puntos del polígono queda siempre dentro de la figura. Es **cóncavo**
si tiene al menos un ángulo interno mayor a 180° (un vértice que se hunde
hacia adentro, dando forma de "flecha" o "estrella").

## Regular vs. irregular

Un polígono es **regular** si todos sus lados miden lo mismo Y todos sus
ángulos internos miden lo mismo (como un cuadrado o un hexágono regular).
Si falta cualquiera de las dos condiciones, es **irregular**.

## Diagonales

Una **diagonal** es un segmento que une dos vértices no consecutivos del
polígono (no un lado). Desde cada vértice de un polígono de `n` lados salen
`n - 3` diagonales (no se cuenta el propio vértice ni sus dos vecinos, que
ya están unidos por lados). Como hay `n` vértices y cada diagonal se cuenta
dos veces (una desde cada extremo), el número total de diagonales es:

```
D = n(n - 3) / 2
```

Un triángulo (`n = 3`) tiene 0 diagonales: no hay ningún par de vértices no
consecutivos.

## Suma de los ángulos internos

La suma de los ángulos internos de un polígono de `n` lados es:

```
Suma = (n - 2) × 180°
```

¿Por qué? Porque cualquier polígono se puede dividir en `(n - 2)`
triángulos trazando diagonales desde un mismo vértice, y cada triángulo
suma 180° (ver `../triangulos/`). Un cuadrilátero (`n = 4`) se divide en 2
triángulos → suma 360°. Un pentágono (`n = 5`) se divide en 3 triángulos →
suma 540°.

## Ángulo interior de un polígono regular

Si el polígono es regular, los `n` ángulos internos son todos iguales, así
que cada uno mide:

```
Ángulo interior = (n - 2) × 180° / n
```

## Ángulos exteriores

El **ángulo exterior** en un vértice es el que se forma entre un lado y la
prolongación del lado siguiente (es el suplemento del ángulo interior:
interior + exterior = 180°). Una propiedad notable: **la suma de los
ángulos exteriores de cualquier polígono convexo es siempre 360°**,
sin importar cuántos lados tenga. En un polígono regular, cada ángulo
exterior mide `360° / n`.

## Para qué sirve

Estas fórmulas permiten calcular ángulos y diagonales de cualquier
polígono sin tener que medirlos uno por uno — desde diseñar un mosaico
hasta calcular cuántas diagonales tiene la estructura de un domo
geodésico.
