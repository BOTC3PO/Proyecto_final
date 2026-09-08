# Informatica — Etica de la ia sesgo privacidad (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de sesgo algorítmico

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "basico"
  tags: ["etica", "ia", "sesgo"]

tipo: mc
opciones_explicitas: ["La reproducción de prejuicios humanos en los resultados de un modelo", "La capacidad de un modelo para procesar datos a gran velocidad", "El uso de algoritmos para optimizar la búsqueda de información", "La capacidad de un modelo para aprender sin supervisión humana"]

enunciado: "El sesgo algorítmico ocurre cuando un sistema de inteligencia artificial presenta resultados sistemáticamente prejuiciosos. Esto sucede principalmente porque el modelo ___."

respuesta: "La reproducción de prejuicios humanos en los resultados de un modelo"

explicacion: |
  El sesgo algorítmico surge cuando los datos de entrenamiento contienen prejuicios históricos o sociales, o cuando el diseño del algoritmo favorece ciertas categorías sobre otras, perpetuando la discriminación.
```

### 2 — Privacidad en el entrenamiento

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "basico"
  tags: ["privacidad", "datos", "entrenamiento"]

tipo: vf

enunciado: "El uso de datos personales sensibles para entrenar modelos de IA sin el consentimiento explícito de los individuos constituye una violación de la privacidad de los datos."

respuesta: verdadero

explicacion: |
  La privacidad es un pilar ético fundamental. Entrenar modelos con datos que contienen información identificable sin asegurar el anonimato o el consentimiento puede vulnerar derechos fundamentales.
```

### 3 — Componentes del sesgo

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "intermedio"
  tags: ["datos", "sesgo", "entrenamiento"]

tipo: completar
respuestas_validas:
  - "Falta de diversidad en los datos de entrenamiento"

enunciado: "Si un modelo de reconocimiento facial falla sistemáticamente con personas de piel oscura porque el dataset era mayoritariamente de personas de piel clara, estamos ante un caso de: ___."

respuesta: "Falta de diversidad en los datos de entrenamiento"

explicacion: |
  Cuando el problema reside en que los datos no cubren todas las categorías de la población, se denomina sesgo de representación o falta de diversidad en los datos.
```

### 4 — Ciclo de vida de la ética en IA

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "intermedio"
  tags: ["proceso", "etica", "desarrollo"]

tipo: ordenar
opciones_explicitas: ["Recolección de datos", "Limpieza y auditoría de sesgos", "Entrenamiento del modelo", "Evaluación de impacto ético"]

enunciado: "Para mitigar sesgos y proteger la privacidad, se debe seguir un orden lógico en el ciclo de vida del desarrollo de IA. Ordena las siguientes etapas de forma correcta:"

respuesta_orden: ["Recolección de datos", "Limpieza y auditoría de sesgos", "Entrenamiento del modelo", "Evaluación de impacto ético"]

explicacion: |
  Un proceso ético comienza con la recolección responsable, sigue con la auditoría para detectar sesgos en los datos antes de entrenar, continúa con el entrenamiento y culmina con una evaluación del impacto que el modelo tendrá en la sociedad.
```

### 5 — Concepto de anonimización

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "basico"
  tags: ["privacidad", "anonimización", "datos"]

tipo: mc
opciones_explicitas: ["Verdadero", "Falso"]

enunciado: "La técnica de anonimización de datos garantiza que sea imposible, bajo cualquier circunstancia, volver a identificar a un individuo a partir de los datos utilizados para entrenar una IA."

respuesta: "Falso"

explicacion: |
  Aunque la anonimización es una medida de protección, existe el riesgo de 're-identificación' mediante ataques de vinculación de datos, por lo que no es una garantía absoluta de privacidad.
```

### 6 — Sesgo en selección de personal

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo"
  nivel: "intermedio"
  tags: ["sesgo", "ia", "etica"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[0, "preferencia por candidatos masculinos"], [1, "preferencia por candidatos de ciertas etnias"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["preferencia por candidatos masculinos", "preferencia por candidatos de ciertas etnias", "preferencia por candidatos con mayor edad", "preferencia por candidatos con títulos de universidades específicas"]

enunciado: "Un algoritmo de IA para filtrar CVs fue entrenado con datos históricos de una empresa donde solo se contrataban hombres. El modelo comienza a descartar automáticamente a mujeres calificadas. Este fenómeno se conoce como: ___"

explicacion: |
  El modelo ha aprendido y replicado un sesgo histórico presente en los datos de entrenamiento. Esto se conoce como sesgo algorítmico por representación o histórico.
```

### 7 — Privacidad en el entrenamiento

```
metadata:
  materia: "informatica"
  tema: "privacidad_datos"
  nivel: "basico"
  tags: ["privacidad", "ia", "datos"]

respuesta: falso
tipo: vf

enunciado: "Si un modelo de IA ha sido entrenado con un conjunto de datos que contiene información médica privada, pero los datos fueron 'anonimizados' (se eliminó el nombre y DNI), ¿es imposible que el modelo pueda revelar la identidad de un paciente mediante ataques de inversión de modelo?"

explicacion: |
  Falso. Los ataques de inversión de modelo o ataques de membresía pueden permitir reconstruir o inferir datos sensibles incluso si los datos originales estaban anonimizados, ya que el modelo "memoriza" patrones específicos de los datos de entrenamiento.
```

### 8 — Pasos para mitigar el sesgo

```
metadata:
  materia: "informatica"
  tema: "mitigacion_sesgo"
  nivel: "avanzado"
  tags: ["mitigacion", "proceso", "ia"]

opciones_explicitas: ["Auditar los datos de entrenamiento", "Definir métricas de equidad", "Implementar el modelo en producción", "Evaluar el impacto en usuarios reales"]
respuesta_orden: ["Definir métricas de equidad", "Auditar los datos de entrenamiento", "Implementar el modelo en producción", "Evaluar el impacto en usuarios reales"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para asegurar un despliegue ético de un sistema de IA que busca mitigar sesgos:"

explicacion: |
  Primero se deben definir qué es "justo" (métricas), luego revisar si los datos reflejan ese ideal (auditoría), luego lanzar el sistema y finalmente monitorear su impacto real.
```

### 9 — El concepto de "Caja Negra" y Privacidad

```
metadata:
  materia: "informatica"
  tema: "privacidad_datos"
  nivel: "intermedio"
  tags: ["explicabilidad", "privacidad"]

respuesta: "un sistema de crédito que niega préstamos sin explicar por qué"
tipo: completar
respuestas_validas:
  - "un sistema de crédito que niega préstamos sin explicar por qué"

enunciado: "Un problema ético común es la falta de explicabilidad (caja negra). Un ejemplo de esto es: ___"

explicacion: |
  La falta de explicabilidad impide que los usuarios comprendan por qué se tomó una decisión que les afecta, lo cual es un riesgo tanto de sesgo como de falta de transparencia en el manejo de sus datos.
```

### 10 — Privacidad Diferencial

```
metadata:
  materia: "informatica"
  tema: "privacidad_datos"
  nivel: "avanzado"
  tags: ["privacidad_diferencial", "teoria"]

respuesta: "añadir ruido estadístico"
tipo: completar
respuestas_validas:
  - "añadir ruido estadístico"
  - "eliminar todos los datos"

enunciado: "Para proteger la privacidad en el entrenamiento de modelos de IA, se utiliza una técnica llamada Privacidad Diferencial, que consiste en ___ a los datos para que no se pueda identificar a un individuo específico."

explicacion: |
  La privacidad diferencial añade ruido matemático a los datos o a los gradientes durante el entrenamiento, permitiendo extraer patrones generales sin comprometer la identidad de los individuos del dataset.
```

### 11 — Sesgo algorítmico y representatividad

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo"
  nivel: "intermedio"
  tags: ["sesgo", "datos", "entrenamiento"]

respuesta: "sesgo de representatividad"
tipo: completar
respuestas_validas:
  - "sesgo de representatividad"
  - "sesgo de representatividad"

enunciado: "Cuando un modelo de IA presenta un desempeño inferior para un grupo demográfico específico porque dicho grupo estaba subrepresentado en el conjunto de entrenamiento, estamos ante un ___."

explicacion: |
  El sesgo de representatividad ocurre cuando la distribución de los datos de entrenamiento no refleja la diversidad de la población real, provocando que el modelo sea menos preciso para las minorías.
```

### 12 — Privacidad y memorización de datos

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_privacidad"
  nivel: "avanzado"
  tags: ["privacidad", "memorizacion", "seguridad"]

respuesta: verdadero
tipo: vf
enunciado: "Si un modelo de IA ha memorizado datos sensibles de entrenamiento (como números de identificación) y los reproduce textualmente ante un prompt malintencionado, ¿se ha vulnerado la privacidad de los datos?"

explicacion: |
  La memorización de datos sensibles es un riesgo crítico de privacidad en modelos de lenguaje grandes (LLMs). Si el modelo puede reproducir textualmente datos identificables ante un prompt malintencionado, se ha vulnerado la privacidad de esos individuos.
```

### 13 — Mitigación de sesgos en el ciclo de vida

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo"
  nivel: "intermedio"
  tags: ["mitigacion", "ciclo_de_vida", "auditoria"]

opciones_explicitas: ["Recolección de datos", "Auditoría de modelos", "Limpieza de datos", "Implementación del modelo"]

respuesta_orden: ["Recolección de datos", "Limpieza de datos", "Auditoría de modelos", "Implementación del modelo"]
tipo: ordenar

enunciado: "Ordena las fases del ciclo de vida de un proyecto de IA donde se deben aplicar medidas de mitigación de sesgos, desde la fase inicial hasta la puesta en producción:"

explicacion: |
  La mitigación debe ser transversal: se debe asegurar la representatividad en la recolección, la calidad en la limpieza, la equidad en la auditoría y la vigilancia en la implementación.
```

### 14 — El mito de la neutralidad algorítmica

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

### 15 — Privacidad diferencial

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_privacidad"
  nivel: "avanzado"
  tags: ["privacidad_diferencial", "ruido", "seguridad"]

respuesta: "añadir ruido estadístico"
tipo: completar
respuestas_validas:
  - "añadir ruido estadístico"
  - "añadir ruido estadístico"

enunciado: "Una técnica común para proteger la privacidad en el entrenamiento de modelos es la privacidad diferencial, que consiste en ___ a los datos para que no se pueda identificar a un individuo específico."

explicacion: |
  La privacidad diferencial añade ruido matemático controlado para que la presencia o ausencia de un individuo en el dataset no altere significativamente la salida del modelo, protegiendo la identidad de los sujetos.
```

### 16 — Sesgo algorítmico vs Error de datos

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "intermedio"
  tags: ["etica", "sesgo", "ia"]

tipo: mc
opciones_explicitas: ["El sesgo algorítmico es un error de programación en el código fuente.", "El sesgo algorítmico es la reproducción de prejuicios humanos presentes en los datos de entrenamiento.", "El sesgo algorítmico es la falta de capacidad de procesamiento del hardware.", "El sesgo algorítmico es un error de hardware que afecta la precisión."]

respuesta: "El sesgo algorítmico es la reproducción de prejuicios humanos presentes en los datos de entrenamiento."

enunciado: "¿Cuál es la diferencia fundamental entre un error de programación lógico y el sesgo algorítmico en un modelo de IA?"

explicacion: |
  El sesgo algorítmico no suele ser un error de sintaxis o lógica en el código, sino una consecuencia de que los datos utilizados para entrenar el modelo contienen prejuicios históricos o sociales que la IA aprende y replica.
```

### 17 — Privacidad vs Anonimización

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "intermedio"
  tags: ["privacidad", "datos", "ia"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Se eliminan los nombres de los usuarios pero se mantiene la combinación exacta de fecha de nacimiento, código postal y género.", "El proceso es insuficiente porque la re-identificación es posible mediante ataques de vinculación."], ["Se aplica ruido estadístico (privacidad diferencial) para que no se pueda identificar a un individuo específico en el dataset.", "Aunque la privacidad diferencial es una técnica robusta y mucho más efectiva, tampoco garantiza una privacidad matemáticamente 'total': sigue existiendo un riesgo residual controlado (el parámetro epsilon), por lo que la respuesta correcta sigue siendo falso."]]

tipo: vf
respuesta: falso

enunciado: "En el escenario {escenarios[escenario_idx][0]}, ¿es la técnica aplicada suficiente para garantizar la privacidad total de los datos de entrenamiento? (Respuesta: falso/verdadero)"

explicacion: |
  {escenarios[escenario_idx][1]}
```

### 18 — Etapas de mitigación de sesgos

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "avanzado"
  tags: ["sesgo", "mitigacion", "proceso"]

tipo: ordenar
opciones_explicitas: ["Auditoría de los datos de entrenamiento", "Selección de métricas de equidad", "Implementación del modelo", "Monitoreo de resultados en producción"]
respuesta_orden: ["Auditoría de los datos de entrenamiento", "Selección de métricas de equidad", "Implementación del modelo", "Monitoreo de resultados en producción"]

enunciado: "Ordene las etapas lógicas para mitigar el sesgo algorítmico en el ciclo de vida de un proyecto de IA, desde la preparación hasta el despliegue."

explicacion: |
  Para mitigar el sesgo, primero se deben auditar los datos para detectar desequilibrios, luego definir qué significa 'equidad' para ese caso (métricas), entrenar/implementar y finalmente monitorear para detectar sesgos emergentes.
```

### 19 — Privacidad de datos: El concepto de "Data Minimization"

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "basico"
  tags: ["privacidad", "gdpr", "etica"]

tipo: completar
respuestas_validas:
  - "minimización"
  - "reducción"

enunciado: "El principio de ___ de datos establece que solo se deben recolectar los datos estrictamente necesarios para el fin específico del modelo de IA."

explicacion: |
  La minimización de datos es un pilar de la privacidad que busca evitar la recolección excesiva de información sensible que podría ser mal utilizada o filtrada.
```

### 20 — Sesgo de Representación vs Sesgo de Medición

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "avanzado"
  tags: ["sesgo", "teoria"]

tipo: mc
opciones_explicitas: ["El sesgo de representación ocurre cuando ciertos grupos están subrepresentados en el dataset.", "El sesgo de medición ocurre cuando el software de recolección de datos falla.", "El sesgo de representación es un error de hardware.", "El sesgo de medición es la falta de diversidad en los datos."]

respuesta: "El sesgo de representación ocurre cuando ciertos grupos están subrepresentados en el dataset."

enunciado: "¿Qué distingue al sesgo de representación de otros tipos de sesgo en la IA?"

explicacion: |
  El sesgo de representación se da cuando la muestra de datos no refleja la diversidad de la población real (por ejemplo, un modelo de reconocimiento facial entrenado mayoritariamente con personas de piel clara), lo que impide que el modelo funcione equitativamente para todos.
```

### 21 — Sesgo en contratación automatizada

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_algoritmico"
  nivel: "intermedio"
  tags: ["sesgo", "ia", "etica"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["un algoritmo de selección de CV que favorece candidatos de un género por sesgo histórico en los datos de entrenamiento", "género"], ["un sistema de reconocimiento facial que falla más en personas de piel oscura debido a una muestra desequilibrada", "etnia"]]

enunciado: "En el caso de {escenarios[escenario_idx][0]}, el modelo está reproduciendo un sesgo de {escenarios[escenario_idx][1]}."

respuesta: escenarios[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "género"
  - "etnia"

explicacion: |
  El sesgo algorítmico ocurre cuando los datos históricos utilizados para entrenar el modelo contienen prejuicios humanos o desequilibrios de representación, los cuales el modelo aprende y replica.
```

### 22 — Privacidad y datos de entrenamiento

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_privacidad"
  nivel: "basico"
  tags: ["privacidad", "datos", "ia"]

enunciado: "Si un modelo de lenguaje ha sido entrenado con correos electrónicos privados sin consentimiento, ¿se ha vulnerado la privacidad de los datos?"

respuesta: verdadero
tipo: vf

explicacion: |
  El uso de datos personales sensibles para el entrenamiento de modelos de IA sin el consentimiento explícito o una base legal adecuada constituye una violación de la privacidad y de las normativas de protección de datos.
```

### 23 — Mitigación de sesgos

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_algoritmico"
  nivel: "avanzado"
  tags: ["mitigacion", "sesgo", "datos"]

enunciado: "Para mitigar el sesgo algorítmico, una técnica común es la 'equidad mediante la ceguera' (fairness through unawareness), que consiste en: ___"

respuesta: "Eliminar variables sensibles como la raza de los ejemplos"
tipo: completar
respuestas_validas:
  - "Eliminar variables sensibles como la raza de los ejemplos"

explicacion: |
  Aunque eliminar variables sensibles (como raza o género) es una técnica llamada 'ceguera', no siempre es efectiva porque otras variables (como el código postal) pueden actuar como 'proxies' de la variable sensible.
```

### 24 — Identificación de riesgos

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_privacidad"
  nivel: "intermedio"
  tags: ["riesgo", "privacidad", "ataque"]

enunciado: "Un ataque de 'inferencia de membresía' busca determinar si un dato específico fue utilizado en el conjunto de entrenamiento de un modelo. Este ataque es un riesgo para la:"

respuesta: "privacidad de los datos"
tipo: mc
opciones_explicitas: ["eficiencia del modelo", "privacidad de los datos", "velocidad de procesamiento", "precisión del cálculo"]

explicacion: |
  Los ataques de inferencia de membresía permiten saber si un individuo particular forma parte del set de entrenamiento, lo cual compromete la privacidad si los datos son sensibles.
```

### 25 — Pasos para un desarrollo ético

```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_algoritmico"
  nivel: "intermedio"
  tags: ["proceso", "etica", "desarrollo"]

enunciado: "Ordena los pasos lógicos para asegurar la equidad en un sistema de IA desde la fase de datos hasta la implementación:"

respuesta_orden: ["Auditar la calidad de los datos", "Entrenar el modelo", "Evaluar resultados en subgrupos", "Monitorear sesgos en producción"]
tipo: ordenar
opciones_explicitas: ["Auditar la calidad de los datos", "Entrenar el modelo", "Evaluar resultados en subgrupos", "Monitorear sesgos en producción"]

explicacion: |
  Un ciclo de vida ético requiere: 1. Asegurar datos representativos, 2. Entrenar, 3. Realizar pruebas de estrés en grupos minoritarios (fairness testing) y 4. Vigilancia continua para detectar derivas de sesgo.
```
