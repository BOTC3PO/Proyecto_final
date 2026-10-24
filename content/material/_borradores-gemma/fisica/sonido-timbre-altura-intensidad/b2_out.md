### 1 — Relación entre frecuencia y altura
```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades"
  nivel: "basico"
  tags: ["frecuencia", "tono"]

variables:
  f_ejemplo: 440

respuesta: f_ejemplo
tipo: completar
respuestas_validas: [440]

enunciado: "La altura de un sonido depende de su frecuencia. Si una nota musical tiene una frecuencia de {f_ejemplo} Hz, la altura de dicho sonido es de ___ Hz."

explicacion: |
  La altura está directamente relacionada con la frecuencia. A mayor frecuencia, sonido más agudo; a menor frecuencia, sonido más grave.
```

### 2 — Intensidad y amplitud
```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades"
  nivel: "intermedio"
  tags: ["intensidad", "amplitud"]

variables:
  amplitud_a: 0.5
  amplitud_b: 0.8
  idx: uno_de([0, 1])
  val_a: 0.5
  val_b: 0.8

respuesta: uno_de([val_a, val_b]) == val_a ? "Mayor" : "Menor"
tipo: mc
opciones_explicitas: ["Mayor", "Menor"]

enunciado: "Si comparamos dos ondas sonoras, una con amplitud {uno_de([val_a, val_b])} y otra con amplitud {uno_de([val_a, val_b])}, la que tiene mayor amplitud tendrá una intensidad sonora ___."

explicacion: |
  La intensidad sonora depende del cuadrado de la amplitud de la onda. A mayor amplitud, mayor intensidad (volumen).
```

### 3 — Cálculo de periodo
```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades"
  nivel: "intermedio"
  tags: ["frecuencia", "periodo"]

variables:
  f_onda: 500

respuesta: 0.002
tipo: input
tolerancia_abs: 0.0001

enunciado: "El periodo (T) es el inverso de la frecuencia (f), es decir, T = 1/f. Si una onda sonora tiene una frecuencia de {f_onda} Hz, ¿cuál es su periodo en segundos?"

pasos:
  - "Identificar la frecuencia: f = 500 Hz"
  - "Aplicar la fórmula: T = 1 / 500"
  - "Resultado: T = 0.002 s"

explicacion: |
  El periodo es el tiempo que tarda una onda en completar un ciclo completo. Al ser el inverso de la frecuencia, a mayor frecuencia, menor periodo.
```

### 4 — Identificación de cualidades
```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades"
  nivel: "basico"
  tags: ["timbre", "forma_onda"]

respuesta: verdadero
tipo: vf

enunciado: "¿El timbre es la cualidad que nos permite distinguir dos sonidos de igual frecuencia e intensidad pero de distinta fuente?"

explicacion: |
  Verdadero. El timbre depende de la forma de la onda (armónicos) y es lo que nos permite distinguir, por ejemplo, un piano de un violín tocando la misma nota.
```

### 5 — Secuencia de producción del sonido
```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades"
  nivel: "basico"
  tags: ["proceso_sonido"]

respuesta: ["Vibración de la fuente", "Propagación por el medio", "Recepción en el oído"]
tipo: ordenar
opciones_explicitas: ["Vibración de la fuente", "Propagación por el medio", "Recepción en el oído", "Reflexión en pared"]

enunciado: "Ordena cronológicamente los pasos necesarios para que un sonido sea percibido por un ser humano:"

explicacion: |
  Primero se genera la vibración, luego la onda viaja por el aire (medio) y finalmente llega al sistema auditivo.
```