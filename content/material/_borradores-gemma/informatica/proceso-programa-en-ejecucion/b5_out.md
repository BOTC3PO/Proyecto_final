### 1 — El estado de un proceso
```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["conceptos_basicos", "sistema_operativo"]

variables:
  escenario: uno_de([["El archivo 'editor.exe' está guardado en el disco duro", "falso"], ["El proceso 'editor.exe' está usando 500MB de RAM", "verdadero"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: vf

enunciado: "Analice el siguiente escenario: {escenario[idx][0]}. ¿Es esto una descripción de un proceso en ejecución?"

explicacion: |
  Un programa es una entidad pasiva (un archivo en disco), mientras que un proceso es una entidad activa (un programa en ejecución con recursos asignados como RAM y CPU).
```

### 2 — Diferencia fundamental
```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["diferencias"]

respuesta: "proceso"
tipo: completar
respuestas_validas: ["proceso"]

enunciado: "Un programa es una secuencia de instrucciones almacenadas en un medio no volátil, mientras que un ___ es la instancia de esa secuencia siendo ejecutada por la CPU."

explicacion: |
  La diferencia clave es el estado de actividad: el programa es el código estático y el proceso es la ejecución dinámica.
```

### 3 — Recursos de un proceso
```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["recursos", "gestion_memoria"]

variables:
  caso: uno_de([["Un proceso requiere: [Memoria, CPU, Registradores]", "El programa en disco requiere: [Almacenamiento, Instrucciones, Nombre de archivo]"]])
  idx: uno_de([0, 1])

respuesta: caso[idx][0]
tipo: mc
opciones_explicitas: ["Un proceso requiere: [Memoria, CPU, Registradores]", "El programa en disco requiere: [Almacenamiento, Instrucciones, Nombre de archivo]"]

enunciado: "Considere el siguiente caso: {caso[idx][0]}. ¿Cuál de las opciones describe correctamente los recursos que se gestionan en ese escenario?"

explicacion: |
  Un proceso necesita recursos volátiles y de procesamiento (RAM, CPU, registros) para poder operar.
```

### 4 — Ciclo de vida de un proceso
```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["ciclo_vida", "ordenar"]

respuesta: ["Cargar programa", "Asignar memoria", "Ejecutar instrucciones", "Liberar recursos"]
tipo: ordenar
opciones_explicitas: ["Cargar programa", "Asignar memoria", "Ejecutar instrucciones", "Liberar recursos"]

enunciado: "Ordene los pasos lógicos que ocurren desde que un usuario hace doble clic en un ejecutable hasta que el proceso finaliza:"

explicacion: |
  El sistema operativo primero carga el código del disco a la RAM, asigna memoria y recursos, la CPU ejecuta las instrucciones y, finalmente, el proceso se cierra liberando los recursos.
```

### 5 — Identificación de instancias
```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "avanzado"
  tags: ["instancias", "pids"]

variables:
  escenario: uno_de([["Se abren dos ventanas independientes del navegador Chrome", "Dos procesos distintos"], ["Se abre un solo archivo de texto", "Un solo proceso"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][0]
tipo: mc
opciones_explicitas: ["Dos procesos distintos", "Un solo proceso"]

enunciado: "Analice el escenario: {escenario[idx][0]}. ¿Qué sucede a nivel de sistema operativo?"

explicacion: |
  Cada vez que se inicia una instancia de un programa, el sistema operativo crea un proceso nuevo con su propio espacio de memoria y un PID (Process Identifier) único, incluso si el código fuente es el mismo.
```