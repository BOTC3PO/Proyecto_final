# SQL — JOIN (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../select-y-where/`, `../../informatica/relaciones-y-claves-foraneas/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/sql/join/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Por qué existen los JOIN

Los datos se reparten en varias tablas para no repetirlos (`../normalizacion-de-esquema/`). Un **JOIN** las vuelve a combinar en una consulta, uniendo filas que se corresponden por una **clave**: normalmente una clave foránea contra una clave primaria.

```sql
-- alumnos(id, nombre, id_curso)   cursos(id, nombre)
SELECT a.nombre, c.nombre AS curso
FROM alumnos a
INNER JOIN cursos c ON a.id_curso = c.id;
```

`a` y `c` son **alias de tabla**. La condición `ON` indica cómo se corresponden las filas. Cuando una columna se llama igual en ambas tablas, hay que **prefijarla** (`a.id`, `c.id`).

---

## 2. Tipos de JOIN

| Tipo | Devuelve |
|:--|:--|
| `INNER JOIN` | solo las filas que tienen correspondencia en **ambas** tablas |
| `LEFT JOIN` | **todas** las filas de la tabla izquierda, con `NULL` en la derecha si no hay correspondencia |
| `RIGHT JOIN` | todas las de la derecha (es un `LEFT` con las tablas al revés) |
| `FULL JOIN` | todas las filas de ambas (no todos los motores lo tienen; MySQL no) |
| `CROSS JOIN` | todas las combinaciones posibles (producto cartesiano) |

Un `JOIN` a secas equivale a `INNER JOIN`.

---

## 3. LEFT JOIN: encontrar lo que "falta"

```sql
SELECT c.nombre
FROM cursos c
LEFT JOIN alumnos a ON a.id_curso = c.id
WHERE a.id IS NULL;      -- cursos sin ningún alumno
```

Las filas del curso sin alumnos aparecen con `NULL` en las columnas de `alumnos`; filtrando `IS NULL` se las aísla.

---

## 4. Errores frecuentes

- **Olvidar el `ON`** (o escribir mal la condición): el resultado se multiplica (producto cartesiano). Si la consulta devuelve "demasiadas" filas, sospechá del `ON`.
- **Filtrar en `WHERE` una columna de la tabla derecha de un `LEFT JOIN`**: convierte el `LEFT` en `INNER`, porque las filas con `NULL` se descartan. Esa condición va en el `ON`.
- **Filas repetidas**: si la relación es uno-a-muchos, la fila del lado "uno" se repite una vez por cada fila del lado "muchos". No es un error.

---

## 5. Más de dos tablas y autounión

```sql
SELECT a.nombre, c.nombre, p.nombre
FROM alumnos a
JOIN cursos c ON a.id_curso = c.id
JOIN profesores p ON c.id_tutor = p.id;
```

Una tabla también se puede unir **consigo misma** (por ejemplo, empleados y su jefe), usando dos alias distintos.
