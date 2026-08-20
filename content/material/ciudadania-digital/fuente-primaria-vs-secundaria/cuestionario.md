# Ciudadania Digital — Fuente primaria vs secundaria (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de fuente primaria

```
metadata:
  materia: "ciudadania_digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "basico"
  tags: ["definicion", "fuentes"]

respuesta: verdadero
tipo: vf

enunciado: "Una fuente primaria es un documento o testimonio original que fue creado en el momento exacto en que ocurrió el evento estudiado."

explicacion: |
  Las fuentes primarias son registros directos (diarios, fotos, entrevistas, documentos oficiales) sin interpretaciones externas.
```

### 2 — Identificación de fuentes

```
metadata:
  materia: "ciudadania_digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "basico"
  tags: ["clasificacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Carta de un soldado en la guerra", "Un libro de historia escrito en 2023"], ["Video de un discurso presidencial", "Un artículo de opinión sobre el discurso"]]

respuesta: escenarios[escenario_idx][0]
tipo: mc
opciones_explicitas: [escenarios[escenario_idx][0], escenarios[escenario_idx][1]]

enunciado: "Analiza estos dos elementos: '{escenarios[escenario_idx][0]}' y '{escenarios[escenario_idx][1]}'. ¿Cuál de los dos actúa como una fuente primaria?"

explicacion: |
  La fuente primaria es el objeto original (la carta o el video), mientras que el libro o el artículo son fuentes secundarias porque interpretan el original.
```

### 3 — La función de la fuente secundaria

```
metadata:
  materia: "ciudadania_digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "basico"
  tags: ["secundaria"]

respuesta: "interpreta o analiza"
tipo: completar
respuestas_validas:
  - "interpreta o analiza"
  - "comenta el original"

enunciado: "A diferencia de la fuente primaria, una fuente secundaria tiene como función principal ___ la información de la fuente original."

explicacion: |
  Las fuentes secundarias (enciclopedias, libros de texto, críticas) se basan en fuentes primarias para ofrecer una interpretación o resumen.
```

### 4 — Relación entre fuentes

```
metadata:
  materia: "ciudadania_digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "intermedio"
  tags: ["relacion"]

tipo: ordenar
opciones_explicitas: ["Evento original", "Fuente primaria", "Fuente secundaria"]
respuesta_orden: ["Evento original", "Fuente primaria", "Fuente secundaria"]

enunciado: "Ordena la cadena de producción de la información, desde el hecho hasta el análisis interpretativo:"

pasos:
  - "El suceso ocurre"
  - "Se crea un documento directo"
  - "Se escribe un libro sobre el suceso"

explicacion: |
  El orden lógico es: 1. El evento, 2. El registro directo (primaria), 3. El análisis posterior (secundaria).
```

### 5 — Verdad o Falso: Relación de dependencia

```
metadata:
  materia: "ciudadania_digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "basico"
  tags: ["dependencia"]

respuesta: falso

tipo: vf

enunciado: "¿Es posible que una fuente secundaria exista sin que exista una fuente primaria previa que la haya originado?"

explicacion: |
  Falso. La fuente secundaria siempre requiere de una fuente primaria (o un conjunto de ellas) para poder realizar su labor de interpretación o análisis.
```

### 6 — Identificación de fuentes

```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "basico"
  tags: ["fuentes", "investigacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Diario El País, edición de hoy", "Un libro de historia escrito en 2023", "Un video de un testigo presencial", "Un podcast que analiza una noticia"], ["Un diario de un soldado en la guerra", "Un documental que explica la guerra", "Una carta escrita en 1945", "Un libro de texto escolar"]]

enunciado: "Si estamos investigando un evento histórico ocurrido hace 50 años, ¿cuál de los siguientes ejemplos sería una fuente primaria?"

opciones_explicitas: [datos[escenario_idx][0], datos[escenario_idx][1], datos[escenario_idx][2], datos[escenario_idx][3]]

respuesta: datos[escenario_idx][2]
tipo: mc

explicacion: |
  Una fuente primaria es un testimonio directo o un objeto creado en el momento del evento. En este caso, el video del testigo es un registro de primera mano.
```

### 7 — El rol del historiador

```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "basico"
  tags: ["analisis", "interpretacion"]

enunciado: "Un historiador lee un diario íntimo de una persona que vivió la Revolución Francesa para escribir un libro sobre ese periodo. El diario es una fuente primaria, mientras que el libro del historiador es una fuente ________."

respuestas_validas:
  - "secundaria"
tipo: completar

explicacion: |
  El libro es una fuente secundaria porque el historiador interpreta, analiza y comenta la información contenida en la fuente primaria (el diario).
```

### 8 — Veracidad y origen

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

### 9 — Proceso de investigación

```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "intermedio"
  tags: ["metodologia", "orden"]

enunciado: "Para realizar una investigación académica rigurosa sobre un descubrimiento científico reciente, ordena los pasos lógicos de recolección de información:"

opciones_explicitas: ["Analizar el experimento original (fuente primaria)", "Leer artículos de divulgación científica (fuente secundaria)", "Comparar las conclusiones de los expertos (fuente secundaria)"]

respuesta_orden: ["Analizar el experimento original (fuente primaria)", "Leer artículos de divulgación científica (fuente secundaria)", "Comparar las conclusiones de los expertos (fuente secundaria)"]
tipo: ordenar

explicacion: |
  El método científico ideal comienza con la observación o análisis del fenómeno directo (primaria) para luego contrastarlo con la interpretación de otros (secundaria).
```

### 10 — Clasificación de documentos

```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "avanzado"
  tags: ["clasificacion", "evidencia"]

variables:
  item_idx: uno_de([0, 1])
  ejemplos: [["Fotografía de un accidente", "Noticia en un periódico sobre el accidente"], ["Entrevista a un sobreviviente", "Biografía del sobreviviente"]]

enunciado: "Analiza el par de elementos: {ejemplos[item_idx][0]} y {ejemplos[item_idx][1]}. ¿Cuál de los dos elementos es la fuente secundaria?"

opciones_explicitas: [ejemplos[item_idx][0], ejemplos[item_idx][1]]

respuesta: ejemplos[item_idx][1]
tipo: mc

explicacion: |
  La segunda opción es la secundaria porque es una obra que trata sobre la vida de otra persona (la fuente primaria es la entrevista o la vida misma del sujeto).
```

### 11 — ¿Es un libro de historia siempre una fuente primaria?

```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente-primaria-vs-secundaria"
  nivel: "basico"
  tags: ["fuentes", "investigacion"]

respuesta: falso
tipo: vf

enunciado: "Un libro de texto escrito por un historiador en el año 2020 que analiza la Revolución Francesa se considera una fuente primaria."

explicacion: |
  Falso. El libro es una fuente secundaria porque interpreta y analiza eventos ocurridos en el pasado a partir de otras fuentes. Una fuente primaria sería un diario escrito por alguien que vivió la Revolución Francesa.
```

### 12 — Identificación de la naturaleza de una fuente

```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente-primaria-vs-secundaria"
  nivel: "intermedio"
  tags: ["clasificacion", "evidencia"]

variables:
  escenario_idx: uno_de([0, 1])
  opcion_idx: uno_de([0, 1])
  escenario: [[["Entrevista grabada a un sobreviviente de un terremoto", "primaria"], ["Artículo de Wikipedia sobre la historia de la ciudad", "secundaria"]], [["Fotografía original de la llegada del hombre a la Luna", "primaria"], ["Documental de Netflix sobre la carrera espacial", "secundaria"]]]

enunciado: "Si analizamos el siguiente elemento: {escenario[escenario_idx][opcion_idx][0]}, ¿qué tipo de fuente estamos consultando?"

opciones_explicitas: ["primaria", "secundaria"]
respuesta: escenario[escenario_idx][opcion_idx][1]
tipo: mc

explicacion: |
  Las fuentes primarias son testimonios directos o evidencias originales del evento. Las secundarias son interpretaciones, resúmenes o análisis realizados posteriormente por terceros.
```

### 13 — El error de la interpretación

```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente-primaria-vs-secundaria"
  nivel: "intermedio"
  tags: ["analisis", "confusion"]

respuesta: "interpretación"
tipo: completar
respuestas_validas:
  - "interpretación"
  - "comentario"
  - "análisis"

enunciado: "Una fuente secundaria se diferencia de una primaria porque su función principal no es presentar el hecho original, sino realizar una ___ del mismo."

explicacion: |
  Exacto. La fuente secundaria añade una capa de análisis, crítica o síntesis sobre la información original (fuente primaria).
```

### 14 — ¿Cuándo una fuente cambia de categoría?

```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente-primaria-vs-secundaria"
  nivel: "avanzado"
  tags: ["contexto", "metodologia"]

respuesta: verdadero
tipo: vf

enunciado: "Un artículo de un periódico escrito en 1920 sobre un evento ocurrido el mismo día puede ser una fuente primaria para un historiador actual, pero un libro de texto de 2024 que cita ese periódico es una fuente secundaria."

explicacion: |
  Correcto. La clasificación depende del uso y la relación con el evento. El periódico es testimonio directo del momento; el libro es una interpretación posterior.
```

### 15 — Proceso de construcción de conocimiento

```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente-primaria-vs-secundaria"
  nivel: "intermedio"
  tags: ["metodologia", "orden"]

opciones_explicitas: ["Recolección de evidencia directa", "Análisis de datos primarios", "Redacción de una conclusión o síntesis"]
respuesta_orden: ["Recolección de evidencia directa", "Análisis de datos primarios", "Redacción de una conclusión o síntesis"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para que un investigador pase de trabajar con fuentes primarias a producir una fuente secundaria:"

explicacion: |
  Para crear una fuente secundaria, primero se debe obtener la evidencia original (primaria), luego procesar y analizar esa información, y finalmente redactar un nuevo documento que explique o sintetice lo hallado.
```

### 16 — Identificación de fuentes

```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "basico"
  tags: ["fuentes", "investigacion"]

opciones_explicitas: ["Un diario escrito por un testigo presencial de un evento", "Un libro de texto que explica la Revolución Francesa", "Un documental que analiza la historia de la música", "Un artículo de Wikipedia sobre la fotosíntesis"]

respuesta: "Un diario escrito por un testigo presencial de un evento"
tipo: mc

enunciado: "Si estás realizando una investigación histórica, ¿cuál de los siguientes ejemplos constituye una fuente primaria?"

explicacion: |
  Una fuente primaria es un registro original creado en el momento del evento o por un testigo directo, sin interpretaciones previas de terceros.
```

### 17 — Verdad o Falso: La interpretación

```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "Una fuente secundaria se caracteriza por ser un documento original que no ha sido interpretado ni analizado por otros autores."

explicacion: |
  Falso. Precisamente, la fuente secundaria es aquella que interpreta, analiza o sintetiza información proveniente de fuentes primarias.
```

### 18 — El proceso de investigación

```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "intermedio"
  tags: ["metodologia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Entrevista a un sobreviviente", "Análisis de una carta antigua"], ["Interpretación de la carta", "Resumen de la entrevista"]]

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas:
  - datos[0][1]
  - datos[1][1]

enunciado: "Si el objeto de estudio es {datos[escenario_idx][0]}, el documento que analiza ese registro se clasifica como una fuente ___."

pasos:
  - "Identificar el origen del documento base."
  - "Determinar si el documento analiza o solo relata el hecho."

explicacion: |
  Como el documento es un análisis o resumen de un evento/registro previo, se convierte en una fuente secundaria.
```

### 19 — Ordenar la cadena de información

```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "intermedio"
  tags: ["jerarquia"]

opciones_explicitas: ["Fotografía del momento del hecho", "Reportaje periodístico sobre la foto", "Ensayo histórico sobre el evento"]
respuesta_orden: ["Fotografía del momento del hecho", "Reportaje periodístico sobre la foto", "Ensayo histórico sobre el evento"]
tipo: ordenar

enunciado: "Ordena estos elementos según el proceso de transformación de la información, desde la fuente más original (primaria) hasta la más interpretativa (secundaria):"

explicacion: |
  La fotografía es el registro directo (primaria), el reportaje la comenta (secundaria) y el ensayo es una interpretación profunda de ambos (secundaria avanzada).
```

### 20 — Diferencia fundamental

```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "avanzado"
  tags: ["distincion"]

respuesta: "interpretación"
tipo: completar
respuestas_validas:
  - "interpretación"
  - "interpretación"
  - "interpretación"

enunciado: "La principal diferencia entre una fuente primaria y una secundaria radica en la presencia de ___ o análisis sobre el evento original."

explicacion: |
  La fuente primaria es el dato bruto o testimonio directo; la secundaria añade una capa de interpretación, análisis o comentario.
```

### 21 — Identificación de fuente

```
metadata:
  materia: "ciudadania_digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "basico"
  tags: ["investigacion", "fuentes"]

variables:
  escenarios: [["Un video original de un discurso presidencial", "primaria"], ["Un artículo de Wikipedia sobre la historia de la presidencia", "secundaria"], ["La fotografía de una protesta capturada en el momento", "primaria"], ["Un libro de texto escolar que explica la constitución", "secundaria"]]
  idx: uno_de([0,1,2,3])

enunciado: "Si estás realizando una investigación histórica y encuentras {escenarios[idx][0]}, ¿qué tipo de fuente estás consultando?"

opciones_explicitas: ["primaria", "secundaria"]
respuesta: escenarios[idx][1]
tipo: "mc"

explicacion: |
  Una fuente primaria es un registro original creado en el momento del evento, sin interpretación externa.
```

### 22 — Verdadero o Falso: Interpretación

```
metadata:
  materia: "ciudadania_digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "basico"
  tags: ["conceptos"]

variables:
  idx: uno_de([0,1])
  textos: ["Un ensayo que analiza las causas de la Revolución Francesa es un ejemplo de fuente primaria.", "Un diario personal escrito por un soldado en la guerra es un ejemplo de fuente primaria."]
  valores: [falso, verdadero]

enunciado: "Determina si la siguiente afirmación es verdadera o falsa: {textos[idx]}"

respuesta: valores[idx]
tipo: "vf"

explicacion: |
  Si el texto analiza o interpreta un evento pasado, se considera una fuente secundaria.
```

### 23 — Completar: El rol del historiador

```
metadata:
  materia: "ciudadania_digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "intermedio"
  tags: ["metodologia"]

variables:
  ejemplos: [["un documental que resume un conflicto", "secundaria"], ["una carta escrita por un prócer", "primaria"]]
  idx: uno_de([0,1])

enunciado: "Un historiador lee {ejemplos[idx][0]}. Por lo tanto, está trabajando con una fuente de tipo ___."

respuestas_validas:
  - "primaria"
  - "secundaria"
respuesta: "ejemplos[idx][1]"
tipo: "completar"

explicacion: |
  Las fuentes secundarias son aquellas que procesan, interpretan o sintetizan la información de las fuentes primarias.
```

### 24 — Clasificación de documentos

```
metadata:
  materia: "ciudadania_digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "basico"
  tags: ["clasificacion"]

variables:
  items: [["Carta de un soldado", "primaria"], ["Biografía de un héroe", "secundaria"], ["Fotografía de un evento", "primaria"], ["Enciclopedia", "secundaria"]]
  idx: uno_de([0,1,2,3])

enunciado: "Clasifica el siguiente elemento: {items[idx][0]}"

opciones_explicitas: ["primaria", "secundaria"]
respuesta: items[idx][1]
tipo: "mc"

explicacion: |
  La clasificación depende de si el objeto es el objeto de estudio original o un comentario sobre él.
```

### 25 — Orden lógico de investigación

```
metadata:
  materia: "ciudadania_digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "avanzado"
  tags: ["proceso"]

enunciado: "Ordena el proceso lógico para generar conocimiento histórico a partir de evidencias:"

opciones_explicitas: ["Encontrar una fuente primaria", "Analizar la fuente primaria", "Escribir una fuente secundaria"]
respuesta_orden: ["Encontrar una fuente primaria", "Analizar la fuente primaria", "Escribir una fuente secundaria"]
tipo: "ordenar"

explicacion: |
  Primero se obtiene la evidencia (primaria), luego se procesa (análisis) y finalmente se comunica el resultado (fuente secundaria).
```
