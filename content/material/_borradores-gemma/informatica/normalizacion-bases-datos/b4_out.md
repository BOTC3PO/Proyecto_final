### 1 — Redundancia vs Integridad
```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "basico"
  tags: ["redundancia", "integridad"]

respuesta: "anomalias"
tipo: "completar"
respuestas_validas: ["anomalias", "anomalia"]

enunciado: "La redundancia de datos en una base de datos no normalizada puede provocar errores de consistencia conocidos como ___ de actualización o de borrado."

explicacion: |
  La redundancia es la duplicación innecesaria de datos. Cuando un dato se repite en varios lugares, si se actualiza en uno y no en el otro, se producen anomalías que rompen la integridad de la información.
```

### 2 — Normalización vs Desnormalización
```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "intermedio"
  tags: ["desnormalizacion", "rendimiento"]

variables:
  escenario_idx: uno_de([0, 1])

respuesta: uno_de(["La normalización prioriza la integridad mediante la reducción de redundancia.", "La desnormalización prioriza la integridad mediante la reducción de redundancia."])[escenario_idx]
tipo: "mc"
opciones_explicitas: ["La normalización prioriza la integridad mediante la reducción de redundancia.", "La desnormalización prioriza la integridad mediante la reducción de redundancia.", "Ambas buscan lo mismo pero con diferentes nombres.", "Ninguna de las anteriores."]

enunciado: "Considerando el objetivo principal de cada proceso, ¿cuál de las siguientes afirmaciones es correcta según el escenario seleccionado?"

pasos:
  - "Analizar si el objetivo es evitar duplicados (normalizar) o acelerar lecturas (desnormalizar)."

explicacion: |
  La normalización busca eliminar la redundancia para asegurar la integridad. La desnormalización, por el contrario, introduce redundancia deliberadamente para mejorar el rendimiento de las consultas de lectura.
```

### 3 — Dependencia Funcional vs Dependencia Transitiva
```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "avanzado"
  tags: ["dependencia_funcional", "3nf"]

respuesta: verdadero
tipo: "vf"

enunciado: "En el contexto de la Tercera Forma Normal (3NF), una dependencia transitiva ocurre cuando un atributo no clave depende de otro atributo que tampoco es una clave primaria, lo cual es distinto a una dependencia funcional directa sobre la clave."

explicacion: |
  Correcto. La 3NF exige que todos los atributos no clave dependan directamente de la clave primaria y no de otros atributos no clave (eliminando así la dependencia transitiva).
```

### 4 — El proceso de Normalización
```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "basico"
  tags: ["proceso", "orden"]

respuesta: ["1NF", "2NF", "3NF"]
tipo: "ordenar"
opciones_explicitas: ["3NF", "1NF", "2NF"]

enunciado: "Ordene los pasos lógicos de las formas normales para asegurar una base de datos sin redundancias excesivas:"

explicacion: |
  El proceso estándar es asegurar primero la atomicidad (1NF), luego la dependencia funcional completa sobre la clave (2NF) y finalmente eliminar dependencias transitivas (3NF).
```

### 5 — Redundancia vs Duplicación
```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "intermedio"
  tags: ["redundancia", "duplicacion"]

variables:
  es_redundante: uno_de([true, false])

respuesta: es_redundante
tipo: "vf"

enunciado: "Si un dato se repite en una tabla simplemente porque es necesario para realizar un JOIN eficiente en un modelo OLAP (Data Warehouse), ¿se considera una redundancia problemática que debe evitarse estrictamente como en el modelo OLTP?"

explicacion: |
  En sistemas OLAP, la redundancia controlada es una estrategia de diseño para el rendimiento. En sistemas OLTP (transaccionales), la redundancia es un error que causa inconsistencias.
```