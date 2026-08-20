### 1 — Validación vs Verificación
```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "basico"
  tags: ["conceptos", "calidad"]

respuesta: "verificación"
tipo: "completar"
respuestas_validas: ["verificación"]

enunciado: "Mientras que la validación asegura que el producto cumpla con las necesidades del cliente, la ________ asegura que el producto se haya construido correctamente según las especificaciones técnicas."

explicacion: |
  La validación se enfoca en "¿estamos construyendo el producto correcto?" (necesidades del usuario), mientras que la verificación se enfoca en "¿estamos construyendo el producto correctamente?" (cumplimiento de especificaciones).
```

### 2 — El objetivo de la evaluación
```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "basico"
  tags: ["conceptos", "metodologia"]

variables:
  es_correcta: uno_de([true, false])

respuesta: es_correcta
tipo: "vf"

enunciado: "Si una solución cumple con todos los requisitos técnicos pero no resuelve el problema original del usuario, ¿se puede considerar que la solución es exitosa desde la perspectiva de la validación?"

explicacion: |
  Falso. Si no resuelve el problema del usuario, la validación falla, aunque la verificación técnica haya sido exitosa.
```

### 3 — Diferencia entre error y defecto
```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "intermedio"
  tags: ["calidad", "terminologia"]

opciones_explicitas: ["Defecto", "Error", "Falla"]

respuesta: "Falla"
tipo: "mc"

enunciado: "En el contexto de la evaluación de resultados, un ________ es la manifestación externa (el síntoma) de que un defecto ha sido ejecutado durante la operación del sistema."

explicacion: |
  El error es la acción humana, el defecto es la imperfección en el código/diseño, y la falla es la desviación del comportamiento esperado durante la ejecución.
```

### 4 — Secuencia de evaluación de calidad
```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "intermedio"
  tags: ["procesos", "orden"]

opciones_explicitas: ["Identificar el problema", "Implementar solución", "Evaluar resultado", "Comparar con requerimientos"]

respuesta: ["Identificar el problema", "Implementar solución", "Evaluar resultado", "Comparar con requerimientos"]
tipo: "ordenar"

enunciado: "Ordene las etapas lógicas para asegurar que la solución implementada realmente resolvió el problema planteado:"

explicacion: |
  Primero se debe conocer el problema, luego actuar, después observar el resultado obtenido y finalmente contrastarlo con los requerimientos iniciales para validar el éxito.
```

### 5 — Criterios de aceptación vs Requisitos
```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "avanzado"
  tags: ["gestion", "calidad"]

variables:
  escenario: uno_de([0, 1])

respuesta: tabla[escenario][1]
tabla: [
  ["Los requisitos son la descripción de lo que el sistema debe hacer.", "Los criterios de aceptación son la medida objetiva para determinar si se ha cumplido dicho requisito."],
  ["Los criterios de aceptación son solo deseos del cliente.", "Los requisitos son condiciones obligatorias para la validación."]
]

tipo: "mc"
opciones_explicitas: ["Los criterios de aceptación son solo deseos del cliente.", "Los requisitos son condiciones obligatorias para la validación."]

enunciado: "En la fase de evaluación, ¿cuál es la distinción fundamental entre un requisito y un criterio de aceptación? {escenario}"

explicacion: |
  Los requisitos definen el 'qué', mientras que los criterios de aceptación definen el 'cómo sabemos que se ha logrado' de manera medible.
```