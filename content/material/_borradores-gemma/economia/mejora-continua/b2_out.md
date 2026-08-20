### 1 — Concepto de Mejora Continua
```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["procesos", "eficiencia"]

respuesta: "incremental"
tipo: "completar"
respuestas_validas: ["incremental", "gradual", "constante"]

enunciado: "La mejora continua se define como un enfoque de optimización que busca cambios de carácter ___ en lugar de realizar una única transformación radical."

explicacion: |
  La mejora continua (Kaizen) se basa en pequeños cambios constantes que, acumulados, generan grandes resultados. No se trata de un evento aislado, sino de un proceso sostenido.
```

### 2 — El Ciclo PHVA
```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["metodologia", "phva"]

variables:
  pasos_phva: ["Planificar", "Hacer", "Verificar", "Actuar"]

respuesta: "Planificar"
tipo: "mc"
opciones_explicitas: ["Planificar", "Hacer", "Verificar", "Actuar"]

enunciado: "En un proceso de optimización de una línea de ensamblaje, el primer paso del ciclo PHVA consiste en establecer los objetivos y los procesos necesarios para lograr resultados. Este paso es: {pasos_phva[0]}."

explicacion: |
  El ciclo PHVA (Planificar, Hacer, Verificar, Actuar) es la base de la mejora continua. Siempre se debe comenzar con la fase de planificación para establecer la hoja de ruta.
```

### 3 — Análisis de Variabilidad
```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["calidad", "variabilidad"]

respuesta: verdadero
tipo: "vf"

enunciado: "¿Es correcto afirmar que la mejora continua busca reducir la variabilidad de los procesos para asegurar la calidad constante?"

explicacion: |
  La variabilidad es el enemigo de la eficiencia. Al estandarizar y mejorar procesos, se busca que los resultados sean predecibles y constantes.
```

### 4 — Caso de Optimización de Tiempos
```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "avanzado"
  tags: ["calculo", "eficiencia"]

variables:
  escenario: [
    ["Tiempo actual: 100 min, Tiempo meta: 85 min", "15"],
    ["Tiempo actual: 50 min, Tiempo meta: 48 min", "2"],
    ["Tiempo actual: 200 min, Tiempo meta: 180 min", "20"]
  ]
  idx: uno_de([0, 1, 2])

respuesta: "escenario[idx][1]"
tipo: "input"
tolerancia_abs: 0

enunciado: "Una empresa de logística aplica mejora continua. Si su tiempo de despacho actual es de {escenario[idx][0]}, ¿cuántos minutos de reducción debe lograr para alcanzar su meta establecida?"

pasos:
  - "Identificar el tiempo actual."
  - "Identificar el tiempo meta."
  - "Calcular la diferencia: Actual - Meta."

explicacion: |
  La mejora continua se mide a menudo a través de la reducción de tiempos o desperdicios. En este caso, la diferencia entre el estado actual y el objetivo representa la mejora buscada.
```

### 5 — Secuencia de Implementación
```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["metodologia", "orden"]

respuesta: ["Planificar", "Hacer", "Verificar", "Actuar"]
tipo: "ordenar"
opciones_explicitas: ["Planificar", "Hacer", "Verificar", "Actuar"]

enunciado: "Para implementar un programa de mejora continua en un departamento de atención al cliente, se deben seguir los pasos del ciclo de Deming en el siguiente orden lógico:"

explicacion: |
  El orden correcto es: 1. Planificar (diseñar la mejora), 2. Hacer (implementar el cambio), 3. Verificar (medir resultados) y 4. Actuar (estandarizar si fue exitoso).
```