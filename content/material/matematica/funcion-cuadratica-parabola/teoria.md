# Matemática — Función cuadrática y parábola (teoría)

> Tema del MAPA: `A8` (Tronco 2 — Algebraico). Depende de
> `../ecuacion-cuadratica/`, `../funcion-dominio/` y `../funcion-imagen/`
> (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (forma general, vértice,
raíces, ordenada al origen, concavidad, errores comunes).

---

## La función cuadrática y su gráfico

Una **función cuadrática** tiene la forma f(x) = ax² + bx + c (a ≠ 0). Su
gráfico es siempre una **parábola** — la misma curva ya vista en
`../funcion-imagen/` para el caso particular f(x) = (x−h)² + k. Ahora se
trabaja con la forma general, sin que esté necesariamente ya "armada" en
forma de vértice.

## El vértice

El vértice es el punto extremo de la parábola (mínimo o máximo). Su
coordenada x se calcula con:

```
xᵥ = −b / (2a)
```

y la coordenada y del vértice es directamente evaluar la función en ese
punto: yᵥ = f(xᵥ).

## Eje de simetría

La recta vertical x = xᵥ es el **eje de simetría** de la parábola: todo
lo que pasa de un lado se refleja exactamente igual del otro lado.

## Raíces (ceros de la función)

Son los valores de x donde la parábola cruza el eje x (donde f(x)=0) —
exactamente las soluciones de la ecuación cuadrática asociada (ver
`../ecuacion-cuadratica/`). Según el discriminante, puede haber dos
raíces, una (raíz doble, la parábola sólo toca el eje x en el vértice), o
ninguna real (la parábola no cruza el eje x).

## Ordenada al origen

Es el valor de f(0) = c — donde la parábola cruza el eje y. Se lee
directo del coeficiente independiente, sin ninguna cuenta.

## Concavidad

El signo de a determina hacia dónde abre la parábola:
- **a > 0**: abre hacia **arriba**, el vértice es un **mínimo**.
- **a < 0**: abre hacia **abajo**, el vértice es un **máximo**.

(Mismo criterio ya visto en `../funcion-imagen/teoria.md` para la forma
de vértice — acá se deriva de la forma general.)

## Ejemplo resuelto

**f(x) = 2x² − 8x + 6**

- Vértice: xᵥ = −(−8)/(2×2) = 8/4 = 2. yᵥ = f(2) = 2(4)−8(2)+6 = 8−16+6 = −2.
  Vértice: (2, −2).
- Concavidad: a=2>0, abre hacia arriba (el vértice es un mínimo).
- Ordenada al origen: f(0) = 6.
- Raíces: 2x²−8x+6=0 → x²−4x+3=0 → (x−1)(x−3)=0 → x=1, x=3.

## Errores comunes

- Olvidar el signo negativo en xᵥ = −b/(2a) (calcular b/(2a) directo).
- Confundir la ordenada al origen (f(0)=c) con el vértice.
- Pensar que el vértice siempre está sobre el eje y (sólo pasa cuando
  b=0).
- Deducir mal la concavidad, mirando el signo de c o de b en vez del
  signo de a.
