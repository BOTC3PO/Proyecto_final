### 1 — Heurística vs. Algoritmo
```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "basico"
  tags: ["heuristica", "algoritmo", "procesamiento"]

enunciado: "Mientras que un algoritmo es un procedimiento paso a paso que garantiza encontrar la solución correcta, una heurística es un ___ que permite tomar decisiones rápidas pero no garantiza la exactitud."

respuestas_validas: ["atajo mental", "atajo"]

respuesta: "atajo mental"
tipo: completar

explicacion: |
  Las heurísticas son reglas mentales simplificadas (atajos) que facilitan la resolución de problemas de forma rápida, pero al no ser procesos exhaustivos como los algoritmos, pueden conducir a errores sistemáticos o sesgos.
```

### 2 — Disponibilidad vs. Representatividad
```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "intermedio"
  tags: ["disponibilidad", "representatividad"]

variables:
  idx: uno_de([0, 1])

enunciado: "Si una persona juzga la probabilidad de un evento basándose en qué tan fácilmente le vienen ejemplos a la mente (memoria), está usando la heurística de disponibilidad. Si juzga basándose en cuánto se parece el evento a un prototipo mental, está usando la heurística de ___."

pasos:
  - "Identificar el criterio de juicio: ¿es facilidad de recuerdo o similitud con un modelo?"
  - "Relacionar el criterio con el sesgo correspondiente."

opciones_explicitas: ["disponibilidad", "representatividad"]

respuesta: [["disponibilidad", "representatividad"]][idx][1]
tipo: mc

explicacion: |
  La disponibilidad se basa en la facilidad de recuperación de información (memoria), mientras que la representatividad se basa en la comparación con un estereotipo o prototipo.
```

### 3 — Heurística y Sesgo
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

### 4 — Secuencia de procesamiento mental
```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "intermedio"
  tags: ["procesamiento", "cognicion"]

enunciado: "Ordene el proceso que lleva desde la percepción de un estímulo hasta la aparición de un error sistemático de juicio:"

opciones_explicitas: ["Percepción del estímulo", "Aplicación de una heurística", "Producción de un sesgo cognitivo"]

respuesta: ["Percepción del estímulo", "Aplicación de una heurística", "Producción de un sesgo cognitivo"]
tipo: ordenar

explicacion: |
  El proceso comienza con la entrada de información, sigue con el uso de un atajo mental para procesarla rápidamente (heurística) y puede culminar en un error de juicio si el atajo no es adecuado para la situación (sesgo).
```

### 5 — Anclaje y Ajuste
```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "avanzado"
  tags: ["anclaje", "ajuste"]

variables:
  escenario: uno_de([0, 1])

enunciado: "En el efecto de anclaje, el primer dato recibido actúa como un ___ sobre el cual se realiza un ___ insuficiente para llegar a la respuesta correcta."

opciones_explicitas: ["ancla | ajuste", "base | cálculo", "punto | movimiento"]

respuesta: [["ancla | ajuste", "base | cálculo", "punto | movimiento"]][escenario][0]
tipo: mc

explicacion: |
  El efecto de anclaje ocurre cuando la mente se queda 'pegada' a un valor inicial (ancla) y, aunque intenta moverse hacia una cifra más realista, el ajuste que realiza es demasiado pequeño, dejando la respuesta final sesgada hacia el ancla.
```