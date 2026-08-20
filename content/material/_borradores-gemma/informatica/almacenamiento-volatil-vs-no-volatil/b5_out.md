### 1 — El escenario de la edición
```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["hardware", "memoria", "ram"]

variables:
  escenario: uno_de([
    ["Estás editando un documento de texto en un procesador de palabras y aún no has guardado los cambios.", "RAM"],
    ["Has guardado una fotografía en tu carpeta de imágenes en el disco duro.", "Disco"],
    ["Estás jugando un videojuego y la acción se está procesando en tiempo real.", "RAM"]
  ])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["RAM", "Disco", "ROM"]

enunciado: "Considerando el escenario: '{escenario[idx][0]}', ¿qué tipo de memoria es la principal responsable de mantener la información mientras el dispositivo tiene energía, pero que se borraría al apagar la computadora?"

explicacion: |
  La memoria RAM es volátil, lo que significa que requiere energía eléctrica para mantener los datos. Si el dispositivo se apaga sin guardar los cambios en un medio no volátil (como el disco), la información se pierde.
```

### 2 — ¿Qué sucede tras el apagón?
```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["volatilidad", "energia"]

respuesta: falso
tipo: vf

enunciado: "Si un dispositivo de almacenamiento es de tipo 'no volátil', la información almacenada en él se perderá inmediatamente al desconectar la fuente de alimentación eléctrica."

explicacion: |
  Falso. Precisamente la característica de la memoria no volátil (como un SSD o un HDD) es que la información persiste sin necesidad de energía eléctrica.
```

### 3 — Clasificación de dispositivos
```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["clasificacion", "hardware"]

variables:
  item: uno_de([
    ["Memoria RAM", "volatil"],
    ["Disco Duro (HDD)", "no_volatil"],
    ["Memoria Flash (USB)", "no_volatil"],
    ["Memoria Caché", "volatil"]
  ])
  idx: uno_de([0, 1, 2, 3])

respuesta: item[idx][1]
tipo: completar
respuestas_validas: ["volatil", "no_volatil"]

enunciado: "El dispositivo '{item[idx][0]}' se clasifica como memoria ___________."

explicacion: |
  La memoria volátil es aquella que requiere energía para mantener los datos, mientras que la no volátil permite el almacenamiento a largo plazo.
```

### 4 — Orden de jerarquía de persistencia
```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "intermedio"
  tags: ["jerarquia", "ordenar"]

opciones_explicitas: ["Memoria RAM", "Disco Duro", "Memoria ROM"]
respuesta: ["Memoria RAM", "Disco Duro", "Memoria ROM"]
tipo: ordenar

enunciado: "Ordena los siguientes componentes de mayor a menor persistencia de datos (desde el que pierde la información más rápido al apagar el equipo hasta el que la mantiene de forma permanente):"

pasos:
  - "1. RAM (Volátil)"
  - "2. Disco Duro (No volátil - almacenamiento masivo)"
  - "3. ROM (No volátil - lectura permanente)"

explicacion: |
  La RAM es volátil (pierde datos al apagar), el Disco Duro es no volátil para archivos, y la ROM está diseñada para contener instrucciones permanentes que no se borran.
```

### 5 — El proceso de guardado
```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["flujo_datos"]

variables:
  accion: uno_de([
    ["Guardar un archivo", "no volátil"],
    ["Abrir un programa", "volátil"]
  ])
  idx: uno_de([0, 1])

respuesta: accion[idx][1]
tipo: mc
opciones_explicitas: ["volátil", "no volátil"]

enunciado: "Cuando realizas la acción de '{accion[idx][0]}', los datos se trasladan de un medio de almacenamiento ___________ a uno de trabajo ___________."

explicacion: |
  Al guardar, los datos pasan de la memoria no volátil (disco) a la volátil (RAM) para que el procesador pueda trabajar con ellos.
```