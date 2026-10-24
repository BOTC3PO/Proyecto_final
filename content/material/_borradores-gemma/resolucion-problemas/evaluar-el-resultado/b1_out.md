### 1 — Definición de Evaluación
```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "basico"
  tags: ["definicion", "conceptos"]

respuesta: "validar"
tipo: completar
respuestas_validas: ["validar"]

enunciado: "El proceso de comprobar si la solución implementada realmente resolvió el problema se denomina ________."

explicacion: |
  La evaluación es la etapa donde se verifica si la solución propuesta cumple con los requisitos iniciales y resuelve el problema planteado.
```

### 2 — Criterios de Éxito
```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "basico"
  tags: ["criterios", "metodologia"]

opciones_explicitas: ["Criterios de aceptación", "Pasos de la solución", "Variables de entorno", "Diagramas de flujo"]
respuesta: "Criterios de aceptación"
tipo: mc

enunciado: "¿Cómo se denominan los estándares o condiciones que se utilizan para determinar si una solución es correcta y satisfactoria?"

explicacion: |
  Los criterios de aceptación definen las condiciones que debe cumplir el resultado para ser considerado una solución válida.
```

### 3 — Verdad o Falso: Eficiencia
```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "intermedio"
  tags: ["eficiencia", "calidad"]

respuesta: falso
tipo: vf

enunciado: "Evaluar el resultado implica únicamente verificar que la solución sea correcta, sin importar el uso de recursos como tiempo o memoria."

explicacion: |
  Falso. Una evaluación completa también debe considerar la eficiencia (optimización de recursos) de la solución implementada.
```

### 4 — El Ciclo de la Solución
```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "basico"
  tags: ["ciclo", "pasos"]

opciones_explicitas: ["Implementación", "Evaluación", "Diseño de la solución", "Análisis del problema"]
respuesta: ["Análisis del problema", "Diseño de la solución", "Implementación", "Evaluación"]
tipo: ordenar

enunciado: "Ordena las etapas del ciclo de resolución de problemas desde el inicio hasta la fase de evaluación:"

explicacion: |
  El ciclo estándar comienza con entender el problema, diseñar la estrategia, construir la solución y finalmente evaluarla.
```

### 5 — Identificación de Errores
```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "intermedio"
  tags: ["errores", "verificacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["el resultado es incorrecto", "el resultado es correcto pero lento"], ["fallo en la lógica", "fallo en la eficiencia"]]

respuesta: "el resultado es incorrecto"
tipo: mc
opciones_explicitas: ["el resultado es incorrecto", "el resultado es correcto", "la solución es perfecta"]

enunciado: "Si tras la evaluación se detecta que la solución no cumple con los criterios de aceptación debido a un error en el proceso, se concluye que: {escenario_idx[0]}"

explicacion: |
  Si la solución no satisface los criterios establecidos, la evaluación indica que el problema no ha sido resuelto satisfactoriamente.
```