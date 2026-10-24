### 1 — Modularidad en el desarrollo
```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["conceptos", "modularidad"]

variables:
  escenario_idx: uno_de([0,1])
  escenarios: [["un programa de 1000 líneas en un solo bloque", "un programa dividido en funciones pequeñas"], ["difícil de mantener y testear", "fácil de mantener y reutilizar"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["difícil de mantener y testear", "fácil de mantener y reutilizar"]

enunciado: "Si un programador decide que su código debe ser modular, el beneficio principal es que el software resultante será ___."

explicacion: |
  La modularidad permite dividir problemas complejos en partes más pequeñas y manejables, facilitando la lectura, el testeo y la reutilización de código.
```

### 2 — El concepto de parámetro
```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["funciones", "parametros"]

variables:
  caso_idx: uno_de([0,1,2])
  casos: [
    ["sumar(a, b)", "los valores que recibe la función"],
    ["print('Hola')", "lo que la función devuelve"],
    ["x = 5", "una variable global"]
  ]
  respuestas: ["los valores que recibe la función", "lo que la función devuelve", "una variable global"]

respuesta: casos[caso_idx][1]
tipo: completar
respuestas_validas: ["los valores que recibe la función", "lo que la función devuelve", "una variable global"]

enunciado: "En la estructura de una función, la sección que define qué datos externos puede procesar la función se denomina ___."

explicacion: |
  Los parámetros son variables locales en la definición de una función que actúan como marcadores de posición para los argumentos que se le pasan al llamarla.
```

### 3 — Retorno de valores
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

### 4 — Flujo de ejecución
```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["orden", "ejecucion"]

respuesta: ["Definición de la función", "Llamada a la función", "Ejecución del cuerpo de la función", "Retorno al flujo principal"]
tipo: ordenar
opciones_explicitas: ["Definición de la función", "Llamada a la función", "Ejecución del cuerpo de la función", "Retorno al flujo principal"]

enunciado: "Ordena los pasos lógicos que ocurren en la memoria de la computadora cuando se utiliza una función en un programa:"

explicacion: |
  Para que una función trabaje, primero debe estar definida en memoria, luego el programa debe invocarla (llamada), se procesa su lógica interna y finalmente el control vuelve a la línea siguiente a la llamada.
```

### 5 — Alcance de variables (Scope)
```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "avanzado"
  tags: ["scope", "variables"]

variables:
  test_idx: uno_de([0,1])
  tests: [
    ["x = 10; def f(): print(x); f()", "10"],
    ["x = 5; def f(): x = 2; f(); print(x)", "5"]
  ]
  resultados: ["10", "5"]

respuesta: resultados[test_idx][1]
tipo: input
tolerancia_abs: 0

enunciado: "Analiza el siguiente código: {tests[test_idx][0]}. ¿Cuál será el resultado de la salida en consola?"

explicacion: |
  En el primer caso, se accede a una variable global. En el segundo caso, la asignación `x = 2` dentro de la función crea una variable local, dejando la variable global `x` intacta para el `print` final.
```