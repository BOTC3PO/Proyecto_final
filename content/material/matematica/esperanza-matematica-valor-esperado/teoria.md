# Matemática — Esperanza matemática: valor esperado E(X) (teoria)

> Tema del MAPA: `D17` (Tronco 4.b). Depende de
> `../probabilidad-compuesta/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** — una sola fórmula (un promedio ponderado) con ejemplos de
aplicación, no necesita varias diapositivas.

---

## Qué es el valor esperado

El **valor esperado** (o esperanza matemática) `E(X)` de una variable
aleatoria es un **promedio ponderado**: en vez de promediar todos los
valores por igual (como en `../media-mediana-y-moda/`), cada valor
posible se pondera por **su propia probabilidad de ocurrir**.

```
E(X) = x₁×P(x₁) + x₂×P(x₂) + ... + xₙ×P(xₙ)
```

**Ejemplo**: una variable aleatoria `X` toma el valor 2 con
probabilidad 0,3; el valor 5 con probabilidad 0,5; y el valor 8 con
probabilidad 0,2 (las probabilidades siempre suman 1):

```
E(X) = 2×0,3 + 5×0,5 + 8×0,2 = 0,6 + 2,5 + 1,6 = 4,7
```

Notar que `E(X) = 4,7` no es ninguno de los tres valores posibles (2,
5 u 8) — es un promedio a largo plazo: si se repitiera el experimento
muchísimas veces, el promedio de los resultados se acercaría a 4,7.

## El ejemplo clásico: un juego de azar

El valor esperado es la herramienta estándar para decidir si un juego
de azar (o cualquier apuesta) es favorable o no. Un juego cuesta $100
jugar, y paga $500 con probabilidad 0,1 (y $0 el resto de las veces):

```
E(ganancia) = 500×0,1 + 0×0,9 − 100 = 50 − 100 = −50
```

En promedio, se pierden $50 por partida — el juego es desfavorable
para quien juega, aunque en una partida puntual se pueda ganar. Esta
es, exactamente, la lógica detrás de cualquier casino: el valor
esperado del jugador siempre es negativo (y el de la casa, positivo),
aunque partidas individuales puedan ir para cualquier lado.

## Caso particular: la distribución binomial

`../distribucion-binomial/` (ya visto) adelantó su fórmula de valor
esperado sin demostrarla: `E(X) = n×p`. Es, en el fondo, el mismo
promedio ponderado de acá, aplicado a una variable que sólo puede
tomar valores enteros de 0 a `n`.

## Para qué sirve

Es la base de cualquier decisión racional bajo incertidumbre: cuánto
cobrar por un seguro (la aseguradora calcula el valor esperado del
siniestro), si conviene una inversión de riesgo (comparando el valor
esperado del retorno contra el de una alternativa más segura), o
simplemente si un juego de azar conviene jugarlo.
`../../economia/valor-esperado-riesgo/` retoma exactamente esta
fórmula para decidir sobre inversiones financieras.
