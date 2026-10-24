### 1 — Resistencia equivalente en paralelo
```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "intermedio"
  tags: ["resistencia", "paralelo", "calculo"]

variables:
  escenario: uno_de([[10.0, 5.0], [20.0, 6.666666666666667], [30.0, 15.0]])
  idx: uno_de([0, 1, 2])
  R1: escenario[idx][0]
  R_eq: escenario[idx][1]

enunciado: "En una instalación eléctrica doméstica, dos resistencias se conectan en paralelo. Si la primera resistencia es de {R1} $\Omega$ y la resistencia equivalente del circuito es de {R_eq} $\Omega$, ¿cuál es el valor de la segunda resistencia?"

respuesta: R_eq
tipo: input
tolerancia_abs: 0.001

explicacion: |
  Para resistencias en paralelo, la fórmula es: 1/R_eq = 1/R1 + 1/R2.
  Despejando R2: R2 = (R1 * R_eq) / (R1 - R_eq).
```

### 2 — Tensión en paralelo
```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "basico"
  tags: ["tensión", "voltaje"]

variables:
  V_fuente: 220.0
  V_componente: 220.0

enunciado: "Si conectamos una lámpara a una batería de {V_fuente} V en un circuito en paralelo, la tensión en la lámpara será de {V_componente} V."

respuesta: verdadero
tipo: vf

explicacion: |
  En un circuito en paralelo, todos los componentes conectados a los mismos nodos mantienen la misma diferencia de potencial (tensión).
```

### 3 — Corriente en una rama
```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "intermedio"
  tags: ["corriente", "ley_de_ohm"]

variables:
  datos: [[12.0, 3.0, 1.0], [24.0, 6.0, 2.0], [10.0, 5.0, 2.0]]
  idx: uno_de([0, 1, 2])
  V: datos[idx][0]
  R: datos[idx][1]
  I_rama: datos[idx][2]

enunciado: "En un circuito en paralelo con una fuente de {V} V, una de las ramas tiene una resistencia de {R} $\Omega$. ¿Cuál es la intensidad de corriente que circula por esa rama específica?"

opciones_explicitas: ["0.5 A", "2.0 A", "4.0 A", "6.0 A"]
respuesta: "4.0 A"
tipo: mc

explicacion: |
  Usando la Ley de Ohm: I = V / R. En este caso, {V} / {R} = {I_rama} A.
```

### 4 — Comportamiento de la corriente total
```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "basico"
  tags: ["corriente", "conceptos"]

variables:
  I_total: 10.0
  I1: 4.0
  I2: 6.0

enunciado: "En un circuito con dos resistencias en paralelo, si la corriente que atraviesa la rama 1 es de {I1} A y la corriente en la rama 2 es de {I2} A, la corriente total suministrada por la fuente es de ___ A."

opciones_explicitas: ["2.0", "4.0", "6.0", "10.0"]
respuesta: "10.0"
tipo: completar

explicacion: |
  Por la Ley de Corrientes de Kirchhoff, la corriente total es la suma de las corrientes de cada rama: I_total = I1 + I2.
```

### 5 — Orden de pasos para análisis de circuito
```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "basico"
  tags: ["metodologia", "procedimiento"]

opciones_explicitas: ["Calcular la resistencia equivalente", "Identificar las tensiones de cada rama", "Sumar las corrientes de cada rama para obtener la total"]

respuesta: ["Identificar las tensiones de cada rama", "Calcular la resistencia equivalente", "Sumar las corrientes de cada rama para obtener la total"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para analizar un circuito en paralelo y hallar la corriente total si conocemos las resistencias y el voltaje de la fuente:"

explicacion: |
  1. Primero verificas que la tensión sea la misma en todas las ramas.
  2. Calculas la resistencia equivalente o las corrientes individuales.
  3. Sumas las corrientes para obtener la corriente total del sistema.
```