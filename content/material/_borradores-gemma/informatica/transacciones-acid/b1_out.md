### 1 — Concepto de Transacción
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
respuesta: ["Atomicidad", "Consistencia", "Aislamiento", "Durabilidad"]
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
  escenario: uno_de([
    ["Transacción A modifica un dato y la Transacción B lo lee antes de que A termine", "Interferencia"],
    ["Transacción A completa sus cambios y la Transacción B ve el estado final", "Aislamiento"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Interferencia", "Aislamiento"]

enunciado: "Si una transacción puede ver los cambios de otra transacción solo después de que esta última haya finalizado, estamos ante un escenario de: {escenario[1]}"

explicacion: |
  El aislamiento (Isolation) asegura que las transacciones se ejecuten de manera que parezca que se están ejecutando de forma secuencial, evitando que una vea estados intermedios de otra.
```