### 1 — Diferencia entre tono e intensidad
```
metadata:
  materia: "fisica"
  tema: "propiedades_del_sonido"
  nivel: "basico"
  tags: ["sonido", "frecuencia", "amplitud"]

respuesta: "frecuencia"
tipo: "completar"
respuestas_validas: ["frecuencia"]

enunciado: "La altura de un sonido depende de la ___ del onda sonora, mientras que la intensidad depende de su amplitud."

explicacion: |
  La altura (tono) está determinada por la frecuencia (número de vibraciones por segundo), mientras que la intensidad (volumen) está relacionada con la amplitud de la onda.
```

### 2 — El timbre y la forma de la onda
```
metadata:
  materia: "fisica"
  tema: "propiedades_del_sonido"
  nivel: "intermedio"
  tags: ["timbre", "onda", "armonicos"]

opciones_explicitas: ["La amplitud de la onda", "La frecuencia de la onda", "La forma de la onda", "La velocidad de la onda"]
respuesta: "La forma de la onda"
tipo: "mc"

enunciado: "Si dos instrumentos diferentes tocan la misma nota con la misma intensidad, lo que permite distinguirlos es el timbre, el cual depende de:"

explicacion: |
  El timbre es la cualidad que nos permite distinguir sonidos de la misma frecuencia y amplitud, dependiendo de la forma de la onda (presencia de armónicos).
```

### 3 — Relación amplitud e intensidad
```
metadata:
  materia: "fisica"
  tema: "propiedades_del_sonido"
  nivel: "basico"
  tags: ["intensidad", "amplitud", "volumen"]

variables:
  es_mayor: "amplitud_A > amplitud_B"
  amplitud_A: 0.8
  amplitud_B: 0.3

respuesta: verdadero
tipo: "vf"

enunciado: "Si comparamos dos ondas sonoras donde la onda A tiene una amplitud de {amplitud_A} y la onda B tiene una amplitud de {amplitud_B}, ¿es la onda A más intensa que la onda B?"

explicacion: |
  A mayor amplitud de la onda, mayor es la energía transportada y, por lo tanto, mayor es la intensidad sonora (volumen).
```

### 4 — Orden de las cualidades del sonido
```
metadata:
  materia: "fisica"
  tema: "propiedades_del_sonido"
  nivel: "basico"
  tags: ["orden", "conceptos"]

opciones_explicitas: ["Frecuencia", "Amplitud", "Forma de onda"]
respuesta: ["Frecuencia", "Amplitud", "Forma de onda"]
tipo: "ordenar"

enunciado: "Ordena las propiedades del sonido de acuerdo a la característica física que las determina: 1. Altura, 2. Intensidad, 3. Timbre."

explicacion: |
  La altura se asocia a la frecuencia, la intensidad a la amplitud y el timbre a la forma de la onda (armónicos).
```

### 5 — Comparación de frecuencias
```
metadata:
  materia: "fisica"
  tema: "propiedades_del_sonido"
  nivel: "intermedio"
  tags: ["frecuencia", "tono", "agudo"]

variables:
  idx: uno_de([0, 1])
  escenario: [[440, "La nota es más aguda"], [100, "La nota es más grave"]]

respuesta: "La nota es más aguda"
tipo: "mc"
opciones_explicitas: ["La nota es más aguda", "La nota es más grave"]

enunciado: "Si un sonido tiene una frecuencia de {escenario[idx][0]} Hz y otro tiene una frecuencia de 200 Hz, para el primer caso la nota es: ___"

explicacion: |
  A mayor frecuencia, el sonido es percibido como más agudo. A menor frecuencia, es más grave.
```