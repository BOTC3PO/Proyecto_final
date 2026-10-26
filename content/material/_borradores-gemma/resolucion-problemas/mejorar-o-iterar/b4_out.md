### 1 — Iteración vs. Solución Final
```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "basico"
  tags: ["iteracion", "mejora_continua"]

respuesta: "mejorar"
tipo: completar
respuestas_validas: ["mejorar", "optimizar"]

enunciado: "Cuando el proceso de resolución de un problema requiere ajustar la solución tras evaluar su desempeño, estamos en una fase de ________, en lugar de considerar la tarea como una solución final."

explicacion: |
  La iteración implica volver a pasar por ciclos de diseño y evaluación para perfeccionar el resultado. No es un error, es parte del proceso de mejora.
```

### 2 — El propósito de la evaluación
```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "intermedio"
  tags: ["evaluacion", "iteracion"]

opciones_explicitas: ["Confirmar que la solución es perfecta", "Identificar brechas para realizar ajustes", "Finalizar el proyecto inmediatamente", "Cambiar el problema original"]
respuesta: "Identificar brechas para realizar ajustes"
tipo: mc

enunciado: "En un proceso iterativo, ¿cuál es la función principal de la fase de evaluación en contraste con una resolución lineal?"

explicacion: |
  En un modelo lineal, la evaluación busca validar el éxito. En un modelo iterativo, la evaluación busca detectar áreas de mejora para volver a iterar.
```

### 3 — Ciclo de mejora continua
```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "intermedio"
  tags: ["ciclo", "iteracion"]

variables:
  pasos: [["Planificar", "Ejecutar", "Evaluar", "Ajustar"], ["Analizar", "Diseñar", "Probar", "Refinar"], ["Definir", "Idear", "Implementar", "Corregir"]]
  idx: uno_de([0, 1, 2])

opciones_explicitas: [pasos[idx], ["Error", "Solución", "Fin"], ["Inicio", "Nudo", "Desenlace"]]
respuesta: pasos[idx]
tipo: ordenar

enunciado: "Ordena correctamente las etapas de un ciclo de iteración para la mejora de una solución:"

explicacion: |
  El ciclo iterativo sigue una secuencia lógica de acción, verificación y ajuste para asegurar que la solución evolucione hacia la excelencia.
```

### 4 — Verdad o Falso: La iteración es redundancia
```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "basico"
  tags: ["conceptos", "mitos"]

respuesta: falso
tipo: vf

enunciado: "Si una solución ya funciona, realizar una iteración adicional se considera un desperdicio de recursos (redundancia) y no parte de un proceso de optimización."

explicacion: |
  Falso. La iteración busca la optimización. Una solución que "funciona" puede ser mejorada para ser más eficiente, económica o robusta.
```

### 5 — Diferencia entre Corregir y Iterar
```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "avanzado"
  tags: ["correccion", "optimizacion"]

variables:
  escenarios: [["Corregir un error crítico", "Optimizar el rendimiento"]]
  tipo_accion: ["reparar", "mejorar"]
  idx: uno_de([0, 1])

respuesta: tipo_accion[idx]
tipo: completar
respuestas_validas: ["reparar", "mejorar"]

enunciado: "Si el objetivo es eliminar un fallo que impide el funcionamiento, estamos en una fase de ________; si el objetivo es elevar la calidad de una solución que ya funciona, estamos en una fase de ________."

explicacion: |
  La corrección es reactiva (arreglar lo que está mal), mientras que la iteración para mejora es proactiva (elevar lo que ya está bien).
```