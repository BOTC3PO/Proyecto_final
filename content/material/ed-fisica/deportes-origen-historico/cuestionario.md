# Ed. Física — Deportes: origen histórico y país de origen (cuestionario, 25 preguntas VBLang)

> Tema: `EF8`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma) en 5 lotes concurrentes.
> Corregido a mano. Bugs de esta tanda: varias preguntas `tipo: vf`
> cuya `respuesta:` era un texto ("Inglaterra", "James Naismith",
> "mano") en vez de `verdadero`/`falso` (el tipo `vf` exige un
> booleano) — reclasificadas a `completar` o `mc` según correspondía;
> `tipo: vf` con `respuesta: "verdadero"`/`"falso"` entre comillas —
> sin comillas; `respuestas_validas` con el mismo valor repetido 3
> veces — recortado a una sola entrada.

---

### 1 — El nacimiento del fútbol

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_origen_historico"
  nivel: "basico"
  tags: ["futbol", "historia"]

tipo: completar

enunciado: "El fútbol moderno tiene su origen en el año 1863, con la creación de la Football Association, en el país de ___."

respuestas_validas:
  - "Inglaterra"
respuesta: "Inglaterra"

explicacion: |
  En 1863 se fundó la Football Association en Inglaterra, lo que permitió separar las reglas del fútbol de las del rugby.
```

### 2 — La creación del básquet

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_origen_historico"
  nivel: "basico"
  tags: ["basquet", "historia"]

tipo: completar

enunciado: "El básquet fue inventado por ___ en el año 1891 en los Estados Unidos."

respuestas_validas:
  - "James Naismith"
respuesta: "James Naismith"

explicacion: |
  James Naismith inventó el básquetbol en 1891 para mantener a sus alumnos activos durante el invierno.
```

### 3 — Elementos del primer básquet

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_origen_historico"
  nivel: "basico"
  tags: ["basquet", "historia"]

tipo: completar

enunciado: "En sus inicios, para jugar al básquet, se utilizaban ___ de durazno como canastas."

respuestas_validas:
  - "canastos"
respuesta: "canastos"

explicacion: |
  Originalmente, Naismith utilizó canastos de durazno colgados de las barandillas del gimnasio.
```

### 4 — La separación de reglas

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_origen_historico"
  nivel: "intermedio"
  tags: ["futbol", "reglas"]

tipo: completar

enunciado: "La creación de la Football Association en 1863 permitió la separación de las reglas del fútbol respecto a las del ___."

respuestas_validas:
  - "rugby"
respuesta: "rugby"

explicacion: |
  Antes de 1863, las reglas eran muy similares; la formalización de la FA permitió diferenciar el fútbol del rugby.
```

### 5 — Resumen de fechas y lugares

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_origen_historico"
  nivel: "basico"
  tags: ["historia", "datos"]

tipo: completar

enunciado: "El básquet nació en Estados Unidos y el fútbol nació en ___."

respuestas_validas:
  - "Inglaterra"
respuesta: "Inglaterra"

explicacion: |
  Recordamos que el básquet es estadounidense (1891) y el fútbol es inglés (1863).
```

### 6 — El creador del vóley

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_origen_historico"
  nivel: "basico"
  tags: ["voley", "historia"]

tipo: mc
opciones_explicitas: ["James Naismith", "William G. Morgan", "William J. Morgan", "Milo de Canova"]
respuesta: "William G. Morgan"

enunciado: "¿Quién inventó el vóley en Estados Unidos en 1895?"

explicacion: |
  El vóley fue creado por William G. Morgan como una alternativa de menor contacto físico al básquetbol.
```

### 7 — El propósito del vóley

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_origen_historico"
  nivel: "basico"
  tags: ["voley", "historia"]

tipo: vf
respuesta: verdadero

enunciado: "El vóley fue diseñado originalmente como una alternativa menos física al básquetbol."

explicacion: |
  Es verdadero. Morgan buscaba un deporte de menor intensidad física y contacto para personas de mayor edad o menos exigentes.
```

### 8 — Origen del handball

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_origen_historico"
  nivel: "basico"
  tags: ["handball", "historia"]

tipo: mc
opciones_explicitas: ["Europa del Sur", "Europa del Norte", "América del Norte", "Asia Oriental"]
respuesta: "Europa del Norte"

enunciado: "¿En qué región se desarrolló el handball a comienzos del siglo XX?"

explicacion: |
  El handball tiene sus raíces en el norte de Europa, específicamente en países como Alemania y Dinamarca.
```

### 9 — Países pioneros del handball

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_origen_historico"
  nivel: "basico"
  tags: ["handball", "historia"]

tipo: mc
opciones_explicitas: ["España y Francia", "Alemania y Dinamarca", "Brasil y Argentina", "Reino Unido y Suecia"]
respuesta: "Alemania y Dinamarca"

enunciado: "¿Qué países de Europa del Norte fueron clave en el desarrollo del handball?"

explicacion: |
  El desarrollo del handball se consolidó principalmente en Alemania y Dinamarca a principios del siglo XX.
```

### 10 — El año del nacimiento del vóley

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_origen_historico"
  nivel: "basico"
  tags: ["voley", "historia"]

tipo: vf
respuesta: verdadero

enunciado: "El vóley fue inventado en el año 1895."

explicacion: |
  Es verdadero. William G. Morgan presentó este deporte en 1895 en Estados Unidos.
```

### 11 — Antecesor del tenis

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_origen_historico"
  nivel: "basico"
  tags: ["tenis", "historia", "antecedentes"]

respuesta: "jeu de paume"
tipo: completar
respuestas_validas:
  - "jeu de paume"
  - "jeu de paume francés"

enunciado: "El tenis moderno tiene como antecesor directo al juego de pelota francés conocido como ___."

explicacion: |
  El 'jeu de paume' era un juego de pelota donde se golpeaba la bola con la palma de la mano, siendo el precursor fundamental del tenis actual.
```

### 12 — Cuna del tenis moderno

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_origen_historico"
  nivel: "basico"
  tags: ["tenis", "inglaterra", "siglo_xix"]

respuesta: "Inglaterra"
tipo: mc
opciones_explicitas: ["Francia", "Inglaterra", "España", "Estados Unidos"]

enunciado: "¿En qué país se desarrolló el tenis moderno durante la década de 1870?"

explicacion: |
  Aunque sus raíces son francesas, el tenis moderno tal como lo conocemos se consolidó en Inglaterra en la década de 1870.
```

### 13 — Cronología del tenis

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_origen_historico"
  nivel: "basico"
  tags: ["tenis", "siglo_xix"]

respuesta: "1870"
tipo: completar
respuestas_validas:
  - "1870"
  - "década de 1870"

enunciado: "El tenis moderno comenzó a desarrollarse formalmente en la década de ___."

explicacion: |
  Fue durante la década de 1870 cuando el deporte tomó la estructura y reglas que dieron inicio a la era moderna.
```

### 14 — El origen del golpe

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_origen_historico"
  nivel: "intermedio"
  tags: ["tenis", "tecnica", "historia"]

respuesta: "mano"
tipo: mc
opciones_explicitas: ["raqueta", "mano", "pala", "codo"]

enunciado: "En el antecesor directo del tenis, el 'jeu de paume', la pelota se golpeaba principalmente con la ___."

explicacion: |
  El nombre 'jeu de paume' significa literalmente 'juego de la palma', haciendo referencia a que se usaba la mano para golpear la pelota.
```

### 15 — Evolución del deporte

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_origen_historico"
  nivel: "basico"
  tags: ["tenis", "evolucion"]

respuesta: "Francia"
tipo: mc
opciones_explicitas: ["Inglaterra", "Francia", "Italia", "Alemania"]

enunciado: "¿De qué país proviene el antecesor directo del tenis, el jeu de paume?"

explicacion: |
  El juego de pelota francés (jeu de paume) es el origen histórico que luego evolucionó hacia el tenis moderno en Inglaterra.
```

### 16 — El origen del básquetbol y sus canastas

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_origen_historico"
  nivel: "basico"
  tags: ["basquet", "historia", "reglas"]

tipo: mc
opciones_explicitas: ["Canastas cerradas que dificultaban el marcador", "Reglas diseñadas para evitar el contacto físico", "El uso de balones de cuero pesado", "La prohibición de correr con el balón"]

respuesta: "Canastas cerradas que dificultaban el marcador"

enunciado: "En sus inicios, el básquetbol se jugaba con canastos de duraznos cerrados. ¿Cómo influyó este detalle en la dinámica del juego original?"

explicacion: |
  Originalmente, los canastos tenían fondo, por lo que cada vez que se anotaba era necesario usar una escalera para recuperar el balón, lo que resultaba en marcadores muy bajos.
```

### 17 — El fútbol y la delimitación del campo

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_origen_historico"
  nivel: "basico"
  tags: ["futbol", "reglas", "historia"]

tipo: vf
respuesta: verdadero

enunciado: "El concepto de 'fuera de juego' (offside) en el fútbol moderno tiene sus raíces en la necesidad de evitar que los atacantes se mantuvieran permanentemente cerca del arco contrario esperando el balón."

explicacion: |
  Es verdadero. Las reglas evolucionaron para fomentar el juego fluido y evitar que la táctica de "esperar en la línea de meta" invalidara la esencia competitiva del deporte.
```

### 18 — El origen del tenis y la red

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_origen_historico"
  nivel: "intermedio"
  tags: ["tenis", "evolucion", "reglas"]

tipo: mc
opciones_explicitas: ["La red era mucho más alta que la actual", "Se jugaba en espacios abiertos sin límites", "El uso de raquetas de madera pesadas", "La ausencia de un sistema de puntuación"]

respuesta: "La red era mucho más alta que la actual"

enunciado: "En las versiones más antiguas del 'jeu de paume' (antecesor del tenis), la altura de la red era significativamente distinta a la actual. ¿Qué impacto tenía esto en la técnica?"

explicacion: |
  La altura de la red determinaba la trayectoria de la pelota; al cambiar la altura y la tensión de la red, la técnica de golpeo y la estrategia de juego evolucionaron drásticamente.
```

### 19 — El origen del voleibol y la red

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_origen_historico"
  nivel: "basico"
  tags: ["voleibol", "historia", "reglas"]

tipo: vf
respuesta: falso

enunciado: "El voleibol fue creado originalmente con una red muy baja para permitir que los jugadores saltaran constantemente sobre ella."

explicacion: |
  Es falso. El voleibol fue diseñado por William G. Morgan como un deporte de menor intensidad que el básquetbol, utilizando una red alta para evitar el contacto físico y fomentar la agilidad sin choques.
```

### 20 — El origen del rugby y el contacto

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_origen_historico"
  nivel: "intermedio"
  tags: ["rugby", "historia", "contacto"]

tipo: mc
opciones_explicitas: ["La falta de reglas de contacto en el origen", "El uso de balones esféricos perfectos", "La intención de simular una batalla", "La prohibición de correr con el balón"]

respuesta: "La falta de reglas de contacto en el origen"

enunciado: "¿Cuál es la razón principal por la que el rugby mantiene una naturaleza de contacto físico intenso en comparación con otros deportes de pelota?"

explicacion: |
  El rugby evolucionó de juegos de contacto masivo donde la resistencia física y el choque eran elementos centrales de la identidad del juego desde su creación.
```

### 21 — Origen del fútbol (repaso)

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_origen_historico"
  nivel: "basico"
  tags: ["historia", "futbol"]

respuesta: "Inglaterra"
tipo: mc
opciones_explicitas: ["Inglaterra", "Francia", "España", "Italia"]

enunciado: "El fútbol moderno, tal como lo conocemos hoy con sus reglas actuales, tiene su origen en el país de:"

explicacion: |
  Las reglas modernas del fútbol fueron codificadas en Inglaterra durante el siglo XIX.
```

### 22 — El creador del básquet (repaso)

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_origen_historico"
  nivel: "basico"
  tags: ["historia", "basquet"]

respuesta: "James Naismith"
tipo: mc
opciones_explicitas: ["James Naismith", "William Morgan", "Abner Doubleday", "Charles Goodyear"]

enunciado: "El deporte de básquetbol fue inventado por el profesor:"

explicacion: |
  James Naismith inventó el básquetbol en 1891 en Estados Unidos.
```

### 23 — Origen del vóley (repaso)

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_origen_historico"
  nivel: "basico"
  tags: ["historia", "voley"]

respuesta: "William Morgan"
tipo: mc
opciones_explicitas: ["William Morgan", "James Naismith", "Mihailo", "George Hancock"]

enunciado: "El voleibol fue creado por ___ en Estados Unidos."

explicacion: |
  William Morgan inventó el voleibol en 1895 como una alternativa menos intensa al baloncesto.
```

### 24 — El origen del handball (repaso)

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_origen_historico"
  nivel: "basico"
  tags: ["historia", "handball"]

respuesta: "Europa del norte"
tipo: completar
respuestas_validas:
  - "Europa del norte"

enunciado: "El handball tiene su origen histórico en la región de ___."

explicacion: |
  El balonmano (handball) tiene sus raíces en países de Europa del norte.
```

### 25 — El origen del tenis (repaso)

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_origen_historico"
  nivel: "basico"
  tags: ["historia", "tenis"]

respuesta: "Inglaterra"
tipo: mc
opciones_explicitas: ["Inglaterra", "Francia", "Alemania", "Reino Unido"]

enunciado: "El tenis moderno tiene su origen en el país de:"

explicacion: |
  El tenis de césped se desarrolló y estandarizó en Inglaterra.
```
