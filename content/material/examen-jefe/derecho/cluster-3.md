# Examen jefe — Maestro del Derecho Penal

> Logro #204. Completaste el examen sobre fuentes, hechos y ejecución de la sentencia jefe. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **128 preguntas totales** en 5/5 secciones.

---

## Sección: derecho-penal (25 preguntas)

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["definicion", "estado"]

respuesta: verdadero
tipo: vf

enunciado: "El Derecho Penal es la rama del derecho que regula la potestad punitiva del Estado, definiendo los delitos y las penas aplicables a quienes los cometen."

explicacion: |
  Correcto. El Derecho Penal establece el marco normativo para la imposición de sanciones por conductas que la sociedad considera delitos.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["terminologia", "delito"]

variables:
  escenario: uno_de([
    ["cometer un acto prohibido por la ley con intención de causar daño", "doloso"],
    ["cometer un acto prohibido por la ley sin intención pero con negligencia", "culposo"]
  ])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["doloso", "culposo", "imprudente", "accidental"]

enunciado: "Si una persona actúa con la intención de producir un resultado típico y antijurídico, se dice que su conducta es de carácter: ___"

pasos:
  - "Identificar la intención (ánimo) del sujeto."
  - "Relacionar la intención con la clasificación del tipo de delito."

explicacion: |
  La conducta es {escenario[0]}. En derecho penal, cuando hay intención, el delito es {escenario[1]}.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["pena", "finalidad"]

respuesta: "prevención y retribución"
tipo: completar
respuestas_validas: ["prevención y retribución", "castigo puro", "rehabilitación social", "represión"]

enunciado: "Tradicionalmente, la pena tiene como fines principales la ___."

explicacion: |
  La pena busca prevenir nuevos delitos (prevención) y castigar la infracción cometida (retribución).
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["principios", "legalidad"]

respuesta: verdadero
tipo: vf

enunciado: "El principio de legalidad establece que nadie puede ser condenado por una acción u omisión que no esté previamente establecida como delito por una ley escrita."

explicacion: |
  Es el principio fundamental 'nullum crimen, nulla poena sine lege'.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["procedimiento", "etapas"]

respuesta: ["Investigación", "Juicio", "Sentencia", "Ejecución"]
tipo: ordenar
opciones_explicitas: ["Investigación", "Juicio", "Sentencia", "Ejecución"]

enunciado: "Ordene cronológicamente las etapas fundamentales de un proceso penal estándar:"

explicacion: |
  El proceso inicia con la investigación de los hechos, sigue con el juicio oral para valorar pruebas, se dicta la sentencia y finaliza con la ejecución de la pena.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["definicion", "estado"]

respuesta: verdadero
tipo: vf

enunciado: "En el derecho penal, el Estado es el único encargado de regular la relación entre el sujeto que comete un delito y la sanción impuesta, ejerciendo el ius puniendi."

explicacion: |
  El derecho penal es una rama del derecho público que regula la potestad punitiva del Estado (ius puniendi) para sancionar conductas que lesionan bienes jurídicos protegidos.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["conducta", "tipicidad"]

variables:
  escenario: uno_de([
    ["Juan decide robar un banco pero es detenido antes de tocar el dinero", "tentativa"],
    ["María entra a una tienda y toma un objeto sin pagar", "consumado"]
  ])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["tentativa", "consumado", "imputable", "exento"]

enunciado: "Analice el siguiente caso: {escenario[0]}. Según la doctrina penal, la conducta de Juan se clasifica como: ___"

pasos:
  - "Identificar si la acción llegó a completar el tipo penal."
  - "Determinar si hubo ejecución del acto ilícito."

explicacion: |
  En el primer caso ({escenario[0]}), al no haberse completado el resultado típico, estamos ante una tentativa. En el segundo, el delito se considera consumado.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["teoria_del_delito"]

variables:
  caso_idx: uno_de([0, 1])
  datos: [
    ["Un sujeto actúa bajo un error de prohibición invencible", "no_culpable"],
    ["Un sujeto actúa con dolo directo para causar daño", "culpable"]
  ]

respuesta: datos[caso_idx][1
tipo: completar
respuestas_validas: ["no_culpable", "culpable"]

enunciado: "Considerando el escenario: {datos[caso_idx][0]}. El resultado de la imputación penal para este sujeto es: ___"

explicacion: |
  La culpabilidad requiere que el sujeto sea capaz de comprender la ilicitud de su acción. Si el error es invencible, se excluye la culpabilidad.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "avanzado"
  tags: ["proceso", "pena"]

respuesta: ["Tipicidad", "Antijuridicidad", "Culpabilidad", "Punibilidad"]
tipo: ordenar
opciones_explicitas: ["Tipicidad", "Antijuridicidad", "Culpabilidad", "Punibilidad"]

enunciado: "Para que una conducta sea considerada delito y se le aplique una pena, debe cumplir con la teoría estratificada del delito. Ordene los elementos en el orden lógico de análisis (de la conducta al castigo):"

pasos:
  - "Primero se verifica si la conducta está en la ley."
  - "Segundo, si la conducta es contraria al derecho."
  - "Tercero, si el autor es reprochable."
  - "Finalmente, si la conducta merece una sanción."

explicacion: |
  El análisis parte de la tipicidad (encuadre legal), sigue con la antijuridicidad (contrariedad al ordenamiento), la culpabilidad (reprochabilidad) y culmina en la punibilidad (posibilidad de imponer la pena).
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["bien_juridico"]

variables:
  delito_tipo: uno_de([
    ["Homicidio", "la vida"],
    ["Hurto", "la propiedad"]
  ])

respuesta: delito_tipo[1
tipo: mc
opciones_explicitas: ["la vida", "la propiedad", "la libertad", "la integridad física"]

enunciado: "Si se comete un delito de {delito_tipo[0]}, el bien jurídico que el Estado busca proteger mediante la pena es: ___"

explicacion: |
  Cada delito protege un valor fundamental llamado bien jurídico. En el caso del {delito_tipo[0]}, el bien es {delito_tipo[1]}.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["distincion", "civil_vs_penal"]

respuesta: "reparar el daño"
tipo: "completar"
respuestas_validas: ["reparar el daño", "reparación del daño", "reparación"]

enunciado: "Mientras que el Derecho Civil busca principalmente ___ causado por un incumplimiento contractual o un ilícito civil, el Derecho Penal busca sancionar una conducta que atenta contra la sociedad."

explicacion: |
  El Derecho Civil tiene un fin resarcitorio (reparar el daño patrimonial o moral), mientras que el Derecho Penal tiene un fin punitivo y de prevención social.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["estado", "sujeto_activo"]

variables:
  escenario: uno_de([["robo", "un individuo"], ["homicidio", "una persona"]])

respuesta: verdadero
tipo: "vf"

enunciado: "En el marco del Derecho Penal, cuando se comete un {escenario[1]}, es el Estado quien ejerce el 'ius puniendi' para imponer la sanción, independientemente de la voluntad de la víctima."

explicacion: |
  El Estado tiene el monopolio del ejercicio de la fuerza y la potestad de sancionar (ius puniendi) para mantener el orden social.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["teoria_del_delito", "elementos"]

respuesta: "el elemento subjetivo"
tipo: "mc"
opciones_explicitas: ["el elemento subjetivo", "el elemento material", "el elemento procesal", "el elemento administrativo"]

enunciado: "Para que una conducta sea considerada delito, no basta con la acción física (tipicidad objetiva); también es fundamental determinar ___ (dolo o culpa), que define la intención del agente."

explicacion: |
  La distinción entre dolo (intención) y culpa (negligencia) es crucial para la aplicación de la pena en el Derecho Penal.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["proceso_penal", "orden"]

respuesta: ["investigación", "imputación", "juicio", "sentencia"]
tipo: "ordenar"
opciones_explicitas: ["investigación", "imputación", "juicio", "sentencia"]

enunciado: "Ordene cronológicamente las etapas fundamentales de un proceso penal típico:"

explicacion: |
  El proceso penal sigue una secuencia lógica que va desde la recolección de evidencia hasta la decisión final del juez.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["penas", "sanciones"]

variables:
  tipo_sancion: uno_de([["multa", "económica"], ["prisión", "privativa de la libertad"]])

respuesta: "privativa de la libertad"
tipo: "mc"
opciones_explicitas: ["económica", "privativa de la libertad", "administrativa", "reparatoria"]

enunciado: "Si el delito cometido es un crimen grave, la sanción principal que busca la prevención especial es la pena {tipo_sancion[0]}, la cual es de naturaleza ___."

explicacion: |
  La pena privativa de la libertad es la sanción característica y más severa del Derecho Penal, diferenciándose de las multas administrativas o civiles.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["comparacion", "derecho_civil"]

respuesta: "sanción"
tipo: completar
respuestas_validas: ["sanción", "pena"]

enunciado: "Mientras que el Derecho Civil busca la reparación del daño mediante la indemnización, el Derecho Penal busca la imposición de una ___ al infractor."

explicacion: |
  El Derecho Civil tiene un fin resarcitorio (reparar el daño), mientras que el Derecho Penal tiene un fin punitivo (aplicar una pena).
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["naturaleza", "derecho_civil"]

variables:
  es_penal: falso

respuesta: es_penal
tipo: completar
enunciado: "A diferencia del Derecho Civil, donde el incumplimiento de una obligación suele derivar en una indemnización, en el Derecho Penal el incumplimiento de una norma puede derivar en la privación de la libertad."

explicacion: |
  Correcto. La privación de la libertad es una sanción propia del ámbito penal y no existe en el ámbito civil.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["comparacion", "derecho_administrativo"]

variables:
  escenario: uno_de([0, 1])

respuesta: datos[escenario][1
tipo: mc
opciones_explicitas: ["Sanción administrativa", "Pena privativa de la libertad", "Indemnización de daños y perjuicios", "Sanción disciplinaria interna"]

enunciado: "Si un conductor excede los límites de velocidad, recibe una multa (Derecho Administrativo). Si un conductor causa un accidente por conducir en estado de ebriedad, puede recibir una ___ (Derecho Penal)."

datos:
  - ["Sanción administrativa", "Sanción administrativa"]
  - ["Pena privativa de la libertad", "Pena privativa de la libertad"]

explicacion: |
  El Derecho Penal regula conductas que afectan bienes jurídicos fundamentales y aplica penas, a diferencia del administrativo que aplica sanciones de carácter reglamentario.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["principios", "legalidad"]

respuesta: ["Principio de legalidad", "Principio de culpabilidad", "Principio de lesividad"]
tipo: ordenar

opciones_explicitas: ["Principio de legalidad", "Principio de culpabilidad", "Principio de lesividad"]

enunciado: "Ordene los principios fundamentales del Derecho Penal que lo distinguen de otras ramas (como el Derecho Civil) para asegurar que no haya arbitrariedad estatal:"

pasos:
  - "Primero: No hay delito sin ley previa (Nullum crimen sine lege)."
  - "Segundo: Solo se puede reprochar la conducta al autor si hubo voluntad o negligencia (Culpabilidad)."
  - "Tercero: Debe existir una lesión o puesta en peligro de un bien jurídico (Lesividad)."

explicacion: |
  El orden lógico-sistemático para la aplicación de la ley penal requiere la existencia de una norma previa, la responsabilidad del autor y la afectación de un bien jurídico.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "avanzado"
  tags: ["sujeto", "estado"]

variables:
  caso: uno_de([0, 1])

respuesta: datos[caso][1
tipo: mc
opciones_explicitas: ["Un particular contra otro particular", "El Estado contra un particular", "Un Estado contra otro Estado", "Un particular contra una empresa"]

datos:
  - ["Conflicto Civil", "Un particular contra otro particular"]
  - ["Conflicto Penal", "El Estado contra un particular"]

enunciado: "En el Derecho Civil, el conflicto es típicamente entre particulares. En el Derecho Penal, el conflicto se caracteriza porque el sujeto activo es ___."

explicacion: |
  En el Derecho Penal, el Estado interviene como el sujeto que ejerce el 'ius puniendi' (derecho a castigar) frente al infractor.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["principios", "legalidad"]

variables:
  datos: [["Juan comete una acción que no está tipificada en el código penal", "falso"], ["Juan comete una acción que está tipificada en el código penal", "verdadero"]]
  idx: uno_de([0, 1])

respuestas_validas: [datos[idx][1]]
respuesta: datos[idx][1]
tipo: completar
enunciado: "De acuerdo al principio de legalidad, si {datos[idx][0]}, ¿es posible que el Estado imponga una pena a Juan?"

explicacion: |
  El principio de legalidad establece que no hay delito ni pena sin ley previa (*nullum crimen, nulla poena sine lege*). Si la conducta no está tipificada, no puede haber sanción.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["tipicidad", "escenario"]

variables:
  datos: [["Pedro toma un objeto ajeno con ánimo de lucro", "hurto"], ["Pedro rompe una ventana para entrar a una casa", "daño"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc

opciones_explicitas: ["hurto", "daño", "estafa", "robo"]

enunciado: "Analizando el comportamiento de Pedro: {datos[idx][0]}. ¿Cuál es la conducta principal descrita?"

explicacion: |
  El tipo penal se ajusta a la descripción de la conducta realizada por el sujeto.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["penas", "sanciones"]

variables:
  datos: [["privación de la libertad", "corporal"], ["multa económica", "pecuniaria"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar

respuestas_validas: ["corporal", "pecuniaria"]

enunciado: "Las penas se clasifican según su naturaleza. Si se impone una {datos[idx][0]}, la naturaleza de la sanción es ___________."

explicacion: |
  Las penas pueden ser privativas de la libertad (corporales) o multas (pecuniarias).
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "avanzado"
  tags: ["iter_criminis", "ordenar"]

respuesta: ["ideación", "preparación", "ejecución", "consumación"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas del 'iter criminis' (camino del delito) desde la concepción de la idea hasta la culminación del acto."

explicacion: |
  El iter criminis comprende la fase interna (ideación), la fase externa (preparación, ejecución) y la consumación.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["imputabilidad", "responsabilidad"]

variables:
  datos: [["Un menor de edad con plena capacidad de comprensión", "no es imputable"], ["Un adulto con plena capacidad de comprensión", "es imputable"]]
  idx: uno_de([0, 1])

respuestas_validas: [datos[idx][1]]
respuesta: datos[idx][1]
tipo: completar
enunciado: "Considerando el caso de {datos[idx][0]}, ¿se le puede atribuir responsabilidad penal bajo el concepto de imputabilidad?"

explicacion: |
  La imputabilidad es la capacidad de comprender la ilicitud del hecho. Si el sujeto carece de ella (como en menores según la legislación), no hay responsabilidad penal en el sentido estricto.
```

## Sección: ejecucion-de-la-sentencia (25 preguntas)

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

```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "basico"
  tags: ["ejecucion", "mandamiento"]

variables:
  escenario: uno_de([["el demandado no paga", "el mandamiento de ejecución"], ["el demandado no entrega la cosa", "el mandamiento de entrega"]])

respuesta: escenario[0][1
tipo: mc
opciones_explicitas: ["el mandamiento de ejecución", "la notificación de la sentencia", "el recurso de apelación", "la demanda inicial"]

enunciado: "Si la sentencia ordena el pago de una suma de dinero y el demandado no lo hace, el actor debe solicitar el ___ para iniciar la vía de apremio."

explicacion: |
  El mandamiento de ejecución es la orden judicial que ordena cumplir lo decidido bajo apercibimiento de ejecución forzada.
```

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

```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "intermedio"
  tags: ["procedimiento", "firmeza"]

variables:
  caso_idx: uno_de([0, 1])
  escenario: uno_de([
    ["La sentencia de alimentos fue dictada pero el demandado apeló y la cámara confirmó la resolución.", "firme"],
    ["El juez dictó sentencia, pero el plazo para interponer recursos venció sin que ninguna parte se presentara.", "firme"]
  ])

enunciado: "En el escenario descrito, la sentencia se considera {escenario[1]}."

respuesta: escenario[1
tipo: completar
explicacion: |
  Una sentencia queda firme cuando ya no es susceptible de ser impugnada, ya sea porque se agotaron las instancias o porque los plazos para recurrir han vencido.
```

```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "intermedio"
  tags: ["mandamiento", "oficial"]

variables:
  accion_tipo: uno_de([
    ["el embargo de bienes", "embargo"],
    ["el desalojo del inmueble", "lanzamiento"]
  ])

enunciado: "Para hacer cumplir la sentencia que ordena {accion_tipo[0]}, el juez debe librar un mandamiento de {accion_tipo[1]}."

pasos:
  - "Se solicita la ejecución al juez."
  - "El juez libra el mandamiento (orden judicial)."
  - "El oficial de justicia diligencia el mandamiento para cumplir la orden."

respuesta: "embargo"
tipo: completar
respuestas_validas: ["embargo", "lanzamiento"]

explicacion: |
  El mandamiento es el instrumento que ordena la ejecución forzada. Si es sobre bienes, es de embargo; si es sobre la posesión de un bien, es de lanzamiento o desalojo.
```

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

```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "intermedio"
  tags: ["pasos", "procedimiento"]

opciones_explicitas: [
    "Librar mandamiento de ejecución",
    "Traba de embargo sobre bienes",
    "Subasta pública de los bienes",
    "Entrega del dinero al acreedor"
]

respuesta: [
    "Librar mandamiento de ejecución",
    "Traba de embargo sobre bienes",
    "Subasta pública de los bienes",
    "Entrega del dinero al acreedor"
]
tipo: ordenar

explicacion: |
  El proceso de ejecución sigue una lógica de: Orden judicial -> Aseguramiento de bienes -> Venta de bienes -> Pago al acreedor.
```

```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "avanzado"
  tags: ["defensas", "excepciones"]

variables:
  defensa: uno_de([
    ["El deudor alega que ya pagó la deuda antes de la sentencia.", "pago"],
    ["El deudor alega que la sentencia es nula por falta de notificación.", "nulidad"]
  ])

enunciado: "Si el deudor presenta una defensa basada en que {defensa[0]}, se está oponiendo mediante una excepción de {defensa[1]}."

respuesta: "pago"
tipo: completar
respuestas_validas: ["pago", "nulidad"]

explicacion: |
  En la etapa de ejecución, el deudor puede oponer excepciones (defensas) limitadas, como el pago total o parcial, la prescripción o la nulidad del título/procedimiento.
```

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

```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "intermedio"
  tags: ["sujeto", "impulso_procesal"]

variables:
  escenario: uno_de([["El actor debe solicitar la ejecución", "El juez debe actuar de oficio"], ["El demandado debe pedir el cumplimiento", "El secretario debe iniciar el embargo"]])

respuesta: escenario[0
tipo: mc
opciones_explicitas: ["El actor debe solicitar la ejecución", "El juez debe actuar de oficio", "El demandado debe pedir el cumplimiento", "El secretario debe iniciar el embargo"]

enunciado: "Una vez que la sentencia ha quedado firme, ¿cuál es la carga procesal respecto al inicio de la fase de ejecución?"

explicacion: |
  En el derecho procesal civil, rige el principio dispositivo. El juez no inicia la ejecución de la sentencia de oficio; es el actor (el vencedor) quien debe promover la ejecución para que se haga cumplir lo juzgado.
```

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

```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "basico"
  tags: ["cumplimiento", "plazos"]

variables:
  caso: uno_de([["el plazo para el cumplimiento voluntario ha vencido", "el demandado ha apelado la sentencia"]])

respuesta: caso[0
tipo: mc
opciones_explicitas: ["el plazo para el cumplimiento voluntario ha vencido", "el demandado ha apelado la sentencia", "la sentencia es nula", "el juez ha dictado una medida cautelar"]

enunciado: "Para que el acreedor pueda instar la ejecución forzada ante el incumplimiento, ¿qué condición debe cumplirse respecto al plazo de cumplimiento voluntario en {caso}?"

explicacion: |
  La ejecución forzada es la vía subsidiaria que se activa precisamente cuando el plazo otorgado para el cumplimiento espontáneo ha expirado sin que el deudor haya satisfecho la prestación.
```

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

respuesta: escenarios[escenario_idx][1
tipo: mc
opciones_explicitas: ["cumplimiento_voluntario", "ejecucion_forzada"]

enunciado: "Si el deudor se niega a cumplir la sentencia y el acreedor debe recurrir a la fuerza pública o medidas coercitivas para hacer efectiva su pretensión, estamos ante un caso de: ___"

explicacion: |
  El cumplimiento voluntario ocurre cuando la parte obligada satisface la prestación por su propia voluntad. La ejecución forzada es la respuesta ante la resistencia o el incumplimiento.
```

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

```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "basico"
  tags: ["requisitos", "firmeza"]

variables:
  datos: [["firme", verdadero], ["apelada", falso]]
  idx: uno_de([0,1])

respuestas_validas: [datos[idx][1]]
respuesta: datos[idx][1]
tipo: completar
enunciado: "Para que una sentencia pueda ser ejecutada forzadamente, debe haber quedado firme, es decir, que no existan recursos pendientes de resolución. Si la sentencia se encuentra {datos[idx][0]}, ¿es posible iniciar la ejecución? ___"

explicacion: |
  La ejecución de una sentencia requiere la certeza del derecho, la cual se obtiene cuando la sentencia queda firme (cosa juzgada), impidiendo que la parte vencida pueda modificar la decisión mediante recursos ordinarios.
```

```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "intermedio"
  tags: ["embargo", "bienes"]

variables:
  datos: [["Deuda de dinero", "embargo"], ["Restitución de un bien mueble", "secuestro"], ["Obligación de hacer", "apercibimiento"]]
  idx: uno_de([0,1,2])

respuestas_validas: [datos[idx][1]]
respuesta: datos[idx][1]
tipo: completar
opciones_validas: ["embargo", "secuestro", "apercibimiento"]

enunciado: "En el proceso de ejecución, si el objeto de la sentencia es el cumplimiento de una obligación de dar sumas de dinero y el deudor no paga voluntariamente, el acreedor puede solicitar un: ___."

explicacion: |
  El embargo es la medida cautelar ejecutiva que recae sobre bienes del deudor para asegurar el cumplimiento de una sentencia de pago de dinero.
```

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

```
metadata:
  materia: "derecho"
  tema: "ejecucion_de_la_sentencia"
  nivel: "basico"
  tags: ["autoridad_judicial"]

variables:
  datos: [["El acreedor actúa por su cuenta", "falso"], ["El juez ordena el cumplimiento", "verdadero"]]
  idx: uno_de([0,1])

respuestas_validas: [datos[idx][1]]
respuesta: datos[idx][1]
tipo: completar
enunciado: "En la etapa de ejecución, el cumplimiento de la sentencia no es una facultad discrecional del acreedor, sino que requiere la intervención del órgano jurisdiccional para el uso de la fuerza pública si fuera necesario. ¿Es esto correcto? ___"

explicacion: |
  La ejecución es una actividad de imperio. Si el obligado no cumple voluntariamente, el Estado, a través del juez, debe intervenir para asegurar el cumplimiento de la decisión judicial.
```

## Sección: fuentes-del-derecho (28 preguntas)

```
metadata:
  materia: "derecho"
  tema: "fuentes_del_derecho"
  nivel: "basico"
  tags: ["definicion", "concepto_basico"]

variables:
  definicion_correcta: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "Las fuentes del derecho son únicamente las leyes escritas publicadas en el Boletín Oficial."

explicacion: |
  Falso. Las fuentes del derecho incluyen no solo la ley escrita, sino también la costumbre, la jurisprudencia, los principios generales del derecho y la doctrina, entre otros.
```

```
metadata:
  materia: "derecho"
  tema: "fuentes_del_derecho"
  nivel: "intermedio"
  tags: ["jurisprudencia", "definicion"]

variables:
  definicion_jurisprudencia: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "La jurisprudencia es el conjunto de decisiones reiteradas que emiten los jueces sobre un mismo tipo de caso."

explicacion: |
  Verdadero. La jurisprudencia surge de la interpretación constante de la ley por parte de los tribunales, generando criterios uniformes.
```

```
metadata:
  materia: "derecho"
  tema: "fuentes_del_derecho"
  nivel: "intermedio"
  tags: ["jerarquia", "ley_nacional"]

variables:
  jerarquia_correcta: "falso"

respuesta: falso
tipo: vf

enunciado: "Una ley provincial puede contradecir a una ley nacional si así lo decide la legislatura provincial."

explicacion: |
  Falso. Las leyes nacionales tienen jerarquía superior a las provinciales en materias de competencia nacional, y ninguna ley puede violar la Constitución.
```

```
metadata:
  materia: "derecho"
  tema: "fuentes_del_derecho"
  nivel: "avanzado"
  tags: ["jurisprudencia", "fuente_formal"]

variables:
  es_fuente_formal: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "En el sistema jurídico argentino, la jurisprudencia es considerada una fuente formal del derecho."

explicacion: |
  Verdadero. Aunque la ley es la fuente principal, la jurisprudencia tiene un papel fundamental como fuente interpretativa y complementaria, especialmente en sistemas de derecho civil.
```

```
metadata:
  materia: "derecho"
  tema: "fuentes_del_derecho"
  nivel: "basico"
  tags: ["jerarquia", "constitucion_vs_ley"]

variables:
  jerarquia_correcta: "falso"

respuesta: falso
tipo: vf

enunciado: "Una ley nacional puede violar lo establecido en la Constitución si es aprobada por mayoría absoluta."

explicacion: |
  Falso. Ninguna ley, sin importar su origen o mayoría, puede violar lo establecido en la Constitución, que es la norma suprema.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "basico"
  tags: ["definicion", "concepto_basico"]

variables:
  concepto: "fuentes_del_derecho"

respuesta: "mecanismos"
tipo: completar

enunciado: "Las fuentes del derecho son los {concepto} a través de los cuales se crean, modifican o extinguen las normas jurídicas."

explicacion: |
  Las fuentes del derecho se definen como los mecanismos u orígenes que generan la fuerza obligatoria de las normas.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "basico"
  tags: ["legislativo", "creacion_normas"]

variables:
  organo: "Congreso"

respuesta: "legislativo"
tipo: completar

enunciado: "La ley es dictada por el órgano {organo} competente, como el Congreso de la Nación en Argentina."

explicacion: |
  El Poder Legislativo es el encargado de dictar las leyes nacionales.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "intermedio"
  tags: ["promulgacion", "ejecutivo"]

variables:
  poder: "Poder_Ejecutivo"

respuesta: "promulgada"
tipo: completar

enunciado: "Una vez dictada, la ley debe ser {poder} por el Poder Ejecutivo para tener validez."

explicacion: |
  La promulgación es el acto por el cual el Ejecutivo da fe de la existencia de la ley y ordena su cumplimiento.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "basico"
  tags: ["publicacion", "boletin_oficial"]

variables:
  medio: "Boletin_Oficial"

respuesta: "publicada"
tipo: completar

enunciado: "Para ofrecer certeza, la ley escrita debe estar {medio} en el Boletín Oficial."

explicacion: |
  La publicación en el Boletín Oficial es el requisito de conocimiento formal para la vigencia de la norma.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "intermedio"
  tags: ["costumbre", "derecho_comercial"]

variables:
  area: "comercial"

respuesta: "usos"
tipo: completar

enunciado: "En el derecho {area}, los usos y costumbres de los comerciantes llenan vacíos legales."

explicacion: |
  La costumbre es vital en el derecho comercial para suplir la falta de normas escritas específicas.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "intermedio"
  tags: ["costumbre", "definicion"]

variables:
  requisito: "reiterada"

respuesta: "practica"
tipo: completar

enunciado: "La costumbre es la {requisito} práctica de un comportamiento aceptado como obligatoria."

explicacion: |
  No basta con un acto aislado; debe haber una repetición constante y la convicción de obligatoriedad.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "intermedio"
  tags: ["jurisprudencia", "jueces"]

variables:
  actor: "jueces"

respuesta: "decisiones"
tipo: completar

enunciado: "La jurisprudencia es el conjunto de {actor} reiteradas que emiten los jueces."

explicacion: |
  La jurisprudencia surge de la interpretación uniforme de los tribunales sobre casos concretos.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "basico"
  tags: ["seguridad_juridica", "importancia"]

variables:
  objetivo: "claras"

respuesta: "accesibles"
tipo: completar

enunciado: "Las fuentes garantizan la seguridad jurídica: reglas {objetivo}, accesibles y conocidas."

explicacion: |
  La seguridad jurídica implica que los ciudadanos puedan prever las consecuencias de sus actos.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "intermedio"
  tags: ["legalidad", "castigo"]

variables:
  condicion: "previa"

respuesta: "norma"
tipo: completar

enunciado: "En un Estado de derecho, nadie puede ser castigado sin una {condicion} norma que lo establezca."

explicacion: |
  Este es el principio de legalidad: no hay pena sin ley previa.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "intermedio"
  tags: ["jerarquia", "conflictos"]

variables:
  nivel: "inferior"

respuesta: "contradecir"
tipo: completar

enunciado: "Una ley provincial no puede {nivel} a una ley nacional en su contenido esencial."

explicacion: |
  La jerarquía normativa establece que las leyes nacionales prevalecen sobre las provinciales en materias de competencia nacional.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "avanzado"
  tags: ["costumbre", "evolucion"]

variables:
  tendencia: "disminuido"

respuesta: "peso"
tipo: completar

enunciado: "En el derecho moderno, el {tendencia} de la costumbre ha disminuido frente a la ley escrita."

explicacion: |
  Aunque sigue existiendo, su relevancia es menor comparada con la certeza de la ley escrita.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "intermedio"
  tags: ["jurisprudencia", "origen"]

variables:
  fuente: "jueces"

respuesta: "reiteradas"
tipo: completar

enunciado: "No basta con una decisión aislada; deben ser decisiones {fuente} para formar jurisprudencia."

explicacion: |
  La reiteración es clave para que una línea jurisprudencial sea considerada fuente de derecho.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "basico"
  tags: ["importancia", "interpretacion"]

variables:
  razon: "dudas"

respuesta: "interpretarlas"
tipo: completar

enunciado: "Estudiar las fuentes permite saber qué reglas seguir y cómo {razon} cuando hay dudas."

explicacion: |
  El conocimiento de las fuentes facilita la resolución de conflictos mediante la interpretación correcta.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "basico"
  tags: ["consecuencias", "arbitrariedad"]

variables:
  resultado: "caos"

respuesta: "arbitrariedad"
tipo: completar

enunciado: "Sin fuentes, habría {resultado} y {resultado}, ya que cada uno decidiría según su criterio."

explicacion: |
  La ausencia de fuentes objetivas lleva a la subjetividad y la injusticia.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "basico"
  tags: ["ley", "visibilidad"]

variables:
  caracter: "predominante"

respuesta: "visible"
tipo: completar

enunciado: "La ley es la fuente más {caracter} y visible en nuestro sistema jurídico."

explicacion: |
  La ley es la fuente principal porque es escrita, pública y fácil de identificar.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "avanzado"
  tags: ["costumbre", "internacional"]

variables:
  ambito: "internacional"

respuesta: "costumbre"
tipo: completar

enunciado: "En el derecho {ambito}, las costumbres de las naciones son una fuente vital."

explicacion: |
  El derecho internacional público se basa mucho en la práctica estatal constante (costumbre).
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "intermedio"
  tags: ["jerarquia", "local"]

variables:
  nivel: "inferior"

respuesta: "municipales"
tipo: completar

enunciado: "Las leyes {nivel} incluyen las provinciales y las municipales."

explicacion: |
  Las normas locales tienen menor jerarquía que las nacionales y la Constitución.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "basico"
  tags: ["ley", "certeza"]

variables:
  ventaja: "certeza"

respuesta: "preferente"
tipo: completar

enunciado: "La ley escrita es {ventaja} porque ofrece certeza y accesibilidad."

explicacion: |
  La preferencia de la ley escrita radica en su capacidad de proporcionar seguridad jurídica.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "basico"
  tags: ["clasificacion", "tipos"]

variables:
  correcta: "ley"
  distractores: ["sentimiento", "voluntad", "suerte"]

respuesta: "ley"
tipo: mc

enunciado: "¿Cuál de las siguientes es una fuente formal del derecho argentino?"
opciones_explicitas: ["ley", "sentimiento", "voluntad", "suerte"]

explicacion: |
  La ley es una fuente formal. El sentimiento o la suerte no son fuentes jurídicas.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "intermedio"
  tags: ["jurisprudencia", "origen"]

variables:
  correcta: "jueces"
  distractores: ["abogados", "legisladores", "policia"]

respuesta: "jueces"
tipo: mc

enunciado: "¿Quiénes emiten las decisiones que forman la jurisprudencia?"
opciones_explicitas: ["jueces", "abogados", "legisladores", "policia"]

explicacion: |
  La jurisprudencia proviene de las decisiones reiteradas de los jueces.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "intermedio"
  tags: ["costumbre", "comercio"]

variables:
  correcta: "usos"
  distractores: ["leyes", "constituciones", "reglamentos"]

respuesta: "usos"
tipo: mc

enunciado: "¿Qué llenan los vacíos legales en el derecho comercial?"
opciones_explicitas: ["usos", "leyes", "constituciones", "reglamentos"]

explicacion: |
  Los usos y costumbres comerciales son fundamentales para suplir lagunas legales.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "basico"
  tags: ["promulgacion", "poderes"]

variables:
  correcta: "Ejecutivo"
  distractores: ["Judicial", "Legislativo", "Administrativo"]

respuesta: "Ejecutivo"
tipo: mc

enunciado: "¿Por quién es promulgada la ley?"
opciones_explicitas: ["Ejecutivo", "Judicial", "Legislativo", "Administrativo"]

explicacion: |
  El Poder Ejecutivo promulga las leyes dictadas por el Legislativo.
```

```
metadata:
  materia: "Derecho"
  tema: "fuentes_del_derecho"
  nivel: "basico"
  tags: ["publicacion", "medio"]

variables:
  correcta: "Boletin_Oficial"
  distractores: ["Diario_Nacional", "Revista_Juridica", "Gaceta_Provincial"]

respuesta: "Boletin_Oficial"
tipo: mc

enunciado: "¿Dónde se publica la ley para ofrecer certeza?"
opciones_explicitas: ["Boletin_Oficial", "Diario_Nacional", "Revista_Juridica", "Gaceta_Provincial"]

explicacion: |
  El Boletín Oficial es el medio oficial de publicación de normas en Argentina.
```

## Sección: hecho-juridicamente-relevante (25 preguntas)

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["conceptos_basicos", "teoria_del_derecho"]

respuesta: "hecho jurídicamente relevante"
tipo: completar
respuestas_validas: ["hecho jurídicamente relevante"]

enunciado: "Aquel suceso de la naturaleza o del mundo material que, al producirse, tiene la capacidad de producir consecuencias jurídicas se denomina ___."

explicacion: |
  Un hecho es jurídicamente relevante cuando el ordenamiento jurídico le atribuye efectos, como la creación, modificación o extinción de derechos y obligaciones.
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["clasificacion", "hechos_juridicos"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [[["un rayo que incendia un bosque", "un accidente de tránsito"], ["un nacimiento", "una muerte"]]]

respuesta: uno_de(["hecho puro", "acto jurídico"])
tipo: mc
opciones_explicitas: ["hecho puro", "acto jurídico"]

enunciado: "Analice el siguiente caso: {escenarios[caso_idx][0][0]}. Si este suceso ocurre sin la intervención de la voluntad humana con el fin de producir efectos legales, estamos ante un ___."

explicacion: |
  El hecho puro es aquel suceso de la naturaleza que no es producto de la voluntad humana, pero que aun así tiene relevancia para el derecho (ej: un desastre natural).
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["elementos", "norma"]

respuesta: verdadero
tipo: vf

enunciado: "Para que un hecho sea considerado jurídicamente relevante, debe existir una norma jurídica previa que le asigne consecuencias legales."

explicacion: |
  La relevancia jurídica no es una propiedad intrínseca del hecho, sino una atribución de la norma. Si la norma no prevé consecuencias para ese hecho, este es irrelevante para el derecho.
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["proceso", "logica_juridica"]

respuesta: ["suceso fáctico", "subsunción", "consecuencia jurídica"]
tipo: ordenar
opciones_explicitas: ["suceso fáctico", "subsunción", "consecuencia jurídica"]

enunciado: "Ordene los pasos lógicos que permiten pasar de un evento de la realidad a una sentencia judicial:"

explicacion: |
  Primero ocurre el hecho (suceso), luego se encuadra ese hecho en la norma (subsunción) y finalmente se produce el efecto legal (consecuencia).
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["clasificacion", "voluntad"]

variables:
  es_voluntario: uno_de([true, falso])
  tipo_hecho: uno_de(["hecho voluntario", "hecho involuntario"])

respuesta: tipo_hecho[es_voluntario == true ? 0 : 1]
tipo: mc
opciones_explicitas: ["hecho voluntario", "hecho involuntario"]

enunciado: "Si un hecho es producido por la voluntad del sujeto, pero este no busca las consecuencias jurídicas, se clasifica como un ___."

explicacion: |
  En el derecho, distinguimos entre hechos voluntarios (donde hay voluntad pero no intención de producir efectos legales, como un accidente por negligencia) y actos jurídicos (donde la voluntad busca el efecto legal).
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["teoria_del_derecho", "hechos"]

respuesta: "hecho_juridicamente_relevante"
tipo: completar
respuestas_validas: ["hecho_juridicamente_relevante"]

enunciado: "Un evento de la naturaleza o de la conducta humana que produce efectos en el ordenamiento jurídico se denomina ___."

explicacion: |
  Un hecho es jurídicamente relevante cuando la norma jurídica le atribuye consecuencias (crear, modificar o extinguir derechos u obligaciones).
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["clasificacion", "hechos_naturales"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[["un rayo que destruye una casa asegurada", "hecho de la naturaleza"], ["un contrato de compraventa firmado", "acto jurídico"]]]

respuesta: escenarios[escenario_idx][0
tipo: mc
opciones_explicitas: ["un rayo que destruye una casa asegurada", "un contrato de compraventa firmado"]

enunciado: "Identifique el ejemplo que corresponde al escenario: {escenarios[escenario_idx][0]}."

explicacion: |
  En el primer caso, el evento es un hecho de la naturaleza (caso fortuito) que activa una cláusula de seguro. En el segundo, es un acto jurídico porque hay voluntad dirigida a crear efectos legales.
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["elementos", "norma"]

respuesta: verdadero
tipo: vf

enunciado: "¿Para que un hecho sea jurídicamente relevante, debe existir una norma previa que le asigne una consecuencia jurídica?"

explicacion: |
  Correcto. Sin una norma que vincule el hecho con una consecuencia (sanción, derecho, obligación), el hecho es irrelevante para el Derecho, aunque sea relevante para la vida cotidiana.
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "avanzado"
  tags: ["metodologia", "subsuncion"]

respuesta: ["1. Observación del hecho", "2. Calificación jurídica", "3. Aplicación de la consecuencia"]
tipo: ordenar
opciones_explicitas: ["1. Observación del hecho", "2. Calificación jurídica", "3. Aplicación de la consecuencia"]

enunciado: "Ordene los pasos lógicos para determinar la relevancia de un suceso en un proceso legal:"

explicacion: |
  Primero se observa la realidad (hecho), luego se encuadra en una norma (calificación) y finalmente se determina el efecto legal (consecuencia).
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["caso_practico", "causalidad"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    [0, "Juan camina por la calle y ve una nube negra (No relevante)", "Juan choca su auto contra un muro por negligencia (Relevante)"],
    [1, "Juan camina por la calle y ve una nube negra (No relevante)", "Juan firma un testamento (Relevante)"]
  ]

respuesta: casos[caso_idx][1
tipo: mc
opciones_explicitas: ["Juan camina por la calle y ve una nube negra (No relevante)", "Juan choca su auto contra un muro por negligencia (Relevante)"]

enunciado: "Analice el caso seleccionado: {casos[caso_idx][1]}. ¿Cuál de los dos eventos descritos en la variable de contexto es el que posee relevancia jurídica?"

explicacion: |
  El primer evento es un hecho simple/natural sin consecuencias legales inmediatas. El segundo es un hecho/acto que genera responsabilidad civil (consecuencia jurídica).
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["conceptos_basicos", "teoria_del_derecho"]

tipo: mc
opciones_explicitas: ["Un accidente de tránsito sin culpa", "El nacimiento de una persona", "El paso de una nube por el cielo", "El deseo de comprar un auto"]

enunciado: "Un hecho es jurídicamente relevante cuando su ocurrencia produce una transformación en el ordenamiento jurídico (crea, modifica o extingue derechos). ¿Cuál de los siguientes es un ejemplo de hecho jurídico relevante?"

explicacion: |
  El nacimiento es un hecho jurídico relevante porque genera la capacidad de derecho y la personalidad jurídica. Un accidente sin culpa es un hecho natural, y el deseo es una mera intención sin manifestación externa.
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["distincion_fundamental"]

tipo: vf
respuesta: falso

enunciado: "Todo hecho de la naturaleza, como la lluvia o el paso del tiempo, es automáticamente un hecho jurídicamente relevante."

explicacion: |
  Falso. Para que un hecho sea jurídicamente relevante, debe tener una consecuencia legal prevista por la norma. La lluvia es un hecho natural; la lluvia que destruye una cosecha asegurada es un hecho jurídicamente relevante por el contrato de seguro.
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["causalidad"]

variables:
  escenario_idx: uno_de([0, 1])

datos:
  - ["La muerte de una persona", "La extinción de la personalidad jurídica y de los derechos patrimoniales"]
  - ["El cumplimiento de la mayoría de edad", "El adquiremiento de la capacidad de ejercicio"]

tipo: completar
respuestas_validas: [datos[escenario_idx][1]]
respuesta: datos[escenario_idx][1

enunciado: "Si ocurre {datos[escenario_idx][0]}, la consecuencia jurídica es ___."

pasos:
  - "Identificar el hecho natural o social planteado."
  - "Relacionar el hecho con la consecuencia legal correspondiente según la normativa vigente."

explicacion: |
  El hecho jurídico es el suceso, y la consecuencia es el efecto legal que la norma asigna a ese suceso.
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["acto_juridico"]

tipo: mc
opciones_explicitas: ["El hecho es involuntario, el acto es una manifestación de voluntad destinada a producir efectos", "El hecho es siempre legal, el acto es siempre ilegal", "No hay diferencia, son sinónimos en derecho", "El acto es un hecho de la naturaleza y el hecho es un contrato"]

enunciado: "¿Cuál es la distinción fundamental entre un hecho jurídico y un acto jurídico?"

explicacion: |
  La voluntad es el factor clave. En el acto jurídico, la persona busca deliberadamente producir efectos legales; en el hecho jurídico, la consecuencia se produce por la ley, independientemente de la voluntad del sujeto.
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "avanzado"
  tags: ["proceso_juridico"]

tipo: ordenar
opciones_explicitas: ["Ocurrencia de un suceso (hecho)", "Previsión de la norma (hipótesis)", "Producción de consecuencias jurídicas"]
respuesta: ["Ocurrencia de un suceso (hecho)", "Previsión de la norma (hipótesis)", "Producción de consecuencias jurídicas"]

enunciado: "Ordene cronológicamente los elementos necesarios para que un suceso se transforme en un hecho con relevancia jurídica:"

explicacion: |
  Primero debe ocurrir el suceso; segundo, debe existir una norma que haya previsto ese suceso (hipótesis normativa); y finalmente, se produce el efecto legal.
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["conceptos_basicos", "hecho_juridico"]

respuesta: "acto jurídico"
tipo: completar
respuestas_validas: ["acto jurídico"]

enunciado: "Mientras que un hecho jurídico es un evento que produce consecuencias legales sin que medie la voluntad de las partes para producir dichas consecuencias, el ___ es aquel donde la voluntad está dirigida específicamente a crear, modificar o extinguir derechos."

explicacion: |
  El hecho jurídico es un acontecimiento natural o humano que el derecho vincula a una consecuencia, mientras que en el acto jurídico existe la intención deliberada de producir ese efecto legal.
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["relevancia", "consecuencia"]

variables:
  datos: [["Un rayo cae sobre un bosque y causa un incendio que destruye una propiedad asegurada.", "es"], ["Una persona camina por la calle y ve un atardecer hermoso.", "no es"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["es", "no es"]

enunciado: "Analice el siguiente escenario: {datos[idx][0]} ¿Este evento es un hecho jurídicamente relevante? ___"

explicacion: |
  En el primer caso, el rayo (hecho natural) activa una consecuencia legal (el contrato de seguro). En el segundo, el atardecer es un hecho de la naturaleza pero no altera ninguna relación jurídica ni crea derechos u obligaciones.
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["clasificacion", "hechos_naturales"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que todos los hechos de la naturaleza (como un terremoto) son hechos jurídicamente relevantes por el solo hecho de ocurrir?"

explicacion: |
  Falso. Solo son hechos jurídicamente relevantes aquellos que el ordenamiento jurídico decide vincular a una consecuencia legal (por ejemplo, un terremoto que activa un seguro o una eximente de responsabilidad).
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["elementos", "causalidad"]

respuesta: ["Presencia de un hecho", "Norma jurídica", "Consecuencia legal"]
tipo: ordenar

opciones_explicitas: ["Presencia de un hecho", "Norma jurídica", "Consecuencia legal"]

enunciado: "Ordene la secuencia lógica de la estructura de la relevancia jurídica, desde el suceso inicial hasta su efecto en el derecho:"

explicacion: |
  Para que exista relevancia, debe ocurrir un hecho, debe existir una norma que lo prevea y, finalmente, se produce la consecuencia legal prevista por dicha norma.
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "avanzado"
  tags: ["voluntad", "causalidad"]

respuesta: "acto jurídico"
tipo: mc
opciones_explicitas: ["hecho jurídico", "acto jurídico"]

enunciado: "Si un individuo firma un contrato de compraventa con la intención de transferir la propiedad de un bien, ¿ante qué figura estamos?"

explicacion: |
  La voluntad de transferir la propiedad es el elemento distintivo que convierte al evento en un acto jurídico, a diferencia del hecho jurídico donde la consecuencia se impone independientemente de la voluntad de los sujetos.
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["hecho_juridico", "derecho_civil"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["El nacimiento de un niño", "persona"], ["El nacimiento de un feto no viable", "no persona"]]

respuesta: datos[escenario_idx][1
tipo: mc
opciones_explicitas: ["persona", "no persona", "objeto", "sujeto pasivo"]

enunciado: "En el derecho, el hecho de que {datos[escenario_idx][0]} es considerado un hecho jurídicamente relevante porque da origen a la condición de ___."

explicacion: |
  Un hecho es jurídicamente relevante cuando la norma le atribuye consecuencias jurídicas. El nacimiento con vida es el hecho que genera la personalidad jurídica.
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["responsabilidad_civil", "hecho_juridico"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Juan choca su auto por descuido y rompe un muro", "responsabilidad"], ["Juan camina por la vereda y ve una nube", "no relevante"]]

respuesta: casos[caso_idx][1
tipo: completar
enunciado: "Analice el siguiente caso: {casos[caso_idx][0]}. ¿Es este un hecho jurídicamente relevante para el derecho de daños? (Responda verdadero o falso)"

explicacion: |
  El segundo caso es un hecho natural sin consecuencias legales, mientras que el primero es un hecho humano que activa la responsabilidad civil.
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["teoria_del_hecho", "norma"]

respuesta: "norma"
tipo: completar
respuestas_validas: ["norma", "ley", "sentencia", "decreto"]

enunciado: "Para que un hecho sea jurídicamente relevante, debe existir una ___ que le asigne una consecuencia jurídica específica."

explicacion: |
  La relevancia jurídica no es una propiedad intrínseca del hecho, sino una consecuencia de la existencia de una norma que lo regula.
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "avanzado"
  tags: ["contrato", "hecho_juridico"]

variables:
  orden_idx: 0
  pasos_correctos: ["Acuerdo de voluntades", "Nacimiento de la obligación", "Cumplimiento o incumplimiento"]

respuesta: pasos_correctos
tipo: ordenar
opciones_explicitas: ["Acuerdo de voluntades", "Nacimiento de la obligación", "Cumplimiento o incumplimiento", "Firma de un papel"]

enunciado: "Ordene cronológicamente los hechos que convierten un simple acuerdo de voluntades en una relación jurídica contractual:"

explicacion: |
  Primero ocurre el acuerdo (hecho jurídico), esto crea la obligación (consecuencia) y finalmente el cumplimiento o incumplimiento (hecho que extingue o modifica la relación).
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["hecho_juridico", "acto_juridico"]

variables:
  ejemplo_idx: uno_de([0, 1])
  ejemplos: [["Un rayo que destruye una casa", "hecho natural"], ["Un testamento", "acto jurídico"]]

respuesta: ejemplos[ejemplo_idx][1
tipo: mc
opciones_explicitas: ["hecho natural", "acto jurídico", "acto administrativo", "hecho social"]

enunciado: "Si el hecho es {ejemplos[ejemplo_idx][0]}, estamos ante un ___."

explicacion: |
  Los hechos naturales son sucesos de la naturaleza que tienen relevancia legal (como un desastre que activa un seguro) sin que medie la voluntad humana.
```

## Sección: interpretacion-normativa (25 preguntas)

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "basico"
  tags: ["conceptos", "teoria_del_derecho"]

respuesta: "desentrañar el sentido y el alcance de la norma"
tipo: completar
respuestas_validas: ["desentrañar el sentido y el alcance de la norma", "determinar el sentido y el alcance de la norma"]

enunciado: "La interpretación normativa es la actividad intelectual consistente en ___ para aplicarla a un caso concreto."

explicacion: |
  Interpretar una norma no es solo leerla, sino determinar qué significa y hasta dónde llega su aplicación en un contexto específico.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "basico"
  tags: ["elementos", "metodologia"]

variables:
  tipo_interpretacion: uno_de(["gramatical", "teleologica", "sistemática"])

respuesta: tipo_interpretacion
tipo: mc
opciones_explicitas: ["gramatical", "teleologica", "sistemática"]

enunciado: "Cuando un juez busca el sentido de la norma basándose exclusivamente en el significado de las palabras utilizadas en el texto, está realizando una interpretación de tipo {tipo_interpretacion}."

explicacion: |
  La interpretación gramatical o literal se centra en el tenor semántico de las palabras del texto normativo.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["alcance", "aplicacion"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que la interpretación normativa busca determinar tanto el significado (sentido) como el alcance (ámbito de aplicación) de una norma?"

explicacion: |
  Efectivamente, la interpretación tiene una doble dimensión: el contenido semántico (qué dice) y la extensión de su aplicación (a quiénes y en qué situaciones alcanza).
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["metodos", "orden"]

opciones_explicitas: ["Análisis del texto", "Identificación del problema", "Aplicación al caso concreto"]
respuesta: ["Análisis del texto", "Identificación del problema", "Aplicación al caso concreto"]
tipo: ordenar

enunciado: "Ordene lógicamente los pasos que sigue un aplicador del derecho al realizar un proceso de interpretación y aplicación normativa:"

explicacion: |
  El proceso comienza con la comprensión del texto, sigue con la detección de la controversia jurídica y culmina con la subsunción o aplicación de la norma al hecho.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "avanzado"
  tags: ["teleologica", "finalidad"]

variables:
  escenario: uno_de(["finalidad_legislador", "finalidad_social"])

respuesta: escenario
tipo: mc
opciones_explicitas: ["finalidad_legislador", "finalidad_social"]

enunciado: "Si un intérprete busca el sentido de la norma atendiendo a los fines o propósitos para los cuales fue creada (el 'espíritu' de la ley), está realizando una interpretación de {escenario}."

explicacion: |
  La interpretación teleológica se centra en la finalidad (telos) de la norma, ya sea la intención original del legislador o la finalidad social/actual de la norma en la comunidad.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "basico"
  tags: ["interpretacion", "hermeneutica"]

respuesta: "gramatical"
tipo: completar
respuestas_validas: ["gramatical", "teleologica", "sistemática"]

enunciado: "Cuando un juez se limita a analizar el significado literal de las palabras utilizadas en un precepto legal para determinar su alcance, está aplicando un método de interpretación de tipo ___."

explicacion: |
  El método gramatical o literal es el primer paso de la interpretación; consiste en analizar la sintaxis y el semántica del texto normativo para hallar su sentido inmediato.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["finalidad", "ratio_legis"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [[["El fin de la norma es proteger la vida", "falso"], ["El fin de la norma es la sanción", "falso"]], [["La norma busca la equidad", "verdadero"], ["La norma busca el castigo"], ["La norma busca la paz", "verdadero"]]]

respuesta: escenarios[caso_idx][0][1
tipo: completar
enunciado: "En el escenario seleccionado, la interpretación teleológica busca determinar el significado de la norma basándose en su ___."

explicacion: |
  La interpretación teleológica (o finalista) busca el 'espíritu' de la ley, es decir, el fin o la finalidad (ratio legis) para la cual fue creada la norma.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["sistema", "coherencia"]

respuesta: "sistemática"
tipo: mc
opciones_explicitas: ["gramatical", "sistemática", "histórica", "evolutiva"]

enunciado: "Un abogado sostiene que una norma no puede entenderse de forma aislada, sino que debe integrarse con el resto del ordenamiento jurídico para evitar contradicciones. ¿Qué método está utilizando?"

explicacion: |
  La interpretación sistemática considera que la norma es parte de un todo (el sistema jurídico) y que su sentido se completa al relacionarla con otras normas del mismo cuerpo legal.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "avanzado"
  tags: ["procedimiento", "subsunción"]

respuesta: ["Subsunción", "Interpretación", "Fijación del hecho"]
tipo: ordenar
opciones_explicitas: ["Subsunción", "Interpretación", "Fijación del hecho"]

enunciado: "Ordene correctamente los pasos lógicos para aplicar una norma a un caso concreto, desde la recepción del hecho hasta la decisión final."

explicacion: |
  Primero se deben fijar los hechos (fase fáctica), luego interpretar la norma para entender su alcance (fase normativa) y finalmente realizar la subsunción (encuadramiento del hecho en la norma).
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "basico"
  tags: ["historia", "legislador"]

respuesta: verdadero
tipo: vf

enunciado: "La interpretación histórica consiste en analizar los antecedentes de la norma, como los debates parlamentarios o la exposición de motivos, para comprender la voluntad del legislador original."

explicacion: |
  Correcto. Este método busca reconstruir la intención del legislador analizando el contexto y los documentos que dieron origen a la norma.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["hermeneutica", "literalismo"]

respuesta: "error"
tipo: "mc"
opciones_explicitas: ["error", "método_correcto", "interpretación_teleológica", "interpretación_gramatical"]

enunciado: "Cuando un aplicador del derecho se limita exclusivamente al significado semántico de las palabras de la norma, ignorando el espíritu o la finalidad de la ley, está incurriendo en un _________ de interpretación."

explicacion: |
  La interpretación puramente gramatical o literal puede llevar a absurdos jurídicos si no se considera la finalidad (ratio legis) de la norma.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "basico"
  tags: ["teoria_del_derecho"]

respuesta: falso
tipo: "vf"

enunciado: "¿Es correcto afirmar que la 'norma' y el 'texto de la ley' son conceptos idénticos en el proceso de interpretación?"

explicacion: |
  Falso. El texto es el soporte lingüístico (el enunciado), mientras que la norma es el significado o sentido que se extrae de ese texto tras el proceso interpretativo.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "avanzado"
  tags: ["lagunas", "analogia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["existe una laguna legal", "analogía"],
    ["la norma es ambigua", "interpretación sistemática"]
  ]

respuesta: "datos[escenario_idx][1]"
tipo: "completar"
respuestas_validas: ["analogía", "interpretación sistemática"]

enunciado: "Si al aplicar una norma a un caso concreto se detecta que no hay una disposición aplicable para ese supuesto (laguna), el juez debe recurrir a la _________ para resolver."

explicacion: |
  La analogía permite aplicar una norma que regula un caso similar a uno que no está regulado, siempre que exista la misma razón de ser.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["metodologia"]

respuesta: ["gramatical", "lógica", "sistemática", "histórica"]
tipo: "ordenar"
opciones_explicitas: ["gramatical", "lógica", "sistemática", "histórica"]

enunciado: "Ordene los métodos de interpretación de la ley desde el más básico (estudio del lenguaje) hasta el más complejo (relación con el ordenamiento completo):"

explicacion: |
  El proceso interpretativo suele comenzar por la gramática, sigue con la lógica (finalidad), se integra con el sistema jurídico y finalmente revisa el contexto histórico.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["coherencia", "sistema_juridico"]

respuesta: "falso"
tipo: "vf"

enunciado: "¿La interpretación sistemática sostiene que una norma debe entenderse de forma aislada, sin considerar su relación con otras normas del mismo ordenamiento?"

explicacion: |
  Falso. La interpretación sistemática parte de la premisa de que el ordenamiento es un todo coherente y que cada norma debe interpretarse en relación con las demás.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["teoria_del_derecho", "interpretacion"]

respuesta: "integración"
tipo: completar
respuestas_validas: ["integración", "integracion"]

enunciado: "Mientras que la interpretación normativa busca determinar el sentido y alcance de una norma existente, la ___ se utiliza cuando existen lagunas legales para llenar los vacíos del ordenamiento."

explicacion: |
  La interpretación se aplica cuando la norma está presente pero su sentido es ambiguo. La integración se aplica cuando no hay norma aplicable al caso (laguna).
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "basico"
  tags: ["metodos", "hermeneutica"]

variables:
  caso_idx: uno_de([0,1])
  escenarios: [["gramatical", "literal"], ["teleologica", "finalidad"]]

respuesta: uno_de(escenarios[caso_idx])
tipo: mc
opciones_explicitas: ["gramatical", "teleologica", "sistemática", "histórica"]

enunciado: "Si un juez decide interpretar una norma centrándose exclusivamente en el significado de las palabras utilizadas en el texto legal, está aplicando un método de tipo {escenarios[caso_idx]}."

explicacion: |
  El método gramatical o literal se limita al análisis semántico de las palabras del texto.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "avanzado"
  tags: ["verdad", "proceso_judicial"]

respuesta: falso

tipo: vf

enunciado: "En el proceso de interpretación normativa para la aplicación de la ley, el juez debe buscar siempre la 'verdad real' (lo que ocurrió exactamente en la realidad física), incluso si esta contradice las pruebas obtenidas legalmente."

explicacion: |
  En derecho, la interpretación se realiza sobre la 'verdad jurídica' o procesal, que es la reconstrucción de los hechos basada en las pruebas válidas dentro del proceso.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["elementos", "hermeneutica"]

respuesta: "sistemática"
tipo: completar
respuestas_validas: ["sistemática", "sistematica"]

enunciado: "Cuando la interpretación no se limita a la norma aislada, sino que busca su sentido analizando su relación con el resto del ordenamiento jurídico, se está utilizando una interpretación ___."

explicacion: |
  La interpretación sistemática considera la norma como parte de un todo coherente y no como un elemento aislado.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "avanzado"
  tags: ["jerarquia", "criterios"]

respuesta: ["Constitución", "Ley", "Reglamento", "Sentencia"]
tipo: ordenar

opciones_explicitas: ["Constitución", "Ley", "Reglamento", "Sentencia"]

enunciado: "Ordene los siguientes ordenamientos de mayor a menor jerarquía para determinar el alcance de una norma en un conflicto de leyes:"

explicacion: |
  La jerarquía normativa (Pirámide de Kelsen) establece que la Constitución es la norma suprema, seguida por las leyes, luego los reglamentos y finalmente los actos administrativos o sentencias en su aplicación específica.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["interpretacion", "aplicacion", "norma"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["una norma que prohíbe vehículos en parques", "prohibición"], ["una norma que regula el uso de drones", "regulación"]]
  escenario: datos[escenario_idx][0]
  tipo_norma: datos[escenario_idx][1]

respuesta: tipo_norma
tipo: mc
opciones_explicitas: ["prohibición", "regulación", "exención", "derogación"]

enunciado: "Ante el escenario de {escenario}, el intérprete debe determinar si el alcance de la norma es de {tipo_norma}."

explicacion: |
  La interpretación normativa busca determinar el sentido de la norma (su contenido) y su alcance (su aplicación) frente a un hecho concreto.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "basico"
  tags: ["gramatical", "literalidad"]

respuesta: "literal"
tipo: mc
opciones_explicitas: ["literal", "teleológica", "sistemática", "histórica"]

enunciado: "Cuando un juez se limita a analizar el significado semántico y sintáctico de las palabras de la ley para determinar su sentido, está aplicando una interpretación de tipo ___."

explicacion: |
  La interpretación gramatical o literal se centra exclusivamente en el texto de la norma y el significado de sus términos.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "avanzado"
  tags: ["teleologica", "finalidad"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["la norma busca proteger la vida", "finalidad"], ["la norma busca proteger el patrimonio", "finalidad"]]
  objetivo: casos[caso_idx][0]

respuesta: "finalidad"
tipo: completar
respuestas_validas: ["finalidad"]

enunciado: "Si el intérprete se enfoca en el ___ de la norma (el 'porqué' o el espíritu de la ley) para resolver una laguna, está realizando una interpretación teleológica."

explicacion: |
  La interpretación teleológica busca la finalidad o el espíritu de la norma para asegurar que la aplicación sea coherente con el objetivo del legislador.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["sistemática", "coherencia"]

respuesta: falso
tipo: vf

enunciado: "La interpretación sistemática sostiene que una norma debe entenderse de forma aislada, sin considerar su relación con el resto del ordenamiento jurídico."

explicacion: |
  Falso. La interpretación sistemática establece que la norma es parte de un todo y debe interpretarse en armonía con el sistema jurídico completo.
```

```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["metodologia", "proceso"]

respuesta: ["Subsunción del hecho", "Interpretación de la norma", "Determinación del sentido", "Resolución del caso"]
tipo: ordenar
opciones_explicitas: ["Subsunción del hecho", "Interpretación de la norma", "Determinación del sentido", "Resolución del caso"]

enunciado: "Ordene los pasos lógicos que sigue un aplicador del derecho para resolver un conflicto jurídico:"

explicacion: |
  El proceso requiere primero entender el significado de la norma (interpretación), luego determinar su alcance, aplicar ese sentido al hecho (subsunción) y finalmente dictar la resolución.
```
