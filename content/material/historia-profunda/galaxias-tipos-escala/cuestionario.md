# Historia Profunda — Galaxias tipos escala (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — ¿Qué es una galaxia?

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "basico"
  tags: ["definicion", "astronomia"]

tipo: mc
opciones_explicitas: ["Un conjunto de planetas que orbitan una estrella", "Un sistema masivo de estrellas, gas, polvo y materia oscura unidos por la gravedad", "Un cúmulo de agujeros negros en el centro del universo", "Una nube de gas que colapsa para formar una estrella"]
respuesta: "Un sistema masivo de estrellas, gas, polvo y materia oscura unidos por la gravedad"
enunciado: "En términos astronómicos, ¿qué constituye fundamentalmente una galaxia?"
explicacion: |
  Una galaxia es un sistema masivo que contiene estrellas, gas, polvo y una gran cantidad de materia oscura, todo mantenido unido por la fuerza de la gravedad.
```

### 2 — Nuestra galaxia

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "basico"
  tags: ["via_lactea", "ubicacion"]

tipo: completar
respuestas_validas:
  - "Vía Láctea"
  - "Andrómeda"
  - "Sagitario"

enunciado: "El nombre de nuestra galaxia, el sistema donde se encuentra el Sistema Solar, es la ___."

explicacion: |
  Nosotros habitamos la Vía Láctea, una galaxia de tipo espiral.
```

### 3 — Componentes galácticos

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "intermedio"
  tags: ["componentes", "gravedad"]

variables:
  componentes: ["estrellas", "gas", "polvo", "materia oscura"]

tipo: mc
opciones_explicitas: ["Solo estrellas y planetas", "Estrellas, gas, polvo y materia oscura", "Solo materia oscura y agujeros negros", "Solo gas y polvo estelar"]
respuesta: "Estrellas, gas, polvo y materia oscura"

enunciado: "Considerando los componentes de una galaxia: {componentes[0]}, {componentes[1]}, {componentes[2]}, ¿cuál es el cuarto elemento esencial que aporta la mayor parte de la masa?"

explicacion: |
  La materia oscura es un componente fundamental que no emite luz pero ejerce la gravedad necesaria para mantener la estructura galáctica.
```

### 4 — Escala de la materia

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
respuesta_orden: ["Planeta", "Sistema Solar", "Galaxia", "Universo"]
```

### 5 — La fuerza de unión

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

respuesta: "gravedad"
```

### 6 — Clasificación por forma

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

### 7 — La forma de las elípticas

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

### 8 — Galaxias sin estructura

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

### 9 — Identificación de la Vía Láctea

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "intermedio"
  tags: ["astronomia", "galaxias"]

variables:
  idx: uno_de([0, 1, 2])
  escenario: [["espiral", "brazos"], ["elíptica", "forma ovalada"], ["irregular", "sin forma definida"]]

respuesta: escenario[idx][0]
tipo: mc
opciones_explicitas: ["espiral", "elíptica", "irregular"]

enunciado: "Considerando que la Vía Láctea tiene una estructura de {escenario[idx][1]}, ¿qué tipo de galaxia es?"

explicacion: |
  La Vía Láctea es una galaxia de tipo {escenario[idx][0]}.
```

### 10 — Completar clasificación

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "intermedio"
  tags: ["astronomia", "galaxias"]

respuesta: "espiral, elíptica, irregular"
tipo: completar
respuestas_validas:
  - "espiral, elíptica, irregular"
  - "espiral, irregular, elíptica"

enunciado: "El orden de los tres principales tipos de galaxias según su morfología es: 1) ___, 2) ___ y 3) ___."

explicacion: |
  La clasificación morfológica clásica divide a las galaxias principalmente en espirales, elípticas e irregulares.
```

### 11 — La unidad de medida cósmica

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "basico"
  tags: ["astronomia", "unidades"]

tipo: mc
opciones_explicitas: ["Año luz", "Kilómetro", "Milla náutica", "Unidad Astronómica"]
respuesta: "Año luz"

enunciado: "Debido a que las distancias entre las galaxias son inmensas, los kilómetros resultan inmanejables. ¿Cuál es la unidad de medida que representa la distancia que recorre la luz en un año?"

explicacion: |
  El año luz es la unidad estándar para medir distancias interestelares e intergalácticas, ya que un kilómetro es una medida demasiado pequeña para escalas cósmicas.
```

### 12 — Cálculo de distancia lumínica

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
  distancia_anio_luz_km: 9460730472580.8

tipo: completar
tolerancia_abs: 1000000000000

enunciado: "Si la luz viaja a aproximadamente {velocidad_luz_km_s} km/s, ¿cuántos kilómetros recorre aproximadamente en un año (considerando {dias_en_un_anio} días)? (Calcula el valor aproximado en km)"

pasos:
  - "Multiplica la velocidad de la luz por los segundos en un día."
  - "Multiplica el resultado por la cantidad de días en un año."

respuesta: distancia_anio_luz_km

explicacion: |
  La distancia es: 299792 * 86400 * 365.25 ≈ 9.46 * 10^12 km.
```

### 13 — El concepto de escala

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "basico"
  tags: ["conceptos"]

tipo: completar
respuestas_validas:
  - "inmanejables"
  - "imposibles"
  - "infinitas"

enunciado: "El uso de unidades como el año luz es necesario porque las distancias en kilómetros son ________ para el estudio de la escala galáctica."

explicacion: |
  En astronomía, las escalas humanas (como el km) pierden utilidad práctica cuando se trata de distancias entre sistemas estelares.
```

### 14 — Relación de magnitudes

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "intermedio"
  tags: ["comparacion"]

variables:
  escenario: uno_de([["La Luna", "distancia corta"], ["Andrómeda", "distancia larga"]])

tipo: mc
opciones_explicitas: ["distancia corta", "distancia larga"]

enunciado: "Dependiendo de la escala, la distancia a {escenario[0]} se mide en kilómetros, mientras que la distancia a {escenario[1]} se mide en ________."

respuesta: escenario[1]

explicacion: |
  La Luna está a unos 384,400 km (escala local), mientras que la Galaxia de Andrómeda está a millones de años luz (escala galáctica).
```

### 15 — Secuencia de escalas

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
respuesta_orden: ["Sistema Solar", "Galaxia", "Universo Observable"]
```

### 16 — Magnitud de la Vía Láctea

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "basico"
  tags: ["vía_láctea", "estrellas"]

respuesta: "cientos de miles de millones"
tipo: completar
respuestas_validas:
  - "cientos de miles de millones"

enunciado: "Se estima que nuestra galaxia, la Vía Láctea, contiene ___ de estrellas."

explicacion: |
  La Vía Láctea es una galaxia espiral que alberga una cantidad masiva de astros, estimándose en cientos de miles de millones de estrellas.
```

### 17 — Escala del Universo Observable

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

### 18 — Comparación de Escalas

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "intermedio"
  tags: ["comparacion", "magnitud"]

variables:
  caso: uno_de([0, 1])
  tabla: [["mayor", "mayor"], ["menor", "menor"]]

respuesta: tabla[caso][0]
tipo: mc
opciones_explicitas: ["mayor", "menor", "igual"]

enunciado: "Si comparamos la cantidad de estrellas en la Vía Láctea con la cantidad de galaxias en el universo observable, la cantidad de estrellas es {tabla[caso][0]} que la de galaxias."

explicacion: |
  Aunque ambas cifras son de "cientos de miles de millones", la escala de estrellas en una sola galaxia es comparable a la escala de galaxias en el universo, pero matemáticamente la cantidad de estrellas es órdenes de magnitud superior a la de galaxias.
```

### 19 — Orden de Magnitud

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "avanzado"
  tags: ["jerarquia", "escala"]

respuesta_orden: ["Estrellas", "Galaxias", "Universo"]
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

### 20 — Veracidad de Escalas

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "basico"
  tags: ["verdadero_falso"]

tipo: vf
respuesta: verdadero

enunciado: "Es correcto afirmar que el universo observable contiene cientos de miles de millones de galaxias."

explicacion: |
  Las estimaciones astronómicas actuales sitúan la cantidad de galaxias en el universo observable en el orden de cientos de miles de millones.
```

### 21 — Identificación de Galaxia Espiral

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "basico"
  tags: ["astronomia", "galaxias"]

variables:
  escenario: [[ "Una galaxia con un núcleo brillante y brazos curvos llenos de gas y polvo.", "Espiral" ], [ "Una galaxia con forma de disco pero sin brazos definidos.", "Lenticular" ], [ "Una galaxia con forma de esfera sin estructura de brazos.", "Elíptica" ]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Espiral", "Lenticular", "Elíptica"]

enunciado: "Se observa una estructura galáctica con las siguientes características: {escenario[idx][0]}"

explicacion: |
  La morfología de una galaxia se determina por su estructura visual. En este caso, la presencia de brazos y gas es característica de la tipo {escenario[idx][1]}.
```

### 22 — Clasificación por Forma Elíptica

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "basico"
  tags: ["astronomia", "galaxias"]

variables:
  escenario: [[ "Un sistema estelar masivo con forma de ovoide y poco gas.", "Elíptica" ], [ "Un sistema con un disco central y brazos de formación estelar.", "Espiral" ]]
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Espiral", "Elíptica"]

enunciado: "Si una galaxia presenta una forma ovoide, carece de brazos espirales y tiene una cantidad mínima de gas interestelar, su tipo es: {escenario[idx][1]}"

explicacion: |
  Las galaxias {escenario[idx][1]} se caracterizan por su falta de estructura de brazos y su forma redondeada o elíptica.
```

### 23 — Galaxias Lenticulares

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "intermedio"
  tags: ["astronomia", "galaxias"]

variables:
  escenario: uno_de([["Presenta un disco prominente pero carece de brazos espirales.", "Lenticular"], ["Presenta brazos espirales muy marcados.", "Espiral"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Lenticular", "Espiral"]

enunciado: "Al analizar la morfología de la galaxia {escenario[0]}, ¿qué tipo de galaxia estamos observando?"

explicacion: |
  Las galaxias lenticulares son un caso intermedio: tienen la forma de un disco como las espirales, pero no poseen los brazos característicos.
```

### 24 — Completar la descripción morfológica

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "intermedio"
  tags: ["astronomia", "galaxias"]

variables:
  escenario: [[ "Espiral", "brazos curvos" ], [ "Elíptica", "forma esférica" ], [ "Lenticular", "disco sin brazos" ]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas:
  - "brazos curvos"
  - "forma esférica"
  - "disco sin brazos"

enunciado: "Una galaxia de tipo {escenario[idx][0]} se caracteriza principalmente por tener ___."

explicacion: |
  La descripción de la galaxia {escenario[idx][0]} corresponde a la característica de {escenario[idx][1]}.
```

### 25 — Ordenar la escala de complejidad estructural

```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "avanzado"
  tags: ["astronomia", "galaxias"]

variables:
  orden_correcto: ["Elíptica", "Lenticular", "Espiral"]

respuesta_orden: orden_correcto
tipo: ordenar
opciones_explicitas: ["Elíptica", "Lenticular", "Espiral"]

enunciado: "Ordene los siguientes tipos de galaxias de menor a mayor complejidad estructural (desde la más simple/esférica a la más compleja/con brazos):"

explicacion: |
  La secuencia correcta es {orden_correcto}, partiendo de la forma más simple (elíptica) hasta la más estructurada (espiral).
```
