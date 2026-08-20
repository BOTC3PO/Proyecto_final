# Examen jefe — Domina recursión y SQL

> Logro #179. Aprobaste el parcial integrando lógica recursiva, bases de datos relacionales y requisitos del sistema. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **123 preguntas totales** en 5/5 secciones.

---

## Sección: recursividad (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "recursividad_basica"
  nivel: "basico"
  tags: ["programacion", "conceptos"]

respuesta: "recursividad"
tipo: completar
respuestas_validas: ["recursividad", "Recursividad"]

enunciado: "La capacidad de una función para llamarse a sí misma durante su ejecución se denomina ________."

explicacion: |
  La recursividad es una técnica de programación donde una función se invoca a sí misma para resolver subproblemas del problema original.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_basica"
  nivel: "basico"
  tags: ["conceptos", "terminologia"]

variables:
  es_necesario: verdadero

respuesta: verdadero
tipo: vf

enunciado: "Para evitar un bucle infinito en una función recursiva, es indispensable contar con un {es_necesario} caso base que detenga las llamadas."

explicacion: |
  Sin un caso base, la función se llamaría a sí misma indefinidamente (causando un error de desbordamiento de pila o stack overflow).
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_basica"
  nivel: "basico"
  tags: ["conceptos"]

variables:
  escenario: uno_de([
    ["el caso que detiene la función", "caso base"],
    ["la llamada a la propia función", "caso recursivo"]
  ])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["caso base", "caso recursivo", "caso infinito", "caso nulo"]

enunciado: "En una función recursiva, el componente que permite que la función se divida en problemas más pequeños se conoce como el {escenario[0]}."

explicacion: |
  El caso recursivo es la parte de la función donde se realiza la llamada recursiva, reduciendo el problema hacia el caso base.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_basica"
  nivel: "intermedio"
  tags: ["flujo_control"]

respuesta: ["Caso Base", "Caso Recursivo", "Retorno de valores"]
tipo: ordenar

opciones_explicitas: ["Caso Base", "Caso Recursivo", "Retorno de valores"]

enunciado: "Ordena los pasos lógicos que ocurren en una ejecución recursiva típica desde que se entra a la función hasta que se obtiene el resultado final:"

explicacion: |
  Primero se ejecutan las llamadas (caso recursivo) hasta alcanzar el límite (caso base), y luego los valores se devuelven hacia atrás en la pila de llamadas.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_basica"
  nivel: "basico"
  tags: ["errores", "memoria"]

respuesta: "Stack Overflow"
tipo: mc
opciones_explicitas: ["Stack Overflow", "Syntax Error", "Null Pointer Exception", "Memory Leak"]

enunciado: "Cuando una función recursiva no tiene un caso base definido correctamente, se produce un error de desbordamiento de pila conocido como ________."

explicacion: |
  Cada llamada recursiva ocupa un espacio en la pila de ejecución (stack). Si las llamadas son infinitas, la memoria asignada a la pila se agota.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_conceptos"
  nivel: "basico"
  tags: ["programacion", "conceptos"]

tipo: mc
opciones_explicitas: ["Una función que se llama a sí misma", "Una función que no tiene retorno", "Un bucle que nunca termina", "Una función que utiliza variables globales"]

enunciado: "En programación, ¿qué define técnicamente a una función recursiva?"

explicacion: |
  La recursividad ocurre cuando una función se invoca a sí misma dentro de su propio cuerpo para resolver una parte del problema.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_componentes"
  nivel: "basico"
  tags: ["logica", "estructura"]

tipo: completar
respuestas_validas: ["caso base", "caso recursivo"]

enunciado: "Para que una función recursiva no entre en un bucle infinito, es indispensable que exista un ___ que detenga las llamadas, y un ___ que reduzca el problema original."

explicacion: |
  El caso base es la condición de parada que devuelve un valor sin realizar más llamadas. El caso recursivo es donde la función se llama a sí misma con un argumento modificado.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_ejecucion"
  nivel: "intermedio"
  tags: ["algoritmos", "factorial"]

variables:
  n: 4
  resultado: 24

tipo: completar
tolerancia_abs: 0

enunciado: "Considera la siguiente función recursiva para calcular el factorial de n: \n`f(n) = if n == 0 then 1 else n * f(n-1)` \n\n¿Cuál es el valor de f({n})?"

pasos:
  - "f(4) = 4 * f(3)"
  - "f(3) = 3 * f(2)"
  - "f(2) = 2 * f(1)"
  - "f(1) = 1 * f(0)"
  - "f(0) = 1 (Caso base)"
  - "Cálculo: 4 * 3 * 2 * 1 * 1"

explicacion: |
  El resultado de 4! (factorial de 4) es 24.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_memoria"
  nivel: "intermedio"
  tags: ["memoria", "stack"]

tipo: vf

enunciado: "¿Es verdadero que cada llamada recursiva consume memoria adicional en la pila de llamadas (call stack) de la computadora?"

respuesta: verdadero

explicacion: |
  Verdadero. Cada llamada pendiente debe guardar su estado (variables locales, dirección de retorno) en la pila, lo que puede llevar a un error de 'stack overflow' si la recursión es muy profunda.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_orden"
  nivel: "avanzado"
  tags: ["flujo_control", "stack"]

tipo: ordenar
opciones_explicitas: ["Llamada a f(3)", "Llamada a f(2)", "Llamada a f(1)", "Llamada a f(0)", "Retorno de f(0)", "Retorno de f(1)", "Retorno de f(2)", "Retorno de f(3)"]
respuesta: ["Llamada a f(3)", "Llamada a f(2)", "Llamada a f(1)", "Llamada a f(0)", "Retorno de f(0)", "Retorno de f(1)", "Retorno de f(2)", "Retorno de f(3)"]

enunciado: "Ordena cronológicamente los eventos en la ejecución de una función recursiva para f(3) donde el caso base es f(0):"

explicacion: |
  La ejecución sigue una estructura de LIFO (Last In, First Out): primero se van apilando todas las llamadas hacia el caso base y luego se van resolviendo (retornando) a medida que la pila se descarga.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_conceptos"
  nivel: "basico"
  tags: ["recursividad", "conceptos"]

respuesta: "caso base"
tipo: completar
respuestas_validas: ["caso base", "caso base"]

enunciado: "Para evitar que una función recursiva entre en un bucle infinito y agote la memoria (stack overflow), es indispensable definir un ___ que detenga las llamadas sucesivas."

explicacion: |
  El caso base es la condición que permite que la función deje de llamarse a sí misma, devolviendo un valor sin realizar una nueva llamada recursiva.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_errores"
  nivel: "basico"
  tags: ["stack_overflow", "errores"]

variables:
  es_infinito: true

respuesta: es_infinito
tipo: completar
enunciado: "Si una función recursiva no reduce el tamaño del problema en cada paso hacia el caso base, ¿se producirá un error de desbordamiento de pila (stack overflow)? {es_infinito}"

explicacion: |
  Si el problema no se aproxima al caso base, la recursión es infinita y la pila de llamadas se llena, causando un error de ejecución.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_flujo"
  nivel: "intermedio"
  tags: ["flujo_ejecucion", "recursividad"]

variables:
  idx: uno_de([0, 1])
  escenario: [
    ["f(3) -> f(2) -> f(1) -> f(0) -> Retorno", "f(3) -> f(2) -> f(1) -> f(0) -> Retorno"],
    ["f(3) -> f(4) -> f(5) -> ...", "f(3) -> f(4) -> f(5) -> ..."]
  ]

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["f(3) -> f(2) -> f(1) -> f(0) -> Retorno", "f(3) -> f(4) -> f(5) -> ..."]

enunciado: "Si tenemos una función que resta 1 al argumento en cada llamada y el caso base es cuando el argumento es 0, ¿cuál es la secuencia correcta de llamadas para f(3)?"

explicacion: |
  En una recursión correcta, cada llamada debe acercarse al caso base. En el escenario {escenario[idx][0]}, la secuencia se detiene al llegar a 0.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_estructura"
  nivel: "intermedio"
  tags: ["estructura", "recursividad"]

respuesta: ["Caso base", "Caso recursivo", "Paso de parámetros"]
tipo: ordenar

opciones_explicitas: ["Caso base", "Caso recursivo", "Paso de parámetros"]

enunciado: "Ordena los componentes lógicos necesarios para que una función sea recursiva y funcional, desde lo que detiene la ejecución hasta lo que permite la progresión:"

explicacion: |
  Primero se define la condición de parada (caso base), luego la lógica de la llamada (caso recursivo) y finalmente cómo se transforma el dato (paso de parámetros).
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_errores"
  nivel: "avanzado"
  tags: ["retorno", "errores"]

variables:
  error_retorno: true

respuesta: error_retorno
tipo: completar
enunciado: "En una función recursiva que debe devolver la suma de los elementos de una lista, si olvidamos incluir la palabra clave 'return' en la llamada recursiva, la función devolverá un valor correcto. {error_retorno}"

explicacion: |
  Es un error común: si no se retorna el resultado de la llamada recursiva, la cadena de valores se rompe y la función principal no recibe el resultado acumulado.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_conceptos"
  nivel: "basico"
  tags: ["recursividad", "conceptos"]

respuesta: "caso base"
tipo: completar
respuestas_validas: ["caso base", "condicion de parada"]

enunciado: "Para evitar que una función recursiva entre en un bucle infinito, es indispensable definir un ___ que detenga las llamadas sucesivas."

explicacion: |
  El caso base es la condición que permite que la función deje de llamarse a sí misma y comience a retornar valores, evitando un desbordamiento de pila (stack overflow).
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_vs_iteracion"
  nivel: "intermedio"
  tags: ["recursividad", "iteracion", "comparacion"]

respuesta: falso
tipo: vf

enunciado: "En términos de complejidad de espacio en la memoria (stack), una función recursiva suele ser más costosa que un bucle iterativo equivalente debido al uso de la pila de llamadas."

explicacion: |
  Verdadero. Cada llamada recursiva añade un nuevo marco de pila (stack frame) con sus variables locales y dirección de retorno, mientras que la iteración reutiliza el mismo espacio de memoria.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_estructura"
  nivel: "basico"
  tags: ["recursividad", "estructura"]

respuesta: ["Caso base", "Caso recursivo", "Reducción del problema"]
tipo: ordenar
opciones_explicitas: ["Caso base", "Caso recursivo", "Reducción del problema"]

enunciado: "Ordena los componentes lógicos necesarios para que un algoritmo recursivo sea correcto y termine:"

explicacion: |
  Para que la recursión funcione, primero se debe evaluar si llegamos al caso base; si no, se ejecuta el caso recursivo, el cual debe reducir el problema original hacia el caso base.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_estado"
  nivel: "intermedio"
  tags: ["recursividad", "estado", "memoria"]

respuesta: "el estado se mantiene en la pila de llamadas"
tipo: mc
opciones_explicitas: ["el estado se mantiene en la pila de llamadas", "el estado se pierde en cada llamada", "el estado se guarda en una variable global única", "el estado no es necesario en recursión"]

enunciado: "Al comparar una función recursiva con un bucle 'while', ¿en qué se diferencia la gestión de las variables locales?"

explicacion: |
  En la recursividad, cada llamada tiene su propio ámbito (scope) y sus propias variables, las cuales se almacenan en la pila de ejecución (stack).
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_identificacion"
  nivel: "basico"
  tags: ["recursividad", "logica"]

variables:
  idx: uno_de([0,1])
  escenarios: [
    ["f(n) = n + f(n-1)", "recursivo"],
    ["f(n) = n + 1", "no recursivo"]
  ]

respuesta: escenarios[idx][1
tipo: mc
opciones_explicitas: ["recursivo", "no recursivo"]

enunciado: "Analiza la siguiente definición de función: {escenarios[idx][0]}. ¿Cuál es su naturaleza?"

explicacion: |
  Una función es recursiva si su definición incluye una llamada a sí misma con un argumento modificado, como se ve en el ejemplo seleccionado.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_conceptos"
  nivel: "basico"
  tags: ["teoria", "fundamentos"]

respuesta: "caso base"
tipo: "completar"
respuestas_validas: ["caso base", "caso recursivo", "condicion de parada"]

enunciado: "Para que una función recursiva no se ejecute infinitamente y cause un error de desbordamiento de pila, es indispensable que contenga un ___ que permita detener la recursión."

explicacion: |
  El caso base es la condición que se cumple cuando la función deja de llamarse a sí misma, permitiendo que la pila de llamadas se resuelva.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_estructura"
  nivel: "basico"
  tags: ["logica"]

variables:
  escenario: uno_de([
    ["f(n) = n * f(n-1) con f(0)=1", "factorial"],
    ["f(n) = f(n-1) + f(n-2) con f(0)=0, f(1)=1", "fibonacci"],
    ["f(n) = n + f(n-1) con f(0)=0", "suma_naturales"]
  ])

respuesta: escenario[idx][1
tipo: "mc"
opciones_explicitas: ["factorial", "fibonacci", "suma_naturales", "potencia"]

enunciado: "Dada la siguiente definición recursiva: {escenario[idx][0]}, ¿cuál es el nombre del algoritmo que se está implementando?"

explicacion: |
  El algoritmo descrito corresponde a {escenario[idx][1]}.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_logica"
  nivel: "intermedio"
  tags: ["teoria"]

respuesta: falso
tipo: "vf"

enunciado: "¿Es posible que una función recursiva sea correcta si su caso recursivo no reduce el tamaño del problema hacia el caso base?"

explicacion: |
  Falso. Si el problema no se reduce (por ejemplo, si llamamos a f(n) con f(n) en lugar de f(n-1)), nunca se alcanzará el caso base, resultando en una recursión infinita.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_ejecucion"
  nivel: "intermedio"
  tags: ["pila", "stack"]

respuesta: ["Llamada 1", "Llamada 2", "Llamada 3", "Retorno 3", "Retorno 2", "Retorno 1"]
tipo: "ordenar"
opciones_explicitas: ["Llamada 1", "Llamada 2", "Llamada 3", "Retorno 3", "Retorno 2", "Retorno 1"]

enunciado: "Ordena cronológicamente los eventos de una función que llama a sí misma tres veces (n=3, n=2, n=1) antes de empezar a devolver valores (unwinding):"

explicacion: |
  En la recursión, primero se apilan todas las llamadas en la pila (stack) hasta llegar al caso base, y luego se procesan los retornos en orden inverso a la entrada.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_calculo"
  nivel: "avanzado"
  tags: ["calculo", "algoritmos"]

variables:
  datos: [
    [5, 120],
    [4, 24],
    [3, 6]
  ]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1
tipo: "input"
tolerancia_abs: 0

enunciado: "Si tenemos una función para calcular el factorial de n, donde f(n) = n * f(n-1) y f(0) = 1, ¿cuál es el resultado de ejecutar la función con el valor n = {datos[idx][0]}?"

explicacion: |
  El factorial de {datos[idx][0]} es {datos[idx][1]}.
```

## Sección: relaciones-y-claves-foraneas (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "relaciones-y-claves-foraneas"
  nivel: "basico"
  tags: ["bases-de-datos", "sql"]

respuesta: "clave_primaria"
tipo: completar
respuestas_validas: ["clave_primaria", "primary_key"]

enunciado: "El campo único que identifica de forma inequívoca a cada registro en una tabla se denomina ___."

explicacion: |
  La clave primaria (Primary Key) garantiza la integridad de la entidad, asegurando que no haya dos filas idénticas y que el identificador no sea nulo.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones-y-claves-foraneas"
  nivel: "basico"
  tags: ["bases-de-datos", "relaciones"]

respuesta: falso
tipo: vf

enunciado: "¿Una clave foránea (Foreign Key) debe referenciar necesariamente a una clave primaria en la tabla de origen?"

explicacion: |
  Falso. Una clave foránea debe referenciar a una clave única (Unique Key) en la tabla de destino, no estrictamente a una clave primaria, aunque es la práctica más común.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones-y-claves-foraneas"
  nivel: "intermedio"
  tags: ["modelado", "cardinalidad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Un Cliente y sus Pedidos", "uno_a_muchos"],
    ["Un Estudiante y sus Materias (en un modelo N:M)", "muchos_a_muchos"]
  ]

respuesta: escenarios[escenario_idx][1
tipo: mc
opciones_explicitas: ["uno_a_uno", "uno_a_muchos", "muchos_a_muchos"]

enunciado: "En el escenario '{escenarios[escenario_idx][0]}', el tipo de relación predominante es:"

explicacion: |
  En el primer caso, un cliente puede tener múltiples pedidos (1:N). En el segundo caso, un estudiante tiene muchas materias y una materia tiene muchos estudiantes (N:M).
```

```
metadata:
  materia: "informatica"
  tema: "relaciones-y-claves-foraneas"
  nivel: "intermedio"
  tags: ["integridad", "sql"]

respuesta: "Integridad Referencial"
tipo: completar
respuestas_validas: ["Integridad Referencial", "Integridad de Entidad"]

enunciado: "La regla que asegura que los valores de una clave foránea existan previamente en la tabla referenciada se conoce como ___."

explicacion: |
  La integridad referencial garantiza que las relaciones entre tablas permanezcan consistentes, evitando "registros huérfanos".
```

```
metadata:
  materia: "informatica"
  tema: "relaciones-y-claves-foraneas"
  nivel: "avanzado"
  tags: ["sql", "ddl"]

respuesta: ["Tabla_Padre", "Tabla_Hija"]
tipo: ordenar
opciones_explicitas: ["Tabla_Hija", "Tabla_Padre"]

enunciado: "Para evitar errores de restricción al ejecutar un script SQL de creación de base de datos, ¿en qué orden deben crearse las tablas si la Tabla_Hija tiene una clave foránea que apunta a la Tabla_Padre?"

explicacion: |
  Primero se debe crear la tabla que contiene la clave primaria (Padre) para que, cuando se cree la tabla que la referencia (Hija), la clave ya exista en el sistema.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "basico"
  tags: ["sql", "dbms", "relaciones"]

variables:
  idx: uno_de([0, 1])
  datos: [["Clientes", "Pedidos", "cliente_id"], ["Autores", "Libros", "autor_id"]]

enunciado: "En un modelo relacional, si tenemos una tabla de {datos[idx][0]} y una tabla de {datos[idx][1]}, la columna que permite vincular ambas tablas y hace referencia a la clave primaria de la primera tabla es la clave foránea, cuyo nombre en la tabla secundaria es ___."

respuestas_validas: ["cliente_id", "autor_id"]
respuesta: datos[idx][2]
tipo: completar

explicacion: |
  La clave foránea (Foreign Key) es un campo en una tabla que identifica un registro único en otra tabla, estableciendo así la relación entre ambas.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["integridad", "sql", "conceptos"]

enunciado: "Si intentamos eliminar un registro de la tabla 'Clientes' que tiene un ID asociado a registros existentes en la tabla 'Pedidos', y la restricción de integridad referencial está activa, la base de datos impedirá la acción para evitar datos huérfanos."

respuesta: falso
tipo: vf

explicacion: |
  La integridad referencial garantiza que no existan registros en una tabla hija que apunten a registros inexistentes en la tabla padre. Por lo tanto, la operación de borrado se bloquea o se aplica una acción en cascada.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "basico"
  tags: ["relaciones", "cardinalidad"]

enunciado: "Considerando un sistema de gestión de una biblioteca: Un 'Libro' pertenece a un único 'Autor', pero un 'Autor' puede haber escrito muchos 'Libros'. ¿Qué tipo de relación predomina desde la perspectiva de la tabla 'Libros' hacia la tabla 'Autores'?"

opciones_explicitas: ["Uno a Uno", "Uno a Muchos", "Muchos a Muchos"]
respuesta: "Uno a Muchos"
tipo: mc

explicacion: |
  En una relación de uno a muchos (1:N), la clave foránea se coloca en la tabla del lado "muchos" (Libros) para apuntar al lado "uno" (Autores).
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "avanzado"
  tags: ["diseño", "pasos", "normalizacion"]

variables:
  pasos_orden: [["Identificar entidades", "Definir claves primarias", "Establecer relaciones mediante claves foráneas"]]

enunciado: "Para diseñar correctamente un esquema relacional desde un modelo conceptual, se deben seguir estos pasos en orden lógico:"

opciones_explicitas: ["Identificar entidades", "Definir claves primarias", "Establecer relaciones mediante claves foráneas"]
respuesta: ["Identificar entidades", "Definir claves primarias", "Establecer relaciones mediante claves foráneas"]
tipo: ordenar

explicacion: |
  Primero se definen los objetos del mundo real (entidades), luego cómo se identifican unívocamente (claves primarias) y finalmente cómo se conectan entre sí (claves foráneas).
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["diseño", "dbms"]

variables:
  datos: [["Estudiantes", "Cursos", 10, 5], ["Usuarios", "Roles", 100, 5]]
  idx: uno_de([0, 1])

enunciado: "En un sistema donde cada {datos[idx][0]} puede inscribirse en múltiples {datos[idx][1]}, y cada {datos[idx][1]} puede tener múltiples {datos[idx][0]}, se requiere una tabla intermedia para resolver la relación. Si tenemos {datos[idx][0]} registros de origen y {datos[idx][1]} de destino, la tabla intermedia gestionará la relación de tipo ___."

respuestas_validas: ["Muchos a Muchos"]
respuesta: "Muchos a Muchos"
tipo: completar

explicacion: |
  Las relaciones de muchos a muchos (N:M) no se pueden implementar directamente con una sola clave foránea; requieren una tabla de unión (junction table) que contenga las claves primarias de ambas tablas.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "basico"
  tags: ["sql", "bases_de_datos", "teoria"]

respuesta: "integridad referencial"
tipo: completar
respuestas_validas: ["integridad referencial", "integridad de datos", "integridad referencial"]

enunciado: "La restricción de clave foránea (Foreign Key) tiene como objetivo principal garantizar la ___ entre las tablas de una base de datos relacional."

explicacion: |
  La integridad referencial asegura que un valor en una columna de una tabla (la clave foránea) debe coincidir con un valor existente en la clave primaria de otra tabla, evitando datos huérfanos.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["sql", "conceptos"]

respuesta: falso
tipo: vf

enunciado: "¿Es posible que una clave foránea (Foreign Key) contenga valores que no existen en la tabla de referencia (la tabla a la que apunta)?"

explicacion: |
  Falso. Por definición, la restricción de clave foránea impide la inserción de valores que no existan en la clave primaria de la tabla relacionada, manteniendo la coherencia de los datos.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["sql", "cascada", "errores"]

variables:
  escenario: uno_de([
    ["Se borra un registro en la tabla 'Clientes' que tiene pedidos asociados", "error"],
    ["Se intenta insertar un 'Pedido' con un 'Cliente_ID' que no existe", "error"],
    ["Se intenta borrar un 'Producto' que está siendo referenciado por una 'Venta'", "error"]
  ])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["escenario[0]", "escenario[1]", "escenario[2]"]

enunciado: "Si una base de datos tiene activada la restricción de integridad referencial estándar (sin ON DELETE CASCADE), ¿qué sucede en el caso: {escenario[0]}?"

explicacion: |
  El sistema de gestión de base de datos (DBMS) bloqueará la operación y lanzará un error para evitar que queden registros de 'Pedidos' sin un 'Cliente' asociado.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["sql", "orden_ddl"]

respuesta: ["Clientes", "Pedidos", "Detalles_Pedido"]
tipo: ordenar

opciones_explicitas: ["Pedidos", "Clientes", "Detalles_Pedido"]

enunciado: "Para evitar errores de 'objeto no encontrado' al ejecutar un script SQL de creación de tablas con claves foráneas, ¿cuál es el orden correcto de creación?"

explicacion: |
  Primero se deben crear las tablas que no dependen de nadie (tablas maestras o de referencia), luego las que dependen de ellas, y finalmente las tablas de detalle que dependen de las relaciones intermedias.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "avanzado"
  tags: ["sql", "nulls"]

respuesta: verdadero
tipo: vf

enunciado: "¿Puede una clave foránea contener valores NULL si la columna no tiene una restricción NOT NULL?"

explicacion: |
  Verdadero. Un valor NULL en una clave foránea significa que la relación es opcional; es decir, el registro existe pero no está vinculado actualmente a ningún registro de la tabla de referencia.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "basico"
  tags: ["sql", "bases_de_datos"]

respuesta: "clave_foranea"
tipo: "mc"
opciones_explicitas: ["clave_primaria", "clave_foranea", "índice_único", "clave_compuesta"]

enunciado: "Mientras que la clave primaria identifica de forma única un registro en su propia tabla, la ___ se utiliza para establecer un vínculo con una clave primaria de otra tabla."

explicacion: |
  La clave primaria (Primary Key) garantiza la unicidad en la tabla origen, mientras que la clave foránea (Foreign Key) permite la integridad referencial conectando tablas.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["integridad", "sql"]

respuesta: verdadero
tipo: "vf"

enunciado: "La restricción de integridad referencial asegura que un valor en una columna de clave foránea debe existir previamente en la columna de clave primaria de la tabla relacionada."

explicacion: |
  Verdadero. Si se intentara insertar un valor en la clave foránea que no existe en la tabla padre, el sistema de gestión de bases de datos (RDBMS) lanzaría un error para mantener la consistencia.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "avanzado"
  tags: ["sql", "integridad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["RESTRICT", "Impide la eliminación del registro padre si tiene hijos"],
    ["CASCADE", "Elimina automáticamente los registros hijos al eliminar el padre"]
  ]

respuesta: escenarios[escenario_idx][1
tipo: "mc"
opciones_explicitas: ["RESTRICT", "CASCADE", "SET NULL", "NO ACTION"]

enunciado: "Si configuramos una relación con la acción '{escenarios[escenario_idx][0]}', el comportamiento resultante es: ___"

explicacion: |
  La opción elegida define cómo reacciona la base de datos ante la pérdida de un registro padre. {escenarios[escenario_idx][0]} es el comportamiento específico seleccionado para este caso.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "basico"
  tags: ["diseño", "modelado"]

respuesta: ["Definir entidades", "Establecer atributos", "Identificar claves primarias", "Establecer claves foráneas"]
tipo: "ordenar"
opciones_explicitas: ["Definir entidades", "Establecer atributos", "Identificar claves primarias", "Establecer claves foráneas"]

enunciado: "Ordena los pasos lógicos para diseñar un modelo relacional que incluya relaciones entre tablas:"

explicacion: |
  Primero se definen los objetos (entidades), luego sus propiedades (atributos), después cómo se identifican (PK) y finalmente cómo se conectan (FK).
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["sql", "constraints"]

respuesta: "nulo"
tipo: "completar"
respuestas_validas: ["nulo", "NULL"]

enunciado: "A diferencia de una clave primaria que nunca puede contener valores ___, una clave foránea puede permitir valores ___ si la relación es opcional."

explicacion: |
  La clave primaria (PK) tiene una restricción de 'NOT NULL' implícita para garantizar la identidad, mientras que la clave foránea (FK) puede ser nula si la relación es opcional (por ejemplo, un empleado que aún no tiene asignado un departamento).
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "basico"
  tags: ["dbms", "sql", "relaciones"]

variables:
  escenario: uno_de([
    ["Tabla_Clientes(id_cliente, nombre) y Tabla_Pedidos(id_pedido, id_cliente)", "id_cliente"],
    ["Tabla_Autores(id_autor, nombre) y Tabla_Libros(id_libro, id_autor)", "id_autor"],
    ["Tabla_Estudiantes(id_estudiante, nombre) y Tabla_Inscripciones(id_inscripcion, id_estudiante)", "id_estudiante"]
  ])

enunciado: "En el escenario de {escenario}, ¿cuál es el nombre del campo que actúa como clave foránea en la segunda tabla para establecer la relación?"

opciones_explicitas: ["id_pedido", "id_cliente", "nombre", "id_autor", "id_estudiante"]
respuesta: escenario[1
tipo: mc

explicacion: |
  La clave foránea es el campo en una tabla que hace referencia a la clave primaria de otra tabla, permitiendo la relación entre ambas.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["integridad", "dbms"]

enunciado: "Si intentamos eliminar un registro de una tabla 'Padre' que posee una clave primaria siendo referenciada por una clave foránea en una tabla 'Hija', y la restricción de integridad está activa, la operación será rechazada para evitar datos huérfanos."

respuesta: falso
tipo: vf

explicacion: |
  Correcto. La integridad referencial impide la eliminación de registros que dejarían a las filas de la tabla hija con una referencia inválida.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["sql", "conceptos"]

variables:
  contexto: uno_de([
    ["Un sistema de ventas donde un Cliente realiza muchos Pedidos", "uno a muchos"],
    ["Un sistema de gestión donde un Estudiante se inscribe en muchas Materias y una Materia tiene muchos Estudiantes", "muchos a muchos"],
    ["Un sistema de países donde un Continente tiene muchos Países y un País pertenece a un solo Continente", "uno a muchos"]
  ])

enunciado: "En el contexto de {contexto}, el tipo de relación predominante es ___."

respuestas_validas: ["uno a muchos", "muchos a muchos", "uno a uno"]
respuesta: contexto[1
tipo: completar

explicacion: |
  El tipo de relación se define por la cardinalidad entre las entidades involucradas.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "avanzado"
  tags: ["diseño", "dbms"]

opciones_explicitas: ["Identificar entidades", "Definir atributos", "Establecer relaciones y claves", "Normalizar tablas"]
respuesta: ["Identificar entidades", "Definir atributos", "Establecer relaciones y claves", "Normalizar tablas"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para el diseño de un modelo relacional de base de datos:"

explicacion: |
  El diseño comienza con la identificación de las entidades del mundo real, luego sus propiedades, la conexión entre ellas mediante claves y finalmente el proceso de normalización.
```

```
metadata:
  materia: "informatica"
  tema: "relaciones_y_claves_foraneas"
  nivel: "intermedio"
  tags: ["lógica", "dbms"]

variables:
  caso: uno_de([
    ["Una tabla 'Departamentos' y una tabla 'Empleados' (cada empleado pertenece a un departamento)", "1"],
    ["Una tabla 'Libros' y una tabla 'Autores' (cada libro tiene un único autor)", "1"]
  ])

enunciado: "Considerando el caso: {caso}. Si aplicamos una restricción de integridad donde cada registro de la tabla dependiente debe tener exactamente ___ registro relacionado en la tabla principal, estamos ante una relación 1:1 o 1:N dependiendo del sentido."

respuestas_validas: ["1"]
respuesta: "1"
tipo: completar

explicacion: |
  La clave foránea asegura que el valor en la tabla hija exista en la tabla padre, garantizando la existencia del registro relacionado.
```

## Sección: requisitos-funcionales-no-funcionales (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "requisitos_funcionales_vs_no_funcionales"
  nivel: "basico"
  tags: ["ingenieria_software", "requisitos"]

tipo: mc
opciones_explicitas: ["Describen las funciones que el sistema debe ejecutar", "Describen las propiedades y restricciones del sistema", "Describen la interfaz visual del usuario", "Describen el lenguaje de programación utilizado"]

enunciado: "Los requisitos funcionales se definen como aquellos que..."

respuesta: "Describen las funciones que el sistema debe ejecutar"

explicacion: |
  Los requisitos funcionales especifican el comportamiento del sistema (qué hace), mientras que los no funcionales especifican atributos de calidad (cómo lo hace).
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_funcionales_vs_no_funcionales"
  nivel: "basico"
  tags: ["requisitos_no_funcionales"]

tipo: vf

enunciado: "El tiempo de respuesta de una consulta en una base de datos es un ejemplo de un requisito no funcional."

respuesta: verdadero

explicacion: |
  Correcto. El rendimiento (tiempo de respuesta) es una característica de calidad, por lo tanto, es un requisito no funcional.
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_funcionales_vs_no_funcionales"
  nivel: "intermedio"
  tags: ["clasificacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[["Permitir el registro de nuevos usuarios", "La contraseña debe estar encriptada"], ["Generar un reporte de ventas", "El sistema debe estar disponible el 99% del tiempo"]]]

enunciado: "Dado el siguiente par de requisitos: {escenarios[escenario_idx][0]} y {escenarios[escenario_idx][1]}, el segundo requisito es de tipo:"

tipo: mc
opciones_explicitas: ["Funcional", "No Funcional"]

respuesta: "No Funcional"

explicacion: |
  El primer elemento describe una acción (funcional) y el segundo describe una restricción de calidad o disponibilidad (no funcional).
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_funcionales_vs_no_funcionales"
  nivel: "basico"
  tags: ["terminologia"]

tipo: completar
respuestas_validas: ["usabilidad", "seguridad", "rendimiento"]

enunciado: "Si un cliente solicita que el sistema sea fácil de aprender para nuevos usuarios, está exigiendo un requisito de ___."

respuesta: "usabilidad"

explicacion: |
  La facilidad de uso y el aprendizaje son pilares de la usabilidad, la cual es un requisito no funcional.
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_funcionales_vs_no_funcionales"
  nivel: "intermedio"
  tags: ["ingenieria_requisitos"]

tipo: ordenar
opciones_explicitas: ["Elicitación", "Análisis", "Especificación", "Validación"]

enunciado: "Ordene las etapas del proceso de ingeniería de requisitos desde el inicio hasta el final:"

respuesta: ["Elicitación", "Análisis", "Especificación", "Validación"]

explicacion: |
  El proceso comienza con la obtención de información (Elicitación), luego se procesa (Análisis), se documenta (Especificación) y finalmente se revisa con el cliente (Validación).
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "basico"
  tags: ["requisitos", "funcionales", "no_funcionales"]

tipo: mc
opciones_explicitas: ["Requisito Funcional", "Requisito No Funcional"]

enunciado: "Un sistema de gestión de biblioteca debe permitir al usuario buscar libros por título o autor. Este requerimiento se clasifica como un ___."

respuesta: "Requisito Funcional"

explicacion: |
  Los requisitos funcionales definen las acciones que el sistema debe realizar (el "qué"). En este caso, la capacidad de búsqueda es una función directa del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "intermedio"
  tags: ["rendimiento", "no_funcionales"]

variables:
  escenario: uno_de([
    ["El sistema debe procesar un pago en menos de 2 segundos.", "Rendimiento"],
    ["La base de datos debe estar disponible el 99.9% del tiempo.", "Disponibilidad"],
    ["Las contraseñas deben estar encriptadas con AES-256.", "Seguridad"]
  ])

tipo: mc
opciones_explicitas: ["Requisito Funcional", "Requisito No Funcional"]

enunciado: "Analizando el siguiente caso: '{escenario[0]}'. ¿A qué categoría pertenece?"

respuesta: escenario[1

explicacion: |
  El enunciado describe una restricción sobre la calidad o el rendimiento del servicio (cuánto tarda), lo cual es un requisito no funcional.
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "basico"
  tags: ["definiciones"]

tipo: completar
respuestas_validas: ["usabilidad", "seguridad", "rendimiento"]

enunciado: "Si un cliente solicita que la interfaz sea intuitiva y fácil de aprender para personas mayores, está definiendo un requisito de ___."

respuesta: "usabilidad"

explicacion: |
  La facilidad de uso y la experiencia de usuario (UX) son atributos de calidad, por lo tanto, son requisitos no funcionales de usabilidad.
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf

enunciado: "Un requisito funcional describe 'cómo' debe comportarse el sistema (por ejemplo, la velocidad de respuesta), mientras que un requisito no funcional describe 'qué' debe hacer el sistema."

respuesta: falso

explicacion: |
  Es exactamente al revés: los funcionales describen el "qué" (la acción) y los no funcionales describen el "cómo" (las propiedades o restricciones de calidad).
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "intermedio"
  tags: ["ciclo_vida", "ingenieria"]

tipo: ordenar
opciones_explicitas: ["Elicitación (recolección)", "Análisis de requisitos", "Especificación", "Validación"]

respuesta: ["Elicitación (recolección)", "Análisis de requisitos", "Especificación", "Validación"]

enunciado: "Ordena las etapas lógicas del proceso de ingeniería de requisitos, desde que se habla con el cliente hasta que se confirma que lo documentado es correcto."

explicacion: |
  El proceso estándar comienza con la recolección de información (Elicitación), luego se estudia su viabilidad (Análisis), se redacta formalmente (Especificación) y finalmente se revisa con el cliente (Validación).
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_funcionales_vs_no_funcionales"
  nivel: "basico"
  tags: ["ingenieria_software", "requisitos"]

respuesta: "funcionales"
tipo: completar
respuestas_validas: ["funcionales"]

enunciado: "Los requisitos que describen las tareas específicas, servicios o funciones que el sistema debe ejecutar para satisfacer las necesidades del usuario se denominan requisitos ___________."

explicacion: |
  Los requisitos funcionales definen el "qué" hace el sistema (ej: "el sistema debe permitir registrar usuarios"), mientras que los no funcionales definen el "cómo" lo hace (rendimiento, seguridad, etc.).
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_funcionales_vs_no_funcionales"
  nivel: "basico"
  tags: ["requisitos", "clasificacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El sistema debe procesar un pago en menos de 2 segundos.", "no_funcional"],
    ["El sistema debe permitir la recuperación de contraseña por email.", "funcional"]
  ]

respuesta: escenarios[escenario_idx][1
tipo: mc
opciones_explicitas: ["funcional", "no_funcional"]

enunciado: "Analiza el siguiente requerimiento: '{escenarios[escenario_idx][0]}'. ¿A qué categoría pertenece?"

explicacion: |
  Si el requerimiento describe una acción o proceso del sistema, es funcional. Si describe una restricción de calidad (tiempo, seguridad, disponibilidad), es no funcional.
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_funcionales_vs_no_funcionales"
  nivel: "basico"
  tags: ["requisitos", "rendimiento"]

respuesta: falso
tipo: vf

enunciado: "Un requisito que establece que 'la interfaz de usuario debe ser intuitiva y fácil de usar para personas mayores' es un requisito funcional."

explicacion: |
  Falso. La usabilidad es un atributo de calidad, por lo tanto, es un requisito NO funcional.
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_funcionales_vs_no_funcionales"
  nivel: "intermedio"
  tags: ["calidad_requisitos", "no_funcionales"]

respuesta: "no_funcional"
tipo: mc
opciones_explicitas: ["funcional", "no_funcional"]

enunciado: "Un cliente solicita: 'El sistema debe ser muy rápido'. Este enunciado es un mal ejemplo de un requisito ___________ porque es ambiguo y no es medible."

explicacion: |
  Los requisitos no funcionales (como el rendimiento) deben ser cuantificables (ej: 'el tiempo de respuesta debe ser < 500ms') para poder ser validados.
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_funcionales_vs_no_funcionales"
  nivel: "intermedio"
  tags: ["proceso_ingenieria"]

respuesta: ["identificar necesidades", "definir requisitos funcionales", "establecer restricciones no funcionales", "validar sistema"]
tipo: ordenar
opciones_explicitas: ["identificar necesidades", "definir requisitos funcionales", "establecer restricciones no funcionales", "validar sistema"]

enunciado: "Ordena lógicamente las etapas del ciclo de vida de ingeniería de requisitos para un nuevo software:"

explicacion: |
  Primero se entienden las necesidades del negocio, luego se definen las funciones (funcionales), se aplican las restricciones de calidad (no funcionales) y finalmente se verifica que todo cumpla lo solicitado.
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "basico"
  tags: ["ingenieria_software", "requisitos"]

tipo: mc
opciones_explicitas: ["El sistema debe procesar pagos con tarjeta", "El sistema debe responder en menos de 2 segundos", "El sistema debe tener una interfaz intuitiva", "El sistema debe estar disponible el 99.9% del tiempo"]

enunciado: "Un requisito funcional describe una acción específica que el sistema debe realizar. ¿Cuál de los siguientes es un ejemplo de requisito funcional?"

explicacion: |
  Los requisitos funcionales definen las funciones y servicios que el sistema debe ejecutar (el "qué"). Los otros ejemplos corresponden a requisitos no funcionales (rendimiento, usabilidad y disponibilidad).
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "basico"
  tags: ["ingenieria_software", "conceptos"]

tipo: vf
respuesta: falso

enunciado: "Los requisitos no funcionales se centran en el 'cómo' debe comportarse el sistema (como la seguridad o la velocidad), mientras que los funcionales se centran en el 'qué' hace el sistema."

explicacion: |
  La afirmación es falsa porque la definición es exactamente al revés: los funcionales definen el "qué" y los no funcionales el "cómo".
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "intermedio"
  tags: ["atributos_calidad", "no_funcionales"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["El sistema debe cifrar los datos con AES-256", "El sistema debe soportar 1000 usuarios concurrentes"], ["Seguridad", "Rendimiento"]]

tipo: completar
respuestas_validas: ["Seguridad", "Rendimiento"]
respuesta: escenarios[escenario_idx][1

enunciado: "Analiza el siguiente requisito: '{escenarios[escenario_idx][0]}'. Este es un ejemplo de un requisito de tipo: ___"

explicacion: |
  El requisito mencionado se refiere a la protección de la información (Seguridad) o a la capacidad de carga (Rendimiento), según el caso sorteado.
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "intermedio"
  tags: ["ciclo_vida", "ingenieria_requisitos"]

tipo: ordenar
opciones_explicitas: ["Identificación de necesidades del usuario", "Definición de requisitos funcionales", "Definición de requisitos no funcionales", "Validación del sistema"]

enunciado: "Ordena las etapas lógicas en el proceso de ingeniería de requisitos para un nuevo software:"

explicacion: |
  Primero se entienden las necesidades, luego se definen las funciones (funcionales), luego las restricciones de calidad (no funcionales) y finalmente se validan.
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "avanzado"
  tags: ["arquitectura", "no_funcionales"]

tipo: completar
tolerancia_abs: 0
respuesta: 1

enunciado: "Si un sistema cumple con todos sus requisitos funcionales pero tarda 30 segundos en cargar una pantalla, ¿ha fallado en sus requisitos (0) funcionales o en sus requisitos (1) no funcionales?"

explicacion: |
  El tiempo de respuesta es un atributo de calidad (rendimiento), por lo tanto, es un requisito no funcional.
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "basico"
  tags: ["ingenieria_software", "requisitos"]

variables:
  escenario: uno_de([
    ["El sistema debe permitir al usuario resetear su contraseña mediante un email.", "funcional"],
    ["El sistema debe responder a cualquier consulta en menos de 2 segundos.", "no_funcional"],
    ["El sistema debe cifrar todos los datos sensibles con AES-256.", "no_funcional"],
    ["El sistema debe generar un reporte PDF de las ventas mensuales.", "funcional"]
  ])
  idx: uno_de([0,1,2,3])

enunciado: "En el siguiente escenario: '{escenario[idx][0]}', el tipo de requisito es: ___"

respuestas_validas: ["funcional", "no_funcional"]
respuesta: escenario[idx][1
tipo: completar

explicacion: |
  Los requisitos funcionales definen qué hace el sistema (acciones, servicios), mientras que los no funcionales definen cómo lo hace (atributos de calidad como velocidad, seguridad o disponibilidad).
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "intermedio"
  tags: ["calidad_software", "rendimiento"]

variables:
  caso: uno_de([
    ["Capacidad de carga de 1000 usuarios concurrentes", "Rendimiento"],
    ["Disponibilidad del sistema del 99.9%", "Disponibilidad"],
    ["Facilidad de navegación para usuarios con discapacidad", "Usabilidad"],
    ["Protección contra ataques de inyección SQL", "Seguridad"]
  ])
  idx: uno_de([0,1,2,3])

enunciado: "El enunciado '{caso[idx][0]}' pertenece a la categoría de requisitos no funcionales de tipo: ___"

respuestas_validas: ["Rendimiento", "Disponibilidad", "Usabilidad", "Seguridad"]
respuesta: caso[idx][1
tipo: completar

explicacion: |
  Los requisitos no funcionales se agrupan en categorías como rendimiento, seguridad, usabilidad, disponibilidad y mantenibilidad.
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "basico"
  tags: ["logica", "requisitos"]

variables:
  item: uno_de([
    ["El sistema debe permitir eliminar una cuenta de usuario.", verdadero],
    ["El sistema debe ser compatible con navegadores Chrome y Firefox.", falso],
    ["El sistema debe emitir una alerta si el stock es bajo.", verdadero],
    ["El sistema debe tener una interfaz de colores suaves.", falso]
  ])
  idx: uno_de([0,1,2,3])

enunciado: "Analiza el siguiente requerimiento: '{item[idx][0]}'. ¿Es un requisito funcional?"

respuesta: item[idx][1
tipo: completar
explicacion: |
  Si el requerimiento describe una funcionalidad o acción que el usuario puede realizar, es funcional. Si describe una restricción o una característica de calidad, es no funcional.
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "basico"
  tags: ["requisitos", "clasificacion"]

variables:
  ejemplo: uno_de([
    ["El sistema debe permitir buscar productos por nombre.", "Funcional"],
    ["El sistema debe estar disponible las 24 horas del día.", "No Funcional"],
    ["El sistema debe permitir subir archivos de hasta 5MB.", "Funcional"],
    ["El sistema debe ser fácil de aprender para nuevos empleados.", "No Funcional"]
  ])
  idx: uno_de([0,1,2,3])

enunciado: "Dado el requerimiento: '{ejemplo[idx][0]}', ¿cuál es su clasificación correcta?"

opciones_explicitas: ["Funcional", "No Funcional"]
respuesta: ejemplo[idx][1
tipo: mc

explicacion: |
  La distinción clave es si el requisito describe un comportamiento del sistema (Funcional) o una restricción sobre cómo opera el sistema (No Funcional).
```

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "avanzado"
  tags: ["proceso", "ingenieria_software"]

variables:
  secuencia: ["Identificar necesidades del cliente", "Definir requisitos funcionales", "Definir requisitos no funcionales", "Validar especificaciones"]

enunciado: "Ordena los pasos lógicos en el proceso de ingeniería de requisitos, desde la detección de la necesidad hasta la validación final:"

opciones_explicitas: ["Identificar necesidades del cliente", "Definir requisitos funcionales", "Definir requisitos no funcionales", "Validar especificaciones"]
respuesta: ["Identificar necesidades del cliente", "Definir requisitos funcionales", "Definir requisitos no funcionales", "Validar especificaciones"]
tipo: ordenar

explicacion: |
  El proceso estándar comienza con el levantamiento de necesidades, seguido de la especificación de qué hará el sistema (funcionales) y cómo lo hará (no funcionales), para terminar con la validación de que lo documentado es correcto.
```

## Sección: revolucion-informatica (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["historia", "computadoras"]

respuesta: "ENIAC"
tipo: completar
respuestas_validas: ["ENIAC"]

enunciado: "La primera computadora electrónica de propósito general, utilizada para cálculos balísticos durante la Segunda Guerra Mundial, fue la ___."

explicacion: |
  La ENIAC (Electronic Numerical Integrator and Computer) fue una de las primeras computadoras electrónicas de gran escala, marcando el inicio de la era de la computación moderna.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["hardware", "transistores"]

variables:
  tecnologia_idx: uno_de([0,1])
  tecnologias: [["tubos de vacío", "transistores"], ["transistores", "microprocesadores"]]
  tecnologia_actual: ["microprocesadores", "circuitos integrados"]

respuesta: tecnologia_idx
tipo: mc
opciones_explicitas: ["tubos de vacío", "transistores", "microprocesadores"]

enunciado: "La transición de la primera a la segunda generación de computadoras se caracterizó por el reemplazo de los {tecnologias[tecnologia_idx]} por una tecnología más pequeña y eficiente."

explicacion: |
  La primera generación usaba tubos de vacío (grandes y calientes), mientras que la segunda generación introdujo el transistor, permitiendo miniaturización y mayor fiabilidad.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["pc", "historia"]

respuesta: "Apple II"
tipo: mc
opciones_explicitas: ["ENIAC", "Altair 8800", "Apple II", "IBM PC"]

enunciado: "¿Cuál de estos dispositivos fue uno de los primeros en popularizar la computación personal masiva a finales de los años 70 y principios de los 80?"

explicacion: |
  El Apple II fue uno de los primeros computadores personales con gráficos a color y capacidad de uso doméstico, impulsando la revolución de la informática personal.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["cronologia", "hitos"]

respuesta: ["Tubos de vacío", "Transistores", "Circuitos Integrados", "Microprocesadores"]
tipo: ordenar
opciones_explicitas: ["Tubos de vacío", "Transistores", "Circuitos Integrados", "Microprocesadores"]

enunciado: "Ordena cronológicamente las tecnologías que permitieron la miniaturización de las computadoras:"

explicacion: |
  La evolución siguió este orden: Tubos de vacío (1ra gen) -> Transistores (2da gen) -> Circuitos Integrados (3ra gen) -> Microprocesadores (4ta gen).
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "avanzado"
  tags: ["ley_de_moore", "teoria"]

variables:
  valor_doble: 2

respuesta: "exponencial"
tipo: mc
opciones_explicitas: ["lineal", "exponencial", "decreciente", "constante"]

enunciado: "La revolución informática se vio acelerada por la Ley de Moore, la cual predice que el número de transistores en un chip se duplica aproximadamente cada {valor_doble} años, lo que implica un crecimiento de tipo ___."

explicacion: |
  La Ley de Moore describe un crecimiento exponencial de la capacidad de procesamiento, lo que permitió pasar de máquinas que ocupaban habitaciones a dispositivos que caben en un bolsillo.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["hardware", "historia"]

respuesta: "v"
tipo: "mc"

opciones_explicitas: ["v", "t", "i", "m"]

enunciado: "Las primeras computadoras de gran escala, como la ENIAC, utilizaban principalmente ________ de vacío para realizar sus operaciones lógicas."

explicacion: |
  Las válvulas de vacío (o tubos de vacío) fueron los componentes fundamentales de la primera generación de computadoras, antes de la invención del transistor.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["hardware", "historia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[0, "Transistor"], [1, "Circuito Integrado"]]

respuesta: datos[escenario_idx][1
tipo: "mc"

opciones_explicitas: ["Transistor", "Circuito Integrado", "Microprocesador", "CPU"]

enunciado: "La invención del {datos[escenario_idx][0]} permitió reemplazar las válvulas de vacío, reduciendo drásticamente el tamaño y el calor de las máquinas."

explicacion: |
  El transistor permitió la segunda generación de computadoras, permitiendo que fueran más pequeñas y confiables que las de válvulas.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "avanzado"
  tags: ["hardware", "historia"]

respuesta: "1971"
tipo: "completar"

respuestas_validas: ["1971", "1972"]

enunciado: "El primer microprocesador comercial, el Intel 4004, fue lanzado en el año ___."

explicacion: |
  El Intel 4004 marcó el inicio de la era de la integración a gran escala, permitiendo que toda la unidad de procesamiento residiera en un solo chip.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["historia", "ordenar"]

respuesta: ["Válvula de vacío", "Transistor", "Circuito Integrado", "Microprocesador"]
tipo: "ordenar"

opciones_explicitas: ["Válvula de vacío", "Transistor", "Circuito Integrado", "Microprocesador"]

enunciado: "Ordena cronológicamente los hitos tecnológicos que permitieron la evolución del hardware de computación:"

explicacion: |
  La evolución siguió este orden: Válvulas (1ra gen), Transistores (2da gen), Circuitos Integrados (3ra gen) y Microprocesadores (4ta gen).
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["usuario", "historia"]

respuesta: "true"
tipo: "vf"

enunciado: "¿La llegada de la computadora personal (PC) a los hogares en los años 70 y 80 fue posible gracias a la integración masiva de microprocesadores?"

explicacion: |
  Correcto. La capacidad de integrar la CPU en un solo chip permitió que las computadoras pasaran de ocupar habitaciones enteras a ser dispositivos de escritorio accesibles.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["historia", "hardware"]

tipo: mc
opciones_explicitas: ["La velocidad de procesamiento", "La capacidad de almacenamiento", "La densidad de transistores en un chip", "El costo de los componentes electrónicos"]

enunciado: "La Ley de Moore es una observación histórica que predice el aumento de la densidad de ___ en un circuito integrado cada dos años aproximadamente."

respuesta: "La densidad de transistores en un chip"

explicacion: |
  Gordon Moore, cofundador de Intel, observó que el número de transistores en un microchip se duplicaba aproximadamente cada dos años, lo que impulsó la miniaturización de la tecnología.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["calculo", "hardware"]

variables:
  idx: uno_de([0, 1])
  datos: [["1000", "2000"], ["500", "1000"]]
  base: datos[idx][0]
  doble: datos[idx][1]

tipo: completar
tolerancia_abs: 0

enunciado: "Si un chip tiene {base} transistores hoy, siguiendo la Ley de Moore, ¿cuántos transistores tendrá aproximadamente en el próximo ciclo de dos años?"

respuesta: "doble"

pasos:
  - "Identificar la cantidad actual de transistores."
  - "Aplicar el factor de duplicación (x2) según la ley."

explicacion: |
  La Ley de Moore establece que la cantidad de transistores se duplica. Por lo tanto, {base} * 2 = {doble}.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["historia", "procesadores"]

tipo: ordenar
opciones_explicitas: ["Aumento de transistores", "Reducción del tamaño de los componentes", "Aumento de la potencia de cómputo", "Reducción de costos por transistor"]

enunciado: "Ordena los efectos causados por la aplicación de la Ley de Moore en la tecnología, desde la causa técnica hasta el efecto en el consumidor final:"

respuesta: ["Aumento de transistores", "Reducción del tamaño de los componentes", "Aumento de la potencia de cómputo", "Reducción de costos por transistor"]

explicacion: |
  La Ley de Moore describe un ciclo: más transistores en menos espacio permiten chips más potentes y, con la escala de producción, más económicos.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["teoria", "hardware"]

tipo: completar
respuestas_validas: ["potencia", "capacidad"]

enunciado: "Debido al aumento exponencial de transistores, la ___ de procesamiento de los ordenadores ha crecido de forma similar a lo largo de las últimas décadas."

respuesta: "potencia"

explicacion: |
  Al integrar más transistores en un mismo espacio, el procesador puede realizar más operaciones por segundo, aumentando su potencia.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["conceptos"]

tipo: mc
opciones_explicitas: ["Verdadero", "Falso"]

enunciado: "La Ley de Moore es una ley física inmutable de la naturaleza, similar a la Ley de la Gravedad."

respuesta: "Falso"

explicacion: |
  No es una ley física, sino una observación empírica y una meta industrial que ha guiado la planificación de la industria de los semiconductores.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["internet", "economia"]

tipo: mc
opciones_explicitas: ["Descentralización de la información", "Aumento de la burocracia física", "Reducción de la velocidad de comunicación", "Eliminación del comercio electrónico"]

enunciado: "La combinación de la revolución informática y el internet ha permitido la ________ de la información, permitiendo el acceso global a datos en tiempo real."

explicacion: |
  La digitalización ha democratizado el acceso a la información, rompiendo las barreras geográficas y temporales que existían antes de la era de internet.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["economia_digital", "e-commerce"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["comercio_electronico", "servicios_streaming"], ["ventas_retail_fisico", "suscripciones_digitales"]]

tipo: completar
respuestas_validas: ["comercio_electronico", "servicios_streaming"]
respuesta: escenarios[escenario_idx][1

enunciado: "Un ejemplo clave de la transformación económica es el paso de modelos basados en el ________ hacia modelos basados en las ________."

explicacion: |
  La economía ha migrado de la propiedad física y el comercio en locales hacia el consumo de servicios bajo demanda y plataformas digitales.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["comunicacion", "impacto_social"]

tipo: completar
tolerancia_abs: 0

enunciado: "Si en la era industrial la comunicación se basaba en el telégrafo y el correo físico, en la era informática la comunicación es instantánea. Si comparamos la velocidad de un mensaje de texto con un correo físico que tarda 3 días, y el mensaje tarda 0 segundos, ¿cuántos segundos de ahorro representa el mensaje digital frente al correo?"

pasos:
  - "Convertir 3 días a segundos: 3 * 24 * 60 * 60 = 259200"
  - "Restar el tiempo del mensaje digital (0) al tiempo del correo (259200)"

respuesta: 259200

explicacion: |
  La inmediatez es una de las características fundamentales de la revolución informática, permitiendo la globalización de los mercados en tiempo real.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["hardware", "historia"]

tipo: ordenar
opciones_explicitas: ["Mainframes gigantescos", "Computadoras personales (PC)", "Dispositivos móviles y smartphones"]

enunciado: "Ordena cronológicamente los hitos tecnológicos que permitieron la integración de la informática en la vida cotidiana:"

respuesta: ["Mainframes gigantescos", "Computadoras personales (PC)", "Dispositivos móviles y smartphones"]

explicacion: |
  La computación comenzó en grandes centros de datos corporativos, pasó a los escritorios de los hogares con la PC y finalmente se volvió ubicua con los smartphones.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "avanzado"
  tags: ["trabajo", "automatizacion"]

tipo: mc
opciones_explicitas: ["Automatización de tareas repetitivas", "Desaparición total del trabajo humano", "Aumento de la necesidad de archivos físicos", "Reducción de la conectividad global"]

enunciado: "Un efecto crítico de la revolución informática en la economía laboral es la ________, lo que obliga a la fuerza de trabajo a especializarse en tareas de mayor valor cognitivo."

explicacion: |
  La automatización impulsada por software y algoritmos ha transformado la estructura del empleo, eliminando tareas mecánicas pero creando nuevas demandas tecnológicas.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["historia", "ordenar"]

variables:
  escenario: [[["ENIAC", "Transistor", "PC"], ["ENIAC", "Microprocesador", "Internet"], ["ENIAC", "Transistor", "Smartphone"]]]
  idx: uno_de([0,1,2])

respuesta: escenario[idx][0
tipo: ordenar
opciones_explicitas: ["ENIAC", "Transistor", "PC", "Microprocesador", "Internet", "Smartphone"]

enunciado: "Ordena cronológicamente los siguientes hitos tecnológicos según el escenario seleccionado: {escenario[idx][0][0]}, {escenario[idx][0][1]} y {escenario[idx][0][2]}."

explicacion: |
  El orden cronológico correcto depende de la tecnología: 
  1. ENIAC (1945) -> 2. Transistor (1947) -> 3. PC (años 70/80).
  1. ENIAC (1945) -> 2. Microprocesador (1971) -> 3. Internet (TCP/IP 1983).
  1. ENIAC (1945) -> 2. Transistor (1947) -> 3. Smartphone (años 90/2000).
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["lenguajes", "historia"]

variables:
  datos: [["Ada Lovelace", "Grace Hopper", "John Backus"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][0
tipo: mc

opciones_explicitas: ["Ada Lovelace", "Grace Hopper", "John Backus", "Alan Turing"]

enunciado: "Identifica a la figura histórica asociada a los primeros algoritmos para la Máquina Analítica: {datos[idx][0]}."

explicacion: |
  {datos[idx][0]} es reconocida históricamente por haber escrito el primer algoritmo destinado a ser procesado por una máquina.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["hardware", "almacenamiento"]

variables:
  casos: [["Disquete", "CD-ROM", "USB"], ["Disco Duro", "Cassette", "SSD"]]
  idx: uno_de([0,1])

respuesta: casos[idx][0
tipo: completar
respuestas_validas: ["Disquete", "CD-ROM", "USB", "Disco Duro", "Cassette", "SSD"]

enunciado: "En la evolución del almacenamiento magnético y óptico, el dispositivo que precede al siguiente es: ___."

explicacion: |
  El orden de evolución tecnológica en el escenario seleccionado es: {casos[idx][0][0]} -> {casos[idx][0][1]} -> {casos[idx][0][2]}.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["internet", "web"]

variables:
  hitos: [["Tim Berners-Lee", "Vint Cerf", "Marc Andreessen"]]
  idx: uno_de([0,1,2])

respuesta: hitos[idx][0
tipo: mc

opciones_explicitas: ["Tim Berners-Lee", "Vint Cerf", "Marc Andreessen", "Steve Jobs"]

enunciado: "¿Quién es el creador de la World Wide Web (WWW) según el contexto de la revolución digital? {hitos[idx][0]}."

explicacion: |
  {hitos[idx][0]} inventó la WWW en el CERN, permitiendo la democratización de la información en la red.
```

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["movilidad", "hardware"]

variables:
  tecnologias: [["Teléfono Fijo", "Teléfono Móvil", "Smartphone"], ["Radio", "Walkman", "iPod"]]
  idx: uno_de([0,1])

respuesta: tecnologias[idx][2
tipo: mc

opciones_explicitas: ["Teléfono Fijo", "Teléfono Móvil", "Smartphone", "Radio", "Walkman", "iPod"]

enunciado: "Identifica el dispositivo que representa la etapa final de la evolución de la comunicación/reproducción en este escenario: ___."

explicacion: |
  La evolución tecnológica sigue una línea de miniaturización y conectividad: {tecnologias[idx][0]} -> {tecnologias[idx][1]} -> {tecnologias[idx][2]}.
```

## Sección: segmentacion (23 preguntas)

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["analogia", "comprension"]

respuesta: falso
tipo: vf

enunciado: "La segmentación es como enviar una caja enorme por correo en un solo paquete para ahorrar tiempo."

explicacion: |
  Falso. La analogía correcta es abrir la caja y enviar los objetos en sobres más chicos. Enviar una caja enorme puede saturar la conexión o causar pérdidas. La segmentación divide los datos para que viajen de manera eficiente y controlada.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["mtu", "limite", "capacidad"]

respuesta: verdadero
tipo: vf

enunciado: "Si los datos a enviar superan el MTU (Maximum Transmission Unit), el protocolo TCP los divide en segmentos más pequeños."

explicacion: |
  Verdadero. El MTU define el tamaño máximo de datos que puede transmitir una unidad de red. Si el dato es mayor, TCP lo segmenta para que cada segmento quepa dentro de ese límite sin perder información.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["eficiencia", "red", "flujo"]

respuesta: verdadero
tipo: vf

enunciado: "La segmentación permite que diferentes tipos de información compartan el mismo cable sin interferirse mutuamente."

explicacion: |
  Verdadero. Al dividir los datos en paquetes pequeños, se facilita el multiplexado y el flujo de información. Esto permite que tráfico de video, voz y texto coexistan en la misma infraestructura física de manera eficiente.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["reconstruccion", "integridad", "paquetes"]

respuesta: verdadero
tipo: vf

enunciado: "Los segmentos pueden llegar en desorden a la destino, pero el sistema receptor los reordena correctamente gracias al número de secuencia."

explicacion: |
  Verdadero. La segmentación no garantiza que los paquetes lleguen en el mismo orden que fueron enviados. El receptor utiliza los números de secuencia para reordenar los segmentos y reconstruir el archivo original intacto.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["cabecera", "ip", "informacion"]

respuesta: verdadero
tipo: vf

enunciado: "Cada segmento recibe una etiqueta que incluye la dirección IP de origen y destino, además del número de secuencia."

explicacion: |
  Verdadero. La cabecera del segmento (en TCP) o del paquete (en IP) contiene la información de direccionamiento (IPs) y el control de flujo/orden (número de secuencia), esencial para la entrega correcta.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["udp", "segmentacion", "protocolo"]

respuesta: verdadero
tipo: vf

enunciado: "El protocolo UDP también realiza segmentación de datos para adaptarse al MTU de la red."

explicacion: |
  Verdadero. Aunque UDP no ofrece la misma garantía de orden que TCP, la segmentación es una función necesaria en la capa de transporte para ambos protocolos si los datos exceden el tamaño máximo que puede encapsular el paquete IP subyacente.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["analogia", "rompecabezas", "orden"]

respuesta: verdadero
tipo: vf

enunciado: "La reconstrucción de los datos en el receptor es similar a armar un rompecabezas donde cada pieza tiene un número que indica su posición."

explicacion: |
  Verdadero. Esta es la analogía clave. Cada segmento tiene un número de secuencia que actúa como la 'posición' del rompecabezas, permitiendo al receptor ensamblar la información correcta aunque las piezas lleguen desordenadas.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["tamaño", "mtu", "optimizacion"]

respuesta: verdadero
tipo: vf

enunciado: "Los segmentos son más pequeños que el archivo original para facilitar su transmisión por la red."

explicacion: |
  Verdadero. La segmentación reduce el tamaño de cada unidad de datos para que se ajuste a las capacidades de la red (MTU), haciendo la transmisión más rápida, robusta y capaz de recuperarse de errores.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["orden", "integridad", "secuencia"]

respuesta: verdadero
tipo: vf

enunciado: "Es fundamental que los segmentos lleguen en el orden correcto para que el archivo original se reconstruya sin errores."

explicacion: |
  Verdadero. Aunque la red puede entregar los paquetes desordenados, el protocolo de transporte (como TCP) debe garantizar que el receptor los reordene correctamente. Si el orden se pierde o los segmentos faltan, el archivo resultante estará corrupto.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["aplicacion", "video", "streaming"]

respuesta: verdadero
tipo: vf

enunciado: "La segmentación permite la transmisión eficiente de archivos grandes como películas o documentos en internet."

explicacion: |
  Verdadero. Sin segmentación, transmitir video o archivos grandes sería inviable debido a los límites de tamaño de los paquetes de red y la inestabilidad de las conexiones. La segmentación hace posible el streaming y las descargas.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["ip", "direccionamiento", "origen", "destino"]

respuesta: verdadero
tipo: vf

enunciado: "La dirección IP de origen y destino es parte de la información vital que permite que los segmentos lleguen al lugar correcto."

explicacion: |
  Verdadero. Aunque la segmentación ocurre en la capa de transporte, la información de direccionamiento IP (capa de red) es esencial para que cada segmento sepa a dónde ir. La segmentación y el direccionamiento trabajan juntos.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["control", "flujo", "tcp"]

respuesta: verdadero
tipo: vf

enunciado: "La segmentación ayuda a controlar mejor el flujo de información entre emisor y receptor."

explicacion: |
  Verdadero. Al dividir los datos en segmentos, el protocolo puede gestionar el flujo, evitando que el emisor sature al receptor y permitiendo la retransmisión de segmentos perdidos, mejorando la eficiencia y confiabilidad.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["capa", "red", "ip", "fragmentacion"]

respuesta: falso
tipo: vf

enunciado: "La segmentación es un proceso exclusivo de la capa de red (IP)."

explicacion: |
  Falso. La segmentación ocurre en la capa de transporte (TCP/UDP). La capa de red realiza una función similar llamada 'fragmentación' si los paquetes IP son demasiado grandes para la ruta, pero la segmentación inicial del flujo de datos es tarea de la capa de transporte.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["errores", "retransmision", "confiabilidad"]

respuesta: verdadero
tipo: vf

enunciado: "La segmentación facilita la recuperación de errores al permitir retransmitir solo los segmentos perdidos."

explicacion: |
  Verdadero. Si un segmento se pierde, no es necesario reenviar todo el archivo. Solo se retransmite el segmento específico que falta, lo que hace el proceso de recuperación de errores mucho más eficiente.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["secuencia", "identificador", "orden"]

respuesta: verdadero
tipo: vf

enunciado: "El número de secuencia es un identificador único dentro del flujo de datos que indica la posición del segmento."

explicacion: |
  Verdadero. El número de secuencia permite al receptor identificar qué segmento es cuál y en qué orden deben unirse. Es la clave para la reconstrucción correcta del mensaje original.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["aplicacion", "pequeno", "grande"]

respuesta: verdadero
tipo: vf

enunciado: "La segmentación se aplica independientemente del tamaño del archivo, siempre que el flujo de datos deba transmitirse por la red."

explicacion: |
  Verdadero. Aunque es más crítica para archivos grandes, el proceso de segmentación (o encapsulación en paquetes) ocurre en la transmisión de datos. Para archivos pequeños, puede que no se requiera división adicional si caben en un solo paquete, pero el concepto de dividir el flujo sigue siendo la base.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["mtu", "limite", "capacidad"]

respuesta: verdadero
tipo: vf

enunciado: "El MTU actúa como un límite máximo que los segmentos no deben superar para ser transmitidos correctamente."

explicacion: |
  Verdadero. El MTU (Maximum Transmission Unit) es el tamaño máximo de datos que una unidad de red puede transmitir en un solo paquete. Los segmentos deben respetar este límite para evitar la fragmentación en capas inferiores o la pérdida de paquetes.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["multiplexado", "compartir", "red"]

respuesta: verdadero
tipo: vf

enunciado: "La segmentación permite que múltiples comunicaciones compartan el mismo medio físico de manera eficiente."

explicacion: |
  Verdadero. Al dividir los datos en paquetes pequeños, la red puede intercalar (multiplexar) paquetes de diferentes usuarios o aplicaciones en el mismo cable, optimizando el uso del ancho de banda.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["emisor", "receptor", "proceso"]

respuesta: falso
tipo: vf

enunciado: "La reconstrucción de los segmentos en el archivo original ocurre en el emisor."

explicacion: |
  Falso. La reconstrucción ocurre en el **receptor**. El emisor es quien divide y envía los segmentos; el receptor los recibe, los reordena y los une para formar el archivo original.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["latencia", "rendimiento", "eficiencia"]

respuesta: verdadero
tipo: vf

enunciado: "La segmentación puede reducir la latencia percibida al permitir que los primeros segmentos lleguen antes que el archivo completo."

explicacion: |
  Verdadero. Al enviar segmentos pequeños, el receptor puede comenzar a procesar o mostrar la información (como el inicio de un video) mientras llegan los segmentos restantes, mejorando la experiencia de usuario y la eficiencia de la red.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["seguridad", "intercepcion", "privacidad"]

respuesta: verdadero
tipo: vf

enunciado: "La segmentación por sí sola no garantiza la seguridad de los datos, pero es un paso previo a la cifrado en muchas capas."

explicacion: |
  Verdadero. La segmentación divide los datos, pero no los protege. Para seguridad, se requiere cifrado (ej. TLS/SSL). Sin embargo, la segmentación es un paso fundamental en el proceso de encapsulación que permite aplicar medidas de seguridad a cada unidad de datos.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["tcp", "udp", "diferencias"]

respuesta: verdadero
tipo: vf

enunciado: "Tanto TCP como UDP pueden segmentar datos, pero TCP garantiza el orden y la entrega, mientras que UDP no."

explicacion: |
  Verdadero. Ambos protocolos realizan la división de datos (segmentación) en la capa de transporte. Sin embargo, TCP añade mecanismos de control de flujo y retransmisión para asegurar la integridad y el orden, mientras que UDP entrega los segmentos tal como llegan sin garantías.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["aplicacion", "grande", "necesidad"]

respuesta: verdadero
tipo: vf

enunciado: "La segmentación es esencial para transmitir archivos de varios gigabytes a través de internet."

explicacion: |
  Verdadero. Los archivos grandes exceden ampliamente el MTU de la red. Sin segmentación, no sería posible transmitirlos, ya que los paquetes serían demasiado grandes para ser manejados por los routers y enlaces de la red.
```
