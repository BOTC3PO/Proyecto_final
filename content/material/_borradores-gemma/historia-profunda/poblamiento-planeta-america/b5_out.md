### 1 — Teorías de poblamiento
```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "basico"
  tags: ["teorias", "migracion"]

variables:
  escenario: uno_de([["Teoría de Beringia", "Teoría de la Ruta Costera"], ["Teoría de la Ruta Costera", "Teoría de Beringia"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Teoría de Beringia", "Teoría de la Ruta Costera"]

enunciado: "Según la evidencia arqueológica más aceptada para el poblamiento temprano, ¿cuál de estas rutas sugiere que los humanos llegaron bordeando la costa del Pacífico?"

explicacion: |
  La teoría de la ruta costera propone que los primeros migrantes utilizaron embarcaciones para bordear el Pacífico, lo que explicaría la rápida llegada a Sudamérica.
```

### 2 — Cronología de continentes
```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["cronologia", "continentes"]

variables:
  datos: [["Asia", "Oceanía", "Europa", "América"], ["Oceanía", "Asia", "Europa", "América"], ["América", "Europa", "Asia", "Oceanía"], ["Europa", "América", "Oceanía", "Asia"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: datos[idx]
tipo: ordenar
opciones_explicitas: ["Asia", "Oceanía", "Europa", "América"]

enunciado: "Ordena los siguientes continentes desde el que fue poblado primero por el Homo sapiens hasta el último, basándote en las cronologías arqueológicas generales."

explicacion: |
  El orden general de poblamiento sugiere que la humanidad salió de África y se expandió primero por Asia y Oceanía, luego Europa y finalmente América.
```

### 3 — El paso por el estrecho
```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "basico"
  tags: ["geografia", "migracion"]

variables:
  caso: uno_de([["el estrecho de Bering", "el estrecho de Magallanes"], ["el estrecho de Magallanes", "el estrecho de Bering"]])
  idx: uno_de([0, 1])

respuesta: caso[idx][0]
tipo: completar
respuestas_validas: ["el estrecho de Bering", "el estrecho de Magallanes"]

enunciado: "Para entrar al continente americano desde Asia durante la última glaciación, los grupos humanos debieron cruzar ___."

explicacion: |
  El puente de Beringia permitió el paso de grupos de cazadores-recolectores desde Siberia hacia Alaska.
```

### 4 — Identificación de rutas
```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["teorias", "rutas"]

variables:
  pregunta: uno_de([["La ruta terrestre", "La ruta marítima"], ["La ruta marítima", "La ruta terrestre"]])
  idx: uno_de([0, 1])

respuesta: pregunta[idx][1]
tipo: mc
opciones_explicitas: ["La ruta terrestre", "La ruta marítima"]

enunciado: "Si consideramos que los humanos no solo usaron puentes de tierra, sino también balsas para bordear continentes, ¿a qué tipo de migración nos referimos?"

explicacion: |
  La migración marítima o costera es una de las teorías fundamentales para explicar el poblamiento rápido de las costas americanas.
```

### 5 — Secuencia de expansión
```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "avanzado"
  tags: ["secuencia", "poblamiento"]

variables:
  secuencia: [["África", "Asia", "Oceanía", "América"], ["América", "Oceanía", "Asia", "África"], ["Oceanía", "África", "América", "Asia"]]
  idx: uno_de([0, 1, 2])

respuesta: secuencia[idx]
tipo: ordenar
opciones_explicitas: ["África", "Asia", "Oceanía", "América"]

enunciado: "Establece el orden cronológico correcto de la expansión global del Homo sapiens, considerando el poblamiento de América como el evento más reciente de la lista."

explicacion: |
  La expansión comenzó en África, siguió por Asia y Oceanía, y finalmente llegó a América hace aproximadamente 15,000-20,000 años.
```