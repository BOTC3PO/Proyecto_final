# Aprendizaje — Metacognicion saber que se y que no se (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

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
respuestas_validas:
  - "conocimiento"
  - "regulación"

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
  escenarios: [["Reconozco que no entiendo este párrafo", "Decido volver a leerlo más despacio", "Ajusto mi estrategia de estudio"], ["Detecto un error en mi ejercicio", "Busco una explicación alternativa", "Corrijo mi procedimiento"]]
  idx: uno_de([0, 1])

tipo: completar
respuestas_validas:
  - "monitoreo"
  - "control"
  - "ajuste"

respuesta: ["monitoreo", "control", "ajuste"][0]

enunciado: "En un ciclo metacognitivo, el paso de identificar un problema es el {escenarios[idx][0]}, el paso de decidir una acción es el {escenarios[idx][1]} y la ejecución final es el {escenarios[idx][2]}."

pasos:
  - "1. Identificar la situación (Monitoreo)"
  - "2. Planificar la acción (Control)"
  - "3. Ejecutar el cambio (Ajuste)"

explicacion: |
  El ciclo metacognitivo implica: 1. Monitorear (detectar), 2. Controlar (planificar la respuesta) y 3. Ajustar (ejecutar la estrategia).
```

### 6 — El efecto de la ilusión de competencia

```
metadata:
  materia: "aprendizaje"
  tema: "metacognicion_saberes"
  nivel: "basico"
  tags: ["metacognicion", "estudio_eficiente"]

respuesta: falso
tipo: vf

enunciado: "Si leo un texto varias veces y reconozco las palabras, esto garantiza que he adquirido el conocimiento y puedo aplicarlo sin errores."

explicacion: |
  Esto se conoce como 'ilusión de competencia'. Reconocer la información al leerla no es lo mismo que ser capaz de recuperarla de la memoria o aplicarla. La metacognición nos ayuda a distinguir entre 'reconocimiento' y 'dominio real'.
```

### 7 — Identificación de lagunas

```
metadata:
  materia: "aprendizaje"
  tema: "metacognicion_saberes"
  nivel: "intermedio"
  tags: ["autoevaluacion", "estrategia"]

variables:
  caso_a: "Juan lee sus apuntes y dice 'ya me lo sé', pero al cerrar el cuaderno no puede explicar el concepto"
  caso_b: "Ana intenta explicar un tema en voz alta y se detiene porque no sabe cómo conectar dos ideas"

respuesta: caso_b
tipo: mc
opciones_explicitas: [caso_a, caso_b]

enunciado: "Un estudiante está aplicando la metacognición para evaluar su conocimiento. ¿Cuál de los siguientes casos representa un ejercicio efectivo de monitoreo de la propia comprensión?"

explicacion: |
  El segundo caso muestra a un estudiante detectando exactamente dónde falla su conocimiento (la conexión entre ideas), lo cual es el primer paso para una reparación del aprendizaje.
```

### 8 — Pasos para el monitoreo efectivo

```
metadata:
  materia: "aprendizaje"
  tema: "metacognicion_saberes"
  nivel: "intermedio"
  tags: ["proceso", "metacognicion"]

respuesta_orden: ["Evaluar", "Identificar", "Planificar"]
tipo: ordenar
opciones_explicitas: ["Planificar", "Evaluar", "Identificar"]

enunciado: "Ordena los pasos lógicos que un estudiante debe seguir para mejorar su estudio basándose en su capacidad metacognitiva:"

explicacion: |
  Primero se debe Evaluar el estado actual (¿qué sé?), luego Identificar la brecha (¿qué me falta?) y finalmente Planificar la acción para cubrir ese vacío.
```

### 9 — La técnica de la hoja en blanco

```
metadata:
  materia: "aprendizaje"
  tema: "metacognicion_saberes"
  nivel: "avanzado"
  tags: ["tecnicas", "evaluacion"]

variables:
  caso: uno_de([["El estudiante escribe todo lo que recuerda sobre la fotosíntesis sin mirar el libro", "Recuperación activa"], ["El estudiante subraya con colores las partes más importantes del texto", "Pasivo/Reconocimiento"]])

respuesta: "caso[0]"
tipo: mc
opciones_explicitas: ["caso[0]", "caso[1]"]

enunciado: "Un estudiante decide aplicar la técnica de 'recuperación activa' (active recall) para verificar qué sabe realmente. ¿Cuál de estas acciones describe mejor este proceso metacognitivo?"

explicacion: |
  La recuperación activa obliga al cerebro a buscar la información sin ayuda externa, lo que revela de inmediato si el conocimiento es sólido o si solo hay una ilusión de saber por haber leído el texto.
```

### 10 — El diagnóstico del error

```
metadata:
  materia: "aprendizaje"
  tema: "metacognicion_saberes"
  nivel: "intermedio"
  tags: ["error", "aprendizaje"]

variables:
  resultado: uno_de([["El estudiante sabe el concepto pero no sabe aplicarlo a un problema", "Teoría"], ["El estudiante no recuerda ni el nombre del concepto", "Falta de memoria"]])

respuesta: "resultado[0]"
tipo: completar
respuestas_validas:
  - "resultado[0]"
  - "resultado[1]"

enunciado: "Si un estudiante puede definir un concepto con precisión, pero al enfrentar un ejercicio práctico no logra resolverlo, su diagnóstico metacognitivo indica que posee conocimiento de tipo ___."

explicacion: |
  Es fundamental distinguir entre el conocimiento declarativo (saber qué es algo) y el conocimiento procedimental (saber cómo usarlo). Saber la teoría no garantiza la capacidad de aplicación.
```

### 11 — El espejismo de la fluidez

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

### 12 — Monitoreo vs. Control

```
metadata:
  materia: "aprendizaje"
  tema: "componentes_metacognicion"
  nivel: "intermedio"
  tags: ["monitoreo", "control"]

variables:
  escenario: uno_de([["Un estudiante nota que se distrajo al leer un párrafo.", "monitoreo"], ["Un estudiante decide cambiar de técnica porque no entiende el tema.", "control"], ["Un estudiante se da cuenta de que no puede explicar el concepto en voz alta.", "monitoreo"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["monitoreo", "control"]

enunciado: "Cuando un estudiante detecta que su nivel de comprensión ha bajado durante una sesión de estudio, está ejecutando la fase de _________."

explicacion: |
  El proceso de supervisar el propio aprendizaje se llama monitoreo. El proceso de actuar sobre esa información para corregir el rumbo es el control. En este caso, el acto de 'notar' es monitoreo.
```

### 13 — El error de la lectura pasiva

```
metadata:
  materia: "aprendizaje"
  tema: "estrategias_metacognitivas"
  nivel: "intermedio"
  tags: ["estrategias", "evaluacion"]

respuesta: "autoexplicacion"
tipo: completar
respuestas_validas:
  - "autoexplicacion"
  - "relectura"

enunciado: "Para evitar la falsa sensación de saber, en lugar de simplemente releer un texto, es más efectivo utilizar la técnica de la _________, donde intentas explicar el concepto con tus propias palabras sin mirar el libro."

explicacion: |
  La relectura es pasiva y fomenta la ilusión de competencia. La autoexplicación (o el uso de tests de autoevaluación) obliga al cerebro a recuperar la información, revelando lo que realmente se sabe y lo que no.
```

### 14 — La jerarquía del conocimiento

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

### 15 — El ciclo del aprendizaje efectivo

```
metadata:
  materia: "aprendizaje"
  tema: "ciclo_metacognitivo"
  nivel: "intermedio"
  tags: ["ordenar", "proceso"]

respuesta_orden: ["planificar", "monitorear", "evaluar"]
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

### 16 — Metacognición vs Conocimiento

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

### 17 — El monitoreo del aprendizaje

```
metadata:
  materia: "aprendizaje"
  tema: "monitoreo_metacognitivo"
  nivel: "intermedio"
  tags: ["monitoreo", "evaluacion_propia"]

variables:
  escenario: uno_de([["Un estudiante lee un texto y nota que no entiende el tercer párrafo.", "monitoreo"], ["Un estudiante decide usar flashcards porque sabe que le cuesta memorizar fechas.", "planificación"], ["Un estudiante revisa sus errores tras un examen para ver qué falló.", "evaluación"]])

respuesta: escenario[1]
tipo: completar
respuestas_validas:
  - "monitoreo"
  - "planificación"
  - "evaluación"

enunciado: "En el escenario: '{escenario[0]}', el estudiante está realizando una acción de __________."

pasos:
  - "Identificar si el estudiante está procesando información (cognición) o evaluando su propio proceso (metacognición)."

explicacion: |
  El acto de notar una dificultad durante la lectura es un proceso de monitoreo metacognitivo.
```

### 18 — Componentes de la metacognición

```
metadata:
  materia: "aprendizaje"
  tema: "componentes_metacognicion"
  nivel: "intermedio"
  tags: ["conocimiento_condicional", "regulación"]

respuesta_orden: ["Conocimiento", "Regulación"]
tipo: ordenar
opciones_explicitas: ["Conocimiento", "Regulación"]

enunciado: "Para que la metacognición sea efectiva, se requiere un ciclo que comience con el conocimiento sobre la tarea y termine con la acción correctiva. Ordena estos componentes según el flujo lógico de la regulación: primero el ___ de la tarea y luego la ___ del proceso."

explicacion: |
  El proceso metacognitivo implica primero saber qué se necesita (conocimiento) y luego aplicar estrategias para controlar el aprendizaje (regulación).
```

### 19 — Diferencia clave: Saber vs. Saber que se sabe

```
metadata:
  materia: "aprendizaje"
  tema: "distincion_conceptos"
  nivel: "avanzado"
  tags: ["autocontrol", "eficiencia"]

respuesta: falso
tipo: vf

enunciado: "Tener un alto nivel de conocimientos sobre un tema (saber mucho de historia) garantiza automáticamente una alta capacidad metacognitiva (saber cómo estudiar historia)."

explicacion: |
  Falso. Se puede ser experto en un tema pero carecer de las estrategias para monitorear el propio aprendizaje o detectar errores en el proceso de estudio.
```

### 20 — La brecha del conocimiento

```
metadata:
  materia: "aprendizaje"
  tema: "brecha_conocimiento"
  nivel: "intermedio"
  tags: ["autoevaluacion", "estrategia"]

variables:
  caso: uno_de([["El estudiante sabe que no entiende el concepto de fotosíntesis.", "identificar"], ["El estudiante sabe que necesita 20 minutos para leer el capítulo.", "estimar"], ["El estudiante sabe que la técnica de subrayado no le funciona.", "evaluar"]])

respuesta: ["identificar", "estimar", "evaluar"]
tipo: "completar"
respuestas_validas:
  - "identificar"
  - "estimar"
  - "evaluar"

enunciado: "La metacognición permite al estudiante: 1. __________ lo que no sabe, 2. __________ el tiempo necesario para aprenderlo y 3. __________ la efectividad de sus técnicas."

explicacion: |
  Estas tres fases (identificación, estimación y evaluación) son pilares para transformar el conocimiento pasivo en un aprendizaje activo y eficiente.
```

### 21 — El dilema del examen

```
metadata:
  materia: "aprendizaje"
  tema: "metacognicion_autoevaluacion"
  nivel: "basico"
  tags: ["estudio", "metacognicion"]

variables:
  datos: [["Juan revisó sus notas pero no puede explicar el concepto de fotosíntesis sin leer el libro", "falso"], ["Ana leyó todo el capítulo y puede explicar cada concepto con sus propias palabras", "verdadero"]]
  idx: uno_de([0, 1])

enunciado: "Analiza el caso: {datos[idx][0]}. ¿Es este un ejemplo de una autoevaluación metacognitiva exitosa donde el estudiante reconoce su falta de conocimiento?"

respuesta: datos[idx][1]
tipo: completar
explicacion: |
  La metacognición implica reconocer los límites del propio conocimiento. Si el estudiante necesita leer el libro para explicar algo, su autoevaluación fue correcta al detectar que no lo sabe.
```

### 22 — Estrategia de estudio eficiente

```
metadata:
  materia: "aprendizaje"
  tema: "metacognicion_estrategias"
  nivel: "intermedio"
  tags: ["eficiencia", "metacognicion"]

variables:
  datos: [["Revisar solo lo que ya sé", "ineficiente"], ["Identificar lagunas y practicar lo desconocido", "eficiente"]]
  idx: uno_de([0, 1])

enunciado: "Un estudiante aplica la metacognición para mejorar su rendimiento. Si decide: {datos[idx][0]}, su estrategia se considera: ___"

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "ineficiente"
  - "eficiente"

explicacion: |
  Saber qué no se sabe permite dirigir el esfuerzo hacia los puntos débiles, optimizando el tiempo de estudio.
```

### 23 — El proceso de monitoreo

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

### 24 — Pasos para la autorregulación

```
metadata:
  materia: "aprendizaje"
  tema: "metacognicion_pasos"
  nivel: "intermedio"
  tags: ["secuencia", "metacognicion"]

respuesta_orden: ["Planificar", "Monitorear", "Evaluar"]
tipo: ordenar
opciones_explicitas: ["Planificar", "Monitorear", "Evaluar"]

enunciado: "Ordena los pasos lógicos de un proceso metacognitivo durante una sesión de estudio:"

explicacion: |
  Primero se establece un objetivo (Planificar), luego se supervisa el progreso (Monitorear) y finalmente se analiza el resultado (Evaluar).
```

### 25 — Verdad o Falso: La ilusión de competencia

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
