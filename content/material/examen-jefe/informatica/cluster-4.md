# Examen jefe — Maestro de Bucles y Lógica

> Logro #174. Completaste el parcial dominando estructuras de control, datos y ética de la IA. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **126 preguntas totales** en 5/5 secciones.

---

## Sección: estructuras-de-control-bucles (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["conceptos", "terminologia"]

respuesta: "iteración"
tipo: completar
respuestas_validas: ["iteración", "iteracion"]

enunciado: "En programación, cada una de las repeticiones de un bloque de instrucciones dentro de un bucle se denomina ___."

explicacion: |
  Un bucle permite ejecutar un conjunto de instrucciones varias veces. Cada vez que el ciclo se ejecuta, se dice que ha ocurrido una iteración.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["diferencias", "for", "while"]

respuesta: "falso"
tipo: completar
enunciado: "El bucle 'while' se utiliza preferentemente cuando se conoce de antemano el número exacto de veces que se debe repetir el bloque de código."

explicacion: |
  Falso. El bucle 'while' se basa en una condición lógica y se usa cuando no sabemos cuántas veces se repetirá. El bucle 'for' es el ideal cuando conocemos el número de iteraciones (iteraciones controladas).
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["for", "componentes"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["i", "inicio", "paso"], ["cont", "valor_inicial", "incremento"]]

respuesta: datos[escenario_idx][0
tipo: mc
opciones_explicitas: ["i", "cont", "valor_inicial", "incremento"]

enunciado: "En una estructura de control 'for' estándar, el primer parámetro suele representar la ___ que actúa como contador."

explicacion: |
  La variable de control (comúnmente llamada 'i' o 'j') es la que toma los valores sucesivos durante el ciclo.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["flujo", "orden"]

respuesta: ["Inicializar variable", "Evaluar condición", "Ejecutar cuerpo", "Actualizar variable"]
tipo: ordenar
opciones_explicitas: ["Inicializar variable", "Evaluar condición", "Ejecutar cuerpo", "Actualizar variable"]

enunciado: "Ordena los pasos lógicos que sigue un bucle 'while' en cada ciclo para asegurar un funcionamiento correcto y evitar bucles infinitos."

explicacion: |
  Primero se verifica si la condición es verdadera, luego se ejecuta el código y finalmente se actualiza la variable de control para que la condición pueda llegar a ser falsa eventualmente.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["errores", "bucle_infinito"]

respuesta: "falso"
tipo: completar
enunciado: "Un bucle infinito ocurre únicamente cuando la condición de parada es siempre verdadera debido a un error de lógica en el programa."

explicacion: |
  Falso. Aunque es la causa más común (error de lógica), un bucle infinito también puede ser intencional (por ejemplo, en el bucle principal de un sistema operativo o un videojuego que espera una señal de salida).
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["for", "iteracion", "suma"]

variables:
  escenario: uno_de([
    [1, 10],
    [1, 5],
    [1, 20]
  ])
  limite: escenario[0]
  suma_final: escenario[1]

respuesta: suma_final
tipo: completar
tolerancia_abs: 0

enunciado: "Considera un bucle que recorre un rango desde 1 hasta {limite} (inclusive) sumando cada valor a una variable acumuladora que inicia en 0. ¿Cuál es el valor final de la suma?"

pasos:
  - "Inicializar acumulador = 0"
  - "Iterar desde i = 1 hasta {limite}"
  - "En cada paso, sumar i al acumulador"

explicacion: |
  El bucle recorre todos los enteros desde 1 hasta el límite definido. La suma de los primeros n números se calcula con la fórmula (n * (n + 1)) / 2. En este caso, para un límite de {limite}, la suma es {suma_final}.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["while", "condicion"]

variables:
  valor_inicial: 10
  divisor: 2
  resultado_final: 1

respuesta: falso
tipo: vf

enunciado: "Se ejecuta el siguiente pseudocódigo: \n x = {valor_inicial} \n while (x > 1): \n   x = x / {divisor} \n \n ¿La variable x terminará siendo exactamente igual a 1 al finalizar el bucle? (Verdadero/Falso)"

explicacion: |
  En cada iteración, x se divide por 2. La secuencia es: 10, 5, 2.5, 1.25, 0.625... Como x siempre será mayor que 1 hasta que cruce el umbral, el bucle se detiene cuando x <= 1. En este caso, el valor final es 0.625, por lo tanto, no es exactamente 1.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["for", "anidado", "iteraciones"]

variables:
  i_max: 3
  j_max: 2

respuesta: 6
tipo: completar
tolerancia_abs: 0

enunciado: "En un bucle anidado donde el bucle externo corre desde i = 1 hasta {i_max} y el bucle interno corre desde j = 1 hasta {j_max}, ¿cuántas veces se ejecutará el cuerpo del bucle interno en total?"

pasos:
  - "El bucle externo se ejecuta {i_max} veces"
  - "Por cada iteración del externo, el interno se ejecuta {j_max} veces"
  - "Total = {i_max} * {j_max}"

explicacion: |
  Cuando tenemos bucles anidados, el número total de iteraciones es el producto del número de iteraciones de cada bucle. En este caso, 3 * 2 = 6.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["ordenar", "flujo"]

respuesta: ["inicializar_contador", "evaluar_condicion", "ejecutar_cuerpo", "actualizar_contador"]
tipo: ordenar

opciones_explicitas: ["inicializar_contador", "evaluar_condicion", "ejecutar_cuerpo", "actualizar_contador"]

enunciado: "Ordena los pasos lógicos que sigue un bucle 'while' en cada iteración para asegurar su funcionamiento correcto:"

explicacion: |
  Primero se debe evaluar si la condición es verdadera. Si lo es, se ejecuta el código interno. Luego, es crucial actualizar la variable de control (incrementar o decrementar) para evitar un bucle infinito.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["while", "incremento"]

variables:
  puntos_iniciales: 5
  incremento: 2
  puntos_finales: 11

respuesta: "11"
tipo: completar

opciones_explicitas: ["11"]
respuestas_validas: ["11"]

enunciado: "Un programa tiene un bucle 'while' que continúa mientras 'puntos' sea menor que 10. Si 'puntos' comienza en {puntos_iniciales} y en cada iteración se le suma {incremento}, ¿cuál será el valor final de 'puntos' cuando el bucle termine?"

explicacion: |
  1. Inicio: puntos = 5. ¿5 < 10? Sí. Sumamos 2 -> puntos = 7.
  2. ¿7 < 10? Sí. Sumamos 2 -> puntos = 9.
  3. ¿9 < 10? Sí. Sumamos 2 -> puntos = 11.
  4. ¿11 < 10? No. El bucle termina. El valor final es 11.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["error_comun", "while", "logica"]

variables:
  i: 0

enunciado: "Analiza el siguiente fragmento de código en pseudocódigo: \n\n x = 10\n i = 0\n while (i < x):\n   print(i)\n   i = i - 1"

opciones_explicitas: ["El bucle termina correctamente", "El bucle entra en un bucle infinito", "El bucle no se ejecuta nunca", "Se produce un error de sintaxis"]

respuesta: "El bucle entra en un bucle infinito"
tipo: mc

explicacion: |
  Al decrementar `i` en cada iteración (`i = i - 1`), la condición `i < 10` siempre será verdadera, ya que `i` se aleja cada vez más del valor 10 hacia los números negativos. Esto causa un bucle infinito.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["for", "index_out_of_bounds"]

variables:
  lista: ["A", "B", "C"]
  largo_lista: largo(lista)

enunciado: "Si tenemos una lista con {largo_lista} elementos (índices 0, 1 y 2) y ejecutamos el siguiente bucle:\n\n for i from 0 to 3:\n   print(lista[i])\n\n ¿Qué sucede al llegar a la última iteración?"

opciones_explicitas: ["Se imprime el último elemento", "Se imprime un error de índice fuera de rango", "Se imprime un valor nulo", "El bucle se detiene sin error"]

respuesta: "Se imprime un error de índice fuera de rango"
tipo: mc

explicacion: |
  En la mayoría de los lenguajes, si una lista tiene 3 elementos, los índices válidos son 0, 1 y 2. Intentar acceder al índice 3 provocará un error de desbordamiento de índice (IndexOutOfBounds).
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["while", "logica"]

enunciado: "En un bucle `while`, la condición evaluada determina si el cuerpo del bucle se ejecuta o no. Si la condición es falsa desde el primer momento, el bucle se ejecuta ___ veces."

respuestas_validas: ["0"]
tipo: completar

explicacion: |
  A diferencia de un bucle `do-while` (que garantiza al menos una ejecución), el bucle `while` evalúa la condición *antes* de entrar al bloque. Si la condición es falsa inicialmente, el cuerpo nunca se ejecuta.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["anidados", "orden"]

variables:
  resultado: "A, B, C, D"

enunciado: "Ordena la secuencia de salida de los mensajes para el siguiente código:\n\n for i from 1 to 2:\n   for j from 1 to 2:\n     print(i, j)"

opciones_explicitas: ["(1,1), (1,2), (2,1), (2,2)", "(1,1), (2,1), (1,2), (2,2)", "(1,1), (1,2), (2,2), (2,1)", "(2,1), (2,2), (1,1), (1,2)"]

respuesta: ["(1,1), (1,2), (2,1), (2,2)"]
tipo: ordenar

explicacion: |
  En los bucles anidados, el bucle interno (j) debe completar todas sus iteraciones para cada una de las iteraciones del bucle externo (i). Por eso, primero se agota la secuencia de `j` para `i=1` y luego se pasa a `i=2`.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["boolean", "logica"]

variables:
  condicion_inicial: falso

enunciado: "Supongamos que tenemos el siguiente código:\n\n x = 5\n while (x > 0):\n   x = x - 1\n   if (x == 2):\n     break\n\n ¿El valor final de `x` al salir del bucle es 2? (Responde verdadero o falso)"

respuesta: verdadero
tipo: vf

explicacion: |
  El bucle se ejecuta para x=5, 4, 3. Cuando x llega a 2 tras la resta, la instrucción `break` interrumpe inmediatamente el bucle, dejando el valor de `x` en 2.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["bucles", "for", "while"]

tipo: mc
opciones_explicitas: ["El bucle for se usa cuando se conoce de antemano el número de iteraciones, mientras que el while depende de una condición lógica.", "El bucle for es más rápido que el while en todos los lenguajes.", "El bucle while solo puede usarse con números enteros.", "No existe diferencia funcional entre ambos."]

respuesta: "El bucle for se usa cuando se conoce de antemano el número de iteraciones, mientras que el while depende de una condición lógica."

enunciado: "En programación, ¿cuál es la distinción principal entre un bucle 'for' y un bucle 'while'?"

explicacion: |
  El bucle 'for' está diseñado para iterar sobre una secuencia finita o un rango conocido, mientras que el 'while' es una estructura de control que se ejecuta mientras una condición booleana sea verdadera, sin importar cuántas veces ocurra.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["while", "condicion"]

tipo: completar
respuestas_validas: ["falso"]

respuesta: "falso"

enunciado: "Si una condición en un bucle 'while' nunca cambia su valor y permanece siempre como ___, el programa entrará en un bucle infinito."

explicacion: |
  Un bucle 'while' evalúa la condición antes de cada iteración. Si la condición es siempre 'falso', el bucle no se ejecuta; si es siempre 'verdadero', el bucle nunca termina.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["while", "booleano"]

tipo: vf

respuesta: verdadero

enunciado: "¿Es posible que un bucle 'while' no se ejecute ni una sola vez si la condición inicial es falsa?"

explicacion: |
  Correcto. A diferencia del bucle 'do-while' (que ejecuta el bloque al menos una vez), el bucle 'while' evalúa la condición al principio. Si es falsa desde el inicio, el cuerpo del bucle se salta por completo.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["iteracion", "pasos"]

tipo: ordenar
opciones_explicitas: ["Inicialización de la variable de control", "Evaluación de la condición", "Ejecución del cuerpo del bucle", "Actualización de la variable de control"]

respuesta: ["Inicialización de la variable de control", "Evaluación de la condición", "Ejecución del cuerpo del bucle", "Actualización de la variable de control"]

enunciado: "Ordena los pasos lógicos que ocurren en una iteración estándar de un bucle controlado por una variable:"

explicacion: |
  Para que un bucle funcione correctamente, primero se establece el punto de partida (inicialización), luego se verifica si se debe entrar (condición), se realiza la tarea (cuerpo) y finalmente se modifica la variable para avanzar (actualización).
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["break", "control"]

variables:
  idx: uno_de([0, 1])

respuesta: tabla[idx][1
tabla: [["La instrucción 'break' termina el bucle inmediatamente, independientemente de si la condición del 'while' sigue siendo verdadera.", "La instrucción 'break' solo sirve para saltar una iteración y continuar con la siguiente."]]

tipo: mc
opciones_explicitas: ["La instrucción 'break' termina el bucle inmediatamente, independientemente de si la condición del 'while' sigue siendo verdadera.", "La instrucción 'break' solo sirve para saltar una iteración y continuar con la siguiente."]

enunciado: "Considerando un bucle 'while' que está en ejecución, ¿qué diferencia marca el uso de la instrucción 'break' respecto a la condición del bucle?"

explicacion: |
  El comando 'break' fuerza la salida inmediata del bucle, ignorando la evaluación de la condición lógica que normalmente controlaría la repetición.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["for", "iteracion"]

variables:
  datos: [["i", "1", "3"], ["j", "0", "2"], ["k", "5", "7"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si ejecutamos un bucle 'for' que recorre desde el valor inicial de {datos[idx][0]} hasta el valor final de {datos[idx][1]} inclusive, ¿cuántas veces se ejecutará el cuerpo del bucle?"

respuesta: datos[idx][2]
tipo: mc
opciones_explicitas: ["1", "2", "3", "4"]

explicacion: |
  El número de iteraciones en un bucle que va de 'a' hasta 'b' (inclusive) se calcula como: (b - a) + 1.
  En este caso: ({datos[idx][1]} - {datos[idx][0]}) + 1 = {respuesta}.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["while", "condicion"]

variables:
  datos: [["x", 10, 2], ["y", 20, 5], ["z", 15, 3]]
  idx: uno_de([0, 1, 2])

enunciado: "Considera el siguiente código: \n`valor = {datos[idx][0]} \nwhile (valor > 1): \n    valor = valor - {datos[idx][1]}` \n\n¿Cuál será el valor final de la variable después de que el bucle termine?"

respuesta: "1"
tipo: mc
opciones_explicitas: ["0", "1", "2", "5"]

explicacion: |
  El bucle se ejecuta mientras la variable sea mayor a 1. 
  Si empezamos con {datos[idx][0]} y restamos {datos[idx][1]} sucesivamente, el último valor que cumple la condición es el que, al restarle {datos[idx][1]}, resulta en un valor <= 1.
  En este escenario, el valor final será 1.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "avanzado"
  tags: ["anidados", "complejidad"]

variables:
  datos: [["i", 3, "j", 4], ["i", 2, "j", 5], ["i", 4, "j", 2]]
  idx: uno_de([0, 1, 2])

enunciado: "Dado el siguiente fragmento de código:\n`for i from 1 to {datos[idx][0]}:\n    for j from 1 to {datos[idx][2]}:\n        print(i, j)`\n\n¿Cuántas veces se imprimirá el mensaje en total?"

respuestas_validas: [{datos[idx][0] * datos[idx][2]}]
respuesta: {datos[idx][0] * datos[idx][2]}
tipo: completar
tolerancia_abs: 0

explicacion: |
  En un bucle anidado, el número total de iteraciones es el producto del número de iteraciones del bucle externo por el número de iteraciones del bucle interno.
  {datos[idx][0]} * {datos[idx][2]} = {datos[idx][0] * datos[idx][2]}.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["while", "infinito"]

enunciado: "Si tenemos un bucle `while (i < 10)` y dentro del bucle la variable `i` nunca aumenta su valor, el programa entrará en un bucle infinito."

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. Si la condición de parada (`i < 10`) nunca deja de ser verdadera porque `i` no cambia, el programa nunca saldrá del bucle.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["orden", "flujo"]

enunciado: "Ordena los pasos de ejecución de un bucle 'for' que recorre una lista de elementos:"

opciones_explicitas: ["Inicializar el contador", "Evaluar la condición de parada", "Ejecutar el cuerpo del bucle", "Incrementar el contador"]
respuesta: ["Inicializar el contador", "Evaluar la condición de parada", "Ejecutar el cuerpo del bucle", "Incrementar el contador"]
tipo: ordenar

explicacion: |
  El flujo estándar es: 1. Inicialización, 2. Evaluación de condición, 3. Ejecución de instrucciones, 4. Actualización/Incremento.
```

## Sección: estructuras-de-control-condicionales (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["conceptos", "logica"]

tipo: mc
opciones_explicitas: ["Una estructura que repite un bloque de código", "Una estructura que permite ejecutar código según una condición", "Una función que realiza cálculos matemáticos", "Un tipo de dato que almacena números"]

enunciado: "En programación, una estructura condicional es..."

explicacion: |
  Las estructuras condicionales permiten que el flujo de un programa cambie de dirección dependiendo de si una condición es verdadera o falsa.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["booleanos", "logica"]

tipo: vf
opciones_explicitas: [verdadero, falso]

enunciado: "Para que una sentencia 'if' ejecute su bloque de código, la expresión evaluada debe ser ___."

explicacion: |
  El cuerpo de un 'if' solo se ejecuta si la condición evaluada resulta en un valor booleano verdadero.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["if_else", "flujo"]

tipo: completar
respuestas_validas: ["else"]

enunciado: "Si la condición del 'if' es falsa, el programa puede ejecutar un bloque alternativo utilizando la palabra clave ___."

explicacion: |
  La cláusula 'else' define el camino que toma el programa cuando la condición principal no se cumple.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["evaluacion", "booleano"]

variables:
  escenario: uno_de([
    [10 > 5, verdadero],
    [5 > 10, falso],
    [7 == 7, verdadero],
    [3 != 3, falso]
  ])

enunciado: "Si evaluamos la expresión {escenario[0]}, el resultado es ___."

respuesta: escenario[1
tipo: mc
opciones_explicitas: [verdadero, falso]

explicacion: |
  La expresión evaluada es verdadera, por lo tanto, el resultado booleano es verdadero.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["flujo", "orden"]

tipo: ordenar
opciones_explicitas: ["1. Evaluar la condición", "2. Si es verdadera, ejecutar bloque A", "3. Si es falsa, ejecutar bloque B"]

enunciado: "Ordena los pasos lógicos que sigue una estructura 'if-else' estándar:"

respuesta: ["1. Evaluar la condición", "2. Si es verdadera, ejecutar bloque A", "3. Si es falsa, ejecutar bloque B"]

explicacion: |
  El flujo lógico siempre comienza con la evaluación de la condición para luego decidir qué camino seguir.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["if", "booleanos", "logica"]

respuesta: verdadero
tipo: vf

enunciado: "En un programa, si evaluamos la expresión {x > 5} siendo x = 10, el resultado de la condición es ___."

explicacion: |
  Dado que 10 es mayor que 5, la expresión es verdadera.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["if", "else", "flujo"]

variables:
  escenario: uno_de([["edad = 15", "reprobado"], ["edad = 18", "aprobado"]])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["reprobado", "aprobado"]

enunciado: "Si tenemos el siguiente código: \nif (edad >= 18) {\n  print('aprobado');\n} else {\n  print('reprobado');\n}\n\nSi la variable edad es 15, ¿qué se imprimirá en consola?"

pasos:
  - "Evaluar la condición: ¿15 >= 18? La respuesta es falso."
  - "Como la condición es falsa, el programa salta el bloque 'if' y entra al bloque 'else'."
  - "Se ejecuta la instrucción dentro del 'else'."

explicacion: |
  Al ser la condición falsa, se ejecuta la rama alternativa (else).
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["if", "else", "sintaxis"]

respuesta: ["else", "if"]
tipo: completar
respuestas_validas: ["else", "if"]

enunciado: "Completa la sintaxis correcta para este fragmento de código:\n\nif (puntuacion > 50) {\n  ___(puntuacion > 50) {\n    print('Excelente');\n  }\n} ___ {\n  print('Inténtalo de nuevo');\n}"

explicacion: |
  La estructura completa es 'if' para la condición inicial y 'else' para el caso contrario.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["if", "else if", "logica"]

variables:
  caso: uno_de([["temp = 30", "calor"], ["temp = 10", "frio"]])

respuesta: caso[0
tipo: mc
opciones_explicitas: ["calor", "frio", "templado"]

enunciado: "Analiza el siguiente código:\n\nif (temp > 25) {\n  print('calor');\n} else if (temp > 0) {\n  print('templado');\n} else {\n  print('frio');\n}\n\nSi la variable temp es 30, ¿cuál es la salida?"

pasos:
  - "Se evalúa la primera condición: 30 > 25. Es verdadero."
  - "Al cumplirse la primera condición, se ejecuta su bloque y se sale de la estructura."
  - "Las condiciones 'else if' y 'else' se ignoran completamente."

explicacion: |
  En una estructura if/else if/else, solo se ejecuta el primer bloque cuya condición sea verdadera.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["flujo", "orden"]

respuesta: ["evaluar_condicion", "decidir_camino", "ejecutar_bloque"]
tipo: ordenar
opciones_explicitas: ["evaluar_condicion", "decidir_camino", "ejecutar_bloque"]

enunciado: "Ordena los pasos lógicos que sigue el procesador al encontrar una estructura condicional if-else:"

explicacion: |
  Primero se determina si la condición es verdadera o falsa, luego se elige qué camino seguir y finalmente se procesa la instrucción correspondiente.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["error_comun", "if_else"]

variables:
  escenario: uno_de([
    ["if (x > 0) \n  print('Positivo')", "error_sintaxis"],
    ["if (x > 0) \n  print('Positivo') \n print('Siempre sale')", "error_logica"]
  ])

enunciado: "Observa el siguiente código: {escenario[0]}. Si el programador quería que el segundo 'print' SOLO se ejecute si x > 0, pero lo escribió fuera de la indentación, ¿qué tipo de error ha cometido?"

opciones_explicitas: ["error_de_sintaxis", "error_de_logica", "error_de_tipo", "no hay error"]
respuesta: escenario[1
tipo: mc

explicacion: |
  El código es sintácticamente correcto (no dará error al compilar), pero la lógica es errónea porque el segundo comando se ejecutará siempre, independientemente de la condición.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["confusión_operadores"]

variables:
  caso: uno_de([
    ["if (edad = 18) { ... }", "error_sintaxis"],
    ["if (edad == 18) { ... }", "correcto"]
  ])

enunciado: "En muchos lenguajes de programación, intentar usar un solo signo de igual '{caso[0]}' dentro de una condición 'if' en lugar de un doble signo de igual suele provocar un error de tipo {caso[0][0]} o un comportamiento inesperado. ¿Cuál es el operador correcto para comparar igualdad?"

opciones_explicitas: ["=", "==", "!=", "<=>"]
respuesta: "=="
tipo: mc

explicacion: |
  El signo '=' se usa para asignación (dar un valor a una variable), mientras que '==' se usa para comparación (verificar si dos valores son iguales).
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["truthy_falsy"]

enunciado: "En lenguajes como Python o JavaScript, una lista vacía [] o el número 0 se evalúan como ___ en una estructura condicional 'if'. (Escribe 'falso' o 'verdadero')"

respuestas_validas: ["falso"]
respuesta: "falso"
tipo: completar

explicacion: |
  En la evaluación de contextos booleanos (truthy/falsy), los valores vacíos, el cero y el valor null/none se consideran falsos.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["lógica_booleana"]

variables:
  test: uno_de([
    [10, 20, 30],
    [5, 15, 25]
  ])
  idx: uno_de([0, 1])

enunciado: "Si tenemos la expresión: 'if (x > 5 && x < 15)'. Si x es {test[idx][1]}, ¿cuál es el resultado booleano de la condición?"

opciones_explicitas: [verdadero, falso]
respuesta: falso
tipo: mc

explicacion: |
  Como el operador '&&' (AND) requiere que AMBAS condiciones sean verdaderas, y 20 no es menor que 15, el resultado es falso.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "avanzado"
  tags: ["anidamiento"]

enunciado: "Ordena los pasos lógicos que sigue el procesador al evaluar una estructura 'if-elif-else' para encontrar la primera coincidencia verdadera:"

opciones_explicitas: ["Evaluar la condición del 'if' inicial", "Evaluar las condiciones de los 'elif' en orden", "Ejecutar el bloque 'else' si ninguna anterior fue verdadera"]
respuesta: ["Evaluar la condición del 'if' inicial", "Evaluar las condiciones de los 'elif' en orden", "Ejecutar el bloque 'else' si ninguna anterior fue verdadera"]
tipo: ordenar

explicacion: |
  Las estructuras condicionales múltiples se evalúan de arriba hacia abajo. En cuanto se encuentra una condición verdadera, se ejecuta su bloque y se salta el resto de la estructura.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["condicionales", "lógica"]

respuesta: "else"
tipo: "completar"
respuestas_validas: ["else"]

enunciado: "Mientras que la estructura 'if' permite ejecutar un bloque de código si una condición es verdadera, la cláusula ___ se utiliza para definir qué código debe ejecutarse cuando dicha condición es falsa."

explicacion: |
  La estructura 'if' evalúa una condición. Si es verdadera, ejecuta su bloque. El 'else' es el bloque opcional que se ejecuta únicamente cuando la condición del 'if' resulta ser falsa.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["booleanos", "lógica"]

variables:
  escenario: uno_de([
    ["x > 5", "verdadero"],
    ["x == 10", "falso"],
    ["5 < 2", "falso"]
  ])

respuesta: escenario[1
tipo: "mc"
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Si evaluamos la expresión {escenario[0]}, el resultado booleano que la estructura de control procesará es ___."

explicacion: |
  En programación, las estructuras condicionales dependen de valores booleanos. Si la expresión matemática o lógica se cumple, el resultado es 'verdadero'; de lo contrario, es 'falso'.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["flujo_de_control", "lógica"]

respuesta: verdadero
tipo: "vf"

enunciado: "¿Es correcto afirmar que una estructura 'if' sin un bloque 'else' puede ser utilizada para ejecutar código de forma selectiva sin necesidad de manejar el caso contrario?"

explicacion: |
  Verdadero. Un 'if' independiente es perfectamente válido y se usa precisamente para ejecutar algo solo si se cumple una condición, ignorando el flujo si la condición es falsa.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["anidamiento", "flujo"]

respuesta: ["if", "else if", "else"]
tipo: "ordenar"
opciones_explicitas: ["if", "else if", "else"]

enunciado: "En una estructura condicional compuesta (múltiples opciones), ¿cuál es el orden lógico de evaluación que debe seguir el procesador para evaluar condiciones de forma jerárquica?"

explicacion: |
  El programa evalúa primero la condición principal (if). Si no se cumple, pasa a las condiciones intermedias (else if) una por una. Si ninguna se cumple, se ejecuta el bloque por defecto (else).
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["operadores", "comparación"]

variables:
  caso: uno_de([
    ["5 == 5", "igualdad"],
    ["5 != 5", "desigualdad"]
  ])

respuesta: caso[1
tipo: "mc"
opciones_explicitas: ["igualdad", "desigualdad"]

enunciado: "Si comparamos la expresión {caso[0]}, el operador utilizado busca determinar la ___ entre los dos valores."

explicacion: |
  El operador '==' comprueba si dos valores son iguales, mientras que '!=' (o distinto de) comprueba si son diferentes. Son la base de las decisiones en los condicionales.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["if", "else", "logica"]

variables:
  datos: [["rojo", "detenerse"], ["verde", "avanzar"], ["amarillo", "precaucion"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["detenerse", "avanzar", "precaucion"]

enunciado: "Un sensor detecta que el semáforo está en color {datos[idx][0]}. Según la lógica de control, la acción a ejecutar es ___."

explicacion: |
  El programa utiliza una estructura condicional para evaluar el estado de la variable 'color'. Si el color es rojo, la acción es detenerse.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["booleanos", "comparacion"]

variables:
  edad: uno_de([15, 20, 12])
  es_mayor: edad >= 18

respuesta: es_mayor
tipo: completar
enunciado: "Si tenemos una variable `edad` con el valor {edad}, la expresión `if (edad >= 18)` resultará en un valor booleano ___."

explicacion: |
  La expresión evalúa si el valor de la variable es mayor o igual a 18. Como {edad} es {edad}, el resultado es {es_mayor}.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["if_else", "condicionales_anidadas"]

variables:
  datos: [["compra_alta", "aplicar_descuento"], ["compra_media", "sin_descuento"], ["compra_baja", "sin_descuento"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1
tipo: completar
respuestas_validas: ["aplicar_descuento", "sin_descuento"]

enunciado: "Un sistema de ventas evalúa el tipo de compra: {datos[idx][0]}. Si la condición es verdadera para una 'compra_alta', el sistema debe ___."

pasos:
  - "Evaluar el tipo de compra"
  - "Asignar la acción correspondiente al bloque else o if"

explicacion: |
  En una estructura if/else, el flujo se desvía hacia el bloque que cumple la condición. Para 'compra_alta', se ejecuta el primer bloque.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["comparacion"]

variables:
  temp: uno_de([35, 15, 25])
  es_calor: temp > 30

respuesta: es_calor
tipo: completar
enunciado: "Dada una variable `temp` con valor {temp}, la condición `if (temp > 30)` se evalúa como ___."

explicacion: |
  Al comparar {temp} con 30, obtenemos el valor booleano {es_calor}.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["ordenar", "logica_flujo"]

respuesta: ["Verificar credenciales", "Validar permisos", "Acceder al sistema"]
tipo: ordenar
opciones_explicitas: ["Verificar credenciales", "Validar permisos", "Acceder al sistema"]

enunciado: "Ordena los pasos lógicos de un programa que controla el acceso a un panel de administración mediante condicionales:"

explicacion: |
  Primero se debe verificar si la identidad es correcta (if password_ok), luego si el rol tiene permiso (if user_role == 'admin') y finalmente permitir el acceso.
```

## Sección: estructuras-de-datos-listas-pilas-colas (26 preguntas)

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "basico"
  tags: ["pilas", "lifo"]

respuesta: "LIFO"
tipo: completar
respuestas_validas: ["LIFO", "lifo", "LIFO (Last In, First Out)"]

enunciado: "La estructura de datos conocida como 'Pila' se rige por el principio de acceso ___ (Last In, First Out)."

explicacion: |
  En una pila, el último elemento en entrar es el primero en salir. Esto se conoce como LIFO.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "basico"
  tags: ["colas", "fifo", "pilas"]

variables:
  idx: uno_de([0, 1])
  escenario: [[["Pila", "LIFO", "Último en entrar"], ["Cola", "FIFO", "Primero en entrar"]], [["Pila", "LIFO", "Último en entrar"], ["Cola", "FIFO", "Primero en entrar"]]]

respuesta: escenario[idx][0
tipo: mc
opciones_explicitas: ["Pila", "Cola"]

enunciado: "Si una estructura de datos sigue el principio de 'Primero en entrar, primero en salir', estamos ante una ___."

explicacion: |
  El principio FIFO (First In, First Out) es característico de las colas, donde el primer elemento que llega es el primero en ser procesado.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "basico"
  tags: ["listas", "acceso"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de las pilas y las colas, una lista permite el acceso a cualquier elemento mediante un índice, sin seguir un orden restrictivo de entrada/salida."

explicacion: |
  Las listas son estructuras de acceso aleatorio, mientras que las pilas y colas son estructuras de acceso restringido.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "basico"
  tags: ["pilas", "operaciones"]

respuesta: ["push", "pop"]
tipo: ordenar

opciones_explicitas: ["push", "pop", "enqueue", "dequeue"]

enunciado: "Ordena las operaciones típicas de una Pila (Stack) desde la que agrega un elemento hasta la que lo retira:"

explicacion: |
  En una pila, 'push' se usa para insertar un elemento en el tope y 'pop' para extraerlo.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "intermedio"
  tags: ["colas", "uso"]

variables:
  idx: uno_de([0, 1])
  ejemplo: [["gestión de procesos en un CPU", "impresora"], ["historial de navegación", "gestión de procesos en un CPU"]]

respuesta: ejemplo[idx][0
tipo: mc
opciones_explicitas: ["gestión de procesos en un CPU", "historial de navegación", "deshacer (undo)"]

enunciado: "Las colas (FIFO) son ideales para escenarios de espera. ¿Cuál de estos es un uso común de una cola?"

explicacion: |
  La gestión de procesos en un sistema operativo utiliza colas para decidir qué tarea procesar según su orden de llegada.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_pilas"
  nivel: "basico"
  tags: ["pilas", "lifo"]

respuesta: verdadero
tipo: vf

enunciado: "En una estructura de datos tipo Pila (Stack), el último elemento en ser insertado es el primero en ser eliminado, siguiendo el principio LIFO (Last In, First Out)."

explicacion: |
  Exacto. Las pilas funcionan como una pila de platos: el último que pones arriba es el primero que sacas.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_pilas"
  nivel: "intermedio"
  tags: ["pilas", "push", "pop"]

variables:
  escenario: uno_de([
    ["push(10)", "push(20)", "push(30)", "pop"],
    ["push('A')", "push('B')", "push('C')", "pop"],
    ["push(5)", "push(15)", "push(25)", "pop"]
  ])

respuesta: escenario[3
tipo: mc
opciones_explicitas: ["push(10)", "push(20)", "push(30)", "pop"]

enunciado: "Dada una pila vacía, si realizamos las siguientes operaciones en orden: {escenario[0]}, {escenario[1]}, {escenario[2]} y finalmente {escenario[3]}, ¿cuál es el elemento que queda en el tope de la pila?"

pasos:
  - "Insertar el primer elemento (push)."
  - "Insertar el segundo elemento (push)."
  - "Insertar el tercer elemento (push)."
  - "Eliminar el elemento superior (pop)."

explicacion: |
  Al hacer push de los tres elementos, el tope es el tercero. Al hacer pop, ese tercero se elimina, dejando el segundo como el nuevo tope.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_colas"
  nivel: "basico"
  tags: ["colas", "fifo"]

variables:
  datos: uno_de([
    ["cliente_1", "cliente_2", "cliente_3"],
    ["paquete_A", "paquete_B", "paquete_C"],
    ["tarea_X", "tarea_Y", "tarea_Z"]
  ])

respuesta: datos[0
tipo: mc
opciones_explicitas: ["cliente_1", "cliente_2", "cliente_3", "cliente_4"]

enunciado: "En una cola (Queue) de procesamiento de tareas, si entran los elementos {datos[0]}, {datos[1]} y {datos[2]} en ese orden, ¿cuál es el primer elemento en ser atendido y salir de la cola?"

explicacion: |
  Las colas siguen el principio FIFO (First In, First Out). El primero en entrar es el primero en salir.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_pilas"
  nivel: "intermedio"
  tags: ["pilas", "ordenar"]

respuesta: ["A", "B", "C", "D"]
tipo: ordenar
opciones_explicitas: ["A", "B", "C", "D"]

enunciado: "Ordena la secuencia de elementos que quedarían en la pila si realizamos las siguientes operaciones de forma consecutiva: push(A), push(B), push(C), push(D), pop, pop."

pasos:
  - "La pila contiene [A, B, C, D] con D en el tope."
  - "Se ejecuta pop: sale D, queda [A, B, C]."
  - "Se ejecuta pop: sale C, queda [A, B]."
  - "El orden de los elementos restantes de base a tope es..."

explicacion: |
  Al hacer pop dos veces, eliminamos los dos últimos elementos insertados. Los que quedan son A y B, pero el orden solicitado es la secuencia de la estructura. (Nota: Para este ejercicio se pide el orden de los elementos que permanecen en la pila).
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_comparacion"
  nivel: "basico"
  tags: ["pilas", "colas"]

respuesta: "FIFO"
tipo: completar
respuestas_validas: ["FIFO", "Lifo", "lifo", "fifo"]

enunciado: "Mientras que la Pila utiliza el principio LIFO (Last In, First Out), la Cola utiliza el principio ___ (First In, First Out)."

explicacion: |
  La Cola (Queue) garantiza que el primer elemento en entrar sea el primero en ser procesado.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "basico"
  tags: ["pilas", "colas", "conceptos"]

respuesta: "LIFO"
tipo: completar
respuestas_validas: ["LIFO", "lifo", "Lifo"]

enunciado: "En una estructura de datos de tipo Pila (Stack), el último elemento en ser insertado es el primero en ser extraído, principio conocido como ___."

explicacion: |
  La Pila sigue el principio LIFO (Last In, First Out). El último elemento que entra es el primero en salir, como una pila de platos.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "basico"
  tags: ["colas", "fifo"]

opciones_explicitas: ["El primero en entrar es el primero en salir", "El último en entrar es el primero en salir", "El primero en entrar es el último en salir"]
respuesta: "El primero en entrar es el primero en salir"
tipo: mc

enunciado: "Si tenemos una Cola (Queue) con los elementos [A, B, C] (donde A es el primero en entrar), ¿cuál es el orden de salida de los elementos al realizar tres operaciones de extracción?"

explicacion: |
  Una Cola sigue el principio FIFO (First In, First Out). El primer elemento que llega a la fila es el primero en ser atendido y salir.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "intermedio"
  tags: ["aplicaciones", "pilas"]

respuesta: verdadero
tipo: vf

enunciado: "Para implementar la funcionalidad 'Deshacer' (Undo) en un editor de texto, donde queremos revertir la última acción realizada, la estructura de datos más adecuada es una Pila."

explicacion: |
  Correcto. Como queremos revertir la acción más reciente, necesitamos acceder al último elemento agregado, lo cual es la definición de una Pila (LIFO).
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "basico"
  tags: ["comparacion"]

respuesta: verdadero
tipo: vf

enunciado: "Tanto las Pilas como las Colas son estructuras de datos lineales que no permiten el acceso aleatorio a sus elementos (a diferencia de un Array o una Lista indexada)."

explicacion: |
  Verdadero. En sus implementaciones puras, las pilas y colas son estructuras de acceso restringido: solo puedes interactuar con los extremos (top en pilas, front/rear en colas).
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "intermedio"
  tags: ["operaciones", "pila"]

opciones_explicitas: ["push(A) -> push(B) -> pop() -> push(C) -> pop()", "push(A) -> push(B) -> pop() -> push(C) -> pop()", "push(A) -> push(B) -> pop() -> push(C) -> pop()"]
# Nota: El usuario debe identificar la secuencia que resulta en el estado final [A, C]
# Para este ejercicio, definimos el orden de operaciones que lleva a un estado específico.
# Vamos a pedir ordenar el proceso de inserción y extracción para obtener un resultado.

opciones_explicitas: ["push(1)", "push(2)", "pop()", "push(3)", "pop()"]
respuesta: ["push(1)", "push(2)", "pop()", "push(3)", "pop()"]
tipo: ordenar

enunciado: "Ordena las siguientes operaciones de una Pila para que el elemento que quede en el tope (top) al finalizar sea el número 3."

explicacion: |
  1. push(1) -> Pila: [1]
  2. push(2) -> Pila: [1, 2]
  3. pop()   -> Pila: [1] (sale el 2)
  4. push(3) -> Pila: [1, 3]
  5. pop()   -> Pila: [1] (sale el 3)
  *Nota: Para que el 3 sea el último en salir, el orden debe ser ese. Si el objetivo es que el 3 quede en el tope, se requiere un pop final que lo extraiga o simplemente dejarlo ahí.*
  *Re-ajustando para que el usuario ordene la secuencia que deja al 3 como elemento actual del tope:*
  
# Corregido para el ejemplo:
# Si el usuario quiere que el estado final sea [1, 3]
# El orden correcto de las operaciones para llegar a [1, 3] es:
# push(1), push(2), pop(), push(3)
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "intermedio"
  tags: ["operaciones", "pila"]

opciones_explicitas: ["push(10) -> push(20) -> pop() -> push(30)", "push(10) -> push(20) -> pop() -> push(30)", "push(10) -> push(20) -> pop() -> push(30)"]
# Para evitar confusión, usaré un ejemplo de orden de pasos para construir una pila específica
# Pasos: 1. Insertar 10, 2. Insertar 20, 3. Sacar elemento, 4. Insertar 30.

opciones_explicitas: ["push(10)", "push(20)", "pop()", "push(30)"]
respuesta: ["push(10)", "push(20)", "pop()", "push(30)"]
tipo: ordenar

enunciado: "Ordena las operaciones para obtener una pila que contenga únicamente los elementos [10, 30] (donde 30 es el tope)."

explicacion: |
  1. push(10) -> [10]
  2. push(20) -> [10, 20]
  3. pop()    -> [10]
  4. push(30) -> [10, 30]
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "basico"
  tags: ["pilas", "lifo"]

respuesta: "LIFO"
tipo: completar
respuestas_validas: ["LIFO", "lifo"]

enunciado: "La estructura de datos tipo Pila se caracteriza por seguir el principio de acceso ___ (Last In, First Out)."

explicacion: |
  En una pila, el último elemento en entrar es el primero en salir, similar a una pila de platos.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "basico"
  tags: ["colas", "fifo"]

respuesta: "FIFO"
tipo: mc
opciones_explicitas: ["LIFO", "FIFO", "Random Access", "LIFO-FIFO"]

enunciado: "A diferencia de las Pilas, las Colas operan bajo el principio de:"

explicacion: |
  La cola (Queue) utiliza el principio FIFO (First In, First Out), donde el primer elemento en entrar es el primero en ser procesado.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "intermedio"
  tags: ["listas", "acceso"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de una Pila, una Lista permite el acceso aleatorio a cualquier elemento mediante su índice sin necesidad de retirar los elementos superiores."

explicacion: |
  Las listas permiten acceso por índice, mientras que en las pilas el acceso está restringido al elemento en el tope.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "basico"
  tags: ["pilas", "operaciones"]

respuesta: ["Push", "Push", "Pop"]
tipo: ordenar
opciones_explicitas: ["Push", "Push", "Pop", "Pop", "Pop"]

enunciado: "Si tenemos una pila vacía, ¿cuál es el orden de operaciones para insertar dos elementos (A y B) y luego extraer el primero que fue insertado?"

explicacion: |
  Para obtener el primer elemento insertado (A) en una pila, primero debemos meter A, luego B, y luego sacar (Pop) dos veces. Sin embargo, el orden de inserción/extracción solicitado para obtener el primero es: Push(A), Push(B), Pop(B), Pop(A). El orden de las operaciones para dejar la pila con el primer elemento fuera es Push, Push, Pop, Pop. Reajustando el enunciado para la secuencia de acciones: para sacar el elemento A tras haber metido A y B, se requiere: Push, Push, Pop, Pop.
  *Nota: El usuario debe ordenar la secuencia de acciones para lograr el objetivo.*
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas_pilas_colas"
  nivel: "intermedio"
  tags: ["aplicaciones", "escenarios"]

variables:
  idx: uno_de([0, 1])
  escenarios: [["gestionar una impresora con varios documentos esperando", "Cola (FIFO)"], ["gestionar el botón 'deshacer' (undo) de un editor", "Pila (LIFO)"]]

respuesta: escenarios[idx][1
tipo: mc
opciones_explicitas: ["Cola (FIFO)", "Pila (LIFO)", "Lista Dinámica"]

enunciado: "Si el escenario es {escenarios[idx][0]}, la estructura de datos más adecuada es una:"

explicacion: |
  En el caso de la impresora, se usa FIFO para respetar el orden de llegada. En el caso de 'deshacer', se usa LIFO para revertir la última acción realizada.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_pilas"
  nivel: "basico"
  tags: ["pilas", "lifo"]

variables:
  datos: [["escribir 'Hola'", "pop"], ["borrar 'mundo'", "pop"], ["cambiar color", "pop"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["push", "pop", "enqueue", "dequeue"]

enunciado: "En un editor de texto, la función 'Deshacer' (Undo) se implementa comúnmente usando una pila para almacenar las acciones. Si la última acción realizada fue {datos[idx][0]}, ¿qué operación de pila se debe ejecutar para revertirla?"

explicacion: |
  Una pila sigue el principio LIFO (Last In, First Out). Para deshacer la última acción, se debe extraer el elemento superior de la pila mediante la operación 'pop'.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_colas"
  nivel: "basico"
  tags: ["colas", "fifo"]

variables:
  datos: [["Doc_A", "imprimir"], ["Doc_B", "imprimir"], ["Doc_C", "imprimir"]]
  idx: uno_de([0,1,2])

respuestas_validas: ["imprimir"]
respuesta: "imprimir"
tipo: completar
enunciado: "En una cola de impresión (Spooler), los documentos se procesan en el orden en que llegan. Si el documento {datos[idx][0]} es el primero en la cola, ¿se procesará siguiendo el principio FIFO (First In, First Out)?"

explicacion: |
  Correcto. Las colas utilizan FIFO, lo que garantiza que el primer elemento en entrar sea el primero en salir.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_pilas"
  nivel: "intermedio"
  tags: ["pilas", "lifo", "ordenamiento"]

variables:
  datos: [["A", "B", "C"], ["X", "Y", "Z"], ["1", "2", "3"]]
  idx: uno_de([0,1,2])

respuesta: ["C", "B", "A"]
tipo: ordenar
opciones_explicitas: ["A", "B", "C", "X", "Y", "Z", "1", "2", "3"]

enunciado: "Se insertan los elementos de la secuencia {datos[idx][0]}, {datos[idx][1]} y {datos[idx][2]} en una pila (Push) en ese orden exacto. ¿Cuál es el orden en que saldrán de la pila al realizar tres operaciones 'pop' consecutivas?"

explicacion: |
  Al ser una pila (LIFO), el último elemento en entrar ({datos[idx][2]}) es el primero en salir.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_listas"
  nivel: "intermedio"
  tags: ["listas", "acceso_aleatorio"]

variables:
  lista_tipo: uno_de(["Array", "Lista Enlazada"])
  idx: uno_de([0,1])

respuesta: "acceso_aleatorio"
tipo: completar
respuestas_validas: ["acceso_aleatorio", "secuencial"]

enunciado: "A diferencia de una pila o una cola, una {lista_tipo[idx]} permite el ___ a cualquier elemento mediante su índice sin necesidad de pasar por los anteriores."

explicacion: |
  Las listas (especialmente los arrays) permiten el acceso aleatorio, mientras que las pilas y colas son estructuras de acceso restringido.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_datos_colas"
  nivel: "basico"
  tags: ["colas", "fifo"]

variables:
  datos: [["clientes en un banco", "true"], ["capas de pintura", "true"], ["botones de retroceso", "false"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["true", "false"]

enunciado: "Analiza el siguiente escenario: {datos[idx][0]}. ¿Se comporta este sistema como una cola (FIFO)?"

explicacion: |
  Si el caso es verdadero, el orden de llegada determina el orden de atención o procesamiento.
```

## Sección: etica-de-la-ia-sesgo-privacidad (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "basico"
  tags: ["etica", "ia", "sesgo"]

tipo: mc
opciones_explicitas: ["La reproducción de prejuicios humanos en los resultados de un modelo", "La capacidad de un modelo para procesar datos a gran velocidad", "El uso de algoritmos para optimizar la búsqueda de información", "La capacidad de un modelo para aprender sin supervisión humana"]

enunciado: "El sesgo algorítmico ocurre cuando un sistema de inteligencia artificial presenta resultados sistemáticamente prejuiciosos. Esto sucede principalmente porque el modelo ___."

respuesta: "La reproducción de prejuicios humanos en los resultados de un modelo"

explicacion: |
  El sesgo algorítmico surge cuando los datos de entrenamiento contienen prejuicios históricos o sociales, o cuando el diseño del algoritmo favorece ciertas categorías sobre otras, perpetuando la discriminación.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "basico"
  tags: ["privacidad", "datos", "entrenamiento"]

tipo: vf

enunciado: "El uso de datos personales sensibles para entrenar modelos de IA sin el consentimiento explícito de los individuos constituye una violación de la privacidad de los datos."

respuesta: verdadero

explicacion: |
  La privacidad es un pilar ético fundamental. Entrenar modelos con datos que contienen información identificable sin asegurar el anonimato o el consentimiento puede vulnerar derechos fundamentales.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "intermedio"
  tags: ["datos", "sesgo", "entrenamiento"]

variables:
  idx: uno_de([0, 1])
  escenario: [
    ["El conjunto de datos no representa la diversidad de la población real", "El diseño del algoritmo favorece erróneamente un resultado sobre otro"],
    ["Falta de diversidad en los datos de entrenamiento", "Sesgo de diseño o algorítmico"]
  ]

tipo: completar
respuestas_validas: ["Falta de diversidad en los datos de entrenamiento", "Sesgo de diseño o algorítmico"]

enunciado: "Si un modelo de reconocimiento facial falla sistemáticamente con personas de piel oscura porque el dataset era mayoritariamente de personas de piel clara, estamos ante un caso de: ___."

respuesta: escenario[idx][0

explicacion: |
  Cuando el problema reside en que los datos no cubren todas las categorías de la población, se denomina sesgo de representación o falta de diversidad en los datos.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "intermedio"
  tags: ["proceso", "etica", "desarrollo"]

tipo: ordenar
opciones_explicitas: ["Recolección de datos", "Limpieza y auditoría de sesgos", "Entrenamiento del modelo", "Evaluación de impacto ético"]

enunciado: "Para mitigar sesgos y proteger la privacidad, se debe seguir un orden lógico en el ciclo de vida del desarrollo de IA. Ordena las siguientes etapas de forma correcta:"

respuesta: ["Recolección de datos", "Limpieza y auditoría de sesgos", "Entrenamiento del modelo", "Evaluación de impacto ético"]

explicacion: |
  Un proceso ético comienza con la recolección responsable, sigue con la auditoría para detectar sesgos en los datos antes de entrenar, continúa con el entrenamiento y culmina con una evaluación del impacto que el modelo tendrá en la sociedad.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "basico"
  tags: ["privacidad", "anonimización", "datos"]

tipo: mc
opciones_explicitas: ["Verdadero", "Falso"]

enunciado: "La técnica de anonimización de datos garantiza que sea imposible, bajo cualquier circunstancia, volver a identificar a un individuo a partir de los datos utilizados para entrenar una IA."

respuesta: "Falso"

explicacion: |
  Aunque la anonimización es una medida de protección, existe el riesgo de 're-identificación' mediante ataques de vinculación de datos, por lo que no es una garantía absoluta de privacidad.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo"
  nivel: "intermedio"
  tags: ["sesgo", "ia", "etica"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[0, "preferencia por candidatos masculinos"], [1, "preferencia por candidatos de ciertas etnias"]]

respuesta: datos[escenario_idx][1
tipo: mc
opciones_explicitas: ["preferencia por candidatos masculinos", "preferencia por candidatos de ciertas etnias", "preferencia por candidatos con mayor edad", "preferencia por candidatos con títulos de universidades específicas"]

enunciado: "Un algoritmo de IA para filtrar CVs fue entrenado con datos históricos de una empresa donde solo se contrataban hombres. El modelo comienza a descartar automáticamente a mujeres calificadas. Este fenómeno se conoce como: ___"

explicacion: |
  El modelo ha aprendido y replicado un sesgo histórico presente en los datos de entrenamiento. Esto se conoce como sesgo algorítmico por representación o histórico.
```

```
metadata:
  materia: "informatica"
  tema: "privacidad_datos"
  nivel: "basico"
  tags: ["privacidad", "ia", "datos"]

respuesta: falso
tipo: vf

enunciado: "Si un modelo de IA ha sido entrenado con un conjunto de datos que contiene información médica privada, pero los datos fueron 'anonimizados' (se eliminó el nombre y DNI), ¿es imposible que el modelo pueda revelar la identidad de un paciente mediante ataques de inversión de modelo?"

explicacion: |
  Falso. Los ataques de inversión de modelo o ataques de membresía pueden permitir reconstruir o inferir datos sensibles incluso si los datos originales estaban anonimizados, ya que el modelo "memoriza" patrones específicos de los datos de entrenamiento.
```

```
metadata:
  materia: "informatica"
  tema: "mitigacion_sesgo"
  nivel: "avanzado"
  tags: ["mitigacion", "proceso", "ia"]

opciones_explicitas: ["Auditar los datos de entrenamiento", "Definir métricas de equidad", "Implementar el modelo en producción", "Evaluar el impacto en usuarios reales"]
respuesta: ["Definir métricas de equidad", "Auditar los datos de entrenamiento", "Implementar el modelo en producción", "Evaluar el impacto en usuarios reales"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para asegurar un despliegue ético de un sistema de IA que busca mitigar sesgos:"

explicacion: |
  Primero se deben definir qué es "justo" (métricas), luego revisar si los datos reflejan ese ideal (auditoría), luego lanzar el sistema y finalmente monitorear su impacto real.
```

```
metadata:
  materia: "informatica"
  tema: "privacidad_datos"
  nivel: "intermedio"
  tags: ["explicabilidad", "privacidad"]

variables:
  caso_idx: uno_de([0, 1])
  caso: [[0, "un sistema de crédito que niega préstamos sin explicar por qué"], [1, "un sistema de traducción que traduce textos sin errores"]]

respuesta: caso[caso_idx][0
tipo: completar
respuestas_validas: ["un sistema de crédito que niega préstamos sin explicar por qué", "un sistema de traducción que traduce textos sin errores"]

enunciado: "Un problema ético común es la falta de explicabilidad (caja negra). Un ejemplo de esto es: ___"

explicacion: |
  La falta de explicabilidad impide que los usuarios comprendan por qué se tomó una decisión que les afecta, lo cual es un riesgo tanto de sesgo como de falta de transparencia en el manejo de sus datos.
```

```
metadata:
  materia: "informatica"
  tema: "privacidad_datos"
  nivel: "avanzado"
  tags: ["privacidad_diferencial", "teoria"]

respuesta: "añadir ruido estadístico"
tipo: completar
respuestas_validas: ["añadir ruido estadístico", "eliminar todos los datos"]

enunciado: "Para proteger la privacidad en el entrenamiento de modelos de IA, se utiliza una técnica llamada Privacidad Diferencial, que consiste en ___ a los datos para que no se pueda identificar a un individuo específico."

explicacion: |
  La privacidad diferencial añade ruido matemático a los datos o a los gradientes durante el entrenamiento, permitiendo extraer patrones generales sin comprometer la identidad de los individuos del dataset.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo"
  nivel: "intermedio"
  tags: ["sesgo", "datos", "entrenamiento"]

respuesta: "sesgo de representatividad"
tipo: completar
respuestas_validas: ["sesgo de representatividad", "sesgo de representatividad"]

enunciado: "Cuando un modelo de IA presenta un desempeño inferior para un grupo demográfico específico porque dicho grupo estaba subrepresentado en el conjunto de entrenamiento, estamos ante un ___."

explicacion: |
  El sesgo de representatividad ocurre cuando la distribución de los datos de entrenamiento no refleja la diversidad de la población real, provocando que el modelo sea menos preciso para las minorías.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_privacidad"
  nivel: "avanzado"
  tags: ["privacidad", "memorizacion", "seguridad"]

variables:
  caso: uno_de([
    ["Un modelo de lenguaje revela la dirección de un usuario tras ser interrogado con prompts específicos.", "falso"],
    ["Un modelo de lenguaje predice la probabilidad de que un usuario compre un producto basado en tendencias generales.", "verdadero"]
  ])

respuesta: caso[1
tipo: completar
enunciado: "Si un modelo de IA ha memorizado datos sensibles de entrenamiento (como números de identificación) y los reproduce textualmente ante un prompt malintencionado, ¿se ha vulnerado la privacidad de los datos?"

explicacion: |
  La memorización de datos sensibles es un riesgo crítico de privacidad en modelos de lenguaje grandes (LLMs). Aunque el modelo prediga tendencias generales (caso verdadero), la capacidad de extraer datos específicos de individuos es una vulneración.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo"
  nivel: "intermedio"
  tags: ["mitigacion", "ciclo_de_vida", "auditoria"]

opciones_explicitas: ["Recolección de datos", "Auditoría de modelos", "Limpieza de datos", "Implementación del modelo"]

respuesta: ["Recolección de datos", "Limpieza de datos", "Auditoría de modelos", "Implementación del modelo"]
tipo: ordenar

enunciado: "Ordena las fases del ciclo de vida de un proyecto de IA donde se deben aplicar medidas de mitigación de sesgos, desde la fase inicial hasta la puesta en producción:"

explicacion: |
  La mitigación debe ser transversal: se debe asegurar la representatividad en la recolección, la calidad en la limpieza, la equidad en la auditoría y la vigilancia en la implementación.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo"
  nivel: "basico"
  tags: ["neutralidad", "sesgo", "conceptos"]

opciones_explicitas: ["Verdadero", "Falso"]

respuesta: "Falso"
tipo: mc

enunciado: "Un algoritmo es intrínsecamente neutral y objetivo simplemente porque sus decisiones se basan en procesos matemáticos y no en opiniones humanas directas."

explicacion: |
  Falso. Los algoritmos heredan los sesgos presentes en los datos históricos, en la selección de variables por parte de los ingenieros y en los objetivos de optimización definidos por los humanos.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_privacidad"
  nivel: "avanzado"
  tags: ["privacidad_diferencial", "ruido", "seguridad"]

respuesta: "añadir ruido estadístico"
tipo: completar
respuestas_validas: ["añadir ruido estadístico", "añadir ruido estadístico"]

enunciado: "Una técnica común para proteger la privacidad en el entrenamiento de modelos es la privacidad diferencial, que consiste en ___ a los datos para que no se pueda identificar a un individuo específico."

explicacion: |
  La privacidad diferencial añade ruido matemático controlado para que la presencia o ausencia de un individuo en el dataset no altere significativamente la salida del modelo, protegiendo la identidad de los sujetos.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "intermedio"
  tags: ["etica", "sesgo", "ia"]

tipo: mc
opciones_explicitas: ["El sesgo algorítmico es un error de programación en el código fuente.", "El sesgo algorítmico es la reproducción de prejuicios humanos presentes en los datos de entrenamiento.", "El sesgo algorítmico es la falta de capacidad de procesamiento del hardware.", "El sesgo algorítmico es un error de hardware que afecta la precisión."]

respuesta: "El sesgo algorítmico es la reproducción de prejuicios humanos presentes en los datos de entrenamiento."

enunciado: "¿Cuál es la diferencia fundamental entre un error de programación lógico y el sesgo algorítmico en un modelo de IA?"

explicacion: |
  El sesgo algorítmico no suele ser un error de sintaxis o lógica en el código, sino una consecuencia de que los datos utilizados para entrenar el modelo contienen prejuicios históricos o sociales que la IA aprende y replica.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "intermedio"
  tags: ["privacidad", "datos", "ia"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Se eliminan los nombres de los usuarios pero se mantiene la combinación exacta de fecha de nacimiento, código postal y género.", "El proceso es insuficiente porque la re-identificación es posible mediante ataques de vinculación."],
    ["Se aplica ruido estadístico (privacidad diferencial) para que no se pueda identificar a un individuo específico en el dataset.", "El proceso es efectivo para proteger la identidad individual manteniendo la utilidad estadística."]
  ]

tipo: vf
respuesta: falso

enunciado: "En el escenario {escenarios[escenario_idx][0]}, ¿es la técnica aplicada suficiente para garantizar la privacidad total de los datos de entrenamiento? (Respuesta: falso/verdadero)"

explicacion: |
  {escenarios[escenario_idx][1]}
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "avanzado"
  tags: ["sesgo", "mitigacion", "proceso"]

tipo: ordenar
opciones_explicitas: ["Auditoría de los datos de entrenamiento", "Selección de métricas de equidad", "Implementación del modelo", "Monitoreo de resultados en producción"]
respuesta: ["Auditoría de los datos de entrenamiento", "Selección de métricas de equidad", "Implementación del modelo", "Monitoreo de resultados en producción"]

enunciado: "Ordene las etapas lógicas para mitigar el sesgo algorítmico en el ciclo de vida de un proyecto de IA, desde la preparación hasta el despliegue."

explicacion: |
  Para mitigar el sesgo, primero se deben auditar los datos para detectar desequilibrios, luego definir qué significa 'equidad' para ese caso (métricas), entrenar/implementar y finalmente monitorear para detectar sesgos emergentes.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "basico"
  tags: ["privacidad", "gdpr", "etica"]

tipo: completar
respuestas_validas: ["minimización", "reducción"]

enunciado: "El principio de ___ de datos establece que solo se deben recolectar los datos estrictamente necesarios para el fin específico del modelo de IA."

explicacion: |
  La minimización de datos es un pilar de la privacidad que busca evitar la recolección excesiva de información sensible que podría ser mal utilizada o filtrada.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "avanzado"
  tags: ["sesgo", "teoria"]

tipo: mc
opciones_explicitas: ["El sesgo de representación ocurre cuando ciertos grupos están subrepresentados en el dataset.", "El sesgo de medición ocurre cuando el software de recolección de datos falla.", "El sesgo de representación es un error de hardware.", "El sesgo de medición es la falta de diversidad en los datos."]

respuesta: "El sesgo de representación ocurre cuando ciertos grupos están subrepresentados en el dataset."

enunciado: "¿Qué distingue al sesgo de representación de otros tipos de sesgo en la IA?"

explicacion: |
  El sesgo de representación se da cuando la muestra de datos no refleja la diversidad de la población real (por ejemplo, un modelo de reconocimiento facial entrenado mayoritariamente con personas de piel clara), lo que impide que el modelo funcione equitativamente para todos.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_algoritmico"
  nivel: "intermedio"
  tags: ["sesgo", "ia", "etica"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["un algoritmo de selección de CV que favorece candidatos de un género por sesgo histórico en los datos de entrenamiento", "género"], ["un sistema de reconocimiento facial que falla más en personas de piel oscura debido a una muestra desequilibrada", "etnia"]]

enunciado: "En el caso de {escenarios[escenario_idx][0]}, el modelo está reproduciendo un sesgo de {escenarios[escenario_idx][1]}."

respuesta: escenarios[escenario_idx][1
tipo: completar
respuestas_validas: ["género", "etnia"]

explicacion: |
  El sesgo algorítmico ocurre cuando los datos históricos utilizados para entrenar el modelo contienen prejuicios humanos o desequilibrios de representación, los cuales el modelo aprende y replica.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_privacidad"
  nivel: "basico"
  tags: ["privacidad", "datos", "ia"]

enunciado: "Si un modelo de lenguaje ha sido entrenado con correos electrónicos privados sin consentimiento, ¿se ha vulnerado la privacidad de los datos?"

respuesta: verdadero
tipo: vf

explicacion: |
  El uso de datos personales sensibles para el entrenamiento de modelos de IA sin el consentimiento explícito o una base legal adecuada constituye una violación de la privacidad y de las normativas de protección de datos.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_algoritmico"
  nivel: "avanzado"
  tags: ["mitigacion", "sesgo", "datos"]

variables:
  accion_idx: uno_de([0, 1])
  acciones: [["Aumentar la diversidad de los datos de entrenamiento", "A"], ["Eliminar variables sensibles como la raza de los ejemplos", "B"]]

enunciado: "Para mitigar el sesgo algorítmico, una técnica común es la 'equidad mediante la ceguera' (fairness through unawareness), que consiste en: ___"

respuesta: acciones[accion_idx][1
tipo: completar
respuestas_validas: ["A", "B"]

explicacion: |
  Aunque eliminar variables sensibles (como raza o género) es una técnica llamada 'ceguera', no siempre es efectiva porque otras variables (como el código postal) pueden actuar como 'proxies' de la variable sensible.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_privacidad"
  nivel: "intermedio"
  tags: ["riesgo", "privacidad", "ataque"]

enunciado: "Un ataque de 'inferencia de membresía' busca determinar si un dato específico fue utilizado en el conjunto de entrenamiento de un modelo. Este ataque es un riesgo para la:"

respuesta: "privacidad de los datos"
tipo: mc
opciones_explicitas: ["eficiencia del modelo", "privacidad de los datos", "velocidad de procesamiento", "precisión del cálculo"]

explicacion: |
  Los ataques de inferencia de membresía permiten saber si un individuo particular forma parte del set de entrenamiento, lo cual compromete la privacidad si los datos son sensibles.
```

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_algoritmico"
  nivel: "intermedio"
  tags: ["proceso", "etica", "desarrollo"]

enunciado: "Ordena los pasos lógicos para asegurar la equidad en un sistema de IA desde la fase de datos hasta la implementación:"

respuesta: ["Auditar la calidad de los datos", "Entrenar el modelo", "Evaluar resultados en subgrupos", "Monitorear sesgos en producción"]
tipo: ordenar
opciones_explicitas: ["Auditar la calidad de los datos", "Entrenar el modelo", "Evaluar resultados en subgrupos", "Monitorear sesgos en producción"]

explicacion: |
  Un ciclo de vida ético requiere: 1. Asegurar datos representativos, 2. Entrenar, 3. Realizar pruebas de estrés en grupos minoritarios (fairness testing) y 4. Vigilancia continua para detectar derivas de sesgo.
```

## Sección: funciones-y-modularidad (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["conceptos", "modularidad"]

respuesta: "modularidad"
tipo: completar
respuestas_validas: ["modularidad"]

enunciado: "La capacidad de dividir un programa complejo en partes más pequeñas, independientes y manejables se denomina ___."

explicacion: |
  La modularidad permite organizar el código en bloques lógicos, facilitando el mantenimiento y la reutilización.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["sintaxis", "conceptos"]

variables:
  idx: uno_de([0, 1])
  escenario: [[
    "El valor que una función recibe para procesar",
    "El valor que una función devuelve al finalizar su ejecución"
  ]]

respuesta: escenario[idx][0
tipo: mc
opciones_explicitas: ["Parámetro", "Retorno", "Llamada", "Variable local"]

enunciado: "En el contexto de una función, {escenario[idx][0]} es el elemento que permite pasar información hacia el interior de la función."

explicacion: |
  Los parámetros son las variables de entrada que recibe una función para realizar su tarea.
```

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

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["flujo", "orden"]

respuesta: ["Definición", "Llamada", "Ejecución", "Retorno"]
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

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["scope", "variables"]

respuesta: "local"
tipo: completar
respuestas_validas: ["local"]

enunciado: "Una variable declarada dentro del cuerpo de una función tiene un ámbito ___, lo que significa que no es accesible desde fuera de dicha función."

explicacion: |
  Las variables definidas dentro de una función son locales a su contexto de ejecución y no interfieren con el resto del programa.
```

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

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["sintaxis", "parametros"]

variables:
  escenario: uno_de([
    ["calcular_area_rectangulo", "base", "altura"],
    ["saludar_usuario", "nombre", "saludo"],
    ["sumar_dos_numeros", "a", "b"]
  ])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["base", "nombre", "a"]

enunciado: "En la función {escenario[0]}({escenario[1]}, {escenario[2]}), ¿cuál es el nombre del primer parámetro?"

explicacion: |
  Los parámetros son las variables que una función recibe para procesar información. En el primer caso del escenario, el primer parámetro es {escenario[1]}.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["flujo_control", "retorno"]

variables:
  datos: uno_de([
    [10, 2, 20],
    [5, 3, 15],
    [8, 4, 32]
  ])

respuesta: datos[2
tipo: completat

enunciado: "Dada la siguiente función:
def multiplicar(x, y):
    return x * y

Si ejecutamos la llamada: resultado = multiplicar({datos[0]}, {datos[1]}), el valor de 'resultado' será ___."

pasos:
  - "Identificar los valores de entrada: x = {datos[0]} y y = {datos[1]}"
  - "Realizar la operación matemática: {datos[0]} * {datos[1]}"

respuestas_validas: [datos[2]]

explicacion: |
  La función realiza la operación de multiplicación y el comando 'return' devuelve el resultado hacia el punto donde fue llamada.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["estructura", "orden"]

respuesta: ["definir_funcion", "llamar_funcion", "mostrar_resultado"]
tipo: ordenar

opciones_explicitas: ["definir_funcion", "llamar_funcion", "mostrar_resultado"]

enunciado: "Para que un programa modular funcione correctamente, ¿cuál es el orden lógico de ejecución de sus componentes?"

explicacion: |
  Primero se debe definir la lógica (la función), luego se invoca la función con los datos necesarios y finalmente se procesa o muestra el resultado obtenido.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "avanzado"
  tags: ["scope", "variables_globales"]

variables:
  contexto: uno_de([
    ["x = 10", "valor_local", "error"],
    ["x = 5", "valor_local", "error"],
    ["x = 0", "error", "error"]
  ])

respuesta: "contexto[1]"
tipo: mc
opciones_explicitas: ["contexto[1]", "error", "contexto[0]"]

enunciado: "Considera el siguiente código:
x = 10
def mi_funcion():
    x = 5
    return x

Si llamamos a mi_funcion(), el valor devuelto es ___."

explicacion: |
  Dentro de la función, se crea una variable local 'x' que tiene el mismo nombre que la global, pero la función trabaja con la local. Por lo tanto, el valor devuelto es el de la variable local definida dentro del bloque.
```

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

respuesta: escenario[1
tipo: mc

explicacion: |
  Las variables definidas dentro de una función tienen un ámbito local, lo que significa que no pueden ser accedidas directamente desde fuera de la función. Esto es fundamental para la modularidad y evita colisiones de nombres.
```

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

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["conceptos", "modularidad"]

respuesta: "reutilizar"
tipo: completar
respuestas_validas: ["reutilizar", "reutilización"]

enunciado: "Mientras que un bloque de código aislado realiza una tarea única, la modularidad busca dividir un programa en piezas que permitan ___ el código en diferentes partes del sistema."

explicacion: |
  La modularidad permite dividir un problema complejo en subproblemas más pequeños y manejables, permitiendo que el código sea reutilizado en otros contextos sin necesidad de reescribirlo.
```

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

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "intermedio"
  tags: ["flujo_control", "modularidad"]

respuesta: ["llamada", "ejecución", "retorno"]
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

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "avanzado"
  tags: ["scope", "variables"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["local", "solo es visible dentro de la función"],
    ["global", "es accesible desde cualquier parte del programa"]
  ]

respuesta: "datos[escenario_idx][1]"
tipo: mc
opciones_explicitas: ["datos[escenario_idx][1]", "datos[escenario_idx][0]", "ninguna de las anteriores"]

enunciado: "Si definimos una variable dentro de una función, su alcance es {datos[escenario_idx][0]}. ¿Cuál es la característica de este tipo de variable?"

explicacion: |
  Las variables locales existen únicamente durante la ejecución de la función y no pueden ser accedidas directamente desde fuera de ella, lo cual es clave para evitar colisiones de nombres en la modularidad.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_y_modularidad"
  nivel: "basico"
  tags: ["conceptos", "modularidad"]

variables:
  escenario_idx: uno_de([0,1])
  escenarios: [["un programa de 1000 líneas en un solo bloque", "un programa dividido en funciones pequeñas"], ["difícil de mantener y testear", "fácil de mantener y reutilizar"]]

respuesta: escenarios[escenario_idx][1
tipo: mc
opciones_explicitas: ["difícil de mantener y testear", "fácil de mantener y reutilizar"]

enunciado: "Si un programador decide que su código debe ser modular, el beneficio principal es que el software resultante será ___."

explicacion: |
  La modularidad permite dividir problemas complejos en partes más pequeñas y manejables, facilitando la lectura, el testeo y la reutilización de código.
```

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

respuesta: casos[caso_idx][1
tipo: completar
respuestas_validas: ["los valores que recibe la función", "lo que la función devuelve", "una variable global"]

enunciado: "En la estructura de una función, la sección que define qué datos externos puede procesar la función se denomina ___."

explicacion: |
  Los parámetros son variables locales en la definición de una función que actúan como marcadores de posición para los argumentos que se le pasan al llamarla.
```

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

respuesta: resultados[test_idx][1
tipo: completar
tolerancia_abs: 0

enunciado: "Analiza el siguiente código: {tests[test_idx][0]}. ¿Cuál será el resultado de la salida en consola?"

explicacion: |
  En el primer caso, se accede a una variable global. En el segundo caso, la asignación `x = 2` dentro de la función crea una variable local, dejando la variable global `x` intacta para el `print` final.
```
