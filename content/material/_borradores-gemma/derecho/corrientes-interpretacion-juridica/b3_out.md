### 1 — El origen de la validez jurídica
```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "basico"
  tags: ["iuspositivismo", "iusnaturalismo"]

respuesta: "iusnaturalismo"
tipo: completar
respuestas_validas: ["iusnaturalismo"]

enunciado: "La corriente que sostiene que la validez de una norma jurídica depende de su conformidad con principios morales o derechos universales superiores, independientemente de si ha sido promulgada por el Estado, es el ___."

explicacion: |
  El iusnaturalismo postula la existencia de un derecho natural superior al derecho positivo, basado en la moral o la razón.
```

### 2 — La separación entre moral y derecho
```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "intermedio"
  tags: ["iuspositivismo"]

respuesta: falso
tipo: vf

enunciado: "Para el iuspositivismo extremo, la validez de una norma jurídica está intrínsecamente condicionada a su contenido moral; es decir, una ley injusta no es ley."

explicacion: |
  Falso. El iuspositivismo sostiene la tesis de la separación: la validez de una norma depende de su origen formal y su vigencia, no de su contenido moral.
```

### 3 — El papel del juez en la aplicación del derecho
```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "intermedio"
  tags: ["realismo_juridico"]

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["El derecho es un conjunto de normas abstractas contenidas en los códigos.", "El derecho es la predicción de lo que los jueces decidirán en la práctica."]

enunciado: "Según la perspectiva del {datos[idx][0]}, el derecho no es un sistema lógico de normas, sino un fenómeno social basado en la conducta judicial."
datos: [
  ["realismo jurídico", "El derecho es la predicción de lo que los jueces decidirán en la práctica."],
  ["formalismo jurídico", "El derecho es un conjunto de normas abstractas contenidas en los códigos."]
]

explicacion: |
  El realismo jurídico desplaza el foco de la norma escrita a la conducta real de los tribunales y los jueces.
```

### 4 — Confusión de conceptos: Iusnaturalismo vs. Iuspositivismo
```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "avanzado"
  tags: ["comparativa"]

respuesta: "El iuspositivismo busca la certeza jurídica mediante la norma escrita, mientras que el iusnaturalismo busca la justicia mediante la moral."
tipo: completar
respuestas_validas: ["El iuspositivismo busca la certeza jurídica mediante la norma escrita, mientras que el iusnaturalismo busca la justicia mediante la moral."]

enunciado: "Una distinción fundamental es que ___."

explicacion: |
  El positivismo prioriza la seguridad jurídica y la estructura formal, mientras que el iusnaturalismo prioriza la justicia material.
```

### 5 — Evolución del pensamiento jurídico
```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "basico"
  tags: ["ordenar"]

respuesta: ["Iusnaturalismo", "Iuspositivismo", "Realismo jurídico"]
tipo: ordenar
opciones_explicitas: ["Iusnaturalismo", "Iuspositivismo", "Realismo jurídico"]

enunciado: "Ordene estas corrientes según su enfoque principal: de la búsqueda de la justicia moral (primero) a la búsqueda de la eficacia judicial (último)."

explicacion: |
  El iusnaturalismo se centra en la moral (justicia), el iuspositivismo en la norma (ley escrita) y el realismo en la aplicación (hechos judiciales).
```