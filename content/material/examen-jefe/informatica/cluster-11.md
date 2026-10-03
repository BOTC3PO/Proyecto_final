# Examen jefe — [PENDIENTE #826]

> Logro #826. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 9 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **215 preguntas totales** en 9/9 secciones.

---

## Sección: sistema-de-archivos-por-bitacora (21 preguntas)

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "basico"
  tags: ["journaling", "definicion", "consistencia"]

respuesta: verdadero
tipo: vf

enunciado: "La bitácora (journal) es un registro que almacena información sobre los cambios pendientes en los metadatos antes de aplicarlos al sistema de archivos."

explicacion: |
  Correcto. El propósito principal de la bitácora es registrar las intenciones de cambio en los metadatos para garantizar la consistencia del sistema ante fallos.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["recuperacion", "consistencia", "reinicio"]

respuesta: verdadero
tipo: vf

enunciado: "Al reiniciar después de un fallo, el sistema lee la bitácora para determinar qué operaciones de metadatos estaban pendientes y las completa o revierte."

explicacion: |
  Correcto. La bitácora actúa como un plan de trabajo. Si hay operaciones incompletas, el sistema las procesa para restaurar la integridad lógica del sistema de archivos.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["rendimiento", "fsck", "tiempo"]

variables:
  tiempo_fsck: random(30, 120)
  tiempo_journal: random(1, 5)

respuesta: tiempo_journal
tipo: input

enunciado: "Si un sistema sin journaling tarda {tiempo_fsck} segundos en escanear errores (fsck), ¿cuántos segundos tarda aproximadamente uno con journaling en recuperar la consistencia? (Redondea a entero)."

explicacion: |
  Con journaling, la recuperación es casi instantánea (segundos) porque solo se revisa la bitácora, a diferencia del escaneo completo del disco que toma minutos u horas.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "basico"
  tags: ["concepto", "analogia", "planificacion"]

respuesta: verdadero
tipo: vf

enunciado: "La bitácora funciona como un 'cuaderno de apuntes' donde se escribe el plan antes de ejecutar la tarea física en el disco."

explicacion: |
  Correcto. Esta analogía ilustra cómo el sistema escribe la intención de cambio primero, garantizando que si falla, pueda saber qué había planeado hacer.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["integridad", "estructura", "coherencia"]

respuesta: verdadero
tipo: vf

enunciado: "El journaling garantiza la integridad lógica, asegurando que la estructura de carpetas y archivos siempre sea coherente."

explicacion: |
  Correcto. La integridad lógica se refiere a que la estructura del sistema de archivos no queda rota o inconsistente tras un fallo.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["fsck", "comparacion", "rendimiento"]

respuesta: falso
tipo: vf

enunciado: "Los sistemas con journaling requieren ejecutar fsck completo cada vez que se apaga la computadora para verificar la integridad."

explicacion: |
  Falso. Con journaling, el fsck es muy rápido porque solo verifica la bitácora. El fsck completo solo es necesario en sistemas sin journaling o si hay errores graves no resueltos por la bitácora.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["estado", "bitacora", "fallos"]

respuesta: verdadero
tipo: vf

enunciado: "Un sistema de archivos se marca como 'sucio' (dirty) si hubo un fallo durante una operación que involucra la bitácora."

explicacion: |
  Correcto. El estado 'sucio' indica que hay operaciones en la bitácora que deben ser procesadas al reiniciar para completar o deshacer cambios.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["rendimiento", "comparacion", "tiempo"]

variables:
  tiempo_sin_journal: random(10, 60)
  tiempo_con_journal: random(1, 5)

respuesta: tiempo_con_journal
tipo: input

enunciado: "Si un disco sin journaling tarda {tiempo_sin_journal} segundos en repararse, ¿cuántos segundos tarda uno con journaling? (Redondea a entero)."

explicacion: |
  La recuperación con journaling es mucho más rápida (segundos) porque solo se procesan las entradas pendientes de la bitácora.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["consistencia", "estructura", "integridad"]

respuesta: verdadero
tipo: vf

enunciado: "La bitácora asegura que la estructura del sistema de archivos (directorios, bloques) sea consistente, aunque los datos de usuario estén intactos."

explicacion: |
  Correcto. El objetivo principal es la consistencia de la estructura (metadatos), permitiendo que el sistema acceda correctamente a los archivos.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "basico"
  tags: ["fallos", "recuperacion", "bitacora"]

respuesta: verdadero
tipo: vf

enunciado: "Ante un fallo repentino, la bitácora permite al sistema saber qué tareas estaban pendientes al momento del corte."

explicacion: |
  Correcto. La bitácora contiene el registro de las operaciones incompletas, permitiendo una recuperación ordenada.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["concepto", "diferencia", "backup"]

respuesta: falso
tipo: vf

enunciado: "La bitácora es un mecanismo de respaldo (backup) que copia los archivos de usuario a otro disco."

explicacion: |
  Falso. La bitácora no es un backup. Es un mecanismo de consistencia interna del sistema de archivos que registra cambios en metadatos, no una copia de seguridad de datos.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "basico"
  tags: ["estabilidad", "usuario", "beneficio"]

respuesta: verdadero
tipo: vf

enunciado: "El uso de journaling contribuye a una computadora más estable y menos propensa a corrupción de datos."

explicacion: |
  Correcto. Al prevenir inconsistencias en la estructura del sistema de archivos, se reduce la probabilidad de errores y corrupción de datos.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["verificacion", "fsck", "recuperacion"]

respuesta: verdadero
tipo: vf

enunciado: "El proceso de verificación tras un fallo con journaling es casi instantáneo porque el sistema ya sabe qué parte del disco está incompleta."

explicacion: |
  Correcto. La bitácora indica exactamente qué operaciones fallaron, evitando escanear todo el disco.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "basico"
  tags: ["analogia", "funcionamiento", "bitacora"]

respuesta: verdadero
tipo: vf

enunciado: "La bitácora es como un asistente que escribe el plan antes de ejecutar la tarea, para saber qué hacer si se interrumpe el trabajo."

explicacion: |
  Correcto. Esta analogía ayuda a entender el rol de la bitácora como registro de intenciones de cambio.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["integridad", "carpetas", "estructura"]

respuesta: verdadero
tipo: vf

enunciado: "El journaling asegura que la estructura de carpetas sea coherente, evitando que apunten a directorios inexistentes."

explicacion: |
  Correcto. La integridad de la estructura de directorios es clave para que el sistema pueda navegar y acceder a los archivos.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["rendimiento", "tiempo", "comparacion"]

variables:
  tiempo_sin_journal: random(20, 90)
  tiempo_con_journal: random(1, 5)

respuesta: tiempo_con_journal
tipo: input

enunciado: "Si un disco sin journaling tarda {tiempo_sin_journal} segundos en repararse, ¿cuántos segundos tarda uno con journaling? (Redondea a entero)."

explicacion: |
  La recuperación con journaling es rápida (segundos) porque solo se procesan las entradas pendientes de la bitácora.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "basico"
  tags: ["fallos", "luz", "recuperacion"]

respuesta: verdadero
tipo: vf

enunciado: "Ante un corte de luz, el journaling permite al sistema recuperar la consistencia de los metadatos al reiniciar."

explicacion: |
  Correcto. El journaling es crucial para manejar fallos de energía, asegurando que los cambios en metadatos se completen o se deshagan.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["registro", "intencion", "bitacora"]

respuesta: verdadero
tipo: vf

enunciado: "La bitácora es un registro de las intenciones de cambio en los metadatos antes de que se apliquen."

explicacion: |
  Correcto. El registro de intenciones permite al sistema saber qué hacer si la operación se interrumpe.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["consistencia", "logica", "integridad"]

respuesta: verdadero
tipo: vf

enunciado: "El journaling garantiza la consistencia lógica, asegurando que la estructura del sistema de archivos sea coherente."

explicacion: |
  Correcto. La consistencia lógica es el objetivo principal del journaling, evitando estructuras rotas.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["fsck", "rendimiento", "comparacion"]

respuesta: falso
tipo: vf

enunciado: "Los sistemas con journaling requieren fsck completo cada vez que se apagan para verificar la integridad."

explicacion: |
  Falso. Con journaling, el fsck es rápido y solo verifica la bitácora. El fsck completo es innecesario en la mayoría de los casos.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["estado", "sucio", "bitacora"]

respuesta: verdadero
tipo: vf

enunciado: "Un sistema se marca como 'sucio' si hubo un fallo durante una operación que involucra la bitácora."

explicacion: |
  Correcto. El estado 'sucio' indica que hay operaciones pendientes en la bitácora que deben procesarse al reiniciar.
```

## Sección: sql-consultas-joins-agregaciones (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "sql_consultas_basicas"
  nivel: "basico"
  tags: ["sql", "select"]

respuesta: "SELECT"
tipo: completar
respuestas_validas:
  - "SELECT"

enunciado: "Para extraer datos de una base de datos en SQL, se utiliza la cláusula ___."

explicacion: |
  La cláusula SELECT es la base de cualquier consulta de recuperación de datos en SQL.
```

```
metadata:
  materia: "informatica"
  tema: "sql_agregaciones"
  nivel: "basico"
  tags: ["sql", "count"]

variables:
  opcion_correcta: uno_de(["COUNT", "SUM", "AVG"])

respuesta: opcion_correcta
tipo: mc
opciones_explicitas: ["COUNT", "SUM", "AVG"]

enunciado: "Si deseas obtener el número total de registros que cumplen una condición, ¿qué función de agregación deberías utilizar?"

explicacion: |
  COUNT() devuelve el número de filas, mientras que SUM() suma valores numéricos y AVG() calcula el promedio.
```

```
metadata:
  materia: "informatica"
  tema: "sql_joins"
  nivel: "intermedio"
  tags: ["sql", "joins"]

respuesta: verdadero
tipo: vf

enunciado: "¿Un JOIN se utiliza para combinar filas de dos o más tablas basándose en una columna relacionada entre ellas?"

explicacion: |
  Correcto. Los JOINs permiten relacionar tablas mediante claves foráneas o columnas con valores comunes.
```

```
metadata:
  materia: "informatica"
  tema: "sql_orden_ejecucion"
  nivel: "intermedio"
  tags: ["sql", "syntax"]

respuesta_orden: ["SELECT", "FROM", "JOIN", "WHERE", "GROUP BY", "ORDER BY"]
tipo: ordenar
opciones_explicitas: ["SELECT", "FROM", "JOIN", "WHERE", "GROUP BY", "ORDER BY"]

enunciado: "Ordena los siguientes componentes de una consulta SQL según el orden lógico de su sintaxis estándar (de primero a último):"

explicacion: |
  Aunque el motor procesa los datos de forma distinta, la sintaxis requiere este orden para ser válida.
```

```
metadata:
  materia: "informatica"
  tema: "sql_agregaciones_avanzado"
  nivel: "intermedio"
  tags: ["sql", "having"]

respuesta: "HAVING"
tipo: mc
opciones_explicitas: ["WHERE", "HAVING", "FILTER", "GROUP"]

enunciado: "Si quieres filtrar los resultados de una consulta basándote en el resultado de una función de agregación (como SUM o AVG), ¿qué cláusula debes usar?"

explicacion: |
  La cláusula WHERE filtra filas antes de agrupar; la cláusula HAVING filtra grupos después de aplicar la agregación.
```

```
metadata:
  materia: "informatica"
  tema: "sql_consultas_basicas"
  nivel: "basico"
  tags: ["sql", "select", "count"]

variables:
  tabla_nombre: "usuarios"
  filas_totales: 150

respuesta: 150
tipo: completar
tolerancia_abs: 0

enunciado: "Si ejecutamos la sentencia `SELECT COUNT(*) FROM {tabla_nombre};` en una tabla que contiene exactamente {filas_totales} registros, ¿cuál será el resultado numérico obtenido?"

explicacion: |
  La función de agregación `COUNT(*)` cuenta el número total de filas en una tabla, incluyendo aquellas que contienen valores NULL.
```

```
metadata:
  materia: "informatica"
  tema: "sql_agregaciones"
  nivel: "basico"
  tags: ["sql", "sum", "agregacion"]

variables:
  columna: "precio"
  valor_suma: 5000

respuesta: "SUM"
tipo: mc
opciones_explicitas: ["SUM", "AVG", "COUNT", "MAX"]

enunciado: "Deseas obtener el total de la suma de todos los valores de la columna '{columna}' en una tabla llamada 'productos'. ¿Qué función de agregación debes utilizar en tu cláusula SELECT?"

explicacion: |
  `SUM(columna)` suma todos los valores de una columna numérica, mientras que `AVG` calcula el promedio y `COUNT` cuenta registros.
```

```
metadata:
  materia: "informatica"
  tema: "sql_joins"
  nivel: "intermedio"
  tags: ["sql", "join", "relaciones"]

variables:
  tabla_a: "clientes"
  tabla_b: "pedidos"
  relacion: "coincidencia_en_id"

respuesta: verdadero
tipo: vf

enunciado: "Al realizar un `INNER JOIN` entre la tabla '{tabla_a}' y la tabla '{tabla_b}' utilizando una condición de igualdad en sus claves primarias y foráneas, ¿se mostrarán únicamente las filas donde existe una correspondencia entre ambas tablas?"

explicacion: |
  El `INNER JOIN` devuelve solo las filas donde hay una coincidencia en la condición de unión (ON). Si un cliente no tiene pedidos, no aparecerá en el resultado de un INNER JOIN.
```

```
metadata:
  materia: "informatica"
  tema: "sql_sintaxis"
  nivel: "basico"
  tags: ["sql", "orden", "sintaxis"]

variables:
  clausulas: ["SELECT", "FROM", "WHERE", "ORDER BY"]
  respuesta_correcta: ["SELECT", "FROM", "WHERE", "ORDER BY"]

tipo: ordenar
respuesta_orden: respuesta_correcta
opciones_explicitas: clausulas

enunciado: "Ordena las siguientes cláusulas de SQL para que la consulta sea sintácticamente correcta: 'WHERE edad > 18', 'SELECT nombre', 'ORDER BY nombre', 'FROM usuarios'."

pasos:
  - "Seleccionar las columnas"
  - "Indicar la tabla de origen"
  - "Filtrar los registros"
  - "Ordenar el resultado final"

explicacion: |
  El orden lógico y sintáctico de una consulta SQL estándar es: SELECT (columnas) -> FROM (tabla) -> WHERE (condición) -> ORDER BY (ordenamiento).
```

```
metadata:
  materia: "informatica"
  tema: "sql_agregaciones"
  nivel: "intermedio"
  tags: ["sql", "avg", "group_by"]

variables:
  columna: "salario"
  tabla: "empleados"

respuesta: "AVG"
tipo: completar
respuestas_validas:
  - "AVG"

enunciado: "Para obtener el promedio de la columna {columna} en la tabla {tabla}, la sentencia correcta sería: `SELECT ___({columna}) FROM {tabla};`"

explicacion: |
  Para calcular el promedio aritmético de una columna, se utiliza la función de agregación `AVG()`. La sintaxis requiere la función seguida de la columna entre paréntesis.
```

```
metadata:
  materia: "informatica"
  tema: "sql_consultas_joins_agregaciones"
  nivel: "intermedio"
  tags: ["sql", "agregacion", "error_comun"]

enunciado: "Al intentar ejecutar la siguiente consulta en un motor SQL estándar, ¿cuál es el resultado esperado? \n\nSELECT nombre, SUM(salario) FROM empleados;"

opciones_explicitas:
  - "Error de sintaxis: la columna 'nombre' debe estar en una cláusula GROUP BY o en una función de agregación."
  - "La consulta funciona y devuelve el nombre del primer empleado con la suma de todos los salarios."
  - "La consulta funciona y devuelve una fila por cada nombre distinto con su respectivo total."
  - "Error de sintaxis: la función SUM() no puede usarse en una cláusilla SELECT sin un GROUP BY."

respuesta: "Error de sintaxis: la columna 'nombre' debe estar en una cláusula GROUP BY o en una función de agregación."
tipo: mc

explicacion: |
  En SQL estándar, cuando usas una función de agregación (como SUM, AVG, COUNT) junto con una columna normal, debes agrupar por esa columna usando GROUP BY. De lo contrario, el motor no sabe qué hacer con los valores individuales de 'nombre' frente al valor único resultante de la suma.
```

```
metadata:
  materia: "informatica"
  tema: "sql_consultas_joins_agregaciones"
  nivel: "basico"
  tags: ["sql", "agregacion", "nulls"]

variables:
  num_columnas: 3
  columna_telefono: "telefono"

enunciado: "Si tenemos una tabla con {num_columnas} columnas y aplicamos COUNT({columna_telefono}) sobre la columna de teléfono (donde hay un valor NULL), el resultado será diferente a aplicar COUNT(*). \n\n¿Es verdadero que COUNT(telefono) ignorará la fila con valor NULL?"

respuesta: verdadero
tipo: vf

explicacion: |
  COUNT(*) cuenta todas las filas de la tabla, incluyendo aquellas con valores NULL. COUNT(columna) solo cuenta las filas donde la columna especificada no es NULL.
```

```
metadata:
  materia: "informatica"
  tema: "sql_consultas_joins_agregaciones"
  nivel: "intermedio"
  tags: ["sql", "filtro", "agregacion"]

enunciado: "Para filtrar los resultados de una consulta que utiliza una función de agregación (por ejemplo, mostrar solo departamentos cuyo promedio de sueldo sea mayor a 2000), se debe utilizar la cláusula ___ en lugar de la cláusula WHERE."

respuestas_validas:
  - "HAVING"

respuesta: "HAVING"
tipo: completar

explicacion: |
  La cláusula WHERE se utiliza para filtrar filas individuales antes de que se realice la agrupación. La cláusula HAVING se utiliza para filtrar grupos después de que se ha aplicado la función de agregación.
```

```
metadata:
  materia: "informatica"
  tema: "sql_consultas_joins_agregaciones"
  nivel: "avanzado"
  tags: ["sql", "joins", "duplicados"]

enunciado: "Tienes una tabla 'Clientes' (10 clientes) y una tabla 'Pedidos' (5 pedidos, pero 2 clientes no han hecho pedidos). Si realizas un INNER JOIN entre ambas tablas y aplicas un COUNT(cliente_id), ¿cuántas filas resultarán en el conjunto de datos antes de la agregación?"

opciones_explicitas:
  - "10"
  - "5"
  - "8"
  - "15"

respuesta: "5"
tipo: mc

explicacion: |
  Un INNER JOIN solo devuelve las filas donde hay una coincidencia en ambas tablas. Como solo hay 5 pedidos, solo habrá 5 filas en el resultado, independientemente de cuántos clientes existan en total.
```

```
metadata:
  materia: "informatica"
  tema: "sql_consultas_joins_agregaciones"
  nivel: "intermedio"
  tags: ["sql", "orden_ejecucion"]

enunciado: "Ordena las siguientes cláusulas según el orden lógico en que el motor de base de datos las procesa para ejecutar una consulta compleja:"

opciones_explicitas:
  - "FROM"
  - "WHERE"
  - "GROUP BY"
  - "HAVING"
  - "SELECT"
  - "ORDER BY"

respuesta_orden: ["FROM", "WHERE", "GROUP BY", "HAVING", "SELECT", "ORDER BY"]
tipo: ordenar

explicacion: |
  El orden lógico es: 1. FROM (identifica tablas), 2. WHERE (filtra filas), 3. GROUP BY (agrupa), 4. HAVING (filtra grupos), 5. SELECT (proyecta columnas) y 6. ORDER BY (ordena el resultado final).
```

```
metadata:
  materia: "informatica"
  tema: "sql_consultas_basicas"
  nivel: "intermedio"
  tags: ["sql", "agregacion", "count"]

respuesta: "COUNT(columna) ignora los valores NULL, mientras que COUNT(*) cuenta todas las filas"
tipo: mc
opciones_explicitas: ["COUNT(columna) ignora los valores NULL, mientras que COUNT(*) cuenta todas las filas", "COUNT(*) ignora los valores NULL, mientras que COUNT(columna) cuenta todas las filas", "Ambos funcionan exactamente igual en todas las bases de datos", "COUNT(columna) cuenta filas con NULL y COUNT(*) no"]

enunciado: "En una tabla con una columna 'edad' que contiene valores NULL, ¿cuál es la distinción fundamental entre usar COUNT(*) y COUNT(edad)?"

explicacion: |
  COUNT(*) contabiliza el número total de registros en la tabla, incluyendo aquellos donde todas las columnas sean NULL. 
  COUNT(columna) solo contabiliza las filas donde la columna especificada NO es NULL.
```

```
metadata:
  materia: "informatica"
  tema: "sql_joins"
  nivel: "basico"
  tags: ["sql", "joins", "inner_join"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de un LEFT JOIN, un INNER JOIN solo devuelve las filas donde existe una coincidencia en ambas tablas relacionadas."

explicacion: |
  Correcto. El INNER JOIN actúa como una intersección de conjuntos, filtrando cualquier registro que no tenga su par correspondiente en la otra tabla.
```

```
metadata:
  materia: "informatica"
  tema: "sql_consultas_basicas"
  nivel: "intermedio"
  tags: ["sql", "orden_ejecucion"]

respuesta_orden: ["FROM", "WHERE", "GROUP BY", "HAVING", "SELECT", "ORDER BY"]
tipo: ordenar
opciones_explicitas: ["FROM", "WHERE", "GROUP BY", "HAVING", "SELECT", "ORDER BY"]

enunciado: "Para entender por qué no se puede usar un alias de una columna creada en el SELECT dentro de una cláusula WHERE, es necesario conocer el orden lógico de ejecución. Ordena las siguientes cláusulas de la primera a la última en que el motor de SQL las procesa:"

explicacion: |
  El motor primero identifica la fuente de datos (FROM), luego filtra filas (WHERE), agrupa (GROUP BY), filtra grupos (HAVING), selecciona columnas (SELECT) y finalmente ordena (ORDER BY).
```

```
metadata:
  materia: "informatica"
  tema: "sql_agregaciones"
  nivel: "intermedio"
  tags: ["sql", "agregacion", "having", "where"]

respuesta: "WHERE filtra filas antes de agrupar, HAVING filtra grupos después de agrupar"
tipo: mc
opciones_explicitas: ["WHERE filtra filas antes de agrupar, HAVING filtra grupos después de agrupar", "WHERE filtra grupos después de agrupar, HAVING filtra filas antes de agrupar", "Ambos se usan para filtrar filas individuales", "WHERE se usa con funciones de agregado y HAVING no"]

enunciado: "Al realizar una consulta con agregación, ¿cuál es la diferencia clave entre el uso de WHERE y HAVING?"

explicacion: |
  La cláusula WHERE se aplica sobre las filas individuales antes de que se realice cualquier agrupación. La cláusula HAVING se aplica sobre los resultados de las funciones de agregado una vez que los grupos han sido formados.
```

```
metadata:
  materia: "informatica"
  tema: "sql_joins"
  nivel: "intermedio"
  tags: ["sql", "union", "join"]

respuesta: "JOIN"
tipo: completar
respuestas_validas:
  - "JOIN"

enunciado: "En términos de estructura de resultados, un ___ añade nuevas columnas a una fila mediante la relación de tablas, mientras que un UNION añade nuevas filas al resultado combinando conjuntos de datos."

explicacion: |
  Un JOIN expande la consulta hacia la derecha (más columnas) basándose en una clave común. Un UNION expande la consulta hacia abajo (más filas) combinando los resultados de dos SELECT que deben tener la misma estructura de columnas.
```

```
metadata:
  materia: "informatica"
  tema: "sql_consultas_joins_agregaciones"
  nivel: "intermedio"
  tags: ["sql", "joins", "count"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  datos: [["una tabla Clientes con 5 filas y una tabla Pedidos con 3 filas, todas referenciando clientes existentes", 3], ["una tabla Usuarios con 4 filas y una tabla Posts con 6 filas, todas referenciando usuarios existentes", 6], ["una tabla Departamentos con 3 filas y una tabla Empleados con 2 filas, todas referenciando departamentos existentes", 2]]

enunciado: "Si tenemos {datos[escenario_idx][0]}, ¿cuántos registros resultantes devolvería un INNER JOIN entre ambas tablas?"

respuesta: datos[escenario_idx][1]
tipo: completar
tolerancia_abs: 0

explicacion: |
  El INNER JOIN solo devuelve las filas donde hay una coincidencia en ambas tablas. En este caso, se contaron las coincidencias exitosas.
```

```
metadata:
  materia: "informatica"
  tema: "sql_consultas_joins_agregaciones"
  nivel: "basico"
  tags: ["sql", "nulls"]

enunciado: "En una consulta SQL, si aplicamos una función de agregación como SUM() o AVG() sobre una columna que contiene valores NULL, ¿qué sucede con esos valores?"

opciones_explicitas: ["Se tratan como 0", "Se ignoran en el cálculo", "La consulta devuelve error", "Se tratan como NULL y el resultado es NULL"]

respuesta: "Se ignoran en el cálculo"
tipo: mc

explicacion: |
  Las funciones de agregación estándar en SQL (excepto COUNT(*)) ignoran los valores NULL al realizar sus cálculos.
```

```
metadata:
  materia: "informatica"
  tema: "sql_consultas_joins_agregaciones"
  nivel: "intermedio"
  tags: ["sql", "order_of_execution"]

enunciado: "Ordena las cláusulas de una consulta SQL estándar de forma lógica, desde la que se procesa primero hasta la última:"

opciones_explicitas: ["FROM", "WHERE", "GROUP BY", "HAVING", "SELECT", "ORDER BY"]

respuesta_orden: ["FROM", "WHERE", "GROUP BY", "HAVING", "SELECT", "ORDER BY"]
tipo: ordenar

explicacion: |
  El motor de SQL primero localiza la fuente de datos (FROM), filtra filas (WHERE), agrupa (GROUP BY), filtra grupos (HAVING), selecciona columnas (SELECT) y finalmente ordena (ORDER BY).
```

```
metadata:
  materia: "informatica"
  tema: "sql_consultas_joins_agregaciones"
  nivel: "intermedio"
  tags: ["sql", "having_vs_where"]

enunciado: "Si queremos filtrar un grupo de resultados basándonos en el resultado de una función de agregación (por ejemplo, 'donde el promedio de ventas sea mayor a 100'), ¿debemos usar la cláusula ___ en lugar de WHERE?"

respuestas_validas:
  - "HAVING"

respuesta: "HAVING"
tipo: completar

explicacion: |
  La cláusula WHERE se usa para filtrar filas individuales antes de la agrupación, mientras que HAVING se usa para filtrar grupos después de aplicar funciones de agregación.
```

```
metadata:
  materia: "informatica"
  tema: "sql_consultas_joins_agregaciones"
  nivel: "basico"
  tags: ["sql", "avg"]

variables:
  datos_ventas: uno_de([[100, 200, 300], [50, 150, 250], [10, 20, 60]])

enunciado: "Se tiene una tabla con una columna 'monto' que contiene los siguientes valores: {datos_ventas[0]}, {datos_ventas[1]}, {datos_ventas[2]}. ¿Cuál es el resultado de la función AVG(monto)?"

respuesta: (datos_ventas[0] + datos_ventas[1] + datos_ventas[2]) / 3
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  La función AVG() suma todos los valores y los divide por la cantidad de elementos.
```

## Sección: subsistema-de-entrada-y-salida (22 preguntas)

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "basico"
  tags: ["definicion"]

variables:
  n: uno_de([1, 1])

respuesta: "interactuar con el mundo exterior, recibiendo y enviando datos"
tipo: mc
opciones_explicitas: ["interactuar con el mundo exterior, recibiendo y enviando datos", "almacenar datos permanentemente sin procesarlos", "generar electricidad para la computadora"]

enunciado: "El subsistema de entrada y salida (E/S) permite que la computadora..."

explicacion: |
  Es el conjunto de componentes y protocolos que conecta a la
  computadora con el mundo exterior, recibiendo datos y enviando
  resultados.
```

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "basico"
  tags: ["entrada"]

variables:
  dispositivo: uno_de(["un teclado", "un mouse", "un micrófono"])

respuesta: "entrada"
tipo: mc
opciones_explicitas: ["entrada", "salida"]

enunciado: "\"{dispositivo}\" es un dispositivo de..."

explicacion: |
  Estos dispositivos ingresan datos al sistema para ser procesados: son
  dispositivos de entrada.
```

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "basico"
  tags: ["salida"]

variables:
  dispositivo: uno_de(["la pantalla", "los parlantes", "una impresora"])

respuesta: "salida"
tipo: mc
opciones_explicitas: ["entrada", "salida"]

enunciado: "\"{dispositivo}\" es un dispositivo de..."

explicacion: |
  Estos dispositivos muestran o entregan la información ya procesada
  por el sistema: son dispositivos de salida.
```

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "intermedio"
  tags: ["rendimiento"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La velocidad y eficiencia del subsistema de E/S determinan en gran medida el rendimiento general de la computadora."

explicacion: |
  A menudo el procesador es tan rápido que debe esperar a que los
  dispositivos de E/S envíen o reciban datos, afectando el rendimiento
  percibido.
```

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "intermedio"
  tags: ["controlador"]

variables:
  n: uno_de([1, 1])

respuesta: "controlador de E/S (chipset)"
tipo: mc
opciones_explicitas: ["controlador de E/S (chipset)", "el disco duro", "el mouse"]

enunciado: "El componente que actúa como traductor entre la CPU y los dispositivos externos se llama..."

explicacion: |
  El controlador de E/S o chipset asegura que los datos del hardware se
  entiendan correctamente por el sistema operativo, y viceversa.
```

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "basico"
  tags: ["conexion actual"]

variables:
  protocolo: uno_de(["USB", "Bluetooth"])

respuesta: verdadero
tipo: vf

enunciado: "\"{protocolo}\" es uno de los protocolos que predominan hoy en día para conectar dispositivos de E/S."

explicacion: |
  USB (Interfaz Serial Universal) y Bluetooth reemplazaron en gran
  medida a los puertos paralelo y serial históricos.
```

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "basico"
  tags: ["conexion historica"]

variables:
  puerto: uno_de(["el puerto paralelo", "el puerto serial"])

respuesta: verdadero
tipo: vf

enunciado: "\"{puerto}\" fue uno de los puertos usados históricamente antes de que predominaran los buses universales como USB."

explicacion: |
  Antes de USB y Bluetooth, las conexiones se hacían mediante puertos
  específicos como el paralelo o el serial.
```

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "avanzado"
  tags: ["mapeo de memoria"]

variables:
  n: uno_de([1, 1])

respuesta: "comunicarse con dispositivos de E/S como si fueran parte de la memoria principal"
tipo: mc
opciones_explicitas: ["comunicarse con dispositivos de E/S como si fueran parte de la memoria principal", "borrar la memoria RAM automáticamente", "duplicar los datos del disco duro"]

enunciado: "El \"mapeo de memoria\" permite a la CPU..."

explicacion: |
  Simplifica la programación: el procesador accede a direcciones de
  memoria reservadas para el hardware sin instrucciones especiales.
```

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "intermedio"
  tags: ["estandarizacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Gracias a protocolos estandarizados como USB, un mouse comprado en cualquier parte del mundo puede funcionar sin drivers complicados si el sistema operativo lo soporta."

explicacion: |
  La estandarización de los buses universales facilita la
  compatibilidad entre dispositivos de distintos fabricantes y países.
```

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "basico"
  tags: ["ejemplo whatsapp"]

variables:
  n: uno_de([1, 1])

respuesta: "el controlador de E/S"
tipo: mc
opciones_explicitas: ["el controlador de E/S", "la impresora", "el pendrive"]

enunciado: "Cuando presionás una tecla al escribir en WhatsApp Web, el teclado envía una señal eléctrica que primero traduce..."

explicacion: |
  El controlador de E/S traduce la señal del teclado antes de que la
  información llegue a la memoria RAM y al sistema operativo.
```

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "intermedio"
  tags: ["ejemplo whatsapp"]

variables:
  n: uno_de([1, 1])

respuesta: "la tarjeta gráfica"
tipo: mc
opciones_explicitas: ["la tarjeta gráfica", "el micrófono", "el mouse"]

enunciado: "Para que veas en pantalla la letra que escribiste, el dispositivo de salida que envía señales al monitor por HDMI o DisplayPort es..."

explicacion: |
  La tarjeta gráfica lee la información de la memoria y envía las
  señales que finalmente encienden los píxeles correspondientes.
```

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "intermedio"
  tags: ["ejemplo pendrive"]

variables:
  n: uno_de([1, 1])

respuesta: "salida"
tipo: mc
opciones_explicitas: ["entrada", "salida"]

enunciado: "Copiar un archivo desde tu disco duro hacia un pendrive USB es una operación de..."

explicacion: |
  Estás escribiendo datos en el pendrive: desde el punto de vista del
  sistema, es una operación de salida hacia ese dispositivo.
```

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "intermedio"
  tags: ["ejemplo pendrive"]

variables:
  n: uno_de([1, 1])

respuesta: "entrada"
tipo: mc
opciones_explicitas: ["entrada", "salida"]

enunciado: "Conectar un pendrive a otra computadora y abrir fotos guardadas en él es una operación de..."

explicacion: |
  Estás leyendo datos desde el pendrive hacia el sistema: es una
  operación de entrada.
```

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "basico"
  tags: ["metafora"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La teoría compara a la computadora con una cocina, donde el procesador es el chef y el subsistema de E/S es lo que permite recibir órdenes y entregar el plato terminado."

explicacion: |
  Es la metáfora usada para explicar por qué la computadora necesita
  E/S además de procesamiento y memoria.
```

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "basico"
  tags: ["sin es"]

variables:
  n: uno_de([1, 1])

respuesta: "una caja negra incapaz de comunicarse con el usuario"
tipo: mc
opciones_explicitas: ["una caja negra incapaz de comunicarse con el usuario", "más rápida al no tener que esperar dispositivos", "idéntica a un mainframe"]

enunciado: "Sin el subsistema de E/S, según la teoría, la computadora sería..."

explicacion: |
  Quedaría aislada y sin propósito práctico, sin poder recibir datos ni
  mostrar resultados.
```

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "intermedio"
  tags: ["diagnostico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Comprender el flujo bidireccional de E/S ayuda a diagnosticar problemas como un error de \"dispositivo no reconocido\" (cable, puerto o controladores)."

explicacion: |
  Saber cómo fluye la información entre hardware y software es útil
  para ubicar en qué parte de la cadena está fallando la conexión.
```

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "basico"
  tags: ["sigla usb"]

variables:
  n: uno_de([1, 1])

respuesta: "Interfaz Serial Universal"
tipo: completar

enunciado: "La sigla USB significa ___."

respuestas_validas:
  - "Interfaz Serial Universal"

explicacion: |
  USB (Interfaz Serial Universal) es el bus estándar más usado hoy para
  conectar dispositivos de E/S.
```

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "avanzado"
  tags: ["velocidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El procesador es a menudo tan rápido que debe esperar a que los dispositivos de entrada o salida envíen o reciban datos."

explicacion: |
  Esta espera explica por qué, aunque la CPU sea potente, un equipo
  puede sentirse lento si el subsistema de E/S es el cuello de botella.
```

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "basico"
  tags: ["entrada"]

variables:
  n: uno_de([1, 1])

respuesta: "un archivo descargado de internet"
tipo: mc
opciones_explicitas: ["un archivo descargado de internet", "el sonido de los parlantes", "el texto que se ve en pantalla"]

enunciado: "Según la teoría, ¿cuál de estos es un ejemplo de entrada al sistema?"

explicacion: |
  La entrada incluye cualquier dato que ingresa al sistema, incluido un
  archivo descargado, no sólo teclado o mouse.
```

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "intermedio"
  tags: ["cpu y dispositivos"]

variables:
  n: uno_de([1, 1])

respuesta: "operan a velocidades y con lenguajes muy diferentes"
tipo: mc
opciones_explicitas: ["operan a velocidades y con lenguajes muy diferentes", "son siempre idénticos entre sí", "no necesitan ningún tipo de traducción"]

enunciado: "La comunicación entre la CPU y los dispositivos externos no es directa ni sencilla porque..."

explicacion: |
  Por eso existe el controlador de E/S: para traducir entre lenguajes y
  velocidades distintas.
```

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "basico"
  tags: ["definicion cpu"]

variables:
  n: uno_de([1, 1])

respuesta: "unidad central de procesamiento"
tipo: completar

enunciado: "La sigla CPU significa ___."

respuestas_validas:
  - "unidad central de procesamiento"

explicacion: |
  CPU (unidad central de procesamiento) es el componente que se
  comunica con los dispositivos de E/S a través del controlador
  correspondiente.
```

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "avanzado"
  tags: ["mapeo de memoria"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Gracias al mapeo de memoria, el procesador no necesita instrucciones especiales para leer o escribir datos en un disco duro o una tarjeta gráfica."

explicacion: |
  El mapeo de memoria simplifica la programación al tratar a los
  dispositivos de E/S como direcciones de memoria más.
```

## Sección: tcp-ip-capas-enrutamiento (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "modelo_tcp_ip"
  nivel: "basico"
  tags: ["redes", "protocolos"]

tipo: mc
opciones_explicitas: ["Aplicación", "Transporte", "Internet", "Acceso a la red"]

enunciado: "En el modelo TCP/IP, la capa encargada de la determinación de la ruta de los paquetes a través de la red se denomina capa de ________."

respuesta: "Internet"

explicacion: |
  La capa de Internet se encarga del direccionamiento lógico y el enrutamiento de paquetes (como en el protocolo IP).
```

```
metadata:
  materia: "informatica"
  tema: "encapsulamiento"
  nivel: "basico"
  tags: ["datos", "capas"]

tipo: vf
respuesta: falso

enunciado: "¿Es correcto afirmar que un segmento de la capa de transporte se convierte en un datagrama al descender hacia la capa de Internet?"

explicacion: |
  Falso. Un segmento (Transporte) se encapsula en un datagrama (Internet). El término "segmento" se usa para la capa de Transporte.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_tcp_ip"
  nivel: "basico"
  tags: ["orden", "capas"]

tipo: ordenar
opciones_explicitas: ["Aplicación", "Transporte", "Internet", "Acceso a la red"]

enunciado: "Ordene las capas del modelo TCP/IP desde la capa superior (la más cercana al usuario) hasta la capa inferior (la más cercana al hardware)."

respuesta_orden: ["Aplicación", "Transporte", "Internet", "Acceso a la red"]

explicacion: |
  El orden jerárquico estándar es: Aplicación -> Transporte -> Internet -> Acceso a la red.
```

```
metadata:
  materia: "informatica"
  tema: "pdu_capas"
  nivel: "intermedio"
  tags: ["terminologia"]

variables:
  escenario: uno_de([["Paquete", "Internet"], ["Trama", "Acceso a la red"], ["Segmento", "Transporte"]])

tipo: completar
respuestas_validas:
  - "Paquete"
  - "Trama"
  - "Segmento"

enunciado: "En la capa de {escenario[1]}, la unidad de datos de protocolo (PDU) se denomina ________."

respuesta: escenario[0]

explicacion: |
  Cada capa tiene su propia PDU: Segmento (Transporte), Paquete (Internet) y Trama (Acceso a la red).
```

```
metadata:
  materia: "informatica"
  tema: "capa_transporte"
  nivel: "basico"
  tags: ["protocolos", "tcp_udp"]

tipo: mc
opciones_explicitas: ["Control de flujo y error", "Direccionamiento físico", "Enrutamiento de paquetes", "Conversión de señales"]

enunciado: "¿Cuál es una de las funciones principales de la capa de Transporte?"

respuesta: "Control de flujo y error"

explicacion: |
  La capa de transporte (como TCP) se encarga de la comunicación extremo a extremo, controlando el flujo de datos y asegurando la integridad mediante la detección de errores.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_capas_red"
  nivel: "basico"
  tags: ["tcp_ip", "teoria"]

tipo: mc
opciones_explicitas: ["Aplicación", "Transporte", "Internet", "Acceso a Red"]

enunciado: "En el modelo TCP/IP, la capa encargada de la determinación de la ruta (enrutamiento) y el direccionamiento lógico es la capa de ___."

respuesta: "Internet"

explicacion: |
  La capa de Internet se encarga de mover paquetes desde el origen al destino a través de redes interconectadas, utilizando protocolos como IP.
```

```
metadata:
  materia: "informatica"
  tema: "encapsulamiento_datos"
  nivel: "intermedio"
  tags: ["encapsulamiento", "sdp"]

tipo: completar
respuestas_validas:
  - "Trama"
  - "Frame"

enunciado: "Si estamos en la capa de Transporte y añadimos la cabecera correspondiente, el resultado es un Segmento. Al pasar a la capa de Internet, este se encapsula dentro de un Paquete, y finalmente en la capa de Acceso a Red se transforma en una ___."

respuesta: "Trama"

explicacion: |
  El proceso de encapsulamiento añade información de control (cabeceras) a medida que los datos descienden por las capas del modelo.
```

```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "basico"
  tags: ["ip", "verdadero_falso"]

tipo: vf

enunciado: "La dirección MAC (Media Access Control) opera en la capa de Internet del modelo TCP/IP para permitir el enrutamiento entre redes distintas."

respuesta: falso

explicacion: |
  Falso. La dirección MAC opera en la capa de Acceso a Red (Capa 2 del modelo OSI). El enrutamiento entre redes distintas se realiza mediante direcciones IP en la capa de Internet.
```

```
metadata:
  materia: "informatica"
  tema: "flujo_datos"
  nivel: "intermedio"
  tags: ["encapsulamiento", "orden"]

tipo: ordenar
opciones_explicitas: ["Datos", "Segmento", "Paquete", "Trama"]

enunciado: "Ordena los elementos según el proceso de encapsulamiento, desde la capa más alta (Aplicación) hasta la más baja (Acceso a Red):"

respuesta_orden: ["Datos", "Segmento", "Paquete", "Trama"]

explicacion: |
  El flujo de datos (descendente) sigue este orden: Datos (Aplicación) -> Segmento (Transporte) -> Paquete (Internet) -> Trama (Acceso a Red).
```

```
metadata:
  materia: "informatica"
  tema: "subredes_ip"
  nivel: "avanzado"
  tags: ["ip", "calculo"]

variables:
  idx: uno_de([0, 1])
  datos: [["255.255.255.0", 256], ["255.255.255.128", 128]]

tipo: completar
tolerancia_abs: 0

enunciado: "Si una red tiene una máscara de subred de {datos[idx][0]}, el número total de direcciones IP posibles (incluyendo la de red y de broadcast) es de ___."

respuesta: datos[idx][1]

pasos:
  - "Identificar la máscara de subred."
  - "Calcular el número de bits disponibles para hosts."
  - "Calcular 2 elevado a la potencia de esos bits."

explicacion: |
  Para una máscara /24 (255.255.255.0), quedan 8 bits para hosts. 2^8 = 256. Para una máscara /25 (255.255.255.128), quedan 7 bits para hosts. 2^7 = 128.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_tcp_ip"
  nivel: "basico"
  tags: ["redes", "capas", "modelo_tcp_ip"]

respuesta: "Capa de Red"
tipo: completar
respuestas_validas:
  - "Capa de Red"
  - "Capa de Internet"

enunciado: "En el modelo TCP/IP, la función de determinar la mejor ruta para un paquete de datos a través de múltiples redes es responsabilidad de la ___."

explicacion: |
  La Capa de Red (o de Internet en el modelo TCP/IP) se encarga del direccionamiento lógico (IP) y el enrutamiento. La Capa de Enlace se encarga del direccionamiento físico (MAC) en un mismo segmento de red.
```

```
metadata:
  materia: "informatica"
  tema: "enrutamiento"
  nivel: "intermedio"
  tags: ["router", "enrutamiento", "paquetes"]

variables:
  escenario: uno_de([["IP de destino: 192.168.1.5, MAC de destino: AA:BB:CC:DD:EE:FF", "router_actua"], ["IP de destino: 10.0.0.1, MAC de destino: FF:FF:FF:FF:FF:FF", "router_actua"]])

respuesta: "router_actua"
tipo: mc
opciones_explicitas: ["router_actua", "router_no_interviene"]

enunciado: "Un router recibe un paquete donde la dirección IP de destino es distinta a la de la interfaz local, pero la dirección MAC de destino corresponde a su propia interfaz. ¿Qué acción realiza el dispositivo según el escenario {escenario[0]}?"

explicacion: |
  El router recibe el frame, ve que la MAC es suya, descarta la capa de enlace, analiza la IP de destino en la capa de red y consulta su tabla de enrutamiento para decidir el siguiente salto.
```

```
metadata:
  materia: "informatica"
  tema: "encapsulamiento"
  nivel: "intermedio"
  tags: ["encapsulamiento", "PDU", "datos"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que un segmento TCP contiene dentro de su cuerpo (payload) un datagrama IP?"

explicacion: |
  Falso. El proceso es inverso: el datagrama IP encapsula al segmento TCP. El datagrama IP es la unidad de la capa de red que contiene la información de la capa de transporte.
```

```
metadata:
  materia: "informatica"
  tema: "encapsulamiento"
  nivel: "intermedio"
  tags: ["orden", "encapsulamiento"]

respuesta_orden: ["Datos", "Segmento", "Paquete", "Trama"]
tipo: ordenar
opciones_explicitas: ["Datos", "Segmento", "Paquete", "Trama"]

enunciado: "Ordene las Unidades de Datos de Protocolo (PDU) según el proceso de encapsulamiento desde la capa de Aplicación hasta la capa de Enlace:"

explicacion: |
  1. Datos (Aplicación) -> 2. Segmento (Transporte) -> 3. Paquete (Red) -> 4. Trama (Enlace).
```

```
metadata:
  materia: "informatica"
  tema: "direccionamiento"
  nivel: "basico"
  tags: ["ip", "mac", "direccionamiento"]

variables:
  caso: uno_de([["192.168.1.1", "IP"], ["00:0A:95:9D:68:16", "MAC"]])

respuesta: "IP"
tipo: mc
opciones_explicitas: ["IP", "MAC"]

enunciado: "Si estamos analizando la dirección {caso[0]} para determinar la ruta lógica entre dos redes distintas, estamos trabajando con una dirección de tipo {caso[1]}."

explicacion: |
  Las direcciones IP son lógicas y permiten el enrutamiento entre redes. Las direcciones MAC son físicas y solo sirven para la comunicación dentro del mismo segmento de red local.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_capas_red"
  nivel: "basico"
  tags: ["tcp_ip", "capas", "enrutamiento"]

respuesta: "capa_de_red"
tipo: completar
respuestas_validas:
  - "capa_de_red"
  - "capa_de_enlace"

enunciado: "Mientras que la capa de enlace se encarga de la transferencia de datos entre nodos adyacentes en una misma red local, la ___ se encarga de determinar la ruta de extremo a extremo a través de múltiples redes interconectadas."

explicacion: |
  La capa de red (IP) es responsable del enrutamiento de paquetes entre redes distintas, mientras que la capa de enlace (Ethernet, Wi-Fi) gestiona la comunicación dentro de un mismo segmento de red.
```

```
metadata:
  materia: "informatica"
  tema: "direccionamiento"
  nivel: "basico"
  tags: ["ip", "mac", "direccionamiento"]

variables:
  respuesta_correcta: "logica"

respuesta: "logica"
tipo: mc
opciones_explicitas: ["logica", "fisica"]

enunciado: "En el modelo TCP/IP, la dirección IP se considera una dirección de tipo:"

explicacion: "La dirección IP es una dirección lógica (lógica), mientras que la dirección MAC es una dirección física."
```

```
metadata:
  materia: "informatica"
  tema: "enrutamiento"
  nivel: "intermedio"
  tags: ["router", "capa_red"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es el router un dispositivo que opera principalmente en la capa de red para decidir el mejor camino para un paquete de datos?"

explicacion: |
  Correcto. El router analiza las direcciones IP de destino en la capa de red para consultar sus tablas de enrutamiento y enviar el paquete al siguiente salto.
```

```
metadata:
  materia: "informatica"
  tema: "encapsulacion"
  nivel: "intermedio"
  tags: ["encapsulacion", "datos"]

respuesta_orden: ["datos", "segmento", "paquete", "trama"]
tipo: ordenar

opciones_explicitas: ["datos", "segmento", "paquete", "trama"]

enunciado: "Ordena los elementos de menor a mayor nivel de encapsulamiento (desde la información original hasta la unidad de la capa física):"

explicacion: |
  El proceso de encapsulamiento añade encabezados en cada capa: Datos (Aplicación) -> Segmento (Transporte) -> Paquete (Red) -> Trama (Enlace).
```

```
metadata:
  materia: "informatica"
  tema: "protocolos_transporte"
  nivel: "intermedio"
  tags: ["tcp", "udp", "transporte"]

variables:
  idx: uno_de([0, 1])
  tabla_protocolo: [["tcp", "orientado_a_conexion"], ["udp", "no_orientado_a_conexion"]]

respuesta: tabla_protocolo[idx][1]
tipo: mc
opciones_explicitas: ["orientado_a_conexion", "no_orientado_a_conexion"]
enunciado: "¿Qué tipo de conexión tiene el protocolo {tabla_protocolo[idx][0]}?"
explicacion: "El protocolo sorteado determina la respuesta correcta entre orientado a conexión y no orientado a conexión."
```

```
metadata:
  materia: "informatica"
  tema: "modelo_capas_red"
  nivel: "intermedio"
  tags: ["tcp_ip", "enrutamiento", "capa_red"]

variables:
  ip_origen: "192.168.1.5"

tipo: mc
respuesta: "Capa de Red"
opciones_explicitas: ["Capa de Aplicación", "Capa de Transporte", "Capa de Red", "Capa de Enlace"]

enunciado: "Un paquete con la IP de origen {ip_origen} debe viajar hacia 8.8.8.8. ¿En qué capa del modelo TCP/IP se toman las decisiones de enrutamiento para determinar la mejor ruta?"

explicacion: |
  La capa de Red (Internet Layer) es la encargada de gestionar el direccionamiento lógico (IP) y el enrutamiento de los paquetes a través de diferentes redes.
```

```
metadata:
  materia: "informatica"
  tema: "encapsulamiento"
  nivel: "basico"
  tags: ["encapsulamiento", "datos", "capas"]

tipo: completar
respuestas_validas:
  - "Segmento"
  - "Paquete"
  - "Trama"

enunciado: "Cuando los datos de la capa de aplicación bajan a la capa de transporte, se les añade una cabecera de transporte y la unidad de datos resultante se denomina ___."

explicacion: |
  En la capa de transporte, la unidad de datos se denomina Segmento (en TCP) o Datagrama (en UDP).
```

```
metadata:
  materia: "informatica"
  tema: "modelo_capas_red"
  nivel: "basico"
  tags: ["teoria", "verdadero_falso"]

tipo: vf

enunciado: "En el modelo TCP/IP, la capa de Enlace de Datos y la capa Física del modelo OSI se combinan funcionalmente en la capa de Acceso a Red."

respuesta: verdadero

explicacion: |
  Es correcto. El modelo TCP/IP original agrupa las funciones de la capa física y de enlace de datos de OSI en la capa de Acceso a Red (Network Access).
```

```
metadata:
  materia: "informatica"
  tema: "encapsulamiento"
  nivel: "intermedio"
  tags: ["ordenar", "encapsulamiento"]

tipo: ordenar
opciones_explicitas: ["Datos", "Segmento", "Paquete", "Trama"]

enunciado: "Ordene correctamente las unidades de datos (PDUs) según el proceso de encapsulamiento desde la capa de Aplicación hasta la de Acceso a Red:"

explicacion: |
  El proceso es descendente: Datos (Aplicación) -> Segmento (Transporte) -> Paquete (Red) -> Trama (Enlace).
respuesta_orden: ["Datos", "Segmento", "Paquete", "Trama"]
```

```
metadata:
  materia: "informatica"
  tema: "enrutamiento_ip"
  nivel: "avanzado"
  tags: ["ip", "enrutamiento", "subred"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["192.168.1.10", "255.255.255.0", 3232235776], ["10.0.0.5", "255.0.0.0", 167772160]]

tipo: completar
tolerancia_abs: 0

enunciado: "Si un host tiene la dirección IP {datos[escenario_idx][0]} y la máscara de subred {datos[escenario_idx][1]}, ¿cuál es el valor decimal de la dirección de red (Network ID)?"

pasos:
  - "Identificar la máscara de red."
  - "Realizar la operación AND bit a bit entre la IP y la máscara."

explicacion: |
  La dirección de red se obtiene aplicando una operación AND lógica entre la dirección IP del host y su máscara de subred.

respuesta: datos[escenario_idx][2]
```

## Sección: tipos-de-licencias-de-software (22 preguntas)

```
metadata:
  materia: "Informática"
  tema: "tipos_de_licencias_de_software"
  nivel: "basico"
  tags: ["definicion", "conceptos_basicos"]

variables:
  x: random(1, 10)

respuesta: "contrato legal"
tipo: completar

enunciado: "Las licencias de software son, en esencia, los {x} que definen qué se puede y qué no se puede hacer con un programa informático."

explicacion: |
  Las licencias son los términos y condiciones (un contrato legal) que acompañan al software, estableciendo los derechos del usuario y las obligaciones del creador.
```

```
metadata:
  materia: "Informática"
  tema: "tipos_de_licencias_de_software"
  nivel: "basico"
  tags: ["derechos_autor", "propiedad_intelectual"]

variables:
  x: random(1, 10)

respuesta: "todos los derechos estan reservados al autor original"
tipo: completar

enunciado: "Sin una licencia clara, por defecto, {x} significa que técnicamente no podrías hacer nada con ese software más allá de verlo o ejecutarlo."

explicacion: |
  Según la ley de propiedad intelectual vigente, si no hay una licencia explícita, todos los derechos están reservados al autor original.
```

```
metadata:
  materia: "Informática"
  tema: "tipos_de_licencias_de_software"
  nivel: "basico"
  tags: ["codigo_fuente", "software_propietario"]

variables:
  x: random(1, 10)

respuesta: "cerrado"
tipo: completar

enunciado: "En el software propietario, el código fuente está {x} y es propiedad exclusiva de su creador o empresa."

explicacion: |
  La característica definitoria del software propietario es que su código fuente no es accesible públicamente; está cerrado.
```

```
metadata:
  materia: "Informática"
  tema: "tipos_de_licencias_de_software"
  nivel: "basico"
  tags: ["software_libre", "definicion"]

variables:
  x: random(1, 10)

respuesta: "libre"
tipo: completar

enunciado: "El software libre no significa necesariamente que sea gratis, sino que es {x} en el sentido de libertad de uso."

explicacion: |
  El término "libre" se refiere a la libertad (freedom) de usar, estudiar, modificar y distribuir, no necesariamente al precio (gratis).
```

```
metadata:
  materia: "Informática"
  tema: "tipos_de_licencias_de_software"
  nivel: "intermedio"
  tags: ["copyleft", "licencias_libres"]

variables:
  x: random(1, 10)

respuesta: "copyleft"
tipo: completar

enunciado: "Las licencias libres como la GPL tienen una característica clave llamada {x}: si modificas el programa y lo distribuyes, debes hacerlo bajo la misma licencia."

explicacion: |
  Copyleft es el mecanismo que garantiza que las mejoras derivadas permanezcan abiertas y bajo la misma licencia de software libre.
```

```
metadata:
  materia: "Informática"
  tema: "tipos_de_licencias_de_software"
  nivel: "intermedio"
  tags: ["gpl", "ejemplos"]

variables:
  x: random(1, 10)

respuesta: "General Public License"
tipo: completar

enunciado: "GPL son las siglas de {x}, una licencia de software libre muy conocida."

explicacion: |
  GPL significa General Public License. Es una licencia copyleft que obliga a liberar el código fuente de las obras derivadas.
```

```
metadata:
  materia: "Informática"
  tema: "tipos_de_licencias_de_software"
  nivel: "basico"
  tags: ["control", "software_propietario"]

variables:
  x: random(1, 10)

respuesta: "la empresa mantiene el control total"
tipo: completar

enunciado: "En el software propietario, {x} sobre las actualizaciones y la seguridad, y tú dependes de ellos para cualquier cambio."

explicacion: |
  El creador o empresa mantiene el control total, y el usuario depende de ellos para actualizaciones y correcciones de seguridad.
```

```
metadata:
  materia: "Informática"
  tema: "tipos_de_licencias_de_software"
  nivel: "basico"
  tags: ["contexto_argentina", "comunidad"]

variables:
  x: random(1, 10)

respuesta: "fuerte comunidad de desarrollo de software libre"
tipo: completar

enunciado: "Argentina, como muchos países, tiene {x}, por lo que entender las licencias es fundamental para la colaboración tecnológica."

explicacion: |
  Argentina tiene una fuerte tradición y comunidad de software libre, haciendo crucial entender estos conceptos para participar activamente.
```

```
metadata:
  materia: "Informática"
  tema: "tipos_de_licencias_de_software"
  nivel: "basico"
  tags: ["ejemplos", "software_propietario"]

variables:
  x: random(1, 10)

respuesta: "proprietaria"
tipo: completar

enunciado: "Adobe Photoshop es un ejemplo de software con licencia {x}."

explicacion: |
  Adobe Photoshop es software propietario (privativo), con código cerrado y derechos reservados por Adobe.
```

```
metadata:
  materia: "Informática"
  tema: "tipos_de_licencias_de_software"
  nivel: "intermedio"
  tags: ["licencias_persivas", "mit"]

variables:
  x: random(1, 10)

respuesta: "permisiva"
tipo: completar

enunciado: "La licencia MIT es un ejemplo de licencia {x}, que permite gran libertad en el uso y redistribución."

explicacion: |
  MIT es una licencia permisiva. A diferencia del copyleft, permite que el código derivado sea cerrado o propietario.
```

```
metadata:
  materia: "Informática"
  tema: "tipos_de_licencias_de_software"
  nivel: "intermedio"
  tags: ["licencias_persivas", "apache"]

variables:
  x: random(1, 10)

respuesta: "permisiva"
tipo: completar

enunciado: "La licencia Apache es un ejemplo de licencia {x} que permite el uso comercial y la redistribución con pocas restricciones."

explicacion: |
  Apache es una licencia permisiva popular en el mundo del software libre, similar a MIT pero con cláusulas de patente.
```

```
metadata:
  materia: "Informática"
  tema: "tipos_de_licencias_de_software"
  nivel: "intermedio"
  tags: ["etica", "colaboracion"]

variables:
  x: random(1, 10)

respuesta: "etica del software"
tipo: completar

enunciado: "La importancia de distinguir entre los tipos de licencias radica en la {x} y en la colaboración tecnológica."

explicacion: |
  La ética del software es clave para entender las implicaciones morales y legales del uso y desarrollo de programas.
```

```
metadata:
  materia: "Informática"
  tema: "tipos_de_licencias_de_software"
  nivel: "basico"
  tags: ["dependencia", "software_propietario"]

variables:
  x: random(1, 10)

respuesta: "dependes de ellos"
tipo: completar

enunciado: "En el software propietario, {x} para cualquier cambio o actualización del programa."

explicacion: |
  El usuario depende completamente del proveedor para cambios, ya que no puede modificar el código por sí mismo.
```

```
metadata:
  materia: "Informática"
  tema: "tipos_de_licencias_de_software"
  nivel: "intermedio"
  tags: ["licencias_persivas", "bsd"]

variables:
  x: random(1, 10)

respuesta: "permisiva"
tipo: completar

enunciado: "La licencia BSD es un ejemplo de licencia {x} que permite el uso en software propietario sin obligar a liberar el código derivado."

explicacion: |
  BSD es una licencia permisiva que permite la derivación en software cerrado, a diferencia de la GPL.
```

```
metadata:
  materia: "Informática"
  tema: "tipos_de_licencias_de_software"
  nivel: "basico"
  tags: ["acceso", "software_libre"]

variables:
  x: random(1, 10)

respuesta: "cualquiera"
tipo: completar

enunciado: "En el software libre, {x} puede acceder al código fuente."

explicacion: |
  La accesibilidad del código fuente a cualquier persona es la base del software libre y de código abierto.
```

```
metadata:
  materia: "Informática"
  tema: "tipos_de_licencias_de_software"
  nivel: "intermedio"
  tags: ["distractores", "creative_commons"]

variables:
  x: random(1, 10)

respuesta: "Creative Commons"
tipo: completar

enunciado: "¿Cuál de las siguientes NO es típicamente una licencia de software, sino para contenido creativo?"

opciones_explicitas: ["GPL", "MIT", "Creative Commons", "Apache"]

explicacion: |
  Creative Commons se usa principalmente para obras creativas (imágenes, textos, música), aunque tiene variantes, no es la licencia estándar de software.
```

```
metadata:
  materia: "Informática"
  tema: "tipos_de_licencias_de_software"
  nivel: "intermedio"
  tags: ["gpl", "modificacion"]

variables:
  x: random(1, 10)

respuesta: "debes hacerlo bajo la misma licencia"
tipo: completar

enunciado: "Si modificas un programa con licencia GPL y lo distribuyes, {x}."

explicacion: |
  La cláusula copyleft de la GPL obliga a distribuir las modificaciones bajo la misma licencia GPL.
```

```
metadata:
  materia: "Informática"
  tema: "tipos_de_licencias_de_software"
  nivel: "avanzado"
  tags: ["licencias_hibradas", "mpl"]

variables:
  x: random(1, 10)

respuesta: "híbrida"
tipo: completar

enunciado: "La licencia MPL (Mozilla Public License) se considera una licencia {x} que combina elementos de copyleft y permisiva."

explicacion: |
  MPL requiere que las modificaciones al archivo original se liberen, pero permite combinarlo con código cerrado en otros archivos.
```

```
metadata:
  materia: "Informática"
  tema: "tipos_de_licencias_de_software"
  nivel: "avanzado"
  tags: ["gpl", "agpl", "copyleft_fuerte"]

variables:
  x: random(1, 10)

respuesta: "AGPL"
tipo: completar

enunciado: "La {x} es una variante de la GPL que requiere liberar el código incluso si el software se usa a través de una red (SaaS)."

explicacion: |
  AGPL (Affero GPL) cierra la brecha del SaaS, obligando a liberar el código fuente para aplicaciones web.
```

```
metadata:
  materia: "Informática"
  tema: "tipos_de_licencias_de_software"
  nivel: "intermedio"
  tags: ["licencias_persivas", "mit", "atribucion"]

variables:
  x: random(1, 10)

respuesta: "atribucion"
tipo: completar

enunciado: "La licencia MIT generalmente solo requiere {x} del autor original en las copias del software."

explicacion: |
  MIT es muy permisiva y solo exige mantener el aviso de copyright y la atribución al autor original.
```

```
metadata:
  materia: "Informática"
  tema: "tipos_de_licencias_de_software"
  nivel: "avanzado"
  tags: ["licencias_persivas", "apache", "patentes"]

variables:
  x: random(1, 10)

respuesta: "patentes"
tipo: completar

enunciado: "A diferencia de MIT, la licencia Apache incluye cláusulas explícitas sobre {x}, protegiendo a los usuarios de demandas por patentes."

explicacion: |
  Apache 2.0 incluye una concesión de patentes implícita, protegiendo a los usuarios de acciones legales por patentes relacionadas con el software.
```

```
metadata:
  materia: "Informática"
  tema: "tipos_de_licencias_de_software"
  nivel: "intermedio"
  tags: ["gpl", "uso_privado"]

variables:
  x: random(1, 10)

respuesta: "no es necesario"
tipo: completar

enunciado: "Si modificas un programa GPL pero lo usas solo internamente sin distribuirlo, {x} liberar el código fuente."

explicacion: |
  La GPL solo obliga a liberar el código cuando se distribuye el software. El uso interno no requiere liberación.
```

## Sección: seguridad-de-red-firewall-vpn-cifrado (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red_firewall_vpn_cifrado"
  nivel: "basico"
  tags: ["firewall", "redes", "seguridad"]

respuesta: "filtrar"
tipo: completar
respuestas_validas:
  - "filtrar"
  - "controlar"
  - "bloquear"

enunciado: "La función principal de un firewall es ___ el tráfico de red basándose en un conjunto de reglas de seguridad establecidas."

explicacion: |
  Un firewall actúa como una barrera entre una red confiable y una no confiable, permitiendo o denegando paquetes según criterios predefinidos.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red_firewall_vpn_cifrado"
  nivel: "basico"
  tags: ["vpn", "tunel", "redes"]

opciones_explicitas: ["Un túnel cifrado", "Un cable físico", "Un servidor de archivos", "Un sistema de backup"]
respuesta: "Un túnel cifrado"
tipo: mc

enunciado: "Una Red Privada Virtual (VPN) crea esencialmente ___ sobre una infraestructura de red pública como Internet."

explicacion: |
  La VPN utiliza protocolos de encapsulamiento y cifrado para crear un "túnel" lógico que protege la privacidad de los datos.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red_firewall_vpn_cifrado"
  nivel: "intermedio"
  tags: ["cifrado", "datos_en_transito", "seguridad"]

respuesta: verdadero
tipo: vf

enunciado: "¿El cifrado de datos en tránsito asegura que, si un atacante intercepta los paquetes, no pueda leer su contenido original?"

explicacion: |
  Exacto. El cifrado transforma la información en un formato ilegible para cualquiera que no posea la clave de descifrado, protegiendo la confidencialidad durante el movimiento de los datos.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red_firewall_vpn_cifrado"
  nivel: "intermedio"
  tags: ["protocolos", "seguridad", "ordenar"]

opciones_explicitas: ["Cifrado", "Encapsulamiento", "Autenticación"]
respuesta_orden: ["Autenticación", "Encapsulamiento", "Cifrado"]
tipo: ordenar

enunciado: "Ordene los procesos lógicos que ocurren típicamente en la construcción de un túnel VPN seguro, desde la validación de identidad hasta la protección del contenido:"

explicacion: |
  Primero se autentica al usuario, luego se encapsula el paquete dentro de otro protocolo y finalmente se cifra el contenido para garantizar la privacidad.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red_firewall_vpn_cifrado"
  nivel: "avanzado"
  tags: ["cifrado", "hash", "seguridad"]

respuesta: "El cifrado es reversible con una clave, el hashing es una función de una sola vía"
tipo: mc
opciones_explicitas: ["El cifrado es reversible con una clave, el hashing es una función de una sola vía", "El cifrado es de una vía, el hashing es reversible", "Ambos son lo mismo", "El cifrado es para archivos y el hashing para redes"]

enunciado: "Considerando las propiedades de los algoritmos de seguridad, ¿cuál es la diferencia fundamental entre el cifrado y el hashing?"

explicacion: |
  El cifrado está diseñado para ser revertido (descifrado) mediante una clave, mientras que el hashing es una función unidireccional que no permite recuperar el dato original.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red_firewall"
  nivel: "basico"
  tags: ["firewall", "seguridad", "redes"]

variables:
  puerto_bloqueado: uno_de([21, 22, 23, 80])

enunciado: "Un administrador de red configura un firewall para proteger un servidor web. Si el puerto {puerto_bloqueado} está en la lista de reglas de 'Denegar' (Deny), ¿qué acción tomará el firewall ante un paquete que intenta entrar por ese puerto?"

opciones_explicitas:
  - "Permitir el tráfico"
  - "Bloquear el tráfico"
  - "Redirigir el tráfico"

respuesta: "Bloquear el tráfico"
tipo: mc

explicacion: |
  El firewall actúa como un filtro basado en reglas. Si una regla de 'Denegar' coincide con el puerto de origen/destino, el paquete es descartado o bloqueado para proteger el sistema.
```

```
metadata:
  materia: "informatica"
  tema: "vpn_cifrado"
  nivel: "intermedio"
  tags: ["vpn", "cifrado", "tunel"]

enunciado: "Para establecer un túnel seguro en una VPN, se utiliza comúnmente el protocolo IPsec. ¿Es este protocolo un estándar utilizado para asegurar la comunicación en una VPN?"

respuesta: verdadero
tipo: vf
explicacion: |
  IPsec (Internet Protocol Security) es un conjunto de protocolos para asegurar las comunicaciones IP mediante la autenticación y el cifrado de cada paquete en una comunicación IP.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red_handshake"
  nivel: "avanzado"
  tags: ["handshake", "protocolo", "seguridad"]

enunciado: "En un proceso de negociación de seguridad (como el handshake de TLS), el orden correcto de las fases es el siguiente:"

opciones_explicitas:
  - "Negociación de parámetros"
  - "Intercambio de claves"
  - "Verificación de certificados"
  - "Cifrado de datos"

respuesta_orden: ["Negociación de parámetros", "Intercambio de claves", "Verificación de certificados", "Cifrado de datos"]
tipo: ordenar

explicacion: |
  Primero se acuerdan los algoritmos (negociación), luego se intercambian las claves para el cifrado, se validan las identidades mediante certificados y finalmente se establece el canal cifrado para los datos.
```

```
metadata:
  materia: "informatica"
  tema: "cifrado_datos_en_transito"
  nivel: "basico"
  tags: ["protocolos", "cifrado", "web"]

enunciado: "Un usuario navega por una web. Si el usuario desea que sus datos (como contraseñas) viajen cifrados en tránsito, el protocolo utilizado debe ser ___."

respuestas_validas:
  - "HTTPS"

respuesta: "HTTPS"
tipo: completar

explicacion: |
  HTTPS utiliza TLS/SSL para cifrar la comunicación entre el cliente y el servidor, garantizando la confidencialidad e integridad de los datos en tránsito.
```

```
metadata:
  materia: "informatica"
  tema: "integridad_datos"
  nivel: "intermedio"
  tags: ["hash", "integridad", "seguridad"]

variables:
  hash_original: "a1b2c3d4"
  hash_recibido: "a1b2c3d4"

enunciado: "Se envía un archivo con un valor Hash original de {hash_original}. Al recibirlo, el receptor calcula el Hash del archivo y obtiene {hash_recibido}. ¿El mensaje ha sido alterado en el camino?"

opciones_explicitas:
  - "Sí, el hash cambió"
  - "No, el hash es idéntico"

respuesta: "No, el hash es idéntico"
tipo: mc

explicacion: |
  La función Hash es determinista. Si el mensaje no ha sido alterado (ni un solo bit), el valor del Hash calculado por el receptor debe ser exactamente igual al enviado por el emisor.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red"
  nivel: "basico"
  tags: ["firewall", "seguridad"]

tipo: mc
opciones_explicitas: ["Filtrar tráfico de red según reglas", "Eliminar archivos infectados del disco", "Cifrar el contenido de los correos", "Gestionar las contraseñas de usuario"]

enunciado: "Un error común es pensar que un firewall sustituye al antivirus. La función principal de un firewall es ___."

respuesta: "Filtrar tráfico de red según reglas"

explicacion: |
  El firewall actúa como una barrera que controla el flujo de datos (paquetes) que entran o salen de una red basándose en reglas, mientras que el antivirus busca código malicioso en archivos o procesos del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "vpn_cifrado"
  nivel: "intermedio"
  tags: ["vpn", "privacidad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Navegar en una red Wi-Fi pública de una cafetería", "proteger la privacidad de la conexión"], ["Aumentar la velocidad de descarga de Internet", "proteger la privacidad de la conexión"]]

tipo: mc
opciones_explicitas: ["Aumentar la velocidad de descarga de Internet", "proteger la privacidad de la conexión", "Eliminar la necesidad de usar contraseñas", "Evitar que el hardware se sobrecaliente"]

enunciado: "Un usuario piensa que usar una VPN sirve para {escenarios[escenario_idx][0]}. Sin embargo, el objetivo principal es {escenarios[escenario_idx][1]}."

respuesta: "proteger la privacidad de la conexión"

explicacion: |
  Una VPN crea un túnel cifrado para tus datos, pero no mejora la velocidad de tu proveedor de internet; de hecho, debido al proceso de cifrado, puede aumentar ligeramente la latencia.
```

```
metadata:
  materia: "informatica"
  tema: "cifrado_datos"
  nivel: "intermedio"
  tags: ["cifrado", "seguridad_datos"]

tipo: vf

enunciado: "Si un archivo está cifrado en el disco duro de un servidor (en reposo), esto garantiza automáticamente que el archivo no pueda ser interceptado mientras se envía por una red sin protección (en tránsito)."

respuesta: falso

explicacion: |
  El cifrado en reposo protege los datos si el soporte físico es robado. El cifrado en tránsito (como TLS/SSL) es necesario para proteger los datos mientras viajan por la red.
```

```
metadata:
  materia: "informatica"
  tema: "protocolos_seguridad"
  nivel: "basico"
  tags: ["http", "https", "seguridad"]

tipo: completar
respuestas_validas:
  - "HTTPS"

enunciado: "Para asegurar que la comunicación entre un navegador y un servidor web esté cifrada, se debe utilizar el protocolo ___ en lugar de HTTP."

respuesta: "HTTPS"

explicacion: |
  HTTPS utiliza protocolos de cifrado (como TLS) para asegurar que la información enviada entre el cliente y el servidor no pueda ser leída por terceros.
```

```
metadata:
  materia: "informatica"
  tema: "vpn_handshake"
  nivel: "avanzado"
  tags: ["vpn", "seguridad", "proceso"]

tipo: ordenar
opciones_explicitas: ["Establecer túnel de comunicación", "Autenticar al usuario", "Negociar algoritmos de cifrado", "Intercambiar claves de cifrado"]

enunciado: "Para establecer una conexión VPN segura, los pasos lógicos suelen seguir este orden de negociación y autenticación:"

respuesta_orden: ["Negociar algoritmos de cifrado", "Intercambiar claves de cifrado", "Autenticar al usuario", "Establecer túnel de comunicación"]

explicacion: |
  Primero el cliente y el servidor acuerdan qué algoritmos usarán, luego intercambian las llaves necesarias, después el servidor verifica la identidad del usuario y, finalmente, se establece el túnel de datos.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red_firewall_vpn_cifrado"
  nivel: "basico"
  tags: ["firewall", "seguridad"]

tipo: mc
opciones_explicitas: ["El firewall analiza el tráfico de red y puertos, mientras que el antivirus analiza archivos y procesos en el host.", "El firewall detecta virus en archivos descargados, mientras que el antivirus bloquea conexiones no autorizadas.", "Son conceptos idénticos aplicados a diferentes capas del sistema operativo.", "El firewall cifra los datos y el antivirus los descifra."]

enunciado: "En una estrategia de defensa en profundidad, ¿cuál es la distinción fundamental entre un firewall y un antivirus?"

respuesta: "El firewall analiza el tráfico de red y puertos, mientras que el antivirus analiza archivos y procesos en el host."

explicacion: |
  El firewall actúa como una barrera en el perímetro de la red o el sistema, controlando el flujo de datos basado en reglas de puertos y protocolos. El antivirus se enfoca en identificar y eliminar software malicioso (malware) dentro del sistema de archivos o la memoria.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red_firewall_vpn_cifrado"
  nivel: "intermedio"
  tags: ["cifrado", "seguridad_datos"]

tipo: completar
respuestas_validas:
  - "confidencialidad"
  - "integridad"
  - "disponibilidad"

enunciado: "Mientras que un mecanismo de checksum asegura la ___ de los datos, el cifrado de datos en tránsito tiene como objetivo principal garantizar la ___."

explicacion: |
  El checksum o hash detecta si los datos han sido alterados (integridad), pero el cifrado asegura que, aunque sean interceptados, no puedan ser leídos por terceros (confidencialidad).
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red_firewall_vpn_cifrado"
  nivel: "avanzado"
  tags: ["vpn", "cifrado"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["VPN de Acceso Remoto", "crea un túnel virtual sobre una red pública"], ["Cifrado de extremo a extremo (E2EE)", "asegura que solo los nodos finales puedan leer el mensaje"]]

tipo: mc
opciones_explicitas: ["La VPN cifra todo el tráfico de la interfaz de red, mientras que el cifrado E2EE solo cifra la aplicación específica.", "La VPN es un protocolo de capa 2 y el cifrado E2EE es de capa 7.", "La VPN requiere un servidor central y el cifrado E2EE no requiere infraestructura.", "No hay diferencia, ambos términos son sinónimos en redes modernas."]

enunciado: "Considerando el escenario de {escenarios[escenario_idx][0]}, ¿cuál es la diferencia clave respecto al {escenarios[1 - escenario_idx][0]}?"

respuesta: "La VPN cifra todo el tráfico de la interfaz de red, mientras que el cifrado E2EE solo cifra la aplicación específica."

explicacion: |
  Una VPN establece un túnel que encapsula todo el tráfico de un dispositivo a través de una red (como Internet), mientras que el cifrado E2EE (End-to-End) se asegura de que el contenido sea ilegible para cualquier intermediario, incluso para el proveedor del servicio, centrándose en la aplicación.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red_firewall_vpn_cifrado"
  nivel: "intermedio"
  tags: ["waf", "firewall"]

tipo: vf

enunciado: "Un Firewall de Aplicaciones Web (WAF) se distingue de un firewall de red tradicional porque opera principalmente en la capa de aplicación (Capa 7) del modelo OSI, permitiendo inspeccionar contenido HTTP/HTTPS, a diferencia del firewall de red que se centra en capas inferiores como IP y TCP."

respuesta: verdadero

explicacion: |
  Es correcto. El firewall de red tradicional filtra por IP y puerto, mientras que el WAF inspecciona el contenido de las peticiones web para prevenir ataques como SQL Injection o Cross-Site Scripting (XSS).
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red_firewall_vpn_cifrado"
  nivel: "intermedio"
  tags: ["handshake", "seguridad"]

tipo: ordenar
opciones_explicitas: ["Negociación de parámetros de cifrado", "Intercambio de claves públicas/privadas", "Autenticación de las partes", "Establecimiento del canal de datos cifrado"]
respuesta_orden: ["Negociación de parámetros de cifrado", "Intercambio de claves públicas/privadas", "Autenticación de las partes", "Establecimiento del canal de datos cifrado"]

enunciado: "Ordene los pasos lógicos de un protocolo de negociación de seguridad (como TLS) para establecer una conexión segura:"

explicacion: |
  Primero se acuerda qué algoritmos usar (Cipher Suite), luego se intercambian las claves para el cifrado asimétrico, se verifica la identidad de los participantes y, finalmente, se empieza a transmitir la información protegida.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red_firewall"
  nivel: "basico"
  tags: ["firewall", "redes"]

variables:
  datos: [["bloquear tráfico no deseado", "bloquear"], ["permitir todo el tráfico", "permitir"], ["analizar virus", "analizar"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["bloquear", "permitir", "analizar"]

enunciado: "Un firewall actúa como una barrera de seguridad cuya función principal es {datos[idx][0]}."

explicacion: |
  El firewall inspecciona los paquetes de red y decide si permitirlos o bloquearlos basándose en un conjunto de reglas de seguridad predefinidas.
```

```
metadata:
  materia: "informatica"
  tema: "cifrado_datos_transito"
  nivel: "intermedio"
  tags: ["cifrado", "seguridad"]

variables:
  datos: [["HTTPS", "seguro"], ["HTTP", "inseguro"]]
  idx: uno_de([0,1])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
enunciado: "Si un usuario navega utilizando el protocolo {datos[idx][0]}, la información que transita por la red se considera {datos[idx][1]}."

explicacion: |
  El protocolo HTTPS utiliza TLS/SSL para cifrar la comunicación, protegiendo los datos contra la interceptación (sniffing). El protocolo HTTP envía los datos en texto plano.
```

```
metadata:
  materia: "informatica"
  tema: "vpn_conceptos"
  nivel: "intermedio"
  tags: ["vpn", "tunel"]

respuesta: "túnel"
tipo: completar
respuestas_validas:
  - "túnel"

enunciado: "Una VPN (Virtual Private Network) crea un ___ cifrado sobre una red pública para permitir el transporte seguro de datos."

explicacion: |
  La VPN establece un 'túnel' lógico que encapsula y cifra los paquetes de datos, permitiendo que la información viaje de forma privada a través de internet.
```

```
metadata:
  materia: "informatica"
  tema: "handshake_tls"
  nivel: "avanzado"
  tags: ["tls", "handshake", "seguridad"]

respuesta_orden: ["Negociación de versión", "Intercambio de certificados", "Intercambio de claves", "Cifrado de datos"]
tipo: ordenar
opciones_explicitas: ["Negociación de versión", "Intercambio de certificados", "Intercambio de claves", "Cifrado de datos"]

enunciado: "Ordene los pasos lógicos de un apretón de manos (handshake) TLS para establecer una conexión segura:"

explicacion: |
  Primero se acuerda la versión del protocolo, luego se verifica la identidad mediante certificados, se intercambian claves para la sesión y finalmente se inicia el flujo de datos cifrados.
```

```
metadata:
  materia: "informatica"
  tema: "cifrado_simetrico"
  nivel: "avanzado"
  tags: ["cifrado", "simetrico", "clave"]

variables:
  datos: [["una sola clave para cifrar y descifrar", "simétrico"], ["dos claves distintas", "asimétrico"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["simétrico", "asimétrico"]

enunciado: "Si el sistema utiliza {datos[idx][0]}, estamos ante un algoritmo de cifrado {datos[idx][1]}."

explicacion: |
  En el cifrado simétrico se utiliza la misma clave para las operaciones de cifrado y descifrado. En el asimétrico se utiliza un par de claves (pública y privada).
```

## Sección: transacciones-acid (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "basico"
  tags: ["bases_de_datos", "conceptos"]

respuesta: "unidad_de_trabajo"
tipo: completar
respuestas_validas:
  - "unidad_de_trabajo"
  - "unidad de trabajo"

enunciado: "En el contexto de bases de datos, una transacción se define como una ___ lógica que realiza una serie de operaciones."

explicacion: |
  Una transacción es una unidad de trabajo lógica que contiene una serie de operaciones de base de datos que deben ejecutarse de forma atómica.
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "basico"
  tags: ["acid", "atomicidad"]

opciones_explicitas: ["Todo o nada", "Aislamiento total", "Persistencia inmediata", "Integridad de datos"]
respuesta: "Todo o nada"
tipo: mc

enunciado: "La propiedad de Atomicidad de una transacción garantiza que:"

explicacion: |
  La atomicidad asegura que todas las operaciones de la transacción se realicen con éxito o que ninguna de ellas se aplique (efecto "todo o nada").
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "basico"
  tags: ["acid", "durabilidad"]

respuesta: verdadero
tipo: vf

enunciado: "¿La propiedad de Durabilidad garantiza que, una vez confirmada (committed) una transacción, sus cambios permanezcan incluso ante un fallo del sistema?"

explicacion: |
  Correcto. La durabilidad asegura que los cambios realizados por una transacción completada son permanentes y no se perderán ante fallos de energía o caídas del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["acid", "orden"]

opciones_explicitas: ["Atomicidad", "Consistencia", "Aislamiento", "Durabilidad"]
respuesta_orden: ["Atomicidad", "Consistencia", "Aislamiento", "Durabilidad"]
tipo: ordenar

enunciado: "Ordena las siglas del acrónimo ACID según su significado correcto de izquierda a derecha:"

explicacion: |
  El acrónimo ACID se refiere a: Atomicidad, Consistencia, Aislamiento (Isolation) y Durabilidad.
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["acid", "aislamiento"]

variables:
  escenario: uno_de([["Transacción A modifica un dato y la Transacción B lo lee antes de que A termine", "Interferencia"], ["Transacción A completa sus cambios y la Transacción B ve el estado final", "Aislamiento"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Interferencia", "Aislamiento"]

enunciado: "En un sistema con control de concurrencia ocurre lo siguiente: {escenario[0]}. ¿Qué término describe mejor esta situación?"

explicacion: |
  El aislamiento (Isolation) asegura que las transacciones se ejecuten de manera que parezca que se están ejecutando de forma secuencial, evitando que una vea estados intermedios de otra.
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["bases_de_datos", "acid", "atomicidad"]

variables:
  saldo_inicial: 1000
  transferencia: 200
  propiedad: "atomicidad"

enunciado: "Se realiza una transferencia de {transferencia} desde la cuenta A al cliente B. Si el sistema falla justo después de descontar el dinero de A, pero antes de sumarlo a B, la propiedad ACID que garantiza que la operación se anule por completo para evitar la pérdida de dinero es la {propiedad}."

opciones_explicitas:
  - "Atomicidad"
  - "Consistencia"
  - "Aislamiento"
  - "Durabilidad"

respuesta: "Atomicidad"
tipo: mc

explicacion: |
  La atomicidad asegura que la transacción se trate como una unidad indivisible: o se ejecutan todos los pasos (descuento y suma) o no se ejecuta ninguno. Si hay un error, se realiza un 'rollback' para volver al estado inicial.
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["bases_de_datos", "acid", "consistencia"]

variables:
  regla_negocio: "saldo >= 0"

enunciado: "Si una base de datos tiene una restricción que impide que una cuenta tenga un saldo negativo, y una transacción intenta realizar un retiro que dejaría la cuenta en -50, la propiedad que asegura que la base de datos pase de un estado válido a otro estado válido, rechazando la operación inválida, es la _________."

respuestas_validas:
  - "Consistencia"

respuesta: "Consistencia"
tipo: completar

explicacion: |
  La consistencia garantiza que cualquier transacción que lleve la base de datos de un estado válido a otro, respetando todas las reglas y restricciones (constraints) definidas.
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "avanzado"
  tags: ["bases_de_datos", "acid", "aislamiento"]

enunciado: "En un entorno de alta concurrencia, si la Transacción 1 modifica un dato pero no hace commit, y la Transacción 2 puede leer ese dato modificado antes de que la Transacción 1 decida si confirma o cancela, estamos ante un problema de _________."

opciones_explicitas:
  - "Lectura sucia"
  - "Lectura repetible"
  - "Lectura fantasma"

respuesta: "Lectura sucia"
tipo: mc

explicacion: |
  La propiedad de Aislamiento (Isolation) busca evitar que los cambios intermedios de una transacción sean visibles para otras transacciones hasta que la primera haya finalizado. El fenómeno descrito es la 'Dirty Read'.
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "basico"
  tags: ["bases_de_datos", "acid", "durabilidad"]

enunciado: "Una vez que una transacción ha sido confirmada (committed) con éxito, sus cambios deben permanecer en la base de datos incluso si el sistema sufre un corte de energía inmediato. ¿Es esto cierto? _________"

respuestas_validas:
  - "verdadero"

respuesta: "verdadero"
tipo: completar
explicacion: |
  La Durabilidad garantiza que una vez que el usuario recibe la confirmación de que la transacción fue exitosa, los datos han sido escritos en medios no volátiles (disco/SSD) y no se perderán.
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["bases_de_datos", "acid", "flujo"]

enunciado: "Ordena los pasos lógicos que sigue el motor de base de datos para asegurar una transacción exitosa bajo el modelo ACID:"

opciones_explicitas:
  - "Inicio de la transacción"
  - "Ejecución de operaciones de lectura/escritura"
  - "Validación de reglas de integridad"
  - "Confirmación (Commit) o Reversión (Rollback)"

respuesta_orden: ["Inicio de la transacción", "Ejecución de operaciones de lectura/escritura", "Validación de reglas de integridad", "Confirmación (Commit) o Reversión (Rollback)"]
tipo: ordenar

explicacion: |
  El flujo comienza abriendo la transacción, se realizan las operaciones, el motor verifica que no se violen reglas (consistencia) y finalmente se decide si se hace commit para hacer los cambios permanentes o rollback para deshacer todo.
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["acid", "atomicidad", "errores_comunes"]

respuesta: "Atomicidad"
tipo: completar
respuestas_validas:
  - "Atomicidad"
  - "atomicidad"
enunciado: "Si una transacción de transferencia bancaria falla justo después de descontar dinero de la cuenta A, pero antes de sumarlo a la cuenta B, la propiedad de ___ garantiza que el sistema vuelva al estado original como si nada hubiera ocurrido."

explicacion: |
  La atomicidad asegura que la transacción se trate como una unidad indivisible: o se realizan todos los pasos o ninguno. Si un paso falla, se realiza un rollback para mantener la integridad.
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "avanzado"
  tags: ["acid", "aislamiento", "consistencia"]

opciones_explicitas: ["Aislamiento", "Consistencia", "Atomicidad", "Durabilidad"]

respuesta: "Aislamiento"
tipo: mc

enunciado: "Un desarrollador nota que, aunque las transacciones individuales son correctas, una transacción que lee datos intermedios de otra transacción en curso está obteniendo resultados inconsistentes. ¿Qué propiedad ACID está siendo vulnerada o mal gestionada en este escenario de concurrencia?"

explicacion: |
  El aislamiento (Isolation) asegura que las transacciones concurrentes no interfieran entre sí, haciendo que parezca que se ejecutan de forma secuencial. Si una transacción ve estados parciales de otra, hay un problema de aislamiento.
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "basico"
  tags: ["acid", "durabilidad"]

respuesta: verdadero
tipo: vf
enunciado: "Si una base de datos confirma (commit) una transacción y, un milisegundo después, el servidor sufre un corte de energía total, la propiedad de Durabilidad garantiza que los cambios realizados por esa transacción no se perderán al reiniciar el sistema. ¿Es esto correcto?"

explicacion: |
  La durabilidad asegura que una vez que el usuario recibe la confirmación de éxito, los datos han sido escritos en soporte no volátil (disco) y persistirán ante fallos de energía.
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["acid", "flujo_transaccion"]

opciones_explicitas: ["Inicio", "Ejecución de operaciones", "Commit/Rollback", "Finalización"]

respuesta_orden: ["Inicio", "Ejecución de operaciones", "Commit/Rollback", "Finalización"]
tipo: ordenar

enunciado: "Ordena cronológicamente las etapas lógicas de una transacción de base de datos para asegurar el cumplimiento de las propiedades ACID:"

explicacion: |
  Una transacción debe comenzar, ejecutar sus instrucciones, decidir si confirma los cambios (Commit) o deshace todo (Rollback) y finalmente concluir el proceso.
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["acid", "consistencia"]

respuestas_validas:
  - "consistencia"
respuesta: "consistencia"
tipo: completar

enunciado: "Cuando una transacción deja la base de datos en un estado que viola una restricción de integridad (como un saldo negativo en una columna que no lo permite), se ha violado la propiedad de ___________."

explicacion: |
  La consistencia asegura que la base de datos pase de un estado válido a otro estado válido, respetando todas las reglas, restricciones y disparadores (triggers) definidos.
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "basico"
  tags: ["acid", "atomicidad"]

respuesta: "todo o nada"
tipo: completar
respuestas_validas:
  - "todo o nada"

enunciado: "A diferencia de un proceso secuencial simple, la propiedad de atomicidad garantiza que una transacción se ejecute como una unidad indivisible, es decir, que el resultado sea ___."
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["acid", "aislamiento"]

respuesta: "aislamiento"
tipo: mc
opciones_explicitas: ["consistencia", "aislamiento", "durabilidad", "atomicidad"]

enunciado: "Si un sistema permite que una transacción vea cambios parciales (no confirmados) de otra transacción en curso, ¿qué propiedad ACID está fallando en garantizarse?"
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["acid", "consistencia"]

respuesta: verdadero
tipo: vf

enunciado: "La propiedad de consistencia se asegura de que la base de datos pase de un estado válido a otro estado válido, cumpliendo todas las reglas de integridad definidas (como claves foráneas o restricciones de unicidad)."
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "basico"
  tags: ["acid", "durabilidad"]

respuesta: "se mantienen los cambios"
tipo: mc
opciones_explicitas: ["se pierden los datos", "se mantienen los cambios", "el sistema se bloquea", "se revierte todo"]

enunciado: "La durabilidad garantiza que, una vez que la transacción ha sido confirmada (commit), si ocurre un fallo del sistema inmediatamente después, ___."
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["acid", "flujo"]

respuesta_orden: ["inicio", "ejecución", "commit", "finalización"]
tipo: ordenar
opciones_explicitas: ["inicio", "ejecución", "commit", "finalización"]

enunciado: "Ordena las etapas lógicas de una transacción que cumple con las propiedades ACID desde que se solicita hasta que se asegura su persistencia:"

pasos:
  - "Se abre la sesión de trabajo."
  - "Se realizan las operaciones de lectura y escritura."
  - "Se confirman los cambios de forma permanente."
  - "Se cierra la sesión de trabajo."

explicacion: |
  El flujo correcto es: Inicio (inicio de la unidad), Ejecución (operaciones), Commit (persistencia/durabilidad) y Finalización (cierre).
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "basico"
  tags: ["acid", "atomicidad"]

variables:
  datos: [["Transferencia de $100: se descuenta de cuenta A pero el sistema falla antes de sumar en cuenta B", "atomicidad"], ["Cálculo de intereses: el saldo final no coincide con la suma de movimientos", "consistencia"], ["Consulta masiva: un reporte lee datos que están siendo modificados por otro usuario", "aislamiento"], ["Falla de luz: el registro de la operación se perdió tras el reinicio", "durabilidad"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["atomicidad", "consistencia", "aislamiento", "durabilidad"]

enunciado: "En una transferencia bancaria, si el sistema falla tras restar dinero de una cuenta pero antes de sumarlo en la otra, y la operación no se deshace por completo, ¿qué propiedad ACID se ha vulnerado?"

explicacion: |
  La atomicidad garantiza que una transacción se ejecute íntegramente o no se ejecute en absoluto ("todo o nada"). Si la operación queda a medias, se rompe la atomicidad.
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["acid", "consistencia"]

variables:
  textos: ["Un usuario intenta borrar un cliente que tiene facturas activas y el sistema lo impide para mantener la integridad", "El sistema permite que el saldo de una cuenta sea negativo a pesar de que la regla de negocio dice que no puede"]
  valores: [verdadero, falso]
  idx: uno_de([0, 1])

respuesta: valores[idx]
tipo: vf
enunciado: "Analiza el siguiente escenario: {textos[idx]}. ¿Se ha mantenido la propiedad de consistencia?"

explicacion: |
  La consistencia asegura que una transacción solo lleve a la base de datos de un estado válido a otro estado válido, respetando todas las reglas y restricciones definidas.
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["acid", "aislamiento"]

respuesta: "aislamiento"
tipo: mc
opciones_explicitas: ["atomicidad", "consistencia", "aislamiento", "durabilidad"]

enunciado: "Si dos transacciones se ejecutan simultáneamente y una de ellas ve datos parciales o inconsistentes de la otra, ¿qué propiedad se está viendo afectada?"

explicacion: |
  El aislamiento garantiza que las transacciones concurrentes no interfieran entre sí, haciendo que parezca que se ejecutan de forma secuencial.
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "basico"
  tags: ["acid", "durabilidad"]

respuesta: "durabilidad"
tipo: completar
respuestas_validas:
  - "durabilidad"

enunciado: "Cuando una transacción ha sido confirmada con éxito, el sistema garantiza que sus cambios persistirán incluso ante un fallo del sistema. Esta propiedad se llama ___."

explicacion: |
  La durabilidad asegura que una vez que el usuario recibe la confirmación de que la transacción fue exitosa, los cambios son permanentes y no se perderán ante fallos eléctricos o caídas del software.
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["transacciones", "flujo"]

tipo: ordenar
opciones_explicitas: ["Inicio de transacción", "Ejecución de comandos", "COMMIT", "Aplicación permanente de los cambios"]
respuesta_orden: ["Inicio de transacción", "Ejecución de comandos", "COMMIT", "Aplicación permanente de los cambios"]

enunciado: "Ordena los pasos lógicos de una transacción que termina con éxito:"

explicacion: |
  En un escenario de éxito, la secuencia es: Inicio -> Ejecución de comandos -> COMMIT (confirmación) -> El sistema aplica permanentemente los cambios.
```

## Sección: seguridad-informatica (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "basico"
  tags: ["phishing", "amenazas"]

tipo: mc
opciones_explicitas: ["Un software diseñado para dañar el hardware", "Una técnica de engaño para obtener datos sensibles", "Un método para acelerar la conexión a internet", "Un tipo de antivirus de última generación"]

respuesta: "Una técnica de engaño para obtener datos sensibles"

enunciado: "El phishing es una técnica de ingeniería social que consiste en ___ para obtener información confidencial como contraseñas o datos bancarios."

explicacion: |
  El phishing busca engañar al usuario mediante correos o sitios web falsos que suplantan la identidad de entidades legítimas.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "basico"
  tags: ["malware", "conceptos"]

tipo: vf

respuesta: falso

enunciado: "El término 'malware' se refiere exclusivamente a los virus que eliminan archivos del disco duro de forma inmediata."

explicacion: |
  Falso. Malware es un término genérico que incluye virus, troyanos, ransomware, spyware y muchos otros tipos de software malicioso con diferentes objetivos.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "intermedio"
  tags: ["ransomware", "amenazas"]

tipo: completar
respuestas_validas:
  - "secuestro"

respuesta: "secuestro"

enunciado: "El ransomware es un tipo de malware que realiza un cifrado de los archivos del usuario para luego exigir un pago a cambio de la clave de descifrado. Esto se conoce como un ___ digital."

explicacion: |
  El ransomware bloquea el acceso a tus datos (usualmente mediante cifrado) para extorsionar a la víctima.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "basico"
  tags: ["buenas_practicas", "reaccion"]

tipo: ordenar
opciones_explicitas: ["Desconfiar de correos con enlaces sospechosos", "No hacer clic en ningún enlace ni descargar archivos", "Reportar el correo al departamento de seguridad", "Cambiar las contraseñas de las cuentas afectadas"]

respuesta_orden: ["Desconfiar de correos con enlaces sospechosos", "No hacer clic en ningún enlace ni descargar archivos", "Reportar el correo al departamento de seguridad", "Cambiar las contraseñas de las cuentas afectadas"]

enunciado: "Ordena los pasos lógicos que debe seguir un usuario al detectar un posible intento de phishing:"

explicacion: |
  Primero se identifica la sospecha, luego se evita la interacción con el elemento malicioso, se notifica a los expertos y finalmente se asegura la cuenta.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "basico"
  tags: ["buenas_practicas", "contraseñas"]

tipo: mc
opciones_explicitas: ["Usar la misma contraseña para todo", "Usar contraseñas largas con caracteres especiales y MFA", "Compartir la contraseña con familiares para facilitar el acceso", "Anotar las contraseñas en un papel pegado al monitor"]

respuesta: "Usar contraseñas largas con caracteres especiales y MFA"

enunciado: "Para fortalecer la seguridad de las cuentas personales, la mejor práctica es:"

explicacion: |
  El uso de contraseñas robustas combinadas con la Autenticación de Doble Factor (MFA) añade una capa crítica de protección.
```

```
metadata:
  materia: "informatica"
  tema: "phishing"
  nivel: "basico"
  tags: ["seguridad", "phishing", "ingenieria_social"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [["Recibes un correo de tu banco diciendo que tu cuenta ha sido bloqueada y debes hacer clic en un enlace para 'verificar' tus datos.", "phishing"], ["Recibes un mensaje de un amigo por redes sociales con un enlace extraño que dice ser un video gracioso, pero el remitente no es él.", "phishing"]]

respuesta: escenarios[caso_idx][1]
tipo: mc
opciones_explicitas: ["malware", "phishing", "ransomware", "spyware"]

enunciado: "Un usuario recibe un mensaje urgente de una entidad conocida solicitando información sensible a través de un enlace sospechoso. ¿A qué tipo de amenaza estamos ante?"

explicacion: |
  El caso descrito es un ejemplo de phishing, una técnica de ingeniería social donde el atacante se hace pasar por una entidad de confianza para engañar a la víctima y obtener datos confidenciales.
```

```
metadata:
  materia: "informatica"
  tema: "malware"
  nivel: "basico"
  tags: ["malware", "virus", "seguridad"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es cierto que un 'Ransomware' es un tipo de malware que cifra los archivos del usuario y exige un pago para recuperarlos?"

explicacion: |
  Correcto. El ransomware es una amenaza que secuestra la información mediante cifrado, exigiendo un rescate (generalmente en criptomonedas) para desbloquearla.
```

```
metadata:
  materia: "informatica"
  tema: "buenas_practicas"
  nivel: "intermedio"
  tags: ["seguridad", "protocolo", "reaccion"]

tipo: ordenar

opciones_explicitas: ["Detectar el comportamiento sospechoso en el sistema.", "Desconectar el equipo de la red (Wi-Fi o cable).", "Informar al responsable de seguridad o soporte técnico.", "Realizar un escaneo completo con el antivirus."]

respuesta_orden: ["Detectar el comportamiento sospechoso en el sistema.", "Desconectar el equipo de la red (Wi-Fi o cable).", "Informar al responsable de seguridad o soporte técnico.", "Realizar un escaneo completo con el antivirus."]

enunciado: "Si sospechas que tu computadora ha sido infectada, ordena los pasos lógicos para mitigar el impacto del incidente:"

explicacion: |
  Lo primero es la detección, seguido de la contención (desconectar la red para evitar la propagación), la comunicación del incidente y finalmente la limpieza/escaneo.
```

```
metadata:
  materia: "informatica"
  tema: "buenas_practicas"
  nivel: "basico"
  tags: ["contraseñas", "seguridad"]

respuesta: "complejo"
tipo: completar
respuestas_validas:
  - "complejo"

enunciado: "Para asegurar una cuenta, una contraseña debe ser ___ (que incluya mayúsculas, minúsculas, números y símbolos) en lugar de ser una palabra simple."

explicacion: |
  Las contraseñas complejas aumentan significativamente el tiempo y la dificultad que requiere un atacante para realizar un ataque de fuerza bruta.
```

```
metadata:
  materia: "informatica"
  tema: "malware"
  nivel: "basico"
  tags: ["malware", "spyware"]

respuesta: "espionaje"
tipo: mc
opciones_explicitas: ["espionaje", "destrucción", "publicidad", "minería"]

enunciado: "El principal objetivo de un 'Spyware' es el ___ de la actividad del usuario, como capturar pulsaciones de teclas (keylogging) o historial de navegación."

explicacion: |
  El spyware se caracteriza por su naturaleza sigilosa, diseñada para recopilar información sobre una persona o dispositivo sin su consentimiento.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "basico"
  tags: ["phishing", "ingenieria_social"]

tipo: mc
opciones_explicitas: ["Un correo de un banco pidiendo tu contraseña", "Un software que mejora la velocidad del PC", "Un mensaje de un amigo con un link de un video", "Un antivirus que detecta un virus"]
respuesta: "Un correo de un banco pidiendo tu contraseña"

enunciado: "El phishing es una técnica de ingeniería social que se basa en el engaño. Un ejemplo típico de este ataque es:"

explicacion: |
  El phishing busca engañar al usuario para que entregue información sensible (contraseñas, datos bancarios) suplantando la identidad de una entidad de confianza.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "intermedio"
  tags: ["malware", "ransomware"]

variables:
  es_secuestro: verdadero

tipo: vf

respuesta: verdadero

enunciado: "El Ransomware es un tipo de malware que cifra los archivos del usuario y exige un pago para recuperarlos. ¿Es esto verdadero o falso?"

explicacion: |
  Efectivamente, el ransomware 'secuestra' la información mediante cifrado y solicita un rescate, generalmente en criptomonedas.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "basico"
  tags: ["buenas_practicas", "protocolo"]

tipo: ordenar
opciones_explicitas: ["Recibir correo con link extraño", "No hacer clic en el enlace ni descargar archivos", "Borrar el correo o reportarlo como spam", "Notificar al equipo de soporte técnico"]

enunciado: "Ordena los pasos correctos que debes seguir cuando recibes un correo electrónico sospechoso que parece ser un intento de estafa:"

explicacion: |
  La regla de oro es la prevención: nunca interactuar con el contenido sospechoso y seguir los protocolos de reporte de la organización.
respuesta_orden: ["Recibir correo con link extraño", "No hacer clic en el enlace ni descargar archivos", "Borrar el correo o reportarlo como spam", "Notificar al equipo de soporte técnico"]
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "intermedio"
  tags: ["phishing", "url"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["google.com", "g00gle.com"], ["microsoft.com", "micros0ft.com"]]

tipo: completar
respuestas_validas:
  - "g00gle.com"
  - "micros0ft.com"

enunciado: "En un ataque de phishing, el atacante suele usar dominios visualmente similares al real (typosquatting). Si el sitio legítimo es {escenarios[escenario_idx][0]}, el atacante podría usar ___ para engañarte."

explicacion: |
  Los atacantes cambian caracteres (como un cero por una 'o') para que la URL parezca legítima a simple vista, pero el dominio es distinto.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "basico"
  tags: ["contraseñas", "buenas_practicas"]

tipo: mc
opciones_explicitas: ["123456", "MiNombre2024", "P@ssw0rd_2024!_Xy", "password"]
respuesta: "P@ssw0rd_2024!_Xy"

enunciado: "De la siguiente lista, ¿cuál es la opción que presenta una mayor resistencia ante un ataque de fuerza bruta debido a su complejidad?"

explicacion: |
  Una contraseña segura debe combinar mayúsculas, minúsculas, números, caracteres especiales y tener una longitud considerable para aumentar el tiempo necesario para descifrarla.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "basico"
  tags: ["malware", "phishing"]

enunciado: "Si un ataque de ingeniería social se realiza a través de un mensaje de texto (SMS) en lugar de un correo electrónico, el término técnico correcto para este tipo de phishing es smishing."

respuesta: "smishing"
tipo: completar
respuestas_validas:
  - "smishing"

explicacion: |
  El phishing es el término general, pero se diferencia según el canal: phishing (email), smishing (SMS) y vishing (voz/llamadas).
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "intermedio"
  tags: ["malware", "ransomware"]

opciones_explicitas: ["El ransomware cifra archivos para pedir un rescate, mientras que un virus se replica infectando otros archivos.", "Un virus siempre cifra archivos, mientras que el ransomware solo se propaga por redes.", "El ransomware es un tipo de virus que no requiere de un archivo anfitrión para ejecutarse."]

respuesta: "El ransomware cifra archivos para pedir un rescate, mientras que un virus se replica infectando otros archivos."
tipo: mc
enunciado: "¿Cuál es la distinción principal entre ransomware y virus?"

explicacion: |
  La distinción principal es el objetivo: el ransomware busca extorsión mediante el secuestro de datos (cifrado), mientras que un virus es un concepto de propagación que infecta archivos existentes.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "intermedio"
  tags: ["gestion_de_accesos"]

respuesta: verdadero
tipo: vf

enunciado: "La autenticación es el proceso de verificar la identidad de un usuario, mientras que la autorización es el proceso de determinar qué permisos tiene ese usuario sobre un recurso."

explicacion: |
  Es un error común confundirlos. Autenticación responde "¿Quién eres?", y la autorización responde "¿Qué puedes hacer?".
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "avanzado"
  tags: ["protocolos"]

opciones_explicitas: ["Detección", "Contención", "Erradicación", "Recuperación"]

respuesta_orden: ["Detección", "Contención", "Erradicación", "Recuperación"]
tipo: ordenar

enunciado: "Ordena las siguientes fases de la respuesta a un incidente de seguridad informática, desde la primera hasta la última:"

explicacion: |
  Ante un incidente, primero se debe detectar la anomalía, luego contener el daño para que no se propague, erradicar la causa raíz y finalmente recuperar los sistemas a su estado normal.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "intermedio"
  tags: ["malware", "gusano"]

enunciado: "A diferencia de un gusano (worm), que se propaga de forma autónoma a través de la red, un troyano requiere que el usuario ___ para infectar el sistema."

respuesta: "interacción del usuario"
tipo: completar
respuestas_validas:
  - "interacción del usuario"

explicacion: |
  El gusano es capaz de replicarse sin intervención humana aprovechando vulnerabilidades de red, mientras que el troyano se disfraza de software legítimo y depende de que el usuario lo ejecute.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "basico"
  tags: ["phishing", "seguridad"]

variables:
  datos: [["Recibiste un mail de tu banco pidiendo tu clave urgency", "phishing"], ["Un amigo te envía un link de un video que no abre", "posible_virus"], ["Un aviso de actualización de Windows en la barra de tareas", "sistema"]]
  idx: uno_de([0,1,2])

enunciado: "Analiza el siguiente caso: {datos[idx][0]}. ¿Qué tipo de amenaza o situación representa?"

opciones_explicitas: ["phishing", "posible_virus", "sistema"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  El caso {datos[idx][0]} se clasifica como {datos[idx][1]}. Recuerda nunca entregar credenciales por correo electrónico.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "basico"
  tags: ["malware", "virus"]

variables:
  datos: [["Un programa que se oculta y registra tus pulsaciones de teclado", "spyware"], ["Un programa que cifra tus archivos y pide dinero", "ransomware"], ["Un programa que se duplica y se propaga por la red", "virus"]]
  idx: uno_de([0,1,2])

enunciado: "Se detecta en el sistema: {datos[idx][0]}. ¿Cuál es el nombre de este malware?"

opciones_explicitas: ["spyware", "ransomware", "virus"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  El software descrito es {datos[idx][1]}. Es fundamental contar con un antivirus actualizado.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "basico"
  tags: ["buenas_practicas", "passwords"]

enunciado: "¿Es una buena práctica de seguridad utilizar la misma contraseña para todas tus cuentas personales para no olvidarlas?"

respuesta: falso
tipo: vf

explicacion: |
  Falso. Si un atacante obtiene una de tus contraseñas, tendrá acceso a todas tus cuentas. Se recomienda usar un gestor de contraseñas.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "intermedio"
  tags: ["reaccion", "incidente"]

enunciado: "Has detectado que tu computadora está actuando de forma errática y aparecen ventanas emergentes constantes. Ordena los pasos lógicos para mitigar el riesgo:"

opciones_explicitas: ["Desconectar el equipo de la red", "Realizar un escaneo con antivirus", "Cambiar contraseñas desde otro dispositivo seguro"]
respuesta_orden: ["Desconectar el equipo de la red", "Realizar un escaneo con antivirus", "Cambiar contraseñas desde otro dispositivo seguro"]
tipo: ordenar

explicacion: |
  Primero se aísla el equipo (desconectar red) para evitar la propagación, luego se limpia el sistema y finalmente se asegura la identidad desde un equipo limpio.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "basico"
  tags: ["phishing", "ingenieria_social"]

enunciado: "El uso de técnicas psicológicas para engañar a las personas y obtener información confidencial se conoce como ___."

respuestas_validas:
  - "ingeniería social"
respuesta: "ingeniería social"
tipo: completar

explicacion: |
  La técnica utilizada es la ingeniería social. El eslabón más débil en la seguridad suele ser el usuario debido a la manipulación psicológica.
```

## Sección: virtualizacion-maquina-virtual-contenedor (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["conceptos", "virtualizacion"]

respuesta: "hipervisor"
tipo: completar
respuestas_validas:
  - "hipervisor"
  - "hypervisor"

enunciado: "En la virtualización de hardware, el software encargado de gestionar los recursos físicos y permitir la ejecución de múltiples sistemas operativos sobre un mismo host se denomina ___."

explicacion: |
  El hipervisor (o Virtual Machine Monitor) es la capa de software que crea y ejecuta máquinas virtuales, abstrayendo el hardware físico para que cada VM crea tener control total sobre él.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["aislamiento", "kernel"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["maquina_virtual", "incluye un kernel propio"], ["contenedor", "comparte el kernel del host"]]

respuesta: datos[escenario_idx][0]
tipo: mc
opciones_explicitas: ["maquina_virtual", "contenedor"]

enunciado: "Un elemento fundamental que diferencia a los contenedores de las máquinas virtuales es que el {datos[escenario_idx][0]} {datos[escenario_idx][1]}."

explicacion: |
  Las máquinas virtuales son pesadas porque emulan hardware completo y cada una tiene su propio sistema operativo (kernel). Los contenedores son ligeros porque comparten el kernel del sistema operativo anfitrión.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["portabilidad", "contenedor"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es cierto que los contenedores ofrecen una mayor portabilidad y rapidez de inicio en comparación con las máquinas virtuales debido a su arquitectura ligera?"

explicacion: |
  Verdadero. Al no tener que arrancar un sistema operativo completo desde cero, los contenedores se inician en milisegundos y son mucho más fáciles de mover entre entornos.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["componentes", "vm"]

respuesta_orden: ["Hardware", "Hipervisor", "Sistema Operativo Invitado", "Aplicación"]
tipo: ordenar

opciones_explicitas: ["Hardware", "Hipervisor", "Sistema Operativo Invitado", "Aplicación"]

enunciado: "Ordene las capas de abstracción desde la base física hasta el nivel de usuario en una arquitectura de máquina virtual estándar:"

explicacion: |
  La jerarquía comienza en el hardware físico, sobre el cual actúa el hipervisor para crear la capa virtualizada, donde reside el SO invitado, permitiendo finalmente la ejecución de la aplicación.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["usos", "microservicios"]

respuesta: "microservicios"
tipo: mc
opciones_explicitas: ["microservicios", "emular hardware antiguo", "aislamiento total de kernel"]

enunciado: "Debido a su naturaleza ligera y eficiente, los contenedores son la tecnología preferida para implementar arquitecturas de ___."

explicacion: |
  Los microservicios se benefician de los contenedores porque permiten desplegar, escalar y destruir pequeñas unidades de software de forma extremadamente rápida y aislada.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["virtualizacion", "conceptos_base"]

enunciado: "En una de estas dos tecnologías, el aislamiento se logra mediante un hipervisor que emula hardware completo; en la otra (contenedor), el aislamiento se basa en el aislamiento de procesos del kernel del sistema operativo host. ¿Cuál es la que usa el hipervisor con hardware emulado?"

respuesta: "vm"
tipo: mc
opciones_explicitas: ["vm", "contenedor"]

explicacion: |
  Las Máquinas Virtuales (VM) incluyen un Sistema Operativo completo (Guest OS) sobre un hipervisor, lo que requiere más recursos. Los contenedores comparten el kernel del host, siendo mucho más ligeros.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["arquitectura", "stack_software"]

enunciado: "Considera el siguiente stack de software para un entorno de ejecución basado en contenedores. Ordena los componentes desde la base (hardware) hasta la aplicación:"

pasos:
  - "Identificar la base física."
  - "Ubicar el componente de gestión de recursos (Kernel o Hypervisor)."
  - "Ubicar el entorno de ejecución (Runtime/Library)."
  - "Ubicar la aplicación final."

tipo: ordenar
opciones_explicitas: ["Hardware", "Kernel del Host", "Motor de Contenedores", "Aplicación"]
respuesta_orden: ["Hardware", "Kernel del Host", "Motor de Contenedores", "Aplicación"]

explicacion: |
  En contenedores, el stack es más corto porque no hay un sistema operativo completo entre el kernel y el motor de contenedores.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["recursos", "performance"]

variables:
  tipos: ["contenedor", "máquina virtual"]
  valores: [verdadero, falso]
  idx: uno_de([0, 1])

enunciado: "Un desarrollador necesita desplegar 50 instancias de una micro-aplicación que solo tarda 10 segundos en arrancar. Si elige la opción {tipos[idx]}, el tiempo de arranque será significativamente menor debido a que no debe cargar un kernel completo por cada instancia."

respuesta: valores[idx]
tipo: vf

explicacion: |
  Los contenedores son ideales para microservicios y despliegues masivos debido a su velocidad de arranque y bajo consumo de memoria RAM.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["hipervisor", "vm"]

enunciado: "En una arquitectura de virtualización de tipo 1 (Bare Metal), el hipervisor se instala directamente sobre el hardware. Si el software de virtualización se instala sobre un sistema operativo ya existente (Tipo 2), ¿el hipervisor es el componente que gestiona directamente el hardware físico? (Responde verdadero o falso)."

respuesta: falso
tipo: vf

explicacion: |
  En la virtualización Tipo 2 (Hosted), el sistema operativo host es el que gestiona el hardware, y el hipervisor corre como una aplicación más sobre él.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "avanzado"
  tags: ["namespaces", "cgroups"]

enunciado: "Para lograr el aislamiento de procesos en un contenedor como Docker, el kernel de Linux utiliza dos mecanismos críticos: los namespaces para la visibilidad de recursos y los ___ para la limitación de recursos (CPU/RAM)."

respuesta: "cgroups"
tipo: completar
respuestas_validas:
  - "cgroups"

explicacion: |
  Los namespaces proporcionan aislamiento (lo que ves), mientras que los cgroups (Control Groups) proporcionan límites (cuánto puedes usar).
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["arquitectura", "kernel", "aislamiento"]

respuesta: "kernel"
tipo: completar
respuestas_validas:
  - "kernel"
  - "núcleo"

enunciado: "A diferencia de una máquina virtual que incluye un sistema operativo completo, un contenedor comparte el ___ del sistema operativo host para ejecutar sus procesos."

explicacion: |
  Los contenedores son más ligeros porque no emulan hardware ni cargan un kernel propio; simplemente aíslan procesos que corren directamente sobre el kernel del host.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["recursos", "overhead", "rendimiento"]

respuesta: "Contenedor"
tipo: mc
opciones_explicitas: ["Máquina Virtual", "Contenedor", "Hipervisor"]

enunciado: "Si el objetivo principal es maximizar la densidad de aplicaciones en un único servidor físico minimizando el uso de memoria y CPU, ¿qué tecnología es la más eficiente?"

explicacion: |
  Los contenedores tienen menos 'overhead' porque no necesitan ejecutar un sistema operativo invitado (Guest OS) completo para cada instancia, permitiendo ejecutar muchas más unidades en el mismo hardware.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["seguridad", "aislamiento"]

tipo: vf

respuesta: verdadero

enunciado: "En un entorno de contenedores, si un proceso logra un 'escape de contenedor' y compromete el kernel, todos los demás contenedores que comparten ese mismo kernel están en riesgo."

explicacion: "Si el kernel del host es comprometido mediante un escape de contenedor, el aislamiento que protege a los demás contenedores se rompe, poniendo en riesgo a todos los procesos y datos en el host."
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "avanzado"
  tags: ["boot", "secuencia", "arquitectura"]

respuesta_orden: ["Hardware", "Hipervisor", "Sistema Operativo Invitado", "Aplicación"]
tipo: ordenar
opciones_explicitas: ["Hardware", "Hipervisor", "Sistema Operativo Invitado", "Aplicación"]

enunciado: "Ordene los componentes según el orden de ejecución/capas en una arquitectura de Máquina Virtual clásica (desde la base física hacia la aplicación):"

explicacion: |
  En una VM, el hardware inicializa el hipervisor, el hipervisor carga el sistema operativo invitado, y finalmente el SO carga la aplicación. En un contenedor, el proceso es más directo hacia la aplicación.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["portabilidad", "dependencias"]

variables:
  caso: uno_de([["VM", "Contenedor"], ["Contenedor", "VM"]])

respuesta: caso[0]
tipo: mc
opciones_explicitas: ["VM", "Contenedor"]

enunciado: "Si necesito ejecutar una aplicación que requiere un kernel de Linux muy específico o una versión de sistema operativo distinta a la del host, ¿qué tecnología debo elegir para asegurar la compatibilidad total?"

explicacion: |
  Las Máquinas Virtuales emulan hardware y permiten instalar cualquier sistema operativo con su propio kernel, lo que las hace ideales para escenarios de máxima compatibilidad pero con mayor consumo de recursos.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["virtualizacion", "aislamiento"]

respuesta: "sistema operativo"
tipo: completar
respuestas_validas:
  - "sistema operativo"

enunciado: "A diferencia de un contenedor, que comparte el núcleo del host, una máquina virtual incluye un ___ completo para funcionar."

explicacion: |
  Las máquinas virtuales (VM) incluyen un sistema operativo completo (Guest OS), lo que requiere un hipervisor, mientras que los contenedores comparten el kernel del host, siendo mucho más ligeros.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["recursos", "rendimiento"]

variables:
  escenario: uno_de([["un contenedor", "más ligero y rápido"], ["una máquina virtual", "más pesado y lento"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["más ligero y rápido", "más pesado y lento"]

enunciado: "Considerando la arquitectura de virtualización, el uso de {escenario[0]} suele resultar {escenario[1]} en comparación con su contraparte."

explicacion: |
  Los contenedores son procesos aislados que comparten el kernel, por lo que no necesitan arrancar un sistema operativo completo, lo que los hace mucho más eficientes en el uso de CPU y RAM.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["abstraccion", "arquitectura"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que la virtualización a nivel de sistema operativo (contenedores) ofrece un aislamiento más fuerte que la virtualización a nivel de hardware (máquinas virtuales)?"

explicacion: |
  Falso. La virtualización de hardware (VM) ofrece un aislamiento superior porque cada VM tiene su propio kernel independiente, mientras que los contenedores comparten el mismo kernel del host, lo que representa un mayor riesgo de seguridad si el kernel es vulnerado.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["ciclo_de_vida", "velocidad"]

respuesta_orden: ["Contenedor", "Máquina Virtual"]
tipo: ordenar
opciones_explicitas: ["Contenedor", "Máquina Virtual"]

enunciado: "Ordene los siguientes elementos de mayor a menor velocidad de arranque (del más rápido al más lento):"

explicacion: |
  Los contenedores arrancan casi instantáneamente porque son simplemente procesos del sistema operativo. Las máquinas virtuales deben realizar un proceso de boot completo del sistema operativo invitado, lo que toma segundos o minutos.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "avanzado"
  tags: ["arquitectura", "microservicios"]

variables:
  casos: [["microservicios", "contenedores"], ["una aplicación monolítica que requiere un kernel de Linux específico en un host Windows", "una máquina virtual"]]
  idx: uno_de([0, 1])

respuesta: casos[idx][1]
tipo: mc
opciones_explicitas: ["contenedores", "una máquina virtual"]

enunciado: "Si el objetivo principal es desplegar {casos[idx][0]}, ¿qué tecnología es la más adecuada?"

explicacion: |
  Los contenedores son ideales para microservicios por su agilidad y escalabilidad. Las máquinas virtuales son necesarias cuando se requiere un aislamiento total del kernel o se necesita ejecutar un sistema operativo distinto al del host.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["contenedores", "docker", "microservicios"]

variables:
  escenario_idx: uno_de([0,1])
  datos: [["un microservicio ligero que necesita escalar rápido", "contenedor"], ["un sistema operativo completo con kernel propio", "maquina_virtual"]]

enunciado: "Si el objetivo principal es desplegar {datos[escenario_idx][0]} para maximizar la eficiencia de recursos, la tecnología más adecuada es un {datos[escenario_idx][1]}."

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["contenedor", "maquina_virtual"]

explicacion: |
  Los contenedores comparten el kernel del sistema operativo host, lo que los hace ideales para microservicios y escalado rápido, a diferencia de las máquinas virtuales que emulan hardware completo.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["kernel", "aislamiento"]

respuesta: falso
tipo: vf

enunciado: "Un contenedor de software incluye un kernel de sistema operativo completo e independiente para cada instancia ejecutada."

explicacion: |
  Falso. Los contenedores comparten el kernel del host, mientras que las máquinas virtuales sí ejecutan un kernel propio dentro de cada instancia.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["vm", "hipervisor"]

respuesta: "hipervisor"
tipo: completar
respuestas_validas:
  - "hipervisor"

enunciado: "En la arquitectura de una máquina virtual, el software encargado de gestionar y distribuir los recursos físicos a las distintas máquinas virtuales se denomina ___."

explicacion: |
  El hipervisor (o VMM) es la capa de software que permite la existencia de la virtualización al gestionar el hardware para múltiples sistemas operativos.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["proceso", "arranque"]

enunciado: "Ordena los componentes según el orden de capas (desde el hardware hacia el usuario) para una máquina virtual."

respuesta_orden: ["Host OS", "Hypervisor", "Guest OS"]
tipo: ordenar
opciones_explicitas: ["Host OS", "Hypervisor", "Guest OS"]

explicacion: |
  En una VM, el hipervisor se asienta sobre el hardware/host para dar servicio al Guest OS. En contenedores, el motor de contenedores gestiona las aplicaciones sobre el OS host.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["recursos", "almacenamiento"]

variables:
  comparativa: uno_de([["una máquina virtual", "pesada"], ["un contenedor", "ligera"]])

enunciado: "En términos de consumo de memoria y almacenamiento, {comparativa[0]} se considera generalmente una solución ___."

respuesta: comparativa[1]
tipo: mc
opciones_explicitas: ["ligera", "pesada"]

explicacion: |
  Los contenedores son ligeros porque no emulan hardware ni incluyen un kernel completo, mientras que las máquinas virtuales son pesadas debido a la duplicación de sistemas operativos.
```

