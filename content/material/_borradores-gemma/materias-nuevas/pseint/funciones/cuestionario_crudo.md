### 1 — Sintaxis de definición de función
```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "intermedio"
  tags: ["definicion", "procedimiento", "funcion"]
respuesta: verdadero
tipo: vf
enunciado: En PSeInt, una función debe obligatoriamente devolver un valor mediante la palabra clave `Retornar` o `Return`, mientras que un procedimiento no requiere devolver nada.
uno_de:
  - "Verifica la sintaxis de definición de funciones en PSeInt."
pasos:
  - "Identificar la diferencia entre función y procedimiento en PSeInt."
  - "Confirmar que las funciones devuelven un valor y los procedimientos no."
explicacion: En PSeInt, las funciones se definen para calcular y retornar un valor único, mientras que los procedimientos realizan acciones sin retornar un valor directo al contexto de llamada.

### 2 — Palabra clave para definir función
```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "intermedio"
  tags: ["definicion", "funcion", "sintaxis"]
respuesta: "Funcion"
respuestas_validas:
  - "Funcion"
  - "funcion"
tipo: completar
enunciado: Completa la línea de código para definir una nueva función en PSeInt: _____ MiFuncion(x):
uno_de:
  - "Identificar la palabra clave reservada para declarar funciones."
pasos:
  - "Recordar la sintaxis básica de declaración en PSeInt."
  - "Escribir la palabra clave que inicia la definición de una función."
explicacion: La palabra clave `Funcion` se utiliza en PSeInt para iniciar la definición de una función, seguida del nombre y los parámetros entre paréntesis.

### 3 — Palabra clave para definir procedimiento
```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "intermedio"
  tags: ["definicion", "procedimiento", "sintaxis"]
respuesta: "Procedimiento"
respuestas_validas:
  - "Procedimiento"
  - "procedimiento"
tipo: completar
enunciado: Completa la línea de código para definir un nuevo procedimiento en PSeInt: _____ MiProcedimiento(y):
uno_de:
  - "Identificar la palabra clave reservada para declarar procedimientos."
pasos:
  - "Recordar la sintaxis básica de declaración en PSeInt."
  - "Escribir la palabra clave que inicia la definición de un procedimiento."
explicacion: La palabra clave `Procedimiento` se utiliza en PSeInt para iniciar la definición de un procedimiento, que ejecuta una serie de instrucciones sin retornar un valor.

### 4 — Palabra clave para retorno de función
```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "intermedio"
  tags: ["retorno", "funcion", "sintaxis"]
respuesta: "Retornar"
respuestas_validas:
  - "Retornar"
  - "retornar"
tipo: completar
enunciado: Dentro de una función en PSeInt, ¿qué palabra clave se usa para enviar el valor de vuelta al llamador: _____ valor_final;
uno_de:
  - "Identificar la instrucción de retorno en PSeInt."
pasos:
  - "Analizar cómo las funciones devuelven resultados en PSeInt."
  - "Escribir la palabra clave que finaliza la función con un valor."
explicacion: La palabra clave `Retornar` (o `Return`) se usa dentro de una función para especificar el valor que la función devuelve al punto desde donde fue llamada.

### 5 — Llamada a función con parámetro
```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "intermedio"
  tags: ["llamada", "parametro", "sintaxis"]
respuesta: "CalcularSuma(5, 10)"
respuestas_validas:
  - "CalcularSuma(5, 10)"
  - "CalcularSuma (5, 10)"
tipo: completar
enunciado: Si tienes una función definida como `Funcion CalcularSuma(a, b):`, ¿cuál es la sintaxis correcta para llamarla y pasar los valores 5 y 10?
uno_de:
  - "Identificar la sintaxis de llamada de función con argumentos posicionales."
pasos:
  - "Observar la definición de la función y sus parámetros."
  - "Escribir el nombre de la función seguido de los argumentos entre paréntesis."
explicacion: Para llamar a una función en PSeInt, se escribe su nombre seguido de los argumentos reales entre paréntesis, separados por comas si son múltiples.

### 6 — Paso de parámetros por valor
```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "intermedio"
  tags: ["parametros", "valor", "comportamiento"]
respuesta: "falso"
tipo: vf
enunciado: En PSeInt, por defecto, los parámetros de una función se pasan por referencia, lo que significa que la función puede modificar el valor original de la variable usada en la llamada.
uno_de:
  - "Verificar el mecanismo de paso de parámetros por defecto en PSeInt."
pasos:
  - "Analizar si las modificaciones dentro de la función afectan al contexto externo."
  - "Confirmar que PSeInt usa paso por valor por defecto a menos que se especifique lo contrario."
explicacion: En PSeInt, los parámetros se pasan por valor por defecto. Para pasar por referencia y permitir modificaciones externas, se debe usar explícitamente la palabra clave `PorReferencia` en la definición.

### 7 — Paso de parámetros por referencia
```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "intermedio"
  tags: ["parametros", "referencia", "sintaxis"]
respuesta: "PorReferencia"
respuestas_validas:
  - "PorReferencia"
  - "porreferencia"
tipo: completar
enunciado: Para permitir que una función modifique la variable original pasada como argumento en PSeInt, se debe usar la palabra clave _____ antes del nombre del parámetro en la definición de la función.
uno_de:
  - "Identificar la palabra clave para paso por referencia en PSeInt."
pasos:
  - "Recordar cómo declarar parámetros que permiten mutación externa."
  - "Escribir la palabra clave reservada para este propósito."
explicacion: La palabra clave `PorReferencia` se coloca antes del nombre del parámetro en la definición de la función para indicar que se pasa la dirección de memoria de la variable, permitiendo su modificación.

### 8 — Ámbito de variables locales
```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "intermedio"
  tags: ["ambito", "variables", "locas"]
respuesta: "verdadero"
tipo: vf
enunciado: Las variables declaradas dentro de una función en PSeInt son locales a esa función y no son accesibles desde el cuerpo principal del programa ni desde otras funciones, a menos que se pasen como parámetros o se usen variables globales.
uno_de:
  - "Verificar el alcance (scope) de las variables declaradas internamente."
pasos:
  - "Analizar la visibilidad de las variables dentro del bloque de la función."
  - "Confirmar que no hay acceso directo al exterior sin mecanismos específicos."
explicacion: En PSeInt, las variables declaradas dentro de una función tienen ámbito local y no son visibles fuera de ella, promoviendo el encapsulamiento.

### 9 — Declaración de variable global
```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "intermedio"
  tags: ["ambito", "globales", "declaracion"]
respuesta: "Global"
respuestas_validas:
  - "Global"
  - "global"
tipo: completar
enunciado: Para que una variable sea accesible desde cualquier función y el cuerpo principal en PSeInt, se debe declarar con la palabra clave _____ al inicio del algoritmo.
uno_de:
  - "Identificar la palabra clave para declarar variables de ámbito global."
pasos:
  - "Recordar cómo declarar variables fuera del alcance local."
  - "Escribir la palabra clave que hace visible la variable en todo el programa."
explicacion: La palabra clave `Global` se usa para declarar variables que tienen alcance en todo el algoritmo, permitiendo su acceso y modificación desde funciones y el cuerpo principal.

### 10 — Error común: nombre de función
```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "intermedio"
  tags: ["errores", "nombres", "sintaxis"]
respuesta: "verdadero"
tipo: vf
enunciado: En PSeInt, el nombre de una función puede coincidir con el nombre de una variable ya declarada en el cuerpo principal, ya que los espacios de nombres están separados automáticamente.
uno_de:
  - "Verificar si hay conflicto de nombres entre funciones y variables."
pasos:
  - "Analizar si PSeInt permite homonimia entre identificadores de diferentes tipos."
  - "Confirmar que esto genera un error de compilación en PSeInt."
explicacion: En PSeInt, no se permite que una función tenga el mismo nombre que una variable o procedimiento ya declarado, ya que esto genera un error de definición duplicada o conflicto de nombres.

### 11 — Función sin parámetros
```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "intermedio"
  tags: ["parametros", "vacios", "sintaxis"]
respuesta: "()"
respuestas_validas:
  - "()"
  - "( ) "
tipo: completar
enunciado: Si una función en PSeInt no recibe ningún parámetro, ¿qué se debe escribir entre paréntesis después del nombre de la función en su definición? Ejemplo: `Funcion MiFuncion _____ :`
uno_de:
  - "Identificar la sintaxis para funciones sin parámetros."
pasos:
  - "Observar la definición de una función que no requiere entrada."
  - "Escribir los paréntesis vacíos que indican la ausencia de parámetros."
explicacion: Las funciones sin parámetros en PSeInt requieren paréntesis vacíos `()` después del nombre de la función en su definición, aunque a veces PSeInt permite omitirlos, la sintaxis estándar los incluye.

### 12 — Llamada a función en asignación
```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "intermedio"
  tags: ["llamada", "asignacion", "sintaxis"]
respuesta: "resultado = CalcularDoble(x)"
respuestas_validas:
  - "resultado = CalcularDoble(x)"
  - "resultado = CalcularDoble (x)"
tipo: completar
enunciado: Si `CalcularDoble` es una función que retorna el doble de un número, ¿cómo se asigna su resultado a la variable `resultado` pasando `x` como argumento?
uno_de:
  - "Identificar la sintaxis de asignación del retorno de una función."
pasos:
  - "Analizar cómo capturar el valor de retorno en una variable."
  - "Escribir la asignación completa con la llamada a la función."
explicacion: El valor retornado por una función se asigna a una variable usando el operador `=`, colocando la llamada a la función en el lado derecho de la asignación.

### 13 — Procedimiento que modifica variable global
```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "intermedio"
  tags: ["procedimiento", "global", "modificacion"]
respuesta: "verdadero"
tipo: vf
enunciado: Un procedimiento en PSeInt puede modificar directamente el valor de una variable global declarada con `Global` sin necesidad de pasarla como parámetro.
uno_de:
  - "Verificar si los procedimientos pueden acceder y modificar variables globales."
pasos:
  - "Analizar el acceso a variables globales desde dentro de un procedimiento."
  - "Confirmar que la modificación es posible y afecta al contexto global."
explicacion: Los procedimientos y funciones en PSeInt tienen acceso directo a las variables globales declaradas, pudiendo leerlas y modificarlas sin que sean parámetros.

### 14 — Retorno múltiple (truco común)
```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "intermedio"
  tags: ["retorno", "multiple", "procedimiento"]
respuesta: "falso"
tipo: vf
enunciado: Una función en PSeInt puede retornar directamente múltiples valores separados por comas en una sola instrucción `Retornar`, como `Retornar a, b`.
uno_de:
  - "Verificar si PSeInt soporta retorno múltiple nativo en funciones."
pasos:
  - "Analizar la sintaxis de la instrucción `Retornar` en PSeInt."
  - "Confirmar que solo permite un valor o expresión, no una lista."
explicacion: En PSeInt, una función solo puede retornar un único valor. Para simular múltiples retornos, se deben usar variables globales o pasar variables por referencia como parámetros.

### 15 — Nombre de función reservado
```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "intermedio"
  tags: ["nombres", "reservados", "errores"]
respuesta: "verdadero"
tipo: vf
enunciado: No se puede nombrar a una función en PSeInt con el mismo nombre que una palabra clave reservada del lenguaje, como `Si`, `Mientras` o `Funcion`.
uno_de:
  - "Verificar si las palabras clave pueden usarse como identificadores."
pasos:
  - "Analizar las restricciones de nomenclatura en PSeInt."
  - "Confirmar que usar palabras clave como nombres genera error de sintaxis."
explicacion: Las palabras clave reservadas de PSeInt no pueden ser usadas como nombres de variables, funciones o procedimientos, ya que tienen un significado específico en el lenguaje.

### 16 — Llamada recursiva básica
```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "intermedio"
  tags: ["recursion", "llamada", "sintaxis"]
respuesta: "verdadero"
tipo: vf
enunciado: En PSeInt, una función puede llamarse a sí misma dentro de su propio cuerpo para implementar algoritmos recursivos, siempre que se defina una condición de parada.
uno_de:
  - "Verificar si la recursión está soportada en PSeInt."
pasos:
  - "Analizar si la llamada interna a la misma función es válida."
  - "Confirmar que la recursión es posible y común en algoritmos como factorial."
explicacion: PSeInt soporta la recursión, permitiendo que una función se llame a sí misma. Es fundamental incluir una condición base para evitar el desbordamiento de pila.

### 17 — Tipo de dato del retorno
```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "intermedio"
  tags: ["tipos", "retorno", "dinamico"]
respuesta: "falso"
tipo: vf
enunciado: En PSeInt, al definir una función, es obligatorio especificar el tipo de dato (ej: `Entero`, `Caracter`) que la función retornará en la línea de definición.
uno_de:
  - "Verificar si PSeInt requiere anotación de tipo de retorno."
pasos:
  - "Analizar la sintaxis de definición de funciones en PSeInt."
  - "Confirmar que PSeInt es de tipado dinámico y no requiere especificar el tipo de retorno."
explicacion: PSeInt es un lenguaje de tipado dinámico. No es necesario (ni posible en la sintaxis estándar) especificar el tipo de dato de retorno en la definición de la función; el tipo se infiere del valor retornado.

### 18 — Uso de función en condición
```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "intermedio"
  tags: ["condicion", "uso", "sintaxis"]
respuesta: "Si EsPar(x) Entonces"
respuestas_validas:
  - "Si EsPar(x) Entonces"
  - "Si EsPar (x) Entonces"
tipo: completar
enunciado: Si `EsPar` es una función que retorna verdadero o falso, ¿cómo se usa en una estructura condicional `Si` en PSeInt para evaluar si `x` es par?
uno_de:
  - "Identificar la sintaxis de uso de función booleana en condición."
pasos:
  - "Analizar cómo integrar el retorno de una función en un `Si`."
  - "Escribir la estructura condicional completa con la llamada a la función."
explicacion: El retorno de una función booleana se puede usar directamente en la condición de un `Si`, escribiendo la llamada a la función entre `Si` y `Entonces`.

### 19 — Parámetro con nombre (PSeInt no soporta)
```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "intermedio"
  tags: ["parametros", "nombrados", "limitaciones"]
respuesta: "falso"
tipo: vf
enunciado: PSeInt soporta la llamada a funciones con parámetros nombrados, permitiendo llamar a `Funcion(nombre="Juan", edad=20)` en lugar de posicional.
uno_de:
  - "Verificar si PSeInt soporta parámetros nombrados en llamadas."
pasos:
  - "Analizar la sintaxis de llamada a funciones en PSeInt."
  - "Confirmar que PSeInt requiere parámetros posicionales y no tiene soporte nativo para parámetros nombrados."
explicacion: PSeInt no soporta parámetros nombrados. Los argumentos deben pasarse en el orden definido en la función, utilizando sintaxis posicional.

### 20 — Inicialización de variable de retorno
```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "intermedio"
  tags: ["retorno", "inicializacion", "buenas-practicas"]
respuesta: "verdadero"
tipo: vf
enunciado: Es una buena práctica en PSeInt inicializar la variable que se usará para el retorno dentro de la función antes del bucle o lógica principal, para evitar valores indeterminados en caminos de ejecución no tomados.
uno_de:
  - "Verificar la importancia de inicializar la variable de retorno."
pasos:
  - "Analizar el comportamiento de variables no inicializadas en PSeInt."
  - "Confirmar que inicializarla previene errores lógicos en casos donde `Retornar` no se ejecuta inmediatamente."
explicacion: Aunque PSeInt suele inicializar variables a cero o vacío, es buena práctica inicializar explícitamente la variable de retorno para garantizar un valor definido en todos los caminos de ejecución.

### 21 — Diferencia entre `Return` y `Retornar`
```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "intermedio"
  tags: ["sintaxis", "keywords", "idioma"]
respuesta: "verdadero"
tipo: vf
enunciado: En PSeInt, tanto `Retornar` como `Return` son palabras clave válidas y equivalentes para finalizar una función y devolver un valor.
uno_de:
  - "Verificar si ambas palabras clave son aceptadas por PSeInt."
pasos:
  - "Analizar la documentación oficial o comportamiento del compilador de PSeInt."
  - "Confirmar que PSeInt acepta ambas formas, siendo `Retornar` la más común en español."
explicacion: PSeInt admite tanto `Retornar` como `Return` para devolver el valor de una función, facilitando la adopción por usuarios de distintos orígenes de lenguaje.

### 22 — Función que llama a procedimiento
```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "intermedio"
  tags: ["llamada", "interoperabilidad", "sintaxis"]
respuesta: "verdadero"
tipo: vf
enunciado: Una función en PSeInt puede llamar a un procedimiento definido en el mismo algoritmo, ejecutando sus instrucciones internas.
uno_de:
  - "Verificar si las funciones pueden invocar procedimientos."
pasos:
  - "Analizar la interoperabilidad entre funciones y procedimientos en PSeInt."
  - "Confirmar que la llamada es válida y se ejecuta el cuerpo del procedimiento."
explicacion: Las funciones en PSeInt pueden llamar a procedimientos. La llamada se realiza escribiendo el nombre del procedimiento seguido de sus parámetros (si los tiene), sin asignar el resultado.

### 23 — Procedimiento que llama a función
```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "intermedio"
  tags: ["llamada", "interoperabilidad", "sintaxis"]
respuesta: "verdadero"
tipo: vf
enunciado: Un procedimiento en PSeInt puede llamar a una función y usar su valor de retorno para tomar decisiones o asignarlo a una variable local.
uno_de:
  - "Verificar si los procedimientos pueden invocar funciones."
pasos:
  - "Analizar la interoperabilidad desde procedimiento a función."
  - "Confirmar que la llamada es válida y el retorno puede ser capturado."
explicacion: Los procedimientos pueden llamar a funciones. El valor retornado por la función puede ser asignado a una variable local dentro del procedimiento o usado en expresiones.

### 24 — Error: llamar procedimiento como función
```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "intermedio"
  tags: ["errores", "asignacion", "procedimiento"]
respuesta: "verdadero"
tipo: vf
enunciado: Si intentas asignar el resultado de un procedimiento a una variable en PSeInt (ej: `x = MiProcedimiento()`), el compilador generará un error porque los procedimientos no retornan valores.
uno_de:
  - "Verificar el comportamiento al asignar un procedimiento a una variable."
pasos:
  - "Analizar qué ocurre al tratar de capturar el retorno de un procedimiento."
  - "Confirmar que PSeInt detecta este error de tipo o semántico."
explicacion: En PSeInt, asignar el resultado de un procedimiento a una variable genera un error, ya que los procedimientos no tienen un valor de retorno asignable. Solo las funciones retornan valores.

### 25 — Scope de parámetros vs globales
```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "intermedio"
  tags: ["ambito", "shadowing", "precedencia"]
respuesta: "falso"
tipo: vf
enunciado: Si una función tiene un parámetro llamado `x` y también existe una variable global llamada `x`, la referencia a `x` dentro de la función siempre apuntará a la variable global, ignorando el parámetro.
uno_de:
  - "Verificar la precedencia de nombres entre parámetros y globales."
pasos:
  - "Analizar cómo PSeInt resuelve el nombre `x` dentro de la función."
  - "Confirmar que el parámetro local tiene precedencia sobre la variable global (shadowing)."
explicacion: En PSeInt, los parámetros de la función y las variables locales tienen precedencia sobre las variables globales con el mismo nombre. La referencia a `x` dentro de la función apunta al parámetro, no a la global.