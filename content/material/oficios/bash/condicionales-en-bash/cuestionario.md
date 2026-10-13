# Bash — Condicionales: if, test y case (cuestionario, 22 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Cómo se cierra un if

```
metadata:
  materia: "bash"
  tema: "condicionales_en_bash"
  nivel: "basico"
  tags: ["if"]

tipo: mc
opciones_explicitas: ["fi", "end", "endif", "done"]
respuesta: "fi"

enunciado: "¿Con qué palabra se cierra un bloque `if` en Bash?"

explicacion: |
  El `if` se cierra con `fi` (if al revés). `done` cierra los bucles y `esac` cierra un `case`.
```

### 2 — Qué evalúa el if

```
metadata:
  materia: "bash"
  tema: "condicionales_en_bash"
  nivel: "basico"
  tags: ["if", "exit"]

tipo: mc
opciones_explicitas: ["El código de salida del comando: 0 es verdadero", "Que el comando muestre texto", "Que el comando devuelva el número 1", "Que el comando termine en menos de un segundo"]
respuesta: "El código de salida del comando: 0 es verdadero"

enunciado: "¿Qué mira `if` para decidir si la condición es verdadera?"

explicacion: |
  En Bash, **0 = éxito = verdadero** (al revés que en muchos lenguajes). Cualquier otro valor es falso.
```

### 3 — Espacios en los corchetes

```
metadata:
  materia: "bash"
  tema: "condicionales_en_bash"
  nivel: "basico"
  tags: ["test"]

tipo: mc
opciones_explicitas: ["[ \"$a\" = \"$b\" ]", "[\"$a\"=\"$b\"]", "[ \"$a\"=\"$b\" ]", "[\"$a\" = \"$b\"]"]
respuesta: "[ \"$a\" = \"$b\" ]"

enunciado: "¿Cuál de estas condiciones está bien escrita?"

explicacion: |
  `[` es un comando: necesita espacios a ambos lados, y también alrededor del `=` (si no, se lee como un solo texto).
```

### 4 — Números iguales

```
metadata:
  materia: "bash"
  tema: "condicionales_en_bash"
  nivel: "basico"
  tags: ["numeros"]

tipo: mc
opciones_explicitas: ["-eq", "==", "=", "-same"]
respuesta: "-eq"

enunciado: "¿Qué operador compara dos NÚMEROS y pregunta si son iguales dentro de `[ ]`?"

explicacion: |
  Para números se usan `-eq`, `-ne`, `-lt`, `-le`, `-gt`, `-ge`. El `=` dentro de `[ ]` compara textos.
```

### 5 — Mayor o igual

```
metadata:
  materia: "bash"
  tema: "condicionales_en_bash"
  nivel: "basico"
  tags: ["numeros"]

tipo: completar
respuesta: "-ge"
respuestas_validas:
  - "-ge"

enunciado: "Para preguntar si `$edad` es mayor o igual que 18, se escribe `[ \"$edad\" ___ 18 ]`."

explicacion: |
  `-ge` significa *greater or equal* (mayor o igual). Los otros son `-gt`, `-lt`, `-le`.
```

### 6 — Comparar textos

```
metadata:
  materia: "bash"
  tema: "condicionales_en_bash"
  nivel: "intermedio"
  tags: ["textos"]

tipo: mc
opciones_explicitas: ["=", "-eq", "-eqs", "=="]
respuesta: "="

enunciado: "¿Qué operador compara dos TEXTOS dentro de `[ ]` (el estándar POSIX)?"

explicacion: |
  En el `[ ]` estándar la igualdad de textos es `=`. En Bash también funciona `==`, pero `=` es más portable.
```

### 7 — Texto vacío

```
metadata:
  materia: "bash"
  tema: "condicionales_en_bash"
  nivel: "basico"
  tags: ["vacia"]

tipo: mc
opciones_explicitas: ["[ -z \"$x\" ]", "[ -n \"$x\" ]", "[ \"$x\" -eq 0 ]", "[ empty $x ]"]
respuesta: "[ -z \"$x\" ]"

enunciado: "¿Cómo se pregunta si la variable `x` está vacía?"

explicacion: |
  `-z` es verdadero si el texto tiene longitud cero; `-n` si NO está vacío.
```

### 8 — Existe el archivo

```
metadata:
  materia: "bash"
  tema: "condicionales_en_bash"
  nivel: "basico"
  tags: ["archivos"]

tipo: mc
opciones_explicitas: ["Si `informe.txt` existe y es un archivo común", "Si existe como carpeta", "Si se puede ejecutar", "Si no está vacío"]
respuesta: "Si `informe.txt` existe y es un archivo común"

enunciado: "¿Qué pregunta `[ -f \"informe.txt\" ]`?"

explicacion: |
  `-f` = archivo común; `-d` = carpeta; `-e` = existe de cualquier tipo.
```

### 9 — Es carpeta

```
metadata:
  materia: "bash"
  tema: "condicionales_en_bash"
  nivel: "basico"
  tags: ["archivos"]

tipo: mc
opciones_explicitas: ["[ -d logs ]", "[ -f logs ]", "[ -c logs ]", "[ -x logs ]"]
respuesta: "[ -d logs ]"

enunciado: "¿Qué prueba verifica que `logs` es una CARPETA?"

explicacion: |
  `-d` (*directory*) es verdadera si la ruta existe y es una carpeta.
```

### 10 — Verificar permisos

```
metadata:
  materia: "bash"
  tema: "condicionales_en_bash"
  nivel: "basico"
  tags: ["archivos"]

tipo: mc
opciones_explicitas: ["Que `script.sh` se puede ejecutar", "Que existe como carpeta", "Que no está vacío", "Que se puede borrar"]
respuesta: "Que `script.sh` se puede ejecutar"

enunciado: "¿Qué verifica `[ -x script.sh ]`?"

explicacion: |
  `-r` (leer), `-w` (escribir) y `-x` (ejecutar) consultan los permisos del usuario actual.
```

### 11 — Cuál es el else

```
metadata:
  materia: "bash"
  tema: "condicionales_en_bash"
  nivel: "basico"
  tags: ["else"]

tipo: mc
opciones_explicitas: ["Cuando ninguna de las condiciones anteriores se cumple", "Siempre", "Solo cuando la primera condición se cumple", "Nunca, es opcional y se ignora"]
respuesta: "Cuando ninguna de las condiciones anteriores se cumple"

enunciado: "En un `if / elif / else`, ¿cuándo se ejecuta la rama `else`?"

explicacion: |
  `else` es el caso por defecto: se ejecuta únicamente si todas las condiciones anteriores fueron falsas.
```

### 12 — Cuidado con las comillas

```
metadata:
  materia: "bash"
  tema: "condicionales_en_bash"
  nivel: "intermedio"
  tags: ["comillas"]

tipo: mc
opciones_explicitas: ["Se transforma en `[ = \"Ana\" ]` y da error de sintaxis", "Compara bien y da falso", "Compara bien y da verdadero", "Ninguno"]
respuesta: "Se transforma en `[ = \"Ana\" ]` y da error de sintaxis"

enunciado: "¿Qué problema tiene `[ $nombre = \"Ana\" ]` si `nombre` está vacía?"

explicacion: |
  Una variable sin comillas vacía desaparece de la línea. Con `[ "$nombre" = "Ana" ]` se evita el error.
```

### 13 — Las dobles

```
metadata:
  materia: "bash"
  tema: "condicionales_en_bash"
  nivel: "intermedio"
  tags: ["dobles"]

tipo: mc
opciones_explicitas: ["Admite patrones y `&&`, y necesita menos comillas", "Es más lento pero más seguro", "Funciona en todas las shells", "Solo sirve para números"]
respuesta: "Admite patrones y `&&`, y necesita menos comillas"

enunciado: "¿Qué ventaja tiene `[[ ... ]]` sobre `[ ... ]`?"

explicacion: |
  `[[ ]]` es una mejora propia de Bash (y otras shells modernas): permite `[[ $f == *.txt ]]`, `&&`, `||` y `=~`. No es POSIX.
```

### 14 — Comparación con patrón

```
metadata:
  materia: "bash"
  tema: "condicionales_en_bash"
  nivel: "intermedio"
  tags: ["patron"]

tipo: mc
opciones_explicitas: ["Es verdadero si el nombre termina en `.txt`", "Compara con un archivo llamado `*.txt`", "Da error", "Es verdadero si el archivo existe"]
respuesta: "Es verdadero si el nombre termina en `.txt`"

enunciado: "¿Qué hace `[[ $archivo == *.txt ]]`?"

explicacion: |
  Dentro de `[[ ]]`, el lado derecho sin comillas es un **patrón** con comodines.
```

### 15 — Aritmética

```
metadata:
  materia: "bash"
  tema: "condicionales_en_bash"
  nivel: "intermedio"
  tags: ["aritmetica"]

tipo: mc
opciones_explicitas: ["if (( edad >= 18 )); then", "if [ edad >= 18 ]; then", "if (edad >= 18) then", "if [[ edad > 18 ]]; then"]
respuesta: "if (( edad >= 18 )); then"

enunciado: "¿Cuál de estas es una forma correcta de comparar números con la sintaxis aritmética?"

explicacion: |
  `(( ))` evalúa expresiones aritméticas al estilo C. Dentro del `[ ]` clásico, el `>` sería una redirección.
```

### 16 — Operadores lógicos

```
metadata:
  materia: "bash"
  tema: "condicionales_en_bash"
  nivel: "intermedio"
  tags: ["logicos"]

tipo: mc
opciones_explicitas: ["[ \"$a\" -gt 0 ] && [ \"$a\" -lt 10 ]", "[ \"$a\" -gt 0 , \"$a\" -lt 10 ]", "[ 0 < \"$a\" < 10 ]", "[ \"$a\" -gt 0 y \"$a\" -lt 10 ]"]
respuesta: "[ \"$a\" -gt 0 ] && [ \"$a\" -lt 10 ]"

enunciado: "¿Cómo se pregunta si `a` es mayor que 0 y menor que 10?"

explicacion: |
  Dos pruebas unidas con `&&` (y). También se puede escribir `[ "$a" -gt 0 -a "$a" -lt 10 ]`, pero se desaconseja.
```

### 17 — Negar

```
metadata:
  materia: "bash"
  tema: "condicionales_en_bash"
  nivel: "basico"
  tags: ["negar"]

tipo: mc
opciones_explicitas: ["[ ! -e archivo ]", "[ -ne archivo ]", "[ no -e archivo ]", "[ -e archivo ] = falso"]
respuesta: "[ ! -e archivo ]"

enunciado: "¿Cómo se pregunta que un archivo NO existe?"

explicacion: |
  El signo `!` niega la prueba que sigue.
```

### 18 — Qué es case

```
metadata:
  materia: "bash"
  tema: "condicionales_en_bash"
  nivel: "basico"
  tags: ["case"]

tipo: mc
opciones_explicitas: ["Para comparar una variable con varios patrones y ejecutar la rama que coincida", "Para repetir un bloque", "Para crear funciones", "Para leer un archivo línea por línea"]
respuesta: "Para comparar una variable con varios patrones y ejecutar la rama que coincida"

enunciado: "¿Para qué sirve `case`?"

explicacion: |
  Es el equivalente a un `if/elif` largo, más legible cuando se comparan opciones.
```

### 19 — Cierre del case

```
metadata:
  materia: "bash"
  tema: "condicionales_en_bash"
  nivel: "basico"
  tags: ["case"]

tipo: mc
opciones_explicitas: ["`;;` y `esac`", "`break` y `end`", "`;` y `fi`", "`:` y `done`"]
respuesta: "`;;` y `esac`"

enunciado: "¿Con qué se termina cada rama de un `case` y con qué se cierra?"

explicacion: |
  Cada rama termina con `;;` y el `case` completo con `esac` (case al revés).
```

### 20 — Rama por defecto

```
metadata:
  materia: "bash"
  tema: "condicionales_en_bash"
  nivel: "basico"
  tags: ["case"]

tipo: mc
opciones_explicitas: ["`*)`", "`default)`", "`else)`", "`other)`"]
respuesta: "`*)`"

enunciado: "En un `case`, ¿qué patrón actúa como \"cualquier otra cosa\"?"

explicacion: |
  El patrón `*` coincide con todo; por eso se coloca en último lugar.
```

### 21 — Comando como condición

```
metadata:
  materia: "bash"
  tema: "condicionales_en_bash"
  nivel: "basico"
  tags: ["comando"]

tipo: mc
opciones_explicitas: ["Ejecuta el bloque si `grep` encuentra la palabra", "Ejecuta el bloque si no la encuentra", "Muestra la línea y sigue siempre", "Da error: `if` solo admite `[ ]`"]
respuesta: "Ejecuta el bloque si `grep` encuentra la palabra"

enunciado: "¿Qué hace `if grep -q \"root\" /etc/passwd; then ...`?"

explicacion: |
  `if` puede evaluar cualquier comando: usa su código de salida. `grep -q` devuelve 0 si encontró algo.
```

### 22 — Evitar la carpeta repetida

```
metadata:
  materia: "bash"
  tema: "condicionales_en_bash"
  nivel: "intermedio"
  tags: ["o"]

tipo: mc
opciones_explicitas: ["Crea `datos` solo si todavía no existe", "Crea `datos` siempre", "Borra `datos` si existe", "Entra a la carpeta `datos`"]
respuesta: "Crea `datos` solo si todavía no existe"

enunciado: "¿Qué hace `[ -d datos ] || mkdir datos`?"

explicacion: |
  El `||` ejecuta el segundo comando solo cuando el primero falla: si no es una carpeta existente, la crea.
```

