### 1 — El mito de la única solución
```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar_alternativas"
  nivel: "basico"
  tags: ["sesgos", "toma_de_decisiones"]

respuesta: falso
tipo: vf

enunciado: "Ante un problema complejo, la primera solución que aparece en la mente es necesariamente la única vía válida para resolverlo."

explicacion: |
  El pensamiento divergente es clave. La primera idea suele ser un sesgo de disponibilidad; reconocer que existen múltiples caminos es el primer paso para una resolución efectiva.
```

### 2 — Selección de rutas
```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar_alternativas"
  nivel: "intermedio"
  tags: ["estrategia", "analisis"]

variables:
  escenario: uno_de([
    ["Camino A (Rápido pero costoso)", "Camino B (Lento pero económico)"],
    ["Opción 1 (Tecnológica)", "Opción 2 (Manual)"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Camino A (Rápido pero costoso)", "Camino B (Lento pero económico)", "No hay otra opción"]

enunciado: "Si el objetivo principal es minimizar el gasto de recursos y el tiempo no es una restricción crítica, ¿cuál de las alternativas presentadas en el escenario es la más adecuada?"

pasos:
  - "Analizar el objetivo: minimizar gasto."
  - "Evaluar el escenario: comparar costo vs tiempo."

explicacion: |
  Identificar alternativas requiere alinear la opción elegida con el objetivo prioritario. En este caso, el ahorro de recursos invalida la opción rápida pero costosa.
```

### 3 — El proceso de diversificación
```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar_alternativas"
  nivel: "basico"
  tags: ["metodologia"]

respuesta: ["Definir el problema", "Generar múltiples alternativas", "Evaluar opciones", "Elegir la mejor"]
tipo: ordenar

opciones_explicitas: ["Definir el problema", "Generar múltiples alternativas", "Evaluar opciones", "Elegir la mejor"]

enunciado: "Ordena los pasos lógicos para asegurar que no se esté ignorando ninguna alternativa posible durante la resolución de un conflicto."

explicacion: |
  Si saltas directamente a 'Elegir la mejor' sin haber pasado por 'Generar múltiples alternativas', estás limitando tu capacidad de resolución y cayendo en una solución prematura.
```

### 4 — La trampa de la dicotomía
```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar_alternativas"
  nivel: "intermedio"
  tags: ["sesgos", "pensamiento_critico"]

respuesta: "tercera_via"
tipo: completar

opciones_explicitas: ["primera_via", "segunda_via", "tercera_via"]

enunciado: "Cuando un problema se presenta como una elección entre 'A' o 'B', pero la resolución óptima requiere integrar elementos de ambos o buscar una opción 'C', estamos ignorando la ___."

explicacion: |
  La falsa dicotomía es un error cognitivo donde se asume que solo existen dos opciones. El pensamiento creativo busca la 'tercera vía' o alternativas híbridas.
```

### 5 — Evaluación de impacto
```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar_alternativas"
  nivel: "avanzado"
  tags: ["analisis_riesgo", "decision"]

variables:
  caso: uno_de([
    ["Alternativa A", "Alternativa B"],
    ["Plan de contingencia 1", "Plan de contingencia 2"]
  ])

respuesta: "alternativa_con_mas_riesgo"
tipo: mc
opciones_explicitas: ["alternativa_con_mas_riesgo", "alternativa_sin_riesgo", "no_es_una_alternativa"]

enunciado: "Al comparar {caso[0]} con {caso[1]}, si detectamos que una de ellas presenta una probabilidad de falla mayor pero un beneficio superior, ¿cómo debemos clasificarla en nuestro análisis de alternativas?"

explicacion: |
  Identificar alternativas no es solo listarlas, es entender su naturaleza. Reconocer el riesgo es parte esencial de la evaluación de la gama de opciones disponibles.
```