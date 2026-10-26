# Backend — Acceso a datos desde el backend (teoria)

> Tema de los finales de ruta de `oficios-orientacion-vocacional-PLANIFICACION.md`. Depende de `../apis-rest/` y de `../../sql/select-y-where/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué hace el backend con la base de datos

Casi toda API real guarda y lee información: usuarios, pedidos, publicaciones. Esa información vive en una base de datos, y el backend es el intermediario. Cuando llega una petición, el servidor la valida, arma una consulta, se la pide a la base, recibe filas y las transforma en una respuesta, normalmente en formato JSON. El cliente nunca habla directo con la base: eso protege los datos y deja un único lugar donde aplicar las reglas del negocio.

Para conversar con la base, el programa necesita un controlador (driver) del motor que use, ya sea PostgreSQL, MySQL, SQLite u otro. El controlador abre una conexión, envía el texto de la consulta y devuelve los resultados. Todo lo que se vio en el oficio de SQL sobre SELECT, JOIN o transacciones sigue valiendo: el backend simplemente lo ejecuta desde el código.

## 2. Conexiones y pools

Abrir una conexión a la base es lento y las bases soportan un número limitado de conexiones simultáneas. Por eso los servidores no abren una conexión nueva por cada petición: usan un pool de conexiones, un conjunto de conexiones ya abiertas que se prestan y se devuelven. Un pool bien dimensionado evita que la base se sature en momentos de mucho tráfico.

Dos errores frecuentes son olvidarse de devolver la conexión al pool, lo que termina agotándolo y haciendo que el servidor se cuelgue esperando, y poner un pool enorme creyendo que más es mejor, cuando en realidad la base puede rendir peor con demasiadas consultas en paralelo.

## 3. Consultas parametrizadas: la defensa contra la inyección SQL

La inyección SQL ocurre cuando el programa arma la consulta pegando texto que escribió el usuario. Si alguien escribe en un campo una cadena que contiene sintaxis SQL, esa cadena puede cambiar el sentido de la consulta y leer o borrar datos que no debería. La defensa es la consulta parametrizada: la consulta se escribe con marcadores de posición y los valores viajan aparte. La base trata siempre los valores como datos, nunca como instrucciones.

Esta regla es general: ningún valor que venga del exterior se concatena dentro de una consulta. Aplica también a filtros, ordenamientos y búsquedas. Los nombres de columnas o tablas no se pueden parametrizar de la misma forma, y cuando hay que elegirlos dinámicamente se comparan contra una lista fija de valores permitidos.

## 4. ORM o SQL directo

Un ORM (mapeo objeto-relacional) permite trabajar con tablas como si fueran objetos del lenguaje: se crea, busca y modifica un objeto y la herramienta genera el SQL. Ahorra código repetitivo, ayuda a evitar la inyección y facilita cambiar de motor. A cambio, esconde las consultas reales, y es fácil generar sin darse cuenta decenas de consultas donde alcanzaba una, el llamado problema de las N+1 consultas.

El SQL directo da control total y suele ser más claro para consultas complejas con agregaciones. Muchos equipos combinan ambos: ORM para las operaciones sencillas y SQL escrito a mano para los casos pesados. Lo importante es saber siempre qué consulta se está ejecutando y cuánto tarda.

## 5. Transacciones y migraciones

Cuando una operación requiere varios pasos que deben cumplirse todos o ninguno, como descontar stock y registrar un pago, se usa una transacción. Si algún paso falla, la base deshace todo lo hecho con una reversión (rollback); si todo sale bien, se confirma con un commit. Sin transacción, un error a mitad de camino deja datos inconsistentes.

La estructura de la base también cambia con el tiempo: nuevas tablas, columnas, índices. Las migraciones son archivos versionados que describen cada cambio y se aplican en orden, de modo que cualquier entorno, desde la computadora de una persona hasta producción, pueda llegar al mismo esquema. Se guardan junto al código y se revisan como cualquier otro cambio.
