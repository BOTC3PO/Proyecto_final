# Examen jefe — [PENDIENTE #683]

> Logro #683. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **125 preguntas totales** en 5/5 secciones.

---

## Sección: materia-energia-oscura (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "basico"
  tags: ["materia_oscura", "luz", "gravedad"]

respuesta: "invisible"
tipo: completar
respuestas_validas:
  - "invisible"

enunciado: "Debido a que la materia oscura no emite, refleja ni absorbe radiación electromagnética, su naturaleza es ___________ para nuestros instrumentos ópticos tradicionales."

explicacion: |
  La materia oscura es invisible al espectro electromagnético (luz, radio, rayos X, etc.), lo que impide su detección directa mediante telescopios convencionales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["galaxias", "rotación", "gravedad"]

respuesta: "La velocidad de rotación se mantiene constante o aumenta en la periferia"
tipo: mc
opciones_explicitas: ["La velocidad de rotación disminuye conforme nos alejamos del centro", "La velocidad de rotación se mantiene constante o aumenta en la periferia", "Las galaxias colapsarían por falta de masa", "La gravedad es nula en los bordes de la galaxia"]

enunciado: "Al observar las curvas de rotación de las galaxias espirales, se detecta que las estrellas en la periferia se mueven a una velocidad que contradice la masa visible. ¿Cuál es la observación real?"

explicacion: |
  Si solo existiera la materia visible, las estrellas externas deberían girar más lento. El hecho de que mantengan velocidades altas sugiere la presencia de una masa adicional (materia oscura) que proporciona la gravedad necesaria.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "basico"
  tags: ["gravedad", "masa"]

respuesta: "gravitacionales"
tipo: completar
respuestas_validas:
  - "gravitacionales"

enunciado: "Dado que no podemos ver la materia oscura, su existencia se infiere únicamente a través de sus efectos ___________ sobre la materia bariónica (visible)."

explicacion: |
  La materia oscura interactúa principalmente a través de la gravedad, alterando el movimiento de las estrellas y la luz (lentes gravitacionales).
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["composición", "universo"]

respuesta: "Materia oscura"
tipo: mc
opciones_explicitas: ["Materia bariónica", "Materia oscura", "Energía oscura", "Radiación de fondo"]

enunciado: "La masa adicional necesaria para explicar la cohesión de los cúmulos de galaxias y las curvas de rotación galáctica se conoce como ___________."

explicacion: |
  La materia oscura constituye aproximadamente el 27% del universo, mientras que la materia ordinaria (bariónica) es solo un 5%.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "avanzado"
  tags: ["metodología", "evidencia"]

respuesta: "masa_visible"
tipo: completar
respuestas_validas:
  - "masa_visible"

enunciado: "La discrepancia observada entre la velocidad de rotación galáctica y la cantidad de ___ es la principal prueba de la existencia de la materia oscura."

explicacion: |
  La falta de masa visible suficiente para explicar la velocidad de las galaxias es la evidencia fundamental que llevó a la hipótesis de la materia oscura.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "basico"
  tags: ["cosmologia", "expansion_universo"]

tipo: mc
opciones_explicitas: ["Materia oscura", "Energía oscura", "Materia bariónica", "Radiación cósmica"]
respuesta: "Energía oscura"

enunciado: "A finales de la década de 1990, se descubrió que el universo no solo se expande, sino que lo hace de forma acelerada. El fenómeno responsable de esta aceleración es la ________."

explicacion: |
  La energía oscura es una forma de energía que permea todo el espacio y actúa como una fuerza repulsiva que acelera la expansión del universo, diferenciándose de la materia oscura que actúa principalmente mediante la gravedad.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["hitos", "astronomia"]

variables:
  idx: uno_de([0, 1])
  escenario: [[1998, "el descubrimiento de la expansión acelerada"], [2011, "el otorgamiento del Premio Nobel de Física por dicho descubrimiento"]]

tipo: completar
respuestas_validas:
  - "1998"
  - "2011"

enunciado: "La evidencia observacional que cambió la cosmología moderna y señaló la existencia de la energía oscura fue publicada en el año {escenario[idx][0]}, marcando {escenario[idx][1]}."

explicacion: |
  En 1998, las observaciones de supernovas lejanas demostraron que la expansión del universo se está acelerando, lo que llevó a la inclusión de la energía oscura en el modelo estándar de la cosmología.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "avanzado"
  tags: ["materia_oscura", "energia_oscura"]

tipo: mc
opciones_explicitas: ["Atrae la materia mediante gravedad", "Repele el espacio mediante presión negativa", "Es visible mediante espectroscopia", "Es una partícula subatómica conocida"]
respuesta: "Repele el espacio mediante presión negativa"

enunciado: "Mientras que la materia oscura ejerce una atracción gravitatoria que ayuda a la formación de estructuras, la energía oscura se caracteriza por su capacidad de ________."

explicacion: |
  La energía oscura posee una presión negativa que contrarresta la gravedad a escalas cosmogónicas, provocando que la expansión del universo sea acelerada en lugar de frenarse.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["teoria", "futuro_universo"]

tipo: mc
opciones_explicitas: ["Big Crunch", "Big Freeze", "Big Bounce", "Punto de equilibrio"]
respuesta: "Big Freeze"

enunciado: "Si la energía oscura continúa dominando la expansión del universo de manera constante, el escenario más probable para el destino final del cosmos es el ________."

explicacion: |
  El 'Big Freeze' (Gran Congelamiento) ocurre cuando la expansión es tan rápida que las galaxias se alejan tanto que el universo se enfría hasta alcanzar un estado de entropía máxima donde no puede haber más procesos físicos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["cronologia", "hitos"]

tipo: ordenar
opciones_explicitas: ["Modelo de materia oscura fría", "Descubrimiento de la expansión acelerada", "Aceptación del modelo Lambda-CDM"]

respuesta_orden: ["Modelo de materia oscura fría", "Descubrimiento de la expansión acelerada", "Aceptación del modelo Lambda-CDM"]

enunciado: "Ordena cronológicamente estos hitos que permitieron consolidar la visión actual del universo dominado por componentes oscuros:"

explicacion: |
  Primero se postuló la existencia de la materia oscura para explicar la rotación galáctica; en 1998 se descubrió la aceleración (energía oscura); finalmente, esto llevó a la adopción del modelo Lambda-CDM (materia oscura fría + constante cosmológica/energía oscura).
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "basico"
  tags: ["cosmologia", "composicion"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["5%", "materia ordinaria"], ["27%", "materia oscura"], ["68%", "energía oscura"]]

opciones_explicitas: ["5%", "27%", "68%"]
respuesta: datos[idx][0]
tipo: mc

enunciado: "Según el modelo estándar de la cosmología, la fracción del universo compuesta por {datos[idx][1]} es aproximadamente del ___."

explicacion: |
  La composición estimada del universo es: 5% materia ordinaria, 27% materia oscura y 68% energía oscura.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "basico"
  tags: ["energia_oscura"]

respuesta: "energía oscura"
tipo: completar
respuestas_validas:
  - "energía oscura"

enunciado: "El componente que constituye aproximadamente el 68% del universo y es responsable de la expansión acelerada se denomina ___."

explicacion: |
  La energía oscura es el componente dominante del universo, representando cerca del 68% de su densidad total.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["orden", "densidad"]

opciones_explicitas: ["Materia ordinaria", "Materia oscura", "Energía oscura"]
respuesta_orden: ["Materia ordinaria", "Materia oscura", "Energía oscura"]
tipo: ordenar

enunciado: "Ordena los componentes del universo de menor a mayor abundancia (porcentaje de densidad):"

explicacion: |
  El orden correcto de menor a mayor es: Materia ordinaria (5%), Materia oscura (27%) y Energía oscura (68%).
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["calculo", "porcentajes"]

variables:
  idx: uno_de([0, 1, 2])
  escenario: [["5", "materia ordinaria"], ["27", "materia oscura"], ["68", "energía oscura"]]

respuesta: escenario[idx][0]
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si el universo tiene una densidad total de 100 unidades, ¿cuántas unidades corresponden a la {escenario[idx][1]}?"

pasos:
  - "Identificar el porcentaje correspondiente al componente mencionado."
  - "Multiplicar el porcentaje por la densidad total (100)."

explicacion: |
  El valor corresponde al porcentaje asignado a la {escenario[idx][1]} en el modelo cosmológico actual.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "avanzado"
  tags: ["conceptos"]

variables:
  caso: [["verdadero", "La energía oscura es el componente más abundante."], ["falso", "La materia oscura es el componente más abundante."]]
  seleccionada: uno_de(caso)

respuesta: seleccionada[0]
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Analiza la siguiente afirmación: {seleccionada[1]}. ¿Es correcta?"

explicacion: |
  La afirmación es {seleccionada[1]}. La materia ordinaria solo representa el 5%, mientras que la energía oscura es la mayoritaria con un 68%.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "basico"
  tags: ["cosmologia", "misterio"]

respuesta: "materia_oscura"
tipo: mc
opciones_explicitas: ["materia_oscura", "energia_oscura", "materia_bariónica", "radiación_cósmica"]

enunciado: "Aunque no podemos verla directamente, sabemos que existe la ___ debido a su influencia gravitatoria en las galaxias."

explicacion: |
  La materia oscura no emite, absorbe ni refleja luz, lo que la hace invisible, pero su gravedad es fundamental para mantener unidas a las galaxias.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["expansion", "energia_oscura"]

respuesta: "Big Freeze"
tipo: mc
opciones_explicitas: ["Big Crunch", "Big Freeze", "Big Rip", "Big Bounce"]

enunciado: "Si la energía oscura domina y acelera la expansión del universo de manera constante e indefinida, el destino más probable del universo es el ___."

explicacion: |
  La energía oscura actúa como una fuerza repulsiva que acelera la expansión del universo. Dependiendo de su densidad, el universo podría terminar en un enfriamiento eterno (Big Freeze) o un desgarro final (Big Rip).
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "avanzado"
  tags: ["gravedad", "evidencia"]

respuesta: 5
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si la materia visible representa aproximadamente el 5% del universo, y la materia oscura el 27%, ¿qué porcentaje aproximado del universo corresponde a la energía oscura?"

pasos:
  - "Sumar el porcentaje de materia visible y materia oscura: 5 + 27 = 32"
  - "Restar ese total al 100% del universo: 100 - 32 = 68"

explicacion: |
  Según el modelo estándar de cosmología (Lambda-CDM), la energía oscura constituye aproximadamente el 68% del contenido energético-material del universo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "basico"
  tags: ["terminologia"]

respuesta_orden: ["materia_oscura", "energia_oscura", "materia_visible"]
tipo: ordenar
opciones_explicitas: ["materia_oscura", "energia_oscura", "materia_visible"]

enunciado: "Ordena estos componentes del universo de mayor a menor abundancia (según el modelo actual):"

explicacion: |
  El orden correcto de abundancia es: Energía Oscura (~68%), Materia Oscura (~27%) y Materia Visible (~5%).
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["fisica_particulas"]

respuesta: "es_desconocida"
tipo: completar
respuestas_validas:
  - "es_desconocida"
  - "es_desconocida"

enunciado: "A pesar de las décadas de investigación, la naturaleza exacta de la energía oscura ___."

explicacion: |
  Aunque detectamos su efecto en la expansión acelerada del cosmos, la identidad de la partícula o campo que la compone sigue siendo uno de los mayores misterios de la ciencia.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["astronomia", "materia_oscura"]

variables:
  datos: [["curvas_rotacion", "materia_oscura"], ["expansion_acelerada", "energia_oscura"], ["lentes_gravitacionales", "materia_oscura"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["materia_oscura", "energia_oscura"]

enunciado: "Se observa que las galaxias rotan mucho más rápido de lo que la masa visible permitiría, sugiriendo la presencia de una masa no visible. Este fenómeno de {datos[idx][0]} es una evidencia de:"

explicacion: |
  La materia oscura proporciona la masa extra necesaria para explicar las velocidades orbitales de las estrellas en las galaxias y la distorsión de la luz por lente gravitacional.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "avanzado"
  tags: ["cosmologia", "energia_oscura"]

variables:
  datos: [["aceleracion_expansion", "energia_oscura"], ["colapso_gravitacional", "materia_oscura"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["materia_oscura", "energia_oscura"]

enunciado: "La observación de supernovas tipo Ia indica que la expansión del universo se está acelerando. Este efecto de {datos[idx][0]} es causado por la:"

explicacion: |
  La energía oscura actúa como una presión negativa que contrarresta la gravedad a escalas cosmológicas, impulsando la expansión acelerada del espacio.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["cosmologia", "estructura_cosmica"]

respuesta: "energia_oscura"
tipo: completar
respuestas_validas:
  - "energia_oscura"

enunciado: "Mientras que la materia oscura ayuda a la formación de galaxias mediante su atracción gravitatoria, la responsable de la repulsión espacial que separa los cúmulos de galaxias es la ___."

explicacion: |
  La materia oscura es atractiva (favorece la agrupación de materia), mientras que la energía oscura es repulsiva (favorece la expansión).
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "basico"
  tags: ["lentes_gravitacionales", "materia_oscura"]

variables:
  datos: [["distorsion_luz", "materia_oscura"], ["expansión_lineal", "energia_oscura"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["materia_oscura", "energia_oscura"]

enunciado: "La detección de la {datos[idx][0]} en cúmulos de galaxias permite mapear la distribución de la:"

explicacion: |
  La luz se curva al pasar cerca de grandes masas. Como la masa observada no es suficiente para causar la curvatura detectada, se infiere la presencia de materia oscura.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "avanzado"
  tags: ["modelo_estandar", "cosmologia"]

respuesta: "materia_oscura"
tipo: completar
respuestas_validas:
  - "materia_oscura"

enunciado: "En el modelo estándar de cosmología, la energía oscura es la fuerza que domina la expansión, mientras que la ___ es la componente que permite la formación de estructuras a gran escala."

explicacion: |
  Es un error conceptual común: la energía oscura domina la expansión (dinámica global), la materia oscura domina la formación de estructuras (dinámica local/regional).
```

## Sección: estaciones-del-ano (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["astronomia", "mitos"]

respuesta: falso
tipo: vf

enunciado: "El cambio de las estaciones del año ocurre principalmente porque la Tierra se acerca o se aleja del Sol en su órbita elíptica."

explicacion: |
  Falso. La distancia al Sol no es la causa de las estaciones: de hecho la Tierra está más cerca del Sol en enero (verano austral/invierno boreal) que en julio. La causa real es la inclinación del eje terrestre.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "intermedio"
  tags: ["eje_terrestre", "inclinacion"]

variables:
  angulo_eje: 23.5

respuesta: "inclinación del eje"
tipo: completar
respuestas_validas:
  - "inclinación del eje"
  - "inclinación terrestre"
  - "eje inclinado"

enunciado: "La causa fundamental de que existan las estaciones es la ___ de la Tierra respecto a su plano orbital."

explicacion: |
  La inclinación de aproximadamente {angulo_eje}° hace que la radiación solar se distribuya de forma desigual sobre la superficie terrestre a lo largo del año.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "intermedio"
  tags: ["radiacion", "angulo"]

respuesta: "mayor intensidad"
tipo: mc
opciones_explicitas: ["menor intensidad", "mayor intensidad", "misma intensidad", "intensidad nula"]

enunciado: "Cuando un hemisferio está inclinado hacia el Sol, los rayos solares inciden con un ángulo más perpendicular y la energía se concentra en un área menor, resultando en una ___ de radiación por unidad de superficie."

explicacion: |
  Al incidir de forma más perpendicular, la energía solar se concentra en un área más pequeña, lo que aumenta la temperatura local y genera el verano.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "avanzado"
  tags: ["hemisferios", "estaciones"]

variables:
  idx: uno_de([0, 1])
  escenario: [["verano", "invierno"], ["invierno", "verano"]]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["verano", "invierno"]

enunciado: "Debido a la inclinación del eje, si el hemisferio norte está experimentando {escenario[idx][0]}, ¿qué estación experimenta al mismo tiempo el hemisferio sur?"

explicacion: |
  La inclinación hace que un hemisferio reciba más energía directa mientras el otro recibe rayos más oblicuos y dispersos, creando estaciones opuestas y simultáneas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["luz_solar"]

respuesta: "perpendicular"
tipo: completar
respuestas_validas:
  - "perpendicular"
  - "directa"
  - "recta"

enunciado: "En el solsticio de verano, el sol alcanza su máxima altura en el cielo porque los rayos inciden de forma casi ___ sobre el trópico correspondiente."

explicacion: |
  La máxima concentración de calor ocurre cuando el ángulo de incidencia es lo más cercano posible a los 90 grados (perpendicular).
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["astronomia", "estaciones"]

tipo: mc
opciones_explicitas: ["Verano", "Invierno", "Equinoccio"]

enunciado: "Cuando un hemisferio terrestre está inclinado hacia el Sol, recibe mayor radiación solar y experimenta la estación de ___."

respuesta: "Verano"

explicacion: |
  La inclinación del eje terrestre hacia el Sol durante un periodo determinado provoca que la radiación sea más directa y los días sean más largos, definiendo el verano.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["hemisferios", "estaciones"]

variables:
  idx: uno_de([0, 1])
  escenario: [["Norte", "Sur", "Verano", "Invierno"], ["Sur", "Norte", "Invierno", "Verano"]]

tipo: mc
opciones_explicitas: ["Verano", "Invierno"]

enunciado: "Si en el hemisferio {escenario[idx][0]} es {escenario[idx][2]}, ¿qué estación es al mismo tiempo en el hemisferio {escenario[idx][1]}?"

respuesta: escenario[idx][3]

explicacion: |
  Las estaciones están invertidas entre hemisferios: cuando uno está inclinado hacia el Sol (verano), el otro está inclinado alejándose de él (invierno).
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "intermedio"
  tags: ["radiacion", "duracion_dia"]

tipo: completar
respuestas_validas:
  - "mayor"

enunciado: "Debido a la inclinación hacia el Sol, el verano se caracteriza por recibir una radiación ___ que el resto del año."

respuesta: "mayor"

explicacion: |
  La inclinación aumenta la densidad de energía solar por unidad de superficie y prolonga la duración de la luz solar diaria.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["ciclo", "orden"]

tipo: ordenar
opciones_explicitas: ["Verano", "Otoño", "Invierno", "Primavera"]

enunciado: "Ordena cronológicamente las estaciones del año comenzando desde el verano."

respuesta_orden: ["Verano", "Otoño", "Invierno", "Primavera"]

explicacion: |
  El ciclo estacional sigue un orden regular determinado por la posición de la Tierra en su órbita.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "intermedio"
  tags: ["energia", "sol"]

tipo: completar
respuestas_validas:
  - "menor"

enunciado: "Si la radiación solar es máxima en el verano, en el invierno la radiación solar es ___ que en el verano."

respuesta: "menor"

explicacion: |
  En el invierno, la inclinación aleja el hemisferio del Sol, resultando en una menor intensidad de radiación solar.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["astronomia", "estaciones"]

respuesta: "igual"
tipo: completar
respuestas_validas:
  - "igual"

enunciado: "Durante los equinoccios de primavera y de otoño, la duración del día y la noche es ___."

explicacion: |
  En los equinoccios, el Sol está directamente sobre el ecuador terrestre, lo que provoca que el día y la noche tengan aproximadamente la misma duración.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["solsticio", "verano"]

respuesta: verdadero
tipo: vf

enunciado: "Si nos encontramos en el Hemisferio Norte, el solsticio de verano coincide con el día más largo del año."

explicacion: |
  En el Hemisferio Norte, el solsticio de verano marca el punto donde el Sol alcanza su máxima declinación norte, resultando en el día más largo del año.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "intermedio"
  tags: ["secuencia", "estaciones"]

respuesta_orden: ["equinoccio de primavera", "solsticio de verano", "equinoccio de otoño", "solsticio de invierno"]
tipo: ordenar
opciones_explicitas: ["equinoccio de primavera", "solsticio de verano", "equinoccio de otoño", "solsticio de invierno"]

enunciado: "Ordena cronológicamente las estaciones del año comenzando por el equinoccio de primavera:"

explicacion: |
  El ciclo estándar comienza con la primavera (equinoccio), sigue con el verano (solsticio), luego el otoño (equinoccio) y termina con el invierno (solsticio).
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["solsticio", "invierno"]

respuesta: "solsticio de invierno"
tipo: mc
opciones_explicitas: ["solsticio de verano", "equinoccio de primavera", "equinoccio de otoño", "solsticio de invierno"]

enunciado: "¿En qué momento astronómico ocurre el día más corto del año (en el hemisferio correspondiente)?"

explicacion: |
  El solsticio de invierno es el momento en que el hemisferio está más inclinado lejos del Sol, resultando en el día más corto y la noche más larga.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "avanzado"
  tags: ["calculo", "astronomia"]

respuesta: "mayor"
tipo: completar
respuestas_validas:
  - "mayor"

enunciado: "Si estamos en el solsticio de verano (en el hemisferio correspondiente), la duración del día es ___ que la de la noche."

explicacion: |
  En el solsticio de verano, la inclinación de la Tierra permite que ese hemisferio reciba luz solar por más tiempo, haciendo que el día sea más largo que la noche.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["geografia", "clima", "latitud"]

respuesta: verdadero
tipo: vf

enunciado: "En las regiones de clima ecuatorial, la diferencia estacional de temperatura es mínima porque el ángulo de incidencia solar se mantiene casi constante durante todo el año."

explicacion: |
  En las zonas ecuatoriales, el sol incide de forma casi perpendicular todo el año, manteniendo temperaturas estables. En las zonas templadas y polares, en cambio, el ángulo cambia mucho más a lo largo del año, provocando estaciones marcadas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "intermedio"
  tags: ["astronomia", "clima"]

respuesta: "cambio"
tipo: completar
respuestas_validas:
  - "cambio"

enunciado: "En las zonas polares, la marcada diferencia estacional se debe a que el ángulo de incidencia solar experimenta un gran ___ durante el ciclo anual."

explicacion: |
  El movimiento de traslación combinado con la inclinación del eje hace que en los polos el ángulo de incidencia solar varíe drásticamente, causando cambios extremos de temperatura.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "intermedio"
  tags: ["clima", "latitud"]

variables:
  idx: uno_de([0, 1])
  datos: [["Ecuador", "mínima"], ["Zonas Templadas", "máxima"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["mínima", "máxima"]

enunciado: "Considerando el escenario de {datos[idx][0]}, la variación estacional de la temperatura es ___."

explicacion: |
  En el Ecuador, la radiación solar es constante durante todo el año, por lo que la variación térmica es mínima; en las zonas templadas, en cambio, la variación es máxima.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "avanzado"
  tags: ["astronomia", "geografia"]

respuesta: "inclinación del eje"
tipo: mc
opciones_explicitas: ["inclinación del eje", "distancia al Sol", "velocidad de rotación", "forma de la órbita"]

enunciado: "De los siguientes factores, ¿cuál es el que determina principalmente la variación del ángulo de incidencia solar y, con ella, la estacionalidad en cada latitud?"

explicacion: |
  La inclinación del eje terrestre es el factor principal que hace que el ángulo de incidencia varíe según la latitud y la época del año, no la distancia al Sol.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["clima"]

respuesta: "estabilidad"
tipo: completar
respuestas_validas:
  - "estabilidad"
  - "constancia"

enunciado: "En el ecuador, la ausencia de estaciones térmicas marcadas se debe principalmente a la ___ del ángulo de incidencia solar a lo largo del año."

explicacion: |
  A diferencia de las latitudes altas, en el ecuador el ángulo de incidencia solar casi no cambia entre enero y julio, así que no hay una estación notablemente más fría o más cálida que otra.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["astronomia", "hemisferios"]

variables:
  idx: uno_de([0, 1, 2, 3])
  datos: [["Diciembre", "Verano", "Hemisferio Sur"], ["Junio", "Invierno", "Hemisferio Sur"], ["Diciembre", "Invierno", "Hemisferio Norte"], ["Junio", "Verano", "Hemisferio Norte"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Verano", "Invierno", "Otoño", "Primavera"]

enunciado: "Si nos encontramos en el mes de {datos[idx][0]} y estamos en el {datos[idx][2]}, ¿qué estación del año estamos experimentando?"

explicacion: |
  En el Hemisferio Sur, el sol incide más directamente sobre el Trópico de Capricornio en diciembre (verano) y sobre el Trópico de Cáncer en junio (invierno); en el Hemisferio Norte es al revés.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "intermedio"
  tags: ["astronomia", "solsticio"]

variables:
  idx: uno_de([0, 1])
  datos: [["Solsticio de Diciembre", "Invierno", "Hemisferio Norte"], ["Solsticio de Junio", "Invierno", "Hemisferio Sur"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Verano", "Invierno", "Otoño", "Primavera"]

enunciado: "Durante el {datos[idx][0]}, en el {datos[idx][2]} la duración del día es la más corta del año. Esto define la estación de:"

explicacion: |
  El solsticio de invierno marca el inicio de la estación más fría en el hemisferio correspondiente, debido a la inclinación del eje terrestre.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "intermedio"
  tags: ["comparacion", "hemisferios"]

variables:
  idx: uno_de([0, 1])
  datos: [["Primavera", "Otoño"], ["Otoño", "Primavera"]]

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "Primavera"
  - "Otoño"

enunciado: "Si en el Hemisferio Norte estamos en la estación de {datos[idx][0]}, en el Hemisferio Sur estamos en la estación de ___."

explicacion: |
  Las estaciones son opuestas entre hemisferios debido a la inclinación del eje de la Tierra respecto al plano de su órbita.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["equinoccio", "astronomia"]

variables:
  idx: uno_de([0, 1])
  datos: [["Equinoccio de Marzo", "Primavera", "Hemisferio Norte"], ["Equinoccio de Septiembre", "Otoño", "Hemisferio Norte"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Primavera", "Otoño", "Verano", "Invierno"]

enunciado: "En el {datos[idx][0]} en el {datos[idx][2]}, el día y la noche tienen la misma duración. Esto marca el inicio de la:"

explicacion: |
  Los equinoccios (marzo y septiembre) representan los momentos en que el sol cruza el ecuador celeste, equilibrando la luz y la sombra en todo el planeta.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["secuencia", "ciclos"]

respuesta_orden: ["Verano", "Otoño", "Invierno", "Primavera"]
tipo: ordenar
opciones_explicitas: ["Verano", "Otoño", "Invierno", "Primavera"]

enunciado: "Ordena las estaciones siguiendo el ciclo natural comenzando desde el Verano."

explicacion: |
  El ciclo astronómico sigue siempre el mismo orden: Verano → Otoño → Invierno → Primavera (y vuelve a empezar).
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

respuestas_validas:
  - "porción"
  - "parte"
  - "fracción"
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
respuestas_validas:
  - "eclipse lunar"

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
respuestas_validas:
  - "luna nueva"

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
respuesta_orden: ["luna creciente iluminante", "cuarto creciente", "gibosa creciente", "luna llena"]
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
respuestas_validas:
  - "0.5"
  - "0,5"
  - "1/2"
  - "50%"

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
respuestas_validas:
  - "29.5"
  - "29,5"
  - "29"

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
respuestas_validas:
  - "la cara iluminada mira a la Tierra"

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
respuesta_orden: ["Luna Nueva", "Cuarto Creciente", "Luna Llena", "Cuarto Menguante"]
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
respuestas_validas:
  - "sincrónica"
  - "sincronizada"

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
respuestas_validas:
  - "cara visible"

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

respuesta_orden: ["rotación sincrónica", "cara visible", "cara oculta"]
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
  porcentajes: [0.0, 1.0]
  fases: ["Luna Nueva", "Luna Llena"]

respuesta: fases[idx]
tipo: mc
opciones_explicitas: ["Luna Nueva", "Cuarto Creciente", "Cuarto Menguante", "Luna Llena"]

enunciado: "Si la iluminación visible de la Luna es del {redondear(porcentajes[idx] * 100, 0)}%, ¿qué fase lunar estamos observando?"

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
respuestas_validas:
  - datos[idx][0]

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
respuestas_validas:
  - "Luna Nueva"
  - "Luna Llena"

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

respuesta_orden: ["Luna Nueva", "Cuarto Creciente", "Luna Llena", "Cuarto Menguante"]
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

## Sección: movimiento-aparente-constelaciones (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["astronomia", "rotacion_terrestre"]

respuesta: "rotación terrestre"
tipo: completar
respuestas_validas:
  - "rotación terrestre"

enunciado: "El movimiento aparente de las estrellas durante la noche, donde parecen desplazarse de este a oeste, es causado en realidad por la ___ de la Tierra."

explicacion: |
  Aunque parece que el cielo gira alrededor de nosotros, es la Tierra la que gira sobre su propio eje de oeste a este, lo que genera la ilusión de movimiento estelar en sentido contrario.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["observacion", "astronomia"]

respuesta: "Este-Oeste"
tipo: mc
opciones_explicitas: ["Este-Oeste", "Oeste-Este", "Norte-Sur", "Sur-Norte"]

enunciado: "Debido a la rotación terrestre, ¿en qué dirección aparente vemos que se desplazan las estrellas durante la noche?"

explicacion: |
  Como la Tierra rota hacia el Este, los objetos celestes parecen moverse hacia el Oeste.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "intermedio"
  tags: ["geocentrismo", "heliocentrismo"]

respuesta: falso
tipo: vf

enunciado: "¿Es el movimiento de las constelaciones causado por el desplazamiento físico de las estrellas alrededor de la Tierra?"

explicacion: |
  Falso. Las estrellas tienen sus propios movimientos propios (muy lentos), pero el movimiento diario que vemos es un efecto óptico de nuestra rotación.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "avanzado"
  tags: ["eje_terrestre", "estrellas_fijas"]

respuesta: "Polo Norte Celeste"
tipo: mc
opciones_explicitas: ["Polo Norte Celeste", "Ecuador Celeste", "Polo Sur Celeste"]

enunciado: "En el hemisferio norte, las estrellas parecen girar alrededor de un punto fijo en el cielo llamado ___."

explicacion: |
  El eje de rotación de la Tierra apunta hacia las estrellas que parecen estar en el centro del movimiento circular, como la Estrella Polar.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "intermedio"
  tags: ["observacion", "secuencia"]

respuesta_orden: ["Aparición por el Este", "Paso por el Meridiano", "Ocultación por el Oeste"]
tipo: ordenar
opciones_explicitas: ["Aparición por el Este", "Paso por el Meridiano", "Ocultación por el Oeste"]

enunciado: "Ordena el ciclo de movimiento aparente de una estrella desde que sale hasta que se pone:"

pasos:
  - "La estrella aparece en el horizonte."
  - "La estrella alcanza su punto más alto."
  - "La estrella desaparece bajo el horizonte."

explicacion: |
  Debido a la rotación de la Tierra, el ciclo sigue siempre este orden: sale por el este, cruza el cielo (meridiano) y se pone por el oeste.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["astronomia", "tierra", "sol"]

respuesta: "traslación"
tipo: completar
respuestas_validas:
  - "traslación"
  - "traslación de la Tierra"

enunciado: "El cambio en las constelaciones visibles a lo largo de los meses ocurre debido al movimiento de ___ de la Tierra alrededor del Sol."

explicacion: |
  La Tierra se desplaza en su órbita alrededor del Sol. Esto hace que, según nuestra posición en la órbita, la parte del cielo que queda en la oscuridad (noche) cambie, permitiéndonos ver diferentes estrellas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "intermedio"
  tags: ["estaciones", "cielo_nocturno"]

variables:
  escenario: uno_de([["Orión", "invierno"], ["Escorpio", "verano"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["invierno", "verano", "primavera", "otoño"]

enunciado: "Si en una fecha determinada observamos con claridad la constelación de {escenario[0]}, esto indica que estamos en la estación de {escenario[1]}."

explicacion: |
  Las constelaciones estacionales dependen de la posición de la Tierra respecto al Sol. Por ejemplo, la constelación de Orión es típica del cielo de invierno en el hemisferio norte.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["perspectiva", "sol"]

respuesta: "Sol"
tipo: completar
respuestas_validas:
  - "Sol"
  - "Sol"

enunciado: "Las constelaciones que vemos en el cielo nocturno cambian porque, al movernos en nuestra órbita, el ___ queda situado entre la Tierra y las estrellas que antes veíamos, ocultándolas durante la noche."

explicacion: |
  Durante el día, el Sol "tapa" la luz de las estrellas que se encuentran en la misma dirección. Al cambiar nuestra posición orbital, las estrellas que antes eran visibles de noche ahora están en la dirección del Sol.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "avanzado"
  tags: ["orden", "ciclo_anual"]

respuesta_orden: ["Eje terrestre", "Traslación", "Cambio de constelaciones"]
tipo: ordenar
opciones_explicitas: ["Eje terrestre", "Traslación", "Cambio de constelaciones"]

enunciado: "Ordena la secuencia lógica de causas que explica por qué vemos diferentes estrellas cada mes:"

pasos:
  - "La Tierra tiene un eje de rotación."
  - "La Tierra realiza un movimiento de traslación alrededor del Sol."
  - "La perspectiva de las estrellas cambia, mostrando nuevas constelaciones."

explicacion: |
  El ciclo es una consecuencia directa del movimiento orbital de la Tierra alrededor del Sol.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "¿Es el movimiento de rotación (sobre su propio eje) la causa principal por la que las constelaciones cambian de una estación a otra?"

explicacion: |
  Falso. La rotación causa el ciclo día/noche, pero es la traslación la que causa el cambio de las constelaciones visibles a lo largo de los meses.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["astronomia", "orientacion"]

respuesta: "eje de rotación"
tipo: completar
respuestas_validas:
  - "eje de rotación"

enunciado: "La estrella Polaris parece permanecer casi fija en el cielo debido a que se encuentra alineada con el ___ de la Tierra."

explicacion: |
  Debido a que la Tierra gira alrededor de su eje, las estrellas parecen moverse en círculos. Como Polaris está casi sobre el eje, su movimiento aparente es mínimo, manteniéndola como punto de referencia constante.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["orientacion", "navegacion"]

opciones_explicitas: ["Determinar la hora exacta", "Orientarse en el hemisferio norte", "Predecir eclipses lunares", "Calcular la distancia a la Luna"]

respuesta: "Orientarse en el hemisferio norte"
tipo: mc

enunciado: "¿Cuál es la principal utilidad histórica de la estrella Polar para los navegantes?"

explicacion: |
  Al estar situada cerca del polo norte celeste, su posición permite identificar rápidamente el norte geográfico, siendo vital para la navegación en el hemisferio norte.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "intermedio"
  tags: ["movimiento_aparente", "rotacion"]

variables:
  respuesta_correcta: "se mueven en arcos circulares"

tipo: mc
opciones_explicitas: ["se mueven en líneas rectas", "se mueven en arcos circulares"]
respuesta: respuesta_correcta

enunciado: "Debido a la rotación terrestre, las estrellas que no son Polaris parecen moverse en el cielo siguiendo un patrón de ___."

explicacion: |
  La rotación de la Tierra sobre su eje provoca que las estrellas tracen trayectorias curvas o arcos en la bóveda celeste durante la noche.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "intermedio"
  tags: ["geometria_celeste"]

respuesta: "norte"
tipo: completar
respuestas_validas:
  - "norte"

enunciado: "Si observamos el cielo nocturno en el hemisferio norte, la estrella que marca el punto cardinal ___ es la Polaris."

explicacion: |
  Polaris es la estrella que indica la dirección del norte celeste, sirviendo como brújula natural.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "avanzado"
  tags: ["observacion", "secuencia"]

opciones_explicitas: ["Localizar la Osa Mayor", "Identificar la estrella Polaris", "Determinar el Norte"]

respuesta_orden: ["Localizar la Osa Mayor", "Identificar la estrella Polaris", "Determinar el Norte"]
tipo: ordenar

enunciado: "Un navegante antiguo sigue este proceso para orientarse usando las estrellas. Ordena los pasos correctamente:"

explicacion: |
  Para encontrar el norte de forma fiable, primero se busca una constelación conocida (como la Osa Mayor), luego se localiza la estrella guía (Polaris) y finalmente se establece el punto cardinal.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["astronomia", "conceptos_basicos"]

respuesta: "patrón aparente"
tipo: completar
respuestas_validas:
  - "patrón aparente"

enunciado: "Una constelación no es un grupo de estrellas unidas físicamente, sino un ___ formado por estrellas que parecen estar juntas desde nuestra perspectiva."

explicacion: |
  Las estrellas de una constelación pueden estar a cientos o miles de años luz de distancia unas de otras; solo parecen estar cerca debido a nuestra perspectiva desde la Tierra.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["distancia", "perspectiva"]

opciones_explicitas: ["Están físicamente unidas por la gravedad", "Están a distancias muy distintas de la Tierra", "Tienen la misma edad y composición", "Se mueven siempre en la misma dirección"]

respuesta: "Están a distancias muy distintas de la Tierra"
tipo: mc

enunciado: "Sobre la distancia real de las estrellas que forman una constelación, es correcto afirmar que:"

explicacion: |
  Aunque en el cielo nocturno parezcan formar un dibujo coherente, la mayoría de las veces las estrellas de una constelación no tienen ninguna relación física de distancia entre sí.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "intermedio"
  tags: ["perspectiva", "geometria_espacial"]

tipo: mc
enunciado: "Las estrellas de una constelación suelen estar a distancias radicalmente distintas de la Tierra, algunas mucho más cerca que otras. Sin embargo, las vemos formando una figura plana en el cielo. ¿Cuál es la explicación de este efecto?"
opciones_explicitas:
  - "La perspectiva visual proyecta estrellas a distancias muy distintas sobre un mismo plano aparente"
  - "Las estrellas de una constelación están realmente cerca unas de otras en el espacio"
  - "Todas las estrellas se encuentran exactamente a la misma distancia de la Tierra"
  - "Las constelaciones son figuras físicas dibujadas en el espacio interestelar"
respuesta: "La perspectiva visual proyecta estrellas a distancias muy distintas sobre un mismo plano aparente"

explicacion: |
  Lo que vemos es una proyección: la línea de visión aplana la profundidad real del espacio, así que estrellas separadas por años luz de distancia entre sí pueden parecer vecinas cuando en realidad no lo están.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["estrellas", "patrones"]

respuesta: "no están relacionadas físicamente entre sí"
tipo: completar
respuestas_validas:
  - "no están relacionadas físicamente entre sí"

enunciado: "A diferencia de un sistema estelar como el Sol y sus planetas, las estrellas que componen una constelación ___."

explicacion: |
  La agrupación es una ilusión óptica causada por la línea de visión. Físicamente, son objetos independientes que navegan por el espacio en direcciones distintas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "intermedio"
  tags: ["orden_logico", "perspectiva"]

opciones_explicitas: ["Luz de la estrella", "Distancia real de la estrella", "Posición aparente en el cielo", "Formación de la constelación"]

respuesta_orden: ["Luz de la estrella", "Distancia real de la estrella", "Posición aparente en el cielo", "Formación de la constelación"]
tipo: ordenar

enunciado: "Ordena los conceptos según el proceso que explica la creación de una constelación (desde el origen físico hasta la percepción humana):"

explicacion: |
  Primero la luz viaja desde la estrella (1), la estrella tiene una distancia real (2), esa luz llega con una posición específica (3) y el ojo humano percibe el patrón (4).
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["astronomia", "estaciones"]

respuesta: "Leo"
tipo: mc
opciones_explicitas: ["Leo", "Tauro", "Cáncer", "Orión"]

enunciado: "Durante la primavera en el hemisferio norte, ¿cuál de las siguientes constelaciones se encuentra en su punto más alto (culminación) en el cielo nocturno?"

explicacion: |
  Debido al movimiento de traslación de la Tierra, diferentes constelaciones son visibles en diferentes épocas del año. Leo es la constelación clásica de las noches de primavera, mientras que Tauro y Orión son constelaciones invernales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "intermedio"
  tags: ["zodiaco", "estaciones"]

variables:
  datos: [["verano", "Escorpio"], ["invierno", "Géminis"], ["otoño", "Libra"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "Escorpio"
  - "Géminis"
  - "Libra"

enunciado: "Si estamos en la estación de {datos[idx][0]}, la constelación del zodiaco que es más visible hacia el mediodía es ___."

explicacion: |
  La posición del Sol en el zodiaco determina qué constelaciones son visibles durante el día y cuáles durante la noche en una estación específica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["estrellas", "noche"]

variables:
  estrellas: [["Sirio", "Canis Mayor"], ["Betelgeuse", "Orión"], ["Arcturus", "Boote"]]
  idx: uno_de([0, 1, 2])

respuesta: estrellas[idx][1]
tipo: mc
opciones_explicitas: ["Canis Mayor", "Orión", "Boote"]

enunciado: "La estrella {estrellas[idx][0]} es la estrella principal de la constelación de ___."

explicacion: |
  {estrellas[idx][0]} es una de las estrellas más brillantes y es el componente central de la constelación de {estrellas[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "avanzado"
  tags: ["secuencia", "ecliptic"]

variables:
  grupos: [["Aries", "Tauro", "Géminis"], ["Cáncer", "Leo", "Virgo"], ["Libra", "Escorpio", "Sagitario"]]
  grupo_seleccionado: uno_de(grupos)

respuesta_orden: grupo_seleccionado
tipo: ordenar
opciones_explicitas: grupo_seleccionado

enunciado: "Ordene las siguientes constelaciones según su orden de aparición en el zodíaco (eclíptica) para el grupo seleccionado:"

explicacion: |
  El orden de las constelaciones zodiacales sigue la trayectoria aparente del Sol a través del cielo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "intermedio"
  tags: ["sol", "ecliptic"]

variables:
  par: [["Géminis", "Sagitario"], ["Sagitario", "Géminis"], ["Virgo", "Piscis"]]
  idx: uno_de([0, 1, 2])

respuesta: par[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "Si el Sol se encuentra en la constelación de {par[idx][0]}, la constelación opuesta en el cielo nocturno será ___."

explicacion: |
  Cuando el Sol está en una constelación, esa constelación es invisible de noche. La constelación opuesta es la que se observa en su punto más alto durante la medianoche.
```

## Sección: eclipses-sol-luna (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["astronomia", "eclipse_solar"]

tipo: mc
opciones_explicitas: ["La Luna se interpone entre la Tierra y el Sol", "La Tierra se interpone entre el Sol y la Luna", "El Sol se interpone entre la Tierra y la Luna"]
respuesta: "La Luna se interpone entre la Tierra y el Sol"

enunciado: "Un eclipse solar ocurre cuando ___."

explicacion: |
  Para que ocurra un eclipse solar, la Luna debe estar posicionada exactamente entre la Tierra y el Sol, proyectando su sombra sobre nuestra superficie.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["fases_lunares", "eclipse_solar"]

enunciado: "Para que sea posible observar un eclipse solar, la Luna debe encontrarse en fase de ___."

pasos:
  - "Identificar la fase lunar necesaria para que la Luna esté entre la Tierra y el Sol."

opciones_explicitas: ["Luna Llena", "Luna Nueva"]
respuesta: "Luna Nueva"
tipo: mc

explicacion: |
  Solo cuando la Luna está en fase de Luna Nueva puede alinearse entre la Tierra y el Sol para producir un eclipse solar.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["eclipse_lunar", "fases_lunares"]

tipo: completar
enunciado: "Un eclipse lunar ocurre únicamente durante la fase de ___."
respuesta: "Luna Llena"
explicacion: |
  Un eclipse lunar requiere que la Tierra esté entre el Sol y la Luna, lo cual solo sucede cuando la Luna está en su fase de Luna Llena.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["secuencia", "eclipse_lunar"]

tipo: ordenar
opciones_explicitas: ["Sol", "Tierra", "Luna"]
respuesta_orden: ["Sol", "Tierra", "Luna"]

enunciado: "Ordena los cuerpos celestes desde el que emite la luz hasta el que recibe la sombra durante un eclipse lunar:"

explicacion: |
  En un eclipse lunar, la secuencia es: la luz del Sol viaja hacia la Tierra, la Tierra bloquea la luz y proyecta su sombra sobre la Luna.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["conceptos", "eclipse"]

variables:
  escenario: uno_de([0, 1])
  datos: [["Sol - Tierra - Luna", "lunar"], ["Sol - Luna - Tierra", "solar"]]

enunciado: "Si la posición de los astros es {datos[escenario][0]}, entonces el eclipse es de tipo ___."

opciones_explicitas: ["solar", "lunar"]
respuestas_validas:
  - "lunar"
  - "solar"
respuesta: datos[escenario][1]
tipo: completar

explicacion: |
  La clave para identificar el eclipse es observar qué cuerpo está en el medio: si es la Luna, el eclipse es solar; si es la Tierra, es lunar.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["astronomia", "geometria_celestial"]

respuesta: 5
tipo: completar
tolerancia_abs: 0.1

enunciado: "Aunque la Luna orbita la Tierra cada mes, no siempre se produce un eclipse porque su órbita está inclinada aproximadamente ___ grados respecto a la eclíptica (el plano de la órbita terrestre)."

explicacion: |
  La órbita de la Luna tiene una inclinación de unos 5° respecto al plano de la Tierra alrededor del Sol. Esta inclinación hace que, la mayoría de las veces, la Luna pase por encima o por debajo del Sol desde nuestra perspectiva.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["astronomia", "alineacion"]

opciones_explicitas: ["Eclíptica", "Eje terrestre", "Órbita solar", "Cinturón de asteroides"]

respuesta: "Eclíptica"
tipo: mc

enunciado: "Para que ocurra un eclipse, la Luna debe estar alineada con el Sol y la Tierra en el plano de la ___."

explicacion: |
  Un eclipse solo ocurre cuando la Luna, la Tierra y el Sol se encuentran en un punto llamado 'nodos lunares', donde la órbita lunar cruza el plano de la eclíptica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["fases_lunares", "eclipses"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Luna Nueva", "Solar"], ["Luna Llena", "Lunar"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["Solar", "Lunar", "Ninguno"]

enunciado: "Si la Luna se encuentra en fase de {datos[escenario_idx][0]}, se requiere una alineación perfecta para producir un eclipse de tipo {datos[escenario_idx][1]}."

explicacion: |
  La fase de Luna Nueva es necesaria para los eclipses solares, mientras que la Luna Llena es necesaria para los eclipses lunares.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "avanzado"
  tags: ["geometria", "nodos"]

opciones_explicitas: ["Nodos lunares", "Equinoccios", "Solsticios", "Perigeos"]

respuesta: "Nodos lunares"
tipo: mc

enunciado: "La razón por la cual los eclipses no ocurren en cada fase de Luna Nueva o Luna Llena es que la Luna solo cruza el plano de la eclíptica en dos puntos específicos llamados ___."

explicacion: |
  Esos puntos de intersección se llaman nodos. Solo cuando la Luna está en uno de estos nodos durante la fase de luna nueva o llena, se produce el fenómeno.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["orden", "alineacion"]

opciones_explicitas: ["Luna Nueva -> Eclipse Solar", "Luna Llena -> Eclipse Lunar"]

respuesta_orden: ["Luna Nueva -> Eclipse Solar", "Luna Llena -> Eclipse Lunar"]
tipo: ordenar

enunciado: "Ordena las condiciones necesarias para los dos tipos principales de eclipses:"

pasos:
  - "Condición para eclipse solar"
  - "Condición para eclipse lunar"

explicacion: |
  Para un eclipse solar necesitamos Luna Nueva y alineación en el nodo. Para un eclipse lunar necesitamos Luna Llena y alineación en el nodo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["astronomia", "conceptos_basicos"]

respuesta: "umbra"
tipo: completar
respuestas_validas:
  - "umbra"

enunciado: "La parte más oscura y central de la sombra proyectada por la Luna sobre la Tierra se denomina ___."

explicacion: |
  La umbra es la zona de sombra total donde la luz del Sol queda completamente bloqueada. La penumbra es la zona exterior donde solo se bloquea una parte de la luz.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["eclipses", "solar"]

variables:
  escenario: uno_de([["la Luna cubre totalmente el Sol", "total"], ["la Luna cubre solo una parte del Sol", "parcial"], ["la Luna está entre la Tierra y el Sol pero es más pequeña y deja un anillo", "anular"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["total", "parcial", "anular"]

enunciado: "Si durante un eclipse solar la Luna no logra cubrir completamente el disco solar, dejando ver un borde luminoso alrededor, estamos ante un eclipse ___."

explicacion: |
  En un eclipse parcial, la Luna solo cubre una fracción del Sol. En el total, lo cubre todo; en el anular, el diámetro aparente de la Luna es menor que el del Sol.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["astronomia"]

respuesta: "penumbra"
tipo: mc
opciones_explicitas: ["umbra", "penumbra", "antumbra"]

enunciado: "Cuando un observador se encuentra en la región donde el Sol es parcialmente ocultado por la Luna, se encuentra en la zona de:"

explicacion: |
  La penumbra es la región de sombra parcial que rodea a la umbra.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["observacion"]

respuesta_orden: ["crescendo", "totalidad", "decrescendo"]
tipo: ordenar
opciones_explicitas: ["crescendo", "totalidad", "decrescendo"]

enunciado: "Ordena cronológicamente las fases de un eclipse solar total desde que comienza el oscurecimiento hasta que termina:"

explicacion: |
  Primero ocurre el aumento gradual de la sombra (crescendo), luego la fase de oscuridad máxima (totalidad) y finalmente el regreso de la luz (decrescendo).
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "avanzado"
  tags: ["calculo", "geometria"]

respuesta: 384400
tipo: completar
tolerancia_abs: 5000

enunciado: "¿Cuál es la distancia promedio entre la Tierra y la Luna, en kilómetros?"

explicacion: |
  La distancia promedio es de unos 384.400 km, aunque varía entre unos 363.300 km (perigeo) y 405.500 km (apogeo) debido a la órbita elíptica de la Luna.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["astronomia", "visibilidad"]

respuesta: "Luna"
tipo: "mc"
opciones_explicitas: ["Sol", "Luna", "Estrellas", "Planetas"]

enunciado: "Durante un eclipse lunar, el cuerpo celeste que se oscurece debido a la sombra de la Tierra es la ___."

explicacion: |
  En un eclipse lunar, la Tierra se interpone entre el Sol y la Luna, proyectando su sombra sobre el satélite. Como la Luna está visible para cualquier punto de la Tierra que esté en la zona de noche, el fenómeno es observable desde toda la mitad nocturna del planeta.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["geometria", "sombra"]

variables:
  caso: uno_de([0, 1])

respuesta: "umbra"
tipo: "completar"
respuestas_validas:
  - "umbra"
  - "penumbra"

enunciado: "En un eclipse solar, la parte de la sombra donde la totalidad del Sol es bloqueada por la Luna se denomina ___."

explicacion: |
  La sombra de la Luna tiene dos partes: la umbra (sombra total) y la penumbra (sombra parcial). La umbra es un cono muy estrecho que toca la superficie terrestre solo en una franja muy pequeña, razón por la cual los eclipses totales de Sol son raros de ver en un lugar específico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["comparacion", "visibilidad"]

respuesta: "mayor"
tipo: "mc"
opciones_explicitas: ["menor", "mayor", "igual", "nula"]

enunciado: "Comparado con la franja angosta de un eclipse solar, el área de visibilidad de un eclipse lunar es ___."

explicacion: |
  Un eclipse lunar es visible para cualquier persona que esté en la parte de la Tierra donde la Luna está en el cielo (la mitad nocturna). Un eclipse solar requiere que la pequeña sombra de la Luna pase exactamente por tu ubicación.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["alineacion", "orden"]

tipo: "ordenar"
opciones_explicitas: ["Sol", "Tierra", "Luna"]
respuesta_orden: ["Sol", "Tierra", "Luna"]

enunciado: "Para que ocurra un eclipse lunar, los astros deben alinearse en el siguiente orden desde el Sol hacia la Luna:"

explicacion: |
  En el eclipse lunar, el orden es Sol - Tierra - Luna. La Tierra queda en el medio, proyectando su sombra sobre la Luna.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "avanzado"
  tags: ["probabilidad", "observacion"]

variables:
  escenario: uno_de([0, 1])

respuesta: "frecuente"
tipo: "mc"
opciones_explicitas: ["frecuente", "infrecuente"]

enunciado: "Debido a que la sombra de la Luna es muy pequeña y se desplaza rápidamente por la Tierra, ver un eclipse solar total en un mismo punto es un evento ___."

explicacion: |
  Como la umbra lunar es un cono estrecho, la probabilidad de que esa línea exacta pase por tu ciudad es muy baja, haciendo que los eclipses solares totales sean eventos muy poco frecuentes en una ubicación geográfica dada.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["astronomia", "posiciones"]

variables:
  idx: uno_de([0, 1])
  datos: [["Luna entre la Tierra y el Sol", "Solar"], ["Tierra entre la Luna y el Sol", "Lunar"]]

enunciado: "Si observamos que la posición de los cuerpos celestes es {datos[idx][0]}, estamos presenciando un eclipse de tipo ___."

respuestas_validas:
  - "Solar"
  - "Lunar"

respuesta: datos[idx][1]
tipo: completar

explicacion: |
  Un eclipse solar ocurre cuando la Luna se interpone entre la Tierra y el Sol, proyectando su sombra sobre nuestro planeta.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["astronomia"]

variables:
  escenario_datos: [["Sol-Luna-Tierra", "Solar"], ["Sol-Tierra-Luna", "Lunar"]]
  idx: uno_de([0, 1])

enunciado: "Dada la configuración {escenario_datos[idx][0]}, el tipo de eclipse es ___."

respuestas_validas:
  - "Solar"
  - "Lunar"

respuesta: escenario_datos[idx][1]
tipo: completar

explicacion: |
  La posición relativa determina qué cuerpo proyecta la sombra sobre el otro.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["astronomia"]

variables:
  idx: uno_de([0, 1])
  datos: [["La Tierra bloquea la luz solar hacia la Luna", "Lunar"], ["La Luna bloquea la luz solar hacia la Tierra", "Solar"]]

enunciado: "Si ocurre que {datos[idx][0]}, el eclipse es ___."

respuestas_validas:
  - "Lunar"
  - "Solar"

respuesta: datos[idx][1]
tipo: completar

explicacion: |
  El eclipse se nombra según el cuerpo que queda en la zona de sombra.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["astronomia"]

variables:
  datos: [["Sol - Luna - Tierra", "Solar"], ["Sol - Tierra - Luna", "Lunar"]]
  idx: uno_de([0, 1])

enunciado: "En la configuración {datos[idx][0]}, el eclipse es ___."

opciones_explicitas:
  - "Solar"
  - "Lunar"

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  En el primer caso la Luna está en el medio (Solar), en el segundo la Tierra (Lunar).
```

```
metadata:
  materia: "historia_profucha"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["astronomia"]

variables:
  idx: uno_de([0, 1])
  datos: [["La Luna entra en la umbra terrestre", "Lunar"], ["La Tierra entra en la umbra lunar", "Solar"]]

enunciado: "Si el evento es {datos[idx][0]}, el tipo de eclipse es ___."

respuestas_validas:
  - "Lunar"
  - "Solar"

respuesta: datos[idx][1]
tipo: completar

explicacion: |
  Cuando la Luna entra en la sombra de la Tierra, vemos un eclipse lunar.
```

