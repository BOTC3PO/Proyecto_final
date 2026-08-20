### 1 — Concepto de Momento Lineal
```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["definicion", "formula"]

respuesta: "m·v"
tipo: completar
respuestas_validas: ["m*v", "m*v", "p=m*v"]

enunciado: "La cantidad de movimiento o momento lineal de un objeto se define matemáticamente como el producto de su masa por su ___."

explicacion: |
  El momento lineal ($p$) es una magnitud vectorial que se define como el producto de la masa ($m$) por la velocidad ($v$): $p = m \cdot v$.
```

### 2 — Cálculo de Momento Lineal
```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["calculo", "numerico"]

variables:
  escenario: uno_de([[10, 5], [20, 2], [5, 10]])

respuesta: escenario[0] * escenario[1]
tipo: input
tolerancia_abs: 0.01

enunciado: "Un objeto tiene una masa de {escenario[0]} kg y se desplaza con una velocidad constante de {escenario[1]} m/s. ¿Cuál es su momento lineal en kg·m/s?"

pasos:
  - "Identificar la masa: m = {escenario[0]} kg"
  - "Identificar la velocidad: v = {escenario[1]} m/s"
  - "Aplicar la fórmula: p = m * v = {escenario[0]} * {escenario[1]}"

explicacion: |
  El cálculo es: {escenario[0]} kg * {escenario[1]} m/s = {escenario[0] * escenario[1]} kg·m/s.
```

### 3 — Relación Masa y Velocidad
```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "intermedio"
  tags: ["proporcionalidad"]

respuesta: "verdadero"
tipo: vf

enunciado: "Si un objeto duplica su velocidad pero mantiene su masa constante, su momento lineal también se duplica."

explicacion: |
  Como $p = m \cdot v$, el momento es directamente proporcional a la velocidad. Si $v' = 2v$, entonces $p' = m \cdot (2v) = 2(m \cdot v) = 2p$.
```

### 4 — Comparación de Objetos
```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "intermedio"
  tags: ["comparacion"]

variables:
  caso: uno_de([[0, 1], [1, 0]])

respuesta: caso[0] == 0 ? "A" : "B"
tipo: mc
opciones_explicitas: ["A", "B"]

enunciado: "Considera dos objetos: el Objeto A tiene 2 kg a 10 m/s. El Objeto B tiene 5 kg a 4 m/s. ¿Cuál de ellos posee un mayor momento lineal?"

explicacion: |
  Calculamos ambos:
  p_A = 2 kg * 10 m/s = 20 kg·m/s.
  p_B = 5 kg * 4 m/s = 20 kg·m/s.
  En este caso, ambos tienen el mismo momento lineal. 
  {caso == 0 ? "El objeto A es mayor" : "El objeto B es mayor"} (Nota: Error en lógica de ejemplo, corregido para igualdad)."
```
*(Nota: Corregido el ejemplo para que sea una pregunta de selección válida sobre igualdad o diferencia)*

**Re-generación de la 4 para cumplir estrictamente con la lógica de selección:**

### 4 — Comparación de Objetos (Corregida)
```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "intermedio"
  tags: ["comparacion"]

variables:
  caso: uno_de([[0, 1]])

respuesta: caso[0] == 0 ? "A" : "B"
tipo: mc
opciones_explicitas: ["A", "B"]

enunciado: "Si el Objeto A tiene 2 kg a 10 m/s y el Objeto B tiene 5 kg a 2 m/s, ¿cuál tiene mayor momento lineal?"

explicacion: |
  p_A = 2 * 10 = 20 kg·m/s.
  p_B = 5 * 2 = 10 kg·m/s.
  Por lo tanto, el objeto A tiene mayor momento.
```

### 5 — Unidades de Medida
```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["unidades"]

respuesta: "kg·m/s"
tipo: completar
respuestas_validas: ["kg*m/s", "kg m/s", "kg·m/s"]

enunciado: "En el Sistema Internacional (SI), la unidad de medida del momento lineal es ___."

explicacion: |
  Dado que el momento es masa (kg) multiplicado por velocidad (m/s), su unidad resultante es kg·m/s.
```