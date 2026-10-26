# SQL — Diagnóstico de consultas por casos (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../transacciones-sql/` y los temas anteriores de SQL (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/sql/diagnostico-por-casos/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. El método

1. **Leer el error** completo (muchos motores indican la posición).
2. **Reducir:** probar la consulta por partes (primero el `FROM`, luego el `WHERE`...).
3. **Mirar los datos:** `SELECT *` con `LIMIT` sobre las tablas involucradas.
4. **Hipótesis y cambio mínimo**, y volver a probar.
5. En consultas lentas: **medir** con `EXPLAIN`.

---

## 2. Síntomas y causas

| Síntoma | Hipótesis para revisar primero |
|:--|:--|
| `syntax error at or near ...` | coma de más/menos, palabra reservada, comillas |
| `column "x" does not exist` | nombre mal escrito, comillas dobles, falta el prefijo de tabla |
| `column reference "id" is ambiguous` | falta prefijar con el alias en un `JOIN` |
| `must appear in the GROUP BY clause` | columna en el `SELECT` sin agrupar ni agregar |
| `subquery returns more than one row` | `=` contra una subconsulta de varias filas |
| la consulta devuelve **demasiadas filas** | `ON` faltante o incorrecto (producto cartesiano) |
| la consulta devuelve **menos filas** de lo esperado | `INNER JOIN` que descarta filas sin pareja; `NULL` en el `WHERE` |
| `WHERE columna = NULL` no devuelve nada | se necesita `IS NULL` |
| el `UPDATE` cambió **todas** las filas | faltó el `WHERE` |
| `violates foreign key constraint` | se referencia una fila que no existe, o se borra una referenciada |
| `duplicate key value violates unique constraint` | clave o valor único repetido |
| `deadlock detected` | dos transacciones se esperan; reintentar y revisar el orden |
| consulta lenta | falta de índice, función sobre la columna, `LIKE '%x'`, mucha información |
| un `LEFT JOIN` se comporta como `INNER` | condición sobre la tabla derecha en el `WHERE` |

---

## 3. Herramientas

- `EXPLAIN` / `EXPLAIN ANALYZE`: el plan de ejecución.
- Consultas de comprobación: `COUNT(*)` antes y después; `SELECT` con la misma condición antes de un `UPDATE`/`DELETE`.
- Transacciones: probar los cambios con `BEGIN` ... y mirar el resultado antes de `COMMIT` (o `ROLLBACK` si algo está mal).
- Copias de seguridad antes de cambios masivos.

---

## 4. Una regla de seguridad

Antes de un `UPDATE` o `DELETE` en datos reales: (1) `SELECT` con la misma condición; (2) dentro de una transacción; (3) comprobar cuántas filas se afectaron; (4) recién entonces `COMMIT`.
