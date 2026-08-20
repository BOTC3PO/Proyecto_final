### 1 — El Elevator Pitch
```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "basico"
  tags: ["pitch", "elevator_pitch", "comunicacion"]

variables:
  escenario: uno_de([["Software de gestión de residuos para PYMES", "resolver el problema de la logística de reciclaje"], ["App de delivery de productos locales", "conectar productores con consumidores finales"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas: [escenario[idx][1]]

enunciado: "En un elevator pitch, después de presentar el problema, el emprendedor debe presentar la propuesta de valor para {escenario[idx][0]} con el fin de {escenario[idx][1]}."

explicacion: |
  El objetivo del pitch es conectar el problema detectado con la solución específica que ofrece tu modelo de negocio de forma rápida.
```

### 2 — El Gancho (The Hook)
```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["hook", "atencion", "inversores"]

variables:
  caso: uno_de([["Una startup de biotecnología", "revolucionar la medicina preventiva"], ["Una fintech de microcréditos", "democratizar el acceso al capital"]])
  idx: uno_de([0, 1])

respuesta: "revolucionar la medicina preventiva"
tipo: mc
opciones_explicitas: ["revolucionar la medicina preventiva", "ganar dinero rápido", "crear empleos masivos", "dominar el mercado global"]

enunciado: "Si estás presentando un caso de {caso[idx][0]}, un buen 'hook' debería enfocarse en la misión de {caso[idx][1]} para captar el interés emocional del inversor."

explicacion: |
  Un buen gancho no se trata solo de rentabilidad, sino del impacto o la transformación que la idea genera en el mercado.
```

### 3 — Validación de la Propuesta
```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["validacion", "traction", "datos"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es fundamental presentar métricas de tracción (como usuarios activos o ingresos mensuales) durante el pitch para demostrar que el modelo de negocio es escalable y validado?"

explicacion: |
  Los inversores buscan evidencia de que el mercado realmente quiere el producto (Product-Market Fit), y las métricas son la prueba de ello.
```

### 4 — Estructura del Pitch Deck
```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["pitch_deck", "orden", "estructura"]

respuesta: ["Problema", "Solución", "Modelo de Negocio", "Tracción", "Equipo", "El Pedido"]
tipo: ordenar
opciones_explicitas: ["Problema", "Solución", "Modelo de Negocio", "Tracción", "Equipo", "El Pedido"]

enunciado: "Ordena los elementos esenciales de un Pitch Deck efectivo para asegurar un flujo narrativo lógico que lleve al inversor hacia la llamada a la acción."

explicacion: |
  La narrativa debe ir de la necesidad (Problema) a la ejecución (Solución/Modelo/Tracción/Equipo) y finalizar con lo que necesitas (El Pedido/Ask).
```

### 5 — El "Ask" o Pedido de Inversión
```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["ask", "funding", "financiamiento"]

variables:
  datos: [["500.000 USD", "expandir operaciones", "18 meses"], ["200.000 USD", "desarrollo de producto", "12 meses"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: [datos[idx][1]]

enunciado: "Al presentar el 'Ask' en el pitch, no basta con decir cuánto dinero necesitas; es crucial especificar que el objetivo es {datos[idx][1]} en un plazo de {datos[idx][2]}."

explicacion: |
  Un inversor no solo pone dinero; compra una parte de tu visión. Debe saber exactamente en qué se usará cada centavo y qué hitos se alcanzarán con ello.
```