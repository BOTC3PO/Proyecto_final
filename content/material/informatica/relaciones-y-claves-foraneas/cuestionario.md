# Informatica — Relaciones y claves foraneas (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Clave Primaria

```
metadata:
  materia: "informatica"
  tema: "relaciones-y-claves-foraneas"
  nivel: "basico"
  tags: ["bases-de-datos", "sql"]

respuesta: "clave_primaria"
tipo: completar
respuestas_validas:
  - "clave_primaria"
  - "primary_key"

enunciado: "El campo único que identifica de forma inequívoca a cada registro en una tabla se denomina ___."

explicacion: |
  La clave primaria (Primary Key) garantiza la integridad de la entidad, asegurando que no haya dos filas idénticas y que el identificador no sea nulo.
```

### 2 — Relación de Clave Foránea

```
metadata:
  materia: "informatica"
  tema: "relaciones-y-claves-foraneas"
  nivel: "basico"
  tags: ["bases-de-datos", "relaciones"]

respuesta: falso
tipo: vf

enunciado: "¿Una clave foránea (Foreign Key) debe referenciar necesariamente a una clave primaria en la tabla de origen?"

explicacion: |
  Falso. Una clave foránea debe referenciar a una clave única (Unique Key) en la tabla de destino, no estrictamente a una clave primaria, aunque es la práctica más común.
```

### 3 — Tipos de Relaciones

```
metadata:
  materia: "informatica"
  tema: "relaciones-y-claves-foraneas"
  nivel: "intermedio"
  tags: ["modelado", "cardinalidad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Un Cliente y sus Pedidos", "uno_a_muchos"], ["Un Estudiante y sus Materias (en un modelo N:M)", "muchos_a_muchos"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["uno_a_uno", "uno_a_muchos", "muchos_a_muchos"]

enunciado: "En el escenario '{escenarios[escenario_idx][0]}', el tipo de relación predominante es:"

explicacion: |
  En el primer caso, un cliente puede tener múltiples pedidos (1:N). En el segundo caso, un estudiante tiene muchas materias y una materia tiene muchos estudiantes (N:M).
```

### 4 — Integridad Referencial

```
metadata:
  materia: "informatica"
  tema: "relaciones-y-claves-foraneas"
  nivel: "intermedio"
  tags: ["integridad", "sql"]

respuesta: "Integridad Referencial"
tipo: completar
respuestas_validas:
  - "Integridad Referencial"
  - "Integridad de Entidad"

enunciado: "La regla que asegura que los valores de una clave foránea existan previamente en la tabla referenciada se conoce como ___."

explicacion: |
  La integridad referencial garantiza que las relaciones entre tablas permanezcan consistentes, evitando "registros huérfanos".
```

### 5 — Orden de creación de tablas

```
metadata:
  materia: "informatica"
  tema: "relaciones-y-claves-foraneas"
  nivel: "avanzado"
  tags: ["sql", "ddl"]

respuesta_orden: ["Tabla_Padre", "Tabla_Hija"]
tipo: ordenar
opciones_explicitas: ["Tabla_Hija", "Tabla_Padre"]

enunciado: "Para evitar errores de restricción al ejecutar un script SQL de creación de base de datos, ¿en qué orden deben crearse las tablas si la Tabla_Hija tiene una clave foránea que apunta a la Tabla_Padre?"

explicacion: |
  Primero se debe crear la tabla que contiene la clave primaria (Padre) para que, cuando se cree la tabla que la referencia (Hija), la clave ya exista en el sistema.
```

### 6 — Identificación de Clave Foránea

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "basico"
  tags: ["sql", "dbms", "relaciones"]

variables:
  idx: uno_de([0, 1])
  datos: [["Clientes", "Pedidos", "cliente_id"], ["Autores", "Libros", "autor_id"]]

enunciado: "En un modelo relacional, si tenemos una tabla de {datos[idx][0]} y una tabla de {datos[idx][1]}, la columna que permite vincular ambas tablas y hace referencia a la clave primaria de la primera tabla es la clave foránea, cuyo nombre en la tabla secundaria es ___."

respuestas_validas:
  - "cliente_id"
  - "autor_id"
respuesta: datos[idx][2]
tipo: completar

explicacion: |
  La clave foránea (Foreign Key) es un campo en una tabla que identifica un registro único en otra tabla, estableciendo así la relación entre ambas.
```

### 7 — Integridad Referencial

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["integridad", "sql", "conceptos"]

enunciado: "Si intentamos eliminar un registro de la tabla 'Clientes' que tiene un ID asociado a registros existentes en la tabla 'Pedidos', y la restricción de integridad referencial está activa, la base de datos impedirá la acción para evitar datos huérfanos."

respuesta: falso
tipo: vf

explicacion: |
  La integridad referencial garantiza que no existan registros en una tabla hija que apunten a registros inexistentes en la tabla padre. Por lo tanto, la operación de borrado se bloquea o se aplica una acción en cascada.
```

### 8 — Tipos de Relaciones

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "basico"
  tags: ["relaciones", "cardinalidad"]

enunciado: "Considerando un sistema de gestión de una biblioteca: Un 'Libro' pertenece a un único 'Autor', pero un 'Autor' puede haber escrito muchos 'Libros'. ¿Qué tipo de relación predomina desde la perspectiva de la tabla 'Libros' hacia la tabla 'Autores'?"

opciones_explicitas: ["Uno a Uno", "Uno a Muchos", "Muchos a Muchos"]
respuesta: "Uno a Muchos"
tipo: mc

explicacion: |
  En una relación de uno a muchos (1:N), la clave foránea se coloca en la tabla del lado "muchos" (Libros) para apuntar al lado "uno" (Autores).
```

### 9 — Proceso de Normalización

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "avanzado"
  tags: ["diseño", "pasos", "normalizacion"]

variables:
  pasos_orden: [["Identificar entidades", "Definir claves primarias", "Establecer relaciones mediante claves foráneas"]]

enunciado: "Para diseñar correctamente un esquema relacional desde un modelo conceptual, se deben seguir estos pasos en orden lógico:"

opciones_explicitas: ["Identificar entidades", "Definir claves primarias", "Establecer relaciones mediante claves foráneas"]
respuesta_orden: ["Identificar entidades", "Definir claves primarias", "Establecer relaciones mediante claves foráneas"]
tipo: ordenar

explicacion: |
  Primero se definen los objetos del mundo real (entidades), luego cómo se identifican unívocamente (claves primarias) y finalmente cómo se conectan entre sí (claves foráneas).
```

### 10 — Cálculo de Cardinalidad

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["diseño", "dbms"]

variables:
  datos: [["Estudiantes", "Cursos", 10, 5], ["Usuarios", "Roles", 100, 5]]
  idx: uno_de([0, 1])

enunciado: "En un sistema donde cada {datos[idx][0]} puede inscribirse en múltiples {datos[idx][1]}, y cada {datos[idx][1]} puede tener múltiples {datos[idx][0]}, se requiere una tabla intermedia para resolver la relación. Si tenemos {datos[idx][0]} registros de origen y {datos[idx][1]} de destino, la tabla intermedia gestionará la relación de tipo ___."

respuestas_validas:
  - "Muchos a Muchos"
respuesta: "Muchos a Muchos"
tipo: completar

explicacion: |
  Las relaciones de muchos a muchos (N:M) no se pueden implementar directamente con una sola clave foránea; requieren una tabla de unión (junction table) que contenga las claves primarias de ambas tablas.
```

### 11 — La función de la clave foránea

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "basico"
  tags: ["sql", "bases_de_datos", "teoria"]

respuesta: "integridad referencial"
tipo: completar
respuestas_validas:
  - "integridad referencial"
  - "integridad de datos"
  - "integridad referencial"

enunciado: "La restricción de clave foránea (Foreign Key) tiene como objetivo principal garantizar la ___ entre las tablas de una base de datos relacional."

explicacion: |
  La integridad referencial asegura que un valor en una columna de una tabla (la clave foránea) debe coincidir con un valor existente en la clave primaria de otra tabla, evitando datos huérfanos.
```

### 12 — Confusión entre PK y FK

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["sql", "conceptos"]

respuesta: falso
tipo: vf

enunciado: "¿Es posible que una clave foránea (Foreign Key) contenga valores que no existen en la tabla de referencia (la tabla a la que apunta)?"

explicacion: |
  Falso. Por definición, la restricción de clave foránea impide la inserción de valores que no existan en la clave primaria de la tabla relacionada, manteniendo la coherencia de los datos.
```

### 13 — El error del borrado en cascada

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["sql", "cascada", "errores"]

variables:
  escenario: uno_de([["Se borra un registro en la tabla 'Clientes' que tiene pedidos asociados", "error"], ["Se intenta insertar un 'Pedido' con un 'Cliente_ID' que no existe", "error"], ["Se intenta borrar un 'Producto' que está siendo referenciado por una 'Venta'", "error"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["error", "error", "error"]

enunciado: "Si una base de datos tiene activada la restricción de integridad referencial estándar (sin ON DELETE CASCADE), ¿qué sucede en el caso: {escenario[0]}?"

explicacion: |
  El sistema de gestión de base de datos (DBMS) bloqueará la operación y lanzará un error para evitar que queden registros de 'Pedidos' sin un 'Cliente' asociado.
```

### 14 — Orden lógico de creación de tablas

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["sql", "orden_ddl"]

respuesta_orden: ["Clientes", "Pedidos", "Detalles_Pedido"]
tipo: ordenar

opciones_explicitas: ["Pedidos", "Clientes", "Detalles_Pedido"]

enunciado: "Para evitar errores de 'objeto no encontrado' al ejecutar un script SQL de creación de tablas con claves foráneas, ¿cuál es el orden correcto de creación?"

explicacion: |
  Primero se deben crear las tablas que no dependen de nadie (tablas maestras o de referencia), luego las que dependen de ellas, y finalmente las tablas de detalle que dependen de las relaciones intermedias.
```

### 15 — El valor nulo en claves foráneas

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "avanzado"
  tags: ["sql", "nulls"]

respuesta: verdadero
tipo: vf

enunciado: "¿Puede una clave foránea contener valores NULL si la columna no tiene una restricción NOT NULL?"

explicacion: |
  Verdadero. Un valor NULL en una clave foránea significa que la relación es opcional; es decir, el registro existe pero no está vinculado actualmente a ningún registro de la tabla de referencia.
```

### 16 — Diferencia entre PK y FK

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

### 17 — Integridad Referencial

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

### 18 — Efectos de la eliminación (ON DELETE)

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "avanzado"
  tags: ["sql", "integridad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["RESTRICT", "Impide la eliminación del registro padre si tiene hijos"], ["CASCADE", "Elimina automáticamente los registros hijos al eliminar el padre"]]

respuesta: escenarios[escenario_idx][0]
tipo: "mc"
opciones_explicitas: ["RESTRICT", "CASCADE", "SET NULL", "NO ACTION"]

enunciado: "Si configuramos una relación con la acción '{escenarios[escenario_idx][0]}', el comportamiento resultante es: ___"

explicacion: |
  La opción elegida define cómo reacciona la base de datos ante la pérdida de un registro padre. {escenarios[escenario_idx][0]} es el comportamiento específico seleccionado para este caso.
```

### 19 — Flujo de creación de esquema

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "basico"
  tags: ["diseño", "modelado"]

respuesta_orden: ["Definir entidades", "Establecer atributos", "Identificar claves primarias", "Establecer claves foráneas"]
tipo: "ordenar"
opciones_explicitas: ["Definir entidades", "Establecer atributos", "Identificar claves primarias", "Establecer claves foráneas"]

enunciado: "Ordena los pasos lógicos para diseñar un modelo relacional que incluya relaciones entre tablas:"

explicacion: |
  Primero se definen los objetos (entidades), luego sus propiedades (atributos), después cómo se identifican (PK) y finalmente cómo se conectan (FK).
```

### 20 — El concepto de Nulidad

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["sql", "constraints"]

respuesta: "nulo"
tipo: "completar"
respuestas_validas:
  - "nulo"
  - "NULL"

enunciado: "A diferencia de una clave primaria que nunca puede contener valores ___, una clave foránea puede permitir valores ___ si la relación es opcional."

explicacion: |
  La clave primaria (PK) tiene una restricción de 'NOT NULL' implícita para garantizar la identidad, mientras que la clave foránea (FK) puede ser nula si la relación es opcional (por ejemplo, un empleado que aún no tiene asignado un departamento).
```

### 21 — Identificación de Clave Foránea

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "basico"
  tags: ["dbms", "sql", "relaciones"]

variables:
  escenario: uno_de([["Tabla_Clientes(id_cliente, nombre) y Tabla_Pedidos(id_pedido, id_cliente)", "id_cliente"], ["Tabla_Autores(id_autor, nombre) y Tabla_Libros(id_libro, id_autor)", "id_autor"], ["Tabla_Estudiantes(id_estudiante, nombre) y Tabla_Inscripciones(id_inscripcion, id_estudiante)", "id_estudiante"]])

enunciado: "En el escenario de {escenario}, ¿cuál es el nombre del campo que actúa como clave foránea en la segunda tabla para establecer la relación?"

opciones_explicitas: ["id_pedido", "id_cliente", "nombre", "id_autor", "id_estudiante"]
respuesta: escenario[1]
tipo: mc

explicacion: |
  La clave foránea es el campo en una tabla que hace referencia a la clave primaria de otra tabla, permitiendo la relación entre ambas.
```

### 22 — Integridad Referencial

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["integridad", "dbms"]

enunciado: "Si intentamos eliminar un registro de una tabla 'Padre' que posee una clave primaria siendo referenciada por una clave foránea en una tabla 'Hija', y la restricción de integridad está activa, la operación será rechazada para evitar datos huérfanos."

respuesta: falso
tipo: vf

explicacion: |
  Correcto. La integridad referencial impide la eliminación de registros que dejarían a las filas de la tabla hija con una referencia inválida.
```

### 23 — Completar Relación

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["sql", "conceptos"]

variables:
  contexto: uno_de([["Un sistema de ventas donde un Cliente realiza muchos Pedidos", "uno a muchos"], ["Un sistema de gestión donde un Estudiante se inscribe en muchas Materias y una Materia tiene muchos Estudiantes", "muchos a muchos"], ["Un sistema de países donde un Continente tiene muchos Países y un País pertenece a un solo Continente", "uno a muchos"]])

enunciado: "En el contexto de {contexto}, el tipo de relación predominante es ___."

respuestas_validas:
  - "uno a muchos"
  - "muchos a muchos"
  - "uno a uno"
respuesta: contexto[1]
tipo: completar

explicacion: |
  El tipo de relación se define por la cardinalidad entre las entidades involucradas.
```

### 24 — Ordenar Proceso de Normalización

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "avanzado"
  tags: ["diseño", "dbms"]

opciones_explicitas: ["Identificar entidades", "Definir atributos", "Establecer relaciones y claves", "Normalizar tablas"]
respuesta_orden: ["Identificar entidades", "Definir atributos", "Establecer relaciones y claves", "Normalizar tablas"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para el diseño de un modelo relacional de base de datos:"

explicacion: |
  El diseño comienza con la identificación de las entidades del mundo real, luego sus propiedades, la conexión entre ellas mediante claves y finalmente el proceso de normalización.
```

### 25 — Cálculo de Cardinalidad (Escenario)

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["lógica", "dbms"]

variables:
  caso: uno_de([["Una tabla 'Departamentos' y una tabla 'Empleados' (cada empleado pertenece a un departamento)", "1"], ["Una tabla 'Libros' y una tabla 'Autores' (cada libro tiene un único autor)", "1"]])

enunciado: "Considerando el caso: {caso}. Si aplicamos una restricción de integridad donde cada registro de la tabla dependiente debe tener exactamente ___ registro relacionado en la tabla principal, estamos ante una relación 1:1 o 1:N dependiendo del sentido."

respuestas_validas:
  - "1"
respuesta: "1"
tipo: completar

explicacion: |
  La clave foránea asegura que el valor en la tabla hija exista en la tabla padre, garantizando la existencia del registro relacionado.
```
