### 1 — Detección de duplicados con `awk`
```
metadata:
  materia: "informatica-ramas"
  tema: "datos-limpieza-de-datos"
  nivel: "avanzado"
  tags: ["awk", "duplicados", "campo-fijo"]
respuesta: verdadero
tipo: vf
enunciado:
  - "En un archivo de texto plano con campos separados por tabulaciones, el siguiente comando de `awk` imprime correctamente las líneas que contienen valores duplicados en la tercera columna (asumiendo que la tercera columna es el campo de interés):"
  - "awk -F'\t' '{count[$3]++; if(count[$3]>1) print}' archivo.dat"
explicacion:
  - "El comando utiliza un array asociativo `count` para llevar la cuenta de las ocurrencias de cada valor en la tercera columna (`$3`). Cuando el contador supera 1, significa que el valor ya apareció antes, por lo tanto, la línea actual es una repetición y se imprime. La sintaxis es válida en `awk` estándar."
pasos:
  - "Analizar la estructura del comando `awk`."
  - "Verificar el uso del separador de campo `-F`."
  - "Validar la lógica del array y la condición de impresión."
```

### 2 — Conversión de formato con `sed`
```
metadata:
  materia: "informatica-ramas"
  tema: "datos-limpieza-de-datos"
  nivel: "avanzado"
  tags: ["sed", "expresiones-regulares", "reemplazo"]
respuesta: "s/^[[:space:]]+//g"
tipo: completar
enunciado:
  - "Completa el comando `sed` para eliminar los espacios en blanco al inicio de cada línea en un archivo CSV desordenado:"
  - "sed '_______' datos.csv"
  - "Nota: La expresión regular debe coincidir con uno o más espacios o tabulaciones al principio de la línea."
explicacion:
  - "La expresión `^[[:space:]]+` coincide con el inicio de línea (`^`) seguido de uno o más caracteres de espacio en blanco (`[[:space:]]+`). El modificador `g` no es estrictamente necesario si solo hay espacios al inicio, pero se usa comúnmente por seguridad. El comando completo es `s/^[[:space:]]+//g`."
pasos:
  - "Identificar el patrón de inicio de línea."
  - "Seleccionar la clase de caracteres para espacios en blanco."
  - "Escribir la sustitución vacía para eliminar el patrón."
```

### 3 — Filtrado de registros con `grep`
```
metadata:
  materia: "informatica-ramas"
  tema: "datos-limpieza-de-datos"
  nivel: "avanzado"
  tags: ["grep", "expresiones-regulares", "valores-negativos"]
opciones_explicitas:
  - "grep -v '^#' archivo.txt"
  - "grep '^#' archivo.txt"
  - "grep -i '^#' archivo.txt"
  - "grep -E '^#' archivo.txt"
respuesta: "grep -v '^#' archivo.txt"
tipo: mc
enunciado:
  - "¿Cuál es la forma correcta de excluir todas las líneas que comienzan con un comentario (`#`) en un archivo de configuración, manteniendo el orden original?"
explicacion:
  - "La opción `-v` de `grep` invierte la coincidencia, es decir, imprime las líneas que NO coinciden con el patrón. El patrón `'^#'` coincide con líneas que empiezan con `#`. Por lo tanto, `grep -v '^#'` muestra todo excepto los comentarios."
pasos:
  - "Entender el propósito de la opción `-v`."
  - "Analizar la expresión regular `'^#'`."
  - "Descartar opciones que muestran comentarios (`grep '^#'`) o ignoran mayúsculas (`-i`)."
```

### 4 — Ordenamiento numérico con `sort`
```
metadata:
  materia: "informatica-ramas"
  tema: "datos-limpieza-de-datos"
  nivel: "avanzado"
  tags: ["sort", "numeros", "campo-especifico"]
respuesta: verdadero
tipo: vf
enunciado:
  - "El comando `sort -t, -k2,2n archivo.csv` ordena correctamente el archivo CSV por la segunda columna numéricamente, utilizando la coma como separador de campos."
explicacion:
  - "La opción `-t,` establece la coma como delimitador de campos. La opción `-k2,2n` especifica que la clave de ordenamiento es desde el campo 2 hasta el campo 2, y el modificador `n` fuerza la ordenación numérica en lugar de lexicográfica. Esto es esencial para ordenar números correctamente (ej. 10 antes que 2)."
pasos:
  - "Verificar la definición del separador de campos."
  - "Validar el rango de claves `-k2,2`."
  - "Confirmar el uso del modificador numérico `n`."
```

### 5 — Extracción de columnas con `cut`
```
metadata:
  materia: "informatica-ramas"
  tema: "datos-limpieza-de-datos"
  nivel: "avanzado"
  tags: ["cut", "rangos", "delimitador"]
respuesta: "cut -d: -f1-3"
tipo: completar
enunciado:
  - "Completa el comando para extraer las primeras tres columnas de un archivo `/etc/passwd` (separado por dos puntos):"
  - "_______ /etc/passwd"
explicacion:
  - "La opción `-d:` define el separador de campo como dos puntos. La opción `-f1-3` especifica que se deben mostrar los campos desde el 1 hasta el 3 inclusive. El comando completo es `cut -d: -f1-3`."
pasos:
  - "Definir el delimitador con `-d`."
  - "Especificar el rango de campos con `-f`."
  - "Aplicar el comando al archivo de entrada."
```

### 6 — Limpieza de caracteres no imprimibles
```
metadata:
  materia: "informatica-ramas"
  tema: "datos-limpieza-de-datos"
  nivel: "avanzado"
  tags: ["tr", "caracteres-no-imprimibles", "supresion"]
respuesta: "tr -cd '[:print:]\\n'"
tipo: completar
enunciado:
  - "Completa el comando `tr` para eliminar todos los caracteres no imprimibles, excepto las nuevas líneas, de una entrada estándar:"
  - "cat archivo.txt | _______ > limpio.txt"
explicacion:
  - "La opción `-c` complementa el conjunto de caracteres especificado. La opción `-d` elimina los caracteres que coinciden con el conjunto complementario. `[:print:]` representa todos los caracteres imprimibles. `\\n` añade explícitamente la nueva línea al conjunto de caracteres permitidos para no eliminar los saltos de línea. El comando es `tr -cd '[:print:]\\n'`."
pasos:
  - "Identificar la necesidad de complementar el conjunto (`-c`)."
  - "Seleccionar la opción de eliminación (`-d`)."
  - "Definir el conjunto de caracteres imprimibles y los saltos de línea."
```

### 7 — Fusión de archivos con `join`
```
metadata:
  materia: "informatica-ramas"
  tema: "datos-limpieza-de-datos"
  nivel: "avanzado"
  tags: ["join", "uniones", "archivos-ordenados"]
respuesta: verdadero
tipo: vf
enunciado:
  - "El comando `join -t, archivo1.csv archivo2.csv` funciona correctamente para unir dos archivos CSV basados en su primera columna común, siempre y cuando ambos archivos estén previamente ordenados por esa columna."
explicacion:
  - "El comando `join` requiere que los archivos de entrada estén ordenados según la clave de unión por defecto (primera columna). La opción `-t,` especifica la coma como separador de campos. Si los archivos no están ordenados, `join` puede fallar o producir resultados incorrectos. La afirmación es verdadera porque asume el requisito de ordenamiento previo."
pasos:
  - "Verificar el requisito de ordenamiento para `join`."
  - "Validar la opción de separador de campos `-t`."
  - "Confirmar la clave de unión por defecto."
```

### 8 — Sustitución de fechas con `date`
```
metadata:
  materia: "informatica-ramas"
  tema: "datos-limpieza-de-datos"
  nivel: "avanzado"
  tags: ["date", "formato", "comandos"]
respuesta: "date -d '2023-01-01' +%Y%m%d"
tipo: completar
enunciado:
  - "Completa el comando `date` para convertir la fecha '2023-01-01' al formato YYYYMMDD:"
  - "_______"
explicacion:
  - "La opción `-d` permite especificar una fecha de entrada. La opción `+%Y%m%d` define el formato de salida: año de 4 dígitos, mes de 2 dígitos y día de 2 dígitos. El comando completo es `date -d '2023-01-01' +%Y%m%d`."
pasos:
  - "Especificar la fecha de entrada con `-d`."
  - "Definir el formato de salida con `+`."
  - "Seleccionar los modificadores de año, mes y día."
```

### 9 — Conteo de palabras únicas con `sort` y `uniq`
```
metadata:
  materia: "informatica-ramas"
  tema: "datos-limpieza-de-datos"
  nivel: "avanzado"
  tags: ["sort", "uniq", "conteo"]
respuesta: "sort archivo.txt | uniq -c | sort -nr"
tipo: completar
enunciado:
  - "Completa la tubería para obtener un listado de palabras únicas en un archivo, ordenadas por frecuencia de aparición de mayor a menor:"
  - "_______ archivo.txt"
explicacion:
  - "Primero, `sort` ordena las líneas alfabéticamente para que `uniq` pueda contarlas. `uniq -c` precede cada línea con el conteo de ocurrencias. Finalmente, `sort -nr` ordena numéricamente (`-n`) en orden inverso (`-r`) para mostrar las más frecuentes primero."
pasos:
  - "Ordenar inicialmente para agrupar duplicados."
  - "Contar ocurrencias con `uniq -c`."
  - "Ordenar el resultado numéricamente en orden descendente."
```

### 10 — Eliminación de espacios finales con `sed`
```
metadata:
  materia: "informatica-ramas"
  tema: "datos-limpieza-de-datos"
  nivel: "avanzado"
  tags: ["sed", "espacios", "final-de-linea"]
respuesta: "s/[[:space:]]*$//"
tipo: completar
enunciado:
  - "Completa el comando `sed` para eliminar los espacios en blanco al final de cada línea:"
  - "sed '_______' archivo.txt"
explicacion:
  - "La expresión regular `[[:space:]]*$` coincide con uno o más caracteres de espacio en blanco (`[[:space:]]+`) seguidos del final de línea (`$`). El modificador `g` no es necesario porque `$` asegura que solo se coincida con el final. La sustitución es vacía para eliminar el patrón encontrado."
pasos:
  - "Identificar el patrón de final de línea."
  - "Seleccionar la clase de caracteres para espacios."
  - "Escribir la sustitución vacía."
```

### 11 — Filtrado de líneas vacías con `grep`
```
metadata:
  materia: "informatica-ramas"
  tema: "datos-limpieza-de-datos"
  nivel: "avanzado"
  tags: ["grep", "lineas-vacias", "expresiones-regulares"]
respuesta: "grep -v '^$'"
tipo: completar
enunciado:
  - "Completa el comando `grep` para eliminar todas las líneas que están completamente vacías (sin espacios, solo salto de línea) de un archivo:"
  - "_______ archivo.txt"
explicacion:
  - "La expresión regular `'^$'` coincide con el inicio de línea inmediatamente seguido por el final de línea, lo que representa una línea vacía. La opción `-v` invierte la coincidencia, mostrando solo las líneas que NO coinciden, es decir, las que tienen contenido."
pasos:
  - "Definir el patrón de línea vacía."
  - "Aplicar la inversión de coincidencia `-v`."
  - "Ejecutar el comando sobre el archivo."
```

### 12 — Conversión de mayúsculas a minúsculas con `tr`
```
metadata:
  materia: "informatica-ramas"
  tema: "datos-limpieza-de-datos"
  nivel: "avanzado"
  tags: ["tr", "cambio-de-caso", "normalizacion"]
respuesta: "tr 'A-Z' 'a-z'"
tipo: completar
enunciado:
  - "Completa el comando `tr` para convertir todo el texto en minúsculas:"
  - "cat archivo.txt | _______ > minusc.txt"
explicacion:
  - "La opción de `tr` 'A-Z' 'a-z' mapea cada carácter en el rango de mayúsculas al carácter correspondiente en el rango de minúsculas. Esto convierte eficientemente todo el texto a minúsculas."
pasos:
  - "Especificar el conjunto de origen 'A-Z'."
  - "Especificar el conjunto de destino 'a-z'."
  - "Aplicar el mapeo carácter por carácter."
```

### 13 — Extracción de datos JSON con `jq`
```
metadata:
  materia: "informatica-ramas"
  tema: "datos-limpieza-de-datos"
  nivel: "avanzado"
  tags: ["jq", "json", "filtrado"]
respuesta: "jq '.users[] | select(.age > 30) | .name'"
tipo: completar
enunciado:
  - "Completa el comando `jq` para extraer los nombres de los usuarios mayores de 30 años de un JSON donde 'users' es un array de objetos:"
  - "cat datos.json | _______"
explicacion:
  - "`.users[]` itera sobre cada elemento del array 'users'. `select(.age > 30)` filtra los objetos donde la edad es mayor a 30. `.name` extrae el valor del campo 'name' de los objetos filtrados."
pasos:
  - "Iterar sobre el array principal."
  - "Aplicar la condición de filtro."
  - "Seleccionar el campo de salida."
```

### 14 — Eliminación de filas duplicadas consecutivas con `uniq`
```
metadata:
  materia: "informatica-ramas"
  tema: "datos-limpieza-de-datos"
  nivel: "avanzado"
  tags: ["uniq", "duplicados-consecutivos", "salida"]
respuesta: "uniq"
tipo: completar
enunciado:
  - "Completa el comando para eliminar solo las filas duplicadas consecutivas en un archivo ya ordenado:"
  - "sort archivo.txt | _______"
explicacion:
  - "El comando `uniq` (sin opciones adicionales) elimina las líneas adyacentes duplicadas. Es crucial que el archivo esté ordenado previamente con `sort` para que los duplicados sean consecutivos y puedan ser detectados."
pasos:
  - "Ordenar el archivo primero."
  - "Aplicar `uniq` para eliminar duplicados consecutivos."
  - "Verificar la salida."
```

### 15 — Reemplazo de tabulaciones por comas con `sed`
```
metadata:
  materia: "informatica-ramas"
  tema: "datos-limpieza-de-datos"
  nivel: "avanzado"
  tags: ["sed", "tabulaciones", "conversion-csv"]
respuesta: "s/\t/,/g"
tipo: completar
enunciado:
  - "Completa el comando `sed` para convertir un archivo TSV (separado por tabulaciones) a CSV (separado por comas):"
  - "sed '_______' archivo.tsv > archivo.csv"
explicacion:
  - "La expresión regular `\t` coincide con un carácter de tabulación. El modificador `g` asegura que todos los tabuladores en la línea sean reemplazados, no solo el primero. El comando es `s/\t/,/g`."
pasos:
  - "Identificar el carácter de tabulación `\t`."
  - "Especificar el carácter de reemplazo `,`."
  - "Aplicar el modificador global `g`."
```

### 16 — Validación de formato de email con `grep`
```
metadata:
  materia: "informatica-ramas"
  tema: "datos-limpieza-de-datos"
  nivel: "avanzado"
  tags: ["grep", "expresiones-regulares", "validacion"]
respuesta: "grep -E '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'"
tipo: completar
enunciado:
  - "Completa el comando `grep` para filtrar solo líneas que contienen una dirección de email válida (simplificada):"
  - "_______ lista.txt"
explicacion:
  - "La expresión regular validada comienza con caracteres alfanuméricos y símbolos permitidos en el local part, seguido de `@`, luego el dominio con puntos, y finalmente la extensión del dominio de al menos 2 letras. La opción `-E` habilita expresiones regulares extendidas para usar `+` y `{2,}` sin escapar."
pasos:
  - "Definir el patrón del local part."
  - "Incluir el separador `@`."
  - "Definir el patrón del dominio y la extensión."
  - "Usar `-E` para sintaxis extendida."
```

### 17 — Eliminación de caracteres de retorno de carro con `dos2unix`
```
metadata:
  materia: "informatica-ramas"
  tema: "datos-limpieza-de-datos"
  nivel: "avanzado"
  tags: ["dos2unix", "line-ending", "compatibilidad"]
respuesta: verdadero
tipo: vf
enunciado:
  - "El comando `dos2unix archivo.txt` convierte correctamente los finales de línea de Windows (CRLF) a Unix (LF) en un archivo de texto plano."
explicacion:
  - "La herramienta `dos2unix` está diseñada específicamente para convertir formatos de línea de DOS/Windows (que usan CR LF) al formato Unix/Linux (que usa solo LF). Elimina los caracteres de retorno de carro (`\r`) innecesarios."
pasos:
  - "Verificar la funcionalidad principal de `dos2unix`."
  - "Confirmar el formato de entrada esperado (DOS)."
  - "Confirmar el formato de salida esperado (Unix)."
```

### 18 — Extracción de dominio de URL con `awk`
```
metadata:
  materia: "informatica-ramas"
  tema: "datos-limpieza-de-datos"
  nivel: "avanzado"
  tags: ["awk", "strings", "separadores"]
respuesta: "awk -F'/' '{print $3}'"
tipo: completar
enunciado:
  - "Completa el comando `awk` para extraer el dominio de una URL donde el formato es `http://dominio.com/path`:"
  - "cat urls.txt | _______"
explicacion:
  - "Al usar `/` como separador de campo (`-F'/'`), la URL se divide en: `http:`, ``, `dominio.com`, `path`. El tercer campo (`$3`) contiene el dominio. El comando es `awk -F'/' '{print $3}'`."
pasos:
  - "Definir el separador `/`."
  - "Identificar el campo que contiene el dominio."
  - "Imprimir el campo correspondiente."
```

### 19 — Conteo de líneas con `wc`
```
metadata:
  materia: "informatica-ramas"
  tema: "datos-limpieza-de-datos"
  nivel: "avanzado"
  tags: ["wc", "conteo", "lineas"]
respuesta: "wc -l archivo.txt"
tipo: completar
enunciado:
  - "Completa el comando `wc` para contar el número de líneas en un archivo:"
  - "_______"
explicacion:
  - "La opción `-l` de `wc` cuenta el número de líneas. El comando completo es `wc -l archivo.txt`."
pasos:
  - "Seleccionar la opción de conteo de líneas `-l`."
  - "Especificar el archivo de entrada."
  - "Ejecutar el comando."
```

### 20 — Eliminación de espacios múltiples con `tr`
```
metadata:
  materia: "informatica-ramas"
  tema: "datos-limpieza-de-datos"
  nivel: "avanzado"
  tags: ["tr", "espacios", "compresion"]
respuesta: "tr -s ' '"
tipo: completar
enunciado:
  - "Completa el comando `tr` para comprimir múltiples espacios consecutivos en un solo espacio:"
  - "cat archivo.txt | _______ > limpio.txt"
explicacion:
  - "La opción `-s` de `tr` suprime las repeticiones de caracteres especificados en el conjunto. Al especificar `' '` (espacio), comprime cualquier secuencia de espacios en un solo espacio."
pasos:
  - "Seleccionar la opción de supresión `-s`."
  - "Especificar el carácter a comprimir `' '`."
  - "Aplicar al flujo de entrada."
```

### 21 — Filtrado de registros con `awk` y comparación de cadenas
```
metadata:
  materia: "informatica-ramas"
  tema: "datos-limpieza-de-datos"
  nivel: "avanzado"
  tags: ["awk", "comparacion", "campo-fijo"]
respuesta: "awk -F, '$2 == \"pendiente\" {print $1}'"
tipo: completar
enunciado:
  - "Completa el comando `awk` para imprimir el ID (primera columna) de los registros donde el estado (segunda columna) es exactamente 'pendiente' en un CSV:"
  - "_______ datos.csv"
explicacion:
  - "Se define el separador de campo como coma (`-F,`). La condición `$2 == \"pendiente\"` verifica si el segundo campo es igual a la cadena 'pendiente'. Si es verdadero, imprime el primer campo (`$1`)."
pasos:
  - "Definir el separador de campo `-F,`."
  - "Escribir la condición de comparación de cadena."
  - "Especificar la acción de impresión del campo 1."
```

### 22 — Conversión de mayúsculas a minúsculas con `awk`
```
metadata:
  materia: "informatica-ramas"
  tema: "datos-limpieza-de-datos"
  nivel: "avanzado"
  tags: ["awk", "funciones", "transformacion"]
respuesta: "awk '{print tolower($0)}'"
tipo: completar
enunciado:
  - "Completa el comando `awk` para convertir todo el contenido de cada línea a minúsculas:"
  - "cat archivo.txt | _______"
explicacion:
  - "La función `tolower()` en `awk` convierte una cadena a minúsculas. `$0` representa la línea completa. El comando imprime la línea convertida."
pasos:
  - "Identificar la función `tolower`."
  - "Aplicarla a la línea completa `$0`."
  - "Imprimir el resultado."
```

### 23 — Eliminación de caracteres especiales con `sed`
```
metadata:
  materia: "informatica-ramas"
  tema: "datos-limpieza-de-datos"
  nivel: "avanzado"
  tags: ["sed", "caracteres-especiales", "limpieza"]
respuesta: "s/[^a-zA-Z0-9 ]//g"
tipo: completar
enunciado:
  - "Completa el comando `sed` para eliminar todos los caracteres que NO sean letras, números o espacios:"
  - "sed '_______' archivo.txt"
explicacion:
  - "La expresión `[^a-zA-Z0-9 ]` coincide con cualquier carácter que no esté en el conjunto especificado (letras mayúsculas, minúsculas, dígitos y espacio). El modificador `g` elimina todas las ocurrencias en la línea. La sustitución es vacía para eliminarlos."
pasos:
  - "Definir el conjunto de caracteres permitidos."
  - "Invertir el conjunto con `^`."
  - "Aplicar la sustitución global."
```

### 24 — Fusión de archivos con `paste`
```
metadata:
  materia: "informatica-ramas"
  tema: "datos-limpieza-de-datos"
  nivel: "avanzado"
  tags: ["paste", "fusion", "columnas"]
respuesta: "paste -d, archivo1.txt archivo2.txt"
tipo: completar
enunciado:
  - "Completa el comando `paste` para unir dos archivos línea por línea, separando las columnas con una coma:"
  - "_______"
explicacion:
  - "El comando `paste` une archivos línea por línea. La opción `-d,` especifica que el delimitador entre las columnas fusionadas será una coma. El comando es `paste -d, archivo1.txt archivo2.txt`."
pasos:
  - "Seleccionar el comando `paste`."
  - "Definir el delimitador `-d,`."
  - "Especificar los archivos de entrada."
```

### 25 — Validación de estructura JSON con `jq`
```
metadata:
  materia: "informatica-ramas"
  tema: "datos-limpieza-de-datos"
  nivel: "avanzado"
  tags: ["jq", "validacion", "json"]
respuesta: "jq empty"
tipo: completar
enunciado:
  - "Completa el comando `jq` para validar si un archivo JSON es válido sin producir salida:"
  - "jq _______ archivo.json"
explicacion:
  - "El filtro `empty` de `jq` no produce ninguna salida. Si el archivo JSON es válido, el comando termina con éxito (código 0). Si no lo es, `jq` informa un error. Es una forma eficiente de validar la integridad del formato."
pasos:
  - "Seleccionar el filtro `empty`."
  - "Especificar el archivo a validar."
  - "Verificar el código de salida."
```