### 1 — Sesgo en selección de personal
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

### 2 — Privacidad en el entrenamiento
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

### 3 — Pasos para mitigar el sesgo
```
metadata:
  materia: "informatica"
  tema: "mitigacion_sesgo"
  nivel: "avanzado"
  tags: ["mitigacion", "proceso", "ia"]

opciones_explicitas: ["Auditar los datos de entrenamiento", "Definir métricas de equidad", "Implementar el modelo en producción", "Evaluar el impacto en usuarios reales"]
respuesta: ["Definir métricas de equidad", "Auditar los datos de entrenamiento", "Implementar el modelo en producción", "Evaluar el impacto en usuarios reales"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para asegurar un despliegue ético de un sistema de IA que busca mitigar sesgos:"

explicacion: |
  Primero se deben definir qué es "justo" (métricas), luego revisar si los datos reflejan ese ideal (auditoría), luego lanzar el sistema y finalmente monitorear su impacto real.
```

### 4 — El concepto de "Caja Negra" y Privacidad
```
metadata:
  materia: "informatica"
  tema: "privacidad_datos"
  nivel: "intermedio"
  tags: ["explicabilidad", "privacidad"]

variables:
  caso_idx: uno_de([0, 1])
  caso: [[0, "un sistema de crédito que niega préstamos sin explicar por qué"], [1, "un sistema de traducción que traduce textos sin errores"]]

respuesta: caso[caso_idx][0]
tipo: completar
respuestas_validas: ["un sistema de crédito que niega préstamos sin explicar por qué", "un sistema de traducción que traduce textos sin errores"]

enunciado: "Un problema ético común es la falta de explicabilidad (caja negra). Un ejemplo de esto es: ___"

explicacion: |
  La falta de explicabilidad impide que los usuarios comprendan por qué se tomó una decisión que les afecta, lo cual es un riesgo tanto de sesgo como de falta de transparencia en el manejo de sus datos.
```

### 5 — Privacidad Diferencial
```
metadata:
  materia: "informatica"
  tema: "privacidad_datos"
  nivel: "avanzado"
  tags: ["privacidad_diferencial", "teoria"]

respuesta: "añadir ruido estadístico"
tipo: completar
respuestas_validas: ["añadir ruido estadístico", "eliminar todos los datos"]

enunciado: "Para proteger la privacidad en el entrenamiento de modelos de IA, se utiliza una técnica llamada Privacidad Diferencial, que consiste en ___ a los datos para que no se pueda identificar a un individuo específico."

explicacion: |
  La privacidad diferencial añade ruido matemático a los datos o a los gradientes durante el entrenamiento, permitiendo extraer patrones generales sin comprometer la identidad de los individuos del dataset.
```