# Examen jefe — Maestro de SQL y Redes

> Logro #181. Demostraste que sos un crack manejando consultas complejas, protocolos de red y licencias de software. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **116 preguntas totales** en 5/5 secciones.

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
respuestas_validas: ["SELECT"]

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

respuesta: ["SELECT", "FROM", "JOIN", "WHERE", "GROUP BY", "ORDER BY"]
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

variables:
  escenario: uno_de([0, 1])

respuesta: tabla_respuestas[escenario][1
tipo: mc
opciones_explicitas: ["WHERE", "HAVING", "FILTER", "GROUP"]

variables_auxiliares:
  tabla_respuestas: [["WHERE", "WHERE"], ["HAVING", "HAVING"]]

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

respuesta: ["SELECT", "FROM", "WHERE", "ORDER BY"]
tipo: ordenar

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

respuesta: ["AVG", "salario"]
tipo: completar
respuestas_validas: ["AVG", "salario"]

enunciado: "Para obtener el promedio de la columna ___ en la tabla ___, la sentencia correcta sería: `SELECT ___({columna}) FROM {tabla};`"

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
  tabla_datos: [["id", "nombre", "telefono"], [1, "Ana", "123"], [2, "Luis", null], [3, "Marta", "456"]]
  idx: uno_de([0, 1])

enunciado: "Si tenemos una tabla con {tabla_datos[idx][0]} columnas y aplicamos COUNT({tabla_datos[idx][2]}) sobre la columna de teléfono (donde hay un valor NULL), el resultado será diferente a aplicar COUNT(*). \n\n¿Es verdadero que COUNT(telefono) ignorará la fila con valor NULL?"

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

respuesta: ["FROM", "WHERE", "GROUP BY", "HAVING", "SELECT", "ORDER BY"]
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

respuesta: ["FROM", "WHERE", "GROUP BY", "HAVING", "SELECT", "ORDER BY"]
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

variables:
  escenario: uno_de([[true, "WHERE filtra filas antes de agrupar, HAVING filtra grupos después de agrupar"], [false, "WHERE filtra grupos después de agrupar, HAVING filtra filas antes de agrupar"]])

respuesta: escenario[0][1
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

respuesta: "JOIN combina columnas de diferentes tablas, UNION combina filas de diferentes consultas"
tipo: completar
respuestas_validas: ["JOIN combina columnas de diferentes tablas, UNION combina filas de diferentes consultas"]

enunciado: "En términos de estructura de resultados, un ___ ___ añade nuevas columnas a una fila mediante la relación de tablas, mientras que un ___ ___ añade nuevas filas al resultado combinando conjuntos de datos."

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
  escenario: uno_de([
    ["Clientes (id, nombre) | Pedidos (id, cliente_id)", "3"],
    ["Usuarios (id, nombre) | Posts (id, user_id)", "5"],
    ["Departamentos (id, nombre) | Empleados (id, dept_id)", "2"]
  ])
  idx: uno_de([0, 1, 2])

enunciado: "Dada la siguiente estructura de tablas: {escenario[idx][0]}. Si tenemos la tabla de pedidos/posts/empleados con los siguientes IDs de relación: {escenario[idx][1]}, ¿cuántos registros resultantes devolvería un INNER JOIN entre ambas tablas?"

respuesta: escenario[idx][1
tipo: completar
respuestas_validas: ["1", "2", "3", "4", "5"]

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

respuesta: ["FROM", "WHERE", "GROUP BY", "HAVING", "SELECT", "ORDER BY"]
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

respuestas_validas: ["HAVING"]

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
  datos_ventas: uno_de([
    [100, 200, 300],
    [50, 150, 250],
    [10, 20, 60]
  ])
  idx: uno_de([0, 1, 2])

enunciado: "Se tiene una tabla con una columna 'monto' que contiene los siguientes valores: {datos_ventas[idx][0]}, {datos_ventas[idx][1]}, {datos_ventas[idx][2]}. ¿Cuál es el resultado de la función AVG(monto)?"

respuesta: promedio(datos_ventas[idx])
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

respuesta: ["Aplicación", "Transporte", "Internet", "Acceso a la red"]

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
  escenario: uno_de([
    ["Paquete", "Internet"],
    ["Trama", "Acceso a la red"],
    ["Segmento", "Transporte"]
  ])

tipo: completar
respuestas_validas: ["Paquete", "Trama", "Segmento"]

enunciado: "En la capa de {escenario[0]}, la unidad de datos de protocolo (PDU) se denomina ________."

respuesta: escenario[1

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

variables:
  idx: uno_de([0, 1, 2])
  escenario: [
    ["Datos de aplicación", "Segmento", "Paquete"],
    ["Segmento de transporte", "Paquete", "Trama"],
    ["Paquete IP", "Trama", "Bit"]
  ]

tipo: completar
respuestas_validas: [
    ["Segmento", "Paquete", "Trama"],
    ["Paquete", "Trama", "Bit"],
    ["Trama", "Bit", "Frame"]
  ]

enunciado: "Si estamos en la capa de Transporte y añadimos la cabecera correspondiente, el resultado es un {escenario[idx][0]}. Al pasar a la capa de Internet, este se convierte en un {escenario[idx][1]}, y finalmente en la capa de Acceso a Red se transforma en una {escenario[idx][2]}."

respuesta: escenario[idx][2

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

respuesta: ["Datos", "Segmento", "Paquete", "Trama"]

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
  datos: [
    ["255.255.255.0", 256],
    ["255.255.255.128", 128]
  ]

tipo: completar
tolerancia_abs: 0

enunciado: "Si una red tiene una máscara de subred de {datos[idx][0]}, el número total de direcciones IP posibles (incluyendo la de red y de broadcast) es de ___."

respuesta: datos[idx][1

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
respuestas_validas: ["Capa de Red", "Capa de Enlace", "Capa de Internet", "Capa de Aplicación"]

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

respuesta: verdadero
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

respuesta: ["Datos", "Segmento", "Paquete", "Trama"]
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
respuestas_validas: ["capa_de_red", "capa_de_enlace"]

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
  tipo_direccion: uno_de(["logica", "fisica"])

respuesta: uno_de(["logica", "fisica"])
tipo: mc
opciones_explicitas: ["logica", "fisica"]

enunciado: "En el modelo TCP/IP, la dirección MAC se considera una dirección de tipo {tipo_direccion}, mientras que la dirección IP es una dirección de tipo {tipo_direccion_opuesta} (Nota: la variable para el usuario es {tipo_direccion})."
# Nota: Como el DSL no permite crear variables dependientes en el mismo bloque de forma dinámica sin riesgo de desincronización, se reescribe para ser una pregunta de opción múltiple estándar sobre la naturaleza de la IP.

# Re-estructuración para cumplir reglas estrictas de variables únicas:
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

respuesta: ["datos", "segmento", "paquete", "trama"]
tipo: ordenar

opciones_explicitas: ["datos", "segmento", "paquete", "trama"]

enunciado: "Ordena los elementos de mayor a menor nivel de encapsulamiento (desde la información original hasta la unidad de la capa física):"

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
  protocolo_tipo: uno_de([0, 1])

respuesta: tabla_protocolo[idx][1
tipo: mc
opciones_explicitas: ["orientado_a_conexion", "no_orientado_a_conexion"]

# Para cumplir la regla de que la respuesta debe ser el valor de la opción y no una expresión compleja en la respuesta:
# Usaremos una tabla de pares para mapear el sorteo a la respuesta correcta.

# Nota: El DSL requiere que la respuesta sea el valor exacto de las opciones.
# Definimos la tabla en variables (aunque el DSL dice que la respuesta debe ser del mismo tipo, 
# para MC la respuesta es el string de la opción).

# Re-diseño para cumplir estrictamente:
```

```
metadata:
  materia: "informatica"
  tema: "modelo_capas_red"
  nivel: "intermedio"
  tags: ["tcp_ip", "enrutamiento", "capa_red"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[192.168.1.5, "Red Local"], [10.0.0.1, "Red Externa"]]
  ip_origen: datos[escenario_idx][0]
  ip_destino: "8.8.8.8"

tipo: mc
opciones_explicitas: ["Capa de Aplicación", "Capa de Transporte", "Capa de Red", "Capa de Enlace"]

enunciado: "Un paquete con la IP de origen {ip_origen} debe viajar hacia {ip_destino}. ¿En qué capa del modelo TCP/IP se toman las decisiones de enrutamiento para determinar la mejor ruta?"

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
respuestas_validas: ["Segmento", "Paquete", "Trama"]

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
```

```
metadata:
  materia: "informatica"
  tema: "enrutamiento_ip"
  nivel: "avanzado"
  tags: ["ip", "enrutamiento", "subred"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario: [[192.168.1.0, "255.255.255.0"], [10.0.0.0, "255.0.0.0"]]
  red: escenario[escenario_idx][0]
  mascara: escenario[escenario_idx][1]

tipo: completar
tolerancia_abs: 0

enunciado: "Si un host tiene la dirección IP {red} y la máscara de subred {mascara}, ¿cuál es el valor decimal de la dirección de red (Network ID)?"

pasos:
  - "Identificar la máscara de red."
  - "Realizar la operación AND bit a bit entre la IP y la máscara."

explicacion: |
  La dirección de red se obtiene aplicando una operación AND lógica entre la dirección IP del host y su máscara de subred.
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
