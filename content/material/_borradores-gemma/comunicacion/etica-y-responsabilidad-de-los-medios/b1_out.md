### 1 — El concepto de veracidad
```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "basico"
  tags: ["etica", "verdad", "periodismo"]

respuesta: "veracidad"
tipo: completar
respuestas_validas: ["veracidad"]

enunciado: "El compromiso ético de los medios de comunicación con la exactitud y la fidelidad de los hechos se denomina ___."

explicacion: |
  La veracidad no implica la verdad absoluta (que es metafísica), sino el deber de contrastar la información y presentarla de la manera más fiel posible a los hechos.
```

### 2 — Responsabilidad social
```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "basico"
  tags: ["responsabilidad", "social", "etica"]

variables:
  es_falso: uno_de([verdadero, falso])

respuesta: es_falso
tipo: vf

enunciado: "La responsabilidad social implica que los medios tienen el deber de informar de manera objetiva, incluso si esto contraviene sus intereses económicos o políticos."

explicacion: |
  La ética periodística exige priorizar el derecho a la información de la sociedad sobre los intereses particulares del medio.
```

### 3 — El proceso de verificación
```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "intermedio"
  tags: ["verificacion", "fuentes", "proceso"]

opciones_explicitas: ["Contraste de fuentes", "Publicación de la noticia", "Recolección de datos"]

respuesta: ["Recolección de datos", "Contraste de fuentes", "Publicación de la noticia"]
tipo: ordenar

enunciado: "Ordene cronológicamente los pasos esenciales para garantizar la integridad de una noticia:"

explicacion: |
  Un proceso ético requiere primero obtener la información, luego verificarla con múltiples fuentes y finalmente comunicarla.
```

### 4 — Sesgo informativo
```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "intermedio"
  tags: ["sesgo", "imparcialidad", "etica"]

opciones_explicitas: ["Imparcialidad", "Sensacionalismo", "Opinión"]

respuesta: "Imparcialidad"
tipo: mc

enunciado: "Cuando un medio presenta los hechos sin inclinaciones ideológicas que distorsionen la realidad, está actuando bajo el principio de:"

explicacion: |
  La imparcialidad busca que el espectador reciba todos los ángulos de una noticia para que pueda formar su propio criterio.
```

### 5 — El derecho a la información
```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "basico"
  tags: ["derechos", "publico", "etica"]

variables:
  caso: uno_de([0, 1])

enunciado: "En el escenario {caso == 0 ? "donde un medio publica información privada sin interés público" : "donde un medio informa sobre un evento de interés general"}, ¿se está cumpliendo con la responsabilidad social hacia el público?"

pasos:
  - "Evaluar si la información es de interés público o solo curiosidad morbosa."
  - "Determinar si la publicación vulnera la ética o el derecho a la intimidad."

respuesta: tabla[caso][1]
tipo: mc
opciones_explicitas: ["Sí", "No"]
tabla: [["No", "No"], ["Sí", "Sí"]]

explicacion: |
  La responsabilidad social se equilibra con el derecho a la intimidad; informar sobre la vida privada sin un interés público legítimo es una falta ética.
```