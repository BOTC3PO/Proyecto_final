### 1 — Conteo de líneas con campo específico
```yaml
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "intermedio"
  tags: ["contar-lineas", "campo-especifico", "contador"]
respuesta: verdadero
tipo: vf
enunciado: El siguiente comando imprime el número de líneas del archivo `datos.txt` donde el segundo campo es mayor a 10:
pasos:
  - "awk '$2 > 10 {count++} END {print count}' datos.txt"
explicacion: La sintaxis es correcta. Se itera sobre cada línea, si la condición se cumple se incrementa la variable `count` (inicializada implícitamente en 0), y al final se imprime el total.
```

### 2 — Completar el separador de campo
```yaml
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "intermedio"
  tags: ["separador", "fs", "delimitador"]
respuesta: "comas"
respuestas_validas:
  - "comas"
  - "Comas"
  - "COMAS"
tipo: completar
enunciado: Si el archivo `csv.txt` tiene los campos separados por punto y coma (;), ¿qué valor debe asignarse a la variable `FS` para que `$1` sea el primer campo?
pasos:
  - "awk 'BEGIN {FS=____} {print $1}' csv.txt"
explicacion: La variable `FS` define el separador de campos. Para punto y coma, se usa `";"`.
```

### 3 — Identificar tipo de salida
```yaml
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "intermedio"
  tags: ["output", "printf", "formato"]
respuesta: "2"
tipo: mc
opciones_explicitas:
  - "0"
  - "1"
  - "2"
  - "3"
enunciado: En `awk`, ¿cuántos campos tiene por defecto el registro `$0` al imprimirlo con `print $0`?
pasos:
  - "El registro completo `$0` representa toda la línea."
explicacion: `$0` es un solo campo que contiene toda la línea. El número de campos es `$NF`, no 2. Esta pregunta es un truco conceptual: `$0` es una entidad única. Sin embargo, para evitar ambigüedad, reformulamos: ¿Cuál es el valor de `NF` (número de campos) si la línea es "Hola Mundo"? Respuesta: 2. Pero la pregunta original pedía sobre `$0`. Mejor cambio a: ¿Qué imprime `print NF` en "A B"? -> 2. Vamos a hacer una de formato.
enunciado_reformulado: ¿Cuál es el resultado de `printf "%d\n", 10.9` en `awk`?
opciones_explicitas:
  - "10"
  - "11"
  - "10.9"
  - "Error"
respuesta: "10"
explicacion: `%d` formatea como entero, truncando el decimal.
```

### 4 — Separador de salida (OFS)
```yaml
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "intermedio"
  tags: ["of", "output-field-separator", "impresion"]
respuesta: "espacio"
respuestas_validas:
  - "espacio"
  - "Espacio"
  - " "
tipo: completar
enunciado: Por defecto, si se asigna un nuevo valor a un campo (ej: `$1 = "X"`) y se ejecuta `print`, los campos se imprimen separados por un ______.
pasos:
  - "El valor por defecto de OFS es un espacio simple."
explicacion: La variable `OFS` (Output Field Separator) es un espacio por defecto.
```

### 5 — Filtrar por longitud de línea
```yaml
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "intermedio"
  tags: ["longitud", "length", "condicion"]
respuesta: "verdadero"
tipo: vf
enunciado: El comando `awk 'length($0) > 80' archivo.log` imprime las líneas más largas de 80 caracteres.
pasos:
  - "La función `length()` devuelve la longitud de la cadena."
explicacion: Es correcto. `length($0)` o simplemente `length` devuelve la longitud de la línea actual.
```

### 6 — Completar el bloque BEGIN
```yaml
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "intermedio"
  tags: ["begin", "inicializacion", "estructura"]
respuesta: "BEGIN"
respuestas_validas:
  - "BEGIN"
  - "begin"
tipo: completar
enunciado: ¿Qué bloque se utiliza para inicializar variables o configurar el entorno ANTES de leer la primera línea del archivo?
pasos:
  - "awk '____ {FS=\",\"} {print $1}' file.csv"
explicacion: El bloque `BEGIN` se ejecuta una vez antes del procesamiento de líneas.
```

### 7 — Concatenación de strings
```yaml
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "intermedio"
  tags: ["concatenacion", "string", "impresion"]
respuesta: "HolaMundo"
tipo: mc
opciones_explicitas:
  - "Hola Mundo"
  - "HolaMundo"
  - "Hola+Mundo"
  - "Error de sintaxis"
enunciado: ¿Qué imprime `awk 'BEGIN {a="Hola"; b="Mundo"; print a b}'`?
pasos:
  - "En awk, la concatenación se hace yuxtaponiendo variables."
explicacion: La concatenación se realiza poniendo las variables una junto a la otra sin operador.
```

### 8 — Buscar patrón con regex
```yaml
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "intermedio"
  tags: ["regex", "pattern", "coincidencia"]
respuesta: "verdadero"
tipo: vf
enunciado: `awk '/^[0-9]+$/ {print $0}'` imprime solo las líneas que contienen exclusivamente dígitos.
pasos:
  - "El patrón `/^[0-9]+$/` coincide con líneas que empiezan y terminan con dígitos."
explicacion: Correcto. `^` es inicio de línea, `$` es fin de línea.
```

### 9 — Completar el operador de comparación de strings
```yaml
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "intermedio"
  tags: ["comparacion", "string", "igualdad"]
respuesta: "=="
respuestas_validas:
  - "=="
  - " =="
tipo: completar
enunciado: ¿Qué operador se usa para comparar si una variable `var` es igual a la cadena "exit" en una condición?
pasos:
  - "if (var ____ \"exit\") { ... }"
explicacion: El operador de igualdad de valores es `==`. `=` es asignación.
```

### 10 — Array asociativo (Frecuencia)
```yaml
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "intermedio"
  tags: ["array", "frecuencia", "frecuencia-ocurrencia"]
respuesta: "3"
tipo: mc
opciones_explicitas:
  - "0"
  - "1"
  - "3"
  - "Error"
enunciado: Dado el input:
  - "Manzana"
  - "Pera"
  - "Manzana"
  - "Pera"
  - "Manzana"
  ¿Cuál es el valor de `count["Manzana"]` al final de este script?
  - `awk '{count[$1]++} END {print count["Manzana"]}'`
pasos:
  - "Se incrementa 3 veces."
explicacion: "Manzana" aparece 3 veces, por lo que `count["Manzana"]` es 3.
```

### 11 — Modificador de campo (FS) en línea de comando
```yaml
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "intermedio"
  tags: ["fs", "command-line", "variante"]
respuesta: "verdadero"
tipo: vf
enunciado: Es posible definir el separador de campos desde la línea de comandos usando `-F` sin modificar el script.
pasos:
  - "awk -F: '{print $1}' /etc/passwd"
explicacion: Correcto. `-F` es la forma estándar de pasar el separador al inicio.
```

### 12 — Completar la función de conversión a entero
```yaml
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "intermedio"
  tags: ["conversion", "int", "casting"]
respuesta: "int"
respuestas_validas:
  - "int"
  - "Int"
  - "INT"
tipo: completar
enunciado: ¿Qué función se usa para convertir explícitamente un número flotante a entero (truncando)?
pasos:
  - "x = ____ (3.14)"
explicacion: `int()` es la función para truncar a entero.
```

### 13 — Índice de campo (NF)
```yaml
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "intermedio"
  tags: ["nf", "ultimo-campo", "indice"]
respuesta: "ultimo"
respuestas_validas:
  - "ultimo"
  - "Ultimo"
  - "last"
tipo: completar
enunciado: Para imprimir el último campo de cada línea, independientemente de cuántos campos haya, se usa `$____`.
pasos:
  - "awk '{print $NF}' file"
explicacion: `NF` es el número total de campos. `$NF` es el valor del último campo.
```

### 14 — Condición de campo vacío
```yaml
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "intermedio"
  tags: ["condicion", "vacio", "nulo"]
respuesta: "falso"
tipo: vf
enunciado: En `awk`, la expresión `if ($1)` es verdadera incluso si `$1` es una cadena vacía `""`.
pasos:
  - "En awk, una cadena vacía es falsa en contexto booleano."
explicacion: Falso. `""` es falso. `0` es falso. Solo las cadenas no vacías y números no nulos son verdaderos.
```

### 15 — Completar el operador de asignación compuesta
```yaml
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "intermedio"
  tags: ["asignacion", "incremento", "operador"]
respuesta: "+="
respuestas_validas:
  - "+="
  - " += "
tipo: completar
enunciado: ¿Qué operador se usa para sumar 1 a una variable `total` de forma compacta?
pasos:
  - "total ____ 1"
explicacion: `+=` es el operador de asignación con suma.
```

### 16 — Filtrar por coincidencia de campo
```yaml
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "intermedio"
  tags: ["coincidencia", "contiene", "regex-campo"]
respuesta: "verdadero"
tipo: vf
enunciado: `awk '$2 ~ /error/' log.txt` imprime líneas donde el segundo campo contiene la palabra "error".
pasos:
  - "El operador `~` verifica coincidencia de patrón."
explicacion: Correcto. `$2 ~ /pattern/` verifica si el campo 2 coincide con la regex.
```

### 17 — Tipo de dato de entrada
```yaml
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "intermedio"
  tags: ["tipos", "entrada", "conversion-automatica"]
respuesta: "cadena"
respuestas_validas:
  - "cadena"
  - "String"
  - "string"
tipo: mc
opciones_explicitas:
  - "número"
  - "cadena"
  - "booleano"
  - "array"
enunciado: Por defecto, ¿cómo interpreta `awk` los campos leídos del archivo de entrada?
pasos:
  - "Los campos son cadenas hasta que se usan en contexto numérico."
explicacion: `awk` trata los campos como cadenas por defecto. Se convierten a números automáticamente al hacer operaciones aritméticas.
```

### 18 — Completar el bloque END
```yaml
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "intermedio"
  tags: ["end", "finalizacion", "resumen"]
respuesta: "END"
respuestas_validas:
  - "END"
  - "end"
tipo: completar
enunciado: ¿Qué bloque se ejecuta UNA VEZ después de procesar todas las líneas?
pasos:
  - "awk '... ____ {print "Fin"}' file"
explicacion: El bloque `END` se ejecuta al finalizar el procesamiento.
```

### 19 — Imprimir número de línea
```yaml
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "intermedio"
  tags: ["NR", "line-number", "variable-interna"]
respuesta: "NR"
tipo: mc
opciones_explicitas:
  - "FNR"
  - "NR"
  - "LINENO"
  - "LINE"
enunciado: ¿Qué variable interna contiene el número de la línea actual del archivo procesado?
pasos:
  - "NR es el número de registro (línea) global."
explicacion: `NR` es el número de línea actual. `FNR` es el número de línea en el archivo actual (útil para múltiples archivos).
```

### 20 — Separador de registro (RS)
```yaml
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "intermedio"
  tags: ["rs", "record-separator", "multilinea"]
respuesta: "verdadero"
tipo: vf
enunciado: Se puede cambiar el separador de registros (líneas) usando `RS` en el bloque `BEGIN`.
pasos:
  - "awk 'BEGIN {RS=\"\\n\\n\"} {print $0}' file"
explicacion: Correcto. `RS` define qué separa los registros (por defecto `\n`).
```

### 21 — Completar la función de longitud
```yaml
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "intermedio"
  tags: ["length", "longitud", "funcion"]
respuesta: "length"
respuestas_validas:
  - "length"
  - "Length"
  - "LENGTH"
tipo: completar
enunciado: ¿Qué función devuelve el número de caracteres en una cadena?
pasos:
  - "n = ____ (\"hola\")"
explicacion: `length()` es la función estándar.
```

### 22 — Ordenamiento de arrays (inexistente)
```yaml
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "intermedio"
  tags: ["arrays", "ordenamiento", "limitacion"]
respuesta: "falso"
tipo: vf
enunciado: `awk` estándar (POSIX) tiene una función nativa `sort()` para ordenar arrays asociativos.
pasos:
  - "POSIX awk no tiene sort nativo para arrays."
explicacion: Falso. `gawk` tiene `asort()` y `asorti()`, pero `awk` estándar POSIX no tiene ordenamiento nativo de arrays.
```

### 23 — Tipo de dato de salida
```yaml
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "intermedio"
  tags: ["printf", "formato", "salida"]
respuesta: "45"
tipo: mc
opciones_explicitas:
  - "45"
  - "45.0"
  - "45.00"
  - "Error"
enunciado: ¿Qué imprime `awk 'BEGIN {printf "%d", 45.6}'`?
pasos:
  - "%d trunca a entero."
explicacion: `%d` convierte a entero, truncando .6.
```

### 24 — Completar el operador de concatenación en print
```yaml
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "intermedio"
  tags: ["print", "concatenacion", "impresion"]
respuesta: "ninguno"
respuestas_validas:
  - "ninguno"
  - "Ninguno"
  - " "
tipo: completar
enunciado: Para concatenar variables `a` y `b` en un `print`, se escriben: `print a ____ b`. ¿Qué operador va en el hueco?
pasos:
  - "La yuxtaposición es la concatenación."
explicacion: No se usa operador. Se escriben juntas: `print a b`. (Nota: si se usa coma `,`, se imprime con OFS. Sin coma es concatenación).
```

### 25 — Filtrar por igualdad de campo
```yaml
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "intermedio"
  tags: ["igualdad", "campo", "filtro"]
respuesta: "verdadero"
tipo: vf
enunciado: `awk '$1 == "admin"' usuarios.txt` imprime las líneas donde el primer campo es exactamente "admin".
pasos:
  - "Comparación de strings con `==`."
explicacion: Correcto. Compara la igualdad de la cadena.