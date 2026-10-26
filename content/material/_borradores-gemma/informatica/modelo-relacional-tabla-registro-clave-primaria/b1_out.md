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
respuestas_validas: ["columna", "atributo"]

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

respuesta: ["Base de datos", "Tabla", "Registro", "Campo"]

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
  campo_id: escenario[escenario[0]][1]

tipo: mc
opciones_explicitas: ["Puede repetirse en diferentes filas", "Debe ser única en toda la tabla", "Puede ser nula", "No tiene importancia para la integridad"]

enunciado: "Si definimos {escenario[0][1]} como la clave primaria de una tabla, esta debe cumplir con la propiedad de ser:"

respuesta: "Debe ser única en toda la tabla"

explicacion: |
  La función principal de la clave primaria es garantizar que no existan dos filas idénticas, permitiendo la identificación única de cada registro mediante el valor de {campo_id}.
```