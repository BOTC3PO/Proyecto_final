# Bash — Procesamiento de columnas con awk (cuestionario, 22 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Qué es awk

```
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Texto organizado en columnas, como tablas, logs o CSV", "Imágenes", "Archivos comprimidos", "Programas ya compilados"]
respuesta: "Texto organizado en columnas, como tablas, logs o CSV"

enunciado: "¿Para qué tipo de texto es especialmente útil `awk`?"

explicacion: |
  `awk` divide cada línea en campos y permite filtrar y calcular sobre ellos.
```

### 2 — Primer campo

```
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "basico"
  tags: ["campos"]

tipo: mc
opciones_explicitas: ["La primera columna de cada línea", "La primera línea del archivo", "La cantidad de líneas", "El nombre del archivo"]
respuesta: "La primera columna de cada línea"

enunciado: "¿Qué imprime `awk '{{ print $1 }}' ventas.txt`?"

explicacion: |
  `$1` es el primer campo de cada línea. Los campos se separan, por defecto, por espacios o tabulaciones.
```

### 3 — Línea completa

```
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "basico"
  tags: ["campos"]

tipo: mc
opciones_explicitas: ["La línea completa", "El primer campo", "La cantidad de campos", "El número de línea"]
respuesta: "La línea completa"

enunciado: "¿Qué representa `$0` en awk?"

explicacion: |
  `$0` es toda la línea; `$1`, `$2`... son sus campos.
```

### 4 — Cantidad de campos

```
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "basico"
  tags: ["NF"]

tipo: completar
respuesta: "NF"
respuestas_validas:
  - "NF"

enunciado: "La variable de awk que contiene la cantidad de campos de la línea actual es `___`."

explicacion: |
  `NF` (*number of fields*). `$NF` es el último campo de la línea.
```

### 5 — Número de línea

```
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "basico"
  tags: ["NR"]

tipo: completar
respuesta: "NR"
respuestas_validas:
  - "NR"

enunciado: "La variable de awk que contiene el número de la línea actual es `___`."

explicacion: |
  `NR` (*number of records*) vale 1 en la primera línea, 2 en la segunda, etc.
```

### 6 — Último campo

```
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "intermedio"
  tags: ["NF"]

tipo: mc
opciones_explicitas: ["El último campo de cada línea", "La cantidad de campos", "La última línea", "El campo número cero"]
respuesta: "El último campo de cada línea"

enunciado: "¿Qué imprime `awk '{{ print $NF }}' datos.txt`?"

explicacion: |
  `$NF` usa el valor de `NF` como índice: el último campo, aunque las líneas tengan distinto largo.
```

### 7 — Separador

```
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "basico"
  tags: ["-F"]

tipo: mc
opciones_explicitas: ["awk -F: '{{ print $1 }}' /etc/passwd", "awk -S: '{{ print $1 }}' /etc/passwd", "awk ':' '{{ print $1 }}' /etc/passwd", "No se puede cambiar el separador"]
respuesta: "awk -F: '{{ print $1 }}' /etc/passwd"

enunciado: "¿Cómo se indica que los campos están separados por dos puntos, como en `/etc/passwd`?"

explicacion: |
  `-F` define el separador de campos de entrada (la variable `FS`). Con `-F:`, `$1` es el primer campo antes de los dos puntos.
```

### 8 — CSV

```
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "basico"
  tags: ["-F"]

tipo: mc
opciones_explicitas: ["awk -F, '{{ print $2 }}' datos.csv", "awk '{{ print $2 }}' datos.csv", "awk -F; '{{ print $2 }}' datos.csv", "awk -c '{{ print $2 }}' datos.csv"]
respuesta: "awk -F, '{{ print $2 }}' datos.csv"

enunciado: "¿Cómo se imprime la segunda columna de un archivo separado por comas?"

explicacion: |
  Hay que indicar la coma como separador con `-F,`. Ojo: los CSV con comas dentro de campos entre comillas necesitan herramientas más específicas.
```

### 9 — Filtrar por valor

```
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "basico"
  tags: ["patron"]

tipo: mc
opciones_explicitas: ["Muestra las líneas donde la tercera columna es mayor que 100", "Suma las terceras columnas", "Muestra solo la tercera columna", "Muestra las 100 primeras líneas"]
respuesta: "Muestra las líneas donde la tercera columna es mayor que 100"

enunciado: "¿Qué hace `awk '$3 > 100' ventas.txt`?"

explicacion: |
  Una condición sin acción imprime la línea completa cuando se cumple.
```

### 10 — Filtrar por texto

```
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "basico"
  tags: ["patron"]

tipo: mc
opciones_explicitas: ["Muestra las líneas que contienen \"error\"", "Cuenta los errores", "Borra las líneas con \"error\"", "Muestra solo la palabra \"error\""]
respuesta: "Muestra las líneas que contienen \"error\""

enunciado: "¿Qué hace `awk '/error/' log.txt`?"

explicacion: |
  Un patrón entre barras es una expresión regular aplicada a la línea completa, parecido a `grep`.
```

### 11 — Saltar el encabezado

```
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "intermedio"
  tags: ["NR"]

tipo: mc
opciones_explicitas: ["awk 'NR > 1' datos.csv", "awk 'NR == 0' datos.csv", "awk 'NR < 1' datos.csv", "awk 'NF > 1' datos.csv"]
respuesta: "awk 'NR > 1' datos.csv"

enunciado: "¿Cómo se omite la primera línea (encabezado) de un archivo?"

explicacion: |
  `NR > 1` es verdadero desde la segunda línea en adelante. `NF > 1` filtraría por cantidad de campos, no por posición.
```

### 12 — Suma de una columna

```
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "intermedio"
  tags: ["suma"]

tipo: mc
opciones_explicitas: ["La suma de la segunda columna de todas las líneas", "La cantidad de líneas", "La suma de todos los campos", "La segunda línea"]
respuesta: "La suma de la segunda columna de todas las líneas"

enunciado: "¿Qué calcula `awk '{{ suma += $2 }} END {{ print suma }}' ventas.txt`?"

explicacion: |
  En cada línea se acumula `$2` en `suma`; el bloque `END` se ejecuta una vez al final e imprime el total. Las variables empiezan en 0.
```

### 13 — Cuántas líneas

```
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "intermedio"
  tags: ["END"]

tipo: mc
opciones_explicitas: ["Imprime la cantidad de líneas del archivo", "Imprime la última línea", "No imprime nada", "Imprime la cantidad de campos"]
respuesta: "Imprime la cantidad de líneas del archivo"

enunciado: "¿Qué hace `awk 'END {{ print NR }}' archivo`?"

explicacion: |
  En `END`, `NR` conserva el número de la última línea leída, que es el total.
```

### 14 — BEGIN

```
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "intermedio"
  tags: ["BEGIN"]

tipo: mc
opciones_explicitas: ["Una sola vez, antes de leer la primera línea", "Para cada línea", "Una sola vez, al final", "Nunca, hasta que se llama a una función"]
respuesta: "Una sola vez, antes de leer la primera línea"

enunciado: "¿Cuándo se ejecuta el bloque `BEGIN {{ ... }}`?"

explicacion: |
  `BEGIN` sirve para inicializar variables o imprimir encabezados antes de procesar el archivo.
```

### 15 — Promedio

```
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "avanzado"
  tags: ["promedio"]

tipo: mc
opciones_explicitas: ["awk '{{ s += $2 }} END {{ print s / NR }}' datos", "awk '{{ print $2 / NR }}' datos", "awk 'BEGIN {{ print $2 / NR }}' datos", "awk '{{ s += $2 }} END {{ print s * NR }}' datos"]
respuesta: "awk '{{ s += $2 }} END {{ print s / NR }}' datos"

enunciado: "¿Cómo se calcula el promedio de la columna 2?"

explicacion: |
  Se acumula la suma y, al terminar, se divide por la cantidad de líneas (`NR`). Si hay encabezado conviene restarlo.
```

### 16 — Pegar campos

```
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "intermedio"
  tags: ["print"]

tipo: mc
opciones_explicitas: ["Con coma se separan con espacio; sin coma se pegan", "Ninguna", "Sin coma da error", "Con coma se imprimen en líneas distintas"]
respuesta: "Con coma se separan con espacio; sin coma se pegan"

enunciado: "¿Qué diferencia hay entre `print $1, $2` y `print $1 $2`?"

explicacion: |
  La coma inserta el separador de salida (OFS, por defecto un espacio).
```

### 17 — Largo de línea

```
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "intermedio"
  tags: ["length"]

tipo: mc
opciones_explicitas: ["Muestra las líneas de más de 80 caracteres", "Muestra las 80 primeras líneas", "Cuenta las palabras", "Corta las líneas a 80 caracteres"]
respuesta: "Muestra las líneas de más de 80 caracteres"

enunciado: "¿Qué hace `awk 'length($0) > 80' texto`?"

explicacion: |
  `length($0)` devuelve la cantidad de caracteres de la línea.
```

### 18 — Pasar variables

```
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "avanzado"
  tags: ["-v"]

tipo: mc
opciones_explicitas: ["awk -v min=100 '$3 > min' ventas.txt", "awk --min=100 '$3 > min' ventas.txt", "awk '$3 > $min' ventas.txt", "No se puede"]
respuesta: "awk -v min=100 '$3 > min' ventas.txt"

enunciado: "¿Cómo se le pasa a awk una variable `min` desde la shell?"

explicacion: |
  `-v nombre=valor` define la variable antes de procesar. Si se escribe `$min` dentro del programa, awk lo leería como un campo.
```

### 19 — Contar por clave

```
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "avanzado"
  tags: ["arreglos"]

tipo: mc
opciones_explicitas: ["Cuenta cuántas veces aparece cada valor de la primera columna", "Suma la primera columna", "Ordena las líneas", "Borra los repetidos sin contar"]
respuesta: "Cuenta cuántas veces aparece cada valor de la primera columna"

enunciado: "¿Qué hace `awk '{{ c[$1]++ }} END {{ for (k in c) print k, c[k] }}' ventas.txt`?"

explicacion: |
  `c` es un arreglo asociativo cuya clave es `$1`: cada aparición incrementa su contador. Al final se recorre e imprime.
```

### 20 — Mayúsculas

```
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "basico"
  tags: ["funciones"]

tipo: mc
opciones_explicitas: ["Imprime la primera columna en mayúsculas", "Pone todo el archivo en mayúsculas", "Cuenta las mayúsculas", "Borra las mayúsculas"]
respuesta: "Imprime la primera columna en mayúsculas"

enunciado: "¿Qué hace `awk '{{ print toupper($1) }}' nombres.txt`?"

explicacion: |
  `toupper()` convierte un texto a mayúsculas; `tolower()` a minúsculas.
```

### 21 — Comillas del programa

```
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "intermedio"
  tags: ["comillas"]

tipo: mc
opciones_explicitas: ["Para que la shell no reemplace `$1`, `$2` y otros símbolos", "Para que corra más rápido", "Porque lo exige la sintaxis de awk", "Para ignorar mayúsculas"]
respuesta: "Para que la shell no reemplace `$1`, `$2` y otros símbolos"

enunciado: "¿Por qué el programa de awk va entre comillas simples?"

explicacion: |
  Si la shell viera `$1` sin comillas, lo reemplazaría por el primer argumento del script (probablemente vacío).
```

### 22 — Dar formato

```
metadata:
  materia: "bash"
  tema: "awk"
  nivel: "avanzado"
  tags: ["printf"]

tipo: mc
opciones_explicitas: ["Para imprimir con formato (anchos, decimales) como en C", "Para leer un archivo", "Para sumar columnas", "Para borrar líneas"]
respuesta: "Para imprimir con formato (anchos, decimales) como en C"

enunciado: "¿Para qué sirve `printf` en awk?"

explicacion: |
  Por ejemplo, `printf "%-10s %6.2f\n", $1, $2` alinea el texto a la izquierda y muestra dos decimales.
```

