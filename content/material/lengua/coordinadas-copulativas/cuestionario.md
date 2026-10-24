# Lengua — coordinadas copulativas (cuestionario, 28 preguntas VBLang)

> Tema: `lengua/coordinadas-copulativas`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "basico"
  tags: ["estructura", "independencia"]

variables:
  oracion: uno_de(["El sol sale y la luna se oculta", "Juan corre y María camina", "Pedro come y Ana duerme"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{oracion}', la segunda parte depende jerárquicamente de la primera para tener sentido completo."

explicacion: |
  Falso. En las coordenadas copulativas, ambas partes tienen independencia sintáctica. Ninguna es subordinada de la otra; simplemente se suman información.
```

### 2 — pregunta 2

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "basico"
  tags: ["funcion", "nexos"]

variables:
  op_a: "subordinar"
  op_b: "unir aditivamente"
  op_c: "contrastar"
  op_d: "causar"

respuesta: op_b
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "¿Cuál es la función principal de las conjunciones copulativas (como 'y', 'e', 'ni') en una oración?"

explicacion: |
  La función principal es unir elementos o proposiciones de manera aditiva (sumar información), sin crear dependencia jerárquica entre ellas.
```

### 3 — pregunta 3

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["elision", "estructura"]

variables:
  ejemplo: "Pedro come pan y María [come] queso"

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{ejemplo}', la omisión del verbo en la segunda parte se llama elisión y no cambia la naturaleza coordinada de la oración."

explicacion: |
  Verdadero. La elisión es una omisión de elementos repetidos para evitar redundancia, pero la estructura sigue siendo coordinada copulativa.
```

### 4 — pregunta 4

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "avanzado"
  tags: ["independencia", "permutaciones"]

variables:
  partes: 2
  total: permutations(partes, partes)

respuesta: total
tipo: input

enunciado: "Si tenemos dos coordenadas copulativas independientes (A y B), ¿cuántas permutaciones distintas de orden existen sin cambiar el significado esencial de la coordinación?"

explicacion: |
  Como son independientes, se pueden invertir. Para 2 elementos, hay 2! (2x1) = 2 permutaciones posibles (A y B; B y A).
```

### 5 — pregunta 5

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "avanzado"
  tags: ["etimologia", "terminologia"]

variables:
  op_a: "copular"
  op_b: "separar"
  op_c: "subordinar"
  op_d: "conjugar"

respuesta: op_a
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "El término 'copulativa' proviene del verbo latino 'copular', que significa:"

explicacion: |
  'Copular' significa unir o ligar, reflejando la función de estas conjunciones de enlazar elementos.
```

### 6 — pregunta 6

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "basico"
  tags: ["dependencia", "jerarquia"]

variables:
  afirmacion: "una parte completa el sentido de la otra"

respuesta: falso
tipo: vf

enunciado: "En las coordenadas copulativas, una parte completa el sentido de la otra, creando una jerarquía principal/secundaria."

explicacion: |
  Falso. Esa es la característica de las subordinadas. En las copulativas, ambas partes son independientes e iguales jerárquicamente.
```

### 7 — pregunta 7

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["nexos", "frecuencia"]

variables:
  total_nexos: 3
  nexo_comun: "y"

respuesta: nexo_comun
tipo: input

enunciado: "De los nexos copulativos principales (y, e, ni), ¿cuál es el más común y representativo?"

explicacion: |
  La conjunción 'y' es la más común y representativa de las coordinadas copulativas.
```

### 8 — pregunta 8

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["prueba", "independencia"]

variables:
  op_a: "cambiar el significado"
  op_b: "mantener la relación aditiva"
  op_c: "crear una subordinada"
  op_d: "eliminar la elisión"

respuesta: op_b
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "Una prueba clave para identificar coordenadas copulativas es invertir el orden de las partes. ¿Qué ocurre con la relación al invertir?"

explicacion: |
  La relación de adición se mantiene, demostrando la independencia sintáctica de las partes.
```

### 9 — pregunta 9

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["fonetica", "cacofonia"]

variables:
  palabra: "isla"

respuesta: verdadero
tipo: vf

enunciado: "Ante la palabra '{palabra}', se debe usar 'e' en lugar de 'y' para evitar cacofonía."

explicacion: |
  Verdadero. 'Y isla' suena mal fonéticamente; 'e isla' es la forma correcta.
```

### 10 — pregunta 10

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["comparacion", "subordinadas"]

variables:
  op_a: "dependencia jerárquica"
  op_b: "independencia sintáctica"
  op_c: "uso de 'que'"
  op_d: "elisión obligatoria"

respuesta: op_b
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "¿Qué característica distingue fundamentalmente a las coordenadas copulativas de las subordinadas?"

explicacion: |
  La independencia sintáctica. En las copulativas, ninguna parte depende de la otra.
```

### 11 — pregunta 11

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["elision", "naturaleza"]

variables:
  afirmacion: "cambia la naturaleza coordinada"

respuesta: falso
tipo: vf

enunciado: "La elisión de elementos repetidos cambia la naturaleza coordinada de la oración."

explicacion: |
  Falso. La elisión no cambia la naturaleza; solo hace la oración más fluida.
```

### 12 — pregunta 12

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "basico"
  tags: ["funcion", "nexos"]

variables:
  op_a: "separar"
  op_b: "unir"
  op_c: "subordinar"
  op_d: "interrogar"

respuesta: op_b
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "La conjunción 'y' tiene la función de:"

explicacion: |
  Unir elementos o proposiciones de manera aditiva.
```

### 13 — pregunta 13

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "avanzado"
  tags: ["que", "independencia"]

variables:
  afirmacion: "siempre es subordinante"

respuesta: falso
tipo: vf

enunciado: "El nexo 'que' siempre cumple una función subordinante y nunca aditiva."

explicacion: |
  Falso. En algunos contextos específicos, 'que' puede cumplir función aditiva, aunque su uso principal es subordinante.
```

### 14 — pregunta 14

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "basico"
  tags: ["identificacion", "contexto"]

variables:
  oracion: "Juan e María estudian"
  nexo: "e"

respuesta: nexo
tipo: input

enunciado: "En la oración '{oracion}', ¿cuál es el nexo copulativo?"

explicacion: |
  El nexo es 'e', utilizado antes de la vocal 'i' de 'María'.
```

### 15 — pregunta 15

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "avanzado"
  tags: ["permutaciones", "logica"]

variables:
  elementos: 3
  total: permutations(elementos, elementos)

respuesta: total
tipo: input

enunciado: "Si tenemos tres coordenadas copulativas independientes (A, B, C), ¿cuántas permutaciones distintas de orden existen?"

explicacion: |
  Para 3 elementos independientes, hay 3! (3x2x1) = 6 permutaciones posibles.
```

### 16 — pregunta 16

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "basico"
  tags: ["independencia", "sintaxis"]

variables:
  caso: uno_de(["verdadero", "falso"])

respuesta: verdadero
tipo: vf

enunciado: "En una oración coordinada copulativa, la segunda parte depende jerárquicamente de la primera."

explicacion: |
  Falso. En las coordinadas copulativas, ambas partes tienen independencia sintáctica y gramatical. Ninguna es subordinada de la otra.
```

### 17 — pregunta 17

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "basico"
  tags: ["fonetica", "uso_de_nexos"]

variables:
  palabra_siguiente: uno_de(["isla", "hambre", "yogur"])

respuesta: e
tipo: input

enunciado: "Si la palabra siguiente comienza con 'i' o 'hi' (como '{palabra_siguiente}'), ¿qué forma de la conjunción 'y' se utiliza para evitar cacofonía?"

explicacion: |
  Se utiliza 'e' en lugar de 'y' cuando el término siguiente comienza por 'i' o 'hi' para evitar la repetición de sonidos vocálicos iguales (cacofonía).
```

### 18 — pregunta 18

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["independencia", "prueba_sintactica"]

variables:
  parte1: uno_de(["Juan corre", "María lee", "Pedro come"])
  parte2: uno_de(["Ana duerme", "Luis trabaja", "Sofía estudia"])

respuesta: verdadero
tipo: vf

enunciado: "En una coordinada copulativa, es posible invertir el orden de las partes ('{parte1} y {parte2}' por '{parte2} y {parte1}') sin alterar la relación sintáctica fundamental."

explicacion: |
  Verdadero. La independencia de las partes permite invertir el orden manteniendo la adición de información, a diferencia de las subordinadas donde el orden es más rígido.
```

### 19 — pregunta 19

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "avanzado"
  tags: ["comparacion", "subordinacion"]

variables:
  ejemplo_copulativa: "Estudio y trabajo"
  ejemplo_subordinada: "Estudio porque necesito aprobar"

respuesta: verdadero
tipo: vf

enunciado: "La diferencia principal entre 'Estudio y trabajo' (copulativa) y 'Estudio porque necesito aprobar' (subordinada causal) es que en la primera no hay dependencia jerárquica entre los verbos."

explicacion: |
  Verdadero. En la coordinada, ambas acciones son independientes. En la subordinada, una depende de la otra para completar su sentido.
```

### 20 — pregunta 20

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["elision", "estructura"]

variables:
  verbo: uno_de(["come", "lee", "corre"])
  sujeto1: uno_de(["Pedro", "María", "Juan"])
  sujeto2: uno_de(["Ana", "Luis", "Sofía"])

respuesta: verdadero
tipo: vf

enunciado: "En 'Pedro come pan y Ana queso', se ha producido una elisión del verbo en la segunda parte, pero sigue siendo una coordinada copulativa."

explicacion: |
  Verdadero. La elisión de elementos repetidos (como el verbo) es común en las coordinadas copulativas y no cambia su naturaleza sintáctica.
```

### 21 — pregunta 21

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["identificacion", "distractores"]

variables:
  correcta: "y"
  incorrecta: uno_de(["pero", "o", "sino"])
  oracion: "Juan corre {incorrecta} María camina."

respuesta: incorrecta
tipo: input

enunciado: "En la oración 'Juan corre {incorrecta} María camina', ¿qué nexo se usa que NO es copulativo?"

explicacion: |
  El nexo '{incorrecta}' es adversativo o disyuntivo, no copulativo. Las copulativas usan 'y', 'e' o 'ni'.
```

### 22 — pregunta 22

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "basico"
  tags: ["estructura", "definicion"]

variables:
  minimo: 2

respuesta: 2
tipo: input

enunciado: "¿Cuál es el número mínimo de partes (oraciones simples o sintagmas) que deben unirse para formar una coordinada copulativa?"

explicacion: |
  Se necesitan al menos dos partes. La coordinación implica la unión de dos o más elementos de igual jerarquía.
```

### 23 — pregunta 23

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["ejemplos", "literatura"]

variables:
  autor: uno_de(["Borges", "Cortázar", "Bianchi", "Sábato"])
  nexo: "y"

respuesta: verdadero
tipo: vf

enunciado: "En la literatura argentina, es común encontrar coordinadas copulativas con el nexo 'y' para crear ritmo o sumar imágenes, como en 'El sol brillaba {nexo} la brisa refrescaba'."

explicacion: |
  Verdadero. Autores argentinos utilizan frecuentemente estas estructuras para dar fluidez y adición de sensaciones en sus textos.
```

### 24 — pregunta 24

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["sintaxis", "analisis"]

variables:
  sujeto1: uno_de(["Los pibes", "El equipo", "La gente"])
  verbo1: uno_de(["jugó", "ganó", "perdió"])
  nexo: "y"
  sujeto2: uno_de(["nosotros", "ellos", "ustedes"])
  verbo2: uno_de(["miramos", "observaron", "escucharon"])

respuesta: verdadero
tipo: vf

enunciado: "En 'Los pibes jugaron y nosotros miramos', ambas partes son sintácticamente independientes."

explicacion: |
  Verdadero. Cada parte tiene su propio sujeto y verbo, y están unidas por un nexo copulativo, manteniendo su independencia.
```

### 25 — pregunta 25

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "basico"
  tags: ["identificacion", "lista"]

variables:
  nexo: uno_de(["y", "e"])
  oracion: "Vi el mar {nexo} la montaña."

respuesta: verdadero
tipo: vf

enunciado: "La oración 'Vi el mar {nexo} la montaña' es una coordinada copulativa."

explicacion: |
  Verdadero. El nexo 'y' o 'e' une dos objetos directos (o proposiciones elípticas) de igual jerarquía.
```

### 26 — pregunta 26

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["elision", "sujeto"]

variables:
  verbo: uno_de(["come", "duerme", "trabaja"])
  sujeto: uno_de(["Pedro", "María", "Juan"])

respuesta: verdadero
tipo: vf

enunciado: "En 'Pedro come y duerme', se ha elidido el sujeto en la segunda parte, pero sigue siendo una coordinada copulativa de verbos."

explicacion: |
  Verdadero. La elisión del sujeto es válida en coordinadas copulativas cuando el sujeto es el mismo para ambas acciones.
```

### 27 — pregunta 27

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "avanzado"
  tags: ["comparacion", "causalidad"]

variables:
  ejemplo_copulativa: "Estudio y trabajo"
  ejemplo_subordinada: "Estudio porque trabajo"

respuesta: verdadero
tipo: vf

enunciado: "En 'Estudio y trabajo', no hay causa-efecto entre las partes, a diferencia de 'Estudio porque trabajo'."

explicacion: |
  Verdadero. La coordinada copulativa suma acciones sin establecer relación causal. La subordinada causal establece una dependencia de razón.
```

### 28 — pregunta 28

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["elision", "verbo"]

variables:
  verbo: uno_de(["come", "lee", "corre"])

respuesta: verdadero
tipo: vf

enunciado: "Es correcto omitir el verbo en la segunda parte de una coordinada copulativa si se sobreentiende, como en 'Pedro come y Ana [come] queso'."

explicacion: |
  Verdadero. La elisión del verbo es una práctica común para evitar repeticiones y hacer el habla más fluida, sin alterar la coordinación.
```
