### 1 — El Elevator Pitch efectivo
```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "basico"
  tags: ["pitch", "comunicacion", "emprendimiento"]

variables:
  escenario: uno_de([
    ["Problema: La gente pierde tiempo buscando estacionamiento.", "Solución: App de reserva de espacios privados.", "Propuesta: App de parking inteligente."],
    ["Problema: El desperdicio de comida en restaurantes.", "Solución: Marketplace de excedentes de comida.", "Propuesta: App de rescate gastronómico."],
    ["Problema: La dificultad de encontrar tutores de idiomas.", "Solución: Conexión instantánea por video.", "Propuesta: Plataforma de micro-learning."]
  ])

respuesta: escenario[2][2]
tipo: mc
opciones_explicitas: ["App de parking inteligente", "App de rescate gastronómico", "Plataforma de micro-learning", "Solución de logística rápida"]

enunciado: "Para que un Elevator Pitch sea efectivo, debe centrarse en la {escenario[2][2]}. ¿Cuál de estas opciones representa mejor el enfoque de la propuesta de valor?"

explicacion: |
  Un pitch efectivo debe comunicar la solución de forma directa y concisa, permitiendo que el inversor entienda el núcleo del negocio en pocos segundos.
```

### 2 — Elementos de un Pitch Deck
```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["pitch_deck", "estructura", "inversion"]

variables:
  orden_logico: ["Problema", "Solución", "Modelo de Negocio", "Tracción", "Equipo", "The Ask"]

respuesta: orden_logico
tipo: ordenar

enunciado: "Un inversor busca una narrativa coherente. Ordena los siguientes elementos de un Pitch Deck en el orden lógico recomendado para construir una historia convincente:"

pasos:
  - "Identificar el dolor del mercado."
  - "Presentar cómo tu producto resuelve ese dolor."
  - "Explicar cómo vas a ganar dinero."
  - "Mostrar métricas actuales que validen el interés."
  - "Presentar a las personas que ejecutan la idea."
  - "Indicar cuánto capital necesitas y para qué."

explicacion: |
  La estructura narrativa (Storytelling) debe llevar al inversor desde el problema (dolor) hasta la oportunidad de negocio (tracción) y finalmente la necesidad de capital (The Ask).
```

### 3 — Validación de mercado (TAM, SAM, SOM)
```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["mercado", "tam", "som", "metricas"]

variables:
  datos: [
    [1000000, 500000, 50000],
    [5000000, 2000000, 100000],
    [2500000, 1000000, 250000]
  ]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][2]
tipo: input
tolerancia_abs: 0

enunciado: "En el análisis de mercado para un pitch, si el mercado total (TAM) es de ${datos[idx][0]}, el mercado que puedes alcanzar con tu modelo de servicio (SAM) es de ${datos[idx][1]}, ¿cuál es el tamaño de tu mercado objetivo real (SOM) que puedes capturar a corto plazo?"

explicacion: |
  El SOM (Serviceable Obtainable Market) es la parte del SAM que tu empresa puede capturar de manera realista con sus recursos actuales.
```

### 4 — El concepto de "Traction"
```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["traction", "validacion", "metricas"]

respuesta: verdadero
tipo: vf

enunciado: "Si un emprendedor presenta en su pitch que tiene un crecimiento mensual del 20% en usuarios activos (MoM) y una tasa de retención constante, está demostrando 'Traction' (Tracción), lo cual reduce el riesgo percibido por el inversor."

explicacion: |
  La tracción es la evidencia de que el mercado está respondiendo positivamente a tu producto, lo cual es uno de los puntos más críticos en un pitch.
```

### 5 — La pregunta del "Ask"
```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["ask", "financiamiento", "equity"]

variables:
  escenario_financiero: [
    ["$500,000", "15%", "Desarrollo de producto y marketing"],
    ["$1,000,000", "10%", "Expansión internacional y ventas"],
    ["$250,000", "5%", "Contratación de equipo técnico"]
  ]
  idx: uno_de([0, 1, 2])

respuesta: escenario_financiero[idx][0]
tipo: completar

enunciado: "En la última diapositiva, el emprendedor debe ser claro con el 'Ask'. Si el emprendedor busca una inversión de ${escenario_financiero[idx][0]} a cambio de un ${escenario_financiero[idx][1]} de participación, el objetivo principal de ese capital según su plan es: ___."

pasos:
  - "Identificar el monto solicitado."
  - "Identificar el porcentaje de equity ofrecido."
  - "Identificar el uso de fondos (Use of Funds)."

explicacion: |
  El 'Ask' no solo debe decir cuánto dinero necesitas, sino también cuánto de la empresa estás dispuesto a ceder y, crucialmente, en qué se va a gastar ese dinero para generar retorno.
```