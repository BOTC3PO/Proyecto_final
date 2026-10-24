### 1 — Planificación de procesos vs. Interrupciones
```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "intermedio"
  tags: ["so", "cpu", "gestion"]

respuesta: falso
tipo: vf

enunciado: "La planificación de procesos es un mecanismo de hardware diseñado exclusivamente para que el procesador pueda pausar una tarea ante un evento externo."

explicacion: |
  Falso. La planificación de procesos es una función del Sistema Operativo (software) para gestionar el tiempo de CPU. Las interrupciones son señales de hardware o software que alteran el flujo de ejecución actual.
```

### 2 — Algoritmo Round Robin vs. FCFS
```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "intermedio"
  tags: ["algoritmos", "scheduling"]

variables:
  escenario: uno_de([["Round Robin", "FCFS"], ["FCFS", "Round Robin"]])

respuesta: escenario[0]
tipo: mc

opciones_explicitas: ["Round Robin", "FCFS"]

enunciado: "Si un sistema operativo utiliza un algoritmo de planificación que garantiza un tiempo de respuesta equitativo mediante el uso de una cuota de tiempo (quantum) para cada proceso, ¿qué algoritmo está utilizando y en qué se diferencia del FCFS (First-Come, First-Served)?"

explicacion: |
  El algoritmo Round Robin utiliza un quantum de tiempo para evitar que un proceso largo monopolice la CPU, mientras que en FCFS los procesos se ejecutan estrictamente en el orden en que llegan, lo que puede causar el efecto de 'convoy'.
```

### 3 — Estados de un proceso
```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "basico"
  tags: ["estados", "ciclo_de_vida"]

respuesta: ["Creado", "Listo", "Ejecución", "Bloqueado", "Terminado"]
tipo: ordenar

opciones_explicitas: ["Creado", "Listo", "Ejecución", "Bloqueado", "Terminado"]

enunciado: "Ordene cronológicamente los estados típicos de un proceso en un sistema operativo, desde que se instancia hasta que finaliza su ejecución."

explicacion: |
  El ciclo de vida estándar comienza con la creación, pasa por la cola de listos, la ejecución en CPU, el bloqueo por espera de I/O y finalmente el término.
```

### 4 — Context Switching
```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "avanzado"
  tags: ["overhead", "contexto"]

respuesta: "cambio de contexto"
tipo: completar

respuestas_validas: ["cambio de contexto", "context switch"]

enunciado: "El proceso de guardar el estado de un proceso que está en uso por la CPU para cargar el estado de un nuevo proceso se denomina ___."

explicacion: |
  El cambio de contexto (context switch) es una operación necesaria para la multiprogramación, pero implica un 'overhead' o costo de tiempo de CPU que no se realiza en trabajo útil del usuario.
```

### 5 — Prioridad vs. Tiempo de ráfaga
```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "intermedio"
  tags: ["prioridad", "scheduling"]

variables:
  caso: uno_de([[10, "Prioridad"], [5, "Tiempo de ráfaga"]])

respuesta: caso[1]
tipo: mc

opciones_explicitas: ["Prioridad", "Tiempo de ráfaga"]

enunciado: "En un algoritmo de planificación basado en el tiempo de ráfaga (Shortest Job First), el criterio de decisión para elegir el siguiente proceso es el valor de {caso[0]}. ¿En qué se diferencia este criterio de un algoritmo basado en {caso[1]}?"

explicacion: |
  En SJF se busca minimizar el tiempo de espera promedio priorizando procesos cortos. En el de prioridad, se busca atender primero tareas críticas independientemente de su duración.
```