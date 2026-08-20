### 1 — Concepto de índice de refracción
```
metadata:
  materia: "fisica"
  tema: "refraccion_ley_snell"
  nivel: "basico"
  tags: ["refraccion", "indice_de_refraccion"]

respuesta: "n"
tipo: "completar"
respuestas_validas: ["n", "N", "índice"]

enunciado: "El parámetro adimensional que describe la velocidad de la luz en un medio en comparación con el vacío se denomina ___ de refracción."

explicacion: |
  El índice de refracción (n) se define como la relación entre la velocidad de la luz en el vacío (c) y la velocidad de la luz en el medio (v): n = c/v.
```

### 2 — Comportamiento de la velocidad de la luz
```
metadata:
  materia: "fisica"
  tema: "refraccion_ley_snell"
  nivel: "basico"
  tags: ["velocidad_luz", "medios"]

respuesta: falso
tipo: "vf"

enunciado: "En un medio con un índice de refracción mayor que el del vacío (n > 1), la luz viaja más rápido que en el vacío."

explicacion: |
  Falso. Como n = c/v, si n es mayor que 1, la velocidad en el medio (v) es menor que la velocidad en el vacío (c).
```

### 3 — Ley de Snell: Ángulos de incidencia y refracción
```
metadata:
  materia: "fisica"
  tema: "refraccion_ley_snell"
  nivel: "intermedio"
  tags: ["ley_de_snell", "angulos"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[1.5, 0.7], [1.33, 1.5]]

respuesta: datos[escenario_idx][1]
tipo: "mc"
opciones_explicitas: ["1.5", "0.7", "1.33", "1.5", "0.85"]

enunciado: "Si un rayo de luz pasa de un medio con índice {datos[escenario_idx][0]} a un medio con índice {datos[escenario_idx][1]}, y el ángulo de incidencia es de 30 grados, el ángulo de refracción dependerá de la relación de los índices. Si el primer medio es el del índice {datos[escenario_idx][0]} y el segundo es {datos[escenario_idx][1]}, ¿cuál es el valor del índice del segundo medio?"

explicacion: |
  El enunciado pide identificar el segundo índice de refracción según el escenario sorteado.
```

### 4 — Terminología de la refracción
```
metadata:
  materia: "fisica"
  tema: "refraccion_ley_snell"
  nivel: "basico"
  tags: ["terminos", "rayos"]

respuesta: "normal"
tipo: "completar"
respuestas_validas: ["normal", "perpendicular"]

enunciado: "La línea imaginaria perpendicular a la superficie de separación entre dos medios se denomina línea ___."

explicacion: |
  La 'normal' es la línea perpendicular a la interfaz, y los ángulos de incidencia y refracción se miden respecto a ella.
```

### 5 — Orden de los fenómenos en la refracción
```
metadata:
  materia: "fisica"
  tema: "refraccion_ley_snell"
  nivel: "basico"
  tags: ["secuencia", "fenomenos"]

respuesta: ["incidencia", "refraccion", "reflexion_parcial"]
tipo: "ordenar"
opciones_explicitas: ["incidencia", "refraccion", "reflexion_parcial", "absorcion"]

enunciado: "Ordena los eventos que ocurren cuando un rayo de luz incide sobre una interfaz entre dos medios distintos, considerando el fenómeno de refracción y la posible reflexión parcial."

explicacion: |
  Primero el rayo incide (incidencia), luego parte de la energía cambia de dirección al entrar al segundo medio (refracción) y otra parte rebota (reflexión parcial).
```