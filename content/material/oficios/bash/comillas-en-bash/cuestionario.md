# Bash — Comillas y escapes (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Para qué las comillas

```
metadata:
  materia: "bash"
  tema: "comillas_en_bash"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Para controlar cómo se cortan las palabras y cuándo se expanden los símbolos especiales", "Para ejecutar un comando en segundo plano", "Para crear comentarios", "Para declarar el tipo de una variable"]
respuesta: "Para controlar cómo se cortan las palabras y cuándo se expanden los símbolos especiales"

enunciado: "¿Para qué se usan principalmente las comillas en la shell?"

explicacion: |
  Las comillas deciden si un texto con espacios es un solo argumento y si `$`, `*` y otros símbolos se reemplazan o se dejan literales.
```

### 2 — Comillas simples

```
metadata:
  materia: "bash"
  tema: "comillas_en_bash"
  nivel: "basico"
  tags: ["simples"]

tipo: mc
opciones_explicitas: ["n vale $n", "n vale 5", "n vale", "Un error"]
respuesta: "n vale $n"

enunciado: "Si `n=5`, ¿qué muestra `echo 'n vale $n'`?"

explicacion: |
  Las comillas simples dejan **todo** literal: no hay expansión de variables.
```

### 3 — Comillas dobles

```
metadata:
  materia: "bash"
  tema: "comillas_en_bash"
  nivel: "basico"
  tags: ["dobles"]

tipo: mc
opciones_explicitas: ["n vale 5", "n vale $n", "n vale", "Un error"]
respuesta: "n vale 5"

enunciado: "Si `n=5`, ¿qué muestra `echo \"n vale $n\"`?"

explicacion: |
  Las comillas dobles juntan el texto en un solo argumento pero siguen expandiendo las variables.
```

### 4 — Sin comillas

```
metadata:
  materia: "bash"
  tema: "comillas_en_bash"
  nivel: "basico"
  tags: ["palabras"]

tipo: mc
opciones_explicitas: ["hola mundo", "hola      mundo", "\"hola mundo\"", "hola"]
respuesta: "hola mundo"

enunciado: "¿Qué muestra `echo hola      mundo` (con muchos espacios)?"

explicacion: |
  Sin comillas, la shell corta en palabras (`hola` y `mundo`) y `echo` las imprime separadas por un solo espacio.
```

### 5 — Espacios en un archivo

```
metadata:
  materia: "bash"
  tema: "comillas_en_bash"
  nivel: "basico"
  tags: ["espacios"]

tipo: mc
opciones_explicitas: ["ls \"mis fotos\"", "ls mis fotos", "ls 'mis' 'fotos'", "ls mis+fotos"]
respuesta: "ls \"mis fotos\""

enunciado: "Existe un archivo llamado `mis fotos`. ¿Cuál es la forma correcta de listarlo?"

explicacion: |
  Sin comillas, `ls mis fotos` busca dos archivos. Con comillas (o `mis\ fotos`) se pide uno solo.
```

### 6 — Citar variables

```
metadata:
  materia: "bash"
  tema: "comillas_en_bash"
  nivel: "intermedio"
  tags: ["citar"]

tipo: mc
opciones_explicitas: ["rm \"$archivo\"", "rm $archivo", "rm '$archivo'", "rm $(archivo)"]
respuesta: "rm \"$archivo\""

enunciado: "Si `archivo=\"mis fotos\"`, ¿cuál es la forma segura de borrarlo?"

explicacion: |
  `rm $archivo` se expandiría a `rm mis fotos` (dos archivos). Con `"$archivo"` el valor llega como un solo argumento. Con comillas simples no se expandiría.
```

### 7 — Regla de oro

```
metadata:
  materia: "bash"
  tema: "comillas_en_bash"
  nivel: "intermedio"
  tags: ["citar"]

tipo: vf
respuesta: verdadero

enunciado: "Es una buena práctica escribir siempre `\"$variable\"` entre comillas dobles, salvo que se quiera a propósito que la shell la corte en palabras."

explicacion: |
  Citar la expansión evita errores con espacios, comodines y valores vacíos. Es una de las primeras reglas para scripts confiables.
```

### 8 — Mostrar un dólar

```
metadata:
  materia: "bash"
  tema: "comillas_en_bash"
  nivel: "basico"
  tags: ["escape"]

tipo: completar
respuesta: "\\"
respuestas_validas:
  - "\\"

enunciado: "Para mostrar el texto `$5` literalmente se escribe `echo ___$5`."

explicacion: |
  La barra invertida escapa el `$`: `echo \$5` imprime `$5`. También sirve `echo '$5'`.
```

### 9 — Escapar comillas

```
metadata:
  materia: "bash"
  tema: "comillas_en_bash"
  nivel: "intermedio"
  tags: ["escape"]

tipo: mc
opciones_explicitas: ["echo \"Dijo \\\"hola\\\"\"", "echo \"Dijo \"hola\"\"", "echo 'Dijo \"hola\"' con dos comillas simples seguidas", "No se puede"]
respuesta: "echo \"Dijo \\\"hola\\\"\""

enunciado: "¿Cómo se muestra `Dijo \"hola\"` con comillas dobles adentro?"

explicacion: |
  Dentro de comillas dobles se escapan las comillas con `\"`. Otra opción es encerrar todo en comillas simples: `echo 'Dijo "hola"'`.
```

### 10 — Comodín entre comillas

```
metadata:
  materia: "bash"
  tema: "comillas_en_bash"
  nivel: "intermedio"
  tags: ["comodines"]

tipo: mc
opciones_explicitas: ["Busca un archivo que se llame literalmente `*.txt`", "Lista todos los archivos .txt", "Lista todos los archivos", "Da error de sintaxis"]
respuesta: "Busca un archivo que se llame literalmente `*.txt`"

enunciado: "¿Qué hace `ls \"*.txt\"` (con comillas)?"

explicacion: |
  Dentro de comillas, el `*` no se expande: es un carácter literal.
```

### 11 — Sin comillas el comodín

```
metadata:
  materia: "bash"
  tema: "comillas_en_bash"
  nivel: "basico"
  tags: ["comodines"]

tipo: mc
opciones_explicitas: ["La shell reemplaza `*.txt` por los nombres de los archivos .txt y `ls` los lista", "Busca un archivo llamado `*.txt`", "Da error", "Borra los archivos .txt"]
respuesta: "La shell reemplaza `*.txt` por los nombres de los archivos .txt y `ls` los lista"

enunciado: "¿Qué hace `ls *.txt` (sin comillas)?"

explicacion: |
  El `*` lo expande la shell **antes** de ejecutar `ls`; `ls` recibe ya la lista de nombres.
```

### 12 — Comilla simple dentro

```
metadata:
  materia: "bash"
  tema: "comillas_en_bash"
  nivel: "intermedio"
  tags: ["simples"]

tipo: mc
opciones_explicitas: ["echo \"it's\"", "echo 'it's'", "echo it's", "echo 'it''s'"]
respuesta: "echo \"it's\""

enunciado: "¿Cuál de estas formas muestra `it's` correctamente?"

explicacion: |
  Una comilla simple no puede ir dentro de comillas simples. Con comillas dobles, sí.
```

### 13 — Sustitución entre comillas

```
metadata:
  materia: "bash"
  tema: "comillas_en_bash"
  nivel: "intermedio"
  tags: ["sustitucion"]

tipo: mc
opciones_explicitas: ["Con comillas, la salida se trata como un solo argumento (conserva los espacios)", "Ninguna en ningún caso", "Sin comillas no se ejecuta `date`", "Con comillas no se ejecuta `date`"]
respuesta: "Con comillas, la salida se trata como un solo argumento (conserva los espacios)"

enunciado: "¿Qué diferencia hay entre `echo $(date)` y `echo \"$(date)\"`?"

explicacion: |
  En ambos casos se ejecuta `date`; las comillas solo evitan que su salida se corte en palabras.
```

### 14 — Salto de línea

```
metadata:
  materia: "bash"
  tema: "comillas_en_bash"
  nivel: "avanzado"
  tags: ["ansi-c"]

tipo: mc
opciones_explicitas: ["echo $'linea1\\nlinea2'", "echo 'linea1\\nlinea2'", "echo \"linea1\\nlinea2\" siempre", "echo linea1/nlinea2"]
respuesta: "echo $'linea1\\nlinea2'"

enunciado: "¿Cómo se escribe un salto de línea con `echo` usando comillas especiales?"

explicacion: |
  `$'...'` interpreta `\n` y `\t`. Con comillas simples o dobles comunes se imprimiría la barra y la n tal cual (salvo con `echo -e`).
```

### 15 — Variables en comillas simples

```
metadata:
  materia: "bash"
  tema: "comillas_en_bash"
  nivel: "basico"
  tags: ["simples"]

tipo: vf
respuesta: falso

enunciado: "`echo 'Hola $USER'` muestra el nombre del usuario actual."

explicacion: |
  Las comillas simples impiden la expansión: muestra el texto `Hola $USER`. Para ver el usuario hay que usar comillas dobles.
```

### 16 — Continuar una línea

```
metadata:
  materia: "bash"
  tema: "comillas_en_bash"
  nivel: "intermedio"
  tags: ["escape"]

tipo: completar
respuesta: "barra"
respuestas_validas:
  - "barra"
  - "barra invertida"
  - "\\"

enunciado: "Para continuar un comando en la línea siguiente, la primera termina con una ___ invertida."

explicacion: |
  La barra invertida (`\`) justo antes del salto de línea indica que el comando sigue abajo.
```

### 17 — Qué recibe el comando

```
metadata:
  materia: "bash"
  tema: "comillas_en_bash"
  nivel: "avanzado"
  tags: ["citar"]

tipo: mc
opciones_explicitas: ["2", "1", "3", "0"]
respuesta: "2"

enunciado: "Con `texto=\"a   b\"`, ¿cuántos argumentos recibe `programa $texto` (sin comillas)?"

explicacion: |
  Sin comillas la expansión se corta en palabras: `a` y `b`. Con `"$texto"` recibiría un solo argumento ("a   b").
```

### 18 — Cuándo usar simples

```
metadata:
  materia: "bash"
  tema: "comillas_en_bash"
  nivel: "basico"
  tags: ["simples"]

tipo: mc
opciones_explicitas: ["Cuando querés que NADA se expanda (por ejemplo, un `$` o un `*` literales)", "Siempre, porque son más rápidas", "Cuando querés usar variables", "Nunca, están en desuso"]
respuesta: "Cuando querés que NADA se expanda (por ejemplo, un `$` o un `*` literales)"

enunciado: "¿Cuándo conviene usar comillas simples?"

explicacion: |
  Las simples son ideales para patrones y textos literales, como un patrón de `grep` o un script de `awk`.
```

### 19 — Patrones de búsqueda

```
metadata:
  materia: "bash"
  tema: "comillas_en_bash"
  nivel: "intermedio"
  tags: ["patrones"]

tipo: mc
opciones_explicitas: ["Para que la shell no interprete el `*` y se lo pase intacto a grep", "Para que grep corra más rápido", "Para ignorar mayúsculas", "Para buscar en subcarpetas"]
respuesta: "Para que la shell no interprete el `*` y se lo pase intacto a grep"

enunciado: "¿Por qué conviene escribir `grep 'a.*b' archivo` con comillas simples?"

explicacion: |
  Sin comillas, la shell podría expandir `a.*b` como un comodín de archivos antes de llamar a `grep`.
```

### 20 — Dobles y backticks

```
metadata:
  materia: "bash"
  tema: "comillas_en_bash"
  nivel: "avanzado"
  tags: ["dobles"]

tipo: vf
respuesta: verdadero

enunciado: "Dentro de comillas dobles, `` `date` `` también ejecuta el comando `date`."

explicacion: |
  Las comillas dobles siguen expandiendo variables, sustituciones de comandos (`$(...)` y las comillas invertidas) y escapes con barra invertida.
```

