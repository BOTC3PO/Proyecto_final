### 1 — Sustitución global de palabras
```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "intermedio"
  tags: ["sustitucion", "global", "g"]
enunciado: "Escribe el comando sed que reemplace TODAS las ocurrencias de la palabra 'error' por 'warning' en el archivo 'log.txt', guardando el resultado en 'log_fixed.txt'."
respuesta: "sed 's/error/warning/g' log.txt > log_fixed.txt"
tipo: completar
respuestas_validas:
  - "sed 's/error/warning/g' log.txt > log_fixed.txt"
  - "sed s/error/warning/g log.txt > log_fixed.txt"
pasos:
  - "Identificar el comando 'sed'."
  - "Usar la expresión regular 's/error/warning/g' para sustitución global."
  - "Redirigir la salida al archivo de destino."
explicacion: "La bandera 'g' en la expresión 's/pattern/replacement/g' indica que se deben reemplazar todas las ocurrencias en la línea, no solo la primera."
```

### 2 — Eliminar líneas en blanco
```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "intermedio"
  tags: ["eliminacion", "lineas-vacias", "regex"]
enunciado: "Completa el comando para eliminar todas las líneas que estén completamente vacías (sin espacios ni caracteres) del archivo 'input.txt' y guardar el resultado en 'output.txt'."
respuesta: "sed '/^$/d' input.txt > output.txt"
tipo: completar
respuestas_validas:
  - "sed '/^$/d' input.txt > output.txt"
  - "sed '/^[[:space:]]*$/d' input.txt > output.txt"
  - "sed '/^ *$/d' input.txt > output.txt"
pasos:
  - "Usar 'sed' para procesar el flujo."
  - "Usar el patrón '/^$/' para coincidir con líneas vacías."
  - "Usar el comando 'd' de delete dentro de las comillas del patrón."
explicacion: "'/^$/' coincide con líneas que empiezan y terminan inmediatamente sin contenido intermedio. El comando 'd' elimina esas líneas del patr space."
```

### 3 — Insertar texto después de una coincidencia
```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "intermedio"
  tags: ["insercion", "despues", "a-comando"]
enunciado: "Escribe el comando sed para insertar la línea '--- FIN DEL REPORTE ---' DESPUÉS de cada línea que contenga la palabra 'Total' en 'reporte.txt'."
respuesta: "sed '/Total/a\\--- FIN DEL REPORTE ---' reporte.txt"
tipo: completar
respuestas_validas:
  - "sed '/Total/a\\--- FIN DEL REPORTE ---' reporte.txt"
  - "sed '/Total/a --- FIN DEL REPORTE ---' reporte.txt"
  - "sed '/Total/a\\--- FIN DEL REPORTE ---' -i reporte.txt"
pasos:
  - "Seleccionar la línea con '/Total/'."
  - "Usar el comando 'a' (append) para añadir texto después."
  - "Especificar el texto a insertar."
explicacion: "El comando 'a' en sed anexa texto después de la línea que coincide con el patrón especificado."
```

### 4 — Verificar comportamiento de 'i' case-insensitive
```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "intermedio"
  tags: ["case-insensitive", "bandera", "i"]
enunciado: "Verdadero o Falso: El comando `sed 's/fox/DOG/I' archivo.txt` reemplazará 'fox', 'Fox', 'FOX' y 'fOx' por 'DOG', asumiendo que la implementación de sed soporta la bandera 'I' (o 'i') para ignorar mayúsculas/minúsculas."
respuesta: verdadero
tipo: vf
pasos:
  - "Analizar la bandera 'I' al final de la expresión s/pattern/replacement/I."
  - "Confirmar que esta bandera habilita la coincidencia insensible a mayúsculas en sed moderno."
explicacion: "La bandera 'i' (o 'I' en GNU sed) hace que la coincidencia del patrón sea insensible a mayúsculas/minúsculas."
```

### 5 — Extraer dominio de correo
```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "intermedio"
  tags: ["extraccion", "captura", "grupos"]
enunciado: "Completa el comando sed para extraer el dominio (parte después del @) de las direcciones de email en 'emails.txt'. Asume que el formato es user@domain.tld y quieres solo 'domain.tld'."
respuesta: "sed 's/.*@//g' emails.txt"
tipo: completar
respuestas_validas:
  - "sed 's/.*@//g' emails.txt"
  - "sed 's/^.*@//' emails.txt"
pasos:
  - "Usar 's' para sustituir."
  - "Usar '.*@' para coincidir todo hasta el último @."
  - "Dejar el reemplazo vacío para eliminar la parte izquierda."
explicacion: "El patrón '.*@' captura todo hasta el signo @. Al reemplazarlo con nada, se deja solo la parte derecha (el dominio)."
```

### 6 — Modificación in-place con backup
```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "intermedio"
  tags: ["in-place", "backup", "i-bandera"]
enunciado: "Escribe el comando sed para modificar el archivo 'config.ini' en el lugar (in-place) y crear una copia de seguridad con la extensión '.bak', reemplazando 'port=8080' por 'port=9090'."
respuesta: "sed -i.bak 's/port=8080/port=9090/' config.ini"
tipo: completar
respuestas_validas:
  - "sed -i.bak 's/port=8080/port=9090/' config.ini"
  - "sed -i -e 's/port=8080/port=9090/' config.ini"
  - "sed -i 's/port=8080/port=9090/' config.ini"
pasos:
  - "Usar la bandera '-i' para edición in-place."
  - "Opcionalmente especificar la extensión de backup '.bak' inmediatamente después de '-i'."
  - "Definir la sustitución deseada."
explicacion: "La bandera '-i' edita el archivo directamente. Si se añade un sufijo (ej. '-i.bak'), sed crea un backup antes de modificar."
```

### 7 — Imprimir rango de líneas
```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "intermedio"
  tags: ["imprimir", "rango", "n-flags"]
enunciado: "Completa el comando para imprimir SOLO las líneas desde la 10 hasta la 20 del archivo 'log.txt'."
respuesta: "sed -n '10,20p' log.txt"
tipo: completar
respuestas_validas:
  - "sed -n '10,20p' log.txt"
  - "sed -n 10,20p log.txt"
pasos:
  - "Usar '-n' para suprimir la impresión automática."
  - "Especificar el rango '10,20'."
  - "Usar la bandera 'p' (print) solo para ese rango."
explicacion: "Por defecto, sed imprime cada línea. '-n' desactiva esto. '10,20p' imprime solo las líneas 10 a 20."
```

### 8 -- Sustitución con referencia inversa (GNU sed)
```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "intermedio"
  tags: ["referencia-inversa", "grupo", "backreference"]
enunciado: "Escribe el comando sed para intercambiar las dos primeras palabras de cada línea en 'frases.txt'. Asume que las palabras están separadas por un solo espacio."
respuesta: "sed 's/\\([^ ]*\\) \\([^ ]*\\)/\\2 \\1/' frases.txt"
tipo: completar
respuestas_validas:
  - "sed 's/\\([^ ]*\\) \\([^ ]*\\)/\\2 \\1/' frases.txt"
  - "sed 's/\\([^[:space:]]*\\) \\([^[:space:]]*\\)/\\2 \\1/' frases.txt"
pasos:
  - "Usar paréntesis escapados '\\(' y '\\)' para capturar grupos."
  - "Usar '\\1' y '\\2' en la parte de reemplazo para referenciarlos."
  - "Invertir el orden de los grupos en el reemplazo."
explicacion: "Los grupos capturados se referencian con \\1, \\2, etc. Al poner \\2 antes de \\1 en el reemplazo, se intercambian."
```

### 9 -- Verificar comportamiento de 'N' (next line)
```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "intermedio"
  tags: ["buffer-de-patron", "next", "N"]
enunciado: "Verdadero o Falso: El comando `sed -n '/^start$/,/^end$/p' archivo.txt` imprimirá desde la línea que coincide con 'start' hasta la línea que coincide con 'end', incluyendo ambas, SI las coincidencias están en líneas consecutivas o separadas, pero NO funcionará correctamente si 'start' y 'end' están en la misma línea."
respuesta: verdadero
tipo: vf
pasos:
  - "Analizar el rango de direcciones '/^start$/,/^end$/'."
  - "Confirmar que los rangos en sed operan sobre líneas individuales."
explicacion: "Los rangos en sed se definen por líneas. No pueden coincidir con dos patrones en la misma línea simultáneamente como inicio y fin del rango."
```

### 10 -- Eliminar caracteres de escape
```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "intermedio"
  tags: ["eliminacion", "backslash", "caracteres-escape"]
enunciado: "Completa el comando sed para eliminar todos los caracteres de barra invertida ('\') del archivo 'datos.txt'."
respuesta: "sed 's/\\\\//g' datos.txt"
tipo: completar
respuestas_validas:
  - "sed 's/\\\\//g' datos.txt"
  - "sed 's/\\//g' datos.txt"
  - "sed 's/\\\\//g' -i datos.txt"
pasos:
  - "Escapar la barra invertida en el patrón. En bash, se necesita '\\\\' para pasar '\\\\' a sed, o '\\\\' dentro de comillas simples si el shell no interpreta."
  - "Dejar el reemplazo vacío."
explicacion: "Para coincidir con un literal '\', se debe escapar. En la expresión sed, '\\' coincide con un '\'. En la línea de comando bash, a menudo se requiere '\\\\' o '\\' dependiendo del contexto de quoting."
```

### 11 -- Sustituir solo en la primera ocurrencia
```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "intermedio"
  tags: ["sustitucion", "primera-ocurrencia", "sin-g"]
enunciado: "Escribe el comando sed para reemplazar SOLO la primera ocurrencia de 'foo' por 'bar' en cada línea del archivo 'test.txt'."
respuesta: "sed 's/foo/bar/' test.txt"
tipo: completar
respuestas_validas:
  - "sed 's/foo/bar/' test.txt"
  - "sed s/foo/bar/ test.txt"
pasos:
  - "Usar 's' para sustituir."
  - "NO incluir la bandera 'g'."
  - "Por defecto, sed reemplaza solo la primera coincidencia por línea."
explicacion: "Sin la bandera 'g', sed reemplaza únicamente la primera coincidencia en cada línea procesada."
```

### 12 -- Imprimir líneas que NO coinciden
```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "intermedio"
  tags: ["negacion", "invert-match", "v-bandera"]
enunciado: "Completa el comando sed para imprimir todas las líneas de 'archivo.txt' que NO contengan la palabra 'ERROR'."
respuesta: "sed -n '/ERROR/!p' archivo.txt"
tipo: completar
respuestas_validas:
  - "sed -n '/ERROR/!p' archivo.txt"
  - "sed '/ERROR/d' archivo.txt"
  - "sed -n '/^[^E].*[^R]*$/p' archivo.txt"
pasos:
  - "Usar '-n' para silenciar la salida por defecto."
  - "Usar el signo de exclamación '!' para negar el patrón '/ERROR/'."
  - "Usar 'p' para imprimir solo si la negación es verdadera."
explicacion: "La bandera '!' invierte la lógica del patrón. '/ERROR/!p' imprime si la línea NO coincide con 'ERROR'. Alternativamente, 'd' elimina las que coinciden."
```

### 13 -- Verificar soporte de regex extendido (-E)
```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "intermedio"
  tags: ["regex-extendido", "E-bandera", "glsl"]
enunciado: "Verdadero o Falso: El comando `sed -E 's/(foo|bar)/baz/' archivo.txt` funciona de la misma manera en todas las implementaciones de sed (BSD, GNU, POSIX) sin necesidad de escapado adicional de paréntesis."
respuesta: falso
tipo: vf
pasos:
  - "Considerar la compatibilidad de `-E` o `-r` entre sistemas."
  - "Recordar que BSD sed (macOS) usa `-E`, mientras que GNU sed usa `-r` para regex extendidos."
explicacion: "GNU sed usa `-r` para regex extendidos, mientras que BSD sed (estándar en macOS) usa `-E`. Usar `-E` en GNU sed puede no funcionar o requerir versiones recientes, y viceversa."
```

### 14 -- Eliminar espacios al final de línea
```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "intermedio"
  tags: ["limpieza", "espacios", "final-de-linea"]
enunciado: "Escribe el comando sed para eliminar los espacios en blanco (solo espacios, no tabs) al final de cada línea en 'texto.txt'."
respuesta: "sed 's/ *$//' texto.txt"
tipo: completar
respuestas_validas:
  - "sed 's/ *$//' texto.txt"
  - "sed 's/[[:space:]]*$//' texto.txt"
  - "sed 's/ \\+$//' texto.txt"
pasos:
  - "Usar 's' para sustituir."
  - "Coincidir cero o más espacios ' *' seguidos del final de línea '$'."
  - "Reemplazar con vacío."
explicacion: "' *$' coincide con cualquier cantidad de espacios al final de la línea. Reemplazarlos con nada los elimina."
```

### 15 -- Sustituir con variable de entorno (contexto bash)
```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "intermedio"
  tags: ["variables", "expansion", "comillas"]
enunciado: "Completa el comando para usar la variable de entorno $NEW_NAME para reemplazar 'OLD_NAME' en 'config.txt'. Asegúrate de que la variable se expanda correctamente."
respuesta: "sed \"s/OLD_NAME/$NEW_NAME/g\" config.txt"
tipo: completar
respuestas_validas:
  - "sed \"s/OLD_NAME/$NEW_NAME/g\" config.txt"
  - "sed s/OLD_NAME/$NEW_NAME/g config.txt"
  - "sed 's/OLD_NAME/'$NEW_NAME'/g' config.txt"
pasos:
  - "Usar comillas dobles para permitir la expansión de variables en bash."
  - "Colocar la variable $NEW_NAME en la parte de reemplazo."
explicacion: "Las comillas dobles permiten que bash expanda $NEW_NAME antes de pasar el argumento a sed. Las comillas simples evitarían la expansión."
```

### 16 -- Imprimir línea anterior a coincidencia
```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "intermedio"
  tags: ["contexto", "linea-anterior", "h-command"]
enunciado: "Verdadero o Falso: `sed -n '/PATTERN/{x;p;x}' archivo.txt` imprime la línea ANTERIOR a la que contiene 'PATTERN'."
respuesta: verdadero
tipo: vf
pasos:
  - "Analizar el uso de 'x' (exchange) y 'p' (print)."
  - "Verificar el flujo: cuando se encuentra PATTERN, intercambiar el patrón con el hold space (que contiene la línea anterior)."
explicacion: "Cuando se coincide con '/PATTERN/', el bloque `{x;p;x}` intercambia el patrón actual (la línea con PATTERN) con el hold space (que tiene la línea anterior), imprime lo que ahora está en el patrón (la anterior), y vuelve a intercambiar para continuar."
```

### 17 -- Eliminar comentarios de código
```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "intermedio"
  tags: ["comentarios", "eliminacion", "regex"]
enunciado: "Escribe el comando sed para eliminar todo lo que comienza con '#' hasta el final de la línea en 'codigo.c', pero NO eliminar líneas que solo contengan espacios antes del '#'."
respuesta: "sed '/^[[:space:]]*#/s/#.*$//' codigo.c"
tipo: completar
respuestas_validas:
  - "sed '/^[[:space:]]*#/s/#.*$//' codigo.c"
  - "sed '/^ *#/s/#.*$//' codigo.c"
  - "sed '/^[ \\t]*#/s/#.*$//' codigo.c"
pasos:
  - "Dirigir el comando solo a líneas que empiecen con espacios opcionales y luego '#'."
  - "Dentro de ese rango, sustituir desde '#' hasta el final '$' con vacío."
explicacion: "El patrón '/^[[:space:]]*#/' selecciona líneas de comentario. El comando 's/#.*$//' elimina desde el '#' hasta el final."
```

### 18 -- Verificar comportamiento de 'w' (write)
```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "intermedio"
  tags: ["escritura", "archivo", "w-bandera"]
enunciado: "Completa el comando para escribir las líneas que coincidan con 'ERROR' en un archivo separado 'errores.txt' mientras imprime todo en pantalla."
respuesta: "sed '/ERROR/w errores.txt' log.txt"
tipo: completar
respuestas_validas:
  - "sed '/ERROR/w errores.txt' log.txt"
  - "sed '/ERROR/ w errores.txt' log.txt"
pasos:
  - "Usar la bandera 'w archivo' dentro de la expresión."
  - "Especificar el archivo de salida."
explicacion: "La bandera 'w' escribe las líneas que coinciden con el patrón en el archivo especificado. El flujo estándar sigue imprimiéndose a menos que se use '-n'."
```

### 19 -- Sustituir usando referencia al patrón coincidente
```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "intermedio"
  tags: ["&", "referencia", "coincidencia-completa"]
enunciado: "Escribe el comando sed para envolver cada palabra de 4 letras (ej. 'test') con corchetes, resultando en '[test]'. Asume palabras separadas por espacios."
respuesta: "sed 's/\\b[[:alpha:]]\\{4\\}\\b/[&]/g' texto.txt"
tipo: completar
respuestas_validas:
  - "sed 's/\\b[[:alpha:]]\\{4\\}\\b/[&]/g' texto.txt"
  - "sed 's/\\b[a-zA-Z]\\{4\\}\\b/[&]/g' texto.txt"
  - "sed 's/\<[a-zA-Z]\\{4\\}\>/[&]/g' texto.txt"
pasos:
  - "Usar '\\b' o '<>' para límites de palabra."
  - "Usar '[[:alpha:]]\\{4\\}' para exactamente 4 letras."
  - "Usar '&' en el reemplazo para referenciar la coincidencia completa."
explicacion: "'&' representa la cadena exacta que coincidió con el patrón. Al ponerla entre '[ ]', se encierra entre corchetes."
```

### 20 -- Verificar soporte de 'r' (insert file)
```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "intermedio"
  tags: ["lectura", "archivo", "r-bandera"]
enunciado: "Verdadero o Falso: El comando `sed '/START/r archivo_extra.txt' main.txt` inserta el contenido de 'archivo_extra.txt' DESPUÉS de la línea que coincide con 'START' en el flujo de salida."
respuesta: verdadero
tipo: vf
pasos:
  - "Analizar la bandera 'r archivo'."
  - "Confirmar que inserta el contenido del archivo en ese punto."
explicacion: "La bandera 'r' lee el contenido del archivo especificado y lo imprime después de la línea actual que coincide con el patrón."
```

### 21 -- Eliminar líneas duplicadas consecutivas
```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "intermedio"
  tags: ["duplicados", "consecutivos", "hold-space"]
enunciado: "Completa el comando sed para eliminar líneas duplicadas consecutivas (manteniendo una sola copia) en 'datos.txt'. Asume que los duplicados están uno al lado del otro."
respuesta: "sed -u '$!N; s/^\\(.*\\)\\n\\1$/\\1/; P; D' datos.txt"
tipo: completar
respuestas_validas:
  - "sed -u '$!N; s/^\\(.*\\)\\n\\1$/\\1/; P; D' datos.txt"
  - "sed '$!N; s/^\\(.*\\)\\n\\1$/\\1/; P; D' datos.txt"
pasos:
  - "Usar 'N' para añadir la siguiente línea al buffer."
  - "Comparar con 's/^\\(.*\\)\\n\\1$/\\1/' para ver si son iguales."
  - "Usar 'P' (print hasta newline) y 'D' (delete hasta newline) para procesar."
explicacion: "Este es un patrón clásico de sed para eliminar duplicados consecutivos usando el hold space o el pattern space con 'N'."
```

### 22 -- Sustituir comillas dobles por simples
```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "intermedio"
  tags: ["caracteres-especiales", "comillas", "escape"]
enunciado: "Escribe el comando sed para reemplazar todas las comillas dobles (\") por comillas simples (') en 'quotes.txt'. Asegúrate de que el comando funcione correctamente en bash."
respuesta: "sed \"s/\\\"/'/g\" quotes.txt"
tipo: completar
respuestas_validas:
  - "sed \"s/\\\"/'/g\" quotes.txt"
  - "sed 's/\"/'/g' quotes.txt"
  - "sed 's/\"/'/g' -i quotes.txt"
pasos:
  - "Usar comillas dobles externas para permitir el escape de la comilla interna, o comillas simples externas con la comilla doble literal."
  - "Reemplazar '\"' con \"'\"."
explicacion: "Dentro de comillas dobles bash, '\"' es necesario. Dentro de comillas simples, '\"' es literal. Ambas formas son válidas si se escapan correctamente."
```

### 23 -- Verificar comportamiento de 'q' (quit)
```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "intermedio"
  tags: ["salida", "quit", "eficiencia"]
enunciado: "Completa el comando para imprimir solo las primeras 5 líneas de 'archivo_grande.txt' y detener el procesamiento inmediatamente después."
respuesta: "sed '5q' archivo_grande.txt"
tipo: completar
respuestas_validas:
  - "sed '5q' archivo_grande.txt"
  - "sed -n '1,5p' archivo_grande.txt"
  - "sed '5q' -n archivo_grande.txt"
pasos:
  - "Usar la dirección '5' y el comando 'q'."
  - "Esto hace que sed salga inmediatamente después de procesar la línea 5."
explicacion: "'q' es un comando de salida. '5q' significa 'cuando llegues a la línea 5, imprime y sal'. Es eficiente para archivos grandes."
```

### 24 -- Eliminar espacios en blanco alrededor de una palabra clave
```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "intermedio"
  tags: ["espacios", "trim", "clave"]
enunciado: "Escribe el comando sed para eliminar cualquier espacio en blanco que haya ANTES o DESPUÉS de la palabra 'key' en 'config.txt', resultando en 'key' sin espacios adyacentes (pero manteniendo el resto de la línea)."
respuesta: "sed 's/ *key */key/g' config.txt"
tipo: completar
respuestas_validas:
  - "sed 's/ *key */key/g' config.txt"
  - "sed 's/[[:space:]]*key[[:space:]]*/key/g' config.txt"
  - "sed 's/ \\+key \\+/key/g' config.txt"
pasos:
  - "Coincidir espacios opcionales antes y después de 'key'."
  - "Reemplazar con 'key' sin espacios."
explicacion: "' *key *' captura los espacios. Reemplazar con 'key' los elimina."
```

### 25 -- Verificar soporte de 'l' (list)
```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "intermedio"
  tags: ["listado", "caracteres-no-imprimibles", "l-bandera"]
enunciado: "Verdadero o Falso: El comando `sed -n 'l' archivo.txt` imprime el contenido del archivo mostrando los caracteres no imprimibles y los finales de línea de forma explícita (ej. con \\n)."
respuesta: verdadero
tipo: vf
pasos:
  - "Analizar la bandera 'l' (lowercase L)."
  - "Confirmar que lista el contenido con escapes para caracteres especiales."
explicacion: "La bandera 'l' (list) imprime el contenido de una manera que hace visibles los caracteres no imprimibles, como \\n para newline y \\t para tab."
```