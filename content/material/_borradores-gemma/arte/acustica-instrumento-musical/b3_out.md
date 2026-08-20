### 1 — El origen del sonido en instrumentos de cuerda
```
metadata:
  materia: "arte"
  tema: "acustica_instrumento_musical"
  nivel: "basico"
  tags: ["cuerdas", "vibracion", "mecanica"]

tipo: mc
opciones_explicitas: ["La vibración de la cuerda sola", "La vibración de la cuerda y la caja de resonancia", "La presión del aire en la habitación", "La tensión de los clavijas"]

enunciado: "Un error común es pensar que el sonido de una guitarra proviene únicamente de la vibración de sus cuerdas. Sin embargo, para que el sonido sea audible y con cuerpo, es fundamental la participación de la ___."

respuesta: "La vibración de la cuerda y la caja de resonancia"

explicacion: |
  La cuerda por sí sola mueve muy poco aire. La caja de resonancia actúa como un amplificador mecánico que acopla la vibración de la cuerda al aire circundante.
```

### 2 — El fenómeno de la resonancia
```
metadata:
  materia: "arte"
  tema: "acustica_instrumento_musical"
  nivel: "intermedio"
  tags: ["resonancia", "frecuencia", "armonicos"]

variables:
  es_resonancia_correcta: true

tipo: vf
respuesta: es_resonancia_correcta

enunciado: "Si un instrumento musical tiene una frecuencia natural que coincide con la frecuencia de una onda sonora externa, se produce un aumento significativo en la amplitud de la vibración. ¿Es esto el fenómeno de la resonancia? {es_resonancia_correcta}"

explicacion: |
  Correcto. La resonancia ocurre cuando un sistema vibra con mayor amplitud al ser excitado por una frecuencia cercana a su frecuencia natural.
```

### 3 — La relación entre longitud y altura
```
metadata:
  materia: "arte"
  tema: "acustica_instrumento_musical"
  nivel: "basico"
  tags: ["longitud", "tono", "frecuencia"]

tipo: completar
respuestas_validas: ["más agudo", "más grave"]

enunciado: "En un instrumento de viento como una flauta, si el músico tapa más agujeros (acortando la columna de aire efectiva), el sonido resultante será ___."

respuesta: "más agudo"

explicacion: |
  Al acortar la columna de aire, la frecuencia fundamental aumenta, lo que percibimos como un tono más agudo.
```

### 4 — El proceso de producción sonora
```
metadata:
  materia: "arte"
  tema: "acustica_instrumento_musical"
  nivel: "intermedio"
  tags: ["orden", "proceso", "sonido"]

tipo: ordenar
opciones_explicitas: ["Excitación (vibración de la fuente)", "Filtrado (modificación por el cuerpo)", "Radiación (emisión al aire)"]

respuesta: ["Excitación (vibración de la fuente)", "Filtrado (modificación por el cuerpo)", "Radiación (emisión al aire)"]

enunciado: "Ordena las etapas correctas de la cadena de producción de sonido en un instrumento musical:"

explicacion: |
  Primero se genera la vibración (cuerda, caña, aire), luego el cuerpo del instrumento moldea ese sonido (timbre) y finalmente se radia al ambiente.
```

### 5 — Amplitud vs Tono
```
metadata:
  materia: "arte"
  tema: "acustica_instrumento_musical"
  nivel: "basico"
  tags: ["amplitud", "volumen", "frecuencia"]

tipo: mc
opciones_explicitas: ["La frecuencia de la onda", "La amplitud de la onda", "La forma de la onda", "La velocidad del sonido"]

enunciado: "Un error frecuente es confundir el tono (agudo/grave) con el volumen. El volumen o intensidad de un sonido depende de la ___."

respuesta: "La amplitud de la onda"

explicacion: |
  La frecuencia determina el tono (pitch), mientras que la amplitud (la altura de la onda) determina la intensidad o volumen.
```