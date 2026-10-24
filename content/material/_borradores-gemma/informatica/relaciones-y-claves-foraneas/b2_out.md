### 1 — Identificación de Clave Foránea
```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "basico"
  tags: ["sql", "dbms", "relaciones"]

variables:
  idx: uno_de([0, 1])
  escenario: uno_de([["Clientes", "Pedidos", "cliente_id"], ["Autores", "Libros", "autor_id"]])

enunciado: "En un modelo relacional, si tenemos una tabla de {escenario[0]} y una tabla de {escenario[1]}, la columna que permite vincular ambas tablas y hace referencia a la clave primaria de la primera tabla es la clave foránea, cuyo nombre en la tabla secundaria es ___."

respuestas_validas: ["cliente_id", "autor_id"]
respuesta: escenario[idx][2]
tipo: completar

explicacion: |
  La clave foránea (Foreign Key) es un campo en una tabla que identifica un registro único en otra tabla, estableciendo así la relación entre ambas.
```

### 2 — Integridad Referencial
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

### 3 — Tipos de Relaciones
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

### 4 — Proceso de Normalización
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
respuesta: ["Identificar entidades", "Definir claves primarias", "Establecer relaciones mediante claves foráneas"]
tipo: ordenar

explicacion: |
  Primero se definen los objetos del mundo real (entidades), luego cómo se identifican unívocamente (claves primarias) y finalmente cómo se conectan entre sí (claves foráneas).
```

### 5 — Cálculo de Cardinalidad
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

respuestas_validas: ["Muchos a Muchos"]
respuesta: "Muchos a Muchos"
tipo: completar

explicacion: |
  Las relaciones de muchos a muchos (N:M) no se pueden implementar directamente con una sola clave foránea; requieren una tabla de unión (junction table) que contenga las claves primarias de ambas tablas.
```