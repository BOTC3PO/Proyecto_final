### 1 — El índice de refracción y la velocidad
```
metadata:
  materia: "fisica"
  tema: "refraccion_indice_ley_snell"
  nivel: "basico"
  tags: ["refraccion", "indice_refraccion", "velocidad_luz"]

respuesta: falso
tipo: vf

enunciado: "Si un rayo de luz pasa de un medio con índice de refracción $n_1 = 1.5$ a un medio con $n_2 = 1.0$, la velocidad de la luz en el segundo medio es menor que en el primero."

explicacion: |
  El índice de refracción se define como $n = c/v$. Por lo tanto, a mayor índice de refracción, menor es la velocidad de la luz en ese medio. Si $n_2 < n_1$, la velocidad en el segundo medio es mayor.
```

### 2 — La confusión del ángulo de refracción
```
metadata:
  materia: "fisica"
  tema: "refraccion_indice_ley_snell"
  nivel: "intermedio"
  tags: ["ley_snell", "angulos", "refraccion"]

variables:
  idx: uno_de([0, 1])
  escenario: uno_de([
    ["n1=1.0, n2=1.5", "se acerca a la normal"],
    ["n1=1.5, n2=1.0", "se aleja de la normal"]
  ])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["se acerca a la normal", "se aleja de la normal"]

enunciado: "Cuando la luz viaja de un medio con índice de refracción $n_1$ a un medio con $n_2$, si $n_1 < n_2$, el rayo refractado ___ la línea normal."

pasos:
  - "Identificar si el índice aumenta o disminuye."
  - "Aplicar la Ley de Snell: $n_1 \cdot \text{sen}(\theta_1) = n_2 \cdot \text{sen}(\theta_2)$."
  - "Si $n_2 > n_1$, entonces $\text{sen}(\theta_2) < \text{sen}(\theta_1)$, por lo que $\theta_2 < \theta_1$."

explicacion: |
  Al pasar a un medio más denso ópticamente ($n_2 > n_1$), la velocidad disminuye y el rayo se desvía hacia la normal para mantener la igualdad en la Ley de Snell.
```

### 3 — Cálculo de la velocidad de la luz en un medio
```
metadata:
  materia: "fisica"
  tema: "refraccion_indice_ley_snell"
  nivel: "intermedio"
  tags: ["velocidad", "calculo", "indice_refraccion"]

variables:
  datos: uno_de([
    [1.33, 2.25e8],
    [1.50, 2.0e8],
    [2.42, 1.24e8]
  ])

respuesta: datos[0][1]
tipo: input
tolerancia_abs: 1e6

enunciado: "Calcula la velocidad de la luz en un medio cuyo índice de refracción es $n = {datos[0][0]}$. (Usa $c = 3.0 \times 10^8$ m/s)."

pasos:
  - "Usa la fórmula $v = c / n$."
  - "Sustituye los valores: $v = 3.0 \times 10^8 / 1.33$."

explicacion: |
  La velocidad en el medio se calcula dividiendo la velocidad en el vacío por el índice de refracción del medio.
```

### 4 — El fenómeno de la Reflexión Total Interna
```
metadata:
  materia: "fisica"
  tema: "refraccion_indice_ley_snell"
  nivel: "avanzado"
  tags: ["reflexion_total", "angulo_critico", "condiciones"]

respuesta: ["El medio debe ser menos denso ópticamente", "El ángulo de incidencia debe ser mayor al crítico", "La luz debe viajar de un medio con mayor n a uno con menor n"]

tipo: ordenar
opciones_explicitas: ["El medio debe ser menos denso ópticamente", "El ángulo de incidencia debe ser mayor al crítico", "La luz debe viajar de un medio con mayor n a uno con menor n"]

enunciado: "Ordena las condiciones necesarias para que ocurra la Reflexión Total Interna, desde la condición del medio hasta la condición del ángulo:"

explicacion: |
  Para la reflexión total interna se requiere: 1) Que la luz pase de un medio con $n_{alto}$ a uno con $n_{bajo}$ (menos denso), 2) Que el ángulo de incidencia sea mayor al ángulo crítico $\theta_c$.
```

### 5 — Completar la Ley de Snell
```
metadata:
  materia: "fisica"
  tema: "refraccion_indice_ley_snell"
  nivel: "basico"
  tags: ["ley_snell", "formula"]

respuesta: "n1*sin(theta1)=n2*sin(theta2)"
tipo: completar
respuestas_validas: ["n1*sin(theta1)=n2*sin(theta2)"]

enunciado: "La expresión matemática de la Ley de Snell es: ___"

explicacion: |
  La Ley de Snell establece que el producto del índice de refracción por el seno del ángulo de incidencia es constante para dos medios en contacto.
```