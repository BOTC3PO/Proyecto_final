### 1 — El formato JSON
```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "basico"
  tags: ["json", "formato", "datos"]

variables:
  escenario: uno_de([
    ["{\\"nombre\\": \\"Ana\\", \\"edad\\": 25}", "objeto"],
    ["[1, 2, 3, 4]", "array"],
    ["{\\"id\\": 101, \\"activo\\": true}", "objeto"]
  ])

enunciado: "Se tiene el siguiente fragmento de datos en un archivo: {escenario[0]}."

opciones_explicitas: ["objeto", "array", "diccionario"]
respuesta: escenario[1]
tipo: mc

explicacion: |
  El formato JSON (JavaScript Object Notation) utiliza llaves `{}` para representar objetos (pares clave-valor) y corchetes `[]` para representar arrays (listas ordenadas).
```

### 2 — Estructura de un archivo CSV
```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "basico"
  tags: ["csv", "delimitadores"]

enunciado: "En un archivo CSV estándar, los datos de una misma fila se separan por un delimitador (comúnmente una coma) y los registros se separan por un salto de línea. Si tenemos el siguiente contenido:\nnombre,edad,ciudad\nJuan,30,Madrid\n\n¿Cuántos campos o columnas tiene cada registro?"

respuesta: 3
tipo: input
tolerancia_abs: 0

explicacion: |
  El archivo contiene tres columnas: 'nombre', 'edad' y 'ciudad'. Cada línea representa una fila y las comas separan los valores de esas columnas.
```

### 3 — Persistencia de datos: XML vs JSON
```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "intermedio"
  tags: ["xml", "json", "comparacion"]

enunciado: "Analiza las siguientes dos representaciones de un mismo dato:\n1. `<usuario><id>1</id></usuario>`\n2. `{\"id\": 1}`\n\n¿Cuál de las dos opciones utiliza etiquetas de apertura y cierre para definir la estructura de los datos?"

opciones_explicitas: ["La opción 1 (XML)", "La opción 2 (JSON)", "Ambas", "Ninguna"]
respuesta: "La opción 1 (XML)"
tipo: mc

explicacion: |
  XML (eXtensible Markup Language) se basa en un sistema de etiquetas (tags) como `<id>...</id>`, mientras que JSON utiliza una estructura de pares clave-valor con llaves y corchetes.
```

### 4 — El proceso de serialización
```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "intermedio"
  tags: ["serializacion", "conceptos"]

enunciado: "Para guardar un objeto de la memoria de un programa en un archivo de forma permanente, se debe realizar un proceso llamado ___."

respuestas_validas: ["serialización", "serializacion"]
respuesta: "serialización"
tipo: completar

explicacion: |
  La serialización es el proceso de convertir un objeto en un formato que pueda ser almacenado (como un archivo) o transmitido, para luego ser reconstruido (deserializado).
```

### 5 — Flujo de escritura en disco
```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "avanzado"
  tags: ["flujo", "orden", "escritura"]

enunciado: "Para asegurar que todos los datos almacenados en el búfer de escritura se escriban físicamente en el disco duro antes de cerrar un archivo, se debe seguir este orden lógico de operaciones:"

opciones_explicitas: ["Abrir archivo -> Escribir datos -> Cerrar archivo", "Abrir archivo -> Cerrar archivo -> Escribir datos", "Escribir datos -> Abrir archivo -> Cerrar archivo"]
respuesta: ["Abrir archivo -> Escribir datos -> Cerrar archivo"]
tipo: ordenar

explicacion: |
  El flujo correcto es abrir el archivo para obtener un puntero/manejador, realizar las operaciones de escritura y, finalmente, cerrar el archivo para liberar recursos y asegurar que los datos se guarden (flush).
```