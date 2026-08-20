# Matemática — Distribución normal (teoria)

> Tema del MAPA: `D7` (Tronco 4.b). Depende de
> `../dispersion-rango-y-desvio/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — forma de la curva, regla empírica y z-score son
tres ideas separables que conviene mostrar una por una.

---

## La campana de Gauss

La **distribución normal** (o campana de Gauss) es la forma que toman
muchísimos fenómenos naturales cuando se los grafica: la mayoría de los
casos se agrupan cerca del centro, y cada vez hay menos casos a medida
que uno se aleja hacia los extremos, en forma simétrica hacia ambos
lados.

Queda **completamente definida por sólo dos números**, los mismos dos
que ya se construyeron en los módulos anteriores:

- La **media** (μ): dónde está el centro de la campana.
- El **desvío estándar** (σ): qué tan ancha o angosta es la campana.

En una distribución normal perfecta, media, mediana y moda coinciden
en el mismo valor — es el caso ideal en el que un solo promedio SÍ
representa bien a todo el conjunto (a diferencia de lo visto en
`../cual-miente-y-cuando/`, que aplica a distribuciones asimétricas).

## La regla empírica (68-95-99,7)

Sin necesitar cálculo integral, alcanza con esta regla práctica para
saber qué proporción de los datos cae cerca de la media:

| Distancia a la media | % de los datos que cae ahí dentro |
|---|---|
| ±1 desvío estándar (μ ± σ) | ≈ 68% |
| ±2 desvíos estándar (μ ± 2σ) | ≈ 95% |
| ±3 desvíos estándar (μ ± 3σ) | ≈ 99,7% |

**Ejemplo**: si las notas de un examen tienen media 70 y desvío
estándar 10, aproximadamente el 68% de los alumnos sacó entre 60 y 80,
y el 95% sacó entre 50 y 90.

## El z-score: convertir cualquier valor a "cuántos desvíos"

El **z-score** (o puntaje estándar) de un valor `x` dice a cuántos
desvíos estándar está de la media:

```
z = (x − μ) / σ
```

- `z = 0` → el valor es exactamente la media.
- `z > 0` → el valor está por encima de la media.
- `z < 0` → el valor está por debajo de la media.

El z-score permite comparar valores de distribuciones distintas en una
misma escala (por ejemplo, comparar una nota de Matemática con una de
Lengua, aunque tengan medias y desvíos distintos).

## Para qué sirve

La normal aparece todo el tiempo porque, cuando muchos factores
pequeños e independientes se suman (altura de una persona, error de
una medición, tiempo de reacción), el resultado tiende a distribuirse
así — es, de hecho, la razón detrás del **teorema central del límite**
(un módulo más adelante en esta cadena). También es el puente hacia
`../variable-aleatoria-discreta-continua/`: la normal es el ejemplo
central de variable aleatoria **continua** (puede tomar cualquier
valor dentro de un intervalo), a diferencia de la binomial, que es
discreta (sólo cuenta números enteros de éxitos).
