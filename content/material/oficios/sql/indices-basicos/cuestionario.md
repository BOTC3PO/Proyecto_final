# SQL — Índices básicos (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Para qué

```
metadata:
  materia: "sql"
  tema: "indices_basicos"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Para encontrar filas más rápido sin leer toda la tabla", "Para guardar copias", "Para cifrar datos", "Para ordenar las columnas del resultado siempre"]
respuesta: "Para encontrar filas más rápido sin leer toda la tabla"

enunciado: "¿Para qué sirve un índice?"

explicacion: |
  Es una estructura auxiliar ordenada.
```

### 2 — Sin índice

```
metadata:
  materia: "sql"
  tema: "indices_basicos"
  nivel: "basico"
  tags: ["full scan"]

tipo: mc
opciones_explicitas: ["Lee la tabla completa fila por fila", "Lo adivina", "Usa la clave primaria", "Pide ayuda al disco"]
respuesta: "Lee la tabla completa fila por fila"

enunciado: "Sin un índice útil, ¿cómo busca la base un valor en una columna?"

explicacion: |
  Se llama búsqueda completa (full scan).
```

### 3 — Analogía

```
metadata:
  materia: "sql"
  tema: "indices_basicos"
  nivel: "basico"
  tags: ["analogia"]

tipo: mc
opciones_explicitas: ["Con el índice alfabético de un libro", "Con la tapa", "Con una copia del libro", "Con el prólogo"]
respuesta: "Con el índice alfabético de un libro"

enunciado: "¿Con qué se parece un índice?"

explicacion: |
  Permite ir directo a la página sin leer todo.
```

### 4 — Crear

```
metadata:
  materia: "sql"
  tema: "indices_basicos"
  nivel: "basico"
  tags: ["create"]

tipo: mc
opciones_explicitas: ["`CREATE INDEX idx_dni ON alumnos (dni)`", "`ADD INDEX dni`", "`MAKE INDEX (dni)`", "`INDEX alumnos.dni`"]
respuesta: "`CREATE INDEX idx_dni ON alumnos (dni)`"

enunciado: "¿Qué instrucción crea un índice sobre `dni`?"

explicacion: |
  `CREATE INDEX nombre ON tabla (columna)`.
```

### 5 — Automáticos

```
metadata:
  materia: "sql"
  tema: "indices_basicos"
  nivel: "intermedio"
  tags: ["pk"]

tipo: mc
opciones_explicitas: ["La clave primaria y las columnas `UNIQUE`", "Todas", "Las de texto", "Ninguna"]
respuesta: "La clave primaria y las columnas `UNIQUE`"

enunciado: "¿Qué columnas suelen tener índice automático?"

explicacion: |
  Así el motor verifica rápido que no haya repetidos.
```

### 6 — Mejor candidata

```
metadata:
  materia: "sql"
  tema: "indices_basicos"
  nivel: "intermedio"
  tags: ["selectividad"]

tipo: mc
opciones_explicitas: ["El DNI (casi todos valores distintos)", "El estado activo/inactivo", "El país si todos son de Argentina", "Una columna constante"]
respuesta: "El DNI (casi todos valores distintos)"

enunciado: "¿Qué columna se beneficia más de un índice en una tabla de millones de filas?"

explicacion: |
  Una columna selectiva reduce mucho las filas a leer.
```

### 7 — Pocos valores

```
metadata:
  materia: "sql"
  tema: "indices_basicos"
  nivel: "intermedio"
  tags: ["selectividad"]

tipo: mc
opciones_explicitas: ["Porque cada valor devuelve una enorme parte de la tabla", "Porque da error", "Porque ocupa mucho", "Porque no se puede"]
respuesta: "Porque cada valor devuelve una enorme parte de la tabla"

enunciado: "¿Por qué indexar una columna con solo dos valores posibles (sí/no) suele servir poco?"

explicacion: |
  Si hay que leer la mitad de la tabla, el índice no ahorra mucho.
```

### 8 — Claves foráneas

```
metadata:
  materia: "sql"
  tema: "indices_basicos"
  nivel: "intermedio"
  tags: ["fk"]

tipo: mc
opciones_explicitas: ["Porque aceleran los `JOIN` y las comprobaciones de integridad", "Porque es obligatorio", "Porque las ordena alfabéticamente", "Porque evita los `NULL`"]
respuesta: "Porque aceleran los `JOIN` y las comprobaciones de integridad"

enunciado: "¿Por qué conviene indexar las claves foráneas?"

explicacion: |
  Muchos motores no las indexan por sí solos.
```

### 9 — Costo

```
metadata:
  materia: "sql"
  tema: "indices_basicos"
  nivel: "basico"
  tags: ["costo"]

tipo: mc
opciones_explicitas: ["Las escrituras se vuelven más lentas", "Las lecturas se vuelven lentas", "La tabla se borra", "Se pierden los datos"]
respuesta: "Las escrituras se vuelven más lentas"

enunciado: "¿Cuál es un costo de tener muchos índices?"

explicacion: |
  Cada `INSERT`, `UPDATE` y `DELETE` actualiza también los índices.
```

### 10 — Espacio

```
metadata:
  materia: "sql"
  tema: "indices_basicos"
  nivel: "basico"
  tags: ["costo"]

tipo: mc
opciones_explicitas: ["Ocupa espacio en disco", "Ninguno", "Cambia el nombre de la tabla", "Bloquea la base para siempre"]
respuesta: "Ocupa espacio en disco"

enunciado: "¿Qué otro costo tiene un índice?"

explicacion: |
  Los índices son estructuras guardadas aparte de la tabla.
```

### 11 — No indexar todo

```
metadata:
  materia: "sql"
  tema: "indices_basicos"
  nivel: "basico"
  tags: ["criterio"]

tipo: mc
opciones_explicitas: ["Indexar lo que se consulta con frecuencia y resulta lento, comprobándolo", "Indexar todas las columnas", "No indexar nunca", "Indexar solo texto"]
respuesta: "Indexar lo que se consulta con frecuencia y resulta lento, comprobándolo"

enunciado: "¿Cuál es el criterio sano para indexar?"

explicacion: |
  Se mide con `EXPLAIN` antes y después.
```

### 12 — Función

```
metadata:
  materia: "sql"
  tema: "indices_basicos"
  nivel: "avanzado"
  tags: ["funcion"]

tipo: mc
opciones_explicitas: ["Porque se aplica una función a la columna", "Porque el texto es corto", "Porque falta `ORDER BY`", "Porque `LOWER` es una agregación"]
respuesta: "Porque se aplica una función a la columna"

enunciado: "¿Por qué `WHERE LOWER(nombre) = 'ana'` puede no usar el índice de `nombre`?"

explicacion: |
  El índice está sobre el valor original, no sobre el resultado de la función.
```

### 13 — Comodín

```
metadata:
  materia: "sql"
  tema: "indices_basicos"
  nivel: "avanzado"
  tags: ["like"]

tipo: mc
opciones_explicitas: ["`LIKE 'ana%'`", "`LIKE '%ana'`", "`LIKE '%ana%'`", "Ninguno"]
respuesta: "`LIKE 'ana%'`"

enunciado: "¿Cuál de estos `LIKE` puede aprovechar un índice normal?"

explicacion: |
  Con el comodín al inicio no se sabe por dónde empezar a buscar.
```

### 14 — Compuesto

```
metadata:
  materia: "sql"
  tema: "indices_basicos"
  nivel: "avanzado"
  tags: ["compuesto"]

tipo: mc
opciones_explicitas: ["Normalmente no: se usa de izquierda a derecha", "Siempre", "Solo con `ORDER BY`", "Solo con `JOIN`"]
respuesta: "Normalmente no: se usa de izquierda a derecha"

enunciado: "Un índice sobre `(curso, apellido)` ¿ayuda a una consulta que filtra solo por `apellido`?"

explicacion: |
  Ayuda a los filtros por `curso` o por `curso` y `apellido`.
```

### 15 — Plan

```
metadata:
  materia: "sql"
  tema: "indices_basicos"
  nivel: "intermedio"
  tags: ["explain"]

tipo: mc
opciones_explicitas: ["El plan de ejecución: cómo piensa resolver la consulta", "El resultado de la consulta", "Los errores del disco", "Los permisos"]
respuesta: "El plan de ejecución: cómo piensa resolver la consulta"

enunciado: "¿Qué muestra `EXPLAIN`?"

explicacion: |
  Permite ver si usa un índice o recorre toda la tabla.
```

### 16 — Medir

```
metadata:
  materia: "sql"
  tema: "indices_basicos"
  nivel: "basico"
  tags: ["medir"]

tipo: mc
opciones_explicitas: ["Comprobar con `EXPLAIN` que la consulta realmente es lenta", "Nada", "Borrar la tabla", "Crear diez más"]
respuesta: "Comprobar con `EXPLAIN` que la consulta realmente es lenta"

enunciado: "Antes de crear un índice \"por si acaso\", ¿qué conviene hacer?"

explicacion: |
  Se optimiza midiendo, no por intuición.
```

### 17 — Tabla chica

```
metadata:
  materia: "sql"
  tema: "indices_basicos"
  nivel: "intermedio"
  tags: ["tabla chica"]

tipo: mc
opciones_explicitas: ["Porque leerla entera es más rápido", "Porque es ilegal", "Porque falla", "Porque está encriptada"]
respuesta: "Porque leerla entera es más rápido"

enunciado: "¿Por qué en una tabla de 20 filas el índice puede no usarse?"

explicacion: |
  El motor elige el plan más barato.
```

### 18 — UNIQUE

```
metadata:
  materia: "sql"
  tema: "indices_basicos"
  nivel: "basico"
  tags: ["unique"]

tipo: mc
opciones_explicitas: ["Impide valores repetidos en la columna", "Hace la tabla más chica", "Borra los repetidos", "Ordena a la inversa"]
respuesta: "Impide valores repetidos en la columna"

enunciado: "¿Qué agrega `CREATE UNIQUE INDEX` frente a un índice común?"

explicacion: |
  Sirve a la vez para acelerar búsquedas y garantizar unicidad.
```

### 19 — Mejora todo

```
metadata:
  materia: "sql"
  tema: "indices_basicos"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf
respuesta: falso

enunciado: "Un índice acelera por igual todas las instrucciones, incluso `INSERT`."

explicacion: |
  Acelera ciertas lecturas, pero enlentece las escrituras.
```

### 20 — Se puede borrar

```
metadata:
  materia: "sql"
  tema: "indices_basicos"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf
respuesta: verdadero

enunciado: "Se puede eliminar un índice con `DROP INDEX` sin perder los datos de la tabla."

explicacion: |
  El índice es una estructura auxiliar; los datos siguen en la tabla.
```

