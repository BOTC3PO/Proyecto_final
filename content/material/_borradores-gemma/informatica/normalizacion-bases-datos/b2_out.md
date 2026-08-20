### 1 — El problema de la redundancia
```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_de_datos"
  nivel: "basico"
  tags: ["redundancia", "anomalia"]

enunciado: "En una tabla de 'Ventas' donde se repite el nombre y la dirección del cliente por cada producto comprado, si el cliente cambia de dirección y solo actualizamos una fila, ¿qué problema de integridad de datos estamos enfrentando?"

opciones_explicitas: ["Anomalia de actualización", "Anomalia de inserción", "Anomalia de borrado", "Redundancia de clave"]

respuesta: "Anomalia de actualización"
tipo: "mc"

explicacion: |
  La redundancia de datos (repetir la dirección en cada venta) provoca anomalías de actualización: si no se actualizan todos los registros de un mismo cliente, la base de datos queda con información inconsistente.
```

### 2 — Identificación de la clave
```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_de_datos"
  nivel: "intermedio"
  tags: ["dependencia_funcional", "normalizacion"]

variables:
  escenario: uno_de([
    ["ID_Estudiante", "Nombre", "Email", "Curso", "Aula"],
    ["ID_Libro", "Titulo", "ISBN", "Autor", "Editorial"],
    ["ID_Producto", "Nombre", "Precio", "Categoria", "Proveedor"]
  ])

enunciado: "Considerando el escenario {escenario}, si queremos eliminar la redundancia de la información del 'Curso' y su 'Aula' asociada, ¿cuál debería ser la clave primaria para una tabla separada que gestione la ubicación de los cursos?"

opciones_explicitas: ["ID_Estudiante", "Nombre", "Email", "Curso"]

respuesta: "Curso"
tipo: "mc"

explicacion: |
  Para normalizar, debemos mover los atributos que dependen de un concepto distinto (el curso) a una tabla propia, donde 'Curso' actúe como clave para evitar repetir la 'Aula' en cada estudiante.
```

### 3 — El concepto de normalización
```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_de_datos"
  nivel: "basico"
  tags: ["definicion"]

enunciado: "El proceso de organizar los datos en una base de datos relacional para minimizar la redundancia y evitar anomalías se denomina ___."

respuestas_validas: ["normalización", "normalizacion"]

respuesta: "normalización"
tipo: "completar"

explicacion: |
  La normalización es el proceso de estructurar una base de datos para que cada dato se almacene en un solo lugar, evitando duplicados.
```

### 4 — Verdadero o Falso: Redundancia y Almacenamiento
```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_de_datos"
  nivel: "basico"
  tags: ["almacenamiento"]

enunciado: "Tener una base de datos altamente normalizada siempre implica un ahorro de espacio en disco debido a la eliminación de datos repetidos."

respuesta: falso
tipo: "vf"

explicacion: |
  Aunque la normalización reduce la redundancia de datos descriptivos, puede aumentar el uso de espacio debido a la necesidad de crear más tablas y gestionar múltiples claves foráneas (índices) para realizar las uniones (JOINs).
```

### 5 — Pasos para la normalización
```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_de_datos"
  nivel: "avanzado"
  tags: ["proceso", "pasos"]

variables:
  pasos_ordenados: [
    "Identificar dependencias funcionales",
    "Eliminar dependencias parciales (1FN)",
    "Eliminar dependencias transitivas (2FN/3FN)",
    "Verificar integridad referencial"
  ]

enunciado: "Ordena los pasos lógicos para llevar una tabla desnormalizada hacia un modelo normalizado eficiente:"

opciones_explicitas: ["Identificar dependencias funcionales", "Eliminar dependencias parciales (1FN)", "Eliminar dependencias transitivas (2FN/3FN)", "Verificar integridad referencial"]

respuesta: ["Identificar dependencias funcionales", "Eliminar dependencias parciales (1FN)", "Eliminar dependencias transitivas (2FN/3FN)", "Verificar integridad referencial"]
tipo: "ordenar"

explicacion: |
  El proceso comienza analizando cómo se relacionan los datos (dependencias), luego se separan los datos que no dependen de la clave completa (1FN/2FN) y finalmente se eliminan las dependencias indirectas (3FN).
```