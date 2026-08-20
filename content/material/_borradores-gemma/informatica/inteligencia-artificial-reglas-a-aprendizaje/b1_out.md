### 1 — Evolución de la IA
```
metadata:
  materia: "informatica"
  tema: "inteligencia-artificial-reglas-a-aprendizaje"
  nivel: "basico"
  tags: ["conceptos", "historia"]

respuesta: "aprendizaje automatico"
tipo: completar
respuestas_validas: ["aprendizaje automatico", "machine learning"]

enunciado: "Mientras que los sistemas tradicionales se basan en reglas programadas manualmente, la disciplina que permite a las máquinas mejorar su rendimiento mediante la experiencia con datos se denomina ___."

explicacion: |
  El paso de la IA basada en reglas (sistemas expertos) al aprendizaje automático (Machine Learning) marca la transición de la programación explícita al entrenamiento mediante datos.
```

### 2 — Sistemas Basados en Reglas
```
metadata:
  materia: "informatica"
  tema: "inteligencia-artificial-reglas-a-aprendizaje"
  nivel: "basico"
  tags: ["sistemas-expertos", "logica"]

respuesta: verdadero
tipo: vf

enunciado: "En un sistema basado en reglas (como un sistema experto), el conocimiento es extraído y codificado manualmente por un experto humano bajo la forma de estructuras 'SI [condición] ENTONCES [acción]'."

explicacion: |
  Efectivamente, los sistemas de IA clásica dependen de que un programador o experto defina todas las reglas lógicas que el sistema debe seguir para tomar decisiones.
```

### 3 — El rol de los datos
```
metadata:
  materia: "informatica"
  tema: "inteligencia-artificial-reglas-a-aprendizaje"
  nivel: "basico"
  tags: ["datos", "entrenamiento"]

variables:
  idx: uno_de([0, 1])
  escenario: [
    ["un sistema de filtrado de spam basado en reglas", "palabra 'viagra'"],
    ["un modelo de reconocimiento de imágenes", "fotos de gatos"]
  ]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["escenario[idx][0]", "escenario[idx][1]", "Ninguna de las anteriores"]

enunciado: "En el contexto de la IA moderna, ¿cuál de los siguientes elementos es el componente fundamental que sustituye a la regla explícita para permitir que el sistema aprenda?"

pasos:
  - "Identificar qué elemento es el insumo para el entrenamiento."
  - "Comparar con el concepto de 'regla manual' vs 'dato de entrenamiento'."

explicacion: |
  En el aprendizaje automático, el modelo no recibe la regla, sino los datos (como {escenario[idx][1]}) para que él mismo infiera los patrones.
```

### 4 — Componentes de un sistema de aprendizaje
```
metadata:
  materia: "informatica"
  tema: "inteligencia-artificial-reglas-a-aprendizaje"
  nivel: "intermedio"
  tags: ["terminologia", "machine-learning"]

respuesta: ["Datos", "Algoritmo", "Modelo"]
tipo: ordenar

opciones_explicitas: ["Datos", "Algoritmo", "Modelo"]

enunciado: "Ordene los componentes en el orden lógico de un proceso de aprendizaje automático: primero se requieren los ___, luego se aplica un ___ sobre ellos y finalmente se obtiene un ___ capaz de realizar predicciones."

explicacion: |
  El flujo estándar es: Datos (input) $\rightarrow$ Algoritmo (proceso de entrenamiento) $\rightarrow$ Modelo (producto final entrenado).
```

### 5 — Diferencia fundamental
```
metadata:
  materia: "informatica"
  tema: "inteligencia-artificial-reglas-a-aprendizaje"
  nivel: "intermedio"
  tags: ["paradigma", "comparativa"]

respuesta: "aprendizaje automatico"
tipo: mc
opciones_explicitas: ["sistemas expertos", "aprendizaje automatico", "programación lógica", "sistemas de reglas"]

enunciado: "Si un programador debe escribir cada instrucción lógica para que la IA funcione, está usando un sistema de reglas. Si el sistema descubre la lógica por sí mismo analizando patrones, está usando:"

explicacion: |
  La diferencia clave es la fuente de la lógica: en los sistemas de reglas es el humano (codificación), en el aprendizaje automático es el patrón extraído de los datos.
```