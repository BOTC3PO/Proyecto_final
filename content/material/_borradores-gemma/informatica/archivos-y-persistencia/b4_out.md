### 1 — Formato de intercambio de datos
```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "basico"
  tags: ["formato", "json", "datos"]

respuesta: "JSON"
tipo: "mc"
opciones_explicitas: ["XML", "JSON", "TXT", "CSV"]

enunciado: "A diferencia de XML, que utiliza etiquetas anidadas para estructurar la información, el formato ___ es un estándar ligero basado en pares clave-valor que es ampliamente utilizado en APIs web."

explicacion: |
  JSON (JavaScript Object Notation) es preferido en la web moderna por su sintaxis más simple y menor sobrecarga de datos en comparación con XML.
```

### 2 — Persistencia vs. Memoria Volátil
```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "basico"
  tags: ["memoria", "persistencia", "volatilidad"]

variables:
  es_persistente: true

respuesta: es_persistente
tipo: "vf"

enunciado: "Si un programa guarda una variable en el disco duro (archivo), la información se mantiene aunque el proceso termine o se apague la computadora. Esto significa que la escritura en disco es una operación de ___ persistencia."

explicacion: |
  La memoria RAM es volátil (se pierde al apagar el equipo), mientras que el almacenamiento secundario (archivos) permite la persistencia de los datos.
```

### 3 — Estructura de archivos delimitados
```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "intermedio"
  tags: ["csv", "estructura", "datos"]

respuesta: "CSV"
tipo: "completar"
respuestas_validas: ["CSV", "txt", "bin"]

enunciado: "Mientras que un archivo de texto plano (.txt) no tiene una estructura interna definida, un archivo ___ utiliza un carácter delimitador (como una coma o punto y coma) para separar los campos de cada registro."

explicacion: |
  El formato CSV (Comma-Separated Values) es una forma estructurada de representar tablas de datos en texto plano.
```

### 4 — Serialización de objetos
```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "avanzado"
  tags: ["serializacion", "objetos", "binario"]

variables:
  escenario: uno_de([[true, "binario"], [false, "texto"]])

respuesta: escenario[1]
tipo: "mc"
opciones_explicitas: ["texto", "binario"]

enunciado: "Si el escenario de serialización es {escenario[0]}, el archivo resultante será de tipo ___."

explicacion: |
  La serialización binaria es más eficiente en tamaño y velocidad de lectura/escritura, pero no es legible por humanos, a diferencia de la serialización en texto (como JSON).
```

### 5 — Flujo de procesos de lectura
```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "intermedio"
  tags: ["flujo", "archivos", "orden"]

respuesta: ["Abrir", "Leer", "Cerrar"]
tipo: "ordenar"
opciones_explicitas: ["Cerrar", "Leer", "Abrir"]

enunciado: "Para manipular un archivo de forma segura y evitar fugas de memoria o bloqueos del sistema operativo, se debe seguir este orden lógico de operaciones:"

explicacion: |
  Es fundamental abrir el flujo (stream), realizar las operaciones de lectura/escritura y, lo más importante, cerrar el archivo para liberar el recurso.
```