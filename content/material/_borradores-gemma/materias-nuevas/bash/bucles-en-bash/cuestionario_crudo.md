### 1 — Sintaxis básica de bucle while
```
metadata:
  materia: "bash"
  tema: "bucles-en-bash"
  nivel: "basico"
  tags: ["while", "sintaxis"]
enunciado: "Completa la sintaxis básica del bucle while en Bash para iterar mientras la variable `i` sea menor o igual a 5: `while [ $i -le 5 ]; do ... done`"
tipo: "completar"
respuesta: "done"
respuestas_validas:
  - "done"
  - "DONE"
pasos:
  - "Identificar el comando que cierra el bloque de instrucciones del bucle while."
  - "Recordar que el bucle se repite hasta que la condición sea falsa."
explicacion: "La palabra clave `done` marca el final del cuerpo del bucle while en Bash."
```

### 2 — Verificación de tipo de dato en condición
```
metadata:
  materia: "bash"
  tema: "bucles-en-bash"
  nivel: "basico"
  tags: ["while", "condiciones"]
enunciado: "Verdadero o Falso: En un bucle while, la condición `[ $contador -eq 10 ]` requiere que la variable `contador` contenga un número entero válido para funcionar correctamente sin errores de sintaxis."
tipo: "vf"
respuesta: verdadero
pasos:
  - "Analizar el operador `-eq` que compara enteros."
  - "Determinar si el operador acepta cadenas no numéricas."
explicacion: "El operador `-eq` está diseñado exclusivamente para comparaciones aritméticas de enteros. Si la variable está vacía o contiene texto, Bash lanzará un error de sintaxis o comportamiento inesperado."
```

### 3 — Iteración con secuencia numérica
```
metadata:
  materia: "bash"
  tema: "bucles-en-bash"
  nivel: "basico"
  tags: ["for", "seq"]
enunciado: "Completa el comando para generar una secuencia de números del 1 al 3 dentro de un bucle for: `for i in $(____ 1 3); do`"
tipo: "completar"
respuesta: "seq"
respuestas_validas:
  - "seq"
  - "SEQ"
pasos:
  - "Identificar la utilidad estándar de Unix para generar secuencias de números."
  - "Verificar la sintaxis de llamada de comando entre paréntesis."
explicacion: "El comando `seq` genera una secuencia de números, y al estar entre `$(...)`, su salida se expande como una lista de palabras para el bucle for."
```

### 4 — Operador de comparación de cadenas
```
metadata:
  materia: "bash"
  tema: "bucles-en-bash"
  nivel: "basico"
  tags: ["while", "comparacion-cadenas"]
enunciado: "Verdadero o Falso: El operador `==` dentro de los corchetes `[ "$var" == "valor" ]` es válido y compara igualdad de cadenas en Bash."
tipo: "vf"
respuesta: verdadero
pasos:
  - "Revisar la sintaxis de comparación de strings en Bash."
  - "Confirmar si `==` es soportado como equivalente a `=`."
explicacion: "En Bash, dentro de `[ ]`, el operador `==` es equivalente a `=` y realiza una comparación de cadenas."
```

### 5 — Estructura de bucle for con rango de corchetes
```
metadata:
  materia: "bash"
  tema: "bucles-en-bash"
  nivel: "basico"
  tags: ["for", "rango"]
enunciado: "Completa la expansión de rango en el siguiente bucle for: `for i in {1..____}; do` para que itere hasta el número 5."
tipo: "completar"
respuesta: "5"
respuestas_validas:
  - "5"
  - "FIVE"
pasos:
  - "Entender la sintaxis `{inicio..fin}` de Bash."
  - "Identificar el límite superior del rango."
explicacion: "La expansión de rango `{1..5}` genera la secuencia 1 2 3 4 5. El segundo número define el final del rango."
```

### 6 — Uso de `break` en bucle anidado
```
metadata:
  materia: "bash"
  tema: "bucles-en-bash"
  nivel: "basico"
  tags: ["break", "control"]
enunciado: "Verdadero o Falso: El comando `break` dentro de un bucle `while` anidado dentro de un `for` solo sale del bucle `while` interno, permitiendo que el bucle `for` externo continúe su ejecución."
tipo: "vf"
respuesta: verdadero
pasos:
  - "Analizar el alcance del comando `break`."
  - "Determinar si afecta a bucles externos."
explicacion: "Por defecto, `break` sale solo del bucle más interno que lo contiene. Para salir de bucles externos se requiere `break n`."
```

### 7 — Inicialización de contador en while
```
metadata:
  materia: "bash"
  tema: "bucles-en-bash"
  nivel: "basico"
  tags: ["while", "infinito"]
enunciado: "Completa la condición para crear un bucle while infinito en Bash: `while [ ____ ]; do`"
tipo: "completar"
respuesta: "1"
respuestas_validas:
  - "1"
  - "true"
  - "TRUE"
  - "True"
pasos:
  - "Identificar qué valor devuelve exit status 0 (verdadero) en Bash."
  - "Seleccionar un literal que siempre sea verdadero."
explicacion: "El literal `1` o el comando `true` siempre tienen un estado de salida de 0, lo que hace que la condición sea siempre verdadera."
```

### 8 — Operador de comparación numérica en [[ ]]
```
metadata:
  materia: "bash"
  tema: "bucles-en-bash"
  nivel: "basico"
  tags: ["[[", "aritmetica"]
enunciado: "Verdadero o Falso: Dentro de los corchetes dobles `[[ ]]`, el operador `-lt` compara si el número de la izquierda es menor que el de la derecha."
tipo: "vf"
respuesta: verdadero
pasos:
  - "Revisar la documentación de operadores aritméticos en Bash."
  - "Verificar el significado de `-lt`."
explicacion: "`-lt` significa 'less than' (menor que) y es válido dentro de `[[ ]]` para comparaciones numéricas."
```

### 9 — Bucle for con lista explícita
```
metadata:
  materia: "bash"
  tema: "bucles-en-bash"
  nivel: "basico"
  tags: ["for", "lista"]
enunciado: "Completa la lista de archivos en el siguiente bucle for: `for archivo in archivo1.txt ____ archivo3.txt; do` para incluir `archivo2.txt`."
tipo: "completar"
respuesta: "archivo2.txt"
respuestas_validas:
  - "archivo2.txt"
  - "ARCHIVO2.TXT"
pasos:
  - "Identificar el elemento faltante en la lista de palabras."
  - "Asegurar que el nombre del archivo sea una palabra válida."
explicacion: "El bucle for itera sobre cada palabra en la lista proporcionada. El elemento faltante es `archivo2.txt`."
```

### 10 — Modificador de incremento en while
```
metadata:
  materia: "bash"
  tema: "bucles-en-bash"
  nivel: "basico"
  tags: ["while", "incremento"]
enunciado: "Verdadero o Falso: En Bash, la expresión `i=$((i + 1))` dentro de un bucle while es una forma válida de incrementar la variable `i` en 1."
tipo: "vf"
respuesta: verdadero
pasos:
  - "Analizar la sintaxis de expansión aritmética `$((...))`."
  - "Confirmar que realiza la asignación."
explicacion: "La expansión aritmética `$((i + 1))` calcula el nuevo valor y se asigna a `i`, incrementándolo correctamente."
```

### 11 — Uso de `continue` para saltar iteración
```
metadata:
  materia: "bash"
  tema: "bucles-en-bash"
  nivel: "basico"
  tags: ["continue", "control"]
enunciado: "Completa el comando que se usa para saltar el resto del cuerpo del bucle actual y pasar a la siguiente iteración: `if [ $i -eq 3 ]; then ____; fi`"
tipo: "completar"
respuesta: "continue"
respuestas_validas:
  - "continue"
  - "CONTINUE"
pasos:
  - "Identificar el comando que interrumpe el flujo actual pero mantiene el bucle abierto."
  - "Diferenciarlo de `break`."
explicacion: "`continue` fuerza al bucle a evaluar la condición de nuevo y pasar a la siguiente iteración, omitiendo el código restante del cuerpo actual."
```

### 12 — Bucle for con globbing
```
metadata:
  materia: "bash"
  tema: "bucles-en-bash"
  nivel: "basico"
  tags: ["for", "globbing"]
enunciado: "Verdadero o Falso: `for f in *.log; do` itera sobre todos los archivos que terminan en `.log` en el directorio actual."
tipo: "vf"
respuesta: verdadero
pasos:
  - "Analizar el uso del comodín `*` en Bash."
  - "Confirmar la expansión de globbing."
explicacion: "El shell expande `*.log` en una lista de nombres de archivos coincidentes antes de ejecutar el bucle for."
```

### 13 - Condición de salida de bucle until
```
metadata:
  materia: "bash"
  tema: "bucles-en-bash"
  nivel: "basico"
  tags: ["until", "sintaxis"]
enunciado: "Completa la palabra clave que inicia un bucle que se ejecuta hasta que la condición sea verdadera: `____ [ $x -eq 0 ]; do`"
tipo: "completar"
respuesta: "until"
respuestas_validas:
  - "until"
  - "UNTIL"
pasos:
  - "Identificar el bucle que es el opuesto lógico al while."
  - "Recordar la palabra clave reservada."
explicacion: "El bucle `until` ejecuta el cuerpo mientras la condición es falsa, y se detiene cuando se vuelve verdadera."
```

### 14 - Operador de negación en condición
```
metadata:
  materia: "bash"
  tema: "bucles-en-bash"
  nivel: "basico"
  tags: ["while", "negacion"]
enunciado: "Verdadero o Falso: El operador `!` dentro de `[ ]` niega la condición, por ejemplo `[ ! -f archivo.txt ]` es verdadero si el archivo NO existe."
tipo: "vf"
respuesta: verdadero
pasos:
  - "Analizar el uso del operador de negación `!` en pruebas de Bash."
  - "Verificar el comportamiento con `-f`."
explicacion: "`!` invierte el valor de retorno de la prueba. Si `-f archivo.txt` devuelve falso (no existe), `[ ! -f ... ]` devuelve verdadero."
```

### 15 - Bucle for con secuencia de pasos
```
metadata:
  materia: "bash"
  tema: "bucles-en-bash"
  nivel: "basico"
  tags: ["for", "seq", "pasos"]
enunciado: "Completa el comando seq para iterar de 0 en 0 hasta 10: `for i in $(seq 0 2 ____); do`"
tipo: "completar"
respuesta: "10"
respuestas_validas:
  - "10"
  - "TEN"
pasos:
  - "Identificar el tercer argumento de `seq` que representa el límite superior."
  - "Completar el rango."
explicacion: "La sintaxis de `seq` es `seq INICIO PASO FIN`. Aquí el fin es 10."
```

### 16 - Lectura de entrada en bucle
```
metadata:
  materia: "bash"
  tema: "bucles-en-bash"
  nivel: "basico"
  tags: ["while", "read"]
enunciado: "Verdadero o Falso: El comando `read` dentro de la condición de un bucle `while read line; do` devuelve falso (false) cuando se alcanza el final del archivo o canal."
tipo: "vf"
respuesta: verdadero
pasos:
  - "Analizar el comportamiento de `read` al llegar al EOF."
  - "Confirmar el estado de salida."
explicacion: "Cuando `read` no puede leer más datos (EOF), devuelve un estado de salida distinto de 0 (falso), lo que termina el bucle."
```

### 17 - Variable de posición en bucle for
```
metadata:
  materia: "bash"
  tema: "bucles-en-bash"
  nivel: "basico"
  tags: ["for", "variable"]
enunciado: "Completa la variable de control en el bucle for: `for ____ in a b c; do echo $item; done`"
tipo: "completar"
respuesta: "item"
respuestas_validas:
  - "item"
  - "ITEM"
  - "i"
  - "I"
  - "var"
  - "VAR"
pasos:
  - "Identificar la variable que se asigna a cada elemento de la lista."
  - "Usar un nombre válido de variable."
explicacion: "La variable inmediatamente después de `for` se asigna a cada elemento de la lista en cada iteración. `item` es un nombre común y válido."
```

### 18 - Comparación de cadenas con [[ ]]
```
metadata:
  materia: "bash"
  tema: "bucles-en-bash"
  nivel: "basico"
  tags: ["[[", "strings"]
enunciado: "Verdadero o Falso: Dentro de `[[ ]]`, el operador `=` compara cadenas y es preferible a `[ ]` para evitar errores de expansión de globbing."
tipo: "vf"
respuesta: verdadero
pasos:
  - "Comparar el comportamiento de `=` en `[ ]` vs `[[ ]]`."
  - "Evaluar la seguridad contra expansión de comodines."
explicacion: "En `[[ ]]`, `=` no expande globbing, lo que lo hace más seguro y predecible para comparaciones de cadenas que `[ ]`."
```

### 19 - Bucle until con decremento
```
metadata:
  materia: "bash"
  tema: "bucles-en-bash"
  nivel: "basico"
  tags: ["until", "decremento"]
enunciado: "Completa la condición de salida para un bucle until que cuenta hacia atrás desde 5 hasta 1: `until [ $n ____ 0 ]; do`"
tipo: "completar"
respuesta: "-eq"
respuestas_validas:
  - "-eq"
  - "EQ"
pasos:
  - "Identificar el operador de igualdad numérica."
  - "Determinar cuándo debe detenerse el bucle (cuando n es 0)."
explicacion: "El bucle `until` se detiene cuando la condición es verdadera. Queremos que se detenga cuando `n` sea igual a 0, por lo tanto `-eq`."
```

### 20 - Uso de `break` con argumento
```
metadata:
  materia: "bash"
  tema: "bucles-en-bash"
  nivel: "basico"
  tags: ["break", "anidado"]
enunciado: "Verdadero o Falso: `break 2` sale de dos niveles de bucles anidados simultáneamente."
tipo: "vf"
respuesta: verdadero
pasos:
  - "Analizar la sintaxis de `break` con argumentos numéricos."
  - "Confirmar el efecto en bucles anidados."
explicacion: "El argumento numérico en `break` especifica cuántos niveles de bucles anidados deben ser rotos."
```

### 21 - Bucle for con expansión de parámetros
```
metadata:
  materia: "bash"
  tema: "bucles-en-bash"
  nivel: "basico"
  tags: ["for", "parametros"]
enunciado: "Completa la expansión para iterar sobre todos los argumentos pasados al script: `for arg in ____; do`"
tipo: "completar"
respuesta: "$@"
respuestas_validas:
  - "$@"
  - "$*"
  - "\$@"
  - "\$*"
pasos:
  - "Identificar la variable especial que contiene todos los argumentos."
  - "Usar la sintaxis correcta de expansión."
explicacion: "`$@` expande cada argumento como una palabra separada, ideal para iterar sobre todos los parámetros del script."
```

### 22 - Operador de longitud de cadena
```
metadata:
  materia: "bash"
  tema: "bucles-en-bash"
  nivel: "basico"
  tags: ["[[", "longitud"]
enunciado: "Verdadero o Falso: `[[ -z $var ]]` es verdadero si la variable `var` está vacía o no tiene longitud."
tipo: "vf"
respuesta: verdadero
pasos:
  - "Revisar el operador `-z` en pruebas de Bash."
  - "Confirmar su significado."
explicacion: "`-z` prueba si la longitud de la cadena es cero, es decir, si está vacía."
```

### 23 - Bucle while con lectura de archivo
```
metadata:
  materia: "bash"
  tema: "bucles-en-bash"
  nivel: "basico"
  tags: ["while", "redireccion"]
enunciado: "Completa la redirección de entrada para leer un archivo `datos.txt` en un bucle while: `while read line; do ... done < ____`"
tipo: "completar"
respuesta: "datos.txt"
respuestas_validas:
  - "datos.txt"
  - "DATOS.TXT"
pasos:
  - "Identificar el archivo fuente de la redirección estándar de entrada."
  - "Completar el nombre del archivo."
explicacion: "La redirección `< datos.txt` envía el contenido del archivo a la entrada estándar del bucle while."
```

### 24 - Operador de desigualdad en [[ ]]
```
metadata:
  materia: "bash"
  tema: "bucles-en-bash"
  nivel: "basico"
  tags: ["[[", "desigualdad"]
enunciado: "Verdadero o Falso: Dentro de `[[ ]]`, el operador `!=` compara si dos cadenas son diferentes."
tipo: "vf"
respuesta: verdadero
pasos:
  - "Analizar el operador `!=` en Bash."
  - "Confirmar su uso en pruebas de cadenas."
explicacion: "`!=` es el operador de desigualdad para cadenas dentro de `[[ ]]`."
```

### 25 - Bucle for con secuencia de caracteres
```
metadata:
  materia: "bash"
  tema: "bucles-en-bash"
  nivel: "basico"
  tags: ["for", "caracteres"]
enunciado: "Completa la expansión de rango de caracteres en el bucle for: `for c in {a..____}; do` para iterar de 'a' a 'c'."
tipo: "completar"
respuesta: "c"
respuestas_validas:
  - "c"
  - "C"
pasos:
  - "Identificar el límite superior de la secuencia de caracteres."
  - "Completar la expansión `{a..c}`."
explicacion: "La expansión de rango `{a..c}` genera la secuencia de caracteres 'a', 'b', 'c'."
```