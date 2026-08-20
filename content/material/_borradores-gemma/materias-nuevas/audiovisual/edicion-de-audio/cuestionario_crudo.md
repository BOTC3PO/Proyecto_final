### 1 — Normalización vs Loudness
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-audio"
  nivel: "intermedio"
  tags: ["normalizacion", "loudness"]
respuesta: "verdadero"
tipo: vf
enunciado: "La normalización ajusta el audio para alcanzar un nivel objetivo sin considerar la dinámica real, mientras que Loudness (EBU R128) evalúa la percepción humana del volumen."
pasos:
  - "Analizar diferencia entre normalización y loudness"
  - "Verificar comportamiento de cada método"
explicacion: "La normalización usa peak detection sin modelar percepción, mientras Loudness R128 calcula integrated LUFS con K-weighting para simular oído humano."
```

### 2 — Frecuencia EQ Bass
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-audio"
  nivel: "intermedio"
  tags: ["eq", "bass"]
respuesta: "60-120"
tipo: completar
enunciado: "Para cortar frecuencias de fondo (rumble) en audio grabado, se recomienda usar EQ para atenuar el rango ____ Hz antes de masterizar."
pasos:
  - "Identificar frecuencia baja típica de rumble"
  - "Verificar práctica estándar de EQ bass cut"
respuestas_validas: ["60-120", "60 a 120", "seisenta a ciento veinte"]
explicacion: "El rango 60-120 Hz es donde se ubica el rumble eléctrico común; cortar aquí previene saturación sin afectar graves musicales."
```

### 3 — Ratio Compresión
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-audio"
  nivel: "intermedio"
  tags: ["compresor", "ratio"]
respuesta: "4:1"
tipo: completar
enunciado: "En compresión vocal estándar, un ratio de ____ se considera punto medio entre control y naturalidad para voces pop."
pasos:
  - "Evaluar ratios comunes en compresión vocal"
  - "Verificar práctica estándar pop vocal"
respuestas_validas: ["4:1", "4 a 1", "cuatro a uno"]
explicacion: "El ratio 4:1 es el punto medio ideal para voces pop, ofreciendo control dinámico sin comprimir excesivamente la expresión."
```

### 4 — Reverb Plate vs Hall
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-audio"
  nivel: "intermedio"
  tags: ["reverb", "plate"]
respuesta: "Plate"
tipo: mc
enunciado: "Para efectos de voz en locución (voiceover) que requieran sonido cercano y controlado, ¿qué tipo de reverb se prefiere?"
pasos:
  - "Comparar tipos de reverb para voiceover"
  - "Verificar estándar producción locución"
opciones_explicitas:
  - "Plate"
  - "Hall"
  - "Room"
  - "Spring"
respuesta: "Plate"
explicacion: "Plate reverb ofrece decay corto y cuerpo controlado ideal para voiceover, mientras Hall es demasiado abierto y Spring tiene características de guitarra."
```

### 5 — Noise Gate Threshold
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-audio"
  nivel: "intermedio"
  tags: ["gate", "noise"]
respuesta: "-40 dB"
tipo: completar
enunciado: "En gate de ruido, un threshold de ____ dB permite cortar silencio entre frases sin atacar voz en susurro."
pasos:
  - "Calibrar threshold para gate silencios"
  - "Verificar práctica estándar noise reduction"
respuestas_validas: ["-40 dB", "-40 a -50 dB"]
explicacion: "-40 dB es el punto medio típico para eliminar ruido de fondo sin cortar voz en susurro, balanceando limpieza y naturalidad."
```

### 6 — Gain Staging Peak
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-audio"
  nivel: "intermedio"
  tags: ["gain", "peak"]
respuesta: "-6 dBFS"
tipo: mc
enunciado: "En gain staging profesional, ¿qué nivel peak se recomienda mantener antes de compresión para evitar clipping?"
pasos:
  - "Evaluar niveles peak pre-compresión"
  - "Verificar estándar gain staging"
opciones_explicitas:
  - "-6 dBFS"
  "-3 dBFS"
  "-12 dBFS"
  "-90 dB"
respuesta: "-6 dBFS"
explicacion: "-6 dBFS es el punto óptimo para headroom pre-compresión, permitiendo compresión agresiva sin saturación por picos."
```

### 7 — Waveform Analysis RMS
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-audio"
  nivel: "intermedio"
  tags: ["analisis", "rms"]
respuesta: "RMS"
tipo: mc
enunciado: "Para medir el volumen promedio de audio (no peak), ¿qué métrica se utiliza en waveform analyzer?"
pasos:
  - "Identificar métricas de análisis de audio"
  - "Verificar diferencia RMS vs Peak"
opciones_explicitas:
  - "RMS"
  - "Peak"
  - "LUFS"
  - "dBTP"
respuesta: "RMS"
explicacion: "RMS (Root Mean Square) mide el nivel promedio de energía, mientras Peak detecta máxima amplitud instantánea."
```

### 8 — Sample Rate 48kHz
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-audio"
  nivel: "intermedio"
  tags: ["sample", "rate"]
respuesta: "48 kHz"
tipo: completar
enunciado: "Para producción de video estándar, ¿qué sample rate se recomienda para audio sincronizado?"
pasos:
  - "Evaluar sample rates para video"
  - "Verificar estándar AV sincronización"
respuestas_validas: ["48 kHz", "48000 Hz"]
explicacion: "48 kHz es el estándar para video (DVD, streaming) por sincronización con cadencia de frames, mientras 44.1kHz es solo audio CD."
```

### 9 — Bit Depth 24-bit
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-audio"
  nivel: "intermedio"
  tags: ["bit", "depth"]
respuesta: "24 bits"
tipo: mc
enunciado: "En edición de audio profesional, ¿qué bit depth se recomienda para máxima calidad durante procesamiento?"
pasos:
  - "Comparar bit depths en producción"
  - "Verificar estándar calidad masterización"
opciones_explicitas:
  - "24 bits"
  - "16 bits"
  - "32 bits"
  - "8 bits"
respuesta: "24 bits"
explicacion: "24 bits ofrece headroom dinámico superior para procesamiento sin degradación, mientras 16 bits es solo para master final."
```

### 10 — Crossfade Duration
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-audio"
  nivel: "intermedio"
  tags: ["crossfade", "transicion"]
respuesta: "5 segundos"
tipo: completar
enunciado: "Para transición entre dos clips de audio en podcast, ¿qué duración de crossfade se recomienda para evitar clicks?"
pasos:
  - "Calibrar crossfade para podcast"
  - "Verificar práctica estándar transiciones"
respuestas_validas: ["5 segundos", "3-5 segundos"]
explicacion: "5 segundos es el punto medio ideal para transiciones naturales en podcast, evitando clicks sin solapamiento excesivo."
```

### 11 — Limiter Ceiling
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-audio"
  nivel: "intermedio"
  tags: ["limiter", "ceiling"]
respuesta: "-1 dBTP"
tipo: mc
enunciado: "En limiter de masterización, ¿qué ceiling se recomienda para evitar clipping final?"
pasos:
  - "Evaluar ceilings en limiter master"
  - "Verificar estándar loudness mastering"
opciones_explicitas:
  - "-1 dBTP"
  - "-3 dBTP"
  - "-6 dBTP"
  - "0 dBTP"
respuesta: "-1 dBTP"
explicacion: "-1 dBTP (True Peak) es el ceiling estándar para evitar clipping digital, permitiendo maximización sin distorsión."
```

### 12 — De-esser Frequency
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-audio"
  nivel: "intermedio"
  tags: ["de-esser", "sibilancia"]
respuesta: "5-8 kHz"
tipo: completar
enunciado: "Para reducir sibilancia en voz (t, ch, s), ¿qué rango de frecuencia debe atacar el de-esser?"
pasos:
  - "Identificar frecuencia de sibilancia"
  - "Verificar práctica estándar de-essing"
respuestas_validas: ["5-8 kHz", "5000-8000 Hz"]
explicacion: "5-8 kHz es donde se ubican las consonantes sibilantes; el de-esser aplica compresión selectiva solo en este rango."
```

### 13 — Ducking Threshold
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-audio"
  nivel: "intermedio"
  tags: ["ducking", "music"]
respuesta: "-20 dB"
tipo: mc
enunciado: "En ducking automático para música de fondo, ¿qué reducción se recomienda para no perder detalle musical?"
pasos:
  - "Calibrar reducción ducking"
  - "Verificar estándar mezcla música voz"
opciones_explicitas:
  - "-20 dB"
  - "-30 dB"
  - "-10 dB"
  - "-60 dB"
respuesta: "-20 dB"
explicacion: "-20 dB es la reducción óptima para ducking, permitiendo voz clara sin silenciar completamente la música de fondo."
```

### 14 — Stereo Width Meter
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-audio"
  nivel: "intermedio"
  tags: ["stereo", "width"]
respuesta: "100%"
tipo: vf
enunciado: "Un stereo width de 100% indica señal completamente mono, mientras que valores mayores indican campo estéreo."
pasos:
  - "Analizar interpretación stereo width"
  - "Verificar métricas de ancho estéreo"
explicacion: "100% en stereo width representa mono puro; valores como 200-400% indican campo estéreo amplio para inmersión."
```

### 15 — Phase Cancellation
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-audio"
  nivel: "intermedio"
  tags: ["phase", "cancellation"]
respuesta: "verdadero"
tipo: vf
enunciado: "La fase opuesta entre canales puede causar cancelación de graves al sumar en mono, afectando mezcla estéreo."
pasos:
  - "Evaluar problemas de fase estéreo"
  - "Verificar impacto en suma mono"
explicacion: "Fases opuestas causan cancelación constructiva/destructiva; esto afecta graves especialmente en conversión estéreo a mono."
```

### 16 — Click Pops Removal
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-audio"
  nivel: "intermedio"
  tags: ["clicks", "pops"]
respuesta: "20 ms"
tipo: completar
enunciado: "Para eliminar clicks/pops en transiciones de audio, ¿qué duración de silencio se recomienda insertar?"
pasos:
  - "Calibrar duración click removal"
  - "Verificar práctica estándar reparación audio"
respuestas_validas: ["20 ms", "15-25 ms"]
explicacion: "20 ms es el punto medio para eliminar clicks sin afectar naturalidad, suficiente para detección de transición brusca."
```

### 17 — Audio Bouncing Export
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-audio"
  nivel: "intermedio"
  tags: ["bounce", "export"]
respuesta: "-12 dBFS"
tipo: mc
enunciado: "Al bounce audio finalizado, ¿qué nivel se recomienda para evitar saturación en exportación?"
pasos:
  - "Calibrar niveles bounce export"
  - "Verificar estándar masterización export"
opciones_explicitas:
  - "-12 dBFS"
  - "-6 dBFS"
  - "-3 dBFS"
  "-0 dBFS"
respuesta: "-12 dBFS"
explicacion: "-12 dBFS es el nivel óptimo para bounce, evitando saturación por procesamiento adicional en destino."
```

### 18 — Region Selection Tool
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-audio"
  nivel: "intermedio"
  tags: ["region", "selection"]
respuesta: "Ctrl+D"
tipo: completar
enunciado: "En DAW estándar, ¿qué atajo duplica una región seleccionada para edición rápida?"
pasos:
  - "Identificar atajos de región"
  - "Verificar práctica estándar DAW"
respuestas_validas: ["Ctrl+D", "Cmd+D"]
explicacion: "Ctrl+D (Windows) o Cmd+D (Mac) duplica región seleccionada para edición rápida sin cortar original."
```

### 19 — Timeline Markers Color
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-audio"
  nivel: "intermedio"
  tags: ["markers", "timeline"]
respuesta: "amarillo"
tipo: mc
enunciado: "En timeline de edición, ¿qué color se asigna típicamente a marcadores de toma (take)?"
pasos:
  - "Identificar colores de markers"
  - "Verificar estándar organización toma"
opciones_explicitas:
  - "amarillo"
  - "verde"
  - "rojo"
  - "azul"
respuesta: "amarillo"
explicacion: "Amarillo es el color estándar para marcadores de take, permitiendo identificación rápida de versiones."
```

### 20 — Equalizer Q Factor
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-audio"
  nivel: "intermedio"
  tags: ["eq", "q-factor"]
respuesta: "1.41"
tipo: completar
enunciado: "En EQ paramétrico, un Q factor de ____ representa ancho medio para ajuste selectivo sin afectar frecuencias adyacentes."
pasos:
  - "Calibrar Q factor EQ"
  - "Verificar práctica estándar ajuste selectivo"
respuestas_validas: ["1.41", "√2"]
explicacion: "Q=1.41 (√2) es el ancho medio ideal, afectando solo frecuencias cercanas sin impactar adyacentes significativamente."
```

### 21 — Audio Format WAV vs AIFF
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-audio"
  nivel: "intermedio"
  tags: ["format", "wavs"]
respuesta: "WAV"
tipo: mc
enunciado: "¿Qué formato se prefiere para intercambio universal de audio sin pérdida en producción?"
pasos:
  - "Comparar formatos audio sin pérdida"
  - "Verificar estándar intercambio producción"
opciones_explicitas:
  - "WAV"
  - "AIFF"
  - "FLAC"
  - "MP3"
respuesta: "WAV"
explicacion: "WAV es el estándar universal para intercambio sin pérdida, compatible con todas las DAW principales."
```

### 22 — Noise Floor Measurement
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-audio"
  nivel: "intermedio"
  tags: ["noise", "floor"]
respuesta: "-90 dBFS"
tipo: completar
enunciado: "Para medir ruido de fondo en grabación, ¿qué nivel se considera aceptable para audio profesional?"
pasos:
  - "Calibrar niveles noise floor"
  - "Verificar estándar calidad grabación"
respuestas_validas: ["-90 dBFS", "-85 a -95 dBFS"]
explicacion: "-90 dBFS es el punto medio aceptable para ruido de fondo, permitiendo headroom dinámico sin saturación audible."
```

### 23 — Auto-Detect Silence Region
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-audio"
  nivel: "intermedio"
  tags: ["auto", "silence"]
respuesta: "-45 dBFS"
tipo: mc
enunciado: "En detección automática de silencio, ¿qué threshold se recomienda para identificar pausas sin cortar voz en susurro?"
pasos:
  - "Calibrar auto-detect silence"
  - "Verificar práctica estándar automatización"
opciones_explicitas:
  - "-45 dBFS"
  - "-50 dBFS"
  - "-35 dBFS"
  - "-60 dBFS"
respuesta: "-45 dBFS"
explicacion: "-45 dBFS es el punto medio para detección automática, evitando cortar voz en susurro mientras elimina silencios largos."
```

### 24 — Audio Normalization Peak
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-audio"
  nivel: "intermedio"
  tags: ["normalizacion", "peak"]
respuesta: "verdadero"
tipo: vf
enunciado: "La normalización por peak ajusta toda la señal para que el pico máximo alcance -6 dBFS sin considerar dinámica."
pasos:
  - "Analizar método normalización peak"
  - "Verificar comportamiento ajuste dinámico"
explicacion: "Normalización peak usa detection de máximo y escala linealmente todo el audio, ignorando distribución dinámica real."
```

### 25 — Master Bus Limiting
```yaml
metadata:
  materia: "audiovisual"
  tema: "edicion-de-audio"
  nivel: "intermedio"
  tags: ["master", "limiting"]
respuesta: "-1 dBTP"
tipo: completar
enunciado: "En master bus final, ¿qué True Peak se recomienda como ceiling para maximización loudness?"
pasos:
  - "Calibrar ceiling master limiting"
  - "Verificar estándar loudness maximization"
respuestas_validas: ["-1 dBTP", "-0.5 a -1 dBTP"]
explicacion: "-1 dBTP es el ceiling óptimo para master limiting, permitiendo maximización loudness sin distorsión por clipping digital."
```