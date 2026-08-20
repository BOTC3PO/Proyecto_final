### 1 — Diferencia entre PK y FK
```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "basico"
  tags: ["sql", "bases_de_datos"]

respuesta: "clave_foranea"
tipo: "mc"
opciones_explicitas: ["clave_primaria", "clave_foranea", "índice_único", "clave_compuesta"]

enunciado: "Mientras que la clave primaria identifica de forma única un registro en su propia tabla, la ___ se utiliza para establecer un vínculo con una clave primaria de otra tabla."

explicacion: |
  La clave primaria (Primary Key) garantiza la unicidad en la tabla origen, mientras que la clave foránea (Foreign Key) permite la integridad referencial conectando tablas.
```

### 2 — Integridad Referencial
```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["integridad", "sql"]

respuesta: verdadero
tipo: "vf"

enunciado: "La restricción de integridad referencial asegura que un valor en una columna de clave foránea debe existir previamente en la columna de clave primaria de la tabla relacionada."

explicacion: |
  Verdadero. Si se intentara insertar un valor en la clave foránea que no existe en la tabla padre, el sistema de gestión de bases de datos (RDBMS) lanzaría un error para mantener la consistencia.
```

### 3 — Efectos de la eliminación (ON DELETE)
```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "avanzado"
  tags: ["sql", "integridad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["RESTRICT", "Impide la eliminación del registro padre si tiene hijos"],
    ["CASCADE", "Elimina automáticamente los registros hijos al eliminar el padre"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: "mc"
opciones_explicitas: ["RESTRICT", "CASCADE", "SET NULL", "NO ACTION"]

enunciado: "Si configuramos una relación con la acción '{escenarios[escenario_idx][0]}', el comportamiento resultante es: ___"

explicacion: |
  La opción elegida define cómo reacciona la base de datos ante la pérdida de un registro padre. {escenarios[escenario_idx][0]} es el comportamiento específico seleccionado para este caso.
```

### 4 — Flujo de creación de esquema
```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "basico"
  tags: ["diseño", "modelado"]

respuesta: ["Definir entidades", "Establecer atributos", "Identificar claves primarias", "Establecer claves foráneas"]
tipo: "ordenar"
opciones_explicitas: ["Definir entidades", "Establecer atributos", "Identificar claves primarias", "Establecer claves foráneas"]

enunciado: "Ordena los pasos lógicos para diseñar un modelo relacional que incluya relaciones entre tablas:"

explicacion: |
  Primero se definen los objetos (entidades), luego sus propiedades (atributos), después cómo se identifican (PK) y finalmente cómo se conectan (FK).
```

### 5 — El concepto de Nulidad
```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["sql", "constraints"]

respuesta: "nulo"
tipo: "completar"
respuestas_validas: ["nulo", "NULL"]

enunciado: "A diferencia de una clave primaria que nunca puede contener valores ___, una clave foránea puede permitir valores ___ si la relación es opcional."

explicacion: |
  La clave primaria (PK) tiene una restricción de 'NOT NULL' implícita para garantizar la identidad, mientras que la clave foránea (FK) puede ser nula si la relación es opcional (por ejemplo, un empleado que aún no tiene asignado un departamento).
```