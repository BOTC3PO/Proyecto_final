### 1 — Concepto de sufragio universal
```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "basico"
  tags: ["derechos", "voto"]

respuesta: "universal"
tipo: completar
respuestas_validas: ["universal", "universalidad"]

enunciado: "Cuando se establece que todos los ciudadanos adultos tienen derecho al voto sin distinción de raza, género o nivel socioeconómico, se está aplicando el sufragio _______."

explicacion: |
  El sufragio universal garantiza que el derecho al voto sea un derecho humano fundamental que no depende de condiciones materiales o características personales.
```

### 2 — Restricciones del sufragio
```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "basico"
  tags: ["derechos", "voto"]

opciones_explicitas: ["Género", "Propiedad", "Nivel educativo", "Todas las anteriores"]
respuesta: "Todas las anteriores"
tipo: mc

enunciado: "En un sistema de sufragio universal, ¿cuál de estas características NO debe ser una restricción para votar?"

explicacion: |
  El sufragio universal elimina las barreras históricas como el género, la propiedad de tierras o el nivel de instrucción para asegurar la participación de toda la población adulta.
```

### 3 — Comparación de sistemas
```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "intermedio"
  tags: ["comparativa", "voto"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["En un modelo donde solo votan quienes poseen propiedades...", "restringido"],
    ["En un modelo donde votan todos los ciudadanos adultos...", "universal"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["restringido", "universal"]

enunciado: "Analiza el siguiente caso: {escenarios[escenario_idx][0]} ¿Qué tipo de sufragio se está aplicando?"

explicacion: |
  Si existen condiciones (como la propiedad) para ejercer el voto, el sufragio es restringido. Si no hay tales condiciones, es universal.
```

### 4 — Evolución histórica
```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "intermedio"
  tags: ["historia", "derechos"]

respuesta: "democracia"
tipo: completar
respuestas_validas: ["democracia"]

enunciado: "La transición del sufragio restringido al sufragio universal es un paso fundamental para la consolidación de una _______ plena."

explicacion: |
  La democracia moderna requiere que la soberanía popular se ejerza mediante el voto de toda la ciudadanía, no solo de una élite.
```

### 5 — Identificación de premisas
```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "avanzado"
  tags: ["logica", "derechos"]

respuesta: "falso"
tipo: vf

enunciado: "El sufragio universal implica que el derecho al voto puede ser limitado por el nivel de instrucción o alfabetismo del ciudadano."

explicacion: |
  Falso. El sufragio universal, por definición, prohíbe cualquier distinción basada en capacidades intelectuales, nivel educativo o cualquier otra condición no legal/administrativa básica.
```