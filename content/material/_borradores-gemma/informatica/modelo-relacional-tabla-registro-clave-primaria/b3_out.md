### 1 — El concepto de Registro
```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_conceptos_basicos"
  nivel: "basico"
  tags: ["base_de_datos", "modelo_relacional"]

respuesta: "fila"
tipo: completar
respuestas_validas: ["fila", "registro"]

enunciado: "En el modelo relacional, una estructura de datos bidimensional se compone de columnas (atributos) y ___ (tuplas)."

explicacion: |
  En el modelo relacional, una tabla se compone de filas (también llamadas tuplas o registros) y columnas (atributos).
```

### 2 — Identificación de la Clave Primaria
```
metadata:
  materia: "informatica"
  tema: "clave_primaria_caracteristicas"
  nivel: "intermedio"
  tags: ["base_de_datos", "clave_primaria"]

variables:
  es_valido: uno_de([true, false])

respuesta: es_valido
tipo: vf

enunciado: "Si una tabla tiene una columna llamada 'Edad', ¿puede esta ser designada como la clave primaria de la tabla si existen múltiples personas con la misma edad?"

explicacion: |
  La clave primaria debe ser única para cada registro. Si dos filas tienen el mismo valor en la columna clave, el sistema no podría distinguirlas, violando el principio de integridad de entidad.
```

### 3 — Atributos vs. Registros
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

### 4 — La unicidad de la Clave Primaria
```
metadata:
  materia: "informatica"
  tema: "integridad_entidad"
  nivel: "intermedio"
  tags: ["base_de_datos", "clave_primaria"]

respuesta: "ID_Estudiante"
tipo: completar
respuestas_validas: ["ID_Estudiante", "codigo_estudiante", "estudiante_id"]

enunciado: "Dada la siguiente tabla de 'Estudiantes':
| Nombre | Apellido | DNI |
|--------|----------|-----|
| Juan   | Perez    | 123 |
| Ana    | Lopez    | 456 |

Si queremos garantizar que no haya duplicados, la mejor opción para una clave primaria sería ___."

explicacion: |
  Aunque el DNI suele ser único, en el diseño de bases de datos se prefiere usar una clave artificial (como un ID) que sea inmutable y garantice la unicidad técnica sin depender de datos externos que podrían cambiar o repetirse por error.
```

### 5 — Jerarquía de elementos
```
metadata:
  materia: "informatica"
  tema: "jerarquia_relacional"
  nivel: "basico"
  tags: ["base_de_datos", "modelo_relacional"]

respuesta: ["Base de Datos", "Tabla", "Registro", "Atributo"]
tipo: ordenar
opciones_explicitas: ["Base de Datos", "Tabla", "Registro", "Atributo"]

enunciado: "Ordena los elementos de mayor a menor jerarquía en un modelo relacional (desde el contenedor global hasta el dato mínimo):"

explicacion: |
  La jerarquía lógica es: La Base de Datos contiene múltiples Tablas; cada Tabla contiene múltiples Registros; y cada Registro está compuesto por Atributos (valores).
```