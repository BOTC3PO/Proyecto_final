### 1 — Definición de paleoclima
```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "basico"
  tags: ["definicion", "introduccion"]

respuesta: "paleoclima"
tipo: completar
respuestas_validas: ["paleoclima"]

enunciado: "El estudio de los climas de la Tierra en el pasado geológico se denomina ___."

explicacion: |
  El paleoclima es la ciencia que reconstruye las condiciones climáticas de épocas pasadas utilizando diversos indicadores naturales.
```

### 2 — Métodos de reconstrucción
```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["metodos", "reconstruccion"]

variables:
  metodo_idx: uno_de([0, 1, 2])
  metodos: [["núcleos de hielo", "sedimentos marinos", "anillos de árboles"]]

respuesta: metodos[metodo_idx]
tipo: mc
opciones_explicitas: ["núcleos de hielo", "sedimentos marinos", "anillos de árboles", "fósiles de insectos"]

enunciado: "Un método común para reconstruir el paleoclima mediante el análisis de capas de precipitación congelada es el uso de {metodos[metodo_idx]}."

explicacion: |
  Los núcleos de hielo almacenan burbujas de aire y partículas que permiten conocer la composición atmosférica de hace miles de años.
```

### 3 — Indicadores biológicos y geológicos
```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["indicadores", "fósiles"]

respuesta: "fósiles"
tipo: mc
opciones_explicitas: ["fósiles", "satélites", "termómetros", "instrumentos de medición"]

enunciado: "Cuando no hay hielo o sedimentos disponibles, los científicos utilizan ___ de especies extintas para inferir temperaturas antiguas."

explicacion: |
  Los fósiles (como corales o plantas) actúan como indicadores biológicos de las condiciones ambientales en las que vivieron.
```

### 4 — Secuencia de análisis paleoclimático
```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "avanzado"
  tags: ["metodologia", "proceso"]

respuesta: ["extracción", "datación", "análisis químico"]
tipo: ordenar
opciones_explicitas: ["extracción", "datación", "análisis químico"]

enunciado: "Ordena los pasos típicos para reconstruir un clima antiguo a partir de una muestra de sedimento:"

pasos:
  - "Obtención de la muestra del terreno."
  - "Determinación de la edad de la capa sedimentaria."
  - "Estudio de la composición de la muestra en laboratorio."

explicacion: |
  Primero se extrae el material, luego se determina su edad (datación) y finalmente se analizan sus componentes químicos.
```

### 5 — Interpretación de anillos
```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["dendrocronologia", "anillos"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [["ancho", "estrecho"]]
  resultado: ["clima favorable", "clima adverso"]

respuesta: resultado[caso_idx]
tipo: mc
opciones_explicitas: ["clima favorable", "clima adverso"]

enunciado: "En dendrocronología, si un anillo de crecimiento es {escenarios[caso_idx]}, esto suele indicar un {resultado[caso_idx]} durante ese año."

explicacion: |
  Anillos anchos sugieren condiciones óptimas de temperatura y humedad, mientras que anillos estrechos indican estrés ambiental.
```