### 1 — Fronteras artificiales y conflictos
```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "intermedio"
  tags: ["geopolitica", "africa", "fronteras"]

variables:
  caso: uno_de([
    ["la Conferencia de Berlín", "la división de África"],
    ["el Reino Unido", "el control británico"],
    ["fronteras artificiales", "líneas trazadas"]
  ])

enunciado: "Durante el siglo XIX, la delimitación de {caso[0]} ignoró las realidades étnicas locales, lo que ha generado tensiones geopolíticas que persisten en la actualidad."

respuesta: "la división de África"
tipo: completar
respuestas_validas: ["la división de África"]

explicacion: |
  La Conferencia de Berlín (1884-1885) repartió el continente africano entre potencias europeas mediante líneas rectas que no respetaban la distribución de grupos étnicos o lingüísticos, provocando conflictos internos constantes en la era post-colonial.
```

### 2 — Desigualdad económica global
```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "intermedio"
  tags: ["economia", "teoria_dependencia", "recursos"]

opciones_explicitas: ["Modelo de extracción", "Modelo de integración", "Modelo de autarquía", "Modelo de libre comercio"]

enunciado: "El imperialismo consolidó un modelo económico basado en la extracción de materias primas de las colonias para abastecer a las metrópolis. Este sistema, que aún influye en la estructura de muchas economías periféricas, se conoce como:"

respuesta: "Modelo de extracción"
tipo: mc

explicacion: |
  La estructura económica colonial fue diseñada para la exportación de recursos naturales, lo que impidió el desarrollo de industrias locales en las colonias y perpetuó la dependencia económica de las antiguas metrópolis.
```

### 3 — Tensiones étnicas heredadas
```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "avanzado"
  tags: ["etnia", "conflictos", "herencia_colonial"]

variables:
  escenario: uno_de([
    ["el uso de la política de 'divide y vencerás'", "tácticas de división"],
    ["la creación de élites privilegiadas", "el favoritismo étnico"],
    ["la imposición de lenguas coloniales", "la barrera lingüística"]
  ])

enunciado: "Una de las consecuencias sociales más persistentes es el legado de {escenario[0]}, donde las potencias coloniales utilizaban {escenario[1]} para mantener el control, exacerbando las divisiones entre grupos que hoy derivan en conflictos civiles."

respuesta: "tácticas de división"
tipo: completar
respuestas_validas: ["tácticas de división"]

explicacion: |
  Al favorecer a un grupo étnico sobre otro para facilitar el control administrativo, las potencias coloniales crearon resentimientos profundos que han estallado en guerras civiles tras la independencia.
```

### 4 — Secuencia de la descolonización
```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "intermedio"
  tags: ["procesos", "descolonizacion", "orden"]

opciones_explicitas: ["Consolidación del control colonial", "Movimientos de liberación nacional", "Independencia política y crisis de fronteras"]

enunciado: "Ordena cronológicamente los procesos que explican la situación actual de muchas naciones post-coloniales:"

respuesta: ["Consolidación del control colonial", "Movimientos de liberación nacional", "Independencia política y crisis de fronteras"]
tipo: ordenar

explicacion: |
  El proceso comenzó con la explotación sistemática (control colonial), seguido por la resistencia organizada (movimientos de liberación) y culminó en independencias que, al no redefinir las fronteras, dejaron problemas estructurales vigentes.
```

### 5 — El impacto en la soberanía
```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "basico"
  tags: ["soberania", "politica"]

enunciado: "¿Cuál de los siguientes es un efecto directo de la delimitación arbitraria de fronteras en la soberanía de los estados modernos?"

opciones_explicitas: ["Conflictos por la delimitación territorial", "Aumento de la riqueza industrial", "Unificación cultural inmediata", "Estabilidad política garantizada"]

respuesta: "Conflictos por la delimitación territorial"
tipo: mc

explicacion: |
  Las fronteras que no coinciden con las realidades demográficas obligan a estados modernos a gestionar poblaciones que no se sienten representadas o que se encuentran divididas entre dos o más naciones.
```