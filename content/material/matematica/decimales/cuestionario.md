# Matemática — Decimales (cuestionario, 26 preguntas VBLang)

> Tema: `N8` (mitad). Ver `teoria.md` en esta misma carpeta. Las
> fracciones usadas se eligen con denominadores que dan decimales
> "cortos" (2, 4, 5, 8, 10, 20, 25, 50), para no meterse con decimales
> periódicos infinitos (tema que no forma parte de este nivel).

---

### 1 — Qué es un número decimal

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "basico"
  tags: ["decimales", "vocabulario"]

enunciado: "¿Qué es un número decimal?"
tipo: mc
opciones_explicitas:
  - "Una fracción con denominador potencia de 10, escrita con coma"
  - "Cualquier número que no sea entero"
  - "Un número negativo"
respuesta: "Una fracción con denominador potencia de 10, escrita con coma"

explicacion: |
  0,3 es otra forma de escribir 3/10; 0,25 es otra forma de escribir
  25/100.
```

### 2 — Fracción a decimal (denominador ya potencia de 10)

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "basico"
  tags: ["decimales", "conversion"]

variables:
  n: random(1, 9)

respuesta: n / 10
tipo: input
tolerancia_abs: 0.001

enunciado: "¿Cómo se escribe {n}/10 en decimal?"

explicacion: |
  Cuando el denominador ya es una potencia de 10, se escribe directo con
  coma.
```

### 3 — Fracción a decimal (dividir)

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "conversion"]

variables:
  denominadores: [2, 4, 5, 8, 20, 25, 50]
  d: uno_de(denominadores)
  n: random(1, d - 1)

respuesta: n / d
tipo: input
tolerancia_abs: 0.001

enunciado: "¿Cómo se escribe {n}/{d} en decimal?"

pasos:
  - "{n} ÷ {d} = {n / d}"

explicacion: |
  Cuando el denominador no es una potencia de 10, se divide el numerador
  por el denominador.
```

### 4 — Decimal a fracción: el numerador

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "basico"
  tags: ["decimales", "conversion"]

variables:
  t: random(1, 9)
  h: random(0, 9)
  decimal: t / 10 + h / 100

respuesta: t * 10 + h
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el numerador de la fracción equivalente a {decimal} (sobre denominador 100)?"

explicacion: |
  El número decimal sin la coma es, directamente, el numerador sobre la
  potencia de 10 que corresponda.
```

### 5 — Decimal a fracción: el denominador

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "basico"
  tags: ["decimales", "conversion"]

variables:
  t: random(1, 9)
  h: random(1, 9)
  m: random(0, 9)
  decimal: t / 10 + h / 100 + m / 1000

respuesta: 1000
tipo: input
tolerancia_abs: 0

enunciado: "{decimal} tiene 3 cifras decimales. ¿Cuál es el denominador de su fracción equivalente?"

explicacion: |
  3 cifras decimales corresponden a milésimos: denominador 1.000.
```

### 6 — Comparar decimales

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "comparacion"]

variables:
  entero: random(1, 20)
  t1: random(0, 9)
  t2: random(0, 9)
  a: entero + t1 / 10
  b: entero + t2 / 10

restricciones:
  - t1 != t2

respuesta: (a > b)
tipo: vf

enunciado: "¿Es {a} mayor que {b}?"

explicacion: |
  Con la misma parte entera, se compara la primera cifra decimal.
```

### 7 — Comparar decimales con distinta cantidad de cifras

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "avanzado"
  tags: ["decimales", "comparacion"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es cierto que 0,5 es mayor que 0,45?"

explicacion: |
  0,5 es lo mismo que 0,50: comparando cifra por cifra, 50 centésimos es
  más que 45 centésimos, aunque "0,45" tenga más cifras escritas.
```

### 8 — Agregar ceros no cambia el valor

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "basico"
  tags: ["decimales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "0,7 y 0,70 representan exactamente el mismo valor."

explicacion: |
  Agregar un cero al final de la parte decimal no cambia el valor del
  número.
```

### 9 — Sumar decimales

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "suma"]

variables:
  e1: random(1, 20)
  t1: random(0, 9)
  e2: random(1, 20)
  t2: random(0, 9)
  a: e1 + t1 / 10
  b: e2 + t2 / 10

respuesta: a + b
tipo: input
tolerancia_abs: 0.001

enunciado: "¿Cuánto es {a} + {b}?"

pasos:
  - "Se alinean las comas y se suma como siempre: {a} + {b} = {a + b}"

explicacion: |
  Sumar decimales es igual que sumar enteros, alineando la coma en vez de
  alinear las unidades.
```

### 10 — Restar decimales

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "resta"]

variables:
  e1: random(5, 20)
  t1: random(0, 9)
  e2: random(1, 4)
  t2: random(0, 9)
  a: e1 + t1 / 10
  b: e2 + t2 / 10

respuesta: a - b
tipo: input
tolerancia_abs: 0.001

enunciado: "¿Cuánto es {a} - {b}?"

explicacion: |
  Se alinean las comas y se resta como siempre.
```

### 11 — Multiplicar decimales

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "avanzado"
  tags: ["decimales", "multiplicacion"]

variables:
  t1: random(1, 9)
  t2: random(1, 9)
  a: t1 / 10
  b: t2 / 10

respuesta: a * b
tipo: input
tolerancia_abs: 0.001

enunciado: "¿Cuánto es {a} × {b}?"

pasos:
  - "Se multiplica como enteros ({t1} × {t2} = {t1 * t2}) y se pone la coma contando 2 cifras decimales (una de cada factor)"

explicacion: |
  Se multiplica ignorando la coma, y al resultado se le agrega una coma
  contando tantas cifras decimales como sumen los dos factores.
```

### 12 — Cuántas cifras decimales tiene un producto

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "multiplicacion"]

variables:
  cifras_a: random(1, 3)
  cifras_b: random(1, 3)

respuesta: cifras_a + cifras_b
tipo: input
tolerancia_abs: 0

enunciado: "Si un factor tiene {cifras_a} cifra(s) decimal(es) y el otro tiene {cifras_b}, ¿cuántas cifras decimales va a tener el producto (antes de simplificar ceros finales)?"

explicacion: |
  La cantidad de cifras decimales del producto es la suma de las cifras
  decimales de los dos factores.
```

### 13 — Elegir el decimal mayor

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "comparacion"]

variables:
  entero: random(1, 20)
  t1: random(0, 8)
  t2: t1 + 1

respuesta: entero + t2 / 10
tipo: mc
opciones_explicitas:
  - entero + t1 / 10
  - entero + t2 / 10

enunciado: "¿Cuál de estos dos números es mayor: {entero + t1 / 10} o {entero + t2 / 10}?"

explicacion: |
  Con la misma parte entera, gana la cifra decimal más grande.
```

### 14 — Ordenar decimales

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "basico"
  tags: ["decimales", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de menor a mayor."
opciones_explicitas:
  - "2,5"
  - "2,05"
  - "2,55"
  - "2,1"
respuesta_orden: ["2,05", "2,1", "2,5", "2,55"]

explicacion: |
  Hay que comparar cifra por cifra después de la coma, sin dejarse
  engañar por la cantidad de cifras escritas.
```

### 15 — Problema: precio con decimales

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "problema"]

variables:
  e1: random(50, 500)
  c1: random(0, 99)
  e2: random(10, 200)
  c2: random(0, 99)
  a: e1 + c1 / 100
  b: e2 + c2 / 100

respuesta: a + b
tipo: input
tolerancia_abs: 0.01

enunciado: "Compraste algo de ${a} y otra cosa de ${b}. ¿Cuánto gastaste en total?"

explicacion: |
  Los precios con centavos son decimales de 2 cifras: se suman alineando
  la coma.
```

### 16 — Problema: sumar medidas decimales

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "problema"]

variables:
  e1: random(1, 5)
  t1: random(1, 9)
  e2: random(1, 5)
  t2: random(1, 9)
  a: e1 + t1 / 10
  b: e2 + t2 / 10

respuesta: a + b
tipo: input
tolerancia_abs: 0.01

enunciado: "Un caño mide {a} metros y otro mide {b} metros. Si se unen, ¿cuántos metros miden en total?"

explicacion: |
  Sumar longitudes decimales es sumar decimales, alineando la coma.
```

### 17 — Verificar una suma de decimales (con error a veces)

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "verificacion"]

variables:
  e1: random(1, 20)
  t1: random(0, 9)
  e2: random(1, 20)
  t2: random(0, 9)
  a: e1 + t1 / 10
  b: e2 + t2 / 10
  correcto: a + b
  error: uno_de([0, 0, 0, 0.1, -0.1])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.001)
tipo: vf

enunciado: "¿Está bien resuelta esta suma? {a} + {b} = {mostrado}"

explicacion: |
  Un error típico es desalinear la coma al sumar; hay que verificar
  columna por columna, igual que con enteros.
```

### 18 — Completar la fracción equivalente

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "conversion"]

variables:
  n: random(1, 99)

tipo: completar
enunciado: "0,{n} (con {n} como cifras decimales) es igual a la fracción {n}/___. Completá el denominador."
respuestas_validas:
  - 100

explicacion: |
  Dos cifras decimales corresponden a centésimos: denominador 100.
```

### 19 — Todo decimal se puede escribir como fracción

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "basico"
  tags: ["decimales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todo número decimal con una cantidad finita de cifras se puede escribir como una fracción con denominador potencia de 10."

explicacion: |
  Es la propia definición de número decimal: una fracción de denominador
  10, 100, 1.000... escrita con coma.
```

### 20 — No toda fracción da un decimal "corto"

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "avanzado"
  tags: ["decimales", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "Todas las fracciones, al convertirlas a decimal, dan una cantidad finita de cifras decimales."

explicacion: |
  No es cierto: 1/3 = 0,333... tiene infinitas cifras que se repiten (un
  decimal periódico) — no todas las fracciones "cierran" en pocas cifras.
```

### 21 — Multiplicar un decimal por 10

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "potencias_de_10"]

variables:
  entero: random(1, 50)
  t: random(1, 9)
  n: entero + t / 10

respuesta: n * 10
tipo: input
tolerancia_abs: 0.01

enunciado: "¿Cuánto es {n} × 10?"

pasos:
  - "Multiplicar por 10 corre la coma un lugar hacia la derecha: {n} → {n * 10}"

explicacion: |
  Multiplicar un decimal por una potencia de 10 corre la coma hacia la
  derecha, tantos lugares como ceros tenga la potencia.
```

### 22 — Dividir un decimal por 10

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "potencias_de_10"]

variables:
  entero: random(1, 50)

respuesta: entero / 10
tipo: input
tolerancia_abs: 0.01

enunciado: "¿Cuánto es {entero} ÷ 10?"

pasos:
  - "Dividir por 10 corre la coma un lugar hacia la izquierda: {entero} → {entero / 10}"

explicacion: |
  Dividir por una potencia de 10 corre la coma hacia la izquierda.
```

### 23 — Multiplicar un decimal por 100

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "intermedio"
  tags: ["decimales", "potencias_de_10"]

variables:
  entero: random(1, 20)
  h: random(1, 9)
  n: entero + h / 100

respuesta: n * 100
tipo: input
tolerancia_abs: 0.01

enunciado: "¿Cuánto es {n} × 100?"

explicacion: |
  Multiplicar por 100 corre la coma dos lugares hacia la derecha.
```

### 24 — Elegir la fracción decimal correcta

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "basico"
  tags: ["decimales", "conversion"]

variables:
  t: random(1, 9)
  h: random(0, 9)
  n: t * 10 + h

respuesta: n
tipo: mc
opciones_explicitas:
  - n
  - n + 1
  - n - 1

enunciado: "¿Cuál es el numerador de la fracción equivalente a 0,{t}{h} (sobre denominador 100)?"

explicacion: |
  El decimal sin la coma es el numerador: {t}{h} sobre 100.
```

### 25 — Cifras decimales y su nombre (repaso rápido)

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "basico"
  tags: ["decimales", "vocabulario"]

enunciado: "¿Cómo se llama la primera cifra después de la coma?"
tipo: mc
opciones_explicitas:
  - "Décimos"
  - "Centésimos"
  - "Unidades"
respuesta: "Décimos"

explicacion: |
  La primera cifra después de la coma son los décimos (÷10).
```

### 26 — Qué es un decimal (cierre)

```
metadata:
  materia: "matematicas"
  tema: "decimales"
  nivel: "basico"
  tags: ["decimales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un número decimal es otra forma de escribir una fracción, cuando el denominador es una potencia de 10."

explicacion: |
  Es la idea central de todo este tema: decimales y fracciones son la
  misma cosa, escritas de dos formas distintas.
```
