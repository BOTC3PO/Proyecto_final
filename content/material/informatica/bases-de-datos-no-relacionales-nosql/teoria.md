# Informática — Bases de datos no relacionales (NoSQL) (teoría)

> Tema propuesto en `../../_plan-faltantes/HUECOS-POR-TITULOS.md` (sin ID en `troncos.md`). Depende de `../transacciones-acid/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — qué es NoSQL, los tipos, el teorema CAP y cuándo usarlas son secciones separables.

---

## 1. Qué significa NoSQL

Las bases de datos **relacionales** guardan la información en tablas con filas y columnas y se consultan con SQL (ver `../modelo-relacional-tabla-registro-clave-primaria/` y `../sql-consultas-joins-agregaciones/`). El término **NoSQL** se usa para otras familias de bases de datos que no usan ese modelo; muchas veces se lee como *Not only SQL* ("no solo SQL"). No significa "sin estructura" ni "mejor que SQL": son herramientas distintas para necesidades distintas.

## 2. Por qué aparecieron

Las aplicaciones de Internet empezaron a manejar **enormes volúmenes** de datos, con millones de usuarios, datos de formas variadas y necesidad de responder rápido en muchos servidores. Las bases relacionales funcionan muy bien, pero escalar horizontalmente (repartir los datos en muchas máquinas) es más difícil cuando hay uniones complejas y transacciones estrictas. Las NoSQL simplifican el modelo para facilitar ese reparto.

## 3. Los cuatro tipos principales

| Tipo | Cómo guarda los datos | Ejemplos de uso |
|---|---|---|
| **Clave-valor** | Pares clave → valor, como un diccionario | Cachés, sesiones de usuario, carritos |
| **Documentos** | Documentos tipo JSON con campos anidados | Catálogos de productos, perfiles, contenido |
| **Columnares** | Los datos se guardan por columnas o familias de columnas | Registros masivos, series de tiempo, analítica |
| **Grafos** | Nodos y relaciones entre ellos | Redes sociales, recomendaciones, rutas |

Ejemplos de productos: Redis (clave-valor), MongoDB (documentos), Cassandra (columnar) y Neo4j (grafos).

Un documento puede verse así: un cliente con su nombre y una lista de pedidos dentro del mismo registro, sin tablas separadas. Eso evita uniones, pero repite información.

## 4. Esquema flexible

En una base relacional se define de antemano el **esquema** (qué columnas y qué tipos). Muchas NoSQL permiten un **esquema flexible**: dos documentos de la misma colección pueden tener campos distintos. Es cómodo cuando los datos cambian, pero el control de la estructura pasa a la aplicación.

## 5. ACID y BASE

Las relacionales ofrecen transacciones **ACID** (atomicidad, consistencia, aislamiento, durabilidad; ver `../transacciones-acid/`). Muchas NoSQL distribuidas adoptan un modelo llamado **BASE**: disponibilidad básica, estado "blando" y **consistencia eventual**, es decir, que las copias de un dato pueden diferir por un momento pero convergen.

## 6. El teorema CAP

El **teorema CAP** (propuesto por Eric Brewer) dice que un sistema distribuido no puede garantizar a la vez **Consistencia**, **Disponibilidad** y **Tolerancia a particiones** (cortes de comunicación entre nodos). Como las particiones pueden ocurrir en cualquier red, en la práctica hay que elegir entre priorizar la consistencia o la disponibilidad cuando hay un corte.

## 7. Cuándo conviene cada una

- **Relacional**: datos muy estructurados, relaciones claras, necesidad de transacciones confiables (bancos, facturación, inventario).
- **NoSQL**: muchísimo volumen, estructura cambiante, lecturas muy rápidas, datos conectados como una red (grafos).
- Es común combinar ambas en una misma aplicación.

## Conexión con lo que sigue

Con estas ideas se puede elegir una base de datos según el problema, y entender cómo se conectan los servicios en la arquitectura de una aplicación (`../diseno-y-arquitectura-de-software/`).
