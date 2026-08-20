### 1 — ¿Resistencia total en paralelo?
```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "basico"
  tags: ["resistencia", "paralelo", "error_comun"]

respuesta: "menor"
tipo: "mc"
opciones_explicitas: ["mayor", "menor", "igual"]

enunciado: "Al conectar dos resistencias en paralelo, la resistencia equivalente del circuito es ___ que la resistencia más pequeña del conjunto."

explicacion: |
  En un circuito en paralelo, siempre se ofrecen más caminos para que la corriente fluya, lo que reduce la resistencia total. Por lo tanto, la resistencia equivalente es siempre menor que la menor de las resistencias individuales.
```

### 2 — Tensión en ramas paralelas
```
metadata:
  materia: "fisica"
  tema: "circuitas_en_paralelo"
  nivel: "basico"
  tags: ["tension", "voltaje", "paralelo"]

respuesta: falso
tipo: "vf"

enunciado: "En un circuito de corriente continua con dos resistencias conectadas en paralelo a una fuente de voltaje, la tensión en la primera resistencia es distinta a la tensión en la segunda."

explicacion: |
  Una de las propiedades fundamentales de los circuitos en paralelo es que todos los componentes conectados a los mismos nodos comparten la misma diferencia de potencial (tensión).
```

### 3 — Cálculo de corriente total
```
metadata:
  materia: "fisica"
  tema: "circuitas_en_paralelo"
  nivel: "intermedio"
  tags: ["ley_de_ohm", "corriente", "paralelo"]

variables:
  escenario: uno_de([
    [12.0, 2.0, 4.0],
    [24.0, 6.0, 3.0],
    [9.0, 3.0, 9.0]
  ])

respuesta: escenario[0][1] + escenario[0][2]
tipo: "input"
tolerancia_abs: 0.01

enunciado: "Se tiene una fuente de tensión de {escenario[0][0]} V conectada a dos resistencias en paralelo de {escenario[0][1]} $\Omega$ y {escenario[0][2]} $\Omega$. Calcule la corriente total suministrada por la fuente en Amperes (A)."

pasos:
  - "Calcular la resistencia equivalente: $R_{eq} = (R_1 \cdot R_2) / (R_1 + R_2)$"
  - "Aplicar la Ley de Ohm: $I_{total} = V / R_{eq}$"

explicacion: |
  Para el caso dado:
  1. $R_{eq} = (2 \cdot 4) / (2 + 4) = 8 / 6 = 1.333 \Omega$.
  2. $I_{total} = 12 / 1.333 = 9.0$ A.
  (Nota: El valor de la respuesta depende del escenario sorteado).
```

### 4 — Comportamiento de la corriente
```
metadata:
  materia: "fisica"
  tema: "circuitas_en_paralelo"
  nivel: "intermedio"
  tags: ["corriente", "resistencia", "paralelo"]

respuesta: "mayor"
tipo: "completar"
respuestas_validas: ["mayor", "menor", "igual"]

enunciado: "Si en un circuito en paralelo se añade una tercera resistencia en paralelo a las dos ya existentes, la corriente total que sale de la fuente será ___ que la corriente del circuito original."

explicacion: |
  Al añadir una resistencia en paralelo, la resistencia equivalente total disminuye. Según la Ley de Ohm ($I = V/R$), si la tensión $V$ es constante y $R$ disminuye, la corriente total $I$ debe aumentar.
```

### 5 — Orden de procesos de análisis
```
metadata:
  materia: "fisica"
  tema: "circuitas_en_paralelo"
  nivel: "intermedio"
  tags: ["analisis", "pasos", "metodologia"]

opciones_explicitas: ["Calcular R equivalente", "Calcular tensión en cada rama", "Calcular corriente total", "Calcular corrientes individuales"]
respuesta: ["Calcular R equivalente", "Calcular corriente total", "Calcular corrientes individuales"]
tipo: "ordenar"

enunciado: "Para analizar un circuito con una fuente de tensión y tres resistencias en paralelo, ordene los pasos lógicos para determinar la corriente que circula por la rama de mayor resistencia:"

explicacion: |
  Para resolver circuitos complejos, primero se simplifica el circuito (calculando la resistencia equivalente o la corriente total) y luego se desglosa la información hacia las ramas individuales para hallar los valores específicos.
```