### 1 — Redirección de stderr a /dev/null
```
metadata:
  materia: "bash"
  tema: "pipes-y-redirecciones"
  nivel: "intermedio"
  tags: ["redireccion-stderr", "dev-null"]
respuesta: verdadero
tipo: vf
enunciado: En el siguiente comando, el operador `2>` redirige el flujo de error estándar hacia el archivo especificado, mientras que la salida estándar sigue yéndose a la consola: `ls /ruta/inexistente 2> errores.log`.
pasos:
  - "Identificar el descriptor de archivo 2 (stderr)"
  - "Verificar que no hay redirección para el descriptor 1 (stdout)"
  - "Confirmar el comportamiento por defecto de stdout"
explicacion: El operador `2>` afecta exclusivamente al descriptor de archivo 2 (error estándar). Al no haber redirección para el descriptor 1, la salida estándar (mensajes de éxito o datos procesados, si los hubiera) continúa hacia el stdout por defecto (la terminal).
```

### 2 — Combinación de stdout y stderr en un solo archivo
```
metadata:
  materia: "bash"
  tema: "pipes-y-redirecciones"
  nivel: "intermedio"
  tags: ["redireccion-combinada", "2>&1"]
respuesta: "comando.sh > salida.log 2>&1"
tipo: completar
enunciado: Completa la línea de comando para que tanto la salida estándar como la de error se guarden en el archivo `salida.log`, respetando el orden de evaluación de bash: `comando.sh _______`
pasos:
  - "Entender que bash evalúa las redirecciones de izquierda a derecha"
  - "Primero redirigir stdout (1) al archivo"
  - "Luego redirigir stderr (2) al mismo lugar que stdout (1)"
  - "Usar la sintaxis correcta 2>&1"
explicacion: El orden es crucial. `> salida.log` redirige el descriptor 1 al archivo. Luego `2>&1` redirige el descriptor 2 al destino actual del descriptor 1 (que es el archivo). Si se invierte (`2>&1 > salida.log`), stderr irá a la terminal y solo stdout al archivo.
```

### 3 — Operador AND lógico con pipes
```
metadata:
  materia: "bash"
  tema: "pipes-y-redirecciones"
  nivel: "intermedio"
  tags: ["operadores-logicos", "exit-status"]
respuesta: "comando1 && comando2"
tipo: completar
enunciado: Necesitas ejecutar `comando2` solo si `comando1` termina con un código de salida exitoso (0). ¿Qué operador se usa entre ambos? `comando1 _______ comando2`
pasos:
  - "Recordar los operadores de control de flujo en bash"
  - "Identificar el operador que verifica el estado de salida anterior"
  - "Seleccionar el operador 'AND' lógico"
explicacion: El operador `&&` (AND lógico) ejecuta el segundo comando únicamente si el primero devuelve un estado de salida de 0 (éxito). Si `comando1` falla, `comando2` no se ejecuta.
```

### 4 — Input desde variable vs archivo
```
metadata:
  materia: "bash"
  tema: "pipes-y-redirecciones"
  nivel: "intermedio"
  tags: ["heredoc", "input-multiple-linea"]
respuesta: verdadero
tipo: vf
enunciado: El siguiente bloque de código es una forma válida de pasar múltiples líneas de texto como entrada estándar a un comando `sort`:
```bash
sort <<EOF
z
a
m
EOF
```
pasos:
  - "Reconocer la sintaxis de Here Document (<<)"
  - "Verificar que el delimitador de cierre (EOF) coincida con el inicial"
  - "Confirmar que `sort` acepta entrada estándar"
explicacion: La sintaxis `<<EOF` permite ingresar texto multilínea directamente al stdin del comando. Es una forma estándar y válida de proporcionar datos sin necesidad de un archivo temporal.
```

### 5 — Salida de `tee` en pipeline
```
metadata:
  materia: "bash"
  tema: "pipes-y-redirecciones"
  nivel: "intermedio"
  tags: ["tee", "output-concurrente"]
respuesta: "comando | tee archivo.log"
tipo: completar
enunciado: Quieres guardar la salida de `comando` en `archivo.log` pero también verla en la pantalla. ¿Cuál es la sintaxis correcta del pipe? `comando _______ archivo.log`
pasos:
  - "Identificar la herramienta que lee stdin, escribe a un archivo y reenvía stdout"
  - "Recordar que `tee` por defecto sobrescribe el archivo"
  - "Escribir el comando `tee` en el pipe"
explicacion: El comando `tee` lee de la entrada estándar y escribe a la vez en la salida estándar (pantalla) y en uno o más archivos. La sintaxis básica es `comando | tee archivo.log`.
```

### 6 — Redirección de stderr en subshell
```
metadata:
  materia: "bash"
  tema: "pipes-y-redirecciones"
  nivel: "intermedio"
  tags: ["subshell", "grouping"]
respuesta: falso
tipo: vf
enunciado: En el comando `(comando 2>&1) > log.txt`, los errores de `comando` se guardan en `log.txt` y la salida estándar se pierde.
pasos:
  - "Analizar el orden de evaluación dentro de los paréntesis"
  - "Verificar a dónde va el descriptor 2 primero"
  - "Verificar a dónde va el descriptor 1 después"
explicacion: Dentro de los paréntesis `(comando 2>&1)`, primero se redirige stderr (2) al stdout actual (la terminal), y luego el `> log.txt` externo redirige stdout (1) al archivo. Por tanto, stderr va a la terminal y stdout al archivo. Para que ambos vayan al archivo, la redirección del archivo debe estar dentro o usarse `|&` (bash 4+).
```

### 7 — Uso de `cat` con pipe (anti-pattern)
```
metadata:
  materia: "bash"
  tema: "pipes-y-redirecciones"
  nivel: "intermedio"
  tags: ["useless-cat", "best-practices"]
respuesta: "comando < archivo.txt"
tipo: completar
enunciado: El comando `cat archivo.txt | comando` es innecesario. ¿Cuál es la forma más eficiente de pasar el contenido del archivo como entrada a `comando`? `comando _______ archivo.txt`
pasos:
  - "Reconocer que `cat` solo lee archivos y escribe a stdout"
  - "Simplificar eliminando el proceso intermedio innecesario"
  - "Usar redirección de entrada directa"
explicacion: Muchos comandos (como `sort`, `grep`, `awk`) aceptan archivos como argumentos o leen de stdin. Usar `cat` solo para pasar un archivo a otro comando que ya puede leerlo es un "Useless Use of Cat". La redirección `<` es más eficiente.
```

### 8 — Append a archivo con tee
```
metadata:
  materia: "bash"
  tema: "pipes-y-redirecciones"
  nivel: "intermedio"
  tags: ["tee-append", "flags"]
respuesta: "comando | tee -a archivo.log"
tipo: completar
enunciado: Quieres añadir la salida de `comando` al final de `archivo.log` sin borrar su contenido previo. ¿Qué flag se añade a `tee`? `comando | tee _______ archivo.log`
pasos:
  - "Recordar el comportamiento por defecto de `tee` (sobrescribir)"
  - "Buscar el flag que indica 'append' o 'adjuntar'"
  - "Aplicar el flag `-a`"
explicacion: El flag `-a` (append) hace que `tee` añada la salida al final del archivo en lugar de sobrescribirlo. Sin este flag, el contenido anterior se pierde.
```

### 9 — Pipe a `less` para paginación
```
metadata:
  materia: "bash"
  tema: "pipes-y-redirecciones"
  nivel: "intermedio"
  tags: ["less", "paginacion"]
respuesta: "comando | less"
tipo: completar
enunciado: Un comando genera una salida muy larga que no cabe en la pantalla. ¿Con qué pipe puedes navegar por ella usando las teclas de dirección? `comando _______`
pasos:
  - "Identificar el pager estándar en sistemas Unix/Linux"
  - "Recordar que `less` permite scroll hacia arriba y abajo"
  - "Escribir el comando `less`"
explicacion: `less` es un pager que permite visualizar salida larga página por página. Permite navegar hacia arriba y hacia abajo, buscar texto, etc. Es superior a `more` en funcionalidad.
```

### 10 — Redirección de entrada a `ssh`
```
metadata:
  materia: "bash"
  tema: "pipes-y-redirecciones"
  nivel: "intermedio"
  tags: ["ssh", "stdin-input"]
respuesta: verdadero
tipo: vf
enunciado: Es posible ejecutar un comando en un servidor remoto vía `ssh` pasando la entrada del comando local desde un archivo o pipe, por ejemplo: `ssh user@host "comando" < datos.txt`.
pasos:
  - "Verificar si `ssh` acepta entrada estándar para el comando remoto"
  - "Confirmar que la redirección `<` aplica al contexto local antes de la conexión"
  - "Validar que el comando remoto recibe esa entrada"
explicacion: La redirección `< datos.txt` se aplica al proceso `ssh` local. El contenido del archivo se envía a través del canal seguro al stdin del comando ejecutado en el servidor remoto.
```

### 11 — Operador OR lógico
```
metadata:
  materia: "bash"
  tema: "pipes-y-redirecciones"
  nivel: "intermedio"
  tags: ["operadores-logicos", "exit-status"]
respuesta: "comando1 || comando2"
tipo: completar
enunciado: Quieres ejecutar `comando2` solo si `comando1` falla (código de salida distinto de 0). ¿Qué operador se usa? `comando1 _______ comando2`
pasos:
  - "Identificar el operador que verifica el fallo del comando anterior"
  - "Seleccionar el operador 'OR' lógico"
  - "Escribir la sintaxis `||`"
explicacion: El operador `||` (OR lógico) ejecuta el segundo comando únicamente si el primero devuelve un estado de salida no cero (error). Es el complemento de `&&`.
```

### 12 — `/dev/null` como sumidero
```
metadata:
  materia: "bash"
  tema: "pipes-y-redirecciones"
  nivel: "intermedio"
  tags: ["dev-null", "descartar-output"]
respuesta: "comando > /dev/null 2>&1"
tipo: completar
enunciado: Quieres ejecutar `comando` pero ignorar completamente toda su salida (stdout y stderr). ¿A qué archivos se redirigen ambos? `comando _______`
pasos:
  - "Identificar el dispositivo nulo para stdout"
  - "Identificar cómo redirigir stderr al mismo lugar"
  - "Combinar ambas redirecciones"
explicacion: `> /dev/null` descarta stdout. `2>&1` redirige stderr al mismo destino que stdout (que ya es `/dev/null`). El resultado es que ninguna salida se muestra ni se guarda.
```

### 13 — Pipe a `grep` con expresiones regulares
```
metadata:
  materia: "bash"
  tema: "pipes-y-redirecciones"
  nivel: "intermedio"
  tags: ["grep", "regex", "filtering"]
respuesta: "comando | grep -E 'patron'"
tipo: completar
enunciado: Necesitas filtrar la salida de `comando` usando una expresión regular extendida. ¿Qué flag se le pasa a `grep`? `comando | grep _______ 'patron'`
pasos:
  - "Recordar el flag para expresiones regulares extendidas en `grep`"
  - "Diferenciar entre `grep` básico y `grep -E`"
  - "Escribir el flag `-E`"
explicacion: Por defecto, `grep` usa expresiones regulares básicas. El flag `-E` (o `--extended-regexp`) habilita la sintaxis de expresiones regulares extendidas (como `|`, `+`, `?`), similar a `egrep`.
```

### 14 — Redirección de entrada a `awk`
```
metadata:
  materia: "bash"
  tema: "pipes-y-redirecciones"
  nivel: "intermedio"
  tags: ["awk", "input-redirection"]
respuesta: "awk 'pattern' < archivo.txt"
tipo: completar
enunciado: Quieres procesar `archivo.txt` con `awk` sin usar `cat`. ¿Cómo se pasa el archivo a `awk`? `awk 'pattern' _______ archivo.txt`
pasos:
  - "Saber que `awk` puede recibir archivos como argumentos directos"
  - "O saber que puede recibirlos vía stdin con `<`"
  - "La pregunta pide la redirección de entrada explícita"
explicacion: Aunque `awk 'pattern' archivo.txt` es válido, la redirección explícita `< archivo.txt` es la forma estándar de pasar contenido a stdin de un comando. La respuesta solicitada es la sintaxis de redirección.
```

### 15 — `wc` con pipe
```
metadata:
  materia: "bash"
  tema: "pipes-y-redirecciones"
  nivel: "intermedio"
  tags: ["wc", "counting"]
respuesta: "comando | wc -l"
tipo: completar
enunciado: Quieres contar el número de líneas generadas por `comando`. ¿Qué flag se usa con `wc`? `comando | wc _______`
pasos:
  - "Identificar la herramienta de conteo de líneas `wc`"
  - "Recordar el flag para contar líneas (lines)"
  - "Escribir `-l`"
explicacion: `wc` (word count) cuenta palabras, caracteres y líneas. El flag `-l` (lines) hace que solo se imprima el número de líneas. Sin flags, muestra líneas, palabras y bytes.
```

### 16 — `sort` con clave numérica
```
metadata:
  materia: "bash"
  tema: "pipes-y-redirecciones"
  nivel: "intermedio"
  tags: ["sort", "numeric-key"]
respuesta: "comando | sort -n -k2"
tipo: completar
enunciado: La salida de `comando` tiene columnas separadas por espacios. Quieres ordenar numéricamente por la segunda columna. ¿Qué flags se usan? `comando | sort _______`
pasos:
  - "Identificar el flag para orden numérico (`-n`)"
  - "Identificar el flag para especificar la clave (`-k`)"
  - "Combinar `-n` y `-k2`"
explicacion: `-n` asegura una comparación numérica (no alfabética). `-k2` especifica que la clave de ordenamiento es la segunda columna. El orden de los flags puede variar, pero ambos deben estar presentes.
```

### 17 — `head` con pipe
```
metadata:
  materia: "bash"
  tema: "pipes-y-redirecciones"
  nivel: "intermedio"
  tags: ["head", "take-top"]
respuesta: "comando | head -n 5"
tipo: completar
enunciado: Quieres ver solo las primeras 5 líneas de la salida de `comando`. ¿Qué opción se usa con `head`? `comando | head _______`
pasos:
  - "Recordar que `head` muestra el inicio de un archivo/entrada"
  - "Identificar el flag para especificar el número de líneas (`-n`)"
  - "Escribir `-n 5`"
explicacion: `head` muestra por defecto las primeras 10 líneas. El flag `-n 5` (o `-5`) limita la salida a las primeras 5 líneas.
```

### 18 — `tail` con seguimiento
```
metadata:
  materia: "bash"
  tema: "pipes-y-redirecciones"
  nivel: "intermedio"
  tags: ["tail", "follow"]
respuesta: "tail -f archivo.log"
tipo: completar
enunciado: Quieres monitorear en tiempo real los nuevos appendices a `archivo.log`. ¿Qué flag se usa con `tail`? `tail _______ archivo.log`
pasos:
  - "Identificar la herramienta para ver el final de archivos"
  - "Recordar el flag para 'seguir' (follow) el crecimiento del archivo"
  - "Escribir `-f`"
explicacion: El flag `-f` (follow) hace que `tail` no termine después de leer el contenido actual, sino que siga esperando nuevos datos en el archivo, actualizando la pantalla a medida que se escriben.
```

### 19 — `xargs` con pipe
```
metadata:
  materia: "bash"
  tema: "pipes-y-redirecciones"
  nivel: "intermedio"
  tags: ["xargs", "argument-construction"]
respuesta: "comando | xargs rm"
tipo: completar
enunciado: La salida de `comando` es una lista de nombres de archivos (uno por línea). Quieres eliminarlos todos. ¿Qué comando se usa para convertir la entrada en argumentos? `comando | _______ rm`
pasos:
  - "Identificar la herramienta que lee stdin y construye argumentos para otro comando"
  - "Escribir `xargs`"
explicacion: `xargs` lee elementos separados por blancos o nuevas líneas de stdin y los pasa como argumentos al comando especificado (`rm` en este caso). Es útil para procesar listas de archivos.
```

### 20 — `sed` con pipe
```
metadata:
  materia: "bash"
  tema: "pipes-y-redirecciones"
  nivel: "intermedio"
  tags: ["sed", "stream-editor"]
respuesta: "comando | sed 's/antiguo/nuevo/'"
tipo: completar
enunciado: Quieres reemplazar la primera ocurrencia de 'antiguo' por 'nuevo' en la salida de `comando`. ¿Qué comando se usa? `comando | _______ 's/antiguo/nuevo/'`
pasos:
  - "Identificar el editor de flujo de texto (stream editor)"
  - "Recordar la sintaxis de sustitución `s/pattern/replacement/`"
  - "Escribir `sed`"
explicacion: `sed` es un potente editor de flujo. La expresión `s/antiguo/nuevo/` busca la primera coincidencia de 'antiguo' en cada línea y la reemplaza por 'nuevo'.
```

### 21 — `cut` con pipe
```
metadata:
  materia: "bash"
  tema: "pipes-y-redirecciones"
  nivel: "intermedio"
  tags: ["cut", "field-extraction"]
respuesta: "comando | cut -d: -f1"
tipo: completar
enunciado: La salida de `comando` tiene campos separados por dos puntos (`:`). Quieres extraer solo el primer campo. ¿Qué flags se usan con `cut`? `comando | cut _______`
pasos:
  - "Identificar el comando para cortar campos (`cut`)"
  - "Especificar el delimitador con `-d:`"
  - "Especificar el campo con `-f1`"
explicacion: `-d:` establece el delimitador de campo en dos puntos. `-f1` indica que solo se debe imprimir el primer campo.
```

### 22 — `tr` con pipe
```
metadata:
  materia: "bash"
  tema: "pipes-y-redirecciones"
  nivel: "intermedio"
  tags: ["tr", "translate"]
respuesta: "comando | tr '[:lower:]' '[:upper:]'"
tipo: completar
enunciado: Quieres convertir toda la salida de `comando` a mayúsculas. ¿Qué comando y conjunto se usan? `comando | _______ '[:lower:]' '[:upper:]'`
pasos:
  - "Identificar el comando para traducir caracteres (`tr`)"
  - "Usar clases de caracteres para rangos"
  - "Escribir `tr`"
explicacion: `tr` traduce caracteres de un conjunto a otro. `[:lower:]` es la clase de caracteres minúsculas y `[:upper:]` la de mayúsculas. El comando reemplaza cada carácter minúsculo por su equivalente mayúsculo.
```

### 23 — `uniq` con pipe
```
metadata:
  materia: "bash"
  tema: "pipes-y-redirecciones"
  nivel: "intermedio"
  tags: ["uniq", "deduplication"]
respuesta: "comando | sort | uniq"
tipo: completar
enunciado: Quieres eliminar líneas duplicadas consecutivas de la salida de `comando`. ¿Qué comandos se necesitan en el pipe? `comando | _______ | _______`
pasos:
  - "Recordar que `uniq` solo elimina duplicados CONSECUTIVOS"
  - "Entender que primero se debe ordenar para agrupar duplicados"
  - "Escribir `sort` y luego `uniq`"
explicacion: `uniq` funciona sobre líneas adyacentes idénticas. Por lo tanto, se debe usar `sort` primero para agrupar todas las líneas iguales juntas, y luego `uniq` para eliminar las repetidas consecutivas.
```

### 24 — `diff` con pipe (aquí no aplica, cambiar a `comm`)
```
metadata:
  materia: "bash"
  tema: "pipes-y-redirecciones"
  nivel: "intermedio"
  tags: ["comm", "file-comparison"]
respuesta: "comm -23 archivo1.txt archivo2.txt"
tipo: completar
enunciado: Quieres ver las líneas que están en `archivo1.txt` pero NO en `archivo2.txt` (ambos ordenados). ¿Qué flag se usa con `comm`? `comm _______ archivo1.txt archivo2.txt`
pasos:
  - "Identificar el comando para comparar archivos ordenados (`comm`)"
  - "Recordar que `comm` tiene 3 columnas: solo en A, solo en B, en ambos"
  - "Usar `-2` para suprimir columna 2 (solo en B) y `-3` para suprimir columna 3 (en ambos)"
explicacion: `comm` compara dos archivos ordenados. `-2` suprime la columna 2 (líneas solo en archivo2) y `-3` suprime la columna 3 (líneas en ambos). El resultado es solo la columna 1 (líneas solo en archivo1).
```

### 25 — `join` con pipe (aquí cambiar a `paste` para variedad)
```
metadata:
  materia: "bash"
  tema: "pipes-y-redirecciones"
  nivel: "intermedio"
  tags: ["paste", "merge-lines"]
respuesta: "paste -d',' archivo1.txt archivo2.txt"
tipo: completar
enunciado: Quieres combinar línea por línea `archivo1.txt` y `archivo2.txt`, separando los campos con una coma. ¿Qué comando y flag se usan? `paste _______ archivo1.txt archivo2.txt`
pasos:
  - "Identificar el comando para fusionar líneas de múltiples archivos (`paste`)"
  - "Especificar el delimitador personalizado con `-d`"
  - "Escribir `-d','`"
explicacion: `paste` fusiona líneas de archivos lado a lado. Por defecto usa tabulaciones. El flag `-d','` cambia el delimitador a una coma.
```