# Bash — Bucles: for, while y until (cuestionario, 21 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Cierre del for

```
metadata:
  materia: "bash"
  tema: "bucles_en_bash"
  nivel: "basico"
  tags: ["sintaxis"]

tipo: mc
opciones_explicitas: ["done", "end", "fi", "esac"]
respuesta: "done"

enunciado: "¿Con qué palabra se cierra un bucle `for` o `while` en Bash?"

explicacion: |
  Los bucles se cierran con `done`. `fi` cierra un `if` y `esac` cierra un `case`.
```

### 2 — Qué hace un for

```
metadata:
  materia: "bash"
  tema: "bucles_en_bash"
  nivel: "basico"
  tags: ["for"]

tipo: mc
opciones_explicitas: ["Imprime a, b y c en tres líneas", "Imprime \"a b c\" una sola vez", "Da error: falta un contador", "Imprime la letra x tres veces"]
respuesta: "Imprime a, b y c en tres líneas"

enunciado: "¿Qué hace `for x in a b c; do echo $x; done`?"

explicacion: |
  La variable `x` toma cada valor de la lista en cada vuelta.
```

### 3 — Secuencia

```
metadata:
  materia: "bash"
  tema: "bucles_en_bash"
  nivel: "basico"
  tags: ["for"]

tipo: mc
opciones_explicitas: ["1, 2 y 3, uno por línea", "{1..3}", "3 2 1", "Solo 1"]
respuesta: "1, 2 y 3, uno por línea"

enunciado: "¿Qué muestra `for n in {{1..3}}; do echo $n; done`?"

explicacion: |
  La expansión `{{1..3}}` genera `1 2 3` antes de que empiece el bucle.
```

### 4 — Archivos de una carpeta

```
metadata:
  materia: "bash"
  tema: "bucles_en_bash"
  nivel: "basico"
  tags: ["comodines"]

tipo: mc
opciones_explicitas: ["for f in *.txt; do ...; done", "for f in ls *.txt; do ...; done", "for f = *.txt; do ...; done", "foreach f in *.txt; do ...; done"]
respuesta: "for f in *.txt; do ...; done"

enunciado: "¿Cómo se recorre cada archivo `.txt` de la carpeta actual?"

explicacion: |
  El comodín `*.txt` lo expande la shell a la lista de archivos. Usar `$(ls)` es frágil con nombres que tengan espacios.
```

### 5 — Citar la variable

```
metadata:
  materia: "bash"
  tema: "bucles_en_bash"
  nivel: "intermedio"
  tags: ["citar"]

tipo: mc
opciones_explicitas: ["wc -l \"$f\"", "wc -l $f", "wc -l '$f'", "wc -l f"]
respuesta: "wc -l \"$f\""

enunciado: "Dentro del bucle `for f in *.txt`, ¿cuál es la forma segura de usar el archivo?"

explicacion: |
  Con comillas dobles, un nombre con espacios llega como un solo argumento. Las comillas simples no expandirían la variable.
```

### 6 — for estilo C

```
metadata:
  materia: "bash"
  tema: "bucles_en_bash"
  nivel: "basico"
  tags: ["for-c"]

tipo: mc
opciones_explicitas: ["5 veces (i = 0, 1, 2, 3 y 4)", "6 veces", "4 veces", "Infinitas veces"]
respuesta: "5 veces (i = 0, 1, 2, 3 y 4)"

enunciado: "¿Cuántas veces se repite `for (( i = 0; i < 5; i++ )); do ...; done`?"

explicacion: |
  Empieza en 0 y se repite mientras `i < 5`. Con `i = 5` la condición falla y sale.
```

### 7 — Paso distinto

```
metadata:
  materia: "bash"
  tema: "bucles_en_bash"
  nivel: "intermedio"
  tags: ["seq"]

tipo: mc
opciones_explicitas: ["1 3 5 7 9", "1 2 3 ... 9", "2 4 6 8", "9 7 5 3 1"]
respuesta: "1 3 5 7 9"

enunciado: "¿Qué genera `seq 1 2 9`?"

explicacion: |
  `seq inicio paso fin`. Con un paso de 2 empieza en 1 y suma 2 hasta no pasarse de 9.
```

### 8 — Mientras

```
metadata:
  materia: "bash"
  tema: "bucles_en_bash"
  nivel: "basico"
  tags: ["while"]

tipo: mc
opciones_explicitas: ["Repite el bloque mientras la condición sea verdadera", "Repite el bloque hasta que la condición sea verdadera", "Ejecuta el bloque una sola vez", "Ejecuta el bloque en segundo plano"]
respuesta: "Repite el bloque mientras la condición sea verdadera"

enunciado: "¿Qué hace `while`?"

explicacion: |
  `while` evalúa la condición antes de cada vuelta; si es falsa, termina.
```

### 9 — Hasta que

```
metadata:
  materia: "bash"
  tema: "bucles_en_bash"
  nivel: "basico"
  tags: ["until"]

tipo: mc
opciones_explicitas: ["Repite hasta que `n` sea mayor o igual que 3", "Repite mientras `n` sea mayor o igual que 3", "Repite exactamente 3 veces", "Repite una sola vez"]
respuesta: "Repite hasta que `n` sea mayor o igual que 3"

enunciado: "¿Qué hace `until [ \"$n\" -ge 3 ]; do ...; done`?"

explicacion: |
  `until` es el opuesto de `while`: repite mientras la condición sea falsa.
```

### 10 — Bucle que no termina

```
metadata:
  materia: "bash"
  tema: "bucles_en_bash"
  nivel: "basico"
  tags: ["infinito"]

tipo: mc
opciones_explicitas: ["Porque `n` nunca cambia dentro del bucle", "Porque `echo` no funciona en bucles", "Porque falta `then`", "Porque `-le` no se puede usar en un while"]
respuesta: "Porque `n` nunca cambia dentro del bucle"

enunciado: "¿Por qué este bucle nunca termina? `n=1; while [ \"$n\" -le 3 ]; do echo $n; done`"

explicacion: |
  Hay que modificar la variable que se evalúa (por ejemplo, `n=$(( n + 1 ))`). Se corta con `Ctrl+C`.
```

### 11 — Incrementar

```
metadata:
  materia: "bash"
  tema: "bucles_en_bash"
  nivel: "basico"
  tags: ["incrementar"]

tipo: completar
respuesta: "+"
respuestas_validas:
  - "+"

enunciado: "Para sumar 1 a `n` dentro de un bucle se escribe `n=$(( n ___ 1 ))`."

explicacion: |
  La aritmética de Bash se escribe dentro de `$(( ))`. También existe `(( n++ ))`.
```

### 12 — Salir

```
metadata:
  materia: "bash"
  tema: "bucles_en_bash"
  nivel: "basico"
  tags: ["break"]

tipo: mc
opciones_explicitas: ["Termina el bucle por completo", "Salta a la siguiente vuelta", "Pausa el bucle un segundo", "Reinicia el bucle"]
respuesta: "Termina el bucle por completo"

enunciado: "¿Qué hace `break` dentro de un bucle?"

explicacion: |
  `break` sale del bucle; `continue` pasa directamente a la siguiente iteración.
```

### 13 — Saltear

```
metadata:
  materia: "bash"
  tema: "bucles_en_bash"
  nivel: "basico"
  tags: ["continue"]

tipo: mc
opciones_explicitas: ["Salta el resto del bloque y pasa a la siguiente vuelta", "Termina el bucle", "Repite la vuelta actual", "Termina el script"]
respuesta: "Salta el resto del bloque y pasa a la siguiente vuelta"

enunciado: "¿Qué hace `continue` dentro de un bucle?"

explicacion: |
  Es útil para ignorar ciertos casos sin salir del bucle.
```

### 14 — Cuántas veces

```
metadata:
  materia: "bash"
  tema: "bucles_en_bash"
  nivel: "avanzado"
  tags: ["break", "continue"]

tipo: mc
opciones_explicitas: ["1, 3, 5 y 7", "2, 4, 6, 8 y 10", "1 a 7", "1, 3, 5, 7 y 9"]
respuesta: "1, 3, 5 y 7"

enunciado: "¿Qué muestra `for n in {{1..10}}; do [ $(( n % 2 )) -eq 0 ] && continue; [ \"$n\" -gt 7 ] && break; echo $n; done`?"

explicacion: |
  Los pares se saltean con `continue`; cuando `n` llega a 9 (mayor que 7) el `break` corta el bucle antes de imprimir.
```

### 15 — Leer línea por línea

```
metadata:
  materia: "bash"
  tema: "bucles_en_bash"
  nivel: "intermedio"
  tags: ["read"]

tipo: mc
opciones_explicitas: ["while IFS= read -r linea; do ...; done < archivo", "for linea in archivo; do ...; done", "for linea in $(cat archivo); do ...; done", "while linea = archivo; do ...; done"]
respuesta: "while IFS= read -r linea; do ...; done < archivo"

enunciado: "¿Cuál es la forma estándar de leer un archivo línea por línea?"

explicacion: |
  `read` lee una línea por vuelta. `for linea in $(cat archivo)` cortaría por palabras, no por líneas.
```

### 16 — Qué hace -r

```
metadata:
  materia: "bash"
  tema: "bucles_en_bash"
  nivel: "avanzado"
  tags: ["read"]

tipo: mc
opciones_explicitas: ["Para que las barras invertidas se lean tal cual, sin interpretarlas", "Para leer al revés", "Para repetir la lectura", "Para leer solo la primera palabra"]
respuesta: "Para que las barras invertidas se lean tal cual, sin interpretarlas"

enunciado: "En `read -r linea`, ¿para qué sirve `-r`?"

explicacion: |
  Sin `-r`, `read` interpreta `\` como escape y puede alterar el contenido.
```

### 17 — Dónde va la redirección

```
metadata:
  materia: "bash"
  tema: "bucles_en_bash"
  nivel: "intermedio"
  tags: ["read"]

tipo: mc
opciones_explicitas: ["Porque la entrada se aplica a todo el bucle", "Porque si va antes da error de sintaxis en el archivo", "Es un capricho de estilo", "Para que `datos.txt` se borre al terminar"]
respuesta: "Porque la entrada se aplica a todo el bucle"

enunciado: "En `while read linea; do ...; done < datos.txt`, ¿por qué la `< datos.txt` va después de `done`?"

explicacion: |
  La redirección de entrada de todo el bloque `while` se escribe al final, después de `done`.
```

### 18 — Infinito a propósito

```
metadata:
  materia: "bash"
  tema: "bucles_en_bash"
  nivel: "intermedio"
  tags: ["infinito"]

tipo: mc
opciones_explicitas: ["Repite el bloque indefinidamente, con una pausa de 5 segundos", "Se ejecuta una vez", "Da error porque `true` no es una condición", "Se ejecuta durante 5 segundos"]
respuesta: "Repite el bloque indefinidamente, con una pausa de 5 segundos"

enunciado: "¿Qué hace `while true; do ...; sleep 5; done`?"

explicacion: |
  `true` siempre devuelve 0. Se usa para procesos que quedan "vigilando" algo; se cortan con `Ctrl+C` o con `break`.
```

### 19 — Sumar elementos

```
metadata:
  materia: "bash"
  tema: "bucles_en_bash"
  nivel: "basico"
  tags: ["acumulador"]

tipo: mc
opciones_explicitas: ["10", "4", "1234", "0"]
respuesta: "10"

enunciado: "¿Qué calcula `s=0; for n in 1 2 3 4; do s=$(( s + n )); done; echo $s`?"

explicacion: |
  Se acumula 1 + 2 + 3 + 4 = 10.
```

### 20 — Renombrar archivos

```
metadata:
  materia: "bash"
  tema: "bucles_en_bash"
  nivel: "avanzado"
  tags: ["renombrar"]

tipo: mc
opciones_explicitas: ["Cambia la extensión `.jpeg` por `.jpg` en cada archivo", "Borra los archivos .jpeg", "Copia los archivos a otra carpeta", "Cambia el contenido de las imágenes"]
respuesta: "Cambia la extensión `.jpeg` por `.jpg` en cada archivo"

enunciado: "¿Qué hace `for f in *.jpeg; do mv \"$f\" \"${{f%.jpeg}}.jpg\"; done`?"

explicacion: |
  `${{f%.jpeg}}` quita el sufijo `.jpeg` del nombre; luego se agrega `.jpg`. Siempre se cita `"$f"` por si hay espacios.
```

### 21 — Espacios en nombres

```
metadata:
  materia: "bash"
  tema: "bucles_en_bash"
  nivel: "intermedio"
  tags: ["espacios"]

tipo: vf
respuesta: falso

enunciado: "`for f in $(ls)` es la forma más segura de recorrer archivos, incluso si tienen espacios en el nombre."

explicacion: |
  La expansión de `$(ls)` se corta en los espacios, y un archivo `mis fotos.jpg` se recorrería como dos elementos. Lo seguro es `for f in *`.
```

