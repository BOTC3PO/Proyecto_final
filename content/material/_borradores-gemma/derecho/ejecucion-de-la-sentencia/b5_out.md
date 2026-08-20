### 1 — La vía de ejecución
```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "intermedio"
  tags: ["proceso_civil", "sentencia_firme"]

variables:
  escenario: uno_de([["La sentencia ordena el pago de $100.000", "Mandamiento de ejecución"], ["La sentencia ordena el desalojo de un inmueble", "Lanzamiento"], ["La sentencia ordena la entrega de un vehículo", "Secuestro"]])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Mandamiento de ejecución", "Lanzamiento", "Secuestro", "Embargo preventivo"]

enunciado: "Una vez que la sentencia ha quedado firme y no admite más recursos, el actor debe iniciar la etapa de ejecución. Si el escenario es: {escenario[idx][0]}, el acto procesal correspondiente es un: ___."

explicacion: |
  Cuando la sentencia está firme, se pasa de la etapa de conocimiento a la de ejecución. El instrumento que habilita el cumplimiento forzado depende de la naturaleza de la obligación (dar, hacer o no hacer).
```

### 2 — Requisitos de la ejecución
```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "basico"
  tags: ["requisitos", "firmeza"]

variables:
  estado: uno_de([["firme", verdadero], ["apelada", falso]])
  idx: uno_de([0,1])

respuesta: estado[idx][1]
tipo: vf

enunciado: "Para que una sentencia pueda ser ejecutada forzadamente, debe haber quedado firme, es decir, que no existan recursos pendientes de resolución. Si la sentencia se encuentra {estado[idx][0]}, ¿es posible iniciar la ejecución? ___"

explicacion: |
  La ejecución de una sentencia requiere la certeza del derecho, la cual se obtiene cuando la sentencia queda firme (cosa juzgada), impidiendo que la parte vencida pueda modificar la decisión mediante recursos ordinarios.
```

### 3 — El embargo como medida
```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "intermedio"
  tags: ["embargo", "bienes"]

variables:
  caso: uno_de([["Deuda de dinero", "embargo"], ["Restitución de un bien mueble", "secuestro"], ["Obligación de hacer", "apercibimiento"]])
  idx: uno_de([0,1,2])

respuesta: caso[idx][1]
tipo: completar
opciones_validas: ["embargo", "secuestro", "apercibimiento"]

enunciado: "En el proceso de ejecución, si el objeto de la sentencia es el cumplimiento de una obligación de dar sumas de dinero y el deudor no paga voluntariamente, el acreedor puede solicitar un: ___."

explicacion: |
  El embargo es la medida cautelar ejecutiva que recae sobre bienes del deudor para asegurar el cumplimiento de una sentencia de pago de dinero.
```

### 4 — Etapas del proceso de ejecución
```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "avanzado"
  tags: ["secuencia", "procedimiento"]

respuesta: ["Sentencia firme", "Mandamiento/Citación de ejecución", "Embargo", "Remate/Subasta"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas necesarias para el cumplimiento forzado de una obligación de dar dinero:"

explicacion: |
  Primero se requiere la firmeza de la sentencia, luego se intima al cumplimiento mediante un mandamiento, se traban medidas sobre bienes (embargo) y finalmente se procede a la venta judicial (remate) para cobrar el crédito.
```

### 5 — El rol del Juez en la ejecución
```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "basico"
  tags: ["autoridad_judicial"]

variables:
  accion: uno_de([["El acreedor actúa por su cuenta", "falso"], ["El juez ordena el cumplimiento", "verdadero"])
  idx: uno_de([0,1])

respuesta: accion[idx][1]
tipo: vf

enunciado: "En la etapa de ejecución, el cumplimiento de la sentencia no es una facultad discrecional del acreedor, sino que requiere la intervención del órgano jurisdiccional para el uso de la fuerza pública si fuera necesario. ¿Es esto correcto? ___"

explicacion: |
  La ejecución es una actividad de imperio. Si el obligado no cumple voluntariamente, el Estado, a través del juez, debe intervenir para asegurar el cumplimiento de la decisión judicial.
```