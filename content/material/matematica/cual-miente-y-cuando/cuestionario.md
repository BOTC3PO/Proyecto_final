# Matemática — Cuál miente y cuándo (cuestionario, 24 preguntas VBLang)

> Tema: `D5`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Ninguna medida "miente" por sí sola

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "basico"
  tags: ["criterio", "vocabulario"]

enunciado: "¿Qué determina si una medida de tendencia central 'engaña' en una situación dada?"
tipo: mc
opciones_explicitas:
  - "Usar la medida equivocada para la pregunta que se está haciendo, o presentarla como si fuera toda la historia"
  - "La media siempre miente y la mediana siempre dice la verdad"
  - "Ninguna medida puede usarse mal, todas dan siempre la misma información"
respuesta: "Usar la medida equivocada para la pregunta que se está haciendo, o presentarla como si fuera toda la historia"

explicacion: |
  Cada medida responde una pregunta distinta — el problema es elegir
  mal cuál usar, no que alguna sea inherentemente falsa.
```

### 2 — Problema: comparar media y mediana con un valor atípico

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["media", "mediana", "problema"]

variables:
  a: random(20, 30)
  b: random(20, 30)
  c: random(20, 30)
  d: random(20, 30)
  atipico: random(200, 300)
  datos: [a, b, c, d, atipico]

respuesta: redondear(promedio(datos), 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Cinco sueldos son (en miles): {a}, {b}, {c}, {d} y {atipico}. ¿Cuál es el sueldo PROMEDIO?"

pasos:
  - "Media = ({a}+{b}+{c}+{d}+{atipico}) / 5 = {redondear(promedio(datos), 2)}"

explicacion: |
  El sueldo de {atipico} arrastra bastante el promedio hacia arriba.
```

### 3 — La media es más sensible a valores atípicos

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "intermedio"
  tags: ["media", "mediana"]

respuesta: verdadero
tipo: vf

enunciado: "La media es más sensible a valores atípicos que la mediana — un solo valor extremo puede correr bastante el promedio, sin afectar casi a la mediana."

explicacion: |
  Es la razón matemática detrás de todo este módulo.
```

### 4 — Aplicación real: sueldo promedio vs. mediano

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "basico"
  tags: ["media", "mediana", "aplicacion"]

enunciado: "Si un país anuncia que 'el sueldo promedio subió 15%', pero unas pocas personas con sueldos muy altos ganaron mucho más este año, ¿qué podría estar pasando con el sueldo mediano?"
tipo: mc
opciones_explicitas:
  - "Podría haber subido mucho menos que 15% (o incluso no haber subido), porque el promedio está siendo arrastrado por esos pocos sueldos altos"
  - "El sueldo mediano tiene que haber subido exactamente lo mismo, siempre"
  - "El sueldo mediano no puede calcularse a partir de datos de sueldos"
respuesta: "Podría haber subido mucho menos que 15% (o incluso no haber subido), porque el promedio está siendo arrastrado por esos pocos sueldos altos"

explicacion: |
  Es el caso real más citado de esta distorsión — el promedio sube sin
  que la mayoría de la gente lo note en su propio bolsillo.
```

### 5 — Problema: diferencia entre media y mediana

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["media", "mediana", "problema"]

variables:
  a: random(15, 25)
  b: random(15, 25)
  c: random(15, 25)
  atipico: random(150, 200)
  datos: [a, b, c, atipico]

respuesta: redondear(promedio(datos) - mediana(datos), 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Cuatro valores son: {a}, {b}, {c}, {atipico}. ¿Cuál es la diferencia entre la media y la mediana de este conjunto (media menos mediana)?"

pasos:
  - "Media = {redondear(promedio(datos), 2)}. Mediana = {mediana(datos)}."
  - "Diferencia = {redondear(promedio(datos), 2)} − {mediana(datos)} = {redondear(promedio(datos) - mediana(datos), 2)}"

explicacion: |
  Cuanto más grande esta diferencia, más está siendo arrastrada la
  media por valores extremos.
```

### 6 — Dos conjuntos distintos pueden tener la misma mediana

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["mediana"]

respuesta: verdadero
tipo: vf

enunciado: "Dos conjuntos de datos con valores muy distintos entre sí pueden tener exactamente la misma mediana."

explicacion: |
  Por ejemplo, {4, 5, 6} y {1, 5, 100} tienen la misma mediana (5),
  aunque estén repartidos de forma completamente distinta.
```

### 7 — Problema: misma mediana, distinta dispersión

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["mediana", "problema"]

respuesta: verdadero
tipo: vf

enunciado: "El grupo A tiene las notas 6, 7, 8 (mediana 7). El grupo B tiene las notas 2, 7, 10 (mediana también 7). Aunque tengan la misma mediana, ambos grupos tienen un desempeño igual de parejo entre sus alumnos."

explicacion: |
  Es falso: el grupo A es mucho más parejo (todas cerca de 7); el
  grupo B tiene mucha más dispersión (de 2 a 10) — la mediana sola no
  muestra esa diferencia.
```

### 8 — Qué información se pierde al mirar sólo un promedio

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "intermedio"
  tags: ["media"]

enunciado: "¿Qué tipo de información se pierde al resumir un conjunto de datos en un solo promedio, sin ningún dato adicional?"
tipo: mc
opciones_explicitas:
  - "Cuánto varían los datos entre sí (la dispersión), y si hay valores atípicos que estén distorsionando ese promedio"
  - "Ninguna información se pierde nunca al calcular un promedio"
  - "Se pierde sólo el orden en que se recolectaron los datos, nada más relevante"
respuesta: "Cuánto varían los datos entre sí (la dispersión), y si hay valores atípicos que estén distorsionando ese promedio"

explicacion: |
  Un solo número nunca cuenta toda la historia de un conjunto de
  datos.
```

### 9 — Un promedio alto no garantiza que la mayoría esté por encima

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["media"]

respuesta: verdadero
tipo: vf

enunciado: "Un promedio alto no garantiza que la mayoría de los casos individuales estén por encima de ese valor — es posible que la mayoría esté por debajo, y sólo unos pocos casos muy altos suban el promedio."

explicacion: |
  Es exactamente lo que pasa con el sueldo promedio cuando hay mucha
  desigualdad: la mayoría puede estar por debajo del promedio.
```

### 10 — Problema: media mucho mayor que la mediana indica valores altos aislados

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["media", "mediana", "problema"]

variables:
  base: random(10, 20)
  atipico: random(150, 250)
  datos: [base, base + 1, base + 2, atipico]

respuesta: redondear(promedio(datos), 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Cuatro valores son: {base}, {base + 1}, {base + 2} y {atipico}. La mediana de este conjunto es {mediana(datos)}. ¿Cuál es la media?"

pasos:
  - "Media = ({base}+{base + 1}+{base + 2}+{atipico}) / 4 = {redondear(promedio(datos), 2)}"

explicacion: |
  La media queda muy por encima de la mediana — señal clara de que hay
  un valor mucho más alto que el resto, distorsionando el promedio.
```

### 11 — Qué pregunta hacerse frente a una estadística resumida

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "basico"
  tags: ["criterio"]

enunciado: "Frente a cualquier estadística resumida en un solo número (un promedio, un porcentaje), ¿qué pregunta conviene hacerse?"
tipo: mc
opciones_explicitas:
  - "¿Qué información se pierde al resumir todo en este solo número?"
  - "¿El número es par o impar?"
  - "No hace falta hacerse ninguna pregunta, los números nunca engañan"
respuesta: "¿Qué información se pierde al resumir todo en este solo número?"

explicacion: |
  Es la pregunta base del pensamiento crítico frente a cualquier dato
  estadístico.
```

### 12 — Ordenar: pasos para evaluar si un promedio representa bien a la mayoría

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["criterio", "ordenar"]

enunciado: "Ordená los pasos para evaluar si un promedio dado representa bien a la mayoría de los casos."
tipo: ordenar
opciones_explicitas:
  - "Si la diferencia es grande, sospechar que hay valores atípicos distorsionando el promedio"
  - "Calcular también la mediana del mismo conjunto de datos"
  - "Comparar ambos valores: si son parecidos, el promedio representa bien; si difieren mucho, no"
respuesta_orden: ["Calcular también la mediana del mismo conjunto de datos", "Comparar ambos valores: si son parecidos, el promedio representa bien; si difieren mucho, no", "Si la diferencia es grande, sospechar que hay valores atípicos distorsionando el promedio"]
explicacion: |
  Comparar media y mediana es la forma más directa de detectar esta
  distorsión sin necesitar ver todos los datos originales.
```

### 13 — Aplicación real: 'el ingreso promedio subió' en una noticia

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "intermedio"
  tags: ["media", "aplicacion"]

enunciado: "Una noticia dice 'el ingreso promedio de las familias subió este año'. ¿Por qué esto no garantiza que la situación económica de la mayoría de las familias haya mejorado?"
tipo: mc
opciones_explicitas:
  - "Porque el promedio puede haber subido sólo por una mejora fuerte en un grupo chico de familias con más ingresos, sin que la mayoría haya mejorado"
  - "Porque los promedios de ingresos nunca pueden subir realmente"
  - "Porque la noticia tiene que estar necesariamente mintiendo"
respuesta: "Porque el promedio puede haber subido sólo por una mejora fuerte en un grupo chico de familias con más ingresos, sin que la mayoría haya mejorado"

explicacion: |
  No implica mala intención de quien da la noticia — el dato en sí es
  cierto, sólo que incompleto sin la mediana o la distribución al lado.
```

### 14 — Problema: moda poco representativa

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["moda", "problema"]

variables:
  repetido: random(10, 20)
  a: random(21, 30)
  b: random(31, 40)
  c: random(41, 50)
  d: random(51, 60)

respuesta: repetido
tipo: input

enunciado: "En un grupo de 6 personas, las edades son: {repetido}, {repetido}, {a}, {b}, {c}, {d}. ¿Cuál es la moda de este grupo?"

pasos:
  - "{repetido} aparece 2 veces, el resto aparece 1 vez cada uno — apenas alcanza para ser la moda."

explicacion: |
  Con sólo 2 repeticiones sobre 6 datos casi todos distintos, la moda
  no dice mucho sobre el grupo en general — es una moda 'débil'.
```

### 15 — Cuándo la mediana es más útil que la media

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "intermedio"
  tags: ["media", "mediana"]

enunciado: "¿En qué situación conviene usar la mediana en vez de la media?"
tipo: mc
opciones_explicitas:
  - "Cuando hay valores atípicos que distorsionarían mucho el promedio"
  - "Cuando se necesita saber la suma total de todos los datos"
  - "Cuando todos los datos son exactamente iguales entre sí"
respuesta: "Cuando hay valores atípicos que distorsionarían mucho el promedio"

explicacion: |
  Es justamente lo que resiste bien la mediana y no la media.
```

### 16 — Cuándo la media es más útil que la mediana

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["media", "mediana"]

enunciado: "¿En qué situación conviene usar la media en vez de la mediana?"
tipo: mc
opciones_explicitas:
  - "Cuando se necesita reconstruir el TOTAL a partir del promedio y la cantidad de datos (media × cantidad = total), algo que la mediana no permite"
  - "Siempre, la mediana nunca sirve para nada"
  - "Sólo cuando hay valores atípicos muy grandes"
respuesta: "Cuando se necesita reconstruir el TOTAL a partir del promedio y la cantidad de datos (media × cantidad = total), algo que la mediana no permite"

explicacion: |
  Es una ventaja práctica real de la media que la mediana no tiene.
```

### 17 — Problema: reconstruir el total a partir de la media

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["media", "problema"]

variables:
  media_gasto: random(200, 500)
  personas: random(10, 30)

respuesta: media_gasto * personas
tipo: input
unidad: "$"

enunciado: "El gasto PROMEDIO de {personas} personas en un evento fue de ${media_gasto} cada una. ¿Cuál fue el gasto TOTAL de todas juntas?"

pasos:
  - "Total = media × cantidad = {media_gasto} × {personas} = {media_gasto * personas}"

explicacion: |
  Con la mediana sola, este cálculo no sería posible — sólo la media
  tiene esta propiedad de reconstruir el total.
```

### 18 — La mediana no permite reconstruir el total

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["mediana"]

respuesta: verdadero
tipo: vf

enunciado: "Conociendo sólo la mediana de un conjunto de datos y la cantidad de datos, NO se puede calcular la suma total de todos los valores (a diferencia de la media, que sí lo permite)."

explicacion: |
  La mediana no 'contiene' la información de cuánto suman todos los
  valores, sólo cuál queda en el medio.
```

### 19 — Aplicación real: temperatura promedio global

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "intermedio"
  tags: ["media", "aplicacion"]

enunciado: "Si se dice que 'la temperatura promedio global subió 1,5°C', ¿significa que TODOS los lugares del planeta subieron exactamente 1,5°C?"
tipo: mc
opciones_explicitas:
  - "No — es un promedio global; algunas zonas pueden haber subido mucho más y otras mucho menos (o incluso bajado)"
  - "Sí, un promedio global siempre significa que todos los lugares cambiaron exactamente igual"
  - "No tiene sentido promediar temperaturas de distintos lugares"
respuesta: "No — es un promedio global; algunas zonas pueden haber subido mucho más y otras mucho menos (o incluso bajado)"

explicacion: |
  Es el mismo problema de fondo que el sueldo promedio: un promedio
  resume, pero no describe cada caso individual.
```

### 20 — Presentar una sola medida puede ser honesto y aun así incompleto

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["criterio"]

respuesta: verdadero
tipo: vf

enunciado: "Presentar sólo una medida (como el promedio) sin más contexto puede ser matemáticamente correcto y honesto, y AL MISMO TIEMPO dar una idea incompleta o engañosa de la situación real."

explicacion: |
  No hace falta mala intención para que un resumen estadístico, sin
  contexto, dé una impresión equivocada.
```

### 21 — Problema: comparando media y mediana de un mismo grupo de notas

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["media", "mediana", "problema"]

variables:
  a: random(60, 80)
  b: random(60, 80)
  c: random(60, 80)
  d: random(60, 80)
  bajo: random(5, 20)
  datos: [a, b, c, d, bajo]

respuesta: redondear(mediana(datos) - promedio(datos), 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Las notas de 5 alumnos (sobre 100) son: {a}, {b}, {c}, {d} y {bajo} (un alumno con una nota muy baja). ¿Cuál es la diferencia entre la mediana y la media (mediana menos media)?"

pasos:
  - "Mediana = {mediana(datos)}. Media = {redondear(promedio(datos), 2)}."
  - "Mediana − Media = {mediana(datos)} − {redondear(promedio(datos), 2)} = {redondear(mediana(datos) - promedio(datos), 2)}"

explicacion: |
  Acá el valor atípico es BAJO, no alto — arrastra la media hacia
  abajo, por eso la mediana queda por encima de la media (al revés
  que en el caso del sueldo alto).
```

### 22 — Un valor atípico puede tirar la media hacia arriba o hacia abajo

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["media"]

respuesta: verdadero
tipo: vf

enunciado: "Un valor atípico puede distorsionar la media hacia arriba (si es mucho más grande que el resto) o hacia abajo (si es mucho más chico), según el caso."

explicacion: |
  No siempre el problema es un valor 'demasiado alto' — también puede
  ser uno 'demasiado bajo'.
```

### 23 — Problema: decidir qué medida conviene reportar

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["criterio", "problema"]

enunciado: "Un estudio mide el tiempo que tardan 100 personas en resolver un problema, y hay 3 personas que tardaron muchísimo más que las demás (rezagadas). ¿Qué medida conviene reportar como 'tiempo típico'?"
tipo: mc
opciones_explicitas:
  - "La mediana, porque esos 3 casos extremos no la distorsionan tanto como distorsionarían a la media"
  - "La media, porque siempre es la medida más precisa"
  - "La moda, porque siempre representa mejor que las otras dos"
respuesta: "La mediana, porque esos 3 casos extremos no la distorsionan tanto como distorsionarían a la media"

explicacion: |
  Es exactamente el criterio de este módulo: elegir la medida según
  si hay o no valores atípicos relevantes.
```

### 24 — Cierre: para qué sirve este bloque

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender cuál medida 'miente' y cuándo?"
tipo: mc
opciones_explicitas:
  - "Para elegir la medida de tendencia central correcta según la pregunta y los datos, y para leer con criterio crítico cualquier estadística resumida en un solo número"
  - "Para saber que la mediana siempre es mejor que la media en todos los casos"
  - "Para desconfiar de todas las estadísticas, sin excepción"
respuesta: "Para elegir la medida de tendencia central correcta según la pregunta y los datos, y para leer con criterio crítico cualquier estadística resumida en un solo número"

explicacion: |
  Es el puente directo hacia
  `../tablas-de-frecuencia-cuartiles-percentiles-y-varianza/` — ver
  cuánto varían los datos es la forma más completa de responder
  'cuánto se pierde al resumir en un solo número'.
```
