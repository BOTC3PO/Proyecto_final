### 1 — El modelo heliocéntrico
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_cientifica"
  nivel: "basico"
  tags: ["copernico", "astronomia"]

respuesta: "Copérnico"
tipo: completar
respuestas_validas: ["Copérnico"]

enunciado: "El modelo que propuso que el Sol, y no la Tierra, es el centro del sistema planetario fue formulado por ___."

explicacion: |
  Nicolás Copérnico fue el pionero de la teoría heliocéntrica, desafiando el modelo geocéntrico de Ptolomeo que había predominado durante siglos.
```

### 2 — El telescopio y la observación
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_cientifica"
  nivel: "intermedio"
  tags: ["galileo", "telescopio"]

variables:
  escenario: uno_de([
    ["observó las fases de Venus", "confirmó la teoría heliocéntrica"],
    ["descubrió los satélites de Júpiter", "demostró que no todo giraba en torno a la Tierra"],
    ["observó las manchas solares", "refutó la idea de la perfección de los cielos"]
  ])

respuesta: "confirmó la teoría heliocéntrica"
tipo: mc
opciones_explicitas: ["confirmó la teoría heliocéntrica", "demostró que no todo giraba en torno a la Tierra", "refutó la idea de la perfección de los cielos"]

enunciado: "Al usar el telescopio, Galileo Galilei realizó observaciones que ___."

explicacion: |
  Las observaciones de Galileo, como las fases de Venus o los satélites de Júpiter, proporcionaron la evidencia empírica necesaria para respaldar el modelo heliocéntrico.
```

### 3 — Ley de Gravitación Universal
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_cientifica"
  nivel: "avanzado"
  tags: ["newton", "fisica"]

variables:
  caso: uno_de([
    ["la fuerza con la que la Tierra atrae a una manzana", "la fuerza que mantiene a la Luna en órbita"],
    ["la fuerza con la que la Tierra atrae a una manzana", "la fuerza que mantiene a los planetas en órbita"],
    ["la fuerza con la que la Tierra atrae a una manzana", "la fuerza que rige el movimiento de los astros"]
  ])

respuesta: "la fuerza que rige el movimiento de los astros"
tipo: mc
opciones_explicitas: ["la fuerza que rige el movimiento de los astros", "la fuerza que mantiene a la Luna en órbita", "la fuerza que mantiene a los planetas en órbita"]

enunciado: "Isaac Newton unificó la física terrestre y la celeste al proponer que la gravedad es ___."

explicacion: |
  Newton demostró que las mismas leyes físicas que rigen el movimiento de los objetos en la Tierra se aplican también a los cuerpos celestes.
```

### 4 — El Método Científico
```
metadata:
  materia: "historia_profunda"
  tema: "metodo_cientifico"
  nivel: "intermedio"
  tags: ["metodologia", "ciencia"]

respuesta: "observación"
tipo: completar
respuestas_validas: ["observación"]

enunciado: "A diferencia de la escolástica, la nueva ciencia moderna se basa en la ___ y la experimentación para validar hipótesis."

explicacion: |
  El método científico moderno sustituyó la deducción puramente lógica basada en textos antiguos por la inducción basada en la observación directa de la naturaleza.
```

### 5 — Secuencia del Método Científico
```
metadata:
  materia: "historia_profunda"
  tema: "metodo_cientifico"
  nivel: "intermedio"
  tags: ["pasos", "metodologia"]

respuesta: ["Observación", "Hipótesis", "Experimentación", "Conclusión"]
tipo: ordenar
opciones_explicitas: ["Observación", "Hipótesis", "Experimentación", "Conclusión"]

enunciado: "Ordena los pasos lógicos que definen el proceso de investigación científica moderna:"

explicacion: |
  El proceso científico comienza con la observación de un fenómeno, la formulación de una explicación provisional (hipótesis), la realización de pruebas (experimentación) y la obtención de una conclusión.
```