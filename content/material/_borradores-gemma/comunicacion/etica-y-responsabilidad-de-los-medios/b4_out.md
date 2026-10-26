### 1 — Veracidad vs. Objetividad
```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "intermedio"
  tags: ["etica", "veracidad", "objetividad"]

respuesta: "veracidad"
tipo: "completar"
respuestas_validas: ["veracidad"]

enunciado: "Mientras que la objetividad se refiere al método de recolección de datos sin sesgos, la ________ se refiere al compromiso ético de presentar hechos comprobables y honestos."

explicacion: |
  La veracidad implica una obligación moral de contrastar la información para que lo relatado coincida con la realidad, mientras que la objetividad es un ideal metodológico de neutralidad.
```

### 2 — Información vs. Opinión
```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "basico"
  tags: ["informacion", "opinion", "distincion"]

variables:
  escenario: uno_de([
    ["Un reporte sobre el clima", "informacion"],
    ["Un editorial sobre política", "opinion"],
    ["Una crónica de un accidente", "informacion"]
  ])

respuesta: escenario[1]
tipo: "mc"
opciones_explicitas: ["informacion", "opinion"]

enunciado: "En el contexto del periodismo ético, un texto que presenta hechos verificables sin la carga subjetiva del autor se distingue de la ________ porque su fin es informar, no persuadir."

explicacion: |
  La información busca transmitir datos objetivos, mientras que la opinión es la interpretación subjetiva de esos datos.
```

### 3 — Responsabilidad Social vs. Libertad de Expresión
```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "avanzado"
  tags: ["libertad_de_expresion", "responsabilidad_social"]

respuesta: verdadero
tipo: "vf"

enunciado: "¿La responsabilidad social de los medios implica que la libertad de expresión no es un derecho absoluto, ya que debe coexistir con el derecho de la sociedad a recibir información veraz y no dañina?"

explicacion: |
  La libertad de expresión permite la libre circulación de ideas, pero la responsabilidad social impone límites éticos para evitar la difamación o la desinformación deliberada.
```

### 4 — Fake News vs. Error Periodístico
```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "intermedio"
  tags: ["fake_news", "error"]

variables:
  caso: uno_de([
    ["Dato erróneo por descuido en la fuente", "error"],
    ["Noticia falsa creada para manipular", "fake_news"]
  ])

respuesta: caso[1]
tipo: "mc"
opciones_explicitas: ["error", "fake_news"]

enunciado: "Si un medio publica una noticia falsa con la intención deliberada de manipular la opinión pública, esto se clasifica como ________, lo cual se distingue del ________ que ocurre por descuido o falta de verificación."

explicacion: |
  La intención (dolo) es el factor determinante: la desinformación (fake news) busca engañar, mientras que el error es una falla en el proceso de verificación.
```

### 5 — El proceso de Verificación Ética
```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "intermedio"
  tags: ["verificacion", "proceso", "etica"]

respuesta: ["Contraste de fuentes", "Verificación de datos", "Contextualización", "Publicación responsable"]
tipo: "ordenar"
opciones_explicitas: ["Contraste de fuentes", "Verificación de datos", "Contextualización", "Publicación responsable"]

enunciado: "Para cumplir con el deber de veracidad, un periodista debe seguir un orden lógico de rigor informativo. Ordena los pasos de la gestión ética de la información:"

explicacion: |
  El proceso comienza con la diversidad de fuentes, sigue con la comprobación de datos, la puesta en contexto para evitar la manipulación y finaliza con la publicación consciente.
```