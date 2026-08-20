### 1 — Estructura básica de un algoritmo
```yaml
metadata:
  materia: "pseint"
  tema: "sintaxis-y-pseudocodigo"
  nivel: "basico"
  tags: ["estructura", "algoritmo", "inicio", "fin"]
respuesta: verdadero
tipo: vf
enunciado:
  - "En PSeInt, todo algoritmo válido debe comenzar con la palabra reservada 'Algoritmo' seguida de un nombre y terminar con la palabra 'FinAlgoritmo'."
pasos:
  - "Verificar la estructura estándar de un programa en PSeInt."
  - "Confirmar que las palabras clave de inicio y fin son obligatorias."
explicacion:
  - "La estructura básica de cualquier algoritmo en PSeInt requiere la declaración inicial 'Algoritmo <nombre>' y la finalización con 'FinAlgoritmo'. Sin estas palabras clave, el pseudocódigo no es válido."
```

### 2 — Palabra clave para variables numéricas
```yaml
metadata:
  materia: "pseint"
  tema: "sintaxis-y-pseudocodigo"
  nivel: "basico"
  tags: ["variables", "numeros", "entero"]
respuesta: entero
tipo: completar
respuestas_validas:
  - "entero"
  - "Entero"
  - "ENTERO"
enunciado:
  - "Para declarar una variable que almacenará solo números sin decimales en PSeInt, se utiliza la palabra clave: 'Definir <variable> como _______'."
pasos:
  - "Identificar el tipo de dato numérico sin fracciones."
  - "Seleccionar la palabra clave correspondiente en la sintaxis de PSeInt."
explicacion:
  - "La palabra clave 'entero' se utiliza para definir variables que contienen números enteros (sin parte decimal)."
```

### 3 — Asignación de valores
```yaml
metadata:
  materia: "pseint"
  tema: "sintaxis-y-pseudocodigo"
  nivel: "basico"
  tags: ["asignacion", "operador"]
respuesta: <-
tipo: completar
respuestas_validas:
  - "<-"
  - "< -"
  - "<-"
enunciado:
  - "En PSeInt, el operador de asignación para guardar un valor en una variable es: '<variable> _______ valor'."
pasos:
  - "Recordar el símbolo especial de asignación en pseudocódigo."
  - "Distinguirlo del operador de igualdad."
explicacion:
  - "En PSeInt, la asignación se representa con '<-' (menor que seguido de un signo de menos), a diferencia de '=' en muchos lenguajes de programación."
```

### 4 — Salida de datos por pantalla
```yaml
metadata:
  materia: "pseint"
  tema: "sintaxis-y-pseudocodigo"
  nivel: "basico"
  tags: ["salida", "escribir", "print"]
respuesta: Escribir
tipo: completar
respuestas_validas:
  - "Escribir"
  - "escribir"
  - "ESCRIBIR"
enunciado:
  - "Para mostrar un mensaje en la consola de salida en PSeInt, se utiliza el comando: '_______ \"Hola Mundo\"'."
pasos:
  - "Identificar la instrucción estándar de salida en PSeInt."
  - "Verificar la capitalización permitida."
explicacion:
  - "La palabra clave 'Escribir' (case-insensitive) se usa para imprimir texto o valores en la pantalla."
```

### 5 — Entrada de datos por teclado
```yaml
metadata:
  materia: "pseint"
  tema: "sintaxis-y-pseudocodigo"
  nivel: "basico"
  tags: ["entrada", "leer", "input"]
respuesta: Leer
tipo: completar
respuestas_validas:
  - "Leer"
  - "leer"
  - "LEER"
enunciado:
  - "Para capturar un dato ingresado por el usuario y guardarlo en la variable 'edad', se usa: '_______ edad'."
pasos:
  - "Identificar la instrucción de entrada estándar en PSeInt."
  - "Confirmar que la variable debe estar definida previamente."
explicacion:
  - "La instrucción 'Leer' pausa la ejecución y espera que el usuario ingrese un valor en la consola."
```

### 6 — Estructura condicional simple
```yaml
metadata:
  materia: "pseint"
  tema: "sintaxis-y-pseudocodigo"
  nivel: "basico"
  tags: ["condicional", "si", "if"]
respuesta: Si
tipo: completar
respuestas_validas:
  - "Si"
  - "si"
  - "SI"
enunciado:
  - "Para ejecutar un bloque de código solo si se cumple una condición en PSeInt, se inicia con: '_______ (condicion)'."
pasos:
  - "Identificar la palabra clave para la estructura condicional básica."
  - "Recordar que siempre va acompañada de 'Entonces'."
explicacion:
  - "La estructura 'Si ... Entonces ... FinSi' es la forma estándar de implementar un if en pseudocódigo de PSeInt."
```

### 7 — Cierre de estructura condicional
```yaml
metadata:
  materia: "pseint"
  tema: "sintaxis-y-pseudocodigo"
  nivel: "basico"
  tags: ["condicional", "finsi", "endif"]
respuesta: FinSi
tipo: completar
respuestas_validas:
  - "FinSi"
  - "fin si"
  - "FIN SI"
enunciado:
  - "La palabra clave que cierra correctamente una estructura 'Si ... Entonces' en PSeInt es: '_______'."
pasos:
  - "Identificar el terminador de la estructura condicional."
  - "Asegurarse de que coincida con la apertura 'Si'."
explicacion:
  - "Cada 'Si' debe tener su correspondiente 'FinSi' para cerrar el bloque de código condicional."
```

### 8 — Estructura condicional doble
```yaml
metadata:
  materia: "pseint"
  tema: "sintaxis-y-pseudocodigo"
  nivel: "basico"
  tags: ["condicional", "sino", "else"]
respuesta: Sino
tipo: completar
respuestas_validas:
  - "Sino"
  - "sino"
  - "SINO"
enunciado:
  - "Para definir el bloque de código que se ejecuta cuando la condición en 'Si' es falsa, se usa la palabra clave: '_______'."
pasos:
  - "Identificar la palabra clave para la rama alternativa."
  - "Ubicarla correctamente después del bloque 'Entonces'."
explicacion:
  - "La palabra 'Sino' se utiliza para especificar las acciones a realizar si la condición evaluada por 'Si' no se cumple."
```

### 9 — Estructura de repetición contada
```yaml
metadata:
  materia: "pseint"
  tema: "sintaxis-y-pseudocodigo"
  nivel: "basico"
  tags: ["repetir", "para", "for"]
respuesta: Para
tipo: completar
respuestas_validas:
  - "Para"
  - "para"
  - "PARA"
enunciado:
  - "Para ejecutar un bloque de código un número determinado de veces en PSeInt, se utiliza la estructura: '_______ i <- 1 Hasta 10 Con Paso 1 Hacer'."
pasos:
  - "Identificar la palabra clave para el bucle for."
  - "Reconocer la sintaxis de inicio, fin y paso."
explicacion:
  - "La estructura 'Para ... Hasta ... Con Paso ... Hacer ... FinPara' es la forma de implementar un bucle for en PSeInt."
```

### 10 — Cierre de bucle Para
```yaml
metadata:
  materia: "pseint"
  tema: "sintaxis-y-pseudocodigo"
  nivel: "basico"
  tags: ["repetir", "finpara", "endfor"]
respuesta: FinPara
tipo: completar
respuestas_validas:
  - "FinPara"
  - "fin para"
  - "FIN PARA"
enunciado:
  - "La palabra clave que cierra correctamente una estructura 'Para ... Hacer' en PSeInt es: '_______'."
pasos:
  - "Identificar el terminador del bucle for."
  - "Verificar la correspondencia con la apertura 'Para'."
explicacion:
  - "Cada 'Para' debe tener su correspondiente 'FinPara' para cerrar el bloque de iteración."
```

### 11 — Operador lógico AND
```yaml
metadata:
  materia: "pseint"
  tema: "sintaxis-y-pseudocodigo"
  nivel: "basico"
  tags: ["operadores", "logico", "y"]
respuesta: y
tipo: completar
respuestas_validas:
  - "y"
  - "Y"
  - "Y"
enunciado:
  - "Para combinar dos condiciones donde ambas deben ser verdaderas en PSeInt, se usa el operador lógico: 'condicion1 _______ condicion2'."
pasos:
  - "Identificar el operador de conjunción lógica en pseudocódigo español."
  - "Distinguirlo de OR o NOT."
explicacion:
  - "El operador 'y' (o 'AND' en inglés) devuelve verdadero solo si ambas operandos son verdaderos."
```

### 12 — Operador lógico OR
```yaml
metadata:
  materia: "pseint"
  tema: "sintaxis-y-pseudocodigo"
  nivel: "basico"
  tags: ["operadores", "logico", "o"]
respuesta: o
tipo: completar
respuestas_validas:
  - "o"
  - "O"
  - "O"
enunciado:
  - "Para combinar dos condiciones donde al menos una debe ser verdadera en PSeInt, se usa el operador lógico: 'condicion1 _______ condicion2'."
pasos:
  - "Identificar el operador de disyunción lógica en pseudocódigo español."
  - "Verificar la sintaxis correcta."
explicacion:
  - "El operador 'o' (o 'OR' en inglés) devuelve verdadero si al menos uno de los operandos es verdadero."
```

### 13 — Operador de negación
```yaml
metadata:
  materia: "pseint"
  tema: "sintaxis-y-pseudocodigo"
  nivel: "basico"
  tags: ["operadores", "logico", "no"]
respuesta: No
tipo: completar
respuestas_validas:
  - "No"
  - "no"
  - "NO"
enunciado:
  - "Para invertir el valor de verdad de una condición en PSeInt, se usa el operador: '_______ condicion'."
pasos:
  - "Identificar el operador de negación lógica."
  - "Confirmar su posición antes de la condición."
explicacion:
  - "El operador 'No' (o 'NOT') invierte el valor booleano: verdadero a falso y falso a verdadero."
```

### 14 — Operador de igualdad
```yaml
metadata:
  materia: "pseint"
  tema: "sintaxis-y-pseudocodigo"
  nivel: "basico"
  tags: ["operadores", "comparacion", "igual"]
respuesta: =
tipo: completar
respuestas_validas:
  - "="
  - "=="
enunciado:
  - "En PSeInt, para comparar si dos valores son iguales dentro de una condición, se utiliza el operador: 'valor1 _______ valor2'."
pasos:
  - "Identificar el operador de comparación de igualdad."
  - "Distinguirlo del operador de asignación '<-'."
explicacion:
  - "El operador '=' se usa para verificar igualdad. Aunque en algunos lenguajes es '==', en pseudocódigo PSeInt estándar es un solo signo igual."
```

### 15 — Operador de desigualdad
```yaml
metadata:
  materia: "pseint"
  tema: "sintaxis-y-pseudocodigo"
  nivel: "basico"
  tags: ["operadores", "comparacion", "diferente"]
respuesta: <>
tipo: completar
respuestas_validas:
  - "<>"
  - "< >"
enunciado:
  - "Para verificar que dos valores sean diferentes en PSeInt, se usa el operador: 'valor1 _______ valor2'."
pasos:
  - "Identificar el operador de desigualdad."
  - "Confirmar la sintaxis específica de PSeInt."
explicacion:
  - "El operador '<>' es el estándar en pseudocódigo para representar 'diferente de'."
```

### 16 — Operador de mayor que
```yaml
metadata:
  materia: "pseint"
  tema: "sintaxis-y-pseudocodigo"
  nivel: "basico"
  tags: ["operadores", "comparacion", "mayor"]
respuesta: >
tipo: completar
respuestas_validas:
  - ">"
enunciado:
  - "Para verificar que un valor sea mayor que otro en PSeInt, se usa el operador: 'valor1 _______ valor2'."
pasos:
  - "Identificar el operador de comparación mayor."
  - "Verificar su uso en condiciones."
explicacion:
  - "El operador '>' compara si el operando izquierdo es estrictamente mayor que el derecho."
```

### 17 — Operador de menor que
```yaml
metadata:
  materia: "pseint"
  tema: "sintaxis-y-pseudocodigo"
  nivel: "basico"
  tags: ["operadores", "comparacion", "menor"]
respuesta: <
tipo: completar
respuestas_validas:
  - "<"
enunciado:
  - "Para verificar que un valor sea menor que otro en PSeInt, se usa el operador: 'valor1 _______ valor2'."
pasos:
  - "Identificar el operador de comparación menor."
  - "Confirmar su sintaxis."
explicacion:
  - "El operador '<' compara si el operando izquierdo es estrictamente menor que el derecho."
```

### 18 — Tipo de dato cadena
```yaml
metadata:
  materia: "pseint"
  tema: "sintaxis-y-pseudocodigo"
  nivel: "basico"
  tags: ["variables", "cadena", "string"]
respuesta: cadena
tipo: completar
respuestas_validas:
  - "cadena"
  - "Cadena"
  - "CADENA"
enunciado:
  - "Para declarar una variable que almacenará texto en PSeInt, se utiliza la palabra clave: 'Definir <variable> como _______'."
pasos:
  - "Identificar el tipo de dato para textos."
  - "Seleccionar la palabra clave correspondiente."
explicacion:
  - "La palabra clave 'cadena' se utiliza para definir variables que contienen secuencias de caracteres."
```

### 19 — Tipo de dato logico
```yaml
metadata:
  materia: "pseint"
  tema: "sintaxis-y-pseudocodigo"
  nivel: "basico"
  tags: ["variables", "logico", "boolean"]
respuesta: logico
tipo: completar
respuestas_validas:
  - "logico"
  - "Logico"
  - "LOGICO"
enunciado:
  - "Para declarar una variable que solo pueda tomar los valores Verdadero o Falso en PSeInt, se utiliza: 'Definir <variable> como _______'."
pasos:
  - "Identificar el tipo de dato booleano."
  - "Seleccionar la palabra clave correspondiente."
explicacion:
  - "La palabra clave 'logico' define variables de tipo booleano, que solo pueden ser Verdadero o Falso."
```

### 20 — Palabra clave para definir variables
```yaml
metadata:
  materia: "pseint"
  tema: "sintaxis-y-pseudocodigo"
  nivel: "basico"
  tags: ["variables", "definir"]
respuesta: Definir
tipo: completar
respuestas_validas:
  - "Definir"
  - "definir"
  - "DEFINIR"
enunciado:
  - "La palabra clave que se utiliza al inicio de un algoritmo para declarar el tipo de las variables en PSeInt es: '_______ <lista de variables>'."
pasos:
  - "Identificar la instrucción de declaración de variables."
  - "Confirmar su ubicación en el algoritmo."
explicacion:
  - "La palabra 'Definir' se usa para listar variables y sus tipos al principio del algoritmo."
```

### 21 — Valor inicial de booleano
```yaml
metadata:
  materia: "pseint"
  tema: "sintaxis-y-pseudocodigo"
  nivel: "basico"
  tags: ["variables", "booleano", "valores"]
respuesta: Falso
tipo: completar
respuestas_validas:
  - "Falso"
  - "falso"
  - "FALSO"
enunciado:
  - "En PSeInt, el valor lógico que representa la negación de verdadero se escribe como: '_______'."
pasos:
  - "Identificar el valor booleano negativo."
  - "Verificar la ortografía en pseudocódigo."
explicacion:
  - "Los valores lógicos en PSeInt son 'Verdadero' y 'Falso' (con tilde en español)."
```

### 22 — Valor final de booleano
```yaml
metadata:
  materia: "pseint"
  tema: "sintaxis-y-pseudocodigo"
  nivel: "basico"
  tags: ["variables", "booleano", "valores"]
respuesta: Verdadero
tipo: completar
respuestas_validas:
  - "Verdadero"
  - "verdadero"
  - "VERDADERO"
enunciado:
  - "En PSeInt, el valor lógico que representa la afirmación positiva se escribe como: '_______'."
pasos:
  - "Identificar el valor booleano positivo."
  - "Verificar la ortografía en pseudocódigo."
explicacion:
  - "Los valores lógicos en PSeInt son 'Verdadero' y 'Falso' (con tilde en español)."
```

### 23 — Uso de paréntesis en condiciones
```yaml
metadata:
  materia: "pseint"
  tema: "sintaxis-y-pseudocodigo"
  nivel: "basico"
  tags: ["condicional", "sintaxis", "parentesis"]
respuesta: verdadero
tipo: vf
enunciado:
  - "En PSeInt, la condición dentro de un 'Si' siempre debe estar entre paréntesis: 'Si (x > 5) Entonces ...'."
pasos:
  - "Verificar la sintaxis de la estructura condicional."
  - "Confirmar el uso obligatorio de paréntesis."
explicacion:
  - "La sintaxis de PSeInt requiere que la expresión condicional en un 'Si' esté encerrada entre paréntesis."
```

### 24 — Palabras clave de palabras
```yaml
metadata:
  materia: "pseint"
  tema: "sintaxis-y-pseudocodigo"
  nivel: "basico"
  tags: ["sintaxis", "palabras", "reservadas"]
respuesta: verdadero
tipo: vf
enunciado:
  - "En PSeInt, las palabras clave como 'Si', 'Entonces', 'FinSi' no deben usarse como nombres de variables."
pasos:
  - "Verificar si las palabras clave son reservadas."
  - "Confirmar que no pueden ser identificadores."
explicacion:
  - "Las palabras clave son reservadas por el lenguaje y no pueden ser utilizadas como nombres de variables o funciones."
```

### 25 — Comentarios en el código
```yaml
metadata:
  materia: "pseint"
  tema: "sintaxis-y-pseudocodigo"
  nivel: "basico"
  tags: ["comentarios", "sintaxis"]
respuesta: /*
tipo: completar
respuestas_validas:
  - "/*"
  - "/* "
enunciado:
  - "En PSeInt, para iniciar un comentario de bloque que abarca varias líneas, se usa la secuencia: '_______ ... */'."
pasos:
  - "Identificar el iniciador de comentarios de bloque."
  - "Verificar la secuencia de apertura."
explicacion:
  - "Los comentarios de bloque en PSeInt se inician con '/*' y terminan con '*/', ignorando el contenido entre ellos."
```