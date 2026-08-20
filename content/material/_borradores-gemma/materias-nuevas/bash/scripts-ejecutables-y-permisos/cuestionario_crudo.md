### 1 — Verificación de ejecutabilidad antes de llamar
```
metadata:
  materia: "bash"
  tema: "scripts-ejecutables-y-permisos"
  nivel: "intermedio"
  tags: ["test-permiso", "x"]
respuesta: verdadero
tipo: vf
enunciado:
  - "En Bash, el operador de prueba `-x archivo` devuelve exitoso (true) si y solo si el archivo existe y su permiso de ejecución está activado para el usuario actual, independientemente de si el archivo es un script o un binario."
pasos:
  - "Verificar la documentación de Bash sobre los operadores de prueba de archivos."
  - "Confirmar que `-x` comprueba específicamente el bit de ejecución."
explicacion: "El operador `-x` verifica explícitamente el permiso de ejecución. Si el bit 'x' está seteado para el usuario que ejecuta el comando, la prueba es verdadera."
```

### 2 — Completar shebang para Python
```
metadata:
  materia: "bash"
  tema: "scripts-ejecutables-y-permisos"
  nivel: "intermedio"
  tags: ["shebang", "python"]
respuesta: "#!/usr/bin/env python3"
respuestas_validas:
  - "#!/usr/bin/env python3"
  - "#! /usr/bin/env python3"
tipo: completar
enunciado:
  - "Para asegurar la portabilidad de un script Python 3 en diferentes sistemas Unix, se recomienda usar `env` en la primera línea. Escriba la línea shebang completa que debe ir al inicio del archivo."
pasos:
  - "Identificar la necesidad de portabilidad en la ubicación del interprete."
  - "Recordar que `env` busca el interprete en el PATH."
explicacion: "Usar `#!/usr/bin/env python3` permite que el script encuentre `python3` en cualquier directorio listado en la variable de entorno PATH, evitando errores si no está en `/usr/bin`."
```

### 3 — Comportamiento de `chmod +x` en directorio
```
metadata:
  materia: "bash"
  tema: "scripts-ejecutables-y-permisos"
  nivel: "intermedio"
  tags: ["chmod", "directorios"]
respuesta: falso
tipo: vf
enunciado:
  - "Ejecutar `chmod +x /ruta/al/directorio` convierte todos los archivos dentro de ese directorio en ejecutables automáticamente."
pasos:
  - "Analizar qué afecta el permiso de ejecución en un directorio."
  - "Recordar la diferencia entre permisos de directorio y de archivo."
explicacion: "El permiso de ejecución en un directorio (`x`) permite listar su contenido y acceder a los archivos dentro de él, pero NO cambia los permisos de los archivos contenidos. Para hacer ejecutables los archivos, se debe aplicar recursivamente con `-R`."
```

### 4 — Opción de `chmod` para owner y group
```
metadata:
  materia: "bash"
  tema: "scripts-ejecutables-y-permisos"
  nivel: "intermedio"
  tags: ["chmod", "simbolico"]
respuesta: "u+x,g+x"
respuestas_validas:
  - "u+x,g+x"
  - "u+x g+x"
  - "ug+x"
tipo: completar
enunciado:
  - "Desea añadir el permiso de ejecución únicamente al dueño y al grupo de un script llamado `backup.sh`, sin tocar otros permisos. Escriba la expresión simbólica exacta para pasar como argumento a `chmod`."
pasos:
  - "Identificar los usuarios objetivo: user (u) y group (g)."
  - "Identificar la operación: añadir ( + ) y permiso: ejecución ( x )."
explicacion: "La sintaxis simbólica permite especificar clases de usuario (u, g, o) y la operación (+, -, =). `u+x,g+x` añade la ejecución a ambos."
```

### 5 — Diagnóstico de error de interpretación
```
metadata:
  materia: "bash"
  tema: "scripts-ejecutables-y-permisos"
  nivel: "intermedio"
  tags: ["error", "interpretation"]
respuesta: "interpreter not found"
opciones_explicitas:
  - "permission denied"
  - "interpreter not found"
  - "bad file descriptor"
  - "segmentation fault"
tipo: mc
enunciado:
  - "Si tiene un script `script.sh` con permisos de ejecución correctos, pero la primera línea (shebang) apunta a `/usr/bin/fake_interpreter` que no existe en el sistema, ¿qué error devuelve típicamente el sistema al intentar ejecutar `./script.sh`?"
pasos:
  - "Analizar el flujo de ejecución: el kernel lee el shebang."
  - "Determinar qué sucede si el binario especificado no existe."
explicacion: "El kernel intenta ejecutar el binario indicado en el shebang. Si no lo encuentra, devuelve `Exec format error` o más comúnmente en la salida del shell `: No such file or directory` o `interpreter not found`, no un error de permisos."
```

### 6 — Variable de entorno para debug de shebang
```
metadata:
  materia: "bash"
  tema: "scripts-ejecutables-y-permisos"
  nivel: "intermedio"
  tags: ["debug", "env"]
respuesta: "BASH_XTRACEFD"
opciones_explicitas:
  - "BASH_XTRACEFD"
  - "DEBUGGER"
  - "TRACE_LEVEL"
  - "SHEBANG_LOG"
tipo: mc
enunciado:
  - "¿Qué variable de entorno de Bash se puede usar para redirigir la salida de trazado (`set -x`) a un descriptor de archivo específico, útil para debugear scripts ejecutables?"
pasos:
  - "Recordar las variables de entorno especiales de Bash para depuración."
  - "Identificar la variable que controla el flujo de traza."
explicacion: "La variable `BASH_XTRACEFD` permite especificar a dónde se envía la salida de `set -x`. Si no se establece, va a stderr."
```

### 7 — Permisos mínimos para ejecutar un script interpretado
```
metadata:
  materia: "bash"
  tema: "scripts-ejecutables-y-permisos"
  nivel: "intermedio"
  tags: ["permisos", "lectura"]
respuesta: "lectura"
opciones_explicitas:
  - "ejecución"
  - "lectura"
  - "escritura"
  - "ninguno"
tipo: mc
enunciado:
  - "Para un script interpretado (como Bash, Python, Perl), ¿qué permiso es estrictamente necesario sobre el archivo para que el intérprete pueda leer el código y ejecutarlo, incluso si el archivo no tiene el bit de ejecución (`x`) seteado?"
pasos:
  - "Analizar cómo los shells invocan scripts: `bash script.sh`."
  - "Determinar qué necesita leer el shell para procesar el archivo."
explicacion: "Cuando se ejecuta un script pasándolo como argumento (`bash script.sh`), el shell necesita leer el contenido. El bit de ejecución (`x`) solo es necesario si se ejecuta directamente (`./script.sh`). Por tanto, el permiso de lectura (`r`) es el mínimo crítico para el contenido."
```

### 8 — Completar comando para ver permisos octales
```
metadata:
  materia: "bash"
  tema: "scripts-ejecutables-y-permisos"
  nivel: "intermedio"
  tags: ["ls", "octal"]
respuesta: "-c '%a'"
respuestas_validas:
  - "-c '%a'"
  - "-c \"%a\""
tipo: completar
enunciado:
  - "Quiere listar los permisos de un script `app.sh` en formato numérico octal (ej. `755`) usando `ls`. Complete la opción de formateo: `ls -c '%a' app.sh`."
pasos:
  - "Identificar la opción de formato de `ls` para permisos octales."
  - "Recordar el especificador de formato para permisos."
explicacion: "El especificador `%a` en la opción `-c` (formato de salida) de `ls` imprime los permisos en formato octal (ej. `755`). También se puede usar `stat -c '%a'`."
```

### 9 — Efecto de `set -e` en subshell
```
metadata:
  materia: "bash"
  tema: "scripts-ejecutables-y-permisos"
  nivel: "intermedio"
  tags: ["set-e", "subshell"]
respuesta: "falso"
tipo: vf
enunciado:
  - "Si un script principal tiene `set -e` activado y ejecuta un comando dentro de una subshell `(comando_que_falla)`, el script principal se detendrá inmediatamente si `comando_que_falla` falla, sin importar el contexto."
pasos:
  - "Analizar el alcance de `set -e`."
  - "Verificar si `set -e` se propaga a subshells creadas con paréntesis."
explicacion: "Por defecto, `set -e` NO se propaga a subshells creadas con paréntesis `( )` en Bash, a menos que se use `set -o errtrace` (o `set -E`). Por lo tanto, la afirmación es falsa en el comportamiento estándar."
```

### 10 — Opción de `chmod` para bit sticky en directorio compartido
```
metadata:
  materia: "bash"
  tema: "scripts-ejecutables-y-permisos"
  nivel: "intermedio"
  tags: ["chmod", "sticky-bit"]
respuesta: "1777"
respuestas_validas:
  - "1777"
  - "1777"
tipo: completar
enunciado:
  - "Un directorio `/tmp/shared` debe tener permisos `rwxrwxrwx` pero con el bit sticky activo para que los usuarios solo puedan borrar sus propios archivos. Escriba el código octal completo de 4 dígitos para `chmod`."
pasos:
  - "Identificar los permisos base: `rwxrwxrwx` = 777."
  - "Identificar el bit sticky: 1 en la posición más significativa."
explicacion: "El bit sticky se representa con el dígito `1` en la posición de los特殊 permisos (milares). `1777` combina el bit sticky con permisos totales."
```

### 11 — Diagnóstico de "Permission denied" en shebang
```
metadata:
  materia: "bash"
  tema: "scripts-ejecutables-y-permisos"
  nivel: "intermedio"
  tags: ["error", "permission"]
respuesta: "permission denied"
opciones_explicitas:
  - "permission denied"
  - "argument list too long"
  - "cannot execute"
  - "file too large"
tipo: mc
enunciado:
  - "Si intenta ejecutar `./script.sh` y el archivo tiene permisos `644` (sin bit de ejecución para el owner), ¿qué mensaje de error devuelve el kernel/shell típicamente?"
pasos:
  - "Analizar el flujo de ejecución directa de un archivo."
  - "Identificar la verificación de permisos que falla."
explicacion: "Si el bit de ejecución no está activo para el usuario que intenta ejecutarlo, el kernel rechaza la operación con `Permission denied` (o `EACCES`)."
```

### 12 — Completar `umask` para permisos por defecto
```
metadata:
  materia: "bash"
  tema: "scripts-ejecutables-y-permisos"
  nivel: "intermedio"
  tags: ["umask", "default"]
respuesta: "0022"
respuestas_validas:
  - "0022"
  - "022"
  - "22"
tipo: completar
enunciado:
  - "Para asegurar que los scripts creados por un usuario tengan permisos `755` (owner rwx, group r-x, other r-x) por defecto, y los directorios `755`, ¿qué valor de `umask` debe establecerse? (Nota: los archivos normalmente se crean con `666` base y directorios con `777`. Para scripts ejecutables, a menudo se usa `0022` y luego se añade `x` manualmente o se usa `install`, pero el umask estándar de seguridad es `0022`)."
pasos:
  - "Calcular el umask necesario para obtener `755` en directorios (`777 - 022 = 755`)."
  - "Verificar el efecto en archivos (`666 - 022 = 644`). Nota: para scripts, `644` es común y luego se hace `chmod +x`."
explicacion: "Un `umask` de `0022` quita el permiso de escritura para group y other. Para directorios `777 - 022 = 755`. Para archivos `666 - 022 = 644`. Es el estándar de seguridad."
```

### 13 — Variable para verificar shell actual
```
metadata:
  materia: "bash"
  tema: "scripts-ejecutables-y-permisos"
  nivel: "intermedio"
  tags: ["variables", "shell"]
respuesta: "BASH_VERSION"
opciones_explicitas:
  - "BASH_VERSION"
  - "SHELL"
  - "USER"
  - "PATH"
tipo: mc
enunciado:
  - "Dentro de un script, ¿qué variable de entorno contiene la versión exacta de Bash que se está ejecutando, útil para verificar compatibilidad de sintaxis avanzada?"
pasos:
  - "Identificar variables de entorno específicas de Bash."
  - "Distinguir entre `SHELL` (ruta del ejecutable) y `BASH_VERSION`."
explicacion: "La variable `BASH_VERSION` contiene la versión de Bash (ej. `5.1.16(1)-release`). `SHELL` contiene la ruta al ejecutable del shell del usuario, no la versión."
```

### 14 — Efecto de `chmod u+s`
```
metadata:
  materia: "bash"
  tema: "scripts-ejecutables-y-permisos"
  nivel: "intermedio"
  tags: ["setuid", "chmod"]
respuesta: "setuid"
opciones_explicitas:
  - "setuid"
  - "setgid"
  - "sticky bit"
  - "noexec"
tipo: mc
enunciado:
  - "Al aplicar `chmod u+s script.sh`, ¿qué bit especial se activa y qué implica para la ejecución del script?"
pasos:
  - "Identificar la notación simbólica `u+s`."
  - "Explicar el significado del bit SUID."
explicacion: "La notación `u+s` activa el bit Set-User-ID (SUID). Esto hace que el script se ejecute con los privilegios del propietario del archivo, no del usuario que lo ejecuta."
```

### 15 — Completar comando `install` para copiar y setear permisos
```
metadata:
  materia: "bash"
  tema: "scripts-ejecutables-y-permisos"
  nivel: "intermedio"
  tags: ["install", "permisos"]
respuesta: "-m 755"
respuestas_validas:
  - "-m 755"
  - "-m 0755"
tipo: completar
enunciado:
  - "Quiere copiar un script `src.sh` a `/usr/local/bin/dest.sh` y establecer sus permisos en `755` en un solo comando. Complete la opción de modo: `install -m ____ src.sh /usr/local/bin/dest.sh`."
pasos:
  - "Identificar la opción de `install` para establecer permisos."
  - "Recordar la sintaxis de la opción `-m`."
explicacion: "La opción `-m` (mode) de `install` establece los permisos del archivo de destino. `-m 755` es el formato correcto."
```

### 16 — Verificación de shell interactivo vs no interactivo
```
metadata:
  materia: "bash"
  tema: "scripts-ejecutables-y-permisos"
  nivel: "intermedio"
  tags: ["interactive", "variables"]
respuesta: "falso"
tipo: vf
enunciado:
  - "La variable de entorno `$-` contiene una cadena de opciones de shell activas. Si un script se ejecuta de forma no interactiva, `$-` siempre estará vacío."
pasos:
  - "Analizar el contenido de `$-` en scripts."
  - "Verificar si `$-` es vacío en modo no interactivo."
explicacion: "La variable `$-` muestra las opciones de shell activas (ej. `himBH`). En un script no interactivo, suele contener `hB` (histexpand y brace expansion) u otras opciones por defecto, nunca está vacía a menos que se limpien explícitamente."
```

### 17 — Opción de `chmod` para grupo
```
metadata:
  materia: "bash"
  tema: "scripts-ejecutables-y-permisos"
  nivel: "intermedio"
  tags: ["chmod", "symbolic"]
respuesta: "g-w"
respuestas_validas:
  - "g-w"
  - "g -w"
tipo: completar
enunciado:
  - "Quiere quitar el permiso de escritura al grupo de un archivo `data.txt`. Escriba la expresión simbólica para `chmod`."
pasos:
  - "Identificar la clase de usuario: group (g)."
  - "Identificar la operación: quitar ( - )."
  - "Identificar el permiso: escritura (w)."
explicacion: "La sintaxis es `g-w` (group, minus, write)."
```

### 18 — Diagnóstico de "Text file busy"
```
metadata:
  materia: "bash"
  tema: "scripts-ejecutables-y-permisos"
  nivel: "intermedio"
  tags: ["error", "ETXTBSY"]
respuesta: "Text file busy"
opciones_explicitas:
  - "Text file busy"
  - "File too large"
  - "Permission denied"
  - "Interrupted system call"
tipo: mc
enunciado:
  - "Si intenta sobrescribir un archivo binario o script que se está ejecutando actualmente en el sistema, ¿qué error devuelve el sistema de archivos típicamente?"
pasos:
  - "Analizar los conflictos de archivos abiertos."
  - "Identificar el error EBUSY relacionado con texto ejecutable."
explicacion: "El error `ETXTBSY` (Text file busy) ocurre cuando se intenta modificar un archivo que está siendo ejecutado o tiene segmentos de memoria compartida."
```

### 19 — Completar `find` para buscar archivos sin permisos de ejecución
```
metadata:
  materia: "bash"
  tema: "scripts-ejecutables-y-permisos"
  nivel: "intermedio"
  tags: ["find", "permisos"]
respuesta: "-not -perm /111"
respuestas_validas:
  - "-not -perm /111"
  - "! -perm /111"
  - "-not -perm /a+x"
  - "! -perm /a+x"
tipo: completar
enunciado:
  - "Quiere encontrar todos los archivos en el directorio actual que NO tienen ningún permiso de ejecución para nadie (user, group, other). Complete el predicado de `find`: `find . ____`."
pasos:
  - "Identificar el permiso de ejecución: `111` (octal) o `a+x`."
  - "Usar el operador de negación."
explicacion: "`-not -perm /111` busca archivos donde no se cumple que tengan permiso de ejecución para alguno de los usuarios. `/111` significa 'cualquiera de los bits 111'."
```

### 20 — Variable para PID del script
```
metadata:
  materia: "bash"
  tema: "scripts-ejecutables-y-permisos"
  nivel: "intermedio"
  tags: ["variables", "PID"]
respuesta: "BASHPID"
opciones_explicitas:
  - "BASHPID"
  - "PID"
  - "PPID"
  - "SCRIPT_ID"
tipo: mc
enunciado:
  - "Dentro de un script Bash, ¿qué variable contiene el PID real del proceso de Bash actual, incluso si se está dentro de una subshell (donde `$PPID` o `$!` podrían no reflejar el PID del subshell directamente como se espera en algunos contextos antiguos)?"
pasos:
  - "Distinguir entre `$PPID` (padre) y el PID propio."
  - "Recordar que `$BASHPID` fue añadido para clarificar el PID de la instancia actual."
explicacion: "`$BASHPID` contiene el PID del proceso Bash actual. `$PPID` es el PID del padre. En subshells, `$BASHPID` es crucial para identificar la instancia específica."
```

### 21 — Efecto de `chmod o+x`
```
metadata:
  materia: "bash"
  tema: "scripts-ejecutables-y-permisos"
  nivel: "intermedio"
  tags: ["chmod", "other"]
respuesta: "cualquier usuario"
opciones_explicitas:
  - "cualquier usuario"
  - "solo el owner"
  - "solo el grupo"
  - "root únicamente"
tipo: mc
enunciado:
  - "Al ejecutar `chmod o+x script.sh`, ¿quién obtiene el permiso de ejecución añadido?"
pasos:
  - "Identificar la clase `o` (others/other)."
  - "Determinar a quién representa esta clase."
explicacion: "La clase `o` (others) se refiere a todos los usuarios que no son el owner ni miembros del grupo del archivo."
```

### 22 — Completar `file` para verificar tipo
```
metadata:
  materia: "bash"
  tema: "scripts-ejecutables-y-permisos"
  nivel: "intermedio"
  tags: ["file", "comando"]
respuesta: "script"
respuestas_validas:
  - "script"
  - "executable"
  - "ASCII text"
tipo: completar
enunciado:
  - "Ejecuta `file script.sh`. Si el script tiene un shebang válido y es texto ASCII, ¿qué palabra clave suele aparecer en la salida indicando que es un script interpretable?"
pasos:
  - "Analizar la salida típica de `file` para scripts Bash."
  - "Buscar la descripción del contenido."
explicacion: "`file` suele devolver `Bourne-Again shell script, ASCII text executable` o similar. La palabra clave clave es `script` o `executable`."
```

### 23 — Verificación de `set -u`
```
metadata:
  materia: "bash"
  tema: "scripts-ejecutables-y-permisos"
  nivel: "intermedio"
  tags: ["set-u", "variables"]
respuesta: "falso"
tipo: vf
enunciado:
  - "La opción `set -u` (o `set -o nounset`) hace que el script falle si se intenta usar una variable no definida, pero ignora las variables de entorno del sistema que no han sido exportadas."
pasos:
  - "Analizar el alcance de `set -u`."
  - "Verificar si afecta a variables de entorno no exportadas."
explicacion: "`set -u` falla si se usa cualquier variable no definida, incluyendo variables de entorno que no han sido exportadas al script si se acceden directamente o si se usan `export` implícitamente. No ignora variables de entorno; de hecho, es más estricto."
```

### 24 — Opción de `chmod` para bit SGID en directorio
```
metadata:
  materia: "bash"
  tema: "scripts-ejecutables-y-permisos"
  nivel: "intermedio"
  tags: ["chmod", "sgid"]
respuesta: "2775"
respuestas_validas:
  - "2775"
  - "2775"
tipo: completar
enunciado:
  - "Un directorio `/shared/project` debe tener permisos `rwxrwsr-x` (note la 's' en group execute). Escriba el código octal de 4 dígitos para `chmod`."
pasos:
  - "Decodificar `rwxrwsr-x` a octal."
  - "Owner: rwx = 7."
  - "Group: rws = r(4) + w(2) + s(x+setgid) = 6 + 2 (setgid) = 8? No, s es x + setgid. rwx=7, rws=2755? No. rwx=7, r-s=6, r-x=5. Setgid es 2. 2775."
explicacion: "El bit SGID se representa con `2` en la posición especial. `rwx` (7) + `rws` (7 con sgid) + `r-x` (5) = `2775`."
```

### 25 — Diagnóstico de error de ruta en shebang largo
```
metadata:
  materia: "bash"
  tema: "scripts-ejecutables-y-permisos"
  nivel: "intermedio"
  tags: ["error", "shebang"]
respuesta: "argument list too long"
opciones_explicitas:
  - "argument list too long"
  - "interpreter not found"
  - "bad shebang"
  - "memory error"
tipo: mc
enunciado:
  - "Si el shebang de un script es extremadamente largo (ej. `#!/usr/bin/env python3 -c 'import sys; sys.path.append('/very/long/path...')`), y excede el límite de argumentos del kernel, ¿qué error ocurre?"
pasos:
  - "Analizar los límites del sistema en la longitud de argumentos."
  - "Identificar el error `E2BIG`."
explicacion: "El kernel tiene un límite en la longitud total de los argumentos y variables de entorno para una nueva imagen de proceso (`ARG_MAX`). Si el shebang + argumentos exceden este límite, se devuelve `Argument list too long`."
```