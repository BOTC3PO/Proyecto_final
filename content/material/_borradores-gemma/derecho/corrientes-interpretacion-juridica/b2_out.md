### 1 — El dilema de la norma injusta
```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "basico"
  tags: ["iuspositivismo", "iusnaturalismo"]

respuesta: "iusnaturalismo"
tipo: mc
opciones_explicitas: ["iuspositivismo", "iusnaturalismo", "realismo_juridico"]

enunciado: "Un juez se encuentra ante una ley que, aunque es válida y fue promulgada correctamente por el legislador, considera que es profundamente inmoral y viola los derechos humanos fundamentales. Si el juez decide que no puede aplicarla porque el derecho debe basarse en principios morales universales superiores a la norma escrita, está adoptando una postura de ___."

explicacion: |
  El iusnaturalismo sostiene que el derecho positivo (la ley escrita) solo es válido si es conforme a la justicia o a principios morales naturales. Si la ley es injusta, no es derecho.
```

### 2 — El caso del juez y la práctica judicial
```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "intermedio"
  tags: ["realismo_juridico"]

variables:
  escenario: uno_de([["El juez decide basándose en la jurisprudencia predominante de su tribunal.", "El juez ignora la norma para seguir su propia convicción."], ["El juez decide basándose en la jurisprudencia predominante de su tribunal.", "El juez ignora la norma para seguir su propia convicción."]])

respuesta: scenario[0][0]
tipo: mc
opciones_explicitas: ["El juez decide basándose en la jurisprudencia predominante de su tribunal.", "El juez ignora la norma para seguir su propia convicción.", "El juez aplica la ley de forma mecánica sin considerar el contexto."]

enunciado: "Un estudioso del derecho observa que, ante una ley ambigua, los jueces de una ciudad siempre fallan a favor de las empresas locales para mantener la estabilidad económica. El estudioso concluye que el derecho no es la norma en el papel, sino la conducta de los jueces. El escenario donde se aplica esta visión es: {escenario}."

explicacion: |
  El realismo jurídico sostiene que el derecho es lo que los jueces hacen en la práctica, desplazando la importancia de la norma abstracta por la realidad de la función judicial.
```

### 3 — La validez de la norma escrita
```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "basico"
  tags: ["iuspositivismo"]

respuesta: verdadero
tipo: vf

enunciado: "Desde la perspectiva del iuspositivismo estricto, la validez de una norma jurídica depende de su proceso de creación y su vigencia, independientemente de si su contenido es moral o inmoral."

explicacion: |
  Para el iuspositivismo, existe una separación conceptual entre el derecho y la moral. La validez es una cuestión de hechos (si fue dictada por la autoridad competente) y no de valores.
```

### 4 — Evolución de la interpretación
```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "intermedio"
  tags: ["metodologia"]

respuesta: ["Identificar la norma escrita", "Analizar la moralidad de la norma", "Decidir la aplicación según principios superiores"]
tipo: ordenar

opciones_explicitas: ["Identificar la norma escrita", "Analizar la moralidad de la norma", "Decidir la aplicación según principios superiores"]

enunciado: "Un abogado que sigue la corriente del iusnaturalismo para impugnar una ley injusta debería seguir este orden de razonamiento:"

explicacion: |
  El iusnaturalista primero reconoce la norma positiva, luego la confronta con un sistema de valores morales superiores y finalmente concluye que la norma no debe aplicarse por ser contraria a la justicia.
```

### 5 — El vacío legal y la realidad
```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "avanzado"
  tags: ["realismo_juridico"]

variables:
  caso: uno_de([[["El juez decide basándose en la jurisprudencia predominante de su tribunal.", "El juez ignora la norma para seguir su propia convicción."], ["El juez decide basándose en la jurisprudencia predominante de su tribunal.", "El juez ignora la norma para seguir su propia convicción."]])

respuesta: "El derecho es la acción judicial"
tipo: completar
respuestas_validas: ["El derecho es la acción judicial"]

enunciado: "En un escenario de realismo jurídico, si un abogado quiere saber cómo se aplicará una nueva ley, no leerá solo el código, sino que estudiará cómo actúan los jueces. Para esta corriente, el derecho es ___."

explicacion: |
  El realismo jurídico desplaza el foco del texto legal hacia la conducta del funcionario judicial, considerando que la norma es solo una predicción de lo que el juez hará.
```