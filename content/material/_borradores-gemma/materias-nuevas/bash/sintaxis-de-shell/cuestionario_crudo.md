### 1 — Verificar existencia de archivo
```yaml
metadata:
  materia: "bash"
  tema: "sintaxis-de-shell"
  nivel: "basico"
  tags: ["test", "archivos"]
respuesta: verdadero
tipo: vf
enunciado:
  - "En Bash, el comando `[ -f /etc/hosts ]` devuelve un código de salida 0 (verdadero) si y solo si /etc/hosts es un archivo regular y existe."
pasos:
  - "El operador `-f` verifica si el camino dado es un archivo regular."
  - "Si el archivo existe y es regular, la condición es verdadera."
  - "El código de salida 0 indica éxito/verdadero en la sintaxis de prueba de Bash."
explicacion: "La sintaxis `[ -f ruta ]` es la forma estándar de verificar la existencia de un archivo regular en Bash. Si el archivo no existe o es un directorio, devuelve 1 (falso)."
```

### 2 — Completar operador de redirección
```yaml
metadata:
  materia: "bash"
  tema: "sintaxis-de-shell"
  nivel: "basico"
  tags: ["redireccion", "stdout"]
respuesta: ">"
respuestas_validas:
  - ">"
tipo: completar
enunciado:
  - "Para redirigir la salida estándar de un comando (ej: `ls`) a un archivo nuevo `salida.txt`, sobrescribiendo su contenido si ya existe, se usa el operador: `ls > salida.txt`"
pasos:
  - "Identificar la necesidad de redirigir stdout."
  - "Recordar que `>` crea el archivo o lo sobrescribe."
  - "Escribir el operador correcto."
explicacion: "El operador `>` redirige la salida estándar a un archivo. Si el archivo existe, se trunca (borra el contenido previo). Para agregar sin borrar, se usaría `>>`."
```

### 3 — MC: Sintaxis de comentario
```yaml
metadata:
  materia: "bash"
  tema: "sintaxis-de-shell"
  nivel: "basico"
  tags: ["comentarios", "estructura"]
opciones_explicitas:
  - "// Comentario"
  - "# Comentario"
  - "<!-- Comentario -->"
  - "' Comentario"
respuesta: "# Comentario"
tipo: mc
enunciado:
  - "¿Cuál es la sintaxis correcta para escribir un comentario de una sola línea en un script de Bash?"
pasos:
  - "Analizar las opciones proporcionadas."
  - "Descartar sintaxis de otros lenguajes (C++, HTML, Python)."
  - "Seleccionar el carácter válido en Bash."
explicacion: "En Bash, cualquier texto que comience con `#` (excepto el shebang `#!` al inicio del archivo) es ignorado por el intérprete y sirve como comentario."
```

### 4 — Completar variable de entorno
```yaml
metadata:
  materia: "bash"
  tema: "sintaxis-de-shell"
  nivel: "basico"
  tags: ["variables", "entorno"]
respuesta: "HOME"
respuestas_validas:
  - "HOME"
  - "home"
tipo: completar
enunciado:
  - "Para imprimir la ruta del directorio home del usuario actual, se usa el comando: `echo $` __ `"`
pasos:
  - "Identificar la variable de entorno predefinida que almacena el home del usuario."
  - "Recordar que las variables se acceden con el símbolo `$`."
  - "Escribir el nombre de la variable."
explicacion: "La variable de entorno `HOME` contiene la ruta del directorio inicial del usuario. Se accede mediante `$HOME`."
```

### 5 — VF: Comillas simples vs dobles
```yaml
metadata:
  materia: "bash"
  tema: "sintaxis-de-shell"
  nivel: "basico"
  tags: ["comillas", "expansion"]
respuesta: falso
tipo: vf
enunciado:
  - "Al ejecutar `echo '$HOME'`, Bash expandirá la variable HOME y mostrará la ruta completa del directorio home."
pasos:
  - "Evaluar el comportamiento de las comillas simples en Bash."
  - "Determinar si se produce expansión de variables."
  - "Verificar la veracidad de la afirmación."
explicacion: "Las comillas simples `'...'` impiden toda expansión de variables y sustitución de comandos. El resultado sería literalmente la cadena `$HOME`."
```

### 6 — Completar operador lógico AND
```yaml
metadata:
  materia: "bash"
  tema: "sintaxis-de-shell"
  nivel: "basico"
  tags: ["logicos", "operadores"]
respuesta: "&&"
respuestas_validas:
  - "&&"
  - "and"
tipo: completar
enunciado:
  - "Para ejecutar el comando `backup.sh` solo si el comando `tar czf backup.tar.gz data/` tiene éxito (código de salida 0), se usa: `tar czf backup.tar.gz data/` __ `./backup.sh`"
pasos:
  - "Identificar la necesidad de encadenar comandos condicionalmente."
  - "Recordar el operador que ejecuta el segundo comando solo si el primero tiene éxito."
  - "Escribir el operador."
explicacion: "El operador `&&` (AND lógico) ejecuta el comando de la derecha solo si el comando de la izquierda devuelve un código de salida 0 (éxito)."
```

### 7 — MC: Sintaxis de subshell
```yaml
metadata:
  materia: "bash"
  tema: "sintaxis-de-shell"
  nivel: "basico"
  tags: ["subshell", "sintaxis"]
opciones_explicitas:
  - "( comando )"
  - "[ comando ]"
  - "{ comando }"
  - "< comando >"
respuesta: "( comando )"
tipo: mc
enunciado:
  - "¿Qué sintaxis se utiliza para agrupar comandos en una subshell en Bash, de modo que las variables definidas dentro no afecten al shell padre?"
pasos:
  - "Analizar las opciones de agrupamiento."
  - "Distinguir entre subshell, prueba de condición, y lista de comandos."
  - "Seleccionar la sintaxis de paréntesis."
explicacion: "Los paréntesis `( )` crean una subshell. Los comandos dentro se ejecutan en un proceso hijo, por lo que los cambios de variable no persisten en el entorno principal. `{ }` requiere espacios y no crea subshell."
```

### 8 — Completar operador de salida de error
```yaml
metadata:
  materia: "bash"
  tema: "sintaxis-de-shell"
  nivel: "basico"
  tags: ["redireccion", "stderr"]
respuesta: "2>"
respuestas_validas:
  - "2>"
  - "2 >"
tipo: completar
enunciado:
  - "Para redirigir la salida de error estándar (stderr) de un comando `ls /ruta/inexistente` a un archivo `errores.log`, se usa: `ls /ruta/inexistente` __ `errores.log`"
pasos:
  - "Identificar el descriptor de archivo para errores (stderr)."
  - "Recordar el operador de redirección."
  - "Combinar descriptor y operador."
explicacion: "El descriptor 2 representa stderr. El operador `2>` redirige la salida de errores a un archivo, separándola de la salida estándar (stdout, descriptor 1)."
```

### 9 — VF: Operador de igualdad numérica
```yaml
metadata:
  materia: "bash"
  tema: "sintaxis-de-shell"
  nivel: "basico"
  tags: ["comparacion", "numeros"]
respuesta: verdadero
tipo: vf
enunciado:
  - "En un condicional `if [ $a -eq $b ]`, el operador `-eq` compara si dos valores numéricos son iguales."
pasos:
  - "Verificar el significado del operador `-eq` dentro de corchetes `[ ]`."
  - "Confirmar que es específico para comparaciones numéricas."
  - "Evaluar la veracidad."
explicacion: "Dentro de `[ ]` (o `test`), `-eq` es el operador de igualdad numérica. Para igualdad de strings se usaría `=` o `==`."
```

### 10 — Completar shebang
```yaml
metadata:
  materia: "bash"
  tema: "sintaxis-de-shell"
  nivel: "basico"
  tags: ["shebang", "inicio"]
respuesta: "#!/bin/bash"
respuestas_validas:
  - "#!/bin/bash"
  - "#! /bin/bash"
tipo: completar
enunciado:
  - "La primera línea de un script Bash ejecutable que indica al sistema operativo qué intérprete usar es: `__`"
pasos:
  - "Recordar la sintaxis del shebang (#!)."
  - "Especificar la ruta típica del binario de Bash."
  - "Escribir la línea completa."
explicacion: "El shebang `#!/bin/bash` es necesario en la primera línea del archivo para que el kernel ejecute el script usando el intérprete Bash instalado en `/bin/bash`."
```

### 11 — MC: Operador de desigualdad en test
```yaml
metadata:
  materia: "bash"
  tema: "sintaxis-de-shell"
  nivel: "basico"
  tags: ["test", "operadores"]
opciones_explicitas:
  - "-ne"
  - "-not"
  - "<>"
  - "!="
respuesta: "-ne"
tipo: mc
enunciado:
  - "Dentro de la sintaxis clásica de prueba `[ ]`, ¿cuál es el operador para verificar si dos números NO son iguales?"
pasos:
  - "Analizar las opciones dentro del contexto de `[ ]`."
  - "Descartar operadores de string o sintaxis de `[[ ]]`."
  - "Seleccionar el operador numérico de desigualdad."
explicacion: "En `[ ]`, `-ne` (not equal) se usa para comparar números. `!=` se usa para strings o dentro de `[[ ]]`."
```

### 12 — Completar operador de salida estándar
```yaml
metadata:
  materia: "bash"
  tema: "sintaxis-de-shell"
  nivel: "basico"
  tags: ["redireccion", "stdout"]
respuesta: "1>"
respuestas_validas:
  - "1>"
  - "1 >"
tipo: completar
enunciado:
  - "Para redirigir explícitamente la salida estándar (descriptor 1) de un comando a un archivo `log.txt`, se puede usar: `comando` __ `log.txt`"
pasos:
  - "Identificar el descriptor de archivo para stdout."
  - "Aplicar el operador de redirección."
  - "Escribir la secuencia."
explicacion: "El descriptor 1 es stdout. Aunque `>` por defecto redirige stdout, `1>` es la sintaxis explícita equivalente."
```

### 13 — VF: Comillas dobles y expansión
```yaml
metadata:
  materia: "bash"
  tema: "sintaxis-de-shell"
  nivel: "basico"
  tags: ["comillas", "expansion"]
respuesta: verdadero
tipo: vf
enunciado:
  - "Si la variable `VAR='Hola Mundo'`, entonces `echo $VAR` imprime `Hola Mundo` en una sola línea sin errores de sintaxis."
pasos:
  - "Evaluar si la expansión de variable sin comillas maneja espacios correctamente."
  - "Determinar si el resultado es el esperado."
  - "Verificar la veracidad."
explicacion: "Aunque es buena práctica usar comillas `echo \"$VAR\"` para evitar word splitting si hay espacios, `echo $VAR` funciona técnicamente y muestra el contenido. La afirmación dice que imprime el contenido, lo cual es cierto."
```

### 14 — Completar operador de desigualdad de strings
```yaml
metadata:
  materia: "bash"
  tema: "sintaxis-de-shell"
  nivel: "basico"
  tags: ["test", "strings"]
respuesta: "!="
respuestas_validas:
  - "!="
  - "!= "
tipo: completar
enunciado:
  - "En un condicional moderno `if [[ $a != $b ]]`, el operador `__` verifica si la cadena $a es diferente de la cadena $b."
pasos:
  - "Identificar el contexto `[[ ]]`."
  - "Seleccionar el operador de desigualdad de strings válido en este contexto."
  - "Escribir el operador."
explicacion: "Dentro de `[[ ]]`, `!=` es el operador estándar para verificar desigualdad de strings. En `[ ]`, también se soporta `!=` en Bash moderno, pero `!=` es más común en `[[ ]]`."
```

### 15 — MC: Sintaxis de variable con llaves
```yaml
metadata:
  materia: "bash"
  tema: "sintaxis-de-shell"
  nivel: "basico"
  tags: ["variables", "ambiguedad"]
opciones_explicitas:
  - "${VAR}text"
  - "$VARtext"
  - "${VAR}text"
  - "$VAR{text}"
respuesta: "${VAR}text"
tipo: mc
enunciado:
  - "Si `VAR='Hola'`, ¿cuál es la sintaxis correcta para imprimir `Holamundo` (concatenando 'mundo' inmediatamente después del valor de VAR sin espacios)?"
pasos:
  - "Analizar la ambigüedad del nombre de variable."
  - "Determinar cómo delimitar el nombre de la variable."
  - "Seleccionar la sintaxis con llaves `{ }`."
explicacion: "Sin llaves, `$VARtext` buscaría la variable `VARtext`. `${VAR}text` delimita claramente el nombre de la variable, permitiendo la concatenación inmediata."
```

### 16 — Completar operador de or lógica
```yaml
metadata:
  materia: "bash"
  tema: "sintaxis-de-shell"
  nivel: "basico"
  tags: ["logicos", "operadores"]
respuesta: "||"
respuestas_validas:
  - "||"
  - "or"
tipo: completar
enunciado:
  - "Para ejecutar `fix.sh` si el comando `repair.sh` falla (código de salida distinto de 0), se usa: `repair.sh` __ `fix.sh`"
pasos:
  - "Identificar la necesidad de ejecutar un comando alternativo en caso de fallo."
  - "Recordar el operador OR lógico de shell."
  - "Escribir el operador."
explicacion: "El operador `||` (OR lógico) ejecuta el comando de la derecha solo si el comando de la izquierda devuelve un código de salida distinto de 0 (fallo)."
```

### 17 — VF: Operador de existencia de directorio
```yaml
metadata:
  materia: "bash"
  tema: "sintaxis-de-shell"
  nivel: "basico"
  tags: ["test", "directorios"]
respuesta: verdadero
tipo: vf
enunciado:
  - "El comando `[ -d /tmp ]` devuelve verdadero si `/tmp` es un directorio válido."
pasos:
  - "Verificar el significado del operador `-d`."
  - "Confirmar que aplica a directorios."
  - "Evaluar la veracidad."
explicacion: "El operador `-d` en la sintaxis de prueba `[ ]` verifica específicamente si la ruta dada es un directorio."
```

### 18 — Completar operador de mayor que numérico
```yaml
metadata:
  materia: "bash"
  tema: "sintaxis-de-shell"
  nivel: "basico"
  tags: ["test", "comparacion"]
respuesta: "-gt"
respuestas_validas:
  - "-gt"
  - "- gt"
tipo: completar
enunciado:
  - "En `[ $a __ $b ]`, para verificar si $a es mayor que $b numéricamente, se usa el operador: `__`"
pasos:
  - "Identificar la comparación numérica 'mayor que'."
  - "Seleccionar el operador específico de Bash para `[ ]`."
  - "Escribir el operador."
explicacion: "En `[ ]`, `-gt` (greater than) se usa para comparaciones numéricas. En `[[ ]]` se usaría `>`."
```

### 19 — MC: Sintaxis de comentario multilínea
```yaml
metadata:
  materia: "bash"
  tema: "sintaxis-de-shell"
  nivel: "basico"
  tags: ["comentarios", "sintaxis"]
opciones_explicitas:
  - "/* ... */"
  - "''' ... '''"
  - ": '' ... ''"
  - "<!-- ... -->"
respuesta: ": '' ... ''"
tipo: mc
enunciado:
  - "¿Qué sintaxis se puede usar para comentar múltiples líneas en Bash, aprovechando que los comandos vacíos o ignorados no se ejecutan?"
pasos:
  - "Analizar las opciones de comentario."
  - "Descartar sintaxis de otros lenguajes."
  - "Identificar el patrón de comando vacío repetido."
explicacion: "La sintaxis `: ''` (o `:` sola) es un comando 'no-op' (hace nada). Encerrar texto entre `: ''` y `''` permite comentarios multilínea efectivos en Bash."
```

### 20 — Completar operador de menor o igual numérico
```yaml
metadata:
  materia: "bash"
  tema: "sintaxis-de-shell"
  nivel: "basico"
  tags: ["test", "comparacion"]
respuesta: "-le"
respuestas_validas:
  - "-le"
  - "- le"
tipo: completar
enunciado:
  - "En `[ $a __ $b ]`, para verificar si $a es menor o igual que $b numéricamente, se usa el operador: `__`"
pasos:
  - "Identificar la comparación numérica 'menor o igual'."
  - "Seleccionar el operador específico de Bash para `[ ]`."
  - "Escribir el operador."
explicacion: "En `[ ]`, `-le` (less or equal) se usa para comparaciones numéricas. En `[[ ]]` se usaría `<=`."
```

### 21 — VF: Operador de archivo existente
```yaml
metadata:
  materia: "bash"
  tema: "sintaxis-de-shell"
  nivel: "basico"
  tags: ["test", "archivos"]
respuesta: verdadero
tipo: vf
enunciado:
  - "El operador `-e` en `[ -e /ruta ]` devuelve verdadero si el archivo o directorio en `/ruta` existe, independientemente de su tipo."
pasos:
  - "Verificar el significado del operador `-e`."
  - "Confirmar que no discrimina entre archivos y directorios."
  - "Evaluar la veracidad."
explicacion: "El operador `-e` verifica la existencia de cualquier tipo de entrada (archivo, directorio, enlace simbólico, etc.)."
```

### 22 — Completar operador de mayor o igual numérico
```yaml
metadata:
  materia: "bash"
  tema: "sintaxis-de-shell"
  nivel: "basico"
  tags: ["test", "comparacion"]
respuesta: "-ge"
respuestas_validas:
  - "-ge"
  - "- ge"
tipo: completar
enunciado:
  - "En `[ $a __ $b ]`, para verificar si $a es mayor o igual que $b numéricamente, se usa el operador: `__`"
pasos:
  - "Identificar la comparación numérica 'mayor o igual'."
  - "Seleccionar el operador específico de Bash para `[ ]`."
  - "Escribir el operador."
explicacion: "En `[ ]`, `-ge` (greater or equal) se usa para comparaciones numéricas. En `[[ ]]` se usaría `>=`."
```

### 23 — MC: Sintaxis de expansión de parámetros por defecto
```yaml
metadata:
  materia: "bash"
  tema: "sintaxis-de-shell"
  nivel: "basico"
  tags: ["variables", "expansion"]
opciones_explicitas:
  - "${VAR:-default}"
  - "${VAR-default}"
  - "$VAR-default"
  - "${VAR:=default}"
respuesta: "${VAR:-default}"
tipo: mc
enunciado:
  - "Si `VAR` está vacío o no está definido, ¿cuál sintaxis imprime `default` sin modificar el valor de `VAR`?"
pasos:
  - "Analizar las opciones de expansión."
  - "Distinguir entre asignación y solo uso de valor."
  - "Seleccionar la sintaxis de 'par defecto' que no asigna."
explicacion: "${VAR:-default} usa `default` si `VAR` está vacío o no definido, pero NO asigna `default` a `VAR`. `${VAR:=default}` sí asigna el valor."
```

### 24 — Completar operador de archivo escrito
```yaml
metadata:
  materia: "bash"
  tema: "sintaxis-de-shell"
  nivel: "basico"
  tags: ["test", "permisos"]
respuesta: "-w"
respuestas_validas:
  - "-w"
  - "- w"
tipo: completar
enunciado:
  - "En `[ -w /ruta ]`, el operador `__` verifica si el usuario actual tiene permiso de escritura en `/ruta`."
pasos:
  - "Identificar la prueba de permisos de escritura."
  - "Seleccionar el operador específico de Bash para `[ ]`."
  - "Escribir el operador."
explicacion: "El operador `-w` en la sintaxis de prueba `[ ]` verifica si el archivo existe y tiene permiso de escritura para el usuario efectivo."
```

### 25 — VF: Operador de archivo ejecutable
```yaml
metadata:
  materia: "bash"
  tema: "sintaxis-de-shell"
  nivel: "basico"
  tags: ["test", "permisos"]
respuesta: verdadero
tipo: vf
enunciado:
  - "El comando `[ -x /bin/ls ]` devuelve verdadero si el archivo `/bin/ls` existe y tiene el bit de ejecución activo para el usuario."
pasos:
  - "Verificar el significado del operador `-x`."
  - "Confirmar que verifica el bit de ejecución."
  - "Evaluar la veracidad."
explicacion: "El operador `-x` en la sintaxis de prueba `[ ]` verifica si el archivo existe y tiene permiso de ejecución para el usuario efectivo."
```