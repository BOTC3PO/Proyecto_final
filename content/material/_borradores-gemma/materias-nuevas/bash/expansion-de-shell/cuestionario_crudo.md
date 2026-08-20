### 1 — Expansión de tilde
```
metadata:
  materia: "bash"
  tema: "expansion-de-shell"
  nivel: "basico"
  tags: ["tilde", "home", "expansion"]
enunciado: "¿Qué directorio representa el símbolo `~` en una expansión de shell estándar?"
tipo: "completar"
respuesta: "/home/usuario"
respuestas_validas:
  - "/home/usuario"
  - "/home/$USER"
  - "/home/root"
pasos:
  - "Identificar el operador de expansión de tilde."
  - "Recordar que `~` se expande al directorio home del usuario actual."
  - "Para el usuario root, es /root; para otros, /home/<usuario>. La respuesta general más común en contextos de ejemplo es /home/usuario."
explicacion: "El símbolo `~` se expande automáticamente al directorio home del usuario. Si el usuario es root, es /root; si es un usuario estándar, es /home/<nombre_usuario>."
```

### 2 — Variable de entorno HOME
```
metadata:
  materia: "bash"
  tema: "expansion-de-shell"
  nivel: "basico"
  tags: ["variables", "HOME", "expansion"]
enunciado: "La variable de entorno `$HOME` contiene la ruta al directorio personal del usuario. Verdadero o Falso."
tipo: "vf"
respuesta: verdadero
pasos:
  - "Verificar la definición de la variable HOME en el manual de bash."
  - "Confirmar que se usa para referirse al directorio home."
explicacion: "La variable `$HOME` es una variable de entorno estándar en Unix/Linux que apunta al directorio home del usuario."
```

### 3 — Parámetros posicionales
```
metadata:
  materia: "bash"
  tema: "expansion-de-shell"
  nivel: "basico"
  tags: ["positional-parameters", "$1", "scripts"]
enunciado: "En un script bash ejecutado como `./script.sh arg1 arg2`, ¿qué variable contiene el primer argumento?"
tipo: "completar"
respuesta: "$1"
respuestas_validas:
  - "$1"
  - "${1}"
pasos:
  - "Identificar la sintaxis de acceso a argumentos posicionales."
  - "El primer argumento siempre es `$1`."
explicacion: "Los argumentos posicionales se acceden mediante `$` seguido del número del argumento. El primero es `$1`."
```

### 4 — Expansión de llaves con números
```
metadata:
  materia: "bash"
  tema: "expansion-de-shell"
  nivel: "basico"
  tags: ["brace-expansion", "secuencia", "generacion"]
enunciado: "Completa el comando para generar los números 1, 2, 3: `echo {1_..._3}`"
tipo: "completar"
respuesta: ".."
respuestas_validas:
  - ".."
  - "..."
pasos:
  - "Identificar la sintaxis de brace expansion para rangos numéricos."
  - "El operador es dos puntos consecutivos `..`."
explicacion: "La brace expansion usa `..` para indicar un rango. `{1..3}` genera 1 2 3."
```

### 5 — Número de argumentos
```
metadata:
  materia: "bash"
  tema: "expansion-de-shell"
  nivel: "basico"
  tags: ["special-variables", "#", "count"]
enunciado: "¿Qué variable especial devuelve el número de argumentos posicionales pasados al script?"
tipo: "completar"
respuesta: "$#"
respuestas_validas:
  - "$#"
  - "${#}"
pasos:
  - "Consultar las variables especiales de bash."
  - "Buscar la que cuenta los parámetros."
explicacion: "La variable `$#` contiene el número de argumentos posicionales."
```

### 6 — Expansión de tilde con usuario
```
metadata:
  materia: "bash"
  tema: "expansion-de-shell"
  nivel: "basico"
  tags: ["tilde", "usuario", "home"]
enunciado: "La expansión `~root` se resuelve al directorio home del usuario root. Verdadero o Falso."
tipo: "vf"
respuesta: verdadero
pasos:
  - "Verificar si `~<usuario>` es una sintaxis válida."
  - "Confirmar que busca el home de ese usuario específico."
explicacion: "Sí, `~usuario` se expande al directorio home del usuario especificado, consultando `/etc/passwd`."
```

### 7 — Lista de opciones múltiples
```
metadata:
  materia: "bash"
  tema: "expansion-de-shell"
  nivel: "basico"
  tags: ["brace-expansion", "lista", "combinatoria"]
enunciado: "¿Qué salida produce el comando `echo {a,b}{1,2}`?"
tipo: "mc"
opciones_explicitas:
  - "a1 b2"
  - "a1 a2 b1 b2"
  - "ab 12"
  - "a1,b1 a2,b2"
respuesta: "a1 a2 b1 b2"
pasos:
  - "Analizar la expansión de llaves anidadas o concatenadas."
  - "El primer conjunto se combina con el segundo de forma cartesiana."
explicacion: "La expansión `{a,b}{1,2}` genera todas las combinaciones: a1, a2, b1, b2."
```

### 8 — Variable sin definir
```
metadata:
  materia: "bash"
  tema: "expansion-de-shell"
  nivel: "basico"
  tags: ["variables", "vacias", "comportamiento"]
enunciado: "Si la variable `X` no está definida, la expansión `${X:-default}` resulta en `default`. Verdadero o Falso."
tipo: "vf"
respuesta: verdadero
pasos:
  - "Identificar el operador `:-` en la expansión de parámetros."
  - "Verificar que asigna un valor por defecto si la variable está vacía o no definida."
explicacion: "El operador `:-` devuelve el valor por defecto si la variable no está establecida o está vacía."
```

### 9 — Nombre del script
```
metadata:
  materia: "bash"
  tema: "expansion-de-shell"
  nivel: "basico"
  tags: ["special-variables", "$0", "nombre"]
enunciado: "Completa: La variable `$0` contiene el nombre del _____ del script."
tipo: "completar"
respuesta: "comando"
respuestas_validas:
  - "comando"
  - "programa"
  - "script"
  - "archivo"
pasos:
  - "Recordar el significado de `$0`."
  - "Es el nombre dado para ejecutar el script."
explicacion: "`$0` contiene el nombre del comando o script que se está ejecutando."
```

### 10 — Expansión de globo (globbing)
```
metadata:
  materia: "bash"
  tema: "expansion-de-shell"
  nivel: "basico"
  tags: ["globbing", "wildcard", "*", "archivos"]
enunciado: "El patrón `*.txt` en una expansión de globo coincide con archivos que terminan en .txt. Verdadero o Falso."
tipo: "vf"
respuesta: verdadero
pasos:
  - "Identificar el significado del asterisco `*` en el contexto de archivos."
  - "Confirmar que representa cualquier secuencia de caracteres."
explicacion: "El asterisco `*` coincide con cero o más caracteres en el nombre de archivo."
```

### 11 — Longitud de variable
```
metadata:
  materia: "bash"
  tema: "expansion-de-shell"
  nivel: "basico"
  tags: ["parameter-expansion", "longitud", "#"]
enunciado: "Si `VAR='hola'`, ¿qué valor devuelve `${#VAR}`?"
tipo: "completar"
respuesta: "4"
respuestas_validas:
  - "4"
  - "cuatro"
pasos:
  - "Aplicar el operador `#` para obtener la longitud de la cadena."
  - "Contar los caracteres de 'hola'."
explicacion: "El operador `${#VAR}` devuelve la longitud de la cadena de la variable `VAR`."
```

### 12 — Subcadena desde el inicio
```
metadata:
  materia: "bash"
  tema: "expansion-de-shell"
  nivel: "basico"
  tags: ["parameter-expansion", "subcadena", ":", "#"]
enunciado: "Completa la sintaxis para obtener los primeros 3 caracteres de `$STR`: `${STR___0:3}`"
tipo: "completar"
respuesta: ":"
respuestas_validas:
  - ":"
  - " :"
pasos:
  - "Identificar el separador entre el índice de inicio y la longitud en la expansión de subcadena."
  - "La sintaxis es `${var:offset:length}`."
explicacion: "Se usa dos puntos `:` para separar el desplazamiento (0) de la longitud (3)."
```

### 13 — Eliminación de prefijo corto
```
metadata:
  materia: "bash"
  tema: "expansion-de-shell"
  nivel: "basico"
  tags: ["parameter-expansion", "eliminacion", "prefijo", "#"]
enunciado: "Si `FILE='ruta/archivo.txt'`, `${FILE#*/}` elimina el primer segmento hasta la primera barra. Verdadero o Falso."
tipo: "vf"
respuesta: verdadero
pasos:
  - "Analizar el operador `#` para eliminación de prefijo."
  - "Verificar que `*/` coincide con `ruta/`."
explicacion: "El operador `#` elimina el menor prefijo que coincida con el patrón `*/`, dejando `archivo.txt`."
```

### 14 — Eliminación de sufijo corto
```
metadata:
  materia: "bash"
  tema: "expansion-de-shell"
  nivel: "basico"
  tags: ["parameter-expansion", "eliminacion", "sufijo", "%"]
enunciado: "Completa: Para eliminar la extensión `.txt` de `$FILE`, se usa `${FILE______*.txt}`."
tipo: "completar"
respuesta: "%"
respuestas_validas:
  - "%"
  - " %"
pasos:
  - "Identificar el operador para eliminar el menor sufijo que coincida con un patrón."
  - "Es el signo de porcentaje `%`."
explicacion: "`%` elimina el menor sufijo que coincida con el patrón `*.txt`."
```

### 15 --- Número de proceso
```
metadata:
  materia: "bash"
  tema: "expansion-de-shell"
  nivel: "basico"
  tags: ["special-variables", "$$", "pid"]
enunciado: "La variable `$PID` contiene el ID del proceso actual. Verdadero o Falso."
tipo: "vf"
respuesta: falso
pasos:
  - "Verificar el nombre exacto de la variable que guarda el PID."
  - "La variable estándar es `$PPID` (padre) o `$BASHPID`/`$$` (actual)."
explicacion: "La variable estándar para el PID del shell actual es `$$`, no `$PID` (que suele ser una variable definida por el usuario o el script padre)."
```

### 16 --- Expansión de llaves con saltos
```
metadata:
  materia: "bash"
  tema: "expansion-de-shell"
  nivel: "basico"
  tags: ["brace-expansion", "secuencia", "paso"]
enunciado: "¿Qué genera `{0..10..2}`?"
tipo: "mc"
opciones_explicitas:
  - "0 2 4 6 8 10"
  - "0 1 2 3 4 5 6 7 8 9 10"
  - "2 4 6 8 10"
  - "0 10"
respuesta: "0 2 4 6 8 10"
pasos:
  - "Analizar la sintaxis de rango con paso `{start..end..step}`."
  - "El paso 2 incrementa de 2 en 2."
explicacion: "El tercer componente en la brace expansion define el paso. `{0..10..2}` genera pares desde 0 hasta 10."
```

### 17 --- Variable de estado de salida
```
metadata:
  materia: "bash"
  tema: "expansion-de-shell"
  nivel: "basico"
  tags: ["special-variables", "$?", "exit-code"]
enunciado: "Completa: La variable `$?` contiene el código de salida del _____ comando ejecutado."
tipo: "completar"
respuesta: "ultimo"
respuestas_validas:
  - "ultimo"
  - "último"
  - "previo"
  - "anterior"
pasos:
  - "Identificar la función de `$?`."
  - "Es el estado de salida del comando inmediatamente anterior."
explicacion: "`$?` almacena el código de retorno del último comando ejecutado."
```

### 18 --- Expansión de tilde con salto de línea
```
metadata:
  materia: "bash"
  tema: "expansion-de-shell"
  nivel: "basico"
  tags: ["tilde", "expansion", "ruta"]
enunciado: "La expansión `~` siempre se resuelve a una ruta absoluta. Verdadero o Falso."
tipo: "vf"
respuesta: verdadero
pasos:
  - "Verificar si `~` puede ser relativo."
  - "Por definición, `~` es el directorio home, que es una ruta absoluta."
explicacion: "La expansión de tilde siempre resuelve el directorio home del usuario, que es una ruta absoluta."
```

### 19 --- Parámetro por defecto con asignación
```
metadata:
  materia: "bash"
  tema: "expansion-de-shell"
  nivel: "basico"
  tags: ["parameter-expansion", "asignacion", ":-"]
enunciado: "El operador `${VAR:=valor}` asigna `valor` a `VAR` si esta está vacía y devuelve `valor`. Verdadero o Falso."
tipo: "vf"
respuesta: verdadero
pasos:
  - "Diferenciar `:-` (solo lectura) de `:=` (lectura y escritura)."
  - "Confirmar que `:=` modifica la variable."
explicacion: "El operador `:=` asigna el valor por defecto a la variable si está vacía o no definida, además de devolverlo."
```

### 20 --- Expansión de globo con corchetes
```
metadata:
  materia: "bash"
  tema: "expansion-de-shell"
  nivel: "basico"
  tags: ["globbing", "rangos", "caracteres"]
enunciado: "El patrón `[a-z]*` coincide con archivos que comienzan con cualquier letra minúscula. Verdadero o Falso."
tipo: "vf"
respuesta: verdadero
pasos:
  - "Analizar el rango `[a-z]` dentro de corchetes."
  - "Confirmar que `*` sigue a cualquier carácter."
explicacion: "Los corchetes definen un conjunto de caracteres. `[a-z]` coincide con una letra minúscula, y `*` con cualquier resto."
```

### 21 --- Número de shell padre
```
metadata:
  materia: "bash"
  tema: "expansion-de-shell"
  nivel: "basico"
  tags: ["special-variables", "$PPID", "padre"]
enunciado: "Completa: La variable `$PPID` contiene el ID del proceso _____ del shell actual."
tipo: "completar"
respuesta: "padre"
respuestas_validas:
  - "padre"
  - "parent"
  - "origen"
pasos:
  - "Identificar el significado de PPID (Parent PID)."
  - "Es el proceso que invocó al shell actual."
explicacion: "`$PPID` es el ID del proceso padre del shell bash."
```

### 22 --- Eliminación de sufijo largo
```
metadata:
  materia: "bash"
  tema: "expansion-de-shell"
  nivel: "basico"
  tags: ["parameter-expansion", "eliminacion", "sufijo", "##"]
enunciado: "Si `PATH='/usr/bin:/bin'`, `${PATH##*/}` elimina el mayor prefijo hasta la última barra. Verdadero o Falso."
tipo: "vf"
respuesta: falso
pasos:
  - "Analizar el operador `##`."
  - "Verificar si elimina prefijo o sufijo."
explicacion: "El operador `##` elimina el MAYOR prefijo que coincida con `*/`, resultando en `bin`. No elimina sufijos."
```

### 23 --- Variables de lista de argumentos
```
metadata:
  materia: "bash"
  tema: "expansion-de-shell"
  nivel: "basico"
  tags: ["special-variables", "$@", "$*", "lista"]
enunciado: "Completa: La variable `$@` expande todos los argumentos posicionales como palabras separadas."
tipo: "completar"
respuesta: "todos"
respuestas_validas:
  - "todos"
  - "todo"
  - "cada"
pasos:
  - "Identificar el alcance de `$@`."
  - "Se refiere a la totalidad de los argumentos."
explicacion: "`$@` expande cada argumento posicional como una palabra independiente."
```

### 24 --- Expansión de globo silenciosa
```
metadata:
  materia: "bash"
  tema: "expansion-de-shell"
  nivel: "basico"
  tags: ["globbing", "nocase", "case"]
enunciado: "La opción `shopt -s nocaseglob` hace que la expansión de globo ignore mayúsculas/minúsculas. Verdadero o Falso."
tipo: "vf"
respuesta: verdadero
pasos:
  - "Verificar el nombre de la opción de shell para ignorar casos."
  - "nocaseglob es la opción estándar."
explicacion: "Sí, `nocaseglob` permite que los patrones de globo coincidan sin distinguir entre mayúsculas y minúsculas."
```

### 25 --- Nombre del usuario actual
```
metadata:
  materia: "bash"
  tema: "expansion-de-shell"
  nivel: "basico"
  tags: ["special-variables", "$USER", "login"]
enunciado: "Completa: La variable `$USER` contiene el nombre de usuario del _____ actual."
tipo: "completar"
respuesta: "usuario"
respuestas_validas:
  - "usuario"
  - "login"
  - "propietario"
pasos:
  - "Identificar la variable que guarda el nombre de login."
  - "Es `$USER`."
explicacion: "`$USER` es una variable de entorno que contiene el nombre de login del usuario."
```