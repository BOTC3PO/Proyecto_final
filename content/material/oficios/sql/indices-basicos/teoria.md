# SQL — Índices básicos (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../select-y-where/`, `../../../informatica/modelo-relacional-tabla-registro-clave-primaria/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/sql/indices-basicos/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Para qué sirve un índice

Sin índice, para buscar `WHERE dni = 30123456` la base debe **leer toda la tabla** fila por fila (búsqueda completa o *full scan*). Un **índice** es una estructura auxiliar, ordenada (normalmente un árbol B), que permite **saltar directo** a las filas buscadas, como el índice alfabético de un libro.

```sql
CREATE INDEX idx_alumnos_dni ON alumnos (dni);
CREATE UNIQUE INDEX idx_alumnos_correo ON alumnos (correo);
DROP INDEX idx_alumnos_dni;
```

La **clave primaria** y las columnas `UNIQUE` ya tienen un índice automático.

---

## 2. Cuándo ayuda

Un índice acelera:

- búsquedas con `WHERE columna = valor` o rangos (`>`, `BETWEEN`);
- las columnas de **unión** (`JOIN ... ON`), sobre todo las claves foráneas;
- `ORDER BY` y `GROUP BY` sobre la columna indexada.

Ayuda más cuando la columna es **selectiva** (muchos valores distintos, como el DNI) y la tabla es grande. Indexar una columna con pocos valores (por ejemplo, sexo o activo/inactivo) casi no sirve.

---

## 3. Cuándo cobra un costo

- **Ocupa espacio** en disco.
- **Enlentece las escrituras:** cada `INSERT`, `UPDATE` o `DELETE` debe actualizar también los índices.
- Muchos índices en una tabla con muchas escrituras = más lenta.

Por eso **no se indexa todo**: se indexa lo que se consulta con frecuencia y lo que cuesta.

---

## 4. Cosas que impiden usar un índice

- Aplicar una función a la columna: `WHERE YEAR(fecha) = 2026` o `WHERE LOWER(nombre) = 'ana'` (se resuelve con un índice sobre la expresión, si el motor lo permite, o reescribiendo la condición).
- Un `LIKE '%ana'` (comodín al **principio**); `LIKE 'ana%'` sí puede usarlo.
- Comparar con un tipo distinto (un texto contra un número).
- Tablas muy chicas: leerlas enteras es más rápido que usar el índice.

---

## 5. Índices compuestos

```sql
CREATE INDEX idx_curso_apellido ON alumnos (curso, apellido);
```

Sirve para consultas que filtran por `curso`, o por `curso` y `apellido`; **no** ayuda a las que filtran solo por `apellido` (el orden de las columnas importa: se usa de izquierda a derecha).

---

## 6. Cómo comprobar

`EXPLAIN` (o `EXPLAIN ANALYZE`) muestra el **plan de ejecución**: si la consulta usa el índice (*index scan*) o recorre todo (*seq scan* / *full table scan*). No se optimiza a ciegas: se **mide**.
