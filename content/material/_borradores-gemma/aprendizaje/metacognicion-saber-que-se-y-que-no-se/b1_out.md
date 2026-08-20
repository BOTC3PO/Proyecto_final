### 1 — Definición de Metacognición
```
metadata:
  materia: "aprendizaje"
  tema: "metacognicion_saber_que_se_y_que_no_se"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

tipo: mc
opciones_explicitas: ["El proceso de controlar y regular los procesos cognitivos propios.", "La capacidad de memorizar datos de forma inmediata.", "El estudio de cómo aprenden los demás en grupo.", "La habilidad de leer más rápido que el promedio."]

respuesta: "El proceso de controlar y regular los procesos cognitivos propios."

enunciado: "La metacognición se define fundamentalmente como _______."

explicacion: |
  La metacognición es el conocimiento y control que una persona tiene sobre sus propios procesos de pensamiento y aprendizaje.
```

### 2 — El conocimiento declarativo
```
metadata:
  materia: "aprendizaje"
  tema: "metacognicion_saber_que_se_y_que_no_se"
  nivel: "intermedio"
  tags: ["conocimiento_declarativo", "saberes"]

tipo: vf
respuesta: verdadero

enunciado: "El conocimiento declarativo en el contexto metacognitivo se refiere a la capacidad de identificar y nombrar hechos, conceptos o procedimientos que ya hemos dominado."

explicacion: |
  Saber "qué" sabemos (datos, conceptos, hechos) es la base del conocimiento declarativo.
```

### 3 — Componentes de la metacognición
```
metadata:
  materia: "aprendizaje"
  tema: "metacognicion_saber_que_se_y_que_no_se"
  nivel: "intermedio"
  tags: ["componentes", "regulacion"]

tipo: completar
respuestas_validas: ["conocimiento", "regulación"]

respuesta: ["conocimiento", "regulación"][0]

enunciado: "La metacognición se compone de dos dimensiones principales: el _______ (saber qué sabemos y cómo aprendemos) y la _______ (capacidad de dirigir y ajustar ese aprendizaje)."

explicacion: |
  El conocimiento permite identificar nuestras capacidades, mientras que la regulación nos permite aplicar estrategias para mejorar el desempeño.
```

### 4 — Identificación de lagunas
```
metadata:
  materia: "aprendizaje"
  tema: "metacognicion_saber_que_se_y_que_no_se"
  nivel: "basico"
  tags: ["autoevaluacion", "eficiencia"]

tipo: mc
opciones_explicitas: ["Saber qué no sé es esencial para la eficiencia del estudio.", "Saber qué no sé es una pérdida de tiempo.", "Solo es importante saber lo que ya sé.", "La metacognición no tiene relación con la eficiencia."]

respuesta: "Saber qué no sé es esencial para la eficiencia del estudio."

enunciado: "Desde una perspectiva de eficiencia en el estudio, ¿cuál es la importancia de reconocer lo que NO sabemos?"

explicacion: |
  Identificar las lagunas de conocimiento permite dirigir el esfuerzo hacia lo que realmente se necesita aprender, evitando el repaso innecesario de lo que ya se domina.
```

### 5 — El proceso de monitoreo
```
metadata:
  materia: "aprendizaje"
  tema: "metacognicion_saber_que_se_y_que_no_se"
  nivel: "avanzado"
  tags: ["monitoreo", "evaluacion"]

variables:
  escenarios: [
    ["Reconozco que no entiendo este párrafo", "Decido volver a leerlo más despacio", "Ajusto mi estrategia de estudio"],
    ["Detecto un error en mi ejercicio", "Busco una explicación alternativa", "Corrijo mi procedimiento"]
  ]
  idx: uno_de([0, 1])

tipo: completar
respuestas_validas: ["monitoreo", "control", "ajuste"]

respuesta: ["monitoreo", "control", "ajuste"][0]

enunciado: "En un ciclo metacognitivo, el paso de identificar un problema es el {escenarios[idx][0]}, el paso de decidir una acción es el {escenarios[idx][1]} y la ejecución final es el {escenarios[idx][2]}."

pasos:
  - "1. Identificar la situación (Monitoreo)"
  - "2. Planificar la acción (Control)"
  - "3. Ejecutar el cambio (Ajuste)"

explicacion: |
  El ciclo metacognitivo implica: 1. Monitorear (detectar), 2. Controlar (planificar la respuesta) y 3. Ajustar (ejecutar la estrategia).
```