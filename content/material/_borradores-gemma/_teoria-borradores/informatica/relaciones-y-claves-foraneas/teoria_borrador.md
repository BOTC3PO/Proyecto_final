# Informática — Relaciones y Claves Foráneas (teoría)

> Tema del MAPA: `relaciones-y-claves-foraneas`. Depende de `../bases-de-datos-introduccion/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Conceptos fundamentales para modelar bases de datos relacionales.

---

## 1. Clave Primaria: Identificador Único

La clave primaria es un campo o conjunto de campos que permite identificar de forma única a cada registro dentro de una tabla. Su función principal es garantizar que no existan duplicados y que ningún registro quede sin un valor asignado (no nulo). Por ejemplo, en una tabla de "Clientes", el número de documento o un ID autoincremental pueden actuar como clave primaria.

Una clave primaria puede ser un solo campo (como un `ID`) o una combinación de varios campos (clave compuesta), siempre que su conjunto sea único. Este mecanismo es esencial para mantener la integridad de los datos y facilitar búsquedas rápidas en grandes volúmenes de información.

---

## 2. Clave Foránea: Conexión entre Tablas

La clave foránea (foreign key) establece una relación entre dos tablas, vinculando un campo de una tabla con la clave primaria o una clave única de otra. Su propósito es mantener coherencia y evitar inconsistencias en los datos al asegurar que solo se puedan insertar valores válidos.

Por ejemplo, si hay una tabla "Pedidos" y otra "Clientes", la clave foránea en "Pedidos" (como `cliente_id`) debe coincidir con un valor existente en la clave primaria de "Clientes". Esto evita registros como un pedido asociado a un cliente inexistente.

Aunque técnicamente una clave foránea puede referirse a cualquier campo único (no necesariamente una clave primaria), su uso más común es vincularla directamente con claves primarias para simplificar el diseño de bases de datos relacionales.

---

## 3. Tipos de Relaciones entre Tablas

Las relaciones entre tablas se clasifican según la cantidad de registros que pueden asociarse en cada dirección:

- **Uno a muchos (1:N)**: Un registro en una tabla está vinculado a múltiples registros en otra. Por ejemplo, un "Cliente" puede tener varios "Pedidos".
  
- **Muchos a muchos (N:M)**: Varios registros de una tabla están relacionados con varios de otra. Esto se logra mediante una tercera tabla intermedia que almacena las conexiones. Un caso típico es la relación entre "Estudiantes" y "Materias", donde un estudiante puede cursar varias materias y una materia tiene muchos estudiantes.

- **Uno a uno (1:1)**: Cada registro en una tabla está vinculado a exactamente un registro en otra. Es menos común y suele usarse cuando se divide una entidad grande para optimizar el diseño, como separar datos sensibles de información general.

---

## 4. Integridad Referencial

La integridad referencial es un principio que garantiza que las claves foráneas mantengan relaciones válidas entre tablas. Esto incluye:

- **Restricciones de inserción**: No se pueden agregar registros con valores de clave foránea que no existan en la tabla destino.
- **Restricciones de actualización**: Si un valor de clave primaria cambia, los registros vinculados deben actualizar su clave foránea o eliminarse.
- **Restricciones de eliminación**: Eliminar un registro con claves foráneas asociadas puede requerir primero borrar o modificar esos registros en la tabla dependiente.

Estas reglas se implementan mediante sistemas de gestión de bases de datos (como MySQL, PostgreSQL) y son esenciales para evitar datos incoherentes.

---

## N. Conexión con lo que sigue

Este tema prepara el terreno para entender cómo se traducen las relaciones en consultas SQL (`JOIN`s), así como para modelar esquemas complejos usando herramientas de diseño como ERwin o MySQL Workbench, expuestos en `../sql-consultas/`.