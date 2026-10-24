### 1 — El problema del saldo incompleto
```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "basico"
  tags: ["acid", "atomicidad"]

variables:
  escenario: uno_de([["Transferencia de $100: se descuenta de cuenta A pero el sistema falla antes de sumar en cuenta B", "atomicidad"], ["Cálculo de intereses: el saldo final no coincide con la suma de movimientos", "consistencia"], ["Consulta masiva: un reporte lee datos que están siendo modificados por otro usuario", "aislamiento"], ["Falla de luz: el registro de la operación se perdió tras el reinicio", "durabilidad"]])
  idx: uno_de([0, 1, 2, 3])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["atomicidad", "consistencia", "aislamiento", "durabilidad"]

enunciado: "En una transferencia bancaria, si el sistema falla tras restar dinero de una cuenta pero antes de sumarlo en la otra, y la operación no se deshace por completo, ¿qué propiedad ACID se ha vulnerado?"

explicacion: |
  La atomicidad garantiza que una transacción se ejecute íntegramente o no se ejecute en absoluto ("todo o nada"). Si la operación queda a medias, se rompe la atomicidad.
```

### 2 — La integridad de las reglas
```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["acid", "consistencia"]

variables:
  caso: uno_de([["Un usuario intenta borrar un cliente que tiene facturas activas y el sistema lo impide para mantener la integridad", "true"], ["El sistema permite que el saldo de una cuenta sea negativo a pesar de que la regla de negocio dice que no puede", "false"]])
  idx: uno_de([0, 1])

respuesta: caso[idx][1]
tipo: vf

enunciado: "Si una transacción permite que la base de datos pase de un estado válido (cumpliendo todas las reglas de integridad) a un estado inválido, ¿se ha mantenido la propiedad de consistencia? {caso[idx][0]}"

explicacion: |
  La consistencia asegura que una transacción solo lleve a la base de datos de un estado válido a otro estado válido, respetando todas las reglas y restricciones definidas.
```

### 3 — El efecto de la concurrencia
```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["acid", "aislamiento"]

variables:
  escenario: uno_de([["Dos usuarios compran el último ticket de un concierto al mismo tiempo y ambos reciben confirmación", "aislamiento"], ["Un reporte de ventas muestra un total que no coincide con la suma de las filas debido a cambios en curso", "aislamiento"], ["El sistema se apaga y al volver, la transacción que ya había terminado se perdió", "aislamiento"]])
  idx: uno_de([0, 1, 2])

respuesta: "aislamiento"
tipo: mc
opciones_explicitas: ["atomicidad", "consistencia", "aislamiento", "durabilidad"]

enunciado: "Si dos transacciones se ejecutan simultáneamente y una de ellas ve datos parciales o inconsistentes de la otra, ¿qué propiedad se está viendo afectada?"

explicacion: |
  El aislamiento garantiza que las transacciones concurrentes no interfieran entre sí, haciendo que parezca que se ejecutan de forma secuencial.
```

### 4 — El registro permanente
```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "basico"
  tags: ["acid", "durabilidad"]

variables:
  evento: uno_de([["La transacción se confirma (commit) y tras un corte de energía los datos persisten", "durabilidad"], ["La transacción se confirma y el sistema falla, pero los datos se recuperan del log", "durabilidad"], ["La transacción se completa pero el usuario no ve el cambio hasta que refresca", "durabilidad"]])
  idx: uno_de([0, 1, 2])

respuesta: "durabilidad"
tipo: completar
respuestas_validas: ["durabilidad"]

enunciado: "Cuando una transacción ha sido confirmada con éxito, el sistema garantiza que sus cambios persistirán incluso ante un fallo del sistema. Esta propiedad se llama ___."

explicacion: |
  La durabilidad asegura que una vez que el usuario recibe la confirmación de que la transacción fue exitosa, los cambios son permanentes y no se perderán ante fallos eléctricos o caídas del software.
```

### 5 — Ciclo de vida de una transacción
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

respuesta: flujo[idx][2]
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