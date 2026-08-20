### 1 — Identificación de fuente
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
respuesta: "escenarios[idx][1]"
tipo: "mc"

explicacion: |
  Una fuente primaria es un registro original creado en el momento del evento, sin interpretación externa.
```

### 2 — Verdadero o Falso: Interpretación
```
metadata:
  materia: "ciudadania_digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "basico"
  tags: ["conceptos"]

variables:
  casos: [[true, "Un ensayo que analiza las causas de la Revolución Francesa"], [false, "Un diario personal escrito por un soldado en la guerra"]]
  idx: uno_de([0,1])

enunciado: "Determina si la siguiente afirmación es verdadera o falsa: {casos[idx][0]}"

respuesta: casos[idx][0]
tipo: "vf"

explicacion: |
  Si el texto analiza o interpreta un evento pasado, se considera una fuente secundaria.
```

### 3 — Completar: El rol del historiador
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

respuestas_validas: ["primaria", "secundaria"]
respuesta: "ejemplos[idx][1]"
tipo: "completar"

explicacion: |
  Las fuentes secundarias son aquellas que procesan, interpretan o sintetizan la información de las fuentes primarias.
```

### 4 — Clasificación de documentos
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
respuesta: "items[idx][1]"
tipo: "mc"

explicacion: |
  La clasificación depende de si el objeto es el objeto de estudio original o un comentario sobre él.
```

### 5 — Orden lógico de investigación
```
metadata:
  materia: "ciudadania_digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "avanzado"
  tags: ["proceso"]

variables:
  pasos_correctos: ["Encontrar una fuente primaria", "Analizar la fuente primaria", "Escribir una fuente secundaria"]

enunciado: "Ordena el proceso lógico para generar conocimiento histórico a partir de evidencias:"

opciones_explicitas: ["Encontrar una fuente primaria", "Analizar la fuente primaria", "Escribir una fuente secundaria"]
respuesta: ["Encontrar una fuente primaria", "Analizar la fuente primaria", "Escribir una fuente secundaria"]
tipo: "ordenar"

explicacion: |
  Primero se obtiene la evidencia (primaria), luego se procesa (análisis) y finalmente se comunica el resultado (fuente secundaria).
```