### 1 — Definición de Bus de Datos
```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "basico"
  tags: ["hardware", "arquitectura"]

tipo: mc
opciones_explicitas: ["El medio físico que transporta información entre componentes", "El procesador que gestiona las interrupciones", "La memoria principal donde se guardan los datos", "Un dispositivo de salida de video"]

respuesta: "El medio físico que transporta información entre componentes"

enunciado: "En arquitectura de computadores, un bus se define como ___."

explicacion: |
  Un bus es un conjunto de líneas de comunicación que permiten la transferencia de datos, direcciones o señales de control entre los distintos componentes de un sistema informático.
```

### 2 — Tipos de Buses
```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "basico"
  tags: ["buses", "direccion"]

tipo: vf
respuesta: verdadero

enunciado: "El bus de direcciones es el encargado de indicar la ubicación de memoria o el dispositivo al que se quiere acceder."

explicacion: |
  Correcto. El bus de direcciones permite al procesador especificar la dirección de memoria o el puerto de E/S con el que desea comunicarse.
```

### 3 — El Ciclo de E/S
```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "intermedio"
  tags: ["ciclo", "procesador"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[["Escribir", "Enviar"], ["Leer", "Recibir"]]]

tipo: completar
respuestas_validas: ["Enviar", "Recibir"]
respuesta: escenarios[escenario_idx][0][0]

enunciado: "En una operación de salida (output), el procesador debe ___ datos al periférico."

explicacion: |
  En una operación de salida, la información fluye desde el procesador/memoria hacia el dispositivo externo, por lo tanto, el procesador debe enviar los datos.
```

### 4 — Componentes de un Bus
```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "basico"
  tags: ["control", "bus"]

tipo: mc
opciones_explicitas: ["Bus de Datos, Bus de Direcciones, Bus de Control", "Bus de Datos, Bus de Memoria, Bus de CPU", "Bus de Entrada, Bus de Salida, Bus de Procesamiento"]

respuesta: "Bus de Datos, Bus de Direcciones, Bus de Control"

enunciado: "¿Cuáles son los tres tipos principales de buses en un sistema de arquitectura clásica?"

explicacion: |
  Los buses se dividen funcionalmente en: Bus de Datos (transporte de información), Bus de Direcciones (selección de destino) y Bus de Control (sincronización y comandos).
```

### 5 — Secuencia de Comunicación (DMA)
```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "avanzado"
  tags: ["dma", "secuencia"]

tipo: ordenar
opciones_explicitas: ["El controlador de DMA solicita el bus", "El procesador cede el control del bus", "Se realiza la transferencia de datos", "El controlador DMA libera el bus"]

respuesta: ["El controlador de DMA solicita el bus", "El procesador cede el control del bus", "Se realiza la transferencia de datos", "El controlador DMA libera el bus"]

enunciado: "Ordene los pasos lógicos de una transferencia de datos mediante DMA (Direct Memory Access):"

explicacion: |
  En el DMA, el controlador solicita el control del bus al CPU, el CPU lo concede (cede el control), el controlador transfiere los datos directamente entre memoria y periférico, y finalmente libera el bus para que el CPU retome su labor.
```