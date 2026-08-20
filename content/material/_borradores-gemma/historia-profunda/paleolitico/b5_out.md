### 1 — Identificación de tecnología
```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "basico"
  tags: ["tecnologia", "herramientas"]

variables:
  escenario: uno_de([["hacha de mano de piedra tallada", "bifaz"], ["lanzas de piedra", "punta de proyectil"], ["hachas de piedra pulida", "hacha de piedra"]])
  idx: uno_de([0,1,2])
  datos: [["hacha de mano de piedra tallada", "bifaz"], ["lanzas de piedra", "punta de proyectil"], ["hachas de piedra pulida", "hacha de piedra"]]

enunciado: "Durante el Paleolítico, los homínidos utilizaban diversas herramientas de piedra. Si encontramos un objeto con la forma de un {datos[idx][0]}, estamos ante un/a ___."

respuestas_validas: ["bifaz", "punta de proyectil", "hacha de piedra"]
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  El {datos[idx][0]} es una herramienta característica del Paleolítico, fabricada mediante la técnica de percusión para obtener un filo.
```

### 2 — Modo de vida
```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "basico"
  tags: ["subsistencia", "nómada"]

variables:
  escenario: uno_de([["recolección de frutos y caza", "nómada"], ["agricultura de cereales", "sedentario"], ["pastoreo de ganado", "sedentario"]])
  idx: uno_de([0,1,2])
  datos: [["recolección de frutos y caza", "nómada"], ["agricultura de cereales", "sedentario"], ["pastoreo de ganado", "sedentario"]]

enunciado: "La principal actividad económica en el Paleolítico era la {datos[idx][0]}, lo que obligaba a los grupos humanos a tener un estilo de vida ___."

opciones_explicitas: ["nómada", "sedentario"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Al depender de los ciclos naturales y la migración de animales, los grupos debían desplazarse constantemente, siendo nómadas.
```

### 3 — Arte Rupestre
```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "intermedio"
  tags: ["arte", "rupestre"]

variables:
  escenario: uno_de([["pinturas en el interior de cuevas", "arte rupestre"], ["esculturas de mármol", "arte clásico"], ["mosaicos de piedra", "arte romano"]])
  idx: uno_de([0,1,2])
  datos: [["pinturas en el interior de cuevas", "arte rupestre"], ["esculturas de mármol", "arte clásico"], ["mosaicos de piedra", "arte romano"]]

enunciado: "El estilo artístico característico del Paleolítico, que consistía en {datos[idx][0]}, se denomina ___."

opciones_explicitas: ["arte rupestre", "arte clásico", "arte romano"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  El {datos[idx][0]} es la expresión máxima del arte rupestre, utilizada para representar animales y escenas de caza.
```

### 4 — Evolución de herramientas
```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "intermedio"
  tags: ["tecnologia", "evolucion"]

variables:
  escenario: uno_de([["piedra tallada", "Paleolítico"], ["piedra pulida", "Neolítico"], ["metal", "Edad de los Metales"]])
  idx: uno_de([0,1,2])
  datos: [["piedra tallada", "Paleolítico"], ["piedra pulida", "Neolítico"], ["metal", "Edad de los Metales"]]

enunciado: "Ordena las siguientes etapas de la evolución tecnológica humana de la más antigua a la más reciente:"

opciones_explicitas: ["Paleolítico", "Neolítico", "Edad de los Metales"]
respuesta: ["Paleolítico", "Neolítico", "Edad de los Metales"]
tipo: ordenar

explicacion: |
  La secuencia correcta es: Paleolítico (piedra tallada), Neolítico (piedra pulida) y Edad de los Metales.
```

### 5 — El control del fuego
```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "basico"
  tags: ["fuego", "supervivencia"]

variables:
  escenario: uno_de([["dominio del fuego", "protección y calor"], ["domesticación de plantas", "agricultura"], ["uso de la rueda", "transporte"]])
  idx: uno_de([0,1,2])
  datos: [["dominio del fuego", "protección y calor"], ["domesticación de plantas", "agricultura"], ["uso de la rueda", "transporte"]]

enunciado: "El {datos[idx][0]} fue un hito fundamental en el Paleolítico que proporcionó ___."

respuestas_validas: ["protección y calor", "agricultura", "transporte"]
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  El {datos[idx][0]} permitió a los homínidos cocinar alimentos, calentarse y ahuyentar depredadores.
```