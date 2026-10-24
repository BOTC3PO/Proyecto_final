# SQL — SELECT y WHERE (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Columnas

```
metadata:
  materia: "sql"
  tema: "select_y_where"
  nivel: "basico"
  tags: ["select"]

tipo: mc
opciones_explicitas: ["SELECT", "FROM", "WHERE", "ORDER BY"]
respuesta: "SELECT"

enunciado: "¿Qué cláusula indica qué columnas se piden?"

explicacion: |
  `FROM` indica la tabla y `WHERE` filtra las filas.
```

### 2 — Todas las columnas

```
metadata:
  materia: "sql"
  tema: "select_y_where"
  nivel: "basico"
  tags: ["asterisco"]

tipo: mc
opciones_explicitas: ["Todas las columnas de todas las filas de la tabla", "Solo la primera fila", "Solo el nombre", "El número de filas"]
respuesta: "Todas las columnas de todas las filas de la tabla"

enunciado: "¿Qué trae `SELECT * FROM alumnos`?"

explicacion: |
  `*` significa "todas las columnas".
```

### 3 — Por qué nombrar

```
metadata:
  materia: "sql"
  tema: "select_y_where"
  nivel: "intermedio"
  tags: ["buenas practicas"]

tipo: mc
opciones_explicitas: ["Es más claro y no se rompe si cambian las columnas de la tabla", "Es más rápido siempre", "Es obligatorio", "`*` no funciona en programas"]
respuesta: "Es más claro y no se rompe si cambian las columnas de la tabla"

enunciado: "¿Por qué en un programa conviene nombrar las columnas en lugar de `SELECT *`?"

explicacion: |
  Si se agrega una columna, un `SELECT *` devuelve datos distintos a los esperados.
```

### 4 — Sin repetidos

```
metadata:
  materia: "sql"
  tema: "select_y_where"
  nivel: "basico"
  tags: ["distinct"]

tipo: mc
opciones_explicitas: ["Devuelve cada curso una sola vez", "Cuenta los cursos", "Borra los cursos repetidos de la tabla", "Ordena los cursos"]
respuesta: "Devuelve cada curso una sola vez"

enunciado: "¿Qué hace `SELECT DISTINCT curso FROM alumnos`?"

explicacion: |
  `DISTINCT` elimina duplicados del resultado, no de la tabla.
```

### 5 — Filtrar

```
metadata:
  materia: "sql"
  tema: "select_y_where"
  nivel: "basico"
  tags: ["where"]

tipo: mc
opciones_explicitas: ["WHERE", "FROM", "ORDER BY", "LIMIT"]
respuesta: "WHERE"

enunciado: "¿Qué cláusula filtra las filas?"

explicacion: |
  `WHERE` deja solo las filas que cumplen la condición.
```

### 6 — Texto

```
metadata:
  materia: "sql"
  tema: "select_y_where"
  nivel: "basico"
  tags: ["texto"]

tipo: mc
opciones_explicitas: ["WHERE curso = '3A'", "WHERE curso = 3A", "WHERE curso == \"3A\"", "WHERE curso is 3A"]
respuesta: "WHERE curso = '3A'"

enunciado: "¿Cómo se escribe correctamente la condición para el curso 3A?"

explicacion: |
  En SQL los textos van entre comillas simples y la igualdad es `=` (un solo signo).
```

### 7 — Distinto

```
metadata:
  materia: "sql"
  tema: "select_y_where"
  nivel: "basico"
  tags: ["operadores"]

tipo: mc
opciones_explicitas: ["<>", "=!", "!!", "=/="]
respuesta: "<>"

enunciado: "¿Cuál de estos es el operador estándar \"distinto de\"?"

explicacion: |
  `<>` es estándar; muchos motores aceptan además `!=`.
```

### 8 — Entre

```
metadata:
  materia: "sql"
  tema: "select_y_where"
  nivel: "intermedio"
  tags: ["between"]

tipo: mc
opciones_explicitas: ["Las edades 10, 11 y 12", "Solo la 11", "Las edades 10 y 11", "Las edades 11 y 12"]
respuesta: "Las edades 10, 11 y 12"

enunciado: "¿Qué incluye `edad BETWEEN 10 AND 12`?"

explicacion: |
  `BETWEEN` incluye ambos extremos.
```

### 9 — Lista

```
metadata:
  materia: "sql"
  tema: "select_y_where"
  nivel: "basico"
  tags: ["in"]

tipo: mc
opciones_explicitas: ["Cumple si el curso es 3A o 3B", "Cumple solo si es 3A y 3B a la vez", "Busca el texto '3A','3B'", "Es un error"]
respuesta: "Cumple si el curso es 3A o 3B"

enunciado: "¿Qué hace `curso IN ('3A','3B')`?"

explicacion: |
  Equivale a `curso = '3A' OR curso = '3B'`.
```

### 10 — Patrón

```
metadata:
  materia: "sql"
  tema: "select_y_where"
  nivel: "basico"
  tags: ["like"]

tipo: mc
opciones_explicitas: ["Los que empiezan con Ma, como Marta o Mateo", "Los que terminan con Ma", "Los que son exactamente Ma", "Los que contienen un % "]
respuesta: "Los que empiezan con Ma, como Marta o Mateo"

enunciado: "¿Qué nombres cumplen `nombre LIKE 'Ma%'`?"

explicacion: |
  `%` representa cualquier cantidad de caracteres (incluso ninguno).
```

### 11 — Un carácter

```
metadata:
  materia: "sql"
  tema: "select_y_where"
  nivel: "intermedio"
  tags: ["like"]

tipo: mc
opciones_explicitas: ["Exactamente un carácter cualquiera", "Cualquier cantidad de caracteres", "Un guion bajo literal siempre", "Un espacio"]
respuesta: "Exactamente un carácter cualquiera"

enunciado: "¿Qué representa `_` dentro de un patrón de `LIKE`?"

explicacion: |
  `'_a%'` busca textos cuya segunda letra es a.
```

### 12 — Nulos

```
metadata:
  materia: "sql"
  tema: "select_y_where"
  nivel: "basico"
  tags: ["null"]

tipo: mc
opciones_explicitas: ["WHERE telefono IS NULL", "WHERE telefono = NULL", "WHERE telefono = ''", "WHERE telefono == 0"]
respuesta: "WHERE telefono IS NULL"

enunciado: "¿Cómo se buscan los alumnos sin teléfono (campo vacío)?"

explicacion: |
  `NULL` no se compara con `=`: se usa `IS NULL`.
```

### 13 — Qué es NULL

```
metadata:
  materia: "sql"
  tema: "select_y_where"
  nivel: "basico"
  tags: ["null"]

tipo: mc
opciones_explicitas: ["Valor desconocido o ausente, que no es cero ni texto vacío", "El número cero", "Un texto vacío", "Falso"]
respuesta: "Valor desconocido o ausente, que no es cero ni texto vacío"

enunciado: "¿Qué significa `NULL`?"

explicacion: |
  Por eso `NULL = NULL` tampoco da verdadero.
```

### 14 — Prioridad

```
metadata:
  materia: "sql"
  tema: "select_y_where"
  nivel: "intermedio"
  tags: ["precedencia"]

tipo: mc
opciones_explicitas: ["`AND`", "`OR`", "Ninguno: es un error", "El de la izquierda"]
respuesta: "`AND`"

enunciado: "En `WHERE a = 1 OR b = 2 AND c = 3`, ¿qué operador se evalúa primero?"

explicacion: |
  `AND` tiene más prioridad que `OR`; con dudas se usan paréntesis.
```

### 15 — Ordenar

```
metadata:
  materia: "sql"
  tema: "select_y_where"
  nivel: "basico"
  tags: ["order"]

tipo: mc
opciones_explicitas: ["Ordena de mayor a menor edad", "Ordena de menor a mayor", "Borra por edad", "Agrupa por edad"]
respuesta: "Ordena de mayor a menor edad"

enunciado: "¿Qué hace `ORDER BY edad DESC`?"

explicacion: |
  `ASC` (ascendente) es el orden por defecto.
```

### 16 — Sin ORDER BY

```
metadata:
  materia: "sql"
  tema: "select_y_where"
  nivel: "intermedio"
  tags: ["order"]

tipo: mc
opciones_explicitas: ["Nada: el orden no está garantizado", "Que sale por orden alfabético", "Que sale por orden de creación siempre", "Que sale por la clave primaria"]
respuesta: "Nada: el orden no está garantizado"

enunciado: "Si no se escribe `ORDER BY`, ¿qué se puede asegurar del orden de las filas?"

explicacion: |
  Si el orden importa, hay que pedirlo.
```

### 17 — Primeras filas

```
metadata:
  materia: "sql"
  tema: "select_y_where"
  nivel: "intermedio"
  tags: ["limit"]

tipo: mc
opciones_explicitas: ["LIMIT 3", "TOP 3", "FIRST 3", "MAX 3"]
respuesta: "LIMIT 3"

enunciado: "¿Cómo se piden las 3 primeras filas en PostgreSQL, MySQL o SQLite?"

explicacion: |
  SQL Server usa `TOP 3`; el estándar usa `FETCH FIRST 3 ROWS ONLY`. Es una diferencia entre motores.
```

### 18 — Alias

```
metadata:
  materia: "sql"
  tema: "select_y_where"
  nivel: "basico"
  tags: ["alias"]

tipo: mc
opciones_explicitas: ["Muestra la edad más uno con el nombre de columna `proxima`", "Cambia la edad en la tabla", "Es un error", "Cuenta alumnos"]
respuesta: "Muestra la edad más uno con el nombre de columna `proxima`"

enunciado: "¿Qué hace `SELECT edad + 1 AS proxima FROM alumnos`?"

explicacion: |
  `AS` pone un alias; el `SELECT` no modifica datos.
```

### 19 — Alias en WHERE

```
metadata:
  materia: "sql"
  tema: "select_y_where"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf
respuesta: falso

enunciado: "Un alias definido en el `SELECT` se puede usar en el `WHERE` de la misma consulta."

explicacion: |
  El `WHERE` se evalúa antes que el `SELECT`; el alias todavía no existe. Sí se puede usar en `ORDER BY`.
```

### 20 — SELECT modifica

```
metadata:
  materia: "sql"
  tema: "select_y_where"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf
respuesta: falso

enunciado: "`SELECT` modifica los datos de la tabla."

explicacion: |
  `SELECT` solo lee. Para modificar se usan `INSERT`, `UPDATE` y `DELETE`.
```

