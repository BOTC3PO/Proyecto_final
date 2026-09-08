# Informatica — Normalizacion bases datos (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Redundancia de datos

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "basico"
  tags: ["teoria", "redundancia"]

respuesta: "redundancia"
tipo: completar
respuestas_validas:
  - "redundancia"
  - "duplicación"
  - "repetir"

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
respuesta: "Anomalía de actualización"
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
respuesta_orden: ["Identificar dependencias funcionales", "Definir la clave primaria", "Aplicar reglas de formas normales", "Crear tablas relacionadas"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para diseñar una base de datos normalizada:"

explicacion: |
  Primero se deben entender cómo se relacionan los datos (dependencias funcionales), luego definir la estructura básica (clave primaria) y finalmente aplicar las reglas de las Formas Normales para crear las tablas relacionadas.
```

### 5 — Relación redundancia e integridad

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "basico"
  tags: ["integridad", "consecuencia"]

variables:
  escenario: uno_de([["Alta redundancia", "baja"], ["Normalización óptima", "alta"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["baja", "alta"]

enunciado: "En un esquema de base de datos con una normalización óptima, la integridad de los datos suele ser ___."

explicacion: |
  Al reducir la redundancia mediante la normalización, se garantiza que un dato solo se almacene en un lugar, elevando la integridad del sistema.
```

### 6 — El problema de la redundancia

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_de_datos"
  nivel: "basico"
  tags: ["redundancia", "anomalia"]

enunciado: "En una tabla de 'Ventas' donde se repite el nombre y la dirección del cliente por cada producto comprado, si el cliente cambia de dirección y solo actualizamos una fila, ¿qué problema de integridad de datos estamos enfrentando?"

opciones_explicitas: ["Anomalia de actualización", "Anomalia de inserción", "Anomalia de borrado", "Redundancia de clave"]

respuesta: "Anomalia de actualización"
tipo: "mc"

explicacion: |
  La redundancia de datos (repetir la dirección en cada venta) provoca anomalías de actualización: si no se actualizan todos los registros de un mismo cliente, la base de datos queda con información inconsistente.
```

### 7 — Identificación de la clave

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_de_datos"
  nivel: "intermedio"
  tags: ["dependencia_funcional", "normalizacion"]

enunciado: "Considerando una tabla de estudiantes con los campos ID_Estudiante, Nombre, Email, Curso y Aula, si queremos eliminar la redundancia de la información del 'Curso' y su 'Aula' asociada, ¿cuál debería ser la clave primaria para una tabla separada que gestione la ubicación de los cursos?"

opciones_explicitas: ["ID_Estudiante", "Nombre", "Email", "Curso"]

respuesta: "Curso"
tipo: "mc"

explicacion: |
  Para normalizar, debemos mover los atributos que dependen de un concepto distinto (el curso) a una tabla propia, donde 'Curso' actúe como clave para evitar repetir la 'Aula' en cada estudiante.
```

### 8 — El concepto de normalización

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_de_datos"
  nivel: "basico"
  tags: ["definicion"]

enunciado: "El proceso de organizar los datos en una base de datos relacional para minimizar la redundancia y evitar anomalías se denomina ___."

respuestas_validas:
  - "normalización"
  - "normalizacion"

respuesta: "normalización"
tipo: "completar"

explicacion: |
  La normalización es el proceso de estructurar una base de datos para que cada dato se almacene en un solo lugar, evitando duplicados.
```

### 9 — Verdadero o Falso: Redundancia y Almacenamiento

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_de_datos"
  nivel: "basico"
  tags: ["almacenamiento"]

enunciado: "Tener una base de datos altamente normalizada siempre implica un ahorro de espacio en disco debido a la eliminación de datos repetidos."

respuesta: falso
tipo: "vf"

explicacion: |
  Aunque la normalización reduce la redundancia de datos descriptivos, puede aumentar el uso de espacio debido a la necesidad de crear más tablas y gestionar múltiples claves foráneas (índices) para realizar las uniones (JOINs).
```

### 10 — Pasos para la normalización

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_de_datos"
  nivel: "avanzado"
  tags: ["proceso", "pasos"]

enunciado: "Ordena los pasos lógicos para llevar una tabla desnormalizada hacia un modelo normalizado eficiente:"

opciones_explicitas: ["Identificar dependencias funcionales", "Eliminar dependencias parciales (1FN)", "Eliminar dependencias transitivas (2FN/3FN)", "Verificar integridad referencial"]

respuesta_orden: ["Identificar dependencias funcionales", "Eliminar dependencias parciales (1FN)", "Eliminar dependencias transitivas (2FN/3FN)", "Verificar integridad referencial"]
tipo: ordenar

explicacion: |
  El proceso comienza analizando cómo se relacionan los datos (dependencias), luego se separan los datos que no dependen de la clave completa (1FN/2FN) y finalmente se eliminan las dependencias indirectas (3FN).
```

### 11 — Redundancia y Anomalías

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "intermedio"
  tags: ["redundancia", "anomalias"]

enunciado: "Si al cambiar el número de teléfono de un cliente debemos buscar todas sus filas repetidas para actualizar cada una de ellas, estamos ante una anomalía de tipo ___ causada por la redundancia."

respuesta: "Anomalía de actualización"
tipo: mc
opciones_explicitas: ["Anomalía de actualización", "Anomalía de inserción", "Anomalía de borrado"]

explicacion: |
  La redundancia de datos provoca anomalías. Si un dato (como un teléfono) se repite en múltiples registros, el sistema corre el riesgo de que no todos se actualicen, dejando la base de datos en un estado inconsistente.
```

### 12 — El propósito de la Normalización

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "basico"
  tags: ["objetivos", "diseño"]

enunciado: "La normalización de bases de datos tiene como objetivo principal minimizar la redundancia de datos para evitar las anomalías de inserción, actualización y ___."

respuesta: "borrado"
respuestas_validas:
  - "borrado"
tipo: completar

explicacion: |
  La normalización busca estructurar las tablas de modo que cada dato se almacene en un único lugar, evitando que al borrar un registro se pierda información que no debería ser eliminada (anomalía de borrado).
```

### 13 — Verdad o Falso: Desnormalización

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

### 14 — Orden de los Procesos de Diseño

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "intermedio"
  tags: ["metodologia"]

variables:
  pasos_correctos: ["Identificar dependencias funcionales", "Aplicar Primera Forma Normal", "Aplicar Segunda Forma Normal", "Aplicar Tercera Forma Normal"]

enunciado: "Para asegurar una base de datos bien estructurada, se debe seguir un proceso lógico de normalización. Ordena los pasos:"

respuesta_orden: ["Identificar dependencias funcionales", "Aplicar Primera Forma Normal", "Aplicar Segunda Forma Normal", "Aplicar Tercera Forma Normal"]
tipo: ordenar
opciones_explicitas: ["Aplicar Tercera Forma Normal", "Identificar dependencias funcionales", "Aplicar Segunda Forma Normal", "Aplicar Primera Forma Normal"]

explicacion: |
  La normalización es un proceso iterativo y progresivo. No se puede aplicar la 2FN sin haber cumplido la 1FN, y para la 2FN es indispensable haber identificado las dependencias funcionales.
```

### 15 — Dependencia Funcional

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "avanzado"
  tags: ["dependencia_funcional", "2fn"]

enunciado: "En la Segunda Forma Normal (2FN), es fundamental que todos los atributos que no forman parte de la clave primaria dependan de la clave completa y no solo de una parte de ella. A esto se le llama evitar la dependencia ___."

respuesta: "parcial"
respuestas_validas:
  - "parcial"
tipo: completar

explicacion: |
  La dependencia parcial ocurre cuando un atributo depende de solo una parte de una clave compuesta. La 2FN exige que todos los atributos no clave dependan de la clave primaria completa.
```

### 16 — Redundancia vs Integridad

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "basico"
  tags: ["redundancia", "integridad"]

respuesta: "anomalias"
tipo: "completar"
respuestas_validas:
  - "anomalias"
  - "anomalia"

enunciado: "La redundancia de datos en una base de datos no normalizada puede provocar errores de consistencia conocidos como ___ de actualización o de borrado."

explicacion: |
  La redundancia es la duplicación innecesaria de datos. Cuando un dato se repite en varios lugares, si se actualiza en uno y no en el otro, se producen anomalías que rompen la integridad de la información.
```

### 17 — Normalización vs Desnormalización

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "intermedio"
  tags: ["desnormalizacion", "rendimiento"]

respuesta: "La normalización prioriza la integridad mediante la reducción de redundancia."
tipo: "mc"
opciones_explicitas: ["La normalización prioriza la integridad mediante la reducción de redundancia.", "La desnormalización prioriza la integridad mediante la reducción de redundancia.", "Ambas buscan lo mismo pero con diferentes nombres.", "Ninguna de las anteriores."]

enunciado: "Considerando el objetivo principal de cada proceso, ¿cuál de las siguientes afirmaciones es correcta?"

pasos:
  - "Analizar si el objetivo es evitar duplicados (normalizar) o acelerar lecturas (desnormalizar)."

explicacion: |
  La normalización busca eliminar la redundancia para asegurar la integridad. La desnormalización, por el contrario, introduce redundancia deliberadamente para mejorar el rendimiento de las consultas de lectura.
```

### 18 — Dependencia Funcional vs Dependencia Transitiva

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

### 19 — El proceso de Normalización

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "basico"
  tags: ["proceso", "orden"]

tipo: ordenar
opciones_explicitas: ["1NF", "2NF", "3NF"]
respuesta_orden: ["1NF", "2NF", "3NF"]

enunciado: "Ordene los pasos lógicos de las formas normales para asegurar una base de datos sin redundancias excesivas:"

explicacion: |
  El proceso estándar es asegurar primero la atomicidad (1NF), luego la dependencia funcional completa sobre la clave (2NF) y finalmente eliminar dependencias transitivas (3NF).
```

### 20 — Redundancia vs Duplicación

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "intermedio"
  tags: ["redundancia", "duplicacion"]

respuesta: falso
tipo: vf

enunciado: "Si un dato se repite en una tabla simplemente porque es necesario para realizar un JOIN eficiente en un modelo OLAP (Data Warehouse), ¿se considera una redundancia problemática que debe evitarse estrictamente como en el modelo OLTP?"

explicacion: |
  En sistemas OLAP, la redundancia controlada es una estrategia de diseño para el rendimiento. En sistemas OLTP (transaccionales), la redundancia es un error que causa inconsistencias.
```

### 21 — Redundancia de datos

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "basico"
  tags: ["redundancia", "integridad"]

respuesta: "Anomalía de actualización"
tipo: mc
opciones_explicitas: ["Inconsistencia", "Anomalía de actualización", "Anomalía de inserción", "Pérdida de integridad"]

enunciado: "Si en una tabla de ventas repetimos el Nombre y la Dirección del Cliente para cada producto vendido, y el cliente cambia de domicilio pero solo actualizamos una fila, generamos una anomalía de tipo: ___"

explicacion: |
  La redundancia de datos provoca que la información se repita innecesariamente, lo que deriva en anomalías de actualización cuando los datos no se mantienen sincronizados en todos los registros.
```

### 22 — El objetivo de la normalización

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "basico"
  tags: ["objetivo", "teoria"]

respuesta: verdadero
tipo: vf

enunciado: "El objetivo principal de la normalización es minimizar la redundancia de datos para evitar anomalías de inserción, actualización y borrado."

explicacion: |
  Correcto. La normalización busca estructurar las tablas para que cada dato se almacene en un único lugar, garantizando la integridad de la información.
```

### 23 — Anomalía de Inserción

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "intermedio"
  tags: ["anomalia", "insercion"]

respuesta: "No podemos registrar un nuevo curso si no hay alumnos inscritos"
tipo: completar
respuestas_validas:
  - "No podemos registrar un nuevo curso si no hay alumnos inscritos"

enunciado: "En una tabla desnormalizada que combina 'Estudiantes' y 'Cursos', si intentamos agregar un curso que aún no tiene alumnos inscritos y la clave primaria depende de ambos, nos enfrentamos a una: ___"

explicacion: |
  Esto se conoce como anomalía de inserción: la imposibilidad de añadir información porque falta un dato que forma parte de la clave primaria.
```

### 24 — Secuencia de Normalización

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

respuesta_orden: ["1FN", "2FN", "3FN"]
tipo: ordenar
opciones_explicitas: ["3FN", "1FN", "2FN"]

enunciado: "Ordena los pasos lógicos para alcanzar la Tercera Forma Normal (3FN) partiendo de una tabla no normalizada:"

explicacion: |
  El proceso de normalización es iterativo y jerárquico: primero se asegura la atomicidad (1FN), luego la dependencia funcional completa (2FN) y finalmente se eliminan las dependencias transitivas (3FN).
```

### 25 — Dependencia Funcional

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "avanzado"
  tags: ["dependencia", "funcional"]

variables:
  ejemplo_idx: uno_de([0, 1])
  ejemplos: [["ID_Empleado -> Nombre_Empleado", "ID_Producto -> Fecha_Venta"], ["ID_Cliente -> Dirección_Cliente", "ID_Pedido -> ID_Cliente"]]

respuesta: ejemplos[ejemplo_idx][0]
tipo: mc
opciones_explicitas: ["ID_Empleado -> Nombre_Empleado", "ID_Producto -> Fecha_Venta", "ID_Cliente -> Dirección_Cliente", "ID_Pedido -> ID_Cliente"]

enunciado: "Para cumplir con la Segunda Forma Normal (2FN), debemos asegurar que todos los atributos no clave dependan de la clave primaria completa. Un ejemplo de una dependencia funcional válida es: ___"

explicacion: |
  En la 2FN, cada atributo que no es parte de la clave debe depender de toda la clave primaria, no solo de una parte de ella (evitando dependencias parciales).
```
