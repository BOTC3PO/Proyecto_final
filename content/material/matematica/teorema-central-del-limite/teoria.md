# Matemática — Teorema central del límite (teoria)

> Tema del MAPA: `D12B` (Tronco 4.b). Depende de
> `../muestreo-y-sesgo/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** — un solo enunciado matemático con una consecuencia
práctica directa, no necesita varias diapositivas.

---

## El enunciado

`../muestreo-y-sesgo/` terminó con una observación intrigante: si se
toman muchas muestras de una población y se calcula el promedio de
cada una, esos promedios tienden a distribuirse en forma de campana.
El **teorema central del límite (TCL)** es la razón matemática de por
qué eso pasa, y dice algo todavía más fuerte:

> Si se toman muestras suficientemente grandes de **cualquier
> población** (sin importar qué forma tenga su distribución original:
> uniforme, sesgada, con dos picos...), la distribución de los
> **promedios de esas muestras** se aproxima a una **distribución
> normal**.

**Ejemplo intuitivo**: el resultado de tirar un dado no es normal (es
uniforme: 1, 2, 3, 4, 5, 6 con igual probabilidad cada uno). Pero si se
tiran 30 dados y se promedia el resultado, y se repite ese experimento
muchas veces, los promedios obtenidos SÍ se distribuyen aproximadamente
como una normal — aunque el dado individual no lo sea.

## Media y error estándar de la distribución de promedios

La distribución de esos promedios muestrales queda centrada
exactamente en la media de la población (μ), y su propio "desvío
estándar" tiene nombre propio: el **error estándar**.

```
error estándar = σ / √n
```

Donde `σ` es el desvío estándar de la población y `n` es el tamaño de
cada muestra. Cuanto **más grande la muestra**, **más chico el error
estándar** — los promedios de muestras grandes varían menos entre sí
que los promedios de muestras chicas, y se acercan más a la media
poblacional real.

**Ejemplo**: con σ = 20, una muestra de n=25 da un error estándar de
`20/√25 = 4`; una muestra de n=100 (4 veces más grande) da
`20/√100 = 2` — el error estándar se **reduce a la mitad**, no a un
cuarto, porque depende de la **raíz** de n.

## La regla práctica de n ≥ 30

La aproximación a la normal mejora a medida que crece el tamaño de
muestra `n`. Como regla práctica (no una ley matemática exacta), se
suele considerar que con `n ≥ 30` la aproximación ya es suficientemente
buena para la mayoría de los usos, sin importar qué tan "rara" sea la
forma de la población original.

## Para qué sirve

El TCL es la pieza que permite usar todo el aparato ya construido
para la distribución normal (regla empírica, z-scores) sobre
**promedios de muestras**, aunque la población de partida no sea
normal en absoluto. Es, literalmente, el fundamento matemático de
`../intervalo-de-confianza/` y `../test-de-hipotesis/`: sin el TCL,
esos dos módulos estarían aplicando fórmulas de la normal sin ninguna
justificación de por qué corresponden.
