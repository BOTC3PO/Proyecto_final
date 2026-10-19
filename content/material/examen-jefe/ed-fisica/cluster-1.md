# Examen jefe — Atleta Teórico

> Logro #961. Dominaste medidas y superficies de los deportes, la fisiología del ejercicio, jugadores, posiciones y puntaje, la alfabetización corporal y el origen histórico de los deportes. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **125 preguntas totales** en 5/5 secciones.

---

## Sección: deportes-medidas-cancha-superficies (25 preguntas)

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

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_medidas_cancha_superficies"
  nivel: "intermedio"
  tags: ["resta", "area"]

variables:
  idx: uno_de([0, 1])
  datos: [[7140, 196, "6944"], [6400, 196, "6204"]]

respuesta: datos[idx][2]
tipo: completar
respuestas_validas:
  - "6944"
  - "6204"

enunciado: "Considerando una cancha de fútbol de {datos[idx][0]} m² y una de tenis de {datos[idx][1]} m², ¿cuál es la diferencia de superficie entre ambas, en m²?"

explicacion: |
  La diferencia se obtiene restando: {datos[idx][0]} - {datos[idx][1]} = {datos[idx][2]}.
```

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_medidas_cancha_superficies"
  nivel: "basico"
  tags: ["identificacion", "medidas"]

variables:
  idx: uno_de([0, 1])
  datos: [[196, "Tenis"], [420, "Básquet"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Tenis", "Básquet"]

enunciado: "Una cancha que tiene una superficie de {datos[idx][0]} m² corresponde al deporte de:"

explicacion: |
  Basado en los estándares de medidas, una superficie de {datos[idx][0]} m² corresponde a {datos[idx][1]}.
```

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

## Sección: fisiologia-del-ejercicio (25 preguntas)

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "basico"
  tags: ["cardiovascular", "frecuencia_cardiaca"]

respuesta: "aumento"
tipo: completar
respuestas_validas:
  - "aumento"

enunciado: "Durante la práctica de actividad física intensa, se produce un ___ de la frecuencia cardíaca para transportar más oxígeno a los músculos."

explicacion: |
  Al realizar ejercicio, los músculos demandan más oxígeno y nutrientes. Para satisfacer esta demanda, el corazón debe latir más rápido, lo que conocemos como aumento de la frecuencia cardíaca.
```

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "intermedio"
  tags: ["gasto_cardiaco", "volumen_sistolico"]

respuesta: "gasto cardíaco"
tipo: completar
respuestas_validas:
  - "gasto cardíaco"
  - "gasto cardiaco"

enunciado: "El producto de la frecuencia cardíaca por el volumen sistólico se denomina ___."

explicacion: |
  La fórmula del gasto cardíaco (Q) es: Q = Frecuencia Cardíaca × Volumen Sistólico. Durante el ejercicio, ambos valores aumentan para elevar el gasto total.
```

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "intermedio"
  tags: ["volumen_sistolico", "corazon"]

respuesta: "mayor"
tipo: completar
respuestas_validas:
  - "mayor"

enunciado: "Con el entrenamiento de resistencia, el corazón se vuelve más eficiente y logra un volumen sistólico ___ en cada latido."

explicacion: |
  El entrenamiento cardiovascular mejora la contractilidad del miocardio, permitiendo que el corazón expulse una mayor cantidad de sangre en cada contracción (mayor volumen sistólico).
```

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "basico"
  tags: ["oxigeno", "sangre"]

respuesta: "oxígeno"
tipo: completar
respuestas_validas:
  - "oxígeno"
  - "oxigeno"

enunciado: "El objetivo principal del aumento del flujo sanguíneo durante el ejercicio es optimizar la entrega de ___ a los tejidos musculares."

explicacion: |
  El sistema cardiovascular actúa como un sistema de transporte; al aumentar la velocidad de la sangre, se asegura que el oxígeno llegue rápidamente a las células que lo están consumiendo.
```

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "avanzado"
  tags: ["adaptacion", "corazon"]

respuesta: "frecuencia cardíaca"
tipo: completar
respuestas_validas:
  - "frecuencia cardíaca"
  - "frecuencia cardiaca"

enunciado: "En un ejercicio de tipo aeróbico, la principal respuesta inmediata para mantener la homeostasis es el incremento de la ___."

explicacion: |
  La respuesta inmediata más notable ante el inicio del movimiento es el aumento de la frecuencia cardíaca para compensar la demanda metabólica.
```

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "basico"
  tags: ["respiracion", "oxigeno", "co2"]

tipo: mc
opciones_explicitas: ["Aumentar la frecuencia respiratoria y la profundidad de la inspiración", "Disminuir la frecuencia respiratoria para ahorrar energía", "Mantener la respiración constante independientemente del esfuerzo", "Aumentar la captación de CO2 y disminuir la de O2"]

respuesta: "Aumentar la frecuencia respiratoria y la profundidad de la inspiración"

enunciado: "Cuando una persona comienza a realizar un ejercicio físico intenso, ¿cuál es la respuesta inmediata del sistema respiratorio para satisfacer las demandas metabólicas?"

explicacion: |
  Durante el ejercicio, los músculos demandan más energía, lo que requiere más oxígeno (O2) y genera más dióxido de carbono (CO2). Para compensar, el cerebro ordena aumentar tanto la frecuencia (respiraciones por minuto) como la profundidad (volumen de aire por respiración) de la ventilación.
```

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "intermedio"
  tags: ["co2", "gas_sangre", "homeostasis"]

tipo: vf
respuesta: verdadero

enunciado: "Uno de los objetivos principales de la hiperventilación durante el ejercicio es la eliminación rápida de CO2 para evitar la acidificación de la sangre."

explicacion: |
  El aumento de la intensidad del ejercicio produce un exceso de CO2 en la sangre. Al respirar más rápido y profundo, el cuerpo logra expulsar este exceso de CO2 a través de los pulmones, ayudando a mantener el equilibrio del pH sanguíneo.
```

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "basico"
  tags: ["alveolos", "intercambio_gaseoso"]

tipo: mc
opciones_explicitas: ["El O2 pasa de los alvéolos a la sangre y el CO2 pasa de la sangre a los alvéolos", "El O2 pasa de la sangre a los alvéolos y el CO2 pasa de los alvéolos a la sangre", "Tanto el O2 como el CO2 pasan de los alvéolos a la sangre", "El intercambio se detiene para priorizar el flujo sanguíneo"]

respuesta: "El O2 pasa de los alvéolos a la sangre y el CO2 pasa de la sangre a los alvéolos"

enunciado: "Durante el ejercicio, la captación de oxígeno se produce en los alvéolos pulmonares mediante un proceso de difusión. ¿Cómo ocurre este intercambio gaseoso?"

explicacion: |
  En los alvéolos, la presión parcial de oxígeno es mayor que en la sangre capilar, lo que permite que el O2 entre a la sangre. Simultáneamente, la presión de CO2 es mayor en la sangre que en el aire alveolar, permitiendo que el CO2 pase a los pulmones para ser expulsado.
```

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "intermedio"
  tags: ["estimulo", "quimiorreceptores", "sangre"]

tipo: vf
respuesta: verdadero

enunciado: "El principal estímulo químico que activa el aumento de la frecuencia respiratoria durante el ejercicio es el incremento de los niveles de CO2 en la sangre."

explicacion: |
  Aunque el cuerpo necesita oxígeno, el principal motor que le dice al centro respiratorio en el cerebro que debe respirar más rápido es la acumulación de dióxido de carbono (CO2) y la consecuente caída del pH sanguíneo.
```

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "basico"
  tags: ["ventilacion", "ejercicio"]

tipo: mc
opciones_explicitas: ["La ventilación pulmonar aumenta para facilitar el transporte de gases", "La ventilación pulmonar disminuye para evitar la pérdida de calor", "La ventilación pulmonar se mantiene igual pero la frecuencia cardíaca sube", "La ventilación pulmonar depende sólo de la temperatura ambiental"]

respuesta: "La ventilación pulmonar aumenta para facilitar el transporte de gases"

enunciado: "En el contexto de la fisiología del ejercicio, se define la 'ventilación pulmonar' como la suma de la frecuencia respiratoria por el volumen corriente. ¿Qué ocurre con esta variable durante una carrera de velocidad?"

explicacion: |
  Al aumentar la intensidad del ejercicio, tanto la frecuencia como el volumen de aire por respiración (volumen corriente) aumentan, lo que resulta en un incremento significativo de la ventilación pulmonar total para asegurar el suministro de O2 y la eliminación de CO2.
```

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "basico"
  tags: ["atp", "energia"]

enunciado: "La molécula que funciona como la principal moneda energética de la célula, proporcionando energía inmediata para la contracción muscular, es el ___."

respuestas_validas:
  - "ATP"
respuesta: "ATP"
tipo: completar

explicacion: |
  El ATP (Adenosín Trifosfato) es la molécula que almacena y transporta energía química dentro de las células para permitir el trabajo muscular.
```

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "intermedio"
  tags: ["sistemas_energeticos", "esfuerzo"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["100 metros llanos", "sistema de los fosfágenos"], ["maratón de 42km", "sistema oxidativo"]]

enunciado: "Para un esfuerzo de tipo {escenarios[escenario_idx][0]}, el cuerpo utiliza predominantemente el ___."

respuestas_validas:
  - "sistema de los fosfágenos"
  - "sistema oxidativo"
respuesta: escenarios[escenario_idx][1]
tipo: completar

explicacion: |
  Los esfuerzos explosivos y muy cortos (menos de 10-15 segundos) dependen de la ruptura inmediata del ATP y la fosfocreatina (sistema de los fosfágenos); los esfuerzos largos usan el sistema oxidativo (con oxígeno).
```

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "intermedio"
  tags: ["lactato", "glucolisis"]

enunciado: "Cuando realizamos un esfuerzo de alta intensidad que dura entre 30 y 90 segundos, se produce una acumulación de ___ en los músculos debido a la glucólisis anaeróbica."

respuestas_validas:
  - "lactato"
respuesta: "lactato"
tipo: completar

explicacion: |
  En esfuerzos intensos de duración media, la glucosa se descompone sin la presencia suficiente de oxígeno, generando lactato como subproducto.
```

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "basico"
  tags: ["oxigeno", "aerobico"]

enunciado: "El sistema que utiliza el oxígeno para quemar carbohidratos y grasas para producir energía en esfuerzos de larga duración se denomina sistema ___."

respuestas_validas:
  - "aeróbico"
  - "aerobico"
respuesta: "aeróbico"
tipo: completar

explicacion: |
  El sistema aeróbico es el más eficiente para producir energía a largo plazo, permitiendo mantener el ejercicio durante mucho tiempo si hay suministro de oxígeno.
```

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "avanzado"
  tags: ["sustratos", "metabolismo"]

variables:
  tipo_sustrato_idx: uno_de([0, 1])
  sustratos: [["carbohidratos", "glucosa"], ["grasas", "ácidos grasos"]]

enunciado: "En un ejercicio de resistencia prolongada, una de las fuentes principales de energía son las ___, que se transforman en {sustratos[tipo_sustrato_idx][1]} para su uso celular."

respuestas_validas:
  - "carbohidratos"
  - "grasas"
respuesta: sustratos[tipo_sustrato_idx][0]
tipo: completar

explicacion: |
  Las grasas son una fuente de energía casi ilimitada para ejercicios de muy larga duración, aunque su proceso de oxidación es más lento que el de los carbohidratos, que se usan más al inicio del esfuerzo.
```

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "basico"
  tags: ["corazon", "entrenamiento", "reposo"]

respuesta: "menor"
tipo: completar
respuestas_validas:
  - "menor"

enunciado: "Una persona que realiza entrenamiento cardiovascular de forma regular suele presentar una frecuencia cardíaca en reposo ___ que una persona sedentaria."

explicacion: |
  El entrenamiento regular fortalece el músculo cardíaco, permitiendo que el corazón bombee más sangre en cada latido (mayor volumen sistólico). Como resultado, necesita latir menos veces por minuto para mantener el cuerpo en reposo.
```

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "basico"
  tags: ["corazon", "eficiencia", "adaptacion"]

opciones_explicitas: ["El corazón late más lento y con más fuerza", "El corazón late más rápido para compensar", "El corazón cambia su forma de ser triangular", "No hay cambios en el músculo cardíaco"]
respuesta: "El corazón late más lento y con más fuerza"
tipo: mc

enunciado: "Al entrenar de manera constante, ¿qué adaptación principal experimenta el corazón para volverse más eficiente?"

explicacion: |
  La adaptación principal es el aumento del volumen sistólico: el corazón se vuelve más fuerte y eficiente, bombeando más sangre con menos esfuerzo, lo que reduce la frecuencia cardíaca.
```

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "basico"
  tags: ["tiempo", "progreso", "adaptacion"]

respuesta: "gradual"
tipo: completar
respuestas_validas:
  - "gradual"

enunciado: "Las adaptaciones fisiológicas del cuerpo al entrenamiento no son instantáneas; se producen de forma ___ a medida que el organismo se ajusta al estímulo."

explicacion: |
  El cuerpo necesita tiempo para realizar cambios estructurales y funcionales (como la angiogénesis o el aumento del volumen plasmático). Por eso, el progreso es un proceso gradual y no inmediato.
```

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "intermedio"
  tags: ["eficiencia", "rendimiento", "corazon"]

opciones_explicitas: ["Aumento de la frecuencia cardíaca en reposo", "Disminución de la capacidad de bombeo", "Mayor eficiencia en el transporte de oxígeno", "Aumento de la fatiga inmediata"]
respuesta: "Mayor eficiencia en el transporte de oxígeno"
tipo: mc

enunciado: "¿Cuál de las siguientes es una consecuencia directa de una mejora en la eficiencia cardíaca debido al entrenamiento regular?"

explicacion: |
  Un corazón más eficiente y una mejor red de capilares permiten que el oxígeno llegue de manera más efectiva a los músculos durante el esfuerzo.
```

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "basico"
  tags: ["frecuencia_cardiaca", "entrenamiento"]

respuesta: "baja"
tipo: completar
respuestas_validas:
  - "baja"

enunciado: "A medida que una persona mejora su condición física, su frecuencia cardíaca máxima durante un esfuerzo intenso tiende a mantenerse igual, pero su frecuencia cardíaca en reposo se vuelve más ___."

explicacion: |
  La frecuencia cardíaca de reposo disminuye (bradicardia deportiva) debido a que el corazón es más eficiente y el sistema nervioso parasimpático tiene mayor tono.
```

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "basico"
  tags: ["frecuencia_cardiaca", "reposo"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["atleta entrenado", 45], ["persona sedentaria", 75]]

enunciado: "Un {datos[escenario_idx][0]} presenta una frecuencia cardíaca en reposo de {datos[escenario_idx][1]} lpm. ¿Cuál es la principal ventaja fisiológica de una frecuencia de reposo baja?"

opciones_explicitas: ["Mayor gasto cardíaco con menos latidos", "Mayor necesidad de oxígeno en reposo", "Menor eficiencia del ventrículo izquierdo", "Mayor frecuencia respiratoria"]

respuesta: "Mayor gasto cardíaco con menos latidos"
tipo: mc

explicacion: |
  Un corazón más eficiente (frecuencia baja) bombea más sangre por cada latido, permitiendo que el organismo trabaje con menos esfuerzo en reposo.
```

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "intermedio"
  tags: ["sistemas_energeticos", "fuerza"]

enunciado: "Durante un levantamiento de pesas de máxima intensidad que dura apenas 3 segundos, el cuerpo utiliza principalmente el sistema ___."

respuestas_validas:
  - "ATP-PC"
respuesta: "ATP-PC"
tipo: completar

explicacion: |
  Para esfuerzos explosivos y de muy corta duración, el cuerpo utiliza los depósitos inmediatos de ATP y Fosfocreatina (ATP-PC).
```

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "basico"
  tags: ["frecuencia_cardiaca", "ejercicio"]

variables:
  tipo_ejercicio: uno_de([0, 1])
  escenario: [["maratón (resistencia)", "baja"], ["sprint (potencia)", "alta"]]

enunciado: "En una prueba de {escenario[tipo_ejercicio][0]}, la frecuencia cardíaca sostenida durante el esfuerzo tiende a un nivel relativamente ___ en comparación con un sprint máximo."

opciones_explicitas: ["baja", "alta", "moderada", "nula"]

respuesta: escenario[tipo_ejercicio][1]
tipo: mc

explicacion: |
  Los ejercicios de resistencia aeróbica mantienen una intensidad constante y sostenible, mientras que los esfuerzos explosivos disparan la frecuencia cardíaca hacia sus niveles máximos.
```

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "intermedio"
  tags: ["lactato", "fatiga", "metabolismo"]

enunciado: "Cuando realizamos un ejercicio de alta intensidad que excede el umbral de lactato, la acumulación de ___ en el músculo contribuye a la sensación de fatiga."

respuestas_validas:
  - "lactato"
respuesta: "lactato"
tipo: completar

explicacion: |
  La acumulación de lactato y la consecuente acidificación del medio muscular es un factor clave en la fatiga durante el ejercicio anaeróbico.
```

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "avanzado"
  tags: ["adaptaciones", "resistencia"]

enunciado: "El entrenamiento de larga duración (resistencia) produce un ___ de la capacidad de transporte de oxígeno debido a la angiogénesis."

opciones_explicitas: ["aumento", "disminución", "estabilización", "anulación"]

respuesta: "aumento"
tipo: mc

explicacion: |
  El entrenamiento aeróbico estimula la creación de nuevos capilares (angiogénesis), mejorando la entrega de oxígeno a los músculos.
```

## Sección: deportes-jugadores-posiciones-puntaje (25 preguntas)

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_jugadores_posiciones_puntaje"
  nivel: "basico"
  tags: ["futbol", "reglas"]

respuesta: "11"
tipo: completar
respuestas_validas:
  - "11"

enunciado: "En un partido oficial de fútbol 11, cada equipo debe tener exactamente ___ jugadores en cancha."

explicacion: |
  El fútbol 11 se juega con 11 jugadores por equipo (1 arquero y 10 jugadores de campo).
```

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_jugadores_posiciones_puntaje"
  nivel: "basico"
  tags: ["basquet", "reglas"]

respuesta: "5"
tipo: completar
respuestas_validas:
  - "5"

enunciado: "En un partido de básquetbol, el número de jugadores de un equipo en cancha es de ___."

explicacion: |
  En el básquetbol, cada equipo tiene 5 jugadores en cancha durante el juego.
```

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_jugadores_posiciones_puntaje"
  nivel: "basico"
  tags: ["voley", "reglas"]

respuesta: "6"
tipo: completar
respuestas_validas:
  - "6"

enunciado: "En el vóley de sala, un equipo está compuesto por ___ jugadores en cancha."

explicacion: |
  El equipo de vóley estándar cuenta con 6 jugadores en cancha.
```

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_jugadores_posiciones_puntaje"
  nivel: "basico"
  tags: ["handball", "reglas"]

respuesta: "7"
tipo: completar
respuestas_validas:
  - "7"

enunciado: "En el handball, la cantidad de jugadores por equipo en cancha es de ___."

explicacion: |
  En el handball, cada equipo tiene 7 jugadores en cancha (incluyendo al arquero).
```

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_jugadores_posiciones_puntaje"
  nivel: "intermedio"
  tags: ["posiciones", "futbol"]

respuesta: "Arquero"
tipo: completar
respuestas_validas:
  - "Arquero"
  - "arquero"

enunciado: "En el fútbol, el jugador encargado de evitar que el balón entre en la portería se denomina ___."

explicacion: |
  El jugador cuya posición principal es proteger el arco es el arquero o portero.
```

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_jugadores_posiciones_puntaje"
  nivel: "basico"
  tags: ["futbol", "reglas"]

tipo: mc
opciones_explicitas: ["0 puntos", "1 punto", "2 puntos", "3 puntos"]
respuesta: "1 punto"

enunciado: "En un partido de fútbol oficial, ¿cuántos puntos se le otorgan al equipo que logra que el balón cruce la línea de meta dentro del arco?"

explicacion: |
  En el fútbol, cada vez que el balón entra en el arco del equipo rival, se contabiliza como un gol, lo que suma 1 punto al marcador del equipo.
```

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_jugadores_posiciones_puntaje"
  nivel: "basico"
  tags: ["basquet", "reglas"]

tipo: mc
opciones_explicitas: ["1 punto", "2 puntos", "3 puntos", "4 puntos"]
respuesta: "3 puntos"

enunciado: "En el básquetbol, un jugador lanza un tiro desde fuera de la línea de tres puntos y logra encestar. ¿Cuántos puntos suma esa acción?"

explicacion: |
  Los tiros libres valen 1 punto, los tiros dentro de la zona de tres puntos valen 2 puntos, y los tiros por encima de la línea de tres puntos valen 3 puntos.
```

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_jugadores_posiciones_puntaje"
  nivel: "basico"
  tags: ["voley", "reglas"]

respuesta: "25"
tipo: completar
respuestas_validas:
  - "25"

enunciado: "En un set estándar de vóley, el equipo que alcanza primero los ___ puntos gana el set, siempre que tenga una ventaja de al menos dos puntos sobre el rival."

explicacion: |
  Un set de vóley se gana al llegar a 25 puntos con una diferencia mínima de 2 puntos respecto al oponente.
```

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_jugadores_posiciones_puntaje"
  nivel: "basico"
  tags: ["handball", "reglas"]

tipo: mc
opciones_explicitas: ["1 punto", "2 puntos", "3 puntos", "5 puntos"]
respuesta: "1 punto"

enunciado: "En el handball (balonmano), ¿cuántos puntos se asigna cada vez que un jugador lanza el balón y este entra en la portería contraria?"

explicacion: |
  Al igual que en el fútbol, en el handball cada gol anotado equivale a 1 punto para el equipo.
```

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_jugadores_posiciones_puntaje"
  nivel: "intermedio"
  tags: ["basquet", "reglas"]

tipo: mc
opciones_explicitas: ["1 punto", "2 puntos", "3 puntos", "4 puntos"]
respuesta: "2 puntos"

enunciado: "Si un jugador de básquet anota una canasta dentro de la zona de tiro regular (sin ser un tiro libre ni un tiro de tres puntos), ¿cuántos puntos suma su equipo?"

explicacion: |
  Las canastas realizadas dentro de la línea de tres puntos (incluyendo bandejas y lanzamientos de media distancia) valen 2 puntos.
```

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_jugadores_posiciones_puntaje"
  nivel: "basico"
  tags: ["voley", "reglas", "tecnica"]

tipo: completar

enunciado: "Para que el árbitro y los jugadores puedan identificar rápidamente al especialista en defensa, el líbero debe vestir una camiseta de color ___ a la de sus compañeros."

respuestas_validas:
  - "distinto"

respuesta: "distinto"

explicacion: |
  El líbero debe usar un color que contraste claramente con el resto del equipo para evitar confusiones durante el juego.
```

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_jugadores_posiciones_puntaje"
  nivel: "basico"
  tags: ["voley", "reglas"]

tipo: completar

enunciado: "Una de las principales restricciones reglamentarias es que el líbero no puede realizar la acción de ___."

respuestas_validas:
  - "sacar"

respuesta: "sacar"

explicacion: |
  El líbero es un jugador especializado en defensa y recepción, por lo que el reglamento le prohíbe realizar el saque.
```

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_jugadores_posiciones_puntaje"
  nivel: "intermedio"
  tags: ["voley", "reglas", "ataque"]

tipo: completar

enunciado: "Aunque es fundamental en la defensa, el líbero tiene prohibido completar un ___ que haga pasar la pelota por encima de la red por encima de la altura del borde superior de la red."

respuestas_validas:
  - "remate"

respuesta: "remate"

explicacion: |
  El líbero no puede realizar ataques que superen la altura de la red, ya que su función es puramente defensiva y de recuperación.
```

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_jugadores_posiciones_puntaje"
  nivel: "intermedio"
  tags: ["voley", "reglas"]

tipo: completar

enunciado: "El líbero tiene una ventaja táctica: sus entradas y salidas del campo se consideran ___ y no como una sustitución normal."

respuestas_validas:
  - "reemplazos"

respuesta: "reemplazos"

explicacion: |
  Esto permite que el especialista en defensa entre y salga constantemente para optimizar la recepción y la defensa de campo sin agotar los cambios permitidos.
```

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_jugadores_posiciones_puntaje"
  nivel: "basico"
  tags: ["voley", "táctica"]

tipo: completar

enunciado: "El objetivo principal del líbero en el campo es ___ el juego mediante la recepción y la defensa de ataques."

respuestas_validas:
  - "reforzar"

respuesta: "reforzar"

explicacion: |
  El líbero es la pieza clave para mantener la continuidad del juego, especializándose en la recuperación de balones difíciles.
```

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_jugadores_posiciones_puntaje"
  nivel: "basico"
  tags: ["futbol", "roles", "defensa"]

tipo: mc
opciones_explicitas: ["Evitar que el balón entre en la portería", "Realizar centros al área", "Organizar la salida desde el medio campo"]
respuesta: "Evitar que el balón entre en la portería"

enunciado: "En el fútbol, ¿cuál es la función principal y distintiva del portero o arquero?"

explicacion: |
  El portero es el último defensor y su rol estratégico es evitar que el balón cruce la línea de meta, siendo el único jugador que puede usar las manos dentro de su área.
```

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_jugadores_posiciones_puntaje"
  nivel: "basico"
  tags: ["estrategia", "defensa"]

tipo: completar
respuesta: "proteger la zona de su propio arco"
respuestas_validas:
  - "proteger la zona de su propio arco"

enunciado: "El objetivo estratégico principal de los defensores es ___."

explicacion: |
  Los defensores se posicionan para interceptar ataques y proteger la zona de su propio arco, dificultando el avance del equipo rival.
```

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_jugadores_posiciones_puntaje"
  nivel: "intermedio"
  tags: ["transicion", "estrategia"]

tipo: mc
opciones_explicitas: ["Conectar la defensa con el ataque", "Sólo defender el área propia", "Esperar el rebote cerca del arco rival"]
respuesta: "Conectar la defensa con el ataque"

enunciado: "En un sistema táctico, ¿qué función cumple principalmente el mediocampista?"

explicacion: |
  El mediocampista actúa como el motor del equipo, encargándose de la transición entre la recuperación del balón en defensa y la creación de jugadas de ataque.
```

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_jugadores_posiciones_puntaje"
  nivel: "basico"
  tags: ["ataque", "goles"]

tipo: completar
respuesta: "finalizar las jugadas de ataque para anotar goles"
respuestas_validas:
  - "finalizar las jugadas de ataque para anotar goles"

enunciado: "La función estratégica de los delanteros es ___."

explicacion: |
  Los delanteros se posicionan cerca del área contraria con el objetivo de finalizar las jugadas iniciadas por sus compañeros y convertir goles.
```

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_jugadores_posiciones_puntaje"
  nivel: "avanzado"
  tags: ["táctica", "espacio"]

tipo: mc
opciones_explicitas: ["Para cubrir todas las zonas de la cancha", "Para que todos corran hacia el mismo lugar", "Para evitar que el árbitro controle el juego"]
respuesta: "Para cubrir todas las zonas de la cancha"

enunciado: "¿Por qué es fundamental la división de posiciones en un deporte de equipo?"

explicacion: |
  La especialización de roles permite una organización del espacio eficiente, asegurando que el equipo cubra todas las zonas de la cancha y no deje espacios vulnerables.
```

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_jugadores_posiciones_puntaje"
  nivel: "basico"
  tags: ["basquet", "posiciones"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Un jugador que organiza el juego y distribuye el balón", "Base"], ["Un jugador alto que juega cerca del aro", "Pívot"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["Base", "Pívot", "Escolta", "Ala-pívot"]

enunciado: "En el básquetbol, {escenarios[escenario_idx][0]}. ¿Qué posición ocupa?"

explicacion: |
  El jugador que organiza el ataque y distribuye el balón es el Base (armador); el jugador alto cerca del aro es el Pívot.
```

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_jugadores_posiciones_puntaje"
  nivel: "basico"
  tags: ["basquet", "puntaje"]

respuesta: "3"
tipo: completar
respuestas_validas:
  - "3"

enunciado: "Si un jugador de básquetbol encesta un tiro desde fuera de la línea de tres puntos, el equipo suma ___ puntos."

explicacion: |
  Los tiros por debajo de la línea de tres puntos valen 2 puntos, mientras que los tiros por encima de la línea valen 3 puntos.
```

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_jugadores_posiciones_puntaje"
  nivel: "basico"
  tags: ["voley", "jugadores"]

respuesta: "6"
tipo: mc
opciones_explicitas: ["5", "6", "7", "11"]

enunciado: "En un partido oficial de vóley de sala, ¿cuántos jugadores tiene cada equipo en la cancha?"

explicacion: |
  En el vóley de sala, cada equipo está compuesto por 6 jugadores en juego.
```

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_jugadores_posiciones_puntaje"
  nivel: "basico"
  tags: ["futbol", "puntaje"]

respuesta: "1"
tipo: completar
respuestas_validas:
  - "1"

enunciado: "En un partido de fútbol, cada vez que el balón cruza la línea de meta entre los postes y por debajo del travesaño, se marca ___ gol."

explicacion: |
  En el fútbol, cada vez que el balón entra en la portería contraria, se suma una unidad al marcador.
```

```
metadata:
  materia: "ed_fisica"
  tema: "deportes_jugadores_posiciones_puntaje"
  nivel: "intermedio"
  tags: ["futbol_americano", "puntaje"]

variables:
  tipo_jugada: uno_de([0, 1])
  jugadas: [["un Touchdown", "6"], ["un Field Goal", "3"]]

respuesta: jugadas[tipo_jugada][1]
tipo: mc
opciones_explicitas: ["6", "3", "2", "1"]

enunciado: "En el fútbol americano, ¿cuántos puntos vale {jugadas[tipo_jugada][0]}?"

explicacion: |
  El Touchdown es la jugada principal y vale 6 puntos, mientras que el Field Goal (gol de campo) vale 3 puntos.
```

## Sección: alfabetizacion-corporal (25 preguntas)

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "basico"
  tags: ["musculos", "brazos"]

respuesta: "tríceps"
tipo: completar
respuestas_validas:
  - "tríceps"
  - "triceps"

enunciado: "Cuando realizamos un movimiento de flexión de codo (acercar la mano al hombro), el músculo principal que se contrae es el bíceps. Por el contrario, la acción de extensión del codo es realizada por el ___."

explicacion: |
  El bíceps es el flexor del brazo, mientras que el tríceps es el extensor, permitiendo estirar el brazo.
```

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "basico"
  tags: ["musculos", "piernas"]

respuesta: "cuádriceps"
tipo: completar
respuestas_validas:
  - "cuádriceps"
  - "cuadriceps"

enunciado: "El músculo situado en la parte anterior (delantera) del muslo es el ___."

explicacion: |
  El cuádriceps es el encargado de la extensión de la rodilla y la flexión de la cadera.
```

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "basico"
  tags: ["musculos", "tronco"]

respuesta: "abdominales"
tipo: completar
respuestas_validas:
  - "abdominales"

enunciado: "Los músculos que se encuentran en la parte anterior del tronco y cuya función principal es la flexión de la columna vertebral y la estabilización del núcleo son los ___."

explicacion: |
  Los abdominales son fundamentales para la postura y la protección de los órganos internos.
```

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "intermedio"
  tags: ["musculos", "piernas"]

variables:
  idx: uno_de([0, 1])
  tabla: [["isquiotibiales", "flexión de rodilla"], ["glúteos", "extensión de cadera"]]

respuesta: tabla[idx][1]
tipo: completar
respuestas_validas:
  - "flexión de rodilla"
  - "extensión de cadera"

enunciado: "El músculo {tabla[idx][0]}, en la parte posterior de la pierna, tiene como acción principal la ___."

explicacion: |
  Los isquiotibiales permiten flexionar la rodilla, mientras que los glúteos permiten la extensión de la cadera.
```

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "intermedio"
  tags: ["musculos", "espalda"]

respuesta: "dorsales"
tipo: completar
respuestas_validas:
  - "dorsales"

enunciado: "El músculo de la espalda que permite realizar la extensión del brazo hacia atrás y la aducción del hombro es el músculo ___."

explicacion: |
  Los dorsales (latissimus dorsi) son músculos grandes que permiten movimientos de tracción y extensión del brazo.
```

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "basico"
  tags: ["sistemas_energeticos", "fosfagenos"]

tipo: mc
opciones_explicitas: ["Sistema Oxidativo", "Sistema Glucolítico", "Sistema de los Fosfágenos (ATP-PC)"]
respuesta: "Sistema de los Fosfágenos (ATP-PC)"

enunciado: "Un atleta realiza un sprint de 50 metros en máxima intensidad durante 6 segundos. ¿Qué sistema energético es el predominante en este esfuerzo corto y explosivo?"

explicacion: |
  Para esfuerzos de muy alta intensidad y duración muy breve (menos de 10 segundos), el cuerpo utiliza el sistema de los fosfágenos (ATP-PC), que proporciona energía inmediata pero de reserva limitada.
```

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "intermedio"
  tags: ["glucolisis", "acido_lactico"]

tipo: vf
respuesta: verdadero

enunciado: "Durante un esfuerzo de intensidad media-alta que dura entre 30 y 90 segundos (como una carrera de 400 metros), la acumulación de subproductos metabólicos como el lactato está asociada a la sensación de fatiga muscular."

explicacion: |
  El sistema glucolítico anaeróbico descompone la glucosa rápidamente sin presencia de oxígeno, produciendo lactato como subproducto, lo cual se relaciona con la acidosis muscular en esfuerzos de duración media.
```

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "basico"
  tags: ["aerobico", "resistencia"]

tipo: mc
opciones_explicitas: ["Sistema de los Fosfágenos", "Sistema Glucolítico", "Sistema Oxidativo (Aeróbico)"]
respuesta: "Sistema Oxidativo (Aeróbico)"

enunciado: "En una maratón de larga distancia, donde la intensidad es moderada y la duración es prolongada, el cuerpo utiliza principalmente el ___ para obtener energía a partir de carbohidratos y grasas."

explicacion: |
  El sistema oxidativo o aeróbico es el más eficiente para esfuerzos de larga duración, ya que utiliza oxígeno para metabolizar sustratos de manera continua.
```

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "intermedio"
  tags: ["sistemas_energeticos"]

tipo: vf
respuesta: falso

enunciado: "El sistema de los fosfágenos es el sistema principal para mantener el ritmo de una sesión de trote suave de 45 minutos."

explicacion: |
  Falso. El sistema de los fosfágenos es para esfuerzos explosivos de pocos segundos. Para un trote de 45 minutos, el sistema predominante es el oxidativo (aeróbico).
```

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "avanzado"
  tags: ["sistemas_energeticos", "metabolismo"]

tipo: mc
opciones_explicitas: ["Anaeróbico Aláctico", "Anaeróbico Láctico", "Aeróbico"]
respuesta: "Anaeróbico Láctico"

enunciado: "Si un estudiante realiza una serie de abdominales intensas durante 40 segundos sintiendo una quemazón en el abdomen, ¿qué vía metabólica está predominando?"

explicacion: |
  Al ser un esfuerzo de intensidad alta con duración media (40 segundos), el cuerpo recurre a la glucólisis anaeróbica (sistema láctico) para obtener energía rápida sin oxígeno.
```

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "basico"
  tags: ["mitos", "entrenamiento", "composicion_corporal"]

respuesta: "músculo"
tipo: completar
respuestas_validas:
  - "músculo"
  - "musculo"

enunciado: "Es un error fisiológico pensar que el cuerpo puede transformar la grasa directamente en ___."

explicacion: |
  La grasa y el músculo son tejidos distintos. La grasa se oxida para obtener energía, mientras que el músculo se construye mediante la síntesis de proteínas. No hay transformación de uno en otro.
```

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "intermedio"
  tags: ["mitos", "entrenamiento", "reduccion_localizada"]

respuesta: falso
tipo: vf

enunciado: "Es posible reducir la grasa de una zona específica del cuerpo (por ejemplo, sólo la cintura) haciendo ejercicios repetitivos de esa zona."

explicacion: |
  Falso. La pérdida de grasa es un proceso sistémico. El cuerpo decide de dónde oxidar grasa según la genética y el déficit calórico, no según el músculo que se esté trabajando.
```

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "intermedio"
  tags: ["mitos", "entrenamiento", "dolor"]

respuesta: falso
tipo: vf

enunciado: "La frase 'sin dolor no hay progreso' es una verdad científica absoluta en el entrenamiento de fuerza."

explicacion: |
  Si bien el estímulo debe ser desafiante, el dolor agudo o punzante suele ser señal de lesión. El progreso se mide por la adaptación y mejora del rendimiento, no por la presencia de dolor muscular extremo.
```

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "basico"
  tags: ["mitos", "entrenamiento", "nutricion"]

respuesta: "déficit calórico"
tipo: completar
respuestas_validas:
  - "déficit calórico"
  - "deficit calorico"

enunciado: "Para perder grasa corporal, es necesario generar un ___."

explicacion: |
  La reducción de grasa corporal depende principalmente de un balance energético negativo, donde se consume menos energía de la que se gasta.
```

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "avanzado"
  tags: ["mitos", "entrenamiento", "composicion_corporal"]

respuesta: "recomposición"
tipo: completar
respuestas_validas:
  - "recomposición"
  - "recomposicion"

enunciado: "El proceso de perder grasa y ganar masa muscular simultáneamente se conoce como ___ corporal."

explicacion: |
  Aunque es difícil y requiere un control preciso de la nutrición y el entrenamiento, la recomposición corporal es el objetivo de optimizar la calidad de la composición corporal.
```

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "basico"
  tags: ["estiramiento", "mitos", "rendimiento"]

tipo: mc
opciones_explicitas: ["Mejora la potencia explosiva", "Puede reducir el rendimiento muscular", "No tiene ningún efecto", "Aumenta la coordinación"]
respuesta: "Puede reducir el rendimiento muscular"

enunciado: "Realizar estiramientos estáticos prolongados justo antes de una actividad de máxima potencia o velocidad puede causar que el músculo pierda capacidad de respuesta. ¿Cuál es el efecto principal de este mito en el rendimiento?"

explicacion: |
  El estiramiento estático prolongado antes del ejercicio puede reducir la capacidad de generación de fuerza explosiva. Para la preparación, es preferible el movimiento dinámico.
```

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "intermedio"
  tags: ["entrada_en_calor", "dinamismo"]

tipo: vf
respuesta: verdadero

enunciado: "Para optimizar la respuesta neuromuscular y preparar las articulaciones, una entrada en calor dinámica (con movimiento) es más efectiva que una serie de estiramientos estáticos sin movimiento."

explicacion: |
  Verdadero. La activación dinámica eleva la temperatura corporal y prepara al sistema nervioso y muscular para el esfuerzo específico que se va a realizar.
```

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "basico"
  tags: ["prevencion", "lesiones"]

tipo: mc
opciones_explicitas: ["Para ganar fuerza más rápido", "Para evitar lesiones y rutinas ineficientes", "Para descansar más tiempo", "Para no sudar tanto"]
respuesta: "Para evitar lesiones y rutinas ineficientes"

enunciado: "¿Cuál es el objetivo principal de desmentir mitos sobre el entrenamiento en la alfabetización corporal?"

explicacion: |
  Desmentir mitos permite que el estudiante construya una base de conocimiento científica, evitando prácticas que no sólo son ineficientes, sino que pueden aumentar el riesgo de lesiones.
```

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "intermedio"
  tags: ["fisiologia", "mitos"]

tipo: vf
respuesta: falso

enunciado: "El mito dice que estirar estáticamente antes de entrenar es la mejor forma de prevenir lesiones en cualquier tipo de deporte de alta intensidad."

explicacion: |
  Falso. Si bien el estiramiento es importante, hacerlo de forma estática y prolongada antes de un esfuerzo explosivo puede ser contraproducente. La prevención depende de una activación progresiva (calentamiento dinámico).
```

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "avanzado"
  tags: ["eficiencia", "entrenamiento"]

tipo: mc
opciones_explicitas: ["La flexibilidad es la única clave del rendimiento", "El entrenamiento basado en mitos puede llevar a rutinas ineficientes", "El estiramiento estático siempre es obligatorio", "No importa cómo se entrene"]
respuesta: "El entrenamiento basado en mitos puede llevar a rutinas ineficientes"

enunciado: "Si un atleta sigue rutinas basadas en mitos (como estiramiento estático antes de un sprint), ¿qué consecuencia principal enfrenta en su proceso de entrenamiento?"

explicacion: |
  Seguir mitos lleva a una pérdida de tiempo y energía en métodos que no optimizan el rendimiento, lo que se traduce en una planificación ineficiente.
```

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "basico"
  tags: ["sistemas_energeticos", "esfuerzo_maximo"]

variables:
  idx: uno_de([0, 1])
  escenario: [["un sprint de 100 metros planos", "sistema de los fosfágenos"], ["un levantamiento de peso máximo", "sistema de los fosfágenos"]]

enunciado: "Durante {escenario[idx][0]}, el cuerpo utiliza principalmente el ___."

opciones_explicitas: ["sistema de los fosfágenos", "sistema oxidativo", "sistema glucolítico"]
respuesta: escenario[idx][1]
tipo: mc

explicacion: |
  En esfuerzos de máxima intensidad y muy corta duración (como un sprint o un levantamiento de peso), el cuerpo depende de la vía anaeróbica aláctica (fosfágenos) para obtener energía inmediata.
```

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "basico"
  tags: ["musculos", "tren_inferior"]

variables:
  idx: uno_de([0, 1])
  ejercicio: [["sentadilla", "cuádriceps"], ["estocada", "cuádriceps"]]

enunciado: "Al realizar un ejercicio de {ejercicio[idx][0]}, el grupo muscular que actúa predominantemente es el ___."

respuestas_validas:
  - "cuádriceps"
  - "cuadriceps"
respuesta: ejercicio[idx][1]
tipo: completar

explicacion: |
  La sentadilla y la estocada son movimientos multiarticulares donde el cuádriceps es el motor principal para la extensión de rodilla.
```

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "intermedio"
  tags: ["sistemas_energeticos", "aerobico"]

variables:
  idx: uno_de([0, 1])
  escenario: [["un maratón de 42 km", "sistema oxidativo"], ["una caminata de 2 horas", "sistema oxidativo"]]

enunciado: "En el caso de {escenario[idx][0]}, la vía predominante para la obtención de ATP es el ___."

opciones_explicitas: ["sistema oxidativo", "sistema de los fosfágenos", "sistema glucolítico"]
respuesta: escenario[idx][1]
tipo: mc

explicacion: |
  Las actividades de larga duración y baja-moderada intensidad dependen del metabolismo aeróbico o sistema oxidativo, que utiliza oxígeno para quemar carbohidratos y grasas.
```

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "intermedio"
  tags: ["sistemas_energeticos", "anaerobico_lactico"]

variables:
  idx: uno_de([0, 1])
  prueba: [["una carrera de 400 metros", "sistema glucolítico"], ["una serie de 15 repeticiones de 200m", "sistema glucolítico"]]

enunciado: "En {prueba[idx][0]}, el sistema energético predominante es el ___."

opciones_explicitas: ["sistema glucolítico", "sistema de los fosfágenos", "sistema oxidativo"]
respuesta: prueba[idx][1]
tipo: mc

explicacion: |
  Estos esfuerzos requieren intensidad alta con duración media, lo que activa la glucólisis anaeróbica (sistema glucolítico), produciendo lactato.
```

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "basico"
  tags: ["musculos", "tren_superior"]

variables:
  idx: uno_de([0, 1])
  movimiento: [["flexiones de brazos", "tríceps"], ["press de banca", "tríceps"]]

enunciado: "Al ejecutar {movimiento[idx][0]}, el músculo que realiza la extensión del codo es el ___."

respuestas_validas:
  - "tríceps"
  - "triceps"
respuesta: movimiento[idx][1]
tipo: completar

explicacion: |
  El tríceps braquial es el músculo encargado de la extensión del antebrazo respecto al brazo, acción principal en las flexiones y el press de banca.
```

## Sección: deportes-origen-historico (25 preguntas)

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

