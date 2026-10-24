### 1 — Sistemas de reglas vs. Aprendizaje
```
metadata:
  materia: "informatica"
  tema: "ia_reglas_vs_aprendizaje"
  nivel: "basico"
  tags: ["ia", "conceptos_base"]

respuesta: "aprendizaje automático"
tipo: "completar"
respuestas_validas: ["aprendizaje automático", "machine learning"]

enunciado: "Mientras que un sistema basado en reglas requiere que un programador defina manualmente cada condición lógica, el ___ es un paradigma donde el sistema identifica patrones directamente a partir de los datos."

explicacion: |
  En la IA clásica (sistemas expertos), el conocimiento es explícito y codificado por humanos. En el aprendizaje automático, el modelo "aprende" las reglas estadísticas a partir de la experiencia (datos).
```

### 2 — El problema de la escalabilidad de reglas
```
metadata:
  materia: "informatica"
  tema: "ia_reglas_vs_aprendizaje"
  nivel: "intermedio"
  tags: ["escalabilidad", "sistemas_expertos"]

variables:
  es_complejo: true

respuesta: falso
tipo: "vf"

enunciado: "Un sistema basado en reglas explícitas es intrínsecamente más eficiente y fácil de mantener que un modelo de aprendizaje automático cuando el problema involucra miles de variables interdependientes y dinámicas."

explicacion: |
  Falso. A medida que la complejidad y el número de variables aumentan, las reglas manuales se vuelven imposibles de gestionar (explosión combinatoria), mientras que los modelos de aprendizaje están diseñados para manejar esa dimensionalidad.
```

### 3 — ¿Qué aprende realmente un modelo?
```
metadata:
  materia: "informatica"
  tema: "ia_reglas_vs_aprendizaje"
  nivel: "intermedio"
  tags: ["naturaleza_aprendizaje"]

respuesta: "correlaciones estadísticas"
tipo: "mc"
opciones_explicitas: ["correlaciones estadísticas", "lógica formal pura", "causalidad absoluta", "sentido común humano"]

enunciado: "Es un error común pensar que un modelo de aprendizaje profundo entiende la 'causa' de un fenómeno. En realidad, lo que el modelo optimiza es la detección de ___ en los datos de entrenamiento."

explicacion: |
  Los modelos de IA actuales son excelentes encontrando patrones y correlaciones, pero no comprenden la causalidad ni el "porqué" de las cosas, a menos que se diseñen arquitecturas específicas para inferencia causal.
```

### 4 — Flujo de desarrollo: Reglas vs Datos
```
metadata:
  materia: "informatica"
  tema: "ia_reglas_vs_aprendizaje"
  nivel: "basico"
  tags: ["metodologia"]

respuesta: ["Definir reglas", "Escribir código de decisión", "Probar lógica"]
tipo: "ordenar"
opciones_explicitas: ["Definir reglas", "Escribir código de decisión", "Probar lógica"]

enunciado: "Ordena los pasos típicos en el desarrollo de un Sistema Experto (basado en reglas) de forma lógica:"

explicacion: |
  En el enfoque basado en reglas, primero se extrae el conocimiento del experto (reglas), luego se traduce a código y finalmente se valida la lógica.
```

### 5 — El sesgo en el aprendizaje
```
metadata:
  materia: "informatica"
  tema: "ia_reglas_vs_aprendizaje"
  nivel: "avanzado"
  tags: ["sesgo", "datos"]

variables:
  idx: uno_de([0, 1])
  escenario: [
    ["Un sistema de reglas tiene un error porque el programador olvidó una condición.", "error_programador"],
    ["Un sistema de aprendizaje tiene un error porque los datos de entrenamiento son parciales.", "error_datos"]
  ]

respuesta: "error_datos"
tipo: "mc"
opciones_explicitas: ["error_programador", "error_datos"]

enunciado: "En el escenario {escenario[idx][0]}, el problema principal es un: ___"

explicacion: |
  Si el sistema es de reglas, el error es de diseño/lógica humana. Si el sistema es de aprendizaje, el error suele provenir de la calidad o representatividad de los datos (sesgo).
```