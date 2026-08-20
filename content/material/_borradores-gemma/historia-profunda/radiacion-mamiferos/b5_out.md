### 1 — El vacío ecológico
```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["extincion", "nichos", "evolucion"]

variables:
  escenario: uno_de([["La extinción masiva del Cretácico-Paleógeno eliminó a los grandes reptiles...", "liberó nichos ecológicos"], ["La desaparición de los dinosaurios no avianos...", "permitió la diversificación de los mamíferos"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["liberó nichos ecológicos", "permitió la diversificación de los mamíferos", "causó la extinción de insectos", "no tuvo impacto"]

enunciado: "Según el escenario planteado: {escenario[idx][0]}"

explicacion: |
  La extinción de los dinosaurios eliminó a los principales depredadores y herbívoros dominantes, dejando nichos ecológicos vacíos que los mamíferos, anteriormente pequeños y nocturnos, pudieron ocupar rápidamente.
```

### 2 — El cambio de tamaño corporal
```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["morfologia", "evolucion"]

variables:
  caso: uno_de([["Antes de la extinción, la mayoría de los mamíferos eran...", "pequeños"], ["Tras la radiación, los mamíferos pudieron alcanzar...", "grandes tamaños"]])
  idx: uno_de([0, 1])

respuesta: caso[idx][1]
tipo: mc
opciones_explicitas: ["pequeños", "grandes tamaños", "tamaño medio", "tamaño insectívoro"]

enunciado: "Considerando el proceso evolutivo: {caso[idx][0]}"

explicacion: |
  La ausencia de competencia con grandes reptiles permitió que los mamíferos experimentaran una rápida diversificación morfológica, incluyendo un aumento significativo en el tamaño corporal promedio.
```

### 3 — Causas de la radiación
```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "basico"
  tags: ["causa_efecto"]

variables:
  relacion: uno_de([["La extinción de los dinosaurios fue la ___ de la radiación de los mamíferos.", "causa"], ["La radiación de los mamíferos fue la ___ de la extinción de los dinosaurios.", "consecuencia"]])
  idx: uno_de([0, 1])

respuesta: relacion[idx][0]
tipo: completar
respuestas_validas: ["causa", "consecuencia"]

enunciado: "Analizando la relación temporal: {relacion[idx][0]}"

explicacion: |
  La extinción de los dinosaurios actuó como el evento desencadenante (causa) que permitió la expansión de los mamíferos (consecuencia).
```

### 4 — Secuencia de eventos
```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "avanzado"
  tags: ["cronologia"]

variables:
  secuencia: ["Impacto del asteroide", "Extinción de dinosaurios", "Ocupación de nichos por mamíferos", "Diversificación de órdenes modernos"]

respuesta: secuencia
tipo: ordenar
opciones_explicitas: ["Impacto del asteroide", "Extinción de dinosaurios", "Ocupación de nichos por mamíferos", "Diversificación de órdenes modernos"]

enunciado: "Ordene cronológicamente los eventos que llevaron a la actual biodiversidad de mamíferos:"

explicacion: |
  El proceso comienza con el evento catastrófico, seguido de la extinción de los grupos dominantes, la colonización de los espacios vacíos y, finalmente, la especiación y diversificación.
```

### 5 — El factor de competencia
```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["competencia", "ecologia"]

variables:
  escenario_comp: uno_de([["Sin la presión de los dinosaurios, los mamíferos habrían sido...", "menos diversos"], ["La radiación ocurrió porque los mamíferos eran...", "menos diversos"]])
  idx: uno_de([0, 1])

respuesta: "menos diversos"
tipo: completar
respuestas_validas: ["menos diversos", "más grandes"]

enunciado: "En un escenario hipotético donde los dinosaurios no se hubieran extinguido: ___"

explicacion: |
  La competencia por recursos y la depredación por parte de los dinosaurios habrían limitado la diversificación y el tamaño de los mamíferos durante el Mesozoico.
```