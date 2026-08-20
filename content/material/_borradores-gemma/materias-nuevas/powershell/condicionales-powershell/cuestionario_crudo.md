### 1 — Sintaxis básica de If
```
metadata:
  materia: "powershell"
  tema: "condicionales-powershell"
  nivel: "basico"
  tags: ["if", "sintaxis"]
respuesta: verdadero
enunciado: En PowerShell, la estructura `if ( $condicion ) { ... }` requiere que la condición esté encerrada entre paréntesis.
pasos:
  - "Verificar la sintaxis oficial de la instrucción if en PowerShell."
  - "Confirmar que los paréntesis son obligatorios alrededor de la expresión booleana."
explicacion: La sintaxis de `if` en PowerShell exige paréntesis alrededor de la condición para distinguirla de otros constructos y asegurar la evaluación correcta.
```

### 2 — Operador de igualdad
```
metadata:
  materia: "powershell"
  tema: "condicionales-powershell"
  nivel: "basico"
  tags: ["if", "igualdad"]
respuesta: completar
eneniado: Para comparar si la variable `$a` es igual a 5 en un condicional, se debe usar el operador ____.
pasos:
  - "Identificar el operador de igualdad en PowerShell."
  - "Distinguirlo del operador de asignación `=`."
respuestas_validas:
  - "-eq"
  - "-eq "
  - " -eq"
  - " -eq "
explicacion: En PowerShell, `-eq` es el operador de igualdad de valores (case-insensitive por defecto), mientras que `=` se usa para asignación.
```

### 3 — Valor booleano de cadena vacía
```
metadata:
  materia: "powershell"
  tema: "condicionales-powershell"
  nivel: "basico"
  tags: ["if", "coercion"]
respuesta: falso
enunciado: En un bloque `if`, una variable de tipo string vacía (`""`) se evalúa como `$true`.
pasos:
  - "Analizar la coerción de tipos en contextos booleanos."
  - "Verificar el comportamiento de cadenas vacías."
explicacion: En PowerShell, una cadena vacía (`""`) se evalúa como `$false`. Solo las cadenas no vacías se evalúan como `$true`.
```

### 4 - Estructura Else
```
metadata:
  materia: "powershell"
  tema: "condicionales-powershell"
  nivel: "basico"
  tags: ["if", "else"]
respuesta: completar
enunciado: Para ejecutar código alternativo cuando la condición de `if` es falsa, se utiliza la palabra clave ____.
pasos:
  - "Recordar la sintaxis básica de bifurcación."
  - "Identificar la palabra reservada estándar."
respuestas_validas:
  - "else"
  - " else"
  - "else "
  - " else "
explicacion: La palabra clave `else` se usa inmediatamente después del bloque `}` de `if` para definir el caso alternativo.
```

### 5 - Operador de desigualdad
```
metadata:
  materia: "powershell"
  tema: "condicionales-powershell"
  nivel: "basico"
  tags: ["if", "desigualdad"]
respuesta: mc
enunciado: ¿Cuál es el operador correcto para verificar si `$x` es distinto de 10?
opciones_explicitas:
  - "!= 10"
  - "-ne 10"
  - "-ne 10"
  - "<> 10"
respuesta: "-ne 10"
pasos:
  - "Revisar los operadores de comparación de PowerShell."
  - "Descartar operadores de otros lenguajes como C o SQL."
explicacion: PowerShell utiliza `-ne` (not equal) para la desigualdad. `!=` es de C/Java/JS, y `<>` es de SQL/VB6.
```

### 6 - Operador lógico AND
```
metadata:
  materia: "powershell"
  tema: "condicionales-powershell"
  nivel: "basico"
  tags: ["if", "and"]
respuesta: completar
enunciado: Para combinar dos condiciones que deben ser verdaderas simultáneamente, se usa el operador ____.
pasos:
  - "Identificar el operador lógico AND en PowerShell."
  - "Distinguirlo del operador bitwise `-band`."
respuestas_validas:
  - "-and"
  - "-and "
  - " -and"
  - " -and "
explicacion: `-and` es el operador lógico booleano. `-band` es para operaciones a nivel de bits.
```

### 7 - Operador lógico OR
```
metadata:
  materia: "powershell"
  tema: "condicionales-powershell"
  nivel: "basico"
  tags: ["if", "or"]
respuesta: completar
enunciado: Para verificar si al menos una de dos condiciones es verdadera, se utiliza el operador ____.
pasos:
  - "Identificar el operador lógico OR."
  - "Confirmar su sintaxis con guiones."
respuestas_validas:
  - "-or"
  - "-or "
  - " -or"
  - " -or "
explicacion: `-or` es el operador lógico OU. `-bor` es para bits.
```

### 8 - Operador NOT
```
metadata:
  materia: "powershell"
  tema: "condicionales-powershell"
  nivel: "basico"
  tags: ["if", "not"]
respuesta: completar
enunciado: Para negar una condición booleana en un `if`, se coloca el símbolo ____ antes de la expresión.
pasos:
  - "Identificar el operador de negación."
  - "Verificar su posición (prefijo)."
respuestas_validas:
  - "!"
  - "! "
  - "!"
explicacion: El operador `!` (o su alias `not`) se usa como prefijo para invertir el valor booleano.
```

### 9 - Comparación de cadenas case-sensitive
```
metadata:
  materia: "powershell"
  tema: "condicionales-powershell"
  nivel: "basico"
  tags: ["if", "case-sensitive"]
respuesta: mc
enunciado: ¿Qué operador se usa para una comparación de cadenas que distingue mayúsculas de minúsculas?
opciones_explicitas:
  - "-ceq"
  - "-ieq"
  - "-eq"
  - "-eq -case"
respuesta: "-ceq"
pasos:
  - "Recordar los sufijos de comparación de casos."
  - "c = case-sensitive, i = case-insensitive."
explicacion: `-ceq` es 'case-sensitive equal'. `-ieq` es 'case-insensitive equal' (equivalente a `-eq`).
```

### 10 - Bloque ElseIf
```
metadata:
  materia: "powershell"
  tema: "condicionales-powershell"
  nivel: "basico"
  tags: ["if", "elseif"]
respuesta: completar
enunciado: Para añadir una segunda condición a verificar tras un `if` fallido, se usa la palabra clave ____.
pasos:
  - "Identificar la palabra clave para condiciones adicionales."
  - "Verificar la ortografía exacta."
respuestas_validas:
  - "elseif"
  - "elseif "
  - " elseif"
  - " elseif "
explicacion: `elseif` (o `else if` como dos palabras, aunque `elseif` es más común en scripts compactos) permite encadenar condiciones.
```

### 11 - Operador de coincidencia (Regex)
```
metadata:
  materia: "powershell"
  tema: "condicionales-powershell"
  nivel: "basico"
  tags: ["if", "like"]
respuesta: completar
enunciado: Para verificar si una cadena coincide con un patrón wildcard (como `*.txt`), se usa el operador ____.
pasos:
  - "Identificar el operador de coincidencia de patrones simples."
  - "Distinguirlo de `-match` (regex)."
respuestas_validas:
  - "-like"
  - "-like "
  - " -like"
  - " -like "
explicacion: `-like` usa comodines (`*`, `?`). `-match` usa expresiones regulares completas.
```

### 12 - Operador de no coincidencia (Wildcard)
```
metadata:
  materia: "powershell"
  tema: "condicionales-powershell"
  nivel: "basico"
  tags: ["if", "notlike"]
respuesta: completar
enunciado: Para verificar que una cadena NO coincide con un patrón wildcard, se usa el operador ____.
pasos:
  - "Identificar la negación de `-like`."
  - "Confirmar la sintaxis."
respuestas_validas:
  - "-notlike"
  - "-notlike "
  - " -notlike"
  - " -notlike "
explicacion: `-notlike` es el opuesto lógico de `-like`.
```

### 13 - Operador de coincidencia (Regex)
```
metadata:
  materia: "powershell"
  tema: "condicionales-powershell"
  nivel: "basico"
  tags: ["if", "match"]
respuesta: completar
enunciado: Para verificar si una cadena coincide con una expresión regular, se usa el operador ____.
pasos:
  - "Identificar el operador de regex."
  - "Distinguirlo de `-like`."
respuestas_validas:
  - "-match"
  - "-match "
  - " -match"
  - " -match "
explicacion: `-match` evalúa la izquierda contra el patrón regex de la derecha. Retorna `$true` si hay coincidencia.
```

### 14 - Operador de no coincidencia (Regex)
```
metadata:
  materia: "powershell"
  tema: "condicionales-powershell"
  nivel: "basico"
  tags: ["if", "notmatch"]
respuesta: completar
enunciado: Para verificar que una cadena NO coincide con una expresión regular, se usa el operador ____.
pasos:
  - "Identificar la negación de `-match`."
  - "Confirmar la sintaxis."
respuestas_validas:
  - "-notmatch"
  - "-notmatch "
  - " -notmatch"
  - " -notmatch "
explicacion: `-notmatch` es el opuesto lógico de `-match`.
```

### 15 - Operador de pertenencia
```
metadata:
  materia: "powershell"
  tema: "condicionales-powershell"
  nivel: "basico"
  tags: ["if", "contains"]
respuesta: completar
enunciado: Para verificar si un array contiene un valor específico, se usa el operador ____.
pasos:
  - "Identificar el operador de pertenencia en arrays."
  - "Distinguirlo de `-in` (disponible en PS 7+ pero menos común en básicos)."
respuestas_validas:
  - "-contains"
  - "-contains "
  - " -contains"
  - " -contains "
explicacion: `-contains` verifica si el operando izquierdo (array) incluye al operando derecho (valor).
```

### 16 - Operador de no pertenencia
```
metadata:
  materia: "powershell"
  tema: "condicionales-powershell"
  nivel: "basico"
  tags: ["if", "notcontains"]
respuesta: completar
enunciado: Para verificar si un array NO contiene un valor específico, se usa el operador ____.
pasos:
  - "Identificar la negación de `-contains`."
  - "Confirmar la sintaxis."
respuestas_validas:
  - "-notcontains"
  - "-notcontains "
  - " -notcontains"
  - " -notcontains "
explicacion: `-notcontains` es el opuesto lógico de `-contains`.
```

### 17 - Operador de inclusión (PS 7+)
```
metadata:
  materia: "powershell"
  tema: "condicionales-powershell"
  nivel: "basico"
  tags: ["if", "in"]
respuesta: completar
enunciado: Para verificar si un valor está dentro de un array (PS 7+), se usa el operador ____.
pasos:
  - "Identificar el operador de pertenencia inversa."
  - "Distinguirlo de `-contains`."
respuestas_validas:
  - "-in"
  - "-in "
  - " -in"
  - " -in "
explicacion: `-in` verifica si el operando izquierdo (valor) está presente en el operando derecho (array). Es más legible que `-contains`.
```

### 18 - Operador de no inclusión (PS 7+)
```
metadata:
  materia: "powershell"
  tema: "condicionales-powershell"
  nivel: "basico"
  tags: ["if", "notin"]
respuesta: completar
enunciado: Para verificar si un valor NO está dentro de un array (PS 7+), se usa el operador ____.
pasos:
  - "Identificar la negación de `-in`."
  - "Confirmar la sintaxis."
respuestas_validas:
  - "-notin"
  - "-notin "
  - " -notin"
  - " -notin "
explicacion: `-notin` es el opuesto lógico de `-in`.
```

### 19 - Comparación numérica mayor que
```
metadata:
  materia: "powershell"
  tema: "condicionales-powershell"
  nivel: "basico"
  tags: ["if", "gt"]
respuesta: completar
enunciado: Para verificar si un número es mayor que otro, se usa el operador ____.
pasos:
  - "Identificar el operador de comparación numérica."
  - "Distinguirlo de `-ge`."
respuestas_validas:
  - "-gt"
  - "-gt "
  - " -gt"
  - " -gt "
explicacion: `-gt` es 'greater than'. `-ge` es 'greater or equal'.
```

### 20 - Comparación numérica menor que
```
metadata:
  materia: "powershell"
  tema: "condicionales-powershell"
  nivel: "basico"
  tags: ["if", "lt"]
respuesta: completar
enunciado: Para verificar si un número es menor que otro, se usa el operador ____.
pasos:
  - "Identificar el operador de comparación numérica."
  - "Distinguirlo de `-le`."
respuestas_validas:
  - "-lt"
  - "-lt "
  - " -lt"
  - " -lt "
explicacion: `-lt` es 'less than'. `-le` es 'less or equal'.
```

### 21 - Comparación numérica mayor o igual
```
metadata:
  materia: "powershell"
  tema: "condicionales-powershell"
  nivel: "basico"
  tags: ["if", "ge"]
respuesta: completar
enunciado: Para verificar si un número es mayor o igual que otro, se usa el operador ____.
pasos:
  - "Identificar el operador de comparación numérica con igualdad."
  - "Distinguirlo de `-gt`."
respuestas_validas:
  - "-ge"
  - "-ge "
  - " -ge"
  - " -ge "
explicacion: `-ge` es 'greater or equal'.
```

### 22 - Comparación numérica menor o igual
```
metadata:
  materia: "powershell"
  tema: "condicionales-powershell"
  nivel: "basico"
  tags: ["if", "le"]
respuesta: completar
enunciado: Para verificar si un número es menor o igual que otro, se usa el operador ____.
pasos:
  - "Identificar el operador de comparación numérica con igualdad."
  - "Distinguirlo de `-lt`."
respuestas_validas:
  - "-le"
  - "-le "
  - " -le"
  - " -le "
explicacion: `-le` es 'less or equal'.
```

### 23 - Tipo de retorno de -match
```
metadata:
  materia: "powershell"
  tema: "condicionales-powershell"
  nivel: "basico"
  tags: ["if", "match-return"]
respuesta: mc
enunciado: ¿Qué devuelve el operador `-match` cuando hay una coincidencia en un contexto de asignación?
opciones_explicitas:
  - "Boolean $true"
  - "Un array con los grupos de captura"
  - "El índice de la coincidencia"
  - "El string original"
respuesta: "Un array con los grupos de captura"
pasos:
  - "Analizar el comportamiento específico de `-match` en asignación."
  - "Recordar que en contexto booleano puro (`if`) devuelve boolean, pero en asignación devuelve los match."
explicacion: Cuando se usa `$var -match "pattern"`, si hay coincidencia, `$matches` se llena y la expresión devuelve los grupos capturados. En `if`, se evalúa como booleano.
```

### 24 - Bloque Else sin paréntesis
```
metadata:
  materia: "powershell"
  tema: "condicionales-powershell"
  nivel: "basico"
  tags: ["if", "else-sintaxis"]
respuesta: verdadero
enunciado: La palabra clave `else` no requiere paréntesis alrededor de su bloque de código.
pasos:
  - "Verificar la sintaxis de `else`."
  - "Confirmar que solo `if` requiere paréntesis para la condición."
explicacion: `else` es una palabra clave que inicia un bloque de código. No tiene condición propia, por lo que no lleva paréntesis.
```

### 25 - Prioridad de operadores lógicos
```
metadata:
  materia: "powershell"
  tema: "condicionales-powershell"
  nivel: "basico"
  tags: ["if", "precedence"]
respuesta: mc
enunciado: En la expresión `if ($a -and $b -or $c)`, ¿qué operador se evalúa primero?
opciones_explicitas:
  - "-or"
  - "-and"
  - "Depende de la versión de PowerShell"
  - "Se evalúan de izquierda a derecha sin prioridad"
respuesta: "-and"
pasos:
  - "Recordar la precedencia de operadores lógicos."
  - "AND tiene mayor precedencia que OR."
explicacion: `-and` tiene mayor precedencia que `-or`. La expresión se evalúa como `($a -and $b) -or $c`.
```