### 1 — Diferencia de tensión en paralelo
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

### 2 — Resistencia equivalente en paralelo
```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "intermedio"
  tags: ["resistencia", "ley_de_ohm"]

variables:
  escenario: uno_de([
    [10.0, 5.0],
    [20.0, 10.0],
    [30.0, 15.0]
  ])

respuesta: escenario[0][1]
tipo: input
tolerancia_abs: 0.01

enunciado: "Si tenemos dos resistencias idénticas en paralelo, cada una con un valor de {escenario[0][0]} $\Omega$, ¿cuál es el valor de la resistencia equivalente del sistema?"

pasos:
  - "Identificar que para dos resistencias iguales en paralelo, la resistencia equivalente es la mitad de una de ellas."
  - "Aplicar fórmula: $1/R_{eq} = 1/R_1 + 1/R_2$."

explicacion: |
  La resistencia equivalente en paralelo siempre es menor que la resistencia más pequeña del circuito. En este caso, $1/R_{eq} = 1/10 + 1/10 = 2/10$, por lo tanto $R_{eq} = 5 \Omega$.
```

### 3 — Comportamiento de la corriente
```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "intermedio"
  tags: ["corriente", "ley_de_kirchhoff"]

respuesta: "se divide"
tipo: completar
respuestas_validas: ["se divide", "se reparte", "se fragmenta"]

enunciado: "A diferencia de un circuito en serie donde la corriente es la misma en todos los puntos, en un circuito en paralelo la corriente total se ___ entre las distintas ramas."

explicacion: |
  Según la Ley de Corrientes de Kirchhoff, la corriente que entra a un nodo debe ser igual a la suma de las corrientes que salen de él, lo que significa que la corriente se reparte por las ramas disponibles.
```

### 4 — Comparación de resistencia total
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

### 5 — Orden de dependencias de corriente
```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "avanzado"
  tags: ["corriente", "resistencia"]

variables:
  caso: uno_de([
    [10.0, 2.0, 5.0],
    [10.0, 5.0, 2.0]
  ])

respuesta: ["10.0", "2.0", "5.0"]
tipo: ordenar
opciones_explicitas: ["10.0", "2.0", "5.0"]

enunciado: "En un circuito en paralelo con una fuente de tensión de {caso[0][0]} V y dos resistencias de {caso[0][1]} $\Omega$ y {caso[0][2]} $\Omega$, ordena las siguientes magnitudes de MAYOR a MENOR corriente de rama (en Amperios): {caso[0][1]} $\Omega$ , {caso[0][2]} $\Omega$ , y la corriente total."

explicacion: |
  1. La corriente total es la suma de las corrientes de las ramas.
  2. A menor resistencia, mayor corriente ($I = V/R$).
  3. Por lo tanto, la corriente total es la mayor, luego la corriente de la resistencia de 2 $\Omega$, y finalmente la de la resistencia de 5 $\Omega$.
```