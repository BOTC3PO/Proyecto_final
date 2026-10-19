# Bash — Búsqueda de texto con grep (cuestionario, 23 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Para qué sirve

```
metadata:
  materia: "bash"
  tema: "grep"
  nivel: "basico"
  tags: ["basico"]

tipo: mc
opciones_explicitas: ["Muestra las líneas de `texto.txt` que contienen \"hola\"", "Cuenta las palabras de `texto.txt`", "Reemplaza \"hola\" por otra palabra", "Borra las líneas con \"hola\""]
respuesta: "Muestra las líneas de `texto.txt` que contienen \"hola\""

enunciado: "¿Qué hace `grep \"hola\" texto.txt`?"

explicacion: |
  `grep` filtra líneas: imprime las que coinciden con el patrón.
```

### 2 — Ignorar mayúsculas

```
metadata:
  materia: "bash"
  tema: "grep"
  nivel: "basico"
  tags: ["-i"]

tipo: mc
opciones_explicitas: ["-i", "-u", "-m", "-c"]
respuesta: "-i"

enunciado: "¿Qué opción hace que `grep` ignore la diferencia entre mayúsculas y minúsculas?"

explicacion: |
  `-i` (*ignore case*): `grep -i "error" log` encuentra ERROR, Error y error.
```

### 3 — Invertir

```
metadata:
  materia: "bash"
  tema: "grep"
  nivel: "basico"
  tags: ["-v"]

tipo: mc
opciones_explicitas: ["Muestra las líneas que NO contienen `#`", "Muestra solo las líneas con `#`", "Cuenta las líneas con `#`", "Borra las líneas con `#` del archivo"]
respuesta: "Muestra las líneas que NO contienen `#`"

enunciado: "¿Qué hace `grep -v \"#\" config.conf`?"

explicacion: |
  `-v` invierte el criterio. Solo muestra en pantalla; **no modifica** el archivo.
```

### 4 — Número de línea

```
metadata:
  materia: "bash"
  tema: "grep"
  nivel: "basico"
  tags: ["-n"]

tipo: mc
opciones_explicitas: ["-n", "-l", "-c", "-N"]
respuesta: "-n"

enunciado: "¿Qué opción agrega el número de línea a cada coincidencia?"

explicacion: |
  `-n` antepone el número de línea: `12:ERROR disco lleno`.
```

### 5 — Contar coincidencias

```
metadata:
  materia: "bash"
  tema: "grep"
  nivel: "intermedio"
  tags: ["-c"]

tipo: mc
opciones_explicitas: ["La cantidad de líneas que contienen ERROR", "Las líneas con ERROR", "Cuántas veces aparece ERROR en total (aunque haya varias en una misma línea)", "El primer ERROR"]
respuesta: "La cantidad de líneas que contienen ERROR"

enunciado: "¿Qué muestra `grep -c \"ERROR\" servidor.log`?"

explicacion: |
  `-c` cuenta **líneas** que coinciden, no apariciones. Si una línea tiene dos ERROR, cuenta una.
```

### 6 — Buscar en subcarpetas

```
metadata:
  materia: "bash"
  tema: "grep"
  nivel: "basico"
  tags: ["-r"]

tipo: completar
respuesta: "-r"
respuestas_validas:
  - "-r"
  - "-R"

enunciado: "Para buscar \"clave\" en todos los archivos de una carpeta y sus subcarpetas se usa `grep ___ \"clave\" carpeta/`."

explicacion: |
  `-r` (o `-R`) es recursivo: recorre las subcarpetas. Suele combinarse con `-n` para ver archivo y línea.
```

### 7 — Solo nombres

```
metadata:
  materia: "bash"
  tema: "grep"
  nivel: "basico"
  tags: ["-l"]

tipo: mc
opciones_explicitas: ["Muestra solo los nombres de los archivos que contienen la palabra", "Muestra solo la última línea", "Cuenta las líneas", "Lista todos los archivos .conf"]
respuesta: "Muestra solo los nombres de los archivos que contienen la palabra"

enunciado: "¿Qué hace `grep -l \"password\" *.conf`?"

explicacion: |
  `-l` (*files with matches*) imprime el nombre de cada archivo con al menos una coincidencia.
```

### 8 — Palabra completa

```
metadata:
  materia: "bash"
  tema: "grep"
  nivel: "intermedio"
  tags: ["-w"]

tipo: mc
opciones_explicitas: ["Solo coincide con la palabra \"son\" completa, no con \"sonido\" ni \"canción\"", "Ignora mayúsculas", "Busca en subcarpetas", "Muestra líneas alrededor"]
respuesta: "Solo coincide con la palabra \"son\" completa, no con \"sonido\" ni \"canción\""

enunciado: "¿Qué diferencia hace `-w` en `grep -w \"son\" texto`?"

explicacion: |
  `-w` exige que la coincidencia esté rodeada de caracteres que no sean letras, números o guion bajo.
```

### 9 — Contexto

```
metadata:
  materia: "bash"
  tema: "grep"
  nivel: "intermedio"
  tags: ["contexto"]

tipo: mc
opciones_explicitas: ["Muestra cada línea con FALLO y las 2 líneas que le siguen", "Muestra las 2 líneas anteriores", "Muestra solo 2 coincidencias", "Muestra solo las últimas 2 líneas del archivo"]
respuesta: "Muestra cada línea con FALLO y las 2 líneas que le siguen"

enunciado: "¿Qué hace `grep -A 2 \"FALLO\" log`?"

explicacion: |
  `-A n` (*after*) muestra n líneas después; `-B n` (*before*) antes; `-C n` (*context*) alrededor.
```

### 10 — Expresión regular: inicio

```
metadata:
  materia: "bash"
  tema: "grep"
  nivel: "basico"
  tags: ["regex"]

tipo: mc
opciones_explicitas: ["Las que EMPIEZAN con \"Error\"", "Las que terminan con \"Error\"", "Las que contienen \"Error\" en cualquier lugar", "Las que no tienen \"Error\""]
respuesta: "Las que EMPIEZAN con \"Error\""

enunciado: "¿Qué líneas encuentra `grep \"^Error\" log`?"

explicacion: |
  `^` ancla el patrón al comienzo de la línea.
```

### 11 — Expresión regular: fin

```
metadata:
  materia: "bash"
  tema: "grep"
  nivel: "intermedio"
  tags: ["regex"]

tipo: mc
opciones_explicitas: ["Las que terminan con \".txt\"", "Las que empiezan con \".txt\"", "Las que contienen \"txt\" en el medio", "Las que tienen cualquier carácter y \"txt\""]
respuesta: "Las que terminan con \".txt\""

enunciado: "¿Qué líneas encuentra `grep \"\\.txt$\" lista`?"

explicacion: |
  `$` ancla al final de la línea y `\.` es un punto literal (sin la barra, el punto significaría "cualquier carácter").
```

### 12 — Líneas vacías

```
metadata:
  materia: "bash"
  tema: "grep"
  nivel: "basico"
  tags: ["regex"]

tipo: mc
opciones_explicitas: ["^$", "^.$", "$^", "\\n"]
respuesta: "^$"

enunciado: "¿Qué patrón encuentra las líneas vacías?"

explicacion: |
  `^$` es "comienzo de línea y fin de línea sin nada en el medio". Con `-v` se obtienen las líneas que NO están vacías.
```

### 13 — El punto

```
metadata:
  materia: "bash"
  tema: "grep"
  nivel: "basico"
  tags: ["regex"]

tipo: mc
opciones_explicitas: ["Cualquier carácter (uno)", "Un punto literal siempre", "Fin de línea", "Cero o más caracteres"]
respuesta: "Cualquier carácter (uno)"

enunciado: "En una expresión regular, ¿qué significa `.`?"

explicacion: |
  El punto es un comodín de un carácter. Para buscar un punto de verdad se escribe `\.`.
```

### 14 — Repetición

```
metadata:
  materia: "bash"
  tema: "grep"
  nivel: "intermedio"
  tags: ["regex"]

tipo: mc
opciones_explicitas: ["Cero o más letras a", "Una o más letras a", "Exactamente una a", "La palabra \"a*\""]
respuesta: "Cero o más letras a"

enunciado: "¿Qué significa `a*` en una expresión regular básica?"

explicacion: |
  `*` repite el elemento anterior cero o más veces (puede no haber ninguna). Para "una o más" se usa `+` con `-E`.
```

### 15 — Extendidas

```
metadata:
  materia: "bash"
  tema: "grep"
  nivel: "intermedio"
  tags: ["-E"]

tipo: mc
opciones_explicitas: ["Para usar expresiones regulares extendidas (`+`, `?`, `{n}`, `|`, `()`)", "Para ignorar errores", "Para extender la búsqueda a subcarpetas", "Para mostrar solo la parte que coincide"]
respuesta: "Para usar expresiones regulares extendidas (`+`, `?`, `{n}`, `|`, `()`)"

enunciado: "¿Para qué sirve `grep -E`?"

explicacion: |
  Con `-E` se pueden escribir patrones como `"^[0-9]{{3}}$"` sin escapar las llaves.
```

### 16 — Alternativa

```
metadata:
  materia: "bash"
  tema: "grep"
  nivel: "intermedio"
  tags: ["-E"]

tipo: mc
opciones_explicitas: ["Las líneas que contienen \"gato\" o \"perro\"", "Las que contienen ambas palabras", "Solo la palabra \"gato|perro\" literal", "Las que no contienen ninguna de las dos"]
respuesta: "Las líneas que contienen \"gato\" o \"perro\""

enunciado: "¿Qué encuentra `grep -E \"gato|perro\" animales.txt`?"

explicacion: |
  El símbolo `|` en las expresiones extendidas significa "o".
```

### 17 — Teléfono

```
metadata:
  materia: "bash"
  tema: "grep"
  nivel: "avanzado"
  tags: ["-E"]

tipo: mc
opciones_explicitas: ["grep -E \"^[0-9]{4}$\"", "grep \"[0-9]\"", "grep \"^[0-9]*\"", "grep -E \"[0-9]{4}\""]
respuesta: "grep -E \"^[0-9]{4}$\""

enunciado: "¿Qué patrón verifica una línea con exactamente 4 dígitos?"

explicacion: |
  `^` y `$` obligan a que toda la línea sean exactamente 4 dígitos. Sin los anclajes, el patrón también coincidiría con líneas más largas que contengan 4 dígitos seguidos.
```

### 18 — Solo la parte

```
metadata:
  materia: "bash"
  tema: "grep"
  nivel: "intermedio"
  tags: ["-o"]

tipo: mc
opciones_explicitas: ["Muestra solo las partes que coinciden, no la línea entera", "Muestra la línea entera", "Cuenta las coincidencias", "Busca solo en el primer archivo"]
respuesta: "Muestra solo las partes que coinciden, no la línea entera"

enunciado: "¿Qué hace `grep -o \"[0-9]*\" texto`?"

explicacion: |
  `-o` imprime únicamente el fragmento que cumplió el patrón (una por línea).
```

### 19 — Código de salida

```
metadata:
  materia: "bash"
  tema: "grep"
  nivel: "intermedio"
  tags: ["exit"]

tipo: mc
opciones_explicitas: ["1", "0", "2", "255"]
respuesta: "1"

enunciado: "¿Qué código de salida devuelve `grep` si NO encuentra ninguna coincidencia?"

explicacion: |
  0 = encontró, 1 = no encontró, 2 = error (por ejemplo, el archivo no existe).
```

### 20 — En un if

```
metadata:
  materia: "bash"
  tema: "grep"
  nivel: "intermedio"
  tags: ["if"]

tipo: mc
opciones_explicitas: ["Ejecuta el bloque si la palabra aparece, sin mostrar nada por pantalla", "Ejecuta el bloque si la palabra NO aparece", "Muestra la línea y sigue", "Da error porque grep no se puede usar en un if"]
respuesta: "Ejecuta el bloque si la palabra aparece, sin mostrar nada por pantalla"

enunciado: "¿Qué hace `if grep -q \"admin\" usuarios.txt; then ...; fi`?"

explicacion: |
  `-q` (*quiet*) suprime la salida y deja el resultado en el código de salida, que `if` evalúa (0 = verdadero).
```

### 21 — Texto fijo

```
metadata:
  materia: "bash"
  tema: "grep"
  nivel: "intermedio"
  tags: ["-F"]

tipo: mc
opciones_explicitas: ["grep -F \"3.14\" archivo", "grep \"3.14\" archivo (alcanza)", "grep -v \"3.14\" archivo", "grep -c \"3.14\" archivo"]
respuesta: "grep -F \"3.14\" archivo"

enunciado: "Para buscar el texto exacto `3.14` sin que el punto signifique \"cualquier carácter\", ¿qué conviene usar?"

explicacion: |
  `-F` trata el patrón como texto fijo. Sin `-F`, `3.14` también coincidiría con "3x14" o "3514".
```

### 22 — Buscar en código

```
metadata:
  materia: "bash"
  tema: "grep"
  nivel: "intermedio"
  tags: ["-r"]

tipo: mc
opciones_explicitas: ["Busca TODO en los archivos .py de la carpeta actual y sus subcarpetas, mostrando archivo y línea", "Busca solo en el primer archivo .py", "Borra los TODO", "Cuenta los archivos .py"]
respuesta: "Busca TODO en los archivos .py de la carpeta actual y sus subcarpetas, mostrando archivo y línea"

enunciado: "¿Qué hace `grep -rn \"TODO\" --include=\"*.py\" .`?"

explicacion: |
  `-r` es recursivo, `-n` muestra el número de línea y `--include` limita los archivos que se recorren.
```

### 23 — Modifica el archivo

```
metadata:
  materia: "bash"
  tema: "grep"
  nivel: "basico"
  tags: ["concepto"]

tipo: vf
respuesta: falso

enunciado: "`grep -v \"borrador\" notas.txt` elimina del archivo las líneas que contienen \"borrador\"."

explicacion: |
  `grep` solo **lee** y muestra. Para guardar el resultado hay que redirigirlo a otro archivo: `grep -v borrador notas.txt > limpio.txt`.
```

