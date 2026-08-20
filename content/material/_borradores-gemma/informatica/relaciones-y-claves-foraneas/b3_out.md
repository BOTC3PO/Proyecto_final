### 1 — La función de la clave foránea
```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "basico"
  tags: ["sql", "bases_de_datos", "teoria"]

respuesta: "integridad referencial"
tipo: completar
respuestas_validas: ["integridad referencial", "integridad de datos", "integridad referencial"]

enunciado: "La restricción de clave foránea (Foreign Key) tiene como objetivo principal garantizar la ___ entre las tablas de una base de datos relacional."

explicacion: |
  La integridad referencial asegura que un valor en una columna de una tabla (la clave foránea) debe coincidir con un valor existente en la clave primaria de otra tabla, evitando datos huérfanos.
```

### 2 — Confusión entre PK y FK
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

### 3 — El error del borrado en cascada
```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["sql", "cascada", "errores"]

variables:
  escenario: uno_de([
    ["Se borra un registro en la tabla 'Clientes' que tiene pedidos asociados", "error"],
    ["Se intenta insertar un 'Pedido' con un 'Cliente_ID' que no existe", "error"],
    ["Se intenta borrar un 'Producto' que está siendo referenciado por una 'Venta'", "error"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["escenario[0]", "escenario[1]", "escenario[2]"]

enunciado: "Si una base de datos tiene activada la restricción de integridad referencial estándar (sin ON DELETE CASCADE), ¿qué sucede en el caso: {escenario[0]}?"

explicacion: |
  El sistema de gestión de base de datos (DBMS) bloqueará la operación y lanzará un error para evitar que queden registros de 'Pedidos' sin un 'Cliente' asociado.
```

### 4 — Orden lógico de creación de tablas
```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["sql", "orden_ddl"]

respuesta: ["Clientes", "Pedidos", "Detalles_Pedido"]
tipo: ordenar

opciones_explicitas: ["Pedidos", "Clientes", "Detalles_Pedido"]

enunciado: "Para evitar errores de 'objeto no encontrado' al ejecutar un script SQL de creación de tablas con claves foráneas, ¿cuál es el orden correcto de creación?"

explicacion: |
  Primero se deben crear las tablas que no dependen de nadie (tablas maestras o de referencia), luego las que dependen de ellas, y finalmente las tablas de detalle que dependen de las relaciones intermedias.
```

### 5 — El valor nulo en claves foráneas
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