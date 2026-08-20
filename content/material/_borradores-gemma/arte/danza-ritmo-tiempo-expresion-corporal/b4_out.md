### 1 — Ritmo vs Melodía
```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "basico"
  tags: ["ritmo", "danza", "musica"]

tipo: mc
opciones_explicitas: ["La melodía es la sucesión de sonidos con altura, mientras que el ritmo es la organización de la duración de los sonidos."]
"En la danza, ¿cuál es la diferencia fundamental entre el ritmo y la melodía?"

explicacion: |
  El ritmo se refiere a la duración y acentuación de los sonidos en el tiempo, mientras que la melodía es la sucesión de notas con diferentes alturas que forman una frase musical.
```

### 2 — El Tiempo en la Danza
```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "intermedio"
  tags: ["tiempo", "ritmo"]

variables:
  es_ritmo_constante: uno_de([verdadero, falso])

tipo: vf
respuesta: es_ritmo_constante

enunciado: "Si un bailarín mantiene un movimiento con una duración de pulsos idéntica y regular, ¿se dice que está siguiendo un ritmo constante? {es_ritmo_constante}"

explicacion: |
  Un ritmo constante implica una regularidad en la subdivisión del tiempo, permitiendo una estructura predecible para el movimiento.
```

### 3 — Expresión Corporal vs Mimo
```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "avanzado"
  tags: ["expresion_corporal", "mimo"]

tipo: completar
respuestas_validas: ["gestualidad", "mimo"]

enunciado: "Mientras que el ___ se basa principalmente en la pantomima y la ausencia de palabras para narrar, la expresión corporal en la danza utiliza el movimiento total del cuerpo para comunicar estados emocionales."

explicacion: |
  El mimo es una disciplina técnica de gestualidad específica, mientras que la expresión corporal es un lenguaje más amplio que integra la intención emocional con el movimiento.
```

### 4 — Secuencia de la Composición Rítmica
```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "intermedio"
  tags: ["ritmo", "estructura"]

opciones_explicitas: ["Pulso", "Acento", "Ritmo"]

tipo: ordenar
respuesta: ["Pulso", "Acento", "Ritmo"]

enunciado: "Ordene los elementos de la estructura rítmica desde la unidad más básica y constante hasta la organización compleja que genera el movimiento:"

explicacion: |
  El pulso es la unidad básica, el acento es el énfasis en ciertos pulsos y el ritmo es la combinación de duraciones y acentos.
```

### 5 — Espacio y Movimiento
```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "basico"
  tags: ["espacio", "movimiento"]

tipo: mc
opciones_explicitas: ["El movimiento es el desplazamiento o cambio de posición, mientras que el espacio es el lugar donde ocurre dicho movimiento."]
"¿Cuál es la distinción principal entre movimiento y espacio en la danza?"

explicacion: |
  El movimiento es la acción dinámica del cuerpo, mientras que el espacio es el entorno (kinesférico o escénico) que el bailarín ocupa y recorre.
```