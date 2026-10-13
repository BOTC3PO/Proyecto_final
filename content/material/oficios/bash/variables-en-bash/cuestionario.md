# Bash — Variables (cuestionario, 23 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Crear una variable

```
metadata:
  materia: "bash"
  tema: "variables_en_bash"
  nivel: "basico"
  tags: ["asignacion"]

tipo: mc
opciones_explicitas: ["edad=18", "edad = 18", "let edad := 18", "var edad = 18"]
respuesta: "edad=18"

enunciado: "¿Cuál es la forma correcta de crear una variable en Bash?"

explicacion: |
  En Bash la asignación no admite espacios alrededor del `=`. Con espacios, la shell interpreta `edad` como un comando.
```

### 2 — Espacios en la asignación

```
metadata:
  materia: "bash"
  tema: "variables_en_bash"
  nivel: "basico"
  tags: ["asignacion"]

tipo: vf
respuesta: falso

enunciado: "`nombre = \"Ana\"` (con espacios) asigna \"Ana\" a la variable `nombre`."

explicacion: |
  Con espacios, Bash ejecuta un comando llamado `nombre` con los argumentos `=` y `"Ana"`, y da "comando no encontrado".
```

### 3 — Leer una variable

```
metadata:
  materia: "bash"
  tema: "variables_en_bash"
  nivel: "basico"
  tags: ["lectura"]

tipo: mc
opciones_explicitas: ["azul", "$color", "color", "\"azul\" con las comillas"]
respuesta: "azul"

enunciado: "Si `color=\"azul\"`, ¿qué muestra `echo $color`?"

explicacion: |
  El `$` delante del nombre pide el **valor** de la variable. Las comillas de la asignación no forman parte del valor.
```

### 4 — Sin el signo $

```
metadata:
  materia: "bash"
  tema: "variables_en_bash"
  nivel: "basico"
  tags: ["lectura"]

tipo: mc
opciones_explicitas: ["color", "azul", "Nada", "Un error"]
respuesta: "color"

enunciado: "Si `color=\"azul\"`, ¿qué muestra `echo color`?"

explicacion: |
  Sin `$`, `color` es solo un texto cualquiera: `echo` lo imprime tal cual.
```

### 5 — Mostrar el valor

```
metadata:
  materia: "bash"
  tema: "variables_en_bash"
  nivel: "basico"
  tags: ["lectura"]

tipo: completar
respuesta: "$"
respuestas_validas:
  - "$"

enunciado: "Para mostrar el valor de la variable `ciudad` se escribe `echo ___ciudad`."

explicacion: |
  El signo `$` se escribe antes del nombre al **leer** la variable (no al asignarla).
```

### 6 — Nombre válido

```
metadata:
  materia: "bash"
  tema: "variables_en_bash"
  nivel: "basico"
  tags: ["nombres"]

tipo: mc
opciones_explicitas: ["mi_variable", "mi-variable", "1variable", "mi variable"]
respuesta: "mi_variable"

enunciado: "¿Cuál de estos es un nombre de variable válido?"

explicacion: |
  Los nombres usan letras, números y guion bajo, y no pueden empezar con número ni llevar guiones o espacios.
```

### 7 — Mayúsculas

```
metadata:
  materia: "bash"
  tema: "variables_en_bash"
  nivel: "basico"
  tags: ["nombres"]

tipo: vf
respuesta: falso

enunciado: "En Bash, `Nombre` y `nombre` son la misma variable."

explicacion: |
  Bash distingue mayúsculas de minúsculas: son dos variables distintas.
```

### 8 — Para qué las llaves

```
metadata:
  materia: "bash"
  tema: "variables_en_bash"
  nivel: "intermedio"
  tags: ["llaves"]

tipo: mc
opciones_explicitas: ["Para separar el nombre de la variable del texto que sigue", "Para hacer una cuenta", "Para crear un arreglo", "Para ejecutar un comando"]
respuesta: "Para separar el nombre de la variable del texto que sigue"

enunciado: "¿Para qué sirven las llaves en `echo \"${{fruta}}s\"`?"

explicacion: |
  Sin llaves, `$frutas` sería otra variable. Con `${{fruta}}s` se obtiene el valor de `fruta` seguido de la letra s.
```

### 9 — Largo de un texto

```
metadata:
  materia: "bash"
  tema: "variables_en_bash"
  nivel: "intermedio"
  tags: ["longitud"]

tipo: mc
opciones_explicitas: ["4", "hola", "3", "0"]
respuesta: "4"

enunciado: "Si `palabra=\"hola\"`, ¿qué da `echo ${{#palabra}}`?"

explicacion: |
  `${{#variable}}` devuelve la cantidad de caracteres. "hola" tiene 4.
```

### 10 — Valor por defecto

```
metadata:
  materia: "bash"
  tema: "variables_en_bash"
  nivel: "intermedio"
  tags: ["defecto"]

tipo: mc
opciones_explicitas: ["invitado", "Nada", "usuario", "Un error"]
respuesta: "invitado"

enunciado: "Si `usuario` está vacía, ¿qué muestra `echo ${{usuario:-invitado}}`?"

explicacion: |
  `${{var:-valor}}` usa el valor indicado cuando la variable no está definida o está vacía.
```

### 11 — Resultado de un comando

```
metadata:
  materia: "bash"
  tema: "variables_en_bash"
  nivel: "basico"
  tags: ["sustitucion"]

tipo: mc
opciones_explicitas: ["hoy=$(date)", "hoy=date", "hoy=(date)", "hoy={{date}}"]
respuesta: "hoy=$(date)"

enunciado: "¿Cómo se guarda la salida del comando `date` en una variable?"

explicacion: |
  `$(comando)` ejecuta el comando y se reemplaza por su salida. Es la sustitución de comandos.
```

### 12 — Sustitución moderna

```
metadata:
  materia: "bash"
  tema: "variables_en_bash"
  nivel: "basico"
  tags: ["sustitucion"]

tipo: completar
respuesta: "$"
respuestas_validas:
  - "$"

enunciado: "Para guardar la salida de `whoami`, se escribe `u=___(whoami)`."

explicacion: |
  La sintaxis es `$(comando)`. También existe `` `comando` `` (comillas invertidas), pero es más antigua y difícil de anidar.
```

### 13 — Cuenta con enteros

```
metadata:
  materia: "bash"
  tema: "variables_en_bash"
  nivel: "intermedio"
  tags: ["aritmetica"]

tipo: mc
opciones_explicitas: ["suma=$(( a + b ))", "suma=a+b", "suma=$a+$b", "suma=(a + b)"]
respuesta: "suma=$(( a + b ))"

enunciado: "Si `a=6` y `b=4`, ¿cómo se calcula la suma en Bash?"

explicacion: |
  La aritmética de enteros va entre `$(( ))`. Con `suma=$a+$b` se guardaría el texto "6+4".
```

### 14 — Qué da la cuenta

```
metadata:
  materia: "bash"
  tema: "variables_en_bash"
  nivel: "intermedio"
  tags: ["aritmetica"]

tipo: mc
opciones_explicitas: ["3", "3.5", "4", "2"]
respuesta: "3"

enunciado: "¿Qué muestra `echo $(( 7 / 2 ))`?"

explicacion: |
  Bash solo calcula con enteros: la división descarta los decimales. Para decimales se usan herramientas externas como `bc`.
```

### 15 — Leer del teclado

```
metadata:
  materia: "bash"
  tema: "variables_en_bash"
  nivel: "basico"
  tags: ["read"]

tipo: mc
opciones_explicitas: ["read nombre", "input nombre", "get nombre", "scan nombre"]
respuesta: "read nombre"

enunciado: "¿Qué comando pide un dato a la persona y lo guarda en la variable `nombre`?"

explicacion: |
  `read` espera una línea de texto y la guarda en la variable. Con `-p "mensaje"` muestra un mensaje antes.
```

### 16 — Exportar

```
metadata:
  materia: "bash"
  tema: "variables_en_bash"
  nivel: "intermedio"
  tags: ["export"]

tipo: mc
opciones_explicitas: ["Crea la variable y hace que la reciban los programas que se lancen desde esta shell", "Borra la variable PAIS", "La guarda para siempre en el disco", "La hace de solo lectura"]
respuesta: "Crea la variable y hace que la reciban los programas que se lancen desde esta shell"

enunciado: "¿Qué hace `export PAIS=AR`?"

explicacion: |
  `export` la pasa al entorno de los procesos hijos. No es permanente: al cerrar la terminal se pierde (salvo que se agregue a un archivo como `~/.bashrc`).
```

### 17 — Carpeta personal

```
metadata:
  materia: "bash"
  tema: "variables_en_bash"
  nivel: "basico"
  tags: ["entorno"]

tipo: mc
opciones_explicitas: ["$HOME", "$USER", "$PATH", "$PWD"]
respuesta: "$HOME"

enunciado: "¿Qué variable contiene la carpeta personal del usuario?"

explicacion: |
  `$HOME` es tu carpeta personal (por ejemplo, `/home/ana`). `$USER` es el nombre de usuario, `$PATH` las carpetas donde se buscan comandos y `$PWD` la carpeta actual.
```

### 18 — La variable PATH

```
metadata:
  materia: "bash"
  tema: "variables_en_bash"
  nivel: "basico"
  tags: ["entorno"]

tipo: mc
opciones_explicitas: ["Lista las carpetas donde la shell busca los comandos", "Guarda la carpeta actual", "Guarda la contraseña", "Cuenta los archivos"]
respuesta: "Lista las carpetas donde la shell busca los comandos"

enunciado: "¿Para qué sirve la variable `$PATH`?"

explicacion: |
  Cuando escribís `ls`, Bash recorre las carpetas de `$PATH` hasta encontrar un programa con ese nombre.
```

### 19 — Argumentos de un script

```
metadata:
  materia: "bash"
  tema: "variables_en_bash"
  nivel: "basico"
  tags: ["argumentos"]

tipo: mc
opciones_explicitas: ["El primer argumento recibido", "El nombre del script", "La cantidad de argumentos", "El código de salida"]
respuesta: "El primer argumento recibido"

enunciado: "Dentro de un script, ¿qué contiene `$1`?"

explicacion: |
  `$1`, `$2`... son los argumentos posicionales. `$0` es el nombre del script, `$#` la cantidad y `$@` todos.
```

### 20 — Cantidad de argumentos

```
metadata:
  materia: "bash"
  tema: "variables_en_bash"
  nivel: "basico"
  tags: ["argumentos"]

tipo: completar
respuesta: "#"
respuestas_validas:
  - "#"

enunciado: "En un script, `$___` contiene la cantidad de argumentos recibidos."

explicacion: |
  `$#` es el número de argumentos. Es muy usado para verificar que se pasaron los datos necesarios.
```

### 21 — Borrar una variable

```
metadata:
  materia: "bash"
  tema: "variables_en_bash"
  nivel: "basico"
  tags: ["unset"]

tipo: mc
opciones_explicitas: ["Elimina la variable `nombre`", "Le asigna el valor 0", "La convierte en texto", "Imprime su valor"]
respuesta: "Elimina la variable `nombre`"

enunciado: "¿Qué hace `unset nombre`?"

explicacion: |
  `unset` quita la variable de la shell: después `echo $nombre` no muestra nada.
```

### 22 — Solo lectura

```
metadata:
  materia: "bash"
  tema: "variables_en_bash"
  nivel: "intermedio"
  tags: ["readonly"]

tipo: mc
opciones_explicitas: ["Para que la variable no se pueda modificar", "Para leerla desde un archivo", "Para exportarla", "Para borrarla al salir"]
respuesta: "Para que la variable no se pueda modificar"

enunciado: "¿Para qué sirve `readonly PI=3`?"

explicacion: |
  Una variable `readonly` no se puede reasignar ni borrar durante esa sesión.
```

### 23 — Todo es texto

```
metadata:
  materia: "bash"
  tema: "variables_en_bash"
  nivel: "intermedio"
  tags: ["tipos"]

tipo: vf
respuesta: verdadero

enunciado: "En Bash, las variables guardan siempre texto; recién al hacer cuentas con `$(( ))` se interpretan como números."

explicacion: |
  Bash no tiene tipos numéricos como otros lenguajes: `n=5` guarda el texto "5". En un contexto aritmético se lo convierte a número.
```

