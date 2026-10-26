### 1 — Algoritmo FCFS (First-Come, First-Served)
```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "basico"
  tags: ["scheduling", "fcfs", "cpu"]

variables:
  escenario: uno_de([
    [10, 5, 8],
    [2, 7, 4],
    [5, 5, 5]
  ])

enunciado: "En un sistema con planificación FCFS, tres procesos llegan en el orden dado con los siguientes tiempos de ráfaga (burst time): P1: {escenario[0]}, P2: {escenario[1]} y P3: {escenario[2]}. Si el tiempo de llegada de todos es 0, ¿cuál es el tiempo de espera promedio?"

pasos:
  - "Calcular el tiempo de espera de cada proceso: P1=0, P2=P1_burst, P3=P1_burst+P2_burst."
  - "Sumar los tiempos de espera y dividir por la cantidad de procesos."

respuesta: (0 + escenario[0] + (escenario[0] + escenario[1])) / 3
tipo: input
tolerancia_abs: 0.1

explicacion: |
  En FCFS, el primer proceso no espera nada. El segundo espera lo que dure el primero, y el tercero la suma de los dos anteriores. El promedio es la suma de esperas dividida por el total de procesos.
```

### 2 — Algoritmo SJF (Shortest Job First)
```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "intermedio"
  tags: ["sjf", "scheduling", "optimal"]

variables:
  procesos: [
    ["P1", 8],
    ["P2", 3],
    ["P3", 6],
    ["P4", 2]
  ]

enunciado: "Se tiene una cola de procesos con los siguientes tiempos de ráfaga: P1: 8ms, P2: 3ms, P3: 6ms y P4: 2ms. Si el planificador utiliza el algoritmo SJF (Non-preemptive), ¿cuál es el orden de ejecución de los procesos?"

opciones_explicitas: ["P1, P2, P3, P4", "P4, P2, P3, P1", "P4, P2, P1, P3", "P2, P4, P3, P1"]
respuesta: "P4, P2, P3, P1"
tipo: mc

explicacion: |
  El algoritmo SJF selecciona siempre el proceso con la ráfaga de CPU más corta disponible. Ordenando de menor a mayor ráfaga obtenemos: P4 (2), P2 (3), P3 (6) y P1 (8).
```

### 3 — Planificación por Prioridades
```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "intermedio"
  tags: ["priority", "scheduling"]

variables:
  caso: uno_de([
    [1, 5],
    [10, 2],
    [5, 8]
  ])

enunciado: "En un sistema operativo con planificación por prioridades (donde un número menor indica mayor prioridad), se tienen dos procesos: P1 con prioridad {caso[0]} y P2 con prioridad {caso[1]}. Si P1 llega primero, pero P2 tiene una prioridad más alta, en un sistema de planificación por prioridades NO PREEMPTIVE, ¿cuál es la prioridad del proceso que se está ejecutando actualmente si P1 ya tomó la CPU?"

respuesta: "falso"
tipo: vf

explicacion: |
  En la planificación por prioridades NO PREEMPTIVE, una vez que un proceso toma la CPU, no puede ser expulsado por uno de mayor prioridad; debe esperar a que termine su ráfaga actual.
```

### 4 — Round Robin (RR)
```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "avanzado"
  tags: ["round_robin", "quantum"]

variables:
  quantum: 4
  p_burst: 10

enunciado: "Un proceso tiene una ráfaga de CPU de {p_burst} ms. Si el sistema utiliza un algoritmo Round Robin con un quantum de {quantum} ms, ¿cuántas veces será el proceso movido de vuelta a la cola de listos (ready queue) debido a que se le agota su quantum antes de terminar?"

respuesta: 2
tipo: input
tolerancia_abs: 0

explicacion: |
  El proceso consume: 4ms (1ra vez), 4ms (2da vez), y le quedan 2ms. Al terminar los 2ms finales, el proceso finaliza y no vuelve a la cola. Por lo tanto, fue expulsado por quantum 2 veces.
```

### 5 — Estados de un Proceso
```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "basico"
  tags: ["process_states", "os"]

enunciado: "Ordena correctamente los estados por los que pasa un proceso desde que se crea hasta que termina su ejecución en un sistema operativo estándar:"

opciones_explicitas: ["Nuevo, Listo, Ejecución, Bloqueado, Terminado", "Nuevo, Ejecución, Listo, Bloqueado, Terminado", "Nuevo, Listo, Bloqueado, Ejecución, Terminado", "Nuevo, Listo, Ejecución, Terminado, Bloqueado"]
respuesta: ["Nuevo, Listo, Ejecución, Bloqueado, Terminado"]
tipo: ordenar

explicacion: |
  El ciclo de vida estándar es: se crea (Nuevo), espera turno (Listo), usa la CPU (Ejecución), espera un evento de E/S (Bloqueado) y finalmente finaliza (Terminado).
```