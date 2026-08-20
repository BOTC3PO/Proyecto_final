# Ed. Física — Deportes: medidas de cancha y comparación de superficies (cuestionario, 25 preguntas VBLang)

> Tema: `EF6`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma) en 5 lotes concurrentes.
> Corregido a mano. Bugs de esta tanda: muchas preguntas con
> `tipo: input` (tipo no confirmado en el DSL) y `respuesta:` calculada
> con una expresión aritmética en vivo (`largo * ancho`,
> `area_grande / area_chica`) — todas normalizadas a `completar`/`mc`
> con el resultado ya precalculado como literal en la tabla, patrón
> usado en el resto del mapa; una pregunta cuya `respuesta:` ("Fútbol
> Sala") no aparecía entre las `opciones_explicitas` — corregida;
> preguntas con dos blancos `___ x ___` mapeados a una sola
> `respuesta:` combinada — reescritas con un solo blanco.

---

### 1 — Dimensiones de la cancha de fútbol

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_medidas_cancha_superficies"
  nivel: "basico"
  tags: ["futbol", "medidas"]

enunciado: "En un partido de fútbol profesional (FIFA), las medidas estándar de la cancha son 105 metros de largo por ___ metros de ancho."

respuestas_validas:
  - "68"
respuesta: "68"
tipo: completar

explicacion: |
  Las medidas oficiales de una cancha de fútbol para partidos internacionales son de 105 metros de largo por 68 metros de ancho.
```

### 2 — La cancha de básquet

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_medidas_cancha_superficies"
  nivel: "basico"
  tags: ["basquet", "medidas"]

enunciado: "Según las reglas de la FIBA, una cancha de básquetbol mide 28 metros de largo por ___ metros de ancho."

respuestas_validas:
  - "15"
respuesta: "15"
tipo: completar

explicacion: |
  La medida oficial de la cancha de básquetbol bajo las reglas FIBA es de 28 metros de largo por 15 metros de ancho.
```

### 3 — El terreno de juego de vóley

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_medidas_cancha_superficies"
  nivel: "basico"
  tags: ["voley", "medidas"]

enunciado: "Una cancha de vóley mide 18 metros de largo por ___ metros de ancho."

respuestas_validas:
  - "9"
respuesta: "9"
tipo: completar

explicacion: |
  La cancha de vóley tiene una medida de 18 metros de largo por 9 metros de ancho.
```

### 4 — Medidas de handball

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_medidas_cancha_superficies"
  nivel: "basico"
  tags: ["handball", "medidas"]

enunciado: "El área de juego para una competencia oficial de handball tiene 40 metros de largo por ___ metros de ancho."

respuestas_validas:
  - "20"
respuesta: "20"
tipo: completar

explicacion: |
  El campo de juego de handball mide 40 metros de largo por 20 metros de ancho.
```

### 5 — La cancha de tenis

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_medidas_cancha_superficies"
  nivel: "basico"
  tags: ["tenis", "medidas"]

enunciado: "Las dimensiones oficiales de una cancha de tenis individual son 23,77 metros de largo por ___ metros de ancho."

respuestas_validas:
  - "8.23"
  - "8,23"
respuesta: "8.23"
tipo: completar

explicacion: |
  Las dimensiones oficiales de una cancha de tenis individual son 23,77 metros de largo por 8,23 metros de ancho.
```

### 6 — Área de cancha de básquet

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_medidas_cancha_superficies"
  nivel: "basico"
  tags: ["calculo", "area", "basquet"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [[28, 15, "420"], [30, 15, "450"], [28, 14, "392"]]

respuesta: datos[idx][2]
tipo: completar
respuestas_validas:
  - "420"
  - "450"
  - "392"

enunciado: "Una cancha de básquet tiene un largo de {datos[idx][0]} metros y un ancho de {datos[idx][1]} metros. ¿Cuál es el área total de la superficie de juego, en m²?"

explicacion: |
  El área de un rectángulo se calcula multiplicando su largo por su ancho: {datos[idx][0]} × {datos[idx][1]} = {datos[idx][2]} m².
```

### 7 — Perímetro de cancha de vóley

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_medidas_cancha_superficies"
  nivel: "basico"
  tags: ["calculo", "perimetro", "voley"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [[18, 9, "54"], [18, 10, "56"], [20, 10, "60"]]

respuesta: datos[idx][2]
tipo: completar
respuestas_validas:
  - "54"
  - "56"
  - "60"

enunciado: "Una cancha tiene un largo de {datos[idx][0]} metros y un ancho de {datos[idx][1]} metros. ¿Cuántos metros de perímetro tiene?"

explicacion: |
  El perímetro es 2 × (largo + ancho): 2 × ({datos[idx][0]} + {datos[idx][1]}) = {datos[idx][2]} m.
```

### 8 — Área de cancha de handball

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_medidas_cancha_superficies"
  nivel: "basico"
  tags: ["calculo", "area", "handball"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [[40, 20, "800 m²"], [39, 20, "780 m²"], [40, 19, "760 m²"]]

respuesta: datos[idx][2]
tipo: mc
opciones_explicitas: ["800 m²", "600 m²", "780 m²", "760 m²"]

enunciado: "Si una cancha tiene {datos[idx][0]} metros de largo y {datos[idx][1]} metros de ancho, ¿cuál es su superficie total?"

explicacion: |
  Para hallar la superficie (área) de una cancha rectangular, multiplicamos el largo por el ancho: {datos[idx][0]} × {datos[idx][1]} = {datos[idx][2]}.
```

### 9 — Perímetro de cancha de fútbol 5

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_medidas_cancha_superficies"
  nivel: "basico"
  tags: ["calculo", "perimetro", "futbol"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [[40, 25, "130 m"], [38, 22, "120 m"], [42, 28, "140 m"]]

respuesta: datos[idx][2]
tipo: mc
opciones_explicitas: ["130 m", "100 m", "120 m", "140 m"]

enunciado: "En una cancha con {datos[idx][0]} metros de largo y {datos[idx][1]} metros de ancho, ¿cuál es el perímetro total?"

explicacion: |
  Sumamos los lados adyacentes y multiplicamos por dos: 2 × ({datos[idx][0]} + {datos[idx][1]}) = {datos[idx][2]}.
```

### 10 — Completar fórmula de área

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_medidas_cancha_superficies"
  nivel: "basico"
  tags: ["teoria", "formula"]

respuesta: "largo * ancho"
tipo: mc
opciones_explicitas: ["largo + ancho", "largo * ancho", "2 * largo", "largo / ancho"]

enunciado: "Para calcular el área de una cancha rectangular, ¿cuál es la operación matemática correcta?"

explicacion: |
  El área de un rectángulo se define como el producto de sus dimensiones: largo por ancho.
```

### 11 — Comparación de áreas: cuántas veces cabe

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_medidas_cancha_superficies"
  nivel: "basico"
  tags: ["area", "comparacion"]

variables:
  idx: uno_de([0, 1])
  datos: [[4200, 1400, "3"], [2500, 500, "5"]]

respuesta: datos[idx][2]
tipo: completar
respuestas_validas:
  - "3"
  - "5"

enunciado: "Si comparamos una cancha de {datos[idx][0]} m² con una de {datos[idx][1]} m², ¿cuántas veces cabe la superficie pequeña en la grande?"

explicacion: |
  Se divide el área mayor por el área menor: {datos[idx][0]} / {datos[idx][1]} = {datos[idx][2]}.
```

### 12 — ¿Cuál es más grande?

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_medidas_cancha_superficies"
  nivel: "basico"
  tags: ["comparacion", "superficie"]

variables:
  idx: uno_de([0, 1])
  datos: [[648, 7140, "Fútbol"], [420, 5500, "Fútbol"]]

respuesta: datos[idx][2]
tipo: mc
opciones_explicitas: ["Tenis/Básquet (la chica)", "Fútbol"]

enunciado: "Dadas las siguientes medidas de superficie: cancha chica = {datos[idx][0]} m² y cancha grande (fútbol) = {datos[idx][1]} m², ¿cuál es el deporte que ocupa la superficie más grande?"

explicacion: |
  Comparando ambos valores, la cancha de fútbol es siempre la de mayor superficie entre las canchas habituales.
```

### 13 — Relación de superficies

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_medidas_cancha_superficies"
  nivel: "intermedio"
  tags: ["proporcion", "calculo"]

variables:
  idx: uno_de([0, 1])
  datos: [[500, 2500, "5"], [400, 1200, "3"]]

respuesta: datos[idx][2]
tipo: completar
respuestas_validas:
  - "5"
  - "3"

enunciado: "Si una cancha de básquet tiene {datos[idx][0]} m² y una de fútbol tiene {datos[idx][1]} m², la superficie de fútbol es ___ veces la de básquet."

explicacion: |
  Para hallar la relación, dividimos el área de la cancha de fútbol por la de básquet: {datos[idx][1]} / {datos[idx][0]} = {datos[idx][2]}.
```

### 14 — Diferencia de área

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_medidas_cancha_superficies"
  nivel: "intermedio"
  tags: ["resta", "area"]

variables:
  idx: uno_de([0, 1])
  datos: [[7140, 648, "6492"], [5500, 420, "5080"]]

respuesta: datos[idx][2]
tipo: completar
respuestas_validas:
  - "6492"
  - "5080"

enunciado: "Considerando una cancha de fútbol de {datos[idx][0]} m² y una de tenis de {datos[idx][1]} m², ¿cuál es la diferencia de superficie entre ambas, en m²?"

explicacion: |
  La diferencia se obtiene restando: {datos[idx][0]} - {datos[idx][1]} = {datos[idx][2]}.
```

### 15 — Identificación de superficies

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_medidas_cancha_superficies"
  nivel: "basico"
  tags: ["identificacion", "medidas"]

variables:
  idx: uno_de([0, 1])
  datos: [[648, "Tenis"], [420, "Básquet"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Tenis", "Básquet"]

enunciado: "Una cancha que tiene una superficie de {datos[idx][0]} m² corresponde al deporte de:"

explicacion: |
  Basado en los estándares de medidas, una superficie de {datos[idx][0]} m² corresponde a {datos[idx][1]}.
```

### 16 — El factor espacio

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_medidas_cancha_superficies"
  nivel: "basico"
  tags: ["espacio", "dinamica"]

tipo: mc
opciones_explicitas: ["Aumentar la superficie para deportes de contacto y velocidad", "Reducir la superficie para que el juego sea más lento", "Mantener la misma medida para todos los deportes", "Eliminar las líneas para evitar confusiones"]
respuesta: "Aumentar la superficie para deportes de contacto y velocidad"

enunciado: "En deportes como el rugby o el fútbol, las dimensiones de la cancha son significativamente mayores que en el tenis. Esto se debe a que..."

explicacion: |
  El tamaño de la superficie está directamente relacionado con la dinámica del juego: a mayor número de jugadores y mayor necesidad de desplazamientos, mayor debe ser el espacio disponible.
```

### 17 — Relación jugador-espacio

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_medidas_cancha_superficies"
  nivel: "intermedio"
  tags: ["densidad", "espacio"]

tipo: vf
respuesta: verdadero

enunciado: "Si un deporte requiere que los jugadores mantengan una distancia constante entre sí para evitar colisiones constantes, la cancha debe ser proporcionalmente más grande que una de un deporte de alta densidad como el básquetbol."

explicacion: |
  Verdadero. La densidad de jugadores por metro cuadrado influye directamente en el tamaño de cancha necesario para ese deporte.
```

### 18 — Deporte de precisión vs. deporte de campo

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_medidas_cancha_superficies"
  nivel: "basico"
  tags: ["precision", "campo"]

tipo: mc
opciones_explicitas: ["El tenis requiere menos espacio porque se basa en la precisión y el control de ángulos", "El fútbol requiere menos espacio porque es más rápido", "Las medidas no tienen relación con la técnica", "El espacio no influye en la precisión"]
respuesta: "El tenis requiere menos espacio porque se basa en la precisión y el control de ángulos"

enunciado: "¿Por qué las dimensiones de una cancha de tenis son menores comparadas con las de un campo de fútbol?"

explicacion: |
  Los deportes de raqueta o precisión suelen limitarse a superficies controladas para que la técnica y la trayectoria del objeto sean el factor principal, no la resistencia al desplazamiento largo.
```

### 19 — El concepto de "espacio reducido"

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_medidas_cancha_superficies"
  nivel: "intermedio"
  tags: ["estrategia", "reduccion"]

tipo: vf
respuesta: falso

enunciado: "En los deportes de 'espacio reducido' (como el futsal), la disminución de las dimensiones de la cancha tiene como único objetivo hacer el juego más lento y controlado."

explicacion: |
  Falso. El objetivo de reducir el espacio es aumentar la densidad de jugadores y la interacción constante, lo que obliga a una respuesta técnica más rápida ante la proximidad del rival — no hace el juego más lento, lo acelera.
```

### 20 — Determinantes del diseño

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_medidas_cancha_superficies"
  nivel: "avanzado"
  tags: ["diseño", "reglas"]

tipo: mc
opciones_explicitas: ["La cantidad de jugadores y la velocidad de desplazamiento", "El color de la pintura de la cancha", "La altura de la red únicamente", "El clima de la región donde se juega"]
respuesta: "La cantidad de jugadores y la velocidad de desplazamiento"

enunciado: "Las medidas de una superficie deportiva no son arbitrarias; están diseñadas principalmente en función de..."

explicacion: |
  El diseño de la cancha es una respuesta técnica a la cantidad de atletas que interactúan simultáneamente y la distancia que deben recorrer para ejecutar las reglas del deporte.
```

### 21 — Identificación de cancha (básquet/vóley)

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_medidas_cancha_superficies"
  nivel: "basico"
  tags: ["identificacion", "dimensiones"]

variables:
  idx: uno_de([0, 1])
  datos: [["28m", "15m", "Básquet"], ["18m", "9m", "Vóley"]]

enunciado: "Una cancha que tiene un largo de {datos[idx][0]} y un ancho de {datos[idx][1]} corresponde al deporte de:"

opciones_explicitas: ["Fútbol", "Básquet", "Vóley", "Tenis"]
respuesta: datos[idx][2]
tipo: mc

explicacion: |
  El deporte es {datos[idx][2]} porque sus dimensiones estándar son {datos[idx][0]} por {datos[idx][1]}.
```

### 22 — Perímetro de cancha de básquet (aplicado)

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_medidas_cancha_superficies"
  nivel: "intermedio"
  tags: ["calculo", "perimetro"]

respuesta: "86"
tipo: completar
respuestas_validas:
  - "86"

enunciado: "Calcula el perímetro de una cancha de básquet estándar (28 m de largo y 15 m de ancho), en metros."

explicacion: |
  El perímetro es la suma de los cuatro lados: 28 + 28 + 15 + 15 = 86 metros.
```

### 23 — Área de cancha de vóley (aplicado)

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_medidas_cancha_superficies"
  nivel: "intermedio"
  tags: ["calculo", "area"]

respuesta: "162"
tipo: completar
respuestas_validas:
  - "162"

enunciado: "Si una cancha de vóley mide 18 metros de largo y 9 metros de ancho, ¿cuál es su área total en metros cuadrados?"

explicacion: |
  El área se obtiene multiplicando la base por la altura: 18 m × 9 m = 162 m².
```

### 24 — Identificación de cancha de fútbol

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_medidas_cancha_superficies"
  nivel: "basico"
  tags: ["identificacion", "dimensiones"]

variables:
  idx: uno_de([0, 1])
  datos: [["105m", "68m"], ["100m", "64m"]]

enunciado: "Una cancha con dimensiones de {datos[idx][0]} de largo por {datos[idx][1]} de ancho es una cancha de:"

opciones_explicitas: ["Tenis", "Fútbol", "Handball", "Rugby"]
respuesta: "Fútbol"
tipo: mc

explicacion: |
  Las canchas de fútbol reglamentarias varían entre 100-110 m de largo y 64-75 m de ancho, según la normativa FIFA.
```

### 25 — Perímetro de cancha de tenis

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_medidas_cancha_superficies"
  nivel: "avanzado"
  tags: ["calculo", "perimetro"]

respuesta: "64"
tipo: completar
respuestas_validas:
  - "64"

enunciado: "Calcula el perímetro de una cancha de tenis individual (23,77 m de largo y 8,23 m de ancho), redondeado al metro entero."

explicacion: |
  El perímetro es 2 × (23,77 + 8,23) = 2 × 32 = 64 metros.
```
