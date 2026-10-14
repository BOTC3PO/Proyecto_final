# SQL — JOIN (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Para qué

```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Para combinar filas de varias tablas según una condición", "Para borrar tablas", "Para ordenar filas", "Para crear una tabla"]
respuesta: "Para combinar filas de varias tablas según una condición"

enunciado: "¿Para qué sirve un `JOIN`?"

explicacion: |
  Une datos relacionados que están en tablas distintas.
```

### 2 — Qué se compara

```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "basico"
  tags: ["on"]

tipo: mc
opciones_explicitas: ["Una clave foránea con la clave primaria que referencia", "Dos columnas de texto cualquiera", "El nombre de ambas tablas", "Dos columnas de otra tabla"]
respuesta: "Una clave foránea con la clave primaria que referencia"

enunciado: "¿Qué columnas se suelen comparar en el `ON` de un `JOIN`?"

explicacion: |
  Es la relación que une las tablas.
```

### 3 — INNER JOIN

```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "basico"
  tags: ["inner"]

tipo: mc
opciones_explicitas: ["Solo las filas con correspondencia en ambas tablas", "Todas las filas de la izquierda", "Todas las de ambas tablas", "Solo las filas sin correspondencia"]
respuesta: "Solo las filas con correspondencia en ambas tablas"

enunciado: "¿Qué devuelve un `INNER JOIN`?"

explicacion: |
  Las filas sin pareja no aparecen.
```

### 4 — LEFT JOIN

```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "basico"
  tags: ["left"]

tipo: mc
opciones_explicitas: ["Todas las filas de la tabla izquierda, con `NULL` donde no hay pareja", "Solo las que tienen pareja", "Solo las de la derecha", "Un error si hay `NULL`"]
respuesta: "Todas las filas de la tabla izquierda, con `NULL` donde no hay pareja"

enunciado: "¿Qué devuelve un `LEFT JOIN`?"

explicacion: |
  Es útil para no perder filas de la tabla principal.
```

### 5 — Tablas con alias

```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "basico"
  tags: ["alias"]

tipo: mc
opciones_explicitas: ["Para acortar la consulta y distinguir columnas con el mismo nombre", "Porque es obligatorio", "Para cambiar el nombre de las tablas", "Para acelerar la consulta"]
respuesta: "Para acortar la consulta y distinguir columnas con el mismo nombre"

enunciado: "¿Por qué se usan alias como `a` y `c` en un `JOIN`?"

explicacion: |
  `a.id` y `c.id` son columnas distintas.
```

### 6 — Columna ambigua

```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "intermedio"
  tags: ["ambiguo"]

tipo: mc
opciones_explicitas: ["Da un error de columna ambigua", "Muestra las dos", "Elige la de la izquierda", "Muestra solo la de la derecha"]
respuesta: "Da un error de columna ambigua"

enunciado: "Si ambas tablas tienen una columna `id` y se escribe `SELECT id FROM a JOIN b ...`, ¿qué ocurre?"

explicacion: |
  Hay que usar `a.id` o `b.id`.
```

### 7 — JOIN sin tipo

```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "basico"
  tags: ["inner"]

tipo: mc
opciones_explicitas: ["`INNER JOIN`", "`LEFT JOIN`", "`FULL JOIN`", "`CROSS JOIN`"]
respuesta: "`INNER JOIN`"

enunciado: "¿A qué equivale un `JOIN` escrito sin aclarar el tipo?"

explicacion: |
  Es la forma abreviada del `INNER JOIN`.
```

### 8 — Cursos vacíos

```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "intermedio"
  tags: ["left", "null"]

tipo: mc
opciones_explicitas: ["`cursos LEFT JOIN alumnos` filtrando `WHERE alumnos.id IS NULL`", "`INNER JOIN` y `COUNT`", "`CROSS JOIN` y `DISTINCT`", "`DELETE FROM alumnos`"]
respuesta: "`cursos LEFT JOIN alumnos` filtrando `WHERE alumnos.id IS NULL`"

enunciado: "¿Qué consulta encuentra los cursos sin alumnos?"

explicacion: |
  Los cursos sin pareja quedan con `NULL` en las columnas de alumnos.
```

### 9 — Producto cartesiano

```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "intermedio"
  tags: ["cross"]

tipo: mc
opciones_explicitas: ["12 filas", "7 filas", "3 filas", "4 filas"]
respuesta: "12 filas"

enunciado: "¿Qué produce un `CROSS JOIN` entre una tabla de 3 filas y otra de 4?"

explicacion: |
  Combina cada fila de una con cada fila de la otra: 3 × 4.
```

### 10 — Resultado enorme

```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "intermedio"
  tags: ["diagnostico"]

tipo: mc
opciones_explicitas: ["La condición del `ON`", "El tamaño del disco", "El color del tema", "El nombre de la base"]
respuesta: "La condición del `ON`"

enunciado: "Un `JOIN` devuelve muchísimas más filas de lo esperado. ¿Qué se revisa primero?"

explicacion: |
  Un `ON` faltante o incorrecto genera un producto cartesiano.
```

### 11 — Where y left

```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "avanzado"
  tags: ["left", "where"]

tipo: mc
opciones_explicitas: ["Descarta las filas sin pareja, y el `LEFT` se comporta como `INNER`", "Nada", "Agrega más filas", "Da un error"]
respuesta: "Descarta las filas sin pareja, y el `LEFT` se comporta como `INNER`"

enunciado: "En un `LEFT JOIN`, `WHERE b.estado = 'activo'` (columna de la tabla derecha) ¿qué efecto tiene?"

explicacion: |
  Para mantener el `LEFT`, la condición debe ir en el `ON`.
```

### 12 — Filas repetidas

```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "intermedio"
  tags: ["cardinalidad"]

tipo: mc
opciones_explicitas: ["30, una por alumno", "1", "0", "Depende del orden"]
respuesta: "30, una por alumno"

enunciado: "Un curso tiene 30 alumnos. En un `JOIN` alumnos-cursos, ¿cuántas veces aparece el curso?"

explicacion: |
  En una relación uno-a-muchos, el lado "uno" se repite por cada fila del lado "muchos".
```

### 13 — Tres tablas

```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "basico"
  tags: ["varios"]

tipo: mc
opciones_explicitas: ["Encadenando dos `JOIN`, cada uno con su `ON`", "No se puede", "Con un `JOIN` solo", "Con `UNION`"]
respuesta: "Encadenando dos `JOIN`, cada uno con su `ON`"

enunciado: "¿Cómo se unen tres tablas?"

explicacion: |
  `A JOIN B ON ... JOIN C ON ...`.
```

### 14 — Autounión

```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "avanzado"
  tags: ["self"]

tipo: mc
opciones_explicitas: ["Unir una tabla consigo misma usando dos alias", "Unir tablas idénticas", "Un `JOIN` que borra duplicados", "Un `JOIN` sin `ON`"]
respuesta: "Unir una tabla consigo misma usando dos alias"

enunciado: "¿Qué es una autounión (self join)?"

explicacion: |
  Sirve, por ejemplo, para relacionar empleados con sus jefes.
```

### 15 — RIGHT

```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "intermedio"
  tags: ["right"]

tipo: mc
opciones_explicitas: ["`B LEFT JOIN A`", "`A INNER JOIN B`", "`A CROSS JOIN B`", "`B INNER JOIN A`"]
respuesta: "`B LEFT JOIN A`"

enunciado: "¿Qué equivale a `A RIGHT JOIN B`?"

explicacion: |
  Es el mismo resultado con las tablas intercambiadas.
```

### 16 — FULL

```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "avanzado"
  tags: ["full"]

tipo: mc
opciones_explicitas: ["Todas las filas de ambas tablas, con `NULL` donde no hay pareja", "Solo las coincidencias", "Solo la tabla izquierda", "Un producto cartesiano"]
respuesta: "Todas las filas de ambas tablas, con `NULL` donde no hay pareja"

enunciado: "¿Qué devuelve `FULL JOIN`?"

explicacion: |
  No todos los motores lo incluyen (MySQL, por ejemplo, no).
```

### 17 — ON vs WHERE

```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "avanzado"
  tags: ["on", "where"]

tipo: mc
opciones_explicitas: ["Ninguna en el resultado; es cuestión de claridad", "Siempre cambia el resultado", "`WHERE` no se puede", "`ON` no se puede"]
respuesta: "Ninguna en el resultado; es cuestión de claridad"

enunciado: "En un `INNER JOIN`, ¿cuál es la diferencia práctica entre poner una condición en `ON` o en `WHERE`?"

explicacion: |
  Con `LEFT JOIN` sí hay diferencia, por eso conviene separar "cómo se unen" (`ON`) de "qué se filtra" (`WHERE`).
```

### 18 — JOIN modifica

```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf
respuesta: falso

enunciado: "Un `JOIN` modifica las tablas originales."

explicacion: |
  Combina los datos en el resultado de la consulta; las tablas no cambian.
```

### 19 — Orden

```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf
respuesta: falso

enunciado: "En un `INNER JOIN`, el orden de las tablas cambia el conjunto de filas que se obtiene."

explicacion: |
  Es simétrico: el resultado es el mismo (el orden de las filas puede variar).
```

### 20 — Sin correspondencia

```
metadata:
  materia: "sql"
  tema: "join"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf
respuesta: falso

enunciado: "Un `INNER JOIN` muestra las filas que no tienen pareja."

explicacion: |
  Solo `LEFT`, `RIGHT` y `FULL` conservan las filas sin pareja.
```

