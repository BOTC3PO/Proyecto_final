### 1 — La relación fundamental
```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["formula", "conceptos"]

respuesta: "V = I * R"
tipo: completar
respuestas_validas: ["V = I * R", "V = R * I"]

enunciado: "La Ley de Ohm establece que la diferencia de potencial (V) es igual al producto de la intensidad de corriente (I) por la resistencia (R). La expresión matemática es: ___"

explicacion: |
  La Ley de Ohm indica que la tensión es directamente proporcional a la corriente para una resistencia constante.
```

### 2 — Cálculo de la Tensión
```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["calculo"]

variables:
  escenario: uno_de([
    [2, 5, 10],
    [12, 4, 30],
    [5, 10, 50]
  ])

respuesta: escenario[0][2]
tipo: mc
opciones_explicitas: ["10V", "30V", "50V", "60V"]

enunciado: "Si una resistencia de {escenario[0][1]} Ω es atravesada por una corriente de {escenario[0][0]} A, ¿cuál es la diferencia de potencial aplicada?"

pasos:
  - "Identificar los datos: I = {escenario[0][0]} A, R = {escenario[0][1]} Ω"
  - "Aplicar la fórmula: V = I * R"
  - "Calcular: V = {escenario[0][0]} * {escenario[0][1]} = {escenario[0][2]} V"

explicacion: |
  Usando la fórmula V = I * R, multiplicamos la corriente por la resistencia para obtener la tensión.
```

### 3 — Cálculo de la Corriente
```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  escenario: uno_de([
    [12, 4],
    [220, 110],
    [10, 5]
  ])

respuesta: escenario[0][0] / escenario[0][1]
tipo: input
tolerancia_abs: 0.01

enunciado: "Una bombilla está conectada a una fuente de {escenario[0][0]} V y tiene una resistencia interna de {escenario[0][1]} Ω. ¿Cuál es la intensidad de la corriente que circula por ella (en Amperes)?"

pasos:
  - "Despejar la fórmula de Ohm para la corriente: I = V / R"
  - "Sustituir valores: I = {escenario[0][0]} / {escenario[0][1]}"
  - "Resultado: I = {redondear(escenario[0][0] / escenario[0][1], 2)} A"

explicacion: |
  Para hallar la corriente cuando conocemos la tensión y la resistencia, despejamos la fórmula original obteniendo I = V / R.
```

### 4 — Veracidad de la relación
```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Si mantenemos la tensión (V) constante y aumentamos la resistencia (R), la intensidad de la corriente (I) debe disminuir."

explicacion: |
  Es verdadero. Según la Ley de Ohm, la corriente es inversamente proporcional a la resistencia cuando la tensión es constante.
```

### 5 — Despeje de la Resistencia
```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  escenario: uno_de([
    [10, 2, 5],
    [24, 3, 8],
    [100, 10, 10]
  ])

respuesta: escenario[0][1] / escenario[0][0]
tipo: mc
opciones_explicitas: ["5 Ω", "8 Ω", "10 Ω", "20 Ω"]

enunciado: "Un dispositivo electrónico consume una corriente de {escenario[0][1]} A cuando se conecta a una batería de {escenario[0][0]} V. ¿Cuál es el valor de su resistencia?"

pasos:
  - "Identificar datos: V = {escenario[0][0]} V, I = {escenario[0][1]} A"
  - "Despejar R de la fórmula V = I * R: R = V / I"
  - "Calcular: R = {escenario[0][0]} / {escenario[0][1]} = {escenario[0][2]} Ω"

explicacion: |
  Para encontrar la resistencia, dividimos la tensión aplicada entre la intensidad de la corriente que circula por el circuito.
```