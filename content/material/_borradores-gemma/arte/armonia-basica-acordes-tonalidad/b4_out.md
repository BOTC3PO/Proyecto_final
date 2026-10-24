### 1 — El concepto de acorde
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

### 2 — Tonalidad vs Escala
```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "intermedio"
  tags: ["tonalidad", "escala"]

variables:
  es_tonal: falso

respuesta: es_tonal
tipo: vf

enunciado: "Si una pieza musical utiliza un conjunto de notas que actúan como centro gravitacional, estableciendo una jerarquía de tensión y reposo, ¿podemos decir que la pieza posee una ___?"

explicacion: |
  La tonalidad es el sistema de organización que utiliza una escala como centro de gravedad. Si no hay un centro tonal, la música es atonal.
```

### 3 — Estructura de un acorde mayor
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
respuestas_validas: ["mayor", "menor"]

enunciado: "Un acorde se diferencia de una tríada de dos notas (intervalo) por tener tres notas. Si la distancia entre la primera y la tercera nota es de dos tonos enteros, el acorde es de tipo ___."

explicacion: |
  La tercera mayor es la que define la sonoridad brillante del acorde mayor.
```

### 4 — Elementos de la armonía
```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["armonia", "melodia"]

respuesta: ["melodia", "armonia", "ritmo"]
tipo: ordenar

opciones_explicitas: ["melodia", "armonia", "ritmo"]

enunciado: "Ordena los elementos fundamentales de la música, desde la dimensión horizontal (sucesión) hacia la dimensión vertical (simultaneidad):"

explicacion: |
  La melodía es horizontal (una nota tras otra), la armonía es vertical (notas a la vez) y el ritmo es la duración de ambas.
```

### 5 — Consonancia y Disonancia
```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "intermedio"
  tags: ["consonancia", "disonancia"]

variables:
  es_consonante: verdadero

respuesta: es_consonante
tipo: vf

enunciado: "En el contexto de la armonía, cuando un acorde produce una sensación de estabilidad y reposo, se dice que es una consonancia. ¿Es esto cierto? (verdadero/falso)"

explicacion: |
  La consonancia es la cualidad de los intervalos o acordes que suenan estables y no requieren resolución inmediata.
```