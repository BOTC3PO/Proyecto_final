### 1 — El propósito del prototipado
```
metadata:
  materia: "ingenieria"
  tema: "prototipado_conceptos"
  nivel: "basico"
  tags: ["definicion", "metodologia"]

respuesta: "validar"
tipo: mc
opciones_explicitas: ["validar", "finalizar", "producir", "comercializar"]

enunciado: "Un prototipo es una versión preliminar y simplificada de una solución cuyo objetivo principal es _______ ideas antes de comprometer recursos en la versión final."

explicacion: |
  El prototipado permite fallar rápido y barato. Al probar una idea mediante un prototipo, se busca validar si la solución propuesta resuelve el problema antes de pasar a la fase de producción masiva.
```

### 2 — Ciclo de desarrollo de un prototipo
```
metadata:
  materia: "ingenieria"
  tema: "ciclo_vida_prototipo"
  nivel: "intermedio"
  tags: ["pasos", "metodologia"]

variables:
  pasos_orden: ["Identificar necesidad", "Construir prototipo", "Testear con usuarios", "Iterar diseño"]

respuesta: ["Identificar necesidad", "Construir prototipo", "Testear con usuarios", "Iterar diseño"]
tipo: ordenar
opciones_explicitas: ["Identificar necesidad", "Construir prototipo", "Testear con usuarios", "Iterar diseño"]

enunciado: "Ordene cronológicamente las etapas de un proceso de prototipado iterativo para asegurar la mejora continua del producto."

explicacion: |
  El proceso comienza con la identificación de la necesidad, seguido de la construcción de una versión mínima, la validación con el usuario real y, finalmente, la iteración basada en el feedback obtenido.
```

### 3 — Evaluación de fidelidad
```
metadata:
  materia: "ingenieria"
  tema: "fidelidad_prototipo"
  nivel: "intermedio"
  tags: ["fidelidad", "low_fi"]

respuesta: falso
tipo: vf

enunciado: "Un prototipo de baja fidelidad (low-fidelity) tiene como característica principal presentar un aspecto visual y funcional muy cercano al producto final real."

explicacion: |
  Falso. Los prototipos de baja fidelidad (como bocetos en papel) son rápidos y económicos, pero carecen de realismo visual. Los de alta fidelidad son los que se acercan a la versión final.
```

### 4 — Análisis de costos de error
```
metadata:
  materia: "ingenieria"
  tema: "gestion_riesgo"
  nivel: "avanzado"
  tags: ["costos", "riesgo"]

variables:
  escenario: [
    ["detectar error en prototipo", "10"],
    ["detectar error en producción", "1000"]
  ]
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: input
tolerancia_abs: 0

enunciado: "Si el costo de corregir un error en fase de prototipado es de ${escenario[idx][0]} y en fase de producción es de ${escenario[idx][1]}, ¿cuál es la diferencia de costo (en unidades monetarias) entre ambos escenarios según el caso actual?"

pasos:
  - "Identificar el costo en prototipado: 10"
  - "Identificar el costo en producción: 1000"
  - "Calcular la diferencia: 1000 - 10 = 990"

explicacion: |
  La detección temprana de errores mediante prototipos reduce drásticamente los costos de ingeniería. En este caso, el error en producción es 100 veces más costoso que en la fase de prototipado.
```

### 5 — Identificación de componentes
```
metadata:
  materia: "ingenieria"
  tema: "componentes_prototipo"
  nivel: "basico"
  tags: ["elementos"]

respuesta: "funcionalidad"
tipo: completar
respuestas_validas: ["funcionalidad", "estetica", "marketing"]

enunciado: "En un prototipo de concepto (Proof of Concept), el enfoque principal no es la estética del producto, sino validar su _______ principal."

explicacion: |
  El Proof of Concept (PoC) busca demostrar que una idea es técnicamente viable. Por ello, se prioriza la funcionalidad básica sobre el diseño visual o el empaque.
```