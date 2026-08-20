# Matemática — Determinante (teoría)

> Tema del MAPA: `AL1B` (mitad — Tronco 2, Algebraico). Depende de
> `../matrices/sistemas-nxn/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (qué es, fórmula 2×2,
regla de Sarrus para 3×3, para qué sirve, errores comunes).

---

## Qué es el determinante

El **determinante** es un único número que se calcula a partir de una
matriz **cuadrada** (mismo número de filas que de columnas), y resume
información clave sobre ella — sobre todo, si tiene o no inversa (ver
`../matriz-inversa/teoria.md`). Se escribe det(A) o |A|.

## Determinante de una matriz 2×2

```
A = | a  b |         det(A) = a·d − b·c
    | c  d |
```

Se multiplican los elementos de la diagonal principal (a·d) y se resta el
producto de la diagonal secundaria (b·c). El orden importa: es a·d menos
b·c, no al revés.

## Determinante de una matriz 3×3: regla de Sarrus

```
A = | a  b  c |
    | d  e  f |
    | g  h  i |

det(A) = aei + bfg + cdh − ceg − afh − bdi
```

Una forma práctica de recordarlo: repetir las dos primeras columnas a la
derecha de la matriz, sumar los productos de las tres diagonales que van
de arriba-izquierda a abajo-derecha, y restar los productos de las tres
diagonales que van de abajo-izquierda a arriba-derecha.

```
| a  b  c | a  b
| d  e  f | d  e
| g  h  i | g  h

Diagonales "+": a·e·i, b·f·g, c·d·h
Diagonales "−": c·e·g, a·f·h, b·d·i
```

## Para qué sirve

- **det(A) ≠ 0**: la matriz A es **invertible** (tiene inversa, ver
  `../matriz-inversa/teoria.md`), y el sistema de ecuaciones asociado
  tiene **una única solución**.
- **det(A) = 0**: la matriz A **no** es invertible, y el sistema asociado
  no tiene solución única (no tiene ninguna, o tiene infinitas) — las
  filas (o columnas) de A son, en algún sentido, "redundantes" entre sí.

## Ejemplo resuelto (2×2)

**A = [[3, 5], [2, 4]]**

det(A) = (3×4) − (5×2) = 12 − 10 = 2

Como det(A) = 2 ≠ 0, la matriz es invertible.

## Ejemplo resuelto (3×3)

**A = [[1, 2, 3], [0, 1, 4], [5, 6, 0]]**

- Diagonales "+": (1×1×0) + (2×4×5) + (3×0×6) = 0 + 40 + 0 = 40
- Diagonales "−": (3×1×5) + (1×4×6) + (2×0×0) = 15 + 24 + 0 = 39

det(A) = 40 − 39 = 1

## Errores comunes

- Invertir el orden en 2×2: calcular b·c − a·d en vez de a·d − b·c (el
  signo queda al revés).
- En Sarrus, olvidarse de alguno de los seis productos, o confundir cuáles
  se suman y cuáles se restan.
- Aplicar Sarrus a una matriz que no es 3×3 — esta regla puntual sólo
  funciona para 3×3 (para tamaños mayores hace falta el método general de
  cofactores, fuera del alcance de este módulo).
- Confundir "determinante 0" con "matriz llena de ceros" — una matriz con
  filas repetidas o proporcionales también da determinante 0, aunque
  tenga números distintos de cero.
