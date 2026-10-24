# Arte — Armonia basica acordes tonalidad (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Revisado manualmente: Q3 no tenía campo `respuesta:` y aceptaba
> "mayor"/"menor" como válidos para una premisa fija que sólo admite
> "mayor", Q7/Q12/Q17/Q20 usaban variables booleanas fijas o sorteadas
> como respuesta de un `tipo: completar` de texto (o de un `vf` mal
> tipeado), Q24 pedía "ordenar" tres respuestas candidatas completas en
> vez de elegir una (convertida a mc).

---

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
  Un acorde es la superposición de tres o más notas musicales que suenan al mismo tiempo, creando una sonoridad específica (dos notas simultáneas forman un intervalo, no un acorde).
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

tipo: completar
respuesta: "mayor"
respuestas_validas:
  - "mayor"

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

respuesta_orden: ["Raíz", "Tercera", "Quinta"]

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

### 6 — El acorde mayor

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["armonia", "acordes", "intervalos"]

respuesta: "mayor"
tipo: mc
opciones_explicitas: ["mayor", "menor", "disminuido"]

enunciado: "Un acorde mayor se construye mediante la superposición de dos intervalos. Si tomamos una nota fundamental y le sumamos una tercera mayor (4 semitonos) y luego una quinta justa (7 semitonos desde la fundamental), el acorde resultante es de tipo ___."

explicacion: |
  Un acorde mayor se define por su estructura de intervalos: 1 - 3 mayor - 5 justa. En semitonos: 0 - 4 - 7.
```

### 7 — Identificación de la tonalidad

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["tonalidad", "escala", "teoria"]

respuesta: verdadero
tipo: vf
enunciado: "Si una pieza musical utiliza exclusivamente las notas de la escala de Do Mayor (Do, Re, Mi, Fa, Sol, La, Si) y sus acordes derivados, ¿es correcto afirmar que la pieza está en la tonalidad de Do Mayor?"

explicacion: |
  La tonalidad está determinada por la escala que sirve como centro tonal y marco de referencia para la melodía y la armonía.
```

### 8 — Construcción de un acorde menor

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "intermedio"
  tags: ["acordes", "semitonos"]

variables:
  base: uno_de(["Do", "Re", "Mi"])

respuesta: "3"
tipo: completar
respuestas_validas:
  - "3"

enunciado: "Para transformar un acorde mayor en un acorde menor, debemos reducir la tercera mayor a una tercera menor. Si partimos de la nota fundamental {base}, debemos sumar exactamente ___ semitonos para obtener la tercera menor."

pasos:
  - "Identificar la nota fundamental: {base}"
  - "Calcular la distancia de la tercera mayor (4 semitonos)"
  - "Restar 1 semitono para obtener la tercera menor (4 - 1 = 3 semitonos)"

explicacion: |
  La diferencia fundamental entre un acorde mayor y uno menor es la tercera. El acorde menor tiene la tercera menor (3 semitonos), mientras que el mayor tiene la tercera mayor (4 semitonos).
```

### 9 — Estructura de la tríada

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["acordes", "teoria"]

respuesta_orden: ["Fundamental", "Tercera", "Quinta"]
tipo: ordenar

opciones_explicitas: ["Fundamental", "Tercera", "Quinta"]

enunciado: "Ordena los elementos de una tríade musical desde la nota más grave (la base) hasta la más aguda, siguiendo la estructura estándar de un acorde."

explicacion: |
  Una tríada básica se compone de tres notas: la fundamental (la raíz), la tercera (que determina el modo) y la quinta (que da estabilidad).
```

### 10 — Cálculo de semitonos

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "intermedio"
  tags: ["intervalos", "calculo"]

variables:
  nota_base: uno_de(["Do", "Re", "Mi", "Fa"])

respuesta: "7"
tipo: completar
respuestas_validas:
  - "7"

enunciado: "En el sistema de semitonos, una quinta justa siempre requiere un total de 7 semitonos desde la fundamental. Si partimos de la nota {nota_base}, ¿cuántos semitonos debemos subir para llegar a la quinta justa?"

explicacion: |
  El tamaño del intervalo de quinta justa (7 semitonos) es siempre el mismo, sin importar cuál sea la nota fundamental de partida.
```

### 11 — Definición de acorde

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["teoria_musical", "acordes"]

respuesta: "un conjunto de tres o más notas que suenan simultáneamente"
tipo: completar
respuestas_validas:
  - "un conjunto de tres o más notas que suenan simultáneamente"
  - "un conjunto de notas que suenan al mismo tiempo"

enunciado: "En teoría musical, un acorde se define como ___."

explicacion: |
  Un acorde no es simplemente cualquier grupo de notas, sino la superposición de tres o más notas que crean una sonoridad específica (como mayor, menor o disminuido).
```

### 12 — Confusión entre escala y tonalidad

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "intermedio"
  tags: ["tonalidad", "escala"]

respuesta: "tonalidad"
tipo: completar
respuestas_validas:
  - "tonalidad"
enunciado: "La escala es el conjunto de notas que forman la base de una ___."

explicacion: |
  Es un error común confundir escala con tonalidad. La escala es la sucesión de notas (el "mapa"), mientras que la tonalidad es el sistema de relaciones jerárquicas que se establece alrededor de una nota fundamental (el "territorio").
```

### 13 — El rol de la tónica

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["tonalidad", "tonica"]

variables:
  escenario: uno_de([["Do mayor", "Do"], ["Sol mayor", "Sol"], ["La menor", "La"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Do", "Sol", "La", "Fa"]

enunciado: "Si una pieza musical está en la tonalidad de {escenario[0]}, la nota que actúa como centro de gravedad y reposo es ___."

explicacion: |
  La tónica es la nota fundamental de la tonalidad. Es el punto de máxima estabilidad hacia el cual tiende la música para sentir que ha "llegado a casa".
```

### 14 — Construcción de un acorde mayor

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "intermedio"
  tags: ["intervalos", "acordes"]

respuesta: "tercera mayor, tercera menor, quinta justa"
tipo: completar
respuestas_validas:
  - "tercera mayor, tercera menor, quinta justa"

enunciado: "Para construir un acorde mayor estándar, se requiere la fundamental, una ___ y una ___."

explicacion: |
  Un acorde mayor se construye con intervalos de tercera mayor (4 semitonos) respecto a la fundamental y quinta justa (7 semitonos).
```

### 15 — Jerarquía de la tonalidad

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "intermedio"
  tags: ["jerarquia", "funcionalidad"]

respuesta_orden: ["Tónica", "Subdominante", "Dominante"]
tipo: ordenar
opciones_explicitas: ["Tónica", "Subdominante", "Dominante"]

enunciado: "Ordena los grados de una escala de mayor según su función de estabilidad, desde la que tiene mayor reposo a la que genera mayor tensión:"

explicacion: |
  La Tónica es el reposo absoluto; la Subdominante es una tensión media que prepara el camino; la Dominante es la máxima tensión que exige volver a la tónica.
```

### 16 — El concepto de acorde

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["armonia", "acordes"]

respuesta: "acorde"
tipo: mc
opciones_explicitas: ["melodia", "acorde", "ritmo", "timbre"]

enunciado: "Mientras que la melodía es una sucesión de notas en el tiempo, un ___ es la combinación de tres o más notas sonando de forma simultánea."

explicacion: |
  Un acorde se define por la superposición de diferentes alturas (notas) al mismo tiempo, creando una sonoridad específica.
```

### 17 — Tonalidad vs Escala

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "intermedio"
  tags: ["tonalidad", "escala"]

respuesta: "tonalidad"
tipo: completar
respuestas_validas:
  - "tonalidad"
enunciado: "Si una pieza musical utiliza un conjunto de notas que actúan como centro gravitacional, estableciendo una jerarquía de tensión y reposo, ¿podemos decir que la pieza posee una ___?"

explicacion: |
  La tonalidad es el sistema de organización que utiliza una escala como centro de gravedad. Si no hay un centro tonal, la música es atonal.
```

### 18 — Estructura de un acorde mayor

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "intermedio"
  tags: ["acordes", "intervalos"]

variables:
  es_mayor: verdadero

respuesta: "mayor"
tipo: completar
respuestas_validas:
  - "mayor"
  - "menor"

enunciado: "Un acorde se diferencia de una tríada de dos notas (intervalo) por tener tres notas. Si la distancia entre la primera y la tercera nota es de dos tonos enteros, el acorde es de tipo ___."

explicacion: |
  La tercera mayor es la que define la sonoridad brillante del acorde mayor.
```

### 19 — Elementos de la armonía

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["armonia", "melodia"]

respuesta_orden: ["melodia", "armonia", "ritmo"]
tipo: ordenar

opciones_explicitas: ["melodia", "armonia", "ritmo"]

enunciado: "Ordena los elementos fundamentales de la música, desde la dimensión horizontal (sucesión) hacia la dimensión vertical (simultaneidad):"

explicacion: |
  La melodía es horizontal (una nota tras otra), la armonía es vertical (notas a la vez) y el ritmo es la duración de ambas.
```

### 20 — Consonancia y Disonancia

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "intermedio"
  tags: ["consonancia", "disonancia"]

respuesta: verdadero
tipo: vf
enunciado: "En el contexto de la armonía, cuando un acorde produce una sensación de estabilidad y reposo, se dice que es una consonancia. ¿Es esto cierto?"

explicacion: |
  La consonancia es la cualidad de los intervalos o acordes que suenan estables y no requieren resolución inmediata.
```

### 21 — El acorde fundamental

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes"
  nivel: "basico"
  tags: ["armonia", "teoria_musical"]

variables:
  datos: [["Do-Mi-Sol", "tríada de Do"], ["Re-Fa-La", "tríada de Re"], ["Mi-Sol-Si", "tríada de Mi"]]
  idx: uno_de([0, 1, 2])

enunciado: "Un músico está practicando una escala y toca las notas {datos[idx][0]}. Según la teoría musical, este conjunto de notas forma una {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "tríada de Do"
  - "tríada de Re"
  - "tríada de Mi"

explicacion: |
  Un acorde se forma al superponer tres o más notas distintas. En este caso, las notas pertenecen a la estructura de una tríada básica.
```

### 22 — Identificación de tonalidad

```
metadata:
  materia: "arte"
  tema: "armonia_basica_tonalidad"
  nivel: "basico"
  tags: ["tonalidad", "teoria_musical"]

variables:
  datos: [["La menor", "la menor"], ["Sol mayor", "Sol mayor"], ["Do mayor", "Do mayor"]]
  idx: uno_de([0, 1, 2])

enunciado: "Una pieza musical suena melancólica y su nota de reposo (tónica) es {datos[idx][0]}. ¿En qué tonalidad se encuentra la pieza?"

opciones_explicitas: ["la menor", "Sol mayor", "Do mayor"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  La tonalidad está determinada por la nota fundamental (tónica) que actúa como centro gravitacional de la obra.
```

### 23 — Estructura de un acorde

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes"
  nivel: "intermedio"
  tags: ["intervalos", "acordes"]

enunciado: "Si un acorde se construye con la raíz, su tercera y su quinta, y la tercera es una tercera mayor, ¿el acorde es mayor?"

respuesta: verdadero
tipo: vf

explicacion: |
  La relación entre la primera y la tercera nota define si el acorde es mayor o menor. Si la tercera es mayor, el acorde es mayor.
```

### 24 — Orden de construcción armónica

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes"
  nivel: "basico"
  tags: ["armonia", "teoria_musical"]

enunciado: "Para construir un acorde de Do Mayor de forma ascendente, ¿cuál es el orden correcto de sus notas?"

opciones_explicitas: ["Do, Mi, Sol", "Sol, Mi, Do", "Do, Sol, Mi"]
respuesta: "Do, Mi, Sol"
tipo: mc

explicacion: |
  Un acorde se construye por intervalos superpuestos (terceras) partiendo desde la nota raíz hacia arriba.
```

### 25 — El centro tonal

```
metadata:
  materia: "arte"
  tema: "armonia_basica_tonalidad"
  nivel: "basico"
  tags: ["tonalidad", "teoria_musical"]

variables:
  datos: [["La pieza termina en Do", "Do mayor"], ["La pieza termina en Sol", "Sol mayor"], ["La pieza termina en Fa", "Fa mayor"]]
  idx: uno_de([0, 1, 2])

enunciado: "En una composición, {datos[idx][0]}. Si la última nota es la tónica, ¿cuál es la tonalidad probable?"

opciones_explicitas: ["Do mayor", "Sol mayor", "Fa mayor"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  La resolución final en la tónica es el indicador más fuerte para identificar la tonalidad de una pieza musical.
```
