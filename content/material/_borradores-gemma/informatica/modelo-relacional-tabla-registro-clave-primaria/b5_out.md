### 1 — Identificación de la Clave Primaria
```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tablas"
  nivel: "basico"
  tags: ["base_de_datos", "clave_primaria"]

variables:
  escenario: uno_de([
    ["ID_Usuario, Nombre, Email", "ID_Usuario"],
    ["DNI, Apellido, Dirección", "DNI"],
    ["Codigo_Producto, Descripcion, Precio", "Codigo_Producto"],
    ["Matricula, Estudiante, Curso", "Matricula"]
  ])
  idx: uno_de([0,1,2,3])

enunciado: "En una base de datos de una tienda, se tiene la siguiente estructura de tabla: {escenario[idx][0]}. El campo que actúa como clave primaria es ___."

respuestas_validas: ["{escenario[idx][1]}"]

tipo: completar

explicacion: |
  La clave primaria es el campo que identifica de forma única e irrepetible a cada registro en una tabla.
```

### 2 — Concepto de Registro
```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tablas"
  nivel: "basico"
  tags: ["base_de_datos", "registro"]

variables:
  datos: [
    ["Una fila de una tabla que representa un objeto único", "verdadero"],
    ["Un conjunto de todas las filas de una tabla", "falso"],
    ["El nombre de una columna en la tabla", "falso"]
  ]
  idx: uno_de([0,1,2])

enunciado: "¿Un registro en una base de datos relacional es equivalente a una fila que contiene datos de un objeto o entidad específica? {datos[idx][1]}"

tipo: vf

respuesta: datos[idx][1]

explicacion: |
  En el modelo relacional, un registro (o tupla) es la colección de atributos que describen una única instancia de la entidad.
```

### 3 — Atributos y Columnas
```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tablas"
  nivel: "basico"
  tags: ["base_de_datos", "columnas"]

variables:
  caso: uno_de([
    ["Nombre, Edad, Ciudad", "Nombre"],
    ["Producto, Stock, Precio", "Producto"],
    ["ID, Fecha, Monto", "ID"]
  ])
  idx: uno_de([0,1,2])

enunciado: "Si tenemos la tabla con las columnas {caso[idx][0]}, ¿cuál de ellas es la más adecuada para ser la clave primaria?"

opciones_explicitas: ["{caso[idx][0]}", "Otra columna no listada"]

tipo: mc

respuesta: caso[idx][0]

explicacion: |
  La clave primaria debe ser un atributo que no se repita entre distintos registros.
```

### 4 — Integridad de la Clave Primaria
```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tablas"
  nivel: "intermedio"
  tags: ["base_de_datos", "integridad"]

variables:
  propiedad: uno_de([
    ["Un valor de clave primaria puede ser nulo (NULL)", "falso"],
    ["Dos registros pueden tener la misma clave primaria", "falso"],
    ["La clave primaria puede ser un número repetido", "falso"]
  ])
  idx: uno_de([0,1,2])

enunciado: "Analizando las reglas de integridad de entidad: {propiedad[idx][0]}"

tipo: vf

respuesta: propiedad[idx][1]

explicacion: |
  La integridad de entidad establece que ninguna parte de una clave primaria puede ser nula y que debe ser única.
```

### 5 — Componentes de una Tabla
```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tablas"
  nivel: "basico"
  tags: ["base_de_datos", "estructura"]

variables:
  orden_estructural: [
    "Nombre de la tabla",
    "Definición de columnas (esquema)",
    "Inserción de registros (datos)"
  ]

enunciado: "Ordena los pasos lógicos para la creación y uso de una tabla en una base de datos:"

opciones_explicitas: ["Nombre de la tabla", "Definición de columnas (esquema)", "Inserción de registros (datos)"]

tipo: ordenar

respuesta: ["Nombre de la tabla", "Definición de columnas (esquema)", "Inserción de registros (datos)"]

explicacion: |
  Primero se define la identidad (nombre), luego la estructura (columnas/esquema) y finalmente se puebla con información (registros).
```