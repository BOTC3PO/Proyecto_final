# Matemática — Gráfico con eje truncado: detectar el engaño (cuestionario, 20 preguntas VBLang)

> Tema: `C2`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es un eje truncado

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "basico"
  tags: ["eje_truncado", "vocabulario"]

enunciado: "¿Qué es un eje Y 'truncado' en un gráfico de barras o líneas?"
tipo: mc
opciones_explicitas:
  - "Un eje que no empieza en 0, sino en un valor mucho más alto"
  - "Un eje que muestra valores negativos"
  - "Un eje que tiene demasiadas marcas numéricas"
respuesta: "Un eje que no empieza en 0, sino en un valor mucho más alto"

explicacion: |
  A diferencia del eje 'completo', que arranca en 0.
```

### 2 — Por qué un eje truncado puede engañar

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "intermedio"
  tags: ["eje_truncado"]

enunciado: "¿Por qué un eje truncado puede hacer que una diferencia chica entre dos valores se vea mucho más grande de lo que realmente es?"
tipo: mc
opciones_explicitas:
  - "Porque al achicar el rango del eje, la misma diferencia absoluta ocupa una proporción mucho mayor del alto total del gráfico"
  - "Porque cambia los valores numéricos reales de los datos"
  - "Un eje truncado nunca puede hacer que una diferencia se vea más grande"
respuesta: "Porque al achicar el rango del eje, la misma diferencia absoluta ocupa una proporción mucho mayor del alto total del gráfico"

explicacion: |
  El dato no cambia — sólo cambia cuánto 'estira' visualmente la
  diferencia el rango elegido para el eje.
```

### 3 — Problema: diferencia real entre dos porcentajes

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "intermedio"
  tags: ["eje_truncado", "problema"]

variables:
  a: uno_de([48, 49])
  b: uno_de([51, 52])

respuesta: abs(a - b)
tipo: input
unidad: "puntos porcentuales"

enunciado: "Dos candidatos sacaron {a}% y {b}% de los votos. ¿Cuál es la diferencia REAL entre ambos, en puntos porcentuales?"

pasos:
  - "Diferencia = |{a} − {b}| = {abs(a - b)} puntos porcentuales"

explicacion: |
  Esta es la diferencia real, sin importar cómo se dibuje después el
  gráfico.
```

### 4 — Truncar el eje no cambia los datos

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "intermedio"
  tags: ["eje_truncado"]

respuesta: verdadero
tipo: vf

enunciado: "Truncar el eje Y de un gráfico no cambia los datos reales en absoluto — sólo cambia la percepción visual de qué tan grande parece la diferencia entre ellos."

explicacion: |
  Los números siguen siendo los mismos; lo que cambia es la
  impresión visual que produce el gráfico.
```

### 5 — Cómo detectar un eje truncado

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "basico"
  tags: ["eje_truncado", "aplicacion"]

enunciado: "¿Cuál es el primer paso para detectar si un gráfico de barras está usando un eje truncado para exagerar una diferencia?"
tipo: mc
opciones_explicitas:
  - "Revisar dónde arranca el eje Y — si no arranca en 0 y no hay ninguna marca que lo avise, sospechar"
  - "Contar cuántas barras tiene el gráfico"
  - "Fijarse en qué colores se usaron para las barras"
respuesta: "Revisar dónde arranca el eje Y — si no arranca en 0 y no hay ninguna marca que lo avise, sospechar"

explicacion: |
  Es lo primero que hay que mirar antes de sacar cualquier conclusión
  del gráfico.
```

### 6 — Problema: diferencia porcentual real vs. gráfico truncado

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "avanzado"
  tags: ["eje_truncado", "problema"]

variables:
  a: uno_de([95, 98])
  b: 100

respuesta: redondear((b - a) / a * 100, 2)
tipo: input
tolerancia_abs: 0.1
unidad: "%"

enunciado: "Producto A vende {a} unidades; Producto B vende {b} unidades. Un gráfico con eje truncado (arrancando en 90) hace ver a B como 'mucho más grande'. ¿Cuál es la diferencia porcentual REAL entre A y B, respecto de A?"

pasos:
  - "Diferencia % = ({b} − {a}) / {a} × 100 = {redondear((b - a) / a * 100, 2)}%"

explicacion: |
  Calcular la diferencia porcentual real es la forma de contrastar lo
  que dice el número contra lo que 'muestra' el gráfico truncado.
```

### 7 — Truncar el eje puede ser legítimo si se declara

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "avanzado"
  tags: ["eje_truncado"]

respuesta: verdadero
tipo: vf

enunciado: "Truncar el eje Y no siempre es un engaño — puede ser legítimo cuando los datos varían en un rango angosto dentro de valores grandes, siempre que el gráfico lo declare explícitamente (por ejemplo, con una marca de quiebre en el eje)."

explicacion: |
  Como graficar temperatura corporal entre 36,5°C y 37,5°C: truncar
  ahí permite ver la variación real con claridad, si se avisa.
```

### 8 — Aplicación real: noticia con gráfico engañoso

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "basico"
  tags: ["eje_truncado", "aplicacion"]

enunciado: "Una noticia muestra un gráfico de barras donde el 'crecimiento' de una empresa de 100 a 103 unidades se ve como una barra el TRIPLE de alta que el año anterior, con el eje arrancando en 99. ¿Qué está pasando?"
tipo: mc
opciones_explicitas:
  - "El eje truncado (arrancando en 99, no en 0) exagera visualmente un crecimiento real de apenas 3%"
  - "La empresa realmente triplicó su tamaño, y el gráfico lo muestra correctamente"
  - "Es imposible saber nada sin más información sobre la empresa"
respuesta: "El eje truncado (arrancando en 99, no en 0) exagera visualmente un crecimiento real de apenas 3%"

explicacion: |
  El crecimiento real es de 3 unidades sobre 100 (3%) — el gráfico lo
  hace ver mucho más grande de lo que es.
```

### 9 — Problema: cuánto exagera un eje truncado

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "avanzado"
  tags: ["eje_truncado", "problema"]

variables:
  valor_a: 90
  valor_b: 95
  inicio_eje: uno_de([80, 85])

respuesta: redondear((valor_b - inicio_eje) / (valor_a - inicio_eje), 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Dos barras representan {valor_a} y {valor_b}, con el eje Y truncado arrancando en {inicio_eje} (en vez de 0). En este gráfico, ¿cuántas veces más alta se ve la barra de {valor_b} respecto de la de {valor_a}?"

pasos:
  - "Altura visual de {valor_a} = {valor_a} − {inicio_eje} = {valor_a - inicio_eje}"
  - "Altura visual de {valor_b} = {valor_b} − {inicio_eje} = {valor_b - inicio_eje}"
  - "Razón = {valor_b - inicio_eje} / {valor_a - inicio_eje} = {redondear((valor_b - inicio_eje) / (valor_a - inicio_eje), 2)}"

explicacion: |
  Esa razón visual es mucho más grande que la razón real
  ({valor_b}/{valor_a} ≈ {redondear(valor_b / valor_a, 2)}) — el eje
  truncado exagera la diferencia.
```

### 10 — Qué tipo de gráfico es más susceptible a este engaño

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "intermedio"
  tags: ["eje_truncado", "clasificar"]

enunciado: "¿Qué tipo de gráfico es más susceptible al engaño del eje truncado?"
tipo: mc
opciones_explicitas:
  - "Gráficos de barras o líneas, donde la altura representa la magnitud del dato de forma proporcional al eje"
  - "Gráficos de torta, porque siempre representan porcentajes sobre un total"
respuesta: "Gráficos de barras o líneas, donde la altura representa la magnitud del dato de forma proporcional al eje"

explicacion: |
  En barras y líneas, la altura ES la información visual central —
  truncar el eje distorsiona directamente esa lectura.
```

### 11 — El eje truncado no aplica a un gráfico de torta

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "avanzado"
  tags: ["eje_truncado", "torta"]

respuesta: verdadero
tipo: vf

enunciado: "El concepto de 'eje truncado' no tiene sentido para un gráfico de torta, porque un gráfico de torta no tiene eje — cada porción representa directamente un porcentaje del total (100%)."

explicacion: |
  Un gráfico de torta puede engañar de otras formas (por ejemplo,
  usando perspectiva 3D que distorsiona el tamaño aparente de cada
  porción), pero no con un eje truncado.
```

### 12 — Aplicación real: publicidad con eje truncado

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "basico"
  tags: ["eje_truncado", "aplicacion"]

enunciado: "Un aviso publicitario muestra un gráfico de barras donde 'su producto es más efectivo' (94% vs. 91% de un competidor), con el eje arrancando en 88 y sin ninguna marca de quiebre. ¿Qué recurso está usando?"
tipo: mc
opciones_explicitas:
  - "Un eje truncado sin declarar, para hacer ver una diferencia real de apenas 3 puntos porcentuales como una ventaja mucho más grande"
  - "Un gráfico completamente honesto, sin ningún truco visual"
  - "Un gráfico de torta disfrazado de gráfico de barras"
respuesta: "Un eje truncado sin declarar, para hacer ver una diferencia real de apenas 3 puntos porcentuales como una ventaja mucho más grande"

explicacion: |
  Es un uso clásico del eje truncado en publicidad comparativa.
```

### 13 — Problema: comparar altura visual con eje en 0 vs. truncado

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "avanzado"
  tags: ["eje_truncado", "problema"]

variables:
  a: 40
  b: 44

respuesta: redondear(b / a, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Con un eje que arranca en 0, dos barras de {a} y {b}. ¿Cuál es la razón real de alturas (barra mayor sobre barra menor) en ese gráfico honesto?"

pasos:
  - "Razón = {b}/{a} = {redondear(b / a, 3)}"

explicacion: |
  Con el eje en 0, la razón visual coincide exactamente con la razón
  numérica real de los datos — es el gráfico que no engaña.
```

### 14 — Qué hacer al ver un gráfico sospechoso

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "intermedio"
  tags: ["eje_truncado", "aplicacion"]

enunciado: "Al ver un gráfico de barras con una diferencia que parece enorme, ¿qué conviene hacer antes de sacar conclusiones?"
tipo: mc
opciones_explicitas:
  - "Revisar dónde arranca el eje Y y calcular la diferencia numérica real entre los valores, en vez de confiar sólo en la impresión visual"
  - "Confiar directamente en lo que muestra el gráfico, sin revisar nada más"
  - "Ignorar el gráfico por completo, sin mirar ningún dato"
respuesta: "Revisar dónde arranca el eje Y y calcular la diferencia numérica real entre los valores, en vez de confiar sólo en la impresión visual"

explicacion: |
  Es la aplicación práctica del pensamiento crítico de este módulo.
```

### 15 — El eje truncado no es el único gráfico engañoso

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "avanzado"
  tags: ["eje_truncado"]

respuesta: verdadero
tipo: vf

enunciado: "El eje truncado es sólo un caso particular de gráfico engañoso — también existen otros trucos, como usar una escala no lineal sin avisar, o elegir un rango de tiempo que muestre sólo la parte más favorable de una tendencia."

explicacion: |
  Todos comparten el mismo principio: los datos no cambian, pero la
  forma de presentarlos distorsiona la impresión visual.
```

### 16 — Problema: comparar mismos datos con dos ejes distintos

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "avanzado"
  tags: ["eje_truncado", "problema"]

variables:
  a: 80
  b: 84
  inicio_truncado: 75

respuesta: redondear((b - inicio_truncado) / (a - inicio_truncado), 3) > redondear(b / a, 3)
tipo: vf

enunciado: "Con los mismos valores {a} y {b}: en un gráfico con eje desde 0, la razón de alturas es {redondear(b / a, 3)}. En un gráfico con eje truncado desde {inicio_truncado}, ¿la razón de alturas visual es MAYOR que esa razón real?"

explicacion: |
  El eje truncado siempre agranda la razón visual de alturas respecto
  de la razón real de los valores, cuando el eje no arranca en 0.
```

### 17 — Cómo arreglar un gráfico con eje truncado

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "basico"
  tags: ["eje_truncado", "aplicacion"]

enunciado: "¿Cómo se puede 'arreglar' un gráfico de barras que usa un eje truncado sin declarar, para que muestre la información de forma honesta?"
tipo: mc
opciones_explicitas:
  - "Rehacer el gráfico con el eje Y arrancando en 0, o mantener el truncado pero agregar una marca de quiebre visible que lo declare"
  - "Es imposible arreglar un gráfico así, hay que descartarlo por completo"
  - "Agregar más colores a las barras"
respuesta: "Rehacer el gráfico con el eje Y arrancando en 0, o mantener el truncado pero agregar una marca de quiebre visible que lo declare"

explicacion: |
  Ambas soluciones devuelven la transparencia que le faltaba al
  gráfico original.
```

### 18 — Desconfiar de un gráfico sin marca de quiebre

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "avanzado"
  tags: ["eje_truncado"]

respuesta: verdadero
tipo: vf

enunciado: "Ante un gráfico de barras con un eje que claramente no arranca en 0 y sin ninguna marca de quiebre que lo avise, es razonable sospechar que se está exagerando la diferencia entre los datos a propósito."

explicacion: |
  No es una prueba definitiva de mala intención, pero sí una señal de
  alerta que justifica revisar los números reales.
```

### 19 — Problema: identificar el eje seguro

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "intermedio"
  tags: ["eje_truncado", "problema"]

variables:
  minimo_dato: uno_de([45, 60, 80])

respuesta: 0
tipo: input

enunciado: "Un conjunto de datos de barras tiene un valor mínimo de {minimo_dato}. Para armar un gráfico de barras que NO exagere las diferencias entre los valores, ¿en qué valor debería arrancar el eje Y?"

explicacion: |
  El eje Y de un gráfico de barras honesto arranca en 0,
  independientemente de cuál sea el valor mínimo de los datos.
```

### 20 — Cierre: para qué sirve detectar el eje truncado

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve saber detectar un gráfico con eje truncado?"
tipo: mc
opciones_explicitas:
  - "Para no dejarse convencer por la forma visual de un gráfico, y en cambio evaluar la diferencia real entre los datos que representa"
  - "Para poder armar gráficos siempre con ejes truncados"
  - "Sólo sirve para leer gráficos de elecciones políticas"
respuesta: "Para no dejarse convencer por la forma visual de un gráfico, y en cambio evaluar la diferencia real entre los datos que representa"

explicacion: |
  Es una aplicación directa de `../leer-grafico/barras/` al
  pensamiento crítico frente a noticias, publicidad e informes.
```
