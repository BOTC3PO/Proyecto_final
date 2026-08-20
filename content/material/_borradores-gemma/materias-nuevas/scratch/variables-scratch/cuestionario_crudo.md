### 1 — Variable global en Scratch
```
metadata:
  materia: "scratch"
  tema: "variables-scratch"
  nivel: "intermedio"
  tags: ["variables-globales", "scope"]
respuesta: verdadero
tipo: vf
enunciado: En Scratch, si creas una variable y NO marcas la casilla "Para todos los sprites", dicha variable solo es accesible desde el sprite que la creó.
pasos:
  - "Verificar el comportamiento de las variables locales vs globales en Scratch 3.0"
  - "Confirmar que la casilla 'Para todos los sprites' define el alcance (scope) de la variable"
  - "Deshabilitar la casilla limita la visibilidad y accesibilidad al sprite actual"
explicacion: En Scratch, las variables son globales por defecto. Para que una variable sea local (solo accesible por el sprite que la creó), debes desmarcar explícitamente la opción "Para todos los sprites". Si no se marca, la variable es global y cualquier sprite puede leerla o modificarla.
```

### 2 — Operador de concatenación
```
metadata:
  materia: "scratch"
  tema: "variables-scratch"
  nivel: "intermedio"
  tags: ["texto", "operadores"]
respuesta: "nombre + \" " + edad"
tipo: completar
enunciado: Tienes una variable `nombre` con el valor "Ana" y una variable `edad` con el valor 25. Escribe la expresión exacta dentro del bloque de texto para que el resultado sea "Ana 25".
pasos:
  - "Identificar que se requiere concatenar texto y un número"
  - "Recordar que en Scratch se usa el bloque 'unir' o el operador + para cadenas"
  - "La expresión debe incluir el espacio literal entre nombre y edad"
explicacion: Para unir cadenas de texto en Scratch, se utiliza el bloque 'unir' o el operador `+` dentro de un bloque de entrada de texto. La expresión `nombre + " " + edad` concatena el nombre, un espacio en blanco y la edad, produciendo "Ana 25".
```

### 3 — Acceso a variable de otro sprite
```
metadata:
  materia: "scratch"
  tema: "variables-scratch"
  nivel: "intermedio"
  tags: ["inter-sprite", "comunicacion"]
respuesta: "nombre del otro sprite"
tipo: completar
enunciado: En un proyecto donde el Sprite1 necesita leer el valor de la variable `puntos` que pertenece al Sprite2, ¿qué prefijo debes usar en el bloque de variable de Sprite1?
pasos:
  - "Reconocer que las variables globales son compartidas por defecto"
  - "Identificar que para especificar la fuente de datos se usa el nombre del sprite"
  - "El formato es 'nombre del sprite : variable'"
explicacion: Aunque las variables globales se comparten automáticamente, es buena práctica y a veces necesario especificar explícitamente el sprite origen para evitar ambigüedades o para leer valores en contextos específicos. El formato es `nombre del sprite : nombre de la variable`.
```

### 4 — Tipo de dato en Scratch
```
metadata:
  materia: "scratch"
  tema: "variables-scratch"
  nivel: "intermedio"
  tags: ["tipos-datos", "dinamico"]
respuesta: verdadero
tipo: vf
enunciado: Scratch es un lenguaje de tipado estático fuerte, por lo que debes declarar explícitamente si una variable será de tipo número o texto antes de usarla.
pasos:
  - "Analizar la naturaleza de las variables en Scratch"
  - "Verificar si existen declaraciones de tipo explícitas"
  - "Observar que Scratch asigna el tipo automáticamente según el uso"
explicacion: Scratch es un lenguaje de tipado dinámico. Las variables no tienen un tipo fijo declarado; pueden contener números, texto o listas y cambiar de tipo durante la ejecución según el valor que se les asigne.
```

### 5 — Resetear variable en bucle
```
metadata:
  materia: "scratch"
  tema: "variables-scratch"
  nivel: "intermedio"
  tags: ["bucles", "inicializacion"]
respuesta: "poner [contador] a (0)"
tipo: completar
enunciado: Quieres contar cuántas veces se presiona una tecla. Antes de iniciar el bucle `repetir hasta que <tecla pulsada?>`, debes inicializar la variable `contador`. Escribe el bloque de asignación correcto.
pasos:
  - "Determinar el estado inicial necesario para un contador"
  - "Seleccionar el bloque de asignación de variable"
  - "Establecer el valor numérico inicial a cero"
explicacion: Para contar eventos desde cero, la variable acumuladora debe inicializarse a 0 antes de comenzar la lógica de incremento. El bloque correcto es `poner [contador] a (0)`.
```

### 6 — Variable de lista
```
metadata:
  materia: "scratch"
  tema: "variables-scratch"
  nivel: "intermedio"
  tags: ["listas", "variables"]
respuesta: verdadero
tipo: vf
enunciado: En Scratch, una variable puede contener una lista (array) de elementos, permitiendo almacenar múltiples valores bajo un mismo nombre.
pasos:
  - "Verificar las capacidades de almacenamiento de variables en Scratch"
  - "Confirmar si los arrays/listas son un tipo de variable soportado"
  - "Recordar que se crean desde el menú de variables > 'Crear una lista'"
explicacion: Scratch soporta variables de tipo lista. Estas permiten almacenar colecciones de datos, añadir elementos, borrarlos, acceder por índice y verificar si contienen un valor específico.
```

### 7 — Operador de comparación
```
metadata:
  materia: "scratch"
  tema: "variables-scratch"
  nivel: "intermedio"
  tags: ["condicionales", "comparacion"]
respuesta: "<(puntos) > (100)>"
tipo: completar
enunciado: Necesitas verificar si la variable `puntos` es estrictamente mayor que 100 dentro de un bloque `si <condicion>`. Escribe el bloque de condición completo.
pasos:
  - "Identificar la necesidad de comparar una variable con un número"
  - "Seleccionar el operador de comparación 'mayor que'"
  - "Colocar la variable en el lado izquierdo y el literal en el derecho"
explicacion: El bloque de condición para mayor estricto es `(variable) > (valor)`. En este caso, `<(puntos) > (100)>` devuelve verdadero si puntos es 101 o más.
```

### 8 — Variable local vs global en clon
```
metadata:
  materia: "scratch"
  tema: "variables-scratch"
  nivel: "intermedio"
  tags: ["clones", "scope", "variables"]
respuesta: falso
tipo: vf
enunciado: Cuando creas una variable local (para este solo sprite) y luego creas un clon de ese sprite, el clon comparte la misma instancia de la variable local con el original, perdiendo el aislamiento.
pasos:
  - "Analizar el alcance de las variables locales en el sistema de clones de Scratch"
  - "Determinar si los clones heredan o crean nuevas instancias de variables locales"
  - "Verificar el comportamiento de aislamiento de estado"
explicacion: En Scratch, cada clon de un sprite tiene su propia copia independiente de las variables locales de ese sprite. Las variables globales sí se comparten, pero las locales están aisladas por clon, permitiendo comportamientos independientes.
```

### 9 — Cambio de variable en evento
```
metadata:
  materia: "scratch"
  tema: "variables-scratch"
  nivel: "intermedio"
  tags: ["eventos", "incremento"]
respuesta: "cambiar [vidas] por (-1)"
tipo: completar
enunciado: Al colisionar con un enemigo, quieres restar 1 a la variable `vidas`. Escribe el bloque de cambio de variable correcto.
pasos:
  - "Identificar la acción de modificación incremental"
  - "Seleccionar el bloque 'cambiar [variable] por [valor]'"
  - "Usar un valor negativo para restar"
explicacion: El bloque `cambiar [vidas] por (-1)` es la forma idiomática en Scratch de restar un valor a una variable numérica existente. Equivale a `vidas = vidas - 1`.
```

### 10 — Variable en menú desplegable
```
metadata:
  materia: "scratch"
  tema: "variables-scratch"
  nivel: "intermedio"
  tags: ["interfaz", "seleccion"]
respuesta: verdadero
tipo: vf
enunciado: Al usar un bloque de variable en un script, Scratch ofrece automáticamente un menú desplegable que permite seleccionar entre todas las variables globales y locales disponibles en el proyecto.
pasos:
  - "Observar la interfaz de los bloques de variable en el editor"
  - "Verificar si el usuario puede elegir la variable a través de una lista"
  - "Confirmar que esta característica facilita la selección sin escribir manualmente"
explicacion: Sí, los bloques de variable incluyen un menú desplegable (dropdown) que lista todas las variables definidas en el proyecto (globales y locales del sprite actual) para evitar errores tipográficos.
```

### 11 — Variable de texto vacío
```
metadata:
  materia: "scratch"
  tema: "variables-scratch"
  nivel: "intermedio"
  tags: ["texto", "inicializacion"]
respuesta: "\"\""
tipo: completar
enunciado: Quieres crear una variable `mensaje` que empiece vacía. Escribe el literal de texto que representa una cadena vacía para asignarlo.
pasos:
  - "Determinar cómo representar un texto sin caracteres en Scratch"
  - "Usar comillas dobles sin contenido interno"
  - "Asignar este valor inicial a la variable"
explicacion: Una cadena vacía en Scratch se representa con dos comillas dobles consecutivas `""`. Asignar esto a una variable la deja sin contenido, lista para ser concatenada.
```

### 12 — Variable en bloque de entrada
```
metadata:
  materia: "scratch"
  tema: "variables-scratch"
  nivel: "intermedio"
  tags: ["bloques", "entrada"]
respuesta: verdadero
tipo: vf
enunciado: Puedes arrastrar un bloque de variable directamente dentro de un bloque de entrada (input) de otro bloque, como `decir [variable] durante (2) segundos`, para mostrar su valor actual.
pasos:
  - "Verificar la compatibilidad de tipos entre variables y entradas de texto"
  - "Confirmar que las variables se convierten a texto automáticamente al mostrarse"
  - "Observar que el bloque de variable es un tipo de entrada válido"
explicacion: Sí, los bloques de variable pueden insertarse en cualquier bloque que acepte una entrada de texto o número. Scratch convierte automáticamente el valor de la variable a texto para la salida.
```

### 13 — Variable booleana simulada
```
metadata:
  materia: "scratch"
  tema: "variables-scratch"
  nivel: "intermedio"
  tags: ["logica", "booleanos"]
respuesta: verdadero
tipo: vf
enunciado: Scratch no tiene un tipo de dato booleano nativo explícito, pero se puede simular una variable booleana usando una variable numérica donde 1 significa verdadero y 0 significa falso.
pasos:
  - "Analizar los tipos de datos primitivos de Scratch"
  - "Verificar si existe un tipo 'bool'"
  - "Evaluar patrones comunes de uso de variables numéricas como banderas"
explicacion: Scratch carece de un tipo booleano dedicado. Los desarrolladores suelen usar variables numéricas (1/0) o de texto ("si"/"no") para implementar lógica booleana, aprovechando que los bloques de condición aceptan números distintos de cero como verdaderos.
```

### 14 — Variable en clon y herencia
```
metadata:
  materia: "scratch"
  tema: "variables-scratch"
  nivel: "intermedio"
  tags: ["clones", "herencia", "variables"]
respuesta: falso
tipo: vf
enunciado: Cuando un sprite original modifica una variable global, todos los clones existentes se detienen automáticamente hasta que la variable deje de cambiar.
pasos:
  - "Analizar el impacto de la modificación de variables globales en la ejecución de clones"
  - "Verificar si hay mecanismos de bloqueo o pausa automática"
  - "Confirmar que la ejecución es concurrente e independiente"
explicacion: Las variables globales son compartidas, pero la modificación de una no pausa ni detiene la ejecución de los clones. Los clones y el sprite original ejecutan sus scripts concurrentemente (en hilos separados lógicamente) y reaccionan a los cambios de la variable según sus propios bucles.
```

### 15 — Variable de lista con índice
```
metadata:
  materia: "scratch"
  tema: "variables-scratch"
  nivel: "intermedio"
  tags: ["listas", "indices"]
respuesta: "(elemento de [lista] en (1))"
tipo: completar
enunciado: Quieres mostrar el primer elemento de la lista `miLista`. Escribe el bloque de acceso a elemento correcto.
pasos:
  - "Identificar la necesidad de acceder a un elemento por posición"
  - "Seleccionar el bloque 'elemento (i) de (lista)'"
  - "Establecer el índice en 1, ya que Scratch usa base 1"
explicacion: En Scratch, los índices de las listas comienzan en 1. Por lo tanto, para obtener el primer elemento, se usa `elemento (1) de [miLista]`.
```

### 16 — Variable en condición de bucle
```
metadata:
  materia: "scratch"
  tema: "variables-scratch"
  nivel: "intermedio"
  tags: ["bucles", "condicion"]
respuesta: "<(contador) < (10)>"
tipo: completar
enunciado: Quieres repetir un bloque 10 veces usando una variable `contador` que se incrementa en cada iteración. Escribe la condición de salida para el bloque `repetir hasta que <condicion>`.
pasos:
  - "Determinar cuándo debe terminar el bucle (cuando contador alcanza 10)"
  - "La condición debe ser verdadera cuando el bucle DEBE terminar"
  - "Usar el operador 'igual a'"
explicacion: El bloque `repetir hasta que` continúa mientras la condición es FALSA. Para parar cuando contador llega a 10, la condición debe ser `<(contador) = (10)>`. (Nota: Si se usa `repetir (10)`, no se necesita condición. Si se usa `esperar hasta que`, la lógica es diferente. Asumiendo `repetir hasta que`, la condición es `= (10)`). *Corrección*: La pregunta pide la condición para `repetir hasta que`. Si queremos repetir 10 veces empezando en 0, paramos cuando es 10. La condición es `<(contador) = (10)>`.
```

### 17 — Variable de texto con números
```
metadata:
  materia: "scratch"
  tema: "variables-scratch"
  nivel: "intermedio"
  tags: ["texto", "conversion"]
respuesta: verdadero
tipo: vf
enunciado: Si una variable `numero` contiene el texto "10" y la variable `otro` contiene el número 5, la operación `numero + otro` resulta en el número 15.
pasos:
  - "Analizar el comportamiento del operador + con tipos mixtos"
  - "Determinar si Scratch convierte texto a número automáticamente"
  - "Verificar que la concatenación es el comportamiento por defecto para texto"
explicacion: Falso. En Scratch, si uno de los operandos es texto, el operador `+` realiza concatenación. "10" + 5 resulta en "105". Para obtener 15, la variable `numero` debería ser de tipo número, no texto.
```

### 18 — Variable en menú de opciones
```
metadata:
  materia: "scratch"
  tema: "variables-scratch"
  nivel: "intermedio"
  tags: ["interfaz", "menu"]
respuesta: falso
tipo: vf
enunciado: Scratch permite crear menús desplegables dinámicos en la interfaz del proyecto que muestran los valores actuales de una variable de lista a medida que el usuario interactúa.
pasos:
  - "Verificar las capacidades de UI dinámica en Scratch"
  - "Analizar si los menús desplegables son estáticos o dinámicos"
  - "Confirmar que los menús se definen en tiempo de edición"
explicacion: Falso. Los menús desplegables (dropdowns) en Scratch se definen en tiempo de diseño (edición) y sus opciones son estáticas. No pueden actualizarse dinámicamente con los valores de una variable durante la ejecución del proyecto.
```

### 19 — Variable local en bloque de evento
```
metadata:
  materia: "scratch"
  tema: "variables-scratch"
  nivel: "intermedio"
  tags: ["eventos", "variables-locales"]
respuesta: verdadero
tipo: vf
enunciado: Si creas una variable local y la usas dentro de un script iniciado por `cuando se presione <tecla>`, la variable mantiene su valor entre diferentes pulsaciones de la tecla durante la ejecución del proyecto.
pasos:
  - "Analizar el ciclo de vida de las variables locales"
  - "Determinar si se reinician con cada evento"
  - "Confirmar que persisten mientras el proyecto esté corriendo"
explicacion: Las variables locales (y globales) persisten durante toda la ejecución del proyecto a menos que se modifiquen explícitamente. No se reinician automáticamente con cada evento, por lo que mantienen su estado entre invocaciones.
```

### 20 — Variable de lista vacía
```
metadata:
  materia: "scratch"
  tema: "variables-scratch"
  nivel: "intermedio"
  tags: ["listas", "validacion"]
respuesta: "(longitud de [lista]) = (0)"
tipo: completar
enunciado: Quieres verificar si la lista `items` está vacía antes de intentar acceder a su primer elemento. Escribe la condición de verificación correcta.
pasos:
  - "Identificar la función para obtener el tamaño de una lista"
  - "Comparar el tamaño con cero"
  - "Usar el bloque 'longitud de (lista)'"
explicacion: Para saber si una lista está vacía, se verifica si su longitud es 0. El bloque correcto es `<(longitud de [items]) = (0)>`.
```

### 21 — Variable en bloque de espera
```
metadata:
  materia: "scratch"
  tema: "variables-scratch"
  nivel: "intermedio"
  tags: ["control", "espera"]
respuesta: verdadero
tipo: vf
enunciado: El bloque `esperar hasta que <condicion>` detiene la ejecución del script actual hasta que la variable evaluada en la condición cambie a verdadero.
pasos:
  - "Analizar el comportamiento del bloque de espera condicional"
  - "Verificar si pausa la ejecución"
  - "Confirmar que reanuda cuando la condición se cumple"
explicacion: Sí, `esperar hasta que` es un bloque de control de flujo que bloquea el hilo actual hasta que la condición booleana se vuelva verdadera, momento en el cual continúa la ejecución.
```

### 22 — Variable de texto con espacios
```
metadata:
  materia: "scratch"
  tema: "variables-scratch"
  nivel: "intermedio"
  tags: ["texto", "espacios"]
respuesta: verdadero
tipo: vf
enunciado: Una variable de texto en Scratch puede contener espacios en blanco, y estos se consideran caracteres válidos dentro de la cadena.
pasos:
  - "Verificar el soporte de caracteres especiales en strings"
  - "Confirmar que los espacios no rompen la variable"
  - "Observar que los espacios se conservan en operaciones de texto"
explicacion: Sí, los espacios en blanco son caracteres válidos en las cadenas de texto de Scratch. Se pueden incluir, concatenar y manipular sin problemas.
```

### 23 — Variable en clon y reset
```
metadata:
  materia: "scratch"
  tema: "variables-scratch"
  nivel: "intermedio"
  tags: ["clones", "reset", "variables"]
respuesta: falso
tipo: vf
enunciado: Cuando un clon se elimina (se borra este clon), la variable global que estaba usando se restablece automáticamente a su valor inicial (0 o cadena vacía) para todos los sprites.
pasos:
  - "Analizar el efecto de eliminar un clon sobre las variables globales"
  - "Determinar si hay limpieza automática de estado global"
  - "Confirmar que las variables globales persisten independientemente de los clones"
explicacion: Falso. Eliminar un clon solo destruye la instancia de ese sprite. Las variables globales no se restablecen automáticamente; mantienen el último valor que se les asignó, independientemente de qué sprites o clones las hayan modificado.
```

### 24 — Variable de lista con duplicados
```
metadata:
  materia: "scratch"
  tema: "variables-scratch"
  nivel: "intermedio"
  tags: ["listas", "duplicados"]
respuesta: verdadero
tipo: vf
enunciado: Una variable de lista en Scratch puede contener múltiples elementos con el mismo valor (duplicados) y estos se consideran elementos distintos con diferentes índices.
pasos:
  - "Verificar si las listas de Scratch son conjuntos (sets) o secuencias"
  - "Confirmar la permisibilidad de valores repetidos"
  - "Observar que el acceso es por índice, no por valor único"
explicacion: Sí, las listas en Scratch son secuencias que permiten duplicados. Cada ocurrencia de un valor tiene su propio índice único, y se pueden manipular independientemente.
```

### 25 — Variable en bloque de sonido
```
metadata:
  materia: "scratch"
  tema: "variables-scratch"
  nivel: "intermedio"
  tags: ["sonido", "variable"]
respuesta: verdadero
tipo: vf
enunciado: Puedes usar una variable numérica para controlar el volumen de un sonido, por ejemplo, pasando el valor de la variable `volumen` al bloque `poner volumen en (volumen) %`.
pasos:
  - "Analizar los parámetros aceptados por el bloque de volumen"
  - "Verificar si acepta variables como entrada"
  - "Confirmar que el rango 0-100 puede ser controlado dinámicamente"
explicacion: Sí, el bloque `poner volumen en (volumen) %` acepta cualquier entrada numérica o variable. Esto permite ajustar el volumen dinámicamente durante la ejecución del proyecto.
```