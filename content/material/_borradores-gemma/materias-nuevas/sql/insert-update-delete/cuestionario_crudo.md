### 1 — Sintaxis básica de INSERT con valores literales
```yaml
metadata:
  materia: "sql"
  tema: "insert-update-delete"
  nivel: "basico"
  tags: ["insert", "valores-literales"]
tipo: completar
enunciado: Para agregar un nuevo registro a la tabla 'usuarios' con los campos 'nombre' y 'edad', la estructura correcta es: INSERT INTO usuarios (nombre, edad) VALUES _____________
respuesta: ('Juan', 25)
respuestas_validas:
  - "('Juan', 25)"
  - "( 'Juan' , 25 )"
  - "('juan', 25)"
  - "( 'juan' , 25 )"
uno_de:
  - "nombre: 'Juan', edad: 25"
  - "nombre: 'juan', edad: 25"
  - "nombre: 'Ana', edad: 30"
pasos:
  - "Identificar la tabla destino: usuarios"
  - "Identificar las columnas: nombre, edad"
  - "Usar la cláusula VALUES con los literales entre paréntesis"
explicacion: La cláusula VALUES debe contener los literales exactos en el orden de las columnas, envueltos en paréntesis.
```

### 2 — Cláusula WHERE en UPDATE
```yaml
metadata:
  materia: "sql"
  tema: "insert-update-delete"
  nivel: "basico"
  tags: ["update", "where", "condicion"]
tipo: completar
enunciado: Queremos cambiar el precio de 'Producto A' a 15.50. La consulta es: UPDATE productos SET precio = 15.50 _____________ nombre = 'Producto A'
respuesta: WHERE
respuestas_validas:
  - "WHERE"
  - "where"
uno_de:
  - "nombre"
  - "id"
  - "categoria"
pasos:
  - "Usar UPDATE para modificar registros"
  - "Usar SET para definir el nuevo valor"
  - "Usar WHERE para filtrar el registro específico"
explicacion: Sin la cláusula WHERE, todas las filas de la tabla se actualizarían, lo cual es un error común grave.
```

### 3 — Eliminación condicional con DELETE
```yaml
metadata:
  materia: "sql"
  tema: "insert-update-delete"
  nivel: "basico"
  tags: ["delete", "where", "seguridad"]
tipo: vf
enunciado: La sentencia DELETE FROM ventas WHERE fecha < '2023-01-01' elimina la tabla 'ventas' completamente si no hay registros con fecha posterior.
respuesta: falso
pasos:
  - "Analizar la cláusula WHERE"
  - "Verificar el alcance de DELETE"
explicacion: DELETE con WHERE solo elimina las filas que cumplen la condición. Para eliminar la tabla se usa DROP TABLE.
```

### 4 — Insertar múltiples filas
```yaml
metadata:
  materia: "sql"
  tema: "insert-update-delete"
  nivel: "basico"
  tags: ["insert", "multi-row"]
tipo: completar
enunciado: Para insertar dos filas a la vez en la tabla 'log', la sintaxis es: INSERT INTO log (mensaje) VALUES ('inicio'), _____________
respuesta: ('fin')
respuestas_validas:
  - "('fin')"
  - "( 'fin' )"
uno_de:
  - "('inicio')"
  - "('medio')"
  - "('error')"
pasos:
  - "Usar INSERT INTO con la tabla"
  - "Especificar columnas"
  - "Separar los conjuntos de valores con comas dentro de VALUES"
explicacion: SQL permite listar múltiples tuplas entre paréntesis separadas por comas en la cláusula VALUES.
```

### 5 — Actualizar columna nula
```yaml
metadata:
  materia: "sql"
  tema: "insert-update-delete"
  nivel: "basico"
  tags: ["update", "null"]
tipo: mc
enunciado: ¿Qué sentencia actualiza la columna 'email' a NULL en la tabla 'clientes' donde el ID es 5?
opciones_explicitas:
  - "UPDATE clientes SET email = NULL WHERE id = 5;"
  - "UPDATE clientes SET email = 'null' WHERE id = 5;"
  - "UPDATE clientes SET email IS NULL WHERE id = 5;"
  - "UPDATE clientes SET email = '' WHERE id = 5;"
respuesta: "UPDATE clientes SET email = NULL WHERE id = 5;"
pasos:
  - "Identificar que NULL representa la ausencia de valor"
  - "Usar SET para asignar NULL"
  - "Filtrar por ID específico"
explicacion: NULL es un valor especial en SQL, no una cadena de texto 'null'.
```

### 6 — Borrar registro por ID
```yaml
metadata:
  materia: "sql"
  tema: "insert-update-delete"
  nivel: "basico"
  tags: ["delete", "primary-key"]
tipo: completar
enunciado: Para borrar el registro con ID 999 de la tabla 'temp_data', usamos: DELETE _____________ temp_data WHERE id = 999;
respuesta: FROM
respuestas_validas:
  - "FROM"
  - "from"
uno_de:
  - "INTO"
  - "TO"
  - "IN"
pasos:
  - "Usar DELETE para eliminar datos"
  - "Especificar FROM seguido de la tabla"
  - "Aplicar WHERE para precisión"
explicacion: En SQL estándar, DELETE requiere la palabra clave FROM antes del nombre de la tabla.
```

### 7 — Insertar solo algunas columnas
```yaml
metadata:
  materia: "sql"
  tema: "insert-update-delete"
  nivel: "basico"
  tags: ["insert", "columnas"]
tipo: completar
enunciado: Si la tabla 'empleados' tiene (id, nombre, salario), y queremos insertar solo el nombre 'Carlos' dejando los demás como NULL/default: INSERT INTO empleados _____________ VALUES ('Carlos')
respuesta: (nombre)
respuestas_validas:
  - "(nombre)"
  - "( nombre )"
uno_de:
  - "(id, nombre)"
  - "(salario)"
  - "(id)"
pasos:
  - "Listar explícitamente las columnas que se van a llenar"
  - "Proporcionar valores correspondientes en el mismo orden"
explicacion: Si no se listan todas las columnas, las restantes deben permitir NULL o tener valores por defecto.
```

### 8 — Actualizar con condición compleja
```yaml
metadata:
  materia: "sql"
  tema: "insert-update-delete"
  nivel: "basico"
  tags: ["update", "and"]
tipo: vf
enunciado: La sentencia UPDATE productos SET precio = precio * 1.1 WHERE categoria = 'Electronica' AND stock < 10 aplica un 10% de aumento solo a los productos electrónicos con poco stock.
respuesta: verdadero
pasos:
  - "Analizar la expresión aritmética en SET"
  - "Analizar la lógica booleana en WHERE"
explicacion: SQL permite operaciones aritméticas en SET y condiciones compuestas en WHERE.
```

### 9 — Borrar todos los registros (sin DROP)
```yaml
metadata:
  materia: "sql"
  tema: "insert-update-delete"
  nivel: "basico"
  tags: ["delete", "truncate-alternative"]
tipo: mc
enunciado: ¿Cuál es la forma estándar de borrar TODOS los registros de una tabla 'logs' manteniendo la estructura de la tabla?
opciones_explicitas:
  - "DELETE FROM logs;"
  - "DROP TABLE logs;"
  - "TRUNCATE TABLE logs;"
  - "DELETE logs;"
respuesta: "DELETE FROM logs;"
pasos:
  - "Diferenciar entre borrar datos y borrar estructura"
  - "Usar DELETE sin WHERE para borrar todas las filas"
explicacion: DROP TABLE elimina la estructura. DELETE FROM tabla sin WHERE elimina los datos pero deja la tabla.
```

### 10 — Insertar con fecha
```yaml
metadata:
  materia: "sql"
  tema: "insert-update-delete"
  nivel: "basico"
  tags: ["insert", "date"]
tipo: completar
enunciado: Para insertar una fecha '2024-05-20' en la columna 'fecha_creacion' de la tabla 'activos': INSERT INTO activos (fecha_creacion) VALUES _____________
respuesta: ('2024-05-20')
respuestas_validas:
  - "('2024-05-20')"
  - "( '2024-05-20' )"
uno_de:
  - "(2024-05-20)"
  - "(NOW())"
  - "(2024/05/20)"
pasos:
  - "Usar comillas simples para literales de cadena/fecha"
  - "Formato YYYY-MM-DD es estándar"
explicacion: Las fechas suelen tratarse como cadenas de caracteres en la sintaxis básica de INSERT.
```

### 11 — Actualizar con subconsulta básica
```yaml
metadata:
  materia: "sql"
  tema: "insert-update-delete"
  nivel: "basico"
  tags: ["update", "subconsulta"]
tipo: mc
enunciado: ¿Qué comando actualiza el 'salario' de 'vendedores' al promedio de salarios de la tabla 'empleados'?
opciones_explicitas:
  - "UPDATE vendedores SET salario = (SELECT AVG(salario) FROM empleados);"
  - "UPDATE vendedores SET salario = AVG(salario) FROM empleados;"
  - "UPDATE vendedores SET salario = (SELECT salario FROM empleados);"
  - "UPDATE vendedores SET salario = AVG(salario) WHERE tipo = 'vendedor';"
respuesta: "UPDATE vendedores SET salario = (SELECT AVG(salario) FROM empleados);"
pasos:
  - "Usar una subconsulta escalar entre paréntesis"
  - "La subconsulta debe devolver un único valor"
explicacion: AVG() devuelve un valor numérico único, apto para asignación directa en SET.
```

### 12 — Borrar con LIKE
```yaml
metadata:
  materia: "sql"
  tema: "insert-update-delete"
  nivel: "basico"
  tags: ["delete", "like"]
tipo: completar
enunciado: Para borrar correos que terminen en '@temp.com' de la tabla 'contactos': DELETE FROM contactos WHERE email _____________ '%@temp.com'
respuesta: LIKE
respuestas_validas:
  - "LIKE"
  - "like"
uno_de:
  - "IS"
  - "IN"
  - "BETWEEN"
pasos:
  - "Usar DELETE FROM para la eliminación"
  - "Usar LIKE para coincidencia de patrones"
  - "Usar % como comodín"
explicacion: LIKE permite buscar patrones de texto, % representa cero o más caracteres.
```

### 13 — Insertar con DEFAULT
```yaml
metadata:
  materia: "sql"
  tema: "insert-update-delete"
  nivel: "basico"
  tags: ["insert", "default"]
tipo: vf
enunciado: En la sentencia INSERT INTO tabla (col1) VALUES (DEFAULT), la columna 'col1' recibirá su valor por defecto definido en la tabla.
respuesta: verdadero
pasos:
  - "Analizar la palabra clave DEFAULT"
  - "Verificar comportamiento estándar"
explicacion: DEFAULT instruye al motor a usar el valor definido en la definición de la columna.
```

### 14 — Actualizar múltiples columnas
```yaml
metadata:
  materia: "sql"
  tema: "insert-update-delete"
  nivel: "basico"
  tags: ["update", "multiple-cols"]
tipo: completar
enunciado: Para cambiar 'nombre' a 'Nuevo' y 'estado' a 'activo' en el registro ID 1: UPDATE usuarios SET nombre = 'Nuevo', _____________ estado = 'activo' WHERE id = 1
respuesta: estado = 'activo'
respuestas_validas:
  - "estado = 'activo'"
  - "estado = 'activo' "
  - " estado = 'activo'"
uno_de:
  - "estado 'activo'"
  - "set estado = 'activo'"
  - "estado = activo"
pasos:
  - "Usar coma para separar asignaciones en SET"
  - "Cada asignación es columna = valor"
explicacion: Las asignaciones múltiples en SET se separan por comas.
```

### 15 — Borrar rango de fechas
```yaml
metadata:
  materia: "sql"
  tema: "insert-update-delete"
  nivel: "basico"
  tags: ["delete", "between"]
tipo: mc
enunciado: ¿Cuál es la sintaxis correcta para borrar registros de 'pedidos' donde 'fecha' esté entre '2023-01-01' y '2023-12-31'?
opciones_explicitas:
  - "DELETE FROM pedidos WHERE fecha BETWEEN '2023-01-01' AND '2023-12-31';"
  - "DELETE FROM pedidos WHERE fecha >= '2023-01-01' OR fecha <= '2023-12-31';"
  - "DELETE FROM pedidos WHERE fecha IN ('2023-01-01', '2023-12-31');"
  - "DELETE FROM pedidos WHERE fecha = '2023-01-01' AND '2023-12-31';"
respuesta: "DELETE FROM pedidos WHERE fecha BETWEEN '2023-01-01' AND '2023-12-31';"
pasos:
  - "Usar BETWEEN para rangos inclusivos"
  - "La sintaxis es BETWEEN valor1 AND valor2"
explicacion: BETWEEN es más legible y eficiente para rangos que usar AND/OR con comparadores.
```

### 16 — Insertar con NULL explícito
```yaml
metadata:
  materia: "sql"
  tema: "insert-update-delete"
  nivel: "basico"
  tags: ["insert", "null-explicit"]
tipo: completar
enunciado: Para insertar un registro en 'personas' donde 'apellido' es desconocido: INSERT INTO personas (nombre, apellido) VALUES ('Maria', _____________)
respuesta: NULL
respuestas_validas:
  - "NULL"
  - "null"
uno_de:
  - "''"
  - "0"
  - "NONE"
pasos:
  - "Usar la palabra clave NULL para valores faltantes"
  - "No usar comillas para NULL"
explicacion: NULL no es una cadena, es un marcador de valor faltante.
```

### 17 — Actualizar con CASE
```yaml
metadata:
  materia: "sql"
  tema: "insert-update-delete"
  nivel: "basico"
  tags: ["update", "case"]
tipo: mc
enunciado: ¿Qué sentencia cambia el 'nivel' a 'Senior' si 'experiencia' > 5, y a 'Junior' si no?
opciones_explicitas:
  - "UPDATE empleados SET nivel = CASE WHEN experiencia > 5 THEN 'Senior' ELSE 'Junior' END;"
  - "UPDATE empleados SET nivel = IF(experiencia > 5, 'Senior', 'Junior');"
  - "UPDATE empleados SET nivel = WHEN experiencia > 5 THEN 'Senior' ELSE 'Junior' END;"
  - "UPDATE empleados SET nivel = 'Senior' WHERE experiencia > 5; UPDATE empleados SET nivel = 'Junior';"
respuesta: "UPDATE empleados SET nivel = CASE WHEN experiencia > 5 THEN 'Senior' ELSE 'Junior' END;"
pasos:
  - "Usar CASE WHEN THEN ELSE END para lógica condicional en SET"
  - "La estructura es completa en una sola línea"
explicacion: CASE es estándar SQL para lógica condicional dentro de expresiones.
```

### 18 — Borrar duplicados (lógica básica)
```yaml
metadata:
  materia: "sql"
  tema: "insert-update-delete"
  nivel: "basico"
  tags: ["delete", "duplicados"]
tipo: vf
enunciado: La sentencia DELETE FROM tabla WHERE id NOT IN (SELECT MIN(id) FROM tabla GROUP BY columna_dup) elimina los duplicados manteniendo una instancia.
respuesta: verdadero
pasos:
  - "Identificar la lógica de subconsulta"
  - "Verificar que se mantiene el mínimo ID"
explicacion: Esta es una técnica común para eliminar duplicados manteniendo el registro con el ID más bajo.
```

### 19 — Insertar con lista de columnas inversa
```yaml
metadata:
  materia: "sql"
  tema: "insert-update-delete"
  nivel: "basico"
  tags: ["insert", "orden-columnas"]
tipo: completar
enunciado: Si la tabla tiene (id, nombre), y ejecutamos INSERT INTO tabla (nombre, id) VALUES ('Test', 10), el valor 'Test' va a la columna: _____________
respuesta: nombre
respuestas_validas:
  - "nombre"
  - "Nombre"
uno_de:
  - "id"
  - "valor"
  - "null"
pasos:
  - "El orden de VALUES debe coincidir con el orden de columnas listadas"
  - "Nombre es la primera columna listada"
explicacion: La correspondencia es posicional basada en la lista de columnas explícita.
```

### 20 — Actualizar con comparación NULL
```yaml
metadata:
  materia: "sql"
  tema: "insert-update-delete"
  nivel: "basico"
  tags: ["update", "is-null"]
tipo: mc
enunciado: ¿Cómo se actualiza 'email' a 'default@mail.com' donde 'email' actualmente es NULL?
opciones_explicitas:
  - "UPDATE usuarios SET email = 'default@mail.com' WHERE email IS NULL;"
  - "UPDATE usuarios SET email = 'default@mail.com' WHERE email = NULL;"
  - "UPDATE usuarios SET email = 'default@mail.com' WHERE email IS 'NULL';"
  - "UPDATE usuarios SET email = 'default@mail.com' WHERE email = 'NULL';"
respuesta: "UPDATE usuarios SET email = 'default@mail.com' WHERE email IS NULL;"
pasos:
  - "Usar IS NULL para comparar con nulos"
  - "= NULL no funciona para detectar nulos"
explicacion: La comparación con NULL requiere el operador lógico IS NULL.
```

### 21 — Borrar por lista de IDs
```yaml
metadata:
  materia: "sql"
  tema: "insert-update-delete"
  nivel: "basico"
  tags: ["delete", "in"]
tipo: completar
enunciado: Para borrar registros con IDs 1, 2 y 3 de la tabla 'items': DELETE FROM items WHERE id _____________ (1, 2, 3)
respuesta: IN
respuestas_validas:
  - "IN"
  - "in"
uno_de:
  - "IS"
  - "LIKE"
  - "BETWEEN"
pasos:
  - "Usar IN para verificar pertenencia a una lista"
  - "La lista va entre paréntesis"
explicacion: IN es más eficiente y legible que usar AND/OR para múltiples valores iguales.
```

### 22 — Insertar con comillas simples en valor
```yaml
metadata:
  materia: "sql"
  tema: "insert-update-delete"
  nivel: "basico"
  tags: ["insert", "escape"]
tipo: vf
enunciado: Para insertar el texto O'Connor en la columna 'nombre', se debe escribir: INSERT INTO usuarios (nombre) VALUES ('O''Connor')
respuesta: verdadero
pasos:
  - "Identificar el apostrofe dentro de la cadena"
  - "Duplicar el apostrofe para escapar"
explicacion: En SQL, el carácter de escape para una comilla simple dentro de una cadena es otra comilla simple.
```

### 23 — Actualizar con incremento aritmético
```yaml
metadata:
  materia: "sql"
  tema: "insert-update-delete"
  nivel: "basico"
  tags: ["update", "arithmetic"]
tipo: completar
enunciado: Para sumar 10 unidades al campo 'stock' de 'productos' donde 'sku' es 'ABC': UPDATE productos SET stock = stock + 10 _____________ sku = 'ABC'
respuesta: WHERE
respuestas_validas:
  - "WHERE"
  - "where"
uno_de:
  - "IF"
  - "WHEN"
  - "ON"
pasos:
  - "Usar SET para la operación aritmética"
  - "Usar WHERE para filtrar la fila objetivo"
explicacion: stock = stock + 10 actualiza el valor actual sumándole 10.
```

### 24 — Borrar con condición OR
```yaml
metadata:
  materia: "sql"
  tema: "insert-update-delete"
  nivel: "basico"
  tags: ["delete", "or"]
tipo: mc
enunciado: ¿Qué sentencia borra registros de 'archivos' si el tipo es 'tmp' O la fecha es anterior a 2020?
opciones_explicitas:
  - "DELETE FROM archivos WHERE tipo = 'tmp' OR fecha < '2020-01-01';"
  - "DELETE FROM archivos WHERE tipo = 'tmp' AND fecha < '2020-01-01';"
  - "DELETE FROM archivos WHERE tipo = 'tmp' OR fecha > '2020-01-01';"
  - "DELETE FROM archivos WHERE tipo IN ('tmp') AND fecha < '2020-01-01';"
respuesta: "DELETE FROM archivos WHERE tipo = 'tmp' OR fecha < '2020-01-01';"
pasos:
  - "Usar OR para unir condiciones alternativas"
  - "Cualquiera de las condiciones debe cumplirse"
explicacion: OR elimina si se cumple la primera condición O la segunda.
```

### 25 — Insertar con valor calculado
```yaml
metadata:
  materia: "sql"
  tema: "insert-update-delete"
  nivel: "basico"
  tags: ["insert", "calc"]
tipo: completar
enunciado: Para insertar en 'facturas' (subtotal, iva) donde iva es el 21% del subtotal (ej: subtotal 100): INSERT INTO facturas (subtotal, iva) VALUES (100, _____________)
respuesta: (100 * 0.21)
respuestas_validas:
  - "(100 * 0.21)"
  - "(100*0.21)"
  - "( 100 * 0.21 )"
uno_de:
  - "(21)"
  - "(100 + 21)"
  - "(0.21)"
pasos:
  - "Usar paréntesis para la expresión aritmética en VALUES"
  - "El motor evalúa la expresión antes de insertar"
explicacion: SQL permite expresiones aritméticas directas en la cláusula VALUES.
```