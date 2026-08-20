### 1 — La propiedad privada y el Estado
```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "intermedio"
  tags: ["sociologia", "estado", "propiedad"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["La consolidación de la propiedad privada", "la necesidad de un aparato estatal para protegerla"], ["El fin de las estructuras comunales", "la emergencia de la jerarquía de clases"]]

enunciado: "En el proceso de transición hacia la sociedad de clases, {datos[escenario_idx][0]} fue el motor de {datos[escenario_idx][1]}."

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["la necesidad de un aparato estatal para protegerla", "la emergencia de la jerarquía de clases", "la desaparición de la división del trabajo", "el retorno al estado de naturaleza"]

explicacion: |
  La propiedad privada requiere de una fuerza coercitiva (el Estado) que garantice los límites de la posesión y sancione su transgresión.
```

### 2 — Estructura de la jerarquía social
```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "basico"
  tags: ["jerarquia", "clases", "poder"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["La acumulación de excedentes en manos de una élite", "la estratificación social"], ["El control de los medios de producción", "la consolidación de la jerarquía"]]

enunciado: "Históricamente, {datos[escenario_idx][0]} ha conducido directamente a {datos[escenario_idx][1]}."

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["la estratificación social", "la consolidación de la jerarquía", "la igualdad de derechos", "la disolución del poder central"]

explicacion: |
  La desigualdad en la distribución de recursos permite que ciertos grupos ejerzan un poder de mando sobre otros, creando jerarquías.
```

### 3 — Elementos del Estado moderno
```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "intermedio"
  tags: ["estado", "soberania", "orden"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["El monopolio de la violencia legítima", "el control del territorio"], ["La delimitación de fronteras claras", "la soberanía territorial"]]

enunciado: "Según la teoría clásica, {datos[escenario_idx][0]} es la característica que define {datos[escenario_idx][1]}."

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas: ["el control del territorio", "la soberanía territorial"]

explicacion: |
  El Estado se define por su capacidad de ejercer autoridad sobre un territorio y una población mediante el uso de la fuerza institucionalizada.
```

### 4 — Orden cronológico de la complejidad social
```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "avanzado"
  tags: ["evolucion", "sociedad", "orden"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["Comunidades igualitarias", "Propiedad privada", "Estado centralizado"],
    ["Sociedades tribales", "Desigualdad de estatus", "Sistemas de castas"]
  ]

enunciado: "Ordene la secuencia lógica de la evolución de la complejidad política y económica:"

pasos:
  - "Paso 1: Surgimiento de la propiedad"
  - "Paso 2: Formación de jerarquías"
  - "Paso 3: Institucionalización del Estado"

respuesta: ["Comunidades igualitarias", "Propiedad privada", "Estado centralizado"]
tipo: ordenar
opciones_explicitas: ["Comunidades igualitarias", "Propiedad privada", "Estado centralizado", "Sociedades tribales", "Desigualdad de estatus", "Sistemas de castas"]

explicacion: |
  La secuencia clásica sugiere que la propiedad genera excedentes, los excedentes generan jerarquías y las jerarquías requieren un Estado para su mantenimiento.
```

### 5 — Causa de la jerarquía política
```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "basico"
  tags: ["causa", "efecto", "poder"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["La especialización del trabajo", "la división de funciones"],
    ["La gestión de recursos excedentes", "la creación de burocracias"]
  ]

enunciado: "La aparición de la ___ fue una consecuencia directa de la gestión de recursos excedentes."

respuesta: "la creación de burocracias"
tipo: completar
respuestas_validas: ["la creación de burocracias"]

explicacion: |
  La necesidad de administrar el excedente y la propiedad requiere de un cuerpo administrativo (burocracia) que es la base del aparato estatal.
```