# SQL — Normalización de esquema (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Qué es

```
metadata:
  materia: "sql"
  tema: "normalizacion_de_esquema"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Organizar los datos en tablas para evitar redundancias y anomalías", "Cifrar las tablas", "Ordenar las filas alfabéticamente", "Hacer copias de seguridad"]
respuesta: "Organizar los datos en tablas para evitar redundancias y anomalías"

enunciado: "¿Qué es normalizar un esquema de base de datos?"

explicacion: |
  Cada dato debería estar en un solo lugar.
```

### 2 — Redundancia

```
metadata:
  materia: "sql"
  tema: "normalizacion_de_esquema"
  nivel: "basico"
  tags: ["anomalias"]

tipo: mc
opciones_explicitas: ["Que las copias dejen de coincidir al modificar una y olvidar las otras", "Que ocupe poco espacio", "Que no se pueda ordenar", "Ninguno"]
respuesta: "Que las copias dejen de coincidir al modificar una y olvidar las otras"

enunciado: "¿Qué riesgo tiene repetir el teléfono de un cliente en muchas filas?"

explicacion: |
  Es una anomalía de modificación.
```

### 3 — Celda con lista

```
metadata:
  materia: "sql"
  tema: "normalizacion_de_esquema"
  nivel: "basico"
  tags: ["1fn"]

tipo: mc
opciones_explicitas: ["La primera (1FN): una celda debe tener un solo valor", "La tercera", "Ninguna", "La segunda"]
respuesta: "La primera (1FN): una celda debe tener un solo valor"

enunciado: "Una columna `productos` con el texto \"lápiz, goma\" ¿qué forma normal viola?"

explicacion: |
  Cada producto debe ir en su propia fila.
```

### 4 — Grupos repetidos

```
metadata:
  materia: "sql"
  tema: "normalizacion_de_esquema"
  nivel: "intermedio"
  tags: ["1fn"]

tipo: mc
opciones_explicitas: ["Columnas `telefono1`, `telefono2`, `telefono3`", "Una columna `telefono`", "Una tabla `telefonos` aparte", "Una clave primaria"]
respuesta: "Columnas `telefono1`, `telefono2`, `telefono3`"

enunciado: "¿Cuál de estos diseños viola la 1FN?"

explicacion: |
  Los grupos repetidos se pasan a otra tabla (uno a muchos).
```

### 5 — 2FN

```
metadata:
  materia: "sql"
  tema: "normalizacion_de_esquema"
  nivel: "intermedio"
  tags: ["2fn"]

tipo: mc
opciones_explicitas: ["Que cada columna dependa de toda la clave, no solo de una parte", "Que no haya claves", "Que todas las columnas sean únicas", "Que haya un índice"]
respuesta: "Que cada columna dependa de toda la clave, no solo de una parte"

enunciado: "¿Qué exige la segunda forma normal (2FN)?"

explicacion: |
  Se vuelve relevante con claves compuestas.
```

### 6 — 3FN

```
metadata:
  materia: "sql"
  tema: "normalizacion_de_esquema"
  nivel: "intermedio"
  tags: ["3fn"]

tipo: mc
opciones_explicitas: ["Que las columnas dependan solo de la clave, no de otras columnas no clave", "Que haya tres tablas", "Que no haya `NULL`", "Que todo sea único"]
respuesta: "Que las columnas dependan solo de la clave, no de otras columnas no clave"

enunciado: "¿Qué exige la tercera forma normal (3FN)?"

explicacion: |
  Ejemplo a evitar: guardar `ciudad` y `provincia` en una tabla de clientes si la provincia depende de la ciudad.
```

### 7 — Una cosa por tabla

```
metadata:
  materia: "sql"
  tema: "normalizacion_de_esquema"
  nivel: "basico"
  tags: ["regla"]

tipo: mc
opciones_explicitas: ["Cada tabla trata de una sola cosa y cada dato está en un solo lugar", "Todo en una tabla", "Una columna por tabla", "Tablas con muchos NULL"]
respuesta: "Cada tabla trata de una sola cosa y cada dato está en un solo lugar"

enunciado: "¿Cuál es la regla práctica para que una tabla esté bien diseñada?"

explicacion: |
  Clientes, pedidos y productos van en tablas distintas.
```

### 8 — Uno a muchos

```
metadata:
  materia: "sql"
  tema: "normalizacion_de_esquema"
  nivel: "basico"
  tags: ["relaciones"]

tipo: mc
opciones_explicitas: ["En `pedidos`, apuntando a `clientes`", "En `clientes`, apuntando a `pedidos`", "En ninguna", "En las dos"]
respuesta: "En `pedidos`, apuntando a `clientes`"

enunciado: "Un cliente tiene muchos pedidos. ¿Dónde va la clave foránea?"

explicacion: |
  La clave foránea va en el lado "muchos".
```

### 9 — Muchos a muchos

```
metadata:
  materia: "sql"
  tema: "normalizacion_de_esquema"
  nivel: "intermedio"
  tags: ["relaciones"]

tipo: mc
opciones_explicitas: ["Con una tabla intermedia que relaciona ambos", "Con una lista en una celda", "Con una sola tabla", "No se puede"]
respuesta: "Con una tabla intermedia que relaciona ambos"

enunciado: "Un pedido tiene muchos productos y un producto está en muchos pedidos. ¿Cómo se modela?"

explicacion: |
  Por ejemplo, `lineas_pedido (id_pedido, id_producto, cantidad)`.
```

### 10 — Clave compuesta

```
metadata:
  materia: "sql"
  tema: "normalizacion_de_esquema"
  nivel: "intermedio"
  tags: ["pk"]

tipo: mc
opciones_explicitas: ["El par (`id_pedido`, `id_producto`)", "Solo `cantidad`", "Ninguna", "Solo `id_pedido`"]
respuesta: "El par (`id_pedido`, `id_producto`)"

enunciado: "¿Cuál es una clave primaria razonable para `lineas_pedido`?"

explicacion: |
  Cada producto aparece una vez por pedido.
```

### 11 — Precio histórico

```
metadata:
  materia: "sql"
  tema: "normalizacion_de_esquema"
  nivel: "avanzado"
  tags: ["desnormalizar"]

tipo: mc
opciones_explicitas: ["Porque el precio del producto cambia y el pedido no debe cambiar", "Por ahorrar espacio", "Porque no hay otra forma", "Por requisito del lenguaje"]
respuesta: "Porque el precio del producto cambia y el pedido no debe cambiar"

enunciado: "¿Por qué el precio de la venta suele copiarse en la línea de pedido?"

explicacion: |
  Es una desnormalización consciente, para conservar el histórico.
```

### 12 — Desnormalizar

```
metadata:
  materia: "sql"
  tema: "normalizacion_de_esquema"
  nivel: "avanzado"
  tags: ["desnormalizar"]

tipo: mc
opciones_explicitas: ["Cuando hay un motivo medido, como velocidad de lectura, y se mantienen coherentes las copias", "Siempre", "Nunca", "Cuando falta tiempo"]
respuesta: "Cuando hay un motivo medido, como velocidad de lectura, y se mantienen coherentes las copias"

enunciado: "¿Cuándo se justifica desnormalizar?"

explicacion: |
  Primero se normaliza; después se desnormaliza con criterio.
```

### 13 — Anomalía de borrado

```
metadata:
  materia: "sql"
  tema: "normalizacion_de_esquema"
  nivel: "intermedio"
  tags: ["anomalias"]

tipo: mc
opciones_explicitas: ["Perder datos de un cliente al borrar su único pedido en una tabla mezclada", "Un error de sintaxis", "Un índice roto", "Una clave repetida"]
respuesta: "Perder datos de un cliente al borrar su único pedido en una tabla mezclada"

enunciado: "¿Qué es una anomalía de borrado?"

explicacion: |
  Con tablas separadas, borrar el pedido no borra al cliente.
```

### 14 — Anomalía de inserción

```
metadata:
  materia: "sql"
  tema: "normalizacion_de_esquema"
  nivel: "intermedio"
  tags: ["anomalias"]

tipo: mc
opciones_explicitas: ["No poder registrar un cliente hasta que tenga un pedido", "No poder borrar un cliente", "Tener datos duplicados", "Un `NULL` en la clave"]
respuesta: "No poder registrar un cliente hasta que tenga un pedido"

enunciado: "¿Qué es una anomalía de inserción?"

explicacion: |
  Sucede si clientes y pedidos están en la misma tabla.
```

### 15 — Dinero

```
metadata:
  materia: "sql"
  tema: "normalizacion_de_esquema"
  nivel: "basico"
  tags: ["tipos"]

tipo: mc
opciones_explicitas: ["`NUMERIC` o `DECIMAL`", "`FLOAT`", "`TEXT`", "`DATE`"]
respuesta: "`NUMERIC` o `DECIMAL`"

enunciado: "¿Qué tipo de dato conviene para guardar dinero?"

explicacion: |
  Los flotantes pueden dar errores de redondeo (0,1 + 0,2 no da exactamente 0,3).
```

### 16 — Fechas

```
metadata:
  materia: "sql"
  tema: "normalizacion_de_esquema"
  nivel: "basico"
  tags: ["tipos"]

tipo: mc
opciones_explicitas: ["Con un tipo `DATE` o `TIMESTAMP`", "Como texto libre", "Como lista", "Como número aleatorio"]
respuesta: "Con un tipo `DATE` o `TIMESTAMP`"

enunciado: "¿Cómo conviene guardar una fecha?"

explicacion: |
  Así se pueden ordenar y comparar correctamente.
```

### 17 — Correo único

```
metadata:
  materia: "sql"
  tema: "normalizacion_de_esquema"
  nivel: "basico"
  tags: ["unique"]

tipo: mc
opciones_explicitas: ["`UNIQUE`", "`CHECK`", "`DEFAULT`", "`INDEX`"]
respuesta: "`UNIQUE`"

enunciado: "¿Qué restricción impide que dos usuarios tengan el mismo correo?"

explicacion: |
  Puede combinarse con `NOT NULL`.
```

### 18 — Integridad

```
metadata:
  materia: "sql"
  tema: "normalizacion_de_esquema"
  nivel: "basico"
  tags: ["fk"]

tipo: mc
opciones_explicitas: ["Que el valor exista en la tabla referenciada", "Que sea único", "Que no sea nulo siempre", "Que esté indexado"]
respuesta: "Que el valor exista en la tabla referenciada"

enunciado: "¿Qué garantiza una clave foránea?"

explicacion: |
  Evita pedidos de clientes inexistentes.
```

### 19 — Más tablas

```
metadata:
  materia: "sql"
  tema: "normalizacion_de_esquema"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf
respuesta: falso

enunciado: "Un esquema normalizado siempre necesita menos `JOIN` que uno sin normalizar."

explicacion: |
  Normalizar reparte los datos en más tablas, y las consultas necesitan más `JOIN`.
```

### 20 — 1FN y claves

```
metadata:
  materia: "sql"
  tema: "normalizacion_de_esquema"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf
respuesta: verdadero

enunciado: "En la primera forma normal, cada fila debe poder identificarse de manera única."

explicacion: |
  Se logra con una clave primaria.
```

