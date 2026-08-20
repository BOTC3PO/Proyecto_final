# Matemática — Leer un gráfico de torta (teoría)

> Tema del MAPA: `D2c` (Tronco 4.b). Depende de
> `../../leer-una-tabla/` (ver `../../dependencias.md`). Hermano de
> `../barras/` y `../lineas/` (los tres dependen de `D1`, no unos de
> otros).

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** — una sola idea central (cada porción es un porcentaje del
total), no necesita separarse en varias diapositivas.

---

## Qué es un gráfico de torta

Un **gráfico de torta** (o circular) muestra un círculo completo
dividido en **porciones**, donde cada porción representa la
**proporción** de una categoría respecto del **total** (el círculo
completo, que siempre representa el 100%).

## La regla de oro: siempre suma 100%

A diferencia de un gráfico de barras o de líneas (donde cada valor es
independiente de los demás), en un gráfico de torta **todas las
porciones juntas tienen que sumar exactamente el 100%** del total. Si
las porciones mostradas suman menos, falta alguna categoría (a veces
agrupada como "Otros").

## De porcentaje a cantidad real

Cuando el gráfico da porcentajes (no cantidades), para saber la
cantidad real de una categoría hace falta conocer el **total** y
aplicar el porcentaje:

```
cantidad de la categoría = porcentaje × total / 100
```

**Ejemplo**: si "Gastos en alquiler" es el 30% de un presupuesto total
de $100.000, esa categoría representa `30 × 100.000 / 100 = $30.000`.

## Cuándo conviene (y cuándo no)

Un gráfico de torta sirve bien cuando hay **pocas categorías** (hasta
5 o 6) y lo que importa es la **proporción de cada una sobre el
total** — no sirve para comparar magnitudes absolutas entre categorías
de gráficos distintos (dos tortas de tamaños distintos no se pueden
comparar "a ojo" si no muestran también los totales), ni cuando hay
demasiadas categorías chicas (las porciones se vuelven ilegibles).

## Para qué sirve

Es el gráfico típico para mostrar cómo se reparte un presupuesto, la
composición de una población por edad o género, o los resultados de
una encuesta cuando importa qué fracción del total eligió cada opción
(a diferencia de un gráfico de barras, que también podría mostrar lo
mismo, pero sin remarcar tan directamente que todo suma el 100%).
