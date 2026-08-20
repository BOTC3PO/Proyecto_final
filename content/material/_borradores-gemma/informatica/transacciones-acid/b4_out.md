### 1 — El concepto de Atomicidad
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

### 2 — Aislamiento vs Concurrencia
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

### 3 — Consistencia vs Integridad
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

### 4 — Durabilidad y Volatilidad
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

### 5 — Ciclo de vida de una transacción
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