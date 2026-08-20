### 1 — El fenómeno del eclipse solar
```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["astronomia", "eclipse_solar"]

tipo: mc
opciones_explicitas: ["La Luna se interpone entre la Tierra y el Sol", "La Tierra se interpone entre el Sol y la Luna", "El Sol se interpone entre la Tierra y la Luna"]

enunciado: "Un eclipse solar ocurre cuando ___."

explicacion: |
  Para que ocurra un eclipse solar, la Luna debe estar posicionada exactamente entre la Tierra y el Sol, proyectando su sombra sobre nuestra superficie.
```

### 2 — Fases lunares y eclipses
```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["fases_lunares", "eclipse_solar"]

variables:
  idx: uno_de([0, 1])

enunciado: "Para que sea posible observar un eclipse solar, la Luna debe encontrarse en fase de ___."

pasos:
  - "Identificar la fase lunar necesaria para que la Luna esté entre la Tierra y el Sol."

opciones_explicitas: ["Luna Llena", "Luna Nueva"]
respuesta: ["Luna Nueva"][idx]
tipo: mc

explicacion: |
  Solo cuando la Luna está en fase de Luna Nueva puede alinearse entre la Tierra y el Sol para producir un eclipse solar.
```

### 3 — El eclipse lunar
```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["eclipse_lunar", "fases_lunares"]

tipo: mc
opciones_explicitas: ["Luna Nueva", "Luna Llena", "Cuarto Creciente", "Cuarto Menguante"]

enunciado: "Un eclipse lunar ocurre únicamente durante la fase de ___."

explicacion: |
  Un eclipse lunar requiere que la Tierra esté entre el Sol y la Luna, lo cual solo sucede cuando la Luna está en su fase de Luna Llena.
```

### 4 — Orden de los cuerpos celestes
```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["secuencia", "eclipse_lunar"]

tipo: ordenar
opciones_explicitas: ["Sol", "Tierra", "Luna"]
respuesta: ["Sol", "Tierra", "Luna"]

enunciado: "Ordena los cuerpos celestes desde el que emite la luz hasta el que recibe la sombra durante un eclipse lunar:"

explicacion: |
  En un eclipse lunar, la secuencia es: la luz del Sol viaja hacia la Tierra, la Tierra bloquea la luz y proyecta su sombra sobre la Luna.
```

### 5 — Completar la relación
```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["conceptos", "eclipse"]

variables:
  escenario: uno_de([0, 1])

enunciado: "Si la posición de los astros es {datos[escenario][0]}, entonces el eclipse es de tipo ___."

variables_datos:
  datos: [["Sol - Tierra - Luna", "lunar"], ["Sol - Luna - Tierra", "solar"]]

opciones_explicitas: ["solar", "lunar"]
respuestas_validas: ["lunar", "solar"]
respuesta: ["lunar", "solar"][escenario]
tipo: completar

explicacion: |
  La clave para identificar el eclipse es observar qué cuerpo está en el medio: si es la Luna, el eclipse es solar; si es la Tierra, es lunar.
```