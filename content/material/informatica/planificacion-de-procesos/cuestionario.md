# Informatica — Planificacion de procesos (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Planificador

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "basico"
  tags: ["conceptos", "so"]

respuesta: "scheduler"
tipo: completar
respuestas_validas:
  - "scheduler"
  - "planificador"

enunciado: "El componente del sistema operativo encargado de decidir qué proceso en la cola de listos tendrá el control de la CPU se denomina ___."

explicacion: |
  El scheduler (o planificador) es el algoritmo que decide la asignación de recursos de la CPU para maximizar la eficiencia del sistema.
```

### 2 — Tipos de Planificación

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "intermedio"
  tags: ["tipos", "algoritmos"]

respuesta: "No preemptiva"
tipo: mc
opciones_explicitas: ["Preemptiva", "No preemptiva"]

enunciado: "En un modelo de planificación ___, una vez que un proceso toma el control de la CPU, no puede ser retirado de él hasta que finalice o se bloquee por una operación de E/S."

explicacion: |
  En la planificación no preemptiva, el proceso mantiene la CPU hasta que termina su ejecución o realiza una llamada al sistema que lo deja en estado de espera.
```

### 3 — Estados de un Proceso

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "basico"
  tags: ["estados", "ciclo_de_vida"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que un proceso en estado 'Ready' (Listo) tiene todos los recursos necesarios para ejecutarse y solo está esperando que el planificador le asigne la CPU?"

explicacion: |
  Verdadero. Un proceso en estado 'Listo' está preparado para ejecutarse, pero la CPU está siendo utilizada por otro proceso.
```

### 4 — Ciclo de Vida del Proceso

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "intermedio"
  tags: ["estados", "secuencia"]

respuesta_orden: ["Nuevo", "Listo", "Ejecución", "Terminado"]
tipo: ordenar
opciones_explicitas: ["Nuevo", "Listo", "Ejecución", "Terminado"]

enunciado: "Ordene cronológicamente los estados típicos de un proceso desde su creación hasta su finalización, omitiendo el estado de espera (I/O wait):"

explicacion: |
  La secuencia lógica es: Creación (Nuevo) -> Cola de espera de CPU (Listo) -> Uso de CPU (Ejecución) -> Fin de vida (Terminado).
```

### 5 — Objetivo de la Planificación

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "avanzado"
  tags: ["metricas", "rendimiento"]

respuesta: "Tiempo de respuesta"
tipo: mc
opciones_explicitas: ["Tiempo de respuesta", "Turnaround"]

enunciado: "El tiempo que transcurre desde que se envía una solicitud hasta que se produce la primera respuesta es una métrica clave llamada ___."

explicacion: |
  El 'Response Time' es vital en sistemas interactivos para garantizar que el usuario sienta que el sistema responde rápidamente.
```

### 6 — Algoritmo FCFS (First-Come, First-Served)

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "basico"
  tags: ["scheduling", "fcfs", "cpu"]

variables:
  escenario: uno_de([[10, 5, 8], [2, 7, 4], [5, 5, 5]])

enunciado: "En un sistema con planificación FCFS, tres procesos llegan en el orden dado con los siguientes tiempos de ráfaga (burst time): P1: {escenario[0]}, P2: {escenario[1]} y P3: {escenario[2]}. Si el tiempo de llegada de todos es 0, ¿cuál es el tiempo de espera promedio?"

pasos:
  - "Calcular el tiempo de espera de cada proceso: P1=0, P2=P1_burst, P3=P1_burst+P2_burst."
  - "Sumar los tiempos de espera y dividir por la cantidad de procesos."

respuesta: (0 + escenario[0] + (escenario[0] + escenario[1])) / 3
tipo: completar
tolerancia_abs: 0.1

explicacion: |
  En FCFS, el primer proceso no espera nada. El segundo espera lo que dure el primero, y el tercero la suma de los dos anteriores. El promedio es la suma de esperas dividida por el total de procesos.
```

### 7 — Algoritmo SJF (Shortest Job First)

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "intermedio"
  tags: ["sjf", "scheduling", "optimal"]

variables:
  procesos: [["P1", 8], ["P2", 3], ["P3", 6], ["P4", 2]]

enunciado: "Se tiene una cola de procesos con los siguientes tiempos de ráfaga: P1: 8ms, P2: 3ms, P3: 6ms y P4: 2ms. Si el planificador utiliza el algoritmo SJF (Non-preemptive), ¿cuál es el orden de ejecución de los procesos?"

opciones_explicitas: ["P1, P2, P3, P4", "P4, P2, P3, P1", "P4, P2, P1, P3", "P2, P4, P3, P1"]
respuesta: "P4, P2, P3, P1"
tipo: mc

explicacion: |
  El algoritmo SJF selecciona siempre el proceso con la ráfaga de CPU más corta disponible. Ordenando de menor a mayor ráfaga obtenemos: P4 (2), P2 (3), P3 (6) y P1 (8).
```

### 8 — Planificación por Prioridades

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "intermedio"
  tags: ["priority", "scheduling"]

variables:
  caso: uno_de([[1, 5], [10, 2], [5, 8]])

enunciado: "En un sistema operativo con planificación por prioridades (donde un número menor indica mayor prioridad), se tienen dos procesos: P1 con prioridad {caso[0]} y P2 con prioridad {caso[1]}. Si P1 llega primero, pero P2 tiene una prioridad más alta, en un sistema de planificación por prioridades NO PREEMPTIVE, ¿cuál es la prioridad del proceso que se está ejecutando actualmente si P1 ya tomó la CPU?"

respuesta: caso[0]
tipo: completar
tolerancia_abs: 0
explicacion: |
  En la planificación por prioridades NO PREEMPTIVE, una vez que un proceso toma la CPU, no puede ser expulsado por uno de mayor prioridad; debe esperar a que termine su ráfaga actual. Por lo tanto, el proceso en ejecución sigue siendo P1, con su prioridad original ({caso[0]}).
```

### 9 — Round Robin (RR)

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
tipo: completar
tolerancia_abs: 0

explicacion: |
  El proceso consume: 4ms (1ra vez), 4ms (2da vez), y le quedan 2ms. Al terminar los 2ms finales, el proceso finaliza y no vuelve a la cola. Por lo tanto, fue expulsado por quantum 2 veces.
```

### 10 — Estados de un Proceso

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "basico"
  tags: ["process_states", "os"]

enunciado: "Ordena correctamente los estados por los que pasa un proceso desde que se crea hasta que termina su ejecución en un sistema operativo estándar:"

opciones_explicitas: ["Nuevo", "Listo", "Ejecución", "Bloqueado", "Terminado"]
respuesta_orden: ["Nuevo", "Listo", "Ejecución", "Bloqueado", "Terminado"]
tipo: ordenar

explicacion: |
  El ciclo de vida estándar es: se crea (Nuevo), espera turno (Listo), usa la CPU (Ejecución), espera un evento de E/S (Bloqueado) y finalmente finaliza (Terminado).
```

### 11 — Confusión entre procesos y hilos

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "intermedio"
  tags: ["conceptos_basicos", "hilos", "procesos"]

respuesta: falso

tipo: vf

enunciado: "Un hilo (thread) es una unidad de ejecución independiente que posee su propio espacio de direccionamiento de memoria, separado del proceso que lo contiene."

explicacion: |
  Falso. Los hilos comparten el espacio de direccionamiento de su proceso padre (memoria, archivos abiertos, etc.), lo que permite una comunicación más rápida pero también requiere mayor sincronización para evitar condiciones de carrera.
```

### 12 — El concepto de Context Switch

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "intermedio"
  tags: ["overhead", "context_switch"]

variables:
  escenario: uno_de([["El sistema operativo guarda el estado de los registros del proceso A para cargar el proceso B.", "Cambio de contexto"], ["El procesador ejecuta instrucciones de un proceso de usuario de forma continua.", "Ejecución"], ["Un proceso solicita acceso a un recurso de E/S y queda bloqueado.", "Espera de E/S"]])

enunciado: "En el siguiente escenario, ¿qué acción se está describiendo?: {escenario[0]}"

opciones_explicitas: ["Cambio de contexto", "Ejecución", "Espera de E/S"]

respuesta: escenario[1]

tipo: mc

explicacion: |
  El cambio de contexto (context switch) es la operación de guardar el estado (contexto) de un proceso o hilo para que pueda ser reanudado más tarde, permitiendo que la CPU pase a otro proceso.
```

### 13 — Algoritmos de planificación: FCFS vs SJF

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "avanzado"
  tags: ["algoritmos", "sjf", "eficiencia"]

enunciado: "Se tienen tres procesos con tiempos de ráfaga de CPU (burst time) de 10, 2 y 5 ms respectivamente. Si aplicamos el algoritmo Shortest Job First (SJF) sin preempción, ordena los tiempos de ráfaga de menor a mayor (ese es el orden de ejecución):"

opciones_explicitas: ["10", "2", "5"]

respuesta_orden: ["2", "5", "10"]

tipo: ordenar

explicacion: |
  El algoritmo SJF (Shortest Job First) selecciona siempre el proceso con el tiempo de ráfaga más corto para minimizar el tiempo de espera promedio.
```

### 14 — El problema de la inanición (Starvation)

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "intermedio"
  tags: ["starvation", "prioridades"]

respuesta: "inanición"

tipo: completar

enunciado: "En un sistema de planificación basado en prioridades, si los procesos de alta prioridad llegan constantemente, los procesos de baja prioridad pueden no recibir tiempo de CPU nunca, un fenómeno conocido como ___."

respuestas_validas:
  - "inanición"
  - "starvation"

explicacion: |
  La inanición ocurre cuando un proceso es ignorado indefinidamente porque el planificador siempre elige otros procesos con mayor prioridad o que se ajustan mejor a un criterio específico.
```

### 15 — Preemptive vs Non-preemptive

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "basico"
  tags: ["preemption", "kernel"]

respuesta: verdadero

tipo: vf

enunciado: "En la planificación no apropiativa (non-preemptive), una vez que un proceso toma el control de la CPU, no puede ser retirado de ella hasta que termine su ejecución o pase a un estado de espera."

explicacion: |
  Verdadero. A diferencia de la planificación apropiativa (preemptive), donde el SO puede interrumpir un proceso para dar paso a otro, en la no apropiativa el proceso retiene la CPU hasta que libera el recurso voluntariamente.
```

### 16 — Planificación de procesos vs. Interrupciones

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

### 17 — Algoritmo Round Robin vs. FCFS

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "intermedio"
  tags: ["algoritmos", "scheduling"]

respuesta: "Round Robin"
tipo: mc

opciones_explicitas: ["Round Robin", "FCFS"]

enunciado: "Si un sistema operativo utiliza un algoritmo de planificación que garantiza un tiempo de respuesta equitativo mediante el uso de una cuota de tiempo (quantum) para cada proceso, ¿qué algoritmo está utilizando y en qué se diferencia del FCFS (First-Come, First-Served)?"

explicacion: |
  El algoritmo Round Robin utiliza un quantum de tiempo para evitar que un proceso largo monopolice la CPU, mientras que en FCFS los procesos se ejecutan estrictamente en el orden en que llegan, lo que puede causar el efecto de 'convoy'.
```

### 18 — Estados de un proceso

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "basico"
  tags: ["estados", "ciclo_de_vida"]

respuesta_orden: ["Creado", "Listo", "Ejecución", "Bloqueado", "Terminado"]
tipo: ordenar

opciones_explicitas: ["Creado", "Listo", "Ejecución", "Bloqueado", "Terminado"]

enunciado: "Ordene cronológicamente los estados típicos de un proceso en un sistema operativo, desde que se instancia hasta que finaliza su ejecución."

explicacion: |
  El ciclo de vida estándar comienza con la creación, pasa por la cola de listos, la ejecución en CPU, el bloqueo por espera de I/O y finalmente el término.
```

### 19 — Context Switching

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "avanzado"
  tags: ["overhead", "contexto"]

respuesta: "cambio de contexto"
tipo: completar

respuestas_validas:
  - "cambio de contexto"
  - "context switch"

enunciado: "El proceso de guardar el estado de un proceso que está en uso por la CPU para cargar el estado de un nuevo proceso se denomina ___."

explicacion: |
  El cambio de contexto (context switch) es una operación necesaria para la multiprogramación, pero implica un 'overhead' o costo de tiempo de CPU que no se realiza en trabajo útil del usuario.
```

### 20 — Prioridad vs. Tiempo de ráfaga

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "intermedio"
  tags: ["prioridad", "scheduling"]

respuesta: "la prioridad"
tipo: completar
respuestas_validas:
  - "la prioridad"
  - "prioridad"

enunciado: "En un algoritmo de planificación Shortest Job First (SJF), el criterio de decisión para elegir el siguiente proceso es el tiempo de ráfaga. En cambio, un algoritmo de planificación por prioridades toma su decisión basándose en ___."

explicacion: |
  En SJF se busca minimizar el tiempo de espera promedio priorizando procesos cortos. En el de prioridad, se busca atender primero tareas críticas independientemente de su duración.
```

### 21 — Algoritmo Round Robin

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "intermedio"
  tags: ["scheduler", "round_robin", "cpu"]

variables:
  datos: [[10, 2], [15, 3], [8, 1]]
  idx: uno_de([0, 1, 2])
  quantum: 4

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "Se tiene un proceso con un tiempo de ráfaga de {datos[idx][0]} ms. Si el planificador utiliza el algoritmo Round Robin con un quantum de {quantum} ms, ¿cuántos cortes de tiempo (context switches) se realizarán antes de que el proceso termine y se libere la CPU?"

pasos:
  - "Calcular la cantidad de ráfagas completas: ceil(tiempo_rafaga / quantum)"
  - "Restar 1 al resultado para obtener la cantidad de interrupciones/cortes antes del final."

explicacion: |
  En Round Robin, el proceso se interrumpe cada vez que alcanza el quantum. Si el tiempo es 10 y el quantum es 4, el proceso corre: [0-4], [4-8], [8-10]. Se realizaron 2 cortes de tiempo antes de terminar.
```

### 22 — Prioridades de Procesos

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

### 23 — Estado de un Proceso

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "basico"
  tags: ["estados", "process_control_block"]

respuesta: falso
tipo: vf

enunciado: "¿Es verdadero que un proceso en estado 'Waiting' (Esperando) se encuentra actualmente utilizando la CPU para ejecutar sus instrucciones?"

explicacion: |
  Falso. Un proceso en estado 'Waiting' está esperando un evento externo (como la finalización de una operación de E/S) y no está utilizando la CPU.
```

### 24 — Algoritmo FIFO (First-In, First-Out)

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "intermedio"
  tags: ["fifo", "fcfs"]

tipo: ordenar

opciones_explicitas: [2, 5, 8]
respuesta_orden: [2, 5, 8]

enunciado: "Se tienen tres procesos que llegan a la cola de listos en el siguiente orden de tiempo de llegada: P1 (t=2), P2 (t=5) y P3 (t=8). Si el planificador utiliza el algoritmo FCFS (First-Come, First-Served), ordene la secuencia de ejecución de los procesos."

explicacion: |
  El algoritmo FCFS atiende los procesos estrictamente en el orden en que llegan a la cola de listos.
```

### 25 — Tiempo de Espera (Turnaround)

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "avanzado"
  tags: ["turnaround", "waiting_time"]

variables:
  datos: [12, 20, 15]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx]
tipo: completar
respuestas_validas:
  - 12
  - 20
  - 15

enunciado: "Un proceso llega al sistema en el tiempo 0. Su tiempo de ráfaga de CPU es de {datos[idx]} ms. Si el proceso termina exactamente cuando su tiempo de ejecución se completa sin esperas adicionales de E/S, su tiempo de retorno (turnaround time) es de ___ ms."

explicacion: |
  El tiempo de retorno (turnaround time) es el tiempo transcurrido desde que el proceso llega hasta que termina. En este caso simple: Turnaround = Tiempo de finalización - Tiempo de llegada.
```
