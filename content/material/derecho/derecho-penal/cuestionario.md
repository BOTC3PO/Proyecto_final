# Derecho — Derecho penal (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de Derecho Penal

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

### 2 — Elementos de la conducta delictiva

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["terminologia", "delito"]

variables:
  escenario: uno_de([["cometer un acto prohibido por la ley con intención de causar daño", "doloso"], ["cometer un acto prohibido por la ley sin intención pero con negligencia", "culposo"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["doloso", "culposo", "imprudente", "accidental"]

enunciado: "Si una persona actúa con la intención de producir un resultado típico y antijurídico, se dice que su conducta es de carácter: ___"

pasos:
  - "Identificar la intención (ánimo) del sujeto."
  - "Relacionar la intención con la clasificación del tipo de delito."

explicacion: |
  La conducta es {escenario[0]}. En derecho penal, cuando hay intención, el delito es {escenario[1]}.
```

### 3 — La Pena y su finalidad

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["pena", "finalidad"]

respuesta: "prevención y retribución"
tipo: completar
respuestas_validas:
  - "prevención y retribución"
  - "castigo puro"
  - "rehabilitación social"
  - "represión"

enunciado: "Tradicionalmente, la pena tiene como fines principales la ___."

explicacion: |
  La pena busca prevenir nuevos delitos (prevención) y castigar la infracción cometida (retribución).
```

### 4 — Principios fundamentales

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

### 5 — Secuencia del proceso penal

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["procedimiento", "etapas"]

respuesta_orden: ["Investigación", "Juicio", "Sentencia", "Ejecución"]
tipo: ordenar
opciones_explicitas: ["Investigación", "Juicio", "Sentencia", "Ejecución"]

enunciado: "Ordene cronológicamente las etapas fundamentales de un proceso penal estándar:"

explicacion: |
  El proceso inicia con la investigación de los hechos, sigue con el juicio oral para valorar pruebas, se dicta la sentencia y finaliza con la ejecución de la pena.
```

### 6 — El rol del Estado en el delito

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

### 7 — Clasificación de la conducta

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["conducta", "tipicidad"]

variables:
  escenario: uno_de([["Juan decide robar un banco pero es detenido antes de tocar el dinero", "tentativa"], ["María entra a una tienda y toma un objeto sin pagar", "consumado"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["tentativa", "consumado", "imputable", "exento"]

enunciado: "Analice el siguiente caso: {escenario[0]}. Según la doctrina penal, la conducta de Juan se clasifica como: ___"

pasos:
  - "Identificar si la acción llegó a completar el tipo penal."
  - "Determinar si hubo ejecución del acto ilícito."

explicacion: |
  En el primer caso ({escenario[0]}), al no haberse completado el resultado típico, estamos ante una tentativa. En el segundo, el delito se considera consumado.
```

### 8 — Elementos del delito

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["teoria_del_delito"]

variables:
  caso_idx: uno_de([0, 1])
  datos: [["Un sujeto actúa bajo un error de prohibición invencible", "no_culpable"], ["Un sujeto actúa con dolo directo para causar daño", "culpable"]]

respuesta: datos[caso_idx][1]
tipo: completar
respuestas_validas:
  - "no_culpable"
  - "culpable"

enunciado: "Considerando el escenario: {datos[caso_idx][0]}. El resultado de la imputación penal para este sujeto es: ___"

explicacion: |
  La culpabilidad requiere que el sujeto sea capaz de comprender la ilicitud de su acción. Si el error es invencible, se excluye la culpabilidad.
```

### 9 — Secuencia de la aplicación de la pena

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "avanzado"
  tags: ["proceso", "pena"]

respuesta_orden: ["Tipicidad", "Antijuridicidad", "Culpabilidad", "Punibilidad"]
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

### 10 — El bien jurídico protegido

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["bien_juridico"]

variables:
  delito_tipo: uno_de([["Homicidio", "la vida"], ["Hurto", "la propiedad"]])

respuesta: delito_tipo[1]
tipo: mc
opciones_explicitas: ["la vida", "la propiedad", "la libertad", "la integridad física"]

enunciado: "Si se comete un delito de {delito_tipo[0]}, el bien jurídico que el Estado busca proteger mediante la pena es: ___"

explicacion: |
  Cada delito protege un valor fundamental llamado bien jurídico. En el caso del {delito_tipo[0]}, el bien es {delito_tipo[1]}.
```

### 11 — Diferencia con el Derecho Civil

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["distincion", "civil_vs_penal"]

respuesta: "reparar el daño"
tipo: "completar"
respuestas_validas:
  - "reparar el daño"
  - "reparación del daño"
  - "reparación"

enunciado: "Mientras que el Derecho Civil busca principalmente ___ causado por un incumplimiento contractual o un ilícito civil, el Derecho Penal busca sancionar una conducta que atenta contra la sociedad."

explicacion: |
  El Derecho Civil tiene un fin resarcitorio (reparar el daño patrimonial o moral), mientras que el Derecho Penal tiene un fin punitivo y de prevención social.
```

### 12 — El rol del Estado en el delito

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

### 13 — Elementos del tipo penal

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

### 14 — Secuencia del proceso penal

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["proceso_penal", "orden"]

tipo: "ordenar"
opciones_explicitas: ["investigación", "imputación", "juicio", "sentencia"]
respuesta_orden: ["investigación", "imputación", "juicio", "sentencia"]

enunciado: "Ordene cronológicamente las etapas fundamentales de un proceso penal típico:"

explicacion: |
  El proceso penal sigue una secuencia lógica que va desde la recolección de evidencia hasta la decisión final del juez.
```

### 15 — Naturaleza de la sanción

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

### 16 — Diferencia con el Derecho Civil

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["comparacion", "derecho_civil"]

respuesta: "sanción"
tipo: completar
respuestas_validas:
  - "sanción"
  - "pena"

enunciado: "Mientras que el Derecho Civil busca la reparación del daño mediante la indemnización, el Derecho Penal busca la imposición de una ___ al infractor."

explicacion: |
  El Derecho Civil tiene un fin resarcitorio (reparar el daño), mientras que el Derecho Penal tiene un fin punitivo (aplicar una pena).
```

### 17 — Naturaleza de la sanción

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

### 18 — Ámbito de aplicación

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["comparacion", "derecho_administrativo"]

tipo: mc
opciones_explicitas: ["Sanción administrativa", "Pena privativa de la libertad", "Indemnización de daños y perjuicios", "Sanción disciplinaria interna"]

respuesta: "Pena privativa de la libertad"

enunciado: "Si un conductor excede los límites de velocidad, recibe una multa (Derecho Administrativo). Si un conductor causa un accidente por conducir en estado de ebriedad, puede recibir una ___ (Derecho Penal)."

explicacion: |
  El Derecho Penal regula conductas que afectan bienes jurídicos fundamentales y aplica penas, a diferencia del administrativo que aplica sanciones de carácter reglamentario.
```

### 19 — Elementos de la norma

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["principios", "legalidad"]

respuesta_orden: ["Principio de legalidad", "Principio de culpabilidad", "Principio de lesividad"]
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

### 20 — Sujeto activo en el conflicto

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "avanzado"
  tags: ["sujeto", "estado"]

tipo: mc
opciones_explicitas: ["Un particular contra otro particular", "El Estado contra un particular", "Un Estado contra otro Estado", "Un particular contra una empresa"]

respuesta: "El Estado contra un particular"

enunciado: "En el Derecho Civil, el conflicto es típicamente entre particulares. En el Derecho Penal, el conflicto se caracteriza porque el sujeto activo es ___."

explicacion: |
  En el Derecho Penal, el Estado interviene como el sujeto que ejerce el 'ius puniendi' (derecho a castigar) frente al infractor.
```

### 21 — El principio de legalidad

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["principios", "legalidad"]

variables:
  datos: [["Juan comete una acción que no está tipificada en el código penal", "falso"], ["Juan comete una acción que está tipificada en el código penal", "verdadero"]]
  idx: uno_de([0, 1])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
enunciado: "De acuerdo al principio de legalidad, si {datos[idx][0]}, ¿es posible que el Estado imponga una pena a Juan?"

explicacion: |
  El principio de legalidad establece que no hay delito ni pena sin ley previa (*nullum crimen, nulla poena sine lege*). Si la conducta no está tipificada, no puede haber sanción.
```

### 22 — Tipicidad y elementos del delito

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

### 23 — Clasificación de penas

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

respuestas_validas:
  - "corporal"
  - "pecuniaria"

enunciado: "Las penas se clasifican según su naturaleza. Si se impone una {datos[idx][0]}, la naturaleza de la sanción es ___________."

explicacion: |
  Las penas pueden ser privativas de la libertad (corporales) o multas (pecuniarias).
```

### 24 — Elementos de la acción delictiva

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "avanzado"
  tags: ["iter_criminis", "ordenar"]

tipo: ordenar
opciones_explicitas: ["ideación", "preparación", "ejecución", "consumación"]
respuesta_orden: ["ideación", "preparación", "ejecución", "consumación"]

enunciado: "Ordene cronológicamente las etapas del 'iter criminis' (camino del delito) desde la concepción de la idea hasta la culminación del acto."

explicacion: |
  El iter criminis comprende la fase interna (ideación), la fase externa (preparación, ejecución) y la consumación.
```

### 25 — Imputabilidad y responsabilidad

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["imputabilidad", "responsabilidad"]

variables:
  datos: [["Un menor de edad con plena capacidad de comprensión", "no es imputable"], ["Un adulto con plena capacidad de comprensión", "es imputable"]]
  idx: uno_de([0, 1])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
enunciado: "Considerando el caso de {datos[idx][0]}, ¿se le puede atribuir responsabilidad penal bajo el concepto de imputabilidad?"

explicacion: |
  La imputabilidad es la capacidad de comprender la ilicitud del hecho. Si el sujeto carece de ella (como en menores según la legislación), no hay responsabilidad penal en el sentido estricto.
```
