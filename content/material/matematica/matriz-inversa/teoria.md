# Matemática — Matriz inversa (teoría)

> Tema del MAPA: `AL1B` (mitad — Tronco 2, Algebraico). Depende de
> `../determinante/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (qué es la inversa,
fórmula 2×2, verificación, uso para resolver sistemas, errores comunes).

---

## Qué es la matriz inversa

La inversa de una matriz cuadrada A (se escribe A⁻¹) es la matriz que,
multiplicada por A, da la matriz **identidad**: A · A⁻¹ = I. Es el
equivalente matricial de "1/x" para un número: así como x · (1/x) = 1,
una matriz multiplicada por su inversa "deshace" la matriz.

**No toda matriz tiene inversa.** Existe sólo si det(A) ≠ 0 (ver
`../determinante/teoria.md`) — por eso el determinante es el primer paso
obligatorio antes de intentar invertir.

## Fórmula de la inversa 2×2

```
A = | a  b |         A⁻¹ = (1 / det(A)) · |  d  −b |
    | c  d |                              | −c   a |
```

Dos movimientos, en este orden:
1. **Armar la matriz adjunta**: intercambiar a y d de lugar, y cambiar el
   signo de b y de c (quedan en su misma posición, sólo cambia el signo).
2. **Dividir cada elemento** de esa matriz adjunta por det(A).

## Ejemplo resuelto

**A = [[3, 5], [1, 2]]**

1. det(A) = (3×2) − (5×1) = 6 − 5 = 1
2. Adjunta: intercambiar 3 y 2, cambiar el signo de 5 y de 1:
   [[2, −5], [−1, 3]]
3. Dividir por det(A) = 1 (no cambia nada en este caso):
   **A⁻¹ = [[2, −5], [−1, 3]]**

## Verificar la inversa

Igual que con cualquier operación inversa, se verifica multiplicando:
A · A⁻¹ tiene que dar exactamente la matriz identidad. Si no da la
identidad, hay un error en algún paso (signo equivocado, división mal
hecha, o algo así).

## Para qué sirve: resolver sistemas

Un sistema de ecuaciones Ax = b (A es la matriz de coeficientes, x el
vector de incógnitas, b los términos independientes) se puede resolver
directamente despejando x = A⁻¹ · b — el mismo movimiento que despejar
x = c/a en una ecuación de un número, pero con matrices en vez de
números sueltos.

## Errores comunes

- Olvidarse de dividir por el determinante, y dejar sólo la matriz
  adjunta como si fuera la inversa.
- Cambiar el signo de a y d en vez de a b y c (los que cambian de signo
  son los de la diagonal **secundaria**, no la principal).
- Intercambiar b y c en vez de a y d (los que se intercambian de lugar
  son los de la diagonal **principal**).
- Intentar calcular la inversa de una matriz con determinante 0 — no
  existe, no es que "dé un número muy grande" o "un error de cálculo".
