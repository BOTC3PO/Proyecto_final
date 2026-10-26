### 1 — Ciclos de Milankovitch: Excentricidad
```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["astronomia", "clima", "milankovitch"]

respuesta: "excentricidad"
tipo: mc

enunciado: "La variación en la forma de la órbita terrestre alrededor del Sol, que oscila entre una forma casi circular y una elíptica, se denomina:"

opciones_explicitas: ["oblicuidad", "precesión", "excentricidad", "nutación"]

explicacion: |
  La excentricidad describe qué tan "achatada" es la órbita terrestre. Este ciclo tiene periodos de aproximadamente 100,000 y 400,000 años y afecta la cantidad de radiación solar que llega a la Tierra.
```

### 2 — La Oblicuidad y las latitudes
```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "avanzado"
  tags: ["oblicuidad", "inclinacion", "clima"]

variables:
  idx: uno_de([0, 1])
  escenario: [[15, 23.5], [24.5, 22.1]]

respuesta: escenario[idx][1]
tipo: input
tolerancia_abs: 0.1

enunciado: "La inclinación del eje terrestre (oblicuidad) varía periódicamente. Si la inclinación aumenta hacia el valor de {escenario[idx][0]} grados, ¿cuál es el valor aproximado de la inclinación mínima que alcanza en el ciclo?"

pasos:
  - "Identificar el valor máximo de inclinación proporcionado."
  - "Identificar el valor mínimo de inclinación proporcionado en el escenario."

explicacion: |
  La oblicuidad influye en la estacionalidad. Una mayor inclinación genera estaciones más marcadas, mientras que una menor inclinación (como el valor de {escenario[idx][1]} grados) tiende a favorecer la glaciación al hacer los veranos menos intensos en las altas latitudes.
```

### 3 — Precesión de los equinoccios
```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["precesion", "eje_terrestre"]

respuesta: "el eje de rotación"
tipo: completar
respuestas_validas: ["el eje de rotación", "la órbita", "el sol"]

enunciado: "La precesión es el movimiento de bamboleo de ___ terrestre, similar al de un trompo, que cambia la orientación de los polos respecto a la eclíptica."

explicacion: |
  La precesión afecta la dirección en la que apunta la Tierra respecto a las estrellas y determina en qué época del año ocurre el solsticio o el equinoccio.
```

### 4 — Factores de la Glaciación
```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "basico"
  tags: ["causas", "glaciaciones"]

respuesta: ["excentricidad", "oblicuidad", "precesión"]
tipo: ordenar

opciones_explicitas: ["excentricidad", "oblicuidad", "precesión"]

enunciado: "Ordene los tres ciclos de Milankovitch desde el que tiene el periodo de duración más largo al más corto:"

explicacion: |
  El orden correcto de duración es: Excentricidad (~100k-400k años), Oblicuidad (~41k años) y Precesión (~21k-26k años).
```

### 5 — Efecto en la radiación
```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["radiacion", "insolacion"]

variables:
  idx: uno_de([0, 1])
  datos: [["disminuye", "glaciación"], ["aumenta", "interglaciar"]]

respuesta: datos[idx][1]
tipo: mc

enunciado: "Si los ciclos de Milankovitch provocan que la insolación estival en las altas latitudes sea significativamente menor, el efecto resultante en el clima global es una: {datos[idx][0]}"

opciones_explicitas: ["glaciación", "interglaciar", "estabilidad térmica"]

explicacion: |
  Para que se formen grandes capas de hielo, los veranos deben ser lo suficientemente frescos como para que la nieve del invierno no se derrita completamente, permitiendo la acumulación de hielo.
```