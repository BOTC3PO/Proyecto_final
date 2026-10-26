# SQL — Subconsultas (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Qué es

```
metadata:
  materia: "sql"
  tema: "subconsultas"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Un `SELECT` dentro de otra consulta", "Una tabla temporal permanente", "Un índice", "Un tipo de `JOIN`"]
respuesta: "Un `SELECT` dentro de otra consulta"

enunciado: "¿Qué es una subconsulta?"

explicacion: |
  Se escribe entre paréntesis.
```

### 2 — Qué se evalúa primero

```
metadata:
  materia: "sql"
  tema: "subconsultas"
  nivel: "basico"
  tags: ["orden"]

tipo: mc
opciones_explicitas: ["El promedio de la subconsulta", "La condición `edad >`", "El `FROM` externo", "Nada: es un error"]
respuesta: "El promedio de la subconsulta"

enunciado: "En `WHERE edad > (SELECT AVG(edad) FROM alumnos)`, ¿qué se calcula primero?"

explicacion: |
  El resultado de la subconsulta se usa luego en la comparación.
```

### 3 — Un valor

```
metadata:
  materia: "sql"
  tema: "subconsultas"
  nivel: "basico"
  tags: ["escalar"]

tipo: mc
opciones_explicitas: ["Un único valor (una fila y una columna)", "Una tabla", "Una lista", "Nada"]
respuesta: "Un único valor (una fila y una columna)"

enunciado: "¿Qué debe devolver una subconsulta usada con `>`?"

explicacion: |
  Si devuelve varias filas, da error.
```

### 4 — Con IN

```
metadata:
  materia: "sql"
  tema: "subconsultas"
  nivel: "basico"
  tags: ["in"]

tipo: mc
opciones_explicitas: ["Deja los cursos cuyo id aparece en `alumnos`", "Borra los cursos", "Une tablas sin condición", "Cuenta cursos"]
respuesta: "Deja los cursos cuyo id aparece en `alumnos`"

enunciado: "¿Qué hace `WHERE id IN (SELECT id_curso FROM alumnos)`?"

explicacion: |
  Selecciona los cursos que tienen al menos un alumno.
```

### 5 — EXISTS

```
metadata:
  materia: "sql"
  tema: "subconsultas"
  nivel: "intermedio"
  tags: ["exists"]

tipo: mc
opciones_explicitas: ["Es verdadero si la subconsulta devuelve al menos una fila", "Cuenta las filas", "Es verdadero si no devuelve filas", "Devuelve el primer valor"]
respuesta: "Es verdadero si la subconsulta devuelve al menos una fila"

enunciado: "¿Qué hace `EXISTS (subconsulta)`?"

explicacion: |
  No importa qué columnas se seleccionen; por eso se suele escribir `SELECT 1`.
```

### 6 — Correlacionada

```
metadata:
  materia: "sql"
  tema: "subconsultas"
  nivel: "avanzado"
  tags: ["correlacionada"]

tipo: mc
opciones_explicitas: ["Una que usa columnas de la consulta externa y se evalúa por cada fila de ella", "Una que no tiene `WHERE`", "Una con `JOIN` dentro", "Una que devuelve un solo valor"]
respuesta: "Una que usa columnas de la consulta externa y se evalúa por cada fila de ella"

enunciado: "¿Qué es una subconsulta correlacionada?"

explicacion: |
  Se reconoce porque referencia un alias de la consulta externa.
```

### 7 — Cursos vacíos

```
metadata:
  materia: "sql"
  tema: "subconsultas"
  nivel: "intermedio"
  tags: ["not exists"]

tipo: mc
opciones_explicitas: ["`WHERE NOT EXISTS (SELECT 1 FROM alumnos a WHERE a.id_curso = c.id)`", "`WHERE EXISTS (SELECT 1 FROM cursos)`", "`WHERE id > 0`", "`GROUP BY id_curso`"]
respuesta: "`WHERE NOT EXISTS (SELECT 1 FROM alumnos a WHERE a.id_curso = c.id)`"

enunciado: "¿Qué consulta devuelve los cursos sin alumnos?"

explicacion: |
  Para cada curso se busca si hay algún alumno asociado.
```

### 8 — NOT IN y NULL

```
metadata:
  materia: "sql"
  tema: "subconsultas"
  nivel: "avanzado"
  tags: ["null", "not in"]

tipo: mc
opciones_explicitas: ["No devuelve ninguna fila", "Devuelve todas", "Devuelve las filas con `NULL`", "Da un error"]
respuesta: "No devuelve ninguna fila"

enunciado: "¿Qué pasa con `x NOT IN (subconsulta)` si la subconsulta devuelve algún `NULL`?"

explicacion: |
  La comparación con `NULL` es "desconocido", así que nunca se cumple. `NOT EXISTS` es más seguro.
```

### 9 — En el FROM

```
metadata:
  materia: "sql"
  tema: "subconsultas"
  nivel: "basico"
  tags: ["from"]

tipo: mc
opciones_explicitas: ["Un alias", "Un `GROUP BY`", "Un `LIMIT`", "Un `NULL`"]
respuesta: "Un alias"

enunciado: "Una subconsulta en el `FROM`, ¿qué requiere?"

explicacion: |
  Se comporta como una tabla temporal y necesita nombre.
```

### 10 — CTE

```
metadata:
  materia: "sql"
  tema: "subconsultas"
  nivel: "intermedio"
  tags: ["cte"]

tipo: mc
opciones_explicitas: ["Una subconsulta con nombre, definida antes de la consulta principal, para leerla mejor", "Un tipo de índice", "Una tabla permanente", "Una restricción"]
respuesta: "Una subconsulta con nombre, definida antes de la consulta principal, para leerla mejor"

enunciado: "¿Qué es una CTE (`WITH nombre AS (...)`)?"

explicacion: |
  Hace más legibles las consultas con varias subconsultas.
```

### 11 — Varias filas

```
metadata:
  materia: "sql"
  tema: "subconsultas"
  nivel: "intermedio"
  tags: ["error"]

tipo: mc
opciones_explicitas: ["`=` espera un solo valor y la subconsulta devuelve varios", "Falta `GROUP BY`", "`edad` no existe", "`3A` no es texto"]
respuesta: "`=` espera un solo valor y la subconsulta devuelve varios"

enunciado: "`WHERE edad = (SELECT edad FROM alumnos WHERE curso = '3A')` falla si en 3A hay varios alumnos. ¿Por qué?"

explicacion: |
  Se resuelve con `IN` o con una agregación.
```

### 12 — Elegir

```
metadata:
  materia: "sql"
  tema: "subconsultas"
  nivel: "intermedio"
  tags: ["join"]

tipo: mc
opciones_explicitas: ["Cuando se necesitan columnas de ambas tablas en el resultado", "Nunca", "Cuando se necesita solo un promedio", "Cuando hay `NULL`"]
respuesta: "Cuando se necesitan columnas de ambas tablas en el resultado"

enunciado: "¿Cuándo es natural usar un `JOIN` y no una subconsulta?"

explicacion: |
  Si solo se necesita un dato de apoyo, la subconsulta suele ser más clara.
```

### 13 — Dato de apoyo

```
metadata:
  materia: "sql"
  tema: "subconsultas"
  nivel: "basico"
  tags: ["uso"]

tipo: mc
opciones_explicitas: ["Alumnos con edad superior al promedio general", "Nombre del alumno y nombre de su curso", "Alumnos y sus notas", "Todas las tablas combinadas"]
respuesta: "Alumnos con edad superior al promedio general"

enunciado: "¿Qué consulta usa un dato de apoyo?"

explicacion: |
  El promedio se calcula aparte y se compara; no hace falta mostrarlo.
```

### 14 — Mayor que todos

```
metadata:
  materia: "sql"
  tema: "subconsultas"
  nivel: "avanzado"
  tags: ["all"]

tipo: mc
opciones_explicitas: ["Compara con cada edad de 3A: vale si es mayor que todas", "Si es mayor que alguna", "Si es igual a todas", "Lista las edades"]
respuesta: "Compara con cada edad de 3A: vale si es mayor que todas"

enunciado: "¿Qué hace `edad > ALL (SELECT edad FROM alumnos WHERE curso = '3A')`?"

explicacion: |
  `ANY` (o `SOME`) vale si se cumple con alguna.
```

### 15 — Subconsulta en SELECT

```
metadata:
  materia: "sql"
  tema: "subconsultas"
  nivel: "intermedio"
  tags: ["select"]

tipo: mc
opciones_explicitas: ["Muestra cada curso con el total de alumnos como una columna extra", "Es un error", "Cuenta los cursos", "Borra alumnos"]
respuesta: "Muestra cada curso con el total de alumnos como una columna extra"

enunciado: "¿Qué hace `SELECT nombre, (SELECT COUNT(*) FROM alumnos) AS total FROM cursos`?"

explicacion: |
  Una subconsulta de un valor puede usarse como columna.
```

### 16 — Legibilidad

```
metadata:
  materia: "sql"
  tema: "subconsultas"
  nivel: "basico"
  tags: ["legibilidad"]

tipo: mc
opciones_explicitas: ["Reescribirla con CTE o `JOIN` para que se lea mejor", "Aumentar los paréntesis", "Quitar los alias", "Dejarla como está siempre"]
respuesta: "Reescribirla con CTE o `JOIN` para que se lea mejor"

enunciado: "Si una consulta tiene tres subconsultas anidadas, ¿qué conviene hacer?"

explicacion: |
  Una consulta que nadie entiende es una consulta que nadie puede corregir.
```

### 17 — Rendimiento

```
metadata:
  materia: "sql"
  tema: "subconsultas"
  nivel: "avanzado"
  tags: ["rendimiento"]

tipo: mc
opciones_explicitas: ["Evaluarse para cada fila y volverse lenta", "Borrar datos", "Perder los `NULL`", "Cambiar los tipos"]
respuesta: "Evaluarse para cada fila y volverse lenta"

enunciado: "¿Qué riesgo puede tener una subconsulta correlacionada en una tabla enorme?"

explicacion: |
  Los motores modernos suelen optimizarla; si no, se prueba con un `JOIN` o con `EXPLAIN`.
```

### 18 — Falta alias

```
metadata:
  materia: "sql"
  tema: "subconsultas"
  nivel: "intermedio"
  tags: ["alias"]

tipo: mc
opciones_explicitas: ["Un alias para la subconsulta", "Un `LIMIT`", "Un `GROUP BY`", "Un índice"]
respuesta: "Un alias para la subconsulta"

enunciado: "`SELECT * FROM (SELECT curso FROM alumnos)` da error en muchos motores. ¿Qué falta?"

explicacion: |
  Una subconsulta en el `FROM` necesita nombre: `... ) AS t`.
```

### 19 — Resultado

```
metadata:
  materia: "sql"
  tema: "subconsultas"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf
respuesta: falso

enunciado: "Una subconsulta puede usarse para modificar la tabla externa directamente."

explicacion: |
  Una subconsulta solo devuelve datos. Para modificar se usa `UPDATE`/`DELETE` (que pueden contener subconsultas en el `WHERE`).
```

### 20 — Paréntesis

```
metadata:
  materia: "sql"
  tema: "subconsultas"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf
respuesta: verdadero

enunciado: "Una subconsulta se escribe siempre entre paréntesis."

explicacion: |
  Los paréntesis la delimitan dentro de la consulta externa.
```

