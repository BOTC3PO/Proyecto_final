# Psicologia — Sesgos cognitivos heuristicas error sistematico (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de Heurística

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "basico"
  tags: ["heuristica", "procesamiento_mental"]

respuesta: "atajo mental"
tipo: completar
respuestas_validas:
  - "atajo mental"
  - "proceso rápido"
  - "regla empírica"

enunciado: "En psicología cognitiva, una heurística se define comúnmente como un ___ que permite simplificar la toma de decisiones."

explicacion: |
  Las heurísticas son estrategias mentales que simplifican el procesamiento de la información, permitiendo tomar decisiones rápidas, aunque no siempre óptimas.
```

### 2 — Heurística de Disponibilidad

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "intermedio"
  tags: ["disponibilidad", "sesgo"]

opciones_explicitas: ["La facilidad con la que ejemplos vienen a la mente", "La similitud entre dos objetos", "La memoria a largo plazo", "La velocidad de reacción"]
respuesta: "La facilidad con la que ejemplos vienen a la mente"
tipo: mc

enunciado: "La heurística de disponibilidad se basa en ___ para estimar la probabilidad de un evento."

explicacion: |
  Si un evento es fácil de recordar (por ser impactante o reciente), tendemos a creer que es más frecuente de lo que realmente es.
```

### 3 — Heurística vs Sesgo

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "basico"
  tags: ["terminologia"]

respuesta: verdadero
tipo: vf

enunciado: "Un sesgo cognitivo es el error sistemático de juicio que surge como consecuencia de la aplicación de una heurística."

explicacion: |
  Correcto. Mientras que la heurística es el mecanismo (el atajo), el sesgo es el error o desviación sistemática que dicho mecanismo puede producir.
```

### 4 — Secuencia del Error de Juicio

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "intermedio"
  tags: ["proceso_cognitivo"]

opciones_explicitas: ["Información ambiental", "Heurística aplicada", "Sesgo cognitivo (error)"]
respuesta_orden: ["Información ambiental", "Heurística aplicada", "Sesgo cognitivo (error)"]
tipo: ordenar

enunciado: "Ordene los elementos según el flujo lógico que explica la producción de un error de juicio sistemático:"

explicacion: |
  El proceso comienza con la información disponible, se procesa mediante un atajo mental (heurística) y, si este es inadecuado para el contexto, resulta en un sesgo.
```

### 5 — Heurística de Representatividad

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "avanzado"
  tags: ["representatividad", "estereotipos"]

variables:
  escenario: uno_de([["Un profesor que parece tímido y le gusta leer", "es probable que sea bibliotecario"], ["Un hombre que viste formal y es muy metódico", "es probable que sea contador"], ["Una persona que ama el arte y los museos", "es probable que sea artista"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: [escenario[0], escenario[1], "Es imposible determinar", "Depende de la estadística real"]

enunciado: "La heurística de representatividad nos lleva a juzgar la probabilidad de un evento basándonos en cuánto se parece a nuestro prototipo mental. Por ejemplo, si {escenario[0]}..."

explicacion: |
  Este sesgo nos hace ignorar las probabilidades base (estadística real) para centrarnos en la similitud con un estereotipo o prototipo.
```

### 6 — Heurística de Disponibilidad

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos_heuristica_disponibilidad"
  nivel: "basico"
  tags: ["heuristica", "disponibilidad", "juicio"]

enunciado: "Juan cree que es mucho más probable morir en un accidente de avión que en uno de coche porque ha visto muchas noticias sobre accidentes aéreos recientemente. Este error de juicio se debe a la heurística de ___."

respuestas_validas:
  - "disponibilidad"
tipo: completar

explicacion: |
  La heurística de disponibilidad consiste en juzgar la probabilidad de un evento basándose en la facilidad con la que ejemplos vienen a la mente. Como los accidentes de avión son muy mediáticos, son más 'disponibles' en la memoria, lo que lleva a una sobreestimación de su frecuencia.
```

### 7 — Heurística de Representatividad

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos_representatividad"
  nivel: "intermedio"
  tags: ["representatividad", "estereotipos"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [["Ana es muy tímida, organizada y le gusta leer en soledad. ¿Es más probable que sea bibliotecaria o agente de seguros?", "bibliotecaria"], ["Pedro es muy extrovertido, le gusta el deporte y las fiestas. ¿Es más probable que sea agente de seguros o contable?", "agente de seguros"]]

enunciado: "Considera el siguiente caso: {escenarios[caso_idx][0]} ¿Cuál es la opción más probable según el juicio intuitivo de la heurística de representatividad?"

opciones_explicitas: ["bibliotecaria", "agente de seguros", "contable", "no se puede determinar"]
respuesta: escenarios[caso_idx][1]
tipo: mc

explicacion: |
  La heurística de representatividad nos hace juzgar la probabilidad de un evento basándonos en cuánto se parece a un estereotipo, ignorando la probabilidad base (la frecuencia real de esas profesiones en la población).
```

### 8 — Sesgo de Confirmación

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos_confirmacion"
  nivel: "basico"
  tags: ["confirmacion", "evidencia"]

enunciado: "Un investigador que cree que una nueva terapia es efectiva solo busca estudios que demuestren su éxito y descarta aquellos que muestran que no funciona. ¿Es este un ejemplo de sesgo de confirmación? ___"

respuesta: verdadero
tipo: vf

explicacion: |
  El sesgo de confirmación es la tendencia a buscar, interpretar y recordar información que confirma nuestras creencias previas, ignorando la evidencia que las contradice.
```

### 9 — Efecto Anclaje

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos_anclaje"
  nivel: "intermedio"
  tags: ["anclaje", "negociacion"]

pasos:
  - "Un vendedor dice que el precio original de un reloj es de $1.000."
  - "Inmediatamente ofrece un 'descuento especial' de $600."
  - "El comprador siente que está haciendo un gran negocio por $400, aunque el valor real sea menor."

enunciado: "En el ejemplo anterior, el primer número mencionado ($1.000) actúa como un ___ que condiciona la percepción del valor final."

respuestas_validas:
  - "ancla"
tipo: completar

explicacion: |
  El efecto anclaje ocurre cuando la mente humana se apoya demasiado en la primera pieza de información ofrecida (el 'ancla') para tomar decisiones posteriores, incluso si esa información es irrelevante.
```

### 10 — Proceso de Toma de Decisión Sesgada

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos_proceso"
  nivel: "avanzado"
  tags: ["heuristica", "error"]

enunciado: "Ordena las etapas de cómo un error sistemático de juicio (sesgo) afecta la toma de decisiones:"

opciones_explicitas: ["Percepción de información incompleta", "Uso de una heurística (atajo mental)", "Error en la estimación de probabilidad", "Toma de una decisión errónea"]
respuesta_orden: ["Percepción de información incompleta", "Uso de una heurística (atajo mental)", "Error en la estimación de probabilidad", "Toma de una decisión errónea"]
tipo: ordenar

explicacion: |
  El proceso comienza con la entrada de información, la cual es procesada rápidamente mediante atajos (heurísticas). Si la heurística no es adecuada para el contexto, produce un error sistemático en la probabilidad estimada, derivando en una decisión sesgada.
```

### 11 — Heurística de Disponibilidad

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "basico"
  tags: ["heuristica", "disponibilidad", "juicio"]

enunciado: "Cuando una persona sobreestima la probabilidad de que ocurra un evento basándose únicamente en lo reciente o impactante que le resulta el recuerdo de eventos similares, está utilizando la heurística de ___."

respuestas_validas:
  - "disponibilidad"
tipo: completar

explicacion: |
  La heurística de disponibilidad es un atajo mental que consiste en juzgar la frecuencia o probabilidad de un evento en función de la facilidad con la que ejemplos vienen a la mente.
```

### 12 — Heurística de Representatividad vs Probabilidad

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "intermedio"
  tags: ["representatividad", "probabilidad", "error"]

enunciado: "Si una persona asume que un individuo es un bibliotecario solo porque encaja perfectamente en el estereotipo de un bibliotecario, ignorando que estadísticamente es más probable que sea un trabajador general de un sector más grande, está cometiendo el error de la heurística de ___."

opciones_explicitas: ["Representatividad", "Disponibilidad", "Anclaje", "Confirmación"]
respuesta: "Representatividad"
tipo: mc

explicacion: |
  La heurística de representatividad nos lleva a juzgar la probabilidad de una categoría basándonos en cuánto se parece un objeto a un prototipo, ignorando la probabilidad base (base rate fallacy).
```

### 13 — El Sesgo de Confirmación es un atajo mental

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "basico"
  tags: ["confirmacion", "verdadera_falsa"]

enunciado: "¿Es el sesgo de confirmación una heurística (un atajo mental) o es un error sistemático de juicio?"

opciones_explicitas: ["Es una heurística", "Es un error sistemático"]
respuesta: "Es un error sistemático"
tipo: mc

explicacion: |
  Aunque están relacionados, las heurísticas son procesos de simplificación para la toma de decisiones rápida, mientras que el sesgo de confirmación es el error sistemático de buscar solo información que respalde nuestras creencias previas.
```

### 14 — Secuencia de un proceso de decisión sesgado

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "avanzado"
  tags: ["proceso", "sesgo", "ordenar"]

enunciado: "Ordene los pasos que describen cómo el sesgo de anclaje afecta una negociación:"

opciones_explicitas: ["Se recibe un primer dato o cifra (ancla)", "Se ajusta la opinión basándose en ese dato inicial", "Se llega a una conclusión influenciada por el ancla"]
respuesta_orden: ["Se recibe un primer dato o cifra (ancla)", "Se ajusta la opinión basándose en ese dato inicial", "Se llega a una conclusión influenciada por el ancla"]
tipo: ordenar

explicacion: |
  El anclaje ocurre cuando la primera información recibida actúa como un punto de referencia mental, limitando el rango de los ajustes posteriores.
```

### 15 — Efecto de Anclaje en la percepción

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "intermedio"
  tags: ["anclaje", "percepcion"]

variables:
  idx: uno_de([0,1])
  datos: [["$100", "bajo"], ["$10", "alto"]]

enunciado: "Si en una subasta el primer precio que se menciona es de {datos[idx][0]}, la percepción del valor de los objetos siguientes se verá afectada hacia un nivel {datos[idx][1]} debido al efecto de anclaje."

respuesta: datos[idx][1]
tipo: completar

explicacion: |
  El anclaje establece un punto de partida mental que condiciona todo el juicio posterior, incluso si el ancla es arbitraria o irrelevante.
```

### 16 — Heurística vs. Algoritmo

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "basico"
  tags: ["heuristica", "algoritmo", "procesamiento"]

enunciado: "Mientras que un algoritmo es un procedimiento paso a paso que garantiza encontrar la solución correcta, una heurística es un ___ que permite tomar decisiones rápidas pero no garantiza la exactitud."

respuestas_validas:
  - "atajo mental"
  - "atajo"

respuesta: "atajo mental"
tipo: completar

explicacion: |
  Las heurísticas son reglas mentales simplificadas (atajos) que facilitan la resolución de problemas de forma rápida, pero al no ser procesos exhaustivos como los algoritmos, pueden conducir a errores sistemáticos o sesgos.
```

### 17 — Disponibilidad vs. Representatividad

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "intermedio"
  tags: ["disponibilidad", "representatividad"]

enunciado: "Si una persona juzga la probabilidad de un evento basándose en qué tan fácilmente le vienen ejemplos a la mente (memoria), está usando la heurística de disponibilidad. Si juzga basándose en cuánto se parece el evento a un prototipo mental, está usando la heurística de ___."

pasos:
  - "Identificar el criterio de juicio: ¿es facilidad de recuerdo o similitud con un modelo?"
  - "Relacionar el criterio con el sesgo correspondiente."

opciones_explicitas: ["disponibilidad", "representatividad"]

respuesta: "representatividad"
tipo: mc

explicacion: |
  La disponibilidad se basa en la facilidad de recuperación de información (memoria), mientras que la representatividad se basa en la comparación con un estereotipo o prototipo.
```

### 18 — Heurística y Sesgo

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "basico"
  tags: ["sesgo", "heuristica"]

enunciado: "¿Es correcto afirmar que todas las heurísticas producen necesariamente un sesgo cognitivo?"

respuesta: falso
tipo: vf

explicacion: |
  Falso. La heurística es el mecanismo (el atajo), mientras que el sesgo es el error sistemático resultante. Una heurística es útil y eficiente en la mayoría de los casos; el sesgo es la desviación que ocurre cuando el atajo falla.
```

### 19 — Secuencia de procesamiento mental

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "intermedio"
  tags: ["procesamiento", "cognicion"]

enunciado: "Ordene el proceso que lleva desde la percepción de un estímulo hasta la aparición de un error sistemático de juicio:"

opciones_explicitas: ["Percepción del estímulo", "Aplicación de una heurística", "Producción de un sesgo cognitivo"]

respuesta_orden: ["Percepción del estímulo", "Aplicación de una heurística", "Producción de un sesgo cognitivo"]
tipo: ordenar

explicacion: |
  El proceso comienza con la entrada de información, sigue con el uso de un atajo mental para procesarla rápidamente (heurística) y puede culminar en un error de juicio si el atajo no es adecuado para la situación (sesgo).
```

### 20 — Anclaje y Ajuste

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "avanzado"
  tags: ["anclaje", "ajuste"]

variables:
  escenario: uno_de(["ancla | ajuste", "base | cálculo", "punto | movimiento"])

enunciado: "En el efecto de anclaje, el primer dato recibido actúa como un ___ sobre el cual se realiza un ___ insuficiente para llegar a la respuesta correcta."

opciones_explicitas: ["ancla | ajuste", "base | cálculo", "punto | movimiento"]

respuesta: "ancla | ajuste"
tipo: mc

explicacion: |
  El efecto de anclaje ocurre cuando la mente se queda 'pegada' a un valor inicial (ancla) y, aunque intenta moverse hacia una cifra más realista, el ajuste que realiza es demasiado pequeño, dejando la respuesta final sesgada hacia el ancla.
```

### 21 — El sesgo de disponibilidad

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "intermedio"
  tags: ["heuristica", "disponibilidad"]

variables:
  datos: [["Se lee una noticia sobre un accidente aéreo", "miedo a volar"], ["Se ve un reporte sobre ataques de tiburón", "miedo a nadar"], ["Se escucha sobre un accidente de coche", "miedo a conducir"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["miedo a volar", "miedo a nadar", "miedo a conducir", "miedo a los terremotos"]

enunciado: "Una persona cree que es muy probable que ocurra un evento catastrófico porque acaba de leer una noticia impactante sobre ello. Este es un ejemplo del sesgo de disponibilidad, donde la persona estima la probabilidad basándose en la facilidad con la que los ejemplos vienen a la mente. En este caso, el miedo es a {datos[idx][0]}."

explicacion: |
  El sesgo de disponibilidad ocurre cuando estimamos la probabilidad de un evento basándonos en qué tan fácilmente recordamos ejemplos similares. La noticia reciente hace que el evento sea más "disponible" en la memoria, distorsionando la percepción del riesgo real.
```

### 22 — Heurística de representatividad

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "intermedio"
  tags: ["representatividad", "estereotipos"]

variables:
  datos: [["Juan es muy ordenado y le gusta leer poesía", "es un bibliotecario"], ["Ana es muy sociable y le gusta bailar", "es una animadora"], ["Luis es muy metódico y usa lentes", "es un profesor"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["es un bibliotecario", "es una animadora", "es un profesor", "es un médico"]

enunciado: "Si se nos dice que {datos[idx][0]}, tendemos a juzgar que la persona pertenece a una profesión específica basándonos en un prototipo mental, ignorando las probabilidades estadísticas. Este error se llama heurística de representatividad."

explicacion: |
  La heurística de representatividad nos lleva a juzgar la probabilidad de un evento basándonos en cuánto se parece a un estereotipo, ignorando la frecuencia base (probabilidad real) de que ese evento ocurra.
```

### 23 — El efecto anclaje

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "basico"
  tags: ["anclaje", "decision"]

variables:
  datos: [["1000", "500"], ["5000", "2500"], ["100", "40"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "500"
  - "2500"
  - "40"

enunciado: "En una negociación, si el vendedor comienza diciendo que el precio es de ${datos[idx][0]}, la primera cifra actúa como un 'ancla' que condiciona la negociación, haciendo que la contraparte termine aceptando un precio cercano a ${datos[idx][1]}."

explicacion: |
  El efecto anclaje es la tendencia humana a confiar demasiado en la primera pieza de información ofrecida (el ancla) al tomar decisiones, incluso si esa información es irrelevante para el valor real.
```

### 24 — Verdad o Falso: Sesgo de confirmación

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "basico"
  tags: ["confirmacion", "creencias"]

respuesta: verdadero
tipo: vf

enunciado: "El sesgo de confirmación es la tendencia a buscar, interpretar y recordar información que confirma nuestras creencias preexistentes, mientras ignoramos la evidencia que las contradice."

explicacion: |
  Correcto. Este sesgo es uno de los más comunes y refuerza nuestras convicciones, dificultando el pensamiento crítico y la objetividad.
```

### 25 — Secuencia de un proceso de juicio erróneo

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "avanzado"
  tags: ["heuristica", "proceso_mental"]

opciones_explicitas: ["Percepción de un estímulo impactante", "Recuperación rápida en la memoria", "Estimación de probabilidad distorsionada", "Error de juicio sistemático"]

respuesta_orden: ["Percepción de un estímulo impactante", "Recuperación rápida en la memoria", "Estimación de probabilidad distorsionada", "Error de juicio sistemático"]
tipo: ordenar

enunciado: "Ordena los pasos que describen cómo una heurística puede derivar en un error de juicio sistemático (como el sesgo de disponibilidad):"

explicacion: |
  El proceso comienza con la percepción de un estímulo (frecuentemente emocional o reciente), seguido de su fácil recuperación en la memoria, lo que lleva a una estimación errónea de la frecuencia y finalmente al error sistemático en el juicio.
```
