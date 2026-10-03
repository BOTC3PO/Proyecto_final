# Examen jefe — [PENDIENTE #682]

> Logro #682. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **125 preguntas totales** en 5/5 secciones.

---

## Sección: corrimiento-al-rojo-expansion-universo (25 preguntas)

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

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["evidencia", "galaxias", "observacion"]

respuesta: "se alejan"
tipo: mc
opciones_explicitas: ["se acercan", "se alejan", "están estables", "colapsan"]

enunciado: "La observación de que las galaxias lejanas muestran un corrimiento al rojo indica que estas ___ de nosotros."

explicacion: |
  El hecho de que la mayoría de las galaxias distantes presenten corrimiento al rojo es la evidencia fundamental de que el universo se está expandiendo.
```

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

enunciado: "En el contexto de la cosmología, un corrimiento al rojo (redshift) es una medida que indica el ___ de una galaxia respecto al observador."

explicacion: |
  El corrimiento al rojo es el cambio hacia longitudes de onda más largas debido al movimiento de alejamiento.
```

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

enunciado: "Si la constante de Hubble es de 10 km/s/Mpc y una galaxia está a una distancia de {distancia_m} Mpc, ¿cuál es su velocidad de recesión en km/s (v = H₀ × d)?"

pasos:
  - "Multiplicar la constante de Hubble (10 km/s/Mpc) por la distancia dada."

explicacion: |
  En un universo en expansión, la velocidad de alejamiento es proporcional a la distancia (Ley de Hubble).
```

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

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "basico"
  tags: ["analogia", "expansion"]

tipo: completar
respuestas_validas:
  - "distancia creciente"

enunciado: "Si imaginamos que las galaxias son puntos dibujados sobre la superficie de un globo que se infla, al aumentar el volumen del globo, la distancia constante entre los puntos se vuelve una ___."

explicacion: |
  La analogía del globo ilustra que no es el objeto el que se mueve por la superficie, sino que la superficie misma crece, separando los puntos.
```

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

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["metrica", "espacio_tiempo"]

tipo: completar
tolerancia_abs: 0

enunciado: "Si la expansión del universo es constante, la velocidad de recesión de una galaxia es proporcional a su distancia actual. ¿Cómo se denomina técnicamente la función a(t) que describe cómo cambia el tamaño del universo con el tiempo en la métrica de Friedmann-Lemaître-Robertson-Walker?"

respuestas_validas:
  - "factor de escala"

respuesta: "factor de escala"

explicacion: |
  El factor de escala 'a(t)' es una función que describe la evolución del tamaño del universo con el tiempo en la métrica de Friedmann-Lemaître-Robertson-Walker.
```

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

enunciado: "Cuando la longitud de onda de la luz de una estrella aumenta debido a su movimiento relativo, decimos que tiene un corrimiento al rojo, lo que significa que la estrella se está ___."

explicacion: |
  El aumento en la longitud de onda ($\lambda$) es la definición física del corrimiento al rojo.
```

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

## Sección: agujeros-negros (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "basico"
  tags: ["estrellas", "supernova", "gravedad"]

respuesta: "supernova"
tipo: completar
respuestas_validas:
  - "supernova"

enunciado: "Un agujero negro se forma cuando una estrella muy masiva colapsa gravitacionalmente tras agotar su combustible nuclear y explotar como una ___."

explicacion: |
  Cuando las estrellas masivas agotan su combustible, la presión hacia afuera cesa y la gravedad gana la batalla, provocando una explosión catastrófica llamada supernova.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "intermedio"
  tags: ["gravedad", "fuerza", "colapso"]

respuesta: "gravedad"
tipo: mc
opciones_explicitas: ["gravedad", "electromagnetismo", "fuerza nuclear fuerte"]

enunciado: "Durante el colapso de una estrella masiva que da origen a un agujero negro, ¿qué fuerza es la responsable de vencer la presión de la fusión nuclear y comprimir la materia?"

explicacion: |
  La gravedad es la fuerza fundamental que, al no encontrar resistencia por la falta de fusión nuclear, colapsa el núcleo de la estrella hacia un punto de densidad infinita.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "intermedio"
  tags: ["ciclo_estelar", "combustible"]

respuesta: "agotado"
tipo: completar
respuestas_validas:
  - "agotado"

enunciado: "El proceso de formación de un agujero negro comienza cuando el combustible nuclear de la estrella se ha ___."

explicacion: |
  Sin la energía de la fusión nuclear que empuja hacia afuera, la estrella pierde su equilibrio hidrostático y colapsa.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "basico"
  tags: ["secuencia", "supernova", "colapso"]

respuesta_orden: ["colapso gravitacional", "supernova", "agujero negro"]
tipo: ordenar
opciones_explicitas: ["colapso gravitacional", "supernova", "agujero negro"]

enunciado: "Ordena cronológicamente los eventos que llevan a la formación de un agujero negro a partir de una estrella masiva:"

explicacion: |
  Primero ocurre el colapso del núcleo, seguido de la explosión de la capa externa (supernova) y finalmente la formación del remanente denso (agujero negro).
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "avanzado"
  tags: ["masa", "estrellas", "supernova"]

variables:
  es_masiva: uno_de([verdadero, falso])

respuesta: verdadero

tipo: vf

enunciado: "Para que una estrella termine su vida como un agujero negro tras una supernova, ¿es necesario que su masa sea muy grande (masiva)?"

explicacion: |
  Solo las estrellas con una masa lo suficientemente grande pueden generar la presión gravitatoria necesaria para colapsar en un agujero negro; las estrellas pequeñas terminan como enanas blancas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "basico"
  tags: ["astronomia", "gravedad"]

respuesta: "horizonte de eventos"
tipo: completar
respuestas_validas:
  - "horizonte de eventos"

enunciado: "El límite esférico alrededor de un agujero negro más allá del cual la velocidad de escape es mayor que la velocidad de la luz se denomina ___."

explicacion: |
  El horizonte de eventos marca la frontera física donde la gravedad es tan intensa que nada, ni siquiera la radiación electromagnética (luz), puede escapar.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "intermedio"
  tags: ["fisica", "luz"]

opciones_explicitas: ["menor que la velocidad de la luz", "igual a la velocidad de la luz", "mayor que la velocidad de la luz"]

respuesta: "mayor que la velocidad de la luz"
tipo: mc

enunciado: "Para que un objeto pueda escapar de un agujero negro tras cruzar su horizonte de eventos, su velocidad debería ser..."

explicacion: |
  Por definición, el horizonte de eventos es la región donde la velocidad de escape necesaria supera la velocidad de la luz ($c$), haciendo que el escape sea físicamente imposible.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "avanzado"
  tags: ["estructura", "singularidad"]

variables:
  idx: uno_de([0, 1])
  escenario: [["un agujero negro de masa estelar", "se forma por el colapso de una estrella masiva"], ["un agujero negro supermasivo", "reside en el centro de las galaxias"]]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["se forma por el colapso de una estrella masiva", "reside en el centro de las galaxias"]

enunciado: "Si estamos analizando {escenario[idx][0]}, es correcto afirmar que este {escenario[idx][1]}."

explicacion: |
  El horizonte de eventos es una propiedad geométrica del espacio-tiempo que depende de la masa del objeto, ya sea que provenga del colapso estelar o de procesos galácticos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "basico"
  tags: ["luz", "gravedad"]

respuesta: "falso"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "¿Es posible que un fotón (partícula de luz) escape de la atracción gravitatoria una vez que ha cruzado el horizonte de eventos?"

explicacion: |
  No. La luz es la entidad más rápida del universo y, aun así, queda atrapada por la curvatura extrema del espacio-tiempo en el horizonte de eventos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "intermedio"
  tags: ["proceso", "caida"]

opciones_explicitas: ["Aproximación orbital", "Cruzar el horizonte de eventos", "Colapso hacia la singularidad"]

respuesta_orden: ["Aproximación orbital", "Cruzar el horizonte de eventos", "Colapso hacia la singularidad"]
tipo: ordenar

enunciado: "Ordena cronológicamente los eventos que experimentaría una partícula que cae hacia un agujero negro:"

pasos:
  - "La partícula se acerca siguiendo una trayectoria curva."
  - "La partícula atraviesa la frontera de no retorno."
  - "La partícula es comprimida hacia el centro matemático de densidad infinita."

explicacion: |
  Primero la partícula orbita o se acerca, luego cruza el horizonte de eventos (sin que un observador externo vea el paso instantáneo, pero para la partícula es un límite real) y finalmente cae hacia la singularidad.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "basico"
  tags: ["estrellas", "evolucion_estelar"]

variables:
  escenario: uno_de([["una estrella de baja masa", "enana blanca"], ["una estrella masiva", "estrella de neutrones"], ["una estrella supermasiva", "agujero negro"]])

enunciado: "Dependiendo de su masa inicial, el destino de una estrella varía. Una {escenario[0]} puede evolucionar hacia una {escenario[1]}."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["enana blanca", "estrella de neutrones", "agujero negro"]

explicacion: |
  Las estrellas pequeñas como nuestro Sol terminan su vida como enanas blancas. Solo las estrellas con masas extremadamente altas pueden colapsar hasta formar objetos más densos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "intermedio"
  tags: ["masa", "colapso"]

enunciado: "Si el núcleo remanente de una supernova supera el límite de Tolman-Oppenheimer-Volkoff, el colapso gravitatorio no se detiene y se forma un/a ___."

respuesta: "agujero negro"
tipo: completar
respuestas_validas:
  - "agujero negro"

explicacion: |
  Cuando la presión de degeneración de neutrones no puede contrarrestar la gravedad, el objeto colapsa indefinidamente hacia una singularidad, formando un agujero negro.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "intermedio"
  tags: ["secuencia", "evolucion"]

enunciado: "Ordena el proceso de evolución de una estrella masiva que termina en un agujero negro:"

pasos:
  - "Secuencia principal (fusión de hidrógeno)"
  - "Supernova (colapso del núcleo)"
  - "Agujero negro (singularidad)"

opciones_explicitas: ["Secuencia principal (fusión de hidrógeno)", "Supernova (colapso del núcleo)", "Agujero negro (singularidad)"]

respuesta_orden: ["Secuencia principal (fusión de hidrógeno)", "Supernova (colapso del núcleo)", "Agujero negro (singularidad)"]
tipo: ordenar

explicacion: |
  La evolución sigue un orden lógico: la fusión mantiene el equilibrio, la supernova es el evento explosivo de muerte y el agujero negro es el remanente final.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "basico"
  tags: ["remanentes"]

enunciado: "Si una estrella tiene una masa inicial moderada (menor que el límite para una supernova masiva), el remanente final será una ___."

respuesta: "enana blanca"
tipo: completar
respuestas_validas:
  - "enana blanca"

explicacion: |
  Las estrellas de masa baja o media expulsan sus capas externas y dejan un núcleo denso llamado enana blanca.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "avanzado"
  tags: ["clasificacion", "densidad"]

respuesta: "agujero negro"
tipo: mc
opciones_explicitas: ["enana blanca", "estrella de neutrones", "agujero negro"]

enunciado: "El objeto con la mayor densidad teórica, donde la gravedad impide incluso la salida de la luz, es el/la ___."

explicacion: |
  El agujero negro representa el límite extremo de la densidad, donde la curvatura del espacio-tiempo es infinita en la singularidad.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "basico"
  tags: ["galaxias", "centro_galactico"]

respuesta: "supermasivo"
tipo: completar
respuestas_validas:
  - "supermasivo"

enunciado: "A diferencia de los agujeros negros estelares, aquellos que residen en el centro de la mayoría de las galaxias, incluida la nuestra, se denominan agujeros negros ___."

explicacion: |
  Los agujeros negros supermasivos se encuentran en el núcleo de casi todas las galaxias grandes y poseen masas de millones o miles de millones de soles.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "intermedio"
  tags: ["masa", "comparacion"]

variables:
  escenario: uno_de([["estelar", "pequeño"], ["supermasivo", "gigante"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["pequeño", "gigante"]

enunciado: "Considerando la escala de masa, si comparamos un agujero negro estelar con uno situado en el centro de una galaxia, el segundo es un objeto de tamaño ___."

explicacion: |
  Los agujeros negros supermasivos son órdenes de magnitud más masivos que sus contrapartes estelares.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "basico"
  tags: ["via_lactea", "ubicacion"]

respuesta: "Sagitario A*"
tipo: mc
opciones_explicitas: ["Sagitario A*", "Sirio", "Betelgeuse", "Polaris"]

enunciado: "¿Cómo se denomina al agujero negro supermasivo situado en el centro de nuestra galaxia, la Vía Láctea?"

explicacion: |
  El objeto masivo en el centro de la Vía Láctea es conocido como Sagitario A*.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "avanzado"
  tags: ["evolucion", "masa"]

respuesta: 1000000
tipo: completar
tolerancia_abs: 0

enunciado: "Si un agujero negro estelar típico tiene una masa de aproximadamente 10 veces la masa solar, un agujero negro supermasivo promedio en una galaxia espiral puede tener aproximadamente ___ masas solares. Escribe el valor numérico (sin unidades)."

explicacion: |
  Los agujeros negros supermasivos superan con creces las escalas estelares, alcanzando millones de masas solares.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "intermedio"
  tags: ["clasificacion", "origen"]

respuesta: "supermasivo"
tipo: mc
opciones_explicitas: ["estelar", "supermasivo", "primordial"]

enunciado: "Los agujeros negros que se forman por el colapso de estrellas masivas se conocen como estelares. ¿Cuál es la clasificación de aquellos que habitan en el centro de las galaxias y poseen masas extremas?"

explicacion: |
  La distinción principal radica en su masa y su ubicación en el núcleo galáctico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "intermedio"
  tags: ["astronomia", "estrellas"]

variables:
  escenario: uno_de([["8 masas solares", "enana blanca"], ["15 masas solares", "estrella de neutrones"], ["40 masas solares", "agujero negro"]])
  masa_inicial: escenario[0]
  resultado_final: escenario[1]

tipo: mc
opciones_explicitas: ["enana blanca", "estrella de neutrones", "agujero negro"]
respuesta: resultado_final

enunciado: "Una estrella con una masa inicial de {masa_inicial} evolucionará, tras agotar su combustible, convirtiéndose en un/a ___."

explicacion: |
  El destino de una estrella depende de su masa remanente. Una estrella de {masa_inicial} terminará como un/a {resultado_final}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "avanzado"
  tags: ["fisica_estelar"]

variables:
  caso: uno_de([["1.4", "enana blanca"], ["2.5", "estrella de neutrones"], ["5.0", "agujero negro"]])
  valor: caso[0]
  destino: caso[1]

tipo: completar
respuestas_validas:
  - destino

enunciado: "Si el núcleo remanente de una estrella tiene una masa de {valor} masas solares, el objeto resultante será una ___."

explicacion: |
  El límite de Chandrasekhar (~1.4 M☉) determina si un remanente se convierte en enana blanca o colapsa más allá. En este caso, con {valor} M☉, el destino es {destino}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "intermedio"
  tags: ["evolucion_estelar"]

tipo: ordenar
opciones_explicitas: ["Secuencia principal", "Supernova", "Remanente compacto"]
respuesta_orden: ["Secuencia principal", "Supernova", "Remanente compacto"]

enunciado: "Ordena las etapas evolutivas de una estrella masiva que culminará en un agujero negro:"

explicacion: |
  Las estrellas masivas pasan por la secuencia principal, explotan como supernova y dejan un remanente (agujero negro si la masa es suficiente).
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "basico"
  tags: ["astronomia"]

variables:
  datos: [["enana blanca", "presión de degeneración electrónica"], ["estrella de neutrones", "presión de degeneración de neutrones"], ["agujero negro", "colapso gravitatorio total"]]
  idx: uno_de([0, 1, 2])
  objeto: datos[idx][0]
  causa: datos[idx][1]
  respuesta_correcta: datos[idx][1]

tipo: mc
opciones_explicitas: ["presión de degeneración electrónica", "presión de degeneración de neutrones", "colapso gravitatorio total"]
respuesta: respuesta_correcta

enunciado: "Un/a {objeto} se mantiene estable gracias a la {causa}."

explicacion: |
  El mecanismo de soporte depende de la masa: la {causa} es lo que define al/a {objeto}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "avanzado"
  tags: ["densidad", "gravedad"]

tipo: completar
tolerancia_abs: 0.1

enunciado: "El límite de Tolman-Oppenheimer-Volkoff, la masa máxima que puede sostener la presión de degeneración de neutrones antes de colapsar en un agujero negro, es de aproximadamente ___ masas solares."

pasos:
  - "Recordar el rango aceptado para el límite de Tolman-Oppenheimer-Volkoff (aprox 2-3 M☉)"

respuesta: 3

explicacion: |
  Al superar el límite crítico de ~3 M☉, la presión de degeneración de neutrones ya no puede contrarrestar la gravedad, y el objeto colapsa en un agujero negro.
```

## Sección: formacion-del-sistema-solar (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "intermedio"
  tags: ["nube_molecular", "estrellas_previas"]

enunciado: "Antes de la formación del Sol, el sistema solar se originó a partir de una ___ de gas y polvo que contenía elementos pesados fabricados por estrellas anteriores."
respuestas_validas:
  - "nube molecular"
respuesta: "nube molecular"
tipo: completar

explicacion: |
  La materia que nos compone no es sólo hidrógeno y helio; contiene elementos más pesados (metales en astronomía) que fueron sintetizados en el núcleo de estrellas que existieron antes que nuestro Sol.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "basico"
  tags: ["supernova", "colapso"]

enunciado: "El colapso de la nube molecular que dio origen al sistema solar fue provocado por la onda de choque de una cercana ___."
respuestas_validas:
  - "supernova"
respuesta: "supernova"
tipo: completar

explicacion: |
  Una supernova es la explosión cataclísmica de una estrella masiva al final de su vida. La energía liberada puede comprimir una nube de gas cercana, iniciando el proceso de formación estelar.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "basico"
  tags: ["gravedad", "colapso"]

enunciado: "Una vez que la nube molecular se comprimió, la ___ fue la fuerza principal que causó el colapso continuo hacia un centro común."
respuestas_validas:
  - "gravedad"
respuesta: "gravedad"
tipo: completar

explicacion: |
  La gravedad es la fuerza de atracción que hace que la materia se agrupe. A medida que la nube se hacía más densa, la atracción gravitatoria aumentaba, acelerando el colapso.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "intermedio"
  tags: ["acrecion", "planetesimales"]

enunciado: "Durante el proceso de formación, las partículas de polvo y hielo comenzaron a chocar y pegarse entre sí mediante un proceso llamado ___."
respuestas_validas:
  - "acreción"
  - "acrecion"
respuesta: "acreción"
tipo: completar

explicacion: |
  La acreción es el proceso de crecimiento de cuerpos celestes mediante la acumulación de material circundante. Así se formaron desde granos de polvo hasta planetesimales y, finalmente, planetas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "avanzado"
  tags: ["secuencia", "colapso"]

enunciado: "En la secuencia lógica del origen de nuestro sistema solar, el evento astronómico que perturbó la nube molecular con su onda de choque fue una ___."
respuestas_validas:
  - "supernova"
respuesta: "supernova"
tipo: completar

explicacion: |
  El proceso es una reacción en cadena: la explosión (supernova) genera la perturbación necesaria para que la gravedad venza la presión interna de la nube y provoque el colapso.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "basico"
  tags: ["disco_protoplanetario", "sol"]

respuesta: "Sol"
tipo: completar
respuestas_validas:
  - "Sol"

enunciado: "Durante la formación del sistema solar, aproximadamente el 99% de la masa del disco protoplanetario se concentró en el centro para formar el ___."

explicacion: |
  La gran mayoría de la masa de la nebulosa solar colapsó hacia el centro gravitatorio, dando origen al Sol, mientras que el resto formó el disco de polvo y gas donde nacieron los planetas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "basico"
  tags: ["masa", "distribucion"]

respuesta: "Sol"
tipo: mc
opciones_explicitas: ["Sol", "Planetas"]

enunciado: "Si analizamos la distribución de la masa en el sistema solar recién formado, ¿en qué cuerpo se concentró la mayor parte de la materia?"

explicacion: |
  El Sol contiene casi toda la masa del sistema, lo que explica su enorme influencia gravitatoria sobre el resto de los cuerpos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "intermedio"
  tags: ["temperatura", "condensacion"]

respuesta: "rocosos"
tipo: completar
respuestas_validas:
  - "rocosos"

enunciado: "Debido a la alta temperatura cerca del Sol, sólo los materiales con alto punto de fusión pudieron condensarse allí, dando lugar a la formación de planetas ___."

explicacion: |
  Cerca de la protoestrella, el calor era tan intenso que los elementos volátiles (gases y hielos) no podían permanecer en estado sólido, permitiendo sólo la acumulación de silicatos y metales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "intermedio"
  tags: ["gaseosos", "temperatura"]

respuesta: "lejos"
tipo: mc
opciones_explicitas: ["cerca", "lejos"]

enunciado: "Los planetas gaseosos (gigantes) se formaron en las regiones ___ del disco protoplanetario, donde las temperaturas eran lo suficientemente bajas para que los gases y el hielo se condensaran."

explicacion: |
  Más allá de la "línea de nieve", los materiales volátiles se volvieron sólidos, permitiendo que los núcleos planetarios crecieran lo suficiente como para capturar grandes cantidades de gas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "intermedio"
  tags: ["materiales", "condensacion"]

respuesta: "gaseosos"
tipo: completar
respuestas_validas:
  - "gaseosos"

enunciado: "Los planetas que pudieron retener grandes capas de hidrógeno y helio en su atmósfera debido a la baja temperatura en su zona de formación son los planetas ___."

explicacion: |
  La baja temperatura en el sistema solar externo permitió la condensación de hielos y la retención de gases ligeros, resultando en planetas de gran tamaño y composición gaseosa.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "basico"
  tags: ["acreción", "polvo_cósmico"]

respuesta: "polvo"
tipo: completar
respuestas_validas:
  - "polvo"

enunciado: "En las etapas iniciales de la formación del sistema solar, pequeñas partículas de ___ cósmico comenzaron a colisionar entre sí debido a la gravedad."

explicacion: |
  El proceso comenzó con partículas microscópicas de polvo y hielo que, al chocar, se adherían mediante fuerzas electrostáticas y luego gravitatorias.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "intermedio"
  tags: ["planetesimales", "gravedad"]

respuesta: "planetesimales"
tipo: completar
respuestas_validas:
  - "planetesimales"

enunciado: "Cuando las partículas de polvo crecen lo suficiente por acreción, forman objetos de mayor tamaño llamados ___."

explicacion: |
  Los planetesimales son los bloques de construcción fundamentales que, al agruparse, dan origen a los protoplanetas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "basico"
  tags: ["tiempo", "escala"]

respuesta: "millones"
tipo: completar
respuestas_validas:
  - "millones"

enunciado: "El proceso de acreción que transformó el disco protoplanetario en el sistema solar actual duró decenas de ___ de años."

explicacion: |
  La formación planetaria no es un evento instantáneo, sino un proceso que toma escalas de tiempo vastas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "avanzado"
  tags: ["secuencia", "acreción"]

respuesta_orden: ["polvo", "planetesimales", "protoplanetas", "planetas"]
tipo: ordenar
opciones_explicitas: ["polvo", "planetesimales", "protoplanetas", "planetas"]

enunciado: "Ordená cronológicamente las etapas de la formación de un planeta mediante el proceso de acreción:"

explicacion: |
  La jerarquía de la acreción va desde lo microscópico (polvo) hasta la consolidación de cuerpos masivos (planetas).
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "intermedio"
  tags: ["gravedad", "colisión"]

respuesta: "acreción"
tipo: completar
respuestas_validas:
  - "acreción"
  - "acrecion"

enunciado: "El proceso físico mediante el cual la gravedad atrae materia para formar cuerpos cada vez más grandes se denomina ___."

explicacion: |
  La acreción es el mecanismo principal por el cual la materia se aglutina para formar estructuras planetarias.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "basico"
  tags: ["asteroides", "marte", "jupiter"]

tipo: mc
opciones_explicitas: ["Entre la Tierra y Marte", "Entre Marte y Júpiter", "Más allá de Neptuno", "En el centro del Sol"]
respuesta: "Entre Marte y Júpiter"

enunciado: "¿Dónde se localiza principalmente el cinturón de asteroides, compuesto por restos rocosos que nunca llegaron a formar un planeta?"

explicacion: |
  El cinturón de asteroides se encuentra en el espacio situado entre las órbitas de Marte y Júpiter. Su presencia se debe a la enorme gravedad de Júpiter que impidió la formación de un planeta en esa zona.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "intermedio"
  tags: ["cometas", "kuiper", "oort"]

respuesta: "Cinturón de Kuiper y Nube de Oort"
tipo: mc
opciones_explicitas: ["Cinturón de asteroides", "Cinturón de Kuiper y Nube de Oort", "El Sol", "La Luna"]

enunciado: "Los cometas que visitan el sistema solar interno provienen mayoritariamente de las regiones más externas, específicamente del ___."

explicacion: |
  Los cometas son cuerpos compuestos de hielo y polvo que provienen del cinturón de Kuiper (más allá de Neptuno) y de la nube de Oort (la región más externa y difusa del sistema solar).
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "basico"
  tags: ["kuiper", "neptuno"]

tipo: vf
respuesta: verdadero

enunciado: "El cinturón de Kuiper se encuentra situado más allá de la órbita de Neptuno."

explicacion: |
  Correcto. El cinturón de Kuiper es una región de objetos helados que se extiende desde la órbita de Neptuno hacia el espacio exterior.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "avanzado"
  tags: ["oort", "cometas"]

tipo: mc
opciones_explicitas: ["Cinturón de asteroides", "Cinturón de Kuiper", "Nube de Oort", "Disco protoplanetario"]
respuesta: "Nube de Oort"

enunciado: "La región esférica y extremadamente lejana que rodea al sistema solar y que contiene una enorme cantidad de cometas de largo período se denomina:"

explicacion: |
  La nube de Oort es la frontera más externa del sistema solar, una zona teórica de objetos helados que orbitan muy lejos del Sol.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "basico"
  tags: ["planetas", "restos"]

tipo: vf
respuesta: falso

enunciado: "Los asteroides del cinturón principal son restos de gases que no pudieron condensarse debido al calor del Sol."

explicacion: |
  Falso. Los asteroides son restos de materiales rocosos y metálicos que no pudieron agruparse para formar un planeta debido a la perturbación gravitatoria de Júpiter.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "basico"
  tags: ["planetas", "distancia", "sol"]

variables:
  idx: uno_de([0, 1])
  escenario: [["zona interna", "rocoso"], ["zona externa", "gaseoso"]]

tipo: mc
opciones_explicitas: ["rocoso", "gaseoso"]
respuesta: escenario[idx][1]

enunciado: "En la fase de acreción del disco protoplanetario, los materiales en la {escenario[idx][0]} tienden a formar un planeta de tipo ___."

explicacion: |
  Cerca del Sol, el calor impide la condensación de gases y hielos, dejando sólo materiales con alto punto de fusión como silicatos y metales, formando planetas rocosos; lejos, ocurre lo contrario.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "intermedio"
  tags: ["gas", "hielo", "distancia"]

variables:
  idx: uno_de([0, 1])
  caso: [["Júpiter", "hidrógeno y helio"], ["Urano", "hielos y gases ligeros"]]

tipo: mc
opciones_explicitas: ["hidrógeno y helio", "hielos y gases ligeros", "roca y metal"]
respuesta: caso[idx][1]

enunciado: "Considerando la línea de congelación, un planeta como {caso[idx][0]} habrá acumulado principalmente ___."

explicacion: |
  Más allá de la línea de congelación, los volátiles (hielos) pueden condensarse, permitiendo que los núcleos crezcan lo suficiente para capturar grandes cantidades de gas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "avanzado"
  tags: ["materiales", "condensación"]

respuesta: "hielos volátiles"
tipo: completar
respuestas_validas:
  - "hielos volátiles"
  - "hielos volatiles"

enunciado: "Si la temperatura del disco protoplanetario permite la condensación de ___ en grandes cantidades, el planeta resultante será un gigante gaseoso."

explicacion: |
  La disponibilidad de materiales (hielos vs. silicatos) determina si el planeta será un mundo pequeño y denso o un gigante masivo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "intermedio"
  tags: ["linea_nieve", "condensación"]

respuesta: "gaseoso"
tipo: mc
opciones_explicitas: ["rocoso", "gaseoso"]

enunciado: "Un objeto que se forma por encima de la línea de nieve tendrá una composición predominantemente ___."

explicacion: |
  La línea de nieve marca el punto donde los compuestos volátiles se congelan, cambiando drásticamente la masa disponible para la acreción.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "avanzado"
  tags: ["acreción", "masa", "gas"]

respuesta: "gaseoso"
tipo: completar
respuestas_validas:
  - "gaseoso"

enunciado: "Si la acreción resulta en un núcleo de unas 10 masas terrestres, el planeta podrá capturar rápidamente la atmósfera del disco, resultando en un planeta ___."

explicacion: |
  Existe un umbral crítico de masa (aprox. 10 masas terrestres) que permite que la gravedad retenga el hidrógeno y el helio antes de que el viento solar los disperse.
```

## Sección: ley-de-hubble (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["astronomia", "cosmologia"]

respuesta: "alejamiento"
tipo: completar
respuestas_validas:
  - "alejamiento"
  - "expansión"

enunciado: "La Ley de Hubble establece que la velocidad de ___ de las galaxias es proporcional a su distancia respecto a la Tierra."

explicacion: |
  La ley de Hubble-Lemaître indica que cuanto más lejana es una galaxia, mayor es la velocidad con la que se aleja de nosotros, lo que sugiere la expansión del universo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "mayor"
tipo: mc
opciones_explicitas: ["menor", "mayor", "igual", "nula"]

enunciado: "Si una galaxia A está al doble de distancia que una galaxia B, según la Ley de Hubble, la velocidad de la galaxia A será ___ que la de la galaxia B."

explicacion: |
  Como la velocidad es directamente proporcional a la distancia ($v \propto d$), si la distancia se duplica, la velocidad también se duplica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  distancia: 100000000
  hubble: 70

respuesta: 7000000000
tipo: completar
tolerancia_abs: 1

enunciado: "Una galaxia se encuentra a una distancia de {distancia} Mpc. Si la constante de Hubble es $H_0 = {hubble}$ km/s/Mpc, ¿cuál es la velocidad de recesión en km/s? (Usa la fórmula $v = H_0 \\cdot d$)"

pasos:
  - "Identificar la distancia ($d$) y la constante de Hubble ($H_0$)."
  - "Multiplicar la constante de Hubble por la distancia: $v = 70 \\cdot 100.000.000$."

explicacion: |
  Aplicando la fórmula $v = H_0 \cdot d$: $70 \times 100.000.000 = 7.000.000.000$ km/s.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["formula"]

respuesta: "distancia"
tipo: completar
respuestas_validas:
  - "distancia"
  - "velocidad"
  - "constante"

enunciado: "En la expresión matemática $v = H_0 \\cdot d$, la variable $d$ representa la ___ de la galaxia."

explicacion: |
  En la ecuación de Hubble, $v$ es la velocidad de recesión, $H_0$ es la constante de Hubble y $d$ es la distancia.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "avanzado"
  tags: ["teoria"]

respuesta: "verdadero"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "¿Es correcto afirmar que la Ley de Hubble implica que el universo se está expandiendo?"

explicacion: |
  Sí, el hecho de que todas las galaxias presenten un corrimiento al rojo (redshift) proporcional a su distancia es la evidencia fundamental de la expansión del tejido espacio-temporal.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["astronomia", "hubble", "expansion"]

respuesta: "expansión"
tipo: completar
respuestas_validas:
  - "expansión"
  - "expansion"

enunciado: "En 1929, Edwin Hubble observó que las galaxias lejanas se alejan de nosotros, lo que proporcionó evidencia fundamental de la ___ del universo."

explicacion: |
  Hubble descubrió que el universo no es estático, sino que está en constante expansión, lo que cambió nuestra comprensión del cosmos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["ley_de_hubble", "velocidad", "distancia"]

variables:
  escenario: uno_de([["10 Mpc", "200 km/s"], ["20 Mpc", "400 km/s"], ["50 Mpc", "1000 km/s"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["100 km/s", "200 km/s", "300 km/s", "400 km/s", "1000 km/s"]

enunciado: "Si aplicamos la lógica de la Ley de Hubble, donde la velocidad de recesión es proporcional a la distancia, ¿cuál es la velocidad aproximada de una galaxia situada a {escenario[0]} de distancia?"

pasos:
  - "Identificar la distancia proporcionada."
  - "Relacionar la distancia con la velocidad según el escenario asignado."

explicacion: |
  La Ley de Hubble establece que $v = H_0 \cdot d$. En este ejercicio, se ha asignado un valor de velocidad proporcional a la distancia dada en el escenario.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["efecto_doppler", "redshift"]

respuesta: "corrimiento al rojo"
tipo: completar
respuestas_validas:
  - "corrimiento al rojo"
  - "redshift"

enunciado: "El fenómeno mediante el cual la luz de las galaxias lejanas se desplaza hacia longitudes de onda más largas debido al alejamiento es conocido como ___."

explicacion: |
  Este fenómeno, llamado 'redshift' o corrimiento al rojo, es la base observacional que permitió a Hubble concluir que las galaxias se alejan.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["cosmologia", "modelo_estatico"]

respuesta: "falso"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Antes de los descubrimientos de Hubble, la creencia predominante en la comunidad científica era que el universo era estático. ¿Es correcto afirmar que la Ley de Hubble refuta esta idea? "

explicacion: |
  Correcto. La observación de que las galaxias se alejan invalidó el modelo de un universo estático y dio paso al modelo del Big Bang.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "avanzado"
  tags: ["metodologia", "evidencia"]

respuesta_orden: ["observación del redshift", "cálculo de la velocidad de recesión", "conclusión de la expansión universal"]
tipo: ordenar
opciones_explicitas: ["observación del redshift", "cálculo de la velocidad de recesión", "conclusión de la expansión universal"]

enunciado: "Ordena cronológicamente los pasos lógicos que llevaron a Hubble a concluir la expansión del universo:"

pasos:
  - "Detectar el cambio de color en el espectro de las galaxias."
  - "Determinar qué tan rápido se alejan según su distancia."
  - "Deducir que el espacio mismo se está expandiendo."

explicacion: |
  Primero se observa el desplazamiento espectral (redshift), luego se cuantifica la velocidad de alejamiento y finalmente se interpreta como una expansión del tejido del universo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["astronomia", "cosmologia"]

enunciado: "Según la Ley de Hubble, la velocidad de alejamiento (v) de una galaxia es directamente proporcional a su distancia (d). Esto se expresa mediante la fórmula v = H0 * d. Si una galaxia se encuentra a una distancia mayor, su velocidad de alejamiento será ___."

opciones_explicitas: ["menor", "mayor", "igual", "nula"]
respuesta: "mayor"
tipo: "mc"

explicacion: |
  La Ley de Hubble establece una relación de proporcionalidad directa: a mayor distancia, mayor es la velocidad con la que la galaxia se aleja de nosotros.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["calculo", "astronomia"]

variables:
  distancia_m: 100000000
  h0_valor: 70

enunciado: "Utilizando una constante de Hubble H0 de {h0_valor} km/s/Mpc, calcula la velocidad de alejamiento de una galaxia situada a {distancia_m} Mpc."

pasos:
  - "Identificar la constante H0: 70 km/s/Mpc"
  - "Identificar la distancia: 100,000,000 Mpc"
  - "Multiplicar H0 por la distancia: 70 * 100,000,000"

respuesta: 7000000000
tipo: "input"
tolerancia_abs: 0

explicacion: |
  La velocidad se obtiene multiplicando la constante de Hubble por la distancia: 70 * 10^8 = 7 * 10^9 km/s.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "avanzado"
  tags: ["cosmologia", "tiempo"]

variables:
  datos: [[70, "13.8"], [50, "20.0"]]
  idx: uno_de([0, 1])
  h0: datos[idx][0]
  edad: datos[idx][1]

enunciado: "La edad aproximada del universo se puede estimar mediante el inverso de la constante de Hubble (1/H0). Si tomamos un valor de H0 de {h0} km/s/Mpc, la edad estimada es de aproximadamente ___ miles de millones de años."

respuestas_validas:
  - "13.8"
  - "20.0"
respuesta: edad
tipo: "completar"

explicacion: |
  El tiempo estimado (edad del universo) es inversamente proporcional a H0. A mayor valor de la constante, menor es la edad estimada del universo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["conceptos"]

enunciado: "Ordena los elementos según la lógica de la expansión del universo descrita por Edwin Hubble, desde la causa hasta el efecto observado:"

opciones_explicitas: ["Expansión del espacio", "Aumento de la distancia entre galaxias", "Aumento de la velocidad de alejamiento"]
respuesta_orden: ["Expansión del espacio", "Aumento de la distancia entre galaxias", "Aumento de la velocidad de alejamiento"]
tipo: "ordenar"

explicacion: |
  La expansión del espacio provoca que las galaxias se alejen (aumenta la distancia), lo cual se traduce en una velocidad de alejamiento mayor según la Ley de Hubble.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["conceptos"]

enunciado: "¿Es correcto afirmar que si la constante de Hubble (H0) fuera mayor, el universo sería más joven?"

opciones_explicitas: ["Verdadero", "Falso"]
respuesta: "Verdadero"
tipo: "mc"

explicacion: |
  Verdadero. Como la edad es aproximadamente 1/H0, un valor de H0 más grande implica un tiempo (edad) menor.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["cosmologia", "hubble", "observacion"]

respuesta: "principio_cosmologico"
tipo: mc

opciones_explicitas: ["principio_cosmologico", "teoria_geocentrica", "teoria_estatica", "modelo_de_hubble"]

enunciado: "El hecho de que todas las galaxias parezcan alejarse de nosotros debido a la expansión del universo no significa que la Tierra sea el centro. Este concepto de que el universo se ve igual para cualquier observador está ligado al..."

explicacion: |
  El principio cosmológico establece que, a gran escala, el universo es homogéneo e isotrópico. La expansión es una propiedad del espacio mismo, por lo que cualquier observador en cualquier galaxia vería el mismo efecto de alejamiento.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["expansion", "observacion"]

respuesta: "se alejan"
tipo: completar

respuestas_validas:
  - "se alejan"
  - "se acercan"
  - "estacionarias"

enunciado: "Si un observador se situara en una galaxia muy lejana, en lugar de la Tierra, vería que las demás galaxias del universo ___ de la misma forma que nosotros."

explicacion: |
  La expansión del universo no es una explosión que ocurre desde un punto central, sino una expansión del tejido mismo del espacio. Por lo tanto, desde cualquier punto, la observación es la misma.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["geometria", "espacio"]

respuesta: "falso"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]
enunciado: "¿Es correcto afirmar que la Ley de Hubble implica que existe un punto central en el universo desde el cual todas las galaxias se expanden en forma radial, situando a la Tierra en un lugar privilegiado?"

explicacion: |
  Falso. La expansión es local en cada punto del espacio. Es similar a la superficie de un globo inflándose: todos los puntos se alejan de todos los demás, sin que haya un centro en la superficie.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "avanzado"
  tags: ["isotropia", "observador"]

respuesta: "isotropico"
tipo: completar

respuestas_validas:
  - "isotropico"
  - "anisotropico"
  - "central"

enunciado: "Debido a la naturaleza de la expansión, el universo es ___ para cualquier observador, ya sea uno situado en la Vía Láctea o uno en una galaxia lejana, lo que significa que las leyes físicas y la apariencia de la expansión no dependen de la posición del observador."

explicacion: |
  La isotropía significa que las propiedades del universo son las mismas en todas las direcciones. Esto garantiza que no haya un "centro" observable.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["logica", "historia"]

opciones_explicitas: ["observacion_galaxias", "conclusion_expansion", "implicacion_no_centro"]
respuesta_orden: ["observacion_galaxias", "conclusion_expansion", "implicacion_no_centro"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos que llevaron a la comprensión moderna del universo tras el descubrimiento de Hubble:"

pasos:
  - "Se observa el corrimiento al rojo en galaxias lejanas."
  - "Se concluye que el universo se está expandiendo."
  - "Se comprende que la expansión es una propiedad del espacio y no un alejamiento desde un centro."

explicacion: |
  Primero se detecta el fenómeno (redshift), luego se interpreta como expansión y finalmente se entiende que esto no requiere un centro geométrico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["astronomia", "calculo"]

variables:
  escenario: uno_de([[10, 70], [25, 75], [50, 65]])
  distancia: escenario[0]
  h0: escenario[1]
  velocidad: distancia * h0

respuesta: velocidad
tipo: completar
tolerancia_abs: 0.1

enunciado: "Una galaxia se encuentra a una distancia de {distancia} Mpc. Si la constante de Hubble es H0 = {h0} (km/s)/Mpc, ¿cuál es su velocidad de alejamiento en km/s?"

explicacion: |
  Según la Ley de Hubble: v = H0 * d.
  En este caso: {distancia} * {h0} = {velocidad} km/s.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "tasa de expansión"
tipo: completar
respuestas_validas:
  - "tasa de expansión"
  - "velocidad de la luz"
  - "masa galáctica"

enunciado: "La constante de Hubble representa la ___ del universo."

explicacion: |
  La constante de Hubble (H0) mide qué tan rápido se expande el universo en relación a la distancia.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["conceptos", "observacion"]

respuesta: "se aleja"
tipo: mc
opciones_explicitas: ["se acerca", "se aleja", "está estática", "colapsa"]

enunciado: "Si observamos un redshift (desplazamiento al rojo) en una galaxia, según la Ley de Hubble, esto indica que la galaxia ___ de nosotros."

explicacion: |
  El redshift es la prueba observacional de que las galaxias se están alejando, lo cual es la base de la expansión del universo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "avanzado"
  tags: ["calculo", "inverso"]

respuesta: 20
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si una galaxia tiene una velocidad de alejamiento de 1400 km/s y asumimos una constante de Hubble de 70 (km/s)/Mpc, ¿a qué distancia se encuentra en Mpc?"

pasos:
  - "Identificar la velocidad (v) y la constante (H0)."
  - "Despejar la distancia de la fórmula v = H0 * d, obteniendo d = v / H0."

explicacion: |
  Para hallar la distancia, dividimos la velocidad por la constante de Hubble: 1400 / 70 = 20 Mpc.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["orden", "conceptos"]

respuesta_orden: ["Observación de Redshift", "Cálculo de Velocidad", "Aplicación de Ley de Hubble"]
tipo: ordenar
opciones_explicitas: ["Observación de Redshift", "Cálculo de Velocidad", "Aplicación de Ley de Hubble"]

enunciado: "Ordena los pasos lógicos para determinar la distancia de una galaxia usando la Ley de Hubble a partir de la observación astronómica."

explicacion: |
  Primero se observa el desplazamiento (redshift), luego se calcula la velocidad a partir de ese desplazamiento y finalmente se usa la Ley de Hubble para hallar la distancia.
```

## Sección: movimiento-rotacion-traslacion (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_rotacion_traslacion"
  nivel: "basico"
  tags: ["astronomia", "conceptos_basicos"]

tipo: completar
respuestas_validas:
  - "rotación"
  - "rotacion"
respuesta: "rotación"

enunciado: "El movimiento que realiza la Tierra sobre su propio eje se denomina ___."

explicacion: |
  La rotación es el giro de la Tierra sobre su eje imaginario, lo que determina la sucesión del día y la noche.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_rotacion_traslacion"
  nivel: "basico"
  tags: ["tiempo", "ciclo_dia"]

tipo: completar
respuestas_validas:
  - "24 horas"
respuesta: "24 horas"

enunciado: "Un giro completo de la Tierra sobre su propio eje tarda aproximadamente ___."

explicacion: |
  Este ciclo de aproximadamente 24 horas es lo que marca el ritmo de un día completo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_rotacion_traslacion"
  nivel: "basico"
  tags: ["fenomenos_naturales"]

tipo: completar
respuestas_validas:
  - "día y la noche"
  - "dia y la noche"
respuesta: "día y la noche"

enunciado: "La rotación terrestre es el fenómeno responsable de la alternancia entre el ___."

explicacion: |
  Debido a que la Tierra es una esfera, una cara recibe luz solar mientras la otra queda en sombra, creando el ciclo de luz y oscuridad.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_rotacion_traslacion"
  nivel: "intermedio"
  tags: ["errores_comunes", "perspectiva"]

tipo: completar
respuestas_validas:
  - "Sol"

respuesta: "Sol"

enunciado: "Un error común de la percepción humana es pensar que es el ___ el que gira alrededor de la Tierra."

explicacion: |
  Históricamente, el modelo geocéntrico creía que el Sol orbitaba la Tierra, pero hoy sabemos que es la Tierra la que rota.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_rotacion_traslacion"
  nivel: "basico"
  tags: ["eje_terrestre"]

tipo: completar
respuestas_validas:
  - "eje"
respuesta: "eje"

enunciado: "La Tierra gira sobre una línea imaginaria que atraviesa los polos, llamada ___."

explicacion: |
  Este eje imaginario es el punto central sobre el cual se produce el movimiento de rotación.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_rotacion_traslacion"
  nivel: "basico"
  tags: ["astronomia", "calendario"]

tipo: mc
opciones_explicitas: ["El tiempo que tarda la Tierra en dar una vuelta sobre su eje", "El tiempo que tarda la Tierra en completar una órbita alrededor del Sol", "El tiempo que tarda la Luna en rodear la Tierra", "El tiempo que tarda el Sol en rodear la Tierra"]

respuesta: "El tiempo que tarda la Tierra en completar una órbita alrededor del Sol"

enunciado: "En términos astronómicos, ¿qué define la duración de un año?"

explicacion: |
  Un año es, por definición, el tiempo que le toma a la Tierra completar una vuelta entera alrededor del Sol (traslación).
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_rotacion_traslacion"
  nivel: "basico"
  tags: ["geometria", "orbita"]

tipo: completar
respuestas_validas:
  - "elipse"

respuesta: "elipse"

enunciado: "Aunque a menudo se simplifica, la trayectoria que sigue la Tierra alrededor del Sol no es un círculo perfecto, sino una ___."

explicacion: |
  La órbita terrestre es una elipse ligeramente achatada, con el Sol ubicado en uno de sus dos focos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_rotacion_traslacion"
  nivel: "basico"
  tags: ["tiempo", "calendario"]

tipo: mc
opciones_explicitas: ["24 horas", "28 días", "aproximadamente 365 días", "12 meses de 30 días"]

respuesta: "aproximadamente 365 días"

enunciado: "El movimiento de traslación terrestre completa su ciclo en un período de aproximadamente ___."

explicacion: |
  La Tierra tarda aproximadamente 365 días (más un cuarto) en completar una vuelta completa alrededor del Sol.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_rotacion_traslacion"
  nivel: "intermedio"
  tags: ["conceptos"]

tipo: mc
opciones_explicitas: ["La traslación causa las estaciones del año", "La traslación causa el día y la noche", "La traslación es el movimiento sobre su propio eje", "La rotación es el movimiento alrededor del Sol"]

respuesta: "La traslación causa las estaciones del año"

enunciado: "¿Cuál de las siguientes afirmaciones describe correctamente la relación entre los movimientos terrestres y sus efectos?"

explicacion: |
  La traslación (combinada con la inclinación del eje) es la que causa las estaciones del año; la rotación causa el día y la noche.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_rotacion_traslacion"
  nivel: "intermedio"
  tags: ["estaciones", "traslacion"]

tipo: completar
respuestas_validas:
  - "traslación"
  - "traslacion"

respuesta: "traslación"

enunciado: "El cambio de las estaciones del año es una consecuencia directa del movimiento de ___ de la Tierra."

explicacion: |
  El cambio de estaciones surge de la combinación entre la traslación y la inclinación constante del eje terrestre.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_rotacion_traslacion"
  nivel: "basico"
  tags: ["astronomia", "estaciones"]

respuesta: "23.5"
tipo: completar
respuestas_validas:
  - "23.5"
  - "23,5"

enunciado: "La inclinación del eje de la Tierra respecto al plano de su órbita es de aproximadamente ___ grados."

explicacion: |
  La inclinación de ~23,5° es fundamental para la distribución de la radiación solar a lo largo del año.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_rotacion_traslacion"
  nivel: "basico"
  tags: ["estabilidad", "traslacion"]

respuesta: "se mantiene constante"
tipo: completar
respuestas_validas:
  - "se mantiene constante"

enunciado: "Durante el proceso de traslación alrededor del Sol, la inclinación del eje de la Tierra ___."

explicacion: |
  El hecho de que el eje apunte siempre hacia la misma dirección (hacia la estrella polar) permite la periodicidad de las estaciones.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_rotacion_traslacion"
  nivel: "intermedio"
  tags: ["estaciones", "inclinacion"]

respuestas_validas:
  - "la inclinación del eje"
  - "la inclinacion del eje"
respuesta: "la inclinación del eje"
tipo: completar

enunciado: "La causa principal de la sucesión de las estaciones del año es ___."

explicacion: |
  La inclinación hace que la luz solar incida con diferentes ángulos y duraciones sobre el hemisferio norte y sur a lo largo del año.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_rotacion_traslacion"
  nivel: "intermedio"
  tags: ["ecliptic", "geometria"]

respuesta: "plano orbital"
tipo: completar
respuestas_validas:
  - "plano orbital"
  - "plano de la eclíptica"

enunciado: "El eje de rotación de la Tierra forma un ángulo de 23,5 grados con respecto al ___."

explicacion: |
  Este plano se conoce también como plano de la eclíptica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_rotacion_traslacion"
  nivel: "avanzado"
  tags: ["hemisferios", "solsticio"]

respuestas_validas:
  - "verano"
respuesta: "verano"
tipo: completar

enunciado: "Cuando el hemisferio norte está inclinado hacia el Sol, en esa región se experimenta el ___."

explicacion: |
  Al estar inclinado hacia el Sol, los rayos caen más perpendicularmente, aumentando la intensidad del calor.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_rotacion_traslacion"
  nivel: "basico"
  tags: ["rotacion", "dia_noche"]

tipo: mc
opciones_explicitas: ["El movimiento de traslación de la Tierra", "El movimiento de rotación de la Tierra", "La inclinación del eje terrestre", "La presencia de la Luna"]

respuesta: "El movimiento de rotación de la Tierra"

enunciado: "El fenómeno de la sucesión de los días y las noches en nuestro planeta se debe principalmente al movimiento de ___."

explicacion: |
  La rotación es el giro de la Tierra sobre su propio eje, lo que permite que la luz solar afecte a diferentes partes del planeta de forma sucesiva, creando el ciclo día/noche.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_rotacion_traslacion"
  nivel: "basico"
  tags: ["traslacion", "estaciones"]

tipo: completar
respuestas_validas:
  - "traslación"
  - "traslacion"
respuesta: "traslación"

enunciado: "El movimiento de ___ es el responsable de que el año tenga estaciones y de que la Tierra complete su órbita alrededor del Sol."

explicacion: |
  La traslación es el movimiento de la Tierra alrededor del Sol. Junto con la inclinación del eje terrestre, este movimiento determina las estaciones del año.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_rotacion_traslacion"
  nivel: "intermedio"
  tags: ["dia_solar", "tiempo"]

tipo: mc
opciones_explicitas: ["24 horas exactas", "23 horas y 56 minutos", "23 horas y 30 minutos", "24 horas y 4 minutos"]

respuesta: "23 horas y 56 minutos"

enunciado: "Debido a que la Tierra se desplaza en su órbita mientras rota, el tiempo que tarda en volver a la misma posición respecto a las estrellas lejanas (día sidéreo) es aproximadamente de ___."

explicacion: |
  El día sidéreo dura aproximadamente 23h 56min. La diferencia con el día solar de 24h se debe a que la Tierra debe rotar un poco más para compensar su avance en la órbita alrededor del Sol.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_rotacion_traslacion"
  nivel: "intermedio"
  tags: ["año_bisiesto", "calendario"]

tipo: mc
opciones_explicitas: ["365 días", "365.25 días", "366 días", "365.5 días"]

respuesta: "365.25 días"

enunciado: "Para que el calendario coincida con el ciclo real de la traslación terrestre, se considera que un año dura aproximadamente ___."

explicacion: |
  Como el año real es de unos 365,25 días, cada cuatro años se suma un día extra (29 de febrero) para corregir la diferencia acumulada.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_rotacion_traslacion"
  nivel: "basico"
  tags: ["movimientos", "simultaneidad"]

tipo: completar
respuestas_validas:
  - "simultáneos"
  - "simultaneos"
respuesta: "simultáneos"

enunciado: "Los movimientos de rotación y traslación ocurren de forma ___; es decir, suceden al mismo tiempo sin que uno detenga al otro."

explicacion: |
  La Tierra realiza ambos movimientos de manera constante y simultánea: gira sobre su eje mientras orbita alrededor del Sol.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_rotacion_traslacion"
  nivel: "basico"
  tags: ["astronomia", "basico"]

variables:
  idx: uno_de([0, 1])
  escenario: [["El sol sale por el este cada mañana", "rotación"], ["El sol se pone por el oeste cada tarde", "rotación"]]

enunciado: "El fenómeno descrito en el siguiente escenario es causado por el movimiento de: {escenario[idx][0]}"

opciones_explicitas: ["rotación", "traslación"]
respuesta: escenario[idx][1]
tipo: mc

explicacion: |
  El movimiento de rotación de la Tierra sobre su propio eje es lo que genera la sucesión del día y la noche.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_rotacion_traslacion"
  nivel: "intermedio"
  tags: ["astronomia", "estaciones"]

variables:
  idx: uno_de([0, 1])
  escenario: [["La llegada del invierno en el hemisferio sur", "traslación"], ["El verano en el hemisferio norte", "traslación"]]

enunciado: "El fenómeno de {escenario[idx][0]} se explica principalmente por la ___ de la Tierra alrededor del Sol (considerando la inclinación del eje)."

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas:
  - "traslación"
  - "traslacion"

explicacion: |
  La traslación, junto con la inclinación del eje terrestre, determina la duración de las estaciones del año.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_rotacion_traslacion"
  nivel: "basico"
  tags: ["astronomia", "calendario"]

opciones_explicitas: ["rotación", "traslación"]
respuesta: "traslación"
tipo: mc

enunciado: "El paso de un año completo (un ciclo de un año solar) es efecto de la ___ terrestre."

explicacion: |
  Un año es el tiempo que tarda la Tierra en completar una órbita completa alrededor del Sol (traslación).
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_rotacion_traslacion"
  nivel: "intermedio"
  tags: ["astronomia", "observacion"]

respuesta: "rotación"
tipo: completar
respuestas_validas:
  - "rotación"
  - "rotacion"

enunciado: "El cambio de posición de la sombra de un reloj de sol a lo largo del día se debe a la ___ de la Tierra."

explicacion: |
  El movimiento aparente de las sombras durante el día es consecuencia directa de la rotación terrestre sobre su eje.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_rotacion_traslacion"
  nivel: "avanzado"
  tags: ["astronomia", "estrellas"]

opciones_explicitas: ["rotación", "traslación"]
respuesta: "traslación"
tipo: mc

enunciado: "El hecho de que veamos distintas constelaciones visibles en el cielo nocturno según la época del año se debe al movimiento de ___ de nuestro planeta."

explicacion: |
  Al movernos alrededor del Sol, nuestra perspectiva hacia las estrellas cambia, permitiéndonos ver diferentes constelaciones en distintas épocas del año.
```

