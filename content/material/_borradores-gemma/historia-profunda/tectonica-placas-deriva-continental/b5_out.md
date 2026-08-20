### 1 — Tipos de bordes: Dorsales
```
metadata:
  materia: "geologia"
  tema: "tectonica_placas_deriva_continental"
  nivel: "basico"
  tags: ["tectonica", "bordes_divergentes"]

variables:
  escenario: uno_de([["dorsal oceánica", "divergente"], ["falla transformante", "transformante"], ["cordillera de subducción", "convergente"]])
  idx: uno_de([0,1,2])

enunciado: "Se observa la formación de nueva corteza oceánica en una ___."

opciones_explicitas: ["divergente", "convergente", "transformante"]
respuesta: escenario[idx][1]
tipo: mc

explicacion: |
  La formación de nueva corteza en las dorsales oceánicas ocurre en los bordes divergentes, donde las placas se separan.
```

### 2 — Tipos de bordes: Cordilleras
```
metadata:
  materia: "geologia"
  tema: "tectonica_placas_deriva_continental"
  nivel: "basico"
  tags: ["tectonica", "bordes_convergentes"]

variables:
  escenario: uno_de([["cordillera de los Andes", "convergente"], ["dorsal mesoatlantica", "divergente"], ["falla de San Andrés", "transformante"]])
  idx: uno_de([0,1,2])

enunciado: "La presencia de una ___ es característica de un límite de tipo {escenario[idx][0]}."

opciones_explicitas: ["divergente", "convergente", "transformante"]
respuesta: escenario[idx][1]
tipo: mc

explicacion: |
  Las cordilleras resultantes de la colisión o subducción son típicas de los bordes convergentes.
```

### 3 — Tipos de bordes: Fallas
```
metadata:
  materia: "geologia"
  tema: "tectonica_placas_deriva_continental"
  nivel: "basico"
  tags: ["tectonica", "bordes_transformantes"]

variables:
  escenario: uno_de([["falla de San Andrés", "transformante"], ["dorsal del Pacífico", "divergente"], ["fosa marina", "convergente"]])
  idx: uno_de([0,1,2])

enunciado: "Un movimiento de deslizamiento lateral como el de la ___ indica un borde ___."

opciones_explicitas: ["divergente", "convergente", "transformante"]
respuesta: escenario[idx][1]
tipo: mc

explicacion: |
  Las fallas transformantes ocurren cuando las placas se deslizan horizontalmente una respecto a la otra.
```

### 4 — Tipos de bordes: Fosas
```
metadata:
  materia: "geologia"
  tema: "tectonica_placas_deriva_continental"
  nivel: "intermedio"
  tags: ["tectonica", "subduccion"]

variables:
  escenario: uno_de([["fosa marina", "convergente"], ["dorsal oceánica", "divergente"], ["falla transformante", "transformante"]])
  idx: uno_de([0,1,2])

enunciado: "La existencia de una ___ profunda es evidencia de un límite de placas tipo {escenario[idx][0]}."

opciones_explicitas: ["divergente", "convergente", "transformante"]
respuesta: escenario[idx][1]
tipo: mc

explicacion: |
  Las fosas oceánicas se forman en los límites convergentes por la subducción de una placa bajo otra.
```

### 5 — Tipos de bordes: Resumen
```
metadata:
  materia: "geologia"
  tema: "tectonica_placas_deriva_continental"
  nivel: "avanzado"
  tags: ["tectonica", "procesos"]

variables:
  escenario: uno_de([["creación de corteza", "divergente"], ["destrucción de corteza", "convergente"], ["desplazamiento lateral", "transformante"]])
  idx: uno_de([0,1,2])

enunciado: "El proceso de {escenario[idx][0]} es el resultado principal de un borde ___."

opciones_explicitas: ["divergente", "convergente", "transformante"]
respuesta: escenario[idx][1]
tipo: mc

explicacion: |
  Cada tipo de borde se define por el proceso geológico predominante: creación (divergente), destrucción (convergente) o deslizamiento (transformante).
```