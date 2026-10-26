### 1 — El sesgo de disponibilidad
```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "intermedio"
  tags: ["heuristica", "disponibilidad"]

variables:
  escenario: uno_de([["Se lee una noticia sobre un accidente aéreo", "miedo a volar"], ["Se ve un reporte sobre ataques de tiburón", "miedo a nadar"], ["Se escucha sobre un accidente de coche", "miedo a conducir"]])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["miedo a volar", "miedo a nadar", "miedo a conducir", "miedo a los terremotos"]

enunciado: "Una persona cree que es muy probable que ocurra un evento catastrófico porque acaba de leer una noticia impactante sobre ello. Este es un ejemplo del sesgo de disponibilidad, donde la persona estima la probabilidad basándose en la facilidad con la que los ejemplos vienen a la mente. En este caso, el miedo es a {escenario[idx][0]}."

explicacion: |
  El sesgo de disponibilidad ocurre cuando estimamos la probabilidad de un evento basándonos en qué tan fácilmente recordamos ejemplos similares. La noticia reciente hace que el evento sea más "disponible" en la memoria, distorsionando la percepción del riesgo real.
```

### 2 — Heurística de representatividad
```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "intermedio"
  tags: ["representatividad", "estereotipos"]

variables:
  caso: uno_de([["Juan es muy ordenado y le gusta leer poesía", "es un bibliotecario"], ["Ana es muy sociable y le gusta bailar", "es una animadora"], ["Luis es muy metódico y usa lentes", "es un profesor"]])
  idx: uno_de([0,1,2])

respuesta: "es un bibliotecario"
tipo: mc
opciones_explicitas: ["es un bibliotecario", "es un animadora", "es un profesor", "es un médico"]

enunciado: "Si se nos dice que {caso[idx][0]}, tendemos a juzgar que la persona pertenece a una profesión específica basándonos en un prototipo mental, ignorando las probabilidades estadísticas. Este error se llama heurística de representatividad."

explicacion: |
  La heurística de representatividad nos lleva a juzgar la probabilidad de un evento basándonos en cuánto se parece a un estereotipo, ignorando la frecuencia base (probabilidad real) de que ese evento ocurra.
```

### 3 — El efecto anclaje
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
respuestas_validas: ["500", "2500", "40"]

enunciado: "En una negociación, si el vendedor comienza diciendo que el precio es de ${datos[idx][0]}, la primera cifra actúa como un 'ancla' que condiciona la negociación, haciendo que la contraparte termine aceptando un precio cercano a ${datos[idx][1]}."

explicacion: |
  El efecto anclaje es la tendencia humana a confiar demasiado en la primera pieza de información ofrecida (el ancla) al tomar decisiones, incluso si esa información es irrelevante para el valor real.
```

### 4 — Verdad o Falso: Sesgo de confirmación
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

### 5 — Secuencia de un proceso de juicio erróneo
```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "avanzado"
  tags: ["heuristica", "proceso_mental"]

opciones_explicitas: ["Percepción de un estímulo impactante", "Recuperación rápida en la memoria", "Estimación de probabilidad distorsionada", "Error de juicio sistemático"]

respuesta: ["Percepción de un estímulo impactante", "Recuperación rápida en la memoria", "Estimación de probabilidad distorsionada", "Error de juicio sistemático"]
tipo: ordenar

enunciado: "Ordena los pasos que describen cómo una heurística puede derivar en un error de juicio sistemático (como el sesgo de disponibilidad):"

explicacion: |
  El proceso comienza con la percepción de un estímulo (frecuentemente emocional o reciente), seguido de su fácil recuperación en la memoria, lo que lleva a una estimación errónea de la frecuencia y finalmente al error sistemático en el juicio.
```