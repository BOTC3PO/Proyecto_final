### 1 — Sesgo en contratación automatizada
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
respuestas_validas: ["género", "etnia"]

explicacion: |
  El sesgo algorítmico ocurre cuando los datos históricos utilizados para entrenar el modelo contienen prejuicios humanos o desequilibrios de representación, los cuales el modelo aprende y replica.
```

### 2 — Privacidad y datos de entrenamiento
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

### 3 — Mitigación de sesgos
```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_algoritmico"
  nivel: "avanzado"
  tags: ["mitigacion", "sesgo", "datos"]

variables:
  accion_idx: uno_de([0, 1])
  acciones: [["Aumentar la diversidad de los datos de entrenamiento", "A"], ["Eliminar variables sensibles como la raza de los ejemplos", "B"]]

enunciado: "Para mitigar el sesgo algorítmico, una técnica común es la 'equidad mediante la ceguera' (fairness through unawareness), que consiste en: ___"

respuesta: acciones[accion_idx][1]
tipo: completar
respuestas_validas: ["A", "B"]

explicacion: |
  Aunque eliminar variables sensibles (como raza o género) es una técnica llamada 'ceguera', no siempre es efectiva porque otras variables (como el código postal) pueden actuar como 'proxies' de la variable sensible.
```

### 4 — Identificación de riesgos
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

### 5 — Pasos para un desarrollo ético
```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_algoritmico"
  nivel: "intermedio"
  tags: ["proceso", "etica", "desarrollo"]

enunciado: "Ordena los pasos lógicos para asegurar la equidad en un sistema de IA desde la fase de datos hasta la implementación:"

respuesta: ["Auditar la calidad de los datos", "Entrenar el modelo", "Evaluar resultados en subgrupos", "Monitorear sesgos en producción"]
tipo: ordenar
opciones_explicitas: ["Auditar la calidad de los datos", "Entrenar el modelo", "Evaluar resultados en subgrupos", "Monitorear sesgos en producción"]

explicacion: |
  Un ciclo de vida ético requiere: 1. Asegurar datos representativos, 2. Entrenar, 3. Realizar pruebas de estrés en grupos minoritarios (fairness testing) y 4. Vigilancia continua para detectar derivas de sesgo.
```