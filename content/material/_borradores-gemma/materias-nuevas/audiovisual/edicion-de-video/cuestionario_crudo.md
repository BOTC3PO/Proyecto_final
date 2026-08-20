### 1 — Transiciones básicas
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-video"
  nivel: "intermedio"
  tags: ["transiciones", "corte"]
pasos:
  - "Seleccionar punto de corte entre dos clips en la línea de tiempo"
  - "Aplicar transición de desvanecimiento de entrada"
respuesta: verdadero
tipo: vf
enunciado: "Una transición de desvanecimiento de entrada (fade in) aparece al inicio del clip seleccionado y el desvanecimiento de salida (fade out) aparece al final."
explicacion: "Las transiciones básicas en edición de video incluyen fade in (desvanecimiento de entrada), fade out (desvanecimiento de salida), cross dissolve (disolución cruzada), wipe (limpieza) y slide (deslizamiento). Cada una controla cómo cambia la visibilidad entre clips."
```

### 2 — Cortes exactos en línea de tiempo
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-video"
  nivel: "intermedio"
  tags: ["corte", "timeline"]
pasos:
  - "Posicionar cursor sobre punto de corte entre clips"
  - "Presionar tecla de corte en editor"
respuesta: true
tipo: completar
enunciado: "Para realizar un corte exacto (cut) entre dos clips, el cursor debe estar posicionado en el __________ del primer clip."
respuestas_validas: ["marcador", "punto", "línea"]
opciones_explicitas:
  - "marcador"
  - "punto"
  - "línea"
explicacion: "En cualquier editor de video profesional, el corte exacto ocurre cuando el cursor está en la línea de tiempo del primer clip y se ejecuta el comando de corte (tecla 'C' o botón de cut). El marcador indica dónde comienza el siguiente clip."
```

### 3 — Efectos de velocidad variable
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-video"
  nivel: "intermedio"
  tags: ["velocidad", "slow-motion"]
pasos:
  - "Seleccionar clip en línea de tiempo"
  - "Aplicar efecto de velocidad al clip"
respuesta: verdadero
tipo: vf
enunciado: "El efecto slow motion (lento movimiento) reduce la velocidad de reproducción del clip, mientras que el fast forward (avance rápido) aumenta la velocidad."
explicacion: "Los efectos de velocidad en edición permiten modificar temporalmente la reproducción. Slow motion ralentiza los movimientos y fast forward acelera. Ambos se aplican al clip seleccionado mediante controles de velocidad o interpolación frame."
```

### 4 — Capas de audio independientes
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-video"
  nivel: "intermedio"
  tags: ["audio", "capas"]
pasos:
  - "Agregar pista de música a proyecto"
  - "Posicionar pista de diálogo sobre música"
respuesta: verdadero
tipo: vf
enunciado: "En un proyecto de edición de video, la pista de audio de diálogo (dubbing) debe colocarse por encima de la pista de música para que se escuche correctamente."
explicacion: "La jerarquía de capas en edición de video coloca pistas superiores sobre inferiores. El diálogo siempre va sobre música para priorizar la voz principal. Esto permite control independiente de volumen y efectos por capa."
```

### 5 — Marca de tiempo exacta
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-video"
  nivel: "intermedio"
  tags: ["marca-temporal", "timeline"]
pasos:
  - "Seleccionar clip en línea de tiempo"
  - "Aplicar marca de tiempo al clip"
respuesta: true
tipo: completar
enunciado: "Una marca de tiempo (timecode) muestra la posición exacta del clip como __________, horas y segundos."
respuestas_validas: ["minutos", "segundos", "frames"]
opciones_explicitas:
  - "minutos"
  - "segundos"
  - "frames"
explicacion: "El timecode en edición de video muestra minutos, segundos y frames (o décimas). Por ejemplo: 01:23:45:12 significa 1 minuto, 23 segundos, 45 frames. Esto permite navegación precisa en proyectos largos."
```

### 6 — Efectos de color básicos
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-video"
  nivel: "intermedio"
  tags: ["color", "efectos"]
pasos:
  - "Seleccionar clip en línea de tiempo"
  - "Aplicar filtro de color al clip"
respuesta: verdadero
tipo: vf
enunciado: "Un filtro de color (color grading) ajusta el balance de tonos, saturación y luminosidad del clip seleccionado."
explicacion: "El color grading modifica la apariencia visual mediante ajuste de canales RGB, curvas de tono, saturación y luminosidad. Esto permite crear estilos visuales coherentes en todo el proyecto."
```

### 7 — Exportación de formato
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-video"
  nivel: "intermedio"
  tags: ["export", "formato"]
pasos:
  - "Finalizar edición del proyecto"
  - "Seleccionar formato de exportación"
respuesta: verdadero
tipo: vf
enunciado: "Al exportar un video para plataforma web, el formato MP4 con codec H.264 es compatible con la mayoría de navegadores modernos."
explicacion: "MP4 con H.264 es estándar universal para distribución web. Compatible con YouTube, Vimeo, redes sociales y navegadores. Alta compresión con calidad aceptable para streaming."
```

### 8 — Puntos de entrada/salida
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-video"
  nivel: "intermedio"
  tags: ["entrada", "salida"]
pasos:
  - "Seleccionar clip en línea de tiempo"
  - "Definir punto de entrada (I) y salida (O)"
respuesta: true
tipo: completar
enunciado: "Los puntos de entrada (I) y salida (O) definen el rango del clip que se __________ a la línea de tiempo."
respuestas_validas: ["importa", "exporta", "copia"]
opciones_explicitas:
  - "importa"
  - "exporta"
  - "copia"
explicacion: "Los marcadores I (in) y O (out) delimitan la porción de clip que se importará o insertará en el proyecto. Solo esa sección entre los dos puntos aparece en la línea de tiempo."
```

### 9 — Transiciones de disolución
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-video"
  nivel: "intermedio"
  tags: ["transiciones", "dissolve"]
pasos:
  - "Seleccionar dos clips consecutivos"
  - "Aplicar transición de disolución cruzada"
respuesta: verdadero
tipo: vf
enunciado: "Una transición de disolución cruzada (cross dissolve) muestra ambos clips simultáneamente durante un período de tiempo."
explicacion: "Cross dissolve hace que el primer clip se desvanezca mientras el segundo aparece gradualmente. Ambos clips son visibles en superposición durante la transición, creando efecto suave entre escenas."
```

### 10 — Ajuste de volumen exacto
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-video"
  nivel: "intermedio"
  tags: ["volumen", "audio"]
pasos:
  - "Seleccionar pista de audio en línea de tiempo"
  - "Ajustar curva de volumen del clip"
respuesta: true
tipo: completar
enunciado: "Una curva de volumen (volume curve) permite ajustar el nivel de __________ a lo largo del clip."
respuestas_validas: ["volumen", "frecuencia", "tono"]
opciones_explicitas:
  - "volumen"
  - "frecuencia"
  - "tono"
explicacion: "Las curvas de volumen en edición permiten controlar el nivel de audio desde -60dB hasta +0dB. Se dibujan puntos clave que definen cómo cambia la intensidad del sonido durante el clip."
```

### 11 — Efectos de transición wipe
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-video"
  nivel: "intermedio"
  tags: ["transiciones", "wipe"]
pasos:
  - "Seleccionar punto entre dos clips"
  - "Aplicar transición de limpieza (wipe)"
respuesta: verdadero
tipo: vf
enunciado: "Una transición de limpieza (wipe) reemplaza completamente un clip con otro mediante un patrón de movimiento."
explicacion: "Wipe muestra una línea o forma que barre la pantalla, eliminando el primer clip mientras aparece el segundo. El patrón puede ser horizontal, vertical, circular u otros diseños geométricos."
```

### 12 — Insertar clip en línea de tiempo
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-video"
  nivel: "intermedio"
  tags: ["insert", "timeline"]
pasos:
  - "Posicionar cursor en línea de tiempo"
  - "Insertar clip existente en proyecto"
respuesta: true
tipo: completar
enunciado: "Al insertar un clip (insert) en la línea de tiempo, los clips existentes se __________ para hacer espacio."
respuestas_validas: ["desplazan", "sobrescriben", "eliminan"]
opciones_explicitas:
  - "desplazan"
  - "sobrescriben"
  - "eliminan"
explicacion: "Insertar (insert) desplaza todos los clips a la derecha para crear espacio. A diferencia de overwrite, no elimina contenido existente. Útil cuando se añaden elementos al medio del proyecto."
```

### 13 — Efectos de transición slide
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-video"
  nivel: "intermedio"
  tags: ["transiciones", "slide"]
pasos:
  - "Seleccionar punto entre dos clips"
  - "Aplicar transición de deslizamiento (slide)"
respuesta: verdadero
tipo: vf
enunciado: "Una transición de deslizamiento (slide) mueve el primer clip hacia un lado mientras aparece el segundo desde la dirección opuesta."
explicacion: "Slide hace que el primer clip se desplace horizontalmente o verticalmente, revelando el segundo clip. El movimiento puede ser en cualquier dirección según configuración del editor."
```

### 14 — Ajuste de duración exacta
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-video"
  nivel: "intermedio"
  tags: ["duración", "clip"]
pasos:
  - "Seleccionar clip en línea de tiempo"
  - "Ajustar duración del clip"
respuesta: true
tipo: completar
enunciado: "Al estirar o comprimir un clip, se modifica su __________ sin cambiar el contenido original."
respuestas_validas: ["duración", "tamaño", "formato"]
opciones_explicitas:
  - "duración"
  - "tamaño"
  - "formato"
explicacion: "Estirar o comprimir un clip altera su duración en la línea de tiempo. El contenido se reproduce más lento (estirado) o más rápido (comprimido), pero los datos originales permanecen intactos."
```

### 15 — Efectos de transición zoom
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-video"
  nivel: "intermedio"
  tags: ["transiciones", "zoom"]
pasos:
  - "Seleccionar punto entre dos clips"
  - "Aplicar transición de zoom"
respuesta: verdadero
tipo: vf
enunciado: "Una transición de zoom (zoom) amplía o reduce el marco del primer clip mientras aparece el segundo en un tamaño diferente."
explicacion: "Zoom transición muestra el primer clip creciendo o reduciéndose, revelando simultáneamente el segundo clip. El efecto puede ser hacia adentro (in) o hacia afuera (out) según configuración."
```

### 16 — Pista de audio silenciosa
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-video"
  nivel: "intermedio"
  tags: ["audio", "silencio"]
pasos:
  - "Seleccionar pista de audio en línea de tiempo"
  - "Aplicar efecto de silencio al clip"
respuesta: verdadero
tipo: vf
enunciado: "Al aplicar un efecto de silencio (mute) a un clip, el sonido se elimina completamente durante ese período."
explicacion: "Mute o silenciar un clip hace que no produzca ningún audio en la línea de tiempo. Útil para crear pausas dramáticas, transiciones sonoras o eliminar ruido de fondo específico."
```

### 17 — Insertar marcador temporal
```yaml
metadata:
  meta