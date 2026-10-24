### 1 — Cálculo de potencia básica
```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["formula", "calculo"]

variables:
  datos: [[12, 2], [24, 3], [10, 5], [220, 2]]
  idx: uno_de([0,1,2,3])
  v: datos[idx][0]
  i: datos[idx][1]
  p: v * i

respuesta: p
tipo: input
tolerancia_abs: 0.01

enunciado: "Una fuente de alimentación entrega un voltaje de {v} V y una corriente de {i} A. ¿Cuál es la potencia eléctrica consumida por el dispositivo?"

pasos:
  - "Identificar los valores de voltaje (V) y corriente (I)."
  - "Aplicar la fórmula de la potencia eléctrica: P = V · I."
  - "Multiplicar el voltaje por la corriente: {v} * {i} = {p}."

explicacion: |
  La potencia eléctrica (P) se define como el producto del voltaje (V) por la intensidad de corriente (I). En este caso, la potencia es de {p} W.
```

### 2 — Variación de la fórmula (Resistencia)
```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["resistencia", "formula"]

variables:
  datos: [[10, 5], [20, 10], [5, 2], [15, 3]]
  idx: uno_de([0,1,2,3])
  i: datos[idx][0]
  r: datos[idx][1]
  p: i * i * r

respuesta: "P = I² · R"
tipo: mc
opciones_explicitas: ["P = V · I", "P = I² · R", "P = V / R", "P = I / R"]

enunciado: "Si conocemos la intensidad de corriente (I) que circula por un conductor y su resistencia (R), ¿cuál es la expresión correcta para calcular la potencia eléctrica (P) disipada?"

explicacion: |
  Cuando se conoce la corriente y la resistencia, la fórmula derivada de P = V · I (sustituyendo V = I · R) es P = I² · R.
```

### 3 — Relación Voltaje y Resistencia
```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["voltaje", "resistencia"]

variables:
  datos: [[100, 20], [200, 50], [12, 4], [220, 110]]
  idx: uno_de([0,1,2,3])
  v: datos[idx][0]
  r: datos[idx][1]
  p: (v * v) / r

respuesta: p
tipo: input
tolerancia_abs: 0.01

enunciado: "Un componente electrónico tiene una resistencia de {r} Ω y se conecta a una fuente de {v} V. Calcula la potencia disipada en el componente."

pasos:
  - "Elevar el voltaje al cuadrado: {v}^2."
  - "Dividir el resultado por la resistencia: ({v}^2) / {r}."

explicacion: |
  Utilizando la variante de la fórmula que relaciona voltaje y resistencia: P = V² / R. El cálculo es ({v}^2) / {r} = {p} W.
```

### 4 — Verdad o Falso: Unidades
```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["unidades", "teoria"]

respuesta: verdadero
tipo: vf

enunciado: "En el Sistema Internacional de Unidades, la unidad de potencia eléctrica es el Vatio (W), que equivale a un Julio por segundo (J/s)."
```

### 5 — Completar fórmula de potencia
```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["completar", "formula"]

respuestas_validas: ["V * I", "V*I", "V·I"]
respuesta: "V * I"
tipo: completar

enunciado: "La fórmula fundamental para calcular la potencia eléctrica (P) en un circuito de corriente continua es P = ___."

explicacion: |
  La potencia eléctrica es el producto de la diferencia de potencial (Voltaje) por la intensidad de corriente.
```