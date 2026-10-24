### 1 — Concepto de Planificador
```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "basico"
  tags: ["conceptos", "so"]

respuesta: "scheduler"
tipo: completar
respuestas_validas: ["scheduler", "planificador"]

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

variables:
  tipo_idx: uno_de([0, 1])
  escenario: [[0, "Preemptiva"], [1, "No preemptiva"]]

respuesta: escenario[tipo_idx][1]
tipo: mc
opciones_explicitas: ["Preemptiva", "No preemptiva"]

enunciado: "En un modelo de planificación {escenario[tipo_idx][1]}, una vez que un proceso toma el control de la CPU, no puede ser retirado de él hasta que finalice o se bloquee por una operación de E/S."

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

respuesta: ["Nuevo", "Listo", "Ejecución", "Terminado"]
tipo: ordenar
opciones_explicitas: ["Nuevo", "Listo", "Ejecución", "Terminado", "Esperando"]

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

variables:
  metrica_idx: uno_de([0, 1])
  metrica_nombre: [["Tiempo de respuesta", "Turnaround"], ["Response Time", "Turnaround"]]

respuesta: metrica_nombre[metrica_idx][0]
tipo: mc
opciones_explicitas: ["Tiempo de respuesta", "Turnaround"]

enunciado: "El tiempo que transcurre desde que se envía una solicitud hasta que se produce la primera respuesta es una métrica clave llamada {metrica_nombre[metrica_idx][0]}."

explicacion: |
  El 'Response Time' es vital en sistemas interactivos para garantizar que el usuario sienta que el sistema responde rápidamente.
```