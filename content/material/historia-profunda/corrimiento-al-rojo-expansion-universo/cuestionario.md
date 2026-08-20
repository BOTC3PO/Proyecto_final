# Historia Profunda — Corrimiento al rojo expansion universo (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El concepto de Redshift

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "basico"
  tags: ["astronomia", "luz", "doppler"]

tipo: mc
opciones_explicitas: ["El acortamiento de la longitud de onda de la luz", "El estiramiento de la longitud de onda de la luz", "El cambio de color de la luz hacia el azul", "La pérdida de intensidad de la luz"]
respuesta: "El estiramiento de la longitud de onda de la luz"

enunciado: "En astronomía, el corrimiento al rojo (redshift) se define como ___ de la luz de un objeto que se aleja de un observador."

explicacion: |
  El corrimiento al rojo ocurre cuando la longitud de onda de la radiación electromagnética emitida por un objeto se desplaza hacia valores más largos (hacia el rojo del espectro) debido a que la fuente se aleja.
```

### 2 — Analogía con el sonido

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "basico"
  tags: ["analogia", "doppler"]

tipo: completar
respuestas_validas:
  - "Efecto Doppler"
  - "Efecto Doppler"

enunciado: "El fenómeno del corrimiento al rojo es para la luz lo que el ___ es para el sonido."

explicacion: |
  Así como una ambulancia que se aleja produce un sonido más grave (menor frecuencia), la luz de una galaxia que se aleja presenta un corrimiento al rojo (menor frecuencia/mayor longitud de onda).
```

### 3 — Relación con la velocidad de alejamiento

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["velocidad", "observacion"]

variables:
  escenario: uno_de([[10, "mayor"], [50, "mayor"], [100, "mayor"]])

tipo: mc
opciones_explicitas: ["menor", "mayor", "igual"]

enunciado: "Si observamos que el corrimiento al rojo de una galaxia es de {escenario[0]} unidades, esto indica que su velocidad de alejamiento es ___ que la de una galaxia con corrimiento nulo."

respuesta: escenario[1]

explicacion: |
  A mayor corrimiento al rojo, mayor es la velocidad a la que el objeto se está alejando de nosotros (según la ley de Hubble-Lemaître).
```

### 4 — El espectro electromagnético

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["espectro", "longitud_de_onda"]

tipo: ordenar
opciones_explicitas: ["Violeta", "Verde", "Amarillo", "Rojo", "Infrarrojo"]

enunciado: "Ordena las longitudes de onda de la luz en orden CRECIENTE (de menor a mayor longitud de onda) para entender cómo se desplaza el espectro hacia el rojo."

respuesta_orden: ["Violeta", "Verde", "Amarillo", "Rojo", "Infrarrojo"]

explicacion: |
  El corrimiento al rojo consiste en desplazarse desde las longitudes de onda cortas (violeta/azul) hacia las longitudes de onda largas (rojo/infrarrojo).
```

### 5 — Cálculo de la longitud de onda

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "avanzado"
  tags: ["calculo", "fisica"]

variables:
  datos: uno_de([[500, 510], [600, 610], [700, 710]])

tipo: completar
tolerancia_abs: 0.1

enunciado: "Una estrella emite luz en una longitud de onda de {datos[0]} nm. Debido al corrimiento al rojo, la longitud de onda observada es de ___ nm."

respuesta: datos[1]

explicacion: |
  El corrimiento al rojo aumenta la longitud de onda observada respecto a la emitida. En este caso, el valor observado es el segundo elemento de nuestra tabla de datos.
```

### 6 — El efecto Doppler y la luz

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "basico"
  tags: ["astronomia", "redshift", "expansion"]

respuesta: "rojo"
tipo: mc
opciones_explicitas: ["azul", "rojo", "verde", "infrarrojo"]

enunciado: "Cuando una fuente de luz se aleja de un observador, las longitudes de onda de la luz que recibe se estiran hacia el extremo del espectro visible de color ___."

explicacion: |
  El desplazamiento hacia longitudes de onda más largas (menor frecuencia) se conoce como corrimiento al rojo (redshift).
```

### 7 — Evidencia de la expansión

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["evidencia", "galaxias", "observacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["galaxias lejanas", "se alejan"], ["galaxias cercanas", "se acercan"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["se acercan", "se alejan", "están estables", "colapsan"]

enunciado: "La observación de que las {datos[escenario_idx][0]} muestran un corrimiento al rojo indica que estas {datos[escenario_idx][1]} de nosotros."

explicacion: |
  El hecho de que la mayoría de las galaxias distantes presenten corrimiento al rojo es la evidencia fundamental de que el universo se está expandiendo.
```

### 8 — El concepto de Redshift

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "basico"
  tags: ["definicion", "espectro"]

respuesta: "alejamiento"
tipo: completar
respuestas_validas:
  - "alejamiento"
  - "acercamiento"
  - "estacionar"

enunciado: "En el contexto de la cosmología, un corrimiento al rojo (redshift) es una medida que indica el ___ de una galaxia respecto al observador."

explicacion: |
  El corrimiento al rojo es el cambio hacia longitudes de onda más largas debido al movimiento de alejamiento.
```

### 9 — Relación distancia-velocidad

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "avanzado"
  tags: ["ley_de_hubble", "expansion"]

variables:
  distancia_m: uno_de([10, 20, 30])
  velocidad_m: [100, 200, 300]

respuesta: velocidad_m[distancia_m/10 - 1]
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si la expansión del universo es uniforme, a mayor distancia, mayor es la velocidad de recesión. Si una galaxia está a una distancia de {distancia_m} Mpc y su velocidad es de {velocidad_m[distancia_m/10 - 1]} km/s, ¿cuál es su velocidad?"

pasos:
  - "Identificar la velocidad correspondiente a la distancia dada según la relación lineal."

explicacion: |
  En un universo en expansión, la velocidad de alejamiento es proporcional a la distancia (Ley de Hubble).
```

### 10 — Secuencia de descubrimiento

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["orden", "logica"]

tipo: ordenar
respuesta_orden: ["observación de espectro", "detección de corrimiento al rojo", "conclusión de expansión"]
opciones_explicitas: ["conclusión de expansión", "observación de espectro", "detección de corrimiento al rojo"]

enunciado: "Ordena los pasos lógicos que llevaron a la conclusión de la expansión del universo:"

explicacion: |
  Primero se observa la luz (espectro), luego se detecta el desplazamiento (redshift) y finalmente se infiere la expansión.
```

### 11 — El concepto de expansión

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["cosmologia", "espacio_tiempo"]

tipo: mc
opciones_explicitas: ["Las galaxias se desplazan a través del espacio vacío", "El espacio mismo se está estirando entre las galaxias", "Las galaxias se mueven debido a una fuerza centrífuga", "El universo está colapsando hacia un punto central"]
respuesta: "El espacio mismo se está estirando entre las galaxias"

enunciado: "Según el modelo de expansión cósmica, el corrimiento al rojo observado en las galaxias lejanas indica que:"

explicacion: |
  Es un error común pensar que las galaxias viajan 'por' el espacio como proyectiles. En realidad, es la métrica del espacio-tiempo la que se expande, aumentando la distancia entre objetos que no están gravitacionalmente ligados.
```

### 12 — Analogía del globo

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "basico"
  tags: ["analogia", "expansion"]

variables:
  idx: uno_de([0,1])
  escenario: [["puntos en un globo desinflado", "puntos en un globo inflado"], ["distancia constante", "distancia creciente"]]

tipo: completar
respuestas_validas:
  - "distancia creciente"

enunciado: "Si imaginamos que las galaxias son puntos dibujados sobre la superficie de un globo que se infla, al aumentar el volumen del globo, la {escenario[idx][0]} entre los puntos se vuelve una {escenario[idx][1]}."

explicacion: |
  La analogía del globo ilustra que no es el objeto el que se mueve por la superficie, sino que la superficie misma crece, separando los puntos.
```

### 13 — El efecto Doppler vs. Expansión

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "avanzado"
  tags: ["doppler", "redshift"]

tipo: mc
opciones_explicitas: ["Efecto Doppler", "Efecto Doppler Cosmológico", "Efecto Doppler Gravitacional", "Efecto Doppler de Lorentz"]
respuesta: "Efecto Doppler Cosmológico"

enunciado: "Aunque se parece al efecto Doppler acústico, el corrimiento al rojo debido a la expansión del universo se denomina:"

explicacion: |
  El efecto Doppler estándar ocurre por movimiento a través del medio, mientras que el cosmológico se debe a la expansión de la métrica del espacio.
```

### 14 — La métrica del espacio

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["metrica", "espacio_tiempo"]

tipo: completar
tolerancia_abs: 0

enunciado: "Si la expansión del universo es constante, la velocidad de recesión de una galaxia es proporcional a su distancia actual. ¿Cuál es el término técnico para este factor de escala que describe cómo cambia el tamaño del universo con el tiempo? (Escribe la respuesta en inglés, comienza con 'a' y termina con 'e')"

respuesta: "a_e"

explicacion: |
  El factor de escala 'a(t)' es una función que describe la evolución del tamaño del universo con el tiempo en la métrica de Friedmann-Lemaître-Robertson-Walker.
```

### 15 — Orden de la evidencia

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["evidencia", "historia_ciencia"]

tipo: ordenar
opciones_explicitas: ["Observación de espectros con corrimiento al rojo", "Formulación de la Ley de Hubble-Lemaître", "Descubrimiento de la expansión del universo"]

enunciado: "Ordena cronológicamente los hitos que permitieron comprender que el universo se está expandiendo:"

explicacion: |
  Primero se observó el desplazamiento en las líneas espectrales (Slipher), luego se formuló la relación matemática (Hubble) y finalmente se consolidó el modelo de un universo en expansión.
respuesta_orden: ["Observación de espectros con corrimiento al rojo", "Formulación de la Ley de Hubble-Lemaître", "Descubrimiento de la expansión del universo"]
```

### 16 — Evidencia del Big Bang

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "basico"
  tags: ["cosmologia", "big_bang", "evidencia"]

tipo: mc
opciones_explicitas: ["La expansión del espacio", "La rotación de las galaxias", "La formación de agujeros negros", "La existencia de la gravedad"]
respuesta: "La expansión del espacio"

enunciado: "El corrimiento al rojo cosmológico es una de las principales evidencias observacionales a favor de la teoría del Big Bang."

explicacion: |
  El corrimiento al rojo indica que las galaxias se alejan de nosotros, lo que implica que el universo se está expandiendo, una pieza clave para la teoría del Big Bang.
```

### 17 — El efecto Doppler y la luz

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["espectro", "luz", "redshift"]

tipo: mc
opciones_explicitas: ["se desplaza hacia el rojo", "se desplaza hacia el azul", "se mantiene constante", "cambia de intensidad"]
respuesta: "se desplaza hacia el rojo"

enunciado: "Cuando la luz de una galaxia se estira debido a la expansión del universo, su espectro ___."

explicacion: |
  Al expandirse el espacio, la longitud de onda de la luz se estira hacia la parte roja del espectro electromagnético.
```

### 18 — Relación de Hubble

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "avanzado"
  tags: ["hubble", "calculo", "expansion"]

variables:
  caso_idx: uno_de([0, 1])
  datos: [[100, 700], [250, 1500]]
  h0: redondear(datos[caso_idx][1] / datos[caso_idx][0], 2)

tipo: completar
tolerancia_abs: 0.1
respuesta: h0

enunciado: "Si una galaxia se encuentra a una distancia de {datos[caso_idx][0]} Mpc y su velocidad de recesión es de {datos[caso_idx][1]} km/s, ¿cuál es el valor aproximado de la constante de Hubble (H₀) en km/s/Mpc?"

pasos:
  - "Identificar la velocidad de recesión (v)"
  - "Identificar la distancia (d)"
  - "Aplicar la fórmula H₀ = v / d"

explicacion: |
  Usando la ley de Hubble: H₀ = v / d. Para el caso seleccionado: {datos[caso_idx][1]} / {datos[caso_idx][0]} = {h0} km/s/Mpc.
```

### 19 — Conceptos clave de expansión

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["conceptos", "espacio", "tiempo"]

tipo: ordenar
opciones_explicitas: ["Gran explosión inicial", "Expansión del espacio-tiempo", "Corrimiento al rojo observado", "Universo actual"]

enunciado: "Ordena cronológicamente los eventos relacionados con la expansión y la observación del universo:"

explicacion: |
  El Big Bang da origen a todo, seguido por la expansión, lo que genera el corrimiento al rojo que observamos hoy en las galaxias lejanas.
respuesta_orden: ["Gran explosión inicial", "Expansión del espacio-tiempo", "Corrimiento al rojo observado", "Universo actual"]
```

### 20 — Causas del corrimiento

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["causa", "espacio", "redshift"]

tipo: completar
respuestas_validas:
  - "espacio"
  - "tejido"
  - "espacio-tiempo"

enunciado: "A diferencia del efecto Doppler clásico, el corrimiento al rojo cosmológico es causado por el estiramiento del propio ___ entre las galaxias."

explicacion: |
  En cosmología, no es solo que las galaxias se muevan "a través" del espacio, sino que es el espacio mismo el que se expande.
```

### 21 — El efecto Doppler de la luz

```
metadata:
  materia: "astronomia"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "basico"
  tags: ["astronomia", "cosmologia"]

variables:
  datos: [["el espectro de la galaxia se desplaza hacia longitudes de onda más largas", "alejándose"], ["el espectro de la galaxia se desplaza hacia longitudes de onda más cortas", "acercándose"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["alejándose", "acercándose"]

enunciado: "Si observamos que {datos[idx][0]}, esto indica que el objeto se está ___."

explicacion: |
  El corrimiento al rojo (redshift) ocurre cuando la longitud de onda de la luz se estira debido al movimiento de alejamiento, mientras que el corrimiento al azul (blueshift) ocurre cuando la longitud de onda se comprime debido al acercamiento.
```

### 22 — Interpretación de espectros

```
metadata:
  materia: "astronomia"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "basico"
  tags: ["espectroscopia", "astronomia"]

variables:
  datos: [["redshift", "alejándose"], ["blueshift", "acercándose"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "alejándose"
  - "acercándose"

enunciado: "Un astrónomo detecta un fenómeno de {datos[idx][0]} en una galaxia lejana. Esto significa que la galaxia está ___ del observador."

explicacion: |
  El término 'redshift' se asocia con el aumento de la longitud de onda (alejamiento) y 'blueshift' con la disminución (acercamiento).
```

### 23 — Movimiento relativo de galaxias

```
metadata:
  materia: "astronomia"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["galaxias", "cosmologia"]

variables:
  datos: [["Luz roja", "alejándose"], ["Luz azul", "acercándose"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["alejándose", "acercándose", "estacionaria"]

enunciado: "Si la luz emitida por un objeto llega con un tono hacia el extremo rojo del espectro, el movimiento es de ___."

explicacion: |
  El corrimiento al rojo es la evidencia fundamental de la expansión del universo, indicando que las galaxias se alejan de nosotros.
```

### 24 — El concepto de Redshift

```
metadata:
  materia: "astronomia"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "alejándose"
tipo: completar
respuestas_validas:
  - "alejándose"
  - "acercándose"

enunciado: "Cuando la longitud de onda de la luz de una estrella aumenta debido a su movimiento relativo, decimos que tiene un corrimiento al rojo, lo que significa que la estrella se está ___."

explicacion: |
  El aumento en la longitud de onda ($\lambda$) es la definición física del corrimiento al rojo.
```

### 25 — Identificación de movimiento

```
metadata:
  materia: "astronomia"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["espectro", "movimiento"]

variables:
  datos: [["azul", "acercándose"], ["rojo", "alejándose"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["acercándose", "alejándose"]

enunciado: "Si la luz de un objeto se desplaza hacia el color {datos[idx][0]}, el objeto se está ___."

explicacion: |
  El color azul tiene longitudes de onda más cortas, indicando acercamiento; el rojo, longitudes más largas, indicando alejamiento.
```
