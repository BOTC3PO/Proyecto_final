# DBA — Bases de datos NoSQL (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../backups-y-recuperacion/`, `../../sql/normalizacion-de-esquema/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/dba/bases-de-datos-nosql/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué es NoSQL

**NoSQL** significa **"no solo SQL"** (*not only SQL*): bases de datos que **no usan el modelo relacional de tablas** o **no se limitan a él**. Aparecieron para resolver **necesidades concretas**: **enormes volúmenes**, **estructuras que cambian**, **escalar en muchos servidores** y **latencias muy bajas**.

> **NoSQL no es "mejor" que SQL.** Son **herramientas distintas**. Muchas aplicaciones **usan las dos**.

---

## 2. Tipos

| Tipo | Cómo guarda | Ejemplos | Usos típicos |
|:--|:--|:--|:--|
| **Documentos** | **documentos** tipo **JSON** con estructura **flexible** | **MongoDB**, CouchDB | catálogos, perfiles, contenido |
| **Clave-valor** | pares **clave → valor** | **Redis**, DynamoDB | **caché**, sesiones, contadores |
| **Columnas anchas** | filas con **columnas variables** agrupadas en familias | **Cassandra**, HBase | **series de tiempo**, enormes volúmenes |
| **Grafos** | **nodos** y **relaciones** | **Neo4j** | redes sociales, recomendaciones, rutas |

---

## 3. Documentos (MongoDB)

Un **documento** agrupa los datos relacionados **en una sola estructura**:

```json
{
  "_id": "a1",
  "nombre": "Ana",
  "curso": "3A",
  "notas": [8, 9, 7],
  "contacto": { "correo": "ana@ejemplo.com" }
}
```

- Los documentos se guardan en **colecciones** (equivalen aproximadamente a **tablas**, pero **sin esquema fijo**).
- Pueden **contener arreglos** y **objetos anidados**: **evitan muchos `JOIN`**.
- Cada documento tiene un **`_id`** único.

Operaciones básicas (consola de MongoDB):

```js
db.alumnos.insertOne({ nombre: "Ana", curso: "3A" })
db.alumnos.find({ curso: "3A" })
db.alumnos.updateOne({ nombre: "Ana" }, { $set: { curso: "3B" } })
db.alumnos.deleteOne({ nombre: "Ana" })
db.alumnos.createIndex({ curso: 1 })
```

---

## 4. Modelado: incrustar o referenciar

- **Incrustar** (anidar): los datos que **se leen juntos** van **dentro** del mismo documento. **Lecturas rápidas**, pero **duplicación** y documentos que **crecen**.
- **Referenciar:** se guarda el **identificador** de otro documento (como una **clave foránea**). **Sin duplicación**, pero **más consultas**.
- Se **modela según las consultas**, no según los datos (al revés que en SQL, donde se **normaliza primero**).
- Un documento tiene **un tamaño máximo** (en MongoDB, 16 MB).

---

## 5. ACID, BASE y el teorema CAP

- **ACID** (relacionales): **atomicidad**, **consistencia**, **aislamiento**, **durabilidad** (ver `../../sql/transacciones-sql/`).
- **BASE** (muchas NoSQL): **B**asically **A**vailable, **S**oft state, **E**ventually consistent: **prioriza** la **disponibilidad** y acepta que **las copias tarden** en coincidir (**consistencia eventual**).

**Teorema CAP:** en un sistema **distribuido**, ante una **partición de red** (P), **solo se puede garantizar** **consistencia** (C) **o** **disponibilidad** (A), **no ambas**. Por eso hay **compromisos**:

- **CP:** prefiere **datos correctos** aunque **alguna parte no responda**.
- **AP:** prefiere **responder siempre**, aunque **algunos datos estén desactualizados** un momento.

**Hoy** muchas NoSQL ofrecen **transacciones** y **consistencia configurable**; **muchas SQL escalan** horizontalmente. **Las líneas se difuminan.**

---

## 6. Escalado

- **Vertical:** **más potencia** a un servidor.
- **Horizontal:** **más servidores**. Las NoSQL están **pensadas** para esto:
  - **Replicación:** **copias** del mismo dato (alta disponibilidad).
  - **Fragmentación** (*sharding*): **repartir los datos** entre servidores según **una clave**. La **elección de la clave** es **crítica**: una mala clave **concentra** la carga en un nodo (**punto caliente**).

---

## 7. Cuándo conviene NoSQL

**Sí:**

- **Datos sin esquema fijo** o **que cambian** mucho.
- **Volumen y escritura** enormes.
- **Latencia baja** (caché, sesiones).
- **Relaciones complejas** tipo red (**grafos**).
- **Datos jerárquicos** que **se leen juntos**.

**No tanto:**

- **Transacciones complejas** entre muchos datos (**banca**, **inventario**).
- **Relaciones** muchos a muchos con **consultas variadas** (**informes**).
- **Integridad estricta** y **esquema estable**.
- **Consultas ad hoc** con **uniones** y **agregaciones** complejas.

> **Empezar con SQL** suele ser **buena idea** salvo que haya **una razón clara** para otra cosa.

---

## 8. Seguridad y administración

- **Autenticación activada** (**muchas bases NoSQL expuestas** a internet **sin clave** fueron **robadas o borradas**).
- **No exponer** la base **a internet**; **firewall** y **red privada**.
- **Cifrado** en tránsito y en reposo.
- **Roles** con **mínimo privilegio**.
- **Copias de seguridad** (ver `../backups-y-recuperacion/`) y **pruebas** de restauración.
- **Validar** los datos **en la aplicación** (o con **esquemas de validación**), porque **la base no obliga** una estructura.
- **Inyección**: también existe en NoSQL (**inyección de operadores**): **validar** el tipo de las entradas.
- **Monitoreo** y **actualizaciones**.
