# Lengua — subordinada adverbial de lugar (cuestionario, 25 preguntas VBLang)

> Tema: `lengua/subordinada-adverbial-de-lugar`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "basico"
  tags: ["teoria", "sintaxis"]

variables:
  afirmacion: uno_de(["verdadero", "falso"])

respuesta: falso
tipo: vf

enunciado: "La subordinada adverbial de lugar es una oración independiente que puede sostenerse por sí misma sin el verbo principal."

explicacion: |
  Falso. La subordinada adverbial de lugar depende sintácticamente de la oración principal para completar su significado espacial. No es una oración independiente.
```

### 2 — pregunta 2

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["prueba", "identificacion"]

variables:
  prueba: uno_de(["verdadero", "falso"])

respuesta: verdadero
tipo: vf

enunciado: "Es un truco útil para identificar una subordinada de lugar sustituirla por el adverbio 'allí' y verificar si la oración mantiene su sentido lógico."

explicacion: |
  Verdadero. Si la oración principal sigue teniendo sentido al reemplazar la subordinada por 'allí', es muy probable que se trate de una subordinada adverbial de lugar.
```

### 3 — pregunta 3

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "basico"
  tags: ["teoria", "dependencia"]

variables:
  afirmacion: uno_de(["verdadero", "falso"])

respuesta: falso
tipo: vf

enunciado: "La subordinada adverbial de lugar puede interpretarse completamente sin referencia a la oración principal."

explicacion: |
  Falso. Su significado espacial solo se completa en relación con el verbo de la oración principal.
```

### 4 — pregunta 4

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["nexos", "recorrido"]

variables:
  recorrido: uno_de(["verdadero", "falso"])

respuesta: verdadero
tipo: vf

enunciado: "El nexo 'por donde' puede introducir una subordinada adverbial de lugar indicando el trayecto o recorrido."

explicacion: |
  Verdadero. 'Por donde' indica el camino o el lugar por el cual se pasa, funcionando como complemento de lugar.
```

### 5 — pregunta 5

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["nexos", "variedad"]

variables:
  afirmacion: uno_de(["verdadero", "falso"])

respuesta: falso
tipo: vf

enunciado: "Solo existe un nexo posible para introducir subordinadas adverbiales de lugar: 'donde'."

explicacion: |
  Falso. Existen varios nexos como 'dondequiera que', 'a donde', 'desde donde', 'por donde', etc.
```

### 6 — pregunta 6

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "avanzado"
  tags: ["estilo", "ventaja"]

variables:
  ventaja: uno_de(["verdadero", "falso"])

respuesta: verdadero
tipo: vf

enunciado: "El uso de subordinadas de lugar ayuda a evitar la repetición de nombres propios o lugares en el texto."

explicacion: |
  Verdadero. Permite referirse a un lugar ya mencionado o implícito mediante una oración subordinada, enriqueciendo el estilo.
```

### 7 — pregunta 7

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["nexos", "trayecto"]

variables:
  trayecto: uno_de(["verdadero", "falso"])

respuesta: verdadero
tipo: vf

enunciado: "El nexo 'por donde' puede indicar el trayecto o el camino recorrido por la acción."

explicacion: |
  Verdadero. 'Por donde' especifica el lugar o camino por el cual se realiza la acción principal.
```

### 8 — pregunta 8

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "basico"
  tags: ["definicion", "verdadero_falso"]

variables:
  afirmacion: uno_de(["verdadero", "falso"])

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: Una subordinada adverbial de lugar siempre funciona como sujeto de la oración principal."

explicacion: |
  Falso. Las subordinadas adverbiales de lugar funcionan como Complemento Circunstancial de Lugar, modificando al verbo de la oración principal, no como sujeto.
```

### 9 — pregunta 9

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["prueba", "sustitucion"]

variables:
  oracion_principal: uno_de(["Voy al parque", "Esperé en la plaza", "Corrió hacia el bosque"])
  oracion_sub: uno_de(["donde hay árboles", "donde nos vimos", "donde hace frío"])
  resultado_valido: verdadero

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: En la oración '{oracion_principal} {oracion_sub}', la parte subrayada puede sustituirse por el adverbio 'allí' sin perder el sentido espacial."

explicacion: |
  Verdadero. La prueba de sustitución por 'allí' es un método válido para identificar subordinadas adverbiales de lugar, ya que 'allí' es el pronombre adverbial de lugar equivalente.
```

### 10 — pregunta 10

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["funcion", "sintaxis"]

variables:
  tipo_funcion: uno_de(["Complemento Directo", "Complemento Circunstancial de Lugar", "Atributo", "Complemento Agente"])

respuesta: "Complemento Circunstancial de Lugar"
tipo: completar

enunciado: "La subordinada adverbial de lugar funciona sintácticamente como un {tipo_funcion}."

explicacion: |
  Las subordinadas adverbiales de lugar desempeñan la función de Complemento Circunstancial de Lugar (CCL) respecto al verbo de la oración principal.
```

### 11 — pregunta 11

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "basico"
  tags: ["diferenciacion", "nexos"]

variables:
  nexo_lugar: uno_de(["donde", "a donde"])
  nexo_tiempo: uno_de(["cuando", "mientras"])
  es_lugar: verdadero

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: El nexo '{nexo_lugar}' introduce una subordinada de lugar, mientras que '{nexo_tiempo}' introduce una de tiempo."

explicacion: |
  Verdadero. Los nexos como 'donde' y 'a donde' indican espacio, mientras que 'cuando' o 'mientras' indican tiempo. Confundirlos es un error común.
```

### 12 — pregunta 12

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "basico"
  tags: ["dependencia", "verdadero_falso"]

variables:
  afirmacion: falso

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: Una subordinada adverbial de lugar puede funcionar como una oración independiente y completa por sí misma."

explicacion: |
  Falso. Por definición, una oración subordinada depende sintáctica y semánticamente de la oración principal. No es independiente.
```

### 13 — pregunta 13

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "basico"
  tags: ["pregunta", "funcion"]

variables:
  pregunta: uno_de(["¿Dónde?", "¿Cuándo?", "¿Por qué?", "¿Cómo?"])

respuesta: "¿Dónde?"
tipo: completar

enunciado: "La subordinada adverbial de lugar responde principalmente a la pregunta: '{pregunta}'."

explicacion: |
  Las subordinadas de lugar responden a '¿Dónde?', '¿Hacia dónde?' o '¿Desde dónde?'. '¿Cuándo?' es temporal, '¿Por qué?' causal, '¿Cómo?' modal.
```

### 14 — pregunta 14

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["posicion", "verdadero_falso"]

variables:
  posicion: uno_de(["solo al final", "solo al inicio", "puede ir al inicio o al final"])

respuesta: "puede ir al inicio o al final"
tipo: completar

enunciado: "La subordinada adverbial de lugar '{posicion}' de la oración principal."

explicacion: |
  Las subordinadas adverbiales de lugar pueden aparecer tanto al inicio como al final de la oración principal, aunque es más común al final.
```

### 15 — pregunta 15

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["origen", "nexos"]

variables:
  origen: uno_de(["desde donde", "a donde", "donde"])
  contexto: "Te llamaré {origen} estoy."

respuesta: "desde donde"
tipo: completar

enunciado: "Completa la oración '{contexto}' con el nexo que indica origen o punto de partida."

explicacion: |
  'Desde donde' indica el punto de origen de la acción. 'A donde' indica destino, 'donde' ubicación estática.
```

### 16 — pregunta 16

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["prueba", "sustitucion"]

variables:
  afirmacion: falso

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: La prueba de sustitución por 'aquí' es igualmente válida que por 'allí' para identificar subordinadas de lugar."

explicacion: |
  Falso. 'Aquí' indica cercanía, 'allí' indica lejanía o lugar genérico. La prueba estándar usa 'allí' como pronombre adverbial de lugar neutro o de referencia lejana, que es más común en la teoría sintáctica para generalizar.
```

### 17 — pregunta 17

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["destino", "nexos"]

variables:
  destino: uno_de(["a donde", "desde donde", "donde"])
  contexto: "Iré {destino} me llames."

respuesta: "a donde"
tipo: completar

enunciado: "Completa la oración '{contexto}' con el nexo que indica destino o dirección hacia un lugar."

explicacion: |
  'A donde' indica el punto de llegada o destino. 'Desde donde' indica origen, 'donde' ubicación.
```

### 18 — pregunta 18

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "avanzado"
  tags: ["produccion", "nexos"]

variables:
  lugar: uno_de(["la cima", "el fondo", "el centro"])
  accion: uno_de(["se ve", "se escucha", "se siente"])

respuesta: "allí donde"
tipo: completar

enunciado: "Completa con el nexo formal: '{lugar} {accion}'."

explicacion: |
  'Allí donde' es un nexo formal que introduce la idea de lugar, equivalente a 'en el lugar en que'.
```

### 19 — pregunta 19

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["funcion", "sintaxis"]

variables:
  funcion: uno_de(["Complemento Directo", "Complemento Circunstancial de Lugar", "Atributo", "Complemento Agente"])

respuesta: "Complemento Circunstancial de Lugar"
tipo: completar

enunciado: "La subordinada adverbial de lugar funciona como un {funcion}."

explicacion: |
  Las subordinadas adverbiales de lugar desempeñan la función de Complemento Circunstancial de Lugar (CCL).
```

### 20 — pregunta 20

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["dependencia", "sintaxis"]

variables:
  dependencia: verdadero

respuesta: dependencia
tipo: vf

enunciado: "La subordinada adverbial de lugar puede funcionar como una oración independiente y completa sin la oración principal."

explicacion: |
  Falso. Por definición, es una oración subordinada, lo que significa que depende sintáctica y semánticamente de la principal.
```

### 21 — pregunta 21

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "basico"
  tags: ["nexo", "donde"]

variables:
  es_lugar: verdadero

respuesta: es_lugar
tipo: vf

enunciado: "En la oración 'Voy donde tú vas', la palabra 'donde' introduce una subordinada adverbial de lugar."

explicacion: |
  Correcto. 'Donde' es el nexo más común para indicar ubicación o destino.
```

### 22 — pregunta 22

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "basico"
  tags: ["nexo", "a donde"]

variables:
  es_lugar: verdadero

respuesta: es_lugar
tipo: vf

enunciado: "En 'Voy a donde tú vas', la parte 'a donde tú vas' es una subordinada adverbial de lugar."

explicacion: |
  Correcto. Indica el destino de la acción 'voy'.
```

### 23 — pregunta 23

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["estructura", "compuesta"]

variables:
  es_compuesta: verdadero

respuesta: es_compuesta
tipo: vf

enunciado: "Una oración que contiene una subordinada adverbial de lugar es una oración compuesta."

explicacion: |
  Correcto. Al tener una oración principal y una subordinada, es compuesta.
```

### 24 — pregunta 24

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "basico"
  tags: ["nexo", "desde donde"]

variables:
  es_lugar: verdadero

respuesta: es_lugar
tipo: vf

enunciado: "En 'Vengo desde donde tú viniste', la parte 'desde donde tú viniste' es una subordinada adverbial de lugar."

explicacion: |
  Correcto. Indica el origen de la acción 'vengo'.
```

### 25 — pregunta 25

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["dependencia", "independencia"]

variables:
  es_independiente: falso

respuesta: es_independiente
tipo: vf

enunciado: "La subordinada adverbial de lugar puede entenderse completamente sola, sin la oración principal."

explicacion: |
  Falso. Dependes de la principal para su significado espacial específico.
```
