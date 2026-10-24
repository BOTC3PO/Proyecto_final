### 1 — Origen de las rocas ígneas
```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas"
  nivel: "basico"
  tags: ["geologia", "magma"]

tipo: mc
opciones_explicitas: ["Enfriamiento de magma o lava", "Acumulación de sedimentos", "Presión y temperatura extrema", "Evaporación de agua salada"]

enunciado: "Las rocas ígneas se originan principalmente por el proceso de ___."

explicacion: |
  Las rocas ígneas se forman cuando el material fundido (magma si es intrusivo o lava si es extrusivo) se enfría y se solidifica.
```

### 2 — Clasificación ígnea
```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas"
  nivel: "basico"
  tags: ["granito", "basalto"]

variables:
  escenario: uno_de([["granito", "intrusiva"], ["basalto", "extrusiva"]])

tipo: completar
respuestas_validas: ["intrusiva", "extrusiva"]

enunciado: "Si el magma se enfría lentamente bajo la superficie terrestre, forma una roca de tipo {escenario[0]} y su clasificación es ___."

explicacion: |
  El {escenario[0]} es una roca ígnea {escenario[1]} porque se formó en el interior de la corteza.
```

### 3 — Tipos de rocas ígneas
```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas"
  nivel: "intermedio"
  tags: ["clasificacion"]

tipo: mc
opciones_explicitas: ["Granito y Basalto", "Caliza y Arenisca", "Mármol y Pizarra", "Granito y Caliza"]

enunciado: "¿Cuál de los siguientes pares de rocas son ejemplos de rocas ígneas?"

explicacion: |
  El granito es una roca ígnea intrusiva y el basalto es una roca ígnea extrusiva.
```

### 4 — Proceso de solidificación
```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas"
  nivel: "basico"
  tags: ["magma", "lava"]

tipo: mc
opciones_explicitas: ["Magma", "Lava", "Sedimento", "Cristal"]

enunciado: "Cuando el material fundido sale a la superficie terrestre, se denomina ___."

explicacion: |
  El término magma se usa para el material fundido bajo la superficie, mientras que lava es el término para el material que ya ha emergido.
```

### 5 — Diferencia de enfriamiento
```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas"
  nivel: "avanzado"
  tags: ["textura", "enfriamiento"]

variables:
  caso: uno_de([["lento", "cristales grandes"], ["rápido", "cristales pequeños"]])

tipo: completar
respuestas_validas: ["cristales grandes", "cristales pequeños"]

enunciado: "Un enfriamiento de tipo {caso[0]} en el interior de la corteza produce rocas con ___."

explicacion: |
  El enfriamiento {caso[0]} permite que los minerales tengan tiempo de crecer, resultando en {caso[1]}.
```