# Examen jefe — [PENDIENTE #824]

> Logro #824. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **120 preguntas totales** en 5/5 secciones.

---

## Sección: relaciones-y-claves-foraneas (25 preguntas)

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

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["integridad", "sql", "conceptos"]

enunciado: "Si intentamos eliminar un registro de la tabla 'Clientes' que tiene un ID asociado a registros existentes en la tabla 'Pedidos', y la restricción de integridad referencial está activa, la base de datos impedirá la acción para evitar datos huérfanos."

respuesta: verdadero
tipo: vf

explicacion: |
  La integridad referencial garantiza que no existan registros en una tabla hija que apunten a registros inexistentes en la tabla padre. Por lo tanto, la operación de borrado se bloquea o se aplica una acción en cascada.
```

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

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "avanzado"
  tags: ["diseño", "pasos", "normalizacion"]

enunciado: "Para diseñar correctamente un esquema relacional desde un modelo conceptual, se deben seguir estos pasos en orden lógico:"

opciones_explicitas: ["Identificar entidades", "Definir claves primarias", "Establecer relaciones mediante claves foráneas"]
respuesta_orden: ["Identificar entidades", "Definir claves primarias", "Establecer relaciones mediante claves foráneas"]
tipo: ordenar

explicacion: |
  Primero se definen los objetos del mundo real (entidades), luego cómo se identifican unívocamente (claves primarias) y finalmente cómo se conectan entre sí (claves foráneas).
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["diseño", "dbms"]

variables:
  datos: [["Estudiantes", "Cursos", 10, 5], ["Usuarios", "Roles", 100, 5]]
  idx: uno_de([0, 1])

enunciado: "En un sistema donde cada {datos[idx][0]} puede inscribirse en múltiples {datos[idx][1]}, y cada {datos[idx][1]} puede tener múltiples {datos[idx][0]}, se requiere una tabla intermedia para resolver la relación. Si tenemos {datos[idx][2]} registros de origen y {datos[idx][3]} de destino, la tabla intermedia gestionará la relación de tipo ___."

respuestas_validas:
  - "Muchos a Muchos"
respuesta: "Muchos a Muchos"
tipo: completar

explicacion: |
  Las relaciones de muchos a muchos (N:M) no se pueden implementar directamente con una sola clave foránea; requieren una tabla de unión (junction table) que contenga las claves primarias de ambas tablas.
```

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

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["sql", "cascada", "errores"]

variables:
  escenario: uno_de(["Se borra un registro en la tabla 'Clientes' que tiene pedidos asociados", "Se intenta insertar un 'Pedido' con un 'Cliente_ID' que no existe", "Se intenta borrar un 'Producto' que está siendo referenciado por una 'Venta'"])

respuesta: "error"
tipo: completar
respuestas_validas:
  - "error"

enunciado: "Si una base de datos tiene activada la restricción de integridad referencial estándar (sin ON DELETE CASCADE), ¿qué sucede en el caso: {escenario}? (responde con una palabra: error o éxito)"

explicacion: |
  El sistema de gestión de base de datos (DBMS) bloqueará la operación y lanzará un error para evitar que queden registros de 'Pedidos' sin un 'Cliente' asociado.
```

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

enunciado: "Si el comportamiento deseado ante el borrado del registro padre es: '{escenarios[escenario_idx][1]}', la acción de configuración adecuada es: ___"

explicacion: |
  La opción elegida define cómo reacciona la base de datos ante la pérdida de un registro padre. {escenarios[escenario_idx][0]} es el comportamiento específico seleccionado para este caso.
```

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

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "basico"
  tags: ["dbms", "sql", "relaciones"]

variables:
  escenario: uno_de([["Tabla_Clientes(id_cliente, nombre) y Tabla_Pedidos(id_pedido, id_cliente)", "id_cliente"], ["Tabla_Autores(id_autor, nombre) y Tabla_Libros(id_libro, id_autor)", "id_autor"], ["Tabla_Estudiantes(id_estudiante, nombre) y Tabla_Inscripciones(id_inscripcion, id_estudiante)", "id_estudiante"]])

enunciado: "En el escenario de {escenario[0]}, ¿cuál es el nombre del campo que actúa como clave foránea en la segunda tabla para establecer la relación?"

opciones_explicitas: ["id_pedido", "id_cliente", "nombre", "id_autor", "id_estudiante"]
respuesta: escenario[1]
tipo: mc

explicacion: |
  La clave foránea es el campo en una tabla que hace referencia a la clave primaria de otra tabla, permitiendo la relación entre ambas.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["integridad", "dbms"]

enunciado: "Si intentamos eliminar un registro de una tabla 'Padre' que posee una clave primaria siendo referenciada por una clave foránea en una tabla 'Hija', y la restricción de integridad está activa, la operación será rechazada para evitar datos huérfanos."

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. La integridad referencial impide la eliminación de registros que dejarían a las filas de la tabla hija con una referencia inválida.
```

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

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["lógica", "dbms"]

variables:
  caso: uno_de([["Una tabla 'Departamentos' y una tabla 'Empleados' (cada empleado pertenece a un departamento)", "1"], ["Una tabla 'Libros' y una tabla 'Autores' (cada libro tiene un único autor)", "1"]])

enunciado: "Considerando el caso: {caso[0]}. Si aplicamos una restricción de integridad donde cada registro de la tabla dependiente debe tener exactamente ___ registro relacionado en la tabla principal, estamos ante una relación 1:1 o 1:N dependiendo del sentido."

respuestas_validas:
  - "1"
respuesta: "1"
tipo: completar

explicacion: |
  La clave foránea asegura que el valor en la tabla hija exista en la tabla padre, garantizando la existencia del registro relacionado.
```

## Sección: procesos-tecnicos-artesanales-e-industriales (22 preguntas)

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "basico"
  tags: ["definicion"]

variables:
  n: uno_de([1, 1])

respuesta: "un conjunto de pasos organizados para transformar materias primas en algo útil"
tipo: mc
opciones_explicitas: ["un conjunto de pasos organizados para transformar materias primas en algo útil", "sólo el resultado final de una fábrica", "un tipo de máquina específica"]

enunciado: "Un proceso técnico es, en esencia..."

explicacion: |
  Tanto el proceso artesanal como el industrial son formas organizadas
  de transformar materias primas en algo útil, aunque de maneras
  distintas.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "basico"
  tags: ["proceso artesanal"]

variables:
  n: uno_de([1, 1])

respuesta: "la habilidad manual y el conocimiento del oficio"
tipo: mc
opciones_explicitas: ["la habilidad manual y el conocimiento del oficio", "la velocidad de una máquina automatizada", "la estandarización de protocolos"]

enunciado: "En el proceso artesanal, el motor principal de la producción es..."

explicacion: |
  La intervención directa y constante del trabajador, con su habilidad
  y conocimiento específico, es lo que define al proceso artesanal.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "intermedio"
  tags: ["limite artesanal"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El proceso artesanal tiene como límite natural el tiempo humano, ya que cada pieza requiere trabajo manual delicado."

explicacion: |
  No es posible producir miles de unidades idénticas en un día si cada
  una necesita horas de trabajo manual individual.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "basico"
  tags: ["proceso industrial"]

variables:
  n: uno_de([1, 1])

respuesta: "eficiencia, estandarización y producción en masa"
tipo: mc
opciones_explicitas: ["eficiencia, estandarización y producción en masa", "personalización única de cada pieza", "dependencia exclusiva del trabajo manual"]

enunciado: "El proceso industrial prioriza..."

explicacion: |
  Usa maquinaria y algoritmos para repetir operaciones con precisión y
  velocidad, reduciendo el costo unitario a costa de la unicidad.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "intermedio"
  tags: ["estandarizacion digital"]

variables:
  elemento: uno_de(["protocolos", "formatos de archivo", "lenguajes de programación universales"])

respuesta: verdadero
tipo: vf

enunciado: "En el mundo digital, la estandarización se manifiesta en \"{elemento}\", permitiendo que un archivo creado en una ciudad se abra en otra sin problemas."

explicacion: |
  Así como antes las piezas mecánicas eran intercambiables, hoy los
  protocolos y formatos digitales cumplen esa misma función de
  compatibilidad universal.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "intermedio"
  tags: ["ejemplo"]

variables:
  n: uno_de([1, 1])

respuesta: "el correo electrónico"
tipo: mc
opciones_explicitas: ["redactar mil cartas a mano", "el correo electrónico", "ninguno de los dos métodos"]

enunciado: "Para enviar un mensaje a mil personas de forma eficiente (lógica industrial), conviene usar..."

explicacion: |
  Redactar mil cartas a mano sería el enfoque artesanal, mucho menos
  eficiente para esa escala; el correo electrónico es la solución
  industrial/escalable.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "avanzado"
  tags: ["desafios"]

variables:
  n: uno_de([1, 1])

respuesta: "la pérdida de la \"huella humana\" y la dependencia de sistemas rígidos"
tipo: mc
opciones_explicitas: ["la pérdida de la \"huella humana\" y la dependencia de sistemas rígidos", "el aumento del costo unitario de producción", "la imposibilidad de automatizar tareas"]

enunciado: "La industrialización extrema de la informática (automatización con scripts y algoritmos) plantea como desafío..."

explicacion: |
  Democratiza el acceso a la información, pero también implica perder
  unicidad y depender de sistemas que fallan si no se entienden sus
  reglas internas.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "basico"
  tags: ["ejemplo argentino"]

variables:
  n: uno_de([1, 1])

respuesta: "artesanal"
tipo: mc
opciones_explicitas: ["artesanal", "industrial"]

enunciado: "La panadería tradicional donde el panadero amasa cada pieza a mano, ajustando el agua según la humedad del día, es un ejemplo de proceso..."

explicacion: |
  Es flexible, depende del experto y tiene variaciones naturales en cada
  producto: características típicas del proceso artesanal.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "basico"
  tags: ["ejemplo argentino"]

variables:
  n: uno_de([1, 1])

respuesta: "industrial"
tipo: mc
opciones_explicitas: ["artesanal", "industrial"]

enunciado: "La fábrica de galletitas donde robots y cintas transportadoras aseguran que cada galletita pese exactamente lo mismo es un ejemplo de proceso..."

explicacion: |
  La estandarización extrema (mismo peso y sabor en millones de
  unidades) es característica del proceso industrial.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "intermedio"
  tags: ["ejemplo informatico"]

variables:
  n: uno_de([1, 1])

respuesta: "artesanal/prototipo"
tipo: mc
opciones_explicitas: ["artesanal/prototipo", "industrial", "ninguno de los dos"]

enunciado: "Escribir código personalizado para resolver un problema específico de una empresa es, en la lógica de esta teoría, un proceso..."

explicacion: |
  Es único y adaptable a esa empresa en particular, a diferencia de un
  sistema estandarizado y masivo.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "intermedio"
  tags: ["ejemplo informatico"]

variables:
  n: uno_de([1, 1])

respuesta: "rígido, estandarizado y obligatorio para millones de usuarios"
tipo: mc
opciones_explicitas: ["rígido, estandarizado y obligatorio para millones de usuarios", "único y personalizable para cada empresa", "opcional y sin ninguna regla fija"]

enunciado: "El sistema de facturación electrónica que exige la AFIP es, según la teoría, un ejemplo de software..."

explicacion: |
  Es un sistema de software masivo: rígido, estandarizado y obligatorio,
  a diferencia de una solución artesanal/personalizada.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "basico"
  tags: ["medios tecnicos"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Tanto el proceso artesanal como el industrial son considerados \"medios técnicos\" que extienden las capacidades humanas."

explicacion: |
  Ambos son formas de extender lo que el ser humano puede producir, sólo
  que gestionan tiempo, calidad y escala de manera diferente.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "avanzado"
  tags: ["diferencia clave"]

variables:
  n: uno_de([1, 1])

respuesta: "en cómo se gestiona el tiempo, la calidad y la escala de producción"
tipo: mc
opciones_explicitas: ["en el resultado final obtenido", "en cómo se gestiona el tiempo, la calidad y la escala de producción", "en el país donde se fabrica el producto"]

enunciado: "Según la teoría, la diferencia clave entre proceso artesanal e industrial no está en el resultado final, sino..."

explicacion: |
  Ambos pueden llegar a un producto similar; lo que cambia es la forma
  de gestionar tiempo, calidad y escala durante la producción.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "intermedio"
  tags: ["personalizacion vs escala"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El proceso industrial permite el mismo grado de personalización pieza por pieza que el proceso artesanal."

explicacion: |
  El proceso industrial gana en escala y costo unitario, pero sacrifica
  la unicidad y personalización propia de lo artesanal.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "basico"
  tags: ["estandarizacion pre-digital"]

variables:
  n: uno_de([1, 1])

respuesta: "las piezas mecánicas eran intercambiables"
tipo: mc
opciones_explicitas: ["las piezas mecánicas eran intercambiables", "cada máquina tenía piezas únicas", "no existía ningún tipo de estándar"]

enunciado: "En la era pre-digital, la estandarización industrial significaba principalmente que..."

explicacion: |
  La intercambiabilidad de piezas mecánicas fue la base de la
  estandarización industrial antes de la era digital.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "intermedio"
  tags: ["decision"]

variables:
  n: uno_de([1, 1])

respuesta: "equilibrar eficiencia con calidad y adaptabilidad"
tipo: mc
opciones_explicitas: ["equilibrar eficiencia con calidad y adaptabilidad", "elegir siempre el proceso industrial sin excepción", "elegir siempre el proceso artesanal sin excepción"]

enunciado: "Comprender la dualidad artesanal/industrial ayuda, según la teoría, a..."

explicacion: |
  No se trata de que uno sea siempre mejor: la clave es decidir cuándo
  personalizar y cuándo adoptar un estándar industrial, equilibrando
  eficiencia, calidad y adaptabilidad.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "basico"
  tags: ["costo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El proceso industrial reduce el costo unitario de producción respecto al proceso artesanal."

explicacion: |
  Al producir en masa con maquinaria y algoritmos, el costo por unidad
  baja, aunque se pierda la unicidad de cada objeto.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "avanzado"
  tags: ["automatizacion"]

variables:
  n: uno_de([1, 1])

respuesta: "scripts y algoritmos"
tipo: completar

enunciado: "En informática, lo que antes era un trabajo intelectual único hoy se automatiza mediante ___."

respuestas_validas:
  - "scripts y algoritmos"
  - "algoritmos y scripts"

explicacion: |
  Esta automatización democratiza el acceso a la información, pero
  también plantea el desafío de la pérdida de "huella humana" en la
  creación de contenido.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "intermedio"
  tags: ["software y hardware"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En informática, el software y el hardware siguen lógicas similares a la distinción entre proceso artesanal e industrial."

explicacion: |
  Un código personalizado (artesanal) y un sistema masivo estandarizado
  (industrial) reflejan la misma dualidad vista en la producción física.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "basico"
  tags: ["escalabilidad"]

variables:
  n: uno_de([1, 1])

respuesta: "su capacidad de escalar"
tipo: mc
opciones_explicitas: ["su capacidad de escalar", "su bajo nivel de estandarización", "su dependencia exclusiva del trabajo manual"]

enunciado: "La principal ventaja del modelo industrial, según la teoría, es..."

explicacion: |
  Puede repetir operaciones con precisión y velocidad para producir a
  gran escala, algo que el proceso artesanal no logra por su límite de
  tiempo humano.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "avanzado"
  tags: ["democratizacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La automatización informática democratiza el acceso a la información, pero también plantea desafíos sobre la pérdida de la \"huella humana\" en la creación de contenido."

explicacion: |
  Es una tensión real señalada en la teoría: más acceso y eficiencia,
  pero menos marca personal en lo producido.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "intermedio"
  tags: ["conceptos clave"]

variables:
  n: uno_de([1, 1])

respuesta: "artesanal e industrial"
tipo: mc
opciones_explicitas: ["artesanal e industrial", "digital y analógico", "público y privado"]

enunciado: "Las dos formas fundamentales de producir objetos o servicios que compara la teoría son el proceso..."

explicacion: |
  Artesanal e industrial son los dos "medios técnicos" cuya diferencia
  central se explica en toda la teoría.
```

## Sección: requisitos-funcionales-no-funcionales (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "requisitos_funcionales_vs_no_funcionales"
  nivel: "basico"
  tags: ["ingenieria_software", "requisitos"]

tipo: mc
opciones_explicitas: ["Describen las funciones que el sistema debe ejecutar", "Describen las propiedades y restricciones del sistema", "Describen la interfaz visual del usuario", "Describen el lenguaje de programación utilizado"]

enunciado: "Los requisitos funcionales se definen como aquellos que..."

respuesta: "Describen las funciones que el sistema debe ejecutar"

explicacion: |
  Los requisitos funcionales especifican el comportamiento del sistema (qué hace), mientras que los no funcionales especifican atributos de calidad (cómo lo hace).
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_funcionales_vs_no_funcionales"
  nivel: "basico"
  tags: ["requisitos_no_funcionales"]

tipo: vf

enunciado: "El tiempo de respuesta de una consulta en una base de datos es un ejemplo de un requisito no funcional."

respuesta: verdadero

explicacion: |
  Correcto. El rendimiento (tiempo de respuesta) es una característica de calidad, por lo tanto, es un requisito no funcional.
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_funcionales_vs_no_funcionales"
  nivel: "intermedio"
  tags: ["clasificacion"]

variables:
  escenarios: [["Permitir el registro de nuevos usuarios", "La contraseña debe estar encriptada"], ["Generar un reporte de ventas", "El sistema debe estar disponible el 99% del tiempo"]]
  idx: uno_de([0, 1])
  escenario_actual: escenarios[idx]

enunciado: "Dado el siguiente par de requisitos: {escenario_actual[0]} y {escenario_actual[1]}, el segundo requisito es de tipo:"

tipo: mc
opciones_explicitas: ["Funcional", "No Funcional"]

respuesta: "No Funcional"

explicacion: |
  El primer elemento describe una acción (funcional) y el segundo describe una restricción de calidad o disponibilidad (no funcional).
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_funcionales_vs_no_funcionales"
  nivel: "basico"
  tags: ["terminologia"]

tipo: completar
respuestas_validas:
  - "usabilidad"
  - "seguridad"
  - "rendimiento"

enunciado: "Si un cliente solicita que el sistema sea fácil de aprender para nuevos usuarios, está exigiendo un requisito de ___."

respuesta: "usabilidad"

explicacion: |
  La facilidad de uso y el aprendizaje son pilares de la usabilidad, la cual es un requisito no funcional.
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_funcionales_vs_no_funcionales"
  nivel: "intermedio"
  tags: ["ingenieria_requisitos"]

tipo: ordenar
opciones_explicitas: ["Elicitación", "Análisis", "Especificación", "Validación"]

enunciado: "Ordene las etapas del proceso de ingeniería de requisitos desde el inicio hasta el final:"

respuesta_orden: ["Elicitación", "Análisis", "Especificación", "Validación"]

explicacion: |
  El proceso comienza con la obtención de información (Elicitación), luego se procesa (Análisis), se documenta (Especificación) y finalmente se revisa con el cliente (Validación).
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "basico"
  tags: ["requisitos", "funcionales", "no_funcionales"]

tipo: mc
opciones_explicitas: ["Requisito Funcional", "Requisito No Funcional"]

enunciado: "Un sistema de gestión de biblioteca debe permitir al usuario buscar libros por título o autor. Este requerimiento se clasifica como un ___."

respuesta: "Requisito Funcional"

explicacion: |
  Los requisitos funcionales definen las acciones que el sistema debe realizar (el "qué"). En este caso, la capacidad de búsqueda es una función directa del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "intermedio"
  tags: ["rendimiento", "no_funcionales"]

variables:
  escenario: uno_de([["El sistema debe procesar un pago en menos de 2 segundos.", "Requisito No Funcional"], ["La base de datos debe estar disponible el 99.9% del tiempo.", "Requisito No Funcional"], ["Las contraseñas deben estar encriptadas con AES-256.", "Requisito No Funcional"]])

tipo: mc
opciones_explicitas: ["Requisito Funcional", "Requisito No Funcional"]

enunciado: "Analizando el siguiente caso: '{escenario[0]}'. ¿A qué categoría pertenece?"

respuesta: "Requisito No Funcional"

explicacion: |
  El enunciado describe una restricción sobre la calidad o el rendimiento del servicio (cuánto tarda), lo cual es un requisito no funcional.
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "basico"
  tags: ["definiciones"]

tipo: completar
respuestas_validas:
  - "usabilidad"
  - "seguridad"
  - "rendimiento"

enunciado: "Si un cliente solicita que la interfaz sea intuitiva y fácil de aprender para personas mayores, está definiendo un requisito de ___."

respuesta: "usabilidad"

explicacion: |
  La facilidad de uso y la experiencia de usuario (UX) son atributos de calidad, por lo tanto, son requisitos no funcionales de usabilidad.
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf

enunciado: "Un requisito funcional describe 'cómo' debe comportarse el sistema (por ejemplo, la velocidad de respuesta), mientras que un requisito no funcional describe 'qué' debe hacer el sistema."

respuesta: falso

explicacion: |
  Es exactamente al revés: los funcionales describen el "qué" (la acción) y los no funcionales describen el "cómo" (las propiedades o restricciones de calidad).
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "intermedio"
  tags: ["ciclo_vida", "ingenieria"]

tipo: ordenar
opciones_explicitas: ["Elicitación (recolección)", "Análisis de requisitos", "Especificación", "Validación"]

respuesta_orden: ["Elicitación (recolección)", "Análisis de requisitos", "Especificación", "Validación"]

enunciado: "Ordena las etapas lógicas del proceso de ingeniería de requisitos, desde que se habla con el cliente hasta que se confirma que lo documentado es correcto."

explicacion: |
  El proceso estándar comienza con la recolección de información (Elicitación), luego se estudia su viabilidad (Análisis), se redacta formalmente (Especificación) y finalmente se revisa con el cliente (Validación).
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_funcionales_vs_no_funcionales"
  nivel: "basico"
  tags: ["ingenieria_software", "requisitos"]

respuesta: "funcionales"
tipo: completar
respuestas_validas:
  - "funcionales"

enunciado: "Los requisitos que describen las tareas específicas, servicios o funciones que el sistema debe ejecutar para satisfacer las necesidades del usuario se denominan requisitos ___________."

explicacion: |
  Los requisitos funcionales definen el "qué" hace el sistema (ej: "el sistema debe permitir registrar usuarios"), mientras que los no funcionales definen el "cómo" lo hace (rendimiento, seguridad, etc.).
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_funcionales_vs_no_funcionales"
  nivel: "basico"
  tags: ["requisitos", "clasificacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["El sistema debe procesar un pago en menos de 2 segundos.", "no_funcional"], ["El sistema debe permitir la recuperación de contraseña por email.", "funcional"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["funcional", "no_funcional"]

enunciado: "Analiza el siguiente requerimiento: '{escenarios[escenario_idx][0]}'. ¿A qué categoría pertenece?"

explicacion: |
  Si el requerimiento describe una acción o proceso del sistema, es funcional. Si describe una restricción de calidad (tiempo, seguridad, disponibilidad), es no funcional.
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_funcionales_vs_no_funcionales"
  nivel: "basico"
  tags: ["requisitos", "rendimiento"]

respuesta: falso
tipo: vf

enunciado: "Un requisito que establece que 'la interfaz de usuario debe ser intuitiva y fácil de usar para personas mayores' es un requisito funcional."

explicacion: |
  Falso. La usabilidad es un atributo de calidad, por lo tanto, es un requisito NO funcional.
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_funcionales_vs_no_funcionales"
  nivel: "intermedio"
  tags: ["calidad_requisitos", "no_funcionales"]

respuesta: "no_funcional"
tipo: mc
opciones_explicitas: ["funcional", "no_funcional"]

enunciado: "Un cliente solicita: 'El sistema debe ser muy rápido'. Este enunciado es un mal ejemplo de un requisito ___________ porque es ambiguo y no es medible."

explicacion: |
  Los requisitos no funcionales (como el rendimiento) deben ser cuantificables (ej: 'el tiempo de respuesta debe ser < 500ms') para poder ser validados.
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_funcionales_vs_no_funcionales"
  nivel: "intermedio"
  tags: ["proceso_ingenieria"]

respuesta_orden: ["identificar necesidades", "definir requisitos funcionales", "establecer restricciones no funcionales", "validar sistema"]
tipo: ordenar
opciones_explicitas: ["identificar necesidades", "definir requisitos funcionales", "establecer restricciones no funcionales", "validar sistema"]

enunciado: "Ordena lógicamente las etapas del ciclo de vida de ingeniería de requisitos para un nuevo software:"

explicacion: |
  Primero se entienden las necesidades del negocio, luego se definen las funciones (funcionales), se aplican las restricciones de calidad (no funcionales) y finalmente se verifica que todo cumpla lo solicitado.
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "basico"
  tags: ["ingenieria_software", "requisitos"]

tipo: mc
opciones_explicitas: ["El sistema debe procesar pagos con tarjeta", "El sistema debe responder en menos de 2 segundos", "El sistema debe tener una interfaz intuitiva", "El sistema debe estar disponible el 99.9% del tiempo"]
respuesta: "El sistema debe procesar pagos con tarjeta"

enunciado: "Un requisito funcional describe una acción específica que el sistema debe realizar. ¿Cuál de los siguientes es un ejemplo de requisito funcional?"

explicacion: |
  Los requisitos funcionales definen las funciones y servicios que el sistema debe ejecutar (el "qué"). Los otros ejemplos corresponden a requisitos no funcionales (rendimiento, usabilidad y disponibilidad).
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "basico"
  tags: ["ingenieria_software", "conceptos"]

tipo: vf
respuesta: falso

enunciado: "Los requisitos no funcionales se centran en el 'cómo' debe comportarse el sistema (como la seguridad o la velocidad), mientras que los funcionales se centran en el 'qué' hace el sistema."

explicacion: |
  La afirmación es falsa porque la definición es exactamente al revés: los funcionales definen el "qué" y los no funcionales el "cómo".
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "intermedio"
  tags: ["atributos_calidad", "no_funcionales"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["El sistema debe cifrar los datos con AES-256", "Seguridad"], ["El sistema debe soportar 1000 usuarios concurrentes", "Rendimiento"]]

tipo: completar
respuestas_validas:
  - "Seguridad"
  - "Rendimiento"
respuesta: escenarios[escenario_idx][1]

enunciado: "Analiza el siguiente requisito: '{escenarios[escenario_idx][0]}'. Este es un ejemplo de un requisito de tipo: ___"

explicacion: |
  El requisito mencionado se refiere a la protección de la información (Seguridad) o a la capacidad de carga (Rendimiento), según el caso sorteado.
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "intermedio"
  tags: ["ciclo_vida", "ingenieria_requisitos"]

tipo: ordenar
opciones_explicitas: ["Identificación de necesidades del usuario", "Definición de requisitos funcionales", "Definición de requisitos no funcionales", "Validación del sistema"]

enunciado: "Ordena las etapas lógicas en el proceso de ingeniería de requisitos para un nuevo software:"

explicacion: |
  Primero se entienden las necesidades, luego se definen las funciones (funcionales), luego las restricciones de calidad (no funcionales) y finalmente se validan.
respuesta_orden: ["Identificación de necesidades del usuario", "Definición de requisitos funcionales", "Definición de requisitos no funcionales", "Validación del sistema"]
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "avanzado"
  tags: ["arquitectura", "no_funcionales"]

tipo: completar
tolerancia_abs: 0
respuesta: 1

enunciado: "Si un sistema cumple con todos sus requisitos funcionales pero tarda 30 segundos en cargar una pantalla, ¿ha fallado en sus requisitos (0) funcionales o en sus requisitos (1) no funcionales?"

explicacion: |
  El tiempo de respuesta es un atributo de calidad (rendimiento), por lo tanto, es un requisito no funcional.
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "basico"
  tags: ["ingenieria_software", "requisitos"]

variables:
  escenario: uno_de([["El sistema debe permitir al usuario resetear su contraseña mediante un email.", "funcional"], ["El sistema debe responder a cualquier consulta en menos de 2 segundos.", "no_funcional"], ["El sistema debe cifrar todos los datos sensibles con AES-256.", "no_funcional"], ["El sistema debe generar un reporte PDF de las ventas mensuales.", "funcional"]])

enunciado: "En el siguiente escenario: '{escenario[0]}', el tipo de requisito es: ___"

respuestas_validas:
  - "funcional"
  - "no_funcional"
respuesta: escenario[1]
tipo: completar

explicacion: |
  Los requisitos funcionales definen qué hace el sistema (acciones, servicios), mientras que los no funcionales definen cómo lo hace (atributos de calidad como velocidad, seguridad o disponibilidad).
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "intermedio"
  tags: ["calidad_software", "rendimiento"]

variables:
  caso: uno_de([["Capacidad de carga de 1000 usuarios concurrentes", "Rendimiento"], ["Disponibilidad del sistema del 99.9%", "Disponibilidad"], ["Facilidad de navegación para usuarios con discapacidad", "Usabilidad"], ["Protección contra ataques de inyección SQL", "Seguridad"]])

enunciado: "El enunciado '{caso[0]}' pertenece a la categoría de requisitos no funcionales de tipo: ___"

respuestas_validas:
  - "Rendimiento"
  - "Disponibilidad"
  - "Usabilidad"
  - "Seguridad"
respuesta: caso[1]
tipo: completar

explicacion: |
  Los requisitos no funcionales se agrupan en categorías como rendimiento, seguridad, usabilidad, disponibilidad y mantenibilidad.
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "basico"
  tags: ["logica", "requisitos"]

variables:
  textos: ["El sistema debe permitir eliminar una cuenta de usuario.", "El sistema debe ser compatible con navegadores Chrome y Firefox.", "El sistema debe emitir una alerta si el stock es bajo.", "El sistema debe tener una interfaz de colores suaves."]
  valores: [verdadero, falso, verdadero, falso]
  idx: uno_de([0, 1, 2, 3])

enunciado: "Analiza el siguiente requerimiento: '{textos[idx]}'. ¿Es un requisito funcional?"

respuesta: valores[idx]
tipo: vf
explicacion: |
  Si el requerimiento describe una funcionalidad o acción que el usuario puede realizar, es funcional. Si describe una restricción o una característica de calidad, es no funcional.
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "basico"
  tags: ["requisitos", "clasificacion"]

variables:
  ejemplo: uno_de([["El sistema debe permitir buscar productos por nombre.", "Funcional"], ["El sistema debe estar disponible las 24 horas del día.", "No Funcional"], ["El sistema debe permitir subir archivos de hasta 5MB.", "Funcional"], ["El sistema debe ser fácil de aprender para nuevos empleados.", "No Funcional"]])

enunciado: "Dado el requerimiento: '{ejemplo[0]}', ¿cuál es su clasificación correcta?"

opciones_explicitas: ["Funcional", "No Funcional"]
respuesta: ejemplo[1]
tipo: mc

explicacion: |
  La distinción clave es si el requisito describe un comportamiento del sistema (Funcional) o una restricción sobre cómo opera el sistema (No Funcional).
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "avanzado"
  tags: ["proceso", "ingenieria_software"]

enunciado: "Ordena los pasos lógicos en el proceso de ingeniería de requisitos, desde la detección de la necesidad hasta la validación final:"

opciones_explicitas: ["Identificar necesidades del cliente", "Definir requisitos funcionales", "Definir requisitos no funcionales", "Validar especificaciones"]
respuesta_orden: ["Identificar necesidades del cliente", "Definir requisitos funcionales", "Definir requisitos no funcionales", "Validar especificaciones"]
tipo: ordenar

explicacion: |
  El proceso estándar comienza con el levantamiento de necesidades, seguido de la especificación de qué hará el sistema (funcionales) y cómo lo hará (no funcionales), para terminar con la validación de que lo documentado es correcto.
```

## Sección: revolucion-informatica (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["historia", "computadoras"]

respuesta: "ENIAC"
tipo: completar
respuestas_validas:
  - "ENIAC"

enunciado: "La primera computadora electrónica de propósito general, utilizada para cálculos balísticos durante la Segunda Guerra Mundial, fue la ___."

explicacion: |
  La ENIAC (Electronic Numerical Integrator and Computer) fue una de las primeras computadoras electrónicas de gran escala, marcando el inicio de la era de la computación moderna.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["hardware", "transistores"]

variables:
  tecnologia_actual: "transistores"

respuesta: "transistores"
tipo: mc
opciones_explicitas: ["tubos de vacío", "transistores", "microprocesadores"]

enunciado: "La transición de la primera a la segunda generación de computadoras se caracterizó por el reemplazo de los tubos de vacío por una tecnología más pequeña y eficiente."

explicacion: |
  La primera generación usaba tubos de vacío (grandes y calientes), mientras que la segunda generación introdujo el transistor, permitiendo miniaturización y mayor fiabilidad.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["pc", "historia"]

respuesta: "Apple II"
tipo: mc
opciones_explicitas: ["ENIAC", "Altair 8800", "Apple II", "IBM PC"]

enunciado: "¿Cuál de estos dispositivos fue uno de los primeros en popularizar la computación personal masiva a finales de los años 70 y principios de los 80?"

explicacion: |
  El Apple II fue uno de los primeros computadores personales con gráficos a color y capacidad de uso doméstico, impulsando la revolución de la informática personal.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["cronologia", "hitos"]

respuesta_orden: ["Tubos de vacío", "Transistores", "Circuitos Integrados", "Microprocesadores"]
tipo: ordenar
opciones_explicitas: ["Tubos de vacío", "Transistores", "Circuitos Integrados", "Microprocesadores"]

enunciado: "Ordena cronológicamente las tecnologías que permitieron la miniaturización de las computadoras:"

explicacion: |
  La evolución siguió este orden: Tubos de vacío (1ra gen) -> Transistores (2da gen) -> Circuitos Integrados (3ra gen) -> Microprocesadores (4ta gen).
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "avanzado"
  tags: ["ley_de_moore", "teoria"]

variables:
  valor_doble: 2

respuesta: "exponencial"
tipo: mc
opciones_explicitas: ["lineal", "exponencial", "decreciente", "constante"]

enunciado: "La revolución informática se vio acelerada por la Ley de Moore, la cual predice que el número de transistores en un chip se duplica aproximadamente cada {valor_doble} años, lo que implica un crecimiento de tipo ___."

explicacion: |
  La Ley de Moore describe un crecimiento exponencial de la capacidad de procesamiento, lo que permitió pasar de máquinas que ocupaban habitaciones a dispositivos que caben en un bolsillo.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["hardware", "historia"]

respuesta: "válvulas"
tipo: "mc"

opciones_explicitas: ["válvulas", "transistores", "circuitos integrados", "microprocesadores"]

enunciado: "Las primeras computadoras de gran escala, como la ENIAC, utilizaban principalmente ________ de vacío para realizar sus operaciones lógicas."

explicacion: |
  Las válvulas de vacío (o tubos de vacío) fueron los componentes fundamentales de la primera generación de computadoras, antes de la invención del transistor.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["hardware", "historia"]

respuesta: "Transistor"
tipo: "mc"

opciones_explicitas: ["Transistor", "Circuito Integrado", "Microprocesador", "CPU"]

enunciado: "La invención del ___ permitió reemplazar las válvulas de vacío, reduciendo drásticamente el tamaño y el calor de las máquinas."

explicacion: |
  El transistor permitió la segunda generación de computadoras, permitiendo que fueran más pequeñas y confiables que las de válvulas.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "avanzado"
  tags: ["hardware", "historia"]

respuesta: "1971"
tipo: "completar"

respuestas_validas:
  - "1971"
  - "1972"

enunciado: "El primer microprocesador comercial, el Intel 4004, fue lanzado en el año ___."

explicacion: |
  El Intel 4004 marcó el inicio de la era de la integración a gran escala, permitiendo que toda la unidad de procesamiento residiera en un solo chip.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["historia", "ordenar"]

tipo: ordenar

opciones_explicitas: ["Válvula de vacío", "Transistor", "Circuito Integrado", "Microprocesador"]

respuesta_orden: ["Válvula de vacío", "Transistor", "Circuito Integrado", "Microprocesador"]

enunciado: "Ordena cronológicamente los hitos tecnológicos que permitieron la evolución del hardware de computación:"

explicacion: |
  La evolución siguió este orden: Válvulas (1ra gen), Transistores (2da gen), Circuitos Integrados (3ra gen) y Microprocesadores (4ta gen).
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["usuario", "historia"]

respuesta: verdadero
tipo: vf

enunciado: "¿La llegada de la computadora personal (PC) a los hogares en los años 70 y 80 fue posible gracias a la integración masiva de microprocesadores?"

explicacion: |
  Correcto. La capacidad de integrar la CPU en un solo chip permitió que las computadoras pasaran de ocupar habitaciones enteras a ser dispositivos de escritorio accesibles.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["historia", "hardware"]

tipo: mc
opciones_explicitas: ["La velocidad de procesamiento", "La capacidad de almacenamiento", "La densidad de transistores en un chip", "El costo de los componentes electrónicos"]

enunciado: "La Ley de Moore es una observación histórica que predice el aumento de la densidad de ___ en un circuito integrado cada dos años aproximadamente."

respuesta: "La densidad de transistores en un chip"

explicacion: |
  Gordon Moore, cofundador de Intel, observó que el número de transistores en un microchip se duplicaba aproximadamente cada dos años, lo que impulsó la miniaturización de la tecnología.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["calculo", "hardware"]

variables:
  idx: uno_de([0, 1])
  datos: [["1000", "2000"], ["500", "1000"]]
  base: datos[idx][0]
  doble: datos[idx][1]

tipo: completar
tolerancia_abs: 0

enunciado: "Si un chip tiene {base} transistores hoy, siguiendo la Ley de Moore, ¿cuántos transistores tendrá aproximadamente en el próximo ciclo de dos años?"

respuesta: doble

pasos:
  - "Identificar la cantidad actual de transistores."
  - "Aplicar el factor de duplicación (x2) según la ley."

explicacion: |
  La Ley de Moore establece que la cantidad de transistores se duplica. Por lo tanto, {base} * 2 = {doble}.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["historia", "procesadores"]

tipo: ordenar
opciones_explicitas: ["Aumento de transistores", "Reducción del tamaño de los componentes", "Aumento de la potencia de cómputo", "Reducción de costos por transistor"]

enunciado: "Ordena los efectos causados por la aplicación de la Ley de Moore en la tecnología, desde la causa técnica hasta el efecto en el consumidor final:"

respuesta_orden: ["Aumento de transistores", "Reducción del tamaño de los componentes", "Aumento de la potencia de cómputo", "Reducción de costos por transistor"]

explicacion: |
  La Ley de Moore describe un ciclo: más transistores en menos espacio permiten chips más potentes y, con la escala de producción, más económicos.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["teoria", "hardware"]

tipo: completar
respuestas_validas:
  - "potencia"
  - "capacidad"

enunciado: "Debido al aumento exponencial de transistores, la ___ de procesamiento de los ordenadores ha crecido de forma similar a lo largo de las últimas décadas."

respuesta: "potencia"

explicacion: |
  Al integrar más transistores en un mismo espacio, el procesador puede realizar más operaciones por segundo, aumentando su potencia.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["conceptos"]

tipo: mc
opciones_explicitas: ["Verdadero", "Falso"]

enunciado: "La Ley de Moore es una ley física inmutable de la naturaleza, similar a la Ley de la Gravedad."

respuesta: "Falso"

explicacion: |
  No es una ley física, sino una observación empírica y una meta industrial que ha guiado la planificación de la industria de los semiconductores.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["internet", "economia"]

tipo: mc
opciones_explicitas: ["Descentralización de la información", "Aumento de la burocracia física", "Reducción de la velocidad de comunicación", "Eliminación del comercio electrónico"]
respuesta: "Descentralización de la información"

enunciado: "La combinación de la revolución informática y el internet ha permitido la ________ de la información, permitiendo el acceso global a datos en tiempo real."

explicacion: |
  La digitalización ha democratizado el acceso a la información, rompiendo las barreras geográficas y temporales que existían antes de la era de internet.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["economia_digital", "e-commerce"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["comercio_electronico", "servicios_streaming"], ["ventas_retail_fisico", "suscripciones_digitales"]]

tipo: completar
respuestas_validas:
  - "servicios_streaming"
  - "suscripciones_digitales"
respuesta: escenarios[escenario_idx][1]

enunciado: "Un ejemplo clave de la transformación económica es el paso de modelos basados en el ________ hacia modelos basados en las ________."

explicacion: |
  La economía ha migrado de la propiedad física y el comercio en locales hacia el consumo de servicios bajo demanda y plataformas digitales.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["comunicacion", "impacto_social"]

tipo: completar
tolerancia_abs: 0

enunciado: "Si en la era industrial la comunicación se basaba en el telégrafo y el correo físico, en la era informática la comunicación es instantánea. Si comparamos la velocidad de un mensaje de texto con un correo físico que tarda 3 días, y el mensaje tarda 0 segundos, ¿cuántos segundos de ahorro representa el mensaje digital frente al correo?"

pasos:
  - "Convertir 3 días a segundos: 3 * 24 * 60 * 60 = 259200"
  - "Restar el tiempo del mensaje digital (0) al tiempo del correo (259200)"

respuesta: 259200

explicacion: |
  La inmediatez es una de las características fundamentales de la revolución informática, permitiendo la globalización de los mercados en tiempo real.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["hardware", "historia"]

tipo: ordenar
opciones_explicitas: ["Mainframes gigantescos", "Computadoras personales (PC)", "Dispositivos móviles y smartphones"]

enunciado: "Ordena cronológicamente los hitos tecnológicos que permitieron la integración de la informática en la vida cotidiana:"

respuesta_orden: ["Mainframes gigantescos", "Computadoras personales (PC)", "Dispositivos móviles y smartphones"]

explicacion: |
  La computación comenzó en grandes centros de datos corporativos, pasó a los escritorios de los hogares con la PC y finalmente se volvió ubicua con los smartphones.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "avanzado"
  tags: ["trabajo", "automatizacion"]

tipo: mc
opciones_explicitas: ["Automatización de tareas repetitivas", "Desaparición total del trabajo humano", "Aumento de la necesidad de archivos físicos", "Reducción de la conectividad global"]
respuesta: "Automatización de tareas repetitivas"

enunciado: "Un efecto crítico de la revolución informática en la economía laboral es la ________, lo que obliga a la fuerza de trabajo a especializarse en tareas de mayor valor cognitivo."

explicacion: |
  La automatización impulsada por software y algoritmos ha transformado la estructura del empleo, eliminando tareas mecánicas pero creando nuevas demandas tecnológicas.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["historia", "ordenar"]

tipo: ordenar
opciones_explicitas: ["ENIAC", "Transistor", "PC"]
respuesta_orden: ["ENIAC", "Transistor", "PC"]

enunciado: "Ordena cronológicamente los siguientes hitos tecnológicos: ENIAC, Transistor y PC."

explicacion: |
  El orden cronológico correcto es:
  1. ENIAC (1945) -> 2. Transistor (1947) -> 3. PC (años 70/80).
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["lenguajes", "historia"]

respuesta: "Ada Lovelace"
tipo: mc

opciones_explicitas: ["Ada Lovelace", "Grace Hopper", "John Backus", "Alan Turing"]

enunciado: "Identifica a la figura histórica reconocida por escribir los primeros algoritmos destinados a ser procesados por la Máquina Analítica de Charles Babbage."

explicacion: |
  Ada Lovelace es reconocida históricamente por haber escrito el primer algoritmo destinado a ser procesado por una máquina.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["hardware", "almacenamiento"]

variables:
  casos: [["Disquete", "CD-ROM", "USB"], ["Cassette", "Disco Duro", "SSD"]]
  idx: uno_de([0,1])
  respuesta_correcta: casos[idx][0]

tipo: completar
respuesta: respuesta_correcta
respuestas_validas:
  - "Disquete"
  - "CD-ROM"
  - "USB"
  - "Disco Duro"
  - "Cassette"
  - "SSD"

enunciado: "En la evolución del almacenamiento magnético y óptico, el dispositivo que precede al siguiente es: ___."

explicacion: |
  El orden de evolución tecnológica en el escenario seleccionado es: {casos[idx][0]} -> {casos[idx][1]} -> {casos[idx][2]}.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["internet", "web"]

respuesta: "Tim Berners-Lee"
tipo: mc

opciones_explicitas: ["Tim Berners-Lee", "Vint Cerf", "Marc Andreessen", "Steve Jobs"]

enunciado: "¿Quién es el creador de la World Wide Web (WWW) según el contexto de la revolución digital?"

explicacion: |
  Tim Berners-Lee inventó la WWW en el CERN, permitiendo la democratización de la información en la red.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["movilidad", "hardware"]

variables:
  tecnologias: [["Teléfono Fijo", "Teléfono Móvil", "Smartphone"], ["Radio", "Walkman", "iPod"]]
  idx: uno_de([0,1])

respuesta: tecnologias[idx][2]
tipo: mc

opciones_explicitas: ["Teléfono Fijo", "Teléfono Móvil", "Smartphone", "Radio", "Walkman", "iPod"]

enunciado: "Identifica el dispositivo que representa la etapa final de la evolución de la comunicación/reproducción en este escenario: ___."

explicacion: |
  La evolución tecnológica sigue una línea de miniaturización y conectividad: {tecnologias[idx][0]} -> {tecnologias[idx][1]} -> {tecnologias[idx][2]}.
```

## Sección: segmentacion (23 preguntas)

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["definicion", "comparacion"]

respuesta: verdadero
tipo: vf

enunciado: "La segmentación divide la memoria de un programa en bloques de tamaño variable, a diferencia de la paginación, que usa bloques de tamaño fijo."

explicacion: |
  Verdadero. Esa es la diferencia clave: los segmentos corresponden a unidades lógicas del programa (código, datos, pila) y por eso varían de tamaño, mientras que las páginas son siempre del mismo tamaño fijo.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["segmentos", "tipos"]

respuesta: falso
tipo: vf

enunciado: "Un programa en un sistema segmentado tiene un único segmento que contiene todo: código, datos y pila mezclados."

explicacion: |
  Falso. Se dividen en segmentos separados según su función lógica: segmento de código, segmento de datos, segmento de pila, entre otros, cada uno con sus propios permisos.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["direccionamiento", "par"]

respuesta: verdadero
tipo: vf

enunciado: "En un sistema con segmentación, una dirección de memoria se expresa como un par (segmento, desplazamiento)."

explicacion: |
  Verdadero. El segmento identifica la unidad lógica y el desplazamiento indica la posición exacta dentro de ese segmento.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["tabla", "segmentos"]

respuesta: "tabla de segmentos"
tipo: completar

enunciado: "El sistema operativo mantiene, por cada proceso, una ___ que registra dónde empieza cada segmento en memoria física y cuál es su tamaño."

explicacion: |
  La tabla de segmentos es el equivalente, para segmentación, de la tabla de páginas en paginación.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["permisos", "seguridad"]

respuesta: verdadero
tipo: vf

enunciado: "El segmento de código suele configurarse como de solo lectura y ejecución, mientras que el segmento de datos permite lectura y escritura pero no ejecución."

explicacion: |
  Verdadero. Asignar permisos distintos según el tipo de segmento es una ventaja de seguridad propia de la segmentación, que la paginación pura no ofrece de la misma manera.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["mmu", "verificacion"]

respuesta: verdadero
tipo: vf

enunciado: "La MMU verifica que el desplazamiento solicitado no supere el tamaño del segmento correspondiente antes de permitir el acceso."

explicacion: |
  Verdadero. Si el desplazamiento excede el tamaño del segmento, se genera una violación de segmento — el conocido 'segmentation fault'.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["segmentation_fault", "error"]

respuesta: "segmentation fault"
tipo: completar

enunciado: "Cuando un programa en C intenta escribir fuera de los límites de su segmento asignado, el sistema operativo termina el proceso con el error conocido como '___'."

explicacion: |
  Es uno de los errores más famosos para quienes programan en C/C++, y ocurre justamente por una violación de los límites de un segmento de memoria.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["fragmentacion", "externa"]

respuesta: "externa"
tipo: completar

enunciado: "Como los segmentos son de tamaño variable, la memoria libre se va fragmentando en huecos de distinto tamaño — un problema conocido como fragmentación ___."

explicacion: |
  La fragmentación externa es la principal desventaja de la segmentación pura frente a la paginación.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["paginacion", "ventaja"]

respuesta: verdadero
tipo: vf

enunciado: "La paginación no sufre fragmentación externa porque todos sus bloques (páginas y marcos) tienen el mismo tamaño fijo."

explicacion: |
  Verdadero. Esa es justamente la ventaja de la paginación frente a la segmentación pura en cuanto al aprovechamiento de la memoria libre.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "avanzado"
  tags: ["combinado", "moderno"]

respuesta: "segmentación paginada"
tipo: completar

enunciado: "El esquema que combina segmentación lógica (código/datos/pila con permisos) con paginación dentro de cada segmento se llama ___."

explicacion: |
  Es el esquema que efectivamente usa la mayoría del hardware x86 moderno: segmentación para la organización lógica y permisos, paginación para evitar la fragmentación externa.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["pila", "crecimiento"]

respuesta: verdadero
tipo: vf

enunciado: "El segmento de pila (stack) crece de forma dinámica según las llamadas a función que estén activas en cada momento."

explicacion: |
  Verdadero. A diferencia del segmento de código (que no cambia de tamaño en tiempo de ejecución), la pila crece y se reduce constantemente con cada llamada y retorno de función.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["logico", "fisico"]

respuesta: falso
tipo: vf

enunciado: "Un segmento representa siempre un bloque arbitrario de memoria, sin relación con la estructura lógica del programa."

explicacion: |
  Falso. Es exactamente lo contrario: cada segmento corresponde a una unidad lógica real del programa (código, datos, pila) — esa es la diferencia central frente a la paginación, que sí usa bloques arbitrarios de tamaño fijo.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["deteccion", "seguridad"]

respuesta: verdadero
tipo: vf

enunciado: "La segmentación puede detectar un acceso indebido a memoria de una manera que la paginación pura no detecta tan naturalmente."

explicacion: |
  Verdadero. Como cada segmento 'sabe' su tamaño lógico real, un acceso que se pasa de ese límite se detecta como violación de segmento — la paginación, al tratar todo como bloques fijos sin significado, no tiene ese mismo tipo de chequeo lógico.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["puntero", "causa"]

respuesta: verdadero
tipo: vf

enunciado: "Seguir un puntero nulo o mal inicializado es una causa común de segmentation fault."

explicacion: |
  Verdadero. Un puntero inválido suele apuntar fuera de los límites del segmento asignado al proceso, disparando la violación de segmento.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["proteccion", "otros_procesos"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando ocurre una violación de segmento, el sistema operativo termina el proceso para evitar que dañe la memoria de otros procesos."

explicacion: |
  Verdadero. Este mecanismo hace que un programa mal escrito falle de forma controlada y visible, en vez de corromper silenciosamente datos de otras aplicaciones.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["segmentos", "ejemplos"]

respuesta: "codigo"
tipo: completar

enunciado: "El segmento de ___ contiene las instrucciones ejecutables del programa y suele ser de solo lectura y ejecución."

explicacion: |
  Proteger el segmento de código contra escritura evita que un programa (accidental o maliciosamente) modifique sus propias instrucciones en tiempo de ejecución.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["mmu", "componente"]

respuesta: "MMU"
tipo: completar

enunciado: "El componente de hardware que verifica los límites de cada segmento antes de permitir un acceso a memoria se llama ___ (Memory Management Unit)."

explicacion: |
  La MMU es el mismo componente de hardware involucrado tanto en segmentación como en paginación — traduce direcciones lógicas a físicas y aplica los controles de acceso.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["fragmentacion", "interna"]

respuesta: falso
tipo: vf

enunciado: "La segmentación pura sufre principalmente de fragmentación interna, igual que la paginación."

explicacion: |
  Falso. La segmentación sufre principalmente fragmentación EXTERNA (huecos de tamaño variable entre segmentos). La fragmentación interna (espacio desperdiciado dentro de un bloque de tamaño fijo) es más propia de la paginación.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["reconstruccion", "logico"]

respuesta: falso
tipo: vf

enunciado: "La segmentación en sistemas operativos tiene como objetivo dividir archivos para enviarlos por una red."

explicacion: |
  Falso — eso seria segmentación/fragmentación de paquetes de red (un concepto de redes, distinto). La segmentación de memoria organiza cómo se divide y protege la memoria de UN programa dentro de la computadora, no cómo viajan los datos por una red.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["x86", "hardware"]

respuesta: verdadero
tipo: vf

enunciado: "La mayoría del hardware x86 moderno usa un esquema de segmentación paginada, no segmentación pura."

explicacion: |
  Verdadero. Combina lo mejor de ambos mundos: organización lógica con permisos (segmentación) y aprovechamiento eficiente de la memoria física sin fragmentación externa (paginación).
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["datos", "segmento"]

respuesta: "datos"
tipo: completar

enunciado: "Las variables globales y estáticas de un programa se almacenan típicamente en el segmento de ___."

explicacion: |
  El segmento de datos guarda las variables globales/estáticas, separado del segmento de código y del de pila (que guarda variables locales y direcciones de retorno).
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "avanzado"
  tags: ["comparacion", "tamaño"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de los marcos de página, que siempre tienen el mismo tamaño, los segmentos pueden tener tamaños distintos entre sí."

explicacion: |
  Verdadero. Ese es el rasgo definitorio de la segmentación: cada segmento tiene el tamaño que necesita su unidad lógica correspondiente (el código puede ser grande, la pila puede ser chica al inicio, etc.).
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["utilidad", "programador"]

respuesta: verdadero
tipo: vf

enunciado: "Entender la segmentación ayuda a comprender por qué ocurren errores como el segmentation fault al programar en lenguajes de bajo nivel como C."

explicacion: |
  Verdadero. Conocer cómo se organiza y protege la memoria por segmentos explica directamente por qué ciertos errores de programación (punteros inválidos, desbordes de array) terminan en ese tipo de falla."
```

