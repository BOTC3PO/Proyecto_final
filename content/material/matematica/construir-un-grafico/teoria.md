# Matemática — Construir un gráfico (teoría)

> Tema del MAPA: `D3` (Tronco 4.b). Depende de `../leer-grafico/barras/`,
> `../leer-grafico/lineas/` y `../leer-grafico/torta/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — varias decisiones distintas (qué tipo de gráfico,
qué escala, qué elementos) mejor separadas en diapositivas.

---

## Primero: elegir el tipo de gráfico correcto

Antes de dibujar nada, hay que decidir qué tipo de gráfico representa
mejor los datos que se tienen — el mismo criterio ya usado para
**leer** cada uno, ahora usado para **elegir**:

- **Categorías sin orden numérico propio** (productos, colores,
  candidatos) → gráfico de **barras**.
- **Una magnitud que cambia en el tiempo** (temperatura por mes,
  ventas por año) → gráfico de **líneas**.
- **Proporciones de un total** (cómo se reparte un presupuesto, qué
  porcentaje eligió cada opción) → gráfico de **torta**.

Elegir mal el tipo de gráfico no es un error estético: un gráfico de
torta con datos que cambian en el tiempo, por ejemplo, esconde
completamente la evolución que un gráfico de líneas mostraría de un
vistazo.

## Los elementos que todo gráfico necesita

- **Título**: qué muestra el gráfico, en pocas palabras.
- **Ejes etiquetados**: qué representa cada eje, con su unidad
  (¿pesos?, ¿personas?, ¿grados?).
- **Escala**: los números o categorías del eje, con intervalos
  **iguales** entre sí (la distancia entre 0 y 10 tiene que ser la
  misma que entre 10 y 20).
- **Leyenda** (si hay más de una serie de datos, como dos líneas de
  colores distintos): qué representa cada color.

## Elegir una buena escala

La escala numérica tiene que cubrir el rango de los datos sin
desperdiciar espacio (un gráfico de valores entre 40 y 60 con una
escala de 0 a 1000 aplasta toda la variación real en una línea casi
plana) y, en un gráfico de **barras**, el eje numérico debería empezar
en **0** — si no, la altura relativa de las barras deja de representar
fielmente la proporción real entre los valores.

## Para qué sirve

Construir un buen gráfico es comunicar datos de forma clara y honesta:
el tipo correcto, con los elementos completos y una escala razonable,
hace que cualquiera pueda leerlo sin necesitar la tabla original al
lado — y sin, sin querer, dar una impresión equivocada de los datos.
