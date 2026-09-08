# Derecho — Ejecucion de la sentencia (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

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

tipo: mc
opciones_explicitas: ["el mandamiento de ejecución", "la notificación de la sentencia", "el recurso de apelación", "la demanda inicial"]

respuesta: "el mandamiento de ejecución"

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
respuestas_validas:
  - "título ejecutivo"

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

respuesta_orden: ["notificación", "mandamiento", "embargo", "remate"]
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

### 6 — La sentencia firme

```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "intermedio"
  tags: ["procedimiento", "firmeza"]

variables:
  escenario: uno_de([["La sentencia de alimentos fue dictada pero el demandado apeló y la cámara confirmó la resolución.", "firme"], ["El juez dictó sentencia, pero el plazo para interponer recursos venció sin que ninguna parte se presentara.", "firme"]])

enunciado: "En el escenario descrito, la sentencia se considera {escenario[1]}."

respuesta: escenario[1]
tipo: completar
explicacion: |
  Una sentencia queda firme cuando ya no es susceptible de ser impugnada, ya sea porque se agotaron las instancias o porque los plazos para recurrir han vencido.
```

### 7 — El mandamiento de ejecución

```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "intermedio"
  tags: ["mandamiento", "oficial"]

variables:
  accion_tipo: uno_de([["el embargo de bienes", "embargo"], ["el desalojo del inmueble", "lanzamiento"]])

enunciado: "Para hacer cumplir la sentencia que ordena {accion_tipo[0]}, el juez debe librar un mandamiento de {accion_tipo[1]}."

pasos:
  - "Se solicita la ejecución al juez."
  - "El juez libra el mandamiento (orden judicial)."
  - "El oficial de justicia diligencia el mandamiento para cumplir la orden."

respuesta: accion_tipo[1]
tipo: completar
respuestas_validas:
  - "embargo"
  - "lanzamiento"

explicacion: |
  El mandamiento es el instrumento que ordena la ejecución forzada. Si es sobre bienes, es de embargo; si es sobre la posesión de un bien, es de lanzamiento o desalojo.
```

### 8 — El embargo preventivo vs. ejecutivo

```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "avanzado"
  tags: ["embargo", "medidas"]

enunciado: "Si la sentencia ya está firme y el deudor no paga voluntariamente, la medida de embargo que se aplica es de carácter:"

opciones_explicitas: ["preventivo", "ejecutivo", "cautelar"]

respuesta: "ejecutivo"
tipo: mc

explicacion: |
  El embargo preventivo busca asegurar bienes antes de la sentencia; el embargo ejecutivo busca la realización de esos bienes para satisfacer el crédito ya reconocido en una sentencia firme.
```

### 9 — Secuencia del proceso ejecutivo

```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "intermedio"
  tags: ["pasos", "procedimiento"]

opciones_explicitas: ["Librar mandamiento de ejecución", "Traba de embargo sobre bienes", "Subasta pública de los bienes", "Entrega del dinero al acreedor"]
respuesta_orden: ["Librar mandamiento de ejecución", "Traba de embargo sobre bienes", "Subasta pública de los bienes", "Entrega del dinero al acreedor"]
tipo: ordenar

enunciado: "Ordene cronológicamente los pasos del proceso de ejecución de una sentencia que condena al pago de una suma de dinero:"

explicacion: |
  El proceso de ejecución sigue una lógica de: Orden judicial -> Aseguramiento de bienes -> Venta de bienes -> Pago al acreedor.
```

### 10 — La resistencia del deudor

```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "avanzado"
  tags: ["defensas", "excepciones"]

variables:
  defensa: uno_de([["El deudor alega que ya pagó la deuda antes de la sentencia.", "pago"], ["El deudor alega que la sentencia es nula por falta de notificación.", "nulidad"]])

enunciado: "Si el deudor presenta una defensa basada en que {defensa[0]}, se está oponiendo mediante una excepción de {defensa[1]}."

respuesta: defensa[1]
tipo: completar
respuestas_validas:
  - "pago"
  - "nulidad"

explicacion: |
  En la etapa de ejecución, el deudor puede oponer excepciones (defensas) limitadas, como el pago total o parcial, la prescripción o la nulidad del título/procedimiento.
```

### 11 — ¿Cuándo es ejecutable una sentencia?

```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "basico"
  tags: ["procedimiento", "cosa_juzgada"]

respuesta: falso
tipo: vf

enunciado: "¿Una sentencia que aún puede ser apelada (es decir, que no ha quedado firme) puede ser objeto de ejecución forzada para el cumplimiento de la obligación principal?"

explicacion: |
  Para que una sentencia sea ejecutable de forma definitiva, debe haber quedado firme (cosa juzgada). Si bien existen medidas cautelares o ejecuciones provisionales en ciertos casos, la regla general es que la ejecución definitiva requiere que no existan recursos pendientes que puedan modificar el contenido de la decisión.
```

### 12 — El rol del actor en la ejecución

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

### 13 — Requisitos para el embargo

```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "intermedio"
  tags: ["medidas_precautorias", "embargo"]

respuesta: "Título Ejecutivo"
tipo: completar
respuestas_validas:
  - "Título Ejecutivo"
  - "Sentencia Firme"
  - "Mandamiento"

enunciado: "Para que el oficial de justicia pueda proceder al embargo de bienes del deudor, el acreedor debe presentar ante el juzgado el ___."

explicacion: |
  La ejecución requiere un título que sea hábil para permitir el mandamiento de ejecución y embargo. La sentencia firme constituye dicho título ejecutivo.
```

### 14 — Secuencia de la ejecución forzada

```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "avanzado"
  tags: ["procedimiento", "secuencia"]

respuesta_orden: ["Sentencia firme", "Mandamiento de ejecución", "Embargo de bienes", "Subasta judicial"]
tipo: ordenar
opciones_explicitas: ["Sentencia firme", "Mandamiento de ejecución", "Embargo de bienes", "Subasta judicial"]

enunciado: "Ordene cronológicamente las etapas típicas de un proceso de ejecución de sentencia de cumplimiento dinerario:"

explicacion: |
  El proceso comienza con la firmeza de la sentencia, sigue con la orden judicial (mandamiento/intimación), la afectación de bienes (embargo) y finalmente la realización de los bienes para pagar la deuda (subasta).
```

### 15 — Diferencia entre cumplimiento voluntario y forzado

```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "basico"
  tags: ["cumplimiento", "plazos"]

respuesta: "el plazo para el cumplimiento voluntario ha vencido"
tipo: mc
opciones_explicitas: ["el plazo para el cumplimiento voluntario ha vencido", "el demandado ha apelado la sentencia", "la sentencia es nula", "el juez ha dictado una medida cautelar"]

enunciado: "Para que el acreedor pueda instar la ejecución forzada ante el incumplimiento, ¿qué condición debe cumplirse respecto al plazo de cumplimiento voluntario?"

explicacion: |
  La ejecución forzada es la vía subsidiaria que se activa precisamente cuando el plazo otorgado para el cumplimiento espontáneo ha expirado sin que el deudor haya satisfecho la prestación.
```

### 16 — Naturaleza de la sentencia firme

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

### 17 — Diferencia entre cumplimiento voluntario y ejecución forzada

```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "basico"
  tags: ["cumplimiento", "ejecucion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["El deudor paga la deuda por su cuenta antes de que se pida el embargo.", "cumplimiento_voluntario"], ["El acreedor debe pedir al juez que intervenga para obligar al pago mediante embargo.", "ejecucion_forzada"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["cumplimiento_voluntario", "ejecucion_forzada"]

enunciado: "Si el deudor se niega a cumplir la sentencia y el acreedor debe recurrir a la fuerza pública o medidas coercitivas para hacer efectiva su pretensión, estamos ante un caso de: ___"

explicacion: |
  El cumplimiento voluntario ocurre cuando la parte obligada satisface la prestación por su propia voluntad. La ejecución forzada es la respuesta ante la resistencia o el incumplimiento.
```

### 18 — El rol del juez en la ejecución

```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "intermedio"
  tags: ["juez", "jurisdiccion"]

respuesta: "el juez"
tipo: completar
respuestas_validas:
  - "el juez"

enunciado: "A diferencia de la etapa de conocimiento donde el juez decide el derecho, en la etapa de ejecución, ___ es quien debe dirigir las medidas para asegurar el cumplimiento de lo ordenado."

explicacion: |
  Aunque las partes impulsan el proceso, el juez mantiene el control de la legalidad de las medidas de ejecución (como embargos o lanzamientos) para evitar arbitrariedades.
```

### 19 — Requisitos para la ejecución

```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "avanzado"
  tags: ["requisitos", "sentencia"]

respuesta: falso
tipo: vf

enunciado: "¿Es necesario que la sentencia sea líquida (que el monto sea determinado) para poder proceder a un embargo preventivo o ejecutivo de inmediato?"

explicacion: |
  No necesariamente. Si la sentencia es ilíquida, primero debe pasar por una etapa de liquidación para determinar el monto exacto antes de la ejecución forzada del pago.
```

### 20 — Etapas del proceso de ejecución

```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "intermedio"
  tags: ["procedimiento", "etapas"]

respuesta_orden: ["Sentencia firme", "Mandamiento de ejecución", "Embargo", "Remate"]
tipo: ordenar
opciones_explicitas: ["Sentencia firme", "Mandamiento de ejecución", "Embargo", "Remate"]

enunciado: "Ordene cronológicamente las etapas típicas de un proceso de ejecución de sentencia de cumplimiento dinerario:"

explicacion: |
  Primero se requiere la firmeza (cosa juzgada), luego se emite el mandamiento (orden judicial), se procede al embargo de bienes y finalmente el remate para convertir los bienes en dinero.
```

### 21 — La vía de ejecución

```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "intermedio"
  tags: ["proceso_civil", "sentencia_firme"]

variables:
  datos: [["La sentencia ordena el pago de $100.000", "Mandamiento de ejecución"], ["La sentencia ordena el desalojo de un inmueble", "Lanzamiento"], ["La sentencia ordena la entrega de un vehículo", "Secuestro"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Mandamiento de ejecución", "Lanzamiento", "Secuestro", "Embargo preventivo"]

enunciado: "Una vez que la sentencia ha quedado firme y no admite más recursos, el actor debe iniciar la etapa de ejecución. Si el escenario es: {datos[idx][0]}, el acto procesal correspondiente es un: ___."

explicacion: |
  Cuando la sentencia está firme, se pasa de la etapa de conocimiento a la de ejecución. El instrumento que habilita el cumplimiento forzado depende de la naturaleza de la obligación (dar, hacer o no hacer).
```

### 22 — Requisitos de la ejecución

```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "basico"
  tags: ["requisitos", "firmeza"]

variables:
  estados: ["firme", "apelada"]
  valores: [verdadero, falso]
  idx: uno_de([0,1])

respuesta: valores[idx]
tipo: vf
enunciado: "Para que una sentencia pueda ser ejecutada forzadamente, debe haber quedado firme, es decir, que no existan recursos pendientes de resolución. Si la sentencia se encuentra {estados[idx]}, ¿es posible iniciar la ejecución?"

explicacion: |
  La ejecución de una sentencia requiere la certeza del derecho, la cual se obtiene cuando la sentencia queda firme (cosa juzgada), impidiendo que la parte vencida pueda modificar la decisión mediante recursos ordinarios.
```

### 23 — El embargo como medida

```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "intermedio"
  tags: ["embargo", "bienes"]

variables:
  datos: [["Deuda de dinero", "embargo"], ["Restitución de un bien mueble", "secuestro"], ["Obligación de hacer", "apercibimiento"]]
  idx: uno_de([0,1,2])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar

enunciado: "En el proceso de ejecución, si el objeto de la sentencia es el cumplimiento de una obligación de dar sumas de dinero y el deudor no paga voluntariamente, el acreedor puede solicitar un: ___."

explicacion: |
  El embargo es la medida cautelar ejecutiva que recae sobre bienes del deudor para asegurar el cumplimiento de una sentencia de pago de dinero.
```

### 24 — Etapas del proceso de ejecución

```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "avanzado"
  tags: ["secuencia", "procedimiento"]

tipo: ordenar
opciones_explicitas: ["Sentencia firme", "Mandamiento/Citación de ejecución", "Embargo", "Remate/Subasta"]
respuesta_orden: ["Sentencia firme", "Mandamiento/Citación de ejecución", "Embargo", "Remate/Subasta"]

enunciado: "Ordene cronológicamente las etapas necesarias para el cumplimiento forzado de una obligación de dar dinero:"

explicacion: |
  Primero se requiere la firmeza de la sentencia, luego se intima al cumplimiento mediante un mandamiento, se traban medidas sobre bienes (embargo) y finalmente se procede a la venta judicial (remate) para cobrar el crédito.
```

### 25 — El rol del Juez en la ejecución

```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "basico"
  tags: ["autoridad_judicial"]

respuesta: verdadero
tipo: vf
enunciado: "En la etapa de ejecución, el cumplimiento de la sentencia no es una facultad discrecional del acreedor, sino que requiere la intervención del órgano jurisdiccional para el uso de la fuerza pública si fuera necesario. ¿Es esto correcto?"

explicacion: |
  La ejecución es una actividad de imperio. Si el obligado no cumple voluntariamente, el Estado, a través del juez, debe intervenir para asegurar el cumplimiento de la decisión judicial.
```
