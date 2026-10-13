# Bash — Tuberías y redirecciones (cuestionario, 21 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Los tres canales

```
metadata:
  materia: "bash"
  tema: "pipes_y_redirecciones"
  nivel: "basico"
  tags: ["canales"]

tipo: mc
opciones_explicitas: ["2", "0", "1", "3"]
respuesta: "2"

enunciado: "¿Cuál es el número de la salida de ERRORES (stderr)?"

explicacion: |
  stdin es 0, stdout es 1 y stderr es 2. Por eso `2>` redirige solo los errores.
```

### 2 — Redirigir la salida

```
metadata:
  materia: "bash"
  tema: "pipes_y_redirecciones"
  nivel: "basico"
  tags: ["redireccion"]

tipo: mc
opciones_explicitas: ["Guarda la salida de `ls` en `lista.txt`, pisando el contenido anterior", "Agrega la salida al final de `lista.txt`", "Lee `lista.txt` como entrada", "Muestra la salida en pantalla y no la guarda"]
respuesta: "Guarda la salida de `ls` en `lista.txt`, pisando el contenido anterior"

enunciado: "¿Qué hace `ls > lista.txt`?"

explicacion: |
  `>` crea el archivo si no existe y lo **reemplaza** si ya existía.
```

### 3 — Agregar

```
metadata:
  materia: "bash"
  tema: "pipes_y_redirecciones"
  nivel: "basico"
  tags: ["redireccion"]

tipo: mc
opciones_explicitas: ["Agrega la fecha al final de `registro.log`", "Borra `registro.log` y escribe la fecha", "Lee la fecha de `registro.log`", "Da error si el archivo existe"]
respuesta: "Agrega la fecha al final de `registro.log`"

enunciado: "¿Qué hace `date >> registro.log`?"

explicacion: |
  `>>` agrega al final sin borrar lo anterior (y crea el archivo si no existía).
```

### 4 — Cuidado con >

```
metadata:
  materia: "bash"
  tema: "pipes_y_redirecciones"
  nivel: "basico"
  tags: ["redireccion"]

tipo: vf
respuesta: verdadero

enunciado: "Si ejecutás `echo hola > notas.txt` y `notas.txt` ya tenía datos, esos datos se pierden."

explicacion: |
  El `>` trunca el archivo antes de escribir. Para conservar lo anterior hay que usar `>>`.
```

### 5 — Entrada desde archivo

```
metadata:
  materia: "bash"
  tema: "pipes_y_redirecciones"
  nivel: "basico"
  tags: ["entrada"]

tipo: completar
respuesta: "<"
respuestas_validas:
  - "<"

enunciado: "Para que `sort` lea desde `nombres.txt`, se escribe `sort ___ nombres.txt`."

explicacion: |
  `<` redirige la entrada estándar desde un archivo. También se puede escribir `sort nombres.txt`, porque sort acepta archivos como argumento.
```

### 6 — Errores aparte

```
metadata:
  materia: "bash"
  tema: "pipes_y_redirecciones"
  nivel: "basico"
  tags: ["errores"]

tipo: mc
opciones_explicitas: ["Guarda el mensaje de error en `errores.txt`", "Guarda la salida normal en `errores.txt`", "No muestra ni guarda nada", "Crea la carpeta"]
respuesta: "Guarda el mensaje de error en `errores.txt`"

enunciado: "¿Qué hace `ls /carpeta/inexistente 2> errores.txt`?"

explicacion: |
  `2>` redirige el canal 2 (stderr). El mensaje de error "No such file or directory" queda en el archivo en lugar de aparecer en la pantalla.
```

### 7 — Salida y errores juntos

```
metadata:
  materia: "bash"
  tema: "pipes_y_redirecciones"
  nivel: "intermedio"
  tags: ["errores"]

tipo: mc
opciones_explicitas: ["`comando > todo.txt 2>&1`", "`comando 2>&1 > todo.txt` (da igual el orden)", "`comando >> 2> todo.txt`", "`comando | todo.txt`"]
respuesta: "`comando > todo.txt 2>&1`"

enunciado: "¿Cómo se guardan la salida normal y los errores en el mismo archivo `todo.txt`?"

explicacion: |
  Primero se redirige stdout al archivo y después stderr se manda al mismo lugar que stdout (`2>&1`). El orden importa: al revés, los errores seguirían yendo a la pantalla.
```

### 8 — Descartar

```
metadata:
  materia: "bash"
  tema: "pipes_y_redirecciones"
  nivel: "basico"
  tags: ["dev-null"]

tipo: mc
opciones_explicitas: ["Para descartar una salida que no interesa", "Para guardar una copia de seguridad", "Para ocultar un archivo", "Para enviar la salida a otra terminal"]
respuesta: "Para descartar una salida que no interesa"

enunciado: "¿Para qué se usa `> /dev/null`?"

explicacion: |
  `/dev/null` es un archivo especial que descarta todo lo que se le escribe. Por ejemplo, `comando > /dev/null 2>&1` silencia el comando por completo.
```

### 9 — Qué es una tubería

```
metadata:
  materia: "bash"
  tema: "pipes_y_redirecciones"
  nivel: "basico"
  tags: ["pipe"]

tipo: mc
opciones_explicitas: ["Pasa la salida del primero como entrada del segundo", "Ejecuta los dos al mismo tiempo sin conexión", "Ejecuta el segundo solo si el primero falla", "Guarda la salida en un archivo"]
respuesta: "Pasa la salida del primero como entrada del segundo"

enunciado: "¿Qué hace el símbolo `|` entre dos comandos?"

explicacion: |
  Es una tubería (*pipe*): conecta stdout del primer comando con stdin del segundo.
```

### 10 — Contar archivos

```
metadata:
  materia: "bash"
  tema: "pipes_y_redirecciones"
  nivel: "basico"
  tags: ["pipe"]

tipo: mc
opciones_explicitas: ["La cantidad de entradas de la carpeta", "La lista de archivos ordenada", "Nada, está mal escrito", "El tamaño en bytes"]
respuesta: "La cantidad de entradas de la carpeta"

enunciado: "¿Qué muestra `ls | wc -l`?"

explicacion: |
  `ls` genera una línea por entrada y `wc -l` cuenta líneas.
```

### 11 — Filtrar líneas

```
metadata:
  materia: "bash"
  tema: "pipes_y_redirecciones"
  nivel: "basico"
  tags: ["pipe"]

tipo: mc
opciones_explicitas: ["Muestra solo las líneas que contienen la palabra ERROR", "Cuenta los errores", "Borra las líneas con ERROR", "Agrega ERROR al archivo"]
respuesta: "Muestra solo las líneas que contienen la palabra ERROR"

enunciado: "¿Qué hace `cat servidor.log | grep ERROR`?"

explicacion: |
  `cat` envía el contenido del archivo y `grep` deja pasar solo las líneas que coinciden.
```

### 12 — Errores en la tubería

```
metadata:
  materia: "bash"
  tema: "pipes_y_redirecciones"
  nivel: "intermedio"
  tags: ["pipe", "errores"]

tipo: vf
respuesta: falso

enunciado: "En `comando1 | comando2`, los mensajes de error de `comando1` también pasan por la tubería hacia `comando2`."

explicacion: |
  La tubería solo conecta stdout. Los errores (stderr) van a la pantalla, salvo que se redirijan con `2>&1`.
```

### 13 — Ordenar y quitar repetidas

```
metadata:
  materia: "bash"
  tema: "pipes_y_redirecciones"
  nivel: "intermedio"
  tags: ["sort", "uniq"]

tipo: mc
opciones_explicitas: ["Ordenarla con `sort`", "Cortarla con `cut`", "Contarla con `wc`", "Nada: `uniq` ya lo hace solo"]
respuesta: "Ordenarla con `sort`"

enunciado: "Para quitar las líneas repetidas de una lista, ¿qué conviene hacer antes de `uniq`?"

explicacion: |
  `uniq` solo elimina repeticiones **consecutivas**. Con `sort` primero, las iguales quedan juntas.
```

### 14 — Ranking de repetidos

```
metadata:
  materia: "bash"
  tema: "pipes_y_redirecciones"
  nivel: "intermedio"
  tags: ["pipe"]

tipo: mc
opciones_explicitas: ["Cuenta cuántas veces aparece cada línea y las ordena de mayor a menor", "Borra los nombres repetidos", "Ordena alfabéticamente sin contar", "Cuenta las líneas totales"]
respuesta: "Cuenta cuántas veces aparece cada línea y las ordena de mayor a menor"

enunciado: "¿Qué hace `sort nombres.txt | uniq -c | sort -nr`?"

explicacion: |
  `sort` agrupa, `uniq -c` cuenta cada grupo y `sort -nr` ordena por ese número de forma descendente.
```

### 15 — Primeras líneas

```
metadata:
  materia: "bash"
  tema: "pipes_y_redirecciones"
  nivel: "basico"
  tags: ["head"]

tipo: mc
opciones_explicitas: ["Muestra las primeras 3 líneas", "Muestra las últimas 3", "Borra 3 líneas", "Cuenta 3 palabras"]
respuesta: "Muestra las primeras 3 líneas"

enunciado: "¿Qué hace `head -n 3 archivo.txt`?"

explicacion: |
  `head` muestra el comienzo del archivo y `tail` el final. Con `-n` se indica cuántas líneas.
```

### 16 — Ver y guardar

```
metadata:
  materia: "bash"
  tema: "pipes_y_redirecciones"
  nivel: "intermedio"
  tags: ["tee"]

tipo: mc
opciones_explicitas: ["Muestra la salida en pantalla y además la guarda en `lista.txt`", "Solo la guarda", "Solo la muestra", "Envía la lista por correo"]
respuesta: "Muestra la salida en pantalla y además la guarda en `lista.txt`"

enunciado: "¿Qué hace `ls | tee lista.txt`?"

explicacion: |
  `tee` copia su entrada a la pantalla y a un archivo, como una conexión en T.
```

### 17 — Here-string

```
metadata:
  materia: "bash"
  tema: "pipes_y_redirecciones"
  nivel: "avanzado"
  tags: ["heredoc"]

tipo: mc
opciones_explicitas: ["Cuenta las palabras del texto (3)", "Cuenta los archivos", "Da un error", "Muestra las líneas"]
respuesta: "Cuenta las palabras del texto (3)"

enunciado: "¿Qué hace `wc -w <<< \"uno dos tres\"`?"

explicacion: |
  `<<<` (here-string) entrega un texto como entrada estándar: `wc -w` cuenta tres palabras.
```

### 18 — Here-document

```
metadata:
  materia: "bash"
  tema: "pipes_y_redirecciones"
  nivel: "avanzado"
  tags: ["heredoc"]

tipo: mc
opciones_explicitas: ["Toma esas líneas como entrada, hasta el marcador FIN", "Borra el archivo FIN", "Las guarda en un archivo llamado FIN", "Termina la shell"]
respuesta: "Toma esas líneas como entrada, hasta el marcador FIN"

enunciado: "¿Qué hace `cat <<FIN` seguido de varias líneas y una última línea con `FIN`?"

explicacion: |
  Un *here-document* permite escribir varias líneas de entrada dentro de un script, hasta que aparece la palabra elegida como marcador.
```

### 19 — Convertir en argumentos

```
metadata:
  materia: "bash"
  tema: "pipes_y_redirecciones"
  nivel: "avanzado"
  tags: ["xargs"]

tipo: mc
opciones_explicitas: ["Para convertir líneas de la entrada en argumentos de otro comando", "Para ejecutar comandos en segundo plano", "Para comprimir archivos", "Para cambiar permisos"]
respuesta: "Para convertir líneas de la entrada en argumentos de otro comando"

enunciado: "¿Para qué sirve `xargs`?"

explicacion: |
  Por ejemplo, `ls *.tmp | xargs rm` pasa los nombres como argumentos de `rm` (con precaución con los espacios).
```

### 20 — Agregar en vez de pisar

```
metadata:
  materia: "bash"
  tema: "pipes_y_redirecciones"
  nivel: "basico"
  tags: ["redireccion"]

tipo: completar
respuesta: ">>"
respuestas_validas:
  - ">>"

enunciado: "Para NO borrar lo que ya hay en el archivo, se usa el símbolo `___` en lugar de `>`."

explicacion: |
  `>>` agrega al final; `>` reemplaza todo el contenido.
```

### 21 — Silenciar un comando

```
metadata:
  materia: "bash"
  tema: "pipes_y_redirecciones"
  nivel: "intermedio"
  tags: ["dev-null"]

tipo: mc
opciones_explicitas: ["Descarta tanto la salida normal como los errores", "Guarda los errores y descarta la salida", "Muestra todo en pantalla", "Crea un archivo `/dev/null`"]
respuesta: "Descarta tanto la salida normal como los errores"

enunciado: "¿Qué hace `comando > /dev/null 2>&1`?"

explicacion: |
  Primero manda stdout a `/dev/null` y después stderr al mismo lugar: no se ve nada. Se usa en tareas programadas para que no envíen correos.
```

