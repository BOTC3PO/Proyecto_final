# Matemática — Matrices: sistemas n×n (teoría)

> Tema del MAPA: `AL1` (mitad — Tronco 2, Algebraico). Depende de
> `../operaciones/` (ver `../../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (matriz aumentada,
operaciones de fila, método de Gauss, generalización a n×n, errores
comunes).

---

## Por qué usar matrices para resolver sistemas

`../../sistemas-dos-ecuaciones/` resolvió sistemas de **dos** ecuaciones
con sustitución, igualación o eliminación. Esos métodos se vuelven
incómodos con tres, cuatro o más incógnitas. Las matrices generalizan la
**eliminación** a cualquier cantidad de ecuaciones, de forma ordenada y
mecánica.

## La matriz aumentada

Un sistema se puede escribir como una matriz que junta los coeficientes
de cada incógnita con los términos independientes, separados por una
línea (o una columna extra):

```
2x + y − z = 3        | 2   1  −1 |  3 |
x − y + 2z = 1   →     | 1  −1   2 |  1 |
3x + 2y + z = 10       | 3   2   1 | 10 |
```

Cada **fila** es una ecuación completa; cada **columna** (menos la
última) corresponde a una incógnita.

## Operaciones elementales de fila

Se le pueden aplicar tres operaciones a las filas sin cambiar el conjunto
solución del sistema (son exactamente las mismas operaciones legales que
ya se usaban en eliminación, aplicadas a la fila entera):

1. **Intercambiar dos filas** (cambiar el orden de las ecuaciones no
   cambia el sistema).
2. **Multiplicar una fila entera por un número distinto de 0**.
3. **Sumar (o restar) un múltiplo de una fila a otra fila**.

La regla clave: cualquier operación se aplica a la fila **completa**,
incluida la columna de términos independientes — no sólo a los
coeficientes.

## Método de Gauss (triangular la matriz)

El objetivo es usar esas operaciones para dejar ceros **debajo** de la
diagonal principal, hasta que la matriz quede en forma triangular:

```
| 2   1  −1 |  3 |          | 2   1  −1 |  3  |
| 1  −1   2 |  1 |   →      | 0  −1.5 2.5 | −0.5 |
| 3   2   1 | 10 |          | 0   0   ?  |  ?  |
```

Cada paso elimina una incógnita de las filas de abajo, restando un
múltiplo adecuado de una fila a otra — el mismo mecanismo de
`../../sistemas-dos-ecuaciones/teoria.md`, aplicado fila por fila.

## Sustitución hacia atrás

Una vez triangulada, la última fila queda con una sola incógnita — se
despeja directo. Se sube fila por fila, reemplazando lo ya encontrado, en
el mismo espíritu que la sustitución de sistemas 2×2.

## Generalización a n×n

El procedimiento no cambia con más ecuaciones: una matriz aumentada de
n×(n+1), las mismas tres operaciones de fila, triangular y sustituir
hacia atrás. Lo único que cambia es la cantidad de pasos.

## Errores comunes

- Aplicar una operación a un solo número de la fila en vez de a la fila
  completa (incluida la columna de términos independientes).
- Elegir un múltiplo equivocado al restar una fila de otra, dejando un
  coeficiente distinto de cero donde debía quedar cero.
- Perder el orden de la sustitución hacia atrás y reemplazar con un valor
  todavía no encontrado.
- Olvidar que intercambiar filas está permitido — a veces conviene
  reordenar antes de eliminar, para evitar dividir por cero.
