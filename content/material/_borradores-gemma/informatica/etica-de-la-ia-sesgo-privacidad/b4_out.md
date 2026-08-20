### 1 — Sesgo algorítmico vs Error de datos
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

### 2 — Privacidad vs Anonimización
```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "intermedio"
  tags: ["privacidad", "datos", "ia"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Se eliminan los nombres de los usuarios pero se mantiene la combinación exacta de fecha de nacimiento, código postal y género.", "El proceso es insuficiente porque la re-identificación es posible mediante ataques de vinculación."],
    ["Se aplica ruido estadístico (privacidad diferencial) para que no se pueda identificar a un individuo específico en el dataset.", "El proceso es efectivo para proteger la identidad individual manteniendo la utilidad estadística."]
  ]

tipo: vf
respuesta: falso

enunciado: "En el escenario {escenarios[escenario_idx][0]}, ¿es la técnica aplicada suficiente para garantizar la privacidad total de los datos de entrenamiento? (Respuesta: falso/verdadero)"

explicacion: |
  {escenarios[escenario_idx][1]}
```

### 3 — Etapas de mitigación de sesgos
```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "avanzado"
  tags: ["sesgo", "mitigacion", "proceso"]

tipo: ordenar
opciones_explicitas: ["Auditoría de los datos de entrenamiento", "Selección de métricas de equidad", "Implementación del modelo", "Monitoreo de resultados en producción"]
respuesta: ["Auditoría de los datos de entrenamiento", "Selección de métricas de equidad", "Implementación del modelo", "Monitoreo de resultados en producción"]

enunciado: "Ordene las etapas lógicas para mitigar el sesgo algorítmico en el ciclo de vida de un proyecto de IA, desde la preparación hasta el despliegue."

explicacion: |
  Para mitigar el sesgo, primero se deben auditar los datos para detectar desequilibrios, luego definir qué significa 'equidad' para ese caso (métricas), entrenar/implementar y finalmente monitorear para detectar sesgos emergentes.
```

### 4 — Privacidad de datos: El concepto de "Data Minimization"
```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "basico"
  tags: ["privacidad", "gdpr", "etica"]

tipo: completar
respuestas_validas: ["minimización", "reducción"]

enunciado: "El principio de ___ de datos establece que solo se deben recolectar los datos estrictamente necesarios para el fin específico del modelo de IA."

explicacion: |
  La minimización de datos es un pilar de la privacidad que busca evitar la recolección excesiva de información sensible que podría ser mal utilizada o filtrada.
```

### 5 — Sesgo de Representación vs Sesgo de Medición
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