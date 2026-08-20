### 1 — Redundancia de datos
```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "basico"
  tags: ["teoria", "redundancia"]

respuesta: "redundancia"
tipo: completar
respuestas_validas: ["redundancia", "duplicación", "repetir"]

enunciado: "Cuando la misma información se almacena en múltiples lugares de una base de datos, se produce un fenómeno llamado ___."

explicacion: |
  La redundancia de datos ocurre cuando un mismo dato se repite innecesariamente en diferentes tablas o registros, lo que aumenta el riesgo de inconsistencias.
```

### 2 — Anomalías de actualización
```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "basico"
  tags: ["anomalia", "integridad"]

opciones_explicitas: ["Anomalía de inserción", "Anomalía de borrado", "Anomalía de actualización", "Todas las anteriores"]
respuesta: "Todas las anteriores"
tipo: mc

enunciado: "Si un dato está duplicado y se cambia en un registro pero no en el otro, estamos ante una anomalía de tipo:"

explicacion: |
  La redundancia causa anomalías de actualización, ya que la integridad de la información se pierde al no estar sincronizada en todos los puntos de almacenamiento.
```

### 3 — Objetivo de la normalización
```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "basico"
  tags: ["objetivo", "diseño"]

respuesta: verdadero
tipo: vf

enunciado: "¿El objetivo principal de la normalización es minimizar la redundancia de datos y evitar anomalías de inserción, actualización y borrado?"

explicacion: |
  Correcto. La normalización es un proceso de diseño que busca organizar las columnas y tablas de una base de datos para minimizar la duplicación de datos.
```

### 4 — El proceso de normalización
```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "intermedio"
  tags: ["pasos", "proceso"]

opciones_explicitas: ["Identificar dependencias funcionales", "Definir la clave primaria", "Crear tablas relacionadas", "Aplicar reglas de formas normales"]
respuesta: ["Definir la clave primaria", "Identificar dependencias funcionales", "Aplicar reglas de formas normales", "Crear tablas relacionadas"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para diseñar una base de datos normalizada:"

explicacion: |
  Primero se debe definir la estructura básica (claves), luego entender cómo se relacionan los datos (dependencias) para finalmente aplicar las reglas de las Formas Normales.
```

### 5 — Relación redundancia e integridad
```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "basico"
  tags: ["integridad", "consecuencia"]

variables:
  escenario: uno_de([
    ["Alta redundancia", "baja"],
    ["Normalización óptima", "alta"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["baja", "alta"]

enunciado: "En un esquema de base de datos con una normalización óptima, la integridad de los datos suele ser ___."

explicacion: |
  Al reducir la redundancia mediante la normalización, se garantiza que un dato solo se almacene en un lugar, elevando la integridad del sistema.
```