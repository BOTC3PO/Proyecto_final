# Examen jefe — Maestro de la Programación

> Logro #820. Dominaste operadores aritméticos, relacionales y lógicos, bucles, funciones, estructuras de datos (listas, pilas y colas), programación orientada a objetos y algoritmos de búsqueda y ordenamiento. Pool agregado de los `cuestionario.md` ya validados de sus 8 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **196 preguntas totales** en 8/8 secciones.

---

## Sección: operadores-aritmeticos (23 preguntas)

```
metadata:
  materia: "informatica"
  tema: "operadores_aritmeticos"
  nivel: "basico"
  tags: ["modulo"]

tipo: mc
opciones_explicitas: ["%", "/", "//", "^"]
respuesta: "%"

enunciado: "¿Qué operador aritmético devuelve el RESTO de una división entera en la mayoría de los lenguajes?"

explicacion: |
  El operador `%` (módulo) da el resto: `17 % 5` es 2, porque 17 = 3 x 5 + 2. `/` divide, y `^` o `**` es la potencia según el lenguaje.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_aritmeticos"
  nivel: "basico"
  tags: ["modulo"]

variables:
  a: random(20, 90)
  b: random(3, 9)

respuesta: a - floor(a / b) * b
tipo: input

enunciado: "¿Cuánto da {a} % {b} (el resto de dividir {a} entre {b})?"

explicacion: |
  El resto es lo que sobra después de repartir de a {b}: {a} - {floor(a / b)} x {b} = {a - floor(a / b) * b}.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_aritmeticos"
  nivel: "intermedio"
  tags: ["division entera"]

variables:
  a: random(20, 90)
  b: random(3, 9)

respuesta: floor(a / b)
tipo: input

enunciado: "En un lenguaje que divide enteros sin decimales (como C o Java), ¿cuánto da {a} / {b}?"

explicacion: |
  Con dos enteros, la división descarta la parte decimal: {a} / {b} da {floor(a / b)} (se trunca, no se redondea).
```

```
metadata:
  materia: "informatica"
  tema: "operadores_aritmeticos"
  nivel: "basico"
  tags: ["precedencia"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  c: random(2, 9)

respuesta: a + b * c
tipo: input

enunciado: "¿Cuánto da {a} + {b} * {c}?"

explicacion: |
  La multiplicación se evalúa antes que la suma: primero {b} * {c} = {b * c} y después {a} + {b * c} = {a + b * c}.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_aritmeticos"
  nivel: "basico"
  tags: ["precedencia"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  c: random(2, 9)

respuesta: (a + b) * c
tipo: input

enunciado: "¿Cuánto da ({a} + {b}) * {c}?"

explicacion: |
  Los paréntesis se resuelven primero: ({a} + {b}) = {a + b} y después {a + b} * {c} = {(a + b) * c}.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_aritmeticos"
  nivel: "basico"
  tags: ["potencia"]

variables:
  b: random(2, 5)
  e: random(2, 4)

respuesta: b ^ e
tipo: input

enunciado: "Si el operador de potencia se escribe `**` (como en Python), ¿cuánto da {b} ** {e}?"

explicacion: |
  {b} ** {e} significa multiplicar {b} por sí mismo {e} veces: {b ^ e}.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_aritmeticos"
  nivel: "intermedio"
  tags: ["asignacion compuesta"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  c: random(2, 5)

respuesta: (a + b) * c
tipo: input

enunciado: "Se ejecuta: `x = {a}`, después `x += {b}`, después `x *= {c}`. ¿Cuánto vale x al final?"

explicacion: |
  `x += {b}` es `x = x + {b}`, o sea {a + b}. Después `x *= {c}` es `x = x * {c}`, o sea {(a + b) * c}.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_aritmeticos"
  nivel: "basico"
  tags: ["aplicacion"]

variables:
  p: random(100, 900)
  n: random(2, 6)
  d: random(10, 90)

respuesta: p * n - d
tipo: input

enunciado: "Un cuaderno cuesta ${p}. Compro {n} y me hacen un descuento de ${d} sobre el total. ¿Cuánto pago?"

explicacion: |
  Primero el producto, después la resta: {p} * {n} - {d} = {p * n - d}.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_aritmeticos"
  nivel: "basico"
  tags: ["errores"]

tipo: vf
respuesta: verdadero

enunciado: "En casi todos los lenguajes, dividir un entero por cero provoca un error o una excepción."

explicacion: |
  No existe un resultado para dividir por cero. Con enteros, la mayoría de los lenguajes detiene el programa con un error; con decimales algunos devuelven infinito o un valor especial (`inf`, `NaN`).
```

```
metadata:
  materia: "informatica"
  tema: "operadores_aritmeticos"
  nivel: "intermedio"
  tags: ["python"]

tipo: mc
opciones_explicitas: ["3.5", "3", "4", "3.0 solo si se escribe 7.0 / 2"]
respuesta: "3.5"

enunciado: "En Python 3, ¿cuánto da `7 / 2`?"

explicacion: |
  En Python 3, `/` siempre da un decimal (3.5). Para el cociente entero se usa `//`, que da 3.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_aritmeticos"
  nivel: "intermedio"
  tags: ["c"]

tipo: mc
opciones_explicitas: ["3", "3.5", "4", "2"]
respuesta: "3"

enunciado: "En C, si `a` y `b` son enteros, ¿cuánto da `7 / 2`?"

explicacion: |
  Con dos enteros, C hace división entera y descarta los decimales: 7 / 2 = 3. Para obtener 3.5 al menos uno de los dos tiene que ser decimal (`7.0 / 2`).
```

```
metadata:
  materia: "informatica"
  tema: "operadores_aritmeticos"
  nivel: "basico"
  tags: ["modulo"]

tipo: mc
opciones_explicitas: ["`n % 2` da 0", "`n / 2` da 0", "`n * 2` da 0", "`n ^ 2` da 0"]
respuesta: "`n % 2` da 0"

enunciado: "¿Cómo se sabe si un número `n` es par usando un operador aritmético?"

explicacion: |
  Un número es par si al dividirlo por 2 no sobra nada: el resto (`n % 2`) es 0. Si el resto es 1, es impar.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_aritmeticos"
  nivel: "intermedio"
  tags: ["modulo"]

tipo: mc
opciones_explicitas: ["Calcular la hora después de sumar horas (el reloj vuelve a 0 después de 23)", "Calcular el área de un círculo", "Convertir un texto en número", "Ordenar una lista alfabéticamente"]
respuesta: "Calcular la hora después de sumar horas (el reloj vuelve a 0 después de 23)"

enunciado: "El módulo (`%`) es muy útil para trabajar con cosas que se repiten en ciclo. ¿Cuál de estas es un buen ejemplo?"

explicacion: |
  Todo lo que "da la vuelta" (horas, días de la semana, turnos rotativos) se calcula con el resto. Ejemplo: (22 + 5) % 24 = 3.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_aritmeticos"
  nivel: "basico"
  tags: ["incremento"]

tipo: completar
respuesta: "+="
respuestas_validas:
  - "+="
  - "++"

enunciado: "La instrucción `x ___ 1;` suma 1 a x (forma abreviada de `x = x + 1`)."

explicacion: |
  `x += 1` es la asignación compuesta de suma. En muchos lenguajes (C, Java, JavaScript) también existe `x++`; en Python solo se puede escribir `x += 1`.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_aritmeticos"
  nivel: "basico"
  tags: ["asignacion compuesta"]

tipo: mc
opciones_explicitas: ["7", "13", "-3", "10"]
respuesta: "7"

enunciado: "Si `y` vale 10, ¿cuánto vale después de `y -= 3`?"

explicacion: |
  `y -= 3` es `y = y - 3`: 10 - 3 = 7.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_aritmeticos"
  nivel: "intermedio"
  tags: ["asignacion"]

tipo: vf
respuesta: falso

enunciado: "En programación, `x = x + 1` es una contradicción matemática y por eso da error."

explicacion: |
  Acá `=` no es igualdad matemática, es **asignación**: se calcula el lado derecho con el valor actual de x y el resultado se guarda en x. Si x valía 4, pasa a valer 5.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_aritmeticos"
  nivel: "intermedio"
  tags: ["tipos"]

tipo: mc
opciones_explicitas: ["Un decimal (7.0)", "Un entero (7)", "Un texto", "Un error"]
respuesta: "Un decimal (7.0)"

enunciado: "¿Qué tipo de resultado suele dar `5 + 2.0` en la mayoría de los lenguajes?"

explicacion: |
  Si uno de los operandos es decimal, el resultado se convierte a decimal para no perder información.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_aritmeticos"
  nivel: "avanzado"
  tags: ["texto"]

tipo: vf
respuesta: verdadero

enunciado: "En JavaScript, `\"5\" + 2` da el texto `\"52\"`."

explicacion: |
  El operador `+` también concatena textos: cuando uno de los lados es un texto, convierte el otro y los une. En cambio, `"5" - 2` da 3 porque `-` solo resta.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_aritmeticos"
  nivel: "avanzado"
  tags: ["modulo"]

tipo: mc
opciones_explicitas: ["2", "-1", "1", "-2"]
respuesta: "2"

enunciado: "En Python, ¿cuánto da `-7 % 3`?"

explicacion: |
  En Python el resultado del módulo toma el signo del divisor: -7 = (-3) x 3 + 2. Otros lenguajes (como C o Java) devuelven -1: el comportamiento con negativos **cambia según el lenguaje**.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_aritmeticos"
  nivel: "intermedio"
  tags: ["promedio"]

variables:
  a: random(3, 12)
  b: random(3, 12)
  c: random(3, 12)

restricciones:
  - (a + b + c) - floor((a + b + c) / 3) * 3 == 0

respuesta: (a + b + c) / 3
tipo: input

enunciado: "¿Cuánto da el promedio de {a}, {b} y {c}, escrito como `({a} + {b} + {c}) / 3`?"

explicacion: |
  Primero se suman los tres valores ({a + b + c}) y después se dividen por 3: {(a + b + c) / 3}. Sin paréntesis, `{a} + {b} + {c} / 3` dividiría solo el último número.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_aritmeticos"
  nivel: "basico"
  tags: ["precedencia"]

tipo: mc
opciones_explicitas: ["`a + b + (c / 3)`: solo divide c", "El promedio de a, b y c", "`(a + b + c) / 3`", "Da error de sintaxis"]
respuesta: "`a + b + (c / 3)`: solo divide c"

enunciado: "¿Qué calcula `a + b + c / 3`?"

explicacion: |
  Por la precedencia, la división se hace antes que las sumas. Para el promedio hay que escribir `(a + b + c) / 3`.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_aritmeticos"
  nivel: "basico"
  tags: ["potencia"]

tipo: completar
respuesta: "**"
respuestas_validas:
  - "**"

enunciado: "En la calculadora de Python, para elevar 2 a la 5 se escribe `2 ___ 5`."

explicacion: |
  En Python la potencia es `**`. En otros lenguajes se usa `^` (Excel, PSeInt) o una función como `pow(2, 5)`.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_aritmeticos"
  nivel: "basico"
  tags: ["precedencia"]

tipo: mc
opciones_explicitas: ["13", "19", "15", "9"]
respuesta: "13"

enunciado: "¿Cuánto da `2 + 3 * 4 - 1`?"

explicacion: |
  Primero la multiplicación: 3 * 4 = 12. Después, de izquierda a derecha: 2 + 12 - 1 = 13.
```

## Sección: operadores-relacionales (24 preguntas)

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

## Sección: operadores-logicos (23 preguntas)

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "basico"
  tags: ["basicos"]

tipo: mc
opciones_explicitas: ["Y (AND), O (OR) y NO (NOT)", "SUMA, RESTA y PRODUCTO", "SI, SINO y ENTONCES", "MAYOR, MENOR e IGUAL"]
respuesta: "Y (AND), O (OR) y NO (NOT)"

enunciado: "¿Cuáles son los tres operadores lógicos básicos?"

explicacion: |
  Los operadores lógicos combinan o invierten valores booleanos: AND (y), OR (o) y NOT (no). En C, Java y JavaScript se escriben `&&`, `||` y `!`; en Python, `and`, `or` y `not`.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "basico"
  tags: ["and"]

tipo: mc
opciones_explicitas: ["Solo cuando A y B son verdaderos los dos", "Cuando alguno de los dos es verdadero", "Cuando los dos son falsos", "Siempre"]
respuesta: "Solo cuando A y B son verdaderos los dos"

enunciado: "¿Cuándo da verdadero `A Y B`?"

explicacion: |
  El Y exige que se cumplan **las dos** condiciones. Si una falla, el resultado es falso.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "basico"
  tags: ["or"]

tipo: mc
opciones_explicitas: ["Solo cuando A y B son falsos los dos", "Cuando alguno es falso", "Cuando los dos son verdaderos", "Nunca"]
respuesta: "Solo cuando A y B son falsos los dos"

enunciado: "¿Cuándo da falso `A O B`?"

explicacion: |
  El O alcanza con que **una** de las condiciones se cumpla. Solo es falso si las dos fallan.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "basico"
  tags: ["not"]

tipo: mc
opciones_explicitas: ["falso", "verdadero", "activo", "No se puede calcular"]
respuesta: "falso"

enunciado: "Si `activo` es verdadero, ¿cuánto vale `NO activo`?"

explicacion: |
  El NO invierte el valor: lo verdadero pasa a falso y lo falso a verdadero.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "basico"
  tags: ["simbolos"]

tipo: mc
opciones_explicitas: ["&&", "&", "and", "AND"]
respuesta: "&&"

enunciado: "En C, Java y JavaScript, ¿cómo se escribe el operador lógico Y?"

explicacion: |
  `&&` es el Y lógico. Con un solo `&` se hace una operación **bit a bit**, que es otra cosa. En Python se escribe `and`.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "basico"
  tags: ["simbolos"]

tipo: completar
respuesta: "||"
respuestas_validas:
  - "||"

enunciado: "En JavaScript, el operador lógico O se escribe `a ___ b`."

explicacion: |
  `||` es el O lógico (dos barras verticales). Una sola barra `|` opera bit a bit.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "basico"
  tags: ["simbolos"]

tipo: completar
respuesta: "!"
respuestas_validas:
  - "!"

enunciado: "En C, Java y JavaScript, el operador lógico NO se escribe con el signo `___` delante de la condición."

explicacion: |
  `!` invierte el valor: `!llueve` es verdadero cuando `llueve` es falso. En Python se escribe `not`.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "basico"
  tags: ["and"]

tipo: vf
respuesta: verdadero

enunciado: "`verdadero Y falso` da falso."

explicacion: |
  El Y solo da verdadero si los dos lados lo son. Acá uno falla, así que el resultado es falso.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "basico"
  tags: ["or"]

tipo: vf
respuesta: verdadero

enunciado: "`verdadero O falso` da verdadero."

explicacion: |
  Al O le alcanza con que uno sea verdadero.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "basico"
  tags: ["not"]

tipo: vf
respuesta: verdadero

enunciado: "`NO (NO verdadero)` da verdadero."

explicacion: |
  Cada NO invierte el valor: NO verdadero = falso, y NO falso = verdadero.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "basico"
  tags: ["aplicacion"]

tipo: mc
opciones_explicitas: ["No: la primera condición es falsa", "Sí: tiene entrada", "Sí: alcanza con una", "Depende del recital"]
respuesta: "No: la primera condición es falsa"

enunciado: "Para entrar a un recital se pide ser mayor de 16 Y tener entrada. Si Lucía tiene 15 años y tiene entrada, ¿puede entrar?"

explicacion: |
  Con un Y hay que cumplir las dos condiciones. 15 no es mayor de 16, así que el resultado es falso aunque tenga entrada.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "basico"
  tags: ["aplicacion"]

tipo: mc
opciones_explicitas: ["Sí: se cumple una de las dos", "No: faltó una condición", "No: tiene que ser jubilado", "Solo si paga en efectivo"]
respuesta: "Sí: se cumple una de las dos"

enunciado: "Un descuento se aplica si el cliente es jubilado O compra los martes. Si un cliente no es jubilado y compra un martes, ¿recibe el descuento?"

explicacion: |
  Con un O alcanza con que se cumpla una. Compró un martes, así que el resultado es verdadero.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "intermedio"
  tags: ["rango"]

tipo: mc
opciones_explicitas: ["x >= 1 && x <= 10", "x >= 1 || x <= 10", "x >= 1 && x >= 10", "!(x >= 1) && x <= 10"]
respuesta: "x >= 1 && x <= 10"

enunciado: "¿Cuál expresión comprueba que `x` está entre 1 y 10 (inclusive)?"

explicacion: |
  Se necesitan las dos comparaciones al mismo tiempo (Y). Con O, cualquier número cumpliría (por ejemplo, 50 es >= 1).
```

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "intermedio"
  tags: ["rango"]

tipo: mc
opciones_explicitas: ["x < 1 || x > 10", "x < 1 && x > 10", "x >= 1 || x <= 10", "!(x < 1 || x > 10)"]
respuesta: "x < 1 || x > 10"

enunciado: "¿Cuál expresión comprueba que `x` está FUERA del rango de 1 a 10?"

explicacion: |
  Estar fuera es estar por debajo de 1 **o** por encima de 10. Con un Y nunca se cumpliría: ningún número es menor que 1 y mayor que 10 a la vez.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "avanzado"
  tags: ["de morgan"]

tipo: mc
opciones_explicitas: ["!A || !B", "!A && !B", "A || B", "!A || B"]
respuesta: "!A || !B"

enunciado: "¿Con qué expresión es equivalente `!(A && B)`?"

explicacion: |
  Ley de De Morgan: negar un Y equivale a negar cada parte y cambiar el Y por un O. Es útil para simplificar condiciones.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "avanzado"
  tags: ["de morgan"]

tipo: mc
opciones_explicitas: ["!A && !B", "!A || !B", "A && B", "A && !B"]
respuesta: "!A && !B"

enunciado: "¿Con qué expresión es equivalente `!(A || B)`?"

explicacion: |
  Es la otra ley de De Morgan: negar un O equivale a negar cada parte y usar Y. "No (llueve o hace frío)" es "no llueve y no hace frío".
```

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "intermedio"
  tags: ["precedencia"]

tipo: mc
opciones_explicitas: ["`b && c`", "`a || b`", "Se evalúa de izquierda a derecha sin prioridad", "Depende de los valores"]
respuesta: "`b && c`"

enunciado: "En C, Java o JavaScript, ¿cuál se evalúa primero en `a || b && c`?"

explicacion: |
  El Y tiene más precedencia que el O (como el producto sobre la suma). Es lo mismo que `a || (b && c)`. Ante la duda, usá paréntesis.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "avanzado"
  tags: ["cortocircuito"]

tipo: vf
respuesta: verdadero

enunciado: "En `A && B`, si A es falso, la mayoría de los lenguajes ni siquiera evalúan B."

explicacion: |
  Se llama **evaluación en cortocircuito**: si con A ya se sabe el resultado (falso), no se mira B. Sirve, por ejemplo, para escribir `n != 0 && 100 / n > 5` sin dividir por cero.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "avanzado"
  tags: ["cortocircuito"]

tipo: mc
opciones_explicitas: ["Si `i` es demasiado grande, la segunda parte ni se evalúa y no se sale de la lista", "Se ejecuta más lento pero más seguro", "Es lo mismo en cualquier orden", "Da siempre verdadero"]
respuesta: "Si `i` es demasiado grande, la segunda parte ni se evalúa y no se sale de la lista"

enunciado: "¿Qué ventaja tiene escribir `i < largo && lista[i] == x` en ese orden?"

explicacion: |
  El cortocircuito protege la segunda condición: si `i < largo` es falso, no se intenta leer `lista[i]` (que daría error).
```

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "avanzado"
  tags: ["bits"]

tipo: mc
opciones_explicitas: ["`&&` es el Y lógico entre condiciones; `&` opera bit por bit sobre números", "Ninguna", "`&` es el Y lógico y `&&` opera bit a bit", "`&&` solo existe en Python"]
respuesta: "`&&` es el Y lógico entre condiciones; `&` opera bit por bit sobre números"

enunciado: "En JavaScript o C, ¿qué diferencia hay entre `&` y `&&`?"

explicacion: |
  Son operadores distintos. Para combinar condiciones se usa `&&`; `&` trabaja con los bits de los números (por ejemplo, para máscaras).
```

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "basico"
  tags: ["python"]

tipo: mc
opciones_explicitas: ["edad >= 18 and estudiante", "edad >= 18 && estudiante", "edad >= 18 & estudiante", "edad >= 18 AND estudiante"]
respuesta: "edad >= 18 and estudiante"

enunciado: "¿Cuál de estas expresiones es correcta en Python para \"edad mayor o igual a 18 y es estudiante\"?"

explicacion: |
  En Python los operadores lógicos se escriben con palabras: `and`, `or`, `not`. `&&` no existe en Python.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "basico"
  tags: ["sql"]

tipo: mc
opciones_explicitas: ["WHERE a = 1 AND b = 2", "WHERE a = 1 && b = 2", "WHERE a = 1, b = 2", "WHERE a = 1 + b = 2"]
respuesta: "WHERE a = 1 AND b = 2"

enunciado: "En SQL, ¿cómo se combinan dos condiciones en un WHERE para que se cumplan ambas?"

explicacion: |
  SQL usa las palabras `AND`, `OR` y `NOT`.
```

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "avanzado"
  tags: ["verdad"]

tipo: vf
respuesta: falso

enunciado: "En todos los lenguajes, el número 0 se interpreta como falso y cualquier otro número como verdadero."

explicacion: |
  Depende del lenguaje: en C y Python el 0 cuenta como falso; en otros lenguajes (Java, Rust) una condición tiene que ser estrictamente booleana y 0 da error. No lo des por sabido.
```

## Sección: estructuras-de-control-bucles (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["conceptos", "terminologia"]

respuesta: "iteración"
tipo: completar
respuestas_validas:
  - "iteración"
  - "iteracion"

enunciado: "En programación, cada una de las repeticiones de un bloque de instrucciones dentro de un bucle se denomina ___."

explicacion: |
  Un bucle permite ejecutar un conjunto de instrucciones varias veces. Cada vez que el ciclo se ejecuta, se dice que ha ocurrido una iteración.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["diferencias", "for", "while"]

respuesta: falso
tipo: vf
enunciado: "El bucle 'while' se utiliza preferentemente cuando se conoce de antemano el número exacto de veces que se debe repetir el bloque de código."

explicacion: |
  Falso. El bucle 'while' se basa en una condición lógica y se usa cuando no sabemos cuántas veces se repetirá. El bucle 'for' es el ideal cuando conocemos el número de iteraciones (iteraciones controladas).
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["for", "componentes"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["i", "inicio", "paso"], ["cont", "valor_inicial", "incremento"]]

respuesta: datos[escenario_idx][0]
tipo: mc
opciones_explicitas: ["i", "cont", "valor_inicial", "incremento"]

enunciado: "En una estructura de control 'for' estándar, el primer parámetro suele representar la ___ que actúa como contador."

explicacion: |
  La variable de control (comúnmente llamada 'i' o 'j') es la que toma los valores sucesivos durante el ciclo.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["flujo", "orden"]

respuesta_orden: ["Inicializar variable", "Evaluar condición", "Ejecutar cuerpo", "Actualizar variable"]
tipo: ordenar
opciones_explicitas: ["Inicializar variable", "Evaluar condición", "Ejecutar cuerpo", "Actualizar variable"]

enunciado: "Ordena los pasos lógicos que sigue un bucle 'while' en cada ciclo para asegurar un funcionamiento correcto y evitar bucles infinitos."

explicacion: |
  Primero se verifica si la condición es verdadera, luego se ejecuta el código y finalmente se actualiza la variable de control para que la condición pueda llegar a ser falsa eventualmente.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["errores", "bucle_infinito"]

respuesta: falso
tipo: vf
enunciado: "Un bucle infinito ocurre únicamente cuando la condición de parada es siempre verdadera debido a un error de lógica en el programa."

explicacion: |
  Falso. Aunque es la causa más común (error de lógica), un bucle infinito también puede ser intencional (por ejemplo, en el bucle principal de un sistema operativo o un videojuego que espera una señal de salida).
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["for", "iteracion", "suma"]

variables:
  escenario: uno_de([[10, 55], [5, 15], [20, 210]])
  limite: escenario[0]
  suma_final: escenario[1]

respuesta: suma_final
tipo: completar
tolerancia_abs: 0

enunciado: "Considera un bucle que recorre un rango desde 1 hasta {limite} (inclusive) sumando cada valor a una variable acumuladora que inicia en 0. ¿Cuál es el valor final de la suma?"

pasos:
  - "Inicializar acumulador = 0"
  - "Iterar desde i = 1 hasta {limite}"
  - "En cada paso, sumar i al acumulador"

explicacion: |
  El bucle recorre todos los enteros desde 1 hasta el límite definido. La suma de los primeros n números se calcula con la fórmula (n * (n + 1)) / 2. En este caso, para un límite de {limite}, la suma es {suma_final}.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["while", "condicion"]

variables:
  valor_inicial: 10
  divisor: 2
  resultado_final: 1

respuesta: falso
tipo: vf

enunciado: "Se ejecuta el siguiente pseudocódigo: \n x = {valor_inicial} \n while (x > 1): \n   x = x / {divisor} \n \n ¿La variable x terminará siendo exactamente igual a 1 al finalizar el bucle? (Verdadero/Falso)"

explicacion: |
  En cada iteración, x se divide por 2. La secuencia es: 10, 5, 2.5, 1.25, 0.625... Como x siempre será mayor que 1 hasta que cruce el umbral, el bucle se detiene cuando x <= 1. En este caso, el valor final es 0.625, por lo tanto, no es exactamente 1.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["for", "anidado", "iteraciones"]

variables:
  i_max: 3
  j_max: 2

respuesta: 6
tipo: completar
tolerancia_abs: 0

enunciado: "En un bucle anidado donde el bucle externo corre desde i = 1 hasta {i_max} y el bucle interno corre desde j = 1 hasta {j_max}, ¿cuántas veces se ejecutará el cuerpo del bucle interno en total?"

pasos:
  - "El bucle externo se ejecuta {i_max} veces"
  - "Por cada iteración del externo, el interno se ejecuta {j_max} veces"
  - "Total = {i_max} * {j_max}"

explicacion: |
  Cuando tenemos bucles anidados, el número total de iteraciones es el producto del número de iteraciones de cada bucle. En este caso, 3 * 2 = 6.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["ordenar", "flujo"]

respuesta_orden: ["inicializar_contador", "evaluar_condicion", "ejecutar_cuerpo", "actualizar_contador"]
tipo: ordenar

opciones_explicitas: ["inicializar_contador", "evaluar_condicion", "ejecutar_cuerpo", "actualizar_contador"]

enunciado: "Ordena los pasos lógicos que sigue un bucle 'while' en cada iteración para asegurar su funcionamiento correcto:"

explicacion: |
  Primero se debe evaluar si la condición es verdadera. Si lo es, se ejecuta el código interno. Luego, es crucial actualizar la variable de control (incrementar o decrementar) para evitar un bucle infinito.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["while", "incremento"]

variables:
  puntos_iniciales: 5
  incremento: 2
  puntos_finales: 11

respuesta: "11"
tipo: completar

opciones_explicitas: ["11"]
respuestas_validas:
  - "11"

enunciado: "Un programa tiene un bucle 'while' que continúa mientras 'puntos' sea menor que 10. Si 'puntos' comienza en {puntos_iniciales} y en cada iteración se le suma {incremento}, ¿cuál será el valor final de 'puntos' cuando el bucle termine?"

explicacion: |
  1. Inicio: puntos = 5. ¿5 < 10? Sí. Sumamos 2 -> puntos = 7.
  2. ¿7 < 10? Sí. Sumamos 2 -> puntos = 9.
  3. ¿9 < 10? Sí. Sumamos 2 -> puntos = 11.
  4. ¿11 < 10? No. El bucle termina. El valor final es 11.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["error_comun", "while", "logica"]

variables:
  i: 0

enunciado: "Analiza el siguiente fragmento de código en pseudocódigo: \n\n x = 10\n i = 0\n while (i < x):\n   print(i)\n   i = i - 1"

opciones_explicitas: ["El bucle termina correctamente", "El bucle entra en un bucle infinito", "El bucle no se ejecuta nunca", "Se produce un error de sintaxis"]

respuesta: "El bucle entra en un bucle infinito"
tipo: mc

explicacion: |
  Al decrementar `i` en cada iteración (`i = i - 1`), la condición `i < 10` siempre será verdadera, ya que `i` se aleja cada vez más del valor 10 hacia los números negativos. Esto causa un bucle infinito.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["for", "index_out_of_bounds"]

variables:
  lista: ["A", "B", "C"]
  largo_lista: largo(lista)

enunciado: "Si tenemos una lista con {largo_lista} elementos (índices 0, 1 y 2) y ejecutamos el siguiente bucle:\n\n for i from 0 to 3:\n   print(lista[i])\n\n ¿Qué sucede al llegar a la última iteración?"

opciones_explicitas: ["Se imprime el último elemento", "Se imprime un error de índice fuera de rango", "Se imprime un valor nulo", "El bucle se detiene sin error"]

respuesta: "Se imprime un error de índice fuera de rango"
tipo: mc

explicacion: |
  En la mayoría de los lenguajes, si una lista tiene 3 elementos, los índices válidos son 0, 1 y 2. Intentar acceder al índice 3 provocará un error de desbordamiento de índice (IndexOutOfBounds).
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["while", "logica"]

enunciado: "En un bucle `while`, la condición evaluada determina si el cuerpo del bucle se ejecuta o no. Si la condición es falsa desde el primer momento, el bucle se ejecuta ___ veces."

respuestas_validas:
  - "0"
tipo: completar

explicacion: |
  A diferencia de un bucle `do-while` (que garantiza al menos una ejecución), el bucle `while` evalúa la condición *antes* de entrar al bloque. Si la condición es falsa inicialmente, el cuerpo nunca se ejecuta.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["anidados", "orden"]

variables:
  resultado: "A, B, C, D"

enunciado: "Ordena la secuencia de salida de los mensajes para el siguiente código:\n\n for i from 1 to 2:\n   for j from 1 to 2:\n     print(i, j)"

opciones_explicitas: ["(1,1), (1,2), (2,1), (2,2)"]

respuesta_orden: ["(1,1), (1,2), (2,1), (2,2)"]
tipo: ordenar

explicacion: |
  En los bucles anidados, el bucle interno (j) debe completar todas sus iteraciones para cada una de las iteraciones del bucle externo (i). Por eso, primero se agota la secuencia de `j` para `i=1` y luego se pasa a `i=2`.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["boolean", "logica"]

variables:
  condicion_inicial: falso

enunciado: "Supongamos que tenemos el siguiente código:\n\n x = 5\n while (x > 0):\n   x = x - 1\n   if (x == 2):\n     break\n\n ¿El valor final de `x` al salir del bucle es 2? (Responde verdadero o falso)"

respuesta: verdadero
tipo: vf

explicacion: |
  El bucle se ejecuta para x=5, 4, 3. Cuando x llega a 2 tras la resta, la instrucción `break` interrumpe inmediatamente el bucle, dejando el valor de `x` en 2.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["bucles", "for", "while"]

tipo: mc
opciones_explicitas: ["El bucle for se usa cuando se conoce de antemano el número de iteraciones, mientras que el while depende de una condición lógica.", "El bucle for es más rápido que el while en todos los lenguajes.", "El bucle while solo puede usarse con números enteros.", "No existe diferencia funcional entre ambos."]

respuesta: "El bucle for se usa cuando se conoce de antemano el número de iteraciones, mientras que el while depende de una condición lógica."

enunciado: "En programación, ¿cuál es la distinción principal entre un bucle 'for' y un bucle 'while'?"

explicacion: |
  El bucle 'for' está diseñado para iterar sobre una secuencia finita o un rango conocido, mientras que el 'while' es una estructura de control que se ejecuta mientras una condición booleana sea verdadera, sin importar cuántas veces ocurra.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["while", "condicion"]

tipo: completar
respuestas_validas:
  - "verdadero"

respuesta: "verdadero"

enunciado: "Si una condición en un bucle 'while' nunca cambia su valor y permanece siempre como ___, el programa entrará en un bucle infinito."

explicacion: |
  Un bucle 'while' evalúa la condición antes de cada iteración. Si la condición es siempre 'falso', el bucle no se ejecuta; si es siempre 'verdadero', el bucle nunca termina.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["while", "booleano"]

tipo: vf

respuesta: verdadero

enunciado: "¿Es posible que un bucle 'while' no se ejecute ni una sola vez si la condición inicial es falsa?"

explicacion: |
  Correcto. A diferencia del bucle 'do-while' (que ejecuta el bloque al menos una vez), el bucle 'while' evalúa la condición al principio. Si es falsa desde el inicio, el cuerpo del bucle se salta por completo.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["iteracion", "pasos"]

tipo: ordenar
opciones_explicitas: ["Inicialización de la variable de control", "Evaluación de la condición", "Ejecución del cuerpo del bucle", "Actualización de la variable de control"]

respuesta_orden: ["Inicialización de la variable de control", "Evaluación de la condición", "Ejecución del cuerpo del bucle", "Actualización de la variable de control"]

enunciado: "Ordena los pasos lógicos que ocurren en una iteración estándar de un bucle controlado por una variable:"

explicacion: |
  Para que un bucle funcione correctamente, primero se establece el punto de partida (inicialización), luego se verifica si se debe entrar (condición), se realiza la tarea (cuerpo) y finalmente se modifica la variable para avanzar (actualización).
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["break", "control"]

respuesta: "La instrucción 'break' termina el bucle inmediatamente, independientemente de si la condición del 'while' sigue siendo verdadera."

tipo: mc
opciones_explicitas: ["La instrucción 'break' termina el bucle inmediatamente, independientemente de si la condición del 'while' sigue siendo verdadera.", "La instrucción 'break' solo sirve para saltar una iteración y continuar con la siguiente."]

enunciado: "Considerando un bucle 'while' que está en ejecución, ¿qué diferencia marca el uso de la instrucción 'break' respecto a la condición del bucle?"

explicacion: |
  El comando 'break' fuerza la salida inmediata del bucle, ignorando la evaluación de la condición lógica que normalmente controlaría la repetición.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["for", "iteracion"]

variables:
  datos: [["i", "1", "3", "3"], ["j", "0", "1", "2"], ["k", "5", "8", "4"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si ejecutamos un bucle 'for' con la variable {datos[idx][0]} que recorre desde el valor inicial {datos[idx][1]} hasta el valor final {datos[idx][2]} inclusive, ¿cuántas veces se ejecutará el cuerpo del bucle?"

respuesta: datos[idx][3]
tipo: mc
opciones_explicitas: ["1", "2", "3", "4"]

explicacion: |
  El número de iteraciones en un bucle que va de 'a' hasta 'b' (inclusive) se calcula como: (b - a) + 1.
  En este caso: ({datos[idx][2]} - {datos[idx][1]}) + 1 = {datos[idx][3]}.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["while", "condicion"]

variables:
  datos: [["x", 10, 2], ["y", 20, 5], ["z", 15, 3]]
  idx: uno_de([0, 1, 2])

enunciado: "Considera el siguiente código: \n`valor = {datos[idx][1]} \nwhile (valor > 1): \n    valor = valor - {datos[idx][2]}` \n\n¿Cuál será el valor final de la variable después de que el bucle termine?"

respuesta: "0"
tipo: mc
opciones_explicitas: ["0", "1", "2", "5"]

explicacion: |
  El bucle resta {datos[idx][2]} repetidamente mientras el valor sea mayor a 1. Como {datos[idx][1]} es múltiplo exacto de {datos[idx][2]}, la secuencia de restas llega exactamente a 0 (por ejemplo, para x: 10 → 8 → 6 → 4 → 2 → 0), momento en el que "0 > 1" es falso y el bucle se detiene.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "avanzado"
  tags: ["anidados", "complejidad"]

variables:
  casos: [[3, 4], [2, 5], [4, 2]]
  caso: uno_de(casos)
  a: caso[0]
  b: caso[1]
  iteraciones: a * b

enunciado: "Dado el siguiente fragmento de código:\n`for i from 1 to {a}:\n    for j from 1 to {b}:\n        print(i, j)`\n\n¿Cuántas veces se imprimirá el mensaje en total?"

respuesta: iteraciones
tipo: completar
tolerancia_abs: 0

explicacion: |
  En un bucle anidado, el número total de iteraciones es el producto del número de iteraciones del bucle externo por el número de iteraciones del bucle interno.
  {a} * {b} = {iteraciones}.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["while", "infinito"]

enunciado: "Si tenemos un bucle `while (i < 10)` y dentro del bucle la variable `i` nunca aumenta su valor, el programa entrará en un bucle infinito."

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. Si la condición de parada (`i < 10`) nunca deja de ser verdadera porque `i` no cambia, el programa nunca saldrá del bucle.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["orden", "flujo"]

enunciado: "Ordena los pasos de ejecución de un bucle 'for' que recorre una lista de elementos:"

opciones_explicitas: ["Inicializar el contador", "Evaluar la condición de parada", "Ejecutar el cuerpo del bucle", "Incrementar el contador"]
respuesta_orden: ["Inicializar el contador", "Evaluar la condición de parada", "Ejecutar el cuerpo del bucle", "Incrementar el contador"]
tipo: ordenar

explicacion: |
  El flujo estándar es: 1. Inicialización, 2. Evaluación de condición, 3. Ejecución de instrucciones, 4. Actualización/Incremento.
```

## Sección: funciones-y-modularidad (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["conceptos", "modularidad"]

respuesta: "modularidad"
tipo: completar
respuestas_validas:
  - "modularidad"

enunciado: "La capacidad de dividir un programa complejo en partes más pequeñas, independientes y manejables se denomina ___."

explicacion: |
  La modularidad permite organizar el código en bloques lógicos, facilitando el mantenimiento y la reutilización.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["sintaxis", "conceptos"]

variables:
  escenario: uno_de([["El valor que una función recibe para procesar", "Parámetro"], ["El valor que una función devuelve al finalizar su ejecución", "Retorno"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Parámetro", "Retorno", "Llamada", "Variable local"]

enunciado: "En el contexto de una función, {escenario[0]} es el elemento que permite pasar información hacia el interior de la función."

explicacion: |
  Los parámetros son las variables de entrada que recibe una función para realizar su tarea.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["reutilizacion", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una de las principales ventajas de utilizar funciones es que permite evitar la duplicación de código, ya que una misma función puede ser invocada desde diferentes partes del programa."

explicacion: |
  Efectivamente, la reutilización es uno de los pilares de la programación modular.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["flujo", "orden"]

respuesta_orden: ["Definición", "Llamada", "Ejecución", "Retorno"]
tipo: ordenar
opciones_explicitas: ["Definición", "Llamada", "Ejecución", "Retorno"]

enunciado: "Ordena los pasos lógicos que ocurren cuando se utiliza una función en un programa:"

pasos:
  - "Se declara la función y su lógica."
  - "Se invoca la función desde el código principal."
  - "Se procesan las instrucciones internas."
  - "La función devuelve un valor o finaliza."

explicacion: |
  Primero se debe definir la función, luego llamarla, se ejecuta su cuerpo y finalmente retorna el control o un valor.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["scope", "variables"]

respuesta: "local"
tipo: completar
respuestas_validas:
  - "local"

enunciado: "Una variable declarada dentro del cuerpo de una función tiene un ámbito ___, lo que significa que no es accesible desde fuera de dicha función."

explicacion: |
  Las variables definidas dentro de una función son locales a su contexto de ejecución y no interfieren con el resto del programa.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["conceptos", "modularidad"]

respuesta: verdadero
tipo: vf

enunciado: "Dividir un programa en funciones pequeñas y reutilizables ayuda a reducir la duplicación de código y facilita el mantenimiento."

explicacion: |
  La modularidad permite que el código sea más legible y que las correcciones se realicen en un solo lugar, afectando a todas las partes que llaman a esa función.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["sintaxis", "parametros"]

variables:
  escenario: uno_de([["calcular_area_rectangulo", "base", "altura"], ["saludar_usuario", "nombre", "saludo"], ["sumar_dos_numeros", "a", "b"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["base", "nombre", "a"]

enunciado: "En la función {escenario[0]}({escenario[1]}, {escenario[2]}), ¿cuál es el nombre del primer parámetro?"

explicacion: |
  Los parámetros son las variables que una función recibe para procesar información. En el primer caso del escenario, el primer parámetro es {escenario[1]}.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["flujo_control", "retorno"]

variables:
  datos: uno_de([[10, 2, 20], [5, 3, 15], [8, 4, 32]])

respuesta: datos[2]
tipo: completar

enunciado: |
  Dada la siguiente función:
  def multiplicar(x, y):
      return x * y

  Si ejecutamos la llamada: resultado = multiplicar({datos[0]}, {datos[1]}), el valor de 'resultado' será ___.

pasos:
  - "Identificar los valores de entrada: x = {datos[0]} y y = {datos[1]}"
  - "Realizar la operación matemática: {datos[0]} * {datos[1]}"

explicacion: |
  La función realiza la operación de multiplicación y el comando 'return' devuelve el resultado hacia el punto donde fue llamada.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["estructura", "orden"]

respuesta_orden: ["definir_funcion", "llamar_funcion", "mostrar_resultado"]
tipo: ordenar

opciones_explicitas: ["definir_funcion", "llamar_funcion", "mostrar_resultado"]

enunciado: "Para que un programa modular funcione correctamente, ¿cuál es el orden lógico de ejecución de sus componentes?"

explicacion: |
  Primero se debe definir la lógica (la función), luego se invoca la función con los datos necesarios y finalmente se procesa o muestra el resultado obtenido.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "avanzado"
  tags: ["scope", "variables_globales"]

respuesta: "5"
tipo: mc
opciones_explicitas: ["5", "10", "Error: variable no definida"]

enunciado: |
  Considera el siguiente código:
  x = 10
  def mi_funcion():
      x = 5
      return x

  Si llamamos a mi_funcion(), el valor devuelto es ___.

explicacion: |
  Dentro de la función, se crea una variable local 'x' que tiene el mismo nombre que la global, pero la función trabaja con la local. Por lo tanto, el valor devuelto es el de la variable local definida dentro del bloque, es decir, 5.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["scope", "variables", "modularidad"]

variables:
  escenario: uno_de([[1, "global"], [2, "local"]])

enunciado: "En un programa, una variable definida dentro de una función tiene un alcance ___."

opciones_explicitas:
  - "global"
  - "local"

respuesta: escenario[1]
tipo: mc

explicacion: |
  Las variables definidas dentro de una función tienen un ámbito local, lo que significa que no pueden ser accedidas directamente desde fuera de la función. Esto es fundamental para la modularidad y evita colisiones de nombres.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["return", "side_effects", "output"]

enunciado: "Si una función utiliza 'print' para mostrar un resultado en pantalla pero no tiene una instrucción de salida de datos hacia el flujo principal, la función devuelve un valor de tipo ___."

respuestas_validas:
  - "None"

respuesta: "None"
tipo: completar

explicacion: |
  Es un error común confundir 'imprimir' (mostrar en consola) con 'retornar' (devolver un valor para ser usado en otra parte). Si una función no tiene un 'return' explícito, devuelve por defecto un valor nulo o None.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "avanzado"
  tags: ["side_effects", "pure_functions", "modularidad"]

enunciado: "¿Es verdadero que una 'función pura' es aquella que, además de devolver siempre el mismo resultado para los mismos argumentos, no produce efectos secundarios (como modificar una variable global o escribir en un archivo)?"

respuesta: verdadero
tipo: vf
explicacion: |
  La pureza en las funciones es la base de la programación funcional y de la modularidad robusta. Si una función modifica algo fuera de su propio ámbito, se dice que tiene un 'efecto secundario', lo cual dificulta el testing y la reutilización.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["refactoring", "modularidad", "algoritmo"]

enunciado: "Ordena los pasos lógicos para refactorizar un código monolítico (un solo bloque largo) en un programa modular:"

opciones_explicitas:
  - "Identificar bloques de lógica con una responsabilidad única"
  - "Extraer esos bloques en funciones independientes"
  - "Definir los parámetros de entrada y los valores de retorno necesarios"
  - "Llamar a las nuevas funciones desde el programa principal"

respuesta_orden: ["Identificar bloques de lógica con una responsabilidad única", "Extraer esos bloques en funciones independientes", "Definir los parámetros de entrada y los valores de retorno necesarios", "Llamar a las nuevas funciones desde el programa principal"]
tipo: ordenar

explicacion: |
  La modularización efectiva requiere primero identificar la cohesión (qué pertenece a qué), luego aislar la lógica, definir sus interfaces (parámetros/retornos) y finalmente integrarlas.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["parameters", "arguments", "terminologia"]

enunciado: "En la definición de una función `def suma(a, b):`, los elementos `a` y `b` se denominan ___ , mientras que los valores reales que se pasan al llamar a la función `suma(5, 3)` se denominan ___ ."

respuestas_validas:
  - "parámetros"
  - "argumentos"

respuesta: "parámetros"
tipo: completar

explicacion: |
  Aunque se usan como sinónimos en el habla cotidiana, técnicamente los 'parámetros' son las variables en la definición de la función, y los 'argumentos' son los valores reales que se le pasan durante la ejecución.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["conceptos", "modularidad"]

respuesta: "reutilizar"
tipo: completar
respuestas_validas:
  - "reutilizar"
  - "reutilización"

enunciado: "Mientras que un bloque de código aislado realiza una tarea única, la modularidad busca dividir un programa en piezas que permitan ___ el código en diferentes partes del sistema."

explicacion: |
  La modularidad permite dividir un problema complejo en subproblemas más pequeños y manejables, permitiendo que el código sea reutilizado en otros contextos sin necesidad de reescribirlo.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["funciones", "terminologia"]

respuesta: verdadero
tipo: vf

enunciado: "En el contexto de la definición de funciones, el 'parámetro' es la variable declarada en la firma de la función, mientras que el 'argumento' es el valor real pasado al invocarla. ¿Es esta distinción correcta?"

explicacion: |
  Correcto. El parámetro actúa como un marcador de posición (variable local) y el argumento es el dato concreto que se envía durante la llamada.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["comparacion", "mantenimiento"]

respuesta: "mantenimiento"
tipo: mc
opciones_explicitas: ["rendimiento", "mantenimiento", "estética", "velocidad"]

enunciado: "Comparado con un programa monolítico (un solo bloque de código gigante), un programa modular facilita principalmente el ___ y la detección de errores."

explicacion: |
  Al tener el código separado en módulos o funciones, si ocurre un error, es más fácil localizar la pieza exacta que está fallando sin afectar al resto del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["flujo_control", "modularidad"]

respuesta_orden: ["llamada", "ejecución", "retorno"]
tipo: ordenar
opciones_explicitas: ["llamada", "ejecución", "retorno"]

enunciado: "Ordena cronológicamente los pasos que ocurren cuando el control de un programa pasa a una función:"

pasos:
  - "El programa salta a la definición de la función."
  - "La función devuelve un valor y el control vuelve al punto de origen."
  - "Se invoca la función con los valores necesarios."

explicacion: |
  El flujo lógico es: 1. Llamada (Call), 2. Ejecución del cuerpo de la función, 3. Retorno (Return) al flujo principal.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "avanzado"
  tags: ["scope", "variables"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["local", "solo es visible dentro de la función"], ["global", "es accesible desde cualquier parte del programa"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["solo es visible dentro de la función", "es accesible desde cualquier parte del programa", "ninguna de las anteriores"]

enunciado: "Si definimos una variable dentro de una función, su alcance es {datos[escenario_idx][0]}. ¿Cuál es la característica de este tipo de variable?"

explicacion: |
  Las variables locales existen únicamente durante la ejecución de la función y no pueden ser accedidas directamente desde fuera de ella, lo cual es clave para evitar colisiones de nombres en la modularidad.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["conceptos", "modularidad"]

variables:
  escenarios: [["un programa de 1000 líneas en un solo bloque", "difícil de mantener y testear"], ["un programa dividido en funciones pequeñas", "fácil de mantener y reutilizar"]]
  escenario: uno_de(escenarios)

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["difícil de mantener y testear", "fácil de mantener y reutilizar"]

enunciado: "Si un programador decide que su código debe ser modular, el beneficio principal es que el software resultante será ___."

explicacion: |
  La modularidad permite dividir problemas complejos en partes más pequeñas y manejables, facilitando la lectura, el testeo y la reutilización de código.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["funciones", "parametros"]

variables:
  caso_idx: uno_de([0,1,2])
  casos: [["sumar(a, b)", "los valores que recibe la función"], ["print('Hola')", "lo que la función devuelve"], ["x = 5", "una variable global"]]
  respuestas: ["los valores que recibe la función", "lo que la función devuelve", "una variable global"]

respuesta: casos[caso_idx][1]
tipo: completar
respuestas_validas:
  - "los valores que recibe la función"
  - "lo que la función devuelve"
  - "una variable global"

enunciado: "En la estructura de una función, la sección que define qué datos externos puede procesar la función se denomina ___."

explicacion: |
  Los parámetros son variables locales en la definición de una función que actúan como marcadores de posición para los argumentos que se le pasan al llamarla.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["booleano", "conceptos"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que una función que no contiene una instrucción de retorno (return) siempre devuelve el valor `falso`?"

explicacion: |
  En la mayoría de los lenguajes de programación, si una función no tiene una instrucción de retorno explícita, devuelve un valor especial que representa la ausencia de valor (como `None` en Python o `undefined` en JS), no necesariamente el booleano `falso`.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["orden", "ejecucion"]

respuesta_orden: ["Definición de la función", "Llamada a la función", "Ejecución del cuerpo de la función", "Retorno al flujo principal"]
tipo: ordenar
opciones_explicitas: ["Definición de la función", "Llamada a la función", "Ejecución del cuerpo de la función", "Retorno al flujo principal"]

enunciado: "Ordena los pasos lógicos que ocurren en la memoria de la computadora cuando se utiliza una función en un programa:"

explicacion: |
  Para que una función trabaje, primero debe estar definida en memoria, luego el programa debe invocarla (llamada), se procesa su lógica interna y finalmente el control vuelve a la línea siguiente a la llamada.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "avanzado"
  tags: ["scope", "variables"]

variables:
  test_idx: uno_de([0,1])
  tests: [["x = 10; def f(): print(x); f()", "10"], ["x = 5; def f(): x = 2; f(); print(x)", "5"]]
  resultado_correcto: tests[test_idx][1]

respuesta: resultado_correcto
tipo: completar
tolerancia_abs: 0

enunciado: "Analiza el siguiente código: {tests[test_idx][0]}. ¿Cuál será el resultado de la salida en consola?"

explicacion: |
  En el primer caso, se accede a una variable global. En el segundo caso, la asignación `x = 2` dentro de la función crea una variable local, dejando la variable global `x` intacta para el `print` final.
```

## Sección: estructuras-de-datos-listas-pilas-colas (26 preguntas)

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "basico"
  tags: ["pilas", "lifo"]

respuesta: "LIFO"
tipo: completar
respuestas_validas:
  - "LIFO"
  - "lifo"
  - "LIFO (Last In, First Out)"

enunciado: "La estructura de datos conocida como 'Pila' se rige por el principio de acceso ___ (Last In, First Out)."

explicacion: |
  En una pila, el último elemento en entrar es el primero en salir. Esto se conoce como LIFO.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "basico"
  tags: ["colas", "fifo", "pilas"]

variables:
  pares: [["Pila", "Último en entrar, primero en salir"], ["Cola", "Primero en entrar, primero en salir"]]
  idx: uno_de([0, 1])

respuesta: pares[idx][0]
tipo: mc
opciones_explicitas: ["Pila", "Cola"]

enunciado: "Si una estructura de datos sigue el principio de '{pares[idx][1]}', estamos ante una ___."

explicacion: |
  El principio FIFO (First In, First Out) es característico de las colas, donde el primer elemento que llega es el primero en ser procesado.
  El principio LIFO (Last In, First Out) es característico de las pilas.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "basico"
  tags: ["listas", "acceso"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de las pilas y las colas, una lista permite el acceso a cualquier elemento mediante un índice, sin seguir un orden restrictivo de entrada/salida."

explicacion: |
  Las listas son estructuras de acceso aleatorio, mientras que las pilas y colas son estructuras de acceso restringido.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "basico"
  tags: ["pilas", "operaciones"]

respuesta_orden: ["push", "pop"]
tipo: ordenar

opciones_explicitas: ["push", "pop"]

enunciado: "Ordena las operaciones típicas de una Pila (Stack) desde la que agrega un elemento hasta la que lo retira:"

explicacion: |
  En una pila, 'push' se usa para insertar un elemento en el tope y 'pop' para extraerlo.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "intermedio"
  tags: ["colas", "uso"]

variables:
  idx: uno_de([0, 1])
  ejemplo: [["gestión de procesos en un CPU", "impresora"], ["fila de espera en un banco", "gestión de procesos en un CPU"]]

respuesta: ejemplo[idx][0]
tipo: mc
opciones_explicitas: ["gestión de procesos en un CPU", "fila de espera en un banco", "historial de navegación", "deshacer (undo)"]

enunciado: "Las colas (FIFO) son ideales para escenarios de espera. ¿Cuál de estos es un uso común de una cola?"

explicacion: |
  La gestión de procesos en un sistema operativo utiliza colas para decidir qué tarea procesar según su orden de llegada.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_pilas"
  nivel: "basico"
  tags: ["pilas", "lifo"]

respuesta: verdadero
tipo: vf

enunciado: "En una estructura de datos tipo Pila (Stack), el último elemento en ser insertado es el primero en ser eliminado, siguiendo el principio LIFO (Last In, First Out)."

explicacion: |
  Exacto. Las pilas funcionan como una pila de platos: el último que pones arriba es el primero que sacas.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_pilas"
  nivel: "intermedio"
  tags: ["pilas", "push", "pop"]

variables:
  valores: [["10", "20", "30"], ["A", "B", "C"], ["5", "15", "25"]]
  resultados: ["20", "B", "15"]
  idx: uno_de([0, 1, 2])

respuesta: resultados[idx]
tipo: mc
opciones_explicitas: ["20", "B", "15", "30"]

enunciado: "Dada una pila vacía, si realizamos las siguientes operaciones en orden: push({valores[idx][0]}), push({valores[idx][1]}), push({valores[idx][2]}) y finalmente pop, ¿cuál es el elemento que queda en el tope de la pila?"

pasos:
  - "Insertar el primer elemento (push)."
  - "Insertar el segundo elemento (push)."
  - "Insertar el tercer elemento (push)."
  - "Eliminar el elemento superior (pop)."

explicacion: |
  Al hacer push de los tres elementos, el tope es el tercero. Al hacer pop, ese tercero se elimina, dejando el segundo como el nuevo tope.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_colas"
  nivel: "basico"
  tags: ["colas", "fifo"]

respuesta: "cliente_1"
tipo: mc
opciones_explicitas: ["cliente_1", "cliente_2", "cliente_3", "cliente_4"]

enunciado: "En una cola (Queue) de procesamiento de tareas, si entran los elementos cliente_1, cliente_2 y cliente_3 en ese orden, ¿cuál es el primer elemento en ser atendido y salir de la cola?"

explicacion: |
  Las colas siguen el principio FIFO (First In, First Out). El primero en entrar es el primero en salir.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_pilas"
  nivel: "intermedio"
  tags: ["pilas", "ordenar"]

respuesta_orden: ["A", "B"]
tipo: ordenar
opciones_explicitas: ["A", "B"]

enunciado: "Si realizamos las siguientes operaciones de forma consecutiva sobre una pila vacía: push(A), push(B), push(C), push(D), pop, pop — ordena los elementos que permanecen en la pila, desde la base hasta el tope."

pasos:
  - "La pila contiene [A, B, C, D] con D en el tope."
  - "Se ejecuta pop: sale D, queda [A, B, C]."
  - "Se ejecuta pop: sale C, queda [A, B]."

explicacion: |
  Al hacer pop dos veces, eliminamos los dos últimos elementos insertados (D y luego C). Los que quedan en la pila, de base a tope, son A y B.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_comparacion"
  nivel: "basico"
  tags: ["pilas", "colas"]

respuesta: "FIFO"
tipo: completar
respuestas_validas:
  - "FIFO"
  - "fifo"

enunciado: "Mientras que la Pila utiliza el principio LIFO (Last In, First Out), la Cola utiliza el principio ___ (First In, First Out)."

explicacion: |
  La Cola (Queue) garantiza que el primer elemento en entrar sea el primero en ser procesado.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "basico"
  tags: ["pilas", "colas", "conceptos"]

respuesta: "LIFO"
tipo: completar
respuestas_validas:
  - "LIFO"
  - "lifo"
  - "Lifo"

enunciado: "En una estructura de datos de tipo Pila (Stack), el último elemento en ser insertado es el primero en ser extraído, principio conocido como ___."

explicacion: |
  La Pila sigue el principio LIFO (Last In, First Out). El último elemento que entra es el primero en salir, como una pila de platos.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "basico"
  tags: ["colas", "fifo"]

opciones_explicitas: ["El primero en entrar es el primero en salir", "El último en entrar es el primero en salir", "El primero en entrar es el último en salir"]
respuesta: "El primero en entrar es el primero en salir"
tipo: mc

enunciado: "Si tenemos una Cola (Queue) con los elementos [A, B, C] (donde A es el primero en entrar), ¿cuál es el orden de salida de los elementos al realizar tres operaciones de extracción?"

explicacion: |
  Una Cola sigue el principio FIFO (First In, First Out). El primer elemento que llega a la fila es el primero en ser atendido y salir.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "intermedio"
  tags: ["aplicaciones", "pilas"]

respuesta: verdadero
tipo: vf

enunciado: "Para implementar la funcionalidad 'Deshacer' (Undo) en un editor de texto, donde queremos revertir la última acción realizada, la estructura de datos más adecuada es una Pila."

explicacion: |
  Correcto. Como queremos revertir la acción más reciente, necesitamos acceder al último elemento agregado, lo cual es la definición de una Pila (LIFO).
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "basico"
  tags: ["comparacion"]

respuesta: verdadero
tipo: vf

enunciado: "Tanto las Pilas como las Colas son estructuras de datos lineales que no permiten el acceso aleatorio a sus elementos (a diferencia de un Array o una Lista indexada)."

explicacion: |
  Verdadero. En sus implementaciones puras, las pilas y colas son estructuras de acceso restringido: solo puedes interactuar con los extremos (top en pilas, front/rear en colas).
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "intermedio"
  tags: ["operaciones", "pila"]

tipo: ordenar
opciones_explicitas: ["push(1)", "push(2)", "pop()", "push(3)"]
respuesta_orden: ["push(1)", "push(2)", "pop()", "push(3)"]

enunciado: "Ordena las siguientes operaciones de una Pila para que el elemento que quede en el tope (top) al finalizar sea el número 3."

explicacion: |
  1. push(1) -> Pila: [1]
  2. push(2) -> Pila: [1, 2]
  3. pop()   -> Pila: [1] (sale el 2)
  4. push(3) -> Pila: [1, 3]
  El tope final queda en 3.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "intermedio"
  tags: ["operaciones", "pila"]

tipo: ordenar
opciones_explicitas: ["push(10)", "push(20)", "pop()", "push(30)"]
respuesta_orden: ["push(10)", "push(20)", "pop()", "push(30)"]

enunciado: "Ordena las operaciones para obtener una pila que contenga únicamente los elementos [10, 30] (donde 30 es el tope)."

explicacion: |
  1. push(10) -> [10]
  2. push(20) -> [10, 20]
  3. pop()    -> [10]
  4. push(30) -> [10, 30]
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "basico"
  tags: ["pilas", "lifo"]

respuesta: "LIFO"
tipo: completar
respuestas_validas:
  - "LIFO"
  - "lifo"

enunciado: "La estructura de datos tipo Pila se caracteriza por seguir el principio de acceso ___ (Last In, First Out)."

explicacion: |
  En una pila, el último elemento en entrar es el primero en salir, similar a una pila de platos.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "basico"
  tags: ["colas", "fifo"]

respuesta: "FIFO"
tipo: mc
opciones_explicitas: ["LIFO", "FIFO", "Random Access", "LIFO-FIFO"]

enunciado: "A diferencia de las Pilas, las Colas operan bajo el principio de:"

explicacion: |
  La cola (Queue) utiliza el principio FIFO (First In, First Out), donde el primer elemento en entrar es el primero en ser procesado.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "intermedio"
  tags: ["listas", "acceso"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de una Pila, una Lista permite el acceso aleatorio a cualquier elemento mediante su índice sin necesidad de retirar los elementos superiores."

explicacion: |
  Las listas permiten acceso por índice, mientras que en las pilas el acceso está restringido al elemento en el tope.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "basico"
  tags: ["pilas", "operaciones"]

tipo: ordenar
opciones_explicitas: ["Push", "Push", "Pop", "Pop"]
respuesta_orden: ["Push", "Push", "Pop", "Pop"]

enunciado: "Si tenemos una pila vacía, ¿cuál es el orden de operaciones para insertar dos elementos (A y B) y luego extraer el primero que fue insertado?"

explicacion: |
  Para insertar A y B en la pila usamos Push, Push (quedando B en el tope). Como una pila es LIFO, para llegar hasta A (el primero insertado) primero hay que sacar B con un Pop, y luego sacar A con un segundo Pop. La secuencia completa es: Push, Push, Pop, Pop.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "intermedio"
  tags: ["aplicaciones", "escenarios"]

variables:
  idx: uno_de([0, 1])
  escenarios: [["gestionar una impresora con varios documentos esperando", "Cola (FIFO)"], ["gestionar el botón 'deshacer' (undo) de un editor", "Pila (LIFO)"]]

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["Cola (FIFO)", "Pila (LIFO)", "Lista Dinámica"]

enunciado: "Si el escenario es {escenarios[idx][0]}, la estructura de datos más adecuada es una:"

explicacion: |
  En el caso de la impresora, se usa FIFO para respetar el orden de llegada. En el caso de 'deshacer', se usa LIFO para revertir la última acción realizada.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_pilas"
  nivel: "basico"
  tags: ["pilas", "lifo"]

variables:
  datos: [["escribir 'Hola'", "pop"], ["borrar 'mundo'", "pop"], ["cambiar color", "pop"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["push", "pop", "enqueue", "dequeue"]

enunciado: "En un editor de texto, la función 'Deshacer' (Undo) se implementa comúnmente usando una pila para almacenar las acciones. Si la última acción realizada fue {datos[idx][0]}, ¿qué operación de pila se debe ejecutar para revertirla?"

explicacion: |
  Una pila sigue el principio LIFO (Last In, First Out). Para deshacer la última acción, se debe extraer el elemento superior de la pila mediante la operación 'pop'.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_colas"
  nivel: "basico"
  tags: ["colas", "fifo"]

variables:
  datos: [["Doc_A", "imprimir"], ["Doc_B", "imprimir"], ["Doc_C", "imprimir"]]
  idx: uno_de([0,1,2])

respuesta: verdadero
tipo: vf
enunciado: "En una cola de impresión (Spooler), los documentos se procesan en el orden en que llegan. Si el documento {datos[idx][0]} es el primero en la cola, ¿se procesará siguiendo el principio FIFO (First In, First Out)?"

explicacion: |
  Correcto. Las colas utilizan FIFO, lo que garantiza que el primer elemento en entrar sea el primero en salir.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_pilas"
  nivel: "intermedio"
  tags: ["pilas", "lifo", "ordenamiento"]

variables:
  datos: [["A", "B", "C"], ["X", "Y", "Z"], ["1", "2", "3"]]
  idx: uno_de([0,1,2])

respuesta_orden: [datos[idx][2], datos[idx][1], datos[idx][0]]
tipo: ordenar
opciones_explicitas: datos[idx]

enunciado: "Se insertan los elementos de la secuencia {datos[idx][0]}, {datos[idx][1]} y {datos[idx][2]} en una pila (Push) en ese orden exacto. ¿Cuál es el orden en que saldrán de la pila al realizar tres operaciones 'pop' consecutivas?"

explicacion: |
  Al ser una pila (LIFO), el último elemento en entrar ({datos[idx][2]}) es el primero en salir.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas"
  nivel: "intermedio"
  tags: ["listas", "acceso_aleatorio"]

respuesta: "acceso_aleatorio"
tipo: completar
respuestas_validas:
  - "acceso_aleatorio"

enunciado: "A diferencia de una pila o una cola, una lista permite el ___ a cualquier elemento mediante su índice sin necesidad de pasar por los anteriores."

explicacion: |
  Las listas (especialmente los arrays) permiten el acceso aleatorio, mientras que las pilas y colas son estructuras de acceso restringido.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_colas"
  nivel: "basico"
  tags: ["colas", "fifo"]

variables:
  datos: [["clientes en un banco", "true"], ["capas de pintura superpuestas", "false"], ["botones de retroceso", "false"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["true", "false"]

enunciado: "Analiza el siguiente escenario: {datos[idx][0]}. ¿Se comporta este sistema como una cola (FIFO)?"

explicacion: |
  Los clientes en un banco forman una cola real (FIFO): el primero en llegar es el primero en ser atendido. En cambio, las capas de pintura superpuestas y los botones de retroceso se comportan como una pila (LIFO): la última capa aplicada es la primera que se ve o se quita, y el botón de retroceso vuelve primero a la página más reciente visitada.
```

## Sección: poo-clases-y-objetos (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["poo", "clases", "conceptos"]

respuesta: "molde"
tipo: completar
respuestas_validas:
  - "molde"
  - "plantilla"

enunciado: "En la programación orientada a objetos, una clase se define como un ___ para crear objetos."

explicacion: |
  Una clase actúa como un plano o molde que define la estructura (atributos) y el comportamiento (métodos) que tendrán los objetos creados a partir de ella.
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["poo", "atributos", "metodos"]

opciones_explicitas: ["Estado (datos)", "Acciones (comportamiento)", "Ambas anteriores"]
respuesta: "Estado (datos)"
tipo: mc

enunciado: "Un objeto se compone de atributos que representan su estado y métodos que representan su comportamiento. ¿Qué representan los atributos?"

explicacion: |
  Los atributos son variables que almacenan el estado o las características de un objeto, mientras que los métodos son funciones que definen lo que el objeto puede hacer.
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["poo", "objetos", "instancia"]

respuesta: verdadero
tipo: vf

enunciado: "El proceso de crear un objeto a partir de una clase se denomina instanciación."

explicacion: |
  Correcto. El objeto resultante de este proceso es una 'instancia' de la clase.
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "intermedio"
  tags: ["poo", "clases", "objetos"]

respuesta: "Fido es una instancia concreta de la clase Perro"
tipo: mc
opciones_explicitas: ["Fido es una instancia concreta de la clase Perro", "Perro es una instancia de Fido", "Fido y Perro son la misma cosa", "Ninguna clase puede tener objetos"]

enunciado: "Si tenemos la clase 'Perro' y un objeto llamado 'Fido' creado a partir de ella, ¿cuál de las siguientes afirmaciones es correcta?"

explicacion: |
  La clase es la definición abstracta (Perro), mientras que el objeto es la realización concreta con datos específicos (Fido).
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["poo", "ordenar", "proceso"]

opciones_explicitas: ["Definir la clase", "Declarar la variable", "Instanciar el objeto"]
respuesta_orden: ["Definir la clase", "Declarar la variable", "Instanciar el objeto"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para tener un objeto listo para usar en memoria:"

explicacion: |
  Primero se debe diseñar el plano (clase), luego reservar el nombre de la variable y finalmente ejecutar el constructor para crear la instancia en memoria.
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["conceptos", "clases", "objetos"]

respuesta: "clase"
tipo: "mc"
opciones_explicitas: ["objeto", "clase", "atributo", "metodo"]

enunciado: "En programación orientada a objetos, si imaginamos que un 'Plano de una Casa' es el diseño general, el plano en sí mismo es la ___."

explicacion: |
  La clase actúa como un molde o plano que define las características y comportamientos, mientras que el objeto es la instancia concreta creada a partir de ese molde.
```

```
metadata:
  materia: "informatica"
  tema: "poo_atributos"
  nivel: "basico"
  tags: ["atributos", "estado"]

variables:
  escenario: uno_de([["color", "marca", "modelo"], ["modelo", "color", "marca"], ["marca", "modelo", "color"]])

respuesta: escenario[0]
tipo: "completar"
respuestas_validas:
  - "color"
  - "marca"
  - "modelo"

enunciado: "Si definimos una clase 'Auto' con las propiedades 'color', 'marca' y 'modelo', estas propiedades se conocen como ___."

explicacion: |
  Los atributos representan el estado o las características de un objeto (en este caso, las propiedades del auto).
```

```
metadata:
  materia: "informatica"
  tema: "poo_metodos"
  nivel: "basico"
  tags: ["metodos", "comportamiento"]

respuesta: verdadero
tipo: "vf"

enunciado: "En una clase llamada 'Perro', una función llamada 'ladrar()' que define una acción que el objeto puede realizar es un método."

explicacion: |
  Los métodos son las funciones definidas dentro de una clase que representan las acciones o comportamientos de los objetos.
```

```
metadata:
  materia: "informatica"
  tema: "poo_instanciacion"
  nivel: "intermedio"
  tags: ["instanciacion", "orden"]

respuesta_orden: ["Definir la clase", "Instanciar el objeto", "Acceder a sus atributos"]
tipo: "ordenar"
opciones_explicitas: ["Acceder a sus atributos", "Instanciar el objeto", "Definir la clase"]

enunciado: "Ordena los pasos lógicos para utilizar un objeto en un programa:"

explicacion: |
  Primero debes tener el molde (clase), luego creas la instancia (objeto) y finalmente puedes interactuar con su información o acciones.
```

```
metadata:
  materia: "informatica"
  tema: "poo_calculo_metodos"
  nivel: "intermedio"
  tags: ["metodos", "calculo"]

variables:
  datos: uno_de([[5.0, 10.0, 50.0], [3.0, 4.0, 12.0], [2.0, 6.0, 12.0]])

respuesta: datos[2]
tipo: completar
tolerancia_abs: 0

enunciado: "Tenemos una clase 'Rectangulo' con los atributos 'base' y 'altura'. Si un objeto de esta clase tiene base = {datos[0]} y altura = {datos[1]}, ¿cuál es el valor resultante del método 'calcular_area()'?"

pasos:
  - "Identificar los valores de base y altura."
  - "Aplicar la fórmula: base * altura."

explicacion: |
  El método calcula el área multiplicando los atributos internos del objeto: 5.0 * 10.0 = 50.0.
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["conceptos_fundamentales", "confusiones_comunes"]

respuesta: "molde"
tipo: mc
opciones_explicitas: ["instancia", "molde", "atributo", "metodo"]

enunciado: "En el paradigma de Programación Orientada a Objetos, si comparamos la creación de un objeto con la construcción de una casa, la Clase actúa como el _________."

explicacion: |
  Una clase es un plano o molde que define la estructura y el comportamiento, mientras que el objeto es la instancia real construida a partir de ese molde.
```

```
metadata:
  materia: "informatica"
  tema: "poo_atributos"
  nivel: "intermedio"
  tags: ["memoria", "alcance"]

respuesta: "Atributo de clase"
tipo: mc
opciones_explicitas: ["Atributo de instancia", "Atributo de clase"]

enunciado: "Si definimos una variable dentro de una clase pero fuera de cualquier método, y dicha variable es compartida por todos los objetos de esa clase, estamos ante un: ___."

explicacion: |
  Los atributos de clase pertenecen a la clase misma y se comparten entre todas las instancias, mientras que los de instancia son únicos para cada objeto.
```

```
metadata:
  materia: "informatica"
  tema: "poo_constructores"
  nivel: "intermedio"
  tags: ["errores_comunes", "inicializacion"]

respuesta: "constructor"
tipo: completar
respuestas_validas:
  - "constructor"
  - "init"
  - "inicializador"

enunciado: "Un error común al programar POO es olvidar definir el método _________ (o constructor), lo que impide que los atributos de un objeto se inicialicen correctamente al momento de su creación."

explicacion: |
  El constructor es el método especial que se ejecuta automáticamente al instanciar un objeto, permitiendo establecer su estado inicial.
```

```
metadata:
  materia: "informatica"
  tema: "poo_metodos"
  nivel: "basico"
  tags: ["comportamiento"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que un método es una característica que define las propiedades (datos) de un objeto?"

explicacion: |
  Falso. Los atributos definen las propiedades (datos/estado), mientras que los métodos definen el comportamiento (acciones).
```

```
metadata:
  materia: "informatica"
  tema: "poo_instanciacion"
  nivel: "intermedio"
  tags: ["flujo_ejecucion"]

respuesta_orden: ["Definir clase", "Instanciar objeto", "Acceder a atributos/métodos"]
tipo: ordenar
opciones_explicitas: ["Definir clase", "Instanciar objeto", "Acceder a atributos/métodos"]

enunciado: "Ordena los pasos lógicos para poder utilizar una propiedad de un objeto en un programa:"

explicacion: |
  Primero se debe diseñar el plano (clase), luego crear el objeto en memoria (instanciar) y finalmente interactuar con él (acceder).
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["poo", "conceptos_fundamentales"]

respuesta: "molde"
tipo: completar
respuestas_validas:
  - "molde"
  - "plantilla"
  - "definicion"

enunciado: "Si comparamos la relación entre un plano de construcción y una casa real, la clase actúa como el plano, mientras que el objeto es la ___."

explicacion: |
  La clase es la definición abstracta (el molde) que describe las propiedades y comportamientos, mientras que el objeto es la instancia concreta creada a partir de esa clase.
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["poo", "atributos", "metodos"]

respuesta: "estado"
tipo: mc
opciones_explicitas: ["estado", "comportamiento"]

enunciado: "En el paradigma de POO, la principal distinción es que los atributos representan el ___, mientras que los métodos representan el comportamiento."

pasos:
  - "Identificar qué elemento define las características (datos)."
  - "Identificar qué elemento define las acciones (funciones)."

explicacion: |
  Los atributos almacenan el estado o las propiedades de un objeto (datos), mientras que los métodos definen las acciones que el objeto puede realizar (comportamiento).
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "intermedio"
  tags: ["poo", "instanciacion"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es posible que dos objetos distintos, creados a partir de la misma clase, tengan valores diferentes en sus atributos?"

explicacion: |
  Verdadero. Aunque comparten la misma estructura definida por la clase, cada instancia (objeto) posee su propio espacio en memoria para sus atributos, permitiendo que cada objeto tenga su propio estado.
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "intermedio"
  tags: ["poo", "ciclo_de_vida"]

respuesta_orden: ["Definición de clase", "Instanciación de objeto", "Llamada a método"]
tipo: ordenar
opciones_explicitas: ["Definición de clase", "Instanciación de objeto", "Llamada a método"]

enunciado: "Ordene los pasos lógicos para que un objeto pueda interactuar con su entorno:"

explicacion: |
  Primero se debe definir la estructura (Clase), luego se crea la instancia en memoria (Instanciación) y finalmente se ejecutan sus acciones (Métodos).
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "avanzado"
  tags: ["poo", "abstraccion"]

variables:
  caso: uno_de([0, 1])

respuesta: "abstracción"
tipo: mc
opciones_explicitas: ["abstracción", "implementación", "encapsulamiento"]

enunciado: "El proceso de ocultar los detalles complejos de cómo funciona un método y mostrar solo la interfaz necesaria para el usuario se conoce como ___."

explicacion: |
  La abstracción permite al programador centrarse en 'qué' hace un objeto en lugar de 'cómo' lo hace internamente, simplificando la interacción con sistemas complejos.
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["poo", "clases", "atributos"]

variables:
  datos: [["Vehiculo", "color", "marca"], ["Persona", "nombre", "edad"], ["Libro", "titulo", "autor"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si definimos una clase llamada {datos[idx][0]}, uno de sus atributos (propiedades) es {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["color", "nombre", "titulo", "no_aplica"]

explicacion: |
  Un atributo representa una característica o propiedad de un objeto de la clase. En el caso de {datos[idx][0]}, {datos[idx][1]} es una de sus propiedades fundamentales.
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "intermedio"
  tags: ["poo", "metodos", "comportamiento"]

variables:
  accion: uno_de([["acelerar", "aumentar_velocidad"], ["saludar", "decir_hola"], ["abrir", "cambiar_estado"]])

enunciado: "En la programación orientada a objetos, los métodos representan el comportamiento de un objeto. Si tenemos un método llamado '{accion[0]}', su propósito funcional es {accion[1]}."

respuesta: accion[1]
tipo: completar
respuestas_validas:
  - "aumentar_velocidad"
  - "decir_hola"
  - "cambiar_estado"

explicacion: |
  Los métodos son funciones definidas dentro de una clase que operan sobre los atributos del objeto o realizan acciones específicas.
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["poo", "objetos", "instancia"]

enunciado: "Si la clase es 'Perro', un objeto creado a partir de ella (una instancia) sería un perro real con nombre y edad específicos."

respuesta: verdadero
tipo: vf

explicacion: |
  Un objeto es una instancia concreta de una clase. Mientras la clase es el molde, el objeto es la entidad con datos reales.
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "intermedio"
  tags: ["poo", "estructura", "clases"]

enunciado: "Para implementar correctamente una clase con atributos y métodos, ¿cuál es el orden lógico de definición en la estructura de la clase?"

respuesta_orden: ["Definir atributos", "Definir métodos", "Instanciar objeto"]
tipo: ordenar
opciones_explicitas: ["Definir atributos", "Definir métodos", "Instanciar objeto"]

explicacion: |
  Primero se definen las propiedades (atributos), luego las acciones que puede realizar (métodos) y finalmente se crean los objetos (instancias) que usarán esa estructura.
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "avanzado"
  tags: ["poo", "objetos", "identidad"]

variables:
  caso: uno_de([["perro1", "perro2"], ["auto1", "auto2"], ["usuario1", "usuario2"]])

enunciado: "Si creamos dos objetos distintos, {caso[0]} y {caso[1]}, a partir de la misma clase, aunque tengan los mismos atributos, ¿son objetos idénticos en memoria?"

respuesta: falso
tipo: vf

explicacion: |
  Aunque dos objetos tengan los mismos valores en sus atributos, cada instancia ocupa un lugar distinto en la memoria y tiene una identidad única.
```

## Sección: algoritmos-busqueda-ordenamiento (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda_ordenamiento"
  nivel: "basico"
  tags: ["busqueda", "lineal"]

tipo: mc
opciones_explicitas: ["Compara elemento por elemento", "Divide la lista a la mitad", "Ordena de mayor a menor", "Busca solo en listas ordenadas"]
respuesta: "Compara elemento por elemento"

enunciado: "El algoritmo de búsqueda lineal funciona de la siguiente manera:"

explicacion: |
  La búsqueda lineal recorre cada elemento de la lista secuencialmente hasta encontrar el objetivo o terminar la lista.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda_ordenamiento"
  nivel: "basico"
  tags: ["busqueda", "binaria"]

tipo: completar

enunciado: "Para que un algoritmo de búsqueda binaria sea efectivo, la lista de datos debe estar previamente ___."

respuesta: "ordenada"

explicacion: |
  La búsqueda binaria utiliza la propiedad de orden para descartar la mitad de los elementos en cada paso. Sin orden, no se puede determinar qué mitad descartar.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda_ordenamiento"
  nivel: "intermedio"
  tags: ["complejidad", "busqueda"]

variables:
  datos: [["10, 20, 30, 40, 50", "50"], ["5, 15, 25, 35", "5"]]
  escenario_idx: uno_de([0, 1])

tipo: mc
respuesta: "O(n)"
opciones_explicitas: ["O(1)", "O(n)", "O(log n)", "O(n^2)"]

enunciado: "En el escenario {datos[escenario_idx][0]}, ¿cuál es la complejidad en el peor de los casos para una búsqueda lineal?"

explicacion: |
  En el peor de los casos, la búsqueda lineal debe revisar todos los elementos 'n', por lo tanto su complejidad es O(n).
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda_ordenamiento"
  nivel: "basico"
  tags: ["ordenamiento", "burbuja"]

tipo: ordenar
opciones_explicitas: ["Comparar elementos adyacentes", "Intercambiar si están desordenados", "Repetir hasta que no haya cambios"]

enunciado: "Ordena los pasos lógicos para completar una pasada del algoritmo de ordenamiento de burbuja (Bubble Sort):"

explicacion: |
  El algoritmo compara pares de elementos contiguos e intercambia sus posiciones si están en el orden incorrecto, repitiendo el proceso hasta que la lista esté lista.
respuesta_orden: ["Comparar elementos adyacentes", "Intercambiar si están desordenados", "Repetir hasta que no haya cambios"]
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda_ordenamiento"
  nivel: "basico"
  tags: ["ordenamiento", "burbuja"]

tipo: vf

enunciado: "El algoritmo de ordenamiento de burbuja tiene una complejidad temporal de O(n^2) en su peor caso."

respuesta: verdadero

explicacion: |
  Es correcto, ya que requiere dos bucles anidados (uno para las pasadas y otro para las comparaciones), resultando en n * n comparaciones en el peor escenario.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "basico"
  tags: ["busqueda", "lineal"]

enunciado: "Se tiene el siguiente array de enteros: [12, 45, 7, 23, 56, 10]. Si aplicamos un algoritmo de búsqueda lineal para encontrar el elemento 23, ¿cuál es el índice (empezando desde 0) donde se encuentra el elemento?"

opciones_explicitas: ["2", "3", "4", "5"]

respuesta: "3"
tipo: mc

explicacion: |
  La búsqueda lineal recorre el array elemento por elemento desde el inicio:
  - Índice 0: 12 (no es 23)
  - Índice 1: 45 (no es 23)
  - Índice 2: 7 (no es 23)
  - Índice 3: 23 (¡Encontrado!)
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "basico"
  tags: ["busqueda", "binaria"]

enunciado: "Para que un algoritmo de búsqueda binaria funcione correctamente sobre un conjunto de datos, es indispensable que los datos estén previamente ___."

respuestas_validas:
  - "ordenados"

respuesta: "ordenados"
tipo: completar

explicacion: |
  La búsqueda binaria funciona dividiendo el espacio de búsqueda a la mitad en cada paso. Para decidir si el objetivo está a la izquierda o a la derecha del punto medio, el conjunto debe estar ordenado.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_ordenamiento"
  nivel: "intermedio"
  tags: ["burbuja", "pasos"]

variables:
  idx: uno_de([0, 1])
  arrays_iniciales: ["[5, 2, 8]", "[3, 1, 4]"]
  resultados: ["[2, 5, 8]", "[1, 3, 4]"]

enunciado: "Considera el array {arrays_iniciales[idx]}. Tras completar la primera pasada completa del algoritmo de ordenamiento burbuja (comparando pares adyacentes de izquierda a derecha), ¿cuál es el estado del array?"

opciones_explicitas: [resultados[idx], "[8, 5, 2]", "[4, 3, 1]", "[2, 8, 5]"]

respuesta: resultados[idx]
tipo: mc

explicacion: |
  En la primera pasada del Bubble Sort, el elemento más grande 'flota' hacia la última posición mediante intercambios sucesivos de pares adyacentes.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "intermedio"
  tags: ["complejidad", "binaria"]

enunciado: "Si buscamos un elemento en un array de 1024 elementos usando búsqueda binaria, ¿cuál es el número máximo de comparaciones que se realizarán en el peor de los casos?"

respuesta: 10
tipo: completar
tolerancia_abs: 0

explicacion: |
  La búsqueda binaria tiene una complejidad de O(log2(n)). 
  Como 2^10 = 1024, el número máximo de divisiones necesarias para reducir el espacio a un solo elemento es 10.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_ordenamiento"
  nivel: "basico"
  tags: ["ordenar", "burbuja"]

enunciado: "Ordena los siguientes pasos que describe el funcionamiento del algoritmo de burbuja para ordenar un array de n elementos:"

opciones_explicitas: ["Comparar elementos adyacentes", "Intercambiar si el primero es mayor que el segundo", "Repetir el proceso hasta que no haya más intercambios"]

respuesta_orden: ["Comparar elementos adyacentes", "Intercambiar si el primero es mayor que el segundo", "Repetir el proceso hasta que no haya más intercambios"]
tipo: ordenar

explicacion: |
  El algoritmo burbuja funciona comparando pares de elementos contiguos y moviendo el mayor hacia la derecha, repitiendo este ciclo hasta que la lista esté totalmente ordenada.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "basico"
  tags: ["busqueda", "binaria"]

tipo: mc
opciones_explicitas: ["El arreglo debe estar desordenado", "El arreglo debe estar ordenado", "El arreglo debe tener un tamaño impar", "No requiere ninguna condición"]

enunciado: "Para que el algoritmo de búsqueda binaria funcione correctamente y garantice encontrar el elemento (si existe), el arreglo de entrada debe estar ___."

respuesta: "El arreglo debe estar ordenado"

explicacion: |
  La búsqueda binaria funciona dividiendo el espacio de búsqueda a la mitad en cada paso. Para decidir si el objetivo está a la izquierda o a la derecha del punto medio, es indispensable que los elementos sigan un orden establecido.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "intermedio"
  tags: ["complejidad", "lineal"]

variables:
  n: 1000

tipo: completar
respuestas_validas:
  - "O(n)"

enunciado: "En el peor de los casos, si tenemos un arreglo de tamaño {n}, la complejidad temporal de una búsqueda lineal es ___."

respuesta: "O(n)"

explicacion: |
  En la búsqueda lineal, en el peor de los casos (cuando el elemento es el último o no está), debemos comparar el elemento buscado con cada uno de los {n} elementos del arreglo.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "intermedio"
  tags: ["errores", "indices"]

tipo: vf

enunciado: "Si un algoritmo de búsqueda binaria utiliza un cálculo de punto medio como `medio = (inicio + fin) / 2` en un lenguaje con desbordamiento de enteros, puede fallar si la suma de `inicio` y `fin` supera el valor máximo permitido para un entero."

respuesta: verdadero

explicacion: |
  Este es un error clásico. Para evitar el desbordamiento (overflow), se recomienda usar `medio = inicio + (fin - inicio) / 2`.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_ordenamiento"
  nivel: "basico"
  tags: ["burbuja", "pasos"]

tipo: ordenar
opciones_explicitas: ["Comparar elementos adyacentes", "Intercambiar si el primero es mayor que el segundo", "Repetir el proceso para todos los elementos", "Terminar cuando no haya más intercambios"]

enunciado: "Ordena los pasos lógicos de una implementación estándar del algoritmo de ordenamiento burbuja (Bubble Sort):"

respuesta_orden: ["Comparar elementos adyacentes", "Intercambiar si el primero es mayor que el segundo", "Repetir el proceso para todos los elementos", "Terminar cuando no haya más intercambios"]

explicacion: |
  El método de burbuja funciona comparando pares de elementos contiguos y moviendo el más grande hacia el final en cada iteración.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "avanzado"
  tags: ["eficiencia", "comparacion"]

tipo: mc
opciones_explicitas: ["log2(n)", "n"]

enunciado: "Si comparamos la eficiencia teórica de una búsqueda binaria frente a una búsqueda lineal, la búsqueda binaria tiene una complejidad de ___ en el peor de los casos."

respuesta: "log2(n)"

explicacion: |
  La búsqueda binaria reduce el espacio de búsqueda a la mitad en cada paso, lo que resulta en una complejidad logarítmica, mucho más eficiente que la lineal para conjuntos de datos grandes.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "basico"
  tags: ["busqueda", "eficiencia"]

respuesta: "binaria"
tipo: mc
opciones_explicitas: ["lineal", "binaria", "exponencial"]

enunciado: "Para que un algoritmo de búsqueda sea más eficiente que la búsqueda lineal, aprovechando la estructura de los datos, el arreglo debe estar previamente ordenado y el algoritmo utilizado sería la búsqueda ___."

explicacion: |
  La búsqueda binaria requiere que el conjunto de datos esté ordenado para poder dividir el espacio de búsqueda a la mitad en cada paso, logrando una complejidad de O(log n), mientras que la lineal siempre recorre uno por uno.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_ordenamiento"
  nivel: "intermedio"
  tags: ["burbuja", "complejidad"]

variables:
  n_elementos: 10

respuesta: 100
tipo: completar
tolerancia_abs: 0

enunciado: "En el peor de los casos, un algoritmo de ordenamiento de burbuja (Bubble Sort) realiza aproximadamente {n_elementos * n_elementos} comparaciones para un arreglo de tamaño {n_elementos}."

pasos:
  - "Identificar que el peor caso ocurre cuando el arreglo está en orden inverso."
  - "Calcular el número de comparaciones como n^2."

explicacion: |
  El algoritmo de burbuja compara pares adyacentes. En el peor de los casos realiza exactamente n*(n-1)/2 comparaciones (45 para n=10), pero esa cifra crece asintóticamente como n^2, por lo que decimos que su complejidad es O(n^2). Usando n^2 como aproximación, para n=10 el valor es 100.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "basico"
  tags: ["busqueda_binaria", "requisitos"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es necesario que un arreglo esté ordenado para aplicar el algoritmo de búsqueda binaria?"

explicacion: |
  La búsqueda binaria funciona dividiendo el rango de búsqueda basándose en la comparación del elemento medio con el objetivo. Si el arreglo no está ordenado, la decisión de ir a la izquierda o a la derecha no es válida.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_ordenamiento"
  nivel: "basico"
  tags: ["burbuja", "pasos"]

opciones_explicitas: ["Comparar elementos adyacentes", "Intercambiar si el primero es mayor", "Repetir hasta que no haya intercambios"]

respuesta_orden: ["Comparar elementos adyacentes", "Intercambiar si el primero es mayor", "Repetir hasta que no haya intercambios"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos fundamentales para la ejecución de una iteración estándar de un algoritmo de burbuja:"

explicacion: |
  El algoritmo recorre la lista comparando parejas de elementos contiguos y los intercambia si están en el orden incorrecto, repitiendo este proceso hasta que el arreglo esté ordenado.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "intermedio"
  tags: ["eficiencia", "comparacion"]

respuesta: "binaria"
tipo: mc
opciones_explicitas: ["lineal", "binaria"]

enunciado: "Si comparamos la eficiencia de búsqueda en un arreglo de un millón de elementos, una de las dos es preferible sobre la otra porque su complejidad es menor. El nombre de la búsqueda más eficiente es ___."

explicacion: |
  La búsqueda binaria tiene una complejidad logarítmica O(log n), lo que significa que para un millón de elementos solo requiere unos 20 pasos, mientras que la lineal podría requerir un millón.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "basico"
  tags: ["busqueda", "lineal"]

variables:
  escenario: [[ [12, 45, 7, 23, 56], 23 ], [ [5, 18, 2, 9, 31], 9 ], [ [10, 40, 20, 50, 30], 40 ]]
  idx: uno_de([0, 1, 2])
  lista: escenario[idx][0]
  objetivo: escenario[idx][1]

respuesta: "lineal"
tipo: mc
opciones_explicitas: ["lineal", "binaria", "exponencial"]

enunciado: "Si queremos encontrar el elemento {objetivo} en la lista {lista} sin saber si está ordenada, ¿qué tipo de búsqueda es la única garantizada para encontrarlo?"

explicacion: |
  En una lista desordenada, la búsqueda binaria no funciona porque requiere que los elementos sigan un orden. Por lo tanto, debemos recorrer la lista elemento por elemento, lo que se conoce como búsqueda lineal.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "basico"
  tags: ["busqueda_binaria", "condicion"]

respuesta: verdadero
tipo: vf

enunciado: "Para aplicar el algoritmo de búsqueda binaria de manera eficiente, la lista de datos debe estar previamente ordenada."

explicacion: |
  La búsqueda binaria funciona dividiendo el rango de búsqueda a la mitad en cada paso. Para decidir si el objetivo está a la izquierda o a la derecha del punto medio, es indispensable que los elementos estén ordenados.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_ordenamiento"
  nivel: "intermedio"
  tags: ["burbuja", "pasos"]

opciones_explicitas: ["Comparar elementos adyacentes", "Intercambiar si el de la izquierda es mayor", "Repetir el proceso para todos los elementos"]

respuesta_orden: ["Comparar elementos adyacentes", "Intercambiar si el de la izquierda es mayor", "Repetir el proceso para todos los elementos"]
tipo: ordenar

enunciado: "Indica el orden lógico de las operaciones básicas que realiza el algoritmo de ordenamiento de burbuja (Bubble Sort) para ordenar una lista de menor a mayor:"

explicacion: |
  El método de burbuja compara parejas de elementos contiguos y los intercambia si están en el orden incorrecto, repitiendo este ciclo hasta que no haya más intercambios necesarios.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "avanzado"
  tags: ["complejidad", "big_o"]

respuesta: "logarítmica"
tipo: completar
respuestas_validas:
  - "logarítmica"
  - "logaritmica"

enunciado: "La complejidad temporal de la búsqueda binaria en el peor de los casos se describe como ___."

explicacion: |
  La búsqueda binaria reduce el espacio de búsqueda a la mitad en cada paso, por lo que en el peor de los casos su complejidad es O(log n), es decir, logarítmica (nunca lineal, ni siquiera en escenarios favorables).
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_ordenamiento"
  nivel: "intermedio"
  tags: ["burbuja", "eficiencia"]

variables:
  datos: [[ 10, 5, 8, 2 ], [ 3, 1, 4, 2 ], [ 7, 9, 6, 5 ]]
  intercambios_primer_par: [1, 1, 0]
  idx: uno_de([0, 1, 2])
  lista: datos[idx]

respuesta: intercambios_primer_par[idx]
tipo: completar
tolerancia_abs: 0

enunciado: "Si aplicamos el algoritmo de burbuja a la lista {lista}, ¿cuántos intercambios se realizan si comparamos solo el primer par de elementos (el primero con el segundo) en la primera pasada?"

pasos:
  - "Comparar el primer elemento con el segundo."
  - "Si el primero es mayor que el segundo, intercambiarlos."
  - "Contar los intercambios realizados."

explicacion: |
  En el algoritmo de burbuja, se comparan elementos adyacentes: si el de la izquierda es mayor que el de la derecha, se intercambian (1 intercambio); si no, no se realiza ninguno (0 intercambios). Para {lista}, comparando solo el primer par, el resultado depende de si ese par está o no en el orden correcto.
```

