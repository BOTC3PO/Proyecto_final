### 1 — Identificación de fuentes
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

### 2 — Verdad o Falso: La interpretación
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

### 3 — El proceso de investigación
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
respuestas_validas: [datos[0][1], datos[1][1]]

enunciado: "Si el objeto de estudio es {datos[escenario_idx][0]}, el documento que analiza ese registro se clasifica como una fuente ___."

pasos:
  - "Identificar el origen del documento base."
  - "Determinar si el documento analiza o solo relata el hecho."

explicacion: |
  Como el documento es un análisis o resumen de un evento/registro previo, se convierte en una fuente secundaria.
```

### 4 — Ordenar la cadena de información
```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "intermedio"
  tags: ["jerarquia"]

opciones_explicitas: ["Fotografía del momento del hecho", "Reportaje periodístico sobre la foto", "Ensayo histórico sobre el evento"]
respuesta: ["Fotografía del momento del hecho", "Reportaje periodístico sobre la foto", "Ensayo histórico sobre el evento"]
tipo: ordenar

enunciado: "Ordena estos elementos según el proceso de transformación de la información, desde la fuente más original (primaria) hasta la más interpretativa (secundaria):"

explicacion: |
  La fotografía es el registro directo (primaria), el reportaje la comenta (secundaria) y el ensayo es una interpretación profunda de ambos (secundaria avanzada).
```

### 5 — Diferencia fundamental
```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "avanzado"
  tags: ["distincion"]

respuesta: "interpretación"
tipo: completar
respuestas_validas: ["interpretación", "interpretación", "interpretación"]

enunciado: "La principal diferencia entre una fuente primaria y una secundaria radica en la presencia de ___ o análisis sobre el evento original."

explicacion: |
  La fuente primaria es el dato bruto o testimonio directo; la secundaria añade una capa de interpretación, análisis o comentario.
```