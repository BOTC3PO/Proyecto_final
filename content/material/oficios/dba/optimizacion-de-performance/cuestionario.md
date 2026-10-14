# DBA — Optimización de performance (cuestionario, 28 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Medir

```
metadata:
  materia: "dba"
  tema: "optimizacion_de_performance"
  nivel: "basico"
  tags: ["medir"]

tipo: mc
opciones_explicitas: ["Medir y encontrar el cuello de botella", "Cambiar índices al azar", "Comprar hardware", "Reiniciar"]
respuesta: "Medir y encontrar el cuello de botella"

enunciado: "¿Qué se hace antes de optimizar?"

explicacion: |
  No se optimiza por intuición.
```

### 2 — Prematura

```
metadata:
  materia: "dba"
  tema: "optimizacion_de_performance"
  nivel: "intermedio"
  tags: ["prematura"]

tipo: mc
opciones_explicitas: ["Que no conviene optimizar sin evidencia de que sea necesario", "Que nunca se optimice", "Que se optimice siempre", "Que solo se optimice al final"]
respuesta: "Que no conviene optimizar sin evidencia de que sea necesario"

enunciado: "¿Qué significa la advertencia sobre la optimización prematura?"

explicacion: |
  Se mide primero.
```

### 3 — Objetivo

```
metadata:
  materia: "dba"
  tema: "optimizacion_de_performance"
  nivel: "basico"
  tags: ["objetivo"]

tipo: mc
opciones_explicitas: ["Para saber cuándo se logró y cuándo parar", "Para decorar", "Por costumbre", "Para complicar"]
respuesta: "Para saber cuándo se logró y cuándo parar"

enunciado: "¿Por qué se define un objetivo concreto, como \"menos de 200 ms\"?"

explicacion: |
  Sin objetivo, no hay fin.
```

### 4 — Lento

```
metadata:
  materia: "dba"
  tema: "optimizacion_de_performance"
  nivel: "basico"
  tags: ["diagnostico"]

tipo: mc
opciones_explicitas: ["Que la causa no sea la red, la aplicación o el disco", "Nada", "El color del monitor", "El nombre del servidor"]
respuesta: "Que la causa no sea la red, la aplicación o el disco"

enunciado: "Antes de culpar a la base, ¿qué se verifica?"

explicacion: |
  Se descartan causas.
```

### 5 — Recursos

```
metadata:
  materia: "dba"
  tema: "optimizacion_de_performance"
  nivel: "basico"
  tags: ["recursos"]

tipo: mc
opciones_explicitas: ["CPU, memoria, disco, red o bloqueos", "El color", "El teclado", "El nombre de la base"]
respuesta: "CPU, memoria, disco, red o bloqueos"

enunciado: "¿Cuál de estos es un recurso que puede ser un cuello de botella?"

explicacion: |
  Cada uno tiene síntomas distintos.
```

### 6 — Lentas

```
metadata:
  materia: "dba"
  tema: "optimizacion_de_performance"
  nivel: "intermedio"
  tags: ["slowlog"]

tipo: mc
opciones_explicitas: ["Con el registro de consultas lentas y las estadísticas de consultas", "Con una encuesta", "Mirando la pantalla", "Con un antivirus"]
respuesta: "Con el registro de consultas lentas y las estadísticas de consultas"

enunciado: "¿Cómo se encuentran las consultas lentas?"

explicacion: |
  Por ejemplo, `pg_stat_statements`.
```

### 7 — Frecuentes

```
metadata:
  materia: "dba"
  tema: "optimizacion_de_performance"
  nivel: "intermedio"
  tags: ["frecuencia"]

tipo: mc
opciones_explicitas: ["Las que se ejecutan muchas veces, aunque cada una sea rápida", "Solo las lentas", "Ninguna", "Las que usan `LIMIT`"]
respuesta: "Las que se ejecutan muchas veces, aunque cada una sea rápida"

enunciado: "¿Qué consultas pueden costar más en total?"

explicacion: |
  El tiempo total importa.
```

### 8 — Explain

```
metadata:
  materia: "dba"
  tema: "optimizacion_de_performance"
  nivel: "basico"
  tags: ["explain"]

tipo: mc
opciones_explicitas: ["El plan de ejecución que piensa seguir el motor", "El resultado de la consulta", "Los errores", "Los usuarios"]
respuesta: "El plan de ejecución que piensa seguir el motor"

enunciado: "¿Qué muestra `EXPLAIN`?"

explicacion: |
  `EXPLAIN ANALYZE` la ejecuta.
```

### 9 — Analyze

```
metadata:
  materia: "dba"
  tema: "optimizacion_de_performance"
  nivel: "intermedio"
  tags: ["explain"]

tipo: mc
opciones_explicitas: ["Ejecuta la consulta y muestra tiempos reales", "No ejecuta", "Borra datos", "Cifra"]
respuesta: "Ejecuta la consulta y muestra tiempos reales"

enunciado: "¿Qué diferencia tiene `EXPLAIN ANALYZE`?"

explicacion: |
  Cuidado con `UPDATE` y `DELETE`.
```

### 10 — Cuidado

```
metadata:
  materia: "dba"
  tema: "optimizacion_de_performance"
  nivel: "avanzado"
  tags: ["explain"]

tipo: mc
opciones_explicitas: ["Que efectivamente modifica datos", "Ninguno", "Que no funcione", "Que sea lento"]
respuesta: "Que efectivamente modifica datos"

enunciado: "¿Qué riesgo tiene `EXPLAIN ANALYZE` en un `UPDATE`?"

explicacion: |
  Se usa en una transacción con `ROLLBACK`.
```

### 11 — Seq scan

```
metadata:
  materia: "dba"
  tema: "optimizacion_de_performance"
  nivel: "basico"
  tags: ["seqscan"]

tipo: mc
opciones_explicitas: ["Que se recorre toda la tabla, algo sospechoso", "Que usa un índice", "Que está optimizada", "Que es normal siempre"]
respuesta: "Que se recorre toda la tabla, algo sospechoso"

enunciado: "¿Qué indica un Seq Scan en una tabla grande?"

explicacion: |
  Puede faltar un índice.
```

### 12 — Estadísticas

```
metadata:
  materia: "dba"
  tema: "optimizacion_de_performance"
  nivel: "avanzado"
  tags: ["estadisticas"]

tipo: mc
opciones_explicitas: ["Que las estadísticas pueden estar desactualizadas", "Que es perfecto", "Que hay un virus", "Que falta memoria"]
respuesta: "Que las estadísticas pueden estar desactualizadas"

enunciado: "Hay una gran diferencia entre las filas estimadas y reales. ¿Qué indica?"

explicacion: |
  Se ejecuta `ANALYZE`.
```

### 13 — Índices

```
metadata:
  materia: "dba"
  tema: "optimizacion_de_performance"
  nivel: "basico"
  tags: ["indices"]

tipo: mc
opciones_explicitas: ["Las que más se usan en `WHERE`, `JOIN` y `ORDER BY`", "Todas", "Ninguna", "Solo las de texto"]
respuesta: "Las que más se usan en `WHERE`, `JOIN` y `ORDER BY`"

enunciado: "¿Qué columnas se suelen indexar?"

explicacion: |
  Cada índice tiene costo.
```

### 14 — Costo

```
metadata:
  materia: "dba"
  tema: "optimizacion_de_performance"
  nivel: "basico"
  tags: ["indices"]

tipo: mc
opciones_explicitas: ["Ralentiza las escrituras y ocupa espacio", "Ninguno", "Acelera las escrituras", "Reduce el espacio"]
respuesta: "Ralentiza las escrituras y ocupa espacio"

enunciado: "¿Qué costo tiene cada índice?"

explicacion: |
  Se eliminan los que no se usan.
```

### 15 — Función

```
metadata:
  materia: "dba"
  tema: "optimizacion_de_performance"
  nivel: "intermedio"
  tags: ["funcion"]

tipo: mc
opciones_explicitas: ["Por la función aplicada a la columna", "Por el texto", "Por el nombre", "Por el `LIMIT`"]
respuesta: "Por la función aplicada a la columna"

enunciado: "¿Por qué `WHERE LOWER(nombre) = 'ana'` no usa un índice sobre `nombre`?"

explicacion: |
  Hay índices sobre expresiones.
```

### 16 — Select estrella

```
metadata:
  materia: "dba"
  tema: "optimizacion_de_performance"
  nivel: "basico"
  tags: ["select"]

tipo: mc
opciones_explicitas: ["Porque trae datos innecesarios", "Porque es ilegal", "Porque no funciona", "Porque es corto"]
respuesta: "Porque trae datos innecesarios"

enunciado: "¿Por qué conviene evitar `SELECT *` en consultas de aplicaciones?"

explicacion: |
  Se piden solo las columnas necesarias.
```

### 17 — Offset

```
metadata:
  materia: "dba"
  tema: "optimizacion_de_performance"
  nivel: "intermedio"
  tags: ["offset"]

tipo: mc
opciones_explicitas: ["Recorre y descarta muchas filas", "Es más rápido", "No devuelve nada", "Cifra datos"]
respuesta: "Recorre y descarta muchas filas"

enunciado: "¿Qué problema tiene un `OFFSET` muy grande?"

explicacion: |
  La paginación por clave es mejor.
```

### 18 — N+1

```
metadata:
  materia: "dba"
  tema: "optimizacion_de_performance"
  nivel: "intermedio"
  tags: ["n+1"]

tipo: mc
opciones_explicitas: ["Una consulta que trae N filas y luego N consultas más, una por fila", "Un error de memoria", "Un tipo de índice", "Una copia"]
respuesta: "Una consulta que trae N filas y luego N consultas más, una por fila"

enunciado: "¿Qué es el problema N+1?"

explicacion: |
  Se resuelve con `JOIN` o carga en bloque.
```

### 19 — Lotes

```
metadata:
  materia: "dba"
  tema: "optimizacion_de_performance"
  nivel: "basico"
  tags: ["lotes"]

tipo: mc
opciones_explicitas: ["Una instrucción o transacción en lote", "Una por una", "Una por cada conexión", "Una por cada minuto"]
respuesta: "Una instrucción o transacción en lote"

enunciado: "¿Qué es mejor para insertar muchas filas?"

explicacion: |
  Reduce viajes y costos.
```

### 20 — Vacuum

```
metadata:
  materia: "dba"
  tema: "optimizacion_de_performance"
  nivel: "intermedio"
  tags: ["vacuum"]

tipo: mc
opciones_explicitas: ["Para liberar el espacio muerto dejado por filas borradas o modificadas", "Para borrar datos", "Para crear índices", "Para copiar"]
respuesta: "Para liberar el espacio muerto dejado por filas borradas o modificadas"

enunciado: "¿Para qué sirve `VACUUM` en PostgreSQL?"

explicacion: |
  Es normalmente automático.
```

### 21 — Autovacuum

```
metadata:
  materia: "dba"
  tema: "optimizacion_de_performance"
  nivel: "intermedio"
  tags: ["autovacuum"]

tipo: mc
opciones_explicitas: ["No", "Sí", "Siempre", "Solo de noche"]
respuesta: "No"

enunciado: "¿Se recomienda desactivar el autovacuum?"

explicacion: |
  Evita crecimiento y lentitud.
```

### 22 — Pool

```
metadata:
  materia: "dba"
  tema: "optimizacion_de_performance"
  nivel: "basico"
  tags: ["pool"]

tipo: mc
opciones_explicitas: ["Reutiliza conexiones en lugar de abrir una por petición", "Cifra conexiones", "Borra conexiones", "Cuenta usuarios"]
respuesta: "Reutiliza conexiones en lugar de abrir una por petición"

enunciado: "¿Qué hace un grupo de conexiones (connection pool)?"

explicacion: |
  Por ejemplo, PgBouncer.
```

### 23 — Caché

```
metadata:
  materia: "dba"
  tema: "optimizacion_de_performance"
  nivel: "basico"
  tags: ["cache"]

tipo: mc
opciones_explicitas: ["Lo que se pide mucho y cambia poco", "Todo", "Nada", "Lo que cambia siempre"]
respuesta: "Lo que se pide mucho y cambia poco"

enunciado: "¿Qué se pone en una caché?"

explicacion: |
  Y se invalida cuando cambia.
```

### 24 — Réplicas

```
metadata:
  materia: "dba"
  tema: "optimizacion_de_performance"
  nivel: "intermedio"
  tags: ["replicas"]

tipo: mc
opciones_explicitas: ["Para repartir las lecturas", "Para repartir las escrituras", "Para borrar datos", "Para hacer copias lógicas"]
respuesta: "Para repartir las lecturas"

enunciado: "¿Para qué sirven las réplicas de lectura?"

explicacion: |
  Pueden tardar en actualizarse.
```

### 25 — Particionado

```
metadata:
  materia: "dba"
  tema: "optimizacion_de_performance"
  nivel: "intermedio"
  tags: ["particionado"]

tipo: mc
opciones_explicitas: ["Dividirla en partes, por ejemplo por fecha", "Cifrarla", "Borrarla", "Copiarla"]
respuesta: "Dividirla en partes, por ejemplo por fecha"

enunciado: "¿Qué es particionar una tabla enorme?"

explicacion: |
  Acelera consultas y mantenimiento.
```

### 26 — Primero

```
metadata:
  materia: "dba"
  tema: "optimizacion_de_performance"
  nivel: "basico"
  tags: ["escalar"]

tipo: mc
opciones_explicitas: ["Arreglar consultas e índices", "Comprar siempre más", "Reiniciar", "Nada"]
respuesta: "Arreglar consultas e índices"

enunciado: "¿Qué conviene antes de escalar el hardware?"

explicacion: |
  Suele ser más barato y efectivo.
```

### 27 — Transacciones

```
metadata:
  materia: "dba"
  tema: "optimizacion_de_performance"
  nivel: "basico"
  tags: ["bloqueos"]

tipo: mc
opciones_explicitas: ["Que sean cortas", "Que sean largas", "Que no existan", "Que se abran siempre"]
respuesta: "Que sean cortas"

enunciado: "¿Qué conviene con las transacciones para evitar bloqueos?"

explicacion: |
  No dejarlas abiertas mientras se espera al usuario.
```

### 28 — Método

```
metadata:
  materia: "dba"
  tema: "optimizacion_de_performance"
  nivel: "basico"
  tags: ["metodo"]

tipo: mc
opciones_explicitas: ["Medir, cambiar una cosa, volver a medir y documentar", "Cambiar todo", "Adivinar", "Esperar"]
respuesta: "Medir, cambiar una cosa, volver a medir y documentar"

enunciado: "¿Cuál es el método para optimizar?"

explicacion: |
  Hasta alcanzar el objetivo.
```

