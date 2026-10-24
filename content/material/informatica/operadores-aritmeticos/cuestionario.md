# Informática — Operadores aritméticos (cuestionario, 23 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. Tema agregado en `informatica/` (ver `../dependencias.md`).

---
### 1 — Los cinco operadores básicos

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

### 2 — Resto de una división

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

### 3 — Cociente entero

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

### 4 — Precedencia: primero el producto

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

### 5 — Precedencia con paréntesis

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

### 6 — Potencia

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

### 7 — Asignación compuesta

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

### 8 — Una cuenta de la vida real

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

### 9 — Dividir por cero

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

### 10 — División en Python

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

### 11 — División en C

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

### 12 — Par o impar

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

### 13 — Para qué sirve el resto

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

### 14 — Incremento

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

### 15 — Qué hace -=

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

### 16 — El signo = no es una ecuación

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

### 17 — Tipo del resultado

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

### 18 — Mezclar texto y número

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

### 19 — Negativos y módulo

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

### 20 — Promedio exacto

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

### 21 — El error del promedio

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

### 22 — Operador de potencia

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

### 23 — Cuál es el resultado

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

