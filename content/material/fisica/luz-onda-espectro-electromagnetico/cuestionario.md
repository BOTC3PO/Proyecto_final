# Fisica — Luz onda espectro electromagnetico (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El espectro electromagnético

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "basico"
  tags: ["ondas", "luz", "electromagnetismo"]

tipo: mc
opciones_explicitas: ["Ondas de radio", "Rayos X", "Luz visible", "Ondas de radio, microondas, infrarrojo, luz visible, UV, rayos X, rayos gamma"]

enunciado: "El espectro electromagnético es el conjunto de todas las posibles frecuencias de radiación. ¿Cuál de las siguientes opciones describe correctamente el orden de las ondas desde las de menor energía a las de mayor energía?"

respuesta: "Ondas de radio, microondas, infrarrojo, luz visible, UV, rayos X, rayos gamma"

explicacion: |
  El espectro electromagnético se organiza según la frecuencia y la energía. Las ondas de radio tienen la longitud de onda más larga y menor energía, mientras que los rayos gamma tienen la frecuencia más alta y mayor energía.
```

### 2 — La naturaleza de la luz

```
metadata:
  materia: "fisica"
  tema: "naturaleza_onda"
  nivel: "basico"
  tags: ["onda", "electromagnetismo"]

tipo: vf
respuesta: falso

enunciado: "La luz es una onda mecánica que requiere de un medio material (como el aire o el agua) para poder propagarse."

explicacion: |
  Falso. La luz es una onda electromagnética, lo que significa que no necesita un medio material para viajar; puede propagarse en el vacío.
```

### 3 — El espectro visible

```
metadata:
  materia: "fisica"
  tema: "luz_visible"
  nivel: "basico"
  tags: ["color", "espectro"]

tipo: completar
respuestas_validas:
  - "rojo"
respuesta: "rojo"

enunciado: "En el espectro de la luz visible, el color que se encuentra en el extremo de las longitudes de onda más largas es el color ___."

explicacion: |
  El color rojo tiene la longitud de onda más larga en el espectro visible.
```

### 4 — Relación frecuencia y longitud de onda

```
metadata:
  materia: "fisica"
  tema: "propiedades_ondas"
  nivel: "intermedio"
  tags: ["frecuencia", "longitud_de_onda"]

tipo: mc
opciones_explicitas: ["Directamente proporcional", "Inversamente proporcional", "No existe relación", "Depende del medio"]

enunciado: "En una onda electromagnética, la relación entre la frecuencia ($f$) y la longitud de onda ($\\lambda$) es:"

respuesta: "Inversamente proporcional"

explicacion: |
  Dado que la velocidad de la luz $c = \lambda \cdot f$ es constante en el vacío, si la frecuencia aumenta, la longitud de onda debe disminuir para mantener la igualdad.
```

### 5 — Orden del espectro

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "intermedio"
  tags: ["orden", "espectro"]

tipo: ordenar
opciones_explicitas: ["Infrarrojo", "Luz visible", "Ultravioleta", "Rayos X"]
respuesta_orden: ["Infrarrojo", "Luz visible", "Ultravioleta", "Rayos X"]

enunciado: "Ordene las siguientes radiaciones de menor frecuencia a mayor frecuencia:"

explicacion: |
  El orden correcto de menor a mayor frecuencia es: Infrarrojo, Luz visible, Ultravioleta y finalmente Rayos X.
```

### 6 — Relación entre frecuencia y longitud de onda

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "intermedio"
  tags: ["ondas", "luz", "calculo"]

variables:
  c: c
  f: 5.0e14

respuesta: c / f
tipo: completar
tolerancia_abs: 1e6

enunciado: "Si una onda electromagnética tiene una frecuencia de {f} Hz, ¿cuál es su longitud de onda en metros? (Usa la velocidad de la luz c = {c} m/s)"

pasos:
  - "Identificar la relación fundamental: c = λ * f"
  - "Despejar la longitud de onda: λ = c / f"
  - "Sustituir los valores: λ = 3.0e8 / 5.0e14"

explicacion: |
  La longitud de onda (λ) se calcula dividiendo la velocidad de la luz (c) por la frecuencia (f). 
  Para f = 5.0e14 Hz, λ = 6.0e-7 m (o 600 nm), que corresponde al color naranja en el espectro visible.
```

### 7 — Identificación del espectro

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "basico"
  tags: ["espectro", "teoria"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["Rayos X", "frecuencias muy altas y alta energía", "longitudes de onda muy cortas"], ["Ondas de radio", "frecuencias muy bajas y baja energía", "longitudes de onda muy largas"], ["Luz visible", "frecuencias intermedias", "longitudes de onda intermedias"]]

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["Rayos X", "Ondas de radio", "Luz visible"]

enunciado: "De acuerdo a la escala del espectro electromagnético, ¿cuál de las siguientes categorías tiene {datos[idx][2]}?"

explicacion: |
  El espectro se organiza según la energía: a mayor frecuencia, menor longitud de onda. 
  Las {datos[idx][0]} se caracterizan por tener {datos[idx][1]}.
```

### 8 — Orden de magnitud de las ondas

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "basico"
  tags: ["ordenar", "espectro"]

respuesta_orden: ["Ondas de radio", "Luz visible", "Rayos gamma"]
tipo: ordenar
opciones_explicitas: ["Rayos gamma", "Luz visible", "Ondas de radio"]

enunciado: "Ordena las siguientes ondas de mayor longitud de onda a menor longitud de onda:"

explicacion: |
  Las ondas de radio tienen las longitudes de onda más largas (metros/kilómetros), 
  seguidas por la luz visible (nanómetros) y finalmente los rayos gamma (picómetros).
```

### 9 — Veracidad de la velocidad de la luz

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "basico"
  tags: ["teoria", "velocidad"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es verdadero o falso que todas las ondas del espectro electromagnético (desde radio hasta gamma) viajan a la misma velocidad en el vacío?"

explicacion: |
  Es verdadero. Todas las ondas electromagnéticas, sin importar su frecuencia, viajan a la misma velocidad (c ≈ 3×10⁸ m/s) en el vacío; esa es precisamente la constante universal que las une.
```

### 10 — Cálculo de energía de un fotón

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "avanzado"
  tags: ["cuantica", "energia", "fotón"]

variables:
  h: h
  f: 6.0e15

respuesta: h * f
tipo: completar
tolerancia_abs: 1e-20

enunciado: "Calcula la energía (en Joules) de un fotón de luz violeta con una frecuencia de {f} Hz. (Usa la constante de Planck h = {h} J·s)"

pasos:
  - "Usar la ecuación de Planck: E = h * f"
  - "Sustituir h = 6.626e-34 y f = 6.0e15"
  - "E = 6.626e-34 * 6.0e15"

explicacion: |
  La energía de un fotón es directamente proporcional a su frecuencia según la fórmula E = h * f.
  Para una frecuencia de 6.0e15 Hz, la energía es aproximadamente 3.9756e-18 J.
```

### 11 — ¿Qué es el vacío para la luz?

```
metadata:
  materia: "fisica"
  tema: "onda_electromagnetica"
  nivel: "basico"
  tags: ["luz", "vacío", "propagación"]

respuesta: verdadero
tipo: vf

enunciado: "La luz puede propagarse a través del vacío sin necesidad de un medio material (como el aire o el agua)."

explicacion: |
  A diferencia de las ondas mecánicas (como el sonido), las ondas electromagnéticas como la luz consisten en campos eléctricos y magnéticos oscilantes que se auto-propagan en el vacío.
```

### 12 — Orden de las longitudes de onda

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "basico"
  tags: ["orden", "espectro", "longitud_de_onda"]

opciones_explicitas: ["Ondas de radio", "Microondas", "Luz visible", "Rayos X"]

respuesta_orden: ["Ondas de radio", "Microondas", "Luz visible", "Rayos X"]
tipo: ordenar

enunciado: "Ordena las siguientes radiaciones de la que tiene mayor longitud de onda a la que tiene menor longitud de onda:"

pasos:
  - "Identifica la radiación con mayor longitud de onda (menor frecuencia)."
  - "Identifica la radiación con menor longitud de onda (mayor frecuencia)."

explicacion: |
  En el espectro electromagnético, la longitud de onda es inversamente proporcional a la energía. Las ondas de radio tienen longitudes de onda kilométricas, mientras que los rayos X tienen longitudes de onda atómicas.
```

### 13 — El error de la velocidad de la luz

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "intermedio"
  tags: ["velocidad", "luz", "vacío"]

variables:
  datos: [["menor"], ["menor"]]
  idx: uno_de([0])

enunciado: "Si la luz viaja por un medio transparente como el vidrio, su velocidad es ___ que la velocidad de la luz en el vacío ($c$)."

opciones_explicitas:
  - "mayor"
  - "menor"

respuesta: datos[idx][0]
tipo: mc

explicacion: |
  Aunque la luz viaja a su velocidad máxima en el vacío, al interactuar con los átomos de un medio material (como el vidrio o el agua), su velocidad efectiva disminuye. Esto es lo que da origen al índice de refracción.
```

### 14 — El color de la luz visible

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "intermedio"
  tags: ["color", "visible", "frecuencia"]

variables:
  datos: [["rojo", "violeta"], ["rojo", "violeta"]]
  idx: uno_de([0, 1])

enunciado: "Dentro del espectro visible, el color que posee la mayor frecuencia (y por lo tanto la mayor energía por fotón) es el ___."

opciones_explicitas:
  - "rojo"
  - "violeta"

respuesta: datos[idx][1]
tipo: mc

explicacion: |
  El espectro visible va desde el rojo (baja frecuencia, larga longitud de onda) hasta el violeta (alta frecuencia, corta longitud de onda).
```

### 15 — Relación frecuencia y energía

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "avanzado"
  tags: ["frecuencia", "energía", "rayos_gamma"]

enunciado: "Los rayos gamma tienen una frecuencia extremadamente ___ que la luz visible, lo que les permite ser altamente ionizantes."

opciones_explicitas:
  - "alta"
  - "baja"

respuesta: "alta"
tipo: mc

explicacion: |
  La energía de un fotón es directamente proporcional a su frecuencia ($E = h \cdot f$). Por eso, los rayos gamma, al tener frecuencias altísimas, tienen una energía capaz de arrancar electrones de los átomos.
```

### 16 — Longitudes de onda y energía

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "basico"
  tags: ["ondas", "energia", "espectro"]

respuesta: "rayos_gamma"
tipo: completar
respuestas_validas:
  - "rayos_gamma"

enunciado: "En el espectro electromagnético, mientras que las ondas de radio tienen longitudes de onda muy largas, los ___ poseen las longitudes de onda más cortas y la mayor energía."

explicacion: |
  La energía de un fotón es inversamente proporcional a su longitud de onda ($E = hc/\lambda$). Por lo tanto, a menor longitud de onda, mayor energía.
```

### 17 — El espectro visible

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "intermedio"
  tags: ["luz_visible", "color", "frecuencia"]

variables:
  idx: uno_de([0, 1])
  datos: [["rojo", "frecuencia baja"], ["verde", "frecuencia media"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["frecuencia baja", "frecuencia alta", "frecuencia media"]

enunciado: "Si comparamos la luz visible con el resto del espectro, el color {datos[idx][0]} se caracteriza por tener una {datos[idx][1]} en comparación con el color azul."

explicacion: |
  El espectro visible es una pequeña franja. El rojo tiene la longitud de onda más larga (menor frecuencia) y el violeta/azul la más corta (mayor frecuencia).
```

### 18 — Naturaleza de las ondas electromagnéticas

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "basico"
  tags: ["ondas", "propagacion"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que las ondas electromagnéticas, como la luz, requieren de un medio material (como el aire o el agua) para propagarse, a diferencia de las ondas mecánicas?"

explicacion: |
  Falso. Las ondas electromagnéticas se propagan en el vacío debido a la oscilación de campos eléctricos y magnéticos acoplados, mientras que las mecánicas (como el sonido) sí requieren un medio.
```

### 19 — Orden de las ondas por frecuencia

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "intermedio"
  tags: ["orden", "espectro"]

respuesta_orden: ["ondas_radio", "microondas", "infrarrojo", "luz_visible", "ultravioleta", "rayos_x", "rayos_gamma"]
tipo: ordenar
opciones_explicitas: ["ondas_radio", "microondas", "infrarrojo", "luz_visible", "ultravioleta", "rayos_x", "rayos_gamma"]

enunciado: "Ordene las siguientes radiaciones de MENOR a MAYOR frecuencia:"

explicacion: |
  La frecuencia aumenta a medida que la longitud de onda disminuye en el espectro electromagnético.
```

### 20 — El límite de la visión humana

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "basico"
  tags: ["luz_visible", "espectro"]

respuesta: "longitud de onda menor"
tipo: mc
opciones_explicitas: ["longitud de onda mayor", "longitud de onda menor"]

enunciado: "La luz visible es el rango que el ojo humano puede detectar. El límite que se encuentra por encima del violeta (hacia el ultravioleta) se define por tener una ___."

explicacion: |
  El ultravioleta tiene frecuencias más altas y longitudes de onda más cortas que el límite superior del espectro visible.
```

### 21 — El uso de controles remotos

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "basico"
  tags: ["luz_visible", "infrarrojo", "tecnologia"]

respuesta: "infrarrojo"
tipo: mc
opciones_explicitas: ["infrarrojo", "luz visible", "ultravioleta", "rayos x"]

enunciado: "Un control remoto de televisión emite una radiación que no es perceptible para el ojo humano, situándose por debajo de la frecuencia de la luz visible. ¿Qué tipo de radiación es?"

explicacion: |
  El control remoto utiliza luz infrarroja, la cual tiene una longitud de onda mayor y una frecuencia menor que la luz visible.
```

### 22 — La importancia de la radiación UV

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "intermedio"
  tags: ["ultravioleta", "ionizante", "salud"]

respuesta: verdadero
tipo: vf

enunciado: "La radiación ultravioleta tiene una energía mayor que la luz visible y puede ser ionizante, lo que significa que tiene suficiente energía para arrancar electrones de los átomos."

explicacion: |
  Verdadero. Los fotones UV tienen suficiente energía para romper enlaces químicos y causar daños en el ADN, por eso se consideran radiación ionizante.
```

### 23 — Identificación de la radiación de alta energía

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "avanzado"
  tags: ["rayos_gamma", "frecuencia", "energia"]

variables:
  caso_idx: uno_de([0,1])
  casos: [["rayos gamma", "1e22"], ["rayos x", "1e18"]]

respuesta: casos[caso_idx][1]
tipo: completar
respuestas_validas:
  - "1e22"
  - "1e18"

enunciado: "En un experimento de física nuclear, se detecta una radiación con una frecuencia extremadamente alta de ___ Hz, lo cual corresponde a la categoría de {casos[caso_idx][0]}."

explicacion: |
  Los rayos gamma poseen las frecuencias más altas del espectro electromagnético, superando con creces a los rayos X.
```

### 24 — Orden de las ondas en el espectro

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "basico"
  tags: ["orden", "espectro", "frecuencia"]

respuesta_orden: ["radio", "microondas", "infrarrojo", "luz visible", "ultravioleta", "rayos gamma"]
tipo: ordenar
opciones_explicitas: ["radio", "microondas", "infrarrojo", "luz visible", "ultravioleta", "rayos gamma"]

enunciado: "Ordena las siguientes radiaciones de menor a mayor frecuencia (de la onda más larga a la más corta):"

explicacion: |
  El espectro aumenta su frecuencia (y disminuye su longitud de onda) siguiendo el orden: Radio < Microondas < Infrarrojo < Visible < UV < Rayos X < Gamma.
```

### 25 — El espectro visible y la percepción

```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "intermedio"
  tags: ["luz_visible", "color", "frecuencia"]

variables:
  color_idx: uno_de([0,1])
  colores: [["rojo", "baja"], ["azul", "alta"]]

respuesta: colores[color_idx][1]
tipo: mc
opciones_explicitas: ["baja", "alta", "media", "nula"]

enunciado: "Si un observador percibe un color de color {colores[color_idx][0]}, está viendo una parte del espectro visible con una frecuencia {colores[color_idx][1]} en comparación al color {colores[1-color_idx][0]}."

explicacion: |
  En el espectro visible, el rojo tiene la longitud de onda más larga (frecuencia más baja) y el violeta/azul la más corta (frecuencia más alta).
```
