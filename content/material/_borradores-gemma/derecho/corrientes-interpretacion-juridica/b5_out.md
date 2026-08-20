### 1 — El origen de la norma
```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "basico"
  tags: ["iusnaturalismo", "iuspositivismo"]

variables:
  escenario: uno_de([["Un juez decide que una ley es injusta porque viola la dignidad humana y, por tanto, no es aplicable", "iusnaturalismo"], ["Un juez aplica una ley que considera moralmente cuestionable simplemente porque fue promulgada por la autoridad competente", "iuspositivismo"]])
  idx: uno_de([0, 1])

enunciado: "Si un jurista sostiene que el derecho debe basarse en principios morales universales y superiores a la ley escrita, estamos ante el..."

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["iusnaturalismo", "iuspositivismo", "realismo_juridico"]

explicacion: |
  El iusnaturalismo sostiene que existe un derecho natural superior al derecho positivo, basado en la moral y la razón.
```

### 2 — La validez de la norma
```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "intermedio"
  tags: ["iuspositivismo"]

variables:
  caso: uno_de([["La ley es válida porque cumple con el proceso legislativo, independientemente de su contenido moral", "Verdadero"], ["La validez de una norma depende de su conformidad con la moralidad social", "Falso"]])
  idx: uno_de([0, 1])

enunciado: "En el iuspositivismo estricto, la validez de una norma jurídica reside en su origen formal y no en su contenido ético."

respuesta: caso[idx][1]
tipo: vf

explicacion: |
  Para el iuspositivismo, la separación entre derecho y moral es fundamental para determinar la validez de la norma.
```

### 3 — El rol del juez
```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "avanzado"
  tags: ["realismo_juridico"]

variables:
  escenario: uno_de([["El derecho es el conjunto de normas escritas en el código", "normativismo"], ["El derecho es lo que los jueces deciden en sus sentencias", "realismo_juridico"]])
  idx: uno_de([0, 1])

enunciado: "Desde la perspectiva del realismo jurídico, el derecho se define como ___."

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas: ["lo que los jueces realmente hacen", "lo que los jueces deciden en sus sentencias"]

explicacion: |
  El realismo jurídico desplaza el foco de la norma escrita hacia la conducta y decisiones de los tribunales.
```

### 4 — Elementos del ordenamiento
```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "intermedio"
  tags: ["ordenar", "metodologia"]

enunciado: "Ordene los elementos según el enfoque del Realismo Jurídico, desde el factor más subjetivo (el juez) al más objetivo (la norma escrita):"

pasos:
  - "La decisión del juez en el caso concreto"
  - "La conducta social predominante"
  - "El texto de la norma legal"

respuesta: ["La decisión del juez en el caso concreto", "La conducta social predominante", "El texto de la norma legal"]
tipo: ordenar
opciones_explicitas: ["La decisión del juez en el caso concreto", "La conducta social predominante", "El texto de la norma legal"]

explicacion: |
  El realismo enfatiza que el derecho no es solo texto, sino la actividad judicial influenciada por factores sociales.
```

### 5 — El dilema de la justicia
```
metadata:
  materia: "derecho"
  tema: "corrientes_interpretacion_juridica"
  nivel: "basico"
  tags: ["iusnaturalismo", "iuspositivismo"]

variables:
  dilema: uno_de([["La ley es la ley y debe aplicarse sin importar la percepción de injusticia", "positivismo"], ["La ley debe ser sometida al juicio de la justicia natural", "iusnaturalismo"]])
  idx: uno_de([0, 1])

enunciado: "Si un sistema jurídico afirma que 'la ley es la ley' y su aplicación es obligatoria incluso si es considerada injusta, el sistema está operando bajo el principio de ___."

respuesta: dilema[idx][0]
tipo: mc
opciones_explicitas: ["positivismo", "iusnaturalismo", "realismo_juridico"]

explicacion: |
  El principio de legalidad estricta es un pilar del iuspositivismo, donde la validez es formal.
```