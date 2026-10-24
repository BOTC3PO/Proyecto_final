### 1 — Modelo vs. Realidad
```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "basico"
  tags: ["epistemologia", "metodologia"]

respuesta: "representacion"
tipo: "completar"
respuestas_validas: ["representacion", "representación"]

enunciado: "A diferencia de la realidad física completa, un modelo científico es una ___ simplificada de la misma que permite estudiar un fenómeno específico."

explicacion: |
  Un modelo no es la realidad, sino una abstracción o representación que selecciona solo las variables relevantes para un propósito determinado.
```

### 2 — Propósito de un modelo
```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "basico"
  tags: ["propiedades", "utilidad"]

variables:
  escenario: uno_de([
    ["predecir", "explicar"],
    ["describir", "observar"]
  ])

respuesta: escenario[0]
tipo: "mc"
opciones_explicitas: ["predecir", "describir", "observar", "repetir"]

enunciado: "Una de las funciones principales de un modelo científico es la capacidad de {escenario[1]} fenómenos futuros, diferenciándose de la simple observación pasiva."

explicacion: |
  Mientras que la observación describe lo que ocurre, el modelo busca capturar la lógica del sistema para poder predecir comportamientos futuros.
```

### 3 — Validez de un modelo
```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "intermedio"
  tags: ["falsacion", "metodologia"]

respuesta: falso
tipo: "vf"

enunciado: "Si un modelo científico es capaz de representar fielmente un fenómeno en un experimento controlado, esto significa que el modelo es una copia exacta de la realidad."

explicacion: |
  Falso. Todo modelo es, por definición, una simplificación. Si fuera una copia exacta, sería tan complejo como la realidad misma y perdería su utilidad predictiva.
```

### 4 — El proceso de modelado
```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "intermedio"
  tags: ["proceso", "metodologia"]

respuesta: ["Observación", "Construcción", "Validación", "Refinamiento"]
tipo: "ordenar"
opciones_explicitas: ["Observación", "Construcción", "Validación", "Refinamiento"]

enunciado: "Ordena las etapas lógicas para el desarrollo y uso de un modelo científico:"

explicacion: |
  El proceso comienza con la observación del fenómeno, sigue con la construcción del modelo, luego se valida contra la realidad y finalmente se refina si hay discrepancias.
```

### 5 — Modelos vs. Teorías
```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "avanzado"
  tags: ["epistemologia", "conceptos"]

variables:
  caso: uno_de([
    ["el modelo es una herramienta para aplicar una teoría", "la teoría es un modelo simplificado"],
    ["el modelo es una generalización, la teoría es una herramienta", "la teoría es una generalización, el modelo es una herramienta"]
  ])

respuesta: caso[0]
tipo: "mc"
opciones_explicitas: ["el modelo es una herramienta para aplicar una teoría", "la teoría es un modelo simplificado", "son conceptos idénticos", "el modelo es una ley universal"]

enunciado: "En el marco del método científico, se distingue que {caso[1]}."

explicacion: |
  La teoría es un marco explicativo general, mientras que el modelo es una representación específica y simplificada que permite operacionalizar esa teoría para estudiar un fenómeno concreto.
```