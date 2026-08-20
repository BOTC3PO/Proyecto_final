### 1 — Diferencia entre Tristeza y Depresión
```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "basico"
  tags: ["emociones", "diagnostico"]

tipo: mc
opciones_explicitas: ["La tristeza es una emoción pasajera ante un evento, mientras que la depresión es un trastorno persistente que afecta la funcionalidad.", "La tristeza es un trastorno clínico y la depresión es una reacción normal.", "No existe diferencia entre ambas, son sinónimos.", "La tristeza es crónica y la depresión es aguda."]

enunciado: "¿Cuál es la principal distinción clínica entre experimentar tristeza y padecer un cuadro depresivo?"

explicacion: |
  La tristeza es una respuesta emocional natural y transitoria ante la pérdida o el desengaño. La depresión es un trastorno que se caracteriza por la persistencia de síntomas (como anhedonia o apatía) y una interferencia significativa en la vida cotidiana del individuo.
```

### 2 — El concepto de Ansiedad vs. Miedo
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

### 3 — Señales de alerta para buscar ayuda
```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "basico"
  tags: ["prevencion", "ayuda_profesional"]

variables:
  escenario_idx: uno_de([0, 1])
  casos: [
    ["Dificultad para dormir y pérdida de interés en hobbies por más de dos semanas", "Buscar ayuda profesional"],
    ["Sentir nerviosismo antes de un examen importante", "Observar la evolución sin intervención inmediata"]
  ]

tipo: completar

enunciado: "Si una persona experimenta {escenario_idx[0]}, la acción recomendada es {escenario_idx[1]}."

respuestas_validas: ["Buscar ayuda profesional", "Observar la evolución sin intervención inmediata"]
respuesta: "Buscar ayuda profesional"

explicacion: |
  Cuando los síntomas interfieren con la capacidad de la persona para realizar sus actividades diarias (trabajo, estudio, relaciones) de forma sostenida en el tiempo, es fundamental consultar con un profesional de la salud mental.
```

### 4 — Componentes de un episodio de crisis
```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "intermedio"
  tags: ["crisis", "ansiedad"]

tipo: ordenar

opciones_explicitas: ["Disparador o estresor", "Pensamientos catastróficos", "Síntomas físicos (taquicardia, sudoración)", "Conductas de evitación"]

enunciado: "Ordena la secuencia típica de un ciclo de respuesta ante la ansiedad ante un estresor:"

respuesta: ["Disparador o estresor", "Pensamientos catastróficos", "Síntomas físicos (taquicardia, sudoración)", "Conductas de evitación"]

explicacion: |
  El ciclo suele comenzar con un estímulo (estresor), seguido de una interpretación cognitiva distorsionada (pensamiento catastrófico), que desencadena la respuesta fisiológica (síntomas físicos) y finalmente una estrategia de afrontamiento mal adaptativa (evitación).
```

### 5 — Síntoma distintivo de la depresión
```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "intermedio"
  tags: ["sintomatologia", "depresion"]

tipo: mc
opciones_explicitas: ["Anhedonia (incapacidad de sentir placer)", "Hiperventilación", "Aumento de la energía física", "Foco excesivo en el presente"]

enunciado: "¿Qué síntoma es característico de la depresión y ayuda a distinguirla de otros estados de ánimo bajos?"

explicacion: |
  La anhedonia, definida como la pérdida de la capacidad de experimentar placer en actividades que antes eran gratificantes, es uno de los criterios diagnósticos centrales para los trastornos depresivos.
```