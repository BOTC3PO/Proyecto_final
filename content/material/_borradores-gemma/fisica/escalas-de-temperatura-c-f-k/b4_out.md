### 1 — Escala Kelvin vs Celsius
```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["temperatura", "kelvin", "celsius"]

respuesta: falso
tipo: vf

enunciado: "La escala Kelvin se considera una escala absoluta porque su valor de cero absoluto coincide con el cero de la escala Celsius."

explicacion: |
  El cero absoluto en la escala Kelvin es 0 K, lo que equivale a -273.15 °C. La escala Celsius tiene su punto de referencia en el punto de fusión del agua, no en el cero absoluto.
```

### 2 — Conversión de Fahrenheit a Celsius
```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "intermedio"
  tags: ["conversión", "fahrenheit", "celsius"]

variables:
  escenario: uno_de([[32, 212], [32, 32], [32, 50]])

respuesta: escenario[2]
tipo: mc
opciones_explicitas: ["0", "100", "50"]

enunciado: "Si un termómetro marca {escenario[0]} °F en el punto de congelación del agua y {escenario[1]} °F en el punto de ebullición, ¿cuál es el valor equivalente en grados Celsius para la temperatura de {escenario[2]} °F?"

pasos:
  - "Identificar los valores de referencia en Fahrenheit: 32 y 212."
  - "Usar la fórmula de conversión: C = (F - 32) * 5/9."
  - "Sustituir el valor deseado: (50 - 32) * 5/9 = 18 * 5/9 = 10."

explicacion: |
  La fórmula para convertir de Fahrenheit a Celsius es C = (F - 32) * 5/9. Para 50 °F: (50 - 32) * 5/9 = 18 * 5/9 = 10 °C.
```

### 3 — El Cero Absoluto
```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["cero_absoluto", "kelvin"]

respuesta: "-273.15"
tipo: completar
respuestas_validas: ["-273.15"]

enunciado: "Mientras que la escala Celsius define el punto de congelación del agua a 0 °C, la escala Kelvin define el cero absoluto en los ___ °C."

explicacion: |
  El cero absoluto es la temperatura teórica más baja posible, donde la agitación térmica es mínima. En la escala Celsius, esto ocurre a -273.15 °C.
```

### 4 — Comparación de intervalos
```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "avanzado"
  tags: ["intervalos", "escalas", "comparación"]

respuesta: "un_intervalo_de_100_grados_celsius_es_igual_a_un_intervalo_de_180_grados_fahrenheit"
tipo: mc
opciones_explicitas: ["un_intervalo_de_100_grados_celsius_es_igual_a_un_intervalo_de_180_grados_fahrenheit", "un_intervalo_de_100_grados_celsius_es_igual_a_un_intervalo_de_100_grados_fahrenheit", "un_intervalo_de_100_grados_celsius_es_igual_a_un_intervalo_de_32_grados_fahrenheit"]

enunciado: "¿Cuál de las siguientes afirmaciones describe correctamente la relación entre el tamaño de un grado en ambas escalas?"

explicacion: |
  La escala Celsius divide el rango entre el hielo y el vapor en 100 partes, mientras que la Fahrenheit lo divide en 180 partes. Por lo tanto, un cambio de 100 °C equivale a un cambio de 180 °F.
```

### 5 — Orden de escalas de temperatura
```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["orden", "escalas"]

respuesta: ["Celsius", "Kelvin", "Fahrenheit"]
tipo: ordenar
opciones_explicitas: ["Celsius", "Kelvin", "Fahrenheit"]

enunciado: "Ordena las siguientes escalas de temperatura de menor a mayor valor numérico, considerando que el punto de congelación del agua es 0 en la primera, 273 en la segunda y 32 en la tercera."

explicacion: |
  Para el punto de congelación del agua: Celsius (0), Kelvin (273.15) y Fahrenheit (32). Sin embargo, el enunciado pide ordenar las escalas según sus valores en ese punto específico: 0 < 32 < 273.15.
  *Nota: El usuario debe ordenar las etiquetas según los valores 0 (C), 32 (F), 273 (K) -> El orden correcto basado en el valor numérico es Celsius, Fahrenheit, Kelvin. Reajustando para que la respuesta coincida con la lógica del DSL.*

```
(Corrección de la lógica de la 5 para cumplir con el orden de valores 0, 32, 273)

### 5 — Orden de valores de congelación
```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["orden", "escalas"]

respuesta: ["Celsius", "Fahrenheit", "Kelvin"]
tipo: ordenar
opciones_explicitas: ["Celsius", "Fahrenheit", "Kelvin"]

enunciado: "Ordena las escalas de temperatura de menor a mayor según el valor numérico que representan en el punto de congelación del agua (0, 32 y 273.15 respectivamente)."

explicacion: |
  En el punto de congelación del agua: Celsius = 0, Fahrenheit = 32, Kelvin = 273.15. El orden ascendente es Celsius, Fahrenheit, Kelvin.
```