# SQL — Transacciones (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Qué es

```
metadata:
  materia: "sql"
  tema: "transacciones_sql"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Un grupo de instrucciones que se ejecutan todas o ninguna", "Una consulta de lectura", "Un tipo de índice", "Una copia de seguridad"]
respuesta: "Un grupo de instrucciones que se ejecutan todas o ninguna"

enunciado: "¿Qué es una transacción?"

explicacion: |
  Garantiza que los cambios relacionados queden juntos.
```

### 2 — Para qué

```
metadata:
  materia: "sql"
  tema: "transacciones_sql"
  nivel: "basico"
  tags: ["ejemplo"]

tipo: mc
opciones_explicitas: ["Porque son dos cambios que deben ocurrir juntos o no ocurrir", "Para que sea más rápida", "Para que no se registre", "Por costumbre"]
respuesta: "Porque son dos cambios que deben ocurrir juntos o no ocurrir"

enunciado: "¿Por qué una transferencia bancaria debe hacerse en una transacción?"

explicacion: |
  Si falla el segundo cambio sin transacción, el dinero se pierde.
```

### 3 — Confirmar

```
metadata:
  materia: "sql"
  tema: "transacciones_sql"
  nivel: "basico"
  tags: ["commit"]

tipo: mc
opciones_explicitas: ["COMMIT", "SAVE", "END ONLY", "APPLY"]
respuesta: "COMMIT"

enunciado: "¿Qué instrucción confirma una transacción?"

explicacion: |
  Después del `COMMIT` los cambios son definitivos.
```

### 4 — Deshacer

```
metadata:
  materia: "sql"
  tema: "transacciones_sql"
  nivel: "basico"
  tags: ["rollback"]

tipo: mc
opciones_explicitas: ["ROLLBACK", "UNDO", "CANCEL", "REVERT FILE"]
respuesta: "ROLLBACK"

enunciado: "¿Qué instrucción deshace todos los cambios desde el inicio de la transacción?"

explicacion: |
  Vuelve al estado anterior al `BEGIN`.
```

### 5 — Iniciar

```
metadata:
  materia: "sql"
  tema: "transacciones_sql"
  nivel: "basico"
  tags: ["begin"]

tipo: mc
opciones_explicitas: ["`BEGIN` o `START TRANSACTION`", "`OPEN`", "`TRANSACTION ON`", "`LOCK ALL`"]
respuesta: "`BEGIN` o `START TRANSACTION`"

enunciado: "¿Cómo se inicia una transacción?"

explicacion: |
  Depende del motor; ambos son muy comunes.
```

### 6 — Corte antes del commit

```
metadata:
  materia: "sql"
  tema: "transacciones_sql"
  nivel: "intermedio"
  tags: ["atomicidad"]

tipo: mc
opciones_explicitas: ["Se descartan", "Se guardan igual", "Se guardan a medias", "Se duplican"]
respuesta: "Se descartan"

enunciado: "Si se corta la conexión antes del `COMMIT`, ¿qué pasa con los cambios?"

explicacion: |
  Es la atomicidad en acción.
```

### 7 — Autocommit

```
metadata:
  materia: "sql"
  tema: "transacciones_sql"
  nivel: "intermedio"
  tags: ["autocommit"]

tipo: mc
opciones_explicitas: ["Se confirma automáticamente", "Queda pendiente", "Se descarta", "Necesita `ROLLBACK`"]
respuesta: "Se confirma automáticamente"

enunciado: "Con autocommit activado, ¿qué ocurre al ejecutar un `UPDATE` suelto?"

explicacion: |
  Para agrupar instrucciones hay que abrir la transacción explícitamente.
```

### 8 — Atomicidad

```
metadata:
  materia: "sql"
  tema: "transacciones_sql"
  nivel: "basico"
  tags: ["acid"]

tipo: mc
opciones_explicitas: ["Atomicidad: todo o nada", "Aislamiento", "Almacenamiento", "Autenticación"]
respuesta: "Atomicidad: todo o nada"

enunciado: "¿Qué significa la A de ACID?"

explicacion: |
  El aislamiento es la I.
```

### 9 — Consistencia

```
metadata:
  materia: "sql"
  tema: "transacciones_sql"
  nivel: "intermedio"
  tags: ["acid"]

tipo: mc
opciones_explicitas: ["Que los datos pasen de un estado válido a otro, respetando las restricciones", "Que las consultas sean rápidas", "Que haya copias", "Que no haya usuarios"]
respuesta: "Que los datos pasen de un estado válido a otro, respetando las restricciones"

enunciado: "¿Qué garantiza la consistencia?"

explicacion: |
  Una transacción que viola una restricción se rechaza.
```

### 10 — Aislamiento

```
metadata:
  materia: "sql"
  tema: "transacciones_sql"
  nivel: "basico"
  tags: ["acid"]

tipo: mc
opciones_explicitas: ["Que las transacciones simultáneas no se estorben", "Que los datos se cifren", "Que las tablas sean únicas", "Que haya índices"]
respuesta: "Que las transacciones simultáneas no se estorben"

enunciado: "¿Qué garantiza el aislamiento?"

explicacion: |
  Cada una actúa como si estuviera sola (según el nivel).
```

### 11 — Durabilidad

```
metadata:
  materia: "sql"
  tema: "transacciones_sql"
  nivel: "basico"
  tags: ["acid"]

tipo: mc
opciones_explicitas: ["Que lo confirmado sobreviva a una caída del sistema", "Que las filas sean permanentes siempre", "Que no se pueda borrar nada", "Que no haya `NULL`"]
respuesta: "Que lo confirmado sobreviva a una caída del sistema"

enunciado: "¿Qué garantiza la durabilidad?"

explicacion: |
  Se logra con registros de transacciones (logs) escritos en disco.
```

### 12 — Lectura sucia

```
metadata:
  materia: "sql"
  tema: "transacciones_sql"
  nivel: "intermedio"
  tags: ["concurrencia"]

tipo: mc
opciones_explicitas: ["Leer datos que otra transacción modificó pero aún no confirmó", "Leer una tabla vacía", "Leer con un índice", "Leer dos veces"]
respuesta: "Leer datos que otra transacción modificó pero aún no confirmó"

enunciado: "¿Qué es una lectura sucia?"

explicacion: |
  Si esa transacción hace `ROLLBACK`, se leyó un dato que nunca existió.
```

### 13 — Lectura no repetible

```
metadata:
  materia: "sql"
  tema: "transacciones_sql"
  nivel: "avanzado"
  tags: ["concurrencia"]

tipo: mc
opciones_explicitas: ["Leer la misma fila dos veces y obtener valores distintos", "Leer una fila que no existe", "Una consulta lenta", "Leer sin permisos"]
respuesta: "Leer la misma fila dos veces y obtener valores distintos"

enunciado: "¿Qué es una lectura no repetible?"

explicacion: |
  Otra transacción la modificó y confirmó entre las dos lecturas.
```

### 14 — Niveles

```
metadata:
  materia: "sql"
  tema: "transacciones_sql"
  nivel: "intermedio"
  tags: ["aislamiento"]

tipo: mc
opciones_explicitas: ["Qué fenómenos de concurrencia se permiten", "Cuánto espacio ocupan los datos", "Qué usuarios existen", "El orden de las tablas"]
respuesta: "Qué fenómenos de concurrencia se permiten"

enunciado: "¿Qué controlan los niveles de aislamiento?"

explicacion: |
  Más aislamiento da más seguridad y menos concurrencia.
```

### 15 — Bloqueos

```
metadata:
  materia: "sql"
  tema: "transacciones_sql"
  nivel: "basico"
  tags: ["bloqueos"]

tipo: mc
opciones_explicitas: ["Para que otras transacciones no las cambien a la vez", "Para ocultarlas", "Para borrarlas", "Para ordenarlas"]
respuesta: "Para que otras transacciones no las cambien a la vez"

enunciado: "¿Para qué bloquea filas el motor mientras se modifican?"

explicacion: |
  Las demás esperan hasta que la transacción termine.
```

### 16 — Deadlock

```
metadata:
  materia: "sql"
  tema: "transacciones_sql"
  nivel: "intermedio"
  tags: ["deadlock"]

tipo: mc
opciones_explicitas: ["Dos transacciones que se esperan mutuamente y no pueden avanzar", "Un error de sintaxis", "Una tabla vacía", "Un índice duplicado"]
respuesta: "Dos transacciones que se esperan mutuamente y no pueden avanzar"

enunciado: "¿Qué es un deadlock?"

explicacion: |
  El motor aborta una y la aplicación debe reintentar.
```

### 17 — Evitar deadlocks

```
metadata:
  materia: "sql"
  tema: "transacciones_sql"
  nivel: "avanzado"
  tags: ["deadlock"]

tipo: mc
opciones_explicitas: ["Tocar las tablas siempre en el mismo orden y mantener las transacciones cortas", "Hacer transacciones largas", "Tocar las tablas al azar", "Desactivar los bloqueos"]
respuesta: "Tocar las tablas siempre en el mismo orden y mantener las transacciones cortas"

enunciado: "¿Cuál es una buena práctica para reducir deadlocks?"

explicacion: |
  Un orden consistente evita las esperas circulares.
```

### 18 — Transacción larga

```
metadata:
  materia: "sql"
  tema: "transacciones_sql"
  nivel: "basico"
  tags: ["buenas practicas"]

tipo: mc
opciones_explicitas: ["Porque mantiene bloqueos y frena a los demás", "Porque se borra sola", "Porque consume menos", "Porque no se puede"]
respuesta: "Porque mantiene bloqueos y frena a los demás"

enunciado: "¿Por qué no conviene dejar una transacción abierta mientras se espera al usuario?"

explicacion: |
  Las transacciones deben ser lo más cortas posible.
```

### 19 — Savepoint

```
metadata:
  materia: "sql"
  tema: "transacciones_sql"
  nivel: "avanzado"
  tags: ["savepoint"]

tipo: mc
opciones_explicitas: ["Deshacer solo lo hecho desde el punto de guardado", "Cancelar toda la base", "Reiniciar el servidor", "Confirmar parcialmente"]
respuesta: "Deshacer solo lo hecho desde el punto de guardado"

enunciado: "¿Qué permite `ROLLBACK TO a` (con `SAVEPOINT a`)?"

explicacion: |
  La transacción sigue abierta.
```

### 20 — Una instrucción

```
metadata:
  materia: "sql"
  tema: "transacciones_sql"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf
respuesta: verdadero

enunciado: "Un solo `UPDATE` ya es atómico, aunque no esté en una transacción explícita."

explicacion: |
  Cada instrucción individual se ejecuta como una unidad (se confirma o se descarta completa).
```

