### 1 — La estructura del silogismo jurídico
```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "intermedio"
  tags: ["silogismo", "logica_juridica"]

respuesta: "premisa_mayor"
tipo: completar
respuestas_validas: ["premisa_mayor", "premisa_menor", "conclusión"]

enunciado: "En un silogismo jurídico, la norma general o ley aplicable se denomina ___."

explicacion: |
  El silogismo jurídico consta de tres partes: la premisa mayor (la norma), la premisa menor (el hecho probado) y la conclusión (la consecuencia jurídica resultante de aplicar la norma al hecho).
```

### 2 — Validez de la interpretación analógica
```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "avanzado"
  tags: ["analogia", "interpretacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Se aplica una norma de un contrato de compraventa a uno de permuta por similitud de objeto.", "falso"],
    ["Se aplica una norma de derecho penal para sancionar una conducta no prevista por analogia in malam partem.", "falso"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: vf

enunciado: "En el escenario donde {escenarios[escenario_idx][0]}, la aplicación analógica de la norma es jurídicamente válida para crear nuevas obligaciones."

explicacion: |
  La analogía es válida en derecho civil/administrativo para llenar lagunas, pero está prohibida en derecho penal cuando la interpretación es 'in malam partem' (perjudicial para el reo). En ambos casos presentados, la afirmación de validez es falsa según la doctrina general.
```

### 3 — Jerarquía en la argumentación
```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "basico"
  tags: ["jerarquia", "normas"]

respuesta: "Constitución Nacional"
tipo: mc
opciones_explicitas: ["Constitución Nacional", "Decreto Reglamentario", "Resolución Ministerial", "Contrato entre partes"]

enunciado: "Si un juez debe resolver una contradicción entre una norma de rango constitucional y un decreto administrativo, debe priorizar la ___."

explicacion: |
  De acuerdo al principio de jerarquía normativa (Pirámide de Kelsen), la Constitución es la norma suprema y prevalece sobre cualquier norma de inferior rango.
```

### 4 — Pasos para la construcción de un precedente
```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "intermedio"
  tags: ["precedente", "ratio_decidendi"]

respuesta: ["Identificación de los hechos relevantes", "Determinación de la ratio decidendi", "Extracción del principio jurídico", "Aplicación al caso actual"]
tipo: ordenar

opciones_explicitas: ["Identificación de los hechos relevantes", "Determinación de la ratio decidendi", "Extracción del principio jurídico", "Aplicación al caso actual", "Dictar sentencia final"]

enunciado: "Para utilizar un precedente judicial de forma sólida en un nuevo argumento, se debe seguir este orden lógico:"

explicacion: |
  Para aplicar un precedente no basta con citar la sentencia; se debe identificar primero los hechos (fáctico), luego el núcleo de la decisión (ratio decidendi), extraer la regla de derecho y finalmente aplicarla al nuevo caso.
```

### 5 — El peso de la prueba en la argumentación
```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "intermedio"
  tags: ["carga_de_la_prueba", "argumentacion"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["El demandado alega un hecho extintivo de la obligación.", "falso"],
    ["El actor afirma la existencia de un contrato verbal.", "verdadero"]
  ]

respuesta: casos[caso_idx][1]
tipo: vf

enunciado: "En el caso donde {casos[caso_idx][0]}, la carga de la prueba recae sobre el demandado (quien debe probar el hecho que afirma)."

explicacion: |
  Según la carga de la prueba, quien afirma un hecho debe probarlo. Sin embargo, si el demandado alega un hecho nuevo que extingue la obligación (ej. pago o prescripción), la carga de la prueba se traslada a él.
```