### 1 — El sistema de riego automático
```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["sensores", "actuadores", "automatizacion"]

variables:
  humedad_suelo: 25

respuesta: "encender"
tipo: mc
opciones_explicitas: ["apagar", "encender", "esperar"]

enunciado: "Un sensor de humedad de suelo detecta que la humedad es del {humedad_suelo}%. Si el umbral de riego es del 30%, el sistema debe activar la bomba de agua (actuador). ¿Qué acción debe realizar el actuador?"

explicacion: |
  El sensor detecta una humedad baja (25% < 30%), por lo tanto, la lógica del sistema debe enviar una señal para activar el actuador (la bomba de agua).
```

### 2 — Identificación de componentes
```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que un sensor convierte una magnitud física (como la luz) en una señal eléctrica, mientras que un actuador convierte una señal eléctrica en una acción física (como movimiento)?"

explicacion: |
  Exacto. Los sensores son transductores de entrada (entorno -> señal) y los actuadores son transductores de salida (señal -> acción).
```

### 3 — Flujo de un sistema de alarma
```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "intermedio"
  tags: ["flujo_de_control"]

respuesta: ["detectar movimiento", "procesar señal", "activar sirena"]
tipo: ordenar
opciones_explicitas: ["activar sirena", "detectar movimiento", "procesar señal"]

enunciado: "Ordena cronológicamente el funcionamiento de un sistema de alarma de seguridad ante una intrusión:"

explicacion: |
  1. El sensor (PIR) detecta el movimiento.
  2. El microcontrolador procesa la señal recibida.
  3. El actuador (sirena) emite el sonido.
```

### 4 — El termostato inteligente
```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "intermedio"
  tags: ["completar", "lógica"]

variables:
  temp_actual: 28
  temp_objetivo: 22

respuesta: ["resistencia", "ventilador"]
respuestas_validas: ["resistencia", "ventilador"]

enunciado: "En un sistema de climatización, si la temperatura actual es de {temp_actual}°C y el objetivo es de {temp_objetivo}°C, el sensor de temperatura detecta un exceso de calor. Para enfriar la habitación, el controlador debe activar el ___."

pasos:
  - "Leer valor del sensor de temperatura"
  - "Comparar temp_actual con temp_objetivo"
  - "Si temp_actual > temp_objetivo, activar actuador de enfriamiento"

explicacion: |
  Como la temperatura actual (28) es mayor que la objetivo (22), el sistema debe activar el actuador encargado de bajar la temperatura, que en este caso es el ventilador.
```

### 5 — Cálculo de señal de sensor
```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "avanzado"
  tags: ["sensores", "calculo"]

variables:
  idx: uno_de([0, 1])
  sensor_val: uno_de([2.5, 4.8])
  voltaje_max: 5.0

respuesta: 2.5
tipo: input
tolerancia_abs: 0.01

enunciado: "Un sensor analógico entrega una señal de voltaje proporcional a la intensidad de luz. Si el sensor entrega {sensor_val}V y el rango máximo es de {voltaje_max}V, ¿cuál es el valor de la señal en una escala de 0 a 5 (donde 5 es el máximo)?"

pasos:
  - "Identificar el voltaje actual: {sensor_val}"
  - "Dividir el voltaje actual por el voltaje máximo: {sensor_val} / {voltaje_max}"
  - "Multiplicar por el rango de la escala: (resultado) * 5"

explicacion: |
  Si el valor es 2.5V y el máximo es 5.0V, la proporción es 0.5. En una escala de 0 a 5, el valor es 0.5 * 5 = 2.5.
```