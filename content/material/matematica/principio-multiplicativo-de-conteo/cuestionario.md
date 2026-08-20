# Matemática — Principio multiplicativo de conteo (cuestionario, 25 preguntas VBLang)

> Tema: `CJ4`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué establece el principio multiplicativo

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "basico"
  tags: ["conteo", "vocabulario"]

enunciado: "¿Qué establece el principio multiplicativo de conteo?"
tipo: mc
opciones_explicitas:
  - "Si una elección se compone de varios pasos independientes, el total de combinaciones es el producto de las opciones de cada paso"
  - "Para contar combinaciones siempre hay que enumerarlas una por una"
  - "El total de combinaciones es la suma de las opciones de cada paso"
respuesta: "Si una elección se compone de varios pasos independientes, el total de combinaciones es el producto de las opciones de cada paso"

explicacion: |
  Es la herramienta que permite contar sin enumerar.
```

### 2 — Completar: la fórmula

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "basico"
  tags: ["conteo", "completar"]

tipo: completar
enunciado: "Completá: si hay n₁ opciones para el primer paso, n₂ para el segundo y n₃ para el tercero, el total de combinaciones es n₁ × n₂ × ___."
respuestas_validas:
  - "n₃"

explicacion: |
  Se multiplican las opciones de TODOS los pasos, sin importar cuántos
  sean.
```

### 3 — Problema: menú de restaurante

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "intermedio"
  tags: ["conteo", "problema"]

variables:
  entradas: random(2, 5)
  platos: random(3, 6)
  postres: random(2, 4)

respuesta: entradas * platos * postres
tipo: input

enunciado: "Un restaurante ofrece {entradas} entradas, {platos} platos principales y {postres} postres. ¿Cuántos menús distintos (una entrada, un plato y un postre) se pueden armar?"

pasos:
  - "Total = {entradas} × {platos} × {postres} = {entradas * platos * postres}"

explicacion: |
  Cada elección es independiente de las otras dos.
```

### 4 — Problema: clave numérica de N dígitos

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "avanzado"
  tags: ["conteo", "problema"]

variables:
  digitos: uno_de([3, 4, 5])

respuesta: 10 ^ digitos
tipo: input

enunciado: "Una clave numérica tiene {digitos} dígitos, cada uno del 0 al 9, y se pueden repetir dígitos. ¿Cuántas claves distintas son posibles?"

pasos:
  - "Cada dígito tiene 10 opciones posibles, independientes entre sí: 10^{digitos} = {10 ^ digitos}"

explicacion: |
  Es el mismo dígito repetido {digitos} veces en la multiplicación,
  porque cada posición tiene las mismas 10 opciones.
```

### 5 — Problema: armar un outfit

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "intermedio"
  tags: ["conteo", "problema"]

variables:
  camisas: random(3, 8)
  pantalones: random(2, 6)
  zapatos: random(2, 5)

respuesta: camisas * pantalones * zapatos
tipo: input

enunciado: "Alguien tiene {camisas} camisas, {pantalones} pantalones y {zapatos} pares de zapatos. ¿Cuántos outfits distintos (una camisa, un pantalón, un par de zapatos) puede armar?"

pasos:
  - "Total = {camisas} × {pantalones} × {zapatos} = {camisas * pantalones * zapatos}"

explicacion: |
  Cada prenda se elige de forma independiente de las otras.
```

### 6 — Problema: patente simplificada

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "avanzado"
  tags: ["conteo", "problema"]

variables:
  letras: uno_de([2, 3])
  numeros: uno_de([3, 4])

respuesta: 26 ^ letras * 10 ^ numeros
tipo: input

enunciado: "Una patente tiene {letras} letras (de un alfabeto de 26, con repetición permitida) seguidas de {numeros} números (0-9, con repetición permitida). ¿Cuántas patentes distintas son posibles?"

pasos:
  - "Letras: 26^{letras} = {26 ^ letras}"
  - "Números: 10^{numeros} = {10 ^ numeros}"
  - "Total = {26 ^ letras} × {10 ^ numeros} = {26 ^ letras * 10 ^ numeros}"

explicacion: |
  Se multiplican las combinaciones de las letras por las de los
  números, porque son dos bloques independientes.
```

### 7 — Cada paso debe ser independiente

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "intermedio"
  tags: ["conteo"]

respuesta: verdadero
tipo: vf

enunciado: "El principio multiplicativo, en su forma simple (multiplicar directo), funciona cuando cada paso es independiente: la cantidad de opciones de un paso no depende de lo que se elija en los otros."

explicacion: |
  Si un paso cambiara según la elección anterior de forma más
  compleja que simplemente 'un elemento menos disponible', haría
  falta un análisis más cuidadoso.
```

### 8 — Qué pasa si un paso no es independiente

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "avanzado"
  tags: ["conteo"]

enunciado: "Si la cantidad de opciones de un paso cambiara de forma impredecible según lo elegido en un paso anterior, ¿qué pasaría con la multiplicación directa?"
tipo: mc
opciones_explicitas:
  - "Ya no alcanzaría con multiplicar directo — habría que analizar los casos por separado"
  - "No cambiaría nada, la multiplicación siempre funciona igual"
  - "El resultado sería siempre cero"
respuesta: "Ya no alcanzaría con multiplicar directo — habría que analizar los casos por separado"

explicacion: |
  La forma simple del principio presupone independencia entre los
  pasos.
```

### 9 — Problema: lanzar una moneda varias veces

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "intermedio"
  tags: ["conteo", "problema"]

variables:
  lanzamientos: uno_de([3, 4, 5, 6])

respuesta: 2 ^ lanzamientos
tipo: input

enunciado: "Se lanza una moneda {lanzamientos} veces seguidas (cara o ceca cada vez). ¿Cuántas secuencias distintas de resultados son posibles?"

pasos:
  - "Cada lanzamiento tiene 2 resultados posibles, independientes: 2^{lanzamientos} = {2 ^ lanzamientos}"

explicacion: |
  Cada lanzamiento no depende de los anteriores.
```

### 10 — Problema: lanzar un dado varias veces

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "intermedio"
  tags: ["conteo", "problema"]

variables:
  lanzamientos: uno_de([2, 3, 4])

respuesta: 6 ^ lanzamientos
tipo: input

enunciado: "Se lanza un dado de 6 caras {lanzamientos} veces seguidas. ¿Cuántas secuencias distintas de resultados son posibles?"

pasos:
  - "Cada lanzamiento tiene 6 resultados posibles: 6^{lanzamientos} = {6 ^ lanzamientos}"

explicacion: |
  Igual que con la moneda, pero con 6 opciones en vez de 2.
```

### 11 — Ordenar: pasos para aplicar el principio multiplicativo

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "avanzado"
  tags: ["conteo", "ordenar"]

enunciado: "Ordená los pasos para aplicar el principio multiplicativo a un problema de conteo."
tipo: ordenar
opciones_explicitas:
  - "Multiplicar todas esas cantidades entre sí"
  - "Identificar en cuántos pasos independientes se divide la elección completa"
  - "Contar cuántas opciones hay disponibles en cada paso, por separado"
respuesta_orden: ["Identificar en cuántos pasos independientes se divide la elección completa", "Contar cuántas opciones hay disponibles en cada paso, por separado", "Multiplicar todas esas cantidades entre sí"]
explicacion: |
  Sin identificar primero los pasos, no hay qué contar ni qué
  multiplicar.
```

### 12 — Problema con cuatro factores

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "avanzado"
  tags: ["conteo", "problema"]

variables:
  a: random(2, 4)
  b: random(2, 4)
  c: random(2, 4)
  d: random(2, 4)

respuesta: a * b * c * d
tipo: input

enunciado: "Para armar un producto hay {a} opciones de color, {b} de tamaño, {c} de material y {d} de acabado. ¿Cuántas combinaciones distintas de producto son posibles?"

pasos:
  - "Total = {a} × {b} × {c} × {d} = {a * b * c * d}"

explicacion: |
  El principio se extiende a cualquier cantidad de pasos, no sólo dos
  o tres.
```

### 13 — Multiplicar da el mismo resultado que enumerar, pero más rápido

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "basico"
  tags: ["conteo"]

respuesta: verdadero
tipo: vf

enunciado: "Multiplicar las opciones de cada paso da exactamente el mismo resultado que enumerar todas las combinaciones una por una — sólo que mucho más rápido, sobre todo con números grandes."

explicacion: |
  Para pocas opciones se puede verificar enumerando; para miles o
  millones, multiplicar es la única forma práctica.
```

### 14 — Aplicación real: seguridad de una clave

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "basico"
  tags: ["conteo", "aplicacion"]

enunciado: "¿Por qué una clave numérica de 6 dígitos (con repetición) es más difícil de adivinar al azar que una de 4 dígitos?"
tipo: mc
opciones_explicitas:
  - "Porque tiene 10⁶ = 1.000.000 de combinaciones posibles, muchas más que las 10⁴ = 10.000 de la de 4 dígitos"
  - "Porque los números de 6 cifras son, en general, más grandes"
  - "No hay ninguna diferencia real en la dificultad"
respuesta: "Porque tiene 10⁶ = 1.000.000 de combinaciones posibles, muchas más que las 10⁴ = 10.000 de la de 4 dígitos"

explicacion: |
  Cada dígito extra multiplica por 10 la cantidad de combinaciones
  posibles.
```

### 15 — Problema: elegir un ítem de cada una de dos listas

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "intermedio"
  tags: ["conteo", "problema"]

variables:
  lista1: random(4, 10)
  lista2: random(4, 10)

respuesta: lista1 * lista2
tipo: input

enunciado: "Hay {lista1} colores de pintura y {lista2} tipos de acabado (mate, satinado, etc.). ¿Cuántas combinaciones distintas de color y acabado se pueden elegir?"

pasos:
  - "Total = {lista1} × {lista2} = {lista1 * lista2}"

explicacion: |
  Dos pasos independientes, dos factores en la multiplicación.
```

### 16 — Repetir elementos no cambia la fórmula

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "avanzado"
  tags: ["conteo"]

respuesta: verdadero
tipo: vf

enunciado: "Si en cada paso se permite repetir elementos ya usados en pasos anteriores (por ejemplo, el mismo dígito varias veces en una clave), la fórmula sigue siendo un producto simple de las opciones de cada paso."

explicacion: |
  La independencia entre pasos no se rompe por permitir repetición —
  al contrario, permitir repetición es lo que MANTIENE la cantidad de
  opciones igual en cada paso.
```

### 17 — Completar: el principio como base de lo que sigue

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "intermedio"
  tags: ["conteo", "completar"]

tipo: completar
enunciado: "Completá: permutaciones, variaciones y combinaciones son, en el fondo, aplicaciones del principio ___ con distintas restricciones sobre el orden y la repetición."
respuestas_validas:
  - "multiplicativo"

explicacion: |
  Cada uno de esos tres módulos agrega una restricción distinta sobre
  el mismo principio de base.
```

### 18 — Diferencia con permutar todos los elementos

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "avanzado"
  tags: ["conteo"]

enunciado: "¿En qué se diferencia el principio multiplicativo general de una permutación (ordenar TODOS los elementos de un conjunto)?"
tipo: mc
opciones_explicitas:
  - "El principio multiplicativo es la herramienta general; la permutación es un caso particular donde, en cada paso, hay una opción menos disponible porque no se puede repetir ningún elemento"
  - "No hay ninguna diferencia entre ambos conceptos"
  - "La permutación no usa ninguna multiplicación"
respuesta: "El principio multiplicativo es la herramienta general; la permutación es un caso particular donde, en cada paso, hay una opción menos disponible porque no se puede repetir ningún elemento"

explicacion: |
  Es el puente directo hacia `../permutaciones/`.
```

### 19 — Problema: clave sin repetir dígitos

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "avanzado"
  tags: ["conteo", "problema"]

respuesta: 10 * 9 * 8
tipo: input

enunciado: "Una clave tiene 3 dígitos (0 al 9), y NINGÚN dígito se puede repetir. ¿Cuántas claves distintas son posibles?"

pasos:
  - "Primer dígito: 10 opciones"
  - "Segundo dígito: 9 opciones (ya se usó una)"
  - "Tercer dígito: 8 opciones (ya se usaron dos)"
  - "Total = 10 × 9 × 8 = {10 * 9 * 8}"

explicacion: |
  Cada paso sigue siendo independiente en el sentido de que la
  CANTIDAD de opciones disponibles es predecible, aunque vaya
  bajando — es el mismo principio, con una opción menos en cada paso.
```

### 20 — Problema: cinco factores chicos

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "intermedio"
  tags: ["conteo", "problema"]

variables:
  a: random(2, 3)
  b: random(2, 3)
  c: random(2, 3)
  d: random(2, 3)
  e: random(2, 3)

respuesta: a * b * c * d * e
tipo: input

enunciado: "Un sistema de contraseñas usa 5 categorías de símbolos con {a}, {b}, {c}, {d} y {e} opciones respectivamente, una de cada categoría. ¿Cuántas contraseñas distintas son posibles?"

pasos:
  - "Total = {a} × {b} × {c} × {d} × {e} = {a * b * c * d * e}"

explicacion: |
  El principio no tiene límite en la cantidad de pasos que puede
  combinar.
```

### 21 — Aplicación real: horarios escolares

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "basico"
  tags: ["conteo", "aplicacion"]

enunciado: "Si hay 4 materias posibles para la primera hora y 5 para la segunda hora (sin repetir materia), ¿cómo se calcula la cantidad de combinaciones posibles para esas dos horas?"
tipo: mc
opciones_explicitas:
  - "Multiplicando 4 × 5"
  - "Sumando 4 + 5"
  - "Dividiendo 5 ÷ 4"
respuesta: "Multiplicando 4 × 5"

explicacion: |
  Dos decisiones independientes (una por cada hora) se multiplican,
  no se suman.
```

### 22 — Aplicación real: torneo de eliminación

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "intermedio"
  tags: ["conteo", "aplicacion"]

enunciado: "En una final a 3 partidos independientes (cada uno con 2 resultados posibles: gana el equipo A o gana el equipo B), ¿cuántas secuencias distintas de resultados de los 3 partidos son posibles?"
tipo: mc
opciones_explicitas:
  - "2³ = 8"
  - "2 × 3 = 6"
  - "3² = 9"
respuesta: "2³ = 8"

explicacion: |
  Cada partido tiene 2 resultados posibles, y hay 3 partidos
  independientes: 2×2×2 = 8.
```

### 23 — El orden de los factores no cambia el resultado

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "basico"
  tags: ["conteo"]

respuesta: verdadero
tipo: vf

enunciado: "En el principio multiplicativo, no importa en qué orden se multipliquen las cantidades de cada paso — el resultado final es el mismo."

explicacion: |
  La multiplicación es conmutativa: 3×4×2 da lo mismo que 2×3×4.
```

### 24 — Problema: elegir entre 3 categorías con distinta cantidad de opciones

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "intermedio"
  tags: ["conteo", "problema"]

variables:
  tapas: random(2, 4)
  rellenos: random(3, 6)
  coberturas: random(2, 5)

respuesta: tapas * rellenos * coberturas
tipo: input

enunciado: "Una pastelería ofrece {tapas} tipos de masa, {rellenos} tipos de relleno y {coberturas} tipos de cobertura. ¿Cuántas tortas distintas (una masa, un relleno, una cobertura) se pueden armar?"

pasos:
  - "Total = {tapas} × {rellenos} × {coberturas} = {tapas * rellenos * coberturas}"

explicacion: |
  Es el mismo patrón del menú de la pregunta 3, con otro contexto.
```

### 25 — Cierre: para qué sirve este bloque

```
metadata:
  materia: "matematicas"
  tema: "principio_multiplicativo_de_conteo"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve el principio multiplicativo de conteo?"
tipo: mc
opciones_explicitas:
  - "Para calcular cuántas combinaciones posibles hay en una elección de varios pasos, sin tener que enumerarlas una por una"
  - "Sólo sirve para contar objetos físicos, uno por uno"
  - "Sólo aplica cuando hay exactamente dos pasos"
respuesta: "Para calcular cuántas combinaciones posibles hay en una elección de varios pasos, sin tener que enumerarlas una por una"

explicacion: |
  Es la base directa de permutaciones, variaciones y combinaciones —
  los tres módulos que siguen.
```
