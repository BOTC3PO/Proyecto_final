### 1 — El sesgo de la primera idea
```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "basico"
  tags: ["sesgos", "creatividad"]

respuesta: falso
tipo: vf

enunciado: "En el proceso de diseño de soluciones, la primera idea que surge suele ser la más óptima y la que menos riesgos presenta."

explicacion: |
  Falso. La primera idea suele ser la más obvia o convencional. El proceso de diseño requiere generar múltiples alternativas para evitar el sesgo de anclaje y encontrar soluciones más innovadoras o eficientes.
```

### 2 — La trampa de la solución única
```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "intermedio"
  tags: ["pensamiento-critico", "alternativas"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[ "un error en una línea de código", "un retraso en la entrega de un proyecto" ], [ "una queja de un cliente", "una falla en un componente mecánico" ]]

respuesta: "generar múltiples alternativas"
tipo: completar
respuestas_validas: ["generar múltiples alternativas", "analizar la primera opción", "implementar la solución rápida"]

enunciado: "Ante el problema de {escenarios[escenario_idx][0]}, una práctica fundamental para evitar el pensamiento convergente prematuro es ___."

explicacion: |
  Generar múltiples alternativas permite comparar pros y contras antes de comprometer recursos en una única dirección.
```

### 3 — Calidad vs. Cantidad en el Brainstorming
```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "basico"
  tags: ["brainstorming", "creatividad"]

respuesta: "Cantidad sobre calidad"
tipo: mc
opciones_explicitas: ["Calidad sobre cantidad", "Cantidad sobre calidad", "Calidad y cantidad simultáneamente", "No se debe priorizar ninguna"]

enunciado: "Durante la fase inicial de generación de soluciones (divergencia), ¿en qué aspecto se debe priorizar para maximizar la creatividad?"

explicacion: |
  En la fase de divergencia, el objetivo es la cantidad. El juicio crítico y la selección de calidad pertenecen a la fase de convergencia posterior.
```

### 4 — El orden del proceso creativo
```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

respuesta: ["Definir el problema", "Generar alternativas", "Evaluar opciones", "Seleccionar la mejor"]
tipo: ordenar
opciones_explicitas: ["Generar alternativas", "Definir el problema", "Seleccionar la mejor", "Evaluar opciones"]

enunciado: "Ordena las fases lógicas para pasar de un problema a una solución efectiva:"

explicacion: |
  No se pueden generar soluciones si no se ha definido el problema correctamente, y no se debe seleccionar sin antes evaluar las alternativas generadas.
```

### 5 — El peligro del sesgo de confirmación
```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "avanzado"
  tags: ["sesgos", "evaluacion"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [[ "una falla en el motor", "un error en el software" ], [ "una caída en las ventas", "un error de comunicación" ]]
  soluciones: [[ "cambiar el aceite", "revisar la bujía" ], [ "reentrenar al equipo", "cambiar el manual" ]]

respuesta: falso
tipo: vf

enunciado: "Si al intentar resolver {casos[caso_idx][0]} solo busco información que respalde la solución de {soluciones[caso_idx][0]}, estoy aplicando un proceso de diseño de soluciones robusto."

explicacion: |
  Falso. Eso es el sesgo de confirmación. Un buen diseño de soluciones requiere buscar activamente evidencia que desmienta nuestra solución preferida para validarla.
```