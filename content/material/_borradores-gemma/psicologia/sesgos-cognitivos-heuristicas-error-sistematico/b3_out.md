### 1 — Heurística de Disponibilidad
```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "basico"
  tags: ["heuristica", "disponibilidad", "juicio"]

enunciado: "Cuando una persona sobreestima la probabilidad de que ocurra un evento basándose únicamente en lo reciente o impactante que le resulta el recuerdo de eventos similares, está utilizando la heurística de ___."

respuestas_validas: ["disponibilidad"]
tipo: completar

explicacion: |
  La heurística de disponibilidad es un atajo mental que consiste en juzgar la frecuencia o probabilidad de un evento en función de la facilidad con la que ejemplos vienen a la mente.
```

### 2 — Heurística de Representatividad vs Probabilidad
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

### 3 — El Sesgo de Confirmación es un atajo mental
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

### 4 — Secuencia de un proceso de decisión sesgado
```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "avanzado"
  tags: ["proceso", "sesgo", "ordenar"]

enunciado: "Ordene los pasos que describen cómo el sesgo de anclaje afecta una negociación:"

opciones_explicitas: ["Se recibe un primer dato o cifra (ancla)", "Se ajusta la opinión basándose en ese dato inicial", "Se llega a una conclusión influenciada por el ancla"]
respuesta: ["Se recibe un primer dato o cifra (ancla)", "Se ajusta la opinión basándose en ese dato inicial", "Se llega a una conclusión influenciada por el ancla"]
tipo: ordenar

explicacion: |
  El anclaje ocurre cuando la primera información recibida actúa como un punto de referencia mental, limitando el rango de los ajustes posteriores.
```

### 5 — Efecto de Anclaje en la percepción
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