### 1 — El concepto de alcance
```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "basico"
  tags: ["alcance", "definicion"]

respuesta: "alcance"
tipo: completar
respuestas_validas: ["alcance"]

enunciado: "La delimitación de las tareas, entregables y límites de un proyecto se denomina ________."

explicacion: |
  El alcance define los límites del proyecto: qué se va a hacer y, muy importante, qué no se va a hacer.
```

### 2 — Objetivos SMART
```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "basico"
  tags: ["objetivos", "smart"]

variables:
  es_smart: uno_de([verdadero, falso])

respuesta: es_smart
tipo: vf

enunciado: "Un objetivo que es ambiguo, no tiene una fecha de finalización clara y no es medible, ¿cumple con la metodología SMART? {es_smart == falso}"

explicacion: |
  Para que un objetivo sea SMART debe ser Específico, Medible, Alcanzable, Relevante y con un Tiempo determinado.
```

### 3 — Componentes de un objetivo
```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "intermedio"
  tags: ["objetivos", "estructura"]

opciones_explicitas: ["Entregable", "Recurso", "Restricción", "Meta"]

respuesta: "Entregable"
tipo: mc

enunciado: "En la definición de un proyecto, un producto tangible o intangible que se debe producir para completar una fase se conoce como:"

explicacion: |
  Los entregables son los resultados concretos que permiten verificar el progreso hacia los objetivos.
```

### 4 — Exclusiones del proyecto
```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "basico"
  tags: ["alcance", "limites"]

opciones_explicitas: ["Inclusiones", "Exclusiones", "Riesgos", "Costos"]

respuesta: "Exclusiones"
tipo: mc

enunciado: "Para evitar la corrupción del alcance (scope creep), es fundamental definir claramente las ________, es decir, aquello que el proyecto NO cubrirá."

explicacion: |
  Definir las exclusiones ayuda a gestionar las expectativas de los stakeholders y evita que el proyecto crezca descontroladamente.
```

### 5 — Ciclo de definición
```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

opciones_explicitas: ["Identificar el problema", "Definir objetivos", "Establecer el alcance", "Validar con stakeholders"]

respuesta: ["Identificar el problema", "Definir objetivos", "Establecer el alcance", "Validar con stakeholders"]
tipo: ordenar

enunciado: "Ordene cronológicamente los pasos lógicos para la fase inicial de planificación de un proyecto:"

explicacion: |
  Primero se entiende el problema, luego se establece qué se quiere lograr (objetivos), se delimita el trabajo (alcance) y finalmente se busca la aprobación de los interesados.
```