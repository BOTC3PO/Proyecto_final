### 1 — Definición de Momento Lineal
```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["definicion", "cantidad_de_movimiento"]

respuesta: "p = m * v"
tipo: completar
respuestas_validas: ["p = m * v", "p = m*v", "p = m·v"]

enunciado: "La expresión matemática que define la cantidad de movimiento (o momento lineal) de un objeto en función de su masa (m) y su velocidad (v) es ___."

explicacion: |
  El momento lineal es una magnitud vectorial que se define como el producto de la masa de un objeto por su velocidad.
```

### 2 — Dependencia de la masa y velocidad
```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["relacion", "proporcionalidad"]

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["disminuye", "aumenta", "se mantiene igual"]

enunciado: "Si un objeto mantiene su velocidad constante pero su masa se duplica, su momento lineal ___."

datos:
  - ["se duplica", "aumenta"]
  - ["se mantiene igual", "se mantiene igual"]

explicacion: |
  Dado que $p = m \cdot v$, si la velocidad es constante, el momento es directamente proporcional a la masa. Al duplicar la masa, el momento también se duplica.
```

### 3 — Naturaleza de la magnitud
```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["vectorial", "escalar"]

respuesta: verdadero
tipo: vf

enunciado: "¿El momento lineal es una magnitud vectorial, ya que posee dirección y sentido?"

explicacion: |
  Correcto. Al ser el producto de un escalar (masa) por un vector (velocidad), el momento lineal resultante es un vector.
```

### 4 — Unidades en el SI
```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["unidades", "si"]

respuesta: "kg·m/s"
tipo: completar
respuestas_validas: ["kg·m/s", "kg m/s", "kg*m/s"]

enunciado: "En el Sistema Internacional de Unidades (SI), la unidad de medida del momento lineal es ___."

explicacion: |
  La unidad se deriva directamente de la fórmula: $[m] \cdot [v] = \text{kg} \cdot (\text{m/s}) = \text{kg}\cdot\text{m/s}$.
```

### 5 — Componentes del momento
```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["componentes"]

respuesta: "m * v"
tipo: completar
respuestas_validas: ["m * v", "m*v"]

enunciado: "Si un objeto tiene una masa de 5 kg y una velocidad de 2 m/s, su momento lineal es ___ kg·m/s."

explicacion: |
  Calculamos el producto: $5\text{ kg} \cdot 2\text{ m/s} = 10\text{ kg}\cdot\text{m/s}$.
```