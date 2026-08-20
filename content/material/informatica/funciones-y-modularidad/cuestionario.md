# Informatica — Funciones y modularidad (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de modularidad

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["conceptos", "modularidad"]

respuesta: "modularidad"
tipo: completar
respuestas_validas:
  - "modularidad"

enunciado: "La capacidad de dividir un programa complejo en partes más pequeñas, independientes y manejables se denomina ___."

explicacion: |
  La modularidad permite organizar el código en bloques lógicos, facilitando el mantenimiento y la reutilización.
```

### 2 — Componentes de una función

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["sintaxis", "conceptos"]

variables:
  escenario: uno_de([["El valor que una función recibe para procesar", "Parámetro"], ["El valor que una función devuelve al finalizar su ejecución", "Retorno"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Parámetro", "Retorno", "Llamada", "Variable local"]

enunciado: "En el contexto de una función, {escenario[0]} es el elemento que permite pasar información hacia el interior de la función."

explicacion: |
  Los parámetros son las variables de entrada que recibe una función para realizar su tarea.
```

### 3 — Reutilización de código

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["reutilizacion", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una de las principales ventajas de utilizar funciones es que permite evitar la duplicación de código, ya que una misma función puede ser invocada desde diferentes partes del programa."

explicacion: |
  Efectivamente, la reutilización es uno de los pilares de la programación modular.
```

### 4 — Flujo de ejecución

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["flujo", "orden"]

respuesta_orden: ["Definición", "Llamada", "Ejecución", "Retorno"]
tipo: ordenar
opciones_explicitas: ["Definición", "Llamada", "Ejecución", "Retorno"]

enunciado: "Ordena los pasos lógicos que ocurren cuando se utiliza una función en un programa:"

pasos:
  - "Se declara la función y su lógica."
  - "Se invoca la función desde el código principal."
  - "Se procesan las instrucciones internas."
  - "La función devuelve un valor o finaliza."

explicacion: |
  Primero se debe definir la función, luego llamarla, se ejecuta su cuerpo y finalmente retorna el control o un valor.
```

### 5 — Ámbito de las variables

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["scope", "variables"]

respuesta: "local"
tipo: completar
respuestas_validas:
  - "local"

enunciado: "Una variable declarada dentro del cuerpo de una función tiene un ámbito ___, lo que significa que no es accesible desde fuera de dicha función."

explicacion: |
  Las variables definidas dentro de una función son locales a su contexto de ejecución y no interfieren con el resto del programa.
```

### 6 — Ventajas de la modularidad

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["conceptos", "modularidad"]

respuesta: verdadero
tipo: vf

enunciado: "Dividir un programa en funciones pequeñas y reutilizables ayuda a reducir la duplicación de código y facilita el mantenimiento."

explicacion: |
  La modularidad permite que el código sea más legible y que las correcciones se realicen en un solo lugar, afectando a todas las partes que llaman a esa función.
```

### 7 — Identificación de parámetros

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["sintaxis", "parametros"]

variables:
  escenario: uno_de([["calcular_area_rectangulo", "base", "altura"], ["saludar_usuario", "nombre", "saludo"], ["sumar_dos_numeros", "a", "b"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["base", "nombre", "a"]

enunciado: "En la función {escenario[0]}({escenario[1]}, {escenario[2]}), ¿cuál es el nombre del primer parámetro?"

explicacion: |
  Los parámetros son las variables que una función recibe para procesar información. En el primer caso del escenario, el primer parámetro es {escenario[1]}.
```

### 8 — Flujo de una función con retorno

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["flujo_control", "retorno"]

variables:
  datos: uno_de([[10, 2, 20], [5, 3, 15], [8, 4, 32]])

respuesta: datos[2]
tipo: completar

enunciado: |
  Dada la siguiente función:
  def multiplicar(x, y):
      return x * y

  Si ejecutamos la llamada: resultado = multiplicar({datos[0]}, {datos[1]}), el valor de 'resultado' será ___.

pasos:
  - "Identificar los valores de entrada: x = {datos[0]} y y = {datos[1]}"
  - "Realizar la operación matemática: {datos[0]} * {datos[1]}"

explicacion: |
  La función realiza la operación de multiplicación y el comando 'return' devuelve el resultado hacia el punto donde fue llamada.
```

### 9 — Orden lógico de definición

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["estructura", "orden"]

respuesta_orden: ["definir_funcion", "llamar_funcion", "mostrar_resultado"]
tipo: ordenar

opciones_explicitas: ["definir_funcion", "llamar_funcion", "mostrar_resultado"]

enunciado: "Para que un programa modular funcione correctamente, ¿cuál es el orden lógico de ejecución de sus componentes?"

explicacion: |
  Primero se debe definir la lógica (la función), luego se invoca la función con los datos necesarios y finalmente se procesa o muestra el resultado obtenido.
```

### 10 — Ámbito de las variables (Scope)

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "avanzado"
  tags: ["scope", "variables_globales"]

respuesta: "5"
tipo: mc
opciones_explicitas: ["5", "10", "Error: variable no definida"]

enunciado: |
  Considera el siguiente código:
  x = 10
  def mi_funcion():
      x = 5
      return x

  Si llamamos a mi_funcion(), el valor devuelto es ___.

explicacion: |
  Dentro de la función, se crea una variable local 'x' que tiene el mismo nombre que la global, pero la función trabaja con la local. Por lo tanto, el valor devuelto es el de la variable local definida dentro del bloque, es decir, 5.
```

### 11 — El alcance de las variables

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["scope", "variables", "modularidad"]

variables:
  escenario: uno_de([[1, "global"], [2, "local"]])

enunciado: "En un programa, una variable definida dentro de una función tiene un alcance {escenario}."

opciones_explicitas:
  - "global"
  - "local"

respuesta: escenario[1]
tipo: mc

explicacion: |
  Las variables definidas dentro de una función tienen un ámbito local, lo que significa que no pueden ser accedidas directamente desde fuera de la función. Esto es fundamental para la modularidad y evita colisiones de nombres.
```

### 12 — Retorno de valores vs. Impresión

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["return", "side_effects", "output"]

variables:
  caso: uno_de([[1, "print"], [2, "return"]])

enunciado: "Si una función utiliza {caso} para mostrar un resultado en pantalla pero no tiene una instrucción de salida de datos hacia el flujo principal, la función devuelve un valor de tipo ___."

respuestas_validas:
  - "None"

respuesta: "None"
tipo: completar

explicacion: |
  Es un error común confundir 'imprimir' (mostrar en consola) con 'retornar' (devolver un valor para ser usado en otra parte). Si una función no tiene un 'return' explícito, devuelve por defecto un valor nulo o None.
```

### 13 — El problema de los efectos secundarios

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "avanzado"
  tags: ["side_effects", "pure_functions", "modularidad"]

enunciado: "¿Es verdadero que una 'función pura' es aquella que, además de devolver siempre el mismo resultado para los mismos argumentos, no produce efectos secundarios (como modificar una variable global o escribir en un archivo)?"

respuestas_validas:
  - "verdadero"

respuesta: "verdadero"
tipo: completar
explicacion: |
  La pureza en las funciones es la base de la programación funcional y de la modularidad robusta. Si una función modifica algo fuera de su propio ámbito, se dice que tiene un 'efecto secundario', lo cual dificulta el testing y la reutilización.
```

### 14 — Pasos para la modularización

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["refactoring", "modularidad", "algoritmo"]

enunciado: "Ordena los pasos lógicos para refactorizar un código monolítico (un solo bloque largo) en un programa modular:"

opciones_explicitas:
  - "Identificar bloques de lógica con una responsabilidad única"
  - "Extraer esos bloques en funciones independientes"
  - "Definir los parámetros de entrada y los valores de retorno necesarios"
  - "Llamar a las nuevas funciones desde el programa principal"

respuesta_orden: ["Identificar bloques de lógica con una responsabilidad única", "Extraer esos bloques en funciones independientes", "Definir los parámetros de entrada y los valores de retorno necesarios", "Llamar a las nuevas funciones desde el programa principal"]
tipo: ordenar

explicacion: |
  La modularización efectiva requiere primero identificar la cohesión (qué pertenece a qué), luego aislar la lógica, definir sus interfaces (parámetros/retornos) y finalmente integrarlas.
```

### 15 — Parámetros vs. Argumentos

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["parameters", "arguments", "terminologia"]

enunciado: "En la definición de una función `def suma(a, b):`, los elementos `a` y `b` se denominan ___ , mientras que los valores reales que se pasan al llamar a la función `suma(5, 3)` se denominan ___ ."

respuestas_validas:
  - "parámetros"
  - "argumentos"

respuesta: "parámetros"
tipo: completar

explicacion: |
  Aunque se usan como sinónimos en el habla cotidiana, técnicamente los 'parámetros' son las variables en la definición de la función, y los 'argumentos' son los valores reales que se le pasan durante la ejecución.
```

### 16 — El propósito de la modularidad

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["conceptos", "modularidad"]

respuesta: "reutilizar"
tipo: completar
respuestas_validas:
  - "reutilizar"
  - "reutilización"

enunciado: "Mientras que un bloque de código aislado realiza una tarea única, la modularidad busca dividir un programa en piezas que permitan ___ el código en diferentes partes del sistema."

explicacion: |
  La modularidad permite dividir un problema complejo en subproblemas más pequeños y manejables, permitiendo que el código sea reutilizado en otros contextos sin necesidad de reescribirlo.
```

### 17 — Diferencia entre Parámetro y Argumento

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["funciones", "terminologia"]

variables:
  es_diferente: verdadero

respuesta: verdadero
tipo: vf

enunciado: "En el contexto de la definición de funciones, el 'parámetro' es la variable declarada en la firma de la función, mientras que el 'argumento' es el valor real pasado al invocarla. ¿Es esta distinción correcta? {es_diferente}"

explicacion: |
  Correcto. El parámetro actúa como un marcador de posición (variable local) y el argumento es el dato concreto que se envía durante la llamada.
```

### 18 — Ventaja de la Modularidad vs. Código Monolítico

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["comparacion", "mantenimiento"]

respuesta: "mantenimiento"
tipo: mc
opciones_explicitas: ["rendimiento", "mantenimiento", "estética", "velocidad"]

enunciado: "Comparado con un programa monolítico (un solo bloque de código gigante), un programa modular facilita principalmente el ___ y la detección de errores."

explicacion: |
  Al tener el código separado en módulos o funciones, si ocurre un error, es más fácil localizar la pieza exacta que está fallando sin afectar al resto del sistema.
```

### 19 — Flujo de ejecución en una función

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["flujo_control", "modularidad"]

respuesta_orden: ["llamada", "ejecución", "retorno"]
tipo: ordenar
opciones_explicitas: ["llamada", "ejecución", "retorno"]

enunciado: "Ordena cronológicamente los pasos que ocurren cuando el control de un programa pasa a una función:"

pasos:
  - "El programa salta a la definición de la función."
  - "La función devuelve un valor y el control vuelve al punto de origen."
  - "Se invoca la función con los valores necesarios."

explicacion: |
  El flujo lógico es: 1. Llamada (Call), 2. Ejecución del cuerpo de la función, 3. Retorno (Return) al flujo principal.
```

### 20 — Alcance de las variables (Scope)

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "avanzado"
  tags: ["scope", "variables"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["local", "solo es visible dentro de la función"], ["global", "es accesible desde cualquier parte del programa"]]

respuesta: "datos[escenario_idx][1]"
tipo: mc
opciones_explicitas: ["datos[escenario_idx][1]", "datos[escenario_idx][0]", "ninguna de las anteriores"]

enunciado: "Si definimos una variable dentro de una función, su alcance es {datos[escenario_idx][0]}. ¿Cuál es la característica de este tipo de variable?"

explicacion: |
  Las variables locales existen únicamente durante la ejecución de la función y no pueden ser accedidas directamente desde fuera de ella, lo cual es clave para evitar colisiones de nombres en la modularidad.
```

### 21 — Modularidad en el desarrollo

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["conceptos", "modularidad"]

variables:
  escenarios: [["un programa de 1000 líneas en un solo bloque", "difícil de mantener y testear"], ["un programa dividido en funciones pequeñas", "fácil de mantener y reutilizar"]]
  escenario: uno_de(escenarios)

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["difícil de mantener y testear", "fácil de mantener y reutilizar"]

enunciado: "Si un programador decide que su código debe ser modular, el beneficio principal es que el software resultante será ___."

explicacion: |
  La modularidad permite dividir problemas complejos en partes más pequeñas y manejables, facilitando la lectura, el testeo y la reutilización de código.
```

### 22 — El concepto de parámetro

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["funciones", "parametros"]

variables:
  caso_idx: uno_de([0,1,2])
  casos: [["sumar(a, b)", "los valores que recibe la función"], ["print('Hola')", "lo que la función devuelve"], ["x = 5", "una variable global"]]
  respuestas: ["los valores que recibe la función", "lo que la función devuelve", "una variable global"]

respuesta: casos[caso_idx][1]
tipo: completar
respuestas_validas:
  - "los valores que recibe la función"
  - "lo que la función devuelve"
  - "una variable global"

enunciado: "En la estructura de una función, la sección que define qué datos externos puede procesar la función se denomina ___."

explicacion: |
  Los parámetros son variables locales en la definición de una función que actúan como marcadores de posición para los argumentos que se le pasan al llamarla.
```

### 23 — Retorno de valores

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["booleano", "conceptos"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que una función que no contiene una instrucción de retorno (return) siempre devuelve el valor `falso`?"

explicacion: |
  En la mayoría de los lenguajes de programación, si una función no tiene una instrucción de retorno explícita, devuelve un valor especial que representa la ausencia de valor (como `None` en Python o `undefined` en JS), no necesariamente el booleano `falso`.
```

### 24 — Flujo de ejecución

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["orden", "ejecucion"]

respuesta_orden: ["Definición de la función", "Llamada a la función", "Ejecución del cuerpo de la función", "Retorno al flujo principal"]
tipo: ordenar
opciones_explicitas: ["Definición de la función", "Llamada a la función", "Ejecución del cuerpo de la función", "Retorno al flujo principal"]

enunciado: "Ordena los pasos lógicos que ocurren en la memoria de la computadora cuando se utiliza una función en un programa:"

explicacion: |
  Para que una función trabaje, primero debe estar definida en memoria, luego el programa debe invocarla (llamada), se procesa su lógica interna y finalmente el control vuelve a la línea siguiente a la llamada.
```

### 25 — Alcance de variables (Scope)

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "avanzado"
  tags: ["scope", "variables"]

variables:
  test_idx: uno_de([0,1])
  tests: [["x = 10; def f(): print(x); f()", "10"], ["x = 5; def f(): x = 2; f(); print(x)", "5"]]
  resultado_correcto: tests[test_idx][1]

respuesta: resultado_correcto
tipo: completar
tolerancia_abs: 0

enunciado: "Analiza el siguiente código: {tests[test_idx][0]}. ¿Cuál será el resultado de la salida en consola?"

explicacion: |
  En el primer caso, se accede a una variable global. En el segundo caso, la asignación `x = 2` dentro de la función crea una variable local, dejando la variable global `x` intacta para el `print` final.
```
