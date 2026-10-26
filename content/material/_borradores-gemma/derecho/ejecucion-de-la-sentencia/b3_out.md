### 1 — ¿Cuándo es ejecutable una sentencia?
```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "basico"
  tags: ["procedimiento", "cosa_juzgada"]

respuesta: verdadero
tipo: vf

enunciado: "¿Una sentencia que aún puede ser apelada (es decir, que no ha quedado firme) puede ser objeto de ejecución forzada para el cumplimiento de la obligación principal?"

explicacion: |
  Para que una sentencia sea ejecutable de forma definitiva, debe haber quedado firme (cosa juzgada). Si bien existen medidas cautelares o ejecuciones provisionales en ciertos casos, la regla general es que la ejecución definitiva requiere que no existan recursos pendientes que puedan modificar el contenido de la decisión.
```

### 2 — El rol del actor en la ejecución
```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "intermedio"
  tags: ["sujeto", "impulso_procesal"]

variables:
  escenario: uno_de([["El actor debe solicitar la ejecución", "El juez debe actuar de oficio"], ["El demandado debe pedir el cumplimiento", "El secretario debe iniciar el embargo"]])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["El actor debe solicitar la ejecución", "El juez debe actuar de oficio", "El demandado debe pedir el cumplimiento", "El secretario debe iniciar el embargo"]

enunciado: "Una vez que la sentencia ha quedado firme, ¿cuál es la carga procesal respecto al inicio de la fase de ejecución?"

explicacion: |
  En el derecho procesal civil, rige el principio dispositivo. El juez no inicia la ejecución de la sentencia de oficio; es el actor (el vencedor) quien debe promover la ejecución para que se haga cumplir lo juzgado.
```

### 3 — Requisitos para el embargo
```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "intermedio"
  tags: ["medidas_precautorias", "embargo"]

respuesta: "Título Ejecutivo"
tipo: completar
respuestas_validas: ["Título Ejecutivo", "Sentencia Firme", "Mandamiento"]

enunciado: "Para que el oficial de justicia pueda proceder al embargo de bienes del deudor, el acreedor debe presentar ante el juzgado el ___."

explicacion: |
  La ejecución requiere un título que sea hábil para permitir el mandamiento de ejecución y embargo. La sentencia firme constituye dicho título ejecutivo.
```

### 4 — Secuencia de la ejecución forzada
```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "avanzado"
  tags: ["procedimiento", "secuencia"]

respuesta: ["Sentencia firme", "Mandamiento de ejecución", "Embargo de bienes", "Subasta judicial"]
tipo: ordenar
opciones_explicitas: ["Sentencia firme", "Mandamiento de ejecución", "Embargo de bienes", "Subasta judicial"]

enunciado: "Ordene cronológicamente las etapas típicas de un proceso de ejecución de sentencia de cumplimiento dinerario:"

explicacion: |
  El proceso comienza con la firmeza de la sentencia, sigue con la orden judicial (mandamiento/intimación), la afectación de bienes (embargo) y finalmente la realización de los bienes para pagar la deuda (subasta).
```

### 5 — Diferencia entre cumplimiento voluntario y forzado
```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "basico"
  tags: ["cumplimiento", "plazos"]

variables:
  caso: uno_de([["el plazo para el cumplimiento voluntario ha vencido", "el demandado ha apelado la sentencia"]])

respuesta: caso[0]
tipo: mc
opciones_explicitas: ["el plazo para el cumplimiento voluntario ha vencido", "el demandado ha apelado la sentencia", "la sentencia es nula", "el juez ha dictado una medida cautelar"]

enunciado: "Para que el acreedor pueda instar la ejecución forzada ante el incumplimiento, ¿qué condición debe cumplirse respecto al plazo de cumplimiento voluntario en {caso}?"

explicacion: |
  La ejecución forzada es la vía subsidiaria que se activa precisamente cuando el plazo otorgado para el cumplimiento espontáneo ha expirado sin que el deudor haya satisfecho la prestación.
```