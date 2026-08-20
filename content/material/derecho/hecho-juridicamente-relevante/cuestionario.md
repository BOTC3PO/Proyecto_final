# Derecho — Hecho juridicamente relevante (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de hecho jurídicamente relevante

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["conceptos_basicos", "teoria_del_derecho"]

respuesta: "hecho jurídicamente relevante"
tipo: completar
respuestas_validas:
  - "hecho jurídicamente relevante"

enunciado: "Aquel suceso de la naturaleza o del mundo material que, al producirse, tiene la capacidad de producir consecuencias jurídicas se denomina ___."

explicacion: |
  Un hecho es jurídicamente relevante cuando el ordenamiento jurídico le atribuye efectos, como la creación, modificación o extinción de derechos y obligaciones.
```

### 2 — Diferencia entre hecho y acto jurídico

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["clasificacion", "hechos_juridicos"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: ["un rayo que incendia un bosque", "un accidente de tránsito"]

tipo: mc
opciones_explicitas: ["hecho puro", "acto jurídico"]

respuesta: "hecho puro"

enunciado: "Analice el siguiente caso: {escenarios[caso_idx]}. Si este suceso ocurre sin la intervención de la voluntad humana con el fin de producir efectos legales, estamos ante un ___."

explicacion: |
  El hecho puro es aquel suceso de la naturaleza que no es producto de la voluntad humana, pero que aun así tiene relevancia para el derecho (ej: un desastre natural).
```

### 3 — Elementos de la relevancia jurídica

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

### 4 — Secuencia de la relevancia jurídica

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["proceso", "logica_juridica"]

respuesta_orden: ["suceso fáctico", "subsunción", "consecuencia jurídica"]
tipo: ordenar
opciones_explicitas: ["suceso fáctico", "subsunción", "consecuencia jurídica"]

enunciado: "Ordene los pasos lógicos que permiten pasar de un evento de la realidad a una sentencia judicial:"

explicacion: |
  Primero ocurre el hecho (suceso), luego se encuadra ese hecho en la norma (subsunción) y finalmente se produce el efecto legal (consecuencia).
```

### 5 — Clasificación de hechos según la voluntad

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["clasificacion", "voluntad"]

tipo: mc
opciones_explicitas: ["hecho voluntario", "hecho involuntario"]

respuesta: "hecho voluntario"

enunciado: "Si un hecho es producido por la voluntad del sujeto, pero este no busca las consecuencias jurídicas, se clasifica como un ___."

explicacion: |
  En el derecho, distinguimos entre hechos voluntarios (donde hay voluntad pero no intención de producir efectos legales, como un accidente por negligencia) y actos jurídicos (donde la voluntad busca el efecto legal).
```

### 6 — El concepto de relevancia jurídica

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["teoria_del_derecho", "hechos"]

respuesta: "hecho_juridicamente_relevante"
tipo: completar
respuestas_validas:
  - "hecho_juridicamente_relevante"

enunciado: "Un evento de la naturaleza o de la conducta humana que produce efectos en el ordenamiento jurídico se denomina ___."

explicacion: |
  Un hecho es jurídicamente relevante cuando la norma jurídica le atribuye consecuencias (crear, modificar o extinguir derechos u obligaciones).
```

### 7 — Clasificación de los hechos

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["clasificacion", "hechos_naturales"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["un rayo que destruye una casa asegurada", "hecho de la naturaleza"], ["un contrato de compraventa firmado", "acto jurídico"]]

respuesta: escenarios[escenario_idx][0]
tipo: mc
opciones_explicitas: ["un rayo que destruye una casa asegurada", "un contrato de compraventa firmado"]

enunciado: "Identifique el ejemplo que corresponde a la categoría de: {escenarios[escenario_idx][1]}."

explicacion: |
  En el primer caso, el evento es un hecho de la naturaleza (caso fortuito) que activa una cláusula de seguro. En el segundo, es un acto jurídico porque hay voluntad dirigida a crear efectos legales.
```

### 8 — Requisitos de relevancia

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

### 9 — El proceso de calificación jurídica

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "avanzado"
  tags: ["metodologia", "subsuncion"]

respuesta_orden: ["1. Observación del hecho", "2. Calificación jurídica", "3. Aplicación de la consecuencia"]
tipo: ordenar
opciones_explicitas: ["1. Observación del hecho", "2. Calificación jurídica", "3. Aplicación de la consecuencia"]

enunciado: "Ordene los pasos lógicos para determinar la relevancia de un suceso en un proceso legal:"

explicacion: |
  Primero se observa la realidad (hecho), luego se encuadra en una norma (calificación) y finalmente se determina el efecto legal (consecuencia).
```

### 10 — Análisis de caso práctico

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["caso_practico", "causalidad"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [[0, "Juan camina por la calle y ve una nube negra (No relevante)", "Juan choca su auto contra un muro por negligencia (Relevante)"], [1, "Juan camina por la calle y ve una nube negra (No relevante)", "Juan firma un testamento (Relevante)"]]

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["Juan camina por la calle y ve una nube negra (No relevante)", "Juan choca su auto contra un muro por negligencia (Relevante)"]

enunciado: "Analice el caso seleccionado: {casos[caso_idx][1]}. ¿Cuál de los dos eventos descritos en la variable de contexto es el que posee relevancia jurídica?"

explicacion: |
  El primer evento es un hecho simple/natural sin consecuencias legales inmediatas. El segundo es un hecho/acto que genera responsabilidad civil (consecuencia jurídica).
```

### 11 — ¿Hecho o Acto?

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["conceptos_basicos", "teoria_del_derecho"]

tipo: mc
opciones_explicitas: ["Un accidente de tránsito sin culpa", "El nacimiento de una persona", "El paso de una nube por el cielo", "El deseo de comprar un auto"]

respuesta: "El nacimiento de una persona"

enunciado: "Un hecho es jurídicamente relevante cuando su ocurrencia produce una transformación en el ordenamiento jurídico (crea, modifica o extingue derechos). ¿Cuál de los siguientes es un ejemplo de hecho jurídico relevante?"

explicacion: |
  El nacimiento es un hecho jurídico relevante porque genera la capacidad de derecho y la personalidad jurídica. Un accidente sin culpa es un hecho natural, y el deseo es una mera intención sin manifestación externa.
```

### 12 — La relevancia del efecto legal

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

### 13 — Elementos del hecho jurídico

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["causalidad"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["La muerte de una persona", "La extinción de la personalidad jurídica y de los derechos patrimoniales"], ["El cumplimiento de la mayoría de edad", "El adquiremiento de la capacidad de ejercicio"]]

tipo: completar
respuestas_validas:
  - "La extinción de la personalidad jurídica y de los derechos patrimoniales"
  - "El adquiremiento de la capacidad de ejercicio"
respuesta: datos[escenario_idx][1]

enunciado: "Si ocurre {datos[escenario_idx][0]}, la consecuencia jurídica es ___."

pasos:
  - "Identificar el hecho natural o social planteado."
  - "Relacionar el hecho con la consecuencia legal correspondiente según la normativa vigente."

explicacion: |
  El hecho jurídico es el suceso, y la consecuencia es el efecto legal que la norma asigna a ese suceso.
```

### 14 — Diferencia entre Hecho y Acto

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["acto_juridico"]

tipo: mc
opciones_explicitas: ["El hecho es involuntario, el acto es una manifestación de voluntad destinada a producir efectos", "El hecho es siempre legal, el acto es siempre ilegal", "No hay diferencia, son sinónimos en derecho", "El acto es un hecho de la naturaleza y el hecho es un contrato"]

respuesta: "El hecho es involuntario, el acto es una manifestación de voluntad destinada a producir efectos"

enunciado: "¿Cuál es la distinción fundamental entre un hecho jurídico y un acto jurídico?"

explicacion: |
  La voluntad es el factor clave. En el acto jurídico, la persona busca deliberadamente producir efectos legales; en el hecho jurídico, la consecuencia se produce por la ley, independientemente de la voluntad del sujeto.
```

### 15 — Secuencia de la relevancia jurídica

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "avanzado"
  tags: ["proceso_juridico"]

tipo: ordenar
opciones_explicitas: ["Ocurrencia de un suceso (hecho)", "Previsión de la norma (hipótesis)", "Producción de consecuencias jurídicas"]
respuesta_orden: ["Ocurrencia de un suceso (hecho)", "Previsión de la norma (hipótesis)", "Producción de consecuencias jurídicas"]

enunciado: "Ordene cronológicamente los elementos necesarios para que un suceso se transforme en un hecho con relevancia jurídica:"

explicacion: |
  Primero debe ocurrir el suceso; segundo, debe existir una norma que haya previsto ese suceso (hipótesis normativa); y finalmente, se produce el efecto legal.
```

### 16 — Diferencia entre hecho y acto

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["conceptos_basicos", "hecho_juridico"]

respuesta: "acto jurídico"
tipo: completar
respuestas_validas:
  - "acto jurídico"

enunciado: "Mientras que un hecho jurídico es un evento que produce consecuencias legales sin que medie la voluntad de las partes para producir dichas consecuencias, el ___ es aquel donde la voluntad está dirigida específicamente a crear, modificar o extinguir derechos."

explicacion: |
  El hecho jurídico es un acontecimiento natural o humano que el derecho vincula a una consecuencia, mientras que en el acto jurídico existe la intención deliberada de producir ese efecto legal.
```

### 17 — El elemento de la relevancia jurídica

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

### 18 — Clasificación de los hechos

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

### 19 — Elementos del hecho jurídico

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["elementos", "causalidad"]

respuesta_orden: ["Presencia de un hecho", "Norma jurídica", "Consecuencia legal"]
tipo: ordenar

opciones_explicitas: ["Presencia de un hecho", "Norma jurídica", "Consecuencia legal"]

enunciado: "Ordene la secuencia lógica de la estructura de la relevancia jurídica, desde el suceso inicial hasta su efecto en el derecho:"

explicacion: |
  Para que exista relevancia, debe ocurrir un hecho, debe existir una norma que lo prevea y, finalmente, se produce la consecuencia legal prevista por dicha norma.
```

### 20 — Contraste con el acto jurídico

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

### 21 — El nacimiento como hecho jurídico

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["hecho_juridico", "derecho_civil"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["El nacimiento de un niño", "persona"], ["El nacimiento de un feto no viable", "no persona"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["persona", "no persona", "objeto", "sujeto pasivo"]

enunciado: "En el derecho, el hecho de que {datos[escenario_idx][0]} es considerado un hecho jurídicamente relevante porque da origen a la condición de ___."

explicacion: |
  Un hecho es jurídicamente relevante cuando la norma le atribuye consecuencias jurídicas. El nacimiento con vida es el hecho que genera la personalidad jurídica.
```

### 22 — El accidente de tránsito

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["responsabilidad_civil", "hecho_juridico"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Juan choca su auto por descuido y rompe un muro", "responsabilidad"], ["Juan camina por la vereda y ve una nube", "no relevante"]]

respuesta: casos[caso_idx][1]
tipo: completar
enunciado: "Analice el siguiente caso: {casos[caso_idx][0]}. ¿Es este un hecho jurídicamente relevante para el derecho de daños? (Responda verdadero o falso)"

explicacion: |
  El segundo caso es un hecho natural sin consecuencias legales, mientras que el primero es un hecho humano que activa la responsabilidad civil.
```

### 23 — Elementos de la relevancia jurídica

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["teoria_del_hecho", "norma"]

respuesta: "norma"
tipo: completar
respuestas_validas:
  - "norma"
  - "ley"
  - "sentencia"
  - "decreto"

enunciado: "Para que un hecho sea jurídicamente relevante, debe existir una ___ que le asigne una consecuencia jurídica específica."

explicacion: |
  La relevancia jurídica no es una propiedad intrínseca del hecho, sino una consecuencia de la existencia de una norma que lo regula.
```

### 24 — Secuencia de la relevancia en un contrato

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "avanzado"
  tags: ["contrato", "hecho_juridico"]

variables:
  orden_idx: 0
  pasos_correctos: ["Acuerdo de voluntades", "Nacimiento de la obligación", "Cumplimiento o incumplimiento"]

respuesta_orden: pasos_correctos
tipo: ordenar
opciones_explicitas: ["Acuerdo de voluntades", "Nacimiento de la obligación", "Cumplimiento o incumplimiento"]

enunciado: "Ordene cronológicamente los hechos que convierten un simple acuerdo de voluntades en una relación jurídica contractual:"

explicacion: |
  Primero ocurre el acuerdo (hecho jurídico), esto crea la obligación (consecuencia) y finalmente el cumplimiento o incumplimiento (hecho que extingue o modifica la relación).
```

### 25 — Diferencia entre hecho y acto

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["hecho_juridico", "acto_juridico"]

variables:
  ejemplo_idx: uno_de([0, 1])
  ejemplos: [["Un rayo que destruye una casa", "hecho natural"], ["Un testamento", "acto jurídico"]]

respuesta: ejemplos[ejemplo_idx][1]
tipo: mc
opciones_explicitas: ["hecho natural", "acto jurídico", "acto administrativo", "hecho social"]

enunciado: "Si el hecho es {ejemplos[ejemplo_idx][0]}, estamos ante un ___."

explicacion: |
  Los hechos naturales son sucesos de la naturaleza que tienen relevancia legal (como un desastre que activa un seguro) sin que medie la voluntad humana.
```
