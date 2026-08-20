### 1 — El origen de la humanidad
```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "basico"
  tags: ["origen", "africa", "homo_sapiens"]

respuesta: "África"
tipo: completar
respuestas_validas: ["África"]

enunciado: "Según la teoría 'Out of Africa', el Homo sapiens se originó en el continente de ___."

explicacion: |
  La evidencia genética y fósil sostiene que los humanos modernos surgieron en África y luego migraron hacia el resto del mundo.
```

### 2 — Rutas de migración
```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["migracion", "teoria"]

variables:
  escenario: uno_de([["África", "Asia", "Europa", "América"], ["África", "Asia", "Europa", "Oceanía"]])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["África", "Asia", "Europa", "América"]

enunciado: "De acuerdo con la teoría del origen africano, ¿desde qué continente partieron las primeras migraciones de Homo sapiens para colonizar el resto del planeta?"

explicacion: |
  La migración comenzó desde África hacia Asia y luego se expandió hacia otros continentes.
```

### 3 — Cronología del poblamiento
```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "avanzado"
  tags: ["secuencia", "migracion"]

respuesta: ["África", "Asia", "Europa", "América"]
tipo: ordenar
opciones_explicitas: ["África", "Asia", "Europa", "América"]

enunciado: "Ordena cronológicamente la expansión global del Homo sapiens según la teoría predominante:"

explicacion: |
  Primero se consolidó en África, luego migró hacia Asia/Europa y finalmente llegó al continente americano.
```

### 4 — El paso hacia América
```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["america", "estrecho_de_bering"]

variables:
  datos: [["Bering", "Asia"], ["Magallanes", "América"]]

respuesta: datos[0][0]
tipo: completar
respuestas_validas: ["Bering"]

enunciado: "La teoría más aceptada sugiere que el paso de los primeros humanos hacia América se realizó a través del estrecho de ___."

explicacion: |
  El Estrecho de Bering permitió el tránsito desde el noreste de Asia hacia Alaska durante las glaciaciones.
```

### 5 — Teorías de poblamiento
```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "basico"
  tags: ["teoria", "out_of_africa"]

respuesta: verdadero
tipo: vf

enunciado: "¿La teoría 'Out of Africa' propone que el Homo sapiens es originario de Europa y luego migró a África?"

explicacion: |
  Falso. La teoría postula exactamente lo contrario: el origen es africano y la migración fue hacia afuera.
```