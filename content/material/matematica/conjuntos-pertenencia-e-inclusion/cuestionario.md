# Matemática — Conjuntos: pertenencia e inclusión (cuestionario, 24 preguntas VBLang)

> Tema: `CJ1`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es un conjunto

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "basico"
  tags: ["conjuntos", "vocabulario"]

enunciado: "¿Qué es un conjunto en matemática?"
tipo: mc
opciones_explicitas:
  - "Una colección de objetos bien definida, sin importar el orden y sin repetir elementos"
  - "Una lista de números que siempre debe estar ordenada"
  - "Un conjunto sólo puede tener números, nunca letras u objetos"
respuesta: "Una colección de objetos bien definida, sin importar el orden y sin repetir elementos"

explicacion: |
  {2, 4, 6} y {6, 4, 2} son el mismo conjunto — el orden no importa.
```

### 2 — Qué es un elemento

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "basico"
  tags: ["conjuntos", "vocabulario"]

enunciado: "¿Cómo se llama cada objeto que forma parte de un conjunto?"
tipo: mc
opciones_explicitas:
  - "Elemento"
  - "Subconjunto"
  - "Universo"
respuesta: "Elemento"

explicacion: |
  Un conjunto está formado por sus elementos.
```

### 3 — Completar: símbolo de pertenencia

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "basico"
  tags: ["conjuntos", "completar"]

tipo: completar
enunciado: "Completá: el símbolo que indica que un elemento SÍ pertenece a un conjunto es ___."
respuestas_validas:
  - "∈"

explicacion: |
  3 ∈ {1, 2, 3} se lee "3 pertenece al conjunto".
```

### 4 — Completar: símbolo de no pertenencia

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "basico"
  tags: ["conjuntos", "completar"]

tipo: completar
enunciado: "Completá: el símbolo que indica que un elemento NO pertenece a un conjunto es ___."
respuestas_validas:
  - "∉"

explicacion: |
  5 ∉ {1, 2, 3} se lee "5 no pertenece al conjunto".
```

### 5 — Problema: pertenencia

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "intermedio"
  tags: ["conjuntos", "problema"]

enunciado: "Dado el conjunto A = {3, 6, 9, 12, 15}, ¿el número 10 pertenece a A?"
tipo: vf
respuesta: falso

explicacion: |
  10 no está en la lista de elementos de A — no cumple ninguna
  propiedad especial, simplemente no fue incluido.
```

### 6 — El vacío es un conjunto válido

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "intermedio"
  tags: ["conjuntos"]

respuesta: verdadero
tipo: vf

enunciado: "El conjunto vacío (∅) es un conjunto válido, con cardinalidad 0 — no es lo mismo que 'no tener conjunto'."

explicacion: |
  ∅ es una colección válida (dos llaves sin nada adentro), simplemente sin elementos.
```

### 7 — Completar: notación del conjunto vacío

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "basico"
  tags: ["conjuntos", "completar"]

tipo: completar
enunciado: "Completá: el conjunto vacío se representa con el símbolo ___ o con dos llaves sin nada adentro."
respuestas_validas:
  - "∅"

explicacion: |
  También se acepta escribirlo con dos llaves sin nada adentro.
```

### 8 — Qué es la cardinalidad

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "basico"
  tags: ["conjuntos", "vocabulario"]

enunciado: "¿Qué mide la cardinalidad de un conjunto, escrita |A|?"
tipo: mc
opciones_explicitas:
  - "La cantidad de elementos que tiene el conjunto"
  - "El elemento más grande del conjunto"
  - "La suma de todos los elementos del conjunto"
respuesta: "La cantidad de elementos que tiene el conjunto"

explicacion: |
  |{2, 4, 6, 8}| = 4, sin importar cuáles sean esos elementos.
```

### 9 — Problema: cardinalidad

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "intermedio"
  tags: ["conjuntos", "problema"]

enunciado: "¿Cuál es la cardinalidad del conjunto A = {10, 20, 30, 40, 50, 60}?"
tipo: input
respuesta: 6

explicacion: |
  Se cuentan los elementos listados, sin importar su valor: hay 6.
```

### 10 — La cardinalidad del vacío es 0

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "basico"
  tags: ["conjuntos"]

respuesta: 0
tipo: input

enunciado: "¿Cuál es la cardinalidad del conjunto vacío, |∅|?"

explicacion: |
  No tiene ningún elemento, así que su cardinalidad es 0.
```

### 11 — Qué es un subconjunto

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "intermedio"
  tags: ["conjuntos", "vocabulario"]

enunciado: "¿Cuándo se dice que B es subconjunto de A (B ⊆ A)?"
tipo: mc
opciones_explicitas:
  - "Cuando TODOS los elementos de B también son elementos de A"
  - "Cuando B y A tienen la misma cantidad de elementos"
  - "Cuando B tiene al menos un elemento en común con A"
respuesta: "Cuando TODOS los elementos de B también son elementos de A"

explicacion: |
  Con que un solo elemento de B no esté en A, ya no es subconjunto.
```

### 12 — Completar: símbolo de inclusión

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "basico"
  tags: ["conjuntos", "completar"]

tipo: completar
enunciado: "Completá: el símbolo que indica que B es subconjunto de A se escribe B ___ A."
respuestas_validas:
  - "⊆"

explicacion: |
  Se lee "B está incluido en A" o "B es subconjunto de A".
```

### 13 — Todo conjunto es subconjunto de sí mismo

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "avanzado"
  tags: ["conjuntos"]

respuesta: verdadero
tipo: vf

enunciado: "Todo conjunto A es subconjunto de sí mismo (A ⊆ A), aunque no sea subconjunto PROPIO."

explicacion: |
  Todos los elementos de A están, obviamente, en A — cumple la
  definición, aunque no agregue nada nuevo.
```

### 14 — El vacío es subconjunto de cualquier conjunto

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "avanzado"
  tags: ["conjuntos"]

respuesta: verdadero
tipo: vf

enunciado: "El conjunto vacío (∅) es subconjunto de cualquier conjunto A, sin excepción."

explicacion: |
  No hay ningún elemento en ∅ que pueda faltar en A (no hay ninguno),
  así que la condición se cumple siempre, vacuamente.
```

### 15 — Qué es un subconjunto propio

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "avanzado"
  tags: ["conjuntos", "vocabulario"]

enunciado: "¿Qué diferencia a un subconjunto PROPIO (B ⊂ A) de un subconjunto cualquiera (B ⊆ A)?"
tipo: mc
opciones_explicitas:
  - "En el propio, A tiene además al menos un elemento que B no tiene (son distintos)"
  - "En el propio, B y A tienen que ser exactamente iguales"
  - "No hay ninguna diferencia real entre ambos símbolos"
respuesta: "En el propio, A tiene además al menos un elemento que B no tiene (son distintos)"

explicacion: |
  Si B = A, entonces B ⊆ A pero B NO es subconjunto propio de A.
```

### 16 — Problema: subconjunto o no

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "avanzado"
  tags: ["conjuntos"]

enunciado: "A = {2, 4, 6, 8, 10}. ¿B = {4, 8, 12} es subconjunto de A?"
tipo: vf
respuesta: falso

explicacion: |
  12 es un elemento de B que NO está en A — alcanza con ese uno solo
  para que B no sea subconjunto de A.
```

### 17 — Qué es el conjunto universal

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "intermedio"
  tags: ["conjuntos", "vocabulario"]

enunciado: "¿Qué es el conjunto universal (U) en un problema de conjuntos?"
tipo: mc
opciones_explicitas:
  - "El conjunto de referencia que contiene a todos los elementos posibles en ese contexto"
  - "El conjunto con más elementos que existe en matemática"
  - "Un sinónimo del conjunto vacío"
respuesta: "El conjunto de referencia que contiene a todos los elementos posibles en ese contexto"

explicacion: |
  Por ejemplo, si el problema habla de los días de la semana, U son
  esos 7 días — cualquier otro conjunto del problema es subconjunto de U.
```

### 18 — Extensión vs. comprensión

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "intermedio"
  tags: ["conjuntos", "vocabulario"]

enunciado: "¿Cuál de estas dos formas escribe un conjunto 'por extensión'?"
tipo: mc
opciones_explicitas:
  - "A = {2, 4, 6, 8}"
  - "A = {x : x es par y 0 < x < 10}"
  - "Ambas son la misma forma, sólo cambia el nombre"
respuesta: "A = {2, 4, 6, 8}"

explicacion: |
  Por extensión se listan los elementos uno por uno; por comprensión
  se describe la propiedad que cumplen.
```

### 19 — Ordenar: pasos para verificar si B ⊆ A

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "avanzado"
  tags: ["conjuntos", "ordenar"]

enunciado: "Ordená los pasos para verificar si un conjunto B es subconjunto de un conjunto A."
tipo: ordenar
opciones_explicitas:
  - "Si en algún momento se encuentra un elemento de B que no está en A, se concluye que B NO es subconjunto de A"
  - "Tomar cada elemento de B, uno por uno"
  - "Revisar si ese elemento también pertenece a A"
respuesta_orden: ["Tomar cada elemento de B, uno por uno", "Revisar si ese elemento también pertenece a A", "Si en algún momento se encuentra un elemento de B que no está en A, se concluye que B NO es subconjunto de A"]
explicacion: |
  Alcanza con UN elemento de B ausente en A para descartar la inclusión.
```

### 20 — Dos conjuntos son iguales si tienen los mismos elementos

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "avanzado"
  tags: ["conjuntos"]

respuesta: verdadero
tipo: vf

enunciado: "Dos conjuntos son iguales si y sólo si tienen exactamente los mismos elementos (sin importar el orden en que se escriban)."

explicacion: |
  {1, 2, 3} y {3, 1, 2} son el mismo conjunto.
```

### 21 — Repetir un elemento no cambia el conjunto

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "intermedio"
  tags: ["conjuntos"]

respuesta: verdadero
tipo: vf

enunciado: "{2, 2, 4, 4, 4, 6} representa el mismo conjunto que {2, 4, 6} — un conjunto nunca repite elementos, aunque se los escriba repetidos."

explicacion: |
  Por definición, un conjunto no tiene elementos duplicados.
```

### 22 — Aplicación real: bases de datos

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "basico"
  tags: ["conjuntos", "aplicacion"]

enunciado: "¿Dónde se usa la misma idea de pertenencia e inclusión de conjuntos, fuera de la matemática pura?"
tipo: mc
opciones_explicitas:
  - "En bases de datos (una fila 'pertenece' a una tabla que cumple ciertas condiciones) y en lógica proposicional"
  - "Sólo en geometría, para clasificar triángulos"
  - "No tiene ninguna aplicación fuera de la matemática pura"
respuesta: "En bases de datos (una fila 'pertenece' a una tabla que cumple ciertas condiciones) y en lógica proposicional"

explicacion: |
  Es el mismo vocabulario de fondo que usan las consultas de bases de
  datos y la lógica proposicional de Filosofía.
```

### 23 — Problema: cardinalidad de un conjunto por comprensión

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "avanzado"
  tags: ["conjuntos", "problema"]

variables:
  limite: uno_de([10, 15, 20, 25, 30])

respuesta: floor(limite / 2)
tipo: input

enunciado: "¿Cuántos elementos tiene el conjunto A = {{x : x es un número par positivo y x ≤ {limite}}}?"

pasos:
  - "Los pares positivos hasta {limite} son 2, 4, 6, ..., hasta el mayor par ≤ {limite}"
  - "Cantidad = {limite} ÷ 2 (redondeado hacia abajo) = {floor(limite / 2)}"

explicacion: |
  Cada 2 números hay exactamente un par, así que la cantidad de pares
  hasta un límite es ese límite dividido 2 (redondeado hacia abajo si
  el límite es impar).
```

### 24 — Cierre: para qué sirve este bloque

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve el vocabulario de pertenencia e inclusión de conjuntos?"
tipo: mc
opciones_explicitas:
  - "Es la base formal sobre la que se construyen las operaciones entre conjuntos, los diagramas de Venn y toda la combinatoria de este tronco"
  - "Sólo sirve para clasificar números pares e impares"
  - "Sólo se usa en un único ejercicio de examen"
respuesta: "Es la base formal sobre la que se construyen las operaciones entre conjuntos, los diagramas de Venn y toda la combinatoria de este tronco"

explicacion: |
  Sin esta base, "unión" e "intersección" (próximo módulo) serían sólo
  palabras sueltas, sin una definición formal detrás.
```
