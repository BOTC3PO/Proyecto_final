### 1 — El concepto de Pitch
```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "basico"
  tags: ["vocabulario", "fundamentos"]

respuesta: "elevator_pitch"
tipo: completar
respuestas_validas: ["elevator_pitch", "elevator pitch"]

enunciado: "La técnica de presentar una idea de negocio de forma extremadamente breve, como si se tuviera solo el tiempo que dura un viaje en ascensor, se denomina ___."

explicacion: |
  El 'elevator pitch' es una herramienta de comunicación diseñada para transmitir la esencia de un proyecto en menos de 60 segundos, captando el interés de un potencial inversor.
```

### 2 — El objetivo del Pitch
```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "basico"
  tags: ["objetivo", "inversion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[ "conseguir una reunión", "vender el producto directamente" ], [ "generar interés", "obtener la firma del contrato en el momento" ]]

respuesta: escenarios[escenario_idx][0]
tipo: mc
opciones_explicitas: ["conseguir una reunión", "vender el producto directamente", "generar interés", "obtener la firma del contrato en el momento"]

enunciado: "En un pitch inicial ante un inversor de capital de riesgo, el objetivo principal suele ser {escenarios[escenario_idx][1]}."

explicacion: |
  Un pitch no busca cerrar la inversión en ese instante, sino despertar curiosidad suficiente para obtener una segunda reunión de análisis profundo (due diligence).
```

### 3 — El problema y la solución
```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["estructura", "propuesta_de_valor"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es fundamental que un pitch identifique claramente un 'pain point' (punto de dolor) o problema real en el mercado para que la solución propuesta tenga sentido?"

explicacion: |
  Sin un problema validado, la solución es solo una idea sin demanda. El inversor busca negocios que resuelvan necesidades reales y cuantificables.
```

### 4 — Componentes de un Pitch Deck
```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["estructura", "orden"]

respuesta: ["Problema", "Solución", "Modelo de Negocio", "Tracción"]
tipo: ordenar
opciones_explicitas: ["Problema", "Solución", "Modelo de Negocio", "Tracción", "Equipo", "Competencia"]

enunciado: "Ordena los siguientes elementos de un Pitch Deck según una estructura lógica de narrativa de negocios (storytelling):"

pasos:
  - "Identificar la necesidad"
  - "Presentar la propuesta"
  - "Explicar cómo se gana dinero"
  - "Mostrar resultados actuales"

explicacion: |
  Una narrativa efectiva comienza con el problema, presenta la solución, explica la monetización y finalmente demuestra que el modelo ya está funcionando (tracción).
```

### 5 — El concepto de Scalability
```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["terminologia", "escalabilidad"]

respuesta: "escalabilidad"
tipo: completar
respuestas_validas: ["escalabilidad", "scalability"]

enunciado: "La capacidad de un modelo de negocio para aumentar sus ingresos de forma exponencial mientras sus costes crecen de forma lineal se conoce como ___."

explicacion: |
  La escalabilidad es el factor crítico para los inversores de Venture Capital, ya que permite retornos masivos sobre la inversión inicial.
```