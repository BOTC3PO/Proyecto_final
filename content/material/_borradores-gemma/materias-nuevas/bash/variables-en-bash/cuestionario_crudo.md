### 1 — Asignación básica
```
metadata:
  materia: "bash"
  tema: "variables-en-bash"
  nivel: "basico"
  tags: ["asignacion", "basicos"]
enunciado: ¿Cuál es la forma correcta de asignar el valor "hola" a la variable `mensaje` en Bash?
tipo: completar
respuesta: mensaje="hola"
respuestas_validas:
  - mensaje="hola"
  - mensaje = "hola"
  - mensaje='hola'
  - mensaje = 'hola'
pasos:
  - "Identificar la sintaxis de asignación sin espacios antes del signo igual."
  - "Verificar que el valor esté entre comillas para evitar expansión de palabras."
explicacion: En Bash, la asignación de variables no permite espacios alrededor del signo igual (`=`). Las comillas simples o dobles son recomendadas para valores con espacios o caracteres especiales.
```

### 2 — Expansión de variable
```
metadata:
  materia: "bash"
  tema: "variables-en-bash"
  nivel: "basico"
  tags: ["expansion", "dollar-sign"]
enunciado: Dado `x=10`, ¿qué símbolo se debe usar para obtener el valor de `x` en un comando como `echo $?` (asumiendo que `x` es la última variable)?
tipo: completar
respuesta: $x
respuestas_validas:
  - $x
  - ${x}
pasos:
  - "Reconocer que para acceder al valor de una variable se usa el signo de dólar."
  - "Escribir el nombre de la variable inmediatamente después del signo."
explicacion: El signo de dólar (`$`) precediendo al nombre de la variable (ej. `$x` o `${x}`) indica al shell que debe expandir el valor almacenado en esa variable.
```

### 3 — Variables de entorno
```
metadata:
  materia: "bash"
  tema: "variables-en-bash"
  nivel: "basico"
  tags: ["export", "entorno"]
enunciado: Para que una variable definida en el shell actual sea accesible por procesos hijos (subshells), ¿qué comando se debe ejecutar después de asignarla?
tipo: completar
respuesta: export VAR
respuestas_validas:
  - export VAR
  - export $VAR
  - export VAR=valor
  - export $VAR=valor
pasos:
  - "Identificar la necesidad de propagar la variable a procesos hijos."
  - "Usar el comando `export` seguido del nombre de la variable."
explicacion: Por defecto, las variables son locales al shell actual. El comando `export` convierte una variable shell en una variable de entorno, haciéndola visible para los procesos hijos.
```

### 4 — Lectura de entrada
```
metadata:
  materia: "bash"
  tema: "variables-en-bash"
  nivel: "basico"
  tags: ["read", "input"]
enunciado: ¿Qué comando se usa para leer una línea de entrada estándar y almacenarla en la variable `nombre`?
tipo: completar
respuesta: read nombre
respuestas_validas:
  - read nombre
  - read -p "Ingresa nombre" nombre
  - read -r nombre
  - read -p "Ingresa nombre" -r nombre
pasos:
  - "Reconocer el comando nativo para entrada interactiva."
  - "Especificar el nombre de la variable como argumento."
explicacion: El comando `read` lee desde `stdin` y asigna el valor a las variables proporcionadas como argumentos.
```

### 5 — Referencia indirecta (Bash 4.3+)
```
metadata:
  materia: "bash"
  tema: "variables-en-bash"
  nivel: "basico"
  tags: ["referencia-indirecta", "nameref"]
enunciado: Si `varname="PATH"` y `PATH="/usr/bin"`, ¿qué sintaxis se usa para imprimir el valor de la variable cuyo nombre está en `varname`?
tipo: completar
respuesta: echo "${!varname}"
respuestas_validas:
  - echo ${!varname}
  - echo "${!varname}"
  - echo ${!varname}
  - printf "%s\n" "${!varname}"
pasos:
  - "Identificar la necesidad de resolución indirecta."
  - "Usar el operador `!` dentro de llaves junto con el nombre de la variable de referencia."
explicacion: `${!varname}` realiza una expansión indirecta, utilizando el valor de `varname` como nombre de otra variable a expandir.
```

### 6 — Valor por defecto
```
metadata:
  materia: "bash"
  tema: "variables-en-bash"
  nivel: "basico"
  tags: ["default", "parameter-expansion"]
enunciado: Si `usuario=""` (vacío), ¿qué expresión devuelve "invitado" si `usuario` está vacía o no definida?
tipo: completar
respuesta: ${usuario:-invitado}
respuestas_validas:
  - ${usuario:-invitado}
  - ${usuario:-invitado}
  - ${USER:-invitado}
  - ${USER:-invitado}
pasos:
  - "Usar el operador de expansión de parámetros para valores por defecto."
  - "El operador `:-` verifica si la variable está vacía o no definida."
explicacion: `${var:-default}` devuelve `default` si `var` está vacía o no definida. A diferencia de `:-`, `:-` también considera las variables no definidas.
```

### 7 — Longitud de cadena
```
metadata:
  materia: "bash"
  tema: "variables-en-bash"
  nivel: "basico"
  tags: ["longitud", "length"]
enunciado: Dado `texto="hola"`, ¿cómo se obtiene la longitud de la cadena en una expansión?
tipo: completar
respuesta: ${#texto}
respuestas_validas:
  - ${#texto}
  - ${#texto}
  - echo ${#texto}
  - echo ${#texto}
pasos:
  - "Usar el operador `#` dentro de llaves antes del nombre de la variable."
  - "Esto devuelve el número de caracteres en el valor de la variable."
explicacion: `${#var}` devuelve la longitud de la cadena almacenada en `var`.
```

### 8 — Variable de estado de salida
```
metadata:
  materia: "bash"
  tema: "variables-en-bash"
  nivel: "basico"
  tags: ["exit-code", "dollar-sign"]
enunciado: ¿Qué variable especial contiene el código de salida (0 para éxito, distinto de 0 para error) del último comando ejecutado?
tipo: completar
respuesta: $?
respuestas_validas:
  - $?
  - echo $?
  - $exit_code
  - $?
pasos:
  - "Identificar la variable especial reservada para el código de salida."
  - "Es un solo signo de dólar seguido de un signo de interrogación."
explicacion: La variable `$?` se establece automáticamente por el shell con el valor de salida del último comando ejecutado.
```

### 9 — Variable de PID
```
metadata:
  materia: "bash"
  tema: "variables-en-bash"
  nivel: "basico"
  tags: ["pid", "process-id"]
enunciado: ¿Qué variable especial contiene el número de proceso (PID) del shell actual?
tipo: completar
respuesta: $$
respuestas_validas:
  - $$
  - echo $$
  - $PID
  - $PID
pasos:
  - "Reconocer la variable especial para el identificador del proceso actual."
  - "Consiste en dos signos de dólar consecutivos."
explicacion: La variable `$$` contiene el PID del shell o script en ejecución.
```

### 10 — Variables posicionales
```
metadata:
  materia: "bash"
  tema: "variables-en-bash"
  nivel: "basico"
  tags: ["positional-args", "argv"]
enunciado: En un script ejecutado como `script.sh arg1 arg2`, ¿qué variable contiene todos los argumentos como una lista separada por espacios?
tipo: completar
respuesta: $*
respuestas_validas:
  - $*
  - "$*"
  - ${@}
  - "${@}"
  - $@
  - "$@"
pasos:
  - "Identificar la variable que agrupa todos los argumentos posicionales."
  - `"$@"` es preferible para preservar espacios individuales, pero `$*` también los contiene separados por el primer char de IFS.
explicacion: `"$@"` expande a cada argumento como un campo separado (preservando espacios), mientras que `"$*"` los une en una sola cadena separada por el primer carácter de `IFS`. Ambos representan los argumentos.
```

### 11 — Cambio de directorio
```
metadata:
  materia: "bash"
  tema: "variables-en-bash"
  nivel: "basico"
  tags: ["cd", "directory"]
enunciado: ¿Qué variable de entorno almacena el directorio de trabajo actual del shell?
tipo: completar
respuesta: PWD
respuestas_validas:
  - PWD
  - $PWD
  - pwd
  - $pwd
pasos:
  - "Identificar la variable de entorno estándar para el directorio de trabajo."
  - "Es una variable de solo lectura en la mayoría de los shells."
explicacion: `PWD` (Present Working Directory) es una variable de entorno estándar que contiene la ruta absoluta del directorio actual.
```

### 12 — Historial
```
metadata:
  materia: "bash"
  tema: "variables-en-bash"
  nivel: "basico"
  tags: ["history", "history-file"]
enunciado: ¿Qué variable controla el nombre del archivo donde Bash guarda el historial de comandos?
tipo: completar
respuesta: HISTFILE
respuestas_validas:
  - HISTFILE
  - $HISTFILE
  - histfile
  - $histfile
pasos:
  - "Reconocer la variable de entorno para la ruta del archivo de historial."
  - "Por defecto suele ser `~/.bash_history`."
explicacion: La variable `HISTFILE` especifica el archivo donde se guardan los comandos del historial. Si no está definida, Bash usa `~/.bash_history` por defecto.
```

### 13 — Prompt principal
```
metadata:
  materia: "bash"
  tema: "variables-en-bash"
  nivel: "basico"
  tags: ["prompt", "ps1"]
enunciado: ¿Qué variable de entorno define la cadena de caracteres que se muestra como el prompt primario (antes de cada comando)?
tipo: completar
respuesta: PS1
respuestas_validas:
  - PS1
  - $PS1
  - ps1
  - $ps1
pasos:
  - "Identificar la variable de control del prompt interactivo."
  - "Contiene secuencias de escape para formato."
explicacion: `PS1` es la variable que define el prompt principal (ej. `u@h:w$ `). Se puede personalizar con secuencias como `\u` (usuario), `\h` (host), etc.
```

### 14 — Interpolación de comillas dobles
```
metadata:
  materia: "bash"
  tema: "variables-en-bash"
  nivel: "basico"
  tags: ["double-quotes", "expansion"]
enunciado: Si `x="a b"`, ¿cuál es el resultado de `echo "$x"`?
tipo: vf
respuesta: verdadero
pasos:
  - "Evaluar si las comillas dobles protegen el valor de la variable."
  - "Verificar si el espacio interno se conserva."
explicacion: Las comillas dobles `"..."` permiten la expansión de variables pero preservan los espacios y caracteres especiales dentro del valor, resultando en la salida `a b`.
```

### 15 — Interpolación de comillas simples
```
metadata:
  materia: "bash"
  tema: "variables-en-bash"
  nivel: "basico"
  tags: ["single-quotes", "literal"]
enunciado: Si `x="valor"`, ¿cuál es el resultado de `echo '$x'`?
tipo: vf
respuesta: verdadero
pasos:
  - "Evaluar si las comillas simples permiten la expansión de variables."
  - "Verificar si el literal `$x` se imprime."
explicacion: Las comillas simples `'...'` impiden toda expansión. Por lo tanto, se imprime literalmente `$x`, no su valor.
```

### 16 — Eliminación de prefijo
```
metadata:
  materia: "bash"
  tema: "variables-en-bash"
  nivel: "basico"
  tags: ["substring", "pattern-matching"]
enunciado: Dado `archivo="documentos/Informe.pdf"`, ¿qué expresión devuelve `"Informe.pdf"` eliminando el prefijo `documentos/`?
tipo: completar
respuesta: ${archivo#documentos/}
respuestas_validas:
  - ${archivo#documentos/}
  - ${archivo#*/}
  - ${archivo#*/}
  - ${archivo##*/}
pasos:
  - "Usar el operador `#` para eliminar la coincidencia más corta desde el inicio."
  - "El patrón `*/` coincide con todo hasta la última barra."
explicacion: `${var#pattern}` elimina la coincidencia más corta del patrón desde el inicio. `*/` coincide con la ruta hasta la última barra, dejando solo el nombre del archivo. `${var##*/}` también funciona para este caso específico eliminando la coincidencia más larga.
```

### 17 — Eliminación de sufijo
```
metadata:
  materia: "bash"
  tema: "variables-en-bash"
  nivel: "basico"
  tags: ["substring", "extension"]
enunciado: Dado `archivo="Informe.pdf"`, ¿qué expresión devuelve `"Informe"` eliminando la extensión `.pdf`?
tipo: completar
respuesta: ${archivo%.pdf}
respuestas_validas:
  - ${archivo%.pdf}
  - ${archivo%.pdf}
  - ${archivo%.*}
  - ${archivo%.*}
pasos:
  - "Usar el operador `%` para eliminar la coincidencia más corta desde el final."
  - "El patrón `.pdf` coincide con la extensión."
explicacion: `${var%pattern}` elimina la coincidencia más corta del patrón desde el final. `${archivo%.pdf}` elimina `.pdf`. `${archivo%.*}` elimina desde el último punto hacia atrás.
```

### 18 — Conversión a mayúsculas
```
metadata:
  materia: "bash"
  tema: "variables-en-bash"
  nivel: "basico"
  tags: ["case-conversion", "bash-4"]
enunciado: Dado `texto="hola"`, ¿qué expresión convierte el valor a mayúsculas en Bash 4+?
tipo: completar
respuesta: ${texto^^}
respuestas_validas:
  - ${texto^^}
  - ${texto^^}
  - ${texto^^UPPER}
  - ${texto^^UPPER}
pasos:
  - "Usar el operador `^^` para conversión a mayúsculas."
  - "Funciona solo en Bash 4.0 o superior."
explicacion: `${var^^}` convierte todo el valor de la variable a mayúsculas. `${var^}` convierte solo el primer carácter.
```

### 19 — Conversión a minúsculas
```
metadata:
  materia: "bash"
  tema: "variables-en-bash"
  nivel: "basico"
  tags: ["case-conversion", "bash-4"]
enunciado: Dado `Texto="HOLA"`, ¿qué expresión convierte el valor a minúsculas en Bash 4+?
tipo: completar
respuesta: ${Texto,,}
respuestas_validas:
  - ${Texto,,}
  - ${Texto,,}
  - ${Texto,,lower}
  - ${Texto,,lower}
pasos:
  - "Usar el operador `,,` para conversión a minúsculas."
  - "Funciona solo en Bash 4.0 o superior."
explicacion: `${var,,}` convierte todo el valor de la variable a minúsculas. `${var,}` convierte solo el primer carácter.
```

### 20 — Definición de array
```
metadata:
  materia: "bash"
  tema: "variables-en-bash"
  nivel: "basico"
  tags: ["arrays", "index"]
enunciado: ¿Cómo se asigna correctamente el primer elemento (`"manzana"`) al índice 0 del array `frutas`?
tipo: completar
respuesta: frutas[0]="manzana"
respuestas_validas:
  - frutas[0]="manzana"
  - frutas[0]=manzana
  - frutas=(manzana)
  - frutas=("manzana")
pasos:
  - "Usar la sintaxis de array con corchetes para índices explícitos."
  - "O asignar todos los elementos entre paréntesis."
explicacion: `frutas[0]="manzana"` asigna explícitamente al índice 0. `frutas=(manzana)` crea un array con el primer elemento en el índice 0.
```

### 21 — Acceso a elemento de array
```
metadata:
  materia: "bash"
  tema: "variables-en-bash"
  nivel: "basico"
  tags: ["arrays", "access"]
enunciado: Dado `arreglo=(a b c)`, ¿cómo se obtiene el segundo elemento (`b`)?
tipo: completar
respuesta: ${arreglo[1]}
respuestas_validas:
  - ${arreglo[1]}
  - ${arreglo[1]}
  - echo ${arreglo[1]}
  - echo ${arreglo[1]}
pasos:
  - "Usar el índice del elemento entre corchetes."
  - "Los índices son base 0."
explicacion: Los arrays en Bash son base 0. El segundo elemento está en el índice 1. Se accede con `${arreglo[1]}`.
```

### 22 — Longitud de array
```
metadata:
  materia: "bash"
  tema: "variables-en-bash"
  nivel: "basico"
  tags: ["arrays", "count"]
enunciado: Dado `arreglo=(a b c)`, ¿qué expresión devuelve el número de elementos (3)?
tipo: completar
respuesta: ${#arreglo[@]}
respuestas_validas:
  - ${#arreglo[@]}
  - ${#arreglo[*]}
  - ${#arreglo[@]}
  - ${#arreglo[*]}
pasos:
  - "Usar el operador `#` con el sufijo `[@]` o `[*]`."
  - "Esto devuelve el tamaño del array."
explicacion: `${#arreglo[@]}` devuelve el número de elementos en el array. `${#arreglo[*]}` también funciona en este contexto.
```

### 23 — Iteración sobre array
```
metadata:
  materia: "bash"
  tema: "variables-en-bash"
  nivel: "basico"
  tags: ["arrays", "loop"]
enunciado: ¿Cuál es la sintaxis correcta para iterar sobre todos los elementos de `lista` en un bucle `for`?
tipo: completar
respuesta: for i in "${lista[@]}"; do
respuestas_validas:
  - for i in "${lista[@]}"; do
  - for i in "${lista[*]}"; do
  - for i in ${lista[@]}; do
  - for i in ${lista[*]}; do
pasos:
  - "Usar `"${lista[@]}"` para preservar espacios en los elementos."
  - "La sintaxis básica del bucle `for`."
explicacion: `"${lista[@]}"` expande cada elemento del array como un argumento separado, preservando espacios internos. Es la forma más segura.
```

### 24 — Variable de usuario actual
```
metadata:
  materia: "bash"
  tema: "variables-en-bash"
  nivel: "basico"
  tags: ["env", "user"]
enunciado: ¿Qué variable de entorno estándar contiene el nombre de usuario del usuario actual?
tipo: completar
respuesta: USER
respuestas_validas:
  - USER
  - $USER
  - LOGNAME
  - $LOGNAME
  - whoami
  - $(whoami)
pasos:
  - "Identificar la variable de entorno para el nombre de usuario."
  - "También puede estar en `LOGNAME`."
explicacion: `USER` es la variable de entorno estándar en la mayoría de los sistemas Unix/Linux que contiene el nombre de inicio de sesión del usuario.
```

### 25 — Variable de directorio home
```
metadata:
  materia: "bash"
  tema: "variables-en-bash"
  nivel: "basico"
  tags: ["env", "home"]
enunciado: ¿Qué variable de entorno contiene la ruta del directorio home del usuario actual?
tipo: completar
respuesta: HOME
respuestas_validas:
  - HOME
  - $HOME
  - home
  - $home
  - ~
  - ${HOME}
pasos:
  - "Identificar la variable de entorno para el directorio home."
  - "También se puede usar la tilde `~`."
explicacion: `HOME` es la variable de entorno estándar que contiene la ruta del directorio personal del usuario. `~` es una abreviatura expandida por el shell.
```