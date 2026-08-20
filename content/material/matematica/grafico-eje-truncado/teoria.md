# Matemática — Gráfico con eje truncado: detectar el engaño (teoria)

> Tema del MAPA: `C2` (Tronco 4.b). Depende de `../leer-grafico/barras/`,
> `../leer-grafico/lineas/` y `../leer-grafico/torta/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** — una sola idea aplicada con un ejemplo numérico, no
necesita varias diapositivas.

---

## Qué es un eje truncado

En un gráfico de barras o de líneas, el eje Y normalmente **empieza en
0**: la altura de cada barra representa la magnitud real del dato, de
forma proporcional. Un **eje truncado** es un eje Y que **no empieza
en 0**, sino en un valor mucho más alto (por ejemplo, empezar en 90
para datos que van de 95 a 100).

## Por qué exagera las diferencias

**Ejemplo**: dos candidatos sacan 49% y 51% de los votos — una
diferencia real de apenas 2 puntos porcentuales. Si el gráfico de
barras usa un eje que va de 0 a 100, ambas barras se ven casi
idénticas (49 y 51 son casi la misma altura sobre 100). Pero si el eje
se **trunca** para ir sólo de 45 a 52, la misma diferencia de 2 puntos
ahora ocupa **todo el alto del gráfico** — la barra del 51% puede
verse casi **el doble** de alta que la del 49%, aunque la diferencia
real siga siendo la misma: apenas 2 puntos porcentuales.

**El dato no cambió** — sólo cambió cuánto "estira" visualmente la
diferencia el rango elegido para el eje.

## Cuándo truncar el eje SÍ es legítimo

No siempre truncar es un engaño: a veces los datos varían en un rango
muy angosto dentro de valores muy grandes (por ejemplo, temperatura
corporal entre 36,5°C y 37,5°C — truncar ahí, en vez de ir de 0°C a
40°C, permite ver la variación real con claridad). La diferencia entre
"legítimo" y "engañoso" es la **transparencia**: un gráfico honesto que
trunca el eje lo **declara explícitamente**, casi siempre con una
marca de quiebre visual (una zigzag `╱╱` en el eje) que avisa "acá el
eje no arranca en 0".

## Cómo detectar el engaño

1. Mirar dónde arranca el eje Y — si no arranca en 0 y no hay ninguna
   marca de quiebre que lo avise, sospechar.
2. Calcular la **diferencia porcentual real** entre los valores
   comparados, sin mirar el gráfico — comparar ese número contra lo
   que el gráfico hace "sentir" visualmente.
3. Si la diferencia visual (qué tan más alta se ve una barra que otra)
   es mucho más grande que la diferencia numérica real, el eje está
   exagerando la diferencia.

## Para qué sirve

Es una aplicación directa de `../leer-grafico/barras/`,
`../leer-grafico/lineas/` y `../leer-grafico/torta/` al pensamiento
crítico: los mismos gráficos usados para informar honestamente también
se pueden armar (a propósito o por descuido) para **exagerar**
diferencias chicas — en noticias, publicidad y campañas políticas.
Saber leer un eje es el primer paso para no dejarse convencer por la
forma del gráfico en vez de por el dato real.
