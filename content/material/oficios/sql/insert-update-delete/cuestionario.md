# SQL — INSERT, UPDATE y DELETE (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Agregar

```
metadata:
  materia: "sql"
  tema: "insert_update_delete"
  nivel: "basico"
  tags: ["insert"]

tipo: mc
opciones_explicitas: ["INSERT", "UPDATE", "SELECT", "APPEND"]
respuesta: "INSERT"

enunciado: "¿Qué instrucción agrega una fila nueva?"

explicacion: |
  `INSERT INTO tabla (columnas) VALUES (valores)`.
```

### 2 — Orden de valores

```
metadata:
  materia: "sql"
  tema: "insert_update_delete"
  nivel: "basico"
  tags: ["insert"]

tipo: mc
opciones_explicitas: ["14", "'Ana'", "NULL", "No se guarda nada"]
respuesta: "14"

enunciado: "En `INSERT INTO alumnos (nombre, edad) VALUES ('Ana', 14)`, ¿qué se guarda en `edad`?"

explicacion: |
  Los valores se asignan a las columnas en el mismo orden en que se nombran.
```

### 3 — Varias filas

```
metadata:
  materia: "sql"
  tema: "insert_update_delete"
  nivel: "intermedio"
  tags: ["insert"]

tipo: mc
opciones_explicitas: ["Inserta dos filas en una sola instrucción", "Falla", "Inserta una fila con dos copias", "Actualiza dos filas"]
respuesta: "Inserta dos filas en una sola instrucción"

enunciado: "¿Qué hace `INSERT ... VALUES (...), (...)`?"

explicacion: |
  Casi todos los motores permiten separar varias filas con comas.
```

### 4 — Clave autonumérica

```
metadata:
  materia: "sql"
  tema: "insert_update_delete"
  nivel: "intermedio"
  tags: ["autoincrement"]

tipo: mc
opciones_explicitas: ["No se incluye: lo genera la base", "Se escribe 0", "Se escribe NULL siempre", "Se repite el anterior"]
respuesta: "No se incluye: lo genera la base"

enunciado: "Si el `id` se autogenera, ¿qué se hace en el `INSERT`?"

explicacion: |
  Los motores tienen `AUTO_INCREMENT`, `SERIAL`/`IDENTITY` o similares.
```

### 5 — Modificar

```
metadata:
  materia: "sql"
  tema: "insert_update_delete"
  nivel: "basico"
  tags: ["update"]

tipo: mc
opciones_explicitas: ["UPDATE", "INSERT", "ALTER ROW", "CHANGE"]
respuesta: "UPDATE"

enunciado: "¿Qué instrucción modifica filas existentes?"

explicacion: |
  `UPDATE tabla SET columna = valor WHERE condición`.
```

### 6 — Sin WHERE

```
metadata:
  materia: "sql"
  tema: "insert_update_delete"
  nivel: "basico"
  tags: ["peligro"]

tipo: mc
opciones_explicitas: ["Cambia el curso de todos los alumnos", "No hace nada", "Da error", "Cambia solo la primera fila"]
respuesta: "Cambia el curso de todos los alumnos"

enunciado: "¿Qué pasa con `UPDATE alumnos SET curso = '4A'` (sin `WHERE`)?"

explicacion: |
  Sin filtro, afecta a todas las filas.
```

### 7 — Expresión en SET

```
metadata:
  materia: "sql"
  tema: "insert_update_delete"
  nivel: "intermedio"
  tags: ["update"]

tipo: mc
opciones_explicitas: ["Suma uno a la edad actual de cada fila afectada", "Pone 1", "Es un error", "Duplica la fila"]
respuesta: "Suma uno a la edad actual de cada fila afectada"

enunciado: "¿Qué hace `SET edad = edad + 1`?"

explicacion: |
  Se puede usar el valor actual de la columna en la expresión.
```

### 8 — Borrar filas

```
metadata:
  materia: "sql"
  tema: "insert_update_delete"
  nivel: "basico"
  tags: ["delete"]

tipo: mc
opciones_explicitas: ["DELETE", "DROP ROW", "REMOVE", "CLEAR"]
respuesta: "DELETE"

enunciado: "¿Qué instrucción borra filas?"

explicacion: |
  `DELETE FROM tabla WHERE condición`.
```

### 9 — DELETE sin WHERE

```
metadata:
  materia: "sql"
  tema: "insert_update_delete"
  nivel: "basico"
  tags: ["peligro"]

tipo: mc
opciones_explicitas: ["Borra todas las filas; la tabla sigue existiendo, vacía", "Borra la tabla y su estructura", "No hace nada", "Borra la base de datos"]
respuesta: "Borra todas las filas; la tabla sigue existiendo, vacía"

enunciado: "¿Qué hace `DELETE FROM alumnos` (sin `WHERE`)?"

explicacion: |
  Para eliminar la tabla se usa `DROP TABLE`.
```

### 10 — DROP

```
metadata:
  materia: "sql"
  tema: "insert_update_delete"
  nivel: "basico"
  tags: ["drop"]

tipo: mc
opciones_explicitas: ["Elimina la tabla completa, con su estructura y datos", "Vacía la tabla", "Oculta la tabla", "Renombra la tabla"]
respuesta: "Elimina la tabla completa, con su estructura y datos"

enunciado: "¿Qué hace `DROP TABLE alumnos`?"

explicacion: |
  Es mucho más drástico que `DELETE`.
```

### 11 — Antes de borrar

```
metadata:
  materia: "sql"
  tema: "insert_update_delete"
  nivel: "basico"
  tags: ["buenas practicas"]

tipo: mc
opciones_explicitas: ["Ejecutar primero un `SELECT` con la misma condición para ver qué filas afecta", "Ejecutarlo directamente", "Agregar `*`", "Reiniciar el servidor"]
respuesta: "Ejecutar primero un `SELECT` con la misma condición para ver qué filas afecta"

enunciado: "¿Cuál es una buena costumbre antes de un `DELETE` con condición?"

explicacion: |
  El `SELECT` muestra exactamente lo que se borraría.
```

### 12 — Clave primaria repetida

```
metadata:
  materia: "sql"
  tema: "insert_update_delete"
  nivel: "basico"
  tags: ["pk"]

tipo: mc
opciones_explicitas: ["La base rechaza la instrucción con un error", "Se pisa la fila anterior", "Se inserta igual", "Se cambia la clave sola"]
respuesta: "La base rechaza la instrucción con un error"

enunciado: "¿Qué ocurre si se inserta una fila con una clave primaria que ya existe?"

explicacion: |
  La clave primaria debe ser única y no nula.
```

### 13 — NOT NULL

```
metadata:
  materia: "sql"
  tema: "insert_update_delete"
  nivel: "basico"
  tags: ["not null"]

tipo: mc
opciones_explicitas: ["Que siempre tenga un valor", "Que sea numérica", "Que sea única", "Que se pueda borrar"]
respuesta: "Que siempre tenga un valor"

enunciado: "¿Qué garantiza una columna `NOT NULL`?"

explicacion: |
  Intentar guardar `NULL` produce un error.
```

### 14 — UNIQUE

```
metadata:
  materia: "sql"
  tema: "insert_update_delete"
  nivel: "basico"
  tags: ["unique"]

tipo: mc
opciones_explicitas: ["Que no haya dos filas con el mismo correo", "Que no tenga nulos", "Que esté ordenada", "Que sea la clave primaria"]
respuesta: "Que no haya dos filas con el mismo correo"

enunciado: "¿Qué garantiza `UNIQUE` en la columna `correo`?"

explicacion: |
  Una tabla puede tener varias columnas `UNIQUE`, pero una sola clave primaria.
```

### 15 — CHECK

```
metadata:
  materia: "sql"
  tema: "insert_update_delete"
  nivel: "intermedio"
  tags: ["check"]

tipo: mc
opciones_explicitas: ["Para rechazar edades negativas", "Para ordenar por edad", "Para redondear", "Para crear un índice"]
respuesta: "Para rechazar edades negativas"

enunciado: "¿Para qué sirve `CHECK (edad >= 0)`?"

explicacion: |
  `CHECK` valida una condición en cada inserción o modificación.
```

### 16 — Clave foránea

```
metadata:
  materia: "sql"
  tema: "insert_update_delete"
  nivel: "intermedio"
  tags: ["fk"]

tipo: mc
opciones_explicitas: ["La base lo rechaza para mantener la integridad", "Se borra igual", "Se borran los alumnos sin avisar", "Se pone un curso nuevo"]
respuesta: "La base lo rechaza para mantener la integridad"

enunciado: "Una fila de `cursos` está referenciada por alumnos. ¿Qué pasa al intentar borrarla (sin reglas especiales)?"

explicacion: |
  Con `ON DELETE CASCADE` se borran también las filas dependientes: hay que usarlo con cuidado.
```

### 17 — Inyección

```
metadata:
  materia: "sql"
  tema: "insert_update_delete"
  nivel: "intermedio"
  tags: ["seguridad"]

tipo: mc
opciones_explicitas: ["Con consultas parametrizadas, no pegando el texto dentro del SQL", "Con comillas dobles", "Con mayúsculas", "Borrando los espacios"]
respuesta: "Con consultas parametrizadas, no pegando el texto dentro del SQL"

enunciado: "¿Cómo se evita la inyección SQL cuando el dato viene de un usuario?"

explicacion: |
  El motor trata los parámetros como datos y no como código.
```

### 18 — Cuidado extra

```
metadata:
  materia: "sql"
  tema: "insert_update_delete"
  nivel: "basico"
  tags: ["backup"]

tipo: mc
opciones_explicitas: ["Una copia de seguridad", "Una tabla más", "Un índice", "Un alias"]
respuesta: "Una copia de seguridad"

enunciado: "Antes de un cambio masivo en datos importantes, ¿qué conviene tener?"

explicacion: |
  Un `UPDATE` o `DELETE` mal hecho puede ser difícil de deshacer sin copia.
```

### 19 — TRUNCATE

```
metadata:
  materia: "sql"
  tema: "insert_update_delete"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf
respuesta: verdadero

enunciado: "`TRUNCATE TABLE alumnos` vacía la tabla sin necesidad de `WHERE`."

explicacion: |
  No admite condición: borra todo (y suele ser más rápido que `DELETE`).
```

### 20 — Error como protección

```
metadata:
  materia: "sql"
  tema: "insert_update_delete"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf
respuesta: falso

enunciado: "Cuando la base rechaza un `INSERT` por violar una restricción, es un fallo del motor."

explicacion: |
  Es la protección de integridad funcionando: la restricción cumplió su trabajo.
```

