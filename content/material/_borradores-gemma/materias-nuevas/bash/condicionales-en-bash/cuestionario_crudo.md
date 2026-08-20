### 1 — Sintaxis básica de if
```yaml
metadata:
  materia: "bash"
  tema: "condicionales-en-bash"
  nivel: "basico"
  tags: ["if", "sintaxis", "completar"]
respuesta: "then"
tipo: completar
enunciado: "Completa el fragmento de script para que sea sintácticamente válido: `if [ $USER = \"root\" ] ____ echo \"Eres administrador\"; fi`"
pasos:
  - "Identificar la palabra clave obligatoria tras la condición en un bloque if de Bash."
  - "Verificar que la estructura es `if [ condición ]; then comando; fi`."
explicacion: "En Bash, la palabra clave `then` es obligatoria inmediatamente después de cerrar la condición del `if` para iniciar el bloque de comandos a ejecutar."
```

### 2 — Operador de igualdad en [ ]
```yaml
metadata:
  materia: "bash"
  tema: "condicionales-en-bash"
  nivel: "basico"
  tags: ["test", "igualdad", "vf"]
respuesta: "verdadero"
tipo: vf
enunciado: "En un test con corchetes simples `[ ]`, el operador `=` compara si dos cadenas de texto son iguales."
pasos:
  - "Recordar que `[` es un alias del comando `test`."
  - "Confirmar que `=` es el operador de igualdad de cadenas dentro de `[ ]`."
explicacion: "Dentro de los corchetes simples `[ ]`, el operador `=` compara cadenas. El operador `-eq` se usa para números, pero `=` funciona para strings."
```

### 3 — Comparación numérica con -eq
```yaml
metadata:
  materia: "bash"
  tema: "condicionales-en-bash"
  nivel: "basico"
  tags: ["test", "numeros", "completar"]
respuesta: "-eq"
tipo: completar
enunciado: "Completa la condición para verificar si el número de procesos es mayor a 0: `if [ $PROC_COUNT ____ 0 ]; then echo 'Hay procesos'; fi`"
pasos:
  - "Identificar que se necesita comparar si una variable numérica es igual a 0."
  - "Seleccionar el operador de 'igualdad aritmética' para el comando `test`."
explicacion: "El operador `-eq` (equal) es el correcto para comparar igualdad numérica dentro de `[ ]`. No usar `==` (que es para cadenas o bashismos en `[[ ]]`) ni `=` (que es para cadenas)."
```

### 4 — Bloque else
```yaml
metadata:
  materia: "bash"
  tema: "condicionales-en-bash"
  nivel: "basico"
  tags: ["else", "estructura", "mc"]
respuesta: "else"
tipo: mc
enunciado: "¿Qué palabra clave se usa para definir el bloque alternativo en un `if`?"
opciones_explicitas:
  - "otherwise"
  - "else"
  - "elif"
  - "else-if"
pasos:
  - "Analizar la sintaxis estándar de Bash para bifurcaciones."
  - "Descartar palabras clave de otros lenguajes como Python o C."
explicacion: "La palabra clave correcta en Bash es `else`. `elif` se usa para condiciones adicionales, y `otherwise` o `else-if` no son válidos."
```

### 5 - Operador de desigualdad en [ ]
```yaml
metadata:
  materia: "bash"
  tema: "condicionales-en-bash"
  nivel: "basico"
  tags: ["test", "desigualdad", "vf"]
respuesta: "falso"
tipo: vf
enunciado: "En un test con corchetes simples `[ ]`, el operador `!=` verifica si dos cadenas son iguales."
pasos:
  - "Analizar el significado del símbolo `!=`."
  - "Determinar si su función es de igualdad o desigualdad."
explicacion: "El operador `!=` significa 'no igual a' (desigualdad). Por lo tanto, verifica que las cadenas NO sean iguales, no que sean iguales."
```

### 6 — Uso de [[ ]] con ==
```yaml
metadata:
  materia: "bash"
  tema: "condicionales-en-bash"
  nivel: "basico"
  tags: ["bashism", "globbing", "completar"]
respuesta: "=="
tipo: completar
enunciado: "En un test avanzado con dobles corchetes `[[ ]]`, ¿qué operador permite coincidir con patrones glob (wildcards) en la variable `$archivo`? `if [[ $archivo ____ *.txt ]]; then`"
pasos:
  - "Diferenciar entre `[ ]` y `[[ ]]`."
  - "Identificar que `[[ ]]` soporta coincidencia de patrones con `==`."
explicacion: "Dentro de `[[ ]]`, el operador `==` permite el uso de comodines (globbing) a la derecha. En `[ ]`, `==` es un error de sintaxis o comportamiento no estándar."
```

### 7 — Operador lógico AND en [ ]
```yaml
metadata:
  materia: "bash"
  tema: "condicionales-en-bash"
  nivel: "basico"
  tags: ["test", "logica", "completar"]
respuesta: "-a"
tipo: completar
enunciado: "Completa la condición para verificar si el archivo existe Y es un directorio: `if [ -e $ruta ____ -d $ruta ]; then`"
pasos:
  - "Recordar que dentro de `[ ]` no se puede usar `&&`."
  - "Identificar el operador lógico AND específico del comando `test`."
explicacion: "Dentro de corchetes simples `[ ]`, el operador lógico AND es `-a`. Fuera de ellos (en `[[ ]]` o con `test` explícito en algunos shells), se usa `&&`."
```

### 8 — Operador lógico OR en [ ]
```yaml
metadata:
  materia: "bash"
  tema: "condicionales-en-bash"
  nivel: "basico"
  tags: ["test", "logica", "mc"]
respuesta: "-o"
tipo: mc
enunciado: "¿Cuál es el operador lógico OR válido dentro de corchetes simples `[ ]`?"
opciones_explicitas:
  - "||"
  - "OR"
  - "-o"
  - "and"
pasos:
  - "Analizar las opciones de sintaxis para lógica booleana en `test`."
  - "Descartar `||` que es para shells, no para el comando `test` interno."
explicacion: "El operador `-o` (or) es el válido dentro de `[ ]`. `||` se usa fuera de los corchetes para unir comandos, no como operador dentro del argumento de `test`."
```

### 9 — Verificar si una variable está vacía
```yaml
metadata:
  materia: "bash"
  tema: "condicionales-en-bash"
  nivel: "basico"
  tags: ["test", "string", "vf"]
respuesta: "verdadero"
tipo: vf
enunciado: "La condición `[ -z \"$VAR\" ]` devuelve verdadero si la variable `$VAR` tiene longitud cero."
pasos:
  - "Interpretar el flag `-z` del comando `test`."
  - "Confirmar que `-z` significa 'zero length' (longitud cero)."
explicacion: "Correcto. `-z` verifica si la cadena está vacía. Si `$VAR` no está definida o es `""`, la condición es verdadera."
```

### 10 — Verificar si una variable no está vacía
```yaml
metadata:
  materia: "bash"
  tema: "condicionales-en-bash"
  nivel: "basico"
  tags: ["test", "string", "completar"]
respuesta: "-n"
tipo: completar
enunciado: "Completa la condición para ejecutar el comando solo si `$usuario` NO está vacío: `if [ ____ \"$usuario\" ]; then`"
pasos:
  - "Identificar el flag opuesto a `-z` (longitud cero)."
  - "Recordar que `-n` significa 'non-zero length'."
explicacion: "El flag `-n` verifica si la longitud de la cadena es mayor que cero. Es la forma explícita de verificar que una variable tiene contenido."
```

### 11 — Estructura elif
```yaml
metadata:
  materia: "bash"
  tema: "condicionales-en-bash"
  nivel: "basico"
  tags: ["elif", "estructura", "mc"]
respuesta: "elif"
tipo: mc
enunciado: "¿Cómo se escribe correctamente una condición intermedia en Bash?"
opciones_explicitas:
  - "elseif"
  - "else if"
  - "elif"
  - "elsif"
pasos:
  - "Revisar la sintaxis de Bash para múltiples condiciones."
  - "Notar que es una palabra compuesta única."
explicacion: "En Bash, la palabra clave es `elif` (no `elseif`, `else if` ni `elsif` como en otros lenguajes)."
```

### 12 — Comparación de archivos más nuevos
```yaml
metadata:
  materia: "bash"
  tema: "condicionales-en-bash"
  nivel: "basico"
  tags: ["test", "archivos", "completar"]
respuesta: "-nt"
tipo: completar
enunciado: "Completa la condición para verificar si `backup.tar` es más nuevo que `source.txt`: `if [ backup.tar ____ source.txt ]; then`"
pasos:
  - "Buscar el operador de comparación de timestamps de archivos."
  - "Recordar que 'newer than' se abrevia como nt."
explicacion: "El operador `-nt` (newer than) verifica si el primer archivo tiene una fecha de modificación más reciente que el segundo."
```

### 13 — Comparación de archivos más viejos
```yaml
metadata:
  materia: "bash"
  tema: "condicionales-en-bash"
  nivel: "basico"
  tags: ["test", "archivos", "vf"]
respuesta: "verdadero"
tipo: vf
enunciado: "El operador `-ot` en un test `[ ]` verifica si el primer archivo es más antiguo (older than) que el segundo."
pasos:
  - "Interpretar `ot` como 'older than'."
  - "Confirmar su uso en comparaciones de metadatos de archivos."
explicacion: "Correcto. `-ot` compara las fechas de modificación y devuelve verdadero si el primer archivo es más antiguo que el segundo."
```

### 14 — Test de existencia de archivo
```yaml
metadata:
  materia: "bash"
  tema: "condicionales-en-bash"
  nivel: "basico"
  tags: ["test", "existencia", "mc"]
respuesta: "-e"
tipo: mc
enunciado: "¿Qué flag verifica si un archivo o directorio existe en el sistema de archivos?"
opciones_explicitas:
  - "-x"
  - "-e"
  - "-f"
  - "-d"
pasos:
  - "Analizar los flags de `test`."
  - "Diferenciar entre 'existente', 'ejecutable', 'archivo regular' y 'directorio'."
explicacion: "`-e` verifica la existencia general (cualquier tipo de archivo). `-f` es solo para archivos regulares, `-d` para directorios, `-x` para ejecutable."
```

### 15 — Test de archivo regular
```yaml
metadata:
  materia: "bash"
  tema: "condicionales-en-bash"
  nivel: "basico"
  tags: ["test", "tipo-archivo", "completar"]
respuesta: "-f"
tipo: completar
enunciado: "Completa la condición para asegurar que `$ruta` es un archivo regular (no un directorio o enlace): `if [ ____ $ruta ]; then`"
pasos:
  - "Identificar el flag para 'file' (archivo regular)."
  - "Descartar flags de directorio o ejecución."
explicacion: "`-f` devuelve verdadero si el archivo existe y es un archivo regular (regular file), excluyendo directorios, sockets, etc."
```

### 16 — Test de directorio
```yaml
metadata:
  materia: "bash"
  tema: "condicionales-en-bash"
  nivel: "basico"
  tags: ["test", "directorio", "vf"]
respuesta: "falso"
tipo: vf
enunciado: "El flag `-f` en un test `[ ]` devuelve verdadero si la ruta es un directorio."
pasos:
  - "Recordar la definición de `-f`."
  - "Contrastar con el flag correcto para directorios (`-d`)."
explicacion: "Falso. `-f` verifica archivos regulares. Para directorios se usa `-d`."
```

### 17 — Test de archivo ejecutable
```yaml
metadata:
  materia: "bash"
  tema: "condicionales-en-bash"
  nivel: "basico"
  tags: ["test", "permisos", "mc"]
respuesta: "-x"
tipo: mc
enunciado: "¿Qué flag verifica si un archivo tiene permisos de ejecución?"
opciones_explicitas:
  - "-r"
  - "-w"
  - "-x"
  - "-e"
pasos:
  - "Analizar los permisos básicos: lectura, escritura, ejecución."
  - "Asociar la letra correcta con la acción."
explicacion: "`-x` verifica el permiso de ejecución (execute). `-r` es lectura, `-w` es escritura."
```

### 18 — Operador OR en [[ ]]
```yaml
metadata:
  materia: "bash"
  tema: "condicionales-en-bash"
  nivel: "basico"
  tags: ["bashism", "logica", "completar"]
respuesta: "||"
tipo: completar
enunciado: "Completa la condición con OR dentro de dobles corchetes: `if [[ $a == 1 ____ $b == 2 ]]; then`"
pasos:
  - "Diferenciar la lógica interna de `[[ ]]` vs `[ ]`."
  - "Identificar que `[[ ]]` usa operadores de shell estándar."
explicacion: "Dentro de `[[ ]]`, se pueden usar los operadores lógicos de shell `||` y `&&` directamente, a diferencia de `-o` y `-a` de `[ ]`."
```

### 19 — Operador AND en [[ ]]
```yaml
metadata:
  materia: "bash"
  tema: "condicionales-en-bash"
  nivel: "basico"
  tags: ["bashism", "logica", "vf"]
respuesta: "verdadero"
tipo: vf
enunciado: "Dentro de `[[ ]]`, el operador `&&` funciona como AND lógico."
pasos:
  - "Verificar la sintaxis de `[[ ]]`."
  - "Confirmar el soporte de `&&`."
explicacion: "Correcto. `[[ ]]` soporta `&&` y `||` nativamente, lo cual es más seguro y legible que los flags `-a` y `-o` de `[ ]`."
```

### 20 — Longitud de una cadena
```yaml
metadata:
  materia: "bash"
  tema: "condicionales-en-bash"
  nivel: "basico"
  tags: ["string", "longitud", "completar"]
respuesta: "${#var}"
tipo: completar
enunciado: "Completa la condición para verificar si la longitud de `$nombre` es mayor a 5: `if [ ${#nombre} ____ 5 ]; then`"
pasos:
  - "Recordar la sintaxis para obtener la longitud de una variable."
  - "Usar un operador numérico para comparar."
explicacion: "`${#nombre}` devuelve la longitud de la cadena. Se compara con `-gt` (greater than) para ver si es mayor a 5."
```

### 21 — Operador mayor que numérico en [ ]
```yaml
metadata:
  materia: "bash"
  tema: "condicionales-en-bash"
  nivel: "basico"
  tags: ["test", "comparacion", "completar"]
respuesta: "-gt"
tipo: completar
enunciado: "Completa la condición para verificar si `$edad` es mayor que 18: `if [ $edad ____ 18 ]; then`"
pasos:
  - "Identificar la necesidad de una comparación numérica."
  - "Seleccionar el flag 'greater than' para `test`."
explicacion: "`-gt` (greater than) es el operador correcto para comparar números dentro de `[ ]`. No usar `>` que es redirección."
```

### 22 — Operador menor que numérico en [ ]
```yaml
metadata:
  materia: "bash"
  tema: "condicionales-en-bash"
  nivel: "basico"
  tags: ["test", "comparacion", "mc"]
respuesta: "-lt"
tipo: mc
enunciado: "¿Qué operador verifica si un número es menor que otro en `[ ]`?"
opciones_explicitas:
  - "<"
  - "-lt"
  - "-less"
  - "-le"
pasos:
  - "Analizar las opciones de comparación."
  - "Descartar `<` (redirección) y `-le` (less or equal)."
explicacion: "`-lt` (less than) es el operador específico para 'menor que' estricto en `test`."
```

### 23 — Operador mayor o igual numérico en [ ]
```yaml
metadata:
  materia: "bash"
  tema: "condicionales-en-bash"
  nivel: "basico"
  tags: ["test", "comparacion", "vf"]
respuesta: "falso"
tipo: vf
enunciado: "El operador `-gt` en un test `[ ]` verifica si un número es mayor o igual a otro."
pasos:
  - "Analizar la definición de `-gt`."
  - "Verificar si incluye la igualdad."
explicacion: "Falso. `-gt` es 'greater than' (estrictamente mayor). Para 'mayor o igual' se usa `-ge`."
```

### 24 — Operador menor o igual numérico en [ ]
```yaml
metadata:
  materia: "bash"
  tema: "condicionales-en-bash"
  nivel: "basico"
  tags: ["test", "comparacion", "completar"]
respuesta: "-le"
tipo: completar
enunciado: "Completa la condición para verificar si `$contador` es menor o igual a 10: `if [ $contador ____ 10 ]; then`"
pasos:
  - "Buscar el operador 'less or equal' para `test`."
  - "Diferenciarlo de `-lt`."
explicacion: "`-le` (less or equal) verifica que el número sea menor o igual al especificado."
```

### 25 — Estructura completa if-else-fi
```yaml
metadata:
  materia: "bash"
  tema: "condicionales-en-bash"
  nivel: "basico"
  tags: ["estructura", "sintaxis", "mc"]
respuesta: "fi"
tipo: mc
enunciado: "¿Con qué palabra clave se cierra correctamente un bloque `if`?"
opciones_explicitas:
  - "endif"
  - "end"
  - "fi"
  - "}"
pasos:
  - "Recordar la sintaxis clásica de shell scripts."
  - "Identificar el cierre del bloque condicional."
explicacion: "En Bash, el bloque `if` se cierra con `fi` (if escrito al revés). `endif` se usa en otros shells como `csh` o `zsh` (con opciones), pero no en bash estándar."
```