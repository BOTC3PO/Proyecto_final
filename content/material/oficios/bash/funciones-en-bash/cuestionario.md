# Bash — Funciones (cuestionario, 21 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Definir una función

```
metadata:
  materia: "bash"
  tema: "funciones_en_bash"
  nivel: "basico"
  tags: ["definir"]

tipo: mc
opciones_explicitas: ["saludar() {{ echo \"Hola\"; }}", "def saludar(): echo Hola", "function saludar do echo Hola done", "saludar := {{ echo Hola }}"]
respuesta: "saludar() {{ echo \"Hola\"; }}"

enunciado: "¿Cuál es una definición válida de función en Bash?"

explicacion: |
  Se escribe el nombre con paréntesis y el cuerpo entre llaves (o con la palabra `function`). Las llaves llevan espacios y el último comando termina en `;` o en salto de línea.
```

### 2 — Llamar una función

```
metadata:
  materia: "bash"
  tema: "funciones_en_bash"
  nivel: "basico"
  tags: ["llamar"]

tipo: mc
opciones_explicitas: ["saludar", "saludar()", "call saludar", "run saludar"]
respuesta: "saludar"

enunciado: "Después de definir `saludar() {{ echo Hola; }}`, ¿cómo se la llama?"

explicacion: |
  Se llama como cualquier comando, por su nombre y sin paréntesis.
```

### 3 — Definir antes

```
metadata:
  materia: "bash"
  tema: "funciones_en_bash"
  nivel: "basico"
  tags: ["orden"]

tipo: vf
respuesta: falso

enunciado: "Se puede llamar a una función antes de definirla en el script."

explicacion: |
  Bash lee el script de arriba hacia abajo: la función tiene que estar definida **antes** del momento en que se la ejecuta.
```

### 4 — Primer argumento

```
metadata:
  materia: "bash"
  tema: "funciones_en_bash"
  nivel: "basico"
  tags: ["argumentos"]

tipo: mc
opciones_explicitas: ["El primer argumento con el que se la llamó", "El nombre de la función", "El código de salida", "El primer argumento del script, siempre"]
respuesta: "El primer argumento con el que se la llamó"

enunciado: "Dentro de una función, ¿qué contiene `$1`?"

explicacion: |
  Dentro de una función, `$1`, `$2`... son los argumentos **de la función**, no los del script.
```

### 5 — Todos los argumentos

```
metadata:
  materia: "bash"
  tema: "funciones_en_bash"
  nivel: "intermedio"
  tags: ["argumentos"]

tipo: mc
opciones_explicitas: ["\"$@\"", "$*", "$#", "$1"]
respuesta: "\"$@\""

enunciado: "¿Cómo se pasan todos los argumentos de una función a otro comando conservando los espacios?"

explicacion: |
  `"$@"` expande a cada argumento como una palabra separada y respeta los espacios. `$#` es la cantidad.
```

### 6 — Cantidad de argumentos

```
metadata:
  materia: "bash"
  tema: "funciones_en_bash"
  nivel: "basico"
  tags: ["argumentos"]

tipo: completar
respuesta: "#"
respuestas_validas:
  - "#"

enunciado: "Dentro de una función, la variable que cuenta cuántos argumentos recibió es `$___`."

explicacion: |
  `$#` da la cantidad de argumentos. Se usa para validarlos.
```

### 7 — Ámbito

```
metadata:
  materia: "bash"
  tema: "funciones_en_bash"
  nivel: "basico"
  tags: ["ambito"]

tipo: mc
opciones_explicitas: ["Global: sigue existiendo después de que la función termina", "Local de la función", "Una constante", "Se borra al terminar"]
respuesta: "Global: sigue existiendo después de que la función termina"

enunciado: "Por defecto, una variable que se asigna dentro de una función en Bash es..."

explicacion: |
  Para que sea local hay que declararla con `local`. De lo contrario puede pisar variables del script.
```

### 8 — local

```
metadata:
  materia: "bash"
  tema: "funciones_en_bash"
  nivel: "basico"
  tags: ["local"]

tipo: mc
opciones_explicitas: ["Crea la variable `x` solo para esa función", "Crea una variable de solo lectura", "Exporta `x` al sistema", "La guarda en un archivo"]
respuesta: "Crea la variable `x` solo para esa función"

enunciado: "¿Qué hace `local x=5` dentro de una función?"

explicacion: |
  Las variables locales desaparecen al terminar la función y no afectan a otras con el mismo nombre.
```

### 9 — Choque de nombres

```
metadata:
  materia: "bash"
  tema: "funciones_en_bash"
  nivel: "intermedio"
  tags: ["ambito"]

tipo: mc
opciones_explicitas: ["2", "1", "Nada", "Un error"]
respuesta: "2"

enunciado: "`x=1; f() {{ x=2; }}; f; echo $x` muestra..."

explicacion: |
  Como `x` no está declarada con `local`, la función modifica la global.
```

### 10 — Con local

```
metadata:
  materia: "bash"
  tema: "funciones_en_bash"
  nivel: "intermedio"
  tags: ["local"]

tipo: mc
opciones_explicitas: ["1", "2", "Nada", "Un error"]
respuesta: "1"

enunciado: "`x=1; f() {{ local x=2; }}; f; echo $x` muestra..."

explicacion: |
  Con `local`, el `x=2` solo existe dentro de `f`; la `x` global sigue valiendo 1.
```

### 11 — Qué devuelve return

```
metadata:
  materia: "bash"
  tema: "funciones_en_bash"
  nivel: "basico"
  tags: ["return"]

tipo: mc
opciones_explicitas: ["Un código de salida entre 0 y 255", "Cualquier texto", "Un número decimal", "Un arreglo"]
respuesta: "Un código de salida entre 0 y 255"

enunciado: "¿Qué devuelve `return` en una función de Bash?"

explicacion: |
  `return N` fija el código de salida (que se consulta con `$?`). No sirve para devolver textos ni números grandes.
```

### 12 — Devolver un texto

```
metadata:
  materia: "bash"
  tema: "funciones_en_bash"
  nivel: "basico"
  tags: ["captura"]

tipo: mc
opciones_explicitas: ["Escribirlo con `echo` y capturarlo con `$( )`", "Usar `return \"texto\"`", "Usar `print`", "Usar `output`"]
respuesta: "Escribirlo con `echo` y capturarlo con `$( )`"

enunciado: "Para que una función \"devuelva\" un texto, lo habitual es..."

explicacion: |
  `resultado=$(funcion)` guarda en la variable todo lo que la función escribió en la salida estándar.
```

### 13 — Capturar el valor

```
metadata:
  materia: "bash"
  tema: "funciones_en_bash"
  nivel: "basico"
  tags: ["captura"]

tipo: mc
opciones_explicitas: ["10", "5", "Nada", "El código de salida"]
respuesta: "10"

enunciado: "Con `doble() {{ echo $(( $1 * 2 )); }}`, ¿qué guarda `r=$(doble 5)`?"

explicacion: |
  `$(doble 5)` ejecuta la función y se reemplaza por lo que imprimió: 10.
```

### 14 — Éxito o fallo

```
metadata:
  materia: "bash"
  tema: "funciones_en_bash"
  nivel: "intermedio"
  tags: ["return"]

tipo: mc
opciones_explicitas: ["Si el código de salida de la función es 0", "Si la función imprimió 0", "Si la función devolvió el texto \"par\"", "Si existe un archivo `es_par`"]
respuesta: "Si el código de salida de la función es 0"

enunciado: "¿Qué pregunta `if es_par 4; then ...` si `es_par() {{ [ $(( $1 % 2 )) -eq 0 ]; }}`?"

explicacion: |
  El `if` usa el código de salida: la función termina con el resultado de `[ ... ]`, que es 0 cuando es verdadero.
```

### 15 — Código por defecto

```
metadata:
  materia: "bash"
  tema: "funciones_en_bash"
  nivel: "intermedio"
  tags: ["return"]

tipo: mc
opciones_explicitas: ["El del último comando que ejecutó", "Siempre 0", "Siempre 1", "Siempre el del `echo`"]
respuesta: "El del último comando que ejecutó"

enunciado: "Si una función no usa `return`, ¿qué código de salida tiene?"

explicacion: |
  Sin `return`, la función termina con el código del último comando ejecutado.
```

### 16 — Validar argumentos

```
metadata:
  materia: "bash"
  tema: "funciones_en_bash"
  nivel: "intermedio"
  tags: ["validar"]

tipo: mc
opciones_explicitas: ["Que se recibió exactamente un argumento; si no, muestra el uso y sale con error", "Que existe un archivo", "Que el script se llame `archivo`", "Que no hay errores"]
respuesta: "Que se recibió exactamente un argumento; si no, muestra el uso y sale con error"

enunciado: "¿Qué verifica `[ $# -eq 1 ] || {{ echo \"Uso: $0 archivo\"; return 1; }}`?"

explicacion: |
  Es un patrón habitual: `$#` cuenta los argumentos, y si no es 1, se muestra el mensaje y se termina con código 1.
```

### 17 — Errores a stderr

```
metadata:
  materia: "bash"
  tema: "funciones_en_bash"
  nivel: "intermedio"
  tags: ["stderr"]

tipo: mc
opciones_explicitas: ["echo \"error\" >&2", "echo \"error\" > 2", "echo \"error\" 2>", "error >> stderr"]
respuesta: "echo \"error\" >&2"

enunciado: "¿Cómo se escribe un mensaje de error en la salida de errores?"

explicacion: |
  `>&2` redirige la salida de ese comando al canal 2 (stderr), de modo que no se mezcle con la salida normal.
```

### 18 — Reusar funciones

```
metadata:
  materia: "bash"
  tema: "funciones_en_bash"
  nivel: "intermedio"
  tags: ["source"]

tipo: mc
opciones_explicitas: ["source funciones.sh", "load funciones.sh", "import funciones.sh", "run funciones.sh"]
respuesta: "source funciones.sh"

enunciado: "¿Cómo se cargan en un script las funciones definidas en el archivo `funciones.sh`?"

explicacion: |
  `source archivo` (o `. archivo`) ejecuta el archivo en la shell actual, por lo que quedan definidas sus funciones.
```

### 19 — Nombre claro

```
metadata:
  materia: "bash"
  tema: "funciones_en_bash"
  nivel: "basico"
  tags: ["buenas practicas"]

tipo: mc
opciones_explicitas: ["respaldar_carpeta", "f1", "hacer", "x"]
respuesta: "respaldar_carpeta"

enunciado: "¿Cuál es el mejor nombre para una función que respalda una carpeta?"

explicacion: |
  Un nombre descriptivo hace que el script se lea solo. Evitá nombres que choquen con comandos existentes (`test`, `cd`).
```

### 20 — Recursión

```
metadata:
  materia: "bash"
  tema: "funciones_en_bash"
  nivel: "avanzado"
  tags: ["recursion"]

tipo: mc
opciones_explicitas: ["Sí, aunque hay que tener un caso base para que termine", "No, Bash no lo permite", "Sí, y no necesita caso base", "Solo con `return`"]
respuesta: "Sí, aunque hay que tener un caso base para que termine"

enunciado: "¿Se puede escribir una función que se llame a sí misma (recursiva) en Bash?"

explicacion: |
  Bash permite la recursión (por ejemplo, factorial), pero sin un caso base se llamaría indefinidamente.
```

### 21 — Ver funciones

```
metadata:
  materia: "bash"
  tema: "funciones_en_bash"
  nivel: "avanzado"
  tags: ["declare"]

tipo: mc
opciones_explicitas: ["Lista las funciones definidas en la sesión", "Declara una función", "Borra las funciones", "Lista las variables"]
respuesta: "Lista las funciones definidas en la sesión"

enunciado: "¿Qué hace `declare -f`?"

explicacion: |
  `declare -f` muestra las funciones con su código; `unset -f nombre` borra una.
```

