### 1 — Identificación de síntomas de ansiedad
```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad"
  nivel: "basico"
  tags: ["ansiedad", "sintomas"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Ana siente palpitaciones, falta de aire y un miedo constante a que algo malo suceda sin razón aparente.", "ansiedad"],
    ["Luis evita ir a reuniones sociales porque siente que todos lo están juzgando y tiene sudoración excesiva.", "ansiedad"]
  ]

enunciado: "En el caso de {escenarios[escenario_idx][0]}, la persona está experimentando síntomas característicos de: ___"

respuestas_validas: ["ansiedad", "depresión", "estrés"]
respuesta: escenarios[escenario_idx][1]
tipo: completar

explicacion: |
  Los síntomas físicos (palpitaciones) y cognitivos (miedo constante) descritos son indicadores comunes de un cuadro de ansiedad.
```

### 2 — Reconocimiento de la depresión
```
metadata:
  materia: "psicologia"
  tema: "salud_mental_depresion"
  nivel: "intermedio"
  tags: ["depresion", "anhedonia"]

variables:
  caso_idx: uno_de([0, 1, 2])
  casos: [
    ["Pedro ya no disfruta jugar al fútbol, algo que antes le apasionaba.", "anhedonia"],
    ["María siente una tristeza profunda y falta de energía que dura más de dos semanas.", "depresion"],
    ["Juan tiene alteraciones constantes en el sueño y pérdida de apetito.", "depresion"]
  ]

enunciado: "Si una persona presenta {casos[caso_idx][0]}, es un indicador clínico que requiere atención profesional."

respuestas_validas: ["anhedonia", "euforia", "estrés"]
respuesta: casos[caso_idx][1]
tipo: completar

explicacion: |
  La incapacidad para sentir placer en actividades que antes eran gratificantes se conoce como anhedonia, un síntoma clave en la depresión.
```

### 3 — Cuándo buscar ayuda profesional
```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ayuda"
  nivel: "intermedio"
  tags: ["ayuda_profesional", "bienestar"]

enunciado: "¿Es correcto buscar ayuda profesional si los problemas emocionales interfieren con la vida cotidiana (trabajo, estudios, relaciones)?"

respuestas_validas: ["verdadero", "falso"]
respuesta: verdadero
tipo: vf

explicacion: |
  La funcionalidad es un criterio clave. Si el malestar impide el desarrollo normal de las actividades diarias, es momento de consultar a un profesional.
```

### 4 — Señales de alerta
```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ayuda"
  nivel: "avanzado"
  tags: ["riesgo", "prevencion"]

variables:
  alerta_idx: uno_de([0, 1])
  alertas: [
    ["Pensamientos de autolesión o ideas de muerte.", "riesgo_critico"],
    ["Aislamiento social extremo y abandono del autocuidado.", "riesgo_critico"]
  ]

enunciado: "Identifica la gravedad de la siguiente señal de alerta: {alertas[alerta_idx][0]}"

opciones_explicitas: ["riesgo_critico", "malestar_leve", "estrés_común"]
respuesta: alertas[alerta_idx][1]
tipo: mc

explicacion: |
  Tanto los pensamientos de autolesión como el abandono total del autocuidado son señales de alerta crítica que requieren intervención inmediata.
```

### 5 — Pasos para el abordaje de la salud mental
```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ayuda"
  nivel: "basico"
  tags: ["proceso", "ayuda"]

enunciado: "Ordena los pasos lógicos para abordar un problema de salud mental detectado:"

opciones_explicitas: ["Reconocer el malestar", "Buscar apoyo profesional", "Iniciar tratamiento y seguimiento"]
respuesta: ["Reconocer el malestar", "Buscar apoyo profesional", "Iniciar tratamiento y seguimiento"]
tipo: ordenar

explicacion: |
  El proceso saludable comienza con la autopercepción del malestar, seguido de la búsqueda de un experto y, finalmente, el compromiso con un proceso terapéutico.
```