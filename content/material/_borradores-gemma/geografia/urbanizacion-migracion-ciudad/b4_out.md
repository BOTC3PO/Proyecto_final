### 1 — El gran cambio demográfico
```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "basico"
  tags: ["demografia", "urbanizacion"]

respuesta: "urbana"
tipo: input
tolerancia_abs: 0

enunciado: "Históricamente, la mayor parte de la población mundial vivía en entornos de carácter _____, pero en la actualidad la tendencia se ha invertido."

explicacion: |
  La transición de una sociedad mayoritariamente rural a una urbana es uno de los procesos demográficos más significativos de la historia moderna.
```

### 2 — Distribución de la población
```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "basico"
  tags: ["poblacion", "ciudades"]

variables:
  idx: uno_de([0, 1])
  datos: [[55, "más de la mitad"], [50, "exactamente la mitad"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["menos de la mitad", "exactamente la mitad", "más de la mitad", "casi la totalidad"]

enunciado: "En la actualidad, la población mundial es, aproximadamente, {datos[idx][1]} urbana."

explicacion: |
  Hoy en día, la tendencia global muestra que la población urbana ha superado el umbral del 50% de la población total del planeta.
```

### 3 — Procesos de urbanización
```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "intermedio"
  tags: ["migracion", "causas"]

respuesta: ["Migración rural", "Industrialización", "Crecimiento natural urbano"]
tipo: ordenar

opciones_explicitas: ["Migración rural", "Industrialización", "Crecimiento natural urbano"]

enunciado: "Ordene cronológicamente los factores que impulsaron el crecimiento de las ciudades en la era moderna:"

explicacion: |
  El proceso comenzó con la migración del campo a la ciudad por la industrialización, seguido por el crecimiento demográfico dentro de las propias ciudades.
```

### 4 — El perfil de la ciudad moderna
```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "intermedio"
  tags: ["densidad", "urbanismo"]

respuesta: "densidad"
tipo: completar
respuestas_validas: ["densidad", "extensión", "clima"]

enunciado: "El fenómeno de la urbanización implica una mayor ___ de población en áreas delimitadas en comparación con las zonas rurales."

explicacion: |
  La concentración de personas en núcleos urbanos genera un aumento en la densidad poblacional, lo que requiere infraestructuras más complejas.
```

### 5 — Tendencias de crecimiento
```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "avanzado"
  tags: ["proyecciones", "globalizacion"]

variables:
  idx: uno_de([0, 1])
  escenarios: [[true, "aumentará"], [false, "disminuirá"]]

respuesta: escenarios[idx][0]
tipo: mc
opciones_explicitas: ["aumentará", "disminuirá", "se mantendrá igual", "desaparecerá"]

enunciado: "Según las proyecciones de la ONU, la proporción de la población mundial que vive en ciudades {escenarios[idx][0]} en las próximas décadas."

explicacion: |
  Se espera que el proceso de urbanización continúe, especialmente en países en vías de desarrollo, llevando la cifra urbana aún más arriba del 60% o 70%.
```