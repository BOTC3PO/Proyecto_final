# Informatica — arranque de la computadora boot (cuestionario, 26 preguntas VBLang)

> Tema: `informatica/arranque-de-la-computadora-boot`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

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

### 2 — pregunta 2

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

### 3 — pregunta 3

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

### 4 — pregunta 4

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

### 5 — pregunta 5

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

### 6 — pregunta 6

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

### 7 — pregunta 7

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

### 8 — pregunta 8

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

### 9 — pregunta 9

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

### 10 — pregunta 10

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

### 11 — pregunta 11

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

### 12 — pregunta 12

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

### 13 — pregunta 13

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

### 14 — pregunta 14

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

### 15 — pregunta 15

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

### 16 — pregunta 16

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

### 17 — pregunta 17

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

### 18 — pregunta 18

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

### 19 — pregunta 19

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

### 20 — pregunta 20

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

### 21 — pregunta 21

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

### 22 — pregunta 22

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

### 23 — pregunta 23

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

### 24 — pregunta 24

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

### 25 — pregunta 25

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

### 26 — pregunta 26

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
