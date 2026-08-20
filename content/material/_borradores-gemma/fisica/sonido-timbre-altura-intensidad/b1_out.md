### 1 — Propiedades del sonido
```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades_basicas"
  nivel: "basico"
  tags: ["acustica", "conceptos"]

respuesta: "frecuencia"
tipo: completar
respuestas_validas: ["frecuencia"]

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
  es_grande: uno_de([true, false])

respuesta: es_grande
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
  frecuencias: [440, 880]

respuesta: caso_datos[caso][1]
tipo: mc
opciones_explicitas: ["agudo", "grave"]

enunciado: "Si un sonido tiene una frecuencia de {caso_datos[caso][0]} Hz, su altura es ___."

pasos:
  - "Identificar la frecuencia dada."
  - "Comparar con el concepto de altura (frecuencia alta = agudo, frecuencia baja = grave)."

explicacion: |
  En este caso, la frecuencia de {caso_datos[caso][0]} Hz se clasifica como {caso_datos[caso][1]} según la escala de altura.
```
*(Nota: Para la pregunta 4, el usuario debe tener acceso a la lógica de la variable `caso_datos` que es `[[440, "grave"], [880, "agudo"]]`. Como el DSL requiere que la respuesta sea el valor exacto de la opción, ajusto la lógica interna para que sea coherente con el ejemplo).*

**Corrección de la 4 para cumplir estrictamente con el DSL (sin variables complejas de tuplas en respuesta):**

### 4 — Relación altura y frecuencia
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

### 5 — Orden de las cualidades
```
metadata:
  materia: "fisica"
  tema: "sonido_orden_cualidades"
  nivel: "basico"
  tags: ["acustica", "orden"]

respuesta: ["tono", "timbre", "intensidad"]
tipo: ordenar
opciones_explicitas: ["tono", "timbre", "intensidad"]

enunciado: "Ordena las siguientes cualidades del sonido de acuerdo a la propiedad física que representan (de la que depende la altura, a la que depende el timbre, y finalmente la que depende la amplitud):"

explicacion: |
  1. Tono (Frecuencia)
  2. Timbre (Forma de onda/Armónicos)
  3. Intensidad (Amplitud)
```