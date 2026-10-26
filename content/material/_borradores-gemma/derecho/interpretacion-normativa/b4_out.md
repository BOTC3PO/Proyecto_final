### 1 — Interpretación vs. Integración
```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["teoria_del_derecho", "interpretacion"]

respuesta: "integración"
tipo: completar
respuestas_validas: ["integración", "integracion"]

enunciado: "Mientras que la interpretación normativa busca determinar el sentido y alcance de una norma existente, la ___ se utiliza cuando existen lagunas legales para llenar los vacíos del ordenamiento."

explicacion: |
  La interpretación se aplica cuando la norma está presente pero su sentido es ambiguo. La integración se aplica cuando no hay norma aplicable al caso (laguna).
```

### 2 — Métodos de interpretación
```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "basico"
  tags: ["metodos", "hermeneutica"]

variables:
  caso_idx: uno_de([0,1])
  escenarios: [["gramatical", "literal"], ["teleologica", "finalidad"]]

respuesta: uno_de(escenarios[caso_idx])
tipo: mc
opciones_explicitas: ["gramatical", "teleologica", "sistemática", "histórica"]

enunciado: "Si un juez decide interpretar una norma centrándose exclusivamente en el significado de las palabras utilizadas en el texto legal, está aplicando un método de tipo {escenarios[caso_idx]}."

explicacion: |
  El método gramatical o literal se limita al análisis semántico de las palabras del texto.
```

### 3 — Verdad jurídica vs. Verdad real
```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "avanzado"
  tags: ["verdad", "proceso_judicial"]

respuesta: falso

tipo: vf

enunciado: "En el proceso de interpretación normativa para la aplicación de la ley, el juez debe buscar siempre la 'verdad real' (lo que ocurrió exactamente en la realidad física), incluso si esta contradice las pruebas obtenidas legalmente."

explicacion: |
  En derecho, la interpretación se realiza sobre la 'verdad jurídica' o procesal, que es la reconstrucción de los hechos basada en las pruebas válidas dentro del proceso.
```

### 4 — Elementos de la interpretación
```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["elementos", "hermeneutica"]

respuesta: "sistemática"
tipo: completar
respuestas_validas: ["sistemática", "sistematica"]

enunciado: "Cuando la interpretación no se limita a la norma aislada, sino que busca su sentido analizando su relación con el resto del ordenamiento jurídico, se está utilizando una interpretación ___."

explicacion: |
  La interpretación sistemática considera la norma como parte de un todo coherente y no como un elemento aislado.
```

### 5 — Jerarquía de criterios
```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "avanzado"
  tags: ["jerarquia", "criterios"]

respuesta: ["Constitución", "Ley", "Reglamento", "Sentencia"]
tipo: ordenar

opciones_explicitas: ["Constitución", "Ley", "Reglamento", "Sentencia"]

enunciado: "Ordene los siguientes ordenamientos de mayor a menor jerarquía para determinar el alcance de una norma en un conflicto de leyes:"

explicacion: |
  La jerarquía normativa (Pirámide de Kelsen) establece que la Constitución es la norma suprema, seguida por las leyes, luego los reglamentos y finalmente los actos administrativos o sentencias en su aplicación específica.
```