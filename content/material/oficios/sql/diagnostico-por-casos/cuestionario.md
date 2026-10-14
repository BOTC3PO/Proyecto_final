# SQL — Diagnóstico de consultas por casos (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Primer paso

```
metadata:
  materia: "sql"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["metodo"]

tipo: mc
opciones_explicitas: ["Leer el mensaje completo", "Reiniciar el servidor", "Borrar la tabla", "Reescribir todo"]
respuesta: "Leer el mensaje completo"

enunciado: "Una consulta falla con un mensaje de error. ¿Qué se hace primero?"

explicacion: |
  Suele indicar el tipo de error y la posición.
```

### 2 — Reducir

```
metadata:
  materia: "sql"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["metodo"]

tipo: mc
opciones_explicitas: ["Probarla por partes: primero `FROM` y `JOIN`, luego `WHERE`, etc.", "Probar con otro motor", "Agregar `DISTINCT` siempre", "Borrar los índices"]
respuesta: "Probarla por partes: primero `FROM` y `JOIN`, luego `WHERE`, etc."

enunciado: "Una consulta larga da un resultado raro. ¿Cuál es una buena estrategia?"

explicacion: |
  Aislar la parte que falla ahorra mucho tiempo.
```

### 3 — Columna ambigua

```
metadata:
  materia: "sql"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["ambiguo"]

tipo: mc
opciones_explicitas: ["Dos tablas del `JOIN` tienen `id` y falta prefijar con el alias", "Falta un índice", "El `id` es texto", "El `WHERE` está mal"]
respuesta: "Dos tablas del `JOIN` tienen `id` y falta prefijar con el alias"

enunciado: "`column reference \"id\" is ambiguous`. ¿Qué causa es probable?"

explicacion: |
  Se escribe `a.id` o `c.id`.
```

### 4 — Group by

```
metadata:
  materia: "sql"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["group"]

tipo: mc
opciones_explicitas: ["Hay una columna en el `SELECT` que ni se agrupa ni se agrega", "Que la tabla no existe", "Que falta `HAVING`", "Que hay un `NULL`"]
respuesta: "Hay una columna en el `SELECT` que ni se agrupa ni se agrega"

enunciado: "`column \"nombre\" must appear in the GROUP BY clause or be used in an aggregate function`. ¿Qué indica?"

explicacion: |
  Se agrega al `GROUP BY` o se aplica una función de agregación.
```

### 5 — Subconsulta

```
metadata:
  materia: "sql"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["subconsulta"]

tipo: mc
opciones_explicitas: ["Usando `IN` (o agregando una agregación) en lugar de `=`", "Agregando `LIMIT 0`", "Borrando el `WHERE`", "Ordenando"]
respuesta: "Usando `IN` (o agregando una agregación) en lugar de `=`"

enunciado: "`subquery returns more than one row`. ¿Cómo se corrige?"

explicacion: |
  Con `=` solo puede haber un valor.
```

### 6 — Demasiadas filas

```
metadata:
  materia: "sql"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["join"]

tipo: mc
opciones_explicitas: ["La condición `ON`", "El tamaño del disco", "El tipo de la clave primaria", "El orden de las columnas"]
respuesta: "La condición `ON`"

enunciado: "Una consulta con un `JOIN` devuelve muchas más filas de lo esperado. ¿Qué se revisa?"

explicacion: |
  Un `ON` faltante o mal escrito produce un producto cartesiano.
```

### 7 — Pocas filas

```
metadata:
  materia: "sql"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["join"]

tipo: mc
opciones_explicitas: ["Hay alumnos sin curso (`NULL`) y el `INNER JOIN` los descarta", "Falta un índice", "El `JOIN` no filtra", "Los cursos están ordenados"]
respuesta: "Hay alumnos sin curso (`NULL`) y el `INNER JOIN` los descarta"

enunciado: "Faltan alumnos en el resultado de `alumnos JOIN cursos`. ¿Cuál es una causa probable?"

explicacion: |
  Se prueba con `LEFT JOIN` desde `alumnos`.
```

### 8 — Igual a NULL

```
metadata:
  materia: "sql"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["null"]

tipo: mc
opciones_explicitas: ["`WHERE telefono IS NULL`", "`WHERE telefono == NULL`", "`WHERE telefono = ''`", "`WHERE telefono = 0`"]
respuesta: "`WHERE telefono IS NULL`"

enunciado: "`WHERE telefono = NULL` no devuelve nada. ¿Cómo se corrige?"

explicacion: |
  Ninguna comparación con `=` contra `NULL` da verdadero.
```

### 9 — Update masivo

```
metadata:
  materia: "sql"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["update"]

tipo: mc
opciones_explicitas: ["Faltó el `WHERE`", "Falta un índice", "Falta `COMMIT`", "Hay que usar `SET` dos veces"]
respuesta: "Faltó el `WHERE`"

enunciado: "Se ejecutó `UPDATE productos SET precio = 0` y quedó todo en cero. ¿Qué falló?"

explicacion: |
  Si no hay una copia o una transacción abierta, recuperarlo es difícil.
```

### 10 — Recuperar

```
metadata:
  materia: "sql"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["rollback"]

tipo: mc
opciones_explicitas: ["Ejecutar `ROLLBACK`", "Ejecutar `COMMIT`", "Reiniciar la computadora", "Borrar la tabla"]
respuesta: "Ejecutar `ROLLBACK`"

enunciado: "Si se hizo ese `UPDATE` dentro de una transacción abierta, ¿qué se puede hacer?"

explicacion: |
  Es una razón para trabajar con transacciones en cambios masivos.
```

### 11 — Clave foránea

```
metadata:
  materia: "sql"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["fk"]

tipo: mc
opciones_explicitas: ["El `id_cliente` no existe en `clientes`", "La tabla es muy chica", "Falta un índice", "El pedido es muy viejo"]
respuesta: "El `id_cliente` no existe en `clientes`"

enunciado: "`violates foreign key constraint` al insertar un pedido. ¿Cuál es la causa más probable?"

explicacion: |
  La clave foránea exige que el valor exista en la tabla referenciada.
```

### 12 — Borrar referenciada

```
metadata:
  materia: "sql"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["fk"]

tipo: mc
opciones_explicitas: ["Hay alumnos que referencian ese curso", "El curso no existe", "Falta el `COMMIT`", "Hay un índice repetido"]
respuesta: "Hay alumnos que referencian ese curso"

enunciado: "`DELETE FROM cursos WHERE id = 3` falla con error de clave foránea. ¿Por qué?"

explicacion: |
  Se corrige moviendo o borrando antes las filas dependientes (o con `ON DELETE` según el diseño).
```

### 13 — Duplicado

```
metadata:
  materia: "sql"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["unique"]

tipo: mc
opciones_explicitas: ["Ya existe una fila con ese valor único (correo o clave)", "La tabla está llena", "Falta `ORDER BY`", "El valor es `NULL`"]
respuesta: "Ya existe una fila con ese valor único (correo o clave)"

enunciado: "`duplicate key value violates unique constraint` al registrar un usuario. ¿Qué pasó?"

explicacion: |
  Se maneja en la aplicación mostrando un mensaje claro.
```

### 14 — Deadlock

```
metadata:
  materia: "sql"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["deadlock"]

tipo: mc
opciones_explicitas: ["Reintentar la transacción y revisar el orden en que se tocan las tablas", "Desactivar las transacciones", "Borrar los índices", "Ignorarlo siempre"]
respuesta: "Reintentar la transacción y revisar el orden en que se tocan las tablas"

enunciado: "`deadlock detected`. ¿Qué conviene hacer?"

explicacion: |
  El motor abortó una de las dos transacciones.
```

### 15 — Consulta lenta

```
metadata:
  materia: "sql"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["explain"]

tipo: mc
opciones_explicitas: ["Ver su plan con `EXPLAIN`", "Agregar índices al azar", "Reiniciar el servidor", "Aumentar el `LIMIT`"]
respuesta: "Ver su plan con `EXPLAIN`"

enunciado: "¿Cuál es el primer paso para investigar una consulta lenta?"

explicacion: |
  Se optimiza midiendo.
```

### 16 — Función en WHERE

```
metadata:
  materia: "sql"
  tema: "diagnostico_por_casos"
  nivel: "avanzado"
  tags: ["indice"]

tipo: mc
opciones_explicitas: ["La función sobre la columna impide usar el índice", "`YEAR` no existe", "El índice está roto", "`2026` es un texto"]
respuesta: "La función sobre la columna impide usar el índice"

enunciado: "`WHERE YEAR(fecha) = 2026` es lenta en una tabla enorme con índice en `fecha`. ¿Por qué?"

explicacion: |
  Se reescribe con un rango: `fecha >= '2026-01-01' AND fecha < '2027-01-01'`.
```

### 17 — Left como inner

```
metadata:
  materia: "sql"
  tema: "diagnostico_por_casos"
  nivel: "avanzado"
  tags: ["left"]

tipo: mc
opciones_explicitas: ["La condición sobre la tabla derecha en el `WHERE` descarta los `NULL`", "`LEFT` no existe", "Falta `GROUP BY`", "Hay un índice mal"]
respuesta: "La condición sobre la tabla derecha en el `WHERE` descarta los `NULL`"

enunciado: "Un `LEFT JOIN` con `WHERE b.estado = 'activo'` no muestra las filas sin pareja. ¿Qué pasó?"

explicacion: |
  Esa condición debe ir en el `ON`.
```

### 18 — Antes del cambio

```
metadata:
  materia: "sql"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["seguridad"]

tipo: mc
opciones_explicitas: ["Un `SELECT` con la misma condición, dentro de una transacción", "Nada", "Un `DROP`", "Un `TRUNCATE`"]
respuesta: "Un `SELECT` con la misma condición, dentro de una transacción"

enunciado: "¿Qué se hace antes de ejecutar un `DELETE` con condición en datos reales?"

explicacion: |
  Y se comprueba cuántas filas afectaría.
```

### 19 — Contar

```
metadata:
  materia: "sql"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["verificacion"]

tipo: mc
opciones_explicitas: ["Para comprobar que la cantidad de filas cambió como se esperaba", "Para ordenar", "Para crear un índice", "Para renombrar"]
respuesta: "Para comprobar que la cantidad de filas cambió como se esperaba"

enunciado: "¿Para qué sirve ejecutar `SELECT COUNT(*)` antes y después de un cambio masivo?"

explicacion: |
  Es una verificación simple y muy útil.
```

### 20 — Una cosa a la vez

```
metadata:
  materia: "sql"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["metodo"]

tipo: mc
opciones_explicitas: ["Cambiar una cosa, probar, y recién después la otra", "Cambiar las dos y probar", "Cambiar todo", "No cambiar nada"]
respuesta: "Cambiar una cosa, probar, y recién después la otra"

enunciado: "Se sospecha de dos causas. ¿Cuál es la mejor práctica?"

explicacion: |
  Cambiar una sola cosa permite saber qué arregló el problema.
```

