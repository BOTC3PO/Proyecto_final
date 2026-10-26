### 1 — Definición de Heurística
```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "basico"
  tags: ["heuristica", "procesamiento_mental"]

respuesta: "atajo mental"
tipo: completar
respuestas_validas: ["atajo mental", "proceso rápido", "regla empírica"]

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
respuesta: ["Información ambiental", "Heurística aplicada", "Sesgo cognitivo (error)"]
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
  escenario: uno_de([
    ["Un profesor que parece tímido y le gusta leer", "es probable que sea bibliotecario"],
    ["Un hombre que viste formal y es muy metódico", "es probable que sea contador"],
    ["Una persona que ama el arte y los museos", "es probable que sea artista"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: [escenario[0], escenario[1], "Es imposible determinar", "Depende de la estadística real"]

enunciado: "La heurística de representatividad nos lleva a juzgar la probabilidad de un evento basándonos en cuánto se parece a nuestro prototipo mental. Por ejemplo, si {escenario[0]}..."

explicacion: |
  Este sesgo nos hace ignorar las probabilidades base (estadística real) para centrarnos en la similitud con un estereotipo o prototipo.
```