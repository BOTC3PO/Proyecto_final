### 1 — Sintaxis de ciclo Repetir-Hasta
```
metadata:
  materia: "pseint"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["ciclos", "repetir-hasta", "sintaxis"]
tipo: completar
enunciado: "Analiza el siguiente fragmento de código en PSeInt. El usuario debe ingresar números hasta que ingrese un valor negativo. ¿Qué palabra clave falta para cerrar correctamente el ciclo?"
codigo:
  Repetir
    Escribir "Ingrese un numero (negativo para salir):"
    Leer num
  {FALTA_AQUI} num < 0
respuesta: Hasta
respuestas_validas:
  - Hasta
  - HASTA
pasos:
  - "Identificar la estructura de control repetitiva."
  - "Reconocer que PSeInt utiliza la palabra 'Hasta' para la condición de salida en el ciclo 'Repetir'."
  - "Verificar que la condición va después de la palabra clave."
explicacion: "En PSeInt, la estructura 'Repetir ... Hasta' requiere la palabra clave 'Hasta' seguida de la condición booleana. Es la forma nativa de implementar un ciclo 'do-while'."
```

### 2 — Operadores Lógicos en Condicionales
```
metadata:
  materia: "pseint"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["condicionales", "logica", "and", "or"]
tipo: completar
enunciado: "Se necesita validar que la variable 'edad' esté entre 18 y 65 años (inclusive). En PSeInt, ¿qué operador lógico se usa para combinar ambas condiciones en un solo 'Si'?"
codigo:
  Si edad >= 18 {OPERADOR} edad <= 65 Entonces
    Escribir "Edad valida"
  FinSi
respuesta: y
respuestas_validas:
  - y
  - Y
  - AND
  - and
pasos:
  - "Analizar la necesidad lógica: ambas condiciones deben ser verdaderas."
  - "Recordar la sintaxis específica de PSeInt para la conjunción."
  - "Diferenciar entre 'y' (PSeint) y '&&' (C/Java)."
explicacion: "PSeInt utiliza palabras clave en español para los operadores lógicos. Para la conjunción lógica (AND), se debe usar 'y'. No se usa el símbolo '&' ni '&&'."
```

### 3 — Manejo de Cadenas: Longitud
```
metadata:
  materia: "pseint"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["cadenas", "funciones", "longitud"]
tipo: completar
enunciado: "El algoritmo debe verificar si el nombre de usuario ingresado tiene más de 8 caracteres. ¿Qué función intrínseca de PSeInt se debe usar para obtener la longitud de la cadena 'nombre'?"
codigo:
  Si {FUNCION}(nombre) > 8 Entonces
    Escribir "Nombre aceptado"
  FinSi
respuesta: longitud
respuestas_validas:
  - longitud
  - Longitud
  - LONGITUD
pasos:
  - "Identificar que se necesita medir el tamaño de una cadena."
  - "Consultar la librería de funciones intrínsecas de PSeInt."
  - "Seleccionar la función que devuelve el número de caracteres."
explicacion: "La función intrínseca 'longitud()' en PSeInt devuelve el número de caracteres de una cadena de texto. Es equivalente a 'strlen()' en C o 'len()' en Python."
```

### 4 — Estructura de Selección Múltiple (Segun)
```
metadata:
  materia: "pseint"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["seleccion", "segun", "switch"]
tipo: completar
enunciado: "Se quiere ejecutar una acción diferente dependiendo del valor de la variable 'opcion' (1, 2 o 3). ¿Qué palabra clave inicia la estructura de selección múltiple en PSeInt?"
codigo:
  {PALABRA} opcion
    1:
      Escribir "Opcion A"
    2:
      Escribir "Opcion B"
    De otro modo:
      Escribir "Opcion invalida"
  FinSegun
respuesta: Segun
respuestas_validas:
  - Segun
  - SEGUN
  - segun
pasos:
  - "Reconocer la necesidad de evaluar una variable contra múltiples valores constantes."
  - "Identificar la estructura equivalente al 'switch' de otros lenguajes."
  - "Usar la palabra clave en español que inicia esta estructura."
explicacion: "En PSeInt, la estructura de selección múltiple se inicia con la palabra clave 'Segun', seguida de la variable o expresión a evaluar. Es análoga a 'switch' en C++ o Java."
```

### 5 — Entrada de Datos Enteros
```
metadata:
  materia: "pseint"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["entrada", "tipos", "entero"]
tipo: completar
enunciado: "Se desea leer un número entero desde el teclado y almacenarlo en la variable 'contador'. ¿Qué comando se utiliza correctamente en PSeInt para esta lectura tipada?"
codigo:
  {COMANDO} contador
respuesta: Leer
respuestas_validas:
  - Leer
  - LEER
  - leer
pasos:
  - "Determinar que se requiere lectura de datos desde el usuario."
  - "Verificar si PSeInt distingue comandos de lectura por tipo (como 'LeerEntero')."
  - "Confirmar que el comando genérico 'Leer' infiere el tipo o se usa con variables predefinidas."
explicacion: "PSeInt utiliza el comando 'Leer variable' para obtener datos. Aunque la sintaxis es simple, es crucial que la variable esté declarada con el tipo correcto (Entero, Real, Cadena) en la sección 'Variables' para que el sistema valide la entrada correctamente."
```

### 6 — Salida de Datos con Formato
```
metadata:
  materia: "pseint"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["salida", "escribir", "formato"]
tipo: completar
enunciado: "Se necesita mostrar el mensaje 'El resultado es: ' seguido del valor de la variable 'resultado' en la misma línea. ¿Qué operador de concatenación se usa en PSeInt para unir texto y variables?"
codigo:
  Escribir "El resultado es: " {OPERADOR} resultado
respuesta: +
respuestas_validas:
  - +
  - MAS
  - mas
pasos:
  - "Identificar la necesidad de concatenar una cadena literal con una variable."
  - "Recordar que PSeInt usa el símbolo '+' para concatenar cadenas."
  - "Asegurar que el tipo de dato sea compatible (cadena)."
explicacion: "En PSeInt, el operador '+' se utiliza tanto para suma aritmética como para concatenación de cadenas. Al mezclar una cadena con una variable, se realiza la concatenación."
```

### 7 — Ciclo Mientras con Acumulador
```
metadata:
  materia: "pseint"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["ciclos", "mientras", "acumuladores"]
tipo: completar
enunciado: "Se debe calcular la suma de 10 números ingresados por el usuario. La variable 'suma' está inicializada en 0 y 'i' en 1. ¿Qué condición debe tener el ciclo 'Mientras' para procesar exactamente 10 iteraciones?"
codigo:
  Mientras {CONDICION} Hacer
    Escribir "Ingrese numero:"
    Leer num
    suma = suma + num
    i = i + 1
  FinMientras
respuesta: i <= 10
respuestas_validas:
  - i <= 10
  - i<11
  - i <= 10
  - i < 11
  - i<=10
pasos:
  - "Analizar el contador 'i' que inicia en 1."
  - "Determinar que se necesitan 10 pasos."
  - "Formular la condición booleana que permite el ciclo mientras 'i' sea menor o igual a 10."
explicacion: "El ciclo 'Mientras' evalúa la condición antes de cada iteración. Para contar del 1 al 10, la condición 'i <= 10' es correcta. Si fuera 'i < 10', solo se sumarían 9 números."
```

### 8 — Variables Globales vs Locales
```
metadata:
  materia: "pseint"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["variables", "alcance", "subprogramas"]
tipo: vf
enunciado: "En PSeInt, si declaro una variable dentro de un Subproceso (Procedimiento), esta variable es accesible automáticamente desde el algoritmo principal sin necesidad de pasarla como parámetro."
respuesta: falso
pasos:
  - "Entender el concepto de alcance (scope) de variables."
  - "Recordar que las variables declaradas dentro de un subprograma son locales."
  - "Concluir que no son accesibles externamente por defecto."
explicacion: "Las variables declaradas dentro de un Subproceso o Función son locales a ese bloque. Para compartir datos entre el algoritmo principal y el subprograma, se deben usar parámetros en la definición del subprograma o variables globales declaradas fuera de ambos."
```

### 9 — Definición de Subproceso
```
metadata:
  materia: "pseint"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["subprogramas", "procedimiento", "definicion"]
tipo: completar
enunciado: "Se quiere definir un bloque de código reutilizable que no devuelve valor pero modifica variables globales. ¿Qué palabra clave se usa para definir este tipo de subprograma en PSeInt?"
codigo:
  {PALABRA} MostrarMensaje(mensaje)
    Escribir mensaje
  FinSubProceso
respuesta: SubProceso
respuestas_validas:
  - SubProceso
  - SUBPROCESO
  - subproceso
pasos:
  - "Diferenciar entre una Función (devuelve valor) y un Procedimiento (no devuelve valor)."
  - "Identificar la palabra clave correspondiente en la sintaxis de PSeInt."
  - "Verificar que termina con 'FinSubProceso'."
explicacion: "En PSeInt, los subprogramas que no retornan valores se definen con la palabra clave 'SubProceso'. Si devolvieran un valor, se usaría 'Funcion'."
```

### 10 — Uso de Parámetros por Referencia
```
metadata:
  materia: "pseint"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["subprogramas", "parametros", "referencia"]
tipo: completar
enunciado: "Se necesita que un SubProceso modifique el valor de una variable 'x' que fue pasada desde el algoritmo principal. En PSeInt, ¿cómo se indica que un parámetro se pasa por referencia (para permitir su modificación)?"
codigo:
  SubProceso Modificar(x)
    x = x * 2
  FinSubProceso
  
  x = 5
  {ACCION} x
respuesta: Llamar
pasos:
  - "Identificar que la pregunta pide cómo INVOCAR al subproceso, no cómo definirlo."
  - "Recordar que PSeInt usa 'Llamar' para ejecutar SubProcesos."
  - "Nota: La sintaxis de paso por referencia no requiere palabra clave explícita en la llamada, pero la invocación es 'Llamar'."
explicacion: "Para ejecutar un SubProceso definido, se usa el comando 'Llamar nombre_subproceso(parametros)'. En PSeInt, los parámetros se pasan por referencia por defecto en SubProcesos, permitiendo modificar las variables originales."
```

### 11 — Conversión de Tipo: Real a Entero
```
metadata:
  materia: "pseint"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["tipos", "conversion", "redondeo"]
tipo: completar
enunciado: "Se tiene un número real 'precio_unitario' y se quiere obtener la cantidad entera de unidades que se pueden comprar con un 'presupuesto' fijo, truncando los decimales. ¿Qué función se usa para convertir el resultado de la división a entero?"
codigo:
  cantidad = {FUNCION}(presupuesto / precio_unitario)
respuesta: Entero
respuestas_validas:
  - Entero
  - ENTERO
  - entero
pasos:
  - "Identificar que se necesita truncar un número decimal a entero."
  - "Buscar la función intrínseca de conversión de tipo en PSeInt."
  - "Confirmar que 'Entero()' realiza el truncaje (no redondeo)."
explicacion: "La función 'Entero(numero)' en PSeInt convierte un valor real a entero, truncando la parte decimal (hacia cero). Es diferente de 'Redondear()' que redondea al entero más cercano."
```

### 12 — Estructura Si-Anidado
```
metadata:
  materia: "pseint"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["condicionales", "anidamiento", "logica"]
tipo: completar
enunciado: "Se desea verificar si un número 'n' es positivo Y par. ¿Qué estructura anidada es correcta en PSeInt?"
codigo:
  Si n > 0 Entonces
    Si {CONDICION} Entonces
      Escribir "Positivo y Par"
    FinSi
  FinSi
respuesta: n % 2 == 0
respuestas_validas:
  - n % 2 == 0
  - n mod 2 = 0
  - n MOD 2 = 0
  - n mod 2 == 0
  - n % 2 = 0
pasos:
  - "Analizar la condición 'par': el residuo de la división por 2 debe ser 0."
  - "Seleccionar el operador de residuo en PSeInt ('%' o 'mod')."
  - "Comparar el resultado con 0."
explicacion: "En PSeInt, el residuo se obtiene con '%' o 'mod'. La condición 'n % 2 == 0' verifica si el número es par. El anidamiento de 'Si' dentro de 'Si' permite evaluar la segunda condición solo si la primera se cumple."
```

### 13 — Bucle For Avanzado
```
metadata:
  materia: "pseint"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["ciclos", "para", "for"]
tipo: completar
enunciado: "Se necesita iterar desde 10 hasta 0 en pasos decrecientes de 2. ¿Cómo se define el ciclo 'Para' en PSeInt para este caso?"
codigo:
  Para {VARIABLE} De 10 Con Paso -2 Hacer 0
    Escribir contador
  FinPara
respuesta: contador
pasos:
  - "Identificar la variable de control del ciclo."
  - "Recordar que en PSeInt, la variable de control se declara en la línea del 'Para'."
  - "Verificar la sintaxis: 'Para variable De inicio Con Paso incremento Hacer fin'."
explicacion: "La sintaxis correcta es 'Para i De 10 Con Paso -2 Hacer 0'. La variable 'i' (o cualquier nombre válido) se inicializa en 10, se decrementa en 2 en cada paso y termina cuando supera el límite inferior (0)."
```

### 14 — Manejo de Errores de Sintaxis Común
```
metadata:
  materia: "pseint"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["sintaxis", "errores", "fin"]
tipo: vf
enunciado: "En PSeInt, es obligatorio cerrar cada bloque 'Si' con 'FinSi', cada ciclo 'Mientras' con 'FinMientras' y cada 'Segun' con 'FinSegun' para que el algoritmo sea válido."
respuesta: verdadero
pasos:
  - "Verificar la regla de cierre de bloques en PSeInt."
  - "Confirmar que no existen llaves '{}' para delimitar bloques como en C/Java."
  - "Concluir que las palabras clave 'Fin...' son obligatorias."
explicacion: "PSeInt es un lenguaje basado en palabras clave para la estructura de bloques. El uso de 'FinSi', 'FinMientras', 'FinPara', etc., es obligatorio y estricto. Sin ellas, el analizador sintáctico generará un error."
```

### 15 — Operador de Asignación
```
metadata:
  materia: "pseint"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["asignacion", "operadores", "igual"]
tipo: completar
enunciado: "Se quiere asignar el valor 100 a la variable 'saldo'. En PSeInt, ¿qué símbolo se usa para la asignación simple?"
codigo:
  saldo {SÍMBOLO} 100
respuesta: <-
pasos:
  - "Diferenciar entre asignación y comparación."
  - "Recordar que PSeInt usa '<-' para asignación."
  - "No confundir con '=' que se usa en algunos lenguajes o para comparación en otros contextos (aunque en PSeint '=' es comparación)."
explicacion: "En PSeInt, el operador de asignación es '<-'. El símbolo '=' se utiliza para la comparación de igualdad. Usar '=' para asignación es un error común y provoca error de sintaxis o lógica."
```

### 16 — Comparación de Cadenas
```
metadata:
  materia: "pseint"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["cadenas", "comparacion", "igualdad"]
tipo: completar
enunciado: "Se desea verificar si la variable 'usuario' es exactamente igual a la cadena 'admin'. ¿Qué operador de comparación se usa en PSeInt?"
codigo:
  Si usuario {OPERADOR} "admin" Entonces
    Escribir "Bienvenido"
  FinSi
respuesta: =
pasos:
  - "Identificar la necesidad de comparar igualdad de valores."
  - "Recordar que en PSeInt, '=' se usa para comparación, no para asignación."
  - "Verificar que el lado derecho sea una cadena literal entre comillas."
explicacion: "En PSeInt, el operador de igualdad es '='. Es importante distinguirlo del operador de asignación '<-'. La comparación es case-sensitive por defecto a menos que se configure lo contrario, pero la sintaxis es 'var = valor'."
```

### 17 — Salida de Múltiples Variables
```
metadata:
  materia: "pseint"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["salida", "escribir", "formato"]
tipo: completar
enunciado: "Se quiere mostrar el nombre y la edad en la misma línea separados por un espacio. ¿Cuál es la forma correcta de pasar múltiples argumentos al comando 'Escribir'?"
codigo:
  Escribir nombre, {ARGUMENTO}
respuesta: edad
pasos:
  - "Analizar la sintaxis de 'Escribir' en PSeInt."
  - "Recordar que los argumentos se separan por comas."
  - "Completar el segundo argumento necesario."
explicacion: "El comando 'Escribir' acepta múltiples argumentos separados por comas. 'Escribir arg1, arg2, ...' imprime todos los valores consecutivamente. No se necesita concatenación explícita con '+' si solo se desea imprimir secuencialmente."
```

### 18 — Función Intrínseca: Abs
```
metadata:
  materia: "pseint"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["funciones", "matematicas", "absoluto"]
tipo: completar
enunciado: "Se necesita calcular el valor absoluto de un número 'x' que puede ser negativo. ¿Qué función intrínseca se utiliza en PSeInt?"
codigo:
  valor_abs = {FUNCION}(x)
respuesta: Abs
pasos:
  - "Identificar la operación matemática requerida (valor absoluto)."
  - "Buscar la función correspondiente en la ayuda de PSeInt."
  - "Confirmar que 'Abs()' devuelve el valor absoluto."
explicacion: "La función 'Abs(numero)' en PSeInt devuelve el valor absoluto del número pasado como argumento. Si el número es negativo, devuelve su opuesto positivo."
```

### 19 — Estructura Repetir vs Mientras
```
metadata:
  materia: "pseint"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["ciclos", "comparacion", "lógica"]
tipo: vf
enunciado: "El ciclo 'Repetir ... Hasta' garantiza que el bloque de código interno se ejecute al menos una vez, independientemente de la condición inicial."
respuesta: verdadero
pasos:
  - "Analizar el comportamiento del ciclo 'Repetir'."
  - "Comparar con 'Mientras', que evalúa la condición antes."
  - "Confirmar que 'Repetir' es un ciclo post-verificado."
explicacion: "El ciclo 'Repetir ... Hasta' ejecuta el cuerpo del ciclo primero y luego evalúa la condición. Si la condición es falsa, repite; si es verdadera, termina. Esto garantiza al menos una ejecución."
```

### 20 — Conversión de Tipo: Entero a Real
```
metadata:
  materia: "pseint"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["tipos", "conversion", "real"]
tipo: completar
enunciado: "Se tiene un contador entero 'i' y se quiere usarlo en una división que requiere resultado real. ¿Qué función convierte 'i' a tipo real?"
codigo:
  resultado = {FUNCION}(i) / 2
respuesta: Real
pasos:
  - "Identificar la necesidad de convertir un entero a real."
  - "Buscar la función de conversión de tipo en PSeInt."
  - "Confirmar que 'Real()' realiza la conversión."
explicacion: "La función 'Real(numero)' convierte un valor entero o cadena numérica a tipo real (decimal). Esto es útil para evitar la división entera automática."
```

### 21 — Manejo de Cadenas: Subcadena
```
metadata:
  materia: "pseint"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["cadenas", "subcadena", "extraer"]
tipo: completar
enunciado: "Se desea extraer los primeros 3 caracteres de la cadena 'texto'. ¿Qué función intrínseca se usa?"
codigo:
  sub = {FUNCION}(texto, 1, 3)
respuesta: Subcadena
pasos:
  - "Identificar la operación de extracción de parte de una cadena."
  - "Buscar la función 'Subcadena' en PSeInt."
  - "Verificar que toma la cadena, índice inicial y longitud."
explicacion: "La función 'Subcadena(cadena, inicio, longitud)' extrae una porción de la cadena. 'inicio' es la posición del primer carácter (1-based) y 'longitud' es el número de caracteres a extraer."
```

### 22 — Condición Anidada Compleja
```
metadata:
  materia: "pseint"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["condicionales", "logica", "anidamiento"]
tipo: completar
enunciado: "Se quiere verificar si 'x' es mayor que 10 Y ('x' es menor que 20 O 'x' es igual a 50). ¿Qué sintaxis es correcta en PSeInt?"
codigo:
  Si x > 10 {OPERADOR} (x < 20 {OPERADOR} x = 50) Entonces
respuesta: y
pasos:
  - "Analizar la jerarquía de operadores lógicos."
  - "Identificar que la conjunción principal es 'y'."
  - "Completar el primer operador lógico."
explicacion: "La estructura lógica es (A y (B o C)). En PSeInt, se usa 'y' para la conjunción y 'o' para la disyunción. Los paréntesis aseguran la precedencia correcta."
```

### 23 — Bucle Infinito por Error
```
metadata:
  materia: "pseint"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["ciclos", "errores", "infinito"]
tipo: completar
enunciado: "El siguiente ciclo es infinito. ¿Qué variable falta actualizar dentro del cuerpo para evitar esto?"
codigo:
  i = 1
  Mientras i <= 10 Hacer
    Escribir i
    {VARIABLE} = i + 1
  FinMientras
respuesta: i
pasos:
  - "Identificar la variable de control del ciclo ('i')."
  - "Detectar que 'i' no se modifica dentro del bucle."
  - "Completar la actualización de 'i'."
explicacion: "Para evitar un ciclo infinito, la variable de control debe modificarse dentro del cuerpo del ciclo. Aquí, 'i' debe incrementarse: 'i = i + 1'."
```

### 24 — Función Intrínseca: Raíz Cuadrada
```
metadata:
  materia: "pseint"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["funciones", "matematicas", "raiz"]
tipo: completar
enunciado: "Se necesita calcular la raíz cuadrada de 'num'. ¿Qué función se usa en PSeInt?"
codigo:
  resultado = {FUNCION}(num)
respuesta: Raiz
pasos:
  - "Identificar la operación matemática (raíz cuadrada)."
  - "Buscar la función correspondiente en PSeInt."
  - "Confirmar que 'Raiz()' calcula la raíz cuadrada."
explicacion: "La función 'Raiz(numero)' en PSeInt calcula la raíz cuadrada del número pasado como argumento. Equivale a 'sqrt()' en otros lenguajes."
```

### 25 — Estructura Para con Variable de Control
```
metadata:
  materia: "pseint"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["ciclos", "para", "variable"]
tipo: completar
enunciado: "En un ciclo 'Para i De 1 Hacer 10', ¿qué valor tiene 'i' en la última iteración?"
codigo:
  Para i De 1 Hacer 10
    Escribir i
  FinPara
respuesta: 10
pasos:
  - "Analizar el rango del ciclo 'Para'."
  - "Determinar el valor final del límite superior."
  - "Confirmar que el ciclo incluye el valor final."
explicacion: "El ciclo 'Para i De 1 Hacer 10' itera desde 1 hasta 10 inclusive. En la última iteración, 'i' vale 10."
```