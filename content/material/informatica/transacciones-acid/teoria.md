# Informática — Transacciones ACID (teoría)

> Tema del MAPA: `informatica/transacciones-acid`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Explicación de las propiedades que garantizan la integridad en operaciones de bases de datos.

---

## 1. ¿Qué es una transacción?

Una transacción es una **unidad lógica de trabajo** que agrupa una serie de operaciones relacionadas con una base de datos. Estas operaciones, como insertar, actualizar o eliminar registros, deben ejecutarse como un bloque indivisible: todo o nada. Por ejemplo, si se intenta transferir dinero entre cuentas bancarias, la transacción incluiría primero restar el monto de la cuenta origen y luego sumarlo a la destino. Si en algún paso falla (como un error de conexión), toda la operación se revierte para evitar estados inconsistentes.

## 2. Atomicidad: El principio del "todo o nada"

La **atomicidad** es la primera propiedad clave de las transacciones ACID. Garantiza que todas las operaciones dentro de una transacción se completan correctamente, o bien ninguna de ellas se aplica. Esto evita situaciones donde solo parte de un proceso se ejecute, dejando la base de datos en un estado inválido. Por ejemplo, si durante una transferencia bancaria el sistema colapsa después de restar el monto pero antes de sumarlo al destino, la atomicidad asegura que ambos pasos se anulen juntos.

## 3. Consistencia: Mantener reglas y restricciones

La **consistencia** garantiza que una transacción lleve a la base de datos de un estado válido a otro también válido. Esto significa que las operaciones dentro de la transacción no violan las reglas definidas, como claves primarias únicas o restricciones de integridad referencial. Si, por ejemplo, se intenta registrar una venta con un producto inexistente, la transacción fallará y el sistema mantendrá su estado previo.

## 4. Aislamiento: Prevenir conflictos concurrentes

El **aislamiento** asegura que las operaciones de una transacción no interfieran con otras que se ejecutan simultáneamente. Sin este principio, múltiples usuarios podrían leer o modificar datos en un estado intermedio, generando resultados impredecibles. Por ejemplo, si dos empleados intentan actualizar el stock de un producto al mismo tiempo, el aislamiento evita que ambos lean la cantidad original y sobreescriban incorrectamente los valores.

## 5. Durabilidad: Permanencia ante fallos

La **durabilidad** es la propiedad que asegura que, una vez confirmada (committed) una transacción, sus cambios permanezcan en la base de datos incluso si ocurre un fallo del sistema. Esto se logra mediante mecanismos como logs de transacciones o copias de seguridad, que guardan los registros de las operaciones antes de aplicarlas definitivamente.

---

## N. Conexión con lo que sigue

Este tema es fundamental para entender cómo funcionan los sistemas de gestión de bases de datos en escenarios reales, y servirá como base para temas como concurrencia y bloqueos o sistema de logs.