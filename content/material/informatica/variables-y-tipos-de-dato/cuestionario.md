# Informatica — Variables y tipos de dato (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El concepto de variable

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["conceptos", "fundamentos"]

respuesta: "contenedor"
tipo: completar
respuestas_validas:
  - "contenedor"

enunciado: "En programación, una variable se puede definir conceptualmente como un ___ en memoria que permite almacenar un valor que puede cambiar durante la ejecución de un programa."

explicacion: |
  Una variable es un espacio reservado en la memoria de la computadora, identificado por un nombre, destinado a guardar un dato que puede ser modificado.
```

### 2 — Identificación de tipos de datos

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["tipos_de_datos", "identificacion"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  datos: [["15", "entero"], ["3.14", "decimal"], ["'Hola'", "texto"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["entero", "decimal", "texto", "booleano"]

enunciado: "Si tenemos el valor {datos[escenario_idx][0]}, ¿qué tipo de dato representa principalmente?"

explicacion: |
  El tipo de dato determina qué operaciones se pueden realizar con el valor. En este caso, {datos[escenario_idx][0]} es de tipo {datos[escenario_idx][1]}.
```

### 3 — El valor booleano

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["booleanos", "logica"]

respuesta: falso
tipo: vf

enunciado: "¿El tipo de dato booleano puede almacenar valores como 'si', 'no', 'tal vez' o '10'?"

explicacion: |
  Falso. El tipo booleano es estrictamente binario: solo puede representar dos estados, verdadero (true) o falso (false).
```

### 4 — Tipos de datos numéricos

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["numeros", "decimales"]

respuesta: "float"
tipo: mc
opciones_explicitas: ["int", "float", "string", "bool"]

enunciado: "Cuando necesitamos representar un número que contiene una parte fraccionaria (como 0.5 o -1.25), el tipo de dato más adecuado es:"

explicacion: |
  Los números enteros (int) no permiten decimales. Para valores con precisión decimal utilizamos tipos de punto flotante (float o double).
```

### 5 — El proceso de asignación

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["flujo", "asignacion"]

respuesta_orden: ["Declarar", "Asignar", "Usar"]
tipo: ordenar
opciones_explicitas: ["Declarar", "Asignar", "Usar"]

enunciado: "Ordena los pasos lógicos para trabajar con una variable en un programa:"

pasos:
  - "Crear el nombre de la variable en memoria."
  - "Darle un valor inicial."
  - "Emplear la variable en una operación o instrucción."

explicacion: |
  Primero se debe declarar la variable (reservar espacio), luego asignar un valor (inicializar) y finalmente se puede usar en el código.
```

### 6 — Identificación de tipos de datos

```
metadata:
  materia: "informatica"
  tema: "tipos_de_datos"
  nivel: "basico"
  tags: ["fundamentos", "tipos_de_datos"]

variables:
  ejemplo_idx: uno_de([0, 1, 2])
  datos: [["42", "int"], ["3.14", "float"], ["\"Hola\"", "string"]]

enunciado: "Si asignamos el valor {datos[ejemplo_idx][0]} a una variable, el tipo de dato resultante es {datos[ejemplo_idx][1]}."

respuesta: datos[ejemplo_idx][1]
tipo: mc
opciones_explicitas: ["int", "float", "string", "boolean"]

explicacion: |
  Cada valor tiene un tipo asociado: los números sin decimales son enteros (int), los que tienen punto decimal son de punto flotante (float) y las secuencias de caracteres entre comillas son cadenas (string).
```

### 7 — Evaluación de booleanos

```
metadata:
  materia: "informatica"
  tema: "tipos_de_datos"
  nivel: "basico"
  tags: ["logica", "booleanos"]

enunciado: "En programación, una comparación como 10 > 5 resulta en un valor de tipo ___."

respuestas_validas:
  - "booleano"
  - "bool"
respuesta: "booleano"
tipo: completar

explicacion: |
  Las comparaciones lógicas devuelven valores booleanos: 'verdadero' (true) si la condición se cumple, o 'falso' (false) si no se cumple. Como 10 > 5 se cumple, el resultado concreto es 'verdadero', pero su tipo de dato es booleano.
```

### 8 — Conversión de tipos (Casting)

```
metadata:
  materia: "informatica"
  tema: "tipos_de_datos"
  nivel: "intermedio"
  tags: ["casting", "conversiones"]

variables:
  valor_original: "10.7"
  escenario: [["int", "10"], ["float", "10.7"]]
  idx: uno_de([0, 1])

enunciado: "Si convertimos el valor {valor_original} al tipo {escenario[idx][0]}, ¿cuál será el resultado?"

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["10", "10.7", "11", "error"]

explicacion: |
  Al convertir un número decimal (float) a un entero (int), se realiza un truncamiento: se eliminan todos los dígitos después del punto decimal sin redondear.
```

### 9 — Orden de jerarquía en memoria

```
metadata:
  materia: "informatica"
  tema: "tipos_de_datos"
  nivel: "basico"
  tags: ["almacenamiento", "memoria"]

enunciado: "Ordena los siguientes tipos de datos de menor a mayor consumo aproximado de memoria en un sistema estándar (asumiendo 8 bits para booleanos y 32/64 para otros):"

opciones_explicitas: ["boolean", "int", "float", "string"]
respuesta_orden: ["boolean", "int", "float", "string"]
tipo: ordenar

explicacion: |
  Un booleano ocupa el espacio mínimo (1 bit/byte), seguido por enteros y flotantes de tamaño fijo, mientras que los strings son dinámicos y dependen de la longitud del texto.
```

### 10 — Verdad o Falso: Mutabilidad

```
metadata:
  materia: "informatica"
  tema: "tipos_de_datos"
  nivel: "intermedio"
  tags: ["conceptos", "mutabilidad"]

enunciado: "En muchos lenguajes de programación, una vez que una variable de tipo 'string' ha sido creada, su contenido no puede ser modificado directamente en la memoria, sino que se debe crear una nueva cadena. ¿Es esto verdadero o falso?"

respuesta: verdadero
tipo: vf
opciones_explicitas: ["verdadero", "falso"]

explicacion: |
  Esto se conoce como inmutabilidad. En lenguajes como Python o Java, los strings son inmutables; cualquier "modificación" genera un nuevo objeto en memoria.
```

### 11 — El dilema de la suma de tipos

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["tipos_de_dato", "errores_comunes"]

variables:
  a: 10
  b: "5"

enunciado: "Si intentamos realizar la operación matemática de sumar {a} + {b} en un lenguaje de tipado fuerte, el resultado esperado suele ser un error de tipo (TypeError) porque no se puede sumar un entero con un ___."

opciones_explicitas: ["entero", "decimal", "string", "booleano"]
respuesta: "string"
tipo: "mc"

explicacion: |
  En programación, no puedes sumar directamente un número (entero) con una cadena de texto (string). Para hacerlo, primero debes convertir el string a un número usando funciones como `int()` o `float()`.
```

### 12 — La naturaleza de los booleanos

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["booleanos", "logica"]

enunciado: "En la lógica de programación, el valor booleano que representa la falsedad se escribe como ___."

respuestas_validas:
  - "falso"
  - "false"
tipo: "completar"

explicacion: |
  Los tipos de datos booleanos solo pueden tener dos valores posibles: verdadero (true) o falso (false).
```

### 13 — ¿Entero o Decimal?

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["decimales", "float", "precision"]

variables:
  valor_a: 15
  valor_b: 15.5

enunciado: "Si declaramos una variable para almacenar el precio de un producto que puede tener centavos, como {valor_b}, ¿qué tipo de dato es el más adecuado para evitar la pérdida de precisión?"

opciones_explicitas: ["int", "float", "string", "bool"]
respuesta: "float"
tipo: "mc"

explicacion: |
  Los tipos `int` (enteros) solo almacenan números sin parte decimal. Para valores con decimales, se utilizan tipos de punto flotante como `float` o `double`.
```

### 14 — El orden de la memoria

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "intermedio"
  tags: ["almacenamiento", "memoria"]

enunciado: "Ordena los siguientes pasos que ocurren cuando una computadora asigna una variable en memoria, desde la reserva del espacio hasta el uso del dato:"

opciones_explicitas: ["Reserva de espacio en RAM", "Asignación de un nombre a la dirección", "Almacenamiento del valor", "Acceso al dato mediante el nombre"]
respuesta_orden: ["Reserva de espacio en RAM", "Asignación de un nombre a la dirección", "Almacenamiento del valor", "Acceso al dato mediante el nombre"]
tipo: "ordenar"

explicacion: |
  Para usar una variable, el sistema primero debe encontrar un lugar vacío en la memoria (RAM), asignar ese lugar a un nombre para que el programador lo reconozca, guardar el valor y finalmente permitir su lectura.
```

### 15 — La trampa de la comparación

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["comparacion", "booleanos"]

enunciado: "Si evaluamos la expresión lógica (5 == 5.0), el resultado es ___."

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: "mc"

explicacion: |
  En la mayoría de los lenguajes modernos, al comparar un entero con un número decimal que tiene el mismo valor numérico, el resultado es verdadero porque el contenido matemático es el mismo.
```

### 16 — Diferencia entre Enteros y Flotantes

```
metadata:
  materia: "informatica"
  tema: "tipos_de_dato_numericos"
  nivel: "basico"
  tags: ["tipos_de_dato", "numeros"]

respuesta: "flotante"
tipo: completar
respuestas_validas:
  - "flotante"
  - "decimal"
  - "real"

enunciado: "Mientras que un tipo de dato entero representa números sin parte decimal, un tipo de dato ___ representa números que requieren precisión decimal."

explicacion: |
  En programación, los enteros (int) se usan para conteos exactos, mientras que los flotantes (float) se usan para mediciones con decimales.
```

### 17 — Naturaleza de los Booleanos

```
metadata:
  materia: "informatica"
  tema: "tipos_de_dato_logicos"
  nivel: "basico"
  tags: ["booleanos", "logica"]

opciones_explicitas: ["falso", "verdadero", "texto", "entero"]
respuesta: "verdadero"
tipo: mc

enunciado: "Un tipo de dato booleano se distingue de otros tipos porque su valor solo puede representar uno de dos estados lógicos: 'falso' es uno de ellos. ¿Cuál es el otro estado posible?"

explicacion: |
  Los booleanos son la base de la lógica computacional y solo pueden ser 'verdadero' o 'falso'.
```

### 18 — Representación de Cadenas de Texto

```
metadata:
  materia: "informatica"
  tema: "tipos_de_dato_texto"
  nivel: "basico"
  tags: ["strings", "texto"]

respuestas_validas:
  - "comillas"
respuesta: "comillas"
tipo: completar

enunciado: "A diferencia de los tipos numéricos, el tipo de dato texto (string) se distingue de un número por estar delimitado por ___ en el código fuente."

explicacion: |
  El uso de comillas (simples o dobles) le indica al compilador que el contenido debe tratarse como una secuencia de caracteres y no como una variable o un número.
```

### 19 — Orden de complejidad de tipos de datos

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_memoria"
  nivel: "intermedio"
  tags: ["memoria", "orden"]

opciones_explicitas: ["Booleano", "Entero", "Flotante", "String"]
respuesta_orden: ["Booleano", "Entero", "Flotante", "String"]
tipo: ordenar

enunciado: "Ordena los siguientes tipos de datos de menor a mayor complejidad de almacenamiento y procesamiento en la memoria de una computadora típica:"

explicacion: |
  Los booleanos ocupan menos espacio, seguidos por enteros, luego números decimales (que requieren más bits para la mantisa) y finalmente las cadenas de texto, cuyo tamaño depende de su longitud.
```

### 20 — Verdad vs Falsedad en lógica

```
metadata:
  materia: "informatica"
  tema: "tipos_de_dato_logicos"
  nivel: "basico"
  tags: ["booleanos", "logica"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que el tipo de dato booleano puede almacenar el valor numérico 5.5?"

explicacion: |
  Falso. El tipo booleano es estrictamente binario (verdadero/falso) y no puede contener valores decimales o enteros distintos a su lógica.
```

### 21 — El tipo de dato correcto

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["tipos_de_dato", "programacion"]

variables:
  datos: [["edad", "25", "entero"], ["nombre", "Ana", "texto"], ["precio", "19.99", "decimal"], ["es_valido", "true", "booleano"], ["puntos", "100", "entero"], ["usuario", "Dev_User", "texto"], ["promedio", "8.5", "decimal"], ["esta_activo", "false", "booleano"]]
  idx: uno_de([0, 1, 2, 3, 4, 5, 6, 7])

enunciado: "Si queremos almacenar el valor de la variable {datos[idx][0]} que contiene el dato {datos[idx][1]}, ¿qué tipo de dato es?"

opciones_explicitas: ["entero", "decimal", "texto", "booleano"]
respuesta: datos[idx][2]
tipo: mc

explicacion: |
  El tipo de dato depende del contenido: si es un número sin decimales es entero, si tiene decimales es decimal, si es una secuencia de caracteres es texto y si es verdadero/falso es booleano.
```

### 22 — Completar el tipo de dato

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["completar", "tipos_de_dato"]

variables:
  datos: [["\"Hola Mundo\"", "texto"], ["42", "entero"], ["3.14", "decimal"], ["false", "booleano"]]
  idx: uno_de([0, 1, 2, 3])

enunciado: "La variable que contiene el valor {datos[idx][0]} es de tipo ___."

respuestas_validas:
  - "texto"
  - "entero"
  - "decimal"
  - "booleano"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  Cada valor tiene una representación lógica en memoria: los textos van entre comillas, los enteros no tienen punto decimal, los decimales sí, y los booleanos representan estados lógicos.
```

### 23 — Verdad o Falso: Almacenamiento

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "intermedio"
  tags: ["booleanos", "memoria"]

enunciado: "¿Es correcto afirmar que una variable de tipo booleano puede almacenar el valor 15.5?"

respuesta: falso
tipo: vf

explicacion: |
  Falso. Las variables de tipo booleano solo pueden almacenar dos valores: verdadero o falso. El valor 15.5 es un número decimal.
```

### 24 — Ordenar la jerarquía de precisión

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "intermedio"
  tags: ["ordenar", "memoria"]

enunciado: "Ordena los siguientes tipos de datos de menor a mayor capacidad de representar valores numéricos (desde el más simple al más complejo en términos de precisión decimal):"

opciones_explicitas: ["entero", "decimal", "texto"]
respuesta_orden: ["entero", "decimal", "texto"]
tipo: ordenar

explicacion: |
  El tipo entero solo maneja números sin decimales. El decimal permite precisión fraccionaria. El texto es una estructura compleja que puede contener cualquier carácter.
```

### 25 — Identificación de tipos en un sistema

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["identificacion", "programacion"]

variables:
  datos: [["saldo", "500.50", "decimal"], ["nombre", "Juan", "texto"], ["es_mayor", "true", "booleano"]]
  idx: uno_de([0, 1, 2])

enunciado: "En un sistema de gestión, la variable '{datos[idx][0]}' tiene el valor '{datos[idx][1]}'. Su tipo de dato es:"

opciones_explicitas: ["decimal", "texto", "booleano"]
respuesta: datos[idx][2]
tipo: mc

explicacion: |
  Al analizar el valor '{datos[idx][1]}', podemos determinar su naturaleza: si tiene punto decimal es decimal, si es una cadena de letras es texto y si es un valor lógico es booleano.
```
