### 1 — Identificación de fuentes
```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "basico"
  tags: ["fuentes", "investigacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[["Diario El País, edición de hoy", "Un libro de historia escrito en 2023", "Un video de un testigo presencial", "Un podcast que analiza una noticia"], ["Un diario de un soldado en la guerra", "Un documental que explica la guerra", "Una carta escrita en 1945", "Un libro de texto escolar"]]]

enunciado: "Si estamos investigando un evento histórico ocurrido hace 50 años, ¿cuál de los siguientes ejemplos sería una fuente primaria? {datos[escenario_idx][0][0]}"

opciones_explicitas: ["{datos[escenario_idx][0][0]}", "{datos[escenario_idx][0][1]}", "{datos[escenario_idx][0][2]}", "{datos[escenario_idx][0][3]}"]

respuesta: "{datos[escenario_idx][0][2]}"
tipo: mc

explicacion: |
  Una fuente primaria es un testimonio directo o un objeto creado en el momento del evento. En este caso, el video del testigo es un registro de primera mano.
```

### 2 — El rol del historiador
```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "basico"
  tags: ["analisis", "interpretacion"]

enunciado: "Un historiador lee un diario íntimo de una persona que vivió la Revolución Francesa para escribir un libro sobre ese periodo. El diario es una fuente primaria, mientras que el libro del historiador es una fuente ________."

respuestas_validas: ["secundaria"]
tipo: completar

explicacion: |
  El libro es una fuente secundaria porque el historiador interpreta, analiza y comenta la información contenida en la fuente primaria (el diario).
```

### 3 — Veracidad y origen
```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "intermedio"
  tags: ["verificacion", "fake_news"]

enunciado: "Si un artículo de Wikipedia explica qué fue la Revolución Industrial basándose en varios libros de texto, ¿es la Wikipedia una fuente primaria?"

respuesta: falso
tipo: vf

explicacion: |
  Falso. Wikipedia es una fuente secundaria (o terciaria) porque recopila y sintetiza información que ya ha sido procesada por otros autores.
```

### 4 — Proceso de investigación
```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "intermedio"
  tags: ["metodologia", "orden"]

enunciado: "Para realizar una investigación académica rigurosa sobre un descubrimiento científico reciente, ordena los pasos lógicos de recolección de información:"

opciones_explicitas: ["Analizar el experimento original (fuente primaria)", "Leer artículos de divulgación científica (fuente secundaria)", "Comparar las conclusiones de los expertos (fuente secundaria)"]

respuesta: ["Analizar el experimento original (fuente primaria)", "Leer artículos de divulgación científica (fuente secundaria)", "Comparar las conclusiones de los expertos (fuente secundaria)"]
tipo: ordenar

explicacion: |
  El método científico ideal comienza con la observación o análisis del fenómeno directo (primaria) para luego contrastarlo con la interpretación de otros (secundaria).
```

### 5 — Clasificación de documentos
```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "avanzado"
  tags: ["clasificacion", "evidencia"]

variables:
  item_idx: uno_de([0, 1])
  ejemplos: [[["Fotografía de un accidente", "Noticia en un periódico sobre el accidente"], ["Entrevista a un sobreviviente", "Biografía del sobreviviente"]] ]

enunciado: "Analiza el par de elementos: {ejemplos[item_idx][0]} y {ejemplos[item_idx][1]}. ¿Cuál de los dos elementos es la fuente secundaria?"

opciones_explicitas: ["{ejemplos[item_idx][0]}", "{ejemplos[item_idx][1]}"]

respuesta: "{ejemplos[item_idx][1]}"
tipo: mc

explicacion: |
  La segunda opción es la secundaria porque es una obra que trata sobre la vida de otra persona (la fuente primaria es la entrevista o la vida misma del sujeto).
```