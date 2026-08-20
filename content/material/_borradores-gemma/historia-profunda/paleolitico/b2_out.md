### 1 — El impacto del fuego
```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "basico"
  tags: ["fuego", "evolucion", "supervivencia"]

respuesta: "cocinar"
tipo: completar
respuestas_validas: ["cocinar", "la cocción"]

enunciado: "El control del fuego permitió a los homínidos ___ los alimentos, lo que facilitó la digestión y aumentó la ingesta calórica."

explicacion: |
  La cocción de alimentos permitió que la energía fuera más fácil de absorber, favoreciendo el desarrollo cerebral.
```

### 2 — Funciones del fuego
```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "basico"
  tags: ["fuego", "supervivencia"]

opciones_explicitas: ["Ahuyentar depredadores", "Fabricar herramientas de piedra", "Navegación marítima"]
respuesta: "Ahuyentar depredadores"
tipo: mc

enunciado: "Además de calentar y cocinar, una función vital del fuego para la seguridad de los grupos de homínidos era:"

explicacion: |
  El fuego actuaba como una barrera protectora contra los grandes depredadores durante la noche.
```

### 3 — Beneficios del fuego
```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "intermedio"
  tags: ["fuego", "adaptacion"]

variables:
  beneficio_idx: uno_de([0, 1, 2])
  escenario: [
    ["iluminar", "permitió extender las horas de actividad social y exploración en cuevas"],
    ["calentar", "permitió la migración hacia climas más fríos"],
    ["cocinar", "permitió el desarrollo de mandíbulas más pequeñas y cerebros más grandes"]
  ]

respuesta: escenario[beneficio_idx][1]
tipo: mc
opciones_explicitas: ["iluminar", "calentar", "cocinar"]

enunciado: "Si el control del fuego sirvió para {escenario[beneficio_idx][0]}, esto significó que: ___"

explicacion: |
  {escenario[beneficio_idx][1]}
```

### 4 — El fuego y la vida social
```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "intermedio"
  tags: ["fuego", "social", "comunicacion"]

respuesta: "social"
tipo: completar
respuestas_validas: ["social", "comunitaria"]

enunciado: "El uso del fuego alrededor de la hoguera fomentó la cohesión ___ de los grupos de homínidos."

explicacion: |
  La hoguera se convirtió en el centro de la comunicación y el intercambio de información.
```

### 5 — Secuencia de ventajas
```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "avanzado"
  tags: ["fuego", "causa_efecto"]

opciones_explicitas: ["Fuego", "Cocción", "Mejor nutrición", "Cerebro más grande"]
respuesta: ["Fuego", "Cocción", "Mejor nutrición", "Cerebro más grande"]
tipo: ordenar

enunciado: "Ordena la secuencia lógica de causa y efecto iniciada por el control del fuego:"

explicacion: |
  El control del fuego permitió la cocción, lo que mejoró la nutrición y, a largo plazo, el desarrollo cerebral.
```