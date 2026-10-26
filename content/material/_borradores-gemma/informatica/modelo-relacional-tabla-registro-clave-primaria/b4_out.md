### 1 — Diferencia entre Tabla y Registro
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

### 2 — La función de la Clave Primaria
```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_clave_primaria"
  nivel: "basico"
  tags: ["base_de_datos", "clave_primaria"]

tipo: completar
respuestas_validas: ["identificar", "diferenciar", "única"]

respuesta: "única"

enunciado: "A diferencia de un campo común, la clave primaria debe garantizar que cada registro sea ___."

explicacion: |
  La clave primaria (Primary Key) tiene la propiedad de unicidad, lo que significa que no puede haber dos filas con el mismo valor en ese campo, permitiendo identificar de forma inequívoca cada registro.
```

### 3 — Atributos vs. Registros
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

### 4 — Jerarquía de elementos
```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_estructura"
  nivel: "basico"
  tags: ["base_de_datos", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Base de datos", "Tabla", "Registro", "Campo"]

respuesta: ["Base de datos", "Tabla", "Registro", "Campo"]

enunciado: "Ordena los siguientes elementos de mayor a menor jerarquía de abstracción en un modelo relacional:"

explicacion: |
  La jerarquía lógica va desde el contenedor global (Base de datos), que contiene estructuras (Tablas), que contienen instancias de datos (Registros), que a su vez se componen de unidades mínimas de información (Campos/Atributos).
```

### 5 — Unicidad de la Clave Primaria
```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_clave_primaria"
  nivel: "intermedio"
  tags: ["base_de_datos", "integridad"]

variables:
  idx: uno_de([0, 1])

respuesta: tabla[idx][1]

tipo: mc
opciones_explicitas: ["Puede contener valores nulos", "Debe ser única y no nula"]

enunciado: "Considerando la integridad de entidad, ¿cuál es la distinción principal de una clave primaria respecto a un campo de texto normal?"

pasos:
  - "Identificar la propiedad de unicidad"
  - "Verificar la restricción de nulidad"

explicacion: |
  La clave primaria tiene dos restricciones críticas que un campo normal no tiene: debe ser única en toda la tabla y no puede contener valores nulos (NOT NULL).
```