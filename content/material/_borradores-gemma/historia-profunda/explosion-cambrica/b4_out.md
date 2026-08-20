### 1 — El sitio de Burgess Shale
```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "basico"
  tags: ["geologia", "paleontologia", "canada"]

respuesta: "Canadá"
tipo: completar
respuestas_validas: ["Canadá"]

enunciado: "El famoso yacimiento de Burgess Shale, que documenta la diversidad de la fauna del Cámbrico, se encuentra ubicado en el país de ___."

explicacion: |
  El yacimiento de Burgess Shale está situado en las Montañas Rocosas de la provincia de Columbia Británica, en Canadá.
```

### 2 — El fenómeno de preservación
```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["preservacion", "fofiles"]

variables:
  tipo_preservacion: uno_de(["carbonización", "permineralización", "molde"])

respuesta: "carbonización"
tipo: mc
opciones_explicitas: ["carbonización", "permineralización", "molde"]

enunciado: "La preservación excepcional de los tejidos blandos en Burgess Shale se debe principalmente a un proceso de ___ de la materia orgánica."

explicacion: |
  La formación de películas delgadas de carbono (carbonización) permitió la preservación de estructuras blandas que normalmente no se fosilizan.
```

### 3 — El orden de los eventos
```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["cronologia", "eventos"]

opciones_explicitas: ["Explosión de la vida multicelular", "Aparición de los primeros organismos unicelulares", "Extinción masiva del Pérmico", "Aparición de las plantas terrestres"]
respuesta: ["Aparición de los primeros organismos unicelulares", "Explosión de la vida multicelular", "Aparición de las plantas terrestres", "Extinción masiva del Pérmico"]
tipo: ordenar

enunciado: "Ordene cronológicamente los siguientes eventos biológicos/geológicos, desde el más antiguo al más reciente:"

explicacion: |
  La vida comenzó con organismos unicelulares, seguida por la explosión de diversidad del Cámbrico, la colonización de la tierra por plantas y, mucho después, las grandes extinciones masivas.
```

### 4 — El taxón de anomalocaris
```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "avanzado"
  tags: ["anomalocaris", "depredador"]

variables:
  es_depredador: uno_de([verdadero, falso])

respuesta: es_depredador
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Basándonos en la morfología de *Anomalocaris canadensis* hallado en Burgess Shale, se considera que era un ___ depredador de ápice."

explicacion: |
  *Anomalocaris* es uno de los depredadores más conocidos del Cámbrico, con apéndices frontales diseñados para capturar presas.
```

### 5 — El impacto de la diversidad
```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["biologia", "evolucion"]

variables:
  valor_diversidad: uno_de([1, 2])

respuesta: tabla[valor_diversidad][1]
tipo: completar
respuestas_validas: ["alta", "baja"]

pasos:
  - "Identificar el periodo de la explosión cámbrica."
  - "Determinar el nivel de diversidad biológica observado en Burgess Shale."

enunciado: "La diversidad de filos animales documentada en Burgess Shale durante la explosión cámbrica se caracteriza por ser de una magnitud ___."

variables:
  tabla: [["baja", "baja"], ["alta", "alta"]]

explicacion: |
  La explosión cámbrica representó un aumento drástico en la complejidad y diversidad de los cuerpos animales en el registro fósil.
```