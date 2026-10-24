### 1 — Índice de refracción
```
metadata:
  materia: "fisica"
  tema: "refraccion_indice_de_refraccion"
  nivel: "basico"
  tags: ["optica", "indice_de_refraccion"]

variables:
  n_medio: 1.5

respuesta: n_medio
tipo: mc
opciones_explicitas: ["1.0", "1.5", "2.0", "0.5"]

enunciado: "El índice de refracción de un medio se define como la relación entre la velocidad de la luz en el vacío ($c$) y la velocidad de la luz en dicho medio ($v$). Si la luz viaja en un medio con una velocidad que es exactamente dos tercios de la velocidad de la luz en el vacío, ¿cuál es el índice de refracción?"

explicacion: |
  El índice de refracción $n$ se calcula como $n = c/v$. 
  Si $v = (2/3)c$, entonces $n = c / ((2/3)c) = 3/2 = 1.5$.
```

### 2 — Ley de Snell: Identificación
```
metadata:
  materia: "fisica"
  tema: "ley_de_snell"
  nivel: "basico"
  tags: ["ley_de_snell", "optica"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que si la luz pasa de un medio con índice de refracción $n_1$ a un medio con $n_2$ y $n_2 > n_1$, el rayo de luz se acerca a la normal?"

explicacion: |
  Cuando la luz pasa a un medio más denso ópticamente ($n_2 > n_1$), la velocidad disminuye y el rayo se desvía hacia la normal.
```

### 3 — Cálculo de ángulo de refracción
```
metadata:
  materia: "fisica"
  tema: "ley_de_snell"
  nivel: "intermedio"
  tags: ["ley_de_snell", "calculo"]

variables:
  n1: 1.0
  n2: 1.33
  theta1: 30.0

respuesta: 40.6
tipo: input
tolerancia_abs: 0.1

enunciado: "Un rayo de luz viaja desde el aire ($n_1 = {n1}$) hacia el agua ($n_2 = {n2}$) con un ángulo de incidencia de {theta1}° respecto a la normal. Calcula el ángulo de refracción en el agua."

pasos:
  - "Aplicar la Ley de Snell: $n_1 \cdot \sin(\theta_1) = n_2 \cdot \sin(\theta_2)$"
  - "Despejar $\sin(\theta_2) = (n_1 \cdot \sin(\theta_1)) / n_2$"
  - "Calcular $\theta_2 = \arcsin(\text{resultado})$"

explicacion: |
  Usando la Ley de Snell:
  $1.0 \cdot \sin(30^\circ) = 1.33 \cdot \sin(\theta_2)$
  $0.5 = 1.33 \cdot \sin(\theta_2)$
  $\sin(\theta_2) = 0.5 / 1.33 \approx 0.3759$
  $\theta_2 = \arcsin(0.3759) \approx 40.6^\circ$
```

### 4 — Elementos de la Ley de Snell
```
metadata:
  materia: "fisica"
  tema: "ley_de_snell"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: ["ángulo de incidencia", "ángulo de refracción", "índice de refracción 1", "índice de refracción 2"]
tipo: ordenar

opciones_explicitas: ["ángulo de incidencia", "ángulo de refracción", "índice de refracción 1", "índice de refracción 2"]

enunciado: "Ordena los elementos de la fórmula de la Ley de Snell ($n_1 \cdot \text{sen}(\theta_1) = n_2 \cdot \text{sen}(\theta_2)$) según su aparición en la ecuación, de izquierda a derecha."

explicacion: |
  La ecuación establece la igualdad entre el producto del índice del primer medio por el seno del ángulo de incidencia y el producto del índice del segundo medio por el seno del ángulo de refracción.
```

### 5 — Completar la relación
```
metadata:
  materia: "fisica"
  tema: "ley_de_snell"
  nivel: "intermedio"
  tags: ["completar", "formula"]

respuesta: "n2"
tipo: completar
respuestas_validas: ["n2"]

enunciado: "En la expresión de la Ley de Snell, $n_1 \cdot \sin(\theta_1) = \text{___} \cdot \sin(\theta_2)$, el término desconocido representa el índice de refracción del segundo medio."

explicacion: |
  La Ley de Snell relaciona las propiedades de los dos medios involucrados: $n_1 \sin(\theta_1) = n_2 \sin(\theta_2)$.
```