# DBA — Bases de datos NoSQL (cuestionario, 27 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — NoSQL

```
metadata:
  materia: "dba"
  tema: "bases_de_datos_nosql"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["\"No solo SQL\": bases que no se limitan al modelo relacional de tablas", "Sin consultas", "Sin datos", "Sin servidor"]
respuesta: "\"No solo SQL\": bases que no se limitan al modelo relacional de tablas"

enunciado: "¿Qué significa NoSQL?"

explicacion: |
  Resuelven necesidades concretas.
```

### 2 — No mejor

```
metadata:
  materia: "dba"
  tema: "bases_de_datos_nosql"
  nivel: "basico"
  tags: ["comparacion"]

tipo: mc
opciones_explicitas: ["No: son herramientas distintas, y muchas aplicaciones usan ambas", "Sí siempre", "Solo en la nube", "Solo en la web"]
respuesta: "No: son herramientas distintas, y muchas aplicaciones usan ambas"

enunciado: "¿Es NoSQL mejor que SQL?"

explicacion: |
  Se elige según el problema.
```

### 3 — Tipos

```
metadata:
  materia: "dba"
  tema: "bases_de_datos_nosql"
  nivel: "basico"
  tags: ["tipos"]

tipo: mc
opciones_explicitas: ["De documentos", "De tablas relacionales", "De hojas de cálculo", "De imágenes"]
respuesta: "De documentos"

enunciado: "¿Cuál es un tipo de base NoSQL?"

explicacion: |
  También clave-valor, columnas y grafos.
```

### 4 — Mongo

```
metadata:
  materia: "dba"
  tema: "bases_de_datos_nosql"
  nivel: "basico"
  tags: ["mongodb"]

tipo: mc
opciones_explicitas: ["De documentos", "Clave-valor", "De grafos", "Relacional"]
respuesta: "De documentos"

enunciado: "¿Qué tipo de base es MongoDB?"

explicacion: |
  Guarda documentos tipo JSON.
```

### 5 — Redis

```
metadata:
  materia: "dba"
  tema: "bases_de_datos_nosql"
  nivel: "basico"
  tags: ["redis"]

tipo: mc
opciones_explicitas: ["Caché, sesiones y contadores (clave-valor)", "Redes sociales", "Informes complejos", "Banca"]
respuesta: "Caché, sesiones y contadores (clave-valor)"

enunciado: "¿Para qué se usa típicamente Redis?"

explicacion: |
  Es muy rápido, en memoria.
```

### 6 — Grafos

```
metadata:
  materia: "dba"
  tema: "bases_de_datos_nosql"
  nivel: "basico"
  tags: ["grafos"]

tipo: mc
opciones_explicitas: ["De grafos", "De archivos", "Clave-valor", "Columnas anchas"]
respuesta: "De grafos"

enunciado: "¿Qué tipo de base conviene para redes sociales y recomendaciones?"

explicacion: |
  Como Neo4j.
```

### 7 — Cassandra

```
metadata:
  materia: "dba"
  tema: "bases_de_datos_nosql"
  nivel: "intermedio"
  tags: ["cassandra"]

tipo: mc
opciones_explicitas: ["De columnas anchas", "De documentos", "De grafos", "Relacional"]
respuesta: "De columnas anchas"

enunciado: "¿Qué tipo de base es Cassandra?"

explicacion: |
  Se usa con enormes volúmenes.
```

### 8 — Documento

```
metadata:
  materia: "dba"
  tema: "bases_de_datos_nosql"
  nivel: "basico"
  tags: ["documento"]

tipo: mc
opciones_explicitas: ["Una estructura tipo JSON que agrupa datos relacionados", "Un archivo de Word", "Una tabla", "Un índice"]
respuesta: "Una estructura tipo JSON que agrupa datos relacionados"

enunciado: "¿Qué es un documento en MongoDB?"

explicacion: |
  Puede tener arreglos y objetos anidados.
```

### 9 — Colección

```
metadata:
  materia: "dba"
  tema: "bases_de_datos_nosql"
  nivel: "basico"
  tags: ["coleccion"]

tipo: mc
opciones_explicitas: ["A una tabla, pero sin esquema fijo", "A una base", "A un índice", "A una clave"]
respuesta: "A una tabla, pero sin esquema fijo"

enunciado: "¿A qué se parece una colección?"

explicacion: |
  Contiene documentos.
```

### 10 — Id

```
metadata:
  materia: "dba"
  tema: "bases_de_datos_nosql"
  nivel: "basico"
  tags: ["id"]

tipo: mc
opciones_explicitas: ["Su `_id`", "Su nombre", "Su tamaño", "Su fecha"]
respuesta: "Su `_id`"

enunciado: "¿Qué identifica a un documento?"

explicacion: |
  Es único dentro de la colección.
```

### 11 — Insert

```
metadata:
  materia: "dba"
  tema: "bases_de_datos_nosql"
  nivel: "basico"
  tags: ["insert"]

tipo: mc
opciones_explicitas: ["Inserta un documento en la colección `alumnos`", "Lo borra", "Lo consulta", "Crea un índice"]
respuesta: "Inserta un documento en la colección `alumnos`"

enunciado: "¿Qué hace `db.alumnos.insertOne({{...}})`?"

explicacion: |
  Es el equivalente de `INSERT`.
```

### 12 — Find

```
metadata:
  materia: "dba"
  tema: "bases_de_datos_nosql"
  nivel: "basico"
  tags: ["find"]

tipo: mc
opciones_explicitas: ["Busca los alumnos del curso 3A", "Los borra", "Los inserta", "Los cifra"]
respuesta: "Busca los alumnos del curso 3A"

enunciado: "¿Qué hace `db.alumnos.find({{ curso: \"3A\" }})`?"

explicacion: |
  Equivale a un `SELECT ... WHERE`.
```

### 13 — Incrustar

```
metadata:
  materia: "dba"
  tema: "bases_de_datos_nosql"
  nivel: "basico"
  tags: ["incrustar"]

tipo: mc
opciones_explicitas: ["Anidar los datos que se leen juntos dentro del mismo documento", "Referenciar", "Borrar", "Cifrar"]
respuesta: "Anidar los datos que se leen juntos dentro del mismo documento"

enunciado: "¿Qué es incrustar datos en un documento?"

explicacion: |
  Evita `JOIN`s.
```

### 14 — Referenciar

```
metadata:
  materia: "dba"
  tema: "bases_de_datos_nosql"
  nivel: "basico"
  tags: ["referenciar"]

tipo: mc
opciones_explicitas: ["Guardar el identificador de otro documento", "Copiar el documento", "Borrarlo", "Cifrarlo"]
respuesta: "Guardar el identificador de otro documento"

enunciado: "¿Qué significa referenciar?"

explicacion: |
  Es parecido a una clave foránea.
```

### 15 — Modelado

```
metadata:
  materia: "dba"
  tema: "bases_de_datos_nosql"
  nivel: "intermedio"
  tags: ["modelado"]

tipo: mc
opciones_explicitas: ["Según las consultas que hará la aplicación", "Siempre normalizando", "Al azar", "Según el color"]
respuesta: "Según las consultas que hará la aplicación"

enunciado: "¿Cómo se modela en NoSQL de documentos?"

explicacion: |
  En SQL se normaliza primero.
```

### 16 — ACID

```
metadata:
  materia: "dba"
  tema: "bases_de_datos_nosql"
  nivel: "basico"
  tags: ["acid"]

tipo: mc
opciones_explicitas: ["ACID: atomicidad, consistencia, aislamiento y durabilidad", "BASE", "CAP", "NoSQL"]
respuesta: "ACID: atomicidad, consistencia, aislamiento y durabilidad"

enunciado: "¿Qué priorizan tradicionalmente las bases relacionales?"

explicacion: |
  Garantizan integridad estricta.
```

### 17 — BASE

```
metadata:
  materia: "dba"
  tema: "bases_de_datos_nosql"
  nivel: "intermedio"
  tags: ["base"]

tipo: mc
opciones_explicitas: ["Que las copias tardan un tiempo en coincidir", "Que no coinciden nunca", "Que son siempre iguales", "Que no hay copias"]
respuesta: "Que las copias tardan un tiempo en coincidir"

enunciado: "¿Qué significa consistencia eventual?"

explicacion: |
  Se prioriza la disponibilidad.
```

### 18 — CAP

```
metadata:
  materia: "dba"
  tema: "bases_de_datos_nosql"
  nivel: "avanzado"
  tags: ["cap"]

tipo: mc
opciones_explicitas: ["Ante una partición de red, no se puede garantizar a la vez consistencia y disponibilidad", "Todo se puede", "No hay particiones", "La consistencia es opcional siempre"]
respuesta: "Ante una partición de red, no se puede garantizar a la vez consistencia y disponibilidad"

enunciado: "¿Qué dice el teorema CAP?"

explicacion: |
  Hay que elegir.
```

### 19 — AP

```
metadata:
  materia: "dba"
  tema: "bases_de_datos_nosql"
  nivel: "avanzado"
  tags: ["cap"]

tipo: mc
opciones_explicitas: ["Responder siempre, aunque algunos datos estén desactualizados", "Datos siempre correctos", "No responder", "No replicar"]
respuesta: "Responder siempre, aunque algunos datos estén desactualizados"

enunciado: "¿Qué prefiere un sistema AP?"

explicacion: |
  CP prefiere la consistencia.
```

### 20 — Difusa

```
metadata:
  materia: "dba"
  tema: "bases_de_datos_nosql"
  nivel: "intermedio"
  tags: ["actualidad"]

tipo: mc
opciones_explicitas: ["Se difuminan: ambos ofrecen funciones del otro", "Se agrandan", "No cambian", "Desaparecen las SQL"]
respuesta: "Se difuminan: ambos ofrecen funciones del otro"

enunciado: "¿Qué ocurre hoy con las diferencias entre SQL y NoSQL?"

explicacion: |
  Hay NoSQL con transacciones y SQL que escalan.
```

### 21 — Réplicas

```
metadata:
  materia: "dba"
  tema: "bases_de_datos_nosql"
  nivel: "basico"
  tags: ["replicacion"]

tipo: mc
opciones_explicitas: ["Para tener copias y alta disponibilidad", "Para borrar", "Para ahorrar", "Para cifrar"]
respuesta: "Para tener copias y alta disponibilidad"

enunciado: "¿Para qué sirve la replicación?"

explicacion: |
  No reemplaza al backup.
```

### 22 — Sharding

```
metadata:
  materia: "dba"
  tema: "bases_de_datos_nosql"
  nivel: "intermedio"
  tags: ["sharding"]

tipo: mc
opciones_explicitas: ["Repartir los datos entre varios servidores según una clave", "Copiar a un solo servidor", "Cifrar datos", "Borrar datos"]
respuesta: "Repartir los datos entre varios servidores según una clave"

enunciado: "¿Qué es la fragmentación (sharding)?"

explicacion: |
  Permite escalar horizontalmente.
```

### 23 — Clave

```
metadata:
  materia: "dba"
  tema: "bases_de_datos_nosql"
  nivel: "avanzado"
  tags: ["sharding"]

tipo: mc
opciones_explicitas: ["Porque una mala clave concentra la carga en un solo nodo", "Porque es larga", "Porque es secreta", "Porque es única en el mundo"]
respuesta: "Porque una mala clave concentra la carga en un solo nodo"

enunciado: "¿Por qué es crítica la clave de fragmentación?"

explicacion: |
  Se llama punto caliente.
```

### 24 — Cuándo

```
metadata:
  materia: "dba"
  tema: "bases_de_datos_nosql"
  nivel: "basico"
  tags: ["cuando"]

tipo: mc
opciones_explicitas: ["Con datos sin esquema fijo, volúmenes enormes o latencia muy baja", "Para banca con transacciones complejas", "Para informes con muchos JOIN", "Siempre"]
respuesta: "Con datos sin esquema fijo, volúmenes enormes o latencia muy baja"

enunciado: "¿Cuándo conviene NoSQL?"

explicacion: |
  Y relaciones tipo red con grafos.
```

### 25 — Cuándo no

```
metadata:
  materia: "dba"
  tema: "bases_de_datos_nosql"
  nivel: "basico"
  tags: ["cuando"]

tipo: mc
opciones_explicitas: ["Con transacciones complejas, integridad estricta y consultas variadas", "Nunca", "Solo con grafos", "Solo con caché"]
respuesta: "Con transacciones complejas, integridad estricta y consultas variadas"

enunciado: "¿Cuándo conviene SQL?"

explicacion: |
  El relacional es muy sólido para eso.
```

### 26 — Seguridad

```
metadata:
  materia: "dba"
  tema: "bases_de_datos_nosql"
  nivel: "basico"
  tags: ["seguridad"]

tipo: mc
opciones_explicitas: ["Fueron robadas o borradas", "Nada", "Mejoraron", "Se cifraron solas"]
respuesta: "Fueron robadas o borradas"

enunciado: "¿Qué ocurrió con muchas bases NoSQL expuestas a internet sin autenticación?"

explicacion: |
  Hay que activar la autenticación y no exponerlas.
```

### 27 — Validación

```
metadata:
  materia: "dba"
  tema: "bases_de_datos_nosql"
  nivel: "intermedio"
  tags: ["validacion"]

tipo: mc
opciones_explicitas: ["Porque la base no obliga una estructura", "Por velocidad", "Por moda", "Por costumbre"]
respuesta: "Porque la base no obliga una estructura"

enunciado: "¿Por qué se valida en la aplicación al usar NoSQL?"

explicacion: |
  O se usan esquemas de validación.
```

