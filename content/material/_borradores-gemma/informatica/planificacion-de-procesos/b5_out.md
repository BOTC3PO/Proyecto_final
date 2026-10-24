### 1 — Algoritmo Round Robin
```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "intermedio"
  tags: ["scheduler", "round_robin", "cpu"]

variables:
  escenario: uno_de([[10, 4], [15, 5], [8, 3]])
  idx: uno_de([0, 1, 2])
  quantum: 4

respuesta: escenario[idx][1]
tipo: input
tolerancia_abs: 0

enunciado: "Se tiene un proceso con un tiempo de ráfaga de {escenario[idx][0]} ms. Si el planificador utiliza el algoritmo Round Robin con un quantum de {quantum} ms, ¿cuántos cortes de tiempo (context switches) se realizarán antes de que el proceso termine y se libere la CPU?"

pasos:
  - "Calcular la cantidad de ráfagas completas: ceil(tiempo_rafaga / quantum)"
  - "Restar 1 al resultado para obtener la cantidad de interrupciones/cortes antes del final."

explicacion: |
  En Round Robin, el proceso se interrumpe cada vez que alcanza el quantum. Si el tiempo es 10 y el quantum es 4, el proceso corre: [0-4], [4-8], [8-10]. Se realizaron 2 cortes de tiempo antes de terminar.
```

### 2 — Prioridades de Procesos
```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "basico"
  tags: ["prioridad", "scheduling"]

respuesta: "Alto"
tipo: mc
opciones_explicitas: ["Alto", "Bajo", "Medio", "Nulo"]

enunciado: "En un sistema operativo con planificación basada en prioridades, si un proceso de sistema (kernel) entra en la cola de listos, su prioridad suele ser ___ para asegurar la estabilidad del sistema."

explicacion: |
  Los procesos del núcleo o del sistema operativo tienen prioridad alta para garantizar que las tareas críticas de gestión de hardware y memoria se completen sin retrasos.
```

### 3 — Estado de un Proceso
```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "basico"
  tags: ["estados", "process_control_block"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es verdadero que un proceso en estado 'Waiting' (Esperando) se encuentra actualmente utilizando la CPU para ejecutar sus instrucciones?"

explicacion: |
  Falso. Un proceso en estado 'Waiting' está esperando un evento externo (como la finalización de una operación de E/S) y no está utilizando la CPU.
```

### 4 — Algoritmo FIFO (First-In, First-Out)
```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "intermedio"
  tags: ["fifo", "fcfs"]

variables:
  orden: [[2, 5, 8], [5, 2, 8], [8, 5, 2]]
  idx: uno_de([0, 1, 2])

respuesta: orden[idx]
tipo: ordenar

opciones_explicitas: [2, 5, 8]

enunciado: "Se tienen tres procesos que llegan a la cola de listos en el siguiente orden de tiempo de llegada: P1 (t=2), P2 (t=5) y P3 (t=8). Si el planificador utiliza el algoritmo FCFS (First-Come, First-Served), ordene la secuencia de ejecución de los procesos."

explicacion: |
  El algoritmo FCFS atiende los procesos estrictamente en el orden en que llegan a la cola de listos.
```

### 5 — Tiempo de Espera (Turnaround)
```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "avanzado"
  tags: ["turnaround", "waiting_time"]

variables:
  datos: [[12, 5], [20, 10], [15, 7]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: [5, 10, 7]

enunciado: "Un proceso llega al sistema en el tiempo 0. Su tiempo de ráfaga de CPU es de {datos[idx][0]} ms. Si el proceso termina exactamente cuando su tiempo de ejecución se completa sin esperas adicionales de E/S, su tiempo de retorno (turnaround time) es de ___ ms."

explicacion: |
  El tiempo de retorno (turnaround time) es el tiempo transcurrido desde que el proceso llega hasta que termina. En este caso simple: Turnaround = Tiempo de finalización - Tiempo de llegada.
```