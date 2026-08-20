# Matemática — Números enteros: signo, orden y recta numérica (cuestionario, 26 preguntas VBLang)

> Tema: `NE1`. Ver `teoria.md` en esta misma carpeta. Usa el builtin
> `abs(n)` del DSL (confirmado en
> `packages/vblang/src/validator/builtin-signatures.ts`) y el operador de
> negación `-` para construir números negativos.

---

### 1 — Qué es un número entero

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "basico"
  tags: ["numeros_enteros", "vocabulario"]

enunciado: "¿Qué agrega el conjunto de los números enteros a los naturales?"
tipo: mc
opciones_explicitas:
  - "El cero y los números negativos"
  - "Sólo las fracciones"
  - "Sólo los números muy grandes"
respuesta: "El cero y los números negativos"

explicacion: |
  Los naturales sirven para contar; los enteros agregan el 0 y los
  negativos para representar deudas, temperaturas bajo cero, etc.
```

### 2 — Comparar un positivo con un negativo

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "basico"
  tags: ["numeros_enteros", "orden"]

variables:
  a: random(1, 50)
  b: -random(1, 50)

respuesta: (a > b)
tipo: vf

enunciado: "¿Es {a} mayor que {b}?"

explicacion: |
  Cualquier número positivo es mayor que cualquier número negativo.
```

### 3 — Comparar dos negativos

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "orden"]

variables:
  a: -random(1, 50)
  b: -random(1, 50)

respuesta: (a > b)
tipo: vf

enunciado: "¿Es {a} mayor que {b}?"

explicacion: |
  Entre dos negativos, es mayor el que está más cerca de 0 (el que tiene
  menor valor absoluto).
```

### 4 — El "más grande" no siempre es el mayor (con negativos)

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "orden"]

variables:
  chico: random(1, 9)
  grande: chico + random(10, 40)

respuesta: falso
tipo: vf

enunciado: "¿Es cierto que -{grande} es mayor que -{chico}?"

explicacion: |
  Aunque {grande} sea un número más grande que {chico}, con el signo
  negativo pasa al revés: -{grande} está más lejos de 0 hacia la
  izquierda, así que es MENOR que -{chico}.
```

### 5 — Valor absoluto de un positivo

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "basico"
  tags: ["numeros_enteros", "valor_absoluto"]

variables:
  n: random(1, 999)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el valor absoluto de {n}?"

explicacion: |
  El valor absoluto de un número positivo es el mismo número.
```

### 6 — Valor absoluto de un negativo

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "basico"
  tags: ["numeros_enteros", "valor_absoluto"]

variables:
  n: random(1, 999)
  neg: -n

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el valor absoluto de {neg}?"

explicacion: |
  El valor absoluto de un número negativo es ese mismo número, sin el
  signo — la distancia al 0 siempre se cuenta positiva.
```

### 7 — El opuesto de un positivo

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "basico"
  tags: ["numeros_enteros", "opuesto"]

variables:
  n: random(1, 999)

respuesta: -n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el opuesto de {n}?"

explicacion: |
  El opuesto tiene el mismo valor pero signo contrario.
```

### 8 — El opuesto de un negativo

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "basico"
  tags: ["numeros_enteros", "opuesto"]

variables:
  n: random(1, 999)
  neg: -n

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el opuesto de {neg}?"

explicacion: |
  El opuesto de un negativo es el positivo correspondiente.
```

### 9 — Elegir el mayor entre tres enteros (con negativos)

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "orden"]

variables:
  a: -random(1, 50)
  b: random(1, 50)
  c: -random(1, 50)

respuesta: max(a, b, c)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el mayor entre {a}, {b} y {c}?"

explicacion: |
  Cualquier positivo ya le gana a cualquier negativo; entre los
  negativos, gana el que está más cerca de 0.
```

### 10 — Elegir el menor entre tres enteros

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "orden"]

variables:
  a: -random(1, 50)
  b: random(1, 50)
  c: -random(1, 50)

respuesta: min(a, b, c)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el menor entre {a}, {b} y {c}?"

explicacion: |
  Entre los negativos, es menor el que está más lejos de 0.
```

### 11 — Todo negativo es menor que todo positivo

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "basico"
  tags: ["numeros_enteros", "orden", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cualquier número entero negativo es menor que cualquier número entero positivo."

explicacion: |
  En la recta numérica, todos los negativos están a la izquierda del 0, y
  todos los positivos a la derecha.
```

### 12 — El 0 no es positivo ni negativo

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "basico"
  tags: ["numeros_enteros", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El 0 no es positivo ni negativo: es el punto de referencia entre los dos."

explicacion: |
  Es un caso especial: ni tiene signo positivo ni negativo.
```

### 13 — Distancia entre dos puntos de la recta numérica

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "valor_absoluto"]

variables:
  a: -random(1, 30)
  b: random(1, 30)

respuesta: abs(a - b)
tipo: input
tolerancia_abs: 0

enunciado: "¿A qué distancia está {a} de {b} en la recta numérica?"

pasos:
  - "La distancia es el valor absoluto de la resta: |{a} - {b}| = {abs(a - b)}"

explicacion: |
  La distancia entre dos puntos siempre es positiva, aunque uno de los dos
  sea negativo: se calcula con el valor absoluto de la resta.
```

### 14 — Ordenar enteros con negativos, de menor a mayor

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de menor a mayor."
opciones_explicitas:
  - "3"
  - "-7"
  - "0"
  - "-2"
respuesta_orden: ["-7", "-2", "0", "3"]

explicacion: |
  Los negativos van primero (el más lejos de 0 primero), después el 0, y
  después los positivos.
```

### 15 — Cuál está más cerca de 0

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "valor_absoluto"]

variables:
  a: -random(1, 50)
  b: random(1, 50)

restricciones:
  - abs(a) != abs(b)

respuesta: (abs(a) < abs(b))
tipo: vf

enunciado: "¿Es {a} el que está más cerca de 0, entre {a} y {b}?"

explicacion: |
  Se compara la distancia al 0 (el valor absoluto) de cada uno, no el
  valor del número en sí.
```

### 16 — El opuesto del opuesto

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "opuesto"]

variables:
  n: random(1, 999)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el opuesto del opuesto de {n}?"

explicacion: |
  Aplicar el opuesto dos veces vuelve al número original.
```

### 17 — El valor absoluto nunca es negativo

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "basico"
  tags: ["numeros_enteros", "valor_absoluto", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El valor absoluto de cualquier número entero nunca es negativo."

explicacion: |
  Es una distancia, y las distancias no pueden ser negativas: siempre da
  positivo o cero.
```

### 18 — Completar: dos enteros con el mismo valor absoluto

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "valor_absoluto"]

variables:
  n: random(2, 30)

tipo: completar
enunciado: "¿Qué dos números enteros tienen valor absoluto {n}? (nombrá uno de los dos)"
respuestas_validas:
  - n
  - -n

explicacion: |
  El {n} y el -{n} están a la misma distancia del 0, así que los dos
  tienen valor absoluto {n}.
```

### 19 — Problema: temperatura bajo cero

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "basico"
  tags: ["numeros_enteros", "problema"]

variables:
  a: -random(1, 15)
  b: -random(1, 15)

restricciones:
  - a != b

respuesta: (a > b)
tipo: vf

enunciado: "En una ciudad hace {a}°C y en otra hace {b}°C. ¿Hace más calor en la primera ciudad?"

explicacion: |
  Con temperaturas bajo cero, "más calor" es el número mayor (el más
  cerca de 0), no el que tiene el número "más grande" adelante.
```

### 20 — Problema: nivel del mar

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "problema"]

variables:
  altura: random(100, 3000)
  profundidad: -random(10, 500)

respuesta: (altura > profundidad)
tipo: vf

enunciado: "Una montaña está a {altura} metros sobre el nivel del mar, y un submarino está a {profundidad} metros (bajo el nivel del mar, por eso el signo negativo). ¿Está la montaña más alta que el submarino?"

explicacion: |
  Sobre el nivel del mar es positivo; bajo el nivel del mar es negativo:
  cualquier altura positiva está por encima de cualquier profundidad
  negativa.
```

### 21 — Problema: saldo de una cuenta

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "problema"]

variables:
  deuda: -random(100, 5000)

respuesta: abs(deuda)
tipo: input
tolerancia_abs: 0

enunciado: "El saldo de una cuenta es ${deuda} (negativo porque es una deuda). ¿Cuántos pesos debe esa persona?"

explicacion: |
  La deuda, en valor positivo, es el valor absoluto del saldo negativo.
```

### 22 — Un número y su opuesto, mismo valor absoluto

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "opuesto", "valor_absoluto"]

variables:
  n: random(1, 500)

respuesta: (abs(n) == abs(-n))
tipo: vf

enunciado: "¿Es cierto que {n} y su opuesto ({-n}) tienen el mismo valor absoluto?"

explicacion: |
  Están a la misma distancia del 0, uno de cada lado.
```

### 23 — Elegir el opuesto correcto

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "basico"
  tags: ["numeros_enteros", "opuesto"]

variables:
  n: random(2, 50)

respuesta: -n
tipo: mc
opciones_explicitas:
  - -n
  - n
  - n + 1

enunciado: "¿Cuál es el opuesto de {n}?"

explicacion: |
  El opuesto cambia el signo, pero no el valor absoluto.
```

### 24 — Cuántos enteros hay entre dos números (con negativos)

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "avanzado"
  tags: ["numeros_enteros", "orden"]

variables:
  a: -random(1, 20)
  b: random(1, 20)

respuesta: b - a + 1
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos números enteros hay entre {a} y {b}, contando a los dos extremos?"

pasos:
  - "Se cuenta igual que con positivos: {b} - {a} + 1 = {b - a + 1}"

explicacion: |
  La fórmula (B − A + 1) funciona igual con negativos, siempre que se
  reste el menor al mayor respetando el orden real en la recta numérica.
```

### 25 — Ordenar temperaturas de más frío a más calor

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "intermedio"
  tags: ["numeros_enteros", "orden", "problema"]

tipo: ordenar
enunciado: "Ordená estas temperaturas de más fría a más calurosa."
opciones_explicitas:
  - "-3°C"
  - "-10°C"
  - "5°C"
  - "0°C"
respuesta_orden: ["-10°C", "-3°C", "0°C", "5°C"]

explicacion: |
  Más frío es el número menor; más calor es el número mayor — igual que
  ordenar cualquier lista de enteros.
```

### 26 — Los enteros extienden a los naturales (cierre)

```
metadata:
  materia: "matematicas"
  tema: "numeros_enteros"
  nivel: "basico"
  tags: ["numeros_enteros", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todos los números naturales son también números enteros, pero no todos los enteros son naturales."

explicacion: |
  Los enteros incluyen a los naturales y les agregan el 0 y los negativos:
  los naturales son un subconjunto de los enteros.
```
