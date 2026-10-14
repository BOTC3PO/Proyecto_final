# SQL — Agregaciones y GROUP BY (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Contar filas

```
metadata:
  materia: "sql"
  tema: "agregaciones_group_by"
  nivel: "basico"
  tags: ["count"]

tipo: mc
opciones_explicitas: ["Cuenta las filas de la tabla", "Suma las edades", "Lista los alumnos", "Borra duplicados"]
respuesta: "Cuenta las filas de la tabla"

enunciado: "¿Qué hace `SELECT COUNT(*) FROM alumnos`?"

explicacion: |
  Devuelve un solo número.
```

### 2 — COUNT y NULL

```
metadata:
  materia: "sql"
  tema: "agregaciones_group_by"
  nivel: "intermedio"
  tags: ["count", "null"]

tipo: mc
opciones_explicitas: ["`COUNT(telefono)` no cuenta las filas donde telefono es NULL", "Ninguna", "`COUNT(*)` ignora nulos", "`COUNT(telefono)` suma teléfonos"]
respuesta: "`COUNT(telefono)` no cuenta las filas donde telefono es NULL"

enunciado: "¿Qué diferencia hay entre `COUNT(*)` y `COUNT(telefono)`?"

explicacion: |
  `COUNT(columna)` cuenta solo valores no nulos.
```

### 3 — Promedio

```
metadata:
  materia: "sql"
  tema: "agregaciones_group_by"
  nivel: "basico"
  tags: ["avg"]

tipo: mc
opciones_explicitas: ["AVG", "MEAN", "MID", "SUMA"]
respuesta: "AVG"

enunciado: "¿Qué función calcula el promedio?"

explicacion: |
  `AVG(col)` ignora los `NULL`.
```

### 4 — Mínimo y máximo

```
metadata:
  materia: "sql"
  tema: "agregaciones_group_by"
  nivel: "basico"
  tags: ["max"]

tipo: mc
opciones_explicitas: ["La mayor edad", "La edad media", "La cantidad de edades", "La menor edad"]
respuesta: "La mayor edad"

enunciado: "¿Qué devuelve `SELECT MAX(edad) FROM alumnos`?"

explicacion: |
  `MIN` devuelve la menor.
```

### 5 — Distintos

```
metadata:
  materia: "sql"
  tema: "agregaciones_group_by"
  nivel: "intermedio"
  tags: ["distinct"]

tipo: mc
opciones_explicitas: ["Cuántos cursos diferentes hay", "Todas las filas", "Los cursos repetidos", "Los alumnos de un curso"]
respuesta: "Cuántos cursos diferentes hay"

enunciado: "¿Qué cuenta `COUNT(DISTINCT curso)`?"

explicacion: |
  Cada valor distinto se cuenta una vez.
```

### 6 — Agrupar

```
metadata:
  materia: "sql"
  tema: "agregaciones_group_by"
  nivel: "basico"
  tags: ["group"]

tipo: mc
opciones_explicitas: ["Agrupa las filas con el mismo curso y da un resultado por grupo", "Ordena por curso", "Filtra el curso", "Borra los cursos repetidos"]
respuesta: "Agrupa las filas con el mismo curso y da un resultado por grupo"

enunciado: "¿Qué hace `GROUP BY curso`?"

explicacion: |
  Se usa junto con funciones de agregación.
```

### 7 — Una fila por grupo

```
metadata:
  materia: "sql"
  tema: "agregaciones_group_by"
  nivel: "basico"
  tags: ["group"]

tipo: mc
opciones_explicitas: ["5", "1", "El total de alumnos", "0"]
respuesta: "5"

enunciado: "`SELECT curso, COUNT(*) FROM alumnos GROUP BY curso`, con 5 cursos distintos, ¿cuántas filas devuelve?"

explicacion: |
  Una fila por cada valor distinto de `curso`.
```

### 8 — Columna sin agrupar

```
metadata:
  materia: "sql"
  tema: "agregaciones_group_by"
  nivel: "intermedio"
  tags: ["group"]

tipo: mc
opciones_explicitas: ["`nombre` no está en el `GROUP BY` ni es una agregación", "`COUNT(*)` no se puede", "`curso` está mal", "Ninguno"]
respuesta: "`nombre` no está en el `GROUP BY` ni es una agregación"

enunciado: "`SELECT curso, nombre, COUNT(*) FROM alumnos GROUP BY curso` ¿qué problema tiene?"

explicacion: |
  Cada columna del `SELECT` debe estar agrupada o agregada (la mayoría de los motores da error).
```

### 9 — HAVING

```
metadata:
  materia: "sql"
  tema: "agregaciones_group_by"
  nivel: "basico"
  tags: ["having"]

tipo: mc
opciones_explicitas: ["Los grupos, después de agrupar", "Las filas antes de agrupar", "Las columnas", "Las tablas"]
respuesta: "Los grupos, después de agrupar"

enunciado: "¿Qué filtra `HAVING`?"

explicacion: |
  Permite condiciones sobre agregaciones, como `COUNT(*) > 20`.
```

### 10 — WHERE

```
metadata:
  materia: "sql"
  tema: "agregaciones_group_by"
  nivel: "basico"
  tags: ["where"]

tipo: mc
opciones_explicitas: ["Las filas, antes de agrupar", "Los grupos", "Las agregaciones", "Las columnas"]
respuesta: "Las filas, antes de agrupar"

enunciado: "¿Qué filtra `WHERE`?"

explicacion: |
  No puede usar funciones de agregación.
```

### 11 — Dónde va

```
metadata:
  materia: "sql"
  tema: "agregaciones_group_by"
  nivel: "intermedio"
  tags: ["having"]

tipo: mc
opciones_explicitas: ["`HAVING COUNT(*) > 20`", "`WHERE COUNT(*) > 20`", "`LIMIT COUNT(*) > 20`", "`ORDER BY COUNT(*) > 20`"]
respuesta: "`HAVING COUNT(*) > 20`"

enunciado: "Para quedarse con los cursos de más de 20 alumnos, ¿qué se escribe?"

explicacion: |
  Una condición sobre un agregado va en `HAVING`.
```

### 12 — Primero filas

```
metadata:
  materia: "sql"
  tema: "agregaciones_group_by"
  nivel: "intermedio"
  tags: ["orden"]

tipo: mc
opciones_explicitas: ["`WHERE`", "`HAVING`", "`GROUP BY`", "`SELECT`"]
respuesta: "`WHERE`"

enunciado: "En una consulta con `WHERE`, `GROUP BY` y `HAVING`, ¿qué se aplica primero?"

explicacion: |
  Orden lógico: `FROM`, `WHERE`, `GROUP BY`, `HAVING`, `SELECT`, `ORDER BY`.
```

### 13 — Dos columnas

```
metadata:
  materia: "sql"
  tema: "agregaciones_group_by"
  nivel: "basico"
  tags: ["group"]

tipo: mc
opciones_explicitas: ["Hace un grupo por cada combinación de curso y turno", "Dos consultas", "Agrupa solo por curso", "Es un error"]
respuesta: "Hace un grupo por cada combinación de curso y turno"

enunciado: "¿Qué hace `GROUP BY curso, turno`?"

explicacion: |
  Se pueden agrupar varias columnas.
```

### 14 — Suma

```
metadata:
  materia: "sql"
  tema: "agregaciones_group_by"
  nivel: "basico"
  tags: ["sum"]

tipo: mc
opciones_explicitas: ["La suma de todos los valores de `total`", "La cantidad de ventas", "El mayor total", "El promedio"]
respuesta: "La suma de todos los valores de `total`"

enunciado: "¿Qué devuelve `SELECT SUM(total) FROM ventas`?"

explicacion: |
  `SUM` ignora los `NULL`.
```

### 15 — Suma vacía

```
metadata:
  materia: "sql"
  tema: "agregaciones_group_by"
  nivel: "avanzado"
  tags: ["null", "sum"]

tipo: mc
opciones_explicitas: ["`NULL`", "0", "Un error", "1"]
respuesta: "`NULL`"

enunciado: "¿Qué devuelve `SUM(x)` si no hay filas?"

explicacion: |
  Para obtener 0 se usa `COALESCE(SUM(x), 0)`.
```

### 16 — Alias

```
metadata:
  materia: "sql"
  tema: "agregaciones_group_by"
  nivel: "basico"
  tags: ["alias"]

tipo: mc
opciones_explicitas: ["Para darle un nombre claro a la columna del resultado", "Para contar dos veces", "Para filtrar", "Para ordenar"]
respuesta: "Para darle un nombre claro a la columna del resultado"

enunciado: "¿Para qué sirve `COUNT(*) AS cantidad`?"

explicacion: |
  Sin alias, el nombre depende del motor.
```

### 17 — Cursos vacíos

```
metadata:
  materia: "sql"
  tema: "agregaciones_group_by"
  nivel: "avanzado"
  tags: ["left", "count"]

tipo: mc
opciones_explicitas: ["Para que un curso sin alumnos dé 0 y no 1", "Porque `*` no funciona", "Para ordenar", "Es lo mismo"]
respuesta: "Para que un curso sin alumnos dé 0 y no 1"

enunciado: "Con `LEFT JOIN`, ¿por qué se cuenta `COUNT(a.id)` y no `COUNT(*)`?"

explicacion: |
  La fila del curso sin pareja existe (con `NULL` en `a.id`): `COUNT(*)` la contaría.
```

### 18 — Promedio de promedios

```
metadata:
  materia: "sql"
  tema: "agregaciones_group_by"
  nivel: "avanzado"
  tags: ["promedio"]

tipo: mc
opciones_explicitas: ["No: es 6,2, porque hay que ponderar por la cantidad de alumnos", "Sí, es 7", "Es 14", "Es 8"]
respuesta: "No: es 6,2, porque hay que ponderar por la cantidad de alumnos"

enunciado: "Si un curso A (10 alumnos) tiene promedio 8 y B (90 alumnos) tiene 6, ¿el promedio general es 7?"

explicacion: |
  (10·8 + 90·6) / 100 = 6,2. Promediar los promedios ignora los tamaños.
```

### 19 — Where con agregados

```
metadata:
  materia: "sql"
  tema: "agregaciones_group_by"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf
respuesta: falso

enunciado: "Se puede escribir `WHERE COUNT(*) > 5`."

explicacion: |
  Los agregados no se pueden usar en `WHERE`: se usa `HAVING`.
```

### 20 — Orden

```
metadata:
  materia: "sql"
  tema: "agregaciones_group_by"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf
respuesta: verdadero

enunciado: "`ORDER BY` se puede aplicar sobre una agregación, por ejemplo `ORDER BY COUNT(*) DESC`."

explicacion: |
  Es común para obtener un ranking.
```

