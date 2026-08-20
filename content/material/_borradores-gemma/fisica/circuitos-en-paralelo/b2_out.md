### 1 — Resistencia equivalente en paralelo
```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "basico"
  tags: ["resistencia", "paralelo"]

variables:
  r1: 10.0
  r2: 10.0

respuesta: 5.0
tipo: input
tolerancia_abs: 0.1

enunciado: "Si tenemos dos resistencias en paralelo, una de {r1} $\Omega$ y otra de {r2} $\Omega$, ¿cuál es el valor de la resistencia equivalente ($R_{eq}$)?"

pasos:
  - "Utilizar la fórmula para dos resistencias: $1/R_{eq} = 1/R_1 + 1/R_2$"
  - "Calcular: $1/R_{eq} = 1/10 + 1/10 = 2/10$"
  - "Invertir el resultado: $R_{eq} = 10/2 = 5 \Omega$"

explicacion: |
  En un circuito en paralelo, la resistencia equivalente siempre es menor que la resistencia más pequeña del circuito. En este caso, $1/R_{eq} = 1/10 + 1/10 = 0.2$, por lo tanto $R_{eq} = 1/0.2 = 5 \Omega$.
```

### 2 — Tensión en paralelo
```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "basico"
  tags: ["tensión", "voltaje"]

respuesta: verdadero
tipo: vf

enunciado: "En un circuito de corriente continua con dos o más resistencias conectadas en paralelo, la diferencia de potencial (tensión) es la misma para todas las resistencias."

explicacion: |
  Correcto. Una de las propiedades fundamentales de los circuitos en paralelo es que todos los componentes están conectados a los mismos dos nodos, por lo tanto, la tensión es idéntica para todos.
```

### 3 — Corriente en ramas paralelas
```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "intermedio"
  tags: ["corriente", "ley_de_kirchhoff"]

variables:
  v_total: 12.0
  r1: 4.0
  r2: 6.0
  i_total: 4.0
  i1: 2.0
  i2: 1.3333

respuesta: "i1"
tipo: mc

opciones_explicitas: ["i1", "i2", "i_total"]

enunciado: "Se tiene una fuente de {v_total}V conectada a dos resistencias en paralelo: $R_1 = {r1} \Omega$ y $R_2 = {r2} \Omega$. ¿Cuál es la corriente que circula por la rama de la resistencia $R_1$?"

pasos:
  - "Calcular la corriente en la rama 1 usando la Ley de Ohm: $I_1 = V / R_1$"
  - "$I_1 = 12V / 4 \Omega = 3A$"
  - "Calcular la corriente en la rama 2: $I_2 = 12V / 6 \Omega = 2A$"
  - "Verificar la corriente total: $I_{total} = 3A + 2A = 5A$"

explicacion: |
  La corriente total se divide entre las ramas. Usando $I = V/R$, la corriente en la primera rama es $12/4 = 3A$. (Nota: El ejemplo en el enunciado usa valores para guiar el cálculo, el usuario debe calcular según los valores dados).
```

### 4 — Cálculo de corriente total
```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "intermedio"
  tags: ["corriente_total", "resistencia_equivalente"]

variables:
  r1: 12.0
  r2: 6.0
  v: 12.0
  r_eq: 4.0
  i_total: 3.0

respuesta: 3.0
tipo: input
tolerancia_abs: 0.1

enunciado: "Un circuito tiene dos resistencias en paralelo de {r1} $\Omega$ y {r2} $\Omega$. Si se aplica una tensión de {v}V, ¿cuál es la corriente total suministrada por la fuente?"

pasos:
  - "Calcular la resistencia equivalente: $1/R_{eq} = 1/12 + 1/6 = 1/12 + 2/12 = 3/12 \Rightarrow R_{eq} = 4 \Omega$"
  - "Calcular la corriente total con la Ley de Ohm: $I_{total} = V / R_{eq}$"
  - "$I_{total} = 12V / 4 \Omega = 3A$"

explicacion: |
  Primero hallamos la $R_{eq}$ que es $4 \Omega$. Luego, aplicamos $I = V/R$, resultando en $12/4 = 3A$.
```

### 5 — Pasos para resolver un circuito complejo
```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "avanzado"
  tags: ["procedimiento", "metodología"]

opciones_explicitas: ["Calcular R_eq", "Calcular I_total", "Calcular tensiones"]

respuesta: ["Calcular R_eq", "Calcular I_total", "Calcular tensiones"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para determinar la corriente que circula por una rama específica en un circuito de resistencias en paralelo con una fuente de tensión conocida:"

explicacion: |
  Para resolver circuitos en paralelo, el orden lógico es: 1. Hallar la resistencia equivalente de la red para entender el sistema, 2. Calcular la corriente total de la fuente, 3. Usar la tensión (que es constante) para hallar la corriente de cada rama individual.
```