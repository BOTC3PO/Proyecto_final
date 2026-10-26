### 1 — El dilema del examen
```
metadata:
  materia: "aprendizaje"
  tema: "metacognicion_autoevaluacion"
  nivel: "basico"
  tags: ["estudio", "metacognicion"]

variables:
  escenario: uno_de([["Juan revisó sus notas pero no puede explicar el concepto de fotosíntesis sin leer el libro", "falso"], ["Ana leyó todo el capítulo y puede explicar cada concepto con sus propias palabras", "verdadero"]])
  idx: uno_de([0, 1])

enunciado: "Analiza el caso: {escenario[idx][0]}. ¿Es este un ejemplo de una autoevaluación metacognitiva exitosa donde el estudiante reconoce su falta de conocimiento?"

respuesta: escenario[idx][1]
tipo: vf

explicacion: |
  La metacognición implica reconocer los límites del propio conocimiento. Si el estudiante necesita leer el libro para explicar algo, su autoevaluación fue correcta al detectar que no lo sabe.
```

### 2 — Estrategia de estudio eficiente
```
metadata:
  materia: "aprendizaje"
  tema: "metacognicion_estrategias"
  nivel: "intermedio"
  tags: ["eficiencia", "metacognicion"]

variables:
  caso: uno_de([["Revisar solo lo que ya sé", "ineficiente"], ["Identificar lagunas y practicar lo desconocido", "eficiente"]])
  idx: uno_de([0, 1])

enunciado: "Un estudiante aplica la metacognición para mejorar su rendimiento. Si decide: {caso[idx][0]}, su estrategia se considera: ___"

respuesta: caso[idx][1]
tipo: completar
respuestas_validas: ["ineficiente", "eficiente"]

explicacion: |
  Saber qué no se sabe permite dirigir el esfuerzo hacia los puntos débiles, optimizando el tiempo de estudio.
```

### 3 — El proceso de monitoreo
```
metadata:
  materia: "aprendizaje"
  tema: "metacognicion_monitoreo"
  nivel: "basico"
  tags: ["monitoreo", "procesos"]

respuesta: "monitoreo"
tipo: mc
opciones_explicitas: ["monitoreo", "repaso", "memorización", "atención"]

enunciado: "La capacidad de supervisar activamente si estamos comprendiendo lo que leemos o si nos hemos perdido en un párrafo, se denomina proceso de ___."

explicacion: |
  El monitoreo es la función ejecutiva que nos permite evaluar nuestra comprensión en tiempo real.
```

### 4 — Pasos para la autorregulación
```
metadata:
  materia: "aprendizaje"
  tema: "metacognicion_pasos"
  nivel: "intermedio"
  tags: ["secuencia", "metacognicion"]

respuesta: ["Planificar", "Monitorear", "Evaluar"]
tipo: ordenar
opciones_explicitas: ["Planificar", "Monitorear", "Evaluar", "Memorizar", "Leer"]

enunciado: "Ordena los pasos lógicos de un proceso metacognitivo durante una sesión de estudio:"

explicacion: |
  Primero se establece un objetivo (Planificar), luego se supervisa el progreso (Monitorear) y finalmente se analiza el resultado (Evaluar).
```

### 5 — Verdad o Falso: La ilusión de competencia
```
metadata:
  materia: "aprendizaje"
  tema: "metacognicion_ilusiones"
  nivel: "avanzado"
  tags: ["ilusion_competencia", "metacognicion"]

respuesta: falso
tipo: vf

enunciado: "La 'ilusión de competencia' ocurre cuando un estudiante cree que domina un tema solo porque ha leído el texto varias veces, aunque no sea capaz de explicarlo sin el material."

explicacion: |
  Es un error metacognitivo común donde la familiaridad con el texto se confunde con la comprensión real del contenido.
```