### 1 — El error del "Solucionismo"
```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["pitch", "errores", "inversores"]

enunciado: "Un error común en un pitch es centrarse excesivamente en las características de la solución (el producto) en lugar de enfocarse en el ___ (el problema que se resuelve)."

respuestas_validas: ["problema"]
respuesta: "problema"
tipo: completar

explicacion: |
  Los inversores buscan resolver problemas reales y dolorosos para un mercado grande. Si tu pitch solo habla de funciones de una app sin explicar el problema que ataca, pierdes el interés del inversor.
```

### 2 — El mito de la exclusividad absoluta
```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "basico"
  tags: ["competencia", "pitch"]

variables:
  es_error_decir_que_no_hay_competencia: falso

enunciado: "Si un emprendedor afirma durante su pitch que 'no tiene competencia en el mercado', ¿es esto una señal positiva o un error?"

opciones_explicitas: ["Es una señal positiva", "Es un error"]
respuesta: uno_de(["Es una señal positiva", "Es un error"])
tipo: mc

explicacion: |
  Decir que no hay competencia suele interpretarse como que el emprendedor no ha investigado lo suficiente o que no hay mercado. Siempre hay competencia, ya sea directa o indirecta (sustitutos).
```

### 3 — El enfoque en la tracción
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

### 4 — Secuencia lógica del Pitch
```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["estructura", "pitch"]

opciones_explicitas: ["Problema", "Solución", "Modelo de Negocio", "Equipo", "Call to Action"]
respuesta: ["Problema", "Solución", "Modelo de Negocio", "Equipo", "Call to Action"]
tipo: ordenar

enunciado: "Ordena los elementos de un pitch deck efectivo para que la narrativa sea convincente y lógica:"

explicacion: |
  Un pitch debe seguir un arco narrativo: primero estableces el dolor (Problema), presentas la cura (Solución), explicas cómo ganas dinero (Modelo), demuestras que puedes ejecutarlo (Equipo) y pides lo que necesitas (Call to Action).
```

### 5 — El error de la valoración exagerada
```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["valoracion", "finanzas", "pitch"]

variables:
  escenario: uno_de([
    ["La startup tiene 0 ventas y pide 10 millones de dólares", "exagerada"],
    ["La startup tiene 100 clientes recurrentes y pide 500k dólares", "razonable"]
  ])

enunciado: "Analiza el caso: {escenario[0]}. La valoración o el pedido de capital es ___."

respuestas_validas: ["exagerada", "razonable"]
respuesta: escenario[1]
tipo: completar

explicacion: |
  Pedir montos desproporcionados a la etapa de tracción actual genera desconfianza. El emprendedor debe demostrar que el capital solicitado es necesario para alcanzar los hitos que justifican la valoración.
```