# Informatica — Estructuras de control bucles (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de bucle

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["conceptos", "terminologia"]

respuesta: "iteración"
tipo: completar
respuestas_validas:
  - "iteración"
  - "iteracion"

enunciado: "En programación, cada una de las repeticiones de un bloque de instrucciones dentro de un bucle se denomina ___."

explicacion: |
  Un bucle permite ejecutar un conjunto de instrucciones varias veces. Cada vez que el ciclo se ejecuta, se dice que ha ocurrido una iteración.
```

### 2 — Diferencia entre for y while

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

### 3 — Componentes del bucle for

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["for", "componentes"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["i", "inicio", "paso"], ["cont", "valor_inicial", "incremento"]]

respuesta: datos[escenario_idx][0]
tipo: mc
opciones_explicitas: ["i", "cont", "valor_inicial", "incremento"]

enunciado: "En una estructura de control 'for' estándar, el primer parámetro suele representar la ___ que actúa como contador."

explicacion: |
  La variable de control (comúnmente llamada 'i' o 'j') es la que toma los valores sucesivos durante el ciclo.
```

### 4 — Orden lógico de ejecución

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["flujo", "orden"]

respuesta_orden: ["Inicializar variable", "Evaluar condición", "Ejecutar cuerpo", "Actualizar variable"]
tipo: ordenar
opciones_explicitas: ["Inicializar variable", "Evaluar condición", "Ejecutar cuerpo", "Actualizar variable"]

enunciado: "Ordena los pasos lógicos que sigue un bucle 'while' en cada ciclo para asegurar un funcionamiento correcto y evitar bucles infinitos."

explicacion: |
  Primero se verifica si la condición es verdadera, luego se ejecuta el código y finalmente se actualiza la variable de control para que la condición pueda llegar a ser falsa eventualmente.
```

### 5 — El bucle infinito

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

### 6 — El bucle for y la suma de rangos

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["for", "iteracion", "suma"]

variables:
  escenario: uno_de([[1, 10], [1, 5], [1, 20]])
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

### 7 — Condición de parada en bucles while

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

### 8 — Análisis de iteraciones

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

### 9 — Secuencia de ejecución

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["ordenar", "flujo"]

respuesta_orden: ["inicializar_contador", "evaluar_condicion", "ejecutar_cuerpo", "actualizar_contador"]
tipo: ordenar

opciones_explicitas: ["inicializar_contador", "evaluar_condicion", "ejecutar_cuerpo", "actualizar_contador"]

enunciado: "Ordena los pasos lógicos que sigue un bucle 'while' en cada iteración para asegurar su funcionamiento correcto:"

explicacion: |
  Primero se debe evaluar si la condición es verdadera. Si lo es, se ejecuta el código interno. Luego, es crucial actualizar la variable de control (incrementar o decrementar) para evitar un bucle infinito.
```

### 10 — El valor de la variable de control

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
respuestas_validas:
  - "11"

enunciado: "Un programa tiene un bucle 'while' que continúa mientras 'puntos' sea menor que 10. Si 'puntos' comienza en {puntos_iniciales} y en cada iteración se le suma {incremento}, ¿cuál será el valor final de 'puntos' cuando el bucle termine?"

explicacion: |
  1. Inicio: puntos = 5. ¿5 < 10? Sí. Sumamos 2 -> puntos = 7.
  2. ¿7 < 10? Sí. Sumamos 2 -> puntos = 9.
  3. ¿9 < 10? Sí. Sumamos 2 -> puntos = 11.
  4. ¿11 < 10? No. El bucle termina. El valor final es 11.
```

### 11 — El bucle infinito por modificación de índice

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

### 12 — El error del índice fuera de rango en for

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

### 13 — El problema de la condición de parada

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["while", "logica"]

enunciado: "En un bucle `while`, la condición evaluada determina si el cuerpo del bucle se ejecuta o no. Si la condición es falsa desde el primer momento, el bucle se ejecuta ___ veces."

respuestas_validas:
  - "0"
tipo: completar

explicacion: |
  A diferencia de un bucle `do-while` (que garantiza al menos una ejecución), el bucle `while` evalúa la condición *antes* de entrar al bloque. Si la condición es falsa inicialmente, el cuerpo nunca se ejecuta.
```

### 14 — Orden de ejecución en bucles anidados

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["anidados", "orden"]

variables:
  resultado: "A, B, C, D"

enunciado: "Ordena la secuencia de salida de los mensajes para el siguiente código:\n\n for i from 1 to 2:\n   for j from 1 to 2:\n     print(i, j)"

opciones_explicitas: ["(1,1), (1,2), (2,1), (2,2)"]

respuesta_orden: ["(1,1), (1,2), (2,1), (2,2)"]
tipo: ordenar

explicacion: |
  En los bucles anidados, el bucle interno (j) debe completar todas sus iteraciones para cada una de las iteraciones del bucle externo (i). Por eso, primero se agota la secuencia de `j` para `i=1` y luego se pasa a `i=2`.
```

### 15 — Mutabilidad de la condición en bucles

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

### 16 — Diferencia clave entre for y while

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

### 17 — El concepto de condición de parada

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["while", "condicion"]

tipo: completar
respuestas_validas:
  - "falso"

respuesta: "falso"

enunciado: "Si una condición en un bucle 'while' nunca cambia su valor y permanece siempre como ___, el programa entrará en un bucle infinito."

explicacion: |
  Un bucle 'while' evalúa la condición antes de cada iteración. Si la condición es siempre 'falso', el bucle no se ejecuta; si es siempre 'verdadero', el bucle nunca termina.
```

### 18 — Comportamiento de la condición en 'while'

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

### 19 — Orden lógico de un bucle iterativo

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["iteracion", "pasos"]

tipo: ordenar
opciones_explicitas: ["Inicialización de la variable de control", "Evaluación de la condición", "Ejecución del cuerpo del bucle", "Actualización de la variable de control"]

respuesta_orden: ["Inicialización de la variable de control", "Evaluación de la condición", "Ejecución del cuerpo del bucle", "Actualización de la variable de control"]

enunciado: "Ordena los pasos lógicos que ocurren en una iteración estándar de un bucle controlado por una variable:"

explicacion: |
  Para que un bucle funcione correctamente, primero se establece el punto de partida (inicialización), luego se verifica si se debe entrar (condición), se realiza la tarea (cuerpo) y finalmente se modifica la variable para avanzar (actualización).
```

### 20 — El uso de 'break' vs fin de condición

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["break", "control"]

respuesta: "La instrucción 'break' termina el bucle inmediatamente, independientemente de si la condición del 'while' sigue siendo verdadera."

tipo: mc
opciones_explicitas: ["La instrucción 'break' termina el bucle inmediatamente, independientemente de si la condición del 'while' sigue siendo verdadera.", "La instrucción 'break' solo sirve para saltar una iteración y continuar con la siguiente."]

enunciado: "Considerando un bucle 'while' que está en ejecución, ¿qué diferencia marca el uso de la instrucción 'break' respecto a la condición del bucle?"

explicacion: |
  El comando 'break' fuerza la salida inmediata del bucle, ignorando la evaluación de la condición lógica que normalmente controlaría la repetición.
```

### 21 — El contador de iteraciones

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["for", "iteracion"]

variables:
  datos: [["i", "1", "3", "3"], ["j", "0", "1", "2"], ["k", "5", "8", "4"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si ejecutamos un bucle 'for' con la variable {datos[idx][0]} que recorre desde el valor inicial {datos[idx][1]} hasta el valor final {datos[idx][2]} inclusive, ¿cuántas veces se ejecutará el cuerpo del bucle?"

respuesta: datos[idx][3]
tipo: mc
opciones_explicitas: ["1", "2", "3", "4"]

explicacion: |
  El número de iteraciones en un bucle que va de 'a' hasta 'b' (inclusive) se calcula como: (b - a) + 1.
  En este caso: ({datos[idx][2]} - {datos[idx][1]}) + 1 = {datos[idx][3]}.
```

### 22 — Condición de parada en while

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

### 23 — Lógica de bucles anidados

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "avanzado"
  tags: ["anidados", "complejidad"]

variables:
  casos: [[3, 4], [2, 5], [4, 2]]
  caso: uno_de(casos)
  a: caso[0]
  b: caso[1]
  iteraciones: a * b

enunciado: "Dado el siguiente fragmento de código:\n`for i from 1 to {a}:\n    for j from 1 to {b}:\n        print(i, j)`\n\n¿Cuántas veces se imprimirá el mensaje en total?"

respuesta: iteraciones
tipo: completar
tolerancia_abs: 0

explicacion: |
  En un bucle anidado, el número total de iteraciones es el producto del número de iteraciones del bucle externo por el número de iteraciones del bucle interno.
  {a} * {b} = {iteraciones}.
```

### 24 — Verdad o Falso: El bucle infinito

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

### 25 — Orden lógico de ejecución

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["orden", "flujo"]

enunciado: "Ordena los pasos de ejecución de un bucle 'for' que recorre una lista de elementos:"

opciones_explicitas: ["Inicializar el contador", "Evaluar la condición de parada", "Ejecutar el cuerpo del bucle", "Incrementar el contador"]
respuesta_orden: ["Inicializar el contador", "Evaluar la condición de parada", "Ejecutar el cuerpo del bucle", "Incrementar el contador"]
tipo: ordenar

explicacion: |
  El flujo estándar es: 1. Inicialización, 2. Evaluación de condición, 3. Ejecución de instrucciones, 4. Actualización/Incremento.
```
