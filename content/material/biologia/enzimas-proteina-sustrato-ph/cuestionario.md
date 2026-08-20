# Biología — Enzimas: proteína, sustrato, temperatura y pH (cuestionario, 25 preguntas VBLang)

> Tema: `BENZa/b/c`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma) en 5 lotes concurrentes.
> Corregido a mano. Bugs de esta tanda: varias preguntas de blank
> `___` etiquetadas `tipo: vf` (reclasificadas a `completar`); una
> pregunta con `respuesta:` en forma de array para dos blancos —
> recortada a un solo blanco; un `enunciado` con una expresión
> condicional estilo Python (`{x if escenario == 'y' else z}`) dentro
> de la interpolación — no existe en el DSL, reescrita con la tabla
> `[escenario, dato, respuesta]` indexada por `uno_de`, mismo patrón
> que el resto del mapa; una pregunta cuya `respuesta:` era un número
> sin comillas que no coincidía con ninguna `opciones_explicitas`
> (`respuesta: 1` contra opciones tipo `"40°C"`) — corregida al string
> real; un bloque `tipo: input` (tipo no confirmado en el DSL) —
> normalizado a `completar`; `metadata.tema` con un typo
> (`enzimas_protein_sustrato_ph`) — corregido.

---

### 1 — Función de las enzimas

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "basico"
  tags: ["catalizador", "velocidad"]

respuesta: "acelerar"
tipo: completar
respuestas_validas:
  - "acelerar"

enunciado: "Las enzimas son biomoléculas que permiten ___ las reacciones químicas en los seres vivos."

explicacion: |
  Las enzimas actúan como catalizadores biológicos, lo que significa que aumentan la velocidad de las reacciones químicas sin consumirse en el proceso.
```

### 2 — Naturaleza química de las enzimas

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "basico"
  tags: ["proteinas", "composición"]

respuesta: "proteínas"
tipo: completar
respuestas_validas:
  - "proteínas"
  - "proteinas"

enunciado: "Desde el punto de vista químico, la gran mayoría de las enzimas son ___."

explicacion: |
  Las enzimas son macromoléculas compuestas por cadenas de aminoácidos, es decir, son proteínas especializadas en la catálisis.
```

### 3 — El sustrato (definición)

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "intermedio"
  tags: ["sustrato", "sitio_activo"]

respuesta: "sustrato"
tipo: completar
respuestas_validas:
  - "sustrato"

enunciado: "La molécula sobre la cual actúa una enzima para transformarla en un producto se denomina ___."

explicacion: |
  El sustrato es la molécula que se une al sitio activo de la enzima para llevar a cabo la reacción química.
```

### 4 — pH óptimo y desnaturalización

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "intermedio"
  tags: ["ph", "desnaturalización"]

respuesta: "óptimo"
tipo: completar
respuestas_validas:
  - "óptimo"
  - "optimo"

enunciado: "Cada enzima tiene un pH ___ en el cual su actividad es máxima; si el pH cambia drásticamente, la enzima puede desnaturalizarse."

explicacion: |
  Las enzimas son muy sensibles a los cambios de pH. Cada una tiene un rango ideal; fuera de este rango, su estructura tridimensional se pierde (desnaturalización) y pierde su función.
```

### 5 — El resultado de la reacción no cambia

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "basico"
  tags: ["resultado", "velocidad"]

respuesta: "igual"
tipo: completar
respuestas_validas:
  - "igual"
  - "el mismo"

enunciado: "Aunque las enzimas aumentan la velocidad de una reacción, el resultado final de la reacción química (los productos obtenidos) será ___ que si la reacción ocurriera sin la enzima."

explicacion: |
  La enzima sólo cambia la velocidad de la reacción (la hace más rápida), pero no altera el equilibrio químico ni cambia los productos finales.
```

### 6 — El sitio activo

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "basico"
  tags: ["enzimas", "sitio_activo", "proteinas"]

tipo: mc
opciones_explicitas: ["El lugar de la enzima donde se une el sustrato", "El centro de energía de la proteína", "La parte de la enzima que se descompone", "El medio donde ocurre la reacción"]
respuesta: "El lugar de la enzima donde se une el sustrato"

enunciado: "En el modelo de llave-cerradura, ¿qué es el sitio activo de una enzima?"

explicacion: |
  El sitio activo es una región específica de la enzima con una forma tridimensional complementaria al sustrato, permitiendo que la reacción química ocurra de manera eficiente.
```

### 7 — Especificidad enzimática

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "basico"
  tags: ["especificidad", "sustrato"]

tipo: completar
respuestas_validas:
  - "especificidad"
respuesta: "especificidad"

enunciado: "La propiedad por la cual una enzima sólo puede actuar sobre un sustrato determinado debido a su forma geométrica se denomina ___."

explicacion: |
  La especificidad es la característica fundamental que permite que las enzimas no reaccionen con cualquier molécula, sino sólo con aquellas que encajan en su sitio activo.
```

### 8 — Modelo llave-cerradura

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "basico"
  tags: ["modelo", "llave_cerradura"]

tipo: mc
opciones_explicitas: ["El sustrato cambia su forma para adaptarse a la enzima", "La enzima y el sustrato tienen formas complementarias", "La enzima se destruye tras un solo uso", "El sustrato debe ser siempre más grande que la enzima"]
respuesta: "La enzima y el sustrato tienen formas complementarias"

enunciado: "Según el modelo de 'llave-cerradura', ¿cuál es la relación entre la enzima y el sustrato?"

explicacion: |
  Este modelo clásico postula que la enzima tiene una forma rígida y el sustrato debe encajar perfectamente en ella, tal como una llave en su cerradura.
```

### 9 — El complejo enzima-sustrato

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "intermedio"
  tags: ["complejo", "reaccion"]

tipo: completar
respuestas_validas:
  - "complejo enzima-sustrato"
respuesta: "complejo enzima-sustrato"

enunciado: "Cuando el sustrato se une al sitio activo de la enzima, se forma un ___."

explicacion: |
  La unión física y temporal entre la enzima y el sustrato se conoce como complejo enzima-sustrato, paso previo a la formación de los productos.
```

### 10 — Influencia del pH sobre la actividad

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "intermedio"
  tags: ["ph", "desnaturalizacion"]

tipo: mc
opciones_explicitas: ["No afecta la función de la enzima", "Puede cambiar la forma del sitio activo y anular la función", "Aumenta la velocidad de reacción de forma infinita", "Sólo afecta a las enzimas que no son proteínas"]
respuesta: "Puede cambiar la forma del sitio activo y anular la función"

enunciado: "Si una enzima se encuentra en un pH muy alejado de su valor óptimo, ¿qué sucede con su capacidad catalítica?"

explicacion: |
  Los cambios extremos de pH alteran las cargas eléctricas y la estructura de la proteína (desnaturalización), lo que modifica el sitio activo y evita que el sustrato pueda unirse.
```

### 11 — Temperatura óptima en humanos

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "basico"
  tags: ["enzimas", "homeostasis", "temperatura"]

enunciado: "Las enzimas humanas funcionan de manera óptima a una temperatura corporal aproximada de ___ °C."

respuestas_validas:
  - "37"
respuesta: "37"
tipo: completar

explicacion: |
  La temperatura corporal humana estándar es de 37°C, donde las enzimas metabólicas mantienen su estructura y actividad máxima.
```

### 12 — Efecto del calor extremo

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "basico"
  tags: ["desnaturalizacion", "proteinas"]

enunciado: "Cuando una enzima se somete a un calor excesivo, su estructura tridimensional se altera, proceso conocido como ___."

respuestas_validas:
  - "desnaturalización"
  - "desnaturalizacion"
respuesta: "desnaturalización"
tipo: completar

explicacion: |
  La desnaturalización es la pérdida de la conformación espacial de la proteína, lo que impide que el sustrato se una al sitio activo.
```

### 13 — Reversibilidad del proceso

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "intermedio"
  tags: ["desnaturalizacion", "irreversible"]

enunciado: "Si una enzima se desnaturaliza por exceso de calor, este cambio en su forma es generalmente ___."

respuestas_validas:
  - "irreversible"
respuesta: "irreversible"
tipo: completar

explicacion: |
  Al romperse los enlaces que mantienen la forma tridimensional de la enzima, la proteína pierde su función de manera permanente.
```

### 14 — Relación estructura y función

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "intermedio"
  tags: ["sitio_activo", "forma"]

enunciado: "La función de una enzima depende estrictamente de su ___."

respuestas_validas:
  - "forma tridimensional"
respuesta: "forma tridimensional"
tipo: completar

explicacion: |
  La especificidad de una enzima radica en que su sitio activo tiene una forma complementaria al sustrato; si la forma cambia, la función se pierde.
```

### 15 — Gráfico de actividad enzimática

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "avanzado"
  tags: ["curva_actividad", "optimo"]

enunciado: "En un gráfico de actividad enzimática vs. temperatura, el punto más alto de la curva representa la temperatura ___."

respuestas_validas:
  - "óptima"
  - "optima"
respuesta: "óptima"
tipo: completar

explicacion: |
  La temperatura óptima es aquella donde la velocidad de la reacción enzimática es máxima antes de que comience la desnaturalización.
```

### 16 — pH óptimo de la pepsina

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "basico"
  tags: ["enzimas", "digestión", "ph"]

tipo: mc
opciones_explicitas: ["pH 2 (muy ácido)", "pH 7 (neutro)", "pH 9 (básico)"]
respuesta: "pH 2 (muy ácido)"

enunciado: "La pepsina es una enzima presente en el estómago humano encargada de la digestión de proteínas. ¿En qué rango de pH presenta su actividad máxima?"

explicacion: |
  La pepsina actúa en el estómago, donde el ácido clorhídrico mantiene un ambiente muy ácido para facilitar la digestión.
```

### 17 — Desnaturalización por pH extremo

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "intermedio"
  tags: ["desnaturalizacion", "estructura"]

tipo: vf
respuesta: verdadero

enunciado: "Si una enzima se encuentra en un entorno con un pH extremadamente alejado de su punto óptimo, su estructura tridimensional se altera, perdiendo su función biológica. Este proceso se conoce como desnaturalización."

explicacion: |
  Las enzimas son proteínas y su forma tridimensional es crucial para que el sustrato encaje en el sitio activo. Cambios bruscos de pH rompen los enlaces que mantienen esa forma.
```

### 18 — Enzimas de la saliva

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "basico"
  tags: ["amilasa", "saliva", "ph"]

tipo: mc
opciones_explicitas: ["pH 2", "pH 7", "pH 12"]
respuesta: "pH 7"

enunciado: "La amilasa salival actúa en la boca para degradar el almidón. Dado que la saliva tiene un pH cercano a la neutralidad, ¿cuál es el pH óptimo aproximado para esta enzima?"

explicacion: |
  La boca mantiene un ambiente neutro, por lo que las enzimas que allí actúan, como la amilasa, están adaptadas a ese nivel de acidez.
```

### 19 — El pH óptimo no es intercambiable

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "intermedio"
  tags: ["actividad_enzimatica", "grafico"]

tipo: vf
respuesta: falso

enunciado: "Si una enzima tiene un pH óptimo de 8, su actividad enzimática será la misma si se encuentra en un pH de 2 que si se encuentra en un pH de 8."

explicacion: |
  Falso. La actividad enzimática es máxima en el pH óptimo y disminuye drásticamente a medida que el pH se aleja de ese valor debido a la desnaturalización.
```

### 20 — Comparación de pH óptimo por órgano

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "intermedio"
  tags: ["comparacion", "enzimas"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["estómago", "ácido"], ["intestino delgado", "básico"]]

tipo: mc
opciones_explicitas: ["ácido", "básico", "neutro"]
respuesta: datos[escenario_idx][1]

enunciado: "Considerando que las enzimas del {datos[escenario_idx][0]} funcionan en el ambiente propio de ese órgano, ¿cuál es la naturaleza de su pH óptimo?"

explicacion: |
  Cada enzima ha evolucionado para funcionar en el compartimento específico donde se encuentra, adaptando su pH óptimo a las condiciones de ese órgano.
```

### 21 — Efecto de la fiebre sobre las enzimas del cuerpo

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "basico"
  tags: ["temperatura", "homeostasis"]

respuesta: "desnaturalización"
tipo: mc

opciones_explicitas: ["activación", "desnaturalización", "saturación", "hidrólisis"]

enunciado: "Cuando una persona tiene una fiebre alta de 39,5°C (por encima de los 37°C normales), las enzimas del cuerpo pueden sufrir un proceso de ___ debido al exceso de calor, lo que impide que cumplan su función biológica."

explicacion: |
  Las enzimas son proteínas cuya forma tridimensional es crítica para su función. Temperaturas muy elevadas rompen los enlaces que mantienen su estructura, causando la desnaturalización.
```

### 22 — Pepsina vs. tripsina según el órgano

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "intermedio"
  tags: ["ph", "digestión", "pepsina", "tripsina"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["estómago", "2", "pepsina"], ["intestino delgado", "8", "tripsina"]]

respuesta: datos[escenario_idx][2]
tipo: completar
respuestas_validas:
  - "pepsina"
  - "tripsina"

enunciado: "En el {datos[escenario_idx][0]}, donde el pH ronda {datos[escenario_idx][1]}, la enzima digestiva que actúa predominantemente es la ___."

explicacion: |
  La pepsina requiere un ambiente altamente ácido (pH bajo) como el del estómago para funcionar, mientras que la tripsina requiere un ambiente básico como el del intestino delgado.
```

### 23 — Temperatura y actividad enzimática (comparación)

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "intermedio"
  tags: ["actividad_enzimatica", "temperatura"]

respuesta: "40°C"
tipo: mc
opciones_explicitas: ["20°C", "40°C", "70°C"]

enunciado: "Si comparamos una reacción enzimática humana a 20°C, a 40°C y a 70°C, ¿a cuál de esas temperaturas se espera la mayor actividad enzimática?"

explicacion: |
  La actividad enzimática aumenta con la temperatura hasta alcanzar un punto óptimo cercano a los 37-40°C. A partir de ahí, el calor excesivo (como 70°C) desnaturaliza la enzima y la actividad cae a cero.
```

### 24 — Especificidad de la enzima (repaso)

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "basico"
  tags: ["sustrato", "especificidad"]

respuesta: "sustrato"
tipo: completar
respuestas_validas:
  - "sustrato"

enunciado: "El modelo de 'llave-cerradura' sugiere que la enzima tiene una forma única que sólo encaja con una molécula específica llamada ___."

explicacion: |
  La especificidad enzimática es la capacidad de una enzima para reconocer y unirse sólo a un sustrato determinado debido a la complementariedad de sus formas.
```

### 25 — El pH óptimo de una enzima intestinal

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "avanzado"
  tags: ["ph", "optimo"]

respuesta: "7.5"
tipo: completar
respuestas_validas:
  - "7.5"
  - "7,5"

enunciado: "Una enzima intestinal tiene su pH óptimo de trabajo en ___ (valor numérico aproximado)."

explicacion: |
  Cada enzima tiene un rango de pH donde su actividad es máxima. Para las enzimas del intestino delgado, este valor suele ser cercano a la neutralidad o ligeramente básico.
```
