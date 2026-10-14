# SQL — SELECT y WHERE (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../../../informatica/modelo-relacional-tabla-registro-clave-primaria/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/sql/select-y-where/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Consultar una tabla

`SELECT` pide columnas; `FROM` dice de qué tabla.

```sql
SELECT nombre, edad FROM alumnos;
SELECT * FROM alumnos;            -- todas las columnas
SELECT DISTINCT curso FROM alumnos; -- sin repetidos
```

`SELECT *` es cómodo para explorar, pero en programas conviene **nombrar las columnas**: es más claro y no se rompe si alguien agrega una columna.

---

## 2. Filtrar filas con WHERE

```sql
SELECT nombre FROM alumnos WHERE edad >= 18;
SELECT nombre FROM alumnos WHERE curso = '3A' AND edad < 18;
SELECT nombre FROM alumnos WHERE curso = '3A' OR curso = '3B';
SELECT nombre FROM alumnos WHERE NOT (curso = '3A');
```

| Operador | Significa |
|:--|:--|
| `=`, `<>` (o `!=`) | igual, distinto |
| `<`, `<=`, `>`, `>=` | comparaciones |
| `AND`, `OR`, `NOT` | combinan condiciones (`AND` pesa más que `OR`; con dudas, paréntesis) |
| `BETWEEN a AND b` | entre a y b, **ambos incluidos** |
| `IN (a, b, c)` | está en la lista |
| `LIKE 'Ma%'` | patrón de texto: `%` = cualquier cantidad de caracteres, `_` = uno |
| `IS NULL` / `IS NOT NULL` | vacío o no |

Los **textos** van entre comillas simples; los números, sin comillas.

---

## 3. NULL: el valor "desconocido"

`NULL` no es cero ni texto vacío: es "sin dato". **No se compara con `=`**: `telefono = NULL` nunca da verdadero. Se usa `telefono IS NULL`.

---

## 4. Ordenar y limitar

```sql
SELECT nombre, edad FROM alumnos ORDER BY edad DESC, nombre ASC;
SELECT nombre FROM alumnos ORDER BY edad DESC LIMIT 3;   -- MySQL, PostgreSQL, SQLite
-- SQL Server: SELECT TOP 3 ...    Estándar: FETCH FIRST 3 ROWS ONLY
```

Sin `ORDER BY` el orden de las filas **no está garantizado**. `ASC` (de menor a mayor) es el valor por defecto.

---

## 5. Alias y expresiones

```sql
SELECT nombre AS alumno, edad + 1 AS edad_el_proximo_anio FROM alumnos;
```

El orden **de escritura** es `SELECT, FROM, WHERE, ORDER BY`; el **lógico** es `FROM`, `WHERE`, `SELECT`, `ORDER BY`, por eso un alias del `SELECT` no se puede usar en el `WHERE` (sí en `ORDER BY`).
