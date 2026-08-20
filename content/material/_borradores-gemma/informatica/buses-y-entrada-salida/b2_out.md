### 1 — El rol del Bus de Datos
```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "basico"
  tags: ["arquitectura", "bus"]

respuesta: "datos"
tipo: "completar"
respuestas_validas: ["datos"]

enunciado: "En la arquitectura de Von Neumann, el bus encargado de transportar la información procesada o las instrucciones entre la CPU y la memoria se denomina bus de ___."

explicacion: |
  El bus de datos es bidireccional y transporta la información real (instrucciones o datos) entre los componentes.
```

### 2 — Capacidad de direccionamiento
```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "intermedio"
  tags: ["memoria", "bus_direccion"]

variables:
  idx: uno_de([0, 1])
  escenario: [[8, 256], [16, 65536]]

respuesta: escenario[idx][1]
tipo: "mc"
opciones_explicitas: ["256", "65536", "1024", "4096"]

enunciado: "Si una computadora utiliza un bus de direcciones de {escenario[idx][0]} bits, ¿cuántas direcciones de memoria únicas puede direccionar?"

explicacion: |
  La cantidad de direcciones posibles es igual a 2 elevado a la potencia del número de líneas del bus de direcciones ($2^n$). 
  En el caso de 8 bits: $2^8 = 256$. En el caso de 16 bits: $2^{16} = 65536$.
```

### 3 — Ciclo de lectura de E/S
```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "intermedio"
  tags: ["ciclo_bus", "control"]

respuesta: "control"
tipo: "mc"
opciones_explicitas: ["datos", "direccion", "control"]

enunciado: "Durante una operación de lectura de un dispositivo de entrada, el controlador debe emitir una señal para indicar que la operación será de lectura. Esta señal viaja por el bus de ___."

explicacion: |
  El bus de control gestiona las señales de sincronización y el tipo de operación (lectura/escritura) para coordinar los componentes.
```

### 4 — Secuencia de transferencia DMA
```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "avanzado"
  tags: ["dma", "transferencia"]

respuesta: ["solicitud_dma", "concesion_bus", "transferencia_datos", "liberacion_bus"]
tipo: "ordenar"
opciones_explicitas: ["solicitud_dma", "concesion_bus", "transferencia_datos", "liberacion_bus"]

enunciado: "Ordene los pasos lógicos de una transferencia de Direct Memory Access (DMA) cuando un periférico requiere mover un bloque de datos a la memoria sin intervención constante de la CPU:"

explicacion: |
  1. El periférico envía una solicitud (DREQ).
  2. El controlador DMA solicita el control del bus a la CPU (HOLD).
  3. La CPU cede el bus (HLDA).
  4. Se realiza el movimiento de datos.
  5. El controlador libera el bus para la CPU.
```

### 5 — Interrupciones vs Polling
```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "intermedio"
  tags: ["interrupcion", "polling"]

respuesta: falso
tipo: "vf"

enunciado: "En el método de 'Polling' (consulta), el procesador debe esperar activamente en un bucle revisando el estado de un dispositivo de entrada/salida, lo cual es una forma eficiente de gestionar el tiempo de CPU en sistemas de alto rendimiento."

explicacion: |
  Falso. El Polling es ineficiente porque consume ciclos de CPU en espera de un dispositivo. Las interrupciones son más eficientes ya que permiten que la CPU realice otras tareas hasta que el dispositivo esté listo.
```