# Matemática — Dispersión: rango y desvío (teoria)

> Tema del MAPA: `D6` (Tronco 4.b). Depende de
> `../tablas-de-frecuencia-cuartiles-percentiles-y-varianza/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — dos medidas de dispersión distintas (rango, la más
simple; desvío estándar, la que realmente se usa) que conviene mostrar
por separado, retomando la varianza ya definida en el módulo anterior.

---

## Parte 1 — Rango: la medida más simple

El **rango** es la medida de dispersión más básica: la distancia entre
el valor más alto y el más bajo de un conjunto de datos.

```
rango = máximo − mínimo
```

**Ejemplo**: con las edades 12, 15, 13, 19, 14, el rango es
`19 − 12 = 7`.

**El problema del rango**: sólo mira los dos valores extremos e ignora
todo lo que pasa en el medio. Si un único dato es atípico, el rango se
dispara sin que el resto de los datos haya cambiado en nada — dos
conjuntos con formas de dispersión muy distintas pueden tener
exactamente el mismo rango.

## Parte 2 — Desvío estándar: la raíz de la varianza

`../tablas-de-frecuencia-cuartiles-percentiles-y-varianza/` ya definió
la **varianza** (el promedio de las distancias al cuadrado respecto de
la media). El **desvío estándar** (o desviación típica) es,
simplemente, su raíz cuadrada:

```
desvío estándar = √varianza
```

**Por qué la raíz**: la varianza queda en unidades al cuadrado (si los
datos son metros, la varianza queda en metros²) porque elevó las
distancias al cuadrado para que no se cancelaran entre sí. Sacar la
raíz devuelve el resultado a las unidades originales — por eso el
desvío estándar, y no la varianza, es la medida que se reporta e
interpreta directamente ("los datos se apartan, en promedio, tanto de
la media").

**Ejemplo** (continuando el de `../tablas-de-frecuencia-.../teoria.md`):
con los valores 2, 4, 6 (media = 4), la varianza daba `2,67` — el
desvío estándar es `√2,67 ≈ 1,63`.

## Parte 3 — Comparar dispersión entre conjuntos de distinta escala

El desvío estándar solo no siempre alcanza para comparar "qué tan
disperso" es un conjunto frente a otro, si las escalas son muy
distintas (por ejemplo, dispersión de alturas en cm vs. dispersión de
sueldos en pesos). Para eso existe el **coeficiente de variación**:

```
CV = desvío estándar / media
```

Al dividir por la media, el CV queda **sin unidades** (o expresado como
porcentaje) — permite comparar la dispersión relativa de conjuntos que
miden cosas distintas o que tienen promedios muy distintos entre sí.

## Para qué sirve

Rango y desvío estándar son las dos formas más comunes de responder
"¿qué tan parecidos son estos datos entre sí?" — el rango da una idea
rápida y grosera, el desvío estándar es la medida que de verdad se usa
en estadística. Media y desvío estándar juntos son, además, los dos
únicos números que definen por completo una **distribución normal**
(el módulo que sigue): ahí se retoma el desvío para ver qué proporción
de los datos cae dentro de 1, 2 o 3 desvíos de la media.
