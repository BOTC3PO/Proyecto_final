# Examen jefe — [PENDIENTE #817]

> Logro #817. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **126 preguntas totales** en 5/5 secciones.

---

## Sección: buses-y-entrada-salida (25 preguntas)

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

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "intermedio"
  tags: ["ciclo", "procesador"]

tipo: completar
respuestas_validas:
  - "Enviar"
respuesta: "Enviar"

enunciado: "En una operación de salida (output), el procesador debe ___ datos al periférico."

explicacion: |
  En una operación de salida, la información fluye desde el procesador/memoria hacia el dispositivo externo, por lo tanto, el procesador debe enviar los datos.
```

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

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "intermedio"
  tags: ["arquitectura", "buses", "control"]

respuesta: falso
tipo: vf
enunciado: "El bus de control es el encargado de transportar los datos reales (como un número o un carácter) entre el procesador y la memoria."

explicacion: |
  Falso. El bus de control transporta señales de sincronización y comandos (como lecturas o escrituras), mientras que el bus de datos es el que transporta la información propiamente dicha.
```

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

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "intermedio"
  tags: ["E/S", "interrupciones", "eficiencia"]

respuesta: "el CPU pregunta constantemente si el dispositivo está listo"
tipo: completar
respuestas_validas:
  - "el CPU pregunta constantemente si el dispositivo está listo"

enunciado: "Si un sistema utiliza el método de Polling para gestionar un periférico, el procesador pierde eficiencia porque ___."

explicacion: |
  El Polling (o consulta) obliga al CPU a estar en un bucle de espera, desperdiciando ciclos de reloj. Las interrupciones permiten que el CPU realice otras tareas hasta que el hardware lo necesite.
```

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

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "intermedio"
  tags: ["control", "sincronizacion"]

respuesta: verdadero
tipo: vf
enunciado: "El bus de control es el encargado de transmitir señales de sincronización y de estado (como señales de lectura/escritura) para coordinar la comunicación entre la CPU y los periféricos."

explicacion: |
  Correcto. Sin el bus de control, los componentes no sabrían si el dato en el bus de datos es para ser leído o para ser escrito, ni cuándo debe iniciar la operación.
```

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
tipo: completar
tolerancia_abs: 0

enunciado: "Si un sistema tiene un bus de datos de {config[idx][0]} bits, ¿cuántos bytes puede transferir en un solo ciclo de bus?"

pasos:
  - "Identificar el ancho del bus en bits: {config[idx][0]}"
  - "Dividir el número de bits por 8 (ya que 1 byte = 8 bits)"

explicacion: |
  El ancho de bus determina la cantidad de datos que pueden viajar simultáneamente. Dividir los bits por 8 nos da el total de bytes.
```

## Sección: ciclo-de-instruccion-fetch-decode-execute (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "basico"
  tags: ["cpu", "arquitectura", "fetch"]

respuesta: "fetch"
tipo: completar
respuestas_validas:
  - "fetch"
  - "buscar"

enunciado: "La primera etapa del ciclo de instrucción, donde la CPU obtiene la siguiente instrucción de la memoria principal, se denomina ___."

explicacion: |
  El ciclo comienza con el 'fetch' (búsqueda), donde el contador de programa (PC) indica la dirección de la instrucción que debe ser cargada en el procesador.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "basico"
  tags: ["decode", "instruccion"]

respuesta: "decodificar"
tipo: mc
opciones_explicitas: ["ejecutar", "decodificar", "almacenar", "leer"]

enunciado: "Una vez que la instrucción ha sido cargada en el procesador, la unidad de control debe interpretar qué operación se debe realizar. Este proceso se conoce como:"

explicacion: |
  La etapa de 'decode' (decodificación) traduce la instrucción binaria en señales de control para que los componentes internos sepan qué hacer.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "basico"
  tags: ["orden", "ciclo"]

respuesta_orden: ["fetch", "decode", "execute"]
tipo: ordenar
opciones_explicitas: ["execute", "fetch", "decode"]

enunciado: "Ordena las fases del ciclo de instrucción de la CPU desde que se solicita la instrucción hasta que se completa la operación:"

explicacion: |
  El flujo lógico es siempre: 1. Buscar (Fetch), 2. Decodificar (Decode) y 3. Ejecutar (Execute).
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "basico"
  tags: ["execute", "alua"]

respuesta: falso
tipo: vf

enunciado: "¿La fase de 'execute' (ejecución) consiste únicamente en mover datos de la memoria a los registros sin realizar operaciones aritméticas?"

explicacion: |
  Falso. En la fase de ejecución, la ALU (Unidad Aritmético Lógica) puede realizar cálculos, comparaciones y otras operaciones lógicas fundamentales.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "intermedio"
  tags: ["control", "decodificar"]

variables:
  idx: uno_de([0, 1])
  escenario: [["la decodificación es responsabilidad de la ALU", "la decodificación es responsabilidad de la Unidad de Control"], ["la ejecución es responsabilidad de la Unidad de Control", "la ejecución es responsabilidad de la ALU"]]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["la decodificación es responsabilidad de la ALU", "la decodificación es responsabilidad de la Unidad de Control", "la ejecución es responsabilidad de la Unidad de Control", "la ejecución es responsabilidad de la ALU"]

enunciado: "Dependiendo del componente, identifica la afirmación correcta sobre la arquitectura de Von Neumann:"

explicacion: |
  La Unidad de Control se encarga de decodificar la instrucción, mientras que la ALU se encarga de la ejecución de operaciones aritméticas y lógicas.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "basico"
  tags: ["cpu", "arquitectura", "ciclo_de_instruccion"]

respuesta: "fetch"
tipo: "mc"
opciones_explicitas: ["fetch", "decode", "execute", "writeback"]

enunciado: "En la primera etapa del ciclo de instrucción, la CPU debe obtener la siguiente instrucción de la memoria principal. ¿Cómo se llama este proceso?"

explicacion: |
  El ciclo comienza con el 'fetch' (búsqueda), donde el Program Counter (PC) indica la dirección de la instrucción en la memoria, la cual se carga en el IR (Instruction Register).
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "intermedio"
  tags: ["decode", "control_unit"]

respuesta: verdadero
tipo: "vf"

enunciado: "Durante la fase de 'decode', la Unidad de Control interpreta el código de operación (opcode) para determinar qué acción debe realizar la ALU. ¿Es esto verdadero o falso?"

explicacion: |
  Verdadero. La fase de decodificación traduce el bitstream de la instrucción en señales de control que activan las partes necesarias de la CPU.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "basico"
  tags: ["orden", "proceso"]

tipo: ordenar
opciones_explicitas: ["fetch", "decode", "execute"]
respuesta_orden: ["fetch", "decode", "execute"]

enunciado: "Ordena las etapas fundamentales del ciclo de instrucción de una CPU en su secuencia lógica de ejecución."

explicacion: |
  El flujo estándar es: 1. Fetch (traer), 2. Decode (entender), 3. Execute (hacer).
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "avanzado"
  tags: ["pc", "direccionamiento"]

variables:
  idx: uno_de([0, 1])
  escenario: [["La instrucción actual está en 0x1000 y cada instrucción ocupa 4 bytes. La siguiente dirección será:", "0x1004"], ["La instrucción actual está en 0x2000 y cada instrucción ocupa 8 bytes. La siguiente dirección será:", "0x2008"]]

respuesta: escenario[idx][1]
tipo: "completar"
respuestas_validas:
  - "0x1004"
  - "0x2008"

enunciado: "Considerando que el Program Counter (PC) se incrementa automáticamente para apuntar a la siguiente instrucción: {escenario[idx][0]}"

pasos:
  - "Identificar la dirección actual del PC."
  - "Sumar el tamaño de la instrucción actual al valor del PC."

explicacion: |
  El PC debe apuntar a la dirección de la próxima instrucción. Si la instrucción mide N bytes, la nueva dirección es PC + N.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "intermedio"
  tags: ["alu", "execute"]

respuesta: "ALU"
tipo: "completar"
respuestas_validas:
  - "ALU"

enunciado: "En la fase de ejecución, si la instrucción es una suma aritmética, el componente encargado de realizar la operación matemática es la ___."

explicacion: |
  La ALU (Arithmetic Logic Unit) es el componente de la CPU que realiza todas las operaciones aritméticas (suma, resta) y lógicas (AND, OR).
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "basico"
  tags: ["arquitectura", "cpu", "ciclo_instruccion"]

tipo: ordenar
opciones_explicitas: ["Fetch (Buscar)", "Decode (Decodificar)", "Execute (Ejecutar)", "Write-back (Escritura)"]
respuesta_orden: ["Fetch (Buscar)", "Decode (Decodificar)", "Execute (Ejecutar)", "Write-back (Escritura)"]

enunciado: "Para que un procesador procese una instrucción de forma correcta, debe seguir una secuencia lógica de etapas. Ordena las siguientes fases del ciclo de instrucción:"

explicacion: |
  El ciclo de instrucción debe seguir un orden estrictamente secuencial: primero se busca la instrucción en memoria (Fetch), luego se interpreta qué debe hacer (Decode), se realiza la operación (Execute) y, finalmente, se guardan los resultados (Write-back).
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "intermedio"
  tags: ["decode", "control", "cpu"]

tipo: mc
opciones_explicitas: ["Traer la instrucción desde la memoria RAM a la CPU", "Interpretar el código de operación para entender qué tarea realizar", "Realizar operaciones aritméticas en la ALU", "Escribir el resultado en un registro o memoria"]
respuesta: "Interpretar el código de operación para entender qué tarea realizar"
enunciado: "Un error común es confundir el 'Fetch' con el 'Decode'. ¿Cuál es la función principal de la etapa de Decodificación (Decode)?"
explicacion: |
  En la etapa de decodificación, la Unidad de Control interpreta el código de operación (opcode) de la instrucción para determinar qué señales de control deben activarse para la siguiente etapa.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "basico"
  tags: ["alu", "execute", "operaciones"]

tipo: vf
respuesta: falso

enunciado: "Verdadero o Falso: La etapa de 'Execute' (Ejecución) es la encargada de buscar la instrucción en la memoria principal."

explicacion: |
  Falso. La búsqueda en memoria corresponde a la etapa de 'Fetch'. La etapa de 'Execute' es donde se lleva a cabo la operación lógica o aritmética propiamente dicha.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "avanzado"
  tags: ["pipeline", "hazard", "data_dependency"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Instrucción A: SUMAR R1, R2", "Instrucción B: SUBTRACT R1, R3"], ["Instrucción A: LOAD R1, [1000]", "Instrucción B: ADD R1, R2"]]
  problema: ["R1", "R1"]

enunciado: "En un procesador con pipeline, si la segunda instrucción requiere el resultado de la primera (como en el caso de {datos[escenario_idx][0]} y {datos[escenario_idx][1]}), se produce un conflicto de dependencia sobre el registro {problema[escenario_idx]}. ¿Cómo se llama este problema?"

opciones_explicitas: ["Data Hazard", "Control Hazard", "Structural Hazard", "Memory Leak"]
respuesta: "Data Hazard"
tipo: mc

explicacion: |
  Se produce un 'Data Hazard' (conflicto de datos) cuando una instrucción depende del resultado de una instrucción anterior que aún no ha terminado de escribir su valor en el registro o memoria.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "intermedio"
  tags: ["pc", "program_counter", "fetch"]

tipo: completar
respuestas_validas:
  - "Program Counter"
  - "Contador de Programa"
  - "PC"
respuesta: "Program Counter"

enunciado: "Durante la etapa de Fetch, el procesador utiliza un registro especial para saber cuál es la dirección de memoria de la próxima instrucción a buscar. Este registro se denomina ___."

explicacion: |
  El Program Counter (PC) o Contador de Programa contiene la dirección de la próxima instrucción a ser ejecutada. Al finalizar el fetch, el PC se incrementa para apuntar a la siguiente dirección.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "basico"
  tags: ["cpu", "arquitectura"]

enunciado: "Durante la fase de Fetch, la CPU debe obtener la instrucción desde la memoria principal. ¿Qué componente es el encargado de contener la dirección de la próxima instrucción a buscar?"

opciones_explicitas: ["Acumulador", "Contador de Programa (PC)", "Unidad de Control", "ALU"]
respuesta: "Contador de Programa (PC)"
tipo: "mc"

explicacion: |
  El Contador de Programa (PC) almacena la dirección de memoria de la siguiente instrucción que debe ser procesada, permitiendo que el ciclo de Fetch sea posible.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "basico"
  tags: ["cpu", "decodificacion"]

enunciado: "La fase de Decode se distingue de la fase de Fetch en que su objetivo principal es ___ la instrucción para entender qué operación debe realizar la CPU."

respuestas_validas:
  - "interpretar"
  - "traducir"
  - "analizar"
respuesta: "interpretar"
tipo: "completar"

explicacion: |
  Mientras que el Fetch solo trae los datos, el Decode interpreta el código de operación (opcode) para determinar qué debe hacer la Unidad de Control.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "intermedio"
  tags: ["cpu", "ejecucion"]

enunciado: "En el ciclo de instrucción, la fase de Execute se diferencia de la de Decode porque en la primera la CPU realmente ejecuta la operación lógica o aritmética solicitada."

respuesta: verdadero
tipo: "vf"

explicacion: |
  La fase de ejecución es donde ocurre la acción real (operación matemática, movimiento de datos o salto), después de que la instrucción ya ha sido comprendida.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "basico"
  tags: ["cpu", "orden"]

enunciado: "Ordena las fases del ciclo de instrucción de una CPU desde el inicio del proceso hasta la realización de la tarea:"

opciones_explicitas: ["Fetch", "Decode", "Execute"]
respuesta_orden: ["Fetch", "Decode", "Execute"]
tipo: "ordenar"

explicacion: |
  El ciclo es un proceso secuencial: primero se busca la instrucción (Fetch), luego se entiende (Decode) y finalmente se realiza (Execute).
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "intermedio"
  tags: ["cpu", "alu"]

enunciado: "¿Es correcto afirmar que la Unidad Aritmético-Lógica (ALU) actúa principalmente durante la fase de Decode?"

respuesta: falso
tipo: vf

explicacion: |
  La ALU actúa en la fase de Execute. En la fase de Decode, la Unidad de Control es la que determina qué componentes deben activarse.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "basico"
  tags: ["cpu", "arquitectura"]

variables:
  datos: [["La CPU lee la dirección de memoria contenida en el PC", "fetch"], ["La ALU realiza una suma de dos registros", "execute"], ["La unidad de control interpreta el código de operación", "decode"]]
  idx: uno_de([0, 1, 2])

enunciado: "En el ciclo de instrucción, cuando la unidad de control accede a la memoria principal para traer la siguiente instrucción basándose en el Program Counter, se está realizando la fase de: ___"

respuestas_validas:
  - "fetch"
  - "decode"
  - "execute"

respuesta: datos[idx][1]
tipo: completar

explicacion: |
  La fase de Fetch (búsqueda) es el proceso mediante el cual la CPU obtiene la instrucción desde la memoria RAM utilizando la dirección apuntada por el PC.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "intermedio"
  tags: ["control", "decode"]

enunciado: "¿Cuál es la función principal de la fase de 'Decode' (Decodificación) en el ciclo de instrucción?"

opciones_explicitas: ["Traducir la instrucción en señales de control para los componentes de la CPU", "Escribir el resultado de una operación en la memoria RAM", "Actualizar el contador de programa con la siguiente dirección", "Realizar operaciones aritméticas y lógicas"]

respuesta: "Traducir la instrucción en señales de control para los componentes de la CPU"
tipo: mc

explicacion: |
  En la fase de decodificación, la unidad de control interpreta el código de operación (opcode) para entender qué acción debe realizar la CPU.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "basico"
  tags: ["logica"]

enunciado: "Durante la fase de 'Execute', la ALU (Unidad Aritmético Lógica) es la encargada de realizar las operaciones matemáticas o lógicas indicadas por la instrucción. (Verdadero/Falso)"

opciones_explicitas: ["verdadero", "falso"]

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. La fase de ejecución es donde se lleva a cabo la operación real, utilizando la ALU para cálculos o transferencias de datos.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "basico"
  tags: ["orden", "ciclo"]

enunciado: "Ordene las fases del ciclo de instrucción de una CPU en el orden cronológico correcto:"

opciones_explicitas: ["Fetch", "Decode", "Execute", "Write-back"]

respuesta_orden: ["Fetch", "Decode", "Execute", "Write-back"]
tipo: ordenar

explicacion: |
  El ciclo estándar sigue el flujo: buscar la instrucción (Fetch), entender qué significa (Decode), realizar la tarea (Execute) y, opcionalmente, guardar el resultado (Write-back).
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "avanzado"
  tags: ["debug", "memoria"]

enunciado: "Se detecta que la CPU ha recibido un código de operación (opcode) que no corresponde a ninguna instrucción válida en su conjunto de instrucciones. ¿En qué fase del ciclo ha ocurrido el fallo?"

opciones_explicitas: ["Fetch", "Decode", "Execute"]

respuesta: "Decode"
tipo: mc

explicacion: |
  Si el código de la instrucción es inválido, el error se identifica en la fase de decodificación, ya que la unidad de control no puede interpretar el patrón de bits recibido.
```

## Sección: complejidad-asintotica (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "basico"
  tags: ["evaluar"]

variables:
  n: random(10, 1000)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Un algoritmo O(n) hace exactamente n operaciones. ¿Cuántas operaciones hace con n={n}?"

explicacion: |
  O(n): el trabajo crece en proporción directa a n.
```

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "basico"
  tags: ["evaluar"]

variables:
  n: random(5, 100)

respuesta: n ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "Un algoritmo O(n²) hace n² operaciones. ¿Cuántas operaciones hace con n={n}?"

explicacion: |
  O(n²): el trabajo crece con el cuadrado de n.
```

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "intermedio"
  tags: ["evaluar"]

variables:
  n: random(3, 15)

respuesta: 2 ^ n
tipo: input
tolerancia_abs: 0

enunciado: "Un algoritmo O(2ⁿ) hace 2ⁿ operaciones. ¿Cuántas operaciones hace con n={n}?"

explicacion: |
  O(2ⁿ): el trabajo se duplica por cada elemento más en la entrada —
  crece muchísimo más rápido que cualquier polinomio.
```

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "intermedio"
  tags: ["comparacion", "verdadero_falso"]

variables:
  n: random(50, 500)

respuesta: ((n ^ 2) > n)
tipo: vf

enunciado: "Para n={n}, ¿un algoritmo O(n²) hace más operaciones que uno O(n)?"

explicacion: |
  n² supera a n para cualquier n>1 — y la diferencia se agranda cuanto
  más grande es n.
```

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "avanzado"
  tags: ["comparacion", "verdadero_falso"]

variables:
  n: random(15, 25)

respuesta: ((2 ^ n) > (n ^ 2))
tipo: vf

enunciado: "Para n={n}, ¿un algoritmo O(2ⁿ) hace más operaciones que uno O(n²)?"

explicacion: |
  A partir de cierto n, la exponencial siempre termina superando a
  cualquier polinomio — mismo principio de
  `../../matematica/familias-exponencial-logaritmica/`.
```

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "avanzado"
  tags: ["comparacion", "verdadero_falso"]

variables:
  n: uno_de([2, 3])

respuesta: ((2 ^ n) > (n ^ 2))
tipo: vf

enunciado: "Para n={n} (chico), ¿un algoritmo O(2ⁿ) hace más operaciones que uno O(n²)?"

explicacion: |
  Para n muy chico, la comparación puede no seguir el patrón habitual —
  Big O describe el comportamiento para n GRANDE, no para cualquier n.
```

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "intermedio"
  tags: ["identificar", "opcion_multiple"]

respuesta: "O(log n)"
tipo: mc
opciones_explicitas:
  - "O(log n)"
  - "O(n)"
  - "O(n²)"

enunciado: "La búsqueda binaria en una lista ordenada descarta la mitad de las opciones en cada paso. ¿Qué notación Big O le corresponde?"

explicacion: |
  Descartar la mitad en cada paso es exactamente el patrón logarítmico
  — el número de pasos crece muy despacio, aunque la lista sea enorme.
```

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "basico"
  tags: ["identificar", "opcion_multiple"]

respuesta: "O(n)"
tipo: mc
opciones_explicitas:
  - "O(n)"
  - "O(1)"
  - "O(n²)"

enunciado: "Un algoritmo que recorre una lista de n elementos una sola vez, mirando cada uno. ¿Qué notación Big O le corresponde?"

explicacion: |
  Una pasada por cada uno de los n elementos: O(n).
```

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "intermedio"
  tags: ["identificar", "opcion_multiple"]

respuesta: "O(n²)"
tipo: mc
opciones_explicitas:
  - "O(n²)"
  - "O(n)"
  - "O(log n)"

enunciado: "Un algoritmo que compara cada elemento de una lista con todos los demás (todos los pares posibles). ¿Qué notación Big O le corresponde?"

explicacion: |
  Comparar todos los pares de n elementos da, aproximadamente, n×n
  comparaciones: O(n²).
```

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "basico"
  tags: ["identificar", "opcion_multiple"]

respuesta: "O(1)"
tipo: mc
opciones_explicitas:
  - "O(1)"
  - "O(n)"
  - "O(log n)"

enunciado: "Acceder a un elemento de un array por su índice (por ejemplo, arr[5]). ¿Qué notación Big O le corresponde?"

explicacion: |
  No importa el tamaño del array: acceder por índice tarda lo mismo
  siempre — O(1), constante.
```

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "avanzado"
  tags: ["identificar", "opcion_multiple"]

respuesta: "O(2ⁿ)"
tipo: mc
opciones_explicitas:
  - "O(2ⁿ)"
  - "O(n²)"
  - "O(n)"

enunciado: "Un algoritmo que prueba todos los subconjuntos posibles de un conjunto de n elementos. ¿Qué notación Big O le corresponde?"

explicacion: |
  Un conjunto de n elementos tiene 2ⁿ subconjuntos posibles —
  exponencial.
```

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "intermedio"
  tags: ["simplificar", "opcion_multiple"]

variables:
  k: random(2, 9)
  c: random(1, 20)

respuesta: "O(n)"
tipo: mc
opciones_explicitas:
  - "O(n)"
  - "O(n²)"
  - "O(1)"

enunciado: "Un algoritmo hace {k}n + {c} operaciones (por ejemplo, {k} pasadas por la lista más un paso final). ¿Cuál es su notación Big O simplificada?"

explicacion: |
  Se ignoran la constante multiplicativa ({k}) y el término independiente
  ({c}) — sólo importa el orden de crecimiento: O(n).
```

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "intermedio"
  tags: ["simplificar", "opcion_multiple"]

respuesta: "O(n²)"
tipo: mc
opciones_explicitas:
  - "O(n²)"
  - "O(n)"
  - "O(n² + n)"

enunciado: "Un algoritmo hace n² + n operaciones. ¿Cuál es su notación Big O simplificada?"

explicacion: |
  n² domina sobre n cuando n crece mucho — el término de menor orden se
  descarta.
```

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La complejidad de un algoritmo describe cómo crece el trabajo que hace a medida que crece el tamaño de la entrada, no el tiempo en segundos de reloj."

explicacion: |
  Los segundos de reloj dependen de la computadora; el orden de
  crecimiento no.
```

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "O(log n) crece más lento que O(n), que a su vez crece más lento que O(n²), que a su vez crece más lento que O(2ⁿ)."

explicacion: |
  Es la jerarquía central del tema, de menor a mayor crecimiento.
```

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Un algoritmo O(n²) siempre es más lento que uno O(n), para cualquier valor de n, sin excepción."

explicacion: |
  Para n muy chico, las constantes ocultas pueden invertir esa relación
  en la práctica — Big O describe el comportamiento asintótico (n
  grande), no cada caso puntual.
```

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "O(5n) y O(n) se consideran la misma complejidad — la constante multiplicativa no cambia el orden de crecimiento."

explicacion: |
  Big O agrupa por orden de crecimiento, no por el número exacto de
  operaciones.
```

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  n: random(5, 100)
  real: n ^ 2
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "Un algoritmo O(n²) procesa n={n}. ¿Es correcto que haga {propuesto} operaciones?"

explicacion: |
  El valor correcto es n² = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La notación Big O suele describir el PEOR caso de un algoritmo — en la práctica, puede comportarse mejor en casos promedio o favorables."

explicacion: |
  Es una distinción importante: "peor caso O(n²)" no significa "siempre
  tarda exactamente eso".
```

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "avanzado"
  tags: ["opcion_multiple"]

respuesta: "El O(n log n), para una lista suficientemente grande"
tipo: mc
opciones_explicitas:
  - "El O(n log n), para una lista suficientemente grande"
  - "El O(n²), siempre, sin importar el tamaño"
  - "Da exactamente lo mismo cuál se elija"

enunciado: "Para ordenar una lista muy grande, ¿qué algoritmo conviene más: uno O(n log n) o uno O(n²)?"

explicacion: |
  Para listas grandes, O(n log n) escala mucho mejor — la diferencia se
  vuelve enorme a medida que crece n.
```

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La palabra 'asintótica' en el nombre del tema hace referencia a mirar el comportamiento del algoritmo cuando n se acerca al infinito, no a un valor puntual chico."

explicacion: |
  Es el mismo concepto de comportamiento en el infinito ya visto en
  `../../matematica/limite/` (límites en el infinito).
```

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "intermedio"
  tags: ["aplicacion"]

variables:
  n: random(50, 500)

respuesta: 2 * n
tipo: input
tolerancia_abs: 0

enunciado: "Un algoritmo O(n) tarda {n} operaciones con una entrada de tamaño {n}. Si se duplica el tamaño de la entrada, ¿cuántas operaciones tarda?"

explicacion: |
  En O(n), duplicar la entrada duplica el trabajo — relación
  proporcional directa.
```

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "avanzado"
  tags: ["aplicacion", "verdadero_falso"]

variables:
  n: random(10, 100)

respuesta: (((2 * n) ^ 2) == (4 * (n ^ 2)))
tipo: vf

enunciado: "Un algoritmo O(n²) tarda {n ^ 2} operaciones con entrada {n}. Si se duplica el tamaño de la entrada, ¿el trabajo se CUADRUPLICA (no se duplica)?"

explicacion: |
  (2n)² = 4n² — duplicar la entrada cuadruplica el trabajo en un
  algoritmo cuadrático, el mismo patrón ya visto en
  `../../vida-cotidiana/distancia-frenado/`.
```

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Un algoritmo O(log n) apenas nota la diferencia entre procesar 1.000 elementos y 1.000.000 — el logaritmo crece muchísimo más despacio que n."

explicacion: |
  log₂(1.000.000) es apenas unas 20 veces log₂(1.000) — a pesar de que
  la entrada creció 1000 veces.
```

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "avanzado"
  tags: ["simplificar", "opcion_multiple"]

respuesta: "O(2ⁿ)"
tipo: mc
opciones_explicitas:
  - "O(2ⁿ)"
  - "O(n²)"
  - "O(2ⁿ + n²)"

enunciado: "Un algoritmo hace 2ⁿ + n² operaciones. ¿Cuál es su notación Big O simplificada?"

explicacion: |
  2ⁿ crece mucho más rápido que n² — domina completamente para n
  grande, así que el término n² se descarta.
```

```
metadata:
  materia: "matematicas"
  tema: "complejidad_asintotica"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Entender por qué O(2ⁿ) es mucho peor que O(n²) para n grande usa exactamente la misma idea matemática de `../../matematica/familias-exponencial-logaritmica/`: una exponencial siempre termina superando a un polinomio."

explicacion: |
  Es el resumen del módulo: la teoría de funciones ya construida en
  Álgebra explica directamente por qué la jerarquía de complejidad es
  como es.
```

## Sección: control-de-versiones (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "conceptos", "software"]

respuesta: "un software que registra los cambios realizados en un archivo o conjunto de archivos a lo largo del tiempo"
tipo: mc
opciones_explicitas: ["un software que registra los cambios realizados en un archivo o conjunto de archivos a lo largo del tiempo", "un editor de texto avanzado para programadores", "un sistema operativo para gestionar archivos en la nube", "una herramienta de compilación de código fuente"]

enunciado: "En el desarrollo de software, un sistema de control de versiones es ___."

explicacion: |
  Un sistema de control de versiones permite rastrear la evolución de un proyecto, permitiendo volver a estados anteriores y gestionar cambios realizados por múltiples personas.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "workflow"]

respuesta: "snapshot"
tipo: completar
respuestas_validas:
  - "snapshot"
  - "instantánea"
  - "foto"

enunciado: "En Git, un 'commit' puede entenderse como una ___ del estado actual de los archivos en el repositorio."

explicacion: |
  A diferencia de otros sistemas que guardan solo las diferencias (deltas), Git piensa en términos de snapshots (instantáneas) de la estructura de archivos en ese momento preciso.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "arquitectura"]

respuesta: verdadero

tipo: vf

enunciado: "¿Git es considerado un sistema de control de versiones distribuido, donde cada desarrollador tiene una copia completa del historial en su máquina local?"

explicacion: |
  Correcto. A diferencia de los sistemas centralizados (como SVN), en Git cada clon es un repositorio completo con todo el historial, lo que permite trabajar sin conexión y ofrece mayor seguridad.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "intermedio"
  tags: ["git", "workflow", "ordenar"]

respuesta_orden: ["git add", "git commit", "git push"]
tipo: ordenar
opciones_explicitas: ["git add", "git commit", "git push"]

enunciado: "Ordena los siguientes comandos según el flujo lógico estándar para enviar cambios locales a un repositorio remoto:"

pasos:
  - "1. Preparar los archivos en el área de stage (index)."
  - "2. Confirmar los cambios en el repositorio local con un mensaje."
  - "3. Subir los cambios confirmados al servidor remoto."

explicacion: |
  Primero se seleccionan los cambios con 'add', luego se crean la versión con 'commit' y finalmente se envían al servidor con 'push'.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["colaboracion", "git"]

tipo: mc
opciones_explicitas: ["Permite que varios desarrolladores trabajen en el mismo archivo simultáneamente sin sobrescribir el trabajo de otros", "Obliga a que un solo programador trabaje a la vez para evitar errores", "Sirve únicamente para guardar copias de seguridad en la nube", "Es una herramienta que reemplaza la necesidad de realizar pruebas de software"]
respuesta: "Permite que varios desarrolladores trabajen en el mismo archivo simultáneamente sin sobrescribir el trabajo de otros"

enunciado: "Una de las razones principales por las que el control de versiones es esencial para el trabajo en equipo es que ___."

explicacion: |
  Los sistemas de control de versiones permiten la ramificación (branching) y la fusión (merging), facilitando que múltiples personas colaboren en la misma base de código de forma organizada.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Git es un sistema de control de versiones distribuido que permite rastrear cambios en los archivos de un proyecto de software a lo largo del tiempo."

explicacion: |
  Efectivamente, Git permite que cada desarrollador tenga una copia completa del historial, facilitando el trabajo colaborativo y la recuperación de versiones anteriores.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "conceptos"]

variables:
  escenario: uno_de([["El desarrollador modificó el archivo main.py", "modificación"], ["El desarrollador borró el archivo README.md", "eliminación"], ["El desarrollador creó un nuevo archivo utils.py", "creación"]])

respuesta: escenario[1]
tipo: mc

opciones_explicitas: ["modificación", "eliminación", "creación"]

enunciado: "En un proyecto de software, si un colaborador ejecuta un comando para registrar que ha borrado un archivo, ¿qué tipo de cambio está realizando en el historial?"

explicacion: |
  El cambio registrado es una {escenario[0]}. En el control de versiones, cada acción (crear, modificar, borrar) genera un nuevo estado en el historial.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "intermedio"
  tags: ["git", "workflow"]

respuesta_orden: ["git add", "git commit", "git push"]
tipo: ordenar

opciones_explicitas: ["git add", "git commit", "git push"]

enunciado: "Un desarrollador desea enviar sus cambios locales a un repositorio remoto (como GitHub). Ordene los comandos necesarios para realizar este proceso de forma secuencial:"

pasos:
  - "1. Preparar los archivos en el área de preparación (staging area)."
  - "2. Crear un punto de control en el historial local con un mensaje descriptivo."
  - "3. Subir los commits locales al servidor remoto."

explicacion: |
  El flujo estándar es: primero se seleccionan los archivos (add), luego se empaquetan con un mensaje (commit) y finalmente se envían al servidor (push).
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "intermedio"
  tags: ["git", "conceptos"]

respuesta: "mensaje"
tipo: completar
respuestas_validas:
  - "mensaje"

enunciado: "Para que un commit sea útil en un equipo de trabajo, es fundamental incluir un ___ descriptivo que explique qué cambios se realizaron."

explicacion: |
  Un commit sin un mensaje claro dificulta la comprensión del historial para otros miembros del equipo.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "avanzado"
  tags: ["git", "conflictos"]

variables:
  escenarios: [["Dos personas editaron la misma línea del archivo index.html", "conflicto"], ["Una persona editó el archivo A y otra el archivo B", "sin_problema"], ["Una persona borró un archivo que otra persona estaba usando", "conflicto"]]
  idx: uno_de([0, 1, 2])
  escenario_actual: escenarios[idx]
  descripcion: escenario_actual[0]
  respuesta_correcta: escenario_actual[1]

respuesta: respuesta_correcta
tipo: mc

opciones_explicitas: ["conflicto", "sin_problema"]

enunciado: "Analiza el siguiente escenario: {descripcion}. ¿Qué situación se presenta al intentar fusionar (merge) los cambios?"

explicacion: |
  Cuando dos cambios incompatibles ocurren en la misma parte de un archivo, Git no puede decidir automáticamente qué versión mantener y genera un conflicto.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "conceptos"]

tipo: mc
opciones_explicitas: ["Una copia de seguridad en la nube para no perder archivos", "Un sistema para rastrear cambios y permitir la colaboración", "Un editor de texto avanzado para programadores", "Un sistema de mensajería para equipos de desarrollo"]
respuesta: "Un sistema para rastrear cambios y permitir la colaboración"
enunciado: "Un sistema de control de versiones como Git es esencial principalmente porque permite ___."
explicacion: |
  El control de versiones no es solo una copia de seguridad; su función principal es registrar la historia de cambios para que múltiples personas puedan trabajar en el mismo proyecto sin sobrescribir el trabajo de otros.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "conceptos"]

tipo: vf

enunciado: "Si realizo cambios en un archivo y presiono 'Guardar' (Ctrl+S) en mi editor de código, estos cambios quedan registrados automáticamente en el historial de commits de Git."

respuesta: falso

explicacion: |
  Falso. 'Guardar' solo escribe los cambios en el disco local. Para que Git registre un cambio en su historial, es necesario realizar un 'commit' tras haber añadido los archivos al área de preparación (staging area).
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "intermedio"
  tags: ["git", "flujo_de_trabajo"]

tipo: completar
respuestas_validas:
  - "no es visible para mis compañeros"
respuesta: "no es visible para mis compañeros"

enunciado: "Si un desarrollador realiza un commit en su repositorio local, la situación es: ___."

pasos:
  - "Realizar cambios en el código"
  - "Ejecutar 'git add' para preparar los cambios"
  - "Ejecutar 'git commit' para crear la versión local"

explicacion: |
  El repositorio local es privado a la máquina del desarrollador. Para que otros vean los cambios, se debe realizar un 'push' hacia un repositorio remoto (como GitHub o GitLab).
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "intermedio"
  tags: ["git", "flujo_de_trabajo"]

tipo: ordenar
opciones_explicitas: ["modificar archivos", "git add", "git commit", "git push"]

enunciado: "Ordena los pasos lógicos para subir un cambio desde tu máquina local hasta que esté disponible para el equipo en el servidor remoto:"

explicacion: |
  Primero modificas el contenido, luego preparas los archivos con 'add', creas la versión con 'commit' y finalmente la envías al servidor con 'push'.
respuesta_orden: ["modificar archivos", "git add", "git commit", "git push"]
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "avanzado"
  tags: ["git", "flujo_de_trabajo"]

tipo: mc
opciones_explicitas: ["trabajar directamente en la rama 'main'", "crear una rama nueva para una función", "hacer un merge de una rama con conflictos"]

enunciado: "En un entorno de equipo, ¿cuál de las siguientes prácticas es la de mayor riesgo, ya que suele causar errores en la versión estable?"

respuesta: "trabajar directamente en la rama 'main'"

explicacion: |
  Trabajar directamente en la rama principal (main/master) es peligroso porque cualquier error cometido durante el desarrollo se integra inmediatamente a la versión que se supone es funcional y estable. Se recomienda usar 'feature branches'.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "conceptos_basicos"]

tipo: mc
opciones_explicitas: ["Un sistema de gestión de archivos en la nube", "Un sistema de control de versiones distribuido", "Un editor de texto para programadores", "Un lenguaje de programación"]

respuesta: "Un sistema de control de versiones distribuido"

enunciado: "A diferencia de un simple respaldo de archivos en la nube, Git es un ___."

explicacion: |
  Git es un sistema de control de versiones distribuido que permite rastrear cambios en el código y trabajar de forma colaborativa sin depender de un único servidor centralizado para todo el historial.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "backup"]

tipo: vf

enunciado: "Un sistema de control de versiones como Git es lo mismo que realizar copias de seguridad (backups) manuales de una carpeta de proyecto."

respuesta: falso

explicacion: |
  Aunque Git ayuda a no perder trabajo, su propósito principal es el seguimiento de la evolución de los cambios (historial, ramas, merges) y la colaboración, no es simplemente una copia de seguridad de archivos.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "intermedio"
  tags: ["colaboracion", "flujo_trabajo"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["desarrollador_A", "desarrollador_B"], ["usuario_X", "usuario_Y"]]

tipo: completar
respuestas_validas:
  - "merge"
respuesta: "merge"

enunciado: "Cuando dos personas trabajan en la misma línea de un archivo, al intentar integrar sus cambios, el sistema de control de versiones debe realizar un ___ para unir las historias."

explicacion: |
  El proceso de integrar cambios de una rama a otra se llama 'merge'. Si los cambios chocan en la misma línea, surge un 'conflicto' que debe ser resuelto manualmente.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "intermedio"
  tags: ["flujo_git", "orden"]

tipo: ordenar
opciones_explicitas: ["modificar_archivo", "hacer_commit", "hacer_push"]
respuesta_orden: ["modificar_archivo", "hacer_commit", "hacer_push"]

enunciado: "Ordena los pasos lógicos para enviar tus cambios locales a un repositorio remoto:"

explicacion: |
  Primero debes realizar los cambios en el archivo, luego registrar esos cambios en tu historial local con un 'commit', y finalmente enviarlos al servidor remoto con un 'push'.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "avanzado"
  tags: ["commit", "metadatos"]

variables:
  datos: [["mensaje descriptivo", verdadero], ["solo un espacio", falso]]

tipo: mc
opciones_explicitas: ["Es obligatorio incluir un mensaje descriptivo", "El mensaje es opcional pero recomendado", "El mensaje solo lo pone el administrador", "No se puede hacer commit sin internet"]

respuesta: "Es obligatorio incluir un mensaje descriptivo"

enunciado: "En un flujo de trabajo profesional, un commit se distingue de un simple guardado de archivo porque requiere un {datos[0][0]} que explique el cambio."

explicacion: |
  Aunque técnicamente se puede hacer un commit con mensajes vacíos en algunas configuraciones, en el desarrollo profesional es una regla fundamental para mantener la trazabilidad del proyecto.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "conceptos"]

variables:
  idx: uno_de([0,1,2])
  datos: [["un equipo de 5 programadores trabajando en el mismo archivo", "Permite trabajar en paralelo sin sobrescribir el trabajo de otros"], ["un solo programador trabajando solo en su PC", "Hace que el código sea más rápido de ejecutar"], ["un equipo que no usa herramientas de control", "Evita que los programadores tengan que escribir código"]]

enunciado: "En el escenario de {datos[idx][0]}, ¿cuál es la principal ventaja de utilizar un sistema de control de versiones como Git?"

opciones_explicitas: ["Permite trabajar en paralelo sin sobrescribir el trabajo de otros", "Hace que el código sea más rápido de ejecutar", "Evita que los programadores tengan que escribir código"]

respuesta: datos[idx][1]

tipo: mc

explicacion: |
  El control de versiones permite que múltiples personas trabajen en la misma base de código simultáneamente, gestionando las integraciones y evitando que los cambios de uno borren los del otro.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "workflow"]

enunciado: "En Git, realizar un 'commit' equivale a ___."

respuestas_validas:
  - "guardar un cambio con un mensaje descriptivo"

respuesta: "guardar un cambio con un mensaje descriptivo"

tipo: completar

explicacion: |
  Un commit es una captura (snapshot) de los cambios realizados en los archivos, acompañada de un mensaje que explica qué se hizo.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "intermedio"
  tags: ["git", "arquitectura"]

enunciado: "Git es un sistema de control de versiones de tipo distribuido, lo que significa que cada desarrollador tiene una copia completa del historial en su máquina local. ¿Es esto verdadero?"

respuesta: verdadero

tipo: vf
explicacion: |
  A diferencia de los sistemas centralizados, en Git cada clon es un repositorio completo con todo su historial, lo que permite trabajar sin conexión y ofrece mayor seguridad.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "intermedio"
  tags: ["git", "workflow"]

opciones_explicitas: ["Modificar archivos", "Realizar un commit", "Enviar cambios al servidor remoto (push)"]

respuesta_orden: ["Modificar archivos", "Realizar un commit", "Enviar cambios al servidor remoto (push)"]

tipo: ordenar

enunciado: "Ordena los pasos lógicos para subir un cambio local a un repositorio remoto (como GitHub):"

explicacion: |
  Primero modificas el contenido, luego creas un punto de control local (commit) y finalmente subes esa historia al servidor (push).
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "avanzado"
  tags: ["git", "conflictos"]

variables:
  idx: uno_de([0,1,2])
  datos: [["dos personas modificaron la misma línea de un archivo", "Se produce un conflicto de fusión (merge conflict)"], ["una persona modificó un archivo y otra borró el mismo archivo", "Se produce un conflicto de fusión (merge conflict)"], ["una persona añadió una función nueva en un archivo distinto", "Git lo resuelve automáticamente sin avisar"]]

enunciado: "Si ocurre la situación: {datos[idx][0]}, ¿qué sucede en Git?"

opciones_explicitas: ["Se produce un conflicto de fusión (merge conflict)", "Git lo resuelve automáticamente sin avisar", "El repositorio se bloquea permanentemente"]

respuesta: datos[idx][1]

tipo: mc

explicacion: |
  Cuando los cambios son en líneas distintas o archivos distintos, Git puede fusionar automáticamente. Si los cambios chocan en la misma línea, el usuario debe resolver el conflicto manualmente.
```

## Sección: cpu-unidad-de-control-y-alu (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["arquitectura", "hardware", "cpu"]

tipo: mc
opciones_explicitas: ["Unidad de Control y ALU", "Memoria RAM y Disco Duro", "Monitor y Teclado", "Sistema Operativo y Aplicaciones"]
respuesta: "Unidad de Control y ALU"

enunciado: "La CPU (Unidad Central de Procesamiento) está compuesta principalmente por dos bloques funcionales. ¿Cuáles son?"

explicacion: |
  La CPU se divide fundamentalmente en la Unidad de Control (UC), que dirige el flujo de datos, y la ALU (Unidad Aritmético-Lógica), que realiza los cálculos.
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["alu", "calculo"]

tipo: vf
respuesta: falso

enunciado: "La función principal de la ALU (Unidad Aritmético-Lógica) es gestionar el flujo de instrucciones y el control de los componentes del sistema."

explicacion: |
  Falso. La gestión del flujo de instrucciones es responsabilidad de la Unidad de Control. La ALU se encarga exclusivamente de operaciones aritméticas (suma, resta, etc.) y lógicas (AND, OR, NOT).
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "intermedio"
  tags: ["ciclo_instruccion", "ordenar"]

tipo: ordenar
opciones_explicitas: ["Busqueda de la instrucción (Fetch)", "Decodificación de la instrucción (Decode)", "Ejecución de la instrucción (Execute)"]

enunciado: "Ordena las etapas del ciclo de instrucción que realiza la CPU para procesar una orden:"

explicacion: |
  El ciclo básico consiste en buscar la instrucción en memoria, decodificarla para entender qué debe hacer la UC y finalmente ejecutar la operación (usando la ALU si es necesario).
respuesta_orden: ["Busqueda de la instrucción (Fetch)", "Decodificación de la instrucción (Decode)", "Ejecución de la instrucción (Execute)"]
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["uc", "control"]

tipo: completar
respuestas_validas:
  - "decodificar"
  - "decodificación"

enunciado: "La Unidad de Control tiene la tarea de ___ las instrucciones para determinar qué operaciones debe realizar la ALU."

explicacion: |
  La Unidad de Control interpreta o decodifica las instrucciones para coordinar las señales de control necesarias para el resto del hardware.
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["alu", "logica"]

tipo: vf
enunciado: "Además de las operaciones aritméticas, la ALU es capaz de realizar operaciones lógicas."
respuesta: verdadero
explicacion: |
  La ALU (Arithmetic Logic Unit) realiza tanto cálculos aritméticos (como sumas) como comparaciones y operaciones lógicas (como AND, OR, XOR).
```

```
metadata:
  materia: "informatica"
  tema: "cpu_arquitectura"
  nivel: "basico"
  tags: ["cpu", "ciclo_instruccion", "uc"]

respuesta: "decodificar"
tipo: mc
opciones_explicitas: ["buscar", "decodificar", "ejecutar"]

enunciado: "Durante el ciclo de instrucción, la Unidad de Control (UC) realiza una serie de pasos. Si la CPU acaba de obtener la instrucción desde la memoria principal, el siguiente paso que debe realizar la UC es ___."

explicacion: |
  El ciclo de instrucción sigue un orden lógico: 1. Buscar (Fetch) la instrucción en memoria, 2. Decodificar (Decode) para entender qué operación es, y 3. Ejecutar (Execute) la operación.
```

```
metadata:
  materia: "informatica"
  tema: "cpu_arquitectura"
  nivel: "intermedio"
  tags: ["alu", "logica", "operaciones"]

respuesta: "AND"
tipo: completar

enunciado: "La ALU es responsable de las operaciones aritméticas y lógicas. Si la CPU necesita verificar si dos valores binarios cumplen con la condición de que ambos sean 1, la ALU debe utilizar la operación lógica ___."

explicacion: |
  La operación AND (Y) devuelve verdadero solo si ambos operandos son verdaderos (1). Si se buscara que al menos uno sea 1, se usaría OR.
```

```
metadata:
  materia: "informatica"
  tema: "cpu_arquitectura"
  nivel: "basico"
  tags: ["componentes", "uc", "alu"]

respuesta: falso
tipo: vf

enunciado: "La Unidad Aritmético-Lógica (ALU) es el componente encargado de coordinar el flujo de datos entre la memoria y los registros, enviando señales de control a los demás componentes."

explicacion: |
  Falso. La descripción corresponde a la Unidad de Control (UC). La ALU es la encargada de realizar los cálculos matemáticos y las comparaciones lógicas.
```

```
metadata:
  materia: "informatica"
  tema: "cpu_arquitectura"
  nivel: "intermedio"
  tags: ["flujo_datos", "ordenar", "cpu"]

opciones_explicitas: ["La UC busca la instrucción de suma en memoria", "La ALU realiza la suma de los valores", "La UC decodifica la instrucción de suma", "El resultado se escribe en un registro o memoria"]

respuesta_orden: ["La UC busca la instrucción de suma en memoria", "La UC decodifica la instrucción de suma", "La ALU realiza la suma de los valores", "El resultado se escribe en un registro o memoria"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos que ocurren en la CPU cuando se ejecuta una instrucción de suma de dos números:"

explicacion: |
  Primero se debe obtener la instrucción (Fetch), luego interpretarla (Decode), procesar el cálculo (Execute en la ALU) y finalmente guardar el resultado (Write-back).
```

```
metadata:
  materia: "informatica"
  tema: "cpu_arquitectura"
  nivel: "basico"
  tags: ["uc", "control"]

respuesta: "calcular"
tipo: completar
respuestas_validas:
  - "calcular"

enunciado: "Si comparamos las funciones de los dos componentes principales de la CPU: la ALU se encarga de ___ los datos, mientras que la Unidad de Control se encarga de controlar el flujo de ejecución."

explicacion: |
  La ALU es el "músculo" que realiza los cálculos (calcular), mientras que la UC es el "cerebro" que dirige el tráfico de información (controlar).
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["arquitectura", "cpu", "alu"]

tipo: mc
opciones_explicitas: ["Unidad de Control (UC)", "Unidad Aritmético-Lógica (ALU)", "Memoria Caché", "Bus de Datos"]

enunciado: "Un error común es pensar que la Unidad de Control es la encargada de realizar operaciones matemáticas como sumas o comparaciones lógicas. En realidad, esa función le corresponde a la ___."

respuesta: "Unidad Aritmético-Lógica (ALU)"
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["arquitectura", "uc", "control"]

tipo: vf

enunciado: "La Unidad de Control (UC) actúa como el 'director de orquesta' de la CPU, decodificando instrucciones y enviando señales de control a los demás componentes para que actúen en el momento adecuado."

respuesta: verdadero

explicacion: |
  Correcto. La UC no procesa datos, sino que interpreta las instrucciones del programa y coordina el flujo de datos entre la memoria, la ALU y los registros.
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "intermedio"
  tags: ["ciclo_instruccion", "ordenar"]

tipo: ordenar
opciones_explicitas: ["Búsqueda (Fetch)", "Decodificación (Decode)", "Ejecución (Execute)"]

enunciado: "Para que una instrucción sea procesada por la CPU, debe seguir un orden lógico de pasos. Ordena los siguientes procesos según el ciclo de instrucción estándar:"

respuesta_orden: ["Búsqueda (Fetch)", "Decodificación (Decode)", "Ejecución (Execute)"]

explicacion: |
  Primero se busca la instrucción en memoria (Fetch), luego la UC la interpreta (Decode) y finalmente la ALU o los registros ejecutan la operación (Execute).
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "intermedio"
  tags: ["alu", "logica", "aritmetica"]

tipo: completar

enunciado: "La ALU es capaz de realizar dos tipos principales de operaciones: las operaciones ___ (como la suma o resta) y las operaciones lógicas (como la comparación de si un número es mayor que otro)."

respuestas_validas:
  - "aritméticas"

respuesta: "aritméticas"

explicacion: |
  La ALU combina ambas: la parte aritmética para el cálculo numérico y la lógica para la toma de decisiones basada en comparaciones (AND, OR, NOT, comparaciones).
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "avanzado"
  tags: ["arquitectura", "uc", "alu"]

tipo: mc
opciones_explicitas: ["La UC decide qué operación hacer", "La ALU decide qué operación hacer", "Ambas deciden por igual", "Ninguna de las anteriores"]

enunciado: "Cuando se lee una instrucción de la memoria, ¿qué componente decide qué operación debe ejecutar la ALU?"

respuesta: "La UC decide qué operación hacer"

explicacion: |
  La ALU es un componente pasivo que recibe datos y una señal de control; es la Unidad de Control la que "decide" o determina qué operación debe ejecutar la ALU basándose en el código de operación de la instrucción.
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["arquitectura", "cpu", "alu"]

tipo: mc
opciones_explicitas: ["Realiza cálculos matemáticos y comparaciones lógicas", "Coordina el flujo de datos entre los componentes", "Almacena permanentemente los datos del usuario", "Gestiona la interfaz de entrada y salida"]

enunciado: "A diferencia de la Unidad de Control, la ALU (Unidad Aritmético-Lógica) tiene como función principal:"

respuesta: "Realiza cálculos matemáticos y comparaciones lógicas"

explicacion: |
  La ALU es el componente encargado de realizar las operaciones aritméticas (suma, resta, etc.) y las operaciones lógicas (AND, OR, NOT), mientras que la Unidad de Control se encarga de dirigir el flujo de datos.
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["arquitectura", "cpu", "control"]

tipo: vf
respuesta: falso

enunciado: "La Unidad de Control (UC) es la encargada de ejecutar directamente las operaciones de suma y resta de los datos contenidos en los registros."

explicacion: |
  Falso. La UC no realiza los cálculos; su función es decodificar las instrucciones y enviar señales de control para que la ALU realice dichas operaciones.
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "intermedio"
  tags: ["instrucciones", "ciclo_fetch_execute"]

tipo: completar
respuestas_validas:
  - "decodificar"
respuesta: "decodificar"

enunciado: "En el ciclo de instrucción, la Unidad de Control se encarga de ___ la instrucción, mientras que la ALU se encarga de ejecutar la operación lógica o aritmética resultante."

pasos:
  - "La UC interpreta el código de operación."
  - "La ALU procesa los operandos."

explicacion: |
  El ciclo típico es: Búsqueda (Fetch), Decodificación (por la UC) y Ejecución (donde interviene la ALU).
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["componentes", "cpu"]

tipo: ordenar
opciones_explicitas: ["Unidad de Control", "Unidad Aritmético-Lógica", "Registros de la CPU"]

respuesta_orden: ["Unidad de Control", "Unidad Aritmético-Lógica", "Registros de la CPU"]

enunciado: "Ordena los componentes según el flujo lógico de una instrucción: primero se interpreta, luego se procesa el dato y finalmente se guarda el resultado temporalmente."

explicacion: |
  1. Unidad de Control (interpreta/decodifica).
  2. ALU (procesa/calcula).
  3. Registros (almacenan el resultado inmediato).
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "intermedio"
  tags: ["señales", "control", "alu"]

tipo: mc
opciones_explicitas: ["La UC envía señales de control a la ALU", "La ALU envía señales de control a la UC", "La UC y la ALU no se comunican entre sí", "La ALU controla el bus de datos principal"]

enunciado: "¿Qué distingue la interacción entre la Unidad de Control y la ALU?"

respuesta: "La UC envía señales de control a la ALU"

explicacion: |
  La Unidad de Control actúa como el 'director de orquesta', enviando señales eléctricas (señales de control) para indicarle a la ALU qué operación debe realizar en cada momento.
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["arquitectura", "cpu"]

variables:
  datos: [["La CPU debe sumar dos números almacenados en registros", "ALU"], ["La CPU debe decidir si un número es mayor que otro", "ALU"], ["La CPU debe buscar la siguiente instrucción en la memoria", "UC"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["ALU", "UC", "Memoria RAM"]

enunciado: "En un procesador, considera el siguiente caso: {datos[idx][0]}. ¿Qué componente es el responsable de ejecutar esa tarea?"

explicacion: |
  La Unidad de Control (UC) dirige el flujo de datos, mientras que la Unidad Aritmético-Lógica (ALU) es la encargada de realizar las operaciones matemáticas y de comparación.
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["componentes"]

respuesta: verdadero
tipo: vf

enunciado: "La Unidad de Control (UC) es la encargada de decodificar las instrucciones y coordinar las actividades de los demás componentes de la CPU."

explicacion: |
  Correcto. La UC actúa como el "cerebro" que interpreta las instrucciones y envía señales de control para que la ALU y la memoria operen correctamente.
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "intermedio"
  tags: ["ciclo_instruccion"]

variables:
  pasos_orden: ["Fetch (Captación)", "Decode (Decodificación)", "Execute (Ejecución)"]

respuesta_orden: pasos_orden
tipo: ordenar

opciones_explicitas: ["Fetch (Captación)", "Decode (Decodificación)", "Execute (Ejecución)"]

enunciado: "Ordena las etapas lógicas que sigue una instrucción dentro de la CPU para ser procesada:"

explicacion: |
  El ciclo básico de una instrucción consiste en buscarla en memoria (Fetch), entender qué debe hacer (Decode) y realizar la operación (Execute).
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["alu"]

variables:
  datos: [["Calcular el producto de 5 * 5", "25"], ["Determinar si 10 es igual a 10", "verdadero"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "Si la ALU recibe la instrucción para procesar la operación de {datos[idx][0]}, el resultado de dicha operación es: ___"

respuestas_validas:
  - "25"
  - "verdadero"

explicacion: |
  La ALU maneja tanto operaciones aritméticas (como la multiplicación) como operaciones lógicas (como la igualdad).
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "intermedio"
  tags: ["uc"]

variables:
  datos: [["La CPU debe leer un dato de la memoria para llevarlo al registro A", "UC"], ["La CPU debe calcular la raíz cuadrada de 144", "ALU"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["UC", "ALU"]

enunciado: "Considerando el siguiente escenario: '{datos[idx][0]}'. ¿Qué componente de la CPU es el responsable de esa tarea?"

explicacion: |
  Mover datos entre memoria y registros es tarea de la Unidad de Control (UC), que coordina el flujo de información. En cambio, un cálculo como una raíz cuadrada requiere operaciones aritméticas, que son responsabilidad de la ALU.
```

