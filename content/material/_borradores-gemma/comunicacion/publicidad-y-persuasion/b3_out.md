### 1 — Persuasión vs Manipulación
```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "basico"
  tags: ["etica", "definiciones"]

respuesta: falso
tipo: vf

enunciado: "La persuasión se define como el intento de cambiar la actitud o comportamiento de alguien mediante la libertad de elección, mientras que la manipulación implica ocultar información o coaccionar para anular la voluntad del receptor."

explicacion: |
  Es correcto. La diferencia fundamental radica en la transparencia y la libertad de elección. En la persuasión se presentan argumentos para que el sujeto decida; en la manipulación se utiliza el engaño para que no pueda decidir libremente.
```

### 2 — El sesgo de autoridad en la publicidad
```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "intermedio"
  tags: ["sesgos", "psicologia_consumo"]

variables:
  escenario: uno_de([
    ["Un actor vestido de médico recomienda una marca de vitaminas", "autoridad_falsa"],
    ["Un científico real avala la eficacia de un nuevo detergente", "autoridad_real"]
  ])

respuesta: escenario[1][1]
tipo: mc
opciones_explicitas: ["autoridad_falsa", "autoridad_real"]

enunciado: "En el siguiente caso, identifica si se está utilizando un argumento de autoridad legítimo o un sesgo de autoridad:"

pasos:
  - "Observa al personaje en el anuncio."
  - "Analiza si su conocimiento está directamente relacionado con el producto."

explicacion: |
  El uso de figuras de autoridad (como médicos o expertos) es una técnica de persuasión. Se vuelve un error de comunicación o manipulación cuando el experto no tiene competencia real en el área del producto (ej. un actor disfrazado).
```

### 3 — El efecto de la escasez
```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "intermedio"
  tags: ["gatillos_mentales", "escasez"]

respuesta: "¡Solo quedan 3 unidades!"
tipo: completar
respuestas_validas: ["¡Solo quedan 3 unidades!", "Última oportunidad"]

enunciado: "Cuando una marca utiliza frases como '___' para generar una sensación de urgencia y forzar la decisión de compra, está aplicando la técnica de la escasez."

explicacion: |
  La escasez (real o percibida) activa un mecanismo de aversión a la pérdida, lo que impulsa al consumidor a actuar rápidamente para no perder la oportunidad.
```

### 4 — Secuencia de un mensaje persuasivo
```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "avanzado"
  tags: ["estructura", "modelo_aida"]

respuesta: ["Atención", "Interés", "Deseo", "Acción"]
tipo: ordenar
opciones_explicitas: ["Deseo", "Acción", "Atención", "Interés"]

enunciado: "Ordena correctamente las etapas del modelo AIDA, el esquema clásico de comunicación publicitaria para guiar al consumidor:"

explicacion: |
  El modelo AIDA sigue una progresión lógica: primero se capta la _Atención_, luego se genera _Interés_ por el beneficio, se crea el _Deseo_ de posesión y finalmente se provoca la _Acción_ (compra).
```

### 5 — El error de la sobrecarga informativa
```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "intermedio"
  tags: ["ruido", "efectividad"]

respuesta: "paradoja de la elección"
tipo: completar
respuestas_validas: ["paradoja de la elección", "sobrecarga cognitiva"]

enunciado: "Un error común en la publicidad es presentar demasiadas opciones de un mismo producto; esto puede causar que el consumidor se sienta abrumado, fenómeno conocido como la ___."

explicacion: |
  La 'paradoja de la elección' sugiere que, aunque tener opciones parece bueno, un exceso de ellas aumenta la ansiedad y la probabilidad de que el cliente no compre nada por miedo a equivocarse.
```