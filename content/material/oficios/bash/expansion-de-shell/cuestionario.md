# Bash — Expansiones de la shell (cuestionario, 22 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Quién reemplaza el comodín

```
metadata:
  materia: "bash"
  tema: "expansion_de_shell"
  nivel: "basico"
  tags: ["globbing"]

tipo: mc
opciones_explicitas: ["La shell, antes de ejecutar `echo`", "El comando `echo`", "El sistema de archivos", "El teclado"]
respuesta: "La shell, antes de ejecutar `echo`"

enunciado: "Se ejecuta `echo *.txt` en una carpeta con `a.txt` y `b.txt`. ¿Quién convierte `*.txt` en los nombres de archivos?"

explicacion: |
  La shell expande el comodín y le pasa a `echo` ya la lista `a.txt b.txt`. Por eso `echo` solo imprime lo que recibe.
```

### 2 — Asterisco

```
metadata:
  materia: "bash"
  tema: "expansion_de_shell"
  nivel: "basico"
  tags: ["asterisco"]

tipo: mc
opciones_explicitas: ["Cualquier cantidad de caracteres (incluso ninguno)", "Exactamente un carácter", "Un número", "Solo letras mayúsculas"]
respuesta: "Cualquier cantidad de caracteres (incluso ninguno)"

enunciado: "¿Qué significa `*` en `ls *.log`?"

explicacion: |
  El asterisco reemplaza cero o más caracteres cualesquiera. `*.log` coincide con todos los archivos que terminan en `.log`.
```

### 3 — Signo de pregunta

```
metadata:
  materia: "bash"
  tema: "expansion_de_shell"
  nivel: "basico"
  tags: ["interrogacion"]

tipo: mc
opciones_explicitas: ["`foto1.jpg` y `fotoA.jpg`, pero no `foto10.jpg`", "`foto10.jpg` y `foto.jpg`", "Todos los que empiezan con foto", "Solo `foto?.jpg` literal"]
respuesta: "`foto1.jpg` y `fotoA.jpg`, pero no `foto10.jpg`"

enunciado: "¿Qué archivos coinciden con `foto?.jpg`?"

explicacion: |
  `?` reemplaza **exactamente un** carácter. `foto10.jpg` tiene dos entre `foto` y `.jpg`.
```

### 4 — Corchetes

```
metadata:
  materia: "bash"
  tema: "expansion_de_shell"
  nivel: "basico"
  tags: ["corchetes"]

tipo: mc
opciones_explicitas: ["Los que empiezan con a o con b", "Los que terminan en ab", "Los que contienen a y b", "Los que se llaman `ab`"]
respuesta: "Los que empiezan con a o con b"

enunciado: "¿Qué archivos coinciden con `[ab]*`?"

explicacion: |
  Entre corchetes se indica un conjunto: el primer carácter debe ser uno de ellos, y el `*` completa el resto.
```

### 5 — Rangos

```
metadata:
  materia: "bash"
  tema: "expansion_de_shell"
  nivel: "basico"
  tags: ["rangos"]

tipo: mc
opciones_explicitas: ["`dato3.csv` y `dato7.csv`", "`datos.csv`", "`dato10.csv`", "`dato.csv`"]
respuesta: "`dato3.csv` y `dato7.csv`"

enunciado: "¿Qué archivos coinciden con `dato[0-9].csv`?"

explicacion: |
  `[0-9]` es un único dígito del 0 al 9. `dato10.csv` tiene dos dígitos y no coincide.
```

### 6 — Negación

```
metadata:
  materia: "bash"
  tema: "expansion_de_shell"
  nivel: "intermedio"
  tags: ["negacion"]

tipo: mc
opciones_explicitas: ["Los que NO empiezan con la letra a", "Los que empiezan con !a", "Los que contienen un signo de exclamación", "Solo los que empiezan con a"]
respuesta: "Los que NO empiezan con la letra a"

enunciado: "¿Qué archivos coinciden con `[!a]*`?"

explicacion: |
  Con `!` (o `^`) dentro de los corchetes se invierte el conjunto: cualquier carácter que no sea ninguno de los listados.
```

### 7 — Archivos ocultos

```
metadata:
  materia: "bash"
  tema: "expansion_de_shell"
  nivel: "basico"
  tags: ["ocultos"]

tipo: vf
respuesta: falso

enunciado: "El comodín `*` coincide también con los archivos ocultos (los que empiezan con punto)."

explicacion: |
  Por defecto `*` no incluye los archivos que empiezan con `.`. Para listarlos hay que escribir el punto (`.*`) o usar `ls -a`.
```

### 8 — Patrón sin coincidencias

```
metadata:
  materia: "bash"
  tema: "expansion_de_shell"
  nivel: "intermedio"
  tags: ["globbing"]

tipo: mc
opciones_explicitas: ["*.xyz", "Una línea vacía", "Un error", "Todos los archivos"]
respuesta: "*.xyz"

enunciado: "En una carpeta sin archivos `.xyz`, ¿qué muestra `echo *.xyz`?"

explicacion: |
  Si el patrón no coincide con ningún archivo, Bash lo deja sin expandir y `echo` imprime el patrón tal cual.
```

### 9 — Expandir llaves

```
metadata:
  materia: "bash"
  tema: "expansion_de_shell"
  nivel: "basico"
  tags: ["llaves"]

tipo: mc
opciones_explicitas: ["abd acd", "a{{b,c}}d", "abcd", "ad"]
respuesta: "abd acd"

enunciado: "¿Qué muestra `echo a{{b,c}}d`?"

explicacion: |
  Las llaves generan una palabra por cada opción, repitiendo el prefijo y el sufijo.
```

### 10 — Secuencia

```
metadata:
  materia: "bash"
  tema: "expansion_de_shell"
  nivel: "basico"
  tags: ["llaves"]

tipo: mc
opciones_explicitas: ["1 2 3 4", "{{1..4}}", "1..4", "4 3 2 1"]
respuesta: "1 2 3 4"

enunciado: "¿Qué muestra `echo {{1..4}}`?"

explicacion: |
  `{{inicio..fin}}` genera la secuencia de números (o letras) en orden.
```

### 11 — Crear varias carpetas

```
metadata:
  materia: "bash"
  tema: "expansion_de_shell"
  nivel: "intermedio"
  tags: ["llaves"]

tipo: mc
opciones_explicitas: ["Crea `proyecto/src` y `proyecto/docs`", "Crea una sola carpeta llamada `{{src,docs}}`", "Da error por las llaves", "Crea `proyecto` y la copia"]
respuesta: "Crea `proyecto/src` y `proyecto/docs`"

enunciado: "¿Qué hace `mkdir -p proyecto/{{src,docs}}`?"

explicacion: |
  Las llaves se expanden a `proyecto/src proyecto/docs`, y `-p` crea también `proyecto` si no existe.
```

### 12 — Copia rápida

```
metadata:
  materia: "bash"
  tema: "expansion_de_shell"
  nivel: "avanzado"
  tags: ["llaves"]

tipo: mc
opciones_explicitas: ["Copia `informe.txt` a `informe.txt.bak`", "Borra el informe", "Copia a un archivo llamado `{{,.bak}}`", "Da error"]
respuesta: "Copia `informe.txt` a `informe.txt.bak`"

enunciado: "¿Qué hace `cp informe.txt{{,.bak}}`?"

explicacion: |
  Se expande a `cp informe.txt informe.txt.bak`: la primera opción de la llave está vacía.
```

### 13 — Llaves y archivos

```
metadata:
  materia: "bash"
  tema: "expansion_de_shell"
  nivel: "intermedio"
  tags: ["llaves"]

tipo: vf
respuesta: falso

enunciado: "Las llaves `{{a,b}}` solo funcionan con nombres de archivos que ya existen."

explicacion: |
  A diferencia de los comodines, las llaves generan texto sin mirar el disco: sirven para crear cosas nuevas.
```

### 14 — La tilde

```
metadata:
  materia: "bash"
  tema: "expansion_de_shell"
  nivel: "basico"
  tags: ["tilde"]

tipo: mc
opciones_explicitas: ["Tu carpeta personal (`$HOME`)", "La carpeta raíz", "La carpeta actual", "La carpeta de arriba"]
respuesta: "Tu carpeta personal (`$HOME`)"

enunciado: "¿Qué representa `~` al comienzo de una ruta?"

explicacion: |
  `~` se expande a `$HOME`. `~/docs` equivale a `/home/ana/docs` si sos `ana`.
```

### 15 — Carpeta actual

```
metadata:
  materia: "bash"
  tema: "expansion_de_shell"
  nivel: "basico"
  tags: ["rutas"]

tipo: completar
respuesta: "."
respuestas_validas:
  - "."

enunciado: "El símbolo `___` representa la carpeta actual (por ejemplo, en `./script.sh`)."

explicacion: |
  `.` es la carpeta actual y `..` la carpeta padre. `./script.sh` ejecuta un script de la carpeta actual.
```

### 16 — Aritmética

```
metadata:
  materia: "bash"
  tema: "expansion_de_shell"
  nivel: "basico"
  tags: ["aritmetica"]

tipo: mc
opciones_explicitas: ["21", "7 * 3", "73", "Un error"]
respuesta: "21"

enunciado: "¿Qué muestra `echo $(( 7 * 3 ))`?"

explicacion: |
  `$(( ))` hace una cuenta con enteros y se reemplaza por el resultado.
```

### 17 — Sustitución de comandos

```
metadata:
  materia: "bash"
  tema: "expansion_de_shell"
  nivel: "basico"
  tags: ["sustitucion"]

tipo: mc
opciones_explicitas: ["Muestra el texto con el nombre del día de la semana que devuelve `date`", "Muestra literalmente `$(date +%A)`", "Ejecuta `echo` dos veces", "Da error por las comillas"]
respuesta: "Muestra el texto con el nombre del día de la semana que devuelve `date`"

enunciado: "¿Qué hace `echo \"Hoy es $(date +%A)\"`?"

explicacion: |
  Dentro de comillas dobles se sigue expandiendo `$( )`: se ejecuta `date` y su salida reemplaza la expresión.
```

### 18 — Contar archivos

```
metadata:
  materia: "bash"
  tema: "expansion_de_shell"
  nivel: "intermedio"
  tags: ["sustitucion"]

tipo: mc
opciones_explicitas: ["La cantidad de entradas que lista `ls`", "La palabra `wc`", "El nombre del primer archivo", "Nada, no se puede guardar"]
respuesta: "La cantidad de entradas que lista `ls`"

enunciado: "¿Qué guarda `n=$(ls | wc -l)`?"

explicacion: |
  `$(...)` guarda la salida de la tubería: `wc -l` cuenta las líneas, una por cada entrada que listó `ls`.
```

### 19 — Orden de las expansiones

```
metadata:
  materia: "bash"
  tema: "expansion_de_shell"
  nivel: "avanzado"
  tags: ["orden"]

tipo: mc
opciones_explicitas: ["Las llaves `{{a,b}}`", "Los comodines `*`", "Las variables", "Las comillas"]
respuesta: "Las llaves `{{a,b}}`"

enunciado: "¿Qué se expande primero en Bash?"

explicacion: |
  Las llaves se resuelven antes que las variables y que los comodines. Por eso `{{$a,$b}}` funciona y `{{1..$n}}` no (el `$n` aún no se expandió).
```

### 20 — Eliminar con comodines

```
metadata:
  materia: "bash"
  tema: "expansion_de_shell"
  nivel: "intermedio"
  tags: ["seguridad"]

tipo: mc
opciones_explicitas: ["Probar primero con `echo *.tmp` o `ls *.tmp`", "Ejecutarlo directamente", "Usar `rm -f`", "Reiniciar la terminal"]
respuesta: "Probar primero con `echo *.tmp` o `ls *.tmp`"

enunciado: "Antes de ejecutar `rm *.tmp`, ¿qué conviene hacer para asegurarte de qué se va a borrar?"

explicacion: |
  Como la shell expande el comodín, `echo *.tmp` te muestra exactamente la lista que recibiría `rm`. Es un hábito para evitar borrar archivos por error.
```

### 21 — Comodines entre comillas

```
metadata:
  materia: "bash"
  tema: "expansion_de_shell"
  nivel: "basico"
  tags: ["comillas"]

tipo: mc
opciones_explicitas: ["Imprime el asterisco literal", "Lista todos los archivos", "Da error", "Imprime todos los archivos ocultos"]
respuesta: "Imprime el asterisco literal"

enunciado: "¿Qué hace `echo \"*\"`?"

explicacion: |
  Entre comillas no se expanden los comodines.
```

### 22 — Quién ve el comodín

```
metadata:
  materia: "bash"
  tema: "expansion_de_shell"
  nivel: "intermedio"
  tags: ["globbing"]

tipo: vf
respuesta: falso

enunciado: "El comando `ls` recibe el texto `*.txt` y es él quien lo expande."

explicacion: |
  La expansión la hace la shell antes de lanzar `ls`. Por eso un programa que quiera recibir un patrón sin expandir (como `grep` o `find`) necesita que se lo escribas entre comillas.
```

