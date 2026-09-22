# Examen jefe — [PENDIENTE #826]

> Logro #826. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 9 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **213 preguntas totales** en 9/9 secciones.

---

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

## Sección: tipos-de-so-por-dispositivo (22 preguntas)

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "basico"
  tags: ["concepto"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Todos los dispositivos usan el mismo tipo de sistema operativo, sin importar su función."

explicacion: |
  Los SO no son "talla única": están diseñados según las necesidades de
  hardware y objetivos de cada tipo de dispositivo.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "basico"
  tags: ["mainframes"]

variables:
  n: uno_de([1, 1])

respuesta: "procesar volúmenes masivos de datos con disponibilidad casi ininterrumpida"
tipo: mc
opciones_explicitas: ["procesar volúmenes masivos de datos con disponibilidad casi ininterrumpida", "ofrecer la mejor interfaz gráfica para el usuario", "consumir la menor batería posible"]

enunciado: "Los mainframes están diseñados principalmente para..."

explicacion: |
  Son el corazón de instituciones financieras, aerolíneas y gobiernos:
  priorizan la integridad de datos y el procesamiento en bloque.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "intermedio"
  tags: ["servidores"]

variables:
  ejemplo_so: uno_de(["Linux", "Windows Server"])

respuesta: verdadero
tipo: vf

enunciado: "\"{ejemplo_so}\" es mencionado en la teoría como ejemplo de sistema operativo típico de un servidor."

explicacion: |
  Ambos son SO reales usados en servidores, enfocados en gestión de
  redes, seguridad perimetral y entrega de recursos.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "intermedio"
  tags: ["servidores"]

variables:
  n: uno_de([1, 1])

respuesta: "escalabilidad: aumentar capacidad según demanda sin detenerse"
tipo: mc
opciones_explicitas: ["escalabilidad: aumentar capacidad según demanda sin detenerse", "una interfaz gráfica vistosa para el usuario final", "un consumo energético mínimo"]

enunciado: "Una característica clave de los SO de servidor, según la teoría, es..."

explicacion: |
  A diferencia de un mainframe aislado, un servidor debe poder crecer en
  capacidad según la demanda sin interrumpir el servicio.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "basico"
  tags: ["diferencia mainframe servidor"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Los mainframes suelen ser sistemas aislados y centralizados, mientras que los servidores operan en entornos distribuidos."

explicacion: |
  Es una diferencia clave entre ambos: el mainframe centraliza, el
  servidor se conecta y distribuye recursos a otros equipos por red.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "basico"
  tags: ["pcs"]

variables:
  so: uno_de(["Windows", "macOS", "distribuciones de Linux"])

respuesta: verdadero
tipo: vf

enunciado: "\"{so}\" es mencionado en la teoría como sistema operativo típico de una computadora personal (PC)."

explicacion: |
  Los tres priorizan la experiencia del usuario, la interfaz gráfica y
  la compatibilidad con periféricos.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "basico"
  tags: ["pcs"]

variables:
  n: uno_de([1, 1])

respuesta: "facilitar la interacción humana con interfaz gráfica y multitarea ligera"
tipo: mc
opciones_explicitas: ["facilitar la interacción humana con interfaz gráfica y multitarea ligera", "garantizar respuesta en milisegundos para sistemas críticos", "controlar un único hardware específico con consumo mínimo"]

enunciado: "El objetivo principal de un SO para PC es..."

explicacion: |
  A diferencia de los sistemas embebidos o de tiempo real, la PC busca
  facilitar la interacción del usuario con aplicaciones diversas.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "intermedio"
  tags: ["tiempo real"]

variables:
  ejemplo: uno_de(["control industrial", "aviónica", "equipos médicos"])

respuesta: verdadero
tipo: vf

enunciado: "\"{ejemplo}\" es un ámbito donde los sistemas operativos de tiempo real son vitales, según la teoría."

explicacion: |
  En estos ámbitos, un retraso de milisegundos puede ser catastrófico,
  así que se necesita una respuesta estrictamente predecible.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "intermedio"
  tags: ["tiempo real"]

variables:
  n: uno_de([1, 1])

respuesta: "que una tarea se complete dentro de un plazo estricto y predecible"
tipo: mc
opciones_explicitas: ["que una tarea se complete dentro de un plazo estricto y predecible", "que el usuario tenga la mejor experiencia visual", "que el dispositivo consuma la menor batería posible"]

enunciado: "Un sistema operativo de tiempo real garantiza principalmente..."

explicacion: |
  La predictibilidad del tiempo de respuesta es la característica
  central de estos sistemas, no la interfaz ni el consumo energético.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "basico"
  tags: ["embebidos"]

variables:
  dispositivo: uno_de(["lavadoras", "televisores inteligentes", "controles de acceso"])

respuesta: verdadero
tipo: vf

enunciado: "\"{dispositivo}\" es un ejemplo de dispositivo con sistema operativo embebido mencionado en la teoría."

explicacion: |
  Los sistemas embebidos son SO livianos integrados en dispositivos
  cotidianos con función específica y bajo consumo energético.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "intermedio"
  tags: ["embebidos"]

variables:
  n: uno_de([1, 1])

respuesta: "controlar un hardware específico con consumo energético muy bajo"
tipo: mc
opciones_explicitas: ["controlar un hardware específico con consumo energético muy bajo", "permitir instalar cualquier programa arbitrario", "procesar millones de transacciones financieras"]

enunciado: "La función de un sistema embebido es..."

explicacion: |
  Tienen capacidades mínimas porque su rol es controlar un hardware
  puntual, sin necesidad de interfaces complejas ni gran potencia.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "basico"
  tags: ["identificacion"]

variables:
  n: uno_de([1, 1])

respuesta: "embebido"
tipo: mc
opciones_explicitas: ["embebido", "mainframe", "servidor"]

enunciado: "La pantalla digital de un microondas usa un sistema operativo..."

explicacion: |
  Es un ejemplo claro de sistema embebido: no se le instalan programas
  arbitrarios, sólo controla el hardware específico del microondas.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "intermedio"
  tags: ["identificacion"]

variables:
  n: uno_de([1, 1])

respuesta: "tiempo real"
tipo: mc
opciones_explicitas: ["tiempo real", "para PC", "embebido"]

enunciado: "El sistema que controla un airbag en un auto, garantizando respuesta inmediata ante una señal de peligro, es de tipo..."

explicacion: |
  Necesita una respuesta predecible en milisegundos, algo que un SO de
  PC común no puede garantizar con la misma fiabilidad.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "basico"
  tags: ["identificacion"]

variables:
  n: uno_de([1, 1])

respuesta: "servidor"
tipo: mc
opciones_explicitas: ["servidor", "embebido", "tiempo real"]

enunciado: "Cuando accedés a la plataforma de tu escuela y ves datos que residen en otra máquina remota, esos datos están gestionados por un SO de tipo..."

explicacion: |
  El servidor asegura que la información llegue a todos los usuarios de
  forma segura, gestionando la red y los recursos remotos.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "basico"
  tags: ["identificacion"]

variables:
  n: uno_de([1, 1])

respuesta: "para PC"
tipo: mc
opciones_explicitas: ["para PC", "mainframe", "tiempo real"]

enunciado: "Cuando abrís tu notebook para hacer una tarea, estás usando un sistema operativo..."

explicacion: |
  Está diseñado para la interacción directa del usuario: es un SO de PC.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "avanzado"
  tags: ["criterios de eleccion"]

variables:
  n: uno_de([1, 1])

respuesta: "la eficiencia, la seguridad y la capacidad de respuesta del dispositivo"
tipo: mc
opciones_explicitas: ["la eficiencia, la seguridad y la capacidad de respuesta del dispositivo", "únicamente el precio de venta del hardware", "el color de la carcasa del dispositivo"]

enunciado: "Según la teoría, la elección del tipo de SO determina principalmente..."

explicacion: |
  No es una decisión estética: afecta directamente la eficiencia,
  seguridad y capacidad de respuesta según el contexto de uso.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "intermedio"
  tags: ["funcion comun"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Aunque su implementación varía drásticamente, todos los tipos de SO comparten la función básica de gestionar recursos."

explicacion: |
  Mainframes, servidores, PCs, sistemas de tiempo real y embebidos
  gestionan recursos de forma distinta, pero esa función básica es
  compartida por todos.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "intermedio"
  tags: ["mainframes"]

variables:
  institucion: uno_de(["instituciones financieras", "aerolíneas", "gobiernos"])

respuesta: verdadero
tipo: vf

enunciado: "\"{institucion}\" son mencionadas en la teoría como usuarias típicas de mainframes."

explicacion: |
  Los mainframes son el corazón de este tipo de instituciones, que
  necesitan procesar grandes volúmenes de datos de forma confiable.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "basico"
  tags: ["identificacion"]

variables:
  n: uno_de([1, 1])

respuesta: "embebido"
tipo: mc
opciones_explicitas: ["embebido", "servidor", "mainframe"]

enunciado: "El sistema operativo de un celular es, según la teoría, de tipo..."

explicacion: |
  El celular es mencionado explícitamente como ejemplo de dispositivo
  con sistema embebido, sin acceso directo a instalar cualquier
  programa arbitrario.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "avanzado"
  tags: ["comparacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Un SO de PC común puede garantizar la misma fiabilidad de respuesta inmediata que un sistema de tiempo real."

explicacion: |
  Los sistemas de tiempo real están diseñados específicamente para
  respuestas predecibles en milisegundos; un SO de PC no ofrece esa
  garantía.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "basico"
  tags: ["ejemplo cotidiano"]

variables:
  n: uno_de([1, 1])

respuesta: "tren"
tipo: completar

enunciado: "El sistema de control de un ___ (mencionado junto al airbag) es un ejemplo de sistema de tiempo real en la teoría."

respuestas_validas:
  - "tren"

explicacion: |
  Tanto el sistema de un tren como el airbag de un auto necesitan
  respuestas inmediatas y predecibles: son ejemplos de tiempo real.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "intermedio"
  tags: ["embebidos vs pc"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En un sistema embebido, a diferencia de una PC, no se puede instalar programas arbitrarios porque su función es controlar un hardware específico."

explicacion: |
  Un microondas o un celular no permiten instalar cualquier software:
  están limitados a la función para la que fueron fabricados.
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

## Sección: unidades-almacenamiento (22 preguntas)

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "basico"
  tags: ["unidades_almacenamiento", "vocabulario"]

enunciado: "¿Qué es un bit?"
tipo: mc
opciones_explicitas:
  - "La unidad mínima de información en una computadora: un 0 o un 1"
  - "Un grupo de 8 bytes"
  - "La velocidad de un procesador"
respuesta: "La unidad mínima de información en una computadora: un 0 o un 1"

explicacion: |
  Todo lo demás (bytes, kilobytes...) se construye a partir de esta
  unidad mínima.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "basico"
  tags: ["unidades_almacenamiento", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un byte está compuesto por 8 bits."

explicacion: |
  Es la unidad base sobre la que se arman kilobyte, megabyte, etc.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "basico"
  tags: ["unidades_almacenamiento", "vocabulario"]

enunciado: "En el sistema decimal (SI), ¿a cuántos bytes equivale 1 KB?"
tipo: mc
opciones_explicitas:
  - "1.000 bytes"
  - "1.024 bytes"
  - "100 bytes"
respuesta: "1.000 bytes"

explicacion: |
  Es la potencia de 10 estándar, igual que en cualquier otra unidad
  \"kilo\" (kilogramo, kilómetro).
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "basico"
  tags: ["unidades_almacenamiento", "vocabulario"]

enunciado: "En el sistema binario (IEC), ¿a cuántos bytes equivale 1 KiB?"
tipo: mc
opciones_explicitas:
  - "1.024 bytes"
  - "1.000 bytes"
  - "512 bytes"
respuesta: "1.024 bytes"

explicacion: |
  1.024 es 2 elevado a la 10, la potencia de 2 más cercana a 1.000.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "KB (1.000 bytes) y KiB (1.024 bytes) no son la misma cantidad, aunque en el uso cotidiano a veces se confundan o se usen como sinónimos."

explicacion: |
  Es justamente la ambigüedad que el estándar IEC de 1998 quiso resolver
  con los prefijos \"kibi/mebi/gibi\".
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "calculo"]

variables:
  cantidad_kb: random(5, 900)

respuesta: cantidad_kb * 1000
tipo: input
tolerancia_abs: 0

enunciado: "Un archivo pesa {cantidad_kb} KB (sistema decimal). ¿Cuántos bytes son?"

explicacion: |
  Se multiplica por 1.000, la definición decimal de kilo.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "calculo"]

variables:
  cantidad_kib: random(5, 900)

respuesta: cantidad_kib * 1024
tipo: input
tolerancia_abs: 0

enunciado: "Un archivo pesa {cantidad_kib} KiB (sistema binario). ¿Cuántos bytes son?"

explicacion: |
  Se multiplica por 1.024, la definición binaria de kibi.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "comparacion"]

variables:
  cantidad: random(10, 500)

respuesta: ((cantidad * 1024) > (cantidad * 1000))
tipo: vf

enunciado: "Con el mismo número, {cantidad} KiB representa más bytes que {cantidad} KB."

explicacion: |
  1.024 es mayor que 1.000, así que la versión binaria siempre da más
  bytes para el mismo número.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La memoria RAM y el direccionamiento de memoria de una computadora usan naturalmente potencias de 2, porque las computadoras funcionan internamente en base binaria."

explicacion: |
  Es la razón de fondo por la que existe el sistema binario de
  prefijos (kibi, mebi, gibi).
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los fabricantes de discos, pendrives y tarjetas de memoria suelen anunciar la capacidad usando el sistema decimal (1.000), no el binario."

explicacion: |
  Da un número redondo y, casualmente, también más grande que el
  binario.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "avanzado"
  tags: ["unidades_almacenamiento", "calculo"]

variables:
  gb_anunciados: uno_de([120, 240, 500, 1000, 2000])

respuesta: gb_anunciados * 1000000000
tipo: input
tolerancia_abs: 0

enunciado: "Un disco se vende anunciando \"{gb_anunciados} GB\" (sistema decimal del fabricante). ¿Cuántos bytes tiene realmente ese disco?"

pasos:
  - "{gb_anunciados} × 1.000.000.000"

explicacion: |
  1 GB decimal son 1.000 millones de bytes.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "avanzado"
  tags: ["unidades_almacenamiento", "calculo"]

variables:
  gb_anunciados: uno_de([120, 240, 500, 1000, 2000])

respuesta: (gb_anunciados * 1000000000) / 1073741824
tipo: input
tolerancia_abs: 0.5

enunciado: "Ese mismo disco de \"{gb_anunciados} GB\" (decimal), ¿aproximadamente cuánto va a mostrar el sistema operativo, que calcula dividiendo por potencias de 1.024 (aunque siga llamándolo \"GB\")?"

pasos:
  - "bytes reales: {gb_anunciados} × 1.000.000.000 = {gb_anunciados * 1000000000}"
  - "÷ 1.024³ (1.073.741.824) = {(gb_anunciados * 1000000000) / 1073741824}"

explicacion: |
  El sistema operativo divide por 1.024³, no por 1.000³, así que el
  número que muestra siempre es menor al anunciado por el fabricante.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un disco anunciado como \"500 GB\" por el fabricante suele mostrar un número menor a 500 en el sistema operativo (aproximadamente 465,7)."

explicacion: |
  Es la consecuencia directa de que el fabricante usa 1.000 y el
  sistema operativo divide por 1.024.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La diferencia entre el \"500 GB\" del fabricante y lo que muestra el sistema operativo no significa que falte espacio: es la misma cantidad de bytes, contada con dos reglas de prefijos distintas."

explicacion: |
  No hay ningún byte \"perdido\": es sólo una diferencia de convención
  de conteo.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "calculo"]

variables:
  cantidad_kb: random(5, 900)
  bytes_totales: cantidad_kb * 1000

respuesta: cantidad_kb
tipo: input
tolerancia_abs: 0.01

enunciado: "Un archivo pesa {bytes_totales} bytes. ¿Cuántos KB (sistema decimal) son?"

explicacion: |
  Se despeja dividiendo los bytes totales por 1.000.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "avanzado"
  tags: ["unidades_almacenamiento", "vocabulario"]

enunciado: "¿Para qué introdujo la IEC los prefijos \"kibi/mebi/gibi\" en 1998?"
tipo: mc
opciones_explicitas:
  - "Para desambiguar: que \"KB\" volviera a significar sólo 1.000 bytes, y \"KiB\" quedara para 1.024"
  - "Para reemplazar por completo al byte como unidad base"
  - "Para que los fabricantes de discos vendieran más capacidad"
respuesta: "Para desambiguar: que \"KB\" volviera a significar sólo 1.000 bytes, y \"KiB\" quedara para 1.024"

explicacion: |
  Antes del estándar, \"KB\" se usaba indistintamente para 1.000 o 1.024
  bytes, según el contexto.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "basico"
  tags: ["unidades_almacenamiento", "orden"]

tipo: ordenar
enunciado: "Ordená estas unidades de almacenamiento de menor a mayor."
opciones_explicitas:
  - "1 MB"
  - "1 byte"
  - "1 GB"
  - "1 KB"
respuesta_orden: ["1 byte", "1 KB", "1 MB", "1 GB"]

explicacion: |
  Cada prefijo es 1.000 (o 1.024) veces más grande que el anterior.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "verificacion"]

variables:
  cantidad_kib: random(5, 900)
  correcto: cantidad_kib * 1024
  error: uno_de([0, 0, 0, 50, -50])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 1)
tipo: vf

enunciado: "¿Está bien calculado esto? {cantidad_kib} KiB convertidos a bytes: {mostrado}."

explicacion: |
  Se vuelve a multiplicar por 1.024 y se compara con el valor mostrado.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento"]

variables:
  cantidad_kib: random(5, 900)
  bytes_totales: cantidad_kib * 1024

tipo: completar
enunciado: "Un archivo pesa {bytes_totales} bytes. Completá: ___ (KiB) = {bytes_totales} (bytes) ÷ 1.024."
respuestas_validas:
  - cantidad_kib

explicacion: |
  Se divide por 1.024 para pasar de bytes a KiB.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "avanzado"
  tags: ["unidades_almacenamiento", "comparacion"]

respuesta: verdadero
tipo: vf

enunciado: "Para el mismo disco, el número de \"GB\" que anuncia el fabricante (sistema decimal) siempre es mayor que el número que muestra el sistema operativo al calcularlo en sistema binario."

explicacion: |
  Dividir la misma cantidad de bytes por 1.000³ da un número mayor que
  dividirla por 1.024³.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "1 MB (1.000.000 bytes, decimal) no es exactamente lo mismo que 1 MiB (1.048.576 bytes, binario)."

explicacion: |
  La diferencia se agranda a medida que se sube de escala (kilo, mega,
  giga...).
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "basico"
  tags: ["unidades_almacenamiento", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Existen dos sistemas de prefijos de almacenamiento (decimal: KB=1.000; binario: KiB=1.024), y confundirlos es la razón por la que un disco \"de 500 GB\" nunca muestra exactamente 500 en la computadora."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: variables-y-tipos-de-dato (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["conceptos", "fundamentos"]

respuesta: "contenedor"
tipo: completar
respuestas_validas:
  - "contenedor"

enunciado: "En programación, una variable se puede definir conceptualmente como un ___ en memoria que permite almacenar un valor que puede cambiar durante la ejecución de un programa."

explicacion: |
  Una variable es un espacio reservado en la memoria de la computadora, identificado por un nombre, destinado a guardar un dato que puede ser modificado.
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["tipos_de_datos", "identificacion"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  datos: [["15", "entero"], ["3.14", "decimal"], ["'Hola'", "texto"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["entero", "decimal", "texto", "booleano"]

enunciado: "Si tenemos el valor {datos[escenario_idx][0]}, ¿qué tipo de dato representa principalmente?"

explicacion: |
  El tipo de dato determina qué operaciones se pueden realizar con el valor. En este caso, {datos[escenario_idx][0]} es de tipo {datos[escenario_idx][1]}.
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["booleanos", "logica"]

respuesta: falso
tipo: vf

enunciado: "¿El tipo de dato booleano puede almacenar valores como 'si', 'no', 'tal vez' o '10'?"

explicacion: |
  Falso. El tipo booleano es estrictamente binario: solo puede representar dos estados, verdadero (true) o falso (false).
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["numeros", "decimales"]

respuesta: "float"
tipo: mc
opciones_explicitas: ["int", "float", "string", "bool"]

enunciado: "Cuando necesitamos representar un número que contiene una parte fraccionaria (como 0.5 o -1.25), el tipo de dato más adecuado es:"

explicacion: |
  Los números enteros (int) no permiten decimales. Para valores con precisión decimal utilizamos tipos de punto flotante (float o double).
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["flujo", "asignacion"]

respuesta_orden: ["Declarar", "Asignar", "Usar"]
tipo: ordenar
opciones_explicitas: ["Declarar", "Asignar", "Usar"]

enunciado: "Ordena los pasos lógicos para trabajar con una variable en un programa:"

pasos:
  - "Crear el nombre de la variable en memoria."
  - "Darle un valor inicial."
  - "Emplear la variable en una operación o instrucción."

explicacion: |
  Primero se debe declarar la variable (reservar espacio), luego asignar un valor (inicializar) y finalmente se puede usar en el código.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_datos"
  nivel: "basico"
  tags: ["fundamentos", "tipos_de_datos"]

variables:
  ejemplo_idx: uno_de([0, 1, 2])
  datos: [["42", "int"], ["3.14", "float"], ["\"Hola\"", "string"]]

enunciado: "Si asignamos el valor {datos[ejemplo_idx][0]} a una variable, el tipo de dato resultante es {datos[ejemplo_idx][1]}."

respuesta: datos[ejemplo_idx][1]
tipo: mc
opciones_explicitas: ["int", "float", "string", "boolean"]

explicacion: |
  Cada valor tiene un tipo asociado: los números sin decimales son enteros (int), los que tienen punto decimal son de punto flotante (float) y las secuencias de caracteres entre comillas son cadenas (string).
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_datos"
  nivel: "basico"
  tags: ["logica", "booleanos"]

enunciado: "En programación, una comparación como 10 > 5 resulta en un valor de tipo ___."

respuestas_validas:
  - "booleano"
  - "bool"
respuesta: "booleano"
tipo: completar

explicacion: |
  Las comparaciones lógicas devuelven valores booleanos: 'verdadero' (true) si la condición se cumple, o 'falso' (false) si no se cumple. Como 10 > 5 se cumple, el resultado concreto es 'verdadero', pero su tipo de dato es booleano.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_datos"
  nivel: "intermedio"
  tags: ["casting", "conversiones"]

variables:
  valor_original: "10.7"
  escenario: [["int", "10"], ["float", "10.7"]]
  idx: uno_de([0, 1])

enunciado: "Si convertimos el valor {valor_original} al tipo {escenario[idx][0]}, ¿cuál será el resultado?"

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["10", "10.7", "11", "error"]

explicacion: |
  Al convertir un número decimal (float) a un entero (int), se realiza un truncamiento: se eliminan todos los dígitos después del punto decimal sin redondear.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_datos"
  nivel: "basico"
  tags: ["almacenamiento", "memoria"]

enunciado: "Ordena los siguientes tipos de datos de menor a mayor consumo aproximado de memoria en un sistema estándar (asumiendo 8 bits para booleanos y 32/64 para otros):"

opciones_explicitas: ["boolean", "int", "float", "string"]
respuesta_orden: ["boolean", "int", "float", "string"]
tipo: ordenar

explicacion: |
  Un booleano ocupa el espacio mínimo (1 bit/byte), seguido por enteros y flotantes de tamaño fijo, mientras que los strings son dinámicos y dependen de la longitud del texto.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_datos"
  nivel: "intermedio"
  tags: ["conceptos", "mutabilidad"]

enunciado: "En muchos lenguajes de programación, una vez que una variable de tipo 'string' ha sido creada, su contenido no puede ser modificado directamente en la memoria, sino que se debe crear una nueva cadena. ¿Es esto verdadero o falso?"

respuesta: verdadero
tipo: vf
opciones_explicitas: ["verdadero", "falso"]

explicacion: |
  Esto se conoce como inmutabilidad. En lenguajes como Python o Java, los strings son inmutables; cualquier "modificación" genera un nuevo objeto en memoria.
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["tipos_de_dato", "errores_comunes"]

variables:
  a: 10
  b: "5"

enunciado: "Si intentamos realizar la operación matemática de sumar {a} + {b} en un lenguaje de tipado fuerte, el resultado esperado suele ser un error de tipo (TypeError) porque no se puede sumar un entero con un ___."

opciones_explicitas: ["entero", "decimal", "string", "booleano"]
respuesta: "string"
tipo: "mc"

explicacion: |
  En programación, no puedes sumar directamente un número (entero) con una cadena de texto (string). Para hacerlo, primero debes convertir el string a un número usando funciones como `int()` o `float()`.
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["booleanos", "logica"]

enunciado: "En la lógica de programación, el valor booleano que representa la falsedad se escribe como ___."

respuestas_validas:
  - "falso"
  - "false"
tipo: "completar"

explicacion: |
  Los tipos de datos booleanos solo pueden tener dos valores posibles: verdadero (true) o falso (false).
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["decimales", "float", "precision"]

variables:
  valor_a: 15
  valor_b: 15.5

enunciado: "Si declaramos una variable para almacenar el precio de un producto que puede tener centavos, como {valor_b}, ¿qué tipo de dato es el más adecuado para evitar la pérdida de precisión?"

opciones_explicitas: ["int", "float", "string", "bool"]
respuesta: "float"
tipo: "mc"

explicacion: |
  Los tipos `int` (enteros) solo almacenan números sin parte decimal. Para valores con decimales, se utilizan tipos de punto flotante como `float` o `double`.
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "intermedio"
  tags: ["almacenamiento", "memoria"]

enunciado: "Ordena los siguientes pasos que ocurren cuando una computadora asigna una variable en memoria, desde la reserva del espacio hasta el uso del dato:"

opciones_explicitas: ["Reserva de espacio en RAM", "Asignación de un nombre a la dirección", "Almacenamiento del valor", "Acceso al dato mediante el nombre"]
respuesta_orden: ["Reserva de espacio en RAM", "Asignación de un nombre a la dirección", "Almacenamiento del valor", "Acceso al dato mediante el nombre"]
tipo: "ordenar"

explicacion: |
  Para usar una variable, el sistema primero debe encontrar un lugar vacío en la memoria (RAM), asignar ese lugar a un nombre para que el programador lo reconozca, guardar el valor y finalmente permitir su lectura.
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["comparacion", "booleanos"]

enunciado: "Si evaluamos la expresión lógica (5 == 5.0), el resultado es ___."

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: "mc"

explicacion: |
  En la mayoría de los lenguajes modernos, al comparar un entero con un número decimal que tiene el mismo valor numérico, el resultado es verdadero porque el contenido matemático es el mismo.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_dato_numericos"
  nivel: "basico"
  tags: ["tipos_de_dato", "numeros"]

respuesta: "flotante"
tipo: completar
respuestas_validas:
  - "flotante"
  - "decimal"
  - "real"

enunciado: "Mientras que un tipo de dato entero representa números sin parte decimal, un tipo de dato ___ representa números que requieren precisión decimal."

explicacion: |
  En programación, los enteros (int) se usan para conteos exactos, mientras que los flotantes (float) se usan para mediciones con decimales.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_dato_logicos"
  nivel: "basico"
  tags: ["booleanos", "logica"]

opciones_explicitas: ["falso", "verdadero", "texto", "entero"]
respuesta: "verdadero"
tipo: mc

enunciado: "Un tipo de dato booleano se distingue de otros tipos porque su valor solo puede representar uno de dos estados lógicos: 'falso' es uno de ellos. ¿Cuál es el otro estado posible?"

explicacion: |
  Los booleanos son la base de la lógica computacional y solo pueden ser 'verdadero' o 'falso'.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_dato_texto"
  nivel: "basico"
  tags: ["strings", "texto"]

respuestas_validas:
  - "comillas"
respuesta: "comillas"
tipo: completar

enunciado: "A diferencia de los tipos numéricos, el tipo de dato texto (string) se distingue de un número por estar delimitado por ___ en el código fuente."

explicacion: |
  El uso de comillas (simples o dobles) le indica al compilador que el contenido debe tratarse como una secuencia de caracteres y no como una variable o un número.
```

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_memoria"
  nivel: "intermedio"
  tags: ["memoria", "orden"]

opciones_explicitas: ["Booleano", "Entero", "Flotante", "String"]
respuesta_orden: ["Booleano", "Entero", "Flotante", "String"]
tipo: ordenar

enunciado: "Ordena los siguientes tipos de datos de menor a mayor complejidad de almacenamiento y procesamiento en la memoria de una computadora típica:"

explicacion: |
  Los booleanos ocupan menos espacio, seguidos por enteros, luego números decimales (que requieren más bits para la mantisa) y finalmente las cadenas de texto, cuyo tamaño depende de su longitud.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_dato_logicos"
  nivel: "basico"
  tags: ["booleanos", "logica"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que el tipo de dato booleano puede almacenar el valor numérico 5.5?"

explicacion: |
  Falso. El tipo booleano es estrictamente binario (verdadero/falso) y no puede contener valores decimales o enteros distintos a su lógica.
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["tipos_de_dato", "programacion"]

variables:
  datos: [["edad", "25", "entero"], ["nombre", "Ana", "texto"], ["precio", "19.99", "decimal"], ["es_valido", "true", "booleano"], ["puntos", "100", "entero"], ["usuario", "Dev_User", "texto"], ["promedio", "8.5", "decimal"], ["esta_activo", "false", "booleano"]]
  idx: uno_de([0, 1, 2, 3, 4, 5, 6, 7])

enunciado: "Si queremos almacenar el valor de la variable {datos[idx][0]} que contiene el dato {datos[idx][1]}, ¿qué tipo de dato es?"

opciones_explicitas: ["entero", "decimal", "texto", "booleano"]
respuesta: datos[idx][2]
tipo: mc

explicacion: |
  El tipo de dato depende del contenido: si es un número sin decimales es entero, si tiene decimales es decimal, si es una secuencia de caracteres es texto y si es verdadero/falso es booleano.
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["completar", "tipos_de_dato"]

variables:
  datos: [["\"Hola Mundo\"", "texto"], ["42", "entero"], ["3.14", "decimal"], ["false", "booleano"]]
  idx: uno_de([0, 1, 2, 3])

enunciado: "La variable que contiene el valor {datos[idx][0]} es de tipo ___."

respuestas_validas:
  - "texto"
  - "entero"
  - "decimal"
  - "booleano"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  Cada valor tiene una representación lógica en memoria: los textos van entre comillas, los enteros no tienen punto decimal, los decimales sí, y los booleanos representan estados lógicos.
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "intermedio"
  tags: ["booleanos", "memoria"]

enunciado: "¿Es correcto afirmar que una variable de tipo booleano puede almacenar el valor 15.5?"

respuesta: falso
tipo: vf

explicacion: |
  Falso. Las variables de tipo booleano solo pueden almacenar dos valores: verdadero o falso. El valor 15.5 es un número decimal.
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "intermedio"
  tags: ["ordenar", "memoria"]

enunciado: "Ordena los siguientes tipos de datos de menor a mayor capacidad de representar valores numéricos (desde el más simple al más complejo en términos de precisión decimal):"

opciones_explicitas: ["entero", "decimal", "texto"]
respuesta_orden: ["entero", "decimal", "texto"]
tipo: ordenar

explicacion: |
  El tipo entero solo maneja números sin decimales. El decimal permite precisión fraccionaria. El texto es una estructura compleja que puede contener cualquier carácter.
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["identificacion", "programacion"]

variables:
  datos: [["saldo", "500.50", "decimal"], ["nombre", "Juan", "texto"], ["es_mayor", "true", "booleano"]]
  idx: uno_de([0, 1, 2])

enunciado: "En un sistema de gestión, la variable '{datos[idx][0]}' tiene el valor '{datos[idx][1]}'. Su tipo de dato es:"

opciones_explicitas: ["decimal", "texto", "booleano"]
respuesta: datos[idx][2]
tipo: mc

explicacion: |
  Al analizar el valor '{datos[idx][1]}', podemos determinar su naturaleza: si tiene punto decimal es decimal, si es una cadena de letras es texto y si es un valor lógico es booleano.
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

