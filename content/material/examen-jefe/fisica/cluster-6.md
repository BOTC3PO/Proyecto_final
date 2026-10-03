# Examen jefe — [PENDIENTE #741]

> Logro #741. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **143 preguntas totales** en 5/5 secciones.

---

## Sección: luz-onda-espectro-electromagnetico (25 preguntas)

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

## Sección: movimiento-circular-y-fuerza-centripeta (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "basico"
  tags: ["mcu", "vocabulario"]

enunciado: "¿Qué caracteriza al movimiento circular uniforme (MCU)?"
tipo: mc
opciones_explicitas:
  - "Un objeto recorre una circunferencia manteniendo su rapidez (magnitud de la velocidad) constante"
  - "Un objeto recorre una circunferencia acelerando cada vez más rápido"
  - "Un objeto se mueve en línea recta a velocidad constante"
respuesta: "Un objeto recorre una circunferencia manteniendo su rapidez (magnitud de la velocidad) constante"

explicacion: |
  La rapidez no cambia, pero la dirección de la velocidad sí — por eso
  igual hay aceleración.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "intermedio"
  tags: ["mcu"]

respuesta: falso
tipo: vf

enunciado: "En el movimiento circular uniforme, la velocidad (como vector, con magnitud y dirección) es constante."

explicacion: |
  La magnitud no cambia, pero la dirección sí (siempre tangente a la
  circunferencia) — por eso el vector velocidad no es constante.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "intermedio"
  tags: ["mcu"]

respuesta: verdadero
tipo: vf

enunciado: "En el movimiento circular uniforme, la rapidez (la magnitud de la velocidad, sin importar la dirección) es constante."

explicacion: |
  Es justamente lo que lo hace "uniforme" — la palabra se refiere a la
  rapidez, no a la velocidad completa.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "basico"
  tags: ["mcu", "completar"]

tipo: completar
enunciado: "Completá: el tiempo que tarda un objeto en dar una vuelta completa se llama ___ (símbolo T)."
respuestas_validas:
  - "período"
  - "periodo"

explicacion: |
  Se mide en segundos.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "basico"
  tags: ["mcu", "completar"]

tipo: completar
enunciado: "Completá: la cantidad de vueltas por segundo, f=1/T, se llama ___ (unidad Hz)."
respuestas_validas:
  - "frecuencia"

explicacion: |
  Frecuencia y período son inversos entre sí.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "intermedio"
  tags: ["mcu", "problema"]

variables:
  T: uno_de([2, 4, 5, 8, 10])

respuesta: redondear(1 / T, 3)
tipo: input
tolerancia_abs: 0.01
unidad: "Hz"

enunciado: "Un objeto en MCU completa una vuelta cada {T} s. ¿Cuál es su frecuencia?"

pasos:
  - "f = 1 / T = 1 / {T} = {redondear(1 / T, 3)} Hz"

explicacion: |
  f y T son inversos: a mayor período, menor frecuencia.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "intermedio"
  tags: ["mcu", "problema"]

variables:
  f: uno_de([0.1, 0.2, 0.25, 0.5, 2, 4])

respuesta: redondear(1 / f, 3)
tipo: input
tolerancia_abs: 0.01
unidad: "s"

enunciado: "Un objeto en MCU gira con una frecuencia de {f} Hz. ¿Cuál es su período?"

pasos:
  - "T = 1 / f = 1 / {f} = {redondear(1 / f, 3)} s"

explicacion: |
  T y f son inversos: a mayor frecuencia, menor período.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "avanzado"
  tags: ["mcu", "problema"]

variables:
  T: uno_de([2, 4, 5, 8, 10])

respuesta: redondear(2 * pi / T, 3)
tipo: input
tolerancia_abs: 0.02
unidad: "rad/s"

enunciado: "Un objeto en MCU completa una vuelta cada {T} s. ¿Cuál es su velocidad angular ω?"

pasos:
  - "ω = 2π / T = 2×π / {T} = {redondear(2 * pi / T, 3)} rad/s"

explicacion: |
  Una vuelta completa equivale a un ángulo de 2π radianes.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "intermedio"
  tags: ["mcu", "problema"]

variables:
  omega: uno_de([1, 2, 3, 4, 5])
  r: random(1, 5)

respuesta: omega * r
tipo: input
unidad: "m/s"

enunciado: "Un objeto gira con velocidad angular ω={omega} rad/s en un círculo de radio {r} m. ¿Cuál es su velocidad tangencial?"

pasos:
  - "v = ω × r = {omega} × {r} = {omega * r} m/s"

explicacion: |
  La velocidad tangencial es directamente proporcional al radio, para
  una misma velocidad angular.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "avanzado"
  tags: ["mcu", "problema"]

variables:
  r: random(1, 5)
  T: uno_de([2, 4, 5, 8, 10])

respuesta: redondear(2 * pi * r / T, 2)
tipo: input
tolerancia_abs: 0.05
unidad: "m/s"

enunciado: "Un objeto recorre un círculo de radio {r} m, completando una vuelta cada {T} s. ¿Cuál es su velocidad tangencial?"

pasos:
  - "v = 2π×r / T = 2×π×{r} / {T} = {redondear(2 * pi * r / T, 2)} m/s"

explicacion: |
  En una vuelta recorre el perímetro de la circunferencia (2π×r), en
  un tiempo T.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "avanzado"
  tags: ["mcu", "problema"]

variables:
  v: random(2, 20)
  r: random(1, 10)

respuesta: redondear(v ^ 2 / r, 2)
tipo: input
tolerancia_abs: 0.1
unidad: "m/s²"

enunciado: "Un objeto en MCU tiene una velocidad tangencial de {v} m/s en un círculo de radio {r} m. ¿Cuál es su aceleración centrípeta?"

pasos:
  - "a_c = v² / r = {v}² / {r} = {redondear(v ^ 2 / r, 2)} m/s²"

explicacion: |
  Apunta siempre hacia el centro del círculo.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "avanzado"
  tags: ["mcu", "problema"]

variables:
  m: random(1, 10)
  v: random(2, 20)
  r: random(1, 10)

respuesta: redondear(m * v ^ 2 / r, 2)
tipo: input
tolerancia_abs: 0.2
unidad: "N"

enunciado: "Un objeto de {m} kg gira con velocidad tangencial {v} m/s en un círculo de radio {r} m. ¿Cuál es la fuerza centrípeta necesaria?"

pasos:
  - "F_c = m × v² / r = {m} × {v}² / {r} = {redondear(m * v ^ 2 / r, 2)} N"

explicacion: |
  Es la fuerza neta (real) que debe apuntar hacia el centro para
  mantener esa trayectoria circular.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "basico"
  tags: ["mcu"]

enunciado: "¿Hacia dónde apunta la aceleración centrípeta en cada instante?"
tipo: mc
opciones_explicitas:
  - "Hacia el centro del círculo"
  - "En la misma dirección que la velocidad"
  - "Hacia afuera del círculo"
respuesta: "Hacia el centro del círculo"

explicacion: |
  Es lo que constantemente "curva" la trayectoria, cambiando la
  dirección de la velocidad sin cambiar su magnitud.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "avanzado"
  tags: ["mcu"]

enunciado: "¿Qué es exactamente la 'fuerza centrípeta'?"
tipo: mc
opciones_explicitas:
  - "El nombre que se le da a la fuerza neta (real) cuando su resultante apunta hacia el centro de una trayectoria circular"
  - "Un tipo de fuerza física distinto de la gravedad, la tensión o el rozamiento"
  - "Una fuerza que sólo existe en el espacio, sin gravedad"
respuesta: "El nombre que se le da a la fuerza neta (real) cuando su resultante apunta hacia el centro de una trayectoria circular"

explicacion: |
  No se suma a las demás fuerzas — es cómo se llama a la resultante de
  las fuerzas reales que ya actúan, cuando el objeto se mueve en
  círculo.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "intermedio"
  tags: ["mcu", "aplicacion"]

enunciado: "En un auto que toma una curva a velocidad constante, ¿qué fuerza real actúa como fuerza centrípeta?"
tipo: mc
opciones_explicitas:
  - "El rozamiento entre las ruedas y el asfalto"
  - "El peso del auto"
  - "La fuerza del motor"
respuesta: "El rozamiento entre las ruedas y el asfalto"

explicacion: |
  Si el asfalto está mojado o helado (rozamiento muy bajo), el auto no
  logra la fuerza centrípeta necesaria y se sale de la curva.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "intermedio"
  tags: ["mcu", "aplicacion"]

enunciado: "En un satélite en órbita circular alrededor de la Tierra, ¿qué fuerza real actúa como fuerza centrípeta?"
tipo: mc
opciones_explicitas:
  - "La gravedad de la Tierra"
  - "El rozamiento con la atmósfera"
  - "Los motores del satélite, funcionando constantemente"
respuesta: "La gravedad de la Tierra"

explicacion: |
  Es la misma gravedad de `../gravitacion-universal/`, actuando ahora
  como la fuerza que mantiene la órbita circular.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "basico"
  tags: ["mcu", "aplicacion"]

enunciado: "Al hacer girar una piedra atada a una cuerda, ¿qué fuerza real actúa como fuerza centrípeta?"
tipo: mc
opciones_explicitas:
  - "La tensión de la cuerda"
  - "El peso de la piedra"
  - "El rozamiento del aire"
respuesta: "La tensión de la cuerda"

explicacion: |
  La cuerda tira de la piedra hacia el centro, todo el tiempo.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "intermedio"
  tags: ["mcu"]

respuesta: falso
tipo: vf

enunciado: "Si se corta la cuerda de una piedra que gira, la piedra sigue moviéndose en círculo por inercia."

explicacion: |
  Sin la tensión (la fuerza centrípeta), ya no hay nada que la
  desvíe hacia el centro — sale disparada en línea recta, tangente al
  punto donde se cortó la cuerda (primera ley de Newton).
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "avanzado"
  tags: ["mcu", "ordenar"]

enunciado: "Ordená los pasos para calcular la fuerza centrípeta, sabiendo la masa, el radio y el período."
tipo: ordenar
opciones_explicitas:
  - "Multiplicar por la masa para obtener la fuerza: F_c = m × a_c"
  - "Calcular la velocidad tangencial: v = 2π×r / T"
  - "Calcular la aceleración centrípeta: a_c = v² / r"
respuesta_orden: ["Calcular la velocidad tangencial: v = 2π×r / T", "Calcular la aceleración centrípeta: a_c = v² / r", "Multiplicar por la masa para obtener la fuerza: F_c = m × a_c"]
explicacion: |
  Cada paso usa el resultado del anterior.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "avanzado"
  tags: ["mcu"]

respuesta: verdadero
tipo: vf

enunciado: "Si la velocidad tangencial se mantiene igual pero el radio del círculo es mayor, la aceleración centrípeta es menor."

explicacion: |
  a_c = v²/r: con v fijo, a mayor r, menor a_c (relación inversa).
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "avanzado"
  tags: ["mcu"]

respuesta: verdadero
tipo: vf

enunciado: "Si el radio se mantiene igual, duplicar la velocidad tangencial más que duplica la aceleración centrípeta (la cuadruplica)."

explicacion: |
  a_c = v²/r: la velocidad entra al cuadrado, así que duplicarla
  multiplica a_c por 2² = 4.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "avanzado"
  tags: ["mcu", "problema"]

variables:
  m: random(1, 5)
  r: random(1, 4)
  T: uno_de([2, 4, 5])
  v: redondear(2 * pi * r / T, 3)

respuesta: redondear(m * v ^ 2 / r, 2)
tipo: input
tolerancia_abs: 0.3
unidad: "N"

enunciado: "Un objeto de {m} kg gira en un círculo de radio {r} m, completando una vuelta cada {T} s (su velocidad tangencial es v={v} m/s). ¿Cuál es la fuerza centrípeta necesaria?"

pasos:
  - "v = 2π×r / T = {v} m/s"
  - "F_c = m × v² / r = {m} × {v}² / {r} = {redondear(m * v ^ 2 / r, 2)} N"

explicacion: |
  Combina las dos fórmulas: primero la velocidad tangencial a partir
  del período, después la fuerza centrípeta a partir de esa velocidad.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "basico"
  tags: ["mcu", "aplicacion"]

enunciado: "¿Por qué las curvas de las rutas y autódromos suelen tener 'peralte' (una inclinación hacia el centro de la curva)?"
tipo: mc
opciones_explicitas:
  - "Para que parte del peso del auto ayude a generar la fuerza centrípeta necesaria, sin depender sólo del rozamiento"
  - "Para que los autos vayan más lento"
  - "El peralte no tiene relación con la física del movimiento circular"
respuesta: "Para que parte del peso del auto ayude a generar la fuerza centrípeta necesaria, sin depender sólo del rozamiento"

explicacion: |
  Con la pista inclinada, la componente del peso hacia el centro suma
  a la fuerza centrípeta, permitiendo tomar la curva a más velocidad de
  forma segura.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "basico"
  tags: ["mcu", "aplicacion"]

enunciado: "¿Cómo separa el agua de la ropa una centrifugadora de lavarropas?"
tipo: mc
opciones_explicitas:
  - "El tambor gira rápido y sólo la ropa (sujeta a las paredes) recibe suficiente fuerza centrípeta; el agua, más libre, se escapa por los agujeros en línea recta"
  - "El agua es atraída hacia el centro por gravedad"
  - "El calor del motor evapora el agua"
respuesta: "El tambor gira rápido y sólo la ropa (sujeta a las paredes) recibe suficiente fuerza centrípeta; el agua, más libre, se escapa por los agujeros en línea recta"

explicacion: |
  Es la misma idea que la piedra sin cuerda: sin suficiente fuerza
  hacia el centro, un objeto sigue en línea recta (tangente) en vez de
  la trayectoria circular.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender el movimiento circular y la fuerza centrípeta?"
tipo: mc
opciones_explicitas:
  - "Para describir cualquier trayectoria circular (período, velocidad, aceleración) y saber qué fuerza real la mantiene en ese círculo"
  - "Sólo aplica a objetos que giran atados con una cuerda"
  - "Sólo aplica en el espacio, sin gravedad"
respuesta: "Para describir cualquier trayectoria circular (período, velocidad, aceleración) y saber qué fuerza real la mantiene en ese círculo"

explicacion: |
  Desde un satélite hasta una curva de ruta, la misma matemática
  (T, ω, v, a_c, F_c) describe cualquier movimiento circular.
```

## Sección: dualidad-onda-particula (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "basico"
  tags: ["conceptos", "naturaleza_luz"]

respuesta: "onda"
tipo: "completar"
respuestas_validas:
  - "onda"

enunciado: "Cuando la luz presenta fenómenos como la difracción o la interferencia, se comporta como una ___."

explicacion: |
  La difracción y la interferencia son fenómenos característicos de las ondas.
```

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "basico"
  tags: ["fotón", "particula"]

respuesta: verdadero
tipo: "vf"

enunciado: "Un fotón es una partícula elemental de luz que no tiene masa en reposo."

explicacion: |
  Correcto. El fotón es el cuanto de la radiación electromagnética y su masa en reposo es cero.
```

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "basico"
  tags: ["materia", "de_broglie"]

respuesta: "particula"
tipo: "mc"
opciones_explicitas: ["onda", "particula", "gas", "plasma"]

enunciado: "Según la hipótesis de De Broglie, la materia (como un electrón) también posee una naturaleza de:"

explicacion: |
  La dualidad establece que tanto la luz como la materia tienen propiedades ondulatorias y de partícula.
```

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "intermedio"
  tags: ["planck", "energia"]

respuesta: "Planck"
tipo: "completar"
respuestas_validas:
  - "Planck"

enunciado: "La constante que relaciona la energía de un fotón con su frecuencia es la constante de ___."

explicacion: |
  La ecuación es E = h * f, donde h es la constante de Planck.
```

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "basico"
  tags: ["experimento", "Young"]

respuesta: "interferencia"
tipo: "mc"
opciones_explicitas: ["interferencia", "colisión", "dispersión", "reflexión"]

enunciado: "El patrón de franjas brillantes y oscuras observado en el experimento de la doble rendija con luz es un patrón de:"

explicacion: |
  La interferencia es la superposición de ondas que crea este patrón característico.
```

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "intermedio"
  tags: ["calculo", "de_broglie"]

variables:
  idx: uno_de([0, 1])
  datos: [[1.0e-24, 1.0e24], [2.0e-24, 5.0e23]]

respuesta: datos[idx][1]
tipo: "completar"
tolerancia_abs: 1e20

enunciado: "Si un electrón tiene un momento lineal de {datos[idx][0]} kg·m/s, su longitud de onda de De Broglie es aproximadamente ___ m (asumiendo h = 1)."

pasos:
  - "Calcular lambda = h / p"
  - "Sustituir el valor de p dado"

explicacion: |
  La fórmula es lambda = h / p = 1 / {datos[idx][0]} = {datos[idx][1]} m.
```

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "intermedio"
  tags: ["fotoeléctrico", "einstein"]

respuesta: verdadero
tipo: "vf"

enunciado: "El efecto fotoeléctrico fue la evidencia experimental que confirmó la naturaleza corpuscular de la luz."

explicacion: |
  Einstein explicó este efecto mediante la existencia de cuantos de energía (fotones).
```

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "intermedio"
  tags: ["velocidad", "relatividad"]

respuesta: "mayor"
tipo: "mc"
opciones_explicitas: ["mayor", "menor", "igual", "nula"]

enunciado: "A medida que la velocidad de una partícula aumenta, su momento lineal aumenta, por lo que su longitud de onda de De Broglie es ___."

explicacion: |
  Como lambda = h/p, si el momento (p) aumenta, la longitud de onda (lambda) disminuye.
```

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "avanzado"
  tags: ["electrones", "cuantica"]

respuesta: verdadero
tipo: "vf"

enunciado: "Si lanzamos electrones uno por uno a través de una doble rendija, eventualmente se observa un patrón de interferencia."

explicacion: |
  Incluso lanzando partículas individuales, la naturaleza ondulatoria de cada una permite la interferencia con su propia probabilidad de posición.
```

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "intermedio"
  tags: ["relacion", "formula"]

respuesta: "inversamente"
tipo: "completar"
respuestas_validas:
  - "inversamente"

enunciado: "La longitud de onda de De Broglie es ___ proporcional al momento lineal de la partícula."

explicacion: |
  Es una relación inversa: a mayor momento, menor longitud de onda.
```

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "basico"
  tags: ["error", "fotón"]

respuesta: falso
tipo: "vf"

enunciado: "Un fotón tiene una masa de reposo mayor que un electrón."

explicacion: |
  Falso. El fotón no tiene masa en reposo.
```

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "intermedio"
  tags: ["ordenar", "proceso"]

opciones_explicitas: ["Emisión de fotón", "Interacción con material", "Detección de señal"]
respuesta_orden: ["Emisión de fotón", "Interacción con material", "Detección de señal"]
tipo: "ordenar"

enunciado: "Ordena los pasos de un proceso de detección de luz mediante el efecto fotoeléctrico:"

explicacion: |
  Primero se emite la luz, luego interactúa con el metal y finalmente se detecta la corriente.
```

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "intermedio"
  tags: ["comparacion"]

respuesta: "particula"
tipo: "mc"
opciones_explicitas: ["onda", "particula", "campo", "energía"]

enunciado: "Cuando la luz deposita su energía en un punto localizado de un detector, se comporta como una:"

explicacion: |
  El depósito localizado de energía es una característica del comportamiento corpuscular.
```

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "avanzado"
  tags: ["heisenberg", "incertidumbre"]

respuesta: "posición"
tipo: "completar"
respuestas_validas:
  - "posición"

enunciado: "El principio de incertidumbre de Heisenberg establece que no podemos conocer simultáneamente con precisión la ___ y el momento de una partícula."

explicacion: |
  Es el principio fundamental de la mecánica cuántica.
```

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "intermedio"
  tags: ["error", "frecuencia"]

respuesta: falso
tipo: "vf"

enunciado: "Si duplicamos la frecuencia de una onda electromagnética, su energía se reduce a la mitad."

explicacion: |
  Falso. Según E = h*f, la energía es directamente proporcional a la frecuencia.
```

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "avanzado"
  tags: ["calculo", "rayos_x"]

variables:
  h_val: 6.6e-34

respuesta: 1
tipo: "completar"
tolerancia_abs: 0.001

enunciado: "Si la constante de Planck es {h_val} J·s y un fotón tiene una energía de {h_val} J, su frecuencia es ___ Hz."

pasos:
  - "Usar f = E / h"

explicacion: |
  Como E = h * f, si E = h, entonces f = E/h = 1.
```

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "basico"
  tags: ["vacío", "luz"]

respuesta: "onda"
tipo: "mc"
opciones_explicitas: ["onda", "particula", "ambas", "ninguna"]

enunciado: "En el vacío, la luz se propaga como una ___ electromagnética."

explicacion: |
  La propagación en el vacío se describe mediante las ecuaciones de Maxwell como una onda.
```

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "avanzado"
  tags: ["macro", "de_broglie"]

respuesta: falso
tipo: "vf"

enunciado: "Los objetos macroscópicos, como una pelota de béisbol, muestran efectos de difracción claramente visibles debido a su naturaleza ondulatoria."

explicacion: |
  Aunque teóricamente tienen longitud de onda, su masa es tan grande que la longitud de onda es imperceptible.
```

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "intermedio"
  tags: ["comparacion"]

respuesta: "masa"
tipo: "mc"
opciones_explicitas: ["masa", "carga", "frecuencia", "velocidad"]

enunciado: "La principal diferencia entre un fotón y un electrón es que el electrón posee ___."

explicacion: |
  El electrón tiene masa en reposo y carga eléctrica; el fotón no.
```

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "avanzado"
  tags: ["calculo", "de_broglie"]

variables:
  p_val: 1.0e-34

respuesta: 1.0e34
tipo: "completar"
tolerancia_abs: 1e30

enunciado: "Si un objeto tiene un momento de {p_val} kg·m/s y h = 1, su longitud de onda es ___ m."

pasos:
  - "lambda = h / p"

explicacion: |
  Aplicación directa de la fórmula de De Broglie: lambda = 1 / {p_val} = 1.0e34 m.
```

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "basico"
  tags: ["resumen"]

respuesta: "ambas"
tipo: "mc"
opciones_explicitas: ["onda", "particula", "ambas", "ninguna"]

enunciado: "La dualidad onda-partícula implica que la luz y la materia exhiben propiedades de:"

explicacion: |
  Ambas naturalezas son complementarias.
```

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "avanzado"
  tags: ["doppler", "frecuencia"]

respuesta: verdadero
tipo: "vf"

enunciado: "El efecto Doppler puede aplicarse a los fotones, provocando un cambio en su frecuencia (color)."

explicacion: |
  El desplazamiento al rojo o azul es un cambio en la frecuencia debido al movimiento relativo.
```

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "intermedio"
  tags: ["ordenar", "escala"]

opciones_explicitas: ["Fotón (luz visible)", "Electrón (De Broglie)", "Pelota de béisbol (De Broglie)"]
respuesta_orden: ["Fotón (luz visible)", "Electrón (De Broglie)", "Pelota de béisbol (De Broglie)"]
tipo: "ordenar"

enunciado: "Ordena estos objetos de mayor a menor longitud de onda de De Broglie:"

explicacion: |
  A mayor masa/momento, menor longitud de onda.
```

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "basico"
  tags: ["planck", "constante"]

respuesta: "6.626e-34"
tipo: "input"
tolerancia_abs: 0.001

enunciado: "El valor aproximado de la constante de Planck en unidades de J·s es (usa notación científica, ej: 6.6e-34):"

explicacion: |
  h ≈ 6.626 × 10^-34 J·s.
```

```
metadata:
  materia: "fisica"
  tema: "dualidad_onda_particula"
  nivel: "basico"
  tags: ["conclusion"]

respuesta: verdadero
tipo: "vf"

enunciado: "La dualidad onda-partícula es un concepto fundamental de la mecánica cuántica que rompe con la física clásica."

explicacion: |
  La física clásica no puede explicar fenómenos como el efecto fotoeléctrico.
```

## Sección: plano-inclinado-y-rozamiento (29 preguntas)

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "basico"
  tags: ["plano_inclinado", "vocabulario"]

enunciado: "¿Qué es un plano inclinado?"
tipo: mc
opciones_explicitas:
  - "Una superficie que forma un ángulo con la horizontal, como una rampa"
  - "Una superficie perfectamente vertical"
  - "Otro nombre para una superficie sin rozamiento"
respuesta: "Una superficie que forma un ángulo con la horizontal, como una rampa"

explicacion: |
  El peso de un objeto sobre esa superficie se descompone en dos
  componentes.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["plano_inclinado", "completar"]

tipo: completar
enunciado: "Completá: la componente del peso paralela al plano inclinado es P∥ = peso × ___(θ)."
respuestas_validas:
  - "sen"
  - "seno"

explicacion: |
  Es la componente que empuja al objeto a deslizar por la rampa.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["plano_inclinado", "completar"]

tipo: completar
enunciado: "Completá: la componente del peso perpendicular al plano inclinado es P⊥ = peso × ___(θ)."
respuestas_validas:
  - "cos"
  - "coseno"

explicacion: |
  Es la componente que presiona al objeto contra la superficie.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado", "problema"]

variables:
  peso: uno_de([20, 40, 60, 80])
  sen_30: 0.5

respuesta: peso * sen_30
tipo: input
tolerancia_abs: 0.5

enunciado: "Un objeto de peso {peso} N está sobre un plano inclinado 30° (sen 30° = 0,5). ¿Cuál es la componente del peso paralela al plano?"

pasos:
  - "{peso} × 0,5 = {peso * sen_30} N"

explicacion: |
  P∥ = peso × sen(θ).
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado", "problema"]

variables:
  peso: uno_de([20, 40, 60, 80])
  cos_30: 0.87

respuesta: redondear(peso * cos_30, 1)
tipo: input
tolerancia_abs: 1

enunciado: "Un objeto de peso {peso} N está sobre un plano inclinado 30° (cos 30° ≈ 0,87). ¿Cuál es la componente del peso perpendicular al plano?"

pasos:
  - "{peso} × 0,87 = {redondear(peso * cos_30, 1)} N"

explicacion: |
  P⊥ = peso × cos(θ).
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado", "problema"]

variables:
  peso: uno_de([20, 40, 60, 80])
  sen_60: 0.87

respuesta: redondear(peso * sen_60, 1)
tipo: input
tolerancia_abs: 1

enunciado: "Un objeto de peso {peso} N está sobre un plano inclinado 60° (sen 60° ≈ 0,87). ¿Cuál es la componente del peso paralela al plano?"

pasos:
  - "{peso} × 0,87 = {redondear(peso * sen_60, 1)} N"

explicacion: |
  Con un ángulo más pronunciado (60° en vez de 30°), la componente que
  empuja a deslizar es mayor.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado", "problema"]

variables:
  peso: uno_de([20, 40, 60])
  cos_45: 0.71

respuesta: redondear(peso * cos_45, 1)
tipo: input
tolerancia_abs: 1

enunciado: "Un objeto de peso {peso} N está sobre un plano inclinado 45° (cos 45° ≈ 0,71). ¿Cuál es la normal que ejerce el plano sobre el objeto?"

pasos:
  - "{peso} × 0,71 = {redondear(peso * cos_45, 1)} N"

explicacion: |
  La normal equilibra sólo la componente perpendicular del peso.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["plano_inclinado"]

respuesta: falso
tipo: vf

enunciado: "En un plano inclinado, la normal siempre es igual al peso completo del objeto, igual que en una superficie horizontal."

explicacion: |
  Sólo equilibra la componente perpendicular del peso (peso × cos θ),
  que es menor que el peso completo.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto mayor es el ángulo de inclinación del plano, menor es la normal que actúa sobre el objeto."

explicacion: |
  cos(θ) disminuye a medida que θ aumenta (para ángulos entre 0° y 90°).
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto mayor es el ángulo de inclinación del plano, mayor es la componente del peso que empuja al objeto a deslizar."

explicacion: |
  sen(θ) aumenta a medida que θ aumenta (para ángulos entre 0° y 90°).
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "basico"
  tags: ["rozamiento", "vocabulario"]

enunciado: "¿Qué es la fuerza de rozamiento?"
tipo: mc
opciones_explicitas:
  - "La fuerza que se opone al deslizamiento entre dos superficies en contacto"
  - "La fuerza que empuja a un objeto hacia adelante"
  - "Otro nombre para el peso de un objeto"
respuesta: "La fuerza que se opone al deslizamiento entre dos superficies en contacto"

explicacion: |
  Actúa siempre paralela a la superficie de contacto.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["rozamiento", "vocabulario"]

enunciado: "¿En qué dirección y sentido actúa el rozamiento respecto del movimiento (o del movimiento que tendería a ocurrir)?"
tipo: mc
opciones_explicitas:
  - "Paralela a la superficie de contacto, en sentido contrario al movimiento"
  - "Siempre perpendicular a la superficie de contacto"
  - "En la misma dirección y sentido que el movimiento"
respuesta: "Paralela a la superficie de contacto, en sentido contrario al movimiento"

explicacion: |
  Se opone al deslizamiento, nunca lo favorece.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["rozamiento", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre rozamiento estático y cinético?"
tipo: mc
opciones_explicitas:
  - "El estático actúa mientras el objeto está quieto; el cinético mientras ya se está moviendo"
  - "El estático es siempre más chico que el cinético"
  - "No hay ninguna diferencia real entre ambos"
respuesta: "El estático actúa mientras el objeto está quieto; el cinético mientras ya se está moviendo"

explicacion: |
  El estático impide que el movimiento empiece; el cinético actúa
  durante el movimiento.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["rozamiento"]

respuesta: verdadero
tipo: vf

enunciado: "El rozamiento estático tiene un valor máximo, más allá del cual el objeto empieza a deslizar."

explicacion: |
  f_estático_máx = μ_e × N: si la fuerza que intenta mover al objeto
  supera ese máximo, el objeto se pone en movimiento.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["rozamiento"]

respuesta: verdadero
tipo: vf

enunciado: "El rozamiento cinético es prácticamente constante mientras el objeto se desliza, sin depender de qué tan rápido se mueva."

explicacion: |
  f_cinético = μ_c × N, sin ningún término de velocidad en los casos
  simples.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["rozamiento"]

respuesta: verdadero
tipo: vf

enunciado: "En general, el coeficiente de rozamiento estático (μ_e) es mayor que el coeficiente cinético (μ_c) entre las mismas dos superficies."

explicacion: |
  Es la razón física por la que cuesta más iniciar un movimiento que
  mantenerlo.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "basico"
  tags: ["rozamiento", "vocabulario"]

enunciado: "¿De qué depende principalmente el coeficiente de rozamiento (μ) entre dos superficies?"
tipo: mc
opciones_explicitas:
  - "De qué materiales están en contacto"
  - "Del área total de contacto entre las superficies"
  - "De la velocidad a la que se mueve el objeto"
respuesta: "De qué materiales están en contacto"

explicacion: |
  Madera con madera da un μ distinto que goma con asfalto o hielo con
  metal.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["rozamiento"]

respuesta: verdadero
tipo: vf

enunciado: "En los casos simples que se estudian en la escuela, el coeficiente de rozamiento no depende del área de contacto entre las superficies."

explicacion: |
  Es un resultado que suele sorprender: un ladrillo apoyado sobre su
  cara grande o su cara chica tiene el mismo μ con el piso.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["rozamiento", "problema"]

variables:
  normal: uno_de([50, 100, 200])
  mu_c: 0.2

respuesta: normal * mu_c
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto se desliza sobre una superficie con normal {normal} N, y el coeficiente de rozamiento cinético es 0,2. ¿Cuál es la fuerza de rozamiento?"

pasos:
  - "{normal} × 0,2 = {normal * mu_c} N"

explicacion: |
  f_cinético = μ_c × N.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["rozamiento", "problema"]

variables:
  normal: uno_de([50, 100, 200])
  mu_e: 0.3

respuesta: normal * mu_e
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto en reposo está sobre una superficie con normal {normal} N, y el coeficiente de rozamiento estático es 0,3. ¿Cuál es la máxima fuerza de rozamiento estático posible, antes de que el objeto empiece a moverse?"

pasos:
  - "{normal} × 0,3 = {normal * mu_e} N"

explicacion: |
  f_estático_máx = μ_e × N.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado", "problema"]

variables:
  peso: uno_de([40, 60, 80])
  cos_60: 0.5

respuesta: peso * cos_60
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto de peso {peso} N está en un plano inclinado 60° (cos 60° = 0,5). ¿Cuál es la normal?"

pasos:
  - "{peso} × 0,5 = {peso * cos_60} N"

explicacion: |
  N = peso × cos(θ).
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado", "problema"]

variables:
  peso: uno_de([40, 60, 80])
  sen_30: 0.5
  friccion: uno_de([5, 10])

respuesta: (peso * sen_30) - friccion
tipo: input
tolerancia_abs: 0.5

enunciado: "Un objeto de peso {peso} N está en un plano inclinado 30° (sen 30° = 0,5), ya deslizando, con una fuerza de rozamiento cinético de {friccion} N oponiéndose. ¿Cuál es la fuerza neta a lo largo del plano?"

pasos:
  - "P∥ = {peso} × 0,5 = {peso * sen_30} N"
  - "{peso * sen_30} − {friccion} = {(peso * sen_30) - friccion} N"

explicacion: |
  Se resta la fuerza de rozamiento a la componente del peso que empuja
  a deslizar.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["plano_inclinado"]

respuesta: verdadero
tipo: vf

enunciado: "Si la fuerza neta a lo largo del plano (peso paralelo menos rozamiento) es positiva, el objeto acelera deslizando hacia abajo."

explicacion: |
  Es la segunda ley de Newton aplicada a lo largo del plano inclinado.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado", "problema"]

variables:
  peso: uno_de([40, 60])
  sen_30: 0.5
  friccion_max: peso * sen_30 + random(2, 10)

respuesta: verdadero
tipo: vf

enunciado: "Un objeto de peso {peso} N está en reposo en un plano inclinado 30° (P∥ = {peso * sen_30} N). El rozamiento estático máximo posible es {friccion_max} N. ¿El objeto se queda quieto (no empieza a deslizar)?"

explicacion: |
  Como el rozamiento estático máximo ({friccion_max} N) es mayor que la
  componente que empuja a deslizar ({peso * sen_30} N), el objeto no se
  mueve.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado", "ordenar"]

enunciado: "Ordená los pasos para analizar si un objeto se queda quieto o desliza en un plano inclinado con rozamiento."
tipo: ordenar
opciones_explicitas:
  - "Comparar P∥ con el rozamiento máximo: si P∥ es mayor, el objeto desliza"
  - "Calcular la componente del peso paralela al plano (P∥ = peso × sen θ)"
  - "Calcular la normal y con ella la fuerza de rozamiento estático máximo"
respuesta_orden: ["Calcular la componente del peso paralela al plano (P∥ = peso × sen θ)", "Calcular la normal y con ella la fuerza de rozamiento estático máximo", "Comparar P∥ con el rozamiento máximo: si P∥ es mayor, el objeto desliza"]
explicacion: |
  La comparación final es la que decide si hay movimiento o no.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["rozamiento", "vocabulario"]

enunciado: "¿Por qué es tan difícil caminar sin resbalar sobre hielo?"
tipo: mc
opciones_explicitas:
  - "Porque el coeficiente de rozamiento entre el calzado y el hielo es muy bajo"
  - "Porque el hielo no tiene normal"
  - "Porque el peso de la persona cambia sobre el hielo"
respuesta: "Porque el coeficiente de rozamiento entre el calzado y el hielo es muy bajo"

explicacion: |
  Con μ muy chico, la fuerza de rozamiento disponible es insuficiente
  para el empuje necesario al caminar.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["rozamiento", "vocabulario"]

enunciado: "¿Por qué el rozamiento, aunque suele pensarse como algo que 'frena' o 'molesta', también es necesario para muchas acciones cotidianas?"
tipo: mc
opciones_explicitas:
  - "Porque es la reacción del piso (ver la tercera ley) la que permite caminar, y sin rozamiento suficiente no habría tracción"
  - "En realidad el rozamiento nunca es útil, siempre conviene eliminarlo"
  - "El rozamiento sólo afecta a objetos en un plano inclinado"
respuesta: "Porque es la reacción del piso (ver la tercera ley) la que permite caminar, y sin rozamiento suficiente no habría tracción"

explicacion: |
  Sin rozamiento, las ruedas patinarían y los pies resbalarían sin
  poder empujar contra nada.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado", "problema"]

variables:
  masa: uno_de([4, 8])
  sen_30: 0.5
  friccion: uno_de([5, 10])

respuesta: redondear(((masa * 10 * sen_30) - friccion) / masa, 2)
tipo: input
tolerancia_abs: 0.1

enunciado: "Un objeto de {masa} kg (peso {masa * 10} N, con g=10 m/s²) desliza por un plano inclinado 30° (sen 30° = 0,5), con una fuerza de rozamiento de {friccion} N. ¿Cuál es su aceleración a lo largo del plano?"

pasos:
  - "P∥ = {masa * 10} × 0,5 = {(masa * 10) * sen_30} N"
  - "Fuerza neta: {(masa * 10) * sen_30} − {friccion} = {((masa * 10) * sen_30) - friccion} N"
  - "a = {((masa * 10) * sen_30) - friccion} ÷ {masa} = {redondear(((masa * 10 * sen_30) - friccion) / masa, 2)} m/s²"

explicacion: |
  Combina el peso descompuesto, el rozamiento y la segunda ley de
  Newton en un solo problema.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender el plano inclinado y el rozamiento juntos?"
tipo: mc
opciones_explicitas:
  - "Para predecir si un objeto se desliza o queda quieto en una rampa real, y con qué aceleración, considerando ambos efectos a la vez"
  - "Sólo sirve para superficies perfectamente horizontales"
  - "Sólo aplica quitando el rozamiento del cálculo"
respuesta: "Para predecir si un objeto se desliza o queda quieto en una rampa real, y con qué aceleración, considerando ambos efectos a la vez"

explicacion: |
  Es la aplicación combinada de descomposición de vectores, las leyes de
  Newton y el rozamiento.
```

## Sección: fisica-medica (39 preguntas)

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "intermedio"
  tags: ["rayos_x", "atenuacion", "exponencial"]

variables:
  I0: random(100, 200)
  mu: random_float(0.5, 1.5)
  x: random(10, 20)

respuesta: redondear(I0 * exp(-mu * x), 2)
tipo: input

enunciado: "Un haz de rayos X con intensidad inicial {I0} unidades atraviesa un tejido de espesor {x} cm y coeficiente de atenuación {mu} cm⁻¹. ¿Cuál es la intensidad final que emerge? (Usa e ≈ 2.718)"

explicacion: |
  La intensidad final se calcula con la ley de Beer-Lambert: I = I0 * e^(-mu * x).
  Sustituyendo los valores: I = {I0} * e^(-{mu} * {x}).
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "basico"
  tags: ["radioactividad", "vida_media", "PET"]

variables:
  valor: uno_de([verdadero, falso])

respuesta: valor
tipo: vf

enunciado: "La vida media de un isótopo radiactivo es el tiempo necesario para que la mitad de los núcleos inestables se desintegren."

explicacion: |
  Esta es la definición correcta de vida media. No depende de la cantidad inicial, sino de la probabilidad intrínseca de desintegración.
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "intermedio"
  tags: ["fotones", "energia", "rayos_x"]

variables:
  f: random(10, 50)

respuesta: 6.63 * f
tipo: mc
opciones: 4

enunciado: "Si la frecuencia de un fotón de rayos X es {f} x 10¹⁸ Hz, ¿cuál es su energía en zeptojoules (zJ)? (h = 6.63 x 10⁻³⁴ J·s)"

explicacion: |
  La energía se calcula como E = h * f.
  E = (6.63 x 10⁻³⁴) * ({f} x 10¹⁸) = {6.63 * f} x 10⁻¹⁶ J.
  Como 1 zJ = 10⁻²¹ J, el valor numérico en zJ es {6.63 * f}.
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "avanzado"
  tags: ["actividad", "becquerel", "radiofarmacos"]

variables:
  A: random(100, 300)
  t12: random(1, 3)

respuesta: redondear(A * 0.5^(1/t12), 2)
tipo: input

enunciado: "Un radiotrazador tiene una actividad inicial de {A} MBq. Si su vida media es de {t12} horas, ¿cuál será su actividad después de 1 hora? (Redondear a 2 decimales)"

explicacion: |
  La actividad restante se calcula con A(t) = A0 * (1/2)^(t/t12).
  Aquí t=1, por lo tanto: A(1) = {A} * (0.5)^(1/{t12}).
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "intermedio"
  tags: ["ondas", "electromagnetica", "rayos_x"]

variables:
  f: random(100, 900)

respuesta: redondear(c / (f * 1e18), 12)
tipo: mc
opciones: 4

enunciado: "Para una frecuencia de {f} x 10¹⁸ Hz, ¿cuál es la longitud de onda en metros? (c = 3 x 10⁸ m/s)"

explicacion: |
  Usando c = lambda * f, despejamos lambda = c / f.
  lambda = (3 x 10⁸) / ({f} x 10¹⁸) = {redondear(c / (f * 1e18), 12)} m.
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "intermedio"
  tags: ["dosis", "gray", "energia"]

variables:
  E: random_float(0.1, 1.0)
  m: random(1, 5)

respuesta: redondear(E / m, 3)
tipo: input

enunciado: "Si un tejido de masa {m} kg absorbe una energía de {E} julios, ¿cuál es la dosis absorbida en Gray (Gy)?"

explicacion: |
  La dosis absorbida D se define como energía por unidad de masa: D = E / m.
  D = {E} / {m} = {redondear(E / m, 3)} Gy.
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "avanzado"
  tags: ["PET", "positron", "aniquilacion"]

variables:
  valor: uno_de([verdadero, falso])

respuesta: valor
tipo: vf

enunciado: "En la tomografía PET, los fotones detectados provienen directamente de la desintegración del núcleo emisor de positrones."

explicacion: |
  Falso. Los fotones de 511 keV se generan por la aniquilación del positron con un electrón del tejido, no directamente del núcleo.
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "avanzado"
  tags: ["decaimiento", "exponencial", "calculadora"]

variables:
  N0: random(1000, 5000)
  lambda_val: random_float(0.01, 0.1)
  t: random(5, 20)

respuesta: redondear(N0 * exp(-lambda_val * t), 0)
tipo: input

enunciado: "Si tienes {N0} núcleos radiactivos con constante de decaimiento {lambda_val} s⁻¹, ¿cuántos núcleos quedan después de {t} segundos? (Redondear al entero más cercano)"

explicacion: |
  La ley de decaimiento es N(t) = N0 * e^(-lambda * t).
  N({t}) = {N0} * e^(-{lambda_val} * {t}) = {redondear(N0 * exp(-lambda_val * t), 0)}.
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "intermedio"
  tags: ["PET", "masa", "energia"]

variables:
  masa_e: 0.511

respuesta: 0.511
tipo: input

enunciado: "Cuando un positron y un electrón se aniquilan, cada fotón gamma resultante tiene una energía de {masa_e} MeV. ¿Cuál es esa energía?"

explicacion: |
  La masa en reposo del electrón (y positrón) es equivalente a 0.511 MeV/c². Por conservación de energía, cada fotón lleva 0.511 MeV.
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "intermedio"
  tags: ["resolucion", "PET", "RX"]

variables:
  valor: uno_de([verdadero, falso])

respuesta: valor
tipo: vf

enunciado: "La tomografía por emisión de positrones (PET) tiene generalmente una resolución espacial mejor que la radiografía convencional de rayos X."

explicacion: |
  Falso. La PET tiene peor resolución espacial (del orden de milímetros a centímetros) debido a la distancia de vuelo del positrón y la no colinealidad de los fotones, mientras que los RX pueden resolver detalles submilimétricos.
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "avanzado"
  tags: ["atenuacion", "factor", "matematica"]

variables:
  mu: random_float(0.2, 0.8)
  x: random(1, 5)

respuesta: redondear(exp(-mu * x), 4)
tipo: mc
opciones: 4

enunciado: "Si el producto mu * x es igual a {redondear(mu * x, 2)}, ¿cuál es el factor de transmisión (I/I0)?"

explicacion: |
  El factor de transmisión es e^(-mu * x).
  Con los valores dados, el resultado es {redondear(exp(-mu * x), 4)}.
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "avanzado"
  tags: ["actividad", "vida_media", "relacion"]

variables:
  A: random(10, 50)
  t12: random(10, 100)

respuesta: redondear(A / t12, 4)
tipo: input

enunciado: "Si la actividad es {A} Bq y la vida media es {t12} s, ¿cuál es la constante de decaimiento lambda (en s⁻¹)? (Usa lambda = ln(2) / t12, pero aproxima ln(2) ≈ 0.693)"

explicacion: |
  lambda = 0.693 / t12.
  lambda = 0.693 / {t12} = {redondear(0.693 / t12, 4)} s⁻¹.
  Nota: La actividad A no afecta a lambda, solo al número de núcleos N.
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "intermedio"
  tags: ["dosis", "sievert", "peso"]

variables:
  D: random_float(0.1, 2.0)
  W_R: 1

respuesta: redondear(D * W_R, 2)
tipo: input

enunciado: "Si la dosis absorbida es {D} Gy y el factor de ponderación de radiación (W_R) para rayos X es {W_R}, ¿cuál es la dosis equivalente en Sieverts (Sv)?"

explicacion: |
  Dosis Equivalente H = D * W_R.
  H = {D} * {W_R} = {redondear(D * W_R, 2)} Sv.
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "basico"
  tags: ["constantes", "luz", "vacío"]

variables:
  valor: uno_de([verdadero, falso])

respuesta: valor
tipo: vf

enunciado: "La velocidad de la luz en el vacío es aproximadamente 3 x 10⁸ m/s."

explicacion: |
  Verdadero. Este es un valor fundamental en física médica para cálculos de energía y longitud de onda.
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "intermedio"
  tags: ["contraste", "medios", "absorcion"]

variables:
  mu1: random_float(0.5, 1.0)
  mu2: random_float(1.5, 2.5)

respuesta: redondear(mu2 - mu1, 2)
tipo: mc
opciones: 4

enunciado: "El contraste de intensidad entre dos tejidos con coeficientes {mu1} y {mu2} (donde mu2 > mu1) depende de la diferencia de atenuación. ¿Cuál es la diferencia de coeficientes?"

explicacion: |
  La diferencia es mu2 - mu1 = {mu2} - {mu1} = {redondear(mu2 - mu1, 2)}.
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "avanzado"
  tags: ["beta", "desintegracion", "neutron"]

variables:
  valor: uno_de([verdadero, falso])

respuesta: valor
tipo: vf

enunciado: "En la desintegración beta menos, un neutrón se transforma en un protón, emitiendo un electrón y un antineutrino."

explicacion: |
  Verdadero. Este es el proceso básico de la beta menos, aumentando el número atómico en 1.
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "avanzado"
  tags: ["bremsstrahlung", "energia", "maxima"]

variables:
  V: random(50, 150)

respuesta: V
tipo: input

enunciado: "En un tubo de rayos X operando a {V} kV, ¿cuál es la energía máxima (en keV) de los fotones de Bremsstrahlung generados?"

explicacion: |
  La energía máxima del fotón es igual a la energía cinética del electrón incidente, que es e * V.
  Por lo tanto, E_max = {V} keV.
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "intermedio"
  tags: ["rayos_x", "atenuacion", "exponencial"]

variables:
  I0: random(100, 500)
  mu: random_float(0.5, 2.0)
  x: random(2, 10)

respuesta: redondear(I0 * e^(-mu * x), 2)
tipo: input

enunciado: "Un haz de rayos X con intensidad inicial {I0} atraviesa un tejido óseo de espesor {x} cm. Si el coeficiente de atenuación del hueso es {mu} cm⁻¹, ¿cuál es la intensidad final del haz? (Redondear a 2 decimales)"

explicacion: |
  La atenuación sigue la ley exponencial I = I0 * e^(-mu * x).
  Sustituyendo los valores: I = {I0} * e^(-{mu} * {x}).
  El resultado indica cuánta radiación logra penetrar el tejido.
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "basico"
  tags: ["rayos_x", "contraste", "absorcion"]

variables:
  tejido: uno_de(["hueso", "tejido_blando", "aire"])

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: En una radiografía convencional, el tejido que absorbe MENOS radiación aparece más blanco en la imagen final."

explicacion: |
  Falso. Los tejidos que absorben más radiación (como el hueso) aparecen blancos porque menos fotones llegan al detector. Los que absorben menos (aire) aparecen oscuros.
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "avanzado"
  tags: ["rayos_x", "logaritmo", "atenuacion"]

variables:
  I0: random(1000, 2000)
  I: random(10, 50)
  x: random(1, 5)

respuesta: redondear(-log(I/I0) / x, 3)
tipo: input

enunciado: "Si un haz de intensidad inicial {I0} se reduce a {I} tras atravesar {x} cm de un material, calcule el coeficiente de atenuación lineal mu. Use logaritmo natural."

explicacion: |
  Despejando mu de I = I0 * e^(-mu * x), obtenemos mu = -ln(I/I0) / x.
  Esto permite caracterizar el material basándose en su capacidad de absorción.
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "intermedio"
  tags: ["pet", "positrones", "aniquilacion"]

variables:
  respuesta_correcta: uno_de(["aniquilacion", "ionizacion", "excitacion", "dispersion"])

respuesta: respuesta_correcta
tipo: completar

enunciado: "La tomografía por emisión de positrones (PET) se basa en la detección de fotones gamma producidos por el proceso de {respuesta_correcta} entre un positrón y un electrón."

respuestas_validas:
  - "aniquilacion"
  - "aniquilación"
  - "annihilation"

explicacion: |
  Cuando un positrón (antipartícula del electrón) choca con un electrón, ambos se aniquilan, convirtiendo su masa en energía en forma de dos fotones gamma de 511 keV emitidos en direcciones opuestas.
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "basico"
  tags: ["radioproteccion", "dosis", "riesgo"]

variables:
  tipo_tec: uno_de(["rayos_x", "gammagrafia", "tc"])

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: La justificación de cualquier procedimiento de física médica implica que los beneficios para el paciente superen los riesgos potenciales de la exposición a la radiación."

explicacion: |
  Verdadero. Es uno de los tres principios fundamentales de la radioprotección (junto con la optimización y la limitación de dosis).
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "intermedio"
  tags: ["radioactividad", "vida_media", "desintegracion"]

variables:
  t1_2: random(6, 12)
  t_transcurrido: random_float(12, 24)
  A0: 100

respuesta: redondear(A0 * (0.5)^(t_transcurrido / t1_2), 2)
tipo: input

enunciado: "Un isótopo tiene una vida media de {t1_2} horas. Si la actividad inicial es 100 MBq, ¿cuál será la actividad después de {t_transcurrido} horas?"

explicacion: |
  La actividad decrece exponencialmente según A(t) = A0 * (1/2)^(t / t1/2).
  Aquí, el número de vidas medias transcurridas es t_transcurrido / t1_2.
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "avanzado"
  tags: ["pet", "energia", "fotones"]

variables:
  masa_e: 9.109e-31
  c: 3e8
  energia_j: masa_e * c * c

respuesta: redondear(energia_j / 1.602e-13, 2)
tipo: input

enunciado: "Calcule la energía en MeV de un solo fotón gamma producido en una aniquilación electrón-positrón. Use E=mc² y la conversión 1 MeV = 1.602e-13 J. La masa del electrón es 9.109e-31 kg."

explicacion: |
  La masa total convertida es 2 * masa_e. La energía total es E = 2 * m_e * c^2.
  Como se producen dos fotones, cada uno lleva la mitad de esa energía.
  El resultado estándar es aproximadamente 0.511 MeV.
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "intermedio"
  tags: ["calidad_imagen", "resolucion", "contraste"]

variables:
  escenario: uno_de(["baja_resolucion", "alto_contraste", "bajo_contraste", "alta_resolucion"])

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: Mejorar la resolución espacial de una imagen médica siempre mejora automáticamente el contraste de la misma."

explicacion: |
  Falso. La resolución y el contraste son parámetros independientes que a menudo tienen una relación de compromiso (trade-off). Mejorar uno puede degradar al otro si no se ajustan otros parámetros.
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "avanzado"
  tags: ["radioactividad", "actividad", "masa"]

variables:
  masa_g: random_float(0.1, 1.0)
  vida_media_dias: random(10, 50)
  na: 6.022e23
  masa_molar: 131.0

respuesta: redondear((na / masa_molar) * (masa_g * 1000) * log(2) / (vida_media_dias * 86400), 0)
tipo: input

enunciado: "Calcule la actividad en Bq de {masa_g} gramos de Yodo-131 (masa molar 131 g/mol) con vida media de {vida_media_dias} días. (Nota: convertir masa a mg para ajustar escala si es necesario, pero la formula usa moles directos)."

explicacion: |
  A = lambda * N. Lambda = ln(2) / t1/2. N = (masa / masa_molar) * Na.
  Es fundamental mantener las unidades consistentes (segundos para tiempo).
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "basico"
  tags: ["rayos_x", "contraste", "medios"]

variables:
  medio: uno_de(["bario", "aire", "yodo", "grafito"])

respuesta: medio
tipo: completar

enunciado: "En estudios del tracto gastrointestinal, se utiliza un medio de contraste positivo (radiopaco) como el {medio} para visualizar la mucosa estomacal."

respuestas_validas:
  - "bario"
  - "Sulfato de bario"

explicacion: |
  El bario tiene un número atómico alto (Z=56), lo que aumenta la absorción de rayos X por efecto fotoeléctrico, apareciendo blanco en la imagen.
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "intermedio"
  tags: ["ley_beer_lambert", "atenuacion", "formula"]

variables:
  mu: random_float(0.1, 0.5)
  x: random(5, 15)

respuesta: redondear(e^(-mu * x), 4)
tipo: input

enunciado: "Calcule la fracción de transmisión (I/I0) de un haz que atraviesa {x} cm de material con coeficiente de atenuación {mu} cm⁻¹."

explicacion: |
  La fracción de transmisión es directamente e^(-mu * x).
  Este valor es adimensional y siempre está entre 0 y 1.
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "intermedio"
  tags: ["tomografia", "ventana", "pixel"]

variables:
  tipo_ventana: uno_de(["hueso", "pulmon", "tejido_blando", "cerebro"])

respuesta: tipo_ventana
tipo: completar

enunciado: "Para observar mejor los detalles del parénquima pulmonar en una tomografía computarizada, se utiliza una ventana de visualización ajustada para {tipo_ventana}."

respuestas_validas:
  - "pulmon"
  - "pulmón"
  - "tejido pulmonar"

explicacion: |
  El pulmón tiene baja densidad. Una ventana de "pulmón" ajusta el rango de valores de Hounsfield para maximizar el contraste entre las estructuras finas del tejido pulmonar.
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "avanzado"
  tags: ["radioactividad", "calculo", "actividad"]

variables:
  A0: random(10, 50)
  t1_2: 6
  t: 18

respuesta: redondear(A0 * (0.5)^(t / t1_2), 2)
tipo: input

enunciado: "Si la actividad inicial es {A0} MBq y la vida media es 6 horas, ¿cuánto queda después de 18 horas?"

explicacion: |
  18 horas son exactamente 3 vidas medias (18/6).
  La actividad se reduce a la mitad 3 veces: A0 / 2^3 = A0 / 8.
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "intermedio"
  tags: ["pet", "coincidencia", "deteccion"]

variables:
  angulo: 180

respuesta: angulo
tipo: input

enunciado: "En la detección de aniquilación electrón-positrón, los dos fotones gamma salen aproximadamente separados por un ángulo de {angulo} grados. ¿Cuál es ese ángulo?"

explicacion: |
  Por conservación del momento lineal, los dos fotones de 511 keV se emiten en direcciones opuestas (180 grados) en el marco del centro de masa.
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "intermedio"
  tags: ["rayos_x", "contraste", "limitaciones"]

variables:
  tejido1: "higado"
  tejido2: "pancreas"

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: Los rayos X convencionales ofrecen un contraste natural excelente entre el hígado y el páncreas sin necesidad de medios de contraste externos."

explicacion: |
  Falso. Ambos son tejidos blandos con densidades y números atómicos efectivos muy similares, lo que resulta en un contraste muy bajo en radiografía simple.
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "avanzado"
  tags: ["radioactividad", "limpieza", "actividad"]

variables:
  A_inicial: 1000
  t1_2: 1
  t: 10

respuesta: redondear(A_inicial * (0.5)^(t / t1_2), 4)
tipo: input

enunciado: "Una fuente de 1000 Bq con vida media de 1 día se deja reposar. ¿Qué actividad queda después de 10 días? (Expresar en notación científica si es muy pequeña, pero aquí pide valor numérico directo)."

explicacion: |
  A = 1000 * (0.5)^10 = 1000 / 1024 ≈ 0.9766 Bq.
  Demuestra cómo la actividad disminuye rápidamente con múltiples vidas medias.
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "avanzado"
  tags: ["rayos_x", "produccion", "frenado"]

variables:
  voltaje_kv: random(50, 150)
  energia_max_mev: voltaje_kv / 1000

respuesta: redondear(energia_max_mev, 3)
tipo: input

enunciado: "En un tubo de rayos X operando a {voltaje_kv} kV, ¿cuál es la energía máxima (en MeV) de un fotón de rayos X producido por frenado (Bremsstrahlung)?"

explicacion: |
  La energía máxima del fotón corresponde a la energía cinética completa del electrón incidente, que es e * V.
  Por lo tanto, E_max (MeV) = V (kV) / 1000.
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "intermedio"
  tags: ["dosis", "sievert", "gray"]

variables:
  tipo_radiacion: uno_de(["rayos_x", "neutrones", "partículas_alfa"])
  factor_w: uno_de([1, 10, 20])

respuesta: factor_w
tipo: input

enunciado: "Para radiación de tipo {tipo_radiacion}, el factor de ponderación de radiación (wR) utilizado para calcular la dosis equivalente es {factor_w}. ¿Cuál es ese valor?"

explicacion: |
  Para rayos X, gamma y beta, wR es 1.
  Para neutrones y alfa, es mayor (10-20) debido a su mayor poder de ionización relativo.
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "avanzado"
  tags: ["farmacocinetica", "vida_media", "efectiva"]

variables:
  t1_2_fisica: 6
  t1_2_biol: 12

respuesta: redondear(1 / (1/t1_2_fisica + 1/t1_2_biol), 2)
tipo: input

enunciado: "Calcule la vida media efectiva (t1/2_eff) de un radiofármaco si su vida media física es {t1_2_fisica} h y su vida media biológica es {t1_2_biol} h."

explicacion: |
  La desintegración total es la suma de las tasas: 1/T_eff = 1/T_fis + 1/T_bio.
  T_eff = (T_fis * T_bio) / (T_fis + T_bio).
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "intermedio"
  tags: ["pet", "adquisicion", "ruido"]

variables:
  actividad: random(10, 50)

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: Una mayor actividad del paciente en PET permite reducir el tiempo de adquisición de la imagen manteniendo la misma calidad estadística."

explicacion: |
  Verdadero. La calidad de la imagen en PET depende del número de eventos de coincidencia detectados. Más actividad genera más eventos por unidad de tiempo.
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "basico"
  tags: ["rayos_x", "aire", "aproximacion"]

variables:
  distancia: random(1, 10)

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: En el rango de diagnóstico, la atenuación de los rayos X por el aire en distancias cortas (<10 m) se considera despreciable."

explicacion: |
  Verdadero. El aire es muy poco denso y tiene bajo número atómico, por lo que su coeficiente de atenuación es muy pequeño comparado con el tejido o el hueso.
```

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "avanzado"
  tags: ["radioactividad", "medicina_nuclear", "iodo"]

variables:
  A0: 100
  t1_2: 8
  t: 24

respuesta: redondear(A0 * (0.5)^(t / t1_2), 2)
tipo: input

enunciado: "Un paciente recibe 100 MBq de I-131 (t1/2 = 8 días). ¿Cuánta actividad queda en su cuerpo a los 24 días, asumiendo solo decaimiento físico?"

explicacion: |
  24 días son 3 vidas medias (24/8).
  A = 100 * (1/2)^3 = 12.5 MBq.
```

