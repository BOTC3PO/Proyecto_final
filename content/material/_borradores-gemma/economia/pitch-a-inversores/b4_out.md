### 1 — Pitch vs Business Plan
```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "basico"
  tags: ["pitch", "business_plan", "inversion"]

respuesta: "Pitch"
tipo: completar
respuestas_validas: ["Pitch"]

enunciado: "Mientras que el Business Plan es un documento detallado y extenso que describe la estrategia a largo plazo, el ___ es una presentación breve diseñada para captar la atención inmediata del inversor."

explicacion: |
  El Pitch es una herramienta de comunicación rápida y persuasiva, mientras que el Business Plan es un documento operativo y estratégico exhaustivo.
```

### 2 — El objetivo del Pitch
```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "basico"
  tags: ["objetivo", "pitch", "inversion"]

variables:
  es_correcto: falso

respuesta: falso
tipo: vf

enunciado: "¿El objetivo principal de un Pitch es presentar todos los detalles técnicos y financieros de la empresa para cerrar la inversión en ese mismo instante?"

explicacion: |
  Falso. El objetivo de un Pitch no es cerrar la inversión, sino conseguir la siguiente reunión o mostrar suficiente interés para avanzar en el proceso de Due Diligence.
```

### 3 — Elementos de un Pitch Deck
```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["pitch_deck", "estructura"]

variables:
  idx: uno_de([0, 1, 2])
  escenario: [
    ["Problema", "Solución", "Modelo de Negocio", "Equipo", "Mercado"],
    ["Problema", "Propuesta de Valor", "Modelo de Negocio", "Tracción", "Equipo"],
    ["Problema", "Solución", "Modelo de Negocio", "Competencia", "Equipo"]
  ]
  respuesta_correcta: [
    "Solución",
    "Propuesta de Valor",
    "Solución"
  ]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Solución", "Propuesta de Valor", "Competencia", "Equipo"]

enunciado: "En un Pitch Deck efectivo, después de presentar el {escenario[idx][0]}, el siguiente elemento clave debe ser la {escenario[idx][1]}."

explicacion: |
  La secuencia lógica de un pitch busca validar que el problema identificado tiene una solución clara y viable antes de pasar a cómo se gana dinero.
```

### 4 — Elevator Pitch vs Pitch Deck
```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["elevator_pitch", "pitch_deck"]

respuesta: "Elevator Pitch"
tipo: completar
respuestas_validas: ["Elevator Pitch"]

enunciado: "La principal diferencia es la duración y el soporte: mientras que un Pitch Deck es una presentación visual apoyada en diapositivas, el ___ es un discurso verbal de pocos segundos, similar a lo que se diría en un ascensor."

explicacion: |
  El Elevator Pitch es una versión ultra-resumida y verbal, centrada en despertar curiosidad, mientras que el Pitch Deck es una narrativa estructurada con soporte visual.
```

### 5 — Secuencia de un Pitch Ganador
```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["estructura", "storytelling"]

respuesta: ["Problema", "Solución", "Modelo de Negocio", "Tracción", "Llamado a la acción"]
tipo: ordenar
opciones_explicitas: ["Problema", "Solución", "Modelo de Negocio", "Tracción", "Llamado a la acción"]

enunciado: "Ordena los elementos de un pitch de alto impacto siguiendo la lógica de narrativa de ventas (Storytelling):"

pasos:
  - "Identificar la necesidad del mercado"
  - "Presentar cómo se resuelve"
  - "Explicar cómo se monetiza"
  - "Mostrar pruebas de que funciona"
  - "Indicar qué se necesita del inversor"

explicacion: |
  Un buen pitch debe seguir un arco narrativo: Dolor (Problema) -> Alivio (Solución) -> Viabilidad (Modelo) -> Validación (Tracción) -> Cierre (Call to Action).
```