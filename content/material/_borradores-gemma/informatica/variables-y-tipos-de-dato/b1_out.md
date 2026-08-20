### 1 — El concepto de variable
```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["conceptos", "fundamentos"]

respuesta: "contenedor"
tipo: completar
respuestas_validas: ["contenedor"]

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

respuesta: ["Declarar", "Asignar", "Usar"]
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