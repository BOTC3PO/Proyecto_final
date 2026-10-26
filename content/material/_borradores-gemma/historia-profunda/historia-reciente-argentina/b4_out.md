### 1 — El rigor metodológico en la historia reciente
```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "intermedio"
  tags: ["metodologia", "fuentes", "pensamiento_critico"]

respuesta: "multicausalidad"
tipo: completar
respuestas_validas: ["multicausalidad"]

enunciado: "Para evitar que el estudio de la historia reciente se convierta en un mero relato emocional o de opinión, el historiador debe aplicar el principio de __________, reconociendo que los procesos sociales no responden a una única causa aislada."

explicacion: |
  El análisis histórico profesional exige la multicausalidad: entender que un fenómeno es el resultado de múltiples factores (económicos, políticos, sociales, culturales) interactuando entre sí, evitando explicaciones simplistas o unidimensionales.
```

### 2 — El valor de la evidencia documental
```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "basico"
  tags: ["fuentes", "evidencia"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [
    ["un testimonio oral sin contrastar", "un relato basado solo en la memoria emocional"],
    ["un documento desclasificado con datos objetivos", "una evidencia contrastada mediante múltiples fuentes"]
  ]
  respuestas: [
    ["relato subjetivo", "evidencia científica"],
    ["relato subjetivo", "evidencia científica"]
  ]

respuesta: escenarios[caso_idx][1]
tipo: mc
opciones_explicitas: ["relato subjetivo", "evidencia científica"]

enunciado: "Si un investigador busca construir conocimiento histórico riguroso sobre la última dictadura militar, debe priorizar el uso de: {escenarios[caso_idx][1]} sobre {escenarios[caso_idx][0]}."

explicacion: |
  La historia científica se construye sobre la evidencia y el contraste de fuentes, no sobre la validación de una única perspectiva subjetiva, garantizando la objetividad del proceso de investigación.
```

### 3 — Componentes del análisis crítico
```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "avanzado"
  tags: ["metodologia", "critica"]

respuesta: ["análisis de fuentes", "contextualización", "contraste de evidencias", "evitar el anacronismo"]
tipo: ordenar
opciones_explicitas: ["análisis de fuentes", "contextualización", "contraste de evidencias", "evitar el anacronismo"]

enunciado: "Ordene los pasos lógicos para abordar un proceso histórico reciente desde una perspectiva académica y crítica:"

explicacion: |
  El método histórico requiere primero identificar las fuentes, luego entender el contexto en que se produjeron, contrastar la información para verificar veracidad y, finalmente, evitar juzgar el pasado con valores exclusivamente actuales (anacronismo).
```

### 4 — La trampa del relato emocional
```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "intermedio"
  tags: ["subjetividad", "metodologia"]

respuesta: falso
tipo: vf

enunciado: "¿Es metodológicamente correcto validar una tesis histórica sobre la historia reciente basándose exclusivamente en la intensidad emocional de un testimonio, prescindiendo del análisis de otras fuentes?"

explicacion: |
  Falso. La emoción es un componente válido para entender la subjetividad de los actores, pero la construcción del conocimiento histórico requiere la validación de la evidencia y la pluralidad de fuentes para evitar el sesgo.
```

### 5 — El rol de la multicausalidad
```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "avanzado"
  tags: ["causalidad", "complejidad"]

variables:
  factor_idx: uno_de([0, 1])
  factores: [
    ["político", "económico"],
    ["social", "cultural"]
  ]
  causas: [
    ["causa única", "causa compleja"],
    ["causa única", "causa compleja"]
  ]

respuesta: causas[factor_idx][1]
tipo: mc
opciones_explicitas: ["causa única", "causa compleja"]

enunciado: "Al estudiar la crisis de las instituciones democráticas en la Argentina de los años 70, un historiador crítico busca identificar una causa _______, integrando factores como el {factores[factor_idx][0]} y el {factores[factor_idx][1]}."

explicacion: |
  La historia no es una sucesión de eventos causados por un solo factor; es un tejido complejo donde factores políticos, económicos y sociales se entrelazan, exigiendo un análisis de causalidad múltiple.
```