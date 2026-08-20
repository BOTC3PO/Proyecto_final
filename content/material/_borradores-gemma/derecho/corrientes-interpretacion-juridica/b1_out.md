### 1 — Corriente del derecho natural
```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "basico"
  tags: ["iusnaturalismo", "teoria_del_derecho"]

respuesta: verdadero
tipo: vf

enunciado: "El iusnaturalismo sostiene que existen principios morales universales e inmutables que son superiores al derecho positivo creado por el hombre."

explicacion: |
  El iusnaturalismo postula la existencia de un derecho natural (jusnaturalismo) basado en la razón o la naturaleza humana, que sirve como parámetro de validez para las leyes humanas.
```

### 2 — La validez de la norma
```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "basico"
  tags: ["iuspositivismo", "norma"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[ "una norma es válida si ha sido creada por la autoridad competente siguiendo el procedimiento legal", "la validez de una norma depende de su concordancia con la moral", "la validez de una norma depende de su concordancia con la moral", "una norma es válida si ha sido creada por la autoridad competente siguiendo el procedimiento legal" ]]

respuesta: escenarios[escenario_idx][0]
tipo: mc
opciones_explicitas: ["una norma es válida si ha sido creada por la autoridad competente siguiendo el procedimiento legal", "la validez de una norma depende de su concordancia con la moral"]

enunciado: "Desde la perspectiva del iuspositivismo, {escenarios[escenario_idx][0]}"

explicacion: |
  Para el iuspositivismo, la validez de una norma es una cuestión de forma y procedencia (derecho puesto), separando la validez jurídica de la moralidad.
```

### 3 — El rol de los jueces
```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "intermedio"
  tags: ["realismo_juridico", "jueces"]

respuesta: "lo que los jueces hacen en la práctica"
tipo: completar
respuestas_validas: ["lo que los jueces hacen en la práctica", "la conducta judicial efectiva"]

enunciado: "Para el realismo jurídico, el derecho no es un conjunto de normas abstractas, sino ___."

explicacion: |
  El realismo jurídico desplaza el foco de la norma escrita hacia la conducta de los tribunales y la eficacia de las decisiones judiciales en la realidad social.
```

### 4 — Relación entre derecho y moral
```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "basico"
  tags: ["iuspositivismo", "iusnaturalismo"]

respuesta: falso
tipo: vf

enunciado: "El iuspositivismo defiende la tesis de la conexión necesaria entre el derecho y la moral."

explicacion: |
  Al contrario, el iuspositivismo sostiene la tesis de la separación, argumentando que la existencia de una norma no depende de su contenido moral.
```

### 5 — Evolución del pensamiento jurídico
```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "intermedio"
  tags: ["teoria_del_derecho", "ordenar"]

respuesta: ["Derecho Natural", "Derecho Positivo", "Realismo Jurídico"]
tipo: ordenar
opciones_explicitas: ["Derecho Natural", "Derecho Positivo", "Realismo Jurídico"]

enunciado: "Ordene estas corrientes según su enfoque principal: de la búsqueda de principios universales hacia el enfoque en la eficacia de la decisión judicial."

explicacion: |
  El orden solicitado parte del Iusnaturalismo (principios universales), pasa por el Iuspositivismo (la norma escrita) y llega al Realismo Jurídico (la práctica judicial).
```