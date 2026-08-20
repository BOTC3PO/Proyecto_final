### 1 — Filtrar por igualdad exacta en cadena
```yaml
metadata:
  materia: "sql"
  tema: "select-y-where"
  nivel: "basico"
  tags: ["where", "igualdad", "string"]
respuesta: "WHERE nombre = 'Juan'"
tipo: completar
enunciado: "Completa la consulta para seleccionar todos los datos de la tabla 'clientes' solo cuando el campo 'nombre' sea exactamente 'Juan':\nSELECT * FROM clientes {respuesta}"
pasos:
  - "Identificar la condición de filtrado: igualdad estricta."
  - "Usar el operador '=' para cadenas de texto."
  - "Asegurar que el valor esté entre comillas simples."
explicacion: "En SQL, el operador '=' compara valores exactos. Para cadenas, los valores deben estar entre comillas simples. 'WHERE nombre = 'Juan'' es la sintaxis estándar para filtrar por igualdad en la mayoría de los dialectos SQL."
respuestas_validas:
  - "WHERE nombre = 'Juan'"
  - "WHERE nombre = \"Juan\""
```

### 2 — Operador de desigualdad en números
```yaml
metadata:
  materia: "sql"
  tema: "select-y-where"
  nivel: "basico"
  tags: ["where", "desigualdad", "numeros"]
respuesta: "WHERE precio <> 100"
tipo: completar
enunciado: "Selecciona los productos de la tabla 'inventario' cuyo 'precio' NO sea igual a 100:\nSELECT * FROM inventario {respuesta}"
pasos:
  - "Determinar la lógica de exclusión: diferente de."
  - "Seleccionar el operador estándar ANSI '<>'."
  - "Aplicar al campo numérico 'precio'."
explicacion: "El operador '<>' es el estándar ANSI para 'no igual a'. Aunque algunos dialectos aceptan '!=', '<>' es más portátil. Se usa para excluir un valor numérico específico."
respuestas_validas:
  - "WHERE precio <> 100"
  - "WHERE precio != 100"
```

### 3 — Veracidad de operadores lógicos
```yaml
metadata:
  materia: "sql"
  tema: "select-y-where"
  nivel: "basico"
  tags: ["where", "logica", "and", "or"]
respuesta: "verdadero"
tipo: vf
enunciado: "En SQL, la expresión 'WHERE edad > 18 AND estado = 'activo'' devuelve filas donde la edad es mayor a 18 O el estado es activo."
pasos:
  - "Analizar el operador lógico 'AND'."
  - "Verificar si 'AND' implica disyunción (OR) o conjunción (Y)."
  - "Concluir que 'AND' requiere que AMBAS condiciones sean verdaderas."
explicacion: "El operador 'AND' es una conjunción lógica. Ambas condiciones deben cumplirse simultáneamente. La afirmación dice 'O', lo cual corresponde al operador 'OR', por lo tanto es falso."
```

### 4 — Filtrar por rango con BETWEEN
```yaml
metadata:
  materia: "sql"
  tema: "select-y-where"
  nivel: "basico"
  tags: ["where", "between", "rango"]
respuesta: "WHERE salario BETWEEN 3000 AND 5000"
tipo: completar
enunciado: "Obtén los empleados de la tabla 'personal' con un 'salario' entre 3000 y 5000 (inclusive):\nSELECT * FROM personal {respuesta}"
pasos:
  - "Identificar que se busca un rango inclusivo."
  - "Seleccionar el operador 'BETWEEN'."
  - "Especificar el límite inferior y superior con 'AND'."
explicacion: "'BETWEEN min AND max' es inclusivo en SQL estándar. Incluye los valores límite. Es la forma más legible y eficiente para rangos continuos."
respuestas_validas:
  - "WHERE salario BETWEEN 3000 AND 5000"
```

### 5 — Coincidencia de patrón con LIKE
```yaml
metadata:
  materia: "sql"
  tema: "select-y-where"
  nivel: "basico"
  tags: ["where", "like", "patron"]
respuesta: "WHERE email LIKE '%@gmail.com'"
tipo: completar
enunciado: "Selecciona los registros de la tabla 'usuarios' donde el campo 'email' termine con '@gmail.com' (usando comodines estándar):\nSELECT * FROM usuarios {respuesta}"
pasos:
  - "Reconocer la necesidad de coincidencia parcial al final de la cadena."
  - "Usar el operador 'LIKE'."
  - "Colocar el guion bajo '_' para un carácter o '%' para cero o más."
  - "Antesponer '%' para indicar 'cualquier cosa antes'."
explicacion: "'%' es el comodín para cero o más caracteres. '%@gmail.com' busca cualquier cadena que termine en ese sufijo. Es fundamental para búsquedas flexibles de texto."
respuestas_validas:
  - "WHERE email LIKE '%@gmail.com'"
```

### 6 — Pertenencia a lista con IN
```yaml
metadata:
  materia: "sql"
  tema: "select-y-where"
  nivel: "basico"
  tags: ["where", "in", "lista"]
respuesta: "WHERE ciudad IN ('Madrid', 'Buenos Aires', 'Mexico')"
tipo: completar
enunciado: "Filtra la tabla 'clientes' para obtener solo aquellos de las ciudades 'Madrid', 'Buenos Aires' o 'Mexico'. Completar:\nSELECT * FROM clientes {respuesta}"
pasos:
  - "Determinar que hay múltiples valores exactos posibles."
  - "Usar 'IN' es más eficiente y legible que múltiples 'OR'."
  - "Listar los valores entre paréntesis y separados por comas."
explicacion: "El operador 'IN' es un atajo para múltiples condiciones 'OR' con igualdad. Mejora la legibilidad y el rendimiento en algunos optimizadores."
respuestas_validas:
  - "WHERE ciudad IN ('Madrid', 'Buenos Aires', 'Mexico')"
```

### 7 — Nulos con IS NULL
```yaml
metadata:
  materia: "sql"
  tema: "select-y-where"
  nivel: "basico"
  tags: ["where", "null", "vacío"]
respuesta: "WHERE fecha_baja IS NULL"
tipo: completar
enunciado: "Selecciona los productos activos de la tabla 'productos' que NO tienen una fecha de baja registrada:\nSELECT * FROM productos {respuesta}"
pasos:
  - "Entender que NULL no es un valor, sino la ausencia de valor."
  - "Recordar que '=' no funciona con NULL."
  - "Usar el predicado específico 'IS NULL'."
explicacion: "En SQL, NULL representa falta de datos. Las comparaciones con '=' (ej: campo = NULL) siempre devuelven UNKNOWN, no TRUE. Se debe usar 'IS NULL' para filtrar registros sin valor."
respuestas_validas:
  - "WHERE fecha_baja IS NULL"
```

### 8 – Corrección de sintaxis con NOT IN
```yaml
metadata:
  materia: "sql"
  tema: "select-y-where"
  nivel: "basico"
  tags: ["where", "not", "in", "exclusion"]
respuesta: "WHERE categoria NOT IN ('Descontinuado', 'En_stock')"
tipo: completar
enunciado: "Excluye de la tabla 'articulos' aquellos que pertenezcan a las categorías 'Descontinuado' o 'En_stock'. Completar:\nSELECT * FROM articulos {respuesta}"
pasos:
  - "Identificar la necesidad de excluir una lista de valores."
  - "Usar el operador 'NOT IN'."
  - "Listar los valores a excluir entre paréntesis."
explicacion: "'NOT IN' es el opuesto de 'IN'. Excluye cualquier fila donde el campo coincida con algún valor de la lista. Es útil para exclusiones rápidas de conjuntos pequeños."
respuestas_validas:
  - "WHERE categoria NOT IN ('Descontinuado', 'En_stock')"
```

### 9 — Operador de mayor o igual
```yaml
metadata:
  materia: "sql"
  tema: "select-y-where"
  nivel: "basico"
  tags: ["where", "comparacion", "mayor_igual"]
respuesta: "WHERE cantidad >= 10"
tipo: completar
enunciado: "Selecciona los items del almacén 'bodega' con una 'cantidad' de 10 o más:\nSELECT * FROM bodega {respuesta}"
pasos:
  - "Definir la condición: mayor que O igual a."
  - "Usar el operador '>='."
  - "Aplicar al campo numérico."
explicacion: "El operador '>=' verifica si el valor es estrictamente mayor o exactamente igual al especificado. Es fundamental para filtros inclusivos en rangos superiores."
respuestas_validas:
  - "WHERE cantidad >= 10"
```

### 10 — Veracidad de precedencia de operadores
```yaml
metadata:
  materia: "sql"
  tema: "select-y-where"
  nivel: "basico"
  tags: ["where", "precedencia", "and", "or"]
respuesta: "falso"
tipo: vf
enunciado: "En una cláusula WHERE, los operadores OR se evalúan antes que los operadores AND por defecto, sin usar paréntesis."
pasos:
  - "Revisar la tabla de precedencia de operadores SQL."
  - "Confirmar que AND tiene mayor precedencia que OR."
  - "Evaluar la afirmación dada."
explicacion: "AND tiene mayor precedencia que OR. Por ejemplo, 'A OR B AND C' se interpreta como 'A OR (B AND C)', no '(A OR B) AND C'. Para cambiar el orden, se deben usar paréntesis."
```

### 11 — Coincidencia de prefijo con LIKE
```yaml
metadata:
  materia: "sql"
  tema: "select-y-where"
  nivel: "basico"
  tags: ["where", "like", "prefijo"]
respuesta: "WHERE codigo LIKE 'A%'"
tipo: completar
enunciado: "Encuentra todos los registros en la tabla 'productos' cuyo 'codigo' comience con la letra 'A':\nSELECT * FROM productos {respuesta}"
pasos:
  - "Identificar que se busca un inicio de cadena."
  - "Usar 'LIKE' con un comodín '%' al final."
  - "Colocar la letra fija antes del '%'."
explicacion: "'A%' significa 'A' seguido de cero o más caracteres. Es el patrón estándar para buscar prefijos. El guion bajo '_' sería para un solo carácter, no un prefijo variable."
respuestas_validas:
  - "WHERE codigo LIKE 'A%'"
```

### 12 — Filtrado por menor que
```yaml
metadata:
  materia: "sql"
  tema: "select-y-where"
  nivel: "basico"
  tags: ["where", "comparacion", "menor_que"]
respuesta: "WHERE edad < 18"
tipo: completar
enunciado: "Selecciona los registros de la tabla 'menores' donde el campo 'edad' sea estrictamente menor a 18:\nSELECT * FROM menores {respuesta}"
pasos:
  - "Definir la condición: estrictamente menor."
  - "Usar el operador '<'."
  - "Aplicar al campo numérico."
explicacion: "El operador '<' excluye el valor límite. 'edad < 18' incluye 17.99 pero no 18. Es esencial para filtrar límites excluyentes."
respuestas_validas:
  - "WHERE edad < 18"
```

### 13 — Uso de paréntesis para agrupar OR
```yaml
metadata:
  materia: "sql"
  tema: "select-y-where"
  nivel: "basico"
  tags: ["where", "parentesis", "logica"]
respuesta: "WHERE (pais = 'Argentina' OR pais = 'Chile') AND activo = 1"
tipo: completar
enunciado: "Selecciona usuarios activos ('activo = 1') que sean de Argentina O de Chile. Completar la lógica correcta:\nSELECT * FROM usuarios {respuesta}"
pasos:
  - "Identificar que el AND debe aplicar a todo el grupo de OR."
  - "Usar paréntesis para agrupar las condiciones OR."
  - "Colocar el AND después del grupo cerrado."
explicacion: "Los paréntesis cambian la precedencia. Sin ellos, 'pais = 'Argentina' OR pais = 'Chile' AND activo = 1' se evaluaría como 'pais = 'Argentina' OR (pais = 'Chile' AND activo = 1)', lo cual es incorrecto para este requisito."
respuestas_validas:
  - "WHERE (pais = 'Argentina' OR pais = 'Chile') AND activo = 1"
```

### 14 — Veracidad de IS NULL vs = NULL
```yaml
metadata:
  materia: "sql"
  tema: "select-y-where"
  nivel: "basico"
  tags: ["where", "null", "sintaxis"]
respuesta: "verdadero"
tipo: vf
enunciado: "La consulta 'SELECT * FROM tabla WHERE campo = NULL' no devuelve ninguna fila, incluso si hay valores NULL en esa columna."
pasos:
  - "Recordar que NULL no es un valor comparable con '='."
  - "Saber que 'campo = NULL' devuelve UNKNOWN."
  - "Concluir que WHERE filtra UNKNOWN."
explicacion: "En SQL, NULL representa 'desconocido'. Comparar 'desconocido' con '=' siempre resulta en 'desconocido' (falso en el contexto de filtrado). Se debe usar 'IS NULL'."
```

### 15 — Coincidencia de carácter único con LIKE
```yaml
metadata:
  materia: "sql"
  tema: "select-y-where"
  nivel: "basico"
  tags: ["where", "like", "guion_bajo"]
respuesta: "WHERE codigo LIKE 'A_1'"
tipo: completar
enunciado: "Selecciona de la tabla 'codigos' aquellos que empiecen con 'A', tengan un carácter intermedio desconocido y terminen con '1'. Completar:\nSELECT * FROM codigos {respuesta}"
pasos:
  - "Identificar que se requiere exactamente un carácter desconocido."
  - "Usar el guion bajo '_' como comodín de un solo carácter."
  - "Construir el patrón 'A_1'."
explicacion: "'_' coincide con exactamente un carácter. 'A_1' coincide con 'A11', 'A21', 'A b1', etc., pero no con 'A1' (dos caracteres) ni 'A123' (cuatro)."
respuestas_validas:
  - "WHERE codigo LIKE 'A_1'"
```

### 16 — Filtrado por rango inferior con BETWEEN
```yaml
metadata:
  materia: "sql"
  tema: "select-y-where"
  nivel: "basico"
  tags: ["where", "between", "inferior"]
respuesta: "WHERE precio BETWEEN 0 AND 50"
tipo: completar
enunciado: "Obtén los productos de la tabla 'barato' con un 'precio' menor o igual a 50 (asumiendo precios no negativos):\nSELECT * FROM barato {respuesta}"
pasos:
  - "Usar 'BETWEEN' para definir un límite inferior fijo."
  - "Establecer el mínimo (0) y máximo (50)."
  - "Asegurar el orden correcto min-max."
explicacion: "'BETWEEN 0 AND 50' es equivalente a 'precio >= 0 AND precio <= 50'. Es más conciso y legible para rangos que comienzan en un valor conocido."
respuestas_validas:
  - "WHERE precio BETWEEN 0 AND 50"
```

### 17 — Operador de menor o igual
```yaml
metadata:
  materia: "sql"
  tema: "select-y-where"
  nivel: "basico"
  tags: ["where", "comparacion", "menor_igual"]
respuesta: "WHERE stock <= 5"
tipo: completar
enunciado: "Selecciona los productos de la tabla 'inventario' que tienen 5 o menos unidades de 'stock':\nSELECT * FROM inventario {respuesta}"
pasos:
  - "Definir la condición: menor o igual."
  - "Usar el operador '<='."
  - "Aplicar al campo numérico."
explicacion: "El operador '<=' es inclusivo. Incluye el valor límite (5). Es crucial para alertas de stock mínimo donde el límite es el punto de activación."
respuestas_validas:
  - "WHERE stock <= 5"
```

### 18 — Excluir nulos explícitamente
```yaml
metadata:
  materia: "sql"
  tema: "select-y-where"
  nivel: "basico"
  tags: ["where", "null", "not"]
respuesta: "WHERE email IS NOT NULL"
tipo: completar
enunciado: "Selecciona los usuarios de la tabla 'registro' que tienen un correo electrónico registrado (no vacío):\nSELECT * FROM registro {respuesta}"
pasos:
  - "Identificar la necesidad de excluir NULL."
  - "Usar el predicado 'IS NOT NULL'."
  - "Aplicar al campo correspondiente."
explicacion: "'IS NOT NULL' es el complemento directo de 'IS NULL'. Filtra todas las filas donde el campo contiene un valor válido, excluyendo los registros incompletos."
respuestas_validas:
  - "WHERE email IS NOT NULL"
```

### 19 — Veracidad de NOT LIKE
```yaml
metadata:
  materia: "sql"
  tema: "select-y-where"
  nivel: "basico"
  tags: ["where", "like", "negacion"]
respuesta: "verdadero"
tipo: vf
enunciado: "La cláusula 'WHERE nombre NOT LIKE 'J%' ' devuelve filas donde el nombre NO comienza con 'J', incluyendo los nombres NULL."
pasos:
  - "Analizar el comportamiento de 'NOT LIKE' con NULL."
  - "Recordar que 'NOT LIKE' con NULL devuelve UNKNOWN."
  - "Determinar si UNKNOWN es incluido o excluido por WHERE."
explicacion: "FALSO. 'NOT LIKE' con un valor NULL también devuelve UNKNOWN, por lo que las filas con NULL se EXCLUYEN, no se incluyen. Para incluir NULLs en una negación, se debe usar 'OR campo IS NULL'."
```

### 20 — Coincidencia de sufijo con LIKE
```yaml
metadata:
  materia: "sql"
  tema: "select-y-where"
  nivel: "basico"
  tags: ["where", "like", "sufijo"]
respuesta: "WHERE archivo LIKE '%.pdf'"
tipo: completar
enunciado: "Selecciona los documentos de la tabla 'archivos' que tengan extensión PDF:\nSELECT * FROM archivos {respuesta}"
pasos:
  - "Identificar que se busca un final de cadena."
  - "Usar '%' antes del sufijo fijo."
  - "Asegurar el patrón '%.pdf'."
explicacion: "'%.pdf' coincide con cualquier cadena que termine en '.pdf'. Es el patrón estándar para filtrar por extensión de archivo en SQL."
respuestas_validas:
  - "WHERE archivo LIKE '%.pdf'"
```

### 21 — Filtrado por igualdad múltiple implícita con IN
```yaml
metadata:
  materia: "sql"
  tema: "select-y-where"
  nivel: "basico"
  tags: ["where", "in", "igualdad"]
respuesta: "WHERE rol IN ('admin', 'moderador')"
tipo: completar
enunciado: "Obtén los usuarios de la tabla 'usuarios' que tengan el rol 'admin' o 'moderador'. Completar:\nSELECT * FROM usuarios {respuesta}"
pasos:
  - "Usar 'IN' para múltiples valores de igualdad."
  - "Listar los valores entre comillas y paréntesis."
  - "Asegurar la sintaxis correcta."
explicacion: "'IN' es la forma estándar y eficiente de comparar una columna con una lista de valores literales. Es preferible a 'OR rol = 'admin' OR rol = 'moderador'."
respuestas_validas:
  - "WHERE rol IN ('admin', 'moderador')"
```

### 22 — Operador de mayor que estricto
```yaml
metadata:
  materia: "sql"
  tema: "select-y-where"
  nivel: "basico"
  tags: ["where", "comparacion", "mayor_que"]
respuesta: "WHERE puntuacion > 90"
tipo: completar
enunciado: "Selecciona los estudiantes de la tabla 'notas' con una 'puntuacion' estrictamente mayor a 90:\nSELECT * FROM notas {respuesta}"
pasos:
  - "Definir la condición: estrictamente mayor."
  - "Usar el operador '>'."
  - "Aplicar al campo numérico."
explicacion: "El operador '>' excluye el valor límite (90). Incluye 90.01 pero no 90. Es esencial para criterios de excelencia estricta."
respuestas_validas:
  - "WHERE puntuacion > 90"
```

### 23 — Veracidad de BETWEEN con fechas
```yaml
metadata:
  materia: "sql"
  tema: "select-y-where"
  nivel: "basico"
  tags: ["where", "between", "fechas"]
respuesta: "verdadero"
tipo: vf
enunciado: "El operador 'BETWEEN' funciona correctamente con tipos de datos de fecha, incluyendo los límites de inicio y fin."
pasos:
  - "Verificar la compatibilidad de tipos de BETWEEN."
  - "Confirmar que soporta fechas."
  - "Recordar que es inclusivo."
explicacion: "SÍ, BETWEEN es compatible con fechas. 'WHERE fecha BETWEEN '2023-01-01' AND '2023-12-31'' incluye ambas fechas. Es la forma estándar para rangos temporales."
```

### 24 — Filtrado por cadena vacía vs NULL
```yaml
metadata:
  materia: "sql"
  tema: "select-y-where"
  nivel: "basico"
  tags: ["where", "cadena", "vacía"]
respuesta: "WHERE descripcion = ''"
tipo: completar
enunciado: "Selecciona los productos de la tabla 'items' que tienen una descripción explícitamente vacía (cadena de longitud cero), no NULL:\nSELECT * FROM items {respuesta}"
pasos:
  - "Diferenciar NULL de cadena vacía."
  - "Usar '=' para comparar con cadena vacía."
  - "Usar comillas simples adyacentes para cadena vacía."
explicacion: "NULL es 'sin valor'. '' es un valor de cadena de longitud cero. Son distintos en SQL. Para filtrar cadenas vacías, se usa '=' con comillas vacías."
respuestas_validas:
  - "WHERE descripcion = ''"
```

### 25 — Combinación de AND y OR con precedencia
```yaml
metadata:
  materia: "sql"
  tema: "select-y-where"
  nivel: "basico"
  tags: ["where", "logica", "complejo"]
respuesta: "WHERE (edad > 18 AND activo = 1) OR rol = 'admin'"
tipo: completar
enunciado: "Selecciona usuarios que sean mayores de 18 Y activos, O QUE sean administradores (independientemente de la edad/estado). Completar la lógica:\nSELECT * FROM usuarios {respuesta}"
pasos:
  - "Agrupar la condición AND con paréntesis."
  - "Unir el grupo con OR a la condición simple."
  - "Asegurar que la precedencia sea la deseada."
explicacion: "Sin paréntesis, 'AND' se evaluaría primero con 'activo', dejando 'edad > 18' aislada del 'OR'. Los paréntesis garantizan que '(edad > 18 AND activo = 1)' sea una unidad lógica antes de aplicar el OR con 'rol = 'admin'."
respuestas_validas:
  - "WHERE (edad > 18 AND activo = 1) OR rol = 'admin'"
```