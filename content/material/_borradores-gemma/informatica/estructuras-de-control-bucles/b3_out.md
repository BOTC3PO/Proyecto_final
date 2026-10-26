### 1 — El bucle infinito por modificación de índice
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

### 2 — El error del índice fuera de rango en for
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

### 3 — El problema de la condición de parada
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

### 4 — Orden de ejecución en bucles anidados
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

### 5 — Mutabilidad de la condición en bucles
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