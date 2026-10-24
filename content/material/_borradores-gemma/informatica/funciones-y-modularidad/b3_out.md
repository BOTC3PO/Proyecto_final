### 1 — El alcance de las variables
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

### 2 — Retorno de valores vs. Impresión
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

### 3 — El problema de los efectos secundarios
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
tipo: vf

explicacion: |
  La pureza en las funciones es la base de la programación funcional y de la modularidad robusta. Si una función modifica algo fuera de su propio ámbito, se dice que tiene un 'efecto secundario', lo cual dificulta el testing y la reutilización.
```

### 4 — Pasos para la modularización
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

respuesta: ["Identificar bloques de lógica con una responsabilidad única", "Extraer esos bloques en funciones independientes", "Definir los parámetros de entrada y los valores de retorno necesarios", "Llamar a las nuevas funciones desde el programa principal"]
tipo: ordenar

explicacion: |
  La modularización efectiva requiere primero identificar la cohesión (qué pertenece a qué), luego aislar la lógica, definir sus interfaces (parámetros/retornos) y finalmente integrarlas.
```

### 5 — Parámetros vs. Argumentos
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