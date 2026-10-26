### 1 — Percepción vs Sensación
```
metadata:
  materia: "psicologia"
  tema: "percepcion_sensacion"
  nivel: "basico"
  tags: ["percepcion", "sensacion", "procesos_mentales"]

tipo: mc
opciones_explicitas: ["La sensación es la interpretación de los estímulos, mientras que la percepción es la recepción de energía física.", "La percepción es la interpretación de los estímulos, mientras que la sensación es la recepción de energía física.", "Ambos términos son sinónimos en la psicología cognitiva.", "La sensación requiere procesos cognitivos superiores y la percepción es puramente fisiológica."]

respuesta: "La percepción es la interpretación de los estímulos, mientras que la sensación es la recepción de energía física."

enunciado: "En psicología cognitiva, ¿cuál es la distinción fundamental entre sensación y percepción?"

explicacion: |
  La sensación es el proceso fisiológico de recibir estímulos a través de los receptores sensoriales, mientras que la percepción es el proceso psicológico de organizar e interpretar esa información para darle significado.
```

### 2 — Memoria de Trabajo vs Memoria a Largo Plazo
```
metadata:
  materia: "psicologia"
  tema: "memoria_cognitiva"
  nivel: "intermedio"
  tags: ["memoria", "atencion", "carga_cognitiva"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["estudiar para un examen final", "recordar el número de teléfono de un amigo"], ["mantener la información activa para resolver un problema inmediato", "almacenar información de forma permanente para su recuperación futura"]]

tipo: completar
respuestas_validas: ["memoria de trabajo", "memoria a largo plazo"]
respuesta: escenarios[escenario_idx][0]

enunciado: "Si una persona está {escenarios[escenario_idx][0]}, el proceso mental predominante que está utilizando para gestionar esa información temporalmente es la ___."

explicacion: |
  La memoria de trabajo es un sistema de capacidad limitada que mantiene y manipula la información necesaria para tareas cognitivas complejas en el momento presente.
```

### 3 — Atención Selectiva vs Atención Dividida
```
metadata:
  materia: "psicologia"
  tema: "atencion_procesos"
  nivel: "basico"
  tags: ["atencion", "filtro", "multitarea"]

tipo: vf
respuesta: falso

enunciado: "¿Es cierto que la atención dividida es la capacidad de procesar un único estímulo de manera profunda mientras se ignoran otros estímulos irrelevantes?"

explicacion: |
  Falso. La capacidad de enfocarse en un solo estímulo ignorando otros es la atención selectiva. La atención dividida es la capacidad de procesar múltiples fuentes de información o realizar dos o más tareas simultáneamente.
```

### 4 — Aprendizaje por Condicionamiento Clásico vs Operante
```
metadata:
  materia: "psicologia"
  tema: "aprendizaje_conductual"
  nivel: "intermedio"
  tags: ["aprendizaje", "condicionamiento", "conducta"]

tipo: mc
opciones_explicitas: ["El clásico se basa en la asociación de estímulos, mientras que el operante se basa en las consecuencias de la conducta.", "El operante se basa en la asociación de estímulos, mientras que el clásico se basa en las consecuencias de la conducta.", "El clásico requiere refuerzos para ocurrir, mientras que el operante es automático.", "Ambos requieren la presencia de un estímulo incondicionado."]

respuesta: "El clásico se basa en la asociación de estímulos, mientras que el operante se basa en las consecuencias de la conducta."

enunciado: "Al comparar ambos procesos, ¿qué distingue fundamentalmente al condicionamiento operante del condicionamiento clásico?"

explicacion: |
  En el condicionamiento clásico, el sujeto es pasivo y aprende por asociación de estímulos; en el operante, el sujeto es activo y la probabilidad de la conducta cambia según las consecuencias (refuerzos o castigos) que le siguen.
```

### 5 — Fases del Procesamiento de la Información
```
metadata:
  materia: "psicologia"
  tema: "procesamiento_informacion"
  nivel: "avanzado"
  tags: ["memoria", "codificacion", "recuperacion"]

tipo: ordenar
opciones_explicitas: ["Codificación", "Almacenamiento", "Recuperación"]
respuesta: ["Codificación", "Almacenamiento", "Recuperación"]

enunciado: "Ordene cronológicamente las etapas del proceso de memoria según el modelo de procesamiento de la información:"

explicacion: |
  El proceso comienza con la codificación (transformación del estímulo en un código mental), seguido del almacenamiento (mantenimiento de la información en el sistema) y finaliza con la recuperación (acceso a la información almacenada).
```