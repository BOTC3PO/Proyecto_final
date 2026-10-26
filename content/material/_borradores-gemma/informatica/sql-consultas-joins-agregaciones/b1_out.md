### 1 — El comando SELECT
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

### 2 — Función de agregación para conteo
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

### 3 — El concepto de JOIN
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

### 4 — Orden de ejecución de una consulta
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

### 5 — Filtrado de grupos con HAVING
```
metadata:
  materia: "informatica"
  tema: "sql_agregaciones_avanzado"
  nivel: "intermedio"
  tags: ["sql", "having"]

variables:
  escenario: uno_de([0, 1])

respuesta: tabla_respuestas[escenario][1]
tipo: mc
opciones_explicitas: ["WHERE", "HAVING", "FILTER", "GROUP"]

variables_auxiliares:
  tabla_respuestas: [["WHERE", "WHERE"], ["HAVING", "HAVING"]]

enunciado: "Si quieres filtrar los resultados de una consulta basándote en el resultado de una función de agregación (como SUM o AVG), ¿qué cláusula debes usar?"

explicacion: |
  La cláusula WHERE filtra filas antes de agrupar; la cláusula HAVING filtra grupos después de aplicar la agregación.
```