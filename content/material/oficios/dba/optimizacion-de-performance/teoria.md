# DBA — Optimización de performance (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../bases-de-datos-nosql/`, `../../sql/indices-basicos/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/dba/optimizacion-de-performance/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Primero medir

**"La optimización prematura es la raíz de todos los males."** No se cambia nada **por intuición**: se **mide**, se **encuentra el cuello de botella**, se **cambia una cosa** y se **vuelve a medir**.

**Preguntas iniciales:**

- **¿Qué es lento?** (¿una consulta? ¿toda la aplicación? ¿a ciertas horas?)
- **¿Desde cuándo?** (¿qué cambió?)
- **¿Cuánto es "lento"?** (un objetivo concreto: "menos de 200 ms").
- **¿A cuántas personas afecta?**
- **¿Es la base la causa?** (puede ser la red, la aplicación o el disco).

---

## 2. Dónde se pierde el tiempo

| Recurso | Síntoma | Causas comunes |
|:--|:--|:--|
| **CPU** | uso alto | consultas pesadas, falta de índices, cálculos |
| **Memoria** | uso de disco (*swap*), caché chica | poca RAM, mala configuración |
| **Disco** | espera de lectura/escritura | lecturas completas de tablas, escritura intensa |
| **Red** | latencia | muchos viajes, resultados enormes |
| **Bloqueos** | consultas **esperando** | transacciones **largas**, **deadlocks** |
| **Conexiones** | "demasiadas conexiones" | cada petición abre una conexión |

---

## 3. Encontrar las consultas lentas

- **Registro de consultas lentas** (`log_min_duration_statement` en PostgreSQL; *slow query log* en MySQL).
- **Estadísticas** de consultas (`pg_stat_statements`).
- **Monitoreo** (CPU, memoria, conexiones, latencias).
- **Perfiles de la aplicación**.
- Las que **más tiempo suman**: **no solo** las **más lentas**, sino también **las que se ejecutan muchas veces**.

---

## 4. Leer un plan de ejecución

```sql
EXPLAIN ANALYZE
SELECT * FROM pedidos WHERE id_cliente = 42 ORDER BY fecha DESC LIMIT 10;
```

- **`EXPLAIN`** muestra **cómo piensa** resolverla; **`EXPLAIN ANALYZE`** **la ejecuta** y muestra **tiempos reales**.
- **Seq Scan** (recorrido **completo**): **sospechoso** en tablas **grandes**.
- **Index Scan / Index Only Scan**: **usa un índice**.
- **Filas estimadas vs. reales**: **grandes diferencias** indican **estadísticas desactualizadas**.
- **Sort** o **Hash** que **usan disco**: poca memoria o falta de índice.
- **Cuidado:** `EXPLAIN ANALYZE` **ejecuta de verdad** (en un `UPDATE` o `DELETE` **modifica datos**: usar dentro de una **transacción** con `ROLLBACK`).

---

## 5. Índices

- **Indexar** las columnas de **`WHERE`**, **`JOIN`** y **`ORDER BY`** más usadas.
- **Índice compuesto**: el **orden** de las columnas **importa** (de **izquierda a derecha**).
- **Índice parcial** (solo algunas filas) y **cubriente** (incluye las columnas pedidas).
- **Costo**: cada índice **ralentiza las escrituras** y **ocupa espacio**: **eliminar los que no se usan**.
- **No sirve** aplicar **funciones** a la columna indexada (`WHERE LOWER(nombre) = ...`) **ni** `LIKE '%texto'`.
- Ver `../../sql/indices-basicos/`.

---

## 6. Consultas

- **Pedir solo lo necesario**: **columnas** concretas, no `SELECT *`.
- **Limitar** las filas (`LIMIT`) y **paginar** **con cuidado** (un `OFFSET` enorme **recorre y descarta** filas: **paginación por clave** es más eficiente).
- **Evitar el problema N+1:** **una consulta** que trae N filas y **N consultas más**, **una por fila**. Se resuelve con **`JOIN`** o **cargando en bloque**.
- **Agregar** en la base, **no traer todo** a la aplicación.
- **Evitar subconsultas correlacionadas** si un **`JOIN`** lo resuelve mejor.
- **Tipos coincidentes** en comparaciones (texto contra número impide usar índices).
- **Lotes**: **insertar muchas filas** en **una instrucción** o **transacción**, no una por una.

---

## 7. Mantenimiento y configuración

- **Estadísticas**: el optimizador **las necesita actualizadas** (`ANALYZE`).
- **Limpieza** (`VACUUM` en PostgreSQL): las filas **borradas o modificadas** dejan **espacio muerto**; la limpieza **periódica** evita **crecimiento** y **lentitud**. Normalmente es **automática** (`autovacuum`), **no desactivarla**.
- **Reconstruir índices** hinchados.
- **Memoria**: **ajustar** los parámetros (en PostgreSQL, `shared_buffers`, `work_mem`) según el **equipo**.
- **Grupos de conexiones** (*connection pooling*, como **PgBouncer**): **reutilizan** conexiones en lugar de abrir una por petición.
- **Actualizar** el motor.

---

## 8. Arquitectura

- **Caché** (**Redis**): **no ir a la base** por lo que **se pide mucho** y **cambia poco**. **Invalidar** cuando cambia.
- **Réplicas de lectura**: **repartir las lecturas** (las réplicas pueden **tardar en actualizarse**).
- **Particionado** de tablas enormes (por **fecha**): **consultas y mantenimiento más rápidos**.
- **Archivado**: **mover datos antiguos** a otro lugar.
- **Colas** para **trabajo pesado** en segundo plano.
- **Desnormalizar** con **criterio** (ver `../../sql/normalizacion-de-esquema/`).
- **Escalar** el hardware **al final**: **antes** conviene **arreglar consultas e índices**.

---

## 9. Bloqueos y concurrencia

- **Transacciones cortas**: **no dejar abierta** una transacción mientras se espera al usuario.
- **Mismo orden** al **tocar tablas** (evita **deadlocks**).
- **Detectar bloqueos** (`pg_locks`, `pg_stat_activity`).
- **Tiempo máximo** de consulta y de espera (`statement_timeout`, `lock_timeout`).

---

## 10. Un método

1. **Definir** el objetivo y **medir** el punto de partida.
2. **Encontrar** la consulta o el recurso más costoso.
3. **Entender** el plan.
4. **Cambiar una sola cosa** (índice, reescritura).
5. **Medir** de nuevo con **datos de volumen real**.
6. **Probar** en un **entorno parecido** a producción.
7. **Documentar** y **monitorear** (una mejora puede **degradarse** con el tiempo).
8. **Repetir** solo si hace falta: **parar cuando se alcanza el objetivo**.
