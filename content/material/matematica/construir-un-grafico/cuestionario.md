# Matemática — Construir un gráfico (cuestionario, 24 preguntas VBLang)

> Tema: `D3`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué gráfico usar para categorías

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "basico"
  tags: ["construir_grafico", "vocabulario"]

enunciado: "Para comparar valores entre categorías sin orden numérico propio (por ejemplo, ventas por producto), ¿qué tipo de gráfico conviene?"
tipo: mc
opciones_explicitas:
  - "Gráfico de barras"
  - "Gráfico de líneas"
  - "Gráfico de torta"
respuesta: "Gráfico de barras"

explicacion: |
  Las categorías se comparan bien con la altura de una barra por cada
  una.
```

### 2 — Qué gráfico usar para datos en el tiempo

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "basico"
  tags: ["construir_grafico", "vocabulario"]

enunciado: "Para mostrar cómo cambia un valor a lo largo del tiempo (por ejemplo, temperatura mes a mes), ¿qué tipo de gráfico conviene?"
tipo: mc
opciones_explicitas:
  - "Gráfico de líneas"
  - "Gráfico de barras"
  - "Gráfico de torta"
respuesta: "Gráfico de líneas"

explicacion: |
  La línea conecta los puntos y muestra la tendencia completa.
```

### 3 — Qué gráfico usar para proporciones de un total

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "basico"
  tags: ["construir_grafico", "vocabulario"]

enunciado: "Para mostrar cómo se reparte un presupuesto total entre distintas categorías, ¿qué tipo de gráfico conviene?"
tipo: mc
opciones_explicitas:
  - "Gráfico de torta"
  - "Gráfico de líneas"
  - "Gráfico de barras"
respuesta: "Gráfico de torta"

explicacion: |
  Cada porción muestra directamente qué proporción del 100% ocupa
  cada categoría.
```

### 4 — Problema: elegir el tipo correcto (ventas mensuales)

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "intermedio"
  tags: ["construir_grafico", "problema"]

enunciado: "Se quiere mostrar cómo variaron las ventas de una tienda mes a mes durante todo el año. ¿Qué tipo de gráfico conviene?"
tipo: mc
opciones_explicitas:
  - "De líneas"
  - "De torta"
  - "De barras horizontales sin ningún orden"
respuesta: "De líneas"

explicacion: |
  Los meses son una secuencia temporal ordenada — el caso típico de
  un gráfico de líneas.
```

### 5 — Problema: elegir el tipo correcto (puntajes de equipos)

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "intermedio"
  tags: ["construir_grafico", "problema"]

enunciado: "Se quiere comparar el puntaje final de 5 equipos de un torneo, sin relación temporal entre ellos. ¿Qué tipo de gráfico conviene?"
tipo: mc
opciones_explicitas:
  - "De barras"
  - "De líneas"
  - "De torta"
respuesta: "De barras"

explicacion: |
  Los equipos son categorías sin un orden numérico propio entre sí.
```

### 6 — Problema: elegir el tipo correcto (reparto de presupuesto)

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "intermedio"
  tags: ["construir_grafico", "problema"]

enunciado: "Se quiere mostrar qué porcentaje del presupuesto familiar se destina a cada gasto (alquiler, comida, transporte, etc.), sumando 100%. ¿Qué tipo de gráfico conviene?"
tipo: mc
opciones_explicitas:
  - "De torta"
  - "De líneas"
  - "De barras"
respuesta: "De torta"

explicacion: |
  Es exactamente el caso de proporciones de un total.
```

### 7 — Qué elementos necesita todo gráfico

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "basico"
  tags: ["construir_grafico", "vocabulario"]

enunciado: "¿Qué elementos básicos debería tener cualquier gráfico bien construido?"
tipo: mc
opciones_explicitas:
  - "Título, ejes etiquetados con su unidad, y una escala con intervalos iguales"
  - "Sólo los datos, sin ninguna etiqueta ni título"
  - "Sólo colores llamativos, sin importar la escala"
respuesta: "Título, ejes etiquetados con su unidad, y una escala con intervalos iguales"

explicacion: |
  Sin esos elementos, el gráfico se vuelve ambiguo o directamente
  ilegible.
```

### 8 — Los intervalos de la escala deben ser iguales

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "intermedio"
  tags: ["construir_grafico"]

respuesta: verdadero
tipo: vf

enunciado: "En la escala numérica de un gráfico, la distancia entre dos marcas consecutivas (por ejemplo, de 0 a 10, y de 10 a 20) siempre debería representar el mismo intervalo."

explicacion: |
  Si los intervalos no fueran iguales, la posición visual dejaría de
  representar fielmente el valor real.
```

### 9 — El eje de un gráfico de barras debería empezar en 0

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "intermedio"
  tags: ["construir_grafico"]

respuesta: verdadero
tipo: vf

enunciado: "El eje numérico de un gráfico de barras debería empezar en 0, para que la altura de cada barra represente fielmente la proporción real entre los valores."

explicacion: |
  Si no empieza en 0, diferencias chicas entre barras pueden verse
  exageradamente grandes.
```

### 10 — La leyenda no siempre es necesaria

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "intermedio"
  tags: ["construir_grafico"]

respuesta: falso
tipo: vf

enunciado: "La leyenda (qué representa cada color) es un elemento obligatorio en TODOS los gráficos, incluso cuando hay una sola serie de datos."

explicacion: |
  Con una sola serie no hace falta distinguir colores — la leyenda se
  vuelve necesaria recién cuando hay más de una serie.
```

### 11 — Problema: construir una escala con intervalos iguales

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "avanzado"
  tags: ["construir_grafico", "problema"]

variables:
  minimo: 0
  maximo: uno_de([50, 100, 200])
  marcas: uno_de([5, 10])

respuesta: maximo / marcas
tipo: input

enunciado: "Se quiere construir una escala de 0 a {maximo}, con {marcas} intervalos iguales. ¿De cuánto tiene que ser cada intervalo?"

pasos:
  - "Intervalo = ({maximo} − 0) / {marcas} = {maximo / marcas}"

explicacion: |
  Se reparte el rango total en la cantidad de intervalos pedida.
```

### 12 — Ordenar: pasos para construir un gráfico desde una tabla

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "avanzado"
  tags: ["construir_grafico", "ordenar"]

enunciado: "Ordená los pasos generales para construir un gráfico a partir de una tabla de datos."
tipo: ordenar
opciones_explicitas:
  - "Definir una escala con intervalos iguales que cubra el rango de los datos"
  - "Decidir qué tipo de gráfico corresponde según el tipo de dato (categorías, tiempo, o proporciones)"
  - "Dibujar los datos sobre esa escala, y agregar título, etiquetas de ejes y leyenda si hace falta"
respuesta_orden: ["Decidir qué tipo de gráfico corresponde según el tipo de dato (categorías, tiempo, o proporciones)", "Definir una escala con intervalos iguales que cubra el rango de los datos", "Dibujar los datos sobre esa escala, y agregar título, etiquetas de ejes y leyenda si hace falta"]
explicacion: |
  Elegir el tipo de gráfico es siempre la primera decisión — condiciona
  todo lo que sigue.
```

### 13 — Por qué elegir mal el tipo de gráfico esconde información

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "avanzado"
  tags: ["construir_grafico"]

enunciado: "¿Por qué usar un gráfico de torta para mostrar datos que cambian mes a mes sería una mala elección?"
tipo: mc
opciones_explicitas:
  - "Porque una torta no muestra tendencia en el tiempo — esconde si el valor subió, bajó o se mantuvo estable mes a mes"
  - "Porque una torta nunca puede tener más de 2 categorías"
  - "No hay ningún problema real en usarla para eso"
respuesta: "Porque una torta no muestra tendencia en el tiempo — esconde si el valor subió, bajó o se mantuvo estable mes a mes"

explicacion: |
  Cada tipo de gráfico está pensado para un tipo de pregunta distinta
  sobre los datos.
```

### 14 — Problema: calcular el intervalo dado rango y cantidad de marcas

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "avanzado"
  tags: ["construir_grafico", "problema"]

variables:
  maximo: uno_de([300, 500, 800])
  marcas: uno_de([4, 5, 8])

respuesta: maximo / marcas
tipo: input

enunciado: "Los datos van de 0 a {maximo}. Si se quiere marcar la escala en {marcas} intervalos iguales, ¿de cuánto debería ser cada intervalo?"

pasos:
  - "{maximo} / {marcas} = {maximo / marcas}"

explicacion: |
  Mismo procedimiento que la pregunta 11, con otros números.
```

### 15 — Un gráfico sin título es válido pero más difícil de interpretar

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "intermedio"
  tags: ["construir_grafico"]

respuesta: verdadero
tipo: vf

enunciado: "Un gráfico sin título sigue mostrando los datos correctamente, pero es más difícil saber de qué trata sin más contexto."

explicacion: |
  El título no cambia los datos, pero ayuda mucho a interpretarlos sin
  ambigüedad.
```

### 16 — Aplicación real: reporte de ventas anuales

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "basico"
  tags: ["construir_grafico", "aplicacion"]

enunciado: "Un reporte anual quiere mostrar la evolución de las ventas mes a mes, y además qué porcentaje de las ventas totales representó cada producto. ¿Cuántos tipos de gráfico distintos convendría usar, y cuáles?"
tipo: mc
opciones_explicitas:
  - "Dos: uno de líneas (evolución mensual) y uno de torta (porcentaje por producto)"
  - "Uno solo de torta, sirve para ambas cosas"
  - "Uno solo de barras, sirve para ambas cosas"
respuesta: "Dos: uno de líneas (evolución mensual) y uno de torta (porcentaje por producto)"

explicacion: |
  Son dos preguntas distintas sobre los datos, y cada una tiene su
  tipo de gráfico más adecuado.
```

### 17 — Problema: identificar una escala que desperdicia espacio

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "avanzado"
  tags: ["construir_grafico", "problema"]

enunciado: "Los datos de un gráfico van de 40 a 60. ¿Cuál de estas escalas para el eje numérico aprovecha mejor el espacio del gráfico?"
tipo: mc
opciones_explicitas:
  - "De 0 a 100, en intervalos de 10"
  - "De 0 a 10.000, en intervalos de 1.000"
  - "De 0 a 1.000.000, en intervalos de 100.000"
respuesta: "De 0 a 100, en intervalos de 10"

explicacion: |
  Las otras dos escalas son tan grandes comparadas con el rango real
  de los datos (40-60) que toda la variación se vería aplastada en
  una línea casi plana.
```

### 18 — Un gráfico de líneas también necesita intervalos iguales

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "intermedio"
  tags: ["construir_grafico"]

respuesta: verdadero
tipo: vf

enunciado: "El eje numérico de un gráfico de líneas también debería tener intervalos iguales entre sí, igual que el de un gráfico de barras."

explicacion: |
  La regla de intervalos iguales aplica a cualquier eje numérico, sin
  importar el tipo de gráfico.
```

### 19 — Problema: escala en múltiplos de 5

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "intermedio"
  tags: ["construir_grafico", "problema"]

variables:
  maximo: uno_de([25, 35, 45])

respuesta: maximo / 5
tipo: input

enunciado: "Se quiere marcar una escala de 0 a {maximo} en intervalos de tamaño 5. ¿Cuántas marcas (sin contar el 0) tendría esa escala?"

pasos:
  - "{maximo} / 5 = {maximo / 5} marcas"

explicacion: |
  Se divide el máximo por el tamaño del intervalo elegido.
```

### 20 — Qué pasa si el eje de barras no empieza en 0

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "avanzado"
  tags: ["construir_grafico"]

enunciado: "Si el eje numérico de un gráfico de barras empieza, por ejemplo, en 80 en vez de en 0, ¿qué efecto visual puede producir?"
tipo: mc
opciones_explicitas:
  - "Puede hacer que diferencias chicas entre barras se vean exageradamente grandes"
  - "No produce ningún efecto, siempre se ve exactamente igual"
  - "Hace que las barras sean automáticamente más precisas"
respuesta: "Puede hacer que diferencias chicas entre barras se vean exageradamente grandes"

explicacion: |
  Es uno de los errores de construcción más comunes (a veces
  intencional) para exagerar una diferencia real.
```

### 21 — La etiqueta del eje debe incluir la unidad

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "intermedio"
  tags: ["construir_grafico"]

respuesta: verdadero
tipo: vf

enunciado: "La etiqueta de un eje numérico debería indicar la unidad de medida (pesos, personas, grados, etc.), no sólo los números sueltos."

explicacion: |
  Sin la unidad, un '50' en el eje podría significar cualquier cosa.
```

### 22 — Problema: cantidad de intervalos dado el tamaño de cada uno

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "avanzado"
  tags: ["construir_grafico", "problema"]

variables:
  maximo: uno_de([120, 150, 180])
  intervalo: uno_de([10, 15, 30])

restricciones:
  - maximo - floor(maximo / intervalo) * intervalo == 0

respuesta: maximo / intervalo
tipo: input

enunciado: "Se quiere construir una escala de 0 a {maximo}, con intervalos de tamaño {intervalo}. ¿Cuántos intervalos tendría la escala completa?"

pasos:
  - "{maximo} / {intervalo} = {maximo / intervalo} intervalos"

explicacion: |
  Se divide el rango total por el tamaño de cada intervalo.
```

### 23 — Aplicación real: composición de una clase por género

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "basico"
  tags: ["construir_grafico", "aplicacion"]

enunciado: "Se quiere mostrar qué proporción de una clase de 30 estudiantes son varones y cuál mujeres. ¿Qué tipo de gráfico conviene?"
tipo: mc
opciones_explicitas:
  - "De torta (dos porciones que suman el 100% de la clase)"
  - "De líneas (porque el año tiene 12 meses)"
  - "No se puede graficar ese tipo de dato"
respuesta: "De torta (dos porciones que suman el 100% de la clase)"

explicacion: |
  Es exactamente proporciones de un total, aunque sean sólo 2
  categorías.
```

### 24 — Cierre: para qué sirve este bloque

```
metadata:
  materia: "matematicas"
  tema: "construir_un_grafico"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve saber construir un gráfico?"
tipo: mc
opciones_explicitas:
  - "Para elegir el tipo correcto según el dato, armar una escala razonable, y comunicar los datos de forma clara y sin distorsión"
  - "Sólo sirve para hacer un gráfico más lindo visualmente"
  - "Sólo aplica cuando los datos ya vienen en un gráfico hecho"
respuesta: "Para elegir el tipo correcto según el dato, armar una escala razonable, y comunicar los datos de forma clara y sin distorsión"

explicacion: |
  Es el paso siguiente a leer gráficos: ahora hay que decidir y armar
  uno propio. Es también el prerrequisito de `../media-mediana-y-moda/`.
```
