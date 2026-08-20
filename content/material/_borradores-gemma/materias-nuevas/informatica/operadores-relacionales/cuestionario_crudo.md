### 1 — Sintaxis de igualdad en Bash
```
metadata:
  materia: "informatica"
  tema: "operadores-relacionales"
  nivel: "basico"
  tags: ["bash", "igualdad", "completar"]
respuesta: "=="
tipo: completar
enunciado: "En un script de Bash, para verificar si la variable `$a` es estrictamente igual a la variable `$b` dentro de una condición `if`, se utiliza el operador: `if [ $a ___ $b ]; then`"
pasos:
  - "Identificar el contexto: scripting en Bash (sintaxis de corchetes `[ ]`)."
  - "Recordar que el operador de igualdad aritmética/estringual en este contexto es doble signo igual."
  - "Completar el hueco con el operador correcto."
explicacion: "En la sintaxis básica de Bash (`[ ]`), el operador para igualdad es `==`. El operador `=` también funciona en algunos shells modernos, pero `==` es el estándar más claro y ampliamente aceptado para igualdad en expresiones de prueba. El operador `=` simple en `test` a veces se comporta diferente o es menos portable que `==` en contextos de igualdad de strings."
```

### 2 — Diferencia entre asignación y comparación en Python
```
metadata:
  materia: "informatica"
  tema: "operadores-relacionales"
  nivel: "basico"
  tags: ["python", "igualdad", "vf"]
respuesta: falso
tipo: vf
enunciado: "En Python, el operador `=` se utiliza para comparar si dos valores son iguales dentro de una condición `if`."
pasos:
  - "Analizar la función del operador `=` en Python."
  - "Recordar que `=` es el operador de asignación."
  - "Identificar que el operador de comparación es `==`."
explicacion: "En Python, `=` es el operador de asignación (asigna un valor a una variable). Para comparar igualdad, se debe usar `==`. Usar `=` en una condición `if` resulta en un error de sintaxis (`SyntaxError`). Por lo tanto, la afirmación es falsa."
```

### 3 — Operador de desigualdad en C
```
metadata:
  materia: "informatica"
  tema: "operadores-relacionales"
  nivel: "basico"
  tags: ["c", "desigualdad", "completar"]
respuesta: "!="
tipo: completar
enunciado: "En el lenguaje C, para verificar que el entero `x` no sea igual a cero, se escribe la condición: `if (x ___ 0)`"
pasos:
  - "Reconocer el lenguaje: C."
  - "Identificar la necesidad de un operador de desigualdad."
  - "El operador estándar de desigualdad en C es `!=`."
explicacion: "En C, `!=` es el operador relacional que verifica si dos operandos son desiguales. `<>` no es válido en C (se usa en Pascal o SQL), y `~=` no existe."
```

### 4 — Menor que estricto en JavaScript
```
metadata:
  materia: "informatica"
  tema: "operadores-relacionales"
  nivel: "basico"
  tags: ["javascript", "menor", "mc"]
opciones_explicitas:
  - "<"
  - "<<"
  - "<>"
  - "<="
respuesta: "<"
tipo: mc
enunciado: "¿Cuál es el operador correcto en JavaScript para verificar si una variable `edad` es estrictamente menor que 18?"
pasos:
  - "Analizar las opciones proporcionadas."
  - "Descartar `<<` (desplazamiento de bits)."
  - "Descartar `<>` (no estándar en JS)."
  - "Descartar `<=` (menor o igual, no estricto)."
  - "Seleccionar `<`."
explicacion: "El operador `<` verifica si el operando de la izquierda es estrictamente menor que el de la derecha. `<=` incluiría el valor 18, lo cual no cumple con 'estrictamente menor'."
```

### 5 — Mayor o igual en SQL
```
metadata:
  materia: "informatica"
  tema: "operadores-relacionales"
  nivel: "basico"
  tags: ["sql", "mayor-igual", "completar"]
respuesta: ">="
tipo: completar
enunciado: "En una consulta SQL para seleccionar empleados con un salario mayor o igual a 5000, la cláusula WHERE correcta es: `WHERE salario ___ 5000`"
pasos:
  - "Identificar el lenguaje: SQL."
  - "Determinar el operador para 'mayor o igual'."
  - "El símbolo es `>=`."
explicacion: "SQL utiliza `>=` para la relación 'mayor o igual que'. No existe un operador especial separado para esta relación en SQL estándar."
```

### 6 — Verificación de identidad en Java
```
metadata:
  materia: "informatica"
  tema: "operadores-relacionales"
  nivel: "basico"
  tags: ["java", "identidad", "vf"]
respuesta: verdadero
tipo: vf
enunciado: "En Java, el operador `==` compara la identidad de referencia (si apuntan al mismo objeto) para tipos de referencia, no el contenido."
pasos:
  - "Analizar el comportamiento de `==` en Java."
  - "Distinguir entre tipos primitivos y de referencia."
  - "Confirmar que para objetos, `==` verifica si son el mismo objeto en memoria."
explicacion: "En Java, para tipos de referencia (objetos), `==` verifica si ambas variables apuntan a la misma dirección de memoria (misma instancia). Para comparar el contenido de los objetos, se debe usar el método `.equals()`. Por lo tanto, la afirmación es verdadera."
```

### 7 — Operador de desigualdad en Excel
```
metadata:
  materia: "informatica"
  tema: "operadores-relacionales"
  nivel: "basico"
  tags: ["excel", "desigualdad", "completar"]
respuesta: "<>"
tipo: completar
enunciado: "En una fórmula de Excel para contar celdas que no son iguales al valor 100, se utiliza el operador de desigualdad: `=CONTAR.SI(A1:A10 ___ 100)`"
pasos:
  - "Identificar el entorno: Microsoft Excel."
  - "Recordar la sintaxis de operadores en fórmulas de Excel."
  - "El operador de 'no igual' en Excel es `<>`."
explicacion: "En las fórmulas de Excel, el operador para 'no igual a' es `<>`. Es un estándar heredado de lenguajes como BASIC y SQL, pero distinto de C/Python/Java."
```

### 8 — Comparación de strings en Bash (igualdad)
```
metadata:
  materia: "informatica"
  tema: "operadores-relacionales"
  nivel: "basico"
  tags: ["bash", "strings", "mc"]
opciones_explicitas:
  - "="
  - "=="
  - "eq"
  - "equal"
respuesta: "=="
tipo: mc
enunciado: "En la sintaxis moderna de Bash (`[[ ]]`), ¿cuál es el operador preferido y más seguro para verificar la igualdad de strings?"
pasos:
  - "Analizar la sintaxis `[[ ]]`."
  - "Evaluar `=`: funciona pero puede ser confuso en otros contextos."
  - "Evaluar `eq`: es para números en `[ ]`."
  - "Evaluar `equal`: no existe."
  - "Seleccionar `==` como el estándar claro para igualdad de strings en `[[ ]]`."
explicacion: "En `[[ ]]`, `==` es el operador de igualdad de strings. Aunque `=` también funciona, `==` es más explícito y evita ambigüedades. `eq` es exclusivo para pruebas aritméticas en `[ ]`."
```

### 9 — Menor o igual en C++
```
metadata:
  materia: "informatica"
  tema: "operadores-relacionales"
  nivel: "basico"
  tags: ["cpp", "menor-igual", "completar"]
respuesta: "<="
tipo: completar
enunciado: "En C++, para verificar que el contador `i` no exceda el límite `max`, se escribe: `if (i ___ max)`"
pasos:
  - "Identificar el lenguaje: C++."
  - "Determinar el operador para 'menor o igual'."
  - "El operador es `<=`."
explicacion: "C++ hereda los operadores relacionales de C. `<=` significa 'menor o igual que'. `=<` es un error de sintaxis común pero inválido."
```

### 10 — Operador de desigualdad en Python
```
metadata:
  materia: "informatica"
  tema: "operadores-relacionales"
  nivel: "basico"
  tags: ["python", "desigualdad", "vf"]
respuesta: verdadero
tipo: vf
enunciado: "En Python, el operador `!=` verifica si dos valores son desiguales."
pasos:
  - "Analizar la función del operador `!=` en Python."
  - "Confirmar que devuelve `True` si los operandos no son iguales."
  - "Confirmar que devuelve `False` si son iguales."
explicacion: "El operador `!=` es el operador de desigualdad en Python. Es el complemento lógico de `==`. La afirmación es correcta."
```

### 11 — Mayor que estricto en JavaScript
```
metadata:
  materia: "informatica"
  tema: "operadores-relacionales"
  nivel: "basico"
  tags: ["javascript", "mayor", "completar"]
respuesta: ">"
tipo: completar
enunciado: "En JavaScript, para verificar si el `puntuacion` es estrictamente mayor que 90, se usa: `if (puntuacion ___ 90)`"
pasos:
  - "Identificar el lenguaje: JavaScript."
  - "Determinar el operador para 'mayor que'."
  - "El operador es `>`."
explicacion: "El operador `>` verifica si el operando izquierdo es estrictamente mayor que el derecho. `>=` incluiría el valor 90."
```

### 12 — Igualdad estricta en JavaScript
```
metadata:
  materia: "informatica"
  tema: "operadores-relacionales"
  nivel: "basico"
  tags: ["javascript", "igualdad-estricta", "vf"]
respuesta: verdadero
tipo: vf
enunciado: "En JavaScript, el operador `===` verifica igualdad de valor Y tipo, sin realizar coerción de tipos."
pasos:
  - "Analizar la diferencia entre `==` y `===` en JS."
  - "Recordar que `==` hace coerción de tipos."
  - "Confirmar que `===` no hace coerción y requiere mismo tipo."
explicacion: "El operador `===` (igualdad estricta) verifica tanto el valor como el tipo del operando. Por ejemplo, `0 === '0'` es `false` porque un número no es una cadena. Esto lo hace preferible en la mayoría de los casos para evitar errores de coerción."
```

### 13 — Operador de desigualdad en SQL
```
metadata:
  materia: "informatica"
  tema: "operadores-relacionales"
  nivel: "basico"
  tags: ["sql", "desigualdad", "completar"]
respuesta: "!="
tipo: completar
enunciado: "Aunque `<>` es el estándar ANSI, muchos sistemas de bases de datos también aceptan el operador de desigualdad: `WHERE status ___ 'active'`"
pasos:
  - "Identificar que SQL acepta múltiples sintaxis para desigualdad."
  - "Recordar que `<>` es el estándar, pero `!=` es ampliamente soportado."
  - "Completar con `!=`."
explicacion: "SQL estándar usa `<>` para 'no igual'. Sin embargo, la mayoría de los RDBMS (MySQL, PostgreSQL, SQL Server) también soportan `!=` por compatibilidad con otros lenguajes. Ambas son válidas en la práctica, pero `!=` es la variante solicitada aquí como alternativa común."
```

### 14 — Menor que en C
```
metadata:
  materia: "informatica"
  tema: "operadores-relacionales"
  nivel: "basico"
  tags: ["c", "menor", "mc"]
opciones_explicitas:
  - "<"
  - "<"
  - "<<"
  - "<<"
respuesta: "<"
tipo: mc
enunciado: "En C, ¿cuál es el operador para 'menor que'?"
pasos:
  - "Analizar las opciones."
  - "Descartar `<<` (desplazamiento a la izquierda)."
  - "Seleccionar `<`."
explicacion: "El operador `<` es el único correcto para 'menor que' en C. `<<` es para desplazamiento de bits."
```

### 15 — Igualdad en Bash (aritmética)
```
metadata:
  materia: "informatica"
  tema: "operadores-relacionales"
  nivel: "basico"
  tags: ["bash", "aritmetica", "completar"]
respuesta: "=="
tipo: completar
enunciado: "Dentro de los corchetes dobles aritméticos de Bash `(( ))`, para verificar si `$a` es igual a `$b`, se usa: `if (( $a ___ $b ))`"
pasos:
  - "Identificar el contexto: aritmética de Bash `(( ))`."
  - "Recordar que dentro de `(( ))` se usan operadores C-like."
  - "El operador de igualdad en C es `==`."
explicacion: "Dentro de `(( ))`, Bash usa sintaxis C. Por lo tanto, el operador de igualdad es `==`. A diferencia de `[ ]` que usa `-eq`, `(( ))` usa `==`."
```

### 16 — Operador de desigualdad en Java
```
metadata:
  materia: "informatica"
  tema: "operadores-relacionales"
  nivel: "basico"
  tags: ["java", "desigualdad", "vf"]
respuesta: verdadero
tipo: vf
enunciado: "En Java, el operador `!=` funciona para tipos primitivos y para comparar referencias de objetos (verificando si son diferentes objetos)."
pasos:
  - "Analizar el uso de `!=` en Java."
  - "Confirmar que es el complemento de `==`."
  - "Verificar que funciona para primitivos y referencias."
explicacion: "El operador `!=` verifica desigualdad. Para primitivos, compara valores. Para referencias, verifica si apuntan a objetos diferentes (desigual identidad). La afirmación es correcta."
```

### 17 — Mayor o igual en Python
```
metadata:
  materia: "informatica"
  tema: "operadores-relacionales"
  nivel: "basico"
  tags: ["python", "mayor-igual", "completar"]
respuesta: ">="
tipo: completar
enunciado: "En Python, para verificar si la edad es mayor o igual a 18, se escribe: `if edad ___ 18:`"
pasos:
  - "Identificar el lenguaje: Python."
  - "Determinar el operador para 'mayor o igual'."
  - "El operador es `>=`."
explicacion: "Python utiliza `>=` para la relación 'mayor o igual que'. Es consistente con la mayoría de los lenguajes modernos de alto nivel."
```

### 18 — Igualdad en Excel (números)
```
metadata:
  materia: "informatica"
  tema: "operadores-relacionales"
  nivel: "basico"
  tags: ["excel", "igualdad", "mc"]
opciones_explicitas:
  - "="
  - "=="
  - "eq"
  - "EQUAL"
respuesta: "="
tipo: mc
enunciado: "En las fórmulas de Excel, ¿cuál es el operador para verificar igualdad?"
pasos:
  - "Analizar las opciones."
  - "Descartar `==` (no es operador en Excel)."
  - "Descartar `eq` y `EQUAL`."
  - "Seleccionar `=`."
explicacion: "En Excel, el operador de igualdad es un solo signo `=`. Es importante no confundirlo con la asignación en programación, ya que en fórmulas `=` siempre significa 'es igual a'."
```

### 19 — Menor que en C++
```
metadata:
  materia: "informatica"
  tema: "operadores-relacionales"
  nivel: "basico"
  tags: ["cpp", "menor", "vf"]
respuesta: verdadero
tipo: vf
enunciado: "En C++, el operador `<` verifica si el operando izquierdo es estrictamente menor que el derecho."
pasos:
  - "Analizar la función del operador `<` en C++."
  - "Confirmar que es estricto (no incluye igualdad)."
explicacion: "El operador `<` en C++ es el operador relacional 'menor que'. Devuelve `true` si el operando izquierdo es estrictamente menor que el derecho. La afirmación es correcta."
```

### 20 — Operador de desigualdad en JavaScript
```
metadata:
  materia: "informatica"
  tema: "operadores-relacionales"
  nivel: "basico"
  tags: ["javascript", "desigualdad", "completar"]
respuesta: "!="
tipo: completar
enunciado: "En JavaScript, para verificar que una variable `resultado` no sea igual a `null`, se usa: `if (resultado ___ null)`"
pasos:
  - "Identificar el lenguaje: JavaScript."
  - "Determinar el operador para 'no igual'."
  - "El operador es `!=` (o `!==` para estricto)."
explicacion: "El operador `!=` verifica desigualdad. Se prefiere `!==` para evitar coerción, pero `!=` es el operador relacional de desigualdad básica. La pregunta pide el operador relacional estándar."
```

### 21 — Igualdad en SQL (estándar)
```
metadata:
  materia: "informatica"
  tema: "operadores-relacionales"
  nivel: "basico"
  tags: ["sql", "igualdad", "completar"]
respuesta: "="
tipo: completar
enunciado: "En SQL estándar, para seleccionar registros donde el campo `codigo` sea igual a '123', se usa: `WHERE codigo ___ '123'`"
pasos:
  - "Identificar el lenguaje: SQL."
  - "Determinar el operador para 'igual a'."
  - "El operador es `=`."
explicacion: "En SQL, el operador de igualdad es `=`. A diferencia de Bash (`==`) o Python (`==`), SQL usa un solo signo igual."
```

### 22 — Mayor que en Java
```
metadata:
  materia: "informatica"
  tema: "operadores-relacionales"
  nivel: "basico"
  tags: ["java", "mayor", "mc"]
opciones_explicitas:
  - ">"
  - ">>"
  - "=>"
  - ">"
respuesta: ">"
tipo: mc
enunciado: "En Java, ¿cuál es el operador para 'mayor que'?"
pasos:
  - "Analizar las opciones."
  - "Descartar `>>` (desplazamiento a la derecha)."
  - "Descartar `=>` (lambda en versiones recientes, no relacional)."
  - "Seleccionar `>`."
explicacion: "El operador `>` es el operador relacional 'mayor que' en Java. `>>` es para desplazamiento de bits."
```

### 23 — Operador de desigualdad en C
```
metadata:
  materia: "informatica"
  tema: "operadores-relacionales"
  nivel: "basico"
  tags: ["c", "desigualdad", "vf"]
respuesta: verdadero
tipo: vf
enunciado: "En C, el operador `!=` verifica si dos valores son desiguales."
pasos:
  - "Analizar la función del operador `!=` en C."
  - "Confirmar que es el complemento de `==`."
explicacion: "El operador `!=` en C verifica si los operandos son desiguales. Devuelve 1 (true) si son diferentes, 0 (false) si son iguales. La afirmación es correcta."
```

### 24 - Menor o igual en JavaScript
```
metadata:
  materia: "informatica"
  tema: "operadores-relacionales"
  nivel: "basico"
  tags: ["javascript", "menor-igual", "completar"]
respuesta: "<="
tipo: completar
enunciado: "En JavaScript, para verificar que un número `n` sea menor o igual a 100, se escribe: `if (n ___ 100)`"
pasos:
  - "Identificar el lenguaje: JavaScript."
  - "Determinar el operador para 'menor o igual'."
  - "El operador es `<=`."
explicacion: "El operador `<=` verifica si el operando izquierdo es menor o igual al derecho. Es consistente con la mayoría de los lenguajes C-like."
```

### 25 — Igualdad en C++
```
metadata:
  materia: "informatica"
  tema: "operadores-relacionales"
  nivel: "basico"
  tags: ["cpp", "igualdad", "vf"]
respuesta: verdadero
tipo: vf
enunciado: "En C++, el operador `==` verifica igualdad de valor para tipos primitivos."
pasos:
  - "Analizar la función del operador `==` en C++ para primitivos."
  - "Confirmar que compara valores, no direcciones."
explicacion: "Para tipos primitivos (int, float, char, etc.), `==` compara los valores almacenados. Para punteros, compara direcciones. La afirmación se refiere a tipos primitivos, por lo que es verdadera."
```