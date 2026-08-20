### 1 — Argumento vs. Opinión
```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "basico"
  tags: ["fundamentos", "logica"]

respuesta: "argumento"
tipo: "completar"
respuestas_validas: ["argumento"]

enunciado: "Mientras que una opinión es una manifestación subjetiva de un juicio de valor, un ___ se construye mediante el uso de premisas normativas y hechos probados para llegar a una conclusión jurídica."

explicacion: |
  La diferencia fundamental radica en la fundamentación. La opinión no requiere de una estructura lógica ni de la aplicación de una norma, mientras que el argumento jurídico debe derivar necesariamente de la norma aplicada al caso concreto.
```

### 2 — Silogismo Jurídico
```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "intermedio"
  tags: ["silogismo", "estructura"]

variables:
  escenario: uno_de([
    ["La norma prohíbe conducir ebrio", "El sujeto conducía con 0.8 g/l", "El sujeto es culpable"],
    ["La ley otorga propiedad a quien compra", "Juan compró la casa con escritura", "Juan es el dueño"],
    ["El contrato exige firma para validez", "El contrato no tiene firma", "El contrato es nulo"]
  ])

respuesta: "premisa_mayor"
tipo: "mc"
opciones_explicitas: ["premisa_mayor", "premisa_menor", "conclusión"]

enunciado: "En el silogismo jurídico aplicado al escenario {escenario[0]}, la afirmación '{escenario[0]}' representa la: "

explicacion: |
  La estructura del silogismo jurídico consta de: 1) Premisa mayor (la norma), 2) Premisa menor (el hecho/subsunción) y 3) Conclusión (la consecuencia jurídica).
```

### 3 — Precedente vs. Doctrina
```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "avanzado"
  tags: ["precedente", "doctrina"]

respuesta: verdadero
tipo: "vf"

enunciado: "A diferencia de la doctrina (que es la opinión de los estudiosos del derecho), el precedente judicial es una decisión vinculante que establece una regla de interpretación para casos futuros similares."

explicacion: |
  La doctrina no tiene fuerza obligatoria por sí misma, mientras que el precedente (dependiendo del sistema jurídico, como el Common Law o la jurisprudencia vinculante en Civil Law) es una fuente de derecho que debe ser respetada por los jueces.
```

### 4 — Argumento Analógico vs. A Contrario
```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "avanzado"
  tags: ["interpretacion", "logica"]

respuesta: "a_contrario"
tipo: "mc"
opciones_explicitas: ["analogia", "a_contrario", "a_significatio"]

enunciado: "Si un abogado sostiene que, dado que la norma prohíbe el ingreso de 'perros' a un recinto, se entiende que también se prohíbe el ingreso de 'gatos' por una similitud de naturaleza, está usando analogía. Si, por el contrario, sostiene que como la norma dice 'perros', se entiende que se permite todo lo que NO sea un perro, está utilizando el argumento: "

explicacion: |
  El argumento 'a contrario' establece que la norma es excluyente: si la ley regula una situación específica, se entiende que excluye a todas aquellas que no encajen en esa descripción.
```

### 5 — Pasos de la Subsunción Jurídica
```
metadata:
  materia: "derecho"
  tema: "argumentacion_juridica"
  nivel: "intermedio"
  tags: ["subsuncion", "metodologia"]

respuesta: ["enunciado_normativo", "enunciado_fáctico", "subsuncion", "conclusión"]
tipo: "ordenar"
opciones_explicitas: ["enunciado_normativo", "enunciado_fáctico", "subsunción", "conclusión"]

enunciado: "Para construir un argumento sólido mediante la técnica de la subsunción, el jurista debe seguir este orden lógico de elementos:"

explicacion: |
  El proceso requiere primero identificar la norma (premisa mayor), luego los hechos probados (premisa menor), realizar el encuadre o subsunción (verificar si el hecho encaja en la norma) y finalmente dictar la consecuencia jurídica.
```