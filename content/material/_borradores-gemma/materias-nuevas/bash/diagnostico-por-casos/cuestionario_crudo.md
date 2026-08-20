### 1 — Diagnóstico de error de sintaxis en paréntesis
```yaml
metadata:
  materia: "bash"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["sintaxis", "comandos-compuestos", "debug"]
respuesta: "falso"
tipo: "vf"
enunciado: "Al ejecutar un script con `bash -x script.sh`, si aparece el error 'syntax error near unexpected token `done'', pero el código muestra que el `done` cierra correctamente un `for`, es seguro afirmar que el error se debe exclusivamente a un espacio faltante antes del `done` en la línea anterior."
pasos:
  - "Analizar que el error 'syntax error near unexpected token' suele indicar desbalance de paréntesis, llaves o comillas."
  - "Verificar si hay un `(`, `{` o `"` abierto sin cerrar en líneas anteriores."
  - "Considerar que un espacio faltante antes de `done` no es la única causa posible; un paréntesis mal cerrado es más común."
explicacion: "La afirmación es falsa porque, aunque un espacio faltante puede causar problemas en algunos contextos específicos (como `[[`), el error 'syntax error near unexpected token' es genérico para desbalance de estructuras. La causa más probable suele ser un paréntesis, llave o comilla sin cerrar en una línea anterior, no solo un espacio."
```

### 2 — Completar: Redirección de stderr a /dev/null
```yaml
metadata:
  materia: "bash"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["redirecciones", "stderr", "/dev/null"]
respuesta: "2>/dev/null"
respuestas_validas:
  - "2>/dev/null"
  - "2 > /dev/null"
tipo: "completar"
enunciado: "Necesitas ejecutar el comando `find /var/log -name '*.log'` pero no quieres ver ningún mensaje de 'Permission denied' en la terminal, mientras sí conservas la salida estándar (archivos encontrados). ¿Qué fragmento debes añadir al final del comando?"
pasos:
  - "Identificar que los errores de permiso van a stderr (fd 2)."
  - "Identificar que la salida estándar va a stdout (fd 1)."
  - "Seleccionar la redirección que descarta fd 2 sin afectar fd 1."
explicacion: "El fragmento correcto es `2>/dev/null`. Esto redirige el descriptor de archivo 2 (stderr) al dispositivo nulo, eliminando los errores, mientras la salida estándar (stdout) se mantiene en la terminal por defecto."
```

### 3 — MC: Variable de estado de salida de tubería
```yaml
metadata:
  materia: "bash"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["pipefail", "exit-status", "tuberias"]
opciones_explicitas:
  - "$PIPESTATUS"
  - "$?"
  - "$!"
  - "$$"
respuesta: "$PIPESTATUS"
tipo: "mc"
enunciado: "En un script bash, ejecutas: `cmd1 | cmd2 | cmd3`. Si `cmd2` falla con código 4, pero `cmd3` tiene éxito (código 0), ¿qué variable te permite recuperar el código de salida específico de `cmd2` después de que termina la tubería?"
pasos:
  - "Recordar que `$?` solo contiene el estado de la última tubería (cmd3)."
  - "Identificar que `$!` es el PID del último proceso en segundo plano."
  - "Identificar que `$$` es el PID del script actual."
  - "Saber que `PIPESTATUS` es un array que guarda los estados de cada comando en la tubería."
explicacion: "La variable `$PIPESTATUS` es un array que almacena los códigos de salida de todos los comandos en la tubería más reciente. `PIPESTATUS[1]` contendría el código de `cmd2`."
```

### 4 — Completar: Uso de `set -e` con tuberías
```yaml
metadata:
  materia: "bash"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["set-e", "errexit", "tuberias"]
respuesta: "set -o pipefail"
respuestas_validas:
  - "set -o pipefail"
  - "set -o pipefail;"
tipo: "completar"
enunciado: "Tienes un script con `set -e` (salir en error). Ejecutas `command_a | command_b`. Si `command_a` falla, el script CONTINÚA ejecutándose porque bash solo verifica el estado de `command_b`. Para que el script se detenga si CUALQUIERA de los comandos en la tubería falla, ¿qué opción de `set` debes activar?"
pasos:
  - "Entender que por defecto, bash ignora errores en comandos no finales de una tubería con `set -e`."
  - "Buscar la opción que extiende la detección de errores a toda la tubería."
  - "Recordar la sintaxis `set -o <opcion>`."
explicacion: "La opción `pipefail` hace que el valor de retorno de una tubería sea el del último comando que salió con un estado distinto de cero, o cero si todos tuvieron éxito. Actívese con `set -o pipefail`."
```

### 5 — VF: Parámetros posicionales y shift
```yaml
metadata:
  materia: "bash"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["parametros", "shift", "variables"]
respuesta: "verdadero"
tipo: "vf"
enunciado: "Si ejecutas `./script.sh arg1 arg2 arg3` y dentro del script ejecutas `shift 2`, después de esa ejecución, la variable `$1` contendrá `arg3`."
pasos:
  - "Simular el desplazamiento de parámetros."
  - "Inicial: $1=arg1, $2=arg2, $3=arg3."
  - "Shift 1: $1=arg2, $2=arg3."
  - "Shift 2: $1=arg3."
explicacion: "Es verdadero. `shift 2` elimina los dos primeros parámetros, moviendo `arg2` al índice 1 y `arg3` al índice 2. Por lo tanto, `$1` pasa a ser `arg3`."
```

### 6 — MC: Diagnóstico de 'command not found' en rutas relativas
```yaml
metadata:
  materia: "bash"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["PATH", "rutas", "ejecucion"]
opciones_explicitas:
  - "Ejecutar `export PATH=$PATH:.`"
  - "Ejecutar `./mi_script`"
  - "Ejecutar `bash mi_script`"
  - "Agregar `mi_script` a `/usr/bin`"
respuesta: "Ejecutar `./mi_script`"
tipo: "mc"
enunciado: "Estás en el directorio `/home/user` donde existe un archivo ejecutable `mi_script`. Al escribir `mi_script` en la terminal, recibes 'command not found'. ¿Cuál es la forma CORRECTA y segura de ejecutarlo desde la terminal actual sin modificar permanentemente el entorno?"
pasos:
  - "Analizar por qué falla: el directorio actual no suele estar en `$PATH` por seguridad."
  - "Evaluar si modificar `$PATH` temporalmente es buena práctica (generalmente no para directorio actual)."
  - "Identificar que usar la ruta explícita relativa (`./`) es el método estándar."
explicacion: "Por defecto, el directorio actual (`.`) no está en `$PATH` para prevenir ejecución accidental de malware. Debes invocarlo explícitamente con `./mi_script`."
```

### 7 — Completar: Uso de `trap` para limpieza
```yaml
metadata:
  materia: "bash"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["trap", "limpieza", "senales"]
respuesta: "trap 'rm -f /tmp/myfile.tmp' EXIT"
respuestas_validas:
  - "trap 'rm -f /tmp/myfile.tmp' EXIT"
  - "trap \"rm -f /tmp/myfile.tmp\" EXIT"
tipo: "completar"
enunciado: "Necesitas asegurar que un archivo temporal `/tmp/myfile.tmp` se elimine siempre que el script termine, ya sea por éxito o por error. ¿Qué comando de `trap` debes usar?"
pasos:
  - "Identificar la señal que indica el final del script, independientemente del motivo."
  - "La señal es `EXIT`."
  - "Construir la sintaxis `trap 'comando' SENAIAL`."
explicacion: "La señal `EXIT` se dispara cuando el script termina. El comando `trap 'rm -f /tmp/myfile.tmp' EXIT` garantiza la limpieza del archivo temporal."
```

### 8 — VF: Expansión de variables entre comillas dobles
```yaml
metadata:
  materia: "bash"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["comillas", "expansion", "globbing"]
respuesta: "falso"
tipo: "vf"
enunciado: "Si la variable `$dir` contiene el valor `~/documentos`, al ejecutar `ls "$dir"` el shell expandirá automáticamente `~` al directorio home del usuario actual."
pasos:
  - "Recordar el orden de expansión del shell."
  - "La expansión de tilde (`~`) ocurre ANTES de la expansión de variables (`$`)."
  - "Si `~` está dentro de una variable, ya no es un carácter especial de expansión de home."
explicacion: "Es falso. La expansión de `~` solo ocurre si es el primer carácter de la palabra y no está entre comillas. Si `~` está dentro de una variable `$dir`, `ls "$dir"` intentará listar literalmente el archivo `~/documentos` en el directorio actual, no en el home."
```

### 9 — MC: Depuración de 'unbound variable'
```yaml
metadata:
  materia: "bash"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["set-u", "nounset", "variables"]
opciones_explicitas:
  - "Ejecutar `set +u`"
  - "Ejecutar `set -u`"
  - "Usar `${var:-}`"
  - "Ambas A y C son correctas para evitar el error"
respuesta: "Ambas A y C son correctas para evitar el error"
tipo: "mc"
enunciado: "Un script con `set -u` (nounset) falla con 'unbound variable' al intentar usar `$var` que no ha sido inicializada. ¿Qué estrategias SON válidas para solucionar esto?"
pasos:
  - "Evaluar `set +u`: desactiva la verificación de variables no definidas (solución temporal/bruta)."
  - "Evaluar `${var:-}`: usa un valor por defecto vacío si `var` está sin definir (solución robusta)."
  - "Confirmar que ambas previenen el error de salida."
explicacion: "Puedes desactivar la verificación con `set +u` (menos recomendado) o usar la expansión `${var:-}` para proporcionar un valor por defecto si la variable no está establecida."
```

### 10 — Completar: Uso de `grep -P` para regex avanzada
```yaml
metadata:
  materia: "bash"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["grep", "regex", "perl"]
respuesta: "grep -P"
respuestas_validas:
  - "grep -P"
  - "grep -P "
tipo: "completar"
enunciado: "Necesitas buscar patrones que usen grupos de captura y backreferences (ej. `(\w+)\s+\1`) en un archivo de texto. `grep -E` no soporta backreferences. ¿Qué bandera de `grep` habilita el motor de regex de Perl (PCRE) necesario para esto?"
pasos:
  - "Identificar la limitación de `grep -E` (ERE estándar)."
  - "Saber que el soporte para Perl Compatible Regular Expressions requiere una bandera específica."
  - "La bandera es `-P`."
explicacion: "La bandera `-P` (o `--perl-regexp`) activa el motor PCRE de `grep`, permitiendo el uso de backreferences como `\1`."
```

### 11 — VF: Comportamiento de `cd` en subshells
```yaml
metadata:
  materia: "bash"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["cd", "subshell", "entorno"]
respuesta: "verdadero"
tipo: "vf"
enunciado: "Si ejecutas `(cd /tmp && pwd)` en un script, el directorio de trabajo del script principal CAMBIA permanentemente a `/tmp` después de que termina el paréntesis."
pasos:
  - "Identificar que los paréntesis `()` crean un subshell."
  - "Recordar que las variables y el directorio de trabajo de un subshell son copias locales."
  - "Concluir que los cambios no se propagan al padre."
explicacion: "Es verdadero. Los paréntesis `()` ejecutan el comando en un subproceso (subshell). Los cambios de directorio (`cd`) en el subshell no afectan al shell padre."
```

### 12 — MC: Diagnóstico de 'Argument list too long'
```yaml
metadata:
  materia: "bash"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["arg-max", "limites", "xargs"]
opciones_explicitas:
  - "Usar `xargs` para dividir la entrada"
  - "Aumentar el límite de kernel `ARG_MAX`"
  - "Escribir el script en C"
  - "Usar `find ... -exec`"
respuesta: "Usar `xargs` para dividir la entrada"
tipo: "mc"
enunciado: "Estás intentando borrar miles de archivos con `rm $(find /dir -name '*.tmp')` y recibes 'Argument list too long'. ¿Cuál es la solución más común y portable en bash para procesar listas largas de archivos?"
pasos:
  - "Entender que el límite es del kernel, no del script."
  - "Evaluar si aumentar `ARG_MAX` es viable (requiere recompilación o reinicio, no práctico)."
  - "Identificar que `xargs` divide la entrada en lotes manejables."
explicacion: "La solución estándar es usar `find /dir -name '*.tmp' -print0 | xargs -0 rm`. `xargs` maneja automáticamente la división de argumentos para no exceder `ARG_MAX`."
```

### 13 — Completar: Uso de `read` con delimiter
```yaml
metadata:
  materia: "bash"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["read", "delimiter", "IFS"]
respuesta: "IFS=: read"
respuestas_validas:
  - "IFS=: read"
  - "IFS=: read -r"
tipo: "completar"
enunciado: "Tienes una línea `usuario:password:uid` y quieres leer `usuario` en la variable `user` y `password` en `pass`. El delimitador es dos puntos (`:`). ¿Cómo debes configurar `IFS` para el comando `read`?"
pasos:
  - "Recordar que `IFS` controla los caracteres de separación."
  - "Definir `IFS` temporalmente para el comando."
  - "Sintaxis: `IFS=delim read var1 var2`."
explicacion: "Se debe exportar `IFS` solo para el comando `read`: `IFS=: read -r user pass < file`."
```

### 14 — VF: Operador `||` vs `&&`
```yaml
metadata:
  materia: "bash"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["logica", "short-circuit", "operadores"]
respuesta: "falso"
tipo: "vf"
enunciado: "En la expresión `cmd1 && cmd2 || cmd3`, si `cmd1` tiene éxito (exit 0), `cmd3` se ejecutará sí o sí."
pasos:
  - "Analizar la evaluación de `cmd1 && cmd2`."
  - "Si `cmd1` es true, se evalúa `cmd2`."
  - "Si `cmd2` es true, el resultado de la parte izquierda es true, por lo que `cmd3` (tras `||`) NO se ejecuta."
explicacion: "Es falso. Si `cmd1` es exitoso, se ejecuta `cmd2`. Si `cmd2` también es exitoso, la condición para `cmd3` (que es `||`) es falsa, por lo que `cmd3` NO se ejecuta."
```

### 15 — MC: Depuración de scripts con `bash -x`
```yaml
metadata:
  materia: "bash"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["debug", "xtrace", "bash-x"]
opciones_explicitas:
  - "Verá la expansión completa de variables y comandos"
  - "Solo mostrará errores de sintaxis"
  - "Ejecutará el script en modo silencioso"
  - "Detendrá el script en cada línea"
respuesta: "Verá la expansión completa de variables y comandos"
tipo: "mc"
enunciado: "Al ejecutar un script con `bash -x script.sh`, ¿qué información específica proporciona esta bandera que no da `bash -n`?"
pasos:
  - "Diferenciar `bash -n` (no ejecutar, solo leer) de `bash -x` (ejecutar con trace)."
  - "Identificar que `-x` imprime cada comando después de la expansión pero antes de la ejecución."
explicacion: "`bash -x` (xtrace) imprime la versión expandida de cada comando a medida que se ejecuta, permitiendo ver el valor real de las variables y rutas en tiempo de ejecución."
```

### 16 — Completar: Uso de `declare -A` para arrays asociativos
```yaml
metadata:
  materia: "bash"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["arrays", "asociativos", "declare"]
respuesta: "declare -A"
respuestas_validas:
  - "declare -A"
  - "declare -A "
tipo: "completar"
enunciado: "En Bash 4+, necesitas crear un array asociativo (clave-valor) llamado `config`. ¿Qué comando de declaración inicializas para permitir que `config[key]=value` funcione correctamente?"
pasos:
  - "Recordar que los arrays asociativos requieren declaración explícita en bash."
  - "La bandera para arrays asociativos es `-A`."
  - "El comando es `declare` o `local`."
explicacion: "Se debe usar `declare -A config` para habilitar el modo asociativo del array."
```

### 17 — VF: Expansión de llaves `{1..5}`
```yaml
metadata:
  materia: "bash"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["brace-expansion", "rangos"]
respuesta: "verdadero"
tipo: "vf"
enunciado: "El comando `echo {1..5}` imprimirá exactamente `1 2 3 4 5`."
pasos:
  - "Verificar la sintaxis de brace expansion."
  - "Confirmar que el rango inclusivo `{start..end}` genera la secuencia."
explicacion: "Es verdadero. `echo {1..5}` expande las llaves a la secuencia numérica separada por espacios."
```

### 18 — MC: Diagnóstico de 'permission denied' al ejecutar script
```yaml
metadata:
  materia: "bash"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["chmod", "permisos", "ejecucion"]
opciones_explicitas:
  - "chmod +x script.sh"
  - "chmod 644 script.sh"
  - "chown root script.sh"
  - "mv script.sh /bin"
respuesta: "chmod +x script.sh"
tipo: "mc"
enunciado: "Descargas un script `install.sh` de internet. Al intentar ejecutarlo con `./install.sh`, obtienes 'Permission denied'. ¿Cuál es el primer paso lógico para solucionar esto (asumiendo que el archivo no está corrupto)?"
pasos:
  - "Identificar que 'Permission denied' en ejecución indica falta de bit de ejecutable."
  - "Seleccionar el comando que añade el bit de ejecutable."
explicacion: "Los scripts descargados suelen tener permisos de lectura/escritura (644). Se necesita el bit de ejecutable: `chmod +x install.sh`."
```

### 19 — Completar: Uso de `printf` para formateo
```yaml
metadata:
  materia: "bash"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["printf", "formato", "string"]
respuesta: "printf '%s\n' \"$var\""
respuestas_validas:
  - "printf '%s\n' \"$var\""
  - "printf '%s\\n' \"$var\""
tipo: "completar"
enunciado: "Quieres imprimir el contenido de la variable `$var` asegurando que se interprete literalmente (sin expansión de secuencias de escape como `\n` si la variable contiene una barra invertida) y añadiendo un salto de línea. ¿Qué formato de `printf` usas?"
pasos:
  - "Seleccionar el especificador de formato para cadena literal: `%s`."
  - "Añadir el salto de línea explícito en el formato: `\n`."
  - "Pasar la variable como argumento, no como parte del formato."
explicacion: "Usar `printf '%s\n' "$var"` es seguro porque `%s` imprime la cadena tal cual, evitando que `echo` interprete secuencias de escape o que `printf` falle si la variable contiene `%`."
```

### 20 — VF: Operador `<<` vs `<<<`
```yaml
metadata:
  materia: "bash"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["heredoc", "here-string", "redireccion"]
respuesta: "verdadero"
tipo: "vf"
enunciado: "El operador `<<<` (here-string) es equivalente a usar `echo "cadena" | comando` pero con menos sobrecarga de procesos."
pasos:
  - "Comparar la implementación de `here-string` vs tubería con `echo`."
  - "Confirmar que `<<<` pasa la cadena como stdin del comando."
explicacion: "Es verdadero. `<<<` es una extensión de bash que pasa la cadena como entrada estándar al comando, evitando la creación de un proceso subshell para `echo`."
```

### 21 — MC: Depuración de 'command not found' en variables
```yaml
metadata:
  materia: "bash"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["eval", "comando-dinamico", "seguridad"]
opciones_explicitas:
  - "Usar `eval \"$cmd\"`"
  - "Usar `bash -c \"$cmd\"`"
  - "Usar `command $cmd`"
  - "Usar `eval $cmd` (sin comillas)"
respuesta: "Usar `bash -c \"$cmd\"`"
tipo: "mc"
enunciado: "Tienes una variable `cmd="ls -l"` que contiene un comando complejo con argumentos. Quieres ejecutar el contenido de la variable como un comando. ¿Cuál es la forma MÁS SEGURA y recomendada para evitar riesgos de inyección de código?"
pasos:
  - "Evaluar `eval`: peligroso si la variable contiene caracteres especiales."
  - "Evaluar `bash -c`: ejecuta en un nuevo shell, pero aún así puede ser riesgoso si la variable no está sanitizada."
  - "Sin embargo, entre las opciones dadas, `bash -c` es preferible a `eval` crudo para comandos complejos, aunque la mejor práctica es evitar construir comandos dinámicamente. En el contexto de la pregunta, se busca la alternativa a `eval`."
explicacion: "Aunque construir comandos dinámicamente es generalmente una mala práctica, `bash -c \"$cmd\"` es más seguro que `eval $cmd` porque aísla la ejecución en un nuevo shell y requiere comillas para evitar la expansión prematura. `eval` es el más peligroso."
```

### 22 — Completar: Uso de `trap` con señal `INT`
```yaml
metadata:
  materia: "bash"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["trap", "ctrl-c", "senales"]
respuesta: "trap 'echo Interrupted; exit 1' INT"
respuestas_validas:
  - "trap 'echo Interrupted; exit 1' INT"
  - "trap \"echo Interrupted; exit 1\" INT"
tipo: "completar"
enunciado: "Quieres manejar la interrupción del usuario (Ctrl+C) en tu script para limpiar recursos antes de salir. ¿Qué señal debes capturar con `trap`?"
pasos:
  - "Identificar la señal enviada por SIGINT (Ctrl+C)."
  - "La señal es `INT`."
  - "Construir el comando de trap."
explicacion: "La señal `INT` corresponde a la interrupción. El comando `trap 'comando' INT` captura esta señal."
```

### 23 — VF: Operador `[[` vs `[`
```yaml
metadata:
  materia: "bash"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["test", "bash-extensions", "comparacion"]
respuesta: "verdadero"
tipo: "vf"
enunciado: "El operador `[[` es una palabra clave de bash que soporta expresiones regulares con `=~` y no requiere comillas dobles alrededor de las variables para evitar errores de sintaxis por espacios."
pasos:
  - "Comparar `[` (comando externo o builtin antiguo) con `[[` (keyword de bash)."
  - "Verificar soporte de regex y manejo de espacios."
explicacion: "Es verdadero. `[[` es una extensión de bash (y ksh/zsh) que es más segura y potente que `[` (test), permitiendo `=~` y manejando espacios en variables sin necesidad de comillas."
```

### 24 — MC: Diagnóstico de 'bad substitution'
```yaml
metadata:
  materia: "bash"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["substitution", "parametros", "errores"]
opciones_explicitas:
  - "Verificar la versión de bash"
  - "Usar comillas simples"
  - "Cambiar a sh"
  - "Eliminar la variable"
respuesta: "Verificar la versión de bash"
tipo: "mc"
enunciado: "Intentas usar `${var:-default}` pero recibes 'bad substitution'. Sabes que la sintaxis es correcta. ¿Cuál es la causa más probable?"
pasos:
  - "Identificar que `${var:-}` es una expansión estándar."
  - "Considerar que versiones muy antiguas de bash (pre-2.05b) no la soportaban."
  - "Concluir que la versión es el culpable."
explicacion: "El error 'bad substitution' para esta sintaxis común suele indicar que se está ejecutando el script con una versión de bash muy antigua o con `sh` (que a menudo es dash en Linux) en lugar de bash."
```

### 25 — Completar: Uso de `mapfile` para leer líneas
```yaml
metadata:
  materia: "bash"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["mapfile", "readarray", "arrays"]
respuesta: "mapfile -t"
respuestas_validas:
  - "mapfile -t"
  - "mapfile -t "
tipo: "completar"
enunciado: "Quieres leer el contenido de un archivo `lista.txt` línea por línea en un array de bash, eliminando los caracteres de nueva línea finales. ¿Qué bandera de `mapfile` (o `readarray`) usas?"
pasos:
  - "Recordar que `mapfile` lee líneas en un array."
  - "Identificar la bandera para eliminar el delimitador (nueva línea)."
  - "La bandera es `-t` (trim)."
explicacion: "La bandera `-t` elimina el delimitador de línea (generalmente `\n`) de cada elemento del array."
```