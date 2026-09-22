# Examen jefe — [PENDIENTE #822]

> Logro #822. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **125 preguntas totales** en 5/5 secciones.

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

## Sección: poo-clases-y-objetos (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["poo", "clases", "conceptos"]

respuesta: "molde"
tipo: completar
respuestas_validas:
  - "molde"
  - "plantilla"

enunciado: "En la programación orientada a objetos, una clase se define como un ___ para crear objetos."

explicacion: |
  Una clase actúa como un plano o molde que define la estructura (atributos) y el comportamiento (métodos) que tendrán los objetos creados a partir de ella.
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["poo", "atributos", "metodos"]

opciones_explicitas: ["Estado (datos)", "Acciones (comportamiento)", "Ambas anteriores"]
respuesta: "Estado (datos)"
tipo: mc

enunciado: "Un objeto se compone de atributos que representan su estado y métodos que representan su comportamiento. ¿Qué representan los atributos?"

explicacion: |
  Los atributos son variables que almacenan el estado o las características de un objeto, mientras que los métodos son funciones que definen lo que el objeto puede hacer.
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["poo", "objetos", "instancia"]

respuesta: verdadero
tipo: vf

enunciado: "El proceso de crear un objeto a partir de una clase se denomina instanciación."

explicacion: |
  Correcto. El objeto resultante de este proceso es una 'instancia' de la clase.
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "intermedio"
  tags: ["poo", "clases", "objetos"]

respuesta: "Fido es una instancia concreta de la clase Perro"
tipo: mc
opciones_explicitas: ["Fido es una instancia concreta de la clase Perro", "Perro es una instancia de Fido", "Fido y Perro son la misma cosa", "Ninguna clase puede tener objetos"]

enunciado: "Si tenemos la clase 'Perro' y un objeto llamado 'Fido' creado a partir de ella, ¿cuál de las siguientes afirmaciones es correcta?"

explicacion: |
  La clase es la definición abstracta (Perro), mientras que el objeto es la realización concreta con datos específicos (Fido).
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["poo", "ordenar", "proceso"]

opciones_explicitas: ["Definir la clase", "Declarar la variable", "Instanciar el objeto"]
respuesta_orden: ["Definir la clase", "Declarar la variable", "Instanciar el objeto"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para tener un objeto listo para usar en memoria:"

explicacion: |
  Primero se debe diseñar el plano (clase), luego reservar el nombre de la variable y finalmente ejecutar el constructor para crear la instancia en memoria.
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["conceptos", "clases", "objetos"]

respuesta: "clase"
tipo: "mc"
opciones_explicitas: ["objeto", "clase", "atributo", "metodo"]

enunciado: "En programación orientada a objetos, si imaginamos que un 'Plano de una Casa' es el diseño general, el plano en sí mismo es la ___."

explicacion: |
  La clase actúa como un molde o plano que define las características y comportamientos, mientras que el objeto es la instancia concreta creada a partir de ese molde.
```

```
metadata:
  materia: "informatica"
  tema: "poo_atributos"
  nivel: "basico"
  tags: ["atributos", "estado"]

variables:
  escenario: uno_de([["color", "marca", "modelo"], ["modelo", "color", "marca"], ["marca", "modelo", "color"]])

respuesta: escenario[0]
tipo: "completar"
respuestas_validas:
  - "color"
  - "marca"
  - "modelo"

enunciado: "Si definimos una clase 'Auto' con las propiedades 'color', 'marca' y 'modelo', estas propiedades se conocen como ___."

explicacion: |
  Los atributos representan el estado o las características de un objeto (en este caso, las propiedades del auto).
```

```
metadata:
  materia: "informatica"
  tema: "poo_metodos"
  nivel: "basico"
  tags: ["metodos", "comportamiento"]

respuesta: verdadero
tipo: "vf"

enunciado: "En una clase llamada 'Perro', una función llamada 'ladrar()' que define una acción que el objeto puede realizar es un método."

explicacion: |
  Los métodos son las funciones definidas dentro de una clase que representan las acciones o comportamientos de los objetos.
```

```
metadata:
  materia: "informatica"
  tema: "poo_instanciacion"
  nivel: "intermedio"
  tags: ["instanciacion", "orden"]

respuesta_orden: ["Definir la clase", "Instanciar el objeto", "Acceder a sus atributos"]
tipo: "ordenar"
opciones_explicitas: ["Acceder a sus atributos", "Instanciar el objeto", "Definir la clase"]

enunciado: "Ordena los pasos lógicos para utilizar un objeto en un programa:"

explicacion: |
  Primero debes tener el molde (clase), luego creas la instancia (objeto) y finalmente puedes interactuar con su información o acciones.
```

```
metadata:
  materia: "informatica"
  tema: "poo_calculo_metodos"
  nivel: "intermedio"
  tags: ["metodos", "calculo"]

variables:
  datos: uno_de([[5.0, 10.0, 50.0], [3.0, 4.0, 12.0], [2.0, 6.0, 12.0]])

respuesta: datos[2]
tipo: completar
tolerancia_abs: 0

enunciado: "Tenemos una clase 'Rectangulo' con los atributos 'base' y 'altura'. Si un objeto de esta clase tiene base = {datos[0]} y altura = {datos[1]}, ¿cuál es el valor resultante del método 'calcular_area()'?"

pasos:
  - "Identificar los valores de base y altura."
  - "Aplicar la fórmula: base * altura."

explicacion: |
  El método calcula el área multiplicando los atributos internos del objeto: 5.0 * 10.0 = 50.0.
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["conceptos_fundamentales", "confusiones_comunes"]

respuesta: "molde"
tipo: mc
opciones_explicitas: ["instancia", "molde", "atributo", "metodo"]

enunciado: "En el paradigma de Programación Orientada a Objetos, si comparamos la creación de un objeto con la construcción de una casa, la Clase actúa como el _________."

explicacion: |
  Una clase es un plano o molde que define la estructura y el comportamiento, mientras que el objeto es la instancia real construida a partir de ese molde.
```

```
metadata:
  materia: "informatica"
  tema: "poo_atributos"
  nivel: "intermedio"
  tags: ["memoria", "alcance"]

respuesta: "Atributo de clase"
tipo: mc
opciones_explicitas: ["Atributo de instancia", "Atributo de clase"]

enunciado: "Si definimos una variable dentro de una clase pero fuera de cualquier método, y dicha variable es compartida por todos los objetos de esa clase, estamos ante un: ___."

explicacion: |
  Los atributos de clase pertenecen a la clase misma y se comparten entre todas las instancias, mientras que los de instancia son únicos para cada objeto.
```

```
metadata:
  materia: "informatica"
  tema: "poo_constructores"
  nivel: "intermedio"
  tags: ["errores_comunes", "inicializacion"]

respuesta: "constructor"
tipo: completar
respuestas_validas:
  - "constructor"
  - "init"
  - "inicializador"

enunciado: "Un error común al programar POO es olvidar definir el método _________ (o constructor), lo que impide que los atributos de un objeto se inicialicen correctamente al momento de su creación."

explicacion: |
  El constructor es el método especial que se ejecuta automáticamente al instanciar un objeto, permitiendo establecer su estado inicial.
```

```
metadata:
  materia: "informatica"
  tema: "poo_metodos"
  nivel: "basico"
  tags: ["comportamiento"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que un método es una característica que define las propiedades (datos) de un objeto?"

explicacion: |
  Falso. Los atributos definen las propiedades (datos/estado), mientras que los métodos definen el comportamiento (acciones).
```

```
metadata:
  materia: "informatica"
  tema: "poo_instanciacion"
  nivel: "intermedio"
  tags: ["flujo_ejecucion"]

respuesta_orden: ["Definir clase", "Instanciar objeto", "Acceder a atributos/métodos"]
tipo: ordenar
opciones_explicitas: ["Definir clase", "Instanciar objeto", "Acceder a atributos/métodos"]

enunciado: "Ordena los pasos lógicos para poder utilizar una propiedad de un objeto en un programa:"

explicacion: |
  Primero se debe diseñar el plano (clase), luego crear el objeto en memoria (instanciar) y finalmente interactuar con él (acceder).
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["poo", "conceptos_fundamentales"]

respuesta: "molde"
tipo: completar
respuestas_validas:
  - "molde"
  - "plantilla"
  - "definicion"

enunciado: "Si comparamos la relación entre un plano de construcción y una casa real, la clase actúa como el plano, mientras que el objeto es la ___."

explicacion: |
  La clase es la definición abstracta (el molde) que describe las propiedades y comportamientos, mientras que el objeto es la instancia concreta creada a partir de esa clase.
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["poo", "atributos", "metodos"]

respuesta: "estado"
tipo: mc
opciones_explicitas: ["estado", "comportamiento"]

enunciado: "En el paradigma de POO, la principal distinción es que los atributos representan el ___, mientras que los métodos representan el comportamiento."

pasos:
  - "Identificar qué elemento define las características (datos)."
  - "Identificar qué elemento define las acciones (funciones)."

explicacion: |
  Los atributos almacenan el estado o las propiedades de un objeto (datos), mientras que los métodos definen las acciones que el objeto puede realizar (comportamiento).
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "intermedio"
  tags: ["poo", "instanciacion"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es posible que dos objetos distintos, creados a partir de la misma clase, tengan valores diferentes en sus atributos?"

explicacion: |
  Verdadero. Aunque comparten la misma estructura definida por la clase, cada instancia (objeto) posee su propio espacio en memoria para sus atributos, permitiendo que cada objeto tenga su propio estado.
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "intermedio"
  tags: ["poo", "ciclo_de_vida"]

respuesta_orden: ["Definición de clase", "Instanciación de objeto", "Llamada a método"]
tipo: ordenar
opciones_explicitas: ["Definición de clase", "Instanciación de objeto", "Llamada a método"]

enunciado: "Ordene los pasos lógicos para que un objeto pueda interactuar con su entorno:"

explicacion: |
  Primero se debe definir la estructura (Clase), luego se crea la instancia en memoria (Instanciación) y finalmente se ejecutan sus acciones (Métodos).
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "avanzado"
  tags: ["poo", "abstraccion"]

variables:
  caso: uno_de([0, 1])

respuesta: "abstracción"
tipo: mc
opciones_explicitas: ["abstracción", "implementación", "encapsulamiento"]

enunciado: "El proceso de ocultar los detalles complejos de cómo funciona un método y mostrar solo la interfaz necesaria para el usuario se conoce como ___."

explicacion: |
  La abstracción permite al programador centrarse en 'qué' hace un objeto en lugar de 'cómo' lo hace internamente, simplificando la interacción con sistemas complejos.
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["poo", "clases", "atributos"]

variables:
  datos: [["Vehiculo", "color", "marca"], ["Persona", "nombre", "edad"], ["Libro", "titulo", "autor"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si definimos una clase llamada {datos[idx][0]}, uno de sus atributos (propiedades) es {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["color", "nombre", "titulo", "no_aplica"]

explicacion: |
  Un atributo representa una característica o propiedad de un objeto de la clase. En el caso de {datos[idx][0]}, {datos[idx][1]} es una de sus propiedades fundamentales.
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "intermedio"
  tags: ["poo", "metodos", "comportamiento"]

variables:
  accion: uno_de([["acelerar", "aumentar_velocidad"], ["saludar", "decir_hola"], ["abrir", "cambiar_estado"]])

enunciado: "En la programación orientada a objetos, los métodos representan el comportamiento de un objeto. Si tenemos un método llamado '{accion[0]}', su propósito funcional es {accion[1]}."

respuesta: accion[1]
tipo: completar
respuestas_validas:
  - "aumentar_velocidad"
  - "decir_hola"
  - "cambiar_estado"

explicacion: |
  Los métodos son funciones definidas dentro de una clase que operan sobre los atributos del objeto o realizan acciones específicas.
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["poo", "objetos", "instancia"]

enunciado: "Si la clase es 'Perro', un objeto creado a partir de ella (una instancia) sería un perro real con nombre y edad específicos."

respuesta: verdadero
tipo: vf

explicacion: |
  Un objeto es una instancia concreta de una clase. Mientras la clase es el molde, el objeto es la entidad con datos reales.
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "intermedio"
  tags: ["poo", "estructura", "clases"]

enunciado: "Para implementar correctamente una clase con atributos y métodos, ¿cuál es el orden lógico de definición en la estructura de la clase?"

respuesta_orden: ["Definir atributos", "Definir métodos", "Instanciar objeto"]
tipo: ordenar
opciones_explicitas: ["Definir atributos", "Definir métodos", "Instanciar objeto"]

explicacion: |
  Primero se definen las propiedades (atributos), luego las acciones que puede realizar (métodos) y finalmente se crean los objetos (instancias) que usarán esa estructura.
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "avanzado"
  tags: ["poo", "objetos", "identidad"]

variables:
  caso: uno_de([["perro1", "perro2"], ["auto1", "auto2"], ["usuario1", "usuario2"]])

enunciado: "Si creamos dos objetos distintos, {caso[0]} y {caso[1]}, a partir de la misma clase, aunque tengan los mismos atributos, ¿son objetos idénticos en memoria?"

respuesta: falso
tipo: vf

explicacion: |
  Aunque dos objetos tengan los mismos valores en sus atributos, cada instancia ocupa un lugar distinto en la memoria y tiene una identidad única.
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

## Sección: proceso-programa-en-ejecucion (26 preguntas)

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["sistemas_operativos", "conceptos_basicos"]

respuesta: "proceso"
tipo: completar
respuestas_validas:
  - "proceso"

enunciado: "Un programa es una entidad pasiva que reside en el disco, mientras que un ___ es una entidad activa que se encuentra en ejecución en la memoria."

explicacion: |
  Un programa es simplemente un conjunto de instrucciones almacenadas (archivo), mientras que un proceso es la instancia de ese programa en ejecución, con su propio estado, contador de programa y recursos asignados.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["sistemas_operativos"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["El archivo 'navegador.exe' guardado en el disco", "programa"], ["La ventana del navegador abierta y consumiendo RAM", "proceso"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["programa", "proceso"]

enunciado: "Identifica la naturaleza del siguiente elemento: {datos[escenario_idx][0]}"

explicacion: |
  {datos[escenario_idx][0]} se clasifica como {datos[escenario_idx][1]} porque la distinción principal radica en si la entidad está estática en almacenamiento o activa en la CPU/Memoria.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["gestion_de_procesos"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que un proceso incluye no solo el código del programa, sino también el estado de los registros de la CPU y la memoria asignada?"

explicacion: |
  Verdadero. A diferencia del programa (que es solo código), el proceso es un paquete completo que incluye el contexto de ejecución (registros, pila, contador de programa, etc.).
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["gestion_de_procesos"]

respuesta_orden: ["Programa en disco", "Carga en memoria", "Ejecución en CPU", "Terminación"]
tipo: ordenar
opciones_explicitas: ["Programa en disco", "Carga en memoria", "Ejecución en CPU", "Terminación"]

enunciado: "Ordena cronológicamente las etapas desde que un usuario hace doble clic en un ejecutable hasta que este finaliza:"

explicacion: |
  El flujo lógico comienza con el archivo estático en el almacenamiento secundario, pasa a la memoria principal (RAM) mediante el cargador, se asigna tiempo de CPU para su ejecución y finalmente se liberan los recursos al terminar.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["sistemas_operativos"]

respuesta: 3
tipo: completar
tolerancia_abs: 0

enunciado: "Si un usuario abre tres instancias diferentes de un mismo editor de texto (por ejemplo, tres notas distintas), ¿cuántos procesos habrá corriendo en el sistema operativo?"

pasos:
  - "Identificar si las instancias son entidades independientes en ejecución."
  - "Relacionar cada instancia con un proceso distinto."

explicacion: |
  Cada vez que se inicia una instancia de un programa, el sistema operativo crea un proceso nuevo con su propio espacio de memoria y estado, aunque el código base (el programa) sea el mismo. Por lo tanto, con tres instancias hay 3 procesos.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["sistemas_operativos"]

respuesta: 3
tipo: completar
tolerancia_abs: 0

enunciado: "Si un usuario abre tres instancias diferentes de un mismo editor de texto (por ejemplo, tres notas distintas), ¿cuántos procesos habrá corriendo en el sistema operativo?"

explicacion: |
  Cada vez que se inicia una instancia de un programa, el sistema operativo crea un proceso nuevo con su propio espacio de memoria y estado. Por lo tanto, hay 3 procesos.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["conceptos_basicos", "sistema_operativo"]

respuesta: "proceso"
tipo: "mc"
opciones_explicitas: ["archivo_en_disco", "proceso", "instruccion_suelta", "hardware"]

enunciado: "Un programa es una entidad pasiva que reside en el almacenamiento secundario; cuando este programa se carga en la memoria y se inicia su ejecución, se convierte en un ___."

explicacion: |
  Un programa es un conjunto de instrucciones estáticas (un archivo en el disco), mientras que un proceso es la entidad dinámica que representa la ejecución de dichas instrucciones en la memoria RAM y con recursos asignados.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["diferencias"]

respuesta: verdadero
tipo: "vf"

enunciado: "Si abro dos instancias diferentes del mismo navegador web (por ejemplo, dos ventanas independientes), estoy ejecutando dos procesos distintos que comparten el mismo código de programa original."

explicacion: |
  Es verdadero. El programa (el ejecutable en disco) es el mismo, pero cada ventana es un proceso independiente con su propio espacio de memoria, contador de programa y estado de ejecución.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["memoria", "estructura"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["recursos_asignados", "estado_de_ejecucion"], ["memoria_y_registros", "contexto_del_cpu"]]

respuesta: datos[escenario_idx][1]
tipo: "completar"
respuestas_validas:
  - "recursos_asignados"
  - "estado_de_ejecucion"
  - "memoria_y_registros"
  - "contexto_del_cpu"

enunciado: "Al pasar de un programa a un proceso, el sistema operativo debe asignar {datos[escenario_idx][0]} para que este pueda operar."

explicacion: |
  Un proceso no es solo el código; requiere recursos como memoria (stack, heap), archivos abiertos y el estado de los registros del procesador para poder ejecutarse.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["estados_proceso"]

tipo: "ordenar"
opciones_explicitas: ["creado", "listo", "ejecutando", "terminado"]
respuesta_orden: ["creado", "listo", "ejecutando", "terminado"]

enunciado: "Ordena las etapas lógicas por las que pasa un proceso desde que se solicita su creación hasta que finaliza su tarea:"

explicacion: |
  El flujo estándar es: 1. Creado (se solicita), 2. Listo (esperando CPU), 3. Ejecutando (usando CPU), 4. Terminado (finaliza).
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "avanzado"
  tags: ["gestion_recursos"]

respuesta: "controlar_ejecucion"
tipo: "mc"
opciones_explicitas: ["gestionar_recursos", "controlar_ejecucion", "modificar_el_codigo", "eliminar_el_archivo"]

enunciado: "Cuando un programa se convierte en proceso, el Sistema Operativo asume la tarea de gestionar_recursos para asegurar que el proceso pueda realizar su función sin interferir con otros. Además, ¿qué otra tarea clave realiza el SO sobre el proceso?"

explicacion: |
  El SO actúa como un administrador que asigna tiempo de CPU y memoria (gestiona recursos) y decide cuándo un proceso puede estar en la CPU (controla la ejecución).
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["conceptos_basicos", "sistemas_operativos"]

respuesta: "proceso"
tipo: mc
opciones_explicitas: ["archivo", "proceso", "compilador", "kernel"]

enunciado: "Un programa es una entidad pasiva que reside en el disco, mientras que un ___ es una entidad activa que posee recursos del sistema (CPU, memoria, etc.)."

explicacion: |
  El programa es el código estático (un archivo en el disco), mientras que el proceso es la instancia de ese programa en ejecución, con su propio estado y recursos.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["recursos", "memoria"]

respuesta: falso
tipo: vf

enunciado: "Si ejecutas dos veces el mismo archivo 'navegador.exe', tendrás un único proceso con dos ventanas abiertas."

explicacion: |
  Falso. Cada vez que ejecutas un programa, el sistema operativo crea un proceso distinto con su propio espacio de direcciones y recursos, aunque el código de origen sea el mismo.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["estructura", "memoria"]

tipo: completar
respuesta: "Contador de instrucciones"

enunciado: "Un proceso requiere de un ___ para saber cuál es la próxima instrucción que debe ejecutar la CPU."

explicacion: |
  El Program Counter (PC) o Contador de Instrucciones es un registro que indica la dirección de la próxima instrucción a ejecutar.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["estados", "ciclo_de_vida"]

respuesta_orden: ["Nuevo", "Listo", "Ejecución", "Bloqueado", "Terminado"]
tipo: ordenar
opciones_explicitas: ["Nuevo", "Listo", "Ejecución", "Bloqueado", "Terminado"]

enunciado: "Ordena los estados típicos por los que pasa un proceso en un sistema operativo, desde su creación hasta su finalización:"

explicacion: |
  El ciclo de vida estándar implica la creación (Nuevo), la espera en cola (Listo), el uso de CPU (Ejecución), la espera por E/S (Bloqueado) y el cierre (Terminado).
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "avanzado"
  tags: ["memoria", "ejecucion"]

tipo: completar
respuesta: "dinámico"
respuestas_validas:
  - "dinámico"

enunciado: "Mientras que el programa se considera un ente estático almacenado en soporte persistente, el proceso es un ente ___ que reside principalmente en la memoria RAM."

explicacion: |
  El programa es una secuencia de instrucciones en un archivo (estático), mientras que el proceso es la entidad viva que gestiona memoria y registros (dinámico).
```

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

```
metadata:
  materia: "informatica"
  tema: "estructura_proceso"
  nivel: "avanzado"
  tags: ["memoria", "so"]

variables:
  datos: [["Contador de instrucciones", "Contexto de CPU"], ["Contenido de memoria", "Estado de E/S"], ["Identificador de proceso (PID)", "Puntero de pila"]]
  idx: uno_de([0, 1, 2])

tipo: completar
respuestas_validas:
  - "Contador de instrucciones"
  - "Contenido de memoria"
  - "Identificador de proceso (PID)"

enunciado: "Un proceso contiene información dinámica que un programa no posee, como por ejemplo el {datos[idx][0]}."

respuesta: datos[idx][0]

explicacion: |
  Mientras que el programa contiene el código, el proceso contiene el contexto de ejecución: el contador de programa (PC), los registros de la CPU, la pila (stack) y el estado de los recursos de entrada/salida.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_vida"
  nivel: "intermedio"
  tags: ["planificacion", "so"]

tipo: ordenar
opciones_explicitas: ["Creación", "Listo", "Ejecución", "Terminación"]

enunciado: "Ordene correctamente las etapas típicas por las que pasa un proceso desde que se carga hasta que finaliza su tarea:"

respuesta_orden: ["Creación", "Listo", "Ejecución", "Terminación"]

explicacion: |
  El ciclo de vida estándar implica: 1. Creación (el SO asigna recursos), 2. Listo (esperando CPU), 3. Ejecución (usando la CPU) y 4. Terminación (liberación de recursos).
```

```
metadata:
  materia: "informatica"
  tema: "identificacion_procesos"
  nivel: "basico"
  tags: ["pid", "so"]

tipo: completar

enunciado: "Si un usuario abre dos veces el mismo navegador (ej. Chrome), el sistema operativo crea dos procesos distintos. ¿Cómo se denomina el identificador único numérico que el SO asigna a cada uno de estos procesos para distinguirlos?"

respuesta: "PID"
respuestas_validas:
  - "PID"
  - "pid"
  - "Process Identifier"
  - "identificador de proceso"

explicacion: |
  Aunque el código sea el mismo, cada instancia en ejecución es un proceso distinto y posee un identificador único llamado PID (Process Identifier), asignado por el sistema operativo.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["conceptos_basicos", "sistema_operativo"]

variables:
  datos: [["El archivo 'editor.exe' está guardado en el disco duro", "falso"], ["El proceso 'editor.exe' está usando 500MB de RAM", "verdadero"]]
  idx: uno_de([0, 1])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
enunciado: "Analice el siguiente escenario: {datos[idx][0]}. ¿Es esto una descripción de un proceso en ejecución?"

explicacion: |
  Un programa es una entidad pasiva (un archivo en disco), mientras que un proceso es una entidad activa (un programa en ejecución con recursos asignados como RAM y CPU).
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["diferencias"]

respuesta: "proceso"
tipo: completar
respuestas_validas:
  - "proceso"

enunciado: "Un programa es una secuencia de instrucciones almacenadas en un medio no volátil, mientras que un ___ es la instancia de esa secuencia siendo ejecutada por la CPU."

explicacion: |
  La diferencia clave es el estado de actividad: el programa es el código estático y el proceso es la ejecución dinámica.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["recursos", "gestion_memoria"]

respuesta: "Un proceso requiere: [Memoria, CPU, Registradores]"
tipo: mc
opciones_explicitas: ["Un proceso requiere: [Memoria, CPU, Registradores]", "El programa en disco requiere: [Almacenamiento, Instrucciones, Nombre de archivo]"]

enunciado: "¿Cuál de las siguientes opciones describe correctamente los recursos que gestiona un proceso en ejecución, a diferencia de un programa almacenado en disco?"

explicacion: |
  Un proceso necesita recursos volátiles y de procesamiento (RAM, CPU, registros) para poder operar.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["ciclo_vida", "ordenar"]

respuesta_orden: ["Cargar programa", "Asignar memoria", "Ejecutar instrucciones", "Liberar recursos"]
tipo: ordenar
opciones_explicitas: ["Cargar programa", "Asignar memoria", "Ejecutar instrucciones", "Liberar recursos"]

enunciado: "Ordene los pasos lógicos que ocurren desde que un usuario hace doble clic en un ejecutable hasta que el proceso finaliza:"

explicacion: |
  El sistema operativo primero carga el código del disco a la RAM, asigna memoria y recursos, la CPU ejecuta las instrucciones y, finalmente, el proceso se cierra liberando los recursos.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "avanzado"
  tags: ["instancias", "pids"]

variables:
  datos: [["Se abren dos ventanas independientes del navegador Chrome", "Dos procesos distintos"], ["Se abre un solo archivo de texto", "Un solo proceso"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Dos procesos distintos", "Un solo proceso"]

enunciado: "Analice el escenario: {datos[idx][0]}. ¿Qué sucede a nivel de sistema operativo?"

explicacion: |
  Cada vez que se inicia una instancia de un programa, el sistema operativo crea un proceso nuevo con su propio espacio de memoria y un PID (Process Identifier) único, incluso si el código fuente es el mismo.
```

## Sección: protocolo-http-peticion-respuesta (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["http", "redes", "web"]

tipo: vf

enunciado: "En el modelo de comunicación de la web, el dispositivo que inicia una comunicación solicitando un recurso (como una página HTML) se denomina cliente."

respuesta: verdadero
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["http", "peticion", "metodo"]

tipo: mc

opciones_explicitas: ["URL", "Método HTTP", "Código de estado", "Cuerpo de la respuesta"]

enunciado: "En una petición HTTP, el verbo que indica la acción a realizar (como GET o POST) se conoce como:"

respuesta: "Método HTTP"

explicacion: |
  El método HTTP (GET, POST, PUT, DELETE, etc.) define la naturaleza de la operación que el cliente desea realizar sobre el recurso.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["http", "secuencia"]

tipo: ordenar

opciones_explicitas: ["El cliente envía una petición HTTP", "El servidor procesa la solicitud", "El servidor envía una respuesta HTTP", "El cliente recibe el contenido"]

enunciado: "Ordena los pasos que describen el flujo básico de una interacción HTTP:"

respuesta_orden: ["El cliente envía una petición HTTP", "El servidor procesa la solicitud", "El servidor envía una respuesta HTTP", "El cliente recibe el contenido"]

explicacion: |
  La comunicación HTTP es un protocolo de tipo petición-respuesta: el cliente siempre debe iniciar la comunicación para que el servidor pueda responder.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["http", "status_code"]

tipo: completar

respuestas_validas:
  - "404"

enunciado: "Si un cliente solicita una página que no existe en el servidor, el servidor responderá con un código de estado HTTP de tipo ___."

respuesta: "404"

explicacion: |
  El código 404 indica que el servidor no pudo encontrar el recurso solicitado. El código 200 indica que la petición fue exitosa.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["http", "cabeceras"]

tipo: mc

opciones_explicitas: ["Cabeceras (Headers)", "Cuerpo (Body)", "Línea de estado", "Todas las anteriores"]

enunciado: "Una respuesta HTTP estándar está compuesta por varias partes. ¿Cuál de las siguientes opciones describe los elementos que contienen metadatos sobre el contenido (como el tipo de archivo o la fecha)?"

respuesta: "Cabeceras (Headers)"

explicacion: |
  Las cabeceras (Headers) contienen información adicional sobre la respuesta, mientras que el cuerpo (Body) contiene el recurso solicitado propiamente dicho.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["http", "web", "cliente_servidor"]

respuesta: "GET"
tipo: completar
respuestas_validas:
  - "GET"

enunciado: "Cuando un usuario escribe una URL en su navegador y presiona Enter, el navegador actúa como cliente y envía una petición de tipo ___ al servidor para solicitar el recurso."

explicacion: |
  En el protocolo HTTP, el método GET se utiliza para solicitar y recibir una representación de un recurso (como un archivo HTML) del servidor.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["http", "status_code"]

variables:
  idx: uno_de([0, 1])
  datos: [["200 OK", "El recurso se encontró y se envió correctamente."], ["404 Not Found", "El servidor no pudo encontrar el recurso solicitado."]]

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["200 OK", "404 Not Found", "500 Internal Server Error", "301 Moved Permanently"]

enunciado: "Si el servidor responde con el código de estado {datos[idx][1]}, ¿cuál es el mensaje de estado que acompaña a la respuesta?"

explicacion: |
  El código de estado indica el resultado de la petición. El código 200 indica éxito, mientras que el 404 indica que la URL no existe en el servidor.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["http", "estado"]

respuesta: falso
tipo: vf

enunciado: "El protocolo HTTP es un protocolo 'stateful', lo que significa que el servidor recuerda automáticamente quién es el cliente entre una petición y otra sin ayuda de cookies o tokens."

explicacion: |
  Falso. HTTP es un protocolo 'stateless' (sin estado). Cada petición es independiente; para mantener el estado (como un carrito de compras), se usan mecanismos adicionales como Cookies o sesiones.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["http", "flujo"]

respuesta_orden: ["Petición del cliente", "Procesamiento en el servidor", "Respuesta del servidor", "Renderizado en el navegador"]
tipo: ordenar
opciones_explicitas: ["Petición del cliente", "Procesamiento en el servidor", "Respuesta del servidor", "Renderizado en el navegador"]

enunciado: "Ordena cronológicamente los pasos que ocurren desde que un usuario hace clic en un enlace hasta que ve la página en su pantalla:"

explicacion: |
  El flujo comienza con el cliente enviando la petición, el servidor la procesa, envía la respuesta y finalmente el navegador interpreta (renderiza) el contenido.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["http", "error_server"]

respuesta: 500
tipo: completar
tolerancia_abs: 0

enunciado: "Si un servidor web experimenta un error inesperado en su código interno (por ejemplo, un error de sintaxis en un script de backend) al intentar procesar una petición, el servidor responderá con un código de estado de la familia 5xx. ¿Cuál es el código específico para 'Internal Server Error'?"

pasos:
  - "Identificar la familia de errores (4xx para cliente, 5xx para servidor)."
  - "Localizar el código estándar para errores genéricos del servidor."

explicacion: |
  El código 500 indica que el servidor encontró una condición inesperada que le impidió completar la petición, generalmente debido a un error en el software del lado del servidor.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["http", "cliente_servidor"]

respuesta: "cliente"
tipo: completar
respuestas_validas:
  - "cliente"

enunciado: "En el modelo de comunicación HTTP, el dispositivo o software que inicia una comunicación solicitando un recurso es el ___."

explicacion: |
  El modelo cliente-servidor se basa en que el cliente inicia la interacción mediante una petición (request), y el servidor espera estas peticiones para responder (response).
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["estado", "stateless"]

respuesta: falso
tipo: vf

enunciado: "El protocolo HTTP es considerado un protocolo 'stateful' (con estado), lo que significa que el servidor recuerda automáticamente todas las peticiones anteriores de un mismo cliente."

explicacion: |
  Falso. HTTP es un protocolo 'stateless' (sin estado). Cada petición es independiente y el servidor no guarda información de sesiones previas por defecto, por eso se usan cookies o tokens para mantener el estado.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["estructura_respuesta", "status_code"]

respuesta: "404"
tipo: mc
opciones_explicitas: ["404", "200", "500", "301"]

enunciado: "Si un cliente solicita una página que no existe en el servidor, el servidor responderá con un código de estado de la serie 4xx. En este caso específico, el código será ___."

explicacion: |
  Los códigos de la serie 4xx indican errores del cliente (Client Error), como el 404 cuando el recurso no se encuentra.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["flujo_comunicacion"]

respuesta_orden: ["Petición del cliente", "Procesamiento en servidor", "Respuesta del servidor"]
tipo: ordenar
opciones_explicitas: ["Petición del cliente", "Procesamiento en servidor", "Respuesta del servidor"]

enunciado: "Ordena cronológicamente los pasos de una interacción estándar de HTTP:"

explicacion: |
  Primero el cliente envía la petición, luego el servidor la procesa y finalmente envía la respuesta con el contenido solicitado.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["metodos_http", "verbos"]

respuesta: "GET"
tipo: mc
opciones_explicitas: ["GET", "POST", "PUT", "DELETE"]

enunciado: "Si un cliente desea simplemente recuperar (leer) la información de un recurso sin modificar nada en el servidor, el método HTTP más apropiado es ___."

explicacion: |
  El método GET se utiliza para solicitar la representación de un recurso específico, mientras que POST, PUT y DELETE se utilizan para crear, actualizar o eliminar datos.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["redes", "protocolos", "modelo_cliente_servidor"]

respuesta: "capa_aplicacion"
tipo: completar
respuestas_validas:
  - "capa_aplicacion"
  - "capa_aplicacion"

enunciado: "Mientras que TCP opera en la capa de transporte para garantizar la entrega de datos, el protocolo HTTP opera en la ___."

explicacion: |
  HTTP es un protocolo de la capa de aplicación que define cómo se estructuran los mensajes, mientras que TCP se encarga de la conexión y fiabilidad del transporte de esos mensajes.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["protocolos", "web"]

respuesta: verdadero
tipo: vf
enunciado: "A diferencia de FTP, que está diseñado principalmente para la transferencia de archivos, HTTP es un protocolo orientado a la transferencia de hipermedios (páginas web, imágenes, etc.). ¿Es correcto afirmar que HTTP es un protocolo sin estado (stateless) por diseño?"

explicacion: |
  HTTP es stateless porque cada petición es independiente; el servidor no guarda memoria de peticiones anteriores por defecto (para eso se usan cookies o sesiones).
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["metodos", "http"]

respuesta: "POST"
tipo: mc
opciones_explicitas: ["GET", "POST", "PUT", "DELETE"]

enunciado: "En el modelo petición-respuesta, ¿qué método se distingue por enviar los datos del cuerpo en el cuerpo del mensaje y no en la URL, siendo ideal para enviar información sensible?"

explicacion: |
  El método GET envía los parámetros en la URL (query string), lo que los hace visibles en el historial y logs. El método POST envía la información en el cuerpo (body) de la petición.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["flujo", "modelo_cliente_servidor"]

respuesta_orden: ["Petición del cliente", "Procesamiento del servidor", "Respuesta del servidor"]
tipo: ordenar
opciones_explicitas: ["Petición del cliente", "Procesamiento del servidor", "Respuesta del servidor"]

enunciado: "Ordena cronológicamente los pasos que ocurren en un ciclo estándar de comunicación HTTP:"

explicacion: |
  El cliente inicia la comunicación con una petición (Request), el servidor procesa dicha petición y finalmente devuelve una respuesta (Response) al cliente.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["codigos_estado", "http"]

respuesta: "Error del cliente"
tipo: mc
opciones_explicitas: ["Éxito del servidor", "Redirección", "Error del cliente", "Error del servidor"]

enunciado: "Un código de estado HTTP de la serie 400 (como el 404) se distingue de un código de la serie 500 porque el primero indica un ___."

explicacion: |
  Los códigos 4xx indican que el problema reside en la petición del cliente (ej. recurso no encontrado), mientras que los 5xx indican que el servidor falló al procesar una petición válida.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["http", "cliente_servidor", "web"]

variables:
  datos: [["El navegador solicita la página principal de un sitio", "GET"], ["El navegador envía un formulario de registro", "POST"], ["El navegador solicita un archivo de estilo CSS", "GET"]]
  idx: uno_de([0, 1, 2])

enunciado: "En el modelo cliente-servidor, cuando {datos[idx][0]}, el método HTTP utilizado es ___."

respuestas_validas:
  - "GET"
  - "POST"
  - "PUT"
  - "DELETE"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  El método HTTP indica la acción que el cliente desea realizar. 'GET' se usa para solicitar datos y 'POST' para enviar datos al servidor.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["http", "status_code", "headers"]

variables:
  datos: [["404", "Not Found"], ["200", "OK"], ["500", "Internal Server Error"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si el servidor responde con el código de estado {datos[idx][0]}, el significado de la respuesta es ___."

opciones_explicitas: ["Not Found", "OK", "Internal Server Error", "Bad Request"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Los códigos de estado HTTP informan sobre el resultado de la petición: 2xx son éxitos, 4xx errores del cliente y 5xx errores del servidor.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["conceptos", "modelo_cliente_servidor"]

enunciado: "En el protocolo HTTP, el servidor es el encargado de iniciar la comunicación enviando una petición al cliente para que este pueda mostrar contenido."

respuesta: falso
tipo: vf

explicacion: |
  Es falso. En el modelo petición-respuesta de HTTP, el cliente (como un navegador) siempre inicia la comunicación mediante una petición, y el servidor responde a dicha petición.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["flujo", "protocolo"]

enunciado: "Ordena los pasos que ocurren durante una navegación web estándar:"

opciones_explicitas: ["El cliente envía una petición HTTP", "El servidor procesa la petición", "El servidor envía una respuesta HTTP", "El cliente recibe y renderiza el contenido"]
respuesta_orden: ["El cliente envía una petición HTTP", "El servidor procesa la petición", "El servidor envía una respuesta HTTP", "El cliente recibe y renderiza el contenido"]
tipo: ordenar

explicacion: |
  El flujo lógico es: Petición (Cliente) -> Procesamiento (Servidor) -> Respuesta (Servidor) -> Renderizado (Cliente).
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["metodos", "http"]

variables:
  datos: [["actualizar un recurso existente", "PUT"], ["eliminar un recurso", "DELETE"], ["enviar datos para crear un nuevo usuario", "POST"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si el objetivo de la operación es {datos[idx][0]}, el método HTTP más adecuado es ___."

opciones_explicitas: ["GET", "POST", "PUT", "DELETE"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Cada método tiene una semántica definida: GET para lectura, POST para creación, PUT para actualización y DELETE para eliminación.
```

