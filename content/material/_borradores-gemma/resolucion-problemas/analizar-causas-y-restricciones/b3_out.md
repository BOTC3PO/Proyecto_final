### 1 — El error de la causa raíz
```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "basico"
  tags: ["causa-raiz", "diagnostico"]

respuesta: "causa_raiz"
tipo: "mc"
opciones_explicitas: ["síntoma", "consecuencia", "causa_raiz", "efecto secundario"]

enunciado: "Si un usuario reporta que una aplicación se cierra inesperadamente, y el equipo de soporte decide simplemente reiniciar el servidor para solucionar el problema, están tratando un ___ en lugar de la causa real."

explicacion: |
  Confundir un síntoma con la causa raíz es un error común. El síntoma es la manifestación visible (el cierre de la app), mientras que la causa raíz es el origen técnico que lo provoca. Si solo tratas el síntoma, el problema volverá a ocurrir.
```

### 2 — Identificación de restricciones
```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "basico"
  tags: ["restricciones", "limitaciones"]

respuesta: verdadero
tipo: "vf"

enunciado: "Las restricciones de un problema son factores externos o internos que limitan las posibles soluciones (como el presupuesto o el tiempo) y deben ser analizadas antes de proponer una solución definitiva."

explicacion: |
  Correcto. Ignorar las restricciones (como el presupuesto, la tecnología disponible o la normativa legal) suele llevar a diseñar soluciones teóricamente perfectas pero imposibles de implementar en la realidad.
```

### 3 — El ciclo de análisis de problemas
```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "intermedio"
  tags: ["metodologia", "orden"]

respuesta: ["identificar_problema", "analizar_causas", "definir_restricciones", "proponer_solucion"]
tipo: "ordenar"
opciones_explicitas: ["identificar_problema", "analizar_causas", "definir_restricciones", "proponer_solucion"]

enunciado: "Ordena los pasos lógicos para abordar un problema de manera estructurada, evitando saltar directamente a la solución sin entender el contexto."

explicacion: |
  El orden lógico asegura que la solución se base en hechos. Primero se identifica qué está pasando, luego se busca el porqué (causas), se entienden los límites (restricciones) y finalmente se diseña la solución.
```

### 4 — Causas vs. Correlaciones
```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "avanzado"
  tags: ["logica", "causalidad"]

variables:
  escenario_idx: uno_de([0, 1])

respuesta: tabla[escenario_idx][1]
tipo: "mc"

enunciado: "En el siguiente escenario, ¿se ha identificado una causa o una correlación? {datos[escenario_idx][0]}"

variables:
  datos: [["Cada vez que aumenta la temperatura, las ventas de helados suben.", "correlacion"], ["Un cable suelto causa el cortocircuito en la máquina.", "causa"]]

explicacion: |
  Es vital distinguir entre dos eventos que ocurren al mismo tiempo (correlación) y un evento que produce directamente al otro (causalidad). Confundir esto lleva a aplicar soluciones ineficaces.
```

### 5 — Completar el concepto de restricción
```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "intermedio"
  tags: ["terminologia", "conceptos"]

respuesta: "recursos"
tipo: "completar"
respuestas_validas: ["recursos", "tiempo", "presupuesto"]

enunciado: "Cuando un proyecto tiene un límite de dinero asignado, estamos ante una restricción de ___."

explicacion: |
  El dinero es un recurso financiero. Las restricciones de recursos son límites en la cantidad de materia prima, personal, tiempo o dinero disponibles para ejecutar una solución.
```