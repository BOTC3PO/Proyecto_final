# SQL — Transacciones (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../insert-update-delete/`, `../../informatica/transacciones-acid/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/sql/transacciones-sql/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué es una transacción

Una **transacción** agrupa varias instrucciones para que se ejecuten **todas o ninguna**.

Ejemplo clásico: transferir 100 de la cuenta A a la B son **dos** cambios. Si se hace el primero y falla el segundo, el dinero desaparece.

```sql
BEGIN;                      -- (o START TRANSACTION)
UPDATE cuentas SET saldo = saldo - 100 WHERE id = 1;
UPDATE cuentas SET saldo = saldo + 100 WHERE id = 2;
COMMIT;                     -- confirmar: los cambios quedan definitivos
-- ROLLBACK;                -- deshacer todo desde el BEGIN
```

- `COMMIT` confirma. `ROLLBACK` deshace.
- Si hay un error o se corta la conexión **antes** del `COMMIT`, los cambios se descartan.
- Algunos clientes tienen **autocommit**: cada instrucción se confirma sola. Para agrupar hay que abrir la transacción explícitamente.

---

## 2. Propiedades ACID

| | Significa |
|:--|:--|
| **A**tomicidad | todo o nada |
| **C**onsistencia | los datos pasan de un estado válido a otro (se respetan las restricciones) |
| **I**solamiento | transacciones simultáneas no se estorban |
| **D**urabilidad | lo confirmado sobrevive a una caída |

---

## 3. Concurrencia y aislamiento

Cuando dos transacciones trabajan a la vez pueden aparecer fenómenos:

- **Lectura sucia:** leer datos que otro aún no confirmó.
- **Lectura no repetible:** leer dos veces la misma fila y obtener valores distintos.
- **Lectura fantasma:** repetir una consulta y que aparezcan filas nuevas.

Los **niveles de aislamiento** (`READ COMMITTED`, `REPEATABLE READ`, `SERIALIZABLE`) controlan cuáles se permiten: más aislamiento = más seguridad y menos concurrencia. Cada motor tiene un valor por defecto (en PostgreSQL es `READ COMMITTED`).

---

## 4. Bloqueos y deadlocks

Para proteger los datos, el motor **bloquea** filas mientras una transacción las modifica; otras transacciones esperan. Si A espera lo que tiene B y B espera lo que tiene A, hay un **deadlock** (interbloqueo): el motor aborta una de las dos y la aplicación debe **reintentar**.

Buenas prácticas:

1. Transacciones **cortas**: no dejar una abierta mientras se espera al usuario.
2. Tocar las tablas **siempre en el mismo orden**.
3. Tomar solo los bloqueos necesarios; `SELECT ... FOR UPDATE` bloquea filas leídas para modificarlas luego.
4. Manejar el error y hacer `ROLLBACK`.

---

## 5. Puntos de guardado

`SAVEPOINT a;` marca un punto y `ROLLBACK TO a;` deshace solo desde ahí, sin descartar toda la transacción.
