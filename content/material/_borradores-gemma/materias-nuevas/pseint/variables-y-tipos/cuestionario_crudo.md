### 1 — Declaración de variable entera en PSeInt
```yaml
metadata:
  materia: "pseint"
  tema: "variables-y-tipos"
  nivel: "basico"
  tags: ["declaracion", "entero"]
enunciado:
  uno_de:
    - "Para almacenar la cantidad de alumnos en una clase, ¿cuál es la palabra clave correcta para declarar una variable de tipo entero en PSeInt?"
    - "Si deseas guardar el número de sillas en un auditorio, ¿qué tipo de dato y sintaxis de declaración usa PSeInt?"
  respuesta:
    tipo: completar
    respuesta: "entero"
    respuestas_validas:
      - "entero"
      - "Entero"
      - "ENTERO"
pasos:
  - "Identificar el tipo de dato numérico sin decimales."
  - "Recordar la palabra clave reservada en PSeInt para este tipo."
explicacion:
  - "En PSeInt, el tipo de dato numérico entero se declara con la palabra clave 'entero'."
```

### 2 — Tipo de dato para texto
```yaml
metadata:
  materia: "pseint"
  tema: "variables-y-tipos"
  nivel: "basico"
  tags: ["texto", "cadena", "string"]
enunciado:
  uno_de:
    - "Para guardar el nombre completo de un usuario, ¿qué tipo de variable debe utilizarse en PSeInt?"
    - "Si necesitas almacenar una dirección de correo electrónico, ¿cuál es el tipo de dato apropiado en PSeInt?"
  respuesta:
    tipo: completar
    respuesta: "cadena"
    respuestas_validas:
      - "cadena"
      - "Cadena"
      - "CADENA"
      - "string"
      - "String"
      - "STRING"
pasos:
  - "Reconocer que el dato contiene caracteres alfanuméricos."
  - "Identificar el tipo de dato para textos en PSeInt."
explicacion:
  - "PSeInt utiliza 'cadena' (o 'string') para representar textos."
```

### 3 — Asignación de valor a variable
```yaml
metadata:
  materia: "pseint"
  tema: "variables-y-tipos"
  nivel: "basico"
  tags: ["asignacion", "operador"]
enunciado:
  uno_de:
    - "En PSeInt, ¿qué operador se utiliza para asignar el valor 10 a la variable 'edad'?"
    - "Para guardar el número 50 en la variable 'precio', ¿qué símbolo de asignación usa PSeInt?"
  respuesta:
    tipo: completar
    respuesta: ":="
    respuestas_validas:
      - ":="
      - ": ="
      - ":= "
pasos:
  - "Identificar el operador de asignación en pseudocódigo."
  - "Distinguirlo del operador de igualdad."
explicacion:
  - "El operador de asignación en PSeInt es ':=' (dos puntos seguido de igual)."
```

### 4 — Tipo booleano verdadero
```yaml
metadata:
  materia: "pseint"
  tema: "variables-y-tipos"
  nivel: "basico"
  tags: ["booleano", "verdadero"]
enunciado:
  uno_de:
    - "Afirmación: En PSeInt, la palabra clave para representar el valor lógico verdadero es 'True'."
    - "Afirmación: En PSeInt, el valor lógico verdadero se escribe como 'TRUE' (todo mayúsculas)."
  respuesta:
    tipo: vf
    respuesta: falso
pasos:
  - "Verificar las palabras clave reservadas para booleanos en PSeInt."
  - "Comparar con estándares de otros lenguajes como Python o C."
explicacion:
  - "En PSeInt, los valores booleanos son 'Verdadero' y 'Falso' (o 'V' y 'F' según configuración, pero nunca 'True')."
```

### 5 — Declaración de variable real
```yaml
metadata:
  materia: "pseint"
  tema: "variables-y-tipos"
  nivel: "basico"
  tags: ["real", "decimal"]
enunciado:
  uno_de:
    - "Para almacenar el precio unitario de un producto con decimales (ej: 19.99), ¿qué tipo de variable se declara en PSeInt?"
    - "Si necesitas guardar el resultado de una división que produce decimales, ¿qué tipo de dato eliges en PSeInt?"
  respuesta:
    tipo: completar
    respuesta: "real"
    respuestas_validas:
      - "real"
      - "Real"
      - "REAL"
pasos:
  - "Determinar si el dato requiere precisión decimal."
  - "Seleccionar el tipo numérico correspondiente."
explicacion:
  - "El tipo 'real' en PSeInt se usa para números con parte fraccionaria."
```

### 6 — Validación de sintaxis de declaración
```yaml
metadata:
  materia: "pseint"
  tema: "variables-y-tipos"
  nivel: "basico"
  tags: ["sintaxis", "declaracion"]
enunciado:
  uno_de:
    - "Afirmación: En PSeInt, la declaración 'Definir x como Entero' es sintácticamente válida."
    - "Afirmación: La forma estándar de declarar una variable en PSeInt es 'Definir nombreVariable como tipo'."
  respuesta:
    tipo: vf
    respuesta: verdadero
pasos:
  - "Recordar la estructura básica de definición de variables."
  - "Verificar si 'Definir' es la palabra clave correcta."
explicacion:
  - "PSeInt usa la palabra clave 'Definir' seguida del nombre y 'como' el tipo."
```

### 7 — Tipo para caracteres
```yaml
metadata:
  materia: "pseint"
  tema: "variables-y-tipos"
  nivel: "basico"
  tags: ["caracter", "char"]
enunciado:
  uno_de:
    - "Para guardar la inicial del nombre de un usuario (ej: 'A'), ¿qué tipo de variable se usa en PSeInt?"
    - "Si deseas almacenar un solo carácter alfabético, ¿cuál es el tipo adecuado en PSeInt?"
  respuesta:
    tipo: completar
    respuesta: "caracter"
    respuestas_validas:
      - "caracter"
      - "Caracter"
      - "CARACTER"
      - "char"
      - "Char"
      - "CHAR"
pasos:
  - "Identificar que el dato es un único símbolo."
  - "Buscar el tipo específico para caracteres en PSeInt."
explicacion:
  - "El tipo 'caracter' se usa para datos de un solo byte/letra."
```

### 8 — Alcance de variables (Global)
```yaml
metadata:
  materia: "pseint"
  tema: "variables-y-tipos"
  nivel: "basico"
  tags: ["alcance", "global"]
enunciado:
  uno_de:
    - "Afirmación: Las variables declaradas dentro de un Subproceso en PSeInt son accesibles automáticamente en el algoritmo principal sin pasarlas como parámetro."
    - "Afirmación: Por defecto, todas las variables en PSeInt tienen alcance global dentro del algoritmo donde se declaran."
  respuesta:
    tipo: vf
    respuesta: verdadero
pasos:
  - "Analizar el comportamiento por defecto de variables en PSeInt."
  - "Distinguir entre variables locales y globales."
explicacion:
  - "En PSeInt, las variables son globales por defecto. Para limitar el alcance, se deben pasar explícitamente o usar configuraciones específicas, pero la norma es la globalidad en el contexto del algoritmo."
```

### 9 — Conversión implícita de tipos
```yaml
metadata:
  materia: "pseint"
  tema: "variables-y-tipos"
  nivel: "basico"
  tags: ["conversion", "implicita"]
enunciado:
  uno_de:
    - "Afirmación: Si asignas el valor entero 5 a una variable declarada como 'cadena' en PSeInt, el sistema la convierte automáticamente a '5'."
    - "Afirmación: PSeInt realiza conversión automática de tipos al asignar un número a una variable de tipo texto."
  respuesta:
    tipo: vf
    respuesta: falso
pasos:
  - "Verificar si PSeInt permite asignación directa entre tipos distintos sin conversión explícita."
  - "Recordar la strict type checking en asignaciones."
explicacion:
  - "PSeInt NO convierte implícitamente tipos al asignar. Debes usar funciones como 'ToString' o declarar la variable como el tipo correcto."
```

### 10 — Palabra clave para inicio de algoritmo
```yaml
metadata:
  materia: "pseint"
  tema: "variables-y-tipos"
  nivel: "basico"
  tags: ["estructura", "inicio"]
enunciado:
  uno_de:
    - "¿Qué palabra clave se usa para iniciar la definición de un algoritmo en PSeInt, antes de declarar variables?"
    - "Para comenzar a escribir un pseudocódigo en PSeInt, ¿cuál es el comando inicial obligatorio?"
  respuesta:
    tipo: completar
    respuesta: "Algoritmo"
    respuestas_validas:
      - "Algoritmo"
      - "ALGORITMO"
      - "algoritmo"
pasos:
  - "Identificar la estructura base de un programa en PSeInt."
  - "Recordar la palabra clave de inicio."
explicacion:
  - "Todo algoritmo en PSeInt comienza con 'Algoritmo nombre'."
```

### 11 — Declaración múltiple de variables
```yaml
metadata:
  materia: "pseint"
  tema: "variables-y-tipos"
  nivel: "basico"
  tags: ["declaracion", "multiple"]
enunciado:
  uno_de:
    - "Afirmación: En PSeInt, puedes declarar varias variables del mismo tipo en una sola línea separadas por comas, ej: 'Definir a, b, c como Entero'."
    - "Afirmación: La sintaxis 'Definir x, y como Real' es válida en PSeInt para declarar dos variables simultáneamente."
  respuesta:
    tipo: vf
    respuesta: verdadero
pasos:
  - "Verificar si PSeInt soporta declaración compacta de múltiples variables."
  - "Confirmar el uso de comas en la cláusula Definir."
explicacion:
  - "PSeInt permite declarar múltiples variables del mismo tipo en una sola sentencia 'Definir' separadas por comas."
```

### 12 — Tipo para fechas
```yaml
metadata:
  materia: "pseint"
  tema: "variables-y-tipos"
  nivel: "basico"
  tags: ["fecha", "tipo"]
enunciado:
  uno_de:
    - "Para almacenar la fecha de nacimiento de una persona, ¿qué tipo de variable se recomienda en PSeInt?"
    - "Si necesitas guardar un calendario de eventos, ¿cuál es el tipo de dato específico para fechas en PSeInt?"
  respuesta:
    tipo: completar
    respuesta: "fecha"
    respuestas_validas:
      - "fecha"
      - "Fecha"
      - "FECHA"
pasos:
  - "Identificar el tipo de dato para valores temporales."
  - "Buscar el tipo correspondiente en la documentación de PSeInt."
explicacion:
  - "PSeInt tiene un tipo 'fecha' para manejar fechas."
```

### 13 — Inicialización de variable
```yaml
metadata:
  materia: "pseint"
  tema: "variables-y-tipos"
  nivel: "basico"
  tags: ["inicializacion", "valor"]
enunciado:
  uno_de:
    - "Afirmación: En PSeInt, es obligatorio inicializar una variable con un valor en el momento de su declaración."
    - "Afirmación: PSeInt exige que toda variable tenga un valor asignado antes de ser declarada."
  respuesta:
    tipo: vf
    respuesta: falso
pasos:
  - "Analizar si la declaración implica asignación de valor."
  - "Distinguir entre declaración e inicialización."
explicacion:
  - "La declaración define el tipo y nombre. La inicialización puede hacerse después. No es obligatorio asignar valor en el momento de 'Definir'."
```

### 14 — Función para convertir a entero
```yaml
metadata:
  materia: "pseint"
  tema: "variables-y-tipos"
  nivel: "basico"
  tags: ["conversion", "funcion"]
enunciado:
  uno_de:
    - "Si tienes una cadena '123' y quieres convertirla a número entero, ¿qué función usas en PSeInt?"
    - "Para transformar el texto '45' en un valor numérico entero, ¿cuál es la función adecuada en PSeInt?"
  respuesta:
    tipo: completar
    respuesta: "Entero"
    respuestas_validas:
      - "Entero"
      - "ENTERO"
      - "entero"
      - "ToInt"
      - "toInteger"
      - "ParseInt"
pasos:
  - "Identificar la función de conversión de tipo."
  - "Verificar la nomenclatura exacta en PSeInt."
explicacion:
  - "La función 'Entero()' convierte una cadena o real a entero en PSeInt."
```

### 15 — Nombre de variable válido
```yaml
metadata:
  materia: "pseint"
  tema: "variables-y-tipos"
  nivel: "basico"
  tags: ["nombres", "reglas"]
enunciado:
  uno_de:
    - "Afirmación: En PSeInt, el nombre de variable 'mi_variable' es válido."
    - "Afirmación: Los nombres de variables en PSeInt pueden contener guiones bajos y empezar con letra."
  respuesta:
    tipo: vf
    respuesta: verdadero
pasos:
  - "Revisar las reglas de nomenclatura de identificadores en PSeInt."
  - "Verificar si se permiten caracteres especiales como '_'."
explicacion:
  - "PSeInt permite nombres alfanuméricos con guiones bajos, siempre que empiecen con letra."
```

### 16 — Tipo para listas
```yaml
metadata:
  materia: "pseint"
  tema: "variables-y-tipos"
  nivel: "basico"
  tags: ["arreglo", "lista"]
enunciado:
  uno_de:
    - "Para almacenar una lista de calificaciones, ¿qué tipo de variable se usa en PSeInt?"
    - "Si necesitas guardar varios valores del mismo tipo en una sola estructura, ¿cuál es el tipo en PSeInt?"
  respuesta:
    tipo: completar
    respuesta: "vector"
    respuestas_validas:
      - "vector"
      - "Vector"
      - "VECTOR"
      - "arreglo"
      - "Arreglo"
      - "ARREGLO"
      - "matriz"
      - "Matriz"
      - "MATRIZ"
pasos:
  - "Identificar la estructura de datos para colecciones homogéneas."
  - "Buscar el término usado en PSeInt."
explicacion:
  - "PSeInt usa 'vector' (1D) o 'matriz' (nD) para listas de datos."
```

### 17 — Palabra clave para fin de algoritmo
```yaml
metadata:
  materia: "pseint"
  tema: "variables-y-tipos"
  nivel: "basico"
  tags: ["estructura", "fin"]
enunciado:
  uno_de:
    - "¿Qué palabra clave se usa para cerrar la definición de un algoritmo en PSeInt?"
    - "Para finalizar la estructura de un pseudocódigo en PSeInt, ¿cuál es el comando final?"
  respuesta:
    tipo: completar
    respuesta: "FinAlgoritmo"
    respuestas_validas:
      - "FinAlgoritmo"
      - "FINALGORITMO"
      - "fin algoritmo"
      - "Fin de algoritmo"
pasos:
  - "Identificar el cierre de la estructura principal."
  - "Recordar la palabra clave de terminación."
explicacion:
  - "El algoritmo se cierra con 'FinAlgoritmo'."
```

### 18 — Tipo para booleano falso
```yaml
metadata:
  materia: "pseint"
  tema: "variables-y-tipos"
  nivel: "basico"
  tags: ["booleano", "falso"]
enunciado:
  uno_de:
    - "Afirmación: En PSeInt, el valor lógico falso se representa con la palabra 'False'."
    - "Afirmación: En PSeInt, se puede usar 'Falso' para representar el estado lógico negativo."
  respuesta:
    tipo: vf
    respuesta: verdadero
pasos:
  - "Verificar las palabras clave para valores booleanos."
  - "Confirmar si 'Falso' es aceptado."
explicacion:
  - "PSeInt usa 'Falso' (o 'F') para el valor lógico negativo."
```

### 19 — Declaración de variable sin tipo explícito
```yaml
metadata:
  materia: "pseint"
  tema: "variables-y-tipos"
  nivel: "basico"
  tags: ["tipado", "explicito"]
enunciado:
  uno_de:
    - "Afirmación: En PSeInt, es posible declarar una variable sin especificar su tipo, y el sistema la infiere automáticamente."
    - "Afirmación: PSeInt requiere que siempre se especifique el tipo de dato al declarar una variable."
  respuesta:
    tipo: vf
    respuesta: verdadero
pasos:
  - "Analizar si PSeInt es de tipado dinámico o estático."
  - "Verificar la obligatoriedad de la cláusula 'como'."
explicacion:
  - "PSeInt es de tipado estático en la declaración: 'Definir x como Tipo' es obligatorio."
```

### 20 — Función para convertir a cadena
```yaml
metadata:
  materia: "pseint"
  tema: "variables-y-tipos"
  nivel: "basico"
  tags: ["conversion", "cadena"]
enunciado:
  uno_de:
    - "Si tienes un número entero 100 y quieres convertirlo a texto para imprimirlo, ¿qué función usas en PSeInt?"
    - "Para transformar el valor numérico 3.14 en una cadena, ¿cuál es la función adecuada en PSeInt?"
  respuesta:
    tipo: completar
    respuesta: "ToString"
    respuestas_validas:
      - "ToString"
      - "toString"
      - "ToString()"
      - "aTexto"
      - "ATexto"
      - "A TEXTO"
      - "Cadena"
      - "cadena"
pasos:
  - "Identificar la función de conversión a texto."
  - "Verificar la nomenclatura en PSeInt."
explicacion:
  - "La función 'ToString()' (o 'ATexto()') convierte números a cadenas en PSeInt."
```

### 21 — Tipo para matriz
```yaml
metadata:
  materia: "pseint"
  tema: "variables-y-tipos"
  nivel: "basico"
  tags: ["matriz", "array"]
enunciado:
  uno_de:
    - "Para almacenar una tabla de datos bidimensional (filas y columnas), ¿qué tipo de variable se usa en PSeInt?"
    - "Si necesitas guardar un tablero de ajedrez, ¿cuál es el tipo de dato adecuado en PSeInt?"
  respuesta:
    tipo: completar
    respuesta: "matriz"
    respuestas_validas:
      - "matriz"
      - "Matriz"
      - "MATRIZ"
pasos:
  - "Identificar la estructura de datos multidimensional."
  - "Buscar el tipo correspondiente en PSeInt."
explicacion:
  - "El tipo 'matriz' se usa para datos bidimensionales en PSeInt."
```

### 22 — Regla de nombres de variables
```yaml
metadata:
  materia: "pseint"
  tema: "variables-y-tipos"
  nivel: "basico"
  tags: ["nombres", "reglas"]
enunciado:
  uno_de:
    - "Afirmación: En PSeInt, el nombre de variable '2edad' es válido."
    - "Afirmación: Los nombres de variables en PSeInt no pueden empezar con un número."
  respuesta:
    tipo: vf
    respuesta: verdadero
pasos:
  - "Verificar si los nombres pueden iniciar con dígitos."
  - "Confirmar la regla de nomenclatura."
explicacion:
  - "Los identificadores en PSeInt deben empezar con letra o guion bajo, nunca con número."
```

### 23 — Declaración de variable de tipo fecha
```yaml
metadata:
  materia: "pseint"
  tema: "variables-y-tipos"
  nivel: "basico"
  tags: ["fecha", "declaracion"]
enunciado:
  uno_de:
    - "Para guardar la fecha de hoy en una variable, ¿cuál es la sintaxis correcta de declaración en PSeInt?"
    - "Si deseas almacenar una fecha de nacimiento, ¿cómo se declara la variable en PSeInt?"
  respuesta:
    tipo: completar
    respuesta: "Definir variable como fecha"
    respuestas_validas:
      - "Definir variable como fecha"
      - "Definir v como fecha"
      - "Definir fecha como fecha"
      - "Definir x como Fecha"
      - "Definir x como FECHA"
pasos:
  - "Identificar la estructura de declaración."
  - "Usar el tipo 'fecha'."
explicacion:
  - "La sintaxis es 'Definir nombre como fecha'."
```

### 24 — Tipo para cadena vacía
```yaml
metadata:
  materia: "pseint"
  tema: "variables-y-tipos"
  nivel: "basico"
  tags: ["cadena", "vacia"]
enunciado:
  uno_de:
    - "Afirmación: En PSeInt, una variable de tipo 'cadena' puede contener el valor vacío representado como ''."
    - "Afirmación: Se puede asignar un texto vacío a una variable de tipo 'cadena' en PSeInt."
  respuesta:
    tipo: vf
    respuesta: verdadero
pasos:
  - "Verificar si las cadenas permiten valores vacíos."
  - "Confirmar la representación del vacío."
explicacion:
  - "Las cadenas en PSeInt pueden estar vacías ('')."
```

### 25 — Función para convertir a real
```yaml
metadata:
  materia: "pseint"
  tema: "variables-y-tipos"
  nivel: "basico"
  tags: ["conversion", "real"]
enunciado:
  uno_de:
    - "Si tienes una cadena '12.5' y quieres convertirla a número real, ¿qué función usas en PSeInt?"
    - "Para transformar el texto '3.14' en un valor numérico decimal, ¿cuál es la función adecuada en PSeInt?"
  respuesta:
    tipo: completar
    respuesta: "Real"
    respuestas_validas:
      - "Real"
      - "REAL"
      - "real"
      - "ToReal"
      - "toReal"
      - "ParseReal"
      - "ParseFloat"
pasos:
  - "Identificar la función de conversión a decimal."
  - "Verificar la nomenclatura exacta en PSeInt."
explicacion:
  - "La función 'Real()' convierte una cadena o entero a real en PSeInt."
```