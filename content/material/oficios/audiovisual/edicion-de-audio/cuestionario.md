# Audiovisual — Edición de audio (cuestionario, 25 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Sonido

```
metadata:
  materia: "audiovisual"
  tema: "edicion_de_audio"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Una vibración del aire", "Un tipo de luz", "Un archivo", "Un color"]
respuesta: "Una vibración del aire"

enunciado: "¿Qué es el sonido?"

explicacion: |
  Un micrófono lo convierte en señal eléctrica.
```

### 2 — Muestreo

```
metadata:
  materia: "audiovisual"
  tema: "edicion_de_audio"
  nivel: "basico"
  tags: ["muestreo"]

tipo: mc
opciones_explicitas: ["Cuántas muestras por segundo se toman del sonido", "El volumen", "La duración", "El formato"]
respuesta: "Cuántas muestras por segundo se toman del sonido"

enunciado: "¿Qué es la frecuencia de muestreo?"

explicacion: |
  Se mide en Hz o kHz.
```

### 3 — Valores

```
metadata:
  materia: "audiovisual"
  tema: "edicion_de_audio"
  nivel: "basico"
  tags: ["muestreo"]

tipo: mc
opciones_explicitas: ["44,1 kHz y 48 kHz", "1 kHz", "100 Hz", "1 MHz"]
respuesta: "44,1 kHz y 48 kHz"

enunciado: "¿Cuáles son frecuencias de muestreo habituales?"

explicacion: |
  La primera se usa en música; la segunda, en video.
```

### 4 — Bits

```
metadata:
  materia: "audiovisual"
  tema: "edicion_de_audio"
  nivel: "basico"
  tags: ["bits"]

tipo: mc
opciones_explicitas: ["Cuántos valores distintos puede tomar cada muestra", "La duración", "La velocidad", "El formato"]
respuesta: "Cuántos valores distintos puede tomar cada muestra"

enunciado: "¿Qué indica la profundidad de bits?"

explicacion: |
  16 bits es calidad CD.
```

### 5 — Canales

```
metadata:
  materia: "audiovisual"
  tema: "edicion_de_audio"
  nivel: "basico"
  tags: ["canales"]

tipo: mc
opciones_explicitas: ["2", "1", "4", "6"]
respuesta: "2"

enunciado: "¿Cuántos canales tiene un audio estéreo?"

explicacion: |
  El mono tiene 1.
```

### 6 — WAV

```
metadata:
  materia: "audiovisual"
  tema: "edicion_de_audio"
  nivel: "basico"
  tags: ["wav"]

tipo: mc
opciones_explicitas: ["No tiene compresión", "Comprime con pérdida", "Es el más liviano", "Es solo para video"]
respuesta: "No tiene compresión"

enunciado: "¿Qué característica tiene el formato WAV?"

explicacion: |
  Ideal para grabar y editar.
```

### 7 — MP3

```
metadata:
  materia: "audiovisual"
  tema: "edicion_de_audio"
  nivel: "basico"
  tags: ["mp3"]

tipo: mc
opciones_explicitas: ["Comprime con pérdida de calidad", "Es sin pérdida", "No comprime", "Es un formato de video"]
respuesta: "Comprime con pérdida de calidad"

enunciado: "¿Qué característica tiene el MP3?"

explicacion: |
  Se usa para distribuir.
```

### 8 — Cuándo MP3

```
metadata:
  materia: "audiovisual"
  tema: "edicion_de_audio"
  nivel: "intermedio"
  tags: ["mp3"]

tipo: mc
opciones_explicitas: ["Al final, una sola vez, a partir del archivo editado", "Al principio", "Antes de editar", "En cada paso"]
respuesta: "Al final, una sola vez, a partir del archivo editado"

enunciado: "¿Cuándo se genera el MP3?"

explicacion: |
  Cada recompresión pierde calidad.
```

### 9 — Máximo

```
metadata:
  materia: "audiovisual"
  tema: "edicion_de_audio"
  nivel: "intermedio"
  tags: ["dbfs"]

tipo: mc
opciones_explicitas: ["0 dBFS", "100 dB", "+10 dB", "−50 dB"]
respuesta: "0 dBFS"

enunciado: "¿Cuál es el nivel máximo en audio digital?"

explicacion: |
  Más allá se recorta.
```

### 10 — Clipping

```
metadata:
  materia: "audiovisual"
  tema: "edicion_de_audio"
  nivel: "basico"
  tags: ["clipping"]

tipo: mc
opciones_explicitas: ["El recorte de la señal por pasarse del máximo, que causa distorsión", "Un efecto de eco", "Un silencio", "Un formato"]
respuesta: "El recorte de la señal por pasarse del máximo, que causa distorsión"

enunciado: "¿Qué es el clipping?"

explicacion: |
  No se puede reparar.
```

### 11 — Margen

```
metadata:
  materia: "audiovisual"
  tema: "edicion_de_audio"
  nivel: "intermedio"
  tags: ["margen"]

tipo: mc
opciones_explicitas: ["Con picos alrededor de −12 a −6 dBFS", "En 0 dBFS", "Por encima de 0", "Muy bajo, −60"]
respuesta: "Con picos alrededor de −12 a −6 dBFS"

enunciado: "¿Con qué margen conviene grabar?"

explicacion: |
  Evita el clipping.
```

### 12 — LUFS

```
metadata:
  materia: "audiovisual"
  tema: "edicion_de_audio"
  nivel: "intermedio"
  tags: ["lufs"]

tipo: mc
opciones_explicitas: ["El volumen percibido (loudness)", "El tamaño", "El ruido", "La duración"]
respuesta: "El volumen percibido (loudness)"

enunciado: "¿Qué mide LUFS?"

explicacion: |
  Se usa para normalizar el volumen entre programas.
```

### 13 — Verificar

```
metadata:
  materia: "audiovisual"
  tema: "edicion_de_audio"
  nivel: "basico"
  tags: ["normas"]

tipo: mc
opciones_explicitas: ["La norma de volumen del destino (TV, streaming, podcast)", "Nada", "El color", "El peso del archivo solamente"]
respuesta: "La norma de volumen del destino (TV, streaming, podcast)"

enunciado: "¿Qué conviene verificar antes de entregar un audio?"

explicacion: |
  Cada plataforma tiene sus valores.
```

### 14 — Copia

```
metadata:
  materia: "audiovisual"
  tema: "edicion_de_audio"
  nivel: "basico"
  tags: ["copia"]

tipo: mc
opciones_explicitas: ["Guardar una copia del original", "Borrar el original", "Nada", "Exportar a MP3"]
respuesta: "Guardar una copia del original"

enunciado: "¿Qué se hace antes de editar?"

explicacion: |
  La edición debe ser reversible.
```

### 15 — Ruido

```
metadata:
  materia: "audiovisual"
  tema: "edicion_de_audio"
  nivel: "basico"
  tags: ["ruido"]

tipo: mc
opciones_explicitas: ["Tomando una muestra del ruido solo para que el programa lo reste", "Subiendo el volumen", "Borrando todo", "Comprimiendo"]
respuesta: "Tomando una muestra del ruido solo para que el programa lo reste"

enunciado: "¿Cómo se reduce el ruido de fondo?"

explicacion: |
  Con moderación.
```

### 16 — Exceso

```
metadata:
  materia: "audiovisual"
  tema: "edicion_de_audio"
  nivel: "intermedio"
  tags: ["ruido"]

tipo: mc
opciones_explicitas: ["El sonido queda metálico o poco natural", "Mejora", "Se oye más fuerte", "Se borra el archivo"]
respuesta: "El sonido queda metálico o poco natural"

enunciado: "¿Qué pasa si se reduce demasiado el ruido?"

explicacion: |
  Hay que ajustarlo con cuidado.
```

### 17 — EQ

```
metadata:
  materia: "audiovisual"
  tema: "edicion_de_audio"
  nivel: "basico"
  tags: ["eq"]

tipo: mc
opciones_explicitas: ["Sube o baja zonas de frecuencia", "Corta el audio", "Duplica el audio", "Cambia el formato"]
respuesta: "Sube o baja zonas de frecuencia"

enunciado: "¿Qué hace un ecualizador?"

explicacion: |
  Se usa para dar claridad.
```

### 18 — Pasa-altos

```
metadata:
  materia: "audiovisual"
  tema: "edicion_de_audio"
  nivel: "intermedio"
  tags: ["filtro"]

tipo: mc
opciones_explicitas: ["Quita los graves molestos, por ejemplo por debajo de unos 80–100 Hz", "Quita los agudos", "Sube los graves", "Duplica la voz"]
respuesta: "Quita los graves molestos, por ejemplo por debajo de unos 80–100 Hz"

enunciado: "¿Qué hace un filtro pasa-altos en una voz?"

explicacion: |
  Elimina soplidos y golpes.
```

### 19 — Compresor

```
metadata:
  materia: "audiovisual"
  tema: "edicion_de_audio"
  nivel: "basico"
  tags: ["compresor"]

tipo: mc
opciones_explicitas: ["Reduce la diferencia entre lo fuerte y lo suave", "Aumenta el ruido", "Cambia el tono", "Acelera"]
respuesta: "Reduce la diferencia entre lo fuerte y lo suave"

enunciado: "¿Qué hace un compresor?"

explicacion: |
  La voz queda más pareja.
```

### 20 — Normalizar

```
metadata:
  materia: "audiovisual"
  tema: "edicion_de_audio"
  nivel: "intermedio"
  tags: ["normalizar"]

tipo: mc
opciones_explicitas: ["Sube o baja todo el audio hasta un valor objetivo, sin cambiar la dinámica", "Comprime", "Borra el ruido", "Cambia el formato"]
respuesta: "Sube o baja todo el audio hasta un valor objetivo, sin cambiar la dinámica"

enunciado: "¿Qué hace normalizar?"

explicacion: |
  Es un ajuste de nivel.
```

### 21 — Fundido

```
metadata:
  materia: "audiovisual"
  tema: "edicion_de_audio"
  nivel: "basico"
  tags: ["fade"]

tipo: mc
opciones_explicitas: ["Para evitar cortes bruscos y clics", "Para cortar el audio", "Para borrar la voz", "Para cambiar el tono"]
respuesta: "Para evitar cortes bruscos y clics"

enunciado: "¿Para qué sirve un fundido de entrada o salida?"

explicacion: |
  Sube o baja el volumen gradualmente.
```

### 22 — Micrófono

```
metadata:
  materia: "audiovisual"
  tema: "edicion_de_audio"
  nivel: "intermedio"
  tags: ["voz"]

tipo: mc
opciones_explicitas: ["A unos 10 a 20 cm del micrófono, con un antipop", "A 5 metros", "Pegado al micrófono", "A 2 metros"]
respuesta: "A unos 10 a 20 cm del micrófono, con un antipop"

enunciado: "¿A qué distancia conviene grabar una voz?"

explicacion: |
  El antipop reduce las "p" y "b".
```

### 23 — Música

```
metadata:
  materia: "audiovisual"
  tema: "edicion_de_audio"
  nivel: "basico"
  tags: ["mezcla"]

tipo: mc
opciones_explicitas: ["Más baja", "Más alta", "Igual", "No se pone"]
respuesta: "Más baja"

enunciado: "¿Cómo debe estar la música de fondo respecto de la voz?"

explicacion: |
  Que no tape lo que se dice.
```

### 24 — Derechos

```
metadata:
  materia: "audiovisual"
  tema: "edicion_de_audio"
  nivel: "basico"
  tags: ["derechos"]

tipo: mc
opciones_explicitas: ["Propia, con licencia o con permiso", "Cualquiera", "La que se oye bien", "La de las redes"]
respuesta: "Propia, con licencia o con permiso"

enunciado: "¿Qué música se puede usar?"

explicacion: |
  Respeta los derechos de autor.
```

### 25 — Escuchar

```
metadata:
  materia: "audiovisual"
  tema: "edicion_de_audio"
  nivel: "basico"
  tags: ["escuchar"]

tipo: mc
opciones_explicitas: ["En auriculares, parlantes y celular", "Solo en un equipo", "Solo con subtítulos", "No hace falta"]
respuesta: "En auriculares, parlantes y celular"

enunciado: "¿Dónde conviene escuchar el resultado final?"

explicacion: |
  Cada equipo muestra cosas distintas.
```

