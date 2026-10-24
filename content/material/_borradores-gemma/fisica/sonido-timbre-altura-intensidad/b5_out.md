### 1 — El tono de una nota musical
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

tipo: input
tolerancia_abs: 0.1
enunciado: "Si escuchamos una nota musical cuya frecuencia es de {frecuencia_actual} Hz, ¿cuál es su valor numérico en Hz?"

explicacion: |
  La altura o tono de un sonido depende directamente de su frecuencia (medida en Hz). A mayor frecuencia, mayor es el tono percibido.
```

### 2 — Intensidad y Amplitud
```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades"
  nivel: "intermedio"
  tags: ["intensidad", "amplitud", "volumen"]

variables:
  casos: [["un sonido suave", "baja"], ["un sonido fuerte", "alta"]]
  idx: uno_de([0, 1])
  tipo_sonido: casos[idx][0]
  amplitud_relativa: casos[idx][1]

tipo: mc
opciones_explicitas: ["baja", "alta", "nula", "infinita"]
enunciado: "Si escuchamos {tipo_sonido}, la amplitud de la onda sonora es de carácter ________."

explicacion: |
  La intensidad sonora (perceptualmente volumen) está relacionada con la amplitud de la onda. Una mayor amplitud implica un sonido más fuerte.
```

### 3 — Identificación del Timbre
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

### 4 — Relación de propiedades
```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades"
  nivel: "intermedio"
  tags: ["frecuencia", "amplitud", "intensidad"]

variables:
  relaciones: [
    ["frecuencia", "tono"],
    ["amplitud", "intensidad"],
    ["forma_onda", "timbre"]
  ]
  idx: uno_de([0, 1, 2])
  propiedad: relaciones[idx][0]
  caracteristica: relaciones[idx][1]

tipo: completar
respuestas_validas: ["tono", "intensidad", "timbre"]
enunciado: "Si modificamos la {propiedad}, estamos alterando la característica auditiva conocida como ________."

explicacion: |
  Cada propiedad física de la onda sonora se traduce en una percepción auditiva distinta: frecuencia -> tono; amplitud -> intensidad; forma de onda -> timbre.
```

### 5 — Orden de percepción sonora
```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades"
  nivel: "avanzado"
  tags: ["frecuencia", "amplitud", "forma_onda"]

tipo: ordenar
opciones_explicitas: ["Frecuencia", "Amplitud", "Forma de la onda"]
respuesta: ["Frecuencia", "Amplitud", "Forma de la onda"]
enunciado: "Ordene las propiedades físicas de una onda sonora según su correspondencia con la percepción humana (Tono, Intensidad, Timbre):"

explicacion: |
  1. Frecuencia -> Tono (Altura).
  2. Amplitud -> Intensidad (Volumen).
  3. Forma de la onda -> Timbre.
```