# Audiovisual — Ecualización y reducción de ruido (cuestionario, 23 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta.

---
### 1 — Frecuencia

```
metadata:
  materia: "audiovisual"
  tema: "ecualizacion_y_reduccion_de_ruido"
  nivel: "basico"
  tags: ["frecuencia"]

tipo: mc
opciones_explicitas: ["Hertz", "Decibeles", "Píxeles", "Bits"]
respuesta: "Hertz"

enunciado: "¿En qué unidad se miden las frecuencias?"

explicacion: |
  Indican qué tan agudo o grave es un sonido.
```

### 2 — Frecuencia

```
metadata:
  materia: "audiovisual"
  tema: "ecualizacion_y_reduccion_de_ruido"
  nivel: "basico"
  tags: ["frecuencia"]

tipo: mc
opciones_explicitas: ["De 20 Hz a 20 kHz", "De 1 Hz a 100 Hz", "De 5 kHz a 50 kHz", "De 100 kHz a 1 MHz"]
respuesta: "De 20 Hz a 20 kHz"

enunciado: "¿Qué rango de frecuencias percibe aproximadamente el oído humano?"

explicacion: |
  Es el rango audible típico.
```

### 3 — Eq

```
metadata:
  materia: "audiovisual"
  tema: "ecualizacion_y_reduccion_de_ruido"
  nivel: "basico"
  tags: ["eq"]

tipo: mc
opciones_explicitas: ["Sube o baja el nivel de zonas del espectro", "Cambia la duración", "Quita todo el ruido", "Cambia el formato"]
respuesta: "Sube o baja el nivel de zonas del espectro"

enunciado: "¿Qué hace la ecualización?"

explicacion: |
  Altera el timbre.
```

### 4 — Eq

```
metadata:
  materia: "audiovisual"
  tema: "ecualizacion_y_reduccion_de_ruido"
  nivel: "intermedio"
  tags: ["eq"]

tipo: mc
opciones_explicitas: ["El ancho de la zona de frecuencias afectada", "El volumen final", "El códec", "La duración del audio"]
respuesta: "El ancho de la zona de frecuencias afectada"

enunciado: "¿Qué es el factor Q de una banda?"

explicacion: |
  Un Q alto afecta una zona estrecha.
```

### 5 — Eq

```
metadata:
  materia: "audiovisual"
  tema: "ecualizacion_y_reduccion_de_ruido"
  nivel: "intermedio"
  tags: ["eq"]

tipo: vf
respuesta: verdadero

enunciado: "Un Q bajo afecta una zona amplia y suele sonar más natural."

explicacion: |
  Los cambios amplios son menos evidentes.
```

### 6 — Filtros

```
metadata:
  materia: "audiovisual"
  tema: "ecualizacion_y_reduccion_de_ruido"
  nivel: "basico"
  tags: ["filtros"]

tipo: mc
opciones_explicitas: ["Para quitar graves que no aportan, como rumores y golpes de aire", "Para agregar graves", "Para cortar los agudos", "Para subir el volumen"]
respuesta: "Para quitar graves que no aportan, como rumores y golpes de aire"

enunciado: "¿Para qué se usa un filtro pasa-altos en una voz?"

explicacion: |
  Suele fijarse alrededor de 80 a 100 Hz.
```

### 7 — Filtros

```
metadata:
  materia: "audiovisual"
  tema: "ecualizacion_y_reduccion_de_ruido"
  nivel: "basico"
  tags: ["filtros"]

tipo: completar
enunciado: "El filtro que elimina las frecuencias por debajo de un punto se llama pasa-___."
respuestas_validas:
  - "altos"

explicacion: |
  Deja pasar las frecuencias altas.
```

### 8 — Filtros

```
metadata:
  materia: "audiovisual"
  tema: "ecualizacion_y_reduccion_de_ruido"
  nivel: "intermedio"
  tags: ["filtros"]

tipo: mc
opciones_explicitas: ["Claridad e inteligibilidad", "Graves profundos", "Ruido eléctrico", "Eco"]
respuesta: "Claridad e inteligibilidad"

enunciado: "La zona de 2 a 5 kHz en una voz aporta..."

explicacion: |
  Un exceso la vuelve áspera.
```

### 9 — Filtros

```
metadata:
  materia: "audiovisual"
  tema: "ecualizacion_y_reduccion_de_ruido"
  nivel: "intermedio"
  tags: ["filtros"]

tipo: vf
respuesta: falso

enunciado: "Las frecuencias orientativas para la voz son reglas fijas que sirven igual para toda voz y micrófono."

explicacion: |
  Son puntos de partida: se decide escuchando.
```

### 10 — Filtros

```
metadata:
  materia: "audiovisual"
  tema: "ecualizacion_y_reduccion_de_ruido"
  nivel: "avanzado"
  tags: ["filtros"]

tipo: mc
opciones_explicitas: ["Recortar el problema", "Subir todo lo demás", "Aplicar cambios extremos", "No tocar nada"]
respuesta: "Recortar el problema"

enunciado: "Entre subir una zona deseada y recortar una molesta, ¿qué suele ser preferible?"

explicacion: |
  Los cambios pequeños suenan mejor.
```

### 11 — Compresion

```
metadata:
  materia: "audiovisual"
  tema: "ecualizacion_y_reduccion_de_ruido"
  nivel: "basico"
  tags: ["compresion"]

tipo: mc
opciones_explicitas: ["La diferencia entre los sonidos fuertes y los suaves", "La duración del archivo", "La frecuencia de muestreo", "El número de canales"]
respuesta: "La diferencia entre los sonidos fuertes y los suaves"

enunciado: "¿Qué es la dinámica en audio?"

explicacion: |
  El compresor la reduce.
```

### 12 — Compresion

```
metadata:
  materia: "audiovisual"
  tema: "ecualizacion_y_reduccion_de_ruido"
  nivel: "basico"
  tags: ["compresion"]

tipo: mc
opciones_explicitas: ["Reduce automáticamente las diferencias de nivel", "Aumenta el ruido", "Cambia la frecuencia de muestreo", "Corta los graves"]
respuesta: "Reduce automáticamente las diferencias de nivel"

enunciado: "¿Qué hace un compresor?"

explicacion: |
  Deja la voz más pareja.
```

### 13 — Compresion

```
metadata:
  materia: "audiovisual"
  tema: "ecualizacion_y_reduccion_de_ruido"
  nivel: "intermedio"
  tags: ["compresion"]

tipo: mc
opciones_explicitas: ["1 dB", "3 dB", "0 dB", "6 dB"]
respuesta: "1 dB"

enunciado: "Con un ratio de 3 a 1, por cada 3 dB que la señal supera el umbral, ¿cuánto sale por encima?"

explicacion: |
  Esa es la proporción.
```

### 14 — Compresion

```
metadata:
  materia: "audiovisual"
  tema: "ecualizacion_y_reduccion_de_ruido"
  nivel: "intermedio"
  tags: ["compresion"]

tipo: mc
opciones_explicitas: ["El nivel a partir del cual el compresor empieza a actuar", "La frecuencia de corte", "El tiempo de ataque", "El formato final"]
respuesta: "El nivel a partir del cual el compresor empieza a actuar"

enunciado: "¿Qué es el umbral (threshold)?"

explicacion: |
  Por debajo no se comprime.
```

### 15 — Compresion

```
metadata:
  materia: "audiovisual"
  tema: "ecualizacion_y_reduccion_de_ruido"
  nivel: "intermedio"
  tags: ["compresion"]

tipo: vf
respuesta: verdadero

enunciado: "Después de comprimir suele subirse la ganancia de salida para recuperar volumen."

explicacion: |
  La compresión baja los picos.
```

### 16 — Compresion

```
metadata:
  materia: "audiovisual"
  tema: "ecualizacion_y_reduccion_de_ruido"
  nivel: "intermedio"
  tags: ["compresion"]

tipo: vf
respuesta: verdadero

enunciado: "Una compresión excesiva puede quitarle naturalidad a la voz."

explicacion: |
  Se busca un efecto suave.
```

### 17 — Ruido

```
metadata:
  materia: "audiovisual"
  tema: "ecualizacion_y_reduccion_de_ruido"
  nivel: "intermedio"
  tags: ["ruido"]

tipo: mc
opciones_explicitas: ["Seleccionando un fragmento donde solo se oiga el ruido", "Eligiendo la parte con más voz", "Subiendo el volumen", "Exportando a MP3"]
respuesta: "Seleccionando un fragmento donde solo se oiga el ruido"

enunciado: "Para reducir un ruido continuo, ¿cómo se obtiene su perfil?"

explicacion: |
  El programa aprende cómo suena.
```

### 18 — Ruido

```
metadata:
  materia: "audiovisual"
  tema: "ecualizacion_y_reduccion_de_ruido"
  nivel: "intermedio"
  tags: ["ruido"]

tipo: mc
opciones_explicitas: ["Metálica y artificial", "Más clara siempre", "Más fuerte", "Con más graves"]
respuesta: "Metálica y artificial"

enunciado: "Una reducción de ruido exagerada deja la voz..."

explicacion: |
  Hay que aplicarla con mesura.
```

### 19 — Ruido

```
metadata:
  materia: "audiovisual"
  tema: "ecualizacion_y_reduccion_de_ruido"
  nivel: "basico"
  tags: ["ruido"]

tipo: vf
respuesta: falso

enunciado: "Cualquier herramienta repara por completo una mala grabación."

explicacion: |
  Lo ideal es prevenir el problema al grabar.
```

### 20 — Ruido

```
metadata:
  materia: "audiovisual"
  tema: "ecualizacion_y_reduccion_de_ruido"
  nivel: "avanzado"
  tags: ["ruido"]

tipo: mc
opciones_explicitas: ["Un filtro notch", "Un compresor", "Un reverb", "Un limitador de video"]
respuesta: "Un filtro notch"

enunciado: "¿Qué filtro se usa para atenuar un zumbido eléctrico muy puntual?"

explicacion: |
  Actúa en una frecuencia muy estrecha.
```

### 21 — Eco

```
metadata:
  materia: "audiovisual"
  tema: "ecualizacion_y_reduccion_de_ruido"
  nivel: "intermedio"
  tags: ["eco"]

tipo: mc
opciones_explicitas: ["Grabando en un lugar con materiales que absorban", "Subiendo el volumen", "Exportando en otro formato", "Usando solo graves"]
respuesta: "Grabando en un lugar con materiales que absorban"

enunciado: "¿Cómo se reduce mejor el eco de una habitación?"

explicacion: |
  Las herramientas de reducción tienen resultados limitados.
```

### 22 — Eco

```
metadata:
  materia: "audiovisual"
  tema: "ecualizacion_y_reduccion_de_ruido"
  nivel: "intermedio"
  tags: ["eco"]

tipo: mc
opciones_explicitas: ["Atenuar las sibilancias", "Aumentar los graves", "Quitar el eco", "Subir el volumen"]
respuesta: "Atenuar las sibilancias"

enunciado: "Un de-esser sirve para..."

explicacion: |
  Actúa sobre las eses estridentes.
```

### 23 — Eco

```
metadata:
  materia: "audiovisual"
  tema: "ecualizacion_y_reduccion_de_ruido"
  nivel: "basico"
  tags: ["eco"]

tipo: vf
respuesta: falso

enunciado: "El clipping se corrige bien después de grabar."

explicacion: |
  Por eso se graba con margen de nivel.
```
