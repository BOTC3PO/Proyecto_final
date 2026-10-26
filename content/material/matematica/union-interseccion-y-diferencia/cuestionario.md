# Matemática — Unión, intersección y diferencia (cuestionario, 26 preguntas VBLang)

> Tema: `CJ2`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es la unión de dos conjuntos

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "basico"
  tags: ["union", "vocabulario"]

enunciado: "¿Qué es la unión de dos conjuntos A ∪ B?"
tipo: mc
opciones_explicitas:
  - "Todos los elementos que están en A, en B, o en ambos, sin repetir ninguno"
  - "Sólo los elementos que están en A y en B a la vez"
  - "Sólo los elementos de A que no están en B"
respuesta: "Todos los elementos que están en A, en B, o en ambos, sin repetir ninguno"

explicacion: |
  Es la combinación completa de los dos conjuntos.
```

### 2 — Qué es la intersección de dos conjuntos

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "basico"
  tags: ["interseccion", "vocabulario"]

enunciado: "¿Qué es la intersección de dos conjuntos A ∩ B?"
tipo: mc
opciones_explicitas:
  - "Sólo los elementos que están en A y en B a la vez"
  - "Todos los elementos de A y de B juntos"
  - "Sólo los elementos de B que no están en A"
respuesta: "Sólo los elementos que están en A y en B a la vez"

explicacion: |
  Es lo que ambos conjuntos comparten.
```

### 3 — Qué es la diferencia A − B

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "basico"
  tags: ["diferencia", "vocabulario"]

enunciado: "¿Qué es la diferencia A − B?"
tipo: mc
opciones_explicitas:
  - "Los elementos de A que NO están en B"
  - "Los elementos de B que no están en A"
  - "Los elementos que están en A y en B a la vez"
respuesta: "Los elementos de A que NO están en B"

explicacion: |
  Se lee "A menos B" — se parte de A y se le quita lo que comparte con B.
```

### 4 — Problema: unión con conjuntos dados

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "intermedio"
  tags: ["union", "problema"]

enunciado: "Dados A = {1, 2, 3, 4} y B = {3, 4, 5, 6}, ¿cuál es A ∪ B?"
tipo: mc
opciones_explicitas:
  - "{1, 2, 3, 4, 5, 6}"
  - "{3, 4}"
  - "{1, 2}"
respuesta: "{1, 2, 3, 4, 5, 6}"

explicacion: |
  Se juntan todos los elementos de ambos, sin repetir el 3 y el 4 que
  comparten.
```

### 5 — Problema: intersección con los mismos conjuntos

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "intermedio"
  tags: ["interseccion", "problema"]

enunciado: "Dados A = {1, 2, 3, 4} y B = {3, 4, 5, 6}, ¿cuál es A ∩ B?"
tipo: mc
opciones_explicitas:
  - "{3, 4}"
  - "{1, 2, 3, 4, 5, 6}"
  - "{1, 2}"
respuesta: "{3, 4}"

explicacion: |
  Son los únicos dos elementos que aparecen en los dos conjuntos.
```

### 6 — Problema: diferencia A − B

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "intermedio"
  tags: ["diferencia", "problema"]

enunciado: "Dados A = {1, 2, 3, 4} y B = {3, 4, 5, 6}, ¿cuál es A − B?"
tipo: mc
opciones_explicitas:
  - "{1, 2}"
  - "{5, 6}"
  - "{3, 4}"
respuesta: "{1, 2}"

explicacion: |
  Es lo que queda de A después de sacarle lo que comparte con B (el 3
  y el 4).
```

### 7 — Problema: diferencia B − A (no es lo mismo)

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "avanzado"
  tags: ["diferencia", "problema"]

enunciado: "Con los mismos A = {1, 2, 3, 4} y B = {3, 4, 5, 6}, ¿cuál es B − A?"
tipo: mc
opciones_explicitas:
  - "{5, 6}"
  - "{1, 2}"
  - "{3, 4}"
respuesta: "{5, 6}"

explicacion: |
  B − A es distinto de A − B (pregunta 6) — la diferencia no es
  conmutativa.
```

### 8 — La diferencia no es conmutativa

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "intermedio"
  tags: ["diferencia"]

respuesta: verdadero
tipo: vf

enunciado: "En general, A − B no es lo mismo que B − A."

explicacion: |
  Se ve claro en el ejemplo de las preguntas 6 y 7: {1,2} contra {5,6}.
```

### 9 — La unión es conmutativa

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "intermedio"
  tags: ["union"]

respuesta: verdadero
tipo: vf

enunciado: "A ∪ B es siempre igual a B ∪ A, sin importar el orden."

explicacion: |
  Juntar los elementos de dos conjuntos no depende del orden en que se
  los mencione.
```

### 10 — La intersección es conmutativa

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "intermedio"
  tags: ["interseccion"]

respuesta: verdadero
tipo: vf

enunciado: "A ∩ B es siempre igual a B ∩ A, sin importar el orden."

explicacion: |
  Lo que comparten A y B es lo mismo que lo que comparten B y A.
```

### 11 — Completar: fórmula de la cardinalidad de la unión

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "avanzado"
  tags: ["union", "completar"]

tipo: completar
enunciado: "Completá: |A ∪ B| = |A| + |B| − ___."
respuestas_validas:
  - "|A ∩ B|"
  - "A ∩ B"

explicacion: |
  Se resta la intersección porque, si no, sus elementos se contarían
  dos veces.
```

### 12 — Problema: cardinalidad de la unión

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "avanzado"
  tags: ["union", "problema"]

variables:
  a: random(10, 30)
  b: random(10, 30)
  interseccion: random(1, 8)

respuesta: a + b - interseccion
tipo: input

enunciado: "Un conjunto A tiene {a} elementos y un conjunto B tiene {b} elementos. Si A y B comparten {interseccion} elementos, ¿cuántos elementos tiene A ∪ B?"

pasos:
  - "|A∪B| = |A| + |B| − |A∩B| = {a} + {b} − {interseccion} = {a + b - interseccion}"

explicacion: |
  Se restan los elementos compartidos para no contarlos dos veces.
```

### 13 — Problema: cardinalidad de la intersección (despejando)

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "avanzado"
  tags: ["interseccion", "problema"]

variables:
  a: random(10, 30)
  b: random(10, 30)
  interseccion_real: random(1, 8)

respuesta: interseccion_real
tipo: input

enunciado: "Un conjunto A tiene {a} elementos, un conjunto B tiene {b} elementos, y A ∪ B tiene {a + b - interseccion_real} elementos. ¿Cuántos elementos comparten A y B (|A ∩ B|)?"

pasos:
  - "|A∩B| = |A| + |B| − |A∪B| = {a} + {b} − {a + b - interseccion_real} = {interseccion_real}"

explicacion: |
  Es la misma fórmula, despejada para la intersección en vez de la unión.
```

### 14 — Problema: cardinalidad de la diferencia

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "avanzado"
  tags: ["diferencia", "problema"]

variables:
  a: random(15, 40)
  interseccion: random(1, 10)

respuesta: a - interseccion
tipo: input

enunciado: "Un conjunto A tiene {a} elementos, de los cuales {interseccion} también pertenecen a B. ¿Cuántos elementos tiene A − B?"

pasos:
  - "|A−B| = |A| − |A∩B| = {a} − {interseccion} = {a - interseccion}"

explicacion: |
  A − B es lo de A que no comparte con B, así que se le resta la parte
  compartida.
```

### 15 — Conjuntos disjuntos

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "intermedio"
  tags: ["disjuntos"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos conjuntos A y B no comparten ningún elemento, se dice que son disjuntos, y A ∩ B = ∅."

explicacion: |
  Es el caso extremo: cero elementos en común.
```

### 16 — Problema: unión de conjuntos disjuntos

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "intermedio"
  tags: ["disjuntos", "problema"]

variables:
  a: random(5, 20)
  b: random(5, 20)

respuesta: a + b
tipo: input

enunciado: "Un conjunto A tiene {a} elementos y un conjunto B tiene {b} elementos. A y B son disjuntos (no comparten nada). ¿Cuántos elementos tiene A ∪ B?"

pasos:
  - "Como |A∩B| = 0: |A∪B| = |A| + |B| = {a} + {b} = {a + b}"

explicacion: |
  Sin nada compartido, no hace falta restar nada — se suman directo.
```

### 17 — Qué significa que dos conjuntos sean disjuntos

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "basico"
  tags: ["disjuntos", "vocabulario"]

enunciado: "¿Qué significa que dos conjuntos sean disjuntos?"
tipo: mc
opciones_explicitas:
  - "Que no comparten ningún elemento"
  - "Que tienen la misma cantidad de elementos"
  - "Que uno es subconjunto del otro"
respuesta: "Que no comparten ningún elemento"

explicacion: |
  Su intersección es el conjunto vacío.
```

### 18 — Ordenar: pasos para calcular |A∪B|

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "avanzado"
  tags: ["union", "ordenar"]

enunciado: "Ordená los pasos para calcular |A∪B|, sabiendo |A|, |B| y |A∩B|."
tipo: ordenar
opciones_explicitas:
  - "El número que queda es |A∪B|"
  - "Sumar |A| + |B|"
  - "Restar |A∩B| a ese resultado"
respuesta_orden: ["Sumar |A| + |B|", "Restar |A∩B| a ese resultado", "El número que queda es |A∪B|"]
explicacion: |
  El paso de restar la intersección es el que evita el doble conteo.
```

### 19 — Aplicación real: consultas de bases de datos

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "¿Dónde se usa la misma idea de unión e intersección de conjuntos, fuera de la matemática pura?"
tipo: mc
opciones_explicitas:
  - "En consultas de bases de datos: pedir filas que cumplan una condición Y otra (intersección) o cualquiera de dos condiciones O (unión)"
  - "Sólo en geometría, para calcular áreas"
  - "No tiene ninguna aplicación fuera de la matemática pura"
respuesta: "En consultas de bases de datos: pedir filas que cumplan una condición Y otra (intersección) o cualquiera de dos condiciones O (unión)"

explicacion: |
  Es el mismo principio que después usa el álgebra relacional de
  bases de datos (Informática).
```

### 20 — Y = intersección, O = unión

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "intermedio"
  tags: ["aplicacion"]

respuesta: verdadero
tipo: vf

enunciado: "En una consulta con condiciones combinadas, el conector 'Y' corresponde a una intersección, y el conector 'O' corresponde a una unión."

explicacion: |
  "Cumple A Y B" son los elementos en ambos (intersección); "cumple A
  O B" son los elementos en cualquiera de los dos (unión).
```

### 21 — Problema: diferencia cuando B es subconjunto de A

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "avanzado"
  tags: ["diferencia", "problema"]

variables:
  a: random(20, 50)
  b: random(1, 15)

respuesta: a - b
tipo: input

enunciado: "Un conjunto A tiene {a} elementos, y B ⊆ A tiene {b} elementos (todos los de B ya están en A). ¿Cuántos elementos tiene A − B?"

pasos:
  - "Como B ⊆ A, todo B está incluido en la parte compartida: |A−B| = |A| − |B| = {a} − {b} = {a - b}"

explicacion: |
  Al ser B subconjunto de A, restar B de A es simplemente restar todos
  sus elementos.
```

### 22 — Si B ⊆ A, entonces A ∪ B = A

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "avanzado"
  tags: ["union"]

respuesta: verdadero
tipo: vf

enunciado: "Si B es subconjunto de A (B ⊆ A), entonces A ∪ B es exactamente igual a A (unir no agrega nada nuevo)."

explicacion: |
  Todo lo que tiene B ya estaba en A, así que juntarlos no cambia nada.
```

### 23 — Si B ⊆ A, entonces A ∩ B = B

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "avanzado"
  tags: ["interseccion"]

respuesta: verdadero
tipo: vf

enunciado: "Si B es subconjunto de A (B ⊆ A), entonces A ∩ B es exactamente igual a B."

explicacion: |
  Todo elemento de B ya está en A, así que lo que comparten es
  exactamente todo B.
```

### 24 — La unión nunca es más chica que cualquiera de los dos conjuntos

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "avanzado"
  tags: ["union"]

respuesta: verdadero
tipo: vf

enunciado: "|A ∪ B| siempre es mayor o igual que |A| y que |B|, sin importar qué conjuntos sean."

explicacion: |
  La unión sólo puede agregar elementos, nunca quitarlos.
```

### 25 — La intersección nunca es más grande que cualquiera de los dos conjuntos

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "avanzado"
  tags: ["interseccion"]

respuesta: verdadero
tipo: vf

enunciado: "|A ∩ B| siempre es menor o igual que |A| y que |B|, sin importar qué conjuntos sean."

explicacion: |
  La intersección sólo puede quedarse con una parte (o todo) de cada
  conjunto, nunca con más de lo que cada uno tiene.
```

### 26 — Cierre: para qué sirve este bloque

```
metadata:
  materia: "matematicas"
  tema: "union_interseccion_y_diferencia"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirven la unión, la intersección y la diferencia de conjuntos?"
tipo: mc
opciones_explicitas:
  - "Para combinar conjuntos de formas distintas y calcular cuántos elementos resultan, sin necesidad de listarlos uno por uno"
  - "Sólo sirven para dibujar círculos superpuestos"
  - "Sólo aplican a conjuntos de números"
respuesta: "Para combinar conjuntos de formas distintas y calcular cuántos elementos resultan, sin necesidad de listarlos uno por uno"

explicacion: |
  Son la base algebraica que el próximo módulo (diagramas de Venn)
  representa visualmente.
```
