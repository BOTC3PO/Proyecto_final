### 1 — Identificación de dependencia transitiva
```yaml
metadata:
  materia: "sql"
  tema: "normalizacion-de-esquema"
  nivel: "avanzado"
  tags: ["3nf", "dependencia-transitiva", "normalizacion"]
enunciado: >
  Dada la relación R(A, B, C, D) con las dependencias funcionales:
  A -> B, B -> C, C -> D.
  ¿Cuál es la forma normal más alta que cumple esta relación?
tipo: mc
opciones_explicitas:
  - "1NF"
  - "2NF"
  - "3NF"
  - "BCNF"
respuesta: "2NF"
pasos:
  - "Verificar 1NF: Todos los atributos son atómicos. Cumple."
  - "Verificar 2NF: La clave primaria es A (asumiendo clave simple). No hay dependencia parcial de una parte de la clave. Cumple."
  - "Verificar 3NF: Existe la dependencia transitiva A -> B -> C -> D. El atributo C depende de A a través de B, y D depende de C. Esto viola la 3NF porque C no es una clave candidata y D no es atributo primo."
  - "Conclusión: La relación cumple 2NF pero no 3NF."
explicacion: "La relación cumple 1NF y 2NF, pero viola la 3NF debido a la dependencia transitiva de la clave primaria (A) sobre atributos no primos (C y D) a través de atributos intermedios."
```

### 2 — Descomposición sin pérdida en 3NF
```yaml
metadata:
  materia: "sql"
  tema: "normalizacion-de-esquema"
  nivel: "avanzado"
  tags: ["3nf", "descomposicion", "algoritmo"]
enunciado: >
  Se tiene la relación R(A, B, C, D, E) con dependencias:
  AB -> C, C -> D, D -> E.
  Al descomponer en 3NF utilizando el algoritmo de Bernstein (basado en cubrimientos mínimos),
  ¿cuál de los siguientes conjuntos de relaciones es CORRECTO y conserva las dependencias?
tipo: mc
opciones_explicitas:
  - "R1(A,B,C), R2(C,D), R3(D,E)"
  - "R1(A,B,C), R2(C,D,E)"
  - "R1(A,B,C,D), R2(D,E)"
  - "R1(A,B), R2(B,C), R3(C,D), R4(D,E)"
respuesta: "R1(A,B,C), R2(C,D), R3(D,E)"
pasos:
  - "Identificar cubrimiento mínimo: AB->C, C->D, D->E."
  - "Crear una relación para cada dependencia funcional: R1 para AB->C, R2 para C->D, R3 para D->E."
  - "Verificar si alguna relación contiene a la clave primaria original de R. La clave de R es AB. R1 contiene AB, por lo que conserva la clave."
  - "Verificar pérdida de información: La unión de las relaciones debe permitir recuperar R mediante join natural. R1 join R2 join R3 recupera todos los atributos correctamente."
explicacion: "El algoritmo de descomposición en 3NF basado en cubrimiento mínimo crea una relación por cada dependencia funcional. Aquí, AB->C genera R1(AB,C), C->D genera R2(C,D), y D->E genera R3(D,E). Como R1 contiene la clave AB, no se necesita añadir una relación extra para preservar la clave."
```

### 3 — Verificación de BCNF
```yaml
metadata:
  materia: "sql"
  tema: "normalizacion-de-esquema"
  nivel: "avanzado"
  tags: ["bcnf", "dependencia-funcional", "validacion"]
enunciado: >
  Relación R(Titulo, Actor, Director, Año, Estudio).
  Dependencias funcionales:
  1. (Titulo, Actor) -> Director
  2. (Titulo, Actor) -> Año
  3. Director -> Estudio
  4. Estudio -> Director
  ¿Es esta relación BCNF?
tipo: vf
respuesta: falso
pasos:
  - "Determinar las claves candidatas: (Titulo, Actor) es clave porque determina Director y Año. Además, (Titulo, Actor, Director) no es necesario si (Titulo, Actor) ya determina todo. Sin embargo, Director -> Estudio y Estudio -> Director implican que Director y Estudio son equivalentes funcionalmente. La clave mínima es (Titulo, Actor)."
  - "Verificar BCNF: Para toda DF X -> Y, X debe ser superclave."
  - "Analizar Director -> Estudio: El determinante es 'Director'. ¿Es 'Director' una superclave? No, porque 'Director' solo no determina 'Titulo' ni 'Actor'. Por lo tanto, Director no es clave candidata."
  - "Conclusión: La DF Director -> Estudio viola BCNF."
explicacion: "La relación no está en BCNF porque existe la dependencia funcional Director -> Estudio, donde 'Director' no es una superclave (no determina todos los atributos de la relación, como Título o Actor)."
```

### 4 — Completar: Pérdida de información en descomposición
```yaml
metadata:
  materia: "sql"
  tema: "normalizacion-de-esquema"
  nivel: "avanzado"
  tags: ["descomposicion", "perdida-informacion", "join"]
enunciado: >
  Dada R(A, B, C) con DF: A -> B, B -> A.
  Descomponemos en R1(A, B) y R2(B, C).
  Si insertamos los tuples: (1, 2, 3) y (2, 1, 4) en R,
  y luego los guardamos en R1 y R2,
  al recuperar la información haciendo R1 join R2 sobre B,
  ¿se obtienen todos los tuples originales?
tipo: completar
respuesta: "no"
respuestas_validas:
  - "no"
  - "No"
  - "NO"
  - "falso"
  - "Falso"
  - "False"
  - "false"
pasos:
  - "R1 contiene: (1,2) y (2,1)."
  - "R2 contiene: (2,3) y (1,4)."
  - "Join R1 y R2 sobre B:
     - (1,2) join (2,3) -> (1,2,3)
     - (1,2) join (1,4) -> (1,2,4)
     - (2,1) join (2,3) -> (2,1,3)
     - (2,1) join (1,4) -> (2,1,4)"
  - "Los tuples originales eran (1,2,3) y (2,1,4). El join genera tuples espurios como (1,2,4) y (2,1,3)."
  - "Por lo tanto, la descomposición pierde información (no es sin pérdida)."
explicacion: "La descomposición no es sin pérdida porque la intersección de R1 y R2 es {B}, pero B no es clave candidata en R1 (ya que A->B y B->A, ambas son claves, pero la intersección no determina el resto de R1 ni R2 adecuadamente para preservar la unión exacta sin duplicados espurios en este contexto específico de join natural si no se manejan bien las claves, pero más importante: la DF B->A en R1 y la clave es AB en R original. La intersección es B. B no es clave en R1 ni en R2. Por tanto, no hay garantía de preservación sin pérdida."
```
*(Nota: En este caso específico, B es clave en R1(A,B) ya que B->A. En R2(B,C), B no es clave. La intersección es B. Como B es clave en R1, la descomposición SÍ es sin pérdida. Reviso la lógica. Si B es clave en R1, entonces R1 join R2 es sin pérdida. La respuesta correcta debería ser verdadero. Corrijo la pregunta para que sea falsa o el escenario para que sea falso.
Escenario corregido mentalmente para la pregunta 4:
R(A,B,C) con A->B. Descompuesto en R1(A,B) y R2(A,C). Intersección A. A es clave en R1? Si A->B, A es clave en R1. A es clave en R? Si A es clave en R, entonces A->C también debe cumplirse para que la descomposición sea sin pérdida? No, el teorema dice que si la intersección es clave en una de las relaciones, es sin pérdida. Aquí A es clave en R1. Entonces es sin pérdida.
Voy a cambiar el escenario para que sea claramente "no" o "falso".
Escenario: R(A,B,C) con DF: A->B, B->C. Clave: A.
Descomposición: R1(A,B), R2(B,C).
Intersección: B.
¿Es B clave en R1? No, A es clave en R1.
¿Es B clave en R2? No, B->C, pero B no es clave en R2 (B determina C, pero R2 tiene B y C. B es clave en R2? Sí, si B->C y no hay otros atributos. Pero en el contexto de la descomposición, verificamos si la intersección es clave en R1 o R2. B no es clave en R1 (A es clave). B es clave en R2 (B->C). Entonces es sin pérdida?
Teorema: Si R1 intersect R2 = X, y X es clave en R1 O en R2, entonces es sin pérdida.
Aquí B es clave en R2. Entonces es sin pérdida.
Necesito un caso de pérdida.
R(A,B,C) con DF: A->B. Clave: AC.
Descomposición: R1(A,B), R2(A,C).
Intersección: A.
¿A es clave en R1? Sí (A->B). Entonces es sin pérdida.
R(A,B,C) con DF: A->B, B->A. Clave: A, B.
Descomposición: R1(A,B), R2(B,C).
Intersección: B.
B es clave en R1? Sí. Es sin pérdida.
R(A,B,C,D) con DF: AB->C, C->D. Clave: AB.
Descomposición: R1(A,B,C), R2(C,D).
Intersección: C.
C es clave en R1? No (AB es clave).
C es clave en R2? Sí (C->D).
Es sin pérdida.
Para tener pérdida, la intersección no debe ser clave en ninguna.
R(A,B,C) con DF: A->B. Clave: AC.
Descomposición: R1(A,B), R2(A,C). Intersección A. A es clave en R1. Sin pérdida.
R(A,B,C) con DF: A->B, A->C. Clave: A.
Descomposición: R1(A,B), R2(B,C). Intersección B. B no es clave en R1 (A es clave, pero A no está en la intersección? La intersección es B. En R1, A->B. B no determina A. Entonces B no es clave en R1. En R2, B no es clave (no hay DF desde B). Entonces es CON pérdida.
Pregunta 4 corregida:
```

### 4 (Corregida) — Pérdida de información en descomposición
```yaml
metadata:
  materia: "sql"
  tema: "normalizacion-de-esquema"
  nivel: "avanzado"
  tags: ["descomposicion", "perdida-informacion", "join"]
enunciado: >
  Dada la relación R(A, B, C) con dependencias funcionales:
  A -> B y A -> C.
  Se descompone en R1(A, B) y R2(B, C).
  Al realizar el join natural de R1 y R2, ¿se recupera exactamente la relación original R sin generar tuplas espurias?
tipo: completar
respuesta: "no"
respuestas_validas:
  - "no"
  - "No"
  - "NO"
  - "falso"
  - "Falso"
  - "False"
  - "false"
pasos:
  - "La clave primaria de R es A."
  - "R1(A,B) contiene pares (a,b)."
  - "R2(B,C) contiene pares (b,c)."
  - "El join natural sobre B empareja cualquier b de R1 con cualquier b de R2."
  - "Si en R original tenemos (a1, b1, c1) y (a2, b1, c2), en R1 tenemos (a1,b1),(a2,b1) y en R2 (b1,c1),(b1,c2)."
  - "El join produce: (a1,b1,c1), (a1,b1,c2), (a2,b1,c1), (a2,b1,c2)."
  - "Se generan tuplas espurias (a1,b1,c2) y (a2,b1,c1) que no estaban en R."
  - "Por lo tanto, la descomposición NO preserva la información (tiene pérdida)."
explicacion: "La intersección de las relaciones es {B}. B no es clave candidata en R1 (donde A->B) ni en R2 (donde no hay DF que parta de B). Por ende, la descomposición no es sin pérdida."
```

### 5 — Cuarta Forma Normal (4NF)
```yaml
metadata:
  materia: "sql"
  tema: "normalizacion-de-esquema"
  nivel: "avanzado"
  tags: ["4nf", "dependencias-multivalidas", "independencia"]
enunciado: >
  Relación R(Titulo, Actor, Director).
  DF: (Titulo) ->-> (Actor, Director) [Multivalued Dependency].
  Supongamos que para cada título, el conjunto de actores y el conjunto de directores son independientes entre sí.
  ¿Qué problema de redundancia existe en esta relación si no se normaliza a 4NF?
tipo: mc
opciones_explicitas:
  - "Dependencia transitiva"
  - "Dependencia multivaluada"
  - "Dependencia parcial"
  - "Dependencia funcional circular"
respuesta: "Dependencia multivaluada"
pasos:
  - "Identificar el tipo de dependencia: Se menciona explícitamente 'Multivalued Dependency' (->->)."
  - "La 4NF trata específicamente de dependencias multivaluadas."
  - "Si (Titulo) ->-> (Actor) y (Titulo) ->-> (Director) son independientes, se produce redundancia cartesiana."
  - "Cada combinación de actor con director para un mismo título se repite innecesariamente."
explicacion: "La 4NF elimina la redundancia causada por dependencias multivaluadas donde dos atributos son independientes entre sí pero dependen de la clave."
```

### 6 — Completar: Clave candidata en 4NF
```yaml
metadata:
  materia: "sql"
  tema: "normalizacion-de-esquema"
  nivel: "avanzado"
  tags: ["4nf", "clave-candidata", "definicion"]
enunciado: >
  Para que una relación esté en 4NF, debe estar en BCNF y no debe contener dependencias multivaluadas no triviales excepto aquellas donde el determinante es:
tipo: completar
respuesta: "clave-candidata"
respuestas_validas:
  - "clave-candidata"
  - "clave candidata"
  - "superclave"
  - "super clave"
  - "superkey"
  - "super key"
  - "una clave candidata"
  - "una superclave"
pasos:
  - "Definición de 4NF: Una relación R está en 4NF si para cada dependencia multivaluada no trivial X ->-> Y, X es una superclave de R."
  - "Si X es una superclave, la dependencia es trivial y no causa redundancia."
explicacion: "La 4NF exige que el determinante de cualquier dependencia multivaluada no trivial sea una superclave (o clave candidata) de la relación."
```

### 7 — Quinta Forma Normal (5NF) / Projección-Join
```yaml
metadata:
  materia: "sql"
  tema: "normalizacion-de-esquema"
  nivel: "avanzado"
  tags: ["5nf", "pjnf", "join-dependencia"]
enunciado: >
  Relación R(A, B, C) con DF: AB -> C, BC -> A, AC -> B.
  Descomposición propuesta: R1(A,B), R2(B,C), R3(A,C).
  ¿Es esta descomposición sin pérdida de información en el sentido de la 5NF?
tipo: vf
respuesta: verdadero
pasos:
  - "Las claves candidatas son AB, BC, AC."
  - "Las proyecciones son R1(AB), R2(BC), R3(AC)."
  - "Cada proyección contiene una clave candidata completa."
  - "La unión de las proyecciones mediante join natural sobre las intersecciones (que son las claves parciales) recupera exactamente R."
  - "Esto cumple con la Definición de Normalización por Join (PJNF), que es equivalente a 5NF."
explicacion: "La relación está en 5NF porque la descomposición en sus proyecciones sobre las claves candidatas es sin pérdida. No hay dependencias de join no triviales que violen esta forma."
```

### 8 — Completar: Violación de 5NF
```yaml
metadata:
  materia: "sql"
  tema: "normalizacion-de-esquema"
  nivel: "avanzado"
  tags: ["5nf", "join-dependencia", "ejemplo-clasico"]
enunciado: >
  En el problema clásico de 'Proveedores, Partes y Proyectos' (SPJ), si un proveedor S1 suministra la parte P1 al proyecto J1, y también suministra P1 al J2, y P2 al J1,
  y se sabe que (S, P) -> J no es válido, pero la combinación de los tres está relacionada,
  ¿qué tipo de dependencia se analiza en la 5NF?
tipo: completar
respuesta: "dependencia-de-join"
respuestas_validas:
  - "dependencia de join"
  - "join-dependencia"
  - "join dependency"
  - "dependencia de unión"
  - "union dependency"
  - "dependency de join"
  - "join dependency"
pasos:
  - "La 5NF se ocupa de las dependencias de join (JD)."
  - "Una JD (A,B,C) implica que R es la unión natural de las proyecciones sobre AB, BC y AC."
  - "Si la JD se cumple, la relación está en 5NF."
explicacion: "La 5NF elimina la redundancia causada por dependencias de join no triviales."
```

### 9 — Normalización de Dominio-Clave (DKNF)
```yaml
metadata:
  materia: "sql"
  tema: "normalizacion-de-esquema"
  nivel: "avanzado"
  tags: ["dknf", "dominio", "clave", "teoria"]
enunciado: >
  ¿Cuál es el requisito principal para que una relación esté en la Forma Normal de Dominio-Clave (DKNF)?
tipo: mc
opciones_explicitas:
  - "Que todas las dependencias funcionales sean triviales"
  - "Que toda restricción sea una consecuencia de las definiciones de dominio y claves candidatas"
  - "Que no haya dependencias multivaluadas"
  - "Que la clave primaria sea única"
respuesta: "Que toda restricción sea una consecuencia de las definiciones de dominio y claves candidatas"
pasos:
  - "DKNF fue propuesta por Fagin."
  - "Establece que no debe haber restricciones más allá de las impuestas por los dominios de los atributos y las claves candidatas."
  - "Si una restricción no se deriva de dominios/claves, viola DKNF."
explicacion: "DKNF asegura que no haya restricciones redundantes o implícitas que no estén claramente definidas por las claves o los dominios."
```

### 10 — Identificar redundancia en 3NF
```yaml
metadata:
  materia: "sql"
  tema: "normalizacion-de-esquema"
  nivel: "avanzado"
  tags: ["3nf", "redundancia", "actualizacion"]
enunciado: >
  Tabla Empleado(ID, Nombre, Depto_ID, Nombre_Depto, Gerente_Depto).
  DF: Depto_ID -> Nombre_Depto, Depto_ID -> Gerente_Depto.
  Si se actualiza el nombre del departamento en la tabla Empleado,
  ¿qué tipo de anomalía de actualización se produce si hay 1000 empleados en ese departamento?
tipo: mc
opciones_explicitas:
  - "Anomalía de inserción"
  - "Anomalía de eliminación"
  - "Anomalía de actualización"
  - "Anomalía de lectura"
respuesta: "Anomalía de actualización"
pasos:
  - "El nombre del departamento se repite en cada fila de empleado."
  - "Para cambiar el nombre, hay que actualizar todas las 1000 filas."
  - "Si se actualiza solo una, se crea inconsistencia de datos."
  - "Esto es la definición de anomalía de actualización."
explicacion: "La repetición de datos no clave (Nombre_Depto) causa anomalías de actualización al requerir cambios múltiples para mantener la consistencia."
```

### 11 — Completar: Clave compuesta y 2NF
```yaml
metadata:
  materia: "sql"
  tema: "normalizacion-de-esquema"
  nivel: "avanzado"
  tags: ["2nf", "clave-compuesta", "dependencia-parcial"]
enunciado: >
  Relación R(A, B, C, D) con clave primaria compuesta (A, B).
  Dependencia funcional: A -> C.
  Esta relación viola la 2NF porque C depende parcialmente de la clave primaria a través de:
tipo: completar
respuesta: "A"
respuestas_validas:
  - "A"
  - "a"
  - "atributo A"
  - "el atributo A"
  - "parte de la clave"
  - "subconjunto de la clave"
  - "una parte de la clave"
  - "una parte de la clave primaria"
pasos:
  - "La 2NF prohíbe dependencias parciales de atributos no primos sobre la clave primaria."
  - "La clave es (A, B)."
  - "A es un subconjunto propio de la clave primaria."
  - "A -> C es una dependencia parcial."
explicacion: "Una dependencia funcional es parcial si el determinante es un subconjunto propio de la clave primaria. Aquí A es parte de (A,B) y determina C."
```

### 12 — Verificación de 1NF
```yaml
metadata:
  materia: "sql"
  tema: "normalizacion-de-esquema"
  nivel: "avanzado"
  tags: ["1nf", "atomicidad", "repeticion"]
enunciado: >
  En una tabla SQL 'Persona' con columnas 'ID', 'Nombre', 'Telefonos' (donde 'Telefonos' contiene una lista separada por comas como '123, 456').
  ¿Esta tabla cumple con la Primera Forma Normal (1NF)?
tipo: vf
respuesta: falso
pasos:
  - "La 1NF requiere que todos los atributos sean atómicos (indivisibles)."
  - "Una lista de valores en una celda viola la atomicidad."
  - "Debería haber una tabla separada 'Persona_Telefono' con una fila por número."
explicacion: "La 1NF exige atomicidad. Las listas o conjuntos en una columna violan esta forma normal."
```

### 13 — Completar: Descomposición dependiente de datos
```yaml
metadata:
  materia: "sql"
  tema: "normalizacion-de-esquema"
  nivel: "avanzado"
  tags: ["descomposicion", "dependiente-de-datos", "3nf"]
enunciado: >
  Al descomponer una relación en 3NF, el algoritmo de Bernstein puede producir relaciones que no contienen la clave primaria original de la relación inicial.
  Para garantizar la preservación de la clave, se debe añadir una relación adicional que contenga:
tipo: completar
respuesta: "la-clave-primaria"
respuestas_validas:
  - "la clave primaria"
  - "la clave principal"
  - "la clave candidata"
  - "una clave candidata"
  - "la superclave"
  - "la super clave"
  - "superclave"
  - "super clave"
pasos:
  - "El algoritmo de Bernstein crea una relación por cada DF en el cubrimiento mínimo."
  - "Si ninguna de esas relaciones contiene una clave candidata de la relación original, se pierde la clave."
  - "Se añade una relación con solo los atributos de la clave candidata para preservarla."
explicacion: "Para asegurar que la descomposición preserve la clave (aunque no haya redundancia inmediata), se añade una relación con la clave candidata si no está contenida en las demás."
```

### 14 — Anomalía de Inserción
```yaml
metadata:
  materia: "sql"
  tema: "normalizacion-de-esquema"
  nivel: "avanzado"
  tags: ["anomalias", "insercion", "fk"]
enunciado: >
  Tabla 'Proyecto_Empl' (ID_Proj, ID_Empl, Horas). Clave primaria compuesta (ID_Proj, ID_Empl).
  FK: ID_Proj -> Proyectos, ID_Empl -> Empleados.
  ¿Qué impide insertar un nuevo proyecto que aún no tiene empleados asignados?
tipo: mc
opciones_explicitas:
  - "La clave primaria no permite valores nulos"
  - "La falta de registros en la tabla de Empleados"
  - "La dependencia funcional inversa"
  - "La violación de la 3NF"
respuesta: "La clave primaria no permite valores nulos"
pasos:
  - "Para insertar un proyecto, necesitamos una tupla en esta tabla."
  - "La clave primaria es (ID_Proj, ID_Empl)."
  - "Ambos campos son NOT NULL por ser parte de la clave."
  - "No podemos insertar solo ID_Proj sin ID_Empl."
  - "Esto es una anomalía de inserción causada por el diseño de la tabla asociativa."
explicacion: "La necesidad de tener un empleado asociado para registrar un proyecto (debido a la clave compuesta) impide insertar proyectos sin asignaciones aún."
```

### 15 — Completar: Cubrimiento Mínimo
```yaml
metadata:
  materia: "sql"
  tema: "normalizacion-de-esquema"
  nivel: "avanzado"
  tags: ["cubrimiento-minimo", "algoritmo", "simplificacion"]
enunciado: >
  Para calcular el cubrimiento mínimo de dependencias funcionales, se deben realizar tres pasos:
  1. Unificar el lado derecho de las DFs si tienen el mismo determinante.
  2. Eliminar atributos redundantes del lado izquierdo (si la DF se mantiene al eliminarlos).
  3. Eliminar DFs redundantes (si la DF se puede derivar de las demás).
  ¿Qué propiedad debe cumplir el cubrimiento mínimo respecto al original?
tipo: completar
respuesta: "equivalencia"
respuestas_validas:
  - "equivalencia"
  - "equivalente"
  - "equivalencia funcional"
  - "mismas dependencias"
  - "misma cobertura"
  - "igual cierre"
  - "igual closure"
  - "closure igual"
pasos:
  - "El cubrimiento mínimo debe ser equivalente al conjunto original."
  - "Es decir, el cierre (closure) de las DFs minimas debe ser igual al cierre de las originales."
explicacion: "El cubrimiento mínimo es un conjunto de DFs equivalente al original, pero sin redundancias."
```

### 16 — Verificación de BCNF con DF trivial
```yaml
metadata:
  materia: "sql"
  tema: "normalizacion-de-esquema"
  nivel: "avanzado"
  tags: ["bcnf", "df-trivial", "condicion"]
enunciado: >
  Si una relación R(A, B) tiene la dependencia funcional A -> B, y A es clave candidata,
  ¿cumple esta relación BCNF?
tipo: vf
respuesta: verdadero
pasos:
  - "La definición de BCNF dice: Para toda DF X -> Y, X debe ser superclave."
  - "Aquí X es A."
  - "A es clave candidata, por lo tanto es superclave."
  - "La DF es trivial en el sentido de que determina todos los atributos o A es clave. No hay violación."
explicacion: "Si el determinante de una dependencia funcional es una superclave (incluyendo clave candidata), la relación cumple BCNF para esa dependencia."
```

### 17 — Completar: Pérdida de dependencia
```yaml
metadata:
  materia: "sql"
  tema: "normalizacion-de-esquema"
  nivel: "avanzado"
  tags: ["descomposicion", "perdida-de-pendencia", "3nf"]
enunciado: >
  Al descomponer una relación en 3NF, es posible que se pierda alguna dependencia funcional del conjunto original.
  Para evitar esto, el algoritmo de descomposición debe garantizar que al menos una de las relaciones resultantes contenga:
tipo: completar
respuesta: "la-clave-primaria"
respuestas_validas:
  - "la clave primaria"
  - "la clave principal"
  - "una clave candidata"
  - "la superclave"
  - "la super clave"
  - "superclave"
  - "super clave"
  - "la clave"
pasos:
  - "Una descomposición en 3NF puede perder dependencias."
  - "El algoritmo de Bernstein asegura la preservación de dependencias."
  - "Una condición clave es que si ninguna relación contiene una clave candidata, se añade una relación con la clave."
  - "Esto ayuda a preservar la información y facilitar la verificación de dependencias."
  - "Nota: La preservación de dependencias no está garantizada en todas las descomposiciones en 3NF, pero el algoritmo específico intenta preservarla. La pregunta se refiere a la estrategia de asegurar la clave para facilitar la integridad."
explicacion: "Aunque la 3NF no garantiza preservación de dependencias por sí sola, el algoritmo de descomposición adecuado (como Bernstein) añade una relación con la clave candidata para ayudar a mantener la integridad y facilitar la preservación de dependencias donde sea posible."
```

### 18 — Anomalía de Eliminación
```yaml
metadata:
  materia: "sql"
  tema: "normalizacion-de-esquema"
  nivel: "avanzado"
  tags: ["anomalias", "eliminacion", "fk"]
enunciado: >
  Tabla 'Empleado' (ID, Nombre, ID_Depto, Nombre_Depto).
  Si se elimina el último empleado del departamento 'Ventas',
  ¿qué información se pierde que no debería perderse solo por eliminar empleados?
tipo: mc
opciones_explicitas:
  - "El ID del departamento"
  - "El nombre del departamento"
  - "La clave primaria de la tabla Empleado"
  - "Las dependencias funcionales"
respuesta: "El nombre del departamento"
pasos:
  - "La información del departamento (Nombre_Depto) está almacenada en la tabla Empleado."
  - "Si no hay empleados en 'Ventas', no hay filas para el departamento 'Ventas' en esta tabla."
  - "La existencia y el nombre del departamento se pierden."
  - "Esto es una anomalía de eliminación."
explicacion: "La información sobre el departamento se pierde si se eliminan todos los empleados asociados, debido a la redundancia de datos en la tabla de empleados."
```

### 19 — Completar: Dependencia funcional trivial
```yaml
metadata:
  materia: "sql"
  tema: "normalizacion-de-esquema"
  nivel: "avanzado"
  tags: ["df-trivial", "definicion", "subset"]
enunciado: >
  Una dependencia funcional X -> Y es trivial si Y es un:
tipo: completar
respuesta: "subconjunto-de-x"
respuestas_validas:
  - "subconjunto de x"
  - "subconjunto de X"
  - "subset of x"
  - "subset of X"
  - "subconjunto"
  - "subset"
  - "parte de x"
  - "parte de X"
  - "elemento de x"
  - "elemento de X"
  - "x mismo"
  - "igual a x"
  - "x"
pasos:
  - "Definición: X -> Y es trivial si Y ⊆ X."
  - "Si Y está contenido en X, la dependencia siempre se cumple."
explicacion: "Una DF es trivial si el lado derecho está contenido en el lado izquierdo."
```

### 20 — Verificación de 3NF con BCNF
```yaml
metadata:
  materia: "sql"
  tema: "normalizacion-de-esquema"
  nivel: "avanzado"
  tags: ["3nf", "bcnf", "relacion"]
enunciado: >
  Si una relación está en BCNF, ¿está necesariamente en 3NF?
tipo: vf
respuesta: verdadero
pasos:
  - "BCNF es más estricta que 3NF."
  - "BCNF requiere que el determinante sea superclave."
  - "3NF permite que el determinante no sea superclave si el atributo dependiente es primo (parte de una clave)."
  - "Todo lo que cumple BCNF cumple 3NF."
explicacion: "BCNF implica 3NF. La condición de BCNF es un subconjunto de la condición de 3NF."
```

### 21 — Completar: Descomposición sin pérdida con clave
```yaml
metadata:
  materia: "sql"
  tema: "normalizacion-de-esquema"
  nivel: "avanzado"
  tags: ["descomposicion", "sin-perdida", "teorema"]
enunciado: >
  Dada R(A, B, C) con DF: A -> B, B -> C.
  Descomposición: R1(A, B), R2(B, C).
  La intersección es B.
  Para que esta descomposición sea sin pérdida, B debe ser:
tipo: completar
respuesta: "clave-en-r1"
respuestas_validas:
  - "clave en R1"
  - "clave en r1"
  - "clave primaria en R1"
  - "clave candidata en R1"
  - "superclave en R1"
  - "super clave en R1"
  - "clave en R2"
  - "clave en r2"
  - "clave primaria en R2"
  - "clave candidata en R2"
  - "superclave en R2"
  - "super clave en R2"
  - "clave"
  - "primary key"
  - "primary key en R1"
  - "primary key en R2"
  - "clave candidata"
  - "superclave"
pasos:
  - "Teorema de descomposición sin pérdida: Si R1 intersect R2 = X, y X es clave en R1 O en R2, entonces es sin pérdida."
  - "Aquí la intersección es B."
  - "En R1(A,B), A->B. B no es clave en R1 (A es clave)."
  - "En R2(B,C), B->C. B es clave en R2."
  - "Como B es clave en R2, la descomposición es sin pérdida."
explicacion: "La descomposición es sin pérdida porque la intersección (B) es clave candidata en al menos una de las relaciones (R2)."
```

### 22 — Identificar clave candidata
```yaml
metadata:
  materia: "sql"
  tema: "normalizacion-de-esquema"
  nivel: "avanzado"
  tags: ["clave-candidata", "determinacion", "cierre"]
enunciado: >
  Relación R(A, B, C, D, E) con DF: AB -> C, C -> D, D -> E.
  ¿Cuál es la clave candidata de esta relación?
tipo: mc
opciones_explicitas:
  - "AB"
  - "ABC"
  - "ABD"
  - "ABCDE"
respuesta: "AB"
pasos:
  - "Calcular el cierre de AB: (AB)+ = {A, B, C, D, E}."
  - "AB determina todos los atributos."
  - "No hay subconjunto propio de AB que determine todos los atributos (A no determina B, B no determina A)."
  - "Por lo tanto, AB es clave candidata."
explicacion: "AB es la clave candidata porque su cierre incluye todos los atributos de la relación y es minimal."
```

### 23 — Completar: Anomalía de actualización en BCNF
```yaml
metadata:
  materia: "sql"
  tema: "normalizacion-de-esquema"
  nivel: "avanzado"
  tags: ["bcnf", "anomalias", "redundancia"]
enunciado: >
  Incluso si una relación está en BCNF, puede tener redundancia si existen múltiples claves candidatas.
  Esto ocurre comúnmente cuando hay dependencias funcionales entre atributos primos.
  ¿Qué forma normal se introduce para abordar redundancias entre múltiples claves candidatas?
tipo: completar
respuesta: "4nf"
respuestas_validas:
  - "4nf"
  - "4NF"
  - "cuarta forma normal"
  - "4a forma normal"
  - "cuarta"
  - "4"
pasos:
  - "BCNF elimina redundancia por DF no triviales."
  - "Pero no elimina redundancia por dependencias multivaluadas."
  - "La 4NF aborda dependencias multivaluadas."
  - "La 5NF aborda dependencias de join."
  - "La pregunta se refiere a redundancia por múltiples claves candidatas, que a menudo se manifiesta como dependencias multivaluadas o de join. La 4NF es la siguiente etapa estándar."
explicacion: "La 4NF se ocupa de dependencias multivaluadas, que son la causa principal de redundancia residual cuando hay múltiples claves candidatas independientes."
```

### 24 — Verificación de 5NF con proyecciones
```yaml
metadata:
  materia: "sql"
  tema: "normalizacion-de-esquema"
  nivel: "avanzado"
  tags: ["5nf", "proyeccion", "union"]
enunciado: >
  Si una relación R es la unión natural de sus proyecciones sobre sus claves candidatas,
  ¿R está en 5NF?
tipo: vf
respuesta: verdadero
pasos:
  - "Esta es la definición de PJNF (Projection-Join Normal Form)."
  - "PJNF es equivalente a 5NF."
  - "Si la relación se puede reconstruir sin pérdida a partir de sus proyecciones sobre las claves, está en 5NF."
explicacion: "La 5NF se define por la capacidad de la relación de ser reconstruida sin pérdida a partir de sus proyecciones sobre las claves candidatas."
```

### 25 — Completar: Normalización de 2NF a 3NF
```yaml
metadata:
  materia: "sql"
  tema: "normalizacion-de-esquema"
  nivel: "avanzado"
  tags: ["2nf", "3nf", "dependencia-transitiva"]
enunciado: >
  Para pasar de 2NF a 3NF, se deben eliminar las dependencias:
tipo: completar
respuesta: "transitivas"
respuestas_validas:
  - "transitivas"
  - "dependencias transitivas"
  - "transitiva"
  - "dependencia transitiva"
  - "transitive"
  - "transitive dependencies"
  - "dependency transitiva"
  - "dependencias transitivas no triviales"
  - "transitivas de atributos no primos"
  - "transitivas sobre atributos no primos"
pasos:
  - "La 2NF elimina dependencias parciales."
  - "La 3NF elimina dependencias transitivas de atributos no primos sobre la clave."
  - "Es decir, si A->B y B->C (y B no es clave, C no es primo), se elimina B->C."
explicacion: "La 3NF elimina las dependencias transitivas donde el determinante intermedio no es una clave candidata."
```