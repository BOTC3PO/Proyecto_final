### 1 — El espejismo de la fluidez
```
metadata:
  materia: "aprendizaje"
  tema: "metacognicion_fluidez"
  nivel: "basico"
  tags: ["metacognicion", "ilusion_de_conocimiento"]

respuesta: falso
tipo: vf

enunciado: "La sensación de familiaridad al leer un texto que ya hemos visto antes (ilusión de fluidez) es una garantía de que hemos comprendido y retenido la información para un examen."

explicacion: |
  Falso. La fluidez de lectura o reconocimiento es una trampa cognitiva. Reconocer algo no es lo mismo que saber explicarlo o aplicarlo. La metacognición nos permite distinguir entre 'reconocimiento' y 'dominio real'.
```

### 2 — Monitoreo vs. Control
```
metadata:
  materia: "aprendizaje"
  tema: "componentes_metacognicion"
  nivel: "intermedio"
  tags: ["monitoreo", "control"]

variables:
  escenario: uno_de([
    ["Un estudiante nota que se distrajo al leer un párrafo.", "monitoreo"],
    ["Un estudiante decide cambiar de técnica porque no entiende el tema.", "control"],
    ["Un estudiante se da cuenta de que no puede explicar el concepto en voz alta.", "monitoreo"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["monitoreo", "control"]

enunciado: "Cuando un estudiante detecta que su nivel de comprensión ha bajado durante una sesión de estudio, está ejecutando la fase de _________."

explicacion: |
  El proceso de supervisar el propio aprendizaje se llama monitoreo. El proceso de actuar sobre esa información para corregir el rumbo es el control. En este caso, el acto de 'notar' es monitoreo.
```

### 3 — El error de la lectura pasiva
```
metadata:
  materia: "aprendizaje"
  tema: "estrategias_metacognitivas"
  nivel: "intermedio"
  tags: ["estrategias", "evaluacion"]

respuesta: "autoexplicacion"
tipo: completar
respuestas_validas: ["autoexplicacion", "relectura"]

enunciado: "Para evitar la falsa sensación de saber, en lugar de simplemente releer un texto, es más efectivo utilizar la técnica de la _________, donde intentas explicar el concepto con tus propias palabras sin mirar el libro."

explicacion: |
  La relectura es pasiva y fomenta la ilusión de competencia. La autoexplicación (o el uso de tests de autoevaluación) obliga al cerebro a recuperar la información, revelando lo que realmente se sabe y lo que no.
```

### 4 — La jerarquía del conocimiento
```
metadata:
  materia: "aprendizaje"
  tema: "conocimiento_metacognitivo"
  nivel: "avanzado"
  tags: ["procedimientos", "conocimiento"]

respuesta: "procedimientos"
tipo: mc
opciones_explicitas: ["declarativo", "procedimental", "procedimientos"]

enunciado: "Saber 'qué' es un concepto (conocimiento declarativo) es distinto a saber 'cómo' aplicar una estrategia de estudio para resolver un problema complejo. Este último tipo de conocimiento se refiere a los _________."

explicacion: |
  El conocimiento metacognitivo incluye saber qué estrategias usar (procedimientos) para gestionar el aprendizaje de manera efectiva.
```

### 5 — El ciclo del aprendizaje efectivo
```
metadata:
  materia: "aprendizaje"
  tema: "ciclo_metacognitivo"
  nivel: "intermedio"
  tags: ["ordenar", "proceso"]

respuesta: ["planificar", "monitorear", "evaluar"]
tipo: ordenar
opciones_explicitas: ["planificar", "monitorear", "evaluar"]

enunciado: "Ordena las fases del ciclo metacognitivo en el orden lógico en que ocurren durante una sesión de estudio eficiente:"

pasos:
  - "Antes de empezar a estudiar"
  - "Durante el proceso de estudio"
  - "Al finalizar la sesión"

explicacion: |
  El ciclo comienza con la planificación (objetivos), continúa con el monitoreo (verificar si se entiende) y finaliza con la evaluación (revisar si se cumplió el objetivo).
```