### 1 — Concepto de desaparición
```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "basico"
  tags: ["dictadura", "derechos_humanos"]

tipo: mc
opciones_explicitas: ["El exilio voluntario", "La detención ilegal con destino desconocido", "La migración por motivos económicos", "La persecución política en el extranjero"]

enunciado: "Durante la última dictadura militar en Argentina, la práctica de 'desaparecer' personas se definía como:"

explicacion: |
  La desaparición forzada fue una práctica sistemática donde el Estado secuestraba a ciudadanos, los mantenía en centros clandestinos de detención y ocultaba su paradero, impidiendo cualquier tipo de proceso legal o reconocimiento de su detención.
```

### 2 — El rol de las Madres
```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "intermedio"
  tags: ["madres_de_plaza_de_mayo", "resistencia"]

tipo: completar
respuestas_validas: ["Plaza de Mayo"]

enunciado: "Ante la falta de información sobre el paradero de sus hijos, las Madres comenzaron a realizar sus históricas marchas en la _______."

explicacion: |
  Las Madres de Plaza de Mayo se convirtieron en un símbolo mundial de resistencia al exigir la aparición con vida de sus hijos frente a la Casa Rosada.
```

### 3 — El destino de los cuerpos
```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "avanzado"
  tags: ["vuelos_de_la_muerte", "exterminio"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["vuelos de la muerte", "vuelos de la muerte"],
    ["centros clandestinos", "centros clandestinos"]
  ]

tipo: mc
opciones_explicitas: ["Vuelos de la muerte", "Traslados legales", "Exilio forzado", "Centros clandestinos"]

enunciado: "Una de las formas sistemáticas de ocultar los asesinatos de los desaparecidos fue el uso de los {escenarios[escenario_idx][0]}."

explicacion: |
  Los 'vuelos de la muerte' consistían en transportar a los detenidos en aviones hacia el mar para arrojarlos al agua, evitando así dejar rastros físicos de los cuerpos.
```

### 4 — Secuencia de la represión
```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "intermedio"
  tags: ["procedimiento", "represion"]

tipo: ordenar
opciones_explicitas: ["Secuestro/Detención", "Traslado a un CCD", "Interrogatorio y tortura", "Eliminación/Desaparición"]

enunciado: "Ordene cronológicamente el procedimiento sistemático aplicado a los desaparecidos durante la represión:"

explicacion: |
  El ciclo comenzaba con el secuestro en la vía pública o domicilio, seguido del traslado a Centros Clandestinos de Detención (CCD), donde se aplicaba la tortura para obtener información, culminando en la eliminación del individuo para asegurar el secreto del crimen.
```

### 5 --- Identidad y robo de bebés
```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "avanzado"
  tags: ["identidad", "apropiación"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["la apropiación de menores", "la apropiación de menores"],
    ["el robo de identidad", "el robo de identidad"]
  ]

tipo: input
tolerancia_abs: 0

enunciado: "Además de la desaparición, el Estado implementó una política de {casos[caso_idx][0]} que afectó a los hijos de las detenidas."

respuesta: "la apropiación de menores"

explicacion: |
  Muchos hijos de desaparecidas fueron robados al nacer y entregados a familias vinculadas al poder militar, privándoles de su identidad biológica y familiar.
```