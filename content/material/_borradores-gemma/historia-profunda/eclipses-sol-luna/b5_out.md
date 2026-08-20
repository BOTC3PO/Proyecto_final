### 1 — Identificación de eclipse solar
```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["astronomia", "posiciones"]

variables:
  escenario: uno_de([["Luna entre la Tierra y el Sol", "Solar"], ["Tierra entre el Sol y la Luna", "Lunar"]])
  idx: uno_de([0, 1])
  datos: [["Luna entre la Tierra y el Sol", "Solar"], ["Tierra entre la Luna y el Sol", "Lunar"]]

enunciado: "Si observamos que la posición de los cuerpos celestes es {datos[idx][0]}, estamos presenciando un eclipse de tipo ___."

respuestas_validas:
  - "Solar"
  - "Lunar"

respuesta: datos[idx][1]
tipo: completar

explicacion: |
  Un eclipse solar ocurre cuando la Luna se interpone entre la Tierra y el Sol, proyectando su sombra sobre nuestro planeta.
```

### 2 — El fenómeno de la sombra lunar
```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["astronomia"]

variables:
  escenario_datos: [["Luna-Sol-Tierra", "Solar"], ["Sol-Luna-Tierra", "Lunar"], ["Sol-Tierra-Luna", "Lunar"]]
  idx: uno_de([0, 1, 2])

enunciado: "Dada la configuración {escenario_datos[idx][0]}, el tipo de eclipse es ___."

respuestas_validas:
  - "Solar"
  - "Lunar"

respuesta: escenario_datos[idx][1]
tipo: completar

explicacion: |
  La posición relativa determina qué cuerpo proyecta la sombra sobre el otro.
```

### 3 — Clasificación de eclipses
```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["astronomia"]

variables:
  caso: uno_de([["La Tierra bloquea la luz solar hacia la Luna", "Lunar"], ["La Luna bloquea la luz solar hacia la Tierra", "Solar"]])
  idx: uno_de([0, 1])
  tabla: [["La Tierra bloquea la luz solar hacia la Luna", "Lunar"], ["La Luna bloquea la luz solar hacia la Tierra", "Solar"]]

enunciado: "Si ocurre que {tabla[idx][0]}, el eclipse es ___."

respuestas_validas:
  - "Lunar"
  - "Solar"

respuesta: tabla[idx][1]
tipo: completar

explicacion: |
  El eclipse se nombra según el cuerpo que queda en la zona de sombra.
```

### 4 — ¿Qué eclipse es?
```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["astronomia"]

variables:
  configuracion: uno_de([["Sol - Luna - Tierra", "Solar"], ["Sol - Tierra - Luna", "Lunar"]])
  idx: uno_de([0, 1])
  opciones_lista: [["Sol - Luna - Tierra", "Solar"], ["Sol - Tierra - Luna", "Lunar"]]

enunciado: "En la configuración {opciones_lista[idx][0]}, el eclipse es ___."

opciones_explicitas:
  - "Solar"
  - "Lunar"

respuesta: opciones_lista[idx][1]
tipo: completar

explicacion: |
  En el primer caso la Luna está en el medio (Solar), en el segundo la Tierra (Lunar).
```

### 5 — Identificación por sombra
```
metadata:
  materia: "historia_profucha"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["astronomia"]

variables:
  evento: uno_de([["La Luna entra en la umbra terrestre", "Lunar"], ["La Tierra entra en la umbra lunar", "Solar"]])
  idx: uno_de([0, 1])
  datos: [["La Luna entra en la umbra terrestre", "Lunar"], ["La Tierra entra en la umbra lunar", "Solar"]]

enunciado: "Si el evento es {datos[idx][0]}, el tipo de eclipse es ___."

respuestas_validas:
  - "Lunar"
  - "Solar"

respuesta: datos[idx][1]
tipo: completar

explicacion: |
  Cuando la Luna entra en la sombra de la Tierra, vemos un eclipse lunar.
```