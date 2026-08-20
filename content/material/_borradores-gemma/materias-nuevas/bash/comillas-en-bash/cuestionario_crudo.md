### 1 — Variable con espacios simples
```yaml
metadata:
  materia: "bash"
  tema: "comillas-en-bash"
  nivel: "basico"
  tags: ["variables", "comillas-simples"]
respuesta: falso
tipo: vf
enunciado:
  - "Al asignar `VAR='Hola Mundo'` en Bash, la variable `VAR` contiene el valor literal `Hola Mundo` con los espacios incluidos."
pasos:
  - "Evaluar si las comillas simples preservan los espacios dentro de la asignación."
  - "Recordar que las comillas simples desactivan toda expansión en Bash."
explicacion: "Las comillas simples ('') protegen cada carácter del interior de la expansión de parámetros y de la sustitución de comandos. Por lo tanto, `VAR='Hola Mundo'` asigna exactamente la cadena 'Hola Mundo' (con espacios) a la variable."
```

### 2 — Expansión de variable con comillas dobles
```yaml
metadata:
  materia: "bash"
  tema: "comillas-en-bash"
  nivel: "basico"
  tags: ["variables", "comillas-dobles"]
respuesta: "$HOME"
tipo: completar
enunciado:
  - "Escribe la expresión correcta entre comillas dobles que se expandiría a la ruta del directorio home del usuario actual al ejecutar `echo $HOME`."
pasos:
  - "Identificar que las comillas dobles permiten la expansión de variables."
  - "Sintaxis estándar para variables en Bash: $NOMBRE."
explicacion: "Dentro de comillas dobles (`\"`), Bash expande las variables. `echo \"$HOME\"` imprimirá la ruta del home. Si se usaran comillas simples, imprimiría literalmente `$HOME`."
```

### 3 — Caracter especial en comillas simples
```yaml
metadata:
  materia: "bash"
  tema: "comillas-en-bash"
  nivel: "basico"
  tags: ["caracteres-especiales", "comillas-simples"]
respuesta: "$"
tipo: completar
enunciado:
  - "En Bash, ¿qué carácter deja de tener su significado especial de 'expansión de variable' cuando se encuentra dentro de comillas simples?"
pasos:
  - "Analizar el comportamiento de los caracteres especiales dentro de ''."
  - "Confirmar que no hay caracteres especiales dentro de comillas simples."
explicacion: "Dentro de comillas simples, todos los caracteres son literales. El signo `$` no se interpreta como inicio de variable, sino como el carácter dollar literal."
```

### 4 — Escapado de comilla doble
```yaml
metadata:
  materia: "bash"
  tema: "comillas-en-bash"
  nivel: "basico"
  tags: ["escape", "comillas-dobles"]
respuesta: "\"
tipo: completar
enunciado:
  - "Escribe la secuencia de escape necesaria para imprimir una comilla doble literal dentro de una cadena entre comillas dobles en Bash."
pasos:
  - "Reconocer que las comillas dobles necesitan ser escapadas si se desea su literalidad."
  - "Usar la barra invertida (`\`) antes del carácter a escapar."
explicacion: "Para incluir una comilla doble (`"`) dentro de una cadena delimitada por comillas dobles, se debe escapar con `\` (ej: `echo \"Valor: \\\"50\\\"\"` o `echo \"Precio: \\$50\"` si se quiere literal, pero aquí pedimos la comilla). La secuencia es `\\\"` o simplemente `\` antes de la comilla si el contexto lo permite, pero la secuencia de escape es `\"`."
```

### 5 — Comando en subshell con comillas
```yaml
metadata:
  materia: "bash"
  tema: "comillas-en-bash"
  nivel: "basico"
  tags: ["subshell", "comillas-dobles"]
respuesta: "$(ls)"
tipo: completar
enunciado:
  - "Escribe la sintaxis de sustitución de comandos moderna que funciona correctamente dentro de comillas dobles para listar archivos."
pasos:
  - "Identificar la sintaxis preferida sobre el backtick (`)."
  - "La forma moderna es `$()`."
explicacion: "Dentro de comillas dobles, `$(ls)` se expande a la salida del comando `ls`. Los backticks antiguos (`` `ls` ``) también funcionan pero son menos legibles y anidables."
```

### 6 — Comillas simples y comillas dobles anidadas
```yaml
metadata:
  materia: "bash"
  tema: "comillas-en-bash"
  nivel: "basico"
  tags: ["anidacion", "comillas"]
respuesta: "no se puede"
tipo: completar
enunciado:
  - "¿Es posible abrir comillas simples dentro de una cadena de comillas simples en Bash para escapar una comilla simple interna?"
pasos:
  - "Evaluar la regla de anidación de comillas simples."
  - "Bash no permite anidar comillas del mismo tipo."
explicacion: "No existe `''` dentro de `''`. Para incluir una comilla simple dentro de una cadena entre comillas simples, se debe cerrar la cadena, escapar la comilla y abrirla de nuevo: `'text'\''more'`."
```

### 7 — Espacio en nombre de archivo con comillas simples
```yaml
metadata:
  materia: "bash"
  tema: "comillas-en-bash"
  nivel: "basico"
  tags: ["archivos", "comillas-simples"]
respuesta: "my file.txt"
tipo: completar
enunciado:
  - "Si existe un archivo llamado `my file.txt`, escribe el argumento correcto entre comillas simples para pasarlo a `cat` sin que el shell lo divida."
pasos:
  - "Usar comillas simples para proteger el espacio."
  - "La sintaxis es `cat 'nombre archivo'`."
explicacion: "Las comillas simples (`'`) agrupan los caracteres como una sola palabra. `cat 'my file.txt'` funciona correctamente. Sin comillas, el shell interpretaría `my` y `file.txt` como dos argumentos separados."
```

### 8 — Expansión de tilde en comillas dobles
```yaml
metadata:
  materia: "bash"
  tema: "comillas-en-bash"
  nivel: "basico"
  tags: ["tilde", "comillas-dobles"]
respuesta: "~"
tipo: completar
enunciado:
  - "Si asignas `VAR='~'`, ¿qué imprime `echo $VAR`?"
pasos:
  - "Recordar que las comillas simples no expanden la tilde."
  - "La variable contiene el literal tilde."
explicacion: "Dentro de comillas simples, `~` no se expande al directorio home. Se asigna literalmente. Por tanto, `echo $VAR` imprime `~`."
```

### 9 — Comillas dobles y expansión de tilde
```yaml
metadata:
  materia: "bash"
  tema: "comillas-en-bash"
  nivel: "basico"
  tags: ["tilde", "comillas-dobles"]
respuesta: "/home/user"
tipo: completar
enunciado:
  - "Si la variable HOME es `/home/user`, ¿qué imprime `echo \"$HOME\"`?"
pasos:
  - "Verificar si las comillas dobles permiten la expansión de HOME."
  - "Sí, lo permiten."
explicacion: "Las comillas dobles permiten la expansión de variables y la tilde. `echo \"$HOME\"` expande HOME a su valor real (ej. `/home/user`)."
```

### 10 — Comando con argumentos múltiples y comillas
```yaml
metadata:
  materia: "bash"
  tema: "comillas-en-bash"
  nivel: "basico"
  tags: ["argumentos", "comillas"]
respuesta: "grep 'pattern' file.txt"
tipo: completar
enunciado:
  - "Escribe el comando completo para buscar 'pattern' en `file.txt` asumiendo que 'pattern' podría contener espacios (aunque aquí es simple, usa comillas por seguridad estándar)."
pasos:
  - "Usar comillas simples para proteger el patrón de búsqueda."
  - "Sintaxis: `grep 'patrón' archivo`."
explicacion: "Es una buena práctica usar comillas simples para los argumentos de `grep` para evitar que el shell interprete caracteres especiales del patrón (como `*`, `?`, `[`). `grep 'pattern' file.txt`."
```

### 11 — Caracter de salto de línea en comillas simples
```yaml
metadata:
  materia: "bash"
  tema: "comillas-en-bash"
  nivel: "basico"
  tags: ["multilinea", "comillas-simples"]
respuesta: "literal"
tipo: completar
enunciado:
  - "Si escribes `VAR='Linea1
Linea2'`, ¿qué contiene `VAR`?"
pasos:
  - "Evaluar si las comillas simples permiten saltos de línea literales."
  - "Sí, los permiten y los guardan como parte del valor."
explicacion: "Las comillas simples permiten incluir saltos de línea reales en el valor de la variable. `VAR` contendrá `Linea1\nLinea2` (con el salto de línea real)."
```

### 12 — Expansión de variable en comillas simples
```yaml
metadata:
  materia: "bash"
  tema: "comillas-en-bash"
  nivel: "basico"
  tags: ["expansion", "comillas-simples"]
respuesta: "No se expande"
tipo: completar
enunciado:
  - "Si `X=5`, ¿qué imprime `echo '$X'`?"
pasos:
  - "Determinar si `$X` se expande dentro de `''`."
  - "No, se imprime literalmente."
explicacion: "Dentro de comillas simples, `$X` no se expande. El comando imprime la cadena literal `$X`."
```

### 13 — Comillas dobles y `$` literal
```yaml
metadata:
  materia: "bash"
  tema: "comillas-en-bash"
  nivel: "basico"
  tags: ["escape", "comillas-dobles"]
respuesta: "\$"
tipo: completar
enunciado:
  - "Escribe la secuencia para imprimir un signo de dólar literal (`$`) dentro de comillas dobles."
pasos:
  - "Escapar el `$` con `\`."
  - "La secuencia es `\$`."
explicacion: "Dentro de comillas dobles, `\$` imprime un `$` literal sin intentar expandir una variable."
```

### 14 — Comillas simples y `$` literal
```yaml
metadata:
  materia: "bash"
  tema: "comillas-en-bash"
  nivel: "basico"
  tags: ["literal", "comillas-simples"]
respuesta: "$"
tipo: completar
enunciado:
  - "Escribe qué imprime `echo '$'`."
pasos:
  - "Las comillas simples no requieren escape para `$`."
  - "Imprime el carácter literal."
explicacion: "Dentro de comillas simples, `$` es un carácter literal. `echo '$'` imprime `$`."
```

### 15 — Comillas dobles y `!` en bash interactivo
```yaml
metadata:
  materia: "bash"
  tema: "comillas-en-bash"
  nivel: "basico"
  tags: ["history-expansion", "comillas-dobles"]
respuesta: "error"
tipo: completar
enunciado:
  - "En un shell interactivo con history expansion habilitada, ¿qué ocurre con `echo "!"`?"
pasos:
  - "Evaluar la expansión de historia en comillas dobles."
  - "Puede causar error o expansión inesperada."
explicacion: "En Bash interactivo, `!` dentro de comillas dobles puede intentar expandir la historia de comandos, lo que suele resultar en un error `bash: !: event not found` a menos que se escape (`\"\\!\"`) o se deshabilite la expansión de historia."
```

### 16 — Comillas simples y `!`
```yaml
metadata:
  materia: "bash"
  tema: "comillas-en-bash"
  nivel: "basico"
  tags: ["history-expansion", "comillas-simples"]
respuesta: "!"
tipo: completar
enunciado:
  - "Escribe qué imprime `echo '!'`."
pasos:
  - "Las comillas simples protegen de la expansión de historia."
  - "Imprime literalmente."
explicacion: "Las comillas simples desactivan la expansión de historia. `echo '!'` imprime `!`."
```

### 17 — Comillas dobles y `(` y `)`
```yaml
metadata:
  materia: "bash"
  tema: "comillas-en-bash"
  nivel: "basico"
  tags: ["subshell", "comillas-dobles"]
respuesta: "funciona"
tipo: completar
enunciado:
  - "¿Se puede usar `$(...)` dentro de comillas dobles?"
pasos:
  - "Verificar la compatibilidad de sustitución de comandos."
  - "Sí, es la forma estándar."
explicacion: "Las comillas dobles permiten la sustitución de comandos `$(...)`. `echo \"Fecha: $(date)\"` funciona correctamente."
```

### 18 — Comillas simples y `(` y `)`
```yaml
metadata:
  materia: "bash"
  tema: "comillas-en-bash"
  nivel: "basico"
  tags: ["literal", "comillas-simples"]
respuesta: "literal"
tipo: completar
enunciado:
  - "Escribe qué imprime `echo '$(date)'`."
pasos:
  - "Las comillas simples no expanden `$(...)`."
  - "Imprime la cadena literal."
explicacion: "Dentro de comillas simples, `$(date)` no se ejecuta. Se imprime la cadena literal `$(date)`."
```

### 19 — Comillas dobles y `[` y `]`
```yaml
metadata:
  materia: "bash"
  tema: "comillas-en-bash"
  nivel: "basico"
  tags: ["glob", "comillas-dobles"]
respuesta: "no expande"
tipo: completar
enunciado:
  - "Si hay un archivo `test.txt`, ¿qué imprime `echo 'test*.txt'`?"
pasos:
  - "Evaluar la expansión de globbing en comillas simples."
  - "No se expande."
explicacion: "Las comillas simples desactivan la expansión de glob (wildcards). `echo 'test*.txt'` imprime literalmente `test*.txt`, no el nombre del archivo."
```

### 20 — Comillas dobles y `[` y `]`
```yaml
metadata:
  materia: "bash"
  tema: "comillas-en-bash"
  nivel: "basico"
  tags: ["glob", "comillas-dobles"]
respuesta: "expande"
tipo: completar
enunciado:
  - "Si hay un archivo `test.txt`, ¿qué imprime `echo \"test*.txt\"`?"
pasos:
  - "Evaluar la expansión de globbing en comillas dobles."
  - "Se expande si hay coincidencia."
explicacion: "Las comillas dobles NO desactivan la expansión de glob. Si `test*.txt` coincide con archivos, se expande a la lista de nombres de archivos."
```

### 21 — Comillas simples y `\`
```yaml
metadata:
  materia: "bash"
  tema: "comillas-en-bash"
  nivel: "basico"
  tags: ["escape", "comillas-simples"]
respuesta: "\\"
tipo: completar
enunciado:
  - "Escribe qué imprime `echo 'a\b'`."
pasos:
  - "Las comillas simples no interpretan `\` como escape."
  - "Imprime literalmente."
explicacion: "Dentro de comillas simples, `\` es un carácter literal. `echo 'a\b'` imprime `a\b`."
```

### 22 — Comillas dobles y `\`
```yaml
metadata:
  materia: "bash"
  tema: "comillas-en-bash"
  nivel: "basico"
  tags: ["escape", "comillas-dobles"]
respuesta: "a\b"
tipo: completar
enunciado:
  - "Escribe qué imprime `echo \"a\\b\"`."
pasos:
  - "Evaluar el escape de `\` en comillas dobles."
  - `\\` se convierte en `\` literal."
explicacion: "Dentro de comillas dobles, `\\` se convierte en un `\` literal. `echo \"a\\b\"` imprime `a\b`."
```

### 23 — Comillas simples y comilla simple interna
```yaml
metadata:
  materia: "bash"
  tema: "comillas-en-bash"
  nivel: "basico"
  tags: ["escape", "comillas-simples"]
respuesta: "it's"
tipo: completar
enunciado:
  - "Escribe el resultado de `echo 'it'\''s'`."
pasos:
  - "Desglosar la secuencia de comillas simples y escape."
  - `'it'` + `\'` + `'s'`."
explicacion: "Se cierra la primera cadena simple, se escapa la comilla simple con `\'`, y se abre una nueva cadena simple. El resultado es `it's`."
```

### 24 — Comillas dobles y comilla doble interna
```yaml
metadata:
  materia: "bash"
  tema: "comillas-en-bash"
  nivel: "basico"
  tags: ["escape", "comillas-dobles"]
respuesta: "he said \"hi\""
tipo: completar
enunciado:
  - "Escribe el resultado de `echo \"he said \\\"hi\\\"\"`."
pasos:
  - "Desglosar el escape de comillas dobles."
  - `\\\"` se convierte en `\"`."
explicacion: "Dentro de comillas dobles, `\\\"` se convierte en `\"` (comilla doble escapada). El resultado es `he said \"hi\"`."
```

### 25 — Comillas simples y comilla doble interna
```yaml
metadata:
  materia: "bash"
  tema: "comillas-en-bash"
  nivel: "basico"
  tags: ["literal", "comillas-simples"]
respuesta: "he said \"hi\""
tipo: completar
enunciado:
  - "Escribe el resultado de `echo 'he said "hi"'`."
pasos:
  - "Evaluar comillas dobles dentro de comillas simples."
  - "Son literales."
explicacion: "Dentro de comillas simples, las comillas dobles son caracteres literales. `echo 'he said "hi"'` imprime `he said "hi"`."
```