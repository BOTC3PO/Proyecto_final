# Matemática — Leer una tabla (teoría)

> Tema del MAPA: `D1` (Tronco 4.b — Datos, azar y decisión). Nodo raíz
> de esta rama, sin dependencia previa dentro de `matematica/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — varias ideas de vocabulario encadenadas (fila,
columna, celda, encabezado) mejor separadas en diapositivas.

---

## Filas, columnas y celdas

Una **tabla** organiza datos en una cuadrícula de **filas**
(horizontales) y **columnas** (verticales). Cada intersección de una
fila con una columna es una **celda**, y contiene un dato puntual.

```
| Producto | Precio | Stock |
|----------|--------|-------|
| Manzana  | 120    | 30    |
| Banana   | 80     | 45    |
| Naranja  | 100    | 20    |
```

- La primera fila (`Producto`, `Precio`, `Stock`) es el
  **encabezado**: nombra qué dato contiene cada columna.
- Cada fila siguiente es un **registro** (en este ejemplo, un
  producto con sus datos asociados).
- La celda donde se cruzan la fila "Banana" y la columna "Precio"
  contiene el valor 80.

## Cómo leer un valor puntual

Para encontrar un dato, hay que ubicar primero la fila correcta (por
ejemplo, el producto que interesa) y después la columna correcta (el
dato que se busca de ese producto) — el valor está en la celda donde
se cruzan ambas.

## Totales de fila y de columna

Muchas tablas agregan una fila o columna de **total**, que suma todos
los valores de esa columna o fila. Sumar manualmente los valores de
una columna entera (sin que la tabla lo haga por vos) es una operación
frecuente al leer una tabla que no trae el total ya calculado.

## Comparar valores entre filas

Leer una tabla no es sólo "buscar un dato": también sirve para
**comparar** — cuál producto tiene el precio más alto, cuál tiene más
stock, cuál es la diferencia entre dos valores de la misma columna.

## Para qué sirve

Es la habilidad de base para leer **cualquier** dato tabulado (una
boleta, un horario, una tabla de resultados deportivos, una planilla
de cálculo) y el prerrequisito directo de los gráficos (próximos
módulos) y de la probabilidad simple — un gráfico no es más que una
tabla dibujada, y clasificar un espacio muestral empieza, casi
siempre, por organizar los datos en una tabla.
