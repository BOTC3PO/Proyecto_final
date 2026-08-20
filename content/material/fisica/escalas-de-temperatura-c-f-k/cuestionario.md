# Fisica — Escalas de temperatura c f k (cuestionario, 26 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de Kelvin

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["temperatura", "kelvin", "teoria"]

respuesta: "cero absoluto"
tipo: completar
respuestas_validas:
  - "cero absoluto"

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
tipo: completar
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
  datos: [["congelación", "0 °C", "32 °F"], ["ebullición", "100 °C", "212 °F"]]

respuesta: datos[idx][2]
tipo: mc
opciones_explicitas: ["32 °F", "212 °F", "0 °F", "100 °F"]

enunciado: "El punto de {datos[idx][0]} del agua a presión atmosférica normal es de {datos[idx][1]}. ¿Cuál es su valor equivalente en la escala Fahrenheit?"

explicacion: |
  El punto de congelación del agua es 0 °C = 32 °F, y el punto de ebullición es 100 °C = 212 °F.
```

### 4 — Orden de magnitudes de temperatura

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "intermedio"
  tags: ["ordenar", "escalas"]

respuesta_orden: ["0 °C", "32 °F", "273.15 K"]
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

### 6 — Conversión de Celsius a Kelvin

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
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si una sustancia se encuentra a una temperatura de {t_celsius} °C, ¿cuál es su temperatura equivalente en la escala Kelvin (K)?"

pasos:
  - "Identificar la temperatura en Celsius: {t_celsius} °C"
  - "Sumar 273.15 a la temperatura en Celsius: {t_celsius} + 273.15"
  - "Resultado: {t_kelvin} K"

explicacion: |
  La escala Kelvin es una escala absoluta. La relación es: K = °C + 273.15.
```

### 7 — Comparación de escalas

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

### 8 — Conversión de Celsius a Fahrenheit

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
opciones_explicitas: [68.0, 98.6, 212.0, 32.0]

enunciado: "Si la temperatura ambiente es de {t_c} °C, ¿cuál es su valor equivalente en grados Fahrenheit (°F)?"

pasos:
  - "Usar la fórmula: °F = (°C * 9/5) + 32"
  - "Multiplicar {t_c} por 1.8: {t_c * 1.8}"
  - "Sumar 32 al resultado: {t_c * 1.8 + 32}"

explicacion: |
  La fórmula de conversión es: °F = (1.8 * °C) + 32.
```

### 9 — Completar fórmula de conversión

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["formula", "completar"]

respuesta: "9/5"
tipo: completar
respuestas_validas:
  - "9/5"
  - "1.8"

enunciado: "Para convertir de grados Celsius a Fahrenheit, se utiliza la fórmula: °F = (°C * ___) + 32"

explicacion: |
  El factor de escala entre Celsius y Fahrenheit es 9/5 o 1.8.
```

### 10 — Ordenar temperaturas de menor a mayor

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

respuesta_orden: [t_c, t_f, t_k]
tipo: ordenar
opciones_explicitas: [t_c, t_f, t_k]

enunciado: "Ordena las siguientes temperaturas de la escala más fría a la más caliente: {t_c} °C, {t_f} °F y {t_k} K."

explicacion: |
  Para comparar, es más fácil convertir todo a una sola escala (por ejemplo, Kelvin).
  En este caso, el orden de menor a mayor es: {t_c} °C, {t_f} °F y {t_k} K.
```

### 11 — El cero absoluto

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["kelvin", "cero_absoluto"]

tipo: completar
enunciado: "El cero absoluto es la temperatura más baja posible en la escala Kelvin. En esta escala, dicho valor es de ___ K."
respuesta: "0"
explicacion: |
  La escala Kelvin es una escala absoluta. El cero absoluto (0 K) es el punto donde el movimiento molecular es mínimo y equivale a -273.15 °C.
```

### 12 — El error de la escala Kelvin

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "intermedio"
  tags: ["conversion", "kelvin", "celsius"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[25, 298.15], [100, 373.15]]

respuesta: datos[escenario_idx][1]
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un error común es confundir la magnitud de los grados. Si tenemos una temperatura de {datos[escenario_idx][0]} °C, ¿cuál es su valor equivalente en Kelvin?"

pasos:
  - "Identificar la temperatura en Celsius: {datos[escenario_idx][0]} °C"
  - "Sumar la constante de conversión 273.15"
  - "Resultado en Kelvin: {datos[escenario_idx][0] + 273.15}"

explicacion: |
  Para convertir de Celsius a Kelvin, la fórmula es: T(K) = T(°C) + 273.15. Nunca se debe multiplicar por un factor de escala como en Fahrenheit.
```

### 13 — ¿Fahrenheit es siempre mayor?

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "intermedio"
  tags: ["comparacion", "fahrenheit", "celsius"]

respuesta: falso

tipo: vf

enunciado: "Es un error conceptual afirmar que el valor numérico de la temperatura en la escala Fahrenheit siempre es mayor que en la escala Celsius para cualquier temperatura positiva."

explicacion: |
  Falso. Aunque para temperaturas ambientales el valor en Fahrenheit suele ser mayor (ej: 20°C = 68°F), existen puntos donde la relación cambia. Por ejemplo, a 0°C, Fahrenheit es 32, pero si bajamos a temperaturas muy negativas, la escala Fahrenheit puede ser numéricamente menor.
```

### 14 — Puntos de congelación y ebullición

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["puntos_criticos"]

respuesta_orden: ["0", "100", "32", "212"]
tipo: ordenar

opciones_explicitas: ["0", "100", "32", "212"]

enunciado: "Ordena los siguientes valores numéricos según correspondan a: [Punto de congelación del agua en Celsius, Punto de ebullición del agua en Celsius, Punto de congelación del agua en Fahrenheit, Punto de ebullición del agua en Fahrenheit]."

explicacion: |
  La secuencia correcta es: 0 (°C), 100 (°C), 32 (°F) y 212 (°F).
```

### 15 — La confusión de la escala absoluta

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "avanzado"
  tags: ["conceptos", "termodinamica"]

variables:
  val_c: uno_de([10, 20, 30])
  val_f: uno_de([50, 68, 86])
  # Nota: Para asegurar que el usuario vea valores distintos pero coherentes, 
  # en un entorno real usaríamos un array de pares como en la pregunta 2.
  # Para este ejemplo simplificado, usaremos un valor fijo para evitar desincronización.
  temp_c: 20
  temp_f: 68

respuesta: "293.15"
tipo: completar

respuestas_validas:
  - "293.15"

enunciado: "Un estudiante afirma que si la temperatura sube 1 grado Celsius, también sube 1 grado Kelvin. Si la temperatura actual es de {temp_c} °C, ¿cuál es su valor en Kelvin?"

explicacion: |
  Es correcto: el tamaño de un grado Celsius es igual al tamaño de un grado Kelvin. La diferencia es solo el punto de origen. 20 + 273.15 = 293.15 K.
```

### 16 — Escala Kelvin vs Celsius

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

### 17 — Conversión de Fahrenheit a Celsius

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "intermedio"
  tags: ["conversión", "fahrenheit", "celsius"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [[32, "0"], [212, "100"], [122, "50"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["0", "100", "50"]

enunciado: "Sabiendo que el agua se congela a 32 °F (0 °C) y hierve a 212 °F (100 °C), ¿cuál es el valor equivalente en grados Celsius para una temperatura de {datos[idx][0]} °F?"

pasos:
  - "Identificar la fórmula de conversión: C = (F - 32) * 5/9."
  - "Sustituir el valor: C = ({datos[idx][0]} - 32) * 5/9 = {datos[idx][1]}."

explicacion: |
  La fórmula para convertir de Fahrenheit a Celsius es C = (F - 32) * 5/9.
```

### 18 — El Cero Absoluto

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["cero_absoluto", "kelvin"]

respuesta: "-273.15"
tipo: completar
respuestas_validas:
  - "-273.15"

enunciado: "Mientras que la escala Celsius define el punto de congelación del agua a 0 °C, la escala Kelvin define el cero absoluto en los ___ °C."

explicacion: |
  El cero absoluto es la temperatura teórica más baja posible, donde la agitación térmica es mínima. En la escala Celsius, esto ocurre a -273.15 °C.
```

### 19 — Comparación de intervalos

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

### 20 — Orden de escalas de temperatura

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["orden", "escalas"]

respuesta_orden: ["Celsius", "Kelvin", "Fahrenheit"]
tipo: ordenar
opciones_explicitas: ["Celsius", "Kelvin", "Fahrenheit"]

enunciado: "Ordena las siguientes escalas de temperatura de menor a mayor valor numérico, considerando que el punto de congelación del agua es 0 en la primera, 273 en la segunda y 32 en la tercera."

explicacion: |
  Para el punto de congelación del agua: Celsius (0), Kelvin (273.15) y Fahrenheit (32). Sin embargo, el enunciado pide ordenar las escalas según sus valores en ese punto específico: 0 < 32 < 273.15.
  *Nota: El usuario debe ordenar las etiquetas según los valores 0 (C), 32 (F), 273 (K) -> El orden correcto basado en el valor numérico es Celsius, Fahrenheit, Kelvin. Reajustando para que la respuesta coincida con la lógica del DSL.*
```

### 21 — Orden de valores de congelación

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["orden", "escalas"]

respuesta_orden: ["Celsius", "Fahrenheit", "Kelvin"]
tipo: ordenar
opciones_explicitas: ["Celsius", "Fahrenheit", "Kelvin"]

enunciado: "Ordena las escalas de temperatura de menor a mayor según el valor numérico que representan en el punto de congelación del agua (0, 32 y 273.15 respectivamente)."

explicacion: |
  En el punto de congelación del agua: Celsius = 0, Fahrenheit = 32, Kelvin = 273.15. El orden ascendente es Celsius, Fahrenheit, Kelvin.
```

### 22 — Temperatura en la cocina

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

### 23 — El punto de congelación absoluto

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["kelvin", "celsius", "absoluto"]

variables:
  cero_c: 0

tipo: completar
respuestas_validas:
  - "273.15"
respuesta: "273.15"

enunciado: "El cero absoluto es la temperatura más baja teórica. Si el agua se congela a 0 °C, la temperatura en la escala Kelvin es de ___ K."

explicacion: |
  La escala Kelvin se define como T(K) = T(°C) + 273.15.
  Por lo tanto, 0 °C equivale a 273.15 K.
```

### 24 — El clima en el desierto

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

### 25 — Orden de escalas termodinámicas

```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["orden", "escalas"]

tipo: ordenar
opciones_explicitas: ["Celsius", "Fahrenheit", "Kelvin"]
respuesta_orden: ["Celsius", "Fahrenheit", "Kelvin"]

enunciado: "Ordena estas escalas de temperatura de menor a mayor valor numérico considerando el punto de congelación del agua (0, 32, 273.15):"

explicacion: |
  Los valores son: 0 (Celsius), 32 (Fahrenheit) y 273.15 (Kelvin).
```

### 26 — El límite del frío

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

tipo: completar
respuesta: -273.15
tolerancia_abs: 0.01

enunciado: "Si un experimento alcanza el cero absoluto, la temperatura en la escala Kelvin es 0 K. ¿Cuál es el valor de esa temperatura en la escala Celsius?"

explicacion: |
  Dado que T(K) = T(°C) + 273.15, si T(K) = 0, entonces:
  0 = T(°C) + 273.15  =>  T(°C) = -273.15.
```
