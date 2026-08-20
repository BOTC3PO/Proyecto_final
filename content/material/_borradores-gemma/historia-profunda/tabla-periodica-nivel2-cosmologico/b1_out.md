### 1 — Origen de los elementos ligeros
```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "intermedio"
  tags: ["big_bang", "hidrogeno", "helio"]

variables:
  escenario: uno_de(["Big Bang", "Fusión Estelar"])

respuesta: escenario
tipo: mc

enunciado: "Los elementos más abundantes del universo, como el Hidrógeno y el Helio, se formaron principalmente durante el {escenario}."

opciones_explicitas: ["Big Bang", "Fusión Estelar"]

explicacion: |
  El Big Bang ocurrió hace aproximadamente 13.800 millones de años, liberando protones y neutrones que formaron los núcleos de los elementos más ligeros.
```

### 2 — El proceso de la fusión
```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "intermedio"
  tags: ["estrellas", "fusion"]

respuesta: "fusión"
tipo: completar
respuestas_validas: ["fusión", "fision"]

enunciado: "En el núcleo de una estrella, la combinación de núcleos ligeros para formar elementos más pesados se denomina proceso de ________."

explicacion: |
  La fusión nuclear es el proceso donde núcleos atómicos se unen para formar un núcleo más pesado, liberando una enorme cantidad de energía.
```

### 3 — Elementos pesados y eventos cataclísmicos
```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_supernova"
  nivel: "avanzado"
  tags: ["supernova", "elementos_pesados"]

variables:
  evento_idx: uno_de([0, 1])

respuesta: evento_datos[evento_idx][1]
tipo: mc

enunciado: "Los elementos más pesados que el hierro, como el oro o el uranio, se originan principalmente en eventos de ________."

opciones_explicitas: ["Supernovas", "Enanas Blancas"]

explicacion: |
  Las explosiones de supernovas y la colisión de estrellas de neutrones proporcionan la energía necesaria para la nucleosíntesis de elementos muy pesados.
```

datos:
  - ["Supernovas", "Supernovas"]
  - ["Colisiones de estrellas de neutrones", "Colisiones de estrellas de neutrones"]

### 4 — Secuencia de nucleosíntesis
```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "avanzado"
  tags: ["orden", "procesos"]

respuesta: ["Big Bang", "Fusión Estelar", "Supernovas"]
tipo: ordenar
opciones_explicitas: ["Big Bang", "Fusión Estelar", "Supernovas"]

enunciado: "Ordena los procesos de nucleosíntesis según su orden cronológico en la historia del universo (del más antiguo al más reciente):"

explicacion: |
  Primero ocurrió el Big Bang (H, He), luego la fusión en el interior de las estrellas (C, O, Ne, etc.) y finalmente las explosiones estelares para elementos pesados.
```

### 5 — El límite del hierro
```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "avanzado"
  tags: ["hierro", "energia"]

respuesta: 0.0
tipo: input
tolerancia_abs: 0.01

enunciado: "En una estrella masiva, la fusión de elementos se detiene cuando se llega al núcleo de hierro (Fe). ¿Cuál es el número atómico (Z) del hierro?"

explicacion: |
  El hierro tiene un número atómico de 26. La fusión de elementos más pesados que el hierro requiere un aporte neto de energía en lugar de liberarla, lo que lleva al colapso de la estrella.
```