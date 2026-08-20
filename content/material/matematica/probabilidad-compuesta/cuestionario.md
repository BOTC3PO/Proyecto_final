# Matemática — Probabilidad compuesta (cuestionario, 26 preguntas VBLang)

> Tema: `D9`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué calcula la probabilidad compuesta

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "basico"
  tags: ["probabilidad_compuesta", "vocabulario"]

enunciado: "¿Qué calcula la probabilidad compuesta?"
tipo: mc
opciones_explicitas:
  - "La probabilidad de que ocurran varios eventos a la vez, o de que ocurra al menos uno de varios"
  - "La probabilidad de un único evento simple"
  - "Sólo la probabilidad de eventos que nunca pueden ocurrir"
respuesta: "La probabilidad de que ocurran varios eventos a la vez, o de que ocurra al menos uno de varios"

explicacion: |
  Combina la probabilidad simple con la independencia entre eventos.
```

### 2 — Completar: regla del Y (independientes)

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "intermedio"
  tags: ["probabilidad_compuesta", "completar"]

tipo: completar
enunciado: "Completá: si A y B son independientes, P(A y B) = P(A) × ___."
respuestas_validas:
  - "P(B)"

explicacion: |
  Es la misma regla del producto ya usada con los diagramas de árbol.
```

### 3 — Problema: probabilidad del Y con independientes

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "problema"]

variables:
  pa: uno_de([0.3, 0.4, 0.5, 0.6])
  pb: uno_de([0.2, 0.5, 0.7])

respuesta: redondear(pa * pb, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "A y B son eventos independientes, con P(A)={pa} y P(B)={pb}. ¿Cuál es P(A y B)?"

pasos:
  - "P(A y B) = {pa} × {pb} = {redondear(pa * pb, 3)}"

explicacion: |
  Se multiplican directo, porque son independientes.
```

### 4 — Completar: regla del O (excluyentes)

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "intermedio"
  tags: ["probabilidad_compuesta", "completar"]

tipo: completar
enunciado: "Completá: si A y B son mutuamente excluyentes (no pueden ocurrir juntos), P(A o B) = P(A) + ___."
respuestas_validas:
  - "P(B)"

explicacion: |
  Al no poder solaparse, no hay nada que restar.
```

### 5 — Problema: probabilidad del O con eventos excluyentes

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "intermedio"
  tags: ["probabilidad_compuesta", "problema"]

respuesta: redondear(2 / 6, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Al tirar un dado de 6 caras, ¿cuál es la probabilidad de que salga 2 O que salga 5? (no pueden salir los dos a la vez en un solo tiro)"

pasos:
  - "P(2) = 1/6, P(5) = 1/6. Son mutuamente excluyentes."
  - "P(2 o 5) = 1/6 + 1/6 = {redondear(2 / 6, 3)}"

explicacion: |
  En un solo tiro de dado, no puede salir 2 y 5 a la vez — se suman
  directo.
```

### 6 — Sumar directo sobrestima si los eventos se solapan

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta"]

respuesta: verdadero
tipo: vf

enunciado: "Si A y B PUEDEN ocurrir juntos, sumar P(A) + P(B) directo sobrestima la probabilidad de 'A o B', porque el caso en que ocurren ambos se cuenta dos veces."

explicacion: |
  Por eso hay que restar P(A y B) una vez, igual que con la
  cardinalidad de la unión de conjuntos.
```

### 7 — Completar: regla del O general

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "completar"]

tipo: completar
enunciado: "Completá: en general (aunque A y B puedan solaparse), P(A o B) = P(A) + P(B) − ___."
respuestas_validas:
  - "P(A y B)"

explicacion: |
  Es la fórmula de inclusión-exclusión, igual que
  |A∪B|=|A|+|B|−|A∩B|.
```

### 8 — Problema: probabilidad del O general

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "problema"]

variables:
  pa: uno_de([0.3, 0.4, 0.5])
  pb: uno_de([0.2, 0.3, 0.4])
  pab: uno_de([0.1, 0.05])

respuesta: redondear(pa + pb - pab, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "P(A)={pa}, P(B)={pb}, y P(A y B)={pab} (A y B SÍ pueden ocurrir juntos). ¿Cuál es P(A o B)?"

pasos:
  - "P(A o B) = {pa} + {pb} − {pab} = {redondear(pa + pb - pab, 3)}"

explicacion: |
  Se resta la superposición para no contarla dos veces.
```

### 9 — Cuándo multiplicar y cuándo sumar

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "intermedio"
  tags: ["probabilidad_compuesta"]

enunciado: "¿Cuál es la pista para saber si hay que multiplicar o sumar dos probabilidades?"
tipo: mc
opciones_explicitas:
  - "'Y' (ambos a la vez) sugiere multiplicar; 'O' (cualquiera de los dos) sugiere sumar (ajustando si se solapan)"
  - "Siempre hay que multiplicar, sin importar la pregunta"
  - "Siempre hay que sumar, sin importar la pregunta"
respuesta: "'Y' (ambos a la vez) sugiere multiplicar; 'O' (cualquiera de los dos) sugiere sumar (ajustando si se solapan)"

explicacion: |
  No es una regla mágica, pero es una guía práctica confiable para
  empezar a plantear el problema.
```

### 10 — Problema: par O múltiplo de 3 en un dado (se solapan en el 6)

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "problema"]

respuesta: redondear(4 / 6, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Al tirar un dado de 6 caras, ¿cuál es la probabilidad de que salga un número PAR o un MÚLTIPLO DE 3? (el 6 es ambas cosas a la vez)"

pasos:
  - "P(par) = 3/6 = {2, 4, 6}. P(múltiplo de 3) = 2/6 = {3, 6}. P(par y múltiplo de 3) = 1/6 = {6}."
  - "P(par o múltiplo de 3) = 3/6 + 2/6 − 1/6 = 4/6 = {redondear(4 / 6, 3)}"

explicacion: |
  El 6 cumple las dos condiciones — sin restar esa superposición, se
  contaría dos veces.
```

### 11 — Ordenar: pasos para decidir qué regla usar

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "ordenar"]

enunciado: "Ordená los pasos para decidir y aplicar la regla correcta de probabilidad compuesta."
tipo: ordenar
opciones_explicitas:
  - "Si es 'O', revisar si los eventos pueden ocurrir juntos: si no, sumar directo; si sí, sumar y restar la superposición"
  - "Identificar si la pregunta pide 'Y' (ambos) o 'O' (cualquiera)"
  - "Si es 'Y', revisar si los eventos son independientes o dependientes, y multiplicar con las probabilidades correspondientes"
respuesta_orden: ["Identificar si la pregunta pide 'Y' (ambos) o 'O' (cualquiera)", "Si es 'Y', revisar si los eventos son independientes o dependientes, y multiplicar con las probabilidades correspondientes", "Si es 'O', revisar si los eventos pueden ocurrir juntos: si no, sumar directo; si sí, sumar y restar la superposición"]
explicacion: |
  Identificar primero 'Y' vs 'O' es el paso que determina qué
  operación aplicar.
```

### 12 — Problema: herencia genética simplificada (cuadro de Punnett)

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "problema"]

respuesta: 0.25
tipo: input

enunciado: "Cada progenitor (Aa) tiene 1/2 de probabilidad de transmitir el alelo recesivo 'a' (independiente del otro progenitor). ¿Cuál es la probabilidad de que un hijo herede el alelo recesivo de AMBOS progenitores (genotipo aa)?"

pasos:
  - "P(a del padre) = 1/2. P(a de la madre) = 1/2. Son independientes."
  - "P(aa) = 1/2 × 1/2 = 0,25"

explicacion: |
  Es exactamente la proporción 1/4 del cuadro de Punnett clásico
  (Aa × Aa → 1 AA : 2 Aa : 1 aa), calculada con probabilidad compuesta
  en vez de dibujar el cuadro de 4 casilleros.
```

### 13 — Problema: al menos una cara en dos monedas (con complemento)

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "problema"]

respuesta: 0.75
tipo: input

enunciado: "Se lanzan 2 monedas independientes. ¿Cuál es la probabilidad de que salga AL MENOS una cara (una o las dos)?"

pasos:
  - "P(ninguna cara) = P(ceca y ceca) = 0,5 × 0,5 = 0,25"
  - "P(al menos una cara) = 1 − P(ninguna) = 1 − 0,25 = 0,75"

explicacion: |
  Para 'al menos uno', suele ser más fácil calcular el complemento
  ('ninguno') y restar de 1, en vez de sumar todos los casos con al
  menos una cara por separado.
```

### 14 — Aplicación real: cuadro de Punnett

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "basico"
  tags: ["probabilidad_compuesta", "aplicacion"]

enunciado: "¿Qué relación tiene el cuadro de Punnett de Biología con la probabilidad compuesta?"
tipo: mc
opciones_explicitas:
  - "Es exactamente probabilidad compuesta (eventos independientes que se multiplican), con otra notación visual"
  - "No tiene ninguna relación real, son temas separados"
  - "El cuadro de Punnett reemplaza por completo a la probabilidad, no la necesita"
respuesta: "Es exactamente probabilidad compuesta (eventos independientes que se multiplican), con otra notación visual"

explicacion: |
  Heredar un alelo de cada progenitor son eventos independientes —
  el cuadro de Punnett es una forma visual de multiplicar esas
  probabilidades.
```

### 15 — Problema: cruza genética con proporciones distintas

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "problema"]

variables:
  p_madre: uno_de([0.5, 1])
  p_padre: uno_de([0.5, 1])

respuesta: redondear(p_madre * p_padre, 3)
tipo: input

enunciado: "La probabilidad de que la madre transmita el alelo recesivo es {p_madre}, y la del padre es {p_padre} (eventos independientes). ¿Cuál es la probabilidad de que el hijo herede el alelo recesivo de ambos?"

pasos:
  - "P(ambos) = {p_madre} × {p_padre} = {redondear(p_madre * p_padre, 3)}"

explicacion: |
  Si un progenitor es homocigota (p=1), siempre transmite ese alelo,
  pero la regla del producto sigue aplicando igual.
```

### 16 — La regla del producto asume independencia (o se ajusta si no la hay)

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta"]

respuesta: verdadero
tipo: vf

enunciado: "P(A y B) = P(A) × P(B) sólo vale directo si A y B son independientes; si son dependientes, la segunda probabilidad hay que recalcularla sabiendo que el primer evento ya ocurrió (como en el diagrama de árbol sin reposición)."

explicacion: |
  Es la misma distinción de `../independencia-de-eventos-y-diagrama-de-arbol/`.
```

### 17 — Problema: sacar as o rey (excluyentes)

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "problema"]

respuesta: redondear(8 / 40, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "De un mazo de 40 cartas (4 ases, 4 reyes), ¿cuál es la probabilidad de sacar un AS o un REY en una sola extracción? (ninguna carta es las dos cosas a la vez)"

pasos:
  - "P(as) = 4/40, P(rey) = 4/40. Son mutuamente excluyentes (ninguna carta es ambas)."
  - "P(as o rey) = 4/40 + 4/40 = 8/40 = {redondear(8 / 40, 3)}"

explicacion: |
  Ninguna carta puede ser as y rey a la vez, así que se suman directo
  sin restar nada.
```

### 18 — Problema: figura o carta de oro (se solapan)

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "problema"]

respuesta: redondear((12 / 40) + (10 / 40) - (3 / 40), 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "De un mazo de 40 cartas (4 palos de 10 cartas, con 3 figuras por palo: 12 figuras en total, 10 cartas de oro), ¿cuál es la probabilidad de sacar una FIGURA o una carta de ORO? (las figuras de oro son ambas cosas a la vez: 3 cartas)"

pasos:
  - "P(figura) = 12/40, P(oro) = 10/40, P(figura y oro) = 3/40 (las 3 figuras de oro)"
  - "P(figura o oro) = 12/40 + 10/40 − 3/40 = {redondear((12 / 40) + (10 / 40) - (3 / 40), 3)}"

explicacion: |
  Hay 3 cartas que son figura Y de oro a la vez — sin restarlas, se
  contarían dos veces.
```

### 19 — Aplicación real: riesgo compuesto

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "basico"
  tags: ["probabilidad_compuesta", "aplicacion"]

enunciado: "Si la probabilidad de que llueva es 0,4 y la de que se corte la luz (independiente de la lluvia) es 0,1, ¿cómo se calcula la probabilidad de que pasen LAS DOS COSAS a la vez?"
tipo: mc
opciones_explicitas:
  - "Multiplicando 0,4 × 0,1, porque son eventos independientes y se pide 'Y'"
  - "Sumando 0,4 + 0,1, porque se pide 'ambas cosas'"
  - "No se puede calcular sin más información sobre el clima"
respuesta: "Multiplicando 0,4 × 0,1, porque son eventos independientes y se pide 'Y'"

explicacion: |
  'Ambas cosas a la vez' es la palabra clave de la regla del producto,
  no de la suma.
```

### 20 — Problema: dos máquinas independientes, ambas fallan

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "problema"]

variables:
  falla1: uno_de([0.05, 0.1, 0.15])
  falla2: uno_de([0.02, 0.08])

respuesta: redondear(falla1 * falla2, 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Dos máquinas funcionan de forma independiente. La probabilidad de que la máquina 1 falle es {falla1}, y la de que la máquina 2 falle es {falla2}. ¿Cuál es la probabilidad de que AMBAS fallen a la vez?"

pasos:
  - "P(ambas fallan) = {falla1} × {falla2} = {redondear(falla1 * falla2, 4)}"

explicacion: |
  Es mucho menos probable que fallen las dos juntas que que falle
  sólo una — por eso los sistemas críticos usan componentes
  redundantes e independientes.
```

### 21 — P(A y B) nunca es mayor que P(A) sola

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta"]

respuesta: verdadero
tipo: vf

enunciado: "P(A y B) nunca puede ser mayor que P(A) sola (pedir una condición extra nunca aumenta la probabilidad, como mucho la deja igual)."

explicacion: |
  Multiplicar por P(B) (que es como mucho 1) nunca puede aumentar el
  valor de P(A).
```

### 22 — Dos condiciones sobre el MISMO tiro no son 'dos eventos independientes'

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta"]

enunciado: "Al tirar UN SOLO dado, para calcular P(par Y mayor que 3), ¿por qué NO corresponde multiplicar P(par) × P(mayor que 3) como si fueran dos experimentos independientes?"
tipo: mc
opciones_explicitas:
  - "Porque son dos condiciones sobre el MISMO resultado de un único tiro, no dos eventos de experimentos separados — hay que contar directo los casos que cumplen ambas condiciones a la vez"
  - "Porque en realidad sí corresponde multiplicar, sin ninguna excepción"
  - "Porque un dado nunca puede cumplir dos condiciones a la vez"
respuesta: "Porque son dos condiciones sobre el MISMO resultado de un único tiro, no dos eventos de experimentos separados — hay que contar directo los casos que cumplen ambas condiciones a la vez"

explicacion: |
  Par y mayor que 3 en un dado: {4, 6} cumplen ambas → P=2/6, que en
  general NO coincide con P(par)×P(mayor que 3) = (3/6)×(3/6) = 9/36 —
  son cálculos distintos porque no es una multiplicación de dos
  tiradas separadas.
```

### 23 — Problema: verificar la diferencia del punto anterior

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "problema"]

respuesta: redondear(2 / 6, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "En un solo tiro de un dado de 6 caras, ¿cuál es la probabilidad real de que salga un número PAR y MAYOR QUE 3 a la vez (contando los casos directo: {4, 6})?"

pasos:
  - "Los números pares y mayores que 3, del 1 al 6, son 4 y 6: 2 casos favorables."
  - "P = 2/6 = {redondear(2 / 6, 3)}"

explicacion: |
  Es distinto del resultado de multiplicar P(par)×P(mayor que 3) —
  confirma por qué esa multiplicación no aplicaba acá.
```

### 24 — La independencia se verifica, no se asume siempre

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta"]

respuesta: verdadero
tipo: vf

enunciado: "Antes de aplicar P(A y B) = P(A) × P(B), conviene confirmar que A y B son realmente independientes — asumirlo sin pensar puede llevar a un resultado incorrecto."

explicacion: |
  Es el error más común de este tema: multiplicar directo sin
  verificar si corresponde.
```

### 25 — Problema: probabilidad de ningún éxito en varios intentos independientes

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "problema"]

variables:
  p_exito: uno_de([0.3, 0.4])
  intentos: uno_de([2, 3])

respuesta: redondear((1 - p_exito) ^ intentos, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Un jugador tiene {p_exito} de probabilidad de éxito en cada intento (independientes entre sí). ¿Cuál es la probabilidad de que falle los {intentos} intentos, uno tras otro?"

pasos:
  - "P(falla) en cada intento = 1 − {p_exito} = {1 - p_exito}"
  - "P(falla los {intentos}) = ({1 - p_exito})^{intentos} = {redondear((1 - p_exito) ^ intentos, 3)}"

explicacion: |
  Se multiplica la probabilidad de fallar, la misma cantidad de veces
  que hay intentos, porque son independientes.
```

### 26 — Cierre: para qué sirve este bloque

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve la probabilidad compuesta?"
tipo: mc
opciones_explicitas:
  - "Para calcular la probabilidad de que ocurran varios eventos a la vez, o al menos uno de varios, combinando las reglas del Y y del O"
  - "Sólo sirve para dados y monedas"
  - "Sólo aplica cuando los eventos son mutuamente excluyentes"
respuesta: "Para calcular la probabilidad de que ocurran varios eventos a la vez, o al menos uno de varios, combinando las reglas del Y y del O"

explicacion: |
  Cierra este bloque de Tronco 4.b y es la puerta directa al cuadro
  de Punnett de Biología — el mismo cálculo, otra notación.
```
