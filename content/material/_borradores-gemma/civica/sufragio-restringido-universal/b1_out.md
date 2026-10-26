### 1 — El sufragio censitario
```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "basico"
  tags: ["historia", "derechos"]

respuesta: "varones"
tipo: "mc"
opciones_explicitas: ["varones", "mujeres", "todos los ciudadanos", "propietarios únicamente"]

enunciado: "En la etapa del sufragio restringido en Argentina, el derecho al voto estaba limitado únicamente a los ___."

explicacion: |
  Durante gran parte del siglo XIX y principios del XX, el sufragio era censitario, lo que significa que solo podían votar varones que cumplieran con ciertos requisitos de propiedad o renta.
```

### 2 — El sistema de elusión de la voluntad
```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "intermedio"
  tags: ["fraude", "historia"]

variables:
  escenario: uno_de([
    ["el fraude mediante la falsificación de actas", "el control de la población por parte de los caudillos"],
    ["la manipulación de los padrones", "el uso de la fuerza física en los centros de votación"],
    ["la compra de votos", "la coacción de los votantes analfabetos"]
  ])

respuesta: escenario[1]
tipo: "mc"
opciones_explicitas: ["el fraude mediante la falsificación de actas", "la manipulación de los padrones", "la compra de votos"]

enunciado: "Antes de la Ley Sáenz Peña, el sistema electoral argentino se caracterizaba por la existencia de ___."

explicacion: |
  El sistema de fraude electoral era una práctica común donde el poder de turno manipulaba los resultados para asegurar la continuidad, impidiendo que la voluntad popular se expresara.
```

### 3 — La Ley Sáenz Peña
```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "intermedio"
  tags: ["leyes", "democracia"]

respuesta: "1912"
tipo: "completar"
respuestas_validas: ["1912"]

enunciado: "La Ley de Sufragio Universal, Masculino, Secreto y Obligatorio en Argentina fue sancionada en el año ___."

explicacion: |
  La Ley 8.830, sancionada en 1912, fue el hito que permitió el paso del fraude al voto secreto, sentando las bases de la democracia moderna en el país.
```

### 4 — Evolución del concepto de votante
```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "avanzado"
  tags: ["derechos_mujeres", "evolución"]

respuesta: "universal"
tipo: "mc"
opciones_explicitas: ["restringido", "universal", "censitario", "indirecto"]

enunciado: "Cuando se eliminaron las restricciones de género y propiedad, el sufragio pasó de ser restringido a ser ___."

explicacion: |
  El sufragio universal implica que todos los ciudadanos adultos tienen el derecho de votar, sin distinción de sexo, riqueza o nivel de instrucción.
```

### 5 — El camino a la democracia
```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "intermedio"
  tags: ["secuencia", "historia"]

respuesta: ["voto censitario", "Ley Sáenz Peña", "voto femenino"]
tipo: "ordenar"
opciones_explicitas: ["voto censitario", "Ley Sáenz Peña", "voto femenino"]

enunciado: "Ordene cronológicamente los hitos del sistema electoral argentino:"

explicacion: |
  Primero existía el voto restringido (censitario), luego se instauró el voto universal masculino con la Ley Sáenz Peña (1912) y finalmente se consolidó la universalidad con la sanción de la Ley de Voto Femenino (1947/1951).
```