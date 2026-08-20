### 1 — Visibilidad del eclipse lunar
```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["astronomia", "visibilidad"]

respuesta: "Luna"
tipo: "mc"
opciones_explicitas: ["Sol", "Luna", "Estrellas", "Planetas"]

enunciado: "Durante un eclipse lunar, el cuerpo celeste que se oscurece debido a la sombra de la Tierra es la ___."

explicacion: |
  En un eclipse lunar, la Tierra se interpone entre el Sol y la Luna, proyectando su sombra sobre el satélite. Como la Luna está visible para cualquier punto de la Tierra que esté en la zona de noche, el fenómeno es observable desde toda la mitad nocturna del planeta.
```

### 2 — Geometría de la sombra solar
```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["geometria", "sombra"]

variables:
  caso: uno_de([0, 1])

respuesta: "umbra"
tipo: "completar"
respuestas_validas: ["umbra", "penumbra"]

enunciado: "En un eclipse solar, la parte de la sombra donde la totalidad del Sol es bloqueada por la Luna se denomina ___."

explicacion: |
  La sombra de la Luna tiene dos partes: la umbra (sombra total) y la penumbra (sombra parcial). La umbra es un cono muy estrecho que toca la superficie terrestre solo en una franja muy pequeña, razón por la cual los eclipses totales de Sol son raros de ver en un lugar específico.
```

### 3 — Comparación de áreas de visibilidad
```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["comparacion", "visibilidad"]

respuesta: "mayor"
tipo: "mc"
opciones_explicitas: ["menor", "mayor", "igual", "nula"]

enunciado: "Comparado con la franja angosta de un eclipse solar, el área de visibilidad de un eclipse lunar es ___."

explicacion: |
  Un eclipse lunar es visible para cualquier persona que esté en la parte de la Tierra donde la Luna está en el cielo (la mitad nocturna). Un eclipse solar requiere que la pequeña sombra de la Luna pase exactamente por tu ubicación.
```

### 4 — Secuencia de alineación
```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["alineacion", "orden"]

respuesta: ["Sol", "Tierra", "Luna"]
tipo: "ordenar"
opciones_explicitas: ["Sol", "Tierra", "Luna", "Luna", "Tierra", "Sol"]

enunciado: "Para que ocurra un eclipse lunar, los astros deben alinearse en el siguiente orden desde el Sol hacia la Luna:"

explicacion: |
  En el eclipse lunar, el orden es Sol - Tierra - Luna. La Tierra queda en el medio, proyectando su sombra sobre la Luna.
```

### 5 — Frecuencia de observación local
```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "avanzado"
  tags: ["probabilidad", "observacion"]

variables:
  escenario: uno_de([0, 1])

respuesta: "frecuente"
tipo: "mc"
opciones_explicitas: ["frecuente", "infrecuente"]

enunciado: "Debido a que la sombra de la Luna es muy pequeña y se desplaza rápidamente por la Tierra, ver un eclipse solar total en un mismo punto es un evento ___."

explicacion: |
  Como la umbra lunar es un cono estrecho, la probabilidad de que esa línea exacta pase por tu ciudad es muy baja, haciendo que los eclipses solares totales sean eventos muy poco frecuentes en una ubicación geográfica dada.
```