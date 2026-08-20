### 1 — Consumo de una bombilla
```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["potencia", "voltaje", "corriente"]

variables:
  escenario: uno_de([[12, 2, 24], [220, 5, 1100], [12, 10, 120]])
  v: escenario[0]
  i: escenario[1]
  p: escenario[2]

respuesta: p
tipo: input
tolerancia_abs: 0.1

enunciado: "Una bombilla se conecta a una fuente de tensión de {v} V y por ella circula una corriente de {i} A. ¿Cuál es la potencia eléctrica consumida por la bombilla?"

pasos:
  - "Identificar el voltaje (V) y la corriente (I)."
  - "Aplicar la fórmula de potencia: P = V * I."

explicacion: |
  La potencia eléctrica se calcula multiplicando la diferencia de potencial por la intensidad de corriente: P = V * I.
  En este caso: {v} V * {i} A = {p} W.
```

### 2 — Resistencia y potencia
```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["resistencia", "potencia", "ley_de_joule"]

variables:
  escenario: uno_de([[10, 5], [20, 4], [5, 10]])
  r: escenario[0]
  i: escenario[1]
  p: escenario[1] * escenario[1] * escenario[0]

respuesta: p
tipo: input
tolerancia_abs: 0.1

enunciado: "Un componente electrónico tiene una resistencia de {r} Ω. Si circula una corriente de {i} A a través de él, ¿cuánta potencia se disipa en forma de calor?"

pasos:
  - "Utilizar la variante de la fórmula de potencia: P = I² * R."
  - "Elevar la corriente al cuadrado: {i} * {i}."
  - "Multiplicar por la resistencia: {i} * {i} * {r}."

explicacion: |
  Para calcular la potencia disipada por una resistencia conociendo la corriente, usamos P = I² * R.
  Cálculo: ({i} A)² * {r} Ω = {p} W.
```

### 3 — ¿Es una carga de alta potencia?
```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["comparacion", "potencia"]

variables:
  escenario: uno_de([[50, 1000], [500, 50], [10, 2000]])
  p: escenario[0]
  limite: escenario[1]

respuesta: p > limite
tipo: vf

enunciado: "Un dispositivo consume una potencia de {p} W. Si el límite de seguridad de la instalación es de {limite} W, ¿se ha superado el límite de seguridad?"

explicacion: |
  Comparamos la potencia consumida ({p} W) con el límite establecido ({limite} W). 
  Si {p} > {limite}, la respuesta es verdadero.
```

### 4 — Selección de fusible
```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["voltaje", "resistencia", "corriente"]

variables:
  escenario: uno_de([[120, 10], [230, 5], [12, 100]])
  v: escenario[0]
  r: escenario[1]
  i: escenario[0] / escenario[1]

respuesta: i
tipo: mc

opciones_explicitas: ["0.5 A", "1.2 A", "2.3 A", "12.0 A"]

enunciado: "Un calefactor tiene una resistencia interna de {r} Ω y se conecta a una toma de corriente de {v} V. ¿Qué intensidad de corriente circulará por el circuito?"

explicacion: |
  Usamos la relación derivada de la ley de Ohm y la potencia: P = V²/R, pero para hallar la corriente usamos I = V / R.
  Cálculo: {v} V / {r} Ω = {i} A.
```

### 5 — Pasos para calcular la potencia
```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["metodologia", "procedimiento"]

opciones_explicitas: ["Medir voltaje y corriente", "Multiplicar V por I", "Calcular el resultado en Watts"]

respuesta: ["Medir voltaje y corriente", "Multiplicar V por I", "Calcular el resultado en Watts"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para determinar la potencia eléctrica de un electrodoméstico desconocido usando un multímetro en serie y paralelo."

explicacion: |
  Para hallar la potencia P = V * I, primero debemos obtener los valores de la tensión (V) y la intensidad (I) mediante mediciones, luego realizar la multiplicación matemática y finalmente expresar el resultado en la unidad de potencia (W).
```