### 1 — El Imperio de la Ruta de la Seda
```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "basico"
  tags: ["asia", "comercio"]

variables:
  escenario: uno_de([["controlaba las rutas comerciales que conectaban China con el Mediterráneo", "Imperio Han"], ["dominaba las estepas de Asia Central facilitando el comercio de seda", "Imperio Mongol"]])
  idx: uno_de([0, 1])

enunciado: "El imperio que {escenario[idx][0]} era el {escenario[idx][1]}."

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Imperio Han", "Imperio Mongol", "Imperio Romano", "Imperio Persa"]

explicacion: |
  El escenario seleccionado describe al {escenario[idx][1]}.
```

### 2 — La Hegemonía del Mediterráneo
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
respuestas_validas: ["Imperio Romano"]

explicacion: |
  La expansión de {datos[idx][1]} fue clave para la unificación de Europa y el norte de África.
```

### 3 — El Legado de los Incas
```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "intermedio"
  tags: ["america", "andes"]

variables:
  contexto: uno_de([["el sistema de caminos llamado Qhapaq Ñan", "Imperio Inca"], ["la administración mediante quipus", "Imperio Inca"]])
  idx: uno_de([0, 1])

enunciado: "El uso de {contexto[idx][0]} es característico del {contexto[idx][1]}."

respuesta: contexto[idx][1]
tipo: mc
opciones_explicitas: ["Imperio Inca", "Imperio Azteca", "Cultura Maya", "Imperio Wari"]

explicacion: |
  {contexto[idx][1]} se caracterizó por su avanzada ingeniería y administración.
```

### 4 — La Expansión de los Califatos
```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "avanzado"
  tags: ["islam", "medievo"]

variables:
  escenario: uno_de([["se extendió rápidamente desde la Península Arábiga", "Califato Omeya"], ["llegó a su mayor esplendor con la expansión de la lengua árabe", "Califato Omeya"]])
  idx: uno_de([0, 1])

enunciado: "El imperio que {escenario[idx][0]} fue el {escenario[idx][1]}."

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Califato Omeya", "Califato Abasí", "Imperio Otomano", "Imperio Safávida"]

explicacion: |
  {escenario[idx][1]} fue fundamental para la difusión del Islam.
```

### 5 — La Era de los Samuráis
```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "intermedio"
  tags: ["asia", "japon"]

variables:
  detalle: uno_de([["la unificación de las provincias bajo un mando centralizado", "Shogunato Tokugawa"], ["el control de las islas mediante el sistema de daimyo", "Shogunato Tokugawa"]])
  idx: uno_de([0, 1])

enunciado: "La característica de {detalle[idx][0]} define al {detalle[idx][1]}."

respuesta: detalle[idx][1]
tipo: completar
respuestas_validas: ["Shogunato Tokugawa"]

explicacion: |
  {detalle[idx][1]} marcó un periodo de estabilidad y aislamiento en Japón.
```