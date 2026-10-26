### 1 — Señales de alerta en la ansiedad
```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad"
  nivel: "basico"
  tags: ["ansiedad", "señales_alerta"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["Ana siente una preocupación constante por eventos futuros que no han ocurrido.", "ansiedad"],
    ["Luis experimenta palpitaciones y falta de aire ante situaciones sociales mínimas.", "ansiedad"]
  ]

enunciado: "En el caso de {casos[caso_idx][0]}, el síntoma principal es un cuadro de {casos[caso_idx][1]}."

respuesta: "ansiedad"
tipo: completar
respuestas_validas: ["ansiedad"]

explicacion: |
  La ansiedad se caracteriza por una preocupación excesiva, persistente y desproporcionada ante situaciones que no representan un peligro real o inmediato.
```

### 2 — Depresión y funcionalidad
```
metadata:
  materia: "psicologia"
  tema: "salud_mental_depresion"
  nivel: "intermedio"
  tags: ["depresion", "sintomas"]

variables:
  estado_animo: uno_de(["anhedonia", "irritabilidad"])
  valor_anhedonia: "anhedonia"
  valor_irritabilidad: "irritabilidad"

enunciado: "Si una persona pierde la capacidad de sentir placer por actividades que antes disfrutaba, este síntoma se denomina ___."

respuesta: "anhedonia"
tipo: completar
respuestas_validas: ["anhedonia"]

explicacion: |
  La anhedonia es uno de los síntomas nucleares de la depresión mayor y se refiere a la incapacidad para experimentar placer o interés en actividades previamente gratificantes.
```

### 3 — ¿Cuándo buscar ayuda profesional?
```
metadata:
  materia: "psicologia"
  tema: "salud_mental_pedir_ayuda"
  nivel: "basico"
  tags: ["ayuda_profesional", "bienestar"]

enunciado: "Si los síntomas de tristeza o ansiedad interfieren significativamente con la vida laboral, social o académica de una persona, ¿es recomendable buscar ayuda profesional?"

respuesta: verdadero
tipo: vf

explicacion: |
  La funcionalidad es un criterio clave. Cuando el malestar emocional impide el desarrollo normal de las actividades cotidianas, la intervención profesional es necesaria.
```

### 4 — Proceso de atención en salud mental
```
metadata:
  materia: "psicologia"
  tema: "salud_mental_proceso_ayuda"
  nivel: "intermedio"
  tags: ["proceso", "terapia"]

enunciado: "Ordena los pasos típicos para iniciar un proceso de acompañamiento profesional:"

opciones_explicitas: ["Identificar el malestar", "Buscar un profesional especializado", "Asistir a la primera sesión de evaluación"]

respuesta: ["Identificar el malestar", "Buscar un profesional especializado", "Asistir a la primera sesión de evaluación"]
tipo: ordenar

explicacion: |
  El proceso comienza con la autopercepción del malestar, seguido de la búsqueda activa de un especialista y finalmente el encuentro clínico para el diagnóstico y plan de tratamiento.
```

### 5 — Identificación de síntomas físicos
```
metadata:
  materia: "psicologia"
  tema: "salud_mental_sintomas_fisicos"
  nivel: "basico"
  tags: ["somatización", "ansiedad"]

variables:
  sintoma_fisico: uno_de(["taquicardia", "dolor_estomago"])
  res_taquicardia: "taquicardia"
  res_dolor_estomago: "dolor de estómago"

enunciado: "Una persona con un trastorno de ansiedad generalizada suele presentar síntomas físicos como {uno_de(["taquicardia", "dolor_estomago"])}."

opciones_explicitas: ["taquicardia", "dolor de estómago"]

respuesta: "taquicardia"
tipo: mc

explicacion: |
  La ansiedad activa el sistema nervioso simpático, lo que puede provocar manifestaciones físicas como taquicardia, sudoración o tensión muscular.
```