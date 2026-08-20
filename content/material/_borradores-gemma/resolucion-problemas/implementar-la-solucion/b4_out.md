### 1 — Implementación vs. Ideación
```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "basico"
  tags: ["conceptos", "fases"]

respuesta: "implementar"
tipo: "completar"
respuestas_validas: ["implementar", "implementación"]

enunciado: "Mientras que la fase de ideación se centra en la generación de múltiples alternativas de solución, la fase de ___ se enfoca en la ejecución técnica y puesta en marcha de la alternativa seleccionada."

explicacion: |
  La ideación es un proceso creativo de divergencia, mientras que la implementación es un proceso de acción y ejecución de la solución elegida.
```

### 2 — Implementación vs. Planificación
```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "intermedio"
  tags: ["diferencias", "gestion"]

variables:
  es_ejecucion: uno_de([verdadero, falso])

opciones_explicitas: ["La planificación define el 'cómo' y los recursos, mientras que la implementación es la ejecución real de dicho plan.", "La planificación es el resultado final, mientras que la implementación es el proceso de diseño."]

respuesta: opciones_explicitas[0]
tipo: "mc"

enunciado: "En el ciclo de resolución de problemas, ¿cuál es la distinción fundamental entre la planificación y la implementación?"

explicacion: |
  La planificación es el diseño de la estrategia (el mapa), mientras que la implementación es el acto de seguir ese mapa para alcanzar el objetivo.
```

### 3 — Implementación y su naturaleza
```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "basico"
  tags: ["verificacion", "naturaleza"]

respuesta: falso
tipo: "vf"

enunciado: "La implementación de una solución es un proceso estático que no requiere ajustes una vez que se ha comenzado la ejecución."

explicacion: |
  Falso. La implementación suele ser iterativa; la retroalimentación durante la ejecución a menudo requiere realizar ajustes en la solución original.
```

### 4 — Pasos para la implementación exitosa
```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "intermedio"
  tags: ["secuencia", "metodologia"]

opciones_explicitas: ["Asignación de recursos", "Ejecución de tareas", "Monitoreo de resultados"]

respuesta: ["Asignación de recursos", "Ejecución de tareas", "Monitoreo de resultados"]
tipo: "ordenar"

enunciado: "Ordene cronológicamente las etapas lógicas para llevar a la práctica una solución técnica:"

explicacion: |
  Primero se deben disponer los medios (recursos), luego realizar el trabajo (ejecución) y finalmente verificar si funciona (monitoreo).
```

### 5 — Implementación vs. Evaluación
```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "avanzado"
  tags: ["evaluacion", "comparacion"]

variables:
  escenario: uno_de([0, 1])

enunciado: "Si la implementación se define como el proceso de 'hacer', la evaluación de la solución se distingue por ser el proceso de ___."

respuestas_validas: ["medir", "evaluar", "verificar"]
tipo: "completar"

explicacion: |
  La implementación busca la acción, mientras que la evaluación busca determinar la efectividad y calidad de dicha acción mediante métricas.
```