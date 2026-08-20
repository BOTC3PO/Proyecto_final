### 1 — Concepto de sentencia firme
```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "basico"
  tags: ["proceso", "sentencia", "firmeza"]

respuesta: verdadero
tipo: vf

enunciado: "Una sentencia queda 'firme' cuando ya no admite recursos contra ella y es de cumplimiento obligatorio."

explicacion: |
  La firmeza es el estado procesal que permite pasar de la etapa de conocimiento a la de ejecución.
```

### 2 — El acto de ejecución
```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "basico"
  tags: ["ejecucion", "mandamiento"]

variables:
  escenario: uno_de([["el demandado no paga", "el mandamiento de ejecución"], ["el demandado no entrega la cosa", "el mandamiento de entrega"]])

respuesta: escenario[0][1]
tipo: mc
opciones_explicitas: ["el mandamiento de ejecución", "la notificación de la sentencia", "el recurso de apelación", "la demanda inicial"]

enunciado: "Si la sentencia ordena el pago de una suma de dinero y el demandado no lo hace, el actor debe solicitar el ___ para iniciar la vía de apremio."

explicacion: |
  El mandamiento de ejecución es la orden judicial que ordena cumplir lo decidido bajo apercibimiento de ejecución forzada.
```

### 3 — Requisito para la ejecución
```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "intermedio"
  tags: ["título", "ejecución"]

respuesta: "título ejecutivo"
tipo: completar
respuestas_validas: ["título ejecutivo", "sentencia firme", "mandamiento"]

enunciado: "Para iniciar la fase de ejecución, es requisito indispensable contar con un ___ que sea exigible y que esté debidamente firme."

explicacion: |
  Sin un título que contenga una obligación de dar, hacer o no hacer, y que esté firme, no se puede avanzar a la ejecución.
```

### 4 — Etapas del proceso de ejecución
```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "intermedio"
  tags: ["secuencia", "etapas"]

respuesta: ["notificación", "mandamiento", "embargo", "remate"]
tipo: ordenar

opciones_explicitas: ["notificación", "mandamiento", "embargo", "remate"]

enunciado: "Ordene cronológicamente las etapas típicas de una ejecución de sentencia de dinero:"

explicacion: |
  Primero se notifica, luego se libra el mandamiento, se procede al embargo de bienes y finalmente al remate para convertir los bienes en dinero.
```

### 5 — ¿Es la ejecución un proceso nuevo?
```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "basico"
  tags: ["naturaleza", "proceso"]

respuesta: falso

tipo: vf

enunciado: "La ejecución de sentencia es un proceso totalmente independiente y nuevo, que no guarda relación con el juicio de conocimiento anterior."

explicacion: |
  Es una continuación del proceso anterior (fase de ejecución) para hacer efectivo el derecho ya reconocido en la sentencia.
```