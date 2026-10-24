### 1 — Redundancia y Anomalías
```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "intermedio"
  tags: ["redundancia", "anomalias"]

variables:
  escenario: uno_de([
    ["Nombre: Juan, Tel: 123, Ciudad: BsAs", "Anomalía de actualización"],
    ["Nombre: Ana, Tel: 456, Ciudad: Córdoba", "Anomalía de inserción"],
    ["Nombre: Luis, Tel: 789, Ciudad: Salta", "Anomalía de borrado"]
  ])

enunciado: "Si al cambiar el número de teléfono de un cliente debemos buscar todas sus filas repetidas para actualizar cada una de ellas, estamos ante una {escenario[1]} causada por la redundancia."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Anomalía de actualización", "Anomalía de inserción", "Anomalía de borrado"]

explicacion: |
  La redundancia de datos provoca anomalías. Si un dato (como un teléfono) se repite en múltiples registros, el sistema corre el riesgo de que no todos se actualicen, dejando la base de datos en un estado inconsistente.
```

### 2 — El propósito de la Normalización
```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "basico"
  tags: ["objetivos", "diseño"]

enunciado: "La normalización de bases de datos tiene como objetivo principal minimizar la redundancia de datos para evitar las anomalías de inserción, actualización y ___."

respuesta: ["borrado"]
respuestas_validas: ["borrado"]
tipo: completar

explicacion: |
  La normalización busca estructurar las tablas de modo que cada dato se almacene en un único lugar, evitando que al borrar un registro se pierda información que no debería ser eliminada (anomalía de borrado).
```

### 3 — Verdad o Falso: Desnormalización
```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "avanzado"
  tags: ["desnormalizacion", "rendimiento"]

enunciado: "En sistemas de Big Data o Data Warehousing, a veces se aplica la 'desnormalización' intencionalmente para mejorar la velocidad de lectura, a pesar de aumentar la redundancia."

respuesta: verdadero
tipo: vf

explicacion: |
  Es correcto. Aunque la normalización es vital para la integridad (OLTP), en sistemas de análisis (OLAP) se prefiere la desnormalización para evitar JOINs costosos y acelerar las consultas de lectura.
```

### 4 — Orden de los Procesos de Diseño
```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "intermedio"
  tags: ["metodologia"]

variables:
  pasos_correctos: [
    "Identificar dependencias funcionales",
    "Aplicar Primera Forma Normal",
    "Aplicar Segunda Forma Normal",
    "Aplicar Tercera Forma Normal"
  ]

enunciado: "Para asegurar una base de datos bien estructurada, se debe seguir un proceso lógico de normalización. Ordena los pasos:"

respuesta: ["Identificar dependencias funcionales", "Aplicar Primera Forma Normal", "Aplicar Segunda Forma Normal", "Aplicar Tercera Forma Normal"]
tipo: ordenar
opciones_explicitas: [
  "Aplicar Tercera Forma Normal",
  "Identificar dependencias funcionales",
  "Aplicar Segunda Forma Normal",
  "Aplicar Primera Forma Normal"
]

explicacion: |
  La normalización es un proceso iterativo y progresivo. No se puede aplicar la 2FN sin haber cumplido la 1FN, y para la 2FN es indispensable haber identificado las dependencias funcionales.
```

### 5 — Dependencia Funcional
```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "avanzado"
  tags: ["dependencia_funcional", "2fn"]

enunciado: "En la Segunda Forma Normal (2FN), es fundamental que todos los atributos que no forman parte de la clave primaria dependan de la clave completa y no solo de una parte de ella. A esto se le llama evitar la dependencia ___."

respuesta: ["parcial"]
respuestas_validas: ["parcial"]
tipo: completar

explicacion: |
  La dependencia parcial ocurre cuando un atributo depende de solo una parte de una clave compuesta. La 2FN exige que todos los atributos no clave dependan de la clave primaria completa.
```