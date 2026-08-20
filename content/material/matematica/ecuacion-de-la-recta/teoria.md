# Matemática — Ecuación de la recta: pendiente y ordenada al origen (teoría)

> Tema del MAPA: `GA5` (Tronco 3.b — Geometría analítica, trigonometría y
> vectores). Depende de `../distancia-entre-dos-puntos/` y
> `../funcion-lineal-pendiente/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — varias ideas encadenadas (graficar desde la
ecuación, intersecciones con los ejes, casos especiales) mejor
separadas en diapositivas.

---

## El mismo objeto, visto ahora como dibujo

`../funcion-lineal-pendiente/` ya presentó `y = mx + b`: cómo calcular
la pendiente `m` a partir de dos puntos, y cómo armar la ecuación con el
método punto-pendiente. Este módulo **no repite ese cálculo** — toma esa
misma ecuación y la mira como lo que es sobre el plano cartesiano
(`../plano-cartesiano/`): un dibujo, una recta trazada punto a punto.

## Graficar una recta a partir de su ecuación

Para dibujar `y = mx + b` sin necesidad de tabular muchos puntos:

1. Marcar la **ordenada al origen**: el punto `(0, b)`, donde la recta
   cruza el eje y (b es literalmente el valor de y cuando x = 0).
2. Desde ese punto, usar la pendiente `m` como "cuánto sube y cuánto
   avanza": si `m = 3/4`, por ejemplo, subir 3 unidades y avanzar 4 hacia
   la derecha para marcar un segundo punto.
3. Trazar la recta que pasa por esos dos puntos.

## Ordenada al origen y abscisa al origen

- La **ordenada al origen** es el punto `(0, b)`: donde la recta cruza
  el eje y. Se obtiene evaluando la ecuación en `x = 0`.
- La **abscisa al origen** (o "raíz" de la recta) es el punto donde la
  recta cruza el eje x, es decir, donde `y = 0`. Se despeja poniendo
  `0 = mx + b`, lo que da `x = −b/m`.

## Casos especiales

- Si `b = 0`, la recta pasa exactamente por el **origen** `(0, 0)`.
- Si `m = 0`, la recta es **horizontal**: `y = b` para cualquier x. Sólo
  cruza el eje x si además `b = 0`.
- Una recta **vertical** (`x = k`, para cualquier k) tiene pendiente
  **indefinida** (no se puede escribir como `y = mx + b`, porque
  cualquier valor de x da infinitos valores de y) — es el único tipo de
  recta que esta forma de ecuación no puede representar.

## Deducir la ecuación viendo dos puntos marcados en el plano

Dados dos puntos ya ubicados en el plano, se puede leer (o calcular con
la fórmula de pendiente ya conocida) la ecuación completa de la recta
que pasa por ambos: la pendiente sale de comparar cuánto sube/baja la
recta entre los dos puntos, y la ordenada al origen se lee directo donde
la recta cruza el eje y (o se despeja si no cruza justo en un punto
marcado).

## Para qué sirve

Pasar de la fórmula al dibujo (y viceversa) es lo que permite resolver
problemas geométricos reales con una ecuación: encontrar dónde se cruza
una recta con los ejes, verificar si un punto dado está sobre una recta,
o preparar el terreno para comparar dos rectas entre sí
(`../rectas-paralelas-y-perpendiculares/`).
