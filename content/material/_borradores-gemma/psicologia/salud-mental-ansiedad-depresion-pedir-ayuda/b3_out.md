### 1 — ¿Tristeza o Depresión?
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

### 2 — Mitos sobre la Ansiedad
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

### 3 — Señales de alerta
```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "intermedio"
  tags: ["ayuda_profesional", "señales_alerta"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  escenarios: [
    ["perder el interés en hobbies que antes disfrutaba", "anhedonia"],
    ["sentir un cansancio extremo sin causa física", "fatiga"],
    ["alteraciones constantes en el patrón de sueño", "insomnio"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: "mc"
opciones_explicitas: ["perder el interés en hobbies que antes disfrutaba", "anhedonia", "sentir un cansancio extremo sin causa física", "fatiga", "alteraciones constantes en el patrón de sueño", "insomnio"]

enunciado: "Uno de los indicadores de que es momento de buscar ayuda profesional es cuando se presenta: ___."

explicacion: |
  La pérdida de placer o interés (anhedonia), la fatiga persistente o los cambios en el sueño son señales de alerta que indican que el malestar ha pasado de ser transitorio a ser un síntoma clínico.
```

### 4 — El proceso de pedir ayuda
```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "basico"
  tags: ["ayuda_profesional", "pasos"]

respuesta: ["identificar_malestar", "buscar_profesional", "iniciar_terapia"]
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

### 5 — ¿Cuándo acudir al profesional?
```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "intermedio"
  tags: ["ayuda_profesional", "criterios"]

respuesta: "interferir"
tipo: "completar"
respuestas_validas: ["interferir", "afectar", "obstaculizar"]

enunciado: "El criterio clínico principal para determinar si un malestar emocional requiere intervención profesional es cuando los síntomas comienzan a ___ significativamente en las áreas de funcionamiento diario (social, laboral o académico)."

explicacion: |
  No es necesario esperar a estar en una crisis extrema para pedir ayuda. Si el malestar impide que la persona cumpla con sus responsabilidades o disfrute de su vida, la intervención es recomendada.
```