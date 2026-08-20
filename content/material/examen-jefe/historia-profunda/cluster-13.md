# Examen jefe — Dominio de Imperios Antiguos

> Logro #111. Completaste el examen sobre los grandes imperios y la revolución de la imprenta. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **121 preguntas totales** en 5/5 secciones.

---

## Sección: imperio-han-china (24 preguntas)

```
### 2 — Fundador de la dinastía Han
```

```
### 3 — El papel de Sima Qian
```

```
### 4 — Expansión territorial bajo Wu
```

```
### 5 — La Ruta de la Seda
```

```
### 6 — Revolución agrícola: el arado de hierro
```

```
### 7 — La Rebelión de los Turantes Amarillos
```

```
### 8 — Sistema de selección de funcionarios
```

```
### 9 — Invasión de Wang Mang
```

```
### 10 — Recuperación bajo Guangwu
```

```
### 11 — Batalla de Red Cliffs
```

```
### 12 — Escritura y papel
```

```
### 13 — Geógrafo y sismógrafo
```

```
### 14 — Relación con los Xiongnu
```

```
### 15 — Caída final de Han
```

```
### 16 — Confucianismo como ideología estatal
```

```
### 17 — Economía y moneda
```

```
### 18 — Ban Chao y el oeste
```

```
### 19 — Batalla de Mobei
```

```
### 20 — Wei Qing
```

```
### 21 — El *Shijing*
```

```
### 22 — Tomba de Mawangdui
```

```
### 23 — Dong Zhuo
```

```
### 24 — Lü Bu
```

```
### 25 — Cao Cao
```

## Sección: imperio-persa (24 preguntas)

```
### 2 — Edicto de Ciro sobre los judíos
```

```
### 3 — Sistema de correo real
```

```
### 4 — Batalla de Termópilas
```

```
### 5 — Religión oficial del imperio
```

```
### 6 — Carretera Real
```

```
### 7 — Muerte de Ciro II
```

```
### 8 — Satrapías
```

```
### 9 — Batalla de Platea
```

```
### 10 — Moneda imperial
```

```
### 11 — Jardines de Babilonia
```

```
### 12 — Tratado de paz con Atenas
```

```
### 13 — Mausoleo de Ciro
```

```
### 14 — Relieve de Behistún
```

```
### 15 — Fin del imperio
```

```
### 16 — Culto a Ahura Mazda
```

```
### 17 — Tropa de los Inmortales
```

```
### 18 — Ciro y los judíos
```

```
### 19 — Palacio de Apadana
```

```
### 20 — Guerras Médicas
```

```
### 21 — Darío y la reforma administrativa
```

```
### 22 — Nabucodonosor y Babilonia
```

```
### 23 — Jerjes y el canal de Suez
```

```
### 24 — Arte aqueménida
```

```
### 25 — Caída de Persépolis
```

## Sección: imperios-expansion (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "basico"
  tags: ["definicion", "politica"]

tipo: mc
opciones_explicitas: ["Una alianza de naciones con fines comerciales", "Una entidad política que domina y gobierna sobre otros pueblos y territorios diversos", "Un sistema de gobierno democrático basado en el consenso"]

enunciado: "En términos de ciencia política e historia, ¿qué define fundamentalmente a un imperio?"

explicacion: |
  Un imperio se caracteriza por el ejercicio del poder de una entidad política central sobre una variedad de pueblos y territorios, a menudo mediante la conquista militar o la expansión territorial.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "basico"
  tags: ["expansion", "conquista"]

tipo: completar
respuestas_validas: ["conquista militar", "acuerdos diplomáticos"]

enunciado: "Aunque existen diversas formas de expansión, históricamente los imperios suelen establecer su dominio sobre nuevos territorios mediante la ________."

explicacion: |
  Si bien la diplomacia existió, el modelo imperial clásico se define por la expansión mediante la conquista militar para integrar nuevos territorios y pueblos al control del centro.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "intermedio"
  tags: ["estructura", "territorio"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["territorios diversos", "pueblos conquistados"], ["un solo pueblo homogéneo", "un solo territorio pequeño"]]

tipo: mc
opciones_explicitas: ["Un territorio con un solo grupo étnico", "Un centro de poder que gobierna sobre territorios y pueblos diversos", "Una confederación de estados soberanos"]

enunciado: "Un imperio se distingue de un estado-nación moderno porque su estructura incluye {datos[escenario_idx][0]} y {datos[escenario_idx][1]}."

explicacion: |
  La diversidad es la clave: un imperio no es un bloque homogéneo, sino un centro que gobierna sobre múltiples realidades culturales y geográficas.
```

```
metadata:
  materia: "historia_profucha"
  tema: "imperios_expansion"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

tipo: ordenar
opciones_explicitas: ["Expansión militar", "Conquista de nuevos territorios", "Establecimiento de administración central", "Integración de pueblos diversos"]

enunciado: "Ordena cronológicamente las etapas típicas de la formación de un imperio expansionista:"

explicacion: |
  El proceso suele comenzar con la fuerza militar, seguida de la ocupación territorial, la creación de una burocracia para controlar lo ganado y, finalmente, la gestión de la diversidad de los pueblos sometidos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "avanzado"
  tags: ["soberania", "gobierno"]

variables:
  caso_idx: uno_de([0, 1])
  ejemplos: [["un imperio romano", "un estado moderno"], ["pueblos diversos", "una sola nación"]]

tipo: completar
tolerancia_abs: 0

enunciado: "Si comparamos {ejemplos[caso_idx][0]} con {ejemplos[caso_idx][1]}, la característica principal que define al primero es su capacidad de gobernar sobre {ejemplos[caso_idx][1]}."

explicacion: |
  La esencia del imperio radica en la escala y la heterogeneidad: el control de un centro sobre múltiples entidades distintas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "basico"
  tags: ["persia", "administracion"]

respuesta: "satrapías"
tipo: completar
respuestas_validas: ["satrapías", "satrapías", "satrapías"]

enunciado: "Para administrar su vasto territorio, el Imperio Persa se dividió en provincias gobernadas por funcionarios llamados _________."

explicacion: |
  El Imperio Persa (Aqueménida) utilizaba un sistema de satrapías para mantener el control sobre sus diversas regiones.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "intermedio"
  tags: ["alejandro_magno", "helenismo"]

variables:
  escenario: uno_de([
    ["Grecia", "Macedonia"],
    ["Egipto", "Dinastía Ptolemaica"],
    ["India", "Reino de los Indo-Griegos"]
  ])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["Grecia", "Macedonia", "Egipto", "Dinastía Ptolemaica", "India", "Reino de los Indo-Griegos"]

enunciado: "Tras la muerte de Alejandro Magno, su imperio se fragmentó. ¿Qué región fue gobernada por la dinastía Ptolemaica?"

explicacion: |
  El imperio se dividió entre sus generales; Ptolomeo I Soter fundó la dinastía que gobernó Egipto.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "basico"
  tags: ["roma", "politica"]

respuesta: "República"
tipo: mc
opciones_explicitas: ["República", "Monarquía", "Imperio", "Dictadura"]

enunciado: "Antes de convertirse en un Imperio bajo el mando de Augusto, Roma fue gobernada durante siglos bajo el sistema de la _________."

explicacion: |
  La República Romana se caracterizó por el equilibrio de poder entre el Senado, los magistrados y las asambleas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "avanzado"
  tags: ["china", "dinastias"]

variables:
  datos: [
    ["Qin", "Unificó China"],
    ["Han", "Estableció la Ruta de la Seda"],
    ["Tang", "Edad de Oro de la poesía"]
  ]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["Unificó China", "Estableció la Ruta de la Seda", "Edad de Oro de la poesía"]

enunciado: "La dinastía {datos[idx][0]} fue fundamental en la historia china porque {datos[idx][1]}."

explicacion: |
  Cada dinastía aportó elementos clave al desarrollo de la civilización china.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "intermedio"
  tags: ["roma", "etapas"]

respuesta: ["Monarquía", "República", "Imperio"]
tipo: ordenar
opciones_explicitas: ["Monarquía", "República", "Imperio"]

enunciado: "Ordena cronológicamente las tres etapas principales de la historia de la civilización romana:"

explicacion: |
  La historia de Roma comienza con la Monarquía, sigue con la expansión de la República y culmina con el Imperio.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estrategias_expansion"
  nivel: "basico"
  tags: ["conquista", "militar"]

respuesta: "conquista militar"
tipo: mc

enunciado: "La estrategia de expansión que consiste en la anexión de nuevos territorios mediante el uso de la fuerza armada se denomina ___."

opciones_explicitas: ["conquista militar", "tratado diplomático", "intercambio cultural", "asimilación religiosa"]

explicacion: |
  La conquista militar ha sido históricamente uno de los métodos más directos para la expansión de un imperio, permitiendo la toma de recursos y control territorial inmediato.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estrategias_expansion"
  nivel: "intermedio"
  tags: ["infraestructura", "caminos"]

variables:
  escenario: uno_de([
    ["un sistema de calzadas romanas", "facilitar el movimiento de legiones y el comercio"],
    ["la Gran Muralla China", "defender fronteras y controlar el paso de caravanas"],
    ["el sistema de caminos del Inca", "conectar los diversos puntos del Tahuantinsuyo para la administración"]
  ])

respuesta: escenario[1
tipo: completar
respuestas_validas: ["facilitar el movimiento de legiones y el comercio", "defender fronteras y controlar el paso de caravanas", "conectar los diversos puntos del Tahuantinsuyo para la administración"]

enunciado: "El desarrollo de obras como {escenario[0]} tenía como objetivo principal {escenario[1]}."

explicacion: |
  La construcción de infraestructura vial es una herramienta de poder que permite la proyección de la fuerza militar y la integración económica del territorio conquistado.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estrategias_expansion"
  nivel: "avanzado"
  tags: ["administracion", "centralizacion"]

respuesta: "centralizada"
tipo: mc

enunciado: "Cuando un imperio establece un gobierno único que ejerce el control sobre territorios con diversas culturas y leyes, está aplicando una administración ___."

opciones_explicitas: ["descentralizada", "centralizada", "autónoma", "federativa"]

explicacion: |
  La administración centralizada permite al núcleo del imperio imponer su voluntad y recaudar tributos de manera eficiente en zonas distantes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estrategias_expansion"
  nivel: "intermedio"
  tags: ["comercio", "rutas"]

respuesta: "Ruta de la Seda"
tipo: completar
respuestas_validas: ["Ruta de la Seda", "Ruta de la Fraga", "Ruta del Ámbar"]

enunciado: "La expansión de los imperios asiáticos a menudo se vio impulsada por el control de las redes comerciales, siendo la ___ un ejemplo fundamental de conexión entre Oriente y Occidente."

explicacion: |
  El control de las rutas comerciales permite al imperio no solo obtener riqueza mediante impuestos, sino también expandir su influencia cultural.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estrategias_expansion"
  nivel: "intermedio"
  tags: ["estrategias", "ordenar"]

respuesta: ["Conquista militar", "Control de rutas comerciales", "Construcción de infraestructura", "Administración de territorios"]
tipo: ordenar
opciones_explicitas: ["Conquista militar", "Control de rutas comerciales", "Construcción de infraestructura", "Administración de territorios"]

enunciado: "Ordene las fases típicas de una expansión imperial desde la fase de choque hasta la fase de consolidación:"

explicacion: |
  Primero se suele imponer la fuerza (conquista), luego se asegura la riqueza (comercio), se facilita el movimiento (infraestructura) y finalmente se estabiliza el control (administración).
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "intermedio"
  tags: ["gobierno", "diversidad"]

variables:
  escenario: uno_de([
    ["El Imperio Romano implementaba el culto al Emperador en las provincias para unificar la lealtad.", "asimilación"],
    ["El Imperio Persa permitía que los pueblos conquistados mantuvieran sus leyes y religiones.", "tolerancia"],
    ["El Imperio Inca exigía tributos y trabajo (mita) pero permitía cultos locales bajo el Sol.", "autonomia"]
  ])

enunciado: "Un imperio que permite que sus súbditos conserven sus propias leyes y costumbres a cambio de lealtad y tributos está aplicando una política de {escenario[1]}."

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["asimilación", "tolerancia", "autonomia"]

explicacion: |
  La tolerancia religiosa y cultural es una estrategia para reducir la resistencia en territorios recién conquistados, permitiendo que las estructuras locales operen bajo la soberanía imperial.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "basico"
  tags: ["cultura", "identidad"]

respuesta: "asimilación"
tipo: completar
respuestas_validas: ["asimilación"]

enunciado: "Cuando un imperio busca que los pueblos conquistados adopten su lengua, religión y costumbres, eliminando gradualmente la identidad original, se dice que busca la ________."

explicacion: |
  La asimilación es un proceso de integración cultural profunda donde la identidad del conquistado es absorbida por la del conquistador.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "avanzado"
  tags: ["tributo", "autonomia"]

variables:
  caso: uno_de([
    ["Un imperio que deja gobernadores locales con poder absoluto pero exige oro.", "autonomia"],
    ["Un imperio que impone sus propios jueces y gobernadores en cada ciudad.", "centralizacion"],
    ["Un imperio que obliga a todos a hablar su lengua y vestir su ropa.", "asimilacion"]
  ])

enunciado: "En el modelo de {caso[0]}, el desafío principal es asegurar que la ________ sea efectiva para financiar el centro sin causar rebeliones por exceso de control."

respuesta: caso[0
tipo: mc
opciones_explicitas: ["autonomia", "centralizacion", "asimilacion"]

explicacion: |
  La autonomía local es un compromiso entre el control central y la libertad de las provincias; el éxito depende de la capacidad de recaudar tributos sin desatar revueltas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

opciones_explicitas: ["Conquista militar", "Imposición de tributos", "Establecimiento de administración", "Integración cultural"]
respuesta: ["Conquista militar", "Imposición de tributos", "Establecimiento de administración", "Integración cultural"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas típicas de la consolidación de un imperio sobre un territorio diverso:"

explicacion: |
  La expansión suele seguir un patrón: primero la fuerza militar, luego la extracción de recursos (tributo), la creación de una estructura de gobierno y, finalmente, la integración de la población al sistema imperial.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "intermedio"
  tags: ["conflicto", "gestion"]

variables:
  conflicto: uno_de([
    ["La falta de tolerancia religiosa suele derivar en...", "rebeliones"],
    ["La asimilación forzada suele derivar en...", "resistencia"],
    ["La autonomía excesiva suele derivar en...", "secesion"]
  ])

enunciado: "Si un imperio intenta imponer una única religión en un territorio con fuertes tradiciones locales, lo más probable es que surjan {conflicto[0]}."

respuesta: conflicto[0
tipo: mc
opciones_explicitas: ["rebeliones", "resistencia", "secesion"]

explicacion: |
  La imposición cultural es una de las causas más comunes de conflicto interno y levantamientos armados en la historia de los grandes imperios.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "basico"
  tags: ["asia", "comercio"]

variables:
  datos: [["controlaba las rutas comerciales que conectaban China con el Mediterráneo", "Imperio Han"], ["dominaba las estepas de Asia Central facilitando el comercio de seda", "Imperio Mongol"]]
  idx: uno_de([0, 1])

enunciado: "El imperio que {datos[idx][0]} era el {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Imperio Han", "Imperio Mongol", "Imperio Romano", "Imperio Persa"]

explicacion: |
  El escenario seleccionado describe al {datos[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "basico"
  tags: ["europa", "mediterraneo"]

variables:
  datos: [["dominaba todo el contorno del Mar Mediterráneo", "Imperio Romano"], ["se expandió por el Mediterráneo tras las Guerras Púnicas", "Imperio Romano"]]
  idx: uno_de([0, 1])

enunciado: "Un rasgo distintivo del {datos[idx][1]} es que {datos[idx][0]}."

respuesta: datos[idx][1
tipo: completar
respuestas_validas: ["Imperio Romano"]

explicacion: |
  La expansión de {datos[idx][1]} fue clave para la unificación de Europa y el norte de África.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "intermedio"
  tags: ["america", "andes"]

variables:
  datos: [["el sistema de caminos llamado Qhapaq Ñan", "Imperio Inca"], ["la administración mediante quipus", "Imperio Inca"]]
  idx: uno_de([0, 1])

enunciado: "El uso de {datos[idx][0]} es característico del {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Imperio Inca", "Imperio Azteca", "Cultura Maya", "Imperio Wari"]

explicacion: |
  {datos[idx][1]} se caracterizó por su avanzada ingeniería y administración.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "avanzado"
  tags: ["islam", "medievo"]

variables:
  datos: [["se extendió rápidamente desde la Península Arábiga", "Califato Omeya"], ["llegó a su mayor esplendor con la expansión de la lengua árabe", "Califato Omeya"]]
  idx: uno_de([0, 1])

enunciado: "El imperio que {datos[idx][0]} fue el {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Califato Omeya", "Califato Abasí", "Imperio Otomano", "Imperio Safávida"]

explicacion: |
  {datos[idx][1]} fue fundamental para la difusión del Islam.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "intermedio"
  tags: ["asia", "japon"]

variables:
  datos: [["la unificación de las provincias bajo un mando centralizado", "Shogunato Tokugawa"], ["el control de las islas mediante el sistema de daimyo", "Shogunato Tokugawa"]]
  idx: uno_de([0, 1])

enunciado: "La característica de {datos[idx][0]} define al {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["Shogunato Tokugawa"]

explicacion: |
  {datos[idx][1]} marcó un periodo de estabilidad y aislamiento en Japón.
```

## Sección: imprenta (24 preguntas)

```
### 2 — El Libro de las 42 Líneas
```

```
### 3 — Material de los tipos móviles
```

```
### 4 — La Biblia de Gutenberg y el papel
```

```
### 5 — Imprenta en Italia: Roma
```

```
### 6 — Venecia como capital editorial
```

```
### 7 — Aldo Manucio y el itálico
```

```
### 8 — Imprenta en España: Sevilla
```

```
### 9 — La Bula In Coena Domini y la imprenta
```

```
### 10 — La Reforma Protestante y los folletos
```

```
### 11 — La Biblia de Lutero
```

```
### 12 — La Inquisición y el Índice
```

```
### 13 — Imprenta en el Imperio Otomano
```

```
### 14 — La imprenta en el mundo islámico
```

```
### 15 — La imprenta en China
```

```
### 16 — La imprenta en Corea
```

```
### 17 — La imprenta en Japón
```

```
### 18 — La imprenta en el Nuevo Mundo
```

```
### 19 — La imprenta en Brasil
```

```
### 20 — La imprenta en Rusia
```

```
### 21 — La imprenta en Inglaterra
```

```
### 22 — La imprenta en Francia
```

```
### 23 — La imprenta en los Países Bajos
```

```
### 24 — La imprenta en Polonia
```

```
### 25 — La imprenta en Portugal
```

## Sección: india-antigua (24 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "india_antigua"
  nivel: "intermedio"
  tags: ["sociedad", "varna"]
tipo: mc
enunciado: En la antigua India, la estructura social jerárquica conocida como sistema varna dividía a la población en cuatro grandes grupos. ¿Cuál de los siguientes grupos estaba compuesto tradicionalmente por sacerdotes y maestros?
opciones_explicitas:
  - Kshatriya
  - Brahman
  - Vaishya
  - Shudra
respuesta: Brahman
explicacion: Los Brahmanes eran la casta sacerdotal, encargada del estudio de los Vedas y la realización de rituales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "india_antigua"
  nivel: "intermedio"
  tags: ["civilizacion", "declive"]
tipo: completar
enunciado: La antigua civilización del Valle del Indo, conocida por sus ciudades planeadas como Mohenjo-Daro, entró en un periodo de declive y abandono alrededor del año ____ a. C.
respuesta: 1900
respuestas_validas:
  - 1900
  - 1900 a.C.
  - 1900 AC
explicacion: Hacia el 1900 a. C., factores como cambios climáticos, sequías y el desvío de los ríos contribuyeron al abandono de las grandes ciudades del Indo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "india_antigua"
  nivel: "intermedio"
  tags: ["religion", "karma"]
tipo: vf
enunciado: En el pensamiento religioso de la antigua India, el concepto de Karma sostiene que las acciones de una persona determinan directamente su estado en la siguiente reencarnación.
respuesta: verdadero
explicacion: El Karma es la ley de causa y efecto en el dharma, donde las acciones morales o inmorales influyen en el ciclo de renacimiento (samsara).
```

```
metadata:
  materia: "historia_profunda"
  tema: "india_antigua"
  nivel: "intermedio"
  tags: ["imperio", "maurya", "ashoka"]
tipo: mc
enunciado: Tras la sangrienta Guerra de Kalinga, el emperador Ashoka del Imperio Maurya adoptó el budismo y promulgó sus principios a través de edictos grabados en pilares y rocas. ¿Cuál fue un cambio político notable derivado de esta conversión?
opciones_explicitas:
  - Abolición total del ejército
  - Promoción de la no violencia (ahimsa) y la tolerancia religiosa
  - Restablecimiento del sacrificio animal en los rituales védicos
  - Expulsión de todos los monjes budistas fuera del imperio
respuesta: Promoción de la no violencia (ahimsa) y la tolerancia religiosa
explicacion: Ashoka no abolió el ejército, pero sí promovió activamente la ahimsa, la construcción de hospicios, la protección de animales y la tolerancia hacia otras sectas religiosas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "india_antigua"
  nivel: "intermedio"
  tags: ["arianos", "invacion"]
tipo: completar
enunciado: Los pueblos indoiranios que entraron en la región del subcontinente indio alrededor del 1500 a. C. son comúnmente denominados en la historiografía tradicional como los ______.
respuesta: arios
respuestas_validas:
  - arios
  - Arias
  - ario
  - arias
explicacion: El término "arios" se utiliza para referirse a los grupos lingüísticos y culturales que trajeron la cultura védica y el sánscrito antiguo a la India.
```

```
metadata:
  materia: "historia_profunda"
  tema: "india_antigua"
  nivel: "intermedio"
  tags: ["literatura", "vedas"]
tipo: mc
enunciado: ¿Cuál de los siguientes es considerado el texto sagrado más antiguo y fundamental del hinduismo, compuesto en sánscrito védico?
opciones_explicitas:
  - El Rig Veda
  - El Mahabharata
  - El Ramayana
  - Las Upanishads
respuesta: El Rig Veda
explicacion: El Rig Veda es la composición más antigua de los cuatro Vedas, datando aproximadamente del 1500-1200 a. C., y contiene himnos dedicados a diversas deidades.
```

```
metadata:
  materia: "historia_profunda"
  tema: "india_antigua"
  nivel: "intermedio"
  tags: ["budismo", "siddharta"]
tipo: completar
enunciado: El fundador del budismo, nacido como príncipe en Lumbini (actual Nepal), alcanzó la iluminación bajo un árbol de higuera y pasó el resto de su vida enseñando el Dharma. Su nombre secular era ______.
respuesta: siddharta gautama
respuestas_validas:
  - siddharta gautama
  - Siddharta Gautama
  - Siddhartha Gautama
  - siddhartha gautama
explicacion: Siddhartha Gautama es el nombre histórico del Buda. Tras su iluminación, fue conocido como el Buda (el Despierto).
```

```
### 9 — Religión védica
```

```
### 10 — Imperio Gupta
```

```
### 11 — Nirvana
```

```
### 12 — Ciudad de Harappa
```

```
### 13 — Casta de los guerreros
```

```
### 14 — Ascetismo
```

```
### 15 — Emperador Chandragupta
```

```
### 16 — Dharma
```

```
### 17 — Periodo Védico
```

```
### 18 — Reino de Magadha
```

```
### 19 — Jainismo
```

```
### 20 — Arte de Gandhara
```

```
### 21 — Sistema de castas
```

```
### 22 — Escritura Brahmi
```

```
### 23 — Periodo de los Mahajanapadas
```

```
### 24 — Moksha
```

```
### 25 — Declive Maurya
```
