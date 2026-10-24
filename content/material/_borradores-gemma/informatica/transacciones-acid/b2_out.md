### 1 — El problema de la transferencia bancaria
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

### 2 — Integridad de los datos
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

### 3 — Concurrencia y visibilidad
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

### 4 — Persistencia tras el fallo
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
tipo: vf

explicacion: |
  La Durabilidad garantiza que una vez que el usuario recibe la confirmación de que la transacción fue exitosa, los datos han sido escritos en medios no volátiles (disco/SSD) y no se perderán.
```

### 5 — El ciclo de vida de una transacción
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