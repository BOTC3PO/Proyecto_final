# Examen jefe — [PENDIENTE #823]

> Logro #823. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **120 preguntas totales** en 5/5 secciones.

---

## Sección: planificacion-de-procesos (25 preguntas)

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

## Sección: paginacion (21 preguntas)

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "basico"
  tags: ["conceptos", "memoria-virtual"]

respuesta: verdadero
tipo: vf

enunciado: "La paginación es un mecanismo que permite a un programa utilizar más espacio de memoria del que físicamente está disponible en la RAM."

explicacion: |
  Correcto. La paginación gestiona la memoria virtual, dividiendo la memoria lógica en páginas y la física en marcos, permitiendo usar el disco duro como extensión de la RAM.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "intermedio"
  tags: ["fallos", "procesos"]

respuesta: verdadero
tipo: vf

enunciado: "Un 'fallo de página' ocurre cuando un programa intenta acceder a una página que no se encuentra actualmente en la RAM."

explicacion: |
  Verdadero. El sistema operativo debe entonces detener el proceso, buscar un marco libre (o liberar uno), cargar la página desde el disco y actualizar la tabla de páginas.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "intermedio"
  tags: ["estructura", "traduccion"]

respuesta: verdadero
tipo: vf

enunciado: "La tabla de páginas es una estructura de datos utilizada por el sistema operativo para mapear las páginas virtuales a los marcos de página físicos."

explicacion: |
  Verdadero. Esta tabla es esencial para que la MMU sepa dónde está cada página en la memoria física.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "intermedio"
  tags: ["rendimiento", "discos"]

respuesta: verdadero
tipo: vf

enunciado: "El intercambio constante de datos entre la RAM y el disco duro debido a fallos de página puede degradar significativamente el rendimiento del sistema."

explicacion: |
  Verdadero. El disco duro es mucho más lento que la RAM. Si hay muchos fallos de página (thrashing), el sistema pasa más tiempo moviendo datos que ejecutando instrucciones.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "basico"
  tags: ["conceptos", "ilusion"]

respuesta: verdadero
tipo: vf

enunciado: "La paginación crea la ilusión de tener una memoria infinita, aunque la RAM física sea limitada."

explicacion: |
  Correcto. Esta ilusión se llama memoria virtual y permite ejecutar programas que son más grandes que la memoria física disponible.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["eficiencia", "tipos"]

respuesta: falso
tipo: vf

enunciado: "La paginación introduce fragmentación externa porque los bloques de memoria asignados pueden ser de tamaños variables."

explicacion: |
  Falso. La paginación elimina la fragmentación externa porque las páginas y marcos tienen tamaños fijos. Sin embargo, puede haber fragmentación interna (espacio desperdiciado dentro de un marco).
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["problemas", "rendimiento"]

respuesta: verdadero
tipo: vf

enunciado: "El 'thrashing' o agotamiento de memoria ocurre cuando el sistema pasa más tiempo gestionando fallos de página que ejecutando procesos útiles."

explicacion: |
  Verdadero. Es una condición crítica donde la actividad de paginación impide el progreso real de los programas.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "intermedio"
  tags: ["procesos", "mmu"]

respuesta: verdadero
tipo: vf

enunciado: "La traducción de direcciones virtuales a físicas se realiza completamente por software, sin intervención del hardware."

explicacion: |
  Falso. La MMU (hardware) realiza la traducción en tiempo real. El sistema operativo (software) gestiona las tablas, pero la traducción es hardware.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["eficiencia", "desperdicio"]

respuesta: verdadero
tipo: vf

enunciado: "La paginación puede causar fragmentación interna, que es el espacio desperdiciado dentro del último marco de página de un proceso si este no llena el marco completamente."

explicacion: |
  Verdadero. Como el tamaño de la última página lógica puede ser menor que el tamaño del marco físico, el espacio restante en ese marco se pierde.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "intermedio"
  tags: ["comparacion", "segmentacion"]

respuesta: verdadero
tipo: vf

enunciado: "Una ventaja clave de la paginación sobre la segmentación es que no requiere que el espacio de direcciones del programa sea contiguo en la memoria física."

explicacion: |
  Correcto. Las páginas pueden estar dispersas en la RAM, mientras que los segmentos suelen requerir bloques contiguos.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["optimizacion", "estructuras"]

respuesta: verdadero
tipo: vf

enunciado: "Una tabla de páginas invertida indexa por marcos de página físicos en lugar de por direcciones virtuales, lo que puede ahorrar memoria en sistemas con mucho espacio de direcciones."

explicacion: |
  Verdadero. En lugar de una entrada por página virtual, hay una entrada por marco físico, reduciendo el tamaño de la tabla en sistemas con grandes espacios virtuales.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["algoritmos", "reemplazo"]

respuesta: verdadero
tipo: vf

enunciado: "El algoritmo LRU (Least Recently Used) selecciona para reemplazo la página que no se ha utilizado durante el periodo de tiempo más largo."

explicacion: |
  Verdadero. Se basa en la premisa de que las páginas usadas recientemente probablemente se usarán de nuevo pronto, y las no usadas en mucho tiempo, menos.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["hardware", "caché"]

respuesta: verdadero
tipo: vf

enunciado: "La TLB es una caché de hardware que almacena las traducciones más recientes de direcciones virtuales a físicas para acelerar el acceso."

explicacion: |
  Verdadero. Sin la TLB, cada acceso a memoria requeriría dos accesos a la RAM (uno para la tabla de páginas y otro para el dato), lo cual es muy lento.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "intermedio"
  tags: ["procesos", "io"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando ocurre un fallo de página, el sistema operativo debe realizar una operación de entrada/salida (I/O) desde el disco para cargar la página."

explicacion: |
  Verdadero. La página debe ser leída desde el archivo de paginación o swap en el disco hasta un marco libre en la RAM.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "basico"
  tags: ["conceptos", "disco"]

respuesta: verdadero
tipo: vf

enunciado: "El área del disco duro utilizada para guardar páginas que no están en la RAM se denomina comúnmente 'swap' o archivo de paginación."

explicacion: |
  Verdadero. Es el espacio de memoria virtual en el disco que actúa como extensión de la RAM.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "intermedio"
  tags: ["algoritmos", "reemplazo"]

respuesta: verdadero
tipo: vf

enunciado: "El algoritmo FIFO (First-In, First-Out) reemplaza la página que ha estado en la memoria física por el mayor tiempo, independientemente de su frecuencia de uso."

explicacion: |
  Verdadero. Es simple pero puede tener un comportamiento subóptimo comparado con LRU, ya que no considera el patrón de acceso.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["eficiencia", "recursos"]

respuesta: verdadero
tipo: vf

enunciado: "Un inconveniente de la paginación es el consumo de memoria RAM para almacenar las tablas de páginas de cada proceso."

explicacion: |
  Verdadero. Cada proceso necesita su propia tabla de páginas, lo que consume memoria física, especialmente si el espacio de direcciones es muy grande.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["estructuras", "comparacion"]

respuesta: verdadero
tipo: vf

enunciado: "La paginación directa usa tablas indexadas por dirección virtual, mientras que la paginación inversa usa tablas indexadas por dirección física."

explicacion: |
  Verdadero. Esto cambia la forma en que se busca la traducción y el tamaño de la estructura de datos.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "basico"
  tags: ["seguridad", "aislamiento"]

respuesta: verdadero
tipo: vf

enunciado: "La paginación ayuda al aislamiento de procesos porque cada proceso tiene su propio espacio de direcciones virtuales."

explicacion: |
  Verdadero. Un proceso no puede acceder directamente a la memoria de otro, ya que sus direcciones virtuales se traducen a marcos físicos diferentes o no mapeados.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["algoritmos", "teoria"]

respuesta: verdadero
tipo: vf

enunciado: "El algoritmo de reemplazo óptimo (OPT) reemplaza la página que no se usará durante el periodo de tiempo más largo en el futuro. Es ideal pero no implementable en la práctica."

explicacion: |
  Verdadero. OPT requiere conocer la secuencia futura de accesos a memoria, lo cual es imposible de predecir con certeza en un sistema en ejecución.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["consistencia", "hardware"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando el sistema operativo modifica la tabla de páginas, puede ser necesario invalidar las entradas correspondientes en la TLB para evitar que se usen direcciones obsoletas."

explicacion: |
  Verdadero. La TLB puede tener caché de traducciones antiguas. Si la tabla de páginas cambia, esas entradas en la TLB deben ser descartadas o actualizadas.
```

## Sección: interrupciones (24 preguntas)

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "basico"
  tags: ["definicion", "concepto"]

respuesta: "una señal que detiene la ejecución actual"
tipo: completar

enunciado: "Una interrupción es, básicamente, ___ que detiene momentáneamente la ejecución actual del procesador para atender una prioridad más urgente."

explicacion: |
  Las interrupciones son señales (de hardware o software) que permiten al procesador responder a eventos externos o internos de manera prioritaria, pausando temporalmente la tarea en curso.
```

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "basico"
  tags: ["procesador", "ejecucion"]

variables:
  instruccion_actual: random(1, 100)

respuesta: "terminar"
tipo: completar

enunciado: "Cuando un dispositivo envía una señal de interrupción, el procesador ___ de ejecutar la instrucción actual por seguridad antes de atender la solicitud."

explicacion: |
  Por razones de seguridad y consistencia del estado, el procesador completa la instrucción en curso antes de cambiar el flujo de control hacia el vector de interrupción.
```

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["vector", "memoria", "hardware"]

variables:
  tipo_vector: uno_de(["dirección", "registro", "puerto"])

respuesta: "dirección"
tipo: completar

enunciado: "El procesador busca una ___ de memoria especial llamada Vector de Interrupción, la cual apunta al Controlador de Interrupción."

explicacion: |
  El Vector de Interrupción es una tabla en la memoria que mapea cada tipo de interrupción a la dirección de memoria de su respectivo manejador (ISR).
```

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["isr", "software", "hardware"]

respuesta: "Controlador de Interrupción"
tipo: completar

enunciado: "La dirección del Vector de Interrupción apunta a un pequeño programa específico conocido como el ___ (o ISR)."

explicacion: |
  El Controlador de Interrupción (Interrupt Service Routine) es el código que se ejecuta para manejar el evento de interrupción específico.
```

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "basico"
  tags: ["hardware", "ejemplos"]

variables:
  dispositivo: uno_de(["teclado", "mouse", "disco duro"])

respuesta: "hardware"
tipo: completar

enunciado: "La señal generada por el clic de un botón del mouse o el ingreso de datos por un ___ es un ejemplo clásico de interrupción de hardware."

explicacion: |
  Las interrupciones de hardware son generadas por dispositivos físicos externos para informar al procesador de que necesitan atención.
```

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["software", "excepciones"]

variables:
  error: uno_de(["dividir por cero", "acceso ilegal", "memoria llena"])

respuesta: "software"
tipo: completar

enunciado: "Las interrupciones generadas por el propio programa o sistema operativo para reportar errores como dividir por cero se llaman interrupciones de ___."

explicacion: |
  Estas se denominan interrupciones de software, traps o excepciones, y surgen de la ejecución del código o del OS, no de un dispositivo físico externo.
```

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["estado", "pila", "registros"]

variables:
  componente: uno_de(["registros", "memoria cache", "disco"])

respuesta: "registros"
tipo: completar

enunciado: "El controlador de interrupción guarda el estado actual del procesador, como los valores de los ___, en la pila de memoria."

explicacion: |
  Guardar el estado de los registros es crucial para que el programa principal pueda reanudarse sin notar la pausa, restaurando los valores exactos previos.
```

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["comparacion", "clasificacion"]

variables:
  origen_hw: "dispositivo fisico"
  origen_sw: "programa o OS"

respuesta: "dispositivo fisico"
tipo: completar

enunciado: "Las interrupciones de hardware son generadas por ___, mientras que las de software son generadas por el propio programa o el sistema operativo."

explicacion: |
  La distinción clave es el origen: hardware proviene de señales eléctricas externas; software proviene de instrucciones ejecutadas o condiciones del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["ejemplos", "software"]

variables:
  accion: uno_de(["solicitar servicio del sistema", "leer teclado", "enviar datos a red"])

respuesta: "solicitar servicio del sistema"
tipo: completar

enunciado: "Un ejemplo común de interrupción de software es cuando un programa necesita ___ del sistema operativo."

explicacion: |
  Las llamadas al sistema (syscalls) a menudo se implementan mediante interrupciones de software para pasar el control al kernel de manera segura.
```

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["vector", "estructura"]

variables:
  funcion: uno_de(["identificar", "ejecutar", "borrar"])

respuesta: "identificar"
tipo: completar

enunciado: "El Vector de Interrupción ayuda al procesador a ___ qué dispositivo solicitó la atención mediante la dirección correspondiente."

explicacion: |
  Cada entrada en la tabla de vectores apunta a la rutina específica para manejar ese tipo de interrupción, facilitando su identificación y procesamiento.
```

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "basico"
  tags: ["hardware", "redes"]

variables:
  evento: uno_de(["llegada de datos", "pérdida de energía", "actualización de driver"])

respuesta: "llegada de datos"
tipo: completar

enunciado: "La ___ por una tarjeta de red es un evento que genera una interrupción de hardware."

explicacion: |
  Cuando la NIC (Network Interface Card) recibe paquetes, envía una señal de interrupción al CPU para procesar la información sin esperar polling.
```

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["proceso", "secuencia"]

variables:
  paso1: "pausa"
  paso2: "atender"
  paso3: "reanudar"

respuesta: "pausa"
tipo: completar

enunciado: "El proceso sigue esta secuencia: 1. La interrupción ___ la tarea actual. 2. Se atiende la prioridad. 3. Se reanuda la tarea original."

explicacion: |
  La secuencia lógica es siempre: interrupción (pausa), servicio (atención) y retorno (reanudación).
```

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "basico"
  tags: ["hardware", "dispositivos"]

respuesta: "dispositivo físico externo"
tipo: completar

enunciado: "El clic del mouse es generado por un ___."

explicacion: |
  El mouse es un periférico externo que envía señales eléctricas al controlador de interrupciones del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["software", "errores"]

respuesta: "el propio programa o el sistema operativo"
tipo: completar

enunciado: "Una división por cero es generada por ___."

explicacion: |
  Es un error de ejecución detectado por la CPU o el OS, clasificándose como interrupción de software (trap).
```

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["memoria", "direccion"]

variables:
  tipo_memoria: uno_de(["especial", "común", "virtual"])

respuesta: "especial"
tipo: completar

enunciado: "El procesador busca una dirección de memoria ___ llamada Vector de Interrupción."

explicacion: |
  Esta dirección es parte de una tabla reservada y especial en la memoria, no memoria de usuario común.
```

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "basico"
  tags: ["hardware", "almacenamiento"]

variables:
  evento: uno_de(["fin de lectura", "inicio de formateo", "cambio de nombre"])

respuesta: "fin de lectura"
tipo: completar

enunciado: "El ___ por un disco duro es un evento que genera una interrupción de hardware."

explicacion: |
  Cuando el disco termina de leer/escribir datos, envía una interrupción al CPU para informar que está listo para la siguiente operación.
```

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["estado", "registros"]

variables:
  dato: uno_de(["valores de los registros", "código del programa", "datos del usuario"])

respuesta: "valores de los registros"
tipo: completar

enunciado: "El controlador de interrupción guarda en la pila los ___ del procesador."

explicacion: |
  Los registros contienen el estado de ejecución (PC, flags, datos temporales) y deben preservarse para la reanudación.
```

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "basico"
  tags: ["definicion", "señal"]

respuesta: "señal"
tipo: completar

enunciado: "Una interrupción es una ___ de hardware o software."

explicacion: |
  Es una señal eléctrica (hardware) o una instrucción especial (software) que notifica al CPU.
```

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["comparacion", "origen"]

variables:
  origen_hw: "externo"
  origen_sw: "interno"

respuesta: "externo"
tipo: completar

enunciado: "Las interrupciones de hardware tienen un origen ___, mientras que las de software son internas."

explicacion: |
  Hardware: externo (periféricos). Software: interno (CPU/OS).
```

```
metadata:
  materia: "informática"
  tema: "interrupciones"
  nivel: "basico"
  tags: ["analogia", "comprension"]

variables:
  situacion: uno_de(["leer un libro", "cocinar", "conducir"])

respuesta: verdadero

tipo: vf

enunciado: "La analogía de dejar de leer un libro para contestar el teléfono y luego retomar la lectura ilustra correctamente el concepto de pausa y recuperación de estado en las interrupciones."

explicacion: |
  La analogía es precisa: la tarea principal (leer) se pausa, se atiende la prioridad (teléfono) y luego se restaura el estado (continuar leyendo desde donde se quedó).
```

```
metadata:
  materia: "informática"
  tema: "interrupciones"
  nivel: "basico"
  tags: ["espera_pasiva", "concepto"]

respuesta: falso

tipo: vf

enunciado: "Sin interrupciones, el procesador actuaría de manera activa, ejecutando tareas paralelas sin detenerse."

explicacion: |
  Falso. Sin interrupciones, el procesador tendría que esperar pasivamente o hacer polling (preguntar constantemente), lo cual es ineficiente y no es "actividad paralela" en el sentido moderno.
```

```
metadata:
  materia: "informática"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["vector", "memoria"]

respuesta: verdadero

tipo: vf

enunciado: "El Vector de Interrupción apunta a la dirección de memoria donde comienza el código del Controlador de Interrupción."

explicacion: |
  Verdadero. Es la tabla que mapea cada tipo de interrupción a su rutina de servicio correspondiente.
```

```
metadata:
  materia: "informática"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["polling", "comparacion"]

respuesta: verdadero

tipo: vf

enunciado: "El método de 'preguntar constantemente' a los dispositivos si tienen datos se conoce como polling y es menos eficiente que el uso de interrupciones."

explicacion: |
  Verdadero. El polling consume ciclos de CPU innecesariamente, mientras que las interrupciones son eventos asíncronos que despiertan al CPU solo cuando es necesario.
```

```
metadata:
  materia: "informática"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["transparencia", "recuperacion"]

respuesta: verdadero

tipo: vf

enunciado: "El objetivo de guardar y restaurar el estado es que el programa principal no note que hubo una pausa."

explicacion: |
  Verdadero. La interrupción debe ser transparente para el programa en ejecución, devolviéndolo a un estado idéntico al previo.
```

## Sección: recursividad (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "recursividad_basica"
  nivel: "basico"
  tags: ["programacion", "conceptos"]

respuesta: "recursividad"
tipo: completar
respuestas_validas:
  - "recursividad"
  - "Recursividad"

enunciado: "La capacidad de una función para llamarse a sí misma durante su ejecución se denomina ________."

explicacion: |
  La recursividad es una técnica de programación donde una función se invoca a sí misma para resolver subproblemas del problema original.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_basica"
  nivel: "basico"
  tags: ["conceptos", "terminologia"]

respuesta: verdadero
tipo: vf

enunciado: "Para evitar un bucle infinito en una función recursiva, es indispensable contar con al menos un caso base que detenga las llamadas."

explicacion: |
  Sin un caso base, la función se llamaría a sí misma indefinidamente (causando un error de desbordamiento de pila o stack overflow).
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_basica"
  nivel: "basico"
  tags: ["conceptos"]

variables:
  escenario: uno_de([["el caso que detiene la función", "caso base"], ["la llamada a la propia función", "caso recursivo"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["caso base", "caso recursivo", "caso infinito", "caso nulo"]

enunciado: "En una función recursiva, el componente que permite que la función se divida en problemas más pequeños se conoce como el {escenario[0]}."

explicacion: |
  El caso recursivo es la parte de la función donde se realiza la llamada recursiva, reduciendo el problema hacia el caso base.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_basica"
  nivel: "intermedio"
  tags: ["flujo_control"]

respuesta_orden: ["Caso Base", "Caso Recursivo", "Retorno de valores"]
tipo: ordenar

opciones_explicitas: ["Caso Base", "Caso Recursivo", "Retorno de valores"]

enunciado: "Ordena los pasos lógicos que ocurren en una ejecución recursiva típica desde que se entra a la función hasta que se obtiene el resultado final:"

explicacion: |
  Primero se ejecutan las llamadas (caso recursivo) hasta alcanzar el límite (caso base), y luego los valores se devuelven hacia atrás en la pila de llamadas.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_basica"
  nivel: "basico"
  tags: ["errores", "memoria"]

respuesta: "Stack Overflow"
tipo: mc
opciones_explicitas: ["Stack Overflow", "Syntax Error", "Null Pointer Exception", "Memory Leak"]

enunciado: "Cuando una función recursiva no tiene un caso base definido correctamente, se produce un error de desbordamiento de pila conocido como ________."

explicacion: |
  Cada llamada recursiva ocupa un espacio en la pila de ejecución (stack). Si las llamadas son infinitas, la memoria asignada a la pila se agota.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_conceptos"
  nivel: "basico"
  tags: ["programacion", "conceptos"]

tipo: mc
opciones_explicitas: ["Una función que se llama a sí misma", "Una función que no tiene retorno", "Un bucle que nunca termina", "Una función que utiliza variables globales"]
respuesta: "Una función que se llama a sí misma"
enunciado: "En programación, ¿qué define técnicamente a una función recursiva?"
explicacion: |
  La recursividad ocurre cuando una función se invoca a sí misma dentro de su propio cuerpo para resolver una parte del problema.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_componentes"
  nivel: "basico"
  tags: ["logica", "estructura"]

tipo: completar
respuestas_validas:
  - "caso base"
  - "caso recursivo"

enunciado: "Para que una función recursiva no entre en un bucle infinito, es indispensable que exista un ___ que detenga las llamadas, y un ___ que reduzca el problema original."

explicacion: |
  El caso base es la condición de parada que devuelve un valor sin realizar más llamadas. El caso recursivo es donde la función se llama a sí misma con un argumento modificado.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_ejecucion"
  nivel: "intermedio"
  tags: ["algoritmos", "factorial"]

variables:
  n: 4
  resultado: 24

tipo: completar
tolerancia_abs: 0

enunciado: "Considera la siguiente función recursiva para calcular el factorial de n: \n`f(n) = if n == 0 then 1 else n * f(n-1)` \n\n¿Cuál es el valor de f({n})?"

respuesta: resultado
explicacion: |
  El resultado de 4! (factorial de 4) es 24.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_memoria"
  nivel: "intermedio"
  tags: ["memoria", "stack"]

tipo: vf

enunciado: "¿Es verdadero que cada llamada recursiva consume memoria adicional en la pila de llamadas (call stack) de la computadora?"

respuesta: verdadero

explicacion: |
  Verdadero. Cada llamada pendiente debe guardar su estado (variables locales, dirección de retorno) en la pila, lo que puede llevar a un error de 'stack overflow' si la recursión es muy profunda.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_orden"
  nivel: "avanzado"
  tags: ["flujo_control", "stack"]

tipo: ordenar
opciones_explicitas: ["Llamada a f(3)", "Llamada a f(2)", "Llamada a f(1)", "Llamada a f(0)", "Retorno de f(0)", "Retorno de f(1)", "Retorno de f(2)", "Retorno de f(3)"]
respuesta_orden: ["Llamada a f(3)", "Llamada a f(2)", "Llamada a f(1)", "Llamada a f(0)", "Retorno de f(0)", "Retorno de f(1)", "Retorno de f(2)", "Retorno de f(3)"]

enunciado: "Ordena cronológicamente los eventos en la ejecución de una función recursiva para f(3) donde el caso base es f(0):"

explicacion: |
  La ejecución sigue una estructura de LIFO (Last In, First Out): primero se van apilando todas las llamadas hacia el caso base y luego se van resolviendo (retornando) a medida que la pila se descarga.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_conceptos"
  nivel: "basico"
  tags: ["recursividad", "conceptos"]

respuesta: "caso base"
tipo: completar
respuestas_validas:
  - "caso base"
  - "caso base"

enunciado: "Para evitar que una función recursiva entre en un bucle infinito y agote la memoria (stack overflow), es indispensable definir un ___ que detenga las llamadas sucesivas."

explicacion: |
  El caso base es la condición que permite que la función deje de llamarse a sí misma, devolviendo un valor sin realizar una nueva llamada recursiva.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_errores"
  nivel: "basico"
  tags: ["stack_overflow", "errores"]

variables:
  es_infinito: verdadero

respuesta: verdadero
tipo: vf
enunciado: "Si una función recursiva no reduce el tamaño del problema en cada paso hacia el caso base, ¿se producirá un error de desbordamiento de pila (stack overflow)?"

explicacion: |
  Si el problema no se aproxima al caso base, la recursión es infinita y la pila de llamadas se llena, causando un error de ejecución.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_flujo"
  nivel: "intermedio"
  tags: ["flujo_ejecucion", "recursividad"]

respuesta: "f(3) -> f(2) -> f(1) -> f(0) -> Retorno"
tipo: mc
opciones_explicitas: ["f(3) -> f(2) -> f(1) -> f(0) -> Retorno", "f(3) -> f(4) -> f(5) -> ..."]

enunciado: "Si tenemos una función que resta 1 al argumento en cada llamada y el caso base es cuando el argumento es 0, ¿cuál es la secuencia correcta de llamadas para f(3)?"

explicacion: |
  En una recursión correcta, cada llamada debe acercarse al caso base. La secuencia f(3) -> f(2) -> f(1) -> f(0) se detiene al llegar a 0.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_estructura"
  nivel: "intermedio"
  tags: ["estructura", "recursividad"]

respuesta_orden: ["Caso base", "Caso recursivo", "Paso de parámetros"]
tipo: ordenar

opciones_explicitas: ["Caso base", "Caso recursivo", "Paso de parámetros"]

enunciado: "Ordena los componentes lógicos necesarios para que una función sea recursiva y funcional, desde lo que detiene la ejecución hasta lo que permite la progresión:"

explicacion: |
  Primero se define la condición de parada (caso base), luego la lógica de la llamada (caso recursivo) y finalmente cómo se transforma el dato (paso de parámetros).
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_errores"
  nivel: "avanzado"
  tags: ["retorno", "errores"]

variables:
  error_retorno: falso

respuesta: error_retorno
tipo: vf
enunciado: "En una función recursiva que debe devolver la suma de los elementos de una lista, si olvidamos incluir la palabra clave 'return' en la llamada recursiva, la función devolverá un valor correcto."

explicacion: |
  Es un error común: si no se retorna el resultado de la llamada recursiva, la cadena de valores se rompe y la función principal no recibe el resultado acumulado.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_conceptos"
  nivel: "basico"
  tags: ["recursividad", "conceptos"]

respuesta: "caso base"
tipo: completar
respuestas_validas:
  - "caso base"
  - "condicion de parada"

enunciado: "Para evitar que una función recursiva entre en un bucle infinito, es indispensable definir un ___ que detenga las llamadas sucesivas."

explicacion: |
  El caso base es la condición que permite que la función deje de llamarse a sí misma y comience a retornar valores, evitando un desbordamiento de pila (stack overflow).
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_vs_iteracion"
  nivel: "intermedio"
  tags: ["recursividad", "iteracion", "comparacion"]

respuesta: verdadero
tipo: vf

enunciado: "En términos de complejidad de espacio en la memoria (stack), una función recursiva suele ser más costosa que un bucle iterativo equivalente debido al uso de la pila de llamadas."

explicacion: |
  Verdadero. Cada llamada recursiva añade un nuevo marco de pila (stack frame) con sus variables locales y dirección de retorno, mientras que la iteración reutiliza el mismo espacio de memoria.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_estructura"
  nivel: "basico"
  tags: ["recursividad", "estructura"]

respuesta_orden: ["Caso base", "Caso recursivo", "Reducción del problema"]
tipo: ordenar
opciones_explicitas: ["Caso base", "Caso recursivo", "Reducción del problema"]

enunciado: "Ordena los componentes lógicos necesarios para que un algoritmo recursivo sea correcto y termine:"

explicacion: |
  Para que la recursión funcione, primero se debe evaluar si llegamos al caso base; si no, se ejecuta el caso recursivo, el cual debe reducir el problema original hacia el caso base.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_estado"
  nivel: "intermedio"
  tags: ["recursividad", "estado", "memoria"]

respuesta: "el estado se mantiene en la pila de llamadas"
tipo: mc
opciones_explicitas: ["el estado se mantiene en la pila de llamadas", "el estado se pierde en cada llamada", "el estado se guarda en una variable global única", "el estado no es necesario en recursión"]

enunciado: "Al comparar una función recursiva con un bucle 'while', ¿en qué se diferencia la gestión de las variables locales?"

explicacion: |
  En la recursividad, cada llamada tiene su propio ámbito (scope) y sus propias variables, las cuales se almacenan en la pila de ejecución (stack).
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_identificacion"
  nivel: "basico"
  tags: ["recursividad", "logica"]

variables:
  idx: uno_de([0,1])
  escenarios: [["f(n) = n + f(n-1)", "recursivo"], ["f(n) = n + 1", "no recursivo"]]

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["recursivo", "no recursivo"]

enunciado: "Analiza la siguiente definición de función: {escenarios[idx][0]}. ¿Cuál es su naturaleza?"

explicacion: |
  Una función es recursiva si su definición incluye una llamada a sí misma con un argumento modificado, como se ve en el ejemplo seleccionado.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_conceptos"
  nivel: "basico"
  tags: ["teoria", "fundamentos"]

respuesta: "caso base"
tipo: "completar"
respuestas_validas:
  - "caso base"
  - "caso recursivo"
  - "condicion de parada"

enunciado: "Para que una función recursiva no se ejecute infinitamente y cause un error de desbordamiento de pila, es indispensable que contenga un ___ que permita detener la recursión."

explicacion: |
  El caso base es la condición que se cumple cuando la función deja de llamarse a sí misma, permitiendo que la pila de llamadas se resuelva.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_estructura"
  nivel: "basico"
  tags: ["logica"]

variables:
  escenario: uno_de([["f(n) = n * f(n-1) con f(0)=1", "factorial"], ["f(n) = f(n-1) + f(n-2) con f(0)=0, f(1)=1", "fibonacci"], ["f(n) = n + f(n-1) con f(0)=0", "suma_naturales"]])

respuesta: escenario[1]
tipo: "mc"
opciones_explicitas: ["factorial", "fibonacci", "suma_naturales", "potencia"]

enunciado: "Dada la siguiente definición recursiva: {escenario[0]}, ¿cuál es el nombre del algoritmo que se está implementando?"

explicacion: |
  El algoritmo descrito corresponde a {escenario[1]}.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_logica"
  nivel: "intermedio"
  tags: ["teoria"]

respuesta: falso
tipo: "vf"

enunciado: "¿Es posible que una función recursiva sea correcta si su caso recursivo no reduce el tamaño del problema hacia el caso base?"

explicacion: |
  Falso. Si el problema no se reduce (por ejemplo, si llamamos a f(n) con f(n) en lugar de f(n-1)), nunca se alcanzará el caso base, resultando en una recursión infinita.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_ejecucion"
  nivel: "intermedio"
  tags: ["pila", "stack"]

tipo: ordenar
opciones_explicitas: ["Llamada 1", "Llamada 2", "Llamada 3", "Retorno 3", "Retorno 2", "Retorno 1"]
respuesta_orden: ["Llamada 1", "Llamada 2", "Llamada 3", "Retorno 3", "Retorno 2", "Retorno 1"]

enunciado: "Ordena cronológicamente los eventos de una función que llama a sí misma tres veces (n=3, n=2, n=1) antes de empezar a devolver valores (unwinding):"

explicacion: |
  En la recursión, primero se apilan todas las llamadas en la pila (stack) hasta llegar al caso base, y luego se procesan los retornos en orden inverso a la entrada.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_calculo"
  nivel: "avanzado"
  tags: ["calculo", "algoritmos"]

variables:
  datos: [[5, 120], [4, 24], [3, 6]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "Si tenemos una función para calcular el factorial de n, donde f(n) = n * f(n-1) y f(0) = 1, ¿cuál es el resultado de ejecutar la función con el valor n = {datos[idx][0]}?"

explicacion: |
  El factorial de {datos[idx][0]} es {datos[idx][1]}.
```

## Sección: relaciones-y-claves-foraneas (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "relaciones-y-claves-foraneas"
  nivel: "basico"
  tags: ["bases-de-datos", "sql"]

respuesta: "clave_primaria"
tipo: completar
respuestas_validas:
  - "clave_primaria"
  - "primary_key"

enunciado: "El campo único que identifica de forma inequívoca a cada registro en una tabla se denomina ___."

explicacion: |
  La clave primaria (Primary Key) garantiza la integridad de la entidad, asegurando que no haya dos filas idénticas y que el identificador no sea nulo.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones-y-claves-foraneas"
  nivel: "basico"
  tags: ["bases-de-datos", "relaciones"]

respuesta: falso
tipo: vf

enunciado: "¿Una clave foránea (Foreign Key) debe referenciar necesariamente a una clave primaria en la tabla de origen?"

explicacion: |
  Falso. Una clave foránea debe referenciar a una clave única (Unique Key) en la tabla de destino, no estrictamente a una clave primaria, aunque es la práctica más común.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones-y-claves-foraneas"
  nivel: "intermedio"
  tags: ["modelado", "cardinalidad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Un Cliente y sus Pedidos", "uno_a_muchos"], ["Un Estudiante y sus Materias (en un modelo N:M)", "muchos_a_muchos"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["uno_a_uno", "uno_a_muchos", "muchos_a_muchos"]

enunciado: "En el escenario '{escenarios[escenario_idx][0]}', el tipo de relación predominante es:"

explicacion: |
  En el primer caso, un cliente puede tener múltiples pedidos (1:N). En el segundo caso, un estudiante tiene muchas materias y una materia tiene muchos estudiantes (N:M).
```

```
metadata:
  materia: "informatica"
  tema: "relaciones-y-claves-foraneas"
  nivel: "intermedio"
  tags: ["integridad", "sql"]

respuesta: "Integridad Referencial"
tipo: completar
respuestas_validas:
  - "Integridad Referencial"
  - "Integridad de Entidad"

enunciado: "La regla que asegura que los valores de una clave foránea existan previamente en la tabla referenciada se conoce como ___."

explicacion: |
  La integridad referencial garantiza que las relaciones entre tablas permanezcan consistentes, evitando "registros huérfanos".
```

```
metadata:
  materia: "informatica"
  tema: "relaciones-y-claves-foraneas"
  nivel: "avanzado"
  tags: ["sql", "ddl"]

respuesta_orden: ["Tabla_Padre", "Tabla_Hija"]
tipo: ordenar
opciones_explicitas: ["Tabla_Hija", "Tabla_Padre"]

enunciado: "Para evitar errores de restricción al ejecutar un script SQL de creación de base de datos, ¿en qué orden deben crearse las tablas si la Tabla_Hija tiene una clave foránea que apunta a la Tabla_Padre?"

explicacion: |
  Primero se debe crear la tabla que contiene la clave primaria (Padre) para que, cuando se cree la tabla que la referencia (Hija), la clave ya exista en el sistema.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "basico"
  tags: ["sql", "dbms", "relaciones"]

variables:
  idx: uno_de([0, 1])
  datos: [["Clientes", "Pedidos", "cliente_id"], ["Autores", "Libros", "autor_id"]]

enunciado: "En un modelo relacional, si tenemos una tabla de {datos[idx][0]} y una tabla de {datos[idx][1]}, la columna que permite vincular ambas tablas y hace referencia a la clave primaria de la primera tabla es la clave foránea, cuyo nombre en la tabla secundaria es ___."

respuestas_validas:
  - "cliente_id"
  - "autor_id"
respuesta: datos[idx][2]
tipo: completar

explicacion: |
  La clave foránea (Foreign Key) es un campo en una tabla que identifica un registro único en otra tabla, estableciendo así la relación entre ambas.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["integridad", "sql", "conceptos"]

enunciado: "Si intentamos eliminar un registro de la tabla 'Clientes' que tiene un ID asociado a registros existentes en la tabla 'Pedidos', y la restricción de integridad referencial está activa, la base de datos impedirá la acción para evitar datos huérfanos."

respuesta: verdadero
tipo: vf

explicacion: |
  La integridad referencial garantiza que no existan registros en una tabla hija que apunten a registros inexistentes en la tabla padre. Por lo tanto, la operación de borrado se bloquea o se aplica una acción en cascada.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "basico"
  tags: ["relaciones", "cardinalidad"]

enunciado: "Considerando un sistema de gestión de una biblioteca: Un 'Libro' pertenece a un único 'Autor', pero un 'Autor' puede haber escrito muchos 'Libros'. ¿Qué tipo de relación predomina desde la perspectiva de la tabla 'Libros' hacia la tabla 'Autores'?"

opciones_explicitas: ["Uno a Uno", "Uno a Muchos", "Muchos a Muchos"]
respuesta: "Uno a Muchos"
tipo: mc

explicacion: |
  En una relación de uno a muchos (1:N), la clave foránea se coloca en la tabla del lado "muchos" (Libros) para apuntar al lado "uno" (Autores).
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "avanzado"
  tags: ["diseño", "pasos", "normalizacion"]

enunciado: "Para diseñar correctamente un esquema relacional desde un modelo conceptual, se deben seguir estos pasos en orden lógico:"

opciones_explicitas: ["Identificar entidades", "Definir claves primarias", "Establecer relaciones mediante claves foráneas"]
respuesta_orden: ["Identificar entidades", "Definir claves primarias", "Establecer relaciones mediante claves foráneas"]
tipo: ordenar

explicacion: |
  Primero se definen los objetos del mundo real (entidades), luego cómo se identifican unívocamente (claves primarias) y finalmente cómo se conectan entre sí (claves foráneas).
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["diseño", "dbms"]

variables:
  datos: [["Estudiantes", "Cursos", 10, 5], ["Usuarios", "Roles", 100, 5]]
  idx: uno_de([0, 1])

enunciado: "En un sistema donde cada {datos[idx][0]} puede inscribirse en múltiples {datos[idx][1]}, y cada {datos[idx][1]} puede tener múltiples {datos[idx][0]}, se requiere una tabla intermedia para resolver la relación. Si tenemos {datos[idx][2]} registros de origen y {datos[idx][3]} de destino, la tabla intermedia gestionará la relación de tipo ___."

respuestas_validas:
  - "Muchos a Muchos"
respuesta: "Muchos a Muchos"
tipo: completar

explicacion: |
  Las relaciones de muchos a muchos (N:M) no se pueden implementar directamente con una sola clave foránea; requieren una tabla de unión (junction table) que contenga las claves primarias de ambas tablas.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "basico"
  tags: ["sql", "bases_de_datos", "teoria"]

respuesta: "integridad referencial"
tipo: completar
respuestas_validas:
  - "integridad referencial"
  - "integridad de datos"
  - "integridad referencial"

enunciado: "La restricción de clave foránea (Foreign Key) tiene como objetivo principal garantizar la ___ entre las tablas de una base de datos relacional."

explicacion: |
  La integridad referencial asegura que un valor en una columna de una tabla (la clave foránea) debe coincidir con un valor existente en la clave primaria de otra tabla, evitando datos huérfanos.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["sql", "conceptos"]

respuesta: falso
tipo: vf

enunciado: "¿Es posible que una clave foránea (Foreign Key) contenga valores que no existen en la tabla de referencia (la tabla a la que apunta)?"

explicacion: |
  Falso. Por definición, la restricción de clave foránea impide la inserción de valores que no existan en la clave primaria de la tabla relacionada, manteniendo la coherencia de los datos.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["sql", "cascada", "errores"]

variables:
  escenario: uno_de(["Se borra un registro en la tabla 'Clientes' que tiene pedidos asociados", "Se intenta insertar un 'Pedido' con un 'Cliente_ID' que no existe", "Se intenta borrar un 'Producto' que está siendo referenciado por una 'Venta'"])

respuesta: "error"
tipo: completar
respuestas_validas:
  - "error"

enunciado: "Si una base de datos tiene activada la restricción de integridad referencial estándar (sin ON DELETE CASCADE), ¿qué sucede en el caso: {escenario}? (responde con una palabra: error o éxito)"

explicacion: |
  El sistema de gestión de base de datos (DBMS) bloqueará la operación y lanzará un error para evitar que queden registros de 'Pedidos' sin un 'Cliente' asociado.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["sql", "orden_ddl"]

respuesta_orden: ["Clientes", "Pedidos", "Detalles_Pedido"]
tipo: ordenar

opciones_explicitas: ["Pedidos", "Clientes", "Detalles_Pedido"]

enunciado: "Para evitar errores de 'objeto no encontrado' al ejecutar un script SQL de creación de tablas con claves foráneas, ¿cuál es el orden correcto de creación?"

explicacion: |
  Primero se deben crear las tablas que no dependen de nadie (tablas maestras o de referencia), luego las que dependen de ellas, y finalmente las tablas de detalle que dependen de las relaciones intermedias.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "avanzado"
  tags: ["sql", "nulls"]

respuesta: verdadero
tipo: vf

enunciado: "¿Puede una clave foránea contener valores NULL si la columna no tiene una restricción NOT NULL?"

explicacion: |
  Verdadero. Un valor NULL en una clave foránea significa que la relación es opcional; es decir, el registro existe pero no está vinculado actualmente a ningún registro de la tabla de referencia.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "basico"
  tags: ["sql", "bases_de_datos"]

respuesta: "clave_foranea"
tipo: "mc"
opciones_explicitas: ["clave_primaria", "clave_foranea", "índice_único", "clave_compuesta"]

enunciado: "Mientras que la clave primaria identifica de forma única un registro en su propia tabla, la ___ se utiliza para establecer un vínculo con una clave primaria de otra tabla."

explicacion: |
  La clave primaria (Primary Key) garantiza la unicidad en la tabla origen, mientras que la clave foránea (Foreign Key) permite la integridad referencial conectando tablas.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["integridad", "sql"]

respuesta: verdadero
tipo: "vf"

enunciado: "La restricción de integridad referencial asegura que un valor en una columna de clave foránea debe existir previamente en la columna de clave primaria de la tabla relacionada."

explicacion: |
  Verdadero. Si se intentara insertar un valor en la clave foránea que no existe en la tabla padre, el sistema de gestión de bases de datos (RDBMS) lanzaría un error para mantener la consistencia.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "avanzado"
  tags: ["sql", "integridad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["RESTRICT", "Impide la eliminación del registro padre si tiene hijos"], ["CASCADE", "Elimina automáticamente los registros hijos al eliminar el padre"]]

respuesta: escenarios[escenario_idx][0]
tipo: "mc"
opciones_explicitas: ["RESTRICT", "CASCADE", "SET NULL", "NO ACTION"]

enunciado: "Si el comportamiento deseado ante el borrado del registro padre es: '{escenarios[escenario_idx][1]}', la acción de configuración adecuada es: ___"

explicacion: |
  La opción elegida define cómo reacciona la base de datos ante la pérdida de un registro padre. {escenarios[escenario_idx][0]} es el comportamiento específico seleccionado para este caso.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "basico"
  tags: ["diseño", "modelado"]

respuesta_orden: ["Definir entidades", "Establecer atributos", "Identificar claves primarias", "Establecer claves foráneas"]
tipo: "ordenar"
opciones_explicitas: ["Definir entidades", "Establecer atributos", "Identificar claves primarias", "Establecer claves foráneas"]

enunciado: "Ordena los pasos lógicos para diseñar un modelo relacional que incluya relaciones entre tablas:"

explicacion: |
  Primero se definen los objetos (entidades), luego sus propiedades (atributos), después cómo se identifican (PK) y finalmente cómo se conectan (FK).
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["sql", "constraints"]

respuesta: "nulo"
tipo: "completar"
respuestas_validas:
  - "nulo"
  - "NULL"

enunciado: "A diferencia de una clave primaria que nunca puede contener valores ___, una clave foránea puede permitir valores ___ si la relación es opcional."

explicacion: |
  La clave primaria (PK) tiene una restricción de 'NOT NULL' implícita para garantizar la identidad, mientras que la clave foránea (FK) puede ser nula si la relación es opcional (por ejemplo, un empleado que aún no tiene asignado un departamento).
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "basico"
  tags: ["dbms", "sql", "relaciones"]

variables:
  escenario: uno_de([["Tabla_Clientes(id_cliente, nombre) y Tabla_Pedidos(id_pedido, id_cliente)", "id_cliente"], ["Tabla_Autores(id_autor, nombre) y Tabla_Libros(id_libro, id_autor)", "id_autor"], ["Tabla_Estudiantes(id_estudiante, nombre) y Tabla_Inscripciones(id_inscripcion, id_estudiante)", "id_estudiante"]])

enunciado: "En el escenario de {escenario[0]}, ¿cuál es el nombre del campo que actúa como clave foránea en la segunda tabla para establecer la relación?"

opciones_explicitas: ["id_pedido", "id_cliente", "nombre", "id_autor", "id_estudiante"]
respuesta: escenario[1]
tipo: mc

explicacion: |
  La clave foránea es el campo en una tabla que hace referencia a la clave primaria de otra tabla, permitiendo la relación entre ambas.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["integridad", "dbms"]

enunciado: "Si intentamos eliminar un registro de una tabla 'Padre' que posee una clave primaria siendo referenciada por una clave foránea en una tabla 'Hija', y la restricción de integridad está activa, la operación será rechazada para evitar datos huérfanos."

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. La integridad referencial impide la eliminación de registros que dejarían a las filas de la tabla hija con una referencia inválida.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["sql", "conceptos"]

variables:
  contexto: uno_de([["Un sistema de ventas donde un Cliente realiza muchos Pedidos", "uno a muchos"], ["Un sistema de gestión donde un Estudiante se inscribe en muchas Materias y una Materia tiene muchos Estudiantes", "muchos a muchos"], ["Un sistema de países donde un Continente tiene muchos Países y un País pertenece a un solo Continente", "uno a muchos"]])

enunciado: "En el contexto de {contexto}, el tipo de relación predominante es ___."

respuestas_validas:
  - "uno a muchos"
  - "muchos a muchos"
  - "uno a uno"
respuesta: contexto[1]
tipo: completar

explicacion: |
  El tipo de relación se define por la cardinalidad entre las entidades involucradas.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "avanzado"
  tags: ["diseño", "dbms"]

opciones_explicitas: ["Identificar entidades", "Definir atributos", "Establecer relaciones y claves", "Normalizar tablas"]
respuesta_orden: ["Identificar entidades", "Definir atributos", "Establecer relaciones y claves", "Normalizar tablas"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para el diseño de un modelo relacional de base de datos:"

explicacion: |
  El diseño comienza con la identificación de las entidades del mundo real, luego sus propiedades, la conexión entre ellas mediante claves y finalmente el proceso de normalización.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["lógica", "dbms"]

variables:
  caso: uno_de([["Una tabla 'Departamentos' y una tabla 'Empleados' (cada empleado pertenece a un departamento)", "1"], ["Una tabla 'Libros' y una tabla 'Autores' (cada libro tiene un único autor)", "1"]])

enunciado: "Considerando el caso: {caso[0]}. Si aplicamos una restricción de integridad donde cada registro de la tabla dependiente debe tener exactamente ___ registro relacionado en la tabla principal, estamos ante una relación 1:1 o 1:N dependiendo del sentido."

respuestas_validas:
  - "1"
respuesta: "1"
tipo: completar

explicacion: |
  La clave foránea asegura que el valor en la tabla hija exista en la tabla padre, garantizando la existencia del registro relacionado.
```

