# SQL — Agregaciones y GROUP BY (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../select-y-where/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/sql/agregaciones-group-by/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Funciones de agregación

Resumen muchas filas en **un** valor.

| Función | Hace |
|:--|:--|
| `COUNT(*)` | cuenta filas |
| `COUNT(col)` | cuenta filas donde `col` **no es NULL** |
| `SUM(col)` | suma |
| `AVG(col)` | promedio |
| `MIN(col)`, `MAX(col)` | menor y mayor |

```sql
SELECT COUNT(*) AS total, AVG(edad) AS edad_media FROM alumnos;
```

Las agregaciones **ignoran los `NULL`** (excepto `COUNT(*)`). `COUNT(DISTINCT col)` cuenta valores distintos.

---

## 2. GROUP BY: un resultado por grupo

```sql
SELECT curso, COUNT(*) AS cantidad, AVG(edad) AS edad_media
FROM alumnos
GROUP BY curso;
```

Devuelve **una fila por cada valor distinto de `curso`**. Regla de oro: toda columna del `SELECT` que **no** sea una agregación debe estar en el `GROUP BY`.

Se puede agrupar por varias columnas: `GROUP BY curso, turno`.

---

## 3. WHERE vs HAVING

```sql
SELECT curso, COUNT(*) AS cantidad
FROM alumnos
WHERE edad >= 14          -- filtra FILAS, antes de agrupar
GROUP BY curso
HAVING COUNT(*) > 20;     -- filtra GRUPOS, después de agrupar
```

- `WHERE` filtra filas **antes** de agrupar y no puede usar agregaciones.
- `HAVING` filtra grupos **después** y sí puede usarlas.

Orden lógico: `FROM` → `WHERE` → `GROUP BY` → `HAVING` → `SELECT` → `ORDER BY` → `LIMIT`.

---

## 4. Con JOIN

```sql
SELECT c.nombre, COUNT(a.id) AS alumnos
FROM cursos c
LEFT JOIN alumnos a ON a.id_curso = c.id
GROUP BY c.id, c.nombre;
```

`COUNT(a.id)` (y no `COUNT(*)`) hace que un curso sin alumnos dé **0** y no 1.

---

## 5. Cuidados

- Promediar o sumar **columnas con NULL** da resultados que ignoran esos datos: tenerlo en cuenta.
- `SUM` de una columna vacía da `NULL`, no 0 (se usa `COALESCE(SUM(x), 0)`).
- Un promedio de promedios no es el promedio general si los grupos tienen tamaños distintos.
