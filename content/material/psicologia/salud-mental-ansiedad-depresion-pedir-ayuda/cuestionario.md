# Psicologia — Salud mental ansiedad depresion pedir ayuda (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Conceptos básicos de la ansiedad

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "basico"
  tags: ["ansiedad", "conceptos"]

respuesta: "estado_de_alerta"
tipo: completar
respuestas_validas:
  - "estado_de_alerta"
  - "reaccion_de_miedo"

enunciado: "La ansiedad se caracteriza por ser un ___ constante ante situaciones que no representan un peligro real."

explicacion: |
  La ansiedad es una respuesta natural de supervivencia, pero cuando se vuelve desproporcionada o persistente, se convierte en un trastorno que interfiere con la vida cotidiana.
```

### 2 — Identificación de síntomas

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "basico"
  tags: ["sintomas", "depresion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["anhedonia", "apatía"], ["insomnio", "fatiga"]]

respuesta: uno_de(["verdadero", "falso"])
tipo: completar
enunciado: "La pérdida de interés en actividades que antes resultaban placenteras, conocida como anhedonia, es un síntoma central de la depresión."

explicacion: |
  La anhedonia es la incapacidad para sentir placer o interés, un indicador clave en los cuadros depresivos.
```

### 3 — Cuándo buscar ayuda

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "intermedio"
  tags: ["ayuda_profesional", "criterios"]

respuesta: "interferencia_vida_diaria"
tipo: mc
opciones_explicitas: ["cambio_de_humor_temporal", "interferencia_vida_diaria", "estres_laboral_comun"]

enunciado: "El criterio principal para considerar que un malestar emocional requiere ayuda profesional es la ___."

explicacion: |
  Aunque el estrés es normal, cuando las emociones impiden realizar tareas básicas (comer, dormir, trabajar, socializar), es momento de consultar a un profesional.
```

### 4 — Ciclo de la ansiedad

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "intermedio"
  tags: ["ciclo_ansiedad", "comportamiento"]

respuesta_orden: ["pensamiento_catastrofico", "reaccion_fisica", "conducta_de_evitacion"]
tipo: ordenar

opciones_explicitas: ["pensamiento_catastrofico", "reaccion_fisica", "conducta_de_evitacion"]

enunciado: "Ordena la secuencia típica de un episodio de crisis de ansiedad:"

pasos:
  - "Se identifica una amenaza percibida."
  - "Se manifiestan taquicardia o falta de aire."
  - "Se evita el lugar o la situación para reducir el malestar."

explicacion: |
  El ciclo suele comenzar con un pensamiento intrusivo, seguido de una respuesta fisiológica y culminando en la evitación, lo cual refuerza el trastorno a largo plazo.
```

### 5 — Mitos de la salud mental

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "basico"
  tags: ["mitos", "salud_mental"]

respuesta: falso
tipo: vf

enunciado: "La depresión es simplemente una tristeza profunda que se cura con 'echarle ganas' o voluntad propia."

explicacion: |
  La depresión es una condición clínica que involucra desequilibrios neuroquímicos y factores psicológicos; no se resuelve únicamente con voluntad.
```

### 6 — Señales de alerta en la ansiedad

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad"
  nivel: "basico"
  tags: ["ansiedad", "señales_alerta"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Ana siente una preocupación constante por eventos futuros que no han ocurrido.", "ansiedad"], ["Luis experimenta palpitaciones y falta de aire ante situaciones sociales mínimas.", "ansiedad"]]

enunciado: "En el caso de {casos[caso_idx][0]}, el síntoma principal es un cuadro de {casos[caso_idx][1]}."

respuesta: "ansiedad"
tipo: completar
respuestas_validas:
  - "ansiedad"

explicacion: |
  La ansiedad se caracteriza por una preocupación excesiva, persistente y desproporcionada ante situaciones que no representan un peligro real o inmediato.
```

### 7 — Depresión y funcionalidad

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
respuestas_validas:
  - "anhedonia"

explicacion: |
  La anhedonia es uno de los síntomas nucleares de la depresión mayor y se refiere a la incapacidad para experimentar placer o interés en actividades previamente gratificantes.
```

### 8 — ¿Cuándo buscar ayuda profesional?

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

### 9 — Proceso de atención en salud mental

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_proceso_ayuda"
  nivel: "intermedio"
  tags: ["proceso", "terapia"]

enunciado: "Ordena los pasos típicos para iniciar un proceso de acompañamiento profesional:"

opciones_explicitas: ["Identificar el malestar", "Buscar un profesional especializado", "Asistir a la primera sesión de evaluación"]

respuesta_orden: ["Identificar el malestar", "Buscar un profesional especializado", "Asistir a la primera sesión de evaluación"]
tipo: ordenar

explicacion: |
  El proceso comienza con la autopercepción del malestar, seguido de la búsqueda activa de un especialista y finalmente el encuentro clínico para el diagnóstico y plan de tratamiento.
```

### 10 — Identificación de síntomas físicos

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

enunciado: "Una persona con un trastorno de ansiedad generalizada suele presentar síntomas físicos como {sintoma_fisico}."

opciones_explicitas: ["taquicardia", "dolor de estómago"]

respuesta: uno_de(["taquicardia", "dolor de estómago"])
tipo: mc

explicacion: |
  La ansiedad activa el sistema nervioso simpático, lo que puede provocar manifestaciones físicas como taquicardia, sudoración o tensión muscular.
```

### 11 — ¿Tristeza o Depresión?

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "basico"
  tags: ["depresion", "emociones", "salud_mental"]

respuesta: "patologia"
tipo: "mc"
opciones_explicitas: ["emocion_natural", "patologia"]

enunciado: "Sentir tristeza profunda ante una pérdida significativa es una respuesta emocional normal, pero cuando esta persistencia interfiere con la vida cotidiana, deja de ser una emoción natural para convertirse en una ___."

explicacion: |
  Es fundamental distinguir entre el duelo o la tristeza situacional y un trastorno depresivo. La diferencia radica en la intensidad, la duración y, sobre todo, la capacidad de la persona para retomar sus actividades normales.
```

### 12 — Mitos sobre la Ansiedad

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "basico"
  tags: ["ansiedad", "mitos"]

respuesta: falso
tipo: "vf"

enunciado: "La ansiedad es simplemente un exceso de preocupación que se puede controlar únicamente con 'echarle ganas' o voluntad propia."

explicacion: |
  Falso. Los trastornos de ansiedad involucran respuestas neurobiológicas y fisiológicas que no se resuelven solo con voluntad. Requieren herramientas terapéuticas y, en ocasiones, abordaje farmacológico.
```

### 13 — Señales de alerta

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "intermedio"
  tags: ["ayuda_profesional", "señales_alerta"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  escenarios: [["perder el interés en hobbies que antes disfrutaba", "anhedonia"], ["sentir un cansancio extremo sin causa física", "fatiga"], ["alteraciones constantes en el patrón de sueño", "insomnio"]]

respuesta: escenarios[escenario_idx][1]
tipo: "mc"
opciones_explicitas: ["perder el interés en hobbies que antes disfrutaba", "anhedonia", "sentir un cansancio extremo sin causa física", "fatiga", "alteraciones constantes en el patrón de sueño", "insomnio"]

enunciado: "Uno de los indicadores de que es momento de buscar ayuda profesional es cuando se presenta: ___."

explicacion: |
  La pérdida de placer o interés (anhedonia), la fatiga persistente o los cambios en el sueño son señales de alerta que indican que el malestar ha pasado de ser transitorio a ser un síntoma clínico.
```

### 14 — El proceso de pedir ayuda

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "basico"
  tags: ["ayuda_profesional", "pasos"]

respuesta_orden: ["identificar_malestar", "buscar_profesional", "iniciar_terapia"]
tipo: "ordenar"
opciones_explicitas: ["identificar_malestar", "buscar_profesional", "iniciar_terapia"]

enunciado: "Ordena los pasos lógicos para abordar un problema de salud mental de forma efectiva:"

pasos:
  - "Reconocer que algo en nuestro estado de ánimo no es habitual."
  - "Contactar a un psicólogo o psiquiatra capacitado."
  - "Asistir a las sesiones y trabajar en el proceso terapéutico."

explicacion: |
  El primer paso es la autopercepción (conciencia del problema), seguido de la acción externa (búsqueda de ayuda) y finalmente el compromiso con el tratamiento.
```

### 15 — ¿Cuándo acudir al profesional?

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "intermedio"
  tags: ["ayuda_profesional", "criterios"]

respuesta: "interferir"
tipo: "completar"
respuestas_validas:
  - "interferir"
  - "afectar"
  - "obstaculizar"

enunciado: "El criterio clínico principal para determinar si un malestar emocional requiere intervención profesional es cuando los síntomas comienzan a ___ significativamente en las áreas de funcionamiento diario (social, laboral o académico)."

explicacion: |
  No es necesario esperar a estar en una crisis extrema para pedir ayuda. Si el malestar impide que la persona cumpla con sus responsabilidades o disfrute de su vida, la intervención es recomendada.
```

### 16 — Diferencia entre Tristeza y Depresión

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "basico"
  tags: ["emociones", "diagnostico"]

tipo: mc
opciones_explicitas: ["La tristeza es una emoción pasajera ante un evento, mientras que la depresión es un trastorno persistente que afecta la funcionalidad.", "La tristeza es un trastorno clínico y la depresión es una reacción normal.", "No existe diferencia entre ambas, son sinónimos.", "La tristeza es crónica y la depresión es aguda."]
respuesta: "La tristeza es una emoción pasajera ante un evento, mientras que la depresión es un trastorno persistente que afecta la funcionalidad."
enunciado: "¿Cuál es la principal distinción clínica entre experimentar tristeza y padecer un cuadro depresivo?"
explicacion: |
  La tristeza es una respuesta emocional natural y transitoria ante la pérdida o el desengaño. La depresión es un trastorno que se caracteriza por la persistencia de síntomas (como anhedonia o apatía) y una interferencia significativa en la vida cotidiana del individuo.
```

### 17 — El concepto de Ansiedad vs. Miedo

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "intermedio"
  tags: ["ansiedad", "miedo"]

tipo: vf

enunciado: "El miedo es una respuesta ante una amenaza real e inmediata, mientras que la ansiedad es una respuesta ante una amenaza futura o imaginaria."

respuesta: verdadero

explicacion: |
  El miedo es una respuesta biológica de supervivencia ante un peligro presente. La ansiedad, en cambio, implica una anticipación de un peligro que aún no ha ocurrido o que es incierto, caracterizándose por la preocupación excesiva.
```

### 18 — Señales de alerta para buscar ayuda

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "basico"
  tags: ["prevencion", "ayuda_profesional"]

variables:
  escenario_idx: uno_de([0, 1])
  casos: [["Dificultad para dormir y pérdida de interés en hobbies por más de dos semanas", "Buscar ayuda profesional"], ["Sentir nerviosismo antes de un examen importante", "Observar la evolución sin intervención inmediata"]]

tipo: completar

enunciado: "Si una persona experimenta {casos[escenario_idx][0]}, la acción recomendada es ___."

respuestas_validas:
  - "Buscar ayuda profesional"
  - "Observar la evolución sin intervención inmediata"
respuesta: casos[escenario_idx][1]

explicacion: |
  Cuando los síntomas interfieren con la capacidad de la persona para realizar sus actividades diarias (trabajo, estudio, relaciones) de forma sostenida en el tiempo, es fundamental consultar con un profesional de la salud mental.
```

### 19 — Componentes de un episodio de crisis

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "intermedio"
  tags: ["crisis", "ansiedad"]

tipo: ordenar

opciones_explicitas: ["Disparador o estresor", "Pensamientos catastróficos", "Síntomas físicos (taquicardia, sudoración)", "Conductas de evitación"]

enunciado: "Ordena la secuencia típica de un ciclo de respuesta ante la ansiedad ante un estresor:"

respuesta_orden: ["Disparador o estresor", "Pensamientos catastróficos", "Síntomas físicos (taquicardia, sudoración)", "Conductas de evitación"]

explicacion: |
  El ciclo suele comenzar con un estímulo (estresor), seguido de una interpretación cognitiva distorsionada (pensamiento catastrófico), que desencadena la respuesta fisiológica (síntomas físicos) y finalmente una estrategia de afrontamiento mal adaptativa (evitación).
```

### 20 — Síntoma distintivo de la depresión

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "intermedio"
  tags: ["sintomatologia", "depresion"]

tipo: mc
opciones_explicitas: ["Anhedonia (incapacidad de sentir placer)", "Hiperventilación", "Aumento de la energía física", "Foco excesivo en el presente"]
respuesta: "Anhedonia (incapacidad de sentir placer)"

enunciado: "¿Qué síntoma es característico de la depresión y ayuda a distinguirla de otros estados de ánimo bajos?"

explicacion: |
  La anhedonia, definida como la pérdida de la capacidad de experimentar placer en actividades que antes eran gratificantes, es uno de los criterios diagnósticos centrales para los trastornos depresivos.
```

### 21 — Identificación de síntomas de ansiedad

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad"
  nivel: "basico"
  tags: ["ansiedad", "sintomas"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Ana siente palpitaciones, falta de aire y un miedo constante a que algo malo suceda sin razón aparente.", "ansiedad"], ["Luis evita ir a reuniones sociales porque siente que todos lo están juzgando y tiene sudoración excesiva.", "ansiedad"]]

enunciado: "En el caso de {escenarios[escenario_idx][0]}, la persona está experimentando síntomas característicos de: ___"

respuestas_validas:
  - "ansiedad"
  - "depresión"
  - "estrés"
respuesta: escenarios[escenario_idx][1]
tipo: completar

explicacion: |
  Los síntomas físicos (palpitaciones) y cognitivos (miedo constante) descritos son indicadores comunes de un cuadro de ansiedad.
```

### 22 — Reconocimiento de la depresión

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_depresion"
  nivel: "intermedio"
  tags: ["depresion", "anhedonia"]

variables:
  caso_idx: uno_de([0, 1, 2])
  casos: [["Pedro ya no disfruta jugar al fútbol, algo que antes le apasionaba.", "anhedonia"], ["María siente una tristeza profunda y falta de energía que dura más de dos semanas.", "depresion"], ["Juan tiene alteraciones constantes en el sueño y pérdida de apetito.", "depresion"]]

enunciado: "Si una persona presenta {casos[caso_idx][0]}, es un indicador clínico que requiere atención profesional."

respuestas_validas:
  - "anhedonia"
  - "euforia"
  - "estrés"
respuesta: casos[caso_idx][1]
tipo: completar

explicacion: |
  La incapacidad para sentir placer en actividades que antes eran gratificantes se conoce como anhedonia, un síntoma clave en la depresión.
```

### 23 — Cuándo buscar ayuda profesional

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ayuda"
  nivel: "intermedio"
  tags: ["ayuda_profesional", "bienestar"]

enunciado: "¿Es correcto buscar ayuda profesional si los problemas emocionales interfieren con la vida cotidiana (trabajo, estudios, relaciones)?"

respuestas_validas:
  - "verdadero"
  - "falso"
respuesta: verdadero
tipo: vf

explicacion: |
  La funcionalidad es un criterio clave. Si el malestar impide el desarrollo normal de las actividades diarias, es momento de consultar a un profesional.
```

### 24 — Señales de alerta

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ayuda"
  nivel: "avanzado"
  tags: ["riesgo", "prevencion"]

variables:
  alerta_idx: uno_de([0, 1])
  alertas: [["Pensamientos de autolesión o ideas de muerte.", "riesgo_critico"], ["Aislamiento social extremo y abandono del autocuidado.", "riesgo_critico"]]

enunciado: "Identifica la gravedad de la siguiente señal de alerta: {alertas[alerta_idx][0]}"

opciones_explicitas: ["riesgo_critico", "malestar_leve", "estrés_común"]
respuesta: alertas[alerta_idx][1]
tipo: mc

explicacion: |
  Tanto los pensamientos de autolesión como el abandono total del autocuidado son señales de alerta crítica que requieren intervención inmediata.
```

### 25 — Pasos para el abordaje de la salud mental

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ayuda"
  nivel: "basico"
  tags: ["proceso", "ayuda"]

enunciado: "Ordena los pasos lógicos para abordar un problema de salud mental detectado:"

opciones_explicitas: ["Reconocer el malestar", "Buscar apoyo profesional", "Iniciar tratamiento y seguimiento"]
respuesta_orden: ["Reconocer el malestar", "Buscar apoyo profesional", "Iniciar tratamiento y seguimiento"]
tipo: ordenar

explicacion: |
  El proceso saludable comienza con la autopercepción del malestar, seguido de la búsqueda de un experto y, finalmente, el compromiso con un proceso terapéutico.
```
