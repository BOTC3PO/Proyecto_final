# Fisica — Circuitos en paralelo (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de tensión en paralelo

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "basico"
  tags: ["electricidad", "voltaje"]

respuesta: verdadero
tipo: vf

enunciado: "En un circuito en paralelo, todos los componentes conectados a las mismas ramas mantienen la misma tensión."

explicacion: |
  En un circuito en paralelo, la diferencia de potencial (tensión o voltaje) es la misma para todas las ramas que están conectadas directamente a los terminales de la fuente.
```

### 2 — Resistencia equivalente

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "intermedio"
  tags: ["resistencia", "equivalente"]

variables:
  r1: 10
  r2: 20
  r_eq: 1 / (1/r1 + 1/r2)

respuesta: r_eq
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si tenemos dos resistencias en paralelo con valores de {r1} Ω y {r2} Ω, ¿cuál es el valor de la resistencia equivalente (en Ω)?"

pasos:
  - "Calcular la conductancia de la primera rama: 1/r1"
  - "Calcular la conductancia de la segunda rama: 1/r2"
  - "Sumar las conductancias: G_total = 1/r1 + 1/r2"
  - "La resistencia equivalente es el inverso de la conductancia total: R_eq = 1/G_total"

explicacion: |
  La fórmula para dos resistencias en paralelo es: 1/R_eq = 1/R1 + 1/R2. En este caso: 1/10 + 1/20 = 3/20, por lo tanto R_eq = 20/3 ≈ 6.67 Ω.
```

### 3 — Distribución de corriente

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "basico"
  tags: ["corriente", "ley_de_kochl"]

opciones_explicitas: ["se divide", "se suma", "se mantiene igual"]

respuesta: "se divide"
tipo: mc

enunciado: "En un circuito en paralelo, la corriente total que sale de la fuente ___ entre las distintas ramas del circuito."

explicacion: |
  De acuerdo con la Ley de Corrientes de Kirchhoff, la corriente total es la suma de las corrientes que pasan por cada rama. Por lo tanto, la corriente se reparte o divide entre ellas.
```

### 4 — Componentes de un circuito

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "basico"
  tags: ["componentes", "nodos"]

respuestas_validas:
  - "fuente"
  - "cables"
  - "cargas"

respuesta: ["fuente", "cables", "cargas"]
tipo: completar

enunciado: "Para armar un circuito básico en paralelo se requiere una ___ de energía, ___ de conexión y las ___ que queremos alimentar."

explicacion: |
  Un circuito requiere una fuente para proporcionar la diferencia de potencial, cables para permitir el flujo de electrones y cargas (resistencias, bombillas, etc.) para consumir la energía.
```

### 5 — Comparación de resistencia total

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "intermedio"
  tags: ["resistencia", "comparacion"]

variables:
  r_base: 100
  r_paralelo: 50

respuesta: "menor"
tipo: mc

opciones_explicitas: ["mayor", "menor", "igual"]

enunciado: "Si añadimos una resistencia adicional en paralelo a una resistencia ya existente, la resistencia total del circuito será ___ que la original."

explicacion: |
  Al añadir una rama en paralelo, se ofrecen más caminos para que fluyan los electrones, lo que reduce la oposición total al paso de la corriente. Por lo tanto, la resistencia equivalente siempre disminuye al agregar resistencias en paralelo.
```

### 6 — Resistencia equivalente en paralelo

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "basico"
  tags: ["resistencia", "paralelo"]

variables:
  r1: 10.0
  r2: 10.0

respuestas_validas:
  - 5.0
respuesta: 5.0
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si tenemos dos resistencias en paralelo, una de {r1} Ω y otra de {r2} Ω, ¿cuál es el valor de la resistencia equivalente (Req)?"

pasos:
  - "Utilizar la fórmula para dos resistencias: 1/Req = 1/R1 + 1/R2"
  - "Calcular: 1/Req = 1/10 + 1/10 = 2/10"
  - "Invertir el resultado: Req = 10/2 = 5 Ω"

explicacion: |
  En un circuito en paralelo, la resistencia equivalente siempre es menor que la resistencia más pequeña del circuito. En este caso, 1/Req = 1/10 + 1/10 = 0.2, por lo tanto Req = 1/0.2 = 5 Ω.
```

### 7 — Tensión en paralelo

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

### 8 — Corriente en ramas paralelas

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

respuesta: "3 A"
tipo: mc

opciones_explicitas: ["3 A", "2 A", "5 A"]

enunciado: "Se tiene una fuente de {v_total}V conectada a dos resistencias en paralelo: R1 = {r1} Ω y R2 = {r2} Ω. ¿Cuál es la corriente que circula por la rama de la resistencia R1?"

pasos:
  - "Calcular la corriente en la rama 1 usando la Ley de Ohm: I1 = V / R1"
  - "I1 = 12V / 4 Ω = 3A"
  - "Calcular la corriente en la rama 2: I2 = 12V / 6 Ω = 2A"
  - "Verificar la corriente total: I_total = 3A + 2A = 5A"

explicacion: |
  La corriente total se divide entre las ramas. Usando I = V/R, la corriente en la primera rama es 12/4 = 3A.
```

### 9 — Cálculo de corriente total

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
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un circuito tiene dos resistencias en paralelo de {r1} Ω y {r2} Ω. Si se aplica una tensión de {v}V, ¿cuál es la corriente total suministrada por la fuente?"

pasos:
  - "Calcular la resistencia equivalente: 1/Req = 1/12 + 1/6 = 1/12 + 2/12 = 3/12, entonces Req = 4 Ω"
  - "Calcular la corriente total con la Ley de Ohm: I_total = V / Req"
  - "I_total = 12V / 4 Ω = 3A"

explicacion: |
  Primero hallamos la Req que es 4 Ω. Luego, aplicamos I = V/R, resultando en 12/4 = 3A.
```

### 10 — Pasos para resolver un circuito complejo

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "avanzado"
  tags: ["procedimiento", "metodología"]

opciones_explicitas: ["Calcular R_eq", "Calcular I_total", "Calcular tensiones"]

respuesta_orden: ["Calcular R_eq", "Calcular I_total", "Calcular tensiones"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para determinar la corriente que circula por una rama específica en un circuito de resistencias en paralelo con una fuente de tensión conocida:"

explicacion: |
  Para resolver circuitos en paralelo, el orden lógico es: 1. Hallar la resistencia equivalente de la red para entender el sistema, 2. Calcular la corriente total de la fuente, 3. Usar la tensión (que es constante) para hallar la corriente de cada rama individual.
```

### 11 — ¿Resistencia total en paralelo?

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

### 12 — Tensión en ramas paralelas

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

### 13 — Cálculo de corriente total

```
metadata:
  materia: "fisica"
  tema: "circuitas_en_paralelo"
  nivel: "intermedio"
  tags: ["ley_de_ohm", "corriente", "paralelo"]

variables:
  escenario: uno_de([[12.0, 2.0, 4.0], [24.0, 6.0, 3.0], [9.0, 3.0, 9.0]])
  v: escenario[0]
  r1: escenario[1]
  r2: escenario[2]
  r_eq: (r1 * r2) / (r1 + r2)

respuesta: v / r_eq
tipo: completar
tolerancia_abs: 0.01

enunciado: "Se tiene una fuente de tensión de {v} V conectada a dos resistencias en paralelo de {r1} Ω y {r2} Ω. Calcule la corriente total suministrada por la fuente en Amperes (A)."

pasos:
  - "Calcular la resistencia equivalente: Req = (R1 · R2) / (R1 + R2)"
  - "Aplicar la Ley de Ohm: I_total = V / Req"

explicacion: |
  Req = ({r1} · {r2}) / ({r1} + {r2}) = {r_eq} Ω.
  I_total = {v} / {r_eq} = {v / r_eq} A.
```

### 14 — Comportamiento de la corriente

```
metadata:
  materia: "fisica"
  tema: "circuitas_en_paralelo"
  nivel: "intermedio"
  tags: ["corriente", "resistencia", "paralelo"]

respuesta: "mayor"
tipo: "completar"
respuestas_validas:
  - "mayor"
  - "menor"
  - "igual"

enunciado: "Si en un circuito en paralelo se añade una tercera resistencia en paralelo a las dos ya existentes, la corriente total que sale de la fuente será ___ que la corriente del circuito original."

explicacion: |
  Al añadir una resistencia en paralelo, la resistencia equivalente total disminuye. Según la Ley de Ohm ($I = V/R$), si la tensión $V$ es constante y $R$ disminuye, la corriente total $I$ debe aumentar.
```

### 15 — Orden de procesos de análisis

```
metadata:
  materia: "fisica"
  tema: "circuitas_en_paralelo"
  nivel: "intermedio"
  tags: ["analisis", "pasos", "metodologia"]

tipo: ordenar
opciones_explicitas: ["Calcular R equivalente", "Calcular corriente total", "Calcular corrientes individuales", "Calcular tensión en cada rama"]
respuesta_orden: ["Calcular R equivalente", "Calcular corriente total", "Calcular corrientes individuales", "Calcular tensión en cada rama"]

enunciado: "Para analizar un circuito con una fuente de tensión y tres resistencias en paralelo, ordene los pasos lógicos para determinar la corriente que circula por la rama de mayor resistencia:"

explicacion: |
  Para resolver circuitos complejos, primero se simplifica el circuito (calculando la resistencia equivalente o la corriente total) y luego se desglosa la información hacia las ramas individuales para hallar los valores específicos.
```

### 16 — Diferencia de tensión en paralelo

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "basico"
  tags: ["electricidad", "tension"]

respuesta: verdadero
tipo: vf

enunciado: "En un circuito en paralelo, la diferencia de potencial (tensión) entre dos puntos es la misma para todas las ramas en comparación con un circuito en serie donde la tensión se divide entre los componentes."

explicacion: |
  En un circuito en paralelo, todos los componentes están conectados a los mismos dos nodos, por lo que la tensión es idéntica para todos. En serie, la tensión total se reparte entre los componentes.
```

### 17 — Resistencia equivalente en paralelo

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "intermedio"
  tags: ["resistencia", "ley_de_ohm"]

variables:
  escenario: uno_de([[10.0, 5.0], [20.0, 10.0], [30.0, 15.0]])

respuesta: escenario[1]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si tenemos dos resistencias idénticas en paralelo, cada una con un valor de {escenario[0]} Ω, ¿cuál es el valor de la resistencia equivalente del sistema?"

pasos:
  - "Identificar que para dos resistencias iguales en paralelo, la resistencia equivalente es la mitad de una de ellas."
  - "Aplicar fórmula: 1/Req = 1/R1 + 1/R2."

explicacion: |
  La resistencia equivalente en paralelo siempre es menor que la resistencia más pequeña del circuito. Para R = {escenario[0]} Ω, Req = {escenario[0]} / 2 = {escenario[1]} Ω.
```

### 18 — Comportamiento de la corriente

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "intermedio"
  tags: ["corriente", "ley_de_kirchhoff"]

respuesta: "se divide"
tipo: completar
respuestas_validas:
  - "se divide"
  - "se reparte"
  - "se fragmenta"

enunciado: "A diferencia de un circuito en serie donde la corriente es la misma en todos los puntos, en un circuito en paralelo la corriente total se ___ entre las distintas ramas."

explicacion: |
  Según la Ley de Corrientes de Kirchhoff, la corriente que entra a un nodo debe ser igual a la suma de las corrientes que salen de él, lo que significa que la corriente se reparte por las ramas disponibles.
```

### 19 — Comparación de resistencia total

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "basico"
  tags: ["resistencia", "comparacion"]

respuesta: "menor"
tipo: mc
opciones_explicitas: ["mayor", "menor", "igual"]

enunciado: "Al añadir una nueva resistencia en paralelo a un circuito ya existente, la resistencia total del circuito es ___ que la resistencia que había antes."

explicacion: |
  Añadir una rama en paralelo es como ofrecer un camino adicional para el flujo de carga; esto facilita el paso de la corriente y, por lo tanto, disminuye la resistencia total.
```

### 20 — Orden de dependencias de corriente

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "avanzado"
  tags: ["corriente", "resistencia"]

tipo: ordenar
opciones_explicitas: ["corriente total", "corriente en la resistencia de 2 Ω", "corriente en la resistencia de 5 Ω"]
respuesta_orden: ["corriente total", "corriente en la resistencia de 2 Ω", "corriente en la resistencia de 5 Ω"]

enunciado: "En un circuito en paralelo con una fuente de tensión de 10 V y dos resistencias de 2 Ω y 5 Ω, ordena estas magnitudes de MAYOR a MENOR corriente:"

explicacion: |
  1. La corriente total es la suma de las corrientes de las ramas, por lo tanto es la mayor.
  2. A menor resistencia, mayor corriente (I = V/R): la rama de 2 Ω tiene más corriente que la de 5 Ω.
  3. Orden: corriente total, luego la rama de 2 Ω, luego la rama de 5 Ω.
```

### 21 — Resistencia equivalente en paralelo

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "intermedio"
  tags: ["resistencia", "paralelo", "calculo"]

variables:
  datos: [[10.0, 5.0], [20.0, 6.666666666666667], [30.0, 15.0]]
  idx: uno_de([0, 1, 2])
  R1: datos[idx][0]
  R_eq: datos[idx][1]

enunciado: "En una instalación eléctrica doméstica, dos resistencias se conectan en paralelo. Si la primera resistencia es de {R1} $\\Omega$ y la resistencia equivalente del circuito es de {R_eq} $\\Omega$, ¿cuál es el valor de la segunda resistencia?"

respuesta: (R1 * R_eq) / (R1 - R_eq)
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  Para resistencias en paralelo, la fórmula es: 1/R_eq = 1/R1 + 1/R2.
  Despejando R2: R2 = (R1 * R_eq) / (R1 - R_eq).
```

### 22 — Tensión en paralelo

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

### 23 — Corriente en una rama

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "intermedio"
  tags: ["corriente", "ley_de_ohm"]

variables:
  datos: [[12.0, 3.0, "4.0 A"], [24.0, 6.0, "4.0 A"], [10.0, 5.0, "2.0 A"]]
  idx: uno_de([0, 1, 2])
  V: datos[idx][0]
  R: datos[idx][1]

enunciado: "En un circuito en paralelo con una fuente de {V} V, una de las ramas tiene una resistencia de {R} $\\Omega$. ¿Cuál es la intensidad de corriente que circula por esa rama específica?"

opciones_explicitas: ["0.5 A", "2.0 A", "4.0 A", "6.0 A"]
respuesta: datos[idx][2]
tipo: mc

explicacion: |
  Usando la Ley de Ohm: I = V / R. En este caso, {V} / {R} = {datos[idx][2]}.
```

### 24 — Comportamiento de la corriente total

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

### 25 — Orden de pasos para análisis de circuito

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "basico"
  tags: ["metodologia", "procedimiento"]

opciones_explicitas: ["Calcular la resistencia equivalente", "Identificar las tensiones de cada rama", "Sumar las corrientes de cada rama para obtener la total"]

respuesta_orden: ["Identificar las tensiones de cada rama", "Calcular la resistencia equivalente", "Sumar las corrientes de cada rama para obtener la total"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para analizar un circuito en paralelo y hallar la corriente total si conocemos las resistencias y el voltaje de la fuente:"

explicacion: |
  1. Primero verificas que la tensión sea la misma en todas las ramas.
  2. Calculas la resistencia equivalente o las corrientes individuales.
  3. Sumas las corrientes para obtener la corriente total del sistema.
```
