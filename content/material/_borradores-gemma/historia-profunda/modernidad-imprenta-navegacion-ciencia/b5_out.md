### 1 — La imprenta y la Reforma
```
metadata:
  materia: "historia_profunda"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "basico"
  tags: ["imprenta", "reforma", "comunicacion"]

variables:
  escenario: uno_de([[ "La imprenta de tipos móviles de Gutenberg", "La difusión masiva de las ideas de la Reforma Protestante"], ["El desarrollo de la brújula magnética", "La expansión de las rutas comerciales transoceánicas"], ["El perfeccionamiento del telescopio", "El inicio de la Revolución Científica"]])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["La difusión masiva de las ideas de la Reforma Protestante", "La expansión de las rutas comerciales transoceánicas", "El inicio de la Revolución Científica"]

enunciado: "Asocia el siguiente avance tecnológico con su consecuencia histórica principal: {escenario[idx][0]}"

explicacion: |
  La imprenta permitió que las ideas de autores como Lutero se propagaran rápidamente por Europa, rompiendo el monopolio del conocimiento de la Iglesia.
```

### 2 — Navegación y Geografía
```
metadata:
  materia: "historia_profunda"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "intermedio"
  tags: ["navegacion", "exploracion", "mapas"]

variables:
  datos: [["El uso del astrolabio en alta mar", "La navegación astronómica precisa"], ["La cartografía de Mercator", "La representación de rutas oceánicas"] ]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["La navegación astronómica precisa", "La representación de rutas oceánicas"]

enunciado: "El avance tecnológico de {datos[idx][0]} permitió fundamentalmente: ___"

explicacion: |
  Los instrumentos de navegación permitieron a los exploradores determinar su posición, facilitando viajes de larga distancia.
```

### 3 — El método científico
```
metadata:
  materia: "historia_profunda"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "avanzado"
  tags: ["ciencia", "metodo_cientifico", "observacion"]

variables:
  casos: [["La observación sistemática de los cielos", "El cuestionamiento del modelo geocéntrico"], ["El uso del microscopio", "El descubrimiento del mundo microscópico"]]
  idx: uno_de([0,1])

respuesta: casos[idx][1]
tipo: mc
opciones_explicitas: ["El cuestionamiento del modelo geocéntrico", "El descubrimiento del mundo microscópico"]

enunciado: "Si consideramos el impacto de {casos[idx][0]}, su consecuencia directa fue: ___"

explicacion: |
  La observación empírica desafió las verdades establecidas por la tradición y la autoridad religiosa.
```

### 4 — Secuencia de la Modernidad
```
metadata:
  materia: "historia_profunda"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "intermedio"
  tags: ["secuencia", "procesos"]

respuesta: ["Imprenta", "Navegación", "Revolución Científica"]
tipo: ordenar
opciones_explicitas: ["Imprenta", "Navegación", "Revolución Científica"]

enunciado: "Ordena cronológicamente estos procesos que definieron la Modernidad temprana:"

pasos:
  - "Primero, la democratización del saber escrito."
  - "Segundo, la expansión de los horizontes geográficos."
  - "Tercero, la consolidación del método experimental."

explicacion: |
  La imprenta preparó el terreno intelectual, la navegación expandió el mundo conocido y la ciencia revolucionó la comprensión de la naturaleza.
```

### 5 — El impacto del telescopio
```
metadata:
  materia: "historia_profunda"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "basico"
  tags: ["telescopio", "galileo", "astronomia"]

respuesta: "Copernicanismo"
tipo: completar
respuestas_validas: ["Copernicanismo", "Geocentrismo"]

enunciado: "El perfeccionamiento del telescopio por parte de Galileo Galilei fue clave para validar el ___."

explicacion: |
  Al observar las fases de Venus y los satélites de Júpiter, Galileo aportó evidencia empírica al modelo heliocéntrico.
```