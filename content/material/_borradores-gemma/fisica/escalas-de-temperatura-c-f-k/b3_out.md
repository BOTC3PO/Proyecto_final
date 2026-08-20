### 1 — El cero absoluto
```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["kelvin", "cero_absoluto"]

respuesta: 0
tipo: mc
opciones_explicitas: ["0", "273.15", "-273.15", "-459.67"]

enunciado: "El cero absoluto es la temperatura más baja posible en la escala Kelvin. En esta escala, dicho valor es de ___ K."

explicacion: |
  La escala Kelvin es una escala absoluta. El cero absoluto (0 K) es el punto donde el movimiento molecular es mínimo y equivale a -273.15 °C.
```

### 2 — El error de la escala Kelvin
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
tipo: input
tolerancia_abs: 0.1

enunciado: "Un error común es confundir la magnitud de los grados. Si tenemos una temperatura de {datos[escenario_idx][0]} °C, ¿cuál es su valor equivalente en Kelvin?"

pasos:
  - "Identificar la temperatura en Celsius: {datos[escenario_idx][0]} °C"
  - "Sumar la constante de conversión 273.15"
  - "Resultado en Kelvin: {datos[escenario_idx][0] + 273.15}"

explicacion: |
  Para convertir de Celsius a Kelvin, la fórmula es: T(K) = T(°C) + 273.15. Nunca se debe multiplicar por un factor de escala como en Fahrenheit.
```

### 3 — ¿Fahrenheit es siempre mayor?
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

### 4 — Puntos de congelación y ebullición
```
metadata:
  materia: "fisica"
  tema: "escalas_de_temperatura"
  nivel: "basico"
  tags: ["puntos_criticos"]

respuesta: ["0", "100", "32", "212"]
tipo: ordenar

opciones_explicitas: ["0", "100", "32", "212"]

enunciado: "Ordena los siguientes valores numéricos según correspondan a: [Punto de congelación del agua en Celsius, Punto de ebullición del agua en Celsius, Punto de congelación del agua en Fahrenheit, Punto de ebullición del agua en Fahrenheit]."

explicacion: |
  La secuencia correcta es: 0 (°C), 100 (°C), 32 (°F) y 212 (°F).
```

### 5 — La confusión de la escala absoluta
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

respuestas_validas: ["293.15"]

enunciado: "Un estudiante afirma que si la temperatura sube 1 grado Celsius, también sube 1 grado Kelvin. Si la temperatura actual es de {temp_c} °C, ¿cuál es su valor en Kelvin?"

explicacion: |
  Es correcto: el tamaño de un grado Celsius es igual al tamaño de un grado Kelvin. La diferencia es solo el punto de origen. 20 + 273.15 = 293.15 K.
```