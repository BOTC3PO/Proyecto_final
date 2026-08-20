# Matemática — Error sistemático vs. aleatorio: incertidumbre experimental (teoría)

> Tema del MAPA: `M5B` (Tronco 3.a — Geometría: de la forma a la medida).
> Depende de `../cifras-significativas-y-error/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — varias ideas encadenadas (los dos tipos de error,
cómo corregir cada uno, exactitud vs. precisión) mejor separadas en
diapositivas.

---

## Dos causas distintas de error

En `../cifras-significativas-y-error/` se vio que toda medición tiene un
margen de error. Pero ese error puede tener dos causas muy distintas, que
se corrigen de formas completamente diferentes.

## Error sistemático

Un **error sistemático** es un error que se repite siempre en la MISMA
dirección y con una magnitud parecida, por una causa identificable: un
instrumento mal calibrado, un método de medición con un defecto de
diseño. Ejemplo: una balanza que, por estar mal calibrada, siempre pesa
2 gramos de más — cada medición que se haga con ella va a estar sesgada
en esa misma dirección.

**Cómo se corrige**: identificando la causa y arreglándola (recalibrar el
instrumento, corregir el método) — o, si no se puede recalibrar,
restándole (o sumándole) la corrección conocida a cada medición.

## Error aleatorio

Un **error aleatorio** es un error que varía de forma impredecible en
cada medición — a veces da de más, a veces de menos, sin un patrón fijo.
Viene de factores que no se pueden controlar del todo: pequeñas
variaciones en cómo se lee el instrumento, el viento en una carrera
cronometrada a mano, vibraciones.

**Cómo se reduce**: repitiendo la medición varias veces y **promediando**
los resultados. Como el error aleatorio a veces suma y a veces resta, al
promediar muchas mediciones esos errores tienden a cancelarse entre sí —
el promedio queda más cerca del valor real que cualquier medición
individual.

## Un punto clave: promediar NO corrige el error sistemático

Si el error es sistemático (la balanza siempre pesa 2 g de más), repetir
la medición y promediar NO ayuda: todas las mediciones están corridas en
la misma dirección, así que el promedio también queda corrido. Promediar
sólo funciona contra el error aleatorio.

## Exactitud vs. precisión

Dos palabras que se usan como sinónimos en el lenguaje cotidiano, pero que
en medición significan cosas distintas:

- **Exactitud**: qué tan cerca está una medición (o el promedio de varias)
  del valor REAL. Depende sobre todo del error sistemático.
- **Precisión**: qué tan cerca están las mediciones ENTRE SÍ, aunque no
  necesariamente cerca del valor real. Depende sobre todo del error
  aleatorio.

Es posible ser preciso sin ser exacto (varias mediciones muy parecidas
entre sí, pero todas alejadas del valor real por un error sistemático —
como tiros al blanco muy agrupados, pero lejos del centro) y exacto sin
ser preciso (mediciones muy dispersas entre sí, pero cuyo promedio da
cerca del valor real — tiros dispersos por todo el blanco, pero
centrados en promedio).
