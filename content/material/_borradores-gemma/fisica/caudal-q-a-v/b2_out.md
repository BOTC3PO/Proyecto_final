### 1 — Concepto de Caudal
```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "basico"
  tags: ["definicion", "caudal"]

respuesta: verdadero
tipo: vf

enunciado: "El caudal (Q) representa el volumen de fluido que pasa por una sección transversal por unidad de tiempo."

explicacion: |
  Efectivamente, el caudal mide la rapidez con la que un fluido atraviesa una sección determinada.
```

### 2 — Cálculo de Caudal
```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "intermedio"
  tags: ["calculo", "caudal"]

variables:
  escenario: uno_de([[0.5, 2.0], [0.8, 3.5], [1.2, 5.0]])

respuesta: escenario[0] * escenario[1]
tipo: input
tolerancia_abs: 0.01

enunciado: "Un fluido circula por una tubería con un área transversal de {escenario[0]} m² y una velocidad de {escenario[1]} m/s. ¿Cuál es el caudal Q en m³/s?"

pasos:
  - "Identificar el área (A) y la velocidad (v)."
  - "Aplicar la fórmula Q = A * v."
  - "Multiplicar {escenario[0]} m² por {escenario[1]} m/s."

explicacion: |
  El cálculo es: Q = A * v = {escenario[0]} * {escenario[1]} = {escenario[0] * escenario[1]} m³/s.
```

### 3 — Despeje de Velocidad
```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "intermedio"
  tags: ["despeje", "velocidad"]

variables:
  datos: uno_de([[10.0, 0.05], [20.0, 0.12], [5.0, 0.08]])

respuesta: datos[0] / datos[1]
tipo: input
tolerancia_abs: 0.01

enunciado: "Si un caudal de {datos[0]} m³/s atraviesa una sección de {datos[1]} m², ¿cuál es la velocidad del fluido en m/s?"

pasos:
  - "Partir de la fórmula Q = A * v."
  - "Despejar la velocidad: v = Q / A."
  - "Dividir {datos[0]} entre {datos[1]}."

explicacion: |
  Usando el despeje: v = Q / A = {datos[0]} / {datos[1]} = {datos[0] / datos[1]} m/s.
```

### 4 — Análisis de Dimensiones
```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "basico"
  tags: ["unidades", "dimensiones"]

respuesta: "m³/s"
tipo: completar
respuestas_validas: ["m³/s", "m/s", "m²", "kg/m³"]

enunciado: "En el Sistema Internacional, la unidad de medida del caudal es ___."

explicacion: |
  El caudal es volumen (m³) dividido por tiempo (s), por lo tanto, su unidad es m³/s.
```

### 5 — Relación de Variables
```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "intermedio"
  tags: ["relacion", "proporcionalidad"]

respuesta: "Aumenta"
tipo: mc
opciones_explicitas: ["Aumenta", "Disminuye", "Se mantiene constante", "Se vuelve cero"]

enunciado: "Si el área de la sección transversal de una tubería se duplica mientras el caudal se mantiene constante, la velocidad del fluido ___."

explicacion: |
  Como Q = A * v, si Q es constante, A y v son inversamente proporcionales. Si el área aumenta, la velocidad debe disminuir para mantener el mismo caudal.
```