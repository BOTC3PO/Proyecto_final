### 1 — Naturaleza de la sentencia firme
```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "intermedio"
  tags: ["derecho_procesal", "cosa_juzgada"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando una sentencia ha quedado firme, adquiere la autoridad de cosa juzgada, lo que significa que no puede ser revisada por el mismo juez o tribunal en el mismo proceso."

explicacion: |
  La firmeza de la sentencia es el presupuesto necesario para la ejecución forzada, ya que la cosa juzgada garantiza la seguridad jurídica e impide la reiteración de litigios sobre el mismo objeto.
```

### 2 — Diferencia entre cumplimiento voluntario y ejecución forzada
```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "basico"
  tags: ["cumplimiento", "ejecucion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El deudor paga la deuda por su cuenta antes de que se pida el embargo.", "cumplimiento_voluntario"],
    ["El acreedor debe pedir al juez que intervenga para obligar al pago mediante embargo.", "ejecucion_forzada"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["cumplimiento_voluntario", "ejecucion_forzada"]

enunciado: "Si el deudor se niega a cumplir la sentencia y el acreedor debe recurrir a la fuerza pública o medidas coercitivas para hacer efectiva su pretensión, estamos ante un caso de: ___"

explicacion: |
  El cumplimiento voluntario ocurre cuando la parte obligada satisface la prestación por su propia voluntad. La ejecución forzada es la respuesta ante la resistencia o el incumplimiento.
```

### 3 — El rol del juez en la ejecución
```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "intermedio"
  tags: ["juez", "jurisdiccion"]

respuesta: "el juez"
tipo: completar
respuestas_validas: ["el juez", "el abogado", "el secretario", "el fiscal"]

enunciado: "A diferencia de la etapa de conocimiento donde el juez decide el derecho, en la etapa de ejecución, ___ es quien debe dirigir las medidas para asegurar el cumplimiento de lo ordenado."

explicacion: |
  Aunque las partes impulsan el proceso, el juez mantiene el control de la legalidad de las medidas de ejecución (como embargos o lanzamientos) para evitar arbitrariedades.
```

### 4 — Requisitos para la ejecución
```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "avanzado"
  tags: ["requisitos", "sentencia"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es necesario que la sentencia sea líquida (que el monto sea determinado) para poder proceder a un embargo preventivo o ejecutivo de inmediato?"

explicacion: |
  No necesariamente. Si la sentencia es ilíquida, primero debe pasar por una etapa de liquidación para determinar el monto exacto antes de la ejecución forzada del pago.
```

### 5 — Etapas del proceso de ejecución
```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "intermedio"
  tags: ["procedimiento", "etapas"]

respuesta: ["Sentencia firme", "Mandamiento de ejecución", "Embargo", "Remate"]
tipo: ordenar
opciones_explicitas: ["Sentencia firme", "Mandamiento de ejecución", "Embargo", "Remate"]

enunciado: "Ordene cronológicamente las etapas típicas de un proceso de ejecución de sentencia de cumplimiento dinerario:"

explicacion: |
  Primero se requiere la firmeza (cosa juzgada), luego se emite el mandamiento (orden judicial), se procede al embargo de bienes y finalmente el remate para convertir los bienes en dinero.
```