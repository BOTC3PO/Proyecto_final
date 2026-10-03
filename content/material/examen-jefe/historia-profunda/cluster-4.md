# Examen jefe — [PENDIENTE #684]

> Logro #684. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **124 preguntas totales** en 5/5 secciones.

---

## Sección: tabla-periodica-nivel2-cosmologico (25 preguntas)

```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "intermedio"
  tags: ["big_bang", "hidrogeno", "helio"]

respuesta: "Big Bang"
tipo: mc

enunciado: "Los elementos más abundantes del universo, como el Hidrógeno y el Helio, se formaron principalmente durante el ___."

opciones_explicitas: ["Big Bang", "Fusión Estelar"]

explicacion: |
  El Big Bang ocurrió hace aproximadamente 13.800 millones de años, liberando protones y neutrones que formaron los núcleos de los elementos más ligeros.
```

```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "intermedio"
  tags: ["estrellas", "fusion"]

respuesta: "fusión"
tipo: completar
respuestas_validas:
  - "fusión"
  - "fision"

enunciado: "En el núcleo de una estrella, la combinación de núcleos ligeros para formar elementos más pesados se denomina proceso de ________."

explicacion: |
  La fusión nuclear es el proceso donde núcleos atómicos se unen para formar un núcleo más pesado, liberando una enorme cantidad de energía.
```

```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_supernova"
  nivel: "avanzado"
  tags: ["supernova", "elementos_pesados"]

respuesta: "Supernovas"
tipo: mc

enunciado: "Los elementos más pesados que el hierro, como el oro o el uranio, se originan principalmente en eventos de ________."

opciones_explicitas: ["Supernovas", "Enanas Blancas"]

explicacion: |
  Las explosiones de supernovas y la colisión de estrellas de neutrones proporcionan la energía necesaria para la nucleosíntesis de elementos muy pesados.
```

```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "avanzado"
  tags: ["orden", "procesos"]

respuesta_orden: ["Big Bang", "Fusión Estelar", "Supernovas"]
tipo: ordenar
opciones_explicitas: ["Big Bang", "Fusión Estelar", "Supernovas"]

enunciado: "Ordena los procesos de nucleosíntesis según su orden cronológico en la historia del universo (del más antiguo al más reciente):"

explicacion: |
  Primero ocurrió el Big Bang (H, He), luego la fusión en el interior de las estrellas (C, O, Ne, etc.) y finalmente las explosiones estelares para elementos pesados.
```

```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "avanzado"
  tags: ["hierro", "energia"]

respuesta: 26
tipo: completar
tolerancia_abs: 0.01

enunciado: "En una estrella masiva, la fusión de elementos se detiene cuando se llega al núcleo de hierro (Fe). ¿Cuál es el número atómico (Z) del hierro?"

explicacion: |
  El hierro tiene un número atómico de 26. La fusión de elementos más pesados que el hierro requiere un aporte neto de energía en lugar de liberarla, lo que lleva al colapso de la estrella.
```

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_nivel2_cosmologico"
  nivel: "basico"
  tags: ["big_bang", "hidrogeno", "helio"]

respuesta: "Big Bang"
tipo: completar
respuestas_validas:
  - "Big Bang"

enunciado: "El hidrógeno y el helio son los elementos más abundantes del universo y su origen se remonta al ___."

explicacion: |
  En los primeros minutos del universo, la nucleosíntesis primordial produjo principalmente núcleos de hidrógeno y helio.
```

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_nivel2_cosmologico"
  nivel: "intermedio"
  tags: ["estrellas", "nucleosintesis", "elementos_pesados"]

variables:
  datos: [["estrellas", "elementos pesados"], ["big bang", "hidrógeno"], ["supernovas", "metales"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["elementos pesados", "hidrógeno", "metales"]

enunciado: "Si el hidrógeno y el helio provienen del Big Bang, ¿de dónde proviene la mayoría de los elementos más complejos de la tabla periódica?"

explicacion: |
  Las estrellas actúan como reactores nucleares que fusionan elementos ligeros para crear elementos más pesados.
```

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_nivel2_cosmologico"
  nivel: "basico"
  tags: ["abundancia", "hidrogeno", "helio"]

variables:
  datos: [["Hidrógeno", 1], ["Helio", 2]]
  idx: uno_de([0,1])

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["Hidrógeno", "Helio", "Carbono", "Oxígeno"]

enunciado: "Considerando la abundancia en el universo, si el elemento seleccionado es el {datos[idx][0]}, este es el más abundante."

explicacion: |
  El hidrógeno es el elemento número uno en abundancia cósmica, seguido por el helio.
```

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_nivel2_cosmologico"
  nivel: "avanzado"
  tags: ["orden", "evolucion_estelar"]

respuesta_orden: ["Big Bang", "Formación de estrellas", "Fusión estelar", "Supernovas"]
tipo: ordenar
opciones_explicitas: ["Big Bang", "Formación de estrellas", "Fusión estelar", "Supernovas"]

enunciado: "Ordena cronológicamente los eventos que explican la presencia de elementos pesados en el universo:"

explicacion: |
  Primero surge la materia básica en el Big Bang, luego se forman las estrellas donde ocurre la fusión, y finalmente las explosiones estelares dispersan los elementos pesados.
```

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_nivel2_cosmologico"
  nivel: "basico"
  tags: ["atomo", "proton"]

variables:
  datos: [["Hidrógeno", 1], ["Helio", 2]]
  idx: uno_de([0,1])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]

tipo: completar
tolerancia_abs: 0

enunciado: "Un átomo de {datos[idx][0]} en su estado fundamental tiene exactamente {datos[idx][1]} protones en su núcleo."

explicacion: |
  El número atómico define la cantidad de protones. El hidrógeno tiene 1 y el helio tiene 2.
```

```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "intermedio"
  tags: ["astrofisica", "elementos_pesados"]

variables:
  escenario_idx: uno_de([0,1])
  escenarios: [["supernova", "colisión de estrellas de neutrones"], ["estrellas de neutrones", "supernovas"]]

enunciado: "Los elementos más pesados que el hierro, como el oro o el uranio, no se forman en estrellas comunes, sino que requieren eventos cataclísmicos como una {escenarios[escenario_idx][0]}."

respuesta: escenarios[escenario_idx][0]
tipo: mc
opciones_explicitas: ["supernova", "estrellas de neutrones", "fusiones de helio", "fusión estelar ordinaria"]

explicacion: |
  La nucleosíntesis de elementos más pesados que el hierro requiere un flujo masivo de neutrones (proceso r), algo que solo ocurre en eventos de altísima energía como supernovas o la fusión de estrellas de neutrones.
```

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_cosmologica"
  nivel: "basico"
  tags: ["elementos", "pesados"]

enunciado: "Completa la siguiente afirmación: El elemento con símbolo 'Au' es el ___."

respuestas_validas:
  - "oro"
tipo: completar

explicacion: |
  El oro (Au) es un elemento pesado cuya formación requiere eventos de nucleosíntesis explosiva.
```

```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "avanzado"
  tags: ["nucleosintesis", "proceso_r"]

enunciado: "Ordena cronológicamente los procesos de formación de elementos pesados en el universo, desde la formación de estrellas masivas hasta la formación de elementos extremadamente pesados en eventos cataclísmicos:"

opciones_explicitas: ["Fusión de hidrógeno", "Fusión de elementos en núcleo estelar", "Explosión de supernova", "Fusión de estrellas de neutrones"]
respuesta_orden: ["Fusión de hidrógeno", "Fusión de elementos en núcleo estelar", "Explosión de supernova", "Fusión de estrellas de neutrones"]
tipo: ordenar

explicacion: |
  La evolución estelar comienza con la fusión de hidrógeno, sigue con elementos más pesados en el núcleo, culmina en la supernova y, finalmente, los eventos más extremos como la fusión de estrellas de neutrones crean los elementos más pesados.
```

```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "intermedio"
  tags: ["uranio", "astrofisica"]

enunciado: "El uranio es un elemento que puede formarse mediante la fusión de helio en el núcleo de una estrella de la secuencia principal."

respuesta: falso
tipo: vf

explicacion: |
  Falso. El uranio es un elemento muy pesado que requiere procesos de captura rápida de neutrones (proceso r) en eventos energéticos, no la fusión de helio.
```

```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "intermedio"
  tags: ["masa", "isotopos"]

variables:
  elemento_idx: uno_de([0,1])
  datos: [[197, "oro"], [238, "uranio"]]

enunciado: "Si un evento de estrella de neutrones produce un isótopo de {datos[elemento_idx][1]}, su masa atómica aproximada es de {datos[elemento_idx][0]} u."

respuesta: datos[elemento_idx][0]
tipo: completar
tolerancia_abs: 0

explicacion: |
  El valor corresponde a la masa atómica aproximada del elemento seleccionado en el escenario.
```

```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "intermedio"
  tags: ["astroquimica", "elementos"]

variables:
  elemento_idx: uno_de([0, 1, 2])
  elementos: ["carbono", "oxígeno", "hierro"]

respuesta: elementos[elemento_idx]
tipo: mc
opciones_explicitas: ["carbono", "oxígeno", "hierro", "helio"]

enunciado: "El {elementos[elemento_idx]} que forma parte de las moléculas orgánicas de tu cuerpo se originó mediante la fusión en el núcleo de una estrella masiva."

explicacion: |
  La nucleosíntesis estelar es el proceso mediante el cual los elementos más pesados que el hidrógeno y el helio se crean por fusión en el interior de las estrellas.
```

```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "avanzado"
  tags: ["supernova", "nucleosintesis"]

respuesta: "el hierro"
tipo: completar
respuestas_validas:
  - "el hierro"

enunciado: "Cuando una estrella masiva colapsa en una supernova, libera en el espacio elementos pesados como ___."

explicacion: |
  Las estrellas masivas sintetizan elementos hasta el hierro antes de explotar en una supernova, dispersando estos elementos por el cosmos.
```

```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "basico"
  tags: ["elementos", "polvo_de_estrellas"]

tipo: completar
respuesta: "fusión"
enunciado: "Los átomos de los elementos pesados en nuestro cuerpo fueron creados mediante el proceso de ___ nuclear en el interior de estrellas antiguas."

explicacion: |
  La fusión nuclear es el proceso donde núcleos ligeros se unen para formar núcleos más pesados, liberando energía.
```

```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "avanzado"
  tags: ["secuencia", "fusión"]

opciones_explicitas: ["Hidrógeno -> Helio -> Carbono -> Oxígeno -> Hierro", "Helio -> Hidrógeno -> Carbono -> Hierro", "Hidrógeno -> Helio -> Oxígeno -> Carbono -> Hierro"]

respuesta: "Hidrógeno -> Helio -> Carbono -> Oxígeno -> Hierro"
tipo: mc

enunciado: "Ordena la secuencia lógica de la nucleosíntesis estelar que permite la formación de elementos pesados en una estrella masiva:"

explicacion: |
  Las estrellas comienzan fusionando hidrógeno a helio, luego helio a carbono, y continúan con elementos cada vez más pesados hasta llegar al hierro.
```

```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "intermedio"
  tags: ["hierro", "estrellas"]

respuesta: verdadero

tipo: vf

enunciado: "Considerando que el hierro es un elemento producido por la fusión estelar, ¿es cierto que su origen es estelar?"

explicacion: |
  El hierro se forma exclusivamente mediante fusión en el interior de estrellas masivas, a diferencia del hidrógeno o el helio, que son mayoritariamente de origen primordial (Big Bang).
```

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_nivel2_cosmologico"
  nivel: "basico"
  tags: ["nucleosintesis", "big_bang"]

variables:
  escenario: [[ "Hidrógeno", "Big Bang" ]]
  idx: uno_de([0])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Big Bang", "Fusión estelar", "Supernova"]

enunciado: "El elemento {escenario[idx][0]} es el más abundante del universo y su origen principal se remonta al ___."

explicacion: |
  El Hidrógeno se formó durante la nucleosíntesis primordial, pocos minutos después del Big Bang.
```

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_nivel2_cosmologico"
  nivel: "intermedio"
  tags: ["fusion_estelar", "elementos"]

variables:
  escenario: [["Helio", "Big Bang"], ["Carbono", "Fusión estelar"], ["Hierro", "Fusión estelar"]]
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Big Bang", "Fusión estelar", "Supernova"]

enunciado: "El elemento {escenario[idx][0]} se sintetiza principalmente mediante procesos de ___ en el núcleo de las estrellas."

explicacion: |
  La fusión estelar es el proceso donde elementos más ligeros se combinan para formar otros más pesados en el núcleo estelar.
```

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_nivel2_cosmologico"
  nivel: "avanzado"
  tags: ["supernova", "elementos_pesados"]

variables:
  escenario: [["Oro", "Supernova"], ["Plata", "Supernova"], ["Uranio", "Supernova"]]
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas:
  - "Supernova"

enunciado: "Los elementos muy pesados como el {escenario[idx][0]} se originan mayoritariamente durante una ___."

explicacion: |
  Las explosiones de supernova proporcionan la energía y el flujo de neutrones necesarios para la nucleosíntesis de elementos más allá del hierro.
```

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_nivel2_cosmologico"
  nivel: "intermedio"
  tags: ["procesos", "nucleosintesis"]

respuesta_orden: ["Big Bang", "Fusión estelar", "Supernova"]
tipo: ordenar
opciones_explicitas: ["Big Bang", "Fusión estelar", "Supernova"]

enunciado: "Ordena cronológicamente los procesos de nucleosíntesis según el orden de aparición de los elementos en el universo:"

explicacion: |
  Primero ocurrió la nucleosíntesis del Big Bang, luego la fusión en estrellas de la secuencia principal y finalmente las explosiones de supernova.
```

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_nivel2_cosmologico"
  nivel: "avanzado"
  tags: ["nucleosintesis", "identificacion"]

variables:
  escenario: uno_de([["Litio-7", "Big Bang"], ["Oxígeno", "Fusión estelar"], ["Plomo", "Supernova"]])

respuesta: verdadero
tipo: vf

enunciado: "El origen del {escenario[0]} es la {escenario[1]}."

explicacion: |
  La afirmación es verdadera según el escenario seleccionado.
```

## Sección: tierra-primitiva-diferenciacion (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "basico"
  tags: ["acreción", "planetesimales"]

tipo: mc
opciones_explicitas: ["Acreción de planetesimales", "Colisión con un planeta gigante", "Condensación de gases estelares", "Fusión de un cometa"]

enunciado: "La Tierra primitiva se formó hace aproximadamente 4600 millones de años mediante un proceso llamado ___."

respuesta: "Acreción de planetesimales"

explicacion: |
  La Tierra se formó por la acumulación gravitatoria de cuerpos menores (planetesimales) en el disco protoplanetario.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "basico"
  tags: ["calor", "estado_fisico"]

tipo: completar
respuestas_validas:
  - "fundido"

enunciado: "Debido a los impactos constantes y el calor radiactivo, la Tierra primitiva se encontraba en un estado casi ___."

respuesta: "fundido"

explicacion: |
  El calor generado por el bombardeo de planetesimales y la desintegración de isótopos radiactivos mantuvo el manto y el núcleo en un estado fundido o casi fundido.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["calor_radiactivo", "impactos"]

tipo: mc
opciones_explicitas: ["Calor por impactos y calor radiactivo", "Calor por mareas lunares", "Calor por actividad volcánica superficial", "Calor por radiación solar directa"]

enunciado: "¿Cuáles fueron las dos fuentes principales de calor que mantuvieron la Tierra primitiva en un estado fundido?"

respuesta: "Calor por impactos y calor radiactivo"

explicacion: |
  La energía cinética de los impactos de planetesimales se transformó en calor, sumado al calor liberado por la desintegración de elementos radiactivos como el Al-26 y el U-235.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "avanzado"
  tags: ["diferenciación", "núcleo", "manto"]

tipo: ordenar
opciones_explicitas: ["Fusión de la roca", "Separación de elementos densos (hierro)", "Formación del núcleo y manto", "Estabilización de la corteza"]

enunciado: "Ordena cronológicamente los procesos que llevaron a la diferenciación planetaria:"

respuesta_orden: ["Fusión de la roca", "Separación de elementos densos (hierro)", "Formación del núcleo y manto", "Estabilización de la corteza"]

explicacion: |
  Primero la roca debe fundirse; luego los elementos pesados como el hierro descienden al centro, formando el núcleo, mientras los ligeros forman el manto, culminando con la solidificación de la corteza.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["elementos", "densidad"]

variables:
  idx: uno_de([0, 1])
  datos: [["hierro", "núcleo"], ["silicatos", "manto"]]

tipo: completar
respuestas_validas:
  - "hierro"
  - "silicatos"
respuesta: datos[idx][1]

enunciado: "Durante la diferenciación, los elementos más densos como el ___ migraron hacia el centro, mientras que los elementos más ligeros como los ___ formaron las capas superiores."

pasos:
  - "Identificar el elemento que baja por densidad"
  - "Identificar el material que queda en la superficie"

explicacion: |
  La gravedad separa los materiales por densidad: el hierro (denso) va al núcleo y los silicatos (menos densos) al manto y corteza.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "basico"
  tags: ["diferenciacion", "nucleo", "densidad"]

respuesta: "hierro y níquel"
tipo: completar
respuestas_validas:
  - "hierro y níquel"
  - "hierro, níquel"

enunciado: "Durante la etapa de océano de magma, los elementos más densos como el ___ se hundieron hacia el centro para formar el núcleo."

explicacion: |
  Debido a la gravedad, los materiales con mayor densidad (metales pesados) migraron hacia el centro del planeta, proceso conocido como diferenciación por gravedad.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "basico"
  tags: ["capas", "silicatos", "manto"]

respuesta: "silicatos"
tipo: mc
opciones_explicitas: ["silicatos", "hierro", "níquel", "magnesio"]

enunciado: "¿Qué tipo de materiales predominan en las capas externas (manto y corteza) debido a su baja densidad en comparación con los metales?"

explicacion: |
  Los silicatos son minerales menos densos que los metales, por lo que flotaron hacia la superficie durante la diferenciación planetaria.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["proceso", "magma", "gravedad"]

respuesta_orden: ["Estado fundido", "Diferenciación por densidad", "Formación de capas"]
tipo: ordenar
opciones_explicitas: ["Estado fundido", "Diferenciación por densidad", "Formación de capas"]

enunciado: "Ordena cronológicamente los eventos que permitieron la estructura actual de la Tierra:"

explicacion: |
  Primero la Tierra debe estar fundida (oceano de magma), luego la gravedad actúa separando materiales por peso, resultando en la estructura de capas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["densidad", "correlacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["núcleo", "alta densidad", "hierro"], ["corteza", "baja densidad", "silicatos"]]

respuesta: datos[escenario_idx][2]
tipo: mc
opciones_explicitas: ["hierro", "silicatos", "magnesio", "aluminio"]

enunciado: "Si analizamos la {datos[escenario_idx][0]}, que se caracteriza por tener una {datos[escenario_idx][1]}, el elemento principal que la compone es el ___."

explicacion: |
  La posición de un material en la Tierra primitiva dependía directamente de su densidad: lo más denso abajo, lo menos denso arriba.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "avanzado"
  tags: ["estado_fisico", "condicion"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es verdadero o falso que la diferenciación planetaria requiere que la Tierra se encuentre en un estado fundido o parcialmente fundido para que los materiales se muevan por gravedad?"

explicacion: |
  Sin un estado líquido o viscoso (magma), los materiales sólidos no podrían migrar a través de la masa planetaria para separarse por densidad.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "basico"
  tags: ["geologia", "densidad"]

tipo: mc
opciones_explicitas: ["Núcleo", "Manto", "Corteza"]

enunciado: "Durante la diferenciación planetaria, los materiales más densos se hundieron hacia el centro de la Tierra, formando la capa más interna conocida como la ___."

respuesta: "Núcleo"

explicacion: |
  La gravedad hizo que los elementos más pesados (como el hierro y el níquel) migraran hacia el centro, formando el núcleo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "basico"
  tags: ["densidad", "orden"]

tipo: ordenar
opciones_explicitas: ["Corteza", "Manto", "Núcleo"]

enunciado: "Ordena las capas de la Tierra desde la menos densa (superficie) hasta la más densa (centro):"

respuesta_orden: ["Corteza", "Manto", "Núcleo"]

explicacion: |
  La diferenciación por densidad organiza la Tierra en capas: la corteza es la más ligera, seguida por el manto y finalmente el núcleo en el centro.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["densidad", "manto"]

variables:
  datos: [["manto", "mayor"], ["núcleo", "mayor"]]
  idx: uno_de([0, 1])

enunciado: "Considerando la estructura terrestre, la densidad del {datos[idx][0]} es {datos[idx][1]} que la densidad de la corteza."

tipo: mc
opciones_explicitas: ["mayor", "menor", "igual"]

respuesta: datos[idx][1]

explicacion: |
  El {datos[idx][0]} se encuentra debajo de la corteza y posee una densidad {datos[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["geologia", "capas"]

tipo: completar
respuestas_validas:
  - "manto"

respuesta: "manto"

enunciado: "La capa intermedia de la Tierra, situada entre la corteza y el núcleo, se denomina ___."

explicacion: |
  El manto es la capa intermedia que separa la corteza externa del núcleo central.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "avanzado"
  tags: ["calculo", "densidad"]

variables:
  datos: [[5.5, 13.0], [3.3, 5.5], [2.7, 3.3]]
  idx: uno_de([0, 1, 2])

enunciado: "Si la densidad de la capa A es {datos[idx][0]} g/cm³ y la densidad de la capa B es {datos[idx][1]} g/cm³, la diferencia de densidad entre la capa más densa y la menos densa de este par es de ___ g/cm³."

tipo: completar
respuesta: abs(datos[idx][1] - datos[idx][0])
tolerancia_abs: 0.01

explicacion: |
  La diferencia se calcula restando la densidad menor de la mayor. En este caso, el resultado es {abs(datos[idx][1] - datos[idx][0])}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "basico"
  tags: ["astronomia", "teoria", "luna"]

respuesta: "Theia"
tipo: mc
opciones_explicitas: ["Theia", "Gaia", "Venus", "Mars"]

enunciado: "Según la hipótesis del Gran Impacto, la Luna se formó tras la colisión de la Tierra primitiva con un protoplaneta llamado _______."

explicacion: |
  La hipótesis del Gran Impacto sugiere que un objeto del tamaño de Marte, denominado Theia, colisionó con la Tierra, dejando un anillo de escombros que eventualmente se consolidó para formar la Luna.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["fisica", "colision", "teoria"]

tipo: completar
respuestas_validas:
  - "aumentó la rotación"
respuesta: "aumentó la rotación"

enunciado: "En el escenario de una colisión con un objeto de gran masa, la energía cinética transferida _______."

explicacion: |
  Una colisión de tal magnitud no solo habría aportado masa, sino que habría transferido una cantidad enorme de energía angular, afectando la velocidad de rotación de la Tierra primitiva.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "avanzado"
  tags: ["quimica", "isótopos", "luna"]

respuesta: "muy similar"
tipo: mc
opciones_explicitas: ["muy similar", "completamente distinta", "mucho más densa", "sin hierro"]

enunciado: "Una de las pruebas de la hipótesis del Gran Impacto es que la composición isotópica de los silicatos lunares es _______ a la de la Tierra."

explicacion: |
  La similitud isotópica entre la Tierra y la Luna es un desafío para algunas versiones de la teoría, pero sugiere que la Luna se formó a partir de material que ya estaba mezclado con el manto terrestre.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["procesos", "secuencia", "formacion"]

respuesta_orden: ["Colisión de Theia", "Formación de disco de escombros", "Acreción de la Luna"]
tipo: ordenar
opciones_explicitas: ["Colisión de Theia", "Formación de disco de escombros", "Acreción de la Luna"]

enunciado: "Ordena cronológicamente los eventos que llevaron a la formación del sistema Tierra-Luna según la hipótesis del Gran Impacto:"

explicacion: |
  Primero ocurre el impacto, luego el material expulsado forma un anillo o disco alrededor de la Tierra, y finalmente la gravedad hace que ese material se agrupe para formar la Luna.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "avanzado"
  tags: ["termica", "magma", "oceano"]

respuesta: 1200.0
tipo: completar
tolerancia_abs: 100.0

enunciado: "Si la energía del impacto fue suficiente para fundir gran parte del manto, la Tierra habría estado cubierta por un océano de magma. Si estimamos que la temperatura de fusión media fue de 1200 °C, ¿cuántos Kelvin (K) representa esto aproximadamente? (Usa la fórmula K = C + 273.15)"

pasos:
  - "Identificar la temperatura en Celsius: 1200"
  - "Sumar la constante de conversión: 1200 + 273.15"

explicacion: |
  La colisión habría generado temperaturas extremas, transformando la superficie terrestre en un océano de roca fundida (magma) durante un periodo prolongado.
```

```
metadata:
  materia: "geologia"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "basico"
  tags: ["diferenciacion", "densidad"]

tipo: mc
opciones_explicitas: ["núcleo", "manto", "corteza"]

enunciado: "Durante la diferenciación planetaria, los elementos más densos como el hierro se hundieron hacia el centro, formando la capa conocida como ___."

respuesta: "núcleo"

explicacion: |
  Los elementos más pesados (densos) como el hierro y el níquel migraron al centro debido a la gravedad, formando el núcleo.
```

```
metadata:
  materia: "geologia"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["composicion", "corteza"]

tipo: completar
respuestas_validas:
  - "corteza"

enunciado: "La capa más externa de la Tierra está compuesta principalmente por silicatos ligeros. ¿Cómo se llama esta capa?"

respuesta: "corteza"

explicacion: |
  La corteza es la capa más superficial y está formada por materiales menos densos (silicatos) que flotaron sobre el manto.
```

```
metadata:
  materia: "geologia"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["estructura", "orden"]

tipo: ordenar
opciones_explicitas: ["Corteza", "Manto", "Núcleo"]
respuesta_orden: ["Corteza", "Manto", "Núcleo"]

enunciado: "Ordena las capas de la Tierra desde la superficie hacia el centro del planeta:"

explicacion: |
  La estructura terrestre se organiza por densidad: la corteza es la más externa, seguida por el manto y finalmente el núcleo en el centro.
```

```
metadata:
  materia: "geologia"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "basico"
  tags: ["manto", "densidad"]

tipo: mc
opciones_explicitas: ["manto", "núcleo", "corteza"]

enunciado: "La capa situada entre la corteza y el núcleo, compuesta por materiales de densidad intermedia, se denomina ___."

respuesta: "manto"

explicacion: |
  El manto está compuesto por materiales con una densidad intermedia, situándose debajo de la corteza.
```

```
metadata:
  materia: "geologia"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "avanzado"
  tags: ["nucleo", "densidad"]

tipo: completar
tolerancia_abs: 0

enunciado: "Si la densidad de la corteza es baja y la del manto es media, la densidad del núcleo es ___."

respuesta: "muy alta"

explicacion: |
  Debido a la gravedad, los materiales con densidad muy alta (como el hierro) se acumularon en el centro del planeta.
```

## Sección: atmosfera-primitiva (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "basico"
  tags: ["geologia", "atmosfera"]

tipo: mc
opciones_explicitas: ["Oxígeno, Nitrógeno y Metano", "Vapor de agua, Dióxido de carbono y Metano", "Dióxido de azufre, Helio y Oxígeno", "Nitrógeno, Argón y Oxígeno"]
respuesta: "Vapor de agua, Dióxido de carbono y Metano"

enunciado: "Durante los inicios de la Tierra, la atmósfera primitiva estaba compuesta principalmente por una mezcla de gases de origen volcánico. ¿Cuál de las siguientes opciones describe mejor su composición?"

explicacion: |
  La atmósfera primitiva carecía de oxígeno libre (O2) y estaba dominada por gases de efecto invernadero y compuestos volcánicos como el CO2, el vapor de agua y el metano.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "intermedio"
  tags: ["ciclo_del_agua", "geologia"]

variables:
  escenario: [["El vapor de agua se condensó para formar océanos", "La atmósfera era extremadamente seca"], ["El vapor de agua permitió la formación de los mares", "El vapor de agua era inexistente"]]

tipo: mc
opciones_explicitas: ["Escenario A", "Escenario B"]
respuesta: "Escenario A"

enunciado: "Considerando la presencia masiva de vapor de agua en la atmósfera primitiva, {escenario[0][0]}."

explicacion: |
  La condensación del vapor de agua a medida que la Tierra se enfriaba fue el proceso fundamental que dio origen a los océanos primordiales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "basico"
  tags: ["quimica_antigua"]

tipo: completar
respuestas_validas:
  - "anóxica"

enunciado: "Debido a la ausencia de vida fotosintética en sus inicios, la atmósfera primitiva era una atmósfera ___________."

explicacion: |
  Se denomina atmósfera 'anóxica' a aquella que no posee oxígeno libre (O2), característica principal de la Tierra primitiva.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "intermedio"
  tags: ["volcanismo"]

tipo: ordenar
opciones_explicitas: ["Formación de la Tierra", "Actividad volcánica intensa", "Emisión de gases volcánicos", "Formación de la atmósfera primitiva"]

enunciado: "Ordena cronológicamente los eventos que llevaron a la configuración de la atmósfera primitiva:"

explicacion: |
  La formación de la Tierra permitió la diferenciación de capas, seguida de un vulcanismo intenso que liberó los gases necesarios para crear la atmósfera original.
respuesta_orden: ["Formación de la Tierra", "Actividad volcánica intensa", "Emisión de gases volcánicos", "Formación de la atmósfera primitiva"]
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "avanzado"
  tags: ["quimica", "calculo"]

variables:
  datos: [[100, 50, 50], [80, 10, 10]]
  idx: uno_de([0, 1])
  cantidad_co2: datos[idx][0]
  respuesta_correcta: cantidad_co2 * 0.4

tipo: completar
tolerancia_abs: 0.1
respuesta: respuesta_correcta

enunciado: "Si en un modelo de atmósfera primitiva de {cantidad_co2} unidades de gas, el 40% es Dióxido de carbono (CO2), ¿cuántas unidades de CO2 hay?"

pasos:
  - "Identificar el total de unidades de gas: {cantidad_co2}"
  - "Calcular el 40% de ese valor: {cantidad_co2} * 0.4"

explicacion: |
  El cálculo se realiza multiplicando el total de unidades por el porcentaje expresado en decimal (0.4).
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "basico"
  tags: ["biologia", "evolucion", "anaerobico"]

respuesta: "anaeróbica"
tipo: completar
respuestas_validas:
  - "anaeróbica"
  - "anaerobia"

enunciado: "Debido a la ausencia de oxígeno libre en la atmósfera primitiva, la vida temprana era de tipo ___."

explicacion: |
  La atmósfera primitiva era un ambiente reductor. Al no haber O2, los primeros organismos no podían realizar la respiración aeróbica y debían obtener energía mediante procesos anaeróbicos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "intermedio"
  tags: ["oxigeno", "metabolismo"]

variables:
  escenario: uno_de([["presencia de O2", "aeróbica"], ["ausencia de O2", "anaeróbica"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["aeróbica", "anaeróbica"]

enunciado: "Si la atmósfera primitiva carecía de oxígeno libre, ¿qué tipo de metabolismo predominaba en los organismos de esa época?"

pasos:
  - "Identificar la condición atmosférica: ausencia de O2."
  - "Relacionar la condición con el tipo de respiración celular."

explicacion: |
  La falta de oxígeno obligaba a los organismos a utilizar otras moléculas como aceptores de electrones, caracterizando un metabolismo anaeróbico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "avanzado"
  tags: ["evolucion", "oxigeno"]

respuesta_orden: ["Anaerobiosis", "Fotosíntesis oxigénica", "Acumulación de O2", "Respiración aeróbica"]
tipo: ordenar
opciones_explicitas: ["Anaerobiosis", "Fotosíntesis oxigénica", "Acumulación de O2", "Respiración aeróbica"]

enunciado: "Ordena cronológicamente los eventos relacionados con la transición de una atmósfera sin oxígeno a una con oxígeno:"

explicacion: |
  Primero existía la vida anaerobia. Luego, la aparición de organismos fotosintéticos (cianobacterias) comenzó a liberar O2, el cual se acumuló hasta permitir la evolución de la respiración aeróbica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "basico"
  tags: ["oxigeno", "logica"]

respuesta: falso
tipo: vf

enunciado: "La presencia de oxígeno libre en la atmósfera primitiva era un requisito indispensable para los primeros organismos vivos."

explicacion: |
  Falso. Los primeros organismos eran anaeróbicos, lo que significa que podían vivir y prosperar en un ambiente sin oxígeno.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "intermedio"
  tags: ["metabolismo", "oxigeno"]

variables:
  datos: [["presencia", "aeróbica"], ["ausencia", "anaeróbica"]]
  idx: uno_de([0,1])
  estado: datos[idx][0]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["aeróbica", "anaeróbica"]

enunciado: "Si la atmósfera primitiva se caracterizaba por la {estado} de oxígeno, el metabolismo de la vida temprana era ___."

explicacion: |
  La ausencia de oxígeno (estado falso) define un ambiente donde solo la vida anaeróbica puede prosperar.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "basico"
  tags: ["atmosfera", "oxigeno", "evolucion"]

tipo: mc
opciones_explicitas: ["Reductora (sin O2)", "Oxidante (rica en O2)", "Nitrogenada pura", "Ácida y gaseosa"]
respuesta: "Reductora (sin O2)"

enunciado: "La atmósfera de la Tierra en sus inicios era de naturaleza ___________, debido a la ausencia de oxígeno libre."

explicacion: |
  La atmósfera primitiva era un ambiente reductor porque no existía el oxígeno molecular (O2) para oxidar los gases presentes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "intermedio"
  tags: ["fotosintesis", "oxigeno", "biologia"]

enunciado: "El factor principal que transformó la atmósfera primitiva hacia una atmósfera con oxígeno fue ___."

tipo: completar
respuestas_validas:
  - "la aparición de la fotosíntesis"

explicacion: |
  La fotosíntesis realizada por organismos antiguos (cianobacterias) liberó oxígeno como subproducto, cambiando la química global del planeta.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "basico"
  tags: ["oxigeno", "porcentaje"]

tipo: completar
tolerancia_abs: 0.1

enunciado: "Mientras que la atmósfera primitiva carecía de oxígeno, la atmósfera actual contiene aproximadamente un ___% de este gas."

pasos:
  - "Identificar el porcentaje de O2 en la atmósfera actual."
  - "Ingresar el valor numérico."

respuesta: 21

explicacion: |
  La composición actual de la atmósfera se mantiene estable cerca del 21% de oxígeno.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "avanzado"
  tags: ["secuencia", "evolucion"]

tipo: ordenar
opciones_explicitas: ["Atmósfera primitiva reductora", "Aparición de fotosíntesis", "Acumulación de O2", "Atmósfera oxidante actual"]

enunciado: "Ordena cronológicamente los procesos que definieron la evolución de la atmósfera terrestre:"

respuesta_orden: ["Atmósfera primitiva reductora", "Aparición de fotosíntesis", "Acumulación de O2", "Atmósfera oxidante actual"]

explicacion: |
  Primero existió una atmósfera sin O2, luego la vida fotosintética comenzó a producirlo, el O2 se acumuló y finalmente estableció la atmósfera oxidante que conocemos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "intermedio"
  tags: ["quimica", "oxigeno"]

enunciado: "Si la atmósfera es la actual, su estado es ___. Si es la primitiva, su estado es reductora."

tipo: mc
opciones_explicitas: ["oxidante", "reductora"]

respuesta: "oxidante"

explicacion: |
  La atmósfera actual es oxidante debido a la presencia masiva de O2, mientras que la primitiva era reductora por la falta de este gas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "basico"
  tags: ["condensacion", "oceanos", "agua"]

respuesta: "condensación"
tipo: completar
respuestas_validas:
  - "condensación"
  - "condensacion"

enunciado: "A medida que la Tierra se enfriaba, el vapor de agua presente en la atmósfera primitiva sufrió un proceso de ___ que dio lugar a las primeras lluvias y la formación de los océanos."

explicacion: |
  Cuando la superficie terrestre bajó de la temperatura crítica, el vapor de agua se transformó en líquido, llenando las cuencas oceánicas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "basico"
  tags: ["estado_materia", "vapor"]

respuesta: "líquido"
tipo: mc
opciones_explicitas: ["sólido", "líquido", "gaseoso", "plasma"]

enunciado: "Antes de la formación de los océanos, el agua se encontraba mayoritariamente en estado {estado_inicial}. Tras el enfriamiento, pasó a estado {estado_final}."

variables:
  estado_inicial: "gaseoso"
  estado_final: "líquido"

explicacion: |
  El paso de gas a líquido es la transición clave que permitió la existencia de agua líquida en la superficie.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "intermedio"
  tags: ["secuencia", "enfriamiento"]

enunciado: "Ordená cronológicamente los eventos que llevaron a la formación de los océanos primitivos:"
respuesta_orden: ["Enfriamiento de la corteza", "Condensación del vapor", "Lluvias torrenciales", "Formación de océanos"]
tipo: ordenar
opciones_explicitas: ["Enfriamiento de la corteza", "Condensación del vapor", "Lluvias torrenciales", "Formación de océanos"]

explicacion: |
  El orden lógico es: primero la Tierra debe enfriarse lo suficiente para que el vapor no vuelva a evaporarse, luego ocurre la condensación, las lluvias y finalmente se estabilizan los océanos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "intermedio"
  tags: ["componente", "atmosfera"]

respuesta: "verdadero"
tipo: completar
enunciado: "El vapor de agua fue uno de los componentes principales de la atmósfera primitiva que, al condensarse, permitió la aparición de los primeros mares."

explicacion: |
  La atmósfera primitiva era rica en gases de la actividad volcánica, incluyendo grandes cantidades de vapor de agua.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "avanzado"
  tags: ["fisica", "condensacion"]

variables:
  temp_inicial: 1500
  temp_final: 100
  delta_t: temp_inicial - temp_final

respuesta: 1400
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si la temperatura de la atmósfera primitiva era de {temp_inicial}°C y se enfrió hasta los {temp_final}°C para permitir la condensación, ¿cuál fue el descenso térmico (ΔT) en grados Celsius?"

pasos:
  - "Identificar la temperatura inicial: 1500"
  - "Identificar la temperatura final: 100"
  - "Restar la temperatura final de la inicial: 1500 - 100"

explicacion: |
  El enfriamiento fue un proceso masivo que redujo la temperatura de la atmósfera en miles de grados.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "basico"
  tags: ["geologia", "atmosfera"]

enunciado: "En la atmósfera primitiva, un componente dominante era el dióxido de carbono (CO2), mientras que en la atmósfera actual el componente predominante es el ___."

respuesta: "Nitrógeno (N2)"
tipo: mc
opciones_explicitas: ["Dióxido de carbono (CO2)", "Metano (CH4)", "Oxígeno (O2)", "Nitrógeno (N2)"]

explicacion: |
  La atmósfera primitiva era una atmósfera reductora, rica en gases como CO2, CH4 y N2, pero carecía de oxígeno libre (O2) hasta la aparición de la fotosíntesis oxigénica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "intermedio"
  tags: ["evolucion", "oxigeno"]

variables:
  evento: [["Oxígeno (O2)", "Dióxido de carbono (CO2)"], ["Oxígeno (O2)", "Metano (CH4)"]]
  idx: uno_de([0,1])
  gas_liberado: evento[idx][0]
  gas_abundante: evento[idx][1]

enunciado: "La aparición de organismos fotosintéticos transformó la atmósfera al liberar {gas_liberado} en grandes cantidades, reemplazando la abundancia de {gas_abundante}."

respuesta: gas_liberado
tipo: completar
respuestas_validas:
  - "Oxígeno (O2)"
  - "Dióxido de carbono (CO2)"
  - "Metano (CH4)"
  - "Nitrógeno (N2)"

pasos:
  - "Identificar el gas producido por la fotosíntesis."
  - "Identificar el gas que era abundante antes de la fotosíntesis."

explicacion: |
  La Gran Oxidación fue un evento biológico que cambió la química planetaria, pasando de una atmósfera reductora a una oxidante.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "avanzado"
  tags: ["quimica_atmosferica", "evolucion"]

variables:
  comparativa: [["Metano (CH4)", "Oxígeno (O2)"], ["Dióxido de carbono (CO2)", "Nitrógeno (N2)"], ["Vapor de agua (H2O)", "Argón (Ar)"]]
  idx: uno_de([0,1,2])

enunciado: "Si comparamos la concentración de gases, un gas que era muy abundante en la atmósfera primitiva pero es hoy un gas traza es el {comparativa[idx][0]}, mientras que el {comparativa[idx][1]} es mayormente estable en la actualidad."

respuesta: comparativa[idx][0]
tipo: mc
opciones_explicitas: ["Metano (CH4)", "Dióxido de carbono (CO2)", "Vapor de agua (H2O)", "Oxígeno (O2)"]

explicacion: |
  Muchos gases que hoy son trazas (como el metano) eran componentes mayoritarios en la Tierra primitiva debido a la intensa actividad volcánica y la falta de sumideros oxidantes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "intermedio"
  tags: ["cronologia", "procesos"]

enunciado: "Ordena la evolución de la composición atmosférica desde la Tierra primitiva hasta la actualidad:"

opciones_explicitas: ["Atmósfera reductora (CH4, NH3, H2O)", "Atmósfera con presencia de O2 (Gran Oxidación)", "Atmósfera moderna (N2, O2, Ar)"]
respuesta_orden: ["Atmósfera reductora (CH4, NH3, H2O)", "Atmósfera con presencia de O2 (Gran Oxidación)", "Atmósfera moderna (N2, O2, Ar)"]
tipo: ordenar

explicacion: |
  La secuencia lógica comienza con gases volcánicos y de origen primordial, sigue con la revolución biológica del oxígeno y culmina con la composición actual.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "basico"
  tags: ["biologia", "oxigeno"]

enunciado: "En la atmósfera actual, el porcentaje de oxígeno es aproximadamente del 0.21 (valor decimal), lo que equivale al ___ de la mezcla total."

respuesta: "21%"
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  El oxígeno es el segundo gas más abundante hoy en día, con una concentración cercana al 21%.
```

## Sección: minerales-estructura-cristalina (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["definicion", "geologia"]

tipo: mc
opciones_explicitas: ["Una sustancia sólida, inorgánica, de origen natural, con composición química definida y estructura cristalina ordenada.", "Una sustancia sólida, orgánica, de origen volcánico, con composición variable y estructura amorfa.", "Un compuesto químico formado exclusivamente por elementos metálicos en estado sólido.", "Cualquier material sólido encontrado en la corteza terrestre."]
respuesta: "Una sustancia sólida, inorgánica, de origen natural, con composición química definida y estructura cristalina ordenada."
enunciado: "Según la mineralogía clásica, ¿cuál es la definición científica de un mineral?"
explicacion: |
  Un mineral debe cumplir cinco condiciones: ser sólido, inorgánico, de origen natural, tener una fórmula química definida y una estructura atómica interna ordenada (cristalina).
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["propiedades", "inorganico"]

variables:
  escenario: uno_de([["El carbón (formado por restos vegetales)", "falso"], ["El cuarzo (formado por silicatos de silicio y oxígeno)", "verdadero"]])

tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Considerando que un mineral debe ser inorgánico, ¿es la afirmación '{escenario[0]}' verdadera o falsa para la definición de mineral?"

respuesta: escenario[1]

explicacion: |
  Los materiales de origen orgánico (como el carbón derivado de plantas) no se consideran minerales, aunque sean sólidos y naturales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["estructura", "cristalografia"]

tipo: completar
respuestas_validas:
  - "cristalina"

enunciado: "Para que una sustancia sea considerada mineral, sus átomos deben estar dispuestos en una estructura ___."

respuesta: "cristalina"

explicacion: |
  La estructura cristalina es el ordenamiento tridimensional repetitivo de los átomos, lo que diferencia a un mineral de un vidrio (sólido amorfo).
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["quimica", "composicion"]

variables:
  caso: uno_de([["El diamante (C)", "C"], ["La sal común (NaCl)", "NaCl"], ["La calcita (CaCO3)", "CaCO3"]])

tipo: completar
respuestas_validas:
  - "C"
  - "NaCl"
  - "CaCO3"

enunciado: "Un mineral debe tener una composición química definida. Si tomamos el caso de {caso[0]}, su fórmula química es ___."

respuesta: caso[1]

explicacion: |
  Cada mineral tiene una proporción fija de elementos que determina su identidad química.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "avanzado"
  tags: ["conceptos", "ordenamiento"]

tipo: ordenar
opciones_explicitas: ["Origen natural", "Sólido", "Estructura cristalina", "Composición química definida", "Inorgánico"]

enunciado: "Ordena los criterios fundamentales que definen a un mineral, desde el origen hasta su organización interna:"

respuesta_orden: ["Origen natural", "Sólido", "Inorgánico", "Composición química definida", "Estructura cristalina"]

explicacion: |
  La definición integral requiere la suma de estas cinco características esenciales para distinguir un mineral de otros materiales terrestres.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["cristalografía", "átomos"]

respuesta: "arreglo geométrico repetitivo y ordenado de átomos/iones"
tipo: completar
respuestas_validas:
  - "arreglo geométrico repetitivo y ordenado de átomos/iones"
  - "un desorden total de partículas"
  - "una estructura sin simetría"

enunciado: "Una estructura cristalina se define como un ___."

explicacion: |
  Los cristales se caracterizan por tener un ordenamiento espacial de sus componentes (átomos, iones o moléculas) que se repite de forma periódica en las tres dimensiones del espacio.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["amorfo", "cristalino"]

variables:
  escenario: uno_de([["vidrio", "amorfo"], ["cuarzo", "cristalino"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["cristalino", "amorfo"]

enunciado: "Si un material como el {escenario[0]} carece de un ordenamiento de largo alcance en su estructura, se clasifica como un sólido ___."

explicacion: |
  Los sólidos amorfos, como el vidrio, carecen de la periodicidad característica de los cristales, presentando un desorden estructural a escala atómica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["átomos", "red_cristalina"]

respuesta: "átomos, iones o moléculas"
tipo: completar
respuestas_validas:
  - "átomos, iones o moléculas"

enunciado: "La unidad básica que se repite para formar la red de un cristal está compuesta por ___."

explicacion: |
  Dependiendo de la naturaleza del mineral, los puntos de la red pueden ser átomos elementales, iones en compuestos iónicos o moléculas en sólidos moleculares.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["orden", "desorden"]

respuesta: "orden"
tipo: mc
opciones_explicitas: ["orden", "desorden", "densidad", "color"]

enunciado: "La diferencia fundamental entre un cristal y un sólido amorfo radica en la presencia de:"

explicacion: |
  El orden es la clave: los cristales tienen un patrón repetitivo (orden), mientras que los amorfos tienen un desorden estructural.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "avanzado"
  tags: ["clasificación", "estructura"]

variables:
  ejemplo: uno_de([["diamante", "cristalino"], ["plástico", "amorfo"]])

respuesta: ejemplo[1]
tipo: mc
opciones_explicitas: ["cristalino", "amorfo"]

enunciado: "Considerando el caso del {ejemplo[0]}, su estructura interna es de tipo ___."

explicacion: |
  El diamante es el ejemplo clásico de un sólido con una estructura cristalina altamente ordenada de átomos de carbono.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["definiciones", "geologia"]

tipo: mc
opciones_explicitas: ["Un agregado de varios minerales", "Una sustancia pura con estructura cristalina definida", "Una mezcla de materia orgánica e inorgánica", "Un fragmento de corteza terrestre sin estructura"]
respuesta: "Una sustancia pura con estructura cristalina definida"
enunciado: "Desde una perspectiva geológica, ¿cuál es la definición fundamental de un mineral?"

explicacion: |
  Un mineral es una sustancia sólida, inorgánica, con una composición química definida y una estructura atómica ordenada (cristalina).
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["clasificacion", "rocas"]

variables:
  escenario: uno_de([["Granito", "cuarzo", "feldespato", "mica"], ["Basalto", "olivino", "piroxeno", "plagioclasa"], ["Caliza", "calcita", "dolomita", "aragonito"]])

tipo: completar
respuesta: escenario[3]

enunciado: "Si observamos una muestra de {escenario[0]}, estamos ante una roca compuesta por varios minerales, entre ellos {escenario[1]} y {escenario[2]}. Otro mineral típico de esta roca es ___."

pasos:
  - "Identifica si el material es una sustancia única o un agregado."
  - "Observa los componentes individuales que forman el conjunto."

explicacion: |
  El {escenario[0]} es una roca porque es un agregado de los minerales listados.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["relaciones", "estructuras"]

tipo: completar
respuestas_validas:
  - "mineral"
  - "roca"

enunciado: "Un ejemplar de cuarzo puro se clasifica como un ________, mientras que una masa de granito se clasifica como una ________."

explicacion: |
  El cuarzo es una sustancia individual (mineral), mientras que el granito es un agregado de varios minerales (roca).
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["ordenar", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Átomos", "Cristales (Minerales)", "Rocas"]

enunciado: "Ordena los siguientes elementos de menor a mayor complejidad estructural en la formación de la corteza terrestre:"

explicacion: |
  Los átomos se organizan en redes cristalinas para formar minerales, y los minerales se agrupan para formar rocas.
respuesta_orden: ["Átomos", "Cristales (Minerales)", "Rocas"]
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "avanzado"
  tags: ["analisis", "composicion"]

variables:
  caso: uno_de([["feldespato", "mineral"], ["granito", "roca"]])

tipo: mc
opciones_explicitas: ["mineral", "roca"]
respuesta: caso[1]

enunciado: "Considerando el elemento {caso[0]}, su clasificación técnica es: ________."

explicacion: |
  Según el caso seleccionado, {caso[0]} es un/a {caso[1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["dureza", "mohs"]

variables:
  mineral_datos: [["talco", "1"], ["yeso", "2"], ["calcita", "3"], ["fluorita", "4"], ["apatita", "5"]]
  idx: uno_de([0,1,2,3,4])

enunciado: "Si tenemos un mineral cuya dureza es la que corresponde al elemento {mineral_datos[idx][0]}, su valor en la escala de Mohs es ___."

respuestas_validas:
  - "1"
  - "2"
  - "3"
  - "4"
  - "5"
respuesta: mineral_datos[idx][1]
tipo: completar

explicacion: |
  La escala de Mohs es una escala de dureza relativa. El {mineral_datos[idx][0]} tiene un valor de {mineral_datos[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["brillo"]

enunciado: "¿Cómo se denomina a la propiedad que describe la forma en que la luz se refleja en la superficie de un mineral?"

opciones_explicitas: ["Transparencia", "Brillo", "Clivaje", "Dureza"]
respuesta: "Brillo"
tipo: mc

explicacion: |
  El brillo es la propiedad que indica la calidad de la reflexión de la luz en la superficie del mineral.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["raya", "color"]

variables:
  escenario: [["Hematita", "Rojo"], ["Pirita", "Negro"], ["Calcopirita", "Negro verdoso"], ["Malaquita", "Verde"]]
  idx: uno_de([0, 1, 2, 3])

enunciado: "Al realizar la prueba de la raya sobre una placa de porcelana sin esmaltar con el mineral {escenario[idx][0]}, el color resultante es ___."

respuestas_validas:
  - "Rojo"
  - "Negro"
  - "Negro verdoso"
  - "Verde"
respuesta: escenario[idx][1]
tipo: completar

explicacion: |
  La raya es el color del polvo del mineral y es una propiedad más constante que el color externo del espécimen.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "avanzado"
  tags: ["fractura", "clivaje"]

enunciado: "Un mineral que se rompe siguiendo planos de debilidad cristalográfica bien definidos presenta ___."

opciones_explicitas: ["Fractura concoidea", "Clivaje", "Dureza", "Brillo metálico"]
respuesta: "Clivaje"
tipo: mc

explicacion: |
  El clivaje ocurre cuando el mineral se rompe a lo largo de planos de debilidad en su estructura atómica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["mohs", "ordenar"]

enunciado: "Ordene los siguientes minerales de menor a mayor dureza según la escala de Mohs:"

opciones_explicitas: ["Talco", "Calcita", "Cuarzo", "Diamante"]
respuesta_orden: ["Talco", "Calcita", "Cuarzo", "Diamante"]
tipo: ordenar

explicacion: |
  La secuencia correcta es: Talco (1), Calcita (3), Cuarzo (7) y Diamante (10).
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["dureza", "mohs"]

variables:
  escenario: [[4, "Fluorita"], [7, "Cuarzo"], [10, "Diamante"]]
  idx: uno_de([0, 1, 2])
  dureza_dada: escenario[idx][0]
  nombre_mineral: escenario[idx][1]

tipo: mc
opciones_explicitas: ["Fluorita", "Cuarzo", "Diamante", "Talco"]

enunciado: "Un geólogo encuentra un mineral cuya dureza en la escala de Mohs es de {dureza_dada}. ¿Qué mineral es?"

respuesta: nombre_mineral

explicacion: |
  El mineral identificado es el {nombre_mineral}, que tiene una dureza de {dureza_dada} en la escala de Mohs.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["color", "espectro"]

variables:
  escenario: [["rojo", "Rubí"], ["azul", "Lapislázuli"], ["amarillo", "Azufre"]]
  idx: uno_de([0, 1, 2])
  color_descrito: escenario[idx][0]
  mineral_nombre: escenario[idx][1]

tipo: completar
respuestas_validas:
  - "Rubí"
  - "Lapislázuli"
  - "Azufre"

enunciado: "Se observa un cristal de color ___ que presenta una estructura hexagonal característica."

pasos:
  - "Identificar el color mencionado en el registro."
  - "Asociar el color con el mineral correspondiente."

respuesta: mineral_nombre

explicacion: |
  El color {color_descrito} corresponde al mineral {mineral_nombre}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["brillo", "propiedades"]

variables:
  escenario: uno_de([["metálico", "Pirita"], ["vítreo", "Cuarzo"], ["nacarado", "Mica"]])
  tipo_brillo: escenario[0]
  mineral_id: escenario[1]

tipo: mc
opciones_explicitas: ["Pirita", "Cuarzo", "Mica", "Feldespato"]

enunciado: "Un espécimen presenta un brillo de tipo {tipo_brillo}. ¿Cuál de estos minerales es el más probable?"

respuesta: mineral_id

explicacion: |
  El brillo {tipo_brillo} es característico de la {mineral_id}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "avanzado"
  tags: ["cristalización", "geología"]

tipo: ordenar
opciones_explicitas: ["Nucleación", "Crecimiento", "Terminación"]

enunciado: "Ordene las etapas típicas de la formación de un cristal perfecto en una solución saturada:"

respuesta_orden: ["Nucleación", "Crecimiento", "Terminación"]

explicacion: |
  El proceso de cristalización requiere primero la nucleación, luego el crecimiento de la red y finalmente la terminación de los bordes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["densidad", "propiedades_fisicas"]

variables:
  escenario: [[5.0, "Hematita"], [2.6, "Cuarzo"], [7.5, "Galena"]]
  idx: uno_de([0, 1, 2])
  valor_densidad: escenario[idx][0]
  mineral_ref: escenario[idx][1]

tipo: completar
tolerancia_abs: 0.01

enunciado: "Un mineral tiene una densidad relativa de {valor_densidad}. ¿Cuál es su valor numérico exacto?"

respuesta: valor_densidad

explicacion: |
  La densidad es una propiedad intrínseca; en este caso, el valor es {valor_densidad} g/cm³.
```

## Sección: origen-de-la-vida (24 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "basico"
  tags: ["abiogenesis", "hipotesis_oparin"]

enunciado: "Según la hipótesis de Oparin y Haldane, la atmósfera primitiva de la Tierra carecía de ciertos gases que hoy son comunes. ¿Cuál de los siguientes gases NO formaba parte de esa atmósfera reductora?"

opciones_explicitas: ["Metano", "Amoníaco", "Oxígeno", "Hidrógeno"]
respuesta: "Oxígeno"
tipo: "mc"

explicacion: |
  La atmósfera primitiva era reductora y carecía de oxígeno libre (O2), ya que este solo apareció masivamente después de la fotosíntesis oxigénica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["miller_urey", "aminoacidos"]

enunciado: "En el famoso experimento de Miller y Urey, se simularon las condiciones de la Tierra primitiva mediante descargas eléctricas. ¿Cuál fue el resultado principal a partir de sustancias inorgánicas?"

respuesta: "aminoácidos"
tipo: "mc"
opciones_explicitas: ["aminoácidos", "nucleótidos"]

explicacion: |
  El experimento demostró que la síntesis de moléculas orgánicas simples como los aminoácidos es posible a partir de gases inorgánicos y energía.
```

```
metadata:
  materia: "historia_profucha"
  tema: "origen_de_la_vida"
  nivel: "avanzado"
  tags: ["rna_world", "genetica"]

enunciado: "La hipótesis del 'Mundo del ARN' sugiere que antes de la aparición del ADN y las proteínas, el ___ cumplía la función de almacenar información genética y catalizar reacciones químicas."

respuestas_validas:
  - "ARN"
respuesta: "ARN"
tipo: "completar"

explicacion: |
  Se cree que el ARN fue la primera molécula autorreplicante debido a su capacidad de actuar tanto como material genético como enzima (ribozimas).
```

```
metadata:
  materia: "historia_profucha"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["evolucion_quimica", "orden"]

enunciado: "Ordena correctamente los procesos de la evolución química, desde la materia más simple hasta la vida:"

opciones_explicitas: ["Moléculas inorgánicas", "Monómeros orgánicos", "Polímeros complejos", "Protobiontes"]
respuesta_orden: ["Moléculas inorgánicas", "Monómeros orgánicos", "Polímeros complejos", "Protobiontes"]
tipo: "ordenar"

explicacion: |
  La evolución química implica un aumento gradual de la complejidad: de átomos y gases a moléculas pequeñas, luego cadenas largas y finalmente estructuras con membrana.
```

```
metadata:
  materia: "historia_profucha"
  tema: "origen_de_la_vida"
  nivel: "avanzado"
  tags: ["quimiosintesis", "metabolismo"]

enunciado: "En las fuentes hidrotermales del fondo oceánico, la vida pudo haber comenzado mediante un proceso de ___ que utilizaba la energía química de los minerales."

tipo: completar
respuesta: "quimiosíntesis"

explicacion: |
  Antes de la fotosíntesis, los primeros organismos probablemente obtenían energía de las reacciones redox de compuestos inorgánicos en las chimeneas hidrotermales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "basico"
  tags: ["miller_urey", "sopa_primordial"]

respuesta: "Miller-Urey"
tipo: completar
respuestas_validas:
  - "Miller-Urey"
  - "Miller-Urey"

enunciado: "El experimento diseñado para probar la hipótesis de la 'sopa primordial' en charcos superficiales fue el de ___."

explicacion: |
  El experimento de Miller-Urey (1953) demostró que se podían formar moléculas orgánicas simples (aminoácidos) a partir de gases inorgánicos mediante descargas eléctricas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["fuentes_hidrotermales", "quimiosintesis"]

respuesta: "protección de la radiación UV"
tipo: mc
opciones_explicitas: ["exposición a radiación UV", "protección de la radiación UV", "alta radiación solar", "ausencia de calor"]

enunciado: "A diferencia de la hipótesis de la sopa primordial, la teoría de las fuentes hidrotermales sugiere que la vida pudo originarse en el fondo oceánico debido a la ___."

explicacion: |
  Las fuentes hidrotermales ofrecen un ambiente protegido de la radiación UV superficial y proporcionan gradientes térmicos y químicos esenciales para la síntesis de moléculas complejas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["hipotesis", "comparacion"]

respuesta: "quimiosintesis"
tipo: completar
respuestas_validas:
  - "quimiosintesis"
  - "quimiosintesis"

enunciado: "Mientras que la sopa primordial se basa en la energía solar y descargas, las fuentes hidrotermales proponen un metabolismo basado en la ___."

explicacion: |
  En las fuentes hidrotermales, la energía proviene de las reacciones químicas entre los fluidos alcalinos y el agua de mar, un proceso conocido como quimiosíntesis.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "basico"
  tags: ["miller_urey", "moléculas"]

respuesta_orden: ["Metano", "Amoníaco", "Hidrógeno", "Agua"]
tipo: ordenar
opciones_explicitas: ["Metano", "Amoníaco", "Hidrógeno", "Agua"]

enunciado: "Ordene los componentes gaseosos y líquidos que se utilizaron en el aparato de Miller-Urey para simular la atmósfera y el océano primitivo:"

explicacion: |
  El experimento utilizó una mezcla de metano (CH4), amoníaco (NH3), hidrógeno (H2) y vapor de agua (H2O) para simular las condiciones de la Tierra primitiva.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "avanzado"
  tags: ["energia", "hipotesis"]

respuesta: "descargas eléctricas"
tipo: mc
opciones_explicitas: ["descargas eléctricas", "gradientes térmicos", "radiación gamma", "energía cinética"]

enunciado: "En el modelo de la sopa primordial, ¿cuál es el motor energético propuesto para la síntesis de moléculas orgánicas?"

explicacion: |
  En el modelo de Miller-Urey, las descargas eléctricas (simulando rayos) proporcionan la energía necesaria para romper los enlaces de los gases y formar nuevas moléculas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "basico"
  tags: ["biologia", "evolucion", "luca"]

tipo: mc
opciones_explicitas: ["Un organismo pluricelular complejo", "El último ancestro común de todos los organismos actuales", "Un organismo que vivió solo en la atmósfera", "La primera célula que apareció en la Tierra"]
respuesta: "El último ancestro común de todos los organismos actuales"

enunciado: "El término LUCA hace referencia a un concepto fundamental en la biología evolutiva. ¿Qué significa exactamente?"

explicacion: |
  LUCA (Last Universal Common Ancestor) no fue el primer ser vivo, sino el ancestro común más reciente del cual descendieron todas las formas de vida actuales (Arqueas, Bacterias y Eucariotas).
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["biologia", "bioquimica"]

tipo: completar
respuestas_validas:
  - "quimiosíntesis"
respuesta: "quimiosíntesis"

enunciado: "Se postula que LUCA habitaba en entornos extremos, como fuentes hidrotermales, y que su principal fuente de energía era la ___."

explicacion: |
  Debido a la ausencia de oxígeno en la Tierra primitiva, se cree que LUCA dependía de procesos químicos inorgánicos (quimiosíntesis) para obtener energía, antes de la aparición de la fotosíntesis.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["filogenia", "evolucion"]

tipo: ordenar
opciones_explicitas: ["LUCA", "Primeras células procariotas", "Células eucariotas", "Organismos pluricelulares"]

enunciado: "Ordena cronológicamente estos hitos evolutivos, desde el ancestro común hasta la complejidad actual:"

explicacion: |
  La evolución biológica siguió una progresión desde un ancestro común unicelular, pasando por la especialización procariota y eucariota, hasta la complejidad de la pluricelularidad.
respuesta_orden: ["LUCA", "Primeras células procariotas", "Células eucariotas", "Organismos pluricelulares"]
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "avanzado"
  tags: ["genetica", "adn"]

variables:
  mol_idx: uno_de([0, 1])
  mol_datos: [["ATP", "energía celular"], ["ADN", "información genética"]]
  mol_nombre: mol_datos[mol_idx][0]
  mol_funcion: mol_datos[mol_idx][1]
  respuesta_correcta: mol_datos[mol_idx][0]

tipo: mc
respuesta: respuesta_correcta
opciones_explicitas: ["ATP", "ADN", "ARN", "Proteínas"]

enunciado: "La existencia de {mol_nombre} en todos los dominios de la vida es una evidencia clave de que todos los seres vivos comparten un ancestro común, ya que cumple la función de {mol_funcion}."

explicacion: |
  El hecho de que todos los seres vivos utilicen la misma molécula para almacenar información genética (ADN/ARN) y la misma para transferir energía (ATP) es la prueba más fuerte de un origen común.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "basico"
  tags: ["bioquimica", "evolucion"]

tipo: mc
opciones_explicitas: ["Almacenar información genética y actuar como catalizador", "Solo almacenar información genética", "Solo actuar como catalizador enzimático", "Transportar aminoácidos a los ribosomas"]
respuesta: "Almacenar información genética y actuar como catalizador"

enunciado: "La hipótesis del 'mundo de ARN' sugiere que esta molécula fue clave en el origen de la vida debido a que puede ___."

explicacion: |
  El ARN es una molécula versátil que puede realizar dos funciones críticas: almacenar la información genética (como el ADN) y actuar como una enzima (ribozima) para catalizar reacciones químicas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["adn", "arn", "proteinas"]

tipo: completar
respuestas_validas:
  - "ADN"
  - "proteínas"

enunciado: "En la hipótesis del mundo de ARN, se postula que el ARN precedió tanto al ___ como a las ___ en la evolución biológica."

explicacion: |
  Se cree que el ARN fue la molécula central antes de que el ADN se especializara en el almacenamiento de información a largo plazo y las proteínas en la catálisis estructural y funcional.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["ribozima", "catalisis"]

tipo: mc
opciones_explicitas: ["Capacidad de catalizar reacciones químicas", "Capacidad de replicarse sin proteínas", "Capacidad de formar dobles hélices estables", "Capacidad de almacenar aminoácidos"]
respuesta: "Capacidad de catalizar reacciones químicas"

enunciado: "Una de las propiedades fundamentales que permite al ARN ser el protagonista del 'mundo de ARN' es su capacidad de actuar como una ___."

explicacion: |
  Las ribozimas son moléculas de ARN con actividad catalítica, lo que permite que el ARN pueda acelerar reacciones químicas sin necesidad de proteínas.
```

```
metadata:
  materia: "historia_profucha"
  tema: "origen_de_la_vida"
  nivel: "avanzado"
  tags: ["evolucion", "secuencia"]

tipo: ordenar
opciones_explicitas: ["ARN", "ADN", "Proteínas"]

enunciado: "Según la hipótesis del mundo de ARN, ¿cuál sería el orden evolutivo más probable de las macromoléculas funcionales?"

explicacion: |
  El ARN habría servido como la molécula 'todo en uno' que permitió la aparición de la autorreplicación, antes de la especialización funcional del ADN y las proteínas.
respuesta_orden: ["ARN", "ADN", "Proteínas"]
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "avanzado"
  tags: ["paradoja", "evolucion"]

variables:
  escenario: uno_de(["plantilla", "catalizador"])

tipo: mc
opciones_explicitas: ["La estabilidad del ADN", "La velocidad de la proteína", "La dualidad funcional del ARN", "La complejidad del núcleo"]
respuesta: "La dualidad funcional del ARN"

enunciado: "El 'dilema de la replicación' se resuelve con el ARN porque este puede resolver la necesidad de un {escenario} mediante su estructura química."

explicacion: |
  Si el escenario es la necesidad de una plantilla, el ARN sirve como molde. Si es la necesidad de un catalizador, el ARN actúa como enzima. Esto permite que la vida comience sin depender de un sistema complejo de tres moléculas distintas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["quimica_prebiotica", "experimento", "miller_urey"]

variables:
  escenario: [[["metano", "amoniaco", "hidrogeno", "vapor de agua"], "aminoácidos"], [["metano", "amoniaco", "hidrogeno", "vapor de agua"], "azúcares"], [["metano", "amoniaco", "hidrogeno", "vapor de agua"], "lípidos"]]
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["aminoácidos", "azúcares", "lípidos"]

enunciado: "En el experimento de Miller-Urey, al aplicar descargas eléctricas a una mezcla de gases que simulaba la atmósfera primitiva, se obtuvo como producto principal la formación de ___."

explicacion: |
  El experimento demostró que la síntesis abiótica de moléculas orgánicas (como los aminoácidos) era posible bajo las condiciones atmosféricas propuestas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "basico"
  tags: ["atmosfera", "gases"]

respuesta: "metano"
tipo: mc
opciones_explicitas: ["metano", "oxígeno", "nitrógeno"]

enunciado: "Según el modelo de Miller-Urey, la atmósfera primitiva era rica en gases reductores. ¿Cuál de estos gases era uno de los componentes fundamentales en su montaje experimental?"

explicacion: |
  Miller utilizó metano (CH4), amoníaco (NH3), hidrógeno (H2) y vapor de agua (H2O) para simular la atmósfera reductora.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "basico"
  tags: ["energia", "descarga"]

respuesta: "descargas eléctricas"
tipo: completar
respuestas_validas:
  - "descargas eléctricas"

enunciado: "Para simular la energía disponible en la atmósfera primitiva, el aparato de Miller utilizó ___ entre los gases."

explicacion: |
  Las descargas eléctricas simulaban la actividad de los rayos durante las tormentas en la Tierra primitiva.
```

```
metadata:
  materia: "historia_profucha"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["ciclo_del_agua", "condensación"]

variables:
  proceso: [["condensación", "evaporación"], ["condensación", "sublimación"], ["condensación", "fusión"]]
  idx: uno_de([0,1,2])

respuesta: proceso[idx][0]
tipo: mc
opciones_explicitas: ["condensación", "evaporación", "sublimación", "fusión"]

enunciado: "En el montaje, el vapor de agua se enfriaba para que los compuestos orgánicos formados se disolvieran en el líquido. Este proceso físico es la ___."

explicacion: |
  El enfriamiento del vapor permite la condensación, permitiendo que las moléculas orgánicas se concentren en la fase líquida.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "avanzado"
  tags: ["montaje", "componentes"]

respuesta_orden: ["gases", "descargas", "condensación"]
tipo: ordenar
opciones_explicitas: ["gases", "descargas", "condensación"]

enunciado: "Ordena los elementos o procesos según el flujo lógico de la síntesis química en el experimento de Miller:"

explicacion: |
  El experimento requiere primero la mezcla de gases, luego la aplicación de energía (descargas) y finalmente la recuperación de productos mediante condensación.
```

