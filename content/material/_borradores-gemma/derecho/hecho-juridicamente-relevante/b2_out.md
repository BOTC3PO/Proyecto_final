### 1 — El concepto de relevancia jurídica
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

### 2 — Clasificación de los hechos
```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["clasificacion", "hechos_naturales"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[["un rayo que destruye una casa asegurada", "hecho de la naturaleza"], ["un contrato de compraventa firmado", "acto jurídico"]]]

respuesta: escenarios[escenario_idx][0]
tipo: mc
opciones_explicitas: ["un rayo que destruye una casa asegurada", "un contrato de compraventa firmado"]

enunciado: "Identifique el ejemplo que corresponde al escenario: {escenarios[escenario_idx][0]}."

explicacion: |
  En el primer caso, el evento es un hecho de la naturaleza (caso fortuito) que activa una cláusula de seguro. En el segundo, es un acto jurídico porque hay voluntad dirigida a crear efectos legales.
```

### 3 — Requisitos de relevancia
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

### 4 — El proceso de calificación jurídica
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

### 5 — Análisis de caso práctico
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

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["Juan camina por la calle y ve una nube negra (No relevante)", "Juan choca su auto contra un muro por negligencia (Relevante)"]

enunciado: "Analice el caso seleccionado: {casos[caso_idx][1]}. ¿Cuál de los dos eventos descritos en la variable de contexto es el que posee relevancia jurídica?"

explicacion: |
  El primer evento es un hecho simple/natural sin consecuencias legales inmediatas. El segundo es un hecho/acto que genera responsabilidad civil (consecuencia jurídica).
```