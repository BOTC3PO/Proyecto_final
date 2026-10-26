# Examen jefe — Estratega del Aprendizaje

> Logro #956. Dominaste la metacognición y las técnicas de estudio, el repaso espaciado y la recuperación. Pool agregado de los `cuestionario.md` ya validados de sus 2 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **50 preguntas totales** en 2/2 secciones.

---

## Sección: metacognicion-saber-que-se-y-que-no-se (25 preguntas)

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

```
metadata:
  materia: "aprendizaje"
  tema: "metacognicion_saber_que_se_y_que_no_se"
  nivel: "intermedio"
  tags: ["componentes", "regulacion"]

tipo: completar
respuestas_validas:
  - "regulación"

respuesta: "regulación"

enunciado: "La metacognición se compone de dos dimensiones principales: el conocimiento (saber qué sabemos y cómo aprendemos) y la _______ (capacidad de dirigir y ajustar ese aprendizaje)."

explicacion: |
  El conocimiento permite identificar nuestras capacidades, mientras que la regulación nos permite aplicar estrategias para mejorar el desempeño.
```

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

respuesta: "monitoreo"

enunciado: "En el ciclo metacognitivo, el paso de '{escenarios[idx][0]}' corresponde a la fase de ___."

pasos:
  - "1. Identificar la situación (Monitoreo)"
  - "2. Planificar la acción (Control)"
  - "3. Ejecutar el cambio (Ajuste)"

explicacion: |
  El ciclo metacognitivo implica: 1. Monitorear (detectar), 2. Controlar (planificar la respuesta) y 3. Ajustar (ejecutar la estrategia). El ejemplo mostrado corresponde a la fase de monitoreo, la detección inicial del problema.
```

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

```
metadata:
  materia: "aprendizaje"
  tema: "metacognicion_saberes"
  nivel: "avanzado"
  tags: ["tecnicas", "evaluacion"]

variables:
  caso_a: "El estudiante escribe todo lo que recuerda sobre la fotosíntesis sin mirar el libro"
  caso_b: "El estudiante subraya con colores las partes más importantes del texto"

respuesta: caso_a
tipo: mc
opciones_explicitas: [caso_a, caso_b]

enunciado: "Un estudiante decide aplicar la técnica de 'recuperación activa' (active recall) para verificar qué sabe realmente. ¿Cuál de estas acciones describe mejor este proceso metacognitivo?"

explicacion: |
  La recuperación activa obliga al cerebro a buscar la información sin ayuda externa, lo que revela de inmediato si el conocimiento es sólido o si solo hay una ilusión de saber por haber leído el texto.
```

```
metadata:
  materia: "aprendizaje"
  tema: "metacognicion_saberes"
  nivel: "intermedio"
  tags: ["error", "aprendizaje"]

respuesta: "Teoría"
tipo: completar
respuestas_validas:
  - "Teoría"

enunciado: "Si un estudiante puede definir un concepto con precisión, pero al enfrentar un ejercicio práctico no logra resolverlo, su diagnóstico metacognitivo indica que posee conocimiento de tipo ___."

explicacion: |
  Es fundamental distinguir entre el conocimiento declarativo (saber qué es algo) y el conocimiento procedimental (saber cómo usarlo). Saber la teoría no garantiza la capacidad de aplicación.
```

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

```
metadata:
  materia: "aprendizaje"
  tema: "componentes_metacognicion"
  nivel: "intermedio"
  tags: ["monitoreo", "control"]

respuesta: "monitoreo"
tipo: mc
opciones_explicitas: ["monitoreo", "control"]

enunciado: "Cuando un estudiante detecta que su nivel de comprensión ha bajado durante una sesión de estudio, está ejecutando la fase de _________."

explicacion: |
  El proceso de supervisar el propio aprendizaje se llama monitoreo. El proceso de actuar sobre esa información para corregir el rumbo es el control. En este caso, el acto de 'notar' es monitoreo.
```

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

```
metadata:
  materia: "aprendizaje"
  tema: "brecha_conocimiento"
  nivel: "intermedio"
  tags: ["autoevaluacion", "estrategia"]

respuesta: "identificar"
tipo: "completar"
respuestas_validas:
  - "identificar"

enunciado: "La metacognición permite al estudiante: 1. __________ lo que no sabe, 2. estimar el tiempo necesario para aprenderlo y 3. evaluar la efectividad de sus técnicas."

explicacion: |
  Estas tres fases (identificación, estimación y evaluación) son pilares para transformar el conocimiento pasivo en un aprendizaje activo y eficiente.
```

```
metadata:
  materia: "aprendizaje"
  tema: "metacognicion_autoevaluacion"
  nivel: "basico"
  tags: ["estudio", "metacognicion"]

variables:
  casos: ["Juan revisó sus notas pero no puede explicar el concepto de fotosíntesis sin leer el libro", "Ana leyó todo el capítulo y puede explicar cada concepto con sus propias palabras"]
  resultados: [verdadero, falso]
  idx: uno_de([0, 1])

enunciado: "Analiza el caso: {casos[idx]}. ¿Es este un ejemplo de una autoevaluación metacognitiva exitosa donde el estudiante reconoce su falta de conocimiento?"

respuesta: resultados[idx]
tipo: vf
explicacion: |
  La metacognición implica reconocer los límites del propio conocimiento. El caso de Juan es una autoevaluación exitosa: al intentar explicar sin apoyo, descubre que no domina el tema. El caso de Ana no aplica: ella sí puede explicar todo correctamente, así que no hay una laguna de conocimiento que reconocer.
```

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

## Sección: tecnicas-de-estudio-repaso-espaciado-recuperacion (25 preguntas)

```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "basico"
  tags: ["repaso_espaciado", "eficiencia"]

respuesta: "repaso_espaciado"
tipo: mc
opciones_explicitas: ["repaso_espaciado", "atiborramiento", "relectura_pasiva"]

enunciado: "La técnica que consiste en distribuir las sesiones de estudio en intervalos de tiempo crecientes para combatir la curva del olvido se denomina ___."

explicacion: |
  El repaso espaciado (spaced repetition) aprovecha el efecto de espaciamiento para fortalecer la memoria a largo plazo, evitando la saturación de información en una sola sesión.
```

```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "basico"
  tags: ["recuperacion", "active_recall"]

respuesta: verdadero
tipo: vf

enunciado: "La práctica de recuperación (active recall) implica intentar recordar la información de un tema sin mirar los apuntes, en lugar de simplemente releer el texto."

explicacion: |
  La relectura es una actividad pasiva que genera una falsa sensación de fluidez, mientras que la recuperación activa obliga al cerebro a realizar el esfuerzo de reconstruir la información, consolidando la memoria.
```

```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "intermedio"
  tags: ["ordenar", "procesos"]

respuesta_orden: ["codificación", "recuperación", "consolidación"]
tipo: ordenar
opciones_explicitas: ["codificación", "recuperación", "consolidación"]

enunciado: "Ordena cronológicamente las etapas del proceso de memoria: primero se recibe la información (___), luego se intenta evocar de la memoria (___) y finalmente se estabiliza el rastro mnémico (___)."

explicacion: |
  El proceso estándar implica la codificación de la entrada, el esfuerzo de recuperación (esencial para el aprendizaje activo) y la consolidación a largo plazo.
```

```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "basico"
  tags: ["curva_del_olvido", "memoria"]

respuesta: "curva del olvido"
tipo: mc
opciones_explicitas: ["curva del olvido", "efecto de espaciamiento", "relectura", "ilusión de competencia"]

enunciado: "Según la psicología cognitiva, si estudias todo el contenido justo antes del examen, te enfrentas principalmente a la ___."

explicacion: |
  La curva del olvido muestra cómo la información se pierde rápidamente si no se repasa. El repaso espaciado ayuda a mitigar este efecto.
```

```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "intermedio"
  tags: ["terminologia", "metacognicion"]

respuesta: "falsa"
tipo: completar
respuestas_validas:
  - "falsa"
  - "ilusoria"
  - "engañosa"

enunciado: "Si un estudiante solo utiliza la técnica de relectura pasiva para estudiar, su percepción de dominio sobre la materia es ___."

explicacion: |
  La relectura genera una 'ilusión de competencia': el estudiante reconoce la información al verla, pero no es capaz de generarla desde cero sin el apoyo visual.
```

```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "basico"
  tags: ["recuperacion", "testeo"]

respuesta: "recuperar"
tipo: "mc"
opciones_explicitas: ["releer", "recuperar", "subrayar", "resumir"]

enunciado: "Si un estudiante, en lugar de volver a leer sus notas una y otra vez, intenta recordar la información sin mirar el libro, está utilizando la técnica de ___."

explicacion: |
  La práctica de recuperación (retrieval practice) consiste en forzar al cerebro a extraer la información de la memoria, lo cual fortalece las huellas de memoria mucho más que la simple relectura pasiva.
```

```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "intermedio"
  tags: ["espaciado", "eficiencia"]

respuesta: "espaciado"
tipo: "mc"
opciones_explicitas: ["atiborramiento", "espaciado"]

enunciado: "Un estudiante decide estudiar para su examen de medicina distribuyendo las sesiones en intervalos de tiempo cada vez más largos. Esta estrategia es un ejemplo de:"

explicacion: |
  El repaso espaciado (spaced repetition) aprovecha la curva del olvido para repasar la información justo antes de que se pierda, optimizando la retención a largo plazo.
```

```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "basico"
  tags: ["relectura", "eficiencia"]

respuesta: falso
tipo: "vf"

enunciado: "La relectura pasiva de un texto es una de las técnicas más efectivas para garantizar la retención a largo plazo de conceptos complejos."

explicacion: |
  Falso. La relectura genera una "ilusión de competencia" donde el estudiante siente que sabe el tema porque le resulta familiar, pero no ha entrenado la capacidad de recuperar la información por sí mismo.
```

```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

respuesta_orden: ["Estudiar el contenido", "Realizar un test de autoevaluación", "Revisar errores y reforzar puntos débiles", "Programar un nuevo repaso para dentro de 3 días"]
tipo: ordenar
opciones_explicitas: ["Estudiar el contenido", "Realizar un test de autoevaluación", "Revisar errores y reforzar puntos débiles", "Programar un nuevo repaso para dentro de 3 días"]

enunciado: "Ordena los pasos para aplicar correctamente la combinación de práctica de recuperación y repaso espaciado:"

explicacion: |
  Un ciclo efectivo comienza con la adquisición de información, seguida de un esfuerzo de recuperación (test), la corrección de errores y, finalmente, la programación de un nuevo encuentro para combatir la curva del olvido.
```

```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "intermedio"
  tags: ["espaciado", "curva_olvido"]

respuestas_validas:
  - "intervalos"
  - "espaciados"
respuesta: "intervalos"
tipo: "completar"

enunciado: "Para que el repaso espaciado sea efectivo, la información debe ser repasada en ___ de tiempo cada vez mayores."

explicacion: |
  Al aumentar los intervalos entre repasos, obligamos al cerebro a realizar un esfuerzo mayor de recuperación, lo que consolida la memoria de manera más robusta que si los repasos fueran constantes y muy cercanos.
```

```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "basico"
  tags: ["repaso", "relectura", "eficiencia"]

tipo: mc
opciones_explicitas: ["Relectura pasiva", "Práctica de recuperación", "Subrayado intensivo", "Lectura rápida"]

enunciado: "Si un estudiante lee sus apuntes una y otra vez con el objetivo de memorizar, está cometiendo el error de confundir la comprensión con la ___."

respuesta: "Relectura pasiva"

explicacion: |
  La relectura pasiva genera una "ilusión de competencia": crees que sabes el tema porque te resulta familiar al leerlo, pero no has entrenado la capacidad de extraer la información de tu memoria.
```

```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "intermedio"
  tags: ["recuperacion", "testeo", "memoria"]

tipo: vf

enunciado: "La práctica de recuperación (testearse a uno mismo) es menos efectiva que la relectura porque genera mayor fatiga cognitiva durante el estudio."

respuesta: falso

explicacion: |
  Es falso. Aunque la práctica de recuperación es más difícil y cansa más (esfuerzo cognitivo), es precisamente ese esfuerzo el que fortalece la huella de memoria y garantiza un aprendizaje profundo.
```

```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "basico"
  tags: ["espaciado", "atencion", "curva_del_olvido"]

tipo: mc
opciones_explicitas: ["Cramming", "Repaso espaciado"]

enunciado: "Para combatir la curva del olvido, la técnica más efectiva es el ___."

respuesta: "Repaso espaciado"

explicacion: |
  El repaso espaciado aprovecha los periodos de olvido para re-activar la información, lo que consolida la memoria a largo plazo, a diferencia del cramming que solo sirve para la memoria de corto plazo.
```

```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "intermedio"
  tags: ["proceso", "metodologia"]

tipo: ordenar
opciones_explicitas: ["Estudio inicial del material", "Práctica de recuperación (testeo)", "Revisión de errores y corrección"]

enunciado: "Ordena los pasos de un ciclo de aprendizaje basado en la recuperación activa para maximizar la retención:"

respuesta_orden: ["Estudio inicial del material", "Práctica de recuperación (testeo)", "Revisión de errores y corrección"]

explicacion: |
  Primero debes tener una base de conocimiento, luego debes forzar al cerebro a recuperar esa información sin mirar (testeo) y finalmente debes corregir lo que fallaste para cerrar la brecha de conocimiento.
```

```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "avanzado"
  tags: ["metacognicion", "esfuerzo", "eficiencia"]

tipo: completar

enunciado: "Cuando una técnica de estudio se siente demasiado fácil y fluida, es probable que no estés realizando una ___ efectiva."

respuestas_validas:
  - "práctica de recuperación"
respuesta: "práctica de recuperación"

explicacion: |
  El aprendizaje óptimo ocurre en el "desafío deseable". Si el estudio es demasiado fluido (como leer algo que ya sabes), no hay esfuerzo de recuperación y, por lo tanto, no hay consolidación real.
```

```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "basico"
  tags: ["repaso_espaciado", "eficiencia"]

tipo: mc
opciones_explicitas: ["El repaso masivo favorece la retención a largo plazo", "El repaso espaciado distribuye el estudio en el tiempo para mejorar la retención", "El repaso masivo es más eficiente para exámenes de larga duración", "No hay diferencia significativa entre ambos"]

respuesta: "El repaso espaciado distribuye el estudio en el tiempo para mejorar la retención"

enunciado: "¿Cuál es la principal diferencia entre el repaso espaciado y el repaso masivo (cramming)?"

explicacion: |
  El repaso espaciado aprovecha el efecto de espaciamiento, distribuyendo las sesiones de estudio para consolidar la memoria a largo plazo, mientras que el repaso masivo solo sirve para la memoria a corto plazo.
```

```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "intermedio"
  tags: ["recuperacion", "relectura"]

tipo: vf

enunciado: "La práctica de recuperación (active recall) es más efectiva que la relectura pasiva porque obliga al cerebro a reconstruir la información sin tenerla presente."

respuesta: verdadero

explicacion: |
  La relectura crea una "ilusión de competencia" donde el estudiante cree que sabe el tema porque le resulta familiar, pero la práctica de recuperación fortalece las rutas de acceso a la información en la memoria.
```

```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "intermedio"
  tags: ["metacognicion", "procesos"]

respuesta: "recuperación"
tipo: completar
respuestas_validas:
  - "recuperación"
  - "recuperacion"

enunciado: "Si el estudio pasivo se asocia con la relectura, el estudio activo se asocia con la ___."

explicacion: |
  La clave del aprendizaje es pasar de procesos de reconocimiento (relectura) a procesos de producción (recuperación).
```

```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "avanzado"
  tags: ["metodologia", "orden"]

tipo: ordenar
opciones_explicitas: ["Estudio de nuevo contenido", "Práctica de recuperación (test)", "Revisión de errores y retroalimentación"]

respuesta_orden: ["Estudio de nuevo contenido", "Práctica de recuperación (test)", "Revisión de errores y retroalimentación"]

enunciado: "Ordena los pasos lógicos para aplicar una técnica de recuperación efectiva sobre un tema nuevo:"

explicacion: |
  Primero se adquiere la información, luego se intenta extraer de la memoria sin mirar el material, y finalmente se corrigen las lagunas detectadas.
```

```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "basico"
  tags: ["curva_del_olvido", "espaciado"]

tipo: mc
opciones_explicitas: ["Aumentar la intensidad de una sola sesión", "Aumentar el intervalo entre sesiones", "Leer el mismo texto varias veces seguidas", "Subrayar todo el texto"]

respuesta: "Aumentar el intervalo entre sesiones"

enunciado: "Para combatir la curva del olvido mediante el repaso espaciado, se debe:"

explicacion: |
  El espaciamiento consiste en aumentar el tiempo entre cada sesión de repaso, permitiendo que el olvido ocurra parcialmente para que el esfuerzo de recuperación sea mayor y más duradero.
```

```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "basico"
  tags: ["repaso_espaciado", "eficiencia"]

variables:
  datos: [["Estudiar 10 horas seguidas un domingo", "releer"], ["Estudiar 1 hora cada día durante 10 días", "repaso_espaciado"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["releer", "repaso_espaciado"]

enunciado: "Si un estudiante decide aplicar la técnica de {datos[idx][0]}, ¿qué estrategia de distribución temporal está utilizando?"

explicacion: |
  El repaso espaciado consiste en distribuir las sesiones de estudio en el tiempo para combatir la curva del olvido, a diferencia del 'cramming' o estudio intensivo de último momento.
```

```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "intermedio"
  tags: ["recuperacion_activa", "metacognicion"]

variables:
  acciones: ["leer un capítulo tres veces seguidas", "hacerse preguntas sin mirar el libro"]
  es_recuperacion_activa: [falso, verdadero]
  idx: uno_de([0, 1])

respuesta: es_recuperacion_activa[idx]
tipo: vf
enunciado: "Un estudiante decide aplicar {acciones[idx]}. ¿Esta acción es un ejemplo de práctica de recuperación activa?"

explicacion: |
  La lectura pasiva suele generar una 'ilusión de competencia' o falsa sensación de dominio, mientras que la recuperación activa obliga al cerebro a buscar la información, fortaleciendo la memoria.
```

```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "intermedio"
  tags: ["recuperacion_activa", "procesamiento"]

respuesta_orden: ["Identificar información clave", "Intentar recordar sin mirar", "Verificar con el texto", "Corregir errores"]
tipo: ordenar
opciones_explicitas: ["Identificar información clave", "Intentar recordar sin mirar", "Verificar con el texto", "Corregir errores"]

enunciado: "Ordena los pasos lógicos para realizar una sesión efectiva de práctica de recuperación (active recall):"

explicacion: |
  Primero se debe procesar la información, luego intentar evocarla de la memoria (el paso crítico), verificar qué se olvidó y finalmente corregir.
```

```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "avanzado"
  tags: ["dificultad_deseable", "eficiencia"]

variables:
  sensaciones: ["fácil, sin esfuerzo mental", "desafiante, que exige esfuerzo mental"]
  resultados: ["baja retención", "alta retención"]
  idx: uno_de([0, 1])

respuesta: resultados[idx]
respuestas_validas:
  - resultados[0]
  - resultados[1]
tipo: completar

enunciado: "Si una técnica de estudio se siente {sensaciones[idx]}, el resultado esperado en la memoria a largo plazo es una ___."

explicacion: |
  El concepto de 'dificultad deseable' sugiere que cuanto más esfuerzo cognitivo requiere el proceso de recuperación, más fuerte es la huella de memoria a largo plazo.
```

```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "basico"
  tags: ["comparacion", "efectividad"]

variables:
  datos: [["Subrayar el libro repetidamente", "pasivo"], ["Realizar un test de autoevaluación", "activo"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["pasivo", "activo"]

enunciado: "El método de {datos[idx][0]} se clasifica como un proceso de aprendizaje ___."

explicacion: |
  La práctica de recuperación (como los tests) es un proceso activo que estimula la recuperación de la información, mientras que subrayar es una actividad mayormente pasiva.
```

