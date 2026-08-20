# Examen jefe — Maestro de Datos y Virtualización

> Logro #182. Completaste el examen jefa dominando ACID, almacenamiento, tipos de datos y virtualización. Pool agregado de los `cuestionario.md` ya validados de sus 4 temas. **97 preguntas totales** en 4/4 secciones.

---

## Sección: transacciones-acid (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "basico"
  tags: ["bases_de_datos", "conceptos"]

respuesta: "unidad_de_trabajo"
tipo: completar
respuestas_validas: ["unidad_de_trabajo", "unidad de trabajo"]

enunciado: "En el contexto de bases de datos, una transacción se define como una ___ lógica que realiza una serie de operaciones."

explicacion: |
  Una transacción es una unidad de trabajo lógica que contiene una serie de operaciones de base de datos que deben ejecutarse de forma atómica.
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "basico"
  tags: ["acid", "atomicidad"]

opciones_explicitas: ["Todo o nada", "Aislamiento total", "Persistencia inmediata", "Integridad de datos"]
respuesta: "Todo o nada"
tipo: mc

enunciado: "La propiedad de Atomicidad de una transacción garantiza que:"

explicacion: |
  La atomicidad asegura que todas las operaciones de la transacción se realicen con éxito o que ninguna de ellas se aplique (efecto "todo o nada").
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "basico"
  tags: ["acid", "durabilidad"]

respuesta: verdadero
tipo: vf

enunciado: "¿La propiedad de Durabilidad garantiza que, una vez confirmada (committed) una transacción, sus cambios permanezcan incluso ante un fallo del sistema?"

explicacion: |
  Correcto. La durabilidad asegura que los cambios realizados por una transacción completada son permanentes y no se perderán ante fallos de energía o caídas del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["acid", "orden"]

opciones_explicitas: ["Atomicidad", "Consistencia", "Aislamiento", "Durabilidad"]
respuesta: ["Atomicidad", "Consistencia", "Aislamiento", "Durabilidad"]
tipo: ordenar

enunciado: "Ordena las siglas del acrónimo ACID según su significado correcto de izquierda a derecha:"

explicacion: |
  El acrónimo ACID se refiere a: Atomicidad, Consistencia, Aislamiento (Isolation) y Durabilidad.
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["acid", "aislamiento"]

variables:
  escenario: uno_de([
    ["Transacción A modifica un dato y la Transacción B lo lee antes de que A termine", "Interferencia"],
    ["Transacción A completa sus cambios y la Transacción B ve el estado final", "Aislamiento"]
  ])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["Interferencia", "Aislamiento"]

enunciado: "Si una transacción puede ver los cambios de otra transacción solo después de que esta última haya finalizado, estamos ante un escenario de: {escenario[1]}"

explicacion: |
  El aislamiento (Isolation) asegura que las transacciones se ejecuten de manera que parezca que se están ejecutando de forma secuencial, evitando que una vea estados intermedios de otra.
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["bases_de_datos", "acid", "atomicidad"]

variables:
  saldo_inicial: 1000
  transferencia: 200

enunciado: "Se realiza una transferencia de {transferencia} desde la cuenta A al cliente B. Si el sistema falla justo después de descontar el dinero de A, pero antes de sumarlo a B, la propiedad ACID que garantiza que la operación se anule por completo para evitar la pérdida de dinero es la {propiedad}."

opciones_explicitas:
  - "Atomicidad"
  - "Consistencia"
  - "Aislamiento"
  - "Durabilidad"

respuesta: "Atomicidad"
tipo: mc

explicacion: |
  La atomicidad asegura que la transacción se trate como una unidad indivisible: o se ejecutan todos los pasos (descuento y suma) o no se ejecuta ninguno. Si hay un error, se realiza un 'rollback' para volver al estado inicial.
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["bases_de_datos", "acid", "consistencia"]

variables:
  regla_negocio: "saldo >= 0"

enunciado: "Si una base de datos tiene una restricción que impide que una cuenta tenga un saldo negativo, y una transacción intenta realizar un retiro que dejaría la cuenta en -50, la propiedad que asegura que la base de datos pase de un estado válido a otro estado válido, rechazando la operación inválida, es la _________."

respuestas_validas:
  - "Consistencia"

respuesta: "Consistencia"
tipo: completar

explicacion: |
  La consistencia garantiza que cualquier transacción que lleve la base de datos de un estado válido a otro, respetando todas las reglas y restricciones (constraints) definidas.
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "avanzado"
  tags: ["bases_de_datos", "acid", "aislamiento"]

variables:
  escenario: uno_de(["lectura_sucia", "lectura_no_repetible", "fantasma"])

enunciado: "En un entorno de alta concurrencia, si la Transacción 1 modifica un dato pero no hace commit, y la Transacción 2 puede leer ese dato modificado antes de que la Transacción 1 decida si confirma o cancela, estamos ante un problema de _________."

opciones_explicitas:
  - "Lectura sucia"
  - "Lectura repetible"
  - "Lectura fantasma"

respuesta: "Lectura sucia"
tipo: mc

explicacion: |
  La propiedad de Aislamiento (Isolation) busca evitar que los cambios intermedios de una transacción sean visibles para otras transacciones hasta que la primera haya finalizado. El fenómeno descrito es la 'Dirty Read'.
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "basico"
  tags: ["bases_de_datos", "acid", "durabilidad"]

enunciado: "Una vez que una transacción ha sido confirmada (committed) con éxito, sus cambios deben permanecer en la base de datos incluso si el sistema sufre un corte de energía inmediato. ¿Es esto cierto? _________"

respuestas_validas:
  - "verdadero"

respuesta: "verdadero"
tipo: completar
explicacion: |
  La Durabilidad garantiza que una vez que el usuario recibe la confirmación de que la transacción fue exitosa, los datos han sido escritos en medios no volátiles (disco/SSD) y no se perderán.
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["bases_de_datos", "acid", "flujo"]

enunciado: "Ordena los pasos lógicos que sigue el motor de base de datos para asegurar una transacción exitosa bajo el modelo ACID:"

opciones_explicitas:
  - "Inicio de la transacción"
  - "Ejecución de operaciones de lectura/escritura"
  - "Validación de reglas de integridad"
  - "Confirmación (Commit) o Reversión (Rollback)"

respuesta: ["Inicio de la transacción", "Ejecución de operaciones de lectura/escritura", "Validación de reglas de integridad", "Confirmación (Commit) o Reversión (Rollback)"]
tipo: ordenar

explicacion: |
  El flujo comienza abriendo la transacción, se realizan las operaciones, el motor verifica que no se violen reglas (consistencia) y finalmente se decide si se hace commit para hacer los cambios permanentes o rollback para deshacer todo.
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["acid", "atomicidad", "errores_comunes"]

variables:
  estado_final: uno_de(["completada", "fallida"])

respuesta: estado_final == "completada"
tipo: completar
enunciado: "Si una transacción de transferencia bancaria falla justo después de descontar dinero de la cuenta A, pero antes de sumarlo a la cuenta B, la propiedad de {estado_final} garantiza que el sistema vuelva al estado original como si nada hubiera ocurrido."

explicacion: |
  La atomicidad asegura que la transacción se trate como una unidad indivisible: o se realizan todos los pasos o ninguno. Si un paso falla, se realiza un rollback para mantener la integridad.
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "avanzado"
  tags: ["acid", "aislamiento", "consistencia"]

opciones_explicitas: ["Aislamiento", "Consistencia", "Atomicidad", "Durabilidad"]

respuesta: "Aislamiento"
tipo: mc

enunciado: "Un desarrollador nota que, aunque las transacciones individuales son correctas, una transacción que lee datos intermedios de otra transacción en curso está obteniendo resultados inconsistentes. ¿Qué propiedad ACID está siendo vulnerada o mal gestionada en este escenario de concurrencia?"

explicacion: |
  El aislamiento (Isolation) asegura que las transacciones concurrentes no interfieran entre sí, haciendo que parezca que se ejecutan de forma secuencial. Si una transacción ve estados parciales de otra, hay un problema de aislamiento.
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "basico"
  tags: ["acid", "durabilidad"]

respuesta: "verdadero"
tipo: completar
enunciado: "Si una base de datos confirma (commit) una transacción y, un milisegundo después, el servidor sufre un corte de energía total, la propiedad de Durabilidad garantiza que los cambios realizados por esa transacción no se perderán al reiniciar el sistema."

explicacion: |
  La durabilidad asegura que una vez que el usuario recibe la confirmación de éxito, los datos han sido escritos en soporte no volátil (disco) y persistirán ante fallos de energía.
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["acid", "flujo_transaccion"]

opciones_explicitas: ["Inicio", "Ejecución de operaciones", "Commit/Rollback", "Finalización"]

respuesta: ["Inicio", "Ejecución de operaciones", "Commit/Rollback", "Finalización"]
tipo: ordenar

enunciado: "Ordena cronológicamente las etapas lógicas de una transacción de base de datos para asegurar el cumplimiento de las propiedades ACID:"

explicacion: |
  Una transacción debe comenzar, ejecutar sus instrucciones, decidir si confirma los cambios (Commit) o deshace todo (Rollback) y finalmente concluir el proceso.
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["acid", "consistencia"]

respuestas_validas: ["consistencia"]
respuesta: "consistencia"
tipo: completar

enunciado: "Cuando una transacción deja la base de datos en un estado que viola una restricción de integridad (como un saldo negativo en una columna que no lo permite), se ha violado la propiedad de ___________."

explicacion: |
  La consistencia asegura que la base de datos pase de un estado válido a otro estado válido, respetando todas las reglas, restricciones y disparadores (triggers) definidos.
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "basico"
  tags: ["acid", "atomicidad"]

respuesta: "todo o nada"
tipo: completar
respuestas_validas: ["todo o nada", "todo o nada", "todo o nada"]

enunciado: "A diferencia de un proceso secuencial simple, la propiedad de atomicidad garantiza que una transacción se ejecute como una unidad indivisible, es decir, que el resultado sea ___."
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["acid", "aislamiento"]

variables:
  escenario: uno_de([
    ["Dos usuarios editan el mismo saldo simultáneamente sin restricciones", "problemas de concurrencia"],
    ["Un usuario ve datos intermedios de una transacción no finalizada", "problemas de aislamiento"]
  ])

respuesta: "aislamiento"
tipo: mc
opciones_explicitas: ["consistencia", "aislamiento", "durabilidad", "atomicidad"]

enunciado: "Si un sistema permite que una transacción vea cambios parciales de otra transacción en curso, está fallando en la propiedad de {escenario[1]} para evitar {escenario[0]}."
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["acid", "consistencia"]

respuesta: verdadero
tipo: vf

enunciado: "La propiedad de consistencia se asegura de que la base de datos pase de un estado válido a otro estado válido, cumpliendo todas las reglas de integridad definidas (como claves foráneas o restricciones de unicidad)."
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "basico"
  tags: ["acid", "durabilidad"]

variables:
  caso: uno_de([
    ["un fallo de energía justo después de confirmar la transacción", "se pierden los datos"],
    ["un error de software antes de hacer el commit", "no hay cambios persistentes"]
  ])

respuesta: "se mantienen los cambios"
tipo: mc
opciones_explicitas: ["se pierden los datos", "se mantienen los cambios", "el sistema se bloquea", "se revierte todo"]

enunciado: "La durabilidad garantiza que, una vez que la transacción ha sido confirmada (commit), los cambios {caso[0]} y, por lo tanto, ___."
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["acid", "flujo"]

respuesta: ["inicio", "ejecución", "commit", "finalización"]
tipo: ordenar
opciones_explicitas: ["inicio", "ejecución", "commit", "finalización"]

enunciado: "Ordena las etapas lógicas de una transacción que cumple con las propiedades ACID desde que se solicita hasta que se asegura su persistencia:"

pasos:
  - "Se abre la sesión de trabajo."
  - "Se realizan las operaciones de lectura y escritura."
  - "Se confirman los cambios de forma permanente."
  - "Se cierra la sesión de trabajo."

explicacion: |
  El flujo correcto es: Inicio (inicio de la unidad), Ejecución (operaciones), Commit (persistencia/durabilidad) y Finalización (cierre).
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "basico"
  tags: ["acid", "atomicidad"]

variables:
  datos: [["Transferencia de $100: se descuenta de cuenta A pero el sistema falla antes de sumar en cuenta B", "atomicidad"], ["Cálculo de intereses: el saldo final no coincide con la suma de movimientos", "consistencia"], ["Consulta masiva: un reporte lee datos que están siendo modificados por otro usuario", "aislamiento"], ["Falla de luz: el registro de la operación se perdió tras el reinicio", "durabilidad"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["atomicidad", "consistencia", "aislamiento", "durabilidad"]

enunciado: "En una transferencia bancaria, si el sistema falla tras restar dinero de una cuenta pero antes de sumarlo en la otra, y la operación no se deshace por completo, ¿qué propiedad ACID se ha vulnerado?"

explicacion: |
  La atomicidad garantiza que una transacción se ejecute íntegramente o no se ejecute en absoluto ("todo o nada"). Si la operación queda a medias, se rompe la atomicidad.
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["acid", "consistencia"]

variables:
  datos: [["Un usuario intenta borrar un cliente que tiene facturas activas y el sistema lo impide para mantener la integridad", "true"], ["El sistema permite que el saldo de una cuenta sea negativo a pesar de que la regla de negocio dice que no puede", "false"]]
  idx: uno_de([0, 1])

respuestas_validas: [datos[idx][1]]
respuesta: datos[idx][1]
tipo: completar
enunciado: "Si una transacción permite que la base de datos pase de un estado válido (cumpliendo todas las reglas de integridad) a un estado inválido, ¿se ha mantenido la propiedad de consistencia? {datos[idx][0]}"

explicacion: |
  La consistencia asegura que una transacción solo lleve a la base de datos de un estado válido a otro estado válido, respetando todas las reglas y restricciones definidas.
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["acid", "aislamiento"]

variables:
  datos: [["Dos usuarios compran el último ticket de un concierto al mismo tiempo y ambos reciben confirmación", "aislamiento"], ["Un reporte de ventas muestra un total que no coincide con la suma de las filas debido a cambios en curso", "aislamiento"], ["El sistema se apaga y al volver, la transacción que ya había terminado se perdió", "aislamiento"]]
  idx: uno_de([0, 1, 2])

respuesta: "aislamiento"
tipo: mc
opciones_explicitas: ["atomicidad", "consistencia", "aislamiento", "durabilidad"]

enunciado: "Si dos transacciones se ejecutan simultáneamente y una de ellas ve datos parciales o inconsistentes de la otra, ¿qué propiedad se está viendo afectada?"

explicacion: |
  El aislamiento garantiza que las transacciones concurrentes no interfieran entre sí, haciendo que parezca que se ejecutan de forma secuencial.
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "basico"
  tags: ["acid", "durabilidad"]

variables:
  datos: [["La transacción se confirma (commit) y tras un corte de energía los datos persisten", "durabilidad"], ["La transacción se confirma y el sistema falla, pero los datos se recuperan del log", "durabilidad"], ["La transacción se completa pero el usuario no ve el cambio hasta que refresca", "durabilidad"]]
  idx: uno_de([0, 1, 2])

respuesta: "durabilidad"
tipo: completar
respuestas_validas: ["durabilidad"]

enunciado: "Cuando una transacción ha sido confirmada con éxito, el sistema garantiza que sus cambios persistirán incluso ante un fallo del sistema. Esta propiedad se llama ___."

explicacion: |
  La durabilidad asegura que una vez que el usuario recibe la confirmación de que la transacción fue exitosa, los cambios son permanentes y no se perderán ante fallos eléctricos o caídas del software.
```

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["transacciones", "flujo"]

variables:
  flujo: uno_de([
    ["Inicio de transacción", "COMMIT", "Confirmación de cambios", "ROLLBACK"],
    ["Inicio de transacción", "ROLLBACK", "Reversión de cambios", "COMMIT"],
    ["Inicio de transacción", "COMMIT", "Reversión de cambios", "ROLLBACK"]
  ])
  idx: uno_de([0, 1, 2])

respuesta: flujo[idx][2
tipo: ordenar
opciones_explicitas: ["Inicio de transacción", "COMMIT", "Confirmación de cambios", "ROLLBACK", "Reversión de cambios"]

enunciado: "Ordena los pasos lógicos de una transacción que termina con éxito (según el escenario seleccionado):"

pasos:
  - "Primero: {flujo[idx][0]}"
  - "Segundo: {flujo[idx][1]}"
  - "Tercero: {flujo[idx][2]}"

explicacion: |
  En un escenario de éxito, la secuencia es: Inicio -> Ejecución de comandos -> COMMIT (confirmación) -> El sistema aplica permanentemente los cambios.
```

## Sección: unidades-almacenamiento (22 preguntas)

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "basico"
  tags: ["unidades_almacenamiento", "vocabulario"]

enunciado: "¿Qué es un bit?"
tipo: mc
opciones_explicitas:
  - "La unidad mínima de información en una computadora: un 0 o un 1"
  - "Un grupo de 8 bytes"
  - "La velocidad de un procesador"
respuesta: "La unidad mínima de información en una computadora: un 0 o un 1"

explicacion: |
  Todo lo demás (bytes, kilobytes...) se construye a partir de esta
  unidad mínima.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "basico"
  tags: ["unidades_almacenamiento", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un byte está compuesto por 8 bits."

explicacion: |
  Es la unidad base sobre la que se arman kilobyte, megabyte, etc.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "basico"
  tags: ["unidades_almacenamiento", "vocabulario"]

enunciado: "En el sistema decimal (SI), ¿a cuántos bytes equivale 1 KB?"
tipo: mc
opciones_explicitas:
  - "1.000 bytes"
  - "1.024 bytes"
  - "100 bytes"
respuesta: "1.000 bytes"

explicacion: |
  Es la potencia de 10 estándar, igual que en cualquier otra unidad
  \"kilo\" (kilogramo, kilómetro).
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "basico"
  tags: ["unidades_almacenamiento", "vocabulario"]

enunciado: "En el sistema binario (IEC), ¿a cuántos bytes equivale 1 KiB?"
tipo: mc
opciones_explicitas:
  - "1.024 bytes"
  - "1.000 bytes"
  - "512 bytes"
respuesta: "1.024 bytes"

explicacion: |
  1.024 es 2 elevado a la 10, la potencia de 2 más cercana a 1.000.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "KB (1.000 bytes) y KiB (1.024 bytes) no son la misma cantidad, aunque en el uso cotidiano a veces se confundan o se usen como sinónimos."

explicacion: |
  Es justamente la ambigüedad que el estándar IEC de 1998 quiso resolver
  con los prefijos \"kibi/mebi/gibi\".
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "calculo"]

variables:
  cantidad_kb: random(5, 900)

respuesta: cantidad_kb * 1000
tipo: input
tolerancia_abs: 0

enunciado: "Un archivo pesa {cantidad_kb} KB (sistema decimal). ¿Cuántos bytes son?"

explicacion: |
  Se multiplica por 1.000, la definición decimal de kilo.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "calculo"]

variables:
  cantidad_kib: random(5, 900)

respuesta: cantidad_kib * 1024
tipo: input
tolerancia_abs: 0

enunciado: "Un archivo pesa {cantidad_kib} KiB (sistema binario). ¿Cuántos bytes son?"

explicacion: |
  Se multiplica por 1.024, la definición binaria de kibi.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "comparacion"]

variables:
  cantidad: random(10, 500)

respuesta: ((cantidad * 1024) > (cantidad * 1000))
tipo: vf

enunciado: "Con el mismo número, {cantidad} KiB representa más bytes que {cantidad} KB."

explicacion: |
  1.024 es mayor que 1.000, así que la versión binaria siempre da más
  bytes para el mismo número.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La memoria RAM y el direccionamiento de memoria de una computadora usan naturalmente potencias de 2, porque las computadoras funcionan internamente en base binaria."

explicacion: |
  Es la razón de fondo por la que existe el sistema binario de
  prefijos (kibi, mebi, gibi).
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los fabricantes de discos, pendrives y tarjetas de memoria suelen anunciar la capacidad usando el sistema decimal (1.000), no el binario."

explicacion: |
  Da un número redondo y, casualmente, también más grande que el
  binario.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "avanzado"
  tags: ["unidades_almacenamiento", "calculo"]

variables:
  gb_anunciados: uno_de([120, 240, 500, 1000, 2000])

respuesta: gb_anunciados * 1000000000
tipo: input
tolerancia_abs: 0

enunciado: "Un disco se vende anunciando \"{gb_anunciados} GB\" (sistema decimal del fabricante). ¿Cuántos bytes tiene realmente ese disco?"

pasos:
  - "{gb_anunciados} × 1.000.000.000"

explicacion: |
  1 GB decimal son 1.000 millones de bytes.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "avanzado"
  tags: ["unidades_almacenamiento", "calculo"]

variables:
  gb_anunciados: uno_de([120, 240, 500, 1000, 2000])

respuesta: (gb_anunciados * 1000000000) / 1073741824
tipo: input
tolerancia_abs: 0.5

enunciado: "Ese mismo disco de \"{gb_anunciados} GB\" (decimal), ¿aproximadamente cuánto va a mostrar el sistema operativo, que calcula dividiendo por potencias de 1.024 (aunque siga llamándolo \"GB\")?"

pasos:
  - "bytes reales: {gb_anunciados} × 1.000.000.000 = {gb_anunciados * 1000000000}"
  - "÷ 1.024³ (1.073.741.824) = {(gb_anunciados * 1000000000) / 1073741824}"

explicacion: |
  El sistema operativo divide por 1.024³, no por 1.000³, así que el
  número que muestra siempre es menor al anunciado por el fabricante.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un disco anunciado como \"500 GB\" por el fabricante suele mostrar un número menor a 500 en el sistema operativo (aproximadamente 465,7)."

explicacion: |
  Es la consecuencia directa de que el fabricante usa 1.000 y el
  sistema operativo divide por 1.024.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La diferencia entre el \"500 GB\" del fabricante y lo que muestra el sistema operativo no significa que falte espacio: es la misma cantidad de bytes, contada con dos reglas de prefijos distintas."

explicacion: |
  No hay ningún byte \"perdido\": es sólo una diferencia de convención
  de conteo.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "calculo"]

variables:
  cantidad_kb: random(5, 900)
  bytes_totales: cantidad_kb * 1000

respuesta: cantidad_kb
tipo: input
tolerancia_abs: 0.01

enunciado: "Un archivo pesa {bytes_totales} bytes. ¿Cuántos KB (sistema decimal) son?"

explicacion: |
  Se despeja dividiendo los bytes totales por 1.000.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "avanzado"
  tags: ["unidades_almacenamiento", "vocabulario"]

enunciado: "¿Para qué introdujo la IEC los prefijos \"kibi/mebi/gibi\" en 1998?"
tipo: mc
opciones_explicitas:
  - "Para desambiguar: que \"KB\" volviera a significar sólo 1.000 bytes, y \"KiB\" quedara para 1.024"
  - "Para reemplazar por completo al byte como unidad base"
  - "Para que los fabricantes de discos vendieran más capacidad"
respuesta: "Para desambiguar: que \"KB\" volviera a significar sólo 1.000 bytes, y \"KiB\" quedara para 1.024"

explicacion: |
  Antes del estándar, \"KB\" se usaba indistintamente para 1.000 o 1.024
  bytes, según el contexto.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "basico"
  tags: ["unidades_almacenamiento", "orden"]

tipo: ordenar
enunciado: "Ordená estas unidades de almacenamiento de menor a mayor."
opciones_explicitas:
  - "1 MB"
  - "1 byte"
  - "1 GB"
  - "1 KB"
respuesta_orden: ["1 byte", "1 KB", "1 MB", "1 GB"]

explicacion: |
  Cada prefijo es 1.000 (o 1.024) veces más grande que el anterior.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "verificacion"]

variables:
  cantidad_kib: random(5, 900)
  correcto: cantidad_kib * 1024
  error: uno_de([0, 0, 0, 50, -50])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 1)
tipo: vf

enunciado: "¿Está bien calculado esto? {cantidad_kib} KiB convertidos a bytes: {mostrado}."

explicacion: |
  Se vuelve a multiplicar por 1.024 y se compara con el valor mostrado.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento"]

variables:
  cantidad_kib: random(5, 900)
  bytes_totales: cantidad_kib * 1024

tipo: completar
enunciado: "Un archivo pesa {bytes_totales} bytes. Completá: ___ (KiB) = {bytes_totales} (bytes) ÷ 1.024."
respuestas_validas:
  - cantidad_kib

explicacion: |
  Se divide por 1.024 para pasar de bytes a KiB.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "avanzado"
  tags: ["unidades_almacenamiento", "comparacion"]

respuesta: verdadero
tipo: vf

enunciado: "Para el mismo disco, el número de \"GB\" que anuncia el fabricante (sistema decimal) siempre es mayor que el número que muestra el sistema operativo al calcularlo en sistema binario."

explicacion: |
  Dividir la misma cantidad de bytes por 1.000³ da un número mayor que
  dividirla por 1.024³.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "1 MB (1.000.000 bytes, decimal) no es exactamente lo mismo que 1 MiB (1.048.576 bytes, binario)."

explicacion: |
  La diferencia se agranda a medida que se sube de escala (kilo, mega,
  giga...).
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "basico"
  tags: ["unidades_almacenamiento", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Existen dos sistemas de prefijos de almacenamiento (decimal: KB=1.000; binario: KiB=1.024), y confundirlos es la razón por la que un disco \"de 500 GB\" nunca muestra exactamente 500 en la computadora."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: variables-y-tipos-de-dato (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["conceptos", "fundamentos"]

respuesta: "contenedor"
tipo: completar
respuestas_validas: ["contenedor"]

enunciado: "En programación, una variable se puede definir conceptualmente como un ___ en memoria que permite almacenar un valor que puede cambiar durante la ejecución de un programa."

explicacion: |
  Una variable es un espacio reservado en la memoria de la computadora, identificado por un nombre, destinado a guardar un dato que puede ser modificado.
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["tipos_de_datos", "identificacion"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  datos: [["15", "entero"], ["3.14", "decimal"], ["'Hola'", "texto"]]

respuesta: datos[escenario_idx][1
tipo: mc
opciones_explicitas: ["entero", "decimal", "texto", "booleano"]

enunciado: "Si tenemos el valor {datos[escenario_idx][0]}, ¿qué tipo de dato representa principalmente?"

explicacion: |
  El tipo de dato determina qué operaciones se pueden realizar con el valor. En este caso, {datos[escenario_idx][0]} es de tipo {datos[escenario_idx][1]}.
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["booleanos", "logica"]

respuesta: falso
tipo: vf

enunciado: "¿El tipo de dato booleano puede almacenar valores como 'si', 'no', 'tal vez' o '10'?"

explicacion: |
  Falso. El tipo booleano es estrictamente binario: solo puede representar dos estados, verdadero (true) o falso (false).
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["numeros", "decimales"]

respuesta: "float"
tipo: mc
opciones_explicitas: ["int", "float", "string", "bool"]

enunciado: "Cuando necesitamos representar un número que contiene una parte fraccionaria (como 0.5 o -1.25), el tipo de dato más adecuado es:"

explicacion: |
  Los números enteros (int) no permiten decimales. Para valores con precisión decimal utilizamos tipos de punto flotante (float o double).
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["flujo", "asignacion"]

respuesta: ["Declarar", "Asignar", "Usar"]
tipo: ordenar
opciones_explicitas: ["Declarar", "Asignar", "Usar"]

enunciado: "Ordena los pasos lógicos para trabajar con una variable en un programa:"

pasos:
  - "Crear el nombre de la variable en memoria."
  - "Darle un valor inicial."
  - "Emplear la variable en una operación o instrucción."

explicacion: |
  Primero se debe declarar la variable (reservar espacio), luego asignar un valor (inicializar) y finalmente se puede usar en el código.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_datos"
  nivel: "basico"
  tags: ["fundamentos", "tipos_de_datos"]

variables:
  ejemplo_idx: uno_de([0, 1, 2])
  datos: [["42", "int"], ["3.14", "float"], ["\"Hola\"", "string"]]

enunciado: "Si asignamos el valor {datos[ejemplo_idx][0]} a una variable, el tipo de dato resultante es {datos[ejemplo_idx][1]}."

respuesta: datos[ejemplo_idx][1
tipo: mc
opciones_explicitas: ["int", "float", "string", "boolean"]

explicacion: |
  Cada valor tiene un tipo asociado: los números sin decimales son enteros (int), los que tienen punto decimal son de punto flotante (float) y las secuencias de caracteres entre comillas son cadenas (string).
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_datos"
  nivel: "basico"
  tags: ["logica", "booleanos"]

enunciado: "En programación, una comparación como 10 > 5 resulta en un valor de tipo ___."

respuestas_validas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: completar

explicacion: |
  Las comparaciones lógicas devuelven valores booleanos: 'verdadero' (true) si la condición se cumple, o 'falso' (false) si no se cumple.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_datos"
  nivel: "intermedio"
  tags: ["casting", "conversiones"]

variables:
  valor_original: "10.7"
  tipo_destino: uno_de([0, 1])
  escenario: [["int", "10"], ["float", "10.7"]]

enunciado: "Si convertimos el valor {valor_original} al tipo {escenario[escenario_idx][0]}, el resultado será {escenario[escenario_idx][1]}."

respuesta: escenario[escenario_idx][1
tipo: mc
opciones_explicitas: ["10", "10.7", "11", "error"]

explicacion: |
  Al convertir un número decimal (float) a un entero (int), se realiza un truncamiento: se eliminan todos los dígitos después del punto decimal sin redondear.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_datos"
  nivel: "basico"
  tags: ["almacenamiento", "memoria"]

enunciado: "Ordena los siguientes tipos de datos de menor a mayor consumo aproximado de memoria en un sistema estándar (asumiendo 8 bits para booleanos y 32/64 para otros):"

opciones_explicitas: ["boolean", "int", "float", "string"]
respuesta: ["boolean", "int", "float", "string"]
tipo: ordenar

explicacion: |
  Un booleano ocupa el espacio mínimo (1 bit/byte), seguido por enteros y flotantes de tamaño fijo, mientras que los strings son dinámicos y dependen de la longitud del texto.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_datos"
  nivel: "intermedio"
  tags: ["conceptos", "mutabilidad"]

enunciado: "En muchos lenguajes de programación, una vez que una variable de tipo 'string' ha sido creada, su contenido no puede ser modificado directamente en la memoria, sino que se debe crear una nueva cadena. ¿Es esto verdadero o falso?"

respuesta: verdadero
tipo: vf
opciones_explicitas: ["verdadero", "falso"]

explicacion: |
  Esto se conoce como inmutabilidad. En lenguajes como Python o Java, los strings son inmutables; cualquier "modificación" genera un nuevo objeto en memoria.
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["tipos_de_dato", "errores_comunes"]

variables:
  a: 10
  b: "5"

enunciado: "Si intentamos realizar la operación matemática de sumar {a} + {b} en un lenguaje de tipado fuerte, el resultado esperado suele ser un error de tipo (TypeError) porque no se puede sumar un entero con un ___."

opciones_explicitas: ["entero", "decimal", "string", "booleano"]
respuesta: "string"
tipo: "mc"

explicacion: |
  En programación, no puedes sumar directamente un número (entero) con una cadena de texto (string). Para hacerlo, primero debes convertir el string a un número usando funciones como `int()` o `float()`.
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["booleanos", "logica"]

enunciado: "En la lógica de programación, el valor booleano que representa la falsedad se escribe como ___."

respuestas_validas: ["falso", "false"]
tipo: "completar"

explicacion: |
  Los tipos de datos booleanos solo pueden tener dos valores posibles: verdadero (true) o falso (false).
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["decimales", "float", "precision"]

variables:
  valor_a: 15
  valor_b: 15.5

enunciado: "Si declaramos una variable para almacenar el precio de un producto que puede tener centavos, como {valor_b}, ¿qué tipo de dato es el más adecuado para evitar la pérdida de precisión?"

opciones_explicitas: ["int", "float", "string", "bool"]
respuesta: "float"
tipo: "mc"

explicacion: |
  Los tipos `int` (enteros) solo almacenan números sin parte decimal. Para valores con decimales, se utilizan tipos de punto flotante como `float` o `double`.
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "intermedio"
  tags: ["almacenamiento", "memoria"]

enunciado: "Ordena los siguientes pasos que ocurren cuando una computadora asigna una variable en memoria, desde la reserva del espacio hasta el uso del dato:"

opciones_explicitas: ["Reserva de espacio en RAM", "Asignación de un nombre a la dirección", "Almacenamiento del valor", "Acceso al dato mediante el nombre"]
respuesta: ["Reserva de espacio en RAM", "Asignación de un nombre a la dirección", "Almacenamiento del valor", "Acceso al dato mediante el nombre"]
tipo: "ordenar"

explicacion: |
  Para usar una variable, el sistema primero debe encontrar un lugar vacío en la memoria (RAM), asignar ese lugar a un nombre para que el programador lo reconozca, guardar el valor y finalmente permitir su lectura.
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["comparacion", "booleanos"]

enunciado: "Si evaluamos la expresión lógica (5 == 5.0), el resultado es ___."

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: "mc"

explicacion: |
  En la mayoría de los lenguajes modernos, al comparar un entero con un número decimal que tiene el mismo valor numérico, el resultado es verdadero porque el contenido matemático es el mismo.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_dato_numericos"
  nivel: "basico"
  tags: ["tipos_de_dato", "numeros"]

respuesta: "flotante"
tipo: completar
respuestas_validas: ["flotante", "decimal", "real"]

enunciado: "Mientras que un tipo de dato entero representa números sin parte decimal, un tipo de dato ___ representa números que requieren precisión decimal."

explicacion: |
  En programación, los enteros (int) se usan para conteos exactos, mientras que los flotantes (float) se usan para mediciones con decimales.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_dato_logicos"
  nivel: "basico"
  tags: ["booleanos", "logica"]

opciones_explicitas: ["falso", "verdadero", "texto", "entero"]
respuesta: "verdadero"
tipo: mc

enunciado: "Un tipo de dato booleano se distingue de otros tipos porque su valor solo puede representar uno de dos estados lógicos. ¿Cuáles son esos estados?"

explicacion: |
  Los booleanos son la base de la lógica computacional y solo pueden ser 'verdadero' o 'falso'.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_dato_texto"
  nivel: "basico"
  tags: ["strings", "texto"]

respuestas_validas: ["comillas"]
respuesta: "comillas"
tipo: completar

enunciado: "A diferencia de los tipos numéricos, el tipo de dato texto (string) se distingue de un número por estar delimitado por ___ en el código fuente."

explicacion: |
  El uso de comillas (simples o dobles) le indica al compilador que el contenido debe tratarse como una secuencia de caracteres y no como una variable o un número.
```

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_memoria"
  nivel: "intermedio"
  tags: ["memoria", "orden"]

opciones_explicitas: ["Booleano", "Entero", "Flotante", "String"]
respuesta: ["Booleano", "Entero", "Flotante", "String"]
tipo: ordenar

enunciado: "Ordena los siguientes tipos de datos de menor a mayor complejidad de almacenamiento y procesamiento en la memoria de una computadora típica:"

explicacion: |
  Los booleanos ocupan menos espacio, seguidos por enteros, luego números decimales (que requieren más bits para la mantisa) y finalmente las cadenas de texto, cuyo tamaño depende de su longitud.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_dato_logicos"
  nivel: "basico"
  tags: ["booleanos", "logica"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que el tipo de dato booleano puede almacenar el valor numérico 5.5?"

explicacion: |
  Falso. El tipo booleano es estrictamente binario (verdadero/falso) y no puede contener valores decimales o enteros distintos a su lógica.
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["tipos_de_dato", "programacion"]

variables:
  datos: [["edad", "25", "nombre", "Ana", "precio", "19.99", "es_valido", "true"], ["puntos", "100", "usuario", "Dev_User", "promedio", "8.5", "esta_activo", "false"]]
  idx: uno_de([0, 1])

enunciado: "Si queremos almacenar el valor de la variable {datos[idx][0]} que contiene el dato {datos[idx][1]}, ¿qué tipo de dato es?"

opciones_explicitas: ["entero", "decimal", "texto", "booleano"]
respuesta: ["entero", "decimal", "texto", "booleano"][idx % 4]
tipo: mc

explicacion: |
  El tipo de dato depende del contenido: si es un número sin decimales es entero, si tiene decimales es decimal, si es una secuencia de caracteres es texto y si es verdadero/falso es booleano.
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["completar", "tipos_de_dato"]

variables:
  datos: [["\"Hola Mundo\"", "texto"], ["42", "entero"], ["3.14", "decimal"], ["false", "booleano"]]
  idx: uno_de([0, 1, 2, 3])

enunciado: "La variable que contiene el valor {datos[idx][0]} es de tipo ___."

respuestas_validas: ["texto", "entero", "decimal", "booleano"]
respuesta: datos[idx][1
tipo: completar

explicacion: |
  Cada valor tiene una representación lógica en memoria: los textos van entre comillas, los enteros no tienen punto decimal, los decimales sí, y los booleanos representan estados lógicos.
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "intermedio"
  tags: ["booleanos", "memoria"]

enunciado: "¿Es correcto afirmar que una variable de tipo booleano puede almacenar el valor 15.5?"

respuesta: falso
tipo: vf

explicacion: |
  Falso. Las variables de tipo booleano solo pueden almacenar dos valores: verdadero o falso. El valor 15.5 es un número decimal.
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "intermedio"
  tags: ["ordenar", "memoria"]

enunciado: "Ordena los siguientes tipos de datos de menor a mayor capacidad de representar valores numéricos (desde el más simple al más complejo en términos de precisión decimal):"

opciones_explicitas: ["entero", "decimal", "texto"]
respuesta: ["entero", "decimal", "texto"]
tipo: ordenar

explicacion: |
  El tipo entero solo maneja números sin decimales. El decimal permite precisión fraccionaria. El texto es una estructura compleja que puede contener cualquier carácter.
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["identificacion", "programacion"]

variables:
  datos: [["saldo", "500.50", "decimal"], ["nombre", "Juan", "texto"], ["es_mayor", "true", "booleano"]]
  idx: uno_de([0, 1, 2])

enunciado: "En un sistema de gestión, la variable '{datos[idx][0]}' tiene el valor '{datos[idx][1]}'. Su tipo de dato es:"

opciones_explicitas: ["decimal", "texto", "booleano"]
respuesta: datos[idx][2]
tipo: mc

explicacion: |
  Al analizar el valor '{datos[idx][1]}', podemos determinar su naturaleza: si tiene punto decimal es decimal, si es una cadena de letras es texto y si es un valor lógico es booleano.
```

## Sección: virtualizacion-maquina-virtual-contenedor (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["conceptos", "virtualizacion"]

respuesta: "hipervisor"
tipo: completar
respuestas_validas: ["hipervisor", "hypervisor"]

enunciado: "En la virtualización de hardware, el software encargado de gestionar los recursos físicos y permitir la ejecución de múltiples sistemas operativos sobre un mismo host se denomina ___."

explicacion: |
  El hipervisor (o Virtual Machine Monitor) es la capa de software que crea y ejecuta máquinas virtuales, abstrayendo el hardware físico para que cada VM crea tener control total sobre él.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["aislamiento", "kernel"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["maquina_virtual", "incluye un kernel propio"], ["contenedor", "comparte el kernel del host"]]

respuesta: uno_de([0, 1])
tipo: mc
opciones_explicitas: ["maquina_virtual", "contenedor"]

enunciado: "Un elemento fundamental que diferencia a los contenedores de las máquinas virtuales es que el {datos[escenario_idx][0]} {datos[escenario_idx][1]}."

explicacion: |
  Las máquinas virtuales son pesadas porque emulan hardware completo y cada una tiene su propio sistema operativo (kernel). Los contenedores son ligeros porque comparten el kernel del sistema operativo anfitrión.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["portabilidad", "contenedor"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es cierto que los contenedores ofrecen una mayor portabilidad y rapidez de inicio en comparación con las máquinas virtuales debido a su arquitectura ligera?"

explicacion: |
  Verdadero. Al no tener que arrancar un sistema operativo completo desde cero, los contenedores se inician en milisegundos y son mucho más fáciles de mover entre entornos.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["componentes", "vm"]

respuesta: ["Hardware", "Hipervisor", "Sistema Operativo Invitado", "Aplicación"]
tipo: ordenar

opciones_explicitas: ["Hardware", "Hipervisor", "Sistema Operativo Invitado", "Aplicación"]

enunciado: "Ordene las capas de abstracción desde la base física hasta el nivel de usuario en una arquitectura de máquina virtual estándar:"

explicacion: |
  La jerarquía comienza en el hardware físico, sobre el cual actúa el hipervisor para crear la capa virtualizada, donde reside el SO invitado, permitiendo finalmente la ejecución de la aplicación.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["usos", "microservicios"]

respuesta: "microservicios"
tipo: mc
opciones_explicitas: ["microservicios", "emular hardware antiguo", "aislamiento total de kernel"]

enunciado: "Debido a su naturaleza ligera y eficiente, los contenedores son la tecnología preferida para implementar arquitecturas de ___."

explicacion: |
  Los microservicios se benefician de los contenedores porque permiten desplegar, escalar y destruir pequeñas unidades de software de forma extremadamente rápida y aislada.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["virtualizacion", "conceptos_base"]

variables:
  tipo_tecnologia: uno_de(["vm", "contenedor"])

enunciado: "Si utilizamos {tipo_tecnologia}, el aislamiento se logra mediante un hipervisor que emula hardware completo, mientras que si usamos un contenedor, el aislamiento se basa en el aislamiento de procesos del kernel del sistema operativo host."

respuesta: "vm"
tipo: mc
opciones_explicitas: ["vm", "contenedor"]

explicacion: |
  Las Máquinas Virtuales (VM) incluyen un Sistema Operativo completo (Guest OS) sobre un hipervisor, lo que requiere más recursos. Los contenedores comparten el kernel del host, siendo mucho más ligeros.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["arquitectura", "stack_software"]

variables:
  es_contenedor: uno_de([verdadero, falso])

enunciado: "Considera el siguiente stack de software para un entorno de ejecución. Ordena los componentes desde la base (hardware) hasta la aplicación, asumiendo que el escenario seleccionado es: {es_contenedor_desc}."

pasos:
  - "Identificar la base física."
  - "Ubicar el componente de gestión de recursos (Kernel o Hypervisor)."
  - "Ubicar el entorno de ejecución (Runtime/Library)."
  - "Ubicar la aplicación final."

variables:
  es_contenedor_desc: uno_de(["un sistema con contenedores", "una máquina virtual"])
  stack_contenedor: ["Hardware", "Kernel del Host", "Motor de Contenedores", "Aplicación"]
  stack_vm: ["Hardware", "Hipervisor", "Sistema Operativo Invitado", "Aplicación"]

respuesta: ["Hardware", "Kernel del Host", "Motor de Contenedores", "Aplicación"]
tipo: ordenar
opciones_explicitas: ["Hardware", "Kernel del Host", "Motor de Contenedores", "Aplicación"]

explicacion: |
  En contenedores, el stack es más corto porque no hay un sistema operativo completo entre el kernel y el motor de contenedores.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["recursos", "performance"]

variables:
  escenario: uno_de([0, 1])

enunciado: "Un desarrollador necesita desplegar 50 instancias de una micro-aplicación que solo tarda 10 segundos en arrancar. Si elige la opción {escenario_tipo}, el tiempo de arranque será significativamente menor debido a que no debe cargar un kernel completo por cada instancia."

variables:
  escenario_tipo: uno_de(["contenedor", "máquina virtual"])
  es_contenedor: uno_de([verdadero, falso])

respuesta: verdadero
tipo: vf

explicacion: |
  Los contenedores son ideales para microservicios y despliegues masivos debido a su velocidad de arranque y bajo consumo de memoria RAM.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["hipervisor", "vm"]

variables:
  valor_hipervisor: uno_de([1, 0])

enunciado: "En una arquitectura de virtualización de tipo 1 (Bare Metal), el hipervisor se instala directamente sobre el hardware. Si el software de virtualización se instala sobre un sistema operativo ya existente (Tipo 2), ¿el hipervisor es el componente que gestiona directamente el hardware físico? (Responde verdadero o falso)."

respuesta: falso
tipo: vf

explicacion: |
  En la virtualización Tipo 2 (Hosted), el sistema operativo host es el que gestiona el hardware, y el hipervisor corre como una aplicación más sobre él.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "avanzado"
  tags: ["namespaces", "cgroups"]

variables:
  tecnologia: uno_de(["docker", "vm"])

enunciado: "Para lograr el aislamiento de procesos en un contenedor como {tecnologia_nombre}, el kernel de Linux utiliza dos mecanismos críticos: los namespaces para la visibilidad de recursos y los ___ para la limitación de recursos (CPU/RAM)."

variables:
  tecnologia_nombre: uno_de(["Docker", "VMware"])
  respuesta_mecanismo: "cgroups"

respuesta_mecanismos: ["cgroups", "drivers", "kernels"]

respuesta: "cgroups"
tipo: completar
respuestas_validas: ["cgroups"]

explicacion: |
  Los namespaces proporcionan aislamiento (lo que ves), mientras que los cgroups (Control Groups) proporcionan límites (cuánto puedes usar).
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["arquitectura", "kernel", "aislamiento"]

respuesta: "kernel"
tipo: completar
respuestas_validas: ["kernel", "núcleo"]

enunciado: "A diferencia de una máquina virtual que incluye un sistema operativo completo, un contenedor comparte el ___ del sistema operativo host para ejecutar sus procesos."

explicacion: |
  Los contenedores son más ligeros porque no emulan hardware ni cargan un kernel propio; simplemente aíslan procesos que corren directamente sobre el kernel del host.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["recursos", "overhead", "rendimiento"]

variables:
  escenario: uno_de([
    ["Máquina Virtual", "Contenedor", "Hipervisor"],
    ["Contenedor", "Máquina Virtual", "Hipervisor"],
    ["Hipervisor", "Contenedor", "Máquina Virtual"]
  ])

respuesta: escenario[0
tipo: mc
opciones_explicitas: ["Máquina Virtual", "Contenedor", "Hipervisor"]

enunciado: "Si el objetivo principal es maximizar la densidad de aplicaciones en un único servidor físico minimizando el uso de memoria y CPU, ¿qué tecnología es la más eficiente?"

explicacion: |
  Los contenedores tienen menos 'overhead' porque no necesitan ejecutar un sistema operativo invitado (Guest OS) completo para cada instancia, permitiendo ejecutar muchas más unidades en el mismo hardware.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["seguridad", "aislamiento"]

respuesta: falso

tipo: vf

enunciado: "En un entorno de contenedores, si un proceso logra un 'escape de contenedor' y compromete el kernel, todos los demás contenedores que comparten ese mismo kernel están en riesgo."

explicacion: |
  Es falso (en el contexto de la pregunta de seguridad estándar): Si el kernel se ve comprometido, el aislamiento se rompe para todo el host. Sin embargo, la afirmación técnica es que el riesgo es real. (Nota: El usuario debe evaluar si la premisa de riesgo es cierta).
*Nota de diseño: La pregunta es de evaluación de concepto de seguridad.*
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "avanzado"
  tags: ["boot", "secuencia", "arquitectura"]

respuesta: ["Hardware", "Hipervisor", "Sistema Operativo Invitado", "Aplicación"]
tipo: ordenar
opciones_explicitas: ["Hardware", "Hipervisor", "Sistema Operativo Invitado", "Aplicación"]

enunciado: "Ordene los componentes según el orden de ejecución/capas en una arquitectura de Máquina Virtual clásica (desde la base física hacia la aplicación):"

explicacion: |
  En una VM, el hardware inicializa el hipervisor, el hipervisor carga el sistema operativo invitado, y finalmente el SO carga la aplicación. En un contenedor, el proceso es más directo hacia la aplicación.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["portabilidad", "dependencias"]

variables:
  caso: uno_de([
    ["VM", "Contenedor"],
    ["Contenedor", "VM"]
  ])

respuesta: caso[0
tipo: mc
opciones_explicitas: ["VM", "Contenedor"]

enunciado: "Si necesito ejecutar una aplicación que requiere un kernel de Linux muy específico o una versión de sistema operativo distinta a la del host, ¿qué tecnología debo elegir para asegurar la compatibilidad total?"

explicacion: |
  Las Máquinas Virtuales emulan hardware y permiten instalar cualquier sistema operativo con su propio kernel, lo que las hace ideales para escenarios de máxima compatibilidad pero con mayor consumo de recursos.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["virtualizacion", "aislamiento"]

respuesta: "sistema operativo"
tipo: completar
respuestas_validas: ["sistema operativo"]

enunciado: "A diferencia de un contenedor, que comparte el núcleo del host, una máquina virtual incluye un ___ completo para funcionar."

explicacion: |
  Las máquinas virtuales (VM) incluyen un sistema operativo completo (Guest OS), lo que requiere un hipervisor, mientras que los contenedores comparten el kernel del host, siendo mucho más ligeros.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["recursos", "rendimiento"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["un contenedor", "una máquina virtual"],
    ["más ligero y rápido", "más pesado y lento"]
  ]

respuesta: uno_de([0, 1])
tipo: mc
opciones_explicitas: ["más ligero y rápido", "más pesado y lento"]

enunciado: "Considerando la arquitectura de virtualización, un {escenarios[escenario_idx][0]} suele ser {escenarios[escenario_idx][1]} en comparación con su contraparte."

explicacion: |
  Los contenedores son procesos aislados que comparten el kernel, por lo que no necesitan arrancar un sistema operativo completo, lo que los hace mucho más eficientes en el uso de CPU y RAM.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["abstraccion", "arquitectura"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que la virtualización a nivel de sistema operativo (contenedores) ofrece un aislamiento más fuerte que la virtualización a nivel de hardware (máquinas virtuales)?"

explicacion: |
  Falso. La virtualización de hardware (VM) ofrece un aislamiento superior porque cada VM tiene su propio kernel independiente, mientras que los contenedores comparten el mismo kernel del host, lo que representa un mayor riesgo de seguridad si el kernel es vulnerado.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["ciclo_de_vida", "velocidad"]

respuesta: ["Contenedor", "Máquina Virtual"]
tipo: ordenar
opciones_explicitas: ["Contenedor", "Máquina Virtual"]

enunciado: "Ordene los siguientes elementos de mayor a menor velocidad de arranque (del más rápido al más lento):"

explicacion: |
  Los contenedores arrancan casi instantáneamente porque son simplemente procesos del sistema operativo. Las máquinas virtuales deben realizar un proceso de boot completo del sistema operativo invitado, lo que toma segundos o minutos.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "avanzado"
  tags: ["arquitectura", "microservicios"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["microservicios", "una aplicación monolítica que requiere un kernel de Linux específico en un host Windows"],
    ["una aplicación monolítica que requiere un kernel de Linux específico en un host Windows", "microservicios"]
  ]
  solucion: ["microservicios", "una aplicación monolítica que requiere un kernel de Linux específico en un host Windows"]

respuesta: uno_de([0, 1])
tipo: mc
opciones_explicitas: ["microservicios", "una aplicación monolítica que requiere un kernel de Linux específico en un host Windows"]

enunciado: "Si el objetivo principal es desplegar una arquitectura de {casos[caso_idx][0]}, la tecnología más adecuada es el uso de contenedores. Si el objetivo es ejecutar {casos[caso_idx][1]}, se prefiere una máquina virtual."

explicacion: |
  Los contenedores son ideales para microservicios por su agilidad y escalabilidad. Las máquinas virtuales son necesarias cuando se requiere un aislamiento total del kernel o se necesita ejecutar un sistema operativo distinto al del host.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["contenedores", "docker", "microservicios"]

variables:
  escenario_idx: uno_de([0,1])
  datos: [["un microservicio ligero que necesita escalar rápido", "contenedor"], ["un sistema operativo completo con kernel propio", "maquina_virtual"]]

enunciado: "Si el objetivo principal es desplegar {datos[escenario_idx][0]} para maximizar la eficiencia de recursos, la tecnología más adecuada es un {datos[escenario_idx][1]}."

respuesta: datos[escenario_idx][1
tipo: mc
opciones_explicitas: ["contenedor", "maquina_virtual"]

explicacion: |
  Los contenedores comparten el kernel del sistema operativo host, lo que los hace ideales para microservicios y escalado rápido, a diferencia de las máquinas virtuales que emulan hardware completo.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["kernel", "aislamiento"]

respuesta: falso
tipo: vf

enunciado: "Un contenedor de software incluye un kernel de sistema operativo completo e independiente para cada instancia ejecutada."

explicacion: |
  Falso. Los contenedores comparten el kernel del host, mientras que las máquinas virtuales sí ejecutan un kernel propio dentro de cada instancia.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["vm", "hipervisor"]

respuesta: "hipervisor"
tipo: completar
respuestas_validas: ["hipervisor"]

enunciado: "En la arquitectura de una máquina virtual, el software encargado de gestionar y distribuir los recursos físicos a las distintas máquinas virtuales se denomina ___."

explicacion: |
  El hipervisor (o VMM) es la capa de software que permite la existencia de la virtualización al gestionar el hardware para múltiples sistemas operativos.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["proceso", "arranque"]

enunciado: "Ordena los componentes según el orden de capas (desde el hardware hacia el usuario) para una máquina virtual."

respuesta: ["Host OS", "Hypervisor", "Guest OS"]
tipo: ordenar
opciones_explicitas: ["Host OS", "Hypervisor", "Guest OS"]

explicacion: |
  En una VM, el hipervisor se asienta sobre el hardware/host para dar servicio al Guest OS. En contenedores, el motor de contenedores gestiona las aplicaciones sobre el OS host.
```

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["recursos", "almacenamiento"]

variables:
  caso_idx: uno_de([0,1])
  comparativa: [["pesada", "maquina_virtual"], ["ligera", "contenedor"]]

enunciado: "Comparando ambas tecnologías, una {comparativa[caso_idx][0]} es considerada generalmente como una solución ___ en términos de consumo de memoria y almacenamiento."

respuesta: comparativa[caso_idx][1
tipo: mc
opciones_explicitas: ["ligera", "pesada"]

explicacion: |
  Los contenedores son ligeros porque no emulan hardware ni incluyen un kernel completo, mientras que las máquinas virtuales son pesadas debido a la duplicación de sistemas operativos.
```
