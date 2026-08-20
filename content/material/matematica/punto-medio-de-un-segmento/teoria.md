# Matemática — Punto medio de un segmento (teoría)

> Tema del MAPA: `GA4` (Tronco 3.b — Geometría analítica, trigonometría y
> vectores). Depende de `../coordenadas-de-un-punto/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** — una fórmula chica y directa, no necesita separarse en
varias diapositivas.

---

## Qué es el punto medio

El **punto medio** de un segmento es el punto que está exactamente sobre
ese segmento, a la misma distancia de sus dos extremos — el punto que lo
divide en dos mitades iguales.

## La fórmula

Dados los extremos `(x₁, y₁)` y `(x₂, y₂)` de un segmento, el punto
medio `M` es:

```
M = ( (x₁ + x₂) / 2 , (y₁ + y₂) / 2 )
```

Es decir: **el promedio de las abscisas**, y **el promedio de las
ordenadas**, cada uno por separado.

## Por qué es simplemente un promedio

Promediar dos números siempre da el valor que está exactamente en el
medio de los dos, en la recta numérica. Como el eje x y el eje y son,
cada uno, una recta numérica (ver `../plano-cartesiano/`), promediar las
abscisas da la posición horizontal del medio, y promediar las ordenadas
da la posición vertical del medio — sin necesitar ninguna fórmula más
compleja que eso.

## El punto medio equidista de los dos extremos

Por definición, la distancia entre el punto medio y cada uno de los dos
extremos del segmento es siempre la misma, y es exactamente la mitad de
la distancia total del segmento (ver `../distancia-entre-dos-puntos/`).

## No depende de la fórmula de distancia

A diferencia de lo que podría pensarse, el punto medio **no** necesita
calcular ninguna distancia ni usar raíces cuadradas — es una operación
directa sobre las coordenadas. Por eso este módulo no depende de
`../distancia-entre-dos-puntos/`, aunque los dos temas suelan aparecer
juntos.

## Para qué sirve

Encontrar el centro exacto de un objeto o de un espacio (el centro de
una mesa, el punto medio de una cancha), trazar la mediatriz de un
segmento (la recta perpendicular que pasa justo por su punto medio), o
ubicar el centro de un segmento en cualquier diseño o construcción sobre
un plano de coordenadas.
