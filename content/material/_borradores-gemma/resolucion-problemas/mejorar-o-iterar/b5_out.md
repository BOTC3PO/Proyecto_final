### 1 — El Ciclo de Mejora en un Algoritmo
```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "intermedio"
  tags: ["iteracion", "evaluacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["El algoritmo tarda 10s", "optimizar_tiempo"], ["El algoritmo usa 2GB de RAM", "optimizar_memoria"]]
  solucion: datos[escenario_idx][1]

respuesta: solucion
tipo: mc
opciones_explicitas: ["optimizar_memoria", "optimizar_tiempo", "finalizar_proyecto", "cambiar_lenguaje"]

enunciado: "Tras evaluar el desempeño, observamos que {datos[escenario_idx][0]}. ¿Cuál es la acción de iteración más adecuada?"

explicacion: |
  Cuando una solución cumple el objetivo pero presenta un cuello de botella específico, la iteración debe enfocarse en corregir ese punto particular en lugar de descartar todo el proceso.
```

### 2 — ¿Solución Terminada?
```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "basico"
  tags: ["evaluacion", "criterios"]

respuesta: falso
tipo: vf

enunciado: "Si una solución resuelve el problema pero no cumple con los criterios de eficiencia o usabilidad definidos en la fase de evaluación, ¿se debe considerar la solución como terminada?"

explicacion: |
  No. Una solución que no cumple con todos los criterios de calidad debe entrar en un ciclo de iteración para ajustar los aspectos deficientes.
```

### 3 — Pasos para la Iteración Efectiva
```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "intermedio"
  tags: ["metodologia", "orden"]

opciones_explicitas: ["Evaluar resultados", "Implementar solución", "Definir problema", "Ajustar solución"]

respuesta: ["Definir problema", "Implementar solución", "Evaluar resultados", "Ajustar solución"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para mejorar una solución que ha sido evaluada y requiere ajustes."

explicacion: |
  El proceso cíclico implica: 1. Definir, 2. Implementar, 3. Evaluar y, si hay brechas, 4. Ajustar (iterar).
```

### 4 — Identificación de la Brecha
```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "avanzado"
  tags: ["analisis", "brecha"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Requerimiento: 5s | Real: 8s", "reducir_latencia"], ["Requerimiento: 100% uso | Real: 85% uso", "aumentar_rendimiento"]]
  objetivo: casos[caso_idx][1]

respuesta: objetivo
tipo: completar
respuestas_validas: ["reducir_latencia", "aumentar_rendimiento"]

enunciado: "Al comparar el desempeño real con el esperado en el caso '{casos[caso_idx][0]}', la acción de iteración necesaria es: ___"

explicacion: |
  La iteración se basa en la brecha (gap) detectada entre el estado actual y el estado deseado.
```

### 5 — Evaluación de la Calidad
```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "basico"
  tags: ["feedback", "iteracion"]

respuesta: 1
tipo: mc
opciones_explicitas: [0, 1]

enunciado: "Si tras una iteración el error de la solución disminuye de 0.5 a 0.1, ¿se ha cumplido el objetivo de la fase de mejora? (1 para sí, 0 para no)"

explicacion: |
  Una reducción en la magnitud del error indica que la iteración fue efectiva y se acerca al estándar de calidad deseado.
```