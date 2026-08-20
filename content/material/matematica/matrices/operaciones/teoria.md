# Matemática — Matrices: operaciones (teoría)

> Tema del MAPA: `AL1` (mitad — Tronco 2, Algebraico). Depende de
> `../../sistemas-dos-ecuaciones/` (ver `../../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (qué es una matriz, suma y
resta, escalar, producto, identidad, transpuesta, errores comunes).

---

## Qué es una matriz

Una **matriz** es una tabla rectangular de números, ordenada en **filas**
(horizontal) y **columnas** (vertical). El tamaño se escribe m×n (m filas,
n columnas). Cada número tiene una posición, la fila i y la columna j:

```
A = | a11  a12 |
    | a21  a22 |
```

Es una matriz de 2×2: a11 está en la fila 1, columna 1; a12 en la fila 1,
columna 2; y así.

## Suma y resta de matrices

Sólo se pueden sumar (o restar) matrices del **mismo tamaño**. Se suma
(o resta) cada elemento con el que está en la misma posición de la otra
matriz — nada más:

```
A + B = | a11+b11  a12+b12 |
        | a21+b21  a22+b22 |
```

## Multiplicación por un escalar

Multiplicar una matriz por un número (un **escalar**) multiplica **cada**
elemento por ese número:

```
k · A = | k·a11  k·a12 |
        | k·a21  k·a22 |
```

## Multiplicación de matrices

Es la operación que más se diferencia de la aritmética normal. Para
multiplicar A · B:

1. **Condición**: el número de **columnas** de A tiene que ser igual al
   número de **filas** de B. Si A es m×n y B es n×p, el resultado A·B es
   de tamaño m×p.
2. **Regla "fila por columna"**: cada elemento del resultado se calcula
   multiplicando la fila correspondiente de A por la columna
   correspondiente de B, término a término, y sumando:

```
A · B = | a11·b11+a12·b21   a11·b12+a12·b22 |
        | a21·b11+a22·b21   a21·b12+a22·b22 |
```

El elemento de la fila 1, columna 1 del resultado usa la fila 1 de A y la
columna 1 de B; el de fila 1, columna 2 usa la fila 1 de A y la columna 2
de B, y así.

**Importante**: la multiplicación de matrices **no es conmutativa** — en
general, A·B ≠ B·A (ni siquiera tienen por qué tener el mismo tamaño).

## La matriz identidad

La matriz identidad I es cuadrada, con 1 en la diagonal principal (de
arriba-izquierda a abajo-derecha) y 0 en el resto:

```
I₂ = | 1  0 |
     | 0  1 |
```

Es el "1" de la multiplicación de matrices: A · I = A, para cualquier
matriz A del tamaño compatible.

## La matriz transpuesta

La transpuesta de A (se escribe Aᵀ) se arma intercambiando filas por
columnas: el elemento que estaba en la fila i, columna j pasa a la fila
j, columna i.

```
Si A = | a11  a12 |     Aᵀ = | a11  a21 |
       | a21  a22 |          | a12  a22 |
```

## Ejemplo resuelto: producto de dos matrices 2×2

**A = [[2, 3], [1, 4]], B = [[5, 0], [2, 1]]. Calcular A·B.**

- Elemento (1,1): (2×5) + (3×2) = 10 + 6 = 16
- Elemento (1,2): (2×0) + (3×1) = 0 + 3 = 3
- Elemento (2,1): (1×5) + (4×2) = 5 + 8 = 13
- Elemento (2,2): (1×0) + (4×1) = 0 + 4 = 4

A·B = [[16, 3], [13, 4]]

## Errores comunes

- Sumar matrices de distinto tamaño (no está definido).
- Multiplicar matrices "elemento a elemento", como si fuera una suma —
  la multiplicación de matrices usa la regla fila por columna, no
  posición por posición.
- Multiplicar en el orden equivocado y asumir que da lo mismo (A·B casi
  nunca es igual a B·A).
- Intentar multiplicar dos matrices sin chequear que las columnas de la
  primera coincidan con las filas de la segunda.
