# Bash — Scripts ejecutables y permisos (cuestionario, 22 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Shebang

```
metadata:
  materia: "bash"
  tema: "scripts_ejecutables_y_permisos"
  nivel: "basico"
  tags: ["shebang"]

tipo: mc
opciones_explicitas: ["Indica con qué programa se debe ejecutar el script", "Es un comentario sin efecto", "Define el nombre del script", "Hace que sea de solo lectura"]
respuesta: "Indica con qué programa se debe ejecutar el script"

enunciado: "¿Para qué sirve la primera línea `#!/bin/bash` de un script?"

explicacion: |
  El shebang (`#!`) le dice al sistema qué intérprete usar. Aunque empieza con `#`, es una línea especial.
```

### 2 — Más portable

```
metadata:
  materia: "bash"
  tema: "scripts_ejecutables_y_permisos"
  nivel: "intermedio"
  tags: ["shebang"]

tipo: mc
opciones_explicitas: ["#!/usr/bin/env bash", "#!/bin/bash", "#!bash", "#!/usr/bin/path bash"]
respuesta: "#!/usr/bin/env bash"

enunciado: "¿Cuál de estos shebangs busca Bash en el `PATH` en lugar de fijar una ruta?"

explicacion: |
  `env` localiza el intérprete según el `PATH` del usuario. Es útil porque Bash no siempre está en `/bin`.
```

### 3 — Dar permiso de ejecución

```
metadata:
  materia: "bash"
  tema: "scripts_ejecutables_y_permisos"
  nivel: "basico"
  tags: ["chmod"]

tipo: mc
opciones_explicitas: ["chmod +x backup.sh", "chmod -x backup.sh", "chown +x backup.sh", "exec backup.sh"]
respuesta: "chmod +x backup.sh"

enunciado: "¿Qué comando le da permiso de ejecución a `backup.sh`?"

explicacion: |
  `chmod +x` agrega el permiso de ejecución. `-x` lo quita.
```

### 4 — Ejecutar en la carpeta actual

```
metadata:
  materia: "bash"
  tema: "scripts_ejecutables_y_permisos"
  nivel: "basico"
  tags: ["ejecutar"]

tipo: mc
opciones_explicitas: ["./backup.sh", "backup.sh", "run backup.sh", "./backup"]
respuesta: "./backup.sh"

enunciado: "Con `backup.sh` ya ejecutable en la carpeta actual, ¿cómo se lo ejecuta?"

explicacion: |
  La carpeta actual no está en el `PATH`, por eso hay que escribir la ruta `./`.
```

### 5 — Sin permiso

```
metadata:
  materia: "bash"
  tema: "scripts_ejecutables_y_permisos"
  nivel: "intermedio"
  tags: ["bash"]

tipo: mc
opciones_explicitas: ["Sí: alcanza con que tenga permiso de lectura", "No, siempre hace falta `x`", "Solo con `sudo`", "Solo si tiene shebang"]
respuesta: "Sí: alcanza con que tenga permiso de lectura"

enunciado: "¿Se puede ejecutar un script que NO tiene el permiso `x` con `bash script.sh`?"

explicacion: |
  En ese caso `bash` lo lee como si fuera un archivo de datos y lo interpreta; no hay que ejecutar el archivo directamente.
```

### 6 — Permission denied

```
metadata:
  materia: "bash"
  tema: "scripts_ejecutables_y_permisos"
  nivel: "basico"
  tags: ["errores"]

tipo: mc
opciones_explicitas: ["El archivo no tiene permiso de ejecución", "Bash no está instalado", "El script tiene un error de sintaxis", "La carpeta está vacía"]
respuesta: "El archivo no tiene permiso de ejecución"

enunciado: "Se escribe `./script.sh` y aparece `Permission denied`. ¿Cuál es la causa más probable?"

explicacion: |
  Se arregla con `chmod +x script.sh`.
```

### 7 — Leer ls -l

```
metadata:
  materia: "bash"
  tema: "scripts_ejecutables_y_permisos"
  nivel: "basico"
  tags: ["permisos"]

tipo: mc
opciones_explicitas: ["Leer y ejecutar, pero no escribir", "Leer, escribir y ejecutar", "Solo leer", "Nada"]
respuesta: "Leer y ejecutar, pero no escribir"

enunciado: "En `-rwxr-xr-- 1 ana grupo 120 oct 5 script.sh`, ¿qué puede hacer el grupo?"

explicacion: |
  Los tres grupos son dueño `rwx`, grupo `r-x` y otros `r--`. El segundo trío (el del grupo) es `r-x`.
```

### 8 — Tipo de archivo

```
metadata:
  materia: "bash"
  tema: "scripts_ejecutables_y_permisos"
  nivel: "basico"
  tags: ["permisos"]

tipo: mc
opciones_explicitas: ["Que es una carpeta (directorio)", "Que es un archivo borrado", "Que es un archivo ejecutable", "Que es un enlace"]
respuesta: "Que es una carpeta (directorio)"

enunciado: "En `drwxr-xr-x`, ¿qué indica la `d` del comienzo?"

explicacion: |
  El primer carácter es el tipo: `-` archivo común, `d` carpeta, `l` enlace simbólico.
```

### 9 — Notación numérica

```
metadata:
  materia: "bash"
  tema: "scripts_ejecutables_y_permisos"
  nivel: "basico"
  tags: ["numerico"]

tipo: mc
opciones_explicitas: ["Leer, escribir y ejecutar", "Solo leer", "Leer y escribir", "Solo ejecutar"]
respuesta: "Leer, escribir y ejecutar"

enunciado: "¿Qué permiso representa el número 7 en `chmod 755`?"

explicacion: |
  r = 4, w = 2, x = 1: 4 + 2 + 1 = 7. El 5 es `r-x` (4 + 1).
```

### 10 — Calcular

```
metadata:
  materia: "bash"
  tema: "scripts_ejecutables_y_permisos"
  nivel: "basico"
  tags: ["numerico"]

tipo: mc
opciones_explicitas: ["Dueño: leer y escribir; grupo y otros: solo leer", "Todos pueden hacer todo", "Solo el dueño puede leer", "Dueño: ejecutar; los demás: leer"]
respuesta: "Dueño: leer y escribir; grupo y otros: solo leer"

enunciado: "¿Qué permisos da `chmod 644 notas.txt`?"

explicacion: |
  6 = 4 + 2 (rw-), 4 = r--, 4 = r--.
```

### 11 — Para claves

```
metadata:
  materia: "bash"
  tema: "scripts_ejecutables_y_permisos"
  nivel: "intermedio"
  tags: ["numerico"]

tipo: mc
opciones_explicitas: ["600", "777", "644", "755"]
respuesta: "600"

enunciado: "¿Qué permiso numérico conviene para una clave privada que solo puede leer y escribir el dueño?"

explicacion: |
  `600` = `rw-------`. Con permisos más abiertos, herramientas como SSH se niegan a usar la clave.
```

### 12 — Notación simbólica

```
metadata:
  materia: "bash"
  tema: "scripts_ejecutables_y_permisos"
  nivel: "intermedio"
  tags: ["simbolico"]

tipo: mc
opciones_explicitas: ["Quita el permiso de escritura al grupo y a otros", "Agrega escritura al grupo y a otros", "Quita escritura al dueño", "Cambia el dueño"]
respuesta: "Quita el permiso de escritura al grupo y a otros"

enunciado: "¿Qué hace `chmod go-w archivo`?"

explicacion: |
  `u`, `g`, `o` indican dueño, grupo y otros; `+` agrega, `-` quita y `r`, `w`, `x` son los permisos.
```

### 13 — Permisos en carpetas

```
metadata:
  materia: "bash"
  tema: "scripts_ejecutables_y_permisos"
  nivel: "intermedio"
  tags: ["carpetas"]

tipo: mc
opciones_explicitas: ["Que se puede entrar a ella (usar `cd` y acceder a lo que contiene)", "Que se puede ejecutar como programa", "Que se puede borrar", "Que es oculta"]
respuesta: "Que se puede entrar a ella (usar `cd` y acceder a lo que contiene)"

enunciado: "¿Qué significa el permiso `x` en una CARPETA?"

explicacion: |
  Sin `x`, no se puede entrar ni acceder a los archivos que contiene, aunque se tenga `r`.
```

### 14 — Ejecutar vs source

```
metadata:
  materia: "bash"
  tema: "scripts_ejecutables_y_permisos"
  nivel: "intermedio"
  tags: ["source"]

tipo: mc
opciones_explicitas: ["`source` lo ejecuta en la shell actual: las variables que defina quedan disponibles", "Ninguna", "`source` lo ejecuta como administrador", "`./script.sh` no permite usar variables"]
respuesta: "`source` lo ejecuta en la shell actual: las variables que defina quedan disponibles"

enunciado: "¿Qué diferencia hay entre `./script.sh` y `source script.sh`?"

explicacion: |
  `./script.sh` crea un proceso nuevo y lo que defina se pierde al terminar. `source` mantiene el entorno.
```

### 15 — Salir con un código

```
metadata:
  materia: "bash"
  tema: "scripts_ejecutables_y_permisos"
  nivel: "basico"
  tags: ["exit"]

tipo: mc
opciones_explicitas: ["Termina el script indicando un error (código 1)", "Termina indicando éxito", "Reinicia el script", "Sale solo del bucle actual"]
respuesta: "Termina el script indicando un error (código 1)"

enunciado: "¿Qué hace `exit 1` dentro de un script?"

explicacion: |
  `exit N` termina el script con el código N; 0 es éxito y cualquier otro valor se considera un error.
```

### 16 — set -e

```
metadata:
  materia: "bash"
  tema: "scripts_ejecutables_y_permisos"
  nivel: "intermedio"
  tags: ["set"]

tipo: mc
opciones_explicitas: ["Termina el script apenas un comando falla", "Muestra cada comando antes de ejecutarlo", "Ignora los errores", "Hace que las variables sean de solo lectura"]
respuesta: "Termina el script apenas un comando falla"

enunciado: "¿Qué hace `set -e` al comienzo de un script?"

explicacion: |
  `-e` (*errexit*) detiene el script ante un comando con código distinto de 0 (con algunas excepciones, como las condiciones de un `if`).
```

### 17 — set -u

```
metadata:
  materia: "bash"
  tema: "scripts_ejecutables_y_permisos"
  nivel: "intermedio"
  tags: ["set"]

tipo: mc
opciones_explicitas: ["Da error si se usa una variable que no está definida", "Convierte las variables en mayúsculas", "Borra variables sin usar", "Impide usar `unset`"]
respuesta: "Da error si se usa una variable que no está definida"

enunciado: "¿Qué hace `set -u`?"

explicacion: |
  `-u` (*nounset*) evita que un error de tipeo en un nombre de variable pase en silencio como cadena vacía.
```

### 18 — Revisar sin ejecutar

```
metadata:
  materia: "bash"
  tema: "scripts_ejecutables_y_permisos"
  nivel: "intermedio"
  tags: ["depurar"]

tipo: mc
opciones_explicitas: ["Verifica la sintaxis sin ejecutar el script", "Ejecuta el script sin mostrar salida", "Ejecuta el script línea por línea", "Cuenta las líneas"]
respuesta: "Verifica la sintaxis sin ejecutar el script"

enunciado: "¿Qué hace `bash -n script.sh`?"

explicacion: |
  `-n` solo lee y comprueba errores de sintaxis. Para ver la traza de una ejecución real se usa `bash -x`.
```

### 19 — Traza

```
metadata:
  materia: "bash"
  tema: "scripts_ejecutables_y_permisos"
  nivel: "intermedio"
  tags: ["depurar"]

tipo: mc
opciones_explicitas: ["Ejecuta el script mostrando cada comando antes de ejecutarlo", "Solo verifica la sintaxis", "Ejecuta el script como administrador", "Ejecuta el script dos veces"]
respuesta: "Ejecuta el script mostrando cada comando antes de ejecutarlo"

enunciado: "¿Qué hace `bash -x script.sh`?"

explicacion: |
  La traza (con un `+` delante de cada línea) ayuda a ver qué valor tuvo cada variable y por dónde pasó el script.
```

### 20 — bad interpreter

```
metadata:
  materia: "bash"
  tema: "scripts_ejecutables_y_permisos"
  nivel: "avanzado"
  tags: ["crlf"]

tipo: mc
opciones_explicitas: ["Tiene finales de línea de Windows (CRLF) en lugar de los de Linux", "Falta el shebang", "No tiene permiso de ejecución", "Bash no está instalado"]
respuesta: "Tiene finales de línea de Windows (CRLF) en lugar de los de Linux"

enunciado: "Un script creado en Windows da `bad interpreter: No such file or directory` y un `^M`. ¿Qué pasa?"

explicacion: |
  El carácter `\r` (`^M`) queda pegado al nombre del intérprete. Se corrige con `dos2unix` o `sed -i 's/\r$//' script.sh`.
```

### 21 — sudo

```
metadata:
  materia: "bash"
  tema: "scripts_ejecutables_y_permisos"
  nivel: "basico"
  tags: ["seguridad"]

tipo: vf
respuesta: falso

enunciado: "Es seguro ejecutar con `sudo` cualquier script que bajaste de internet, si tiene un nombre convincente."

explicacion: |
  `sudo` le da control total del sistema al script. Hay que leer el contenido antes de ejecutarlo (y mejor, no hacerlo con privilegios si no hace falta).
```

### 22 — Primer comando útil

```
metadata:
  materia: "bash"
  tema: "scripts_ejecutables_y_permisos"
  nivel: "avanzado"
  tags: ["buenas practicas"]

tipo: mc
opciones_explicitas: ["Poner `set -euo pipefail` y validar los argumentos recibidos", "Escribirlo todo en una sola línea", "Usar solo variables globales", "Evitar los comentarios"]
respuesta: "Poner `set -euo pipefail` y validar los argumentos recibidos"

enunciado: "¿Cuál es una buena práctica al empezar un script serio?"

explicacion: |
  Esas opciones hacen que los errores se vean pronto en lugar de seguir ejecutando con datos incorrectos.
```

