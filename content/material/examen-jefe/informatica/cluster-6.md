# Examen jefe — [PENDIENTE #821]

> Logro #821. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **121 preguntas totales** en 5/5 secciones.

---

## Sección: normalizacion-bases-datos (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "basico"
  tags: ["teoria", "redundancia"]

respuesta: "redundancia"
tipo: completar
respuestas_validas:
  - "redundancia"
  - "duplicación"
  - "repetir"

enunciado: "Cuando la misma información se almacena en múltiples lugares de una base de datos, se produce un fenómeno llamado ___."

explicacion: |
  La redundancia de datos ocurre cuando un mismo dato se repite innecesariamente en diferentes tablas o registros, lo que aumenta el riesgo de inconsistencias.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "basico"
  tags: ["anomalia", "integridad"]

opciones_explicitas: ["Anomalía de inserción", "Anomalía de borrado", "Anomalía de actualización", "Todas las anteriores"]
respuesta: "Anomalía de actualización"
tipo: mc

enunciado: "Si un dato está duplicado y se cambia en un registro pero no en el otro, estamos ante una anomalía de tipo:"

explicacion: |
  La redundancia causa anomalías de actualización, ya que la integridad de la información se pierde al no estar sincronizada en todos los puntos de almacenamiento.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "basico"
  tags: ["objetivo", "diseño"]

respuesta: verdadero
tipo: vf

enunciado: "¿El objetivo principal de la normalización es minimizar la redundancia de datos y evitar anomalías de inserción, actualización y borrado?"

explicacion: |
  Correcto. La normalización es un proceso de diseño que busca organizar las columnas y tablas de una base de datos para minimizar la duplicación de datos.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "intermedio"
  tags: ["pasos", "proceso"]

opciones_explicitas: ["Identificar dependencias funcionales", "Definir la clave primaria", "Crear tablas relacionadas", "Aplicar reglas de formas normales"]
respuesta_orden: ["Identificar dependencias funcionales", "Definir la clave primaria", "Aplicar reglas de formas normales", "Crear tablas relacionadas"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para diseñar una base de datos normalizada:"

explicacion: |
  Primero se deben entender cómo se relacionan los datos (dependencias funcionales), luego definir la estructura básica (clave primaria) y finalmente aplicar las reglas de las Formas Normales para crear las tablas relacionadas.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "basico"
  tags: ["integridad", "consecuencia"]

variables:
  escenario: uno_de([["Alta redundancia", "baja"], ["Normalización óptima", "alta"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["baja", "alta"]

enunciado: "En un esquema de base de datos con una normalización óptima, la integridad de los datos suele ser ___."

explicacion: |
  Al reducir la redundancia mediante la normalización, se garantiza que un dato solo se almacene en un lugar, elevando la integridad del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_de_datos"
  nivel: "basico"
  tags: ["redundancia", "anomalia"]

enunciado: "En una tabla de 'Ventas' donde se repite el nombre y la dirección del cliente por cada producto comprado, si el cliente cambia de dirección y solo actualizamos una fila, ¿qué problema de integridad de datos estamos enfrentando?"

opciones_explicitas: ["Anomalia de actualización", "Anomalia de inserción", "Anomalia de borrado", "Redundancia de clave"]

respuesta: "Anomalia de actualización"
tipo: "mc"

explicacion: |
  La redundancia de datos (repetir la dirección en cada venta) provoca anomalías de actualización: si no se actualizan todos los registros de un mismo cliente, la base de datos queda con información inconsistente.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_de_datos"
  nivel: "intermedio"
  tags: ["dependencia_funcional", "normalizacion"]

enunciado: "Considerando una tabla de estudiantes con los campos ID_Estudiante, Nombre, Email, Curso y Aula, si queremos eliminar la redundancia de la información del 'Curso' y su 'Aula' asociada, ¿cuál debería ser la clave primaria para una tabla separada que gestione la ubicación de los cursos?"

opciones_explicitas: ["ID_Estudiante", "Nombre", "Email", "Curso"]

respuesta: "Curso"
tipo: "mc"

explicacion: |
  Para normalizar, debemos mover los atributos que dependen de un concepto distinto (el curso) a una tabla propia, donde 'Curso' actúe como clave para evitar repetir la 'Aula' en cada estudiante.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_de_datos"
  nivel: "basico"
  tags: ["definicion"]

enunciado: "El proceso de organizar los datos en una base de datos relacional para minimizar la redundancia y evitar anomalías se denomina ___."

respuestas_validas:
  - "normalización"
  - "normalizacion"

respuesta: "normalización"
tipo: "completar"

explicacion: |
  La normalización es el proceso de estructurar una base de datos para que cada dato se almacene en un solo lugar, evitando duplicados.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_de_datos"
  nivel: "basico"
  tags: ["almacenamiento"]

enunciado: "Tener una base de datos altamente normalizada siempre implica un ahorro de espacio en disco debido a la eliminación de datos repetidos."

respuesta: falso
tipo: "vf"

explicacion: |
  Aunque la normalización reduce la redundancia de datos descriptivos, puede aumentar el uso de espacio debido a la necesidad de crear más tablas y gestionar múltiples claves foráneas (índices) para realizar las uniones (JOINs).
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_de_datos"
  nivel: "avanzado"
  tags: ["proceso", "pasos"]

enunciado: "Ordena los pasos lógicos para llevar una tabla desnormalizada hacia un modelo normalizado eficiente:"

opciones_explicitas: ["Identificar dependencias funcionales", "Eliminar dependencias parciales (1FN)", "Eliminar dependencias transitivas (2FN/3FN)", "Verificar integridad referencial"]

respuesta_orden: ["Identificar dependencias funcionales", "Eliminar dependencias parciales (1FN)", "Eliminar dependencias transitivas (2FN/3FN)", "Verificar integridad referencial"]
tipo: ordenar

explicacion: |
  El proceso comienza analizando cómo se relacionan los datos (dependencias), luego se separan los datos que no dependen de la clave completa (1FN/2FN) y finalmente se eliminan las dependencias indirectas (3FN).
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "intermedio"
  tags: ["redundancia", "anomalias"]

enunciado: "Si al cambiar el número de teléfono de un cliente debemos buscar todas sus filas repetidas para actualizar cada una de ellas, estamos ante una anomalía de tipo ___ causada por la redundancia."

respuesta: "Anomalía de actualización"
tipo: mc
opciones_explicitas: ["Anomalía de actualización", "Anomalía de inserción", "Anomalía de borrado"]

explicacion: |
  La redundancia de datos provoca anomalías. Si un dato (como un teléfono) se repite en múltiples registros, el sistema corre el riesgo de que no todos se actualicen, dejando la base de datos en un estado inconsistente.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "basico"
  tags: ["objetivos", "diseño"]

enunciado: "La normalización de bases de datos tiene como objetivo principal minimizar la redundancia de datos para evitar las anomalías de inserción, actualización y ___."

respuesta: "borrado"
respuestas_validas:
  - "borrado"
tipo: completar

explicacion: |
  La normalización busca estructurar las tablas de modo que cada dato se almacene en un único lugar, evitando que al borrar un registro se pierda información que no debería ser eliminada (anomalía de borrado).
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "avanzado"
  tags: ["desnormalizacion", "rendimiento"]

enunciado: "En sistemas de Big Data o Data Warehousing, a veces se aplica la 'desnormalización' intencionalmente para mejorar la velocidad de lectura, a pesar de aumentar la redundancia."

respuesta: verdadero
tipo: vf

explicacion: |
  Es correcto. Aunque la normalización es vital para la integridad (OLTP), en sistemas de análisis (OLAP) se prefiere la desnormalización para evitar JOINs costosos y acelerar las consultas de lectura.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "intermedio"
  tags: ["metodologia"]

variables:
  pasos_correctos: ["Identificar dependencias funcionales", "Aplicar Primera Forma Normal", "Aplicar Segunda Forma Normal", "Aplicar Tercera Forma Normal"]

enunciado: "Para asegurar una base de datos bien estructurada, se debe seguir un proceso lógico de normalización. Ordena los pasos:"

respuesta_orden: ["Identificar dependencias funcionales", "Aplicar Primera Forma Normal", "Aplicar Segunda Forma Normal", "Aplicar Tercera Forma Normal"]
tipo: ordenar
opciones_explicitas: ["Aplicar Tercera Forma Normal", "Identificar dependencias funcionales", "Aplicar Segunda Forma Normal", "Aplicar Primera Forma Normal"]

explicacion: |
  La normalización es un proceso iterativo y progresivo. No se puede aplicar la 2FN sin haber cumplido la 1FN, y para la 2FN es indispensable haber identificado las dependencias funcionales.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "avanzado"
  tags: ["dependencia_funcional", "2fn"]

enunciado: "En la Segunda Forma Normal (2FN), es fundamental que todos los atributos que no forman parte de la clave primaria dependan de la clave completa y no solo de una parte de ella. A esto se le llama evitar la dependencia ___."

respuesta: "parcial"
respuestas_validas:
  - "parcial"
tipo: completar

explicacion: |
  La dependencia parcial ocurre cuando un atributo depende de solo una parte de una clave compuesta. La 2FN exige que todos los atributos no clave dependan de la clave primaria completa.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "basico"
  tags: ["redundancia", "integridad"]

respuesta: "anomalias"
tipo: "completar"
respuestas_validas:
  - "anomalias"
  - "anomalia"

enunciado: "La redundancia de datos en una base de datos no normalizada puede provocar errores de consistencia conocidos como ___ de actualización o de borrado."

explicacion: |
  La redundancia es la duplicación innecesaria de datos. Cuando un dato se repite en varios lugares, si se actualiza en uno y no en el otro, se producen anomalías que rompen la integridad de la información.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "intermedio"
  tags: ["desnormalizacion", "rendimiento"]

respuesta: "La normalización prioriza la integridad mediante la reducción de redundancia."
tipo: "mc"
opciones_explicitas: ["La normalización prioriza la integridad mediante la reducción de redundancia.", "La desnormalización prioriza la integridad mediante la reducción de redundancia.", "Ambas buscan lo mismo pero con diferentes nombres.", "Ninguna de las anteriores."]

enunciado: "Considerando el objetivo principal de cada proceso, ¿cuál de las siguientes afirmaciones es correcta?"

pasos:
  - "Analizar si el objetivo es evitar duplicados (normalizar) o acelerar lecturas (desnormalizar)."

explicacion: |
  La normalización busca eliminar la redundancia para asegurar la integridad. La desnormalización, por el contrario, introduce redundancia deliberadamente para mejorar el rendimiento de las consultas de lectura.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "avanzado"
  tags: ["dependencia_funcional", "3nf"]

respuesta: verdadero
tipo: "vf"

enunciado: "En el contexto de la Tercera Forma Normal (3NF), una dependencia transitiva ocurre cuando un atributo no clave depende de otro atributo que tampoco es una clave primaria, lo cual es distinto a una dependencia funcional directa sobre la clave."

explicacion: |
  Correcto. La 3NF exige que todos los atributos no clave dependan directamente de la clave primaria y no de otros atributos no clave (eliminando así la dependencia transitiva).
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "basico"
  tags: ["proceso", "orden"]

tipo: ordenar
opciones_explicitas: ["1NF", "2NF", "3NF"]
respuesta_orden: ["1NF", "2NF", "3NF"]

enunciado: "Ordene los pasos lógicos de las formas normales para asegurar una base de datos sin redundancias excesivas:"

explicacion: |
  El proceso estándar es asegurar primero la atomicidad (1NF), luego la dependencia funcional completa sobre la clave (2NF) y finalmente eliminar dependencias transitivas (3NF).
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "intermedio"
  tags: ["redundancia", "duplicacion"]

respuesta: falso
tipo: vf

enunciado: "Si un dato se repite en una tabla simplemente porque es necesario para realizar un JOIN eficiente en un modelo OLAP (Data Warehouse), ¿se considera una redundancia problemática que debe evitarse estrictamente como en el modelo OLTP?"

explicacion: |
  En sistemas OLAP, la redundancia controlada es una estrategia de diseño para el rendimiento. En sistemas OLTP (transaccionales), la redundancia es un error que causa inconsistencias.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "basico"
  tags: ["redundancia", "integridad"]

respuesta: "Anomalía de actualización"
tipo: mc
opciones_explicitas: ["Inconsistencia", "Anomalía de actualización", "Anomalía de inserción", "Pérdida de integridad"]

enunciado: "Si en una tabla de ventas repetimos el Nombre y la Dirección del Cliente para cada producto vendido, y el cliente cambia de domicilio pero solo actualizamos una fila, generamos una anomalía de tipo: ___"

explicacion: |
  La redundancia de datos provoca que la información se repita innecesariamente, lo que deriva en anomalías de actualización cuando los datos no se mantienen sincronizados en todos los registros.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "basico"
  tags: ["objetivo", "teoria"]

respuesta: verdadero
tipo: vf

enunciado: "El objetivo principal de la normalización es minimizar la redundancia de datos para evitar anomalías de inserción, actualización y borrado."

explicacion: |
  Correcto. La normalización busca estructurar las tablas para que cada dato se almacene en un único lugar, garantizando la integridad de la información.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "intermedio"
  tags: ["anomalia", "insercion"]

respuesta: "No podemos registrar un nuevo curso si no hay alumnos inscritos"
tipo: completar
respuestas_validas:
  - "No podemos registrar un nuevo curso si no hay alumnos inscritos"

enunciado: "En una tabla desnormalizada que combina 'Estudiantes' y 'Cursos', si intentamos agregar un curso que aún no tiene alumnos inscritos y la clave primaria depende de ambos, nos enfrentamos a una: ___"

explicacion: |
  Esto se conoce como anomalía de inserción: la imposibilidad de añadir información porque falta un dato que forma parte de la clave primaria.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

respuesta_orden: ["1FN", "2FN", "3FN"]
tipo: ordenar
opciones_explicitas: ["3FN", "1FN", "2FN"]

enunciado: "Ordena los pasos lógicos para alcanzar la Tercera Forma Normal (3FN) partiendo de una tabla no normalizada:"

explicacion: |
  El proceso de normalización es iterativo y jerárquico: primero se asegura la atomicidad (1FN), luego la dependencia funcional completa (2FN) y finalmente se eliminan las dependencias transitivas (3FN).
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "avanzado"
  tags: ["dependencia", "funcional"]

variables:
  ejemplo_idx: uno_de([0, 1])
  ejemplos: [["ID_Empleado -> Nombre_Empleado", "ID_Producto -> Fecha_Venta"], ["ID_Cliente -> Dirección_Cliente", "ID_Pedido -> ID_Cliente"]]

respuesta: ejemplos[ejemplo_idx][0]
tipo: mc
opciones_explicitas: ["ID_Empleado -> Nombre_Empleado", "ID_Producto -> Fecha_Venta", "ID_Cliente -> Dirección_Cliente", "ID_Pedido -> ID_Cliente"]

enunciado: "Para cumplir con la Segunda Forma Normal (2FN), debemos asegurar que todos los atributos no clave dependan de la clave primaria completa. Un ejemplo de una dependencia funcional válida es: ___"

explicacion: |
  En la 2FN, cada atributo que no es parte de la clave debe depender de toda la clave primaria, no solo de una parte de ella (evitando dependencias parciales).
```

## Sección: ofimatica-planilla-de-calculo (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["conceptos", "celda"]

tipo: mc
opciones_explicitas: ["La intersección de una fila y una columna", "El espacio para escribir texto solamente", "Una función matemática predefinida", "El comando para guardar el archivo"]

respuesta: "La intersección de una fila y una columna"

enunciado: "En una planilla de cálculo, la unidad básica de información se denomina ___."

explicacion: |
  Cada celda se identifica por la combinación de su letra de columna y su número de fila (ej. A1).
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["referencias", "celdas"]

tipo: vf

enunciado: "Si una celda tiene la referencia $A$1, esto significa que la columna A está fijada (referencia absoluta) y la fila 1 es relativa."

respuesta: falso

explicacion: |
  El símbolo $ antes de la letra fija la columna, y el símbolo $ antes del número fija la fila. En $A$1, ambos están fijados.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["formulas", "sintaxis"]

tipo: completar
respuestas_validas:
  - "="

respuesta: "="

enunciado: "Para que una celda reconozca que el contenido ingresado es una fórmula y no un texto simple, el primer carácter debe ser ___."

explicacion: |
  Toda fórmula o función en una planilla de cálculo debe comenzar obligatoriamente con el signo igual (=).
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["operadores", "aritmética"]

tipo: mc
opciones_explicitas: ["*", "/", "+", "-"]

respuesta: "*"

enunciado: "En una planilla de cálculo, el operador utilizado para representar la multiplicación es ___."

explicacion: |
  Los operadores básicos son: + (suma), - (resta), * (multiplicación) y / (división).
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["prioridad", "operaciones"]

tipo: ordenar

opciones_explicitas: ["Paréntesis", "Potencias", "Multiplicación y División", "Suma y Resta"]

respuesta_orden: ["Paréntesis", "Potencias", "Multiplicación y División", "Suma y Resta"]

enunciado: "Ordena los siguientes elementos según la jerarquía de prioridad de operaciones en una fórmula de planilla de cálculo, de mayor a menor importancia:"

explicacion: |
  La jerarquía matemática se respeta en las planillas: primero lo que está entre paréntesis, luego potencias, luego multiplicación/división y finalmente suma/resta.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["celdas", "referencias"]

respuesta: "absoluta"
tipo: completar
respuestas_validas:
  - "absoluta"

enunciado: "Si queremos fijar la celda A1 para que no cambie al arrastrar una fórmula hacia abajo, debemos usar una referencia tipo ___."

explicacion: |
  Para mantener una referencia fija (como el valor de un impuesto o un tipo de cambio), se utiliza el símbolo '$' antes de la letra y el número (ej. $A$1). Esto se conoce como referencia absoluta.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["formulas"]

variables:
  val1: 15
  val2: 25

respuesta: 40
tipo: completar
tolerancia_abs: 0

enunciado: "En una planilla, si la celda A1 contiene {val1} y la celda B1 contiene {val2}, ¿cuál es el resultado de la fórmula =SUMA(A1;B1)?"

pasos:
  - "Identificar los valores en las celdas A1 y B1."
  - "Sumar ambos valores: 15 + 25."

explicacion: |
  La función SUMA suma los valores de los rangos o celdas indicados. En este caso, 15 + 25 = 40.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["operadores"]

variables:
  op_multi: "*"
  op_div: "/"

respuesta: "*"
tipo: mc
opciones_explicitas: ["+", "*", "/", "-"]

enunciado: "Para realizar una multiplicación entre la celda A1 y la celda B1 en una fórmula de planilla de cálculo, se debe utilizar el operador: ___."

explicacion: |
  En las hojas de cálculo, el asterisco (*) representa la multiplicación, el signo más (+) la suma, el signo menos (-) la resta y la barra diagonal (/) la división.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["logica", "celdas"]

variables:
  condicion: falso

respuesta: falso
tipo: vf

enunciado: "Si una celda A1 tiene el valor 10, la expresión lógica =A1>20 devuelve el valor booleano verdadero."

explicacion: |
  La expresión evalúa si 10 es mayor que 20. Como esto es falso, el resultado de la comparación es el booleano falso.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["orden_operaciones"]

variables:
  f_orden: ["Paréntesis", "Potencia", "Multiplicación/División", "Suma/Resta"]

respuesta_orden: ["Paréntesis", "Potencia", "Multiplicación/División", "Suma/Resta"]
tipo: ordenar
opciones_explicitas: ["Paréntesis", "Potencia", "Multiplicación/División", "Suma/Resta"]

enunciado: "Ordena las operaciones según la jerarquía de precedencia matemática que siguen las fórmulas en una planilla de cálculo:"

explicacion: |
  Al igual que en la matemática, las hojas de cálculo resuelven primero lo que está entre paréntesis, luego potencias, después multiplicaciones y divisiones, y finalmente sumas y restas.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["celdas", "referencias", "formulas"]

variables:
  datos: [["A1", "A2"], ["B5", "B6"]]
  idx: uno_de([0, 1])
  ref_origen: datos[idx][0]
  ref_destino: datos[idx][1]

enunciado: "Si arrastras la fórmula {ref_origen} hacia abajo una fila, la referencia cambiará a {ref_destino} si la referencia es relativa."

respuesta: verdadero
tipo: vf

explicacion: |
  Las referencias relativas (sin $) cambian automáticamente al copiar la fórmula a otra celda. Las referencias absolutas (con $) permanecen fijas.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["errores", "sintaxis"]

enunciado: |
  ¿Cuál es la forma correcta de escribir la función SUMA para sumar el rango A1:A5 en una planilla de cálculo?

opciones_explicitas: ["=SUMA(A1:A5)", "SUMA(A1:A5)", "SUMA(A1;A5)", "SUMA(A1,A5)"]

respuesta: "=SUMA(A1:A5)"
tipo: mc

explicacion: |
  En una planilla de cálculo, toda fórmula o función debe comenzar obligatoriamente con el signo igual (=).
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["operadores", "precedencia"]

enunciado: "Si en la celda A1 tenemos 10, en A2 tenemos 5 y en A3 tenemos 2, ¿cuál es el orden de evaluación de la fórmula =A1+A2*A3?"

pasos:
  - "Primero se identifica la multiplicación"
  - "Luego se identifica la suma"

opciones_explicitas: ["A1+A2 y luego *A3", "A2*A3 y luego +A1"]

respuesta: "A2*A3 y luego +A1"
tipo: mc

explicacion: |
  Siguiendo la jerarquía de operaciones matemáticas, la multiplicación tiene prioridad sobre la suma.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["errores", "logica"]

enunciado: "Si en la celda A1 escribes la fórmula =A1+10, el programa detectará un error de tipo ___."

respuestas_validas:
  - "circular"
  - "referencia"

respuesta: "circular"
tipo: completar

explicacion: |
  Una referencia circular ocurre cuando una fórmula intenta calcular su propio valor, creando un bucle infinito.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["referencias", "absolutas"]

enunciado: "Para fijar la columna A pero permitir que la fila cambie al arrastrar hacia abajo, la referencia correcta es ___."

respuestas_validas:
  - "$A1"

respuesta: "$A1"
tipo: completar

explicacion: |
  El signo $ antes de la letra fija la columna, mientras que el signo $ antes del número fija la fila.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["celdas", "referencias"]

respuesta: verdadero
tipo: vf
enunciado: "En una planilla de cálculo, la principal distinción de una referencia absoluta es que mantiene la posición de la celda fija aunque se copie la fórmula a otra ubicación, utilizando el signo $."

pasos:
  - "Identificar si la referencia cambia al arrastrar la fórmula."
  - "Observar la presencia del símbolo $ en la referencia."

explicacion: |
  Las referencias relativas (ej. A1) cambian según la posición donde se pegue la fórmula. Las referencias absolutas (ej. $A$1) permanecen constantes.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["celdas", "rangos"]

respuesta: "A1:B2"
tipo: completar
respuestas_validas:
  - "A1:B2"
  - "A1-B2"
  - "A1...B2"

enunciado: "Si queremos referirnos a un conjunto de celdas que abarca desde la celda A1 hasta la celda B2, la notación correcta para representar este rango es ___."

explicacion: |
  En las planillas de cálculo, los rangos se definen utilizando los dos puntos (:) para indicar el origen y el destino del área seleccionada.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["formulas", "funciones"]

opciones_explicitas: ["Una fórmula es una expresión escrita por el usuario, mientras que una función es una fórmula predefinida por el programa.", "Una fórmula es una función, mientras que una función es una fórmula.", "No existe diferencia entre ambas.", "Las fórmulas solo usan números y las funciones solo usan texto."]

respuesta: "Una fórmula es una expresión escrita por el usuario, mientras que una función es una fórmula predefinida por el programa."
tipo: mc

enunciado: "Al comparar el uso de fórmulas y funciones en una celda, ¿cuál es la distinción fundamental?"

explicacion: |
  Una fórmula es cualquier expresión que comienza con "=" (ej. =A1+A2), mientras que una función es un componente de la fórmula ya programado (ej. SUMA, PROMEDIO) que realiza un cálculo específico.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["operadores", "logica"]

respuesta: falso
tipo: vf

enunciado: "En una fórmula de planilla de cálculo, el operador '=' se utiliza exclusivamente para asignar un valor a una celda, y no puede ser usado para comparar si dos valores son iguales."

explicacion: |
  El signo '=' tiene una doble función: inicia una fórmula y actúa como operador de comparación lógica para evaluar la igualdad entre dos expresiones.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["operadores", "orden_operaciones"]

opciones_explicitas: ["Paréntesis", "Multiplicación y División", "Suma y Resta"]

respuesta_orden: ["Paréntesis", "Multiplicación y División", "Suma y Resta"]
tipo: ordenar

enunciado: "Ordene los siguientes elementos según el orden de prioridad (precedencia) en el que la planilla de cálculo resuelve las operaciones en una fórmula:"

pasos:
  - "Observar los símbolos de agrupación."
  - "Observar las operaciones aritméticas básicas."

explicacion: |
  El orden de prioridad estándar sigue la jerarquía matemática: primero se resuelven los paréntesis, luego potencias, después multiplicación/división y finalmente suma/resta.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["excel", "celdas", "referencias"]

variables:
  datos: [["A1", "A2", "B1"], ["C5", "C6", "D5"], ["F10", "F11", "G10"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si en la celda B1 escribimos la fórmula ={datos[idx][0]}*{datos[idx][1]} y arrastramos el controlador de relleno hacia abajo una fila, la fórmula en la celda B2 será ___."

respuestas_validas:
  - "A2*A2"
  - "C6*C6"
  - "F11*F11"

respuesta: datos[idx][2]
tipo: completar
tolerancia_abs: 0

explicacion: |
  Al arrastrar una referencia relativa (sin $) hacia abajo, la fila aumenta automáticamente. Como el primer término es una referencia a una celda, esta cambia de A1 a A2, C5 a C6, o F10 a F11.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["formulas", "operaciones"]

variables:
  valores: [[10, 5, 2], [20, 4, 3], [50, 2, 10]]
  idx: uno_de([0, 1, 2])
  a: valores[idx][0]
  b: valores[idx][1]
  c: valores[idx][2]
  resultado: a + b * c

enunciado: "En una planilla, la celda A1 tiene el valor {a}, la A2 tiene {b} y la A3 tiene {c}. Si en A4 escribimos la fórmula ={a} + {b} * {c}, ¿cuál es el resultado?"

tipo: completar
respuesta: resultado
tolerancia_abs: 0

explicacion: |
  Por la jerarquía de operaciones, la multiplicación se realiza antes que la suma. 
  En el caso actual: {a} + ({b} * {c}).
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["funciones", "suma"]

variables:
  datos: [[10, 20, 30], [10, 10, 10], [100, 200, 300]]
  idx: uno_de([0, 1, 2])

enunciado: "Si tenemos los valores {datos[idx][0]}, {datos[idx][1]} y {datos[idx][2]} en las celdas A1, A2 y A3 respectivamente, ¿cuál es el resultado de aplicar la función =SUMA(A1:A3)?"

opciones_explicitas: [30, 60, 65, 90, 600]

respuesta: datos[idx][0] + datos[idx][1] + datos[idx][2]
tipo: mc

explicacion: |
  La función SUMA con el operador de rango ':' suma todos los valores comprendidos entre la celda inicial y la final.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["formato", "texto"]

enunciado: "En una planilla de cálculo, si queremos que una celda muestre el texto 'Hola Mundo' como parte de una fórmula, debemos escribirlo entre comillas, por ejemplo: =CONCATENAR(\"Hola\", \" \", \"Mundo\")."

tipo: vf

respuesta: verdadero

explicacion: |
  Para que una planilla de cálculo interprete una cadena de caracteres como texto y no como una función o nombre de variable, los valores textuales deben ir entre comillas dobles.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["jerarquia", "operadores"]

enunciado: "Para resolver una fórmula compleja que combina sumas, multiplicaciones y paréntesis, ¿cuál es el orden correcto de ejecución que sigue el motor de la planilla?"

opciones_explicitas:
  - "Paréntesis"
  - "Potencias"
  - "Multiplicación/División"
  - "Suma/Resta"

respuesta_orden: ["Paréntesis", "Potencias", "Multiplicación/División", "Suma/Resta"]

explicacion: |
  Las hojas de cálculo siguen la jerarquía matemática estándar (PEMDAS/BODMAS): primero se resuelven los paréntesis, luego potencias, después multiplicaciones y divisiones, y finalmente sumas y restas.
```

## Sección: paginacion (21 preguntas)

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "basico"
  tags: ["conceptos", "memoria-virtual"]

respuesta: verdadero
tipo: vf

enunciado: "La paginación es un mecanismo que permite a un programa utilizar más espacio de memoria del que físicamente está disponible en la RAM."

explicacion: |
  Correcto. La paginación gestiona la memoria virtual, dividiendo la memoria lógica en páginas y la física en marcos, permitiendo usar el disco duro como extensión de la RAM.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "intermedio"
  tags: ["fallos", "procesos"]

respuesta: verdadero
tipo: vf

enunciado: "Un 'fallo de página' ocurre cuando un programa intenta acceder a una página que no se encuentra actualmente en la RAM."

explicacion: |
  Verdadero. El sistema operativo debe entonces detener el proceso, buscar un marco libre (o liberar uno), cargar la página desde el disco y actualizar la tabla de páginas.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "intermedio"
  tags: ["estructura", "traduccion"]

respuesta: verdadero
tipo: vf

enunciado: "La tabla de páginas es una estructura de datos utilizada por el sistema operativo para mapear las páginas virtuales a los marcos de página físicos."

explicacion: |
  Verdadero. Esta tabla es esencial para que la MMU sepa dónde está cada página en la memoria física.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "intermedio"
  tags: ["rendimiento", "discos"]

respuesta: verdadero
tipo: vf

enunciado: "El intercambio constante de datos entre la RAM y el disco duro debido a fallos de página puede degradar significativamente el rendimiento del sistema."

explicacion: |
  Verdadero. El disco duro es mucho más lento que la RAM. Si hay muchos fallos de página (thrashing), el sistema pasa más tiempo moviendo datos que ejecutando instrucciones.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "basico"
  tags: ["conceptos", "ilusion"]

respuesta: verdadero
tipo: vf

enunciado: "La paginación crea la ilusión de tener una memoria infinita, aunque la RAM física sea limitada."

explicacion: |
  Correcto. Esta ilusión se llama memoria virtual y permite ejecutar programas que son más grandes que la memoria física disponible.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["eficiencia", "tipos"]

respuesta: falso
tipo: vf

enunciado: "La paginación introduce fragmentación externa porque los bloques de memoria asignados pueden ser de tamaños variables."

explicacion: |
  Falso. La paginación elimina la fragmentación externa porque las páginas y marcos tienen tamaños fijos. Sin embargo, puede haber fragmentación interna (espacio desperdiciado dentro de un marco).
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["problemas", "rendimiento"]

respuesta: verdadero
tipo: vf

enunciado: "El 'thrashing' o agotamiento de memoria ocurre cuando el sistema pasa más tiempo gestionando fallos de página que ejecutando procesos útiles."

explicacion: |
  Verdadero. Es una condición crítica donde la actividad de paginación impide el progreso real de los programas.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "intermedio"
  tags: ["procesos", "mmu"]

respuesta: verdadero
tipo: vf

enunciado: "La traducción de direcciones virtuales a físicas se realiza completamente por software, sin intervención del hardware."

explicacion: |
  Falso. La MMU (hardware) realiza la traducción en tiempo real. El sistema operativo (software) gestiona las tablas, pero la traducción es hardware.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["eficiencia", "desperdicio"]

respuesta: verdadero
tipo: vf

enunciado: "La paginación puede causar fragmentación interna, que es el espacio desperdiciado dentro del último marco de página de un proceso si este no llena el marco completamente."

explicacion: |
  Verdadero. Como el tamaño de la última página lógica puede ser menor que el tamaño del marco físico, el espacio restante en ese marco se pierde.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "intermedio"
  tags: ["comparacion", "segmentacion"]

respuesta: verdadero
tipo: vf

enunciado: "Una ventaja clave de la paginación sobre la segmentación es que no requiere que el espacio de direcciones del programa sea contiguo en la memoria física."

explicacion: |
  Correcto. Las páginas pueden estar dispersas en la RAM, mientras que los segmentos suelen requerir bloques contiguos.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["optimizacion", "estructuras"]

respuesta: verdadero
tipo: vf

enunciado: "Una tabla de páginas invertida indexa por marcos de página físicos en lugar de por direcciones virtuales, lo que puede ahorrar memoria en sistemas con mucho espacio de direcciones."

explicacion: |
  Verdadero. En lugar de una entrada por página virtual, hay una entrada por marco físico, reduciendo el tamaño de la tabla en sistemas con grandes espacios virtuales.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["algoritmos", "reemplazo"]

respuesta: verdadero
tipo: vf

enunciado: "El algoritmo LRU (Least Recently Used) selecciona para reemplazo la página que no se ha utilizado durante el periodo de tiempo más largo."

explicacion: |
  Verdadero. Se basa en la premisa de que las páginas usadas recientemente probablemente se usarán de nuevo pronto, y las no usadas en mucho tiempo, menos.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["hardware", "caché"]

respuesta: verdadero
tipo: vf

enunciado: "La TLB es una caché de hardware que almacena las traducciones más recientes de direcciones virtuales a físicas para acelerar el acceso."

explicacion: |
  Verdadero. Sin la TLB, cada acceso a memoria requeriría dos accesos a la RAM (uno para la tabla de páginas y otro para el dato), lo cual es muy lento.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "intermedio"
  tags: ["procesos", "io"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando ocurre un fallo de página, el sistema operativo debe realizar una operación de entrada/salida (I/O) desde el disco para cargar la página."

explicacion: |
  Verdadero. La página debe ser leída desde el archivo de paginación o swap en el disco hasta un marco libre en la RAM.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "basico"
  tags: ["conceptos", "disco"]

respuesta: verdadero
tipo: vf

enunciado: "El área del disco duro utilizada para guardar páginas que no están en la RAM se denomina comúnmente 'swap' o archivo de paginación."

explicacion: |
  Verdadero. Es el espacio de memoria virtual en el disco que actúa como extensión de la RAM.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "intermedio"
  tags: ["algoritmos", "reemplazo"]

respuesta: verdadero
tipo: vf

enunciado: "El algoritmo FIFO (First-In, First-Out) reemplaza la página que ha estado en la memoria física por el mayor tiempo, independientemente de su frecuencia de uso."

explicacion: |
  Verdadero. Es simple pero puede tener un comportamiento subóptimo comparado con LRU, ya que no considera el patrón de acceso.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["eficiencia", "recursos"]

respuesta: verdadero
tipo: vf

enunciado: "Un inconveniente de la paginación es el consumo de memoria RAM para almacenar las tablas de páginas de cada proceso."

explicacion: |
  Verdadero. Cada proceso necesita su propia tabla de páginas, lo que consume memoria física, especialmente si el espacio de direcciones es muy grande.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["estructuras", "comparacion"]

respuesta: verdadero
tipo: vf

enunciado: "La paginación directa usa tablas indexadas por dirección virtual, mientras que la paginación inversa usa tablas indexadas por dirección física."

explicacion: |
  Verdadero. Esto cambia la forma en que se busca la traducción y el tamaño de la estructura de datos.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "basico"
  tags: ["seguridad", "aislamiento"]

respuesta: verdadero
tipo: vf

enunciado: "La paginación ayuda al aislamiento de procesos porque cada proceso tiene su propio espacio de direcciones virtuales."

explicacion: |
  Verdadero. Un proceso no puede acceder directamente a la memoria de otro, ya que sus direcciones virtuales se traducen a marcos físicos diferentes o no mapeados.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["algoritmos", "teoria"]

respuesta: verdadero
tipo: vf

enunciado: "El algoritmo de reemplazo óptimo (OPT) reemplaza la página que no se usará durante el periodo de tiempo más largo en el futuro. Es ideal pero no implementable en la práctica."

explicacion: |
  Verdadero. OPT requiere conocer la secuencia futura de accesos a memoria, lo cual es imposible de predecir con certeza en un sistema en ejecución.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["consistencia", "hardware"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando el sistema operativo modifica la tabla de páginas, puede ser necesario invalidar las entradas correspondientes en la TLB para evitar que se usen direcciones obsoletas."

explicacion: |
  Verdadero. La TLB puede tener caché de traducciones antiguas. Si la tabla de páginas cambia, esas entradas en la TLB deben ser descartadas o actualizadas.
```

## Sección: patrones-y-buenas-practicas (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "patrones_y_buenas_practicas"
  nivel: "basico"
  tags: ["conceptos", "patrones"]

respuesta: "solucion"
tipo: "completar"
respuestas_validas:
  - "solucion"
  - "soluciones"

enunciado: "Un patrón de diseño es una ________ reutilizable que sirve para resolver un problema común dentro de un contexto de diseño de software."

explicacion: |
  Los patrones de diseño no son fragmentos de código, sino descripciones de soluciones a problemas recurrentes en el desarrollo de software.
```

```
metadata:
  materia: "informatica"
  tema: "patrones_y_buenas_practicas"
  nivel: "basico"
  tags: ["clasificacion", "categorias"]

respuesta: "Creacionales"
tipo: "completar"

enunciado: "Si un programador utiliza el patrón 'Singleton' para asegurar que una clase tenga una única instancia, está utilizando un patrón de tipo: ___."

explicacion: |
  Los patrones se dividen en tres categorías principales según su propósito: Creacionales, Estructurales y de Comportamiento.
```

```
metadata:
  materia: "informatica"
  tema: "patrones_y_buenas_practicas"
  nivel: "intermedio"
  tags: ["solid", "buenas_practicas"]

respuesta: verdadero
tipo: "vf"

enunciado: "El principio de Responsabilidad Única (SRP) establece que una clase debe tener una, y solo una, razón para cambiar."

explicacion: |
  Correcto. El SRP busca que cada módulo o clase sea responsable de una única parte de la funcionalidad, facilitando el mantenimiento y la testabilidad.
```

```
metadata:
  materia: "informatica"
  tema: "patrones_y_buenas_practicas"
  nivel: "basico"
  tags: ["proceso", "desarrollo"]

respuesta_orden: ["Identificar el problema", "Analizar la solución existente", "Implementar el patrón", "Refactorizar el código"]
tipo: "ordenar"
opciones_explicitas: ["Identificar el problema", "Analizar la solución existente", "Implementar el patrón", "Refactorizar el código"]

enunciado: "Ordena los pasos lógicos para la aplicación correcta de un patrón de diseño en un sistema existente:"

explicacion: |
  Primero se debe entender el problema, luego evaluar si un patrón conocido aplica, se implementa y finalmente se refactoriza para asegurar la calidad.
```

```
metadata:
  materia: "informatica"
  tema: "patrones_y_buenas_practices"
  nivel: "basico"
  tags: ["reutilizacion", "eficiencia"]

respuesta: "reutilizar"
tipo: "mc"
opciones_explicitas: ["reutilizar", "copiar"]

enunciado: "El objetivo principal de aplicar buenas prácticas y patrones es poder ________ la lógica de solución en diferentes partes del sistema sin duplicar código innecesariamente."

explicacion: |
  La reutilización es un pilar de la ingeniería de software que permite aumentar la productividad y reducir la probabilidad de errores.
```

```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "intermedio"
  tags: ["creacionales", "singleton"]

variables:
  escenario: uno_de([["Gestión de conexión a base de datos", "DatabaseConnection"], ["Gestión de configuración global", "ConfigManager"], ["Gestión de sistema de logs", "LoggerInstance"]])

enunciado: "Se requiere implementar un patrón que garantice que una clase tenga una única instancia y proporcione un punto de acceso global a ella. En el caso de un {escenario[0]}, la clase sería {escenario[1]}."

opciones_explicitas: ["Singleton", "Factory", "Observer", "Strategy"]
respuesta: "Singleton"
tipo: "mc"

explicacion: |
  El patrón Singleton asegura que una clase tenga una única instancia durante toda la ejecución del programa, lo cual es ideal para recursos compartidos como conexiones a bases de datos o configuraciones.
```

```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "intermedio"
  tags: ["comportamiento", "observer"]

enunciado: "En el patrón Observer, un objeto llamado 'Subject' mantiene una lista de sus dependientes. Cuando el estado del Subject cambia, este debe notificar a sus ___ para que actualicen su estado."

respuestas_validas:
  - "observadores"
  - "observers"
  - "subscriptores"
respuesta: "observadores"
tipo: "completar"

explicacion: |
  El patrón Observer define una relación de uno a muchos, donde cuando un objeto cambia su estado, todos sus dependientes (observadores) son notificados automáticamente.
```

```
metadata:
  materia: "informatica"
  tema: "buenas_practicas"
  nivel: "basico"
  tags: ["clean_code", "refactoring"]

variables:
  caso: uno_de([["un método que calcula el IVA, aplica un descuento y luego imprime el total", "calcular_total_con_impuestos"], ["un método que valida datos, conecta a la red y procesa un archivo", "procesar_archivo_seguro"]])

enunciado: "Tienes un método llamado '{caso[0]}' que es demasiado largo y realiza múltiples tareas distintas. Para aplicar la técnica de 'Extract Method', deberías dividirlo en métodos más pequeños y específicos. ¿Cuál es el objetivo principal de esta práctica?"

opciones_explicitas: ["Aumentar la complejidad del código", "Mejorar la legibilidad y reutilización", "Hacer que el código sea más lento", "Eliminar la necesidad de comentarios"]
respuesta: "Mejorar la legibilidad y reutilización"
tipo: "mc"

explicacion: |
  La extracción de métodos permite que cada función tenga una única responsabilidad (Single Responsibility Principle), facilitando la lectura y permitiendo reutilizar fragmentos de lógica en otros lugares.
```

```
metadata:
  materia: "informatica"
  tema: "buenas_practicas"
  nivel: "intermedio"
  tags: ["solid", "srp"]

variables:
  clase_mala: uno_de([["Clase Usuario que guarda datos en BD y también envía emails", "Usuario"], ["Clase Factura que calcula totales y también genera un PDF", "Factura"]])

enunciado: "Si tenemos una clase llamada {clase_mala[0]} que realiza la lógica de negocio y además se encarga de la persistencia en base de datos y el envío de notificaciones, ¿está cumpliendo con el Principio de Responsabilidad Única (SRP)?"

opciones_explicitas: [verdadero, falso]
respuesta: falso
tipo: "vf"

explicacion: |
  El SRP dicta que una clase debe tener una, y solo una, razón para cambiar. Si una clase maneja lógica de negocio y también detalles de infraestructura (como BD o envío de emails), viola este principio.
```

```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "avanzado"
  tags: ["comportamiento", "command"]

enunciado: "Para implementar correctamente el patrón Command, se deben seguir estos pasos en orden para transformar una acción en un objeto ejecutable:"

opciones_explicitas: ["Definir el Command con el método execute()", "Crear el Receiver que contiene la lógica real", "El Invoker solicita la ejecución al Command", "El Cliente instancia el Command y lo vincula al Receiver"]

respuesta_orden: ["Crear el Receiver que contiene la lógica real", "Definir el Command con el método execute()", "El Cliente instancia el Command y lo vincula al Receiver", "El Invoker solicita la ejecución al Command"]

tipo: "ordenar"

explicacion: |
  El patrón Command encapsula una solicitud como un objeto, permitiendo parametrizar clientes, colar solicitudes o soportar operaciones que se pueden deshacer (undo).
```

```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "intermedio"
  tags: ["creacionales", "singleton"]

enunciado: "El patrón Singleton se utiliza para asegurar que una clase tenga una única instancia y proporciona un punto de acceso global a ella. Sin embargo, una crítica común es que su uso excesivo puede ___."

opciones_explicitas: ["mejorar la modularidad", "crear un estado global difícil de testear", "aumentar la velocidad de ejecución", "eliminar la necesidad de clases"]

respuesta: "crear un estado global difícil de testear"
tipo: mc

explicacion: |
  El patrón Singleton es criticado frecuentemente porque introduce un estado global en la aplicación, lo que dificulta el aislamiento de componentes durante las pruebas unitarias (testing), ya que el estado de la instancia persiste entre diferentes tests.
```

```
metadata:
  materia: "informatica"
  tema: "buenas_practicas"
  nivel: "basico"
  tags: ["solid", "srp"]

variables:
  clase_nombre: uno_de(["GestorBaseDeDatos", "CalculadoraMatematica"])

enunciado: "De acuerdo al Principio de Responsabilidad Única (SRP), una clase como {clase_nombre} debe tener una única razón para cambiar. Si esta clase además de procesar datos también se encarga de la interfaz de usuario, se está violando este principio."

respuesta: falso
tipo: vf

explicacion: |
  El SRP establece que una clase debe tener una sola responsabilidad. Si una clase maneja lógica de negocio y también la presentación (UI), se vuelve rígida y difícil de mantener, violando el principio.
```

```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "avanzado"
  tags: ["inversion_de_control", "di"]

enunciado: "En el patrón de Inyección de Dependencias (DI), el comportamiento correcto es que ___"

opciones_explicitas: ["el objeto crea sus propias dependencias internamente", "el objeto recibe sus dependencias desde el exterior"]

respuesta: "el objeto recibe sus dependencias desde el exterior"
tipo: mc

explicacion: |
  La Inyección de Dependencias es una forma de Inversión de Control (IoC) donde las dependencias de un objeto se le pasan (inyectan) desde el exterior (por constructor, setter o interfaz), en lugar de que el objeto las instancie por sí mismo.
```

```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "intermedio"
  tags: ["creacionales", "factory"]

enunciado: "Para implementar correctamente un patrón Factory Method y asegurar la extensibilidad, se deben seguir estos pasos en orden:"

opciones_explicitas: ["Definir la interfaz del producto", "Crear las implementaciones concretas del producto", "Implementar la clase creadora con el método factory"]

respuesta_orden: ["Definir la interfaz del producto", "Crear las implementaciones concretas del producto", "Implementar la clase creadora con el método factory"]
tipo: ordenar

explicacion: |
  Primero se define qué es lo que se va a crear (la interfaz del producto), luego se crean las versiones específicas (productos concretos) y finalmente se crea la lógica que decide qué producto instanciar (el método factory en la clase creadora).
```

```
metadata:
  materia: "informatica"
  tema: "buenas_practicas"
  nivel: "basico"
  tags: ["calidad_codigo", "acoplamiento"]

enunciado: "En un diseño de software de alta calidad, buscamos que el acoplamiento entre módulos sea ___ y que la cohesión dentro de un módulo sea ___."

opciones_explicitas: ["alto y baja", "bajo y alta"]

respuesta: "bajo y alta"
tipo: mc

explicacion: |
  El acoplamiento bajo significa que los módulos son independientes y cambian poco entre sí. La cohesión alta significa que los elementos de un módulo están estrechamente relacionados y trabajan para un único objetivo.
```

```
metadata:
  materia: "informatica"
  tema: "patrones_y_buenas_practicas"
  nivel: "intermedio"
  tags: ["patrones_de_diseno", "conceptos_basicos"]

respuesta: "algoritmo"
tipo: completar
respuestas_validas:
  - "algoritmo"

enunciado: "Mientras que un patrón de diseño es una solución general a un problema recurrente de diseño de software, un ___ es una secuencia de pasos finitos y precisos para resolver un problema computacional específico."

explicacion: |
  Un patrón de diseño es una plantilla de alto nivel para resolver problemas de estructura, mientras que un algoritmo es una receta paso a paso para realizar un cálculo o tarea.
```

```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "intermedio"
  tags: ["creacionales", "singleton", "factory"]

respuesta: "Singleton"
tipo: mc
opciones_explicitas: ["Singleton", "Factory"]

enunciado: "Si el objetivo principal es garantizar que una clase tenga una única instancia en toda la aplicación, estamos ante un patrón ___."

explicacion: |
  El patrón Singleton asegura una instancia única, mientras que el patrón Factory se encarga de delegar la responsabilidad de la creación de objetos a una clase especializada.
```

```
metadata:
  materia: "informatica"
  tema: "buenas_practicas"
  nivel: "avanzado"
  tags: ["limpieza_de_codigo", "principios"]

respuesta: falso
tipo: vf

enunciado: "En el diseño de software orientado a objetos, una buena práctica consiste en buscar un diseño con alto acoplamiento y baja cohesión."

explicacion: |
  Es exactamente lo contrario: se busca un **bajo acoplamiento** (que los módulos sean independientes) y una **alta cohesión** (que cada módulo haga una sola cosa y la haga bien).
```

```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "intermedio"
  tags: ["procesos", "desarrollo"]

respuesta_orden: ["Identificar el problema", "Elegir el patrón adecuado", "Implementar la solución", "Refactorizar si es necesario"]
tipo: ordenar
opciones_explicitas: ["Identificar el problema", "Elegir el patrón adecuado", "Implementar la solución", "Refactorizar si es necesario"]

enunciado: "Ordene los pasos lógicos para aplicar correctamente un patrón de diseño en un proyecto de software:"

explicacion: |
  El proceso comienza con la comprensión del problema, seguido de la selección del patrón, la codificación y finalmente la revisión/refactorización para asegurar la calidad.
```

```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "avanzado"
  tags: ["oop", "herencia", "interfaces"]

respuesta: "interfaz"
tipo: mc
opciones_explicitas: ["interfaz", "clase_abstracta"]

enunciado: "Si necesitamos definir un contrato que solo especifique comportamientos (métodos sin implementación) sin poseer estado o lógica compartida, lo más adecuado es usar una ___."

explicacion: |
  Las interfaces definen "qué" puede hacer un objeto (contrato puro), mientras que las clases abstractas pueden definir "cómo" se hace algo (compartiendo código y estado) pero impidiendo la instanciación directa.
```

```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "intermedio"
  tags: ["diseño", "creacionales"]

variables:
  escenario: uno_de([["Se requiere que una clase de conexión a base de datos solo tenga una instancia única en toda la aplicación.", "Singleton"], ["Se requiere que un objeto pueda tener múltiples representaciones (como un checkbox o un botón) según el contexto.", "Flyweight"], ["Se requiere que un objeto delegue la creación de otros objetos a una subclase.", "Factory Method"]])

tipo: mc
opciones_explicitas: ["Singleton", "Flyweight", "Factory Method", "Observer"]

enunciado: "Un desarrollador debe resolver el siguiente escenario: {escenario[0]} ¿Qué patrón de diseño debe aplicar?"

respuesta: escenario[1]

explicacion: |
  El patrón Singleton garantiza que una clase tenga una única instancia y proporciona un punto de acceso global a ella.
```

```
metadata:
  materia: "informatica"
  tema: "buenas_practicas"
  nivel: "basico"
  tags: ["clean_code", "refactorizacion"]

variables:
  caso: uno_de([["Una función tiene 150 líneas de código y realiza tres tareas distintas.", "Dividir la función en funciones más pequeñas."], ["Una variable se llama 'x' y su valor cambia constantemente sin contexto claro.", "Renombrar la variable con un nombre descriptivo."], ["Un bloque de código se repite exactamente igual en tres archivos diferentes.", "Extraer el código repetido a una función o clase común."]])

tipo: completar
respuestas_validas:
  - "Dividir la función en funciones más pequeñas."
  - "Renombrar la variable con un nombre descriptivo."
  - "Extraer el código repetido a una función o clase común."

enunciado: "Para mejorar la mantenibilidad del software, se detecta que: {caso[0]} La acción recomendada es: ___"

respuesta: caso[1]

explicacion: |
  La legibilidad y la reutilización son pilares de las buenas prácticas. Cada caso presentado requiere una acción de refactorización específica para cumplir con principios como SOLID o Clean Code.
```

```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "avanzado"
  tags: ["comportamiento", "eventos"]

variables:
  escenario: uno_de([["Un sistema de clima donde varios sensores notifican cambios a una pantalla y a una base de datos simultáneamente.", "Observer"], ["Un sistema donde un objeto complejo se construye paso a paso mediante varios métodos.", "Builder"], ["Un sistema donde se envían mensajes de un emisor a múltiples receptores sin que estos se conozcan.", "PubSub"]])

tipo: vf
respuesta: verdadero

enunciado: "En el escenario: {escenario[0]}, el patrón de diseño que permite que un objeto (sujeto) notifique automáticamente a otros objetos (observadores) sobre cambios en su estado es el patrón {escenario[1]}."

explicacion: |
  El patrón Observer define una relación de uno a muchos, de modo que cuando el objeto cambia de estado, todos sus dependientes son notificados.
```

```
metadata:
  materia: "informatica"
  tema: "buenas_practicas"
  nivel: "intermedio"
  tags: ["solid", "arquitectura"]

tipo: mc
opciones_explicitas: ["Responsabilidad Única", "Acoplamiento Fuerte", "Cohesión Baja", "Incapacidad de Testeo"]

enunciado: "Analizando el siguiente caso: Una clase 'Usuario' que gestiona los datos del perfil Y también se encarga de guardar el archivo en el disco. La clase está violando el principio de: ___"

respuesta: "Responsabilidad Única"

explicacion: |
  El Principio de Responsabilidad Única (SRP) establece que una clase debe tener una única razón para cambiar. Si una clase gestiona datos y además la persistencia, tiene dos responsabilidades.
```

```
metadata:
  materia: "informatica"
  tema: "buenas_practicas"
  nivel: "basico"
  tags: ["calidad", "procesos"]

tipo: ordenar
opciones_explicitas: ["Reportar error", "Asignar a desarrollador", "Corregir error", "Verificar solución", "Cerrar ticket"]
respuesta_orden: ["Reportar error", "Asignar a desarrollador", "Corregir error", "Verificar solución", "Cerrar ticket"]

enunciado: "Para asegurar la calidad de software, el proceso estándar de gestión de un defecto (bug) debe seguir este orden lógico: ___"

explicacion: |
  Un flujo de trabajo ordenado permite la trazabilidad del error desde su detección hasta su validación final por parte de QA.
```

## Sección: permisos-y-usuarios (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["seguridad", "conceptos"]

respuesta: "permisos"
tipo: completar
respuestas_validas:
  - "permisos"

enunciado: "Las reglas que determinan qué acciones puede realizar un usuario sobre un recurso se conocen como ___."

explicacion: |
  Los permisos definen la capacidad de lectura, escritura o ejecución sobre un objeto del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["unix", "linux"]

variables:
  opciones_validas: ["lectura", "escritura", "ejecución"]

respuesta: "ejecución"
tipo: completar

enunciado: "En un sistema de archivos estándar, además de leer y escribir, un archivo puede tener permiso de ___."

explicacion: |
  El permiso de ejecución permite que un archivo sea tratado como un programa o script.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["usuarios", "seguridad"]

respuesta: verdadero
tipo: vf

enunciado: "En un sistema operativo, el usuario 'root' (o superusuario) tiene la capacidad de ignorar la mayoría de las restricciones de permisos del sistema."

explicacion: |
  El superusuario tiene privilegios totales sobre el núcleo y los archivos del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "intermedio"
  tags: ["seguridad", "jerarquia"]

tipo: ordenar

opciones_explicitas: ["Usuario común", "Grupo", "Propietario"]
respuesta_orden: ["Usuario común", "Grupo", "Propietario"]

enunciado: "Ordena los niveles de acceso de menor a mayor jerarquía de privilegios sobre un archivo específico:"

explicacion: |
  El orden jerárquico estándar es: el usuario (dueño), el grupo al que pertenece y, finalmente, los otros usuarios.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "avanzado"
  tags: ["acl", "seguridad"]

respuesta: "permisos estándar"
tipo: mc
opciones_explicitas: ["permisos estándar", "permisos de red", "permisos de hardware", "permisos de memoria"]

enunciado: "Las ACL (Access Control Lists) se utilizan para definir ___ más granulares que los permisos tradicionales de un archivo."

explicacion: |
  Las ACL permiten asignar permisos específicos a múltiples usuarios y grupos sin depender solo del modelo propietario/grupo/otros.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["linux", "permisos", "chmod"]

enunciado: "Un administrador desea que un archivo llamado 'datos.txt' sea legible por el dueño, pero que nadie más pueda leerlo, escribirlo ni ejecutarlo. ¿Cuál es la representación numérica de los permisos para este archivo?"

opciones_explicitas: ["644", "400", "755", "666"]
respuesta: "400"
tipo: "mc"

explicacion: |
  En sistemas Unix/Linux, los permisos se calculan sumando valores: Lectura (4), Escritura (2) y Ejecución (1).
  Para el dueño (Read): 4 + 0 + 0 = 4.
  Para el grupo (None): 0.
  Para otros (None): 0.
  Resultado: 400.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["usuarios", "ownership"]

enunciado: "Si un usuario intenta modificar un archivo que pertenece al 'root' y el usuario actual no tiene permisos de escritura, la operación será denegada."

respuesta: verdadero
tipo: "vf"

explicacion: |
  El sistema operativo verifica primero si el usuario es el dueño del archivo. Si no lo es, comprueba los permisos del grupo y, finalmente, los permisos para 'otros'. Si el permiso de escritura no está concedido en la categoría correspondiente, el acceso se deniega.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "intermedio"
  tags: ["chmod", "simbolico"]

variables:
  comandos: [["chmod u+x", "u+x"], ["chmod g-w", "g-w"], ["chmod o+r", "o+r"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si aplicamos el comando 'chmod {comandos[idx][1]}' a un archivo, estamos modificando los permisos de forma simbólica. El código de modificación aplicado es ___."

pasos:
  - "Identificar el usuario (u=user, g=group, o=others)"
  - "Identificar la acción (+ para añadir, - para quitar)"
  - "Identificar el permiso (r, w, x)"

respuesta: comandos[idx][1]
tipo: "completar"
respuestas_validas:
  - "u+x"
  - "g-w"
  - "o+r"

explicacion: |
  El modo simbólico permite modificar permisos específicos sin redefinir todos los valores.
  En el caso de {comandos[idx][0]}, estamos operando directamente sobre la categoría seleccionada.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "intermedio"
  tags: ["secuencia", "ejecucion"]

enunciado: "Para que un script de Bash sea ejecutable por un usuario después de haberlo creado, se deben seguir estos pasos en orden:"

opciones_explicitas: ["Crear el archivo con un editor", "Asignar permisos de ejecución con chmod", "Ejecutar el script con ./script.sh"]
respuesta_orden: ["Crear el archivo con un editor", "Asignar permisos de ejecución con chmod", "Ejecutar el script con ./script.sh"]
tipo: ordenar

explicacion: |
  Primero el archivo debe existir (creación), luego el sistema operativo debe permitir su ejecución (permisos) y finalmente se puede lanzar el proceso (ejecución).
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "avanzado"
  tags: ["binario", "permisos"]

enunciado: "Un archivo tiene permisos de lectura y escritura para el dueño, pero ningún permiso para el grupo ni para otros. ¿Cuál es su valor decimal?"

respuesta: "6"
tipo: "completar"
respuestas_validas:
  - "6"

explicacion: |
  Lectura (4) + Escritura (2) + Ejecución (0) = 6.
  En binario: 110.
  Si el valor fuera 7, sería 111 (rwx).
  Si el valor fuera 5, sería 101 (r-x).
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "intermedio"
  tags: ["linux", "permisos", "directorios"]

tipo: mc
opciones_explicitas: ["Permitir leer el contenido de los archivos dentro del directorio", "Permitir listar los nombres de archivos dentro del directorio", "Permitir entrar/acceder al directorio (hacer cd)", "Permitir ejecutar archivos binarios dentro del directorio"]

enunciado: "En sistemas tipo Unix, si un usuario tiene permisos de lectura (r) pero NO tiene permisos de ejecución (x) en un directorio, ¿qué acción NO podrá realizar?"

respuesta: "Permitir entrar/acceder al directorio (hacer cd)"

explicacion: |
  El permiso de ejecución (x) en un directorio es el que permite al usuario 'entrar' en él (hacer `cd`) y acceder a los metadatos de los archivos que contiene. Sin `x`, no puedes acceder a los archivos aunque sepas sus nombres.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["linux", "usuarios", "grupos"]

variables:
  escenario: uno_de([["archivo_A", "usuario_1", "grupo_admin"], ["archivo_B", "usuario_2", "grupo_staff"], ["archivo_C", "usuario_3", "grupo_dev"]])

tipo: vf
respuesta: falso

enunciado: "Si el archivo {escenario[0]} tiene como dueño a {escenario[1]} y pertenece al grupo {escenario[2]}, cualquier usuario que pertenezca al grupo {escenario[2]} tiene automáticamente todos los permisos de lectura, escritura y ejecución sobre el archivo, independientemente de los permisos asignados al grupo."

explicacion: |
  Falso. El hecho de pertenecer al grupo otorga los permisos definidos para el 'grupo' en la máscara de permisos (rwx), pero estos pueden estar limitados (por ejemplo, solo lectura).
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "avanzado"
  tags: ["seguridad", "linux", "lógica"]

tipo: mc
opciones_explicitas: ["Usuario -> Grupo -> Otros", "Otros -> Grupo -> Usuario", "Usuario -> Otros -> Grupo", "El que tenga el permiso más restrictivo gana"]

enunciado: "Cuando un proceso intenta acceder a un archivo, ¿en qué orden evalúa el sistema operativo los permisos de un usuario?"

respuesta: "Usuario -> Grupo -> Otros"

explicacion: |
  El sistema operativo busca la coincidencia más específica primero. Si el usuario es el dueño, se aplican sus permisos y se deja de evaluar. Si no, se mira si pertenece al grupo del archivo, y si no, se aplican los permisos de 'otros'.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["seguridad", "root", "sudo"]

tipo: completar
respuestas_validas:
  - "root"
  - "superuser"
  - "administrador"

enunciado: "En sistemas operativos basados en Linux, el usuario que posee todos los privilegios del sistema y puede saltarse cualquier restricción de permisos es conocido como ___."

respuesta: "root"

explicacion: |
  El usuario 'root' es la cuenta de superusuario por excelencia. Aunque en contextos generales se le llame administrador, el nombre técnico del usuario con UID 0 es root.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "intermedio"
  tags: ["comandos", "chmod", "linux"]

tipo: ordenar
opciones_explicitas: ["identificar el archivo y sus permisos actuales", "aplicar el comando chmod con los nuevos permisos", "verificar que los cambios se aplicaron correctamente"]

enunciado: "Ordena los pasos lógicos para cambiar de forma segura los permisos de un archivo crítico en un servidor de producción:"

respuesta_orden: ["identificar el archivo y sus permisos actuales", "aplicar el comando chmod con los nuevos permisos", "verificar que los cambios se aplicaron correctamente"]

explicacion: |
  Antes de modificar permisos en entornos críticos, es vital saber qué estamos cambiando (usando `ls -l`) para evitar bloquear el acceso a servicios esenciales o dejar brechas de seguridad.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["permisos", "usuarios", "sistemas_operativos"]

respuesta: "grupo"
tipo: completar
respuestas_validas:
  - "grupo"

enunciado: "Mientras que un usuario es una entidad individual con sus propios permisos, un ___ es una colección de usuarios que comparten los mismos privilegios de acceso a los recursos."

explicacion: |
  Los grupos permiten administrar permisos de manera colectiva. En lugar de asignar permisos a cada usuario uno por uno, se asignan al grupo y los usuarios se añaden a él.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "intermedio"
  tags: ["privilegios", "root", "seguridad"]

variables:
  escenario_idx: uno_de([0,1])
  escenarios: [["Un usuario estándar intenta modificar archivos del sistema.", "denegado"], ["El superusuario (root) intenta modificar archivos del sistema.", "permitido"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["denegado", "permitido", "error de sintaxis", "requiere contraseña"]

enunciado: "En un sistema basado en Unix, ante el escenario: {escenarios[escenario_idx][0]}, el acceso es ___."

explicacion: |
  El usuario 'root' tiene privilegios totales sobre el sistema, mientras que un usuario estándar está restringido a su propio directorio personal y archivos para los que tenga permisos explícitos.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["permisos", "chmod", "linux"]

respuesta: verdadero
tipo: vf

enunciado: "En un sistema de archivos Linux, el permiso de 'ejecución' (x) en un directorio permite al usuario entrar en él (hacer cd), lo cual es distinto al permiso de ejecución en un archivo, que permite correr un programa."

explicacion: |
  Es una distinción fundamental: en archivos, 'x' es ejecución; en directorios, 'x' es la capacidad de acceder al contenido del directorio (traverse).
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "avanzado"
  tags: ["seguridad", "principios"]

respuesta_orden: ["Identificar el usuario", "Asignar permisos mínimos", "Auditar el acceso"]
tipo: ordenar
opciones_explicitas: ["Identificar el usuario", "Asignar permisos mínimos", "Auditar el acceso"]

enunciado: "Para implementar correctamente el principio de menor privilegio en la gestión de recursos, se deben seguir estos pasos en orden lógico:"

explicacion: |
  Primero se define quién es el sujeto (usuario), luego se le da solo lo que necesita para su tarea (mínimo privilegio) y finalmente se supervisa que no se desvíe de su función.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "avanzado"
  tags: ["acl", "permisos", "seguridad"]

variables:
  es_acl: uno_de([0,1])
  comparacion: [["permisos_tradicionales", "solo permiten definir dueño, grupo y otros"], ["ACL", "permiten definir permisos específicos para múltiples usuarios"]]

respuesta: comparacion[es_acl][1]
tipo: mc
opciones_explicitas: ["solo permiten definir dueño, grupo y otros", "permiten definir permisos específicos para múltiples usuarios", "son solo para archivos comprimidos", "no se pueden usar en Linux"]

enunciado: "A diferencia de los {comparacion[es_acl][0]}, las listas de control de acceso (___) ofrecen una granularidad mucho mayor."

explicacion: |
  Los permisos tradicionales (rwx para owner, group, others) son limitados. Las ACL (Access Control Lists) permiten asignar permisos a un usuario específico que no es el dueño, sin necesidad de crear un grupo nuevo.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["linux", "permisos"]

variables:
  archivos: ["archivo_secreto.txt", "config.sys", "script.sh"]
  idx: uno_de([0, 1, 2])

enunciado: "Se desea que el archivo {archivos[idx]} tenga permisos donde el dueño tenga lectura y escritura, pero nadie más tenga acceso. El modo octal correspondiente es ___."

respuestas_validas:
  - "600"

respuesta: "600"
tipo: completar

explicacion: |
  En sistemas tipo Unix, el primer dígito (6) representa al dueño (lectura=4 + escritura=2), el segundo (0) al grupo y el tercero (0) a otros.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["usuarios", "root"]

enunciado: "¿Es el usuario 'root' el superusuario que tiene control total sobre el sistema operativo, pudiendo ignorar la mayoría de las restricciones de permisos?"

respuesta: verdadero
tipo: vf

explicacion: |
  El usuario root es el superusuario en sistemas basados en Unix/Linux y tiene privilegios máximos sobre todos los recursos del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "intermedio"
  tags: ["permisos", "octal"]

variables:
  datos: [["rwx r-- ---", "740"], ["rw- r-- r--", "644"], ["rwx rwx ---", "770"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si un comando 'ls -l' muestra que un archivo tiene los permisos {datos[idx][0]}, ¿cuál es su representación en formato octal?"

opciones_explicitas:
  - "740"
  - "644"
  - "770"

respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Cada bloque de tres caracteres (dueño, grupo, otros) se suma: r=4, w=2, x=1.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "intermedio"
  tags: ["proceso", "seguridad"]

enunciado: "Ordena los pasos lógicos para asegurar un archivo recién creado en un servidor compartido para que solo el usuario actual pueda leerlo y editarlo, sin que otros puedan verlo."

opciones_explicitas:
  - "Crear el archivo con el contenido necesario"
  - "Cambiar el propietario con 'chown' si es necesario"
  - "Restringir permisos con 'chmod 600'"
  - "Verificar la configuración de la umask del sistema"

respuesta_orden: ["Crear el archivo con el contenido necesario", "Cambiar el propietario con 'chown' si es necesario", "Restringir permisos con 'chmod 600'", "Verificar la configuración de la umask del sistema"]
tipo: ordenar

explicacion: |
  Para asegurar un recurso, primero se crea, se asegura la propiedad del dueño, se aplican los permisos restrictivos y se valida que la umask no haya aplicado permisos por defecto más abiertos.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "avanzado"
  tags: ["umask", "permisos"]

variables:
  datos: [["022", "755"], ["027", "750"], ["077", "700"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si la umask del sistema está configurada como {datos[idx][0]}, un nuevo archivo creado por un usuario tendrá como permiso máximo (en modo octal) el valor ___."

respuestas_validas:
  - "755"
  - "750"
  - "700"

respuesta: datos[idx][1]
tipo: completar

explicacion: |
  La umask (User Mask) se resta de los permisos base (normalmente 777 para directorios o 666 para archivos) para determinar los permisos finales.
```

