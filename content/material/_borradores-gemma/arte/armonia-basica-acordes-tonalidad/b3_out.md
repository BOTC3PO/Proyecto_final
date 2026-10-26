### 1 — Definición de acorde
```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["teoria_musical", "acordes"]

respuesta: "un conjunto de tres o más notas que suenan simultáneamente"
tipo: completar
respuestas_validas: ["un conjunto de tres o más notas que suenan simultáneamente", "un conjunto de notas que suenan al mismo tiempo"]

enunciado: "En teoría musical, un acorde se define como ___."

explicacion: |
  Un acorde no es simplemente cualquier grupo de notas, sino la superposición de tres o más notas que crean una sonoridad específica (como mayor, menor o disminuido).
```

### 2 — Confusión entre escala y tonalidad
```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "intermedio"
  tags: ["tonalidad", "escala"]

variables:
  es_escala: verdadero

respuesta: es_escala
tipo: vf

enunciado: "La escala es el conjunto de notas que forman la base de una ___."

explicacion: |
  Es un error común confundir escala con tonalidad. La escala es la sucesión de notas (el "mapa"), mientras que la tonalidad es el sistema de relaciones jerárquicas que se establece alrededor de una nota fundamental (el "territorio").
```

### 3 — El rol de la tónica
```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["tonalidad", "tonica"]

variables:
  escenario: uno_de([
    ["Do mayor", "Do"],
    ["Sol mayor", "Sol"],
    ["La menor", "La"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["escenario[0]", "escenario[1]", "escenario[2]", "Ninguna de las anteriores"]

enunciado: "Si una pieza musical está en la tonalidad de {escenario[0]}, la nota que actúa como centro de gravedad y reposo es ___."

explicacion: |
  La tónica es la nota fundamental de la tonalidad. Es el punto de máxima estabilidad hacia el cual tiende la música para sentir que ha "llegado a casa".
```

### 4 — Construcción de un acorde mayor
```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "intermedio"
  tags: ["intervalos", "acordes"]

respuesta: "tercera mayor, tercera menor, quinta justa"
tipo: completar
respuestas_validas: ["tercera mayor, tercera menor, quinta justa"]

enunciado: "Para construir un acorde mayor estándar, se requiere la fundamental, una ___ y una ___."

explicacion: |
  Un acorde mayor se construye con intervalos de tercera mayor (4 semitonos) respecto a la fundamental y quinta justa (7 semitonos).
```

### 5 — Jerarquía de la tonalidad
```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "intermedio"
  tags: ["jerarquia", "funcionalidad"]

respuesta: ["Tónica", "Subdominante", "Dominante"]
tipo: ordenar
opciones_explicitas: ["Tónica", "Subdominante", "Dominante"]

enunciado: "Ordena los grados de una escala de mayor según su función de estabilidad, desde la que tiene mayor reposo a la que genera mayor tensión:"

explicacion: |
  La Tónica es el reposo absoluto; la Subdominante es una tensión media que prepara el camino; la Dominante es la máxima tensión que exige volver a la tónica.
```