### 1 — Metacognición vs Conocimiento
```
metadata:
  materia: "aprendizaje"
  tema: "metacognicion_vs_conocimiento"
  nivel: "basico"
  tags: ["metacognicion", "aprendizaje_autonomo"]

respuesta: "metacognición"
tipo: "mc"
opciones_explicitas: ["conocimiento", "metacognición", "cognición", "aprendizaje"]

enunciado: "Mientras que la __________ se refiere al proceso de adquirir información y habilidades, la metacognición se refiere al conocimiento y control sobre ese propio proceso."

explicacion: |
  La cognición es el proceso de procesar información, mientras que la metacognición es el "pensar sobre el pensamiento", es decir, ser consciente de cómo aprendemos.
```

### 2 — El monitoreo del aprendizaje
```
metadata:
  materia: "aprendizaje"
  tema: "monitoreo_metacognitivo"
  nivel: "intermedio"
  tags: ["monitoreo", "evaluacion_propia"]

variables:
  escenario: uno_de([
    ["Un estudiante lee un texto y nota que no entiende el tercer párrafo.", "monitoreo"],
    ["Un estudiante decide usar flashcards porque sabe que le cuesta memorizar fechas.", "planificación"],
    ["Un estudiante revisa sus errores tras un examen para ver qué falló.", "evaluación"]
  ])

respuesta: escenario[1]
tipo: "vf"

enunciado: "En el escenario: '{escenario[0]}', el estudiante está realizando una acción de __________."

pasos:
  - "Identificar si el estudiante está procesando información (cognición) o evaluando su propio proceso (metacognición)."

explicacion: |
  El acto de notar una dificultad durante la lectura es un proceso de monitoreo metacognitivo.
```

### 3 — Componentes de la metacognición
```
metadata:
  materia: "aprendizaje"
  tema: "componentes_metacognicion"
  nivel: "intermedio"
  tags: ["conocimiento_condicional", "regulación"]

respuesta: ["Conocimiento", "Regulación"]
tipo: "ordenar"
opciones_explicitas: ["Conocimiento", "Regulación", "Memoria", "Atención"]

enunciado: "Para que la metacognición sea efectiva, se requiere un ciclo que comience con el conocimiento sobre la tarea y termine con la acción correctiva. Ordena estos componentes según el flujo lógico de la regulación: primero el ___ de la tarea y luego la ___ del proceso."

explicacion: |
  El proceso metacognitivo implica primero saber qué se necesita (conocimiento) y luego aplicar estrategias para controlar el aprendizaje (regulación).
```

### 4 — Diferencia clave: Saber vs. Saber que se sabe
```
metadata:
  materia: "aprendizaje"
  tema: "distincion_conceptos"
  nivel: "avanzado"
  tags: ["autocontrol", "eficiencia"]

respuesta: "falso"
tipo: "vf"

enunciado: "Tener un alto nivel de conocimientos sobre un tema (saber mucho de historia) garantiza automáticamente una alta capacidad metacognitiva (saber cómo estudiar historia)."

explicacion: |
  Falso. Se puede ser experto en un tema pero carecer de las estrategias para monitorear el propio aprendizaje o detectar errores en el proceso de estudio.
```

### 5 — La brecha del conocimiento
```
metadata:
  materia: "aprendizaje"
  tema: "brecha_conocimiento"
  nivel: "intermedio"
  tags: ["autoevaluacion", "estrategia"]

variables:
  caso: uno_de([
    ["El estudiante sabe que no entiende el concepto de fotosíntesis.", "identificar"],
    ["El estudiante sabe que necesita 20 minutos para leer el capítulo.", "estimar"],
    ["El estudiante sabe que la técnica de subrayado no le funciona.", "evaluar"]
  ])

respuesta: ["identificar", "estimar", "evaluar"]
tipo: "completar"
respuestas_validas: ["identificar", "estimar", "evaluar"]

enunciado: "La metacognición permite al estudiante: 1. __________ lo que no sabe, 2. __________ el tiempo necesario para aprenderlo y 3. __________ la efectividad de sus técnicas."

explicacion: |
  Estas tres fases (identificación, estimación y evaluación) son pilares para transformar el conocimiento pasivo en un aprendizaje activo y eficiente.
```