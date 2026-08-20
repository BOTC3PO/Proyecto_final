# Fisica — Sonido timbre altura intensidad (cuestionario, 26 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Propiedades del sonido

```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades_basicas"
  nivel: "basico"
  tags: ["acustica", "conceptos"]

respuesta: "frecuencia"
tipo: completar
respuestas_validas:
  - "frecuencia"

enunciado: "La propiedad del sonido que nos permite distinguir si un tono es agudo o grave se denomina ___."

explicacion: |
  La frecuencia (medida en Hertz) determina la altura del sonido. A mayor frecuencia, sonido más agudo; a menor frecuencia, sonido más grave.
```

### 2 — Intensidad sonora

```
metadata:
  materia: "fisica"
  tema: "sonido_intensidad"
  nivel: "basico"
  tags: ["acustica", "amplitud"]

variables:
  es_grande: uno_de([verdadero, falso])

respuesta: verdadero
tipo: vf
enunciado: "Si la amplitud de una onda sonora aumenta, la intensidad (volumen) del sonido es mayor. ¿Es esto verdadero?"

explicacion: |
  Verdadero. La amplitud de la onda está directamente relacionada con la energía de la onda y, por lo tanto, con la intensidad sonora percibida.
```

### 3 — Diferenciación de timbres

```
metadata:
  materia: "fisica"
  tema: "sonido_timbre"
  nivel: "basico"
  tags: ["acustica", "armonicos"]

respuesta: "timbre"
tipo: mc
opciones_explicitas: ["tono", "timbre", "intensidad"]

enunciado: "Si dos instrumentos diferentes (por ejemplo, un piano y un violín) tocan la misma nota con la misma intensidad, la cualidad que nos permite distinguir qué instrumento es cada uno se llama:"

explicacion: |
  El timbre depende de la forma de la onda y de la combinación de armónicos que componen el sonido, permitiendo distinguir fuentes sonoras con la misma frecuencia e intensidad.
```

### 4 — Relación altura y frecuencia

```
metadata:
  materia: "fisica"
  tema: "sonido_altura_frecuencia"
  nivel: "basico"
  tags: ["acustica", "frecuencia"]

variables:
  caso: uno_de([0, 1])
  datos: [[440, "grave"], [880, "agudo"]]
  frecuencia: datos[caso][0]
  altura: datos[caso][1]

respuesta: altura
tipo: mc
opciones_explicitas: ["agudo", "grave"]

enunciado: "Si un sonido tiene una frecuencia de {frecuencia} Hz, su altura es ___."

pasos:
  - "Identificar la frecuencia dada."
  - "Comparar con el concepto de altura (frecuencia alta = agudo, frecuencia baja = grave)."

explicacion: |
  En este caso, la frecuencia de {frecuencia} Hz se clasifica como {altura} según la escala de altura.
```

### 5 — Relación altura y frecuencia

```
metadata:
  materia: "fisica"
  tema: "sonido_altura_frecuencia"
  nivel: "basico"
  tags: ["acustica", "frecuencia"]

variables:
  idx: uno_de([0, 1])
  datos: [["440", "grave"], ["880", "agudo"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["agudo", "grave"]

enunciado: "Si un sonido tiene una frecuencia de {datos[idx][0]} Hz, su altura es ___."

explicacion: |
  La frecuencia determina la altura: frecuencias altas son agudas y frecuencias bajas son graves.
```

### 6 — Orden de las cualidades

```
metadata:
  materia: "fisica"
  tema: "sonido_orden_cualidades"
  nivel: "basico"
  tags: ["acustica", "orden"]

respuesta_orden: ["tono", "timbre", "intensidad"]
tipo: ordenar
opciones_explicitas: ["tono", "timbre", "intensidad"]

enunciado: "Ordena las siguientes cualidades del sonido de acuerdo a la propiedad física que representan (de la que depende la altura, a la que depende el timbre, y finalmente la que depende la amplitud):"

explicacion: |
  1. Tono (Frecuencia)
  2. Timbre (Forma de onda/Armónicos)
  3. Intensidad (Amplitud)
```

### 7 — Relación entre frecuencia y altura

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
respuestas_validas:
  - 440

enunciado: "La altura de un sonido depende de su frecuencia. Si una nota musical tiene una frecuencia de {f_ejemplo} Hz, la altura de dicho sonido es de ___ Hz."

explicacion: |
  La altura está directamente relacionada con la frecuencia. A mayor frecuencia, sonido más agudo; a menor frecuencia, sonido más grave.
```

### 8 — Intensidad y amplitud

```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades"
  nivel: "intermedio"
  tags: ["intensidad", "amplitud"]

variables:
  datos: [[0.5, "Mayor"], [0.8, "Menor"]]
  idx: uno_de([0, 1])
  amplitud_a: datos[idx][0]
  amplitud_b: datos[idx][1]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Mayor", "Menor"]

enunciado: "Si comparamos dos ondas sonoras, una con amplitud {amplitud_a} y otra con amplitud {amplitud_b}, la que tiene mayor amplitud tendrá una intensidad sonora ___."

explicacion: |
  La intensidad sonora depende del cuadrado de la amplitud de la onda. A mayor amplitud, mayor intensidad (volumen).
```

### 9 — Cálculo de periodo

```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades"
  nivel: "intermedio"
  tags: ["frecuencia", "periodo"]

variables:
  f_onda: 500

respuesta: 0.002
tipo: completar
tolerancia_abs: 0.0001

enunciado: "El periodo (T) es el inverso de la frecuencia (f), es decir, T = 1/f. Si una onda sonora tiene una frecuencia de {f_onda} Hz, ¿cuál es su periodo en segundos?"

pasos:
  - "Identificar la frecuencia: f = 500 Hz"
  - "Aplicar la fórmula: T = 1 / 500"
  - "Resultado: T = 0.002 s"

explicacion: |
  El periodo es el tiempo que tarda una onda en completar un ciclo completo. Al ser el inverso de la frecuencia, a mayor frecuencia, menor periodo.
```

### 10 — Identificación de cualidades

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

### 11 — Secuencia de producción del sonido

```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades"
  nivel: "basico"
  tags: ["proceso_sonido"]

respuesta_orden: ["Vibración de la fuente", "Propagación por el medio", "Recepción en el oído"]
tipo: ordenar
opciones_explicitas: ["Vibración de la fuente", "Propagación por el medio", "Recepción en el oído"]

enunciado: "Ordena cronológicamente los pasos necesarios para que un sonido sea percibido por un ser humano:"

explicacion: |
  Primero se genera la vibración, luego la onda viaja por el aire (medio) y finalmente llega al sistema auditivo.
```

### 12 — La relación entre amplitud e intensidad

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

### 13 — Confusión entre tono y volumen

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

### 14 — El timbre y la forma de la onda

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

### 15 — ¿Es la intensidad una magnitud escalar o vectorial?

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

### 16 — Relación entre frecuencia y periodo

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
tipo: completar
tolerancia_abs: 0.001

explicacion: |
  El periodo (T) es el inverso de la frecuencia (f). Si la frecuencia es {f_valor} Hz, el tiempo que tarda una onda en completar un ciclo es 1/{f_valor} segundos.
```

### 17 — Diferencia entre tono e intensidad

```
metadata:
  materia: "fisica"
  tema: "propiedades_del_sonido"
  nivel: "basico"
  tags: ["sonido", "frecuencia", "amplitud"]

respuesta: "frecuencia"
tipo: "completar"
respuestas_validas:
  - "frecuencia"

enunciado: "La altura de un sonido depende de la ___ del onda sonora, mientras que la intensidad depende de su amplitud."

explicacion: |
  La altura (tono) está determinada por la frecuencia (número de vibraciones por segundo), mientras que la intensidad (volumen) está relacionada con la amplitud de la onda.
```

### 18 — El timbre y la forma de la onda

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

### 19 — Relación amplitud e intensidad

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

### 20 — Orden de las cualidades del sonido

```
metadata:
  materia: "fisica"
  tema: "propiedades_del_sonido"
  nivel: "basico"
  tags: ["orden", "conceptos"]

opciones_explicitas: ["Frecuencia", "Amplitud", "Forma de onda"]
respuesta_orden: ["Frecuencia", "Amplitud", "Forma de onda"]
tipo: ordenar

enunciado: "Ordena las propiedades del sonido de acuerdo a la característica física que las determina: 1. Altura, 2. Intensidad, 3. Timbre."

explicacion: |
  La altura se asocia a la frecuencia, la intensidad a la amplitud y el timbre a la forma de la onda (armónicos).
```

### 21 — Comparación de frecuencias

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

### 22 — El tono de una nota musical

```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades"
  nivel: "basico"
  tags: ["frecuencia", "tono", "sonido"]

variables:
  escenarios: [["La nota La central (A4) tiene una frecuencia de 440 Hz.", 440], ["La nota La una octava arriba tiene una frecuencia de 880 Hz.", 880], ["La nota La una octava abajo tiene una frecuencia de 220 Hz.", 220]]
  idx: uno_de([0, 1, 2])
  frecuencia_actual: escenarios[idx][1]
  respuesta_correcta: escenarios[idx][1]

tipo: completar
tolerancia_abs: 0.1
enunciado: "Si escuchamos una nota musical cuya frecuencia es de {frecuencia_actual} Hz, ¿cuál es su valor numérico en Hz?"
respuesta: respuesta_correcta

explicacion: |
  La altura o tono de un sonido depende directamente de su frecuencia (medida en Hz). A mayor frecuencia, mayor es el tono percibido.
```

### 23 — Intensidad y Amplitud

```
metadata:
  materia: "fisica"
  tema: "sonido_propuestas"
  nivel: "intermedio"
  tags: ["intensidad", "amplitud", "volumen"]

variables:
  casos: [["un sonido suave", "baja"], ["un sonido fuerte", "alta"]]
  idx: uno_de([0, 1])
  tipo_sonido: casos[idx][0]
  amplitud_relativa: casos[idx][1]

tipo: mc
opciones_explicitas: ["baja", "alta", "nula", "infinita"]
respuesta: amplitud_relativa
enunciado: "Si escuchamos {tipo_sonido}, la amplitud de la onda sonora es de carácter ________."

explicacion: |
  La intensidad sonora (perceptualmente volumen) está relacionada con la amplitud de la onda. Una mayor amplitud implica un sonido más fuerte.
```

### 24 — Identificación del Timbre

```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades"
  nivel: "basico"
  tags: ["timbre", "forma_onda", "armonicos"]

tipo: vf
enunciado: "El timbre es la cualidad que nos permite distinguir dos sonidos de igual frecuencia e intensidad, pero emitidos por fuentes distintas (por ejemplo, un piano y una flauta)."

respuesta: verdadero

explicacion: |
  El timbre depende de la forma de la onda, la cual es determinada por la combinación de la frecuencia fundamental y los armónicos presentes.
```

### 25 — Relación de propiedades

```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades"
  nivel: "intermedio"
  tags: ["frecuencia", "amplitud", "intensidad"]

variables:
  relaciones: [["frecuencia", "tono"], ["amplitud", "intensidad"], ["forma_onda", "timbre"]]
  idx: uno_de([0, 1, 2])
  propiedad: relaciones[idx][0]
  caracteristica: relaciones[idx][1]

tipo: completar
respuestas_validas:
  - "tono"
  - "intensidad"
  - "timbre"
enunciado: "Si modificamos la {propiedad}, estamos alterando la característica auditiva conocida como ________."

explicacion: |
  Cada propiedad física de la onda sonora se traduce en una percepción auditiva distinta: frecuencia -> tono; amplitud -> intensidad; forma de onda -> timbre.
```

### 26 — Orden de percepción sonora

```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades"
  nivel: "avanzado"
  tags: ["frecuencia", "amplitud", "forma_onda"]

tipo: ordenar
opciones_explicitas: ["Frecuencia", "Amplitud", "Forma de la onda"]
respuesta_orden: ["Frecuencia", "Amplitud", "Forma de la onda"]
enunciado: "Ordene las propiedades físicas de una onda sonora según su correspondencia con la percepción humana (Tono, Intensidad, Timbre):"

explicacion: |
  1. Frecuencia -> Tono (Altura).
  2. Amplitud -> Intensidad (Volumen).
  3. Forma de la onda -> Timbre.
```
