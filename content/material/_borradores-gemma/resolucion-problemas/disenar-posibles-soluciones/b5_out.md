### 1 — El dilema de la logística
```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "basico"
  tags: ["alternativas", "decision"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["El transporte de carga es muy costoso", "El tiempo de entrega es demasiado lento"], ["La empresa quiere reducir costos", "La empresa quiere aumentar la velocidad"]]
  solucion_correcta: ["optimizar rutas", "contratar más vehículos"]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["optimizar rutas", "contratar más vehículos", "cambiar de proveedor", "no hacer nada"]

enunciado: "Ante el problema de que {escenarios[escenario_idx][0]}, ¿cuál sería la alternativa más directa para abordar la situación?"

explicacion: |
  Diseñar soluciones requiere identificar si el problema es de costo o de tiempo. En este caso, la alternativa seleccionada ataca directamente la raíz del problema planteado.
```

### 2 — Evaluación de impacto
```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "intermedio"
  tags: ["evaluacion", "riesgo"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Implementar software nuevo", "Cambiar la política de horarios"], ["Reducir el presupuesto", "Aumentar la jornada laboral"]]
  es_viable: [falso, falso]

respuesta: es_viable[caso_idx]
tipo: vf

enunciado: "Si decides aplicar la medida de: {casos[caso_idx]}, ¿consideras que la solución es viable sin realizar un estudio de impacto previo?"

explicacion: |
  En el diseño de soluciones, una alternativa puede ser lógica pero no viable sin un análisis previo. En ambos casos presentados, la respuesta es falsa debido a la falta de estudio de impacto.
```

### 3 — Secuencia de ideación
```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "basico"
  tags: ["metodologia", "pasos"]

respuesta: ["Identificar el problema", "Generar alternativas", "Evaluar opciones", "Elegir la mejor"]
tipo: ordenar
opciones_explicitas: ["Identificar el problema", "Generar alternativas", "Evaluar opciones", "Elegir la mejor"]

enunciado: "Ordena los pasos lógicos para el diseño de una solución efectiva ante un problema detectado."

explicacion: |
  El proceso creativo y de resolución comienza con la comprensión del problema, seguido de la divergencia (generar opciones), la convergencia (evaluar) y finalmente la decisión.
```

### 4 — Completar la estrategia
```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "intermedio"
  tags: ["estrategia", "pensamiento-divergente"]

variables:
  contexto_idx: uno_de([0, 1])
  contextos: [["El cliente pide rapidez", "El cliente pide calidad"], ["El cliente pide bajo costo", "El cliente pide durabilidad"]]
  termino_clave: ["velocidad", "precisión"]

respuesta: termino_clave[contexto_idx]
tipo: completar
respuestas_validas: ["velocidad", "precisión"]

enunciado: "Si el problema principal detectado es que el cliente requiere ____, la solución debe enfocarse en la optimización de procesos de entrega."

explicacion: |
  El diseño de soluciones debe estar alineado con la necesidad principal. Si la necesidad es rapidez, la palabra clave es velocidad.
```

### 5 — El filtro de soluciones
```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "avanzado"
  tags: ["criterios", "seleccion"]

variables:
  criterio_idx: uno_de([0, 1])
  criterios: [["Costo de implementación", "Facilidad de uso"]]
  valor_criterio: ["alto", "bajo"]

respuesta: valor_criterio[criterio_idx]
tipo: mc
opciones_explicitas: ["alto", "bajo", "medio", "nulo"]

enunciado: "Al evaluar una alternativa de solución, si el factor de {criterios[criterio_idx]} es ____, la solución podría ser difícil de adoptar a pesar de ser efectiva."

explicacion: |
  Evaluar las restricciones es parte del diseño. Si el criterio evaluado tiene un valor "alto" (ya sea en costo o dificultad), la implementación se ve comprometida.
```