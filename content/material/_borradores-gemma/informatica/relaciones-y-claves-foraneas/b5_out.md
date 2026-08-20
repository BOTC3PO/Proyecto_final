### 1 — Identificación de Clave Foránea
```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "basico"
  tags: ["dbms", "sql", "relaciones"]

variables:
  escenario: uno_de([
    ["Tabla_Clientes(id_cliente, nombre) y Tabla_Pedidos(id_pedido, id_cliente)", "id_cliente"],
    ["Tabla_Autores(id_autor, nombre) y Tabla_Libros(id_libro, id_autor)", "id_autor"],
    ["Tabla_Estudiantes(id_estudiante, nombre) y Tabla_Inscripciones(id_inscripcion, id_estudiante)", "id_estudiante"]
  ])

enunciado: "En el escenario de {escenario}, ¿cuál es el nombre del campo que actúa como clave foránea en la segunda tabla para establecer la relación?"

opciones_explicitas: ["id_pedido", "id_cliente", "nombre", "id_autor", "id_estudiante"]
respuesta: escenario[1]
tipo: mc

explicacion: |
  La clave foránea es el campo en una tabla que hace referencia a la clave primaria de otra tabla, permitiendo la relación entre ambas.
```

### 2 — Integridad Referencial
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

### 3 — Completar Relación
```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["sql", "conceptos"]

variables:
  contexto: uno_de([
    ["Un sistema de ventas donde un Cliente realiza muchos Pedidos", "uno a muchos"],
    ["Un sistema de gestión donde un Estudiante se inscribe en muchas Materias y una Materia tiene muchos Estudiantes", "muchos a muchos"],
    ["Un sistema de países donde un Continente tiene muchos Países y un País pertenece a un solo Continente", "uno a muchos"]
  ])

enunciado: "En el contexto de {contexto}, el tipo de relación predominante es ___."

respuestas_validas: ["uno a muchos", "muchos a muchos", "uno a uno"]
respuesta: contexto[1]
tipo: completar

explicacion: |
  El tipo de relación se define por la cardinalidad entre las entidades involucradas.
```

### 4 — Ordenar Proceso de Normalización
```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "avanzado"
  tags: ["diseño", "dbms"]

opciones_explicitas: ["Identificar entidades", "Definir atributos", "Establecer relaciones y claves", "Normalizar tablas"]
respuesta: ["Identificar entidades", "Definir atributos", "Establecer relaciones y claves", "Normalizar tablas"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para el diseño de un modelo relacional de base de datos:"

explicacion: |
  El diseño comienza con la identificación de las entidades del mundo real, luego sus propiedades, la conexión entre ellas mediante claves y finalmente el proceso de normalización.
```

### 5 — Cálculo de Cardinalidad (Escenario)
```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["lógica", "dbms"]

variables:
  caso: uno_de([
    ["Una tabla 'Departamentos' y una tabla 'Empleados' (cada empleado pertenece a un departamento)", "1"],
    ["Una tabla 'Libros' y una tabla 'Autores' (cada libro tiene un único autor)", "1"]
  ])

enunciado: "Considerando el caso: {caso}. Si aplicamos una restricción de integridad donde cada registro de la tabla dependiente debe tener exactamente ___ registro relacionado en la tabla principal, estamos ante una relación 1:1 o 1:N dependiendo del sentido."

respuestas_validas: ["1"]
respuesta: "1"
tipo: completar

explicacion: |
  La clave foránea asegura que el valor en la tabla hija exista en la tabla padre, garantizando la existencia del registro relacionado.
```