# Examen jefe — Crónica del Cosmos y la Vida

> Logro #106. Dominaste los eventos que forjaron el universo y el origen de la atmósfera. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **125 preguntas totales** en 5/5 secciones.

---

## Sección: explosion-cambrica (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "basico"
  tags: ["paleontologia", "evolucion"]

respuesta: "541"
tipo: completar
tolerancia_abs: 1

enunciado: "La Explosión Cámbrica ocurrió hace aproximadamente ___ millones de años."

explicacion: |
  La Explosión Cámbrica comenzó hace unos 541 millones de años, marcando el inicio del periodo Cámbrico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["taxonomia", "evolucion"]

variables:
  escenario: uno_de([
    ["la mayoría de los grupos corporales", "phyla"],
    ["la mayor parte de los animales", "phyla"]
  ])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["phyla", "clases", "especies", "órdenes"]

enunciado: "Durante la Explosión Cámbrica, se produjo la aparición de la mayoría de los grandes grupos animales actuales, conocidos como ___."

explicacion: |
  Se refiere a los phyla (filos), que son las categorías taxonómicas más altas de los animales.
```

```
metadata:
  materia: "historia_profucha"
  tema: "explosion_cambrica"
  nivel: "basico"
  tags: ["tiempo_geologico"]

respuesta: 25
tipo: completar
tolerancia_abs: 5

enunciado: "Aunque fue un evento masivo, la Explosión Cámbrica fue un periodo relativamente breve en términos geológicos, durando aproximadamente ___ millones de años."

pasos:
  - "Identificar el rango de tiempo estimado para la diversificación de los filos."

explicacion: |
  Se estima que este evento de diversificación duró entre 20 y 25 millones de años.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "avanzado"
  tags: ["paleontologia", "fósiles"]

variables:
  comparacion: uno_de([
    ["más complejos", "más complejos"],
    ["más simples", "más simples"]
  ])

respuesta: comparacion[1
tipo: mc
opciones_explicitas: ["más complejos", "más simples", "idénticos", "menos diversos"]

enunciado: "En comparación con la biota de Ediacara que precedió al Cámbrico, los organismos de la Explosión Cámbrica eran ___."

explicacion: |
  La biota de Ediacara consistía en organismos de cuerpo blando y morfología menos especializada, mientras que el Cámbrico introdujo estructuras más complejas y con partes duras.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["cronologia"]

opciones_explicitas: ["Precámbrico", "Cámbrico", "Ordovícico"]
respuesta: ["Precámbrico", "Cámbrico", "Ordovícico"]
tipo: ordenar

enunciado: "Ordena cronológicamente los siguientes periodos/eones, empezando por el más antiguo:"

pasos:
  - "Ubicar el Precámbrico como la era anterior."
  - "Colocar el Cámbrico como el periodo de la explosión."
  - "Ubicar el Ordovícico como el periodo posterior."

explicacion: |
  La cronología correcta es Precámbrico (que incluye el Ediacárico), seguido del Cámbrico y luego el Ordovícico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["oxigeno", "geologia", "evolucion"]

variables:
  escenario: uno_de([
    ["aumento de oxígeno", "oxígeno"],
    ["cambio en la salinidad", "salinidad"],
    ["descarga de metano", "metano"]
  ])

enunciado: "Una de las teorías principales sostiene que el aumento de {escenario[0]} en los océanos permitió el desarrollo de organismos con metabolismos más complejos durante la explosión cámbrica."

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["aumento de oxígeno", "cambio en la salinidad", "descarga de metano"]

explicacion: |
  El aumento de la disponibilidad de oxígeno (oxigenación) fue crucial para sostener la alta demanda energética de los nuevos cuerpos complejos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "avanzado"
  tags: ["genetica", "hox", "desarrollo"]

enunciado: "La aparición de una familia de genes reguladores fundamentales para el plan corporal de los animales se denomina genes ___."

respuesta: ["Hox"]
respuestas_validas: ["Hox"]
tipo: completar

explicacion: |
  Los genes Hox controlan el eje anteroposterior del embrión, permitiendo la segmentación y especialización de los cuerpos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["depredacion", "seleccion_natural"]

variables:
  caso: uno_de([
    ["depredación", "depredación"],
    ["simbiósis", "simbiósis"],
    ["filtración", "filtración"]
  ])

enunciado: "La aparición de la {caso[0]} actuó como una presión evolutiva masiva, obligando a los organismos a desarrollar conchas, esqueletos y sistemas sensoriales."

respuesta: caso[1
tipo: mc
opciones_explicitas: ["depredación", "simbiósis", "filtración"]

explicacion: |
  La depredación creó un ciclo de retroalimentación: los depredadores necesitaban mejores sentidos y armas, y las presas, mejores defensas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "avanzado"
  tags: ["causas", "causalidad"]

opciones_explicitas: ["Aumento de O2", "Evolución de genes Hox", "Aparición de depredación"]

enunciado: "Ordena los factores que se consideran un modelo de causalidad en cascada para la explosión cámbrica (de la causa ambiental a la consecuencia biológica):"

respuesta: ["Aumento de O2", "Evolución de genes Hox", "Aparición de depredación"]
tipo: ordenar

explicacion: |
  El modelo sugiere que el oxígeno permitió la vida compleja, los genes Hox permitieron la arquitectura corporal, y la depredación impulsó la diversificación rápida.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "basico"
  tags: ["oxigeno", "quimica"]

enunciado: "Si el nivel de oxígeno en el océano aumenta, la probabilidad de que surjan organismos de gran tamaño es: ___"

respuesta: ["mayor"]
respuestas_validas: ["mayor", "menor"]
tipo: completar

explicacion: |
  Los organismos grandes requieren más energía para mantener sus tejidos, la cual se obtiene mediante la respiración aeróbica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "basico"
  tags: ["ediacara", "precambrico"]

respuesta: "blandos"
tipo: completar
respuestas_validas: ["blandos", "blandos"]

enunciado: "Antes de la explosión cámbrica, los organismos que componían la fauna de Ediacara eran mayormente de cuerpo ___."

explicacion: |
  La fauna de Ediacara se caracteriza por organismos con estructuras corporales simples y, en su gran mayoría, sin partes endurecidas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["evolucion", "esqueletos"]

variables:
  escenario: uno_de([
    ["aparición de esqueletos", "estructuras duras"],
    ["aparición de ojos", "órganos sensoriales"],
    ["aparición de depredadores", "planes complejos"]
  ])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["estructuras duras", "órganos sensoriales", "planes complejos"]

enunciado: "Uno de los cambios biológicos más significativos durante la explosión cámbrica fue la aparición de {escenario[0]}."

explicacion: |
  La evolución de partes duras (conchas, esqueletos) y órganos sensoriales complejos como los ojos permitió una nueva dinámica de supervivencia y depredación.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "avanzado"
  tags: ["secuencia", "evolucion"]

opciones_explicitas: ["Organismos de Ediacara", "Aparición de esqueletos", "Diversificación de planos corporales"]
respuesta: ["Organismos de Ediacara", "Aparición de esqueletos", "Diversificación de planos corporales"]
tipo: ordenar

enunciado: "Ordena cronológicamente los eventos biológicos desde el Precámbrico hasta el Cámbrico:"

explicacion: |
  Primero dominaban los organismos de Ediacara; luego, la biomineralización permitió la aparición de esqueletos, lo que finalmente impulsó la diversificación de planos corporales complejos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["sensores", "evolucion"]

respuesta: verdadero
tipo: vf

enunciado: "¿La aparición de ojos y sistemas sensoriales complejos fue una característica distintiva de la explosión cámbrica?"

explicacion: |
  Correcto. La capacidad de detectar movimiento y luz permitió el desarrollo de una red trófica mucho más activa y compleja.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "basico"
  tags: ["comparacion"]

variables:
  datos: [
    ["Ediacara", "simples"],
    ["Cámbrico", "complejos"]
  ]
  idx: uno_de([0,1])

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["simples", "complejos"]

enunciado: "Si comparamos la era de Ediacara con la explosión cámbrica, los organismos del Cámbrico eran biológicamente más {datos[idx][0]}."

explicacion: |
  La explosión cámbrica marca el paso de formas de vida mayormente simples a formas con planes corporales altamente especializados.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "basico"
  tags: ["geologia", "paleontologia", "canada"]

respuesta: "Canadá"
tipo: completar
respuestas_validas: ["Canadá"]

enunciado: "El famoso yacimiento de Burgess Shale, que documenta la diversidad de la fauna del Cámbrico, se encuentra ubicado en el país de ___."

explicacion: |
  El yacimiento de Burgess Shale está situado en las Montañas Rocosas de la provincia de Columbia Británica, en Canadá.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["preservacion", "fofiles"]

variables:
  tipo_preservacion: uno_de(["carbonización", "permineralización", "molde"])

respuesta: "carbonización"
tipo: mc
opciones_explicitas: ["carbonización", "permineralización", "molde"]

enunciado: "La preservación excepcional de los tejidos blandos en Burgess Shale se debe principalmente a un proceso de ___ de la materia orgánica."

explicacion: |
  La formación de películas delgadas de carbono (carbonización) permitió la preservación de estructuras blandas que normalmente no se fosilizan.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["cronologia", "eventos"]

opciones_explicitas: ["Explosión de la vida multicelular", "Aparición de los primeros organismos unicelulares", "Extinción masiva del Pérmico", "Aparición de las plantas terrestres"]
respuesta: ["Aparición de los primeros organismos unicelulares", "Explosión de la vida multicelular", "Aparición de las plantas terrestres", "Extinción masiva del Pérmico"]
tipo: ordenar

enunciado: "Ordene cronológicamente los siguientes eventos biológicos/geológicos, desde el más antiguo al más reciente:"

explicacion: |
  La vida comenzó con organismos unicelulares, seguida por la explosión de diversidad del Cámbrico, la colonización de la tierra por plantas y, mucho después, las grandes extinciones masivas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "avanzado"
  tags: ["anomalocaris", "depredador"]

variables:
  es_depredador: uno_de([verdadero, falso])

respuesta: es_depredador
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Basándonos en la morfología de *Anomalocaris canadensis* hallado en Burgess Shale, se considera que era un ___ depredador de ápice."

explicacion: |
  *Anomalocaris* es uno de los depredadores más conocidos del Cámbrico, con apéndices frontales diseñados para capturar presas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["biologia", "evolucion"]

variables:
  valor_diversidad: uno_de([1, 2])

respuesta: tabla[valor_diversidad][1
tipo: completar
respuestas_validas: ["alta", "baja"]

pasos:
  - "Identificar el periodo de la explosión cámbrica."
  - "Determinar el nivel de diversidad biológica observado en Burgess Shale."

enunciado: "La diversidad de filos animales documentada en Burgess Shale durante la explosión cámbrica se caracteriza por ser de una magnitud ___."

variables:
  tabla: [["baja", "baja"], ["alta", "alta"]]

explicacion: |
  La explosión cámbrica representó un aumento drástico en la complejidad y diversidad de los cuerpos animales en el registro fósil.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "basico"
  tags: ["geologia", "paleontologia"]

variables:
  datos: [["Hace aproximadamente 541 millones de años", "Paleozoico"], ["Hace aproximadamente 541 millones de años", "Proterozoico"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Paleozoico", "Proterozoico", "Mesozoico", "Cenozoico"]

enunciado: "La explosión cámbrica marca el inicio del eón Phanerozoico, específicamente de la era del {datos[idx][0]}."

explicacion: |
  La explosión cámbrica ocurrió hace unos 541 millones de años, marcando el inicio del eón Fanerozoico y la era Paleozoica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["escala_tiempo", "geologia"]

variables:
  datos: [["Ediacarano", "Cámbrico"], ["Cámbrico", "Ordovícico"], ["Ordovícico", "Silúrico"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1
tipo: completar
respuestas_validas: ["Cámbrico", "Ordovícico", "Silúrico"]

enunciado: "Si nos situamos inmediatamente antes de la explosión cámbrica, nos encontramos en el periodo ___."

explicacion: |
  El periodo Ediacárico precede a la explosión cámbrica, la cual da inicio al periodo Cámbrico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["orden", "escala_tiempo"]

variables:
  secuencia: ["Ediacarano", "Cámbrico", "Ordovícico", "Silúrico"]

respuesta: ["Ediacarano", "Cámbrico", "Ordovícico", "Silúrico"]
tipo: ordenar
opciones_explicitas: ["Ediacarano", "Cámbrico", "Ordovícico", "Silúrico"]

enunciado: "Ordena cronológicamente los siguientes periodos/eras, comenzando desde el más antiguo antes de la explosión cámbrica:"

explicacion: |
  La secuencia correcta es: Ediacarano (Precambriano tardío), Cámbrico (inicio de la explosión), Ordovícico y Silúrico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "avanzado"
  tags: ["geologia", "eventos"]

variables:
  datos: [["541 Ma", "Cambriano"], ["252 Ma", "Triásico"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Cambriano", "Triásico", "Jurásico", "Permiano"]

enunciado: "La diversificación masiva de la vida animal, conocida como la explosión cámbrica, ocurrió hace aproximadamente {datos[idx][0]}."

explicacion: |
  La explosión cámbrica es el evento que define el inicio del periodo Cámbrico hace unos 541 millones de años.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "basico"
  tags: ["geologia"]

variables:
  contexto: [["Paleozoico", "Cámbrico"], ["Mesozoico", "Jurásico"]]
  idx: uno_de([0,1])

respuesta: contexto[idx][1
tipo: completar
respuestas_validas: ["Cámbrico", "Jurásico"]

enunciado: "La explosión cámbrica es el evento fundacional del periodo ___."

explicacion: |
  La explosión cámbrica marca el inicio del periodo Cámbrico dentro de la era Paleozoica.
```

## Sección: fases-lunares (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "basico"
  tags: ["astronomia", "mitos"]

respuesta: falso
tipo: vf

enunciado: "Un error común es pensar que las fases lunares ocurren porque la Tierra proyecta su sombra sobre la Luna."

explicacion: |
  Las fases lunares no son causadas por la sombra de la Tierra. La sombra de la Tierra sobre la Luna sólo ocurre durante un eclipse lunar, un evento mucho más raro y específico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "basico"
  tags: ["astronomia", "geometria"]

opciones_explicitas: ["La sombra de la Tierra", "La posición de la Luna respecto al Sol y la Tierra", "La atmósfera terrestre", "La distancia de la Luna a la Tierra"]
respuesta: "La posición de la Luna respecto al Sol y la Tierra"
tipo: mc

enunciado: "¿Cuál es la causa real de que veamos diferentes fases lunares?"

explicacion: |
  Las fases dependen de la geometría entre el Sol, la Tierra y la Luna. Lo que vemos es la fracción de la cara iluminada de la Luna que es visible desde nuestra perspectiva en la Tierra.
```

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "intermedio"
  tags: ["astronomia", "terminologia"]

respuestas_validas: ["porción", "parte", "fracción"]
respuesta: "porción"
tipo: completar

enunciado: "Las fases lunares representan la ___ de la cara iluminada de la Luna que podemos observar desde la Tierra, según su posición orbital."

explicacion: |
  Como la Luna siempre tiene una mitad iluminada por el Sol, lo que cambia es la porción de esa mitad que nuestro ángulo de visión nos permite ver.
```

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "intermedio"
  tags: ["astronomia", "eventos"]

respuesta: "eclipse lunar"
tipo: completar
respuestas_validas: ["eclipse lunar"]

enunciado: "Si la Luna entra en la sombra proyectada por la Tierra (un evento raro, no mensual), estamos ante un ___."

explicacion: |
  Cuando la Tierra interfiere en la luz solar hacia la Luna, se produce un eclipse lunar, no una fase lunar normal (las fases ocurren todos los meses, los eclipses no).
```

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "basico"
  tags: ["astronomia", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "La Luna siempre tiene una mitad iluminada por el Sol, independientemente de la fase que veamos desde la Tierra."

explicacion: |
  Verdadero. La Luna siempre recibe luz solar (salvo en eclipses); lo que cambia es nuestra perspectiva de esa mitad iluminada según la posición orbital de la Luna.
```

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "basico"
  tags: ["astronomia", "luna"]

respuesta: "luna nueva"
tipo: completar
respuestas_validas: ["luna nueva"]

enunciado: "La fase en la que la Luna se encuentra entre la Tierra y el Sol, por lo que su cara iluminada no es visible desde nuestro planeta, se denomina ___."

explicacion: |
  En la luna nueva, el ángulo entre el Sol, la Luna y la Tierra es de 0°, lo que impide ver la parte iluminada.
```

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "basico"
  tags: ["astronomia", "luna"]

opciones_explicitas: ["luna llena", "cuarto creciente", "luna nueva", "cuarto menguante"]
respuesta: "luna llena"
tipo: mc

enunciado: "Cuando la Luna se encuentra opuesta al Sol con respecto a la Tierra, la vemos totalmente iluminada. ¿Cómo se llama esta fase?"

explicacion: |
  La luna llena ocurre cuando la Tierra está entre el Sol y la Luna.
```

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "intermedio"
  tags: ["astronomia", "luna"]

opciones_explicitas: ["luna creciente iluminante", "cuarto creciente", "gibosa creciente", "luna llena"]
respuesta: ["luna creciente iluminante", "cuarto creciente", "gibosa creciente", "luna llena"]
tipo: ordenar

enunciado: "Ordena las siguientes fases lunares según aparecen en el ciclo de crecimiento (de menor a mayor iluminación):"

explicacion: |
  Después de la luna nueva, la parte visible crece primero como una pequeña astilla (creciente iluminante), luego alcanza la mitad (cuarto creciente) y finalmente se ensancha antes de la luna llena (gibosa creciente).
```

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "intermedio"
  tags: ["astronomia", "luna"]

variables:
  idx: uno_de([0, 1])
  datos: [["gibosa creciente", "cuarto creciente"], ["gibosa menguante", "luna llena"]]

opciones_explicitas: ["gibosa creciente", "gibosa menguante", "cuarto creciente", "cuarto menguante"]
respuesta: datos[idx][0]
tipo: mc

enunciado: "Si una fase ocurre justo después de la {datos[idx][1]} (y antes de la luna llena/nueva siguiente), ¿cuál es el nombre de esa fase intermedia?"

explicacion: |
  La fase gibosa es aquella en la que la Luna se ve iluminada en más de la mitad pero todavía no llega a ser llena.
```

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "basico"
  tags: ["astronomia", "luna"]

respuesta: "0.5"
tipo: completar
respuestas_validas: ["0.5", "0,5", "1/2", "50%"]

enunciado: "En las fases de 'cuarto creciente' y 'cuarto menguante', la fracción (en decimal) de la cara visible de la Luna que está iluminada es ___."

pasos:
  - "Identificar que en el cuarto, la Luna está exactamente a la mitad de su ciclo de iluminación."

explicacion: |
  En las fases de cuarto, la Luna presenta exactamente la mitad de su cara visible iluminada.
```

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "basico"
  tags: ["astronomia", "luna"]

respuesta: "29.5"
tipo: completar
respuestas_validas: ["29.5", "29,5", "29"]

enunciado: "El ciclo completo de las fases de la Luna, conocido como mes sinódico o lunación, dura aproximadamente ___ días."

explicacion: |
  El ciclo sinódico es el tiempo que tarda la Luna en volver a la misma fase respecto al Sol y la Tierra, unos 29,5 días.
```

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "basico"
  tags: ["fases", "luna_nueva"]

respuesta: "la cara iluminada mira al Sol"
tipo: mc
opciones_explicitas: ["la cara iluminada mira a la Tierra", "la cara iluminada mira al Sol", "la Luna deja de recibir luz solar"]

enunciado: "Durante la fase de Luna Nueva, no podemos ver el disco lunar porque ___."

explicacion: |
  En la Luna Nueva, la Luna se encuentra entre la Tierra y el Sol: la cara que vemos desde nuestro planeta es la que está en sombra, mientras la cara iluminada mira hacia el Sol.
```

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "basico"
  tags: ["fases", "luna_llena"]

respuesta: "la cara iluminada mira a la Tierra"
tipo: completar
respuestas_validas: ["la cara iluminada mira a la Tierra"]

enunciado: "En la fase de Luna Llena, podemos ver el disco completo porque ___."

explicacion: |
  En la Luna Llena, la Tierra se encuentra entre el Sol y la Luna, así que la cara iluminada es la que observamos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "intermedio"
  tags: ["orden", "fases"]

opciones_explicitas: ["Luna Nueva", "Cuarto Creciente", "Luna Llena", "Cuarto Menguante"]
respuesta: ["Luna Nueva", "Cuarto Creciente", "Luna Llena", "Cuarto Menguante"]
tipo: ordenar

enunciado: "Ordena cronológicamente las fases lunares desde la ausencia de luz visible hasta la plenitud del disco."

explicacion: |
  El ciclo comienza con la Luna Nueva (oscuridad), sigue con el crecimiento de la parte visible (creciente), llega al máximo (llena) y luego decrece (menguante).
```

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "basico"
  tags: ["logica", "fases"]

respuesta: verdadero
tipo: vf

enunciado: "En fase de Luna Llena vemos el disco completo porque la parte iluminada de la Luna apunta hacia la Tierra."

explicacion: |
  Correcto. En Luna Llena, la Tierra queda entre el Sol y la Luna, así que la cara iluminada de la Luna mira de frente hacia nosotros.
```

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "basico"
  tags: ["luna", "astronomia"]

respuesta: "sincrónica"
tipo: completar
respuestas_validas: ["sincrónica", "sincronizada"]

enunciado: "El fenómeno por el cual la Luna tarda el mismo tiempo en rotar sobre su propio eje que en completar su órbita alrededor de la Tierra se denomina rotación ___."

explicacion: |
  Debido a que los períodos de rotación y traslación son iguales, la misma cara de la Luna siempre está orientada hacia la Tierra.
```

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "basico"
  tags: ["luna", "astronomia"]

respuesta: "cara visible"
tipo: completar
respuestas_validas: ["cara visible"]

enunciado: "Gracias a la rotación sincrónica, la parte de la Luna que siempre está orientada hacia nosotros se conoce como la ___."

explicacion: |
  La rotación sincrónica impide que veamos la cara oculta desde la Tierra, manteniendo siempre la misma cara frente a nosotros: la cara visible.
```

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "intermedio"
  tags: ["luna", "astronomia"]

respuesta: falso
tipo: vf

enunciado: "La existencia de una 'cara oculta' de la Luna depende de las fases lunares (luna llena, luna nueva, etc.)."

explicacion: |
  Falso. La cara oculta es consecuencia de la rotación sincrónica y es independiente de las fases lunares: es la parte que no vemos por la rotación, no por la iluminación.
```

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "intermedio"
  tags: ["luna", "astronomia"]

respuesta: "rotación y traslación"
tipo: mc
opciones_explicitas: ["rotación y traslación", "distancia y tamaño", "gravedad y magnetismo"]

enunciado: "La razón por la cual no podemos ver la cara oculta de la Luna se debe a la igualdad entre sus períodos de ___."

explicacion: |
  Como la Luna tarda lo mismo en rotar que en orbitar, la cara que mira a la Tierra siempre es la misma.
```

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "avanzado"
  tags: ["luna", "astronomia"]

respuesta: ["rotación sincrónica", "cara visible", "cara oculta"]
tipo: ordenar

opciones_explicitas: ["rotación sincrónica", "cara visible", "cara oculta"]

enunciado: "Ordena estos conceptos según la relación de causa y efecto: primero la causa física, después sus dos consecuencias."

explicacion: |
  La rotación sincrónica es la causa física; de ella se derivan la existencia de una cara visible y una cara oculta.
```

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "basico"
  tags: ["astronomia", "luna"]

variables:
  idx: uno_de([0, 1])
  datos: [[0.0, "Luna Nueva"], [1.0, "Luna Llena"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Luna Nueva", "Cuarto Creciente", "Cuarto Menguante", "Luna Llena"]

enunciado: "Si la iluminación visible de la Luna es del {redondear(datos[idx][0] * 100, 0)}%, ¿qué fase lunar estamos observando?"

explicacion: |
  0% de iluminación visible es Luna Nueva; 100% es Luna Llena. (El 50% no alcanza para distinguir por sí solo entre cuarto creciente y cuarto menguante — hace falta saber si la iluminación está aumentando o disminuyendo.)
```

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "basico"
  tags: ["astronomia", "luna"]

variables:
  idx: uno_de([0, 1])
  datos: [[100, "Luna Llena"], [0, "Luna Nueva"]]

respuesta: datos[idx][0]
tipo: completar
respuestas_validas: [datos[idx][0]]

enunciado: "Si la Luna se encuentra en fase {datos[idx][1]}, el porcentaje de su cara visible que está iluminado es ___%."

explicacion: |
  En la fase {datos[idx][1]}, la iluminación visible es del {datos[idx][0]}%.
```

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "intermedio"
  tags: ["astronomia", "luna"]

variables:
  idx: uno_de([0, 1])
  datos: [["Luna Nueva", 0], ["Luna Llena", 100]]

respuesta: datos[idx][0]
tipo: completar
respuestas_validas: ["Luna Nueva", "Luna Llena"]

enunciado: "Cuando la Luna presenta una iluminación visible del {datos[idx][1]}%, la fase se llama ___."

explicacion: |
  La fase con {datos[idx][1]}% de iluminación visible es la {datos[idx][0]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "intermedio"
  tags: ["astronomia", "luna"]

respuesta: ["Luna Nueva", "Cuarto Creciente", "Luna Llena", "Cuarto Menguante"]
tipo: ordenar
opciones_explicitas: ["Luna Nueva", "Cuarto Creciente", "Luna Llena", "Cuarto Menguante"]

enunciado: "Ordena cronológicamente las fases lunares desde la ausencia de luz visible hasta la plenitud."

explicacion: |
  El ciclo lunar comienza con la Luna Nueva, sigue con el cuarto creciente, luego la Luna Llena y finalmente el cuarto menguante.
```

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "basico"
  tags: ["astronomia", "luna"]

respuesta: falso
tipo: vf

enunciado: "Si la Luna tiene un 100% de iluminación visible, se trata de una Luna Nueva."

explicacion: |
  Falso: 100% de iluminación visible corresponde a la Luna Llena, no a la Luna Nueva (que es 0%).
```

## Sección: formacion-de-estrellas (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "basico"
  tags: ["nebulosa", "gas"]

enunciado: "Las estrellas nacen a partir de gigantescas nubes de gas y polvo interestelar conocidas como ___."

respuestas_validas: ["nebulosas"]

respuesta: "nebulosas"
tipo: completar

explicacion: |
  Una nebulosa es una nube de gas y polvo en el espacio interestelar, la materia prima a partir de la cual se forman las estrellas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "intermedio"
  tags: ["gravedad", "colapso"]

enunciado: "La fuerza principal que provoca que una nebulosa comience a contraerse y colapsar sobre sí misma es la ___."

respuestas_validas: ["gravedad"]

respuesta: "gravedad"
tipo: completar

explicacion: |
  La gravedad atrae el gas hacia las zonas más densas de la nube, iniciando el colapso que eventualmente formará una estrella.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "avanzado"
  tags: ["momento_angular", "giro"]

enunciado: "A medida que la nube colapsa, su velocidad de rotación aumenta para conservar el ___."

respuestas_validas: ["momento angular"]

respuesta: "momento angular"
tipo: completar

explicacion: |
  Es el mismo principio que un patinador que gira más rápido al cerrar los brazos: al reducirse el radio de la nube, la velocidad de giro aumenta para conservar el momento angular.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "intermedio"
  tags: ["temperatura", "energia"]

enunciado: "Durante el colapso, la energía potencial gravitatoria se transforma en ___ en el núcleo de la protoestrella."

respuestas_validas: ["energía térmica", "energia termica"]

respuesta: "energía térmica"
tipo: completar

explicacion: |
  A medida que el gas cae hacia el centro por gravedad, esa energía de movimiento se convierte en calor, elevando la temperatura del núcleo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "avanzado"
  tags: ["disco", "acrecion"]

respuesta: "disco de acreción"
tipo: completar
respuestas_validas: ["disco de acreción", "disco protoplanetario", "disco de acrecion"]

enunciado: "Cuando la materia gira rápidamente alrededor del centro, se aplana formando un ___."

explicacion: |
  El aumento de la velocidad de rotación por la conservación del momento angular aplana la nube en un disco.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "basico"
  tags: ["fusion", "hidrogeno"]

tipo: mc
opciones_explicitas: ["Fusión de helio en hidrógeno", "Fusión de hidrógeno en helio", "Fisión de núcleos de hierro", "Combustión de oxígeno"]
respuesta: "Fusión de hidrógeno en helio"

enunciado: "Durante la formación de una estrella, el 'encendido' ocurre cuando la temperatura y presión son tan altas que se inicia un proceso de ___."

explicacion: |
  El proceso fundamental que define la vida de una estrella es la fusión nuclear, donde núcleos de hidrógeno se unen para formar helio, liberando una enorme cantidad de energía.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "intermedio"
  tags: ["equilibrio", "gravedad", "presion"]

tipo: completar
respuestas_validas: ["equilibrio hidrostático", "equilibrio hidrostatico"]
respuesta: "equilibrio hidrostático"

enunciado: "Para que una estrella sea estable y no colapse ni se expanda descontroladamente, debe existir un ___ entre la gravedad (que empuja hacia adentro) y la presión de la fusión (que empuja hacia afuera)."

explicacion: |
  Este estado se conoce como equilibrio hidrostático. La gravedad intenta comprimir la estrella, mientras que la energía de la fusión nuclear genera una presión hacia afuera que compensa esa fuerza.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "basico"
  tags: ["gravedad", "presion"]

tipo: mc
opciones_explicitas: ["La gravedad gana y la estrella colapsa", "La presión de fusión gana y la estrella se expande", "Ambas fuerzas se anulan y la estrella es estable", "La gravedad desaparece"]
respuesta: "Ambas fuerzas se anulan y la estrella es estable"

enunciado: "Si una estrella ha alcanzado un estado de estabilidad donde la fuerza de gravedad hacia el centro es compensada exactamente por la presión de la fusión hacia el exterior, podemos decir que:"

explicacion: |
  La estabilidad estelar depende de que la fuerza de gravedad (atracción) y la presión de radiación/térmica (repulsión) estén en un equilibrio dinámico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "intermedio"
  tags: ["temperatura", "presion", "nucleos"]

tipo: completar
respuestas_validas: ["Fusión de hidrógeno", "fusión de hidrógeno"]
respuesta: "Fusión de hidrógeno"

enunciado: "El primer paso crucial en el ciclo de vida de una estrella es la ___."

explicacion: |
  Antes de que una estrella pueda quemar elementos más pesados, debe superar la barrera de repulsión eléctrica entre protones para iniciar la fusión de hidrógeno.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "avanzado"
  tags: ["gravedad", "fusión"]

tipo: mc
opciones_explicitas: ["La gravedad es mayor que la presión", "La presión es mayor que la gravedad", "La gravedad y la presión son iguales", "No hay fuerzas actuando"]
respuesta: "La gravedad es mayor que la presión"

enunciado: "Si una estrella agota su combustible de hidrógeno en el núcleo y la producción de energía disminuye, ¿qué sucede con el equilibrio de fuerzas?"

explicacion: |
  Al disminuir la presión hacia afuera causada por la fusión, la gravedad toma ventaja, provocando que el núcleo se contraiga nuevamente hasta alcanzar nuevas temperaturas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "basico"
  tags: ["estrellas", "sol", "enana_blanca"]

respuesta: "enana blanca"
tipo: completar
respuestas_validas: ["enana blanca"]

enunciado: "Una estrella de masa media, similar a nuestro Sol, tras agotar su combustible de hidrógeno y helio, termina su ciclo de vida convirtiéndose en una ___."

explicacion: |
  Las estrellas de masa media como el Sol no tienen suficiente masa para colapsar en objetos ultra densos; en su lugar, expulsan sus capas externas y dejan un núcleo remanente llamado enana blanca.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "basico"
  tags: ["estrellas_masivas", "supernova"]

respuesta: "supernova"
tipo: completar
respuestas_validas: ["supernova"]

enunciado: "Las estrellas con una masa muy superior a la del Sol tienen un destino violento: terminan su vida en una explosión masiva conocida como ___."

explicacion: |
  Debido a su enorme gravedad, las estrellas masivas procesan su combustible muy rápido y colapsan sobre sí mismas, provocando una explosión de supernova que puede iluminar galaxias enteras.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "intermedio"
  tags: ["masa", "tiempo_vida"]

variables:
  idx: uno_de([0, 1])
  escenario: [["baja/media", "miles de millones"], ["muy masiva", "millones"]]

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas: ["miles de millones", "millones"]

enunciado: "El tiempo de vida de una estrella depende de su masa. Una estrella de masa {escenario[idx][0]} vivirá durante aproximadamente ___ de años."

explicacion: |
  Existe una relación inversa: a mayor masa, mayor presión y temperatura en el núcleo, lo que hace que el combustible se queme mucho más rápido, resultando en una vida más corta.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "avanzado"
  tags: ["agujero_negro", "colapso"]

respuesta: "agujero negro"
tipo: completar
respuestas_validas: ["agujero negro"]

enunciado: "Cuando una estrella extremadamente masiva colapsa tras una supernova y su remanente es lo suficientemente denso como para que ni la luz pueda escapar de su gravedad, se forma un ___."

explicacion: |
  El agujero negro es el destino final de las estrellas más masivas del universo, donde la densidad es tal que la curvatura del espacio-tiempo es extrema.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "intermedio"
  tags: ["remanentes", "masa"]

variables:
  idx: uno_de([0, 1])
  caso: [["enana blanca", "baja/media"], ["agujero negro", "muy masiva"]]

respuesta: caso[idx][0]
tipo: completar
respuestas_validas: ["enana blanca", "agujero negro"]

enunciado: "Si analizamos el remanente final de una estrella de masa {caso[idx][1]}, el objeto resultante será una/un ___."

explicacion: |
  El destino final está determinado principalmente por la masa remanente del núcleo tras la muerte de la estrella.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "basico"
  tags: ["nucleosintesis", "elementos"]

tipo: mc
opciones_explicitas: ["Carbono, Oxígeno y Hierro", "Sólo Hidrógeno y Helio", "Sólo Fotones y Neutrinos", "Plutonio y Uranio solamente"]
respuesta: "Sólo Hidrógeno y Helio"

enunciado: "Si las estrellas no hubieran existido, el universo estaría compuesto casi exclusivamente por ___."

explicacion: |
  Sin la fusión nuclear que ocurre dentro de las estrellas, el universo se habría quedado con los elementos livianos formados en el Big Bang: hidrógeno y helio, casi sin nada más.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "intermedio"
  tags: ["fusion", "nucleosintesis"]

tipo: completar
respuestas_validas: ["fusión nuclear", "fusion nuclear"]
respuesta: "fusión nuclear"

enunciado: "El proceso físico que ocurre en el núcleo de una estrella y permite la creación de elementos más pesados que el helio se denomina ___."

explicacion: |
  La fusión nuclear en el interior estelar es el único proceso natural capaz de fabricar elementos más pesados que el hidrógeno y el helio.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "basico"
  tags: ["quimica_cosmica", "elementos_pesados"]

tipo: mc
opciones_explicitas: ["Las estrellas son fábricas de elementos pesados", "Las estrellas sólo sirven para iluminar planetas", "Las estrellas destruyen la materia existente", "Las estrellas son sólo bolas de gas sin importancia química"]
respuesta: "Las estrellas son fábricas de elementos pesados"

enunciado: "¿Cuál es la función química fundamental de las estrellas en la evolución del universo?"

explicacion: |
  Las estrellas fabrican, mediante fusión nuclear, todos los elementos más pesados que el hidrógeno y el helio que existen en el universo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "intermedio"
  tags: ["nucleosintesis", "evolucion"]

tipo: completar
respuestas_validas: ["helio"]
respuesta: "helio"

enunciado: "Antes de que las estrellas comenzaran a fusionar elementos más pesados, el universo era una mezcla primordial de hidrógeno y ___."

explicacion: |
  El Big Bang dejó al universo con principalmente hidrógeno y algo de helio — todo lo demás lo fabricaron las estrellas después.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "avanzado"
  tags: ["nucleosintesis", "evolucion_estelar"]

tipo: mc
opciones_explicitas: ["Sin estrellas, no habría átomos complejos para formar planetas o vida", "Sin estrellas, el universo sería más oscuro pero igual de complejo", "Sin estrellas, el hidrógeno se habría agotado más rápido", "Sin estrellas, la gravedad no existiría"]
respuesta: "Sin estrellas, no habría átomos complejos para formar planetas o vida"

enunciado: "¿Qué consecuencia directa tiene la ausencia de procesos estelares para la formación de la materia compleja?"

explicacion: |
  Los elementos que forman planetas rocosos y organismos vivos (carbono, oxígeno, hierro, etc.) se fabricaron dentro de estrellas — sin ellas, no existirían.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "basico"
  tags: ["evolucion_estelar", "masa"]

respuesta: "enana blanca"
tipo: completar
respuestas_validas: ["enana blanca"]

enunciado: "Una estrella con una masa similar a la del Sol llegará al final de su vida convirtiéndose en una ___."

explicacion: |
  Las estrellas de masa baja o media, como nuestro Sol, no tienen suficiente masa para colapsar en un agujero negro. Tras agotar su combustible, expulsan sus capas externas y dejan un núcleo denso llamado enana blanca.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "intermedio"
  tags: ["supernova", "masa_alta"]

respuesta: "supernova"
tipo: mc
opciones_explicitas: ["enana blanca", "supernova", "nebulosa planetaria", "protoestrella"]

enunciado: "Cuando una estrella masiva (más de 8 masas solares) agota su combustible de fusión, experimenta un colapso catastrófico conocido como ___."

explicacion: |
  Las estrellas masivas terminan su vida en una explosión violenta llamada supernova, que puede dejar atrás una estrella de neutrones o un agujero negro.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "avanzado"
  tags: ["agujero_negro", "densidad"]

respuesta: "agujero negro"
tipo: mc
opciones_explicitas: ["agujero negro", "estrella de neutrones", "enana blanca", "pulsar"]

enunciado: "Si el remanente de una supernova es lo suficientemente masivo, la gravedad es tan fuerte que nada puede escapar de él, formando un ___."

explicacion: |
  Un agujero negro es una región del espacio-tiempo donde la gravedad es tan intensa que ni siquiera la luz puede escapar de su horizonte de sucesos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "intermedio"
  tags: ["estrellas_de_neutrones", "masa"]

respuesta: "estrella de neutrones"
tipo: completar
respuestas_validas: ["estrella de neutrones"]

enunciado: "Tras una supernova, si el objeto restante tiene una masa intermedia (entre 1,4 y 3 masas solares), se convierte en una ___."

explicacion: |
  Las estrellas de neutrones son objetos extremadamente densos que resultan del colapso de núcleos estelares masivos que no alcanzan a formar un agujero negro.
```

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "basico"
  tags: ["enana_blanca", "sol"]

respuesta: "enana blanca"
tipo: mc
opciones_explicitas: ["agujero negro", "enana blanca", "estrella de neutrones", "nebulosa"]

enunciado: "El destino final de una estrella como el Sol es convertirse en una:"

explicacion: |
  Las estrellas de baja masa como el Sol no tienen la masa necesaria para producir explosiones de supernova; su destino es enfriarse lentamente como enanas blancas.
```

## Sección: formacion-del-sistema-solar (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "intermedio"
  tags: ["nube_molecular", "estrellas_previas"]

enunciado: "Antes de la formación del Sol, el sistema solar se originó a partir de una ___ de gas y polvo que contenía elementos pesados fabricados por estrellas anteriores."
respuestas_validas: ["nube molecular"]
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
respuestas_validas: ["supernova"]
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
respuestas_validas: ["gravedad"]
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
respuestas_validas: ["acreción", "acrecion"]
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
respuestas_validas: ["supernova"]
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
respuestas_validas: ["Sol"]

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
respuestas_validas: ["rocosos"]

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
respuestas_validas: ["gaseosos"]

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
respuestas_validas: ["polvo"]

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
respuestas_validas: ["planetesimales"]

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
respuestas_validas: ["millones"]

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

respuesta: ["polvo", "planetesimales", "protoplanetas", "planetas"]
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
respuestas_validas: ["acreción", "acrecion"]

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
respuestas_validas: ["hielos volátiles", "hielos volatiles"]

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
respuestas_validas: ["gaseoso"]

enunciado: "Si la acreción resulta en un núcleo de unas 10 masas terrestres, el planeta podrá capturar rápidamente la atmósfera del disco, resultando en un planeta ___."

explicacion: |
  Existe un umbral crítico de masa (aprox. 10 masas terrestres) que permite que la gravedad retenga el hidrógeno y el helio antes de que el viento solar los disperse.
```

## Sección: fotosintesis-cambio-atmosfera-nivel2 (25 preguntas)

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["cianobacterias", "oxigeno", "evolucion"]

tipo: mc
opciones_explicitas: ["Dióxido de carbono", "Nitrógeno", "Oxígeno", "Metano"]

enunciado: "Durante la fotosíntesis oxigénica realizada por las cianobacterias, se produce la fotólisis del agua, liberando como subproducto gaseoso el ___."

explicacion: |
  Las cianobacterias utilizan la luz solar para romper moléculas de agua (H2O), liberando oxígeno (O2) como residuo de este proceso metabólico.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["gran_oxidacion", "atmosfera", "cianobacterias"]

variables:
  escenario: uno_de([["La liberación masiva de O2", "La extinción de organismos anaerobios"], ["La acumulación de metano", "La formación de la capa de ozono"]])
  resultado: uno_de(["La atmósfera se volvió oxidante", "La atmósfera se volvió reductora"])

tipo: mc
opciones_explicitas: ["La atmósfera se volvió oxidante", "La atmósfera se volvió reductora", "La atmósfera se volvió rica en metano", "La atmósfera se volvió rica en nitrógeno"]

enunciado: "El aumento de la concentración de oxígeno atmosférico debido a la actividad de las cianobacterias provocó que la atmósfera dejara de ser reductora para convertirse en {escenario[0]}."

explicacion: |
  La Gran Oxidación (o Evento de la Gran Oxidación) transformó la atmósfera primitiva de un estado reductor (rico en gases como CH4 y NH3) a uno oxidante, debido a la acumulación de O2.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "avanzado"
  tags: ["extincion", "anaerobios", "evolucion"]

tipo: completar
respuestas_validas: ["anaerobios"]

enunciado: "La acumulación de oxígeno en la atmósfera fue un evento catastrófico para las formas de vida ___ que dominaban la Tierra primitiva."

explicacion: |
  Para los organismos anaerobios estrictos, el oxígeno era un gas altamente reactivo y tóxico, lo que provocó una extinción masiva antes de que la vida evolucionara hacia la respiración aeróbica.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["secuencia", "procesos", "evolucion"]

tipo: ordenar
opciones_explicitas: ["Evolución de la fotosíntesis oxigénica", "Liberación de O2 por cianobacterias", "Saturación de sumideros de hierro", "Aumento de O2 atmosférico"]

enunciado: "Ordena cronológicamente los eventos que llevaron a la Gran Oxidación:"

explicacion: |
  Primero surge la fotosíntesis oxigénica; el oxígeno producido es inicialmente absorbido por minerales (como el hierro en los océanos); una vez saturados estos sumideros, el oxígeno comienza a acumularse en la atmósfera.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "avanzado"
  tags: ["metano", "clima", "oxidacion"]

variables:
  factor: uno_de([["metano", "dióxido de carbono"]])
  impacto: uno_de(["disminuyó", "aumentó"])

tipo: completar
tolerancia_abs: 0

enunciado: "Antes de la Gran Oxidación, la atmósfera era rica en {factor[0]}. La introducción de oxígeno causó que la concentración de este gas ___ drásticamente, afectando el efecto invernadero global."

explicacion: |
  El metano (CH4) es un potente gas de efecto invernadero. La oxidación del metano por el nuevo oxígeno atmosférico redujo el efecto invernadero, lo que posiblemente contribuyó a la primera glaciación global (Glaciación Huronesiana).
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "basico"
  tags: ["fotosintesis", "ecuacion", "quimica"]

enunciado: "En el proceso de la fotosíntesis, los organismos autótrofos utilizan la energía lumínica para transformar el dióxido de carbono (CO2) y el agua (H2O) en un producto orgánico esencial y un subproducto gaseoso. El producto orgánico es ___ y el subproducto es ___."

respuestas_validas: ["glucosa", "O2"]
tipo: completar

explicacion: |
  La ecuación general es: 6CO2 + 6H2O + luz -> C6H12O6 + 6O2.
  La glucosa (C6H12O6) es la molécula orgánica que almacena la energía química, mientras que el oxígeno (O2) es liberado como subproducto.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["evolucion", "oxigeno", "geologia"]

variables:
  escenario: uno_de([
    ["el oxígeno se acumuló en los océanos", "el oxígeno se acumuló en la atmósfera", "el oxígeno reaccionó con el metano"],
    ["el oxígeno se acumuló en los océanos", "el oxígeno se acumuló en la atmósfera", "el oxígeno reaccionó con el metano"]
  ])

enunciado: "Durante el Gran Evento de Oxidación, antes de que el oxígeno se acumulara masivamente en la atmósfera, ¿qué sucedió principalmente con el O2 producido por las cianobacterias? {escenario[0]}"

opciones_explicitas: ["el oxígeno se acumuló en los océanos", "el oxígeno se acumuló en la atmósfera", "el oxígeno reaccionó con el metano"]
respuesta: escenario[1
tipo: mc

explicacion: |
  Antes de la acumulación atmosférica, el oxígeno liberado fue consumido por agentes reductores en los océanos (como el hierro ferroso) y por la oxidación de gases como el metano. Solo cuando estos "sumideros" se saturaron, el O2 comenzó a acumularse en la atmósfera.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["estequiometria", "fotosintesis"]

enunciado: "Si un organismo realiza la fotosíntesis de manera eficiente, por cada molécula de glucosa (C6H12O6) producida, ¿cuántas moléculas de oxígeno (O2) se liberan a la atmósfera?"

opciones_explicitas: ["1", "2", "6", "12"]
respuesta: "6"
tipo: mc

explicacion: |
  Según la estequiometría de la reacción: 6CO2 + 6H2O -> C6H12O6 + 6O2. Por cada mol de glucosa se liberan 6 moles de O2.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "avanzado"
  tags: ["geologia", "oxigenacion"]

variables:
  caso: uno_de([
    ["el hierro disuelto en el agua", "la presencia de metano atmosférico"],
    ["el hierro disuelto en el agua", "la presencia de metano atmosférico"]
  ])

enunciado: "La acumulación de oxígeno en la atmósfera fue un proceso extremadamente lento debido a la existencia de sumideros. Un ejemplo principal fue {caso[0]}."

opciones_explicitas: ["el hierro disuelto en el agua", "la presencia de metano atmosférico"]
respuesta: caso[0
tipo: mc

explicacion: |
  La oxidación del hierro disuelto (Fe2+) en los océanos dio lugar a la formación de capas de hierro bandeado (BIFs), consumiendo el oxígeno producido por la fotosíntesis antes de que este pudiera escapar a la atmósfera.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "avanzado"
  tags: ["evolucion", "oxigenacion", "secuencia"]

enunciado: "Ordena cronológicamente los eventos que permitieron la oxigenación de la atmósfera terrestre:"

opciones_explicitas: ["Aparición de fotosíntesis oxigénica", "Oxidación de hierro disuelto en océanos", "Saturación de sumideros de metano", "Acumulación masiva de O2 atmosférico"]
respuesta: ["Aparición de fotosíntesis oxigénica", "Oxidación de hierro disuelto en océanos", "Saturación de sumideros de metano", "Acumulación masiva de O2 atmosférico"]
tipo: ordenar

explicacion: |
  1. Primero surge la fotosíntesis oxigénica.
  2. El O2 producido se usa para oxidar el hierro en los mares (formando BIFs).
  3. El O2 restante reacciona con gases reductores como el metano.
  4. Una vez agotados los sumideros, el O2 se acumula en la atmósfera.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["evolucion", "oxigeno", "extincion"]

respuesta: "tóxico"
tipo: completar
respuestas_validas: ["tóxico", "venenoso", "mortal"]

enunciado: "La acumulación de oxígeno en la atmósfera primitiva fue ___ para los organismos anaeróbicos dominantes de esa época."

explicacion: |
  El aumento de oxígeno atmosférico (Gran Oxidación) causó una extinción masiva de organismos anaeróbicos, ya que el oxígeno es altamente reactivo y dañino para sus procesos metabólicos sin enzimas antioxidantes.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "basico"
  tags: ["fotosintesis", "oxigeno", "atmosfera"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El oxígeno liberado por la fotosíntesis fue un veneno para los anaerobios.", "tóxico"],
    ["El oxígeno permitió la aparición de la respiración aeróbica.", "beneficioso"]
  ]

opciones_explicitas: ["tóxico", "beneficioso", "neutro"]
respuesta: escenarios[escenario_idx][1
tipo: mc

enunciado: "Considerando el impacto de la fotosíntesis en la atmósfera primitiva, ¿cuál fue el efecto principal del oxígeno sobre los organismos anaeróbicos existentes?"

explicacion: |
  {escenarios[escenario_idx][0]}
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["secuencia", "evolucion", "oxigeno"]

opciones_explicitas: ["Aparición de fotosíntesis oxigénica", "Acumulación de O2 atmosférico", "Extinción de anaerobios dominantes"]
respuesta: ["Aparición de fotosíntesis oxigénica", "Acumulación de O2 atmosférico", "Extinción de anaerobios dominantes"]
tipo: ordenar

enunciado: "Ordena cronológicamente los eventos que llevaron a la Gran Oxidación:"

pasos:
  - "Primer paso: la producción de oxígeno por cianobacterias."
  - "Segundo paso: el oxígeno se acumula en la atmósfera."
  - "Tercer paso: la toxicidad del oxígeno causa la extinción de anaerobios."

explicacion: |
  La fotosíntesis oxigénica produjo el oxígeno, que luego se acumuló en la atmósfera, provocando finalmente la extinción de los organismos anaeróbicos dominantes.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "avanzado"
  tags: ["metabolismo", "anaerobio", "oxidacion"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["Si el organismo es anaerobio estricto, el O2 es ___.", "mortal"],
    ["Si el organismo es aeróbico, el O2 es ___.", "esencial"]
  ]

opciones_explicitas: ["mortal", "esencial", "neutro"]
respuesta: casos[caso_idx][1
tipo: mc

enunciado: "Analiza el escenario: {casos[caso_idx][0]}"

explicacion: |
  La capacidad de utilizar o resistir el oxígeno determinó la supervivencia de las especies durante la transición hacia una atmósfera oxidante.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "basico"
  tags: ["oxigeno", "atmosfera"]

respuesta: 0.0
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si la fotosíntesis aumentó la concentración de oxígeno de 0% a 21%, ¿en qué porcentaje aumentó la presencia de este gas en la atmósfera (en puntos porcentuales)?"

explicacion: |
  El aumento es la diferencia directa entre el estado final (21%) y el inicial (0%), resultando en 21 puntos porcentuales.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["ozono", "oxigeno", "fotosintesis"]

respuesta: "oxigeno"
tipo: mc
opciones_explicitas: ["nitrogeno", "oxigeno", "metano", "dióxido de carbono"]

enunciado: "La formación de la capa de ozono en la atmósfera terrestre fue posible gracias a la acumulación de ___ liberado por la fotosíntesis oxigénica."

explicacion: |
  La fotosíntesis oxigénica libera oxígeno molecular (O2). La interacción de este oxígeno con la radiación ultravioleta permite la formación de ozono (O3), el cual constituye la capa protectora de la Tierra.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "basico"
  tags: ["radiacion_uv", "proteccion"]

respuesta: "falso"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "¿Es correcto afirmar que sin la fotosíntesis oxigénica la radiación ultravioleta no habría afectado la vida terrestre de la misma manera debido a la falta de una capa de ozono?"

explicacion: |
  Correcto. La capa de ozono actúa como un escudo contra la radiación UV. Sin la producción masiva de oxígeno por parte de los organismos fotosintéticos, esta capa no se habría formado.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "avanzado"
  tags: ["secuencia", "evolucion"]

variables:
  idx: uno_de([0, 1])

respuesta: tabla[idx][1
tipo: ordenar
opciones_explicitas: [
  ["Fotosíntesis oxigénica", "Acumulación de O2", "Formación de O3 (Ozono)", "Protección UV"],
  ["Acumulación de O2", "Fotosíntesis oxigénica", "Protección UV", "Formación de O3 (Ozono)"]
]

enunciado: "Ordena cronológicamente los procesos que permitieron la protección de la vida terrestre contra la radiación ultravioleta:"

explicacion: |
  El orden correcto es: 1. Fotosíntesis (produce O2) -> 2. Acumulación de O2 en la atmósfera -> 3. Fotólisis del O2 para formar O3 -> 4. Creación de la capa de ozono protectora.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["oxigeno", "ozono"]

respuesta: "O3"
tipo: completar
respuestas_validas: ["O3", "ozono"]

enunciado: "La presencia de oxígeno (O2) en la atmósfera permitió la formación de la molécula de ___ mediante la acción de la radiación solar."

explicacion: |
  El oxígeno molecular (O2) se descompone por la radiación UV para formar átomos de oxígeno libres, que luego se combinan con otros O2 para formar ozono (O3).
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["radiacion", "consecuencia"]

respuesta: 1
tipo: mc
opciones_explicitas: ["Aumento de la radiación UV en la superficie", "Disminución de la radiación UV en la superficie", "Aumento del efecto invernadero", "Disminución del oxígeno atmosférico"]

enunciado: "Si los organismos fotosintéticos oxigénicos nunca hubieran evolucionado, ¿cuál sería la consecuencia directa sobre la radiación ultravioleta en la superficie terrestre?"

explicacion: |
  Sin la producción de oxígeno, no habría formación de la capa de ozono, lo que resultaría en un aumento letal de la radiación ultravioleta llegando a la superficie.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["fotosintesis", "oxigeno", "evolucion"]

variables:
  datos: [["cianobacterias", "oxigeno"], ["plantas", "oxigeno"], ["algas", "oxigeno"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["oxigeno", "metano", "dióxido de carbono", "nitrógeno"]

enunciado: "Durante el Gran Evento de Oxidación, la actividad de las {datos[idx][0]} liberó un gas que transformó la atmósfera primitiva. ¿Qué gas fue?"

explicacion: |
  La aparición de organismos fotosintéticos como las {datos[idx][0]} permitió la liberación masiva de oxígeno como subproducto, cambiando la química atmosférica.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "avanzado"
  tags: ["redox", "fotosintesis", "oxigeno"]

variables:
  datos: [["CO2 + H2O", "O2"], ["CH4 + O2", "CO2"], ["H2O + CO2", "H2"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["O2", "CO2", "H2", "CH4"]

enunciado: "En la fase luminosa de la fotosíntesis, la fotólisis del agua produce el gas que permitió la vida aeróbica. El balance simplificado es: {datos[idx][0]} -> ___ + glucosa."

explicacion: |
  La fotólisis del agua libera {respuesta}, el cual es fundamental para la respiración celular aeróbica posterior.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["respiracion", "oxigeno", "metabolismo"]

variables:
  datos: [["presencia de O2", "respiracion aerobia"], ["ausencia de O2", "fermentacion"], ["exceso de O2", "respiracion aerobia"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["respiracion aerobia", "fermentacion"]

enunciado: "La acumulación de oxígeno en la atmósfera permitió que los organismos pasaran de la ___ a la utilización de aceptores de electrones más eficientes."

explicacion: |
  La disponibilidad de O2 permitió la evolución de la respiración aeróbica, un proceso mucho más eficiente energéticamente que la fermentación.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["secuencia", "evolucion", "oxigeno"]

respuesta: ["Fotosíntesis oxigénica", "Oxidación de metano", "Acumulación de O2 atmosférico", "Explosión de la vida aeróbica"]
tipo: ordenar
opciones_explicitas: ["Fotosíntesis oxigénica", "Oxidación de metano", "Acumulación de O2 atmosférico", "Explosión de la vida aeróbica"]

enunciado: "Ordena cronológicamente los eventos que permitieron la transición de una atmósfera reductora a una oxidante:"

explicacion: |
  Primero ocurre la fotosíntesis, luego el oxígeno reacciona con gases reductores (como el metano), luego se acumula en la atmósfera y finalmente permite la vida aeróbica.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "avanzado"
  tags: ["causa", "efecto", "oxigeno"]

variables:
  datos: [["aumento de O2", "vida aerobia"], ["disminución de O2", "extinciones masivas"], ["aumento de CO2", "calentamiento global"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["vida aerobia", "extinciones masivas", "calentamiento global"]

enunciado: "Considerando el impacto biológico: Un {datos[idx][0]} en la atmósfera fue la causa directa de la aparición de la ___."

explicacion: |
  El {datos[idx][0]} permitió la evolución de procesos metabólicos que utilizan oxígeno como aceptor final de electrones.
```
