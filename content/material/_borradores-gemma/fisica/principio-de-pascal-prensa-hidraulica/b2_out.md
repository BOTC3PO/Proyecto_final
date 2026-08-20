### 1 — Concepto fundamental de Pascal
```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal"
  nivel: "basico"
  tags: ["presion", "fluido", "teoria"]

respuesta: verdadero
tipo: vf

enunciado: "Según el Principio de Pascal, la presión aplicada a un fluido confinado se transmite íntegramente en todas las direcciones y a todos los puntos del fluido."

explicacion: |
  El Principio de Pascal establece que cualquier presión aplicada a un fluido en equilibrio dentro de un recipiente cerrado se transmite sin disminución a todos los puntos del fluido y a las paredes del recipiente.
```

### 2 — Relación de áreas y fuerzas
```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal"
  nivel: "intermedio"
  tags: ["prensa_hidraulica", "calculo"]

variables:
  idx: uno_de([0, 1])
  datos: [[4, 16, 200, 800], [2, 10, 50, 250]]

enunciado: "En una prensa hidráulica, si la relación entre el área del pistón de salida ($A_2$) y el área del pistón de entrada ($A_1$) es de {datos[idx][1]} a 1, y se aplica una fuerza de {datos[idx][2]} N en el pistón de entrada, la fuerza resultante en el pistón de salida será de ___ N."

pasos:
  - "Identificar la relación de áreas: $A_2 / A_1 = \{datos[idx][1]}$"
  - "Aplicar la fórmula de la prensa hidráulica: $F_2 / F_1 = A_2 / A_1$"
  - "Despejar la fuerza de salida: $F_2 = F_1 \cdot (A_2 / A_1)$"
  - "Calcular: $\{datos[idx][2]} \cdot \{datos[idx][1]} = \{datos[idx][3]}$"

respuestas_validas: ["{datos[idx][3]}"]
respuesta: "{datos[idx][3]}"
tipo: completar

explicacion: |
  Utilizando la fórmula $F_1 / A_1 = F_2 / A_2$, despejamos la fuerza de salida: $F_2 = F_1 \cdot (A_2 / A_1)$. 
  En este caso: $F_2 = \{datos[idx][2]} \text{ N} \cdot \{datos[idx][1]} = \{datos[idx][3]} \text{ N}$.
```

### 3 — Cálculo de presión en un sistema
```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal"
  nivel: "intermedio"
  tags: ["presion", "unidad"]

respuesta: "15000 Pa"
tipo: mc

opciones_explicitas: ["1500 Pa", "15000 Pa", "150000 Pa", "15 Pa"]

enunciado: "Un pistón de una prensa hidráulica tiene un área de $0.03 \text{ m}^2$. Si se aplica una fuerza de $450 \text{ N}$ sobre dicho pistón, ¿cuál es la presión ejercida sobre el fluido?"

explicacion: |
  La presión se define como la fuerza aplicada por unidad de área ($P = F / A$).
  $P = 450 \text{ N} / 0.03 \text{ m}^2 = 15000 \text{ Pa}$.
```

### 4 — Análisis de componentes de una prensa
```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal"
  nivel: "basico"
  tags: ["componentes", "teoria"]

respuesta: "ordenar"
tipo: ordenar

opciones_explicitas: ["Aplicar fuerza en pistón pequeño", "Transmisión de presión por el fluido", "Levantamiento de carga en pistón grande"]

enunciado: "Ordene los pasos lógicos que ocurren en el funcionamiento de una prensa hidráulica para levantar un objeto pesado:"

explicacion: |
  1. Se aplica una fuerza pequeña en un área pequeña.
  2. La presión se transmite íntegramente por el fluido incompresible.
  3. La presión se traduce en una fuerza mucho mayor en el área grande.
```

### 5 — Veracidad de la relación de áreas
```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal"
  nivel: "avanzado"
  tags: ["proporcionalidad", "calculo"]

respuesta: falso
tipo: vf

enunciado: "Si el área de un pistón de salida es el doble que la del pistón de entrada, la fuerza ejercida en el pistón de salida será el doble que la aplicada en el de entrada. ¿Es esto verdadero o falso?"

explicacion: |
  Es falso. Debido a la relación $F_2 / F_1 = A_2 / A_1$, si el área se duplica, la fuerza también se duplica. Sin embargo, la pregunta se refiere a la lógica de la prensa: si queremos multiplicar la fuerza, necesitamos que el área de salida sea mayor. En este caso específico, la afirmación es matemáticamente correcta para ese caso, pero si la pregunta fuera sobre la relación inversa, sería falsa. 
  
  *Corrección de lógica para el DSL*: Si $A_2 = 2 \cdot A_1$, entonces $F_2 = 2 \cdot F_1$. La afirmación es verdadera.
  
  *Re-generando para asegurar falsedad según requerimiento de variabilidad*:
  
  "Si el área del pistón de salida es el CUARTO de la del pistón de entrada, la fuerza de salida será el DOBLE de la fuerza de entrada."
```

*(Nota: Corrijo la 5 para que sea un VF con respuesta falsa clara)*

### 5 — Relación de áreas (Corregida)
```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal"
  nivel: "avanzado"
  tags: ["proporcionalidad"]

respuesta: falso

tipo: vf

enunciado: "Si el área del pistón de salida es el CUARTO de la del pistón de entrada, la fuerza de salida será el DOBLE de la fuerza de entrada."

explicacion: |
  Falso. Según la relación $F_2 = F_1 \cdot (A_2 / A_1)$, si $A_2 = A_1 / 4$, entonces $F_2 = F_1 \cdot (1/4)$. La fuerza de salida sería la cuarta parte, no el doble.
```