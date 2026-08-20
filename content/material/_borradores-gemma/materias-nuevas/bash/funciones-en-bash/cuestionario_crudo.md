### 1 — Retorno de valores en funciones
```
metadata:
  materia: "bash"
  tema: "funciones-en-bash"
  nivel: "intermedio"
  tags: ["retorno", "exit-code", "funciones"]
enunciado:
  Uno_de:
    - "En un script bash, ¿cuál es la forma estándar y recomendada para devolver un código de salida (estado) desde una función?"
    - "Al definir una función en bash, ¿qué instrucción se utiliza para finalizar la ejecución de la misma y devolver un valor numérico al llamador?"
respuesta: "return"
tipo: completar
pasos:
  - "Identificar la instrucción que termina una función."
  - "Verificar que `return` acepta un argumento entero (0-255)."
  - "Confirmar que este valor se almacena en `$?` tras la llamada."
explicacion: "La instrucción `return` termina la ejecución de la función y establece el valor de `$?`. Es la forma correcta de indicar éxito (0) o error (no cero)."
```

### 2 — Ámbito de variables: locales
```
metadata:
  materia: "bash"
  tema: "funciones-en-bash"
  nivel: "intermedio"
  tags: ["alcance", "local", "variables"]
enunciado:
  Uno_de:
    - "¿Qué palabra clave se debe usar antes de una asignación dentro de una función para evitar que la variable modifique la variable global con el mismo nombre?"
    - "Para declarar una variable que solo exista durante la ejecución de una función específica en bash, ¿cuál es el modificador correcto?"
respuesta: "local"
tipo: completar
pasos:
  - "Reconocer el problema de colisión de nombres entre global y local."
  - "Identificar `local` como el keyword de bash para restringir el alcance."
  - "Entender que sin `local`, las variables son globales por defecto."
explicacion: "La palabra clave `local` restringe la visibilidad de la variable al bloque de la función actual. Sin ella, la variable se vuelve global, lo que puede causar efectos secundarios indeseados."
```

### 3 — Manejo de argumentos posicionales
```
metadata:
  materia: "bash"
  tema: "funciones-en-bash"
  nivel: "intermedio"
  tags: ["argumentos", "posicionales", "shift"]
enunciado:
  Uno_de:
    - "Dentro de una función, ¿qué variable especial contiene todos los argumentos pasados a la función como una lista separada por espacios?"
    - "Si una función recibe múltiples parámetros, ¿qué variable de bash permite acceder a ellos sin índices individuales (similar a `$@` pero como una sola cadena separada por espacios del primer carácter de IFS)?"
respuesta: "$*"
tipo: completar
pasos:
  - "Diferenciar entre `$@` (lista de palabras) y `$*` (cadena única)."
  - "Recordar que `$*` une los argumentos usando el primer carácter de IFS."
  - "Validar que la pregunta pide la variable que agrupa todos los argumentos."
explicacion: "`$*` expande los argumentos posicionales en una sola palabra, separada por el primer carácter de la variable IFS (por defecto espacio). Útil para pasar todos los argumentos como un solo bloque."
```

### 4 — Recursión básica
```
metadata:
  materia: "bash"
  tema: "funciones-en-bash"
  nivel: "intermedio"
  tags: ["recursion", "recursivo", "ejemplo"]
enunciado:
  Uno_de:
    - "En el siguiente fragmento, ¿qué condición es crítica para evitar un desbordamiento de pila (stack overflow) en una función recursiva?"
    - "Para que una función recursiva en bash termine correctamente, ¿qué elemento debe estar presente en su lógica?"
respuesta: "condicion de salida"
tipo: completar
pasos:
  - "Analizar la estructura de recursión: llamada a sí misma."
  - "Identificar que sin una parada, la recursión es infinita."
  - "Nombrar el concepto lógico necesario para detener la recursión."
explicacion: "Toda función recursiva debe tener una 'condición de salida' (o caso base) que detenga las llamadas adicionales cuando se cumple cierto criterio, de lo contrario, agotará la memoria de la pila."
```

### 5 — Cadenas de entrada/salida
```
metadata:
  materia: "bash"
  tema: "funciones-en-bash"
  nivel: "intermedio"
  tags: ["stdin", "stdout", "pipe"]
enunciado:
  Uno_de:
    - "¿Es verdadero o falso que las funciones en bash heredan automáticamente el file descriptor 0 (stdin) del contexto de llamada, permitiendo leer desde pipe sin redirección explícita?"
    - "Afirmación: Las funciones bash pueden leer directamente de la entrada estándar si se les pasa un pipe en la llamada, sin necesidad de redirección adicional dentro de la función."
respuesta: "verdadero"
tipo: vf
pasos:
  - "Verificar el comportamiento de herencia de file descriptors en bash."
  - "Confirmar que las funciones comparten el entorno y los descriptores con el llamador."
  - "Concluir que la herencia es automática."
explicacion: "Las funciones bash comparten el mismo entorno y file descriptors que el script principal. Si se ejecuta `funcion < archivo` o `comando | funcion`, la función accede a esa entrada/salida directamente."
```

### 6 — Argumentos con nombre (simulados)
```
metadata:
  materia: "bash"
  tema: "funciones-en-bash"
  nivel: "intermedio"
  tags: ["argumentos-nombre", "parseo", "shift"]
enunciado:
  Uno_de:
    - "¿Qué patrón se utiliza comúnmente en bash para simular argumentos con nombre (como `--verbose` o `-f archivo`) dentro de una función?"
    - "En ausencia de `getopts` (que es un comando externo o builtin específico), ¿qué estructura de control se usa típicamente para iterar y procesar argumentos con nombre en una función?"
respuesta: "while shift"
tipo: completar
pasos:
  - "Recordar que bash no tiene `kwargs` nativos como Python."
  - "Identificar el patrón clásico: `while [[ $# -gt 0 ]]; do case ... shift; done`."
  - "Resumir el patrón en su componente clave de iteración."
explicacion: "El patrón `while shift` permite iterar sobre los argumentos posicionales `$1`, `$2`, etc., consumiendo uno a uno con `shift` para procesar opciones como `--key value`."
```

### 7 — Captura de salida en variable
```
metadata:
  materia: "bash"
  tema: "funciones-en-bash"
  nivel: "intermedio"
  tags: ["comando", "subshell", "output"]
enunciado:
  Uno_de:
    - "¿Qué sintaxis se usa para asignar la salida estándar de una función a una variable sin crear un subproceso explícito visible en el código?"
    - "Para guardar el resultado de `mi_funcion` en la variable `resultado`, ¿cuál es la forma correcta de escritura?"
respuesta: "$(mi_funcion)"
tipo: completar
pasos:
  - "Identificar la necesidad de capturar stdout."
  - "Reconocer la sintaxis de sustitución de comandos."
  - "Escribir la sintaxis con paréntesis y signo de dólar."
explicacion: "La sintaxis `$(comando)` ejecuta el comando (o función) en un subshell y devuelve su stdout como una cadena de texto, que puede ser asignada a una variable."
```

### 8 — Funciones anidadas
```
metadata:
  materia: "bash"
  tema: "funciones-en-bash"
  nivel: "intermedio"
  tags: ["anidamiento", "definicion", "alcance"]
enunciado:
  Uno_de:
    - "¿Es verdadero o falso que en bash, una función puede ser definida dentro del cuerpo de otra función y ser llamada posteriormente desde el ámbito externo?"
    - "Afirmación: Las funciones definidas dentro de otra función en bash tienen alcance global al script una vez que la función padre ha sido ejecutada."
respuesta: "verdadero"
tipo: vf
pasos:
  - "Analizar el ámbito de definición de funciones en bash."
  - "Determinar si la definición interna crea una función global o local."
  - "Confirmar que bash no soporta funciones locales anidadas por defecto (se vuelven globales)."
explicacion: "En bash, las funciones definidas dentro de otras funciones se vuelven globales una vez que la función externa se ejecuta. No hay un mecanismo nativo para funciones estrictamente locales anidadas."
```

### 9 — Uso de `declare -f`
```
metadata:
  materia: "bash"
  tema: "funciones-en-bash"
  nivel: "intermedio"
  tags: ["debug", "lista", "declaracion"]
enunciado:
  Uno_de:
    - "¿Qué comando builtin se utiliza para listar todas las funciones definidas actualmente en el entorno bash?"
    - "Para depurar el estado actual del shell y ver qué funciones están cargadas, ¿qué comando se ejecuta?"
respuesta: "declare -f"
tipo: completar
pasos:
  - "Buscar la forma de inspeccionar el entorno de funciones."
  - "Recordar que `declare` o `typeset` gestionan atributos."
  - "Identificar la opción `-f` para funciones."
explicacion: "`declare -f` (o simplemente `typeset -f`) imprime las definiciones de todas las funciones cargadas en el shell, útil para debugging y verificación de estado."
```

### 10 — Paso de arrays por referencia (simulado)
```
metadata:
  materia: "bash"
  tema: "funciones-en-bash"
  nivel: "intermedio"
  tags: ["arrays", "referencia", "eval"]
enunciado:
  Uno_de:
    - "Dado que bash no soporta paso de arrays por referencia nativo, ¿qué técnica se usa para modificar un array pasado a una función?"
    - "Para modificar un array desde dentro de una función en bash, ¿qué función builtin se utiliza junto con el nombre de la variable?"
respuesta: "eval"
tipo: completar
pasos:
  - "Reconocer la limitación de paso de arrays por valor."
  - "Identificar la necesidad de evaluar dinámicamente el nombre de la variable."
  - "Nombrar la herramienta para ejecución de cadenas como código."
explicacion: "Se pasa el *nombre* del array como argumento y se usa `eval \"$1[$index]=valor\"` dentro de la función para modificar el array original en el ámbito del llamador."
```

### 11 — Orden de definición
```
metadata:
  materia: "bash"
  tema: "funciones-en-bash"
  nivel: "intermedio"
  tags: ["orden", "carga", "sintaxis"]
enunciado:
  Uno_de:
    - "¿Es verdadero o falso que en bash, una función debe estar definida antes de ser llamada en el mismo script?"
    - "Afirmación: A diferencia de algunos lenguajes, bash requiere que la definición de una función aparezca en el texto del script antes de cualquier llamada a ella."
respuesta: "falso"
tipo: vf
pasos:
  - "Analizar cómo bash procesa los scripts (interpretado línea por línea o bloque)."
  - "Determinar si la definición es necesaria en tiempo de análisis o en tiempo de ejecución."
  - "Confirmar que bash permite llamadas a funciones definidas posteriormente."
explicacion: "Bash es un shell interpretado que carga el script en memoria. No importa el orden de definición; la función puede llamarse antes de que su definición aparezca en el texto, siempre que se haya cargado el script."
```

### 12 — Modificador `readonly`
```
metadata:
  materia: "bash"
  tema: "funciones-en-bash"
  nivel: "intermedio"
  tags: ["inmutabilidad", "readonly", "seguridad"]
enunciado:
  Uno_de:
    - "¿Qué ocurre si se intenta modificar una función marcada con `declare -f` y luego `readonly`?"
    - "Si una función es declarada como `readonly`, ¿se puede sobrescribir su definición posteriormente en el mismo shell?"
respuesta: "no se puede modificar"
tipo: completar
pasos:
  - "Entender el efecto de `readonly` en variables y funciones."
  - "Determinar si la modificación está permitida o prohibida."
  - "Formular la consecuencia de intentar la acción prohibida."
explicacion: "Una función `readonly` no puede ser eliminada ni redefinida. Intentar hacerlo genera un error: `cannot overwrite readonly function`."
```

### 13 — `local` con inicialización
```
metadata:
  materia: "bash"
  tema: "funciones-en-bash"
  nivel: "intermedio"
  tags: ["local", "inicializacion", "sintaxis"]
enunciado:
  Uno_de:
    - "¿Es verdadero o falso que `local var=valor` dentro de una función es una sintaxis válida en bash?"
    - "Afirmación: Se puede declarar e inicializar una variable local en la misma línea usando `local nombre=valor`."
respuesta: "verdadero"
tipo: vf
pasos:
  - "Verificar la sintaxis de `local`."
  - "Confirmar si permite asignación simultánea."
  - "Validar la afirmación como correcta."
explicacion: "La sintaxis `local var=valor` es válida y común. Inicializa la variable local inmediatamente después de declararla."
```

### 14 — `shift` en funciones
```
metadata:
  materia: "bash"
  tema: "funciones-en-bash"
  nivel: "intermedio"
  tags: ["shift", "argumentos", "consumo"]
enunciado:
  Uno_de:
    - "¿Qué efecto tiene ejecutar `shift 2` dentro de una función?"
    - "Al usar `shift 2` en una función, ¿cuántos argumentos posicionales se eliminan de la lista de argumentos de la función?"
respuesta: "dos argumentos"
tipo: completar
pasos:
  - "Entender que `shift` mueve los argumentos hacia la izquierda."
  - "Interpretar el argumento numérico como la cantidad a desplazar."
  - "Concluir que `shift 2` descarta `$1` y `$2`."
explicacion: "`shift n` descarta los primeros `n` argumentos. `shift 2` elimina `$1` y `$2`, haciendo que `$3` pase a ser `$1`, etc."
```

### 15 — `return` sin valor
```
metadata:
  materia: "bash"
  tema: "funciones-en-bash"
  nivel: "intermedio"
  tags: ["retorno", "default", "codigo"]
enunciado:
  Uno_de:
    - "Si una función termina con `return` sin especificar un número, ¿qué valor se devuelve por defecto?"
    - "¿Cuál es el código de salida implícito de una función en bash si no se especifica explícitamente en `return`?"
respuesta: "0"
tipo: completar
pasos:
  - "Recordar el comportamiento de retorno por defecto."
  - "Identificar que 0 indica éxito."
  - "Confirmar que es el valor estándar."
explicacion: "Si `return` se omite o se ejecuta sin argumento, la función devuelve el estado de salida del último comando ejecutado dentro de ella. Si no hubo comandos, o si se usa `return` solo, el comportamiento puede variar, pero típicamente se asume 0 o el último estado. Sin embargo, la pregunta se refiere a `return` sin args explícitos en muchos contextos de documentación básica, pero técnicamente devuelve el estado del último comando. Ajustemos para ser precisos: `return` sin args devuelve el estado del último comando. Pero si la pregunta es 'qué valor se devuelve si NO hay último comando o es el default conceptual', a menudo se enseña como 0. Mejor: `return` sin argumento devuelve el estado de salida del último comando ejecutado. Si la función está vacía, devuelve 0. Vamos a usar `ultimo comando` como respuesta más precisa, pero el formato pide un literal corto. Cambiemos la pregunta para ser inequívoca: `return 0` es explícito. Pregunta: ¿Qué valor devuelve `return` si se ejecuta tras un comando exitoso (código 0) y no se especifica otro número?"
respuesta: "0"
tipo: completar
pasos:
  - "Analizar `return` sin argumentos."
  - "Determina que devuelve el estado del último comando."
  - "Si el último comando fue exitoso, el valor es 0."
explicacion: "`return` sin argumentos devuelve el estado de salida del último comando ejecutado dentro de la función. Si el último comando tuvo éxito, el valor es 0."
```

### 16 — `trap` en funciones
```
metadata:
  materia: "bash"
  tema: "funciones-en-bash"
  nivel: "intermedio"
  tags: ["trap", "limpieza", "senales"]
enunciado:
  Uno_de:
    - "¿Qué comando se usa dentro de una función para establecer un manejador de señales que se ejecute al salir de la función o al recibir una señal?"
    - "Para ejecutar código de limpieza automáticamente cuando una función termina, ¿qué builtin de bash se utiliza?"
respuesta: "trap"
tipo: completar
pasos:
  - "Identificar la necesidad de gestión de eventos/salida."
  - "Recordar el comando para manejar señales y salidas."
  - "Confirmar que `trap` es el comando adecuado."
explicacion: "`trap` permite especificar comandos a ejecutar cuando se reciben señales o cuando la función termina (si se usa `RETURN` como señal)."
```

### 17 — `local` vs global en recursión
```
metadata:
  materia: "bash"
  tema: "funciones-en-bash"
  nivel: "intermedio"
  tags: ["recursion", "local", "estado"]
enunciado:
  Uno_de:
    - "En una función recursiva, ¿por qué es crítico usar `local` para las variables de control?"
    - "Si no se usa `local` en una función recursiva, ¿qué problema ocurre con las variables compartidas?"
respuesta: "colision de variables"
tipo: completar
pasos:
  - "Analizar el alcance de variables en recursión."
  - "Determinar que todas las llamadas comparten el mismo espacio de nombres global si no se usa `local`."
  - "Nombrar el problema resultante."
explicacion: "Sin `local`, las variables se vuelven globales. En recursión, esto causa colisiones de estado entre la llamada actual y las llamadas anidadas, corrompiendo la lógica."
```

### 18 — `declare -i` en funciones
```
metadata:
  materia: "bash"
  tema: "funciones-en-bash"
  nivel: "intermedio"
  tags: ["tipos", "entero", "declaracion"]
enunciado:
  Uno_de:
    - "¿Qué hace `declare -i var` dentro de una función?"
    - "Si se usa `declare -i` para una variable local en una función, ¿qué operación se aplica automáticamente a las asignaciones?"
respuesta: "aritmetica"
tipo: completar
pasos:
  - "Identificar el flag `-i` en `declare`."
  - "Recordar que `-i` significa 'integer'."
  - "Concluir que las operaciones son aritméticas."
explicacion: "`declare -i` hace que la variable se trate como un entero. Las asignaciones se evalúan como expresiones aritméticas."
```

### 19 — `unset` de funciones
```
metadata:
  materia: "bash"
  tema: "funciones-en-bash"
  nivel: "intermedio"
  tags: ["eliminacion", "unset", "limpieza"]
enunciado:
  Uno_de:
    - "¿Qué comando se usa para eliminar una función del entorno bash?"
    - "Para borrar una función definida previamente, ¿cuál es la sintaxis correcta?"
respuesta: "unset -f"
tipo: completar
pasos:
  - "Buscar la forma de eliminar funciones."
  - "Recordar que `unset` elimina variables."
  - "Identificar la opción `-f` para funciones."
explicacion: "`unset -f nombre_funcion` elimina la definición de la función del shell actual, liberándola del entorno."
```

### 20 — `printf` vs `echo` en funciones
```
metadata:
  materia: "bash"
  tema: "funciones-en-bash"
  nivel: "intermedio"
  tags: ["salida", "formato", "comparacion"]
enunciado:
  Uno_de:
    - "¿Por qué se recomienda usar `printf` en lugar de `echo` para generar salida desde funciones en scripts portables?"
    - "Al generar salida formateada en una función, ¿qué comando es más seguro y portable que `echo`?"
respuesta: "printf"
tipo: completar
pasos:
  - "Comparar `echo` y `printf`."
  - "Identificar que `echo` tiene comportamiento inconsistente entre shells."
  - "Seleccionar `printf` como la alternativa estándar."
explicacion: "`printf` es un builtin estándar POSIX con comportamiento consistente en todos los shells, mientras que `echo` puede interpretar secuencias de escape o flags de forma diferente según la implementación."
```

### 21 — `caller` builtin
```
metadata:
  materia: "bash"
  tema: "funciones-en-bash"
  nivel: "intermedio"
  tags: ["debug", "pila", "caller"]
enunciado:
  Uno_de:
    - "¿Qué builtin permite obtener información sobre la función que llamó a la función actual?"
    - "Para imprimir la pila de llamadas en bash, ¿qué comando se usa dentro de una función?"
respuesta: "caller"
tipo: completar
pasos:
  - "Buscar información sobre la pila de ejecución."
  - "Identificar el comando `caller`."
  - "Confirmar su uso para depuración."
explicacion: "`caller` imprime el número de línea y nombre de la función que llamó a la función actual. Útil para depurar la pila de llamadas."
```

### 22 — `local` en bucles
```
metadata:
  materia: "bash"
  tema: "funciones-en-bash"
  nivel: "intermedio"
  tags: ["bucles", "local", "ambito"]
enunciado:
  Uno_de:
    - "¿Es verdadero o falso que declarar `local` dentro de un bucle `for` dentro de una función crea una nueva variable local en cada iteración?"
    - "Afirmación: El alcance de `local` se limita a la función, no a la iteración del bucle dentro de ella."
respuesta: "verdadero"
tipo: vf
pasos:
  - "Analizar el alcance de `local`."
  - "Determinar si se re-declara en cada iteración o se reutiliza."
  - "Confirmar que se reutiliza la misma variable local."
explicacion: "`local` crea una variable en el ámbito de la función. Declararla dentro de un bucle no crea una nueva variable en cada iteración; se reutiliza la misma variable local."
```

### 23 — `return` con valor no numérico
```
metadata:
  materia: "bash"
  tema: "funciones-en-bash"
  nivel: "intermedio"
  tags: ["retorno", "error", "validacion"]
enunciado:
  Uno_de:
    - "¿Qué ocurre si se intenta usar `return "texto"` en bash?"
    - "Si se pasa una cadena no numérica a `return`, ¿qué sucede?"
respuesta: "error"
tipo: completar
pasos:
  - "Recordar que los códigos de salida deben ser enteros."
  - "Determinar que bash valida el tipo."
  - "Concluir que genera un error."
explicacion: "`return` requiere un argumento entero. Si se pasa una cadena no numérica, bash genera un error: `return: can only `return' a number`."
```

### 24 — `local -a` para arrays
```
metadata:
  materia: "bash"
  tema: "funciones-en-bash"
  nivel: "intermedio"
  tags: ["arrays", "local", "declaracion"]
enunciado:
  Uno_de:
    - "¿Qué sintaxis se usa para declarar un array local dentro de una función?"
    - "Para crear un array que no afecte al array global con el mismo nombre, ¿qué modificador se usa junto con `local`?"
respuesta: "local -a"
tipo: completar
pasos:
  - "Identificar la necesidad de arrays locales."
  - "Recordar que `-a` indica array en `declare`."
  - "Combinar con `local`."
explicacion: "`local -a nombre_array` declara una variable local que es un array. Sin `-a`, se crea como una cadena simple."
```

### 25 — `set -e` en funciones
```
metadata:
  materia: "bash"
  tema: "funciones-en-bash"
  nivel: "intermedio"
  tags: ["errexit", "set", "comportamiento"]
enunciado:
  Uno_de:
    - "¿Es verdadero o falso que `set -e` dentro de una función hace que el script principal se detenga si la función falla?"
    - "Afirmación: Si una función tiene `set -e` y ejecuta un comando que falla, el script principal se termina inmediatamente."
respuesta: "falso"
tipo: vf
pasos:
  - "Analizar el alcance de `set -e`."
  - "Determinar si afecta solo a la función o al script."
  - "En bash, `set -e` en una función no propaga la salida automática al llamador a menos que la función termine con error."
explicacion: "`set -e` en una función no hace que el script principal salga automáticamente si la función falla. La función debe terminar con un código de error no cero, y el llamador debe verificarlo. El comportamiento de `errexit` no se propaga automáticamente al entorno externo de la misma manera."
```