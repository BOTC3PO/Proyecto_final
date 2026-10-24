### 1 — Conceptos básicos de la ansiedad
```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "basico"
  tags: ["ansiedad", "conceptos"]

respuesta: "estado_de_alerta"
tipo: completar
respuestas_validas: ["estado_de_alerta", "reaccion_de_miedo"]

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
tipo: vf

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

respuesta: ["pensamiento_catastrofico", "reaccion_fisica", "conducta_de_evitacion"]
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