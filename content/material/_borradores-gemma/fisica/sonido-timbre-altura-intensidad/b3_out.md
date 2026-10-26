### 1 — La relación entre amplitud e intensidad
```
metadata:
  materia: "fisica"
  tema: "sonido_intensidad_amplitud"
  nivel: "basico"
  tags: ["sonido", "amplitud", "intensidad"]

variables:
  amplitud_onda: uno_de([0.1, 0.5, 0.9])

enunciado: "Si duplicamos la amplitud de una onda sonora, la intensidad percibida aumenta, pero la ___ de la onda sonora también cambia."

opciones_explicitas: ["frecuencia", "amplitud", "longitud"]
respuesta: "amplitud"
tipo: completar

explicacion: |
  La amplitud de la onda está directamente relacionada con la intensidad (volumen). Un aumento en la amplitud significa un sonido más fuerte. La frecuencia determina el tono, no la intensidad.
```

### 2 — Confusión entre tono y volumen
```
metadata:
  materia: "fisica"
  tema: "sonido_tono_frecuencia"
  nivel: "basico"
  tags: ["sonido", "tono", "frecuencia"]

variables:
  frecuencia_hz: uno_de([200, 500, 1000])

enunciado: "Un sonido con una frecuencia de {frecuencia_hz} Hz se percibe como un tono más ___ que uno de {frecuencia_hz / 2} Hz."

opciones_explicitas: ["agudo", "grave", "fuerte"]
respuesta: "agudo"
tipo: mc

explicacion: |
  La frecuencia determina el tono (altura). A mayor frecuencia, el sonido es más agudo; a menor frecuencia, es más grave. El volumen (intensidad) depende de la amplitud, no de la frecuencia.
```

### 3 — El timbre y la forma de la onda
```
metadata:
  materia: "fisica"
  tema: "sonido_timbre_forma_onda"
  nivel: "intermedio"
  tags: ["sonido", "timbre", "armonicos"]

variables:
  instrumento_a: uno_de(["piano", "violín"])
  instrumento_b: uno_de(["piano", "violín"])

enunciado: "Si dos instrumentos distintos tocan la misma nota con la misma intensidad, la diferencia en su ___ se debe a la forma de su onda y la presencia de armónicos."

opciones_explicitas: ["altura", "tono", "timbre"]
respuesta: "timbre"
tipo: mc

explicacion: |
  El timbre es la cualidad que nos permite distinguir dos sonidos de igual frecuencia e intensidad. Depende de la forma de la onda y de los armónicos que la componen.
```

### 4 — ¿Es la intensidad una magnitud escalar o vectorial?
```
metadata:
  materia: "fisica"
  tema: "sonido_naturaleza_intensidad"
  nivel: "intermedio"
  tags: ["sonido", "intensidad", "magnitud"]

enunciado: "¿La intensidad de un sonido es una magnitud escalar o vectorial?"

opciones_explicitas: ["escalar", "vectorial"]
respuesta: "escalar"
tipo: mc

explicacion: |
  La intensidad sonora se define como la energía por unidad de tiempo y área, es una magnitud escalar ya que no tiene una dirección asociada en el espacio.
```

### 5 — Relación entre frecuencia y periodo
```
metadata:
  materia: "fisica"
  tema: "sonido_frecuencia_periodo"
  nivel: "intermedio"
  tags: ["sonido", "frecuencia", "periodo"]

variables:
  f_valor: uno_de([100, 200, 500])

enunciado: "Si un sonido tiene una frecuencia de {f_valor} Hz, su periodo de oscilación es de ___ segundos."

pasos:
  - "Calcular el periodo usando la fórmula T = 1/f"

respuesta: 1 / f_valor
tipo: input
tolerancia_abs: 0.001

explicacion: |
  El periodo (T) es el inverso de la frecuencia (f). Si la frecuencia es {f_valor} Hz, el tiempo que tarda una onda en completar un ciclo es 1/{f_valor} segundos.
```