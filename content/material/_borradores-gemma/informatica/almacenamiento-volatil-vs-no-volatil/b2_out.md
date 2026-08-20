### 1 — La naturaleza de la RAM
```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["memoria", "hardware", "ram"]

respuesta: falso
tipo: vf

enunciado: "Si apagas una computadora que tiene 16 GB de memoria RAM, la información almacenada en ella se mantiene intacta gracias a que la RAM es un tipo de memoria no volátil."

explicacion: |
  La memoria RAM (Random Access Memory) es volátil. Esto significa que requiere una corriente eléctrica constante para mantener los datos; al cortar la energía, los datos se pierden.
```

### 2 — Clasificación de dispositivos
```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["clasificacion", "hardware"]

variables:
  escenario_idx: uno_de([0, 1])
  dispositivos: [["Memoria RAM", "Memoria Caché"], ["Disco Duro HDD", "Memoria Flash USB"]]
  tipo_memoria: [["volátil", "volátil"], ["no volátil", "no volátil"]]

respuesta: tipo_memoria[escenario_idx]
tipo: mc
opciones_explicitas: ["volátil", "no volátil"]

enunciado: "Considerando el dispositivo {dispositivos[escenario_idx]}, ¿cuál es su característica principal respecto a la persistencia de datos?"

explicacion: |
  El dispositivo seleccionado pertenece a la categoría de memoria {tipo_memoria[escenario_idx]}.
```

### 3 — El proceso de guardado
```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "intermedio"
  tags: ["flujo_datos", "guardado"]

respuesta: "disco"
tipo: completar
respuestas_validas: ["disco", "memoria"]

enunciado: "Cuando estás escribiendo un documento en un procesador de texto, los cambios se mantienen temporalmente en la memoria RAM. Para que el archivo no se pierda al apagar la PC, debes realizar una acción de guardado que traslade la información desde la RAM hacia el ___."

pasos:
  - "1. El procesador carga el archivo desde el almacenamiento permanente a la RAM."
  - "2. El usuario realiza cambios (estos viven en la RAM)."
  - "3. El comando 'Guardar' copia los datos de la RAM al almacenamiento persistente."

explicacion: |
  El proceso de guardado consiste en transferir la información de la memoria volátil (RAM) al dispositivo de almacenamiento no volátil (como un disco duro o SSD).
```

### 4 — Jerarquía de almacenamiento
```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "intermedio"
  tags: ["jerarquia", "orden"]

respuesta: ["Caché L1", "Memoria RAM", "Disco SSD"]
tipo: ordenar
opciones_explicitas: ["Caché L1", "Memoria RAM", "Disco SSD"]

enunciado: "Ordena los siguientes componentes de hardware de mayor a menor velocidad de acceso (desde el más rápido al más lento):"

explicacion: |
  En la jerarquía de memoria, la velocidad disminuye a medida que aumenta la capacidad y la persistencia. La caché es la más rápida, seguida de la RAM y finalmente el almacenamiento masivo (SSD/HDD).
```

### 5 — El caso del corte de luz
```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["consecuencia", "energia"]

variables:
  caso_idx: uno_de([0, 1])
  situacion: [
    ["Estás editando una foto y se corta la luz sin haber guardado.", "perder"],
    ["Estás viendo una película descargada en un pendrive y se corta la luz.", "nada"]
  ]
  resultado: ["perder", "nada"]

respuesta: resultado[caso_idx]
tipo: mc
opciones_explicitas: ["perder", "nada"]

enunciado: "Analiza el siguiente caso: {situacion[caso_idx]} ¿Qué sucede con la información que se estaba procesando en ese momento?"

explicacion: |
  En el caso de la edición (volátil), la información se pierde porque la RAM se vacía. En el caso del pendrive (no volátil), el archivo ya está grabado físicamente y no se ve afectado por la falta de energía inmediata.
```