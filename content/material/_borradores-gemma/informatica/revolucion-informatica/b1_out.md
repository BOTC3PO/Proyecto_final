### 1 — El origen de la computación moderna
```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["historia", "computadoras"]

respuesta: "ENIAC"
tipo: completar
respuestas_validas: ["ENIAC"]

enunciado: "La primera computadora electrónica de propósito general, utilizada para cálculos balísticos durante la Segunda Guerra Mundial, fue la ___."

explicacion: |
  La ENIAC (Electronic Numerical Integrator and Computer) fue una de las primeras computadoras electrónicas de gran escala, marcando el inicio de la era de la computación moderna.
```

### 2 — Evolución de los componentes
```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["hardware", "transistores"]

variables:
  tecnologia_idx: uno_de([0,1])
  tecnologias: [["tubos de vacío", "transistores"], ["transistores", "microprocesadores"]]
  tecnologia_actual: ["microprocesadores", "circuitos integrados"]

respuesta: tecnologia_idx
tipo: mc
opciones_explicitas: ["tubos de vacío", "transistores", "microprocesadores"]

enunciado: "La transición de la primera a la segunda generación de computadoras se caracterizó por el reemplazo de los {tecnologias[tecnologia_idx]} por una tecnología más pequeña y eficiente."

explicacion: |
  La primera generación usaba tubos de vacío (grandes y calientes), mientras que la segunda generación introdujo el transistor, permitiendo miniaturización y mayor fiabilidad.
```

### 3 — La era de la computación personal
```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["pc", "historia"]

respuesta: "Apple II"
tipo: mc
opciones_explicitas: ["ENIAC", "Altair 8800", "Apple II", "IBM PC"]

enunciado: "¿Cuál de estos dispositivos fue uno de los primeros en popularizar la computación personal masiva a finales de los años 70 y principios de los 80?"

explicacion: |
  El Apple II fue uno de los primeros computadores personales con gráficos a color y capacidad de uso doméstico, impulsando la revolución de la informática personal.
```

### 4 — El orden de los hitos tecnológicos
```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["cronologia", "hitos"]

respuesta: ["Tubos de vacío", "Transistores", "Circuitos Integrados", "Microprocesadores"]
tipo: ordenar
opciones_explicitas: ["Tubos de vacío", "Transistores", "Circuitos Integrados", "Microprocesadores"]

enunciado: "Ordena cronológicamente las tecnologías que permitieron la miniaturización de las computadoras:"

explicacion: |
  La evolución siguió este orden: Tubos de vacío (1ra gen) -> Transistores (2da gen) -> Circuitos Integrados (3ra gen) -> Microprocesadores (4ta gen).
```

### 5 — El impacto de la Ley de Moore
```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "avanzado"
  tags: ["ley_de_moore", "teoria"]

variables:
  valor_doble: 2

respuesta: "exponencial"
tipo: mc
opciones_explicitas: ["lineal", "exponencial", "decreciente", "constante"]

enunciado: "La revolución informática se vio acelerada por la Ley de Moore, la cual predice que el número de transistores en un chip se duplica aproximadamente cada {valor_doble} años, lo que implica un crecimiento de tipo ___."

explicacion: |
  La Ley de Moore describe un crecimiento exponencial de la capacidad de procesamiento, lo que permitió pasar de máquinas que ocupaban habitaciones a dispositivos que caben en un bolsillo.
```