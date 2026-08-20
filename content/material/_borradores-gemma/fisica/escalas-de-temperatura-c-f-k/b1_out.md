### 1 — Definición de Kelvin
```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["temperatura", "kelvin", "teoria"]

respuesta: "cero absoluto"
tipo: completar
respuestas_validas: ["cero absoluto"]

enunciado: "La escala Kelvin se caracteriza por tener su punto de partida en el ___."

explicacion: |
  El cero absoluto (0 K) es la temperatura teórica más baja posible, donde el movimiento molecular es mínimo.
```

### 2 — Comparación de escalas
```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["celsius", "fahrenheit", "kelvin"]

respuesta: "falso"
tipo: vf

enunciado: "La escala Celsius y la escala Kelvin tienen el mismo tamaño de grado; es decir, un aumento de 1 °C equivale a un aumento de 1 K."

explicacion: |
  Es verdadero. Aunque sus puntos de origen son distintos (0 °C vs 273.15 K), el intervalo de una unidad es idéntico en ambas escalas.
```

### 3 — Puntos de congelación del agua
```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["agua", "puntos_criticos"]

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["0 °C", "32 °F", "273.15 K", "373.15 K"]

enunciado: "Considerando el punto de congelación del agua a presión atmosférica normal, ¿cuál es su valor en la escala Fahrenheit según el escenario seleccionado?"

variables_datos:
  datos: [["0 °C", "32 °F"], ["100 °C", "212 °F"]]

explicacion: |
  El punto de congelación del agua es 0 °C, que equivale a 32 °F o 273.15 K.
```

### 4 — Orden de magnitudes de temperatura
```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "intermedio"
  tags: ["ordenar", "escalas"]

respuesta: ["0 °C", "32 °F", "273.15 K"]
tipo: ordenar
opciones_explicitas: ["0 °C", "32 °F", "273.15 K"]

enunciado: "Ordena las siguientes representaciones de la temperatura de congelación del agua (en °C, °F y K) de menor valor numérico a mayor valor numérico."

explicacion: |
  Aunque representan la misma temperatura física, los valores numéricos son 0, 32 y 273.15 respectivamente.
```

### 5 — Escala Kelvin y el Cero Absoluto
```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["kelvin", "negativo"]

respuesta: falso
tipo: vf

enunciado: "En la escala Kelvin, es posible obtener valores de temperatura negativos."

explicacion: |
  Falso. La escala Kelvin es una escala absoluta que comienza en el cero absoluto, por lo que no existen valores negativos.
```