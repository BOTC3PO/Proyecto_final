### 1 — El rol del fiscal en el juicio
```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "intermedio"
  tags: ["proceso_penal", "fiscalia"]

variables:
  escenario: uno_de([["El fiscal presenta un testigo que afirma haber visto al imputado cometiendo el robo.", "acusación"], ["El abogado defensor presenta una pericia que exculpa al imputado.", "defensa"]])
  idx: uno_de([0, 1])

enunciado: "En el escenario donde el {escenario[idx][0]}, la parte que está ejerciendo la carga de la prueba es la de {escenario[idx][1]}."

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["acusación", "defensa", "tribunal", "testigo"]

explicacion: |
  En el proceso penal, la carga de la prueba recae sobre la parte acusadora (fiscalía) para desvirtuar la presunción de inocencia.
```

### 2 — Verdad o Falso: El veredicto
```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "basico"
  tags: ["veredicto", "sentencia"]

enunciado: "El veredicto es la decisión final que dicta el tribunal tras haber valorado las pruebas presentadas durante el juicio oral."

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. El veredicto es el acto mediante el cual el juzgador comunica su decisión sobre la culpabilidad o inocencia del acusado.
```

### 3 — Ordenar las etapas del debate
```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "intermedio"
  tags: ["etapas", "debate"]

variables:
  secuencia: [["Alegatos de apertura", "Producción de prueba", "Alegatos de clausura", "Deliberación y veredicto"]]

enunciado: "Ordene cronológicamente las etapas fundamentales de un juicio oral:"

respuesta: ["Alegatos de apertura", "Producción de prueba", "Alegatos de clausura", "Deliberación y veredicto"]
tipo: ordenar
opciones_explicitas: ["Alegatos de apertura", "Producción de prueba", "Alegatos de clausura", "Deliberación y veredicto"]

explicacion: |
  El juicio inicia con la presentación de las teorías del caso (apertura), sigue con la recepción de evidencia, concluye con los argumentos finales (clausura) y termina con la decisión del tribunal.
```

### 4 — El principio de inmediación
```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "avanzado"
  tags: ["principios", "inmediación"]

variables:
  caso: uno_de([["El juez no estuvo presente durante el interrogatorio de un testigo clave.", "invalida"], ["El juez presenció toda la evacuación de la prueba de ADN.", "valida"]])
  idx: uno_de([0, 1])

enunciado: "Si en un juicio {caso[idx][0]}, la validez del acto procesal se considera ___."

respuesta: caso[idx][1]
tipo: completar
respuestas_validas: ["invalida", "valida"]

explicacion: |
  El principio de inmediación exige que el tribunal esté en contacto directo con la producción de la prueba para poder valorarla correctamente.
```

### 5 — La carga de la prueba en un caso de duda
```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "intermedio"
  tags: ["principios", "in dubio pro reo"]

variables:
  resultado_prueba: uno_de(["insuficiente", "contundente"])
  idx: uno_de([0, 1])

enunciado: "Si la prueba presentada por la fiscalía es {resultado_prueba[idx]}, y surge una duda razonable, el juez debe dictar una sentencia de ___."

respuesta: "absolución"
tipo: mc
opciones_explicitas: ["condena", "absolución", "anulación", "suspensión"]

explicacion: |
  Bajo el principio 'in dubio pro reo', ante la duda razonable o prueba insuficiente, la decisión debe favorecer al imputado mediante la absolución.
```