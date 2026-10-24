### 1 — Corrientes de la interpretación jurídica
```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "basico"
  tags: ["iuspositivismo", "iusnaturalismo", "realismo"]

respuesta: "iusnaturalismo"
tipo: "completar"
respuestas_validas: ["iusnaturalismo"]

enunciado: "A diferencia del iuspositivismo, que sostiene que la validez de una norma depende exclusivamente de su origen formal y su vigencia, el ___ sostiene que existe un conjunto de principios morales universales superiores al derecho positivo."

explicacion: |
  El iusnaturalismo postula la existencia de un derecho natural (basado en la moral o la razón) que sirve como criterio de validez para el derecho creado por el hombre.
```

### 2 — El rol del juez en el Realismo Jurídico
```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "intermedio"
  tags: ["realismo_juridico", "interpretacion"]

opciones_explicitas: ["El derecho es un conjunto de normas abstractas e ideales.", "El derecho es lo que los jueces deciden en la práctica.", "El derecho es la voluntad del legislador plasmada en códigos."]

respuesta: "El derecho es lo que los jueces deciden en la práctica."
tipo: "mc"

enunciado: "Desde la perspectiva del realismo jurídico, ¿cuál es la característica que distingue su visión del derecho frente al formalismo iuspositivista?"

explicacion: |
  Para el realismo jurídico, el derecho no es un sistema de normas lógicas, sino una conducta social observada; por tanto, el derecho es la actividad judicial efectiva.
```

### 3 — Validez vs. Justicia
```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "basico"
  tags: ["iuspositivismo", "moral"]

respuesta: verdadero
tipo: "vf"

enunciado: "Para el iuspositivismo puro, la validez de una norma jurídica no depende de su contenido moral, sino de su procedencia conforme a los procedimientos establecidos por el sistema."

explicacion: |
  El iuspositivismo establece una separación conceptual entre el derecho (lo que es) y la moral (lo que debería ser).
```

### 4 — Evolución del pensamiento jurídico
```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "intermedio"
  tags: ["ordenar", "corrientes"]

opciones_explicitas: ["Iusnaturalismo (Derecho basado en la moral)", "Iuspositivismo (Derecho basado en la norma escrita)", "Realismo Jurídico (Derecho basado en la eficacia judicial)"]

respuesta: ["Iusnaturalismo (Derecho basado en la moral)", "Iuspositivismo (Derecho basado en la norma escrita)", "Realismo Jurídico (Derecho basado en la eficacia judicial)"]
tipo: "ordenar"

enunciado: "Ordene cronológicamente la evolución predominante de las corrientes de pensamiento jurídico en la historia del derecho occidental:"

explicacion: |
  Históricamente, el pensamiento transitó desde la búsqueda de leyes naturales universales, pasando por la codificación y formalismo del positivismo, hasta llegar al enfoque empírico del realismo.
```

### 5 — Diferencias de enfoque
```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "avanzado"
  tags: ["comparacion", "metodologia"]

variables:
  idx: uno_de([0, 1])
  escenario: [
    ["El iuspositivismo se centra en la norma escrita.", "El realismo jurídico se centra en la conducta del juez."],
    ["El iusnaturalismo se centra en la justicia universal.", "El iuspositivismo se centra en la validez formal."]
  ]

respuesta: escenario[idx][1]
tipo: "mc"
opciones_explicitas: ["Escenario A", "Escenario B"]

enunciado: "Identifique la pareja de conceptos que define correctamente el contraste de enfoque entre las corrientes mencionadas en el {escenario[idx][0]}."

explicacion: |
  El ejercicio requiere identificar cuál de las dos descripciones de la variable `escenario` es correcta según la teoría jurídica.
```