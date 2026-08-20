### 1 — El origen del movimiento estelar
```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["astronomia", "rotacion_terrestre"]

respuesta: "rotación terrestre"
tipo: completar
respuestas_validas: ["rotación terrestre"]

enunciado: "El movimiento aparente de las estrellas durante la noche, donde parecen desplazarse de este a oeste, es causado en realidad por la ___ de la Tierra."

explicacion: |
  Aunque parece que el cielo gira alrededor de nosotros, es la Tierra la que gira sobre su propio eje de oeste a este, lo que genera la ilusión de movimiento estelar en sentido contrario.
```

### 2 — Dirección del movimiento aparente
```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["observacion", "astronomia"]

variables:
  dir_estrellas: uno_de(["Este-Oeste", "Oeste-Este"])
  sentido_estrellas: uno_de(["Este-Oeste", "Este-Oeste"])

respuesta: dir_estrellas
tipo: mc
opciones_explicitas: ["Este-Oeste", "Oeste-Este", "Norte-Sur", "Sur-Norte"]

enunciado: "Debido a la rotación terrestre, ¿en qué dirección aparente vemos que se desplazan las estrellas durante la noche?"

explicacion: |
  Como la Tierra rota hacia el Este, los objetos celestes parecen moverse hacia el Oeste.
```

### 3 — ¿Qué es lo que realmente se mueve?
```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "intermedio"
  tags: ["geocentrismo", "heliocentrismo"]

respuesta: falso
tipo: vf

enunciado: "¿Es el movimiento de las constelaciones causado por el desplazamiento físico de las estrellas alrededor de la Tierra?"

explicacion: |
  Falso. Las estrellas tienen sus propios movimientos propios (muy lentos), pero el movimiento diario que vemos es un efecto óptico de nuestra rotación.
```

### 4 — El eje de rotación y el polo celeste
```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "avanzado"
  tags: ["eje_terrestre", "estrellas_fijas"]

variables:
  punto_fijo: uno_de(["Polo Norte Celeste", "Ecuador Celeste", "Polo Sur Celeste"])
  nombre_fijo: uno_de(["Polo Norte Celeste", "Polo Sur Celeste"])

respuesta: punto_fijo
tipo: mc
opciones_explicitas: ["Polo Norte Celeste", "Ecuador Celeste", "Polo Sur Celeste"]

enunciado: "En el hemisferio norte, las estrellas parecen girar alrededor de un punto fijo en el cielo llamado ___."

explicacion: |
  El eje de rotación de la Tierra apunta hacia las estrellas que parecen estar en el centro del movimiento circular, como la Estrella Polar.
```

### 5 — Secuencia de observación astronómica
```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "intermedio"
  tags: ["observacion", "secuencia"]

respuesta: ["Aparición por el Este", "Paso por el Meridiano", "Ocultación por el Oeste"]
tipo: ordenar
opciones_explicitas: ["Aparición por el Este", "Paso por el Meridiano", "Ocultación por el Oeste"]

enunciado: "Ordena el ciclo de movimiento aparente de una estrella desde que sale hasta que se pone:"

pasos:
  - "La estrella aparece en el horizonte."
  - "La estrella alcanza su punto más alto."
  - "La estrella desaparece bajo el horizonte."

explicacion: |
  Debido a la rotación de la Tierra, el ciclo sigue siempre este orden: sale por el este, cruza el cielo (meridiano) y se pone por el oeste.
```