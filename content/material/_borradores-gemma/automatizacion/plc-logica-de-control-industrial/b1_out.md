### 1 — Definición de PLC
```
metadata:
  materia: "automatizacion"
  tema: "plc_logica_de_control_industrial"
  nivel: "basico"
  tags: ["definicion", "hardware"]

respuesta: "controlador_logico_programable"
tipo: completar
respuestas_validas: ["controlador_logico_programable"]

enunciado: "El dispositivo electrónico diseñado para controlar procesos industriales mediante la ejecución de una lógica programada se denomina ___."

explicacion: |
  El PLC (Programmable Logic Controller) es la unidad central de control en la automatización industrial, capaz de operar en entornos hostiles.
```

### 2 — Componentes de un sistema PLC
```
metadata:
  materia: "automatizacion"
  tema: "plc_logica_de_control_industrial"
  nivel: "basico"
  tags: ["componentes", "hardware"]

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Entradas/Salidas (I/O)", "Memoria/CPU/Fuente", "Pantalla/Teclado", "Sensores/Actuadores"]

enunciado: "De acuerdo a la arquitectura estándar, el elemento que procesa la información y ejecuta la lógica es la {datos[idx][0]}."

datos:
  - ["Interfaz de usuario", "Pantalla/Teclado"]
  - ["Unidad de procesamiento", "Memoria/CPU/Fuente"]

explicacion: |
  La CPU es el cerebro del PLC que procesa la lógica, mientras que las I/O permiten la comunicación con el mundo físico.
```

### 3 — Ciclo de Scan del PLC
```
metadata:
  materia: "automatizacion"
  tema: "plc_logica_de_control_industrial"
  nivel: "intermedio"
  tags: ["ciclo_scan", "funcionamiento"]

respuesta: verdadero
tipo: vf

enunciado: "¿El ciclo de scan de un PLC consiste en leer las entradas, ejecutar la lógica del programa y actualizar las salidas de forma cíclica?"

explicacion: |
  El ciclo de scan es un proceso repetitivo y determinístico que garantiza que el PLC responda a los cambios en el proceso de manera constante.
```

### 4 — Flujo de señales en la planta
```
metadata:
  materia: "automatizacion"
  tema: "plc_logica_de_control_industrial"
  nivel: "basico"
  tags: ["flujo_señal", "sensores_actuadores"]

respuesta: ["Sensores", "PLC", "Actuadores"]
tipo: ordenar

opciones_explicitas: ["Sensores", "PLC", "Actuadores"]

enunciado: "Ordene el flujo lógico de información y acción en un sistema automatizado, desde la captura de la variable física hasta la ejecución de la acción."

explicacion: |
  Los sensores captan la señal (entrada), el PLC procesa la lógica y los actuadores ejecutan la acción (salida).
```

### 5 — Tipos de entradas/salidas
```
metadata:
  materia: "automatizacion"
  tema: "plc_logica_de_control_industrial"
  nivel: "basico"
  tags: ["io", "digital_analogo"]

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Digital", "Analógica", "Binaria", "Proporcional"]

enunciado: "Si un sensor envía una señal de 4-20 mA para representar una temperatura, estamos ante una entrada de tipo {datos[idx][0]}."

datos:
  - ["Digital", "Digital"]
  - ["Analógica", "Analógica"]

explicacion: |
  Las señales digitales son discretas (encendido/apagado), mientras que las analógicas representan un rango continuo de valores.
```