# Electronica — Sensores y actuadores (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de sensores

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["conceptos", "sensores"]

tipo: mc
opciones_explicitas: ["Un dispositivo que convierte una magnitud física en una señal eléctrica", "Un dispositivo que convierte una señal eléctrica en un movimiento mecánico", "Un dispositivo que almacena datos del entorno", "Un dispositivo que regula el voltaje de una fuente"]
respuesta: "Un dispositivo que convierte una magnitud física en una señal eléctrica"

enunciado: "Un sensor se define fundamentalmente como ___."
```

### 2 — Función de los actuadores

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["conceptos", "actuadores"]

tipo: vf
respuesta: falso

enunciado: "Los actuadores tienen la función principal de captar información del entorno para procesarla en un controlador."
```

### 3 — El ciclo de control

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "intermedio"
  tags: ["flujo_de_trabajo", "sistemas_combinados"]

variables:
  flujo: [["Sensor", "Controlador", "Actuador"], ["Actuador", "Controlador", "Sensor"], ["Sensor", "Actuador", "Controlador"]]
  idx: uno_de([0,1,2])

tipo: ordenar
opciones_explicitas: ["Sensor", "Controlador", "Actuador"]
respuesta_orden: ["Sensor", "Controlador", "Actuador"]

enunciado: "En un sistema automatizado típico, ordene los componentes según el flujo de información desde la captura hasta la acción física."

pasos:
  - "El sensor detecta el cambio en el entorno."
  - "El controlador procesa la señal recibida."
  - "El actuador ejecuta la acción física resultante."

explicacion: |
  El flujo lógico es: el sensor obtiene el dato, el controlador toma la decisión y el actuador realiza la acción.
```

### 4 — Clasificación de señales

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["señales", "salida"]

tipo: completar
respuestas_validas:
  - "analógica"
  - "digital"

enunciado: "Si un sensor entrega una señal que varía continuamente en el tiempo, se dice que es una señal ___; por el contrario, si solo puede tomar valores discretos, es una señal ___."

explicacion: |
  Las señales analógicas representan magnitudes continuas, mientras que las digitales representan estados discretos (como 0 y 1).
```

### 5 — Interacción en un sistema

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "intermedio"
  tags: ["sistemas", "integracion"]

variables:
  escenario: [["Luz", "Fotoresistencia", "LED"], ["Temperatura", "Termistor", "Ventilador"], ["Presión", "Célula de carga", "Motor"]]
  idx: uno_de([0,1,2])

tipo: mc
opciones_explicitas: ["Sensor -> Controlador -> Actuador", "Actuador -> Controlador -> Sensor", "Controlador -> Sensor -> Actuador"]
respuesta: "Sensor -> Controlador -> Actuador"

enunciado: "Considere el siguiente caso: Un {escenario[idx][0]} es detectado por un {escenario[idx][1]}, lo que provoca que un {escenario[idx][2]} se active. ¿Cuál es la secuencia correcta de trabajo?"

explicacion: |
  El sensor ({escenario[idx][1]}) capta la magnitud ({escenario[idx][0]}), el controlador procesa y el actuador ({escenario[idx][2]}) produce la acción.
```

### 6 — El sistema de riego automático

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

### 7 — Identificación de componentes

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

### 8 — Flujo de un sistema de alarma

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "intermedio"
  tags: ["flujo_de_control"]

respuesta_orden: ["detectar movimiento", "procesar señal", "activar sirena"]
tipo: ordenar
opciones_explicitas: ["activar sirena", "detectar movimiento", "procesar señal"]

enunciado: "Ordena cronológicamente el funcionamiento de un sistema de alarma de seguridad ante una intrusión:"

explicacion: |
  1. El sensor (PIR) detecta el movimiento.
  2. El microcontrolador procesa la señal recibida.
  3. El actuador (sirena) emite el sonido.
```

### 9 — El termostato inteligente

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
respuestas_validas:
  - "resistencia"
  - "ventilador"

enunciado: "En un sistema de climatización, si la temperatura actual es de {temp_actual}°C y el objetivo es de {temp_objetivo}°C, el sensor de temperatura detecta un exceso de calor. Para enfriar la habitación, el controlador debe activar el ___."

pasos:
  - "Leer valor del sensor de temperatura"
  - "Comparar temp_actual con temp_objetivo"
  - "Si temp_actual > temp_objetivo, activar actuador de enfriamiento"

explicacion: |
  Como la temperatura actual (28) es mayor que la objetivo (22), el sistema debe activar el actuador encargado de bajar la temperatura, que en este caso es el ventilador.
```

### 10 — Cálculo de señal de sensor

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
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un sensor analógico entrega una señal de voltaje proporcional a la intensidad de luz. Si el sensor entrega {sensor_val}V y el rango máximo es de {voltaje_max}V, ¿cuál es el valor de la señal en una escala de 0 a 5 (donde 5 es el máximo)?"

pasos:
  - "Identificar el voltaje actual: {sensor_val}"
  - "Dividir el voltaje actual por el voltaje máximo: {sensor_val} / {voltaje_max}"
  - "Multiplicar por el rango de la escala: (resultado) * 5"

explicacion: |
  Si el valor es 2.5V y el máximo es 5.0V, la proporción es 0.5. En una escala de 0 a 5, el valor es 0.5 * 5 = 2.5.
```

### 11 — El rol de los componentes

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["conceptos_basicos", "sensores", "actuadores"]

respuesta: "actuador"
tipo: mc
opciones_explicitas: ["sensor", "actuador", "procesador", "cable"]

enunciado: "Si un sistema electrónico detecta un cambio en la temperatura y luego enciende un ventilador para enfriar el ambiente, el ventilador está cumpliendo la función de un ___."

explicacion: |
  Un sensor capta información del entorno (entrada), mientras que un actuador convierte una señal eléctrica en una acción física (salida), como mover un motor o encender una luz.
```

### 12 — ¿Qué detecta un sensor?

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["sensores", "conceptos"]

respuesta: falso
tipo: vf

enunciado: "Un sensor es un dispositivo cuya función principal es realizar un trabajo mecánico sobre el entorno, como mover un brazo robótico."

explicacion: |
  Falso. El dispositivo que realiza trabajo mecánico es el actuador. El sensor solo recolecta datos del entorno.
```

### 13 — La cadena de control

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "intermedio"
  tags: ["flujo_de_datos", "control"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["sensor de luz", "microcontrolador", "LED"], ["sensor de humedad", "PLC", "bomba de agua"]]

respuesta: datos[escenario_idx][2]
tipo: completar
respuestas_validas:
  - datos[0][2]
  - datos[1][2]

enunciado: "En un sistema automatizado, el flujo de información sigue un orden lógico. Si el sistema busca regular la iluminación de una habitación, el orden de los componentes es: {datos[escenario_idx][0]} -> {datos[escenario_idx][1]} -> ___."

explicacion: |
  El flujo correcto es: Sensor (captación) -> Procesador (decisión) -> Actuador (acción).
```

### 14 — Confusión entre entrada y salida

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["clasificacion", "entrada_salida"]

respuesta: "entrada"
tipo: mc
opciones_explicitas: ["entrada", "salida", "alimentación", "tierra"]

enunciado: "Desde la perspectiva de un microcontrolador, la señal que proviene de un sensor de movimiento se clasifica como una señal de ___."

explicacion: |
  Los sensores envían información al procesador, por lo tanto, sus señales se consideran señales de entrada (inputs).
```

### 15 — El ciclo de un sistema de control

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "intermedio"
  tags: ["lógica_de_control", "secuencia"]

respuesta_orden: ["captar", "procesar", "actuar"]
tipo: ordenar
opciones_explicitas: ["procesar", "actuar", "captar"]

enunciado: "Para que un sistema de control automático funcione correctamente, debe seguir una secuencia lógica de eventos. Ordena las etapas de un sistema de control:"

explicacion: |
  Primero se debe captar el dato (sensor), luego procesar la información para tomar una decisión (controlador) y finalmente ejecutar una acción (actuador).
```

### 16 — Diferencia fundamental

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["conceptos_basicos", "definiciones"]

tipo: mc
opciones_explicitas: ["Un sensor convierte una magnitud física en una señal eléctrica, mientras que un actuador convierte una señal eléctrica en una acción física.", "Un sensor produce movimiento y un actuador capta luz.", "Un sensor es un componente digital y un actuador es analógico.", "No hay diferencia, ambos son dispositivos de entrada."]

enunciado: "En un sistema de control, la principal distinción entre un sensor y un actuador radica en la dirección de la conversión de energía. ¿Cuál es la diferencia correcta?"

respuesta: "Un sensor convierte una magnitud física en una señal eléctrica, mientras que un actuador convierte una señal eléctrica en una acción física."

explicacion: |
  Los sensores son dispositivos de entrada que transforman una propiedad física (temperatura, presión, luz) en una señal eléctrica para ser procesada. Los actuadores son dispositivos de salida que reciben una señal eléctrica para generar un efecto físico (movimiento, calor, sonido).
```

### 17 — El rol de la información

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["flujo_de_datos"]

variables:
  datos: [["LDR", "sensor"], ["Motor DC", "actuador"], ["Buzzer", "actuador"], ["Potenciómetro", "sensor"]]
  idx: uno_de([0, 1, 2, 3])

tipo: completar
respuestas_validas:
  - "LDR"
  - "Motor DC"
  - "Buzzer"
  - "Potenciómetro"
respuesta: datos[idx][0]

enunciado: "Si tenemos un dispositivo como un {datos[idx][0]}, su función principal en el sistema es actuar como un ___."

explicacion: |
  El {datos[idx][0]} es un {datos[idx][1]} porque su propósito es transformar una magnitud física en una señal eléctrica para el controlador.
```

### 18 — Verdad o Falso: El flujo de energía

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["lógica_de_control"]

tipo: vf
respuestas_validas:
  - verdadero
  - falso
respuesta: falso

enunciado: "¿Es correcto afirmar que un actuador es el encargado de captar cambios en el entorno para enviarlos a un microcontrolador?"

explicacion: |
  Falso. Esa es la función de un sensor. El actuador es el elemento final que ejecuta la acción dictada por el controlador tras procesar la información de los sensores.
```

### 19 — Secuencia de un sistema de control

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "intermedio"
  tags: ["flujo_sistema"]

tipo: ordenar
opciones_explicitas: ["Captación de estímulo físico", "Procesamiento de señal eléctrica", "Ejecución de acción física"]
respuesta_orden: ["Captación de estímulo físico", "Procesamiento de señal eléctrica", "Ejecución de acción física"]

enunciado: "Ordene las etapas de un sistema automatizado desde la interacción con el entorno hasta la respuesta física:"

explicacion: |
  El ciclo comienza con el sensor (captación), sigue con el controlador (procesamiento) y termina con el actuador (ejecución).
```

### 20 — Identificación de componentes

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["identificacion"]

variables:
  item: uno_de([["Relé", "actuador"], ["Sensor Ultrasónico", "sensor"], ["Servomotor", "actuador"], ["LDR", "sensor"]])

tipo: mc
opciones_explicitas: ["sensor", "actuador"]
respuesta: item[1]

enunciado: "Un {item[0]} se clasifica técnicamente como un/a ___."

explicacion: |
  El {item[0]} es un {item[1]}. Los sensores detectan, los actuadores actúan.
```

### 21 — Identificación de componentes

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["conceptos_basicos", "identificacion"]

variables:
  escenarios: [["un termómetro digital", "un motor de un ventilador"], ["un sensor de luz (LDR)", "una lámpara LED"]]
  idx: uno_de([0, 1])
  componente_sensor: escenarios[idx][0]
  componente_actuador: escenarios[idx][1]

enunciado: "En un sistema de control de temperatura, el {componente_sensor} detecta el calor y el {componente_actuador} realiza la acción física. ¿Cuál de los dos es el actuador?"

opciones_explicitas: ["el sensor", "el actuador"]
respuesta: "el actuador"
tipo: mc

explicacion: |
  El sensor capta la información del entorno (temperatura) y el actuador transforma la señal en una acción física (movimiento del ventilador).
```

### 22 — Lógica de control (Verdadero/Falso)

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["logica", "flujo_de_datos"]

enunciado: "En un sistema automatizado, el flujo de información correcto es: Sensor -> Controlador -> Actuador."

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. El sensor obtiene el dato, el controlador procesa la decisión y el actuador ejecuta la acción.
```

### 23 — Completar flujo de trabajo

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "intermedio"
  tags: ["completar", "flujo"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["un sensor de humedad en un riego", "un sensor de proximidad en un robot"], ["una bomba de agua", "una rueda motriz"]]

enunciado: "En un sistema de riego automático, el sensor de humedad detecta que la tierra está seca, el controlador activa la ___ para regar."

respuestas_validas:
  - "bomba de agua"
  - "rueda motriz"
respuesta: casos[caso_idx][1]
tipo: completar

explicacion: |
  El actuador en este escenario es la bomba de agua, ya que es el elemento que produce la acción física de mover el agua.
```

### 24 — Orden de un proceso de automatización

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "intermedio"
  tags: ["secuencia", "proceso"]

opciones_explicitas: ["Captar estímulo ambiental", "Procesar señal eléctrica", "Ejecutar acción física"]
respuesta_orden: ["Captar estímulo ambiental", "Procesar señal eléctrica", "Ejecutar acción física"]
tipo: ordenar

enunciado: "Ordena las etapas de un proceso de automatización, desde el sensor hasta el actuador:"

explicacion: |
  El proceso lógico siempre comienza con la captura (sensor), sigue con el procesamiento (controlador) y termina con la acción (actuador).
```

### 25 — Cálculo de respuesta de sensor (Input)

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "avanzado"
  tags: ["calculo", "sensor_analogico"]

variables:
  valor_entrada: uno_de([10, 20, 30, 40, 50])
  escala: 5

enunciado: "Un sensor analógico entrega un voltaje proporcional a la temperatura. Si la fórmula es V = T * {escala} y la temperatura actual es {valor_entrada} grados, ¿cuál es el voltaje de salida?"

respuesta: valor_entrada * escala
tipo: completar
tolerancia_abs: 0

explicacion: |
  Multiplicamos la temperatura medida por la constante de escala para obtener el valor de voltaje correspondiente.
```
