# Examen jefe — Maestro del Boot y Procesos

> Logro #172. Completaste el parcial dominando el arranque, los buses, el ciclo de instrucción y la complejidad. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **122 preguntas totales** en 5/5 secciones.

---

## Sección: arranque-de-la-computadora-boot (26 preguntas)

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "basico"
  tags: ["boot", "sequencia", "hardware"]

variables:
  paso1: "POST"
  paso2: "BIOS"
  paso3: "SO"

respuesta: "POST, BIOS, SO"
tipo: completar

enunciado: "Ordená las etapas principales del arranque: primero se ejecuta la {paso1}, luego interviene la {paso2} y finalmente carga el {paso3}."

explicacion: |
  El proceso sigue un orden estricto: primero la autoprueba (POST), luego el firmware (BIOS/UEFI) y finalmente el sistema operativo.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "intermedio"
  tags: ["post", "diagnostico", "prueba"]

variables:
  acrónimo: "POST"

respuesta: "Power-On Self-Test"
tipo: completar

enunciado: "El acrónimo POST significa: {acrónimo}."

explicacion: |
  POST significa Power-On Self-Test (Autoprueba al encender). Verifica que el hardware responda.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "basico"
  tags: ["hardware", "ubicacion", "chip"]

variables:
  componente: "placa madre"

respuesta: "placa madre"
tipo: completar

enunciado: "La BIOS se encuentra grabada en un chip de la {componente}."

explicacion: |
  La BIOS es un firmware almacenado en un chip de memoria flash en la placa madre.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "intermedio"
  tags: ["linux", "grub", "gestor"]

variables:
  gestor: "GRUB"

respuesta: "GRUB"
tipo: input

enunciado: "¿Cuál es el nombre común del gestor de arranque utilizado en sistemas Linux?"

explicacion: |
  GRUB (GRand Unified Bootloader) es el estándar para cargar el kernel de Linux.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "intermedio"
  tags: ["windows", "bootmgr", "gestor"]

variables:
  gestor: "Windows Boot Manager"

respuesta: "Windows Boot Manager"
tipo: input

enunciado: "¿Qué gestor de arranque utiliza típicamente Windows moderno?"

explicacion: |
  Windows utiliza el Windows Boot Manager (bootmgr) para cargar el sistema.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "basico"
  tags: ["disco", "ssd", "almacenamiento"]

variables:
  dispositivo: "disco duro"

respuesta: "disco duro"
tipo: input

enunciado: "¿Dónde reside el sector de arranque? En el {dispositivo} o SSD."

explicacion: |
  El código de arranque se guarda en el disco de almacenamiento (HDD o SSD).
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "intermedio"
  tags: ["sector", "boot", "carga"]

variables:
  entidad: "sector de arranque"

respuesta: "sector de arranque"
tipo: input

enunciado: "La BIOS busca un {entidad} válido para iniciar la carga del SO."

explicacion: |
  El sector de arranque contiene el código inicial que permite cargar el gestor de arranque.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "intermedio"
  tags: ["uefi", "modernizacion", "firmware"]

variables:
  sucesor: "UEFI"

respuesta: "UEFI"
tipo: input

enunciado: "¿Cuál es el sucesor moderno de la BIOS?"

explicacion: |
  UEFI (Unified Extensible Firmware Interface) es la evolución de la BIOS.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "basico"
  tags: ["diagnostico", "pitidos", "error"]

variables:
  senal: "pitidos"

respuesta: "pitidos"
tipo: input

enunciado: "Si la POST falla, la placa madre suele emitir {senal} de error."

explicacion: |
  Los códigos de pitidos indican qué componente específico falló en la autoprueba.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "intermedio"
  tags: ["drivers", "perifericos", "controladores"]

variables:
  elemento: "controladores"

respuesta: "controladores"
tipo: input

enunciado: "El SO carga los {elemento} de los dispositivos periféricos durante el arranque."

explicacion: |
  Los drivers permiten que el sistema operativo comunique con el hardware.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "basico"
  tags: ["GUI", "interfaz", "escritorio"]

variables:
  elemento: "interfaz gráfica"

respuesta: "interfaz gráfica"
tipo: input

enunciado: "El arranque finaliza cuando se muestra la {elemento} al usuario."

explicacion: |
  La GUI es la señal visual de que el sistema está listo para usar.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "intermedio"
  tags: ["ram", "memoria", "carga"]

variables:
  memoria: "RAM"

respuesta: "RAM"
tipo: input

enunciado: "El kernel del SO se carga en la {memoria} para su ejecución rápida."

explicacion: |
  El núcleo debe residir en memoria principal (RAM) para ser procesado por la CPU.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "basico"
  tags: ["POST", "verificacion", "hardware"]

variables:
  accion: "verificar"

respuesta: "verificar"
tipo: input

enunciado: "La POST tiene como fin {accion} que el hardware funcione correctamente."

explicacion: |
  Sin esta verificación, cargar un SO en hardware defectuoso sería inútil.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "intermedio"
  tags: ["kernel", "nucleo", "so"]

variables:
  componente: "nucleo"

respuesta: "nucleo"
tipo: input

enunciado: "El gestor de arranque carga el {componente} del sistema operativo."

explicacion: |
  El kernel es el corazón del SO y debe cargarse antes que cualquier aplicación.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "basico"
  tags: ["energia", "inicio", "hardware"]

variables:
  estado: "inerte"

respuesta: "inerte"
tipo: input

enunciado: "Sin el proceso de arranque, el hardware sería un conjunto de componentes {estado}."

explicacion: |
  El hardware necesita el software de bajo nivel para cobrar vida funcional.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "avanzado"
  tags: ["uefi", "particion", "efi"]

variables:
  particion: "ESP"

respuesta: "ESP"
tipo: input

enunciado: "En sistemas UEFI, el gestor de arranque suele residir en la partición {particion}."

explicacion: |
  La EFI System Partition (ESP) contiene los archivos de arranque para UEFI.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "avanzado"
  tags: ["bios", "mbr", "particion"]

variables:
  tabla: "MBR"

respuesta: "MBR"
tipo: input

enunciado: "La BIOS tradicional utiliza la tabla de particiones {tabla} para encontrar el arranque."

explicacion: |
  MBR (Master Boot Record) es el estándar antiguo para el arranque con BIOS.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "intermedio"
  tags: ["diagnostico", "pitidos", "solucion"]

variables:
  diagnostico: "diagnostico"

respuesta: "diagnostico"
tipo: input

enunciado: "Los códigos de pitidos sirven para realizar un {diagnostico} rápido del fallo."

explicacion: |
  Cada patrón de pitidos corresponde a un error específico de hardware.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "intermedio"
  tags: ["perifericos", "inicializacion", "so"]

variables:
  dispositivo: "periféricos"

respuesta: "periféricos"
tipo: input

enunciado: "El SO inicializa los {dispositivo} como teclado y mouse tras cargar el kernel."

explicacion: |
  Sin los drivers de periféricos, el usuario no podría interactuar con la máquina.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "basico"
  tags: ["concepto", "puente", "definicion"]

variables:
  rol: "puente"

respuesta: "puente"
tipo: input

enunciado: "El proceso de boot es el {rol} entre la energía eléctrica y la funcionalidad digital."

explicacion: |
  Sin boot, no hay conexión entre la electricidad y el software.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "basico"
  tags: ["secuencia", "orden", "protocolo"]

variables:
  requisito: "estricto"

respuesta: "estricto"
tipo: input

enunciado: "El arranque sigue un protocolo {requisito} de inicialización."

explicacion: |
  El orden no puede alterarse: hardware -> firmware -> SO.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "intermedio"
  tags: ["firmware", "comparacion", "bios"]

variables:
  nombre: "BIOS"

respuesta: "BIOS"
tipo: input

enunciado: "¿Qué sistema firmware es el antecesor de UEFI?"

explicacion: |
  BIOS (Basic Input/Output System) fue el estándar por décadas.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "intermedio"
  tags: ["sector", "validez", "boot"]

variables:
  atributo: "válido"

respuesta: "válido"
tipo: input

enunciado: "La BIOS busca un sector de arranque {atributo} en el disco."

explicacion: |
  Si el sector no es válido, el sistema no sabrá cómo iniciar.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "intermedio"
  tags: ["gestor", "bootloader", "funcion"]

variables:
  responsable: "responsable"

respuesta: "responsable"
tipo: input

enunciado: "El gestor de arranque es el {responsable} de cargar el kernel."

explicacion: |
  El bootloader es el intermediario entre el firmware y el sistema operativo.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "basico"
  tags: ["finalizacion", "escritorio", "listo"]

variables:
  estado: "listo"

respuesta: "listo"
tipo: input

enunciado: "Cuando aparece el escritorio, la computadora está {estado} para uso cotidiano."

explicacion: |
  El arranque se considera completo cuando la interfaz de usuario es accesible.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "basico"
  tags: ["hardware", "inerte", "componentes"]

variables:
  descripcion: "inertes"

respuesta: "inertes"
tipo: input

enunciado: "Sin boot, los componentes serían simplemente {descripcion}."

explicacion: |
  El hardware por sí solo no ejecuta lógica ni gestiona datos.
```

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

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[["Escribir", "Enviar"], ["Leer", "Recibir"]]]

tipo: completar
respuestas_validas: ["Enviar", "Recibir"]
respuesta: escenarios[escenario_idx][0][0

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

respuesta: ["El controlador de DMA solicita el bus", "El procesador cede el control del bus", "Se realiza la transferencia de datos", "El controlador DMA libera el bus"]

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
respuestas_validas: ["datos"]

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

respuesta: escenario[idx][1
tipo: "mc"
opciones_explicitas: ["256", "65536", "1024", "4096"]

enunciado: "Si una computadora utiliza un bus de direcciones de {escenario[idx][0]} bits, ¿cuántas direcciones de memoria únicas puede direccionar?"

explicacion: |
  La cantidad de direcciones posibles es igual a 2 elevado a la potencia del número de líneas del bus de direcciones ($2^n$). 
  En el caso de 8 bits: $2^8 = 256$. En el caso de 16 bits: $2^{16} = 65536$.
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

variables:
  es_control: verdadero

respuesta: es_control
tipo: completar
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
  escenario: uno_de([
    ["Bus de direcciones de 16 bits", "65536"],
    ["Bus de direcciones de 32 bits", "4294967296"],
    ["Bus de direcciones de 64 bits", "18446744073709551616"]
  ])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1
tipo: completar
respuestas_validas: ["65536", "4294967296", "18446744073709551616"]

enunciado: "Si un sistema tiene un bus de direcciones de {escenario[idx][0]}, la cantidad máxima de ubicaciones de memoria que puede direccionar es de ___."

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
respuesta: ["Colocar la dirección en el bus de direcciones", "Enviar señal de lectura por el bus de control", "Recibir el dato por el bus de datos", "Procesar el dato en la ALU"]
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

variables:
  metodo: uno_de([
    ["Polling", "el CPU pregunta constantemente si el dispositivo está listo"],
    ["Interrupción", "el dispositivo avisa al CPU cuando está listo"]
  ])
  idx: uno_de([0, 1])

respuesta: metodo[idx][1
tipo: completar
respuestas_validas: ["el CPU pregunta constantemente si el dispositivo está listo", "el dispositivo avisa al CPU cuando está listo"]

enunciado: "Si un sistema utiliza el método de ___ para gestionar un periférico, el procesador pierde eficiencia porque ___."

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
respuestas_validas: ["direcciones"]

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

variables:
  es_control: verdadero

respuesta: es_control
tipo: completar
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
  datos: [
    ["transferencia_cpu", "La CPU debe intervenir en cada byte transferido"],
    ["transferencia_dma", "El controlador de DMA gestiona la transferencia sin la CPU"]
  ]

respuesta: datos[escenario_idx][1
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

respuesta: ["Bus local", "Bus de sistema", "Bus de expansión"]
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
  caracteristica: [
    "La CPU debe consultar constantemente el estado del dispositivo",
    "El dispositivo avisa a la CPU cuando está listo"
  ]

respuesta: caracteristica[metodo_idx
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

respuesta: true
tipo: completar
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

respuesta: ["Seleccionar dirección", "Enviar comando", "Transferir datos"]
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

respuesta: casos[idx][1
tipo: completar
respuestas_validas: ["direcciones", "datos"]

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

respuesta: config[idx][1

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
respuestas_validas: ["fetch", "buscar"]

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

respuesta: ["fetch", "decode", "execute"]
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

respuesta: escenario[idx][1
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

respuesta: [["es_falso", falso]
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

respuesta: ["fetch", "decode", "execute"]
tipo: "ordenar"
opciones_explicitas: ["fetch", "decode", "execute", "interrupt"]

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
  escenario: [
    ["La instrucción actual está en 0x1000 y cada instrucción ocupa 4 bytes. La siguiente dirección será:", "0x1004"],
    ["La instrucción actual está en 0x2000 y cada instrucción ocupa 8 bytes. La siguiente dirección será:", "0x2008"]
  ]

respuesta: escenario[idx][1
tipo: "completar"
respuestas_validas: ["0x1004", "0x2008"]

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
respuestas_validas: ["ALU", "CU", "RAM"]

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
respuesta: ["Fetch (Buscar)", "Decode (Decodificar)", "Execute (Ejecutar)", "Write-back (Escritura)"]

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
  datos: [
    ["Instrucción A: SUMAR R1, R2", "Instrucción B: SUBTRACT R1, R3"],
    ["Instrucción A: LOAD R1, [1000]", "Instrucción B: ADD R1, R2"]
  ]
  problema: [
    "R1",
    "R1"
  ]

enunciado: "En un procesador con pipeline, si la segunda instrucción requiere el resultado de la primera (como en el caso de {datos[escenario_idx][0]} y {datos[escenario_idx][1]}), se produce un conflicto de dependencia sobre el registro {datos[escenario_idx][1]}. ¿Cómo se llama este problema?"

opciones_explicitas: ["Data Hazard", "Control Hazard", "Structural Hazard", "Memory Leak"]
respuesta: "Data Hazard"

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
respuestas_validas: ["Program Counter", "Contador de Programa", "PC"]
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

respuestas_validas: ["interpretar", "traducir", "analizar"]
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

variables:
  escenario: uno_de([
    ["La instrucción es una suma de dos registros", "ejecutar"],
    ["La instrucción es un salto a otra dirección", "ejecutar"],
    ["La instrucción es una carga de memoria", "ejecutar"]
  ])

enunciado: "En el ciclo de instrucción, la fase de Execute se diferencia de la de Decode porque en la primera la CPU realmente ___ la operación lógica o aritmética solicitada."

respuesta: escenario[1
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
respuesta: ["Fetch", "Decode", "Execute"]
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

opciones_explicitas: ["verdadero", "falso"]
respuesta: "falso"
tipo: "vf"

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

respuestas_validas: ["fetch", "decode", "execute"]

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

respuesta: ["Fetch", "Decode", "Execute", "Write-back"]
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

variables:
  datos: [["La CPU intenta leer una dirección de memoria que no existe", "error_fetch"], ["La instrucción recibida es un código no reconocido", "error_decode"], ["La ALU detecta una división por cero", "error_execute"]]
  idx: uno_de([0, 1, 2])

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

## Sección: comunicacion-entre-procesos (20 preguntas)

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["procesos", "aislamiento"]

respuesta: verdadero
tipo: vf

enunciado: "Los procesos en un sistema operativo moderno funcionan de manera completamente integrada y comparten su espacio de memoria por defecto."

explicacion: |
  Falso. Los procesos se gestionan de manera aislada por seguridad y estabilidad. Si uno falla, no necesariamente se cae el resto gracias a este aislamiento.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["estabilidad", "seguridad"]

respuesta: 1
tipo: mc
opciones: 4

enunciado: "¿Cuál es una razón clave para que el sistema operativo gestione los procesos de forma aislada?"

explicacion: |
  El aislamiento mejora la estabilidad y la seguridad. Si un proceso falla, no corrompe la memoria de otros procesos ni cae todo el sistema.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["ejemplo", "portapapeles"]

respuesta: 2
tipo: mc
opciones: 4

enunciado: "Cuando copias texto de un editor y lo pegas en otro, ¿qué mecanismo está involucrado indirectamente?"

explicacion: |
  El portapapeles es una forma de IPC. El editor A escribe en una región de memoria compartida (o envía un mensaje al gestor de portapapeles) y el editor B lee de ahí.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "avanzado"
  tags: ["seguridad", "comparacion"]

respuesta: 1
tipo: mc
opciones: 4

enunciado: "¿Qué mecanismo es generalmente más seguro por defecto al no requerir conocimiento de los detalles internos del otro proceso?"

explicacion: |
  El intercambio de mensajes es más seguro porque los procesos no compiten por el mismo espacio de memoria, reduciendo riesgos de corrupción accidental.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["lenguaje", "sintaxis"]

respuesta: verdadero
tipo: vf

enunciado: "En el lenguaje de descripción de ejercicios, los booleanos se escriben como 'true' o 'false'."

explicacion: |
  Falso. En este DSL, los booleanos literales son 'verdadero' y 'falso', sin comillas.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["diseño", "ventajas"]

respuesta: 3
tipo: mc
opciones: 4

enunciado: "¿Cuál NO es una ventaja directa de usar IPC sobre un monolito gigante?"

explicacion: |
  La complejidad de implementación es una DESVENTAJA. Las ventajas son modularidad, seguridad, estabilidad y reutilización. La opción de "menor complejidad de código" es falsa.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["ipc", "definicion"]

respuesta: verdadero
tipo: vf

enunciado: "La comunicación entre procesos (IPC) es el conjunto de mecanismos que permiten que procesos independientes intercambien información o modifiquen su comportamiento."

explicacion: |
  Correcto. La IPC es fundamental para que aplicaciones aisladas colaboren, como cuando copiar y pegar texto involucra comunicación entre el editor y el sistema de almacenamiento temporal.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "intermedio"
  tags: ["seguridad", "mensajes"]

respuesta: verdadero
tipo: vf

enunciado: "El intercambio de mensajes es considerado más seguro que la memoria compartida porque los procesos no necesitan conocer los detalles internos del otro."

explicacion: |
  Correcto. Al usar canales definidos por el SO, los procesos mantienen su aislamiento interno, reduciendo riesgos de corrupción accidental de memoria.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["proceso", "definicion"]

respuesta: verdadero
tipo: vf

enunciado: "Cada aplicación que abres en tu computadora, como un navegador o un reproductor de música, es considerada un proceso separado."

explicacion: |
  Correcto. El sistema operativo trata a cada aplicación ejecutándose como un proceso independiente con su propio espacio de memoria.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "intermedio"
  tags: ["eficiencia", "diseno"]

respuesta: verdadero
tipo: vf

enunciado: "Dividir tareas complejas en procesos pequeños que se comunican mejora la eficiencia, seguridad y mantenimiento del software."

explicacion: |
  Correcto. La modularidad mediante IPC permite crear sistemas más robustos, fáciles de actualizar y menos propensos a fallos catastróficos.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "intermedio"
  tags: ["errores", "memoria_compartida"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos procesos intentan escribir en el mismo lugar de memoria compartida al mismo tiempo sin sincronización, pueden ocurrir errores."

explicacion: |
  Correcto. La condición de carrera puede llevar a corrupción de datos, por lo que se requieren mecanismos de exclusión mutua o semáforos.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["ejemplo", "portapapeles"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando copias y pegas texto, hay comunicación constante entre el editor de texto y el sistema de almacenamiento temporal."

explicacion: |
  Correcto. El portapapeles es un ejemplo cotidiano de IPC, donde un proceso escribe datos y otro los lee desde una zona compartida o canal del SO.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["estabilidad", "aislamiento"]

respuesta: verdadero
tipo: vf

enunciado: "Debido al aislamiento, si un proceso falla, no necesariamente se cae el resto del sistema."

explicacion: |
  Correcto. El aislamiento de memoria previene que un error en un proceso afecte la integridad de otros procesos o del kernel.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "avanzado"
  tags: ["aplicaciones", "rendimiento"]

respuesta: verdadero
tipo: vf

enunciado: "Para aplicaciones gráficas, la memoria compartida es preferible por su eficiencia en grandes volúmenes de datos."

explicacion: |
  Correcto. Los gráficos requieren transferir grandes cantidades de píxeles o vectores rápidamente, lo que la memoria compartida facilita mejor que los mensajes.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["mensajes", "estructura"]

respuesta: verdadero
tipo: vf

enunciado: "En el intercambio de mensajes, los datos viajan a través de un canal definido por el sistema operativo."

explicacion: |
  Correcto. El SO proporciona la infraestructura (colas de mensajes, pipes, etc.) que actúa como el canal de comunicación.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "intermedio"
  tags: ["diseno", "beneficios"]

respuesta: verdadero
tipo: vf

enunciado: "El uso de IPC mejora la capacidad de mantenimiento del software al permitir dividir tareas en partes manejables."

explicacion: |
  Correcto. Los módulos pueden desarrollarse, probarse y actualizarse independientemente, facilitando el mantenimiento a largo plazo.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "intermedio"
  tags: ["mensajes", "costo"]

respuesta: verdadero
tipo: vf

enunciado: "El intercambio de mensajes implica copiar datos de un espacio de memoria a otro, lo que puede ser lento."

explicacion: |
  Correcto. La sobrecarga de copiar datos entre espacios de usuario y kernel (o entre procesos) es el principal costo del modelo de mensajes.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "avanzado"
  tags: ["memoria_compartida", "control"]

respuesta: verdadero
tipo: vf

enunciado: "La memoria compartida requiere mecanismos de sincronización para evitar que procesos escriban simultáneamente en el mismo lugar."

explicacion: |
  Correcto. Sin sincronización (mutex, semáforos), la escritura concurrente lleva a condiciones de carrera y corrupción de datos.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["ejemplo", "portapapeles"]

respuesta: verdadero
tipo: vf

enunciado: "El sistema de almacenamiento temporal (portapapeles) participa en la comunicación cuando copias texto."

explicacion: |
  Correcto. El portapapeles es un servicio del SO que actúa como intermediario de datos entre el proceso que copia y el que pega.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "intermedio"
  tags: ["sincronizacion", "riesgos"]

respuesta: falso
tipo: vf

enunciado: "La memoria compartida elimina por completo la necesidad de mecanismos de sincronización entre procesos, ya que el sistema operativo gestiona automáticamente la integridad de los datos sin intervención del desarrollador."

explicacion: |
  Falso. La memoria compartida introduce el desafío de la sincronización. Si dos procesos escriben simultáneamente, pueden ocurrir condiciones de carrera o corrupción de datos, requiriendo semáforos o mutex.
```
