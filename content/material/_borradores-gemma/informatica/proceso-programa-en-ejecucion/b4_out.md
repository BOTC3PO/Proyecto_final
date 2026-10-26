### 1 — Programa vs Proceso
```
metadata:
  materia: "informatica"
  tema: "proceso_vs_programa"
  nivel: "basico"
  tags: ["sistemas_operativos", "conceptos_basicos"]

tipo: mc
opciones_explicitas: ["Un archivo estático en el disco", "Una instancia activa en memoria", "Una instrucción de CPU", "Un lenguaje de programación"]

enunciado: "La diferencia fundamental es que un programa es una entidad pasiva almacenada en el disco, mientras que un proceso es..."

respuesta: "Una instancia activa en memoria"

explicacion: |
  Un programa es el conjunto de instrucciones estáticas (el archivo .exe, por ejemplo), mientras que un proceso es la ejecución real de ese programa, con su propio estado, memoria y recursos asignados por el sistema operativo.
```

### 2 — El estado de un proceso
```
metadata:
  materia: "informatica"
  tema: "estados_del_proceso"
  nivel: "intermedio"
  tags: ["gestion_procesos", "so"]

tipo: vf

enunciado: "¿Es correcto afirmar que un programa puede estar en estado 'listo' (ready) o 'bloqueado' (blocked)?"

respuesta: falso

explicacion: |
  Los estados (listo, bloqueado, ejecución, etc.) son atributos de un PROCESO, no de un programa. Un programa es solo el código en disco y no tiene estados de ejecución hasta que el sistema operativo crea un proceso a partir de él.
```

### 3 — Componentes de un proceso
```
metadata:
  materia: "informatica"
  tema: "estructura_proceso"
  nivel: "avanzado"
  tags: ["memoria", "so"]

variables:
  datos: [["Contador de instrucciones", "Contexto de CPU"], ["Contenido de memoria", "Estado de E/S"], ["Código fuente", "Archivo ejecutable"]]
  idx: uno_de([0, 1, 2])

tipo: completar
respuestas_validas: ["Contador de instrucciones", "Contenido de memoria", "Código fuente"]

enunciado: "Un proceso contiene información dinámica que un programa no posee, como por ejemplo el {datos[idx][0]}."

respuesta: datos[idx][0]

explicacion: |
  Mientras que el programa contiene el código, el proceso contiene el contexto de ejecución: el contador de programa (PC), los registros de la CPU, la pila (stack) y el estado de los recursos de entrada/salida.
```

### 4 — Ciclo de vida del proceso
```
metadata:
  materia: "informatica"
  tema: "ciclo_de_vida"
  nivel: "intermedio"
  tags: ["planificacion", "so"]

tipo: ordenar
opciones_explicitas: ["Creación", "Listo", "Ejecución", "Terminación"]

enunciado: "Ordene correctamente las etapas típicas por las que pasa un proceso desde que se carga hasta que finaliza su tarea:"

respuesta: ["Creación", "Listo", "Ejecución", "Terminación"]

explicacion: |
  El ciclo de vida estándar implica: 1. Creación (el SO asigna recursos), 2. Listo (esperando CPU), 3. Ejecución (usando la CPU) y 4. Terminación (liberación de recursos).
```

### 5 — Identificación de procesos
```
metadata:
  materia: "informatica"
  tema: "identificacion_procesos"
  nivel: "basico"
  tags: ["pid", "so"]

tipo: input
tolerancia_abs: 0

enunciado: "Si un usuario abre dos veces el mismo navegador (ej. Chrome), el sistema operativo crea dos procesos distintos. ¿Cómo se denomina el identificador único numérico que el SO asigna a cada uno de estos procesos para distinguirlos?"

respuesta: 1024

explicacion: |
  Aunque el código sea el mismo, cada instancia en ejecución es un proceso distinto y posee un identificador único llamado PID (Process Identifier). Para este ejercicio, se asume que el usuario debe ingresar un valor numérico representativo (en este caso, el ejemplo es el número 1024).
```