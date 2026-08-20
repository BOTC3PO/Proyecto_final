### 1 — La Estrella Polar
```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constratelaciones"
  nivel: "basico"
  tags: ["astronomia", "orientacion"]

respuesta: "eje de rotación"
tipo: completar
respuestas_validas: ["eje de rotación"]

enunciado: "La estrella Polaris parece permanecer casi fija en el cielo debido a que se encuentra alineada con el ___ de la Tierra."

explicacion: |
  Debido a que la Tierra gira alrededor de su eje, las estrellas parecen moverse en círculos. Como Polaris está casi sobre el eje, su movimiento aparente es mínimo, manteniéndola como punto de referencia constante.
```

### 2 — Utilidad de Polaris
```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constratelaciones"
  nivel: "basico"
  tags: ["orientacion", "navegacion"]

opciones_explicitas: ["Determinar la hora exacta", "Orientarse en el hemisferio norte", "Predecir eclipses lunares", "Calcular la distancia a la Luna"]

respuesta: "Orientarse en el hemisferio norte"
tipo: mc

enunciado: "¿Cuál es la principal utilidad histórica de la estrella Polar para los navegantes?"

explicacion: |
  Al estar situada cerca del polo norte celeste, su posición permite identificar rápidamente el norte geográfico, siendo vital para la navegación en el hemisferio norte.
```

### 3 — Movimiento de las estrellas
```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constratelaciones"
  nivel: "intermedio"
  tags: ["movimiento_aparente", "rotacion"]

variables:
  caso: uno_de([0, 1])

respuesta: tabla[caso][1]
tipo: mc
tabla: [
  ["se mueven en líneas rectas", "se mueven en arcos circulares"],
  ["se mueven en líneas rectas", "se mueven en arcos circulares"]
]
opciones_explicitas: ["se mueven en líneas rectas", "se mueven en arcos circulares"]

enunciado: "Debido a la rotación terrestre, las estrellas que no son Polaris parecen moverse en el cielo siguiendo un patrón de ___."

explicacion: |
  La rotación de la Tierra sobre su eje provoca que las estrellas tracen trayectorias curvas o arcos en la bóveda celeste durante la noche.
```

### 4 — El eje terrestre
```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constratelaciones"
  nivel: "intermedio"
  tags: ["geometria_celeste"]

respuesta: "norte"
tipo: completar
respuestas_validas: ["norte"]

enunciado: "Si observamos el cielo nocturno en el hemisferio norte, la estrella que marca el punto cardinal ___ es la Polaris."

explicacion: |
  Polaris es la estrella que indica la dirección del norte celeste, sirviendo como brújula natural.
```

### 5 — Secuencia de observación
```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constratelaciones"
  nivel: "avanzado"
  tags: ["observacion", "secuencia"]

opciones_explicitas: ["Localizar la Osa Mayor", "Identificar la estrella Polaris", "Determinar el Norte"]

respuesta: ["Localizar la Osa Mayor", "Identificar la estrella Polaris", "Determinar el Norte"]
tipo: ordenar

enunciado: "Un navegante antiguo sigue este proceso para orientarse usando las estrellas. Ordena los pasos correctamente:"

explicacion: |
  Para encontrar el norte de forma fiable, primero se busca una constelación conocida (como la Osa Mayor), luego se localiza la estrella guía (Polaris) y finalmente se establece el punto cardinal.
```