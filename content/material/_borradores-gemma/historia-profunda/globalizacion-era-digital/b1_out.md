### 1 — El concepto de globalización
```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "basico"
  tags: ["definicion", "interconexion"]

respuesta: "interconexión"
tipo: completar
respuestas_validas: ["interconexión", "interconexion"]

enunciado: "La globalización se define como el proceso de creciente ___ económica, cultural y tecnológica entre los países del mundo."

explicacion: |
  La globalización implica una integración de mercados y sociedades a escala mundial.
```

### 2 — Impacto de la revolución tecnológica
```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["tecnologia", "comunicacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["la llegada de Internet", "la digitalización de la información"],
    ["el desarrollo de la telefonía móvil", "la inmediatez de la comunicación"]
  ]
  respuestas_correctas: [
    ["la llegada de Internet", "la digitalización de la información"],
    ["el desarrollo de la telefonía móvil", "la inmediatez de la comunicación"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["la llegada de Internet", "la digitalización de la información", "el desarrollo de la telefonía móvil", "la inmediatez de la comunicación"]

enunciado: "En el contexto de la era digital, {escenarios[escenario_idx][0]} fue un factor clave que impulsó {escenarios[escenario_idx][1]}."

explicacion: |
  La tecnología ha sido el motor que ha permitido que la interconexión sea instantánea y global.
```

### 3 — Dinámicas del comercio global
```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["economia", "comercio"]

respuesta: "transnacionales"
tipo: mc
opciones_explicitas: ["nacionales", "transnacionales", "locales", "estatales"]

enunciado: "La globalización económica ha permitido el auge de las empresas ________, que operan en múltiples países simultáneamente."

explicacion: |
  Las empresas transnacionales son actores centrales en la economía globalizada.
```

### 4 — Secuencia de la era digital
```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "avanzado"
  tags: ["cronologia", "tecnologia"]

respuesta: ["Internet", "Comercio electrónico", "Redes sociales", "Internet de las cosas"]
tipo: ordenar
opciones_explicitas: ["Internet", "Comercio electrónico", "Redes sociales", "Internet de las cosas"]

enunciado: "Ordene cronológicamente estos hitos tecnológicos que han profundizado la globalización:"

explicacion: |
  La secuencia muestra cómo la infraestructura (Internet) permitió el comercio, luego la interacción social masiva y finalmente la hiperconectividad de objetos.
```

### 5 — Desafíos de la globalización
```
metadata:
  materia: "historia_profucha"
  tema: "globalizacion_era_digital"
  nivel: "avanzado"
  tags: ["desigualdad", "brecha_digital"]

variables:
  es_positivo: uno_de([true, falso])
  caso: [
    ["la reducción de la brecha digital", "la homogeneización cultural"],
    ["la homogeneización cultural", "la reducción de la brecha digital"]
  ]
  respuesta_correcta: ["la homogeneización cultural", "la reducción de la brecha digital"]

respuesta: caso[es_positivo][0]
tipo: mc
opciones_explicitas: ["la homogeneización cultural", "la reducción de la brecha digital"]

enunciado: "Si se analiza la globalización desde una perspectiva crítica, un efecto cultural negativo común es {caso[0]}."

explicacion: |
  La homogeneización cultural se refiere a la pérdida de identidades locales frente a una cultura global dominante.
```