### 1 — El impacto demográfico
```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "intermedio"
  tags: ["demografia", "inmigracion"]

variables:
  escenario: uno_de(["el flujo masivo de inmigrantes europeos", "la llegada de colonias agrícolas"])

respuesta: "el flujo masivo de inmigrantes europeos"
tipo: mc
opciones_explicitas: ["el flujo masivo de inmigrantes europeos", "la llegada de colonias agrícolas", "el crecimiento de la población nativa", "la migración interna desde el interior"]

enunciado: "Durante el modelo agroexportador, la principal causa de la transformación demográfica en el litoral argentino fue {escenario}."

explicacion: |
  La gran escala de la inmigración europea (principalmente italianos y españoles) alteró radicalmente la proporción de población extranjera en las zonas portuarias y de exportación.
```

### 2 — El crisol de razas y el lenguaje
```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "basico"
  tags: ["cultura", "lenguaje"]

respuesta: "lunfardo"
tipo: completar
respuestas_validas: ["lunfardo"]

enunciado: "La convivencia de diversas lenguas y modismos de los inmigrantes en los conventillos de Buenos Aires dio origen a un léxico popular conocido como ___."

explicacion: |
  El lunfardo surgió como una mezcla de términos de varios idiomas (italiano, español, francés, etc.) que los inmigrantes utilizaban en el ámbito urbano.
```

### 3 — Centros de asentamiento
```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "intermedio"
  tags: ["urbanismo", "geografia"]

respuesta: ["Buenos Aires", "Rosario", "Santa Fe"]
tipo: ordenar
opciones_explicitas: ["Buenos Aires", "Rosario", "Santa Fe"]

enunciado: "Ordene de mayor a menor importancia en términos de volumen de asentamiento inmigrante y actividad portuaria durante el auge agroexportador:"

explicacion: |
  El eje Buenos Aires-Rosario-Santa Fe concentró la mayor densidad demográfica debido a su conexión directa con el comercio mundial de granos y carnes.
```

### 4 — Transformación de la estructura social
```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "avanzado"
  tags: ["clases_sociales", "urbanismo"]

variables:
  perfil: uno_de(["la clase media urbana", "la oligarquía terrateniente"])

respuesta: "la clase media urbana"
tipo: mc
opciones_explicitas: ["la clase media urbana", "la oligarquía terrateniente", "el campesinado indígena", "la aristocracia colonial"]

enunciado: "A diferencia de la estructura de la oligarquía, la inmigración masiva favoreció el surgimiento de {perfil} en los centros urbanos."

explicacion: |
  La llegada de inmigrantes con oficios diversos permitió la consolidación de una clase media compuesta por pequeños comerciantes, empleados y profesionales.
```

### 5 — El fenómeno del conventillo
```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "basico"
  tags: ["vivienda", "cultura"]

respuesta: 100
tipo: input
tolerancia_abs: 0

enunciado: "En el contexto de la inmigración, si un conventillo tiene 4 habitaciones y cada una alberga a 25 personas, ¿cuántas personas viven en total en el conventillo?"

pasos:
  - "Multiplicar el número de habitaciones por la cantidad de personas por habitación."

explicacion: |
  Los conventillos eran viviendas colectivas con alta densidad poblacional, típicas de los barrios de inmigrantes en Buenos Aires.
```