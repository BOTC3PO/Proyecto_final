### 1 — El dilema de la atomicidad
```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "intermedio"
  tags: ["acid", "atomicidad", "errores_comunes"]

variables:
  estado_final: uno_de(["completada", "fallida"])

respuesta: estado_final == "completada"
tipo: vf

enunciado: "Si una transacción de transferencia bancaria falla justo después de descontar dinero de la cuenta A, pero antes de sumarlo a la cuenta B, la propiedad de {estado_final} garantiza que el sistema vuelva al estado original como si nada hubiera ocurrido."

explicacion: |
  La atomicidad asegura que la transacción se trate como una unidad indivisible: o se realizan todos los pasos o ninguno. Si un paso falla, se realiza un rollback para mantener la integridad.
```

### 2 — Confusión entre Aislamiento y Consistencia
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

### 3 — La persistencia tras el crash
```
metadata:
  materia: "informatica"
  tema: "transacciones_acid"
  nivel: "basico"
  tags: ["acid", "durabilidad"]

respuesta: "verdadero"
tipo: vf

enunciado: "Si una base de datos confirma (commit) una transacción y, un milisegundo después, el servidor sufre un corte de energía total, la propiedad de Durabilidad garantiza que los cambios realizados por esa transacción no se perderán al reiniciar el sistema."

explicacion: |
  La durabilidad asegura que una vez que el usuario recibe la confirmación de éxito, los datos han sido escritos en soporte no volátil (disco) y persistirán ante fallos de energía.
```

### 4 — El ciclo de vida de una transacción
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

### 5 — Integridad de reglas de negocio
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