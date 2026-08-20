# Examen jefe — Maestro de conjuntos y vectores

> Logro #83. Completaste el examen dominando uniones, intersecciones, vectores y variables aleatorias. Pool agregado de los `cuestionario.md` ya validados de sus 6 temas. **166 preguntas totales** en 6/6 secciones.

---

## Sección: union-interseccion-y-diferencia (26 preguntas)

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
respuesta_orden:
  - "Sumar |A| + |B|"
  - "Restar |A∩B| a ese resultado"
  - "El número que queda es |A∪B|"

explicacion: |
  El paso de restar la intersección es el que evita el doble conteo.
```

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

## Sección: valor-posicional (40 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "identificar_cifra"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: c * 100 + d * 10 + u

respuesta: u
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿qué cifra ocupa el lugar de las unidades?"

pasos:
  - "Las unidades son la cifra más a la derecha de {numero}: {u}"

explicacion: |
  La cifra de las unidades es siempre la última, la que está más a la
  derecha del número.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "identificar_cifra"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: c * 100 + d * 10 + u

respuesta: d
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿qué cifra ocupa el lugar de las decenas?"

pasos:
  - "Las decenas son la segunda cifra desde la derecha de {numero}: {d}"

explicacion: |
  La cifra de las decenas es la que está un lugar a la izquierda de las
  unidades.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "identificar_cifra"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: c * 100 + d * 10 + u

respuesta: c
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿qué cifra ocupa el lugar de las centenas?"

pasos:
  - "Las centenas son la tercera cifra desde la derecha de {numero}: {c}"

explicacion: |
  La cifra de las centenas es la que está dos lugares a la izquierda de las
  unidades.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "identificar_cifra"]

variables:
  m: random(1, 9)
  c: random(0, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: m * 1000 + c * 100 + d * 10 + u

respuesta: m
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿qué cifra ocupa el lugar de las unidades de mil?"

pasos:
  - "Las unidades de mil son la cuarta cifra desde la derecha de {numero}: {m}"

explicacion: |
  Cada vez que se agrega un lugar más a la izquierda, el valor de la
  posición se multiplica por 10: unidades → decenas → centenas →
  unidades de mil.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "identificar_cifra"]

variables:
  dm: random(1, 9)
  m: random(0, 9)
  c: random(0, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: dm * 10000 + m * 1000 + c * 100 + d * 10 + u

respuesta: dm
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿qué cifra ocupa el lugar de las decenas de mil?"

pasos:
  - "Las decenas de mil son la quinta cifra desde la derecha de {numero}: {dm}"

explicacion: |
  Con 5 cifras, la primera de la izquierda es la de las decenas de mil.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "identificar_cifra"]

variables:
  cm: random(1, 9)
  dm: random(0, 9)
  m: random(0, 9)
  c: random(0, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: cm * 100000 + dm * 10000 + m * 1000 + c * 100 + d * 10 + u

respuesta: cm
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿qué cifra ocupa el lugar de las centenas de mil?"

pasos:
  - "Las centenas de mil son la sexta cifra desde la derecha de {numero}: {cm}"

explicacion: |
  Con 6 cifras, la primera de la izquierda es la de las centenas de mil.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "valor_de_cifra"]

variables:
  c: random(1, 9)
  d: random(1, 9)
  u: random(0, 9)
  numero: c * 100 + d * 10 + u

respuesta: d * 10
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿cuánto VALE la cifra de las decenas (no cuál es, sino cuánto vale)?"

pasos:
  - "La cifra de las decenas es {d}, y en ese lugar vale {d} × 10 = {d * 10}"

explicacion: |
  No es lo mismo la cifra que su valor: la cifra es sólo el dígito (0-9); el
  valor es ese dígito multiplicado por lo que vale su posición.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "valor_de_cifra"]

variables:
  m: random(1, 9)
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: m * 1000 + c * 100 + d * 10 + u

respuesta: c * 100
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿cuánto vale la cifra de las centenas?"

pasos:
  - "La cifra de las centenas es {c}, y en ese lugar vale {c} × 100 = {c * 100}"

explicacion: |
  El valor de una cifra es siempre el dígito multiplicado por la potencia de
  10 que le corresponde a su lugar.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "valor_de_cifra"]

variables:
  dm: random(1, 9)
  m: random(1, 9)
  c: random(0, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: dm * 10000 + m * 1000 + c * 100 + d * 10 + u

respuesta: m * 1000
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿cuánto vale la cifra de las unidades de mil?"

pasos:
  - "La cifra de las unidades de mil es {m}, y en ese lugar vale {m} × 1.000 = {m * 1000}"

explicacion: |
  A partir de las unidades de mil, cada lugar vale 1.000 veces más que el
  dígito solo, antes de seguir multiplicando por 10 hacia la izquierda.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "descomposicion"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: c * 100 + d * 10 + u

respuesta: numero
tipo: input
tolerancia_abs: 0

enunciado: "¿Qué número resulta de {c} centenas + {d} decenas + {u} unidades?"

pasos:
  - "{c} × 100 + {d} × 10 + {u} = {numero}"

explicacion: |
  Componer un número es la operación inversa a descomponerlo: se suman los
  valores de cada cifra en su lugar.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "descomposicion"]

variables:
  m: random(1, 9)
  c: random(0, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: m * 1000 + c * 100 + d * 10 + u

respuesta: numero
tipo: input
tolerancia_abs: 0

enunciado: "¿Qué número resulta de {m} unidades de mil + {c} centenas + {d} decenas + {u} unidades?"

pasos:
  - "{m} × 1.000 + {c} × 100 + {d} × 10 + {u} = {numero}"

explicacion: |
  Cada término de la descomposición aporta el valor de su cifra en su
  lugar; sumados dan el número completo.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "descomposicion"]

variables:
  dm: random(1, 9)
  m: random(0, 9)
  c: random(0, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: dm * 10000 + m * 1000 + c * 100 + d * 10 + u

respuesta: numero
tipo: input
tolerancia_abs: 0

enunciado: "¿Qué número resulta de {dm} decenas de mil + {m} unidades de mil + {c} centenas + {d} decenas + {u} unidades?"

pasos:
  - "{dm} × 10.000 + {m} × 1.000 + {c} × 100 + {d} × 10 + {u} = {numero}"

explicacion: |
  Con más cifras el procedimiento es el mismo: sumar el valor posicional de
  cada una.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "comparacion"]

variables:
  a: random(10, 999)
  b: random(10, 999)

respuesta: (longitud(concatenar(a)) > longitud(concatenar(b)))
tipo: vf

enunciado: "¿Tiene {a} más cifras que {b}?"

explicacion: |
  Antes de mirar cifra por cifra, conviene contar cuántas cifras tiene cada
  número: el que tiene más cifras es siempre el mayor.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "comparacion"]

variables:
  a: random(1, 9999)
  b: random(1, 9999)

restricciones:
  - longitud(concatenar(a)) != longitud(concatenar(b))

respuesta: max(a, b)
tipo: mc
opciones_explicitas:
  - a
  - b

enunciado: "¿Cuál de estos dos números tiene más cifras: {a} o {b}?"

explicacion: |
  La cantidad de cifras decide directamente cuál número es mayor, sin
  necesidad de comparar cifra por cifra.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "comparacion"]

variables:
  c: random(1, 9)
  d1: random(0, 9)
  d2: random(0, 9)
  u1: random(0, 9)
  u2: random(0, 9)
  a: c * 100 + d1 * 10 + u1
  b: c * 100 + d2 * 10 + u2

restricciones:
  - d1 != d2

respuesta: (a > b)
tipo: vf

enunciado: "{a} y {b} tienen la misma cifra de centenas. ¿Es {a} mayor que {b}?"

explicacion: |
  Cuando dos números tienen la misma cantidad de cifras y coinciden en la
  primera, hay que seguir comparando la próxima cifra hacia la derecha
  hasta encontrar una diferencia.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "comparacion"]

variables:
  m: random(1, 9)
  resto1: random(0, 999)
  resto2: random(0, 999)
  a: m * 1000 + resto1
  b: m * 1000 + resto2

restricciones:
  - resto1 != resto2

respuesta: max(a, b)
tipo: mc
opciones_explicitas:
  - a
  - b

enunciado: "{a} y {b} tienen la misma cifra de unidades de mil. ¿Cuál de los dos es mayor?"

explicacion: |
  Si la primera cifra empata, la decisión queda en manos de las cifras
  siguientes, comparadas en el mismo orden (de izquierda a derecha).
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "comparacion"]

variables:
  c: random(1, 9)
  d1: random(0, 8)
  d2: random(0, 8)
  u: random(0, 9)
  a: c * 100 + d1 * 10 + u
  b: c * 100 + d2 * 10 + u

restricciones:
  - d1 != d2

respuesta: (a < b)
tipo: vf

enunciado: "{a} y {b} tienen la misma cifra de centenas y de unidades, sólo cambia la de decenas ({d1} contra {d2}). ¿Es {a} menor que {b}?"

explicacion: |
  Cuando todas las demás cifras coinciden, el número menor es el que tiene
  la cifra más chica en la primera posición donde difieren.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "redondeo"]

variables:
  numero: random(11, 988)
  resultado: redondear(numero / 10, 0) * 10

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Redondeá {numero} a la decena más cercana."

pasos:
  - "Se mira la cifra de las unidades de {numero} para decidir si la decena sube o queda igual: resultado {resultado}"

explicacion: |
  Se mira la cifra que está un lugar a la derecha de la posición a
  redondear (acá, las unidades): 5 o más, la decena sube; menos de 5, queda
  igual.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "redondeo"]

variables:
  base: random(1, 98)
  numero: base * 10 + 5
  resultado: redondear(numero / 10, 0) * 10

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Redondeá {numero} a la decena más cercana."

pasos:
  - "La cifra de las unidades es 5: por convención, la decena sube. {numero} → {resultado}"

explicacion: |
  Cuando la cifra que decide el redondeo es exactamente 5, la regla es que
  la posición anterior sube (no se deja igual).
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "redondeo"]

variables:
  numero: random(101, 9888)
  resultado: redondear(numero / 100, 0) * 100

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Redondeá {numero} a la centena más cercana."

pasos:
  - "Se mira la cifra de las decenas de {numero} para decidir: resultado {resultado}"

explicacion: |
  Igual que redondear a la decena, pero mirando la cifra de las decenas
  (un lugar a la derecha de las centenas).
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "redondeo"]

variables:
  base: random(1, 98)
  numero: base * 100 + 50
  resultado: redondear(numero / 100, 0) * 100

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Redondeá {numero} a la centena más cercana."

pasos:
  - "La cifra de las decenas es 5: la centena sube. {numero} → {resultado}"

explicacion: |
  Mismo criterio que con las decenas: en el caso frontera (cifra 5), la
  posición objetivo sube.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "redondeo"]

variables:
  numero: random(1001, 98888)
  resultado: redondear(numero / 1000, 0) * 1000

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Redondeá {numero} al millar (unidad de mil) más cercano."

pasos:
  - "Se mira la cifra de las centenas de {numero} para decidir: resultado {resultado}"

explicacion: |
  El mismo criterio de siempre, ahora mirando la cifra de las centenas para
  decidir si la unidad de mil sube o queda igual.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "decimales"]

variables:
  entero: random(1, 99)
  t: random(1, 9)
  h: random(0, 9)
  numero: entero + t / 10 + h / 100

respuesta: t
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿qué cifra ocupa el lugar de los décimos?"

pasos:
  - "Los décimos son la primera cifra después de la coma: {t}"

explicacion: |
  Del otro lado de la coma la lógica se invierte: la primera posición
  (décimos) vale ÷10, no ×10.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "decimales"]

variables:
  entero: random(1, 99)
  t: random(0, 9)
  h: random(1, 9)
  numero: entero + t / 10 + h / 100

respuesta: h
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿qué cifra ocupa el lugar de los centésimos?"

pasos:
  - "Los centésimos son la segunda cifra después de la coma: {h}"

explicacion: |
  Los centésimos valen ÷100: cada lugar después de la coma sigue dividiendo
  por 10 respecto al anterior.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "avanzado"
  tags: ["valor_posicional", "decimales", "valor_de_cifra"]

variables:
  entero: random(1, 99)
  t: random(1, 9)
  h: random(0, 9)
  numero: entero + t / 10 + h / 100

respuesta: t / 10
tipo: input
tolerancia_abs: 0.01

enunciado: "En el número {numero}, ¿cuánto vale la cifra de los décimos?"

pasos:
  - "La cifra de los décimos es {t}, y en ese lugar vale {t} ÷ 10 = {t / 10}"

explicacion: |
  Igual que del lado entero: el valor es la cifra multiplicada (acá,
  dividida) por lo que vale su posición.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "cantidad_de_cifras"]

variables:
  numero: random(100, 98765)

respuesta: longitud(concatenar(numero))
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas cifras tiene el número {numero}?"

explicacion: |
  Se cuentan todos los dígitos del número, de izquierda a derecha, sin
  saltear ninguno.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "cantidad_de_cifras"]

variables:
  numero: random(1000000, 987654321)

respuesta: longitud(concatenar(numero))
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas cifras tiene el número {numero}?"

explicacion: |
  El procedimiento es el mismo con números grandes: contar los dígitos, uno
  por uno.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "identificar_cifra"]

variables:
  m: random(1, 9)
  c: random(0, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: m * 1000 + c * 100 + d * 10 + u

respuesta: m
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿cuál es la cifra que ocupa el lugar de mayor valor (la que más vale)?"

pasos:
  - "La cifra de mayor valor es siempre la primera de la izquierda: {m}"

explicacion: |
  La cifra de mayor valor posicional es la más a la izquierda: es la que
  está multiplicada por la potencia de 10 más grande.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "vocabulario"]

enunciado: "¿Cómo se llama el lugar de la 3ª cifra contando desde la derecha de un número?"
tipo: mc
opciones_explicitas:
  - "Unidades"
  - "Decenas"
  - "Centenas"
respuesta: "Centenas"

explicacion: |
  Contando desde la derecha: 1ª unidades, 2ª decenas, 3ª centenas.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "vocabulario"]

enunciado: "¿Cómo se llama el lugar de la cifra que está más a la derecha en cualquier número entero?"
tipo: mc
opciones_explicitas:
  - "Unidades"
  - "Decenas"
  - "Centenas"
respuesta: "Unidades"

explicacion: |
  La cifra más a la derecha de un número entero siempre ocupa el lugar de
  las unidades.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En el número 4.257, la cifra 2 vale 200."

explicacion: |
  El 2 de 4.257 está en el lugar de las centenas: 2 × 100 = 200.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "En el número 4.257, la cifra 5 vale 5."

explicacion: |
  El 5 de 4.257 está en el lugar de las decenas, no de las unidades: vale
  5 × 10 = 50, no 5.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "descomposicion"]

variables:
  c: random(1, 9)
  d: random(1, 9)
  u: random(0, 9)
  numero: c * 100 + d * 10 + u

tipo: completar
enunciado: "Completá: {c} × 100 + ___ × 10 + {u} = {numero}."
respuestas_validas:
  - d

explicacion: |
  El hueco es la cifra de las decenas: la única que hace que la suma dé
  exactamente el número de la derecha.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "descomposicion"]

variables:
  m: random(1, 9)
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: m * 1000 + c * 100 + d * 10 + u

tipo: completar
enunciado: "Completá: {m} × 1.000 + ___ × 100 + {d} × 10 + {u} = {numero}."
respuestas_validas:
  - c

explicacion: |
  Se despeja la cifra que falta viendo cuál hace que la suma total coincida
  con el número dado.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "orden"]

tipo: ordenar
enunciado: "Ordená estas cifras de menor a mayor."
opciones_explicitas:
  - "7"
  - "2"
  - "9"
  - "4"
respuesta_orden: ["2", "4", "7", "9"]

explicacion: |
  Ordenar cifras sueltas es comparar dígitos, sin que ningún lugar
  posicional entre en juego todavía.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "composicion"]

variables:
  par: n_de([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)
  d1: primero(par)
  d2: ultimo(par)
  menor_digito: primero(ordenar(par))
  mayor_digito: ultimo(ordenar(par))

restricciones:
  - d1 != d2

respuesta: mayor_digito * 10 + menor_digito
tipo: input
tolerancia_abs: 0

enunciado: "Con las cifras {d1} y {d2}, ¿cuál es el mayor número de 2 cifras que se puede formar (usando cada cifra una sola vez)?"

pasos:
  - "Para que sea el mayor posible, la cifra más grande va en las decenas: {mayor_digito} decenas + {menor_digito} unidades = {mayor_digito * 10 + menor_digito}"

explicacion: |
  Para armar el número más grande posible con cifras dadas, la cifra más
  grande siempre va en el lugar de mayor valor.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "composicion"]

variables:
  par: n_de([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)
  d1: primero(par)
  d2: ultimo(par)
  menor_digito: primero(ordenar(par))
  mayor_digito: ultimo(ordenar(par))

restricciones:
  - d1 != d2

respuesta: menor_digito * 10 + mayor_digito
tipo: input
tolerancia_abs: 0

enunciado: "Con las cifras {d1} y {d2}, ¿cuál es el menor número de 2 cifras que se puede formar (usando cada cifra una sola vez)?"

pasos:
  - "Para que sea el menor posible, la cifra más chica va en las decenas: {menor_digito} decenas + {mayor_digito} unidades = {menor_digito * 10 + mayor_digito}"

explicacion: |
  Al revés que para el mayor número: la cifra más chica va en el lugar de
  mayor valor, para que pese lo menos posible.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "descomposicion"]

variables:
  numero: random(1001, 98765)

respuesta: floor(numero / 1000)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas unidades de mil completas tiene el número {numero}?"

pasos:
  - "{numero} ÷ 1.000, tomando sólo la parte entera: {floor(numero / 1000)}"

explicacion: |
  Es lo mismo que preguntar por las cifras que quedan a la izquierda del
  lugar de las centenas, leídas como un solo número.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "descomposicion"]

variables:
  numero: random(101, 9876)

respuesta: floor(numero / 100)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas centenas completas tiene el número {numero}?"

pasos:
  - "{numero} ÷ 100, tomando sólo la parte entera: {floor(numero / 100)}"

explicacion: |
  Son las cifras que quedan a la izquierda del lugar de las decenas, leídas
  como un solo número.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El valor de una cifra depende del lugar que ocupa dentro del número, no sólo de qué dígito es."

explicacion: |
  Es la idea central de todo el tema: el mismo dígito vale distinto según
  esté en el lugar de las unidades, las decenas, las centenas, etc.
```

## Sección: variable-aleatoria-discreta-continua (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "basico"
  tags: ["variable_aleatoria", "vocabulario"]

enunciado: "¿Qué es una variable aleatoria?"
tipo: mc
opciones_explicitas:
  - "Un número que depende del resultado de un experimento azaroso, cuyo valor no se conoce de antemano pero cuyas probabilidades sí se pueden describir"
  - "Un valor que siempre es el mismo, sin importar el experimento"
  - "Otro nombre para la media de un conjunto de datos"
respuesta: "Un número que depende del resultado de un experimento azaroso, cuyo valor no se conoce de antemano pero cuyas probabilidades sí se pueden describir"

explicacion: |
  Antes del experimento no se sabe qué valor va a tomar, pero sí cómo
  se reparten las probabilidades entre los valores posibles.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "basico"
  tags: ["discreta", "vocabulario"]

enunciado: "¿Qué hace que una variable aleatoria sea DISCRETA?"
tipo: mc
opciones_explicitas:
  - "Que sus valores posibles se puedan enumerar (contar uno por uno: 0, 1, 2, 3...)"
  - "Que sólo pueda tomar el valor 0 o el valor 1"
  - "Que su valor esperado sea siempre un número entero"
respuesta: "Que sus valores posibles se puedan enumerar (contar uno por uno: 0, 1, 2, 3...)"

explicacion: |
  Como la cantidad de caras en varios tiros de moneda, o la cantidad
  de llamadas en una hora.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "basico"
  tags: ["continua", "vocabulario"]

enunciado: "¿Qué hace que una variable aleatoria sea CONTINUA?"
tipo: mc
opciones_explicitas:
  - "Que pueda tomar cualquier valor dentro de un intervalo, no sólo enteros contables"
  - "Que nunca pueda tomar valores negativos"
  - "Que siempre esté relacionada con el tiempo"
respuesta: "Que pueda tomar cualquier valor dentro de un intervalo, no sólo enteros contables"

explicacion: |
  Como la altura de una persona o el tiempo de espera de un colectivo
  — siempre hay un valor más preciso posible entre dos cualesquiera.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "intermedio"
  tags: ["clasificar"]

enunciado: "¿La 'cantidad de hijos de una familia elegida al azar' es una variable discreta o continua?"
tipo: mc
opciones_explicitas:
  - "Discreta: se puede enumerar (0, 1, 2, 3 hijos...), no hay valores intermedios posibles"
  - "Continua: puede tomar cualquier valor decimal"
respuesta: "Discreta: se puede enumerar (0, 1, 2, 3 hijos...), no hay valores intermedios posibles"

explicacion: |
  No existe "2,5 hijos" como resultado posible del conteo.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "intermedio"
  tags: ["clasificar"]

enunciado: "¿La 'altura de una persona elegida al azar' es una variable discreta o continua?"
tipo: mc
opciones_explicitas:
  - "Continua: puede tomar cualquier valor dentro de un rango (1,73 m, 1,734 m, 1,7341 m...)"
  - "Discreta: sólo puede valer números enteros de metros"
respuesta: "Continua: puede tomar cualquier valor dentro de un rango (1,73 m, 1,734 m, 1,7341 m...)"

explicacion: |
  Siempre existe una medición más precisa posible entre dos alturas
  cualesquiera.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "intermedio"
  tags: ["clasificar"]

enunciado: "¿La 'cantidad de llamadas que recibe un call center en una hora' es una variable discreta o continua?"
tipo: mc
opciones_explicitas:
  - "Discreta: se puede contar (0, 1, 2, 3 llamadas...)"
  - "Continua: puede tomar cualquier valor decimal"
respuesta: "Discreta: se puede contar (0, 1, 2, 3 llamadas...)"

explicacion: |
  Es el ejemplo clásico de `../distribucion-de-poisson/`.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "intermedio"
  tags: ["clasificar"]

enunciado: "¿El 'tiempo de espera hasta que llega el próximo colectivo' es una variable discreta o continua?"
tipo: mc
opciones_explicitas:
  - "Continua: puede tomar cualquier valor (3 minutos, 3,5 minutos, 3,52 minutos...)"
  - "Discreta: sólo puede valer una cantidad entera de minutos"
respuesta: "Continua: puede tomar cualquier valor (3 minutos, 3,5 minutos, 3,52 minutos...)"

explicacion: |
  Es el ejemplo clásico de `../distribucion-exponencial/`.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "avanzado"
  tags: ["discreta", "continua"]

respuesta: verdadero
tipo: vf

enunciado: "Los valores posibles de una variable discreta se pueden enumerar uno por uno (aunque sean infinitos), mientras que los de una variable continua no — siempre hay un valor intermedio más preciso entre dos cualesquiera."

explicacion: |
  Esa es la diferencia central entre ambos tipos.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "intermedio"
  tags: ["discreta"]

respuesta: verdadero
tipo: vf

enunciado: "Para una variable aleatoria discreta, tiene sentido preguntar directamente P(X = k) (la probabilidad de un valor exacto) y armar una tabla con la probabilidad de cada valor posible."

explicacion: |
  Es exactamente lo que hace `../distribucion-binomial/` con `P(X=k)`.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "avanzado"
  tags: ["continua"]

respuesta: verdadero
tipo: vf

enunciado: "Para una variable aleatoria continua, la probabilidad de que tome un valor EXACTO (por ejemplo, que una persona mida exactamente 1,730000... m) es esencialmente cero — hay que preguntar por intervalos en cambio."

explicacion: |
  Por eso con variables continuas se pregunta P(a ≤ X ≤ b), no
  P(X = un valor puntual).
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "avanzado"
  tags: ["continua", "completar"]

tipo: completar
enunciado: "Completá: para una variable continua, en vez de preguntar por un valor exacto, se pregunta por la probabilidad de que caiga dentro de un ___."
respuestas_validas:
  - "intervalo"
  - "rango"

explicacion: |
  Como "¿cuál es la probabilidad de que el colectivo tarde entre 5 y
  10 minutos?".
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "avanzado"
  tags: ["discreta", "problema"]

variables:
  p0: uno_de([0.2, 0.3, 0.25])
  p1: uno_de([0.4, 0.45, 0.5])

respuesta: redondear(1 - p0 - p1, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una variable aleatoria discreta X toma los valores 0, 1 y 2, con P(X=0)={p0} y P(X=1)={p1}. Como la suma de todas las probabilidades debe dar 1, ¿cuánto vale P(X=2)?"

pasos:
  - "P(X=2) = 1 − {p0} − {p1} = {redondear(1 - p0 - p1, 2)}"

explicacion: |
  Las probabilidades de todos los valores posibles de una variable
  discreta siempre suman exactamente 1.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "intermedio"
  tags: ["discreta"]

respuesta: verdadero
tipo: vf

enunciado: "La suma de las probabilidades de TODOS los valores posibles de una variable aleatoria discreta siempre da exactamente 1."

explicacion: |
  Porque la variable necesariamente toma alguno de esos valores.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "basico"
  tags: ["discreta", "aplicacion"]

enunciado: "¿Cuál de estas distribuciones ya vistas describe una variable DISCRETA?"
tipo: mc
opciones_explicitas:
  - "La distribución binomial (P(X=k), cantidad de éxitos)"
  - "La distribución normal (campana de Gauss)"
respuesta: "La distribución binomial (P(X=k), cantidad de éxitos)"

explicacion: |
  La binomial cuenta un número entero de éxitos — siempre enumerable.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "basico"
  tags: ["continua", "aplicacion"]

enunciado: "¿Cuál de estas distribuciones ya vistas describe una variable CONTINUA?"
tipo: mc
opciones_explicitas:
  - "La distribución normal (campana de Gauss)"
  - "La distribución binomial (P(X=k), cantidad de éxitos)"
respuesta: "La distribución normal (campana de Gauss)"

explicacion: |
  La normal describe una magnitud que puede tomar cualquier valor
  real, no un conteo de éxitos.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "avanzado"
  tags: ["continua"]

enunciado: "Para el tiempo de espera de un colectivo (variable continua), ¿cuál de estas preguntas tiene sentido hacer?"
tipo: mc
opciones_explicitas:
  - "¿Cuál es la probabilidad de que tarde ENTRE 5 y 10 minutos?"
  - "¿Cuál es la probabilidad de que tarde EXACTAMENTE 7,000000... minutos?"
respuesta: "¿Cuál es la probabilidad de que tarde ENTRE 5 y 10 minutos?"

explicacion: |
  La segunda pregunta, para una variable continua, tiene probabilidad
  esencialmente cero.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "intermedio"
  tags: ["clasificar", "problema"]

enunciado: "La cantidad de autos que pasan por un peaje en una hora, ¿con qué tipo de distribución se modela: discreta o continua?"
tipo: mc
opciones_explicitas:
  - "Discreta — es un conteo de eventos (autos) en un intervalo fijo de tiempo, el mismo tipo de caso que resuelve la distribución de Poisson"
  - "Continua — puede tomar cualquier valor decimal"
respuesta: "Discreta — es un conteo de eventos (autos) en un intervalo fijo de tiempo, el mismo tipo de caso que resuelve la distribución de Poisson"

explicacion: |
  Contar cuántos autos pasan es siempre un número entero.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "intermedio"
  tags: ["clasificar", "problema"]

enunciado: "El tiempo que pasa entre la llegada de un cliente y la del siguiente a un local, ¿con qué tipo de distribución se modela: discreta o continua?"
tipo: mc
opciones_explicitas:
  - "Continua — es una medición de tiempo que puede tomar cualquier valor, el mismo tipo de caso que resuelve la distribución exponencial"
  - "Discreta — sólo puede valer una cantidad entera de minutos"
respuesta: "Continua — es una medición de tiempo que puede tomar cualquier valor, el mismo tipo de caso que resuelve la distribución exponencial"

explicacion: |
  El tiempo entre eventos siempre se puede medir con más precisión.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "avanzado"
  tags: ["aplicacion"]

enunciado: "¿Por qué conviene preguntarse primero 'discreta o continua' antes de elegir qué distribución usar para modelar un problema?"
tipo: mc
opciones_explicitas:
  - "Porque cada distribución (binomial, Poisson, normal, exponencial) sirve para un tipo específico de variable — usar una discreta para modelar algo continuo (o viceversa) directamente no tiene sentido matemático"
  - "No importa cuál se elija, todas las distribuciones dan el mismo resultado"
  - "Sólo importa para variables continuas, nunca para las discretas"
respuesta: "Porque cada distribución (binomial, Poisson, normal, exponencial) sirve para un tipo específico de variable — usar una discreta para modelar algo continuo (o viceversa) directamente no tiene sentido matemático"

explicacion: |
  Es el criterio que organiza las cuatro distribuciones de esta cadena
  en dos pares (discretas / continuas).
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve distinguir entre variable aleatoria discreta y continua?"
tipo: mc
opciones_explicitas:
  - "Para saber qué herramienta matemática corresponde: tablas de P(X=k) y distribuciones como binomial/Poisson para lo discreto, curvas de densidad y distribuciones como normal/exponencial para lo continuo"
  - "Es sólo una diferencia de vocabulario, sin consecuencias prácticas"
  - "Sólo se usa para clasificar problemas de Física, no de estadística"
respuesta: "Para saber qué herramienta matemática corresponde: tablas de P(X=k) y distribuciones como binomial/Poisson para lo discreto, curvas de densidad y distribuciones como normal/exponencial para lo continuo"

explicacion: |
  Es el puente hacia `../distribucion-exponencial/` y
  `../distribucion-de-poisson/`, los dos módulos que siguen.
```

## Sección: variaciones (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "basico"
  tags: ["variaciones", "vocabulario"]

enunciado: "¿Qué es una variación de k elementos elegidos de un conjunto de n elementos (k ≤ n)?"
tipo: mc
opciones_explicitas:
  - "Cada forma distinta de elegir y ORDENAR k elementos, sin repetir ninguno, donde el orden importa"
  - "Cada forma de elegir k elementos sin importar el orden"
  - "Cada forma de ordenar TODOS los n elementos"
respuesta: "Cada forma distinta de elegir y ORDENAR k elementos, sin repetir ninguno, donde el orden importa"

explicacion: |
  Se usa sólo una parte (k de n), y el orden en que se elige sí hace
  una diferencia.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "intermedio"
  tags: ["variaciones", "completar"]

tipo: completar
enunciado: "Completá: V(n, k) = n! / ___."
respuestas_validas:
  - "(n-k)!"
  - "(n−k)!"

explicacion: |
  Se divide por el factorial de lo que NO se usa (los n−k elementos
  que quedan afuera).
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones", "problema"]

variables:
  n: uno_de([5, 6, 7, 8])
  k: uno_de([2, 3])

respuesta: factorial(n) / factorial(n - k)
tipo: input

enunciado: "¿Cuántas variaciones de {k} elementos se pueden formar a partir de un conjunto de {n} elementos?"

pasos:
  - "V({n}, {k}) = {n}! / ({n}−{k})! = {factorial(n)} / {factorial(n - k)} = {factorial(n) / factorial(n - k)}"

explicacion: |
  Se divide el factorial de todos por el factorial de los que no se
  usan.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "intermedio"
  tags: ["variaciones"]

respuesta: verdadero
tipo: vf

enunciado: "En una variación, elegir A y luego B se cuenta como distinto de elegir B y luego A."

explicacion: |
  Es la diferencia clave con las combinaciones, donde AB y BA
  cuentan como la misma elección.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "intermedio"
  tags: ["variaciones"]

respuesta: falso
tipo: vf

enunciado: "En una variación (en el sentido clásico de este módulo), se permite elegir el mismo elemento más de una vez."

explicacion: |
  Es falso: cada elemento se usa como máximo una vez, igual que en
  permutaciones.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones", "problema"]

variables:
  participantes: uno_de([6, 7, 8, 9])

respuesta: factorial(participantes) / factorial(participantes - 3)
tipo: input

enunciado: "En una carrera con {participantes} participantes, ¿de cuántas formas distintas se pueden repartir el 1°, 2° y 3° puesto del podio?"

pasos:
  - "V({participantes}, 3) = {participantes}! / ({participantes}−3)! = {factorial(participantes) / factorial(participantes - 3)}"

explicacion: |
  Importa el orden (no es lo mismo salir 1° que 3°), y una vez que
  alguien ocupa un puesto no puede ocupar otro.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones", "problema"]

variables:
  disponibles: uno_de([8, 9, 10])
  longitud: uno_de([3, 4])

respuesta: factorial(disponibles) / factorial(disponibles - longitud)
tipo: input

enunciado: "Hay {disponibles} símbolos disponibles. ¿Cuántos códigos distintos de {longitud} símbolos (sin repetir ninguno, importa el orden) se pueden formar?"

pasos:
  - "V({disponibles}, {longitud}) = {disponibles}! / ({disponibles}−{longitud})! = {factorial(disponibles) / factorial(disponibles - longitud)}"

explicacion: |
  Es la misma fórmula que el podio, con otros números.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones", "permutaciones"]

respuesta: verdadero
tipo: vf

enunciado: "Una permutación es el caso particular de una variación donde k = n (se usan todos los elementos)."

explicacion: |
  V(n,n) = n!/(n−n)! = n!/0! = n!/1 = n! — exactamente la fórmula de
  permutaciones.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones", "ordenar"]

enunciado: "Ordená los pasos para calcular V(n, k) usando la fórmula de factoriales."
tipo: ordenar
opciones_explicitas:
  - "Dividir n! por (n−k)!"
  - "Calcular n! (el factorial de todos los elementos disponibles)"
  - "Calcular (n−k)! (el factorial de los que NO se usan)"
respuesta_orden:
  - "Calcular n! (el factorial de todos los elementos disponibles)"
  - "Calcular (n−k)! (el factorial de los que NO se usan)"
  - "Dividir n! por (n−k)!"

explicacion: |
  El orden de los dos factoriales no importa para calcularlos, pero
  la división siempre va al final.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones", "problema"]

variables:
  n: uno_de([6, 7, 8])

respuesta: n * (n - 1) * (n - 2)
tipo: input

enunciado: "Usando el principio multiplicativo directo (sin pasar por factoriales), ¿cuántas variaciones de 3 elementos hay en un conjunto de {n} elementos? (primer lugar: {n} opciones, segundo: {n}−1, tercero: {n}−2)"

pasos:
  - "V({n}, 3) = {n} × ({n}−1) × ({n}−2) = {n * (n - 1) * (n - 2)}"

explicacion: |
  Da exactamente el mismo resultado que n!/(n−3)! — son la misma
  cuenta escrita de dos formas.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "intermedio"
  tags: ["variaciones", "combinaciones"]

enunciado: "¿Qué diferencia a una variación de una combinación (ambas eligen k de n elementos)?"
tipo: mc
opciones_explicitas:
  - "En la variación el orden importa (AB y BA son distintas); en la combinación no (AB y BA son la misma elección)"
  - "La variación permite repetir elementos y la combinación no"
  - "No hay ninguna diferencia real entre ambas"
respuesta: "En la variación el orden importa (AB y BA son distintas); en la combinación no (AB y BA son la misma elección)"

explicacion: |
  Por eso la variación siempre da un número mayor o igual que la
  combinación para los mismos n y k.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "intermedio"
  tags: ["variaciones", "problema"]

variables:
  n: random(5, 20)

respuesta: n
tipo: input

enunciado: "¿Cuántas variaciones de 1 solo elemento hay en un conjunto de {n} elementos?"

pasos:
  - "V({n}, 1) = {n}! / ({n}−1)! = {n} (elegir uno solo, no hay nada que ordenar)"

explicacion: |
  Con k=1 no hay orden que definir — el resultado es simplemente n.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones", "problema"]

variables:
  n: uno_de([4, 5, 6])

respuesta: factorial(n)
tipo: input

enunciado: "¿Cuántas variaciones de {n} elementos hay en un conjunto de {n} elementos (usando todos)?"

pasos:
  - "V({n}, {n}) = {n}! / 0! = {n}! / 1 = {factorial(n)}"

explicacion: |
  Coincide exactamente con la permutación de {n} elementos.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones", "problema"]

variables:
  candidatos: uno_de([5, 6, 7, 8])

respuesta: candidatos * (candidatos - 1)
tipo: input

enunciado: "Entre {candidatos} candidatos, se va a elegir un presidente y un vicepresidente (dos cargos distintos, nadie puede ocupar los dos). ¿Cuántos resultados distintos son posibles?"

pasos:
  - "V({candidatos}, 2) = {candidatos} × ({candidatos}−1) = {candidatos * (candidatos - 1)}"

explicacion: |
  Presidente y vicepresidente son roles distintos: elegir a X de
  presidente e Y de vice es distinto de elegir a Y de presidente e X
  de vice.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones", "combinaciones"]

respuesta: verdadero
tipo: vf

enunciado: "Para los mismos n y k, V(n,k) siempre es mayor o igual que la combinación correspondiente C(n,k)."

explicacion: |
  La variación cuenta cada combinación tantas veces como formas de
  ordenar sus k elementos (k!) — por eso siempre es mayor o igual.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "basico"
  tags: ["variaciones", "aplicacion"]

enunciado: "Si una clave usa 3 letras distintas (sin repetir) elegidas de un alfabeto de 26, y el orden en que se escriben importa, ¿qué hay que calcular para contar cuántas claves son posibles?"
tipo: mc
opciones_explicitas:
  - "Una variación: V(26, 3)"
  - "Una permutación de las 26 letras completas"
  - "Una simple multiplicación de 26 por 3"
respuesta: "Una variación: V(26, 3)"

explicacion: |
  Se usa sólo una parte (3 de 26 letras), sin repetir, y el orden
  importa — exactamente la definición de variación.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones"]

respuesta: verdadero
tipo: vf

enunciado: "La fórmula V(n,k) = n!/(n−k)! sólo tiene sentido cuando k ≤ n (no se puede elegir, sin repetir, más elementos de los que hay disponibles)."

explicacion: |
  Si k > n, (n−k)! implicaría el factorial de un número negativo, que
  no está definido en este contexto.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones", "problema"]

variables:
  n: uno_de([7, 8, 9])

respuesta: redondear((factorial(n) / factorial(n - 3)) / (factorial(n) / factorial(n - 2)), 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Para un conjunto de {n} elementos, ¿cuál es el cociente V({n},3) / V({n},2)?"

pasos:
  - "V({n},3) = {factorial(n) / factorial(n - 3)}"
  - "V({n},2) = {factorial(n) / factorial(n - 2)}"
  - "Cociente = {redondear((factorial(n) / factorial(n - 3)) / (factorial(n) / factorial(n - 2)), 3)}"

explicacion: |
  El cociente da exactamente (n−2): agregar un elemento más al orden
  multiplica por las opciones que quedan para ese lugar extra.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones"]

respuesta: 1
tipo: input

enunciado: "Por convención, ¿cuánto es V(n, 0) (elegir y ordenar cero elementos)?"

explicacion: |
  V(n,0) = n!/n! = 1 — hay exactamente una forma de "no elegir nada".
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones", "problema"]

variables:
  simbolos: uno_de([6, 7, 8])

respuesta: factorial(simbolos) / factorial(simbolos - 4)
tipo: input

enunciado: "Un teclado reducido tiene {simbolos} símbolos distintos disponibles. ¿Cuántos códigos de 4 símbolos (sin repetir, importa el orden) se pueden formar?"

pasos:
  - "V({simbolos}, 4) = {simbolos}! / ({simbolos}−4)! = {factorial(simbolos) / factorial(simbolos - 4)}"

explicacion: |
  Mismo procedimiento que las preguntas anteriores, con otro contexto.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "intermedio"
  tags: ["variaciones"]

respuesta: verdadero
tipo: vf

enunciado: "En una variación clásica, ningún elemento del conjunto original puede aparecer más de una vez en la selección ordenada."

explicacion: |
  Es la misma restricción de 'sin repetir' que tienen las
  permutaciones, aplicada ahora a sólo una parte de los elementos.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones", "problema"]

variables:
  atletas: uno_de([8, 9, 10])

respuesta: factorial(atletas) / factorial(atletas - 3)
tipo: input

enunciado: "En una competencia con {atletas} atletas, ¿de cuántas formas distintas se pueden entregar las medallas de oro, plata y bronce (una por atleta, no se repite medalla)?"

pasos:
  - "V({atletas}, 3) = {atletas}! / ({atletas}−3)! = {factorial(atletas) / factorial(atletas - 3)}"

explicacion: |
  Es el mismo problema del podio, en otro contexto.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones"]

respuesta: verdadero
tipo: vf

enunciado: "V(n,k) siempre es menor o igual que n^k (elegir k veces entre n opciones PERMITIENDO repetir)."

explicacion: |
  Prohibir la repetición sólo puede reducir la cantidad de opciones
  disponibles en cada paso, nunca aumentarla.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve calcular variaciones?"
tipo: mc
opciones_explicitas:
  - "Para contar cuántas formas hay de elegir y ORDENAR una parte de un conjunto, sin repetir elementos"
  - "Sólo sirve cuando se usan todos los elementos del conjunto"
  - "Sólo aplica cuando el orden no importa"
respuesta: "Para contar cuántas formas hay de elegir y ORDENAR una parte de un conjunto, sin repetir elementos"

explicacion: |
  Es el paso intermedio entre permutaciones (usar todos, con orden) y
  combinaciones (usar una parte, sin orden) — el próximo módulo.
```

## Sección: vectores-modulo-y-direccion (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "basico"
  tags: ["vectores", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre una magnitud escalar y una vectorial?"
tipo: mc
opciones_explicitas:
  - "La escalar sólo tiene un número (magnitud); la vectorial también tiene una dirección"
  - "La escalar siempre es negativa; la vectorial siempre es positiva"
  - "No hay ninguna diferencia real entre ambas"
respuesta: "La escalar sólo tiene un número (magnitud); la vectorial también tiene una dirección"

explicacion: |
  La temperatura es escalar; la velocidad es vectorial.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "basico"
  tags: ["vectores", "vocabulario"]

enunciado: "¿Cuál de estas es una magnitud escalar?"
tipo: mc
opciones_explicitas:
  - "La masa de un objeto"
  - "La velocidad de un auto"
  - "La fuerza aplicada sobre una caja"
respuesta: "La masa de un objeto"

explicacion: |
  La masa queda descripta con un solo número, sin ninguna dirección.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "basico"
  tags: ["vectores", "vocabulario"]

enunciado: "¿Cuál de estas es una magnitud vectorial?"
tipo: mc
opciones_explicitas:
  - "La velocidad de un auto"
  - "La temperatura de una habitación"
  - "La edad de una persona"
respuesta: "La velocidad de un auto"

explicacion: |
  La velocidad necesita, además del número (rapidez), una dirección.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "intermedio"
  tags: ["vectores", "vocabulario"]

enunciado: "¿Qué son las componentes de un vector que va del origen al punto (x, y)?"
tipo: mc
opciones_explicitas:
  - "El par (x, y): cuánto avanza en horizontal y en vertical"
  - "El módulo del vector, expresado con dos decimales"
  - "El ángulo que forma con cada eje"
respuesta: "El par (x, y): cuánto avanza en horizontal y en vertical"

explicacion: |
  Es la misma idea de coordenadas, ahora interpretada como
  desplazamiento.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "intermedio"
  tags: ["vectores", "problema"]

variables:
  k: random(1, 8)
  x: 3 * k
  y: 4 * k

respuesta: 5 * k
tipo: input
tolerancia_abs: 0

enunciado: "Un vector tiene componentes ({x}, {y}). ¿Cuál es su módulo?"

pasos:
  - "√({x}² + {y}²) = √{(x * x) + (y * y)} = {5 * k}"

explicacion: |
  Es el teorema de Pitágoras aplicado a las componentes del vector.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "intermedio"
  tags: ["vectores", "problema"]

variables:
  k: random(1, 6)
  x: 5 * k
  y: 12 * k

respuesta: 13 * k
tipo: input
tolerancia_abs: 0

enunciado: "Un vector tiene componentes ({x}, {y}). ¿Cuál es su módulo?"

pasos:
  - "√({x}² + {y}²) = {13 * k}"

explicacion: |
  Es la terna pitagórica 5-12-13 escalada.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "avanzado"
  tags: ["vectores", "problema"]

variables:
  x: random(1, 15)
  y: random(1, 15)

respuesta: redondear(sqrt((x * x) + (y * y)), 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Un vector tiene componentes ({x}, {y}). ¿Cuál es su módulo? Redondeá a 2 decimales."

pasos:
  - "√({x}² + {y}²) = {redondear(sqrt((x * x) + (y * y)), 2)}"

explicacion: |
  No siempre el módulo da un número exacto.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "intermedio"
  tags: ["vectores", "vocabulario"]

enunciado: "¿Qué es la dirección de un vector?"
tipo: mc
opciones_explicitas:
  - "El ángulo que forma con el eje x positivo, medido en sentido antihorario"
  - "La longitud total de la flecha que lo representa"
  - "El punto exacto donde termina el vector"
respuesta: "El ángulo que forma con el eje x positivo, medido en sentido antihorario"

explicacion: |
  El módulo es la longitud; la dirección es hacia dónde apunta.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "avanzado"
  tags: ["vectores"]

respuesta: verdadero
tipo: vf

enunciado: "Dos vectores con el mismo módulo y la misma dirección son considerados el mismo vector, aunque estén dibujados con distinto punto de origen en el plano."

explicacion: |
  Un vector "libre" se puede trasladar sin cambiar lo que representa.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "basico"
  tags: ["vectores", "vocabulario"]

enunciado: "¿Qué es un vector nulo?"
tipo: mc
opciones_explicitas:
  - "Un vector con módulo 0, sin dirección definida"
  - "Un vector con dirección hacia el eje x negativo"
  - "Un vector que apunta siempre hacia el origen"
respuesta: "Un vector con módulo 0, sin dirección definida"

explicacion: |
  Sin longitud, no hay ninguna dirección real que definir.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "intermedio"
  tags: ["vectores", "vocabulario"]

enunciado: "¿Qué es un vector unitario?"
tipo: mc
opciones_explicitas:
  - "Un vector con módulo exactamente 1"
  - "Un vector que sólo tiene una componente distinta de 0"
  - "Un vector que apunta siempre hacia arriba"
respuesta: "Un vector con módulo exactamente 1"

explicacion: |
  Se usa para representar sólo una dirección, sin peso en la magnitud.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "avanzado"
  tags: ["vectores", "problema"]

respuesta: verdadero
tipo: vf

enunciado: "Un vector tiene componentes (0,6, 0,8). ¿Es un vector unitario?"

explicacion: |
  √(0,6² + 0,8²) = √(0,36 + 0,64) = √1 = 1: sí, es unitario.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "avanzado"
  tags: ["vectores", "problema"]

variables:
  k: random(1, 6)
  x: 8 * k
  modulo: 17 * k

respuesta: 15 * k
tipo: input
tolerancia_abs: 0

enunciado: "Un vector tiene componente x = {x} y módulo {modulo}. ¿Cuál es su componente y (positiva)?"

pasos:
  - "{modulo}² − {x}² = {(modulo * modulo) - (x * x)}"
  - "√{(modulo * modulo) - (x * x)} = {15 * k}"

explicacion: |
  Se despeja la componente faltante invirtiendo Pitágoras, igual que
  hallar un cateto conociendo la hipotenusa y el otro cateto.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "intermedio"
  tags: ["vectores"]

respuesta: verdadero
tipo: vf

enunciado: "El módulo de un vector nunca puede ser un número negativo."

explicacion: |
  Es una raíz cuadrada de una suma de cuadrados: siempre positiva o
  cero.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "basico"
  tags: ["vectores", "vocabulario"]

enunciado: "¿Cómo se representa gráficamente un vector?"
tipo: mc
opciones_explicitas:
  - "Con una flecha, desde un punto de origen hasta un punto de extremo"
  - "Con un punto suelto, sin ninguna línea"
  - "Con un círculo alrededor del origen"
respuesta: "Con una flecha, desde un punto de origen hasta un punto de extremo"

explicacion: |
  La punta de la flecha marca el extremo, y también la dirección.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "basico"
  tags: ["vectores", "vocabulario"]

enunciado: "En la flecha que representa un vector, ¿cuál es el 'extremo'?"
tipo: mc
opciones_explicitas:
  - "El punto de llegada, donde está la punta de la flecha"
  - "El punto de partida, donde empieza la flecha"
  - "El punto medio de la flecha"
respuesta: "El punto de llegada, donde está la punta de la flecha"

explicacion: |
  El punto de partida se llama origen (o "cola").
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "basico"
  tags: ["vectores", "problema"]

variables:
  x: random(-10, 10)
  y: random(-10, 10)

respuesta: x
tipo: input
tolerancia_abs: 0

enunciado: "Un vector va desde el origen (0, 0) hasta el punto ({x}, {y}). ¿Cuál es su componente horizontal?"

explicacion: |
  Es directamente la abscisa del punto de llegada.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "avanzado"
  tags: ["vectores", "problema"]

variables:
  x1: random(1, 10)
  y1: random(1, 10)
  x2: x1 + random(2, 8)
  y2: y1 + random(2, 8)

respuesta: x2 - x1
tipo: input
tolerancia_abs: 0

enunciado: "Un vector va desde el punto ({x1}, {y1}) hasta el punto ({x2}, {y2}). ¿Cuál es su componente horizontal?"

pasos:
  - "{x2} − {x1} = {x2 - x1}"

explicacion: |
  Un vector entre dos puntos cualesquiera se calcula restando las
  coordenadas del punto de llegada menos las del punto de partida.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "avanzado"
  tags: ["vectores", "vocabulario"]

enunciado: "¿Qué relación tiene el módulo de un vector con la fórmula de distancia entre dos puntos?"
tipo: mc
opciones_explicitas:
  - "Son la misma fórmula: el módulo es la distancia entre el origen y el extremo del vector"
  - "No tienen ninguna relación"
  - "El módulo siempre es el doble de la distancia"
respuesta: "Son la misma fórmula: el módulo es la distancia entre el origen y el extremo del vector"

explicacion: |
  Por eso este módulo depende de `../distancia-entre-dos-puntos/`.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "avanzado"
  tags: ["vectores", "problema"]

variables:
  k: random(1, 6)
  x1: random(1, 5)
  y1: random(1, 5)
  x2: x1 + 3 * k
  y2: y1 + 4 * k

respuesta: 5 * k
tipo: input
tolerancia_abs: 0

enunciado: "Un vector va desde el punto ({x1}, {y1}) hasta el punto ({x2}, {y2}). ¿Cuál es su módulo?"

pasos:
  - "Componentes: ({x2 - x1}, {y2 - y1})"
  - "√({x2 - x1}² + {y2 - y1}²) = {5 * k}"

explicacion: |
  Primero se calculan las componentes (la diferencia de coordenadas), y
  recién después el módulo.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "intermedio"
  tags: ["vectores", "ordenar"]

enunciado: "Ordená los pasos para hallar el módulo de un vector, conociendo sus componentes (x, y)."
tipo: ordenar
opciones_explicitas:
  - "Sacar raíz cuadrada de esa suma"
  - "Elevar al cuadrado cada componente"
  - "Sumar los dos cuadrados"
respuesta_orden:
  - "Elevar al cuadrado cada componente"
  - "Sumar los dos cuadrados"
  - "Sacar raíz cuadrada de esa suma"

explicacion: |
  Es el mismo procedimiento del teorema de Pitágoras.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "intermedio"
  tags: ["vectores"]

respuesta: verdadero
tipo: vf

enunciado: "Por convención, la dirección de un vector se mide como el ángulo respecto del eje x positivo, en sentido antihorario."

explicacion: |
  Es la misma convención usada para los cuadrantes del plano
  cartesiano.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "avanzado"
  tags: ["vectores", "problema"]

variables:
  modulo: uno_de([10, 20, 30, 40])
  cos_30: 0.87
  sen_30: 0.5

respuesta: redondear(modulo * sen_30, 1)
tipo: input
tolerancia_abs: 0.5

enunciado: "Un vector tiene módulo {modulo} y dirección 30° (sen 30° = 0,5, cos 30° ≈ 0,87). ¿Cuál es su componente vertical (y)?"

pasos:
  - "{modulo} × 0,5 = {redondear(modulo * sen_30, 1)}"

explicacion: |
  y = módulo × sen(dirección).
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "intermedio"
  tags: ["vectores", "vocabulario"]

enunciado: "¿Por qué la fuerza que se aplica sobre una caja se describe con un vector, y no con un solo número?"
tipo: mc
opciones_explicitas:
  - "Porque importa tanto cuánta fuerza se aplica como en qué dirección se empuja"
  - "Porque las fuerzas siempre son negativas"
  - "En realidad la fuerza es una magnitud escalar, no vectorial"
respuesta: "Porque importa tanto cuánta fuerza se aplica como en qué dirección se empuja"

explicacion: |
  Empujar hacia arriba, hacia abajo o de costado da resultados muy
  distintos, aunque la magnitud de la fuerza sea la misma.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "intermedio"
  tags: ["vectores"]

respuesta: verdadero
tipo: vf

enunciado: "Dos vectores pueden tener exactamente el mismo módulo pero apuntar en direcciones completamente distintas."

explicacion: |
  El módulo y la dirección son dos datos independientes entre sí.
```

```
metadata:
  materia: "matematicas"
  tema: "vectores_modulo_y_direccion"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirven los vectores?"
tipo: mc
opciones_explicitas:
  - "Para describir cualquier magnitud que combine una cantidad con una dirección: desplazamientos, velocidades, fuerzas"
  - "Sólo sirven para describir posiciones fijas en el plano"
  - "Sólo tienen aplicación en geometría pura, sin uso en Física"
respuesta: "Para describir cualquier magnitud que combine una cantidad con una dirección: desplazamientos, velocidades, fuerzas"

explicacion: |
  Es la base para sumarlos y combinarlos en los módulos siguientes.
```

## Sección: volumen-y-capacidad (30 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["volumen", "vocabulario"]

enunciado: "¿Qué es el volumen de un cuerpo?"
tipo: mc
opciones_explicitas:
  - "La medida del espacio que ocupa en tres dimensiones"
  - "La medida de su contorno"
  - "La cantidad de caras que tiene"
respuesta: "La medida del espacio que ocupa en tres dimensiones"

explicacion: |
  Se mide en unidades cúbicas: cm³, m³.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["volumen", "vocabulario"]

enunciado: "¿Qué es el cubo unitario que se usa para medir volumen?"
tipo: mc
opciones_explicitas:
  - "Un cubo de 1 unidad de lado, con volumen 1"
  - "Cualquier cubo, sin importar su tamaño"
  - "Un cubo con 6 caras cuadradas"
respuesta: "Un cubo de 1 unidad de lado, con volumen 1"

explicacion: |
  Medir un volumen es, en el fondo, contar cuántos cubos unitarios entran
  adentro del cuerpo.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["prisma_rectangular", "volumen"]

variables:
  l: random(2, 20)
  a: random(2, 15)
  h: random(2, 10)

respuesta: l * a * h
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el volumen de una caja de {l} cm de largo, {a} cm de ancho y {h} cm de alto?"

pasos:
  - "{l} × {a} × {h} = {l * a * h} cm³"

explicacion: |
  El volumen de un prisma rectangular es largo × ancho × alto.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["cubo", "volumen"]

variables:
  l: random(2, 15)

respuesta: l * l * l
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el volumen de un cubo de {l} cm de lado?"

pasos:
  - "{l} × {l} × {l} = {l * l * l} cm³"

explicacion: |
  El volumen del cubo es el lado elevado al cubo.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["prisma_rectangular", "volumen"]

variables:
  l: random(2, 10)
  a: random(2, 8)
  h: random(2, 10)
  volumen: l * a * h

respuesta: h
tipo: input
tolerancia_abs: 0.01

enunciado: "Una caja de {l} cm de largo y {a} cm de ancho tiene {volumen} cm³ de volumen. ¿Cuánto mide su altura?"

pasos:
  - "{volumen} ÷ ({l} × {a}) = {volumen / (l * a)} cm"

explicacion: |
  La altura se despeja dividiendo el volumen por el área de la base
  (largo × ancho).
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["cubo", "volumen"]

variables:
  l: random(2, 10)
  volumen: l * l * l

respuesta: l
tipo: input
tolerancia_abs: 0.01

enunciado: "Un cubo tiene {volumen} cm³ de volumen. ¿Cuánto mide su lado?"

pasos:
  - "raiz({volumen}, 3) = {raiz(volumen, 3)} cm"

explicacion: |
  El lado es la raíz cúbica del volumen (la operación inversa de
  elevarlo al cubo).
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["capacidad", "vocabulario"]

enunciado: "¿Qué es la capacidad de un recipiente?"
tipo: mc
opciones_explicitas:
  - "Cuánto líquido puede contener"
  - "Cuánto pesa el recipiente vacío"
  - "El área de su superficie exterior"
respuesta: "Cuánto líquido puede contener"

explicacion: |
  Se mide en litros y sus derivados (ml).
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["capacidad", "conversion"]

respuesta: verdadero
tipo: vf

enunciado: "1 litro equivale exactamente a 1 decímetro cúbico (1 dm³)."

explicacion: |
  Es la equivalencia central entre volumen y capacidad.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["capacidad", "conversion"]

respuesta: verdadero
tipo: vf

enunciado: "1 mililitro equivale exactamente a 1 centímetro cúbico (1 cm³)."

explicacion: |
  Es la misma equivalencia que 1 l = 1 dm³, pero a escala mil veces más
  chica.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["capacidad", "conversion"]

variables:
  cm3: random(50, 900)

respuesta: cm3
tipo: input
tolerancia_abs: 0

enunciado: "Un envase tiene un volumen de {cm3} cm³. ¿Cuántos ml de líquido le entran?"

explicacion: |
  1 cm³ = 1 ml: el número no cambia, sólo el nombre de la unidad.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["capacidad", "conversion"]

variables:
  litros: random(1, 9)
  cm3: litros * 1000

respuesta: litros
tipo: input
tolerancia_abs: 0.01

enunciado: "Un recipiente tiene un volumen de {cm3} cm³. ¿Cuántos litros le entran?"

pasos:
  - "{cm3} cm³ = {cm3} ml = {cm3 / 1000} l (porque 1 l = 1000 ml)"

explicacion: |
  Se convierte cm³ a ml (1 a 1) y después ml a litros (÷1000).
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "avanzado"
  tags: ["capacidad", "conversion"]

variables:
  m3: random(1, 8)

respuesta: m3 * 1000
tipo: input
tolerancia_abs: 0

enunciado: "Un tanque tiene {m3} m³ de volumen. ¿Cuántos litros de agua puede contener?"

pasos:
  - "1 m³ = 1000 litros, así que {m3} × 1000 = {m3 * 1000} litros"

explicacion: |
  1 metro cúbico equivale a 1000 litros.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "avanzado"
  tags: ["prisma_rectangular", "capacidad", "problema"]

variables:
  l: random(20, 60)
  a: random(15, 40)
  h: random(15, 30)

respuesta: (l * a * h) / 1000
tipo: input
tolerancia_abs: 0.01

enunciado: "Una pecera con forma de caja mide {l} cm de largo, {a} cm de ancho y {h} cm de alto. ¿Cuántos litros de agua puede contener?"

pasos:
  - "Volumen: {l} × {a} × {h} = {l * a * h} cm³. Como 1000 cm³ = 1 litro, {l * a * h} ÷ 1000 = {(l * a * h) / 1000} litros."

explicacion: |
  Se calcula el volumen en cm³ y se convierte a litros usando la
  equivalencia 1000 cm³ = 1 litro.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["prisma_rectangular", "problema"]

variables:
  l: random(25, 35)
  a: random(15, 20)
  h: random(10, 15)

respuesta: l * a * h
tipo: input
tolerancia_abs: 0

enunciado: "Una caja de zapatos mide {l} cm × {a} cm × {h} cm. ¿Cuál es su volumen?"

explicacion: |
  Se aplica directamente largo × ancho × alto.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["cubo", "problema"]

variables:
  l: random(2, 6)
  a: random(2, 6)
  h: random(2, 6)

respuesta: l * a * h
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos cubos de 1 cm de lado entran en una caja de {l} cm × {a} cm × {h} cm, si se apilan sin dejar huecos?"

explicacion: |
  Cada cubo de 1 cm de lado ocupa 1 cm³, así que la cantidad de cubos
  coincide con el volumen de la caja en cm³.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["comparacion"]

variables:
  l1: random(2, 10)
  a1: random(2, 10)
  h1: random(2, 10)
  l2: random(2, 10)
  a2: random(2, 10)
  h2: random(2, 10)

restricciones:
  - (l1 * a1 * h1) != (l2 * a2 * h2)

respuesta: (l1 * a1 * h1) > (l2 * a2 * h2)
tipo: vf

enunciado: "¿Tiene mayor volumen una caja de {l1}×{a1}×{h1} cm, que otra de {l2}×{a2}×{h2} cm?"

pasos:
  - "Caja 1: {l1 * a1 * h1} cm³. Caja 2: {l2 * a2 * h2} cm³."

explicacion: |
  Se calcula el volumen de cada una y se compara.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El volumen se mide en unidades cúbicas, como cm³ o m³."

explicacion: |
  Es consecuencia de medir tres dimensiones a la vez (largo × ancho ×
  alto).
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["vocabulario"]

respuesta: falso
tipo: vf

enunciado: "El volumen y el área miden exactamente lo mismo, sólo que con distinto nombre."

explicacion: |
  El área mide superficie (2 dimensiones, unidades cuadradas); el volumen
  mide espacio (3 dimensiones, unidades cúbicas). Son magnitudes
  distintas.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["cubo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un cubo es un caso particular de prisma rectangular, donde los tres lados son iguales."

explicacion: |
  Por eso su fórmula (l³) es la misma que largo×ancho×alto, con los tres
  valores iguales.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["prisma_rectangular", "vocabulario"]

enunciado: "¿Cuál es la fórmula correcta del volumen de un prisma rectangular?"
tipo: mc
opciones_explicitas:
  - "largo × ancho × alto"
  - "largo + ancho + alto"
  - "2 × (largo + ancho)"
respuesta: "largo × ancho × alto"

explicacion: |
  Se multiplican las tres dimensiones.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["cubo", "completar"]

variables:
  l: random(2, 12)

tipo: completar
enunciado: "Completá: el volumen de un cubo de lado {l} cm es ___ cm³."
respuestas_validas:
  - l * l * l

explicacion: |
  Volumen = lado³.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["capacidad", "completar"]

tipo: completar
enunciado: "Completá: 1 metro cúbico equivale a ___ litros."
respuestas_validas:
  - 1000

explicacion: |
  1 m³ = 1000 litros.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["prisma_rectangular", "verificacion"]

variables:
  l: random(2, 15)
  a: random(2, 12)
  h: random(2, 10)
  correcto: l * a * h
  error: uno_de([0, 0, 0, 1, -1])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien calculado esto? El volumen de una caja de {l}×{a}×{h} cm es {mostrado} cm³."

explicacion: |
  Se recalcula largo × ancho × alto y se compara con lo mostrado.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "avanzado"
  tags: ["cubo", "capacidad", "problema"]

variables:
  l_m: random(1, 4)

respuesta: (l_m * l_m * l_m) * 1000
tipo: input
tolerancia_abs: 0

enunciado: "Un tanque cúbico mide {l_m} m de lado. ¿Cuántos litros de agua puede contener?"

pasos:
  - "Volumen: {l_m}³ = {l_m * l_m * l_m} m³. Como 1 m³ = 1000 litros, {l_m * l_m * l_m} × 1000 = {(l_m * l_m * l_m) * 1000} litros."

explicacion: |
  Primero se calcula el volumen en m³, y después se convierte a litros.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "avanzado"
  tags: ["cubo", "vocabulario"]

variables:
  l: random(2, 8)

respuesta: falso
tipo: vf

enunciado: "Si el lado de un cubo de {l} cm se duplica, su volumen también se duplica."

pasos:
  - "Volumen original: {l}³ = {l * l * l} cm³. Volumen con el lado doble: {2 * l}³ = {(2 * l) * (2 * l) * (2 * l)} cm³."

explicacion: |
  El volumen se multiplica por 2³ = 8, no por 2: al duplicar el lado, el
  volumen queda ocho veces más grande, no el doble.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "avanzado"
  tags: ["prisma_rectangular", "problema"]

variables:
  l_chica: random(2, 5)
  factor: random(2, 4)
  l_grande: l_chica * factor

respuesta: factor * factor * factor
tipo: input
tolerancia_abs: 0

enunciado: "Una caja cúbica grande mide {l_grande} cm de lado y una caja cúbica chica mide {l_chica} cm de lado. ¿Cuántas cajas chicas entran exactamente en la grande?"

pasos:
  - "Volumen grande: {l_grande}³ = {l_grande * l_grande * l_grande} cm³. Volumen chica: {l_chica}³ = {l_chica * l_chica * l_chica} cm³. {l_grande * l_grande * l_grande} ÷ {l_chica * l_chica * l_chica} = {(l_grande * l_grande * l_grande) / (l_chica * l_chica * l_chica)}."

explicacion: |
  Se divide el volumen grande por el volumen chico.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["comparacion"]

enunciado: "¿Cuál de estas capacidades es mayor?"
tipo: mc
opciones_explicitas:
  - "2000 ml"
  - "1 litro"
  - "500 ml"
respuesta: "2000 ml"

explicacion: |
  2000 ml = 2 litros, más que 1 litro o 500 ml.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "avanzado"
  tags: ["orden", "capacidad"]

tipo: ordenar
enunciado: "Ordená estas capacidades de menor a mayor: 3 litros, 250 ml, 1500 ml, 0,5 litros."
opciones_explicitas:
  - "3 litros"
  - "1500 ml"
  - "250 ml"
  - "0,5 litros"
respuesta_orden: ["250 ml", "0,5 litros", "1500 ml", "3 litros"]

pasos:
  - "En ml: 3 litros = 3000 ml; 250 ml; 1500 ml; 0,5 litros = 500 ml."

explicacion: |
  Conviene pasar todo a la misma unidad antes de comparar: 250 < 500 <
  1500 < 3000.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "intermedio"
  tags: ["cubo", "capacidad"]

respuesta: 1000
tipo: input
tolerancia_abs: 0

enunciado: "Un cubo de 1 metro de lado tiene un volumen de 1 m³. ¿A cuántos litros equivale eso?"

explicacion: |
  1 m³ = 1000 litros.
```

```
metadata:
  materia: "matematicas"
  tema: "volumen_y_capacidad"
  nivel: "basico"
  tags: ["vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Calcular cuántos litros de líquido entran en un recipiente es, en el fondo, calcular su volumen y después convertirlo a litros."

explicacion: |
  Volumen y capacidad son el mismo concepto físico, medido con distintas
  unidades — por eso 1 dm³ = 1 litro.
```
