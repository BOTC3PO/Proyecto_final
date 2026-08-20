# Investigacion — metodologia cualitativa vs cuantitativa (cuestionario, 20 preguntas VBLang)

> Tema: `investigacion/metodologia-cualitativa-vs-cuantitativa`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "basico"
  tags: ["cuantitativa", "definicion"]

variables:
  n: random(1, 100)

respuesta: "cuantitativa"
tipo: completar

enunciado: "La metodología que se centra en la medición numérica, el análisis estadístico y la búsqueda de patrones generales se denomina enfoque {n}."

explicacion: |
  La investigación cuantitativa se caracteriza por su enfoque numérico y estadístico para medir fenómenos y generalizar resultados.
```

### 2 — pregunta 2

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "basico"
  tags: ["cualitativa", "definicion"]

variables:
  n: random(1, 100)

respuesta: "cualitativa"
tipo: completar

enunciado: "El enfoque que busca comprender significados, experiencias y contextos profundos desde la perspectiva de los participantes es la metodología {n}."

explicacion: |
  La investigación cualitativa se enfoca en la comprensión profunda de los fenómenos sociales desde la perspectiva de los sujetos, sin depender exclusivamente de números.
```

### 3 — pregunta 3

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "intermedio"
  tags: ["deductivo", "cuantitativa"]

variables:
  caso: uno_de(["A", "B", "C"])

respuesta: "cuantitativa"
tipo: completar

enunciado: "En el caso {caso}, si la investigación parte de una teoría previa para formular hipótesis verificables, se está utilizando razonamiento {caso}."

explicacion: |
  La metodología cuantitativa utiliza un razonamiento deductivo: de lo general (teoría) a lo particular (datos).
```

### 4 — pregunta 4

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "intermedio"
  tags: ["inductivo", "cualitativa"]

variables:
  caso: uno_de(["X", "Y", "Z"])

respuesta: "cualitativa"
tipo: completar

enunciado: "En el caso {caso}, si los conceptos y teorías emergen de los datos recolectados en el campo, se está utilizando razonamiento {caso}."

explicacion: |
  La metodología cualitativa utiliza un razonamiento inductivo: de lo particular (datos) a lo general (teoría emergente).
```

### 5 — pregunta 5

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "basico"
  tags: ["generalizacion", "objetivos"]

variables:
  id: random(1, 50)

respuesta: "cuantitativa"
tipo: completar

enunciado: "Si el objetivo principal es generalizar los resultados a una población más amplia, se trata de investigación {id}."

explicacion: |
  La cuantitativa busca la generalización mediante muestras representativas y análisis estadístico.
```

### 6 — pregunta 6

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "basico"
  tags: ["profundidad", "objetivos"]

variables:
  id: random(1, 50)

respuesta: "cualitativa"
tipo: completar

enunciado: "Si el objetivo es profundizar en un caso específico sin buscar generalizar a toda la población, se trata de investigación {id}."

explicacion: |
  La cualitativa prioriza la comprensión detallada del contexto y la experiencia particular.
```

### 7 — pregunta 7

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "intermedio"
  tags: ["rol", "objetividad"]

variables:
  rol: random(1, 10)

respuesta: "cuantitativa"
tipo: completar

enunciado: "Un rol de investigador más objetivo y distante, recolectando datos estructurados, corresponde a la metodología {rol}."

explicacion: |
  En la cuantitativa, el investigador busca mantener la distancia para evitar sesgos y mantener la objetividad.
```

### 8 — pregunta 8

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "intermedio"
  tags: ["rol", "interpretacion"]

variables:
  rol: random(1, 10)

respuesta: "cualitativa"
tipo: completar

enunciado: "Un rol de investigador más cercano e interpretativo, utilizando técnicas como la observación participante, corresponde a la metodología {rol}."

explicacion: |
  En la cualitativa, el investigador es parte del proceso de recolección de datos, generando una comprensión rica y detallada.
```

### 9 — pregunta 9

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "intermedio"
  tags: ["analisis", "estadistica"]

variables:
  metodo: random(1, 20)

respuesta: "cuantitativa"
tipo: completar

enunciado: "El uso de fórmulas matemáticas y estadísticas para calcular promedios o correlaciones es característico de la metodología {metodo}."

explicacion: |
  La cuantitativa depende del análisis estadístico para validar hipótesis y encontrar patrones.
```

### 10 — pregunta 10

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "avanzado"
  tags: ["replicabilidad", "objetividad"]

variables:
  caso: random(1, 15)

respuesta: "cuantitativa"
tipo: completar

enunciado: "La búsqueda de la replicabilidad del estudio mediante métodos estandarizados es un pilar de la metodología {caso}."

explicacion: |
  La cuantitativa busca que otros investigadores puedan repetir el estudio y obtener resultados similares.
```

### 11 — pregunta 11

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "intermedio"
  tags: ["hipotesis", "cuantitativa"]

variables:
  n: random(1, 100)

respuesta: "cuantitativa"
tipo: completar

enunciado: "Probar hipótesis establecidas previamente es el objetivo central de la investigación {n}."

explicacion: |
  La cuantitativa parte de hipótesis deductivas que se verifican con datos empíricos.
```

### 12 — pregunta 12

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "intermedio"
  tags: ["teoria", "emergente"]

variables:
  n: random(1, 100)

respuesta: "cualitativa"
tipo: completar

enunciado: "La generación de teorías que emergen de los datos recolectados es propia de la investigación {n}."

explicacion: |
  La cualitativa permite que las categorías y teorías surjan inductivamente de la interacción con el campo.
```

### 13 — pregunta 13

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "intermedio"
  tags: ["causalidad", "cuantitativa"]

variables:
  id: random(1, 50)

respuesta: "cuantitativa"
tipo: completar

enunciado: "Encontrar relaciones de causa y efecto que puedan generalizarse es un objetivo típico de la metodología {id}."

explicacion: |
  La cuantitativa busca explicar fenómenos mediante relaciones causales medibles.
```

### 14 — pregunta 14

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "intermedio"
  tags: ["subjetividad", "cualitativa"]

variables:
  id: random(1, 50)

respuesta: "cualitativa"
tipo: completar

enunciado: "Explorar significados y experiencias subjetivas desde la perspectiva de los participantes es el foco de la metodología {id}."

explicacion: |
  La cualitativa valora la experiencia vivida y la interpretación personal.
```

### 15 — pregunta 15

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "intermedio"
  tags: ["seleccion", "mc"]

variables:
  objetivo: uno_de(["medir patrones", "comprender significados"])

respuesta: "cuantitativa"
tipo: mc
opciones_explicitas: ["cuantitativa", "cualitativa", "experimental", "descriptiva"]

enunciado: "Si el objetivo es medir patrones generales y probar hipótesis, ¿qué metodología se utiliza?"

explicacion: |
  La cuantitativa se enfoca en la medición y la prueba de hipótesis mediante datos numéricos.
```

### 16 — pregunta 16

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "intermedio"
  tags: ["seleccion", "mc"]

variables:
  objetivo: uno_de(["profundizar en el caso", "generalizar resultados"])

respuesta: "cualitativa"
tipo: mc
opciones_explicitas: ["cuantitativa", "cualitativa", "mixta", "longitudinal"]

enunciado: "Si el objetivo es profundizar en un caso específico desde la perspectiva de los participantes, ¿qué metodología se utiliza?"

explicacion: |
  La cualitativa se centra en la comprensión profunda y contextualizada de fenómenos específicos.
```

### 17 — pregunta 17

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "intermedio"
  tags: ["seleccion", "mc"]

variables:
  objetivo: uno_de(["razonamiento deductivo", "razonamiento inductivo"])

respuesta: "cuantitativa"
tipo: mc
opciones_explicitas: ["cuantitativa", "cualitativa", "fenomenológica", "etnográfica"]

enunciado: "¿Qué metodología se asocia comúnmente con el razonamiento deductivo?"

explicacion: |
  La cuantitativa utiliza el razonamiento deductivo para verificar hipótesis derivadas de teorías previas.
```

### 18 — pregunta 18

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "intermedio"
  tags: ["seleccion", "mc"]

variables:
  objetivo: uno_de(["datos estandarizados", "datos no estandarizados"])

respuesta: "cuantitativa"
tipo: mc
opciones_explicitas: ["cuantitativa", "cualitativa", "acción", "participativa"]

enunciado: "¿Qué metodología utiliza predominantemente datos estandarizados?"

explicacion: |
  La cuantitativa requiere datos estandarizados para asegurar la comparabilidad y el análisis estadístico.
```

### 19 — pregunta 19

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "intermedio"
  tags: ["seleccion", "mc"]

variables:
  objetivo: uno_de(["relaciones de causa y efecto", "experiencias vividas"])

respuesta: "cuantitativa"
tipo: mc
opciones_explicitas: ["cuantitativa", "cualitativa", "histórica", "comparativa"]

enunciado: "¿Qué metodología busca establecer relaciones de causa y efecto?"

explicacion: |
  La cuantitativa se enfoca en identificar y medir relaciones causales entre variables.
```

### 20 — pregunta 20

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "intermedio"
  tags: ["seleccion", "mc"]

variables:
  objetivo: uno_de(["comprensión rica", "objetividad distante"])

respuesta: "cualitativa"
tipo: mc
opciones_explicitas: ["cuantitativa", "cualitativa", "experimental", "transversal"]

enunciado: "¿Qué metodología busca una comprensión rica y detallada del fenómeno estudiado?"

explicacion: |
  La cualitativa prioriza la riqueza descriptiva y la interpretación profunda del contexto.
```
