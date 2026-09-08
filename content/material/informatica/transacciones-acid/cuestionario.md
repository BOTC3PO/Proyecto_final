# Informatica — Transacciones acid (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Transacción

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "basico"
  tags: ["bases_de_datos", "conceptos"]

respuesta: "unidad_de_trabajo"
tipo: completar
respuestas_validas:
  - "unidad_de_trabajo"
  - "unidad de trabajo"

enunciado: "En el contexto de bases de datos, una transacción se define como una ___ lógica que realiza una serie de operaciones."

explicacion: |
  Una transacción es una unidad de trabajo lógica que contiene una serie de operaciones de base de datos que deben ejecutarse de forma atómica.
```

### 2 — Propiedad de Atomicidad

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

### 3 — Propiedad de Durabilidad

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

### 4 — Orden de las propiedades ACID

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["acid", "orden"]

opciones_explicitas: ["Atomicidad", "Consistencia", "Aislamiento", "Durabilidad"]
respuesta_orden: ["Atomicidad", "Consistencia", "Aislamiento", "Durabilidad"]
tipo: ordenar

enunciado: "Ordena las siglas del acrónimo ACID según su significado correcto de izquierda a derecha:"

explicacion: |
  El acrónimo ACID se refiere a: Atomicidad, Consistencia, Aislamiento (Isolation) y Durabilidad.
```

### 5 — Propiedad de Aislamiento

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["acid", "aislamiento"]

variables:
  escenario: uno_de([["Transacción A modifica un dato y la Transacción B lo lee antes de que A termine", "Interferencia"], ["Transacción A completa sus cambios y la Transacción B ve el estado final", "Aislamiento"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Interferencia", "Aislamiento"]

enunciado: "En un sistema con control de concurrencia ocurre lo siguiente: {escenario[0]}. ¿Qué término describe mejor esta situación?"

explicacion: |
  El aislamiento (Isolation) asegura que las transacciones se ejecuten de manera que parezca que se están ejecutando de forma secuencial, evitando que una vea estados intermedios de otra.
```

### 6 — El problema de la transferencia bancaria

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["bases_de_datos", "acid", "atomicidad"]

variables:
  saldo_inicial: 1000
  transferencia: 200
  propiedad: "atomicidad"

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

### 7 — Integridad de los datos

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

### 8 — Concurrencia y visibilidad

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "avanzado"
  tags: ["bases_de_datos", "acid", "aislamiento"]

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

### 9 — Persistencia tras el fallo

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

### 10 — El ciclo de vida de una transacción

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

respuesta_orden: ["Inicio de la transacción", "Ejecución de operaciones de lectura/escritura", "Validación de reglas de integridad", "Confirmación (Commit) o Reversión (Rollback)"]
tipo: ordenar

explicacion: |
  El flujo comienza abriendo la transacción, se realizan las operaciones, el motor verifica que no se violen reglas (consistencia) y finalmente se decide si se hace commit para hacer los cambios permanentes o rollback para deshacer todo.
```

### 11 — El dilema de la atomicidad

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["acid", "atomicidad", "errores_comunes"]

respuesta: "Atomicidad"
tipo: completar
respuestas_validas:
  - "Atomicidad"
  - "atomicidad"
enunciado: "Si una transacción de transferencia bancaria falla justo después de descontar dinero de la cuenta A, pero antes de sumarlo a la cuenta B, la propiedad de ___ garantiza que el sistema vuelva al estado original como si nada hubiera ocurrido."

explicacion: |
  La atomicidad asegura que la transacción se trate como una unidad indivisible: o se realizan todos los pasos o ninguno. Si un paso falla, se realiza un rollback para mantener la integridad.
```

### 12 — Confusión entre Aislamiento y Consistencia

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

### 13 — La persistencia tras el crash

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "basico"
  tags: ["acid", "durabilidad"]

respuesta: verdadero
tipo: vf
enunciado: "Si una base de datos confirma (commit) una transacción y, un milisegundo después, el servidor sufre un corte de energía total, la propiedad de Durabilidad garantiza que los cambios realizados por esa transacción no se perderán al reiniciar el sistema. ¿Es esto correcto?"

explicacion: |
  La durabilidad asegura que una vez que el usuario recibe la confirmación de éxito, los datos han sido escritos en soporte no volátil (disco) y persistirán ante fallos de energía.
```

### 14 — El ciclo de vida de una transacción

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["acid", "flujo_transaccion"]

opciones_explicitas: ["Inicio", "Ejecución de operaciones", "Commit/Rollback", "Finalización"]

respuesta_orden: ["Inicio", "Ejecución de operaciones", "Commit/Rollback", "Finalización"]
tipo: ordenar

enunciado: "Ordena cronológicamente las etapas lógicas de una transacción de base de datos para asegurar el cumplimiento de las propiedades ACID:"

explicacion: |
  Una transacción debe comenzar, ejecutar sus instrucciones, decidir si confirma los cambios (Commit) o deshace todo (Rollback) y finalmente concluir el proceso.
```

### 15 — Integridad de reglas de negocio

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["acid", "consistencia"]

respuestas_validas:
  - "consistencia"
respuesta: "consistencia"
tipo: completar

enunciado: "Cuando una transacción deja la base de datos en un estado que viola una restricción de integridad (como un saldo negativo en una columna que no lo permite), se ha violado la propiedad de ___________."

explicacion: |
  La consistencia asegura que la base de datos pase de un estado válido a otro estado válido, respetando todas las reglas, restricciones y disparadores (triggers) definidos.
```

### 16 — El concepto de Atomicidad

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "basico"
  tags: ["acid", "atomicidad"]

respuesta: "todo o nada"
tipo: completar
respuestas_validas:
  - "todo o nada"

enunciado: "A diferencia de un proceso secuencial simple, la propiedad de atomicidad garantiza que una transacción se ejecute como una unidad indivisible, es decir, que el resultado sea ___."
```

### 17 — Aislamiento vs Concurrencia

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["acid", "aislamiento"]

respuesta: "aislamiento"
tipo: mc
opciones_explicitas: ["consistencia", "aislamiento", "durabilidad", "atomicidad"]

enunciado: "Si un sistema permite que una transacción vea cambios parciales (no confirmados) de otra transacción en curso, ¿qué propiedad ACID está fallando en garantizarse?"
```

### 18 — Consistencia vs Integridad

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

### 19 — Durabilidad y Volatilidad

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "basico"
  tags: ["acid", "durabilidad"]

respuesta: "se mantienen los cambios"
tipo: mc
opciones_explicitas: ["se pierden los datos", "se mantienen los cambios", "el sistema se bloquea", "se revierte todo"]

enunciado: "La durabilidad garantiza que, una vez que la transacción ha sido confirmada (commit), si ocurre un fallo del sistema inmediatamente después, ___."
```

### 20 — Ciclo de vida de una transacción

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["acid", "flujo"]

respuesta_orden: ["inicio", "ejecución", "commit", "finalización"]
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

### 21 — El problema del saldo incompleto

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

### 22 — La integridad de las reglas

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["acid", "consistencia"]

variables:
  textos: ["Un usuario intenta borrar un cliente que tiene facturas activas y el sistema lo impide para mantener la integridad", "El sistema permite que el saldo de una cuenta sea negativo a pesar de que la regla de negocio dice que no puede"]
  valores: [verdadero, falso]
  idx: uno_de([0, 1])

respuesta: valores[idx]
tipo: vf
enunciado: "Analiza el siguiente escenario: {textos[idx]}. ¿Se ha mantenido la propiedad de consistencia?"

explicacion: |
  La consistencia asegura que una transacción solo lleve a la base de datos de un estado válido a otro estado válido, respetando todas las reglas y restricciones definidas.
```

### 23 — El efecto de la concurrencia

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["acid", "aislamiento"]

respuesta: "aislamiento"
tipo: mc
opciones_explicitas: ["atomicidad", "consistencia", "aislamiento", "durabilidad"]

enunciado: "Si dos transacciones se ejecutan simultáneamente y una de ellas ve datos parciales o inconsistentes de la otra, ¿qué propiedad se está viendo afectada?"

explicacion: |
  El aislamiento garantiza que las transacciones concurrentes no interfieran entre sí, haciendo que parezca que se ejecutan de forma secuencial.
```

### 24 — El registro permanente

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "basico"
  tags: ["acid", "durabilidad"]

respuesta: "durabilidad"
tipo: completar
respuestas_validas:
  - "durabilidad"

enunciado: "Cuando una transacción ha sido confirmada con éxito, el sistema garantiza que sus cambios persistirán incluso ante un fallo del sistema. Esta propiedad se llama ___."

explicacion: |
  La durabilidad asegura que una vez que el usuario recibe la confirmación de que la transacción fue exitosa, los cambios son permanentes y no se perderán ante fallos eléctricos o caídas del software.
```

### 25 — Ciclo de vida de una transacción

```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["transacciones", "flujo"]

tipo: ordenar
opciones_explicitas: ["Inicio de transacción", "Ejecución de comandos", "COMMIT", "Aplicación permanente de los cambios"]
respuesta_orden: ["Inicio de transacción", "Ejecución de comandos", "COMMIT", "Aplicación permanente de los cambios"]

enunciado: "Ordena los pasos lógicos de una transacción que termina con éxito:"

explicacion: |
  En un escenario de éxito, la secuencia es: Inicio -> Ejecución de comandos -> COMMIT (confirmación) -> El sistema aplica permanentemente los cambios.
```
