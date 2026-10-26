# SQL — INSERT, UPDATE y DELETE (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../select-y-where/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/sql/insert-update-delete/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Agregar filas: INSERT

```sql
INSERT INTO alumnos (nombre, edad, curso) VALUES ('Ana', 14, '3A');
INSERT INTO alumnos (nombre, edad, curso) VALUES ('Luis', 15, '3A'), ('Eva', 14, '3B');
```

Se nombran las columnas y los valores **en el mismo orden**. Las columnas no mencionadas toman su valor por defecto o `NULL` (si lo permiten). Una clave primaria autonumérica no se escribe: la base la genera.

---

## 2. Modificar: UPDATE

```sql
UPDATE alumnos SET edad = 15 WHERE nombre = 'Ana';
UPDATE alumnos SET curso = '4A', edad = edad + 1 WHERE curso = '3A';
```

> **Sin `WHERE`, `UPDATE` cambia TODAS las filas.** Es el error más común y más costoso. Antes de ejecutar, probá la misma condición con un `SELECT`.

---

## 3. Borrar: DELETE

```sql
DELETE FROM alumnos WHERE id = 7;
```

> **Sin `WHERE`, `DELETE` borra todas las filas** (la tabla queda vacía, pero existe). `DROP TABLE` borra la tabla entera con su estructura. `TRUNCATE` vacía la tabla rápido, sin condiciones.

---

## 4. Reglas que pueden rechazar un cambio

- **Clave primaria:** no puede repetirse ni ser nula.
- **`NOT NULL`:** la columna exige un valor.
- **`UNIQUE`:** no se repiten valores (por ejemplo, el correo).
- **`CHECK`:** una condición (por ejemplo, `edad >= 0`).
- **Clave foránea:** el valor debe existir en la otra tabla; y no se puede borrar una fila que otra tabla referencia (salvo reglas como `ON DELETE CASCADE`).

Cuando se viola una regla, la base **rechaza** la instrucción con un error: es una protección, no un fallo.

---

## 5. Buenas prácticas

1. Primero `SELECT` con la condición, después `UPDATE` o `DELETE`.
2. Hacer los cambios dentro de una **transacción** cuando se pueda (`../transacciones-sql/`).
3. Tener una **copia de seguridad** antes de cambios masivos.
4. Para datos que vienen de personas, usar **consultas parametrizadas** y no armar el SQL pegando texto (evita la inyección SQL).
