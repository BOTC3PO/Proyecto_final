### 1 — Sesgo algorítmico y representatividad
```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo"
  nivel: "intermedio"
  tags: ["sesgo", "datos", "entrenamiento"]

respuesta: "sesgo de representatividad"
tipo: completar
respuestas_validas: ["sesgo de representatividad", "sesgo de representatividad"]

enunciado: "Cuando un modelo de IA presenta un desempeño inferior para un grupo demográfico específico porque dicho grupo estaba subrepresentado en el conjunto de entrenamiento, estamos ante un ___."

explicacion: |
  El sesgo de representatividad ocurre cuando la distribución de los datos de entrenamiento no refleja la diversidad de la población real, provocando que el modelo sea menos preciso para las minorías.
```

### 2 — Privacidad y memorización de datos
```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_privacidad"
  nivel: "avanzado"
  tags: ["privacidad", "memorizacion", "seguridad"]

variables:
  caso: uno_de([
    ["Un modelo de lenguaje revela la dirección de un usuario tras ser interrogado con prompts específicos.", "falso"],
    ["Un modelo de lenguaje predice la probabilidad de que un usuario compre un producto basado en tendencias generales.", "verdadero"]
  ])

respuesta: caso[1]
tipo: vf

enunciado: "Si un modelo de IA ha memorizado datos sensibles de entrenamiento (como números de identificación) y los reproduce textualmente ante un prompt malintencionado, ¿se ha vulnerado la privacidad de los datos?"

explicacion: |
  La memorización de datos sensibles es un riesgo crítico de privacidad en modelos de lenguaje grandes (LLMs). Aunque el modelo prediga tendencias generales (caso verdadero), la capacidad de extraer datos específicos de individuos es una vulneración.
```

### 3 — Mitigación de sesgos en el ciclo de vida
```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo"
  nivel: "intermedio"
  tags: ["mitigacion", "ciclo_de_vida", "auditoria"]

opciones_explicitas: ["Recolección de datos", "Auditoría de modelos", "Limpieza de datos", "Implementación del modelo"]

respuesta: ["Recolección de datos", "Limpieza de datos", "Auditoría de modelos", "Implementación del modelo"]
tipo: ordenar

enunciado: "Ordena las fases del ciclo de vida de un proyecto de IA donde se deben aplicar medidas de mitigación de sesgos, desde la fase inicial hasta la puesta en producción:"

explicacion: |
  La mitigación debe ser transversal: se debe asegurar la representatividad en la recolección, la calidad en la limpieza, la equidad en la auditoría y la vigilancia en la implementación.
```

### 4 — El mito de la neutralidad algorítmica
```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo"
  nivel: "basico"
  tags: ["neutralidad", "sesgo", "conceptos"]

opciones_explicitas: ["Verdadero", "Falso"]

respuesta: "Falso"
tipo: mc

enunciado: "Un algoritmo es intrínsecamente neutral y objetivo simplemente porque sus decisiones se basan en procesos matemáticos y no en opiniones humanas directas."

explicacion: |
  Falso. Los algoritmos heredan los sesgos presentes en los datos históricos, en la selección de variables por parte de los ingenieros y en los objetivos de optimización definidos por los humanos.
```

### 5 — Privacidad diferencial
```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_privacidad"
  nivel: "avanzado"
  tags: ["privacidad_diferencial", "ruido", "seguridad"]

respuesta: "añadir ruido estadístico"
tipo: completar
respuestas_validas: ["añadir ruido estadístico", "añadir ruido estadístico"]

enunciado: "Una técnica común para proteger la privacidad en el entrenamiento de modelos es la privacidad diferencial, que consiste en ___ a los datos para que no se pueda identificar a un individuo específico."

explicacion: |
  La privacidad diferencial añade ruido matemático controlado para que la presencia o ausencia de un individuo en el dataset no altere significativamente la salida del modelo, protegiendo la identidad de los sujetos.
```