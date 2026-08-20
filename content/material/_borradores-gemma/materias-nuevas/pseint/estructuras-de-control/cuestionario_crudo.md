### 1 — Estructura Repetitiva Mientras (Mientras)
```
metadata:
  materia: "pseint"
  tema: "estructuras-de-control"
  nivel: "intermedio"
  tags: ["mientras", "bucle-infinito", "condicion"]
tipo: vf
enunciado: En PSeInt, si la condición de un bloque `Mientras` es siempre verdadera y no hay ninguna instrucción dentro del bloque que modifique las variables involucradas en dicha condición, el programa entrará en un bucle infinito.
respuesta: verdadero
pasos:
  - "Analizar la lógica del bucle `Mientras`."
  - "Verificar si la condición depende de variables mutables."
  - "Determinar si existe una ruta de salida dentro del cuerpo del bucle."
explicacion: Un bucle `Mientras` se ejecuta mientras la condición sea verdadera. Si la condición nunca cambia a falsa, el control nunca sale del bloque, resultando en un bucle infinito que detiene o colapsa la ejecución del algoritmo.
```

### 2 — Estructura Repetitiva Para (Para)
```
metadata:
  materia: "pseint"
  tema: "estructuras-de-control"
  nivel: "intermedio"
  tags: ["para", "iteracion", "contador"]
tipo: completar
enunciado: Completa la sintaxis correcta para declarar un bucle `Para` que itere desde 1 hasta 10 con incrementos de 2: `Para i <- 1 HASTA 10 CON PASO ___`
respuesta: 2
respuestas_validas:
  - "2"
  - "dos"
pasos:
  - "Identificar la cláusula de paso en la estructura `Para`."
  - "Escribir el valor numérico del incremento."
explicacion: La cláusula `CON PASO` especifica el incremento (o decremento si es negativo) de la variable de control en cada iteración. El valor 2 indica que `i` tomará los valores 1, 3, 5, 7, 9.
```

### 3 — Estructura Repetitiva Repetir (Hasta)
```
metadata:
  materia: "pseint"
  tema: "estructuras-de-control"
  nivel: "intermedio"
  tags: ["repetir", "hasta", "do-while"]
tipo: mc
enunciado: ¿Cuál es la principal característica de la estructura `Repetir ... Hasta` en PSeInt?
opciones_explicitas:
  - "La condición se evalúa antes de ejecutar el cuerpo."
  - "El cuerpo se ejecuta al menos una vez antes de evaluar la condición."
  - "No permite usar variables booleanas en la condición."
  - "Es equivalente a un bucle `Para`."
respuesta: "El cuerpo se ejecuta al menos una vez antes de evaluar la condición."
pasos:
  - "Comparar la lógica de `Repetir` con `Mientras`."
  - "Identificar el momento de la evaluación de la condición."
explicacion: A diferencia de `Mientras` (pre-condición), `Repetir` (post-condición) garantiza que el bloque de instrucciones se ejecute al menos una vez antes de verificar si la condición de salida (`Hasta`) es verdadera.
```

### 4 — Estructura Alternativa Simple (Si)
```
metadata:
  materia: "pseint"
  tema: "estructuras-de-control"
  nivel: "intermedio"
  tags: ["si", "condicional", "if"]
tipo: completar
enunciado: En PSeInt, la estructura alternativa simple se inicia con la palabra clave `___` seguida de una condición entre paréntesis.
respuesta: Si
respuestas_validas:
  - "Si"
  - "si"
  - "SI"
pasos:
  - "Recordar la sintaxis de la condicional simple en PSeInt."
  - "Escribir la palabra clave reservada."
explicacion: La palabra clave `Si` (case-insensitive en la ejecución, pero se escribe con mayúscula inicial por convención en pseudocódigo) inicia el bloque que se ejecutará solo si la condición entre paréntesis es verdadera.
```

### 5 — Estructura Alternativa Doble (Si-Entonces-Sino)
```
metadata:
  materia: "pseint"
  tema: "estructuras-de-control"
  nivel: "intermedio"
  tags: ["si", "entonces", "sino", "else"]
tipo: mc
enunciado: ¿Qué palabra clave se utiliza en PSeInt para cerrar el bloque `Entonces` de una estructura `Si-Entonces-Sino` antes de escribir el bloque `Sino`?
opciones_explicitas:
  - "FinSi"
  - "Terminar"
  - "Cierra"
  - "End"
respuesta: "FinSi"
pasos:
  - "Identificar la sintaxis de cierre de la estructura `Si`."
  - "Seleccionar la palabra clave correspondiente."
explicacion: La estructura `Si ... Entonces ... Sino ... FinSi` requiere `FinSi` para delimitar el final de la condición y permitir que el flujo continúe después de la estructura completa.
```

### 6 — Estructura Alternativa Múltiple (Segun)
```
metadata:
  materia: "pseint"
  tema: "estructuras-de-control"
  nivel: "intermedio"
  tags: ["segun", "switch", "case"]
tipo: completar
enunciado: Completa la estructura para evaluar una variable `opcion` que puede valer 1, 2 o 3: `Segun ___ Hacer`
respuesta: opcion
respuestas_validas:
  - "opcion"
  - "opcion"
  - "Opcion"
pasos:
  - "Identificar la variable que controla la selección múltiple."
  - "Escribir el nombre de la variable."
explicacion: La estructura `Segun` evalúa una expresión o variable específica. El valor de `opcion` determinará qué bloque `Casos` se ejecutará.
```

### 7 — Caso por defecto en Segun
```
metadata:
  materia: "pseint"
  tema: "estructuras-de-control"
  nivel: "intermedio"
  tags: ["segun", "default", "casos"]
tipo: mc
enunciado: En una estructura `Segun ... Hacer`, ¿qué cláusula se usa para ejecutar instrucciones si el valor de la variable no coincide con ningún `Casos` definido?
opciones_explicitas:
  - "OtroCaso"
  - "Default"
  - "Sino"
  - "PorDefecto"
respuesta: "OtroCaso"
pasos:
  - "Recordar la sintaxis de `Segun` en PSeInt."
  - "Identificar la cláusula de respaldo."
explicacion: PSeInt utiliza `OtroCaso` (análogo a `default` en C/Java o `otherwise` en otros lenguajes) para manejar valores no especificados en los `Casos`.
```

### 8 — Salto de Control (Romper)
```
metadata:
  materia: "pseint"
  tema: "estructuras-de-control"
  nivel: "intermedio"
  tags: ["romper", "break", "bucle"]
tipo: completar
enunciado: Para salir inmediatamente de un bucle `Mientras` o `Para` en PSeInt, se utiliza la instrucción `___`.
respuesta: Romper
respuestas_validas:
  - "Romper"
  - "romper"
  - "ROMPER"
pasos:
  - "Identificar la instrucción de ruptura de bucle."
  - "Escribir la palabra clave."
explicacion: `Romper` (análogo a `break`) fuerza la terminación inmediata del bucle más interno en el que se encuentra, transfiriendo el control a la primera instrucción después del bucle.
```

### 9 — Salto de Control (Continuar)
```
metadata:
  materia: "pseint"
  tema: "estructuras-de-control"
  nivel: "intermedio"
  tags: ["continuar", "continue", "bucle"]
tipo: completar
enunciado: Para saltar el resto de las instrucciones en la iteración actual de un bucle y pasar a la siguiente iteración, se usa la instrucción `___`.
respuesta: Continuar
respuestas_validas:
  - "Continuar"
  - "continuar"
  - "CONTINUAR"
pasos:
  - "Identificar la instrucción de salto a la siguiente iteración."
  - "Escribir la palabra clave."
explicacion: `Continuar` (análogo a `continue`) omite el código restante de la iteración actual y reevalúa la condición del bucle para decidir si se ejecuta la siguiente iteración.
```

### 10 — Anidamiento de Estructuras
```
metadata:
  materia: "pseint"
  tema: "estructuras-de-control"
  nivel: "intermedio"
  tags: ["anidamiento", "estructuras", "logica"]
tipo: vf
enunciado: Es válido en PSeInt anidar una estructura `Si` dentro de un bloque `Para`, siempre que las palabras clave de cierre (`FinSi`, `FinPara`) se utilicen correctamente y no se solapen.
respuesta: verdadero
pasos:
  - "Verificar la validez sintáctica del anidamiento."
  - "Confirmar que PSeInt soporta estructuras dentro de estructuras."
explicacion: PSeInt permite el anidamiento ilimitado (dentro de los límites de memoria) de estructuras de control, siempre respetando la jerarquía de apertura y cierre de cada bloque.
```

### 11 — Condición Lógica en Si
```
metadata:
  materia: "pseint"
  tema: "estructuras-de-control"
  nivel: "intermedio"
  tags: ["si", "logica", "y", "o"]
tipo: completar
enunciado: Para verificar que `x` sea mayor que 0 Y `x` sea menor que 10 en un `Si`, se usa el operador lógico `___`.
respuesta: Y
respuestas_validas:
  - "Y"
  - "y"
  - "Y"
pasos:
  - "Identificar el operador de conjunción lógica en PSeInt."
  - "Escribir la palabra clave."
explicacion: En PSeInt, `Y` (AND) requiere que ambas sub-condiciones sean verdaderas para que el bloque `Entonces` se ejecute. También se puede usar `y` en minúscula.
```

### 12 — Condición Lógica en Si (O)
```
metadata:
  materia: "pseint"
  tema: "estructuras-de-control"
  nivel: "intermedio"
  tags: ["si", "logica", "o"]
tipo: completar
enunciado: Para verificar que `x` sea igual a 1 O `x` sea igual a 2 en un `Si`, se usa el operador lógico `___`.
respuesta: O
respuestas_validas:
  - "O"
  - "o"
  - "O"
pasos:
  - "Identificar el operador de disyunción lógica en PSeInt."
  - "Escribir la palabra clave."
explicacion: En PSeInt, `O` (OR) requiere que al menos una de las sub-condiciones sea verdadera para que el bloque `Entonces` se ejecute.
```

### 13 — Negación Lógica
```
metadata:
  materia: "pseint"
  tema: "estructuras-de-control"
  nivel: "intermedio"
  tags: ["si", "logica", "no"]
tipo: completar
enunciado: Para negar una condición en PSeInt, se utiliza el operador `___` antes de la expresión.
respuesta: No
respuestas_validas:
  - "No"
  - "no"
  - "NO"
pasos:
  - "Identificar el operador de negación lógica."
  - "Escribir la palabra clave."
explicacion: `No` invierte el valor de verdad de la condición. Si la condición es verdadera, `No` la hace falsa, y viceversa.
```

### 14 — Bucle Mientras con Lectura
```
metadata:
  materia: "pseint"
  tema: "estructuras-de-control"
  nivel: "intermedio"
  tags: ["mientras", "leer", "validacion"]
tipo: mc
enunciado: Al usar un bucle `Mientras` para validar que un usuario ingrese un número positivo, ¿cuál es la condición más adecuada?
opciones_explicitas:
  - "Mientras num < 0"
  - "Mientras num > 0"
  - "Mientras num = 0"
  - "Mientras num <= 0"
respuesta: "Mientras num < 0"
pasos:
  - "Definir la condición de error (número no positivo)."
  - "Establecer la condición de continuación del bucle."
explicacion: El bucle debe continuar mientras el número sea inválido (menor que 0). Una vez que `num >= 0`, la condición `num < 0` se vuelve falsa y el bucle termina.
```

### 15 — Bucle Para con Decremento
```
metadata:
  materia: "pseint"
  tema: "estructuras-de-control"
  nivel: "intermedio"
  tags: ["para", "decremento", "cuenta-regresiva"]
tipo: completar
enunciado: Para contar regresivamente desde 10 hasta 1, la estructura `Para` debe ser: `Para i <- 10 HASTA 1 CON PASO ___`
respuesta: -1
respuestas_validas:
  - "-1"
  - "- 1"
  - "menos uno"
pasos:
  - "Determinar la dirección del conteo."
  - "Escribir el valor negativo del paso."
explicacion: Un paso negativo (`-1`) indica que la variable de control disminuye en cada iteración, permitiendo la cuenta regresiva desde el inicio hasta el final.
```

### 16 — Estructura Segun con Expresiones
```
metadata:
  materia: "pseint"
  tema: "estructuras-de-control"
  nivel: "intermedio"
  tags: ["segun", "expresiones", "rangos"]
tipo: vf
enunciado: En PSeInt, la cláusula `Casos` dentro de `Segun` solo acepta valores literales exactos y no puede evaluar rangos de números directamente (como `10:20`).
respuesta: verdadero
pasos:
  - "Verificar la sintaxis de `Casos` en PSeInt."
  - "Confirmar si soporta rangos o solo listas."
explicacion: A diferencia de algunos lenguajes, PSeInt no soporta rangos directos en `Casos` (ej. `10:20`). Se deben listar los valores explícitamente (ej. `10, 11, 12...`) o usar `Si` para rangos.
```

### 17 — Uso de FinMientras
```
metadata:
  materia: "pseint"
  tema: "estructuras-de-control"
  nivel: "intermedio"
  tags: ["mientras", "finmientras", "sintaxis"]
tipo: mc
enunciado: ¿Cuál es la palabra clave correcta para cerrar un bloque `Mientras` en PSeInt?
opciones_explicitas:
  - "FinMientras"
  - "EndWhile"
  - "FinLoop"
  - "Termina"
respuesta: "FinMientras"
pasos:
  - "Identificar la sintaxis de cierre de `Mientras`."
  - "Seleccionar la palabra clave correcta."
explicacion: PSeInt utiliza `FinMientras` para delimitar el final del bloque de instrucciones que se repiten mientras la condición sea verdadera.
```

### 18 — Uso de FinPara
```
metadata:
  materia: "pseint"
  tema: "estructuras-de-control"
  nivel: "intermedio"
  tags: ["para", "finpara", "sintaxis"]
tipo: mc
enunciado: ¿Cuál es la palabra clave correcta para cerrar un bloque `Para` en PSeInt?
opciones_explicitas:
  - "FinPara"
  - "EndFor"
  - "FinLoop"
  - "Termina"
respuesta: "FinPara"
pasos:
  - "Identificar la sintaxis de cierre de `Para`."
  - "Seleccionar la palabra clave correcta."
explicacion: PSeInt utiliza `FinPara` para delimitar el final del bucle iterativo controlado por una variable de contador.
```

### 19 — Uso de FinRepetir
```
metadata:
  materia: "pseint"
  tema: "estructuras-de-control"
  nivel: "intermedio"
  tags: ["repetir", "finrepetir", "sintaxis"]
tipo: mc
enunciado: ¿Cuál es la palabra clave correcta para cerrar un bloque `Repetir` en PSeInt?
opciones_explicitas:
  - "FinRepetir"
  - "EndRepeat"
  - "FinWhile"
  - "Termina"
respuesta: "FinRepetir"
pasos:
  - "Identificar la sintaxis de cierre de `Repetir`."
  - "Seleccionar la palabra clave correcta."
explicacion: PSeInt utiliza `FinRepetir` para delimitar el final del bloque que se ejecuta hasta que la condición sea verdadera.
```

### 20 — Uso de FinSegun
```
metadata:
  materia: "pseint"
  tema: "estructuras-de-control"
  nivel: "intermedio"
  tags: ["segun", "finsegun", "sintaxis"]
tipo: mc
enunciado: ¿Cuál es la palabra clave correcta para cerrar un bloque `Segun` en PSeInt?
opciones_explicitas:
  - "FinSegun"
  - "EndSwitch"
  - "FinCase"
  - "Termina"
respuesta: "FinSegun"
pasos:
  - "Identificar la sintaxis de cierre de `Segun`."
  - "Seleccionar la palabra clave correcta."
explicacion: PSeInt utiliza `FinSegun` para delimitar el final de la estructura de selección múltiple.
```

### 21 — Condición Compuesta con Paréntesis
```
metadata:
  materia: "pseint"
  tema: "estructuras-de-control"
  nivel: "intermedio"
  tags: ["si", "precedencia", "parentesis"]
tipo: vf
enunciado: En PSeInt, la estructura `Si x > 5 y x < 10 Entonces` se interpreta correctamente como `Si (x > 5) y (x < 10) Entonces` sin necesidad de paréntesis adicionales debido a la precedencia de operadores.
respuesta: verdadero
pasos:
  - "Analizar la precedencia de operadores relacionales vs lógicos."
  - "Confirmar si la interpretación es estándar."
explicacion: Los operadores relacionales (`>`, `<`) tienen mayor precedencia que los lógicos (`y`, `o`). Por lo tanto, `x > 5 y x < 10` se evalúa como `(x > 5) y (x < 10)` por defecto. Sin embargo, usar paréntesis mejora la legibilidad.
```

### 22 — Error Común en Segun
```
metadata:
  materia: "pseint"
  tema: "estructuras-de-control"
  nivel: "intermedio"
  tags: ["segun", "error", "tipos"]
tipo: mc
enunciado: ¿Qué error ocurre si se intenta usar una variable de tipo Real en la cláusula `Segun` de PSeInt?
opciones_explicitas:
  - "El programa compila pero da error de precisión."
  - "PSeInt no permite variables Reales en `Segun`, solo Enteros o Caracteres."
  - "Se convierte automáticamente a Entero."
  - "No hay error, funciona igual."
respuesta: "PSeInt no permite variables Reales en `Segun`, solo Enteros o Caracteres."
pasos:
  - "Verificar los tipos permitidos en la estructura `Segun`."
  - "Identificar la restricción de tipos."
explicacion: La estructura `Segun` en PSeInt está diseñada para valores discretos (Enteros o Caracteres). Usar un Real provoca un error de sintaxis o de tipo en la mayoría de las implementaciones de pseudocódigo estrictas.
```

### 23 — Bucle Anidado de Conteo
```
metadata:
  materia: "pseint"
  tema: "estructuras-de-control"
  nivel: "intermedio"
  tags: ["para", "anidado", "multiplicacion"]
tipo: completar
enunciado: Para generar una tabla de multiplicar del 1 al 5, se usa un bucle externo `Para i <- 1 HASTA 5` y un bucle interno `Para j <- 1 HASTA 5`. ¿Cuántas veces se ejecuta la instrucción de impresión `Escribir i * j`?
respuesta: 25
respuestas_validas:
  - "25"
  - "veinticinco"
pasos:
  - "Calcular el total de iteraciones del bucle anidado."
  - "Multiplicar el rango del bucle externo por el del interno."
explicacion: El bucle externo itera 5 veces y el interno 5 veces por cada iteración externa. Total = 5 * 5 = 25 ejecuciones.
```

### 24 — Condición de Salida en Repetir
```
metadata:
  materia: "pseint"
  tema: "estructuras-de-control"
  nivel: "intermedio"
  tags: ["repetir", "hasta", "condicion"]
tipo: completar
enunciado: Si queremos que un bucle `Repetir` termine cuando el usuario ingresa la letra 'S', la condición final debe ser: `Hasta opcion = '___'`
respuesta: S
respuestas_validas:
  - "S"
  - "s"
  - "'S'"
  - "'s'"
pasos:
  - "Identificar el valor de salida deseado."
  - "Escribir la constante de carácter."
explicacion: La estructura `Hasta` evalúa la condición. Si `opcion` es igual a 'S', la condición es verdadera y el bucle termina.
```

### 25 — Uso de Continue en Mientras
```
metadata:
  materia: "pseint"
  tema: "estructuras-de-control"
  nivel: "intermedio"
  tags: ["mientras", "continuar", "salto"]
tipo: vf
enunciado: En un bucle `Mientras`, si se usa la instrucción `Continuar`, el flujo del programa vuelve inmediatamente a la evaluación de la condición del `Mientras`, sin ejecutar las instrucciones posteriores dentro del mismo bloque.
respuesta: verdadero
pasos:
  - "Analizar el comportamiento de `Continuar` en bucles pre-condición."
  - "Confirmar el salto a la evaluación de la condición."
explicacion: `Continuar` omite el resto del cuerpo del bucle y fuerza la re-evaluación de la condición del `Mientras` para decidir si se inicia la siguiente iteración.