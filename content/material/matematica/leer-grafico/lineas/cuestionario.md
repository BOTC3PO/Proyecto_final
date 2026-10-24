# Matemática — Leer un gráfico de líneas (cuestionario, 22 preguntas VBLang)

> Tema: `D2b`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es un gráfico de líneas

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "basico"
  tags: ["lineas", "vocabulario"]

enunciado: "¿Qué es un gráfico de líneas?"
tipo: mc
opciones_explicitas:
  - "Un gráfico que conecta con segmentos los puntos de una serie de datos, casi siempre a lo largo del tiempo"
  - "Un gráfico que muestra cada categoría como una porción de un círculo"
  - "Un gráfico que sólo puede tener un único punto"
respuesta: "Un gráfico que conecta con segmentos los puntos de una serie de datos, casi siempre a lo largo del tiempo"

explicacion: |
  La línea conecta los puntos para que se vea la tendencia completa,
  no sólo valores sueltos.
```

### 2 — Qué suele ir en el eje horizontal

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "basico"
  tags: ["lineas", "vocabulario"]

enunciado: "¿Qué tipo de dato suele ir en el eje horizontal de un gráfico de líneas?"
tipo: mc
opciones_explicitas:
  - "Una magnitud continua y ordenada, casi siempre tiempo (horas, meses, años)"
  - "Categorías sin ningún orden entre sí"
  - "Siempre porcentajes que suman 100%"
respuesta: "Una magnitud continua y ordenada, casi siempre tiempo (horas, meses, años)"

explicacion: |
  Por eso tiene sentido "conectar" los puntos: hay un orden real entre
  ellos.
```

### 3 — Problema: leer un valor puntual

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "intermedio"
  tags: ["lineas", "problema"]

variables:
  datos: [{mes: "Enero", temperatura: 28}, {mes: "Marzo", temperatura: 22}, {mes: "Junio", temperatura: 10}, {mes: "Septiembre", temperatura: 16}, {mes: "Diciembre", temperatura: 26}]
  idx: uno_de([0, 1, 2, 3, 4])

respuesta: datos[idx].temperatura
tipo: input
unidad: "°C"

enunciado: "Un gráfico de líneas muestra la temperatura promedio mensual: Enero 28°C, Marzo 22°C, Junio 10°C, Septiembre 16°C, Diciembre 26°C. ¿Cuál fue la temperatura en {datos[idx].mes}?"

explicacion: |
  Se busca el punto correspondiente a ese mes y se lee su altura en
  el eje de temperatura.
```

### 4 — Problema: identificar la tendencia

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "intermedio"
  tags: ["lineas", "problema"]

enunciado: "Con el gráfico de temperatura — Enero 28°C, Marzo 22°C, Junio 10°C, Septiembre 16°C, Diciembre 26°C — ¿qué pasa entre Enero y Junio?"
tipo: mc
opciones_explicitas:
  - "La temperatura baja"
  - "La temperatura sube"
  - "La temperatura se mantiene igual"
respuesta: "La temperatura baja"

explicacion: |
  De 28°C a 10°C la línea desciende — es la mitad del año que va del
  verano al invierno.
```

### 5 — Problema: mes más frío

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "intermedio"
  tags: ["lineas", "problema"]

enunciado: "Con el mismo gráfico — Enero 28°C, Marzo 22°C, Junio 10°C, Septiembre 16°C, Diciembre 26°C — ¿cuál es el mes más frío de los mostrados?"
tipo: mc
opciones_explicitas:
  - "Junio"
  - "Septiembre"
  - "Marzo"
respuesta: "Junio"

explicacion: |
  10°C es el valor más bajo de la serie — es el punto más bajo (valle)
  de la línea.
```

### 6 — Completar: vocabulario de picos y valles

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "intermedio"
  tags: ["lineas", "completar"]

tipo: completar
enunciado: "Completá: un punto de la línea notablemente más bajo que sus vecinos se llama un ___ (lo opuesto de un pico)."
respuestas_validas:
  - "valle"

explicacion: |
  Pico (más alto) y valle (más bajo) son los dos extremos que suele
  destacarse al leer una línea.
```

### 7 — Problema: diferencia entre dos puntos

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "avanzado"
  tags: ["lineas", "problema"]

respuesta: 18
tipo: input

enunciado: "Con el gráfico de temperatura — Enero 28°C, Marzo 22°C, Junio 10°C, Septiembre 16°C, Diciembre 26°C — ¿cuál es la diferencia entre el mes más caluroso y el más frío?"

pasos:
  - "Más caluroso: Enero (28°C). Más frío: Junio (10°C)."
  - "Diferencia = 28 − 10 = 18"

explicacion: |
  Se identifican los dos extremos de la línea y se restan.
```

### 8 — Ordenar: pasos para leer un valor en un gráfico de líneas

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "intermedio"
  tags: ["lineas", "ordenar"]

enunciado: "Ordená los pasos para leer el valor de un gráfico de líneas en un momento determinado."
tipo: ordenar
opciones_explicitas:
  - "Leer el número donde esa línea vertical cruza a la línea del gráfico"
  - "Ubicar ese momento (por ejemplo, un mes) en el eje horizontal"
  - "Subir en línea vertical imaginaria desde ese punto hasta la línea del gráfico"
respuesta_orden: ["Ubicar ese momento (por ejemplo, un mes) en el eje horizontal", "Subir en línea vertical imaginaria desde ese punto hasta la línea del gráfico", "Leer el número donde esa línea vertical cruza a la línea del gráfico"]
explicacion: |
  Es el mismo procedimiento que leer una barra, pero siguiendo la
  línea en vez de una barra sólida.
```

### 9 — Aplicación real: cotización de una moneda

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "basico"
  tags: ["lineas", "aplicacion"]

enunciado: "¿Por qué la cotización de una moneda a lo largo del año se muestra casi siempre con un gráfico de líneas?"
tipo: mc
opciones_explicitas:
  - "Porque el tiempo (los días del año) es una magnitud continua y ordenada, y la línea muestra la tendencia completa"
  - "Porque las monedas sólo se pueden comparar entre sí, nunca en el tiempo"
  - "Porque un gráfico de líneas siempre suma 100%"
respuesta: "Porque el tiempo (los días del año) es una magnitud continua y ordenada, y la línea muestra la tendencia completa"

explicacion: |
  Es el caso de uso típico: ver cómo evoluciona un valor a lo largo
  del tiempo.
```

### 10 — Una línea que sube no significa que siempre subió

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "avanzado"
  tags: ["lineas"]

respuesta: verdadero
tipo: vf

enunciado: "Que la línea termine más arriba de donde empezó no significa que haya subido de forma constante todo el tiempo — puede haber bajado y vuelto a subir en el medio."

explicacion: |
  Hay que mirar la forma completa de la línea, no sólo los dos
  extremos.
```

### 11 — Problema: segunda serie, ventas mensuales

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "intermedio"
  tags: ["lineas", "problema"]

variables:
  datos: [{mes: "Enero", ventas: 200}, {mes: "Febrero", ventas: 250}, {mes: "Marzo", ventas: 180}, {mes: "Abril", ventas: 300}]
  idx: uno_de([0, 1, 2, 3])

respuesta: datos[idx].ventas
tipo: input

enunciado: "Un gráfico de líneas muestra ventas mensuales: Enero 200, Febrero 250, Marzo 180, Abril 300. ¿Cuánto se vendió en {datos[idx].mes}?"

explicacion: |
  Se lee el punto correspondiente a ese mes.
```

### 12 — Problema: entre qué meses hubo mayor caída

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "avanzado"
  tags: ["lineas", "problema"]

enunciado: "Con las ventas — Enero 200, Febrero 250, Marzo 180, Abril 300 — ¿entre qué dos meses consecutivos hubo la mayor CAÍDA?"
tipo: mc
opciones_explicitas:
  - "Entre Febrero y Marzo"
  - "Entre Enero y Febrero"
  - "Entre Marzo y Abril"
respuesta: "Entre Febrero y Marzo"

explicacion: |
  De 250 a 180 hay una caída de 70 — la única caída entre esos meses
  (los otros dos tramos suben).
```

### 13 — Múltiples líneas pueden compararse en el mismo gráfico

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "intermedio"
  tags: ["lineas"]

respuesta: verdadero
tipo: vf

enunciado: "Un mismo gráfico puede tener varias líneas de colores distintos, cada una representando una serie de datos distinta, para comparar sus evoluciones."

explicacion: |
  Por ejemplo, la temperatura de dos ciudades distintas a lo largo del
  mismo año.
```

### 14 — Problema: crecimiento total

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "avanzado"
  tags: ["lineas", "problema"]

respuesta: 100
tipo: input

enunciado: "Con las ventas — Enero 200, Febrero 250, Marzo 180, Abril 300 — ¿cuánto creció el valor entre el primer mes (Enero) y el último (Abril)?"

pasos:
  - "Abril − Enero = 300 − 200 = 100"

explicacion: |
  Se compara el primer y el último punto de la serie, ignorando lo que
  pasó en el medio.
```

### 15 — Vocabulario: serie de datos

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "basico"
  tags: ["lineas", "vocabulario"]

enunciado: "¿Cómo se le llama al conjunto completo de puntos que forma una línea en el gráfico?"
tipo: mc
opciones_explicitas:
  - "Una serie de datos"
  - "Un encabezado"
  - "Una celda"
respuesta: "Una serie de datos"

explicacion: |
  Es el mismo término que se usa cuando hay varias líneas
  (series) en un mismo gráfico.
```

### 16 — Leer sólo el primer y último punto puede ser engañoso

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "avanzado"
  tags: ["lineas"]

respuesta: verdadero
tipo: vf

enunciado: "Comparar sólo el primer y el último punto de una línea puede dar una idea equivocada de la tendencia real, si en el medio hubo subidas y bajadas grandes."

explicacion: |
  Una línea puede terminar igual que empezó y haber tenido un pico
  enorme en el medio — mirar sólo los extremos no lo muestra.
```

### 17 — Problema: mes con mayor valor

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "intermedio"
  tags: ["lineas", "problema"]

enunciado: "Con las ventas — Enero 200, Febrero 250, Marzo 180, Abril 300 — ¿cuál fue el mes con más ventas?"
tipo: mc
opciones_explicitas:
  - "Abril"
  - "Febrero"
  - "Enero"
respuesta: "Abril"

explicacion: |
  300 es el valor más alto de la serie.
```

### 18 — Una línea horizontal significa que el valor no cambia

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "intermedio"
  tags: ["lineas"]

respuesta: verdadero
tipo: vf

enunciado: "Un tramo de la línea completamente horizontal significa que el valor se mantuvo igual entre esos dos puntos."

explicacion: |
  Sin subir ni bajar, el valor permanece constante en ese tramo.
```

### 19 — Aplicación real: crecimiento poblacional

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "basico"
  tags: ["lineas", "aplicacion"]

enunciado: "¿Por qué el crecimiento de la población de una ciudad a lo largo de las décadas se muestra con un gráfico de líneas?"
tipo: mc
opciones_explicitas:
  - "Porque el tiempo (las décadas) es continuo y ordenado, y permite ver la tendencia de crecimiento completa"
  - "Porque la población siempre suma 100% del total del país"
  - "Porque no hay otra forma de mostrar ese dato"
respuesta: "Porque el tiempo (las décadas) es continuo y ordenado, y permite ver la tendencia de crecimiento completa"

explicacion: |
  Es el mismo motivo por el que se usa para temperatura o cotizaciones.
```

### 20 — Problema: contar meses por encima de un valor

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "avanzado"
  tags: ["lineas", "problema"]

respuesta: 2
tipo: input

enunciado: "Con las ventas — Enero 200, Febrero 250, Marzo 180, Abril 300 — ¿en cuántos meses las ventas superaron las 240 unidades?"

pasos:
  - "Febrero (250) y Abril (300) superan las 240. Enero (200) y Marzo (180) no."

explicacion: |
  Se revisa cada punto de la serie y se cuentan los que cumplen la
  condición.
```

### 21 — La línea conecta pero no inventa datos intermedios exactos

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "avanzado"
  tags: ["lineas"]

respuesta: verdadero
tipo: vf

enunciado: "El segmento entre dos puntos consecutivos de un gráfico de líneas es una aproximación visual — no garantiza que el valor real haya seguido exactamente esa recta entre ambos momentos."

explicacion: |
  Sólo se conocen con certeza los valores en los puntos medidos; lo de
  en el medio es interpolación visual, no un dato medido de verdad.
```

### 22 — Cierre: para qué sirve este bloque

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve un gráfico de líneas?"
tipo: mc
opciones_explicitas:
  - "Para ver la evolución de un valor a lo largo del tiempo, y detectar tendencias, picos y valles"
  - "Sólo sirve para comparar categorías sin relación entre sí"
  - "Sólo aplica cuando los datos suman exactamente 100%"
respuesta: "Para ver la evolución de un valor a lo largo del tiempo, y detectar tendencias, picos y valles"

explicacion: |
  Es el hermano de `../barras/` (categorías) y `../torta/`
  (proporciones de un total).
```
