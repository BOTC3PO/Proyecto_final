# Matemática — Media, mediana y moda (teoría)

> Tema del MAPA: `D4` (Tronco 4.b). Depende de `../construir-un-grafico/`
> (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — tres medidas distintas (media, mediana, moda) con
su propio procedimiento, mejor separadas en diapositivas.

---

## Tres formas de resumir un conjunto de datos en un solo número

Las **medidas de tendencia central** resumen un conjunto de datos con
un único valor que representa, de alguna forma, "el centro" de esos
datos. Hay tres formas distintas de definir ese centro, y no siempre
coinciden.

## Media (promedio)

Se suman todos los valores y se divide por la cantidad de valores:

```
media = (suma de todos los valores) / (cantidad de valores)
```

**Ejemplo**: con los valores 4, 6, 8, 10, 12: media = (4+6+8+10+12)/5
= 40/5 = 8.

## Mediana

El valor que queda **exactamente en el medio** cuando los datos están
ordenados de menor a mayor.

- Con una **cantidad impar** de datos: la mediana es el valor central
  (una vez ordenados).
- Con una **cantidad par** de datos: la mediana es el **promedio** de
  los dos valores centrales.

**Ejemplo**: con 4, 6, 8, 10, 12 (ya ordenados, 5 valores — impar), la
mediana es 8 (el del medio). Con 4, 6, 8, 10 (4 valores — par), la
mediana es (6+8)/2 = 7.

## Moda

El valor (o los valores) que aparece **con más frecuencia** en el
conjunto de datos. Puede no haber moda (si todos los valores aparecen
la misma cantidad de veces), o puede haber más de una (si varios
valores empatan en la frecuencia máxima).

## Por qué a veces no coinciden

Con datos simétricos y sin valores extremos, las tres suelen dar
resultados parecidos. Pero un solo valor muy alejado del resto (un
**valor atípico**) puede correr mucho la media, sin afectar
prácticamente a la mediana — es la semilla de
`../cual-miente-y-cuando/` (próximo módulo): entender **por qué**
pasa esto, y cuándo conviene mirar la mediana en vez de la media.

## Para qué sirve

Es el resumen numérico más usado para cualquier conjunto de datos: el
sueldo promedio de un país, la nota media de un curso, el precio
mediano de una vivienda, la talla de ropa más vendida (moda). Elegir
CUÁL de las tres usar, según el caso, es exactamente lo que decide si
ese resumen representa bien la realidad o la distorsiona.
