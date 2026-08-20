# Historia Profunda — Imperios expansion (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de Imperio

```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "basico"
  tags: ["definicion", "politica"]

tipo: mc
opciones_explicitas: ["Una alianza de naciones con fines comerciales", "Una entidad política que domina y gobierna sobre otros pueblos y territorios diversos", "Un sistema de gobierno democrático basado en el consenso"]
respuesta: "Una entidad política que domina y gobierna sobre otros pueblos y territorios diversos"
enunciado: "En términos de ciencia política e historia, ¿qué define fundamentalmente a un imperio?"
explicacion: |
  Un imperio se caracteriza por el ejercicio del poder de una entidad política central sobre una variedad de pueblos y territorios, a menudo mediante la conquista militar o la expansión territorial.
```

### 2 — El mecanismo de expansión

```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "basico"
  tags: ["expansion", "conquista"]

tipo: completar
respuestas_validas:
  - "conquista militar"
  - "acuerdos diplomáticos"

enunciado: "Aunque existen diversas formas de expansión, históricamente los imperios suelen establecer su dominio sobre nuevos territorios mediante la ________."

explicacion: |
  Si bien la diplomacia existió, el modelo imperial clásico se define por la expansión mediante la conquista militar para integrar nuevos territorios y pueblos al control del centro.
```

### 3 — Componentes de un Imperio

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
respuesta: "Un centro de poder que gobierna sobre territorios y pueblos diversos"

enunciado: "Un imperio se distingue de un estado-nación moderno porque su estructura incluye {datos[escenario_idx][0]} y {datos[escenario_idx][1]}."

explicacion: |
  La diversidad es la clave: un imperio no es un bloque homogéneo, sino un centro que gobierna sobre múltiples realidades culturales y geográficas.
```

### 4 — Secuencia de formación imperial

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
respuesta_orden: ["Expansión militar", "Conquista de nuevos territorios", "Establecimiento de administración central", "Integración de pueblos diversos"]
```

### 5 — El concepto de soberanía imperial

```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "avanzado"
  tags: ["soberania", "gobierno"]

tipo: completar

enunciado: "A diferencia de un estado-nación moderno, la característica principal que define a un imperio es su capacidad de gobernar sobre pueblos ___ y heterogéneos, integrados bajo un mismo poder central sin compartir una identidad nacional única."

respuestas_validas:
  - "diversos"
  - "distintos"
  - "heterogéneos"
  - "diferentes"

explicacion: |
  La esencia del imperio radica en la escala y la heterogeneidad: el control de un centro sobre múltiples entidades distintas.
```

### 6 — El Imperio Persa y su administración

```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "basico"
  tags: ["persia", "administracion"]

respuesta: "satrapías"
tipo: completar
respuestas_validas:
  - "satrapías"
  - "satrapías"
  - "satrapías"

enunciado: "Para administrar su vasto territorio, el Imperio Persa se dividió en provincias gobernadas por funcionarios llamados _________."

explicacion: |
  El Imperio Persa (Aqueménida) utilizaba un sistema de satrapías para mantener el control sobre sus diversas regiones.
```

### 7 — La expansión de Alejandro Magno

```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "intermedio"
  tags: ["alejandro_magno", "helenismo"]

variables:
  escenario: uno_de([["Grecia", "Macedonia"], ["Egipto", "Dinastía Ptolemaica"], ["India", "Reino de los Indo-Griegos"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Grecia", "Macedonia", "Egipto", "Dinastía Ptolemaica", "India", "Reino de los Indo-Griegos"]

enunciado: "Tras la muerte de Alejandro Magno, su imperio se fragmentó. ¿Qué región fue gobernada por la dinastía Ptolemaica?"

explicacion: |
  El imperio se dividió entre sus generales; Ptolomeo I Soter fundó la dinastía que gobernó Egipto.
```

### 8 — La estructura del Imperio Romano

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

### 9 — Dinastías de la China Antigua

```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "avanzado"
  tags: ["china", "dinastias"]

variables:
  datos: [["Qin", "Unificó China"], ["Han", "Estableció la Ruta de la Seda"], ["Tang", "Edad de Oro de la poesía"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Unificó China", "Estableció la Ruta de la Seda", "Edad de Oro de la poesía"]

enunciado: "La dinastía {datos[idx][0]} fue fundamental en la historia china porque {datos[idx][1]}."

explicacion: |
  Cada dinastía aportó elementos clave al desarrollo de la civilización china.
```

### 10 — Secuencia de la expansión romana

```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "intermedio"
  tags: ["roma", "etapas"]

respuesta_orden: ["Monarquía", "República", "Imperio"]
tipo: ordenar
opciones_explicitas: ["Monarquía", "República", "Imperio"]

enunciado: "Ordena cronológicamente las tres etapas principales de la historia de la civilización romana:"

explicacion: |
  La historia de Roma comienza con la Monarquía, sigue con la expansión de la República y culmina con el Imperio.
```

### 11 — El motor de la expansión

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

### 12 — Infraestructura y Control

```
metadata:
  materia: "historia_profunda"
  tema: "estrategias_expansion"
  nivel: "intermedio"
  tags: ["infraestructura", "caminos"]

variables:
  escenario: uno_de([["un sistema de calzadas romanas", "facilitar el movimiento de legiones y el comercio"], ["la Gran Muralla China", "defender fronteras y controlar el paso de caravanas"], ["el sistema de caminos del Inca", "conectar los diversos puntos del Tahuantinsuyo para la administración"]])

respuesta: escenario[1]
tipo: completar
respuestas_validas:
  - "facilitar el movimiento de legiones y el comercio"
  - "defender fronteras y controlar el paso de caravanas"
  - "conectar los diversos puntos del Tahuantinsuyo para la administración"

enunciado: "El desarrollo de obras como {escenario[0]} tenía como objetivo principal {escenario[1]}."

explicacion: |
  La construcción de infraestructura vial es una herramienta de poder que permite la proyección de la fuerza militar y la integración económica del territorio conquistado.
```

### 13 — El orden administrativo

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

### 14 — Flujos de riqueza

```
metadata:
  materia: "historia_profunda"
  tema: "estrategias_expansion"
  nivel: "intermedio"
  tags: ["comercio", "rutas"]

respuesta: "Ruta de la Seda"
tipo: completar
respuestas_validas:
  - "Ruta de la Seda"
  - "Ruta de la Fraga"
  - "Ruta del Ámbar"

enunciado: "La expansión de los imperios asiáticos a menudo se vio impulsada por el control de las redes comerciales, siendo la ___ un ejemplo fundamental de conexión entre Oriente y Occidente."

explicacion: |
  El control de las rutas comerciales permite al imperio no solo obtener riqueza mediante impuestos, sino también expandir su influencia cultural.
```

### 15 — Elementos de la expansión

```
metadata:
  materia: "historia_profunda"
  tema: "estrategias_expansion"
  nivel: "intermedio"
  tags: ["estrategias", "ordenar"]

respuesta_orden: ["Conquista militar", "Control de rutas comerciales", "Construcción de infraestructura", "Administración de territorios"]
tipo: ordenar
opciones_explicitas: ["Conquista militar", "Control de rutas comerciales", "Construcción de infraestructura", "Administración de territorios"]

enunciado: "Ordene las fases típicas de una expansión imperial desde la fase de choque hasta la fase de consolidación:"

explicacion: |
  Primero se suele imponer la fuerza (conquista), luego se asegura la riqueza (comercio), se facilita el movimiento (infraestructura) y finalmente se estabiliza el control (administración).
```

### 16 — Estrategias de control imperial

```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "intermedio"
  tags: ["gobierno", "diversidad"]

variables:
  escenario: uno_de([["El Imperio Romano implementaba el culto al Emperador en las provincias para unificar la lealtad.", "asimilación"], ["El Imperio Persa permitía que los pueblos conquistados mantuvieran sus leyes y religiones.", "tolerancia"], ["El Imperio Inca exigía tributos y trabajo (mita) pero permitía cultos locales bajo el Sol.", "autonomia"]])

enunciado: "Un imperio que permite que sus súbditos conserven sus propias leyes y costumbres a cambio de lealtad y tributos está aplicando una política de {escenario[1]}."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["asimilación", "tolerancia", "autonomia"]

explicacion: |
  La tolerancia religiosa y cultural es una estrategia para reducir la resistencia en territorios recién conquistados, permitiendo que las estructuras locales operen bajo la soberanía imperial.
```

### 17 — El proceso de asimilación

```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "basico"
  tags: ["cultura", "identidad"]

respuesta: "asimilación"
tipo: completar
respuestas_validas:
  - "asimilación"

enunciado: "Cuando un imperio busca que los pueblos conquistados adopten su lengua, religión y costumbres, eliminando gradualmente la identidad original, se dice que busca la ________."

explicacion: |
  La asimilación es un proceso de integración cultural profunda donde la identidad del conquistado es absorbida por la del conquistador.
```

### 18 — Modelos de gobernanza

```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "avanzado"
  tags: ["tributo", "autonomia"]

variables:
  caso: uno_de([["Un imperio que deja gobernadores locales con poder absoluto pero exige oro.", "autonomia"], ["Un imperio que impone sus propios jueces y gobernadores en cada ciudad.", "centralizacion"], ["Un imperio que obliga a todos a hablar su lengua y vestir su ropa.", "asimilacion"]])

enunciado: "En el modelo de {caso[0]}, el desafío principal es asegurar que la ________ sea efectiva para financiar el centro sin causar rebeliones por exceso de control."

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["autonomia", "centralizacion", "asimilacion"]

explicacion: |
  La autonomía local es un compromiso entre el control central y la libertad de las provincias; el éxito depende de la capacidad de recaudar tributos sin desatar revueltas.
```

### 19 — Secuencia de expansión imperial

```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

opciones_explicitas: ["Conquista militar", "Imposición de tributos", "Establecimiento de administración", "Integración cultural"]
respuesta_orden: ["Conquista militar", "Imposición de tributos", "Establecimiento de administración", "Integración cultural"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas típicas de la consolidación de un imperio sobre un territorio diverso:"

explicacion: |
  La expansión suele seguir un patrón: primero la fuerza militar, luego la extracción de recursos (tributo), la creación de una estructura de gobierno y, finalmente, la integración de la población al sistema imperial.
```

### 20 — Consecuencias de la diversidad

```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "intermedio"
  tags: ["conflicto", "gestion"]

variables:
  conflicto: uno_de([["La falta de tolerancia religiosa suele derivar en...", "rebeliones"], ["La asimilación forzada suele derivar en...", "resistencia"], ["La autonomía excesiva suele derivar en...", "secesion"]])

enunciado: "Si un imperio intenta imponer una única religión en un territorio con fuertes tradiciones locales, lo más probable es que surjan {conflicto[0]}."

respuesta: conflicto[1]
tipo: mc
opciones_explicitas: ["rebeliones", "resistencia", "secesion"]

explicacion: |
  La imposición cultural es una de las causas más comunes de conflicto interno y levantamientos armados en la historia de los grandes imperios.
```

### 21 — El Imperio de la Ruta de la Seda

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

### 22 — La Hegemonía del Mediterráneo

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

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "Imperio Romano"

explicacion: |
  La expansión de {datos[idx][1]} fue clave para la unificación de Europa y el norte de África.
```

### 23 — El Legado de los Incas

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

### 24 — La Expansión de los Califatos

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

### 25 — La Era de los Samuráis

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
respuestas_validas:
  - "Shogunato Tokugawa"

explicacion: |
  {datos[idx][1]} marcó un periodo de estabilidad y aislamiento en Japón.
```
