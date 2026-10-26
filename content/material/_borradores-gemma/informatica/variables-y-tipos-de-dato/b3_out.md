### 1 — El dilema de la suma de tipos
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

### 2 — La naturaleza de los booleanos
```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["booleanos", "logica"]

enunciado: "En la lógica de programación, el valor booleano que representa la falsedad se escribe como ___."

respuestas_validas: ["falso", "false"]
tipo: "completar"

explicacion: |
  Los tipos de datos booleanos solo pueden tener dos valores posibles: verdadero (true) o falso (false).
```

### 3 — ¿Entero o Decimal?
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

### 4 — El orden de la memoria
```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "intermedio"
  tags: ["almacenamiento", "memoria"]

enunciado: "Ordena los siguientes pasos que ocurren cuando una computadora asigna una variable en memoria, desde la reserva del espacio hasta el uso del dato:"

opciones_explicitas: ["Reserva de espacio en RAM", "Asignación de un nombre a la dirección", "Almacenamiento del valor", "Acceso al dato mediante el nombre"]
respuesta: ["Reserva de espacio en RAM", "Asignación de un nombre a la dirección", "Almacenamiento del valor", "Acceso al dato mediante el nombre"]
tipo: "ordenar"

explicacion: |
  Para usar una variable, el sistema primero debe encontrar un lugar vacío en la memoria (RAM), asignar ese lugar a un nombre para que el programador lo reconozca, guardar el valor y finalmente permitir su lectura.
```

### 5 — La trampa de la comparación
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