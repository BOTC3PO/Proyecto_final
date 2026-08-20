### 1 — Estructura básica de un programa
```
metadata:
  materia: "pseint"
  tema: "diagramas-de-flujo"
  nivel: "basico"
  tags: ["estructura", "inicio", "fin"]
respuesta: verdadero
tipo: vf
enunciado: En PSeInt, todo diagrama de flujo o pseudocódigo debe comenzar con la palabra clave "Proceso" o "Algoritmo" y finalizar con "FinProceso" o "FinAlgoritmo".
pasos:
  - "Leer la estructura estándar de un programa en PSeInt."
  - "Identificar las palabras clave de inicio y fin."
explicacion: La estructura básica en PSeInt requiere definir el nombre del proceso/algoritmo al inicio y cerrarlo explícitamente al final para delimitar el scope.
```

### 2 — Asignación de variables
```
metadata:
  materia: "pseint"
  tema: "diagramas-de-flujo"
  nivel: "basico"
  tags: ["asignacion", "variables"]
respuesta: <-
tipo: completar
enunciado: En pseudocódigo de PSeInt, para asignar el valor 10 a la variable 'edad', se escribe: edad _____ 10.
respuestas_validas:
  - "<-"
  - "= "
  - " = "
  - "< -"
pasos:
  - "Recordar el operador de asignación en pseudocódigo estándar."
  - "Diferenciarlo del operador de igualdad."
explicacion: El operador de asignación en pseudocódigo es "<-" (flecha hacia la izquierda), no el signo igual "=" que se usa en muchos lenguajes de programación.
```

### 3 — Salida de datos
```
metadata:
  materia: "pseint"
  tema: "diagramas-de-flujo"
  nivel: "basico"
  tags: ["salida", "escribir"]
respuesta: Escribir
tipo: completar
enunciado: Para mostrar un mensaje en pantalla en PSeInt, se utiliza el comando: _____ "Hola Mundo".
respuestas_validas:
  - "Escribir"
  - "imprimir"
  - "print"
  - "escribir"
pasos:
  - "Identificar el comando estándar de salida en PSeInt."
  - "Verificar la sintaxis de cadena de texto."
explicacion: "Escribir" es el comando nativo en PSeInt para imprimir texto o variables en la consola. Otros lenguajes usan print o printf, pero PSeInt prefiere la legibilidad en español.
```

### 4 — Entrada de datos
```
metadata:
  materia: "pseint"
  tema: "diagramas-de-flujo"
  nivel: "basico"
  tags: ["entrada", "leer"]
respuesta: leer
tipo: completar
enunciado: Para capturar un valor numérico del usuario en PSeInt, se usa el comando: _____(variable).
respuestas_validas:
  - "leer"
  - "Leer"
  - "capturar"
  - "input"
pasos:
  - "Identificar el comando de entrada estándar."
  - "Reconocer que requiere una variable como argumento."
explicacion: El comando "leer" pausa la ejecución y espera que el usuario ingrese un valor, el cual se almacena en la variable especificada entre paréntesis.
```

### 5 — Tipo de dato Entero
```
metadata:
  materia: "pseint"
  tema: "diagramas-de-flujo"
  nivel: "basico"
  tags: ["tipos", "entero"]
respuesta: entero
tipo: completar
enunciado: Para declarar una variable que solo acepte números sin decimales en PSeInt, se usa el prefijo: Var _____ x.
respuestas_validas:
  - "entero"
  - "Entero"
  - "int"
  - "integer"
pasos:
  - "Recordar la palabra clave para números enteros."
  - "Verificar la sintaxis de declaración de variables."
explicacion: En pseudocódigo de PSeInt, "entero" es el tipo de dato para números enteros (ej. 1, -5, 100). No se usa 'int' como en C++ o Java.
```

### 6 — Tipo de dato Real
```
metadata:
  materia: "pseint"
  tema: "diagramas-de-flujo"
  nivel: "basico"
  tags: ["tipos", "real"]
respuesta: real
tipo: completar
enunciado: Para declarar una variable que acepte decimales en PSeInt, se usa: Var _____ altura.
respuestas_validas:
  - "real"
  - "Real"
  - "double"
  - "float"
pasos:
  - "Identificar el tipo para números con punto decimal."
  - "Diferenciarlo de 'entero'."
explicacion: "real" es el tipo de dato en PSeInt para números con parte fraccionaria (ej. 3.14, -0.5).
```

### 7 — Tipo de dato Caracter
```
metadata:
  materia: "pseint"
  tema: "diagramas-de-flujo"
  nivel: "basico"
  tags: ["tipos", "caracter"]
respuesta: caracter
tipo: completar
enunciado: Para guardar una sola letra en PSeInt, se declara la variable como: Var _____ letra.
respuestas_validas:
  - "caracter"
  - "Caracter"
  - "char"
  - "string"
pasos:
  - "Identificar el tipo para datos alfanuméricos simples."
  - "Verificar la palabra clave en español."
explicacion: "caracter" (o 'char') se usa para almacenar un solo símbolo. En PSeInt, "caracter" es la palabra clave estándar en español.
```

### 8 — Condición Simple
```
metadata:
  materia: "pseint"
  tema: "diagramas-de-flujo"
  nivel: "basico"
  tags: ["condicion", "si"]
respuesta: Si
tipo: completar
enunciado: Para ejecutar un bloque de código solo si se cumple una condición, se inicia con: _____ (condicion).
respuestas_validas:
  - "Si"
  - "si"
  - "If"
  - "if"
pasos:
  - "Identificar la palabra clave de decisión simple."
  - "Verificar la sintaxis de apertura."
explicacion: "Si" (en español) o "If" (en inglés) inicia el bloque condicional. PSeInt acepta ambos, pero "Si" es el nativo del pseudocódigo español.
```

### 9 — Fin de Condición
```
metadata:
  materia: "pseint"
  tema: "diagramas-de-flujo"
  nivel: "basico"
  tags: ["condicion", "fin"]
respuesta: FinSi
tipo: completar
enunciado: Para cerrar un bloque condicional iniciado con "Si" en PSeInt, se escribe: _____ .
respuestas_validas:
  - "FinSi"
  - "Finsi"
  - "End If"
  - "endif"
pasos:
  - "Identificar la palabra clave de cierre de condición."
  - "Verificar la concatenación de palabras."
explicacion: "FinSi" (o "End If") marca el final del bloque de código que depende de la condición. Es obligatorio cerrarlo.
```

### 10 — Estructura Si-Sino
```
metadata:
  materia: "pseint"
  tema: "diagramas-de-flujo"
  nivel: "basico"
  tags: ["condicion", "sino"]
respuesta: Sino
tipo: completar
enunciado: En un bloque condicional de PSeInt, para especificar el código a ejecutar si la condición es falsa, se usa: _____ .
respuestas_validas:
  - "Sino"
  - "sino"
  - "Else"
  - "else"
pasos:
  - "Identificar la palabra clave alternativa."
  - "Verificar su posición dentro del bloque Si."
explicacion: "Sino" (o "Else") se coloca entre "FinSi" y el cierre del bloque Si para definir la ruta alternativa.
```

### 11 — Bucle Mientras
```
metadata:
  materia: "pseint"
  tema: "diagramas-de-flujo"
  nivel: "basico"
  tags: ["bucle", "mientras"]
respuesta: Mientras
tipo: completar
enunciado: Para repetir un bloque de código mientras una condición sea verdadera en PSeInt, se usa: _____ (condicion).
respuestas_validas:
  - "Mientras"
  - "mientras"
  - "While"
  - "while"
pasos:
  - "Identificar la palabra clave de bucle pre-ordenado."
  - "Verificar la sintaxis de la condición."
explicacion: "Mientras" (o "While") evalúa la condición antes de ejecutar el cuerpo. Si la condición es falsa inicialmente, el bloque no se ejecuta.
```

### 12 — Fin de Bucle Mientras
```
metadata:
  materia: "pseint"
  tema: "diagramas-de-flujo"
  nivel: "basico"
  tags: ["bucle", "fin"]
respuesta: FinMientras
tipo: completar
enunciado: Para cerrar un bucle "Mientras" en PSeInt, se escribe: _____ .
respuestas_validas:
  - "FinMientras"
  - "Finmientras"
  - "End While"
  - "endwhile"
pasos:
  - "Identificar la palabra clave de cierre de bucle."
  - "Verificar la concatenación."
explicacion: "FinMientras" (o "End While") marca el final del bucle. El control vuelve a evaluar la condición de "Mientras".
```

### 13 — Bucle Para
```
metadata:
  materia: "pseint"
  tema: "diagramas-de-flujo"
  nivel: "basico"
  tags: ["bucle", "para"]
respuesta: Para
tipo: completar
enunciado: Para repetir un bloque un número determinado de veces en PSeInt, se inicia con: _____ i = 1 hasta 10.
respuestas_validas:
  - "Para"
  - "para"
  - "For"
  - "for"
pasos:
  - "Identificar la palabra clave de bucle contable."
  - "Verificar la sintaxis de rango."
explicacion: "Para" (o "For") define un bucle con un contador inicial, final y paso implícito (generalmente 1).
```

### 14 — Fin de Bucle Para
```
metadata:
  materia: "pseint"
  tema: "diagramas-de-flujo"
  nivel: "basico"
  tags: ["bucle", "fin"]
respuesta: FinPara
tipo: completar
enunciado: Para cerrar un bucle "Para" en PSeInt, se escribe: _____ .
respuestas_validas:
  - "FinPara"
  - "Finpara"
  - "End For"
  - "endfor"
pasos:
  - "Identificar la palabra clave de cierre de bucle contable."
  - "Verificar la sintaxis."
explicacion: "FinPara" (o "End For") cierra el bucle. El contador se incrementa automáticamente al final de cada iteración.
```

### 15 — Operador de Igualdad
```
metadata:
  materia: "pseint"
  tema: "diagramas-de-flujo"
  nivel: "basico"
  tags: ["operadores", "igualdad"]
respuesta: =
tipo: completar
enunciado: En las condiciones de PSeInt, para comparar si dos valores son iguales, se usa el operador: _____ .
respuestas_validas:
  - "="
  - "=="
  - "eq"
  - "igual"
pasos:
  - "Identificar el operador de comparación numérica/lógica."
  - "Diferenciarlo de la asignación."
explicacion: En pseudocódigo de PSeInt, "=" se usa para la igualdad lógica (comparación), mientras que "<-" es para la asignación.
```

### 16 — Operador de Desigualdad
```
metadata:
  materia: "pseint"
  tema: "diagramas-de-flujo"
  nivel: "basico"
  tags: ["operadores", "desigualdad"]
respuesta: #
tipo: completar
enunciado: En las condiciones de PSeInt, para indicar que dos valores NO son iguales, se usa el operador: _____ .
respuestas_validas:
  - "#"
  - "<>"
  - "!="
  - "neq"
pasos:
  - "Identificar el operador de desigualdad en pseudocódigo."
  - "Verificar su símbolo estándar."
explicacion: "#" es el operador estándar de desigualdad en el pseudocódigo de PSeInt. En otros lenguajes puede ser "<>" o "!=", pero en PSeInt es "#".
```

### 17 — Operador de Menor que
```
metadata:
  materia: "pseint"
  tema: "diagramas-de-flujo"
  nivel: "basico"
  tags: ["operadores", "menor"]
respuesta: <
tipo: completar
enunciado: Para indicar que un valor es menor que otro en una condición de PSeInt, se usa: _____ .
respuestas_validas:
  - "<"
  - "menor"
  - "lt"
  - "<<"
pasos:
  - "Identificar el operador de comparación menor."
  - "Verificar su símbolo."
explicacion: "<" es el operador estándar para "menor que". Es idéntico a la mayoría de lenguajes de programación.
```

### 18 — Operador de Mayor que
```
metadata:
  materia: "pseint"
  tema: "diagramas-de-flujo"
  nivel: "basico"
  tags: ["operadores", "mayor"]
respuesta: >
tipo: completar
enunciado: Para indicar que un valor es mayor que otro en una condición de PSeInt, se usa: _____ .
respuestas_validas:
  - ">"
  - "mayor"
  - "gt"
  - ">>"
pasos:
  - "Identificar el operador de comparación mayor."
  - "Verificar su símbolo."
explicacion: ">" es el operador estándar para "mayor que".
```

### 19 — Operador Lógico Y
```
metadata:
  materia: "pseint"
  tema: "diagramas-de-flujo"
  nivel: "basico"
  tags: ["operadores", "logico"]
respuesta: Y
tipo: completar
enunciado: Para combinar dos condiciones que deben ser verdaderas en PSeInt, se usa el operador lógico: _____ .
respuestas_validas:
  - "Y"
  - "y"
  - "AND"
  - "and"
pasos:
  - "Identificar el operador lógico conjunción."
  - "Verificar la versión en español."
explicacion: "Y" (o "AND") devuelve verdadero solo si ambas condiciones son verdaderas. PSeInt prefiere "Y" en su pseudocódigo español.
```

### 20 — Operador Lógico O
```
metadata:
  materia: "pseint"
  tema: "diagramas-de-flujo"
  nivel: "basico"
  tags: ["operadores", "logico"]
respuesta: O
tipo: completar
enunciado: Para combinar dos condiciones donde al menos una debe ser verdadera en PSeInt, se usa el operador lógico: _____ .
respuestas_validas:
  - "O"
  - "o"
  - "OR"
  - "or"
pasos:
  - "Identificar el operador lógico disyunción."
  - "Verificar la versión en español."
explicacion: "O" (o "OR") devuelve verdadero si al menos una de las condiciones es verdadera.
```

### 21 — Operador Lógico NO
```
metadata:
  materia: "pseint"
  tema: "diagramas-de-flujo"
  nivel: "basico"
  tags: ["operadores", "logico"]
respuesta: No
tipo: completar
enunciado: Para negar una condición en PSeInt, se utiliza el operador: _____ (condicion).
respuestas_validas:
  - "No"
  - "no"
  - "NOT"
  - "not"
pasos:
  - "Identificar el operador lógico negación."
  - "Verificar la posición antes de la condición."
explicacion: "No" (o "NOT") invierte el valor de verdad de la condición. Si es verdadero, lo vuelve falso y viceversa.
```

### 22 — Función de Cadena (Concatenación)
```
metadata:
  materia: "pseint"
  tema: "diagramas-de-flujo"
  nivel: "basico"
  tags: ["funciones", "cadena"]
respuesta: concatenar
tipo: completar
enunciado: Para unir dos cadenas de texto en PSeInt, se usa la función: _____ (cadena1, cadena2).
respuestas_validas:
  - "concatenar"
  - "Concatenar"
  - "join"
  - "concat"
pasos:
  - "Identificar la función de unión de strings."
  - "Verificar la sintaxis de llamada."
explicacion: "concatenar" une las cadenas pasadas como argumentos. Es la función nativa de PSeInt para este propósito.
```

### 23 — Función de Longitud
```
metadata:
  materia: "pseint"
  tema: "diagramas-de-flujo"
  nivel: "basico"
  tags: ["funciones", "longitud"]
respuesta: largo
tipo: completar
enunciado: Para obtener el número de caracteres de una cadena en PSeInt, se usa la función: _____ (cadena).
respuestas_validas:
  - "largo"
  - "Largo"
  - "length"
  - "len"
pasos:
  - "Identificar la función que devuelve el tamaño de un string."
  - "Verificar la palabra clave en español."
explicacion: "largo" (o "length") devuelve la cantidad de caracteres en la cadena. En PSeInt, "largo" es la opción preferida en español.
```

### 24 — Función de Conversión a Entero
```
metadata:
  materia: "pseint"
  tema: "diagramas-de-flujo"
  nivel: "basico"
  tags: ["funciones", "conversion"]
respuesta: entero
tipo: completar
enunciado: Para convertir una cadena numérica (ej. "10") a un número entero en PSeInt, se usa: _____ ("10").
respuestas_validas:
  - "entero"
  - "Entero"
  - "int"
  - "parseint"
pasos:
  - "Identificar la función de conversión de tipo."
  - "Verificar la palabra clave."
explicacion: "entero" convierte su argumento a tipo entero. Si la cadena no es numérica, puede causar error.
```

### 25 — Función de Conversión a Real
```
metadata:
  materia: "pseint"
  tema: "diagramas-de-flujo"
  nivel: "basico"
  tags: ["funciones", "conversion"]
respuesta: real
tipo: completar
enunciado: Para convertir un valor a número decimal en PSeInt, se usa la función: _____ (valor).
respuestas_validas:
  - "real"
  - "Real"
  - "float"
  - "double"
pasos:
  - "Identificar la función de conversión a decimal."
  - "Verificar la palabra clave."
explicacion: "real" convierte su argumento a tipo real (decimal). Es útil para garantizar precisión en cálculos matemáticos.
```