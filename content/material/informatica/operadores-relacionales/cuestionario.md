# Informática — Operadores relacionales (cuestionario, 24 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. Tema agregado (gap detectado: ni `variables-y-tipos-de-dato` ni `estructuras-de-control-condicionales` nombran los operadores aparte).

---
### 1 — Qué devuelve una comparación

```
metadata:
  materia: "informatica"
  tema: "operadores_relacionales"
  nivel: "basico"
  tags: ["booleano"]

tipo: mc
opciones_explicitas: ["Un booleano (verdadero o falso)", "Un número entero", "Un texto", "El mayor de los dos valores"]
respuesta: "Un booleano (verdadero o falso)"

enunciado: "¿Qué tipo de valor devuelve siempre un operador relacional como `>` o `==`?"

explicacion: |
  Un operador relacional compara dos valores y responde si la relación se cumple o no: el resultado es un booleano. Por eso se usa dentro de condiciones.
```

### 2 — Igualdad en pseudocódigo y la mayoría de los lenguajes

```
metadata:
  materia: "informatica"
  tema: "operadores_relacionales"
  nivel: "basico"
  tags: ["igualdad"]

tipo: mc
opciones_explicitas: ["==", "=", "=>", "!="]
respuesta: "=="

enunciado: "En casi todos los lenguajes, ¿qué operador se usa para preguntar si dos valores son iguales?"

explicacion: |
  El signo `=` solo asigna un valor a una variable. Para comparar se usa `==` (en PSeInt y en SQL, en cambio, se usa un solo `=`).
```

### 3 — Asignar no es comparar

```
metadata:
  materia: "informatica"
  tema: "operadores_relacionales"
  nivel: "basico"
  tags: ["error comun"]

tipo: vf
respuesta: falso

enunciado: "En Python, la línea `if x = 10:` pregunta si x vale 10."

explicacion: |
  Es un error: `=` asigna y `==` compara. En Python `if x = 10:` ni siquiera compila (da `SyntaxError`). En C, en cambio, `if (x = 10)` asigna 10 a x y se toma como verdadero: un bug clásico.
```

### 4 — Distinto en C y Python

```
metadata:
  materia: "informatica"
  tema: "operadores_relacionales"
  nivel: "basico"
  tags: ["desigualdad"]

tipo: completar
respuesta: "!="
respuestas_validas:
  - "!="

enunciado: "En C, Python y JavaScript, el operador \"distinto de\" se escribe `a ___ b`."

explicacion: |
  `!=` es el operador de desigualdad de esos lenguajes. SQL estándar usa `<>` (y la mayoría de los motores aceptan también `!=`).
```

### 5 — Mayor o igual

```
metadata:
  materia: "informatica"
  tema: "operadores_relacionales"
  nivel: "basico"
  tags: ["mayor igual"]

tipo: mc
opciones_explicitas: [">=", "=>", "≥", "=>="]
respuesta: ">="

enunciado: "¿Cuál de estos operadores significa \"mayor o igual que\"?"

explicacion: |
  Se escribe `>=`: primero el signo de comparación y después el `=`. Escribir `=>` es un error de sintaxis en la mayoría de los lenguajes.
```

### 6 — Evaluar una comparación

```
metadata:
  materia: "informatica"
  tema: "operadores_relacionales"
  nivel: "basico"
  tags: ["evaluar"]

tipo: mc
opciones_explicitas: ["falso", "verdadero", "7", "0 solamente en C, en los demás da error"]
respuesta: "falso"

enunciado: "Si x vale 7, ¿cuál es el resultado de `x > 7`?"

explicacion: |
  7 no es estrictamente mayor que 7, así que `x > 7` es falso. En cambio `x >= 7` sería verdadero.
```

### 7 — Evaluar una comparación 2

```
metadata:
  materia: "informatica"
  tema: "operadores_relacionales"
  nivel: "basico"
  tags: ["evaluar"]

tipo: mc
opciones_explicitas: ["verdadero", "falso", "4", "9"]
respuesta: "verdadero"

enunciado: "Si a vale 4 y b vale 9, ¿cuál es el resultado de `a != b`?"

explicacion: |
  4 y 9 son valores distintos, así que `a != b` es verdadero.
```

### 8 — Igualdad de números

```
metadata:
  materia: "informatica"
  tema: "operadores_relacionales"
  nivel: "basico"
  tags: ["evaluar"]

tipo: vf
respuesta: verdadero

enunciado: "Si n vale 5, la expresión `n == 5` da verdadero."

explicacion: |
  Los dos valores son iguales, así que la comparación es verdadera. Atención: no es una asignación, es una pregunta.
```

### 9 — Menor o igual

```
metadata:
  materia: "informatica"
  tema: "operadores_relacionales"
  nivel: "basico"
  tags: ["menor igual"]

tipo: completar
respuesta: "<="
respuestas_validas:
  - "<="

enunciado: "Para escribir \"el contador no puede pasar de 10\" se usa `contador ___ 10`."

explicacion: |
  `<=` es "menor o igual": incluye el 10. Con `<` el 10 quedaría afuera.
```

### 10 — Rango en dos pasos

```
metadata:
  materia: "informatica"
  tema: "operadores_relacionales"
  nivel: "intermedio"
  tags: ["rango"]

tipo: mc
opciones_explicitas: ["x > 0 && x < 10 (con el operador lógico Y de tu lenguaje)", "0 < x < 10 funciona igual en todos los lenguajes", "x > 0 , 10", "x entre 0 y 10"]
respuesta: "x > 0 && x < 10 (con el operador lógico Y de tu lenguaje)"

enunciado: "En programación, ¿cómo se escribe correctamente \"x está entre 0 y 10\"?"

explicacion: |
  En matemática se escribe `0 < x < 10`, pero en la mayoría de los lenguajes eso no hace lo que parece. Hay que hacer dos comparaciones y unirlas con un operador lógico Y.
```

### 11 — Texto contra número

```
metadata:
  materia: "informatica"
  tema: "operadores_relacionales"
  nivel: "intermedio"
  tags: ["tipos"]

tipo: vf
respuesta: verdadero

enunciado: "En JavaScript, `\"5\" === 5` da falso porque el tipo es distinto."

explicacion: |
  `===` compara valor y tipo sin convertir: un texto no es un número, así que es falso. Con `==` JavaScript convertiría el texto y daría verdadero, por eso se recomienda `===`.
```

### 12 — Dos signos o tres

```
metadata:
  materia: "informatica"
  tema: "operadores_relacionales"
  nivel: "intermedio"
  tags: ["tipos"]

tipo: mc
opciones_explicitas: ["`===` compara valor y tipo; `==` convierte los tipos antes de comparar", "No hay ninguna diferencia", "`===` solo sirve con números", "`==` compara valor y tipo; `===` convierte los tipos"]
respuesta: "`===` compara valor y tipo; `==` convierte los tipos antes de comparar"

enunciado: "En JavaScript, ¿cuál es la diferencia entre `==` y `===`?"

explicacion: |
  `==` hace conversión de tipos antes de comparar (y por eso a veces sorprende); `===` es la igualdad estricta. Casi siempre conviene `===`.
```

### 13 — Decimales y ==

```
metadata:
  materia: "informatica"
  tema: "operadores_relacionales"
  nivel: "intermedio"
  tags: ["decimales"]

tipo: vf
respuesta: falso

enunciado: "Comparar números decimales con `==` es siempre seguro, porque la computadora los guarda exactos."

explicacion: |
  Los decimales se guardan con precisión finita: en muchos lenguajes `0.1 + 0.2 == 0.3` da falso. Se suele comparar si la diferencia es menor que una tolerancia pequeña.
```

### 14 — Comparar textos

```
metadata:
  materia: "informatica"
  tema: "operadores_relacionales"
  nivel: "basico"
  tags: ["texto"]

tipo: mc
opciones_explicitas: ["True", "False", "Error", "\"casa\""]
respuesta: "True"

enunciado: "En Python, ¿qué da `\"casa\" == \"casa\"`?"

explicacion: |
  Dos textos con el mismo contenido son iguales. En Python el resultado es el valor booleano `True`.
```

### 15 — Orden alfabético

```
metadata:
  materia: "informatica"
  tema: "operadores_relacionales"
  nivel: "intermedio"
  tags: ["texto"]

tipo: mc
opciones_explicitas: ["True", "False", "Error", "Depende del largo"]
respuesta: "True"

enunciado: "En Python, ¿qué da `\"abeja\" < \"zorro\"`?"

explicacion: |
  Los textos se comparan letra por letra según el orden del alfabeto (en realidad, según el código de cada carácter). "a" va antes que "z", así que es verdadero.
```

### 16 — Operador en SQL

```
metadata:
  materia: "informatica"
  tema: "operadores_relacionales"
  nivel: "basico"
  tags: ["sql"]

tipo: completar
respuesta: "="
respuestas_validas:
  - "="

enunciado: "En SQL, para seleccionar filas donde `precio` sea igual a 100, se escribe `WHERE precio ___ 100`."

explicacion: |
  En SQL la igualdad se escribe con un solo `=` (no hay asignación en ese lugar, así que no se confunde).
```

### 17 — Bash con números

```
metadata:
  materia: "informatica"
  tema: "operadores_relacionales"
  nivel: "intermedio"
  tags: ["bash"]

tipo: mc
opciones_explicitas: ["-eq", "==", "-ne", "=>"]
respuesta: "-eq"

enunciado: "En un script de Bash, dentro de `[ ... ]`, ¿qué se usa para preguntar si dos NÚMEROS son iguales?"

explicacion: |
  En Bash las comparaciones numéricas dentro de `[ ]` usan `-eq`, `-ne`, `-lt`, `-gt`, `-le`, `-ge`. Para comparar textos se usa `=`.
```

### 18 — Bash con números 2

```
metadata:
  materia: "informatica"
  tema: "operadores_relacionales"
  nivel: "intermedio"
  tags: ["bash"]

tipo: mc
opciones_explicitas: ["a es menor que b", "a es mayor que b", "a es igual a b", "a es distinto de b"]
respuesta: "a es menor que b"

enunciado: "En Bash, `[ $a -lt $b ]` es verdadero cuando..."

explicacion: |
  `-lt` significa *less than* (menor que). Los otros son `-gt` (mayor), `-eq` (igual) y `-ne` (distinto).
```

### 19 — Excel

```
metadata:
  materia: "informatica"
  tema: "operadores_relacionales"
  nivel: "basico"
  tags: ["excel"]

tipo: vf
respuesta: verdadero

enunciado: "En una fórmula de Excel, \"distinto de\" se escribe `<>`."

explicacion: |
  Excel usa `<>` para "no es igual a" (por ejemplo `=A1<>100`). Es el mismo símbolo que usa el SQL estándar.
```

### 20 — Precedencia

```
metadata:
  materia: "informatica"
  tema: "operadores_relacionales"
  nivel: "intermedio"
  tags: ["precedencia"]

tipo: mc
opciones_explicitas: ["Primero se suma (x + 5) y después se compara con 10", "Primero se compara 5 > 10 y después se suma x", "Da error porque mezcla operadores", "Se evalúa de derecha a izquierda"]
respuesta: "Primero se suma (x + 5) y después se compara con 10"

enunciado: "¿Cómo se evalúa `x + 5 > 10`?"

explicacion: |
  Los operadores aritméticos se evalúan antes que los relacionales. Es lo mismo que `(x + 5) > 10`.
```

### 21 — Condición para un bucle

```
metadata:
  materia: "informatica"
  tema: "operadores_relacionales"
  nivel: "intermedio"
  tags: ["bucles"]

tipo: mc
opciones_explicitas: ["i < 5", "i <= 5", "i > 5", "i == 5"]
respuesta: "i < 5"

enunciado: "¿Qué condición hace que `while (i < 5)` se repita exactamente 5 veces si i empieza en 0 y sube de a 1?"

explicacion: |
  Con i en 0, 1, 2, 3 y 4 la condición es verdadera (5 veces). Con `i <= 5` serían 6 veces; con `i == 5` o `i > 5` no se entraría al bucle.
```

### 22 — Comparar objetos

```
metadata:
  materia: "informatica"
  tema: "operadores_relacionales"
  nivel: "avanzado"
  tags: ["objetos"]

tipo: vf
respuesta: verdadero

enunciado: "En Java, `a == b` entre dos objetos pregunta si apuntan al MISMO objeto en memoria, no si tienen el mismo contenido."

explicacion: |
  Para tipos de referencia, `==` compara la identidad (la dirección). Para comparar el contenido se usa un método como `.equals()`.
```

### 23 — Elegir el operador correcto

```
metadata:
  materia: "informatica"
  tema: "operadores_relacionales"
  nivel: "basico"
  tags: ["decision"]

tipo: mc
opciones_explicitas: ["total >= 20000", "total > 20000", "total == 20000", "total <= 20000"]
respuesta: "total >= 20000"

enunciado: "Una tienda da envío gratis si la compra es de $20.000 o más. ¿Qué condición usarías?"

explicacion: |
  "20.000 o más" incluye el 20.000, por eso corresponde `>=`. Con `>` quedarían afuera las compras de exactamente $20.000.
```

### 24 — Encontrar el error

```
metadata:
  materia: "informatica"
  tema: "operadores_relacionales"
  nivel: "intermedio"
  tags: ["error comun"]

tipo: mc
opciones_explicitas: ["Asigna 18 a edad en lugar de compararla", "Compara correctamente", "Pregunta si edad es distinta de 18", "No tiene ningún problema"]
respuesta: "Asigna 18 a edad en lugar de compararla"

enunciado: "¿Qué problema tiene `if (edad = 18)` en un lenguaje como C?"

explicacion: |
  Con un solo `=` se asigna 18 a la variable y la condición toma ese valor (distinto de 0 = verdadero). Se quiso escribir `edad == 18`.
```

