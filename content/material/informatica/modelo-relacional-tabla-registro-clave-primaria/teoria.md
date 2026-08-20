# Informática — Modelo relacional: tabla, registro y clave primaria (teoría)

> Tema del MAPA: `informatica/modelo-relacional-tabla-registro-clave-primaria`. Depende de modelo relacional conceptos basicos (ver `../dependencias.md`).

## Tipo de teoría

**Presentación** — Introducción a los elementos básicos que conforman una base de datos relacional.

---

## 1. La tabla como estructura básica

En el modelo relacional, la **tabla** es la unidad fundamental para organizar y almacenar información. Está compuesta por filas y columnas, donde cada fila representa un conjunto de datos relacionados (un registro) y cada columna define una propiedad específica de esos datos (un atributo). Por ejemplo, en una tabla de "Alumnos", las columnas podrían ser "DNI", "Apellido" o "Fecha de nacimiento", mientras que cada fila contaría con los valores correspondientes a un alumno particular.

Las tablas no solo almacenan información, sino que también establecen reglas para garantizar la integridad de los datos. Estas reglas incluyen cómo se relacionan entre sí distintas tablas (a través de claves foráneas) y qué restricciones aplican a los valores que pueden contener las columnas.

[IMAGEN: Tabla con encabezados "DNI", "Apellido" y "Fecha de nacimiento", y tres filas con datos ejemplos]

---

## 2. El registro y sus características

Cada **registro** (también llamado *tupla*) es una fila dentro de una tabla, que contiene un conjunto de valores asociados a los atributos definidos en las columnas. Por ejemplo, si la tabla "Alumnos" tiene tres columnas, un registro podría ser: `DNI: 12345678, Apellido: Pérez, Fecha de nacimiento: 05/09/2005`.

Los registros son los elementos que se manipulan en operaciones como inserción (agregar), actualización o eliminación. La importancia del registro radica en que representa una entidad específica dentro del modelo relacional —como un estudiante, un producto o un cliente— y permite trabajar con sus datos de manera integrada.

---

## 3. Los atributos y su definición

Las **columnas** de una tabla se denominan también *atributos* y definen qué tipo de información se almacena en cada registro. Cada atributo tiene un nombre (como "DNI") y un tipo de dato asociado (por ejemplo, entero, texto o fecha). Estos tipos determinan qué valores pueden ser ingresados y cómo se procesa la información.

Un atributo puede tener una restricción especial: la **clave primaria**. Esta columna (o combinación de columnas) garantiza que cada registro sea único dentro de la tabla. Por ejemplo, en "Alumnos", el DNI podría ser la clave primaria porque no se repite entre estudiantes.

---

## 4. La clave primaria y su función

La **clave primaria** es un atributo o conjunto de atributos que identifica de forma única a cada registro en una tabla. Su principal característica es que **no permite valores nulos**, ya que si un registro no tiene valor para la clave, no se puede diferenciar de otro.

Ejemplo: En una tabla "Productos", el código del producto podría ser la clave primaria. Si dos registros tienen el mismo código, se considerarían duplicados y se violaría la regla de unicidad. Por eso, las bases de datos forzan que los valores de la clave primaria sean distintos en cada fila.

Además, la clave primaria es crucial para relacionar tablas entre sí (por medio de claves foráneas), lo que permite estructurar información compleja en múltiples entidades interconectadas.

---

## 5. Conexión con lo que sigue

Este tema forma la base para entender cómo se organizan los datos en una base relacional, lo cual es clave para temas como **normalización de bases de datos** (ver normalizacion basica) y el uso de **claves foráneas** (ver clave foranea).