# Examen jefe — Cosmos, Crisis y Memorias

> Logro #107. Dominaste la escala del universo, las rupturas políticas y la era digital. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **126 preguntas totales** en 5/5 secciones.

---

## Sección: galaxias-tipos-escala (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "basico"
  tags: ["definicion", "astronomia"]

tipo: mc
opciones_explicitas: ["Un conjunto de planetas que orbitan una estrella", "Un sistema masivo de estrellas, gas, polvo y materia oscura unidos por la gravedad", "Un cúmulo de agujeros negros en el centro del universo", "Una nube de gas que colapsa para formar una estrella"]

enunciado: "En términos astronómicos, ¿qué constituye fundamentalmente una galaxia?"

explicacion: |
  Una galaxia es un sistema masivo que contiene estrellas, gas, polvo y una gran cantidad de materia oscura, todo mantenido unido por la fuerza de la gravedad.
```

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "basico"
  tags: ["via_lactea", "ubicacion"]

tipo: completar
respuestas_validas: ["Vía Láctea", "Andrómeda", "Sagitario"]

enunciado: "El nombre de nuestra galaxia, el sistema donde se encuentra el Sistema Solar, es la ___."

explicacion: |
  Nosotros habitamos la Vía Láctea, una galaxia de tipo espiral.
```

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "intermedio"
  tags: ["componentes", "gravedad"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["estrellas", "gas", "polvo", "materia oscura"],
    ["estrellas", "planetas", "luna", "satélites"]
  ]

tipo: mc
opciones_explicitas: ["Solo estrellas y planetas", "Estrellas, gas, polvo y materia oscura", "Solo materia oscura y agujeros negros", "Solo gas y polvo estelar"]

enunciado: "Considerando los componentes de una galaxia según el escenario {datos[escenario_idx][0]}, {datos[escenario_idx][1]} y {datos[escenario_idx][2]}, ¿cuál es el cuarto elemento esencial que aporta la mayor parte de la masa?"

explicacion: |
  La materia oscura es un componente fundamental que no emite luz pero ejerce la gravedad necesaria para mantener la estructura galáctica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "avanzado"
  tags: ["orden", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Planeta", "Sistema Solar", "Galaxia", "Universo"]

enunciado: "Ordena los siguientes objetos astronómicos de menor a mayor escala jerárquica:"

explicacion: |
  La jerarquía correcta va desde el cuerpo celeste individual (planeta), pasando por su sistema de órbitas, el conjunto de sistemas (galaxia), hasta la totalidad del cosmos (universo).
```

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "basico"
  tags: ["gravedad", "fuerzas"]

tipo: completar
tolerancia_abs: 0

enunciado: "La fuerza fundamental que mantiene unidos a los componentes de una galaxia (estrellas, gas, polvo) es la ___."

pasos:
  - "Identificar la fuerza que actúa a escala macroscópica en el espacio."

explicacion: |
  La gravedad es la fuerza de atracción que permite que la materia se agrupe en estructuras masivas como las galaxias.
```

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "basico"
  tags: ["astronomia", "galaxias"]

respuesta: "espiral"
tipo: mc
opciones_explicitas: ["elíptica", "espiral", "irregular"]

enunciado: "Las galaxias que presentan una estructura de disco con brazos que se curvan desde un núcleo central se denominan galaxias ___."

explicacion: |
  Las galaxias espirales, como la Vía Láctea, se caracterizan por tener un núcleo brillante y brazos espirales donde se forman nuevas estrellas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "basico"
  tags: ["astronomia", "galaxias"]

respuesta: "elíptica"
tipo: mc
opciones_explicitas: ["espiral", "elíptica", "irregular"]

enunciado: "Las galaxias que tienen una forma ovalada o esférica y carecen de una estructura de brazos definida se conocen como galaxias ___."

explicacion: |
  Las galaxias elípticas suelen contener poblaciones de estrellas viejas y tienen poco gas o polvo para formar nuevas estrellas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "basico"
  tags: ["astronomia", "galaxias"]

respuesta: "irregular"
tipo: mc
opciones_explicitas: ["espiral", "elíptica", "irregular"]

enunciado: "Aquellas galaxias que no poseen una forma geométrica definida ni un núcleo central claro se clasifican como galaxias ___."

explicacion: |
  Las galaxias irregulares suelen ser el resultado de interacciones gravitatorias entre otras galaxias o son galaxias pequeñas en formación.
```

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "intermedio"
  tags: ["astronomia", "galaxias"]

variables:
  idx: uno_de([0, 1, 2])
  escenario: [["espiral", "brazos"], ["elíptica", "forma ovalada"], ["irregular", "sin forma definida"]]

respuesta: escenario[idx][0
tipo: mc
opciones_explicitas: ["espiral", "elíptica", "irregular"]

enunciado: "Considerando que la Vía Láctea tiene una estructura de {escenario[idx][1]}, ¿qué tipo de galaxia es?"

explicacion: |
  La Vía Láctea es una galaxia de tipo {escenario[idx][0]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "intermedio"
  tags: ["astronomia", "galaxias"]

respuesta: "espiral, elíptica, irregular"
tipo: completar
respuestas_validas: ["espiral, elíptica, irregular", "espiral, irregular, elíptica"]

enunciado: "El orden de los tres principales tipos de galaxias según su morfología es: 1) ___, 2) ___ y 3) ___."

explicacion: |
  La clasificación morfológica clásica divide a las galaxias principalmente en espirales, elípticas e irregulares.
```

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "basico"
  tags: ["astronomia", "unidades"]

tipo: mc
opciones_explicitas: ["Año luz", "Kilómetro", "Milla náutica", "Unidad Astronómica"]

enunciado: "Debido a que las distancias entre las galaxias son inmensas, los kilómetros resultan inmanejables. ¿Cuál es la unidad de medida que representa la distancia que recorre la luz en un año?"

explicacion: |
  El año luz es la unidad estándar para medir distancias interestelares e intergalácticas, ya que un kilómetro es una medida demasiado pequeña para escalas cósmicas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "intermedio"
  tags: ["calculo", "luz"]

variables:
  velocidad_luz_km_s: 299792
  segundos_en_un_dia: 86400
  dias_en_un_anio: 365.25

tipo: completar
tolerancia_abs: 1000000

enunciado: "Si la luz viaja a aproximadamente {velocidad_luz_km_s} km/s, ¿cuántos kilómetros recorre aproximadamente en un año (considerando {dias_en_un_anio} días)? (Calcula el valor aproximado en km)"

pasos:
  - "Multiplica la velocidad de la luz por los segundos en un día."
  - "Multiplica el resultado por la cantidad de días en un año."

explicacion: |
  La distancia es: 299792 * 86400 * 365.25 ≈ 9.46 * 10^12 km.
```

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "basico"
  tags: ["conceptos"]

tipo: completar
respuestas_validas: ["inmanejables", "imposibles", "infinitas"]

enunciado: "El uso de unidades como el año luz es necesario porque las distancias en kilómetros son ________ para el estudio de la escala galáctica."

explicacion: |
  En astronomía, las escalas humanas (como el km) pierden utilidad práctica cuando se trata de distancias entre sistemas estelares.
```

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "intermedio"
  tags: ["comparacion"]

variables:
  escenario: uno_de([
    ["La Luna", "distancia corta"],
    ["Andrómeda", "distancia larga"]
  ])

tipo: mc
opciones_explicitas: ["distancia corta", "distancia larga"]

enunciado: "Dependiendo de la escala, la distancia a {escenario[0]} se mide en kilómetros, mientras que la distancia a {escenario[1]} se mide en ________."

explicacion: |
  La Luna está a unos 384,400 km (escala local), mientras que la Galaxia de Andrómeda está a millones de años luz (escala galáctica).
```

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "avanzado"
  tags: ["orden", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Sistema Solar", "Galaxia", "Universo Observable"]

enunciado: "Ordena las siguientes estructuras de la escala más pequeña a la más grande:"

explicacion: |
  El orden correcto es: primero el Sistema Solar, luego la Galaxia (que contiene miles de millones de estrellas) y finalmente el Universo Observable.
```

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "basico"
  tags: ["vía_láctea", "estrellas"]

respuesta: "cientos de miles de millones"
tipo: completar
respuestas_validas: ["cientos de miles de millones"]

enunciado: "Se estima que nuestra galaxia, la Vía Láctea, contiene ___ de estrellas."

explicacion: |
  La Vía Láctea es una galaxia espiral que alberga una cantidad masiva de astros, estimándose en cientos de miles de millones de estrellas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "basico"
  tags: ["universo", "galaxias"]

variables:
  escala_galaxias: uno_de(["cientos de miles de millones", "pocos miles", "un millón"])

respuesta: escala_galaxias
tipo: mc
opciones_explicitas: ["cientos de miles de millones", "pocos miles", "un millón"]

enunciado: "En el universo observable se estima que existen {escala_galaxias} de galaxias."

explicacion: |
  La escala del universo es inmensa; la cantidad de galaxias es comparable en orden de magnitud a la cantidad de estrellas en nuestra propia galaxia.
```

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "intermedio"
  tags: ["comparacion", "magnitud"]

variables:
  caso: uno_de([0, 1])

respuesta: tabla[caso][1
tipo: mc
opciones_explicitas: ["mayor", "menor", "igual"]

enunciado: "Si comparamos la cantidad de estrellas en la Vía Láctea con la cantidad de galaxias en el universo observable, la cantidad de estrellas es {tabla[caso][0]} que la de galaxias."

tabla: [
  ["mayor", "mayor"],
  ["menor", "menor"]
]

explicacion: |
  Aunque ambas cifras son de "cientos de miles de millones", la escala de estrellas en una sola galaxia es comparable a la escala de galaxias en el universo, pero matemáticamente la cantidad de estrellas es órdenes de magnitud superior a la de galaxias.
```

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "avanzado"
  tags: ["jerarquia", "escala"]

respuesta: ["Estrellas", "Galaxias", "Universo"]
tipo: ordenar

opciones_explicitas: ["Estrellas", "Galaxias", "Universo"]

enunciado: "Ordena estos conceptos de menor a mayor escala de agrupación de materia:"

pasos:
  - "Identifica la unidad básica en este contexto"
  - "Identifica el conjunto que contiene a las estrellas"
  - "Identifica el todo que contiene a las galaxias"

explicacion: |
  La jerarquía estructural comienza con las estrellas, las cuales se agrupan en galaxias, y estas forman parte de la estructura del universo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "basico"
  tags: ["verdadero_falso"]

respuesta: verdadero
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Es correcto afirmar que el universo observable contiene cientos de miles de millones de galaxias."

explicacion: |
  Las estimaciones astronómicas actuales sitúan la cantidad de galaxias en el universo observable en el orden de cientos de miles de millones.
```

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "basico"
  tags: ["astronomia", "galaxias"]

variables:
  escenario: [[ "Una galaxia con un núcleo brillante y brazos curvos llenos de gas y polvo.", "Espiral" ], [ "Una galaxia con forma de disco pero sin brazos definidos.", "Lenticular" ], [ "Una galaxia con forma de esfera sin estructura de brazos.", "Elíptica" ]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["Espiral", "Lenticular", "Elíptica"]

enunciado: "Se observa una estructura galáctica con las siguientes características: {escenario[idx][0]}"

explicacion: |
  La morfología de una galaxia se determina por su estructura visual. En este caso, la presencia de brazos y gas es característica de la tipo {escenario[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "basico"
  tags: ["astronomia", "galaxias"]

variables:
  escenario: [[ "Un sistema estelar masivo con forma de ovoide y poco gas.", "Elíptica" ], [ "Un sistema con un disco central y brazos de formación estelar.", "Espiral" ]]
  idx: uno_de([0, 1])

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["Espiral", "Elíptica"]

enunciado: "Si una galaxia presenta una forma ovoide, carece de brazos espirales y tiene una cantidad mínima de gas interestelar, su tipo es: {escenario[idx][1]}"

explicacion: |
  Las galaxias {escenario[idx][1]} se caracterizan por su falta de estructura de brazos y su forma redondeada o elíptica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "intermedio"
  tags: ["astronomia", "galaxias"]

variables:
  escenario: [[ "Presenta un disco prominente pero carece de brazos espirales.", "Lenticular" ], [ "Presenta brazos espirales muy marcados.", "Espiral" ]]
  idx: uno_de([0, 1])

respuesta: escenario[idx][0
tipo: mc
opciones_explicitas: ["Lenticular", "Espiral"]

enunciado: "Al analizar la morfología de la galaxia {escenario[idx][0]}, ¿qué tipo de galaxia estamos observando?"

explicacion: |
  Las galaxias {escenario[idx][0]} son un caso intermedio: tienen la forma de un disco como las espirales, pero no poseen los brazos característicos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "intermedio"
  tags: ["astronomia", "galaxias"]

variables:
  escenario: [[ "Espiral", "brazos curvos" ], [ "Elíptica", "forma esférica" ], [ "Lenticular", "disco sin brazos" ]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1
tipo: completar
respuestas_validas: ["brazos curvos", "forma esférica", "disco sin brazos"]

enunciado: "Una galaxia de tipo {escenario[idx][0]} se caracteriza principalmente por tener ___."

explicacion: |
  La descripción de la galaxia {escenario[idx][0]} corresponde a la característica de {escenario[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "avanzado"
  tags: ["astronomia", "galaxias"]

variables:
  orden_correcto: ["Elíptica", "Lenticular", "Espiral"]

respuesta: orden_correcto
tipo: ordenar
opciones_explicitas: ["Elíptica", "Lenticular", "Espiral"]

enunciado: "Ordene los siguientes tipos de galaxias de menor a mayor complejidad estructural (desde la más simple/esférica a la más compleja/con brazos):"

explicacion: |
  La secuencia correcta es {orden_correcto}, partiendo de la forma más simple (elíptica) hasta la más estructurada (espiral).
```

## Sección: globalizacion-era-digital (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "basico"
  tags: ["definicion", "interconexion"]

respuesta: "interconexión"
tipo: completar
respuestas_validas: ["interconexión", "interconexion"]

enunciado: "La globalización se define como el proceso de creciente ___ económica, cultural y tecnológica entre los países del mundo."

explicacion: |
  La globalización implica una integración de mercados y sociedades a escala mundial.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["tecnologia", "comunicacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["la llegada de Internet", "la digitalización de la información"],
    ["el desarrollo de la telefonía móvil", "la inmediatez de la comunicación"]
  ]
  respuestas_correctas: [
    ["la llegada de Internet", "la digitalización de la información"],
    ["el desarrollo de la telefonía móvil", "la inmediatez de la comunicación"]
  ]

respuesta: escenarios[escenario_idx][1
tipo: mc
opciones_explicitas: ["la llegada de Internet", "la digitalización de la información", "el desarrollo de la telefonía móvil", "la inmediatez de la comunicación"]

enunciado: "En el contexto de la era digital, {escenarios[escenario_idx][0]} fue un factor clave que impulsó {escenarios[escenario_idx][1]}."

explicacion: |
  La tecnología ha sido el motor que ha permitido que la interconexión sea instantánea y global.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["economia", "comercio"]

respuesta: "transnacionales"
tipo: mc
opciones_explicitas: ["nacionales", "transnacionales", "locales", "estatales"]

enunciado: "La globalización económica ha permitido el auge de las empresas ________, que operan en múltiples países simultáneamente."

explicacion: |
  Las empresas transnacionales son actores centrales en la economía globalizada.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "avanzado"
  tags: ["cronologia", "tecnologia"]

respuesta: ["Internet", "Comercio electrónico", "Redes sociales", "Internet de las cosas"]
tipo: ordenar
opciones_explicitas: ["Internet", "Comercio electrónico", "Redes sociales", "Internet de las cosas"]

enunciado: "Ordene cronológicamente estos hitos tecnológicos que han profundizado la globalización:"

explicacion: |
  La secuencia muestra cómo la infraestructura (Internet) permitió el comercio, luego la interacción social masiva y finalmente la hiperconectividad de objetos.
```

```
metadata:
  materia: "historia_profucha"
  tema: "globalizacion_era_digital"
  nivel: "avanzado"
  tags: ["desigualdad", "brecha_digital"]

variables:
  es_positivo: uno_de([true, falso])
  caso: [
    ["la reducción de la brecha digital", "la homogeneización cultural"],
    ["la homogeneización cultural", "la reducción de la brecha digital"]
  ]
  respuesta_correcta: ["la homogeneización cultural", "la reducción de la brecha digital"]

respuesta: caso[es_positivo][0
tipo: mc
opciones_explicitas: ["la homogeneización cultural", "la reducción de la brecha digital"]

enunciado: "Si se analiza la globalización desde una perspectiva crítica, un efecto cultural negativo común es {caso[0]}."

explicacion: |
  La homogeneización cultural se refiere a la pérdida de identidades locales frente a una cultura global dominante.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "basico"
  tags: ["transporte", "comercio"]

enunciado: "La caída drástica en los costos de transporte marítimo durante el siglo XX fue impulsada principalmente por la estandarización de los contenedores. ¿Qué tipo de transporte permitió esta revolución?"

opciones_explicitas: ["Aéreo", "Marítimo", "Ferroviario", "Terrestre"]
respuesta: "Marítimo"
tipo: "mc"

explicacion: |
  La contenedorización permitió cargar y descargar barcos de forma masiva y rápida, reduciendo costos y tiempos de espera, lo que fue clave para la globalización.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["telecomunicaciones", "internet"]

variables:
  tecnologia_clave: uno_de(["Internet", "Radio", "Telégrafo"])

enunciado: "La globalización en la era digital se vio potenciada por el desarrollo de {tecnologia_clave}, que permitió la transferencia de datos instantánea entre continentes."

respuesta: "Internet"
tipo: "completar"
respuestas_validas: ["Internet"]

explicacion: |
  Mientras que el telégrafo fue el precursor, fue la llegada de Internet lo que permitió la globalización de los servicios y la economía digital actual.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["tratados", "politica"]

enunciado: "Los tratados de libre comercio buscan la eliminación de barreras para el intercambio de bienes. ¿Cuál es el objetivo principal de un tratado de este tipo?"

opciones_explicitas: ["Aumentar aranceles", "Eliminar aranceles", "Cerrar fronteras", "Controlar precios"]
respuesta: "Eliminar aranceles"
tipo: "mc"

explicacion: |
  Los tratados de libre comercio (TLC) buscan reducir o eliminar impuestos (aranceles) a la importación/exportación para facilitar el flujo comercial.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "avanzado"
  tags: ["procesos", "historia"]

enunciado: "Ordene cronológicamente estos hitos que impulsaron la integración global:"

opciones_explicitas: ["Revolución Industrial (vapor)", "Expansión del Telégrafo", "Revolución Digital (Internet)"]
respuesta: ["Revolución Industrial (vapor)", "Expansión del Telégrafo", "Revolución Digital (Internet)"]
tipo: "ordenar"

explicacion: |
  La globalización ha sido un proceso acumulativo: primero la máquina de vapor, luego la velocidad de la información con el telégrafo y finalmente la interconectividad digital.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["economia", "digital"]

variables:
  escenario: uno_de([0, 1])

enunciado: "En un mundo altamente globalizado digitalmente, el costo de enviar información tiende a ser ___."

pasos:
  - "Considerar la digitalización de bits vs el transporte físico de papel."

respuesta: tabla[escenario][1
tipo: "completar"
respuestas_validas: ["nulo", "muy alto"]

variables_contexto:
  tabla: [["muy alto", "muy alto"], ["nulo", "nulo"]]

explicacion: |
  La digitalización permite que el costo marginal de transmitir información sea prácticamente cero, acelerando el comercio global.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "basico"
  tags: ["internet", "comunicacion", "globalizacion"]

respuesta: "instantánea"
tipo: completar
respuestas_validas: ["instantánea", "inmediata"]

enunciado: "La llegada de internet transformó la escala de los intercambios humanos, permitiendo que la comunicación entre personas en distintos continentes sea de carácter ___."

explicacion: |
  La digitalización eliminó las barreras temporales y geográficas, permitiendo el flujo de información en tiempo real, un pilar fundamental de la globalización moderna.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["comercio", "e-commerce", "economia"]

variables:
  escenario: uno_de([
    ["comercio electrónico", "comercio electrónico"],
    ["transacciones bancarias", "transacciones bancarias"],
    ["servicios en la nube", "servicios en la nube"]
  ])

respuesta: escenario[0
tipo: mc
opciones_explicitas: ["comercio electrónico", "transacciones bancarias", "servicios en la nube", "todos los anteriores"]

enunciado: "La era digital ha facilitado la expansión del {escenario[0]} a nivel mundial, permitiendo que pequeñas empresas accedan a mercados globales sin necesidad de presencia física."

explicacion: |
  El e-commerce es uno de los motores más visibles de la globalización digital, permitiendo la integración de mercados de consumo de manera global y directa.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "avanzado"
  tags: ["brecha_digital", "desigualdad", "sociedad"]

respuesta: "brecha digital"
tipo: completar
respuestas_validas: ["brecha digital", "desigualdad tecnológica"]

enunciado: "A pesar de la conectividad global, la distribución desigual de la infraestructura tecnológica ha generado una ___ que separa a las naciones desarrolladas de las que están en vías de desarrollo."

explicacion: |
  La brecha digital es un fenómeno crítico donde la falta de acceso a internet y tecnologías de la información profundiza las desigualdades económicas y sociales preexistentes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["historia", "tecnologia", "evolucion"]

respuesta: ["telegrafía", "computación personal", "internet de banda ancha", "redes móviles 5G"]
tipo: ordenar
opciones_explicitas: ["telegrafía", "computación personal", "internet de banda ancha", "redes móviles 5G"]

enunciado: "Ordene cronológicamente los hitos tecnológicos que han acelerado la integración global:"

explicacion: |
  La globalización ha sido un proceso de aceleración constante: desde la transmisión de señales eléctricas (telegrafía) hasta la hiperconectividad móvil actual.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "basico"
  tags: ["teoria", "sociedad", "cultura"]

respuesta: "Marsall McLuhan"
tipo: completar
tolerancia_abs: 0

enunciado: "El concepto de 'Aldea Global', que describe cómo la tecnología digital ha encogido el mundo, fue acuñado por el teórico de la comunicación ___."

explicacion: |
  McLuhan predijo que los medios de comunicación electrónicos transformarían el mundo en una unidad interconectada donde todos estaríamos presentes en la vida de los demás.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["cultura", "homogeneizacion"]

variables:
  escenario: uno_de(["occidentalización", "estandarización"])

respuesta: escenario
tipo: mc
opciones_explicitas: ["occidentalización", "estandarización", "diversificación", "aislamiento"]

enunciado: "En el contexto de la globalización digital, la difusión masiva de contenidos de un único polo cultural dominante suele provocar un proceso de {escenario} cultural."

explicacion: |
  La globalización digital facilita que patrones culturales (música, cine, valores) de potencias tecnológicas se expandan globalmente, lo que puede llevar a la pérdida de particularidades locales en favor de un modelo único.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "avanzado"
  tags: ["economia", "desigualdad"]

variables:
  datos: [[100, "Aumenta"], [100, "Disminuye"], [100, "Se mantiene"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1
tipo: completar
tolerancia_abs: 0

enunciado: "Si la brecha digital se ensancha, la desigualdad económica entre países con alta y baja conectividad tiende a ___."

pasos:
  - "Analizar la relación entre acceso a tecnología y productividad económica."
  - "Considerar el impacto de la automatización y el flujo de capitales digitales."

explicacion: |
  La falta de infraestructura digital en regiones en desarrollo impide que participen equitativamente en la economía global, exacerbando la brecha de riqueza existente.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "basico"
  tags: ["cultura", "intercambio"]

respuesta: "hibridación"
tipo: completar
respuestas_validas: ["hibridación", "aislamiento", "anulación"]

enunciado: "Cuando elementos de diferentes culturas se mezclan a través de las redes sociales para crear nuevas formas de expresión, ocurre un proceso de ___ cultural."

explicacion: |
  La globalización no solo homogeneiza; también permite la 'hibridación', donde lo local y lo global se fusionan para crear identidades nuevas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["procesos", "orden"]

respuesta: ["Interconexión", "Estandarización", "Desigualdad"]
tipo: ordenar
opciones_explicitas: ["Interconexión", "Estandarización", "Desigualdad"]

enunciado: "Ordena los efectos de la globalización digital desde el proceso de comunicación hasta su impacto socioeconómico:"

explicacion: |
  Primero ocurre la interconexión técnica, lo que permite la estandarización de consumos y, finalmente, puede derivar en nuevas formas de desigualdad estructural.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "avanzado"
  tags: ["tecnologia", "poder"]

variables:
  caso: uno_de(["monopolio", "competencia"])
  valor: uno_de(["creciente", "decreciente"])

respuesta: caso

tipo: mc
opciones_explicitas: ["monopolio", "competencia", "cooperación", "neutralidad"]

enunciado: "La concentración de datos en pocas corporaciones tecnológicas globales tiende a fomentar un {caso} de información."

explicacion: |
  La economía de plataformas a menudo crea estructuras de poder centralizadas donde unos pocos actores controlan el flujo de información global.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "basico"
  tags: ["economia", "comercio"]

variables:
  datos: [["La firma de un tratado de libre comercio entre dos bloques continentales", "globalización económica"], ["La difusión masiva de una serie de televisión coreana en todo el mundo", "globalización cultural"], ["La creación de una nueva red de protocolos de comunicación para internet", "globalización tecnológica"]]
  idx: uno_de([0, 1, 2])

enunciado: "Un ejemplo de {datos[idx][0]} es un fenómeno de {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["globalización económica", "globalización cultural", "globalización tecnológica"]

explicacion: |
  El escenario describe la integración de mercados, la difusión de contenidos o la estandarización de redes, pilares de la globalización según su dimensión.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["tecnologia", "comunicacion"]

variables:
  datos: [["El uso de una misma aplicación de mensajería instantánea en todos los continentes", "tecnológica"], ["La adopción de modas estéticas globales a través de influencers", "cultural"], ["La fragmentación de las cadenas de suministro globales", "económica"]]
  idx: uno_de([0, 1, 2])

enunciado: "La adopción de {datos[idx][0]} representa una dimensión {datos[idx][1]} de la globalización."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["tecnológica", "cultural", "económica"]

explicacion: |
  La digitalización permite que las herramientas, las costumbres o los flujos de capital se muevan de forma casi instantánea por el planeta.
```

```
metadata:
  materia: "historia_profucha"
  tema: "globalizacion_era_digital"
  nivel: "basico"
  tags: ["conceptos"]

enunciado: "La capacidad de transmitir datos de forma instantánea a través de satélites es un ejemplo de globalización ___."

respuesta_validas: ["tecnológica"]
respuesta: "tecnológica"
tipo: completar

explicacion: |
  La infraestructura tecnológica es el soporte físico y digital que permite que las otras dimensiones (económica y cultural) operen a escala global.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "avanzado"
  tags: ["procesos", "economia"]

enunciado: "Ordena el proceso de integración de un mercado digital global:"

pasos:
  - "Desarrollo de infraestructura de fibra óptica y satélites"
  - "Creación de plataformas de comercio electrónico transfronterizo"
  - "Consolidación de un mercado de consumo global interconectado"

opciones_explicitas: ["Desarrollo de infraestructura de fibra óptica y satélites", "Creación de plataformas de comercio electrónico transfronterizo", "Consolidación de un mercado de consumo global interconectado"]
respuesta: ["Desarrollo de infraestructura de fibra óptica y satélites", "Creación de plataformas de comercio electrónico transfronterizo", "Consolidación de un mercado de consumo global interconectado"]
tipo: ordenar

explicacion: |
  Primero se requiere el medio (tecnología), luego la herramienta de intercambio (plataforma) y finalmente el resultado sistémico (mercado global).
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["cultura", "consumo"]

variables:
  datos: [["La estandarización de los menús de comida rápida en países con dietas tradicionales", "cultural"], ["El flujo de capitales especulativos entre bolsas de valores", "económica"], ["La exportación de software de código abierto para uso mundial", "tecnológica"]]
  idx: uno_de([0, 1, 2])

enunciado: "El fenómeno de {datos[idx][0]} es un ejemplo de globalización ___."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["cultural", "económica", "tecnológica"]

explicacion: |
  Cuando los hábitos de consumo o valores se vuelven homogéneos a pesar de las diferencias locales, estamos ante la globalización cultural.
```

## Sección: golpes-de-estado-interrupciones (26 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["definicion", "politica"]

tipo: mc
opciones_explicitas: ["La toma del poder mediante procesos electorales y respeto a la constitución.", "La toma ilegítima e inconstitucional del poder político, generalmente por las fuerzas armadas.", "Un cambio de gobierno derivado de una crisis económica sin violencia.", "La renuncia voluntaria de un presidente por motivos de salud."]

enunciado: "Un golpe de Estado se define fundamentalmente como:"

explicacion: |
  Un golpe de Estado es una ruptura del orden constitucional donde se toma el poder de forma ilegítima, interrumpiendo el mandato de las autoridades electas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["caracteristicas", "instituciones"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El uso de la fuerza militar para deponer al ejecutivo.", "La ocupación de edificios gubernamentales y la suspensión de la Constitución."],
    ["La movilización social masiva para exigir nuevas elecciones.", "La renuncia del gabinete ministerial ante una crisis parlamentaria."]
  ]

tipo: mc
opciones_explicitas: ["Uso de mecanismos legales para cambiar al presidente.", "Uso de la fuerza o la ruptura de la legalidad para tomar el control estatal.", "Un proceso de transición democrática supervisado."]

enunciado: "En un escenario de {"escenarios[escenario_idx][0]}, el elemento central que caracteriza al golpe es:"

explicacion: |
  La característica distintiva es la ruptura del marco legal preestablecido y el uso de medios no previstos por la norma constitucional.
```

```
metadata:
  materia: "historia_profucha"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["secuencia", "orden"]

tipo: ordenar
opciones_explicitas: ["Crisis política o social", "Acción de las fuerzas armadas o grupos de poder", "Suspensión de la Constitución", "Establecimiento de un gobierno de facto"]

enunciado: "Ordene cronológicamente los pasos típicos de una interrupción institucional clásica:"

explicacion: |
  Un golpe suele comenzar con una crisis que debilita al gobierno, seguido de la acción directa que rompe el orden legal y culmina con la instauración de un régimen no electo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "avanzado"
  tags: ["consecuencias", "derecho"]

tipo: completar
respuestas_validas: ["inconstitucional", "ilegitima"]

enunciado: "Un golpe de Estado es un acto ___ que rompe con la legitimidad ___ del mandato popular."

explicacion: |
  Al ignorar las reglas establecidas en la Carta Magna, la acción es inconstitucional y carece de legitimidad democrática.
```

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["comparacion"]

tipo: mc
opciones_explicitas: ["El cambio de gobierno es legal y sigue las leyes; el golpe es una ruptura de estas.", "Ambos son procesos de la misma naturaleza pero con distinta duración.", "El golpe siempre es pacífico y el cambio de gobierno es violento.", "No existe diferencia técnica entre ambos conceptos."]

enunciado: "¿Cuál es la diferencia fundamental entre un cambio de gobierno democrático y un golpe de Estado?"

explicacion: |
  La diferencia radica en el respeto a la legalidad: el primero ocurre dentro del marco de la ley, el segundo lo destruye.
```

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["argentina", "siglo_xx", "democracia"]

tipo: ordenar
opciones_explicitas: ["1930", "1943", "1955", "1966", "1976"]
respuesta: ["1930", "1943", "1955", "1966", "1976"]

enunciado: "Ordená cronológicamente los siguientes golpes de Estado que afectaron la institucionalidad argentina en el siglo XX:"

explicacion: |
  La secuencia cronológica de las interrupciones al orden constitucional fue: 1930, 1943, 1955, 1966 y 1976.
```

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["historia", "argentina"]

tipo: mc
opciones_explicitas: ["1930", "1945", "1955", "1976"]
respuesta: "1930"

enunciado: "¿En qué año se produjo el primer golpe de Estado que interrumpió el orden constitucional en la Argentina del siglo XX?"

explicacion: |
  El golpe de Estado de 1930 derrocó al presidente Hipólito Yrigoyen, marcando el inicio de una era de inestabilidad institucional.
```

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["historia", "argentina"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["1955", "la Revolución Sojera"],
    ["1966", "la Revolución Argentina"]
  ]

tipo: mc
opciones_explicitas: ["1955", "1962", "1966", "1976"]
respuesta: escenarios[escenario_idx][0

enunciado: "Identificá el año correspondiente al golpe conocido como {escenarios[escenario_idx][1]}."

explicacion: |
  El escenario seleccionado fue el de {escenarios[escenario_idx][1]}, que ocurrió en el año {escenarios[escenario_idx][0]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["historia", "argentina"]

tipo: completar
respuestas_validas: ["1976"]
respuesta: "1976"

enunciado: "El golpe de Estado más violento y de mayor duración en términos de represión sistemática ocurrió en el año ___."

explicacion: |
  El golpe de Estado de 1976 dio inicio al proceso de dictadura militar más sangriento de la historia argentina.
```

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "avanzado"
  tags: ["historia", "argentina", "estadistica"]

variables:
  lista_golpes: ["1930", "1943", "1955", "1962", "1966", "1976"]

tipo: completar
respuesta: 6

enunciado: "Considerando la lista de golpes mencionados en el texto: {lista_golpes}, ¿cuántas interrupciones al orden democrático se enumeran en total?"

pasos:
  - "Identificar cada año mencionado en el enunciado."
  - "Contar la cantidad de elementos en la lista proporcionada."

explicacion: |
  Se enumeran 6 golpes de Estado en la lista: 1930, 1943, 1955, 1962, 1966 y 1976.
```

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["argentina", "democracia", "irrigoyen"]

respuesta: "1930"
tipo: "completar"
respuestas_validas: ["1930"]

enunciado: "El primer golpe de Estado del siglo XX en Argentina, que derrocó al presidente Hipólito Yrigoyen, ocurrió en el año ___."

explicacion: |
  El golpe de 1930 marcó el inicio de un ciclo de interrupciones al orden constitucional en Argentina, rompiendo la estabilidad de la Ley Sáenz Peña.
```

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["patrones", "militarismo"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El golpe de 1930 inició un ___ de intervenciones militares recurrentes.", "patrón"],
    ["El derrocamiento de Yrigoyen inauguró un ___ de inestabilidad política.", "ciclo"]
  ]

respuesta: escenarios[escenario_idx][1
tipo: "mc"
opciones_explicitas: ["patrón", "ciclo", "acuerdo", "proceso"]

enunciado: "{escenarios[escenario_idx][0]}"

explicacion: |
  El golpe de 1930 no fue un evento aislado, sino que inauguró un patrón de intervenciones militares que se repetiría durante gran parte del siglo XX.
```

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["contexto", "crisis"]

respuesta: "crisis económica mundial"
tipo: "mc"
opciones_explicitas: ["crisis económica mundial", "guerra civil", "revolución industrial", "independencia"]

enunciado: "El golpe de Estado de 1930 se produjo en un contexto de profunda ___ que afectó la estabilidad del gobierno de Yrigoyen."

explicacion: |
  La crisis económica de 1929 (Gran Depresión) debilitó la estructura política y social, facilitando el levantamiento militar contra el radicalismo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "avanzado"
  tags: ["secuencia", "orden"]

respuesta: ["Ley Sáenz Peña", "Derrocamiento de Yrigoyen", "Intervención militar"]
tipo: "ordenar"
opciones_explicitas: ["Ley Sáenz Peña", "Derrocamiento de Yrigoyen", "Intervención militar"]

enunciado: "Ordene cronológicamente los siguientes hitos relacionados con la estabilidad democrática argentina del siglo XX:"

explicacion: |
  Primero se establece la democracia con la Ley Sáenz Peña (1912), luego ocurre el primer golpe (1930) y esto deriva en la práctica de intervenciones militares.
```

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["consecuencias", "democracia"]

respuesta: falso
tipo: "vf"

enunciado: "¿El golpe de 1930 fue un evento aislado que no influyó en la política argentina posterior?"

explicacion: |
  Falso. El golpe de 1930 fue el primer eslabón de una serie de interrupciones que marcaron la historia política argentina durante décadas.
```

```
metadata:
  materia: "historia"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["argentina", "dictadura", "1976"]

respuesta: "24 de marzo de 1976"
tipo: completar
respuestas_validas: ["24 de marzo de 1976"]

enunciado: "El golpe de Estado que dio inicio a la última dictadura militar en Argentina ocurrió el día ___."

explicacion: |
  El 24 de marzo de 1976 se produjo el golpe de Estado que instauró un proceso de autodenominado 'Reorganización Nacional', marcando el inicio del período dictatorial más prolongado y violento de la historia argentina reciente.
```

```
metadata:
  materia: "historia"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["derechos_humanos", "terrorismo_de_estado"]

opciones_explicitas: ["Violación sistemática de derechos humanos", "Retorno inmediato a la democracia", "Estabilidad económica sostenida", "Pluralismo político"]

respuesta: "Violación sistemática de derechos humanos"
tipo: mc

enunciado: "Una de las características centrales y más graves del proceso de la última dictadura militar (1976-1983) fue la:"

explicacion: |
  El Estado implementó un plan sistemático de represión que incluyó la desaparición forzada de personas, la tortura y el robo de bebés, constituyendo un crimen de lesa humanidad.
```

```
metadata:
  materia: "historia"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["fechas", "periodo"]

variables:
  idx: uno_de([0,1])

respuesta: datos[idx][1
tipo: ordenar
opciones_explicitas: ["Inicio del golpe de Estado", "Fin de la dictadura militar", "Guerra de Malvinas", "Retorno a la democracia"]

enunciado: "Ordená cronológicamente los siguientes hitos relacionados con el período 1976-1983:"

pasos:
  - "Identificar el año de inicio del golpe."
  - "Identificar el año del fin del proceso dictatorial."

explicacion: |
  El proceso comenzó en 1976 y finalizó en 1983, tras la derrota en la Guerra de Malvinas y la crisis del régimen.
```

```
metadata:
  materia: "historia"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["fechas", "periodo"]

respuesta: ["Inicio del golpe de Estado", "Guerra de Malvinas", "Fin de la dictadura militar"]
tipo: ordenar
opciones_explicitas: ["Inicio del golpe de Estado", "Guerra de Malvinas", "Fin de la dictadura militar"]

enunciado: "Ordená cronológicamente los eventos del período dictatorial:"

explicacion: |
  El orden correcto es: Inicio del golpe (1976), Guerra de Malvinas (1982) y Fin de la dictadura (1983).
```

```
metadata:
  materia: "historia"
  tema: "golpes_de_estado_interrupciones"
  nivel: "avanzado"
  tags: ["conceptos", "derechos_humanos"]

variables:
  escenario: uno_de([0,1])
  datos: [["El uso de la estructura estatal para la represión ilegal", "terrorismo de Estado"], ["La participación en elecciones libres", "democracia representativa"]]

respuesta: datos[escenario][1
tipo: mc
opciones_explicitas: ["terrorismo de Estado", "democracia representativa"]

enunciado: "Cuando el Estado utiliza sus instituciones y fuerzas de seguridad para cometer delitos contra la población, como la desaparición de personas, se denomina:"

explicacion: |
  El término 'terrorismo de Estado' describe la acción de los gobiernos de facto para sembrar terror en la sociedad mediante la represión sistemática.
```

```
metadata:
  materia: "historia"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["duracion", "fechas"]

respuesta: 7
tipo: completar
tolerancia_abs: 0

enunciado: "Si la última dictadura militar en Argentina duró desde 1976 hasta 1983, ¿cuántos años duró aproximadamente este proceso de interrupción democrática?"

explicacion: |
  El proceso duró 7 años, desde el golpe de 1976 hasta la asunción de la presidencia de Raúl Alfonsín en 1983.
```

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["argentina", "siglo_xx", "dictadura"]

variables:
  datos: [["José Félix Uriburu", "1930"], ["Agustín P. Justo", "1932"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["José Félix Uriburu", "Agustín P. Justo", "Juan Perón", "Arturo Illia"]

enunciado: "El primer golpe de Estado que interrumpió el orden constitucional en Argentina durante el siglo XX fue liderado por {datos[idx][0]} en el año {datos[idx][1]}."

explicacion: |
  El golpe de 1930 derrocó a Hipólito Yrigoyen, marcando el inicio de la denominada "Década Infame".
```

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "avanzado"
  tags: ["ordenar", "cronologia"]

respuesta: ["Revolución Libertadora", "Revolución Argentina", "Onganía"]
tipo: ordenar
opciones_explicitas: ["Revolución Libertadora", "Revolución Argentina", "Onganía"]

enunciado: "Ordene cronológicamente los siguientes procesos/dictaduras que interrumpieron la democracia argentina entre 1955 y 1976:"

pasos:
  - "Identifique el golpe que derrocó a Perón en 1955."
  - "Identifique el proceso iniciado por Onganía en 1966."

explicacion: |
  La secuencia cronológica correcta es: Revolución Libertadora (1955), Revolución Argentina (1966) y el gobierno de facto de Onganía.
```

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["dictadura", "proceso"]

respuesta: "Proceso de Reorganización Nacional"
tipo: completar
respuestas_validas: ["Proceso de Reorganización Nacional"]

enunciado: "El golpe de Estado iniciado el 24 de marzo de 1976 fue autodenominado por la junta militar como el ___."

explicacion: |
  El Proceso de Reorganización Nacional fue la dictadura más sangrienta de la historia argentina.
```

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["liderazgo", "militar"]

variables:
  datos: [["Videla", "1976"], ["Anaya", "1981"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][0
tipo: mc
opciones_explicitas: ["Videla", "Anaya", "Galtieri", "Borda"]

enunciado: "El líder de la junta militar durante el inicio del golpe de {datos[idx][1]} fue {datos[idx][0]}."

explicacion: |
  Jorge Rafael Videla encabezó la dictadura que comenzó en 1976.
```

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["democracia", "retorno"]

respuesta: "Alfonsín"
tipo: mc
opciones_explicitas: ["Alfonsín", "Menem", "Duhalde", "De la Rúa"]

enunciado: "Tras la caída de la dictadura militar en 1983, el primer presidente elegido fue ___."

explicacion: |
  Raúl Alfonsín asumió la presidencia en 1983, marcando el retorno a la democracia tras la dictadura.
```

## Sección: gran-oxidacion (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "basico"
  tags: ["biologia", "atmosfera"]

tipo: mc
opciones_explicitas: ["Cianobacterias", "Dinosaurios", "Volcanes", "Asteroides"]
respuesta: "Cianobacterias"

enunciado: "La Gran Oxidación fue causada por la actividad de un grupo de organismos fotosintéticos conocidos como ___."

explicacion: |
  Las cianobacterias fueron los primeros organismos capaces de realizar la fotosíntesis oxigénica, liberando oxígeno como subproducto.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["geologia", "quimica"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario: [
    ["el oxígeno reaccionó con el hierro disuelto en los océanos", "se formaron formaciones de hierro bandeado (BIF)"],
    ["el oxígeno se acumuló rápidamente en la atmósfera", "se produjo un efecto invernadero masivo"]
  ]

tipo: mc
opciones_explicitas: ["Escenario A", "Escenario B"]

enunciado: "Durante el inicio de la Gran Oxidación, el oxígeno liberado no fue a la atmósfera inmediatamente, sino que primero {escenario[escenario_idx][0]}."

explicacion: |
  Antes de que el oxígeno se acumulara en la atmósfera, reaccionó con el hierro disuelto en los océanos, depositándolo en el fondo marino como hierro bandeado.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "avanzado"
  tags: ["clima", "extincion"]

tipo: completar
respuestas_validas: ["Glaciación", "calentamiento"]

enunciado: "La acumulación de oxígeno en la atmósfera provocó la oxidación del metano (un potente gas de efecto invernadero), lo que derivó en una de las mayores ___ de la historia de la Tierra."

explicacion: |
  La reducción de gases de efecto invernadero como el metano provocó un enfriamiento global extremo, conocido como la Glaciación Huronesiana.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["cronologia"]

tipo: ordenar
opciones_explicitas: ["Fotosíntesis oxigénica", "Oxidación de hierro disuelto", "Acumulación de O2 atmosférico", "Glaciación global"]

enunciado: "Ordena cronológicamente los eventos que caracterizaron el periodo de la Gran Oxidación:"

explicacion: |
  Primero surge la fotosíntesis, luego el oxígeno reacciona con el hierro (BIF), luego el oxígeno llega a la atmósfera y finalmente causa el enfriamiento global.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "basico"
  tags: ["atmosfera"]

tipo: completar
tolerancia_abs: 0

enunciado: "Antes de la Gran Oxidación, la atmósfera terrestre era predominantemente ________ (escribe 'anóxica' o 'rica' según corresponda)."

explicacion: |
  La atmósfera primordial era anóxica, es decir, carecía de niveles significativos de oxígeno libre.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "basico"
  tags: ["extincion", "oxigeno", "anaerobico"]

respuesta: "extinción masiva"
tipo: completar
respuestas_validas: ["extinción masiva"]

enunciado: "El aumento repentino de oxígeno en la atmósfera terrestre durante la Gran Oxidación es considerado la primera ___ de la historia."

explicacion: |
  La acumulación de oxígeno, producto de la fotosíntesis oxigénica, fue letal para la mayoría de los organismos anaeróbicos que dominaban la Tierra primitiva.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "basico"
  tags: ["anaerobico", "oxigeno"]

variables:
  tipo_organismo: uno_de(["anaeróbicos", "aeróbicos"])

respuesta: "anaeróbicos"
tipo: mc
opciones_explicitas: ["anaeróbicos", "aeróbicos", "fotosintéticos", "eucariotas"])

enunciado: "Antes de la Gran Oxidación, la atmósfera era rica en gases reductores y la vida estaba compuesta mayoritariamente por organismos de tipo {tipo_organismo}."

explicacion: |
  Los organismos anaeróbicos no poseen mecanismos para neutralizar el oxígeno, por lo que este actuó como un veneno oxidante para ellos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["fotosintesis", "cianobacterias"]

respuesta: "cianobacterias"
tipo: mc
opciones_explicitas: ["cianobacterias", "volcanes", "asteroides", "metano"])

enunciado: "La principal causa biológica del aumento de oxígeno atmosférico fue la aparición de las:"

explicacion: |
  Las cianobacterias desarrollaron la fotosíntesis oxigénica, liberando oxígeno como subproducto, lo que alteró la química global del planeta.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["secuencia", "oxigeno", "vida"])

respuesta: ["producción de oxígeno", "acumulación de oxígeno", "extinción de anaerobios", "aparición de la vida aeróbica"]
tipo: ordenar
opciones_explicitas: ["producción de oxígeno", "acumulación de oxígeno", "extinción de anaerobios", "aparición de la vida aeróbica"]

enunciado: "Ordena cronológicamente los eventos que caracterizaron la Gran Oxidación:"

explicacion: |
  Primero se produjo el oxígeno, luego se acumuló en la atmósfera tras saturar los sumideros químicos, provocando la muerte masiva de anaerobios y permitiendo finalmente la evolución de la respiración aeróbica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "avanzado"
  tags: ["quimica_atmosferica", "oxigeno"])

variables:
  estado_oxigeno: uno_de(["tóxico", "vital"])

respuesta: "tóxico"
tipo: mc
opciones_explicitas: ["tóxico", "vital", "neutro", "incoloro"])

enunciado: "Para la vida predominante en el Arcaico, el oxígeno atmosférico no era un elemento vital, sino un agente ___."

explicacion: |
  Debido a la ausencia de enzimas antioxidantes en los organismos de la época, el oxígeno libre causaba daños oxidativos letales en sus estructuras celulares.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "basico"
  tags: ["evolucion", "oxigeno"]

respuesta: "aeróbicos"
tipo: completar
respuestas_validas: ["aeróbicos"]

enunciado: "La acumulación de oxígeno en la atmósfera tras la Gran Oxidación permitió la evolución de organismos de tipo ___."

explicacion: |
  La presencia de oxígeno libre permitió que los organismos desarrollaran la respiración aeróbica, un proceso mucho más eficiente para obtener energía que la fermentación.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["complejidad", "oxigeno"]

opciones_explicitas: ["Organismos unicelulares simples", "Formas de vida más complejas y de mayor tamaño", "Vida basada exclusivamente en el metano", "Ausencia total de vida orgánica"]

respuesta: "Formas de vida más complejas y de mayor tamaño"
tipo: mc

enunciado: "El oxígeno liberado durante la Gran Oxidación sentó las bases para el surgimiento de:"

explicacion: |
  Al ser la respiración aeróbica mucho más eficiente energéticamente, permitió que los organismos tuvieran el excedente de energía necesario para mantener estructuras corporales más grandes y complejas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "avanzado"
  tags: ["metabolismo", "oxigeno"]

variables:
  escenario_idx: uno_de([0, 1])

respuesta: tabla[escenario_idx][1
tipo: mc
opciones_explicitas: ["Limitación energética", "Aumento de la eficiencia energética", "Reducción del tamaño celular", "Extinción de la vida multicelular"]

enunciado: "Considerando el impacto metabólico de la Gran Oxidación, el oxígeno permitió un {resultado}."

pasos:
  - "Analizar la diferencia entre metabolismo anaeróbico y aeróbico."
  - "Relacionar la eficiencia energética con el tamaño del organismo."

variables_contexto:
  tabla: [
    ["Limitación energética", "Limitación energética"],
    ["Aumento de la eficiencia energética", "Aumento de la eficiencia energética"]
  ]
  resultado: uno_de(["Limitación energética", "Aumento de la eficiencia energética"])

explicacion: |
  La oxidación de la glucosa en presencia de oxígeno produce muchísima más energía (ATP) que los procesos anaeróbicos, permitiendo la multicelularidad.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["proceso", "secuencia"]

opciones_explicitas: ["Producción de oxígeno", "Acumulación de oxígeno en la atmósfera", "Evolución de organismos aeróbicos", "Aparición de vida compleja"]

respuesta: ["Producción de oxígeno", "Acumulación de oxígeno en la atmósfera", "Evolución de organismos aeróbicos", "Aparición de vida compleja"]
tipo: ordenar

enunciado: "Ordena cronológicamente los eventos derivados de la actividad de los cianobacterias:"

explicacion: |
  Primero se produce el oxígeno por fotosíntesis, luego este se acumula en la atmósfera al saturarse los sumideros químicos, lo que permite la respiración aeróbica y finalmente la complejidad biológica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "basico"
  tags: ["atmosfera", "oxigeno"]

respuesta: "oxígeno"
tipo: completar
respuestas_validas: ["oxígeno"]

enunciado: "El gas liberado masivamente que transformó la química de la Tierra fue el ___."

explicacion: |
  La liberación de oxígeno por parte de los organismos fotosintéticos cambió la composición química de la atmósfera primitiva.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "basico"
  tags: ["geologia", "oxigeno"]

tipo: mc
opciones_explicitas: ["Formaciones de hierro bandeado (BIF)", "Capas de esquisto negro", "Depósitos de carbón", "Calizas de magnesio"]

enunciado: "Las evidencias geológicas de la Gran Oxidación se manifiestan principalmente en las llamadas ___."

explicacion: |
  Las Formaciones de Hierro Bandeado (BIF, por sus siglas en inglés) son capas de roca ricas en óxidos de hierro que se depositaron cuando el oxígeno liberado por la fotosíntesis reaccionó con el hierro disuelto en los océanos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["quimica_prebiotica", "oceanos"]

variables:
  elemento_reactivo: "uno_de(['hierro disuelto', 'azufre líquido', 'silicato de magnesio'])"
  idx: "uno_de([0, 1, 2])"

tipo: completar
respuestas_validas: ["hierro disuelto"]

enunciado: "Durante la Gran Oxidación, el ___ en los océanos reaccionó con el oxígeno molecular, provocando su precipitación en el fondo marino."

explicacion: |
  El hierro estaba disuelto en los océanos en forma de Fe(II). Al aparecer el oxígeno (O2), este oxidó el hierro a Fe(III), el cual es insoluble y precipitó como óxido de hierro.
```

```
metadata:
  materia: "historia_profucha"
  tema: "gran_oxidacion"
  nivel: "avanzado"
  tags: ["secuencia", "geologia"]

tipo: ordenar
opciones_explicitas: ["Producción de O2 por cianobacterias", "Oxidación de hierro disuelto en el océano", "Precipitación de óxidos de hierro (BIF)", "Aumento de la oxigenación atmosférica"]

enunciado: "Ordena cronológicamente los eventos que llevaron a la formación de los depósitos de hierro bandeado y la oxigenación atmosférica:"

explicacion: |
  Primero la vida fotosintética produce oxígeno; luego este oxida el hierro disponible en el agua; esto genera los depósitos BIF; finalmente, una vez saturado el sumidero de hierro, el oxígeno comienza a acumularse en la atmósfera.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["sumideros", "oxigeno"]

tipo: vf
opciones_explicitas: ["verdadero", "falso"]

enunciado: "La formación de las BIF actuó como un 'sumidero' que retrasó la acumulación masiva de oxígeno en la atmósfera durante millones de años."

explicacion: |
  Verdadero. El oxígeno producido se consumía rápidamente oxidando el hierro y otros compuestos en el océano antes de poder escapar a la atmósfera.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "avanzado"
  tags: ["geoquimica", "oxigeno"]

variables:
  concentracion_oxigeno: "random_float(0.0, 0.01)"
  umbral_saturacion: "0.05"

tipo: completar
tolerancia_abs: 0.001

enunciado: "Si la concentración de oxígeno en el océano es de {concentracion_oxigeno} moles/m³ y el umbral de saturación de los sumideros de hierro es de {umbral_saturacion} moles/m³, ¿cuál es la diferencia respecto al umbral?"

pasos:
  - "Calcular la diferencia absoluta entre el umbral y la concentración actual."

explicacion: |
  La diferencia es el margen que faltaba para que el oxígeno comenzara a acumularse en la atmósfera tras saturar los sumideros químicos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "basico"
  tags: ["biologia", "atmosfera"]

variables:
  datos: [["cianobacterias", "fotosíntesis"], ["cianobacterias", "fotosíntesis"]]
  idx: uno_de([0,1])

enunciado: "El evento conocido como la Gran Oxidación fue impulsado por la aparición de organismos capaces de realizar la {datos[idx][1]}."

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["fotosíntesis", "quimiosíntesis", "respiración", "fermentación"]

explicacion: |
  Las cianobacterias fueron los primeros organismos en desarrollar la fotosíntesis oxigénica, liberando oxígeno como subproducto.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["quimica", "oxigeno"]

variables:
  datos: [["oxígeno", "oxidación de metano"], ["oxígeno", "oxidación de metano"]]
  idx: uno_de([0,1])

enunciado: "La acumulación de {datos[idx][0]} en la atmósfera provocó la ___ de gases reductores como el metano."

respuesta: "oxidación de metano"
tipo: completar
respuestas_validas: ["oxidación de metano"]

explicacion: |
  El oxígeno atmosférico reaccionó con el metano (un gas de efecto invernadero), alterando la química global.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["extincion", "biologia"]

variables:
  caso: uno_de([["oxígeno", "extinción masiva"], ["oxígeno", "extinción masiva"]])
  tipo_efecto: uno_de(["extinción masiva", "explosión de vida"])

enunciado: "Para los organismos anaerobios de la época, el aumento de ___ representó una ___."

respuesta: "extinción masiva"
tipo: mc
opciones_explicitas: ["extinción masiva", "explosión de vida", "estabilidad climática", "mutación acelerada"]

explicacion: |
  El oxígeno era tóxico para la mayoría de las formas de vida predominantes en ese entonces, causando una extinción masiva.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "avanzado"
  tags: ["secuencia", "procesos"]

variables:
  pasos_correctos: ["Fotosíntesis oxigénica", "Saturación de sumideros de hierro", "Liberación de O2 a la atmósfera"]

enunciado: "Ordene los eventos que llevaron a la Gran Oxidación:"

respuesta: ["Fotosíntesis oxigénica", "Saturación de sumideros de hierro", "Liberación de O2 a la atmósfera"]
tipo: ordenar
opciones_explicitas: ["Fotosíntesis oxigénica", "Saturación de sumideros de hierro", "Liberación de O2 a la atmósfera", "Formación de la capa de ozono"]

explicacion: |
  Primero se produjo el oxígeno, luego este fue absorbido por minerales (hierro) y finalmente se acumuló en la atmósfera.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "avanzado"
  tags: ["quimica", "atmosfera"]

variables:
  datos: [["oxígeno", "oxidante", "oxidante"], ["oxígeno", "oxidante", "oxidante"]]
  idx: uno_de([0,1])

enunciado: "La transición de una atmósfera reductora a una oxidante fue causada por la liberación de ___ que actuó como un potente ___."

respuesta: "oxidante"
tipo: completar
respuestas_validas: ["oxidante"]

explicacion: |
  El oxígeno es un agente oxidante fuerte que cambió radicalmente el potencial redox de la atmósfera terrestre.
```

## Sección: guerra-de-malvinas (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "basico"
  tags: ["conflictos", "soberania", "1982"]

respuesta: "Argentina"
tipo: "mc"
opciones_explicitas: ["Reino Unido", "Argentina", "Chile", "Francia"]

enunciado: "La Guerra de Malvinas, iniciada en 1982, fue un conflicto armado entre ___ y el Reino Unido por la soberanía de las islas."

explicacion: |
  El conflicto se desató tras la invasión de las fuerzas argentinas a las islas, lo que provocó la respuesta militar británica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["cronologia", "eventos"]

variables:
  eventos: [
    ["Invasión de las islas", "Fuerzas argentinas ocupan las islas"],
    ["Desembarco en San Carlos", "Fuerzas británicas desembarcan en la isla"],
    ["Rendición argentina", "Fuerzas argentinas se rinden en Puerto Argentino"]
  ]
  idx: uno_de([0, 1, 2])

respuesta: eventos[idx][1
tipo: "ordenar"
opciones_explicitas: ["Invasión de las islas", "Desembarco en San Carlos", "Rendición argentina"]

enunciado: "Ordene cronológicamente los eventos clave del conflicto:"

explicacion: |
  La secuencia lógica fue la ocupación inicial, el desembarco de la Task Force británica y la rendición final.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "avanzado"
  tags: ["naval", "tactic"]

respuesta: 360
tipo: "input"
tolerancia_abs: 1

enunciado: "El crucero ARA General Belgrano fue hundido por un submarino británico el 2 de mayo de 1982. Si el submarino se encontraba a una profundidad de 200 metros y el crucero estaba en la superficie, ¿cuál es la distancia vertical (en metros) entre ambos?"

pasos:
  - "Identificar la profundidad del submarino: 200m"
  - "Identificar la posición del crucero: 0m"
  - "Calcular la diferencia: 200 - 0 = 200"

explicacion: |
  La distancia vertical es la diferencia entre la superficie (0m) y la profundidad del submarino (200m).
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["diplomacia", "soberania"]

respuesta: "soberanía"
tipo: "completar"
respuestas_validas: ["soberanía", "territorio", "recursos"]

enunciado: "El reclamo argentino por las islas se fundamenta en el principio de ___ territorial."

explicacion: |
  Argentina sostiene su derecho basado en la integridad territorial y la herencia de la corona española.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["politica", "dictadura"]

respuesta: "Junta Militar"
tipo: "mc"
opciones_explicitas: ["Gobierno Democrático", "Junta Militar", "Frente Popular", "Estado de Sitio"]

enunciado: "En 1982, la guerra se desarrolló bajo el mando de la ___ en Argentina."

explicacion: |
  El país se encontraba bajo un proceso de dictadura militar liderado por la Junta Militar en aquel entonces.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "basico"
  tags: ["soberania", "historia", "argentina"]

tipo: mc
opciones_explicitas: ["1833", "1982", "1776", "1810"]

enunciado: "El Reino Unido ocupó las Islas Malvinas de forma efectiva en el año ___."

explicacion: |
  La ocupación británica de las islas comenzó en 1833, interrumpiendo la presencia argentina en el archipiélago.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "basico"
  tags: ["derecho_internacional", "soberania"]

tipo: mc
opciones_explicitas: ["Territorial", "Económica", "Religiosa", "Cultural"]

enunciado: "El reclamo argentino sobre las Islas Malvinas es de carácter ___."

explicacion: |
  Argentina sostiene un reclamo de soberanía territorial basado en la herencia de los estados sucesores de España y la continuidad geográfica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["cronologia", "conflictos"]

variables:
  escenario: uno_de(["A", "B"])
  datos: [["1833", "Ocupación británica", "Inicio de la disputa"], ["1982", "Conflicto bélico", "Guerra de Malvinas"]]

tipo: ordenar
opciones_explicitas: ["1833", "1982", "Actualidad"]

enunciado: "Ordene cronológicamente los hitos clave de la disputa por las islas:"

explicacion: |
  La cronología marca desde la ocupación británica en 1833, pasando por el conflicto armado en 1982, hasta el reclamo diplomático actual.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "avanzado"
  tags: ["derecho_internacional", "onu"]

tipo: completar
respuestas_validas: ["integridad", "autodeterminación"]

enunciado: "Argentina sostiene que el principio de ___ territorial debe prevalecer sobre el principio de autodeterminación en el caso de las Malvinas."

explicacion: |
  Argentina argumenta que la población actual es una población implantada, por lo que el principio de autodeterminación no es aplicable, debiendo prevalecer la integridad territorial.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["guerra", "1982"]

variables:
  idx: uno_de([0, 1])
  eventos: [["desembarco", "inicio de la invasión"], ["cese", "fin de las hostilidades"]]

tipo: mc
opciones_explicitas: ["desembarco", "cese", "tratado", "armisticio"]

enunciado: "El conflicto bélico de 1982 se caracterizó por el ___ de las tropas argentinas en las islas."

explicacion: |
  El conflicto terminó con el cese de las hostilidades y la rendición de las fuerzas argentinas en junio de 1982.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "basico"
  tags: ["dictadura", "contexto"]

respuesta: "dictadura militar"
tipo: completar
respuestas_validas: ["dictadura militar"]

enunciado: "En 1982, Argentina se encontraba bajo el gobierno de una ___ que enfrentaba una profunda crisis interna."

explicacion: |
  La última dictadura militar argentina buscaba recuperar legitimidad mediante una acción bélica ante el desgaste social y económico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["legitimidad", "objetivos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario: [[ "reforzar la legitimidad", "recuperar el apoyo popular" ], [ "distraer de la crisis", "ocultar el malestar social" ]]

respuesta: escenario[escenario_idx][1
tipo: mc
opciones_explicitas: ["reforzar la legitimidad", "recuperar el apoyo popular", "ocultar el malestar social", "evitar la crisis económica"]

enunciado: "Uno de los objetivos estratégicos de la junta militar al ordenar el desembarco en las islas era ___."

explicacion: |
  La dictadura intentó utilizar el conflicto bélico para generar un sentimiento de unidad nacional y así ___."
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["cronologia", "fechas"]

respuesta: ["Crisis interna de la dictadura", "Orden de desembarco", "Inicio de la guerra"]
tipo: ordenar
opciones_explicitas: ["Crisis interna de la dictadura", "Orden de desembarco", "Inicio de la guerra"]

enunciado: "Ordene cronológicamente los hechos que llevaron al conflicto de 1982:"

explicacion: |
  Primero existió una crisis de legitimidad, luego la junta ordenó el desembarco en abril y finalmente se inició el conflicto armado.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "avanzado"
  tags: ["causas", "crisis"]

respuesta: "crisis"
tipo: mc
opciones_explicitas: ["crisis", "estabilidad", "bonanza", "prosperidad"]

enunciado: "El contexto socio-político de Argentina en abril de 1982 se caracterizaba por una profunda ___."

explicacion: |
  La crisis política y económica de la dictadura fue un motor fundamental para la decisión de iniciar el conflicto en las islas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["junta_militar", "decisión"]

respuesta: "abril 1982"
tipo: completar
respuestas_validas: ["abril 1982"]

enunciado: "La orden de desembarco en las islas Malvinas se produjo en ___."

explicacion: |
  El desembarco ocurrió en abril de 1982, marcando el inicio de la disputa armada con el Reino Unido.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["politica", "dictadura", "democracia"]

respuesta: "aceleró"
tipo: completar
respuestas_validas: ["aceleró", "acelerar", "aceleración"]

enunciado: "La derrota militar argentina en la guerra de Malvinas en junio de 1982 ___ el proceso de deslegitimación de la Junta Militar y ___ el retorno a la democracia en 1983."

explicacion: |
  La derrota bélica destruyó el prestigio de la Junta Militar, que había iniciado el conflicto para consolidar su poder, acelerando la crisis del régimen y la transición democrática.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "basico"
  tags: ["consecuencias", "dictadura"]

opciones_explicitas: ["Consolidación de la dictadura", "Crisis del régimen militar", "Guerra civil inmediata", "Alianza con el Reino Unido"]
respuesta: "Crisis del régimen militar"
tipo: mc

enunciado: "¿Cuál fue la principal consecuencia política interna de la derrota en Malvinas para el gobierno de facto?"

explicacion: |
  La pérdida de la guerra expuso la incapacidad de gestión de la dictadura, provocando una crisis de autoridad que hizo insostenible la continuidad del mando militar.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["democracia", "elecciones"]

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["Dictadura", "Democracia"]

enunciado: "Tras la derrota en Malvinas, el proceso político argentino se desplazó desde el mando de una {datos[idx][0]} hacia la restauración de la {datos[idx][1]} en 1983."

pasos:
  - "Analizar el cambio de régimen tras la crisis de junio de 1982."
  - "Identificar el sistema de gobierno que se restauró en 1983."

explicacion: |
  La transición democrática fue impulsada por el vacío de poder y la presión social surgida tras el fracaso bélico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "avanzado"
  tags: ["orden", "cronologia"]

opciones_explicitas: ["Conflicto bélico", "Retorno a la democracia", "Inicio de la dictadura"]
respuesta: ["Inicio de la dictadura", "Conflicto bélico", "Retorno a la democracia"]
tipo: ordenar

enunciado: "Ordene cronológicamente los siguientes hitos de la historia argentina reciente:"

explicacion: |
  La secuencia correcta es: Golpe de Estado (1976), Guerra de Malvinas (1982) y Elecciones de 1983.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["legitimidad", "juicio"]

respuesta: 0
tipo: completar
tolerancia_abs: 0

enunciado: "En una escala del 0 al 10, donde 0 es 'nula' y 10 es 'total', ¿cómo se podría calificar la legitimidad política que la Junta Militar intentó recuperar tras la derrota? (Responda con el número 0 para indicar que fue nula)"

explicacion: |
  La derrota eliminó cualquier base de apoyo social para la Junta, dejando su legitimidad en un nivel prácticamente nulo (0).
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "basico"
  tags: ["cronologia", "conflicto"]

variables:
  escenario: uno_de([[2, "2 de abril de 1982"], [1, "1 de abril de 1982"]])
  fecha_evento: escenario[0]

respuesta: fecha_evento
tipo: completar
respuestas_validas: ["2 de abril de 1982", "1 de abril de 1982"]

enunciado: "La operación de desembarco de las fuerzas argentinas en las islas Malvinas tuvo lugar el ___."

explicacion: |
  El desembarco de las fuerzas argentinas en las islas Malvinas ocurrió el 2 de abril de 1982, marcando el inicio del conflicto bélico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["hechos", "maritimo"]

variables:
  escenario: uno_de([[0, "2 de mayo de 1982"], [1, "25 de mayo de 1982"]])
  fecha_hundimiento: escenario[0]

respuesta: fecha_hundimiento
tipo: completar
respuestas_validas: ["2 de mayo de 1982", "25 de mayo de 1982"]

enunciado: "El hundimiento del crucero ARA General Belgrano por parte de un submarino británico ocurrió el ___."

explicacion: |
  El ataque al crucero General Belgrano fue uno de los eventos más significativos del conflicto, ocurrido el 2 de mayo de 1982.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "avanzado"
  tags: ["ordenar", "cronologia"]

variables:
  orden_correcta: ["Desembarco en las islas", "Hundimiento del Belgrano", "Rendición argentina"]

respuesta: orden_correcta
tipo: ordenar
opciones_explicitas: ["Desembarco en las islas", "Hundimiento del Belgrano", "Rendición argentina", "Firma de la cesación de hostilidades"]

enunciado: "Ordene cronológicamente los siguientes hitos de la guerra:"

explicacion: |
  La secuencia correcta es: Desembarco (2 de abril), Hundimiento del Belgrano (2 de mayo) y la Rendición (14 de junio).
```

```
metadata:
  materia: "historia_profucha"
  tema: "guerra_de_malvinas"
  nivel: "basico"
  tags: ["final", "rendicion"]

variables:
  escenario: uno_de([[0, "14 de junio de 1982"], [1, "2 de abril de 1982"]])
  fecha_final: escenario[0]

respuesta: fecha_final
tipo: completar
respuestas_validas: ["14 de junio de 1982", "2 de abril de 1982"]

enunciado: "La firma de la rendición de las fuerzas argentinas en las islas Malvinas se produjo el ___."

explicacion: |
  El conflicto terminó formalmente el 14 de junio de 1982 con la rendición de las fuerzas argentinas ante las británicas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["inicio", "fecha"]

variables:
  escenario: uno_de([[0, "2 de abril de 1982"], [1, "1 de mayo de 1982"]])
  fecha_inicio: escenario[0]

respuesta: fecha_inicio
tipo: mc
opciones_explicitas: ["2 de abril de 1982", "1 de mayo de 1982", "2 de mayo de 1982", "14 de junio de 1982"]

enunciado: "¿En qué fecha se produjo el desembarco argentino que dio inicio al conflicto?"

explicacion: |
  El conflicto bélico comenzó con el desembarco argentino el 2 de abril de 1982.
```
