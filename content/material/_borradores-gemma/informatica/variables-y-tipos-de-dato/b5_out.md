### 1 — El tipo de dato correcto
```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["tipos_de_dato", "programacion"]

variables:
  escenario: uno_de([["edad", "25", "nombre", "Ana", "precio", "19.99", "es_valido", "true"], ["puntos", "100", "usuario", "Dev_User", "promedio", "8.5", "esta_activo", "false"]])
  idx: uno_de([0, 1, 2, 3])

enunciado: "Si queremos almacenar el valor de la variable {escenario[idx][0]} que contiene el dato {escenario[idx][1]}, ¿qué tipo de dato es?"

opciones_explicitas: ["entero", "decimal", "texto", "booleano"]
respuesta: ["entero", "decimal", "texto", "booleano"][idx]
tipo: mc

explicacion: |
  El tipo de dato depende del contenido: si es un número sin decimales es entero, si tiene decimales es decimal, si es una secuencia de caracteres es texto y si es verdadero/falso es booleano.
```

### 2 — Completar el tipo de dato
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

respuestas_validas: ["texto", "entero", "decimal", "booleano"]
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  Cada valor tiene una representación lógica en memoria: los textos van entre comillas, los enteros no tienen punto decimal, los decimales sí, y los booleanos representan estados lógicos.
```

### 3 — Verdad o Falso: Almacenamiento
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

### 4 — Ordenar la jerarquía de precisión
```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "intermedio"
  tags: ["ordenar", "memoria"]

enunciado: "Ordena los siguientes tipos de datos de menor a mayor capacidad de representar valores numéricos (desde el más simple al más complejo en términos de precisión decimal):"

opciones_explicitas: ["entero", "decimal", "texto"]
respuesta: ["entero", "decimal", "texto"]
tipo: ordenar

explicacion: |
  El tipo entero solo maneja números sin decimales. El decimal permite precisión fraccionaria. El texto es una estructura compleja que puede contener cualquier carácter.
```

### 5 — Identificación de tipos en un sistema
```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["identificacion", "programacion"]

variables:
  caso: uno_de([["saldo", "500.50", "decimal"], ["nombre", "Juan", "texto"], ["es_mayor", "true", "booleano"]])
  idx: uno_de([0, 1, 2])

enunciado: "En un sistema de gestión, la variable '{caso[idx][0]}' tiene el valor '{caso[idx][1]}'. Su tipo de dato es:"

opciones_explicitas: ["decimal", "texto", "booleano"]
respuesta: caso[idx][2]
tipo: mc

explicacion: |
  Al analizar el valor '{caso[idx][1]}', podemos determinar su naturaleza: si tiene punto decimal es decimal, si es una cadena de letras es texto y si es un valor lógico es booleano.
```