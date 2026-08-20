### 1 — El rol de la sentencia
```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "basico"
  tags: ["sentencia", "juez", "derecho_procesal"]

variables:
  escenario: uno_de([["Juan demanda a Pedro por una deuda de $1000", "Pedro debe pagar $1000"], ["María demanda a Luis por daños en un auto", "Luis debe reparar el auto"], ["Un vecino demanda a otro por ruido excesivo", "Se debe ordenar el cese de ruidos"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["La decisión del juez", "El contrato entre las partes", "La demanda inicial", "La mediación previa"]

enunciado: "En el caso donde {escenario[idx][0]}, la decisión final del juez que pone fin al conflicto se denomina:"

explicacion: |
  La sentencia es el acto procesal mediante el cual el juez resuelve la cuestión sometida a su decisión, poniendo fin al proceso.
```

### 2 — La estructura de la sentencia
```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "intermedio"
  tags: ["estructura", "sentencia", "vistos", "fallo"]

variables:
  orden_partes: ["Vistos", "Considerandos", "Fallo"]
  idx: 0

respuesta: ["Vistos", "Considerandos", "Fallo"]
tipo: ordenar
opciones_explicitas: ["Vistos", "Considerandos", "Fallo"]

enunciado: "Ordene cronológicamente las partes de una sentencia judicial estándar:"

pasos:
  - "Identificación de los antecedentes y partes (Vistos)."
  - "Análisis de los hechos y aplicación de la norma (Considerandos)."
  - "La decisión final y resolución del conflicto (Fallo)."

explicacion: |
  Una sentencia bien estructurada comienza con los 'Vistos' (antecedentes), sigue con los 'Considerandos' (razonamiento jurídico) y culmina con el 'Fallo' (la decisión).
```

### 3 — El principio de congruencia
```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "avanzado"
  tags: ["congruencia", "principio_legal", "juez"]

variables:
  caso: uno_de([["El actor pide daños y perjuicios", "El juez otorga solo daños y perjuicios"], ["La actora pide el desalojo", "El juez ordena el desalojo"], ["Se reclama una deuda de $500", "El juez condena al pago de $500"]])
  idx: uno_de([0, 1, 2])

respuesta: verdadero

tipo: vf

enunciado: "Si en el caso donde {caso[idx][0]}, el juez dicta una sentencia que coincide exactamente con lo pedido por las partes, se ha respetado el principio de congruencia."

explicacion: |
  El principio de congruencia exige que el juez debe resolver conforme a las pretensiones de las partes, no pudiendo dar más ni menos de lo solicitado (ultra o extra petita).
```

### 4 — Elementos de la sentencia
```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "basico"
  tags: ["elementos", "sentencia", "fundamentación"]

respuesta: ["fundamentación", "resolución"]
tipo: completar
respuestas_validas: ["fundamentación", "resolución"]

enunciado: "Toda sentencia debe contener una ___ (donde se explica el porqué de la decisión) y una ___ (donde se dicta el mandato final)."

explicacion: |
  La fundamentación es la parte donde el juez aplica la ley a los hechos, y la resolución es la parte dispositiva donde se decide el conflicto.
```

### 5 — El carácter de la sentencia
```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "intermedio"
  tags: ["cosa_juzgada", "sentencia", "derecho"]

variables:
  tipo_sentencia: uno_de([["definitiva", "pasa a cosa juzgada"], ["interlocutoria", "resuelve una cuestión accesoria"]])
  idx: uno_de([0, 1])

respuesta: tipo_sentencia[idx][1]
tipo: mc
opciones_explicitas: ["pasa a cosa juzgada", "resuelve una cuestión accesoria", "es solo una opinión", "no tiene validez"]

enunciado: "Si la sentencia es de carácter {tipo_sentencia[idx][0]}, entonces se dice que ___."

explicacion: |
  La sentencia definitiva es la que tiene autoridad de cosa juzgada, impidiendo que el mismo conflicto sea juzgado nuevamente.
```