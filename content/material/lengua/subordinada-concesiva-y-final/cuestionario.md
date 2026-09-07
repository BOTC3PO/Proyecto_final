# Lengua — subordinada concesiva y final (cuestionario, 20 preguntas VBLang)

> Tema: `lengua/subordinada-concesiva-y-final`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "basico"
  tags: ["concesiva", "identificacion"]

variables:
  conjuncion: uno_de(["Aunque", "Si bien", "Pese a que"])
  sujeto: uno_de(["los alumnos", "el equipo", "mi abuelo"])
  verbo_principal: uno_de(["estudiaron", "jugó", "trabajó"])
  complemento: uno_de(["el examen", "el torneo", "la mudanza"])

respuesta: verdadero
tipo: vf

enunciado: "{conjuncion} {sujeto} {verbo_principal} {complemento}. Esta oración contiene una subordinada concesiva."

explicacion: |
  La conjunción "Aunque", "Si bien" o "Pese a que" introduce una circunstancia adversa que no impide la acción principal, definiendo una oración subordinada concesiva.
```

### 2 — pregunta 2

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "basico"
  tags: ["final", "proposito"]

variables:
  accion: uno_de(["Estudio", "Trabajo", "Viajo"])
  motivo: uno_de(["para aprobar", "para ganar dinero", "para descansar"])

respuesta: "para aprobar"
tipo: completar

enunciado: "Completa la oración con el propósito correcto: '{accion} mucho {motivo}.' (Escribe solo la parte que indica el fin)."

explicacion: |
  La estructura 'para + infinitivo' o 'para que' indica el fin o propósito de la acción principal. En este caso, 'para aprobar' es el objetivo.
```

### 3 — pregunta 3

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "basico"
  tags: ["final", "conjunciones"]

variables:
  sujeto: uno_de(["Ella", "Nosotros", "Ellos"])
  accion: uno_de(["estudia", "trabaja", "corre"])
  fin: uno_de(["para que pase", "a fin de que llegue", "porque llega"])

respuesta: "para que pase"
tipo: completar

enunciado: "Selecciona la opción que completa correctamente la idea final: '{sujeto} {accion} {fin}.' (Escribe la conjunción y el verbo conjugado)."

explicacion: |
  Las oraciones finales se introducen por "para que" o "a fin de que" seguidas de un verbo en subjuntivo. "Porque" introduce causalidad.
```

### 4 — pregunta 4

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "intermedio"
  tags: ["concesiva", "obstaculo"]

variables:
  obstaculo: uno_de(["El cansancio", "El frío", "La falta de tiempo"])
  accion: uno_de(["terminó", "siguió", "completó"])
  tarea: uno_de(["el informe", "la carrera", "la tarea"])

respuesta: falso
tipo: vf

enunciado: "En la frase '{obstaculo} {accion} {tarea}', la primera parte funciona como una concesiva."

explicacion: |
  Falso. Para que sea concesiva, la primera parte necesita una conjunción explícita como "aunque", "a pesar de que" o "si bien". Sin esa conjunción, '{obstaculo} {accion} {tarea}' es simplemente una oración simple con sujeto y predicado, no una subordinada concesiva.
```

### 5 — pregunta 5

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "intermedio"
  tags: ["concesiva", "identificacion"]

variables:
  frase: uno_de(["Aunque llovió, fuimos"])
  tipo_erroneo: "final"

respuesta: falso
tipo: vf

enunciado: "La oración '{frase}' es una subordinada final."

explicacion: |
  "Aunque" es una conjunción concesiva, no final. Por lo tanto, la oración es concesiva, no final.
```

### 6 — pregunta 6

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "basico"
  tags: ["final", "identificacion"]

variables:
  accion: uno_de(["Guardé", "Ahorre", "Trabajé"])
  objeto: uno_de(["el dinero", "el libro", "las llaves"])
  fin: uno_de(["para el viaje", "para leer", "para abrir"])

respuesta: "para el viaje"
tipo: completar

enunciado: "¿Cuál es el propósito en: '{accion} {objeto} {fin}?' (Escribe la parte del fin)."

explicacion: |
  "Para el viaje" indica el objetivo o fin de la acción principal. Es una estructura preposicional de fin.
```

### 7 — pregunta 7

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "avanzado"
  tags: ["final", "registro"]

variables:
  sujeto1: uno_de(["El gobierno", "La empresa", "Los vecinos"])
  medida: uno_de(["implementó", "creó", "organizó"])
  objetivo: uno_de(["la nueva ley", "el programa", "la reunión"])
  fin_formal: "a fin de que"

respuesta: "a fin de que"
tipo: completar

enunciado: "Completa con la locución conjuntiva formal: '{sujeto1} {medida} {objetivo} {fin_formal} se reduzcan los índices.'"

explicacion: |
  "A fin de que" es una locución conjuntiva final formal, seguida de subjuntivo, utilizada para expresar un propósito de manera más culta o administrativa.
```

### 8 — pregunta 8

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "intermedio"
  tags: ["concesiva", "sinonimia"]

variables:
  hecho: uno_de(["el proyecto falló", "la noticia era mala", "el camino era largo"])
  resultado: uno_de(["se logró el éxito", "mantuvieron la esperanza", "continuaron marchando"])

respuesta: verdadero
tipo: vf

enunciado: "'Si bien {hecho}, {resultado}.' contiene una oración subordinada concesiva."

explicacion: |
  "Si bien" funciona como sinónimo de "aunque" o "a pesar de que", introduciendo una circunstancia adversa que no impide el resultado principal.
```

### 9 — pregunta 9

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "basico"
  tags: ["final", "pregunta_clave"]

variables:
  accion: uno_de(["Voy", "Estudio", "Corro"])
  lugar: uno_de(["al cine", "a la biblioteca", "al parque"])

respuesta: falso
tipo: vf

enunciado: "En la oración '{accion} {lugar}', podemos preguntar '¿Para qué vas?' para identificar una idea final."

explicacion: |
  Falso. '{accion} {lugar}' no contiene ninguna subordinada final explícita: la preposición "a" indica dirección (destino), no propósito. Aunque podamos imaginar un fin implícito ("voy para ver una película"), ese fin no está presente sintácticamente en la oración, así que no hay subordinada final que identificar.
```

### 10 — pregunta 10

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "basico"
  tags: ["final", "identificacion"]

respuesta: falso
tipo: vf

enunciado: "La oración 'Voy al cine' contiene una subordinada final explícita."

explicacion: |
  "Voy al cine" es una oración simple con complemento de régimen o destino. No contiene una oración subordinada explícita introducida por "para que" o similar.
```

### 11 — pregunta 11

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "intermedio"
  tags: ["concesiva", "identificacion"]

variables:
  conjuncion: uno_de(["Por más que", "Aun cuando", "A pesar de"])
  dificultad: uno_de(["el ruido", "la oscuridad", "la fatiga"])
  accion: uno_de(["pudo dormir", "llegó a tiempo", "terminó"])

respuesta: verdadero
tipo: vf

enunciado: "'{conjuncion} {dificultad}, {accion}.' es una estructura de subordinada concesiva."

explicacion: |
  Las conjunciones "Por más que", "Aun cuando" y "A pesar de" introducen concesivas, indicando que la dificultad no impidió la acción.
```

### 12 — pregunta 12

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "avanzado"
  tags: ["final", "que"]

variables:
  verbo_voluntad: uno_de(["Pido", "Quiero", "Mando"])
  sujeto2: uno_de(["que vengas", "que lo hagas", "que lo sepas"])

respuesta: verdadero
tipo: vf

enunciado: "En '{verbo_voluntad} {sujeto2}', el 'que' introduce una oración subordinada final."

explicacion: |
  Cuando el verbo de la principal expresa voluntad, deseo o mandato, el "que" puede introducir una subordinada final (ej: "Te pido que vengas [para que vengas]"). Es un uso elíptico o directo de la final.
```

### 13 — pregunta 13

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "basico"
  tags: ["final", "identificacion"]

variables:
  accion: uno_de(["Estudio", "Trabajo", "Ahorro"])
  fin: uno_de(["para el futuro", "para mañana", "para siempre"])

respuesta: "para el futuro"
tipo: completar

enunciado: "En '{accion} {fin}', ¿cuál es la parte que indica el fin?"

explicacion: |
  "Para el futuro" indica el propósito o meta de la acción.
```

### 14 — pregunta 14

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "basico"
  tags: ["concesiva", "ejemplo"]

variables:
  condicion: uno_de(["tenga frío", "sea tarde", "cueste dinero"])
  accion: uno_de(["iré", "lo haré", "lo compraré"])

respuesta: verdadero
tipo: vf

enunciado: "'Aunque {condicion}, {accion}.' es una oración subordinada concesiva."

explicacion: |
  "Aunque" es la conjunción concesiva por excelencia. Introduce una circunstancia que no impide la acción principal.
```

### 15 — pregunta 15

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "intermedio"
  tags: ["final", "proposito"]

variables:
  sujeto: uno_de(["El estudiante", "El trabajador", "El artista"])
  accion: uno_de(["estudia", "trabaja", "dibuja"])
  fin: uno_de(["para aprender", "para ganar", "para expresar"])

respuesta: "para aprender"
tipo: completar

enunciado: "Completa con el fin lógico: '{sujeto} {accion} {fin}.'"

explicacion: |
  Depende del contexto, pero "para aprender" es un fin común para "estudia". La pregunta pide completar con una opción válida de fin.
```

### 16 — pregunta 16

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "avanzado"
  tags: ["final", "subjuntivo"]

variables:
  verbo_principal: uno_de(["Quiero", "Necesito", "Exijo"])
  sujeto2: uno_de(["que vengas", "que lo hagas", "que lo digas"])

respuesta: verdadero
tipo: vf

enunciado: "En '{verbo_principal} {sujeto2}', el verbo 'sujeto2' debe estar en subjuntivo porque es una subordinada final."

explicacion: |
  Las oraciones finales introducidas por "para que" o "a fin de que" (o el "que" elíptico tras verbos de voluntad) requieren el modo subjuntivo en la subordinada.
```

### 17 — pregunta 17

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "avanzado"
  tags: ["final", "registro"]

variables:
  accion: uno_de(["Se estableció", "Se creó", "Se diseñó"])
  fin_formal: "a fin de que"
  objetivo: uno_de(["se garantice la seguridad", "se reduzca el riesgo", "se cumpla la norma"])

respuesta: "a fin de que"
tipo: completar

enunciado: "Completa con la locución final formal: '{accion} medidas {fin_formal} {objetivo}.'"

explicacion: |
  "A fin de que" es la locución conjuntiva final formal adecuada para contextos administrativos o legales.
```

### 18 — pregunta 18

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "intermedio"
  tags: ["concesiva", "sinonimia"]

variables:
  esfuerzo: uno_de(["insistas", "trates", "pidas"])
  resultado: uno_de(["no lo lograrás", "no lo conseguirás", "no lo obtendrás"])

respuesta: verdadero
tipo: vf

enunciado: "'Por más que {esfuerzo}, {resultado}.' es una estructura de subordinada concesiva."

explicacion: |
  "Por más que" introduce una concesiva, indicando que el esfuerzo no garantiza el resultado o que el resultado ocurre a pesar del esfuerzo.
```

### 19 — pregunta 19

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "basico"
  tags: ["final", "pregunta_clave"]

variables:
  accion: uno_de(["Voy", "Estudio", "Trabajo"])
  fin: uno_de(["al cine", "para aprender", "por dinero"])

respuesta: "para aprender"
tipo: completar

enunciado: "¿Cuál de estas opciones responde a '¿Para qué?' en el contexto de una subordinada final?"

explicacion: |
  "Para aprender" responde directamente a la pregunta de propósito. "Al cine" responde a "¿A dónde?". "Por dinero" responde a "¿Por qué?" (causa/motivo).
```

### 20 — pregunta 20

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "avanzado"
  tags: ["final", "que"]

variables:
  verbo_voluntad: uno_de(["Pido", "Quiero", "Mando"])
  sujeto2: uno_de(["que vengas", "que lo hagas", "que lo sepas"])

respuesta: verdadero
tipo: vf

enunciado: "En '{verbo_voluntad} {sujeto2}', el 'que' introduce una oración subordinada final."

explicacion: |
  Cuando el verbo de la principal expresa voluntad, deseo o mandato, el "que" puede introducir una subordinada final (ej: "Te pido que vengas [para que vengas]"). Es un uso elíptico o directo de la final.
```
