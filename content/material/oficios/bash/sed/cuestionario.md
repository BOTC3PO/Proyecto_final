# Bash — Edición de flujos con sed (cuestionario, 21 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Qué es sed

```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Procesa texto línea por línea aplicando comandos de edición", "Ordena archivos en carpetas", "Comprime archivos", "Muestra el estado del sistema"]
respuesta: "Procesa texto línea por línea aplicando comandos de edición"

enunciado: "¿Qué hace `sed`?"

explicacion: |
  `sed` es un editor de flujos: lee, transforma y escribe texto sin abrir un editor interactivo.
```

### 2 — Primera aparición

```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "basico"
  tags: ["sustituir"]

tipo: mc
opciones_explicitas: ["torre casa casa", "torre torre torre", "casa torre casa", "casa casa torre"]
respuesta: "torre casa casa"

enunciado: "Con la línea `casa casa casa`, ¿qué da `sed 's/casa/torre/'`?"

explicacion: |
  Sin el flag `g`, se reemplaza solo la **primera** aparición en cada línea.
```

### 3 — Todas las apariciones

```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "basico"
  tags: ["sustituir"]

tipo: mc
opciones_explicitas: ["torre torre torre", "torre casa casa", "casa casa torre", "Da error"]
respuesta: "torre torre torre"

enunciado: "Con la línea `casa casa casa`, ¿qué da `sed 's/casa/torre/g'`?"

explicacion: |
  El flag `g` (global) reemplaza todas las apariciones de la línea.
```

### 4 — Flag global

```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "basico"
  tags: ["sustituir"]

tipo: completar
respuesta: "g"
respuestas_validas:
  - "g"

enunciado: "Para reemplazar TODAS las apariciones en cada línea, se escribe `sed 's/a/b/___'`."

explicacion: |
  `g` significa global. Sin él solo cambia la primera de cada línea.
```

### 5 — Archivo original

```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "basico"
  tags: ["original"]

tipo: vf
respuesta: falso

enunciado: "Después de ejecutar `sed 's/a/b/' datos.txt`, el archivo `datos.txt` queda modificado."

explicacion: |
  `sed` escribe el resultado en la pantalla; el archivo original no cambia. Para modificarlo hay que usar `-i`, o redirigir la salida a otro archivo.
```

### 6 — Editar en el lugar

```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "basico"
  tags: ["-i"]

tipo: mc
opciones_explicitas: ["-i", "-n", "-e", "-f"]
respuesta: "-i"

enunciado: "¿Qué opción hace que `sed` modifique el archivo original?"

explicacion: |
  `-i` (*in place*) guarda los cambios en el mismo archivo. `-i.bak` guarda antes una copia.
```

### 7 — Respaldo

```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "intermedio"
  tags: ["-i"]

tipo: mc
opciones_explicitas: ["Modifica `datos.txt` y deja antes una copia en `datos.txt.bak`", "Modifica solo la copia", "Cambia el nombre del archivo", "Da error porque -i no admite sufijos"]
respuesta: "Modifica `datos.txt` y deja antes una copia en `datos.txt.bak`"

enunciado: "¿Qué hace `sed -i.bak 's/a/b/' datos.txt`?"

explicacion: |
  El texto pegado a `-i` es el sufijo del archivo de respaldo (en GNU sed).
```

### 8 — Borrar una línea

```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "basico"
  tags: ["borrar"]

tipo: mc
opciones_explicitas: ["Muestra el texto sin la línea 3", "Borra la línea 3 del archivo original", "Muestra solo la línea 3", "Borra las 3 primeras líneas"]
respuesta: "Muestra el texto sin la línea 3"

enunciado: "¿Qué hace `sed '3d' texto.txt`?"

explicacion: |
  `d` borra la línea de la salida. La dirección `3` limita la acción a esa línea. El archivo no cambia sin `-i`.
```

### 9 — Rango

```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "basico"
  tags: ["rango"]

tipo: mc
opciones_explicitas: ["Quita las líneas de la 2 a la 4", "Quita las líneas 2 y 4 solamente", "Muestra las líneas 2 a 4", "Quita todas menos la 2"]
respuesta: "Quita las líneas de la 2 a la 4"

enunciado: "¿Qué hace `sed '2,4d' texto.txt`?"

explicacion: |
  `2,4` es un rango de líneas, ambas incluidas.
```

### 10 — Solo una línea

```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "basico"
  tags: ["imprimir"]

tipo: mc
opciones_explicitas: ["Solo la línea 5", "Todo el archivo, con la línea 5 repetida", "Todas menos la línea 5", "Las 5 primeras líneas"]
respuesta: "Solo la línea 5"

enunciado: "¿Qué muestra `sed -n '5p' archivo`?"

explicacion: |
  `-n` desactiva la salida automática y `p` imprime solo lo indicado por la dirección.
```

### 11 — Sin encabezado

```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "basico"
  tags: ["borrar"]

tipo: mc
opciones_explicitas: ["sed '1d' datos.csv", "sed '1p' datos.csv", "sed 'd1' datos.csv", "sed -n '1d' datos.csv"]
respuesta: "sed '1d' datos.csv"

enunciado: "Para quitar la primera línea (el encabezado) de un CSV, se usa:"

explicacion: |
  `1d` borra la línea 1. Con `-n '1d'` no se mostraría nada.
```

### 12 — Borrar por patrón

```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "basico"
  tags: ["patron"]

tipo: mc
opciones_explicitas: ["Quita las líneas que empiezan con `#` (comentarios)", "Quita las líneas que terminan con `#`", "Quita la primera línea", "Agrega `#` a cada línea"]
respuesta: "Quita las líneas que empiezan con `#` (comentarios)"

enunciado: "¿Qué hace `sed '/^#/d' config`?"

explicacion: |
  La dirección `/patrón/` aplica el comando a las líneas que coinciden con la expresión regular.
```

### 13 — Líneas vacías

```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "intermedio"
  tags: ["vacias"]

tipo: mc
opciones_explicitas: ["sed '/^$/d' texto", "sed '/^$/p' texto", "sed 's/^$//' texto", "sed 'd$' texto"]
respuesta: "sed '/^$/d' texto"

enunciado: "¿Qué comando quita las líneas vacías de un texto?"

explicacion: |
  `^$` coincide con las líneas sin contenido y `d` las borra. (`s/^$//` las dejaría vacías, pero no las quita).
```

### 14 — Otro delimitador

```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "intermedio"
  tags: ["delimitador"]

tipo: mc
opciones_explicitas: ["Para evitar escapar las barras: el delimitador pasó a ser `|`", "Para ejecutar dos comandos", "Para filtrar con una tubería", "Para reemplazar solo en la última línea"]
respuesta: "Para evitar escapar las barras: el delimitador pasó a ser `|`"

enunciado: "¿Para qué sirve `sed 's|/usr|/opt|' ruta`?"

explicacion: |
  El carácter que sigue a la `s` es el delimitador; puede ser cualquiera (`|`, `#`, `,`). Es útil con rutas que tienen muchas barras.
```

### 15 — El ampersand

```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "intermedio"
  tags: ["ampersand"]

tipo: mc
opciones_explicitas: ["Todo el texto que coincidió", "Un ampersand literal", "El final de la línea", "Un error"]
respuesta: "Todo el texto que coincidió"

enunciado: "En `sed 's/[0-9]/<&>/'`, ¿qué representa `&` en el reemplazo?"

explicacion: |
  `&` se reemplaza por la coincidencia completa. Con la línea `a1`, el resultado es `a<1>`.
```

### 16 — Grupos

```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "avanzado"
  tags: ["grupos"]

tipo: mc
opciones_explicitas: ["Pérez, Ana", "Ana Pérez", "Pérez Ana", "Ana, Pérez"]
respuesta: "Pérez, Ana"

enunciado: "¿Qué da `echo \"Ana Pérez\" | sed 's/\\(.*\\) \\(.*\\)/\\2, \\1/'`?"

explicacion: |
  Los paréntesis capturan dos grupos (nombre y apellido) y en el reemplazo `\1` y `\2` los invierten.
```

### 17 — Traducir caracteres

```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "avanzado"
  tags: ["traducir"]

tipo: mc
opciones_explicitas: ["Reemplaza cada a por x, cada b por y y cada c por z", "Reemplaza la cadena \"abc\" por \"xyz\"", "Borra los caracteres a, b y c", "Cuenta cuántos caracteres hay"]
respuesta: "Reemplaza cada a por x, cada b por y y cada c por z"

enunciado: "¿Qué hace `sed 'y/abc/xyz/'`?"

explicacion: |
  `y` traduce carácter por carácter, como `tr`. No usa expresiones regulares.
```

### 18 — Varios comandos

```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "intermedio"
  tags: ["-e"]

tipo: mc
opciones_explicitas: ["sed -e 's/a/b/' -e 's/c/d/'", "sed 's/a/b/' 's/c/d/'", "sed 's/a/b/ & s/c/d/'", "No se puede"]
respuesta: "sed -e 's/a/b/' -e 's/c/d/'"

enunciado: "¿Cómo se aplican dos sustituciones a la vez?"

explicacion: |
  `-e` permite encadenar varios comandos en una misma ejecución. También se pueden separar con `;`.
```

### 19 — Última línea

```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "avanzado"
  tags: ["direccion"]

tipo: mc
opciones_explicitas: ["Quita la última línea", "Quita todas las líneas que terminan en `$`", "Quita la primera línea", "Agrega un signo $ al final"]
respuesta: "Quita la última línea"

enunciado: "¿Qué hace `sed '$d' archivo`?"

explicacion: |
  En una dirección de `sed`, `$` significa "la última línea" (distinto de su sentido en las expresiones regulares).
```

### 20 — Quitar espacios

```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "intermedio"
  tags: ["espacios"]

tipo: mc
opciones_explicitas: ["Quita los espacios del comienzo de cada línea", "Quita todos los espacios", "Agrega espacios al comienzo", "Quita las líneas vacías"]
respuesta: "Quita los espacios del comienzo de cada línea"

enunciado: "¿Qué hace `sed 's/^ *//' archivo`?"

explicacion: |
  `^ *` es "comienzo de línea seguido de cero o más espacios", reemplazado por nada.
```

### 21 — Probar antes

```
metadata:
  materia: "bash"
  tema: "sed"
  nivel: "basico"
  tags: ["seguridad"]

tipo: mc
opciones_explicitas: ["Probar el comando sin `-i` (o con `-i.bak`) y revisar el resultado", "Ejecutarlo directamente", "Borrar el archivo y volver a crearlo", "Reiniciar la computadora"]
respuesta: "Probar el comando sin `-i` (o con `-i.bak`) y revisar el resultado"

enunciado: "¿Qué conviene hacer antes de usar `sed -i` sobre un archivo importante?"

explicacion: |
  Con `-i` los cambios se guardan de inmediato. Una prueba previa o un respaldo evitan arruinar el original por un error en la expresión.
```

