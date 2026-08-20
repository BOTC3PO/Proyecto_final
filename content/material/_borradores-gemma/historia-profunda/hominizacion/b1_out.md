### 1 — El primer gran cambio
```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "basico"
  tags: ["evolucion", "bipedismo"]

respuesta: "bipedestación"
tipo: completar
respuestas_validas: ["bipedestación", "bipedismo"]

enunciado: "El cambio anatómico fundamental que permitió a los primeros homínidos liberar las manos para el transporte de alimentos y el uso de herramientas fue la ___."

explicacion: |
  La bipedestación (caminar sobre dos extremidades) fue el rasgo clave que definió la transición hacia los homínidos, permitiendo una mayor eficiencia energética y la liberación de las manos.
```

### 2 — Cronología de la evolución
```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "intermedio"
  tags: ["cronologia", "especies"]

variables:
  escenario: uno_de([
    ["Australopithecus", "hace 4 millones de años"],
    ["Homo habilis", "hace 2 millones de años"],
    ["Homo sapiens", "hace 300.000 años"]
  ])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["Australopithecus", "Homo habilis", "Homo sapiens", "Homo erectus"]

enunciado: "De acuerdo al escenario seleccionado, ¿qué especie vivió aproximadamente {escenario[1]}?"

explicacion: |
  El escenario seleccionado fue {escenario[0]}, que se sitúa cronológicamente en {escenario[1]}.
```

### 3 — Capacidad craneal y cerebro
```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "avanzado"
  tags: ["cerebro", "antropometria"]

variables:
  datos: [
    ["Australopithecus", 450],
    ["Homo habilis", 650],
    ["Homo erectus", 900],
    ["Homo sapiens", 1400]
  ]
  idx: uno_de([0, 1, 2, 3])

respuesta: datos[idx][1]
tipo: input
tolerancia_abs: 0

enunciado: "Si consideramos al espécimen del escenario, su volumen craneal promedio era de aproximadamente {datos[idx][1]} cc."

pasos:
  - "Identificar la especie según el escenario."
  - "Asociar el volumen craneal promedio característico de dicha especie."

explicacion: |
  El volumen craneal es un indicador clave de la encefalización en el proceso de hominización. Para {datos[idx][0]}, el valor es de {datos[idx][1]} cc.
```

### 4 — Tecnología lítica
```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "intermedio"
  tags: ["herramientas", "tecnologia"]

respuesta: "Homo habilis"
tipo: mc
opciones_explicitas: ["Australopithecus", "Homo habilis", "Homo sapiens"]

enunciado: "¿Qué especie es reconocida tradicionalmente por ser la primera en fabricar sistemáticamente herramientas de piedra (industria Olduvayense)?"

explicacion: |
  Aunque hubo usos previos, el género Homo (específicamente Homo habilis) marca el inicio de la cultura material mediante la fabricación de herramientas de piedra tallada.
```

### 5 — Secuencia evolutiva
```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "avanzado"
  tags: ["orden", "lineaje"]

respuesta: ["Australopithecus", "Homo habilis", "Homo erectus", "Homo sapiens"]
tipo: ordenar
opciones_explicitas: ["Australopithecus", "Homo habilis", "Homo erectus", "Homo sapiens"]

enunciado: "Ordena cronológicamente, de la especie más antigua a la más reciente, los siguientes homínidos:"

explicacion: |
  La secuencia correcta refleja el aumento progresivo de la capacidad craneal y la complejidad tecnológica a lo largo de millones de años.
```