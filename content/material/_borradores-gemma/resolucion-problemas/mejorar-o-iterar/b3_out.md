### 1 — El error de la solución estática
```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "basico"
  tags: ["metodologia", "evaluacion"]

respuesta: falso
tipo: vf

enunciado: "Si una solución cumple con los requisitos iniciales del problema, ¿es correcto asumir que el proceso de resolución ha finalizado sin necesidad de evaluar su eficiencia o aplicabilidad en contextos reales?"

explicacion: |
  Una solución puede ser funcional pero ineficiente o incompleta. La iteración permite optimizar la solución mediante la evaluación continua, asegurando que no solo sea correcta, sino también la mejor opción posible.
```

### 2 — El ciclo de mejora
```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "intermedio"
  tags: ["ciclo_iterativo", "optimizacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Diseño de un motor de búsqueda", "Se ha implementado, pero la velocidad de respuesta es lenta"],
    ["Construcción de un puente", "Se ha construido, pero el material es más costoso de lo previsto"]
  ]

enunciado: "En el escenario de '{escenarios[escenario_idx][0]}', el problema detectado es: '{escenarios[escenario_idx][1]}'. ¿Cuál es la acción correcta según el proceso de mejora?"

opciones_explicitas: ["Aceptar la solución como definitiva", "Reiniciar el problema desde cero", "Iterar para ajustar la solución actual"]

respuesta: "Iterar para ajustar la solución actual"
tipo: mc

explicacion: |
  Detectar una deficiencia (como lentitud o costo) tras haber implementado una solución no implica necesariamente volver al inicio, sino iterar sobre la solución existente para optimizarla.
```

### 3 — Componentes de la iteración
```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "intermedio"
  tags: ["pasos", "evaluacion"]

respuesta: ["Evaluar", "Identificar", "Ajustar", "Implementar"]
tipo: ordenar

opciones_explicitas: ["Implementar", "Evaluar", "Ajustar", "Identificar"]

enunciado: "Para mejorar una solución que no ha alcanzado el rendimiento esperado, se debe seguir este orden lógico de pasos:"

explicacion: |
  El ciclo de mejora requiere primero implementar una idea, luego evaluar su desempeño, identificar la brecha entre el resultado y el objetivo, y finalmente ajustar la solución para iterar.
```

### 4 — La confusión del "Terminado"
```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "basico"
  tags: ["conceptos_clave"]

respuesta: "optimización"
tipo: completar

enunciado: "Cuando una solución ya resuelve el problema pero se busca mejorar su rendimiento, velocidad o costo, estamos pasando de la fase de resolución a la fase de ___________."

respuestas_validas: ["optimización"]

explicacion: |
  La resolución busca la viabilidad (que funcione), mientras que la optimización (parte del proceso iterativo) busca la excelencia o eficiencia de dicha solución.
```

### 5 — Evaluación vs. Error
```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "avanzado"
  tags: ["evaluacion", "iteracion"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["La solución no cumple con el objetivo principal", "Falla de diseño"],
    ["La solución cumple el objetivo pero es muy costosa", "Falla de eficiencia"]
  ]

enunciado: "Analizamos el siguiente caso: '{casos[caso_idx][0]}'. Esto se clasifica como una: '{casos[caso_idx][1]}'."

opciones_explicitas: ["Falla de diseño", "Falla de eficiencia"]

respuesta: "Falla de diseño"
tipo: mc

explicacion: |
  Es crucial distinguir si el problema es que la solución no funciona (diseño/lógica) o si simplemente no es la mejor versión posible (eficiencia). Ambos requieren iteración, pero el enfoque del ajuste es distinto.
```