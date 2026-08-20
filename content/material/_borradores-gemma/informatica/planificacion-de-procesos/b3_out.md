### 1 — Confusión entre procesos y hilos
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

### 2 — El concepto de Context Switch
```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "intermedio"
  tags: ["overhead", "context_switch"]

variables:
  escenario: uno_de([
    ["El sistema operativo guarda el estado de los registros del proceso A para cargar el proceso B.", "Cambio de contexto"],
    ["El procesador ejecuta instrucciones de un proceso de usuario de forma continua.", "Ejecución"],
    ["Un proceso solicita acceso a un recurso de E/S y queda bloqueado.", "Espera de E/S"]
  ])

enunciado: "En el siguiente escenario, ¿qué acción se está describiendo?: {escenario[0]}"

opciones_explicitas: ["Cambio de contexto", "Ejecución", "Espera de E/S"]

respuesta: escenario[1]

tipo: mc

explicacion: |
  El cambio de contexto (context switch) es la operación de guardar el estado (contexto) de un proceso o hilo para que pueda ser reanudado más tarde, permitiendo que la CPU pase a otro proceso.
```

### 3 — Algoritmos de planificación: FCFS vs SJF
```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "avanzado"
  tags: ["algoritmos", "sjf", "eficiencia"]

variables:
  caso: uno_de([
    [10, 2, 5],
    [1, 8, 4],
    [5, 5, 5]
  ])

enunciado: "Se tienen tres procesos con tiempos de ráfaga de CPU (burst time) de {caso[0]}, {caso[1]} y {caso[2]} ms respectivamente. Si aplicamos el algoritmo Shortest Job First (SJF) sin preempción, el orden de ejecución de los procesos será el indicado por sus tiempos de ráfaga (de menor a mayor):"

opciones_explicitas: ["{caso[1]}, {caso[2]}, {caso[0]}", "{caso[0]}, {caso[1]}, {caso[2]}", "{caso[2]}, {caso[1]}, {caso[0]}"]

respuesta: ["{caso[1]}", "{caso[2]}", "{caso[0]}"]

tipo: ordenar

explicacion: |
  El algoritmo SJF (Shortest Job First) selecciona siempre el proceso con el tiempo de ráfaga más corto para minimizar el tiempo de espera promedio.
```

### 4 — El problema de la inanición (Starvation)
```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "intermedio"
  tags: ["starvation", "prioridades"]

respuesta: "inanición"

tipo: completar

enunciado: "En un sistema de planificación basado en prioridades, si los procesos de alta prioridad llegan constantemente, los procesos de baja prioridad pueden no recibir tiempo de CPU nunca, un fenómeno conocido como ___."

respuestas_validas: ["inanición", "starvation"]

explicacion: |
  La inanición ocurre cuando un proceso es ignorado indefinidamente porque el planificador siempre elige otros procesos con mayor prioridad o que se ajustan mejor a un criterio específico.
```

### 5 — Preemptive vs Non-preemptive
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