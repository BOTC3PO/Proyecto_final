# Bash — Diagnóstico de scripts por casos (cuestionario, 22 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Primer paso

```
metadata:
  materia: "bash"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["metodo"]

tipo: mc
opciones_explicitas: ["Leer el mensaje de error completo", "Reescribir el script desde cero", "Reiniciar la computadora", "Agregar `sudo` delante"]
respuesta: "Leer el mensaje de error completo"

enunciado: "Un script falla con un error. ¿Qué es lo primero que conviene hacer?"

explicacion: |
  El mensaje suele indicar la línea y la causa. Es el dato más barato y más útil.
```

### 2 — Permission denied

```
metadata:
  materia: "bash"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["permisos"]

tipo: mc
opciones_explicitas: ["Que el archivo tenga permiso de ejecución", "Que Bash esté instalado", "Que la sintaxis sea correcta", "Que haya internet"]
respuesta: "Que el archivo tenga permiso de ejecución"

enunciado: "Se ejecuta `./limpiar.sh` y aparece `Permission denied`. ¿Qué se revisa primero?"

explicacion: |
  `ls -l limpiar.sh` muestra los permisos; con `chmod +x limpiar.sh` se arregla.
```

### 3 — command not found

```
metadata:
  materia: "bash"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["path"]

tipo: mc
opciones_explicitas: ["La carpeta actual no está en el `PATH`; hay que escribir `./respaldo.sh`", "El archivo está vacío", "Falta el shebang", "El archivo no es de texto"]
respuesta: "La carpeta actual no está en el `PATH`; hay que escribir `./respaldo.sh`"

enunciado: "Se escribe `respaldo.sh` y aparece `command not found`, aunque el archivo existe en la carpeta actual. ¿Por qué?"

explicacion: |
  Bash solo busca comandos en las carpetas del `PATH`. Para ejecutar algo de la carpeta actual hay que indicar la ruta.
```

### 4 — Con ^M

```
metadata:
  materia: "bash"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["crlf"]

tipo: mc
opciones_explicitas: ["Finales de línea CRLF de Windows", "Falta de memoria", "Un error de la red", "Un permiso mal puesto"]
respuesta: "Finales de línea CRLF de Windows"

enunciado: "Un script copiado desde Windows da `bad interpreter: No such file or directory` y se ve `^M`. ¿Cuál es la causa?"

explicacion: |
  Se arregla con `dos2unix script.sh`.
```

### 5 — Demasiados argumentos

```
metadata:
  materia: "bash"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["comillas"]

tipo: mc
opciones_explicitas: ["Falta citar la variable: `[ \"$nombre\" = \"Ana\" ]`", "Hay que usar `==`", "Hay que usar `-eq`", "Hay que borrar `nombre` antes"]
respuesta: "Falta citar la variable: `[ \"$nombre\" = \"Ana\" ]`"

enunciado: "`[: too many arguments` aparece en `if [ $nombre = \"Ana\" ]` cuando `nombre=\"Ana María\"`. ¿Cuál es la causa y la solución?"

explicacion: |
  Sin comillas, el valor con espacios se corta en dos palabras y `[` recibe más argumentos de los esperados.
```

### 6 — Variable vacía

```
metadata:
  materia: "bash"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["comillas"]

tipo: mc
opciones_explicitas: ["Sin comillas, la variable vacía desaparece y la prueba queda `[ = \"si\" ]`", "Porque \"si\" no es un número", "Porque falta `then`", "Porque `x` es una palabra reservada"]
respuesta: "Sin comillas, la variable vacía desaparece y la prueba queda `[ = \"si\" ]`"

enunciado: "`[ $x = \"si\" ]` da `unary operator expected` si `x` está vacía. ¿Por qué?"

explicacion: |
  La solución es citar la variable: `[ "$x" = "si" ]`.
```

### 7 — Error de sintaxis

```
metadata:
  materia: "bash"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["sintaxis"]

tipo: mc
opciones_explicitas: ["Que cada `if` tenga su `fi`, cada bucle su `done` y cada `case` su `esac`", "La versión de Linux", "El nombre del archivo", "La cantidad de memoria"]
respuesta: "Que cada `if` tenga su `fi`, cada bucle su `done` y cada `case` su `esac`"

enunciado: "`syntax error: unexpected end of file` o `unexpected token fi`. ¿Qué se revisa?"

explicacion: |
  Se puede verificar con `bash -n script.sh`. Un `then` olvidado o una comilla sin cerrar producen errores parecidos.
```

### 8 — Qué comando usar

```
metadata:
  materia: "bash"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["herramientas"]

tipo: mc
opciones_explicitas: ["bash -x script.sh", "bash -n script.sh", "bash -v -n script.sh", "bash --help script.sh"]
respuesta: "bash -x script.sh"

enunciado: "¿Qué comando permite ver cada línea que ejecuta un script, con los valores ya reemplazados?"

explicacion: |
  `-x` hace una traza de ejecución. `-n` solo revisa la sintaxis sin ejecutar.
```

### 9 — Valor visible

```
metadata:
  materia: "bash"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["herramientas"]

tipo: mc
opciones_explicitas: ["Los corchetes dejan ver espacios o saltos de línea ocultos al principio o al final", "Porque `echo` lo exige", "Porque así corre más rápido", "Para que se guarde en un archivo"]
respuesta: "Los corchetes dejan ver espacios o saltos de línea ocultos al principio o al final"

enunciado: "¿Por qué conviene imprimir `echo \"valor: [$var]\"` con corchetes?"

explicacion: |
  Sin delimitadores, un espacio final es invisible. Con `[ ]` se nota enseguida.
```

### 10 — Funciona a mano

```
metadata:
  materia: "bash"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["cron"]

tipo: mc
opciones_explicitas: ["Rutas absolutas y `PATH`: el entorno de cron es mínimo", "Si la computadora tiene batería", "Si el archivo tiene extensión", "Si hay un antivirus"]
respuesta: "Rutas absolutas y `PATH`: el entorno de cron es mínimo"

enunciado: "Un respaldo funciona al escribirlo en la terminal pero no desde cron. ¿Qué se revisa primero?"

explicacion: |
  Cron no carga tu `.bashrc` ni conoce tu carpeta actual. Además conviene registrar la salida en un archivo.
```

### 11 — No muestra nada

```
metadata:
  materia: "bash"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["cron"]

tipo: mc
opciones_explicitas: ["Redirigir la salida y los errores a un archivo de registro", "Borrar el crontab", "Ejecutarlo con `sudo`", "Cambiar el horario"]
respuesta: "Redirigir la salida y los errores a un archivo de registro"

enunciado: "Un script de cron parece no hacer nada y no hay mensajes. ¿Qué se hace para investigar?"

explicacion: |
  `... >> /tmp/tarea.log 2>&1` permite ver qué pasó. Sin eso, los mensajes se pierden.
```

### 12 — Variable vacía y borrado

```
metadata:
  materia: "bash"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["peligro"]

tipo: mc
opciones_explicitas: ["Se interpreta como `rm -rf /*` y podría borrar el sistema", "Ninguno", "Da un error y no hace nada", "Borra solo la carpeta actual"]
respuesta: "Se interpreta como `rm -rf /*` y podría borrar el sistema"

enunciado: "¿Qué riesgo tiene `rm -rf $directorio/*` si `directorio` está vacía?"

explicacion: |
  Es uno de los errores más peligrosos en scripts. Se evita con `set -u`, comillas y verificando que la variable no esté vacía.
```

### 13 — Cómo prevenirlo

```
metadata:
  materia: "bash"
  tema: "diagnostico_por_casos"
  nivel: "avanzado"
  tags: ["peligro"]

tipo: mc
opciones_explicitas: ["[ -n \"$dir\" ] && rm -rf -- \"$dir\"/*", "rm -rf $dir/*", "rm -rf /$dir*", "rm -rf $dir ; cd /"]
respuesta: "[ -n \"$dir\" ] && rm -rf -- \"$dir\"/*"

enunciado: "¿Cuál es la forma más segura de borrar el contenido de una carpeta guardada en una variable?"

explicacion: |
  Se verifica que la variable no esté vacía y se cita. `--` evita que un nombre que empiece con guion se interprete como opción.
```

### 14 — unbound variable

```
metadata:
  materia: "bash"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["set"]

tipo: mc
opciones_explicitas: ["Se usó una variable que nunca se definió (quizá por un error de tipeo)", "La variable es demasiado larga", "La variable está vacía pero definida", "Hay un error de memoria"]
respuesta: "Se usó una variable que nunca se definió (quizá por un error de tipeo)"

enunciado: "Con `set -u`, un script se detiene con `unbound variable`. ¿Qué indica?"

explicacion: |
  `set -u` convierte los nombres mal escritos en errores visibles en lugar de cadenas vacías silenciosas.
```

### 15 — Bucle de más

```
metadata:
  materia: "bash"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["bucles"]

tipo: mc
opciones_explicitas: ["El `<=` incluye al 5: tiene que ser `i < 5`", "`for` no sirve con números", "Falta un `break`", "Hay un error en `echo`"]
respuesta: "El `<=` incluye al 5: tiene que ser `i < 5`"

enunciado: "Un bucle `for (( i = 0; i <= 5; i++ ))` imprime 6 valores en vez de 5. ¿Cuál es la causa?"

explicacion: |
  Es el clásico error de uno de más (*off by one*). Con `<` se repite 5 veces (0 a 4).
```

### 16 — Sin resultado

```
metadata:
  materia: "bash"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["grep"]

tipo: mc
opciones_explicitas: ["Mayúsculas/minúsculas, espacios o caracteres ocultos (probar con `-i`)", "Que grep esté instalado", "El tamaño del disco", "La hora del sistema"]
respuesta: "Mayúsculas/minúsculas, espacios o caracteres ocultos (probar con `-i`)"

enunciado: "`grep -c palabra archivo` muestra `0` aunque la palabra está en el archivo. ¿Qué se revisa?"

explicacion: |
  `grep` distingue mayúsculas. También puede haber diferencias de codificación o caracteres de Windows.
```

### 17 — Pipeline que falla

```
metadata:
  materia: "bash"
  tema: "diagnostico_por_casos"
  nivel: "avanzado"
  tags: ["pipefail"]

tipo: mc
opciones_explicitas: ["El código de una tubería es el del último comando; `set -o pipefail` lo cambia", "`wc` oculta todos los errores", "Los errores no existen en las tuberías", "`pipefail` no se puede activar"]
respuesta: "El código de una tubería es el del último comando; `set -o pipefail` lo cambia"

enunciado: "`comando_que_falla | wc -l` termina con código 0. ¿Por qué?"

explicacion: |
  Sin `pipefail`, solo importa el último comando de la tubería. Con esa opción, falla si falla cualquiera.
```

### 18 — Una cosa a la vez

```
metadata:
  materia: "bash"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["metodo"]

tipo: mc
opciones_explicitas: ["Corregir esa sola cosa y volver a probar", "Cambiar varias cosas a la vez", "Reinstalar el sistema", "Ignorarla y probar otra"]
respuesta: "Corregir esa sola cosa y volver a probar"

enunciado: "Después de encontrar una posible causa, ¿cuál es el mejor siguiente paso?"

explicacion: |
  Si se cambian varias cosas juntas, no se sabe cuál resolvió el problema (o cuál agregó otro).
```

### 19 — Comando equivocado

```
metadata:
  materia: "bash"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["espacios"]

tipo: mc
opciones_explicitas: ["Falta el espacio: el comando es `ls` con la opción `-l`", "`ls` no está instalado", "Falta el permiso `x`", "El `PATH` está vacío"]
respuesta: "Falta el espacio: el comando es `ls` con la opción `-l`"

enunciado: "Se escribe `ls-l` y da `command not found`. ¿Cuál es la causa?"

explicacion: |
  Sin el espacio, Bash busca un programa llamado `ls-l`.
```

### 20 — Asignación con espacios

```
metadata:
  materia: "bash"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["variables"]

tipo: mc
opciones_explicitas: ["En Bash la asignación no admite espacios alrededor del `=`", "Faltan comillas simples", "Faltan paréntesis", "Falta `let`"]
respuesta: "En Bash la asignación no admite espacios alrededor del `=`"

enunciado: "`nombre = \"Ana\"` da `nombre: command not found`. ¿Cuál es la causa?"

explicacion: |
  Con espacios, `nombre` se interpreta como un comando y `=` como su primer argumento.
```

### 21 — Qué mirar

```
metadata:
  materia: "bash"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["argumentos"]

tipo: mc
opciones_explicitas: ["Una validación: `[ $# -ge 1 ] || { echo \"Uso: $0 archivo\" >&2; exit 1; }`", "Un `sleep` al principio", "Más comillas simples", "Nada: Bash completa los argumentos"]
respuesta: "Una validación: `[ $# -ge 1 ] || { echo \"Uso: $0 archivo\" >&2; exit 1; }`"

enunciado: "Un script usa `$1`, pero se lo ejecutó sin argumentos y se comporta raro. ¿Qué conviene agregar?"

explicacion: |
  Validar los argumentos al comienzo evita que el script siga con valores vacíos y falle de forma confusa.
```

### 22 — Por qué "sudo" no es solución

```
metadata:
  materia: "bash"
  tema: "diagnostico_por_casos"
  nivel: "avanzado"
  tags: ["seguridad"]

tipo: mc
opciones_explicitas: ["Entender por qué hace falta ese permiso y si es necesario escribir ahí", "Agregar siempre `sudo`", "Cambiar los permisos de `/etc` a 777", "Ejecutar todo como root"]
respuesta: "Entender por qué hace falta ese permiso y si es necesario escribir ahí"

enunciado: "Un script falla con `Permission denied` al escribir en `/etc/config`. ¿Qué se debe hacer antes de agregar `sudo`?"

explicacion: |
  Subir privilegios sin entender el problema es riesgoso. Quizá el script debería escribir en una carpeta propia.
```

