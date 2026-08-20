### 1 — El contador de iteraciones
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["for", "iteracion"]

variables:
  escenario: uno_de([["i", "1", "2", "3"], ["j", "0", "1", "2"], ["k", "5", "6", "7"]])
  idx: uno_de([0, 1, 2])

enunciado: "Si ejecutamos un bucle 'for' que recorre desde el valor inicial de {escenario[idx][0]} hasta el valor final de {escenario[idx][1]} inclusive, ¿cuántas veces se ejecutará el cuerpo del bucle?"

respuesta: escenario[idx][2]
tipo: mc
opciones_explicitas: ["1", "2", "3", "4"]

explicacion: |
  El número de iteraciones en un bucle que va de 'a' hasta 'b' (inclusive) se calcula como: (b - a) + 1.
  En este caso: ({escenario[idx][2]} - {escenario[idx][0]}) + 1 = {escenario[idx][2]}.
```

### 2 — Condición de parada en while
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["while", "condicion"]

variables:
  caso: uno_de([["x", 10, 2], ["y", 20, 5], ["z", 15, 3]])
  idx: uno_de([0, 1, 2])

enunciado: "Considera el siguiente código: \n`nvalor = {caso[idx][0]} \nwhile (valor > 1): \n    valor = valor - {caso[idx][1]}` \n\n¿Cuál será el valor final de la variable después de que el bucle termine?"

respuesta: "1"
tipo: mc
opciones_explicitas: ["0", "1", "2", "5"]

explicacion: |
  El bucle se ejecuta mientras la variable sea mayor a 1. 
  Si empezamos con {caso[idx][0]} y restamos {caso[idx][1]} sucesivamente, el último valor que cumple la condición es el que, al restarle {caso[idx][1]}, resulta en un valor <= 1.
  En este escenario, el valor final será 1.
```

### 3 — Lógica de bucles anidados
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "avanzado"
  tags: ["anidados", "complejidad"]

variables:
  config: uno_de([["i", 3, "j", 4], ["i", 2, "j", 5], ["i", 4, "j", 2]])
  idx: uno_de([0, 1, 2])

enunciado: "Dado el siguiente fragmento de código:\n`nfor i from 1 to {config[idx][0]}:\n    for j from 1 to {config[idx][2]}:\n        print(i, j)`\n\n¿Cuántas veces se imprimirá el mensaje en total?"

respuesta: {config[idx][0] * config[idx][2]}
tipo: input
tolerancia_abs: 0

explicacion: |
  En un bucle anidado, el número total de iteraciones es el producto del número de iteraciones del bucle externo por el número de iteraciones del bucle interno.
  {config[idx][0]} * {config[idx][2]} = {config[idx][0] * config[idx][2]}.
```

### 4 — Verdad o Falso: El bucle infinito
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

### 5 — Orden lógico de ejecución
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