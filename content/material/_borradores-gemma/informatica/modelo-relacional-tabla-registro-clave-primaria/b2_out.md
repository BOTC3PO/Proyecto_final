### 1 — Concepto de Tabla y Registro
```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tablas"
  nivel: "basico"
  tags: ["base_de_datos", "conceptos"]

respuesta: "registro"
tipo: "completar"
respuestas_validas: ["registro", "fila"]

enunciado: "En el modelo relacional, una estructura que contiene una colección de datos organizados en columnas y filas se denomina tabla, mientras que cada una de las filas individuales que representan una entidad única se denomina ___."

explicacion: |
  Una tabla es la estructura completa, mientras que el registro (o fila) es la unidad mínima de información que representa un objeto o entidad específica dentro de esa tabla.
```

### 2 — Identificación de Clave Primaria
```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_clave_primaria"
  nivel: "basico"
  tags: ["base_de_datos", "clave_primaria"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["DNI", "Nombre", "Apellido"],
    ["ID_Producto", "Nombre_Prod", "Precio"]
  ]
  respuestas: [
    "DNI",
    "ID_Producto"
  ]

respuesta: datos[escenario_idx][0]
tipo: "mc"
opciones_explicitas: ["DNI", "Nombre", "Apellido", "ID_Producto", "Precio", "Nombre_Prod"]

enunciado: "Considerando la tabla con el esquema {datos[escenario_idx]}, ¿cuál de los siguientes campos es el candidato ideal para actuar como clave primaria para asegurar que cada registro sea único?"

explicacion: |
  La clave primaria debe ser un atributo que no se repita entre los registros. En el escenario {datos[escenario_idx][0]}, ese campo es {datos[escenario_idx][0]}.
```

### 3 — Propiedades de la Clave Primaria
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

### 4 — Proceso de Normalización de Datos
```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tablas"
  nivel: "intermedio"
  tags: ["base_de_datos", "ordenar"]

respuesta: ["Identificar la entidad", "Definir los atributos", "Asignar la clave primaria"]
tipo: "ordenar"
opciones_explicitas: ["Definir los atributos", "Identificar la entidad", "Asignar la clave primaria"]

enunciado: "Para diseñar correctamente una tabla en un modelo relacional, se debe seguir un orden lógico de diseño. Ordena los siguientes pasos:"

pasos:
  - "Determinar qué objeto o concepto se quiere representar."
  - "Decidir qué propiedades tendrá ese objeto."
  - "Elegir el campo único que evitará duplicados."

explicacion: |
  Primero se identifica la entidad (ej. Usuario), luego sus atributos (ej. Nombre, Email) y finalmente se establece la clave primaria (ej. ID_Usuario).
```

### 5 — Cálculo de Capacidad de Identificación
```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_clave_primaria"
  nivel: "avanzado"
  tags: ["base_de_datos", "logica"]

variables:
  escenario_idx: uno_de([0, 1])
  valores_max: [100, 50]
  respuestas: [100, 50]

respuesta: valores_max[escenario_idx]
tipo: "input"
tolerancia_abs: 0

enunciado: "Si una tabla de 'Clientes' tiene una clave primaria que solo permite valores numéricos del 1 al {valores_max[escenario_idx]}, ¿cuántos registros distintos se pueden almacenar como máximo sin violar la restricción de clave primaria?"

explicacion: |
  La clave primaria debe ser única. Si el rango de valores disponibles es de 1 a {valores_max[escenario_idx]}, el número máximo de registros es {valores_max[escenario_idx]}.
```