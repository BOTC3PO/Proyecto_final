### 1 — Operador de división entera en Bash
```yaml
metadata:
  materia: "informatica"
  tema: "operadores-aritmeticos"
  nivel: "basico"
  tags: ["bash", "division-entera"]
enunciado: "En un script de Bash, ¿cuál es el resultado de la expresión $(( 10 / 3 ))?"
respuesta: "3"
tipo: "completar"
respuestas_validas:
  - "3"
pasos:
  - "Identificar que Bash utiliza el operador de división entera / dentro de $(( ))"
  - "Recordar que la división entera descarta la parte decimal"
  - "Calcular 10 dividido 3, que es 3.333..."
  - "Descartar el .333..."
explicacion: "En Bash, el operador / dentro de aritmética de enteros realiza una división entera, truncando el resultado hacia cero. Por lo tanto, 10/3 es 3."
```

### 2 — Operador módulo (residuo) en Python
```yaml
metadata:
  materia: "informatica"
  tema: "operadores-aritmeticos"
  nivel: "basico"
  tags: ["python", "modulo"]
enunciado: "En Python, ¿qué operador se utiliza para obtener el residuo de una división?"
opciones_explicitas:
  - "/"
  - "//"
  - "%"
  - "**"
respuesta: "%"
tipo: "mc"
pasos:
  - "Revisar los operadores aritméticos estándar en Python"
  - "/" realiza división de punto flotante"
  - "//" realiza división entera"
  - "%" realiza el operador módulo (residuo)"
  - "**" realiza potenciación"
explicacion: "El operador % en Python devuelve el residuo de la división entre dos números."
```

### 3 — Incremento en C
```yaml
metadata:
  materia: "informatica"
  tema: "operadores-aritmeticos"
  nivel: "basico"
  tags: ["c", "incremento"]
enunciado: "Si `int x = 5;`, ¿cuál es el valor de `x` después de ejecutar `x += 2;`?"
respuesta: "7"
tipo: "completar"
respuestas_validas:
  - "7"
pasos:
  - "Entender que `+=` es un operador de asignación compuesta"
  - "Sumar 2 al valor actual de x (5)"
  - "5 + 2 = 7"
explicacion: "El operador `+=` suma el operando derecho al operando izquierdo y asigna el resultado. 5 + 2 = 7."
```

### 4 — Potenciación en JavaScript
```yaml
metadata:
  materia: "informatica"
  tema: "operadores-aritmeticos"
  nivel: "basico"
  tags: ["javascript", "potencia"]
enunciado: "En JavaScript, ¿cuál es el resultado de `Math.pow(2, 3)`?"
respuesta: "8"
tipo: "completar"
respuestas_validas:
  - "8"
pasos:
  - "Identificar que `Math.pow(base, exponente)` calcula la potencia"
  - "Calcular 2 elevado a la 3 (2 * 2 * 2)"
  - "El resultado es 8"
explicacion: "La función `Math.pow(2, 3)` eleva 2 a la potencia de 3, resultando en 8."
```

### 5 — Diferencia entre división normal y entera en Python
```yaml
metadata:
  materia: "informatica"
  tema: "operadores-aritmeticos"
  nivel: "basico"
  tags: ["python", "division"]
enunciado: "En Python 3, la expresión `10 / 2` devuelve un número flotante."
respuesta: "verdadero"
tipo: "vf"
pasos:
  - "Recordar que en Python 3, el operador `/` siempre realiza división de punto flotante"
  - "10 dividido 2 es 5.0 (float)"
  - "A diferencia de Python 2, donde era entero"
explicacion: "En Python 3, el operador `/` realiza división de punto flotante, por lo que `10 / 2` resulta en `5.0`."
```

### 6 — Operador de decremento en C++
```yaml
metadata:
  materia: "informatica"
  tema: "operadores-aritmeticos"
  nivel: "basico"
  tags: ["cpp", "decremento"]
enunciado: "Si `int a = 10;`, ¿cuál es el valor de `a` después de `a -= 4;`?"
respuesta: "6"
tipo: "completar"
respuestas_validas:
  - "6"
pasos:
  - "Identificar el operador `-=` como resta y asignación"
  - "Restar 4 de 10"
  - "10 - 4 = 6"
explicacion: "El operador `-=` resta el valor derecho al izquierdo y asigna el resultado. 10 - 4 = 6."
```

### 7 — Raíz cuadrada en Excel
```yaml
metadata:
  materia: "informatica"
  tema: "operadores-aritmeticos"
  nivel: "basico"
  tags: ["excel", "funciones"]
enunciado: "En Excel, ¿qué función se usa para calcular la raíz cuadrada de un número?"
opciones_explicitas:
  - "SQRT()"
  - "ROOT()"
  - "SQUARE()"
  - "POWER()"
respuesta: "SQRT()"
tipo: "mc"
pasos:
  - "Revisar funciones matemáticas comunes en Excel"
  - "SQRT calcula la raíz cuadrada"
  - "POWER calcula potencias generales"
  - "ROOT y SQUARE no son funciones estándar de Excel"
explicacion: "La función `SQRT()` es la función nativa de Excel para calcular raíces cuadradas."
```

### 8 — Operador de módulo en Java
```yaml
metadata:
  materia: "informatica"
  tema: "operadores-aritmeticos"
  nivel: "basico"
  tags: ["java", "modulo"]
enunciado: "En Java, ¿cuál es el resultado de `15 % 4`?"
respuesta: "3"
tipo: "completar"
respuestas_validas:
  - "3"
pasos:
  - "Identificar el operador `%` como módulo (residuo)"
  - "Dividir 15 entre 4: 4 * 3 = 12"
  - "El residuo es 15 - 12 = 3"
explicacion: "El operador `%` devuelve el residuo de la división entera. 15 dividido 4 es 3 con residuo 3."
```

### 9 — Prioridad de operadores en Bash
```yaml
metadata:
  materia: "informatica"
  tema: "operadores-aritmeticos"
  nivel: "basico"
  tags: ["bash", "precedencia"]
enunciado: "En Bash, `echo $(( 2 + 3 * 4 ))` imprime 20."
respuesta: "falso"
tipo: "vf"
pasos:
  - "Recordar la precedencia de operadores: multiplicación antes que suma"
  - "Evaluar `3 * 4` primero, que es 12"
  - "Luego sumar 2: `2 + 12 = 14`"
  - "El resultado es 14, no 20"
explicacion: "La multiplicación tiene mayor precedencia que la suma. El resultado correcto es 14."
```

### 10 — Operador de desplazamiento a la izquierda en C
```yaml
metadata:
  materia: "informatica"
  tema: "operadores-aritmeticos"
  nivel: "basico"
  tags: ["c", "bitwise"]
enunciado: "Si `int x = 1;`, ¿cuál es el valor de `x << 2`?"
respuesta: "4"
tipo: "completar"
respuestas_validas:
  - "4"
pasos:
  - "Identificar `<<` como desplazamiento a la izquierda"
  - "Desplazar los bits de 1 (0001) dos posiciones a la izquierda"
  - "Resultado binario: 0100, que es 4 en decimal"
explicacion: "El desplazamiento a la izquierda `<< n` equivale a multiplicar por 2^n. 1 * 2^2 = 4."
```

### 11 — División entera en Python
```yaml
metadata:
  materia: "informatica"
  tema: "operadores-aritmeticos"
  nivel: "basico"
  tags: ["python", "division-entera"]
enunciado: "En Python, ¿cuál es el resultado de `10 // 3`?"
respuesta: "3"
tipo: "completar"
respuestas_validas:
  - "3"
pasos:
  - "Identificar `//` como operador de división entera en Python"
  - "Dividir 10 entre 3: 3.333..."
  - "Truncar hacia menos infinito: 3"
explicacion: "El operador `//` realiza división entera, truncando el resultado decimal."
```

### 12 — Operador de potencia en Python
```yaml
metadata:
  materia: "informatica"
  tema: "operadores-aritmeticos"
  nivel: "basico"
  tags: ["python", "potencia"]
enunciado: "En Python, el operador `**` se utiliza para la potenciación."
respuesta: "verdadero"
tipo: "vf"
pasos:
  - "Recordar los operadores aritméticos en Python"
  - "`+`, `-`, `*`, `/` son suma, resta, multiplicación, división"
  - "`**` es el operador de exponenciación/potencia"
explicacion: "En Python, `**` es el operador dedicado a calcular potencias."
```

### 13 — Operador de negación aritmética en C
```yaml
metadata:
  materia: "informatica"
  tema: "operadores-aritmeticos"
  nivel: "basico"
  tags: ["c", "negacion"]
enunciado: "Si `int x = 5;`, ¿cuál es el valor de `-x`?"
respuesta: "-5"
tipo: "completar"
respuestas_validas:
  - "-5"
pasos:
  - "Identificar el operador unario `-` como negación"
  - "Cambiar el signo de 5"
  - "El resultado es -5"
explicacion: "El operador unario `-` invierte el signo del operando."
```

### 14 — Operador de incremento postfijo en C
```yaml
metadata:
  materia: "informatica"
  tema: "operadores-aritmeticos"
  nivel: "basico"
  tags: ["c", "incremento"]
enunciado: "Si `int a = 5; int b = a++;`, ¿cuál es el valor de `b`?"
respuesta: "5"
tipo: "completar"
respuestas_validas:
  - "5"
pasos:
  - "Entender que `a++` es incremento postfijo"
  - "El valor de `a` se asigna a `b` ANTES de incrementar `a`"
  - "Por tanto, `b` recibe 5"
  - "`a` se convierte en 6 después"
explicacion: "El operador postfijo `++` usa el valor actual antes de incrementarlo. `b` obtiene el valor original de `a`."
```

### 15 — Operador de incremento prefijo en C
```yaml
metadata:
  materia: "informatica"
  tema: "operadores-aritmeticos"
  nivel: "basico"
  tags: ["c", "incremento"]
enunciado: "Si `int a = 5; int b = ++a;`, ¿cuál es el valor de `b`?"
respuesta: "6"
tipo: "completar"
respuestas_validas:
  - "6"
pasos:
  - "Entender que `++a` es incremento prefijo"
  - "El valor de `a` se incrementa PRIMERO"
  - "5 + 1 = 6"
  - "Luego se asigna a `b`"
explicacion: "El operador prefijo `++` incrementa el valor antes de usarlo. `b` obtiene 6."
```

### 16 — Operador de módulo en JavaScript
```yaml
metadata:
  materia: "informatica"
  tema: "operadores-aritmeticos"
  nivel: "basico"
  tags: ["javascript", "modulo"]
enunciado: "En JavaScript, ¿cuál es el resultado de `17 % 5`?"
respuesta: "2"
tipo: "completar"
respuestas_validas:
  - "2"
pasos:
  - "Identificar `%` como operador de residuo en JS"
  - "Dividir 17 entre 5: 3 * 5 = 15"
  - "Residuo: 17 - 15 = 2"
explicacion: "El operador `%` devuelve el residuo de la división. 17 dividido 5 tiene residuo 2."
```

### 17 — Operador de asignación múltiple en Python
```yaml
metadata:
  materia: "informatica"
  tema: "operadores-aritmeticos"
  nivel: "basico"
  tags: ["python", "asignacion"]
enunciado: "En Python, la expresión `a = b = c = 10` asigna el valor 10 a las tres variables."
respuesta: "verdadero"
tipo: "vf"
pasos:
  - "Recordar la sintaxis de asignación encadenada en Python"
  - "Python permite `a = b = c = valor`"
  - "Todas las variables apuntan al mismo objeto entero 10"
explicacion: "Python soporta la asignación encadenada, asignando el mismo valor a múltiples variables."
```

### 18 — Operador de suma compuesta en JavaScript
```yaml
metadata:
  materia: "informatica"
  tema: "operadores-aritmeticos"
  nivel: "basico"
  tags: ["javascript", "suma"]
enunciado: "Si `let x = 5;`, ¿cuál es el valor de `x` después de `x += 3;`?"
respuesta: "8"
tipo: "completar"
respuestas_validas:
  - "8"
pasos:
  - "Identificar `+=` como operador de suma y asignación"
  - "Sumar 3 a 5"
  - "5 + 3 = 8"
explicacion: "El operador `+=` suma el operando derecho al izquierdo y asigna el resultado."
```

### 19 — Operador de resta compuesta en Bash
```yaml
metadata:
  materia: "informatica"
  tema: "operadores-aritmeticos"
  nivel: "basico"
  tags: ["bash", "resta"]
enunciado: "En Bash, `echo $(( 20 -= 5 ))` imprime 15."
respuesta: "falso"
tipo: "vf"
pasos:
  - "Recordar que Bash no soporta operadores de asignación compuesta dentro de `$(( ))` directamente como expresión de valor"
  - "El operador `-=` es de asignación, no de evaluación pura en este contexto"
  - "La sintaxis correcta para resta es `$(( 20 - 5 ))`"
  - "Usar `-=` dentro de `$(( ))` genera un error de sintaxis"
explicacion: "Dentro de `$(( ))`, se usan operadores aritméticos (`-`), no de asignación (`-=`). El código es inválido."
```

### 20 — Operador de multiplicación en Python
```yaml
metadata:
  materia: "informatica"
  tema: "operadores-aritmeticos"
  nivel: "basico"
  tags: ["python", "multiplicacion"]
enunciado: "En Python, el operador `*` se utiliza para la multiplicación."
respuesta: "verdadero"
tipo: "vf"
pasos:
  - "Recordar los operadores aritméticos básicos"
  - "`*` es el operador estándar de multiplicación en Python"
explicacion: "El operador `*` realiza la multiplicación en Python."
```

### 21 — Operador de división en C
```yaml
metadata:
  materia: "informatica"
  tema: "operadores-aritmeticos"
  nivel: "basico"
  tags: ["c", "division"]
enunciado: "Si `int a = 10; int b = 3;`, ¿cuál es el resultado de `a / b` en C?"
respuesta: "3"
tipo: "completar"
respuestas_validas:
  - "3"
pasos:
  - "Identificar que ambos operandos son `int`"
  - "En C, la división entre enteros resulta en entero"
  - "10 / 3 = 3.333... truncado a 3"
explicacion: "En C, la división entre dos enteros realiza una división entera, truncando el resultado."
```

### 22 — Operador de potencia en JavaScript
```yaml
metadata:
  materia: "informatica"
  tema: "operadores-aritmeticos"
  nivel: "basico"
  tags: ["javascript", "potencia"]
enunciado: "En JavaScript, ¿cuál es el resultado de `2 ** 3`?"
respuesta: "8"
tipo: "completar"
respuestas_validas:
  - "8"
pasos:
  - "Identificar `**` como operador de exponenciación en JS (ES7)"
  - "Calcular 2 elevado a la 3"
  - "2 * 2 * 2 = 8"
explicacion: "El operador `**` calcula la potencia en JavaScript. 2^3 = 8."
```

### 23 — Operador de módulo en Bash
```yaml
metadata:
  materia: "informatica"
  tema: "operadores-aritmeticos"
  nivel: "basico"
  tags: ["bash", "modulo"]
enunciado: "En Bash, `echo $(( 10 % 3 ))` imprime 1."
respuesta: "verdadero"
tipo: "vf"
pasos:
  - "Identificar `%` como operador de módulo en Bash"
  - "Calcular 10 mod 3"
  - "10 dividido 3 es 3 con residuo 1"
explicacion: "El operador `%` devuelve el residuo. 10 % 3 = 1."
```

### 24 — Operador de decremento en JavaScript
```yaml
metadata:
  materia: "informatica"
  tema: "operadores-aritmeticos"
  nivel: "basico"
  tags: ["javascript", "decremento"]
enunciado: "Si `let x = 10;`, ¿cuál es el valor de `x` después de `x -= 2;`?"
respuesta: "8"
tipo: "completar"
respuestas_validas:
  - "8"
pasos:
  - "Identificar `-=` como operador de resta y asignación"
  - "Restar 2 de 10"
  - "10 - 2 = 8"
explicacion: "El operador `-=` resta el operando derecho al izquierdo y asigna el resultado."
```

### 25 — Operador de división entera en C++
```yaml
metadata:
  materia: "informatica"
  tema: "operadores-aritmeticos"
  nivel: "basico"
  tags: ["cpp", "division-entera"]
enunciado: "En C++, `int resultado = 7 / 2;` asigna 3 a `resultado`."
respuesta: "verdadero"
tipo: "vf"
pasos:
  - "Identificar que ambos operandos son enteros"
  - "En C++, la división entre enteros es entera"
  - "7 / 2 = 3.5, truncado a 3"
explicacion: "En C++, la división entre dos enteros realiza una división entera, truncando el resultado decimal."
```