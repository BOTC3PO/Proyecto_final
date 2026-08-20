### 1 — Concepto de Clave Primaria
```
metadata:
  materia: "informatica"
  tema: "relaciones-y-claves-foraneas"
  nivel: "basico"
  tags: ["bases-de-datos", "sql"]

respuesta: "clave_primaria"
tipo: completar
respuestas_validas: ["clave_primaria", "primary_key"]

enunciado: "El campo único que identifica de forma inequívoca a cada registro en una tabla se denomina ___."

explicacion: |
  La clave primaria (Primary Key) garantiza la integridad de la entidad, asegurando que no haya dos filas idénticas y que el identificador no sea nulo.
```

### 2 — Relación de Clave Foránea
```
metadata:
  materia: "informatica"
  tema: "relaciones-y-claves-foraneas"
  nivel: "basico"
  tags: ["bases-de-datos", "relaciones"]

respuesta: falso
tipo: vf

enunciado: "¿Una clave foránea (Foreign Key) debe referenciar necesariamente a una clave primaria en la tabla de origen?"

explicacion: |
  Falso. Una clave foránea debe referenciar a una clave única (Unique Key) en la tabla de destino, no estrictamente a una clave primaria, aunque es la práctica más común.
```

### 3 — Tipos de Relaciones
```
metadata:
  materia: "informatica"
  tema: "relaciones-y-claves-foraneas"
  nivel: "intermedio"
  tags: ["modelado", "cardinalidad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Un Cliente y sus Pedidos", "uno_a_muchos"],
    ["Un Estudiante y sus Materias (en un modelo N:M)", "muchos_a_muchos"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["uno_a_uno", "uno_a_muchos", "muchos_a_muchos"]

enunciado: "En el escenario '{escenarios[escenario_idx][0]}', el tipo de relación predominante es:"

explicacion: |
  En el primer caso, un cliente puede tener múltiples pedidos (1:N). En el segundo caso, un estudiante tiene muchas materias y una materia tiene muchos estudiantes (N:M).
```

### 4 — Integridad Referencial
```
metadata:
  materia: "informatica"
  tema: "relaciones-y-claves-foraneas"
  nivel: "intermedio"
  tags: ["integridad", "sql"]

respuesta: "Integridad Referencial"
tipo: completar
respuestas_validas: ["Integridad Referencial", "Integridad de Entidad"]

enunciado: "La regla que asegura que los valores de una clave foránea existan previamente en la tabla referenciada se conoce como ___."

explicacion: |
  La integridad referencial garantiza que las relaciones entre tablas permanezcan consistentes, evitando "registros huérfanos".
```

### 5 — Orden de creación de tablas
```
metadata:
  materia: "informatica"
  tema: "relaciones-y-claves-foraneas"
  nivel: "avanzado"
  tags: ["sql", "ddl"]

respuesta: ["Tabla_Padre", "Tabla_Hija"]
tipo: ordenar
opciones_explicitas: ["Tabla_Hija", "Tabla_Padre"]

enunciado: "Para evitar errores de restricción al ejecutar un script SQL de creación de base de datos, ¿en qué orden deben crearse las tablas si la Tabla_Hija tiene una clave foránea que apunta a la Tabla_Padre?"

explicacion: |
  Primero se debe crear la tabla que contiene la clave primaria (Padre) para que, cuando se cree la tabla que la referencia (Hija), la clave ya exista en el sistema.
```