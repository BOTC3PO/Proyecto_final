### 1 — El cuello de botella en la producción
```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar_causas_y_restricciones"
  nivel: "intermedio"
  tags: ["analisis", "causas", "restricciones"]

variables:
  escenario: uno_de([
    ["Máquina A (10 u/h) -> Máquina B (5 u/h) -> Embalaje (15 u/h)", "Embalaje"],
    ["Estación 1 (20 u/h) -> Estación 2 (15 u/h) -> Estación 3 (10 u/h)", "Estación 3"],
    ["Corte (50 u/h) -> Pegado (30 u/h) -> Secado (40 u/h)", "Pegado"]
  ])

enunciado: "En un proceso de producción lineal, la capacidad total del sistema está limitada por el componente más lento. Según el escenario actual, el cuello de botella es la {escenario[0]}."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Máquina A", "Máquina B", "Embalaje", "Estación 1", "Estación 2", "Estación 3", "Corte", "Pegado", "Secado"]

explicacion: |
  El cuello de botella es la restricción que determina la capacidad máxima del sistema. En cualquier proceso en serie, el flujo está limitado por la etapa con menor capacidad (la más lenta).
```

### 2 — Identificación de causas raíz
```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar_causas_y_restricciones"
  nivel: "basico"
  tags: ["causa_raiz", "diagnostico"]

variables:
  problema: uno_de([
    ["El servidor se cae cada vez que hay 100 usuarios simultáneos.", "Falta de memoria RAM"],
    ["Las ventas bajaron un 50% tras el cambio de diseño de la web.", "Interfaz de usuario confusa"],
    ["El motor se calienta después de 2 horas de uso continuo.", "Sistema de refrigeración insuficiente"]
  ])

enunciado: "Si el problema detectado es '{problema[0]}', la causa raíz más probable es: ___."

respuesta: problema[1]
tipo: completar
respuestas_validas: ["Falta de memoria RAM", "Interfaz de usuario confusa", "Sistema de refrigeración insuficiente"]

explicacion: |
  Para resolver un problema, primero debemos distinguir entre el síntoma (el servidor se cae) y la causa raíz (falta de memoria). Resolver el síntoma sin atacar la causa no soluciona el problema a largo plazo.
```

### 3 — Restricciones de presupuesto
```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar_causas_y_restricciones"
  nivel: "basico"
  tags: ["restricciones", "presupuesto"]

variables:
  caso: uno_de([
    [1000, 800],
    [500, 600],
    [2000, 1500]
  ])

enunciado: "Se propone una solución que cuesta {caso[0]} unidades, pero el presupuesto máximo disponible es de {caso[1]} unidades. ¿Es la solución viable bajo la restricción presupuestaria actual?"

respuesta: caso[0] <= caso[1]
tipo: vf

explicacion: |
  Una restricción es un límite impuesto que la solución debe respetar. Si el costo excede el presupuesto, la solución es inviable aunque sea técnicamente perfecta.
```

### 4 — Secuencia de análisis de problemas
```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar_causas_y_restricciones"
  nivel: "intermedio"
  tags: ["metodologia", "orden"]

enunciado: "Ordene los pasos lógicos para realizar un análisis de causa-raíz efectivo:"

pasos:
  - "Identificar el síntoma o problema visible"
  - "Analizar las restricciones del entorno"
  - "Identificar la causa raíz mediante el método de los 5 porqués"
  - "Proponer y validar una solución"

respuesta: ["Identificar el síntoma o problema visible", "Analizar las restricciones del entorno", "Identificar la causa raíz mediante el método de los 5 porqués", "Proponer y validar una solución"]
tipo: ordenar
opciones_explicitas: ["Identificar el síntoma o problema visible", "Analizar las restricciones del entorno", "Identificar la causa raíz mediante el método de los 5 porqués", "Proponer y validar una solución"]

explicacion: |
  El orden lógico requiere primero entender qué está pasando (síntoma), qué nos impide actuar (restricciones), por qué está pasando (causa) y cómo arreglarlo (solución).
```

### 5 — Impacto de las restricciones
```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar_causas_y_restricciones"
  nivel: "avanzado"
  tags: ["restricciones", "optimización"]

variables:
  escenario: uno_de([
    ["optimizar el tiempo de entrega", "reducir costos"],
    ["aumentar la calidad del producto", "reducir el uso de materiales"],
    ["expandir el mercado", "minimizar la inversión inicial"]
  ])

enunciado: "Si el objetivo principal es {escenario[0]}, pero tenemos una restricción de presupuesto estricta, la solución óptima probablemente deba enfocarse en: ___."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["optimizar el tiempo de entrega", "reducir costos", "aumentar la calidad del producto", "reducir el uso de materiales", "expandir el mercado", "minimizar la inversión inicial"]

explicacion: |
  Las restricciones obligan a realizar "trade-offs" (compromisos). Si el dinero es limitado, la prioridad de la solución debe ser la eficiencia en costos para poder alcanzar el objetivo principal.
```