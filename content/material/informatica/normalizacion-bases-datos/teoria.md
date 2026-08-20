# Informática — Normalización de bases de datos (teoría)

> Tema del MAPA: `informatica/normalizacion-bases-datos`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Proceso para organizar datos en bases de manera eficiente y evitar errores.

---

## 1. Redundancia de datos

La redundancia ocurre cuando la misma información se guarda en varios lugares de la base, sin necesidad. Por ejemplo: si un cliente vive en Buenos Aires y sus datos están repetidos en tres tablas distintas, cualquier cambio en uno solo de esos registros puede dejar otros con información desactualizada.

Esto no solo ocupa más espacio, sino que genera inconsistencias. Si se actualiza el teléfono de un cliente en una tabla pero no en otra, al consultar la base desde otro punto, aparecerá un dato distinto. La redundancia también dificulta mantener la integridad del conjunto de datos, especialmente cuando hay muchas tablas involucradas.

## 2. Anomalías de actualización

Las anomalías son errores que surgen por la mala organización de los datos. Hay tres tipos principales:

- **Anomalía de inserción**: No se puede agregar un registro sin tener otros datos completos. Por ejemplo, si una tabla requiere el nombre del cliente para insertar un pedido, no se puede registrar un pedido sin ese dato aún.
- **Anomalía de borrado**: Al eliminar un registro, se pierde información importante. Si se borra un cliente y en otra tabla hay pedidos asociados solo a su ID, esos pedidos quedan sin contexto.
- **Anomalía de actualización**: Como mencionamos antes, cuando un dato está repetido y no se cambia en todos los lugares donde aparece.

Estas anomalías complica la gestión de datos, aumenta el riesgo de errores y hace más difícil mantener la coherencia entre las tablas.

## 3. Objetivo de la normalización

La normalización busca resolver estos problemas mediante un diseño estructurado. Su objetivo principal es **minimizar la redundancia** y **evitar las anomalías mencionadas**. No se trata solo de ordenar filas o columnas, sino de definir relaciones claras entre las tablas.

Un buen diseño normalizado permite que cada dato esté almacenado en un único lugar, lo que facilita actualizaciones, consultas y mantenimiento. Además, mejora la eficiencia del sistema al reducir el volumen de datos repetidos y garantizar consistencia a través de claves primarias y foráneas.

## 4. El proceso de normalización

El proceso se divide en **formas normales**, que son reglas progresivas para organizar los datos. La primera forma normal (1FN) exige que cada columna contenga un solo valor, sin listas o grupos dentro de una celda. La segunda forma normal (2FN) elimina dependencias parciales, asegurando que todos los campos dependan de la clave primaria. La tercera forma normal (3FN) se enfoca en eliminar dependencias transitivas, donde un campo no depende directamente de la clave primaria.

Aunque las formas normales son técnicas específicas, el principio general es **descomponer tablas grandes en partes más pequeñas y coherentes**, manteniendo relaciones claras entre ellas. Esto implica analizar qué datos están relacionados y cómo se pueden separar sin perder información relevante.

## N. Conexión con lo que sigue

Este tema es base para entender el diseño de bases de datos avanzadas, como las que se estudian en `../diseño_bases_datos/` o claves primarias y foraneas.