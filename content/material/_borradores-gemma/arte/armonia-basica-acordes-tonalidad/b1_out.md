### 1 — ¿Qué es un acorde?
```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["armonia", "teoria_musical"]

tipo: mc
opciones_explicitas: ["La sucesión de notas que se escuchan una tras otra", "La combinación de tres o más notas que suenan simultáneamente", "La velocidad a la que se interpretan las notas", "La intensidad con la que suena un instrumento"]

respuesta: "La combinación de tres o más notas que suenan simultáneamente"

enunciado: "En la teoría musical, un acorde se define como ___."

explicacion: |
  Un acorde es la superposición de dos o más notas musicales que suenan al mismo tiempo, creando una sonoridad específica.
```

### 2 — Tonalidad y centro tonal
```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["tonalidad", "centro_tonal"]

tipo: vf

enunciado: "La tonalidad de una pieza musical es el sistema de relaciones que establece una jerarquía entre las notas, donde una nota específica actúa como el centro de gravedad o 'casa'."

respuesta: verdadero

explicacion: |
  Correcto. La tonalidad organiza el lenguaje musical mediante una jerarquía donde la tónica es el punto de reposo principal.
```

### 3 — Construcción de un acorde mayor
```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "intermedio"
  tags: ["acordes", "intervalos"]

variables:
  es_mayor: uno_de([verdadero, falso])

tipo: completar
respuestas_validas: ["mayor", "menor"]

enunciado: "Si un acorde está formado por la raíz, una tercera mayor y una quinta justa, se trata de un acorde ___."

explicacion: |
  La estructura de un acorde mayor se define por tener una tercera mayor (4 semitonos) entre la raíz y la tercera, y una quinta justa (7 semitonos) entre la raíz y la quinta.
```

### 4 — Elementos de un acorde
```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["terminologia", "acordes"]

tipo: ordenar
opciones_explicitas: ["Raíz", "Tercera", "Quinta"]

respuesta: ["Raíz", "Tercera", "Quinta"]

enunciado: "Ordena los elementos de un acorde básico (tríada) desde la nota más grave a la más aguda:"

explicacion: |
  En una tríada estándar, la raíz es la nota fundamental, la tercera define la cualidad del acorde y la quinta es la nota más alta de la tríada básica.
```

### 5 — La función de la tonalidad
```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["tonalidad", "percepcion"]

tipo: mc
opciones_explicitas: ["Establecer la escala de notas que se utilizará", "Determinar el volumen de la música", "Indicar el ritmo de la pieza", "Definir el género musical"]

respuesta: "Establecer la escala de notas que se utilizará"

enunciado: "La principal función de la tonalidad en una composición es ___."

explicacion: |
  La tonalidad proporciona un marco de referencia que determina qué notas son naturales, accidentadas o de tensión dentro de una obra.
```