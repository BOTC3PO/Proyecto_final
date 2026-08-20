# Matemática — Congruencia de triángulos (cuestionario, 28 preguntas VBLang)

> Tema: `GO3`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es la congruencia de triángulos

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "basico"
  tags: ["congruencia", "vocabulario"]

enunciado: "¿Qué significa que dos triángulos sean congruentes?"
tipo: mc
opciones_explicitas:
  - "Que tienen exactamente la misma forma y el mismo tamaño"
  - "Que tienen la misma forma, aunque sean de tamaños distintos"
  - "Que tienen al menos un lado en común"
respuesta: "Que tienen exactamente la misma forma y el mismo tamaño"

explicacion: |
  Sus lados y ángulos correspondientes miden exactamente lo mismo.
```

### 2 — Lados y ángulos correspondientes

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "basico"
  tags: ["congruencia", "vocabulario"]

enunciado: "¿Qué son los \"lados correspondientes\" entre dos triángulos congruentes?"
tipo: mc
opciones_explicitas:
  - "Los lados que ocupan la misma posición según cómo se nombran los vértices de cada triángulo"
  - "Cualquier par de lados, elegidos al azar"
  - "Sólo el lado más largo de cada triángulo"
respuesta: "Los lados que ocupan la misma posición según cómo se nombran los vértices de cada triángulo"

explicacion: |
  El orden de los vértices al nombrar cada triángulo indica qué lado
  corresponde a cuál.
```

### 3 — Criterio LAL

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "criterios", "vocabulario"]

enunciado: "¿Qué dice el criterio de congruencia LAL (Lado-Ángulo-Lado)?"
tipo: mc
opciones_explicitas:
  - "Si dos lados y el ángulo comprendido entre ellos son iguales en ambos triángulos, son congruentes"
  - "Si los tres lados son iguales, son congruentes"
  - "Si los tres ángulos son iguales, son congruentes"
respuesta: "Si dos lados y el ángulo comprendido entre ellos son iguales en ambos triángulos, son congruentes"

explicacion: |
  El ángulo tiene que ser específicamente el que queda ENTRE esos dos
  lados.
```

### 4 — Criterio ALA

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "criterios", "vocabulario"]

enunciado: "¿Qué dice el criterio de congruencia ALA (Ángulo-Lado-Ángulo)?"
tipo: mc
opciones_explicitas:
  - "Si dos ángulos y el lado comprendido entre ellos son iguales en ambos triángulos, son congruentes"
  - "Si los tres lados son iguales, son congruentes"
  - "Si dos lados cualquiera son iguales, son congruentes"
respuesta: "Si dos ángulos y el lado comprendido entre ellos son iguales en ambos triángulos, son congruentes"

explicacion: |
  El lado tiene que ser específicamente el que queda ENTRE esos dos
  ángulos.
```

### 5 — Criterio LLL

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "criterios", "vocabulario"]

enunciado: "¿Qué dice el criterio de congruencia LLL (Lado-Lado-Lado)?"
tipo: mc
opciones_explicitas:
  - "Si los tres lados de un triángulo son iguales a los tres lados del otro, son congruentes"
  - "Si un solo lado es igual, ya son congruentes"
  - "Si los tres ángulos son iguales, son congruentes"
respuesta: "Si los tres lados de un triángulo son iguales a los tres lados del otro, son congruentes"

explicacion: |
  No hace falta conocer ningún ángulo para este criterio.
```

### 6 — Aplicar LLL: caso congruente

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "criterios", "problema"]

variables:
  a: random(4, 15)
  b: random(4, 15)
  c: random(4, 15)

restricciones:
  - a != b
  - b != c

respuesta: verdadero
tipo: vf

enunciado: "El triángulo 1 tiene lados {a} cm, {b} cm y {c} cm. El triángulo 2 tiene lados {a} cm, {b} cm y {c} cm. ¿Son congruentes por el criterio LLL?"

explicacion: |
  Los tres lados coinciden uno a uno: sí son congruentes por LLL.
```

### 7 — Aplicar LLL: caso NO congruente

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "criterios", "problema"]

variables:
  a: random(4, 15)
  b: random(4, 15)
  c: random(4, 15)
  c2: c + random(1, 5)

restricciones:
  - a != b
  - b != c

respuesta: falso
tipo: vf

enunciado: "El triángulo 1 tiene lados {a} cm, {b} cm y {c} cm. El triángulo 2 tiene lados {a} cm, {b} cm y {c2} cm. ¿Son congruentes por el criterio LLL?"

explicacion: |
  El tercer lado no coincide ({c} cm contra {c2} cm): no se cumple LLL.
```

### 8 — Aplicar LAL: caso congruente

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "criterios", "problema"]

variables:
  a: random(4, 15)
  b: random(4, 15)
  angulo: random(30, 100)

respuesta: verdadero
tipo: vf

enunciado: "El triángulo 1 tiene lados {a} cm y {b} cm, con un ángulo de {angulo}° comprendido entre ellos. El triángulo 2 tiene lados {a} cm y {b} cm, con un ángulo de {angulo}° comprendido entre ellos. ¿Son congruentes por el criterio LAL?"

explicacion: |
  Coinciden los dos lados Y el ángulo comprendido entre ellos: sí, por
  LAL.
```

### 9 — Aplicar LAL: caso NO congruente (ángulo distinto)

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "criterios", "problema"]

variables:
  a: random(4, 15)
  b: random(4, 15)
  angulo: random(30, 90)
  angulo2: angulo + random(5, 20)

respuesta: falso
tipo: vf

enunciado: "El triángulo 1 tiene lados {a} cm y {b} cm, con un ángulo de {angulo}° comprendido entre ellos. El triángulo 2 tiene lados {a} cm y {b} cm, con un ángulo de {angulo2}° comprendido entre ellos. ¿Son congruentes por el criterio LAL?"

explicacion: |
  Aunque los lados coincidan, el ángulo comprendido es distinto
  ({angulo}° contra {angulo2}°): no se cumple LAL.
```

### 10 — Aplicar ALA: caso congruente

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "criterios", "problema"]

variables:
  angulo1: random(30, 70)
  angulo2: random(30, 70)
  lado: random(4, 15)

respuesta: verdadero
tipo: vf

enunciado: "El triángulo 1 tiene ángulos de {angulo1}° y {angulo2}°, con un lado de {lado} cm comprendido entre ellos. El triángulo 2 tiene ángulos de {angulo1}° y {angulo2}°, con un lado de {lado} cm comprendido entre ellos. ¿Son congruentes por el criterio ALA?"

explicacion: |
  Coinciden los dos ángulos Y el lado comprendido entre ellos: sí, por
  ALA.
```

### 11 — Aplicar ALA: caso NO congruente (lado distinto)

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "criterios", "problema"]

variables:
  angulo1: random(30, 70)
  angulo2: random(30, 70)
  lado: random(4, 15)
  lado2: lado + random(1, 5)

respuesta: falso
tipo: vf

enunciado: "El triángulo 1 tiene ángulos de {angulo1}° y {angulo2}°, con un lado de {lado} cm comprendido entre ellos. El triángulo 2 tiene ángulos de {angulo1}° y {angulo2}°, con un lado de {lado2} cm comprendido entre ellos. ¿Son congruentes por el criterio ALA?"

explicacion: |
  El lado comprendido no coincide ({lado} cm contra {lado2} cm): no se
  cumple ALA.
```

### 12 — Triángulos congruentes tienen ángulos correspondientes iguales

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "basico"
  tags: ["congruencia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos triángulos son congruentes, sus tres pares de ángulos correspondientes miden exactamente lo mismo."

explicacion: |
  Es parte de la definición de congruencia.
```

### 13 — Triángulos congruentes tienen lados correspondientes iguales

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "basico"
  tags: ["congruencia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos triángulos son congruentes, sus tres pares de lados correspondientes miden exactamente lo mismo."

explicacion: |
  Es la otra mitad de la definición de congruencia.
```

### 14 — Los mismos 3 ángulos NO garantizan congruencia

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "avanzado"
  tags: ["congruencia", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "Si dos triángulos tienen sus 3 ángulos iguales, uno a uno, eso ya alcanza para garantizar que son congruentes."

explicacion: |
  Tener los mismos 3 ángulos sólo garantiza la misma FORMA (pueden ser de
  tamaños distintos, como una foto ampliada) — eso se llama semejanza,
  no congruencia.
```

### 15 — Qué es la semejanza (para contrastar con congruencia)

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "avanzado"
  tags: ["congruencia", "semejanza", "vocabulario"]

enunciado: "¿En qué se diferencia la semejanza de la congruencia?"
tipo: mc
opciones_explicitas:
  - "La semejanza permite misma forma con tamaños distintos; la congruencia exige forma Y tamaño iguales"
  - "Son exactamente lo mismo, con otro nombre"
  - "La semejanza sólo aplica a círculos"
respuesta: "La semejanza permite misma forma con tamaños distintos; la congruencia exige forma Y tamaño iguales"

explicacion: |
  Dos triángulos semejantes tienen ángulos iguales y lados
  proporcionales (no necesariamente iguales).
```

### 16 — Elegir el criterio correcto: dos lados y el ángulo entre ellos

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "criterios"]

enunciado: "Si se conocen dos lados de cada triángulo y el ángulo comprendido entre ellos, ¿qué criterio conviene usar?"
tipo: mc
opciones_explicitas:
  - "LAL"
  - "ALA"
  - "LLL"
respuesta: "LAL"

explicacion: |
  Lado-Ángulo-Lado: dos lados y el ángulo comprendido.
```

### 17 — Elegir el criterio correcto: dos ángulos y el lado entre ellos

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "criterios"]

enunciado: "Si se conocen dos ángulos de cada triángulo y el lado comprendido entre ellos, ¿qué criterio conviene usar?"
tipo: mc
opciones_explicitas:
  - "ALA"
  - "LAL"
  - "LLL"
respuesta: "ALA"

explicacion: |
  Ángulo-Lado-Ángulo: dos ángulos y el lado comprendido.
```

### 18 — Elegir el criterio correcto: los tres lados

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "criterios"]

enunciado: "Si se conocen los tres lados de cada triángulo (y ningún ángulo), ¿qué criterio conviene usar?"
tipo: mc
opciones_explicitas:
  - "LLL"
  - "LAL"
  - "ALA"
respuesta: "LLL"

explicacion: |
  Lado-Lado-Lado: los tres lados, sin necesidad de ángulos.
```

### 19 — Basta verificar 3 datos, no los 6

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Gracias a los criterios de congruencia, alcanza con verificar 3 datos bien elegidos (no los 6: 3 lados + 3 ángulos) para confirmar que dos triángulos son congruentes."

explicacion: |
  Es justamente para qué sirven los criterios: ahorrar verificaciones.
```

### 20 — El ángulo tiene que ser el comprendido, no cualquiera

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "avanzado"
  tags: ["congruencia", "criterios", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "Para aplicar el criterio LAL, sirve cualquier ángulo del triángulo, no necesariamente el que está comprendido entre los dos lados conocidos."

explicacion: |
  Tiene que ser específicamente el ángulo ENTRE esos dos lados — usar
  otro ángulo no garantiza la congruencia de la misma forma.
```

### 21 — Problema: verificar congruencia con datos mixtos

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "avanzado"
  tags: ["congruencia", "problema"]

variables:
  a: random(5, 12)
  angulo: random(40, 90)
  b: random(5, 12)

enunciado: "Dos triángulos comparten un lado de {a} cm, un ángulo de {angulo}° comprendido, y otro lado de {b} cm. ¿Qué criterio de congruencia se está aplicando?"
tipo: mc
opciones_explicitas:
  - "LAL"
  - "ALA"
  - "LLL"
respuesta: "LAL"

explicacion: |
  Lado, ángulo comprendido, lado: es exactamente el patrón de LAL.
```

### 22 — Completar: criterio LLL

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "basico"
  tags: ["congruencia", "completar"]

tipo: completar
enunciado: "Completá: el criterio LLL no necesita conocer ningún ___ para garantizar la congruencia."
respuestas_validas:
  - "ángulo"

explicacion: |
  Con los tres lados alcanza.
```

### 23 — Completar: qué mide igual en triángulos congruentes

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "basico"
  tags: ["congruencia", "completar"]

tipo: completar
enunciado: "Completá: dos triángulos congruentes tienen la misma forma y el mismo ___."
respuestas_validas:
  - "tamaño"

explicacion: |
  Forma Y tamaño: es la definición completa de congruencia.
```

### 24 — Ordenar los pasos para demostrar congruencia por LAL

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "avanzado"
  tags: ["congruencia", "orden"]

tipo: ordenar
enunciado: "Ordená los pasos para demostrar que dos triángulos son congruentes usando el criterio LAL."
opciones_explicitas:
  - "Confirmar que el ángulo comprendido entre esos dos lados también es igual en ambos"
  - "Identificar dos lados de un triángulo y sus correspondientes en el otro"
  - "Concluir que los triángulos son congruentes por LAL"
  - "Medir o verificar que esos dos pares de lados sean iguales"
respuesta_orden: ["Identificar dos lados de un triángulo y sus correspondientes en el otro", "Medir o verificar que esos dos pares de lados sean iguales", "Confirmar que el ángulo comprendido entre esos dos lados también es igual en ambos", "Concluir que los triángulos son congruentes por LAL"]
explicacion: |
  Se identifican los lados correspondientes, se verifica su igualdad, se
  confirma el ángulo comprendido, y recién ahí se concluye la
  congruencia.
```

### 25 — Un lado y dos ángulos NO comprendidos (caso ambiguo)

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "avanzado"
  tags: ["congruencia", "criterios", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para que el criterio ALA aplique, el lado conocido tiene que estar exactamente ENTRE los dos ángulos conocidos, no en cualquier otra posición."

explicacion: |
  Si el lado no está comprendido entre esos dos ángulos, no es el
  patrón ALA (aunque sigue habiendo otras formas de probar congruencia
  en ese caso, fuera del alcance de este módulo).
```

### 26 — Problema: reconocer LLL con lados en otro orden

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "avanzado"
  tags: ["congruencia", "criterios", "problema"]

variables:
  a: random(5, 10)
  b: random(11, 16)
  c: random(17, 22)

respuesta: verdadero
tipo: vf

enunciado: "El triángulo 1 tiene lados {a} cm, {b} cm y {c} cm. El triángulo 2 tiene esos mismos tres lados, pero nombrados en otro orden: {c} cm, {a} cm y {b} cm. ¿Siguen siendo congruentes por LLL?"

explicacion: |
  El orden en que se listan los lados no importa: lo que importa es que
  el CONJUNTO de tres medidas coincida entre ambos triángulos.
```

### 27 — La congruencia es una relación simétrica

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si el triángulo A es congruente con el triángulo B, entonces el triángulo B también es congruente con el triángulo A."

explicacion: |
  La congruencia no tiene una dirección: es una relación simétrica.
```

### 28 — Cierre: los criterios ahorran trabajo

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "basico"
  tags: ["congruencia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los criterios LAL, ALA y LLL existen para poder afirmar que dos triángulos son congruentes sin tener que medir los 6 datos completos (3 lados y 3 ángulos) de cada uno."

explicacion: |
  Es la razón de ser de todo este módulo.
```
