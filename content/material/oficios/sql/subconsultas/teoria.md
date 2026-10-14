# SQL — Subconsultas (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../agregaciones-group-by/` y `../join/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/sql/subconsultas/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Una consulta dentro de otra

Una **subconsulta** es un `SELECT` entre paréntesis dentro de otra consulta. Se resuelve primero y su resultado se usa en la consulta principal.

```sql
-- alumnos con edad mayor al promedio
SELECT nombre, edad
FROM alumnos
WHERE edad > (SELECT AVG(edad) FROM alumnos);
```

Según lo que devuelve, se usa en distintos lugares:

| Devuelve | Se puede usar con |
|:--|:--|
| **un valor** (1 fila, 1 columna) | `=`, `>`, `<`... en `WHERE` o en el `SELECT` |
| **una columna** (varios valores) | `IN`, `NOT IN`, `ANY`, `ALL` |
| **una tabla** | en el `FROM`, con alias obligatorio |
| **existencia** | `EXISTS`, `NOT EXISTS` |

---

## 2. Con IN y EXISTS

```sql
SELECT nombre FROM cursos
WHERE id IN (SELECT id_curso FROM alumnos);          -- cursos con alumnos

SELECT c.nombre FROM cursos c
WHERE NOT EXISTS (SELECT 1 FROM alumnos a WHERE a.id_curso = c.id);   -- cursos vacíos
```

La segunda es una subconsulta **correlacionada**: usa una columna de la consulta externa (`c.id`) y se evalúa para cada fila de ella.

> **Cuidado con `NOT IN` y `NULL`:** si la subconsulta devuelve un solo `NULL`, `NOT IN` no devuelve **ninguna** fila. `NOT EXISTS` no tiene ese problema.

---

## 3. En el FROM

```sql
SELECT curso, cantidad
FROM (SELECT curso, COUNT(*) AS cantidad FROM alumnos GROUP BY curso) AS t
WHERE cantidad > 20;
```

La subconsulta funciona como una **tabla temporal** con alias. Muchas veces se escribe más legible con una **CTE** (`WITH t AS (...) SELECT ... FROM t`).

---

## 4. Subconsulta o JOIN

Muchas consultas se pueden escribir de las dos formas. Se elige por **claridad**: el `JOIN` es natural cuando se necesitan columnas de ambas tablas; la subconsulta, cuando solo se necesita un dato de apoyo (un promedio, una lista). La subconsulta correlacionada puede ser lenta en tablas grandes; el optimizador de los motores modernos suele resolver bien ambas.

---

## 5. Errores frecuentes

- Una subconsulta de **un valor** que devuelve varias filas: error ("subquery returns more than one row").
- Olvidar el **alias** de una subconsulta en el `FROM`.
- Comparar con `=` contra una subconsulta que puede devolver varias filas: usar `IN`.
