### 1 — Conversión de Celsius a Kelvin
```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["temperatura", "kelvin", "celsius"]

variables:
  escenario: uno_de([[25.0, 298.15], [0.0, 273.15], [100.0, 373.15], [-273.15, 0.0]])
  t_celsius: escenario[0]
  t_kelvin: escenario[1]

respuesta: t_kelvin
tipo: input
tolerancia_abs: 0.1

enunciado: "Si una sustancia se encuentra a una temperatura de {t_celsius} °C, ¿cuál es su temperatura equivalente en la escala Kelvin (K)?"

pasos:
  - "Identificar la temperatura en Celsius: {t_celsius} °C"
  - "Sumar 273.15 a la temperatura en Celsius: {t_celsius} + 273.15"
  - "Resultado: {t_kelvin} K"

explicacion: |
  La escala Kelvin es una escala absoluta. La relación es: K = °C + 273.15.
```

### 2 — Comparación de escalas
```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["booleano", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es cierto que el cero absoluto (-273.15 °C) equivale a 0 K?"

explicacion: |
  Correcto. La escala Kelvin comienza en el cero absoluto, que es el punto de menor energía térmica posible.
```

### 3 — Conversión de Celsius a Fahrenheit
```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "intermedio"
  tags: ["fahrenheit", "conversion"]

variables:
  escenario: uno_de([[20.0, 68.0], [37.0, 98.6], [100.0, 212.0], [0.0, 32.0]])
  t_c: escenario[0]
  t_f: escenario[1]

respuesta: t_f
tipo: mc
opciones_explicitas: ["68.0", "98.6", "212.0", "32.0"]

enunciado: "Si la temperatura ambiente es de {t_c} °C, ¿cuál es su valor equivalente en grados Fahrenheit (°F)?"

pasos:
  - "Usar la fórmula: °F = (°C * 9/5) + 32"
  - "Multiplicar {t_c} por 1.8: {t_c * 1.8}"
  - "Sumar 32 al resultado: {t_c * 1.8 + 32}"

explicacion: |
  La fórmula de conversión es: °F = (1.8 * °C) + 32.
```

### 4 — Completar fórmula de conversión
```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["formula", "completar"]

respuesta: "9/5"
tipo: completar
respuestas_validas: ["9/5", "1.8"]

enunciado: "Para convertir de grados Celsius a Fahrenheit, se utiliza la fórmula: °F = (°C * ___) + 32"

explicacion: |
  El factor de escala entre Celsius y Fahrenheit es 9/5 o 1.8.
```

### 5 — Ordenar temperaturas de menor a mayor
```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "intermedio"
  tags: ["ordenar", "comparacion"]

variables:
  escenario: uno_de([[0.0, 273.15, 32.0], [-50.0, 223.15, -58.0], [10.0, 283.15, 50.0]])
  t_c: escenario[0]
  t_k: escenario[1]
  t_f: escenario[2]

respuesta: [t_c, t_f, t_k]
tipo: ordenar
opciones_explicitas: [t_c, t_f, t_k]

enunciado: "Ordena las siguientes temperaturas de la escala más fría a la más caliente: {t_c} °C, {t_f} °F y {t_k} K."

explicacion: |
  Para comparar, es más fácil convertir todo a una sola escala (por ejemplo, Kelvin).
  En este caso, el orden de menor a mayor es: {t_c} °C, {t_f} °F y {t_k} K.
```