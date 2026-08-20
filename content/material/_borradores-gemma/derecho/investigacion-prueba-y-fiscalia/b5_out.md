### 1 — El rol del Fiscal en la investigación
```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "intermedio"
  tags: ["proceso_penal", "fiscalia"]

variables:
  escenario: uno_de([["El fiscal debe dirigir la investigación para recabar pruebas que sustenten la acusación", "falso"], ["El fiscal es el encargado de la defensa técnica del imputado", "falso"], ["El fiscal debe buscar tanto la prueba de cargo como la de descargo", "verdadero"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: vf

enunciado: "En un proceso penal, ¿es correcto afirmar que: {escenario[idx][0]}?"

explicacion: |
  El fiscal tiene el deber de objetividad, lo que implica que debe investigar no solo lo que incrimina al imputado, sino también aquello que pueda exculparlo.
```

### 2 — Clasificación de la prueba
```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "basico"
  tags: ["evidencia", "clasificacion"]

variables:
  caso: uno_de([["Un testigo presencial que relata lo visto", "testimonio"], ["Un perito que analiza una huella dactilar", "pericial"], ["Un video de una cámara de seguridad", "documental"]])
  idx: uno_de([0, 1, 2])

respuesta: caso[idx][1]
tipo: mc
opciones_explicitas: ["testimonio", "pericial", "documental"]

enunciado: "En el marco de la investigación, el elemento descrito como '{caso[idx][0]}' se clasifica legalmente como una prueba de tipo: ___"

explicacion: |
  La clasificación de la prueba depende de la naturaleza del medio empleado para obtener la convicción del juez.
```

### 3 — Etapas de la recolección de evidencia
```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "intermedio"
  tags: ["procedimiento", "cadena_de_custodia"]

respuesta: ["Preservación", "Recolección", "Embalaje", "Traslado"]
tipo: ordenar
opciones_explicitas: ["Preservación", "Recolección", "Embalaje", "Traslado"]

enunciado: "Ordene cronológicamente los pasos críticos para asegurar la integridad de la evidencia física en la escena del crimen:"

explicacion: |
  La cadena de custodia requiere un orden estricto para evitar la contaminación o alteración de la prueba desde el hallazgo hasta el laboratorio.
```

### 4 — El elemento probatorio faltante
```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "avanzado"
  tags: ["carga_de_la_prueba", "fiscalia"]

variables:
  situacion: uno_de([["La fiscalía no logra presentar pruebas suficientes para la condena", "improcedente"], ["El imputado debe probar su inocencia mediante pruebas directas", "improcedente"], ["El fiscal debe demostrar la culpabilidad más allá de toda duda razonable", "procedente"]])
  idx: uno_de([0, 1, 2])

respuesta: situacion[idx][1]
tipo: mc
opciones_explicitas: ["improcedente", "procedente"]

enunciado: "Analice la siguiente premisa: {situacion[idx][0]}. ¿Es esta afirmación jurídicamente ___?"

explicacion: |
  En el proceso penal rige el principio de presunción de inocencia, por lo que la carga de la prueba recae sobre la fiscalía.
```

### 5 — La importancia de la cadena de custodia
```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "basico"
  tags: ["evidencia", "validez"]

variables:
  elemento: uno_de([["La falta de registro en la cadena de custodia ___ la validez de la prueba", "anula"], ["El peritaje es ___ para la investigación", "esencial"], ["El fiscal es ___ de la escena del crimen", "responsable"]])
  idx: uno_de([0, 1, 2])

respuesta: elemento[idx][1]
tipo: completar
respuestas_validas: ["anula", "esencial", "responsable"]

enunciado: "Complete la afirmación según el caso: {elemento[idx][0]}."

explicacion: |
  La integridad de la evidencia es fundamental para que la prueba sea admitida y tenga valor probatorio en el juicio.
```