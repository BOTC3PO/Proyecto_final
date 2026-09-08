# Informatica — Modelo relacional tabla registro clave primaria (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Conceptos fundamentales

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_conceptos_basicos"
  nivel: "basico"
  tags: ["base_de_datos", "modelo_relacional"]

tipo: mc
opciones_explicitas: ["Registro", "Atributo", "Relación", "Tupla"]

enunciado: "En el modelo relacional, una fila de una tabla que contiene un conjunto de datos relacionados se denomina:"

respuesta: "Registro"

explicacion: |
  En el modelo relacional, una tabla se compone de filas (registros o tuplas) y columnas (atributos).
```

### 2 — Identificación de registros

```
metadata:
  materia: "informatica"
  tema: "clave_primaria"
  nivel: "basico"
  tags: ["clave_primaria", "identificador"]

tipo: vf

enunciado: "Una clave primaria (Primary Key) tiene la propiedad de permitir valores nulos (NULL) para asegurar la unicidad de los registros."

respuesta: falso

explicacion: |
  Una clave primaria debe ser única y, por definición, no puede contener valores nulos, ya que su función es identificar de forma inequívoca cada registro.
```

### 3 — Completar terminología

```
metadata:
  materia: "informatica"
  tema: "estructura_tabla"
  nivel: "basico"
  tags: ["tabla", "columna"]

tipo: completar
respuestas_validas:
  - "columna"
  - "atributo"

enunciado: "En una base de datos relacional, el conjunto de datos que define la estructura de una tabla (como el nombre y el tipo de dato) se conoce como ___."

respuesta: "columna"

explicacion: |
  Cada ___ representa una propiedad o característica de la entidad que estamos almacenando.
```

### 4 — Jerarquía de componentes

```
metadata:
  materia: "informatica"
  tema: "jerarquia_relacional"
  nivel: "basico"
  tags: ["orden", "estructura"]

tipo: ordenar
opciones_explicitas: ["Base de datos", "Tabla", "Registro", "Campo"]

respuesta_orden: ["Base de datos", "Tabla", "Registro", "Campo"]

enunciado: "Ordene los siguientes elementos de mayor a menor nivel de jerarquía de datos:"

explicacion: |
  La jerarquía parte desde el contenedor global (Base de datos), contiene conjuntos de datos (Tablas), que contienen filas (Registros), las cuales se dividen en unidades mínimas de información (Campos).
```

### 5 — Unicidad de la clave

```
metadata:
  materia: "informatica"
  tema: "clave_primaria_propiedades"
  nivel: "intermedio"
  tags: ["clave_primaria", "unicidad"]

variables:
  escenario: uno_de([[1, "ID_Usuario"], [2, "DNI"], [3, "Codigo_Producto"]])
  campo_id: escenario[1]

tipo: mc
opciones_explicitas: ["Puede repetirse en diferentes filas", "Debe ser única en toda la tabla", "Puede ser nula", "No tiene importancia para la integridad"]

enunciado: "Si definimos {campo_id} como la clave primaria de una tabla, esta debe cumplir con la propiedad de ser:"

respuesta: "Debe ser única en toda la tabla"

explicacion: |
  La función principal de la clave primaria es garantizar que no existan dos filas idénticas, permitiendo la identificación única de cada registro mediante el valor de {campo_id}.
```

### 6 — Concepto de Tabla y Registro

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tablas"
  nivel: "basico"
  tags: ["base_de_datos", "conceptos"]

respuesta: "registro"
tipo: "completar"
respuestas_validas:
  - "registro"
  - "fila"

enunciado: "En el modelo relacional, una estructura que contiene una colección de datos organizados en columnas y filas se denomina tabla, mientras que cada una de las filas individuales que representan una entidad única se denomina ___."

explicacion: |
  Una tabla es la estructura completa, mientras que el registro (o fila) es la unidad mínima de información que representa un objeto o entidad específica dentro de esa tabla.
```

### 7 — Identificación de Clave Primaria

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_clave_primaria"
  nivel: "basico"
  tags: ["base_de_datos", "clave_primaria"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["DNI", "Nombre", "Apellido"], ["ID_Producto", "Nombre_Prod", "Precio"]]
  respuestas: ["DNI", "ID_Producto"]

respuesta: datos[escenario_idx][0]
tipo: "mc"
opciones_explicitas: ["DNI", "Nombre", "Apellido", "ID_Producto", "Precio", "Nombre_Prod"]

enunciado: "Considerando la tabla con el esquema {datos[escenario_idx]}, ¿cuál de los siguientes campos es el candidato ideal para actuar como clave primaria para asegurar que cada registro sea único?"

explicacion: |
  La clave primaria debe ser un atributo que no se repita entre los registros. En el escenario {datos[escenario_idx][0]}, ese campo es {datos[escenario_idx][0]}.
```

### 8 — Propiedades de la Clave Primaria

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_clave_primaria"
  nivel: "intermedio"
  tags: ["base_de_datos", "reglas"]

respuesta: falso
tipo: "vf"

enunciado: "En un modelo relacional, una clave primaria puede contener valores nulos (NULL) para permitir que ciertos registros no tengan un identificador único asignado."

explicacion: |
  Falso. Una de las reglas de integridad de la clave primaria es la 'Integridad de Entidad', que prohíbe estrictamente que los campos que forman la clave primaria sean nulos.
```

### 9 — Proceso de Normalización de Datos

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tablas"
  nivel: "intermedio"
  tags: ["base_de_datos", "ordenar"]

tipo: ordenar
opciones_explicitas: ["Identificar la entidad", "Definir los atributos", "Asignar la clave primaria"]
respuesta_orden: ["Identificar la entidad", "Definir los atributos", "Asignar la clave primaria"]

enunciado: "Para diseñar correctamente una tabla en un modelo relacional, se debe seguir un orden lógico de diseño. Ordena los siguientes pasos:"

explicacion: |
  Primero se identifica la entidad (ej. Usuario), luego sus atributos (ej. Nombre, Email) y finalmente se establece la clave primaria (ej. ID_Usuario).
```

### 10 — Cálculo de Capacidad de Identificación

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_clave_primaria"
  nivel: "avanzado"
  tags: ["base_de_datos", "logica"]

variables:
  escenario_idx: uno_de([0, 1])
  valores_max: [100, 50]

respuesta: valores_max[escenario_idx]
tipo: completar
tolerancia_abs: 0

enunciado: "Si una tabla de 'Clientes' tiene una clave primaria que solo permite valores numéricos del 1 al {valores_max[escenario_idx]}, ¿cuántos registros distintos se pueden almacenar como máximo sin violar la restricción de clave primaria?"

explicacion: |
  La clave primaria debe ser única. Si el rango de valores disponibles es de 1 a {valores_max[escenario_idx]}, el número máximo de registros es {valores_max[escenario_idx]}.
```

### 11 — El concepto de Registro

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_conceptos_basicos"
  nivel: "basico"
  tags: ["base_de_datos", "modelo_relacional"]

respuesta: "fila"
tipo: completar
respuestas_validas:
  - "fila"
  - "registro"

enunciado: "En el modelo relacional, una estructura de datos bidimensional se compone de columnas (atributos) y ___ (tuplas)."

explicacion: |
  En el modelo relacional, una tabla se compone de filas (también llamadas tuplas o registros) y columnas (atributos).
```

### 12 — Identificación de la Clave Primaria

```
metadata:
  materia: "informatica"
  tema: "clave_primaria_caracteristicas"
  nivel: "intermedio"
  tags: ["base_de_datos", "clave_primaria"]

respuesta: falso
tipo: vf
enunciado: "Si una tabla tiene una columna llamada 'Edad', ¿puede esta ser designada como la clave primaria de la tabla si existen múltiples personas con la misma edad?"

explicacion: |
  La clave primaria debe ser única para cada registro. Si dos filas tienen el mismo valor en la columna clave, el sistema no podría distinguirlas, violando el principio de integridad de entidad.
```

### 13 — Atributos vs. Registros

```
metadata:
  materia: "informatica"
  tema: "estructura_tabla"
  nivel: "basico"
  tags: ["base_de_datos", "modelo_relacional"]

respuesta: "columnas"
tipo: mc
opciones_explicitas: ["filas", "columnas", "celdas", "bases"]

enunciado: "Si un registro representa una entidad completa (como un usuario), las ___ representan las propiedades o características de esa entidad."

explicacion: |
  Las columnas definen la estructura y el tipo de datos de los atributos, mientras que las filas contienen los datos específicos de cada instancia.
```

### 14 — La unicidad de la Clave Primaria

```
metadata:
  materia: "informatica"
  tema: "integridad_entidad"
  nivel: "intermedio"
  tags: ["base_de_datos", "clave_primaria"]

respuesta: "ID_Estudiante"
tipo: completar
respuestas_validas:
  - "ID_Estudiante"
  - "codigo_estudiante"
  - "estudiante_id"

enunciado: |
  Dada la siguiente tabla de 'Estudiantes':
  | Nombre | Apellido | DNI |
  |--------|----------|-----|
  | Juan   | Perez    | 123 |
  | Ana    | Lopez    | 456 |

  Si queremos garantizar que no haya duplicados, la mejor opción para una clave primaria sería ___.

explicacion: |
  Aunque el DNI suele ser único, en el diseño de bases de datos se prefiere usar una clave artificial (como un ID) que sea inmutable y garantice la unicidad técnica sin depender de datos externos que podrían cambiar o repetirse por error.
```

### 15 — Jerarquía de elementos

```
metadata:
  materia: "informatica"
  tema: "jerarquia_relacional"
  nivel: "basico"
  tags: ["base_de_datos", "modelo_relacional"]

respuesta_orden: ["Base de Datos", "Tabla", "Registro", "Atributo"]
tipo: ordenar
opciones_explicitas: ["Base de Datos", "Tabla", "Registro", "Atributo"]

enunciado: "Ordena los elementos de mayor a menor jerarquía en un modelo relacional (desde el contenedor global hasta el dato mínimo):"

explicacion: |
  La jerarquía lógica es: La Base de Datos contiene múltiples Tablas; cada Tabla contiene múltiples Registros; y cada Registro está compuesto por Atributos (valores).
```

### 16 — Diferencia entre Tabla y Registro

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tabla_registro"
  nivel: "basico"
  tags: ["base_de_datos", "conceptos_basicos"]

tipo: mc
opciones_explicitas: ["La tabla es una unidad de datos y el registro es un conjunto de tablas", "La tabla es la estructura que contiene datos y el registro es una fila de dicha estructura", "La tabla es un dato individual y el registro es la base de datos completa", "No hay diferencia, son sinónimos"]

respuesta: "La tabla es la estructura que contiene datos y el registro es una fila de dicha estructura"

enunciado: "En el modelo relacional, ¿qué distingue fundamentalmente a una tabla de un registro?"

explicacion: |
  Una tabla (o relación) es la entidad completa que define la estructura y el conjunto de datos, mientras que un registro (o tupla) es una única entrada o fila que representa un elemento específico dentro de esa tabla.
```

### 17 — La función de la Clave Primaria

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_clave_primaria"
  nivel: "basico"
  tags: ["base_de_datos", "clave_primaria"]

tipo: completar
respuestas_validas:
  - "identificar"
  - "diferenciar"
  - "única"

respuesta: "única"

enunciado: "A diferencia de un campo común, la clave primaria debe garantizar que cada registro sea ___."

explicacion: |
  La clave primaria (Primary Key) tiene la propiedad de unicidad, lo que significa que no puede haber dos filas con el mismo valor en ese campo, permitiendo identificar de forma inequívoca cada registro.
```

### 18 — Atributos vs. Registros

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tabla_registro"
  nivel: "intermedio"
  tags: ["base_de_datos", "atributos"]

tipo: vf

respuesta: falso

enunciado: "¿Es correcto afirmar que un registro es la colección de todos los atributos (columnas) de una tabla?"

explicacion: |
  Falso. Un registro es una instancia de datos (una fila). La colección de todos los registros es la tabla. Los atributos son las columnas que definen la estructura de la tabla.
```

### 19 — Jerarquía de elementos

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_estructura"
  nivel: "basico"
  tags: ["base_de_datos", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Base de datos", "Tabla", "Registro", "Campo"]

respuesta_orden: ["Base de datos", "Tabla", "Registro", "Campo"]

enunciado: "Ordena los siguientes elementos de mayor a menor jerarquía de abstracción en un modelo relacional:"

explicacion: |
  La jerarquía lógica va desde el contenedor global (Base de datos), que contiene estructuras (Tablas), que contienen instancias de datos (Registros), que a su vez se componen de unidades mínimas de información (Campos/Atributos).
```

### 20 — Unicidad de la Clave Primaria

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_clave_primaria"
  nivel: "intermedio"
  tags: ["base_de_datos", "integridad"]

respuesta: "Debe ser única y no nula"

tipo: mc
opciones_explicitas: ["Puede contener valores nulos", "Debe ser única y no nula"]

enunciado: "Considerando la integridad de entidad, ¿cuál es la distinción principal de una clave primaria respecto a un campo de texto normal?"

pasos:
  - "Identificar la propiedad de unicidad"
  - "Verificar la restricción de nulidad"

explicacion: |
  La clave primaria tiene dos restricciones críticas que un campo normal no tiene: debe ser única en toda la tabla y no puede contener valores nulos (NOT NULL).
```

### 21 — Identificación de la Clave Primaria

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tablas"
  nivel: "basico"
  tags: ["base_de_datos", "clave_primaria"]

variables:
  escenario: uno_de([["ID_Usuario, Nombre, Email", "ID_Usuario"], ["DNI, Apellido, Dirección", "DNI"], ["Codigo_Producto, Descripcion, Precio", "Codigo_Producto"], ["Matricula, Estudiante, Curso", "Matricula"]])

enunciado: "En una base de datos de una tienda, se tiene la siguiente estructura de tabla: {escenario[0]}. El campo que actúa como clave primaria es ___."

respuestas_validas:
  - escenario[1]
respuesta: escenario[1]

tipo: completar

explicacion: |
  La clave primaria es el campo que identifica de forma única e irrepetible a cada registro en una tabla.
```

### 22 — Concepto de Registro

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tablas"
  nivel: "basico"
  tags: ["base_de_datos", "registro"]

enunciado: "¿Un registro en una base de datos relacional es equivalente a una fila que contiene datos de un objeto o entidad específica?"

tipo: vf
respuesta: verdadero

explicacion: |
  En el modelo relacional, un registro (o tupla) es la colección de atributos que describen una única instancia de la entidad.
```

### 23 — Atributos y Columnas

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tablas"
  nivel: "basico"
  tags: ["base_de_datos", "columnas"]

variables:
  caso: uno_de([["ID, Fecha, Monto", "ID"], ["Codigo_Cliente, Nombre, Telefono", "Codigo_Cliente"], ["Legajo, Empleado, Puesto", "Legajo"]])

enunciado: "Si tenemos la tabla con las columnas {caso[0]}, ¿cuál de ellas es la más adecuada para ser la clave primaria?"

opciones_explicitas: ["ID", "Codigo_Cliente", "Legajo", "Ninguna de las anteriores"]

tipo: mc

respuesta: caso[1]

explicacion: |
  La clave primaria debe ser un atributo que no se repita entre distintos registros.
```

### 24 — Integridad de la Clave Primaria

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tablas"
  nivel: "intermedio"
  tags: ["base_de_datos", "integridad"]

variables:
  propiedad: uno_de(["Un valor de clave primaria puede ser nulo (NULL)", "Dos registros pueden tener la misma clave primaria", "La clave primaria puede ser un número repetido"])

enunciado: "Analizando las reglas de integridad de entidad: {propiedad}. ¿Es esto verdadero o falso?"

tipo: vf
respuesta: falso

explicacion: |
  La integridad de entidad establece que ninguna parte de una clave primaria puede ser nula y que debe ser única.
```

### 25 — Componentes de una Tabla

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tablas"
  nivel: "basico"
  tags: ["base_de_datos", "estructura"]

variables:
  orden_estructural: ["Nombre de la tabla", "Definición de columnas (esquema)", "Inserción de registros (datos)"]

enunciado: "Ordena los pasos lógicos para la creación y uso de una tabla en una base de datos:"

opciones_explicitas: ["Nombre de la tabla", "Definición de columnas (esquema)", "Inserción de registros (datos)"]

tipo: ordenar

respuesta_orden: ["Nombre de la tabla", "Definición de columnas (esquema)", "Inserción de registros (datos)"]

explicacion: |
  Primero se define la identidad (nombre), luego la estructura (columnas/esquema) y finalmente se puebla con información (registros).
```
