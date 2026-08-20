### 1 — Sintaxis básica del AND lógico en Bash
```
metadata:
  materia: "informatica"
  tema: "operadores-logicos"
  nivel: "basico"
  tags: ["bash", "and", "sintaxis"]
respuesta: &&
tipo: completar
enunciado: En un script de Bash, para ejecutar el comando `ls` solo si el archivo `datos.txt` existe, se utiliza la sintaxis `test -f datos.txt ___ ls`. ¿Qué operador lógico se debe colocar en el espacio?
pasos:
  - "Identificar el contexto: shell scripting en Bash."
  - "Reconocer la necesidad de evaluar dos condiciones o ejecutar secuencialmente con dependencia."
  - "El operador AND lógico en Bash que permite encadenar comandos es '&&'."
explicacion: En Bash, el operador '&&' (AND lógico) ejecuta el segundo comando solo si el primero tiene éxito (código de salida 0).
uno_de(["bash", "shell"])
```

### 2 — Operador OR en Bash
```
metadata:
  materia: "informatica"
  tema: "operadores-logicos"
  nivel: "basico"
  tags: ["bash", "or", "sintaxis"]
respuesta: ||
tipo: completar
enunciado: Para intentar abrir un navegador web con `firefox`, y si falla abrir `chrome` como alternativa, se usa la sintaxis: `firefox ___ chrome`. ¿Qué operador se requiere?
pasos:
  - "Analizar el flujo: ejecutar A, si falla ejecutar B."
  - "Esto corresponde a la lógica OR."
  - "En Bash, el operador OR es '||'."
explicacion: El operador '||' (OR lógico) ejecuta el segundo comando solo si el primero falla (código de salida distinto de 0).
uno_de(["firefox", "google-chrome"])
```

### 3 — Verdad de la negación en Bash
```
metadata:
  materia: "informatica"
  tema: "operadores-logicos"
  nivel: "basico"
  tags: ["bash", "not", "negacion"]
respuesta: falso
tipo: vf
enunciado: En Bash, el operador `!` invierte el valor de verdad de una condición. Si `test -f archivo.txt` es verdadero (el archivo existe), entonces `test ! -f archivo.txt` también será verdadero.
pasos:
  - "Evaluar la condición original: `test -f` es verdadero si existe."
  - "Aplicar la negación `!`: invierte el resultado a falso."
  - "Por lo tanto, la afirmación de que sigue siendo verdadero es incorrecta."
explicacion: El operador `!` niega la condición. Si la condición es verdadera, la negada es falsa.
uno_de(["negacion", "inversion"])
```

### 4 — Operador AND en Python
```
metadata:
  materia: "informatica"
  tema: "operadores-logicos"
  nivel: "basico"
  tags: ["python", "and", "sintaxis"]
respuesta: and
tipo: completar
enunciado: En Python, para verificar si una variable `edad` es mayor que 18 Y menor que 65, se escribe: `if edad > 18 ___ edad < 65:`. ¿Qué palabra clave se usa?
pasos:
  - "Identificar el lenguaje: Python."
  - "Reconocer la operación lógica AND."
  - "La palabra clave para AND en Python es 'and' (minúsculas)."
explicacion: Python utiliza la palabra clave 'and' para la conjunción lógica, a diferencia de Bash que usa '&&'.
uno_de(["python", "script"])
```

### 5 — Operador OR en Python
```
metadata:
  materia: "informatica"
  tema: "operadores-logicos"
  nivel: "basico"
  tags: ["python", "or", "sintaxis"]
respuesta: or
tipo: completar
enunciado: En Python, para ejecutar un bloque si `usuario` es "admin" O si `nivel` es 5, se usa: `if usuario == "admin" ___ nivel == 5:`. ¿Qué palabra clave se requiere?
pasos:
  - "Contexto: Python."
  - "Operación: OR lógico."
  - "Palabra clave: 'or'."
explicacion: Python utiliza 'or' para la disyunción lógica.
uno_de(["admin", "nivel"])
```

### 6 — Operador NOT en Python
```
metadata:
  materia: "informatica"
  tema: "operadores-logicos"
  nivel: "basico"
  tags: ["python", "not", "sintaxis"]
respuesta: not
tipo: completar
enunciado: En Python, para verificar si una lista `items` está vacía, se puede usar: `if ___ items:`. ¿Qué palabra clave precede a la variable para evaluar su falsedad?
pasos:
  - "Objetivo: verificar falsedad de una lista."
  - "Operador lógico: NOT."
  - "Palabra clave en Python: 'not'."
explicacion: El operador 'not' devuelve True si el operando es falso (como una lista vacía).
uno_de(["lista", "vacía"])
```

### 7 — Sintaxis de AND en C
```
metadata:
  materia: "informatica"
  tema: "operadores-logicos"
  nivel: "basico"
  tags: ["c", "and", "sintaxis"]
respuesta: &&
tipo: completar
enunciado: En el lenguaje C, para que una estructura `if` se ejecute solo si `a > 0` Y `b < 10`, se escribe: `if (a > 0 ___ b < 10)`. ¿Qué operador se usa?
pasos:
  - "Lenguaje: C."
  - "Operación: AND lógico."
  - "Operador en C: '&&'."
explicacion: C utiliza '&&' para el operador AND lógico.
uno_de(["entero", "condición"])
```

### 8 — Sintaxis de OR en C
```
metadata:
  materia: "informatica"
  tema: "operadores-logicos"
  nivel: "basico"
  tags: ["c", "or", "sintaxis"]
respuesta: ||
tipo: completar
enunciado: En C, para verificar si una variable `x` es igual a 1 O igual a 2, se usa: `if (x == 1 ___ x == 2)`. ¿Qué operador se requiere?
pasos:
  - "Lenguaje: C."
  - "Operación: OR lógico."
  - "Operador en C: '||'."
explicacion: C utiliza '||' para el operador OR lógico.
uno_de(["comparación", "igualdad"])
```

### 9 — Sintaxis de NOT en C
```
metadata:
  materia: "informatica"
  tema: "operadores-logicos"
  nivel: "basico"
  tags: ["c", "not", "sintaxis"]
respuesta: !
tipo: completar
enunciado: En C, para invertir el valor booleano de una variable `activo`, se usa: `if (___ activo)`. ¿Qué operador se coloca antes?
pasos:
  - "Lenguaje: C."
  - "Operación: NOT lógico."
  - "Operador en C: '!'."
explicacion: C utiliza '!' para el operador NOT lógico.
uno_de(["booleano", "inversión"])
```

### 10 — Evaluación de cortocircuito en Bash
```
metadata:
  materia: "informatica"
  tema: "operadores-logicos"
  nivel: "basico"
  tags: ["bash", "cortocircuito", "comportamiento"]
respuesta: verdadero
tipo: vf
enunciado: En Bash, en la expresión `command1 && command2`, si `command1` falla, `command2` nunca se ejecuta.
pasos:
  - "Analizar el operador '&&' (AND)."
  - "Definición de AND: el segundo operando solo se evalúa si el primero es verdadero."
  - "Si el primero falla, la condición global es falsa y el segundo no se ejecuta (cortocircuito)."
explicacion: El operador '&&' implementa cortocircuito: si la primera parte es falsa, la segunda no se ejecuta.
uno_de(["ejecución", "falla"])
```

### 11 — Evaluación de cortocircuito en Python
```
metadata:
  materia: "informatica"
  tema: "operadores-logicos"
  nivel: "basico"
  tags: ["python", "cortocircuito", "comportamiento"]
respuesta: verdadero
tipo: vf
enunciado: En Python, en la expresión `func_a() or func_b()`, si `func_a()` devuelve `True`, `func_b()` no se llama.
pasos:
  - "Analizar el operador 'or' (OR)."
  - "Definición de OR: la condición es verdadera si el primer operando es verdadero."
  - "No es necesario evaluar el segundo operando (cortocircuito)."
explicacion: El operador 'or' en Python evalúa de izquierda a derecha y se detiene en el primer valor verdadero.
uno_de(["llamada", "función"])
```

### 12 — Operador de igualdad en lógica
```
metadata:
  materia: "informatica"
  tema: "operadores-logicos"
  nivel: "basico"
  tags: ["general", "igualdad", "concepto"]
respuesta: ==
tipo: completar
enunciado: En la mayoría de lenguajes de programación (como C, Java, Python), para comparar si dos variables tienen el MISMO valor dentro de una expresión lógica, se usa el operador: `a ___ b`.
pasos:
  - "Identificar la operación: comparación de igualdad."
  - "Sintaxis estándar: '==' (doble igual)."
explicacion: El operador '==' compara valores, mientras que '=' asigna.
uno_de(["comparación", "valor"])
```

### 13 — Operador de desigualdad en lógica
```
metadata:
  materia: "informatica"
  tema: "operadores-logicos"
  nivel: "basico"
  tags: ["general", "desigualdad", "concepto"]
respuesta: !=
tipo: completar
enunciado: En lenguajes como C, Java y Python, para verificar que `x` NO sea igual a 0 en una condición lógica, se usa: `x ___ 0`.
pasos:
  - "Identificar la operación: desigualdad."
  - "Sintaxis estándar: '!='."
explicacion: '!=' es el operador estándar para desigualdad en muchos lenguajes C-style.
uno_de(["desigualdad", "notación"])
```

### 14 — Prioridad de operadores (AND vs OR)
```
metadata:
  materia: "informatica"
  tema: "operadores-logicos"
  nivel: "basico"
  tags: ["general", "prioridad", "precedencia"]
respuesta: &&
tipo: completar
enunciado: En C, Java y JavaScript, el operador AND lógico tiene mayor precedencia que el operador OR lógico. Por tanto, en `a || b && c`, se evalúa primero `b && c`. ¿Qué operador se evalúa primero?
pasos:
  - "Analizar la precedencia: AND > OR."
  - "Identificar el operador de AND en C/Java/JS: '&&'."
explicacion: '&&' se evalúa antes que '||' debido a su mayor precedencia.
uno_de(["precedencia", "AND"])
```

### 15 — Valor de retorno de un operador lógico
```
metadata:
  materia: "informatica"
  tema: "operadores-logicos"
  nivel: "basico"
  tags: ["python", "retorno", "comportamiento"]
respuesta: verdadero
tipo: vf
enunciado: En Python, la expresión `1 or 2` devuelve el valor `1` (el primer operando verdadero), no necesariamente el valor booleano `True`.
pasos:
  - "Analizar el comportamiento de 'or' en Python."
  - "Python devuelve el operando que determina el resultado, no solo True/False."
  - "Como 1 es verdadero (truthy), se devuelve 1."
explicacion: Python implementa cortocircuito y devuelve el valor del operando evaluado, no solo un booleano estricto.
uno_de(["retorno", "valor"])
```

### 16 — Operador AND en JavaScript
```
metadata:
  materia: "informatica"
  tema: "operadores-logicos"
  nivel: "basico"
  tags: ["javascript", "and", "sintaxis"]
respuesta: &&
tipo: completar
enunciado: En JavaScript, para verificar si `usuario` es válido Y `contraseña` es correcta, se usa: `if (usuario ___ contraseña)`. ¿Qué operador se usa?
pasos:
  - "Lenguaje: JavaScript."
  - "Operación: AND."
  - "Operador: '&&'."
explicacion: JavaScript utiliza '&&' para el operador AND lógico.
uno_de(["validación", "autenticación"])
```

### 17 — Operador OR en JavaScript
```
metadata:
  materia: "informatica"
  tema: "operadores-logicos"
  nivel: "basico"
  tags: ["javascript", "or", "sintaxis"]
respuesta: ||
tipo: completar
enunciado: En JavaScript, para establecer un valor por defecto: `const nombre = usuario ___ "Invitado";`. Si `usuario` es falsy, se usa "Invitado". ¿Qué operador se usa?
pasos:
  - "Contexto: asignación con fallback en JS."
  - "Operación: OR."
  - "Operador: '||'."
explicacion: El operador '||' devuelve el primer operando truthy o el último operando.
uno_de(["fallback", "default"])
```

### 18 — Operador NOT en JavaScript
```
metadata:
  materia: "informatica"
  tema: "operadores-logicos"
  nivel: "basico"
  tags: ["javascript", "not", "sintaxis"]
respuesta: !
tipo: completar
enunciado: En JavaScript, para convertir una variable `valor` a booleano y negarla, se puede usar: `!valor`. ¿Qué símbolo se coloca antes?
pasos:
  - "Lenguaje: JavaScript."
  - "Operación: NOT."
  - "Operador: '!'."
explicacion: '!' es el operador NOT en JavaScript.
uno_de(["conversión", "negación"])
```

### 19 — Diferencia entre && y & en C
```
metadata:
  materia: "informatica"
  tema: "operadores-logicos"
  nivel: "basico"
  tags: ["c", "diferencia", "bitwise"]
respuesta: &&
tipo: completar
enunciado: En C, para evaluar condiciones lógicas (verdadero/falso) con cortocircuito, se debe usar `___`, no `&`. ¿Qué operador es el correcto para lógica booleana?
pasos:
  - "Identificar la operación: lógica booleana."
  - "Diferencia: '&' es bitwise, '&&' es lógico."
  - "El lógico con cortocircuito es '&&'."
explicacion: '&&' es el operador AND lógico; '&' es el operador AND bit a bit.
uno_de(["lógico", "bitwise"])
```

### 20 — Diferencia entre || y | en C
```
metadata:
  materia: "informatica"
  tema: "operadores-logicos"
  nivel: "basico"
  tags: ["c", "diferencia", "bitwise"]
respuesta: ||
tipo: completar
enunciado: En C, para evaluar condiciones lógicas (verdadero/falso) con cortocircuito, se debe usar `___`, no `|`. ¿Qué operador es el correcto para lógica booleana?
pasos:
  - "Identificar la operación: lógica booleana."
  - "Diferencia: '|' es bitwise, '||' es lógico."
  - "El lógico con cortocircuito es '||'."
explicacion: '||' es el operador OR lógico; '|' es el operador OR bit a bit.
uno_de(["lógico", "bitwise"])
```

### 21 — Operador de negación en Python
```
metadata:
  materia: "informatica"
  tema: "operadores-logicos"
  nivel: "basico"
  tags: ["python", "not", "palabra_clave"]
respuesta: not
tipo: completar
enunciado: En Python, el operador de negación lógica es la palabra clave `not`, no el símbolo `!`. ¿Es esto correcto?
pasos:
  - "Verificar sintaxis de Python."
  - "Python usa 'not' para negación lógica."
  - "Python no usa '!' para negación lógica (aunque existe para otros usos)."
explicacion: Python utiliza la palabra clave 'not' para la negación lógica.
uno_de(["sintaxis", "palabra"])
```

### 22 — Operador de negación en Bash (test)
```
metadata:
  materia: "informatica"
  tema: "operadores-logicos"
  nivel: "basico"
  tags: ["bash", "test", "negacion"]
respuesta: !
tipo: completar
enunciado: En Bash, dentro de un bloque `test` o `[ ]`, para negar una condición, se usa el operador `___` antes de la prueba. Ejemplo: `[ ___ -f archivo ]`.
pasos:
  - "Contexto: comando `test` en Bash."
  - "Operación: negación."
  - "Operador: '!'."
explicacion: El comando `test` en Bash usa '!' para negar condiciones.
uno_de(["condición", "prueba"])
```

### 23 — Evaluación de AND en Bash (comandos)
```
metadata:
  materia: "informatica"
  tema: "operadores-logicos"
  nivel: "basico"
  tags: ["bash", "comandos", "flujo"]
respuesta: &&
tipo: completar
enunciado: En Bash, para ejecutar `comando_a` y si tiene éxito ejecutar `comando_b`, se usa el operador `___` entre ellos.
pasos:
  - "Contexto: encadenamiento de comandos en Bash."
  - "Operación: secuencia condicional (AND)."
  - "Operador: '&&'."
explicacion: '&&' encadena comandos secuencialmente, ejecutando el siguiente solo si el anterior tuvo éxito.
uno_de(["comando", "éxito"])
```

### 24 — Evaluación de OR en Bash (comandos)
```
metadata:
  materia: "informatica"
  tema: "operadores-logicos"
  nivel: "basico"
  tags: ["bash", "comandos", "flujo"]
respuesta: ||
tipo: completar
enunciado: En Bash, para ejecutar `comando_a` y si falla ejecutar `comando_b`, se usa el operador `___` entre ellos.
pasos:
  - "Contexto: encadenamiento de comandos en Bash."
  - "Operación: alternativa condicional (OR)."
  - "Operador: '||'."
explicacion: '||' permite ejecutar un comando alternativo si el anterior falló.
uno_de(["comando", "falla"])
```

### 25 — Verdadero/Falso sobre cortocircuito en Python
```
metadata:
  materia: "informatica"
  tema: "operadores-logicos"
  nivel: "basico"
  tags: ["python", "cortocircuito", "eficiencia"]
respuesta: verdadero
tipo: vf
enunciado: En Python, la expresión `True or funcion_costosa()` no ejecuta `funcion_costosa()` debido al cortocircuito.
pasos:
  - "Analizar la expresión: OR lógico."
  - "Primer operando: True (verdadero)."
  - "Regla de OR: si el primero es verdadero, el resultado es verdadero sin evaluar el segundo."
explicacion: El cortocircuito en 'or' evita la evaluación del segundo operando si el primero ya determina el resultado.
uno_de(["evaluación", "operando"])
```