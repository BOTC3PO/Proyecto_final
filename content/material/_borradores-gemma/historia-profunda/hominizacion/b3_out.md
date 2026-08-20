### 1 — El primer ancestro
```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "basico"
  tags: ["evolucion", "australopithecus"]

respuesta: "Australopithecus"
tipo: completar
respuestas_validas: ["Australopithecus"]

enunciado: "El género ___ es considerado uno de los primeros homininos en la línea evolutiva, caracterizado por la bipedestación."

explicacion: |
  El Australopithecus vivió hace aproximadamente entre 4 y 2 millones de años y fue un paso clave hacia la bipedestación definitiva.
```

### 2 — La revolución de las herramientas
```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "intermedio"
  tags: ["habilis", "tecnologia"]

variables:
  escenario: uno_de([["Homo habilis", "fabricación de herramientas de piedra"], ["Homo erectus", "control del fuego"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["fabricación de herramientas de piedra", "control del fuego", "dominio del lenguaje complejo", "agricultura"]

enunciado: "Se asocia principalmente a la especie {escenario[idx][0]} la {escenario[idx][1]}."

explicacion: |
  El Homo habilis es reconocido por su capacidad para fabricar herramientas de piedra (cultura Olduvayense).
```

### 3 — La gran migración
```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "intermedio"
  tags: ["erectus", "migracion"]

respuesta: "Homo erectus"
tipo: mc
opciones_explicitas: ["Homo habilis", "Homo erectus", "Homo sapiens", "Australopithecus"]

enunciado: "¿Qué especie fue la primera en realizar migraciones significativas fuera de África hacia Eurasia?"

explicacion: |
  Homo erectus fue el primer hominino con una morfología corporal adaptada para caminar largas distancias y colonizar nuevos continentes.
```

### 4 — Secuencia evolutiva
```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "basico"
  tags: ["orden", "linea_evolutiva"]

respuesta: ["Australopithecus", "Homo habilis", "Homo erectus", "Homo sapiens"]
tipo: ordenar
opciones_explicitas: ["Australopithecus", "Homo habilis", "Homo erectus", "Homo sapiens"]

enunciado: "Ordene cronológicamente las siguientes especies de la línea evolutiva humana, de la más antigua a la más reciente:"

explicacion: |
  La secuencia correcta sigue el aumento de la capacidad craneal y la complejidad tecnológica a lo largo de millones de años.
```

### 5 — El humano moderno
```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "basico"
  tags: ["sapiens", "modernidad"]

variables:
  datos: [["Homo sapiens", "70000000000"], ["Homo sapiens", "300000"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: input
tolerancia_abs: 1000000

enunciado: "Se estima que el Homo sapiens apareció en África hace aproximadamente ___ años (expresado en número entero)."

explicacion: |
  El Homo sapiens moderno tiene una antigüedad estimada de unos 300,000 años.
```