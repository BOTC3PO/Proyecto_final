### 1 — Temperatura en la cocina
```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["temperatura", "celsius", "fahrenheit"]

variables:
  escenario: uno_de([["40", "104"], ["100", "212"], ["0", "32"]])
  temp_c: escenario[0]
  temp_f: escenario[1]

tipo: mc
opciones_explicitas: ["104 °F", "212 °F", "32 °F", "100 °F"]
respuesta: temp_f + " °F"

enunciado: "Si una receta indica que el horno debe estar a {temp_c} °C, ¿cuál es la temperatura equivalente en la escala Fahrenheit?"

explicacion: |
  La fórmula de conversión es: °F = (°C * 9/5) + 32.
  Para {temp_c} °C: ({temp_c} * 1.8) + 32 = {temp_f} °F.
```

### 2 — El punto de congelación absoluto
```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["kelvin", "celsius", "absoluto"]

variables:
  cero_c: 0

tipo: completar
respuestas_validas: ["273.15"]
respuesta: "273.15"

enunciado: "El cero absoluto es la temperatura más baja teórica. Si el agua se congela a 0 °C, la temperatura en la escala Kelvin es de ___ K."

explicacion: |
  La escala Kelvin se define como T(K) = T(°C) + 273.15.
  Por lo tanto, 0 °C equivale a 273.15 K.
```

### 3 — El clima en el desierto
```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "intermedio"
  tags: ["kelvin", "celsius"]

variables:
  datos: [["50", "323.15"], ["25", "298.15"], ["10", "283.15"]]
  idx: uno_de([0,1,2])
  temp_c: datos[idx][0]
  temp_k: datos[idx][1]

tipo: vf
respuesta: verdadero

enunciado: "En un desierto la temperatura es de {temp_c} °C. ¿Es cierto que esto equivale a {temp_k} K?"

explicacion: |
  La relación es T(K) = T(°C) + 273.15.
  Como {temp_c} + 273.15 = {temp_k}, la afirmación es verdadera.
```

### 4 — Orden de escalas termodinámicas
```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["orden", "escalas"]

tipo: ordenar
opciones_explicitas: ["Celsius", "Fahrenheit", "Kelvin"]
respuesta: ["Celsius", "Fahrenheit", "Kelvin"]

enunciado: "Ordena estas escalas de temperatura de menor a mayor valor numérico considerando el punto de congelación del agua (0, 32, 273.15):"

explicacion: |
  Los valores son: 0 (Celsius), 32 (Fahrenheit) y 273.15 (Kelvin).
```

### 5 — El límite del frío
```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "avanzado"
  tags: ["kelvin", "celsius", "absoluto"]

variables:
  escenario: uno_de([[0, -273.15], [-10, -283.15], [-273.15, -273.15]])
  temp_k: escenario[0]
  temp_c: escenario[1]

tipo: input
respuesta: -273.15
tolerancia_abs: 0.01

enunciado: "Si un experimento alcanza el cero absoluto, la temperatura en la escala Kelvin es 0 K. ¿Cuál es el valor de esa temperatura en la escala Celsius?"

explicacion: |
  Dado que T(K) = T(°C) + 273.15, si T(K) = 0, entonces:
  0 = T(°C) + 273.15  =>  T(°C) = -273.15.
```