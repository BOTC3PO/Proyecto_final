# Informática — Bases de datos no relacionales (NoSQL) (cuestionario, 23 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es NoSQL

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "basico"
  tags: ["bases_de_datos", "nosql"]

tipo: mc
enunciado: "¿Qué significa el término NoSQL?"
opciones_explicitas:
  - "Bases de datos que no usan el modelo relacional de tablas (\"Not only SQL\")"
  - "Bases de datos sin ninguna estructura"
  - "Un reemplazo obligatorio de SQL"
  - "Un lenguaje de programación"
respuesta: "Bases de datos que no usan el modelo relacional de tablas (\"Not only SQL\")"

explicacion: |
  No significa que sean mejores ni que no tengan estructura.
```

### 2 — Clave-valor

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "basico"
  tags: ["bases_de_datos", "nosql"]

tipo: mc
enunciado: "¿Cómo guarda los datos una base de tipo clave-valor?"
opciones_explicitas:
  - "En pares clave y valor, como un diccionario"
  - "En tablas con filas y columnas"
  - "En nodos y relaciones"
  - "En archivos de texto"
respuesta: "En pares clave y valor, como un diccionario"

explicacion: |
  Redis es un ejemplo.
```

### 3 — Documentos

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "basico"
  tags: ["bases_de_datos", "nosql"]

tipo: mc
enunciado: "¿Qué guarda una base de datos de documentos como MongoDB?"
opciones_explicitas:
  - "Documentos tipo JSON con campos anidados"
  - "Pares clave-valor planos"
  - "Solo imágenes"
  - "Solo números"
respuesta: "Documentos tipo JSON con campos anidados"

explicacion: |
  Un documento puede incluir listas dentro del mismo registro.
```

### 4 — Grafos

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "intermedio"
  tags: ["bases_de_datos", "nosql"]

tipo: mc
enunciado: "¿Para qué problema conviene una base de datos de grafos?"
opciones_explicitas:
  - "Redes sociales y recomendaciones basadas en relaciones"
  - "Facturación contable"
  - "Almacenar archivos grandes"
  - "Cálculos matemáticos"
respuesta: "Redes sociales y recomendaciones basadas en relaciones"

explicacion: |
  Guarda nodos y relaciones entre ellos, como Neo4j.
```

### 5 — Columnar

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "intermedio"
  tags: ["bases_de_datos", "nosql"]

tipo: mc
enunciado: "¿Qué tipo de base NoSQL es Cassandra?"
opciones_explicitas:
  - "Columnar"
  - "De grafos"
  - "De clave-valor"
  - "Relacional"
respuesta: "Columnar"

explicacion: |
  Se usa para volúmenes enormes y series de tiempo.
```

### 6 — Por qué aparecieron

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "intermedio"
  tags: ["bases_de_datos", "nosql"]

tipo: mc
enunciado: "¿Qué necesidad impulsó el desarrollo de las bases NoSQL?"
opciones_explicitas:
  - "Manejar enormes volúmenes de datos y repartirlos en muchos servidores"
  - "Eliminar las computadoras personales"
  - "Evitar el uso de Internet"
  - "Reemplazar los archivos de texto"
respuesta: "Manejar enormes volúmenes de datos y repartirlos en muchos servidores"

explicacion: |
  El reparto horizontal es más fácil con modelos simples.
```

### 7 — Esquema flexible

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "intermedio"
  tags: ["bases_de_datos", "nosql"]

tipo: mc
enunciado: "¿Qué significa tener un esquema flexible?"
opciones_explicitas:
  - "Que documentos de la misma colección pueden tener campos distintos"
  - "Que la base cambia sola de tipo"
  - "Que no se pueden consultar"
  - "Que solo acepta texto"
respuesta: "Que documentos de la misma colección pueden tener campos distintos"

explicacion: |
  Pero el control de la estructura pasa a la aplicación.
```

### 8 — BASE

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "avanzado"
  tags: ["bases_de_datos", "nosql"]

tipo: mc
enunciado: "¿Qué es la consistencia eventual?"
opciones_explicitas:
  - "Que las copias de un dato pueden diferir un momento y luego convergen"
  - "Que los datos nunca cambian"
  - "Que se aplica sólo a bancos"
  - "Que todas las copias son idénticas siempre"
respuesta: "Que las copias de un dato pueden diferir un momento y luego convergen"

explicacion: |
  Es característica del modelo BASE.
```

### 9 — CAP

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "avanzado"
  tags: ["bases_de_datos", "nosql"]

tipo: mc
enunciado: "¿Qué propiedades considera el teorema CAP?"
opciones_explicitas:
  - "Consistencia, Disponibilidad y Tolerancia a particiones"
  - "Capacidad, Acceso y Precisión"
  - "Cifrado, Autenticación y Privacidad"
  - "Cálculo, Algoritmo y Programa"
respuesta: "Consistencia, Disponibilidad y Tolerancia a particiones"

explicacion: |
  En un corte de red hay que elegir entre priorizar la consistencia o la disponibilidad.
```

### 10 — Cuándo relacional

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "avanzado"
  tags: ["bases_de_datos", "nosql"]

tipo: mc
enunciado: "¿Para cuál de estos casos suele convenir más una base relacional?"
opciones_explicitas:
  - "Transacciones bancarias que exigen consistencia estricta"
  - "Un caché de sesiones web"
  - "Una red de contactos"
  - "Millones de lecturas rápidas sin relaciones"
respuesta: "Transacciones bancarias que exigen consistencia estricta"

explicacion: |
  Las transacciones ACID son su punto fuerte.
```

### 11 — Escalado horizontal

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "intermedio"
  tags: ["bases_de_datos", "nosql"]

tipo: mc
enunciado: "¿Qué es escalar horizontalmente?"
opciones_explicitas:
  - "Repartir los datos en muchas máquinas"
  - "Comprar una máquina más potente"
  - "Borrar datos antiguos"
  - "Cambiar el lenguaje de consulta"
respuesta: "Repartir los datos en muchas máquinas"

explicacion: |
  Escalar verticalmente es usar un equipo más potente.
```

### 12 — Ejemplo Redis

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "basico"
  tags: ["bases_de_datos", "nosql"]

tipo: mc
enunciado: "¿Qué tipo de base NoSQL es Redis?"
opciones_explicitas:
  - "Clave-valor"
  - "Documentos"
  - "Grafos"
  - "Columnar"
respuesta: "Clave-valor"

explicacion: |
  Se usa mucho como caché.
```

### 13 — NoSQL mejor

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "basico"
  tags: ["bases_de_datos", "nosql"]

tipo: vf
respuesta: falso

enunciado: "Las bases NoSQL son siempre mejores que las relacionales."

explicacion: |
  Son herramientas distintas para necesidades distintas.
```

### 14 — Sin estructura

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "basico"
  tags: ["bases_de_datos", "nosql"]

tipo: vf
respuesta: falso

enunciado: "NoSQL significa que los datos no tienen ninguna estructura."

explicacion: |
  Tienen estructura, aunque más flexible o distinta de las tablas.
```

### 15 — Combinar

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "intermedio"
  tags: ["bases_de_datos", "nosql"]

tipo: vf
respuesta: verdadero

enunciado: "Es común combinar bases relacionales y NoSQL en una misma aplicación."

explicacion: |
  Cada una se usa donde rinde mejor.
```

### 16 — Documento JSON

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "intermedio"
  tags: ["bases_de_datos", "nosql"]

tipo: vf
respuesta: verdadero

enunciado: "Un documento de MongoDB puede contener una lista de pedidos dentro del registro de un cliente."

explicacion: |
  Eso evita uniones pero repite información.
```

### 17 — ACID en NoSQL

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "avanzado"
  tags: ["bases_de_datos", "nosql"]

tipo: vf
respuesta: falso

enunciado: "Todas las bases NoSQL ofrecen transacciones ACID estrictas por defecto."

explicacion: |
  Muchas priorizan disponibilidad y consistencia eventual.
```

### 18 — CAP particiones

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "avanzado"
  tags: ["bases_de_datos", "nosql"]

tipo: vf
respuesta: verdadero

enunciado: "Según CAP, en un corte de comunicación entre nodos hay que elegir entre consistencia y disponibilidad."

explicacion: |
  Las particiones pueden ocurrir en cualquier red.
```

### 19 — Siglas

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "basico"
  tags: ["bases_de_datos", "nosql"]

tipo: completar
enunciado: "NoSQL suele leerse como Not only ___."
respuestas_validas:
  - "SQL"
  - "sql"

explicacion: |
  No se opone a SQL, lo complementa.
```

### 20 — Documentos 2

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "basico"
  tags: ["bases_de_datos", "nosql"]

tipo: completar
enunciado: "MongoDB es una base de datos orientada a ___."
respuestas_validas:
  - "documentos"

explicacion: |
  Guarda documentos tipo JSON.
```

### 21 — Grafos 2

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "intermedio"
  tags: ["bases_de_datos", "nosql"]

tipo: completar
enunciado: "Neo4j es una base de datos de ___."
respuestas_validas:
  - "grafos"

explicacion: |
  Guarda nodos y relaciones.
```

### 22 — Brewer

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "avanzado"
  tags: ["bases_de_datos", "nosql"]

tipo: completar
enunciado: "El teorema CAP fue propuesto por Eric ___."
respuestas_validas:
  - "Brewer"
  - "brewer"

explicacion: |
  Habla de sistemas distribuidos.
```

### 23 — Eventual

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "avanzado"
  tags: ["bases_de_datos", "nosql"]

tipo: completar
enunciado: "En el modelo BASE se acepta la consistencia ___."
respuestas_validas:
  - "eventual"

explicacion: |
  Las copias convergen con el tiempo.
```
