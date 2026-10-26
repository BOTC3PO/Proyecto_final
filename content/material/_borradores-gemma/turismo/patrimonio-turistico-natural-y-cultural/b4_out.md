### 1 — Diferencia entre patrimonio natural y cultural
```
metadata:
  materia: "turismo"
  tema: "patrimonio_turistico_natural_y_cultural"
  nivel: "basico"
  tags: ["definiciones", "clasificacion"]

respuesta: "natural"
tipo: "completar"
respuestas_validas: ["natural"]

enunciado: "Mientras que el patrimonio cultural está compuesto por obras humanas como monumentos o tradiciones, el patrimonio ___ se refiere a los elementos de la naturaleza, como parques nacionales y paisajes sin intervención humana significativa."

explicacion: |
  El patrimonio natural está constituido por formaciones físicas y biológicas, mientras que el cultural es el resultado de la actividad humana.
```

### 2 — Atractivos de un destino cultural
```
metadata:
  materia: "turismo"
  tema: "patrimonio_turistico_natural_y_cultural"
  nivel: "basico"
  tags: ["atractivos", "cultura"]

opciones_explicitas: ["Paisajes montañosos", "Festivales folclóricos", "Playas tropicales", "Glaciares"]
respuesta: "Festivales folclóricos"
tipo: "mc"

enunciado: "¿Cuál de los siguientes elementos es un ejemplo de patrimonio turístico cultural que distingue a un destino por su tradición viva?"

explicacion: |
  Los festivales folclóricos son expresiones de la cultura inmaterial, a diferencia de los paisajes o glaciares que son patrimonio natural.
```

### 3 — Clasificación de monumentos
```
metadata:
  materia: "turismo"
  tema: "patrimonio_turistico_natural_y_cultural"
  nivel: "basico"
  tags: ["clasificacion", "monumentos"]

respuesta: verdadero
tipo: "vf"

enunciado: "Un monumento histórico, como una catedral antigua o una pirámide, se clasifica dentro del patrimonio turístico cultural."

explicacion: |
  Es verdadero, ya que los monumentos son creaciones humanas que poseen un valor histórico o estético para la sociedad.
```

### 4 — Elementos del patrimonio natural
```
metadata:
  materia: "turismo"
  tema: "patrimonio_turistico_natural_y_cultural"
  nivel: "intermedio"
  tags: ["componentes", "naturaleza"]

variables:
  escenario: uno_de([
    ["Reserva de la Biosfera", "Protección de la biodiversidad"],
    ["Cataratas del Iguazú", "Formaciones geológicas naturales"],
    ["Arrecife de coral", "Ecosistemas marinos"]
  ])

respuesta: escenario[1]
tipo: "mc"

opciones_explicitas: [escenario[0], escenario[1], "Museos de antropología", "Arquitectura colonial"]

enunciado: "Si un turista visita un destino cuyo principal atractivo es la {escenario[0]}, está consumiendo principalmente:"

explicacion: |
  La {escenario[0]} es un ejemplo de patrimonio natural debido a su origen biológico y geológico.
```

### 5 — Procesos de conservación patrimonial
```
metadata:
  materia: "turismo"
  tema: "patrimonio_turistico_natural_y_cultural"
  nivel: "intermedio"
  tags: ["gestion", "conservacion"]

opciones_explicitas: [
  "Identificación del recurso",
  "Planificación de la infraestructura",
  "Promoción y comercialización",
  "Evaluación del impacto turístico"
]
respuesta: ["Identificación del recurso", "Planificación de la infraestructura", "Promoción y comercialización", "Evaluación del impacto turístico"]
tipo: "ordenar"

enunciado: "Ordena cronológicamente las etapas lógicas para la gestión de un nuevo producto turístico basado en patrimonio:"

explicacion: |
  Para gestionar un destino se debe primero identificar el recurso, luego planificar su uso, después promocionarlo y finalmente evaluar el impacto generado.
```