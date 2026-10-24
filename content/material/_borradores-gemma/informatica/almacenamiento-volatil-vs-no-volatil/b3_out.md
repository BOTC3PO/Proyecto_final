### 1 — Naturaleza de la persistencia
```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["memoria", "ram", "hardware"]

respuesta: "volátil"
tipo: "completar"
respuestas_validas: ["volátil", "volatil"]

enunciado: "La memoria que requiere un suministro constante de energía para mantener la información almacenada se denomina memoria ___________."

explicacion: |
  La memoria volátil (como la RAM) pierde todos sus datos cuando se corta la energía. La memoria no volátil (como un SSD o HDD) conserva los datos sin electricidad.
```

### 2 — El mito del guardado
```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["errores_comunes", "guardado"]

respuesta: "falso"
tipo: "vf"

enunciado: "Si estoy escribiendo un documento en un procesador de texto y se corta la luz antes de que yo haga clic en 'Guardar', la información se mantiene intacta en el disco duro porque el procesador estaba encendido."

explicacion: |
  Falso. Mientras editas, el texto reside en la memoria RAM (volátil). Si no se ha escrito en el disco (no volátil), la información se pierde al cortarse la energía.
```

### 3 — Clasificación de dispositivos
```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "intermedio"
  tags: ["hardware", "clasificacion"]

variables:
  idx: uno_de([0, 1])
  escenario: [[
    ["Memoria RAM", "volátil"],
    ["Disco Duro (HDD)", "no volátil"]
  ]]

respuesta: escenario[idx][1]
tipo: "mc"
opciones_explicitas: ["volátil", "no volátil"]

enunciado: "Considerando el dispositivo {escenario[idx][0]}, su característica principal de almacenamiento es: ___________."

explicacion: |
  La RAM es volátil (pierde datos sin energía) y el HDD es no volátil (mantiene datos sin energía).
```

### 4 — El proceso de escritura
```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "intermedio"
  tags: ["flujo_datos", "ciclo_de_vida"]

respuesta: ["Cargar desde disco", "Procesar en RAM", "Guardar en disco"]
tipo: "ordenar"
opciones_explicitas: ["Cargar desde disco", "Procesar en RAM", "Guardar en disco"]

enunciado: "Ordena el flujo lógico de datos cuando un usuario abre un archivo, edita un párrafo y luego decide conservar los cambios permanentemente:"

explicacion: |
  1. Los datos pasan de la memoria no volátil (disco) a la volátil (RAM) para ser usados.
  2. La CPU trabaja sobre la RAM.
  3. Al guardar, los datos vuelven a la memoria no volátil.
```

### 5 — Capacidad vs Persistencia
```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: 1
tipo: "mc"
opciones_explicitas: ["Solo la memoria no volátil puede almacenar datos de forma permanente.", "Tanto la RAM como el disco duro son memorias no volátiles.", "La memoria volátil es más lenta que la no volátil.", "El almacenamiento volátil es el que se usa para guardar archivos a largo plazo."]

explicacion: |
  La característica definitoria es la persistencia: la memoria volátil pierde los datos sin energía, independientemente de su velocidad o capacidad.
```