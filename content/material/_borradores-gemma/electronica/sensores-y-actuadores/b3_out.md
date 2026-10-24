### 1 — El rol de los componentes
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

### 2 — ¿Qué detecta un sensor?
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

### 3 — La cadena de control
```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "intermedio"
  tags: ["flujo_de_datos", "control"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["sensor de luz", "microcontrolador", "LED"],
    ["sensor de humedad", "PLC", "bomba de agua"]
  ]

respuesta: datos[escenario_idx][2]
tipo: completar
respuestas_validas: [datos[0][2], datos[1][2]]

enunciado: "En un sistema automatizado, el flujo de información sigue un orden lógico. Si el sistema busca regular la iluminación de una habitación, el orden de los componentes es: {datos[escenario_idx][0]} -> {datos[escenario_idx][1]} -> ___."

explicacion: |
  El flujo correcto es: Sensor (captación) -> Procesador (decisión) -> Actuador (acción).
```

### 4 — Confusión entre entrada y salida
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

### 5 — El ciclo de un sistema de control
```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "intermedio"
  tags: ["lógica_de_control", "secuencia"]

respuesta: ["captar", "procesar", "actuar"]
tipo: ordenar
opciones_explicitas: ["procesar", "actuar", "captar"]

enunciado: "Para que un sistema de control automático funcione correctamente, debe seguir una secuencia lógica de eventos. Ordena las etapas de un sistema de control:"

explicacion: |
  Primero se debe captar el dato (sensor), luego procesar la información para tomar una decisión (controlador) y finalmente ejecutar una acción (actuador).
```