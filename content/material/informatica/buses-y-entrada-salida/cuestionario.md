# Informatica — Buses y entrada salida (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

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
  escenarios: [["Escribir", "Enviar"], ["Leer", "Recibir"]]

tipo: completar
respuestas_validas:
  - "Enviar"
  - "Recibir"
respuesta: escenarios[escenario_idx][0]

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

respuesta_orden: ["El controlador de DMA solicita el bus", "El procesador cede el control del bus", "Se realiza la transferencia de datos", "El controlador DMA libera el bus"]

enunciado: "Ordene los pasos lógicos de una transferencia de datos mediante DMA (Direct Memory Access):"

explicacion: |
  En el DMA, el controlador solicita el control del bus al CPU, el CPU lo concede (cede el control), el controlador transfiere los datos directamente entre memoria y periférico, y finalmente libera el bus para que el CPU retome su labor.
```

### 6 — El rol del Bus de Datos

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "basico"
  tags: ["arquitectura", "bus"]

respuesta: "datos"
tipo: "completar"
respuestas_validas:
  - "datos"

enunciado: "En la arquitectura de Von Neumann, el bus encargado de transportar la información procesada o las instrucciones entre la CPU y la memoria se denomina bus de ___."

explicacion: |
  El bus de datos es bidireccional y transporta la información real (instrucciones o datos) entre los componentes.
```

### 7 — Capacidad de direccionamiento

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
tipo: mc
opciones_explicitas: [256, 65536, 1024, 4096]

enunciado: "Si una computadora utiliza un bus de direcciones de {escenario[idx][0]} bits, ¿cuántas direcciones de memoria únicas puede direccionar?"

explicacion: |
  La cantidad de direcciones posibles es igual a 2 elevado a la potencia del número de líneas del bus de direcciones (2^n).
  En el caso de 8 bits: 2^8 = 256. En el caso de 16 bits: 2^16 = 65536.
```

### 8 — Ciclo de lectura de E/S

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

### 9 — Secuencia de transferencia DMA

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "avanzado"
  tags: ["dma", "transferencia"]

respuesta_orden: ["solicitud_dma", "concesion_bus", "transferencia_datos", "liberacion_bus"]
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

### 10 — Interrupciones vs Polling

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

### 11 — El rol del Bus de Control

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "intermedio"
  tags: ["arquitectura", "buses", "control"]

variables:
  es_control: verdadero

respuesta: es_control
tipo: completar
enunciado: "El bus de control es el encargado de transportar los datos reales (como un número o un carácter) entre el procesador y la memoria."

explicacion: |
  Falso. El bus de control transporta señales de sincronización y comandos (como lecturas o escrituras), mientras que el bus de datos es el que transporta la información propiamente dicha.
```

### 12 — Confusión de direcciones en el Bus de Direcciones

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "intermedio"
  tags: ["direccionamiento", "memoria", "buses"]

variables:
  escenario: uno_de([["Bus de direcciones de 16 bits", "65536"], ["Bus de direcciones de 32 bits", "4294967296"], ["Bus de direcciones de 64 bits", "18446744073709551616"]])

respuesta: escenario[1]
tipo: completar
respuestas_validas:
  - "65536"
  - "4294967296"
  - "18446744073709551616"

enunciado: "Si un sistema tiene un bus de direcciones de {escenario[0]}, la cantidad máxima de ubicaciones de memoria que puede direccionar es de ___."

explicacion: |
  El número de direcciones direccionables está determinado por la cantidad de líneas del bus de direcciones ($2^n$, donde $n$ es el número de bits).
```

### 13 — ¿Qué comunica el Bus de Datos?

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "basico"
  tags: ["buses", "datos"]

opciones_explicitas: ["Direcciones de memoria", "Señales de reloj", "Información/Datos", "Comandos de lectura/escritura"]
respuesta: "Información/Datos"
tipo: mc

enunciado: "En una arquitectura de Von Neumann, ¿cuál es la función principal del bus de datos?"

explicacion: |
  El bus de datos es bidireccional y transporta la información (instrucciones o datos) entre los componentes. Los otros buses mencionados cumplen funciones de control o direccionamiento.
```

### 14 — Ciclo de una instrucción en el bus

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "avanzado"
  tags: ["ciclo_instruccion", "ordenar"]

opciones_explicitas: ["Colocar la dirección en el bus de direcciones", "Enviar señal de lectura por el bus de control", "Recibir el dato por el bus de datos", "Procesar el dato en la ALU"]
respuesta_orden: ["Colocar la dirección en el bus de direcciones", "Enviar señal de lectura por el bus de control", "Recibir el dato por el bus de datos", "Procesar el dato en la ALU"]
tipo: ordenar

enunciado: "Ordene los pasos lógicos para que el procesador obtenga un dato de la memoria RAM:"

explicacion: |
  Primero se debe indicar 'dónde' buscar (dirección), luego 'qué hacer' (control/lectura), luego esperar a que el dato 'viaje' (datos) y finalmente usarlo.
```

### 15 — Interrupciones vs. Polling

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "intermedio"
  tags: ["E/S", "interrupciones", "eficiencia"]

variables:
  metodo: uno_de([["Polling", "el CPU pregunta constantemente si el dispositivo está listo"], ["Interrupción", "el dispositivo avisa al CPU cuando está listo"]])

respuesta: metodo[1]
tipo: completar
respuestas_validas:
  - "el CPU pregunta constantemente si el dispositivo está listo"
  - "el dispositivo avisa al CPU cuando está listo"

enunciado: "Si un sistema utiliza el método de ___ para gestionar un periférico, el procesador pierde eficiencia porque ___."

explicacion: |
  El Polling (o consulta) obliga al CPU a estar en un bucle de espera, desperdiciando ciclos de reloj. Las interrupciones permiten que el CPU realice otras tareas hasta que el hardware lo necesite.
```

### 16 — Bus de Datos vs Bus de Direcciones

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "basico"
  tags: ["arquitectura", "buses"]

respuesta: "direcciones"
tipo: completar
respuestas_validas:
  - "direcciones"

enunciado: "Mientras que el bus de datos transporta la información procesada entre los componentes, el bus de ___ determina la ubicación de memoria o el dispositivo al que se quiere acceder."

explicacion: |
  El bus de direcciones es unidireccional (en la mayoría de los casos) y especifica la celda de memoria o el puerto de E/S, mientras que el bus de datos es bidireccional y transporta el contenido.
```

### 17 — El rol del Bus de Control

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "intermedio"
  tags: ["control", "sincronizacion"]

variables:
  es_control: verdadero

respuesta: es_control
tipo: completar
enunciado: "El bus de control es el encargado de transmitir señales de sincronización y de estado (como señales de lectura/escritura) para coordinar la comunicación entre la CPU y los periféricos."

explicacion: |
  Correcto. Sin el bus de control, los componentes no sabrían si el dato en el bus de datos es para ser leído o para ser escrito, ni cuándo debe iniciar la operación.
```

### 18 — Diferencia entre DMA y CPU en E/S

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "avanzado"
  tags: ["dma", "eficiencia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["transferencia_cpu", "La CPU debe intervenir en cada byte transferido"], ["transferencia_dma", "El controlador de DMA gestiona la transferencia sin la CPU"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["La CPU debe intervenir en cada byte transferido", "El controlador de DMA gestiona la transferencia sin la CPU"]

enunciado: "En un sistema con acceso directo a memoria (DMA), ¿cuál es la principal distinción con el método de E/S programada?"

explicacion: |
  El DMA libera a la CPU de la carga de gestionar cada byte de la transferencia, permitiéndole realizar otras tareas mientras el controlador de DMA mueve los datos entre la E/S y la memoria.
```

### 19 — Jerarquía de Buses

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "basico"
  tags: ["jerarquia", "velocidad"]

respuesta_orden: ["Bus local", "Bus de sistema", "Bus de expansión"]
tipo: ordenar

opciones_explicitas: ["Bus local", "Bus de sistema", "Bus de expansión"]

enunciado: "Ordena los buses de mayor a menor velocidad de comunicación (desde el núcleo de la CPU hacia los periféricos externos):"

explicacion: |
  El bus local es el más rápido (conexión directa con CPU/Caché), seguido por el bus de sistema (placa base) y finalmente los buses de expansión (como PCIe o USB) que conectan periféricos.
```

### 20 — Interrupciones vs Polling

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "intermedio"
  tags: ["interrupcion", "polling"]

variables:
  metodo_idx: uno_de([0, 1])
  metodo_nombre: ["Polling", "Interrupción"]
  caracteristica: ["La CPU debe consultar constantemente el estado del dispositivo", "El dispositivo avisa a la CPU cuando está listo"]

respuesta: caracteristica[metodo_idx]
tipo: mc
opciones_explicitas: ["La CPU debe consultar constantemente el estado del dispositivo", "El dispositivo avisa a la CPU cuando está listo"]

enunciado: "Si el sistema utiliza el método de {metodo_nombre[metodo_idx]}, ¿cuál es su característica distintiva respecto a la interrupción?"

explicacion: |
  El Polling (consulta activa) consume ciclos de CPU innecesarios si el dispositivo no está listo, mientras que las interrupciones permiten que la CPU trabaje en otra cosa hasta que el hardware requiera atención.
```

### 21 — El rol del Bus de Datos

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "basico"
  tags: ["hardware", "buses"]

variables:
  datos: [["El procesador necesita leer una instrucción de la memoria RAM", "datos"], ["La unidad de control envía una dirección de memoria", "direcciones"], ["La tarjeta de video recibe un color para un píxel", "datos"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["datos", "direcciones", "control"]

enunciado: "En el escenario donde {datos[idx][0]}, el componente encargado de transportar la información específica es el bus de ___."

explicacion: |
  El bus de datos es el camino bidireccional que transporta la información (instrucciones, datos, resultados) entre los componentes del sistema.
```

### 22 — El ciclo de lectura de un periférico

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "intermedio"
  tags: ["ciclo_instruccion", "bus_control"]

tipo: vf
respuesta: verdadero
enunciado: "Cuando un dispositivo de entrada (como un teclado) necesita informar al procesador que se ha presionado una tecla, utiliza el bus de control para enviar una señal de interrupción."

explicacion: |
  Correcto. El bus de control se utiliza para transmitir señales de sincronización, interrupciones y estados de dispositivos.
```

### 23 — Secuencia de comunicación de un periférico

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "intermedio"
  tags: ["protocolo", "comunicacion"]

respuesta_orden: ["Seleccionar dirección", "Enviar comando", "Transferir datos"]
tipo: ordenar
opciones_explicitas: ["Seleccionar dirección", "Enviar comando", "Transferir datos"]

enunciado: "Para que un controlador de periférico realice una operación de lectura de un registro de estado, debe seguir este orden lógico de señales en el bus:"

explicacion: |
  Primero se establece la dirección del dispositivo/registro, luego se indica la operación (lectura/escritura) y finalmente se mueven los datos.
```

### 24 — Identificación de buses

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "basico"
  tags: ["componentes", "bus_direccion"]

variables:
  casos: [["un bus que solo se mueve en un sentido (unidireccional) para indicar dónde está un dato", "direcciones"], ["un bus que permite enviar y recibir datos (bidireccional)", "datos"]]
  idx: uno_de([0, 1])

respuesta: casos[idx][1]
tipo: completar
respuestas_validas:
  - "direcciones"
  - "datos"

enunciado: "Si nos referimos a un bus que solo se mueve en un sentido (unidireccional) para indicar dónde está un dato, estamos hablando del bus de ___."

explicacion: |
  El bus de direcciones es unidireccional (del CPU hacia la memoria/periféricos) para indicar la ubicación de la información.
```

### 25 — Ancho de bus y rendimiento

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "avanzado"
  tags: ["rendimiento", "ancho_de_bus"]

variables:
  config: [["64 bits", 8], ["32 bits", 4], ["16 bits", 2]]
  idx: uno_de([0, 1, 2])

respuesta: config[idx][1]

enunciado: "Si un sistema tiene un bus de datos de {config[idx][0]} bits, ¿cuántos bytes puede transferir en un solo ciclo de bus?"

pasos:
  - "Identificar el ancho del bus en bits: {config[idx][0]}"
  - "Dividir el número de bits por 8 (ya que 1 byte = 8 bits)"

explicacion: |
  El ancho de bus determina la cantidad de datos que pueden viajar simultáneamente. Dividir los bits por 8 nos da el total de bytes.
```
