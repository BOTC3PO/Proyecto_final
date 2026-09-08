# Informatica — Estructuras de control condicionales (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de condicional

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["conceptos", "logica"]

tipo: mc
opciones_explicitas: ["Una estructura que repite un bloque de código", "Una estructura que permite ejecutar código según una condición", "Una función que realiza cálculos matemáticos", "Un tipo de dato que almacena números"]
respuesta: "Una estructura que permite ejecutar código según una condición"
enunciado: "En programación, una estructura condicional es..."
explicacion: |
  Las estructuras condicionales permiten que el flujo de un programa cambie de dirección dependiendo de si una condición es verdadera o falsa.
```

### 2 — El valor de la condición

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["booleanos", "logica"]

tipo: vf

enunciado: "Para que una sentencia 'if' ejecute su bloque de código, la expresión evaluada debe ser verdadera."

respuesta: verdadero

explicacion: |
  El cuerpo de un 'if' solo se ejecuta si la condición evaluada resulta en un valor booleano verdadero.
```

### 3 — Complemento de la estructura

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["if_else", "flujo"]

tipo: completar
respuestas_validas:
  - "else"

enunciado: "Si la condición del 'if' es falsa, el programa puede ejecutar un bloque alternativo utilizando la palabra clave ___."

explicacion: |
  La cláusula 'else' define el camino que toma el programa cuando la condición principal no se cumple.
```

### 4 — Evaluación de lógica

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["evaluacion", "booleano"]

variables:
  escenario: uno_de([["10 > 5", verdadero], ["5 > 10", falso], ["7 == 7", verdadero], ["3 != 3", falso]])

enunciado: "Si evaluamos la expresión {escenario[0]}, el resultado es ___."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: [verdadero, falso]

explicacion: |
  Cada expresión de comparación se evalúa como verdadera o falsa según los valores involucrados: {escenario[0]} da como resultado {escenario[1]}.
```

### 5 — Orden de evaluación

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["flujo", "orden"]

tipo: ordenar
opciones_explicitas: ["1. Evaluar la condición", "2. Si es verdadera, ejecutar bloque A", "3. Si es falsa, ejecutar bloque B"]

enunciado: "Ordena los pasos lógicos que sigue una estructura 'if-else' estándar:"

respuesta_orden: ["1. Evaluar la condición", "2. Si es verdadera, ejecutar bloque A", "3. Si es falsa, ejecutar bloque B"]

explicacion: |
  El flujo lógico siempre comienza con la evaluación de la condición para luego decidir qué camino seguir.
```

### 6 — El valor de una condición

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["if", "booleanos", "logica"]

variables:
  x: 10

respuesta: verdadero
tipo: vf

enunciado: "En un programa, si evaluamos la expresión x > 5 siendo x = {x}, el resultado de la condición es ___."

explicacion: |
  Dado que 10 es mayor que 5, la expresión es verdadera.
```

### 7 — El flujo del bloque else

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["if", "else", "flujo"]

respuesta: "reprobado"
tipo: mc
opciones_explicitas: ["reprobado", "aprobado"]

enunciado: "Si tenemos el siguiente código: \nif (edad >= 18) {{\n  print('aprobado');\n}} else {{\n  print('reprobado');\n}}\n\nSi la variable edad es 15, ¿qué se imprimirá en consola?"

pasos:
  - "Evaluar la condición: ¿15 >= 18? La respuesta es falso."
  - "Como la condición es falsa, el programa salta el bloque 'if' y entra al bloque 'else'."
  - "Se ejecuta la instrucción dentro del 'else'."

explicacion: |
  Al ser la condición falsa, se ejecuta la rama alternativa (else).
```

### 8 — Completar la estructura

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["if", "else", "sintaxis"]

tipo: completar
respuesta: "else"
respuestas_validas:
  - "else"

enunciado: "Completa la sintaxis correcta para este fragmento de código:\n\nif (puntuacion > 50) {{\n  print('Excelente');\n}} ___ {{\n  print('Inténtalo de nuevo');\n}}"

explicacion: |
  La estructura completa es 'if' para la condición inicial y 'else' para el caso contrario.
```

### 9 — Evaluación de condiciones anidadas

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["if", "else if", "logica"]

respuesta: "calor"
tipo: mc
opciones_explicitas: ["calor", "frio", "templado"]

enunciado: "Analiza el siguiente código:\n\nif (temp > 25) {{\n  print('calor');\n}} else if (temp > 0) {{\n  print('templado');\n}} else {{\n  print('frio');\n}}\n\nSi la variable temp es 30, ¿cuál es la salida?"

pasos:
  - "Se evalúa la primera condición: 30 > 25. Es verdadero."
  - "Al cumplirse la primera condición, se ejecuta su bloque y se sale de la estructura."
  - "Las condiciones 'else if' y 'else' se ignoran completamente."

explicacion: |
  En una estructura if/else if/else, solo se ejecuta el primer bloque cuya condición sea verdadera.
```

### 10 — Orden lógico de ejecución

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["flujo", "orden"]

respuesta_orden: ["evaluar_condicion", "decidir_camino", "ejecutar_bloque"]
tipo: ordenar
opciones_explicitas: ["evaluar_condicion", "decidir_camino", "ejecutar_bloque"]

enunciado: "Ordena los pasos lógicos que sigue el procesador al encontrar una estructura condicional if-else:"

explicacion: |
  Primero se determina si la condición es verdadera o falsa, luego se elige qué camino seguir y finalmente se procesa la instrucción correspondiente.
```

### 11 — El error del bloque vacío

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["error_comun", "if_else"]

enunciado: "Observa el siguiente código: if (x > 0) \n  print('Positivo') \n print('Siempre sale'). Si el programador quería que el segundo 'print' SOLO se ejecute si x > 0, pero lo escribió fuera de la indentación, ¿qué tipo de error ha cometido?"

opciones_explicitas: ["error_de_sintaxis", "error_de_logica", "error_de_tipo", "no hay error"]
respuesta: "error_de_logica"
tipo: mc

explicacion: |
  El código es sintácticamente correcto (no dará error al compilar), pero la lógica es errónea porque el segundo comando se ejecutará siempre, independientemente de la condición.
```

### 12 — Comparación vs Asignación

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["confusión_operadores"]

variables:
  caso: uno_de([["if (edad = 18) { ... }", "error_sintaxis"], ["if (edad == 18) { ... }", "correcto"]])

enunciado: "En muchos lenguajes de programación, intentar usar un solo signo de igual '{caso[0]}' dentro de una condición 'if' en lugar de un doble signo de igual suele provocar un error de tipo '{caso[1]}' o un comportamiento inesperado. ¿Cuál es el operador correcto para comparar igualdad?"

opciones_explicitas: ["=", "==", "!=", "<=>"]
respuesta: "=="
tipo: mc

explicacion: |
  El signo '=' se usa para asignación (dar un valor a una variable), mientras que '==' se usa para comparación (verificar si dos valores son iguales).
```

### 13 — El valor de verdad de un objeto

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["truthy_falsy"]

enunciado: "En lenguajes como Python o JavaScript, una lista vacía [] o el número 0 se evalúan como ___ en una estructura condicional 'if'. (Escribe 'falso' o 'verdadero')"

respuestas_validas:
  - "falso"
respuesta: "falso"
tipo: completar

explicacion: |
  En la evaluación de contextos booleanos (truthy/falsy), los valores vacíos, el cero y el valor null/none se consideran falsos.
```

### 14 — Evaluación de condiciones compuestas

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["lógica_booleana"]

enunciado: "Si tenemos la expresión: 'if (x > 5 && x < 15)'. Si x es 20, ¿cuál es el resultado booleano de la condición?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "falso"
tipo: mc

explicacion: |
  Como el operador '&&' (AND) requiere que AMBAS condiciones sean verdaderas, y 20 no es menor que 15, el resultado es falso.
```

### 15 — Flujo de ejecución en estructuras anidadas

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "avanzado"
  tags: ["anidamiento"]

enunciado: "Ordena los pasos lógicos que sigue el procesador al evaluar una estructura 'if-elif-else' para encontrar la primera coincidencia verdadera:"

opciones_explicitas: ["Evaluar la condición del 'if' inicial", "Evaluar las condiciones de los 'elif' en orden", "Ejecutar el bloque 'else' si ninguna anterior fue verdadera"]
respuesta_orden: ["Evaluar la condición del 'if' inicial", "Evaluar las condiciones de los 'elif' en orden", "Ejecutar el bloque 'else' si ninguna anterior fue verdadera"]
tipo: ordenar

explicacion: |
  Las estructuras condicionales múltiples se evalúan de arriba hacia abajo. En cuanto se encuentra una condición verdadera, se ejecuta su bloque y se salta el resto de la estructura.
```

### 16 — Diferencia entre if y if-else

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["condicionales", "lógica"]

respuesta: "else"
tipo: "completar"
respuestas_validas:
  - "else"

enunciado: "Mientras que la estructura 'if' permite ejecutar un bloque de código si una condición es verdadera, la cláusula ___ se utiliza para definir qué código debe ejecutarse cuando dicha condición es falsa."

explicacion: |
  La estructura 'if' evalúa una condición. Si es verdadera, ejecuta su bloque. El 'else' es el bloque opcional que se ejecuta únicamente cuando la condición del 'if' resulta ser falsa.
```

### 17 — Evaluación de condiciones booleanas

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["booleanos", "lógica"]

variables:
  escenario: uno_de([["8 > 5", "verdadero"], ["3 == 10", "falso"], ["5 < 2", "falso"]])

respuesta: escenario[1]
tipo: "mc"
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Si evaluamos la expresión {escenario[0]}, el resultado booleano que la estructura de control procesará es ___."

explicacion: |
  En programación, las estructuras condicionales dependen de valores booleanos. Si la expresión matemática o lógica se cumple, el resultado es 'verdadero'; de lo contrario, es 'falso'.
```

### 18 — El rol del bloque condicional

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

### 19 — Orden lógico de evaluación

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["anidamiento", "flujo"]

respuesta_orden: ["if", "else if", "else"]
tipo: "ordenar"
opciones_explicitas: ["if", "else if", "else"]

enunciado: "En una estructura condicional compuesta (múltiples opciones), ¿cuál es el orden lógico de evaluación que debe seguir el procesador para evaluar condiciones de forma jerárquica?"

explicacion: |
  El programa evalúa primero la condición principal (if). Si no se cumple, pasa a las condiciones intermedias (else if) una por una. Si ninguna se cumple, se ejecuta el bloque por defecto (else).
```

### 20 — Comparación de operadores de comparación

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["operadores", "comparación"]

variables:
  caso: uno_de([["5 == 5", "igualdad"], ["5 != 5", "desigualdad"]])

respuesta: caso[1]
tipo: "mc"
opciones_explicitas: ["igualdad", "desigualdad"]

enunciado: "Si comparamos la expresión {caso[0]}, el operador utilizado busca determinar la ___ entre los dos valores."

explicacion: |
  El operador '==' comprueba si dos valores son iguales, mientras que '!=' (o distinto de) comprueba si son diferentes. Son la base de las decisiones en los condicionales.
```

### 21 — El semáforo inteligente

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

### 22 — Validación de acceso

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
tipo: vf
enunciado: "Si tenemos una variable `edad` con el valor {edad}, ¿es verdadera la expresión `edad >= 18`?"

explicacion: |
  La expresión evalúa si el valor de la variable es mayor o igual a 18. Como {edad} es {edad}, el resultado es {es_mayor}.
```

### 23 — El sistema de descuentos

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["if_else", "condicionales_anidadas"]

variables:
  datos: [["compra_alta", "aplicar_descuento"], ["compra_media", "sin_descuento"], ["compra_baja", "sin_descuento"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "aplicar_descuento"
  - "sin_descuento"

enunciado: "Un sistema de ventas evalúa el tipo de compra: {datos[idx][0]}. Si la condición es verdadera para una 'compra_alta', el sistema debe ___."

pasos:
  - "Evaluar el tipo de compra"
  - "Asignar la acción correspondiente al bloque else o if"

explicacion: |
  En una estructura if/else, el flujo se desvía hacia el bloque que cumple la condición. Para 'compra_alta', se ejecuta el primer bloque.
```

### 24 — Lógica de temperatura

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
tipo: vf
enunciado: "Dada una variable `temp` con valor {temp}, ¿es verdadera la condición `temp > 30`?"

explicacion: |
  Al comparar {temp} con 30, obtenemos el valor booleano {es_calor}.
```

### 25 — Flujo de validación de usuario

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["ordenar", "logica_flujo"]

respuesta_orden: ["Verificar credenciales", "Validar permisos", "Acceder al sistema"]
tipo: ordenar
opciones_explicitas: ["Verificar credenciales", "Validar permisos", "Acceder al sistema"]

enunciado: "Ordena los pasos lógicos de un programa que controla el acceso a un panel de administración mediante condicionales:"

explicacion: |
  Primero se debe verificar si la identidad es correcta (if password_ok), luego si el rol tiene permiso (if user_role == 'admin') y finalmente permitir el acceso.
```
