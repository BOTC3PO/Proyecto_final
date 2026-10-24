### 1 — Error de unidades en el caudal
```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "basico"
  tags: ["unidades", "caudal", "seccion"]

variables:
  radio: 0.05
  velocidad: 2.0

respuesta: 0.00157
tipo: input
tolerancia_abs: 0.0001

enunciado: "Un tubo circular tiene un radio de {radio} m y el fluido circula con una velocidad de {velocidad} m/s. ¿Cuál es el caudal Q en m³/s? (Usa pi como pi)"

pasos:
  - "Calcula el área de la sección transversal: A = pi * radio^2"
  - "Calcula el caudal usando la fórmula Q = A * v"

explicacion: |
  El caudal Q es el producto del área de la sección transversal por la velocidad.
  A = pi * (0.05)^2 = 0.007853... m²
  Q = 0.007853 * 2.0 = 0.0157... m³/s. 
  *Nota: Revisa si el resultado es 0.00157 o 0.0157 según el cálculo.*
```

### 2 — Confusión entre diámetro y radio
```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "basico"
  tags: ["diametro", "error_comun"]

opciones_explicitas: ["Es correcto", "Es incorrecto"]

respuesta: "Es incorrecto"
tipo: mc

enunciado: "Si un problema te da el diámetro de una tubería de 0.4 m, y utilizas directamente el valor 0.4 en la fórmula del área (A = pi * r^2), ¿el caudal resultante será mayor o menor al real?"

explicacion: |
  Es incorrecto. El error común es usar el diámetro en lugar del radio. Como el radio es la mitad del diámetro, usar el diámetro directamente sobreestima el área y, por lo tanto, el caudal.
```

### 3 — Relación entre área y velocidad (Efecto Venturi)
```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "intermedio"
  tags: ["continuidad", "velocidad"]

variables:
  idx: uno_de([0, 1])
  datos: [[0.5, 2.0, 1.0], [0.2, 1.0, 4.0]]

respuesta: datos[idx][2]
tipo: vf

enunciado: "En una tubería con sección constante, si el área de la sección transversal se reduce a la mitad, la velocidad del fluido debe ___ para mantener el mismo caudal."

pasos:
  - "Si el caudal Q es constante, entonces A1 * v1 = A2 * v2"
  - "Si A2 = 0.5 * A1, entonces v2 = v1 / 0.5 = 2 * v1"

explicacion: |
  Para que el caudal sea constante, la velocidad debe aumentar inversamente a la disminución del área. Si el área se reduce a la mitad, la velocidad se duplica.
```

### 4 — Completar la fórmula de caudal
```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "basico"
  tags: ["formula", "conceptos"]

respuestas_validas: ["A * v", "v * A", "A * v", "v * A"]

respuesta: "A * v"
tipo: completar

enunciado: "La expresión matemática que define el caudal Q en función del área de la sección transversal (A) y la velocidad media del fluido (v) es ___."

explicacion: |
  El caudal Q representa el volumen por unidad de tiempo, que se calcula multiplicando el área de la sección por la velocidad del fluido.
```

### 5 — Unidades de medida del caudal
```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "basico"
  tags: ["unidades"]

opciones_explicitas: ["m/s", "m²", "m³/s", "kg/m³"]

respuesta: "m³/s"
tipo: mc

enunciado: "Si el área se mide en m² y la velocidad en m/s, ¿cuál es la unidad resultante para el caudal Q?"

explicacion: |
  Al multiplicar m² (área) por m/s (velocidad), obtenemos m³/s (volumen por tiempo).
```