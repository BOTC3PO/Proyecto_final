# Matemática — Regresión lineal (teoria)

> Tema del MAPA: `D15` (Tronco 4.b). Depende de
> `../construir-un-grafico/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — la recta, el método que la ajusta y el
coeficiente que mide qué tan bien ajusta son tres ideas separables.

---

## Qué es la regresión lineal

Cuando se grafican pares de datos numéricos (por ejemplo, "horas de
estudio" en el eje x y "nota obtenida" en el eje y — la nube de puntos
de `../construir-un-grafico/`), muchas veces los puntos sugieren una
tendencia: a medida que uno crece, el otro también (o al revés). La
**regresión lineal** es el método para encontrar la **recta que mejor
describe** esa tendencia.

```
y = m·x + b
```

- **m** (la pendiente): cuánto cambia `y` por cada unidad que aumenta
  `x`. Positiva → relación directa (ambas crecen juntas); negativa →
  relación inversa (una crece, la otra baja).
- **b** (la ordenada al origen): el valor de `y` cuando `x = 0`.

## Cómo se elige "la mejor" recta

Entre todas las rectas posibles, se elige la que hace **mínima la
suma de las distancias verticales al cuadrado** entre cada punto real
y la recta (el método de **mínimos cuadrados**). Se usan distancias al
**cuadrado** por la misma razón que en la varianza
(`../tablas-de-frecuencia-cuartiles-percentiles-y-varianza/`): si se
sumaran las distancias sin elevar al cuadrado, las que quedan por
encima de la recta y las que quedan por debajo se cancelarían entre
sí.

## El coeficiente de correlación (r)

Además de la recta en sí, se calcula un número que dice **qué tan
bien** esa recta describe a los datos reales: el **coeficiente de
correlación (r)**, que va de `−1` a `1`.

| Valor de r | Qué significa |
|---|---|
| Cerca de `+1` | Relación lineal directa fuerte (los puntos casi forman una recta ascendente) |
| Cerca de `−1` | Relación lineal inversa fuerte (recta descendente) |
| Cerca de `0` | Poca o ninguna relación **lineal** (los puntos no siguen ninguna recta clara) |

**r = 0 no significa "sin ninguna relación"** — sólo dice que no hay
una relación **lineal**. Dos variables pueden estar fuertemente
relacionadas de forma curva (no recta) y aun así dar un r cercano a 0.

## Usar la recta para predecir (y su límite)

Una vez ajustada, la recta sirve para **predecir** `y` a partir de un
`x` nuevo, reemplazando en `y = m·x + b`. Pero **extrapolar** (predecir
fuera del rango de valores de `x` que realmente se observaron) es
riesgoso: no hay garantía de que la misma tendencia lineal siga
valiendo fuera de ese rango.

## Para qué sirve

Es la herramienta estándar para cuantificar y predecir relaciones
entre dos variables numéricas: gasto en publicidad vs. ventas, horas
de estudio vs. nota, temperatura vs. consumo eléctrico. Pero ajustar
bien una recta (r alto) **no prueba** que una variable cause la otra
— esa distinción crucial es exactamente el tema del módulo que sigue,
`../correlacion-no-es-causalidad/`.
