# Economia — Pitch a inversores (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El concepto de Pitch

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "basico"
  tags: ["vocabulario", "fundamentos"]

respuesta: "elevator_pitch"
tipo: completar
respuestas_validas:
  - "elevator_pitch"
  - "elevator pitch"

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
  escenarios: ["conseguir una reunión", "generar interés"]

respuesta: escenarios[escenario_idx]
tipo: mc
opciones_explicitas: ["conseguir una reunión", "vender el producto directamente", "generar interés", "obtener la firma del contrato en el momento"]

enunciado: "En un pitch inicial ante un inversor de capital de riesgo, ¿cuál suele ser el objetivo principal?"

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

respuesta_orden: ["Problema", "Solución", "Modelo de Negocio", "Tracción"]
tipo: ordenar
opciones_explicitas: ["Problema", "Solución", "Modelo de Negocio", "Tracción"]

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
respuestas_validas:
  - "escalabilidad"
  - "scalability"

enunciado: "La capacidad de un modelo de negocio para aumentar sus ingresos de forma exponencial mientras sus costes crecen de forma lineal se conoce como ___."

explicacion: |
  La escalabilidad es el factor crítico para los inversores de Venture Capital, ya que permite retornos masivos sobre la inversión inicial.
```

### 6 — El Elevator Pitch efectivo

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "basico"
  tags: ["pitch", "comunicacion", "emprendimiento"]

variables:
  idx: uno_de([0, 1, 2])
  problemas: ["La gente pierde tiempo buscando estacionamiento.", "El desperdicio de comida en restaurantes.", "La dificultad de encontrar tutores de idiomas."]
  propuestas: ["App de parking inteligente", "App de rescate gastronómico", "Plataforma de micro-learning"]

respuesta: propuestas[idx]
tipo: mc
opciones_explicitas: ["App de parking inteligente", "App de rescate gastronómico", "Plataforma de micro-learning", "Solución de logística rápida"]

enunciado: "Un pitch aborda el siguiente problema: {problemas[idx]} ¿Cuál de estas opciones representa mejor la propuesta de valor para ese problema?"

explicacion: |
  Un pitch efectivo debe comunicar la solución de forma directa y concisa, permitiendo que el inversor entienda el núcleo del negocio en pocos segundos.
```

### 7 — Elementos de un Pitch Deck

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["pitch_deck", "estructura", "inversion"]

variables:
  orden_logico: ["Problema", "Solución", "Modelo de Negocio", "Tracción", "Equipo", "The Ask"]

respuesta_orden: orden_logico
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
opciones_explicitas: orden_logico
```

### 8 — Validación de mercado (TAM, SAM, SOM)

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["mercado", "tam", "som", "metricas"]

variables:
  datos: [[1000000, 500000, 50000], [5000000, 2000000, 100000], [2500000, 1000000, 250000]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][2]
tipo: completar
tolerancia_abs: 0

enunciado: "En el análisis de mercado para un pitch, si el mercado total (TAM) es de ${datos[idx][0]}, el mercado que puedes alcanzar con tu modelo de servicio (SAM) es de ${datos[idx][1]}, ¿cuál es el tamaño de tu mercado objetivo real (SOM) que puedes capturar a corto plazo?"

explicacion: |
  El SOM (Serviceable Obtainable Market) es la parte del SAM que tu empresa puede capturar de manera realista con sus recursos actuales.
```

### 9 — El concepto de "Traction"

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

### 10 — La pregunta del "Ask"

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["ask", "financiamiento", "equity"]

variables:
  escenario_financiero: [["$500,000", "15%", "Desarrollo de producto y marketing"], ["$1,000,000", "10%", "Expansión internacional y ventas"], ["$250,000", "5%", "Contratación de equipo técnico"]]
  idx: uno_de([0, 1, 2])

respuesta: escenario_financiero[idx][2]
tipo: completar
respuestas_validas:
  - escenario_financiero[idx][2]

enunciado: "En la última diapositiva, el emprendedor debe ser claro con el 'Ask'. Si el emprendedor busca una inversión de ${escenario_financiero[idx][0]} a cambio de un ${escenario_financiero[idx][1]} de participación, el objetivo principal de ese capital según su plan es: ___."

pasos:
  - "Identificar el monto solicitado."
  - "Identificar el porcentaje de equity ofrecido."
  - "Identificar el uso de fondos (Use of Funds)."

explicacion: |
  El 'Ask' no solo debe decir cuánto dinero necesitas, sino también cuánto de la empresa estás dispuesto a ceder y, crucialmente, en qué se va a gastar ese dinero para generar retorno.
```

### 11 — El error del "Solucionismo"

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["pitch", "errores", "inversores"]

enunciado: "Un error común en un pitch es centrarse excesivamente en las características de la solución (el producto) en lugar de enfocarse en el ___ (el problema que se resuelve)."

respuestas_validas:
  - "problema"
respuesta: "problema"
tipo: completar

explicacion: |
  Los inversores buscan resolver problemas reales y dolorosos para un mercado grande. Si tu pitch solo habla de funciones de una app sin explicar el problema que ataca, pierdes el interés del inversor.
```

### 12 — El mito de la exclusividad absoluta

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "basico"
  tags: ["competencia", "pitch"]

enunciado: "Si un emprendedor afirma durante su pitch que 'no tiene competencia en el mercado', ¿es esto una señal positiva o un error?"

opciones_explicitas: ["Es una señal positiva", "Es un error"]
respuesta: "Es un error"
tipo: mc

explicacion: |
  Decir que no hay competencia suele interpretarse como que el emprendedor no ha investigado lo suficiente o que no hay mercado. Siempre hay competencia, ya sea directa o indirecta (sustitutos).
```

### 13 — El enfoque en la tracción

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["metricas", "pitch"]

enunciado: "En un pitch para inversores, ¿es verdadero o falso que la 'tracción' (evidencia de que el producto funciona y hay clientes) es más convincente que una simple idea brillante?"

respuesta: verdadero
tipo: vf

explicacion: |
  La tracción (ventas, usuarios activos, cartas de intención) reduce el riesgo percibido por el inversor. Una idea sin tracción es solo una hipótesis; una idea con tracción es un negocio en marcha.
```

### 14 — Secuencia lógica del Pitch

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["estructura", "pitch"]

opciones_explicitas: ["Problema", "Solución", "Modelo de Negocio", "Equipo", "Call to Action"]
respuesta_orden: ["Problema", "Solución", "Modelo de Negocio", "Equipo", "Call to Action"]
tipo: ordenar

enunciado: "Ordena los elementos de un pitch deck efectivo para que la narrativa sea convincente y lógica:"

explicacion: |
  Un pitch debe seguir un arco narrativo: primero estableces el dolor (Problema), presentas la cura (Solución), explicas cómo ganas dinero (Modelo), demuestras que puedes ejecutarlo (Equipo) y pides lo que necesitas (Call to Action).
```

### 15 — El error de la valoración exagerada

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["valoracion", "finanzas", "pitch"]

variables:
  escenario: uno_de([["La startup tiene 0 ventas y pide 10 millones de dólares", "exagerada"], ["La startup tiene 100 clientes recurrentes y pide 500k dólares", "razonable"]])

enunciado: "Analiza el caso: {escenario[0]}. La valoración o el pedido de capital es ___."

respuestas_validas:
  - "exagerada"
  - "razonable"
respuesta: escenario[1]
tipo: completar

explicacion: |
  Pedir montos desproporcionados a la etapa de tracción actual genera desconfianza. El emprendedor debe demostrar que el capital solicitado es necesario para alcanzar los hitos que justifican la valoración.
```

### 16 — Pitch vs Business Plan

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "basico"
  tags: ["pitch", "business_plan", "inversion"]

respuesta: "Pitch"
tipo: completar
respuestas_validas:
  - "Pitch"

enunciado: "Mientras que el Business Plan es un documento detallado y extenso que describe la estrategia a largo plazo, el ___ es una presentación breve diseñada para captar la atención inmediata del inversor."

explicacion: |
  El Pitch es una herramienta de comunicación rápida y persuasiva, mientras que el Business Plan es un documento operativo y estratégico exhaustivo.
```

### 17 — El objetivo del Pitch

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "basico"
  tags: ["objetivo", "pitch", "inversion"]

respuesta: falso
tipo: vf

enunciado: "¿El objetivo principal de un Pitch es presentar todos los detalles técnicos y financieros de la empresa para cerrar la inversión en ese mismo instante?"

explicacion: |
  Falso. El objetivo de un Pitch no es cerrar la inversión, sino conseguir la siguiente reunión o mostrar suficiente interés para avanzar en el proceso de Due Diligence.
```

### 18 — Elementos de un Pitch Deck

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["pitch_deck", "estructura"]

variables:
  idx: uno_de([0, 1, 2])
  escenario: [["Problema", "Solución", "Modelo de Negocio", "Equipo", "Mercado"], ["Problema", "Propuesta de Valor", "Modelo de Negocio", "Tracción", "Equipo"], ["Problema", "Solución", "Modelo de Negocio", "Competencia", "Equipo"]]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Solución", "Propuesta de Valor", "Competencia", "Equipo"]

enunciado: "En un Pitch Deck efectivo, después de presentar el {escenario[idx][0]}, el siguiente elemento clave debe ser la {escenario[idx][1]}."

explicacion: |
  La secuencia lógica de un pitch busca validar que el problema identificado tiene una solución clara y viable antes de pasar a cómo se gana dinero.
```

### 19 — Elevator Pitch vs Pitch Deck

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["elevator_pitch", "pitch_deck"]

respuesta: "Elevator Pitch"
tipo: completar
respuestas_validas:
  - "Elevator Pitch"

enunciado: "La principal diferencia es la duración y el soporte: mientras que un Pitch Deck es una presentación visual apoyada en diapositivas, el ___ es un discurso verbal de pocos segundos, similar a lo que se diría en un ascensor."

explicacion: |
  El Elevator Pitch es una versión ultra-resumida y verbal, centrada en despertar curiosidad, mientras que el Pitch Deck es una narrativa estructurada con soporte visual.
```

### 20 — Secuencia de un Pitch Ganador

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["estructura", "storytelling"]

respuesta_orden: ["Problema", "Solución", "Modelo de Negocio", "Tracción", "Llamado a la acción"]
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

### 21 — El Elevator Pitch

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "basico"
  tags: ["pitch", "elevator_pitch", "comunicacion"]

variables:
  datos: [["Software de gestión de residuos para PYMES", "resolver el problema de la logística de reciclaje"], ["App de delivery de productos locales", "conectar productores con consumidores finales"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - datos[idx][1]

enunciado: "En un elevator pitch, después de presentar el problema, el emprendedor debe presentar la propuesta de valor para {datos[idx][0]} con el fin de {datos[idx][1]}."

explicacion: |
  El objetivo del pitch es conectar el problema detectado con la solución específica que ofrece tu modelo de negocio de forma rápida.
```

### 22 — El Gancho (The Hook)

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["hook", "atencion", "inversores"]

variables:
  datos: [["Una startup de biotecnología", "revolucionar la medicina preventiva"], ["Una fintech de microcréditos", "democratizar el acceso al capital"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["revolucionar la medicina preventiva", "democratizar el acceso al capital", "ganar dinero rápido", "dominar el mercado global"]

enunciado: "Si estás presentando un caso de {datos[idx][0]}, un buen 'hook' debería enfocarse en la misión de {datos[idx][1]} para captar el interés emocional del inversor."

explicacion: |
  Un buen gancho no se trata solo de rentabilidad, sino del impacto o la transformación que la idea genera en el mercado.
```

### 23 — Validación de la Propuesta

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

### 24 — Estructura del Pitch Deck

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["pitch_deck", "orden", "estructura"]

respuesta_orden: ["Problema", "Solución", "Modelo de Negocio", "Tracción", "Equipo", "El Pedido"]
tipo: ordenar
opciones_explicitas: ["Problema", "Solución", "Modelo de Negocio", "Tracción", "Equipo", "El Pedido"]

enunciado: "Ordena los elementos esenciales de un Pitch Deck efectivo para asegurar un flujo narrativo lógico que lleve al inversor hacia la llamada a la acción."

explicacion: |
  La narrativa debe ir de la necesidad (Problema) a la ejecución (Solución/Modelo/Tracción/Equipo) y finalizar con lo que necesitas (El Pedido/Ask).
```

### 25 — El "Ask" o Pedido de Inversión

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
respuestas_validas:
  - datos[idx][1]

enunciado: "Al presentar el 'Ask' en el pitch, no basta con decir cuánto dinero necesitas; es crucial especificar que el objetivo es {datos[idx][1]} en un plazo de {datos[idx][2]}."

explicacion: |
  Un inversor no solo pone dinero; compra una parte de tu visión. Debe saber exactamente en qué se usará cada centavo y qué hitos se alcanzarán con ello.
```
