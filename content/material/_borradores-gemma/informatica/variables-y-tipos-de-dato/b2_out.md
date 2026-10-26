### 1 — Identificación de tipos de datos
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

### 2 — Evaluación de booleanos
```
metadata:
  materia: "informatica"
  tema: "tipos_de_datos"
  nivel: "basico"
  tags: ["logica", "booleanos"]

enunciado: "En programación, una comparación como 10 > 5 resulta en un valor de tipo ___."

respuestas_validas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: completar

explicacion: |
  Las comparaciones lógicas devuelven valores booleanos: 'verdadero' (true) si la condición se cumple, o 'falso' (false) si no se cumple.
```

### 3 — Conversión de tipos (Casting)
```
metadata:
  materia: "informatica"
  tema: "tipos_de_datos"
  nivel: "intermedio"
  tags: ["casting", "conversiones"]

variables:
  valor_original: "10.7"
  tipo_destino: uno_de([0, 1])
  escenario: [["int", "10"], ["float", "10.7"]]

enunciado: "Si convertimos el valor {valor_original} al tipo {escenario[escenario_idx][0]}, el resultado será {escenario[escenario_idx][1]}."

respuesta: escenario[escenario_idx][1]
tipo: mc
opciones_explicitas: ["10", "10.7", "11", "error"]

explicacion: |
  Al convertir un número decimal (float) a un entero (int), se realiza un truncamiento: se eliminan todos los dígitos después del punto decimal sin redondear.
```

### 4 — Orden de jerarquía en memoria
```
metadata:
  materia: "informatica"
  tema: "tipos_de_datos"
  nivel: "basico"
  tags: ["almacenamiento", "memoria"]

enunciado: "Ordena los siguientes tipos de datos de menor a mayor consumo aproximado de memoria en un sistema estándar (asumiendo 8 bits para booleanos y 32/64 para otros):"

opciones_explicitas: ["boolean", "int", "float", "string"]
respuesta: ["boolean", "int", "float", "string"]
tipo: ordenar

explicacion: |
  Un booleano ocupa el espacio mínimo (1 bit/byte), seguido por enteros y flotantes de tamaño fijo, mientras que los strings son dinámicos y dependen de la longitud del texto.
```

### 5 — Verdad o Falso: Mutabilidad
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