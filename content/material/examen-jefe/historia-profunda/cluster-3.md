# Examen jefe — Viaje por la historia profunda

> Logro #101. Completaste el examen sobre la evolución de la Tierra, las extinciones masivas y las civilizaciones antiguas. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **123 preguntas totales** en 5/5 secciones.

---

## Sección: china-antigua (24 preguntas)

```
### 2 — Característica de la escritura Shang
```

```
### 3 — Metalurgia Shang
```

```
### 4 — Caída de la dinastía Shang
```

```
### 5 — Concepto político Zhou
```

```
### 6 — Sistema feudal Zhou
```

```
### 7 — Fragmentación Zhou (Primavera y Otoño)
```

```
### 8 — Confucio
```

```
### 9 — Laozi y el Taoísmo
```

```
### 10 — Sun Tzu
```

```
### 11 — Gran Muralla (origen)
```

```
### 12 — Dinastía Qin
```

```
### 13 — Estandarización Qin
```

```
### 14 — Mausoleo de Qin Shi Huang
```

```
### 15 — Caída de Qin
```

```
### 16 — Dinastía Han
```

```
### 17 — Emperador Wu de Han
```

```
### 18 — Confucianismo como ortodoxia
```

```
### 19 — Papel de la mujer en Han
```

```
### 20 — Invasión Xiongnu
```

```
### 21 — Papel de Cai Lun
```

```
### 22 — Caída de Han
```

```
### 23 — Rebelión de los Turbantes Amarillos
```

```
### 24 — Filósofa Ban Zhao
```

```
### 25 — Comercio de la Seda
```

## Sección: ciclo-de-las-rocas (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["geologia", "rocas_igneas"]

respuesta: "ígnea"
tipo: mc
opciones_explicitas: ["sedimentaria", "metamórfica", "ígnea"]

enunciado: "Las rocas que se forman a partir de la solidificación del magma o la lava se denominan rocas _______."

explicacion: |
  Las rocas ígneas se forman cuando el material fundido (magma o lava) se enfría y se solidifica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["geologia", "sedimentacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["sedimentaria", "sedimentos"], ["metamórfica", "presión"]]

respuesta: datos[escenario_idx][1
tipo: completar
respuestas_validas: ["sedimentos", "presión"]

enunciado: "El proceso de litificación ocurre cuando los _______ se compactan y cementan para formar nuevas rocas."

explicacion: |
  La acumulación y compactación de sedimentos es el proceso fundamental para la formación de rocas sedimentarias.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ciclo_de_las_rocas"
  nivel: "intermedio"
  tags: ["geologia", "metamorfismo"]

respuesta: "metamórfica"
tipo: mc
opciones_explicitas: ["ígnea", "sedimentaria", "metamórfica"]

enunciado: "Cuando una roca preexistente es sometida a altas temperaturas y presiones sin llegar a fundirse, se transforma en una roca:"

explicacion: |
  El metamorfismo es el proceso de transformación de rocas en estado sólido debido a cambios en las condiciones de presión y temperatura.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ciclo_de_las_rocas"
  nivel: "avanzado"
  tags: ["geologia", "procesos"]

respuesta: ["magma", "roca ígnea", "sedimentos", "roca sedimentaria", "roca metamórfica"]
tipo: ordenar
opciones_explicitas: ["magma", "roca ígnea", "sedimentos", "roca sedimentaria", "roca metamórfica"]

enunciado: "Ordena la secuencia lógica de procesos que describe la transformación desde el material fundido hasta la formación de rocas metamórficas:"

pasos:
  - "Solidificación del magma"
  - "Erosión y depósito"
  - "Litificación"
  - "Metamorfismo"

explicacion: |
  El ciclo es un proceso continuo: el magma se solidifica (ígnea), se erosiona (sedimentos), se compacta (sedimentaria) y se transforma por presión/calor (metamórfica).
```

```
metadata:
  materia: "historia_profunda"
  tema: "ciclo_de_las_rocas"
  nivel: "intermedio"
  tags: ["geologia", "fusión"]

respuesta: "fusión"
tipo: completar
respuestas_validas: ["fusión", "erosión"]

enunciado: "Para que una roca metamórfica o sedimentaria vuelva a convertirse en magma, debe experimentar un proceso de _______."

explicacion: |
  La fusión es el proceso por el cual la roca sólida se funde debido a temperaturas extremadamente altas, reiniciando el ciclo desde el magma.
```

```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["roca_igneas", "sedimentacion"]

tipo: mc
opciones_explicitas: ["Erosión y sedimentación", "Calor y presión", "Fusión parcial", "Cristalización"]

enunciado: "Una roca ígnea que queda expuesta en la superficie sufre procesos de desgaste y acumulación de partículas. ¿Cuál es el proceso principal para transformarse en una roca sedimentaria?"

explicacion: |
  La erosión desintegra la roca, el transporte mueve los sedimentos, la deposición los acumula y la litificación (compactación y cementación) los convierte en roca sedimentaria.
```

```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "intermedio"
  tags: ["roca_metamorfica", "presion_calor"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["roca ígnea", "roca sedimentaria"], ["granito", "caliza"]]

tipo: completar
respuestas_validas: ["metamórfica"]

enunciado: "Cuando una {escenarios[escenario_idx][0]} es sometida a altas temperaturas y presiones extremas sin llegar a fundirse, se transforma en una roca ___."

explicacion: |
  El metamorfismo ocurre cuando las condiciones de presión y temperatura cambian la estructura mineral de una roca sólida sin llegar a la fusión (que sería magma).
```

```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "avanzado"
  tags: ["procesos_geologicos"]

tipo: ordenar
opciones_explicitas: ["Erosión", "Transporte", "Sedimentación", "Litificación"]

enunciado: "Ordene cronológicamente las etapas que transforman una roca ígnea en una roca sedimentaria:"

explicacion: |
  Primero la roca se rompe (erosión), luego los fragmentos se mueven (transporte), luego se asientan (sedimentación) y finalmente se compactan (litificación).
```

```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["metamorfismo"]

tipo: mc
opciones_explicitas: ["Calor y presión", "Erosión y transporte", "Fusión y enfriamiento", "Sedimentación y compactación"]

enunciado: "¿Qué agentes físicos son los responsables de la formación de una roca metamórfica a partir de una roca preexistente?"

explicacion: |
  El metamorfismo es la transformación de una roca debido a cambios en la presión y la temperatura, sin que la roca llegue a fundirse.
```

```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "intermedio"
  tags: ["roca_igneas", "fusión"]

tipo: completar
tolerancia_abs: 0

enunciado: "Si una roca metamórfica se funde completamente debido al calor extremo, se convierte en magma. Si este magma se enfría y cristaliza, el tipo de roca resultante es una roca ___."

explicacion: |
  El enfriamiento del magma (ya sea intrusivo o extrusivo) da lugar a la formación de rocas ígneas.
```

```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["magma", "roca_igneas"]

variables:
  tipo_roca: uno_de(["granito", "basalto", "obsidiana"])

enunciado: "Cuando una roca se funde completamente debido al calor extremo en el manto, se convierte en ___."

respuesta: "magma"
tipo: completar
respuestas_validas: ["magma"]

explicacion: |
  El proceso de fusión de cualquier tipo de roca (sedimentaria, metamórfica o ígnea) da lugar al magma. Al enfriarse, este magma dará origen a una nueva roca ígnea.
```

```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "intermedio"
  tags: ["ciclo_geologico", "fusione"]

variables:
  roca_origen: uno_de(["sedimentaria", "metamorfica", "igneas"])

enunciado: "Si una roca de tipo {roca_origen} es sometida a temperaturas lo suficientemente altas como para fundirse, el material resultante es magma. Si este magma se enfría, el ciclo se reinicia produciendo una roca ___."

respuesta: "igneas"
tipo: completar
respuestas_validas: ["igneas"]

explicacion: |
  Cualquier roca, sin importar su origen, puede fundirse. El producto de la solidificación de ese magma siempre será una roca ígnea.
```

```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["magma", "solidificacion"]

enunciado: "El proceso mediante el cual el magma se enfría y solidifica para formar nuevas rocas se denomina:"

opciones_explicitas: ["Meteorización", "Cristalización", "Erosión", "Sedimentación"]
respuesta: "Cristalización"
tipo: mc

explicacion: |
  La cristalización es el proceso de formación de cristales durante el enfriamiento del magma, dando lugar a las rocas ígneas.
```

```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "intermedio"
  tags: ["ciclo_geologico", "secuencia"]

enunciado: "Ordena la secuencia lógica que describe el reinicio del ciclo cuando una roca ígnea es fundida:"

opciones_explicitas: ["Roca ígnea", "Magma", "Enfriamiento", "Nueva roca ígnea"]
respuesta: ["Roca ígnea", "Magma", "Enfriamiento", "Nueva roca ígnea"]
tipo: ordenar

explicacion: |
  El ciclo es continuo: la roca existente se funde (magma), el magma se enfría y se solidifica (enfriamiento) para formar una nueva roca.
```

```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["magma", "estado_fisico"]

enunciado: "Un material que ha pasado de ser una roca sólida a un estado fundido debido al calor extremo se encuentra en estado ___."

opciones_explicitas: ["sólido", "líquido", "gaseoso"]
respuesta: "líquido"
tipo: mc

explicacion: |
  El magma es roca fundida, por lo tanto, se encuentra en estado líquido. Una vez que este líquido se enfría, vuelve al estado sólido.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["conceptos_basicos", "dinamica_terrestre"]

tipo: mc
opciones_explicitas: ["Un punto de inicio definido", "Un proceso lineal con un final", "Un ciclo continuo sin principio ni fin", "Un evento único ocurrido en el pasado"]

enunciado: "Sobre la naturaleza del ciclo de las rocas, se afirma que este es..."

explicacion: |
  El ciclo de las rocas es un proceso continuo y dinámico. No existe un punto de partida o de finalización, ya que la materia se recicla constantemente a través de procesos internos y externos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ciclo_de_las_rocas"
  nivel: "intermedio"
  tags: ["procesos_geologicos", "tectonica"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["tectónica de placas y calor interno", "erosión y clima"], ["procesos endógenos", "procesos exógenos"]]

tipo: completar
respuestas_validas: ["tectónica de placas y calor interno", "erosión y clima"]

enunciado: "El ciclo de las rocas es impulsado por dos tipos de fuerzas principales: las fuerzas ___ y las fuerzas ___."

pasos:
  - "Identifica los procesos internos (endógenos) que mueven el material desde el interior."
  - "Identifica los procesos externos (exógenos) que modelan la superficie."

explicacion: |
  Los procesos internos (como la tectónica y el calor) mueven y transforman la materia desde el interior, mientras que los procesos externos (clima y erosión) actúan sobre la superficie.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ciclo_de_las_rocas"
  nivel: "intermedio"
  tags: ["rocas_magmaticas", "rocas_sedimentarias"]

tipo: mc
opciones_explicitas: ["Magma", "Sedimento", "Roca metamórfica", "Lava"]

enunciado: "Cuando una roca se somete a altas presiones y temperaturas sin llegar a fundirse, se transforma en una..."

explicacion: |
  La presión y el calor transforman las rocas existentes en rocas metamórficas antes de que puedan fundirse y volver a ser magma.
```

```
metadata:
  materia: "historia_profucha"
  tema: "ciclo_de_las_rocas"
  nivel: "avanzado"
  tags: ["sedimentacion", "procesos_externos"]

tipo: ordenar
opciones_explicitas: ["Meteorización", "Transporte", "Sedimentación", "Litificación"]

enunciado: "Ordena correctamente las etapas que ocurren desde la degradación de una roca en la superficie hasta la formación de una nueva roca sedimentaria:"

explicacion: |
  La roca se rompe (meteorización), es movida (transporte), se deposita (sedimentación) y finalmente se compacta (litificación).
```

```
metadata:
  materia: "historia_profunda"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["magma", "cristalizacion"]

tipo: completar
tolerancia_abs: 0

enunciado: "Cuando el magma se enfría y se solidifica, da origen a una roca de tipo ___."

explicacion: |
  El enfriamiento del magma (ya sea bajo la superficie o en la superficie como lava) produce rocas ígneas o magmáticas.
```

```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["magma", "roca_ignea"]

variables:
  datos: [["magma enfriado lentamente bajo la superficie", "roca intrusiva"], ["magma enfriado rápidamente en la superficie", "roca extrusiva"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["roca intrusiva", "roca extrusiva", "roca sedimentaria", "roca metamórfica"]

enunciado: "Si el magma se enfría lentamente bajo la superficie terrestre, el proceso de cristalización produce una {datos[idx][0]}."

explicacion: |
  El enfriamiento lento permite el desarrollo de cristales grandes, formando rocas ígneas intrusivas (plutónicas).
```

```
metadata:
  materia: "geologia"
  tema: "ciclo_las_rocas"
  nivel: "basico"
  tags: ["sedimento", "litificacion"]

variables:
  datos: [["sedimentos acumulados en el fondo de un lago", "roca sedimentaria"], ["cristales de granito bajo presión", "roca metamórfica"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["roca sedimentaria", "roca metamórfica", "roca ígnea", "magma"]

enunciado: "La acumulación, compactación y cementación de {datos[idx][0]} da lugar a una ___."

explicacion: |
  La litificación de sedimentos es el proceso mediante el cual se forman las rocas sedimentarias.
```

```
metadata:
  materia: "geologia"
  tema: "ciclo_las_rocas"
  nivel: "intermedio"
  tags: ["metamorfismo", "presion"]

variables:
  datos: [["una roca ígnea sometida a altas presiones y temperaturas", "roca metamórfica"], ["un sedimento depositado en un río", "roca sedimentaria"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["roca metamórfica", "roca ígnea", "roca sedimentaria", "magma"]

enunciado: "Cuando {datos[idx][0]} experimenta cambios físicos sin llegar a fundirse, se transforma en una ___."

explicacion: |
  El metamorfismo es la transformación de rocas preexistentes debido a cambios en la presión y temperatura.
```

```
metadata:
  materia: "geologia"
  tema: "ciclo_las_rocas"
  nivel: "intermedio"
  tags: ["erosion", "sedimentos"]

variables:
  datos: [["una roca sólida expuesta a la lluvia y el viento", "sedimentos"], ["un núcleo de magma", "magma"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["sedimentos", "magma", "roca metamórfica", "cristales"]

enunciado: "La meteorización y erosión de {datos[idx][0]} producen partículas sueltas llamadas ___."

explicacion: |
  La erosión rompe las rocas en fragmentos más pequeños llamados sedimentos.
```

```
metadata:
  materia: "geologia"
  tema: "ciclo_las_rocas"
  nivel: "avanzado"
  tags: ["fusion", "magma"]

variables:
  datos: [["una roca metamórfica que se funde por calor extremo", "magma"], ["un sedimento que se compacta", "roca sedimentaria"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["magma", "roca ígnea", "roca metamórfica", "sedimento"]

enunciado: "Si {datos[idx][0]} alcanza su punto de fusión, el material resultante es ___."

explicacion: |
  La fusión completa de cualquier tipo de roca produce magma, que es el origen de las rocas ígneas.
```

## Sección: ciencia-revolucion-cientifica (24 preguntas)

```
### 2 — Leyes del movimiento planetario
```

```
### 3 — Método experimental moderno
```

```
### 4 — Óptica y la naturaleza de la luz
```

```
### 5 — Matemáticas del movimiento
```

```
### 6 — La Ley de la Gravitación Universal
```

```
### 7 — La anatomía humana
```

```
### 8 — El descubrimiento de la circulación sanguínea
```

```
### 9 — El telescopio y las lunas de Júpiter
```

```
### 10 — La filosofía mecanicista
```

```
### 11 — El Royal Society
```

```
### 12 — La ley de la inercia
```

```
### 13 — El microscopio y los "animalículos"
```

```
### 14 — La teoría de los humores
```

```
### 15 — El almanaque de Nostradamus
```

```
### 16 — Las observaciones de Tycho Brahe
```

```
### 17 — La teoría de la generación espontánea
```

```
### 18 — El dualismo mente-cuerpo
```

```
### 19 — La ley de la gravitación y la manzana
```

```
### 20 — El sistema ticonico
```

```
### 21 — La filosofía natural de Hobbes
```

```
### 22 — El descubrimiento del oxígeno (aunque no se llamó así)
```

```
### 23 — La teoría de la luz corpuscular vs ondulatoria
```

```
### 24 — La imprenta y la difusión científica
```

```
### 25 — El gnomon y la sombra
```

## Sección: cinco-extinciones-masivas (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["geologia", "paleontologia"]

tipo: mc
opciones_explicitas: ["Ordovícico-Silúrico", "Devónico", "Pérmico-Triásico", "Cretácico-Paleógeno"]

enunciado: "La primera de las cinco grandes extinciones masivas de la historia de la Tierra ocurrió durante el periodo ___."

respuesta: "Ordovícico-Silúrico"

explicacion: |
  La extinción del Ordovícico-Silúrico (hace ~444 millones de años) fue causada principalmente por una glaciación intensa que redujo los niveles del mar y la oxigenación de los océanos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["permico", "extincion"]

variables:
  datos: [["Pérmico-Triásico", "La más devastadora"], ["Cretácico-Paleógeno", "La de los dinosaurios"]]
  idx: uno_de([0, 1])

tipo: mc
opciones_explicitas: ["Pérmico-Triásico", "Triásico-Jurásico", "Cretácico-Paleógeno"]

enunciado: "El evento conocido como 'La Gran Mortandad' ocurrió durante la extinción ___."

respuesta: datos[idx][0]

explicacion: |
  La extinción del Pérmico-Triásico fue la más severa de la historia, eliminando aproximadamente el 96% de las especies marinas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["asteroide", "dinosaurios"]

tipo: completar
tolerancia_abs: 0.1

enunciado: "La extinción del Cretácico-Paleógeno es frecuentemente asociada al impacto de un asteroide en la península de Yucatán. ¿Cuántos millones de años aproximadamente ocurrió este evento? (Escribe el número entero)"

respuesta: 66

explicacion: |
  Hace aproximadamente 66 millones de años, el impacto del asteroide Chicxulub marcó el fin de la era de los dinosaurios no avianos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "avanzado"
  tags: ["cronologia", "orden"]

tipo: ordenar
opciones_explicitas: ["Ordovícico-Silúrico", "Devónico", "Pérmico-Triásico", "Triásico-Jurásico", "Cretácico-Paleógeno"]

enunciado: "Ordena cronológicamente las cinco grandes extinciones masivas, desde la más antigua a la más reciente."

respuesta: ["Ordovícico-Silúrico", "Devónico", "Pérmico-Triásico", "Triásico-Jurásico", "Cretácico-Paleógeno"]

explicacion: |
  El orden correcto sigue la escala de tiempo geológico: Ordovícico (444 Ma), Devónico (375 Ma), Pérmico (252 Ma), Triásico (201 Ma) y Cretácico (66 Ma).
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["devonico", "oceanos"]

tipo: completar
respuestas_validas: ["anoxia", "oxigenación", "glaciación"]

enunciado: "Se cree que la extinción del Devónico fue causada por cambios en los niveles de ___ en los océanos, debido a la proliferación de plantas terrestres que aumentaron la escorrentía de nutrientes."

respuesta: "anoxia"

explicacion: |
  La expansión de la vegetación terrestre aumentó el aporte de nutrientes a los mares, provocando eutrofización y la posterior anoxia (falta de oxígeno) en las aguas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["permerico", "triasico", "extincion"]

respuesta: "96%"
tipo: completar
respuestas_validas: ["96%", "95%", "90%"]

enunciado: "La extinción del Pérmico-Triásico es conocida como 'la Gran Mortandad' debido a que se estima que causó la desaparición de hasta un ___ de las especies marinas."

explicacion: |
  Fue el evento de extinción más severo de la historia de la Tierra, eliminando la gran mayoría de la vida marina.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["permerico", "triasico", "magnitud"]

variables:
  escenario: uno_de([["Pérmico-Triásico", "la mayor"], ["Cretácico-Paleógeno", "la de los dinosaurios"]])

respuesta: escenario[0
tipo: mc
opciones_explicitas: ["Pérmico-Triásico", "Cretácico-Paleógeno", "Ordovícico-Silúrico", "Devónico-Carbonífero"]

enunciado: "La extinción que ocurrió hace aproximadamente 252 millones de años y fue la más devastadora de la historia es la del periodo {escenario[0]}."

explicacion: |
  El evento Pérmico-Triásico es el punto de extinción más grande registrado en el registro fósil.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["causas", "volcanismo", "permerico"]

respuesta: "Siberian Traps"
tipo: completar
tolerancia_abs: 0

enunciado: "Se cree que la causa principal de la extinción del Pérmico-Triásico fue el vulcanismo masivo asociado a los llamados {Siberian Traps}."

explicacion: |
  Las erupciones de los Traps de Siberia liberaron enormes cantidades de gases de efecto invernadero, provocando un calentamiento global extremo y acidificación de los océanos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "avanzado"
  tags: ["secuencia", "procesos"]

respuesta: ["Erupción masiva", "Calentamiento global", "Acidificación oceánica", "Extinción masiva"]
tipo: ordenar
opciones_explicitas: ["Erupción masiva", "Calentamiento global", "Acidificación oceánica", "Extinción masiva"]

enunciado: "Ordena la secuencia probable de eventos que desencadenaron la Gran Mortandad:"

pasos:
  - "Inicio del vulcanismo masivo"
  - "Aumento de la temperatura global"
  - "Cambio químico en los océanos"
  - "Colapso de la biodiversidad"

explicacion: |
  El ciclo comenzó con el vulcanismo extremo, que alteró la atmósfera y los océanos, llevando al colapso de los ecosistemas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["oceanos", "biodiversidad"]

variables:
  impacto: uno_de([["96%", "96%"], ["50%", "50%"], ["75%", "75%"]])

respuesta: impacto[1
tipo: mc
opciones_explicitas: ["96%", "50%", "75%", "10%"]

enunciado: "El impacto en la biodiversidad marina durante el evento del Pérmico-Triásico fue de aproximadamente un {impacto[0]} de especies extinguidas."

explicacion: |
  La acidificación y la anoxia (falta de oxígeno) en los océanos fueron fatales para la mayoría de los organismos marinos de la época.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["cretacico", "asteroide", "chicxulub"]

tipo: mc
opciones_explicitas: ["Impacto de un asteroide", "Erupción volcánica masiva", "Cambio climático gradual", "Fragmentación de un planeta"]

enunciado: "La extinción del Cretácico-Paleógeno, que ocurrió hace aproximadamente 66 millones de años, fue causada principalmente por ___."

explicacion: |
  El impacto de un asteroide en la península de Yucatán (cráter de Chicxulub) desencadenó cambios climáticos catastróficos que finalizaron el reinado de los dinosaurios no aviares.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["dinosaurios", "extincion"]

tipo: completar
respuestas_validas: ["no aviares", "no-aviares"]

enunciado: "La extinción masiva del Cretácico-Paleógeno acabó con la mayoría de los dinosaurios, con la excepción de los dinosaurios ___."

explicacion: |
  Los dinosaurios aviares (ancestros de las aves actuales) lograron sobrevivir a la catástrofe, mientras que los dinosaurios no aviares se extinguieron.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["secuencia", "causa_efecto"]

tipo: ordenar
opciones_explicitas: ["Impacto del asteroide", "Nube de escombros global", "Bloqueo de la luz solar", "Colapso de la fotosíntesis"]

enunciado: "Ordena cronológicamente los eventos que desencadenaron la extinción tras el impacto de Chicxulub:"

explicacion: |
  El impacto lanzó material al espacio que luego regresó a la atmósfera, bloqueando la luz solar y deteniendo la fotosíntesis, lo que colapsó las redes tróficas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["geologia", "crater"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Yucatán, México", "Chicxulub"],
    ["Península de Kola, Rusia", "Popigai"]
  ]

tipo: mc
opciones_explicitas: ["Chicxulub", "Popigai", "Sudamérica", "India"]

enunciado: "El cráter formado por el impacto que causó la extinción del Cretácico-Paleógeno se localiza en {escenarios[escenario_idx][0]} y se conoce como cráter de ___."

explicacion: |
  El cráter de Chicxulub en México es la evidencia geológica principal de este evento de extinción masiva.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "avanzado"
  tags: ["clima", "quimica_atmosferica"]

tipo: completar
tolerancia_abs: 0.1

enunciado: "Tras el impacto inicial y el invierno de impacto, la liberación de gases como el CO2 provocó un efecto de calentamiento global. Si un registro geológico muestra un aumento drástico de carbono, ¿cuántos millones de años aproximadamente ocurrió este evento de extinción? (Responde con el número entero)"

pasos:
  - "Identificar el periodo de la extinción (66 Ma)."
  - "Escribir el valor numérico sin texto."

explicacion: |
  La extinción ocurrió hace 66 millones de años, marcando el límite entre el período Cretácico y el Paleógeno.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["asteroides", "impacto", "dinodinos"]

enunciado: "Se cree que la extinción masiva del Cretácico-Paleógeno, que eliminó a los dinosaurios no avianos, fue causada principalmente por el impacto de un asteroide en la península de Yucatán. ¿Cuál fue la consecuencia inmediata más devastadora para la fotosíntesis?"

opciones_explicitas: ["Aumento de la temperatura global", "Bloqueo de la luz solar por polvo y cenizas", "Aumento del nivel del mar", "Acidificación extrema de los océanos"]

respuesta: "Bloqueo de la luz solar por polvo y cenizas"
tipo: "mc"

explicacion: |
  El impacto lanzó enormes cantidades de material en la atmósfera, bloqueando la luz solar durante meses o años, lo que detuvo la fotosíntesis y colapsó las cadenas alimentarias.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["volcanismo", "trapp", "extincion"]

variables:
  escenario: uno_de([["Siberian Traps", "Erupción masiva en Siberia"], ["Deccan Traps", "Erupción masiva en la India"]])

enunciado: "Durante la extinción del Pérmico-Triásico, la actividad de las {escenario[1]} liberó enormes cantidades de gases de efecto invernadero, provocando un cambio climático abrupto. ¿Qué fenómeno climático fue el principal responsable de la anoxia oceánica?"

opciones_explicitas: ["Enfriamiento global", "Calentamiento global extremo", "Glaciación masiva", "Ciclo de hielo y deshielo"]

respuesta: "Calentamiento global extremo"
tipo: "mc"

explicacion: |
  El aumento masivo de CO2 causó un calentamiento global extremo, lo que redujo la solubilidad del oxígeno en los océanos, provocando condiciones de anoxia (falta de oxígeno) que mataron la vida marina.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "avanzado"
  tags: ["nivel_del_mar", "plataformas_continentales"]

enunciado: "En varios eventos de extinción masiva, la variación del nivel del mar afectó la biodiversidad. Cuando el nivel del mar desciende drásticamente, las plataformas continentales quedan expuestas. Esto reduce el área de hábitat para los organismos que viven en aguas poco profundas. Completa el siguiente proceso:

El descenso del nivel del mar provoca la pérdida de hábitats en las plataformas continentales, lo que resulta en una disminución de la ___________ marina."

respuestas_validas: ["biodiversidad"]

respuesta: "biodiversidad"
tipo: "completar"

explicacion: |
  La reducción del área de las plataformas continentales elimina los hábitats más productivos y diversos del océano, afectando directamente la biodiversidad marina.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["glaciación", "ordovícico"]

enunciado: "La extinción del Ordovícico-Devónico está fuertemente asociada con una glaciación intensa. Ordena las consecuencias climáticas de este evento de mayor a menor impacto en la extinción de especies marinas:"

opciones_explicitas: ["Caída drástica del nivel del mar", "Glaciación global masiva", "Expansión de los polos de hielo", "Reducción de hábitats costeros"]

respuesta: ["Glaciación global masiva", "Expansión de los polos de hielo", "Caída drástica del nivel del mar", "Reducción de hábitats costeros"]
tipo: "ordenar"

explicacion: |
  La formación de grandes capas de hielo atrapó agua, haciendo que el nivel del mar bajara drásticamente y eliminara los hábitats de las plataformas continentales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["causas", "resumen"]

enunciado: "Las extinciones masivas suelen ser el resultado de cambios ambientales rápidos. Si un evento volcánico masivo libera grandes cantidades de CO2, el efecto inmediato en la temperatura es el ___________."

respuestas_validas: ["calentamiento"]

respuesta: "calentamiento"
tipo: "completar"

explicacion: |
  El CO2 es un gas de efecto invernadero; su liberación masiva atrapa más calor en la atmósfera, elevando la temperatura global.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["precambrico", "oxigeno"]

variables:
  idx: uno_de([0,1,2])
  escenarios: [
    ["La acumulación de oxígeno atmosférico tras la fotosíntesis de cianobacterias", "oxigenación"],
    ["El impacto de un gran asteroide en la Tierra primitiva", "impacto"],
    ["Intensas erupciones volcánicas masivas", "vulcanismo"]
  ]

respuesta: escenarios[idx][1
tipo: mc
opciones_explicitas: ["oxigenación", "impacto", "vulcanismo"]

enunciado: "La extinción del evento del Gran Oxígeno fue causada principalmente por la {escenarios[idx][0]}."

explicacion: |
  El aumento de oxígeno libre en la atmósfera fue tóxico para la mayoría de los organismos anaerobios de la época.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["paleozoico", "clima"]

variables:
  idx: uno_de([0,1,2])
  datos: [
    ["El grupo más afectado fue el de los...", "trilobites"],
    ["El principal agente causante fue el...", "enfriamiento"],
    ["La causa principal fue el cambio en el...", "nivel_del_mar"]
  ]
  respuestas: [
    ["trilobites", "enfriamiento", "nivel_del_mar"]
  ]

respuesta: datos[idx][1
tipo: completar
respuestas_validas: ["trilobites", "enfriamiento", "nivel_del_mar"]

enunciado: "Durante la extinción del Ordovícico-Devónico, el factor determinante fue el {datos[idx][1]}."

explicacion: |
  Cambios climáticos y fluctuaciones en el nivel del mar afectaron drásticamente la vida marina.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "avanzado"
  tags: ["la_gran_muerte", "trapp"]

variables:
  idx: uno_de([0,1,2])
  escenarios: [
    ["La gran muerte del Pérmico-Triásico fue causada por...", "vulcanismo"],
    ["El grupo que sufrió la mayor pérdida fue el de los...", "insectos"],
    ["El efecto invernadero fue provocado por...", "metano"]
  ]

respuesta: escenarios[idx][1
tipo: mc
opciones_explicitas: ["vulcanismo", "insectos", "metano"]

enunciado: "En el evento del Pérmico-Triásico, {escenarios[idx][0]}."

explicacion: |
  Conocida como "La Gran Muerte", fue la extinción más severa de la historia de la Tierra.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["dinosaurios", "pangea"]

variables:
  idx: uno_de([0,1,2])
  datos: [
    ["La fragmentación de Pangea liberó gases que causaron...", "calentamiento"],
    ["El grupo que comenzó a dominar tras la extinción fue el de los...", "dinosaurios"],
    ["La causa principal fue un aumento en el...", "CO2"]
  ]
  respuestas: [
    ["calentamiento", "dinosaurios", "CO2"]
  ]

respuesta: datos[idx][1
tipo: completar
respuestas_validas: ["calentamiento", "dinosaurios", "CO2"]

enunciado: "Tras la extinción del Triásico-Jurásico, el mundo cambió debido al {datos[idx][1]}."

explicacion: |
  La ruptura del supercontinente Pangea alteró el clima global y permitió la expansión de los dinosaurios.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["asteroide", "dinosaurios"]

variables:
  idx: uno_de([0,1,2])
  escenarios: [
    ["El asteroide Chicxulub causó la extinción de...", "dinosaurios"],
    ["El impacto masivo provocó un cambio en la...", "luz_solar"],
    ["La extinción del Cretácico afectó principalmente a...", "reptiles"]
  ]

respuesta: escenarios[idx][1
tipo: mc
opciones_explicitas: ["dinosaurios", "luz_solar", "reptiles"]

enunciado: "El evento del Cretácico-Paleógeno se caracteriza por la reducción de la {escenarios[idx][0]}."

explicacion: |
  El impacto de un asteroide bloqueó la luz solar, colapsando la fotosíntesis y las cadenas alimentarias.
```

## Sección: civilizaciones-antiguas (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "basico"
  tags: ["mesopotamia", "rios"]

respuesta: "Tigris y Éufrates"
tipo: completar
respuestas_validas: ["Tigris y Éufrates"]

enunciado: "La civilización de Mesopotamia se desarrolló entre los ríos ___."

explicacion: |
  Mesopotamia significa 'tierra entre ríos', refiriéndose específicamente al Tigris y al Éufrates.
```

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "basico"
  tags: ["egipto", "nilo"]

variables:
  escenario: uno_de([["Nilo", "Egipto"], ["Indo", "India"], ["Huang He", "China"]])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["Egipto", "India", "China"]

enunciado: "El río {escenario[1]} fue fundamental para el desarrollo de la civilización de {escenario[0]}."

explicacion: |
  Heródoto llamó a Egipto 'el don del Nilo' debido a sus inundaciones predecibles que permitían la agricultura.
```

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "intermedio"
  tags: ["china", "huang_he"]

respuesta: "Huang He"
tipo: mc
opciones_explicitas: ["Yangtsé", "Huang He", "Indo", "Ganges"]

enunciado: "La civilización china antigua se asentó principalmente a lo largo del río ___."

explicacion: |
  El Huang He (Río Amarillo) es conocido por sus sedimentos de loess que fertilizaban las tierras.
```

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "avanzado"
  tags: ["cronologia", "civilizaciones"]

respuesta: ["Mesopotamia", "Egipto", "Indo", "China"]
tipo: ordenar
opciones_explicitas: ["Mesopotamia", "Egipto", "Indo", "China"]

enunciado: "Ordena cronológicamente el surgimiento de estas civilizaciones fluviales (de la más antigua a la más reciente):"

explicacion: |
  Aunque los periodos se solapan, el registro arqueológico sitúa el surgimiento de las ciudades-estado en Mesopotamia y el valle del Nilo como los más tempranos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "intermedio"
  tags: ["india", "indo"]

variables:
  datos: [[ "Indo", "India" ], [ "Nilo", "Egipto" ], [ "Tigris", "Mesopotamia" ]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["India", "Egipto", "Mesopotamia"]

enunciado: "El río {datos[idx][0]} fue el eje central de la civilización de {datos[idx][1]}."

explicacion: |
  La civilización del Valle del Indo (actual Pakistán/Noroeste de India) fue una de las más avanzadas de la antigüedad.
```

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "basico"
  tags: ["geografia", "rios"]

respuesta: "riego"
tipo: completar
respuestas_validas: ["riego"]

enunciado: "El asentamiento de las primeras civilizaciones cerca de grandes ríos permitió el desarrollo de la agricultura gracias al sistema de ___."

explicacion: |
  El acceso constante al agua permitió crear sistemas de riego para cultivar en zonas que de otro modo serían áridas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "basico"
  tags: ["geografia", "causas"]

variables:
  escenario: uno_de([
    ["Mesopotamia", "Tigris y Éufrates"],
    ["Egipto", "Nilo"],
    ["India", "Indo y Ganges"]
  ])

respuesta: escenario[0][1
tipo: mc
opciones_explicitas: ["Mesopotamia, Tigris y Éufrates", "Egipto, Nilo", "India, Indo y Ganges"]

enunciado: "La civilización de {escenario[0][0]} se desarrolló principalmente a orillas de los ríos {escenario[0][1]}."

explicacion: |
  Cada gran civilización antigua estuvo ligada a un sistema fluvial específico que proporcionaba sustento.
```

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "intermedio"
  tags: ["agricultura", "suelo"]

respuesta: "fértiles"
tipo: completar
respuestas_validas: ["fértiles"]

enunciado: "Las inundaciones periódicas de los ríos depositaban sedimentos que hacían que las tierras fueran muy ___."

explicacion: |
  El limo o sedimento depositado por las crecidas enriquecía el suelo, permitiendo excedentes de producción.
```

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "intermedio"
  tags: ["transporte", "comercio"]

respuesta: "transporte"
tipo: completar
respuestas_validas: ["transporte"]

enunciado: "Además de la agricultura, los ríos servían como una vía de ___ para el comercio entre diferentes asentamientos."

explicacion: |
  Los ríos funcionaban como las primeras "autopistas", facilitando el movimiento de personas y mercancías.
```

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "avanzado"
  tags: ["causas", "multicausalidad"]

respuesta: ["Agua para riego", "Tierras fértiles", "Transporte fluvial"]
tipo: ordenar
opciones_explicitas: ["Agua para riego", "Tierras fértiles", "Transporte fluvial"]

enunciado: "Ordena los tres factores principales que explican por qué las civilizaciones se asentaron junto a los ríos, desde el más vital para la supervivencia hasta el que facilita la expansión:"

pasos:
  - "1. Necesidad básica de supervivencia (agua para cultivos)."
  - "2. Calidad del suelo tras las crecidas."
  - "3. Facilidad de movimiento y comercio."

explicacion: |
  El surgimiento fue un proceso multicausal: el agua permite la vida, el suelo fértil permite el excedente y el río permite la conexión.
```

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "basico"
  tags: ["civilizacion", "rasgos_comunes"]

tipo: mc
opciones_explicitas: ["Nómadas sin escritura", "Ciudades, escritura y gobierno centralizado", "Pequeños grupos de caza", "Sociedades sin división del trabajo"]

enunciado: "Para que un asentamiento sea considerado una 'civilización' en términos históricos, debe presentar rasgos como la vida urbana, la capacidad de registro y una estructura de poder. ¿Cuál de las siguientes opciones describe mejor estos rasgos?"

explicacion: |
  Las civilizaciones se distinguen de las bandas de cazadores-recolectores por la complejidad de su organización: ciudades permanentes, sistemas de escritura para la administración, un gobierno centralizado y una estructura social con división del trabajo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "intermedio"
  tags: ["escritura", "administracion"]

tipo: completar
respuestas_validas: ["administración", "comunicación"]

enunciado: "La invención de la escritura en las civilizaciones antiguas tuvo como función primordial la __________, permitiendo llevar el control de excedentes agrícolas, tributos y leyes por parte del Estado."

explicacion: |
  La escritura surgió principalmente como una herramienta contable y administrativa para gestionar la complejidad de las sociedades urbanas y el excedente de producción.
```

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "basico"
  tags: ["division_del_trabajo", "economia"]

tipo: mc
opciones_explicitas: ["Todos realizan las mismas tareas", "Especialización de funciones y división del trabajo", "Dependencia total de la caza", "Ausencia de jerarquías"]

enunciado: "El aumento de la producción agrícola permitió que no todos los miembros de la sociedad tuvieran que dedicarse a la obtención de alimentos. Este fenómeno se conoce como:"

explicacion: |
  La división del trabajo permite que aparezcan especialistas (artesanos, sacerdotes, guerreros, escribas), lo cual es un pilar fundamental de las civilizaciones complejas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "intermedio"
  tags: ["gobierno", "centralizacion"]

tipo: completar
respuestas_validas: ["centralizado", "descentralizado"]

enunciado: "A diferencia de las tribus igualitarias, las civilizaciones antiguas se caracterizan por poseer un gobierno __________, donde el poder político se concentra en una autoridad que coordina la sociedad."

explicacion: |
  El gobierno centralizado permite la coordinación de grandes obras públicas (como canales de riego) y la gestión de ejércitos y leyes a gran escala.
```

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "avanzado"
  tags: ["secuencia", "desarrollo"]

tipo: ordenar
opciones_explicitas: ["Agricultura excedente", "Sedentarismo y ciudades", "Especialización del trabajo", "Escritura y administración"]

enunciado: "Ordena cronológicamente los procesos que permiten el surgimiento de una civilización compleja, desde la base económica hasta la institucionalización:"

explicacion: |
  Primero el excedente agrícola permite el sedentarismo; esto genera ciudades, lo que a su vez requiere especialistas y, finalmente, un sistema de registro (escritura) para gestionar la complejidad.
```

```
metadata:
  materia: "historia"
  tema: "civilizaciones_antiguas"
  nivel: "basico"
  tags: ["america", "origen"]

respuesta: "independiente"
tipo: "completar"
respuestas_validas: ["independiente"]

enunciado: "Las civilizaciones de América, como Caral y los Olmecas, se desarrollaron de forma ___ a las civilizaciones de Eurasia y África."

explicacion: |
  Las civilizaciones americanas surgieron de manera autónoma, sin contacto con el Viejo Mundo en sus etapas formativas.
```

```
metadata:
  materia: "historia"
  tema: "civilizaciones_antiguas"
  nivel: "intermedio"
  tags: ["andes", "caral"]

variables:
  datos: [["Caral", "Perú", "más antigua"], ["Chavín", "Perú", "formadora"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][0
tipo: "mc"
opciones_explicitas: ["Caral", "Chavín", "Moche", "Nazca"]

enunciado: "La civilización de {datos[idx][0]} se encuentra ubicada en el actual territorio de {datos[idx][1]} y es considerada una de las más ___ del continente americano."

explicacion: |
  Caral es la civilización más antigua de América, situada en la costa central de Perú.
```

```
metadata:
  materia: "historia"
  tema: "civilizaciones_antiguas"
  nivel: "basico"
  tags: ["mesoamerica", "olmecas"]

respuesta: "cabezas colosales"
tipo: "mc"
opciones_explicitas: ["pirámides escalonadas", "cabezas colosales", "códices de papel", "calendario solar"]

enunciado: "La cultura Olmeca, considerada la 'cultura madre' de Mesoamérica, es famosa por la escultura de sus ___."

explicacion: |
  Los Olmecas dejaron grandes monumentos de piedra conocidos como cabezas colosales.
```

```
metadata:
  materia: "historia"
  tema: "civilizaciones_antiguas"
  nivel: "avanzado"
  tags: ["mesoamerica", "ordenar"]

respuesta: ["Olmecas", "Mayas", "Aztecas"]
tipo: "ordenar"
opciones_explicitas: ["Olmecas", "Mayas", "Aztecas"]

enunciado: "Ordena cronológicamente las siguientes culturas de Mesoamérica, de la más antigua a la más reciente:"

pasos:
  - "Identifica la cultura madre."
  - "Ubica el periodo de esplendor clásico."
  - "Ubica el periodo de expansión imperialista."

explicacion: |
  El orden correcto es: Olmecas (Preclásico), Mayas (Clásico/Postclásico) y Aztecas (Posclásico).
```

```
metadata:
  materia: "historia"
  tema: "civilizaciones_antiguas"
  nivel: "intermedio"
  tags: ["mayas", "escritura"]

respuesta: "glifos"
tipo: "completar"
respuestas_validas: ["glifos"]

enunciado: "Los mayas desarrollaron un complejo sistema de escritura basado en ___."

explicacion: |
  El sistema de escritura maya era logosilábico, compuesto por glifos que representaban palabras o sonidos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "basico"
  tags: ["mesopotamia", "rios"]

variables:
  datos: [["Mesopotamia", "Tigris y Éufrates"], ["Egipto", "Nilo"], ["Indo", "Indo"]]
  idx: uno_de([0,1,2])

enunciado: "La civilización de {datos[idx][0]} se desarrolló a orillas del río {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Tigris y Éufrates", "Nilo", "Indo", "Río Amarillo"]
explicacion: |
  La civilización de Mesopotamia se desarrolló a orillas del río Tigris y Éufrates, la de Egipto junto al Nilo, y la de Indo cerca del río Indo. El Río Amarillo no está asociado con ninguna de estas tres civilizaciones antiguas mencionadas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "basico"
  tags: ["egipto", "nilo"]

enunciado: "El río que fue considerado una deidad y motor de la civilización egipcia es el ___."

respuestas_validas: ["Nilo"]
respuesta: "Nilo"
tipo: completar
```

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "basico"
  tags: ["china", "civilizaciones"]

variables:
  datos: [["China", "Río Amarillo"], ["Mesopotamia", "Tigris"], ["Egipto", "Nilo"]]
  idx: uno_de([0,1,2])

enunciado: "Asocia la civilización con su río correspondiente: {datos[idx][0]} -> ___"

respuestas_validas: ["Río Amarillo", "Tigris", "Nilo"]
respuesta: datos[idx][1
tipo: completar
```

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "intermedio"
  tags: ["ordenar", "geografia"]

enunciado: "Ordena las siguientes civilizaciones según el orden de su ubicación geográfica de norte a sur (considerando sus ríos principales):"

opciones_explicitas: ["Mesopotamia", "Egipto", "Indo"]
respuesta: ["Mesopotamia", "Egipto", "Indo"]
tipo: ordenar
```

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "intermedio"
  tags: ["identificacion"]

variables:
  pares: [["Egipto", "Nilo"], ["China", "Yangtsé"], ["Mesopotamia", "Tigris"]]
  idx: uno_de([0,1,2])

enunciado: "Si estamos analizando la región de {pares[idx][0]}, el río principal es el ___."

respuestas_validas: ["Nilo", "Yangtsé", "Tigris"]
respuesta: pares[idx][1
tipo: completar
```
