### 1 — Filtrar líneas que contienen una palabra exacta
```
tipo: completar
enunciado: Necesitas buscar todas las líneas en el archivo `logs.txt` que contengan exactamente la cadena "ERROR". ¿Qué comando completo usarías?
respuesta: grep "ERROR" logs.txt
respuestas_validas:
  - grep "ERROR" logs.txt
  - grep 'ERROR' logs.txt
pasos:
  - Identificar el patrón a buscar: "ERROR"
  - Escribir el comando grep
  - Especificar el archivo de entrada: logs.txt
explicacion: grep toma el patrón como primer argumento y el archivo como segundo. Las comillas simples o dobles son equivalentes aquí ya que no hay caracteres especiales de shell en la palabra.
```

### 2 — Contar coincidencias
```
tipo: completar
enunciado: Quieres obtener solo el número de líneas que coinciden con el patrón "404" en el archivo `access.log`, sin mostrar las líneas mismas.
respuesta: grep -c "404" access.log
respuestas_validas:
  - grep -c "404" access.log
  - grep -c '404' access.log
  - grep --count "404" access.log
  - grep --count '404' access.log
pasos:
  - Usar la bandera -c (count) para contar
  - Especificar el patrón "404"
  - Especificar el archivo access.log
explicacion: La opción -c imprime el número de líneas que coinciden, en lugar del contenido de las líneas.
```

### 3 — Búsqueda inversa (no coincidencias)
```
tipo: completar
enunciado: Listar todas las líneas de `config.ini` que NO contengan comentarios (líneas que empiezan con #).
respuesta: grep -v "^#" config.ini
respuestas_validas:
  - grep -v "^#" config.ini
  - grep -v '^#' config.ini
  - grep -v '^\#' config.ini
  - grep --invert-match "^#" config.ini
  - grep --invert-match '^#' config.ini
pasos:
  - Usar la bandera -v para invertir la lógica
  - Usar el ancla ^ para indicar el inicio de línea
  - Buscar el carácter #
explicacion: -v selecciona las líneas que NO coinciden con el patrón dado. "^#" asegura que solo se excluyan las que comienzan con #.
```

### 4 — Búsqueda recursiva en directorios
```
tipo: completar
enunciado: Buscar la palabra "password" en todos los archivos dentro del directorio `/etc/ssh/` y sus subdirectorios.
respuesta: grep -r "password" /etc/ssh/
respuestas_validas:
  - grep -r "password" /etc/ssh/
  - grep -R "password" /etc/ssh/
  - grep -r 'password' /etc/ssh/
  - grep -R 'password' /etc/ssh/
  - grep --recursive "password" /etc/ssh/
  - grep --recursive 'password' /etc/ssh/
pasos:
  - Usar la bandera -r o -R para recursividad
  - Especificar el patrón "password"
  - Especificar el directorio raíz /etc/ssh/
explicacion: -r busca recursivamente. Es útil para buscar cadenas en múltiples archivos de configuración distribuidos en un árbol de directorios.
```

### 5 — Ignorar mayúsculas y minúsculas
```
tipo: completar
enunciado: Buscar la palabra "error" en `system.log` sin importar si está escrita como "Error", "ERROR", "error", etc.
respuesta: grep -i "error" system.log
respuestas_validas:
  - grep -i "error" system.log
  - grep -i 'error' system.log
  - grep --ignore-case "error" system.log
  - grep --ignore-case 'error' system.log
pasos:
  - Usar la bandera -i para ignorar caso
  - Especificar el patrón "error"
  - Especificar el archivo system.log
explicacion: -i hace que la coincidencia sea insensible a mayúsculas/minúsculas (case-insensitive).
```

### 6 — Mostrar números de línea
```
tipo: completar
enunciado: Quieres ver el número de línea correspondiente a cada coincidencia de "timeout" en `app.log`.
respuesta: grep -n "timeout" app.log
respuestas_validas:
  - grep -n "timeout" app.log
  - grep -n 'timeout' app.log
  - grep --line-number "timeout" app.log
  - grep --line-number 'timeout' app.log
pasos:
  - Usar la bandera -n para mostrar números de línea
  - Especificar el patrón "timeout"
  - Especificar el archivo app.log
explicacion: -n precede cada línea de salida con el número de línea en el archivo de entrada, facilitando la localización del error.
```

### 7 — Búsqueda de palabras completas
```
tipo: completar
enunciado: Buscar la palabra "start" en `script.sh`, pero ignorar coincidencias dentro de otras palabras como "restart" o "starting".
respuesta: grep -w "start" script.sh
respuestas_validas:
  - grep -w "start" script.sh
  - grep -w 'start' script.sh
  - grep --word-regexp "start" script.sh
  - grep --word-regexp 'start' script.sh
pasos:
  - Usar la bandera -w para buscar palabras completas
  - Especificar el patrón "start"
  - Especificar el archivo script.sh
explicacion: -w asegura que el patrón coincida con una palabra completa delimitada por espacios o caracteres no alfanuméricos, evitando coincidencias parciales.
```

### 8 — Filtrar archivos por extensión recursivamente
```
tipo: completar
enunciado: Buscar "TODO" solo en archivos `.py` dentro del directorio actual y sus subdirectorios.
respuesta: grep -r "TODO" --include="*.py" .
respuestas_validas:
  - grep -r "TODO" --include="*.py" .
  - grep -r 'TODO' --include="*.py" .
  - grep -r "TODO" --include '*.py' .
  - grep -R "TODO" --include="*.py" .
  - grep --recursive "TODO" --include="*.py" .
pasos:
  - Usar -r para recursividad
  - Usar --include para filtrar por patrón de nombre de archivo
  - Especificar el patrón "*.py"
  - Especificar el directorio actual .
explicacion: --include permite restringir la búsqueda recursiva a archivos que coincidan con el patrón especificado.
```

### 9 — Filtrar excluyendo archivos por extensión
```
tipo: completar
enunciado: Buscar "config" en el directorio `/var/www/html/` pero ignorando todos los archivos `.js`.
respuesta: grep -r "config" /var/www/html/ --exclude="*.js"
respuestas_validas:
  - grep -r "config" /var/www/html/ --exclude="*.js"
  - grep -r 'config' /var/www/html/ --exclude="*.js"
  - grep -R "config" /var/www/html/ --exclude="*.js"
  - grep --recursive "config" /var/www/html/ --exclude="*.js"
pasos:
  - Usar -r o -R para recursividad
  - Usar --exclude para excluir patrones de nombre de archivo
  - Especificar el patrón "*.js"
explicacion: --exclude es útil para evitar ruido en resultados de archivos binarios o de tipo específico que no interesan.
```

### 10 — Mostrar contexto después de la coincidencia
```
tipo: completar
enunciado: Al encontrar "Segmentation fault" en `dmesg`, quieres ver las 5 líneas siguientes a cada coincidencia para ver el rastro.
respuesta: grep -A 5 "Segmentation fault" dmesg
respuestas_validas:
  - grep -A 5 "Segmentation fault" dmesg
  - grep -A5 "Segmentation fault" dmesg
  - grep --after-context=5 "Segmentation fault" dmesg
  - grep --after-context=5 'Segmentation fault' dmesg
pasos:
  - Usar la bandera -A seguido del número de líneas (5)
  - Especificar el patrón "Segmentation fault"
  - Especificar el archivo dmesg
explicacion: -A n imprime n líneas después de cada coincidencia. Útil para ver el flujo de ejecución posterior a un error.
```

### 11 — Mostrar contexto antes de la coincidencia
```
tipo: completar
enunciado: Al encontrar "Segmentation fault" en `dmesg`, quieres ver las 3 líneas anteriores a cada coincidencia para ver el contexto previo.
respuesta: grep -B 3 "Segmentation fault" dmesg
respuestas_validas:
  - grep -B 3 "Segmentation fault" dmesg
  - grep -B3 "Segmentation fault" dmesg
  - grep --before-context=3 "Segmentation fault" dmesg
  - grep --before-context=3 'Segmentation fault' dmesg
pasos:
  - Usar la bandera -B seguido del número de líneas (3)
  - Especificar el patrón "Segmentation fault"
  - Especificar el archivo dmesg
explicacion: -B n imprime n líneas antes de cada coincidencia. Útil para ver qué ocurrió justo antes del evento.
```

### 12 — Mostrar contexto antes y después
```
tipo: completar
enunciado: Al encontrar "Error 500" en `nginx/access.log`, quieres ver 2 líneas antes y 2 líneas después.
respuesta: grep -C 2 "Error 500" nginx/access.log
respuestas_validas:
  - grep -C 2 "Error 500" nginx/access.log
  - grep -C2 "Error 500" nginx/access.log
  - grep --context=2 "Error 500" nginx/access.log
  - grep --context=2 'Error 500' nginx/access.log
pasos:
  - Usar la bandera -C seguido del número de líneas (2)
  - Especificar el patrón "Error 500"
  - Especificar el archivo nginx/access.log
explicacion: -C n es equivalente a usar -B n y -A n simultáneamente. Muestra el contexto completo alrededor de la coincidencia.
```

### 13 — Coincidencia con expresiones regulares básicas
```
tipo: completar
enunciado: Buscar líneas en `data.txt` que contengan un número de 4 dígitos consecutivos (ej. código postal).
respuesta: grep "[0-9][0-9][0-9][0-9]" data.txt
respuestas_validas:
  - grep "[0-9][0-9][0-9][0-9]" data.txt
  - grep '[0-9][0-9][0-9][0-9]' data.txt
  - grep "\([0-9]\)\{4\}" data.txt
  - grep '\([0-9]\)\{4\}' data.txt
pasos:
  - Definir el patrón de 4 dígitos usando rangos [0-9]
  - Especificar el archivo data.txt
explicacion: En BRE (Basic Regular Expressions), los corchetes definen rangos. Alternativamente se pueden usar escapes para cuantificadores, pero la repetición de corchetes es más legible para principiantes/intermedios.
```

### 14 — Coincidencia con expresiones regulares extendidas
```
tipo: completar
enunciado: Buscar líneas en `data.txt` que contengan un número de 4 dígitos consecutivos usando la sintaxis ERE.
respuesta: grep -E "[0-9]{4}" data.txt
respuestas_validas:
  - grep -E "[0-9]{4}" data.txt
  - grep -E '[0-9]{4}' data.txt
  - grep --extended-regexp "[0-9]{4}" data.txt
  - grep --extended-regexp '[0-9]{4}' data.txt
  - grep -e "[0-9]{4}" data.txt
  - grep -e '[0-9]{4}' data.txt
pasos:
  - Usar la bandera -E para habilitar ERE (Extended Regular Expressions)
  - Usar la sintaxis {4} para repetir 4 veces
  - Especificar el archivo data.txt
explicacion: -E permite usar sintaxis más moderna como {}, +, ?, () sin necesidad de escapar las llaves o paréntesis.
```

### 15 — Buscar múltiples patrones simultáneos
```
tipo: completar
enunciado: Buscar líneas que contengan "ERROR" O "FATAL" en `syslog`.
respuesta: grep -e "ERROR" -e "FATAL" syslog
respuestas_validas:
  - grep -e "ERROR" -e "FATAL" syslog
  - grep -e 'ERROR' -e 'FATAL' syslog
  - grep --regexp="ERROR" --regexp="FATAL" syslog
  - grep --regexp='ERROR' --regexp='FATAL' syslog
  - grep "ERROR\|FATAL" syslog
  - grep 'ERROR\|FATAL' syslog
  - grep -E "ERROR|FATAL" syslog
pasos:
  - Usar la bandera -e múltiples veces para añadir patrones
  - Especificar el archivo syslog
explicacion: -e permite especificar múltiples patrones. grep buscará líneas que coincidan con CUALQUIERA de los patrones proporcionados.
```

### 16 — Buscar líneas que empiecen con una letra específica
```
tipo: completar
enunciado: Filtrar `names.txt` para obtener solo las líneas que empiecen con la letra 'A'.
respuesta: grep "^A" names.txt
respuestas_validas:
  - grep "^A" names.txt
  - grep '^A' names.txt
pasos:
  - Usar el ancla ^ para indicar inicio de línea
  - Especificar el carácter 'A'
  - Especificar el archivo names.txt
explicacion: "^A" asegura que la coincidencia solo ocurra si la línea comienza con A, ignorando "Apple" si aparece en medio de otra palabra.
```

### 17 — Buscar líneas que terminen con una extensión
```
tipo: completar
enunciado: Filtrar `filelist.txt` para obtener solo las líneas que terminen con ".log".
respuesta: grep "\.log$" filelist.txt
respuestas_validas:
  - grep "\.log$" filelist.txt
  - grep '\.log$' filelist.txt
  - grep -E "\.log$" filelist.txt
  - grep -E '\.log$' filelist.txt
pasos:
  - Escapar el punto \. para buscar literalmente un punto
  - Usar el ancla $ para indicar final de línea
  - Especificar el archivo filelist.txt
explicacion: El ancla $ asegura que el patrón esté al final de la línea. El punto debe escaparse para evitar que se interprete como "cualquier carácter".
```

### 18 — Buscar líneas vacías
```
tipo: completar
enunciado: Eliminar líneas vacías de `input.txt` y guardar el resultado en `output.txt`.
respuesta: grep -v "^$" input.txt > output.txt
respuestas_validas:
  - grep -v "^$" input.txt > output.txt
  - grep -v '^$' input.txt > output.txt
  - grep -v "^[[:space:]]*$" input.txt > output.txt
  - grep -v '^[[:space:]]*$' input.txt > output.txt
pasos:
  - Usar -v para invertir la selección
  - Buscar "^$" (inicio y fin de línea pegados, es decir, vacío)
  - Redirigir la salida a un archivo
explicacion: "^$" coincide con líneas que no tienen ningún carácter entre el inicio y el fin. -v excluye esas líneas.
```

### 19 — Buscar palabras que contengan dígitos
```
tipo: completar
enunciado: Buscar líneas en `data.txt` que contengan al menos un dígito numérico.
respuesta: grep "[0-9]" data.txt
respuestas_validas:
  - grep "[0-9]" data.txt
  - grep '[0-9]' data.txt
  - grep "[[:digit:]]" data.txt
  - grep '[[:digit:]]' data.txt
  - grep -E "[0-9]+" data.txt
  - grep -E '[0-9]+' data.txt
  - grep -E "[[:digit:]]+" data.txt
  - grep -E '[[:digit:]]+' data.txt
pasos:
  - Usar el conjunto de caracteres [0-9] o la clase [[:digit:]]
  - Especificar el archivo data.txt
explicacion: Cualquier carácter dentro de [0-9] coincide con un dígito. No se necesita cuantificador si solo queremos saber si la línea contiene al menos uno.
```

### 20 — Buscar palabras que NO contengan vocales
```
tipo: completar
enunciado: Buscar líneas en `words.txt` que NO contengan ninguna vocal (a, e, i, o, u).
respuesta: grep -v "[aeiou]" words.txt
respuestas_validas:
  - grep -v "[aeiou]" words.txt
  - grep -v '[aeiou]' words.txt
  - grep -v "[AEIOU]" words.txt
  - grep -v '[AEIOU]' words.txt
  - grep -vi "[aeiou]" words.txt
  - grep -vi '[aeiou]' words.txt
  - grep -v "[[:alpha:]]" words.txt
  - grep -v '[[:alpha:]]' words.txt
pasos:
  - Usar -v para invertir la coincidencia
  - Definir el conjunto de vocales en corchetes [aeiou]
  - Especificar el archivo words.txt
explicacion: -v excluye cualquier línea que tenga al menos una de las vocales definidas en el conjunto.
```

### 21 — Buscar patrones que empiecen y terminen con comillas
```
tipo: completar
enunciado: Buscar líneas en `config.txt` que contengan una cadena entre comillas dobles, por ejemplo "value".
respuesta: grep '"[^"]*"' config.txt
respuestas_validas:
  - grep '"[^"]*"' config.txt
  - grep '"[^"]*"' config.txt
  - grep -E '"[^"]*"' config.txt
  - grep -E '"[^"]*"' config.txt
pasos:
  - Buscar comilla doble "
  - Buscar cualquier carácter que NO sea comilla doble [^"]*
  - Buscar comilla doble cerrando "
  - Especificar el archivo config.txt
explicacion: La expresión '"[^"]*"' busca una comilla, seguida de cero o más caracteres que no son comillas, seguida de otra comilla.
```

### 22 — Buscar líneas que contengan un IP address simple
```
tipo: completar
enunciado: Buscar líneas en `access.log` que contengan una dirección IP básica (formato d.d.d.d).
respuesta: grep -E "[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+" access.log
respuestas_validas:
  - grep -E "[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+" access.log
  - grep -E '[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+' access.log
  - grep -E "[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}" access.log
  - grep -E '[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}' access.log
pasos:
  - Usar -E para ERE
  - Usar [0-9]+ para uno o más dígitos
  - Usar \. para puntos literales
  - Especificar el archivo access.log
explicacion: Esta expresión busca secuencias de dígitos separados por puntos. No valida el rango 0-255, pero captura el formato visual.
```

### 23 — Buscar líneas que contengan un email básico
```
tipo: completar
enunciado: Buscar líneas en `users.txt` que contengan un formato de email básico (usuario@dominio).
respuesta: grep -E "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" users.txt
respuestas_validas:
  - grep -E "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" users.txt
  - grep -E '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}' users.txt
  - grep -E "[[:alnum:]._%+-]+@[[:alnum:]-]+\.[[:alpha:]]{2,}" users.txt
  - grep -E '[[:alnum:]._%+-]+@[[:alnum:]-]+\.[[:alpha:]]{2,}' users.txt
pasos:
  - Usar -E para ERE
  - Definir el localpart con caracteres alfanuméricos y especiales permitidos
  - Usar @
  - Definir el dominio con alfanuméricos y guiones
  - Usar \. para el punto del TLD
  - Definir el TLD con letras de longitud >= 2
explicacion: Esta es una expresión regular común para emails simples. Valida la estructura básica usuario@dominio.tld.
```

### 24 — Buscar líneas que contengan un número hexadecimal
```
tipo: completar
enunciado: Buscar líneas en `dump.txt` que contengan valores hexadecimales como 0x1A2B.
respuesta: grep -E "0x[0-9a-fA-F]+" dump.txt
respuestas_validas:
  - grep -E "0x[0-9a-fA-F]+" dump.txt
  - grep -E '0x[0-9a-fA-F]+' dump.txt
  - grep -E "0x[0-9A-Fa-f]+" dump.txt
  - grep -E '0x[0-9A-Fa-f]+' dump.txt
pasos:
  - Usar -E para ERE
  - Buscar literal "0x"
  - Buscar uno o más caracteres [0-9a-fA-F]+
  - Especificar el archivo dump.txt
explicacion: Los valores hexadecimales suelen empezar con 0x seguidos de dígitos 0-9 y letras a-f (mayúsculas o minúsculas).
```

### 25 — Buscar líneas que contengan un número flotante
```
tipo: completar
enunciado: Buscar líneas en `data.csv` que contengan números decimales como 123.45.
respuesta: grep -E "[0-9]+\.[0-9]+" data.csv
respuestas_validas:
  - grep -E "[0-9]+\.[0-9]+" data.csv
  - grep -E '[0-9]+\.[0-9]+' data.csv
  - grep -E "[0-9]+.[0-9]+" data.csv
  - grep -E '[0-9]+.[0-9]+' data.csv
  - grep -E "[0-9]+\.[0-9]+" data.csv
  - grep -E '[0-9]+\.[0-9]+' data.csv
pasos:
  - Usar -E para ERE
  - Buscar uno o más dígitos [0-9]+
  - Buscar un punto literal \. (o . si se escapa o se asume literal en este contexto simple, pero \. es mejor)
  - Buscar uno o más dígitos [0-9]+
explicacion: Esta expresión busca cualquier secuencia de dígitos, un punto, y más dígitos. Es útil para extraer columnas numéricas decimales.
```